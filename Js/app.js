// đổi slide
function changeSlide() {
    var changeLeft = document.querySelector('.slider-change-btn-left');
    var changeRight = document.querySelector('.slider-change-btn-right');
    var slide = document.querySelector('.slider-2');
    var headingLine1 = document.querySelector('.slider-content-box__heading-line1');
    var headingLine2 = document.querySelector('.slider-content-box__heading-line2');
    var contentBox = document.querySelector('.slider-content-box__body');
    changeLeft.addEventListener("click", function(){
        // change back-ground
        slide.classList.toggle('slider');
        // re-animation for slide
        slide.classList.remove('appear-animation');
        void slide.offsetWidth;
        slide.classList.add('appear-animation');
        // re-animation for heading
        headingLine1.classList.remove('fade-in-left');
        void headingLine1.offsetWidth;
        headingLine1.classList.add('fade-in-left');

        headingLine2.classList.remove('fade-in-right');
        void headingLine1.offsetWidth;
        headingLine2.classList.add('fade-in-right');
        // re-animation for content box
        contentBox.classList.remove('fade-in-up');
        void headingLine1.offsetWidth;
        contentBox.classList.add('fade-in-up');
    })
    changeRight.addEventListener("click", function(){
        // change back-ground
        slide.classList.toggle('slider');
        // re-animation for slide
        slide.classList.remove('appear-animation');
        void slide.offsetWidth;
        slide.classList.add('appear-animation');
        // re-animation for heading
        headingLine1.classList.remove('fade-in-left');
        void headingLine1.offsetWidth;
        headingLine1.classList.add('fade-in-left');

        headingLine2.classList.remove('fade-in-right');
        void headingLine1.offsetWidth;
        headingLine2.classList.add('fade-in-right');
        // re-animation for content box
        contentBox.classList.remove('fade-in-up');
        void headingLine1.offsetWidth;
        contentBox.classList.add('fade-in-up');
    })
   
}

changeSlide();