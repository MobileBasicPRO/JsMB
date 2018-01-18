/* 
 * File module for JsMobileBasic.
 * Help: https://vk.com/page-123026568_53604956
 * Supports:
 *  Node FS [+]
 *  JsOS FS [+]
 *  Browser pseudo-fs [-]
 */

'use strict';

// /* eslint-disable */

(function () {
    const $File = {
        saveData(filename, data, callback) {
            if (!this.$NW) return !!console.error("Can't find base path");
            const filePath = this.$Path.join(this.$NW.App.dataPath, `${filename}.json`);
            try {
                $File.writeFileSync(filePath, this.toJSON(data), "utf8");
                return true;
            } catch (e) {
                console.error("Ошибка записи данных: ", e);
                return false;
            }
        },

        readData(filename) {
            if (!this.$NW) return !!console.error("Can't find base path");
            let filePath = this.$Path.join(this.$NW.App.dataPath, `${filename}.json`);
            let data = null;
            try {
                data = $File.readFileSync(filePath, 'utf8');
            } catch (e) {
                console.error("Ошибка чтения данных: ", e);
                return false;
            }
            let json = null;
            try {
                json = this.parseJSON(data);
            } catch (e) {}
            return json || data;
        }
    };

    if (typeof require === "function") { //JsOS or Node
        $File.$File = require('fs');
        $File.$Path = require('path');
    } else if (typeof localStorage !== "undefined") { //Browser
        //TODO: Add browser support
        throw new Error("At this time, the browser is not supported!");
    } else {
        throw new Error("Your system doesn't support FileSystem");
    }

    for(const i in $File) {
        if(typeof $File[i] === 'function') $File[i] = $File[i].bind(JsMB);
    }

    Object.assign(JsMB, $File);
    Object.assign(window, $File);
})();