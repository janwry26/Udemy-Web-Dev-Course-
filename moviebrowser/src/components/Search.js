import Hero from './Hero'

//tmdb API key d06ada8fa071c4c50855b5867db2c26c
//example link for movie searches = https://api.themoviedb.org/3/search/company?api_key=d06ada8fa071c4c50855b5867db2c26c&query=spider%20man&page=1
const Search = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`
    console.log(searchResults, 'are the search results')
    return (
      <>
      <Hero text={title}/> 
      </>
    )
}
export default Search;