function Search( {onQuery} ) {
    //States   
    //Methods and UI Logic
    function handleInput(e) {
        onQuery(e.target.value);
    }
    //UI
    return (
        <>
            <h3>Search Box: </h3>
            <input type="text" onInput={handleInput} />
        </>
    )
}
export default Search;