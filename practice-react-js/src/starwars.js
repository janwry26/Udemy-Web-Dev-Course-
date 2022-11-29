import './App.css'
import React from "react";


class FilmItemRow extends React.Component{
    render(){
        return(
            <li>
                <a href={this.props.url}>{this.props.url}</a>
            </li>
        )
    }
}


class Starwars extends React.Component{
    constructor(){
        super()
        this.state = {
            name: null,
            height: null,
            homeworld: null,
            image: null,
            films: [],
          
        }
    }
    
    getNewChar(){
        const randomNumber = Math.round(Math.random()*88)
        const url = `https://github.com/akabab/starwars-api/blob/master/api/id/${randomNumber}.json`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
           
            this.setState({
               
                name: data.name,
                height: data.height,
                homeworld: data.homeworld,
                films: data.films,
                image: data.image,
                loadedChar: true
            })
        })
    }
    render(){

        const movies = this.state.films.map((url, i) => {
            return <FilmItemRow key={i} url={url}/>
        }
        )
        return(
            <div className="container">
                {
                    this.state.loadedChar && 
                    <div>
                        <img src={this.state.image}>{this.state.image}</img>        
                        <h1>{this.state.name}</h1>
                        <p>{this.state.height} cm</p>
                        <p><a href={this.state.homeworld}>Homeworld:{this.state.homeworld}</a></p>
                        <ul>
                            {movies}
                        </ul>
                    </div>
                }
                <button type="button" onClick={()=> {
                    this.getNewChar()
                }} className="btn">Randomize Character</button>
            </div>
        )
    }
}


export default Starwars;