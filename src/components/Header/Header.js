import React from 'react'

function Header ()  {
  return (
    <div className={styles.header}>
        <h1>Shipterest</h1>
        <button class="home" onClick="">home</button>
        <button class="ADD" onClick="">Ajouter</button>
      
        <h2>Hello pinterest</h2>
    </div>
  )
}

export default Header
