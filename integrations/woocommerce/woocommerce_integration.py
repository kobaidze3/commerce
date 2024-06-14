# integrations/woocommerce/woocommerce_integration.py

import logging
from integrations.woocommerce.woocommerce_api import WoocommerceAPI
from config.settings import WOOCOMMERCE_API_KEY, WOOCOMMERCE_API_SECRET, WOOCOMMERCE_API_URL

logger = logging.getLogger(__name__)

class WoocommerceIntegration:
    def __init__(self):
        self.api_client = WoocommerceAPI(
            api_key=WOOCOMMERCE_API_KEY,
            api_secret=WOOCOMMERCE_API_SECRET,
            api_url=WOOCOMMERCE_API_URL
        )
        logger.info("Woocommerce integration initialized.")

    def get_orders(self):
        try:
            orders = self.api_client.get_orders()
            logger.info(f"Fetched {len(orders)} orders from Woocommerce.")
            return orders
        except Exception as e:
            logger.error(f"Error fetching orders: {e}")
            raise

    def create_order(self, order_data):
        try:
            order = self.api_client.create_order(order_data)
            logger.info(f"Created order with ID {order['id']} in Woocommerce.")
            return order
        except Exception as e:
            logger.error(f"Error creating order: {e}")
            raise

    def update_order(self, order_id, order_data):
        try:
            order = self.api_client.update_order(order_id, order_data)
            logger.info(f"Updated order with ID {order_id} in Woocommerce.")
            return order
        except Exception as e:
            logger.error(f"Error updating order: {e}")
            raise

    def delete_order(self, order_id):
        try:
            self.api_client.delete_order(order_id)
            logger.info(f"Deleted order with ID {order_id} in Woocommerce.")
        except Exception as e:
            logger.error(f"Error deleting order: {e}")
            raise

