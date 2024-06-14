# config/settings.py

import os

class Config:
    """Base configuration."""

    # Woocommerce API settings
    WOOCOMMERCE_API_URL = os.getenv('WOOCOMMERCE_API_URL', 'https://your-woocommerce-site.com/wp-json/wc/v3')
    WOOCOMMERCE_CONSUMER_KEY = os.getenv('WOOCOMMERCE_CONSUMER_KEY', 'your_consumer_key')
    WOOCOMMERCE_CONSUMER_SECRET = os.getenv('WOOCOMMERCE_CONSUMER_SECRET', 'your_consumer_secret')

class DevelopmentConfig(Config):
    """Development configuration."""
    DEBUG = True

class TestingConfig(Config):
    """Testing configuration."""
    TESTING = True
    DEBUG = True

class ProductionConfig(Config):
    """Production configuration."""
    DEBUG = False

# Dictionary to map environment names to configuration classes
config_by_name = dict(
    dev=DevelopmentConfig,
    test=TestingConfig,
    prod=ProductionConfig
)

# Default configuration
config = config_by_name[os.getenv('FLASK_ENV', 'dev')]

