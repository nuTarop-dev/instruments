const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
    const token = req.header("x-auth-token");
    if (!token) {
        res.status(401).send("Access denied. No token provided.");
    } else {
        try {
            const decoded = jwt.decode(token, config.get("jwtPrivateKey"));
            if (!(Date.now() >= decoded.exp * 1000)) {
                req.user = decoded;
                next();
            } else {
                res.status(401).send("Session expired. Please log in again.");
            }
        } catch (e) {
            console.log(e);
            res.status(400).send("Invalid token.");
        }
    }
}