
//pegar o input
//Se for Sim, mostra as categorias Disponiveis, pergunta qual categoria ela escolhe
//Se Não, mostra todos os filmes em ordem crescente pela duração
const filmes = require('./database')
const readline = require('readline-sync') //← pegar tudo que a biblioteca disponibiliza

const entradaInicial = readline.question('Deseja buscar um filme? S/N ')


if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis: ')
    console.log('Herois', 'Fantasia', 'Terror')
    
    const entradaCategoria = readline.question('Qual categoria voce escolhe: ')

    const retorno = filmes.filter(filme => filme.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const filmesOrdenados =  filmes.sort((a,b) => a.duracao - b.duracao)
    console.log('Essas são todos os Filmes disponivels: ')
    console.table(filmesOrdenados)

}


