/**
* @param  {object} obj — Структура блоков интерфейса в формате BEMJSON
* @return {string} HTML разметка страницы
*/

export default function (obj) {
    var BEMJSON = require('bemjson-to-html');
    var a = new BEMJSON()
    var b = a.toHtml(obj)
    return b
}