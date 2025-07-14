import useCart from '../useCart';

export default function CartList() {
  const { cart } = useCart();
  console.log('CartList rendered with cart:', cart);

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow-md rounded-xl border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is currently empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition"
            >
              <span className="font-medium text-gray-800">{item.name}</span>
              <span className="text-blue-600 font-semibold">${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
