import React, { Component } from 'react';
import './Styles/Ongoing.css'
import StarryDog from './Images/dog6.jpg';
import PitifulDog from './Images/dog37.jpg';
/* import SadDog from './images/koira.png'; */
import Footer from '../Footer';


class OngoingMissions extends Component {
    render() {
        return (
            <div>
                <div className="wrapper ongoingwrapper">
                <div className="row ongoingrow"> 
                    <div className="col-xs-12 col-sm-4">
                        <img className="starry-dog" src={StarryDog} alt="Dog with star scarf"/>
                    </div>
                        <div class="col-xs-12 col-sm-8">
                            <div className="ongoing-box">
                                <h1>Ongoing Missions</h1>
                                <br/><p>Gouves Animal Shelter has many ongoing missions, since our purpose is not to only make the shelter better, but help the overall situation of unwanted animals in the island. At times this can feel like an overwhelming struggle, with no end, but giving up is not an option. To make the journey more easy to handle, we have both long and short term targets, that we hope to achieve with the help of our followers, supporters and co-operation partners, as well as with the government. <br/>
                                <br/>You can read all about our ongoing missions, as well as past missions, and follow how close or far we are from achieving those targets. If you wish to help us achieve any of our goals, please donate, share our story or help in any way you can - any help is always much appreciated. <br/>
                                <br/>We might not change everything in a month, or in a year, but in those times we can change so many lives and in long term, help make the whole island better place for the animals that have no voice.
                                 </p>
                            </div>
                        </div>     
                    </div>
                </div>
            <div className="wrapper shelterwrapper">
                    <div className="row shelterrow"> 
                        <div className="col-xs-12 col-sm-4">
                            <img className="pitiful-dog" src={PitifulDog} alt="Pitiful dog with adopt me face"/>
                        </div>
                            <div class="col-xs-12 col-sm-8">
                                <div className="shelter-box">
                                    <h2>Building new shelter</h2>
                                    <br/><p>At the moment the shelter is under enormous pressure to relocate. The government wants us to move from our old place and since we don't own the land, they have no legal restrictions for evicting us. This leaves us with the reality, that if we don't find a new land, we will have almost 200 dogs without a place. <br/> 
                                    <br/>Now we are desperately trying to fundraise enough money to buy a place, where we could keep these animals safe. Our goal is not to make a new shelter like the old one, but to have more land and room, so the dogs could run free. Please check out all of our plans and financial calculations to see what we are trying to accoplish<br/>
                                    </p>
                                </div>
                            </div> 
                        </div>
                    </div>
                        <div className="wrapper neuterwrapper">
                            <div className="row neuterrow"> 
                            {/*<div class="col-xs-3">
                                 <div className="cost-box">
                                    <h2>Cost of neutering:</h2>
                                        <br/><h3>Dogs</h3>
                                            <p>Male: 50 €<br/>
                                            Female: 100 €<br/>
                                            <br/><h3>Cats</h3>
                                            Male: 30 €<br/>
                                            Female: 75 €<br/>

                                        <br/><h3>Our goal for 2019</h3>
                                        <br/>200 Dogs
                                        <br/>200 Cats
                                            </p>


                                </div> */}
                            </div>
                                {/* <div className="col-xs-3">
                                    <img className="sad-dog" src={SadDog} alt="Dog with super sad face"/>
                                </div> */}
                                <div class="col-xs-12">
                                <div className="neuter-box">
                                    <h2>Neutering strays</h2>
                                    <br/><p>The stray problem at the island has many reasons and unlike in many countries, the biggest problem is not strays multiplying at the streets. There are more and more puppies born in households and dumped to the streets every day, because of poor financial situations and because of lack of education. These all need to be considered, when we try to find solutions to prevent the rising number of strays as well as trying to get better animal welfare laws.<br/> 
                                    <br/>Ideally we could combine few elements, which would make all the difference:<br/>
                                    <br/><h3>1. Neutering the strays</h3> 
                                    Neutering every stray would prevent unwanted puppies being born to the streets, where most of them die in horrible ways. We can only help few because of our limited recourses and the numbers grow especially during summer, when there is more food available. Stray puppies don't have any protection from diseases, which usually leads to epidemics of Parvo and Canine Distemper - both deadly diseases. When we can prevent these puppies from being born, we can reduce the numbers. Same goes for cats too, though with different diseases!<br/>
                                    <br/><h3>2. Helping families to neuter their dogs</h3>
                                    Puppies of strays dogs are only a part of the problem, since most puppies are dumped to the streets by people, who can not afford to have them, or don't care about them. The financial situation remains poor in Greece and most families don't have funds to neuter their pets. If we would have the funds, we could help more families to neuter their pets and make sure unwanted puppies would not be born in households and dumped to the streets.<br/>
                                    <br/><h3>3. Educating the public</h3>
                                    Culture plays a huge role when it comes to the animal welfare and that can be only influenced through education. By providing up to date information and education to the public, we can slowly make a long lasting change, that will benefit the animals. This is not a short project, but a long term one, that will take years. It is still extremely important and we hope that our projects, like co-operating with local schools and having groups of locals coming in for education, will help the locals to understand why every life should be valued.<br/>
                                    <br/><h3>4. Governments role</h3>
                                    There is no doubt that the government should help more and only with their help can the country truly become a good place for animals. This will take time, since the public opinions need to be onboard too. We are constantly talking with the local municipality and other authorities, to make neutering programs and to reinforce the laws, which are already in place when it comes to the wellbeing of animals.<br/>
                                    </p>
                                </div>
                            </div>
                            
                             
                        </div>
                        <Footer/>
                        
                    </div> 
                    
                
        );
    }
}

export default OngoingMissions;