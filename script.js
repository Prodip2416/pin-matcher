function hideStatus() { // Status hide when document load
    document.getElementById("wrongStatus").style.display = 'none';
    document.getElementById("successStatus").style.display = 'none';
    document.getElementById("random-value").style.backgroundColor = '#3D4153';
}

window.onload = hideStatus;

document.getElementById("generate-button").addEventListener('click', function () {
    generateRandomNumber(); // Update the value when click the generate pin button
});

function generateRandomNumber() {// Generate Random number method/ Function
    const randomValue = document.getElementById("random-value");
    var random = Math.floor(Math.random() * 9999);

    if (random.toString().length === 4) {
        randomValue.value = random;
        randomValue.style.color = 'white';
        randomValue.style.backgroundColor = '#3D4153';
        randomValue.style.textAlign = 'center';
    } else {
        //console.log('---------------->>>>>>>>' + random)
        generateRandomNumber();
    }
}

const numberButtons = document.querySelectorAll('[data-number]');// get all the number button value
var userInputValue = document.getElementById("userInputValue"); // find user input field

for (var i = 0; i < numberButtons.length; i++) {//loop thru all of button than get and set value to user input field
    numberButtons[i].addEventListener('click', function () {
        userInputValue.value = userInputValue.value + this.id;
        userInputValue.style.color = 'white';
        userInputValue.style.backgroundColor = '#3D4153';
        userInputValue.style.textAlign = 'center';
    });
}