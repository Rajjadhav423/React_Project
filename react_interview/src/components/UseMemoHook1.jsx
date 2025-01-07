// import { useState } from "react";

// function UseMemoHoook() {
//   const [count, setCount] = useState(0);
//   const [input, setInput] = useState();

//   const expensiveTask=(num)=>{
//      console.log("inside expensive task")
//      for (let i = 0; i <= 100000000; i++) {} 
//     return num*2;
//   }
//   let doubleValue=expensiveTask(4)
//   const clickHandler=()=>{
//     setCount(count=>count+1)
//   }

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         <button
//            onClick={clickHandler}
//           className="px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-700"
//         >
//           Increment
//         </button>
//         <h1 className="text-2xl font-bold">{count}</h1>
//         <div>
//             {doubleValue}
//         </div>
//         <div>
//       <input type="number"
//       placeholder="enter number"
//       value={
// input
//       }
//       onChange={(e)=>{
//         setInput(e.target.value)
//       }}
//       />

//       <div>{input}</div>
        
//         </div>
//       </div>
//     </>
//   );
// }

// export default UseMemoHoook;


import { useMemo, useState } from "react";

function UseMemoHoook() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState();

  const expensiveTask = (num) => {
    console.log("Inside expensive task");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  };

  let doubleValue=  useMemo(()=>expensiveTask(input),[input])

  const clickHandler = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
        <div className="p-6 bg-white rounded-lg shadow-lg text-gray-800 w-96">
          <button
            onClick={clickHandler}
            className="px-6 py-3 mb-6 w-full text-lg font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
          >
            Increment Count
          </button>
          <h1 className="text-3xl font-bold mb-4 text-center">{count}</h1>
          <div className="text-xl font-medium text-center mb-4">
            Double Value: <span className="font-bold text-purple-600">{doubleValue}</span>
          </div>
          <div className="flex flex-col space-y-4">
            <input
              type="number"
              placeholder="Enter a number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <div className="text-lg text-center font-semibold text-gray-700">
              You entered: <span className="font-bold text-purple-600">{input}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseMemoHoook;
