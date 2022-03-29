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
})

