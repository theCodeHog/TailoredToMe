const DropdownQuestion = require("../ComplexQuestion/Question/DropdownQuestion");
const MultipleChoiceQuestion = require("../ComplexQuestion/Question/MultipleChoiceQuestion");
const SingleChoiceQuestion = require("../ComplexQuestion/Question/SingleChoiceQuestion");

module.exports = class QuestionFactory {
  static createQuestion(name, answers) {
    if (answers.length > 6) {
      return new DropdownQuestion(name, answers);
    }
    if (answers.length > 2) {
      return new MultipleChoiceQuestion(name, answers);
    }
    return new SingleChoiceQuestion(name, answers);
  }
};
