
import { useState } from "react";
import styles from "./Home.module.css"

//Page d'accueil


//afficher les posts et les filtrer
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
  //Les filtres de category
  return (
    <div >
      <div className={styles.category}>
        <select onChange={(event) => setCategoryFilter(event.target.value)}>
          <option value="">Voir tous</option>
          <option value="montagne">Montagne</option>
          <option value="nature">Nature</option>
          <option value="ville">Ville</option>
        </select>
      </div>
      <br />
      <br />
      {itemsFilter.length === 0 ? (
        <div className={styles.span}>
          <span >Pas de post</span>
        </div>
      ) : (
        <div>
          {itemsFilter.map(function (item) {
            return (
              <div className={styles.post}>
                <div className={styles.title}>{item.title}</div>
                <div ><img className={styles.image} src={item.url} alt='introuvable'></img></div>
                <div className={styles.description}>{item.description}</div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}


export default Nath