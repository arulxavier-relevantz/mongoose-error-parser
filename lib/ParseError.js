"use strict";
var Error_1 = require("./Error");
var ParseError = (function () {
    function ParseError() {
    }
    ParseError.parse = function (errorObj) {
        var parseError = {};
        var errors = [];
        var errorType;
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
    };
    return ParseError;
}());
exports.ParseError = ParseError;
