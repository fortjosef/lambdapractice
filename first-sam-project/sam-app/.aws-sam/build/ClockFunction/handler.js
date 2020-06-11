const moment = require('moment');

exports.clock = async (event) => {
    console.log('Clock fired');
    const message = moment().format();
    
    const response = {
        SatusCode: 200,
        Body: JSON.stringify(message);
    };
    
    return response;
}