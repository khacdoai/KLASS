import styles from './RenderList01.module.css'


type Props = {
    urlImage?: string;
    content?: string;
    view?: string
}

export default function RenderList01({urlImage, content, view}: Props) {
  return (
    <div className={styles.product}>
        <div>
            <img  className={styles.image} src={urlImage} alt="" />
        </div>
        <div className={styles.info}>
            <div className={styles.content}>{content} </div>
            <div className={styles.view}>{view}</div>
        </div>
        
    </div>
  )
}