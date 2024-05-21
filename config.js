const config = {
  providers: {
    woocommerce: {
      storeUrl: process.env.WOOCOMMERCE_STORE_URL,
      consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY,
      consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET
    }
  }
};

module.exports = config;
```

This code sets up the configuration for WooCommerce by reading the necessary environment variables and exporting them in a structured format. This will allow other parts of the application to access WooCommerce settings easily.

### Review:
- The file `config.js` is created.
- WooCommerce-specific environment variables are included.
- The configuration object is structured and exported correctly.

### Final Output:
Code:
```
const config = {
  providers: {
    woocommerce: {
      storeUrl: process.env.WOOCOMMERCE_STORE_URL,
      consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY,
      consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET
    }
  }
};

module.exports = config;

