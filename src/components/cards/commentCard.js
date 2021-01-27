import React from 'react'

//react Icons for likes/poops
import {IoPawSharp} from 'react-icons/io5';
import {FaPoop} from 'react-icons/fa';

export default class commentCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      likes: 0,
      liked: false,
      poops: 0,
      pooped: false,
      }
    }

      //ADDS & REMOVES A LIKE
  pawsome(){
    const liked = this.state.liked;

    if(liked === false){
      this.setState(() => ({
        likes: this.state.likes+1,
        liked: true
      }))
    } else {
      this.setState(() => ({
        likes: this.state.likes-1,
        liked: false
      }))
    }
  }  
  
  //ADDS & REMOVES A POOP
  poopsome(){
    const pooped = this.state.pooped;

    if(pooped === false){
      this.setState(() => ({
        poops: this.state.poops+1,
        pooped: true
      }))
    } else {
      this.setState(() => ({
        poops: this.state.poops-1,
        pooped: false
      }))
    }
  }

  render() {

    const cardstyle = {
      display: "flex",
      background: "var(--brandbckgrnd)",
      borderRadius: "9px",
      borderRadius: "15px" ,
      fontFamily: "Arial",
      margin: "8px 0",
      padding: "0.6em 0.3em" ,
    }

    const commentstyle = {
      display: "flex",
      padding: "0.5em" ,
      backgroundColor: "white",
      borderRadius: "15px" ,
      minHeight: "85%",
      minWidth: "80%",
    }

    return (
           
          <div style = {cardstyle}>
                      
                <div className="mr-2">
                <div id="userImage2"></div>
                <p className="text-center">Doug</p>
                </div>   
           
                <div style = {commentstyle} >{this.props.comment}</div>

                <div>           
                  <div className="buttonbox">
                    <div onClick={()=>this.pawsome()} style = { this.state.liked ? {color:"green"} : {color:"black"} }><IoPawSharp/></div>
                    <div className="likes">{this.state.likes}</div>
                  </div>
                  <div className="buttonbox">
                    <div onClick={()=>this.poopsome()} style = { this.state.pooped ? {color:"brown"} : {color:"black"} } ><FaPoop/></div>
                    <div className="likes">{this.state.poops}</div>
                  </div>
                </div>   

          </div>
      
    )
  }
}


//just keeping these here
{/* <div id="userImage2"></div><h5>Doug</h5>
<div id="userImage3"></div><h5>Ted</h5>
<div id="userImage4"></div><h5>Pete</h5>
<div id="userImage5"></div><h5>Kat</h5> */}
