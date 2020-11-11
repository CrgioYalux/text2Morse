// const btSwitch = document.getElementById("btSwitch");
// const btSwitchInt = document.getElementById("btSwitchInt");
// initial state = 1
// css applied state = 0
var state1;
var state2;

const init = () => {
    state1 = 1;
    state2 = 1;
}

const cssStyle = (state, idBtExt, idBtInt) => {
    let btSwitch = document.getElementById(idBtExt);
    let btSwitchInt = document.getElementById(idBtInt);
    if(state){
        btSwitch.style.background = "#fff";
        btSwitch.style.transition = "1s";
        
        // btSwitch.style.boxSizing = "border-box";
        btSwitch.style.border = "1px solid rgba(0, 0, 0, 0.8)";

        btSwitchInt.style.background = "#000";
        btSwitchInt.style.transition = "1s";
        btSwitchInt.style.width = "85%";
    }
    else {
        btSwitch.style.background = "#000";
        btSwitch.style.transition = "1s";
        btSwitch.style.border = "none";
        
        // btSwitch.style.boxSizing = "border-box";
        btSwitch.style.border = "1px solid rgba(0, 0, 0, 0.8)";

        btSwitchInt.style.background = "#fff";
        btSwitchInt.style.transition = "1s";
        btSwitchInt.style.width = "30%";
    }
}

const blockBT = (state) => {
    let block = document.getElementById("block");
    if(state){
        block.style.backgroundColor = "#FF0000";
        block.style.zIndex = 1;
    }
    else{
        block.style.backgroundColor = "#FFFFFF";
        block.style.zIndex = -1;
    }
}
const changeTitle = (state) => {
    let titlePt1 = document.getElementById("titlePt1");
    let titlePt2 = document.getElementById("titlePt2");

    if(state){
        titlePt1.innerHTML = "morse2";
        titlePt2.innerHTML = "Text";
    }
    else{
        titlePt1.innerHTML = "text2";
        titlePt2.innerHTML = "Morse";
    }
}

const applyCss = (idBtExt, idBtInt) => {
    let state;
    if(idBtExt == "btSwitch"){
        state = state1;
        cssStyle(state,idBtExt,idBtInt);
        state1 = !state1;
    }
    else{
        state = state2;
        blockBT(state);
        changeTitle(state);
        cssStyle(state,idBtExt,idBtInt);
        state2 = !state2;
    }
    console.log(state);
}

// btSwitch.addEventListener("click",()=>{
//     init = applyCss(init);
//     // console.log(init);
// })


