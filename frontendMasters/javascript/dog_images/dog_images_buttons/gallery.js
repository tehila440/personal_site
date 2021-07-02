//the document.querySelector is selecting the class defined in the CSS.  the event listener is created on the selected class to perform a task.  it is defining how the buttons work.

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImgs = document.querySelectorAll('.gallery-img');
console.log('gal img',galleryImgs)
// setting index to 0 as we scroll through the images.  it removes the current image, -1 from index and selects the next image, unless the current img is index 0 then it disables the prev button. the nextBtn performs similarly
let currentlySelected = 0;

prevBtn.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.remove('active');
    currentlySelected--; // currentlySelected = currentlySelected - 1
    galleryImgs[currentlySelected].classList.add('active');
    nextBtn.disabled = false;
    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.remove('active');
    currentlySelected++; // currentlySelected = currentlySelected + 1
    galleryImgs[currentlySelected].classList.add('active');
    prevBtn.disabled = false;

    if (galleryImgs.length === currentlySelected + 1) {
        nextBtn.disabled = true;
    }
});