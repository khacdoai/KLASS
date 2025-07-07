import React, {useState} from 'react'


export default function InputFieldTracker() {
    const [content, setContent] = useState(String);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };
  return (
    <div>
        <h2>Exercise 2: Input Field Tracker</h2>
        <input type="text" placeholder='Type something...' value={content} onChange={handleChange} />
        <p>You typed: {content.trim() === '' ? 'nothing': content }</p>
    </div>
  )
}