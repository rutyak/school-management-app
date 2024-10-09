const User = require("../model/UserSchema")

const userValidateController = async (req, res) =>{

    try {
        const { email } = req.body;
        // console.log("email............", email);

        const user = await User.findOne({email});
        console.log("email............", email);
        console.log("user in bakcend............", user);

        if(!user){
            return res.status(400).json({message: "User not found"});
        } else{
            return res.status(200).json({message: "You can reset password"})
        }
    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
}

module.exports = userValidateController;