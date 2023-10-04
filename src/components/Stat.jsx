import { useState } from "react";
import "../styles/Stat.css";

import { useContext } from "react";
import { DataContext } from "../App.jsx";
import { useDetectClickOutside } from "react-detect-click-outside";

export const Stat = ({ statName, statBonus }) => {
  const {LenoreData, setLenoreData} = useContext(DataContext);
  const ref = useDetectClickOutside({onTriggered: ()=>{setEditing(false)}})

  const [editing, setEditing] = useState(false);

  let defaultValue;
  if (statName === "Fuerza") {
    defaultValue = LenoreData.stats[0].score;
  } else if (statName === "Destreza") {
    defaultValue = LenoreData.stats[1].score;
  } else if (statName === "Constitución") {
    defaultValue = LenoreData.stats[2].score;
  } else if (statName === "Inteligencia") {
    defaultValue = LenoreData.stats[3].score;
  } else if (statName === "Sabiduría") {
    defaultValue = LenoreData.stats[4].score;
  } else {
    defaultValue = LenoreData.stats[5].score;
  }

  const toggleInput = () => {
    setEditing(!editing);
  };

  const changeEditingInput = (e) => {
    let inputNumber = parseInt(e.target.value);
    if (e.key === "Enter") {
      if (!isNaN(e.target.value) && inputNumber > 0) {
        changeStat(inputNumber);
        statBonus = (inputNumber - 10) / 2;
      }
      setEditing(!editing)
    }
  };

  const changeStat = (number) => {
    if (statName === "Fuerza") {
      LenoreData.stats[0].score = number;
      LenoreData.stats[0].bonus = (number - 10) / 2;
      defaultValue = LenoreData.stats[0].score;

      //Change Strength based abilities bonuses
      LenoreData.abilities[1].bonus = (number - 10) / 2;
    } else if (statName === "Destreza") {
      LenoreData.stats[1].score = number;
      LenoreData.stats[1].bonus = (number - 10) / 2;
      defaultValue = LenoreData.stats[1].score;

      //Change Dex based abilities bonuses
      LenoreData.abilities[0].bonus = (number - 10) / 2;
      LenoreData.abilities[8].bonus = (number - 10) / 2;
      LenoreData.abilities[15].bonus = (number - 10) / 2;
    } else if (statName === "Constitución") {
      LenoreData.stats[2].score = number;
      LenoreData.stats[2].bonus = (number - 10) / 2;
      defaultValue = LenoreData.stats[2].score;
    } else if (statName === "Inteligencia") {
      LenoreData.stats[3].score = number;
      LenoreData.stats[3].bonus = (number - 10) / 2;
      defaultValue = LenoreData.stats[3].score;

      //Change Int based abilities bonuses
      LenoreData.abilities[2].bonus = (number - 10) / 2;
      LenoreData.abilities[4].bonus = (number - 10) / 2;
      LenoreData.abilities[7].bonus = (number - 10) / 2;
      LenoreData.abilities[10].bonus = (number - 10) / 2;
      LenoreData.abilities[14].bonus = (number - 10) / 2;
    } else if (statName === "Sabiduría") {
      LenoreData.stats[4].score = number;
      LenoreData.stats[4].bonus = (number - 10) / 2;
      defaultValue = LenoreData.stats[4].score;

      //Change Wis based abilities bonuses
      LenoreData.abilities[9].bonus = (number - 10) / 2;
      LenoreData.abilities[11].bonus = (number - 10) / 2;
      LenoreData.abilities[12].bonus = (number - 10) / 2;
      LenoreData.abilities[16].bonus = (number - 10) / 2;
      LenoreData.abilities[17].bonus = (number - 10) / 2;
    } else {
      LenoreData.stats[5].score = number;
      LenoreData.stats[5].bonus = (number - 10) / 2;
      defaultValue = LenoreData.stats[5].score;

      //Change Charisma based abilities bonuses
      LenoreData.abilities[3].bonus = (number - 10) / 2;
      LenoreData.abilities[5].bonus = (number - 10) / 2;
      LenoreData.abilities[6].bonus = (number - 10) / 2;
      LenoreData.abilities[13].bonus = (number - 10) / 2;
    }
    setLenoreData(JSON.parse(JSON.stringify(LenoreData)))

  };

  return (
    <div className="stat-frame" ref={ref}>
      <div className="overlap-group">
        {editing ? (
          <input
            className="bonus"
            defaultValue={defaultValue}
            onKeyDown={changeEditingInput}
          ></input>
        ) : (
          <div className="bonus">
            {statBonus > 0 ? <span>+</span> : ""}
            <span className="bonus-number">{statBonus}</span>
          </div>
        )}
        <span className="fuerza" onClick={toggleInput}>
          {statName}
        </span>
      </div>
    </div>
  );
};

export default Stat;
