const moment = require('moment');
const momenttz = require('moment-timezone');

exports.timeForTimezone = async (event) => {
    console.log('timezone fired');

    let timezone = '';

    if (event.queryStringParameters) {
        if (event.queryStringParameters.timezone) {
            timezone = event.queryStringParameters.timezone;
        }
    }
    //NOTE: need to add in time zone verification, do not know if moment does this
    let message = '';

    if (timezone != '') {
        message = 'The time in ' + timezone + ' is ' + moment.tz(timezone).format();
    } else {
        //moment().format()
        message = 'The time in GMT 0 is ' + moment.tz('Atlantic/St_Helena').format();
    }
    
    const response = {
        StatusCode: 200,
        Body: JSON.stringify(message)
    };
    
    return response;
}