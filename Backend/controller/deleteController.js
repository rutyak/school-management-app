
const deleteController = (type) =>{

    return async (req, res) =>{
        const { id } = req.params;
        try {
            const deletedUser = await type.findByIdAndDelete(id);
            if(!deletedUser){
                return res.status(404).json({message: "User not found"});
            }
            res.status(200).json(deletedUser);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

module.exports = deleteController;