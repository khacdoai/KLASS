import styles from './Button5.module.css'

type TButton5Props = {
  avatar?: string;
  title?: string;
  subtitle?: string;
  amount?: string;
  time?: string;
  message?: string;
  iconRight?: React.ReactNode;
  badge?: string;
};

const Button5 = ({avatar,title,subtitle,amount,time,message,iconRight,badge} : TButton5Props) => {
   if (message) {

    return (
      <div className={styles.card}>
        <span className={styles.message}>{message}</span>
        <div className={styles.notificationRight}>
          <div className={styles.divider} />
          {iconRight}
          {badge && <div className={styles.badge}>{badge}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      {avatar && <img src={avatar} className={styles.avatar} />}
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      <div className={styles.amountGroup}>
        <div className={styles.amount}>{amount}</div>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
}

export default Button5