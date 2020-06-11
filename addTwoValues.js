#!/usr/bin/env node
exports.handler = async (event) => {
    let value1 = 0;
    let value2 = 0;
    
    if (event.requestContext.http.method == "POST") {
        if (event.queryStringParameters) {
            if (event.queryStringParameters.value1) {
                value1 = parseInt(event.queryStringParameters.value1);
            }
            
            if (event.queryStringParameters.value2) {
                value2 = parseInt(event.queryStringParameters.value2);
            }
        }
    }
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(value1 + value2)
    };
        
    return response;
};