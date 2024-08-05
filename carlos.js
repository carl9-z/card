//IF E ELSE
let idade = 18


console.log( idade >= 18 ) 
if (idade >= 18){
    console.log(`sua idade é maior que 18 <Idade:${idade}>`)
        if(idade === 18){

        }
} if ( idade === 10) {
    console.log(`sua idade é igual que 10 <Idade:${idade}>`)
}

let cargo = "diretor"
switch(cargo){
    case "comum":
        console.log(`o seu nivel de acesso é de ${cargo}`)
        break;
    case "gerente":
        console.log(`o seu nivel de acesso é de ${cargo}`)
        break;
    case "diretor":
        console.log(`o seu nivel de acesso é de ${cargo}`)
        break;
    default:
        console.log(`não possui nivel de acesso`)
        break;
}

let anoAtual = 2024
let anoNascimento = 2007
let idade_atual = anoAtual - anoNascimento
if (idade_atual >= 16){
    console.log("pode votar")
} else {
    console.log("não pode votar")
}

let senha = 1234
switch(senha){
    case 1234:
        console.log(`senha valida:<senha${senha}>`)
        break;
    default:
        console.log(`senha invalida`)
        break;
}

