const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

class MongoAtlas {
  constructor(uri, dbName) {
    this.uri = uri;
    this.dbName = dbName;
    this.client = new MongoClient(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  async connect() {
    try {
      await this.client.connect();
      console.log("Connected successfully to MongoDB Atlas");
    } catch (error) {
      console.error("Connection to database failed", error);
      throw error;
    }
  }

  async getData(collection, query) {
    try {
      const dbCollection = this.client.db(this.dbName).collection(collection);
      const data = await dbCollection.find(query).toArray();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Failed to fetch data", error);
      throw error;
    }
  }

  async deleteData(collection, id) {
    try {
      const dbCollection = this.client.db(this.dbName).collection(collection);
      // Implement actual delete functionality
      id = new ObjectId(id);
      const result = await dbCollection.deleteMany({ _id: id });
      console.log("Deleted documents:", result.deletedCount);
      return result;
    } catch (error) {
      console.error("Error deleting data", error);
      throw error;
    }
  }

  async updateData(collection) {
    try {
      const dbCollection = this.client.db(this.dbName).collection(collection);
      // Implement actual update functionality
      const result = await dbCollection.updateMany(
        {},
        { $set: { updatedField: true } }
      );
      console.log("Updated documents:", result.modifiedCount);
      return result;
    } catch (error) {
      console.error("Error updating data", error);
      throw error;
    }
  }

  async addData(collection, data) {
    try {
      const dbCollection = this.client.db(this.dbName).collection(collection);
      // Implement actual add functionality
      const result = await dbCollection.insertOne(data);
      console.log("Added document:", result.insertedId);
      return result;
    } catch (error) {
      console.error("Error adding data", error);
      throw error;
    }
  }
  async close() {
    return this.client.close();
  }
}
module.exports = MongoAtlas;

// (async () => {
//   global.atlas = new MongoAtlas(process.env.MONGODB_URI, "PwMg");
//   try {
//     await global.atlas.connect();
//     await global.atlas.addData("test", { hai: Math.random() });
//     await global.atlas.deleteData("test", "667601dedbcea42e186361ff");
//     global.coba = await global.atlas.getData("test", {});
//   } catch (error) {
//     console.log(error);
//   }
// })();
