import "../styles/Attack.css";
import damageIcon from "../img/CombatBox/damage.svg";
import targetIcon from "../img/CombatBox/target.svg";
import check from "../img/CombatBox/check.svg";
import { useState } from "react";

import { useContext } from "react";
import { DataContext } from "../App.jsx";


const Attack = ({ position }) => {
  const {LenoreData} = useContext(DataContext);

  const [attackName, setAttackName] = useState(
    LenoreData.attacks[position].name
  );
  const [attackImpact, setAttackImpact] = useState(
    LenoreData.attacks[position].bonus
  );
  const [attackDamage, setAttackDamage] = useState(
    LenoreData.attacks[position].damage
  );

  const [isEditing, setIsEditing] = useState(false);

  const changeName = (e) => {
    setAttackName(e.target.value);
    LenoreData.attacks[position].name = e.target.value;
  };

  const changeImpact = (e) => {
    setAttackImpact(e.target.value);
    LenoreData.attacks[position].bonus = e.target.value;
  };
  const changeDamage = (e) => {
    setAttackDamage(e.target.value);
    LenoreData.attacks[position].damage = e.target.value;
  };

  const changeEditing = () => {
    setIsEditing(!isEditing);
  };

  const changeEditingInput = (e) => {
    if (e.key === "Enter") {
      changeEditing();
    }
  };

  return (
    <div className="Attack">
      {isEditing ? (
        <input
          className="attackTitle"
          defaultValue={attackName}
          onChange={changeName}
          onKeyDown={changeEditingInput}
        ></input>
      ) : (
        <span className="attackTitle" onClick={changeEditing}>{attackName}</span>
      )}
      <div className="impact">
        <img className="icon" src={targetIcon}></img>
        {isEditing ? (
          <input
            className="attackImpact"
            defaultValue={attackImpact}
            onChange={changeImpact}
            onKeyDown={changeEditingInput}
          ></input>
        ) : (
          <span className="attackImpact">{attackImpact}</span>
        )}
      </div>
      <div className="damage">
        <img className="icon" src={damageIcon}></img>
        {isEditing ? (
          <input
            className="attackDamage"
            defaultValue={attackDamage}
            onChange={changeDamage}
            onKeyDown={changeEditingInput}
          ></input>
        ) : (
          <span className="attackDamage">{attackDamage}</span>
        )}
      </div>
      {isEditing ? (
        <img className="check" src={check} onClick={changeEditing}></img>
      ) : (
        ""
      )}
    </div>
  );
};

export default Attack;
