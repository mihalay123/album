import { ImageType } from '../../pages';
import axios from 'axios';

const url = 'http://localhost:1337';
const apiUrl = '/api/images';

interface DataType {
  id: number;
  attributes: {
    createdAt: string;
    description: string;
    image: { data: any };
    liked: boolean;
    publishedAt: string;
    title: string;
    updatedAt: string;
  };
}

const formImageObj = (item: DataType) => {
  const { id, attributes } = item;
  const { title, description, liked, image, createdAt } = attributes;
  const imageUrl = image.data.attributes.url;
  return {
    id,
    title,
    description,
    liked,
    url: `${url}${imageUrl}`,
    createdAt
  };
};

export const getImages = async () => {
  const response = await axios.get(`${url}${apiUrl}?populate=image`);
  const data = response.data.data;
  const images = data.reduce((acc: ImageType[], item: DataType) => {
    const imageObj = formImageObj(item);
    return [...acc, imageObj];
  }, []);
  return images;
};

export const getAllImageId = async () => {
  const response = await axios.get(`${url}${apiUrl}?populate=image`);
  const data = response.data.data;
  const ids = data.map((item: ImageType) => item.id);
  return ids;
};

export const getImageById = async (id: number) => {
  const response = await axios.get(`${url}${apiUrl}/${id}?populate=image`);
  const data = response.data.data;
  return formImageObj(data);
};

export const createImage = (data: FormData) =>
  axios({
    method: 'POST',
    url: `${url}${apiUrl}`,
    data
  });

export const deleteImage = (id: number) =>
  axios.delete(`${url}${apiUrl}/${id}`);
