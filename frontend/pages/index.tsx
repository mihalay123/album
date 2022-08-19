import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import AddImageForm from '../src/components/AddImageForm';
import { getImages } from '../src/api/images';
import { sortByDate, search } from '../src/utils';
import PostCard from '../src/components/PostCard';
import Input from '../src/uikit/Input';

export interface ImageType {
  title: string;
  id: number;
  url: string;
  description: string | null;
  liked: boolean;
  createdAt: string;
}

const Home: NextPage = () => {
  const [initialImages, setInitialImages] = useState<ImageType[]>([]);
  const [images, setImages] = useState<ImageType[]>([]);
  const [sortDir, setSortDir] = useState<'ASC' | 'DESC'>('ASC');
  const [searchLine, setsearchLine] = useState('');

  // let searchLine = '';

  const handleSorting = () => {
    let newImages = images;
    switch (sortDir) {
      case 'ASC':
        newImages = sortByDate(images, false);
        setSortDir('DESC');
        break;

      case 'DESC':
        newImages = sortByDate(images, true);
        setSortDir('ASC');
        break;

      default:
        break;
    }
    setImages(newImages);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setsearchLine(event.target.value);
    const newImages = search(initialImages, event.target.value);
    setImages(newImages);
  };

  useEffect(() => {
    getImages().then((images: []) => {
      setImages(images);
      setInitialImages(images);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={handleSorting}>sort by date</button>
        <Input
          type="text"
          placeholder="Search"
          value={searchLine}
          onChange={handleSearch}
        />
        <AddImageForm />
        <div className={styles.gallery}>
          {images?.length !== 0 &&
            images.map((image) => <PostCard image={image} />)}
        </div>
      </main>
    </div>
  );
};

export default Home;
