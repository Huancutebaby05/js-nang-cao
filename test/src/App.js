import axios from "axios";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState([]);
  var url = "https://6336968665d1e8ef266f2a30.mockapi.io/api/v1/demo/address";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const { data } = response;
        setState(data)
      })
      .catch((e) => {
        console.log(e);
      });
  },[]);
  const getName = (arr) =>{
    const name = arr.map(item =>item.name).join(", ");
    console.log(name);
    return name
  }
  return <div className=""App>{getName(state)}  </div>
}
export default App;
