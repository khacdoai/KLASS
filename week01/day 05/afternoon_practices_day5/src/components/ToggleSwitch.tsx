import {useState} from 'react'

export const ToggleSwitch = () => {
    const [isOn, setItOn] = useState(false);

    const handleToggle = () => {
        setItOn((prev) => !prev);
    }    
  return (
    <div>
        <h2>Exercise 3: Toggle Switch</h2>
        <button onClick={handleToggle}>{isOn ? 'Turn OFF' : 'Turn ON'}</button>
        <p onClick={handleToggle}>{isOn ? 'ON' : 'OFF'}</p>
    </div>
  )
}
