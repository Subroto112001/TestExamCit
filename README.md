
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


const express = require("express"); <br>
const cors = require("cors"); <br>
const cookieParser = require("cookie-parser"); <br>
const app = express(); <br>
const http = require("http"); <br>
const server = http.createServer(app); <br>
 * todo : All MidleWare <br>
app.use(express.json());  <br>
app.use(cookieParser());  <br>
app.use(express.urlencoded({ extended: true }));  <br>
app.use(express.static("Public"));  <br> <br>

/**
 * todo : routes will there  <br>
 * */

const apiVersion = process.env.BASE_URL;  <br>
app.use(apiVersion, require("./routes/index"));  <br>

/**  <br>
 * todo : error handle midleware  <br>
 * if you use global error handler to  <br>
 * reecive error as a best format to understand  <br>
 * use global error handler  <br>
 * */  <br>

app.use(globalErrorHandeler);  <br>

module.exports = { server};  <br>



## Api Response
### If You need pass response to besy way 
### you can make a custom api response function
### here i am sharing a Custom api response
## src/utils/apiResponse 

class apiResponse {  <br>
  constructor(status, message, data) {  <br>
    this.status = status >= 200 && status < 300 ? "OK" : "Status Error"; <br>
    this.statusCode = status || 500;  <br>
    this.message = message || "Succes";  <br>
    this.data = data;  <br>
    } <br>
    static senSuccess(res, status, message, data) {  <br>
        return res.status(status).json( new apiResponse(status, message, data))  <br>
    }  <br>
}  <br>


module.exports = {apiResponse}  <br>




## AsyncHandler
### I will make a custom async function to make it more efficient
## src/utils/asyncHandler
exports.asyncHandeler = (func) => {  <br>
    return async (req, res, next) => {  <br>
        try {  <br>
           await func(req, res)  <br> 
        } catch (error) {  <br>
            next(error);  <br>
        }  <br>
    }  <br>
}  <br>

## Custom Error Function 
### src/utils/customError

class customError extends Error{ <br>
    constructor(statusCode, message) { <br>
        super(message); <br>
        this.statusCode = statusCode; <br>
        this.status = statusCode >= 400 && statusCode < 500 ? "Client Error" : "Server Error" <br>
        this.isOperationalError = true; <br>
        this.message = message || "Server / Client Error"; <br>
        this.data = null; <br>
       Error.captureStackTrace(this, customError); <br>

    }<br>
}<br>


module.exports = {customError} <br>


## Global Error Handler
### src/utils/globalErrorHandler


require("dotenv").config(); <br>

/** <br> 
 * if it will development mode <br>
 * */ <br>

const development = (error, res) => { <br>
  console.log(error);<br>
  const statusCode = error.statusCode || 500;<br>
  return res.status(statusCode).json({<br>
    statusCode: error.statusCode,<br>
    status: error.status,<br>
    isOperationalError: error.isOperationalError, <br>
    ErrortrackTrace: error.stack, <br>
    message: error.message, <br>
    data: error.data, <br>
  }); <br>
}; <br>

/** <br>
 *  if it will production mode <br>
 * */<br>

const production = (error, res) => { <br>
  const statusCode = error.statusCode || 500; <br>
  if (error.isOperationalError) { <br>
    return res.status(statusCode).json({ <br>
      statusCode: error.statusCode, <br>
        status: error.status, <br>
      message : error.message <br>
    }); <br>
  } else { <br>
    return res.status(statusCode).json({ <br>
      status: "!OK", <br>
      message: "Something wrong, Try again later", <br>
    }); <br>
  } <br>
}; <br>

exports.globalErrorHandeler = (error, req, res, next) => { <br>
  if (process.env.NODE_ENV == "development") { <br>
    development(error, res); <br>
  } else { <br>
    production(error, res); <br>
  } <br>
};<br>



## Multer MIddleware
### If you want to upload a photo to your database you need to use a middleware
### I am using multer middleware 
## src/ middleware / multer.middleware.js

const multer = require("multer"); <br>

/** <br>
 *title : image store <br>
 *@desc : now it will take the image in storage <br>
 */<br>

const storage = multer.diskStorage({ <br>
  destination: function (req, file, cb) { <br>
    cb(null, "./public/temp"); <br>
  }, <br>
  filename: function (req, file, cb) { <br>
    cb(null, file.originalname); <br>
  },<br>
});<br>

const upload = multer({<br>
  storage: storage, <br>
});<br>
module.exports = { upload };<br>




















