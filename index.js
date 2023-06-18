const questions = [
    "1.- Qual é seu nome: ",
    "2.- Que aprendeu Hoje: ",
    "3.- Quantas pessoas ajudou hoje: ",
    "4.- Gosta de aprender a dsenvolver: "
]
const ask = (index=0)=>{
    process.stdout.write('\n' + questions[index])
}

ask()

const answers = []

process.stdin.on("data",data =>{
    answers.push(data.toString().trim()+'\n')
    if (answers.length < questions.length)
        ask(answers.length)
    else{
        process.stdout.write('\n\n' + answers)
        process.exit()
    }
})