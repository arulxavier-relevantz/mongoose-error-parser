"use strict";
const Error_1 = require("./Error");
class ParseError {
    static parse(errorObj) {
        let parseError = {};
        let errors = [];
        let errorType;
        if (errorObj.hasOwnProperty("code")) {
            errorType = "mongoDBError";
            errors.push(new Error_1.Error(errorObj.code, errorObj.errmsg));
        }
        else {
            errorType = "ValidationError";
            if (errorObj.name == 'ValidationError') {
                for (var field in errorObj.errors) {
                    errors.push(new Error_1.Error(field, errorObj.errors[field].message));
                }
            }
        }
        parseError = {
            "name": errorType,
            "errors": errors
        };
        return parseError;
    }
}
exports.ParseError = ParseError;
