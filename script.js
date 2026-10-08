// to getting the screen

const galleryScreen = document.getElementById("gallery-screen");
const detailsScreen = document.getElementById("details-screen");
const textScreen = document.getElementById("text-screen");

// getting the buttons

const catCards = document.querySelectorAll(".cat-card");

const closeDetails = document.getElementById("close-details");

const addTextButton = document.getElementById("add-text-button");

const closeText = document.getElementById("close-text");


// opens cat details when a cat is clicked

catCards.forEach(function(card) {

    card.addEventListener("click", function() {

        galleryScreen.classList.add("hidden");

        detailsScreen.classList.remove("hidden");

    });

});


// closes cat details and goes back to gallery

closeDetails.addEventListener("click", function() {

    detailsScreen.classList.add("hidden");

    galleryScreen.classList.remove("hidden");

});


// opens the add text page

addTextButton.addEventListener("click", function() {

    detailsScreen.classList.add("hidden");

    textScreen.classList.remove("hidden");

});


// goes back from add text to cat details

closeText.addEventListener("click", function() {

    textScreen.classList.add("hidden");

    detailsScreen.classList.remove("hidden");

});


// text settings

const imageText = document.getElementById("image-text");

const textSize = document.getElementById("text-size");

const textColor = document.getElementById("text-color");

const previewText = document.getElementById("preview-text");

const colorNumber = document.getElementById("color-number");


// changes the text on the image

imageText.addEventListener("input", function() {

    previewText.textContent = imageText.value.toUpperCase();

});


// changes the size of the text

textSize.addEventListener("input", function() {

    previewText.style.fontSize = textSize.value + "px";

});


// changes the text colour

textColor.addEventListener("input", function() {

    previewText.style.color = textColor.value;

    colorNumber.textContent = textColor.value;

});



// clear filter button

const clearFilter = document.getElementById("clear-filter");

const tagFilter = document.getElementById("tag-filter");


clearFilter.addEventListener("click", function(event) {

    // stops the link from refreshing the page
    event.preventDefault();

    tagFilter.value = "";

});