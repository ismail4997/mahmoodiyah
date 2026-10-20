import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { calculateQuotePrice } from '@/lib/pricing-engine';
import { QuoteConfiguration, QuoteCustomer } from '@/types';

export async function GET() {
  try {
    const quotes = db.getQuotes();
    return NextResponse.json({ success: true, quotes });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { config, customer } = body as { config: QuoteConfiguration; customer: QuoteCustomer };

    if (!config || !customer || !customer.name || !customer.email) {
      return NextResponse.json({ error: 'Missing required customer contact or config data' }, { status: 400 });
    }

    const calculationResult = calculateQuotePrice(config);

    const newQuote = db.createQuote({
      config,
      result: calculationResult,
      customer,
      status: 'New'
    });

    return NextResponse.json({ success: true, quote: newQuote });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
