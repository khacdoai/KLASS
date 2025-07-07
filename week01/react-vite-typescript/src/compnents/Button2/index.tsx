import styles from './Button2.module.css'
type TButtonProps = {
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  labelColor?: string;
  phaceholder?: string;
  labelWeight?: 'normal' | 'bold';
}

const Button2 = ({label, leftIcon, rightIcon,labelColor = '#999',labelWeight = 'normal', phaceholder } : TButtonProps) => {
  return (
    <button className={styles.button}>
      <span>
      {leftIcon} {label ? (
        <span
          className={styles.label}
          style={{ fontWeight: labelWeight, color: labelColor }}
        >
          {label}
        </span>
      ) : (
        <input
          className={styles.input}
          placeholder={phaceholder}
        />
      )}
      </span>
      {rightIcon}
      </button>
  )
}

export default Button2