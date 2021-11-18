import React from "react";
import Map from 'google-map-react';

const GoogleMaps = () => {
    return(
        <div className="col text-center" style={{ width: "100%", height: "550px"}}>
            <Map
                bootstrapURLKeys={{ key : "AIzaSyCIA0pbhqibNqqlMWE9fYo9LFz2LyKCSPI"}}
                defaultZoom = {10}
                defaultCenter={{
                    lat: 35.0562,
                    lng: -88.4353
                }}
            />
        </div>
    )
}

export default GoogleMaps