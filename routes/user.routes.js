const {createuser,getallUserByNumber,UpdateCustomer,getAllCustomer,DeleteCustomer,updateCustomerController} = require('../controller/user.controller');
const express = require("express");
const router = express.Router();

router.post("/createUser",createuser);
router.get("/getUserByNumber/:number",getallUserByNumber);
router.get("/getAllCustomer",getAllCustomer);
router.patch("/UpdateCustomerDetails/:number",updateCustomerController);
router.delete("/deleteCustomer/:number",DeleteCustomer);


module.exports = router;