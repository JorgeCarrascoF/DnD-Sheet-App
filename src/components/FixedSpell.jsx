import "../styles/Spell.css";

import spellFrame from "../img/spell-frame.svg";
import concentration from "../img/concentration.svg";
import ritual from "../img/ritual.svg";
import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

const FixedSpell = ({ level }) => {
  let spellESP, spellEN, spellDesc, spellStats;
  const ref = useDetectClickOutside({
    onTriggered: () => {
      setDesc(false);
    },
  });

  if(level === 0) {
    spellESP = "Tañir a los muertos";
    spellEN = "Toll the dead";
    spellDesc =
      "Señalas a una criatura que puedes ver dentro del alcance y el sonido de una campana dolorosa llena el aire a su alrededor por un momento. El objetivo debe superar una tirada de salvación de Sabiduría o sufrir 1d8 de daño necrótico. Si al objetivo le falta alguno de sus puntos de vida, sufre 1d12 de daño necrótico. El daño del hechizo aumenta en un dado cuando alcanzas el nivel 5 (2d8 o 2d12), el nivel 11 (3d8 o 3d12) y el nivel 17 (4d8 o 4d12)."
    spellStats = {
      higher_level: "",
      casting: "1 acción",
      range: "60 pies",
      duration: "Instantáneo",
      damage: '2d8 / 2d12',
      damage_type: "Necrótico",
      concentration: false,
      ritual: false,
    };
  } else if (level === 1) {
    spellESP = "Fuego feérico";
    spellEN = "Faerie Fire";
    spellDesc =
      "El conjuro ilumina con luz azul, verde o violeta, a tu elección, el contorno de todos los objetos en un cubo de 20 pies dentro del alcance. Se ilumina también el contorno de cualquier criatura dentro del área que falle una tirada de salvación de Destreza. Hasta el final de la duración del conjuro, los objetos y criaturas afectados emiten luz tenue en un radio de 10 pies. Todas las tiradas de ataque contra una criatura u objeto afectado tienen ventaja si el atacante puede ver a su objetivo. Además, aunque sean invisibles no recibirán ninguno de los beneficios de ese estado mientras sigan afectados por fuego feérico.";
    spellStats = {
      higher_level: "",
      casting: "1 acción",
      range: "60 pies",
      duration: "1 minuto",
      damage_type: "indefinido",
      concentration: true,
      ritual: false,
    };
  } else if (level === 2) {
    spellESP = "Rayo de luna";
    spellEN = "Moonbeam";
    spellDesc =
      "Un rayo plateado de luz pálida brilla en un cilindro de 5 pies de radio y 40 pies de alto, cuyo centro se encuentra en un punto que elijas dentro del alcance. Hasta que el conjuro termine, una luz tenue llena el cilindro. Cuando una criatura entra en el área del conjuro por primera vez en un turno o empieza un turno ahí, unas fantasmales llamas la envuelven causándole un dolor agudo. Debe hacer una tirada de salvación de Constitución: si falla, recibe 2d10 puntos de daño radiante y, si tiene éxito, la mitad. Un cambiaformas hace la tirada de salvación con desventaja. Si falla, también vuelve a su forma original inmediatamente y no puede asumir una forma diferente hasta que deje la luz del conjuro. En cada uno de tus turnos después de lanzar el conjuro puedes usar una acción para mover el rayo 60 pies en cualquier dirección.";
    spellStats = {
      higher_level:
        "Cuando lanzas este conjuro usando un espacio de conjuro de nivel 3 o superior, el daño aumenta en 1d10 por cada nivel por encima de 2.",
      casting: "1 acción",
      damage: "2d10",
      damage_type: "Radiante",
      range: "120 pies",
      duration: "1 minuto",
      concentration: true,
      ritual: false,
    };
  } else if (level === 3) {
    spellESP = "Aura de vitalidad";
    spellEN = "Aura of Vitality";
    spellDesc =
      "Energía sanadora emana de ti en un aura de 30 pies de radio. Hasta que el conjuro termine, el aura se mueve contigo, centrada en ti. Puedes usar una acción adicional para hacer que una criatura en el aura (tú incluido) recupere 2d6 puntos de golpe.";
    spellStats = {
      higher_level: "",
      damage_type: "Indefinido",
      casting: "1 acción",
      range: "Uno mismo",
      duration: "1 minuto",
      concentration: true,
      ritual: false,
    };
  } else if (level === 4) {
    spellESP = "Aura de vida";
    spellEN = "Aura of Life";
    spellDesc =
      "Energía curativa irradia de ti en un aura de 30 pies. Hasta que finalize el hechizo, el aura se mueve contigo, centrada en ti. Las criaturas no hostiles en el aura tienen resistencia al daño necrótico, y su vida máxima no se puede reducir. Además, recuperan 1 punto de vida cuando comienzan su turno en el aura con 0 puntos de vida."
    spellStats = {
      higher_level: "",
      casting: "1 acción",
      damage_type: "indefinido",
      range: "Uno mismo",
      duration: "10 minutos",
      concentration: true,
      ritual: false,
    };
  } else if (level === 5) {
    spellESP = "Círculo de poder";
    spellEN = "Circle of Power";
    spellDesc =
        "Energía divina irradia de ti en un aura de 30 pies. Las criaturas aliadas en el área (tú incluida) tienen ventaja en las tiradas de salvación contra hechizos y otros efectos mágicos. Además, cuando una criatura afectada tiene éxito en una tirada de salvación contra un hechizo o efecto mágico que le permite realizar una tirada de salvación para recibir sólo la mmitad del daño, no sufre daño si tiene éxito en la tirada."
    spellStats = {
      higher_level: "",
      casting: "1 acción",
      damage_type: "indefinido",
      range: "Uno mismo",
      duration: "10 minutos",
      concentration: true,
      ritual: false,
    };
  }

  const [desc, setDesc] = useState(false);

  const toggleDesc = () => {
    let descState = !desc;
    setDesc(descState);
  };

  return (
    <div className="spell" ref={ref}>
      <div className="title">
        <div className="frame">
          <img src={spellFrame}></img>
          <div className="circle"></div>
        </div>
        <h3 className="spellName" onClick={toggleDesc}>
          {spellESP}
        </h3>
      </div>
      {desc ? (
        <div className="description">
          <span className="spellTitle">({spellEN})</span>
          <p>{spellDesc}</p>
          {spellStats.higher_level !== "indefinido" ? (
            <span>{spellStats.higher_level}</span>
          ) : (
            ""
          )}
          <div className="spellStats">
            <div className="text">
              <h4>{spellStats.casting}</h4>
              <h4>{spellStats.range}</h4>
              <h4>{spellStats.duration}</h4>
              {spellStats.damage !== undefined ? (
                <h4>{spellStats.damage}</h4>
              ) : (
                ""
              )}
              {spellStats.damage_type !== "indefinido" ? (
                <h4>{spellStats.damage_type}</h4>
              ) : (
                ""
              )}
              {spellStats.concentration ? <img src={concentration}></img> : ""}
              {spellStats.ritual ? <img src={ritual}></img> : ""}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FixedSpell;
