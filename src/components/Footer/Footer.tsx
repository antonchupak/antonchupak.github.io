import * as React from "react";
import { Social } from "components";

import styles from "./Footer.module.sass";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <p className={styles.info}>
      I'm a developer based in Kiev, Ukraine. Specialized in developing web
      applications in any complexity. Currently focused on React.
    </p>

    <Social />
  </footer>
);

export default Footer;
