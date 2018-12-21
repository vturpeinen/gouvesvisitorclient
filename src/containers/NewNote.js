import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
// import "./NewNote.css";
import { API } from "aws-amplify";
import { s3Upload } from "../libs/awsLib";

export default class NewNote extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null,
      content: "",
      title: "",
      name: "",
      age: "",
      size: "",
      gender: "",
      color: ""

    };
  }

  validateForm() {
    return this.state.content.length > 0 && this.state.title.length >0 && this.state.name.length > 0 && this.state.age.length >0
    && this.state.size.length >0 && this.state.gender.length >0 && this.state.color.length >0;

  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  handleSubmit = async event => {
    event.preventDefault();
  
    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`);
      return;
    }
  
    this.setState({ isLoading: true });
  
    try {
      const attachment = this.file
        ? await s3Upload(this.file)
        : null;
  
      await this.createNote({
        attachment,
        title: this.state.title,
        content: this.state.content, 
        name: this.state.name,
        age: this.state.age,
        size: this.state.size,
        gender: this.state.gender,
        color: this.state.color
            });
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }
  
  createNote(note) {
    return API.post("Content", "/Content", {
      body: note
    });
  }

  render() {
    return (
      <div className="NewNote" id="NewNoteCSS">
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="title">
        <p>Species</p>
            <FormControl
              onChange={this.handleChange}
              value={this.state.title}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlId="name">
          <p>Name</p>
            <FormControl
              onChange={this.handleChange}
              value={this.state.name}
              componentClass="textarea"
            />
          </FormGroup>      
          <FormGroup controlId="age">
          <p>Age</p>
            <FormControl
              onChange={this.handleChange}
              value={this.state.age}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlId="gender">
          <p>Gender (male/female)</p>
            <FormControl
              onChange={this.handleChange}
              value={this.state.gender}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlId="size">
          <p>Size (s, m, l)</p>
            <FormControl
              onChange={this.handleChange}
              value={this.state.size}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlId="color">
          <p>Color</p>
            <FormControl
              onChange={this.handleChange}
              value={this.state.color}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlId="content">
          <p>Content</p>
            <FormControl
              onChange={this.handleChange}
              value={this.state.content}
              componentClass="textarea"
            />
          </FormGroup>
          <FormGroup controlId="file">
            <ControlLabel>Attachment</ControlLabel>
            <FormControl onChange={this.handleFileChange} type="file" />
          </FormGroup>
          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Create"
            loadingText="Creating…"
          />
        </form>
      </div>
    );
  }
}