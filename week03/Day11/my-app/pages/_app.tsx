import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
     <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-2xl font-bold text-gray-900 tracking-tight">
            <Link href="/">MyApp</Link>
          </div>
          <ul className="flex space-x-6 text-base font-medium">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            </li>   
            <li>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-600 transition-colors">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>

  );
 
}
