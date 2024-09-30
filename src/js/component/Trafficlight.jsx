import React, { useState } from "react";
import img1 from '/workspaces/Andyalpa-pt72-TrafficLight/src/img/Traffic Light.png'


const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState('');

    const toggleLight = (color) => {
        setActiveLight(prevLight => (prevLight === color ? '' : color));
    };

    return ( 
        <div className="traffic-light">
            <img src={img1} alt="Traffic Light" />
            <div className={` ${activeLight === 'red' ? 'red-light' : ''}`}></div>
            <div className={` ${activeLight === 'yellow' ? 'yellow-light' : ''}`}></div>
            <div className={` ${activeLight === 'green' ? 'green-light' : ''}`}></div>
            <div className="buttons">
                <button className="btn btn-primary" onClick={() => toggleLight('green')}>Good to go!</button>
                <button className="btn btn-secondary" onClick={() => toggleLight('yellow')}>Proceed with precaution!</button>
                <button className="btn btn-danger" onClick={() => toggleLight('red')}>Stop</button>
            </div>
        </div>
    );
}






 
export default TrafficLight;