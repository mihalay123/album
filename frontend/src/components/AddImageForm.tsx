import { useState } from 'react';
import { createImage } from '../api/images';
import FileInput from '../uikit/FileInput';
import Input from '../uikit/Input';
import Textarea from '../uikit/Textarea';

import styles from './AddImageForm.module.scss';

const AddImageForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const disabled = !file || !title;

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

    await createImage(formData);
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
      </div>

      <div className={styles.file}>
        <FileInput
          accept="image/png, image/gif, image/jpeg"
          onChange={onFileChange}
          file={file}
        />
      </div>

      <input type="submit" disabled={disabled} />
    </form>
  );
};

export default AddImageForm;
