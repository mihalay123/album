import styles from './Input.module.scss';

type Props = {
  value: string;
  placeholder?: string;
  name?: string;
  className?: string;
  type: React.HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({
  type,
  value,
  placeholder,
  name,
  className = '',
  onChange
}: Props) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
      className={`${styles.input} ${className}`}
      onChange={onChange}
    />
  );
};

export default Input;
