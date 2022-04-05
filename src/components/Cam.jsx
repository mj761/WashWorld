import React, { useEffect, useState } from "react";
import axios from "axios";
import info from "../info";

export default function Cam(data) {
  const [backendLpn, setBackendLpn] = useState({});

  useEffect(() => {
    axios.get(info.backendUrl + "/cam/" + data.LocationID).then((result) => {
      //console.log(result.data);
      setBackendLpn(result.data);
      console.log(result.data.lpn);
    });
  }, []);

  function getRandomLPN(lpn) {
    /*Slicer BV væk, starter fra 0 og slutter inden 2 */
    const chars = lpn.slice(0, 2);
    const numbers = lpn.slice(2) - Math.round(Math.random() * 1);
    return chars + numbers;
  }

  const lpn = getRandomLPN("BV99123");

  function confirmLpn() {
    data.setLPN(lpn);
  }
  return (
    <div className="component green-campage">
      <div>
      <h1 className="h1">{lpn}</h1>
      </div>
      <button onClick={confirmLpn} className="conbtn">Confirm</button>
    </div>
  );
}
