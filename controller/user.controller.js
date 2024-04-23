const {create} = require('../services/user.services');

const {genSaltSync,hashSync} = require("bcrypt");

module.exports = {
    createuser:(req,res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password,salt);
        create(body,(err,results)=>{
            if(err){
                console.error(err);
                return res.status(500).json(
                   {
                success:"000",
               message:"Internal server error"
                   }
                )
            }
            return res.status(200).json({
                success:1,
                errCode:200,
                message:"Customer added successfully",
             results:create.data
            })

        })
    }
}