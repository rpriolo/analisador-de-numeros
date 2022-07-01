let botaoAdicionar = document.querySelector('input#botao-adicionar');
let botaoFinalizar = document.querySelector('input#botao-finalizar');
let botaoLimpar = document.querySelector('input#botao-limpar');
botaoAdicionar.addEventListener('click', adicionarNumero);
botaoFinalizar.addEventListener('click', finalizarAnalise);
botaoLimpar.addEventListener('click', limparDados)

let listaNumeros = [];

function adicionarNumero() {
    let inputNumero = document.querySelector('input#numero');
    let numero = Number(inputNumero.value);

    if (numero <= 0 || numero > 100) {
        alert('Você precisa inserir um número entre 1 e 100 para continuar.')
    } else {
        listaNumeros.push(numero);
        let select = document.querySelector('select#lista');
        let option = document.createElement('option');
        option.text = `Valor ${numero} adicionado`
        select.appendChild(option);
    }

    inputNumero.value = ''
    inputNumero.focus();
}

function finalizarAnalise() {

    function ordenarArray(arrayName) {
        // ORDENAÇÃO DO MENOR PARA O MAIOR
        for (let vezes = 1; vezes < (arrayName.length); vezes++) {
            for (let i = 0; i < (arrayName.length-1); i++) {
                if (arrayName[i] > arrayName[i+1]) {
                    let temp = arrayName[i];
                    arrayName[i] = arrayName[i+1];
                    arrayName[i+1] = temp;
                }
            }
        }
    }
    function somarArray(arrayName) {
        let soma = 0;
        for (let i = 0; i < arrayName.length; i++) {
            soma += arrayName[i];
        }
        return soma;
    }
    function mediaArray(arrayName) {
        let media = somarArray(arrayName) / arrayName.length;
        return media;
    }

    /* ORDENAÇÃO, SOMA E MÉDIA FORA DAS FUNÇÕES
    // ORDENAÇÃO DO MENOR PARA O MAIOR
    for (let vezes = 1; vezes < (listaNumeros.length); vezes++) {
        for (let i = 0; i < (listaNumeros.length-1); i++) {
            if (listaNumeros[i] > listaNumeros[i+1]) {
                let temp = listaNumeros[i];
                listaNumeros[i] = listaNumeros[i+1];
                listaNumeros[i+1] = temp;
            }
        }
    }

    // SOMA
    let soma = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        soma += listaNumeros[i];
    }
 
    // MÉDIA
    let media = soma / listaNumeros.length;
    */

    if (listaNumeros.length == 0) {
        alert('Você precisa adicionar ao menos um número antes de finalizar.')
    } else {
        let analise = document.querySelector('div#analise');
        analise.innerHTML = '';

        let pTotalNumeros = document.createElement('p');
        let pMaiorValor = document.createElement('p');
        let pMenorValor = document.createElement('p');
        let pSomaValores = document.createElement('p');
        let pMediaValores = document.createElement('p');
        analise.appendChild(pTotalNumeros);
        analise.appendChild(pMenorValor);
        analise.appendChild(pMaiorValor);
        analise.appendChild(pSomaValores);
        analise.appendChild(pMediaValores);
        
        ordenarArray(listaNumeros);
        pTotalNumeros.innerHTML = `Foram cadastrados <strong>${listaNumeros.length}</strong> números`;
        pMenorValor.innerHTML = `O menor número cadastrado foi o <strong>${listaNumeros[0]}<strong>`;
        pMaiorValor.innerHTML = `O maior número cadastrado foi o <strong>${listaNumeros[listaNumeros.length-1]}</strong>`;
        pSomaValores.innerHTML = `A soma dos valores é <strong>${somarArray(listaNumeros)}</strong>`;
        pMediaValores.innerHTML = `A média dos valores é <strong>${mediaArray(listaNumeros)}</strong>`;
    }
}

function limparDados() {
    let select = document.querySelector('select')
    select.innerHTML = '';
    analise.innerHTML = '';
    listaNumeros = [];
}
