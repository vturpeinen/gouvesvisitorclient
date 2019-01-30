import React, { Component } from "react";
import "./Home.css";
import { API } from "aws-amplify";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {MenuItem, SplitButton} from 'react';
import Footer from '../components/Footer/Footer';
//import note from "./Notes";

export default class Females extends Component {

 constructor(props) {
   super(props);

   this.state = {
     isLoading: true,
     all: false,
     displaySpecies: false,
     // D + C
     displayAge: false,
     // >1 + 1-3 + 4-6 + <6
     displayGender: false, 
     // F + M
     displaySize: false,
     // S + M + L
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
           <div className="ListOneItem">
           <h4 className="Text">{note.name.trim().split()[0]}</h4>
             <img className="Animal" src={"https://gouves-lataukset.s3.eu-central-1.amazonaws.com/public/" + note.attachment} alt="" />
               <p className="gender">{note.gender.trim().split()[0]}</p>
               <p className="age">{note.age.trim().split()[0]}</p>  
           </div>
        </LinkContainer>
   )});
 }
 
 displayCats = () => {
   this.setState({ displaySpecies: !this.state.displaySpecies
   })
 }

 catsList(notes){ //lists all the cats
  var catsList = [];
  if (notes) { // automaattinen tarkastus onko undefined.
    for (var i = 0; i <notes.length; ++i) {
      if (notes[i].title ==="Cat" || notes[i].gender ==="cat")  {
        catsList.push(notes[i])
      }
    }
    return [{}].concat(catsList).map((cat, i ) => {
      if (Object.keys(cat).length === 0) return
      if (Object.keys(cat))
      return (
        <LinkContainer 
            key={i}
            to={`/Content/${cat.typeid}`}
          >
          <div className="ListOneItem">
            <h4 className="Text">{cat.name.trim().split()[0]}</h4>
            <img className="Animal" src={"https://gouves-lataukset.s3.eu-central-1.amazonaws.com/public/" + cat.attachment} alt="" />
              <p className="gender">{cat.gender.trim().split()[0]}</p>
              <p className="age">{cat.age.trim().split()[0]}</p>  
          </div>
       </LinkContainer>
      )
    });
    } 
  }
 
  dogList(notes){ //lists all the dogs
    var dogList = [];
    if (notes) { // automaattinen tarkastus onko undefined.
      for (var i = 0; i <notes.length; ++i) {
        if (notes[i].title ==="Dog" || notes[i].gender ==="dog")  {
          dogList.push(notes[i])
        }
      }
      return [{}].concat(dogList).map((dog, i ) => {
        if (Object.keys(dog).length === 0) return
        if (Object.keys(dog))
        return (
          <LinkContainer 
              key={i}
              to={`/Content/${dog.typeid}`}
            >
            <div className="ListOneItem">
              <h4 className="Text">{dog.name.trim().split()[0]}</h4>
              <img className="Animal" src={"https://gouves-lataukset.s3.eu-central-1.amazonaws.com/public/" + dog.attachment} alt="" />
                <p className="gender">{dog.gender.trim().split()[0]}</p>
                <p className="age">{dog.age.trim().split()[0]}</p>  
            </div>
         </LinkContainer>
        )
      });
      } 
    }

    handleMalesClick(malesList) {
      return(
        <div>
          {this.malesList(this.state.notes)}
        </div>
      )
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
                to={`/Content/${male.typeid}`}
              >
              <div className="ListOneItem">
                <h4 className="Text">{male.name.trim().split()[0]}</h4>
                <img className="Animal" src={"https://gouves-lataukset.s3.eu-central-1.amazonaws.com/public/" + male.attachment} alt="" />
                  <p className="gender">{male.gender.trim().split()[0]}</p>
                  <p className="age">{male.age.trim().split()[0]}</p>  
              </div>
           </LinkContainer>
          )
        });
        } 
      }

  femalesList(notes){ //lists all the female dogs
    var femalesList = [];
    if (notes) { // automaattinen tarkastus onko undefined.
      for (var i = 0; i <notes.length; ++i) {
        if (notes[i].gender ==="Female" || notes[i].gender ==="female")  {
          femalesList.push(notes[i])
        }
      }
      return [{}].concat(femalesList).map((female, i ) => {
        if (Object.keys(female).length === 0) return
        if (Object.keys(female))
        return (
          <LinkContainer 
              key={i}
              to={`/Content/${female.typeid}`}
            >
            <div className="ListOneItem">
              <h4 className="Text"> {female.name.trim().split()[0]}</h4>
              <img className="Animal" src={"https://gouves-lataukset.s3.eu-central-1.amazonaws.com/public/" + female.attachment} alt="" />
                {/* <p className="gender"><b>{female.gender.trim().split('\n')[0]}</b></p> */}
                <p className="age">Age: {female.age.trim().split()[0]}</p>  
                <p className="age">Size: {female.size.trim().split()[0]}</p>  
            </div>
         </LinkContainer>
        )
      });
      } 
    }
 /* renderLander() {
   return (
     <div className="lander">
       <h1>Gouves Animal Shelter</h1>
       <p>Adopt an orphan animal =)</p>
     </div>
   );
 } */

 renderNotes() {
   return (
     <div className="notes">
        <h1>Our Animals to Adopt</h1>
        <div className="buttons">
          <button className="button"><a href="/Males">Males</a></button>
          <button className="button"><a href="/Females">Females</a></button>
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
            <h3>Females</h3>
          <div className="buttons">
            <button className="buttonSearch" href="/Males"><a href="/Males">Males</a></button>
            <button className="buttonSearch" href="/Adopt"><a href="/Adopt">All</a></button>
          </div>
              {/* {this.renderNotes()} */}
              {/* {this.malesList(this.state.notes)}  */}
            {this.femalesList(this.state.notes)} 
        <Footer/>
    </div>
   );
 }
}