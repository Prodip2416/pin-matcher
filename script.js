function hideStatus() { // Status hide when document load
    document.getElementById("wrongStatus").style.display = 'none';
    document.getElementById("successStatus").style.display = 'none';
}

window.onload = hideStatus;

document.getElementById("generate-button").addEventListener('click', function(){
    generateRandomNumber();
});

function generateRandomNumber(){// Generate Random number method/ Function
    const randomValue = document.getElementById("random-value");
    var random =  Math.floor(Math.random() * 9999);

    if(random.toString().length === 4){
        randomValue.value = random;
        randomValue.style.color = 'white';
        randomValue.style.textAlign = 'center';
    }else{
        //console.log('---------------->>>>>>>>' + random)
        generateRandomNumber();
    }
}