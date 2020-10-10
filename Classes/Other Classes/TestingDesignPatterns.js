const ComplexQuestionBuilder = require("../Design Patterns/ComplexQuestionBuilder");

module.exports = class TestingDesignPatterns {
  constructor() {
    this.testingComplexQuestionBuilder(); //factory & builder
  }

  complexQuestion1 = {};

  testingComplexQuestionBuilder() {
    console.log(
      "CREATING A COMPLEX QUESTION USING FACTORY & BUILDER DESIGN PATTERNS"
    );
    console.log("------------------------------------------------------------");

    this.complexQuestion1 = new ComplexQuestionBuilder()
      .setName("How can I lower my blood pressure?")
      .setColor("red")
      .setCategory("Health")
      .setQuestions([
        {
          name: "Are you male or female?",
          answers: [
            { scorePoints: 3, scoreText: "Male" },
            { scorePoints: 1, scoreText: "Female" },
          ],
        },
        {
          name: "How old are you?",
          answers: [
            { scorePoints: 0, scoreText: "0-5" },
            { scorePoints: 1, scoreText: "6-12" },
            { scorePoints: 2, scoreText: "13-18" },
            { scorePoints: 3, scoreText: "19-24" },
            { scorePoints: 5, scoreText: "25-35" },
            { scorePoints: 6, scoreText: "36-45" },
            { scorePoints: 7, scoreText: "46-55" },
            { scorePoints: 8, scoreText: "56-65" },
            { scorePoints: 9, scoreText: "66-75" },
            { scorePoints: 10, scoreText: "76-85" },
            { scorePoints: 11, scoreText: "86-95" },
            { scorePoints: 12, scoreText: "95+" },
          ],
        },
        {
          name: "What are your favorite colors?",
          answers: [
            { scorePoints: 5, scoreText: "red" },
            { scorePoints: 0, scoreText: "blue" },
            { scorePoints: 4, scoreText: "yellow" },
            { scorePoints: 1, scoreText: "green" },
            { scorePoints: 2, scoreText: "purple" },
            { scorePoints: 3, scoreText: "orange" },
          ],
        },
      ])
      .setTests([
        {
          name: "test1",
          description: "You need to test the following: etc",
          possibleResults: ["res1", "res2", "res3"],
        },
        {
          name: "test2",
          description: "You need to test the following: etc",
          possibleResults: ["res1", "res2", "res3"],
        },
      ])
      .createComplexQuestion();
    console.log(this.complexQuestion1);
  }
};
