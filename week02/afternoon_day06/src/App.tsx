import React,{useState} from "react";
import Create from "./components/Create";
import List from "./components/List"
import "tailwindcss";


function App() {
  const [reload, setReload] = React.useState(0);

  const handleOnCreated = (customer: any) => {
    console.log('Customer created:', customer)
    setReload((prev) => prev + 1);
  };

  return (
    <div>
      <Create onCreate={handleOnCreated}/>
      <List reload={reload} />
    </div> 
  )
}

export default App
