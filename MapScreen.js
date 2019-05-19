import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {Marker} from 'react-native-maps';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import styles from './Styles.js'

// import locationData from './csvjson.json';
// import mapstyles from './mapstyle.json'
// import Geojson from 'react-native-geojson';

const mapStyle =
    [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "elementType": "labels",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "weight": 8
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "weight": 2
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "weight": 8
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dadada"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "road.local",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#c9c9c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        }
    ];

export default class MapScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 41,
                longitude: -107,
                latitudeDelta: 50.0,
                longitudeDelta: 50.0,
            },
            markers: [],
        }
    };

    static navigationOptions = {
        title: 'Map',
        headerStyle: {
            backgroundColor: '#ede5bc',
        },
        headerTintColor: '#212121',
        headerTitleStyle: {
            color:'#212121',
            fontWeight: 'bold',
        },
    };

    // getInitialState() {
    //     return {
    //         region: {
    //             latitude: 37.78825,
    //             longitude: -122.4324,
    //             latitudeDelta: 0.0922,
    //             longitudeDelta: 0.0421,
    //         },
    //     };
    // }

    componentDidMount() {
        let data = require('./Untitled_map1');
        let markers = [];
        data.features.forEach((marker) => {
            markers.push([marker["properties"]["Name"], {longitude: marker["geometry"]["coordinates"][0],latitude: marker["geometry"]["coordinates"][1]}])
        });
        this.setState({markers:markers});
    }
        // onRegionChange(region) {
        //     this.setState({region: region });
        // }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.mapcontainer}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{...StyleSheet.absoluteFillObject}}
                    region={this.state.region}
                    customMapStyle={mapStyle}
                >
                    {this.state.markers.map(marker => (
                        <Marker
                            coordinate={marker[1]}
                            title={marker[0]}
                            key = {marker[1].longitude + marker[1].latitude}
                            // description={marker.description}
                        />
                    ))}

                    <Polygon
                        key={this.state.editing.id}
                        coordinates={this.state.editing.coordinates}
                        holes={this.state.editing.holes}
                        strokeColor="#000"
                        fillColor="rgba(255,0,0,0.5)"
                        strokeWidth={1}
                    />
                    
                </MapView>
                <TouchableOpacity/>

            </View>
        );
    }
}
