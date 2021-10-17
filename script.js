// console.log('Can you read me?')

var count = 1;
var countElement = document.querySelector('#count')
// console.log(countElement)

function add1() {
    count++;
    // console.log(count);
    countElement.innerText = 'The count is ' + count;
}
function less1() {
    count--;
    // console.log(count);
    countElement.innerText = 'The count is ' + count;
}

// Cat vs Dog

var animalImage = document.querySelector('#cat_animal');
// console.log(animalImage);
function pickCat(element) {
    // console.log('Here is a Cat');
    animalImage.src = "images/Cat.png";
    element.style.backgroundColor = 'Grey';
    // console.log(element.style)
    element.remove();
}
function pickDog() {
    // console.log('Here is a Dog');
    animalImage.src = "images/Dog.png";
}

function setActive(element) {
    element.style.backgroundColor = "#222222";
    element.style.color = "#ffffff";
}

function swith(element) {
    element.style.backgroundColor = "#222222";
    element.style.color = "#ffffff";
}

function changeTo(element) {
    if(element.classList.includes('dark-mode')) {
        element.innerText = 'Set to light mode';
        element.classList.remove('dark-mode');
    } 
    else {
        element.innerText = 'Set to dark mode';
        element.classList.add('dark-mode');
    }
}


function chooseLunch(element) {
    alert("You picked " + element.value);
}

var nameTag = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameSpan.innerText = element.value;
}




