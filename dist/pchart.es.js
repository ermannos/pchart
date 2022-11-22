(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("svg{font-family:Lucida Grande,Verdana,Arial,Helvetica,sans-serif;font-weight:lighter}.title{font-size:16px}.backdrop{z-index:1}.axis{stroke-width:.6}.axis text[name=valuelabel]{font-size:9px;stroke:none}.axis text[name=axislabel]{font-size:12px;stroke:none}.axis .tick{stroke-width:.3}.axis .longtick{stroke-width:.6}.grid{z-index:2}.grid .refline{stroke-width:.3}.grid .longrefline{stroke-width:.6}.areas{z-index:3}.areas .area-curve{stroke:none}.percentiles{z-index:10}.percentiles .percentile-curve{fill:none;stroke:#000;stroke-width:1}.percentiles .percentile-curve.dotted{stroke-dasharray:5}.percentiles .percentile-label{font-weight:lighter;font-size:9px;stroke:none}.patient-data .percentile-label{font-weight:lighter;font-size:12px;stroke:none}.patient-data .percentile-point{stroke:none}.patient-data .percentile-line{fill:none}.tooltip path{fill:#707070;stroke:#707070}.tooltip text{font-size:12px;stroke:none;fill:#fff}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var Nn = Object.defineProperty;
var Cn = (e, t, r) => t in e ? Nn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Y = (e, t, r) => (Cn(e, typeof t != "symbol" ? t + "" : t, r), r);
import Qe, { useState as Me, useEffect as Fn, useMemo as st } from "react";
var Lt = { exports: {} }, nt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var is;
function Wn() {
  if (is)
    return nt;
  is = 1;
  var e = Qe, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(l, u, d) {
    var m, p = {}, k = null, P = null;
    d !== void 0 && (k = "" + d), u.key !== void 0 && (k = "" + u.key), u.ref !== void 0 && (P = u.ref);
    for (m in u)
      s.call(u, m) && !a.hasOwnProperty(m) && (p[m] = u[m]);
    if (l && l.defaultProps)
      for (m in u = l.defaultProps, u)
        p[m] === void 0 && (p[m] = u[m]);
    return { $$typeof: t, type: l, key: k, ref: P, props: p, _owner: n.current };
  }
  return nt.Fragment = r, nt.jsx = o, nt.jsxs = o, nt;
}
var at = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var os;
function Ln() {
  return os || (os = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Qe, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), H = Symbol.iterator, I = "@@iterator";
    function q(i) {
      if (i === null || typeof i != "object")
        return null;
      var c = H && i[H] || i[I];
      return typeof c == "function" ? c : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(i) {
      {
        for (var c = arguments.length, _ = new Array(c > 1 ? c - 1 : 0), w = 1; w < c; w++)
          _[w - 1] = arguments[w];
        ce("error", i, _);
      }
    }
    function ce(i, c, _) {
      {
        var w = $.ReactDebugCurrentFrame, R = w.getStackAddendum();
        R !== "" && (c += "%s", _ = _.concat([R]));
        var N = _.map(function(b) {
          return String(b);
        });
        N.unshift("Warning: " + c), Function.prototype.apply.call(console[i], console, N);
      }
    }
    var ne = !1, fe = !1, tt = !1, Fe = !1, Te = !1, J;
    J = Symbol.for("react.module.reference");
    function ye(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === s || i === a || Te || i === n || i === d || i === m || Fe || i === P || ne || fe || tt || typeof i == "object" && i !== null && (i.$$typeof === k || i.$$typeof === p || i.$$typeof === o || i.$$typeof === l || i.$$typeof === u || i.$$typeof === J || i.getModuleId !== void 0));
    }
    function ge(i, c, _) {
      var w = i.displayName;
      if (w)
        return w;
      var R = c.displayName || c.name || "";
      return R !== "" ? _ + "(" + R + ")" : _;
    }
    function pt(i) {
      return i.displayName || "Context";
    }
    function ae(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
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
        case m:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case l:
            var c = i;
            return pt(c) + ".Consumer";
          case o:
            var _ = i;
            return pt(_._context) + ".Provider";
          case u:
            return ge(i, i.render, "ForwardRef");
          case p:
            var w = i.displayName || null;
            return w !== null ? w : ae(i.type) || "Memo";
          case k: {
            var R = i, N = R._payload, b = R._init;
            try {
              return ae(b(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var pe = Object.assign, We = 0, $r, Ar, Ur, Ir, jr, Vr, Hr;
    function Gr() {
    }
    Gr.__reactDisabledLog = !0;
    function ln() {
      {
        if (We === 0) {
          $r = console.log, Ar = console.info, Ur = console.warn, Ir = console.error, jr = console.group, Vr = console.groupCollapsed, Hr = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: Gr,
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
        We++;
      }
    }
    function un() {
      {
        if (We--, We === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: pe({}, i, {
              value: $r
            }),
            info: pe({}, i, {
              value: Ar
            }),
            warn: pe({}, i, {
              value: Ur
            }),
            error: pe({}, i, {
              value: Ir
            }),
            group: pe({}, i, {
              value: jr
            }),
            groupCollapsed: pe({}, i, {
              value: Vr
            }),
            groupEnd: pe({}, i, {
              value: Hr
            })
          });
        }
        We < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var qt = $.ReactCurrentDispatcher, Jt;
    function vt(i, c, _) {
      {
        if (Jt === void 0)
          try {
            throw Error();
          } catch (R) {
            var w = R.stack.trim().match(/\n( *(at )?)/);
            Jt = w && w[1] || "";
          }
        return `
` + Jt + i;
      }
    }
    var Qt = !1, wt;
    {
      var cn = typeof WeakMap == "function" ? WeakMap : Map;
      wt = new cn();
    }
    function Xr(i, c) {
      if (!i || Qt)
        return "";
      {
        var _ = wt.get(i);
        if (_ !== void 0)
          return _;
      }
      var w;
      Qt = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = qt.current, qt.current = null, ln();
      try {
        if (c) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (ve) {
              w = ve;
            }
            Reflect.construct(i, [], b);
          } else {
            try {
              b.call();
            } catch (ve) {
              w = ve;
            }
            i.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ve) {
            w = ve;
          }
          i();
        }
      } catch (ve) {
        if (ve && w && typeof ve.stack == "string") {
          for (var D = ve.stack.split(`
`), Z = w.stack.split(`
`), A = D.length - 1, j = Z.length - 1; A >= 1 && j >= 0 && D[A] !== Z[j]; )
            j--;
          for (; A >= 1 && j >= 0; A--, j--)
            if (D[A] !== Z[j]) {
              if (A !== 1 || j !== 1)
                do
                  if (A--, j--, j < 0 || D[A] !== Z[j]) {
                    var ee = `
` + D[A].replace(" at new ", " at ");
                    return i.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", i.displayName)), typeof i == "function" && wt.set(i, ee), ee;
                  }
                while (A >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        Qt = !1, qt.current = N, un(), Error.prepareStackTrace = R;
      }
      var Ge = i ? i.displayName || i.name : "", as = Ge ? vt(Ge) : "";
      return typeof i == "function" && wt.set(i, as), as;
    }
    function fn(i, c, _) {
      return Xr(i, !1);
    }
    function dn(i) {
      var c = i.prototype;
      return !!(c && c.isReactComponent);
    }
    function kt(i, c, _) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Xr(i, dn(i));
      if (typeof i == "string")
        return vt(i);
      switch (i) {
        case d:
          return vt("Suspense");
        case m:
          return vt("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return fn(i.render);
          case p:
            return kt(i.type, c, _);
          case k: {
            var w = i, R = w._payload, N = w._init;
            try {
              return kt(N(R), c, _);
            } catch {
            }
          }
        }
      return "";
    }
    var Mt = Object.prototype.hasOwnProperty, zr = {}, Zr = $.ReactDebugCurrentFrame;
    function St(i) {
      if (i) {
        var c = i._owner, _ = kt(i.type, i._source, c ? c.type : null);
        Zr.setExtraStackFrame(_);
      } else
        Zr.setExtraStackFrame(null);
    }
    function hn(i, c, _, w, R) {
      {
        var N = Function.call.bind(Mt);
        for (var b in i)
          if (N(i, b)) {
            var D = void 0;
            try {
              if (typeof i[b] != "function") {
                var Z = Error((w || "React class") + ": " + _ + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Z.name = "Invariant Violation", Z;
              }
              D = i[b](c, b, w, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              D = A;
            }
            D && !(D instanceof Error) && (St(R), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", _, b, typeof D), St(null)), D instanceof Error && !(D.message in zr) && (zr[D.message] = !0, St(R), C("Failed %s type: %s", _, D.message), St(null));
          }
      }
    }
    var mn = Array.isArray;
    function Kt(i) {
      return mn(i);
    }
    function _n(i) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, _ = c && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return _;
      }
    }
    function yn(i) {
      try {
        return Br(i), !1;
      } catch {
        return !0;
      }
    }
    function Br(i) {
      return "" + i;
    }
    function qr(i) {
      if (yn(i))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _n(i)), Br(i);
    }
    var rt = $.ReactCurrentOwner, gn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Jr, Qr, er;
    er = {};
    function pn(i) {
      if (Mt.call(i, "ref")) {
        var c = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function vn(i) {
      if (Mt.call(i, "key")) {
        var c = Object.getOwnPropertyDescriptor(i, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function wn(i, c) {
      if (typeof i.ref == "string" && rt.current && c && rt.current.stateNode !== c) {
        var _ = ae(rt.current.type);
        er[_] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ae(rt.current.type), i.ref), er[_] = !0);
      }
    }
    function kn(i, c) {
      {
        var _ = function() {
          Jr || (Jr = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        _.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function Mn(i, c) {
      {
        var _ = function() {
          Qr || (Qr = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        _.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var Sn = function(i, c, _, w, R, N, b) {
      var D = {
        $$typeof: t,
        type: i,
        key: c,
        ref: _,
        props: b,
        _owner: N
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function Dn(i, c, _, w, R) {
      {
        var N, b = {}, D = null, Z = null;
        _ !== void 0 && (qr(_), D = "" + _), vn(c) && (qr(c.key), D = "" + c.key), pn(c) && (Z = c.ref, wn(c, R));
        for (N in c)
          Mt.call(c, N) && !gn.hasOwnProperty(N) && (b[N] = c[N]);
        if (i && i.defaultProps) {
          var A = i.defaultProps;
          for (N in A)
            b[N] === void 0 && (b[N] = A[N]);
        }
        if (D || Z) {
          var j = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          D && kn(b, j), Z && Mn(b, j);
        }
        return Sn(i, D, Z, R, w, rt.current, b);
      }
    }
    var tr = $.ReactCurrentOwner, Kr = $.ReactDebugCurrentFrame;
    function He(i) {
      if (i) {
        var c = i._owner, _ = kt(i.type, i._source, c ? c.type : null);
        Kr.setExtraStackFrame(_);
      } else
        Kr.setExtraStackFrame(null);
    }
    var rr;
    rr = !1;
    function sr(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function es() {
      {
        if (tr.current) {
          var i = ae(tr.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function bn(i) {
      {
        if (i !== void 0) {
          var c = i.fileName.replace(/^.*[\\\/]/, ""), _ = i.lineNumber;
          return `

Check your code at ` + c + ":" + _ + ".";
        }
        return "";
      }
    }
    var ts = {};
    function Yn(i) {
      {
        var c = es();
        if (!c) {
          var _ = typeof i == "string" ? i : i.displayName || i.name;
          _ && (c = `

Check the top-level render call using <` + _ + ">.");
        }
        return c;
      }
    }
    function rs(i, c) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var _ = Yn(c);
        if (ts[_])
          return;
        ts[_] = !0;
        var w = "";
        i && i._owner && i._owner !== tr.current && (w = " It was passed a child from " + ae(i._owner.type) + "."), He(i), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, w), He(null);
      }
    }
    function ss(i, c) {
      {
        if (typeof i != "object")
          return;
        if (Kt(i))
          for (var _ = 0; _ < i.length; _++) {
            var w = i[_];
            sr(w) && rs(w, c);
          }
        else if (sr(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var R = q(i);
          if (typeof R == "function" && R !== i.entries)
            for (var N = R.call(i), b; !(b = N.next()).done; )
              sr(b.value) && rs(b.value, c);
        }
      }
    }
    function xn(i) {
      {
        var c = i.type;
        if (c == null || typeof c == "string")
          return;
        var _;
        if (typeof c == "function")
          _ = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === u || c.$$typeof === p))
          _ = c.propTypes;
        else
          return;
        if (_) {
          var w = ae(c);
          hn(_, i.props, "prop", w, i);
        } else if (c.PropTypes !== void 0 && !rr) {
          rr = !0;
          var R = ae(c);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function On(i) {
      {
        for (var c = Object.keys(i.props), _ = 0; _ < c.length; _++) {
          var w = c[_];
          if (w !== "children" && w !== "key") {
            He(i), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), He(null);
            break;
          }
        }
        i.ref !== null && (He(i), C("Invalid attribute `ref` supplied to `React.Fragment`."), He(null));
      }
    }
    function ns(i, c, _, w, R, N) {
      {
        var b = ye(i);
        if (!b) {
          var D = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Z = bn(R);
          Z ? D += Z : D += es();
          var A;
          i === null ? A = "null" : Kt(i) ? A = "array" : i !== void 0 && i.$$typeof === t ? (A = "<" + (ae(i.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : A = typeof i, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, D);
        }
        var j = Dn(i, c, _, R, N);
        if (j == null)
          return j;
        if (b) {
          var ee = c.children;
          if (ee !== void 0)
            if (w)
              if (Kt(ee)) {
                for (var Ge = 0; Ge < ee.length; Ge++)
                  ss(ee[Ge], i);
                Object.freeze && Object.freeze(ee);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ss(ee, i);
        }
        return i === s ? On(j) : xn(j), j;
      }
    }
    function Tn(i, c, _) {
      return ns(i, c, _, !0);
    }
    function Rn(i, c, _) {
      return ns(i, c, _, !1);
    }
    var Pn = Rn, En = Tn;
    at.Fragment = s, at.jsx = Pn, at.jsxs = En;
  }()), at;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Wn() : e.exports = Ln();
})(Lt);
const $n = Lt.exports.Fragment, v = Lt.exports.jsx, je = Lt.exports.jsxs, ms = Qe.createContext(void 0), An = ({
  value: e,
  children: t
}) => /* @__PURE__ */ v(ms.Provider, {
  value: e,
  children: t
});
function Ce() {
  return Qe.useContext(ms);
}
const Un = {
  backgroundColor: "transparent",
  backdropFill: "#FFFDE7",
  axisColor: "#707070",
  gridColor: "#FFD54F",
  areaColor: "rgba(127,127,127, .3)"
}, _s = Qe.createContext(Un), In = ({
  value: e,
  children: t
}) => /* @__PURE__ */ v(_s.Provider, {
  value: e,
  children: t
});
function ht() {
  return Qe.useContext(_s);
}
const jn = () => {
  const e = Ce(), t = ht(), r = [], s = e.getDataset().getPercentilePoints(0), n = e.getDataset().getPercentilePoints(e.getDataset().percentiles.length - 1);
  let a = "";
  if (s.forEach((o, l) => {
    const u = e.transformX(o[0]) + e.getMargins().left, d = e.getMeasures().bottom - e.transformY(o[1]);
    a += l === 0 ? "M" : "L", a += `${u} ${d} `;
  }), n.reverse().forEach((o) => {
    const l = e.transformX(o[0]) + e.getMargins().left, u = e.getMeasures().bottom - e.transformY(o[1]);
    a += "L", a += `${l} ${u} `;
  }), a += "Z", r.push(/* @__PURE__ */ v("path", {
    className: "area-curve",
    name: "area-curve-1",
    d: a,
    fill: t.areaColor
  }, "area-curve-1")), e.getDataset().percentiles.length >= 4) {
    const o = e.getDataset().getPercentilePoints(1), l = e.getDataset().getPercentilePoints(e.getDataset().percentiles.length - 2);
    a = "", o.forEach((u, d) => {
      const m = e.transformX(u[0]) + e.getMargins().left, p = e.getMeasures().bottom - e.transformY(u[1]);
      a += d === 0 ? "M" : "L", a += `${m} ${p} `;
    }), l.reverse().forEach((u) => {
      const d = e.transformX(u[0]) + e.getMargins().left, m = e.getMeasures().bottom - e.transformY(u[1]);
      a += "L", a += `${d} ${m} `;
    }), a += "Z", r.push(/* @__PURE__ */ v("path", {
      className: "area-curve",
      name: "area-curve-2",
      d: a,
      fill: t.areaColor
    }, "area-curve-2"));
  }
  return /* @__PURE__ */ v("g", {
    name: "areas",
    className: "areas",
    children: r
  });
}, Vn = () => {
  const e = Ce(), t = ht();
  return /* @__PURE__ */ v("rect", {
    name: "backdrop",
    className: "backdrop",
    fill: t.backdropFill,
    x: e.getMeasures().left,
    y: e.getMeasures().top,
    width: e.getMeasures().width,
    height: e.getMeasures().height
  });
}, Hn = () => {
  const e = Ce(), t = ht(), r = e.getMeasures().keys.length, s = e.getMeasures().width / (r - 1), n = e.getDataset().getUnitX() === "month" || e.getDataset().getUnitX() === "year" ? 6 : 5, a = [];
  for (let d = 0; d < r; d += 1) {
    const m = e.getMeasures().keys[d], p = e.getDataset().getUnitX() === "year" ? m % n === 0 : d % n === 0, k = e.getMeasures().left + d * s, P = e.getMeasures().bottom, H = e.getMeasures().top;
    a.push(/* @__PURE__ */ v("line", {
      className: p ? "longrefline" : "refline",
      x1: k,
      y1: P,
      x2: k,
      y2: H,
      stroke: t.gridColor
    }, `reflinex-${d}`));
  }
  const o = e.getMeasures().maxY - e.getMeasures().minY, l = e.getMeasures().height / o, u = [];
  for (let d = 0; d <= o; d += 1) {
    const m = d % e.getStep() === 0, p = e.getMeasures().left, k = e.getMeasures().right, P = e.getMeasures().bottom - d * l;
    u.push(/* @__PURE__ */ v("line", {
      className: m ? "longrefline" : "refline",
      x1: p,
      y1: P,
      x2: k,
      y2: P,
      stroke: t.gridColor
    }, `refliney-${d}`));
  }
  return /* @__PURE__ */ je("g", {
    name: "grid",
    className: "grid",
    children: [a, u]
  });
};
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var ys;
function h() {
  return ys.apply(null, arguments);
}
function Gn(e) {
  ys = e;
}
function oe(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Ie(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function O(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function pr(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (O(e, t))
      return !1;
  return !0;
}
function B(e) {
  return e === void 0;
}
function Ye(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function mt(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function gs(e, t) {
  var r = [], s, n = e.length;
  for (s = 0; s < n; ++s)
    r.push(t(e[s], s));
  return r;
}
function Pe(e, t) {
  for (var r in t)
    O(t, r) && (e[r] = t[r]);
  return O(t, "toString") && (e.toString = t.toString), O(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function me(e, t, r, s) {
  return Is(e, t, r, s, !0).utc();
}
function Xn() {
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
function M(e) {
  return e._pf == null && (e._pf = Xn()), e._pf;
}
var cr;
Array.prototype.some ? cr = Array.prototype.some : cr = function(e) {
  var t = Object(this), r = t.length >>> 0, s;
  for (s = 0; s < r; s++)
    if (s in t && e.call(this, t[s], s, t))
      return !0;
  return !1;
};
function vr(e) {
  if (e._isValid == null) {
    var t = M(e), r = cr.call(t.parsedDateParts, function(n) {
      return n != null;
    }), s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r);
    if (e._strict && (s = s && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = s;
    else
      return s;
  }
  return e._isValid;
}
function $t(e) {
  var t = me(NaN);
  return e != null ? Pe(M(t), e) : M(t).userInvalidated = !0, t;
}
var ls = h.momentProperties = [], nr = !1;
function wr(e, t) {
  var r, s, n, a = ls.length;
  if (B(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), B(t._i) || (e._i = t._i), B(t._f) || (e._f = t._f), B(t._l) || (e._l = t._l), B(t._strict) || (e._strict = t._strict), B(t._tzm) || (e._tzm = t._tzm), B(t._isUTC) || (e._isUTC = t._isUTC), B(t._offset) || (e._offset = t._offset), B(t._pf) || (e._pf = M(t)), B(t._locale) || (e._locale = t._locale), a > 0)
    for (r = 0; r < a; r++)
      s = ls[r], n = t[s], B(n) || (e[s] = n);
  return e;
}
function _t(e) {
  wr(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), nr === !1 && (nr = !0, h.updateOffset(this), nr = !1);
}
function le(e) {
  return e instanceof _t || e != null && e._isAMomentObject != null;
}
function ps(e) {
  h.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function re(e, t) {
  var r = !0;
  return Pe(function() {
    if (h.deprecationHandler != null && h.deprecationHandler(null, e), r) {
      var s = [], n, a, o, l = arguments.length;
      for (a = 0; a < l; a++) {
        if (n = "", typeof arguments[a] == "object") {
          n += `
[` + a + "] ";
          for (o in arguments[0])
            O(arguments[0], o) && (n += o + ": " + arguments[0][o] + ", ");
          n = n.slice(0, -2);
        } else
          n = arguments[a];
        s.push(n);
      }
      ps(
        e + `
Arguments: ` + Array.prototype.slice.call(s).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var us = {};
function vs(e, t) {
  h.deprecationHandler != null && h.deprecationHandler(e, t), us[e] || (ps(t), us[e] = !0);
}
h.suppressDeprecationWarnings = !1;
h.deprecationHandler = null;
function _e(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function zn(e) {
  var t, r;
  for (r in e)
    O(e, r) && (t = e[r], _e(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function fr(e, t) {
  var r = Pe({}, e), s;
  for (s in t)
    O(t, s) && (Ie(e[s]) && Ie(t[s]) ? (r[s] = {}, Pe(r[s], e[s]), Pe(r[s], t[s])) : t[s] != null ? r[s] = t[s] : delete r[s]);
  for (s in e)
    O(e, s) && !O(t, s) && Ie(e[s]) && (r[s] = Pe({}, r[s]));
  return r;
}
function kr(e) {
  e != null && this.set(e);
}
var dr;
Object.keys ? dr = Object.keys : dr = function(e) {
  var t, r = [];
  for (t in e)
    O(e, t) && r.push(t);
  return r;
};
var Zn = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Bn(e, t, r) {
  var s = this._calendar[e] || this._calendar.sameElse;
  return _e(s) ? s.call(t, r) : s;
}
function he(e, t, r) {
  var s = "" + Math.abs(e), n = t - s.length, a = e >= 0;
  return (a ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + s;
}
var Mr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Dt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ar = {}, Be = {};
function g(e, t, r, s) {
  var n = s;
  typeof s == "string" && (n = function() {
    return this[s]();
  }), e && (Be[e] = n), t && (Be[t[0]] = function() {
    return he(n.apply(this, arguments), t[1], t[2]);
  }), r && (Be[r] = function() {
    return this.localeData().ordinal(
      n.apply(this, arguments),
      e
    );
  });
}
function qn(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Jn(e) {
  var t = e.match(Mr), r, s;
  for (r = 0, s = t.length; r < s; r++)
    Be[t[r]] ? t[r] = Be[t[r]] : t[r] = qn(t[r]);
  return function(n) {
    var a = "", o;
    for (o = 0; o < s; o++)
      a += _e(t[o]) ? t[o].call(n, e) : t[o];
    return a;
  };
}
function Ot(e, t) {
  return e.isValid() ? (t = ws(t, e.localeData()), ar[t] = ar[t] || Jn(t), ar[t](e)) : e.localeData().invalidDate();
}
function ws(e, t) {
  var r = 5;
  function s(n) {
    return t.longDateFormat(n) || n;
  }
  for (Dt.lastIndex = 0; r >= 0 && Dt.test(e); )
    e = e.replace(
      Dt,
      s
    ), Dt.lastIndex = 0, r -= 1;
  return e;
}
var Qn = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Kn(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(Mr).map(function(s) {
    return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd" ? s.slice(1) : s;
  }).join(""), this._longDateFormat[e]);
}
var ea = "Invalid date";
function ta() {
  return this._invalidDate;
}
var ra = "%d", sa = /\d{1,2}/;
function na(e) {
  return this._ordinal.replace("%d", e);
}
var aa = {
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
function ia(e, t, r, s) {
  var n = this._relativeTime[r];
  return _e(n) ? n(e, t, r, s) : n.replace(/%d/i, e);
}
function oa(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return _e(r) ? r(t) : r.replace(/%s/i, t);
}
var lt = {};
function X(e, t) {
  var r = e.toLowerCase();
  lt[r] = lt[r + "s"] = lt[t] = e;
}
function se(e) {
  return typeof e == "string" ? lt[e] || lt[e.toLowerCase()] : void 0;
}
function Sr(e) {
  var t = {}, r, s;
  for (s in e)
    O(e, s) && (r = se(s), r && (t[r] = e[s]));
  return t;
}
var ks = {};
function z(e, t) {
  ks[e] = t;
}
function la(e) {
  var t = [], r;
  for (r in e)
    O(e, r) && t.push({ unit: r, priority: ks[r] });
  return t.sort(function(s, n) {
    return s.priority - n.priority;
  }), t;
}
function At(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function te(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function S(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = te(t)), r;
}
function Ke(e, t) {
  return function(r) {
    return r != null ? (Ms(this, e, r), h.updateOffset(this, t), this) : Pt(this, e);
  };
}
function Pt(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Ms(e, t, r) {
  e.isValid() && !isNaN(r) && (t === "FullYear" && At(e.year()) && e.month() === 1 && e.date() === 29 ? (r = S(r), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    r,
    e.month(),
    Gt(r, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](r));
}
function ua(e) {
  return e = se(e), _e(this[e]) ? this[e]() : this;
}
function ca(e, t) {
  if (typeof e == "object") {
    e = Sr(e);
    var r = la(e), s, n = r.length;
    for (s = 0; s < n; s++)
      this[r[s].unit](e[r[s].unit]);
  } else if (e = se(e), _e(this[e]))
    return this[e](t);
  return this;
}
var Ss = /\d/, K = /\d\d/, Ds = /\d{3}/, Dr = /\d{4}/, Ut = /[+-]?\d{6}/, W = /\d\d?/, bs = /\d\d\d\d?/, Ys = /\d\d\d\d\d\d?/, It = /\d{1,3}/, br = /\d{1,4}/, jt = /[+-]?\d{1,6}/, et = /\d+/, Vt = /[+-]?\d+/, fa = /Z|[+-]\d\d:?\d\d/gi, Ht = /Z|[+-]\d\d(?::?\d\d)?/gi, da = /[+-]?\d+(\.\d{1,3})?/, yt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Et;
Et = {};
function y(e, t, r) {
  Et[e] = _e(t) ? t : function(s, n) {
    return s && r ? r : t;
  };
}
function ha(e, t) {
  return O(Et, e) ? Et[e](t._strict, t._locale) : new RegExp(ma(e));
}
function ma(e) {
  return Q(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, s, n, a) {
        return r || s || n || a;
      }
    )
  );
}
function Q(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var hr = {};
function E(e, t) {
  var r, s = t, n;
  for (typeof e == "string" && (e = [e]), Ye(t) && (s = function(a, o) {
    o[t] = S(a);
  }), n = e.length, r = 0; r < n; r++)
    hr[e[r]] = s;
}
function gt(e, t) {
  E(e, function(r, s, n, a) {
    n._w = n._w || {}, t(r, n._w, n, a);
  });
}
function _a(e, t, r) {
  t != null && O(hr, e) && hr[e](t, r._a, r, e);
}
var G = 0, Se = 1, de = 2, V = 3, ie = 4, De = 5, Ue = 6, ya = 7, ga = 8;
function pa(e, t) {
  return (e % t + t) % t;
}
var U;
Array.prototype.indexOf ? U = Array.prototype.indexOf : U = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Gt(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = pa(t, 12);
  return e += (t - r) / 12, r === 1 ? At(e) ? 29 : 28 : 31 - r % 7 % 2;
}
g("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
g("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
g("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
X("month", "M");
z("month", 8);
y("M", W);
y("MM", W, K);
y("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
y("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
E(["M", "MM"], function(e, t) {
  t[Se] = S(e) - 1;
});
E(["MMM", "MMMM"], function(e, t, r, s) {
  var n = r._locale.monthsParse(e, s, r._strict);
  n != null ? t[Se] = n : M(r).invalidMonth = e;
});
var va = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), xs = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Os = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, wa = yt, ka = yt;
function Ma(e, t) {
  return e ? oe(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Os).test(t) ? "format" : "standalone"][e.month()] : oe(this._months) ? this._months : this._months.standalone;
}
function Sa(e, t) {
  return e ? oe(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Os.test(t) ? "format" : "standalone"][e.month()] : oe(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Da(e, t, r) {
  var s, n, a, o = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
      a = me([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[s] = this.months(a, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (n = U.call(this._shortMonthsParse, o), n !== -1 ? n : null) : (n = U.call(this._longMonthsParse, o), n !== -1 ? n : null) : t === "MMM" ? (n = U.call(this._shortMonthsParse, o), n !== -1 ? n : (n = U.call(this._longMonthsParse, o), n !== -1 ? n : null)) : (n = U.call(this._longMonthsParse, o), n !== -1 ? n : (n = U.call(this._shortMonthsParse, o), n !== -1 ? n : null));
}
function ba(e, t, r) {
  var s, n, a;
  if (this._monthsParseExact)
    return Da.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
    if (n = me([2e3, s]), r && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp(
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
function Ts(e, t) {
  var r;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = S(t);
    else if (t = e.localeData().monthsParse(t), !Ye(t))
      return e;
  }
  return r = Math.min(e.date(), Gt(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, r), e;
}
function Rs(e) {
  return e != null ? (Ts(this, e), h.updateOffset(this, !0), this) : Pt(this, "Month");
}
function Ya() {
  return Gt(this.year(), this.month());
}
function xa(e) {
  return this._monthsParseExact ? (O(this, "_monthsRegex") || Ps.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (O(this, "_monthsShortRegex") || (this._monthsShortRegex = wa), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Oa(e) {
  return this._monthsParseExact ? (O(this, "_monthsRegex") || Ps.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (O(this, "_monthsRegex") || (this._monthsRegex = ka), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Ps() {
  function e(o, l) {
    return l.length - o.length;
  }
  var t = [], r = [], s = [], n, a;
  for (n = 0; n < 12; n++)
    a = me([2e3, n]), t.push(this.monthsShort(a, "")), r.push(this.months(a, "")), s.push(this.months(a, "")), s.push(this.monthsShort(a, ""));
  for (t.sort(e), r.sort(e), s.sort(e), n = 0; n < 12; n++)
    t[n] = Q(t[n]), r[n] = Q(r[n]);
  for (n = 0; n < 24; n++)
    s[n] = Q(s[n]);
  this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
g("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? he(e, 4) : "+" + e;
});
g(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
g(0, ["YYYY", 4], 0, "year");
g(0, ["YYYYY", 5], 0, "year");
g(0, ["YYYYYY", 6, !0], 0, "year");
X("year", "y");
z("year", 1);
y("Y", Vt);
y("YY", W, K);
y("YYYY", br, Dr);
y("YYYYY", jt, Ut);
y("YYYYYY", jt, Ut);
E(["YYYYY", "YYYYYY"], G);
E("YYYY", function(e, t) {
  t[G] = e.length === 2 ? h.parseTwoDigitYear(e) : S(e);
});
E("YY", function(e, t) {
  t[G] = h.parseTwoDigitYear(e);
});
E("Y", function(e, t) {
  t[G] = parseInt(e, 10);
});
function ut(e) {
  return At(e) ? 366 : 365;
}
h.parseTwoDigitYear = function(e) {
  return S(e) + (S(e) > 68 ? 1900 : 2e3);
};
var Es = Ke("FullYear", !0);
function Ta() {
  return At(this.year());
}
function Ra(e, t, r, s, n, a, o) {
  var l;
  return e < 100 && e >= 0 ? (l = new Date(e + 400, t, r, s, n, a, o), isFinite(l.getFullYear()) && l.setFullYear(e)) : l = new Date(e, t, r, s, n, a, o), l;
}
function ct(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Nt(e, t, r) {
  var s = 7 + t - r, n = (7 + ct(e, 0, s).getUTCDay() - t) % 7;
  return -n + s - 1;
}
function Ns(e, t, r, s, n) {
  var a = (7 + r - s) % 7, o = Nt(e, s, n), l = 1 + 7 * (t - 1) + a + o, u, d;
  return l <= 0 ? (u = e - 1, d = ut(u) + l) : l > ut(e) ? (u = e + 1, d = l - ut(e)) : (u = e, d = l), {
    year: u,
    dayOfYear: d
  };
}
function ft(e, t, r) {
  var s = Nt(e.year(), t, r), n = Math.floor((e.dayOfYear() - s - 1) / 7) + 1, a, o;
  return n < 1 ? (o = e.year() - 1, a = n + be(o, t, r)) : n > be(e.year(), t, r) ? (a = n - be(e.year(), t, r), o = e.year() + 1) : (o = e.year(), a = n), {
    week: a,
    year: o
  };
}
function be(e, t, r) {
  var s = Nt(e, t, r), n = Nt(e + 1, t, r);
  return (ut(e) - s + n) / 7;
}
g("w", ["ww", 2], "wo", "week");
g("W", ["WW", 2], "Wo", "isoWeek");
X("week", "w");
X("isoWeek", "W");
z("week", 5);
z("isoWeek", 5);
y("w", W);
y("ww", W, K);
y("W", W);
y("WW", W, K);
gt(
  ["w", "ww", "W", "WW"],
  function(e, t, r, s) {
    t[s.substr(0, 1)] = S(e);
  }
);
function Pa(e) {
  return ft(e, this._week.dow, this._week.doy).week;
}
var Ea = {
  dow: 0,
  doy: 6
};
function Na() {
  return this._week.dow;
}
function Ca() {
  return this._week.doy;
}
function Fa(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Wa(e) {
  var t = ft(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
g("d", 0, "do", "day");
g("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
g("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
g("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
g("e", 0, 0, "weekday");
g("E", 0, 0, "isoWeekday");
X("day", "d");
X("weekday", "e");
X("isoWeekday", "E");
z("day", 11);
z("weekday", 11);
z("isoWeekday", 11);
y("d", W);
y("e", W);
y("E", W);
y("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
y("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
y("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
gt(["dd", "ddd", "dddd"], function(e, t, r, s) {
  var n = r._locale.weekdaysParse(e, s, r._strict);
  n != null ? t.d = n : M(r).invalidWeekday = e;
});
gt(["d", "e", "E"], function(e, t, r, s) {
  t[s] = S(e);
});
function La(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function $a(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Yr(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Aa = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Cs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ua = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ia = yt, ja = yt, Va = yt;
function Ha(e, t) {
  var r = oe(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Yr(r, this._week.dow) : e ? r[e.day()] : r;
}
function Ga(e) {
  return e === !0 ? Yr(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Xa(e) {
  return e === !0 ? Yr(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function za(e, t, r) {
  var s, n, a, o = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)
      a = me([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(a, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (n = U.call(this._weekdaysParse, o), n !== -1 ? n : null) : t === "ddd" ? (n = U.call(this._shortWeekdaysParse, o), n !== -1 ? n : null) : (n = U.call(this._minWeekdaysParse, o), n !== -1 ? n : null) : t === "dddd" ? (n = U.call(this._weekdaysParse, o), n !== -1 || (n = U.call(this._shortWeekdaysParse, o), n !== -1) ? n : (n = U.call(this._minWeekdaysParse, o), n !== -1 ? n : null)) : t === "ddd" ? (n = U.call(this._shortWeekdaysParse, o), n !== -1 || (n = U.call(this._weekdaysParse, o), n !== -1) ? n : (n = U.call(this._minWeekdaysParse, o), n !== -1 ? n : null)) : (n = U.call(this._minWeekdaysParse, o), n !== -1 || (n = U.call(this._weekdaysParse, o), n !== -1) ? n : (n = U.call(this._shortWeekdaysParse, o), n !== -1 ? n : null));
}
function Za(e, t, r) {
  var s, n, a;
  if (this._weekdaysParseExact)
    return za.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
    if (n = me([2e3, 1]).day(s), r && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp(
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
function Ba(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = La(e, this.localeData()), this.add(e - t, "d")) : t;
}
function qa(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Ja(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = $a(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Qa(e) {
  return this._weekdaysParseExact ? (O(this, "_weekdaysRegex") || xr.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (O(this, "_weekdaysRegex") || (this._weekdaysRegex = Ia), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Ka(e) {
  return this._weekdaysParseExact ? (O(this, "_weekdaysRegex") || xr.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (O(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ja), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function ei(e) {
  return this._weekdaysParseExact ? (O(this, "_weekdaysRegex") || xr.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (O(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Va), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function xr() {
  function e(m, p) {
    return p.length - m.length;
  }
  var t = [], r = [], s = [], n = [], a, o, l, u, d;
  for (a = 0; a < 7; a++)
    o = me([2e3, 1]).day(a), l = Q(this.weekdaysMin(o, "")), u = Q(this.weekdaysShort(o, "")), d = Q(this.weekdays(o, "")), t.push(l), r.push(u), s.push(d), n.push(l), n.push(u), n.push(d);
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
function Or() {
  return this.hours() % 12 || 12;
}
function ti() {
  return this.hours() || 24;
}
g("H", ["HH", 2], 0, "hour");
g("h", ["hh", 2], 0, Or);
g("k", ["kk", 2], 0, ti);
g("hmm", 0, 0, function() {
  return "" + Or.apply(this) + he(this.minutes(), 2);
});
g("hmmss", 0, 0, function() {
  return "" + Or.apply(this) + he(this.minutes(), 2) + he(this.seconds(), 2);
});
g("Hmm", 0, 0, function() {
  return "" + this.hours() + he(this.minutes(), 2);
});
g("Hmmss", 0, 0, function() {
  return "" + this.hours() + he(this.minutes(), 2) + he(this.seconds(), 2);
});
function Fs(e, t) {
  g(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Fs("a", !0);
Fs("A", !1);
X("hour", "h");
z("hour", 13);
function Ws(e, t) {
  return t._meridiemParse;
}
y("a", Ws);
y("A", Ws);
y("H", W);
y("h", W);
y("k", W);
y("HH", W, K);
y("hh", W, K);
y("kk", W, K);
y("hmm", bs);
y("hmmss", Ys);
y("Hmm", bs);
y("Hmmss", Ys);
E(["H", "HH"], V);
E(["k", "kk"], function(e, t, r) {
  var s = S(e);
  t[V] = s === 24 ? 0 : s;
});
E(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
E(["h", "hh"], function(e, t, r) {
  t[V] = S(e), M(r).bigHour = !0;
});
E("hmm", function(e, t, r) {
  var s = e.length - 2;
  t[V] = S(e.substr(0, s)), t[ie] = S(e.substr(s)), M(r).bigHour = !0;
});
E("hmmss", function(e, t, r) {
  var s = e.length - 4, n = e.length - 2;
  t[V] = S(e.substr(0, s)), t[ie] = S(e.substr(s, 2)), t[De] = S(e.substr(n)), M(r).bigHour = !0;
});
E("Hmm", function(e, t, r) {
  var s = e.length - 2;
  t[V] = S(e.substr(0, s)), t[ie] = S(e.substr(s));
});
E("Hmmss", function(e, t, r) {
  var s = e.length - 4, n = e.length - 2;
  t[V] = S(e.substr(0, s)), t[ie] = S(e.substr(s, 2)), t[De] = S(e.substr(n));
});
function ri(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var si = /[ap]\.?m?\.?/i, ni = Ke("Hours", !0);
function ai(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var Ls = {
  calendar: Zn,
  longDateFormat: Qn,
  invalidDate: ea,
  ordinal: ra,
  dayOfMonthOrdinalParse: sa,
  relativeTime: aa,
  months: va,
  monthsShort: xs,
  week: Ea,
  weekdays: Aa,
  weekdaysMin: Ua,
  weekdaysShort: Cs,
  meridiemParse: si
}, L = {}, it = {}, dt;
function ii(e, t) {
  var r, s = Math.min(e.length, t.length);
  for (r = 0; r < s; r += 1)
    if (e[r] !== t[r])
      return r;
  return s;
}
function cs(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function oi(e) {
  for (var t = 0, r, s, n, a; t < e.length; ) {
    for (a = cs(e[t]).split("-"), r = a.length, s = cs(e[t + 1]), s = s ? s.split("-") : null; r > 0; ) {
      if (n = Xt(a.slice(0, r).join("-")), n)
        return n;
      if (s && s.length >= r && ii(a, s) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return dt;
}
function li(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Xt(e) {
  var t = null, r;
  if (L[e] === void 0 && typeof module < "u" && module && module.exports && li(e))
    try {
      t = dt._abbr, r = require, r("./locale/" + e), Ne(t);
    } catch {
      L[e] = null;
    }
  return L[e];
}
function Ne(e, t) {
  var r;
  return e && (B(t) ? r = xe(e) : r = Tr(e, t), r ? dt = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), dt._abbr;
}
function Tr(e, t) {
  if (t !== null) {
    var r, s = Ls;
    if (t.abbr = e, L[e] != null)
      vs(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), s = L[e]._config;
    else if (t.parentLocale != null)
      if (L[t.parentLocale] != null)
        s = L[t.parentLocale]._config;
      else if (r = Xt(t.parentLocale), r != null)
        s = r._config;
      else
        return it[t.parentLocale] || (it[t.parentLocale] = []), it[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return L[e] = new kr(fr(s, t)), it[e] && it[e].forEach(function(n) {
      Tr(n.name, n.config);
    }), Ne(e), L[e];
  } else
    return delete L[e], null;
}
function ui(e, t) {
  if (t != null) {
    var r, s, n = Ls;
    L[e] != null && L[e].parentLocale != null ? L[e].set(fr(L[e]._config, t)) : (s = Xt(e), s != null && (n = s._config), t = fr(n, t), s == null && (t.abbr = e), r = new kr(t), r.parentLocale = L[e], L[e] = r), Ne(e);
  } else
    L[e] != null && (L[e].parentLocale != null ? (L[e] = L[e].parentLocale, e === Ne() && Ne(e)) : L[e] != null && delete L[e]);
  return L[e];
}
function xe(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return dt;
  if (!oe(e)) {
    if (t = Xt(e), t)
      return t;
    e = [e];
  }
  return oi(e);
}
function ci() {
  return dr(L);
}
function Rr(e) {
  var t, r = e._a;
  return r && M(e).overflow === -2 && (t = r[Se] < 0 || r[Se] > 11 ? Se : r[de] < 1 || r[de] > Gt(r[G], r[Se]) ? de : r[V] < 0 || r[V] > 24 || r[V] === 24 && (r[ie] !== 0 || r[De] !== 0 || r[Ue] !== 0) ? V : r[ie] < 0 || r[ie] > 59 ? ie : r[De] < 0 || r[De] > 59 ? De : r[Ue] < 0 || r[Ue] > 999 ? Ue : -1, M(e)._overflowDayOfYear && (t < G || t > de) && (t = de), M(e)._overflowWeeks && t === -1 && (t = ya), M(e)._overflowWeekday && t === -1 && (t = ga), M(e).overflow = t), e;
}
var fi = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, di = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, hi = /Z|[+-]\d\d(?::?\d\d)?/, bt = [
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
], ir = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], mi = /^\/?Date\((-?\d+)/i, _i = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, yi = {
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
function $s(e) {
  var t, r, s = e._i, n = fi.exec(s) || di.exec(s), a, o, l, u, d = bt.length, m = ir.length;
  if (n) {
    for (M(e).iso = !0, t = 0, r = d; t < r; t++)
      if (bt[t][1].exec(n[1])) {
        o = bt[t][0], a = bt[t][2] !== !1;
        break;
      }
    if (o == null) {
      e._isValid = !1;
      return;
    }
    if (n[3]) {
      for (t = 0, r = m; t < r; t++)
        if (ir[t][1].exec(n[3])) {
          l = (n[2] || " ") + ir[t][0];
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
      if (hi.exec(n[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = o + (l || "") + (u || ""), Er(e);
  } else
    e._isValid = !1;
}
function gi(e, t, r, s, n, a) {
  var o = [
    pi(e),
    xs.indexOf(t),
    parseInt(r, 10),
    parseInt(s, 10),
    parseInt(n, 10)
  ];
  return a && o.push(parseInt(a, 10)), o;
}
function pi(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function vi(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function wi(e, t, r) {
  if (e) {
    var s = Cs.indexOf(e), n = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (s !== n)
      return M(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function ki(e, t, r) {
  if (e)
    return yi[e];
  if (t)
    return 0;
  var s = parseInt(r, 10), n = s % 100, a = (s - n) / 100;
  return a * 60 + n;
}
function As(e) {
  var t = _i.exec(vi(e._i)), r;
  if (t) {
    if (r = gi(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !wi(t[1], r, e))
      return;
    e._a = r, e._tzm = ki(t[8], t[9], t[10]), e._d = ct.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), M(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Mi(e) {
  var t = mi.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if ($s(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (As(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : h.createFromInputFallback(e);
}
h.createFromInputFallback = re(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function ze(e, t, r) {
  return e != null ? e : t != null ? t : r;
}
function Si(e) {
  var t = new Date(h.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Pr(e) {
  var t, r, s = [], n, a, o;
  if (!e._d) {
    for (n = Si(e), e._w && e._a[de] == null && e._a[Se] == null && Di(e), e._dayOfYear != null && (o = ze(e._a[G], n[G]), (e._dayOfYear > ut(o) || e._dayOfYear === 0) && (M(e)._overflowDayOfYear = !0), r = ct(o, 0, e._dayOfYear), e._a[Se] = r.getUTCMonth(), e._a[de] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = s[t] = n[t];
    for (; t < 7; t++)
      e._a[t] = s[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[V] === 24 && e._a[ie] === 0 && e._a[De] === 0 && e._a[Ue] === 0 && (e._nextDay = !0, e._a[V] = 0), e._d = (e._useUTC ? ct : Ra).apply(
      null,
      s
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[V] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (M(e).weekdayMismatch = !0);
  }
}
function Di(e) {
  var t, r, s, n, a, o, l, u, d;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, o = 4, r = ze(
    t.GG,
    e._a[G],
    ft(F(), 1, 4).year
  ), s = ze(t.W, 1), n = ze(t.E, 1), (n < 1 || n > 7) && (u = !0)) : (a = e._locale._week.dow, o = e._locale._week.doy, d = ft(F(), a, o), r = ze(t.gg, e._a[G], d.year), s = ze(t.w, d.week), t.d != null ? (n = t.d, (n < 0 || n > 6) && (u = !0)) : t.e != null ? (n = t.e + a, (t.e < 0 || t.e > 6) && (u = !0)) : n = a), s < 1 || s > be(r, a, o) ? M(e)._overflowWeeks = !0 : u != null ? M(e)._overflowWeekday = !0 : (l = Ns(r, s, n, a, o), e._a[G] = l.year, e._dayOfYear = l.dayOfYear);
}
h.ISO_8601 = function() {
};
h.RFC_2822 = function() {
};
function Er(e) {
  if (e._f === h.ISO_8601) {
    $s(e);
    return;
  }
  if (e._f === h.RFC_2822) {
    As(e);
    return;
  }
  e._a = [], M(e).empty = !0;
  var t = "" + e._i, r, s, n, a, o, l = t.length, u = 0, d, m;
  for (n = ws(e._f, e._locale).match(Mr) || [], m = n.length, r = 0; r < m; r++)
    a = n[r], s = (t.match(ha(a, e)) || [])[0], s && (o = t.substr(0, t.indexOf(s)), o.length > 0 && M(e).unusedInput.push(o), t = t.slice(
      t.indexOf(s) + s.length
    ), u += s.length), Be[a] ? (s ? M(e).empty = !1 : M(e).unusedTokens.push(a), _a(a, s, e)) : e._strict && !s && M(e).unusedTokens.push(a);
  M(e).charsLeftOver = l - u, t.length > 0 && M(e).unusedInput.push(t), e._a[V] <= 12 && M(e).bigHour === !0 && e._a[V] > 0 && (M(e).bigHour = void 0), M(e).parsedDateParts = e._a.slice(0), M(e).meridiem = e._meridiem, e._a[V] = bi(
    e._locale,
    e._a[V],
    e._meridiem
  ), d = M(e).era, d !== null && (e._a[G] = e._locale.erasConvertYear(d, e._a[G])), Pr(e), Rr(e);
}
function bi(e, t, r) {
  var s;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (s = e.isPM(r), s && t < 12 && (t += 12), !s && t === 12 && (t = 0)), t);
}
function Yi(e) {
  var t, r, s, n, a, o, l = !1, u = e._f.length;
  if (u === 0) {
    M(e).invalidFormat = !0, e._d = new Date(NaN);
    return;
  }
  for (n = 0; n < u; n++)
    a = 0, o = !1, t = wr({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[n], Er(t), vr(t) && (o = !0), a += M(t).charsLeftOver, a += M(t).unusedTokens.length * 10, M(t).score = a, l ? a < s && (s = a, r = t) : (s == null || a < s || o) && (s = a, r = t, o && (l = !0));
  Pe(e, r || t);
}
function xi(e) {
  if (!e._d) {
    var t = Sr(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = gs(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(s) {
        return s && parseInt(s, 10);
      }
    ), Pr(e);
  }
}
function Oi(e) {
  var t = new _t(Rr(Us(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Us(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || xe(e._l), t === null || r === void 0 && t === "" ? $t({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), le(t) ? new _t(Rr(t)) : (mt(t) ? e._d = t : oe(r) ? Yi(e) : r ? Er(e) : Ti(e), vr(e) || (e._d = null), e));
}
function Ti(e) {
  var t = e._i;
  B(t) ? e._d = new Date(h.now()) : mt(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Mi(e) : oe(t) ? (e._a = gs(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), Pr(e)) : Ie(t) ? xi(e) : Ye(t) ? e._d = new Date(t) : h.createFromInputFallback(e);
}
function Is(e, t, r, s, n) {
  var a = {};
  return (t === !0 || t === !1) && (s = t, t = void 0), (r === !0 || r === !1) && (s = r, r = void 0), (Ie(e) && pr(e) || oe(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = n, a._l = r, a._i = e, a._f = t, a._strict = s, Oi(a);
}
function F(e, t, r, s) {
  return Is(e, t, r, s, !1);
}
var Ri = re(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = F.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : $t();
  }
), Pi = re(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = F.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : $t();
  }
);
function js(e, t) {
  var r, s;
  if (t.length === 1 && oe(t[0]) && (t = t[0]), !t.length)
    return F();
  for (r = t[0], s = 1; s < t.length; ++s)
    (!t[s].isValid() || t[s][e](r)) && (r = t[s]);
  return r;
}
function Ei() {
  var e = [].slice.call(arguments, 0);
  return js("isBefore", e);
}
function Ni() {
  var e = [].slice.call(arguments, 0);
  return js("isAfter", e);
}
var Ci = function() {
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
function Fi(e) {
  var t, r = !1, s, n = ot.length;
  for (t in e)
    if (O(e, t) && !(U.call(ot, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (s = 0; s < n; ++s)
    if (e[ot[s]]) {
      if (r)
        return !1;
      parseFloat(e[ot[s]]) !== S(e[ot[s]]) && (r = !0);
    }
  return !0;
}
function Wi() {
  return this._isValid;
}
function Li() {
  return ue(NaN);
}
function zt(e) {
  var t = Sr(e), r = t.year || 0, s = t.quarter || 0, n = t.month || 0, a = t.week || t.isoWeek || 0, o = t.day || 0, l = t.hour || 0, u = t.minute || 0, d = t.second || 0, m = t.millisecond || 0;
  this._isValid = Fi(t), this._milliseconds = +m + d * 1e3 + u * 6e4 + l * 1e3 * 60 * 60, this._days = +o + a * 7, this._months = +n + s * 3 + r * 12, this._data = {}, this._locale = xe(), this._bubble();
}
function Tt(e) {
  return e instanceof zt;
}
function mr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function $i(e, t, r) {
  var s = Math.min(e.length, t.length), n = Math.abs(e.length - t.length), a = 0, o;
  for (o = 0; o < s; o++)
    (r && e[o] !== t[o] || !r && S(e[o]) !== S(t[o])) && a++;
  return a + n;
}
function Vs(e, t) {
  g(e, 0, 0, function() {
    var r = this.utcOffset(), s = "+";
    return r < 0 && (r = -r, s = "-"), s + he(~~(r / 60), 2) + t + he(~~r % 60, 2);
  });
}
Vs("Z", ":");
Vs("ZZ", "");
y("Z", Ht);
y("ZZ", Ht);
E(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = Nr(Ht, e);
});
var Ai = /([\+\-]|\d\d)/gi;
function Nr(e, t) {
  var r = (t || "").match(e), s, n, a;
  return r === null ? null : (s = r[r.length - 1] || [], n = (s + "").match(Ai) || ["-", 0, 0], a = +(n[1] * 60) + S(n[2]), a === 0 ? 0 : n[0] === "+" ? a : -a);
}
function Cr(e, t) {
  var r, s;
  return t._isUTC ? (r = t.clone(), s = (le(e) || mt(e) ? e.valueOf() : F(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + s), h.updateOffset(r, !1), r) : F(e).local();
}
function _r(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
h.updateOffset = function() {
};
function Ui(e, t, r) {
  var s = this._offset || 0, n;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Nr(Ht, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (n = _r(this)), this._offset = e, this._isUTC = !0, n != null && this.add(n, "m"), s !== e && (!t || this._changeInProgress ? Xs(
      this,
      ue(e - s, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, h.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? s : _r(this);
}
function Ii(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function ji(e) {
  return this.utcOffset(0, e);
}
function Vi(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(_r(this), "m")), this;
}
function Hi() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Nr(fa, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Gi(e) {
  return this.isValid() ? (e = e ? F(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Xi() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function zi() {
  if (!B(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return wr(e, this), e = Us(e), e._a ? (t = e._isUTC ? me(e._a) : F(e._a), this._isDSTShifted = this.isValid() && $i(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Zi() {
  return this.isValid() ? !this._isUTC : !1;
}
function Bi() {
  return this.isValid() ? this._isUTC : !1;
}
function Hs() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var qi = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Ji = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function ue(e, t) {
  var r = e, s = null, n, a, o;
  return Tt(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Ye(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (s = qi.exec(e)) ? (n = s[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: S(s[de]) * n,
    h: S(s[V]) * n,
    m: S(s[ie]) * n,
    s: S(s[De]) * n,
    ms: S(mr(s[Ue] * 1e3)) * n
  }) : (s = Ji.exec(e)) ? (n = s[1] === "-" ? -1 : 1, r = {
    y: Le(s[2], n),
    M: Le(s[3], n),
    w: Le(s[4], n),
    d: Le(s[5], n),
    h: Le(s[6], n),
    m: Le(s[7], n),
    s: Le(s[8], n)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (o = Qi(
    F(r.from),
    F(r.to)
  ), r = {}, r.ms = o.milliseconds, r.M = o.months), a = new zt(r), Tt(e) && O(e, "_locale") && (a._locale = e._locale), Tt(e) && O(e, "_isValid") && (a._isValid = e._isValid), a;
}
ue.fn = zt.prototype;
ue.invalid = Li;
function Le(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function fs(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function Qi(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = Cr(t, e), e.isBefore(t) ? r = fs(e, t) : (r = fs(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function Gs(e, t) {
  return function(r, s) {
    var n, a;
    return s !== null && !isNaN(+s) && (vs(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = r, r = s, s = a), n = ue(r, s), Xs(this, n, e), this;
  };
}
function Xs(e, t, r, s) {
  var n = t._milliseconds, a = mr(t._days), o = mr(t._months);
  !e.isValid() || (s = s == null ? !0 : s, o && Ts(e, Pt(e, "Month") + o * r), a && Ms(e, "Date", Pt(e, "Date") + a * r), n && e._d.setTime(e._d.valueOf() + n * r), s && h.updateOffset(e, a || o));
}
var Ki = Gs(1, "add"), eo = Gs(-1, "subtract");
function zs(e) {
  return typeof e == "string" || e instanceof String;
}
function to(e) {
  return le(e) || mt(e) || zs(e) || Ye(e) || so(e) || ro(e) || e === null || e === void 0;
}
function ro(e) {
  var t = Ie(e) && !pr(e), r = !1, s = [
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
    a = s[n], r = r || O(e, a);
  return t && r;
}
function so(e) {
  var t = oe(e), r = !1;
  return t && (r = e.filter(function(s) {
    return !Ye(s) && zs(e);
  }).length === 0), t && r;
}
function no(e) {
  var t = Ie(e) && !pr(e), r = !1, s = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], n, a;
  for (n = 0; n < s.length; n += 1)
    a = s[n], r = r || O(e, a);
  return t && r;
}
function ao(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function io(e, t) {
  arguments.length === 1 && (arguments[0] ? to(arguments[0]) ? (e = arguments[0], t = void 0) : no(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || F(), s = Cr(r, this).startOf("day"), n = h.calendarFormat(this, s) || "sameElse", a = t && (_e(t[n]) ? t[n].call(this, r) : t[n]);
  return this.format(
    a || this.localeData().calendar(n, this, F(r))
  );
}
function oo() {
  return new _t(this);
}
function lo(e, t) {
  var r = le(e) ? e : F(e);
  return this.isValid() && r.isValid() ? (t = se(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function uo(e, t) {
  var r = le(e) ? e : F(e);
  return this.isValid() && r.isValid() ? (t = se(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function co(e, t, r, s) {
  var n = le(e) ? e : F(e), a = le(t) ? t : F(t);
  return this.isValid() && n.isValid() && a.isValid() ? (s = s || "()", (s[0] === "(" ? this.isAfter(n, r) : !this.isBefore(n, r)) && (s[1] === ")" ? this.isBefore(a, r) : !this.isAfter(a, r))) : !1;
}
function fo(e, t) {
  var r = le(e) ? e : F(e), s;
  return this.isValid() && r.isValid() ? (t = se(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (s = r.valueOf(), this.clone().startOf(t).valueOf() <= s && s <= this.clone().endOf(t).valueOf())) : !1;
}
function ho(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function mo(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function _o(e, t, r) {
  var s, n, a;
  if (!this.isValid())
    return NaN;
  if (s = Cr(e, this), !s.isValid())
    return NaN;
  switch (n = (s.utcOffset() - this.utcOffset()) * 6e4, t = se(t), t) {
    case "year":
      a = Rt(this, s) / 12;
      break;
    case "month":
      a = Rt(this, s);
      break;
    case "quarter":
      a = Rt(this, s) / 3;
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
  return r ? a : te(a);
}
function Rt(e, t) {
  if (e.date() < t.date())
    return -Rt(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), s = e.clone().add(r, "months"), n, a;
  return t - s < 0 ? (n = e.clone().add(r - 1, "months"), a = (t - s) / (s - n)) : (n = e.clone().add(r + 1, "months"), a = (t - s) / (n - s)), -(r + a) || 0;
}
h.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
h.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function yo() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function go(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? Ot(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : _e(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ot(r, "Z")) : Ot(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function po() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, s, n, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(r + s + n + a);
}
function vo(e) {
  e || (e = this.isUtc() ? h.defaultFormatUtc : h.defaultFormat);
  var t = Ot(this, e);
  return this.localeData().postformat(t);
}
function wo(e, t) {
  return this.isValid() && (le(e) && e.isValid() || F(e).isValid()) ? ue({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function ko(e) {
  return this.from(F(), e);
}
function Mo(e, t) {
  return this.isValid() && (le(e) && e.isValid() || F(e).isValid()) ? ue({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function So(e) {
  return this.to(F(), e);
}
function Zs(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = xe(e), t != null && (this._locale = t), this);
}
var Bs = re(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function qs() {
  return this._locale;
}
var Ct = 1e3, qe = 60 * Ct, Ft = 60 * qe, Js = (365 * 400 + 97) * 24 * Ft;
function Je(e, t) {
  return (e % t + t) % t;
}
function Qs(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - Js : new Date(e, t, r).valueOf();
}
function Ks(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - Js : Date.UTC(e, t, r);
}
function Do(e) {
  var t, r;
  if (e = se(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? Ks : Qs, e) {
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
      t = this._d.valueOf(), t -= Je(
        t + (this._isUTC ? 0 : this.utcOffset() * qe),
        Ft
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Je(t, qe);
      break;
    case "second":
      t = this._d.valueOf(), t -= Je(t, Ct);
      break;
  }
  return this._d.setTime(t), h.updateOffset(this, !0), this;
}
function bo(e) {
  var t, r;
  if (e = se(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? Ks : Qs, e) {
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
      t = this._d.valueOf(), t += Ft - Je(
        t + (this._isUTC ? 0 : this.utcOffset() * qe),
        Ft
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += qe - Je(t, qe) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Ct - Je(t, Ct) - 1;
      break;
  }
  return this._d.setTime(t), h.updateOffset(this, !0), this;
}
function Yo() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function xo() {
  return Math.floor(this.valueOf() / 1e3);
}
function Oo() {
  return new Date(this.valueOf());
}
function To() {
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
function Ro() {
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
function Po() {
  return this.isValid() ? this.toISOString() : null;
}
function Eo() {
  return vr(this);
}
function No() {
  return Pe({}, M(this));
}
function Co() {
  return M(this).overflow;
}
function Fo() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
g("N", 0, 0, "eraAbbr");
g("NN", 0, 0, "eraAbbr");
g("NNN", 0, 0, "eraAbbr");
g("NNNN", 0, 0, "eraName");
g("NNNNN", 0, 0, "eraNarrow");
g("y", ["y", 1], "yo", "eraYear");
g("y", ["yy", 2], 0, "eraYear");
g("y", ["yyy", 3], 0, "eraYear");
g("y", ["yyyy", 4], 0, "eraYear");
y("N", Fr);
y("NN", Fr);
y("NNN", Fr);
y("NNNN", Xo);
y("NNNNN", zo);
E(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, s) {
    var n = r._locale.erasParse(e, s, r._strict);
    n ? M(r).era = n : M(r).invalidEra = e;
  }
);
y("y", et);
y("yy", et);
y("yyy", et);
y("yyyy", et);
y("yo", Zo);
E(["y", "yy", "yyy", "yyyy"], G);
E(["yo"], function(e, t, r, s) {
  var n;
  r._locale._eraYearOrdinalRegex && (n = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[G] = r._locale.eraYearOrdinalParse(e, n) : t[G] = parseInt(e, 10);
});
function Wo(e, t) {
  var r, s, n, a = this._eras || xe("en")._eras;
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
function Lo(e, t, r) {
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
function $o(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? h(e.since).year() : h(e.since).year() + (t - e.offset) * r;
}
function Ao() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].name;
  return "";
}
function Uo() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].narrow;
  return "";
}
function Io() {
  var e, t, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return s[e].abbr;
  return "";
}
function jo() {
  var e, t, r, s, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = n[e].since <= n[e].until ? 1 : -1, s = this.clone().startOf("day").valueOf(), n[e].since <= s && s <= n[e].until || n[e].until <= s && s <= n[e].since)
      return (this.year() - h(n[e].since).year()) * r + n[e].offset;
  return this.year();
}
function Vo(e) {
  return O(this, "_erasNameRegex") || Wr.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Ho(e) {
  return O(this, "_erasAbbrRegex") || Wr.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Go(e) {
  return O(this, "_erasNarrowRegex") || Wr.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Fr(e, t) {
  return t.erasAbbrRegex(e);
}
function Xo(e, t) {
  return t.erasNameRegex(e);
}
function zo(e, t) {
  return t.erasNarrowRegex(e);
}
function Zo(e, t) {
  return t._eraYearOrdinalRegex || et;
}
function Wr() {
  var e = [], t = [], r = [], s = [], n, a, o = this.eras();
  for (n = 0, a = o.length; n < a; ++n)
    t.push(Q(o[n].name)), e.push(Q(o[n].abbr)), r.push(Q(o[n].narrow)), s.push(Q(o[n].name)), s.push(Q(o[n].abbr)), s.push(Q(o[n].narrow));
  this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
g(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
g(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Zt(e, t) {
  g(0, [e, e.length], 0, t);
}
Zt("gggg", "weekYear");
Zt("ggggg", "weekYear");
Zt("GGGG", "isoWeekYear");
Zt("GGGGG", "isoWeekYear");
X("weekYear", "gg");
X("isoWeekYear", "GG");
z("weekYear", 1);
z("isoWeekYear", 1);
y("G", Vt);
y("g", Vt);
y("GG", W, K);
y("gg", W, K);
y("GGGG", br, Dr);
y("gggg", br, Dr);
y("GGGGG", jt, Ut);
y("ggggg", jt, Ut);
gt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, s) {
    t[s.substr(0, 2)] = S(e);
  }
);
gt(["gg", "GG"], function(e, t, r, s) {
  t[s] = h.parseTwoDigitYear(e);
});
function Bo(e) {
  return en.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function qo(e) {
  return en.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Jo() {
  return be(this.year(), 1, 4);
}
function Qo() {
  return be(this.isoWeekYear(), 1, 4);
}
function Ko() {
  var e = this.localeData()._week;
  return be(this.year(), e.dow, e.doy);
}
function el() {
  var e = this.localeData()._week;
  return be(this.weekYear(), e.dow, e.doy);
}
function en(e, t, r, s, n) {
  var a;
  return e == null ? ft(this, s, n).year : (a = be(e, s, n), t > a && (t = a), tl.call(this, e, t, r, s, n));
}
function tl(e, t, r, s, n) {
  var a = Ns(e, t, r, s, n), o = ct(a.year, 0, a.dayOfYear);
  return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this;
}
g("Q", 0, "Qo", "quarter");
X("quarter", "Q");
z("quarter", 7);
y("Q", Ss);
E("Q", function(e, t) {
  t[Se] = (S(e) - 1) * 3;
});
function rl(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
g("D", ["DD", 2], "Do", "date");
X("date", "D");
z("date", 9);
y("D", W);
y("DD", W, K);
y("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
E(["D", "DD"], de);
E("Do", function(e, t) {
  t[de] = S(e.match(W)[0]);
});
var tn = Ke("Date", !0);
g("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
X("dayOfYear", "DDD");
z("dayOfYear", 4);
y("DDD", It);
y("DDDD", Ds);
E(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = S(e);
});
function sl(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
g("m", ["mm", 2], 0, "minute");
X("minute", "m");
z("minute", 14);
y("m", W);
y("mm", W, K);
E(["m", "mm"], ie);
var nl = Ke("Minutes", !1);
g("s", ["ss", 2], 0, "second");
X("second", "s");
z("second", 15);
y("s", W);
y("ss", W, K);
E(["s", "ss"], De);
var al = Ke("Seconds", !1);
g("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
g(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
g(0, ["SSS", 3], 0, "millisecond");
g(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
g(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
g(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
g(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
g(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
g(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
X("millisecond", "ms");
z("millisecond", 16);
y("S", It, Ss);
y("SS", It, K);
y("SSS", It, Ds);
var Ee, rn;
for (Ee = "SSSS"; Ee.length <= 9; Ee += "S")
  y(Ee, et);
function il(e, t) {
  t[Ue] = S(("0." + e) * 1e3);
}
for (Ee = "S"; Ee.length <= 9; Ee += "S")
  E(Ee, il);
rn = Ke("Milliseconds", !1);
g("z", 0, 0, "zoneAbbr");
g("zz", 0, 0, "zoneName");
function ol() {
  return this._isUTC ? "UTC" : "";
}
function ll() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var f = _t.prototype;
f.add = Ki;
f.calendar = io;
f.clone = oo;
f.diff = _o;
f.endOf = bo;
f.format = vo;
f.from = wo;
f.fromNow = ko;
f.to = Mo;
f.toNow = So;
f.get = ua;
f.invalidAt = Co;
f.isAfter = lo;
f.isBefore = uo;
f.isBetween = co;
f.isSame = fo;
f.isSameOrAfter = ho;
f.isSameOrBefore = mo;
f.isValid = Eo;
f.lang = Bs;
f.locale = Zs;
f.localeData = qs;
f.max = Pi;
f.min = Ri;
f.parsingFlags = No;
f.set = ca;
f.startOf = Do;
f.subtract = eo;
f.toArray = To;
f.toObject = Ro;
f.toDate = Oo;
f.toISOString = go;
f.inspect = po;
typeof Symbol < "u" && Symbol.for != null && (f[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
f.toJSON = Po;
f.toString = yo;
f.unix = xo;
f.valueOf = Yo;
f.creationData = Fo;
f.eraName = Ao;
f.eraNarrow = Uo;
f.eraAbbr = Io;
f.eraYear = jo;
f.year = Es;
f.isLeapYear = Ta;
f.weekYear = Bo;
f.isoWeekYear = qo;
f.quarter = f.quarters = rl;
f.month = Rs;
f.daysInMonth = Ya;
f.week = f.weeks = Fa;
f.isoWeek = f.isoWeeks = Wa;
f.weeksInYear = Ko;
f.weeksInWeekYear = el;
f.isoWeeksInYear = Jo;
f.isoWeeksInISOWeekYear = Qo;
f.date = tn;
f.day = f.days = Ba;
f.weekday = qa;
f.isoWeekday = Ja;
f.dayOfYear = sl;
f.hour = f.hours = ni;
f.minute = f.minutes = nl;
f.second = f.seconds = al;
f.millisecond = f.milliseconds = rn;
f.utcOffset = Ui;
f.utc = ji;
f.local = Vi;
f.parseZone = Hi;
f.hasAlignedHourOffset = Gi;
f.isDST = Xi;
f.isLocal = Zi;
f.isUtcOffset = Bi;
f.isUtc = Hs;
f.isUTC = Hs;
f.zoneAbbr = ol;
f.zoneName = ll;
f.dates = re(
  "dates accessor is deprecated. Use date instead.",
  tn
);
f.months = re(
  "months accessor is deprecated. Use month instead",
  Rs
);
f.years = re(
  "years accessor is deprecated. Use year instead",
  Es
);
f.zone = re(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Ii
);
f.isDSTShifted = re(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  zi
);
function ul(e) {
  return F(e * 1e3);
}
function cl() {
  return F.apply(null, arguments).parseZone();
}
function sn(e) {
  return e;
}
var T = kr.prototype;
T.calendar = Bn;
T.longDateFormat = Kn;
T.invalidDate = ta;
T.ordinal = na;
T.preparse = sn;
T.postformat = sn;
T.relativeTime = ia;
T.pastFuture = oa;
T.set = zn;
T.eras = Wo;
T.erasParse = Lo;
T.erasConvertYear = $o;
T.erasAbbrRegex = Ho;
T.erasNameRegex = Vo;
T.erasNarrowRegex = Go;
T.months = Ma;
T.monthsShort = Sa;
T.monthsParse = ba;
T.monthsRegex = Oa;
T.monthsShortRegex = xa;
T.week = Pa;
T.firstDayOfYear = Ca;
T.firstDayOfWeek = Na;
T.weekdays = Ha;
T.weekdaysMin = Xa;
T.weekdaysShort = Ga;
T.weekdaysParse = Za;
T.weekdaysRegex = Qa;
T.weekdaysShortRegex = Ka;
T.weekdaysMinRegex = ei;
T.isPM = ri;
T.meridiem = ai;
function Wt(e, t, r, s) {
  var n = xe(), a = me().set(s, t);
  return n[r](a, e);
}
function nn(e, t, r) {
  if (Ye(e) && (t = e, e = void 0), e = e || "", t != null)
    return Wt(e, t, r, "month");
  var s, n = [];
  for (s = 0; s < 12; s++)
    n[s] = Wt(e, s, r, "month");
  return n;
}
function Lr(e, t, r, s) {
  typeof e == "boolean" ? (Ye(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, Ye(t) && (r = t, t = void 0), t = t || "");
  var n = xe(), a = e ? n._week.dow : 0, o, l = [];
  if (r != null)
    return Wt(t, (r + a) % 7, s, "day");
  for (o = 0; o < 7; o++)
    l[o] = Wt(t, (o + a) % 7, s, "day");
  return l;
}
function fl(e, t) {
  return nn(e, t, "months");
}
function dl(e, t) {
  return nn(e, t, "monthsShort");
}
function hl(e, t, r) {
  return Lr(e, t, r, "weekdays");
}
function ml(e, t, r) {
  return Lr(e, t, r, "weekdaysShort");
}
function _l(e, t, r) {
  return Lr(e, t, r, "weekdaysMin");
}
Ne("en", {
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
    var t = e % 10, r = S(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
h.lang = re(
  "moment.lang is deprecated. Use moment.locale instead.",
  Ne
);
h.langData = re(
  "moment.langData is deprecated. Use moment.localeData instead.",
  xe
);
var we = Math.abs;
function yl() {
  var e = this._data;
  return this._milliseconds = we(this._milliseconds), this._days = we(this._days), this._months = we(this._months), e.milliseconds = we(e.milliseconds), e.seconds = we(e.seconds), e.minutes = we(e.minutes), e.hours = we(e.hours), e.months = we(e.months), e.years = we(e.years), this;
}
function an(e, t, r, s) {
  var n = ue(t, r);
  return e._milliseconds += s * n._milliseconds, e._days += s * n._days, e._months += s * n._months, e._bubble();
}
function gl(e, t) {
  return an(this, e, t, 1);
}
function pl(e, t) {
  return an(this, e, t, -1);
}
function ds(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function vl() {
  var e = this._milliseconds, t = this._days, r = this._months, s = this._data, n, a, o, l, u;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += ds(yr(r) + t) * 864e5, t = 0, r = 0), s.milliseconds = e % 1e3, n = te(e / 1e3), s.seconds = n % 60, a = te(n / 60), s.minutes = a % 60, o = te(a / 60), s.hours = o % 24, t += te(o / 24), u = te(on(t)), r += u, t -= ds(yr(u)), l = te(r / 12), r %= 12, s.days = t, s.months = r, s.years = l, this;
}
function on(e) {
  return e * 4800 / 146097;
}
function yr(e) {
  return e * 146097 / 4800;
}
function wl(e) {
  if (!this.isValid())
    return NaN;
  var t, r, s = this._milliseconds;
  if (e = se(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + s / 864e5, r = this._months + on(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(yr(this._months)), e) {
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
function kl() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + S(this._months / 12) * 31536e6 : NaN;
}
function Oe(e) {
  return function() {
    return this.as(e);
  };
}
var Ml = Oe("ms"), Sl = Oe("s"), Dl = Oe("m"), bl = Oe("h"), Yl = Oe("d"), xl = Oe("w"), Ol = Oe("M"), Tl = Oe("Q"), Rl = Oe("y");
function Pl() {
  return ue(this);
}
function El(e) {
  return e = se(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Ve(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Nl = Ve("milliseconds"), Cl = Ve("seconds"), Fl = Ve("minutes"), Wl = Ve("hours"), Ll = Ve("days"), $l = Ve("months"), Al = Ve("years");
function Ul() {
  return te(this.days() / 7);
}
var ke = Math.round, Ze = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  w: null,
  M: 11
};
function Il(e, t, r, s, n) {
  return n.relativeTime(t || 1, !!r, e, s);
}
function jl(e, t, r, s) {
  var n = ue(e).abs(), a = ke(n.as("s")), o = ke(n.as("m")), l = ke(n.as("h")), u = ke(n.as("d")), d = ke(n.as("M")), m = ke(n.as("w")), p = ke(n.as("y")), k = a <= r.ss && ["s", a] || a < r.s && ["ss", a] || o <= 1 && ["m"] || o < r.m && ["mm", o] || l <= 1 && ["h"] || l < r.h && ["hh", l] || u <= 1 && ["d"] || u < r.d && ["dd", u];
  return r.w != null && (k = k || m <= 1 && ["w"] || m < r.w && ["ww", m]), k = k || d <= 1 && ["M"] || d < r.M && ["MM", d] || p <= 1 && ["y"] || ["yy", p], k[2] = t, k[3] = +e > 0, k[4] = s, Il.apply(null, k);
}
function Vl(e) {
  return e === void 0 ? ke : typeof e == "function" ? (ke = e, !0) : !1;
}
function Hl(e, t) {
  return Ze[e] === void 0 ? !1 : t === void 0 ? Ze[e] : (Ze[e] = t, e === "s" && (Ze.ss = t - 1), !0);
}
function Gl(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, s = Ze, n, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (s = Object.assign({}, Ze, t), t.s != null && t.ss == null && (s.ss = t.s - 1)), n = this.localeData(), a = jl(this, !r, s, n), r && (a = n.pastFuture(+this, a)), n.postformat(a);
}
var or = Math.abs;
function Xe(e) {
  return (e > 0) - (e < 0) || +e;
}
function Bt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = or(this._milliseconds) / 1e3, t = or(this._days), r = or(this._months), s, n, a, o, l = this.asSeconds(), u, d, m, p;
  return l ? (s = te(e / 60), n = te(s / 60), e %= 60, s %= 60, a = te(r / 12), r %= 12, o = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = l < 0 ? "-" : "", d = Xe(this._months) !== Xe(l) ? "-" : "", m = Xe(this._days) !== Xe(l) ? "-" : "", p = Xe(this._milliseconds) !== Xe(l) ? "-" : "", u + "P" + (a ? d + a + "Y" : "") + (r ? d + r + "M" : "") + (t ? m + t + "D" : "") + (n || s || e ? "T" : "") + (n ? p + n + "H" : "") + (s ? p + s + "M" : "") + (e ? p + o + "S" : "")) : "P0D";
}
var x = zt.prototype;
x.isValid = Wi;
x.abs = yl;
x.add = gl;
x.subtract = pl;
x.as = wl;
x.asMilliseconds = Ml;
x.asSeconds = Sl;
x.asMinutes = Dl;
x.asHours = bl;
x.asDays = Yl;
x.asWeeks = xl;
x.asMonths = Ol;
x.asQuarters = Tl;
x.asYears = Rl;
x.valueOf = kl;
x._bubble = vl;
x.clone = Pl;
x.get = El;
x.milliseconds = Nl;
x.seconds = Cl;
x.minutes = Fl;
x.hours = Wl;
x.days = Ll;
x.weeks = Ul;
x.months = $l;
x.years = Al;
x.humanize = Gl;
x.toISOString = Bt;
x.toString = Bt;
x.toJSON = Bt;
x.locale = Zs;
x.localeData = qs;
x.toIsoString = re(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Bt
);
x.lang = Bs;
g("X", 0, 0, "unix");
g("x", 0, 0, "valueOf");
y("x", Vt);
y("X", da);
E("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
E("x", function(e, t, r) {
  r._d = new Date(S(e));
});
//! moment.js
h.version = "2.29.4";
Gn(F);
h.fn = f;
h.min = Ei;
h.max = Ni;
h.now = Ci;
h.utc = me;
h.unix = ul;
h.months = fl;
h.isDate = mt;
h.locale = Ne;
h.invalid = $t;
h.duration = ue;
h.isMoment = le;
h.weekdays = hl;
h.parseZone = cl;
h.localeData = xe;
h.isDuration = Tt;
h.monthsShort = dl;
h.weekdaysMin = _l;
h.defineLocale = Tr;
h.updateLocale = ui;
h.locales = ci;
h.weekdaysShort = ml;
h.normalizeUnits = se;
h.relativeTimeRounding = Vl;
h.relativeTimeThreshold = Hl;
h.calendarFormat = ao;
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
const Xl = (e, t) => {
  const r = e.diff(t, "day");
  return Math.round(r * 10 / 7) / 10;
}, zl = (e, t) => {
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
}, gr = (e, t, r) => r === "month" ? zl(e, t) : r === "week" ? Xl(e, t) : 0, Zl = ({
  patient: e,
  showlabels: t = !0,
  showlines: r = !0
}) => {
  const s = Ce(), [n, a] = Me([]), [o, l] = Me([]), [u, d] = Me("");
  return Fn(() => {
    let m = "";
    const p = [], k = [];
    e.measures.forEach((P, H) => {
      if (!P)
        return;
      const I = h(P.date), q = h(e.birthdate);
      let $ = s.getDataset().getUnitX();
      $ === "year" && ($ = "month");
      const C = gr(I, q, $), ce = P[s.getDataset().getDataType()];
      if (!ce)
        return;
      const ne = s.getDataset().getPercentileForValue(C, ce), fe = s.transformX(C), tt = s.transformY(ce) || 0;
      if (fe == null || fe <= 0 || fe >= s.getMeasures().width)
        return;
      const Fe = s.getMeasures().left + fe, Te = s.getMeasures().bottom - tt;
      Number.isNaN(Te) || (t && k.push(/* @__PURE__ */ v("text", {
        name: `label-${H}`,
        className: "percentile-label",
        x: Fe,
        y: Te - 10,
        textAnchor: "middle",
        fill: e.color || "red",
        children: ne
      }, `label-${H}`)), p.push(/* @__PURE__ */ v("g", {
        id: `dot-${H}`,
        children: /* @__PURE__ */ v("circle", {
          className: "percentile-point",
          cx: Fe,
          cy: Te,
          r: 3,
          fill: e.color || "red"
        })
      }, `dot-${H}`)), m += `${m.length ? "L" : "M"}${Fe} ${Te} `);
    }), d(m), l(p), a(k);
  }, [e, s, t]), /* @__PURE__ */ je("g", {
    name: "patient-data",
    className: "patient-data",
    children: [r ? /* @__PURE__ */ v("path", {
      className: "percentile-line",
      d: u,
      stroke: e.color || "red"
    }) : "", n, o]
  });
}, Bl = () => {
  const e = Ce(), t = [];
  for (let r = 0; r < e.getDataset().percentiles.length; r += 1) {
    const s = e.getDataset().percentiles[r], n = e.getDataset().getPercentilePoints(r);
    let a = "", o = 0, l = 0;
    n.forEach((u, d) => {
      const m = e.transformX(u[0]) + e.getMeasures().left, p = e.getMeasures().bottom - e.transformY(u[1]);
      a += d === 0 ? "M" : "L", a += `${m} ${p} `, d === n.length - 1 && (o = m, l = p);
    }), t.push(/* @__PURE__ */ v("path", {
      className: `percentile-curve${r === 0 || r === e.getDataset().percentiles.length - 1 ? " dotted" : ""}`,
      name: `percentile-${s}`,
      d: a
    }, `percentile-curve-${s}`)), t.push(/* @__PURE__ */ v("text", {
      className: "percentile-label",
      x: o - 3,
      y: l - 3,
      textAnchor: "end",
      children: `${s}th`
    }, `percentile-label-${s}`));
  }
  return /* @__PURE__ */ v("g", {
    name: "percentiles",
    className: "percentiles",
    children: t
  });
}, $e = 180, Ae = 42, Re = 3, Yt = 3, ql = ({
  x: e = 0,
  y: t = 0,
  visible: r = !1,
  title: s,
  value: n
}) => {
  let a = e - $e - Yt, o = t - Ae - Yt;
  (a < 0 || o < 0) && (a = e + Yt, o = t + Yt);
  const l = () => {
    const u = `${Re} 0`, d = `${$e - Re} 0`, m = `${$e - 1} 1`, p = `${$e} ${Re}`, k = `${$e} ${Ae - Re}`, P = `${$e - 1} ${Ae - 1}`, H = `${$e - Re} ${Ae}`, I = `${Re} ${Ae}`, q = `1 ${Ae - 1}`, $ = `0 ${Ae - Re}`, C = `0 ${Re}`, ce = "1 1";
    return `M${u} L ${d} C ${m}, ${m}, ${p} L ${k} C ${P}, ${P}, ${H} L ${I} C ${q}, ${q}, ${$} L ${C} C ${ce}, ${ce}, ${u}`;
  };
  return /* @__PURE__ */ je($n, {
    children: [/* @__PURE__ */ v("defs", {
      children: /* @__PURE__ */ v("clipPath", {
        id: "clip",
        children: /* @__PURE__ */ v("path", {
          d: l()
        })
      })
    }), /* @__PURE__ */ je("g", {
      className: "tooltip",
      transform: r ? `translate(${a},${o})` : "translate(-200,-60)",
      style: {
        transition: "all .3s ease-in-out"
      },
      visibility: r ? "visible" : "hidden",
      clipPath: "url(#clip)",
      children: [/* @__PURE__ */ v("path", {
        d: l()
      }), /* @__PURE__ */ v("text", {
        x: 5,
        y: 15,
        children: s
      }), /* @__PURE__ */ v("text", {
        x: 5,
        y: 35,
        children: n
      })]
    })]
  });
}, Jl = ({
  patient: e,
  showTooltip: t
}) => {
  const r = Ce(), s = r.getDataset(), n = s.getShortNames();
  let a = s.getUnitX();
  a === "year" && (a = "month");
  const o = h(e.birthdate), l = (m) => {
    const p = h(m.date);
    let k = "";
    const P = p.diff(o, "year");
    if (P >= 1) {
      const I = p.diff(o, "month") - 12 * P;
      k = `${P} ${n.year}, ${I} ${n.month}`;
    } else {
      const I = p.diff(o, "day"), q = p.diff(o, "month");
      if (I <= 91) {
        const $ = Math.trunc(I / 7), C = I - $ * 7;
        k = `${$} ${n.week}, ${C} ${n.day}`;
      } else
        k = `${q} ${n.month}`;
    }
    return `${h(m.date).format("DD.MM.YYYY")} (${k})`;
  }, u = (m) => {
    const p = h(m.date), k = gr(p, o, a), P = m[s.getDataType()] || 0, H = s.getPercentileForValue(k, P);
    return `${s.titleY}: ${m[s.dataType]} (${H}%)`;
  }, d = [];
  return e.measures.forEach((m, p) => {
    if (!m)
      return;
    const k = h(m.date), P = gr(k, o, a), H = m[r.getDataset().getDataType()], I = r.transformX(P);
    if (I == null || I < 0 || I > r.getMeasures().width)
      return;
    const q = r.getMeasures().left + I, $ = r.getMeasures().bottom - r.transformY(H);
    Number.isNaN($) || d.push(/* @__PURE__ */ v("g", {
      id: `touch-${p}`,
      children: /* @__PURE__ */ v("circle", {
        cx: q,
        cy: $,
        r: 6,
        stroke: "none",
        fill: "rgba(192,192,192,0.01)",
        onMouseEnter: () => {
          t(q, $, l(m), u(m));
        }
      })
    }, `touch-${p}`));
  }), /* @__PURE__ */ v("g", {
    name: "touch-areas",
    children: d
  });
}, Ql = 5, Kl = 10, eu = () => {
  const e = Ce(), t = ht(), r = e.getDataset().getUnitX() === "month" || e.getDataset().getUnitX() === "year" ? 6 : e.getDataset().getUnitX() === "week" ? 1 : 5, s = e.getDataset().getUnitX() === "month" || e.getDataset().getUnitX() === "year" ? 2 : 1, n = [], a = [];
  for (let l = 0; l < e.getMeasures().countX; l += 1) {
    const u = e.getMeasures().keys[l], d = e.getDataset().getUnitX() === "year" ? u % r === 0 : l % r === 0, m = e.getMeasures().left + l * e.getMeasures().stepX, p = e.getSize().height - e.getMargins().bottom, k = p + (d ? Kl : Ql);
    n.push(/* @__PURE__ */ v("line", {
      className: d ? "longtick" : "tick",
      x1: m,
      y1: p,
      x2: m,
      y2: k,
      stroke: t.axisColor
    }, `tick-${l}`)), (e.getDataset().getUnitX() === "year" ? u % 12 === 0 : l % (r * s) === 0) && a.push(/* @__PURE__ */ v("text", {
      name: "valuelabel",
      x: m,
      y: k + 2 + 10,
      textAnchor: "middle",
      children: e.getDataset().getUnitX() === "year" ? u / 12 : u
    }, `valuelabel-${l}`));
  }
  const o = e.getDataset().getTitleX();
  return /* @__PURE__ */ je("g", {
    name: "xaxis",
    className: "axis",
    children: [/* @__PURE__ */ v("line", {
      x1: e.getMeasures().left,
      y1: e.getMeasures().bottom,
      x2: e.getMeasures().right,
      y2: e.getMeasures().bottom,
      stroke: t.axisColor
    }), /* @__PURE__ */ v("g", {
      children: n
    }), /* @__PURE__ */ v("g", {
      children: a
    }), /* @__PURE__ */ v("text", {
      name: "axislabel",
      x: (e.getMargins().left + e.getMeasures().right) / 2,
      y: e.getSize().height - 5,
      textAnchor: "middle",
      children: o
    })]
  });
}, tu = 5, ru = 10, su = () => {
  const e = Ce(), t = ht(), r = 2, s = e.getMeasures().maxY - e.getMeasures().minY, n = e.getMeasures().height / s, a = [], o = [];
  for (let l = 0; l <= s; l += 1) {
    const u = l % e.getStep() === 0, d = e.getMeasures().left, m = d - (u ? ru : tu), p = e.getMeasures().bottom - l * n;
    a.push(/* @__PURE__ */ v("line", {
      className: u ? "longtick" : "tick",
      x1: d,
      y1: p,
      x2: m,
      y2: p,
      stroke: t.axisColor
    }, `tick-${l}`)), l % (e.getStep() * r) === 0 && o.push(/* @__PURE__ */ v("text", {
      name: "valuelabel",
      x: m - 3,
      y: p,
      textAnchor: "end",
      alignmentBaseline: "middle",
      children: e.getMeasures().minY + l
    }, `valuelabel-${l}`));
  }
  return /* @__PURE__ */ je("g", {
    name: "yaxis",
    className: "axis",
    children: [/* @__PURE__ */ v("line", {
      x1: e.getMeasures().left,
      y1: e.getMeasures().bottom,
      x2: e.getMeasures().left,
      y2: e.getMeasures().top,
      stroke: t.axisColor
    }), /* @__PURE__ */ v("g", {
      children: a
    }), /* @__PURE__ */ v("g", {
      children: o
    }), /* @__PURE__ */ v("text", {
      name: "axislabel",
      x: 20,
      y: (e.getMargins().top + e.getMeasures().bottom) / 2,
      textAnchor: "middle",
      transform: `rotate(-90 20 ${(e.getMargins().top + e.getMeasures().bottom) / 2})`,
      children: e.getDataset().getTitleY()
    })]
  });
};
class hs {
  constructor(t, r, s) {
    Y(this, "len");
    Y(this, "minValue");
    Y(this, "maxValue");
    this.len = t, this.minValue = r, this.maxValue = s;
  }
  transform(t) {
    return t < this.minValue ? 0 : t > this.maxValue ? this.len : this.len * (t - this.minValue) / (this.maxValue - this.minValue);
  }
}
class nu {
  constructor(t, r) {
    Y(this, "dataset");
    Y(this, "margins");
    Y(this, "step");
    Y(this, "onUpdate");
    Y(this, "size");
    Y(this, "left", 0);
    Y(this, "right", 0);
    Y(this, "top", 0);
    Y(this, "bottom", 0);
    Y(this, "width", 0);
    Y(this, "height", 0);
    Y(this, "keys", []);
    Y(this, "countX", 0);
    Y(this, "stepX", 0);
    Y(this, "minX", 0);
    Y(this, "maxX", 0);
    Y(this, "minY", 0);
    Y(this, "maxY", 0);
    Y(this, "transformationX");
    Y(this, "transformationY");
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
    this.minY = Math.floor((1 - l) * a / this.step) * this.step, this.maxY = Math.ceil((1 + l) * o / this.step) * this.step, this.transformationX = new hs(this.width, this.minX, this.maxX), this.transformationY = new hs(
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
const lr = {
  backgroundColor: "transparent",
  backdropFill: "#FFFDE7",
  axisColor: "#707070",
  gridColor: "#FFD54F",
  areaColor: "rgba(127,127,127, .3)"
}, uu = ({
  width: e = 800,
  height: t = 800,
  dataset: r,
  patients: s,
  theme: n = lr,
  showtitle: a = !0,
  showlabels: o = !0,
  showlines: l = !0
}) => {
  const [u, d] = Me(0), [m, p] = Me(0), [k, P] = Me(!1), [H, I] = Me(""), [q, $] = Me(""), [C, ce] = Me(), ne = st(() => {
    const J = new nu({
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
    let ye = e, ge = t;
    return Number.isNaN(ye) && (ye = 800, console.error("Error: width property must be a number. Using the default value")), Number.isNaN(ge) && (ge = 800, console.error("Error: height property must be a number. Using the default value")), J.setSize({
      width: ye,
      height: ge
    }), J;
  }, [r, e, t, a]), fe = st(() => n ? {
    ...lr,
    ...n
  } : lr, [n]), tt = st(() => a && ne ? /* @__PURE__ */ v("text", {
    name: "title",
    className: "title",
    x: ne.getSize().width / 2,
    y: 15,
    textAnchor: "middle",
    alignmentBaseline: "text-before-edge",
    children: r.title
  }) : null, [r, ne, a]), Fe = st(() => {
    let J;
    return Array.isArray(s) ? J = s : J = [s], J.map((ye, ge) => /* @__PURE__ */ v(Zl, {
      patient: ye,
      showlabels: o,
      showlines: l
    }, `patientdata-${ge}`));
  }, [s, o, l]), Te = st(() => {
    let J;
    return Array.isArray(s) ? J = s : J = [s], J.map((ye, ge) => /* @__PURE__ */ v(Jl, {
      patient: ye,
      showTooltip: (pt, ae, pe, We) => {
        d(pt), p(ae), P(!0), I(pe), $(We), clearTimeout(C), ce(setTimeout(() => {
          P(!1);
        }, 5e3));
      }
    }, `toucharea-${ge}`));
  }, [s, C]);
  return ne ? /* @__PURE__ */ v(An, {
    value: ne,
    children: /* @__PURE__ */ v(In, {
      value: fe,
      children: /* @__PURE__ */ je("svg", {
        width: ne.getSize().width,
        height: ne.getSize().height,
        style: {
          backgroundColor: fe.backgroundColor
        },
        children: [tt, /* @__PURE__ */ v(Vn, {}), /* @__PURE__ */ v(eu, {}), /* @__PURE__ */ v(su, {}), /* @__PURE__ */ v(Hn, {}), /* @__PURE__ */ v(jn, {}), /* @__PURE__ */ v(Bl, {}), Fe, /* @__PURE__ */ v(ql, {
          x: u,
          y: m,
          visible: k,
          title: H,
          value: q
        }), Te]
      })
    })
  }) : null;
}, xt = {
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
}, au = {
  year: "y",
  month: "m",
  week: "w",
  day: "d"
}, iu = {
  year: "a",
  month: "m",
  week: "s",
  day: "gg"
}, ur = {
  en: au,
  it: iu
};
class cu {
  constructor(t, r) {
    Y(this, "title");
    Y(this, "titleX");
    Y(this, "unitX");
    Y(this, "titleY");
    Y(this, "unitY");
    Y(this, "dataType");
    Y(this, "lmsdata");
    Y(this, "percentiles");
    Y(this, "shortNames");
    Y(this, "data", {});
    this.title = t.title, this.titleX = t.titleX, this.unitX = t.unitX, this.titleY = t.titleY, this.unitY = t.unitY, this.dataType = t.dataType, this.lmsdata = t.data, this.percentiles = r, this.shortNames = ur.en, this._buildData();
  }
  setLocale(t) {
    ur[t] && (this.shortNames = ur[t]);
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
        const u = xt[l];
        if (u === void 0)
          return;
        const d = a * (1 + n * o * u) ** (1 / n);
        t[s][l] = d;
      });
    }), this.data = t;
  }
  getPercentilePoints(t) {
    const r = this.percentiles[t], s = [], n = xt[r];
    return n === void 0 ? [] : (this.lmsdata.forEach((a) => {
      const o = a[0], l = a[1], u = a[2], d = a[3], m = u * (1 + l * d * n) ** (1 / l);
      s.push([o, m]);
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
    return Object.keys(xt).forEach((d) => {
      xt[Number(d)] < l && (u = Number(d));
    }), u;
  }
  getShortNames() {
    return this.shortNames;
  }
}
export {
  cu as Dataset,
  uu as PChart
};
