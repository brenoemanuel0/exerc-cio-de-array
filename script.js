const equipe = [
  "André Luiz", "Arthur", "Breno", "Carlos Eduardo",
  "Cauã", "Davi", "Davi", "Eduardo",
  "Emerson", "Erick", "Eris", "Ezequiel",
  "Felipe", "Francisco", "Gabrielly", "Guilherme",
  "Gustavo Alexandre", "Gustavo Augusto", "Heloa", "Isabelle",
  "Ivaneide", "Jayme", "Jorge", "João Pedro",
  "João Vitor", "Kaio", "Luis Otávio", "Layson",
  "Lorenzzo", "Lucas", "Lucas Matheus", "Luis Gustavo",
  "Luiz", "Magsdene", "Marco Antônio", "Mateus",
  "Nickson", "Octavio", "Otávio", "Patrick",
  "Pedro Junio", "Rafael", "Victor Hugo", "Victor Hugo",
  "Vinícius", "Willky",
];

//exercicio 1
const escalaManha = ["Heloa", "Erick", "Vinícius", "Davi", "Luiz"];
console.log("exercicio 1")
console.log(escalaManha[0], escalaManha.length, escalaManha[escalaManha.length -1])

//exercicio 3
console.log("exercicio 3")
const filaCafe = ["Lucas", "Mateus", "Otávio"];

filaCafe.unshift("Isabelle");          
const atendida = filaCafe.shift();      

console.log(atendida + " foi atendida"); 
console.log(filaCafe);       

//exercicio 4
console.log("exercicio 4")

const confirmados = [
  "Gustavo Alexandre", "João Vitor", "Heloa", "Victor Hugo",
  "Breno", "Octavio", "Kaio", "Lorenzzo",
];

console.log("Heloa → ",confirmados.includes("Heloa"))
console.log("Pedro Junio → ", confirmados.includes("Pedro Junio"))

confirmados.push("Pedro Junio")

console.log(confirmados)


//exercicio 6
console.log("exercicio 6")
const valesAtuais = [400, 450, 500, 380];
console.log("valores atuais: ",valesAtuais)

let reajuste = [...valesAtuais]
let reajustador = reajuste.map((numero) => numero + 50)

console.log("reajuste: ",reajustador)

//exercicio 8
console.log("exercicio 6")
const bomdia = equipe.map((nomes) => "bom dia " + nomes)

console.log(bomdia)

//exercicio 10
console.log("exercicio 10")

let nomesg = equipe.filter((nomes) => nomes.startsWith("G"))

console.log(nomesg)

//exercicio 12

console.log("exercicio 12")


let nomescomposto = equipe.filter((nomes) => nomes.includes(" "))

console.log(nomescomposto, "quantidade de pessoas com nome composto: ", nomescomposto.length)


//exercicio 14
console.log("exercicio 14")

let procuraoc = equipe.find((nomes) => nomes == "Octavio")

let procuraot = equipe.find((nomes) => nomes == "Otavio")

let posoc = equipe.findIndex((nomes) => nomes == "Octavio")

let posot = equipe.findIndex((nome) => nome === "Otávio")

console.log("Octavio = ",procuraoc , "Octavio posição", posoc,"Otavio = ",procuraot , "Otavio posição", posot,)



//exercicio 16
console.log("exercicio 16")

const filaAlmoco = ["Davi", "Erick", "Vinícius", "Heloa", "Nickson"];

let procuravini = filaAlmoco.findIndex((nomes) => nomes == "Vinícius")
let posicao = procuravini + 1
procuraBreno = filaAlmoco.findIndex((nomes) => nomes == "Breno")
console.log(`Vinícius é o ${posicao}º da fila`)
console.log("Vinícius → índice", procuravini ," | ", "Breno → " ,  procuraBreno, "porque ele não está na fila")

//exercicio 18

console.log("exercicio 18")
const cadastrosHeloa = [14, 9, 21, 17, 11];
let maximo = cadastrosHeloa.reduce((min, atual) => (min < atual ? atual: min))
let posmax = cadastrosHeloa.indexOf(maximo)
console.log(maximo, " na posição "  , posmax, " — quarta-feira. ")

//exercicio 20
console.log("exercicio 20")
const horasExtras = [6, 2, 8, 0, 5, 7, 3, 9, 4, 10, 1, 6, 0, 12, 5, 2];
const zero = 0
let retira = horasExtras.filter((numero) => numero > zero)
let transforma = retira.map((numero) => numero * 25)
let somahora = transforma.reduce((numero, prox) => numero + prox)
console.log(retira.length," registros; ", " o array de valores começa com ", transforma,"; total de ",somahora, " reais") 

//exercicio 21
console.log("exercicio 21")
const vendas = [120, 45, 0, 300, 80, 0, 15, 210];

let vendavalida = vendas.filter((numero) => numero > zero)
let vendanaovalida = vendas.filter((numero) => numero == 0)
let texto = vendavalida.map((numero) => "R$" + numero)
let ummaiorquecem = vendavalida.find((numero) => numero > 100)
let acimadeduzcin = vendavalida.some((numero) => numero > 250)
let somavend = vendavalida.reduce((numero, prox) => numero + prox)
let maiorvend = vendavalida.reduce((menor, atual) => (menor < atual ? atual: menor))
console.log("vendas validas: ",vendavalida,"canceladas: ", vendanaovalida.length, texto,"- Primeira acima de 100 →", ummaiorquecem, "Alguma acima de 250 →", acimadeduzcin, "total: ", somavend, "maior venda: ", maiorvend)