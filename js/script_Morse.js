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
var stateMorseDisplaying = 1;
var stateSwitchToText = 0;

const btMorseDisplaying = document.getElementById("btSwitch");
btMorseDisplaying.addEventListener("click",()=>{
  if(stateSwitchToText == 0){
    stateMorseDisplaying = !stateMorseDisplaying;
    returnMorse(stateMorseDisplaying);
  }
})  

const btSwitchToText = document.getElementById("btSwitch2");
btSwitchToText.addEventListener("click",()=>{
  document.getElementById("input").value = "";
  document.getElementById("output").innerHTML = "";
  stateSwitchToText = !stateSwitchToText;
  returnText(stateSwitchToText);
})

const returnText = (state) => {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");

  if(state){
    document.getElementById("output").innerHTML = morse2Text(input,abcMorse);
  }
  return state;
}

const returnMorse = (state) => {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
    if(state){
      document.getElementById("output").innerHTML = text2Morse(input,abcMorse);
    }
    else{
      drawMorse(text2Morse(input,abcMorse),output);
    }
    return state;
}

document.getElementById("input").addEventListener("keyup",()=>{
  returnMorse(stateMorseDisplaying);
})
document.getElementById("input").addEventListener("keyup",()=>{
  returnText(stateSwitchToText);
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

const morse2Text = (code,morse) => {
  const splitted = code.split(' ');
  console.log(splitted);
  const codeSize = splitted.length;
  let text = "";

  for(let i=0; i<codeSize; i++){
    for(var key in morse){
      if(splitted[i]==morse[key]){
        text += key + "";
      }
      else if(splitted[i]==""){
        text += " ";
      }
    }
  }
  return text;
} 

