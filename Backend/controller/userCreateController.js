const User = require("../model/UserSchema");
const bcrypt = require("bcrypt");

const userCreateController = async (req, res) =>{

        try {
            const {email, password} = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const obj = {
                email,
                password: hashedPassword
            }

            const newUser = await User.create(obj);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
} 

module.exports = userCreateController;