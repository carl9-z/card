//while
//let contador= 0;

// while (contador < 10){
//     console.log("testando")
//     contador = contador + 1
// }

//for(let i = 0; i <11; i++){
  //  console.log(i * 10);
//}

//let tabuada = [5,6,4,9]
//let teste = (tabuada[0] + tabuada[1] + tabuada[2] + tabuada[3])/tabuada.length
//console.log("média:",teste)

//let numeros =[1,2,3,100000,4,5,6,]
//let maior_numero = 0;
//for(let i = 0; i <numeros.length;i++){
//    if(maior_numero < numeros[i]){
        // maior_numero = numeros[i]
 //   }
//}
//console.log(maior_numero)

//let filme = {
//    Nome: "transformers 1",
//    nota: "9/10",
//   Genero: "ficção cientifica",
//}
//console.log("nota:",filme.nota)
//console.log("Nome:",filme.Nome)
//console.log("genero:",filme.Genero)

//let lista =["abacate","tangirina","cereja"]
//let copia =[]
//console.log(copia)
//for(let i = 0; i < lista.length;i++){
//   copia.push( lista.slice()[i][0])
//}
//console.log(copia)

let numero = [1,2,3,4,5,6,7,8,9,10]
let par = []
let impar = []
for(let i = 0; i < numero.length;i++)
  if(numero[i] % 2 === 0){
    par.push (numero[i])
  } else {
    impar.push(numero[i])
  }
  console.log("numeros par:", par)
  console.log("numeros impar:", impar)

