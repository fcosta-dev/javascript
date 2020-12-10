function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://globallabs.academy/"); //Abre em outra janela
    window.location.href = "https://globallabs.academy/"; //Abre na mesma janela
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada")
}

function funcaochange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
var validar = 0
function validaIdade(idade){
    if(idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar);
*/

//alert(soma(5,10));


/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
*/


/*
var count;
for (count=0; count <= 5; count++){
    alert(count)
}
*/


/*
var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1;
    //count++;
};
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("Maior de idade")
} else {
    alert("Menor de idade")
};
*/



//LISTA DE[ DICIONÁRIOS:
//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
//console.log(frutas);
//console.log(frutas[1].nome);



//DICIONÁRIO:
//var fruta = {nome:"maça", cor:"vermelha"};
//console.log(fruta);
//console.log(fruta.nome);
//console.log(fruta.cor);



//LISTA:
//var lista = ["maça", "pera", "laranja"];
//Colocar item na lista:
//lista.push("uva");
//Tira o último elemento da lista
//lista.pop();

//console.log(lista);
//console.log(lista[1]);
//console.log(lista.length);
//Traz a lista inversa:
//console.log(lista.reverse());

//Transforma a lista em um elemento só, em String
//console.log(lista.toString())

//console.log(lista.toString()[0])

//console.log(lista[0])

//Adiciona separadores na lista
//console.log(lista.join(" - "))
//console.log(lista.join(" | "))
//console.log(lista.join(""))

//alert(lista[1]);

//var nome = "Fernando Gosuen da Costa";
//var idade = 39;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade);
//alert(idade + idade2)
//console.log(nome);
//console.log(idade+idade2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toLowerCase());
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"))
