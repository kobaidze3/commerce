import { WOOCOMMERCE_STORE_URL, WOOCOMMERCE_CONSUMER_KEY, WOOCOMMERCE_CONSUMER_SECRET } from 'lib/constants';
import fetch from 'node-fetch';

const auth = Buffer.from(`${WOOCOMMERCE_CONSUMER_KEY}:${WOOCOMMERCE_CONSUMER_SECRET}`).toString('base64');

async function createCart() {
  const response = await fetch(`${WOOCOMMERCE_STORE_URL}/wp-json/wc/v3/cart`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to create cart');
  }

  return response.json();
}

async function addToCart(cartId: string, productId: number, quantity: number) {
  const response = await fetch(`${WOOCOMMERCE_STORE_URL}/wp-json/wc/v3/cart/${cartId}/items`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product_id: productId,
      quantity: quantity
    })
  });

  if (!response.ok) {
    throw new Error('Failed to add item to cart');
  }

  return response.json();
}

async function updateCart(cartId: string, itemId: string, quantity: number) {
  const response = await fetch(`${WOOCOMMERCE_STORE_URL}/wp-json/wc/v3/cart/${cartId}/items/${itemId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      quantity: quantity
    })
  });

  if (!response.ok) {
    throw new Error('Failed to update cart item');
  }

  return response.json();
}

async function removeFromCart(cartId: string, itemId: string) {
  const response = await fetch(`${WOOCOMMERCE_STORE_URL}/wp-json/wc/v3/cart/${cartId}/items/${itemId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to remove item from cart');
  }

  return response.json();
}

export { createCart, addToCart, updateCart, removeFromCart };

