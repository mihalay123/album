import styles from './Textarea.module.scss';

type Props = {
  value: string;
  placeholder?: string;
  name?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const Textarea = ({ value, placeholder, name, className, onChange }: Props) => {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      name={name}
      className={`${styles.textarea} ${className}`}
      onChange={onChange}
    />
  );
};

export default Textarea;
