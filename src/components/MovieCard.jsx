import { Link } from 'react-router-dom'

export default function MovieCard({ movie }) {
    return (
        <div className="card h-100">
            <img
                src={movie.image}
                className="card-img-top"
                alt={movie.title}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Anno: {movie.release_year}</p>
                <Link to={`api/movies/${movie.id}`} className="btn btn-primary mt-auto">
                    Scopri di più
                </Link>

            </div>
        </div>
    )
}
