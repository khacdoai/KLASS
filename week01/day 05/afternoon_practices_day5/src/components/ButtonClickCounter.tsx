import {useState} from 'react'

const ButtonClickCounter = () => {
  const [count, setcount] = useState(0);
  const handleToggle = ()=> {
    setcount(count + 1);
  };
  return (
    <div>
        <h2>Exercise 1: Button Click Counter</h2>
    <button onClick={handleToggle} >Click Me!</button>
    <p>Clicked: {count} times</p>
    </div>
  )
}

export default ButtonClickCounter