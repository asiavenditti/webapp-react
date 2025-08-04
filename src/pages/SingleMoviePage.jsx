import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SingleMoviePage() {
    const { id } = useParams()
    const [movie, setMovie] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/api/movies/${id}`)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(err => {
                console.error('Errore', err)
                setMovie(null)
            })
    }, [id])


    return (
        <div className="container mt-4">
            {/* Card Film */}
            <div className="card mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                <img src={movie.image} className="card-img-top" alt={movie.title} />
                <div className="card-body">
                    <h2 className="card-title">{movie.title}</h2>
                    <p><strong>Anno:</strong> {movie.release_year}</p>
                    <p><strong>Genere:</strong> {movie.genre}</p>
                    <p><strong>Trama:</strong> {movie.abstract}</p>
                </div>
            </div>

            {/* Sezione Recensioni */}
            <section className="reviews-section mx-auto" style={{ maxWidth: '800px' }}>
                <h3 className='text-center'>Recensioni</h3>


            </section>
        </div>
    )
}
