// let sec=0;
// let min=0
// let hr=0;
// setInterval(()=>{
//     // console.log(sec=sec+1)
//     if(sec==59){
//        min=min+1
//        sec=0;
//     }
//     if(min==59 && sec==59){
//        hr=hr+1;
//     }

//    if(hr==23 && min==59 && sec==59){
//     hr=0;
//     min=0;
//     sec=0;
//    }
//    console.log(hr," : " , min , " : " , sec)
//    sec=sec+1
// },1000)


let sec = 0;
let min = 0;
let hr = 0;

setInterval(() => {
  console.log(hr, ":", min, ":", sec); // Time ko pehle print karte hain

  sec = sec + 1; // Seconds increment karte hain

  if (sec == 60) {
    min = min + 1; // Minutes increment karo
    sec = 0;       // Seconds reset karo
  }
  
  if (min == 60) {
    hr = hr + 1;   // Hours increment karo
    min = 0;       // Minutes reset karo
  }
  
  if (hr == 24) {  // Agar 24 ghante ho gaye, to time reset karo
    hr = 0;
    min = 0;
    sec = 0;
  }
}, 1000);
