import  {useState} from 'react'


export default function SearchFilter() {
    const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
    const [isItems, setIsItems] = useState('');
    
    const filterItems = items.filter((item) => 
        item.toUpperCase().includes(isItems.toUpperCase())
    );

  return (
    <div>
        <h2>Exercise 10: SearchFilter</h2>  
        <input type="text" value={isItems} onChange={(e) => {setIsItems(e.target.value)}} />
        <ul>
            {filterItems.map((item, index) => (
                <li key={index} >{item}</li>
            ))}
        </ul>
    </div>
  )
}