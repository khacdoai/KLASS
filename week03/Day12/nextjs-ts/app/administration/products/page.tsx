import Link from 'next/link';
import React from 'react';

import { Product } from '../../../types';

// Server-side rendering to fetch products
// This function will run on the server and fetch data before rendering the page
export const dynamic = 'force-dynamic';

export default async function Index() {
  const response = await fetch('https://server.aptech.io/online-shop/products');
  const products = await response.json();
  return (
    <div className='bg-white rounded-lg shadow p-6'>
      <Products products={products} />
    </div>
  );
}

function Products({ products }: { products: Product[] }) {
  return (
    <div>
      <h1 className='text-2xl font-bold text-gray-800 mb-4'>Products</h1>
      <hr className='mb-4 border-gray-200 border-t' />
      <ul>
        {products.map((product) => (
          <li key={product.id} className='border-b border-gray-200 py-2 text-gray-800'>
            <Link href={`/administration/product-details/${product.id}`} className='text-blue-600 hover:underline'>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}