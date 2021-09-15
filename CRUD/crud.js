function criarTd(linha, nomeTexto)
{
    var td = document.createElement("td");
     td.appendChild(document.createTextNode(nomeTexto));
     linha.appendChild(td);
}

function excluirLinha()
{
    var linhaRemoverBotao = this.getAttribute("linharemover");
    document.getElementById(linhaRemoverBotao).remove();
}

function editarLinha()
{
    //implementar
}

function adicionarLinha()
{
    var inputNome = document.getElementById("nome");
    var inputDocumento = document.getElementById("documento");
    var inputTelefone = document.getElementById("telefone");
    var select = document.getElementById("estados");

    var nome = inputNome.value;
    var documento = inputDocumento.value;
    var telefone = inputTelefone.value;
    var estadoSelecionado = select.options[select.selectedIndex].value;

    var mensagemErro = "";

    if(nome == "" || documento == "" || telefone == "")
    {
        mensagemErro = "É obrigatorio preencher os campos";
    }

    if(mensagemErro == "" && !isNaN(nome))
    {
        mensagemErro = "Por favor coloque letras no nome";
    }

    if(mensagemErro == "" && nome.length > 60)
    {
        mensagemErro = "Você pode colocar até 60 letras";
    }
    
    if(mensagemErro == "" && estadoSelecionado == "...")
    {
        mensagemErro = "por favor selecione um estado";
    }

    if(mensagemErro == "")
    {
        var tabela = document.getElementById("corpoTabela");
        var numerodelinhas = tabela.rows.length + 1;

        var tr = document.createElement("tr");
        tr.setAttribute("id", "linha" + numerodelinhas);

        criarTd(tr, nome);

        criarTd(tr, documento);

        criarTd(tr, telefone);

        criarTd(tr, estadoSelecionado);

        var botao = document.createElement("button");
        botao.appendChild(document.createTextNode("Excluir"));
        botao.setAttribute("linharemover", "linha" + numerodelinhas);
        botao.addEventListener("click", excluirLinha);
        var td = document.createElement("td");
        td.appendChild(botao);
        tr.appendChild(td);

        var Editar = document.createElement("button");
        Editar.appendChild(document.createTextNode("Editar"));
        Editar.setAttribute("id", "botaoDeEditar" + numerodelinhas);
        Editar.addEventListener("click", editarLinha);
        var td = document.createElement("td");
        td.appendChild(Editar);
        tr.appendChild(td);

        tabela.appendChild(tr);

        inputNome.value = "";
        inputDocumento.value = "";
        inputTelefone.value = "";
        document.getElementById("estados").selectedIndex = "0";
    }
    else
    {
        alert(mensagemErro);                
    }
}