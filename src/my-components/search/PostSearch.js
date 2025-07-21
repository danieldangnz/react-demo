import { useState } from 'react';
import Container from './Container';
import Search from './Search';

function PostSearch() {
    //States
    const [query, setQuery] = useState("");
    //Methods and UI Logic
    //UI
    return (
        <>
            <h1>Post Search Component: </h1>
            <Search onQuery={setQuery} />
            <Container query={query} />
        </>
    )
}
export default PostSearch;