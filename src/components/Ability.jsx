import "../styles/Ability.css";

export const Ability = ({abilityName, abilityProf, abilityBonus}) => {
  return (
    <div className="ability">
      <div className={abilityProf === true ? 'proficiency true' : 'proficiency'}></div>
      <div className="bonus">{abilityBonus > -1 ? <span>+</span> : <span>-</span>}<span>{Math.abs(abilityBonus)}</span></div>
      <span className="text">{abilityName}</span>
    </div>
  );
};


export default Ability;