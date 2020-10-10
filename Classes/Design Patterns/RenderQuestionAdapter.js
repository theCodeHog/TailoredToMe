module.exports = class RenderQuestionAdapter {
  static translateList = {
    DropdownQuestion: "renderDropdownQuestion",
    MultipleChoiceQuestion: "renderMultipleChoiceQuestion",
    SingleChoiceQuestion: "renderSingleChoiceQuestion",
  };

  static render(object) {
    let className = object.constructor.name;
    try {
      return object[this.translateList[className]]();
    } catch (e) {
      throw new Error("Could not adapt this type of object!");
    }
  }
};
