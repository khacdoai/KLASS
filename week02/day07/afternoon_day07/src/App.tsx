import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'
import LoginPage from './pages/LoginPage'
import CustomerPage from './pages/CustomerPage'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/customer" element={<CustomerPage />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
