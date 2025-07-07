import React, {useState} from 'react'


export default function FormSubmissionAlert() {
  // const text = "";
  const [onSubmit,setOnSubmit] = useState('');
  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOnSubmit(event.target.value);
  }
  const handleSubmit = () =>{
      alert(onSubmit)
      setOnSubmit('');
  }  
  return (
    <div>
        <h2>Exercise 5: Form Submission Alert</h2>
        <input type='text' value={onSubmit} onChange={handleOnchange}></input>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}