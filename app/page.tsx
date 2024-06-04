import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { getWooCommerceProducts } from 'lib/woocommerce';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and WooCommerce.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const products = await getWooCommerceProducts();

  return (
    <>
      <ThreeItemGrid products={products} />
      <Carousel products={products} />
      <Footer />
    </>
  );
}

