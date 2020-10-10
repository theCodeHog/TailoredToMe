const Answer = require("./Answer");

module.exports = class Question {
  constructor(name, answers) {
    this.name = name;
    this.answers = this.createAnswer(answers);
  }

  createAnswer(answers) {
    let answerObjects = [];
    answers.map((answer) => {
      answerObjects.push(new Answer(answer.scorePoints, answer.scoreText));
    });
    return answerObjects;
  }
};
