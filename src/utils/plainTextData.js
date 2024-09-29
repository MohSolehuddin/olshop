const { encr, decr, mySHA3 } = require("./crypto");

//function menampilkan data json
async function plainTextData(title) {
  try {
    let decryptedData = global.dataPasswords
      .filter(
        (password) => password.title.toUpperCase() === title.toUpperCase()
      )
      .map((password) => {
        let result = {};
        for (let prop in password) {
          if (password.hasOwnProperty(prop)) {
            if (prop != "id") {
              if (prop != "title") {
                result[prop] = decr(
                  password[prop].encryptedData,
                  global.username,
                  global.password,
                  password[prop].iv
                );
              }
            } else {
              result[prop] =
                result["Password"] !== ""
                  ? password[prop]
                  : "username/password salah";
            }
          }
        }
        return result;
      });
    let obj = {};
    obj["passwords"] = decryptedData;
    return {
      success: true,
      message: "Successully decrypting data",
      data: obj,
    };
  } catch (e) {
    return {
      success: false,
      message: `Failed decrypting data, ${e}`,
      data: null,
    };
  }
}

module.exports = plainTextData;
