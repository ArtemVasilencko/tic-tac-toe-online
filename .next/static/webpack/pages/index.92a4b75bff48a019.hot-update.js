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

/***/ "./components/game/game-info.jsx":
/*!***************************************!*\
  !*** ./components/game/game-info.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _images_avatar_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/avatar-1.png */ \"./components/game/images/avatar-1.png\");\n/* harmony import */ var _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/avatar-2.png */ \"./components/game/images/avatar-2.png\");\n/* harmony import */ var _images_avatar_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/avatar-3.png */ \"./components/game/images/avatar-3.png\");\n/* harmony import */ var _images_avatar_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/avatar-4.png */ \"./components/game/images/avatar-4.png\");\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"Paromovevg\",\n        rating: 1230,\n        avatar: _images_avatar_1_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        name: \"VereIntedinglapotur\",\n        rating: 850,\n        avatar: _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 3,\n        name: \"Lara\",\n        rating: 1400,\n        avatar: _images_avatar_3_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.TRIANGLE\n    },\n    {\n        id: 4,\n        name: \"Додик\",\n        rating: 760,\n        avatar: _images_avatar_4_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_3__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction GameInfo(param) {\n    let { className, playersCount } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 \"),\n        children: players.slice(0, playersCount).map((player, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player,\n                isRight: index % 2 === 1\n            }, player.id, false, {\n                fileName: \"C:\\\\Users\\\\gamer\\\\OneDrive\\\\Рабочий стол\\\\strada\\\\frontend\\\\react-practice\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 52,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\gamer\\\\OneDrive\\\\Рабочий стол\\\\strada\\\\frontend\\\\react-practice\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo, isRight } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                        className: \"w-44\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gamer\\\\OneDrive\\\\Рабочий стол\\\\strada\\\\frontend\\\\react-practice\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_4__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\gamer\\\\OneDrive\\\\Рабочий стол\\\\strada\\\\frontend\\\\react-practice\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gamer\\\\OneDrive\\\\Рабочий стол\\\\strada\\\\frontend\\\\react-practice\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gamer\\\\OneDrive\\\\Рабочий стол\\\\strada\\\\frontend\\\\react-practice\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h-6 w-px bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gamer\\\\OneDrive\\\\Рабочий стол\\\\strada\\\\frontend\\\\react-practice\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-slate-900 text-lg font-semibold\", isRight && \"order-1\"),\n                children: \"01:08\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gamer\\\\OneDrive\\\\Рабочий стол\\\\strada\\\\frontend\\\\react-practice\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gamer\\\\OneDrive\\\\Рабочий стол\\\\strada\\\\frontend\\\\react-practice\\\\tic-tac-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDYTtBQUNNO0FBQ0E7QUFFSTtBQUNBO0FBQ0E7QUFDQTtBQUUvQyxNQUFNUSxVQUFVO0lBQ2Q7UUFDRUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUVIsNERBQVVBO1FBQ2xCUyxRQUFRWCxvREFBWUEsQ0FBQ1ksS0FBSztJQUM1QjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFFBQVFQLDREQUFVQTtRQUNsQlEsUUFBUVgsb0RBQVlBLENBQUNhLElBQUk7SUFDM0I7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxRQUFRTiw0REFBVUE7UUFDbEJPLFFBQVFYLG9EQUFZQSxDQUFDYyxRQUFRO0lBQy9CO0lBQ0E7UUFDRVAsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUUwsNERBQVVBO1FBQ2xCTSxRQUFRWCxvREFBWUEsQ0FBQ2UsTUFBTTtJQUM3QjtDQUNEO0FBRU0sU0FBU0MsU0FBUyxLQUEyQjtRQUEzQixFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRSxHQUEzQjtJQUN2QixxQkFDRSw4REFBQ0M7UUFDQ0YsV0FBV25CLGdEQUFJQSxDQUNibUIsV0FDQTtrQkFHRFgsUUFBUWMsS0FBSyxDQUFDLEdBQUdGLGNBQWNHLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQztZQUMzQyxxQkFDRSw4REFBQ0M7Z0JBRUNDLFlBQVlIO2dCQUNaSSxTQUFTSCxRQUFRLE1BQU07ZUFGbEJELE9BQU9mLEVBQUU7Ozs7O1FBS3BCOzs7Ozs7QUFHTjtLQW5CZ0JTO0FBcUJoQixTQUFTUSxXQUFXLEtBQXVCO1FBQXZCLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFLEdBQXZCO0lBQ2xCLHFCQUNFLDhEQUFDUDtRQUFJRixXQUFVOzswQkFDYiw4REFBQ0U7Z0JBQUlGLFdBQVduQixnREFBSUEsQ0FBQyxZQUFZNEIsV0FBVzs7a0NBQzFDLDhEQUFDM0IsNkNBQU9BO3dCQUNOa0IsV0FBVTt3QkFDVlQsTUFBTWlCLFdBQVdqQixJQUFJO3dCQUNyQkMsUUFBUWdCLFdBQVdoQixNQUFNO3dCQUN6QkMsUUFBUWUsV0FBV2YsTUFBTTs7Ozs7O2tDQUUzQiw4REFBQ1M7d0JBQUlGLFdBQVU7a0NBQ2IsNEVBQUNoQixvREFBVUE7NEJBQUNVLFFBQVFjLFdBQVdkLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd6Qyw4REFBQ1E7Z0JBQUlGLFdBQVduQixnREFBSUEsQ0FBQyx5QkFBeUI0QixXQUFXOzs7Ozs7MEJBQ3pELDhEQUFDUDtnQkFDQ0YsV0FBV25CLGdEQUFJQSxDQUNiLHdDQUNBNEIsV0FBVzswQkFFZDs7Ozs7Ozs7Ozs7O0FBS1A7TUF6QlNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWluZm8uanN4P2QwNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gXCIuLi9wcm9maWxlXCI7XHJcbmltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcclxuXHJcbmltcG9ydCBhdmF0YXJTcmMxIGZyb20gXCIuL2ltYWdlcy9hdmF0YXItMS5wbmdcIjtcclxuaW1wb3J0IGF2YXRhclNyYzIgZnJvbSBcIi4vaW1hZ2VzL2F2YXRhci0yLnBuZ1wiO1xyXG5pbXBvcnQgYXZhdGFyU3JjMyBmcm9tIFwiLi9pbWFnZXMvYXZhdGFyLTMucG5nXCI7XHJcbmltcG9ydCBhdmF0YXJTcmM0IGZyb20gXCIuL2ltYWdlcy9hdmF0YXItNC5wbmdcIjtcclxuXHJcbmNvbnN0IHBsYXllcnMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiBcIlBhcm9tb3ZldmdcIixcclxuICAgIHJhdGluZzogMTIzMCxcclxuICAgIGF2YXRhcjogYXZhdGFyU3JjMSxcclxuICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiBcIlZlcmVJbnRlZGluZ2xhcG90dXJcIixcclxuICAgIHJhdGluZzogODUwLFxyXG4gICAgYXZhdGFyOiBhdmF0YXJTcmMyLFxyXG4gICAgc3ltYm9sOiBHQU1FX1NZTUJPTFMuWkVSTyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgbmFtZTogXCJMYXJhXCIsXHJcbiAgICByYXRpbmc6IDE0MDAsXHJcbiAgICBhdmF0YXI6IGF2YXRhclNyYzMsXHJcbiAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5UUklBTkdMRSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgbmFtZTogXCLQlNC+0LTQuNC6XCIsXHJcbiAgICByYXRpbmc6IDc2MCxcclxuICAgIGF2YXRhcjogYXZhdGFyU3JjNCxcclxuICAgIHN5bWJvbDogR0FNRV9TWU1CT0xTLlNRVUFSRSxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVJbmZvKHsgY2xhc3NOYW1lLCBwbGF5ZXJzQ291bnQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgXCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgcHgtOCBweS00IGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTMgXCIsXHJcbiAgICAgICl9XHJcbiAgICA+XHJcbiAgICAgIHtwbGF5ZXJzLnNsaWNlKDAsIHBsYXllcnNDb3VudCkubWFwKChwbGF5ZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxQbGF5ZXJJbmZvXHJcbiAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxyXG4gICAgICAgICAgICBwbGF5ZXJJbmZvPXtwbGF5ZXJ9XHJcbiAgICAgICAgICAgIGlzUmlnaHQ9e2luZGV4ICUgMiA9PT0gMX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQbGF5ZXJJbmZvKHsgcGxheWVySW5mbywgaXNSaWdodCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJyZWxhdGl2ZVwiLCBpc1JpZ2h0ICYmIFwib3JkZXItM1wiKX0+XHJcbiAgICAgICAgPFByb2ZpbGVcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNDRcIlxyXG4gICAgICAgICAgbmFtZT17cGxheWVySW5mby5uYW1lfVxyXG4gICAgICAgICAgcmF0aW5nPXtwbGF5ZXJJbmZvLnJhdGluZ31cclxuICAgICAgICAgIGF2YXRhcj17cGxheWVySW5mby5hdmF0YXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNSBoLTUgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHNoYWRvdyBhYnNvbHV0ZSAtbGVmdC0xIC10b3AtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPEdhbWVTeW1ib2wgc3ltYm9sPXtwbGF5ZXJJbmZvLnN5bWJvbH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwiaC02IHctcHggYmctc2xhdGUtMjAwXCIsIGlzUmlnaHQgJiYgXCJvcmRlci0yXCIpfSAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgXCJ0ZXh0LXNsYXRlLTkwMCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIixcclxuICAgICAgICAgIGlzUmlnaHQgJiYgXCJvcmRlci0xXCIsXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIDAxOjA4XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY2xzeCIsIlByb2ZpbGUiLCJHQU1FX1NZTUJPTFMiLCJHYW1lU3ltYm9sIiwiYXZhdGFyU3JjMSIsImF2YXRhclNyYzIiLCJhdmF0YXJTcmMzIiwiYXZhdGFyU3JjNCIsInBsYXllcnMiLCJpZCIsIm5hbWUiLCJyYXRpbmciLCJhdmF0YXIiLCJzeW1ib2wiLCJDUk9TUyIsIlpFUk8iLCJUUklBTkdMRSIsIlNRVUFSRSIsIkdhbWVJbmZvIiwiY2xhc3NOYW1lIiwicGxheWVyc0NvdW50IiwiZGl2Iiwic2xpY2UiLCJtYXAiLCJwbGF5ZXIiLCJpbmRleCIsIlBsYXllckluZm8iLCJwbGF5ZXJJbmZvIiwiaXNSaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-info.jsx\n"));

/***/ })

});