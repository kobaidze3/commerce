import { revalidate as revalidateShopify } from 'lib/shopify';
import { revalidate as revalidateWooCommerce } from 'lib/woocommerce';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const shopifyResponse = await revalidateShopify(req);
  const wooCommerceResponse = await revalidateWooCommerce(req);

  if (shopifyResponse.status === 200 && wooCommerceResponse.status === 200) {
    return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
  }

  return NextResponse.json({ status: 500, revalidated: false });
}

