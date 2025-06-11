import { useEffect, useState } from 'react';
import '../styles/Banner.css';
import axios from '../axios';
import requests from '../Requests';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return requests;
        }

        fetchData();
    }, []);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    return (
        <header className="banner"
            style={{
                backgroundSize: 'cover', // Fixed typo
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                height: '448px',
            }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My List</button>
                </div>
                <h1>{truncate(movie?.overview, 150)}</h1>
            </div>

            <div className="banner-fadeBottom"></div>
        </header>
        
    )
}

export default Banner