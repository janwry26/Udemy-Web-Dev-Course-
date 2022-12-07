import Hero from './Hero'


const MovieCard = ({movie}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  return(
  <div className="col-lg-3 col-md-3 col-2 my-4">
    <div className="card">
    <img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
    <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <a href="#" className="btn btn-primary">Show details</a>
    </div>
    </div>
  </div>
)
}

const Search = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`;

    const resultHtml = searchResults.map((obj,i) =>{
     return <MovieCard movie={obj} key={i}/>
    })

    return (
      <>
      <Hero text={title}/> 
      {resultHtml &&
        <div className='container'>
          <div className="row">
            {resultHtml}
          </div>
        </div>
      }


      </>
    )
}
export default Search;