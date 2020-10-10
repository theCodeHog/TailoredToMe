const Question = require("./Question");

module.exports = class DropdownQuestion extends Question {
  constructor(name, answers) {
    super(name, answers);
  }

  renderDropdownQuestion() {
    console.log(
      "We are now rendering what will be a dropdownQuestion with a dropdown menu: " +
        this.name
    );
    this.answers.map((answer) => {
      console.log("Possible Answer: " + answer.scoreText);
    });
  }
};
