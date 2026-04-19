import runGame from '../index.js'

const gameRule = 'Find the greatest common divisor of given numbers.'

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  let a = firstNumber
  let b = secondNumber

  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }

  return a
}

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber()
  const secondNumber = getRandomNumber()
  const question = `${firstNumber} ${secondNumber}`
  const correctAnswer = String(getGreatestCommonDivisor(firstNumber, secondNumber))

  return [question, correctAnswer]
}

const runGcdGame = () => {
  runGame(gameRule, getQuestionAndAnswer)
}

export default runGcdGame
