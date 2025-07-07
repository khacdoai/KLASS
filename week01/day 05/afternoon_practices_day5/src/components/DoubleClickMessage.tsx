import {useState} from 'react'


const DoubleClickMessage = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handleDoubleClick = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false)
        }, 2000)
    };

  return (
    <div>
        <h2>Exercise 7: Double Click Message</h2>
        <button onDoubleClick={handleDoubleClick}>Double click me</button>
        {showMessage && <p>Double-Click!</p>}
    </div>
  )
}
export default DoubleClickMessage