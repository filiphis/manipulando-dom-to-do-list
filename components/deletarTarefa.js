// Esse type any foi gambiarra kkkk
const deletarTarefa = (e) => {
    const botaoDeleta = e.target;

    const tarefa = botaoDeleta.parentElement;

    tarefa.remove();

    return botaoDeleta;
}

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');

    botaoDeleta.textContent = 'Deletar';
    botaoDeleta.classList.add('delete-button');

    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}

export default BotaoDeleta;