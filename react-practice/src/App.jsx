import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState('');
  const display = (e) => {
    setValue (prev => prev + e.target.value);
  }
  const del = () =>{
    setValue(prev => prev.slice(0,-1));
  }
  const clear = () => {
    setValue('');
  }
  const calculate = () =>{
    try{
      setValue(eval(value));
    }
    catch (error){
      setValue('Error');
    }
  }

  return (
    <>
    <div className = "container">
      <div className = "calculator">
        <form action=''>
          <div>
            <input type='text' value={value}/>
          </div>
          <div>
            <input type='button' value = '+' onClick={display}/>
            <input type='button' value = '-' onClick={display}/>
            <input type='button' value = '*' onClick={display}/>
            <input type='button' value = '/' onClick={display}/>
          </div>
          <div>
            <input type='button' value = '1' onClick={display}/>
            <input type='button' value = '2' onClick={display}/>
            <input type='button' value = '3' onClick={display}/>
            <input type='button' value = '4' onClick={display}/>
          </div>
          <div>
            <input type='button' value = '5' onClick={display}/>
            <input type='button' value = '6' onClick={display}/>
            <input type='button' value = '7' onClick={display}/>
            <input type='button' value = '8' onClick={display}/>
          </div>
          <div>
            <input type='button' value = '9' onClick={display}/>
            <input type='button' value = '0' onClick={display}/>
            <input type='button' value = 'DE' onClick={del}/>
            <input type='button' value = 'AC' onClick={clear}/>
          </div>
          <div>
            <input type='button' value = '.' onClick={display}/>
            <input type='button' value = '=' onClick={calculate}/>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
