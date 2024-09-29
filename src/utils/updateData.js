const fs = require("fs");
const { encr } = require("./crypto");

// function untuk update data berdasarkan id
async function updateData(newData) {
  if (!global.db.connected) {
    return { success: false, message: "Please connect to database" };
  }

  newData.id = Number(newData.id);
  const index = global.dataPasswords.findIndex((data) => data.id == newData.id);

  if (index === -1) {
    return { success: false, message: "Data not found" };
  }

  // Enkripsi data sensitif secara dinamis
  Object.keys(newData).forEach((property) => {
    // Lewati id
    if (property !== "title" && property !== "id") {
      // enkripsi hanya jika ada data
      if (newData[property].trim() !== "") {
        // Enkripsi nilai properti
        newData[property] = encr(
          `${newData[property]}`,
          global.username,
          global.password
        );
      } else {
        delete newData[property];
      }
    }
  });

  let result = await global.db.updateData("passwords", newData.id, newData);
  console.log(index);
  global.dataPasswords.splice(index, 1, newData);
  return result;
}
module.exports = updateData;
