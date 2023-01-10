import { GoogleMap } from 'react-google-maps';

class Maps extends React.Component {
    state = {
      lat: null,
      lng: null,
    }
  
    handleMapClick = (event) => {
      this.setState({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    };
  
    renderMarkers = () => {
      return (
        <Marker
          position={{ lat: this.state.lat, lng: this.state.lng }}
        />
      );
    };
  
    render() {
      return (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
          onClick={this.handleMapClick}
        >
          {this.renderMarkers()}
        </GoogleMap>
      );
    }
  }
  