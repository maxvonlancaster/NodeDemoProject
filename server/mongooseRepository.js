const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/tests", { useNewUrlParser: true });
const testSchema = new Schema({
  TestName: String,
  TestTExt: String
});

const collectionSchema = new Schema({
  Question: String,
  Options: [{ type: String }],
  Correct: String
});

class TestRepository {
  async ReadAll() {
    const Test = mongoose.model("test", testSchema);

    let result;
    result = await Test.find({});

    return result;
  }

  async CreateTest(collectionName, question, options, correct) {
    const Collection = mongoose.model(collectionName, collectionSchema);
    const test = new collectionSchema({
      Question: question,
      Options: options,
      Correct: correct
    });
    test.save();
  }

  async ReadTests(collectionName) {
    const Collection = mongoose.model(collectionName, collectionSchema);
    let result;
    result = await Collection.find({});

    return result;
  }

  async GetTest(collectionName, testId) {
    const Collection = mongoose.model(collectionName, collectionSchema);
    let result;
  }

  async UpdateTest(collectionName) {
    const Collection = mongoose.model(collectionName, collectionSchema);
  }

  async DeleteTest(collectionName) {
    const Collection = mongoose.model(collectionName, collectionSchema);
  }
}

module.exports = TestRepository;
