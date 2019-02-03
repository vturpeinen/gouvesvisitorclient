import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


class Map2 extends Component {
    render() {
        return (
            <div>
                <Map google={this.props.google}
                     initialCenter={{
                         lat: 35.329826,
                         lng: 25.282903
                     }}
                     style={{
                         width: "100%",
                         height: "100%",

                     }}

                     zoom={15}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                {/*<InfoWindow onClose={this.onInfoWindowClose}>*/}

                {/*</InfoWindow>*/}
            </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAMS7KDIoQx4jeJHpI6ABzATONYloNkcAA")
})(Map2)