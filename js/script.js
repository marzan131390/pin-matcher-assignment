//Generating 4 Digit Random Numbers For OTP....
function getPin() {
    let randomNum = Math.random()*10000;
    randomNum = Math.round(randomNum);
    if(randomNum >= 1000 && randomNum <=9999) {
        return randomNum;
    }
    else {
        return getPin();
    }   
};
//Display OTP into Input Field When Btn is Clicked...
let generateBtn = document.querySelector(".generate-btn");
generateBtn.addEventListener("click", function() {
    let inputField = document.getElementById("left-input");
    inputField.value = getPin();
});

//Working with key pad....
let rightInput = document.getElementById("right-input");
let keyBody = document.getElementById("key-body");
keyBody.addEventListener("click", function(event) {
    let outputValue = event.target.innerText;
    //Clearing All Input Field if C is clicked..
    if(isNaN(outputValue)) {
        if(outputValue == "C") {
            rightInput.value = " ";
        }
    } 
    //Display Number Value Only...
    else {
        let previousValue = rightInput.value;
        let newValue = previousValue + outputValue;
        rightInput.value = newValue;
    }
});
//Every Single Value will be removed if backspace is clicked..
let backSpace = document.getElementById("backspace");
backSpace.addEventListener("click", function() {
    let outputValue = rightInput.value;
    let newValue = outputValue.slice(0, -1);
    rightInput.value = newValue;
});




