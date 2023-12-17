// classList - shows/gets all classes
const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
navToggle.addEventListener('click', function(){
    console.log(links.classList) //  <ul class="links">-->DOMtokenList("links", value: "links")
    console.log(links.classList.contains("random")) // false
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
    }
    else{
        links.classList.add('show-links')
    }
})
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
