import runGame from '../index.js';

const gameRule = 'What number is missing in the progression?';
const progressionLength = 10;

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const buildProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);

  const progression = buildProgression(start, step, progressionLength);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';

  return [progression.join(' '), correctAnswer];
};

const runProgressionGame = () => {
  runGame(gameRule, getQuestionAndAnswer);
};

export default runProgressionGame;