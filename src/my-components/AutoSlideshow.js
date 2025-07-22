import { useState, useEffect } from "react";
function AutoSlideshow() {
    //Array of movies
    let topMovies = [
        {id: 0, title: "The Shawshank Redemption", year: 1994, image_url: require('./Images/movie0.jpg')},
        {id: 1, title: "The Godfather ", year: 1972, image_url: require('./Images/movie1.jpg')},
        {id: 2, title: "The Dark Knight", year: 2008, image_url: require('./Images/movie2.jpg')},
        {id: 3, title: "12 Angry Men", year: 1957, image_url: require('./Images/movie3.jpg')},
        {id: 4, title: " Schindler's List", year: 1993, image_url: require('./Images/movie4.jpg')},
       ];
    //Declare state "index" and the hook useState()
    const [index, setIndex] = useState(0);
    //Use useEffect() hook to create a Timer
    useEffect(() => {
        setTimeout(() => {
            (index === topMovies.length - 1) ?  setIndex(0) : setIndex(index + 1);
        }, 1000);
    });
    //UI
    return (
        <div className="bg-secondary p-2 m-2">
            <h2>Auto Slideshow</h2>
            <h3>{topMovies[index].title}</h3>
            <p>{topMovies[index].year}</p>
            <img src={topMovies[index].image_url} height="150" alt={topMovies[index].title}/>
        </div>   
    );
 }
 export default AutoSlideshow;