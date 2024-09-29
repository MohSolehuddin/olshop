const fs = require("fs");
const querystring = require("querystring");
const plainTextData = require("./plainTextData");
const addData = require("./addData");
const deleteData = require("./deleteData");
const updateData = require("./updateData");
const { mySHA3, decr } = require("./crypto");

//API data
function data(req, res) {
  const { method, url } = req;
  if (method === "POST" && url === "/addPassword") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      let data = JSON.parse(body);
      let result = await addData(data);
      if (!result.success) {
        res.writeHead(302, { "Content-Type": "text/json" });
        res.write(JSON.stringify(result));
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/json" });
        res.write(JSON.stringify(result));
        res.end();
      }
    });
  }

  if (method === "DELETE" && url === "/deletePassword") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const data = JSON.parse(body);
      const { id } = data;
      let result = await deleteData(id);

      if (!result.success) {
        res.writeHead(200, { "Content-Type": "text/json" });
        res.write(JSON.stringify(result));
        res.end();
      }
      if (result.success) {
        res.writeHead(200, { "Content-Type": "text/json" });
        res.write(JSON.stringify(result));
        res.end();
      }
    });
  }

  if (method === "POST" && url === "/getPasswords") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      let data = JSON.parse(body);
      console.log(data);
      let result = await plainTextData(data.title);
      if (!result.success) {
        res.writeHead(302, { "Content-Type": "text/json" });
        res.write(JSON.stringify(result.data));
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/json" });
        res.write(JSON.stringify(result.data));
        res.end();
      }
    });
  }
}
async function Category(req, res) {
  if (global.db.connected) {
    let data = { passwords: global.dataPasswords };
    const uniqueTitles = data.passwords
      .map((item) => item.title)
      .filter((value, index, self) => self.indexOf(value) === index);

    // Cetak hasil
    let dataJson = JSON.stringify({ titles: uniqueTitles }, null, 2);
    res.writeHead(200, { "Content-Type": "text/json" });
    res.write(dataJson);
    res.end();
  }
}
//update password
async function updatePw(req, res) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", async () => {
    const data = JSON.parse(body);
    let result = await updateData(data);

    if (!result.success) {
      res.writeHead(200, { "Content-Type": "text/json" });
      res.write(JSON.stringify(result));
      res.end();
    } else {
      res.writeHead(302, { "Content-Type": "text/json" });
      res.write(JSON.stringify(result));
      res.end();
    }
  });
}

// Fungsi untuk menangani request yang tidak dikenali
function notFound(req, res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.write("Guhhh, Mak tager napak deknak ben, tadek url lah, belih belih");
  res.end();
}
// Fungsi untuk menangani request ke halaman utama

function handleLogin(req, res) {
  if (req.method === "POST" && req.url === "/login") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const data = querystring.parse(body);
      global.username = mySHA3(data.username);
      global.password = mySHA3(data.password);

      global.sampleDataForLogin = global.dataPasswords[0];
      if (global.sampleDataForLogin !== undefined) {
        global.isLogin = decr(
          sampleDataForLogin.Password.encryptedData,
          global.username,
          global.password,
          sampleDataForLogin.Password.iv
        );
        if (isLogin !== undefined) {
          res.statusCode = 302;
          res.setHeader("Location", "/home").end();
          console.log("Login success");
        } else {
          res
            .setHeader("Content-Type", "application/jsom")
            .write({ success: true, message: "Login successfully" });
          res.end();
          console.log("username atau password salah");
        }
      } else {
        res.statusCode = 302;
        res.setHeader("Location", "/home").end();
        console.log("Create account!!!");
      }
    });
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
}
module.exports = {
  data,
  handleLogin,
  notFound,
  Category,
  updatePw,
};
