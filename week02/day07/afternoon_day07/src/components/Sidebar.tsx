import { useEffect, useState } from 'react'

type Props = {
  onCategorySelect: (id: number | null) => void
}

export default function Sidebar({ onCategorySelect }: Props) {
  const [categories, setCategories] = useState<any[]>([])
  const [checked, setChecked] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  const handleChange = (id: number) => {
    const newChecked = id === checked ? null : id
    setChecked(newChecked)
    onCategorySelect(newChecked)
  }

  return (
    <aside>
      <h3>Bộ lọc</h3>
      {categories.map((cat) => (
        <div key={cat.id}>
          <input
            type="checkbox"
            checked={checked === cat.id}
            onChange={() => handleChange(cat.id)}
          />
          <label>{cat.name}</label>
        </div>
      ))}
    </aside>
  )
}
