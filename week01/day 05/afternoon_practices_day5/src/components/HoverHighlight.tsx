import {useState} from 'react'


export default function HoverHighlight() {
    const [isHover,setItHover] = useState(false);
    const handleMouseEnter = () => setItHover(true);
   const handleMouseLeave = () => setItHover(false);
    const divStyle = {
    width: '200px',
    height: '100px',
    backgroundColor: isHover ? 'yellow' : 'white',
    border: '1px solid #ccc',
    textAlign: 'center' as const,
    lineHeight: '100px',
    margin: '40px auto',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };
    const textStyle = {
      color : isHover ? 'yellow' : 'white'
    }
  return (
    <div>
        <h2>Exercise 4: Hover Highlight</h2>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={divStyle}></div>
        <div style={textStyle}>Hover me!</div>
    </div>
  )
}