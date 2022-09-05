import { Component } from "react";


class ImageComponent extends Component{
    
    render(){
        console.log(this)
        return(
        <img height={"200px"} className="rounded" src={this.props.user.img} alt={this.props.user.alt} />)
    }
}

export default ImageComponent