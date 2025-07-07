import React from 'react'

function Button({Text,width , style}){
    return <button style={{width, ...style,}}>{Text} </button>
}

export default function PropDataTypes() {
  return (
    <div>
        <Button Text='Click Me!' width={100} disabled={false} 
        style={{backgroundColor: 'blue'}} />
    </div>
  )
}
