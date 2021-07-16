import React,{useState} from 'react';
import './App.css';

function App() {
  
    const [color,setcolor] = useState(null);
    console.log("color :",color)

    return (
      <div className ="App">

      <div>Hex Code: <input type ="text" value ={color} onChange={e =>setcolor(e.target.value)}/> </div>
        <div className ='bg' style ={{background:`${color}`}}></div>
      </div>
    
  );
}

export default App;
