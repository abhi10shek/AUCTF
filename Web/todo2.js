'use strict';
/** @type {!Array} */
var inst = ["Make a GET request to /hidden/nextstep.php", "includes", "length", "log"];
(function(data, i) {
  /**
   * @param {number} isLE
   * @return {undefined}
   */
  var write = function(isLE) {
    for (; --isLE;) {
      data["push"](data["shift"]());
    }
  };
  write(++i);
})(inst, 385);
/**
 * @param {string} k
 * @param {?} init_using_data
 * @return {?}
 */
var some_data = function(k) {
  /** @type {number} */
  k = k - 0;
  var text = inst[k];
  if (some_data["UmZuYF"] === undefined) {
    (function() {
      /**
       * @return {?}
       */
      var unescape = function() {
        var source;
        try {
          source = Function("return (function() " + '{}.constructor("return this")( )' + ");")();
        } catch (_0x3b3b3e) {
          /** @type {!Window} */
          source = window;wrYKfR
        }
        return source;
      };
      var s_utf8 = unescape();
      /** @type {string} */
      var listeners = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      if (!s_utf8["atob"]) {
        /**
         * @param {?} i
         * @return {?}
         */
        s_utf8["atob"] = function(i) {
          var str = String(i)["replace"](/=+$/, "");
          /** @type {string} */
          var pix_color = "";
          /** @type {number} */
          var bc = 0;
          var bs;
          var buffer;
          /** @type {number} */
          var Y = 0;
          for (; buffer = str["charAt"](Y++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? pix_color = pix_color + String["fromCharCode"](255 & bs >> (-2 * bc & 6)) : 0) {
            buffer = listeners["indexOf"](buffer);
          }
          return pix_color;
        };
      }
    })();
    /**
     * @param {?} dataString
     * @return {?}
     */
    some_data["hdhzHi"] = function(dataString) {
      /** @type {string} */
      var data = atob(dataString);
      /** @type {!Array} */
      var escapedString = [];
      /** @type {number} */
      var val = 0;
      var key = data["length"];
      for (; val < key; val++) {
        escapedString = escapedString + ("%" + ("00" + data["charCodeAt"](val)["toString"](16))["slice"](-2));
      }
      return decodeURIComponent(escapedString);
    };
    some_data["wrYKfR"] = {};
    /** @type {boolean} */
    some_data["UmZuYF"] = !![];
  }
  var b = some_data["wrYKfR"][k];
  if (b === undefined) {
    text = some_data["hdhzHi"](text);
    some_data["wrYKfR"][k] = text;
  } else {
    text = b;
  }
  return text;
};
/**
 * @param {?} res
 * @return {undefined}
 */
function authenticate(res) {
  if (validate(res)) {
    console[some_data("0x2")](some_data("0x3"));
  }
}
/**
 * @param {?} elements
 * @return {?}
 */
function validate(elements) {
  return elements[some_data("0x1")] >= 5 && elements[some_data("0x0")]("$");
}
;

authenticate("$1234")