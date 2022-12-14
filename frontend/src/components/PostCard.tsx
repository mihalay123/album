import Image from 'next/image';
import Link from 'next/link';

import styles from './PostCard.module.scss';
import { ImageType } from '../../pages';

interface Props {
  image: ImageType;
}

const PostCard = ({ image }: Props) => {
  const { id, title, url: imageUrl } = image;
  return (
    <Link
      href={`/${id}`}
      target="_blank"
      rel="noopener noreferrer stylesheet preload prefetch"
    >
      <div className={styles.card}>
        <div>
          <span className={styles.title}>{title}</span>
          <Image
            key={id}
            src={imageUrl}
            alt="img"
            layout="fill"
            objectFit="cover"
            priority
            className={styles.image}
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
