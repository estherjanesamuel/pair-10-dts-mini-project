import Box  from "@mui/material/Box";
import axios from "axios";
import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";


const Movies = () => {
    const[movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            const fetchedMovies = await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=df7934f249ad19ef751a3c7ae05883e7");
            setMovies(fetchedMovies.data.results)
        }
        fetchMovies();
    }, []);
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent:'space-between'
        }}>
            {
                movies.map(movie => (
                    <MovieCard movie={movie}></MovieCard>
                ))
            }

        </Box>
    );
}

export default Movies