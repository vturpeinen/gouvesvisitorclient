import React, { Component } from "react";
import { API, Storage } from "aws-amplify";
//import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import LoaderButton from "../components/LoaderButton";
import config from "../config";
import { s3Upload } from "../libs/awsLib";
import "./Notes.css";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import Footer from "../Footer"



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
  
  render() {
    console.log("notes.render", this.state);
    return (
      <div className="FirstLayer" id="NotesCss">

        <div class="ProfileCardFirstPart">
        <div class="ProfilePhotoPart">
        <img className="DogImage" alt="dog without home" src={this.state.attachmentURL}/>
        </div>
        <div className="IntroductionPart">
        <h1 className="Name"><b>{this.state.name}</b></h1>
        <h3>{this.state.age}</h3>
        <h3>{this.state.gender}</h3>
        <h3>{this.state.size}</h3>
        <h3>{this.state.color}</h3>
        </div>
        </div>
        <div className="ContentArea">
        <br/>
          <p><b>{this.state.content}</b></p>
        </div>
        <Footer/>

      </div>



/* 
      <div className="row missionrow"id="MissionsAndValues"> 
      <div className="col-xs-12 col-sm-4">
      <img className="profile-pic" alt="dog without home" src={this.state.attachmentURL}/>
      </div>
      <div class="col-xs-12 col-sm-8">
          <div className="mission-values-box" >
           <h2><b>{this.state.name}</b></h2>
            <p><b>{this.state.age}</b></p>
            <p><b>{this.state.gender}</b></p>
            <p><b>{this.state.size}</b></p>
            <p><b>{this.state.color}</b></p>
            <br></br>   
            </div>
      </div>     
  </div> */
    
    );
  }
}
    
      