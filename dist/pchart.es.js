(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("svg{font-family:Lucida Grande,Verdana,Arial,Helvetica,sans-serif;font-weight:lighter}.title{font-size:16px}.backdrop{z-index:1}.axis{stroke-width:.6}.axis text[name=valuelabel]{font-size:9px;stroke:none}.axis text[name=axislabel]{font-size:12px;stroke:none}.axis .tick{stroke-width:.3}.axis .longtick{stroke-width:.6}.grid{z-index:2}.grid .refline{stroke-width:.3}.grid .longrefline{stroke-width:.6}.areas{z-index:3}.areas .area-curve{stroke:none}.percentiles{z-index:10}.percentiles .percentile-curve{fill:none;stroke:#000;stroke-width:1}.percentiles .percentile-curve.dotted{stroke-dasharray:5}.percentiles .percentile-label{font-weight:lighter;font-size:9px;stroke:none}.patient-data .percentile-label{font-weight:lighter;font-size:12px;stroke:none}.patient-data .percentile-point{stroke:none}.patient-data .percentile-line{fill:none}.tooltip path{fill:#707070;stroke:#707070}.tooltip text{font-size:12px;stroke:none;fill:#fff}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var Un = Object.defineProperty;
var Ln = (e, t, r) => t in e ? Un(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var N = (e, t, r) => (Ln(e, typeof t != "symbol" ? t + "" : t, r), r);
import mt, { useState as Me, useEffect as An, useMemo as at } from "react";
var Dr = { exports: {} }, Nt = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hs;
function In() {
  if (hs)
    return Nt;
  hs = 1;
  var e = Symbol.for("react.fragment");
  return Nt.Fragment = e, Nt.jsxDEV = void 0, Nt;
}
var xt = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ms;
function jn() {
  return ms || (ms = 1, process.env.NODE_ENV !== "production" && function() {
    var e = mt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), H = Symbol.iterator, I = "@@iterator";
    function q(i) {
      if (i === null || typeof i != "object")
        return null;
      var c = H && i[H] || i[I];
      return typeof c == "function" ? c : null;
    }
    var U = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(i) {
      {
        for (var c = arguments.length, m = new Array(c > 1 ? c - 1 : 0), b = 1; b < c; b++)
          m[b - 1] = arguments[b];
        fe("error", i, m);
      }
    }
    function fe(i, c, m) {
      {
        var b = U.ReactDebugCurrentFrame, T = b.getStackAddendum();
        T !== "" && (c += "%s", m = m.concat([T]));
        var R = m.map(function(D) {
          return String(D);
        });
        R.unshift("Warning: " + c), Function.prototype.apply.call(console[i], console, R);
      }
    }
    var ae = !1, de = !1, st = !1, We = !1, Te = !1, J;
    J = Symbol.for("react.module.reference");
    function ge(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === s || i === a || Te || i === n || i === d || i === y || We || i === E || ae || de || st || typeof i == "object" && i !== null && (i.$$typeof === M || i.$$typeof === p || i.$$typeof === o || i.$$typeof === l || i.$$typeof === u || i.$$typeof === J || i.getModuleId !== void 0));
    }
    function ve(i, c, m) {
      var b = i.displayName;
      if (b)
        return b;
      var T = c.displayName || c.name || "";
      return T !== "" ? m + "(" + T + ")" : m;
    }
    function bt(i) {
      return i.displayName || "Context";
    }
    function ie(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case s:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case n:
          return "StrictMode";
        case d:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case l:
            var c = i;
            return bt(c) + ".Consumer";
          case o:
            var m = i;
            return bt(m._context) + ".Provider";
          case u:
            return ve(i, i.render, "ForwardRef");
          case p:
            var b = i.displayName || null;
            return b !== null ? b : ie(i.type) || "Memo";
          case M: {
            var T = i, R = T._payload, D = T._init;
            try {
              return ie(D(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var pe = Object.assign, $e = 0, Xr, zr, Zr, Br, qr, Jr, Qr;
    function Kr() {
    }
    Kr.__reactDisabledLog = !0;
    function _n() {
      {
        if ($e === 0) {
          Xr = console.log, zr = console.info, Zr = console.warn, Br = console.error, qr = console.group, Jr = console.groupCollapsed, Qr = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: Kr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        $e++;
      }
    }
    function yn() {
      {
        if ($e--, $e === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: pe({}, i, {
              value: Xr
            }),
            info: pe({}, i, {
              value: zr
            }),
            warn: pe({}, i, {
              value: Zr
            }),
            error: pe({}, i, {
              value: Br
            }),
            group: pe({}, i, {
              value: qr
            }),
            groupCollapsed: pe({}, i, {
              value: Jr
            }),
            groupEnd: pe({}, i, {
              value: Qr
            })
          });
        }
        $e < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Kt = U.ReactCurrentDispatcher, er;
    function wt(i, c, m) {
      {
        if (er === void 0)
          try {
            throw Error();
          } catch (T) {
            var b = T.stack.trim().match(/\n( *(at )?)/);
            er = b && b[1] || "";
          }
        return `
` + er + i;
      }
    }
    var tr = !1, kt;
    {
      var gn = typeof WeakMap == "function" ? WeakMap : Map;
      kt = new gn();
    }
    function es(i, c) {
      if (!i || tr)
        return "";
      {
        var m = kt.get(i);
        if (m !== void 0)
          return m;
      }
      var b;
      tr = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = Kt.current, Kt.current = null, _n();
      try {
        if (c) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (be) {
              b = be;
            }
            Reflect.construct(i, [], D);
          } else {
            try {
              D.call();
            } catch (be) {
              b = be;
            }
            i.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (be) {
            b = be;
          }
          i();
        }
      } catch (be) {
        if (be && b && typeof be.stack == "string") {
          for (var S = be.stack.split(`
`), Z = b.stack.split(`
`), L = S.length - 1, j = Z.length - 1; L >= 1 && j >= 0 && S[L] !== Z[j]; )
            j--;
          for (; L >= 1 && j >= 0; L--, j--)
            if (S[L] !== Z[j]) {
              if (L !== 1 || j !== 1)
                do
                  if (L--, j--, j < 0 || S[L] !== Z[j]) {
                    var te = `
` + S[L].replace(" at new ", " at ");
                    return i.displayName && te.includes("<anonymous>") && (te = te.replace("<anonymous>", i.displayName)), typeof i == "function" && kt.set(i, te), te;
                  }
                while (L >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        tr = !1, Kt.current = R, yn(), Error.prepareStackTrace = T;
      }
      var Ze = i ? i.displayName || i.name : "", ds = Ze ? wt(Ze) : "";
      return typeof i == "function" && kt.set(i, ds), ds;
    }
    function vn(i, c, m) {
      return es(i, !1);
    }
    function pn(i) {
      var c = i.prototype;
      return !!(c && c.isReactComponent);
    }
    function Mt(i, c, m) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return es(i, pn(i));
      if (typeof i == "string")
        return wt(i);
      switch (i) {
        case d:
          return wt("Suspense");
        case y:
          return wt("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return vn(i.render);
          case p:
            return Mt(i.type, c, m);
          case M: {
            var b = i, T = b._payload, R = b._init;
            try {
              return Mt(R(T), c, m);
            } catch {
            }
          }
        }
      return "";
    }
    var St = Object.prototype.hasOwnProperty, ts = {}, rs = U.ReactDebugCurrentFrame;
    function Dt(i) {
      if (i) {
        var c = i._owner, m = Mt(i.type, i._source, c ? c.type : null);
        rs.setExtraStackFrame(m);
      } else
        rs.setExtraStackFrame(null);
    }
    function bn(i, c, m, b, T) {
      {
        var R = Function.call.bind(St);
        for (var D in i)
          if (R(i, D)) {
            var S = void 0;
            try {
              if (typeof i[D] != "function") {
                var Z = Error((b || "React class") + ": " + m + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Z.name = "Invariant Violation", Z;
              }
              S = i[D](c, D, b, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              S = L;
            }
            S && !(S instanceof Error) && (Dt(T), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", m, D, typeof S), Dt(null)), S instanceof Error && !(S.message in ts) && (ts[S.message] = !0, Dt(T), F("Failed %s type: %s", m, S.message), Dt(null));
          }
      }
    }
    var wn = Array.isArray;
    function rr(i) {
      return wn(i);
    }
    function kn(i) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, m = c && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return m;
      }
    }
    function Mn(i) {
      try {
        return ss(i), !1;
      } catch {
        return !0;
      }
    }
    function ss(i) {
      return "" + i;
    }
    function ns(i) {
      if (Mn(i))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kn(i)), ss(i);
    }
    var nt = U.ReactCurrentOwner, Sn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, as, is, sr;
    sr = {};
    function Dn(i) {
      if (St.call(i, "ref")) {
        var c = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function Nn(i) {
      if (St.call(i, "key")) {
        var c = Object.getOwnPropertyDescriptor(i, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function xn(i, c) {
      if (typeof i.ref == "string" && nt.current && c && nt.current.stateNode !== c) {
        var m = ie(nt.current.type);
        sr[m] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ie(nt.current.type), i.ref), sr[m] = !0);
      }
    }
    function Yn(i, c) {
      {
        var m = function() {
          as || (as = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        m.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function On(i, c) {
      {
        var m = function() {
          is || (is = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        m.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var Tn = function(i, c, m, b, T, R, D) {
      var S = {
        $$typeof: t,
        type: i,
        key: c,
        ref: m,
        props: D,
        _owner: R
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function Pn(i, c, m, b, T) {
      {
        var R, D = {}, S = null, Z = null;
        m !== void 0 && (ns(m), S = "" + m), Nn(c) && (ns(c.key), S = "" + c.key), Dn(c) && (Z = c.ref, xn(c, T));
        for (R in c)
          St.call(c, R) && !Sn.hasOwnProperty(R) && (D[R] = c[R]);
        if (i && i.defaultProps) {
          var L = i.defaultProps;
          for (R in L)
            D[R] === void 0 && (D[R] = L[R]);
        }
        if (S || Z) {
          var j = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          S && Yn(D, j), Z && On(D, j);
        }
        return Tn(i, S, Z, T, b, nt.current, D);
      }
    }
    var nr = U.ReactCurrentOwner, os = U.ReactDebugCurrentFrame;
    function ze(i) {
      if (i) {
        var c = i._owner, m = Mt(i.type, i._source, c ? c.type : null);
        os.setExtraStackFrame(m);
      } else
        os.setExtraStackFrame(null);
    }
    var ar;
    ar = !1;
    function ir(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function ls() {
      {
        if (nr.current) {
          var i = ie(nr.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function Rn(i) {
      {
        if (i !== void 0) {
          var c = i.fileName.replace(/^.*[\\\/]/, ""), m = i.lineNumber;
          return `

Check your code at ` + c + ":" + m + ".";
        }
        return "";
      }
    }
    var us = {};
    function En(i) {
      {
        var c = ls();
        if (!c) {
          var m = typeof i == "string" ? i : i.displayName || i.name;
          m && (c = `

Check the top-level render call using <` + m + ">.");
        }
        return c;
      }
    }
    function cs(i, c) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var m = En(c);
        if (us[m])
          return;
        us[m] = !0;
        var b = "";
        i && i._owner && i._owner !== nr.current && (b = " It was passed a child from " + ie(i._owner.type) + "."), ze(i), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, b), ze(null);
      }
    }
    function fs(i, c) {
      {
        if (typeof i != "object")
          return;
        if (rr(i))
          for (var m = 0; m < i.length; m++) {
            var b = i[m];
            ir(b) && cs(b, c);
          }
        else if (ir(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var T = q(i);
          if (typeof T == "function" && T !== i.entries)
            for (var R = T.call(i), D; !(D = R.next()).done; )
              ir(D.value) && cs(D.value, c);
        }
      }
    }
    function Fn(i) {
      {
        var c = i.type;
        if (c == null || typeof c == "string")
          return;
        var m;
        if (typeof c == "function")
          m = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === u || c.$$typeof === p))
          m = c.propTypes;
        else
          return;
        if (m) {
          var b = ie(c);
          bn(m, i.props, "prop", b, i);
        } else if (c.PropTypes !== void 0 && !ar) {
          ar = !0;
          var T = ie(c);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Cn(i) {
      {
        for (var c = Object.keys(i.props), m = 0; m < c.length; m++) {
          var b = c[m];
          if (b !== "children" && b !== "key") {
            ze(i), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), ze(null);
            break;
          }
        }
        i.ref !== null && (ze(i), F("Invalid attribute `ref` supplied to `React.Fragment`."), ze(null));
      }
    }
    function Wn(i, c, m, b, T, R) {
      {
        var D = ge(i);
        if (!D) {
          var S = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Z = Rn(T);
          Z ? S += Z : S += ls();
          var L;
          i === null ? L = "null" : rr(i) ? L = "array" : i !== void 0 && i.$$typeof === t ? (L = "<" + (ie(i.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : L = typeof i, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, S);
        }
        var j = Pn(i, c, m, T, R);
        if (j == null)
          return j;
        if (D) {
          var te = c.children;
          if (te !== void 0)
            if (b)
              if (rr(te)) {
                for (var Ze = 0; Ze < te.length; Ze++)
                  fs(te[Ze], i);
                Object.freeze && Object.freeze(te);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fs(te, i);
        }
        return i === s ? Cn(j) : Fn(j), j;
      }
    }
    var $n = Wn;
    xt.Fragment = s, xt.jsxDEV = $n;
  }()), xt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = In() : e.exports = jn();
})(Dr);
const Vn = Dr.exports.Fragment, g = Dr.exports.jsxDEV;
var Hn = "/Users/edpsce/Projects/GitHub/pchart/src/context/StoreContext.tsx";
const ws = mt.createContext(void 0), Gn = ({
  value: e,
  children: t
}) => /* @__PURE__ */ g(ws.Provider, {
  value: e,
  children: t
}, void 0, !1, {
  fileName: Hn,
  lineNumber: 24,
  columnNumber: 5
}, void 0);
function Ce() {
  return mt.useContext(ws);
}
var Xn = "/Users/edpsce/Projects/GitHub/pchart/src/context/ThemeContext.tsx";
const zn = {
  backgroundColor: "transparent",
  backdropFill: "#FFFDE7",
  axisColor: "#707070",
  gridColor: "#FFD54F",
  areaColor: "rgba(127,127,127, .3)"
}, ks = mt.createContext(zn), Zn = ({
  value: e,
  children: t
}) => /* @__PURE__ */ g(ks.Provider, {
  value: e,
  children: t
}, void 0, !1, {
  fileName: Xn,
  lineNumber: 32,
  columnNumber: 5
}, void 0);
function _t() {
  return mt.useContext(ks);
}
var or = "/Users/edpsce/Projects/GitHub/pchart/src/chart/Areas.tsx";
const Bn = () => {
  const e = Ce(), t = _t(), r = [], s = e.getDataset().getPercentilePoints(0), n = e.getDataset().getPercentilePoints(e.getDataset().percentiles.length - 1);
  let a = "";
  if (s.forEach((o, l) => {
    const u = e.transformX(o[0]) + e.getMargins().left, d = e.getMeasures().bottom - e.transformY(o[1]);
    a += l === 0 ? "M" : "L", a += `${u} ${d} `;
  }), n.reverse().forEach((o) => {
    const l = e.transformX(o[0]) + e.getMargins().left, u = e.getMeasures().bottom - e.transformY(o[1]);
    a += "L", a += `${l} ${u} `;
  }), a += "Z", r.push(/* @__PURE__ */ g("path", {
    className: "area-curve",
    name: "area-curve-1",
    d: a,
    fill: t.areaColor
  }, "area-curve-1", !1, {
    fileName: or,
    lineNumber: 46,
    columnNumber: 5
  }, void 0)), e.getDataset().percentiles.length >= 4) {
    const o = e.getDataset().getPercentilePoints(1), l = e.getDataset().getPercentilePoints(e.getDataset().percentiles.length - 2);
    a = "", o.forEach((u, d) => {
      const y = e.transformX(u[0]) + e.getMargins().left, p = e.getMeasures().bottom - e.transformY(u[1]);
      a += d === 0 ? "M" : "L", a += `${y} ${p} `;
    }), l.reverse().forEach((u) => {
      const d = e.transformX(u[0]) + e.getMargins().left, y = e.getMeasures().bottom - e.transformY(u[1]);
      a += "L", a += `${d} ${y} `;
    }), a += "Z", r.push(/* @__PURE__ */ g("path", {
      className: "area-curve",
      name: "area-curve-2",
      d: a,
      fill: t.areaColor
    }, "area-curve-2", !1, {
      fileName: or,
      lineNumber: 75,
      columnNumber: 7
    }, void 0));
  }
  return /* @__PURE__ */ g("g", {
    name: "areas",
    className: "areas",
    children: r
  }, void 0, !1, {
    fileName: or,
    lineNumber: 86,
    columnNumber: 5
  }, void 0);
};
var qn = "/Users/edpsce/Projects/GitHub/pchart/src/chart/Backdrop.tsx";
const Jn = () => {
  const e = Ce(), t = _t();
  return /* @__PURE__ */ g("rect", {
    name: "backdrop",
    className: "backdrop",
    fill: t.backdropFill,
    x: e.getMeasures().left,
    y: e.getMeasures().top,
    width: e.getMeasures().width,
    height: e.getMeasures().height
  }, void 0, !1, {
    fileName: qn,
    lineNumber: 27,
    columnNumber: 5
  }, void 0);
};
var lr = "/Users/edpsce/Projects/GitHub/pchart/src/chart/Grid.tsx";
const Qn = () => {
  const e = Ce(), t = _t(), r = e.getMeasures().keys.length, s = e.getMeasures().width / (r - 1), n = e.getDataset().getUnitX() === "month" || e.getDataset().getUnitX() === "year" ? 6 : 5, a = [];
  for (let d = 0; d < r; d += 1) {
    const y = e.getMeasures().keys[d], p = e.getDataset().getUnitX() === "year" ? y % n === 0 : d % n === 0, M = e.getMeasures().left + d * s, E = e.getMeasures().bottom, H = e.getMeasures().top;
    a.push(/* @__PURE__ */ g("line", {
      className: p ? "longrefline" : "refline",
      x1: M,
      y1: E,
      x2: M,
      y2: H,
      stroke: t.gridColor
    }, `reflinex-${d}`, !1, {
      fileName: lr,
      lineNumber: 44,
      columnNumber: 7
    }, void 0));
  }
  const o = e.getMeasures().maxY - e.getMeasures().minY, l = e.getMeasures().height / o, u = [];
  for (let d = 0; d <= o; d += 1) {
    const y = d % e.getStep() === 0, p = e.getMeasures().left, M = e.getMeasures().right, E = e.getMeasures().bottom - d * l;
    u.push(/* @__PURE__ */ g("line", {
      className: y ? "longrefline" : "refline",
      x1: p,
      y1: E,
      x2: M,
      y2: E,
      stroke: t.gridColor
    }, `refliney-${d}`, !1, {
      fileName: lr,
      lineNumber: 66,
      columnNumber: 7
    }, void 0));
  }
  return /* @__PURE__ */ g("g", {
    name: "grid",
    className: "grid",
    children: [a, u]
  }, void 0, !0, {
    fileName: lr,
    lineNumber: 78,
    columnNumber: 5
  }, void 0);
};
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ms;
function h() {
  return Ms.apply(null, arguments);
}
function Kn(e) {
  Ms = e;
}
function le(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Ge(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Y(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Nr(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (Y(e, t))
      return !1;
  return !0;
}
function B(e) {
  return e === void 0;
}
function xe(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function yt(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Ss(e, t) {
  var r = [], s, n = e.length;
  for (s = 0; s < n; ++s)
    r.push(t(e[s], s));
  return r;
}
function Re(e, t) {
  for (var r in t)
    Y(t, r) && (e[r] = t[r]);
  return Y(t, "toString") && (e.toString = t.toString), Y(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function _e(e, t, r, s) {
  return Zs(e, t, r, s, !0).utc();
}
function ea() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function w(e) {
  return e._pf == null && (e._pf = ea()), e._pf;
}
var gr;
Array.prototype.some ? gr = Array.prototype.some : gr = function(e) {
  var t = Object(this), r = t.length >>> 0, s;
  for (s = 0; s < r; s++)
    if (s in t && e.call(this, t[s], s, t))
      return !0;
  return !1;
};
function xr(e) {
  if (e._isValid == null) {
    var t = w(e), r = gr.call(t.parsedDateParts, function(n) {
      return n != null;
    }), s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
    if (e._strict && (s = s && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = s;
    else
      return s;
  }
  return e._isValid;
}
function It(e) {
  var t = _e(NaN);
  return e != null ? Re(w(t), e) : w(t).userInvalidated = !0, t;
}
var _s = h.momentProperties = [], ur = !1;
function Yr(e, t) {
  var r, s, n, a = _s.length;
  if (B(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), B(t._i) || (e._i = t._i), B(t._f) || (e._f = t._f), B(t._l) || (e._l = t._l), B(t._strict) || (e._strict = t._strict), B(t._tzm) || (e._tzm = t._tzm), B(t._isUTC) || (e._isUTC = t._isUTC), B(t._offset) || (e._offset = t._offset), B(t._pf) || (e._pf = w(t)), B(t._locale) || (e._locale = t._locale), a > 0)
    for (r = 0; r < a; r++)
      s = _s[r], n = t[s], B(n) || (e[s] = n);
  return e;
}
function gt(e) {
  Yr(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), ur === !1 && (ur = !0, h.updateOffset(this), ur = !1);
}
function ue(e) {
  return e instanceof gt || e != null && e._isAMomentObject != null;
}
function Ds(e) {
  h.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function se(e, t) {
  var r = !0;
  return Re(function() {
    if (h.deprecationHandler != null && h.deprecationHandler(null, e), r) {
      var s = [], n, a, o, l = arguments.length;
      for (a = 0; a < l; a++) {
        if (n = "", typeof arguments[a] == "object") {
          n += `
[` + a + "] ";
          for (o in arguments[0])
            Y(arguments[0], o) && (n += o + ": " + arguments[0][o] + ", ");
          n = n.slice(0, -2);
        } else
          n = arguments[a];
        s.push(n);
      }
      Ds(
        e + `
Arguments: ` + Array.prototype.slice.call(s).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var ys = {};
function Ns(e, t) {
  h.deprecationHandler != null && h.deprecationHandler(e, t), ys[e] || (Ds(t), ys[e] = !0);
}
h.suppressDeprecationWarnings = !1;
h.deprecationHandler = null;
function ye(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function ta(e) {
  var t, r;
  for (r in e)
    Y(e, r) && (t = e[r], ye(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function vr(e, t) {
  var r = Re({}, e), s;
  for (s in t)
    Y(t, s) && (Ge(e[s]) && Ge(t[s]) ? (r[s] = {}, Re(r[s], e[s]), Re(r[s], t[s])) : t[s] != null ? r[s] = t[s] : delete r[s]);
  for (s in e)
    Y(e, s) && !Y(t, s) && Ge(e[s]) && (r[s] = Re({}, r[s]));
  return r;
}
function Or(e) {
  e != null && this.set(e);
}
var pr;
Object.keys ? pr = Object.keys : pr = function(e) {
  var t, r = [];
  for (t in e)
    Y(e, t) && r.push(t);
  return r;
};
var ra = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function sa(e, t, r) {
  var s = this._calendar[e] || this._calendar.sameElse;
  return ye(s) ? s.call(t, r) : s;
}
function me(e, t, r) {
  var s = "" + Math.abs(e), n = t - s.length, a = e >= 0;
  return (a ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + s;
}
var Tr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Yt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, cr = {}, Qe = {};
function v(e, t, r, s) {
  var n = s;
  typeof s == "string" && (n = function() {
    return this[s]();
  }), e && (Qe[e] = n), t && (Qe[t[0]] = function() {
    return me(n.apply(this, arguments), t[1], t[2]);
  }), r && (Qe[r] = function() {
    return this.localeData().ordinal(
      n.apply(this, arguments),
      e
    );
  });
}
function na(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function aa(e) {
  var t = e.match(Tr), r, s;
  for (r = 0, s = t.length; r < s; r++)
    Qe[t[r]] ? t[r] = Qe[t[r]] : t[r] = na(t[r]);
  return function(n) {
    var a = "", o;
    for (o = 0; o < s; o++)
      a += ye(t[o]) ? t[o].call(n, e) : t[o];
    return a;
  };
}
function Rt(e, t) {
  return e.isValid() ? (t = xs(t, e.localeData()), cr[t] = cr[t] || aa(t), cr[t](e)) : e.localeData().invalidDate();
}
function xs(e, t) {
  var r = 5;
  function s(n) {
    return t.longDateFormat(n) || n;
  }
  for (Yt.lastIndex = 0; r >= 0 && Yt.test(e); )
    e = e.replace(
      Yt,
      s
    ), Yt.lastIndex = 0, r -= 1;
  return e;
}
var ia = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function oa(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(Tr).map(function(s) {
    return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd" ? s.slice(1) : s;
  }).join(""), this._longDateFormat[e]);
}
var la = "Invalid date";
function ua() {
  return this._invalidDate;
}
var ca = "%d", fa = /\d{1,2}/;
function da(e) {
  return this._ordinal.replace("%d", e);
}
var ha = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function ma(e, t, r, s) {
  var n = this._relativeTime[r];
  return ye(n) ? n(e, t, r, s) : n.replace(/%d/i, e);
}
function _a(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return ye(r) ? r(t) : r.replace(/%s/i, t);
}
var ut = {};
function X(e, t) {
  var r = e.toLowerCase();
  ut[r] = ut[r + "s"] = ut[t] = e;
}
function ne(e) {
  return typeof e == "string" ? ut[e] || ut[e.toLowerCase()] : void 0;
}
function Pr(e) {
  var t = {}, r, s;
  for (s in e)
    Y(e, s) && (r = ne(s), r && (t[r] = e[s]));
  return t;
}
var Ys = {};
function z(e, t) {
  Ys[e] = t;
}
function ya(e) {
  var t = [], r;
  for (r in e)
    Y(e, r) && t.push({ unit: r, priority: Ys[r] });
  return t.sort(function(s, n) {
    return s.priority - n.priority;
  }), t;
}
function jt(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function re(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function k(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = re(t)), r;
}
function tt(e, t) {
  return function(r) {
    return r != null ? (Os(this, e, r), h.updateOffset(this, t), this) : Ct(this, e);
  };
}
function Ct(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Os(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && jt(e.year()) && e.month() === 1 && e.date() === 29 ? (r = k(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    Zt(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function ga(e) {
  return e = ne(e), ye(this[e]) ? this[e]() : this;
}
function va(e, t) {
  if (typeof e == "object") {
    e = Pr(e);
    var r = ya(e), s, n = r.length;
    for (s = 0; s < n; s++)
      this[r[s].unit](e[r[s].unit]);
  } else if (e = ne(e), ye(this[e]))
    return this[e](t);
  return this;
}
var Ts = /\d/, ee = /\d\d/, Ps = /\d{3}/, Rr = /\d{4}/, Vt = /[+-]?\d{6}/, W = /\d\d?/, Rs = /\d\d\d\d?/, Es = /\d\d\d\d\d\d?/, Ht = /\d{1,3}/, Er = /\d{1,4}/, Gt = /[+-]?\d{1,6}/, rt = /\d+/, Xt = /[+-]?\d+/, pa = /Z|[+-]\d\d:?\d\d/gi, zt = /Z|[+-]\d\d(?::?\d\d)?/gi, ba = /[+-]?\d+(\.\d{1,3})?/, vt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Wt;
Wt = {};
function _(e, t, r) {
  Wt[e] = ye(t) ? t : function(s, n) {
    return s && r ? r : t;
  };
}
function wa(e, t) {
  return Y(Wt, e) ? Wt[e](t._strict, t._locale) : new RegExp(ka(e));
}
function ka(e) {
  return K(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, s, n, a) {
        return r || s || n || a;
      }
    )
  );
}
function K(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var br = {};
function P(e, t) {
  var r, s = t, n;
  for (typeof e == "string" && (e = [e]), xe(t) && (s = function(a, o) {
    o[t] = k(a);
  }), n = e.length, r = 0; r < n; r++)
    br[e[r]] = s;
}
function pt(e, t) {
  P(e, function(r, s, n, a) {
    n._w = n._w || {}, t(r, n._w, n, a);
  });
}
function Ma(e, t, r) {
  t != null && Y(br, e) && br[e](t, r._a, r, e);
}
var G = 0, Se = 1, he = 2, V = 3, oe = 4, De = 5, He = 6, Sa = 7, Da = 8;
function Na(e, t) {
  return (e % t + t) % t;
}
var A;
Array.prototype.indexOf ? A = Array.prototype.indexOf : A = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Zt(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = Na(t, 12);
  return e += (t - r) / 12, r === 1 ? jt(e) ? 29 : 28 : 31 - r % 7 % 2;
}
v("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
v("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
v("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
X("month", "M");
z("month", 8);
_("M", W);
_("MM", W, ee);
_("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
_("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
P(["M", "MM"], function(e, t) {
  t[Se] = k(e) - 1;
});
P(["MMM", "MMMM"], function(e, t, r, s) {
  var n = r._locale.monthsParse(e, s, r._strict);
  n != null ? t[Se] = n : w(r).invalidMonth = e;
});
var xa = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Fs = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Cs = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Ya = vt, Oa = vt;
function Ta(e, t) {
  return e ? le(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Cs).test(t) ? "format" : "standalone"][e.month()] : le(this._months) ? this._months : this._months.standalone;
}
function Pa(e, t) {
  return e ? le(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Cs.test(t) ? "format" : "standalone"][e.month()] : le(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Ra(e, t, r) {
  var s, n, a, o = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
      a = _e([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[s] = this.months(a, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (n = A.call(this._shortMonthsParse, o), n !== -1 ? n : null) : (n = A.call(this._longMonthsParse, o), n !== -1 ? n : null) : t === "MMM" ? (n = A.call(this._shortMonthsParse, o), n !== -1 ? n : (n = A.call(this._longMonthsParse, o), n !== -1 ? n : null)) : (n = A.call(this._longMonthsParse, o), n !== -1 ? n : (n = A.call(this._shortMonthsParse, o), n !== -1 ? n : null));
}
function Ea(e, t, r) {
  var s, n, a;
  if (this._monthsParseExact)
    return Ra.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
    if (n = _e([2e3, s]), r && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp(
      "^" + this.months(n, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[s] = new RegExp(
      "^" + this.monthsShort(n, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[s] && (a = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[s] = new RegExp(a.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[s].test(e))
      return s;
    if (r && t === "MMM" && this._shortMonthsParse[s].test(e))
      return s;
    if (!r && this._monthsParse[s].test(e))
      return s;
  }
}
function Ws(e, t) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = k(t);
    else if (t = e.localeData().monthsParse(t), !xe(t))
      return e;
  }
  return r = Math.min(e.date(), Zt(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function $s(e) {
  return e != null ? (Ws(this, e), h.updateOffset(this, !0), this) : Ct(this, "Month");
}
function Fa() {
  return Zt(this.year(), this.month());
}
function Ca(e) {
  return this._monthsParseExact ? (Y(this, "_monthsRegex") || Us.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Y(this, "_monthsShortRegex") || (this._monthsShortRegex = Ya), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Wa(e) {
  return this._monthsParseExact ? (Y(this, "_monthsRegex") || Us.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Y(this, "_monthsRegex") || (this._monthsRegex = Oa), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Us() {
  function e(o, l) {
    return l.length - o.length;
  }
  var t = [], r = [], s = [], n, a;
  for (n = 0; n < 12; n++)
    a = _e([2e3, n]), t.push(this.monthsShort(a, "")), r.push(this.months(a, "")), s.push(this.months(a, "")), s.push(this.monthsShort(a, ""));
  for (t.sort(e), r.sort(e), s.sort(e), n = 0; n < 12; n++)
    t[n] = K(t[n]), r[n] = K(r[n]);
  for (n = 0; n < 24; n++)
    s[n] = K(s[n]);
  this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
v("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? me(e, 4) : "+" + e;
});
v(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
v(0, ["YYYY", 4], 0, "year");
v(0, ["YYYYY", 5], 0, "year");
v(0, ["YYYYYY", 6, !0], 0, "year");
X("year", "y");
z("year", 1);
_("Y", Xt);
_("YY", W, ee);
_("YYYY", Er, Rr);
_("YYYYY", Gt, Vt);
_("YYYYYY", Gt, Vt);
P(["YYYYY", "YYYYYY"], G);
P("YYYY", function(e, t) {
  t[G] = e.length === 2 ? h.parseTwoDigitYear(e) : k(e);
});
P("YY", function(e, t) {
  t[G] = h.parseTwoDigitYear(e);
});
P("Y", function(e, t) {
  t[G] = parseInt(e, 10);
});
function ct(e) {
  return jt(e) ? 366 : 365;
}
h.parseTwoDigitYear = function(e) {
  return k(e) + (k(e) > 68 ? 1900 : 2e3);
};
var Ls = tt("FullYear", !0);
function $a() {
  return jt(this.year());
}
function Ua(e, t, r, s, n, a, o) {
  var l;
  return e < 100 && e >= 0 ? (l = new Date(e + 400, t, r, s, n, a, o), isFinite(l.getFullYear()) && l.setFullYear(e)) : l = new Date(e, t, r, s, n, a, o), l;
}
function ft(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function $t(e, t, r) {
  var s = 7 + t - r, n = (7 + ft(e, 0, s).getUTCDay() - t) % 7;
  return -n + s - 1;
}
function As(e, t, r, s, n) {
  var a = (7 + r - s) % 7, o = $t(e, s, n), l = 1 + 7 * (t - 1) + a + o, u, d;
  return l <= 0 ? (u = e - 1, d = ct(u) + l) : l > ct(e) ? (u = e + 1, d = l - ct(e)) : (u = e, d = l), {
    year: u,
    dayOfYear: d
  };
}
function dt(e, t, r) {
  var s = $t(e.year(), t, r), n = Math.floor((e.dayOfYear() - s - 1) / 7) + 1, a, o;
  return n < 1 ? (o = e.year() - 1, a = n + Ne(o, t, r)) : n > Ne(e.year(), t, r) ? (a = n - Ne(e.year(), t, r), o = e.year() + 1) : (o = e.year(), a = n), {
    week: a,
    year: o
  };
}
function Ne(e, t, r) {
  var s = $t(e, t, r), n = $t(e + 1, t, r);
  return (ct(e) - s + n) / 7;
}
v("w", ["ww", 2], "wo", "week");
v("W", ["WW", 2], "Wo", "isoWeek");
X("week", "w");
X("isoWeek", "W");
z("week", 5);
z("isoWeek", 5);
_("w", W);
_("ww", W, ee);
_("W", W);
_("WW", W, ee);
pt(
  ["w", "ww", "W", "WW"],
  function(e, t, r, s) {
    t[s.substr(0, 1)] = k(e);
  }
);
function La(e) {
  return dt(e, this._week.dow, this._week.doy).week;
}
var Aa = {
  dow: 0,
  doy: 6
};
function Ia() {
  return this._week.dow;
}
function ja() {
  return this._week.doy;
}
function Va(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Ha(e) {
  var t = dt(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
v("d", 0, "do", "day");
v("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
v("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
v("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
v("e", 0, 0, "weekday");
v("E", 0, 0, "isoWeekday");
X("day", "d");
X("weekday", "e");
X("isoWeekday", "E");
z("day", 11);
z("weekday", 11);
z("isoWeekday", 11);
_("d", W);
_("e", W);
_("E", W);
_("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
_("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
_("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
pt(["dd", "ddd", "dddd"], function(e, t, r, s) {
  var n = r._locale.weekdaysParse(e, s, r._strict);
  n != null ? t.d = n : w(r).invalidWeekday = e;
});
pt(["d", "e", "E"], function(e, t, r, s) {
  t[s] = k(e);
});
function Ga(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Xa(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Fr(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var za = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Is = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Za = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ba = vt, qa = vt, Ja = vt;
function Qa(e, t) {
  var r = le(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Fr(r, this._week.dow) : e ? r[e.day()] : r;
}
function Ka(e) {
  return e === !0 ? Fr(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function ei(e) {
  return e === !0 ? Fr(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function ti(e, t, r) {
  var s, n, a, o = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)
      a = _e([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(a, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (n = A.call(this._weekdaysParse, o), n !== -1 ? n : null) : t === "ddd" ? (n = A.call(this._shortWeekdaysParse, o), n !== -1 ? n : null) : (n = A.call(this._minWeekdaysParse, o), n !== -1 ? n : null) : t === "dddd" ? (n = A.call(this._weekdaysParse, o), n !== -1 || (n = A.call(this._shortWeekdaysParse, o), n !== -1) ? n : (n = A.call(this._minWeekdaysParse, o), n !== -1 ? n : null)) : t === "ddd" ? (n = A.call(this._shortWeekdaysParse, o), n !== -1 || (n = A.call(this._weekdaysParse, o), n !== -1) ? n : (n = A.call(this._minWeekdaysParse, o), n !== -1 ? n : null)) : (n = A.call(this._minWeekdaysParse, o), n !== -1 || (n = A.call(this._weekdaysParse, o), n !== -1) ? n : (n = A.call(this._shortWeekdaysParse, o), n !== -1 ? n : null));
}
function ri(e, t, r) {
  var s, n, a;
  if (this._weekdaysParseExact)
    return ti.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
    if (n = _e([2e3, 1]).day(s), r && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp(
      "^" + this.weekdays(n, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[s] = new RegExp(
      "^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[s] = new RegExp(
      "^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[s] || (a = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[s] = new RegExp(a.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[s].test(e))
      return s;
    if (r && t === "ddd" && this._shortWeekdaysParse[s].test(e))
      return s;
    if (r && t === "dd" && this._minWeekdaysParse[s].test(e))
      return s;
    if (!r && this._weekdaysParse[s].test(e))
      return s;
  }
}
function si(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Ga(e, this.localeData()), this.add(e - t, "d")) : t;
}
function ni(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function ai(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Xa(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function ii(e) {
  return this._weekdaysParseExact ? (Y(this, "_weekdaysRegex") || Cr.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Y(this, "_weekdaysRegex") || (this._weekdaysRegex = Ba), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function oi(e) {
  return this._weekdaysParseExact ? (Y(this, "_weekdaysRegex") || Cr.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Y(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qa), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function li(e) {
  return this._weekdaysParseExact ? (Y(this, "_weekdaysRegex") || Cr.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Y(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ja), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Cr() {
  function e(y, p) {
    return p.length - y.length;
  }
  var t = [], r = [], s = [], n = [], a, o, l, u, d;
  for (a = 0; a < 7; a++)
    o = _e([2e3, 1]).day(a), l = K(this.weekdaysMin(o, "")), u = K(this.weekdaysShort(o, "")), d = K(this.weekdays(o, "")), t.push(l), r.push(u), s.push(d), n.push(l), n.push(u), n.push(d);
  t.sort(e), r.sort(e), s.sort(e), n.sort(e), this._weekdaysRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Wr() {
  return this.hours() % 12 || 12;
}
function ui() {
  return this.hours() || 24;
}
v("H", ["HH", 2], 0, "hour");
v("h", ["hh", 2], 0, Wr);
v("k", ["kk", 2], 0, ui);
v("hmm", 0, 0, function() {
  return "" + Wr.apply(this) + me(this.minutes(), 2);
});
v("hmmss", 0, 0, function() {
  return "" + Wr.apply(this) + me(this.minutes(), 2) + me(this.seconds(), 2);
});
v("Hmm", 0, 0, function() {
  return "" + this.hours() + me(this.minutes(), 2);
});
v("Hmmss", 0, 0, function() {
  return "" + this.hours() + me(this.minutes(), 2) + me(this.seconds(), 2);
});
function js(e, t) {
  v(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
js("a", !0);
js("A", !1);
X("hour", "h");
z("hour", 13);
function Vs(e, t) {
  return t._meridiemParse;
}
_("a", Vs);
_("A", Vs);
_("H", W);
_("h", W);
_("k", W);
_("HH", W, ee);
_("hh", W, ee);
_("kk", W, ee);
_("hmm", Rs);
_("hmmss", Es);
_("Hmm", Rs);
_("Hmmss", Es);
P(["H", "HH"], V);
P(["k", "kk"], function(e, t, r) {
  var s = k(e);
  t[V] = s === 24 ? 0 : s;
});
P(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
P(["h", "hh"], function(e, t, r) {
  t[V] = k(e), w(r).bigHour = !0;
});
P("hmm", function(e, t, r) {
  var s = e.length - 2;
  t[V] = k(e.substr(0, s)), t[oe] = k(e.substr(s)), w(r).bigHour = !0;
});
P("hmmss", function(e, t, r) {
  var s = e.length - 4, n = e.length - 2;
  t[V] = k(e.substr(0, s)), t[oe] = k(e.substr(s, 2)), t[De] = k(e.substr(n)), w(r).bigHour = !0;
});
P("Hmm", function(e, t, r) {
  var s = e.length - 2;
  t[V] = k(e.substr(0, s)), t[oe] = k(e.substr(s));
});
P("Hmmss", function(e, t, r) {
  var s = e.length - 4, n = e.length - 2;
  t[V] = k(e.substr(0, s)), t[oe] = k(e.substr(s, 2)), t[De] = k(e.substr(n));
});
function ci(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var fi = /[ap]\.?m?\.?/i, di = tt("Hours", !0);
function hi(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var Hs = {
  calendar: ra,
  longDateFormat: ia,
  invalidDate: la,
  ordinal: ca,
  dayOfMonthOrdinalParse: fa,
  relativeTime: ha,
  months: xa,
  monthsShort: Fs,
  week: Aa,
  weekdays: za,
  weekdaysMin: Za,
  weekdaysShort: Is,
  meridiemParse: fi
}, $ = {}, it = {}, ht;
function mi(e, t) {
  var r, s = Math.min(e.length, t.length);
  for (r = 0; r < s; r += 1)
    if (e[r] !== t[r])
      return r;
  return s;
}
function gs(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function _i(e) {
  for (var t = 0, r, s, n, a; t < e.length; ) {
    for (a = gs(e[t]).split("-"), r = a.length, s = gs(e[t + 1]), s = s ? s.split("-") : null; r > 0; ) {
      if (n = Bt(a.slice(0, r).join("-")), n)
        return n;
      if (s && s.length >= r && mi(a, s) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return ht;
}
function yi(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Bt(e) {
  var t = null, r;
  if ($[e] === void 0 && typeof module < "u" && module && module.exports && yi(e))
    try {
      t = ht._abbr, r = require, r("./locale/" + e), Fe(t);
    } catch {
      $[e] = null;
    }
  return $[e];
}
function Fe(e, t) {
  var r;
  return e && (B(t) ? r = Ye(e) : r = $r(e, t), r ? ht = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ht._abbr;
}
function $r(e, t) {
  if (t !== null) {
    var r, s = Hs;
    if (t.abbr = e, $[e] != null)
      Ns(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), s = $[e]._config;
    else if (t.parentLocale != null)
      if ($[t.parentLocale] != null)
        s = $[t.parentLocale]._config;
      else if (r = Bt(t.parentLocale), r != null)
        s = r._config;
      else
        return it[t.parentLocale] || (it[t.parentLocale] = []), it[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return $[e] = new Or(vr(s, t)), it[e] && it[e].forEach(function(n) {
      $r(n.name, n.config);
    }), Fe(e), $[e];
  } else
    return delete $[e], null;
}
function gi(e, t) {
  if (t != null) {
    var r, s, n = Hs;
    $[e] != null && $[e].parentLocale != null ? $[e].set(vr($[e]._config, t)) : (s = Bt(e), s != null && (n = s._config), t = vr(n, t), s == null && (t.abbr = e), r = new Or(t), r.parentLocale = $[e], $[e] = r), Fe(e);
  } else
    $[e] != null && ($[e].parentLocale != null ? ($[e] = $[e].parentLocale, e === Fe() && Fe(e)) : $[e] != null && delete $[e]);
  return $[e];
}
function Ye(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ht;
  if (!le(e)) {
    if (t = Bt(e), t)
      return t;
    e = [e];
  }
  return _i(e);
}
function vi() {
  return pr($);
}
function Ur(e) {
  var t, r = e._a;
  return r && w(e).overflow === -2 && (t = r[Se] < 0 || r[Se] > 11 ? Se : r[he] < 1 || r[he] > Zt(r[G], r[Se]) ? he : r[V] < 0 || r[V] > 24 || r[V] === 24 && (r[oe] !== 0 || r[De] !== 0 || r[He] !== 0) ? V : r[oe] < 0 || r[oe] > 59 ? oe : r[De] < 0 || r[De] > 59 ? De : r[He] < 0 || r[He] > 999 ? He : -1, w(e)._overflowDayOfYear && (t < G || t > he) && (t = he), w(e)._overflowWeeks && t === -1 && (t = Sa), w(e)._overflowWeekday && t === -1 && (t = Da), w(e).overflow = t), e;
}
var pi = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, bi = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, wi = /Z|[+-]\d\d(?::?\d\d)?/, Ot = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], fr = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], ki = /^\/?Date\((-?\d+)/i, Mi = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Si = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Gs(e) {
  var t, r, s = e._i, n = pi.exec(s) || bi.exec(s), a, o, l, u, d = Ot.length, y = fr.length;
  if (n) {
    for (w(e).iso = !0, t = 0, r = d; t < r; t++)
      if (Ot[t][1].exec(n[1])) {
        o = Ot[t][0], a = Ot[t][2] !== !1;
        break;
      }
    if (o == null) {
      e._isValid = !1;
      return;
    }
    if (n[3]) {
      for (t = 0, r = y; t < r; t++)
        if (fr[t][1].exec(n[3])) {
          l = (n[2] || " ") + fr[t][0];
          break;
        }
      if (l == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!a && l != null) {
      e._isValid = !1;
      return;
    }
    if (n[4])
      if (wi.exec(n[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = o + (l || "") + (u || ""), Ar(e);
  } else
    e._isValid = !1;
}
function Di(e, t, r, s, n, a) {
  var o = [
    Ni(e),
    Fs.indexOf(t),
    parseInt(r, 10),
    parseInt(s, 10),
    parseInt(n, 10)
  ];
  return a && o.push(parseInt(a, 10)), o;
}
function Ni(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function xi(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Yi(e, t, r) {
  if (e) {
    var s = Is.indexOf(e), n = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (s !== n)
      return w(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function Oi(e, t, r) {
  if (e)
    return Si[e];
  if (t)
    return 0;
  var s = parseInt(r, 10), n = s % 100, a = (s - n) / 100;
  return a * 60 + n;
}
function Xs(e) {
  var t = Mi.exec(xi(e._i)), r;
  if (t) {
    if (r = Di(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Yi(t[1], r, e))
      return;
    e._a = r, e._tzm = Oi(t[8], t[9], t[10]), e._d = ft.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), w(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Ti(e) {
  var t = ki.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if (Gs(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Xs(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : h.createFromInputFallback(e);
}
h.createFromInputFallback = se(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function qe(e, t, r) {
  return e != null ? e : t != null ? t : r;
}
function Pi(e) {
  var t = new Date(h.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Lr(e) {
  var t, r, s = [], n, a, o;
  if (!e._d) {
    for (n = Pi(e), e._w && e._a[he] == null && e._a[Se] == null && Ri(e), e._dayOfYear != null && (o = qe(e._a[G], n[G]), (e._dayOfYear > ct(o) || e._dayOfYear === 0) && (w(e)._overflowDayOfYear = !0), r = ft(o, 0, e._dayOfYear), e._a[Se] = r.getUTCMonth(), e._a[he] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = s[t] = n[t];
    for (; t < 7; t++)
      e._a[t] = s[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[V] === 24 && e._a[oe] === 0 && e._a[De] === 0 && e._a[He] === 0 && (e._nextDay = !0, e._a[V] = 0), e._d = (e._useUTC ? ft : Ua).apply(
      null,
      s
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[V] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (w(e).weekdayMismatch = !0);
  }
}
function Ri(e) {
  var t, r, s, n, a, o, l, u, d;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, o = 4, r = qe(
    t.GG,
    e._a[G],
    dt(C(), 1, 4).year
  ), s = qe(t.W, 1), n = qe(t.E, 1), (n < 1 || n > 7) && (u = !0)) : (a = e._locale._week.dow, o = e._locale._week.doy, d = dt(C(), a, o), r = qe(t.gg, e._a[G], d.year), s = qe(t.w, d.week), t.d != null ? (n = t.d, (n < 0 || n > 6) && (u = !0)) : t.e != null ? (n = t.e + a, (t.e < 0 || t.e > 6) && (u = !0)) : n = a), s < 1 || s > Ne(r, a, o) ? w(e)._overflowWeeks = !0 : u != null ? w(e)._overflowWeekday = !0 : (l = As(r, s, n, a, o), e._a[G] = l.year, e._dayOfYear = l.dayOfYear);
}
h.ISO_8601 = function() {
};
h.RFC_2822 = function() {
};
function Ar(e) {
  if (e._f === h.ISO_8601) {
    Gs(e);
    return;
  }
  if (e._f === h.RFC_2822) {
    Xs(e);
    return;
  }
  e._a = [], w(e).empty = !0;
  var t = "" + e._i, r, s, n, a, o, l = t.length, u = 0, d, y;
  for (n = xs(e._f, e._locale).match(Tr) || [], y = n.length, r = 0; r < y; r++)
    a = n[r], s = (t.match(wa(a, e)) || [])[0], s && (o = t.substr(0, t.indexOf(s)), o.length > 0 && w(e).unusedInput.push(o), t = t.slice(
      t.indexOf(s) + s.length
    ), u += s.length), Qe[a] ? (s ? w(e).empty = !1 : w(e).unusedTokens.push(a), Ma(a, s, e)) : e._strict && !s && w(e).unusedTokens.push(a);
  w(e).charsLeftOver = l - u, t.length > 0 && w(e).unusedInput.push(t), e._a[V] <= 12 && w(e).bigHour === !0 && e._a[V] > 0 && (w(e).bigHour = void 0), w(e).parsedDateParts = e._a.slice(0), w(e).meridiem = e._meridiem, e._a[V] = Ei(
    e._locale,
    e._a[V],
    e._meridiem
  ), d = w(e).era, d !== null && (e._a[G] = e._locale.erasConvertYear(d, e._a[G])), Lr(e), Ur(e);
}
function Ei(e, t, r) {
  var s;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (s = e.isPM(r), s && t < 12 && (t += 12), !s && t === 12 && (t = 0)), t);
}
function Fi(e) {
  var t, r, s, n, a, o, l = !1, u = e._f.length;
  if (u === 0) {
    w(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (n = 0; n < u; n++)
    a = 0, o = !1, t = Yr({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[n], Ar(t), xr(t) && (o = !0), a += w(t).charsLeftOver, a += w(t).unusedTokens.length * 10, w(t).score = a, l ? a < s && (s = a, r = t) : (s == null || a < s || o) && (s = a, r = t, o && (l = !0));
  Re(e, r || t);
}
function Ci(e) {
  if (!e._d) {
    var t = Pr(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = Ss(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(s) {
        return s && parseInt(s, 10);
      }
    ), Lr(e);
  }
}
function Wi(e) {
  var t = new gt(Ur(zs(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function zs(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || Ye(e._l), t === null || r === void 0 && t === "" ? It({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ue(t) ? new gt(Ur(t)) : (yt(t) ? e._d = t : le(r) ? Fi(e) : r ? Ar(e) : $i(e), xr(e) || (e._d = null), e));
}
function $i(e) {
  var t = e._i;
  B(t) ? e._d = new Date(h.now()) : yt(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Ti(e) : le(t) ? (e._a = Ss(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), Lr(e)) : Ge(t) ? Ci(e) : xe(t) ? e._d = new Date(t) : h.createFromInputFallback(e);
}
function Zs(e, t, r, s, n) {
  var a = {};
  return (t === !0 || t === !1) && (s = t, t = void 0), (r === !0 || r === !1) && (s = r, r = void 0), (Ge(e) && Nr(e) || le(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = n, a._l = r, a._i = e, a._f = t, a._strict = s, Wi(a);
}
function C(e, t, r, s) {
  return Zs(e, t, r, s, !1);
}
var Ui = se(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = C.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : It();
  }
), Li = se(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = C.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : It();
  }
);
function Bs(e, t) {
  var r, s;
  if (t.length === 1 && le(t[0]) && (t = t[0]), !t.length)
    return C();
  for (r = t[0], s = 1; s < t.length; ++s)
    (!t[s].isValid() || t[s][e](r)) && (r = t[s]);
  return r;
}
function Ai() {
  var e = [].slice.call(arguments, 0);
  return Bs("isBefore", e);
}
function Ii() {
  var e = [].slice.call(arguments, 0);
  return Bs("isAfter", e);
}
var ji = function() {
  return Date.now ? Date.now() : +new Date();
}, ot = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Vi(e) {
  var t, r = !1, s, n = ot.length;
  for (t in e)
    if (Y(e, t) && !(A.call(ot, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (s = 0; s < n; ++s)
    if (e[ot[s]]) {
      if (r)
        return !1;
      parseFloat(e[ot[s]]) !== k(e[ot[s]]) && (r = !0);
    }
  return !0;
}
function Hi() {
  return this._isValid;
}
function Gi() {
  return ce(NaN);
}
function qt(e) {
  var t = Pr(e), r = t.year || 0, s = t.quarter || 0, n = t.month || 0, a = t.week || t.isoWeek || 0, o = t.day || 0, l = t.hour || 0, u = t.minute || 0, d = t.second || 0, y = t.millisecond || 0;
  this._isValid = Vi(t), this._milliseconds = +y + d * 1e3 + u * 6e4 + l * 1e3 * 60 * 60, this._days = +o + a * 7, this._months = +n + s * 3 + r * 12, this._data = {}, this._locale = Ye(), this._bubble();
}
function Et(e) {
  return e instanceof qt;
}
function wr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Xi(e, t, r) {
  var s = Math.min(e.length, t.length), n = Math.abs(e.length - t.length), a = 0, o;
  for (o = 0; o < s; o++)
    (r && e[o] !== t[o] || !r && k(e[o]) !== k(t[o])) && a++;
  return a + n;
}
function qs(e, t) {
  v(e, 0, 0, function() {
    var r = this.utcOffset(), s = "+";
    return r < 0 && (r = -r, s = "-"), s + me(~~(r / 60), 2) + t + me(~~r % 60, 2);
  });
}
qs("Z", ":");
qs("ZZ", "");
_("Z", zt);
_("ZZ", zt);
P(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = Ir(zt, e);
});
var zi = /([\+\-]|\d\d)/gi;
function Ir(e, t) {
  var r = (t || "").match(e), s, n, a;
  return r === null ? null : (s = r[r.length - 1] || [], n = (s + "").match(zi) || ["-", 0, 0], a = +(n[1] * 60) + k(n[2]), a === 0 ? 0 : n[0] === "+" ? a : -a);
}
function jr(e, t) {
  var r, s;
  return t._isUTC ? (r = t.clone(), s = (ue(e) || yt(e) ? e.valueOf() : C(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + s), h.updateOffset(r, !1), r) : C(e).local();
}
function kr(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
h.updateOffset = function() {
};
function Zi(e, t, r) {
  var s = this._offset || 0, n;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Ir(zt, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (n = kr(this)), this._offset = e, this._isUTC = !0, n != null && this.add(n, "m"), s !== e && (!t || this._changeInProgress ? Ks(
      this,
      ce(e - s, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, h.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? s : kr(this);
}
function Bi(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function qi(e) {
  return this.utcOffset(0, e);
}
function Ji(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(kr(this), "m")), this;
}
function Qi() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Ir(pa, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Ki(e) {
  return this.isValid() ? (e = e ? C(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function eo() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function to() {
  if (!B(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Yr(e, this), e = zs(e), e._a ? (t = e._isUTC ? _e(e._a) : C(e._a), this._isDSTShifted = this.isValid() && Xi(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function ro() {
  return this.isValid() ? !this._isUTC : !1;
}
function so() {
  return this.isValid() ? this._isUTC : !1;
}
function Js() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var no = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, ao = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function ce(e, t) {
  var r = e, s = null, n, a, o;
  return Et(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : xe(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (s = no.exec(e)) ? (n = s[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: k(s[he]) * n,
    h: k(s[V]) * n,
    m: k(s[oe]) * n,
    s: k(s[De]) * n,
    ms: k(wr(s[He] * 1e3)) * n
  }) : (s = ao.exec(e)) ? (n = s[1] === "-" ? -1 : 1, r = {
    y: Ue(s[2], n),
    M: Ue(s[3], n),
    w: Ue(s[4], n),
    d: Ue(s[5], n),
    h: Ue(s[6], n),
    m: Ue(s[7], n),
    s: Ue(s[8], n)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (o = io(
    C(r.from),
    C(r.to)
  ), r = {}, r.ms = o.milliseconds, r.M = o.months), a = new qt(r), Et(e) && Y(e, "_locale") && (a._locale = e._locale), Et(e) && Y(e, "_isValid") && (a._isValid = e._isValid), a;
}
ce.fn = qt.prototype;
ce.invalid = Gi;
function Ue(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function vs(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function io(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = jr(t, e), e.isBefore(t) ? r = vs(e, t) : (r = vs(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function Qs(e, t) {
  return function(r, s) {
    var n, a;
    return s !== null && !isNaN(+s) && (Ns(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = r, r = s, s = a), n = ce(r, s), Ks(this, n, e), this;
  };
}
function Ks(e, t, r, s) {
  var n = t._milliseconds, a = wr(t._days), o = wr(t._months);
  !e.isValid() || (s = s == null ? !0 : s, o && Ws(e, Ct(e, "Month") + o * r), a && Os(e, "Date", Ct(e, "Date") + a * r), n && e._d.setTime(e._d.valueOf() + n * r), s && h.updateOffset(e, a || o));
}
var oo = Qs(1, "add"), lo = Qs(-1, "subtract");
function en(e) {
  return typeof e == "string" || e instanceof String;
}
function uo(e) {
  return ue(e) || yt(e) || en(e) || xe(e) || fo(e) || co(e) || e === null || e === void 0;
}
function co(e) {
  var t = Ge(e) && !Nr(e), r = !1, s = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], n, a, o = s.length;
  for (n = 0; n < o; n += 1)
    a = s[n], r = r || Y(e, a);
  return t && r;
}
function fo(e) {
  var t = le(e), r = !1;
  return t && (r = e.filter(function(s) {
    return !xe(s) && en(e);
  }).length === 0), t && r;
}
function ho(e) {
  var t = Ge(e) && !Nr(e), r = !1, s = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], n, a;
  for (n = 0; n < s.length; n += 1)
    a = s[n], r = r || Y(e, a);
  return t && r;
}
function mo(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function _o(e, t) {
  arguments.length === 1 && (arguments[0] ? uo(arguments[0]) ? (e = arguments[0], t = void 0) : ho(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || C(), s = jr(r, this).startOf("day"), n = h.calendarFormat(this, s) || "sameElse", a = t && (ye(t[n]) ? t[n].call(this, r) : t[n]);
  return this.format(
    a || this.localeData().calendar(n, this, C(r))
  );
}
function yo() {
  return new gt(this);
}
function go(e, t) {
  var r = ue(e) ? e : C(e);
  return this.isValid() && r.isValid() ? (t = ne(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function vo(e, t) {
  var r = ue(e) ? e : C(e);
  return this.isValid() && r.isValid() ? (t = ne(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function po(e, t, r, s) {
  var n = ue(e) ? e : C(e), a = ue(t) ? t : C(t);
  return this.isValid() && n.isValid() && a.isValid() ? (s = s || "()", (s[0] === "(" ? this.isAfter(n, r) : !this.isBefore(n, r)) && (s[1] === ")" ? this.isBefore(a, r) : !this.isAfter(a, r))) : !1;
}
function bo(e, t) {
  var r = ue(e) ? e : C(e), s;
  return this.isValid() && r.isValid() ? (t = ne(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (s = r.valueOf(), this.clone().startOf(t).valueOf() <= s && s <= this.clone().endOf(t).valueOf())) : !1;
}
function wo(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function ko(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Mo(e, t, r) {
  var s, n, a;
  if (!this.isValid())
    return NaN;
  if (s = jr(e, this), !s.isValid())
    return NaN;
  switch (n = (s.utcOffset() - this.utcOffset()) * 6e4, t = ne(t), t) {
    case "year":
      a = Ft(this, s) / 12;
      break;
    case "month":
      a = Ft(this, s);
      break;
    case "quarter":
      a = Ft(this, s) / 3;
      break;
    case "second":
      a = (this - s) / 1e3;
      break;
    case "minute":
      a = (this - s) / 6e4;
      break;
    case "hour":
      a = (this - s) / 36e5;
      break;
    case "day":
      a = (this - s - n) / 864e5;
      break;
    case "week":
      a = (this - s - n) / 6048e5;
      break;
    default:
      a = this - s;
  }
  return r ? a : re(a);
}
function Ft(e, t) {
  if (e.date() < t.date())
    return -Ft(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), s = e.clone().add(r, "months"), n, a;
  return t - s < 0 ? (n = e.clone().add(r - 1, "months"), a = (t - s) / (s - n)) : (n = e.clone().add(r + 1, "months"), a = (t - s) / (n - s)), -(r + a) || 0;
}
h.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
h.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function So() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Do(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? Rt(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : ye(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Rt(r, "Z")) : Rt(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function No() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, s, n, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(r + s + n + a);
}
function xo(e) {
  e || (e = this.isUtc() ? h.defaultFormatUtc : h.defaultFormat);
  var t = Rt(this, e);
  return this.localeData().postformat(t);
}
function Yo(e, t) {
  return this.isValid() && (ue(e) && e.isValid() || C(e).isValid()) ? ce({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Oo(e) {
  return this.from(C(), e);
}
function To(e, t) {
  return this.isValid() && (ue(e) && e.isValid() || C(e).isValid()) ? ce({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Po(e) {
  return this.to(C(), e);
}
function tn(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Ye(e), t != null && (this._locale = t), this);
}
var rn = se(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function sn() {
  return this._locale;
}
var Ut = 1e3, Ke = 60 * Ut, Lt = 60 * Ke, nn = (365 * 400 + 97) * 24 * Lt;
function et(e, t) {
  return (e % t + t) % t;
}
function an(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - nn : new Date(e, t, r).valueOf();
}
function on(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - nn : Date.UTC(e, t, r);
}
function Ro(e) {
  var t, r;
  if (e = ne(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? on : an, e) {
    case "year":
      t = r(this.year(), 0, 1);
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = r(this.year(), this.month(), 1);
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= et(
        t + (this._isUTC ? 0 : this.utcOffset() * Ke),
        Lt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= et(t, Ke);
      break;
    case "second":
      t = this._d.valueOf(), t -= et(t, Ut);
      break;
  }
  return this._d.setTime(t), h.updateOffset(this, !0), this;
}
function Eo(e) {
  var t, r;
  if (e = ne(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? on : an, e) {
    case "year":
      t = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Lt - et(
        t + (this._isUTC ? 0 : this.utcOffset() * Ke),
        Lt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Ke - et(t, Ke) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Ut - et(t, Ut) - 1;
      break;
  }
  return this._d.setTime(t), h.updateOffset(this, !0), this;
}
function Fo() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Co() {
  return Math.floor(this.valueOf() / 1e3);
}
function Wo() {
  return new Date(this.valueOf());
}
function $o() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function Uo() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function Lo() {
  return this.isValid() ? this.toISOString() : null;
}
function Ao() {
  return xr(this);
}
function Io() {
  return Re({}, w(this));
}
function jo() {
  return w(this).overflow;
}
function Vo() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
v("N", 0, 0, "eraAbbr");
v("NN", 0, 0, "eraAbbr");
v("NNN", 0, 0, "eraAbbr");
v("NNNN", 0, 0, "eraName");
v("NNNNN", 0, 0, "eraNarrow");
v("y", ["y", 1], "yo", "eraYear");
v("y", ["yy", 2], 0, "eraYear");
v("y", ["yyy", 3], 0, "eraYear");
v("y", ["yyyy", 4], 0, "eraYear");
_("N", Vr);
_("NN", Vr);
_("NNN", Vr);
_("NNNN", el);
_("NNNNN", tl);
P(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, s) {
    var n = r._locale.erasParse(e, s, r._strict);
    n ? w(r).era = n : w(r).invalidEra = e;
  }
);
_("y", rt);
_("yy", rt);
_("yyy", rt);
_("yyyy", rt);
_("yo", rl);
P(["y", "yy", "yyy", "yyyy"], G);
P(["yo"], function(e, t, r, s) {
  var n;
  r._locale._eraYearOrdinalRegex && (n = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[G] = r._locale.eraYearOrdinalParse(e, n) : t[G] = parseInt(e, 10);
});
function Ho(e, t) {
  var r, s, n, a = this._eras || Ye("en")._eras;
  for (r = 0, s = a.length; r < s; ++r) {
    switch (typeof a[r].since) {
      case "string":
        n = h(a[r].since).startOf("day"), a[r].since = n.valueOf();
        break;
    }
    switch (typeof a[r].until) {
      case "undefined":
        a[r].until = 1 / 0;
        break;
      case "string":
        n = h(a[r].until).startOf("day").valueOf(), a[r].until = n.valueOf();
        break;
    }
  }
  return a;
}
function Go(e, t, r) {
  var s, n, a = this.eras(), o, l, u;
  for (e = e.toUpperCase(), s = 0, n = a.length; s < n; ++s)
    if (o = a[s].name.toUpperCase(), l = a[s].abbr.toUpperCase(), u = a[s].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (l === e)
            return a[s];
          break;
        case "NNNN":
          if (o === e)
            return a[s];
          break;
        case "NNNNN":
          if (u === e)
            return a[s];
          break;
      }
    else if ([o, l, u].indexOf(e) >= 0)
      return a[s];
}
function Xo(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? h(e.since).year() : h(e.since).year() + (t - e.offset) * r;
}
function zo() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].name;
  return "";
}
function Zo() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].narrow;
  return "";
}
function Bo() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].abbr;
  return "";
}
function qo() {
  var e, t, r, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = n[e].since <= n[e].until ? 1 : -1, s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return (this.year() - h(n[e].since).year()) * r + n[e].offset;
  return this.year();
}
function Jo(e) {
  return Y(this, "_erasNameRegex") || Hr.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Qo(e) {
  return Y(this, "_erasAbbrRegex") || Hr.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Ko(e) {
  return Y(this, "_erasNarrowRegex") || Hr.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Vr(e, t) {
  return t.erasAbbrRegex(e);
}
function el(e, t) {
  return t.erasNameRegex(e);
}
function tl(e, t) {
  return t.erasNarrowRegex(e);
}
function rl(e, t) {
  return t._eraYearOrdinalRegex || rt;
}
function Hr() {
  var e = [], t = [], r = [], s = [], n, a, o = this.eras();
  for (n = 0, a = o.length; n < a; ++n)
    t.push(K(o[n].name)), e.push(K(o[n].abbr)), r.push(K(o[n].narrow)), s.push(K(o[n].name)), s.push(K(o[n].abbr)), s.push(K(o[n].narrow));
  this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
v(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
v(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Jt(e, t) {
  v(0, [e, e.length], 0, t);
}
Jt("gggg", "weekYear");
Jt("ggggg", "weekYear");
Jt("GGGG", "isoWeekYear");
Jt("GGGGG", "isoWeekYear");
X("weekYear", "gg");
X("isoWeekYear", "GG");
z("weekYear", 1);
z("isoWeekYear", 1);
_("G", Xt);
_("g", Xt);
_("GG", W, ee);
_("gg", W, ee);
_("GGGG", Er, Rr);
_("gggg", Er, Rr);
_("GGGGG", Gt, Vt);
_("ggggg", Gt, Vt);
pt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, s) {
    t[s.substr(0, 2)] = k(e);
  }
);
pt(["gg", "GG"], function(e, t, r, s) {
  t[s] = h.parseTwoDigitYear(e);
});
function sl(e) {
  return ln.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function nl(e) {
  return ln.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function al() {
  return Ne(this.year(), 1, 4);
}
function il() {
  return Ne(this.isoWeekYear(), 1, 4);
}
function ol() {
  var e = this.localeData()._week;
  return Ne(this.year(), e.dow, e.doy);
}
function ll() {
  var e = this.localeData()._week;
  return Ne(this.weekYear(), e.dow, e.doy);
}
function ln(e, t, r, s, n) {
  var a;
  return e == null ? dt(this, s, n).year : (a = Ne(e, s, n), t > a && (t = a), ul.call(this, e, t, r, s, n));
}
function ul(e, t, r, s, n) {
  var a = As(e, t, r, s, n), o = ft(a.year, 0, a.dayOfYear);
  return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this;
}
v("Q", 0, "Qo", "quarter");
X("quarter", "Q");
z("quarter", 7);
_("Q", Ts);
P("Q", function(e, t) {
  t[Se] = (k(e) - 1) * 3;
});
function cl(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
v("D", ["DD", 2], "Do", "date");
X("date", "D");
z("date", 9);
_("D", W);
_("DD", W, ee);
_("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
P(["D", "DD"], he);
P("Do", function(e, t) {
  t[he] = k(e.match(W)[0]);
});
var un = tt("Date", !0);
v("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
X("dayOfYear", "DDD");
z("dayOfYear", 4);
_("DDD", Ht);
_("DDDD", Ps);
P(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = k(e);
});
function fl(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
v("m", ["mm", 2], 0, "minute");
X("minute", "m");
z("minute", 14);
_("m", W);
_("mm", W, ee);
P(["m", "mm"], oe);
var dl = tt("Minutes", !1);
v("s", ["ss", 2], 0, "second");
X("second", "s");
z("second", 15);
_("s", W);
_("ss", W, ee);
P(["s", "ss"], De);
var hl = tt("Seconds", !1);
v("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
v(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
v(0, ["SSS", 3], 0, "millisecond");
v(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
v(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
v(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
v(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
v(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
v(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
X("millisecond", "ms");
z("millisecond", 16);
_("S", Ht, Ts);
_("SS", Ht, ee);
_("SSS", Ht, Ps);
var Ee, cn;
for (Ee = "SSSS"; Ee.length <= 9; Ee += "S")
  _(Ee, rt);
function ml(e, t) {
  t[He] = k(("0." + e) * 1e3);
}
for (Ee = "S"; Ee.length <= 9; Ee += "S")
  P(Ee, ml);
cn = tt("Milliseconds", !1);
v("z", 0, 0, "zoneAbbr");
v("zz", 0, 0, "zoneName");
function _l() {
  return this._isUTC ? "UTC" : "";
}
function yl() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var f = gt.prototype;
f.add = oo;
f.calendar = _o;
f.clone = yo;
f.diff = Mo;
f.endOf = Eo;
f.format = xo;
f.from = Yo;
f.fromNow = Oo;
f.to = To;
f.toNow = Po;
f.get = ga;
f.invalidAt = jo;
f.isAfter = go;
f.isBefore = vo;
f.isBetween = po;
f.isSame = bo;
f.isSameOrAfter = wo;
f.isSameOrBefore = ko;
f.isValid = Ao;
f.lang = rn;
f.locale = tn;
f.localeData = sn;
f.max = Li;
f.min = Ui;
f.parsingFlags = Io;
f.set = va;
f.startOf = Ro;
f.subtract = lo;
f.toArray = $o;
f.toObject = Uo;
f.toDate = Wo;
f.toISOString = Do;
f.inspect = No;
typeof Symbol < "u" && Symbol.for != null && (f[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
f.toJSON = Lo;
f.toString = So;
f.unix = Co;
f.valueOf = Fo;
f.creationData = Vo;
f.eraName = zo;
f.eraNarrow = Zo;
f.eraAbbr = Bo;
f.eraYear = qo;
f.year = Ls;
f.isLeapYear = $a;
f.weekYear = sl;
f.isoWeekYear = nl;
f.quarter = f.quarters = cl;
f.month = $s;
f.daysInMonth = Fa;
f.week = f.weeks = Va;
f.isoWeek = f.isoWeeks = Ha;
f.weeksInYear = ol;
f.weeksInWeekYear = ll;
f.isoWeeksInYear = al;
f.isoWeeksInISOWeekYear = il;
f.date = un;
f.day = f.days = si;
f.weekday = ni;
f.isoWeekday = ai;
f.dayOfYear = fl;
f.hour = f.hours = di;
f.minute = f.minutes = dl;
f.second = f.seconds = hl;
f.millisecond = f.milliseconds = cn;
f.utcOffset = Zi;
f.utc = qi;
f.local = Ji;
f.parseZone = Qi;
f.hasAlignedHourOffset = Ki;
f.isDST = eo;
f.isLocal = ro;
f.isUtcOffset = so;
f.isUtc = Js;
f.isUTC = Js;
f.zoneAbbr = _l;
f.zoneName = yl;
f.dates = se(
  "dates accessor is deprecated. Use date instead.",
  un
);
f.months = se(
  "months accessor is deprecated. Use month instead",
  $s
);
f.years = se(
  "years accessor is deprecated. Use year instead",
  Ls
);
f.zone = se(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Bi
);
f.isDSTShifted = se(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  to
);
function gl(e) {
  return C(e * 1e3);
}
function vl() {
  return C.apply(null, arguments).parseZone();
}
function fn(e) {
  return e;
}
var O = Or.prototype;
O.calendar = sa;
O.longDateFormat = oa;
O.invalidDate = ua;
O.ordinal = da;
O.preparse = fn;
O.postformat = fn;
O.relativeTime = ma;
O.pastFuture = _a;
O.set = ta;
O.eras = Ho;
O.erasParse = Go;
O.erasConvertYear = Xo;
O.erasAbbrRegex = Qo;
O.erasNameRegex = Jo;
O.erasNarrowRegex = Ko;
O.months = Ta;
O.monthsShort = Pa;
O.monthsParse = Ea;
O.monthsRegex = Wa;
O.monthsShortRegex = Ca;
O.week = La;
O.firstDayOfYear = ja;
O.firstDayOfWeek = Ia;
O.weekdays = Qa;
O.weekdaysMin = ei;
O.weekdaysShort = Ka;
O.weekdaysParse = ri;
O.weekdaysRegex = ii;
O.weekdaysShortRegex = oi;
O.weekdaysMinRegex = li;
O.isPM = ci;
O.meridiem = hi;
function At(e, t, r, s) {
  var n = Ye(), a = _e().set(s, t);
  return n[r](a, e);
}
function dn(e, t, r) {
  if (xe(e) && (t = e, e = void 0), e = e || "", t != null)
    return At(e, t, r, "month");
  var s, n = [];
  for (s = 0; s < 12; s++)
    n[s] = At(e, s, r, "month");
  return n;
}
function Gr(e, t, r, s) {
  typeof e == "boolean" ? (xe(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, xe(t) && (r = t, t = void 0), t = t || "");
  var n = Ye(), a = e ? n._week.dow : 0, o, l = [];
  if (r != null)
    return At(t, (r + a) % 7, s, "day");
  for (o = 0; o < 7; o++)
    l[o] = At(t, (o + a) % 7, s, "day");
  return l;
}
function pl(e, t) {
  return dn(e, t, "months");
}
function bl(e, t) {
  return dn(e, t, "monthsShort");
}
function wl(e, t, r) {
  return Gr(e, t, r, "weekdays");
}
function kl(e, t, r) {
  return Gr(e, t, r, "weekdaysShort");
}
function Ml(e, t, r) {
  return Gr(e, t, r, "weekdaysMin");
}
Fe("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, r = k(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
h.lang = se(
  "moment.lang is deprecated. Use moment.locale instead.",
  Fe
);
h.langData = se(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Ye
);
var we = Math.abs;
function Sl() {
  var e = this._data;
  return this._milliseconds = we(this._milliseconds), this._days = we(this._days), this._months = we(this._months), e.milliseconds = we(e.milliseconds), e.seconds = we(e.seconds), e.minutes = we(e.minutes), e.hours = we(e.hours), e.months = we(e.months), e.years = we(e.years), this;
}
function hn(e, t, r, s) {
  var n = ce(t, r);
  return e._milliseconds += s * n._milliseconds, e._days += s * n._days, e._months += s * n._months, e._bubble();
}
function Dl(e, t) {
  return hn(this, e, t, 1);
}
function Nl(e, t) {
  return hn(this, e, t, -1);
}
function ps(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function xl() {
  var e = this._milliseconds, t = this._days, r = this._months, s = this._data, n, a, o, l, u;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += ps(Mr(r) + t) * 864e5, t = 0, r = 0), s.milliseconds = e % 1e3, n = re(e / 1e3), s.seconds = n % 60, a = re(n / 60), s.minutes = a % 60, o = re(a / 60), s.hours = o % 24, t += re(o / 24), u = re(mn(t)), r += u, t -= ps(Mr(u)), l = re(r / 12), r %= 12, s.days = t, s.months = r, s.years = l, this;
}
function mn(e) {
  return e * 4800 / 146097;
}
function Mr(e) {
  return e * 146097 / 4800;
}
function Yl(e) {
  if (!this.isValid())
    return NaN;
  var t, r, s = this._milliseconds;
  if (e = ne(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + s / 864e5, r = this._months + mn(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(Mr(this._months)), e) {
      case "week":
        return t / 7 + s / 6048e5;
      case "day":
        return t + s / 864e5;
      case "hour":
        return t * 24 + s / 36e5;
      case "minute":
        return t * 1440 + s / 6e4;
      case "second":
        return t * 86400 + s / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + s;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Ol() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + k(this._months / 12) * 31536e6 : NaN;
}
function Oe(e) {
  return function() {
    return this.as(e);
  };
}
var Tl = Oe("ms"), Pl = Oe("s"), Rl = Oe("m"), El = Oe("h"), Fl = Oe("d"), Cl = Oe("w"), Wl = Oe("M"), $l = Oe("Q"), Ul = Oe("y");
function Ll() {
  return ce(this);
}
function Al(e) {
  return e = ne(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Xe(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Il = Xe("milliseconds"), jl = Xe("seconds"), Vl = Xe("minutes"), Hl = Xe("hours"), Gl = Xe("days"), Xl = Xe("months"), zl = Xe("years");
function Zl() {
  return re(this.days() / 7);
}
var ke = Math.round, Je = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  w: null,
  M: 11
};
function Bl(e, t, r, s, n) {
  return n.relativeTime(t || 1, !!r, e, s);
}
function ql(e, t, r, s) {
  var n = ce(e).abs(), a = ke(n.as("s")), o = ke(n.as("m")), l = ke(n.as("h")), u = ke(n.as("d")), d = ke(n.as("M")), y = ke(n.as("w")), p = ke(n.as("y")), M = a <= r.ss && ["s", a] || a < r.s && ["ss", a] || o <= 1 && ["m"] || o < r.m && ["mm", o] || l <= 1 && ["h"] || l < r.h && ["hh", l] || u <= 1 && ["d"] || u < r.d && ["dd", u];
  return r.w != null && (M = M || y <= 1 && ["w"] || y < r.w && ["ww", y]), M = M || d <= 1 && ["M"] || d < r.M && ["MM", d] || p <= 1 && ["y"] || ["yy", p], M[2] = t, M[3] = +e > 0, M[4] = s, Bl.apply(null, M);
}
function Jl(e) {
  return e === void 0 ? ke : typeof e == "function" ? (ke = e, !0) : !1;
}
function Ql(e, t) {
  return Je[e] === void 0 ? !1 : t === void 0 ? Je[e] : (Je[e] = t, e === "s" && (Je.ss = t - 1), !0);
}
function Kl(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, s = Je, n, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (s = Object.assign({}, Je, t), t.s != null && t.ss == null && (s.ss = t.s - 1)), n = this.localeData(), a = ql(this, !r, s, n), r && (a = n.pastFuture(+this, a)), n.postformat(a);
}
var dr = Math.abs;
function Be(e) {
  return (e > 0) - (e < 0) || +e;
}
function Qt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = dr(this._milliseconds) / 1e3, t = dr(this._days), r = dr(this._months), s, n, a, o, l = this.asSeconds(), u, d, y, p;
  return l ? (s = re(e / 60), n = re(s / 60), e %= 60, s %= 60, a = re(r / 12), r %= 12, o = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = l < 0 ? "-" : "", d = Be(this._months) !== Be(l) ? "-" : "", y = Be(this._days) !== Be(l) ? "-" : "", p = Be(this._milliseconds) !== Be(l) ? "-" : "", u + "P" + (a ? d + a + "Y" : "") + (r ? d + r + "M" : "") + (t ? y + t + "D" : "") + (n || s || e ? "T" : "") + (n ? p + n + "H" : "") + (s ? p + s + "M" : "") + (e ? p + o + "S" : "")) : "P0D";
}
var x = qt.prototype;
x.isValid = Hi;
x.abs = Sl;
x.add = Dl;
x.subtract = Nl;
x.as = Yl;
x.asMilliseconds = Tl;
x.asSeconds = Pl;
x.asMinutes = Rl;
x.asHours = El;
x.asDays = Fl;
x.asWeeks = Cl;
x.asMonths = Wl;
x.asQuarters = $l;
x.asYears = Ul;
x.valueOf = Ol;
x._bubble = xl;
x.clone = Ll;
x.get = Al;
x.milliseconds = Il;
x.seconds = jl;
x.minutes = Vl;
x.hours = Hl;
x.days = Gl;
x.weeks = Zl;
x.months = Xl;
x.years = zl;
x.humanize = Kl;
x.toISOString = Qt;
x.toString = Qt;
x.toJSON = Qt;
x.locale = tn;
x.localeData = sn;
x.toIsoString = se(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Qt
);
x.lang = rn;
v("X", 0, 0, "unix");
v("x", 0, 0, "valueOf");
_("x", Xt);
_("X", ba);
P("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
P("x", function(e, t, r) {
  r._d = new Date(k(e));
});
//! moment.js
h.version = "2.29.4";
Kn(C);
h.fn = f;
h.min = Ai;
h.max = Ii;
h.now = ji;
h.utc = _e;
h.unix = gl;
h.months = pl;
h.isDate = yt;
h.locale = Fe;
h.invalid = It;
h.duration = ce;
h.isMoment = ue;
h.weekdays = wl;
h.parseZone = vl;
h.localeData = Ye;
h.isDuration = Et;
h.monthsShort = bl;
h.weekdaysMin = Ml;
h.defineLocale = $r;
h.updateLocale = gi;
h.locales = vi;
h.weekdaysShort = kl;
h.normalizeUnits = ne;
h.relativeTimeRounding = Jl;
h.relativeTimeThreshold = Ql;
h.calendarFormat = mo;
h.prototype = f;
h.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  DATE: "YYYY-MM-DD",
  TIME: "HH:mm",
  TIME_SECONDS: "HH:mm:ss",
  TIME_MS: "HH:mm:ss.SSS",
  WEEK: "GGGG-[W]WW",
  MONTH: "YYYY-MM"
};
const eu = (e, t) => {
  const r = e.diff(t, "day");
  return Math.round(r * 10 / 7) / 10;
}, tu = (e, t) => {
  const r = "month", s = e.diff(t, "day"), n = e.diff(t, r);
  let a = 0;
  if (s > 365) {
    const o = e.diff(t, "year"), l = n % 12, u = s - o * 365 - l * 30;
    a = n + Math.round(u * 10 / 30) / 10;
  } else {
    const o = s - n * 30;
    a = n + Math.round(o * 10 / 30) / 10;
  }
  return a;
}, Sr = (e, t, r) => r === "month" ? tu(e, t) : r === "week" ? eu(e, t) : 0;
var lt = "/Users/edpsce/Projects/GitHub/pchart/src/chart/PatientData.tsx";
const ru = ({
  patient: e,
  showlabels: t = !0,
  showlines: r = !0
}) => {
  const s = Ce(), [n, a] = Me([]), [o, l] = Me([]), [u, d] = Me("");
  return An(() => {
    let y = "";
    const p = [], M = [];
    e.measures.forEach((E, H) => {
      if (!E)
        return;
      const I = h(E.date), q = h(e.birthdate);
      let U = s.getDataset().getUnitX();
      U === "year" && (U = "month");
      const F = Sr(I, q, U), fe = E[s.getDataset().getDataType()];
      if (!fe)
        return;
      const ae = s.getDataset().getPercentileForValue(F, fe), de = s.transformX(F), st = s.transformY(fe) || 0;
      if (de == null || de <= 0 || de >= s.getMeasures().width)
        return;
      const We = s.getMeasures().left + de, Te = s.getMeasures().bottom - st;
      Number.isNaN(Te) || (t && M.push(/* @__PURE__ */ g("text", {
        name: `label-${H}`,
        className: "percentile-label",
        x: We,
        y: Te - 10,
        textAnchor: "middle",
        fill: e.color || "red",
        children: ae
      }, `label-${H}`, !1, {
        fileName: lt,
        lineNumber: 78,
        columnNumber: 11
      }, void 0)), p.push(/* @__PURE__ */ g("g", {
        id: `dot-${H}`,
        children: /* @__PURE__ */ g("circle", {
          className: "percentile-point",
          cx: We,
          cy: Te,
          r: 3,
          fill: e.color || "red"
        }, void 0, !1, {
          fileName: lt,
          lineNumber: 93,
          columnNumber: 11
        }, void 0)
      }, `dot-${H}`, !1, {
        fileName: lt,
        lineNumber: 92,
        columnNumber: 9
      }, void 0)), y += `${y.length ? "L" : "M"}${We} ${Te} `);
    }), d(y), l(p), a(M);
  }, [e, s, t]), /* @__PURE__ */ g("g", {
    name: "patient-data",
    className: "patient-data",
    children: [r ? /* @__PURE__ */ g("path", {
      className: "percentile-line",
      d: u,
      stroke: e.color || "red"
    }, void 0, !1, {
      fileName: lt,
      lineNumber: 113,
      columnNumber: 9
    }, void 0) : "", n, o]
  }, void 0, !0, {
    fileName: lt,
    lineNumber: 111,
    columnNumber: 5
  }, void 0);
};
var hr = "/Users/edpsce/Projects/GitHub/pchart/src/chart/Percentiles.tsx";
const su = () => {
  const e = Ce(), t = [];
  for (let r = 0; r < e.getDataset().percentiles.length; r += 1) {
    const s = e.getDataset().percentiles[r], n = e.getDataset().getPercentilePoints(r);
    let a = "", o = 0, l = 0;
    n.forEach((u, d) => {
      const y = e.transformX(u[0]) + e.getMeasures().left, p = e.getMeasures().bottom - e.transformY(u[1]);
      a += d === 0 ? "M" : "L", a += `${y} ${p} `, d === n.length - 1 && (o = y, l = p);
    }), t.push(/* @__PURE__ */ g("path", {
      className: `percentile-curve${r === 0 || r === e.getDataset().percentiles.length - 1 ? " dotted" : ""}`,
      name: `percentile-${s}`,
      d: a
    }, `percentile-curve-${s}`, !1, {
      fileName: hr,
      lineNumber: 41,
      columnNumber: 7
    }, void 0)), t.push(/* @__PURE__ */ g("text", {
      className: "percentile-label",
      x: o - 3,
      y: l - 3,
      textAnchor: "end",
      children: `${s}th`
    }, `percentile-label-${s}`, !1, {
      fileName: hr,
      lineNumber: 52,
      columnNumber: 7
    }, void 0));
  }
  return /* @__PURE__ */ g("g", {
    name: "percentiles",
    className: "percentiles",
    children: t
  }, void 0, !1, {
    fileName: hr,
    lineNumber: 64,
    columnNumber: 5
  }, void 0);
};
var Le = "/Users/edpsce/Projects/GitHub/pchart/src/chart/Tooltip.tsx";
const Ae = 180, Ie = 42, Pe = 3, Tt = 3, nu = ({
  x: e = 0,
  y: t = 0,
  visible: r = !1,
  title: s,
  value: n
}) => {
  let a = e - Ae - Tt, o = t - Ie - Tt;
  (a < 0 || o < 0) && (a = e + Tt, o = t + Tt);
  const l = () => {
    const u = `${Pe} 0`, d = `${Ae - Pe} 0`, y = `${Ae - 1} 1`, p = `${Ae} ${Pe}`, M = `${Ae} ${Ie - Pe}`, E = `${Ae - 1} ${Ie - 1}`, H = `${Ae - Pe} ${Ie}`, I = `${Pe} ${Ie}`, q = `1 ${Ie - 1}`, U = `0 ${Ie - Pe}`, F = `0 ${Pe}`, fe = "1 1";
    return `M${u} L ${d} C ${y}, ${y}, ${p} L ${M} C ${E}, ${E}, ${H} L ${I} C ${q}, ${q}, ${U} L ${F} C ${fe}, ${fe}, ${u}`;
  };
  return /* @__PURE__ */ g(Vn, {
    children: [/* @__PURE__ */ g("defs", {
      children: /* @__PURE__ */ g("clipPath", {
        id: "clip",
        children: /* @__PURE__ */ g("path", {
          d: l()
        }, void 0, !1, {
          fileName: Le,
          lineNumber: 62,
          columnNumber: 11
        }, void 0)
      }, void 0, !1, {
        fileName: Le,
        lineNumber: 61,
        columnNumber: 9
      }, void 0)
    }, void 0, !1, {
      fileName: Le,
      lineNumber: 60,
      columnNumber: 7
    }, void 0), /* @__PURE__ */ g("g", {
      className: "tooltip",
      transform: r ? `translate(${a},${o})` : "translate(-200,-60)",
      style: {
        transition: "all .3s ease-in-out"
      },
      visibility: r ? "visible" : "hidden",
      clipPath: "url(#clip)",
      children: [/* @__PURE__ */ g("path", {
        d: l()
      }, void 0, !1, {
        fileName: Le,
        lineNumber: 74,
        columnNumber: 9
      }, void 0), /* @__PURE__ */ g("text", {
        x: 5,
        y: 15,
        children: s
      }, void 0, !1, {
        fileName: Le,
        lineNumber: 77,
        columnNumber: 9
      }, void 0), /* @__PURE__ */ g("text", {
        x: 5,
        y: 35,
        children: n
      }, void 0, !1, {
        fileName: Le,
        lineNumber: 80,
        columnNumber: 9
      }, void 0)]
    }, void 0, !0, {
      fileName: Le,
      lineNumber: 68,
      columnNumber: 7
    }, void 0)]
  }, void 0, !0);
};
var mr = "/Users/edpsce/Projects/GitHub/pchart/src/chart/Touch.tsx";
const au = ({
  patient: e,
  showTooltip: t
}) => {
  const r = Ce(), s = r.getDataset(), n = s.getShortNames();
  let a = s.getUnitX();
  a === "year" && (a = "month");
  const o = h(e.birthdate), l = (y) => {
    const p = h(y.date);
    let M = "";
    const E = p.diff(o, "year");
    if (E >= 1) {
      const I = p.diff(o, "month") - 12 * E;
      M = `${E} ${n.year}, ${I} ${n.month}`;
    } else {
      const I = p.diff(o, "day"), q = p.diff(o, "month");
      if (I <= 91) {
        const U = Math.trunc(I / 7), F = I - U * 7;
        M = `${U} ${n.week}, ${F} ${n.day}`;
      } else
        M = `${q} ${n.month}`;
    }
    return `${h(y.date).format("DD.MM.YYYY")} (${M})`;
  }, u = (y) => {
    const p = h(y.date), M = Sr(p, o, a), E = y[s.getDataType()] || 0, H = s.getPercentileForValue(M, E);
    return `${s.titleY}: ${y[s.dataType]} (${H}%)`;
  }, d = [];
  return e.measures.forEach((y, p) => {
    if (!y)
      return;
    const M = h(y.date), E = Sr(M, o, a), H = y[r.getDataset().getDataType()], I = r.transformX(E);
    if (I == null || I < 0 || I > r.getMeasures().width)
      return;
    const q = r.getMeasures().left + I, U = r.getMeasures().bottom - r.transformY(H);
    Number.isNaN(U) || d.push(/* @__PURE__ */ g("g", {
      id: `touch-${p}`,
      children: /* @__PURE__ */ g("circle", {
        cx: q,
        cy: U,
        r: 6,
        stroke: "none",
        fill: "rgba(192,192,192,0.01)",
        onMouseEnter: () => {
          t(q, U, l(y), u(y));
        }
      }, void 0, !1, {
        fileName: mr,
        lineNumber: 101,
        columnNumber: 9
      }, void 0)
    }, `touch-${p}`, !1, {
      fileName: mr,
      lineNumber: 100,
      columnNumber: 7
    }, void 0));
  }), /* @__PURE__ */ g("g", {
    name: "touch-areas",
    children: d
  }, void 0, !1, {
    fileName: mr,
    lineNumber: 114,
    columnNumber: 10
  }, void 0);
};
var je = "/Users/edpsce/Projects/GitHub/pchart/src/chart/XAxis.tsx";
const iu = 5, ou = 10, lu = () => {
  const e = Ce(), t = _t(), r = e.getDataset().getUnitX() === "month" || e.getDataset().getUnitX() === "year" ? 6 : e.getDataset().getUnitX() === "week" ? 1 : 5, s = e.getDataset().getUnitX() === "month" || e.getDataset().getUnitX() === "year" ? 2 : 1, n = [], a = [];
  for (let l = 0; l < e.getMeasures().countX; l += 1) {
    const u = e.getMeasures().keys[l], d = e.getDataset().getUnitX() === "year" ? u % r === 0 : l % r === 0, y = e.getMeasures().left + l * e.getMeasures().stepX, p = e.getSize().height - e.getMargins().bottom, M = p + (d ? ou : iu);
    n.push(/* @__PURE__ */ g("line", {
      className: d ? "longtick" : "tick",
      x1: y,
      y1: p,
      x2: y,
      y2: M,
      stroke: t.axisColor
    }, `tick-${l}`, !1, {
      fileName: je,
      lineNumber: 57,
      columnNumber: 7
    }, void 0)), (e.getDataset().getUnitX() === "year" ? u % 12 === 0 : l % (r * s) === 0) && a.push(/* @__PURE__ */ g("text", {
      name: "valuelabel",
      x: y,
      y: M + 2 + 10,
      textAnchor: "middle",
      children: e.getDataset().getUnitX() === "year" ? u / 12 : u
    }, `valuelabel-${l}`, !1, {
      fileName: je,
      lineNumber: 73,
      columnNumber: 9
    }, void 0));
  }
  const o = e.getDataset().getTitleX();
  return /* @__PURE__ */ g("g", {
    name: "xaxis",
    className: "axis",
    children: [/* @__PURE__ */ g("line", {
      x1: e.getMeasures().left,
      y1: e.getMeasures().bottom,
      x2: e.getMeasures().right,
      y2: e.getMeasures().bottom,
      stroke: t.axisColor
    }, void 0, !1, {
      fileName: je,
      lineNumber: 89,
      columnNumber: 7
    }, void 0), /* @__PURE__ */ g("g", {
      children: n
    }, void 0, !1, {
      fileName: je,
      lineNumber: 96,
      columnNumber: 7
    }, void 0), /* @__PURE__ */ g("g", {
      children: a
    }, void 0, !1, {
      fileName: je,
      lineNumber: 97,
      columnNumber: 7
    }, void 0), /* @__PURE__ */ g("text", {
      name: "axislabel",
      x: (e.getMargins().left + e.getMeasures().right) / 2,
      y: e.getSize().height - 5,
      textAnchor: "middle",
      children: o
    }, void 0, !1, {
      fileName: je,
      lineNumber: 98,
      columnNumber: 7
    }, void 0)]
  }, void 0, !0, {
    fileName: je,
    lineNumber: 88,
    columnNumber: 5
  }, void 0);
};
var Ve = "/Users/edpsce/Projects/GitHub/pchart/src/chart/YAxis.tsx";
const uu = 5, cu = 10, fu = () => {
  const e = Ce(), t = _t(), r = 2, s = e.getMeasures().maxY - e.getMeasures().minY, n = e.getMeasures().height / s, a = [], o = [];
  for (let l = 0; l <= s; l += 1) {
    const u = l % e.getStep() === 0, d = e.getMeasures().left, y = d - (u ? cu : uu), p = e.getMeasures().bottom - l * n;
    a.push(/* @__PURE__ */ g("line", {
      className: u ? "longtick" : "tick",
      x1: d,
      y1: p,
      x2: y,
      y2: p,
      stroke: t.axisColor
    }, `tick-${l}`, !1, {
      fileName: Ve,
      lineNumber: 41,
      columnNumber: 7
    }, void 0)), l % (e.getStep() * r) === 0 && o.push(/* @__PURE__ */ g("text", {
      name: "valuelabel",
      x: y - 3,
      y: p,
      textAnchor: "end",
      alignmentBaseline: "middle",
      children: e.getMeasures().minY + l
    }, `valuelabel-${l}`, !1, {
      fileName: Ve,
      lineNumber: 54,
      columnNumber: 9
    }, void 0));
  }
  return /* @__PURE__ */ g("g", {
    name: "yaxis",
    className: "axis",
    children: [/* @__PURE__ */ g("line", {
      x1: e.getMeasures().left,
      y1: e.getMeasures().bottom,
      x2: e.getMeasures().left,
      y2: e.getMeasures().top,
      stroke: t.axisColor
    }, void 0, !1, {
      fileName: Ve,
      lineNumber: 70,
      columnNumber: 7
    }, void 0), /* @__PURE__ */ g("g", {
      children: a
    }, void 0, !1, {
      fileName: Ve,
      lineNumber: 77,
      columnNumber: 7
    }, void 0), /* @__PURE__ */ g("g", {
      children: o
    }, void 0, !1, {
      fileName: Ve,
      lineNumber: 78,
      columnNumber: 7
    }, void 0), /* @__PURE__ */ g("text", {
      name: "axislabel",
      x: 20,
      y: (e.getMargins().top + e.getMeasures().bottom) / 2,
      textAnchor: "middle",
      transform: `rotate(-90 20 ${(e.getMargins().top + e.getMeasures().bottom) / 2})`,
      children: e.getDataset().getTitleY()
    }, void 0, !1, {
      fileName: Ve,
      lineNumber: 79,
      columnNumber: 7
    }, void 0)]
  }, void 0, !0, {
    fileName: Ve,
    lineNumber: 69,
    columnNumber: 5
  }, void 0);
};
class bs {
  constructor(t, r, s) {
    N(this, "len");
    N(this, "minValue");
    N(this, "maxValue");
    this.len = t, this.minValue = r, this.maxValue = s;
  }
  transform(t) {
    return t < this.minValue ? 0 : t > this.maxValue ? this.len : this.len * (t - this.minValue) / (this.maxValue - this.minValue);
  }
}
class du {
  constructor(t, r) {
    N(this, "dataset");
    N(this, "margins");
    N(this, "step");
    N(this, "onUpdate");
    N(this, "size");
    N(this, "left", 0);
    N(this, "right", 0);
    N(this, "top", 0);
    N(this, "bottom", 0);
    N(this, "width", 0);
    N(this, "height", 0);
    N(this, "keys", []);
    N(this, "countX", 0);
    N(this, "stepX", 0);
    N(this, "minX", 0);
    N(this, "maxX", 0);
    N(this, "minY", 0);
    N(this, "maxY", 0);
    N(this, "transformationX");
    N(this, "transformationY");
    this.dataset = t.dataset, this.margins = t.margins, this.step = t.step, this.onUpdate = r, this.size = { width: 800, height: 800 }, this._init();
  }
  setSize(t) {
    this.size = t, this._init();
  }
  setDataset(t) {
    this.dataset = t, this._init();
  }
  _init() {
    this.top = this.margins.top, this.bottom = this.size.height - this.margins.bottom, this.left = this.margins.left, this.right = this.size.width - this.margins.right, this.width = this.size.width - this.margins.left - this.margins.right, this.height = this.size.height - this.margins.top - this.margins.bottom;
    const { data: t } = this.dataset;
    this.keys = Object.keys(t).map((u) => Number(u)), this.countX = this.keys.length, this.stepX = this.width / (this.countX - 1), [this.minX] = this.keys, this.maxX = this.keys[this.keys.length - 1];
    const r = t[this.keys[0]], s = t[this.keys[this.keys.length - 1]], n = Object.keys(r).map((u) => Number(u)), a = r[n[0]], o = s[n[n.length - 1]], l = 0.05;
    this.minY = Math.floor((1 - l) * a / this.step) * this.step, this.maxY = Math.ceil((1 + l) * o / this.step) * this.step, this.transformationX = new bs(this.width, this.minX, this.maxX), this.transformationY = new bs(
      this.height,
      this.minY,
      this.maxY
    ), this.onUpdate && this.onUpdate();
  }
  getDataset() {
    return this.dataset;
  }
  getSize() {
    return this.size;
  }
  getMargins() {
    return this.margins;
  }
  getStep() {
    return this.step;
  }
  getMeasures() {
    return {
      top: this.top,
      bottom: this.bottom,
      left: this.left,
      right: this.right,
      width: this.width,
      height: this.height,
      keys: this.keys,
      countX: this.countX,
      stepX: this.stepX,
      minX: this.minX,
      maxX: this.maxX,
      minY: this.minY,
      maxY: this.maxY
    };
  }
  transformX(t) {
    return this.transformationX ? this.transformationX.transform(t) : 0;
  }
  transformY(t) {
    return this.transformationY ? this.transformationY.transform(t) : 0;
  }
}
var Q = "/Users/edpsce/Projects/GitHub/pchart/src/PChart.tsx";
const _r = {
  backgroundColor: "transparent",
  backdropFill: "#FFFDE7",
  axisColor: "#707070",
  gridColor: "#FFD54F",
  areaColor: "rgba(127,127,127, .3)"
}, gu = ({
  width: e = 800,
  height: t = 800,
  dataset: r,
  patients: s,
  theme: n = _r,
  showtitle: a = !0,
  showlabels: o = !0,
  showlines: l = !0
}) => {
  const [u, d] = Me(0), [y, p] = Me(0), [M, E] = Me(!1), [H, I] = Me(""), [q, U] = Me(""), [F, fe] = Me(), ae = at(() => {
    const J = new du({
      dataset: r,
      margins: {
        left: 60,
        right: 10,
        top: a ? 50 : 10,
        bottom: 40
      },
      step: 2
    }, () => {
    });
    let ge = e, ve = t;
    return Number.isNaN(ge) && (ge = 800, console.error("Error: width property must be a number. Using the default value")), Number.isNaN(ve) && (ve = 800, console.error("Error: height property must be a number. Using the default value")), J.setSize({
      width: ge,
      height: ve
    }), J;
  }, [r, e, t, a]), de = at(() => n ? {
    ..._r,
    ...n
  } : _r, [n]), st = at(() => a && ae ? /* @__PURE__ */ g("text", {
    name: "title",
    className: "title",
    x: ae.getSize().width / 2,
    y: 15,
    textAnchor: "middle",
    alignmentBaseline: "text-before-edge",
    children: r.title
  }, void 0, !1, {
    fileName: Q,
    lineNumber: 115,
    columnNumber: 9
  }, void 0) : null, [r, ae, a]), We = at(() => {
    let J;
    return Array.isArray(s) ? J = s : J = [s], J.map((ge, ve) => /* @__PURE__ */ g(ru, {
      patient: ge,
      showlabels: o,
      showlines: l
    }, `patientdata-${ve}`, !1, {
      fileName: Q,
      lineNumber: 139,
      columnNumber: 7
    }, void 0));
  }, [s, o, l]), Te = at(() => {
    let J;
    return Array.isArray(s) ? J = s : J = [s], J.map((ge, ve) => /* @__PURE__ */ g(au, {
      patient: ge,
      showTooltip: (bt, ie, pe, $e) => {
        d(bt), p(ie), E(!0), I(pe), U($e), clearTimeout(F), fe(setTimeout(() => {
          E(!1);
        }, 5e3));
      }
    }, `toucharea-${ve}`, !1, {
      fileName: Q,
      lineNumber: 156,
      columnNumber: 7
    }, void 0));
  }, [s, F]);
  return ae ? /* @__PURE__ */ g(Gn, {
    value: ae,
    children: /* @__PURE__ */ g(Zn, {
      value: de,
      children: /* @__PURE__ */ g("svg", {
        width: ae.getSize().width,
        height: ae.getSize().height,
        style: {
          backgroundColor: de.backgroundColor
        },
        children: [st, /* @__PURE__ */ g(Jn, {}, void 0, !1, {
          fileName: Q,
          lineNumber: 185,
          columnNumber: 11
        }, void 0), /* @__PURE__ */ g(lu, {}, void 0, !1, {
          fileName: Q,
          lineNumber: 186,
          columnNumber: 11
        }, void 0), /* @__PURE__ */ g(fu, {}, void 0, !1, {
          fileName: Q,
          lineNumber: 187,
          columnNumber: 11
        }, void 0), /* @__PURE__ */ g(Qn, {}, void 0, !1, {
          fileName: Q,
          lineNumber: 188,
          columnNumber: 11
        }, void 0), /* @__PURE__ */ g(Bn, {}, void 0, !1, {
          fileName: Q,
          lineNumber: 189,
          columnNumber: 11
        }, void 0), /* @__PURE__ */ g(su, {}, void 0, !1, {
          fileName: Q,
          lineNumber: 190,
          columnNumber: 11
        }, void 0), We, /* @__PURE__ */ g(nu, {
          x: u,
          y,
          visible: M,
          title: H,
          value: q
        }, void 0, !1, {
          fileName: Q,
          lineNumber: 192,
          columnNumber: 11
        }, void 0), Te]
      }, void 0, !0, {
        fileName: Q,
        lineNumber: 179,
        columnNumber: 9
      }, void 0)
    }, void 0, !1, {
      fileName: Q,
      lineNumber: 178,
      columnNumber: 7
    }, void 0)
  }, void 0, !1, {
    fileName: Q,
    lineNumber: 177,
    columnNumber: 5
  }, void 0) : null;
}, Pt = {
  1: -2.3263,
  2: -2.0537,
  3: -1.8808,
  4: -1.7507,
  5: -1.6449,
  6: -1.5548,
  7: -1.4758,
  8: -1.4051,
  9: -1.3408,
  10: -1.2816,
  11: -1.2265,
  12: -1.175,
  13: -1.1264,
  14: -1.0803,
  15: -1.0364,
  16: -0.9945,
  17: -0.9542,
  18: -0.9154,
  19: -0.8779,
  20: -0.8416,
  21: -0.8064,
  22: -0.7722,
  23: -0.7388,
  24: -0.7063,
  25: -0.6745,
  26: -0.6433,
  27: -0.6128,
  28: -0.5828,
  29: -0.5534,
  30: -0.5244,
  31: -0.4959,
  32: -0.4677,
  33: -0.4399,
  34: -0.4125,
  35: -0.3853,
  36: -0.3585,
  37: -0.3319,
  38: -0.3055,
  39: -0.2793,
  40: -0.2533,
  41: -0.2275,
  42: -0.2019,
  43: -0.1764,
  44: -0.151,
  45: -0.1257,
  46: -0.1004,
  47: -0.0753,
  48: -0.0502,
  49: -0.0251,
  50: 0,
  51: 0.0251,
  52: 0.0502,
  53: 0.0753,
  54: 0.1004,
  55: 0.1257,
  56: 0.151,
  57: 0.1764,
  58: 0.2019,
  59: 0.2275,
  60: 0.2533,
  61: 0.2793,
  62: 0.3055,
  63: 0.3319,
  64: 0.3585,
  65: 0.3853,
  66: 0.4125,
  67: 0.4399,
  68: 0.4677,
  69: 0.4959,
  70: 0.5244,
  71: 0.5534,
  72: 0.5828,
  73: 0.6128,
  74: 0.6433,
  75: 0.6745,
  76: 0.7063,
  77: 0.7388,
  78: 0.7722,
  79: 0.8064,
  80: 0.8416,
  81: 0.8779,
  82: 0.9154,
  83: 0.9542,
  84: 0.9945,
  85: 1.0364,
  86: 1.0803,
  87: 1.1264,
  88: 1.175,
  89: 1.2265,
  90: 1.2816,
  91: 1.3408,
  92: 1.4051,
  93: 1.4758,
  94: 1.5548,
  95: 1.6449,
  96: 1.7507,
  97: 1.8808,
  98: 2.0537,
  99: 2.3263
}, hu = {
  year: "y",
  month: "m",
  week: "w",
  day: "d"
}, mu = {
  year: "a",
  month: "m",
  week: "s",
  day: "gg"
}, yr = {
  en: hu,
  it: mu
};
class vu {
  constructor(t, r) {
    N(this, "title");
    N(this, "titleX");
    N(this, "unitX");
    N(this, "titleY");
    N(this, "unitY");
    N(this, "dataType");
    N(this, "lmsdata");
    N(this, "percentiles");
    N(this, "shortNames");
    N(this, "data", {});
    this.title = t.title, this.titleX = t.titleX, this.unitX = t.unitX, this.titleY = t.titleY, this.unitY = t.unitY, this.dataType = t.dataType, this.lmsdata = t.data, this.percentiles = r, this.shortNames = yr.en, this._buildData();
  }
  setLocale(t) {
    yr[t] && (this.shortNames = yr[t]);
  }
  getUnitX() {
    return this.unitX;
  }
  getUnitY() {
    return this.unitY;
  }
  getTitleY() {
    return this.titleY;
  }
  getTitleX() {
    return this.titleX;
  }
  getDataType() {
    return this.dataType;
  }
  _buildData() {
    const t = {};
    this.lmsdata.forEach((r) => {
      const s = r[0], n = r[1], a = r[2], o = r[3];
      t[s] || (t[s] = {}), this.percentiles.forEach((l) => {
        const u = Pt[l];
        if (u === void 0)
          return;
        const d = a * (1 + n * o * u) ** (1 / n);
        t[s][l] = d;
      });
    }), this.data = t;
  }
  getPercentilePoints(t) {
    const r = this.percentiles[t], s = [], n = Pt[r];
    return n === void 0 ? [] : (this.lmsdata.forEach((a) => {
      const o = a[0], l = a[1], u = a[2], d = a[3], y = u * (1 + l * d * n) ** (1 / l);
      s.push([o, y]);
    }), s);
  }
  getPercentileForValue(t, r) {
    const s = Math.trunc(t), n = s + 1, a = this._getPercentileForValue(s, r), o = this._getPercentileForValue(n, r);
    return Math.round(a + (t - s) * (o - a));
  }
  _getPercentileForValue(t, r) {
    let s;
    if (this.lmsdata.forEach((d) => {
      d[0] <= t && (s = d);
    }), !s)
      return 0;
    const n = s[1], a = s[2], o = s[3], l = ((r / a) ** n - 1) / (n * o);
    let u = 0;
    return Object.keys(Pt).forEach((d) => {
      Pt[Number(d)] < l && (u = Number(d));
    }), u;
  }
  getShortNames() {
    return this.shortNames;
  }
}
export {
  vu as Dataset,
  gu as PChart
};
