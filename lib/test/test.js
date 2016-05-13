"use strict";
var ParseError_1 = require("../ParseError");
var obj = {
    "code": 11000,
    "index": 0,
    "errmsg": "E11000 duplicate key error collection: employees.employees index: employeeID_1 dup key: { : \"1000002\" }",
    "op": {
        "employeeID": "1000002",
        "_id": "572367f18a204af7a7b16cec",
        "address": {
            "city": "Atlanta",
            "state": "GA",
            "zip": 12345,
            "lines": ["1234 Delk RD SW"]
        },
        "name": {
            "first": "John3",
            "last": "Patrick3"
        },
        "__v": 0
    }
};
var validationObj = {
    "message": "Employee validation failed",
    "name": "ValidationError",
    "errors": {
        "name.last": {
            "message": "Path `name.last` is required.",
            "name": "ValidatorError",
            "properties": {
                "type": "required",
                "message": "Path `{PATH}` is required.",
                "path": "name.last",
                "value": ""
            },
            "kind": "required",
            "path": "name.last",
            "value": ""
        },
        "name.first": {
            "message": "Path `name.first` is required.",
            "name": "ValidatorError",
            "properties": {
                "type": "required",
                "message": "Path `{PATH}` is required.",
                "path": "name.first",
                "value": ""
            },
            "kind": "required",
            "path": "name.first",
            "value": ""
        }
    }
};
console.log(ParseError_1.ParseError.parse(obj));
