const { number, bool } = require('joi');
const {create,getallUserByNumber,UpdateCustomer,getAllCustomer,DeleteCustomer, merchantAuthenticate} = require('../services/user.services');
const {genSaltSync,hashSync} = require("bcrypt");
const jwt =  require('jsonwebtoken');

// Authenticate merchant and generate security token for other API

// const authicateController = (req,res )=>{
//     const client_id = req.body.client_id;
//     const client_secret_key = req.body.client_secret_key;

// merchantAuthenticate({client_id,client_secret_key}, (err,results)=>{
//     if(err){
//         console.log(err);
//         return res.status(500).json({
//             success:0,
//             errCode:500,
//             message:"Internal Server error"
//         });
//     }
//     else if(!results || !results.affectedRows === 0){
//         return res.status(400).json({
//             success:0,
//             errCode:401,
//             message:"Registration process is failed"
//         })
//         else {
//             let token = jwt.sign({client_id , client_secret_key})
//         }
//     }
// })
// }







// Update customer controller 
const updateCustomerController = (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const gender = req.body.gender;
    const original_password = req.body.original_password;
    let password = req.body.original_password;
    const salt = genSaltSync(10);
    password = hashSync(password,salt)

    UpdateCustomer({ firstname, lastname, email, gender, original_password,password, number: req.params.number }, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                errCode: 500,
                message: "Internal Server Error"
            });
        } else if (!results || results.affectedRows === 0) {
            return res.status(400).json({
                success: 0,
                errCode: 401,
                message: "Failed to update user"
            });
        } else {
            return res.status(200).json({
                success: 1,
                errCode: 201,
                message: "Customer details updated successfully"
            });
        }
    });
};


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
    },

    getallUserByNumber:(req,res)=>{
        const number = req.params.number;
        getallUserByNumber(number,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
        else if(!results){
                return res.status(400).json({
                    success:0,
                    errCode:401,
                    message:"Record not found"
                })
            }else{
                return res.status(200).json({
                    success:1,
                    errCode:201,
                    data:results
                })
            }
        })
    },

getAllCustomer:(req,res)=>{
    getAllCustomer((err,results)=>{
        if(err){
            console.log(err);
            res.status(500).json({
                success:0,
                errCode:500,
                message:"Internal Server Error"
            });
        }
        else if(!results){
            res.status(400).json({
                success:0,
                errCode:401,
                message:"No record found"
            });
        }
        else{
            res.status(200).json({
                success:1,
                errCode:201,
                data:results
            });
        }
    })
},

// UpdateCustomer:(req,res)=>{
// const firstname = req.params.firstname;
// const lastname = req.params.lastname;
// const email = req.params.email;
// const gender = req.params.gender;


//     UpdateCustomer({firstname,lastname,email,gender,number:req.params.number}, (err,results)=>{
//         if(err){
//        console.log(err);
//            return res.status(500).json({
//             success:0,
//             errCode:500,
//             message:"Internal Server Error"
//            })
// } else if(!results || results.affectedRows === 0)
// {
//    return res.status(400).json({
//     success:0,
//     errCode:401,
//     message:"Record is not found"
//    })
//  }
//  else{
//     return res.status(200).json({
//         success:1,
//         errCode:201,
//         message:"Customer details updated successfully"
//     })
//  }
//     });
// },

updateCustomerController,

DeleteCustomer : (req,res) => {
  
      DeleteCustomer({number:req.params.number},(err,results)=>{
      if(err){
          console.log(err);
          return res.status(500).json({
              success:0,
              errCode:500,
              message:"Internal Server Error"
          });
      }
      else if(!results){
            return res.status(400).json({
              success:0,
              errCode:401,
              message:"No Record is found "
            })  
      }
      else {
          return res.status(200).json({
              success:0,
              errCode:201,
              message: "Row is deleted from the server"
          })
      }
    })
  }
  
  

}