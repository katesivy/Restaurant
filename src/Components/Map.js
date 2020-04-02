import React, { Component } from 'react';
import { GoogleMapReact, withScriptjs, withGoogleMap } from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class Map extends Component {
//     static defaultProps = {
//         center: {
//             lat: 38.04,
//             lng: -84.49
//         },
//         zoom: 11
//     };

function Map() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 38.046360, lng: -84.497017 }}
            />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
        return {
            <div style = {{ width: '100vw', height: '100vh' }} >
            <WrappedMap
                // {/* googleMapUrl={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`} */}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                />
                </div>
                );
        }


    {/* render() {
        return (
            <>
                // Important! Always set the container height explicitly
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: AIzaSyB5iEGoQJ5IHpv7_rL6xty5TpYzxkM7mTo }}

                        type="text/javascript"
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                      yesIWantToUseGoogleMapApiInternals=true
                      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                    >
                        <AnyReactComponent
                            lat={38.046360}
                            lng={-84.497017}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div >
            </>
        );
    }
}

// export default Map; */}