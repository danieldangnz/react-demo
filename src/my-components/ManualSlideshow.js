import { useState } from "react";
function ManualSlideshow() {
    //
    let topMovies = [
        {id: 0, title: "The Shawshank Redemption", year: 1994, image_url: require('./Images/movie0.jpg')},
        {id: 1, title: "The Godfather ", year: 1972, image_url: require('./Images/movie1.jpg')},
        {id: 2, title: "The Dark Knight", year: 2008, image_url: require('./Images/movie2.jpg')},
        {id: 3, title: "12 Angry Men", year: 1957, image_url: require('./Images/movie3.jpg')},
        {id: 4, title: " Schindler\'s List", year: 1993, image_url: require('./Images/movie4.jpg')},
    ];
    //
    const [manualIndex, setManualIndex] = useState(0);
    //
    let previous = () => { 
        (manualIndex == 0) ?  setManualIndex(topMovies.length - 1) : setManualIndex(manualIndex - 1);
    }
    let next = () => {
        (manualIndex == topMovies.length - 1) ?  setManualIndex(0) : setManualIndex(manualIndex + 1);
    }
    //UI
    return (
        <div className="bg-secondary p-2 m-2">
            <h2>Manual Slideshow</h2>
            <h3>{topMovies[manualIndex].title}</h3>
            <p>{topMovies[manualIndex].year}</p>
            <img src={topMovies[manualIndex].image_url} height="150" alt={topMovies[manualIndex].title}/>
            <br />
            <button className="btn btn-success m-1" onClick={previous} > PREVIOUS </button>
            <button className="btn btn-success m-1" onClick={next} > NEXT </button>
        </div>     
    );
 }
 export default ManualSlideshow;