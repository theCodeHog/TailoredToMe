const Question = require("./Question");

module.exports = class SingleChoiceQuestion extends Question {
  constructor(name, answers) {
    super(name, answers);
  }

  renderSingleChoiceQuestion() {
    console.log(
      "We are now rendering what will be a singleChoiceQuestion with radio buttons: " +
        this.name
    );
    this.answers.map((answer) => {
      console.log("Possible Answer: " + answer.scoreText);
    });
  }
};
