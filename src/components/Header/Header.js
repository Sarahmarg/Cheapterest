import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h1>Shipterest</h1>
        <button class="home" onClick="">home</button>
        <button class="ADD" onClick="">Ajouter</button>
        
    </div>
  )
}

export default Header
