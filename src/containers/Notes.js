import React, { Component } from "react";
import { API, Storage } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import { s3Upload } from "../libs/awsLib";
import "./Notes.css";

// import "./Notes.css";

export default class Notes extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
        isLoading: null,
        isDeleting: null,
        note: null,
        content: "",
        title: "",
        name:"",
        age: "",
        size: "",
        gender: "",
        color: "",
        attachmentURL: null
      };
    }

  async componentDidMount() {
    try {
      let attachmentURL;
      const note = await this.getNote();
      const { content, title, name, age, size, gender, color, attachment } = note;
 
      if (attachment) {
        attachmentURL = await Storage.get(attachment);
      }

      this.setState({
        
        note,
        content,
        title,
        name,
        age,
        size,
        gender,
        color,
        attachmentURL
      });
      console.log("note.componentDidMount",this.state);
    } catch (e) {
      alert(e);
    }
  }

  getNote() {
    return API.get("Content", `/Content/${this.props.match.params.id}`);
  }

  validateForm() {
    return this.state.content.length > 0;
  }

  formatFilename(str) {
    return str.replace(/^\w+-/, "");
  }
  
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  
  handleFileChange = event => {
    this.file = event.target.files[0];
  }
  
  saveNote(note) {
    return API.put("Content", `/Content/${this.props.match.params.id}`, {
      body: note
    });
  }
  
  handleSubmit = async event => {
    let attachment;
  
    event.preventDefault();
  
    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`);
      return;
    }
  
    this.setState({ isLoading: true });
  
    try {
      if (this.file) {
        attachment = await s3Upload(this.file);
      }
  
      await this.saveNote({
        content: this.state.content,
        attachment: attachment || this.state.note.attachment
      });
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }
 

// deleteNote() {
//     return API.del("Content", `/Content/${this.props.match.params.id}`);
//   }
  
//   handleDelete = async event => {
//     event.preventDefault();
  
//     const confirmed = window.confirm(
//       "Are you sure you want to delete this?"
//     );
  
//     if (!confirmed) {
//       return;
//     }
  
//     this.setState({ isDeleting: true });
  
//     try {
//       await this.deleteNote();
//       this.props.history.push("/");
//     } catch (e) {
//       alert(e);
//       this.setState({ isDeleting: false });
//     }
//   }
  
  render() {
    console.log("notes.render", this.state);
    return (
      <div className="NewNote">
      <p>{this.state.title}</p>
      <p>{this.state.name}</p>
      <p>{this.state.age}</p>
      <p>{this.state.gender}</p>
      <p>{this.state.size}</p>
      <p>{this.state.color}</p>
      <p>{this.state.content}</p>
      <img src={this.state.attachmentURL} alt="new"/>

        {/* {this.state.note &&
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
          <p>Introduction</p>
            <FormControl
              onChange={this.handleChange}
              value={this.state.content}
              componentClass="textarea"
            /> */}
          {/* </FormGroup>   
            {this.state.note.attachment &&
              <FormGroup>
                <ControlLabel>Picture on link below</ControlLabel>
                <FormControl.Static>
                <img src={this.state.attachmentURL} alt="new"
     />
                </FormControl.Static>
              </FormGroup>}

           
          </form>} */}
      </div>
    );
  }
}