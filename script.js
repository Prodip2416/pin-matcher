const wrongStatus = document.getElementById("wrongStatus"); // Wrong Status
const successStatus = document.getElementById("successStatus"); // success Status
const generateButton = document.getElementById("generate-button"); //Random number  generate Button
const randomInputField = document.getElementById("random-value"); // Random Value Input Field
const numberButtons = document.querySelectorAll('[data-number]'); //  All the number button value
const userInputField = document.getElementById("userInputValue"); // Find user input field
const submitButton = document.getElementById("submitButton"); // Submit Button
const clearAllUserInput = document.getElementById("clearAllUserInput"); // clear All User Input value
const backspaceButton = document.getElementById("backspaceButton");// backspace Button
const btnClickCount = document.getElementById("btnClickCount"); // Span value get for click count
var submitCount = 0;

function hideStatus() { // Status hide when document load
    wrongStatus.style.display = 'none';
    successStatus.style.display = 'none';
    randomInputField.style.backgroundColor = '#3D4153';
}

window.onload = hideStatus;

generateButton.addEventListener('click', function () {
    generateRandomNumber(); // Update the value when click the generate pin button
});

function generateRandomNumber() {// Generate Random number method/ Function   
    var random = Math.floor(Math.random() * 9999);
    if (random.toString().length === 4) {
        randomInputField.value = random;
        changeInputFieldColorBgColorTextAline(randomInputField);
    }
    else {
        //console.log('---------------->>>>>>>>' + random)
        generateRandomNumber();//sometime Math.floor(Math.random() * 9999) generate 3 digit pin thats why call again
    }
}

for (var i = 0; i < numberButtons.length; i++) {//loop thru all of button than get and set value to user input field
    numberButtons[i].addEventListener('click', function () {
        userInputField.value = userInputField.value + this.id;
        changeInputFieldColorBgColorTextAline(userInputField);
    });
}

function changeInputFieldColorBgColorTextAline(changesID) {
    changesID.style.color = 'white';
    changesID.style.backgroundColor = '#3D4153';
    changesID.style.textAlign = 'center';
}

submitButton.addEventListener('click', function () {// Submit value and random value check
    if (parseInt(randomInputField.value) == parseInt(userInputField.value)) {
        submitCount = 0;
        successStatus.style.display = 'inline';
        wrongStatus.style.display = 'none';
    } else {
        submitCount++;
        wrongStatus.style.display = 'inline';
        successStatus.style.display = 'none';
    }

    checkTotalSubmit(submitCount);
});

clearAllUserInput.addEventListener('click', function () {// clear the user input field
    userInputField.value = "";
});

backspaceButton.addEventListener('click', function () { // last item remove from the user input field
    if (userInputField.value.length > 0) {
        userInputField.value = userInputField.value.slice(0, -1);
    }
});

function checkTotalSubmit(submitCount){ // Span value change how try are left?
    if(submitCount == 1){
        btnClickCount.innerText = 2;
    }else if(submitCount == 2){
        btnClickCount.innerText = 1;
    }else if(submitCount == 3){
        btnClickCount.innerText = 0;
        submitButton.disabled = true;
        submitButton.style.backgroundColor = 'gray';
    }
}
