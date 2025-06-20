export default class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [100, 'Error: division by zero']
        ]);
    }

    translate(code) {
        if (this.errors.has(code) === false) {
            return 'Unknown error';
        } else {
            return this.errors.get(code);
        }
    }
}