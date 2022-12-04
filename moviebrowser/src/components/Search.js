import Hero from './Hero'
import MovieCard from './MovieCard';

const Search = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`;
    const resultHtml = searchResults.map((obj,i) =>{
      return <div key={i}>{obj.original_title}</div>
    })

    return (
      <>
      <Hero text={title}/> 
      {resultHtml}
      </>
    )
}
export default Search;