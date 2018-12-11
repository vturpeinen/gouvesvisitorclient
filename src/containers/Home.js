import React, { Component } from "react";
import "./Home.css";
import { API } from "aws-amplify";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
//import note from "./Notes";

export default class Home extends Component {
 constructor(props) {
   super(props);

   this.state = {
     isLoading: true,
     Content: []
   };
 }
 async componentDidMount() {
     // if (!this.props.isAuthenticated) {
     //   return;
     // }

   try {
     const notes = await this.notes();
     this.setState({ notes });
   } catch (e) {
     alert(e);
   }

   this.setState({ isLoading: false });
 }

 notes() {
   return API.get("Content", "/Content");
 }

 renderNotesList(Content) {
   return [{}].concat(Content).map((note, i) =>{
        if (Object.keys(note).length === 0) return
        return (
        <LinkContainer
             key={i}
             to={`/Content/${note.typeid}`}
           >
             <ListGroupItem float="left" header={note.name.trim().split("\n")[0]}>
             <img className="Animal" src={"https://gouves-lataukset.s3.eu-central-1.amazonaws.com/public/" + note.attachment} alt="" />
             </ListGroupItem>
        </LinkContainer>
   )});
 }

 renderLander() {
   return (
     <div className="lander">
       <h1>Gouves Animal Shelter</h1>
       <p>Adopt an orphan animal =)</p>
     </div>
   );
 }

 renderNotes() {
   console.log("RenderNotes.state", this.state);
   return (
     <div className="notes">
       <PageHeader>Our Animals to Adopt</PageHeader>
       <ListGroup>
         {!this.state.isLoading && this.renderNotesList(this.state.notes)}
       </ListGroup>
     </div>
   );
 }

 render() {
   return (
     <div className="Home">
        {/* {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}  */}
        {this.renderNotes()}
     </div>
   );
 }
}