import runGame from '../index.js'

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min

const isPrime = (number) => {
  if (number < 2) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

const getQuestionAndAnswer = () => {
  const number = getRandomNumber()
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return [String(number), correctAnswer]
}

const runPrimeGame = () => {
  runGame(gameRule, getQuestionAndAnswer)
}

export default runPrimeGame
