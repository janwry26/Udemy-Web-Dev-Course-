
const MovieCard = ({movie}) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    return(
    <div className="card" style="width: 18rem;">
    <img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
    <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
    
        <a href="#" className="btn btn-primary">Show details</a>
    </div>
    </div>
)
}
export default MovieCard;