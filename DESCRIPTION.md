# DESCRIPTION.md

# Next.js Commerce

Next.js Commerce is a high-performance ecommerce template built with Next.js, Vercel, and Shopify. It leverages the latest features of Next.js, including the App Router, React Server Components, and Server Actions, to deliver a modern and efficient ecommerce experience.

## Overview

This project is designed to provide a robust and scalable ecommerce solution that can be easily customized and extended. It integrates seamlessly with Shopify to handle product management, checkout, and payments, while utilizing Next.js for the frontend.

## Key Features

- **Next.js App Router**: Utilizes the latest routing capabilities of Next.js for improved performance and scalability.
- **React Server Components (RSCs)**: Enhances the user experience by enabling server-side rendering of components.
- **Server Actions**: Simplifies data mutations and interactions with the backend.
- **Edge Runtime**: Ensures fast and efficient execution of server-side code.
- **Dynamic OG Images**: Automatically generates Open Graph images for better social media sharing.
- **Tailwind CSS**: Provides a utility-first approach to styling, making it easy to create responsive and modern designs.
- **Light/Dark Mode**: Automatically adjusts the theme based on the user's system settings.

## Running Locally

To run the project locally, follow these steps:

1. **Install Vercel CLI**: `npm i -g vercel`
2. **Link Local Instance**: `vercel link`
3. **Download Environment Variables**: `vercel env pull`
4. **Install Dependencies**: `pnpm install`
5. **Start Development Server**: `pnpm dev`

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Environment Variables

You will need to set the following environment variables to run the project:

- `COMPANY_NAME`
- `SHOPIFY_REVALIDATION_SECRET`
- `SHOPIFY_STORE_DOMAIN`
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
- `SITE_NAME`
- `TWITTER_CREATOR`
- `TWITTER_SITE`

It's recommended to use [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables) for managing these variables.

## License

This project is licensed under the MIT License. See the [LICENSE](./license.md) file for more details.

## Contributors

This project is maintained by the Vercel team and a community of open-source contributors. Special thanks to all the contributors who have helped make this project possible.


