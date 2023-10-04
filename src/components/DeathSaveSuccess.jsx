import { useState } from "react"
import '../styles/DeathSaveFail.css'

import baseSuccess from '../img/CombatBox/deathSaveSuccess.svg';
import activeSuccess from '../img/CombatBox/deathSaveSuccessActive.svg'

import { useContext } from 'react';
import {DataContext} from '../App.jsx'


const DeathSaveSuccess = ({position}) => {

    const {LenoreData} = useContext(DataContext);

    const [isMarked, setIsMarked] = useState(LenoreData.death_savings.success[position]);

    const changeMarked = () => {
        LenoreData.death_savings.success[position] = !LenoreData.death_savings.success[position]
        setIsMarked(!isMarked)
    }

    return(
        <img className="deathSaveIcon" src={isMarked ? activeSuccess : baseSuccess} onClick={changeMarked}></img>
    )
}

export default DeathSaveSuccess;