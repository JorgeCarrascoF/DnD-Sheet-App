import "../styles/SpellSearch.css";

import searchIcon from "../img/search.svg";
import { useState } from "react";

import Translate from "translate";
Translate.engine = "google";

import { useContext } from "react";
import { DataContext } from "../App.jsx";

const SpellSearch = () => {
  const [spell, setSpell] = useState("");
  const [list, setList] = useState(false);
  const [spellList, setSpellList] = useState([]);

  const { LenoreData, setLenoreData } = useContext(DataContext);

  const submitSpell = async (e) => {
    document.getElementById("spellSearchInput").value = "";
    const spellInfo = await getSpellInfo(e.target.id);
    setList(false);

    if (spellInfo.level < 6) {
      if (!isDuplicated(e.target.innerText, spellInfo.level)) {
        let position = getFirstFreePosition(spellInfo.level);


        if (spellInfo.error === "Not found") {
          LenoreData.spells[spellInfo.level][position].name =
            "Conjuro no encontrado";
        } else {
          const textDescES = await Translate(spellInfo.desc, "es");
          LenoreData.spells[spellInfo.level][position].desc = textDescES;
          LenoreData.spells[spellInfo.level][position].name =
            e.target.innerText;
          LenoreData.spells[spellInfo.level][position].nameEN = spellInfo.name;

          LenoreData.spells[spellInfo.level][position].casting =
            await Translate(spellInfo.casting_time, "es");
          LenoreData.spells[spellInfo.level][position].duration =
            await Translate(spellInfo.duration, "es");
          LenoreData.spells[spellInfo.level][position].range = await Translate(
            spellInfo.range,
            "es"
          );
          LenoreData.spells[spellInfo.level][position].damage =
            spellInfo.level > 0
              ? spellInfo.damage?.damage_at_slot_level[spellInfo.level] ===
                undefined
                ? ""
                : spellInfo.damage.damage_at_slot_level[spellInfo.level]
              : spellInfo.damage?.damage_at_character_level[5] === undefined
              ? ""
              : spellInfo.damage.damage_at_character_level[5];
          LenoreData.spells[spellInfo.level][position].higher_level =
            spellInfo.higher_level[0] === undefined
              ? ""
              : await Translate(spellInfo.higher_level[0], "es");
          LenoreData.spells[spellInfo.level][position].damage_type =
            spellInfo.damage?.damage_type.name == undefined
              ? ""
              : await Translate(spellInfo.damage.damage_type.name, "es");
          LenoreData.spells[spellInfo.level][position].concentration =
            spellInfo.concentration;
          LenoreData.spells[spellInfo.level][position].ritual =
            spellInfo.ritual;
          setLenoreData(JSON.parse(JSON.stringify(LenoreData)));
        }
      }
    } else {
      document.getElementById("spellSearchInput").value = `Nivel demasiado alto (${spellInfo.level})`;
    }
  };

  const submitSpellList = async () => {
    let spellSearch = await Translate(spell, { from: "es" }, { to: "en" });
    spellSearch = spellSearch.replaceAll(" ", "-");
    const spellNameList = await getSpellList(spellSearch.toLowerCase());

    let newSpellList = [];
    if (spellNameList.count === 0) {
      newSpellList.push({
        name: "No ha habido resultados",
        key: 0,
      });
    } else {
      for (let i = 0; i < spellNameList.count; i++) {
        let spellName = await Translate(spellNameList.results[i].name, "es");
        newSpellList.push({
          name: spellName,
          key: spellNameList.results[i].index,
        });
      }
    }
    setSpellList(newSpellList);
    setList(true);
  };

  const changeText = (e) => {
    let newSpell = e.target.value;
    setSpell(newSpell);
  };

  const submitInput = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        setList(false);
      } else {
        submitSpellList();
      }
    }
  };

  function getSpellInfo(spell) {
    return fetch(`https://www.dnd5eapi.co/api/spells/${spell}`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  function getSpellList(spell) {
    return fetch(`https://www.dnd5eapi.co/api/spells/?name=${spell}`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  const getFirstFreePosition = (level) => {
    let enc = false;
    let pos = 0;

    while (!enc && pos < LenoreData.spells[level].length) {
      if (LenoreData.spells[level][pos].name === "") {
        enc = true;
      } else {
        pos++;
      }
    }

    return pos;
  };

  const isDuplicated = (name, level) => {
    let enc = false;
    let pos = 0;
    while (!enc && pos < LenoreData.spells[level].length) {
      if (LenoreData.spells[level][pos].name === name) {
        enc = true;
      }
      pos++;
    }
    return enc;
  };

  return (
    <div className="SpellSearch">
      <div className="searchInput">
        <input
          id="spellSearchInput"
          onChange={changeText}
          onKeyDown={submitInput}
        ></input>
        <img src={searchIcon}></img>
      </div>
      {list ? (
        <ul>
          {spellList.map((item) => {
            return (
              <li onClick={submitSpell} key={item.key} id={item.key}>
                {item.name}
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default SpellSearch;
