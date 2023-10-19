// Constants for DOM elements
const customColorBtn = document.querySelector('.custColor');
const randomColorBtn = document.querySelector('.randColor');
const selectList = document.getElementById('imageSelect');
const studentIdP = document.getElementById('myStudentId');
const customNumberInput = document.getElementById('customNumber');
const imageElement = document.getElementById('images');

// Array of image filenames
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

// Function to change background color based on user input and display student ID
function changeCustomColor() {
    const value = parseInt(customNumberInput.value);

    // Check if the entered value is a number
    if (isNaN(value)) return;

    // Display student ID
    studentIdP.innerText = "Student ID: 200531948";

    // Change the background color based on the value range
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

// Function to generate a random number and then change the background color
function changeRandomColor() {
    const randomValue = Math.floor(Math.random() * 101);
    customNumberInput.value = randomValue; // Display the generated random number in the input field
    changeCustomColor();
}

// Function to populate the select list with options from the images array
function addList() {
    // Remove existing options from the select list
    while (selectList.firstChild) {
        selectList.removeChild(selectList.firstChild);
    }
    const defaultOption = document.createElement('option');
    defaultOption.innerText = "Please choose...";
    defaultOption.value = "";
    selectList.appendChild(defaultOption);

    // Add options from the images array
    images.forEach(img => {
        const option = document.createElement('option');
        option.innerText = img.split('.')[0];  // Use image filename (without extension) as option text
        option.value = img;
        selectList.appendChild(option);
    });
}

// Function to update the image source based on the selected option
function changeImage() {
    const selectedValue = selectList.value;
    if (selectedValue) {
        imageElement.src = `./img/${selectedValue}`;  // Assuming the images are stored in an 'img' directory
    } else {
        imageElement.src = "";  // No image to display if no selection
    }
}

// Event listeners
customColorBtn.addEventListener('click', changeCustomColor);
randomColorBtn.addEventListener('click', changeRandomColor);
selectList.addEventListener('click', addList);  // Populates the dropdown when clicked
selectList.addEventListener('change', changeImage);  // Changes the displayed image when an option is selected
