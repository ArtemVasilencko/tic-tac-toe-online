"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/game/use-game-state.js":
/*!*******************************************!*\
  !*** ./components/game/use-game-state.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\nvar _s = $RefreshSig$();\n\n\nfunction getNextMove(currentMove, playersCount) {\n    const slicedMOvedOrder = _constants__WEBPACK_IMPORTED_MODULE_1__.MOVE_ORDER.slice(0, playersCount);\n    const nextMoveIndex = slicedMOvedOrder.indexOf(currentMove) + 1;\n    var _slicedMOvedOrder_nextMoveIndex;\n    return (_slicedMOvedOrder_nextMoveIndex = slicedMOvedOrder[nextMoveIndex]) !== null && _slicedMOvedOrder_nextMoveIndex !== void 0 ? _slicedMOvedOrder_nextMoveIndex : slicedMOvedOrder[0];\n}\nfunction computeWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, fieldSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function compareElements(indexes) {\n        let result = true;\n        for(let i = 1; i < indexes.length; i++){\n            result && (result = !!cells[indexes[i]]);\n            result && (result = cells[indexes[i]] === cells[indexes[i - 1]]);\n        }\n        return result;\n    }\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            []\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(fieldSize * (j - gap) + (j - gap) + i);\n            res[2].push(-fieldSize * (j - gap) + (j - gap) + i);\n            res[3].push(fieldSize * (j - gap) + i);\n        }\n        return res;\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {\n            const indexesRows = getSequenceIndexes(i);\n            const winnerIndexes = indexesRows.find((row)=>compareElements(row));\n            if (winnerIndexes) {\n                return winnerIndexes;\n            }\n        }\n    }\n    return undefined;\n}\nfunction useGameState(playersCount) {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n        }));\n    console.log(computeWinner(cells, 3));\n    const nextMove = getNextMove(currentMove, playersCount);\n    const handleCellClick = (index)=>{\n        if (cells[index]) return;\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) return lastGameState;\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, playersCount),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n            };\n        });\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    };\n}\n_s(useGameState, \"BgCJ0i32B65f5Z6f6I6kdW1AptQ=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQWNyQyxXQUFXLEVBQUVDO2dCQUNwRE0sT0FBTzhCLGNBQWM5QixLQUFLLENBQUMrQixHQUFHLENBQUMsQ0FBQ0MsTUFBTXZCLElBQ3BDQSxNQUFNb0IsUUFBUUMsY0FBY3JDLFdBQVcsR0FBR3VDO1lBRTlDO1FBQ0Y7SUFDRjtJQUVBLE9BQU87UUFDTGhDO1FBQ0FQO1FBQ0FrQztRQUNBQztJQUNGO0FBQ0Y7R0E5QmdCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUtc3RhdGUuanM/MTEwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMsIE1PVkVfT1JERVIgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmZ1bmN0aW9uIGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQpIHtcclxuICBjb25zdCBzbGljZWRNT3ZlZE9yZGVyID0gTU9WRV9PUkRFUi5zbGljZSgwLCBwbGF5ZXJzQ291bnQpO1xyXG4gIGNvbnN0IG5leHRNb3ZlSW5kZXggPSBzbGljZWRNT3ZlZE9yZGVyLmluZGV4T2YoY3VycmVudE1vdmUpICsgMTtcclxuICByZXR1cm4gc2xpY2VkTU92ZWRPcmRlcltuZXh0TW92ZUluZGV4XSA/PyBzbGljZWRNT3ZlZE9yZGVyWzBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlV2lubmVyKGNlbGxzLCBzZXF1ZW5jZVNpemUgPSA1LCBmaWVsZFNpemUgPSAxOSkge1xyXG4gIGNvbnN0IGdhcCA9IE1hdGguZmxvb3Ioc2VxdWVuY2VTaXplIC8gMik7XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXBhcmVFbGVtZW50cyhpbmRleGVzKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGluZGV4ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcmVzdWx0ICYmPSAhIWNlbGxzW2luZGV4ZXNbaV1dO1xyXG4gICAgICByZXN1bHQgJiY9IGNlbGxzW2luZGV4ZXNbaV1dID09PSBjZWxsc1tpbmRleGVzW2kgLSAxXV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFNlcXVlbmNlSW5kZXhlcyhpKSB7XHJcbiAgICBjb25zdCByZXMgPSBbW10sIFtdLCBbXSwgW11dO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZXF1ZW5jZVNpemU7IGorKykge1xyXG4gICAgICByZXNbMF0ucHVzaChqIC0gZ2FwICsgaSk7XHJcbiAgICAgIHJlc1sxXS5wdXNoKGZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIChqIC0gZ2FwKSArIGkpO1xyXG4gICAgICByZXNbMl0ucHVzaCgtZmllbGRTaXplICogKGogLSBnYXApICsgKGogLSBnYXApICsgaSk7XHJcbiAgICAgIHJlc1szXS5wdXNoKGZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIGkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoY2VsbHNbaV0pIHtcclxuICAgICAgY29uc3QgaW5kZXhlc1Jvd3MgPSBnZXRTZXF1ZW5jZUluZGV4ZXMoaSk7XHJcbiAgICAgIGNvbnN0IHdpbm5lckluZGV4ZXMgPSBpbmRleGVzUm93cy5maW5kKChyb3cpID0+IGNvbXBhcmVFbGVtZW50cyhyb3cpKTtcclxuICAgICAgaWYgKHdpbm5lckluZGV4ZXMpIHtcclxuICAgICAgICByZXR1cm4gd2lubmVySW5kZXhlcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpIHtcclxuICBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XHJcbiAgICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcbiAgICBjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG4gIH0pKTtcclxuXHJcbiAgY29uc29sZS5sb2coY29tcHV0ZVdpbm5lcihjZWxscywgMykpO1xyXG5cclxuICBjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgIGlmIChjZWxsc1tpbmRleF0pIHJldHVybjtcclxuICAgIHNldEdhbWVTdGF0ZSgobGFzdEdhbWVTdGF0ZSkgPT4ge1xyXG4gICAgICBpZiAobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleF0pIHJldHVybiBsYXN0R2FtZVN0YXRlO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXHJcbiAgICAgICAgY3VycmVudE1vdmU6IGdldE5leHRNb3ZlKGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsIHBsYXllcnNDb3VudCksXHJcbiAgICAgICAgY2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PlxyXG4gICAgICAgICAgaSA9PT0gaW5kZXggPyBsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlIDogY2VsbCxcclxuICAgICAgICApLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNlbGxzLFxyXG4gICAgY3VycmVudE1vdmUsXHJcbiAgICBuZXh0TW92ZSxcclxuICAgIGhhbmRsZUNlbGxDbGljayxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkdBTUVfU1lNQk9MUyIsIk1PVkVfT1JERVIiLCJnZXROZXh0TW92ZSIsImN1cnJlbnRNb3ZlIiwicGxheWVyc0NvdW50Iiwic2xpY2VkTU92ZWRPcmRlciIsInNsaWNlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJjb21wdXRlV2lubmVyIiwiY2VsbHMiLCJzZXF1ZW5jZVNpemUiLCJmaWVsZFNpemUiLCJnYXAiLCJNYXRoIiwiZmxvb3IiLCJjb21wYXJlRWxlbWVudHMiLCJpbmRleGVzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImdldFNlcXVlbmNlSW5kZXhlcyIsInJlcyIsImoiLCJwdXNoIiwiaW5kZXhlc1Jvd3MiLCJ3aW5uZXJJbmRleGVzIiwiZmluZCIsInJvdyIsInVuZGVmaW5lZCIsInVzZUdhbWVTdGF0ZSIsInNldEdhbWVTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIkNST1NTIiwiY29uc29sZSIsImxvZyIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJsYXN0R2FtZVN0YXRlIiwibWFwIiwiY2VsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/use-game-state.js\n"));

/***/ })

});