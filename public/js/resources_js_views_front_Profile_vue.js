"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_front_Profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Profile.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Profile.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Header.vue */ "./resources/js/components/Header.vue");
/* harmony import */ var _components_Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Footer.vue */ "./resources/js/components/Footer.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
/* harmony import */ var _services_postServices_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/postServices.js */ "./resources/js/services/postServices.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/PencilAltIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/BookOpenIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/ChatAltIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/ChatIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/NewspaperIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/PencilIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/IdentificationIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/SpeakerphoneIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/CogIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/PlusCircleIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/UserCircleIcon.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    name: {
      required: true,
      type: String
    },
    id: {
      required: true,
      type: String
    }
  },
  components: {
    Header: _components_Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _components_Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PencilAltIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_5__["default"],
    BookOpenIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_6__["default"],
    ChatAltIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_7__["default"],
    ChatIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_8__["default"],
    NewspaperIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_9__["default"],
    PencilIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_10__["default"],
    IdentificationIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_11__["default"],
    SpeakerphoneIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_12__["default"],
    CogIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_13__["default"],
    PlusCircleIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_14__["default"],
    UserCircleIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_15__["default"]
  },
  setup: function setup(props) {
    var user = JSON.parse(localStorage.user);

    var _usePosts = (0,_services_postServices_js__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        articles = _usePosts.articles,
        getPostsUser = _usePosts.getPostsUser,
        propau = _usePosts.propau,
        loading = _usePosts.loading,
        errors = _usePosts.errors;

    (0,vue__WEBPACK_IMPORTED_MODULE_2__.onMounted)(function () {
      if (!localStorage.token) {
        _router__WEBPACK_IMPORTED_MODULE_3__["default"].push({
          name: "login"
        });
      }
    }, getPostsUser(props.id));
    var open = (0,vue__WEBPACK_IMPORTED_MODULE_2__.reactive)({
      profil: true,
      article: false,
      propau: false,
      comment: false,
      job: false,
      ads: false
    });

    var changeTab = function changeTab(type) {
      switch (type) {
        case 'profil':
          open.ads = false;
          open.job = false;
          open.comment = false;
          open.propau = false;
          open.article = false;
          open.profil = true;
          break;

        case 'article':
          open.ads = false;
          open.job = false;
          open.comment = false;
          open.propau = false;
          open.profil = false;
          open.article = true;
          break;

        case 'propau':
          open.ads = false;
          open.job = false;
          open.comment = false;
          open.article = false;
          open.profil = false;
          open.propau = true;
          break;

        case 'comment':
          open.ads = false;
          open.job = false;
          open.propau = false;
          open.article = false;
          open.profil = false;
          open.comment = true;
          break;

        case 'job':
          open.ads = false;
          open.comment = false;
          open.propau = false;
          open.article = false;
          open.profil = false;
          open.job = true;
          break;

        case 'ads':
          open.job = false;
          open.comment = false;
          open.propau = false;
          open.article = false;
          open.profil = false;
          open.ads = true;
          break;
      }
    };

    return {
      open: open,
      changeTab: changeTab,
      user: user,
      propau: propau,
      articles: articles,
      loading: loading,
      errors: errors
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Profile.vue?vue&type=template&id=00cb1098":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Profile.vue?vue&type=template&id=00cb1098 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "lg:py-10 p-4 lg:px-20"
};
var _hoisted_2 = {
  "class": "h-96 relative"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "h-1/2 bg-gray-50 z-0"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "h-1/2 bg-white z-10 flex lg:justify-end items-center justify-center lg:space-x-3 relative"
};
var _hoisted_5 = {
  "class": "lg:w-60 lg:h-60 overflow-hidden absolute h-40 w-40 text-center lg:left-4 mb-40 lg:mt-0 -mt-28 bg-white z-10 rounded-full"
};
var _hoisted_6 = ["src"];
var _hoisted_7 = {
  "class": "lg:w-[80%] px-8 py-4"
};
var _hoisted_8 = {
  "class": "flex lg:justify-between items-center lg:flex-row flex-col lg:mt-0 mt-20"
};
var _hoisted_9 = {
  "class": "lg:text-3xl text-2xl lg:text-left text-center font-semibold capitalize text-gray-700"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex items-center space-x-2 text-sm mt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-primary-blue"
}, "email@example.com"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-gray-400"
}, "° 9999999")], -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "space-x-2 flex items-center lg:py-0 py-1"
};
var _hoisted_12 = {
  "class": "lg:block hidden"
};
var _hoisted_13 = {
  href: "#",
  "class": "py-2 lg:px-4 px-2 shadow-md flex items-center text-sm space-x-2 text-white rounded-xl bg-primary-blue"
};
var _hoisted_14 = {
  "class": "lg:block hidden"
};
var _hoisted_15 = {
  href: "#"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-sm font-light text-gray-500 overflow-y-auto lg:h-24 h-20 mt-2"
}, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quod reiciendis quae, laudantium officiis nam ducimus nihil tempora dicta magni unde ipsa facilis ipsum animi asperiores, alias itaque facere enim. ", -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "px-5 py-3 space-x-2 bg-menu flex items-center lg:mt-0 mt-20"
};
var _hoisted_18 = {
  "class": "lg:block hidden"
};
var _hoisted_19 = {
  "class": "lg:block hidden"
};
var _hoisted_20 = {
  "class": "lg:block hidden"
};
var _hoisted_21 = {
  "class": "lg:block hidden"
};
var _hoisted_22 = {
  "class": "lg:block hidden"
};
var _hoisted_23 = {
  "class": "lg:block hidden"
};
var _hoisted_24 = {
  key: 0,
  "class": "py-8 px-16"
};
var _hoisted_25 = {
  key: 1
};
var _hoisted_26 = {
  key: 0,
  "class": "grid lg:grid-cols-2 gap-8 px-6 py-8"
};
var _hoisted_27 = {
  "class": "w-1/3 bg-cover overflow-hidden"
};
var _hoisted_28 = ["src", "alt"];
var _hoisted_29 = {
  "class": "w-2/3 p-4 md:p-4"
};
var _hoisted_30 = {
  "class": "mt-2 text-sm text-gray-600 dark:text-gray-400"
};
var _hoisted_31 = {
  "class": "flex mt-2 item-center space-x-1"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "hover:text-primary-blue text-xs"
}, "0", -1
/* HOISTED */
);

var _hoisted_33 = {
  "class": "flex justify-between mt-3 item-center"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Read More");

var _hoisted_35 = {
  key: 1,
  "class": "text-center text-2xl text-gray-500 font-bold italic"
};
var _hoisted_36 = {
  key: 2,
  "class": "py-8 px-16"
};
var _hoisted_37 = {
  key: 0,
  "class": "grid lg:grid-cols-2 gap-8 px-10 py-8"
};
var _hoisted_38 = {
  "class": "w-1/3 bg-cover overflow-hidden"
};
var _hoisted_39 = {
  "class": "w-2/3 p-4 md:p-4"
};
var _hoisted_40 = {
  "class": "mt-2 text-sm text-gray-600 dark:text-gray-400"
};
var _hoisted_41 = {
  "class": "flex mt-2 item-center space-x-1"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "hover:text-primary-blue text-xs"
}, "0", -1
/* HOISTED */
);

var _hoisted_43 = {
  "class": "flex justify-between mt-3 item-center"
};

var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Read More");

var _hoisted_45 = {
  key: 1,
  "class": "text-center text-2xl text-gray-500 font-bold italic"
};
var _hoisted_46 = {
  key: 3,
  "class": "py-8 px-16"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-center text-2xl text-gray-500 font-bold italic"
}, "Comment Comming Soon", -1
/* HOISTED */
);

var _hoisted_48 = [_hoisted_47];
var _hoisted_49 = {
  key: 4,
  "class": "py-8 px-16"
};

var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-center text-2xl text-gray-500 font-bold italic"
}, "Job Comming Soon", -1
/* HOISTED */
);

var _hoisted_51 = [_hoisted_50];
var _hoisted_52 = {
  key: 5,
  "class": "py-8 px-16"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-center text-2xl text-gray-500 font-bold italic"
}, "Ads Comming Soon", -1
/* HOISTED */
);

var _hoisted_54 = [_hoisted_53];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Header");

  var _component_UserCircleIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("UserCircleIcon");

  var _component_PlusCircleIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PlusCircleIcon");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_PencilIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PencilIcon");

  var _component_CogIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CogIcon");

  var _component_IdentificationIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("IdentificationIcon");

  var _component_NewspaperIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NewspaperIcon");

  var _component_BookOpenIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BookOpenIcon");

  var _component_ChatIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChatIcon");

  var _component_ChatAltIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ChatAltIcon");

  var _component_SpeakerphoneIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SpeakerphoneIcon");

  var _component_PencilAltIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PencilAltIcon");

  var _component_Footer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Footer");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [$setup.user.avatar ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    src: $setup.user.avatar,
    "class": "w-full h-full bg-cover object-cover",
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_6)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_UserCircleIcon, {
    key: 1,
    "class": "w-full h-full text-gray-500"
  }))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.user.firstname + ' ' + $setup.user.lastname), 1
  /* TEXT */
  ), _hoisted_10]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'add.post',
      params: {
        type: 'article'
      }
    },
    "class": "py-2 lg:px-4 px-2 shadow-md flex items-center text-sm space-x-2 text-white rounded-xl bg-primary-blue"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PlusCircleIcon, {
        "class": "w-5 h-5"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('add')) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('articles')), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PencilIcon, {
    "class": "w-5 h-5"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('edit')) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('profile')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CogIcon, {
    "class": "h-8 w-8 text-gray-600 hover:text-primary-blue"
  })])])]), _hoisted_16])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.changeTab('profil');
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.open.profil ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md' : 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md'])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_IdentificationIcon, {
    "class": "w-5 h-5"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('profile')), 1
  /* TEXT */
  )], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.changeTab('article');
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.open.article ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md' : 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md'])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NewspaperIcon, {
    "class": "w-5 h-5"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('articles')), 1
  /* TEXT */
  )], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.changeTab('propau');
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.open.propau ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md' : 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md'])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BookOpenIcon, {
    "class": "w-5 h-5"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('propau')), 1
  /* TEXT */
  )], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.changeTab('comment');
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.open.comment ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md' : 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md'])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChatIcon, {
    "class": "w-5 h-5"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('comments')), 1
  /* TEXT */
  )], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $setup.changeTab('job');
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.open.job ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md' : 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md'])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChatAltIcon, {
    "class": "w-5 h-5"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('my-jobs')), 1
  /* TEXT */
  )], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.changeTab('ads');
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.open.ads ? 'text-white bg-primary-blue flex items-center space-x-2 px-2 py-1 text-md rounded-md' : 'text-white flex items-center space-x-2 hover:bg-white/25 px-2 py-1 text-md rounded-md'])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SpeakerphoneIcon, {
    "class": "w-5 h-5"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t('my-ads')), 1
  /* TEXT */
  )], 2
  /* CLASS */
  )]), $setup.open.profil ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, " Profil ")) : $setup.open.article ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_25, [$setup.articles.length != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.articles, function (post) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: post.id,
      "class": "flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'show.post',
        params: {
          id: post.id
        }
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: post.image,
          "class": "w-full h-full bg-cover object-cover",
          alt: post.title
        }, null, 8
        /* PROPS */
        , _hoisted_28)];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'show.post',
        params: {
          id: post.id
        }
      },
      "class": "text-2xl font-bold text-gray-800 dark:text-white"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.title), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.content.substring(0, 19) + "..."), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChatIcon, {
      "class": "h-4 w-4 text-gray-500"
    }), _hoisted_32]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'show.post',
        params: {
          id: post.id
        }
      },
      "class": "text-sm font-bold text-primary-blue hover:underline"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_34];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'edit.post',
        params: {
          id: post.id,
          type: post.type
        }
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PencilAltIcon, {
          "class": "h-5 w-5 hover:text-gray-400 cursor-pointer text-primary-blue"
        })];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"])])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h1", _hoisted_35, "NO ARTICLE"))])) : $setup.open.propau ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_36, [$setup.propau.length != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_37, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.propau, function (post) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: post.id,
      "class": "flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'show.post',
        params: {
          id: post.id
        }
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BookOpenIcon, {
          "class": "w-full h-full text-gray-400"
        })];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'show.post',
        params: {
          id: post.id
        }
      },
      "class": "text-2xl font-bold text-gray-800 dark:text-white"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.title), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.content.substring(0, 19) + "..."), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ChatIcon, {
      "class": "h-4 w-4 text-gray-500"
    }), _hoisted_42]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'show.post',
        params: {
          id: post.id
        }
      },
      "class": "text-sm font-bold text-primary-blue hover:underline"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_44];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
      to: {
        name: 'edit.post',
        params: {
          id: post.id,
          type: post.type
        }
      }
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PencilAltIcon, {
          "class": "h-5 w-5 hover:text-gray-400 cursor-pointer text-primary-blue"
        })];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"])])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h1", _hoisted_45, "NO PROPAU"))])) : $setup.open.comment ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_46, _hoisted_48)) : $setup.open.job ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_49, _hoisted_51)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_52, _hoisted_54))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Footer)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/services/postServices.js":
/*!***********************************************!*\
  !*** ./resources/js/services/postServices.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePosts)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _router_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router/index.js */ "./resources/js/router/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function usePosts() {
  var posts = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var postCaroussel = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var post = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var errors = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)('');
  var loading = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(0);
  var articles = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
  var propau = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);

  var getPostsAll = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(type) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              errors.value = '';
              loading.value = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/posts-all/' + type, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 4:
              response = _context.sent;
              posts.value = response.data.data;
              loading.value = 2;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getPostsAll(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getPostsUser = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              errors.value = '';
              loading.value = 1;
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/posts-user/' + id, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 4:
              response = _context2.sent;
              posts.value = response.data.data;
              articles.value = posts.value.filter(function (post) {
                return post.type == 'article';
              });
              propau.value = posts.value.filter(function (post) {
                return post.type == 'propau';
              });
              loading.value = 2;

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getPostsUser(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getPosts = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(type, lang) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              errors.value = '';
              loading.value = 1;
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/posts-type/' + type + '/' + lang, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 4:
              response = _context3.sent;
              posts.value = response.data.data;
              loading.value = 2;

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getPosts(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getPostCarousssel = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(lang) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              errors.value = '';
              loading.value = 1;
              _context4.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/posts-caroussel/' + lang, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 4:
              response = _context4.sent;
              postCaroussel.value = response.data.data;
              loading.value = 2;

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getPostCarousssel(_x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  var getPost = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              errors.value = '';
              loading.value = 1;
              _context5.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/posts/' + id, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 4:
              response = _context5.sent;
              loading.value = 0;
              post.value = response.data.data;

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getPost(_x6) {
      return _ref5.apply(this, arguments);
    };
  }();

  var getPost2 = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(id) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              errors.value = '';
              loading.value = 1;
              _context6.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/posts2/' + id, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token)
                }
              });

            case 4:
              response = _context6.sent;
              loading.value = 0;
              post.value = response.data.data;

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function getPost2(_x7) {
      return _ref6.apply(this, arguments);
    };
  }();

  var createPost = /*#__PURE__*/function () {
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
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/posts', data, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token),
                  'Content-Type': 'multipart/form-data'
                }
              });

            case 5:
              loading.value = 2;
              _context7.next = 11;
              break;

            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](1);

              if (_context7.t0.response.status == 422) {
                loading.value = 0;

                for (key in _context7.t0.response.data.errors) {
                  errors.value += _context7.t0.response.data.errors[key][0] + "\n";
                }
              }

            case 11:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[1, 8]]);
    }));

    return function createPost(_x8) {
      return _ref7.apply(this, arguments);
    };
  }();

  var updatePost = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(data) {
      var key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              errors.value = '';
              _context8.prev = 1;
              loading.value = 1;
              _context8.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/posts/' + post.value.id, data, {
                headers: {
                  'Authorization': "Bearer ".concat(localStorage.token),
                  'Content-Type': 'multipart/form-data'
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

              if (_context8.t0.response.status == 422) {
                for (key in _context8.t0.response.data.errors) {
                  errors.value += _context8.t0.response.data.errors[key][0] + '\t\n';
                }
              }

            case 12:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[1, 8]]);
    }));

    return function updatePost(_x9) {
      return _ref8.apply(this, arguments);
    };
  }();

  var destroyPost = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              errors.value = '';
              _context9.prev = 1;
              loading.value = 1;
              _context9.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]('/api/posts/' + id, {
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
                errors.value = 'Impossible de supprimer ce post';
              }

            case 12:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[1, 8]]);
    }));

    return function destroyPost(_x10) {
      return _ref9.apply(this, arguments);
    };
  }();

  return {
    posts: posts,
    post: post,
    errors: errors,
    loading: loading,
    getPosts: getPosts,
    getPost: getPost,
    createPost: createPost,
    updatePost: updatePost,
    destroyPost: destroyPost,
    getPostCarousssel: getPostCarousssel,
    postCaroussel: postCaroussel,
    getPost2: getPost2,
    getPostsAll: getPostsAll,
    getPostsUser: getPostsUser,
    articles: articles,
    propau: propau
  };
}

/***/ }),

/***/ "./resources/js/views/front/Profile.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/front/Profile.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_00cb1098__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=00cb1098 */ "./resources/js/views/front/Profile.vue?vue&type=template&id=00cb1098");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js */ "./resources/js/views/front/Profile.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_auth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_auth_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Profile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Profile_vue_vue_type_template_id_00cb1098__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/front/Profile.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/front/Profile.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/views/front/Profile.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Profile.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/front/Profile.vue?vue&type=template&id=00cb1098":
/*!****************************************************************************!*\
  !*** ./resources/js/views/front/Profile.vue?vue&type=template&id=00cb1098 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_template_id_00cb1098__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_template_id_00cb1098__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=template&id=00cb1098 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/front/Profile.vue?vue&type=template&id=00cb1098");


/***/ }),

/***/ "./node_modules/@heroicons/vue/solid/esm/BookOpenIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/vue/solid/esm/BookOpenIcon.js ***!
  \***************************************************************/
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
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", { d: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/solid/esm/ChatAltIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/vue/solid/esm/ChatAltIcon.js ***!
  \**************************************************************/
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
      d: "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",
      "clip-rule": "evenodd"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/solid/esm/IdentificationIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/vue/solid/esm/IdentificationIcon.js ***!
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
      d: "M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z",
      "clip-rule": "evenodd"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/solid/esm/PencilAltIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/vue/solid/esm/PencilAltIcon.js ***!
  \****************************************************************/
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
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", { d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "fill-rule": "evenodd",
      d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
      "clip-rule": "evenodd"
    })
  ]))
}

/***/ }),

/***/ "./node_modules/@heroicons/vue/solid/esm/PencilIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/vue/solid/esm/PencilIcon.js ***!
  \*************************************************************/
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
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", { d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" })
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