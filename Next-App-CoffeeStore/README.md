
---

# Next-App-CoffeeStore ☕️🛒

## 🌟 Description

Step into the world of coffee with Next-App-CoffeeStore! Built with Next.js, this app offers a seamless coffee shopping experience. ☕️🌟


## 📚 Table of Contents

- [🔑 Environment Variables](#environment-variables)
- [🚫 Common Errors](#common-errors)
- [🚀 Getting Started](#getting-started)
- [📚 Learn More](#learn-more)
- [🚀 Deploy on Vercel](#deploy-on-vercel)

## 🔑 Environment Variables

Before running the app, you need to configure some environment variables. Create a `.env.local` file in the project root and include the following:

\```
NEXT_PUBLIC_FOURSQUARE_API_KEY=<value>
AIRTABLE_API_KEY=<value>
AIRTABLE_BASE_KEY=<value>
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=<value>
\```

⚠️ **Important:** Get your API keys from [Foursquare](https://foursquare.com/), [Airtable](https://www.airtable.com/), and [Unsplash](https://unsplash.com/). Follow the [course guide](https://bit.ly/3nRIsbi) if you need help.

## 🚫 Common Errors

### Node.js Version Issue

If you're using Node.js version greater than 16, you might encounter an error related to the Fetch API. [See details](https://github.com/vercel/next.js/issues/37300).

**Solution:** Downgrade to Node.js version 16.

### Missing Environment Variables

If your `.env.local` file is missing or incomplete, you'll get an error like below:

![Error Screenshot](https://res.cloudinary.com/dkfnd7xy7/image/upload/v1659022098/Screen_Shot_2022-07-28_at_11.27.20_AM_l5apuq.png)

## 🚀 Getting Started

Run the development server:

\```bash
npm run dev
# or
yarn dev
\```

Navigate to [http://localhost:3000](http://localhost:3000) to see the app.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## 🚀 Deploy on Vercel

For easy deployment, use [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). [More info on deployment](https://nextjs.org/docs/deployment).

---
