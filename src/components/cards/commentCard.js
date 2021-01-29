import React from 'react'

//react Icons for likes/poops
import { IoPawSharp } from 'react-icons/io5';
import { FaPoop } from 'react-icons/fa';

//CUSTOM CSS
import '../../css/commentcard.css'

export default class commentCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0,
      liked: false,
      poops: 0,
      pooped: false,
    }
  }

  //ADDS & REMOVES A LIKE
  pawsome() {
    const liked = this.state.liked;

    if (liked === false) {
      this.setState(() => ({
        likes: this.state.likes + 1,
        liked: true
      }))
    } else {
      this.setState(() => ({
        likes: this.state.likes - 1,
        liked: false
      }))
    }
  }

  //ADDS & REMOVES A POOP
  poopsome() {
    const pooped = this.state.pooped;

    if (pooped === false) {
      this.setState(() => ({
        poops: this.state.poops + 1,
        pooped: true
      }))
    } else {
      this.setState(() => ({
        poops: this.state.poops - 1,
        pooped: false
      }))
    }
  }

  render() {

    return (

      <div className="comment-card-wrapper">

        <div className="comment-card">

        <div className="comment-card-colleft">
          <div id="userImage2"></div>
          <p>Douglas</p>
        </div>

        <div className="comment-wrapper">
          <div className="comment-text" >{this.props.comment}</div>
        </div>
        </div>

        <div className = "comment-reaction-row">
        <div className="buttonbox">
            <div onClick={() => this.poopsome()} style={this.state.pooped ? { color: "brown" } : { color: "black" }} ><FaPoop /></div>
            <div className="likes">{this.state.poops}</div>
          </div>
          <div className="buttonbox">
            <div onClick={() => this.pawsome()} style={this.state.liked ? { color: "green" } : { color: "black" }}><IoPawSharp /></div>
            <div className="likes">{this.state.likes}</div>
          </div>
        </div>

      </div>

    )
  }
}

