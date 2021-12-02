
import React, { useState } from 'react';
import styles from '../components/Header/Header.module.css'


function PostsPage(props) {


    const [url, setUrl] = useState()
    const [image, setImage] = useState()
    const [title, setTitle] = useState ()
    const[description, setDescription] = useState ()
    const [item, setItem] = useState([])
    console.log(item)
    
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

//
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
            <img src={image} alt="introuvable"></img><br/>

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
