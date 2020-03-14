import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  render() {
    const { info, toggleForm, idx } = this.props;
    return (
      <div>
        -------------------------------------------
        <p>title: {info.title}</p>
        <p>description: {info.desc}</p>
        <button onClick={() => toggleForm(idx)}>edit</button>
        <button>delete</button>
        <br />
        -------------------------------------------
      </div>
    );
  }
}
export default Card;
