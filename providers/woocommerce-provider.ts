import { getProducts, getProduct, createCart, addToCart, getCart, updateCart, removeFromCart } from 'lib/woocommerce';
import type { Product, Cart, CartItem } from 'lib/woocommerce/types';

// Function to fetch all products
export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const products = await getProducts();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Could not fetch products');
  }
}

// Function to fetch a single product by ID
export async function fetchProductById(productId: string): Promise<Product> {
  try {
    const product = await getProduct(productId);
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw new Error('Could not fetch product');
  }
}

// Function to create a new cart
export async function createNewCart(): Promise<Cart> {
  try {
    const cart = await createCart();
    return cart;
  } catch (error) {
    console.error('Error creating cart:', error);
    throw new Error('Could not create cart');
  }
}

// Function to add an item to the cart
export async function addItemToCart(cartId: string, productId: string, quantity: number): Promise<Cart> {
  try {
    const cart = await addToCart(cartId, [{ productId, quantity }]);
    return cart;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw new Error('Could not add item to cart');
  }
}

// Function to fetch the cart by ID
export async function fetchCartById(cartId: string): Promise<Cart> {
  try {
    const cart = await getCart(cartId);
    return cart;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw new Error('Could not fetch cart');
  }
}

// Function to update the quantity of an item in the cart
export async function updateCartItemQuantity(cartId: string, itemId: string, quantity: number): Promise<Cart> {
  try {
    const cart = await updateCart(cartId, [{ id: itemId, quantity }]);
    return cart;
  } catch (error) {
    console.error('Error updating cart item quantity:', error);
    throw new Error('Could not update cart item quantity');
  }
}

// Function to remove an item from the cart
export async function removeItemFromCart(cartId: string, itemId: string): Promise<Cart> {
  try {
    const cart = await removeFromCart(cartId, [itemId]);
    return cart;
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw new Error('Could not remove item from cart');
  }
}

