const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

class MongoAtlas {
  constructor(uri, dbName) {
    this.uri = uri;
    this.dbName = dbName;
    this.client = new MongoClient(this.uri);
    this.connected = false;
  }

  async connect() {
    try {
      await this.client.connect();
      console.log("Connected successfully to MongoDB Atlas");
      this.connected = true;
    } catch (error) {
      console.error("Connection to database failed");
      this.connected = false;
    }
  }

  async getData(collection, query) {
    try {
      const dbCollection = this.client.db(this.dbName).collection(collection);
      const data = await dbCollection.find(query).toArray();
      console.log("get data success");
      return data;
    } catch (error) {
      console.error("Failed to getting data");
      throw error;
    }
  }

  async deleteData(collection, id) {
    try {
      const dbCollection = this.client.db(this.dbName).collection(collection);
      const result = await dbCollection.deleteMany({ id });
      console.log("Deleted documents:", result.deletedCount);
      return { success: true, message: "Deleting data successfully" };
    } catch (error) {
      console.error("Error deleting data");
      return { success: false, message: `Error deleting data,` };
    }
  }

  async updateData(collection, id, newData) {
    try {
      const dbCollection = this.client.db(this.dbName).collection(collection);
      await dbCollection.updateMany({ id }, { $set: newData });
      return { success: true, message: "Successfully Updating a data" };
    } catch (error) {
      return { success: false, message: "Error Updating data" };
    }
  }

  async addData(collection, data) {
    try {
      const dbCollection = this.client.db(this.dbName).collection(collection);
      const result = await dbCollection.insertOne(data);
      console.log("Added document:", result.insertedId);
      return { success: true, message: "Successfully adding a data" };
    } catch (error) {
      return { success: false, message: `Error adding data, ${error}` };
    }
  }
  async close() {
    return this.client.close();
  }
}
module.exports = MongoAtlas;
