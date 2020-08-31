"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var Route = function Route(_ref) {
  var path = _ref.path,
      children = _ref.children;
  (0, _react.useEffect)(function () {
    var onLocationChange = function onLocationChange() {
      console.log('location change');
    };

    window.addEventListener('popstate', onLocationChange);
    return function () {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);
  return window.location.pathname === path ? children : null;
};

var _default = Route;
exports["default"] = _default;