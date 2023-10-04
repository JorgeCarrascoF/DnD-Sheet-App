import '../styles/HitPoints.css'

import HitPointsFrame from '../img/CombatBox/HitPoints.svg'
import { useState } from 'react'

import { useContext } from 'react';
import {DataContext} from '../App.jsx'


const HitPoints = () => {
    
    const {LenoreData} = useContext(DataContext);
    
    const [currentHP, setCurrentHP] = useState(LenoreData.cur_health)
    const [editingHP, setEditingHP] = useState(false)
    const [editingMaxHP, setEditingMaxHP] = useState(false)

    const changeEditing = () => {
        setEditingHP(!editingHP);
    }

    const changeEditingMax = () => {
        setEditingMaxHP(!editingMaxHP)
    }

    const changeEditingInput = (e) => {
        let inputNumber = parseInt(e.target.value);
        if(e.key === 'Enter') {
            setEditingHP(!editingHP);
            if(inputNumber > LenoreData.max_health) {
                LenoreData.cur_health = LenoreData.max_health;
                setCurrentHP(LenoreData.max_health)
            } else if(inputNumber < 0){
                LenoreData.cur_health + inputNumber < 0 ? LenoreData.cur_health = 0 : LenoreData.cur_health += inputNumber;
                setCurrentHP(LenoreData.cur_health)
            } else {
                LenoreData.cur_health = inputNumber;
                setCurrentHP(LenoreData.cur_health)
            }
        }
    }

    const changeEditingMaxInput = (e) => {
        let inputNumber = parseInt(e.target.value);
        if(e.key === 'Enter') {
            if (!isNaN(e.target.value)){
                setEditingMaxHP(!editingMaxHP);
                LenoreData.max_health = inputNumber;
            }
        }

    }

    return (
        <div className='HitPoints'>
            <img src={HitPointsFrame} alt=""/>
            <div className='points'>
                {editingHP ? <input type='number' className='currentHitPoints' defaultValue={currentHP} onKeyDown={changeEditingInput}></input> : <span className='currentHitPoints' onClick={changeEditing}>{currentHP}</span>}
                <div className='separation'></div>
                {editingMaxHP ? <input type='number' className='maxHitPoints' defaultValue={LenoreData.max_health} onKeyDown={changeEditingMaxInput}></input> : <span className='maxHitPoints' onClick={changeEditingMax}>{LenoreData.max_health}</span>                
}
            </div>
            <span>VIDA</span>
        </div>
    )
}

export default HitPoints;