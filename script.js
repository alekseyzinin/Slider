const prev = document.getElementsById('btn-prev'),
      next = document.getElementsById('btn-prev'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index  = 0;

const activeSlide = n => {
    console.log(n);
    for(slide of slides) {
       slide.classList.remove('active');
    }
    slide[n].classList.add('active');
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

next.addEventListener('click' , nextSlide);
