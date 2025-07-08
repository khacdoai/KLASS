import { useEffect, useState } from 'react'
import Pagination from './Pagination'
import styles from './ProductGrid.module.css'

type Props = {
  categoryId: number | null
}

export default function ProductGrid({ categoryId }: Props) {
  const [products, setProducts] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const limit = 4

  useEffect(() => {
    if (!categoryId) return
    const offset = (page - 1) * limit
    fetch(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products?offset=${offset}&limit=${limit}`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [categoryId, page])

  if (!categoryId) return <p>Chọn danh mục để hiển thị sản phẩm.</p>

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {products.map(p => (
          <div key={p.id} className={styles.card}>
            <img src={p.images[0]} alt={p.title} />
            <div className={styles.title}>{p.title}</div>
            <div className={styles.price}>{p.price.toLocaleString()}đ</div>
          </div>
        ))}
      </div>
      <Pagination currentPage={page} onChange={setPage} />
    </div>
  )
}
