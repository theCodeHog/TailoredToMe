const DropdownQuestion = require("../ComplexQuestion/Questions/DropdownQuestion");
const MultipleChoiceQuestion = require("../ComplexQuestion/Questions/MultipleChoiceQuestion");
const SingleChoiceQuestion = require("../ComplexQuestion/Questions/SingleChoiceQuestion");

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
