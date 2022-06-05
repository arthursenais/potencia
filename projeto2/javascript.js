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