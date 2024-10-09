const User = require("../model/UserSchema");
const bcrypt = require("bcrypt");

const userResetPassword = async (req, res) =>{
    const { email, password} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.findOneAndUpdate({email}, {password: hashedPassword}, {new: true});
        if(!user){
            return res.status(404).json({message: "User not found"})
        } else{
            return res.status(201).send();
        }
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
}

module.exports = userResetPassword;