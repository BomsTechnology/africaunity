"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_front_SingleUniversity_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Error.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Error.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/SingleUniversity.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/SingleUniversity.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_Header_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header.vue */ "./resources/js/components/Header.vue");
/* harmony import */ var _components_Footer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer.vue */ "./resources/js/components/Footer.vue");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/EmojiSadIcon.js");
/* harmony import */ var _services_universityServices_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/universityServices.js */ "./resources/js/services/universityServices.js");
/* harmony import */ var _components_Error_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Error.vue */ "./resources/js/components/Error.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    id: {
      required: true,
      type: String
    }
  },
  components: {
    EmojiSadIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_7__["default"],
    Header: _components_Header_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Footer: _components_Footer_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Error: _components_Error_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  created: function created() {
    if (!localStorage.token) {
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push({
        name: "login"
      });
    }
  },
  setup: function setup(props) {
    var _useUniversities = (0,_services_universityServices_js__WEBPACK_IMPORTED_MODULE_5__["default"])(),
        university = _useUniversities.university,
        getUniversity2 = _useUniversities.getUniversity2,
        loading = _useUniversities.loading;

    var user = JSON.parse(localStorage.user);
    (0,vue__WEBPACK_IMPORTED_MODULE_2__.onMounted)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getUniversity2(props.id);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    return {
      loading: loading,
      university: university,
      user: user
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Error.vue?vue&type=template&id=3409f2a6":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Error.vue?vue&type=template&id=3409f2a6 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-full mt-4 text-white bg-red-500"
};
var _hoisted_2 = {
  "class": "container flex items-center justify-between px-6 py-4 mx-auto"
};
var _hoisted_3 = {
  "class": "flex"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  viewBox: "0 0 40 40",
  "class": "w-6 h-6 fill-current"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
})], -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "mx-3"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-5 h-5",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M6 18L18 6M6 6L18 18",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
})])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])]), _hoisted_6])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/SingleUniversity.vue?vue&type=template&id=1fcc3c0a":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/SingleUniversity.vue?vue&type=template&id=1fcc3c0a ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "px-20 text-lg"
};
var _hoisted_2 = {
  key: 0,
  "class": "py-6 px-4"
};
var _hoisted_3 = {
  "class": "overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
};
var _hoisted_4 = ["src"];
var _hoisted_5 = {
  "class": "p-6"
};
var _hoisted_6 = {
  href: "#",
  "class": "text-xs py-1 px-2 rounded capitalize text-white bg-primary-blue"
};
var _hoisted_7 = {
  key: 0
};
var _hoisted_8 = {
  key: 1
};
var _hoisted_9 = {
  key: 2
};
var _hoisted_10 = {
  key: 3
};
var _hoisted_11 = {
  "class": "block mt-2 text-3xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600"
};
var _hoisted_12 = {
  "class": "mt-2 py-4 my-4 text-gray-600 dark:text-gray-400"
};
var _hoisted_13 = {
  key: 1,
  "class": "p-28"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "animate-spin h-16 w-16 mx-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  "class": "opacity-25",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "class": "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
})], -1
/* HOISTED */
);

var _hoisted_15 = [_hoisted_14];
var _hoisted_16 = {
  key: 2,
  "class": "p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
};
var _hoisted_17 = {
  "class": "text-2xl mt-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Header");

  var _component_EmojiSadIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EmojiSadIcon");

  var _component_Footer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Footer");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [$setup.university.length != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" University "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "object-cover w-full h-96",
    src: $setup.university.image,
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_6, [_ctx.$i18n.locale == 'en' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.university.city.name_en + '-' + $setup.university.country.code_iso), 1
  /* TEXT */
  )) : _ctx.$i18n.locale == 'fr' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.university.city.name_fr + '-' + $setup.university.country.code_iso), 1
  /* TEXT */
  )) : _ctx.$i18n.locale == 'es' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.university.city.name_es + '-' + $setup.university.country.code_iso), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.university.country.name_pt + '-' + $setup.university.country.code_iso), 1
  /* TEXT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.university.name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.university.description), 1
  /* TEXT */
  )])])])])) : $setup.loading == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, _hoisted_15)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_EmojiSadIcon, {
    "class": "h-16 w-16"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('no-content')), 1
  /* TEXT */
  )]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Footer)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/services/universityServices.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/universityServices.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useUniversities)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _router_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router/index.js */ "./resources/js/router/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function useUniversities() {
  var universities = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var university = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)('');
  var loading = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(0);

  var getUniversities = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              errors.value = '';
              loading.value = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/universities', {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 4:
              response = _context.sent;
              universities.value = response.data.data;
              loading.value = 2; // console.log(universities.value);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getUniversities() {
      return _ref.apply(this, arguments);
    };
  }();

  var getUniversity = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              errors.value = '';
              loading.value = 1;
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/universities/' + id, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 4:
              response = _context2.sent;
              loading.value = 0;
              university.value = response.data.data;

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getUniversity(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getUniversity2 = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              errors.value = '';
              loading.value = 1;
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/universities2/' + id, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 4:
              response = _context3.sent;
              loading.value = 0;
              university.value = response.data.data;

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getUniversity2(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var createUniversity = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(data) {
      var key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              errors.value = '';
              _context4.prev = 1;
              loading.value = 1;
              _context4.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/universities', data, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 5:
              loading.value = 2;
              _router_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].push({
                name: 'admin.university.index'
              });
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](1);

              if (_context4.t0.response.status == 422) {
                loading.value = 0;

                for (key in _context4.t0.response.data.errors) {
                  errors.value += _context4.t0.response.data.errors[key][0] + "\n";
                }
              }

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 9]]);
    }));

    return function createUniversity(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var updateUniversity = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(data, id) {
      var key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              errors.value = '';
              _context5.prev = 1;
              loading.value = 1;
              _context5.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/universities/' + id, data, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 5:
              loading.value = 2;
              _router_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].push({
                name: 'admin.university.index'
              });
              _context5.next = 13;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](1);
              loading.value = 0;

              if (_context5.t0.response.status == 422) {
                for (key in _context5.t0.response.data.errors) {
                  errors.value += _context5.t0.response.data.errors[key][0] + '\t\n';
                }
              }

            case 13:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 9]]);
    }));

    return function updateUniversity(_x4, _x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  var destroyUniversity = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              errors.value = '';
              _context6.prev = 1;
              loading.value = 1;
              _context6.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]('/api/universities/' + id, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 5:
              loading.value = 2;
              _context6.next = 12;
              break;

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](1);
              loading.value = 0;

              if (_context6.t0.response.status == '500') {
                errors.value = 'Impossible de supprimer ce pays';
              }

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[1, 8]]);
    }));

    return function destroyUniversity(_x6) {
      return _ref6.apply(this, arguments);
    };
  }();

  return {
    universities: universities,
    university: university,
    errors: errors,
    loading: loading,
    getUniversities: getUniversities,
    getUniversity: getUniversity,
    createUniversity: createUniversity,
    updateUniversity: updateUniversity,
    destroyUniversity: destroyUniversity,
    getUniversity2: getUniversity2
  };
}

/***/ }),

/***/ "./resources/js/components/Error.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Error.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Error_vue_vue_type_template_id_3409f2a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error.vue?vue&type=template&id=3409f2a6 */ "./resources/js/components/Error.vue?vue&type=template&id=3409f2a6");
/* harmony import */ var _Error_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error.vue?vue&type=script&lang=js */ "./resources/js/components/Error.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_auth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_auth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Error_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Error_vue_vue_type_template_id_3409f2a6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Error.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/front/SingleUniversity.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/front/SingleUniversity.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SingleUniversity_vue_vue_type_template_id_1fcc3c0a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleUniversity.vue?vue&type=template&id=1fcc3c0a */ "./resources/js/views/front/SingleUniversity.vue?vue&type=template&id=1fcc3c0a");
/* harmony import */ var _SingleUniversity_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleUniversity.vue?vue&type=script&lang=js */ "./resources/js/views/front/SingleUniversity.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_auth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_auth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SingleUniversity_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SingleUniversity_vue_vue_type_template_id_1fcc3c0a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/front/SingleUniversity.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Error.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Error.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Error.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Error.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/front/SingleUniversity.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/front/SingleUniversity.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SingleUniversity_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SingleUniversity_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SingleUniversity.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/SingleUniversity.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Error.vue?vue&type=template&id=3409f2a6":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Error.vue?vue&type=template&id=3409f2a6 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error_vue_vue_type_template_id_3409f2a6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Error_vue_vue_type_template_id_3409f2a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Error.vue?vue&type=template&id=3409f2a6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Error.vue?vue&type=template&id=3409f2a6");


/***/ }),

/***/ "./resources/js/views/front/SingleUniversity.vue?vue&type=template&id=1fcc3c0a":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/front/SingleUniversity.vue?vue&type=template&id=1fcc3c0a ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SingleUniversity_vue_vue_type_template_id_1fcc3c0a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SingleUniversity_vue_vue_type_template_id_1fcc3c0a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SingleUniversity.vue?vue&type=template&id=1fcc3c0a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/SingleUniversity.vue?vue&type=template&id=1fcc3c0a");


/***/ })

}]);