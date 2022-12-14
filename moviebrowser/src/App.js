import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {Routes, Route} from 'react-router-dom';
import Search from './components/Search';
import MovieView from './components/MovieView';
import Page404 from './components/Page404';
import SearchHandler from './components/SearchHandler';

function App() {
 

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState ('');


  useEffect(() => {
    if(searchText){
      
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=d06ada8fa071c4c50855b5867db2c26c&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results);
      })
    }
  }, [searchText])
  return (
    <div>
          <Navbar searchText={searchText} setSearchText = {setSearchText}/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element = {<About/> }/>
        <Route path="/search" element = {<Search keyword={searchText} searchResults = {searchResults}/>}/>
        <Route path="/movies/:id" element = {<MovieView/> }/>
        <Route path="/404" element = {<Page404/> }/>
        <Route path="/search" element = {<SearchHandler/> }/>

      </Routes>
       
    </div>
  );
}

export default App;
