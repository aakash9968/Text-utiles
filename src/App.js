

// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {useState} from "react";

function App() {
    const [mode , setMode]=useState('light');

    const togglemode=()=>{
         if(mode ==='light'){
          setMode('dark');
          document.body.style.backgroundColor='black';
          document.body.style.color='white';

         }
         else{
          setMode('light')
          document.body.style.backgroundColor='white';
          document.body.style.color='black';


         }

    }
  return (
    <>
    <Navbar title="File Reader" about="About Us" mode={mode} togglemode={togglemode}/>
    <div className="container my-3">
    <TextForm/>
    </div>
    {/* <About/> */}
    </>
  );
}

export default App;
