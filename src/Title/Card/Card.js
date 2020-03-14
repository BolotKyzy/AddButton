import React, { Component } from 'react';
import './Card.css';
class Card extends Component {

  render() {
    const { handleDelete, handleEdit } = this.props;
    const information = this.props.information.map((inf) =>
      <div key={inf.idd}>
        <p>{inf.title}</p>
        <p>{inf.desc}</p>
        <button type="button" onClick={handleEdit}>Edit</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </div>
    );
    return (
      <div>
        <form>
          {information}
        </form>
      </div>
    );

  }
}
export default Card;
