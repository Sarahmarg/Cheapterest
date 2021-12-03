
import React, { useEffect, useState } from 'react';
import styles from '../components/Header/Header.module.css'

//Publier un post
function PostsPage(props) {
    console.log (props.onSubmit)


    //Definir les composant de l'url, du titre et de la description
    const [url, setUrl] = useState()
    const [image, setImage] = useState()
    const [title, setTitle] = useState ()
    const[description, setDescription] = useState ()
    const [category, setCategory]= useState('montagne')
    const [item, setItem] = useState([])

    //Prendre les champs rédigé par l'utilisateur et les définir en valeurs
    const handChangeUrl = (event) => {
        setUrl(event.target.value)
        // setImage(event.target.value)
    }

    const handChangeTitle = (event) => {
        setTitle (event.target.value)
    }

    const handChangeDescription = (event) => {
        setDescription (event.target.value)
    }

    const handChangeCategory = (event) => {
        switch (event.target.value) {
            case "montagne":
                setCategory ("montagne")
                break
            case "nature":
                setCategory ("nature")
                break
            case "ville":
                setCategory ("ville")
                break
            default:
                console.log('catégorie inconnue.')
        }
    }

    //Fonction qui enregistre les valeurs dans le tableau Item et réhinitialise les champs
    const addItemandClean = () => {
        // setItem([...item, {url,title,description}])
        props.onSubmit({
            url: url, 
            title: title, 
            description: description,
            category: category
            
        })
        setImage('')
        setUrl('')
        setDescription('')
        setTitle('')
    
    }

    const clean = () => {
        setImage('')
        setUrl('')
        setDescription('')
        setTitle('')

    }


    return (
        <div className="container-addpost">
            <label className='url-input'>Url de l'image : </label>
            <input onChange={handChangeUrl} type="text" value={url}></input><br/>
            
            <img className='introuvable-input'src={url} alt="introuvable"></img><br/>

            <label className='titre-input'>Titre : </label>
            <input onChange={handChangeTitle} type="text" value={title}></input><br/>

            <label className='description-input'>Description : </label>
            <input onChange={handChangeDescription} type="text" value ={description}></input>
            
            <select onChange={handChangeCategory}>

                <option value="montagne">Montagne</option>
                <option value="nature">Nature</option>
                <option value="ville">Ville</option>
            </select>
            <br/>
            <br/>

            <button className={styles.button} onClick={() => addItemandClean()}>Publier</button>
            <button className={styles.button} onClick={() => clean() }>Réinitialiser</button>

        
        </div>
    )
}

export default PostsPage
