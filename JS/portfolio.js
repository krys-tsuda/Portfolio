//Open and close popform
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//Displays first image in slideshow on page load
var slideIndex = 1;
showSlides(slideIndex);

//Next and previous buttons slide change
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Changes slides when dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    //stores mySlides elements in variable array "slides"
    var slides = document.getElementsByClassName("mySlides");
    //stores dot elements in variable array "dots"
    var dots = document.getElementsByClassName("dot");
    //if value given to n is greater than amount of slides inex is 1
    if (n > slides.length) {slideIndex = 1};
    //if value given to n is less than 1 slide index is slides length
    if (n < 1) {slideIndex = slides.length};
    //loop goes through array and sets slide display to none
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //loop goes through array 'dots' and removes 'active' styling 
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //displays the image in the slideshow
    slides[slideIndex - 1].style.display = "block";
    //applies active styling to dot associated with image
    dots[slideIndex - 1].className += " active";
}

//creates the contact form when user clicks off item
//add evenetlistener for 'clicks'
document.addEventListener("click", function(event) {
    //if click happens on cancel button or anywhere not contact form
    //or elements with contact class
    if (event.target.matches(".cancel") || !event.target.closest(".popForm") && !event.target.closest(".popButton") && !event.target.closest("#contact")) {
        closeForm()
    }
}, false )