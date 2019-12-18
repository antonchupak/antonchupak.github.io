import * as React from 'react';
import styles from './Footer.module.sass';

import Social from './../Social/Social';

interface IFooterProps {
  social?: any[];
  description?: string;
}

const Footer: React.FC<IFooterProps> = ({ social, description }) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.info}>{description}</p>
      <Social />
    </footer>
  )
};

export default Footer;
