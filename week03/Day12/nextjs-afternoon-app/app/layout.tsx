import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Task Render Methods',
  description: 'Next.js App using CSR / SSR / SSG / ISR',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <div className="min-h-screen flex flex-col">
          <header className="shadow-sm border-b bg-white">
            <Navbar />
          </header>
          <main className="flex-grow container mx-auto px-4 py-6">
            {children}
          </main>
          <footer className="text-center text-sm text-gray-500 py-4 border-t bg-white">
          
          </footer>
        </div>
      </body>
    </html>
  );
}
