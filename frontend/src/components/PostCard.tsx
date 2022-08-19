import Image from 'next/image';
import Link from 'next/link';

import styles from './PostCard.module.scss';
import { ImageType } from '../../pages';
import { clientUrl } from '../utils/urls';

interface Props {
  image: ImageType;
}

const PostCard = ({ image }: Props) => {
  const { id, title, url: imageUrl } = image;
  return (
    <Link href={`/${id}`}>
      <div className={styles.card}>
        <div>
          <span className={styles.title}>{title}</span>
          <Image
            key={id}
            src={imageUrl}
            alt="img"
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
