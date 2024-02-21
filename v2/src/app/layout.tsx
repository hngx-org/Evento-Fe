import type { Metadata } from 'next';
import '../styles/globals.scss';
import { nunito, montserrat } from '../fonts';

export const metadata: Metadata = {
  title: 'Evento',
  description: 'Event Managemnt Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${nunito.className}`}>{children}</body>
    </html>
  );
}
