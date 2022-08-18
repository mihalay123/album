import { useState } from 'react';
import { createImage } from '../api/images';
import axios from 'axios';

const AddImageForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<any>(null);
  const [preview, setPreview] = useState('');

  const disabled = !file || !title;

  const handleCreatePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    const data = {
      title,
      description,
      liked: false
    };

    setPreview(URL.createObjectURL(file));

    formData.append('data', JSON.stringify(data));
    formData.append('files.image', file, file.name);

    await createImage(formData);
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      setPreview(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <form onSubmit={handleCreatePost}>
      <input type="text" onChange={(e) => setTitle(e?.target.value)} />

      <input
        type="file"
        accept="image/png, image/gif, image/jpeg"
        onChange={onFileChange}
      />
      {preview && <img src={preview} alt="preview" />}
      <input type="submit" disabled={disabled} />
    </form>
  );
};

export default AddImageForm;
