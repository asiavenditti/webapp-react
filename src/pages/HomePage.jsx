import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { useLoaderContext } from '../context/LoaderContext'
import Loader from '../components/Loader'

export default function HomePage() {
    const [movies, setMovies] = useState([])
    const { isLoading, setIsLoading } = useLoaderContext()


    useEffect(() => {
        setIsLoading(true)
        const url_movies = 'http://localhost:3000/api/movies'
        fetch(url_movies)
            .then((res) => res.json())
            .then((data) => setMovies(data))
            .catch((err) => console.error('Errore', err))
            .finally(() => {
                setTimeout(() => setIsLoading(false), 400)
            })

    }, []);

    if (isLoading) {
        return <Loader />
    }
    return (
        <div className="container mt-4">
            <h1 className="mb-5 py-2 text-center"> Esplora il nostro catalogo🎬</h1>
            <div className="row">
                {movies.map((movie) => (
                    <div className="col-md-4 mb-4" key={movie.id}>
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    )
}

