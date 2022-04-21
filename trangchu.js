let slideIndex = 1;
showSides(slideIndex);

function plusSlide(n){
    slideIndex(slideIndex += n);
}

function currentSlide(n){
    showSides(slideIndex = n);
}

function showSides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dost = document.getElementsByClassName("dot");
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++){
        dost[i].className = dost[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dost[slideIndex - 1].className += " active";
}