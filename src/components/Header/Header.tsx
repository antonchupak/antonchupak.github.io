import * as React from 'react';
import styles from './Header.module.sass';

interface IHeaderProps {
  name: string;
  position: string;
}

const Header: React.FC<IHeaderProps> = ({ name, position }) => {
  return (
    <header className={styles.hello}>
      <h1 className={styles.title}>{name}</h1>
      <h2 className={styles.subtitle}>{position}</h2>
    </header>
  )
};

export default Header;
