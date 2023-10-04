import "../styles/CombatBox.css";

import HitPoints from "./HitPoints";
import Shield from "./Shield";
import Armor from "./Armor";
import Initiative from "./Initiative";
import Speed from "./Speed";
import DeathSaves from "./DeathSaves";
import HitDice from "./HitDice";
import Attack from "./Attack";

import openEye from '../img/CombatBox/open-eye.svg'
import closedEye from '../img/CombatBox/closed-eye.svg'
import divinityOn from '../img/CombatBox/divinityOn.svg'
import divinityOff from '../img/CombatBox/divinityOff.svg'

import { useContext, useState } from "react";
import { DataContext } from "../App.jsx";

const CombatBox = () => {
  const { LenoreData } = useContext(DataContext);
  const [eyesOfNight, setEyesOfNight] = useState(LenoreData.eyes_of_night);

  const [firstDivinity, setFirstDivinity] = useState(LenoreData.channel_divinity[0]);
  const [secondDivinity, setSecondDivinity] = useState(LenoreData.channel_divinity[1]);

  const setEyes = () => {    
    setEyesOfNight(!eyesOfNight);
    LenoreData.eyes_of_night = !LenoreData.eyes_of_night;
  }

  const changeDivinity = (e) => {
    if(e.target.id === 'firstDivinity'){
      setFirstDivinity(!firstDivinity)
      LenoreData.channel_divinity[0] = !LenoreData.channel_divinity[0];
    } else {
      setSecondDivinity(!secondDivinity)
      LenoreData.channel_divinity[1] = !LenoreData.channel_divinity[1]
    }
  }

  return (
    <div className="combat-box">
      <div className="div">
        <div className="eyesOfNight">
          <img src={eyesOfNight ? openEye : closedEye} onClick={setEyes}></img>
        </div>
        <div className="first-row">
          <Armor></Armor>
          <HitPoints></HitPoints>
          <Shield></Shield>
        </div>
        <div className="second-row">
          <Initiative></Initiative>
          <HitDice text={"DADOS DE GOLPE"}></HitDice>
          <Speed></Speed>
        </div>
        <div className="third-row">
          <DeathSaves></DeathSaves>
          <div className="divinity">
            <img src={firstDivinity ? divinityOn : divinityOff} onClick={changeDivinity} id="firstDivinity"></img>
            {LenoreData.level > 5 ?             <img src={secondDivinity ? divinityOn : divinityOff} onClick={changeDivinity} id="secondDivinity"></img> : ''}
          </div>
        </div>
        <div className="attacks">
          <span className="text-wrapper">Ataques</span>
          <Attack position={0}></Attack>
          <Attack position={1}></Attack>
          <Attack position={2}></Attack>
        </div>
      </div>
    </div>
  );
};

export default CombatBox;
