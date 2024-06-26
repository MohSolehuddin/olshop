let MongoAtlas = require("../../utils/db");

export default async function products(req, res) {
  global.db = new MongoAtlas(process.env.MONGODB_URI, "portofolio");
  await global.db.connect();
  if (req.method == "GET") {
    let productData = await global.db.getData("products", {});
    res.status(200).json(productData);
  }
  setTimeout(() => {
    global.db.close();
  }, 1000);
}
