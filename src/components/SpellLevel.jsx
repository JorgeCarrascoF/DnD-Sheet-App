import "../styles/SpellLevel.css";
import FixedSpell from "./FixedSpell";

import Spell from "./Spell.jsx";
import Spellslot from "./Spellslot";

import spellSlotUpperFrame from "../img/SpellLevel/spellSlotsUpperFrame.svg";

import { useContext, useState } from "react";
import { DataContext } from "../App.jsx";

const levelTitle = [
  "Trucos",
  "Nivel uno",
  "Nivel dos",
  "Nivel tres",
  "Nivel cuatro",
  "Nivel cinco",
];

const SpellLevel = ({ level, phase }) => {
  const { LenoreData } = useContext(DataContext);

  let position;
  if (level === 1 || level === 4) {
    position = "mid";
  } else if (level === 2 || level === 3) {
    position = "low";
  } else {
    position = "high";
  }

  // Hardcoded spell slots, mapping not workind (idk)
  let spellSlots = <div className="spellSlots"></div>;
  if (level === 1) {
    if (LenoreData.level === 1) {
      spellSlots = (
        <div className="spellSlots">
          <Spellslot level={level} position={0}></Spellslot>
          <Spellslot level={level} position={1}></Spellslot>
        </div>
      );
    } else if (LenoreData.level === 2) {
      spellSlots = (
        <div className="spellSlots">
          <Spellslot level={level} position={0}></Spellslot>
          <Spellslot level={level} position={1}></Spellslot>
          <Spellslot level={level} position={2}></Spellslot>
        </div>
      );
    } else {
      spellSlots = (
        <div className="spellSlots">
          <Spellslot level={level} position={0}></Spellslot>
          <Spellslot level={level} position={1}></Spellslot>
          <Spellslot level={level} position={2}></Spellslot>
          <Spellslot level={level} position={3}></Spellslot>
        </div>
      );
    }
  } else if (level === 2) {
    if (LenoreData.level === 3) {
      spellSlots = (
        <div className="spellSlots">
          <Spellslot level={level} position={0}></Spellslot>
          <Spellslot level={level} position={1}></Spellslot>
        </div>
      );
    } else if (LenoreData.level > 3) {
      spellSlots = (
        <div className="spellSlots">
          <Spellslot level={level} position={0}></Spellslot>
          <Spellslot level={level} position={1}></Spellslot>
          <Spellslot level={level} position={2}></Spellslot>
        </div>
      );
    }
  } else if (level === 3) {
    if (LenoreData.level === 5) {
      spellSlots = (
        <div className="spellSlots">
          <Spellslot level={level} position={0}></Spellslot>
          <Spellslot level={level} position={1}></Spellslot>
        </div>
      );
    } else if (LenoreData.level > 5) {
      spellSlots = (
        <div className="spellSlots">
          <Spellslot level={level} position={0}></Spellslot>
          <Spellslot level={level} position={1}></Spellslot>
          <Spellslot level={level} position={2}></Spellslot>
        </div>
      );
    }
  } else if (level === 4) {
    if (LenoreData.level === 7) {
      spellSlots = (
        <div className="spellSlots">
          <Spellslot level={level} position={0}></Spellslot>
        </div>
      );
    } else if (LenoreData.level === 8) {
      spellSlots = (
        <div className="spellSlots">
          <Spellslot level={level} position={0}></Spellslot>
          <Spellslot level={level} position={1}></Spellslot>
        </div>
      );
    } else if (LenoreData.level > 8) {
      spellSlots = (
        <div className="spellSlots">
          <Spellslot level={level} position={0}></Spellslot>
          <Spellslot level={level} position={1}></Spellslot>
          <Spellslot level={level} position={2}></Spellslot>
        </div>
      );
    }
  } else if (level === 5) {
    if (LenoreData.level === 9) {
      spellSlots = (
        <div className="spellSlots">
          <Spellslot level={level} position={0}></Spellslot>
        </div>
      );
    } else if (LenoreData.level === 10) {
      spellSlots = (
        <div className="spellSlots">
          <Spellslot level={level} position={0}></Spellslot>
          <Spellslot level={level} position={1}></Spellslot>
        </div>
      );
    }
  }

  return (
    <div className={"SpellLevel " + position}>
      <div className="spellLevelFrame" src={""}></div>
      <div className="overlap-group">
        <div className="frame">
          <div className="text-wrapper">{levelTitle[level]}</div>
          { level > 0 ? <img src={spellSlotUpperFrame} className="upperFrame"></img> : ''}
          {spellSlots}
        </div>
        <div className="content">
          <FixedSpell level={level} phase={phase}></FixedSpell>
          <Spell level={level} position={0}></Spell>
          <Spell level={level} position={1}></Spell>
          <Spell level={level} position={2}></Spell>
          <Spell level={level} position={3}></Spell>
          <Spell level={level} position={4}></Spell>
          <Spell level={level} position={5}></Spell>
        </div>
      </div>
    </div>
  );
};

export default SpellLevel;
