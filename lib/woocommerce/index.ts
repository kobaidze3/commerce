import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// Initialize WooCommerce API client
const api = new WooCommerceRestApi({
  url: process.env.WOOCOMMERCE_STORE_URL,
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY,
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET,
  version: "wc/v3"
});

// Fetch a single product by its ID
export const getProduct = async (id: number) => {
  try {
    const response = await api.get(`products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

// Fetch a collection of products
export const getCollection = async (params = {}) => {
  try {
    const response = await api.get("products", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching collection:", error);
    throw error;
  }
};

// Retrieve the current cart
export const getCart = async () => {
  try {
    const response = await api.get("cart");
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

// Add an item to the cart
export const addToCart = async (productId: number, quantity: number) => {
  try {
    const response = await api.post("cart/add", {
      product_id: productId,
      quantity
    });
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

// Update an item in the cart
export const updateCart = async (cartItemKey: string, quantity: number) => {
  try {
    const response = await api.post(`cart/update/${cartItemKey}`, {
      quantity
    });
    return response.data;
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
};

// Remove an item from the cart
export const removeFromCart = async (cartItemKey: string) => {
  try {
    const response = await api.post(`cart/remove/${cartItemKey}`);
    return response.data;
  } catch (error) {
    console.error("Error removing from cart:", error);
    throw error;
  }
};

