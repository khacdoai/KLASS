import useCart from '../useCart';
import type { Product } from '../types';

const productList: Product[] = [
  { id: 1, name: 'Product A', price: 100 },
  { id: 2, name: 'Product B', price: 150 },
  { id: 3, name: 'Product C', price: 200 },
];

export default function ProductList() {
  const { setCart } = useCart();

  const handleAddToCart = (product: Product) => {
    setCart((prev) => [...prev, product]); 
    console.log(`Added ${product.name} ${product.price} to cart`);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">🛍 Product List</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productList.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{p.name}</h3>
            <p className="text-gray-600 text-sm mb-4">Price: <span className="text-blue-600 font-medium">${p.price}</span></p>
            <button
              onClick={() => handleAddToCart(p)}
              className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
