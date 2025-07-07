import React, {useState} from 'react'



const KeyPressDisplay = () => {
  const [text, setText] = useState('');
  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setText(event.key)
  }  
  return (
    <div>
        <h2>Exercise 6: Key Press Display</h2>
        <input type='text' onKeyUp={handleKey} value={text}></input>
        <p>Last key: {text}</p>
    </div>
  )
}

export default KeyPressDisplay