import { Component } from 'react';
import ReactMapGL,{Marker} from 'react-map-gl';

class Map extends Component {
  state = {
    viewport: {
     width: '100vw',
      height: '100vh',
      latitude: 20,
      longitude: 77,
      zoom: 1
    }
  };
  static getInitialProps({query}) {
    return {query}
  }
  render() {

    const q=this.props
    // console.log(q.query)
    // const v={ width: '100vw',
    //   height: '100vh',
    //   latitude: 20,
    //   longitude: 77,
    //   zoom: 4}

    // v.longitude=q.query.lo
    // v.latitude=q.query.lat
// this.setState({viewport:v})
    return (
      

      <ReactMapGL
      {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1Ijoic2hvYWliYWxpLTc4NjAiLCJhIjoiY2treXd1azdmMDV0ZjJubGJ3NGFrbmt1NCJ9.2Y0Kw7OUUBC-z_78ImWQOw"
        onViewportChange={(viewport) => this.setState({ viewport })}
        
      >
    <Marker latitude={parseInt(q.query.lat)}
    longitude={parseInt(q.query.lo)}
    >
    <img src="./location.png" width="20px" />
<h3 style={{color:"red"}}>location </h3>
    </Marker>
      </ReactMapGL>
       
    );
  }
}

export default Map;
