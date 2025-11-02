
# BackEnd Project Professional Template
A clean and scalable backend architecture using **Node.js**, **Express.js**, and **MongoDB**
with built-in authentication, environment variables, and modular folder organization.

<hr>

## 🚀 Tech Stack

 Runtime               | Node.js 
 Server Framework      | Express.js 
 Database              | MongoDB + Mongoose
 Env Config            | dotenv
 Authentication        | JWT + Cookies 


## 📁 Folder Structure

│
├── src/ <br>
│ ├── constant/ # Database name <br>
│ ├── controllers/ # Business logic <br>
│ ├── database/ # Database & environment config <br>
│ ├── helpers/ # helpers Function <br>
│ ├── middlewares/ # middleware <br>
│ ├── models/ # Mongoose schemas <br>
│ ├── routes/ # Route definitions <br>
│ ├── utils/ # Helpers <br>
│ ├── validation/ # Schema Validation <br>
│ └── app.js # Express app setup  <br>
├── index.js <br>
├── .env # Environment variables <br>
├── .gitignore <br>
├── package.json <br>
└── README.md <br>

## Install package.json
### Command-Line is 
npm init -y / npm install <br>

## Dependencies
### Here is a clean npm install command list for each package which i need to install to make a complete back-end project :-

1. axios           : npm install axios <br>
2. bcrypt          : npm install bcrypt <br>
3. bwip-js         : npm install bwip-js <br>
4. cloudinary      : npm install cloudinary <br>
5. cookie-parser   : npm install cookie-parser <br>
6. cors            : npm install cors <br>
7. dotenv          : npm install dotenv <br>
8. express         : npm install express <br>
9. joi             : npm install joi <br>
10. jsonwebtoken    : npm install jsonwebtoken <br>
11. mongodb         : npm install mongodb <br>
12. mongoos         : npm install mongoose <br>
13. multer          : npm install multer <br>
14. node-cache      : npm install node-cache <br>
14. nodemailer      : npm install nodemailer <br>
15. nodemon         : npm i nodemon <br>
16. qrcode          : npm install qrcode <br>
17. slugify         : npm install slugify <br>
18. socket.io       : npm install socket.io <br>
19. socket.io-client: npm install socket.io-client <br>
20. sslcommerz-lts  : npm install sslcommerz-lts [If you use sslcommerz] <br>




## .env file
PORT=5000/ or enything <br>
MONGO_URI=your_mongo_connection_string <br>

#### *api version <br>
BASE_URL = /api/v1 <br>

#### *nodeENV
NODE_ENV = development <br>


#### *APP Password

APP_PASSWORD = ******* <br>
APP_NAME = App name (google) <br>

#### *Cloudinary [If You use]

CLOUDE_NAME = [NAME] <br>
CLOUDE_API_KEYS =  ******* <br>
CLOUDE_API_SECRET = ********************** <br>

## index.js
require("dotenv").config; <br>
const { DbConection } = require("./src/database/db"); <br>
const { server } = require("./src/app"); <br>
DbConection() <br>
  .then(() => {<br>
    server.listen(process.env.PORT || 4000, () => {<br>
      console.log(`Server Running on http://localhost:${process.env.PORT}`); <br>
    }); <br>
  }) <br>
  .catch((err) => { <br>
    console.log("database conection failed", err); <br>
  }); <br>



## app.js 


const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const http = require("http");
const server = http.createServer(app);
 * todo : All MidleWare
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Public"));

/**
 * todo : routes will there
 * */

const apiVersion = process.env.BASE_URL;
app.use(apiVersion, require("./routes/index"));

/**
 * todo : error handle midleware
 * if you use global error handler to
 * reecive error as a best format to understand
 * use global error handler
 * */

app.use(globalErrorHandeler);

module.exports = { server};



## Api Response
### If You need pass response to besy way 
### you can make a custom api response function
### here i am sharing a Custom api response
## src/utils/apiResponse 

class apiResponse {
  constructor(status, message, data) {
    this.status = status >= 200 && status < 300 ? "OK" : "Status Error";
    this.statusCode = status || 500;
    this.message = message || "Succes";
    this.data = data;
    }
    static senSuccess(res, status, message, data) {
        return res.status(status).json( new apiResponse(status, message, data))
    }
}


module.exports = {apiResponse}









