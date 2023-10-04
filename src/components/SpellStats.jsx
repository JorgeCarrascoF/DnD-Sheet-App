import '../styles/SpellStats.css'

import spellBonusFrame from '../img/CombatBox/Initiative.svg'
import spellSaveFrame from '../img/Header/spellSaveFrame.svg'

import { useContext } from 'react';
import {DataContext} from '../App.jsx'


const SpellStats = () => {
    
    const {LenoreData} = useContext(DataContext)
    const prof_bonus = Math.floor(2 + (LenoreData.level-1)/4)

    return (
        <div className="SpellStats">
            <div className='spellBonus'>
                <img src={spellBonusFrame}></img>
                <span className='spellBonusNumber'>+{LenoreData.stats[4].bonus + prof_bonus}</span>
                <span className='spellBonusTitle'>Bono lanzamiento</span>
            </div>
            <div className='spellSave'>
                <img src={spellSaveFrame}></img>
                <span className='spellSaveNumber'>{8 + LenoreData.stats[4].bonus + prof_bonus}</span>
                <span className='spellSaveTitle'>Salvación conjuro</span>
            </div>
        </div>
    )
}

export default SpellStats;