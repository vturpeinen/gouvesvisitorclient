import React, {Component} from 'react';
import Testikuva from './Css/Images/testikuva_master.jpg';
import './Css/ProfiiliStyle.css';



class Profiili extends Component {
    render() {
        return (
<div>

            <div className="Profile_back_box">



            <div className="Profile_box">
                <div className="Profile_box_left">
                    <img src={Testikuva} alt="White dog"/>
                    {/*<img src={props.color}/>*/}
                </div>
                <div className="Profile_box_right">





                    <h1>SNOOPY</h1>
                    <h3>
                        Gender:<br/>
                        Age:<br/>
                        Color:<br/>
                        Can get along with dogs:<br/>
                        Can get along whit cats:<br/>
                        Can get along whit children:<br/>
                    </h3>


                <div className="button_adoptio_box">
                        <button class="button_adoptio">ADOPTION ENQUIRY</button>
                        {/*<NavLink to="/about">ADOPTION ENQUIRY</NavLink>*/}

                </div>

                </div>



            </div>






                    {/*const ProfiiliTiedot = (props) => (*/}
                    {/*<div>*/}
                        {/*<p>Gender: {props.gender}</p>*/}
                        {/*<p>Age: {props.email}</p>*/}
                        {/*<p>Color: {props.color}</p>*/}
                        {/*<p>Can get along with dogs:{props.dogs}</p>*/}
                        {/*<p>Can get along whit cats:{props.cats}</p>*/}
                        {/*<p>Can get along whit children:{props.child}</p>*/}

                    {/*</div>*/}
                    {/*);*/}
            </div>


            <div className="Profile_back_text">
            <p className="Profile_text">'
                <p>
            Snoopy is old timer at the shelter. He has been almost adopted many times, but unfortunately,
                for some reason it always gets cancelled at the last moment.
            He is the most loving and happy dog when he is outside the shelter, but inside he gets stressed very easily.
            On walks he loves to sniff around and is okay with other dogs,
                but inside the shelter he can be a bit territorial.
            The best home for him would be alone, or with some females.
                He might not be the perfect first dog, but in the right home, with enough exercise and some training,
                he will become an amazing friend!






                    Snoopy is old timer at the shelter. He has been almost adopted many times, but unfortunately,
                    for some reason it always gets cancelled at the last moment.
                    He is the most loving and happy dog when he is outside the shelter, but inside he gets stressed very easily.
                    On walks he loves to sniff around and is okay with other dogs,
                    but inside the shelter he can be a bit territorial.
                    The best home for him would be alone, or with some females.
                    He might not be the perfect first dog, but in the right home, with enough exercise and some training,
                    he will become an amazing friend!</p> </p>
    </div>
        </div>



        );
    }
}

export default Profiili;