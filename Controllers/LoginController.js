const User = require('../Models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      const existUser = await User.findOne({ email });
      if (!existUser) res.status(400).json({ message: 'you must register first !' });
      const validatePassword = await bcrypt.compare(password, existUser.password);
      if (!validatePassword)
        res.status(400).json({ message: 'Wrong password ! \n Try again!' });
      const token = await jwt.sign(
        { id: existUser._id, email: existUser.email },
        process.env.SECRET_KEY
      );
      res.json({ user: existUser, token });
     console.log("success login")
    } catch (error) {
      console.error(error)
    }
  };
    module.exports={loginController}
    