// app/routes/__root.tsx
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import "@/styles/app.css";
import { Navbar } from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider";
export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Magic TCG Collection Tracker",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <div className="space-y-2">
        <Navbar />
        <Separator />
        <Outlet />
      </div>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
