import React from "react";

class Item extends React.Component {

    constructor(props){
        super(props)
         
        this.state = {
            clicks: 0,
            total: 100
        }
    }

    clickMe(){
      this.setState({
        clicks : this.state.clicks + 1,
        total : this.state.total -1
      })
    }

    render(){
        return(
            <div>
            <h1 className="clicked" onClick={() => this.clickMe()}>
                Hello React JS from {this.props.name}
            </h1>
            <span>
                {this.state.clicks} is the number of clicks. {this.state.total} remaining clicks
            </span>
          
            </div>
        )
    }
}
export default Item;