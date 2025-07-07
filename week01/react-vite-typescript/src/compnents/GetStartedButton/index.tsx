import { ArrowRight } from 'lucide-react';
import styles from './GetStartedButton.module.css'

const GetStartedButton = ()=>{
    return (
        <button className={styles.button}>Get started<span><ArrowRight size={20}></ArrowRight></span> </button>
    )
}

export default GetStartedButton