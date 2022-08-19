import { NextPage } from 'next';
import Image from 'next/image';
import { getAllImageId, getImageById } from '../src/api/images';

import { ImageType } from '.';
const Post: NextPage = ({ image }) => {
  const { title, url } = image;
  return (
    <div>
      {title}
      <Image src={url} width={400} height={400}></Image>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  let ids = [Number];
  await getAllImageId().then((response) => (ids = response));
  const paths = ids.map((id) => ({
    params: {
      id: id.toString()
    }
  }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: any) {
  let image: ImageType | {} = {};
  await getImageById(params.id).then((response) => (image = response));
  return { props: { image } };
}
