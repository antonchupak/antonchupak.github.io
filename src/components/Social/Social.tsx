import * as React from 'react';
import styles from './Social.module.sass';

interface Item {
  name: string;
  link: string;
}

interface ISocialProps {
  items?: Item[];
}

const SOCIAL_ITEMS = [
  { name: 'email', link: 'hi@antonchupak.dev' },
  { name: 'github', link: 'https://github.com/antonchupak' },
  { name: 'linkedin', link: 'https://www.linkedin.com/in/antonchupak' }
];

const Social: React.FC<ISocialProps> = () => (
  <ul className={styles.social}>
    <h3 className={styles.socialTitle}>Say hello</h3>

    {SOCIAL_ITEMS.map((item: Item, index: number) => (
      <a className={styles.socialLink} href={item.link} key={`social-item-${index}`}>
        <li className={styles.socialItem}>{item.name}</li>
      </a>
    ))}
  </ul>
);

export default Social;
