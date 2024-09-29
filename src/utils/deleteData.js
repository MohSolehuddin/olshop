async function deleteData(id) {
  const index = global.dataPasswords.findIndex((data) => data.id == Number(id));

  let resultDeletingData = await global.db.deleteData("passwords", Number(id));
  if (!resultDeletingData.success) {
    return { success: false, message: "Data is not found" };
  }

  if (!global.db.connected) {
    return resultDeletingData;
  }
  global.dataPasswords.splice(index, 1);
  return resultDeletingData;
}

module.exports = deleteData;
