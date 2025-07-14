import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BuyerForm from './components/BuyerForm';
import CartList from './pages/CartList';
import CartProvider from './pages/CartProvider';
import ProductList from './pages/ProductList';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>

        <nav className="bg-white shadow-md border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-700">🛒 My Shop</h1>
            <div className="space-x-6">
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-800 font-medium transition"
              >
                Home
              </Link>
              <Link
                to="/cart"
                className="text-blue-600 hover:text-blue-800 font-medium transition"
              >
                Cart
              </Link>
            </div>
          </div>
        </nav>


        <main className="bg-gray-50 min-h-screen py-10 px-4">
          <Routes>
            <Route path="/" element={<ProductList />} />

    
            <Route
              path="/cart"
              element={
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 mt-6 items-start">
                  <div className="w-full">
                    <CartList />
                  </div>
                  <div className="w-full">
                    <BuyerForm />
                  </div>
                </div>
              }
            />
          </Routes>
        </main>
      </CartProvider>
    </BrowserRouter>
  );
}
