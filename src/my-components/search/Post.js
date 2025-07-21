function Post( {post} ) {
    //States
    //Methods and UI Logic
    //UI
    return (
        <>
            <li>
                <div>
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                </div>
            </li>
        </>
    )
}
export default Post;