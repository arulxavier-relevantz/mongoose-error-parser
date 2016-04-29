"use strict";
var Error = (function () {
    function Error(_code, _errorMessage) {
        this.code = _code;
        this.errorMessage = _errorMessage;
    }
    return Error;
}());
exports.Error = Error;
