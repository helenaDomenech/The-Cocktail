webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/lib/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--8-3!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/lib/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--8-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab\");\n/* You can add global styles to this file, and also import other style files */\n/*FONTS*/\n/*COLORS*/\n.pretty * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.pretty input:not([type='checkbox']):not([type='radio']) {\n  display: none; }\n.pretty {\n  position: relative;\n  display: inline-block;\n  margin-right: 1em;\n  white-space: nowrap;\n  line-height: 1; }\n.pretty input {\n    position: absolute;\n    left: 0;\n    top: 0;\n    min-width: 1em;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    opacity: 0;\n    margin: 0;\n    padding: 0;\n    cursor: pointer; }\n.pretty .state label {\n    position: initial;\n    display: inline-block;\n    font-weight: normal;\n    margin: 0;\n    text-indent: 1.5em;\n    min-width: calc(1em + 2px); }\n.pretty .state label:before, .pretty .state label:after {\n      content: '';\n      width: calc(1em + 2px);\n      height: calc(1em + 2px);\n      display: block;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      border-radius: 0;\n      border: 1px solid transparent;\n      z-index: 0;\n      position: absolute;\n      left: 0;\n      top: calc((0% - (100% - 1em)) - 8%);\n      background-color: transparent; }\n.pretty .state label:before {\n      border-color: #bdc3c7; }\n.pretty .state.p-is-hover, .pretty .state.p-is-indeterminate {\n    display: none; }\n@-webkit-keyframes zoom {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); } }\n@keyframes zoom {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); } }\n@-webkit-keyframes tada {\n  0% {\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0;\n    -webkit-transform: scale(7);\n            transform: scale(7); }\n  38% {\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  55% {\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5); }\n  72% {\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  81% {\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    -webkit-transform: scale(1.24);\n            transform: scale(1.24); }\n  89% {\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  95% {\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    -webkit-transform: scale(1.04);\n            transform: scale(1.04); }\n  100% {\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@keyframes tada {\n  0% {\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0;\n    -webkit-transform: scale(7);\n            transform: scale(7); }\n  38% {\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  55% {\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5); }\n  72% {\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  81% {\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    -webkit-transform: scale(1.24);\n            transform: scale(1.24); }\n  89% {\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  95% {\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    -webkit-transform: scale(1.04);\n            transform: scale(1.04); }\n  100% {\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@-webkit-keyframes jelly {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1); }\n  30% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n            transform: scale3d(0.75, 1.25, 1); }\n  40% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n            transform: scale3d(1.25, 0.75, 1); }\n  50% {\n    -webkit-transform: scale3d(0.85, 1.15, 1);\n            transform: scale3d(0.85, 1.15, 1); }\n  65% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n            transform: scale3d(1.05, 0.95, 1); }\n  75% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n            transform: scale3d(0.95, 1.05, 1); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1); } }\n@keyframes jelly {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1); }\n  30% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n            transform: scale3d(0.75, 1.25, 1); }\n  40% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n            transform: scale3d(1.25, 0.75, 1); }\n  50% {\n    -webkit-transform: scale3d(0.85, 1.15, 1);\n            transform: scale3d(0.85, 1.15, 1); }\n  65% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n            transform: scale3d(1.05, 0.95, 1); }\n  75% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n            transform: scale3d(0.95, 1.05, 1); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1); } }\n@-webkit-keyframes rotate {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateZ(-200px) rotate(-45deg);\n            transform: translateZ(-200px) rotate(-45deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateZ(0) rotate(0);\n            transform: translateZ(0) rotate(0); } }\n@keyframes rotate {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateZ(-200px) rotate(-45deg);\n            transform: translateZ(-200px) rotate(-45deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateZ(0) rotate(0);\n            transform: translateZ(0) rotate(0); } }\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0px 0px 0px 0px #bdc3c7;\n            box-shadow: 0px 0px 0px 0px #bdc3c7; }\n  100% {\n    -webkit-box-shadow: 0px 0px 0px 1.5em rgba(189, 195, 199, 0);\n            box-shadow: 0px 0px 0px 1.5em rgba(189, 195, 199, 0); } }\n@keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0px 0px 0px 0px #bdc3c7;\n            box-shadow: 0px 0px 0px 0px #bdc3c7; }\n  100% {\n    -webkit-box-shadow: 0px 0px 0px 1.5em rgba(189, 195, 199, 0);\n            box-shadow: 0px 0px 0px 1.5em rgba(189, 195, 199, 0); } }\n.pretty.p-default.p-fill .state label:after {\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n.pretty.p-default .state label:after {\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6); }\n.pretty.p-default input:checked ~ .state label:after {\n  background-color: #bdc3c7 !important; }\n.pretty.p-default.p-thick .state label:before, .pretty.p-default.p-thick .state label:after {\n  border-width: calc(1em / 7); }\n.pretty.p-default.p-thick .state label:after {\n  -webkit-transform: scale(0.4) !important;\n          transform: scale(0.4) !important; }\n.pretty.p-icon .state .icon {\n  position: absolute;\n  font-size: 1em;\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  left: 0;\n  z-index: 1;\n  text-align: center;\n  line-height: normal;\n  top: calc((0% - (100% - 1em)) - 8%);\n  border: 1px solid transparent;\n  opacity: 0; }\n.pretty.p-icon .state .icon:before {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 1; }\n.pretty.p-icon input:checked ~ .state .icon {\n  opacity: 1; }\n.pretty.p-icon input:checked ~ .state label:before {\n  border-color: #5a656b; }\n.pretty.p-svg .state .svg {\n  position: absolute;\n  font-size: 1em;\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  left: 0;\n  z-index: 1;\n  text-align: center;\n  line-height: normal;\n  top: calc((0% - (100% - 1em)) - 8%);\n  border: 1px solid transparent;\n  opacity: 0; }\n.pretty.p-svg .state svg {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 1; }\n.pretty.p-svg input:checked ~ .state .svg {\n  opacity: 1; }\n.pretty.p-image .state img {\n  opacity: 0;\n  position: absolute;\n  width: calc(1em + 2px);\n  height: calc(1em + 2px);\n  top: 0;\n  top: calc((0% - (100% - 1em)) - 8%);\n  left: 0;\n  z-index: 0;\n  text-align: center;\n  line-height: normal;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n.pretty.p-image input:checked ~ .state img {\n  opacity: 1; }\n.pretty.p-switch input {\n  min-width: 2em; }\n.pretty.p-switch .state {\n  position: relative; }\n.pretty.p-switch .state:before {\n    content: '';\n    border: 1px solid #bdc3c7;\n    border-radius: 60px;\n    width: 2em;\n    -webkit-box-sizing: unset;\n            box-sizing: unset;\n    height: calc(1em + 2px);\n    position: absolute;\n    top: 0;\n    top: calc((0% - (100% - 1em)) - 16%);\n    z-index: 0;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease; }\n.pretty.p-switch .state label {\n    text-indent: 2.5em; }\n.pretty.p-switch .state label:before, .pretty.p-switch .state label:after {\n      -webkit-transition: all 0.5s ease;\n      transition: all 0.5s ease;\n      border-radius: 100%;\n      left: 0;\n      border-color: transparent;\n      -webkit-transform: scale(0.8);\n              transform: scale(0.8); }\n.pretty.p-switch .state label:after {\n      background-color: #bdc3c7 !important; }\n.pretty.p-switch input:checked ~ .state:before {\n  border-color: #5a656b; }\n.pretty.p-switch input:checked ~ .state label:before {\n  opacity: 0; }\n.pretty.p-switch input:checked ~ .state label:after {\n  background-color: #5a656b !important;\n  left: 1em; }\n.pretty.p-switch.p-fill input:checked ~ .state:before {\n  border-color: #5a656b;\n  background-color: #5a656b !important; }\n.pretty.p-switch.p-fill input:checked ~ .state label:before {\n  opacity: 0; }\n.pretty.p-switch.p-fill input:checked ~ .state label:after {\n  background-color: #fff !important;\n  left: 1em; }\n.pretty.p-switch.p-slim .state:before {\n  height: 0.1em;\n  background: #bdc3c7 !important;\n  top: calc(50% - 0.1em); }\n.pretty.p-switch.p-slim input:checked ~ .state:before {\n  border-color: #5a656b;\n  background-color: #5a656b !important; }\n.pretty.p-has-hover input:hover ~ .state:not(.p-is-hover) {\n  display: none; }\n.pretty.p-has-hover input:hover ~ .state.p-is-hover {\n  display: block; }\n.pretty.p-has-hover input:hover ~ .state.p-is-hover .icon {\n    display: block; }\n.pretty.p-has-focus input:focus ~ .state label:before {\n  -webkit-box-shadow: 0px 0px 3px 0px #bdc3c7;\n          box-shadow: 0px 0px 3px 0px #bdc3c7; }\n.pretty.p-has-indeterminate input[type='checkbox']:indeterminate ~ .state:not(.p-is-indeterminate) {\n  display: none; }\n.pretty.p-has-indeterminate input[type='checkbox']:indeterminate ~ .state.p-is-indeterminate {\n  display: block; }\n.pretty.p-has-indeterminate input[type='checkbox']:indeterminate ~ .state.p-is-indeterminate .icon {\n    display: block;\n    opacity: 1; }\n.pretty.p-toggle .state.p-on {\n  opacity: 0;\n  display: none; }\n.pretty.p-toggle .state.p-off,\n.pretty.p-toggle .state .icon,\n.pretty.p-toggle .state .svg,\n.pretty.p-toggle .state img {\n  opacity: 1;\n  display: inherit; }\n.pretty.p-toggle .state.p-off .icon {\n  color: #bdc3c7; }\n.pretty.p-toggle input:checked ~ .state.p-on {\n  opacity: 1;\n  display: inherit; }\n.pretty.p-toggle input:checked ~ .state.p-off {\n  opacity: 0;\n  display: none; }\n.pretty.p-plain input:checked ~ .state label:before,\n.pretty.p-plain.p-toggle .state label:before {\n  content: none; }\n.pretty.p-plain.p-plain .icon {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1); }\n.pretty.p-round .state label:before, .pretty.p-round .state label:after {\n  border-radius: 100%; }\n.pretty.p-round.p-icon .state .icon {\n  border-radius: 100%;\n  overflow: hidden; }\n.pretty.p-round.p-icon .state .icon:before {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); }\n.pretty.p-curve .state label:before, .pretty.p-curve .state label:after {\n  border-radius: 20%; }\n.pretty.p-smooth label:before,\n.pretty.p-smooth label:after,\n.pretty.p-smooth .icon,\n.pretty.p-smooth .svg {\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n.pretty.p-smooth input:checked + .state label:after {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n.pretty.p-smooth input:checked + .state .icon,\n.pretty.p-smooth input:checked + .state .svg,\n.pretty.p-smooth input:checked + .state img {\n  -webkit-animation: zoom 0.2s ease;\n          animation: zoom 0.2s ease; }\n.pretty.p-smooth.p-default input:checked + .state label:after {\n  -webkit-animation: zoom 0.2s ease;\n          animation: zoom 0.2s ease; }\n.pretty.p-smooth.p-plain input:checked + .state label:before {\n  content: '';\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n.pretty.p-tada:not(.p-default) input:checked + .state .icon,\n.pretty.p-tada:not(.p-default) input:checked + .state .svg,\n.pretty.p-tada:not(.p-default) input:checked + .state img,\n.pretty.p-tada:not(.p-default) input:checked + .state label:before,\n.pretty.p-tada:not(.p-default) input:checked + .state label:after {\n  -webkit-animation: tada 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1 alternate;\n          animation: tada 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1 alternate;\n  opacity: 1; }\n.pretty.p-jelly:not(.p-default) input:checked + .state .icon,\n.pretty.p-jelly:not(.p-default) input:checked + .state .svg,\n.pretty.p-jelly:not(.p-default) input:checked + .state img,\n.pretty.p-jelly:not(.p-default) input:checked + .state label:before,\n.pretty.p-jelly:not(.p-default) input:checked + .state label:after {\n  -webkit-animation: jelly 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n          animation: jelly 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  opacity: 1; }\n.pretty.p-jelly:not(.p-default) input:checked + .state label:before {\n  border-color: transparent; }\n.pretty.p-rotate:not(.p-default) input:checked ~ .state .icon,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state .svg,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state img,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state label:before,\n.pretty.p-rotate:not(.p-default) input:checked ~ .state label:after {\n  -webkit-animation: rotate 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n          animation: rotate 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  opacity: 1; }\n.pretty.p-rotate:not(.p-default) input:checked ~ .state label:before {\n  border-color: transparent; }\n.pretty.p-pulse:not(.p-switch) input:checked ~ .state label:before {\n  -webkit-animation: pulse 1s;\n          animation: pulse 1s; }\n.pretty input[disabled] {\n  cursor: not-allowed;\n  display: none; }\n.pretty input[disabled] ~ * {\n    opacity: .5; }\n.pretty.p-locked input {\n  display: none;\n  cursor: not-allowed; }\n.pretty input:checked ~ .state.p-primary label:after,\n.pretty.p-toggle .state.p-primary label:after {\n  background-color: #428bca !important; }\n.pretty input:checked ~ .state.p-primary .icon,\n.pretty input:checked ~ .state.p-primary .svg,\n.pretty.p-toggle .state.p-primary .icon,\n.pretty.p-toggle .state.p-primary .svg {\n  color: #fff;\n  stroke: #fff; }\n.pretty input:checked ~ .state.p-primary-o label:before,\n.pretty.p-toggle .state.p-primary-o label:before {\n  border-color: #428bca; }\n.pretty input:checked ~ .state.p-primary-o label:after,\n.pretty.p-toggle .state.p-primary-o label:after {\n  background-color: transparent; }\n.pretty input:checked ~ .state.p-primary-o .icon,\n.pretty input:checked ~ .state.p-primary-o .svg,\n.pretty input:checked ~ .state.p-primary-o svg,\n.pretty.p-toggle .state.p-primary-o .icon,\n.pretty.p-toggle .state.p-primary-o .svg,\n.pretty.p-toggle .state.p-primary-o svg {\n  color: #428bca;\n  stroke: #428bca; }\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-primary-o label:after {\n  background-color: #428bca !important; }\n.pretty.p-switch input:checked ~ .state.p-primary:before {\n  border-color: #428bca; }\n.pretty.p-switch.p-fill input:checked ~ .state.p-primary:before {\n  background-color: #428bca !important; }\n.pretty.p-switch.p-slim input:checked ~ .state.p-primary:before {\n  border-color: #245682;\n  background-color: #245682 !important; }\n.pretty input:checked ~ .state.p-info label:after,\n.pretty.p-toggle .state.p-info label:after {\n  background-color: #5bc0de !important; }\n.pretty input:checked ~ .state.p-info .icon,\n.pretty input:checked ~ .state.p-info .svg,\n.pretty.p-toggle .state.p-info .icon,\n.pretty.p-toggle .state.p-info .svg {\n  color: #fff;\n  stroke: #fff; }\n.pretty input:checked ~ .state.p-info-o label:before,\n.pretty.p-toggle .state.p-info-o label:before {\n  border-color: #5bc0de; }\n.pretty input:checked ~ .state.p-info-o label:after,\n.pretty.p-toggle .state.p-info-o label:after {\n  background-color: transparent; }\n.pretty input:checked ~ .state.p-info-o .icon,\n.pretty input:checked ~ .state.p-info-o .svg,\n.pretty input:checked ~ .state.p-info-o svg,\n.pretty.p-toggle .state.p-info-o .icon,\n.pretty.p-toggle .state.p-info-o .svg,\n.pretty.p-toggle .state.p-info-o svg {\n  color: #5bc0de;\n  stroke: #5bc0de; }\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-info-o label:after {\n  background-color: #5bc0de !important; }\n.pretty.p-switch input:checked ~ .state.p-info:before {\n  border-color: #5bc0de; }\n.pretty.p-switch.p-fill input:checked ~ .state.p-info:before {\n  background-color: #5bc0de !important; }\n.pretty.p-switch.p-slim input:checked ~ .state.p-info:before {\n  border-color: #2390b0;\n  background-color: #2390b0 !important; }\n.pretty input:checked ~ .state.p-success label:after,\n.pretty.p-toggle .state.p-success label:after {\n  background-color: #5cb85c !important; }\n.pretty input:checked ~ .state.p-success .icon,\n.pretty input:checked ~ .state.p-success .svg,\n.pretty.p-toggle .state.p-success .icon,\n.pretty.p-toggle .state.p-success .svg {\n  color: #fff;\n  stroke: #fff; }\n.pretty input:checked ~ .state.p-success-o label:before,\n.pretty.p-toggle .state.p-success-o label:before {\n  border-color: #5cb85c; }\n.pretty input:checked ~ .state.p-success-o label:after,\n.pretty.p-toggle .state.p-success-o label:after {\n  background-color: transparent; }\n.pretty input:checked ~ .state.p-success-o .icon,\n.pretty input:checked ~ .state.p-success-o .svg,\n.pretty input:checked ~ .state.p-success-o svg,\n.pretty.p-toggle .state.p-success-o .icon,\n.pretty.p-toggle .state.p-success-o .svg,\n.pretty.p-toggle .state.p-success-o svg {\n  color: #5cb85c;\n  stroke: #5cb85c; }\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-success-o label:after {\n  background-color: #5cb85c !important; }\n.pretty.p-switch input:checked ~ .state.p-success:before {\n  border-color: #5cb85c; }\n.pretty.p-switch.p-fill input:checked ~ .state.p-success:before {\n  background-color: #5cb85c !important; }\n.pretty.p-switch.p-slim input:checked ~ .state.p-success:before {\n  border-color: #357935;\n  background-color: #357935 !important; }\n.pretty input:checked ~ .state.p-warning label:after,\n.pretty.p-toggle .state.p-warning label:after {\n  background-color: #f0ad4e !important; }\n.pretty input:checked ~ .state.p-warning .icon,\n.pretty input:checked ~ .state.p-warning .svg,\n.pretty.p-toggle .state.p-warning .icon,\n.pretty.p-toggle .state.p-warning .svg {\n  color: #fff;\n  stroke: #fff; }\n.pretty input:checked ~ .state.p-warning-o label:before,\n.pretty.p-toggle .state.p-warning-o label:before {\n  border-color: #f0ad4e; }\n.pretty input:checked ~ .state.p-warning-o label:after,\n.pretty.p-toggle .state.p-warning-o label:after {\n  background-color: transparent; }\n.pretty input:checked ~ .state.p-warning-o .icon,\n.pretty input:checked ~ .state.p-warning-o .svg,\n.pretty input:checked ~ .state.p-warning-o svg,\n.pretty.p-toggle .state.p-warning-o .icon,\n.pretty.p-toggle .state.p-warning-o .svg,\n.pretty.p-toggle .state.p-warning-o svg {\n  color: #f0ad4e;\n  stroke: #f0ad4e; }\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-warning-o label:after {\n  background-color: #f0ad4e !important; }\n.pretty.p-switch input:checked ~ .state.p-warning:before {\n  border-color: #f0ad4e; }\n.pretty.p-switch.p-fill input:checked ~ .state.p-warning:before {\n  background-color: #f0ad4e !important; }\n.pretty.p-switch.p-slim input:checked ~ .state.p-warning:before {\n  border-color: #c77c11;\n  background-color: #c77c11 !important; }\n.pretty input:checked ~ .state.p-danger label:after,\n.pretty.p-toggle .state.p-danger label:after {\n  background-color: #d9534f !important; }\n.pretty input:checked ~ .state.p-danger .icon,\n.pretty input:checked ~ .state.p-danger .svg,\n.pretty.p-toggle .state.p-danger .icon,\n.pretty.p-toggle .state.p-danger .svg {\n  color: #fff;\n  stroke: #fff; }\n.pretty input:checked ~ .state.p-danger-o label:before,\n.pretty.p-toggle .state.p-danger-o label:before {\n  border-color: #d9534f; }\n.pretty input:checked ~ .state.p-danger-o label:after,\n.pretty.p-toggle .state.p-danger-o label:after {\n  background-color: transparent; }\n.pretty input:checked ~ .state.p-danger-o .icon,\n.pretty input:checked ~ .state.p-danger-o .svg,\n.pretty input:checked ~ .state.p-danger-o svg,\n.pretty.p-toggle .state.p-danger-o .icon,\n.pretty.p-toggle .state.p-danger-o .svg,\n.pretty.p-toggle .state.p-danger-o svg {\n  color: #d9534f;\n  stroke: #d9534f; }\n.pretty.p-default:not(.p-fill) input:checked ~ .state.p-danger-o label:after {\n  background-color: #d9534f !important; }\n.pretty.p-switch input:checked ~ .state.p-danger:before {\n  border-color: #d9534f; }\n.pretty.p-switch.p-fill input:checked ~ .state.p-danger:before {\n  background-color: #d9534f !important; }\n.pretty.p-switch.p-slim input:checked ~ .state.p-danger:before {\n  border-color: #a02622;\n  background-color: #a02622 !important; }\n.pretty.p-bigger label:before,\n.pretty.p-bigger label:after,\n.pretty.p-bigger .icon,\n.pretty.p-bigger .svg,\n.pretty.p-bigger .img {\n  font-size: 1.2em !important;\n  top: calc((0% - (100% - 1em)) - 35%) !important; }\n.pretty.p-bigger label {\n  text-indent: 1.7em; }\n@media print {\n  .pretty .state:before,\n  .pretty .state label:before,\n  .pretty .state label:after,\n  .pretty .state .icon {\n    color-adjust: exact;\n    /* stylelint-disable */\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact; } }\nbody {\n  font-family: \"Roboto\", sans-seriff;\n  background: #f9f9f9;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\nbody nav ul {\n    background: #fff;\n    border-bottom: 1px solid #f9f9f9;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n    -ms-flex-line-pack: end;\n        align-content: flex-end; }\nbody nav ul li {\n      list-style: none; }\nbody nav ul li div {\n        padding: 1em;\n        color: #cbe4f9; }\n/* Medium screens */\n@media all and (max-width: 800px) {\n  nav {\n    /* When on medium sized screens, we center it by evenly distributing empty space around items */\n    -ms-flex-pack: distribute;\n        justify-content: space-around; } }\n/* Small screens */\n@media all and (max-width: 500px) {\n  nav {\n    /* On small screens, we are no longer using row direction but column */\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; } }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map