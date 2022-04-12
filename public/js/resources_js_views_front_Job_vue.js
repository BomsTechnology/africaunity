"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_front_Job_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Job.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Job.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Header.vue */ "./resources/js/components/Header.vue");
/* harmony import */ var _components_Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Footer.vue */ "./resources/js/components/Footer.vue");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/OfficeBuildingIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/LocationMarkerIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/PlusCircleIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/EmojiSadIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/CashIcon.js");
/* harmony import */ var _services_jobOfferServices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/jobOfferServices.js */ "./resources/js/services/jobOfferServices.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Header: _components_Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _components_Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    OfficeBuildingIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_5__["default"],
    LocationMarkerIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_6__["default"],
    PlusCircleIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_7__["default"],
    EmojiSadIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_8__["default"],
    CashIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  created: function created() {
    if (!localStorage.token) {
      _router__WEBPACK_IMPORTED_MODULE_4__["default"].push({
        name: "login",
        params: {
          redirect: 'not-login'
        }
      });
    }
  },
  setup: function setup(props) {
    var _useJobOffers = (0,_services_jobOfferServices_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
        jobOffers = _useJobOffers.jobOffers,
        getJobOffersFront = _useJobOffers.getJobOffersFront,
        loading = _useJobOffers.loading,
        errors = _useJobOffers.errors;

    var user = JSON.parse(localStorage.user);
    (0,vue__WEBPACK_IMPORTED_MODULE_3__.onMounted)(getJobOffersFront());
    return {
      user: user,
      jobOffers: jobOffers,
      loading: loading
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Job.vue?vue&type=template&id=35365148":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Job.vue?vue&type=template&id=35365148 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "text-5xl text-primary-blue text-center py-4 capitalize font-bold"
};
var _hoisted_2 = {
  "class": "py-8 lg:px-16 px-6"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-8 h-20 bg-gray-100"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-2 bg-primary-blue"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 0,
  "class": "flex justify-end px-6 py-4"
};
var _hoisted_6 = {
  "class": "text-base leading-4"
};
var _hoisted_7 = {
  key: 1,
  "class": "text-lg"
};
var _hoisted_8 = {
  "class": "flex items-center space-x-4"
};
var _hoisted_9 = {
  "class": "hidden lg:block"
};
var _hoisted_10 = ["src"];
var _hoisted_11 = {
  "class": "capitalize"
};
var _hoisted_12 = {
  "class": "font-bold capitalize text-gray-500"
};
var _hoisted_13 = {
  "class": "hidden lg:flex space-x-4 font-light justify-start capitalize text-gray-500"
};
var _hoisted_14 = {
  "class": "flex items-center justify-center space-x-2"
};
var _hoisted_15 = {
  "class": "flex items-center justify-start space-x-2"
};
var _hoisted_16 = {
  "class": ""
};
var _hoisted_17 = {
  "class": "font-bold capitalize text-primary-blue"
};
var _hoisted_18 = {
  key: 0
};
var _hoisted_19 = {
  key: 1
};
var _hoisted_20 = {
  key: 2
};
var _hoisted_21 = {
  key: 3
};
var _hoisted_22 = {
  "class": "capitalize"
};
var _hoisted_23 = {
  key: 2,
  "class": "p-28"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_25 = [_hoisted_24];
var _hoisted_26 = {
  key: 3,
  "class": "p-28 flex justify-center text-gray-500 flex-col items-center animate-pulse"
};
var _hoisted_27 = {
  "class": "text-2xl mt-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Header");

  var _component_PlusCircleIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PlusCircleIcon");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_OfficeBuildingIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("OfficeBuildingIcon");

  var _component_LocationMarkerIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LocationMarkerIcon");

  var _component_CashIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CashIcon");

  var _component_EmojiSadIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EmojiSadIcon");

  var _component_Footer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Footer");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('jobs')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, _hoisted_4, $setup.user.type != 'particular' && $setup.user.type != 'business1' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'add.job'
    },
    "class": "flex justify-start items-center space-x-3 text-white bg-primary-blue rounded px-3 py-2"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PlusCircleIcon, {
        "class": "w-6 h-6"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('add')) + " Job", 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.jobOffers.length != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.jobOffers, function (jobOffer) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: jobOffer.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'show.job',
        params: {
          id: jobOffer.id
        }
      },
      "class": "flex px-2 py-4 justify-between items-center border-b border-gray-200 hover:bg-gray-100"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [jobOffer.company_logo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
          key: 0,
          src: jobOffer.company_logo,
          alt: "",
          "class": "w-16 h-16 object-cover"
        }, null, 8
        /* PROPS */
        , _hoisted_10)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_OfficeBuildingIcon, {
          key: 1,
          "class": "w-16 h-16 text-gray-500"
        }))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(jobOffer.title), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(jobOffer.company_name), 1
        /* TEXT */
        )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LocationMarkerIcon, {
          "class": "w-5 h-5"
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(jobOffer.location), 1
        /* TEXT */
        )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CashIcon, {
          "class": "w-5 h-5"
        }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(jobOffer.min_price + jobOffer.currency.symbol) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(jobOffer.max_price + jobOffer.currency.symbol), 1
        /* TEXT */
        )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_17, [_ctx.$i18n.locale == 'en' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(jobOffer.offer_type.name_en), 1
        /* TEXT */
        )) : _ctx.$i18n.locale == 'fr' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(jobOffer.offer_type.name_fr), 1
        /* TEXT */
        )) : _ctx.$i18n.locale == 'es' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(jobOffer.offer_type.name_es), 1
        /* TEXT */
        )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(jobOffer.offer_type.name_pt), 1
        /* TEXT */
        ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_22, "Publié le: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(jobOffer.date), 1
        /* TEXT */
        )])];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : $setup.loading == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, _hoisted_25)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_EmojiSadIcon, {
    "class": "h-16 w-16"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('no-content')), 1
  /* TEXT */
  )]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Footer)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/services/jobOfferServices.js":
/*!***************************************************!*\
  !*** ./resources/js/services/jobOfferServices.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useJobOffers)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _router_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router/index.js */ "./resources/js/router/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function useJobOffers() {
  var jobOffers = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var jobOffer = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)('');
  var loading = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(0);

  var getJobOffers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              errors.value = '';
              _context.prev = 1;
              loading.value = 1;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/jobOffers/', {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 5:
              response = _context.sent;
              jobOffers.value = response.data.data;
              loading.value = 2;
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);

              if (_context.t0.response.status == 401) {
                location.href = 'login/not-login';
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
              }

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));

    return function getJobOffers() {
      return _ref.apply(this, arguments);
    };
  }();

  var getJobOffersFront = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              errors.value = '';
              _context2.prev = 1;
              loading.value = 1;
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/jobOffers-front/', {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 5:
              response = _context2.sent;
              jobOffers.value = response.data.data;
              loading.value = 2;
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](1);

              if (_context2.t0.response.status == 401) {
                location.href = 'login/not-login';
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
              }

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 10]]);
    }));

    return function getJobOffersFront() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getJobOffersUser = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              errors.value = '';
              _context3.prev = 1;
              loading.value = 1;
              _context3.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/jobOffers-user/' + id, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 5:
              response = _context3.sent;
              jobOffers.value = response.data.data;
              loading.value = 2;
              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](1);

              if (_context3.t0.response.status == 401) {
                location.href = 'login/not-login';
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
              }

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 10]]);
    }));

    return function getJobOffersUser(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getJobOffer = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              errors.value = '';
              _context4.prev = 1;
              loading.value = 1;
              _context4.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/jobOffers/' + id, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 5:
              response = _context4.sent;
              loading.value = 0;
              jobOffer.value = response.data.data;
              _context4.next = 13;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](1);

              if (_context4.t0.response.status == 401) {
                location.href = 'login/not-login';
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("user");
              }

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 10]]);
    }));

    return function getJobOffer(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var getJobOffer2 = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              errors.value = '';
              loading.value = 1;
              _context5.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/jobOffers2/' + id, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 4:
              response = _context5.sent;
              loading.value = 0;
              jobOffer.value = response.data.data;
              console.log(jobOffer.value);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getJobOffer2(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  var createJobOffer = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(data) {
      var key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              errors.value = '';
              _context6.prev = 1;
              loading.value = 1;
              _context6.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/jobOffers', data, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token),
                  'Content-Type': 'multipart/form-data'
                }
              });

            case 5:
              loading.value = 2;
              _context6.next = 11;
              break;

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](1);

              if (_context6.t0.response.status == 422) {
                loading.value = 0;

                for (key in _context6.t0.response.data.errors) {
                  errors.value += _context6.t0.response.data.errors[key][0] + "\n";
                }
              }

            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[1, 8]]);
    }));

    return function createJobOffer(_x4) {
      return _ref6.apply(this, arguments);
    };
  }();

  var updateJobOffer = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(data) {
      var key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              errors.value = '';
              _context7.prev = 1;
              loading.value = 1;
              _context7.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/jobOffers/' + jobOffer.value.id, data, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token),
                  'Content-Type': 'multipart/form-data'
                }
              });

            case 5:
              loading.value = 2;
              _context7.next = 12;
              break;

            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](1);
              loading.value = 0;

              if (_context7.t0.response.status == 422) {
                for (key in _context7.t0.response.data.errors) {
                  errors.value += _context7.t0.response.data.errors[key][0] + '\t\n';
                }
              }

            case 12:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[1, 8]]);
    }));

    return function updateJobOffer(_x5) {
      return _ref7.apply(this, arguments);
    };
  }();

  var destroyJobOffer = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              errors.value = '';
              _context8.prev = 1;
              loading.value = 1;
              _context8.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]('/api/jobOffers/' + id, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 5:
              loading.value = 2;
              _context8.next = 12;
              break;

            case 8:
              _context8.prev = 8;
              _context8.t0 = _context8["catch"](1);
              loading.value = 0;

              if (_context8.t0.response.status == '500') {
                errors.value = 'Impossible de supprimer ce jobOffer';
              }

            case 12:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[1, 8]]);
    }));

    return function destroyJobOffer(_x6) {
      return _ref8.apply(this, arguments);
    };
  }();

  var markFilled = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              errors.value = '';
              _context9.prev = 1;
              loading.value = 1;
              _context9.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/jobOffers-mark-filled/' + id, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 5:
              loading.value = 2;
              _context9.next = 12;
              break;

            case 8:
              _context9.prev = 8;
              _context9.t0 = _context9["catch"](1);
              loading.value = 0;

              if (_context9.t0.response.status == '500') {
                errors.value = 'Impossible de supprimer ce jobOffer';
              }

            case 12:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[1, 8]]);
    }));

    return function markFilled(_x7) {
      return _ref9.apply(this, arguments);
    };
  }();

  return {
    jobOffers: jobOffers,
    jobOffer: jobOffer,
    errors: errors,
    loading: loading,
    getJobOffers: getJobOffers,
    getJobOffer: getJobOffer,
    createJobOffer: createJobOffer,
    updateJobOffer: updateJobOffer,
    destroyJobOffer: destroyJobOffer,
    getJobOffersUser: getJobOffersUser,
    getJobOffer2: getJobOffer2,
    markFilled: markFilled,
    getJobOffersFront: getJobOffersFront
  };
}

/***/ }),

/***/ "./resources/js/views/front/Job.vue":
/*!******************************************!*\
  !*** ./resources/js/views/front/Job.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Job_vue_vue_type_template_id_35365148__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Job.vue?vue&type=template&id=35365148 */ "./resources/js/views/front/Job.vue?vue&type=template&id=35365148");
/* harmony import */ var _Job_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Job.vue?vue&type=script&lang=js */ "./resources/js/views/front/Job.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_auth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_auth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Job_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Job_vue_vue_type_template_id_35365148__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/front/Job.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/front/Job.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/views/front/Job.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Job_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Job_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Job.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Job.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/front/Job.vue?vue&type=template&id=35365148":
/*!************************************************************************!*\
  !*** ./resources/js/views/front/Job.vue?vue&type=template&id=35365148 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Job_vue_vue_type_template_id_35365148__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Job_vue_vue_type_template_id_35365148__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Job.vue?vue&type=template&id=35365148 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Job.vue?vue&type=template&id=35365148");


/***/ }),

/***/ "./node_modules/@heroicons/vue/solid/esm/CashIcon.js":
/*!***********************************************************!*\
  !*** ./node_modules/@heroicons/vue/solid/esm/CashIcon.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "fill-rule": "evenodd",
      d: "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",
      "clip-rule": "evenodd"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/solid/esm/LocationMarkerIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/vue/solid/esm/LocationMarkerIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "fill-rule": "evenodd",
      d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
      "clip-rule": "evenodd"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/solid/esm/OfficeBuildingIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/vue/solid/esm/OfficeBuildingIcon.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "fill-rule": "evenodd",
      d: "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",
      "clip-rule": "evenodd"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/solid/esm/PlusCircleIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/vue/solid/esm/PlusCircleIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",
      "clip-rule": "evenodd"
    })
  ]))
}

/***/ })

}]);