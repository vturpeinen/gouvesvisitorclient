import React, { Component } from "react";
import { API, Storage } from "aws-amplify";
//import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import LoaderButton from "../components/LoaderButton";
import config from "../config";
import { s3Upload } from "../libs/awsLib";
import "./Notes.css";
/* import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap"; */
import Footer from "../components/Footer/Footer"
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";




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
      <div className="wrapper">
        <div className="row introduction">
          <div className="container introduction-area">

            <div className="col-xs-12 col-sm-12 card" >

              <div className="col-xs-12 col-sm-3 basic-info" >
                <h1>{this.state.name}</h1>
                <p>Age: {this.state.age}</p>
                <p>Gender: {this.state.gender}</p>
                <p>Size: {this.state.size}</p>
                <p>Color: {this.state.color}</p>
              </div>
        
              <div className="col-xs-12 col-sm-6 animal-img" >
                <img className="image-size" alt="dog without home" src={this.state.attachmentURL}/>
              </div>

                <div className="content-area">
                  <div className="col-xs-12 col-sm-3 content">
                    <p>{this.state.content}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>






                  <div className="row carousel">
                    <div className="container carousel-area">
                      <div className="col-xs-12 col-sm-12">
                        <div className="col-xs-12 col-sm-3 empty1"></div>
                          <div className="col-xs-12 col-sm-6 carousel-center" >
                            <Carousel />
                          </div>
                        <div className="col-xs-12 col-sm-3 empty2"></div>
                      </div>
                    </div>
                  </div>
                <Footer/>
              </div>
            );
          }
        }



















/* 

          render() {
            console.log("notes.render", this.state);
            return (
              <div className="wrapper">
                <div className="row introduction">
                  <div className="container introduction-area">
                    <div className="row card">
                      <div className="col-xs-2 col-sm-2 animal"></div>
                        <div className="col-xs-8 col-sm-8" >
                          <div className="col-xs-12 col-sm-6" >
                            <img className="image-size" alt="dog without home" src={this.state.attachmentURL}/>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                            <div className="introduction-part">
                                <h1>{this.state.name}</h1>
                                <p>Age: {this.state.age}</p>
                                <p>Gender: {this.state.gender}</p>
                                <p>Size: {this.state.size}</p>
                                <p>Color: {this.state.color}</p>
                              </div>
                          </div>
                        </div>
                          <div className="col-xs-2 col-sm-2"></div>
                          </div>
                            <div className="content-area">
                              <div className="col-xs-12 col-sm-12">
                                <p><b>{this.state.content}</b></p>
                              </div>
                            </div>
                          </div>
                        </div>
                          <div className="row carousel-area">
                            <div className="col-xs-12 col-sm-4">
                              <Carousel />
                            </div>
                          </div>
                            <Footer/>
                    </div>
                      
                      );
                    }
                  }
      */       
      