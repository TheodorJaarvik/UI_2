var navnTab = [];

sessionStorage.setItem("navnTab", JSON.stringify(navnTab));

function btn_Onclick(){
    var navn = document.getElementById("inp_Navn").value;
    navnTab.push(navn);
    console.log(navnTab);
    localStorage.setItem("name", navn);
    
}

function site_Onload(){
    
var nysiteNavn = localStorage.getItem("name");
document.getElementById("navn").innerHTML=nysiteNavn;
        
    }
    
    
