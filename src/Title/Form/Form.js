import React, { Component } from 'react';
import './Form.css';
class Form extends Component {

  render() {
    const { title, desc, myChangeHandler, handleToggleClickClean, handleSubmit } = this.props;
    return (
      <div>
        <form >
          <p>Title: </p>
          <input
            type='text'
            name='title'
            placeholder="Title"
            value={title}

            onChange={myChangeHandler}
          />
          <p>Description: </p>
          <input
            type='text'
            name='desc'
            placeholder="Description"
            value={desc}
            onChange={myChangeHandler}
          />
          <div>
            <button type="button" onClick={handleSubmit}>Save</button>
            <button type="button" onClick={handleToggleClickClean}>Cancel</button>
          </div>
        </form>
      </div >
    );
  }
}
export default Form;