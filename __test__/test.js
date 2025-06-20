import ErrorRepository from '../src/js/app.js';
const err = new ErrorRepository();

test('Проверка наличия данных в репозитории'), () => {
    const result = err.translate(100);
    expect(result).not.toEqual('Error repository is empty');
}
