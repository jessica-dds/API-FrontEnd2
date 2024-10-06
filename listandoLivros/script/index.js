const url = 'http://localhost:3000/livros';
const elementoUl = document.querySelector('#livros');
const elementoInputTitulo = document.querySelector("input[name='titulo']");
let idSelecionado = null;
const elementoBotaoAlterar = document.querySelector('.botao-alterar');
const elementoBotaoCadastrar = document.querySelector('.botao-cadastrar');

async function listarLivros() {
    const resposta = await axios.get(url);
    resposta.data.forEach((livro) => {
        criarLiLivro(livro);
    });
    console.log(resposta.data);
}

listarLivros();

function criarLiLivro(livro) {
    const li = document.createElement('li');
    const botaoExcluir = document.createElement("button");
    const spanTitulo = document.createElement("sapn");
    botaoExcluir.textContent = 'Excluir';
    selecionarLivroParaExcluir(botaoExcluir);

    spanTitulo.textContent = livro.titulo;
    li.appendChild(spanTitulo);
    li.appendChild(botaoExcluir);
    li.id = livro.id;
    selecionarLivro(li);

    elementoUl.appendChild(li);
}

function selecionarLivroParaExcluir(botaoExcluir) {
    botaoExcluir.addEventListener('click', (event) => {
        event.stopPropagation();
        const idLivro = event.target.parentElement.id;
        deletarFilme(idLivro);
    });
}

function selecionarLivro(li) {
    li.addEventListener("click", (event) => {

        const elemento = event.target;

        if (elemento.nodeName === 'LI') {
            const spanTitulo = elemento.querySelector('span');
            elementoInputTitulo.value = spanTitulo.textContent;
            idSelecionado = elemento.id;
        }
        else if (elemento.nodeName == 'SPAN') {
            elementoInputTitulo = event.target.textContent;
            idSelecionado = elemento.parentElement.id;
        } else {
            return;
        }


        elementoBotaoAlterar.disabled = false;
        elementoBotaoCadastrar.disabled = "disabled";
    });
}

async function cadastrarLivro(event) {
    event.preventDefault();
    const resposta = await axios.post(url, {
        titulo: elementoInputTitulo.value
    });
    console.log(resposta);
}

async function alterarLivro(livro) {
    if (!idSelecionado) return
    const resposta = await axios.put(`${url}/${idSelecionado}`, {
        titulo: elementoInputTitulo.value
    });
    console.log(resposta);
}

async function deletarFilme(idLivro) {
    if (!idLivro) return;
    const resposta = await axios.delete(`${url}/${idLivro}`);
    console.log(resposta);
}