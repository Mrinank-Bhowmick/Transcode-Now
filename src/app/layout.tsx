import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "TranscodeNow",
  description: "TranscodeNow is a video transcoder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full relative">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
