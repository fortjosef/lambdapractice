#!/usr/bin/env node
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello Lambda!')
    };
    
    return response;
};