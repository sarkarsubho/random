// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const app = express();

// app.use(express.json());

// // app.get("/exp", async (req, res) => {
// //   try {
// //     return res.status(200).send({ response: "" });
// //   } catch (error) {
// //     return res.status(500).send({ message: error });
// //   }
// // });

// // app.get("/", (req, res) => {
// //   function delayedPromise() {
// //     return new Promise((resolve) => {
// //       setTimeout(() => {
// //         resolve("Promise Resolved.");
// //       }, 3000);
// //     });
// //   }

// //   // Example usage
// //   delayedPromise()
// //     .then((message) => {
// //       console.log(message);
// //     })
// //     .catch((error) => {
// //       console.error(error);
// //     });
// //   return res.send("promised in progress");
// // });
// // app.get("/multiply", (req, res) => {
// //   const num1 = parseFloat(req.query.num1);
// //   const num2 = parseFloat(req.query.num2);

// //   if (isNaN(num1) || isNaN(num2)) {
// //     res
// //       .status(400)
// //       .json({ error: "Invalid input. Please provide valid numbers." });
// //   } else {
// //     const product = num1 * num2;
// //     res.json({ product: product });
// //   }
// // });

// // const basicAuthMiddleware = (req, res, next) => {
// //   const authHeader = req.headers.authorization;

// //   if (!authHeader) {
// //     return res.status(401).send("Unauthorized. Missing Authorization header.");
// //   }

// //   // Extract the base64-encoded credentials from the Authorization header
// //   const credentials = Buffer.from(authHeader.split(" ")[1], "base64").toString(
// //     "utf-8"
// //   );
// //   const [username, password] = credentials.split(":");

// //   // Check if the provided username and password are correct
// //   if (username === "yourUsername" && password === "yourPassword") {
// //     next(); // Authentication successful, proceed to the next middleware or route handler
// //   } else {
// //     res.status(401).send("Unauthorized. Invalid credentials.");
// //   }
// // };

// // // Use the basicAuthMiddleware for a specific route
// // app.get("/secure-resource", basicAuthMiddleware, (req, res) => {
// //   res.send("This is a secure resource.");
// // });
// // app.get("/readwrite", (req, res) => {
// //   const inputFilePath = "largeFile.txt"; // Replace with the path to your large file
// //   const outputFilePath = "outputFile.txt"; // Replace with the desired output file path

// //   // Create a readable stream from the input file
// //   const readableStream = fs.createReadStream(inputFilePath, {
// //     encoding: "utf-8",
// //   });

// //   // Create a writable stream to the output file
// //   const writableStream = fs.createWriteStream(outputFilePath);

// //   // Pipe the readable stream to the writable stream
// //   readableStream.pipe(writableStream);

// //   // Handle events
// //   readableStream.on("error", (err) => {
// //     console.error("Error reading the input file:", err.message);
// //   });

// //   writableStream.on("finish", () => {
// //     console.log(`File successfully written to ${outputFilePath}`);
// //   });

// //   // Optional: You can also listen for the 'error' event on the writable stream
// //   writableStream.on("error", (err) => {
// //     console.error("Error writing to the output file:", err.message);
// //   });
// // });

// app.use(express.static(path.join(__dirname, "public")));

// app.listen(8080, async () => {
//   try {
//     console.log("server is up and running");
//   } catch (error) {
//     console.log("error occurred during starting the server");
//   }
// });


const express = require('express');
const path = require('path');
// const re=require("")

const app = express();
const port = 3000; // You can use any port number you prefer

// Serve static files from the "public" directory
const logIPMiddleware = (req, res, next) => {
  const timestamp = new Date().toLocaleString();
  const ipAddress = req.ip; // Express provides the IP address in req.ip

  console.log(`[${timestamp}] IP Address: ${ipAddress} - ${req.method} ${req.url}`);
  next();
};
app.use(logIPMiddleware);
app.use(express.static(path.join(__dirname, 'public')));

// 
const requestTimerMiddleware = (req, res, next) => {
  const startTime = process.hrtime(); // Get the current time in high-resolution format

  // Execute the next middleware or route handler
  next();

  // Calculate the duration
  const endTime = process.hrtime(startTime);
  const durationInMilliseconds = (endTime[0] * 1000 + endTime[1] / 1e6).toFixed(2);

  // Log the duration
  console.log(`[${req.method}] ${req.url} - Processing Time: ${durationInMilliseconds} ms`);
};

// Use the requestTimerMiddleware for all routes
app.use(requestTimerMiddleware);

// Example route
app.get('/example', (req, res) => {
  // Simulate some processing delay (you can replace this with your actual route logic)
  setTimeout(() => {
    res.send('Hello, Express with Middleware!');
  }, 500);
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});