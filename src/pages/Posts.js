
import React, { useState } from 'react';


function PostsPage(props) {

    console.log(props)

    const [url, setUrl] = useState('')
    const [image, setImage] = useState('')
    const [title, setTitle] = useState ('')
    const[description, setDescription] = useState ('')
    
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

    return (
        <div>
            <label>Url de l'image</label>
            <input onChange={handChangeUrl} type="text" value={url}></input><br/>
            <img src={image} alt="introuvable"></img><br/>


            <label>Titre</label>
            <input onChange={handChangeTitle} type="text" value={title}></input><br/>

            <label>Description</label>
            <input onChange={handChangeDescription} type="text" value ={description}></input>
        </div>
    )
}

export default PostsPage
