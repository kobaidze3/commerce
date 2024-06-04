import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// Initialize WooCommerce API client
const api = new WooCommerceRestApi({
  url: process.env.WOOCOMMERCE_STORE_URL,
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY,
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET,
  version: "wc/v3"
});

// Fetch Products
export async function getProducts() {
  try {
    const response = await api.get("products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Could not fetch products");
  }
}

// Fetch Collections
export async function getCollections() {
  try {
    const response = await api.get("products/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching collections:", error);
    throw new Error("Could not fetch collections");
  }
}

// Create Cart
export async function createCart() {
  try {
    const response = await api.post("cart/create");
    return response.data;
  } catch (error) {
    console.error("Error creating cart:", error);
    throw new Error("Could not create cart");
  }
}

// Add to Cart
export async function addToCart(cartId, productId, quantity) {
  try {
    const response = await api.post(`cart/${cartId}/add`, {
      product_id: productId,
      quantity: quantity
    });
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw new Error("Could not add to cart");
  }
}

// Remove from Cart
export async function removeFromCart(cartId, itemId) {
  try {
    const response = await api.delete(`cart/${cartId}/remove/${itemId}`);
    return response.data;
  } catch (error) {
    console.error("Error removing from cart:", error);
    throw new Error("Could not remove from cart");
  }
}

// Update Cart
export async function updateCart(cartId, itemId, quantity) {
  try {
    const response = await api.put(`cart/${cartId}/update/${itemId}`, {
      quantity: quantity
    });
    return response.data;
  } catch (error) {
    console.error("Error updating cart:", error);
    throw new Error("Could not update cart");
  }
}

