const res = document.getElementsByClassName("result")[0]

/*
TODO:

Animações na hora de mostrar o "stdout", e animações de inicialização

*/

const form = document.forms.namedItem("cmd").addEventListener("submit", ((e) => {
    e.preventDefault()
    try {
        commands[e.target.command.value](e)

    } catch (error) {
        res.style.display === "none" ? res.style.display = "block" : res.style.display = "block"
        res.innerHTML += `bash: ${e.target.command.value}: comando não encontrado <br/>`
        res.innerHTML += "Comando desconhecido, use 'help' para acessar a lista de comandos <br/>"
        e.target.command.value = ""
    }
}))

const acceptedCommands = {
    handleHelp(e) {
        res.style.display === "none" ? res.style.display = "block" : res.style.display = "block"
        res.innerHTML += e.target.command.value + "<br/>"
        const commandsDesc = [{
                name: "help",
                description: "mostra essas informações (dããã) <br/>"
            },
            {
                name: "pwd",
                description: "mostra aonde você se perdeu, no meu CV será???? <3 <br/>"
            },
            {
                name: "cls",
                description: "fiz caquita apaga tudo pfvr <br/>"
            },
            {
                name: "whoami",
                description: "Exibe informações sobre quem EU (Elias Olie) sou ;) <br/>"
            }

        ]

        commandsDesc.map((command) => {
            res.innerHTML += ` • ${command.name}  -  ${command.description}`

        })

        e.target.command.value = ""

    },
    handlePwd(e) {
        res.style.display === "none" ? res.style.display = "block" : res.style.display = "block"
        res.innerHTML += e.target.command.value + "<br/>"
        res.innerHTML += "~/ <br/>"
        e.target.command.value = ""

    },
    handleCls(e) {
        res.innerHTML = ""
        e.target.command.value = ""
    },
    handleWhoAmI(e) {
        //Formatar melhor a saída de texto
        res.style.display === "none" ? res.style.display = "block" : res.style.display = "block"
        res.innerHTML += e.target.command.value + "<br/>"

        response = [
            "Quem você não faço a mínima ideia, mas podemos nos conhecer, use o comando 'contacts (ainda não implementado)' para isso",
            "mas quem eu sou (trocadilho ruim com o whoami) é o que você terá à seguir:",
            "Brasileiro, solteiro, 21 anos de idade, apaixonado desde sempre por tecnologia e computação, enquanto os meus colegas jogavam bola",
            "eu passava o dia todo jogando Minecraft, jogos de RPG, MMORPG e sempre fiquei em dúvidas sobre como eles funcionavam, foi aí que aos 12 anos",
            "pesquisei a linguagem java e... não consegui passar do 'hello world', desanimei de programação assim como outras atividades, como violão por, exemplo.",
            "O tempo foi passando e eu fui voltando a ter o desejo de aprender programação, e várias outras coisas que havia tentado, mas devido a inconstância",
            "não havia conseguido nada, começando no violão fui me dedicando e posteriormente no programa de Jovem Aprendiz onde pude exercer a atividade de",
            "auxiliar administrativo, mexendo nas planilhas do Excel conheci o VBA e que baque quando consegui fazer algumas automações simples com o VBA",
            "Ddepois disso me aventurei no python através do livro 'Curso intensivo de python do Eric Matthes' passei do 'hello world' e decolei",
            "até hoje venho me aprofundando em vários temas desde DevOPS, arquitetura até ML e IA",
            "Atualmente consigo tocar violão, cavaquinho, pandeiro, bateria e teclado (como? sendo péssimo em todos!!! XD) e tenho desenvolvido principalmente",
            "Em python, Typescript, C++ e Ruby. Estou num momento no qual me julgo preparado para participar desse mercado tão disputado e feroz da computação",
            "e espero sinceramente ter a minha 1° vaga logo, logo. Obrigado pela atenção!"
        ]

        response.map((line) => {
            res.innerHTML += line + "<br/>"
        })


        e.target.command.value = ""

    }

}

const commands = {
    "help": acceptedCommands.handleHelp,
    "pwd": acceptedCommands.handlePwd,
    "cls": acceptedCommands.handleCls,
    "whoami": acceptedCommands.handleWhoAmI
}