
// define how many elemnet have class name 'menu-item-has-children'
clannNameNumber = document.getElementsByClassName("menu-item-has-children").length;
// add i down  to every  ClassName menu-item-has-children
for (let i = 0; i < clannNameNumber; i++) {
  document.getElementsByClassName("menu-item-has-children")[i].innerHTML +=
    "<i>&#xfe40;</i>";
}

let menu = document.getElementsByClassName("menu")[0];
let mainMenuId = document.getElementsByClassName("menu")[0].id;
let divClass = mainMenuId + "-container";
let divClassSelect= document.getElementsByClassName(divClass);

// add span close botton and Menu Sympol and MobileHome to div menu
divClassSelect[0].innerHTML+= "<span id ='closeBtn'>X</span>";
divClassSelect[0].innerHTML+= "<span id='menuSympol'>&#9776;</span>";
divClassSelect[0].innerHTML+= "<span id='MobileHome'>Home Page</span>";



let menuSympol = document.getElementById("menuSympol");
let MobileHome = document.getElementById("MobileHome");
let closeBtn = document.getElementById("closeBtn");
let MenuIDTag= document.getElementById(mainMenuId);

// function  close the menu wehn click bottom closeBtn 
closeBtn.onclick = function () {
    MenuIDTag.style.right = "-100%";
  menuSympol.style.display = "block";
  MobileHome.style.display = "block";
  closeBtn.style.display = "none";
};

// function change css menu and all bottom when change the window size
function myFunction(x) {
    if (x.matches) { // If media query matches     
        MenuIDTag.style.right = "-300";
        MenuIDTag.style.display = "none";
        
    } else { 
        MenuIDTag.style.right = "0";
        MenuIDTag.style.width = "100%";
        MenuIDTag.style.display = "flex";
    }
  }
  
  var x = window.matchMedia("(max-width: 1025px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction);

  // function click menu 
  menuSympol.onclick = function () {
    MenuIDTag.style.display = "block";
    MenuIDTag.style.right = "0";
  menu.style.color="black"
  menuSympol.style.display = "none";
  MobileHome.style.display = "none"; 

  closeBtn.style.display = "block";

};

// add class ClassContainer to main Div of the menu
var element = document.getElementsByClassName(divClass)[0];
element.classList.add("ClassContainer");