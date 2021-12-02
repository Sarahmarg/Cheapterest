import React from 'react'
import home from '../../pages/ButtonHome'
import styles from './Header.module.css'


function Header ()  {
  return (
    <div className={styles.header}>
        <h1>Cheapterest</h1>
          <button className={styles.button} onClick={home}>home</button>
    
    </div>
  )
}

export default Header
