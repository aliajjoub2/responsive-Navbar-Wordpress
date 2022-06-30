// document.querySelector('div').insertAdjacentHTML('afterBegin','<p>Second paragraph in the code, but should become first.</p>')

// count tag hwho has ClassName menu-item-has-children
clannNameNumber = document.getElementsByClassName(
  "menu-item-has-children"
).length;
for (let i = 0; i < clannNameNumber; i++) {
  // add i to ClassName menu-item-has-children
  document.getElementsByClassName("menu-item-has-children")[i].innerHTML +=
    "<i>&#xfe40;</i>";
}

let menu = document.getElementsByClassName("menu")[0];

mainMenuId = document.getElementsByClassName("menu")[0].id;
divClass = mainMenuId + "-container";

  /*  menu.innerHTML = "<p id ='closeBtn'>X</p>" + menu.innerHTML;
    menu.innerHTML += "<i id='menuSympol'>&#9776;</i>";
    menu.innerHTML += "<h2 id='MobileHome'>الموقع</h2>"; */

/*   function myFunction() {
    const myMenu = document.getElementById(mainMenuId);
    let MobileHome = "<h2 id='MobileHome'>الموقع</h2>";
    let menuSympol = "<i id='menuSympol'>&#9776;</i>";
    let closeBtn = "<p id ='closeBtn'>X</p>";
    myMenu.insertAdjacentHTML("afterend", MobileHome);
    myMenu.insertAdjacentHTML("afterend", menuSympol);
    myMenu.insertAdjacentHTML("afterend", closeBtn);
   
  };
myFunction(); */

divClassSelect= document.getElementsByClassName(divClass);
divClassSelect[0].innerHTML+= "<span id ='closeBtn'>XXXX</span>";
divClassSelect[0].innerHTML+= "<span id='menuSympol'>&#9776;</span>";
divClassSelect[0].innerHTML+= "<span id='MobileHome'>الموقع</span>";

/* const para = document.createElement("p");
para.innerHTML = "القائمة";

// Append to another element:
document.getElementsByClassName(divClass)[0].appendChild(para); */



// menu.innerHTML += "";

let menuSympol = document.getElementById("menuSympol");
let MobileHome = document.getElementById("MobileHome");
let closeBtn = document.getElementById("closeBtn");
let MenuIDTag= document.getElementById(mainMenuId);

/* let menuItem = document.getElementsByClassName(
  "menu-item-type-post_type"
).length; */



closeBtn.onclick = function () {
    MenuIDTag.style.right = "-100%";
  menuSympol.style.display = "block";
  MobileHome.style.display = "block";

 /*  for (let i = 0; i < menuItem; i++) {
    document.getElementsByClassName("menu-item-type-post_type")[
      i
    ].style.display = "none";
  } */

  closeBtn.style.display = "none";
  /* let w = window.innerWidth;
  if (w > 800) {
    document.getElementsByClassName("menu-item-type-post_type")[
      i
    ].style.display = "flex";
    menu.style.display = "flex";
    menuSympol.style.display = "none";
    MobileHome.style.display = "none";
    closeBtn.style.display = "none";
  } */
};
function myFunction(x) {
    if (x.matches) { // If media query matches
        MenuIDTag.style.backgroundColor = "black";
        MenuIDTag.style.right = "-300";
        MenuIDTag.style.width = "auto";
        
    } else {
        
        MenuIDTag.style.backgroundColor = "rot";
        /* MenuIDTag.style.display = "block"; */
        /* MenuIDTag.style.flexDirection = "column"; */
      
       
        
    }
  }
  
  var x = window.matchMedia("(max-width: 800px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction);

  menuSympol.onclick = function () {

    MenuIDTag.style.right = "0";
  menu.style.color="black"
  menuSympol.style.display = "none";
  MobileHome.style.display = "none"; 

  closeBtn.style.display = "block";
  /*      
        for (let i = 0; i < menuItem; i++) {
        // add i to ClassName menu-item-has-children
        document.getElementsByClassName('menu-item-type-post_type')[i].style.display="block";
             
    } */
  
};