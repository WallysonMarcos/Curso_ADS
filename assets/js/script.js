function EnableMenu(){
    var lMenu = document.getElementById("enablemenu");
    var SideMenu = document.getElementById("sidemenu");
    
    if(lMenu.checked){
        SideMenu.style.transform = "translateX(100%)";
    }else{
        SideMenu.style.transform = "translateX(0%)";
    }
 };

 function fSelectMenu(args){
     switch(args){
         case 0: $('#main_corpo').load("pages/inicio.html"); break;
         case 1: $('#main_corpo').load("pages/disciplinas.html"); break;
         case 2: $('#main_corpo').load("pages/professores.html"); break;
         case 3: $('#main_corpo').load("pages/contato.html"); break;
     }    
};
