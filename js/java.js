let togglenavstatus = false;

let togglenav = function( ){
    let getToggle = document.querySelector(".toggle-nav");
    let getToggleul = document.querySelector(".ul-toggle")

if (togglenavstatus === false){
getToggleul.style.visibility = "visible"


togglenavstatus = true ;
}



else if  (togglenavstatus === true){
    getToggleul.style.visibility = "hidden"
    
    
    togglenavstatus = false;
}
    
}