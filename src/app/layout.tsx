import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/trpc/react";
import TransitionProvider from "./_components/transitionProvider";
import { ThemeProvider } from "./_components/themeprovider";
import { ModeToggle } from "./_components/ToggleTheme";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="dracula"
            enableSystem={false}
            storageKey="notes-theme"
          >
            <ModeToggle></ModeToggle>
            <TransitionProvider>{children}</TransitionProvider>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
