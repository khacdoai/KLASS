import styles from './Button4.module.css'

type TButton4Props = {
  avatarUrls: string[];
  title: string;
  subtitle?: string;
  backgroundColor: string;
  textColor?: string;
};


const Button4 = ( {avatarUrls, title, subtitle, backgroundColor,textColor = '#000'} : TButton4Props) => {
  return (
     <div
      className={styles.card}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <div className={styles.avatarGroup}>
        {avatarUrls.map((url, index) => (
          <img key={index} src={url} className={styles.avatar} />
        ))}
      </div>
      <div className={styles.text}>
        <span className={styles.title}>{title}</span>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </div>
    </div>
  )
}

export default Button4