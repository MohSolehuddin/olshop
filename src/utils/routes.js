const {
  data,
  handleLogin,
  notFound,
  Category,
  updatePw,
} = require("./handler");

const routes = {
  "/login": handleLogin,
  "/addPassword": data,
  "/deletePassword": data,
  "/getPasswords": data,
  "/category": Category,
  "/update": updatePw,
};
module.exports = { routes, notFound };
