import { useEffect, useState } from 'react';
import Post from './Post';

function Container( {query} ) {
    //States
    const [posts, setPosts] = useState([]);
    //Methods and UI Logic
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(error => {alert('ERROR: ' + error.message);})    
    }, []);
    //UI
    return (
        <>
            <h3>List of Posts: </h3>
            <ul>
                { posts.filter( (post) => post.title.toLowerCase().includes(query.toLowerCase()) 
                                       || post.body.toLowerCase().includes(query.toLowerCase()) )
                       .map( (post) => <Post key={post.id} post={post}  /> ) }
            </ul>
        </>
    )
}
export default Container;