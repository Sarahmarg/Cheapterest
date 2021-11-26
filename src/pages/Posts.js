

function PostsPage(props){
    console.log(props)
    return (
        <>
            <h3 >{props.title}</h3>
            <p>{props.description}</p>
            <span>{props.image}</span>
        </>
    )
}

export default PostsPage