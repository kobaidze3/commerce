# Project Name

Next.js Commerce

## Description

Next.js Commerce is a modern e-commerce template built with Next.js 14, featuring a range of advanced features such as React Server Components, Edge Runtime, and more. It is designed to integrate seamlessly with Shopify for checkout and payments.

## Setup Instructions

To run the project locally, follow these steps:

1. **Install Vercel CLI**: 
   ```bash
   npm i -g vercel
   ```

2. **Link Local Instance**: 
   Connect your local instance with Vercel and GitHub accounts. This will create a `.vercel` directory.
   ```bash
   vercel link
   ```

3. **Download Environment Variables**: 
   Pull the necessary environment variables from Vercel.
   ```bash
   vercel env pull
   ```

4. **Install Dependencies**: 
   Use pnpm to install the project dependencies.
   ```bash
   pnpm install
   ```

5. **Run the Development Server**: 
   Start the development server.
   ```bash
   pnpm dev
   ```

Your application should now be running on [localhost:3000](http://localhost:3000/).

