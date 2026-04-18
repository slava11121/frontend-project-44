import runGame from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getQuestionAndAnswer = () => {
  const number = getRandomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [String(number), correctAnswer];
};

const runEvenGame = () => {
  runGame(gameRule, getQuestionAndAnswer);
};

export default runEvenGame;