import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [addresss, setAddress] = useState([
    "5020 S. Prairie Ave.",
    "2325 Trillium Ln.",
    "1516 Blackberry Ct.",
  ]);

  const getAddress = async (value) => {
    try {
      const result = await axios.get(
        `https://www.rentometer.com/api/v1/summary?api_key=AskQ6EZFDzUBorBJVZQHuw&address=${value}, IL 60565&bedrooms=4`
      );
      setData(result.data);
      console.log("RESULT", result.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <div className="App">
      <input placeholder="add new address" />
      <button>Add</button>
      {addresss.map((value) => {
        return (
          <div key={value}>
            <button onClick={() => getAddress(value)}>{value}</button>
          </div>
        );
      })}

      {data && (
        <div>
          <h4>Mean : {data?.mean}</h4>
          <h4>max : {data?.max}</h4>
          <h4>min : {data?.min}</h4>
          <h4>address : {data?.address}</h4>
        </div>
      )}
    </div>
  );
}

export default App;
