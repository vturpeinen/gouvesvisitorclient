import React, { Component } from "react";
import "./Home.css";
import { API } from "aws-amplify";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {MenuItem, SplitButton} from 'react';
import Footer from '../components/Footer/Footer';

export default class Animals extends Component {

 constructor(props) {
   super(props);

   this.state = {
     isLoading: true,
     Content: []
   };
 }
 
 async componentDidMount() {

   try {
     const notes = await this.notes();
     this.setState({ notes:notes, all: true });
   } catch (e) {
     alert(e);
   }

   this.setState({ isLoading: false});
 }

 notes() {
   return API.get("Content", "/Content");
 }

 renderNotesList(Content) { // makes a list of all the animals in the db
    return [{}].concat(Content).map((note, i) =>{
        if (Object.keys(note).length === 0) return
        if (Object.keys(note))
        return (
        <LinkContainer 
             key={i}
             to={`/Content/${note.typeid}`}
           >
                                {/* COPY HERE */}
                  <div className="col-xs-12 col-md-4">
                      <div className="">
                          <div className="row">
                              <h1 className="text">{note.name.trim().split()[0]}</h1>
                          </div>
                          <div className="row">
                              <div className="col-xs-12 col-sm-12">
                                  <img className="Animal" src={"https://gouves-lataukset.s3.eu-central-1.amazonaws.com/public/" + note.attachment} alt="" />
                              </div>
                          </div>
                          <div className="row basic-info">
                              <p className="gender"> <b>Gender:</b> {note.gender.trim().split()[0]}</p>
                              <p className="age"> <b>Age:</b> {note.age.trim().split()[0]}</p>  
                              <p className="size"> <b>Size:</b> {note.size.trim().split()[0]}</p>
                          </div>  
                      </div>
                  </div>
                
        </LinkContainer>
   )});
 }


    malesList(notes){ //lists all the male dogs 
      var malesList = [];
      if (notes) { // automaattinen tarkastus onko undefined.
        for (var i = 0; i <notes.length; ++i) {
          if (notes[i].gender ==="Male" || notes[i].gender ==="male")  {
            malesList.push(notes[i])
          }
          
        }
        return [{}].concat(malesList).map((male, i ) => {
          if (Object.keys(male).length === 0) return
          if (Object.keys(male))
          return (
            <LinkContainer 
                key={i}
                to={`/Males`}
              >
              {/* PASTE HERE */}
              
      {/*             <div className="col-xs-12 col-md-4">
                      <div className="">
                          <div className="row">
                              <h1 className="text"> {male.name.trim().split()[0]}</h1>
                          </div>
                          <div className="row">
                              <div className="col-xs-12 col-sm-12">
                                  <img className="Animal" src={"https://gouves-lataukset.s3.eu-central-1.amazonaws.com/public/" + male.attachment} alt="" />
                              </div>
                          </div>
                          <div className="row basic-info">
                              <h4 className="text"> {male.name.trim().split()[0]}</h4>
                              <img className="Animal" src={"https://gouves-lataukset.s3.eu-central-1.amazonaws.com/public/" + male.attachment} alt="" />  
                              <p className="gender">{male.gender.trim().split()[0]}</p>
                              <p className="age">{male.age.trim().split()[0]}</p>
                          </div>  
                      </div>
                  </div> */}
                
              {/* <div className="ListOneItem">
              <h4 className="Text"> {male.name.trim().split()[0]}</h4>
                <img className="Animal" src={"https://gouves-lataukset.s3.eu-central-1.amazonaws.com/public/" + male.attachment} alt="" />
                  <p className="gender">{male.gender.trim().split()[0]}</p>
                  <p className="age">{male.age.trim().split()[0]}</p>  
              </div> */}
           </LinkContainer>
    
          )
        });
    
        } 
      }


 /* 
 EI _EHKÄ_ VAIKUTA MISSÄÄN MIHINKÄÄN?
 
 renderLander() {
   return (
     <div className="lander">
       <h1>Gouves Animal Shelter</h1>
       <p>Adopt an orphan animal =)</p>
     </div>
   );
 } */

 renderNotes() {
   return (
     <div className="">
       <h1 className="adopt">Our Animals to Adopt</h1>
       <div className="buttons-f-m">
        <button className="button-search"><a href="/Males">Males</a></button>
        <button className="button-search"><a href="/Females">Females</a></button>
        </div>
       <ListGroup>
         {!this.state.isLoading && this.renderNotesList(this.state.notes)}
       </ListGroup>
     </div>
   );
 }



 render() {
   return (
     <div className="Home">
        {this.renderNotes()}
        {/* {this.malesList(this.state.notes)}  */}
        {/* {this.femalesList(this.state.notes)}  */}
        <div className="clear-float"></div>
        <Footer/>
     </div>
   );
 }




}