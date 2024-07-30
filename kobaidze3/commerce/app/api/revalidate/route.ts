import { revalidate } from 'lib/shopify';
import { NextRequest, NextResponse } from 'next/server';
import { implement } from './implement';

export async function POST(req: NextRequest): Promise<NextResponse> {
  // Call the implement function to handle the request
  return implement(req);
}

