const btnTag = document.querySelector(".mybtn");

btnTag.addEventListener("click",()=>{
    console.log("clicked...");
  window.scrollTo({
      top:0,
      behavior:"smooth"
    })
})


window.addEventListener("scroll",()=>{
   btnTag.classList.toggle("active", window.scrollY > 100)
})