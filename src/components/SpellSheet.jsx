import "../styles/SpellSheet.css";
import SpellLevel from "./SpellLevel";

import { useContext } from 'react';
import {DataContext} from '../App.jsx'
import SpellSearch from "./SpellSearch";
import spellSheetBG from '../img/spellSheetBG.png'


const SpellSheet = () => {
  
  const {LenoreData} = useContext(DataContext)
  const phase = LenoreData.moonPhase;

  return (
    <section className="SpellSheet">
      <img className="spellSheetBG" src={spellSheetBG}></img>
      <SpellSearch></SpellSearch>
      <SpellLevel level={0}></SpellLevel>
      <SpellLevel level={1} phase={phase}></SpellLevel>
      <SpellLevel level={2} phase={phase}></SpellLevel>
      <SpellLevel level={3} phase={phase}></SpellLevel>
      <SpellLevel level={4} phase={phase}></SpellLevel>
      <SpellLevel level={5} phase={phase}></SpellLevel>
      
    </section>
  );
};

export default SpellSheet;
