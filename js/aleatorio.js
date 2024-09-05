// Lista de nomes para perfis de clientes
const nomes = [
    "Alice Martins", "Roberto Silva", "Julia Santos", "Carlos Oliveira", 
    "Mariana Ferreira", "Lucas Pereira", "Beatriz Costa", "Pedro Lima", 
    "Laura Almeida", "Felipe Souza"
];

// Lista de segmentos de mercado
const segmentos = [
    "Tecnologia", "Saúde", "Educação", "Finanças", 
    "Moda", "Alimentação", "Beleza", "Automotivo"
];

// Lista de interesses
const interesses = [
    "Inovação", "Saúde e Bem-Estar", "Educação Online", "Investimentos",
    "Moda e Tendências", "Gastronomia", "Cuidados Pessoais", "Tecnologia Automotiva"
];

// Função para selecionar um item aleatório de uma lista
function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

// Função para gerar um perfil de cliente fictício
export function gerarPerfil() {
    return {
        nome: aleatorio(nomes),
        segmento: aleatorio(segmentos),
        interesse: aleatorio(interesses),
        idade: Math.floor(Math.random() * (65 - 18 + 1)) + 18 // Idade entre 18 e 65 anos
    };
}

// Exporta uma função para obter um perfil de cliente aleatório
export const perfilCliente = gerarPerfil();