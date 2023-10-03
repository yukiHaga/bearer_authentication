"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sign_up",{

/***/ "./pages/sign_up.tsx":
/*!***************************!*\
  !*** ./pages/sign_up.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _features_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/features/auth */ \"./features/auth/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst SignUp = ()=>{\n    _s();\n    const { updateName, updateEmail, updatePassword, updatePasswordConfirmation, sendSignUpData } = (0,_features_auth__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        const response = sendSignUpData().then((param)=>{\n            let { token: bearer_token } = param;\n            localStorage.setItem(\"bearer_token\", bearer_token.token);\n        }).catch(console.error);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold underline\",\n                children: \"新規会員登録\"\n            }, void 0, false, {\n                fileName: \"/Users/yuuki_haga/repos/auth/bearer_authentication/frontend/pages/sign_up.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_auth__WEBPACK_IMPORTED_MODULE_3__.SignUpForm, {\n                onChangeName: updateName,\n                onChangeEmail: updateEmail,\n                onChangePassword: updatePassword,\n                onChangePasswordConfirmation: updatePasswordConfirmation,\n                onSubmit: onSubmit\n            }, void 0, false, {\n                fileName: \"/Users/yuuki_haga/repos/auth/bearer_authentication/frontend/pages/sign_up.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"./login\",\n                    children: \"ログインはこちら\"\n                }, void 0, false, {\n                    fileName: \"/Users/yuuki_haga/repos/auth/bearer_authentication/frontend/pages/sign_up.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yuuki_haga/repos/auth/bearer_authentication/frontend/pages/sign_up.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yuuki_haga/repos/auth/bearer_authentication/frontend/pages/sign_up.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignUp, \"KUxOrzkmusYtL/YpLt8laF3bMHI=\", false, function() {\n    return [\n        _features_auth__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = SignUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUp);\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduX3VwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZCO0FBUWQ7QUFDdUM7QUFFdEQsTUFBTUksU0FBYTs7SUFDakIsTUFBTSxFQUNKQyxVQUFVLEVBQ1ZDLFdBQVcsRUFDWEMsY0FBYyxFQUNkQywwQkFBMEIsRUFDMUJDLGNBQWMsRUFDZixHQUFHUCx1REFBT0E7SUFFWCxNQUFNUSxXQUFXLENBQUNDO1FBQ2hCQSxFQUFFQyxjQUFjO1FBRWhCLE1BQU1DLFdBQVdKLGlCQUNkSyxJQUFJLENBQUM7Z0JBQUMsRUFBRUMsT0FBT0MsWUFBWSxFQUFFO1lBQzVCQyxhQUFhQyxPQUFPLENBQUMsZ0JBQWdCRixhQUFhRCxLQUFLO1FBQ3pELEdBQ0NJLEtBQUssQ0FBQ0MsUUFBUUMsS0FBSztJQUN4QjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUErQjs7Ozs7OzBCQUM3Qyw4REFBQ3JCLHNEQUFVQTtnQkFDVHNCLGNBQWNwQjtnQkFDZHFCLGVBQWVwQjtnQkFDZnFCLGtCQUFrQnBCO2dCQUNsQnFCLDhCQUE4QnBCO2dCQUM5QkUsVUFBVUE7Ozs7OzswQkFFWiw4REFBQ1k7MEJBQ0MsNEVBQUN0QixrREFBSUE7b0JBQUM2QixNQUFLOzhCQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QjtHQWxDTXpCOztRQU9BRixtREFBT0E7OztLQVBQRTtBQW9DTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduX3VwLnRzeD81MmY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwge1xuICBDaGFuZ2VFdmVudCxcbiAgRkMsXG4gIEZvcm1FdmVudCxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZVN0YXRlLFxuICBTeW50aGV0aWNFdmVudCxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBdXRoLCBTaWduVXBGb3JtIH0gZnJvbSBcIn4vZmVhdHVyZXMvYXV0aFwiO1xuXG5jb25zdCBTaWduVXA6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgdXBkYXRlTmFtZSxcbiAgICB1cGRhdGVFbWFpbCxcbiAgICB1cGRhdGVQYXNzd29yZCxcbiAgICB1cGRhdGVQYXNzd29yZENvbmZpcm1hdGlvbixcbiAgICBzZW5kU2lnblVwRGF0YSxcbiAgfSA9IHVzZUF1dGgoKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gc2VuZFNpZ25VcERhdGEoKVxuICAgICAgLnRoZW4oKHsgdG9rZW46IGJlYXJlcl90b2tlbiB9KSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmVhcmVyX3Rva2VuXCIsIGJlYXJlcl90b2tlbi50b2tlbik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdW5kZXJsaW5lXCI+5paw6KaP5Lya5ZOh55m76YyyPC9oMT5cbiAgICAgIDxTaWduVXBGb3JtXG4gICAgICAgIG9uQ2hhbmdlTmFtZT17dXBkYXRlTmFtZX1cbiAgICAgICAgb25DaGFuZ2VFbWFpbD17dXBkYXRlRW1haWx9XG4gICAgICAgIG9uQ2hhbmdlUGFzc3dvcmQ9e3VwZGF0ZVBhc3N3b3JkfVxuICAgICAgICBvbkNoYW5nZVBhc3N3b3JkQ29uZmlybWF0aW9uPXt1cGRhdGVQYXNzd29yZENvbmZpcm1hdGlvbn1cbiAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIuL2xvZ2luXCI+44Ot44Kw44Kk44Oz44Gv44GT44Gh44KJPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlQXV0aCIsIlNpZ25VcEZvcm0iLCJTaWduVXAiLCJ1cGRhdGVOYW1lIiwidXBkYXRlRW1haWwiLCJ1cGRhdGVQYXNzd29yZCIsInVwZGF0ZVBhc3N3b3JkQ29uZmlybWF0aW9uIiwic2VuZFNpZ25VcERhdGEiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwidGhlbiIsInRva2VuIiwiYmVhcmVyX3Rva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJvbkNoYW5nZU5hbWUiLCJvbkNoYW5nZUVtYWlsIiwib25DaGFuZ2VQYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmRDb25maXJtYXRpb24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sign_up.tsx\n"));

/***/ })

});