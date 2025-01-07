import { useEffect, useRef, useState } from 'react';

const UseRefHook = () => {
  // let val = useRef(0);
  // let reftag = useRef(null);
  // const [count, setCount] = useState(0);
  // function clickHandler() {
  //   val.current = val.current + 1;
  //   console.log("the value is ", val.current);
  //   setCount((count) => count + 1);
  // }
  // function changeColorHandler(){
  //   reftag.current.style.backgroundColor="red"
  // }
  // useEffect(() => {
  //   console.log("firse render");
  // });

  const timerRef = useRef(null);

  const [time, setTime] = useState({
    hr: 0,
    min: 0,
    sec: 0,
  });

  // Start the timer
  function StartTime() {
    timerRef.current = setInterval(() => {
      setTime((prev) => {
        let s = prev.sec + 1;
        let m = prev.min;
        let h = prev.hr;

        if (s === 60) {
          s = 0; // Reset seconds after 60
          m = m + 1; // Increment minutes after 60 seconds
        }

        if (m === 60) {
          m = 0; // Reset minutes after 60
          h = h + 1; // Increment hours after 60 minutes
        }

        return { ...prev, sec: s, min: m, hr: h }; // Update state with new values
      });
    }, 1000);
  }

  // Stop the timer
  function StopTime() {
    clearInterval(timerRef.current);
  }

  // Reset the timer
  function ResetTime() {
    setTime({ hr: 0, min: 0, sec: 0 }); // Reset the time to 0
    clearInterval(timerRef.current); // Stop the timer
  }

  return (
    //   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    //     <button
    //       ref={reftag}
    //       onClick={clickHandler}
    // className="px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-700"
    //     >
    //       Increment
    //     </button>
    //     <button onClick={changeColorHandler}> change color </button>
    //     <h1 className="text-2xl font-bold">{count}</h1>
    //   </div>
    <>
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">Stopwatch</h1>
      <h1 className="text-xl text-center text-gray-700 mb-6">
        Time is {time.hr} hr {time.min} min {time.sec} sec
      </h1>

      <div className="flex justify-center space-x-4">
        <button
          onClick={StartTime}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
        >
          Start
        </button>
        <button
          onClick={StopTime}
          className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-800 transition duration-300"
        >
          Stop
        </button>
        <button
          onClick={ResetTime}
          className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default UseRefHook;

//first use of UseRef is to persist the value of variable across renrender
//can contol the component by refercing them
//useRef is made for to modify element in dom directly

