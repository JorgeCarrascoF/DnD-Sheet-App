import "../styles/MoonPhases.css";
import moonFrame from "../img/Header/moonFrame.png";

import newMoon from "../img/Header/NewMoon.svg";
import fullMoon from "../img/Header/FullMoon.svg";
import waxingMoon from "../img/Header/WaxingMoon.svg";

import { useContext } from 'react';
import {DataContext} from '../App.jsx'

const moonPhases = [newMoon, fullMoon, waxingMoon];

const MoonPhases = ({changePhase}) => {
  
  const {LenoreData} = useContext(DataContext);
  
  return (
    <div className="MoonPhases">
      <div>
        <img className="moonFrame" src={moonFrame}></img>
        <img
          className="currentMoonPhase"
          onClick={changePhase}
          src={moonPhases[LenoreData.moonPhase]}
        ></img>
      </div>
    </div>
  );
};

export default MoonPhases;
