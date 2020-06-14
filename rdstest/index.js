const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DATABASE
})

exports.handler = (event, context, callback) => {
    //this is the non async version
    connection.query('select * from testtable', function (error, results, fields) {
        if (error) {
            connection.destroy();
            throw error;
        } else {
            // connected!
            console.log(results);
            /*
            const response = {
                StatusCode: 200,
                Body: JSON.stringify("foo")
            };
            */
            //return response;
            callback(error, results);
            connection.end(function (err) { callback(err, results);});
        }
    });
};