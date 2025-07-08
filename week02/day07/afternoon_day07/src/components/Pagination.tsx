type Props = {
  currentPage: number
  onChange: (page: number) => void
}

export default function Pagination({ currentPage, onChange }: Props) {
  return (
    <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
      {[1, 2, 3].map(n => (
        <button
          key={n}
          style={{
            backgroundColor: currentPage === n ? 'orange' : 'white',
            border: '1px solid #ccc',
            borderRadius: 4,
            padding: '4px 12px'
          }}
          onClick={() => onChange(n)}
        >
          {n}
        </button>
      ))}
    </div>
  )
}
