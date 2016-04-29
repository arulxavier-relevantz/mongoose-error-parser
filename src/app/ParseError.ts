
import { Error } from "./Error";
class ParseError {

    public static parse(errorObj: any) {

        let parseError = {};
        let errors = [];
        let errorType;

        if (errorObj.hasOwnProperty("code") ) {

            errorType = "mongoDBError"
            errors.push(new Error(errorObj.code, errorObj.errmsg));
        } else {

            errorType = "ValidationError";
            if (errorObj.name == 'ValidationError') {
                for (var field in errorObj.errors) {
                    errors.push(new Error(field, errorObj.errors[field].message));
                }
              }
        }

        parseError = {
            "name": errorType,
            "errors": errors
        }

        return JSON.stringify(parseError);
    }
}

export { ParseError }
