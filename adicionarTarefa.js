import BotaoConclui from './components/concluirTarefa.js';
import BotaoDeleta from './components/deletarTarefa.js';


const adicionarTarrefa = document.querySelector('[data-form-button]');

const criarTarefa = (e) => {
    e.preventDefault();

    const input = document.querySelector('[data-form-input');
    const lista = document.querySelector('[data-list]');

    const valor = input.value;

    if (!valor || valor.trim() == '') return;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());

    lista.appendChild(tarefa);

    input.value = '';
}

adicionarTarrefa.addEventListener('click', criarTarefa);
