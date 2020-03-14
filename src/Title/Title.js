import React, { Component } from 'react';
import './Title.css';
import Form from './Form/Form';
import Card from './Card/Card';
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAddButton: true,
      title: '',
      desc: '',
      checkSaveButton: false,
      checkEditButton: false,
      information: []

    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  };
  idd = 1;


  handleDelete = (id) => {
    this.setState(({ information }) => {
      const idx = information.findIndex((el) => el.id === id);
      information.splice(idx, 1);
      const before = information.splice(0, idx);
      const after = information.splice(idx + 1);
      const newArray = [...before, ...after];
      return {
        information: newArray
      };
    });

  };

  handleEdit = (id) => {
    this.setState({ checkEditButton: true });
    const idx = this.state.information.findIndex((el) => el.id === id);
    console.log("111:", idx);
  };


  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ checkSaveButton: true });


    this.state.information.push({ id: this.idd++, title: this.state.title, desc: this.state.desc });
    console.log('Title: ', this.state.title);
    console.log('Description: ', this.state.desc);
  }

  handleToggleClick() {
    this.setState({
      checkAddButton: true, title: '', desc: '', checkSaveButton: true
    });
  }

  myChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });

  }

  handleToggleClickClean = (event) => {
    this.setState({ title: '', desc: '' });
  }



  render() {
    const currentAddButton = this.state.checkAddButton;
    const checkSaveButton = this.state.checkSaveButton;
    const checkEditButton = this.state.checkEditButton;
    return (
      <div>
        <button type="Button" onClick={this.handleToggleClick}>Add</button>
        {(currentAddButton) &&
          <Form title={this.state.title} desc={this.state.desc} myChangeHandler={this.myChangeHandler} handleToggleClickClean={this.handleToggleClickClean} checkSaveButton={this.state.checkSaveButton} handleSubmit={this.handleSubmit} />
        }
        {(checkSaveButton) &&
          <Card information={this.state.information} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
        }
        {/* {(checkEditButton) && 
        <Form />} */}
      </div>
    );
  }
}
export default Title;