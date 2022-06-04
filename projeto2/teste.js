var x, y, z;
x = 5;
y = 2;
z = x + y;

document.getElementById("texto").innerHTML = "Javascript";

function funcao1() {
    document.getElementById("demo").innerHTML = "Parágrafo mudou. A imagem também. À propósito, " + x + " + " + y + " é igual à " + z + "." + Date();
    document.getElementById("imagem").src = "../projeto2/comanf.jpg";

}