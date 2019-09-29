function EnableMenu(){
    var lMenu = document.getElementById("enablemenu");
    var SideMenu = document.getElementById("sidemenu");
    
    if(lMenu.checked){
        SideMenu.style.transform = "translateX(100%)";
    }else{
        SideMenu.style.transform = "translateX(0%)";
    }

    console.log("Enable")
 }