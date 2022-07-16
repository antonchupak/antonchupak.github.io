import * as React from 'react'
import styles from './Header.module.sass'

const Header: React.FC<{}> = () => {
  return (
    <header className={styles.hello}>
      <h1 className={styles.title}>Anton Chupak</h1>
      <h2 className={styles.subtitle}>Front-end developer</h2>
    </header>
  )
}

export default Header
