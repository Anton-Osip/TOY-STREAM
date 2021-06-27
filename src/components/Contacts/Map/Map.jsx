import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33,
		},
		zoom: 11,
	}

	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ width: '100%', height: '100%' }}>
				<GoogleMapReact
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				></GoogleMapReact>
			</div>
		)
	}
}

export default SimpleMap
