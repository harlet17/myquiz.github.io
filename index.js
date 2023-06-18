const questions = [
    "1.- Qual é seu nome: ",
    "2.- Qual é sua idade: "
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