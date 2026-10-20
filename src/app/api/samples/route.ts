import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { SampleRequest } from '@/types';

export async function GET() {
  try {
    const samples = db.getSamples();
    return NextResponse.json({ success: true, samples });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { category, productTypeId, productTypeName, customer, dimensions, quantity, referenceFileName } = body;

    if (!category || !customer || !customer.name || !customer.email) {
      return NextResponse.json({ error: 'Missing required sample request details' }, { status: 400 });
    }

    const sample = db.createSampleRequest({
      category,
      productTypeId,
      productTypeName: productTypeName || 'Custom Sample',
      dimensions,
      quantity: quantity || 1,
      customer,
      referenceFileName,
      status: 'New'
    });

    return NextResponse.json({ success: true, sample });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
