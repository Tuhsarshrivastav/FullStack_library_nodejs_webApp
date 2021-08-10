const mongosse = require("mongoose");

const authorSchema = new mongosse.Schema({
  name: {
    type: String,
    required: true,
  },
});
module.exports = mongosse.model("Author", authorSchema);
