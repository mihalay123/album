import styles from './Button.module.scss';

type Props = {
  label?: string;
  icon?: string;
  name?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
  disabled?: boolean;
  className?: string;
};

const Button = ({
  label,
  icon,
  name,
  onClick,
  active,
  disabled,
  className = ''
}: Props) => {
  const activeStyle = styles.button;
  return (
    <button
      onClick={onClick}
      name={name}
      className={`${styles.button} ${
        active ? { activeStyle } : ''
      } ${className}`}
      disabled={disabled}
    >
      {icon && <img src={icon} alt="img" />}
      {label}
    </button>
  );
};

export default Button;
