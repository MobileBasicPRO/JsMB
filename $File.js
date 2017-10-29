/* 
 * File module for JsMobileBasic.
 * Help: https://vk.com/page-123026568_53604956
 * Supports:
 *  Node FS [+]
 *  JsOS FS [+]
 *  Browser pseudo-fs [-]
 */
'use strict';

let $File;

if (typeof require === "function") { //JsOS or Node
    $File = require('fs');
    $Path = require('path');
} else if (typeof localStorage !== "undefined") { //Browser
    //TODO: Add browser support
    throw new Error("At this time, the browser is not supported!");
}else{
    throw new Error("Your system doesn't support FileSystem");
}

//Работа с файлами



function saveData(filename, _data, callback) {
    $Init.File[0]();
    $Init.NW[0]();
    $Init.Path[0]();

    var file = filename + '.json';
    var filePath = $Path.join($NW.App.dataPath, file);
    const data = toJSON(_data);

    $File.writeFile(filePath, data, function (err) {
        if (err) {
            alert('Ошибка при сохранении: ' + err.message);
            return false;
        } else if (callback) {
            callback();
        }
    });

    window.localStorage.setItem(name, data);
}

function readData(filename) {
    $Init.File[0]();
    $Init.NW[0]();
    $Init.Path[0]();

    var file = filename + '.json';
    var filePath = $Path.join($NW.App.dataPath, file);
    var data = $File.readFileSync(filePath, 'utf8');
    var json = parseJSON(data);
    return json;
}
