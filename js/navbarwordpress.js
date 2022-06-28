// document.querySelector('div').insertAdjacentHTML('afterBegin','<p>Second paragraph in the code, but should become first.</p>')

    // count tag hwho has ClassName menu-item-has-children
    clannNameNumber= document.getElementsByClassName('menu-item-has-children').length;
    for (let i = 0; i < clannNameNumber; i++) {
        // add i to ClassName menu-item-has-children
        document.getElementsByClassName("menu-item-has-children")[i].innerHTML += "<i>&#xfe40;</i>";        
    }

   
    let menu= document.getElementsByClassName("menu")[0];
    
    

    menu.innerHTML += "<i id='menuSympol'>&#9776;</i>";
    menu.innerHTML += "<h2 id='MobileHome'>الموقع</h2>";
    menu.innerHTML += "<i id ='closeBtn'>X</i>";

    let menuSympol = document.getElementById("menuSympol");
    let MobileHome= document.getElementById('MobileHome'); 
    let closeBtn= document.getElementById('closeBtn');

    

    let menuItem= document.getElementsByClassName('menu-item-type-post_type').length;
   
    

    menuSympol.onclick= function(){
        menu.style.display = "block";
        menuSympol.style.display="none";
        MobileHome.style.display="none";
        closeBtn.style.display="block";
        for (let i = 0; i < menuItem; i++) {
        // add i to ClassName menu-item-has-children
        document.getElementsByClassName('menu-item-type-post_type')[i].style.display="block";
             
    }


    }
