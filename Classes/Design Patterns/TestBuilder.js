const Test = require("../ComplexQuestion/Test");

module.exports = class TestBuilder {
  constructor() {
    this.testProperties = {};
  }

  setName(name) {
    this.testProperties.name = name;
    return this;
  }

  setDescription(description) {
    this.testProperties.description = description;
    return this;
  }

  setPossibleResults(possibleResults) {
    this.testProperties.possibleResults = possibleResults;
    return this;
  }

  createTest() {
    let p = this.testProperties;
    return new Test(p.name, p.description, p.possibleResults);
  }
};
