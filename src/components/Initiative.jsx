import '../styles/Initiative.css'

import initiativeFrame from '../img/CombatBox/Initiative.svg'

import { useContext } from 'react';
import {DataContext} from '../App.jsx'


const Initiative = () => {
    
    const {LenoreData} = useContext(DataContext);

    return (
        <div className="Initiative">
            <img src={initiativeFrame}></img>
            <span className='initiativeNumber'>+{LenoreData.stats[1].bonus}</span>
            <span className='title'>INICIATIVA</span>
        </div>
    )
}


export default Initiative;