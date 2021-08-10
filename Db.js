const mongoose = require("mongoose");

const ConnectDb = async () => {
  try {
    const res = mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb Connnected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnectDb;
