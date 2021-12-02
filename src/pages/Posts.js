
import React, { useState } from 'react';
import styles from '../components/Header/Header.module.css'

//Publier un post
function PostsPage(props) {

//Definir l'url, le titre et la description
    const [url, setUrl] = useState()
    const [image, setImage] = useState()
    const [title, setTitle] = useState ()
    const[description, setDescription] = useState ()
    const [item, setItem] = useState([])
    console.log(item)

//Prendre les champs rédigé par l'utilisateur et les définit en valeurs
    const handChangeUrl = (event) => {
        setUrl(event.target.value)
        setImage(event.target.value)
    }

    const handChangeTitle = (event) => {
        setTitle (event.target.value)
    }

    const handChangeDescription = (event) => {
        setDescription (event.target.value)
    }

//Fonction qui enregistre les valeurs dans le tableau Item et réhinitialise les champs
    const addItemandClean = () => {
        setItem([...item, {url,title,description}])
        setImage('')
        setUrl('')
        setDescription('')
        setTitle('')
    }


    return (
        <div>
            <label>Url de l'image</label>
            <input onChange={handChangeUrl} type="text" value={url}></input><br/>
            
            <img src={url} alt="introuvable"></img><br/>

            <label>Titre</label>
            <input onChange={handChangeTitle} type="text" value={title}></input><br/>

            <label>Description</label>
            <input onChange={handChangeDescription} type="text" value ={description}></input>
            <select>

    <option value="montagne">Montagne</option>
    <option value="nature">Nature</option>
    <option value="ville">Ville</option>
            </select>
            <br/>
            <br/>

            <button className={styles.button} onClick={() => addItemandClean()}>Publier</button>

        
        </div>
    )
}

export default PostsPage
