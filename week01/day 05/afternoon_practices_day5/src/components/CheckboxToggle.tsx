import React, {useState} from 'react'


const CheckboxToggle = () => {
    const [isChecked, setItChecked] = useState(false);
    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItChecked (event.target.checked);
    };
  return (
    <div>
        <h2>Exercise 9: Checkbox Toggle</h2>
        <input type='checkbox' checked={isChecked} onChange={handleChecked}></input>
        <p>Checbox is {isChecked ? 'checked' : 'unchecked'}</p>
    </div>
  )
}

export default CheckboxToggle