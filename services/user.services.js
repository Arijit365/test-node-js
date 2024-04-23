const pool = require('../config/mysql.config');

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
    }
};

module.exports = {
    
}
