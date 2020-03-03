import React, { Component } from 'react';
import './Title.css';
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      situation: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);

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

  // cleanHandler = (event) => {
  //   this.setState({ title: '', desc: '' });

  // }
  handleToggleClick() {
    this.setState(prevState => ({
      situation: !prevState.situation
    }));
  }
  handleToggleClickClean = (event)  => {
    this.setState({situation:false});
  }


  render() {
    const currentSituation = this.state.situation;
    return (
      <div>
        <button type="Button" onClick={this.handleToggleClick}>Add</button>
        {(currentSituation) &&
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
              {/* <button type="button" onClick={this.cleanHandler}>Cancel</button> */}
              <button type="button" onClick={this.handleSubmit}>Save</button>
              <button type ="button" onClick = {this.handleToggleClickClean}>Cancel</button>
            </div>
          </form>}
      </div>

    );
  }
}
export default Title;
