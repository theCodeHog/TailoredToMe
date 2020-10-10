module.exports = class Subscriber {
  constructor(name, email, categories) {
    this.name = name;
    this.email = email;
    this.categories = categories;
  }

  listen(complexQuestion, message) {
    console.log(
      this.name +
        " is now receiving a notification that the following question has been added to the website: " +
        complexQuestion.name +
        ". Which was added to the category: " +
        complexQuestion.category
    );

    console.log("The message reads: " + message);
  }
};
