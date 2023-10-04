import "../styles/StatsBox.css";
import Ability from "./Ability";
import Stat from "./Stat";

import inspirationOn from "../img/StatsBox/Inspiration.svg";
import inspirationOff from "../img/StatsBox/inspiration-off.svg";
import passivePerception from "../img/StatsBox/passive-perception.png";

import { useContext, useState } from "react";
import { DataContext } from "../App.jsx";

export const StatsBox = () => {
  const { LenoreData } = useContext(DataContext);
  const [insp, setInsp] = useState(LenoreData.inspired);

  const prof_bonus = Math.floor(2 + (LenoreData.level - 1) / 4);

  // const toggleInsp = () => {
  //   LenoreData.inspired = !LenoreData.inspired;
  //   setInsp(!insp);
  // }

  const toggleInsp = () => {
    LenoreData.inspired = !LenoreData.inspired;

    setInsp(!insp);
  };

  const statsFrame = (
    <div className="frame">
      {LenoreData.stats.map((item) => {
        return (
          <Stat
            key={item.name}
            statName={item.name}
            statBonus={item.bonus}
          ></Stat>
        );
      })}
    </div>
  );

  const savingsFrame = (
    <div className="frame-2">
      {LenoreData.stats.map((item) => {
        return (
          <Ability
            key={item.name}
            abilityName={item.name}
            abilityProf={item.prof}
            abilityBonus={item.prof ? item.bonus + prof_bonus : item.bonus}
          ></Ability>
        );
      })}
    </div>
  );

  const abilityFrame = (
    <div className="frame-5">
      {LenoreData.abilities.map((item) => {
        return (
          <Ability
            key={item.name}
            abilityName={item.name}
            abilityProf={item.prof}
            abilityBonus={item.prof ? item.bonus + prof_bonus : item.bonus}
          ></Ability>
        );
      })}
    </div>
  );

  return (
    <div className="box">
      <div className="group">
        <div className="overlap">
        <img
            className={`inspiration`}
            onClick={toggleInsp}
            src={insp ? inspirationOn : inspirationOff}
          ></img>
          {statsFrame}
          {savingsFrame}
          {abilityFrame}
        </div>
      </div>
    </div>
  );
};

export default StatsBox;
