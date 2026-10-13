// gets the filter from the gallery page

const clearFilter = document.getElementById("clear-filter");
const tagFilter = document.getElementById("tag-filter");
const showingText = document.getElementById("showing-text");

const catCards = document.querySelectorAll(".cat-card-link");


// gets all tags from the cat cards

if (tagFilter && catCards.length > 0) {

    const allTags = [];


    catCards.forEach(function(card) {

        const tags = card.dataset.tags
            .split(",")
            .map(function(tag) {

                return tag.trim();

            })
            .filter(function(tag) {

                return tag !== "";

            });


        tags.forEach(function(tag) {

            if (!allTags.includes(tag)) {

                allTags.push(tag);

            }

        });

    });


    // sorts tags alphabetically

    allTags.sort();


    // adds each tag to the dropdown

    allTags.forEach(function(tag) {

        const option = document.createElement("option");

        option.value = tag.toLowerCase();

        option.textContent = tag;

        tagFilter.appendChild(option);

    });

}



// filters the cats when a tag is selected

if (tagFilter) {

    tagFilter.addEventListener("change", function() {

        const selectedTag = tagFilter.value.toLowerCase();

        let visibleCats = 0;


        catCards.forEach(function(card) {

            const tags = card.dataset.tags
                .toLowerCase()
                .split(",")
                .map(function(tag) {

                    return tag.trim();

                });


            if (
                selectedTag === "" ||
                tags.includes(selectedTag)
            ) {

                card.style.display = "";

                visibleCats++;

            } else {

                card.style.display = "none";

            }

        });


        // updates showing cats text

        if (showingText) {

            showingText.textContent =
                "Showing " + visibleCats + " cats";

        }

    });

}



// clears the selected filter

if (clearFilter && tagFilter) {

    clearFilter.addEventListener("click", function(event) {

        // stops the link from refreshing the page
        event.preventDefault();

        tagFilter.value = "";


        catCards.forEach(function(card) {

            card.style.display = "";

        });


        if (showingText) {

            showingText.textContent =
                "Showing " + catCards.length + " cats";

        }

    });

}



// gets the text settings from add text page

const imageText = document.getElementById("image-text");
const textSize = document.getElementById("text-size");
const textColor = document.getElementById("text-color");

const previewText = document.getElementById("preview-text");
const colorNumber = document.getElementById("color-number");


// changes the text shown on the image

if (imageText && previewText) {

    imageText.addEventListener("input", function() {

        previewText.textContent =
            imageText.value.toUpperCase();

    });

}


// changes the text size

if (textSize && previewText) {

    textSize.addEventListener("input", function() {

        previewText.style.fontSize =
            textSize.value + "px";

    });

}


// changes the text colour

if (textColor && previewText && colorNumber) {

    textColor.addEventListener("input", function() {

        previewText.style.color =
            textColor.value;

        colorNumber.textContent =
            textColor.value;

    });

}