require("dotenv").config;
const { DbConection } = require("./src/database/db");
const { server } = require("./src/app");
DbConection()
  .then(() => {
    server.listen(process.env.PORT || 4000, () => {
      console.log(`Server Running on http://localhost:${process.env.PORT} For TestExamCit`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });
