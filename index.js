const res = document.getElementsByClassName("result")[0]
const hist = document.getElementById("history")
    /*
    TODO:

    Animações na hora de mostrar o "stdout", e animações de inicialização

    */

const form = document.forms.namedItem("cmd").addEventListener("submit", ((e) => {
    e.preventDefault()
    try {
        commands[e.target.command.value](e)

    } catch (error) {
        res.innerHTML += `<br/>bash: ${e.target.command.value}: comando não encontrado <br/>`
        res.innerHTML += "Comando desconhecido, use 'help' para acessar a lista de comandos <br/>"
        e.target.command.value = ""
        window.scrollTo(0, document.body.scrollHeight);

    }
}))

const acceptedCommands = {
    handleHelp(e) {
        res.innerHTML += "<br/><div class=blue>" + e.target.command.value + "<div/> <br/>"

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
            },
            {
                name: "contacts",
                description: "Exibe minhas informações de contato pra vc me stalkear (ou contratar quem sabe né?? NÉ????)"
            }

        ]

        commandsDesc.map((command) => {
            res.innerHTML += ` • ${command.name}  -  ${command.description}`

        })
        window.scrollTo(0, document.body.scrollHeight);


        e.target.command.value = ""

    },
    handlePwd(e) {
        res.innerHTML += "<br/><div class=blue>" + e.target.command.value + "<div/> <br/>"
        res.innerHTML += "~/ <br/>"
        e.target.command.value = ""
        window.scrollTo(0, document.body.scrollHeight);


    },
    handleCls(e) {
        res.innerHTML = ""
        e.target.command.value = ""
    },
    handleWhoAmI(e) {
        //Formatar melhor a saída de texto
        res.innerHTML += "<br/><div class=blue>" + e.target.command.value + "<div/> <br/>"
        response = [
            "Quem você não faço a mínima ideia, mas podemos nos conhecer, use o comando 'contacts' para isso",
            "mas quem eu sou (trocadilho ruim com o whoami) é o que você terá à seguir:",
            "Brasileiro, solteiro, 21 anos de idade, apaixonado desde sempre por tecnologia e computação, enquanto os meus colegas jogavam bola",
            "eu passava o dia todo jogando Minecraft, jogos de RPG, MMORPG e sempre fiquei em dúvidas sobre como eles funcionavam, foi aí que aos 12 anos",
            "pesquisei a linguagem java e... não consegui passar do 'hello world', desanimei de programação assim como outras atividades, como violão por, exemplo.",
            "O tempo foi passando e eu fui voltando a ter o desejo de aprender programação, e várias outras coisas que havia tentado, mas devido a inconstância",
            "não havia conseguido nada, começando no violão fui me dedicando e posteriormente no programa de Jovem Aprendiz onde pude exercer a atividade de",
            "auxiliar administrativo, mexendo nas planilhas do Excel conheci o VBA e que baque quando consegui fazer algumas automações simples com o VBA",
            "depois disso me aventurei no python através do livro 'Curso intensivo de python do Eric Matthes' passei do 'hello world' e decolei",
            "até hoje venho me aprofundando em vários temas desde DevOPS, arquitetura até ML e IA",
            "Atualmente consigo tocar violão, cavaquinho, pandeiro, bateria e teclado (como? sendo péssimo em todos!!! XD) e tenho desenvolvido principalmente",
            "Em python, Typescript, C++ e Ruby. Estou num momento no qual me julgo preparado para participar desse mercado tão disputado e feroz da computação",
            "e espero sinceramente ter a minha 1° vaga logo, logo. Obrigado pela atenção!"
        ]

        response.map((line) => {
            res.innerHTML += line + "<br/>"
        })

        e.target.command.value = ""

        window.scrollTo(0, document.body.scrollHeight);
    },
    handleContacts(e) {
        //Formatar melhor saida contando os espaços entre o nome o "-" e o url
        res.innerHTML += "<br/><div class=blue>" + e.target.command.value + "<div/> <br/>"

        const socialMedia = [{
                name: "Instagram",
                url: "https://www.instagram.com/elias_olie/"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/eliasolie/"
            },
            {
                name: "Github",
                url: "https://github.com/EliasOlie"
            },
            {
                name: "Email",
                url: "contato.eliasolie@gmail.com"
            }
        ]

        socialMedia.map((entry) => {
            if (socialMedia.indexOf(entry) !== socialMedia.length - 1) {
                res.innerHTML += ` • ${entry.name}    -    <a href=${entry.url}>${entry.url}<a/> <br/>`
            } else {
                res.innerHTML += ` • ${entry.name}    -    ${entry.url}`
            }


            e.target.command.value = ""

            window.scrollTo(0, document.body.scrollHeight);

        })

    }

}

const commands = {
    "help": acceptedCommands.handleHelp,
    "pwd": acceptedCommands.handlePwd,
    "cls": acceptedCommands.handleCls,
    "whoami": acceptedCommands.handleWhoAmI,
    "contacts": acceptedCommands.handleContacts


}

//Startup session

window.onload = ((e) => {
    const results = document.getElementById("console")
    results.style.display = "none"

    let consoleMessages = [
        "<div class= green>[OK]<div/><div class=white> Finished Create System Users.<div/>",
        "<div class = white>Starting Create Static Device Nodes in /dev... <div/>",
        "<div class= green>[OK]<div/><div class=white> Finished Create Static Device Nodes in /dev.<div/>",
        "<div class= green>[OK]<div/><div class=white> Started Entropy Daemon based on the HAVEGE algorithm.<div/>",
        "<div class = white>Starting Journal Service... <div/>",
        "<div class = white>Starting Rule-based Manager for Device Events and Files... <div/>",
        "<div class= green>[OK]<div/><div class=white> Finished Apply Kernel Variables.<div/>",
        "<div class= green>[OK]<div/><div class=white> Started Journal Service.<div/>",
        "<div class = white>Starting Flush Journal to Persistent Storage... <div/>",
        "<div class= green>[OK]<div/><div class=white> Finished Flush Journal to Persistent Storage.<div/>",
        "<div class= green>[OK]<div/><div class=white> Started Rule-based Manager for Device Events and Files.<div/>",
        "<div class= green>[OK]<div/><div class=white> Started LVMZ metadata daemon.<div/>",
        "<div class = white>Starting Network Service... <div/>",
        "<div class= green>[OK]<div/><div class=white> Started Network Service.<div/>",
        "<div class = white>Starting Wait for Network to be Configured... <div/>",
        "<div class= green>[OK]<div/><div class=white> Finished Load/Save Random Seed.<div/>",
        "<div class=white>[ 12.472423] snd_hda_intel 0000:00:05.0: CORB reset timeout#1, CORBRP = 0 <div/>",
        "<div class = white>Starting Wait for udev To Complete Device Initialization... <div/>",
        "<div class= green>[OK]<div/><div class=white> Finished Wait for udev To Complete Device Initialization.<div/>",
        "<div class= green>[OK]<div/><div class=white> Finished Monitoring of LVMZ mirrors, etc. using dmeventd or progress polling.<div/>",
        "<div class= green>[OK]<div/><div class=white> Reached target Local File Systems (Pre).<div/>",
        "<div class=white>Mounting Temporary /etc/pacman.d/gnupg directory... <div/>",
        "<div class= green>[OK]<div/><div class=white> Mounted Temporary /etc/pacman.d/gnupg directory.<div/>",
        "<div class= green>[OK]<div/><div class=white> Reached target Local File Systems.<div/>",
        "<div class = white>Starting Rebuild Dynamic Linker Cache... <div/>",
    ]

    const startup = document.getElementById("startup")
    consoleMessages.map((message) => {
        setTimeout(() => {
            startup.innerHTML += message
            window.scrollTo(0, document.body.scrollHeight);
        }, Math.floor(Math.random() * (2000 - 1000)) + 1000)
    })

    setTimeout(() => {
        startup.style.display = "none"
        results.style.display = "block"
        res.innerHTML += "<div class=white>Dica: use 'help' para obter a lista de comandos<div/>"
        document.getElementById("cmd-input").focus()

    }, 3000)
})