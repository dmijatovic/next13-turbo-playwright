# Next 13 and Playwright

## Playwright

End-to-end testing tool.

### Instalation Playwright

```bash
# install Playwright test
npm i -D @playwright/test
# install browsers
npx playwright install
```

### Remarks Playwright

Base folder is `tests` in the root. To change settings create [playwright.config.ts file](https://playwright.dev/docs/test-configuration#basic-options)

### Selectors

All CSS selectors plus select by text value and Xpath support

```typescript
// click on button with text value
await page.click("tekst=some text")
// CSS selectors
await page.click("button")
await page.click("#id")
await page.click(".class")
// only visible button
await page.click("button:visible")

// combination -> button with myId and myClass
await page.click("buitton #myId .myClass)

```

### Inputs

## Next 13 Turbo

### Instalation next 13

```bash
# use wizz
npx create-next-app@latest --experimental-app

```

- manual installation

```bash
# manual install of latest next (13)
npm install next@latest react@latest react-dom@latest eslint-config-next@latest

```

## Vercel readme

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
