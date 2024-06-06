import { useState } from "react";


function App() {

  const [fname,setfname] =useState("")
  const [lname,setlname] =useState("")
  const[valuefilled, setvaluefilled]=useState(false)

 

  const valueChange =(event)=>{
    if(event.target.name==="lname"){
      setlname(event.target.value)
    }else{
      setfname(event.target.value)
    }
  }

 

  const handleSubmit=(event)=>{
    event.preventDefault();
    if (fname && lname){
      setvaluefilled(true)
    }
  }

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label for="fname">First Name:</label>
        <input type="text" value={fname} name="fname" onChange={valueChange} required></input><br></br>
        <label for="lname">Last Name:</label>
        <input type="text" value={lname} name="lname" onChange={valueChange} required></input><br></br>
        <button type="submit">Submit</button>
      </form>
      <div>
        {valuefilled ?  `Full Name: ${fname} ${lname}`: ""}
      </div>
    </div>
  );
}

export default App;
