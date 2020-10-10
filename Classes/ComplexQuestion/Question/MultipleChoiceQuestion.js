const Question = require("./Question");

module.exports = class MultipleChoiceQuestion extends Question {
  constructor(name, answers) {
    super(name, answers);
  }

  renderMultipleChoiceQuestion() {
    console.log(
      "We are now rendering what will be a multipleChoiceQuestion with checkboxes: " +
        this.name
    );
    this.answers.map((answer) => {
      console.log("Possible Answer: " + answer.scoreText);
    });
  }
};
