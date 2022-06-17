function navicon() {
    var x = document.getElementById("mynav");
    if (x.className == "topNav") {
        x.className += "responsive";
    } else {
        x.className = "topNav";
    }
}

function navicon2() {
    var x = document.getElementById("mynav2");
    if (x.className == "bottomNav") {
        x.className += "responsive";
    } else {
        x.className = "bottomNav";
    }
}

function paginaProduto(paginaName, elmnt) {
    var i, produtos, aba;
    produtos = document.getElementsByClassName("produtos");
    for (i = 0; i < produtos.length; i++) {
        produtos[i].style.display = "none";
    }
    aba = document.getElementsByClassName("aba");
    for (i = 0; i < aba.length; i++) {
        aba[i].className = aba[i].className.replace(" active", "");
    }
    document.getElementById(paginaName).style.display = "flex";
    elmnt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function botao() {
    myButton = getElementById("voltaraotopo")
}