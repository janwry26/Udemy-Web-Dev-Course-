import Hero from './Hero';
import { Link } from 'react-router-dom';







const MovieCard = ({movie}) => {
  // const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  // const detailUrl = `/movies/${movie.id}`
  // const posterUrlNull = "https://image.tmdb.org/t/p/w500/null"
  
  if(movie.poster_path){

  //  return(
    // )
    // }
    
    var posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  }else{
    posterUrl=require("./img.jpg");
  }
  const detailUrl = `/movies/${movie.id}`
  return(
    
      <div className="col-4 col-md-6 col-lg-2 my-3">
         <Link to={detailUrl} style={{'textDecoration':'none'}}>
        <div className="card h-100">
        <img src={posterUrl} className="card-img-top img-thumbnail img-fluid" alt={movie.original_title}/> 
        <div className="card-body">
           
            <p className="card-title text-truncate">{movie.original_title}</p>
            
        </div>
        </div>
        </Link>
      </div>
    
    )
   }

const Search = ({keyword, searchResults}) => {

    if(searchResults.length){
      const resultsHtml=searchResults.map((obj)=><MovieCard key={obj.id}  movie={obj}/>)
    
    return(
      <>
         <Hero text={`You are searching for "${keyword}"`} />

          <div className='container'>
              <div className='row'>
              {resultsHtml}
              </div>
          </div>        
      </>
    )
  }else{
    const resultNotFound=require('./img.jpg') 

    return(
        <>
        <Hero text={"Result not found"} />
        <div className='container'>
        <img src={resultNotFound} className="img-fluid" alt='Not found'/>
        </div>
        
        </>  
    )
    
  }
  }
    

export default Search;