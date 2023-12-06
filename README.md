<img src="/public/github-img.jpg" width="200">

# DocStore

This is a [Next.js 14](https://nextjs.org/) project.

## Components and Documents used for this project:
- [React](https://react.dev/)
- [Clerk](https://clerk.com/) : Authentication and user management
- [Shadcn](https://ui.shadcn.com/)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)
- CRUD : (Create, Read, Update and Delete)
- Drag/Drop

## Getting Started with Next.js

First, install the Next.js React framework in your terminal.

```bash
% npx create-next-app@latest
```
You will be prompted to create a project name. After that accept all the dependences as they are. When done, `cd` into your project.

Now run the following in your terminal to start the live server. 

```bash
% npm run dev
```

Once installed open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Install and configure Clerk

Go to [Clerk](https://clerk.com/) and create an account. Then run the following command in your terminal.
```bash
% npm install@clerk/nextjs
```

Next create an `.env.local` file in the root directory of you project and add your Clerk envirment keys.  They will look like this.

```bash 
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cHJlY2lzZS1saW9uZXNzLTQ3LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=*********************************
```
This sets your public and secret keys.

Add the following code to you `layout.tsx` file.

```bash
import { ClerkProvider } from '@clerk/nextjs'
```
Than update your `layout.tsx` file to include the `clerkProvider`.

<img src="/public/carbon.png" width="500">

## Add Clerk Middleware file.
This will require authentication to access your app.
First create a `middleware.ts` file in the root directory and past the following code inside it.
```bash
import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
