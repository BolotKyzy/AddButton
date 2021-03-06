import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  changeForm = () => {
    this.props.toggleForm(this.props.idx);
  }
  

  render() {
    const { info, idx, onDelete } = this.props;
    return (
      <div>
        -------------------------------------------
        <p>title: {info.title}</p>
        <p>description: {info.desc}</p>
        <button onClick={this.changeForm}>edit</button>
        <button onClick={() => onDelete(idx)}>delete</button>
        <br />
        -------------------------------------------
      </div>
    );
  }
}
export default Card;
