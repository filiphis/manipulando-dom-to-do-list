// Esse type any foi gambiarra kkkk
const concluirTarefa = (e) => {
    const botaoConclui = e.target;

    const tarefa = botaoConclui.parentElement;

    tarefa.classList.toggle('done');

    return botaoConclui;
}

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.textContent = 'Concluir';
    botaoConclui.classList.add('check-button');

    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
}

export default BotaoConclui;