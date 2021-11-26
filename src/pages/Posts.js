import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';


function PostsPage(props) {

    console.log(props)

    const [image, setImage] = useState(0)
    const [url, setUrl] = useState(0)
    
    const GetUrl = (event) => {
        setImage(event.target.value)
    }

    return (
        <div>
            <input onChange={GetUrl} type="text"></input>

            
            <h3 >{props.title}</h3>
            <p>{props.description}</p>
            <img src={image}></img>
        </div>
    )
}

export default PostsPage
