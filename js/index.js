// get the references to the html elements:
const navItems = document.querySelectorAll("header nav ul li");
const container = document.querySelector(".container");


let path = "http://localhost/rich-media/week-12/hot-topic/content/home.html";

function handleClick(ev) {
    
    //PREVENT LINK FROM REDIRECTING
    ev.preventDefault();
    
    path = ev.target.href;
    
    handleAjax(path);
}

function handleAjax(urlValue) {
    
    fetch(urlValue)
        .then(function(rsp) {
            return rsp.text ();
    })
        .then(function(data){
        container.innerHTML = data; 
        
    })
}

handleAjax(path);

navItems[0].addEventListener("click", handleClick);
navItems[1].addEventListener("click", handleClick);








