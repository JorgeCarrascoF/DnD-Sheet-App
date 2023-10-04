import '../styles/Speed.css'

import speedFrame from '../img/CombatBox/Speed.svg'

import { useContext } from 'react';
import {DataContext} from '../App.jsx'


const Speed = () =>{

    const {LenoreData} = useContext(DataContext);


    return (
        <div className='Speed'>
            <img src={speedFrame}></img>
            <span className='speedNumber'>{LenoreData.speed}</span>
            <span className='title'>VELOCIDAD</span>
        </div>
    )
}

export default Speed;