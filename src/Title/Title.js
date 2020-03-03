import React, { Component } from 'react';
import './Title.css';
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      t: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    // this.cleanHandler = this.cleanHandler.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Title: ', this.state.title);
    console.log('Description: ', this.state.desc);

    alert('Title: ' + this.state.title + '\nDescription: ' + this.state.desc);
  }

  myChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  cleanHandler = (event) => {
    this.setState({ title: '', desc: '' });

  }
  handleToggleClick() {
    this.setState(prevState => ({
      t: !prevState.t
    }));
  }


  render() {
    const p = this.state.t;
    return (
     /* <form
        onSubmit={this.handleSubmit}
      >
        <p>Title1: </p>
        <input
          type='text'
          name='title'
          placeholder="Title"
          value={this.state.title}*/

      <div>
        <button type="Button" onClick={this.handleToggleClick}>Add</button>
        {(p) &&
          <form
            onSubmit={this.handleSubmit}
          >
            <p>Title: </p>
            <input
              type='text'
              name='title'
              placeholder="Title"
              value={this.state.title}

              onChange={this.myChangeHandler}
            />
            <p>Description: </p>
            <input
              type='text'
              name='desc'
              placeholder="Description"
              value={this.state.desc}
              onChange={this.myChangeHandler}
            />
            <div>
              <button type="button" onClick={this.cleanHandler}>Cancel</button>
              <button type="button" onClick={this.handleSubmit}>Save</button>
            </div>
          </form>}
      </div>

    );
  }
}
export default Title;
