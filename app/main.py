# app/main.py

from integrations.woocommerce.woocommerce_integration import WoocommerceIntegration
from config.settings import Settings

def main():
    # Load settings
    settings = Settings()

    # Initialize Woocommerce integration
    woocommerce_integration = WoocommerceIntegration(
        base_url=settings.WOOCOMMERCE_BASE_URL,
        consumer_key=settings.WOOCOMMERCE_CONSUMER_KEY,
        consumer_secret=settings.WOOCOMMERCE_CONSUMER_SECRET
    )

    # Example usage: Fetch orders
    orders = woocommerce_integration.get_orders()
    print(f"Fetched {len(orders)} orders from Woocommerce")

if __name__ == "__main__":
    main()

