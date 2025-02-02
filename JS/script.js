function diaDaSemana(){
    var data = new Date()
    var mes = data.getMonth()
    var nome_mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    
    var semana = data.getDay()
    var diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

    var dia = data.getDate()
    
    document.getElementById("data").innerHTML = diasSemana[semana] + ", " + dia + " de " + nome_mes[mes]
}

function criarTarefa(){
    let entrada = document.getElementById("entrada").value;
    let tarefas = document.getElementById("tarefas");
    
    let novaTarefa = document.createElement('p');
    let novaDiv = document.createElement('div');
    let novaCaixa = document.createElement('input');
    
    novaDiv.classList.add('todo');
    novaCaixa.type = 'checkbox';
    novaTarefa.textContent = entrada;
    
    novaDiv.appendChild(novaCaixa);
    novaDiv.appendChild(novaTarefa);
    
    novaDiv.style.backgroundColor = '#a6a6a6';
    novaDiv.style.borderRadius = '5px';
    novaDiv.style.display = 'flex';
    novaDiv.style.height = '40px';
    novaDiv.style.alignItems = 'center';
    novaDiv.style.gap = '5px'
    novaDiv.style.opacity = '0.6'
    novaDiv.style.marginBottom = '8px'

    novaCaixa.style.marginLeft = '5px'
    novaCaixa.style.height = '16px'
    novaCaixa.style.width = '16px'

    tarefas.appendChild(novaDiv);
    //<div><input><p>"Entrada"</p><img></div>
}

function excluirTarefa(){
    
    //Ao clicar na <img> exclui aquela tarefa em especifico
}

window.onload = diaDaSemana();