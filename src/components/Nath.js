import Header from "./Header/header"
<<<<<<< HEAD
import styles from "./Header/Header.module.css"
=======
import React, { useState } from 'react';
>>>>>>> 7dfb2bbbeba8e1d0cb7f054adfceaf8a1106076e

const Nath = () => {
    const data = [
      {
        title: "Coucou", 
        description: "bonjour", 
        url: "https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg"
      },
      {
        title: "Coucou2", 
        description: "bonjour", 
        url: "https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg"
      }
    ];

    const [items] = useState(data)
    console.log(items)

    return (
        <div>
            <Header/>
<<<<<<< HEAD
            <br/>
            <br/>
            <button className={styles.button} onClick="">Ajouter</button>
            <br/>
            <p>sal</p>
=======
            {items.map(function (item) {
              return (
                <div>
                  <div className ={''}>{item.title}</div>
                  <div>{item.description}</div>
                  <div><img src={item.url} alt='introuvable'></img></div>

                </div>


              )
            })}

      
>>>>>>> 7dfb2bbbeba8e1d0cb7f054adfceaf8a1106076e
        </div>
        
    )
}


export default Nath