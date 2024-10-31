// Text animation starts

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
    entry.target.classList.add('reveal');
    } else {
    entry.target.classList.remove('reveal');
    }
     });

    });
    const hiddenElements = document.querySelectorAll('.hide');
    hiddenElements.forEach((el) => observer.observe(el));
    
// Text animation ends
// single product image gallery 
function imageChange(smallimage){
  var fullImg=document.getElementById("imageBox");
  fullImg.src=smallimage.src;

}
// single product image gallery 