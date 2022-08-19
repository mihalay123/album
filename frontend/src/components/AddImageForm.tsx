import { useState } from 'react';
import { createImage } from '../api/images';

const AddImageForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
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

    if (!file) {
      return;
    }

    setPreview(URL.createObjectURL(file));

    formData.append('data', JSON.stringify(data));
    formData.append('files.image', file, file.name);

    await createImage(formData);
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore: Object is possibly 'null'.
    const newFile = event.target.files[0];
    if (!newFile) {
      setPreview('');
      setFile(null);
      return;
    }
    setFile(newFile);
    setPreview(URL.createObjectURL(newFile));
  };

  return (
    <form onSubmit={handleCreatePost}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e?.target.value)}
      />

      <textarea
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

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
