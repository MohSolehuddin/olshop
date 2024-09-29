const { encr } = require("./crypto");

async function addData(newData) {
  newData.id = new Date().getTime();

  const encryptedData = { ...newData };

  Object.keys(encryptedData).forEach((property) => {
    if (property !== "title" && property !== "id") {
      if (encryptedData[property].trim() !== "") {
        encryptedData[property] = encr(
          `${encryptedData[property]}`,
          global.username,
          global.password
        );
      } else {
        delete encryptedData[property];
      }
    }
  });

  if (!global.db.connected) {
    return { success: false, message: "Please connect to database" };
  }
  let data = await global.db.addData("passwords", encryptedData);
  if (!data.success) {
    return data;
  }

  global.dataPasswords.push(encryptedData);
  return data;
}

module.exports = addData;
