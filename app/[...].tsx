import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import WooCommerceProvider from 'providers/woocommerce-provider';
import ShopifyProvider from 'providers/shopify-provider';
import BigCommerceProvider from 'providers/bigcommerce-provider';
import EcwidProvider from 'providers/ecwid-provider';

const ProviderWrapper = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const { query } = router;
    const selectedProvider = query.provider;

    switch (selectedProvider) {
      case 'woocommerce':
        setProvider(<WooCommerceProvider>{children}</WooCommerceProvider>);
        break;
      case 'shopify':
        setProvider(<ShopifyProvider>{children}</ShopifyProvider>);
        break;
      case 'bigcommerce':
        setProvider(<BigCommerceProvider>{children}</BigCommerceProvider>);
        break;
      case 'ecwid':
        setProvider(<EcwidProvider>{children}</EcwidProvider>);
        break;
      default:
        setProvider(<ShopifyProvider>{children}</ShopifyProvider>);
    }
  }, [router.query]);

  return provider;
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <ProviderWrapper>
      <Component {...pageProps} />
    </ProviderWrapper>
  );
};

export default MyApp;

