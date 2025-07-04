import React, { useState, useEffect } from 'react'
import '../styles/Row.css'
import axios from '../axios'

function Row({ title, fetchURL, isLargeRow = false }) {

    const [movies, setMovies] = useState([]);

    const base_url = 'https://image.tmdb.org/t/p/original/'

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchURL]);

    return (
        <div className='row'>

            <div className="row-posters"><h2>{title}</h2>
                <div className='row_posters'>
                    {movies.map(
                        (movie) =>
                            ((isLargeRow && movie.poster_path) ||
                                (!isLargeRow && movie.backdrop_path)) && (
                                <img
                                    className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
                                    key={movie.id}
                                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                        }`}
                                    alt={movie.name}
                                />
                            )
                    )}</div>
            </div>
        </div>
    )
}

export default Row;