#!/usr/bin/env node
exports.handler = async (event) => {
    console.log(event);
    
    const name = event.queryStringParameters && event.queryStringParameters.name;
    
    let message = "Hello Lambda";
    
    if (name != null) {
        message = `Hello ${name}!`;
    }
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(message)
    };
    
    return response;
};