import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import "./tailwind.css";
import "./index.css";
import React from "react";
import { Toaster } from "react-hot-toast";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/ >
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/ >

        <link rel="manifest" href="/manifest.webmanifest"/ >
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/ >
        <meta name="msapplication-TileColor" content="#da532c"/ >
        <meta name="theme-color" content="#ffffff"/ >
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="OpenHands: Code Less, Make More"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <Toaster />
      </body>
    </html>
  );
}

export const meta: MetaFunction = () => [
  { title: "Intern" },
  { name: "description", content: "Tell me what you need and I will vibe it out" }
];

export default function App() {
  return <Outlet />;
}
