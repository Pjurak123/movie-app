import axios from "axios";
import React, { useEffect, useState } from "react"

const MovieList = () => {
    const [nameOfTheMovie,setNameOfTheMovie] = useState("")
    const [movieList,setMovieList] = useState([])
    const key = "f1d0a9ad";
    const movieAPI = `http://www.omdbapi.com/?apikey=${key}&t=${nameOfTheMovie}`;
    const horrorMovies = `http://www.omdbapi.com/?apikey=${key}&s=horror}`

    useEffect(() => {
        axios.get(horrorMovies)
        .then((response) => {
            console.log(response.data)
            console.log(response.status)
            setMovieList(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])
   
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    console.log(nameOfTheMovie)
    console.log(movieList)

    return(
        <div>
            <div>
                {/* {movieList.Search.map(movie => (
                    <div>
                    {movie.Title}
                    </div>
                ))} */}
            </div>
        </div>
    )
}

export default MovieList;

