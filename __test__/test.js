import ErrorRepository from '../src/js/app.js';
const err = new ErrorRepository();

test('Проверка вывода значения кода ошибки', () => {
    expect(err.translate(100)).toEqual('Error: division by zero')
});

test('Проверка наличия кода в репозитории', () => {
    expect(err.translate(130)).toEqual('Unknown error');
});