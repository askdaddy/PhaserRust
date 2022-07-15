"use strict";(this.webpackChunkRust_wasm=this.webpackChunkRust_wasm||[]).push([["pkg_wasm_js"],{"./pkg/wasm.js":
/*!*********************!*\
  !*** ./pkg/wasm.js ***!
  \*********************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "__wbg_log_8acc844b180331c2": () => (/* reexport safe */ _wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_log_8acc844b180331c2),\n/* harmony export */   "__wbindgen_throw": () => (/* reexport safe */ _wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw),\n/* harmony export */   "action": () => (/* reexport safe */ _wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.action),\n/* harmony export */   "wasm_add": () => (/* reexport safe */ _wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.wasm_add)\n/* harmony export */ });\n/* harmony import */ var _wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_bg.js */ "./pkg/wasm_bg.js");\n\n\n\n//# sourceURL=webpack://Rust-wasm/./pkg/wasm.js?')},"./pkg/wasm_bg.js":
/*!************************!*\
  !*** ./pkg/wasm_bg.js ***!
  \************************/(module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__wbg_log_8acc844b180331c2\": () => (/* binding */ __wbg_log_8acc844b180331c2),\n/* harmony export */   \"__wbindgen_throw\": () => (/* binding */ __wbindgen_throw),\n/* harmony export */   \"action\": () => (/* binding */ action),\n/* harmony export */   \"wasm_add\": () => (/* binding */ wasm_add)\n/* harmony export */ });\n/* harmony import */ var _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_bg.wasm */ \"./pkg/wasm_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var TextDecoder = __webpack_require__(/*! text-encoding */ \"./node_modules/text-encoding/index.js\")[\"TextDecoder\"];\n/* provided dependency */ var TextEncoder = __webpack_require__(/*! text-encoding */ \"./node_modules/text-encoding/index.js\")[\"TextEncoder\"];\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0;\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction logError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n            } catch(_) {\n                return \"<failed to stringify thrown value>\";\n            }\n        }());\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n        throw e;\n    }\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read !== arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedInt32Memory0;\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n/**\n* @param {string} input\n* @returns {string}\n*/\nfunction action(input) {\n    try {\n        const retptr = _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);\n        const ptr0 = passStringToWasm0(input, _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n        const len0 = WASM_VECTOR_LEN;\n        _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.action(retptr, ptr0, len0);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);\n        _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1);\n    }\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n/**\n* @param {number} num1\n* @param {number} num2\n* @returns {number}\n*/\nfunction wasm_add(num1, num2) {\n    _assertNum(num1);\n    _assertNum(num2);\n    const ret = _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.wasm_add(num1, num2);\n    return ret;\n}\n\nfunction __wbg_log_8acc844b180331c2() { return logError(function (arg0, arg1) {\n    console.log(getStringFromWasm0(arg0, arg1));\n}, arguments) };\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\ncachedInt32Memory0 = new Int32Array(_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\ncachedUint8Memory0 = new Uint8Array(_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n\n\n\n//# sourceURL=webpack://Rust-wasm/./pkg/wasm_bg.js?")},"./pkg/wasm_bg.wasm":
/*!**************************!*\
  !*** ./pkg/wasm_bg.wasm ***!
  \**************************/(module,exports,__webpack_require__)=>{eval('"use strict";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.id];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name) exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_bg.js */ "./pkg/wasm_bg.js");\n\n\n// exec wasm module\nwasmExports[""]()\n\n//# sourceURL=webpack://Rust-wasm/./pkg/wasm_bg.wasm?')}}]);