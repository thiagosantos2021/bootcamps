function clicou(){
    document.getElementById("agradecimento").innerHTML += "<b> Obrigado por clicar </b>"
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/thiago-santos-96a18b20b/")
    //window.location.href = "https://www.linkedin.com/in/thiago-santos-96a18b20b/"
}

function trocar(){
    document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar texto")
}

function voltar(){
    document.getElementById("mouseover").innerHTML = "Passe o mouse aqui"
}

/* FUNÇÕES EM JAVASCRIPT
    function ValidarIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}
var idade = prompt('Qual a sua idade?')
console.log(ValidarIdade(idade))


    function soma(n1,n2){
    return n1+n2
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(4,9))
alert(setReplace("Vai Japão", "Japão", "Brasil"))*/

/*var nome = "Thiago Santos"
var idade = 29
alert(`Seja Bem-Vindo, ${nome}, que tem ${idade} anos`)*/

/* LISTA
var lista = ['maçã', 'pera', 'laranja']
lista.push('uva')
lista.pop()
console.log(lista)
console.log(lista.toString())
console.log(lista.length)
console.log(lista.join(" "))
console.log(lista.reverse())*/

/* DICIONÁRIO
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome)
alert(fruta.cor)*/

/* LISTA COMPOSTA POR DICIONÁRIOS
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas)
console.log(frutas[1].nome)*/

/* ESTRUTURA CONDICIONAL COMPOSTA
var idade = 18
if(idade>=18){
    console.log('Maior de Idade!')
}else{
    console.log('Menor de Idade!')
}*/

/* ESTRUTURA DE REPETIÇÃO WHILE
var count = 0
while (count <= 5)
console.log(count)
c++ => c+=1 => c = c+1 (mesmo resultado)*/

/* ESTRUTURA DE REPETIÇÃO FOR
var count
for(count=0;count<=5;count++)
console.log(count)*/

/* TRABALHANDO COM DATAS
var d = new Date()
console.log(d)
*/




