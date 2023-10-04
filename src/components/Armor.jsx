import '../styles/Armor.css'

import armorFrame from '../img/CombatBox/Armor.svg'

import { useContext } from 'react';
import {DataContext} from '../App.jsx'


const Armor = () => {
    
    const {LenoreData} = useContext(DataContext);

    return(
        <div className="Armor">
            <img src={armorFrame}></img>
            <span className='armorNumber'>{14 + LenoreData.stats[1].bonus}</span>
            <span className='title'>ARMADURA</span>
        </div>
    )
}

export default Armor;