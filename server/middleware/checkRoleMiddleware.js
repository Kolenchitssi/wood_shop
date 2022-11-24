const jwt = require("jsonwebtoken");

module.exports = function (role) {
  return function (req, res, next) {
    // console.log("req", req);
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      //в хеадер помещают тип токена и потом сам токен : Bearer asafgsdfsdsasada...
      const token = req.headers.autorization.split(" ")[1];
      if (!token) {
        return res
          .status(401)
          .json({ message: "Пользователь не авторизован!" });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        return res.status(403).json({ message: "Нет доступа!" });
      }
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: "Пользователь не авторизован!!!" });
    }
  };
};
