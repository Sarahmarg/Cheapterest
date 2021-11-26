import React from 'react'
import styles from './Header.module.css'

function Header ()  {
  return (
    <div className={styles.header}>
        <h1>Shipterest</h1>
        <div className={styles.header}>
          <button className="home" onClick="">home</button>
          <button className="ADD" onClick="">Ajouter</button>
        </div>
      
    </div>
  )
}

export default Header
