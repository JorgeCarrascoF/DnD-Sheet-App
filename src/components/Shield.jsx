import '../styles/Shield.css'

import ShieldFrame from '../img/CombatBox/Shield.svg'
import { useState } from 'react'

import { useContext } from 'react';
import {DataContext} from '../App.jsx'


const Shield = () => {
    const {LenoreData} = useContext(DataContext);

    const [shieldPoints, setShieldPoints] = useState(LenoreData.shield)
    const [editingSP, setEditingSP] = useState(false)

    const changeEditing = () => {
        setEditingSP(!editingSP)
    }

    const changeEditingInput = (e) => {
        
        let inputNumber = parseInt(e.target.value)

        if(e.key === 'Enter'){
            if(!isNaN(e.target.value)){
                if(inputNumber > 99){
                    LenoreData.shield = 99;
                    setShieldPoints(99)
                } else if(inputNumber < 0) {
                    LenoreData.shield - inputNumber < 0 ? LenoreData.shield = 0 :  LenoreData.shield += inputNumber;
                    setShieldPoints(LenoreData.shield);
                } else{
                    LenoreData.shield = inputNumber
                    setShieldPoints(LenoreData.shield)
                }
            }
            setEditingSP(!editingSP)
        }
    }

    return (
        <div className='Shield'>
            <img src={ShieldFrame}></img>
            <div className='shieldPointsArea'>
                {editingSP ? <input className='shieldPoints' onKeyDown={changeEditingInput} defaultValue={shieldPoints}></input> : <span className='shieldPoints' onClick={changeEditing}>{shieldPoints}</span>}
            </div>
            <span>ESCUDO</span>
        </div>
    )
}

export default Shield;