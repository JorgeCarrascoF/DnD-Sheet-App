import '../styles/DeathSaves.css'
import DeathSaveFail from './DeathSaveFail';
import DeathSaveSuccess from './DeathSaveSuccess';

import { useContext } from 'react';
import {DataContext} from '../App.jsx'


const DeathSaves = () => {
    
    const {LenoreData} = useContext(DataContext);
    
    return (
        <div className='DeathSaves'>
            <div className='title'>
                <span>SALVACIONES DE MUERTE</span>
            </div>
            <div className='success'>
                <span>Éxitos</span>
                <div>
                    <DeathSaveSuccess position={0}></DeathSaveSuccess>
                    <DeathSaveSuccess position={1}></DeathSaveSuccess>
                    <DeathSaveSuccess position={2}></DeathSaveSuccess>
                </div>
            </div>
            <div className='fail'>
                <span>Fallos</span>
                <div>
                    <DeathSaveFail position={0}></DeathSaveFail>
                    <DeathSaveFail position={1}></DeathSaveFail>
                    <DeathSaveFail position={2}></DeathSaveFail>
                </div>
            </div>
        </div>
    )
}

export default DeathSaves;