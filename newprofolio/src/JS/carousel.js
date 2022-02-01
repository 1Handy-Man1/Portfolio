function Gallery () {
    document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    })

    carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel__nav">
        ${ buttonsHtml.join("") }
    </div>
    `);
    console.log(document.getElementsByClassName(".carousel__item"))
    console.log(buttonsHtml)
    

    const buttons = carousel.querySelectorAll(".carousel__button")
console.log(buttons) 
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            // un-select all the items
            items.forEach(item => item.classList.remove("carousel__item--selected"));
            buttons.forEach(button => button.classList.remove("carousel__button--selected"));

            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected")
        })
    })
})
}

setTimeout(Gallery(), 5000);



// All code below doesn't work but would keep for future works

// console.log('js access confirmed')
// const track = document.querySelector('.carousel__track')
// console.log(track)
// const slides = Array.from(track.children)
// const nextButton = document.querySelector('.carousel__button--right');
// const prevButton = document.querySelector('.carousel__button--left');
// const dotsNav = document.querySelector('.carousel__nav');
// const dots = Array.from(dotsNav.children);



// const slideWidth = slides[0].getBoundingClientRect().width;
// // console.log(slideWidth) to check the width

// // arrange the slides next to one another
// // slides[0].style.left = slideWidth * 0 + 'px';
// // slides[1].style.left = slideWidth * 1 + 'px';
// // slides[2].style.left = slideWidth * 2 + 'px';
// // slides[3].style.left = slideWidth * 3 + 'px';


// const setSlidePosition = (slide, index) => {
//     slide.style.left = slideWidth * index + 'px'
// };
// slides.forEach(setSlidePosition);

// const moveToSlide = (track, currentSlide, targetSlide) => {
//     track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//     currentSlide.classList.remove('current-slide');
//     targetSlide.classList.add('current-slide');
// }

// const updatesDots = (currentDot, targetDot) => {
//     currentDot.classList.remove('current-slide');
//     targetDot.classList.add('current-slide');
// }

// const hideShowArrow = (slides, prevButton, nextButton, targetIndex) => {
//     if(targetIndex === 0) {
//         prevButton.classList.add('is-hidden');
//         nextButton.classList.remove('is-hidden');
//     } else if (targetIndex === slides.length - 1) {
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.add('is-hidden');
//     } else {
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.remove('is-hidden');
//     }
// }

// // When I click left, move slides to the left
// prevButton.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide');
//     const prevSlide = currentSlide.previousElementSibling
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const prevDot = currentDot.previousElementSibling;
//     const prevIndex = slides.findIndex(slide => slide === prevSlide);

//     moveToSlide(track, currentSlide, prevSlide)
//     updatesDots(currentDot, prevDot);
//     hideShowArrow(slides, prevButton, nextButton, prevIndex);
// })



// // When I click right, move slides to the right
// nextButton.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide');
//     const nextSlide = currentSlide.nextElementSibling
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const nextDot = currentDot.nextElementSibling;
//     const nextIndex = slides.findIndex(slide => slide === nextSlide);

//     // move to the next slide
//     moveToSlide(track, currentSlide, nextSlide); 
//     updatesDots(currentDot, nextDot);
//     hideShowArrow(slides, prevButton, nextButton, nextIndex);
// })

// // When I click the nav indicator, move to that slide

// dotsNav.addEventListener('click', e => {
//     // What indicator was clicked on?
//     const targetDot = e.target.closest('button');

//     if (!targetDot) return;

//     const currentSlide = track.querySelector('.current-slide');
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const targetIndex = dots.findIndex(dot => dot === targetDot)
//     const targetSlide = slides[targetIndex];

//     moveToSlide(track, currentSlide, targetSlide); 
//     updatesDots(currentDot, targetDot);
//     hideShowArrow(slides, prevButton, nextButton, targetIndex);
// })