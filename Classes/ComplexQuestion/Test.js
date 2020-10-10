module.exports = class Test {
  constructor(name, description, possibleResults) {
    this.name = name;
    this.description = description;
    this.possibleResults = possibleResults;
  }

  renderName() {
    console.log("Rendering the name of the test: " + this.name);
  }

  renderDescription() {
    console.log("Rendering the description of the test: " + this.description);
  }

  renderPossibleResults() {
    console.log(
      "Rendering the possible results of the test: " + this.possibleResults
    );
  }
};
