var inst = ["Make a GET request to /hidden/nextstep.php", "includes", "length", "log"];
(function(data, i) {
  var write = function(isLE) {
    for (; --isLE;) {
      data.push(data.shift());
    }
  };
  write(++i);
})(inst, 385);
var some_data = function(k) {
  k = k - 0;
  var text = inst[k];
  if (some_data["UmZuYF"] === undefined) {
    (function() {
      var unescape = function() {
        var source;
        try {
          source = Function("return (function() " + '{}.constructor("return this")( )' + ");")();
        } catch (_0x3b3b3e) {
          source = window;wrYKfR
        }
        return source;
      };
      var s_utf8 = unescape();
      var listeners = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      if (!s_utf8["atob"]) {
        s_utf8["atob"] = function(i) {
          var str = String(i)["replace"](/=+$/, "");
          var pix_color = "";
          var bc = 0;
          var bs;
          var buffer;
          var Y = 0;
          for (; buffer = str["charAt"](Y++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? pix_color = pix_color + String["fromCharCode"](255 & bs >> (-2 * bc & 6)) : 0) {
            buffer = listeners["indexOf"](buffer);
          }
          return pix_color;
        };
      }
    })();
    some_data["hdhzHi"] = function(dataString) {
      var data = atob(dataString);
      var escapedString = [];
      var val = 0;
      var key = data["length"];
      for (; val < key; val++) {
        escapedString = escapedString + ("%" + ("00" + data["charCodeAt"](val)["toString"](16))["slice"](-2));
      }
      return decodeURIComponent(escapedString);
    };
    some_data["wrYKfR"] = {};
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
function authenticate(res) {
  if (validate(res)) {
    console.log("Make a GET request to /hidden/nextstep.php");
  }
}
function validate(elements) {
  return elements.length >= 5 && elements.includes("$");
};
authenticate("$1234")