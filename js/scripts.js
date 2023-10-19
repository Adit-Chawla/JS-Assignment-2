// constants for query selector
const customColorBtn = document.querySelector('.custColor');
const randomColorBtn = document.querySelector('.randColor');
const selectList = document.getElementById('imageSelect');
const studentIdP = document.getElementById('myStudentId');
const customNumberInput = document.getElementById('customNumber');
const imageElement = document.getElementById('images');

const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];


// function to change bg color from user input and add student id
function changeCustomColor() {
    const value = parseInt(customNumberInput.value);

    if (isNaN(value)) return;

    studentIdP.innerText = "Student ID: 200531948";

    if (value < 0 || value > 100) {
        document.body.style.backgroundColor = "red";
    } else if (value <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (value <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (value <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (value <= 80) {
        document.body.style.backgroundColor = "purple";
    } else if (value <= 100) {
        document.body.style.backgroundColor = "yellow";
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomValue = Math.floor(Math.random() * 101);
    customNumberInput.value = randomValue; // Optional: to show the random number in input
    changeCustomColor();
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    while (selectList.firstChild) {
        selectList.removeChild(selectList.firstChild);
    }
    const defaultOption = document.createElement('option');
    defaultOption.innerText = "Please choose...";
    defaultOption.value = "";
    selectList.appendChild(defaultOption);

    // Populate options from the images array
    images.forEach(img => {
        const option = document.createElement('option');
        option.innerText = img.split('.')[0];  // Assuming image names can be used as option text
        option.value = img;
        selectList.appendChild(option);
    });
}

// function to change image
function changeImage() {
    const selectedValue = selectList.value;
    if (selectedValue) {
        imageElement.src = `./img/${selectedValue}`;  // Assuming your images folder is named 'img'
    } else {
        imageElement.src = "";  // No image to show
    }
}

// event listeners for on click event of buttons and select

// event listeners for on change event of select
customColorBtn.addEventListener('click', changeCustomColor);
randomColorBtn.addEventListener('click', changeRandomColor);
selectList.addEventListener('click', addList);
selectList.addEventListener('change', changeImage);
