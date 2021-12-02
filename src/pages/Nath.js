
import { useState } from "react";
import PostsPage from "./Posts";

//Page d'accueil

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

    const [items] = useState(item)
    console.log(items)

    return (
        <div>
            {items.map(function (item) {
              return (
                <div>
                  <div className ={''}>{item.title}</div>
                  <div>{item.description}</div>
                  <div><img src={item.url} alt='introuvable'></img></div>

                </div>


              )
            })}

      
        </div>
        
    )
}


export default Nath