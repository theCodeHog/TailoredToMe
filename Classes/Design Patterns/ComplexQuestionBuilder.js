const ComplexQuestion = require("../ComplexQuestion/ComplexQuestion");
const QuestionFactory = require("./QuestionFactory");
const TestBuilder = require("../Design Patterns/TestBuilder");

module.exports = class ComplexQuestionBuilder {
  constructor() {
    this.questionProperties = {};
  }

  setName(name) {
    this.questionProperties.name = name;
    return this;
  }

  setColor(color) {
    this.questionProperties.color = color;
    return this;
  }

  setCategory(category) {
    this.questionProperties.category = category;
    return this;
  }

  setQuestions(questions) {
    this.questionProperties.questions = [];
    questions.map((question) => {
      this.questionProperties.questions.push(
        QuestionFactory.createQuestion(question.name, question.answers)
      );
    });
    return this;
  }

  setTests(tests) {
    this.questionProperties.tests = [];
    tests.map((test) => {
      this.questionProperties.tests.push(
        new TestBuilder()
          .setName(test.name)
          .setDescription(test.description)
          .setPossibleResults(test.possibleResults)
          .createTest()
      );
    });
    return this;
  }

  createComplexQuestion() {
    let p = this.questionProperties;
    return new ComplexQuestion(
      p.name,
      p.color,
      p.category,
      p.questions,
      p.tests
    );
  }
};
