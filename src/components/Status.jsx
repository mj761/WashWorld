import React, { useState, useEffect, useRef } from "react";
/*import axios from "axios";
import info from "../info";*/

/* I tried putting in the data with the timer but I couldn't figure it out... tried a few things 
but they didn't work out, so I just put in a random timer with the time of 00.01.60 */

export default function WashStatus() {
/*  useEffect(() => {
    axios
      .post(
        info.backendUrl + "/" + data.locationID + "/start/" + data.programID
      ) // this link does not work also when I try in the browser, have I miss understood how the link is supposed to work?
      .then((result) => {
        console.log(result.data);
        //data.setProducts(result.data.response.products);
      });
  }, []);
*/
const Ref = useRef(null);

const [timer, setTimer] = useState('00:00:00');

const getTimeRemaining = (e) => {
  const total = Date.parse(e) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / 1000 * 60 * 60) % 24);
  return {
      total, hours, minutes, seconds
  };
}
const startTimer = (e) => {
  let { total, hours, minutes, seconds } 
              = getTimeRemaining(e);
  if (total >= 0) {

      setTimer(
          (hours > 9 ? hours : '0' + hours) + ':' +
          (minutes > 9 ? minutes : '0' + minutes) + ':'
          + (seconds > 9 ? seconds : '0' + seconds)
      )
  }
}


const clearTimer = (e) => {
    
  setTimer('00:01:60');


  if (Ref.current) clearInterval(Ref.current);
  const id = setInterval(() => {
      startTimer(e);
  }, 1000)
  Ref.current = id;
}

const getDeadTime = () => {
  let deadline = new Date();

  deadline.setSeconds(deadline.getSeconds() + 60);
  return deadline;
}

useEffect(() => {
  clearTimer(getDeadTime());
}, []);


const onClickReset = () => {
  clearTimer(getDeadTime());
}

  return (
    <div className="another-timerpage">
      <h2 className="timer">{timer}</h2>
    </div>
  );
}
