module.exports = class SubscriptionHandler {
  static subscribers = [];

  static addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  static removeSubscriber(subscriberToRemove) {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber.email !== subscriberToRemove.email
    );
  }

  static notify(complexQuestion, message) {
    for (let subscriber of this.subscribers) {
      if (subscriber.categories.includes(complexQuestion.category)) {
        subscriber.listen(complexQuestion, message);
      }
    }
  }
};
