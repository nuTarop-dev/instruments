module.exports = function (req, res, next) {
    if (req.user && req.user.instruments_access) {
        next();
    } else {
        res.status(403).send("You have no rights to access this data.");
    }
}