const colorChangeButton = document.getElementById('color-button');
const colorSection = document.getElementById('color-section');
var colorInfoHash = document.getElementById('color-info-hash');
var navLinkOne = document.getElementById('nav-item-link-one');
var navLinkTwo = document.getElementById('nav-item-link-two');
var options = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "a", "b", "c", "d", "e", "f"];

function getRandomArrayElement(array){
    var min = 0;
    var max = (array.length - 1);
    var randomNumber = Math.floor(Math.random() * (max - min));
    return array[randomNumber];
}

function colorChange() {
    var number;
    var colorString = "";
    var hashNumber = "#";

    for (var i = 0; i < 6; i++) {
        // Use the below commented code if you only want numbers - do not need the getRandomArrayElement function with this. Also don't need the options array.
        /*var number = Math.floor(Math.random() * 8) + 1;*/
        var number = getRandomArrayElement(options);
        colorString = colorString.concat(number);
    }

    hashNumber = hashNumber.concat(colorString);
    colorInfoHash.innerHTML = hashNumber;
    colorSection.style.backgroundColor = hashNumber;
   
    navLinkOne.addEventListener('mouseover', function() {
        navLinkOne.style.color = hashNumber;
    });

    navLinkOne.addEventListener('mouseout', function() {
        navLinkOne.style.color = "#000000";
    });
    
    navLinkTwo.addEventListener('mouseover', function() {
        navLinkTwo.style.color = hashNumber;
    });

    navLinkTwo.addEventListener('mouseout', function() {
        navLinkTwo.style.color = "#000000";
    });
    
}

colorChangeButton.addEventListener('click', colorChange);