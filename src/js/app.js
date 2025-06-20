export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    translate(code) {
        if (this.errors.size < 1) {
            return 'Error repository is empty';
        }
        if (this.errors.has(code) === false) {
            return 'Unknown error';
        } else {
            return this.errors.get(code);
        }
    }

    addErrorCode(code, errorName) {
        if (this.errors.has(code) === true) {
            return 'Repository already has this error code';
        }
        this.errors.set(code, errorName);
    }
}

/*const newError = new ErrorRepository();
newError.addErrorCode(100, 'Error: division by zero');
newError.addErrorCode(110, 'Error: Internal error');
console.log(newError.translate(100));
console.log(newError.translate(101));
console.log(newError.size);
console.log(newError.translate(110));*/