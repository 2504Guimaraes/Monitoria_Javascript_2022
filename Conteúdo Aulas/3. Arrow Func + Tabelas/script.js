// ------------------------------------------------ 
//     ROTEIRO + IDEIAS PARA AULA 18/03/2022: 
// ------------------------------------------------
// Arrow Functions (Lambda Func), 
// Curriyng e High Order Functions. + (Tabelas)
// removeChild ? ..map?
// ---- //////// ----

// EX 1. Exemplo de função:
function somar1(a,b) {
    return a + b
}



// EX 2. Exemplo de arrow function:
const somar2 = (a,b) => a + b
// const somar2 = (a,b) => { return a + b }

console.log(somar1(22,22))
console.log(somar2(22,22))



// EX 3. Combinando funções numa high order function (Função de Alta Ordem):7
const somar = (a,b) => a + b
const dividir = (a,b) => a / b 
const subtrair = (a,b) => a - b 
const multiplicar = (a,b) => a * b

somar(10,5) // funciona mas não MOSTRA NA TELA...
console.log(somar(20,30))

// observe a mágica desse tipo de função:

somar(somar(2,2), somar(2,2))
console.log(somar(somar(2,2), somar(2,2)))
console.log(subtrair(somar(2,2), somar(2,2)))
console.log(multiplicar(somar(2,2), somar(2,2)))
console.log(dividir(somar(2,2), somar(2,2)))

// combinações e variações infinitas...

subtrair(somar(10,10), dividir(999,3))
multiplicar(dividir(90,3), somar(200,5))
somar(multiplicar(dividir(90,3), somar(200,5)), 300)

// Você podde associar esses processos a um nome, assim:

const conta1 = subtrair(somar(10,10), dividir(999,3))
const conta2 = multiplicar(dividir(90,3), somar(200,5))
const conta3 = somar(multiplicar(dividir(90,3), somar(200,5)), 300)

// e ficar vendo ou usando eles, assim: 

console.log('Resultado 1: ' + conta1)
console.log('Resultado 2: ' + conta2)
console.log('Resultado 3: ' + conta3)



// EX 4. Arrow functions + High Order Func.
// usadas  em processos:

const alunos = []

const criarAluno = (nm, age, sx) => {
    return { nome: nm, idade: age, sexo: sx }
}
console.log(criarAluno('Ivan', 22, 'M'))

const aluno1 = criarAluno('Ivan', 22, 'M')
const aluno2 = criarAluno('Nathalia', 25, 'F')
const aluno3 = criarAluno('Jonathas', 31, 'M')

const addAluno = (lista, aluno) => {
    alunos.push(aluno)
    return alunos
}
console.log(
    addAluno(
        alunos, 
        criarAluno('teste', 0, 'ANOTHER')
    )
)

