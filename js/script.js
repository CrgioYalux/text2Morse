  const abcMorse = {
    "a":".-",
    "b":"-...",
    "c":"-.-.",
    "d":"-..",
    "e":".",
    "f":"..-.",
    "g":"--.",
    "h":"....",
    "i":"..",
    "j":".---",
    "k":"-.-",
    "l":".-..",
    "m":"--",
    "n":"-.",
    "o":"---",
    "p":".--.",
    "q":"--.-",
    "r":".-.",
    "s":"...",
    "t":"-",
    "u":"..-",
    "v":"...-",
    "w":".--",
    "x":"-..-",
    "y":"-.--",
    "z":"--..",
    "0":"-----",
    "1":".----",
    "2":"..---",
    "3":"...--",
    "4":"....-",
    "5":".....",
    "6":"-....",
    "7":"--...",
    "8":"---..",
    "9":"----.",
    ".":".-.-.-",
    ",":"-.-.--",
    "?":"..--..",
    "!":"--..--"
  }
var state = 1;

const btSwMode = document.getElementById("btSwitch");
btSwMode.addEventListener("click",()=>{
  if(state){
    state = !state;
    returnCode(state);
  }
  else{
    state = !state;
    returnCode(state);
  }
})  

const returnCode = (state) => {
  let text = document.getElementById("input").value;
  let morseField = document.getElementById("morse");

  if(state){
    document.getElementById("morse").innerHTML = text2Morse(text,abcMorse);
  }
  else{
    drawMorse(text2Morse(text,abcMorse),morseField);
    // console.log(text2Morse(text,abcMorse));
  }
  return state;
}

document.getElementById("input").addEventListener("keyup",()=>{
  returnCode(state);
})

const text2Morse = (text,morse) => {
  const lowered = text.toLowerCase();
  const splitted = lowered.split('');
  const textSize = splitted.length;
  var textInMorse = "";

  for(let i=0; i<textSize; i++){
    for(var key in morse){
      if(splitted[i]==key){
        textInMorse += morse[key]+ " ";
      }
      else if(splitted[i]==" "){
        textInMorse += "";
      }
    }
  }
  return textInMorse;
}
const drawMorse = (string,where) => {
  var html = "";
  for(let i=0; i<string.length; i++){
    if(string[i] == "."){
        html += '<div class="dot"></div>';
    }
    else if(string[i] == "-"){
        html += '<div class="dash"></div>';
    }
    else if(string[i] == " "){
      html += '<div class="btChars"></div>';
    }
  }  
  where.innerHTML = html;
}

// for(var key in abcMORSE) {
//   var value = abcMORSE[key];
  // console.log(value)
  // console.log(key)
 
// }

