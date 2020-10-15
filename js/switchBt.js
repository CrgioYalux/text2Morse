const btSwitch = document.getElementById("btSwitch");
const btSwitchInt = document.getElementById("btSwitchInt");

var init = 1;
// initial state = 1
// css applied state = 0

const applyCss = (state) => {
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
    state = !state;
    return state;
}

btSwitch.addEventListener("click",()=>{
    init = applyCss(init);
    // console.log(init);
})


