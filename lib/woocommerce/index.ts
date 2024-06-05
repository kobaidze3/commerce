import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { ensureStartsWith } from 'lib/utils';
import { isWooCommerceError } from 'lib/type-guards';
import { Cart, Product, WooCommerceAddToCartOperation, WooCommerceCart, WooCommerceCartOperation, WooCommerceProduct, WooCommerceProductOperation, WooCommerceUpdateCartOperation } from './types';

const storeUrl = process.env.WOOCOMMERCE_STORE_URL ? ensureStartsWith(process.env.WOOCOMMERCE_STORE_URL, 'https://') : '';
const consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY!;
const consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET!;

const api = new WooCommerceRestApi({
  url: storeUrl,
  consumerKey: consumerKey,
  consumerSecret: consumerSecret,
  version: 'wc/v3'
});

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await api.get('products');
    return response.data;
  } catch (error) {
    if (isWooCommerceError(error)) {
      throw {
        cause: error.cause?.toString() || 'unknown',
        status: error.status || 500,
        message: error.message
      };
    }
    throw error;
  }
}

export async function createCart(): Promise<Cart> {
  try {
    const response = await api.post('cart');
    return response.data;
  } catch (error) {
    if (isWooCommerceError(error)) {
      throw {
        cause: error.cause?.toString() || 'unknown',
        status: error.status || 500,
        message: error.message
      };
    }
    throw error;
  }
}

export async function addToCart(cartId: string, items: WooCommerceAddToCartOperation[]): Promise<Cart> {
  try {
    const response = await api.post(`cart/${cartId}/items`, { items });
    return response.data;
  } catch (error) {
    if (isWooCommerceError(error)) {
      throw {
        cause: error.cause?.toString() || 'unknown',
        status: error.status || 500,
        message: error.message
      };
    }
    throw error;
  }
}

export async function updateCart(cartId: string, items: WooCommerceUpdateCartOperation[]): Promise<Cart> {
  try {
    const response = await api.put(`cart/${cartId}/items`, { items });
    return response.data;
  } catch (error) {
    if (isWooCommerceError(error)) {
      throw {
        cause: error.cause?.toString() || 'unknown',
        status: error.status || 500,
        message: error.message
      };
    }
    throw error;
  }
}

export async function getCart(cartId: string): Promise<Cart | undefined> {
  try {
    const response = await api.get(`cart/${cartId}`);
    return response.data;
  } catch (error) {
    if (isWooCommerceError(error)) {
      throw {
        cause: error.cause?.toString() || 'unknown',
        status: error.status || 500,
        message: error.message
      };
    }
    throw error;
  }
}

export async function getProduct(productId: string): Promise<Product | undefined> {
  try {
    const response = await api.get(`products/${productId}`);
    return response.data;
  } catch (error) {
    if (isWooCommerceError(error)) {
      throw {
        cause: error.cause?.toString() || 'unknown',
        status: error.status || 500,
        message: error.message
      };
    }
    throw error;
  }
}

