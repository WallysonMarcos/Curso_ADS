function EnableMenu(){
    var lMenu = document.getElementById("enablemenu");
    var ul_menu_r = document.getElementById("menu_right");
    
    if(lMenu.checked){
        ul_menu_r.style.transform = "translateX(100%)";
    }else{
        ul_menu_r.style.transform = "translateX(0%)";
    }
 }