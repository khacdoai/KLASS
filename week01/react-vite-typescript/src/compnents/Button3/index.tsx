import styles from './Button3.module.css'

type TButton3Props = {
  avatar?: string;         // dùng cho avatar tròn
  imageLeft?: string;      // dùng cho hình lớn bên trái
  name: string;
  subtitle?: string;
  rightIcon?: React.ReactNode;
};


const Button3 = ({ avatar, imageLeft, name, subtitle, rightIcon }: TButton3Props) => {
  if (imageLeft) {

    return (
      <div className={styles.card2}>
        <img src={imageLeft} alt={name} className={styles.bigImage} />
        <div className={styles.card2Right}>
          <span className={styles.name}>{name}</span>
          {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      {avatar && <img src={avatar} alt={name} className={styles.avatar} />}
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      </div>
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </div>
  );
}

export default Button3