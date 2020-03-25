import React, { Component } from "react";
import "./Title.css";
import Form from "./Form/Form";
import Card from "./Card/Card";
class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormOpen: -2,
      infoList: []
    };
  }

  toggleForm = (isFormOpen = -2) => {
    if (this.state.isFormOpen === isFormOpen) isFormOpen = -2;
    this.setState({ isFormOpen });
  };

  createInfo = form => {
    let infoList = [...this.state.infoList];
    infoList.push(form);
    this.setState({ infoList });
  };

  editInfo = (form, idx) => {
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
      state: { isFormOpen, infoList },
      toggleForm,
      createInfo,
      deleteInfo
    } = this;

    return (
      <div>
        <button type="Button" onClick={() => toggleForm(-1)}>
          Add
        </button>
        {isFormOpen === -1 && (
          <Form toggleForm={toggleForm} onSave={createInfo} />
        )}

        {infoList.map((info, idx) => (
          <div key={idx}>
            {isFormOpen !== idx ?
              <Card
                info={info}
                toggleForm={toggleForm}
                idx={idx}
                onDelete={deleteInfo}
              />:
              <Form
                toggleForm={toggleForm}
                info={info}
                onSave={this.editInfo}
                idx={idx}
              />
            }
          </div>
        ))}
      </div>
    );
  }
}
export default Title;
