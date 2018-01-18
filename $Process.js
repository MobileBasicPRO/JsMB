/* 
 * Process module for JsMobileBasic.
 * Help: https://vk.com/page-123026568_53604956
 * Supports:
 *  Node child_process [+]
 *  JsOS [-]
 *  Browser pseudo-fs [-]
 */

'use strict';

(function () {

	const $Process = {
		exec(target) {
			this.$Proc.execSync(target);
			return this;
		},

		execFile(file, keys = []) {
			try {
				return this.$Proc.execFileSync(file, keys);
			} catch (e) {
				this.debug("Ошибка при работе с процессом: " + e);
			}
		}
	}

	if (typeof require === "function") { //JsOS or Node
		$Process.$Proc = require('child_process');
	} else if (typeof localStorage !== "undefined") { //Browser
		//TODO: Add browser support
		throw new Error("The browser doesn't support processes!");
	} else {
		throw new Error("Your system doesn't support FileSystem");
	}

	for(const i in $Process) {
		if(typeof $Process[i] === 'function') $Process[i] = $Process[i].bind(this);
	}

	Object.apply(JsMB, $Process);
	Object.apply(window, $Process);
})();