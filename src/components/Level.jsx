import "../styles/Level.css";
import levelIcon from "../img/Header/levelIcon.svg";

import { useContext, useState } from "react";
import { DataContext } from "../App.jsx";

const Level = () => {
  const {LenoreData, setLenoreData} = useContext(DataContext);

  const [level, setLevel] = useState(LenoreData.level);

  const addLevel = () => {
    let prevLevel = LenoreData.level;
    if (LenoreData.level < 10) {
      setLevel(level + 1);
      LenoreData.level++;
      manageSpellSlots(prevLevel);
    }
  };

  const subLevel = () => {
    let prevLevel = LenoreData.level;
    if (LenoreData.level > 1) {
      setLevel(level - 1);
      LenoreData.level--;
      manageSpellSlots(prevLevel);
    }
  };

  const manageSpellSlots = (prevLevel) => {
    let newSpellSlots;
    switch (LenoreData.level) {
      case 1:
        if (prevLevel === 2) {
          newSpellSlots = [
            [LenoreData.spell_slots[0][0], LenoreData.spell_slots[0][1]],
          ];
        } else {
          newSpellSlots = [[true, true]];
        }
        LenoreData.spell_slots = newSpellSlots;
        break;
      case 2:
        if (prevLevel === 1) {
          newSpellSlots = [
            [...LenoreData.spell_slots[0], true],
          ];
        } else {
          newSpellSlots = [
            [
              LenoreData.spell_slots[0][0],
              LenoreData.spell_slots[0][1],
              LenoreData.spell_slots[0][2],
            ],
          ];
        }
        LenoreData.spell_slots = newSpellSlots;
        break;
      case 3:
        if (prevLevel === 2) {
          newSpellSlots = [
            [
              ...LenoreData.spell_slots[0],
              true,
            ],
            [true, true],
          ];
        } else {
          newSpellSlots = [
            [...LenoreData.spell_slots[0]],
            [LenoreData.spell_slots[1][0], LenoreData.spell_slots[1][1]],
          ];
        }
        LenoreData.spell_slots = newSpellSlots;
        break;
      case 4:
        if (prevLevel === 3) {
          newSpellSlots = [
            [...LenoreData.spell_slots[0]],
            [...LenoreData.spell_slots[1], true],
          ];
        } else {
          newSpellSlots = [
            [...LenoreData.spell_slots[0]],
            [...LenoreData.spell_slots[1]],
          ];
        }
        LenoreData.spell_slots = newSpellSlots;
        break;
      case 5:
        if (prevLevel === 4) {
          newSpellSlots = [
            [...LenoreData.spell_slots[0]],
            [...LenoreData.spell_slots[1]],
            [true, true],
          ];
        } else {
          newSpellSlots = [
            [...LenoreData.spell_slots[0]],
            [...LenoreData.spell_slots[1]],
            [LenoreData.spell_slots[2][0], LenoreData.spell_slots[2][1]],
          ];
        }
        LenoreData.spell_slots = newSpellSlots;
        break;
      case 6:
        if (prevLevel === 5) {
          newSpellSlots = [
            [...LenoreData.spell_slots[0]],
            [...LenoreData.spell_slots[1]],
            [...LenoreData.spell_slots[2], true],
          ];
        } else {
          newSpellSlots = [
            [...LenoreData.spell_slots[0]],
            [...LenoreData.spell_slots[1]],
            [...LenoreData.spell_slots[2]],
          ];
        }
        LenoreData.spell_slots = newSpellSlots;
        break;
      case 7:
        if (prevLevel === 6) {
          newSpellSlots = [
            [...LenoreData.spell_slots[0]],
            [...LenoreData.spell_slots[1]],
            [...LenoreData.spell_slots[2]],
            [true],
          ];
        } else {
          newSpellSlots = [
            [...LenoreData.spell_slots[0]],
            [...LenoreData.spell_slots[1]],
            [...LenoreData.spell_slots[2]],
            [LenoreData.spell_slots[3][0]],
          ];
        }
        LenoreData.spell_slots = newSpellSlots;
        break;
      case 8:
        if (prevLevel === 7) {
          newSpellSlots = [
            [...LenoreData.spell_slots[0]],
            [...LenoreData.spell_slots[1]],
            [...LenoreData.spell_slots[2]],
            [...LenoreData.spell_slots[3], true],
          ];
        } else {
          newSpellSlots = [
            [...LenoreData.spell_slots[0]],
            [...LenoreData.spell_slots[1]],
            [...LenoreData.spell_slots[2]],
            [LenoreData.spell_slots[3][0], LenoreData.spell_slots[3][1]],
          ];
        }
        LenoreData.spell_slots = newSpellSlots;
        break;
      case 9:
        if (prevLevel === 8) {
          newSpellSlots = [
            [...LenoreData.spell_slots[0]],
            [...LenoreData.spell_slots[1]],
            [...LenoreData.spell_slots[2]],
            [...LenoreData.spell_slots[3], true],
            [true],
          ];
        } else {
          newSpellSlots = [
            [...LenoreData.spell_slots[0]],
            [...LenoreData.spell_slots[1]],
            [...LenoreData.spell_slots[2]],
            [...LenoreData.spell_slots[3]],
            [LenoreData.spell_slots[4][0]],
          ];
        }
        LenoreData.spell_slots = newSpellSlots;
        break;
      case 10:
        if (prevLevel === 9) {
          newSpellSlots = [
            [...LenoreData.spell_slots[0]],
            [...LenoreData.spell_slots[1]],
            [...LenoreData.spell_slots[2]],
            [...LenoreData.spell_slots[3]],
            [...LenoreData.spell_slots[4], true],
          ];
        }
        LenoreData.spell_slots = newSpellSlots;
        break;
    }
    setLenoreData(JSON.parse(JSON.stringify(LenoreData)))
  };

  return (
    <div className="Level">
      <span className="levelNumber">{level}</span>
      <img src={levelIcon}></img>
      <span className="levelTitle">Nivel</span>
      <button className="addLevel" onClick={addLevel}>+</button>
      <button className="subLevel" onClick={subLevel}>-</button>
    </div>
  );
};

export default Level;
