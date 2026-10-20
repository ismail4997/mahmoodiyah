import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { QuoteStatus } from '@/types';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const quote = db.getQuoteById(id);
    if (!quote) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, quote });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, adminNotes, adminCustomPriceUSD } = body as {
      status: QuoteStatus;
      adminNotes?: string;
      adminCustomPriceUSD?: number;
    };

    const updated = db.updateQuoteStatus(id, status, adminNotes, adminCustomPriceUSD);
    if (!updated) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, quote: updated });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
