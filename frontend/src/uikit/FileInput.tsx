import Button from './Button';
import styles from './FileInput.module.scss';

type Props = {
  placeholder?: string;
  name?: string;
  className?: string;
  accept?: string;
  file?: File | null;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const FileInput = ({
  placeholder,
  name,
  accept,
  className = '',
  file,
  onChange
}: Props) => {
  return (
    <>
      <label htmlFor="upload-image" className={styles.label}>
        {file ? `Choosen` : 'Choose file'}
      </label>
      <input
        placeholder={placeholder}
        name={name}
        accept={accept}
        type="file"
        id="upload-image"
        hidden
        className={` ${className}`}
        onChange={onChange}
      />
    </>
  );
};

export default FileInput;
