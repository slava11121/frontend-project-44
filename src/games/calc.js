import runGame from '../index.js'

const gameRule = 'What is the result of the expression?'

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operators.length)

  return operators[randomIndex]
}

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber
    case '-':
      return firstNumber - secondNumber
    case '*':
      return firstNumber * secondNumber
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber()
  const secondNumber = getRandomNumber()
  const operator = getRandomOperator()
  const question = `${firstNumber} ${operator} ${secondNumber}`
  const correctAnswer = String(calculate(firstNumber, secondNumber, operator))

  return [question, correctAnswer]
}

const runCalcGame = () => {
  runGame(gameRule, getQuestionAndAnswer)
}

export default runCalcGame
