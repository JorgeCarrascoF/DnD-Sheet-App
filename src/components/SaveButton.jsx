import '../styles/SaveButton.css'
import saveIcon from '../img/saveIcon.svg'
import { useState } from 'react';

const SaveButton = ({save, download}) => {

    const [text, setText] = useState('Guardar');


    const saveData = () => {
        save();
        setText('Guardado!')
        setTimeout(()=>{
            setText('Guardar')
        }, 2000)
    }

    return (
        <div className='SaveButton' onClick={saveData}> 
            <img src={saveIcon} className='frontImg'></img>
            <img src={saveIcon} className='midImg'></img>
            <img src={saveIcon} className='backImg'></img>
            <span className='saveText'>{text}</span>
        </div>
    )
}

export default SaveButton;