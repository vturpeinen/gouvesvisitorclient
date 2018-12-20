import React, {Component} from 'react';
import Map2 from "../Map2";
import './ContactUsStyle.css';
import Footer from '../Footer';



class ContactUs extends Component {

           /* state = {
               otsikko: '',
               sisalto: '',
               tagit: '',
           } */
           render() {
           return (
               <div>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <div>
                   


               {/* <div className="Page">
                  <div className="Form">
                  <form>
                   <h1>Contact us</h1>
                       <label>
                           <input type="text"
                                  placeholder="Name*"
                                  style={{width: '345px'}}
                                  value={this.state.Name}
                                  onChange={e=> this.setState({otsikko: e.target.value})}/>
                       </label>
                       <br/>
                       <label>
                           <input type="text"
                                  placeholder="Email*"
                                  style={{width: '345px'}}
                                  value={this.state.Email}
                                  onChange={e=> this.setState({tagit: e.target.value})}
                           />
                       </label>
                       <br/>
                       <label>
                           <input type="text"
                                  placeholder="Subject"
                                  style={{width: '345px'}}
                                  value={this.state.Subject}
                                  onChange={e=> this.setState({tagit: e.target.value})}
                       />
                       </label>
                       <br/><br/>
                       <label>
                           <textarea
                               placeholder="Message"
                               name="message"
                               rows="13"
                               cols="40"
                               value={this.state.Message}
                               onChange={e=> this.setState({tagit: e.target.value})}>
                       </textarea>
                       </label>
                       <br/><br/>
                        <div className="Button_box">
                       <input className="Button" type="submit" value="Send" />
                        </div>
                      </form>
                  </div>
                      <div className="Add">
                          <p>Address <br/>
                              Ex American Military Base
                              70015 Goúrnes, Iraklion, Greece </p>
                          <p>Phone <br/>
                           +306979347428 </p>
                          <p>E-mail<br/>
                              gouvesshelter@gmail.com </p>
                      </div>
                   <div className="Map">
                       <Map2/>
                   </div> */}
                  </div>
                  <Footer/>
               </div>
           );

       }
   }

export default ContactUs;