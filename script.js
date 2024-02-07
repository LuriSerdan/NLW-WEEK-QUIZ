const perguntas = [
  {
    pergunta: "Como se declara uma variável em JavaScript?",
    respostas: [
      "let x = 10;",
      "var x = 10;",
      "const x = 10;",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do operador '==' em comparações em JavaScript?",
    respostas: [
      "Compara apenas o valor.",
      "Compara o valor e o tipo de dado.",
      "Compara apenas o tipo de dado.",
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'parseInt( )' faz em JavaScript?",
    respostas: [
      "Converte uma string para número inteiro.",
      "Converte um número para string.",
      "Arredonda um número para o inteiro mais próximo.",
    ],
    correta: 0
  },
  {
    pergunta: "Como você adiciona um elemento ao final de um array em JavaScript?",
    respostas: [
      "array.add(elemento);",
      "array.push(elemento);",
      "array.append(elemento);",
    ],
    correta: 1
  },
  {
    pergunta: "O que o comando 'break' faz em um loop em JavaScript?",
    respostas: [
      "Encerra a execução do loop mais próximo.",
      "Pula para a próxima iteração do loop.",
      "Não tem efeito em loops.",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a finalidade da função 'setTimeout( )' em JavaScript?",
    respostas: [
      "Executa uma função após um intervalo de tempo.",
      "Define o tempo limite de execução de uma função.",
      "Espera por um evento específico.",
    ],
    correta: 0
  },
  {
    pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
    respostas: [
      "A capacidade de uma variável ser utilizada antes de ser declarada.",
      "O ato de elevar uma função para o topo do código.",
      "A criação automática de variáveis globais.",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
    respostas: [
      "'null' é atribuído explicitamente para indicar a ausência de valor, enquanto 'undefined' é atribuído automaticamente.",
      "'null' representa um valor indefinido, enquanto 'undefined' representa a ausência de valor.",
      "Não há diferença, ambos indicam a ausência de valor.",
    ],
    correta: 0
  },
  {
    pergunta: "Como você converte uma string para minúsculas em JavaScript?",
    respostas: [
      "string.toLowerCase( );",
      "string.toLower( );",
      "string.lowerCase( );",
    ],
    correta: 0
  },
  {
    pergunta: "O que é um closure em JavaScript?",
    respostas: [
      "Um tipo especial de função que pode ser chamado como um construtor.",
      "O encapsulamento de uma função juntamente com o ambiente léxico no qual ela foi declarada.",
      "Um método para fechar automaticamente um programa em JavaScript.",
    ],
    correta: 1
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta // true

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    
    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
