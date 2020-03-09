import React, { Component } from 'react';
import './Title.css';
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      situation: true,
      checkSave: false,
      checkEdit: false,
      a:'', b:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Title: ', this.state.title);
    console.log('Description: ', this.state.desc);
    // alert('Title: ' + this.state.title + '\nDescription: ' + this.state.desc);
    this.setState({ checkSave: true,situation: false});
    this.state.a = this.state.title;
    this.state.b = this.state.desc;
  }

  myChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleToggleClick() {
    this.setState(prevState => ({
      situation: !prevState.situation,title: '', desc: '',checkSave: true
    }));
  }
  handleToggleClickClean = (event) => {
    this.setState({ situation: false, title: '', desc: '', checkSave: false });
  }

  handleEdit = (event) => {
    this.setState({ checkEdit: true,situation: true});
  }
  handleDelete = (evend) => {
    this.setState({ title: '', desc: '', checkEdit: false, checkSave: false });
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
              <button type="button" onClick={this.handleSubmit}>Save</button>
              <button type="button" onClick={this.handleToggleClickClean}>Cancel</button>
            </div>
          </form>
        }
        {(this.state.checkSave) &&
          <form>
            <p>{this.state.a} </p>
            <p>{this.state.b}</p>
            <button type="button" onClick={this.handleEdit}>Edit</button>
            <button type="button" onClick={this.handleDelete}>Delete</button>
          </form>}
        {
          // (this.state.checkEdit) &&
          // // const a = this.state.title;
          // // const b = this.state.desc;
          // <form>
          //   <p>Title: {this.state.title} </p>
          //   <p>Description: {this.state.desc}</p>
          // </form>
        }

      </div>


    );
  }
}
export default Title;
