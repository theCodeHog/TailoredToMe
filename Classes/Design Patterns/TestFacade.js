module.exports = class TestFacade {
  static render(tests) {
    tests.map((test) => {
      test.renderName(), test.renderDescription(), test.renderPossibleResults();
    });
  }
};
