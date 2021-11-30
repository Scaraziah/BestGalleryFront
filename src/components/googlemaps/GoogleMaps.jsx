import React from "react";
import Map from 'google-map-react';

const GoogleMaps = (props) => {
    const newLat = props.post.lat
    const newLng = props.post.lng
    return(
        <div className="col text-center" style={{ width: "100%", height: "200px"}}>
            <Map
                bootstrapURLKeys={{ key : "AIzaSyCIA0pbhqibNqqlMWE9fYo9LFz2LyKCSPI"}}
                defaultZoom = {13}
                defaultCenter={{
                    lat: newLat,
                    lng: newLng
                }}
            />
        </div>
    )
}

export default GoogleMaps