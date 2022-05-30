const res = document.getElementsByClassName("result")[0]

const form = document.forms.namedItem("cmd").addEventListener("submit", ((e) => {
    e.preventDefault()
    try {
        commands[e.target.command.value](e)

    } catch (error) {
        res.style.display === "none" ? res.style.display = "block" : res.style.display = "block"
        res.innerHTML += "Comando desconhecido, use 'help' para acessar a lista de comandos <br/>"
        e.target.command.value = ""
    }
}))

const acceptedCommands = {
    handleHelp(e) {
        res.style.display === "none" ? res.style.display = "block" : res.style.display = "block"
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
            }

        ]

        commandsDesc.map((command) => {
            res.innerHTML += ` • ${command.name}  -  ${command.description}`

        })

        e.target.command.value = ""

    },
    handlePwd(e) {
        res.style.display === "none" ? res.style.display = "block" : res.style.display = "block"
        res.innerHTML += "~/ <br/>"
        e.target.command.value = ""

    },
    handleCls(e) {
        res.innerHTML = ""
        e.target.command.value = ""
    }

}

const commands = {
    "help": acceptedCommands.handleHelp,
    "pwd": acceptedCommands.handlePwd,
    "cls": acceptedCommands.handleCls,
}