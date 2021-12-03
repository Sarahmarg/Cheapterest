
import { useState } from "react";
import PostsPage from "./Posts";

//Page d'accueil

const Nath = (props) => {

    const [categoryFilter, setCategoryFilter] = useState('')

    console.log('allPost', props.posts)
    console.log(props.postFiltered)

    const itemsFilter = props.posts.filter((post) => {
      if (categoryFilter) {
        return post.category === categoryFilter
      }
      return true
    })
 
    return (
      <div>
        <select onChange={(event) => setCategoryFilter(event.target.value)}>
          <option value="">Voir tous</option>
          <option value="montagne">Montagne</option>
          <option value="nature">Nature</option>
          <option value="ville">Ville</option>
        </select>
        {itemsFilter.length === 0 ? (
          <span>Pas de post</span> 
        ) : (
          <div>
              {itemsFilter.map(function (item) {
                return (
                  <div>
                    <div className ={''}>{item.title}</div>
                    <div>{item.description}</div>
                    <div><img src={item.url} alt='introuvable'></img></div>
                  </div>
                )
              })}
          </div>
        )}
      </div>
    )
}


export default Nath