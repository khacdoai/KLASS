import  { useEffect, useState } from 'react'
import styles from './Layouts/CategoryPage.module.css'


type Category = {
  id: number
  name: string
}

type Product = {
  id: number
  title: string
  price: number
  images: string[]
}

export default function CategoryPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [page, setPage] = useState(1)

  const limit = 4
  const offset = (page - 1) * limit

  // Load danh mục
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  // Load sản phẩm khi chọn danh mục
  useEffect(() => {
    if (!selectedCategoryId) return
    fetch(`https://api.escuelajs.co/api/v1/categories/${selectedCategoryId}/products?offset=${offset}&limit=${limit}`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [selectedCategoryId, offset])

  const handleCategoryChange = (id: number) => {
    setSelectedCategoryId(id === selectedCategoryId ? null : id)
    setPage(1) // reset về trang 1 nếu chọn danh mục khác
  }

  return (
    <div>
      

      <div className={styles.wrapper}>
        {/* Điều hướng */}
        <div className={styles.navbar}>
          <span>Home</span> / <span>Category</span>
        </div>

        <div className={styles.content}>
          {/* Bộ lọc danh mục */}
          <div className={styles.sidebar}>
            <h3>Bộ lọc</h3>
            {categories.map(cat => (
              <div key={cat.id}>
                <input
                  type="checkbox"
                  id={`cat-${cat.id}`}
                  checked={selectedCategoryId === cat.id}
                  onChange={() => handleCategoryChange(cat.id)}
                />
                <label htmlFor={`cat-${cat.id}`}>{cat.name}</label>
              </div>
            ))}
          </div>

          {/* Danh sách sản phẩm */}
          <div className={styles.productList}>
            <h3>Danh sách sản phẩm</h3>
            <div className={styles.grid}>
              {products.map((product) => (
                <div key={product.id} className={styles.card}>
                  <img src={product.images?.[0]} alt={product.title} />
                  <div className={styles.name}>{product.title}</div>
                  <div className={styles.price}>
                    <span className={styles.newPrice}>{product.price.toLocaleString()}đ</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Phân trang */}
            {selectedCategoryId && (
              <div className={styles.pagination}>
                {[1, 2, 3].map((p) => (
                  <button
                    key={p}
                    className={p === page ? styles.active : ''}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
