import { useState } from 'react';
import { createImage, getImages } from '../api/images';
import FileInput from '../uikit/FileInput';
import Input from '../uikit/Input';
import Textarea from '../uikit/Textarea';

import { ImageType } from '../../pages';
import styles from './AddImageForm.module.scss';
import buttonStyles from '../uikit/Button.module.scss';

interface Props {
  setImages: React.Dispatch<React.SetStateAction<ImageType[]>>;
}

const AddImageForm = ({ setImages }: Props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const disabled = !file || !title;

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setFile(null);
  };

  const handleCreatePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    const data = {
      title,
      description,
      liked: false
    };

    if (!file) {
      return;
    }

    formData.append('data', JSON.stringify(data));
    formData.append('files.image', file, file.name);

    await createImage(formData).then(() => {
      clearForm();
      getImages().then((images) => setImages(images));
    });
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore: Object is possibly 'null'.
    const newFile = event.target.files[0];
    if (!newFile) {
      setFile(null);
      return;
    }
    setFile(newFile);
  };

  return (
    <form onSubmit={handleCreatePost} className={styles.form}>
      <h3>Post new Image</h3>

      <div className={styles.inputs}>
        <Input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e?.target.value)}
        />

        <Textarea
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <FileInput
          accept="image/png, image/gif, image/jpeg"
          onChange={onFileChange}
          file={file}
        />

        <input
          type="submit"
          className={buttonStyles.button}
          disabled={disabled}
        />
      </div>
    </form>
  );
};

export default AddImageForm;
