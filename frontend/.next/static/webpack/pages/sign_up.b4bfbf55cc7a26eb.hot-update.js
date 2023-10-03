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

/***/ "./features/auth/hooks/useAuth.ts":
/*!****************************************!*\
  !*** ./features/auth/hooks/useAuth.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useAuth() {\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const [passwordConfirmation, setPasswordConfirmation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const sendSignUpData = async ()=>{\n        const response = await fetch(\"http://localhost:8080/users\", {\n            method: \"POST\",\n            mode: \"cors\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                name,\n                email,\n                password,\n                password_confirmation: passwordConfirmation\n            })\n        });\n        return response;\n    };\n    const updateName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{\n        setName(e.target.value);\n    }, []);\n    const updateEmail = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{\n        setEmail(e.target.value);\n    }, []);\n    const updatePassword = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{\n        setPassword(e.target.value);\n    }, []);\n    const updatePasswordConfirmation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{\n        setPasswordConfirmation(e.target.value);\n    }, []);\n    return {\n        updateName,\n        updateEmail,\n        updatePassword,\n        updatePasswordConfirmation,\n        sendSignUpData\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9hdXRoL2hvb2tzL3VzZUF1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJEO0FBZXBELFNBQVNFO0lBQ2QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxzQkFBc0JDLHdCQUF3QixHQUFHViwrQ0FBUUEsQ0FBQztJQUVqRSxNQUFNVyxpQkFBaUI7UUFDckIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLCtCQUErQjtZQUMxREMsUUFBUTtZQUNSQyxNQUFNO1lBQ05DLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJoQjtnQkFDQUU7Z0JBQ0FFO2dCQUNBYSx1QkFBdUJYO1lBQ3pCO1FBQ0Y7UUFFQSxPQUFPRztJQUNUO0lBRUEsTUFBTVMsYUFBYXBCLGtEQUFXQSxDQUFDLENBQUNxQjtRQUM5QmxCLFFBQVFrQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDeEIsR0FBRyxFQUFFO0lBRUwsTUFBTUMsY0FBY3hCLGtEQUFXQSxDQUFDLENBQUNxQjtRQUMvQmhCLFNBQVNnQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDekIsR0FBRyxFQUFFO0lBRUwsTUFBTUUsaUJBQWlCekIsa0RBQVdBLENBQUMsQ0FBQ3FCO1FBQ2xDZCxZQUFZYyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDNUIsR0FBRyxFQUFFO0lBRUwsTUFBTUcsNkJBQTZCMUIsa0RBQVdBLENBQzVDLENBQUNxQjtRQUNDWix3QkFBd0JZLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN4QyxHQUNBLEVBQUU7SUFHSixPQUFPO1FBQ0xIO1FBQ0FJO1FBQ0FDO1FBQ0FDO1FBQ0FoQjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmVhdHVyZXMvYXV0aC9ob29rcy91c2VBdXRoLnRzP2FlODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIENoYW5nZUV2ZW50LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFNpZ25VcFJlc3BvbnNlID0ge1xuICB1c2VyOiB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgfTtcbiAgdG9rZW46IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjcmVhdGVkX2F0OiBEYXRlO1xuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmRDb25maXJtYXRpb24sIHNldFBhc3N3b3JkQ29uZmlybWF0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHNlbmRTaWduVXBEYXRhID0gYXN5bmMgKCk6IFByb21pc2U8U2lnblVwUmVzcG9uc2U+ID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VzZXJzXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogcGFzc3dvcmRDb25maXJtYXRpb24sXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVOYW1lID0gdXNlQ2FsbGJhY2soKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB1cGRhdGVFbWFpbCA9IHVzZUNhbGxiYWNrKChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHVwZGF0ZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdXBkYXRlUGFzc3dvcmRDb25maXJtYXRpb24gPSB1c2VDYWxsYmFjayhcbiAgICAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIHNldFBhc3N3b3JkQ29uZmlybWF0aW9uKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9LFxuICAgIFtdXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGVOYW1lLFxuICAgIHVwZGF0ZUVtYWlsLFxuICAgIHVwZGF0ZVBhc3N3b3JkLFxuICAgIHVwZGF0ZVBhc3N3b3JkQ29uZmlybWF0aW9uLFxuICAgIHNlbmRTaWduVXBEYXRhLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VBdXRoIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkQ29uZmlybWF0aW9uIiwic2V0UGFzc3dvcmRDb25maXJtYXRpb24iLCJzZW5kU2lnblVwRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicGFzc3dvcmRfY29uZmlybWF0aW9uIiwidXBkYXRlTmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVwZGF0ZUVtYWlsIiwidXBkYXRlUGFzc3dvcmQiLCJ1cGRhdGVQYXNzd29yZENvbmZpcm1hdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./features/auth/hooks/useAuth.ts\n"));

/***/ })

});