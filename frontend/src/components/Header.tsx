import styles from '../../styles/Header.module.scss';
import Link from 'next/link';

import { useRouter } from 'next/router';

const Header = ({}) => {
  const router = useRouter();
  const disabled = router.route === '/';

  return (
    <div className={styles.header}>
      <Link href="/">
        <button disabled={disabled}>Button</button>
      </Link>
      <h1>My Favorite Album</h1>
    </div>
  );
};

export default Header;
