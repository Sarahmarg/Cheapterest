import { getByText } from '@testing-library/dom';
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
            <h3 >{props.title}</h3>
            <input onChange={GetUrl} type="text"></input>
            <img src={image}></img>
            <p>{props.description}</p>
            <input onChange={getByText} type="text"></input>
            <p>{props.motscles}</p>
            <input onChange={getByText} type="text"></input>
        </div>
    )
}

export default PostsPage
