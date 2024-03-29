// if it is friday then display the pancake message on the page, otherwise hide it
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  let date = new Date()
  let day = date.getDay()
  let pancake = document.getElementById("friday")
  if (day != 5) {
    pancake.className += " secret"
  }

  const imagesToLoad = document.querySelectorAll('img[data-src]');  
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));    
  image.onload = () => {
    image.removeAttribute('data-src'); 
  };
};
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"  
}


if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {  
        loadImages(item.target);  
        observer.unobserve(item.target);  
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((img) => { 
    observer.observe(img); 
  });
} else {
  imagesToLoad.forEach((img) => {  
    loadImages(img);
  });
}