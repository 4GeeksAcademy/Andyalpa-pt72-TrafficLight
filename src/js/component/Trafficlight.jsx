import React, { useState, useEffect } from "react";
import img1 from '/workspaces/Andyalpa-pt72-TrafficLight/src/img/Traffic Light.png'



const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState('');
    const [currentColor, setCurrentColor] = useState("green")
    const [isCycleRunning, setIsCycleRunning] = useState(false);

    const toggleLight = (color) => {
        setActiveLight(prevLight => (prevLight === color ? 'inactive' : color));
    };

    

    const trafficStates = {
        red: {
            duration: 4000,
            className: 'red-light',
            next: "green"
        },
        yellow: {
            duration: 500,
            className: 'yellow-light',
            next: "red"
        },
        green: {
            duration: 3000,
            className: 'green-light',
            next: "yellow"
        }
    }


    
    

    useEffect(() => {
        if (isCycleRunning) {
          const cycleInterval = setInterval(() => {
            setCurrentColor(trafficStates[currentColor].next);
          }, trafficStates[currentColor].duration);
    
          return () => clearInterval(cycleInterval);
        }
      }, [isCycleRunning, currentColor]);

      console.log(isCycleRunning);
      console.log(currentColor);
      console.log(trafficStates[currentColor]);
      
      
    
      const toggleCycle = () => {
        setIsCycleRunning(prevIsCycleRunning => !prevIsCycleRunning);
      };

    return ( 
        <div className="traffic-light">
            <img src={img1} alt="Traffic Light" />
            <span className={` ${isCycleRunning === false ? " " : trafficStates[currentColor].className}`}></span>
            <span onClick={isCycleRunning ? null : (e) =>  toggleLight('red')} className={`$ ${activeLight === 'red' ? 'red-light' : 'red-light inactive'}`}></span>
            <span onClick={isCycleRunning ? null : (e) => toggleLight('yellow')} className={` ${activeLight === 'yellow' ? 'yellow-light' : 'yellow-light inactive'}`}></span>
            <span onClick={isCycleRunning ? null : (e) => toggleLight('green')}className={` ${activeLight === 'green' ? 'green-light' : 'green-light inactive' }`}></span>
            <button onClick={toggleCycle} className="btn btn-primary ">
        {isCycleRunning ? "Stop Lights Circle" : "Start Lights Circle"}
      </button>
        </div>
    );
}






 
export default TrafficLight;