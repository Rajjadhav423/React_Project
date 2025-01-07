import { useState, useEffect } from 'react';    

const CountDown = () => {
    const [isStart, setIsStart] = useState(false);
    const [hour, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [second, setSecond] = useState(0);
  
    const changeHandler = (e) => {
      const value = Math.max(0, parseInt(e.target.value) || 0); // Prevent negative input
      const id = e.target.id;
      if (id === 'hh') setHours(value);
      else if (id === 'mm') setMinutes(value);
      else if (id === 'ss') setSecond(value);
    };
  
    // useEffect(() => {
    //   let tid;
  
    //   if (isStart) {
    //     tid = setInterval(() => {
    //       setSecond((prev) => {
    //         if (prev > 0) return prev - 1;
    //         if (minutes > 0) {
    //           setMinutes((min) => min - 1);
    //           return 59;
    //         }
    //         if (hour > 0) {
    //           setHours((hr) => hr - 1);
    //           setMinutes(59);
    //           return 59;
    //         }
    //         // Timer complete
    //         setIsStart(false);
    //         return 0;
    //       });
    //     }, 1000);
    //   }
  
    //   return () => clearInterval(tid); // Cleanup interval
    // }, [isStart]);
    useEffect(() => {
        let tid;
      
        if (isStart) {
          tid = setInterval(() => {
            if (second > 0) {
              setSecond((prev) => prev - 1);
            } else if (minutes > 0) {
              setMinutes((prev) => prev - 1);
              setSecond(59);
            } else if (hour > 0) {
              setHours((prev) => prev - 1);
              setMinutes(59);
              setSecond(59);
            } else {
              setIsStart(false);
              clearInterval(tid);
            }
          }, 1000);
        }
      
        return () => clearInterval(tid);
      }, [isStart, hour, minutes, second]);
      
    const resetTimer = () => {
      setIsStart(false);
      setHours(0);
      setMinutes(0);
      setSecond(0);
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-200 text-gray-800">
        <h1 className="text-4xl font-extrabold mb-6 text-white shadow-md">
          Countdown Timer
        </h1>
  
        {!isStart && (
          <div>
            <div className="space-x-4 flex">
              <input
                id="hh"
                onChange={changeHandler}
                className="border border-gray-300 p-2 rounded text-center w-16 text-lg font-medium focus:ring-2 focus:ring-blue-500 outline-none shadow"
                placeholder="HH"
                value={hour}
              />
              <input
                id="mm"
                onChange={changeHandler}
                className="border border-gray-300 p-2 rounded text-center w-16 text-lg font-medium focus:ring-2 focus:ring-blue-500 outline-none shadow"
                placeholder="MM"
                value={minutes}
              />
              <input
                id="ss"
                onChange={changeHandler}
                className="border border-gray-300 p-2 rounded text-center w-16 text-lg font-medium focus:ring-2 focus:ring-blue-500 outline-none shadow"
                placeholder="SS"
                value={second}
              />
            </div>
  
            <div className="mt-6">
              <button
                onClick={() => setIsStart(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-800 shadow-lg transition duration-300"
              >
                Start
              </button>
            </div>
          </div>
        )}
  
        {isStart && (
          <div>
            <div className="mt-8 bg-white rounded-lg shadow-lg p-6 flex items-center space-x-3 text-2xl font-bold">
              <div className="flex flex-col items-center">
                <div className="text-blue-600">{String(hour).padStart(2, '0')}</div>
                <div className="text-sm text-gray-500">HH</div>
              </div>
              <span className="text-gray-700">:</span>
              <div className="flex flex-col items-center">
                <div className="text-blue-600">{String(minutes).padStart(2, '0')}</div>
                <div className="text-sm text-gray-500">MM</div>
              </div>
              <span className="text-gray-700">:</span>
              <div className="flex flex-col items-center">
                <div className="text-blue-600">{String(second).padStart(2, '0')}</div>
                <div className="text-sm text-gray-500">SS</div>
              </div>
            </div>
  
            <div className="mt-6 space-x-4">
              <button
                onClick={resetTimer}
                className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 shadow transition duration-300"
              >
                Reset
              </button>
              <button
                onClick={() => setIsStart(false)} // Pause functionality
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-700 shadow transition duration-300"
              >
                Pause
              </button>
            </div>
          </div>
        )}
      </div>
    );
}

export default CountDown
