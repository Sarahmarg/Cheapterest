import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header ()  {
  return (
    <div className={styles.header}>
        <h1>Cheapterest</h1>
          <Link className={styles.button} to="/addpost">Ajouter un post</Link>
          <Link className={styles.button} to="/">home</Link>
    
    </div>
  )
}

export default Header
