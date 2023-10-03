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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _features_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/features/auth */ \"./features/auth/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SignUp = ()=>{\n    _s();\n    const { updateName, updateEmail, updatePassword, updatePasswordConfirmation, sendSignUpData } = (0,_features_auth__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        const response = sendSignUpData()// 別名をつけている\n        .then((param)=>{\n            let { token: bearer_token } = param;\n            localStorage.setItem(\"bearer_token\", bearer_token.token);\n            router.push(\"/mypage\");\n        }).catch(console.error);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold underline\",\n                children: \"新規会員登録\"\n            }, void 0, false, {\n                fileName: \"/Users/yuuki_haga/repos/auth/bearer_authentication/frontend/pages/sign_up.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_auth__WEBPACK_IMPORTED_MODULE_4__.SignUpForm, {\n                onChangeName: updateName,\n                onChangeEmail: updateEmail,\n                onChangePassword: updatePassword,\n                onChangePasswordConfirmation: updatePasswordConfirmation,\n                onSubmit: onSubmit\n            }, void 0, false, {\n                fileName: \"/Users/yuuki_haga/repos/auth/bearer_authentication/frontend/pages/sign_up.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"./login\",\n                    children: \"ログインはこちら\"\n                }, void 0, false, {\n                    fileName: \"/Users/yuuki_haga/repos/auth/bearer_authentication/frontend/pages/sign_up.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yuuki_haga/repos/auth/bearer_authentication/frontend/pages/sign_up.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yuuki_haga/repos/auth/bearer_authentication/frontend/pages/sign_up.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignUp, \"SBQM8m6d0MXVGvErDSB76R4S7qs=\", false, function() {\n    return [\n        _features_auth__WEBPACK_IMPORTED_MODULE_4__.useAuth,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SignUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUp);\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduX3VwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDVztBQVF6QjtBQUN1QztBQUV0RCxNQUFNSyxTQUFhOztJQUNqQixNQUFNLEVBQ0pDLFVBQVUsRUFDVkMsV0FBVyxFQUNYQyxjQUFjLEVBQ2RDLDBCQUEwQixFQUMxQkMsY0FBYyxFQUNmLEdBQUdQLHVEQUFPQTtJQUVYLE1BQU1RLFNBQVNWLHNEQUFTQTtJQUV4QixNQUFNVyxXQUFXLENBQUNDO1FBQ2hCQSxFQUFFQyxjQUFjO1FBRWhCLE1BQU1DLFdBQVdMLGdCQUNmLFdBQVc7U0FDVk0sSUFBSSxDQUFDO2dCQUFDLEVBQUVDLE9BQU9DLFlBQVksRUFBRTtZQUM1QkMsYUFBYUMsT0FBTyxDQUFDLGdCQUFnQkYsYUFBYUQsS0FBSztZQUN2RE4sT0FBT1UsSUFBSSxDQUFDO1FBQ2QsR0FDQ0MsS0FBSyxDQUFDQyxRQUFRQyxLQUFLO0lBQ3hCO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQStCOzs7Ozs7MEJBQzdDLDhEQUFDdkIsc0RBQVVBO2dCQUNUd0IsY0FBY3RCO2dCQUNkdUIsZUFBZXRCO2dCQUNmdUIsa0JBQWtCdEI7Z0JBQ2xCdUIsOEJBQThCdEI7Z0JBQzlCRyxVQUFVQTs7Ozs7OzBCQUVaLDhEQUFDYTswQkFDQyw0RUFBQ3pCLGtEQUFJQTtvQkFBQ2dDLE1BQUs7OEJBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdCO0dBdENNM0I7O1FBT0FGLG1EQUFPQTtRQUVJRixrREFBU0E7OztLQVRwQkk7QUF3Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbl91cC50c3g/NTJmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwge1xuICBDaGFuZ2VFdmVudCxcbiAgRkMsXG4gIEZvcm1FdmVudCxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZVN0YXRlLFxuICBTeW50aGV0aWNFdmVudCxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBdXRoLCBTaWduVXBGb3JtIH0gZnJvbSBcIn4vZmVhdHVyZXMvYXV0aFwiO1xuXG5jb25zdCBTaWduVXA6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgdXBkYXRlTmFtZSxcbiAgICB1cGRhdGVFbWFpbCxcbiAgICB1cGRhdGVQYXNzd29yZCxcbiAgICB1cGRhdGVQYXNzd29yZENvbmZpcm1hdGlvbixcbiAgICBzZW5kU2lnblVwRGF0YSxcbiAgfSA9IHVzZUF1dGgoKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gc2VuZFNpZ25VcERhdGEoKVxuICAgICAgLy8g5Yil5ZCN44KS44Gk44GR44Gm44GE44KLXG4gICAgICAudGhlbigoeyB0b2tlbjogYmVhcmVyX3Rva2VuIH0pID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiZWFyZXJfdG9rZW5cIiwgYmVhcmVyX3Rva2VuLnRva2VuKTtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbXlwYWdlXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHVuZGVybGluZVwiPuaWsOimj+S8muWToeeZu+mMsjwvaDE+XG4gICAgICA8U2lnblVwRm9ybVxuICAgICAgICBvbkNoYW5nZU5hbWU9e3VwZGF0ZU5hbWV9XG4gICAgICAgIG9uQ2hhbmdlRW1haWw9e3VwZGF0ZUVtYWlsfVxuICAgICAgICBvbkNoYW5nZVBhc3N3b3JkPXt1cGRhdGVQYXNzd29yZH1cbiAgICAgICAgb25DaGFuZ2VQYXNzd29yZENvbmZpcm1hdGlvbj17dXBkYXRlUGFzc3dvcmRDb25maXJtYXRpb259XG4gICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICAgIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiLi9sb2dpblwiPuODreOCsOOCpOODs+OBr+OBk+OBoeOCiTwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUF1dGgiLCJTaWduVXBGb3JtIiwiU2lnblVwIiwidXBkYXRlTmFtZSIsInVwZGF0ZUVtYWlsIiwidXBkYXRlUGFzc3dvcmQiLCJ1cGRhdGVQYXNzd29yZENvbmZpcm1hdGlvbiIsInNlbmRTaWduVXBEYXRhIiwicm91dGVyIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsInRoZW4iLCJ0b2tlbiIsImJlYXJlcl90b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlTmFtZSIsIm9uQ2hhbmdlRW1haWwiLCJvbkNoYW5nZVBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZENvbmZpcm1hdGlvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sign_up.tsx\n"));

/***/ })

});