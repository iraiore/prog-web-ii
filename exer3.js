const readlineSync = require('readline-sync');

//lista de alunos
let listaAlunos=[];
let choice;
let controlWhile = true

while (controlWhile){
    choice = PrintMenu();

    switch (choice){
        case 1:
            cadastrarAluno();
        break;
        case 2:
            mediaAluno();    
        break;
        case 3:
            controlWhile = false;
        break;
    }
}


//CALCULAR MÉDIA
function mediaAluno(){
    //verificando se a lista esta vazia
    if(listaAlunos.length === 0){
        console.log("A lista de alunos esta vazia!");
        return;
    }

    for(let aluno of listaAlunos){
        let mediaAluno = aluno.notas.reduce((acc, notas) => acc + notas, 0) / aluno.notas.length;
        aluno.media = mediaAluno;

        let situacao;
        if(mediaAluno > 7){
            situacao = "APROVADO";
        }else{
            if(mediaAluno < 7){
                situacao = "REPROVADO";
            }else{
                situacao =  "RECUPERACAO"
            }
        }
        aluno.situacao = situacao;
    }

    console.log(listaAlunos);
    console.log("\n");
}

//ADD ALUNO A LISTA
function cadastrarAluno(){

    const nomeAluno = readlineSync.question("Digite o nome do aluno: ");

    let notasAluno = [];
    for(let i=0; i<3; i++){
        notasAluno[i] = parseFloat(readlineSync.question(`Digite a nota ${i+1}: `))
    }
        console.log("\n");
    let aluno = {
        nome: nomeAluno,
        notas:notasAluno
    }

    listaAlunos.push(aluno);
    console.log(`Aluno ${nomeAluno} cadastrado com sucesso!`)
    console.log("\n");
};

//MENU
function PrintMenu(){
    console.log("****DIGITE UMA OPÇÃO NO MENU****");
    console.log("1 - Entrar com o nome e notas de um aluno");
    console.log("2 - Verificar a média dos alunos");
    console.log("3 - Sair");

    let choice = parseInt(readlineSync.question(">"));
    console.clear();
    return choice;
}