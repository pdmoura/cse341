const swaggerAutogen = require("swagger-autogen")();

const doc = {
	info: {
		title: "Temple API",
		description: "LDS Temple API for a BYU-Idaho CSE341 student project",
	},
	host: "localhost:3000",
};

const outputFile = "./swagger.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, routes, doc).then(async () => {
// 	await import("./index.js");
// });