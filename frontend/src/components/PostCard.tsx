import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/PostCard.module.scss';
import { ImageType } from '../../pages';
import { clientUrl } from '../utils/urls';

interface Props {
  image: ImageType;
}

const PostCard = ({ image }: Props) => {
  const { id, url: imageUrl } = image;
  return (
    <Link href={clientUrl + id} className={styles.card}>
      <div className={styles.card}>
        <div>
          hello
          <Image
            key={id}
            src={imageUrl}
            alt="img"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
