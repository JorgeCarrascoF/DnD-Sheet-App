import { createContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import SpellSheet from "./components/SpellSheet";

import LenoreDataJSON from "./LenoreSheet.json";
import ParticlesComponent from "./components/Particles.jsx";

const data = localStorage.getItem('Lenore');
if(!data){
  localStorage.setItem('Lenore', JSON.stringify(LenoreDataJSON))
}
const Lenore = JSON.parse(localStorage.getItem('Lenore'));

export const DataContext = createContext();

function App() {
  const [page, setPage] = useState("Main");
  const [LenoreData, setLenoreData] = useState(Lenore);

  const changePage = () => {
    page === "Main" ? setPage("Spells") : setPage("Main");
  };

  const saveData = () => {
    autoSaveData()
    const link = document.createElement("a");
    link.href = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(LenoreData)
    )}`;
    link.download = "LenoreSheet.json";

    link.click();
  };
  
  const autoSaveData = () => {
    localStorage.setItem('Lenore', JSON.stringify(LenoreData))
  }
  
  const showData = () => {
    console.log(LenoreData);
    saveData();
  };

  useEffect(()=>{
    const interval = setInterval(()=>{
      autoSaveData();
    }, 300000)

    return () => clearInterval(interval)
  }, [])


  const [phase, setPhase] = useState(LenoreData.moonPhase);

  const changePhase = () => {
    let newPhase = (LenoreData.moonPhase + 1) % 3;
    setPhase(newPhase);
    LenoreData.moonPhase = newPhase;
  };

  return (
    <div className="App">
      <DataContext.Provider value={{LenoreData, setLenoreData}}>
        <Header
          page={page}
          click={changePage}
          show={showData}
          changePhase={changePhase}
          save={autoSaveData}
          download={saveData}
          ></Header>
        {page === "Main" ? (
          <MainScreen></MainScreen>
          ) : (
            <SpellSheet phase={phase}></SpellSheet>
        )}
      </DataContext.Provider>
      <ParticlesComponent/>
    </div>
  );
}

export default App;
