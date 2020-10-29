/*
const cache = {};

function loadCacheData(url, fn) {
    const cacheData = cache[url];

    //проверяем кэш
    if (cacheData) {
        fn(null, cacheData);
    } else {
        ajax.get(url, function (err, result) {
            //тут обрабатываем ответ и возвращаем результат
            const data = '...';

            //сохраняем в кэш
            cache[url] = data;

            fn(null, data);
        });
    }
}
*/
