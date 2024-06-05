import { ensureStartsWith } from 'lib/utils';

const WOOCOMMERCE_STORE_URL = process.env.WOOCOMMERCE_STORE_URL;
const WOOCOMMERCE_CONSUMER_KEY = process.env.WOOCOMMERCE_CONSUMER_KEY;
const WOOCOMMERCE_CONSUMER_SECRET = process.env.WOOCOMMERCE_CONSUMER_SECRET;

if (!WOOCOMMERCE_STORE_URL || !WOOCOMMERCE_CONSUMER_KEY || !WOOCOMMERCE_CONSUMER_SECRET) {
  throw new Error('Missing WooCommerce environment variables');
}

const baseUrl = ensureStartsWith(WOOCOMMERCE_STORE_URL, 'https://');

export const getProductsEndpoint = `${baseUrl}/wp-json/wc/v3/products?consumer_key=${WOOCOMMERCE_CONSUMER_KEY}&consumer_secret=${WOOCOMMERCE_CONSUMER_SECRET}`;
export const getProductEndpoint = (id: string) => `${baseUrl}/wp-json/wc/v3/products/${id}?consumer_key=${WOOCOMMERCE_CONSUMER_KEY}&consumer_secret=${WOOCOMMERCE_CONSUMER_SECRET}`;
export const getCollectionsEndpoint = `${baseUrl}/wp-json/wc/v3/products/categories?consumer_key=${WOOCOMMERCE_CONSUMER_KEY}&consumer_secret=${WOOCOMMERCE_CONSUMER_SECRET}`;
export const getCollectionProductsEndpoint = (categoryId: string) => `${baseUrl}/wp-json/wc/v3/products?category=${categoryId}&consumer_key=${WOOCOMMERCE_CONSUMER_KEY}&consumer_secret=${WOOCOMMERCE_CONSUMER_SECRET}`;
export const getPagesEndpoint = `${baseUrl}/wp-json/wp/v2/pages?consumer_key=${WOOCOMMERCE_CONSUMER_KEY}&consumer_secret=${WOOCOMMERCE_CONSUMER_SECRET}`;
export const getPageEndpoint = (id: string) => `${baseUrl}/wp-json/wp/v2/pages/${id}?consumer_key=${WOOCOMMERCE_CONSUMER_KEY}&consumer_secret=${WOOCOMMERCE_CONSUMER_SECRET}`;

