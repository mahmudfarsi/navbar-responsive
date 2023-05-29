//btn-bar

const openMenu = document.getElementById("openMenu");
openMenu.addEventListener("click",function(){
  const menuBar = document.getElementById("menuMobile");
  menuBar.classList.toggle("show_menu");
  const bars = document.getElementById("btnBar");
  const xmark = document.getElementById("btnCloseBar");
  if(menuBar.classList[1]==="show_menu"){
    bars.style.display = "none";
    xmark.style.display="block";
  }else{
    bars.style.display = "block";
    xmark.style.display= "none";
  }
})





// search click

const btnSearch = document.getElementById("searchBtn");
btnSearch.addEventListener("click",function(){
  const formBar = document.getElementById("form");
  formBar.classList.add("show_form");
  if(formBar.classList[1]==="show_form"){
    const menuBar = document.getElementById("menuMobile");
    menuBar.classList.remove("show_menu");
    const xmark = document.getElementById("btnCloseBar");
    xmark.style.display = "none";
    const bars = document.getElementById("btnBar");
    bars.style.display = "block";
  }
});

//close search

const closeSearch = document.getElementById("closeSearch");
closeSearch.addEventListener("click",function(){
  const formBar = document.getElementById("form");
  formBar.classList.remove("show_form");
});


//sticky nav

const nav = document.getElementById("navbar");
const sticky = nav.offsetTop;

window.onscroll = function(){
  if(window.pageYOffset>=sticky){
    nav.classList.add("sticky");
  }else{
    nav.classList.remove("sticky");
  }
};
