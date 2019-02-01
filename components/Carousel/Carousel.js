class Carousel {
    constructor(carouselElement) {
    this.carouselElement = carouselElement;
}
}




/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!

    Set current image as [0] in img array .style.display = "block"
    Define a function for left-button & right-button 
*/



document.querySelector("img").style.display = "block";
// ocument.querySelector("img").style.display = "none";

// left = img[i].style.display = "none"; && img[i - 1].style.display = "block";
// right = img[i].style.display = "none"; && img[i + 1].style.display = "block";

let carousel = document.querySelectorAll(".carousel");