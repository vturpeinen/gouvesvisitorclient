import React, { Component } from 'react';
import './HomePage.css';
import Doggie from './components/Images/koira1.jpg';
import Navigation from './components/Navigation';
import Piggie from './components/Images/pig.svg';
import Progress from './components/Images/progressbarmock.jpg';
import Bowldoggie from './components/Images/dog19.jpg';     
import Footer from './Footer';
import facelogo from './components/Images/icons8-facebook.svg';
import insta from './components/Images/instagram.svg';



export default class HomePage extends Component {
    render() {
            return (
                <div>
                <Navigation/>
                <div className="container-fluid"> {/* <!-- tällä saa containerista responsiivisen --> */}
                 <div className="row">
                        <div className="cuteDogArea">
                            <img className="dog1" src={Doggie} alt="Doggie with flowers"/>
                            <div className="welcome"><h1>Welcome</h1><p>protection and adoption of stray animals</p></div>
                        </div>
                    </div>     
                    <div className="container-fluid"> {/* <!-- tällä saa containerista responsiivisen --> */}
                    <div className="row">
                        <div className="who-we-are-and-puppy-area">
                    <div className="whoWeAre">
                        <h1>Who we are</h1>
                        <p>Gouves Animal Shelter is Greek non-profit organisation, located in the lovely island of Crete.
                            We take care of more than 200 dogs and 200 cats every single month, dedicating our time to make sure these animals have a new chance in life. We have neutering and educational programmes to help change the animal welfare laws and attitudes of the people.
                            Our dogs find homes all over Europe and even US, so please feel free to check our dogs and cats waiting for homes! If you wish to support us, by donating, or maybe volunteering, we welcome the help! We don´t get any help from the government, so our volunteer work is financed by individuals like you!</p>
                    </div>
                <div className="dog-bowl-area">
                <img className="puppybowl" src={Bowldoggie} height="350px" width="550px" alt="Dog and flower"/>
                </div>
                </div>
                </div>     
            
            <div className="container-fluid"> {/* <!-- tällä saa containerista responsiivisen --> */}
               <div className="battle-pig-area">
                <div className="piggiebank-area">
                <img className="pig" src={Piggie} height="350px" width="550px" alt="Piggy bank"/>
                
               </div>
            <div className="make-a-donation-area">
            <h2>You may feel like <br/> a drop in the bucket.</h2> <h3>But every drop counts! <br/>Make a Donation!</h3>
                <img className="progress-bar" src={Progress} height="280px" width="400px" alt="Progress bars for donations"/>
            </div>
            </div>  
            </div>




                    <div className="row socialmediarow">
                        <div className="col-xs-4 col-sm-4" >
                            <div className="youtube-box"> 

                                <iframe 
                                    width="500" height="300"
                                    src="https://www.youtube.com/embed/YvhvCBGthE0"
                                    frameborder="120" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    
             
                    <div className="col-xs-6" >
                        <a className="fb-box" href="https://www.facebook.com/gouvesanimalshelter/">
                            <span>Follow us on Facebook</span>
                                <img src={facelogo} className="fb-img" alt="fb"/>
                                </a>
                            </div>
                        
                            <div className="col-xs-6" >
                                <a className="ig-box" href="https://www.instagram.com/thegouvesshelter/?hl=en">
                                    <span>Follow us on Instagram</span>
                                        <img src={insta} className="ig-img" alt="insta"/>
                                </a>     
                                </div>    
                                </div>
                                </div>
                <Footer/>                
                    </div>   
                </div>
               
            
    );
        
        }
    }
    
    