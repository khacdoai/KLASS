import React, { useState } from 'react';

export default function DropdownSelect() {
  const [selectedFruit, setSelectedFruit] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFruit(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Exercise 8: Dropdown Selection</h2>
      <select value={selectedFruit} onChange={handleChange}>
        <option value="">-- Chọn trái cây --</option>
        <option value="Táo">Táo</option>
        <option value="Chuối">Chuối</option>
        <option value="Cam">Cam</option>
      </select>

      <p>
        Trái cây đã chọn: {selectedFruit !== '' ? selectedFruit : 'Không có'}
      </p>
    </div>
  );
}
