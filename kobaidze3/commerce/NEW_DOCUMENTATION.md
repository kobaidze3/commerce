# Next.js Commerce Documentation

## Project Details

Next.js Commerce is a modern e-commerce template built with Next.js 14 and optimized for SEO. It features React Server Components (RSCs), Suspense, Server Actions for mutations, Edge Runtime, and dynamic OG images. The project is styled using Tailwind CSS and integrates with Shopify for checkout and payments.

### Key Features

- **Next.js App Router**: Utilizes the latest Next.js features for optimal performance.
- **SEO Optimization**: Leverages Next.js's Metadata for improved SEO.
- **React Server Components**: Enhances performance with server-side rendering.
- **Server Actions**: Simplifies data mutations with server-side actions.
- **Edge Runtime**: Ensures fast response times with edge computing.
- **Dynamic OG Images**: Generates dynamic Open Graph images for better social media sharing.
- **Tailwind CSS**: Provides a utility-first approach to styling.
- **Shopify Integration**: Seamlessly integrates with Shopify for e-commerce functionality.
- **Automatic Light/Dark Mode**: Adapts to the user's system settings for light or dark mode.

## Setup Instructions

To set up the project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/kobaidze3/commerce.git
   cd commerce
   ```

2. **Install Dependencies**

   Ensure you have [pnpm](https://pnpm.io/) installed. Then, run:

   ```bash
   pnpm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the necessary environment variables. Refer to the `.env.example` file for the required variables:

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your Shopify store details and other required information.

4. **Run the Development Server**

   Start the development server:

   ```bash
   pnpm dev
   ```

   Your app should now be running on [http://localhost:3000](http://localhost:3000).

## Additional Information

### Environment Variables

The following environment variables are required for the project:

- `COMPANY_NAME`: The name of your company.
- `SHOPIFY_REVALIDATION_SECRET`: The secret key for Shopify revalidation.
- `SHOPIFY_STORE_DOMAIN`: The domain of your Shopify store.
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN`: The access token for Shopify Storefront API.
- `SITE_NAME`: The name of your site.
- `TWITTER_CREATOR`: The Twitter handle of the content creator.
- `TWITTER_SITE`: The Twitter handle of the site.

### Deployment

The project is optimized for deployment on Vercel. To deploy the project, click the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fcommerce&project-name=commerce&repo-name=commerce&demo-title=Next.js%20Commerce&demo-url=https%3A%2F%2Fdemo.vercel.store&demo-image=https%3A%2F%2Fbigcommerce-demo-asset-ksvtgfvnd.vercel.app%2Fbigcommerce.png&env=COMPANY_NAME,SHOPIFY_REVALIDATION_SECRET,SHOPIFY_STORE_DOMAIN,SHOPIFY_STOREFRONT_ACCESS_TOKEN,SITE_NAME,TWITTER_CREATOR,TWITTER_SITE)

### Further Documentation

For more detailed information, refer to the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shopify Storefront API Documentation](https://shopify.dev/docs/storefront-api)
- [Vercel Documentation](https://vercel.com/docs)


