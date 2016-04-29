class Error {
    
    code: string;
    errorMessage: string;

    constructor(_code: string, _errorMessage: string) {
        this.code = _code;
        this.errorMessage = _errorMessage;
    }
}

export { Error }
