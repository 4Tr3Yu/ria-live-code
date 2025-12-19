import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Currency Exchange Dashboard',
  description: 'Real-time currency exchange rates and converter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
