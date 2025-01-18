//1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diadaSemana = prompt('Qual é o dia da semana')

if (diadaSemana == 'Sábado' || diadaSemana == 'Domingo') {
    alert('Bom fim de semana!')
} else {
    alert('Boa semana!')
}



//2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = prompt('Digite um número')

if (numero >= 0){
    alert('Número positivo')
}else{
    alert('Número negativo')
}

//3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = prompt('Quantos pontos voçê fez?')

if(pontuacao >= 100){
    alert('Parabéns, você venceu!')
    
}else{
    alert('Tente novamente para ganhar.')
}

//4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let SaldodaConta = 1000

alert('O saldo da sua conta é ' + SaldodaConta)

//5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nomeUsuario = prompt('Digite seu nome')

alert('Seja bem-vindo ' + nomeUsuario)