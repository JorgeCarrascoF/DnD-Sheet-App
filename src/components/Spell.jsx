import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import "../styles/Spell.css";

import spellFrame from "../img/spell-frame.svg";
import concentration from "../img/concentration.svg";
import ritual from "../img/ritual.svg";
import cross from "../img/cross.svg";

import Translate from "translate";
Translate.engine = "google";

import { useContext } from "react";
import { DataContext } from "../App.jsx";

const Spell = ({ level, position }) => {
  const { LenoreData, setLenoreData } = useContext(DataContext);
  const [desc, setDesc] = useState(false);

  const ref = useDetectClickOutside({
    onTriggered: () => {
      setDesc(false);
    },
  });

  const deleteSpell = () => {
    if (position > 0) {
      LenoreData.spells[level][position].name = "";
      LenoreData.spells[level][position].nameEN = "";
      LenoreData.spells[level][position].desc = "";
      LenoreData.spells[level][position].duration = "";
      LenoreData.spells[level][position].higher_level = "";
      LenoreData.spells[level][position].casting = "";
      LenoreData.spells[level][position].range = "";
      LenoreData.spells[level][position].damage = "";
      LenoreData.spells[level][position].damage_type = "";
      LenoreData.spells[level][position].ritual = false;
      LenoreData.spells[level][position].concentration = false;

      // Rearrange consequent spells

      for (let i = position; i < LenoreData.spells[level].length - 1; i++) {
        if (LenoreData.spells[level][i + 1].name !== "") {
          LenoreData.spells[level][i].name =
            LenoreData.spells[level][i + 1].name;
          LenoreData.spells[level][i].nameEN =
            LenoreData.spells[level][i + 1].nameEN;
          LenoreData.spells[level][i].desc =
            LenoreData.spells[level][i + 1].desc;
          LenoreData.spells[level][i].duration =
            LenoreData.spells[level][i + 1].duration;
          LenoreData.spells[level][i].higher_level =
            LenoreData.spells[level][i + 1].higher_level;
          LenoreData.spells[level][i].casting =
            LenoreData.spells[level][i + 1].casting;
          LenoreData.spells[level][i].range =
            LenoreData.spells[level][i + 1].range;
          LenoreData.spells[level][i].damage =
            LenoreData.spells[level][i + 1].damage;
          LenoreData.spells[level][i].damage_type =
            LenoreData.spells[level][i + 1].damage_type;
          LenoreData.spells[level][i].ritual =
            LenoreData.spells[level][i + 1].ritual;
          LenoreData.spells[level][i].concentration =
            LenoreData.spells[level][i + 1].concentration;

          LenoreData.spells[level][i + 1].name = "";
          LenoreData.spells[level][i + 1].nameEN = "";
          LenoreData.spells[level][i + 1].desc = "";
          LenoreData.spells[level][i + 1].duration = "";
          LenoreData.spells[level][i + 1].higher_level = "";
          LenoreData.spells[level][i + 1].casting = "";
          LenoreData.spells[level][i + 1].range = "";
          LenoreData.spells[level][i + 1].damage = "";
          LenoreData.spells[level][i + 1].damage_type = "";
          LenoreData.spells[level][i + 1].ritual = false;
          LenoreData.spells[level][i + 1].concentration = false;
        }
      }
      setDesc(false);
      setLenoreData(JSON.parse(JSON.stringify(LenoreData)));
    }
  };

  const toggleDesc = () => {
    let descState = !desc;
    setDesc(descState);
  };

  return (
    <div className="spell" ref={ref}>
      <div className="title">
        <div className="frame">
          <img src={spellFrame}></img>
          <div className="circle" onClick={deleteSpell}>
            {position > 0  ? (
              <img
                className={`delete ${
                  LenoreData.spells[level][position].name === ""
                    ? "disabled"
                    : ""
                }`}
                src={cross}
              ></img>
            ) : (
              ""
            )}
          </div>
        </div>
        <h3 className="spellName" onClick={toggleDesc}>
          {LenoreData.spells[level][position].name}
        </h3>
      </div>
      {desc ? (
        <div className="description">
          <span className="spellTitle">
            ({LenoreData.spells[level][position].nameEN})
          </span>
          <p className="spellDescription">
            {LenoreData.spells[level][position].desc}
          </p>
          {LenoreData.spells[level][position].higher_level !== "" ? (
            <span className="spellHigherLevel">
              {LenoreData.spells[level][position].higher_level}
            </span>
          ) : (
            ""
          )}
          <div className="spellStats">
            <div className="text">
              <h4>{LenoreData.spells[level][position].casting}</h4>
              <h4>{LenoreData.spells[level][position].range}</h4>
              <h4>{LenoreData.spells[level][position].duration}</h4>
              {LenoreData.spells[level][position].damage !== "" ? (
                <h4>{LenoreData.spells[level][position].damage}</h4>
              ) : (
                ""
              )}
              {LenoreData.spells[level][position].damage_type !== "" ? (
                <h4>{LenoreData.spells[level][position].damage_type}</h4>
              ) : (
                ""
              )}
              {LenoreData.spells[level][position].concentration ? (
                <img src={concentration}></img>
              ) : (
                ""
              )}
              {LenoreData.spells[level][position].ritual ? (
                <img src={ritual}></img>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Spell;
