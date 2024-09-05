import { produtos } from './produtos.js'; // Importa informações sobre produtos
import { nome } from './usuario.js'; // Importa o nome do usuário se necessário

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaProduto = document.querySelector(".caixa-produto");
const caixaDetalhes = document.querySelector(".caixa-detalhes");
const caixaFormulario = document.querySelector(".caixa-formulario");
const textoDetalhes = document.querySelector(".texto-detalhes");
const botaoSaibaMais = document.querySelector(".saiba-mais-btn");
const botaoEnviar = document.querySelector(".enviar-btn");
const botaoVoltar = document.querySelector(".voltar-btn");

let produtoAtual;

// Evento para iniciar a visualização do produto
botaoSaibaMais.addEventListener('click', mostraProduto);

function mostraProduto() {
    produtoAtual = produtos[0]; // Seleciona o primeiro produto para exibição inicial
    caixaProduto.classList.add("mostrar");
    caixaDetalhes.classList.remove("mostrar");
    caixaFormulario.classList.remove("mostrar");
    atualizaProduto();
}

function atualizaProduto() {
    if (!produtoAtual) return;
    textoDetalhes.textContent = `Produto: ${produtoAtual.nome}\nDescrição: ${produtoAtual.descricao}\nPreço: ${produtoAtual.preco}`;
    caixaDetalhes.classList.add("mostrar");
    caixaProduto.classList.remove("mostrar");
}

botaoVoltar.addEventListener('click', retornaParaProduto);

function retornaParaProduto() {
    caixaDetalhes.classList.remove("mostrar");
    caixaProduto.classList.add("mostrar");
}

botaoEnviar.addEventListener('click', enviaFormulario);

function enviaFormulario() {
    const nomeCliente = document.querySelector("input[name='nome']").value;
    const emailCliente = document.querySelector("input[name='email']").value;
    const mensagemCliente = document.querySelector("textarea[name='mensagem']").value;

    // Validação simples
    if (!nomeCliente || !emailCliente || !mensagemCliente) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Aqui você pode adicionar lógica para enviar os dados do formulário, como uma requisição para um servidor
    console.log(`Nome: ${nomeCliente}\nEmail: ${emailCliente}\nMensagem: ${mensagemCliente}`);

    // Mensagem de sucesso
    alert("Obrigado pelo seu contato! Em breve entraremos em contato.");
    limpaFormulario();
}

function limpaFormulario() {
    document.querySelector("input[name='nome']").value = '';
    document.querySelector("input[name='email']").value = '';
    document.querySelector("textarea[name='mensagem']").value = '';
    caixaFormulario.classList.remove("mostrar");
    caixaProduto.classList.add("mostrar");
}

function exibeFormulario() {
    caixaProduto.classList.remove("mostrar");
    caixaDetalhes.classList.remove("mostrar");
    caixaFormulario.classList.add("mostrar");
}