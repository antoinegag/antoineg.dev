require("dotenv").config();

const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BACKEND_URL": prod ? "/" : "",
  "process.env.GTAG_ID": process.env.GTAG_ID,
};
