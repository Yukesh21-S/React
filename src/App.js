import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sample from './components/Sample';
import Col from './components/clc';

function App() {

  const [colorchange,setColorchang]=useState('');
  
  const[isDark,setDark]=useState(true)
  return (
    
    <>
    <Sample
    colorchange={colorchange}
    isDark={isDark}
    ></Sample>
    <br></br>
    <Col 
colorchange={colorchange}
isDark={isDark}
setColorchang={setColorchang}
setDark={setDark}

   ></Col>
    </>
  );
}

export default App;
