import { useState } from "react";
import faqData from "./faqdata";
// function Faq() {
//     const [sign, setSign] = useState(">");
//   const [showans,setShowNans]=useState(false)
// const clickHandler = () => {
//     console.log(sign); 
//     setShowNans(!showans)
//   };
//   return (
//   <div>

//     {
//         faqData.map((val,index)=>
//               (
//                 <div key={index}>
//                    <span>
//                     <button onClick={clickHandler}> {sign} </button>
//                     {val.question}
//                     {showans ? <div>{val.answer}</div> :<></>}
//                    </span>
//                 </div>
//             )
//         )
//     }
//   </div>

//   )
// }
// export default Faq;



// function Faq() {
//   const [activeIndex, setActiveIndex] = useState(null); // Track the active FAQ item

//   const clickHandler = (index) => {
//     console.log("index is ",index)
//     console.log("activeIndex is ",activeIndex)
//     if (index === activeIndex) {
//         // Agar current index aur activeIndex same hain, toh activeIndex ko null set karo
//         setActiveIndex(null);
//       } else {
//         // Agar current index aur activeIndex different hain, toh current index set karo
//         setActiveIndex(index);
//       }
//       // Toggle the specific FAQ
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
//         Frequently Asked Questions
//       </h1>

//       {faqData.map((val, index) => (
//         <div
//           key={index}
//           className="mb-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
//         >
//           <div
//             className="flex items-center justify-between cursor-pointer"
//             onClick={() => clickHandler(index)} // Pass the index to identify the clicked FAQ
//           >
//             <button
//               className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-800 transition duration-300"
//             >
//               {activeIndex === index ? "-" : ">"} {/* Change sign dynamically */}
//             </button>
//             <span className="ml-4 text-lg font-medium text-gray-800">
//               {val.question}
//             </span>
//           </div>
//           {activeIndex === index && ( // Check if the current FAQ is active
//             <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-600 text-gray-700 rounded-lg">
//               {val.answer}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Faq;


function Faq(){

return (
<></>
)
}

export default Faq