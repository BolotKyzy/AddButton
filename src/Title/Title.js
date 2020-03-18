import React, { Component } from "react";
import "./Title.css";
import Form from "./Form/Form";
import Card from "./Card/Card";
class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormOpen: -2,
      isCardOpen: -2,
      infoList: []
    };
  }

  toggleForm = (isFormOpen = -2) => {
    if (this.state.isFormOpen === isFormOpen) isFormOpen = -2;
    this.setState({ isFormOpen });
    this.toggleCard();
  };

  toggleCard = (isCardOpen = -2) => {
    if(this.state.isCardOpen === isCardOpen) isCardOpen = -2;
    this.setState({isCardOpen});
  }

  createInfo = form => {
    let infoList = [...this.state.infoList];
    infoList.push(form);
    this.setState({ infoList });
  };

  editInfo = (form, idx) => {
    // this.setState(isFormOpen: -2);
    let infoList = [...this.state.infoList];
    infoList[idx] = form;
    this.setState({ infoList });
  };

  deleteInfo = idx => {
    let infoList = [...this.state.infoList];
    infoList.splice(idx, 1);
    this.setState({ infoList });
  };

  render() {
    const {
      state: { isFormOpen, infoList , isCardOpen},
      toggleForm,
      toggleCard,
      createInfo,
      deleteInfo
    } = this;

    return (
      <div>
        <button type="Button" onClick={() => toggleForm(-1)}>
          Add
        </button>
        {isFormOpen === -1 && (
          <Form toggleForm={toggleForm} onSave={createInfo} toggleCard = {this.toggleCard}/>
        )}

        {infoList.map((info, idx) => (
          <div key={idx}>
            <div>
              {isCardOpen === -2 && (
            <Card
              info={info}
              toggleForm = {toggleForm}
              toggleCard = {toggleCard}
              idx = {idx}
              onDelete = {deleteInfo}
            />
              )}
            </div>
            {isFormOpen === idx && (
              <Form
                toggleForm={toggleForm}
                toggleCard={toggleCard}
                info={info}
                onSave={this.editInfo}
                idx={idx}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}
export default Title;
