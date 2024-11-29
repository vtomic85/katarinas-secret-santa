import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katarina's Secret Santa",
  description: "Make your way through the puzzles to find your gift!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
