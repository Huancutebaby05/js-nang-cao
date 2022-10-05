import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // thuc hien luu tru data
  const [state, setState] = useState([]);
  const [names, setNames] = useState();
  const url = "https://6336968665d1e8ef266f2a30.mockapi.io/api/v1/demo/address";

  // de goi api
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const { data } = response;
        setState(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const getNames = (name) => {
    const data = state || [];
  const newNames = data.filter((address) => address.name.trim().toLowerCase().includes(name.trim().toLowerCase())).map( (i)=>i.name)
  const newName = newNames.join(", ")
  setNames(newName)
  }
  return (
    <div className="App">
      <input onChange={(e) => getNames(e.target.value)} />
      <div>{names}</div>
    </div>
  );
}

export default App;
