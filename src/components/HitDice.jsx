import '../styles/HitDice.css'
import hitDiceFrame from '../img/CombatBox/HitDice.svg'
import { useState } from 'react'

import { useContext } from 'react';
import {DataContext} from '../App.jsx'


const HitDice = ({text}) => {
    
    const {LenoreData} = useContext(DataContext);
    const [hitDiceLeft, setHitDiceLeft] = useState(LenoreData.hit_dice);

    const addDice = () => {
        if(hitDiceLeft < LenoreData.level){
            LenoreData.hit_dice++;
            setHitDiceLeft(hitDiceLeft+1)
        }
    }

    const subDice = () => {
        if(hitDiceLeft > 0){
            LenoreData.hit_dice--;
            setHitDiceLeft(hitDiceLeft-1)
        }
    }

    return (
        <div className='HitDice'>
            <img src={hitDiceFrame}></img>
            <span className='hitDiceNumber'>{hitDiceLeft}</span>
            <span className='hitDiceTitle'>{text}</span>
            <button className='hitDiceAdd' onClick={addDice}>+</button>
            <button className='hitDiceSub' onClick={subDice}>-</button>
        </div>
    )
}

export default HitDice;