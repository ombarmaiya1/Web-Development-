import { useState } from "react";

function Home() {

  const [age,setage] = useState();
  const submit = () =>{

    let val = document.getElementById('in').value;
    setage(val);
  }
  return (
    <div className="text-light"><h1>Home</h1>
    <h1>age : {age}</h1>
    <input type="text" id="in" />
    <button onClick={submit}>submit</button>

    </div>
  )
}

export default Home