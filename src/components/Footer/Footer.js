import React, { Component } from 'react';
import './Footer.css';
import dogsvg from '../Images/dog.svg';
import catsvg from '../Images/cat.svg';
import logonegasvg from '../Images/gouves-logo-nega.svg';

class Footer extends Component {
    render() {
        return (
                <div className="wrapper">
                    <div className="row footer"> 
                        
                        <div className="col-xs-12 col-md-4 logo-nega">
                        <a href="/">
                                    <img src={logonegasvg} style={{width: 166, height: 54, marginTop: 1}} />
                                </a>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="info-box">
                                <p>Contact Us: Tel +306979347428</p>
                                <p>email: <a href="email:gouvesshelter@gmail.com">
                                gouvesshelter@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="paypal-box">
                                <form id="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">

                                <a href="/">
                                    <img src={dogsvg} style={{width: 35, height: 38, marginTop: 1}} />
                                </a>
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="P745DPDAMZQ5Q" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                    <img alt="" border="0" src="https://www.paypal.com/en_GR/i/scr/pixel.gif" width="1" height="1" />
                                <a href="/">
                                    <img src={catsvg} style={{width:35, height: 30, marginTop: 1}} />
                                </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Footer;