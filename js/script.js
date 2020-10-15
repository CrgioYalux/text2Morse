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
    "z":"--.."
  }

document.getElementById("input").addEventListener("keyup",()=>{
  let texto = document.getElementById("input").value;
  document.getElementById("morse").innerHTML = text2Morse(texto,abcMorse);

})

const text2Morse = (text,morse) => {
  const lowered = text.toLowerCase();
  const splitted = lowered.split('');
  const textSize = splitted.length;
  var textInMorse = "";

  for(let i=0; i<textSize; i++){
    for(var key in morse){
      if(splitted[i]==key){
        textInMorse += morse[key];
      }
      else if(splitted[i]==" "){
        textInMorse += " ";
      }
    }
  }
  // console.log(textInMorse);
  return textInMorse;
}

const drawMorse = (char,where) => {
  var html = "";
  if(char == "."){
    html += '<div class="dot"></div>';
  }
  else if(char == "-"){
    html += '<div class="dash"></div>';
  }
  where.innerHTML = html;
}


// for(var key in abcMORSE) {
//   var value = abcMORSE[key];
  // console.log(value)
  // console.log(key)
 
// }

