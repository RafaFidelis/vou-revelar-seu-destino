// Como começar ?
// Variaveis, dados de entrada, dados de saida
const elementResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const answers = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem que não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim."
]

// clicar em fazer pergunta
function fazerPergunta() {
  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return // para parar a execução da função
  }
  buttonPerguntar.setAttribute("disabled", true)
  const pergunta = "<div>" + inputPergunta.value + "</div>"
  // gerar número aleatório
  const totalAnswers = answers.length
  const randomNumber = Math.floor(Math.random() * totalAnswers)
  elementResposta.innerHTML = pergunta + answers[randomNumber]
  elementResposta.style.opacity = 1;
  // sumir a resposta depois de 3 segundos
  setTimeout(function() { elementResposta.style.opacity = 0; buttonPerguntar.removeAttribute("disabled") }, 3000)
}