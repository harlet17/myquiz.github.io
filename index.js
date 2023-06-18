const questions = [
    "1.- O Que aprendi hoje?: ",
    "1.- Quantas pessoas ajudei hoje?: "
]
const ask = (index=0)=>{
    process.stdout.write(questions[index] + '\n')
}

ask()