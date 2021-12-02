import React from 'react'
import styles from './Header.module.css'


function Header ()  {
  return (
    <div className={styles.header}>
        <h1>Cheapterest</h1>
          <a className={styles.button} href="/addpost">Ajouter un post</a>
          <a className={styles.button} href="/Nath">home</a>
    
    </div>
  )
}

export default Header
