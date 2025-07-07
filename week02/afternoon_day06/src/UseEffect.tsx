import { use, useEffect, useState } from "react"
import React {use, useEffect, useState}  from 'react'

type Props = {}

export default function UseEffect({}: Props) {
    const [users, setUsers] = React.useState ([]);
    const [loading, setloading] = React.useS
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then ((data) => {
        console.log(data)
    })
    console.log('useEffect')
  }, []);  
  return (
    <div>
        <h2> Users</h2>
    </div>
  )
}