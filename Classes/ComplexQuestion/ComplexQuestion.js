module.exports = class ComplexQuestion {
  name = "";
  color = "";
  category = "";
  questions = [];
  tests = [];

  constructor(name, color, category, questions, tests) {
    this.name = name;
    this.color = color;
    this.category = category;
    this.questions = questions;
    this.tests = tests;
  }

  calculateScore() {
    let totalScore = 0;
    this.answers.map((answer) => {
      totalScore += answer.scorePoints;
    });
    return totalScore;
  }
};
