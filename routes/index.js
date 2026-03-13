const routes = require("express").Router();
const temple = require("./temple");
const swagger = require("./swagger");

routes.use("/temples", temple);
routes.use("/", swagger);
routes.use(
	"/",
	(docData = (req, res) => {
		let docData = {
			documentationURL: "http://localhost:8080/api-docs",
		};
		res.send(docData);
	}),
);

module.exports = routes;
