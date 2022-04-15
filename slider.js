// Slider

const image = document.querySelector('.slider');


image.addEventListener("click", () => {

// document.getElementById("modal").classList.add('active');
document.getElementById("modal").classList.remove('hidden')

// function cloneImages(){
//   const images = document.getElementById("toAddInModal");
//   const clone = images.cloneNode(true);
//   const modal = document.getElementById("modal");
//   modal.appendChild(clone);


// }
// cloneImages();

  $('.slider-container').slick({
    infinite: true,
    speed: 500,
    cssEase: 'linear'
  })

});


const modalWindow = document.querySelector('.slider-big-container');
// Close modal wherever the user clicks
modalWindow.addEventListener("click", (e)=>{

  if (e.target == modalWindow){

    document.getElementById("modal").classList.add('hidden')
  }

});






















