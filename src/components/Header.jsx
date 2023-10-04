/* eslint-disable react/jsx-key */
import "../styles/Header.css";
import Identity from "./Identity";
import SpellStats from "./SpellStats";

import spellButton from "../img/Header/spellButton.svg";
import { useContext } from "react";
import { DataContext } from "../App.jsx";
import SaveButton from "./SaveButton";
import Level from "./Level";

// eslint-disable-next-line react/prop-types
const Header = ({ page, click, show, download, save }) => {
  const { LenoreData } = useContext(DataContext);

  return (
    <section className="header">
      <SaveButton download={download} save={save}></SaveButton>
      <Level level={10}></Level>
      {page === "Main" ? (
        <div className="Name">
          <h1 onClick={show}>{LenoreData.name}</h1>
        </div>
      ) : (
        <SpellStats></SpellStats>
      )}
      <div className="changePageButton">
        <img src={spellButton} onClick={click}></img>
        <span>{page === "Main" ? "Hechizos" : "Principal"}</span>
      </div>
    </section>
  );
};

export default Header;
