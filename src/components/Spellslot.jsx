import { useState } from "react";
import "../styles/Spellslot.css";

import { useContext } from "react";
import { DataContext } from "../App.jsx";

import spellSlot from '../img/spellslot.svg'
import wastedSpellSlot from '../img/wastedSpellslot.svg'


const Spellslot = ({ level, position }) => {
  const { LenoreData } = useContext(DataContext);

  const [wasted, setWasted] =useState(LenoreData.spell_slots[level-1][position]);

  const changeWasted = () => {
    setWasted(!wasted);
    LenoreData.spell_slots[level - 1][position] =
      !LenoreData.spell_slots[level - 1][position];
  }
  return (
    <img src={wasted ? spellSlot : wastedSpellSlot} className={`spellSlotIcon position-${level > 1 ? 2 : 1}-${position}`} onClick={changeWasted} alt="" />
  );
};

export default Spellslot;
