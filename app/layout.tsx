import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repute — AI replies for reviews",
  description: "Draft warm, on-brand responses to Google & Yelp reviews in seconds.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
