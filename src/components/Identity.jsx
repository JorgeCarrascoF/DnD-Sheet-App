import '../styles/Identity.css'

import { useContext } from 'react';
import {DataContext} from '../App.jsx'

const Identity = () => {

  const {LenoreData} = useContext(DataContext);
  
  return (
    <div className="character-info">
      <div>
        <h5>Clase</h5>
        <h3>{LenoreData.class}</h3>
      </div>
      <div>
        <h5>Raza</h5>
        <h3>{LenoreData.race}</h3>
      </div>
      <div>
        <h5>Alineamiento</h5>
        <h3>{LenoreData.alignment}</h3>
      </div>
    </div>
  );
};

export default Identity;
