import { useState } from "react"
import '../styles/DeathSaveFail.css'

import baseFail from '../img/CombatBox/deathSaveFail.svg';
import activeFail from '../img/CombatBox/deathSaveFailActive.svg'

import { useContext } from 'react';
import {DataContext} from '../App.jsx'


const DeathSaveFail = ({position}) => {

    const {LenoreData} = useContext(DataContext);

    const [isMarked, setIsMarked] = useState(LenoreData.death_savings.fail[position]);

    const changeMarked = () => {
        LenoreData.death_savings.fail[position] = !LenoreData.death_savings.fail[position]
        setIsMarked(!isMarked)
    }

    return(
        <img className="deathSaveIcon" src={isMarked ? activeFail : baseFail} onClick={changeMarked}></img>
    )
}

export default DeathSaveFail;