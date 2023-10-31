// Capturando os elementos do HTML pelo ID
var titulo = document.getElementById('titulo');
var listaNaoOrdenada = document.querySelector('ul');
var link = document.getElementById('link');
var listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo aos elementos usando .innerText e .innerHTML
titulo.innerText = 'Título da Página';
link.innerText = 'Visite o site Proz Educação';

// Adicionando itens simples na lista não ordenada usando .innerHTML
listaNaoOrdenada.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';

// Adicionando itens com links na lista ordenada usando .innerHTML
listaOrdenada.innerHTML = '<li><a href="https://site1.com">Link 1</a></li>' +
                          '<li><a href="https://site2.com">Link 2</a></li>' +
                          '<li><a href="https://site3.com">Link 3</a></li>';
