import './App.css';
import Navbar from './components/Navbar'
import Form from './components/Form'
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {

  const [mode, setmode] = useState("light")
  const changeMode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#343a40"
      document.title = "Text Checker-Dark Mode"
      showAlert("Dark Mode Has Been Enabled", "success")
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white"
      document.title = "Text Checker"
      showAlert("Light Mode Has Been Enabled", "success")
    }
  }


  const [green, setgreen] = useState("light")
  const greenMode = () => {
    if (green === "light") {
      setgreen("success")
    }
    else {
      setgreen("light")
    }
  }


  const [alert, setalert] = useState(null)
  const showAlert = (msg, type) => {
    setalert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  return (
    <>
      <Router>
      <Navbar title='Text Checker' mode={mode} changeMode={changeMode} green={green} greenMode={greenMode} />
      <Alert alert={alert} />
        <Routes>
          <Route exact path='/Home' element={<Form showAlert={showAlert} heading='Text Check' mode={mode} />}></Route>
          <Route exact path='/About' element={<About mode={mode} />}></Route>
        </Routes>
      </Router>
    </>
  );
}


export default App;

