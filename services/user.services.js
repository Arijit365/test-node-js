
const pool = require('../config/mysql.config');


// Model For the Update Customer feature
const UpdateCustomer = (data, callback) => {
    const firstname = data.firstname;
    const lastname = data.lastname;
    const email = data.email;
    const gender = data.gender;

    const UpdateQuery = `
        UPDATE registration 
        SET firstname = ?,
            lastname = ?,
            email = ?,
            gender = ?
        WHERE number = ?
    `;

    pool.query(UpdateQuery, [firstname, lastname, email, gender, data.number], (error, results, fields) => {
        if (error) {
            callback(error);
        } else {
            callback(null, results);
        }
    });
};

// Model for get every customer details

const getAllCustomer = callback  => {
    const query = `SELECT firstname,lastname,gender,email,password,number FROM registration`;
    pool.query(query,[], (error,results,fields)=>{
        if(error){
            callback(error);
        }
    else{
        callback(null,results);
    }
    })
}

// Model for Delete Customer details from Server

const DeleteCustomer = (data,callback) =>{
    const number = data.number;

    const DeleteQuery = `DELETE FROM registration WHERE number = ?`;
    pool.query(DeleteQuery, [number],
    (error,results,fields)=>{
        if(error){
            callback(error);
        }
        else{
      callback(null,results);
        }
    }
    ) 
}


module.exports = {
    create: (data, callback) => {
        pool.query(
            `INSERT INTO registration(firstname, lastname, gender, email, password, number) VALUES(?,?,?,?,?,?)`,
            [
                data.firstname,
                data.lastname,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                } else {
                callback(null, results); 
                }
            }
        );
    },
    getallUserByNumber:(number,callback)=>{
        pool.query(
       `SELECT id , firstname , lastname , gender , email , password , number FROM registration WHERE number = ?;` , [number],
       (error,results,fields)=>{
        if(error){
            callback(error)
        }
        return callback(null,results[0]);
       }
        )

    },
    UpdateCustomer,
    getAllCustomer,
    DeleteCustomer
};