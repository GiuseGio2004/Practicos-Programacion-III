const dotenv = require('dotenv');
dotenv.config()

class Config {
  constructor() {
    this.jwtSecret = process.env.JWT_SECRET;
    this.expiresIn = process.env.EXPIRES_IN;
  }
}
module.exports = new Config();