//Dados iniciais
let currentQuestion = 0;
let correctAnswers = 0;
showQuestion();

//Evento Reset
document
  .querySelector(".scoreArea button")
  .addEventListener("click", resetEvent);

//Funções
function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];
    // Criar variável para a barra de progresso baseado na divisão entre número questão atual e quantidade de questões vezes 100. Use a função Math.floor para arredondar.
    let larguraBarra = Math.floor((currentQuestion / questions.length) * 100);
    // Defina a largura da .progress--bar com o valor obtido
    document.querySelector(".progress--bar").style.width = `${larguraBarra}%`;
    // Esconda a .scoreArea
    document.querySelector(".scoreArea").style.display = "none";
    // Exiba a .questionArea
    document.querySelector(".questionArea").style.display = "block";
    // Insira em .question o valor da questão
    document.querySelector(".question").innerHTML = q.question;
    // Defina .options como ""
    document.querySelector(".options").innerHTML = "";
    // Crie uma let optionsHtml para o texto das opções
    let optionsHtml = "";
    // Faça um laço em q.options e defina o valor da optionHtml com `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`

    for (let i = 0; i < q.options.length; i++) {
      optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1
        }</span>${q.options[i]}</div>`;
    }
    console.log(optionsHtml);
    // Insira optionsHtml em .options
    document.querySelector(".options").innerHTML = optionsHtml;

    document.querySelectorAll(".options .option").forEach((item) => {
      item.addEventListener("click", optionClickEvent);
    });
  } else {
    // Chame a função finishQuiz
    finishQuiz();

  }
}

function optionClickEvent(e) {

  // Verifique qual questão foi clicada recuperando o atributo data-op. Use parseInt para formatar o atributo. Atribua o valor a uma variável.s
  let questionClicada = parseInt(e.target.getAttribute('data-op'));

  // Se a resposta clicada foi a correta, incremente a variável correctAnswers
  if (questions[currentQuestion].answer === questionClicada) {
    correctAnswers++;
  }

  // Incremente a variável currentQuestion
  currentQuestion++;
  // Chame a função showQuestion
  showQuestion();
}

function finishQuiz() {
  // Criar variável de pontos baseado na divisão entre respostas corretas e quantidade de questões. Use a função Math.floor para arredondar.


  let pontosFinais = Math.floor((correctAnswers / questions.length) * 100);
  // Implementar condicionais para inserir mensagem e cor do placar de acordo com a pontuação.
  // Usar condicional if e condicionais <, <=, >, >=
  if (pontosFinais <= 60) {
    document.querySelector(".scoreText1").innerHTML = "Melhor estudar mais!!";
    document.querySelector(".scoreText1").style.color = "red";
    document.querySelector("img") .src = 'assets/Menos de 60.jpg'

  } else if (pontosFinais <= 70) {
    document.querySelector(".scoreText1").innerHTML = "Está bom, mas pode melhorar!!";
    document.querySelector(".scoreText1").style.color = "green";
    document.querySelector("img") .src = 'assets/Menos de 70.jpg'
  } else if (pontosFinais >= 80 && pontosFinais <= 89) {
    document.querySelector(".scoreText1").innerHTML = "Oxi, muito bom!!";
    document.querySelector(".scoreText1").style.color = "green";
    document.querySelector("img") .src = 'assets/Menos de 80.jpg'
  } else if (pontosFinais >= 90) {
    document.querySelector(".scoreText1").innerHTML = "Aí sim hein!!";
    document.querySelector(".scoreText1").style.color = "green";
    document.querySelector("img") .src = 'assets/mais de 80.jpg'
  }

  console.log(pontosFinais)

  // Inserir a pontuação em .scorePct e o texto em .scoreText2
  document.querySelector(".scorePct").innerHTML = `Você acertou ${pontosFinais}%`
  document.querySelector(".scoreText2").innerHTML = `Você acertou ${correctAnswers} de um total de ${questions.length}`

  // Ocultar a .questionArea e exibir a .scoreArea
  document.querySelector(".questionArea").style.display = "none"
  document.querySelector(".scoreArea").style.display = "block"


  // Deixar a .progress--bar em 100%
  document.querySelector(".progress--bar").style.width = `100%`;
}

function resetEvent() {
  // Redefina os valores de correctAnswers e currentQuestion para 0
  currentQuestion = 0;
  correctAnswers = 0;
  showQuestion();

  // Chame a função showQuestion

}
