import React from "react";
import {useLocation} from "react-router-dom";
const Locationdisplay = () => {
    const location = useLocation();
    return (
        <div>
            <h1>Current Location</h1>
            <p><strong>Pathname:</strong>{location.pathname}</p>
            <p><strong>Search:</strong>{location.search}</p>
            <p><strong>Hash:</strong>{location.hash}</p>
            <p><strong>state:</strong>{JSON.stringify(location.state)}</p>
            </div>
    );
}
export default Locationdisplay;