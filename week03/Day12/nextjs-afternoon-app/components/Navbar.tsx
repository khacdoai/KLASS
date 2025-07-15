'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <h1 className="text-xl font-semibold text-blue-600">🚀 Task Navigation</h1>

      <ul className="flex flex-wrap items-center gap-4">
        <li>
          <Link
            href="/task-ssr"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Server-Side Rendering (SSR)
          </Link>
        </li>
        <li>
          <Link
            href="/task-ssg"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Static Site Generation (SSG)
          </Link>
        </li>
        <li>
          <Link
            href="/task-csr"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Client-Side Rendering (CSR)
          </Link>
        </li>
      </ul>
    </nav>
  );
}
