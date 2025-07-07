import React from 'react'
import styles from './SuperButton.module.css'
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoReload } from 'react-icons/io5';



type Props = {
  children?: React.ReactNode
  loading?: boolean;
  disabled?:boolean;
  icon?: React.ReactNode;
}

export default function SuperButton({children, loading}: Props) {
  return (
    <button className={styles.buttonContainer}>
    {loading && <IoReload className={styles.iconAnimation} />}
    {children}
  
    </button>
  )
}