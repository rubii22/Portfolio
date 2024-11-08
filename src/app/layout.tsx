// src/app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar';
import { LayoutRouter } from 'next/dist/server/app-render/entry-base';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my personal portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
