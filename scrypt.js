const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta 1: Porque o Adrian é cachorrinho das meninas?",
        alternativas: [
            {
            
            texto: "Alternativa A) Por que ele é Petista ",
            afirmacao: ", esta certo mias não é o que a pergunta pede"
            },
            {
            texto: "Alternativa B) porque ele gosta de ser gado",
            afirmacao: ", você acertou em cheio parabéns"
            }
            
        ]
    },
    {
        enunciado: "Pergunta 2: Porque a NVIDIA lança placa de video nova todo ano?",
        alternativas: [
            {
                texto: "Alternativa A) Porque querem apenas vender placas mais potente e não tão nem ai pra nada",
                afirmacao: ", poderia sim ser isso mas, não é"
            },
            {
                texto: "Alternativa B)  Ela lança novas placas de vídeo anualmente como parte de sua estratégia para manter a competitividade no mercado e atender à demanda por desempenho gráfico aprimorado em jogos e aplicações de inteligência artificial.",
                afirmacao: ", sim essa é sua estrategia "
            }
        ]
    },
    {
        enunciado: "Pergunta 3: qual o jogo que mais vendeu em seu lançamento",
        alternativas: [
            {
                texto: "Alternativa A) Grand Theft Auto V",
                afirmacao: ", 215 milhões de cópias vendidas, demonstrando sua popularidade duradoura"
            },
            {
                texto: "Alternativa B) Wii Sports",
                afirmacao: ", 82 milhões de cópias, sendo um dos títulos mais vendidos para o console"
            }
        ]
    },
    {
        enunciado: "Pergunta 4: Qual é o jogo de ação mais popular atualmente",
        alternativas: [
            {
                texto: "Alternativa A) Call of Duty",
                afirmacao: ", um jogo de guerra não fica legal com skins de unicornio"
            },
            {
                texto: "Alternativa B) Battlefield 6",
                afirmacao: ", se tornou um dos jogos mais hypados sendo totalmente militar"
            }
        ]
    },
    {
        enunciado: "Pergunta 5: Qual é o objetivo principal do jogo Minecraft?",
        alternativas: [
            {
                texto:"Alternativa A) Construir estruturas e sobreviver",
                afirmacao:", isso é só uma parte inicial mais de acordo com o chet gpt é isso sim"
            },
            {
                texto: "Alternativa B) Derrotar o Ender Dragon",
                afirmacao: ", esse é o objetio final"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return; 

    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativa();
}

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
            
        caixaAlternativas.appendChild(botaoAlternativa);
    }

}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes
    historiaFinal += afirmacoes + "";
    atual++;
mostraPergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
