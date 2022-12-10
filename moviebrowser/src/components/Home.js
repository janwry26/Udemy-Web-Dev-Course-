import Hero from './Hero';
import { useParams } from 'react-router'

import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';

const MovieCard=({movie})=>{

  if(movie.poster_path){

      var  posterUrl=`https://image.tmdb.org/t/p/w500/${movie.poster_path}` 

  }else{

      posterUrl=require("./img.jpg")
  }

  const detailUrl=`/movies/${movie.id}`;



  return(
      <>
      <div className='col-4 col-md-6 col-lg-3 my-2'>
          <Link to={detailUrl} style={{'textDecoration':'none'}} >
              <div className="card h-100">
                  <img src={posterUrl} className="card-img" alt={movie.original_title} />
                  <div className="card-body">
                      <p className="card-title text-truncate" >{movie.original_title}</p>
                  </div>
              </div>    
          </Link>   
      </div>
      </>
  )
}


function Home(){

  const [trendList, setTrendList]=useState([])

  const {id}=useParams

  useEffect(()=>{
      fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=d06ada8fa071c4c50855b5867db2c26c')
      .then(response=>response.json())
      .then(data=>{
      setTrendList(data)
      
  })
},[id])


// console.log(trendList.results)

let resultsHtml

if(trendList.results){

   resultsHtml=trendList.results.slice(0,12).map((obj)=><MovieCard key={obj.id}  movie={obj}/>)

}




      return(

          <>
          <Hero text="Welcome to movie browser"/>
              
         
          

        
              <div className='col-lg-2'></div>
                  <div className='container col-lg-8'>
                      <h3 id='head' className='my-2 text-center'>Trending movies</h3>

                      <div className='row'>
                          {resultsHtml}
                      </div>
                  </div>
                  <div className='col-lg-2'></div>

          
          </>
      )
}
  export default Home;  