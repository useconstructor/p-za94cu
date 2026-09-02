import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788380583679',
  description: 'GreenLife Nutrition is a premium healthy eating platform combining e-commerce for organic supplements, educational blog content, personalized nutrition consulting, and subscription meal plans—all designed to remove decision fatigue for health-conscious consumers.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#FFFFFF', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
