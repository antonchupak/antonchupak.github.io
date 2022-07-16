import * as React from "react";
import { ISocialItem } from "interfaces";
import styles from "./Social.module.sass";

const SOCIAL_ITEMS: ISocialItem[] = [
  { name: "email", link: "mailto:tony.chupak@gmail.com" },
  { name: "github", link: "https://github.com/antonchupak" },
  { name: "linkedin", link: "https://www.linkedin.com/in/antonchupak" },
];

const Social: React.FC = () => {
  const getItem = (item: ISocialItem, index: number) => (
    <li className={styles.socialItem} key={`social-item-${index}`}>
      <a className={styles.socialLink} href={item.link}>
        {item.name}
      </a>
    </li>
  );

  return (
    <ul className={styles.social}>
      <h3 className={styles.socialTitle}>say hello:</h3>
      {SOCIAL_ITEMS.map(getItem)}
    </ul>
  );
};

export default Social;
