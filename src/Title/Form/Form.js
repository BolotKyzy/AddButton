import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  state = {
    title: "",
    desc: ""
  };

  componentDidMount() {
    this.initForm();
  }

  initForm = () => {
    if (!this.props.info) return;

    const { title, desc } = this.props.info;
    this.setState({ title, desc });
  };

  onChangeForm = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSave = () => {
    this.props.onSave(this.state, this.props.idx);
    this.props.toggleForm();
  };

  onCancel = () => {
    this.setState({ title: "", desc: "" });
    this.props.toggleForm();

  };

  render() {
    const {
      state: { title, desc }
    } = this;
    return (
      <div>
        <form>
          <p>Title: </p>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.onChangeForm}
          />
          <p>Description: </p>
          <input
            type="text"
            name="desc"
            placeholder="Description"
            value={desc}
            onChange={this.onChangeForm}
          />
          <div>
            <button type="button" onClick={this.onSave} >
              Save
            </button>
            <button type="button" onClick={this.onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
