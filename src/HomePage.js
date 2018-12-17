import React, { Component } from 'react';
import './HomePage.css';
import Doggie from './components/images/koira1.jpg';
import Navigation from './components/Navigation';
import Piggie from './components/images/pig.svg';
/* import Kitten from './components/Images/cat.svg'; */
import Progress from './components/images/progressbarmock.jpg';
import Bowldoggie from './components/images/dog19.jpg'     

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
                </div>
                <div className="container-fluid"> {/* <!-- tällä saa containerista responsiivisen --> */}
                    <div className="row">
                        <div className="who-we-are-and-puppy-area">
                             <section>
                    <div className="whoWeAre">
                        <h1>Who we are</h1>
                        <p>Gouves Animal Shelter is Greek non-profit organisation, located in the lovely island of Crete.
                
                
                
                            We take care of more than 200 dogs and 200 cats every single month, dedicating our time to make sure these animals have a new chance in life. We have neutering and educational programmes to help change the animal welfare laws and attitudes of the people.
                
                            ​
                
                            Our dogs find homes all over Europe and even US, so please feel free to check our dogs and cats waiting for homes! If you wish to support us, by donating, or maybe volunteering, we welcome the help! We don´t get any help from the government, so our volunteer work is financed by individuals like you!</p>
                    </div>
                </section>
            <section>
                <div className="dog-bowl-area">
                <img className="puppybowl" src={Bowldoggie} height="350px" width="550px" alt="Dog and flower"/>
                </div>
            </section>
                </div>
                </div>     
                {/* <section>
                    <div class="whoWeAre">
                        <h1>Who we are</h1>
                        <p>Gouves Animal Shelter is Greek non-profit organisation, located in the lovely island of Crete.
                
                
                
                            We take care of more than 200 dogs and 200 cats every single month, dedicating our time to make sure these animals have a new chance in life. We have neutering and educational programmes to help change the animal welfare laws and attitudes of the people.
                
                            ​
                
                            Our dogs find homes all over Europe and even US, so please feel free to check our dogs and cats waiting for homes! If you wish to support us, by donating, or maybe volunteering, we welcome the help! We don´t get any help from the government, so our volunteer work is financed by individuals like you!</p>
                    </div>
                </section>
                <section>
                <div class="dog-bowl-area">
                <img class="puppybowl" src={Bowldoggie} height="350px" width="550px" alt="Dog in a bowl"/>
                </div>
            </section> */}
            <div className="container-fluid"> {/* <!-- tällä saa containerista responsiivisen --> */}
                <section>
                <div className="battle-pig-area">
                <section>
                <div className="piggiebank-area">
                <img className="pig" src={Piggie} height="350px" width="550px" alt="Piggy bank"/>
                </div>
            </section>
            
            {/* <div className="progress-bar-area">
                <img className="progress-bar" src={Progress} height="280px" width="400px" alt="Progress bars for donations"/>
            </div> */}
            <div className="make-a-donation-area">
            <h2>You may feel like <br/> a drop in the bucket.</h2> <h3>But every drop counts! <br/>Make a Donation!</h3>
                <img className="progress-bar" src={Progress} height="280px" width="400px" alt="Progress bars for donations"/>
            </div>
            {/* <div className="Button">
            <Button onClick={() => alert('Welcome!')}>
              Hop in!
            </Button>
          </div> */}
            
        
            </div>
                </section>
                </div>
                <section>
                    <div className="placefornothing"> 
                    {/* <img class="cat" src={Kitten} height="350px" width="100%" alt="it's nothing here"/>  */}
                    </div>
                </section>
    
                <section>
                <div className="footer">
                    <p>Contact Us: Tel 123-456-7890 , Fax 123-456-7890</p>
                    <p>email: <a href="email:gouvesshelter@gmail.com">
                    gouvesshelter@gmail.com</a></p>
                </div>
                </section>
                </div>
            </div>
            );
        }
    }
    