
import { useState } from 'react';
import './App.css';
import AboutUs from './Components/AboutUs';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import {
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom";

function App() {
  //state which denotes darkmode is enable or not 
  const [mode, setMode] = useState('light')

  //Alerts state
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toogleMode= () =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enable","success");
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TEXTUTILS" aboutText="About TEXTUTILS" mode={mode} toogleMode = {toogleMode}/>
      <Alert alert={alert}/>
    
      <Routes>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading=" Try TextUtils - Word Counter , Character Counter , Remove extra spaces   " mode={mode}/>} />
          <Route  path="/aboutus" element={<AboutUs mode={mode}/>} />
      </Routes>
    
    </BrowserRouter>  
    </>
  );
}

export default App;
