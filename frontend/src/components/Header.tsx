import styles from '../../styles/Header.module.scss';

const Header = ({}) => {
  return (
    <div className={styles.header}>
      <span>Button</span>
      <h1>My Favorite Album</h1>
    </div>
  );
};

export default Header;
