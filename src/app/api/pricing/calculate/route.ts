import { NextResponse } from 'next/server';
import { calculateQuotePrice } from '@/lib/pricing-engine';
import { QuoteConfiguration } from '@/types';

export async function POST(request: Request) {
  try {
    const config: QuoteConfiguration = await request.json();
    if (!config || !config.category || !config.productTypeId) {
      return NextResponse.json({ error: 'Invalid configuration parameters' }, { status: 400 });
    }

    const result = calculateQuotePrice(config);
    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Calculation failed' }, { status: 500 });
  }
}
