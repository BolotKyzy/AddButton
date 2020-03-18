import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  // changeForm = () => {
  //   this.props.toggleForm(this.idx);
  // }
  //   deleteElement = (idx) => {

  //     this.props.onDelete(idx);
  //   }

  render() {
    const { info, idx, onDelete, toggleForm } = this.props;
    return (
      <div>
        -------------------------------------------
        <p>title: {info.title}</p>
        <p>description: {info.desc}</p>
        <button onClick={() => toggleForm(idx)}>edit</button>
        <button onClick={() => onDelete(idx)}>delete</button>
        <br />
        -------------------------------------------
      </div>
    );
  }
}
export default Card;
