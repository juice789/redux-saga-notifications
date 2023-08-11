(function () {
	'use strict';

	function _mergeNamespaces(n, m) {
		m.forEach(function (e) {
			e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
				if (k !== 'default' && !(k in n)) {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		});
		return Object.freeze(n);
	}

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function getAugmentedNamespace(n) {
	  if (n.__esModule) return n;
	  var f = n.default;
		if (typeof f == "function") {
			var a = function a () {
				if (this instanceof a) {
	        return Reflect.construct(f, arguments, this.constructor);
				}
				return f.apply(this, arguments);
			};
			a.prototype = f.prototype;
	  } else a = {};
	  Object.defineProperty(a, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var react = {exports: {}};

	var react_production_min = {};

	/**
	 * @license React
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var l$3 = Symbol.for("react.element"),
	  n$4 = Symbol.for("react.portal"),
	  p$6 = Symbol.for("react.fragment"),
	  q$5 = Symbol.for("react.strict_mode"),
	  r$3 = Symbol.for("react.profiler"),
	  t$4 = Symbol.for("react.provider"),
	  u$3 = Symbol.for("react.context"),
	  v$5 = Symbol.for("react.forward_ref"),
	  w$5 = Symbol.for("react.suspense"),
	  x$2 = Symbol.for("react.memo"),
	  y$2 = Symbol.for("react.lazy"),
	  z$3 = Symbol.iterator;
	function A$3(a) {
	  if (null === a || "object" !== typeof a) return null;
	  a = z$3 && a[z$3] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}
	var B$2 = {
	    isMounted: function () {
	      return !1;
	    },
	    enqueueForceUpdate: function () {},
	    enqueueReplaceState: function () {},
	    enqueueSetState: function () {}
	  },
	  C$2 = Object.assign,
	  D$2 = {};
	function E$2(a, b, e) {
	  this.props = a;
	  this.context = b;
	  this.refs = D$2;
	  this.updater = e || B$2;
	}
	E$2.prototype.isReactComponent = {};
	E$2.prototype.setState = function (a, b) {
	  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	  this.updater.enqueueSetState(this, a, b, "setState");
	};
	E$2.prototype.forceUpdate = function (a) {
	  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};
	function F$1() {}
	F$1.prototype = E$2.prototype;
	function G$2(a, b, e) {
	  this.props = a;
	  this.context = b;
	  this.refs = D$2;
	  this.updater = e || B$2;
	}
	var H$2 = G$2.prototype = new F$1();
	H$2.constructor = G$2;
	C$2(H$2, E$2.prototype);
	H$2.isPureReactComponent = !0;
	var I$2 = Array.isArray,
	  J$1 = Object.prototype.hasOwnProperty,
	  K$2 = {
	    current: null
	  },
	  L$2 = {
	    key: !0,
	    ref: !0,
	    __self: !0,
	    __source: !0
	  };
	function M$2(a, b, e) {
	  var d,
	    c = {},
	    k = null,
	    h = null;
	  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J$1.call(b, d) && !L$2.hasOwnProperty(d) && (c[d] = b[d]);
	  var g = arguments.length - 2;
	  if (1 === g) c.children = e;else if (1 < g) {
	    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
	    c.children = f;
	  }
	  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
	  return {
	    $$typeof: l$3,
	    type: a,
	    key: k,
	    ref: h,
	    props: c,
	    _owner: K$2.current
	  };
	}
	function N$2(a, b) {
	  return {
	    $$typeof: l$3,
	    type: a.type,
	    key: b,
	    ref: a.ref,
	    props: a.props,
	    _owner: a._owner
	  };
	}
	function O$1(a) {
	  return "object" === typeof a && null !== a && a.$$typeof === l$3;
	}
	function escape(a) {
	  var b = {
	    "=": "=0",
	    ":": "=2"
	  };
	  return "$" + a.replace(/[=:]/g, function (a) {
	    return b[a];
	  });
	}
	var P$2 = /\/+/g;
	function Q$2(a, b) {
	  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	}
	function R$1(a, b, e, d, c) {
	  var k = typeof a;
	  if ("undefined" === k || "boolean" === k) a = null;
	  var h = !1;
	  if (null === a) h = !0;else switch (k) {
	    case "string":
	    case "number":
	      h = !0;
	      break;
	    case "object":
	      switch (a.$$typeof) {
	        case l$3:
	        case n$4:
	          h = !0;
	      }
	  }
	  if (h) return h = a, c = c(h), a = "" === d ? "." + Q$2(h, 0) : d, I$2(c) ? (e = "", null != a && (e = a.replace(P$2, "$&/") + "/"), R$1(c, b, e, "", function (a) {
	    return a;
	  })) : null != c && (O$1(c) && (c = N$2(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$2, "$&/") + "/") + a)), b.push(c)), 1;
	  h = 0;
	  d = "" === d ? "." : d + ":";
	  if (I$2(a)) for (var g = 0; g < a.length; g++) {
	    k = a[g];
	    var f = d + Q$2(k, g);
	    h += R$1(k, b, e, f, c);
	  } else if (f = A$3(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q$2(k, g++), h += R$1(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
	  return h;
	}
	function S$2(a, b, e) {
	  if (null == a) return a;
	  var d = [],
	    c = 0;
	  R$1(a, d, "", "", function (a) {
	    return b.call(e, a, c++);
	  });
	  return d;
	}
	function T$2(a) {
	  if (-1 === a._status) {
	    var b = a._result;
	    b = b();
	    b.then(function (b) {
	      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
	    }, function (b) {
	      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
	    });
	    -1 === a._status && (a._status = 0, a._result = b);
	  }
	  if (1 === a._status) return a._result.default;
	  throw a._result;
	}
	var U$2 = {
	    current: null
	  },
	  V$2 = {
	    transition: null
	  },
	  W$2 = {
	    ReactCurrentDispatcher: U$2,
	    ReactCurrentBatchConfig: V$2,
	    ReactCurrentOwner: K$2
	  };
	react_production_min.Children = {
	  map: S$2,
	  forEach: function (a, b, e) {
	    S$2(a, function () {
	      b.apply(this, arguments);
	    }, e);
	  },
	  count: function (a) {
	    var b = 0;
	    S$2(a, function () {
	      b++;
	    });
	    return b;
	  },
	  toArray: function (a) {
	    return S$2(a, function (a) {
	      return a;
	    }) || [];
	  },
	  only: function (a) {
	    if (!O$1(a)) throw Error("React.Children.only expected to receive a single React element child.");
	    return a;
	  }
	};
	react_production_min.Component = E$2;
	react_production_min.Fragment = p$6;
	react_production_min.Profiler = r$3;
	react_production_min.PureComponent = G$2;
	react_production_min.StrictMode = q$5;
	react_production_min.Suspense = w$5;
	react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
	react_production_min.cloneElement = function (a, b, e) {
	  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
	  var d = C$2({}, a.props),
	    c = a.key,
	    k = a.ref,
	    h = a._owner;
	  if (null != b) {
	    void 0 !== b.ref && (k = b.ref, h = K$2.current);
	    void 0 !== b.key && (c = "" + b.key);
	    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
	    for (f in b) J$1.call(b, f) && !L$2.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
	  }
	  var f = arguments.length - 2;
	  if (1 === f) d.children = e;else if (1 < f) {
	    g = Array(f);
	    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
	    d.children = g;
	  }
	  return {
	    $$typeof: l$3,
	    type: a.type,
	    key: c,
	    ref: k,
	    props: d,
	    _owner: h
	  };
	};
	react_production_min.createContext = function (a) {
	  a = {
	    $$typeof: u$3,
	    _currentValue: a,
	    _currentValue2: a,
	    _threadCount: 0,
	    Provider: null,
	    Consumer: null,
	    _defaultValue: null,
	    _globalName: null
	  };
	  a.Provider = {
	    $$typeof: t$4,
	    _context: a
	  };
	  return a.Consumer = a;
	};
	react_production_min.createElement = M$2;
	react_production_min.createFactory = function (a) {
	  var b = M$2.bind(null, a);
	  b.type = a;
	  return b;
	};
	react_production_min.createRef = function () {
	  return {
	    current: null
	  };
	};
	react_production_min.forwardRef = function (a) {
	  return {
	    $$typeof: v$5,
	    render: a
	  };
	};
	react_production_min.isValidElement = O$1;
	react_production_min.lazy = function (a) {
	  return {
	    $$typeof: y$2,
	    _payload: {
	      _status: -1,
	      _result: a
	    },
	    _init: T$2
	  };
	};
	react_production_min.memo = function (a, b) {
	  return {
	    $$typeof: x$2,
	    type: a,
	    compare: void 0 === b ? null : b
	  };
	};
	react_production_min.startTransition = function (a) {
	  var b = V$2.transition;
	  V$2.transition = {};
	  try {
	    a();
	  } finally {
	    V$2.transition = b;
	  }
	};
	react_production_min.unstable_act = function () {
	  throw Error("act(...) is not supported in production builds of React.");
	};
	react_production_min.useCallback = function (a, b) {
	  return U$2.current.useCallback(a, b);
	};
	react_production_min.useContext = function (a) {
	  return U$2.current.useContext(a);
	};
	react_production_min.useDebugValue = function () {};
	react_production_min.useDeferredValue = function (a) {
	  return U$2.current.useDeferredValue(a);
	};
	react_production_min.useEffect = function (a, b) {
	  return U$2.current.useEffect(a, b);
	};
	react_production_min.useId = function () {
	  return U$2.current.useId();
	};
	react_production_min.useImperativeHandle = function (a, b, e) {
	  return U$2.current.useImperativeHandle(a, b, e);
	};
	react_production_min.useInsertionEffect = function (a, b) {
	  return U$2.current.useInsertionEffect(a, b);
	};
	react_production_min.useLayoutEffect = function (a, b) {
	  return U$2.current.useLayoutEffect(a, b);
	};
	react_production_min.useMemo = function (a, b) {
	  return U$2.current.useMemo(a, b);
	};
	react_production_min.useReducer = function (a, b, e) {
	  return U$2.current.useReducer(a, b, e);
	};
	react_production_min.useRef = function (a) {
	  return U$2.current.useRef(a);
	};
	react_production_min.useState = function (a) {
	  return U$2.current.useState(a);
	};
	react_production_min.useSyncExternalStore = function (a, b, e) {
	  return U$2.current.useSyncExternalStore(a, b, e);
	};
	react_production_min.useTransition = function () {
	  return U$2.current.useTransition();
	};
	react_production_min.version = "18.2.0";

	{
	  react.exports = react_production_min;
	}

	var reactExports = react.exports;
	var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

	var React$1 = /*#__PURE__*/_mergeNamespaces({
		__proto__: null,
		default: React
	}, [reactExports]);

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler = {exports: {}};

	var scheduler_production_min = {};

	/**
	 * @license React
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function (exports) {

		function f(a, b) {
		  var c = a.length;
		  a.push(b);
		  a: for (; 0 < c;) {
		    var d = c - 1 >>> 1,
		      e = a[d];
		    if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;else break a;
		  }
		}
		function h(a) {
		  return 0 === a.length ? null : a[0];
		}
		function k(a) {
		  if (0 === a.length) return null;
		  var b = a[0],
		    c = a.pop();
		  if (c !== b) {
		    a[0] = c;
		    a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
		      var m = 2 * (d + 1) - 1,
		        C = a[m],
		        n = m + 1,
		        x = a[n];
		      if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;else break a;
		    }
		  }
		  return b;
		}
		function g(a, b) {
		  var c = a.sortIndex - b.sortIndex;
		  return 0 !== c ? c : a.id - b.id;
		}
		if ("object" === typeof performance && "function" === typeof performance.now) {
		  var l = performance;
		  exports.unstable_now = function () {
		    return l.now();
		  };
		} else {
		  var p = Date,
		    q = p.now();
		  exports.unstable_now = function () {
		    return p.now() - q;
		  };
		}
		var r = [],
		  t = [],
		  u = 1,
		  v = null,
		  y = 3,
		  z = !1,
		  A = !1,
		  B = !1,
		  D = "function" === typeof setTimeout ? setTimeout : null,
		  E = "function" === typeof clearTimeout ? clearTimeout : null,
		  F = "undefined" !== typeof setImmediate ? setImmediate : null;
		"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
		function G(a) {
		  for (var b = h(t); null !== b;) {
		    if (null === b.callback) k(t);else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);else break;
		    b = h(t);
		  }
		}
		function H(a) {
		  B = !1;
		  G(a);
		  if (!A) if (null !== h(r)) A = !0, I(J);else {
		    var b = h(t);
		    null !== b && K(H, b.startTime - a);
		  }
		}
		function J(a, b) {
		  A = !1;
		  B && (B = !1, E(L), L = -1);
		  z = !0;
		  var c = y;
		  try {
		    G(b);
		    for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
		      var d = v.callback;
		      if ("function" === typeof d) {
		        v.callback = null;
		        y = v.priorityLevel;
		        var e = d(v.expirationTime <= b);
		        b = exports.unstable_now();
		        "function" === typeof e ? v.callback = e : v === h(r) && k(r);
		        G(b);
		      } else k(r);
		      v = h(r);
		    }
		    if (null !== v) var w = !0;else {
		      var m = h(t);
		      null !== m && K(H, m.startTime - b);
		      w = !1;
		    }
		    return w;
		  } finally {
		    v = null, y = c, z = !1;
		  }
		}
		var N = !1,
		  O = null,
		  L = -1,
		  P = 5,
		  Q = -1;
		function M() {
		  return exports.unstable_now() - Q < P ? !1 : !0;
		}
		function R() {
		  if (null !== O) {
		    var a = exports.unstable_now();
		    Q = a;
		    var b = !0;
		    try {
		      b = O(!0, a);
		    } finally {
		      b ? S() : (N = !1, O = null);
		    }
		  } else N = !1;
		}
		var S;
		if ("function" === typeof F) S = function () {
		  F(R);
		};else if ("undefined" !== typeof MessageChannel) {
		  var T = new MessageChannel(),
		    U = T.port2;
		  T.port1.onmessage = R;
		  S = function () {
		    U.postMessage(null);
		  };
		} else S = function () {
		  D(R, 0);
		};
		function I(a) {
		  O = a;
		  N || (N = !0, S());
		}
		function K(a, b) {
		  L = D(function () {
		    a(exports.unstable_now());
		  }, b);
		}
		exports.unstable_IdlePriority = 5;
		exports.unstable_ImmediatePriority = 1;
		exports.unstable_LowPriority = 4;
		exports.unstable_NormalPriority = 3;
		exports.unstable_Profiling = null;
		exports.unstable_UserBlockingPriority = 2;
		exports.unstable_cancelCallback = function (a) {
		  a.callback = null;
		};
		exports.unstable_continueExecution = function () {
		  A || z || (A = !0, I(J));
		};
		exports.unstable_forceFrameRate = function (a) {
		  0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
		};
		exports.unstable_getCurrentPriorityLevel = function () {
		  return y;
		};
		exports.unstable_getFirstCallbackNode = function () {
		  return h(r);
		};
		exports.unstable_next = function (a) {
		  switch (y) {
		    case 1:
		    case 2:
		    case 3:
		      var b = 3;
		      break;
		    default:
		      b = y;
		  }
		  var c = y;
		  y = b;
		  try {
		    return a();
		  } finally {
		    y = c;
		  }
		};
		exports.unstable_pauseExecution = function () {};
		exports.unstable_requestPaint = function () {};
		exports.unstable_runWithPriority = function (a, b) {
		  switch (a) {
		    case 1:
		    case 2:
		    case 3:
		    case 4:
		    case 5:
		      break;
		    default:
		      a = 3;
		  }
		  var c = y;
		  y = a;
		  try {
		    return b();
		  } finally {
		    y = c;
		  }
		};
		exports.unstable_scheduleCallback = function (a, b, c) {
		  var d = exports.unstable_now();
		  "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
		  switch (a) {
		    case 1:
		      var e = -1;
		      break;
		    case 2:
		      e = 250;
		      break;
		    case 5:
		      e = 1073741823;
		      break;
		    case 4:
		      e = 1E4;
		      break;
		    default:
		      e = 5E3;
		  }
		  e = c + e;
		  a = {
		    id: u++,
		    callback: b,
		    priorityLevel: a,
		    startTime: c,
		    expirationTime: e,
		    sortIndex: -1
		  };
		  c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
		  return a;
		};
		exports.unstable_shouldYield = M;
		exports.unstable_wrapCallback = function (a) {
		  var b = y;
		  return function () {
		    var c = y;
		    y = b;
		    try {
		      return a.apply(this, arguments);
		    } finally {
		      y = c;
		    }
		  };
		}; 
	} (scheduler_production_min));

	{
	  scheduler.exports = scheduler_production_min;
	}

	var schedulerExports = scheduler.exports;

	/**
	 * @license React
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var aa = reactExports,
	  ca = schedulerExports;
	function p$5(a) {
	  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
	  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var da = new Set(),
	  ea = {};
	function fa(a, b) {
	  ha(a, b);
	  ha(a + "Capture", b);
	}
	function ha(a, b) {
	  ea[a] = b;
	  for (a = 0; a < b.length; a++) da.add(b[a]);
	}
	var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
	  ja = Object.prototype.hasOwnProperty,
	  ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	  la = {},
	  ma = {};
	function oa(a) {
	  if (ja.call(ma, a)) return !0;
	  if (ja.call(la, a)) return !1;
	  if (ka.test(a)) return ma[a] = !0;
	  la[a] = !0;
	  return !1;
	}
	function pa(a, b, c, d) {
	  if (null !== c && 0 === c.type) return !1;
	  switch (typeof b) {
	    case "function":
	    case "symbol":
	      return !0;
	    case "boolean":
	      if (d) return !1;
	      if (null !== c) return !c.acceptsBooleans;
	      a = a.toLowerCase().slice(0, 5);
	      return "data-" !== a && "aria-" !== a;
	    default:
	      return !1;
	  }
	}
	function qa(a, b, c, d) {
	  if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
	  if (d) return !1;
	  if (null !== c) switch (c.type) {
	    case 3:
	      return !b;
	    case 4:
	      return !1 === b;
	    case 5:
	      return isNaN(b);
	    case 6:
	      return isNaN(b) || 1 > b;
	  }
	  return !1;
	}
	function v$4(a, b, c, d, e, f, g) {
	  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
	  this.attributeName = d;
	  this.attributeNamespace = e;
	  this.mustUseProperty = c;
	  this.propertyName = a;
	  this.type = b;
	  this.sanitizeURL = f;
	  this.removeEmptyString = g;
	}
	var z$2 = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
	  z$2[a] = new v$4(a, 0, !1, a, null, !1, !1);
	});
	[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
	  var b = a[0];
	  z$2[b] = new v$4(b, 1, !1, a[1], null, !1, !1);
	});
	["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
	  z$2[a] = new v$4(a, 2, !1, a.toLowerCase(), null, !1, !1);
	});
	["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
	  z$2[a] = new v$4(a, 2, !1, a, null, !1, !1);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
	  z$2[a] = new v$4(a, 3, !1, a.toLowerCase(), null, !1, !1);
	});
	["checked", "multiple", "muted", "selected"].forEach(function (a) {
	  z$2[a] = new v$4(a, 3, !0, a, null, !1, !1);
	});
	["capture", "download"].forEach(function (a) {
	  z$2[a] = new v$4(a, 4, !1, a, null, !1, !1);
	});
	["cols", "rows", "size", "span"].forEach(function (a) {
	  z$2[a] = new v$4(a, 6, !1, a, null, !1, !1);
	});
	["rowSpan", "start"].forEach(function (a) {
	  z$2[a] = new v$4(a, 5, !1, a.toLowerCase(), null, !1, !1);
	});
	var ra = /[\-:]([a-z])/g;
	function sa(a) {
	  return a[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
	  var b = a.replace(ra, sa);
	  z$2[b] = new v$4(b, 1, !1, a, null, !1, !1);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
	  var b = a.replace(ra, sa);
	  z$2[b] = new v$4(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
	});
	["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
	  var b = a.replace(ra, sa);
	  z$2[b] = new v$4(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
	});
	["tabIndex", "crossOrigin"].forEach(function (a) {
	  z$2[a] = new v$4(a, 1, !1, a.toLowerCase(), null, !1, !1);
	});
	z$2.xlinkHref = new v$4("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
	["src", "href", "action", "formAction"].forEach(function (a) {
	  z$2[a] = new v$4(a, 1, !1, a.toLowerCase(), null, !0, !0);
	});
	function ta(a, b, c, d) {
	  var e = z$2.hasOwnProperty(b) ? z$2[b] : null;
	  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
	}
	var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	  va = Symbol.for("react.element"),
	  wa = Symbol.for("react.portal"),
	  ya = Symbol.for("react.fragment"),
	  za = Symbol.for("react.strict_mode"),
	  Aa = Symbol.for("react.profiler"),
	  Ba = Symbol.for("react.provider"),
	  Ca = Symbol.for("react.context"),
	  Da = Symbol.for("react.forward_ref"),
	  Ea = Symbol.for("react.suspense"),
	  Fa = Symbol.for("react.suspense_list"),
	  Ga = Symbol.for("react.memo"),
	  Ha = Symbol.for("react.lazy");
	var Ia = Symbol.for("react.offscreen");
	var Ja = Symbol.iterator;
	function Ka(a) {
	  if (null === a || "object" !== typeof a) return null;
	  a = Ja && a[Ja] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}
	var A$2 = Object.assign,
	  La;
	function Ma(a) {
	  if (void 0 === La) try {
	    throw Error();
	  } catch (c) {
	    var b = c.stack.trim().match(/\n( *(at )?)/);
	    La = b && b[1] || "";
	  }
	  return "\n" + La + a;
	}
	var Na = !1;
	function Oa(a, b) {
	  if (!a || Na) return "";
	  Na = !0;
	  var c = Error.prepareStackTrace;
	  Error.prepareStackTrace = void 0;
	  try {
	    if (b) {
	      if (b = function () {
	        throw Error();
	      }, Object.defineProperty(b.prototype, "props", {
	        set: function () {
	          throw Error();
	        }
	      }), "object" === typeof Reflect && Reflect.construct) {
	        try {
	          Reflect.construct(b, []);
	        } catch (l) {
	          var d = l;
	        }
	        Reflect.construct(a, [], b);
	      } else {
	        try {
	          b.call();
	        } catch (l) {
	          d = l;
	        }
	        a.call(b.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (l) {
	        d = l;
	      }
	      a();
	    }
	  } catch (l) {
	    if (l && d && "string" === typeof l.stack) {
	      for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
	      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
	        if (1 !== g || 1 !== h) {
	          do if (g--, h--, 0 > h || e[g] !== f[h]) {
	            var k = "\n" + e[g].replace(" at new ", " at ");
	            a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
	            return k;
	          } while (1 <= g && 0 <= h);
	        }
	        break;
	      }
	    }
	  } finally {
	    Na = !1, Error.prepareStackTrace = c;
	  }
	  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
	}
	function Pa(a) {
	  switch (a.tag) {
	    case 5:
	      return Ma(a.type);
	    case 16:
	      return Ma("Lazy");
	    case 13:
	      return Ma("Suspense");
	    case 19:
	      return Ma("SuspenseList");
	    case 0:
	    case 2:
	    case 15:
	      return a = Oa(a.type, !1), a;
	    case 11:
	      return a = Oa(a.type.render, !1), a;
	    case 1:
	      return a = Oa(a.type, !0), a;
	    default:
	      return "";
	  }
	}
	function Qa(a) {
	  if (null == a) return null;
	  if ("function" === typeof a) return a.displayName || a.name || null;
	  if ("string" === typeof a) return a;
	  switch (a) {
	    case ya:
	      return "Fragment";
	    case wa:
	      return "Portal";
	    case Aa:
	      return "Profiler";
	    case za:
	      return "StrictMode";
	    case Ea:
	      return "Suspense";
	    case Fa:
	      return "SuspenseList";
	  }
	  if ("object" === typeof a) switch (a.$$typeof) {
	    case Ca:
	      return (a.displayName || "Context") + ".Consumer";
	    case Ba:
	      return (a._context.displayName || "Context") + ".Provider";
	    case Da:
	      var b = a.render;
	      a = a.displayName;
	      a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
	      return a;
	    case Ga:
	      return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
	    case Ha:
	      b = a._payload;
	      a = a._init;
	      try {
	        return Qa(a(b));
	      } catch (c) {}
	  }
	  return null;
	}
	function Ra(a) {
	  var b = a.type;
	  switch (a.tag) {
	    case 24:
	      return "Cache";
	    case 9:
	      return (b.displayName || "Context") + ".Consumer";
	    case 10:
	      return (b._context.displayName || "Context") + ".Provider";
	    case 18:
	      return "DehydratedFragment";
	    case 11:
	      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
	    case 7:
	      return "Fragment";
	    case 5:
	      return b;
	    case 4:
	      return "Portal";
	    case 3:
	      return "Root";
	    case 6:
	      return "Text";
	    case 16:
	      return Qa(b);
	    case 8:
	      return b === za ? "StrictMode" : "Mode";
	    case 22:
	      return "Offscreen";
	    case 12:
	      return "Profiler";
	    case 21:
	      return "Scope";
	    case 13:
	      return "Suspense";
	    case 19:
	      return "SuspenseList";
	    case 25:
	      return "TracingMarker";
	    case 1:
	    case 0:
	    case 17:
	    case 2:
	    case 14:
	    case 15:
	      if ("function" === typeof b) return b.displayName || b.name || null;
	      if ("string" === typeof b) return b;
	  }
	  return null;
	}
	function Sa(a) {
	  switch (typeof a) {
	    case "boolean":
	    case "number":
	    case "string":
	    case "undefined":
	      return a;
	    case "object":
	      return a;
	    default:
	      return "";
	  }
	}
	function Ta(a) {
	  var b = a.type;
	  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
	}
	function Ua(a) {
	  var b = Ta(a) ? "checked" : "value",
	    c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
	    d = "" + a[b];
	  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
	    var e = c.get,
	      f = c.set;
	    Object.defineProperty(a, b, {
	      configurable: !0,
	      get: function () {
	        return e.call(this);
	      },
	      set: function (a) {
	        d = "" + a;
	        f.call(this, a);
	      }
	    });
	    Object.defineProperty(a, b, {
	      enumerable: c.enumerable
	    });
	    return {
	      getValue: function () {
	        return d;
	      },
	      setValue: function (a) {
	        d = "" + a;
	      },
	      stopTracking: function () {
	        a._valueTracker = null;
	        delete a[b];
	      }
	    };
	  }
	}
	function Va(a) {
	  a._valueTracker || (a._valueTracker = Ua(a));
	}
	function Wa(a) {
	  if (!a) return !1;
	  var b = a._valueTracker;
	  if (!b) return !0;
	  var c = b.getValue();
	  var d = "";
	  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
	  a = d;
	  return a !== c ? (b.setValue(a), !0) : !1;
	}
	function Xa(a) {
	  a = a || ("undefined" !== typeof document ? document : void 0);
	  if ("undefined" === typeof a) return null;
	  try {
	    return a.activeElement || a.body;
	  } catch (b) {
	    return a.body;
	  }
	}
	function Ya(a, b) {
	  var c = b.checked;
	  return A$2({}, b, {
	    defaultChecked: void 0,
	    defaultValue: void 0,
	    value: void 0,
	    checked: null != c ? c : a._wrapperState.initialChecked
	  });
	}
	function Za(a, b) {
	  var c = null == b.defaultValue ? "" : b.defaultValue,
	    d = null != b.checked ? b.checked : b.defaultChecked;
	  c = Sa(null != b.value ? b.value : c);
	  a._wrapperState = {
	    initialChecked: d,
	    initialValue: c,
	    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
	  };
	}
	function ab(a, b) {
	  b = b.checked;
	  null != b && ta(a, "checked", b, !1);
	}
	function bb(a, b) {
	  ab(a, b);
	  var c = Sa(b.value),
	    d = b.type;
	  if (null != c) {
	    if ("number" === d) {
	      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
	    } else a.value !== "" + c && (a.value = "" + c);
	  } else if ("submit" === d || "reset" === d) {
	    a.removeAttribute("value");
	    return;
	  }
	  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
	  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	}
	function db(a, b, c) {
	  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
	    var d = b.type;
	    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
	    b = "" + a._wrapperState.initialValue;
	    c || b === a.value || (a.value = b);
	    a.defaultValue = b;
	  }
	  c = a.name;
	  "" !== c && (a.name = "");
	  a.defaultChecked = !!a._wrapperState.initialChecked;
	  "" !== c && (a.name = c);
	}
	function cb(a, b, c) {
	  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	}
	var eb = Array.isArray;
	function fb(a, b, c, d) {
	  a = a.options;
	  if (b) {
	    b = {};
	    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
	    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
	  } else {
	    c = "" + Sa(c);
	    b = null;
	    for (e = 0; e < a.length; e++) {
	      if (a[e].value === c) {
	        a[e].selected = !0;
	        d && (a[e].defaultSelected = !0);
	        return;
	      }
	      null !== b || a[e].disabled || (b = a[e]);
	    }
	    null !== b && (b.selected = !0);
	  }
	}
	function gb(a, b) {
	  if (null != b.dangerouslySetInnerHTML) throw Error(p$5(91));
	  return A$2({}, b, {
	    value: void 0,
	    defaultValue: void 0,
	    children: "" + a._wrapperState.initialValue
	  });
	}
	function hb(a, b) {
	  var c = b.value;
	  if (null == c) {
	    c = b.children;
	    b = b.defaultValue;
	    if (null != c) {
	      if (null != b) throw Error(p$5(92));
	      if (eb(c)) {
	        if (1 < c.length) throw Error(p$5(93));
	        c = c[0];
	      }
	      b = c;
	    }
	    null == b && (b = "");
	    c = b;
	  }
	  a._wrapperState = {
	    initialValue: Sa(c)
	  };
	}
	function ib(a, b) {
	  var c = Sa(b.value),
	    d = Sa(b.defaultValue);
	  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
	  null != d && (a.defaultValue = "" + d);
	}
	function jb(a) {
	  var b = a.textContent;
	  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
	}
	function kb(a) {
	  switch (a) {
	    case "svg":
	      return "http://www.w3.org/2000/svg";
	    case "math":
	      return "http://www.w3.org/1998/Math/MathML";
	    default:
	      return "http://www.w3.org/1999/xhtml";
	  }
	}
	function lb(a, b) {
	  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	}
	var mb,
	  nb = function (a) {
	    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
	      MSApp.execUnsafeLocalFunction(function () {
	        return a(b, c, d, e);
	      });
	    } : a;
	  }(function (a, b) {
	    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;else {
	      mb = mb || document.createElement("div");
	      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
	      for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
	      for (; b.firstChild;) a.appendChild(b.firstChild);
	    }
	  });
	function ob(a, b) {
	  if (b) {
	    var c = a.firstChild;
	    if (c && c === a.lastChild && 3 === c.nodeType) {
	      c.nodeValue = b;
	      return;
	    }
	  }
	  a.textContent = b;
	}
	var pb = {
	    animationIterationCount: !0,
	    aspectRatio: !0,
	    borderImageOutset: !0,
	    borderImageSlice: !0,
	    borderImageWidth: !0,
	    boxFlex: !0,
	    boxFlexGroup: !0,
	    boxOrdinalGroup: !0,
	    columnCount: !0,
	    columns: !0,
	    flex: !0,
	    flexGrow: !0,
	    flexPositive: !0,
	    flexShrink: !0,
	    flexNegative: !0,
	    flexOrder: !0,
	    gridArea: !0,
	    gridRow: !0,
	    gridRowEnd: !0,
	    gridRowSpan: !0,
	    gridRowStart: !0,
	    gridColumn: !0,
	    gridColumnEnd: !0,
	    gridColumnSpan: !0,
	    gridColumnStart: !0,
	    fontWeight: !0,
	    lineClamp: !0,
	    lineHeight: !0,
	    opacity: !0,
	    order: !0,
	    orphans: !0,
	    tabSize: !0,
	    widows: !0,
	    zIndex: !0,
	    zoom: !0,
	    fillOpacity: !0,
	    floodOpacity: !0,
	    stopOpacity: !0,
	    strokeDasharray: !0,
	    strokeDashoffset: !0,
	    strokeMiterlimit: !0,
	    strokeOpacity: !0,
	    strokeWidth: !0
	  },
	  qb = ["Webkit", "ms", "Moz", "O"];
	Object.keys(pb).forEach(function (a) {
	  qb.forEach(function (b) {
	    b = b + a.charAt(0).toUpperCase() + a.substring(1);
	    pb[b] = pb[a];
	  });
	});
	function rb(a, b, c) {
	  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
	}
	function sb(a, b) {
	  a = a.style;
	  for (var c in b) if (b.hasOwnProperty(c)) {
	    var d = 0 === c.indexOf("--"),
	      e = rb(c, b[c], d);
	    "float" === c && (c = "cssFloat");
	    d ? a.setProperty(c, e) : a[c] = e;
	  }
	}
	var tb = A$2({
	  menuitem: !0
	}, {
	  area: !0,
	  base: !0,
	  br: !0,
	  col: !0,
	  embed: !0,
	  hr: !0,
	  img: !0,
	  input: !0,
	  keygen: !0,
	  link: !0,
	  meta: !0,
	  param: !0,
	  source: !0,
	  track: !0,
	  wbr: !0
	});
	function ub(a, b) {
	  if (b) {
	    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p$5(137, a));
	    if (null != b.dangerouslySetInnerHTML) {
	      if (null != b.children) throw Error(p$5(60));
	      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p$5(61));
	    }
	    if (null != b.style && "object" !== typeof b.style) throw Error(p$5(62));
	  }
	}
	function vb(a, b) {
	  if (-1 === a.indexOf("-")) return "string" === typeof b.is;
	  switch (a) {
	    case "annotation-xml":
	    case "color-profile":
	    case "font-face":
	    case "font-face-src":
	    case "font-face-uri":
	    case "font-face-format":
	    case "font-face-name":
	    case "missing-glyph":
	      return !1;
	    default:
	      return !0;
	  }
	}
	var wb = null;
	function xb(a) {
	  a = a.target || a.srcElement || window;
	  a.correspondingUseElement && (a = a.correspondingUseElement);
	  return 3 === a.nodeType ? a.parentNode : a;
	}
	var yb = null,
	  zb = null,
	  Ab = null;
	function Bb(a) {
	  if (a = Cb(a)) {
	    if ("function" !== typeof yb) throw Error(p$5(280));
	    var b = a.stateNode;
	    b && (b = Db(b), yb(a.stateNode, a.type, b));
	  }
	}
	function Eb(a) {
	  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
	}
	function Fb() {
	  if (zb) {
	    var a = zb,
	      b = Ab;
	    Ab = zb = null;
	    Bb(a);
	    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
	  }
	}
	function Gb(a, b) {
	  return a(b);
	}
	function Hb() {}
	var Ib = !1;
	function Jb(a, b, c) {
	  if (Ib) return a(b, c);
	  Ib = !0;
	  try {
	    return Gb(a, b, c);
	  } finally {
	    if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
	  }
	}
	function Kb(a, b) {
	  var c = a.stateNode;
	  if (null === c) return null;
	  var d = Db(c);
	  if (null === d) return null;
	  c = d[b];
	  a: switch (b) {
	    case "onClick":
	    case "onClickCapture":
	    case "onDoubleClick":
	    case "onDoubleClickCapture":
	    case "onMouseDown":
	    case "onMouseDownCapture":
	    case "onMouseMove":
	    case "onMouseMoveCapture":
	    case "onMouseUp":
	    case "onMouseUpCapture":
	    case "onMouseEnter":
	      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
	      a = !d;
	      break a;
	    default:
	      a = !1;
	  }
	  if (a) return null;
	  if (c && "function" !== typeof c) throw Error(p$5(231, b, typeof c));
	  return c;
	}
	var Lb = !1;
	if (ia) try {
	  var Mb = {};
	  Object.defineProperty(Mb, "passive", {
	    get: function () {
	      Lb = !0;
	    }
	  });
	  window.addEventListener("test", Mb, Mb);
	  window.removeEventListener("test", Mb, Mb);
	} catch (a) {
	  Lb = !1;
	}
	function Nb(a, b, c, d, e, f, g, h, k) {
	  var l = Array.prototype.slice.call(arguments, 3);
	  try {
	    b.apply(c, l);
	  } catch (m) {
	    this.onError(m);
	  }
	}
	var Ob = !1,
	  Pb = null,
	  Qb = !1,
	  Rb = null,
	  Sb = {
	    onError: function (a) {
	      Ob = !0;
	      Pb = a;
	    }
	  };
	function Tb(a, b, c, d, e, f, g, h, k) {
	  Ob = !1;
	  Pb = null;
	  Nb.apply(Sb, arguments);
	}
	function Ub(a, b, c, d, e, f, g, h, k) {
	  Tb.apply(this, arguments);
	  if (Ob) {
	    if (Ob) {
	      var l = Pb;
	      Ob = !1;
	      Pb = null;
	    } else throw Error(p$5(198));
	    Qb || (Qb = !0, Rb = l);
	  }
	}
	function Vb(a) {
	  var b = a,
	    c = a;
	  if (a.alternate) for (; b.return;) b = b.return;else {
	    a = b;
	    do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return; while (a);
	  }
	  return 3 === b.tag ? c : null;
	}
	function Wb(a) {
	  if (13 === a.tag) {
	    var b = a.memoizedState;
	    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
	    if (null !== b) return b.dehydrated;
	  }
	  return null;
	}
	function Xb(a) {
	  if (Vb(a) !== a) throw Error(p$5(188));
	}
	function Yb(a) {
	  var b = a.alternate;
	  if (!b) {
	    b = Vb(a);
	    if (null === b) throw Error(p$5(188));
	    return b !== a ? null : a;
	  }
	  for (var c = a, d = b;;) {
	    var e = c.return;
	    if (null === e) break;
	    var f = e.alternate;
	    if (null === f) {
	      d = e.return;
	      if (null !== d) {
	        c = d;
	        continue;
	      }
	      break;
	    }
	    if (e.child === f.child) {
	      for (f = e.child; f;) {
	        if (f === c) return Xb(e), a;
	        if (f === d) return Xb(e), b;
	        f = f.sibling;
	      }
	      throw Error(p$5(188));
	    }
	    if (c.return !== d.return) c = e, d = f;else {
	      for (var g = !1, h = e.child; h;) {
	        if (h === c) {
	          g = !0;
	          c = e;
	          d = f;
	          break;
	        }
	        if (h === d) {
	          g = !0;
	          d = e;
	          c = f;
	          break;
	        }
	        h = h.sibling;
	      }
	      if (!g) {
	        for (h = f.child; h;) {
	          if (h === c) {
	            g = !0;
	            c = f;
	            d = e;
	            break;
	          }
	          if (h === d) {
	            g = !0;
	            d = f;
	            c = e;
	            break;
	          }
	          h = h.sibling;
	        }
	        if (!g) throw Error(p$5(189));
	      }
	    }
	    if (c.alternate !== d) throw Error(p$5(190));
	  }
	  if (3 !== c.tag) throw Error(p$5(188));
	  return c.stateNode.current === c ? a : b;
	}
	function Zb(a) {
	  a = Yb(a);
	  return null !== a ? $b(a) : null;
	}
	function $b(a) {
	  if (5 === a.tag || 6 === a.tag) return a;
	  for (a = a.child; null !== a;) {
	    var b = $b(a);
	    if (null !== b) return b;
	    a = a.sibling;
	  }
	  return null;
	}
	var ac = ca.unstable_scheduleCallback,
	  bc = ca.unstable_cancelCallback,
	  cc = ca.unstable_shouldYield,
	  dc = ca.unstable_requestPaint,
	  B$1 = ca.unstable_now,
	  ec = ca.unstable_getCurrentPriorityLevel,
	  fc = ca.unstable_ImmediatePriority,
	  gc = ca.unstable_UserBlockingPriority,
	  hc = ca.unstable_NormalPriority,
	  ic = ca.unstable_LowPriority,
	  jc = ca.unstable_IdlePriority,
	  kc = null,
	  lc = null;
	function mc(a) {
	  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
	    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
	  } catch (b) {}
	}
	var oc = Math.clz32 ? Math.clz32 : nc,
	  pc = Math.log,
	  qc = Math.LN2;
	function nc(a) {
	  a >>>= 0;
	  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
	}
	var rc = 64,
	  sc = 4194304;
	function tc(a) {
	  switch (a & -a) {
	    case 1:
	      return 1;
	    case 2:
	      return 2;
	    case 4:
	      return 4;
	    case 8:
	      return 8;
	    case 16:
	      return 16;
	    case 32:
	      return 32;
	    case 64:
	    case 128:
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	      return a & 4194240;
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	    case 67108864:
	      return a & 130023424;
	    case 134217728:
	      return 134217728;
	    case 268435456:
	      return 268435456;
	    case 536870912:
	      return 536870912;
	    case 1073741824:
	      return 1073741824;
	    default:
	      return a;
	  }
	}
	function uc(a, b) {
	  var c = a.pendingLanes;
	  if (0 === c) return 0;
	  var d = 0,
	    e = a.suspendedLanes,
	    f = a.pingedLanes,
	    g = c & 268435455;
	  if (0 !== g) {
	    var h = g & ~e;
	    0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
	  } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
	  if (0 === d) return 0;
	  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
	  0 !== (d & 4) && (d |= c & 16);
	  b = a.entangledLanes;
	  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
	  return d;
	}
	function vc(a, b) {
	  switch (a) {
	    case 1:
	    case 2:
	    case 4:
	      return b + 250;
	    case 8:
	    case 16:
	    case 32:
	    case 64:
	    case 128:
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	      return b + 5E3;
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	    case 67108864:
	      return -1;
	    case 134217728:
	    case 268435456:
	    case 536870912:
	    case 1073741824:
	      return -1;
	    default:
	      return -1;
	  }
	}
	function wc(a, b) {
	  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
	    var g = 31 - oc(f),
	      h = 1 << g,
	      k = e[g];
	    if (-1 === k) {
	      if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
	    } else k <= b && (a.expiredLanes |= h);
	    f &= ~h;
	  }
	}
	function xc(a) {
	  a = a.pendingLanes & -1073741825;
	  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}
	function yc() {
	  var a = rc;
	  rc <<= 1;
	  0 === (rc & 4194240) && (rc = 64);
	  return a;
	}
	function zc(a) {
	  for (var b = [], c = 0; 31 > c; c++) b.push(a);
	  return b;
	}
	function Ac(a, b, c) {
	  a.pendingLanes |= b;
	  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
	  a = a.eventTimes;
	  b = 31 - oc(b);
	  a[b] = c;
	}
	function Bc(a, b) {
	  var c = a.pendingLanes & ~b;
	  a.pendingLanes = b;
	  a.suspendedLanes = 0;
	  a.pingedLanes = 0;
	  a.expiredLanes &= b;
	  a.mutableReadLanes &= b;
	  a.entangledLanes &= b;
	  b = a.entanglements;
	  var d = a.eventTimes;
	  for (a = a.expirationTimes; 0 < c;) {
	    var e = 31 - oc(c),
	      f = 1 << e;
	    b[e] = 0;
	    d[e] = -1;
	    a[e] = -1;
	    c &= ~f;
	  }
	}
	function Cc(a, b) {
	  var c = a.entangledLanes |= b;
	  for (a = a.entanglements; c;) {
	    var d = 31 - oc(c),
	      e = 1 << d;
	    e & b | a[d] & b && (a[d] |= b);
	    c &= ~e;
	  }
	}
	var C$1 = 0;
	function Dc(a) {
	  a &= -a;
	  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
	}
	var Ec,
	  Fc,
	  Gc,
	  Hc,
	  Ic,
	  Jc = !1,
	  Kc = [],
	  Lc = null,
	  Mc = null,
	  Nc = null,
	  Oc = new Map(),
	  Pc = new Map(),
	  Qc = [],
	  Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function Sc(a, b) {
	  switch (a) {
	    case "focusin":
	    case "focusout":
	      Lc = null;
	      break;
	    case "dragenter":
	    case "dragleave":
	      Mc = null;
	      break;
	    case "mouseover":
	    case "mouseout":
	      Nc = null;
	      break;
	    case "pointerover":
	    case "pointerout":
	      Oc.delete(b.pointerId);
	      break;
	    case "gotpointercapture":
	    case "lostpointercapture":
	      Pc.delete(b.pointerId);
	  }
	}
	function Tc(a, b, c, d, e, f) {
	  if (null === a || a.nativeEvent !== f) return a = {
	    blockedOn: b,
	    domEventName: c,
	    eventSystemFlags: d,
	    nativeEvent: f,
	    targetContainers: [e]
	  }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
	  a.eventSystemFlags |= d;
	  b = a.targetContainers;
	  null !== e && -1 === b.indexOf(e) && b.push(e);
	  return a;
	}
	function Uc(a, b, c, d, e) {
	  switch (b) {
	    case "focusin":
	      return Lc = Tc(Lc, a, b, c, d, e), !0;
	    case "dragenter":
	      return Mc = Tc(Mc, a, b, c, d, e), !0;
	    case "mouseover":
	      return Nc = Tc(Nc, a, b, c, d, e), !0;
	    case "pointerover":
	      var f = e.pointerId;
	      Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
	      return !0;
	    case "gotpointercapture":
	      return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
	  }
	  return !1;
	}
	function Vc(a) {
	  var b = Wc(a.target);
	  if (null !== b) {
	    var c = Vb(b);
	    if (null !== c) if (b = c.tag, 13 === b) {
	      if (b = Wb(c), null !== b) {
	        a.blockedOn = b;
	        Ic(a.priority, function () {
	          Gc(c);
	        });
	        return;
	      }
	    } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
	      a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
	      return;
	    }
	  }
	  a.blockedOn = null;
	}
	function Xc(a) {
	  if (null !== a.blockedOn) return !1;
	  for (var b = a.targetContainers; 0 < b.length;) {
	    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
	    if (null === c) {
	      c = a.nativeEvent;
	      var d = new c.constructor(c.type, c);
	      wb = d;
	      c.target.dispatchEvent(d);
	      wb = null;
	    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
	    b.shift();
	  }
	  return !0;
	}
	function Zc(a, b, c) {
	  Xc(a) && c.delete(b);
	}
	function $c() {
	  Jc = !1;
	  null !== Lc && Xc(Lc) && (Lc = null);
	  null !== Mc && Xc(Mc) && (Mc = null);
	  null !== Nc && Xc(Nc) && (Nc = null);
	  Oc.forEach(Zc);
	  Pc.forEach(Zc);
	}
	function ad(a, b) {
	  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
	}
	function bd(a) {
	  function b(b) {
	    return ad(b, a);
	  }
	  if (0 < Kc.length) {
	    ad(Kc[0], a);
	    for (var c = 1; c < Kc.length; c++) {
	      var d = Kc[c];
	      d.blockedOn === a && (d.blockedOn = null);
	    }
	  }
	  null !== Lc && ad(Lc, a);
	  null !== Mc && ad(Mc, a);
	  null !== Nc && ad(Nc, a);
	  Oc.forEach(b);
	  Pc.forEach(b);
	  for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
	  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
	}
	var cd = ua.ReactCurrentBatchConfig,
	  dd = !0;
	function ed(a, b, c, d) {
	  var e = C$1,
	    f = cd.transition;
	  cd.transition = null;
	  try {
	    C$1 = 1, fd(a, b, c, d);
	  } finally {
	    C$1 = e, cd.transition = f;
	  }
	}
	function gd(a, b, c, d) {
	  var e = C$1,
	    f = cd.transition;
	  cd.transition = null;
	  try {
	    C$1 = 4, fd(a, b, c, d);
	  } finally {
	    C$1 = e, cd.transition = f;
	  }
	}
	function fd(a, b, c, d) {
	  if (dd) {
	    var e = Yc(a, b, c, d);
	    if (null === e) hd(a, b, d, id, c), Sc(a, d);else if (Uc(e, a, b, c, d)) d.stopPropagation();else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
	      for (; null !== e;) {
	        var f = Cb(e);
	        null !== f && Ec(f);
	        f = Yc(a, b, c, d);
	        null === f && hd(a, b, d, id, c);
	        if (f === e) break;
	        e = f;
	      }
	      null !== e && d.stopPropagation();
	    } else hd(a, b, d, null, c);
	  }
	}
	var id = null;
	function Yc(a, b, c, d) {
	  id = null;
	  a = xb(d);
	  a = Wc(a);
	  if (null !== a) if (b = Vb(a), null === b) a = null;else if (c = b.tag, 13 === c) {
	    a = Wb(b);
	    if (null !== a) return a;
	    a = null;
	  } else if (3 === c) {
	    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
	    a = null;
	  } else b !== a && (a = null);
	  id = a;
	  return null;
	}
	function jd(a) {
	  switch (a) {
	    case "cancel":
	    case "click":
	    case "close":
	    case "contextmenu":
	    case "copy":
	    case "cut":
	    case "auxclick":
	    case "dblclick":
	    case "dragend":
	    case "dragstart":
	    case "drop":
	    case "focusin":
	    case "focusout":
	    case "input":
	    case "invalid":
	    case "keydown":
	    case "keypress":
	    case "keyup":
	    case "mousedown":
	    case "mouseup":
	    case "paste":
	    case "pause":
	    case "play":
	    case "pointercancel":
	    case "pointerdown":
	    case "pointerup":
	    case "ratechange":
	    case "reset":
	    case "resize":
	    case "seeked":
	    case "submit":
	    case "touchcancel":
	    case "touchend":
	    case "touchstart":
	    case "volumechange":
	    case "change":
	    case "selectionchange":
	    case "textInput":
	    case "compositionstart":
	    case "compositionend":
	    case "compositionupdate":
	    case "beforeblur":
	    case "afterblur":
	    case "beforeinput":
	    case "blur":
	    case "fullscreenchange":
	    case "focus":
	    case "hashchange":
	    case "popstate":
	    case "select":
	    case "selectstart":
	      return 1;
	    case "drag":
	    case "dragenter":
	    case "dragexit":
	    case "dragleave":
	    case "dragover":
	    case "mousemove":
	    case "mouseout":
	    case "mouseover":
	    case "pointermove":
	    case "pointerout":
	    case "pointerover":
	    case "scroll":
	    case "toggle":
	    case "touchmove":
	    case "wheel":
	    case "mouseenter":
	    case "mouseleave":
	    case "pointerenter":
	    case "pointerleave":
	      return 4;
	    case "message":
	      switch (ec()) {
	        case fc:
	          return 1;
	        case gc:
	          return 4;
	        case hc:
	        case ic:
	          return 16;
	        case jc:
	          return 536870912;
	        default:
	          return 16;
	      }
	    default:
	      return 16;
	  }
	}
	var kd = null,
	  ld = null,
	  md = null;
	function nd() {
	  if (md) return md;
	  var a,
	    b = ld,
	    c = b.length,
	    d,
	    e = "value" in kd ? kd.value : kd.textContent,
	    f = e.length;
	  for (a = 0; a < c && b[a] === e[a]; a++);
	  var g = c - a;
	  for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
	  return md = e.slice(a, 1 < d ? 1 - d : void 0);
	}
	function od(a) {
	  var b = a.keyCode;
	  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
	  10 === a && (a = 13);
	  return 32 <= a || 13 === a ? a : 0;
	}
	function pd() {
	  return !0;
	}
	function qd() {
	  return !1;
	}
	function rd(a) {
	  function b(b, d, e, f, g) {
	    this._reactName = b;
	    this._targetInst = e;
	    this.type = d;
	    this.nativeEvent = f;
	    this.target = g;
	    this.currentTarget = null;
	    for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
	    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
	    this.isPropagationStopped = qd;
	    return this;
	  }
	  A$2(b.prototype, {
	    preventDefault: function () {
	      this.defaultPrevented = !0;
	      var a = this.nativeEvent;
	      a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
	    },
	    stopPropagation: function () {
	      var a = this.nativeEvent;
	      a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
	    },
	    persist: function () {},
	    isPersistent: pd
	  });
	  return b;
	}
	var sd = {
	    eventPhase: 0,
	    bubbles: 0,
	    cancelable: 0,
	    timeStamp: function (a) {
	      return a.timeStamp || Date.now();
	    },
	    defaultPrevented: 0,
	    isTrusted: 0
	  },
	  td = rd(sd),
	  ud = A$2({}, sd, {
	    view: 0,
	    detail: 0
	  }),
	  vd = rd(ud),
	  wd,
	  xd,
	  yd,
	  Ad = A$2({}, ud, {
	    screenX: 0,
	    screenY: 0,
	    clientX: 0,
	    clientY: 0,
	    pageX: 0,
	    pageY: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    getModifierState: zd,
	    button: 0,
	    buttons: 0,
	    relatedTarget: function (a) {
	      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
	    },
	    movementX: function (a) {
	      if ("movementX" in a) return a.movementX;
	      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
	      return wd;
	    },
	    movementY: function (a) {
	      return "movementY" in a ? a.movementY : xd;
	    }
	  }),
	  Bd = rd(Ad),
	  Cd = A$2({}, Ad, {
	    dataTransfer: 0
	  }),
	  Dd = rd(Cd),
	  Ed = A$2({}, ud, {
	    relatedTarget: 0
	  }),
	  Fd = rd(Ed),
	  Gd = A$2({}, sd, {
	    animationName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	  }),
	  Hd = rd(Gd),
	  Id = A$2({}, sd, {
	    clipboardData: function (a) {
	      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	    }
	  }),
	  Jd = rd(Id),
	  Kd = A$2({}, sd, {
	    data: 0
	  }),
	  Ld = rd(Kd),
	  Md = {
	    Esc: "Escape",
	    Spacebar: " ",
	    Left: "ArrowLeft",
	    Up: "ArrowUp",
	    Right: "ArrowRight",
	    Down: "ArrowDown",
	    Del: "Delete",
	    Win: "OS",
	    Menu: "ContextMenu",
	    Apps: "ContextMenu",
	    Scroll: "ScrollLock",
	    MozPrintableKey: "Unidentified"
	  },
	  Nd = {
	    8: "Backspace",
	    9: "Tab",
	    12: "Clear",
	    13: "Enter",
	    16: "Shift",
	    17: "Control",
	    18: "Alt",
	    19: "Pause",
	    20: "CapsLock",
	    27: "Escape",
	    32: " ",
	    33: "PageUp",
	    34: "PageDown",
	    35: "End",
	    36: "Home",
	    37: "ArrowLeft",
	    38: "ArrowUp",
	    39: "ArrowRight",
	    40: "ArrowDown",
	    45: "Insert",
	    46: "Delete",
	    112: "F1",
	    113: "F2",
	    114: "F3",
	    115: "F4",
	    116: "F5",
	    117: "F6",
	    118: "F7",
	    119: "F8",
	    120: "F9",
	    121: "F10",
	    122: "F11",
	    123: "F12",
	    144: "NumLock",
	    145: "ScrollLock",
	    224: "Meta"
	  },
	  Od = {
	    Alt: "altKey",
	    Control: "ctrlKey",
	    Meta: "metaKey",
	    Shift: "shiftKey"
	  };
	function Pd(a) {
	  var b = this.nativeEvent;
	  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
	}
	function zd() {
	  return Pd;
	}
	var Qd = A$2({}, ud, {
	    key: function (a) {
	      if (a.key) {
	        var b = Md[a.key] || a.key;
	        if ("Unidentified" !== b) return b;
	      }
	      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
	    },
	    code: 0,
	    location: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    repeat: 0,
	    locale: 0,
	    getModifierState: zd,
	    charCode: function (a) {
	      return "keypress" === a.type ? od(a) : 0;
	    },
	    keyCode: function (a) {
	      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	    },
	    which: function (a) {
	      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
	    }
	  }),
	  Rd = rd(Qd),
	  Sd = A$2({}, Ad, {
	    pointerId: 0,
	    width: 0,
	    height: 0,
	    pressure: 0,
	    tangentialPressure: 0,
	    tiltX: 0,
	    tiltY: 0,
	    twist: 0,
	    pointerType: 0,
	    isPrimary: 0
	  }),
	  Td = rd(Sd),
	  Ud = A$2({}, ud, {
	    touches: 0,
	    targetTouches: 0,
	    changedTouches: 0,
	    altKey: 0,
	    metaKey: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    getModifierState: zd
	  }),
	  Vd = rd(Ud),
	  Wd = A$2({}, sd, {
	    propertyName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	  }),
	  Xd = rd(Wd),
	  Yd = A$2({}, Ad, {
	    deltaX: function (a) {
	      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
	    },
	    deltaY: function (a) {
	      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
	    },
	    deltaZ: 0,
	    deltaMode: 0
	  }),
	  Zd = rd(Yd),
	  $d = [9, 13, 27, 32],
	  ae$1 = ia && "CompositionEvent" in window,
	  be$1 = null;
	ia && "documentMode" in document && (be$1 = document.documentMode);
	var ce$1 = ia && "TextEvent" in window && !be$1,
	  de$1 = ia && (!ae$1 || be$1 && 8 < be$1 && 11 >= be$1),
	  ee$1 = String.fromCharCode(32),
	  fe$1 = !1;
	function ge$1(a, b) {
	  switch (a) {
	    case "keyup":
	      return -1 !== $d.indexOf(b.keyCode);
	    case "keydown":
	      return 229 !== b.keyCode;
	    case "keypress":
	    case "mousedown":
	    case "focusout":
	      return !0;
	    default:
	      return !1;
	  }
	}
	function he$1(a) {
	  a = a.detail;
	  return "object" === typeof a && "data" in a ? a.data : null;
	}
	var ie$1 = !1;
	function je$1(a, b) {
	  switch (a) {
	    case "compositionend":
	      return he$1(b);
	    case "keypress":
	      if (32 !== b.which) return null;
	      fe$1 = !0;
	      return ee$1;
	    case "textInput":
	      return a = b.data, a === ee$1 && fe$1 ? null : a;
	    default:
	      return null;
	  }
	}
	function ke$1(a, b) {
	  if (ie$1) return "compositionend" === a || !ae$1 && ge$1(a, b) ? (a = nd(), md = ld = kd = null, ie$1 = !1, a) : null;
	  switch (a) {
	    case "paste":
	      return null;
	    case "keypress":
	      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
	        if (b.char && 1 < b.char.length) return b.char;
	        if (b.which) return String.fromCharCode(b.which);
	      }
	      return null;
	    case "compositionend":
	      return de$1 && "ko" !== b.locale ? null : b.data;
	    default:
	      return null;
	  }
	}
	var le$1 = {
	  color: !0,
	  date: !0,
	  datetime: !0,
	  "datetime-local": !0,
	  email: !0,
	  month: !0,
	  number: !0,
	  password: !0,
	  range: !0,
	  search: !0,
	  tel: !0,
	  text: !0,
	  time: !0,
	  url: !0,
	  week: !0
	};
	function me$1(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return "input" === b ? !!le$1[a.type] : "textarea" === b ? !0 : !1;
	}
	function ne$1(a, b, c, d) {
	  Eb(d);
	  b = oe$1(b, "onChange");
	  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
	    event: c,
	    listeners: b
	  }));
	}
	var pe$1 = null,
	  qe$1 = null;
	function re$1(a) {
	  se$1(a, 0);
	}
	function te$1(a) {
	  var b = ue$1(a);
	  if (Wa(b)) return a;
	}
	function ve$1(a, b) {
	  if ("change" === a) return b;
	}
	var we$1 = !1;
	if (ia) {
	  var xe$1;
	  if (ia) {
	    var ye$1 = ("oninput" in document);
	    if (!ye$1) {
	      var ze$1 = document.createElement("div");
	      ze$1.setAttribute("oninput", "return;");
	      ye$1 = "function" === typeof ze$1.oninput;
	    }
	    xe$1 = ye$1;
	  } else xe$1 = !1;
	  we$1 = xe$1 && (!document.documentMode || 9 < document.documentMode);
	}
	function Ae$1() {
	  pe$1 && (pe$1.detachEvent("onpropertychange", Be$1), qe$1 = pe$1 = null);
	}
	function Be$1(a) {
	  if ("value" === a.propertyName && te$1(qe$1)) {
	    var b = [];
	    ne$1(b, qe$1, a, xb(a));
	    Jb(re$1, b);
	  }
	}
	function Ce(a, b, c) {
	  "focusin" === a ? (Ae$1(), pe$1 = b, qe$1 = c, pe$1.attachEvent("onpropertychange", Be$1)) : "focusout" === a && Ae$1();
	}
	function De$1(a) {
	  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te$1(qe$1);
	}
	function Ee$1(a, b) {
	  if ("click" === a) return te$1(b);
	}
	function Fe$1(a, b) {
	  if ("input" === a || "change" === a) return te$1(b);
	}
	function Ge$1(a, b) {
	  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var He$1 = "function" === typeof Object.is ? Object.is : Ge$1;
	function Ie(a, b) {
	  if (He$1(a, b)) return !0;
	  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
	  var c = Object.keys(a),
	    d = Object.keys(b);
	  if (c.length !== d.length) return !1;
	  for (d = 0; d < c.length; d++) {
	    var e = c[d];
	    if (!ja.call(b, e) || !He$1(a[e], b[e])) return !1;
	  }
	  return !0;
	}
	function Je$1(a) {
	  for (; a && a.firstChild;) a = a.firstChild;
	  return a;
	}
	function Ke(a, b) {
	  var c = Je$1(a);
	  a = 0;
	  for (var d; c;) {
	    if (3 === c.nodeType) {
	      d = a + c.textContent.length;
	      if (a <= b && d >= b) return {
	        node: c,
	        offset: b - a
	      };
	      a = d;
	    }
	    a: {
	      for (; c;) {
	        if (c.nextSibling) {
	          c = c.nextSibling;
	          break a;
	        }
	        c = c.parentNode;
	      }
	      c = void 0;
	    }
	    c = Je$1(c);
	  }
	}
	function Le$1(a, b) {
	  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le$1(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
	}
	function Me$1() {
	  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
	    try {
	      var c = "string" === typeof b.contentWindow.location.href;
	    } catch (d) {
	      c = !1;
	    }
	    if (c) a = b.contentWindow;else break;
	    b = Xa(a.document);
	  }
	  return b;
	}
	function Ne$1(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
	}
	function Oe$1(a) {
	  var b = Me$1(),
	    c = a.focusedElem,
	    d = a.selectionRange;
	  if (b !== c && c && c.ownerDocument && Le$1(c.ownerDocument.documentElement, c)) {
	    if (null !== d && Ne$1(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
	      a = a.getSelection();
	      var e = c.textContent.length,
	        f = Math.min(d.start, e);
	      d = void 0 === d.end ? f : Math.min(d.end, e);
	      !a.extend && f > d && (e = d, d = f, f = e);
	      e = Ke(c, f);
	      var g = Ke(c, d);
	      e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
	    }
	    b = [];
	    for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
	      element: a,
	      left: a.scrollLeft,
	      top: a.scrollTop
	    });
	    "function" === typeof c.focus && c.focus();
	    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
	  }
	}
	var Pe = ia && "documentMode" in document && 11 >= document.documentMode,
	  Qe = null,
	  Re$1 = null,
	  Se$1 = null,
	  Te$1 = !1;
	function Ue$1(a, b, c) {
	  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
	  Te$1 || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne$1(d) ? d = {
	    start: d.selectionStart,
	    end: d.selectionEnd
	  } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
	    anchorNode: d.anchorNode,
	    anchorOffset: d.anchorOffset,
	    focusNode: d.focusNode,
	    focusOffset: d.focusOffset
	  }), Se$1 && Ie(Se$1, d) || (Se$1 = d, d = oe$1(Re$1, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
	    event: b,
	    listeners: d
	  }), b.target = Qe)));
	}
	function Ve$1(a, b) {
	  var c = {};
	  c[a.toLowerCase()] = b.toLowerCase();
	  c["Webkit" + a] = "webkit" + b;
	  c["Moz" + a] = "moz" + b;
	  return c;
	}
	var We$1 = {
	    animationend: Ve$1("Animation", "AnimationEnd"),
	    animationiteration: Ve$1("Animation", "AnimationIteration"),
	    animationstart: Ve$1("Animation", "AnimationStart"),
	    transitionend: Ve$1("Transition", "TransitionEnd")
	  },
	  Xe$1 = {},
	  Ye$1 = {};
	ia && (Ye$1 = document.createElement("div").style, "AnimationEvent" in window || (delete We$1.animationend.animation, delete We$1.animationiteration.animation, delete We$1.animationstart.animation), "TransitionEvent" in window || delete We$1.transitionend.transition);
	function Ze$1(a) {
	  if (Xe$1[a]) return Xe$1[a];
	  if (!We$1[a]) return a;
	  var b = We$1[a],
	    c;
	  for (c in b) if (b.hasOwnProperty(c) && c in Ye$1) return Xe$1[a] = b[c];
	  return a;
	}
	var $e$1 = Ze$1("animationend"),
	  af = Ze$1("animationiteration"),
	  bf = Ze$1("animationstart"),
	  cf = Ze$1("transitionend"),
	  df = new Map(),
	  ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ff(a, b) {
	  df.set(a, b);
	  fa(b, [a]);
	}
	for (var gf = 0; gf < ef.length; gf++) {
	  var hf = ef[gf],
	    jf = hf.toLowerCase(),
	    kf = hf[0].toUpperCase() + hf.slice(1);
	  ff(jf, "on" + kf);
	}
	ff($e$1, "onAnimationEnd");
	ff(af, "onAnimationIteration");
	ff(bf, "onAnimationStart");
	ff("dblclick", "onDoubleClick");
	ff("focusin", "onFocus");
	ff("focusout", "onBlur");
	ff(cf, "onTransitionEnd");
	ha("onMouseEnter", ["mouseout", "mouseover"]);
	ha("onMouseLeave", ["mouseout", "mouseover"]);
	ha("onPointerEnter", ["pointerout", "pointerover"]);
	ha("onPointerLeave", ["pointerout", "pointerover"]);
	fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
	fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	  mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	function nf(a, b, c) {
	  var d = a.type || "unknown-event";
	  a.currentTarget = c;
	  Ub(d, b, void 0, a);
	  a.currentTarget = null;
	}
	function se$1(a, b) {
	  b = 0 !== (b & 4);
	  for (var c = 0; c < a.length; c++) {
	    var d = a[c],
	      e = d.event;
	    d = d.listeners;
	    a: {
	      var f = void 0;
	      if (b) for (var g = d.length - 1; 0 <= g; g--) {
	        var h = d[g],
	          k = h.instance,
	          l = h.currentTarget;
	        h = h.listener;
	        if (k !== f && e.isPropagationStopped()) break a;
	        nf(e, h, l);
	        f = k;
	      } else for (g = 0; g < d.length; g++) {
	        h = d[g];
	        k = h.instance;
	        l = h.currentTarget;
	        h = h.listener;
	        if (k !== f && e.isPropagationStopped()) break a;
	        nf(e, h, l);
	        f = k;
	      }
	    }
	  }
	  if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
	}
	function D$1(a, b) {
	  var c = b[of];
	  void 0 === c && (c = b[of] = new Set());
	  var d = a + "__bubble";
	  c.has(d) || (pf(b, a, 2, !1), c.add(d));
	}
	function qf(a, b, c) {
	  var d = 0;
	  b && (d |= 4);
	  pf(c, a, d, b);
	}
	var rf = "_reactListening" + Math.random().toString(36).slice(2);
	function sf(a) {
	  if (!a[rf]) {
	    a[rf] = !0;
	    da.forEach(function (b) {
	      "selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
	    });
	    var b = 9 === a.nodeType ? a : a.ownerDocument;
	    null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
	  }
	}
	function pf(a, b, c, d) {
	  switch (jd(b)) {
	    case 1:
	      var e = ed;
	      break;
	    case 4:
	      e = gd;
	      break;
	    default:
	      e = fd;
	  }
	  c = e.bind(null, b, c, a);
	  e = void 0;
	  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
	  d ? void 0 !== e ? a.addEventListener(b, c, {
	    capture: !0,
	    passive: e
	  }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
	    passive: e
	  }) : a.addEventListener(b, c, !1);
	}
	function hd(a, b, c, d, e) {
	  var f = d;
	  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
	    if (null === d) return;
	    var g = d.tag;
	    if (3 === g || 4 === g) {
	      var h = d.stateNode.containerInfo;
	      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
	      if (4 === g) for (g = d.return; null !== g;) {
	        var k = g.tag;
	        if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
	        g = g.return;
	      }
	      for (; null !== h;) {
	        g = Wc(h);
	        if (null === g) return;
	        k = g.tag;
	        if (5 === k || 6 === k) {
	          d = f = g;
	          continue a;
	        }
	        h = h.parentNode;
	      }
	    }
	    d = d.return;
	  }
	  Jb(function () {
	    var d = f,
	      e = xb(c),
	      g = [];
	    a: {
	      var h = df.get(a);
	      if (void 0 !== h) {
	        var k = td,
	          n = a;
	        switch (a) {
	          case "keypress":
	            if (0 === od(c)) break a;
	          case "keydown":
	          case "keyup":
	            k = Rd;
	            break;
	          case "focusin":
	            n = "focus";
	            k = Fd;
	            break;
	          case "focusout":
	            n = "blur";
	            k = Fd;
	            break;
	          case "beforeblur":
	          case "afterblur":
	            k = Fd;
	            break;
	          case "click":
	            if (2 === c.button) break a;
	          case "auxclick":
	          case "dblclick":
	          case "mousedown":
	          case "mousemove":
	          case "mouseup":
	          case "mouseout":
	          case "mouseover":
	          case "contextmenu":
	            k = Bd;
	            break;
	          case "drag":
	          case "dragend":
	          case "dragenter":
	          case "dragexit":
	          case "dragleave":
	          case "dragover":
	          case "dragstart":
	          case "drop":
	            k = Dd;
	            break;
	          case "touchcancel":
	          case "touchend":
	          case "touchmove":
	          case "touchstart":
	            k = Vd;
	            break;
	          case $e$1:
	          case af:
	          case bf:
	            k = Hd;
	            break;
	          case cf:
	            k = Xd;
	            break;
	          case "scroll":
	            k = vd;
	            break;
	          case "wheel":
	            k = Zd;
	            break;
	          case "copy":
	          case "cut":
	          case "paste":
	            k = Jd;
	            break;
	          case "gotpointercapture":
	          case "lostpointercapture":
	          case "pointercancel":
	          case "pointerdown":
	          case "pointermove":
	          case "pointerout":
	          case "pointerover":
	          case "pointerup":
	            k = Td;
	        }
	        var t = 0 !== (b & 4),
	          J = !t && "scroll" === a,
	          x = t ? null !== h ? h + "Capture" : null : h;
	        t = [];
	        for (var w = d, u; null !== w;) {
	          u = w;
	          var F = u.stateNode;
	          5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
	          if (J) break;
	          w = w.return;
	        }
	        0 < t.length && (h = new k(h, n, null, c, e), g.push({
	          event: h,
	          listeners: t
	        }));
	      }
	    }
	    if (0 === (b & 7)) {
	      a: {
	        h = "mouseover" === a || "pointerover" === a;
	        k = "mouseout" === a || "pointerout" === a;
	        if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
	        if (k || h) {
	          h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
	          if (k) {
	            if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
	          } else k = null, n = d;
	          if (k !== n) {
	            t = Bd;
	            F = "onMouseLeave";
	            x = "onMouseEnter";
	            w = "mouse";
	            if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
	            J = null == k ? h : ue$1(k);
	            u = null == n ? h : ue$1(n);
	            h = new t(F, w + "leave", k, c, e);
	            h.target = J;
	            h.relatedTarget = u;
	            F = null;
	            Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
	            J = F;
	            if (k && n) b: {
	              t = k;
	              x = n;
	              w = 0;
	              for (u = t; u; u = vf(u)) w++;
	              u = 0;
	              for (F = x; F; F = vf(F)) u++;
	              for (; 0 < w - u;) t = vf(t), w--;
	              for (; 0 < u - w;) x = vf(x), u--;
	              for (; w--;) {
	                if (t === x || null !== x && t === x.alternate) break b;
	                t = vf(t);
	                x = vf(x);
	              }
	              t = null;
	            } else t = null;
	            null !== k && wf(g, h, k, t, !1);
	            null !== n && null !== J && wf(g, J, n, t, !0);
	          }
	        }
	      }
	      a: {
	        h = d ? ue$1(d) : window;
	        k = h.nodeName && h.nodeName.toLowerCase();
	        if ("select" === k || "input" === k && "file" === h.type) var na = ve$1;else if (me$1(h)) {
	          if (we$1) na = Fe$1;else {
	            na = De$1;
	            var xa = Ce;
	          }
	        } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee$1);
	        if (na && (na = na(a, d))) {
	          ne$1(g, na, c, e);
	          break a;
	        }
	        xa && xa(a, h, d);
	        "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
	      }
	      xa = d ? ue$1(d) : window;
	      switch (a) {
	        case "focusin":
	          if (me$1(xa) || "true" === xa.contentEditable) Qe = xa, Re$1 = d, Se$1 = null;
	          break;
	        case "focusout":
	          Se$1 = Re$1 = Qe = null;
	          break;
	        case "mousedown":
	          Te$1 = !0;
	          break;
	        case "contextmenu":
	        case "mouseup":
	        case "dragend":
	          Te$1 = !1;
	          Ue$1(g, c, e);
	          break;
	        case "selectionchange":
	          if (Pe) break;
	        case "keydown":
	        case "keyup":
	          Ue$1(g, c, e);
	      }
	      var $a;
	      if (ae$1) b: {
	        switch (a) {
	          case "compositionstart":
	            var ba = "onCompositionStart";
	            break b;
	          case "compositionend":
	            ba = "onCompositionEnd";
	            break b;
	          case "compositionupdate":
	            ba = "onCompositionUpdate";
	            break b;
	        }
	        ba = void 0;
	      } else ie$1 ? ge$1(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
	      ba && (de$1 && "ko" !== c.locale && (ie$1 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie$1 && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = !0)), xa = oe$1(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
	        event: ba,
	        listeners: xa
	      }), $a ? ba.data = $a : ($a = he$1(c), null !== $a && (ba.data = $a))));
	      if ($a = ce$1 ? je$1(a, c) : ke$1(a, c)) d = oe$1(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
	        event: e,
	        listeners: d
	      }), e.data = $a);
	    }
	    se$1(g, b);
	  });
	}
	function tf(a, b, c) {
	  return {
	    instance: a,
	    listener: b,
	    currentTarget: c
	  };
	}
	function oe$1(a, b) {
	  for (var c = b + "Capture", d = []; null !== a;) {
	    var e = a,
	      f = e.stateNode;
	    5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
	    a = a.return;
	  }
	  return d;
	}
	function vf(a) {
	  if (null === a) return null;
	  do a = a.return; while (a && 5 !== a.tag);
	  return a ? a : null;
	}
	function wf(a, b, c, d, e) {
	  for (var f = b._reactName, g = []; null !== c && c !== d;) {
	    var h = c,
	      k = h.alternate,
	      l = h.stateNode;
	    if (null !== k && k === d) break;
	    5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
	    c = c.return;
	  }
	  0 !== g.length && a.push({
	    event: b,
	    listeners: g
	  });
	}
	var xf = /\r\n?/g,
	  yf = /\u0000|\uFFFD/g;
	function zf(a) {
	  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
	}
	function Af(a, b, c) {
	  b = zf(b);
	  if (zf(a) !== b && c) throw Error(p$5(425));
	}
	function Bf() {}
	var Cf = null,
	  Df = null;
	function Ef(a, b) {
	  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
	}
	var Ff = "function" === typeof setTimeout ? setTimeout : void 0,
	  Gf = "function" === typeof clearTimeout ? clearTimeout : void 0,
	  Hf = "function" === typeof Promise ? Promise : void 0,
	  Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function (a) {
	    return Hf.resolve(null).then(a).catch(If);
	  } : Ff;
	function If(a) {
	  setTimeout(function () {
	    throw a;
	  });
	}
	function Kf(a, b) {
	  var c = b,
	    d = 0;
	  do {
	    var e = c.nextSibling;
	    a.removeChild(c);
	    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
	      if (0 === d) {
	        a.removeChild(e);
	        bd(b);
	        return;
	      }
	      d--;
	    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
	    c = e;
	  } while (c);
	  bd(b);
	}
	function Lf(a) {
	  for (; null != a; a = a.nextSibling) {
	    var b = a.nodeType;
	    if (1 === b || 3 === b) break;
	    if (8 === b) {
	      b = a.data;
	      if ("$" === b || "$!" === b || "$?" === b) break;
	      if ("/$" === b) return null;
	    }
	  }
	  return a;
	}
	function Mf(a) {
	  a = a.previousSibling;
	  for (var b = 0; a;) {
	    if (8 === a.nodeType) {
	      var c = a.data;
	      if ("$" === c || "$!" === c || "$?" === c) {
	        if (0 === b) return a;
	        b--;
	      } else "/$" === c && b++;
	    }
	    a = a.previousSibling;
	  }
	  return null;
	}
	var Nf = Math.random().toString(36).slice(2),
	  Of = "__reactFiber$" + Nf,
	  Pf = "__reactProps$" + Nf,
	  uf = "__reactContainer$" + Nf,
	  of = "__reactEvents$" + Nf,
	  Qf = "__reactListeners$" + Nf,
	  Rf = "__reactHandles$" + Nf;
	function Wc(a) {
	  var b = a[Of];
	  if (b) return b;
	  for (var c = a.parentNode; c;) {
	    if (b = c[uf] || c[Of]) {
	      c = b.alternate;
	      if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
	        if (c = a[Of]) return c;
	        a = Mf(a);
	      }
	      return b;
	    }
	    a = c;
	    c = a.parentNode;
	  }
	  return null;
	}
	function Cb(a) {
	  a = a[Of] || a[uf];
	  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}
	function ue$1(a) {
	  if (5 === a.tag || 6 === a.tag) return a.stateNode;
	  throw Error(p$5(33));
	}
	function Db(a) {
	  return a[Pf] || null;
	}
	var Sf = [],
	  Tf = -1;
	function Uf(a) {
	  return {
	    current: a
	  };
	}
	function E$1(a) {
	  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
	}
	function G$1(a, b) {
	  Tf++;
	  Sf[Tf] = a.current;
	  a.current = b;
	}
	var Vf = {},
	  H$1 = Uf(Vf),
	  Wf = Uf(!1),
	  Xf = Vf;
	function Yf(a, b) {
	  var c = a.type.contextTypes;
	  if (!c) return Vf;
	  var d = a.stateNode;
	  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
	  var e = {},
	    f;
	  for (f in c) e[f] = b[f];
	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
	  return e;
	}
	function Zf(a) {
	  a = a.childContextTypes;
	  return null !== a && void 0 !== a;
	}
	function $f() {
	  E$1(Wf);
	  E$1(H$1);
	}
	function ag(a, b, c) {
	  if (H$1.current !== Vf) throw Error(p$5(168));
	  G$1(H$1, b);
	  G$1(Wf, c);
	}
	function bg(a, b, c) {
	  var d = a.stateNode;
	  b = b.childContextTypes;
	  if ("function" !== typeof d.getChildContext) return c;
	  d = d.getChildContext();
	  for (var e in d) if (!(e in b)) throw Error(p$5(108, Ra(a) || "Unknown", e));
	  return A$2({}, c, d);
	}
	function cg(a) {
	  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
	  Xf = H$1.current;
	  G$1(H$1, a);
	  G$1(Wf, Wf.current);
	  return !0;
	}
	function dg(a, b, c) {
	  var d = a.stateNode;
	  if (!d) throw Error(p$5(169));
	  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E$1(Wf), E$1(H$1), G$1(H$1, a)) : E$1(Wf);
	  G$1(Wf, c);
	}
	var eg = null,
	  fg = !1,
	  gg = !1;
	function hg(a) {
	  null === eg ? eg = [a] : eg.push(a);
	}
	function ig(a) {
	  fg = !0;
	  hg(a);
	}
	function jg() {
	  if (!gg && null !== eg) {
	    gg = !0;
	    var a = 0,
	      b = C$1;
	    try {
	      var c = eg;
	      for (C$1 = 1; a < c.length; a++) {
	        var d = c[a];
	        do d = d(!0); while (null !== d);
	      }
	      eg = null;
	      fg = !1;
	    } catch (e) {
	      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
	    } finally {
	      C$1 = b, gg = !1;
	    }
	  }
	  return null;
	}
	var kg = [],
	  lg = 0,
	  mg = null,
	  ng = 0,
	  og = [],
	  pg = 0,
	  qg = null,
	  rg = 1,
	  sg = "";
	function tg(a, b) {
	  kg[lg++] = ng;
	  kg[lg++] = mg;
	  mg = a;
	  ng = b;
	}
	function ug(a, b, c) {
	  og[pg++] = rg;
	  og[pg++] = sg;
	  og[pg++] = qg;
	  qg = a;
	  var d = rg;
	  a = sg;
	  var e = 32 - oc(d) - 1;
	  d &= ~(1 << e);
	  c += 1;
	  var f = 32 - oc(b) + e;
	  if (30 < f) {
	    var g = e - e % 5;
	    f = (d & (1 << g) - 1).toString(32);
	    d >>= g;
	    e -= g;
	    rg = 1 << 32 - oc(b) + e | c << e | d;
	    sg = f + a;
	  } else rg = 1 << f | c << e | d, sg = a;
	}
	function vg(a) {
	  null !== a.return && (tg(a, 1), ug(a, 1, 0));
	}
	function wg(a) {
	  for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
	  for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
	}
	var xg = null,
	  yg = null,
	  I$1 = !1,
	  zg = null;
	function Ag(a, b) {
	  var c = Bg(5, null, null, 0);
	  c.elementType = "DELETED";
	  c.stateNode = b;
	  c.return = a;
	  b = a.deletions;
	  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
	}
	function Cg(a, b) {
	  switch (a.tag) {
	    case 5:
	      var c = a.type;
	      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
	      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
	    case 6:
	      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
	    case 13:
	      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
	        id: rg,
	        overflow: sg
	      } : null, a.memoizedState = {
	        dehydrated: b,
	        treeContext: c,
	        retryLane: 1073741824
	      }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
	    default:
	      return !1;
	  }
	}
	function Dg(a) {
	  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
	}
	function Eg(a) {
	  if (I$1) {
	    var b = yg;
	    if (b) {
	      var c = b;
	      if (!Cg(a, b)) {
	        if (Dg(a)) throw Error(p$5(418));
	        b = Lf(c.nextSibling);
	        var d = xg;
	        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I$1 = !1, xg = a);
	      }
	    } else {
	      if (Dg(a)) throw Error(p$5(418));
	      a.flags = a.flags & -4097 | 2;
	      I$1 = !1;
	      xg = a;
	    }
	  }
	}
	function Fg(a) {
	  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
	  xg = a;
	}
	function Gg(a) {
	  if (a !== xg) return !1;
	  if (!I$1) return Fg(a), I$1 = !0, !1;
	  var b;
	  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
	  if (b && (b = yg)) {
	    if (Dg(a)) throw Hg(), Error(p$5(418));
	    for (; b;) Ag(a, b), b = Lf(b.nextSibling);
	  }
	  Fg(a);
	  if (13 === a.tag) {
	    a = a.memoizedState;
	    a = null !== a ? a.dehydrated : null;
	    if (!a) throw Error(p$5(317));
	    a: {
	      a = a.nextSibling;
	      for (b = 0; a;) {
	        if (8 === a.nodeType) {
	          var c = a.data;
	          if ("/$" === c) {
	            if (0 === b) {
	              yg = Lf(a.nextSibling);
	              break a;
	            }
	            b--;
	          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
	        }
	        a = a.nextSibling;
	      }
	      yg = null;
	    }
	  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
	  return !0;
	}
	function Hg() {
	  for (var a = yg; a;) a = Lf(a.nextSibling);
	}
	function Ig() {
	  yg = xg = null;
	  I$1 = !1;
	}
	function Jg(a) {
	  null === zg ? zg = [a] : zg.push(a);
	}
	var Kg = ua.ReactCurrentBatchConfig;
	function Lg(a, b) {
	  if (a && a.defaultProps) {
	    b = A$2({}, b);
	    a = a.defaultProps;
	    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
	    return b;
	  }
	  return b;
	}
	var Mg = Uf(null),
	  Ng = null,
	  Og = null,
	  Pg = null;
	function Qg() {
	  Pg = Og = Ng = null;
	}
	function Rg(a) {
	  var b = Mg.current;
	  E$1(Mg);
	  a._currentValue = b;
	}
	function Sg(a, b, c) {
	  for (; null !== a;) {
	    var d = a.alternate;
	    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
	    if (a === c) break;
	    a = a.return;
	  }
	}
	function Tg(a, b) {
	  Ng = a;
	  Pg = Og = null;
	  a = a.dependencies;
	  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = !0), a.firstContext = null);
	}
	function Vg(a) {
	  var b = a._currentValue;
	  if (Pg !== a) if (a = {
	    context: a,
	    memoizedValue: b,
	    next: null
	  }, null === Og) {
	    if (null === Ng) throw Error(p$5(308));
	    Og = a;
	    Ng.dependencies = {
	      lanes: 0,
	      firstContext: a
	    };
	  } else Og = Og.next = a;
	  return b;
	}
	var Wg = null;
	function Xg(a) {
	  null === Wg ? Wg = [a] : Wg.push(a);
	}
	function Yg(a, b, c, d) {
	  var e = b.interleaved;
	  null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
	  b.interleaved = c;
	  return Zg(a, d);
	}
	function Zg(a, b) {
	  a.lanes |= b;
	  var c = a.alternate;
	  null !== c && (c.lanes |= b);
	  c = a;
	  for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
	  return 3 === c.tag ? c.stateNode : null;
	}
	var $g = !1;
	function ah(a) {
	  a.updateQueue = {
	    baseState: a.memoizedState,
	    firstBaseUpdate: null,
	    lastBaseUpdate: null,
	    shared: {
	      pending: null,
	      interleaved: null,
	      lanes: 0
	    },
	    effects: null
	  };
	}
	function bh(a, b) {
	  a = a.updateQueue;
	  b.updateQueue === a && (b.updateQueue = {
	    baseState: a.baseState,
	    firstBaseUpdate: a.firstBaseUpdate,
	    lastBaseUpdate: a.lastBaseUpdate,
	    shared: a.shared,
	    effects: a.effects
	  });
	}
	function ch(a, b) {
	  return {
	    eventTime: a,
	    lane: b,
	    tag: 0,
	    payload: null,
	    callback: null,
	    next: null
	  };
	}
	function dh(a, b, c) {
	  var d = a.updateQueue;
	  if (null === d) return null;
	  d = d.shared;
	  if (0 !== (K$1 & 2)) {
	    var e = d.pending;
	    null === e ? b.next = b : (b.next = e.next, e.next = b);
	    d.pending = b;
	    return Zg(a, c);
	  }
	  e = d.interleaved;
	  null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
	  d.interleaved = b;
	  return Zg(a, c);
	}
	function eh(a, b, c) {
	  b = b.updateQueue;
	  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
	    var d = b.lanes;
	    d &= a.pendingLanes;
	    c |= d;
	    b.lanes = c;
	    Cc(a, c);
	  }
	}
	function fh(a, b) {
	  var c = a.updateQueue,
	    d = a.alternate;
	  if (null !== d && (d = d.updateQueue, c === d)) {
	    var e = null,
	      f = null;
	    c = c.firstBaseUpdate;
	    if (null !== c) {
	      do {
	        var g = {
	          eventTime: c.eventTime,
	          lane: c.lane,
	          tag: c.tag,
	          payload: c.payload,
	          callback: c.callback,
	          next: null
	        };
	        null === f ? e = f = g : f = f.next = g;
	        c = c.next;
	      } while (null !== c);
	      null === f ? e = f = b : f = f.next = b;
	    } else e = f = b;
	    c = {
	      baseState: d.baseState,
	      firstBaseUpdate: e,
	      lastBaseUpdate: f,
	      shared: d.shared,
	      effects: d.effects
	    };
	    a.updateQueue = c;
	    return;
	  }
	  a = c.lastBaseUpdate;
	  null === a ? c.firstBaseUpdate = b : a.next = b;
	  c.lastBaseUpdate = b;
	}
	function gh(a, b, c, d) {
	  var e = a.updateQueue;
	  $g = !1;
	  var f = e.firstBaseUpdate,
	    g = e.lastBaseUpdate,
	    h = e.shared.pending;
	  if (null !== h) {
	    e.shared.pending = null;
	    var k = h,
	      l = k.next;
	    k.next = null;
	    null === g ? f = l : g.next = l;
	    g = k;
	    var m = a.alternate;
	    null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
	  }
	  if (null !== f) {
	    var q = e.baseState;
	    g = 0;
	    m = l = k = null;
	    h = f;
	    do {
	      var r = h.lane,
	        y = h.eventTime;
	      if ((d & r) === r) {
	        null !== m && (m = m.next = {
	          eventTime: y,
	          lane: 0,
	          tag: h.tag,
	          payload: h.payload,
	          callback: h.callback,
	          next: null
	        });
	        a: {
	          var n = a,
	            t = h;
	          r = b;
	          y = c;
	          switch (t.tag) {
	            case 1:
	              n = t.payload;
	              if ("function" === typeof n) {
	                q = n.call(y, q, r);
	                break a;
	              }
	              q = n;
	              break a;
	            case 3:
	              n.flags = n.flags & -65537 | 128;
	            case 0:
	              n = t.payload;
	              r = "function" === typeof n ? n.call(y, q, r) : n;
	              if (null === r || void 0 === r) break a;
	              q = A$2({}, q, r);
	              break a;
	            case 2:
	              $g = !0;
	          }
	        }
	        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
	      } else y = {
	        eventTime: y,
	        lane: r,
	        tag: h.tag,
	        payload: h.payload,
	        callback: h.callback,
	        next: null
	      }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
	      h = h.next;
	      if (null === h) if (h = e.shared.pending, null === h) break;else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
	    } while (1);
	    null === m && (k = q);
	    e.baseState = k;
	    e.firstBaseUpdate = l;
	    e.lastBaseUpdate = m;
	    b = e.shared.interleaved;
	    if (null !== b) {
	      e = b;
	      do g |= e.lane, e = e.next; while (e !== b);
	    } else null === f && (e.shared.lanes = 0);
	    hh |= g;
	    a.lanes = g;
	    a.memoizedState = q;
	  }
	}
	function ih(a, b, c) {
	  a = b.effects;
	  b.effects = null;
	  if (null !== a) for (b = 0; b < a.length; b++) {
	    var d = a[b],
	      e = d.callback;
	    if (null !== e) {
	      d.callback = null;
	      d = c;
	      if ("function" !== typeof e) throw Error(p$5(191, e));
	      e.call(d);
	    }
	  }
	}
	var jh = new aa.Component().refs;
	function kh(a, b, c, d) {
	  b = a.memoizedState;
	  c = c(d, b);
	  c = null === c || void 0 === c ? b : A$2({}, b, c);
	  a.memoizedState = c;
	  0 === a.lanes && (a.updateQueue.baseState = c);
	}
	var nh = {
	  isMounted: function (a) {
	    return (a = a._reactInternals) ? Vb(a) === a : !1;
	  },
	  enqueueSetState: function (a, b, c) {
	    a = a._reactInternals;
	    var d = L$1(),
	      e = lh(a),
	      f = ch(d, e);
	    f.payload = b;
	    void 0 !== c && null !== c && (f.callback = c);
	    b = dh(a, f, e);
	    null !== b && (mh(b, a, e, d), eh(b, a, e));
	  },
	  enqueueReplaceState: function (a, b, c) {
	    a = a._reactInternals;
	    var d = L$1(),
	      e = lh(a),
	      f = ch(d, e);
	    f.tag = 1;
	    f.payload = b;
	    void 0 !== c && null !== c && (f.callback = c);
	    b = dh(a, f, e);
	    null !== b && (mh(b, a, e, d), eh(b, a, e));
	  },
	  enqueueForceUpdate: function (a, b) {
	    a = a._reactInternals;
	    var c = L$1(),
	      d = lh(a),
	      e = ch(c, d);
	    e.tag = 2;
	    void 0 !== b && null !== b && (e.callback = b);
	    b = dh(a, e, d);
	    null !== b && (mh(b, a, d, c), eh(b, a, d));
	  }
	};
	function oh(a, b, c, d, e, f, g) {
	  a = a.stateNode;
	  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
	}
	function ph(a, b, c) {
	  var d = !1,
	    e = Vf;
	  var f = b.contextType;
	  "object" === typeof f && null !== f ? f = Vg(f) : (e = Zf(b) ? Xf : H$1.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
	  b = new b(c, f);
	  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
	  b.updater = nh;
	  a.stateNode = b;
	  b._reactInternals = a;
	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
	  return b;
	}
	function qh(a, b, c, d) {
	  a = b.state;
	  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
	  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
	  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
	}
	function rh(a, b, c, d) {
	  var e = a.stateNode;
	  e.props = c;
	  e.state = a.memoizedState;
	  e.refs = jh;
	  ah(a);
	  var f = b.contextType;
	  "object" === typeof f && null !== f ? e.context = Vg(f) : (f = Zf(b) ? Xf : H$1.current, e.context = Yf(a, f));
	  e.state = a.memoizedState;
	  f = b.getDerivedStateFromProps;
	  "function" === typeof f && (kh(a, b, f, c), e.state = a.memoizedState);
	  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
	  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
	}
	function sh(a, b, c) {
	  a = c.ref;
	  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
	    if (c._owner) {
	      c = c._owner;
	      if (c) {
	        if (1 !== c.tag) throw Error(p$5(309));
	        var d = c.stateNode;
	      }
	      if (!d) throw Error(p$5(147, a));
	      var e = d,
	        f = "" + a;
	      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
	      b = function (a) {
	        var b = e.refs;
	        b === jh && (b = e.refs = {});
	        null === a ? delete b[f] : b[f] = a;
	      };
	      b._stringRef = f;
	      return b;
	    }
	    if ("string" !== typeof a) throw Error(p$5(284));
	    if (!c._owner) throw Error(p$5(290, a));
	  }
	  return a;
	}
	function th(a, b) {
	  a = Object.prototype.toString.call(b);
	  throw Error(p$5(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
	}
	function uh(a) {
	  var b = a._init;
	  return b(a._payload);
	}
	function vh(a) {
	  function b(b, c) {
	    if (a) {
	      var d = b.deletions;
	      null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
	    }
	  }
	  function c(c, d) {
	    if (!a) return null;
	    for (; null !== d;) b(c, d), d = d.sibling;
	    return null;
	  }
	  function d(a, b) {
	    for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
	    return a;
	  }
	  function e(a, b) {
	    a = wh(a, b);
	    a.index = 0;
	    a.sibling = null;
	    return a;
	  }
	  function f(b, c, d) {
	    b.index = d;
	    if (!a) return b.flags |= 1048576, c;
	    d = b.alternate;
	    if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
	    b.flags |= 2;
	    return c;
	  }
	  function g(b) {
	    a && null === b.alternate && (b.flags |= 2);
	    return b;
	  }
	  function h(a, b, c, d) {
	    if (null === b || 6 !== b.tag) return b = xh(c, a.mode, d), b.return = a, b;
	    b = e(b, c);
	    b.return = a;
	    return b;
	  }
	  function k(a, b, c, d) {
	    var f = c.type;
	    if (f === ya) return m(a, b, c.props.children, d, c.key);
	    if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && uh(f) === b.type)) return d = e(b, c.props), d.ref = sh(a, b, c), d.return = a, d;
	    d = yh(c.type, c.key, c.props, null, a.mode, d);
	    d.ref = sh(a, b, c);
	    d.return = a;
	    return d;
	  }
	  function l(a, b, c, d) {
	    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = zh(c, a.mode, d), b.return = a, b;
	    b = e(b, c.children || []);
	    b.return = a;
	    return b;
	  }
	  function m(a, b, c, d, f) {
	    if (null === b || 7 !== b.tag) return b = Ah(c, a.mode, d, f), b.return = a, b;
	    b = e(b, c);
	    b.return = a;
	    return b;
	  }
	  function q(a, b, c) {
	    if ("string" === typeof b && "" !== b || "number" === typeof b) return b = xh("" + b, a.mode, c), b.return = a, b;
	    if ("object" === typeof b && null !== b) {
	      switch (b.$$typeof) {
	        case va:
	          return c = yh(b.type, b.key, b.props, null, a.mode, c), c.ref = sh(a, null, b), c.return = a, c;
	        case wa:
	          return b = zh(b, a.mode, c), b.return = a, b;
	        case Ha:
	          var d = b._init;
	          return q(a, d(b._payload), c);
	      }
	      if (eb(b) || Ka(b)) return b = Ah(b, a.mode, c, null), b.return = a, b;
	      th(a, b);
	    }
	    return null;
	  }
	  function r(a, b, c, d) {
	    var e = null !== b ? b.key : null;
	    if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
	    if ("object" === typeof c && null !== c) {
	      switch (c.$$typeof) {
	        case va:
	          return c.key === e ? k(a, b, c, d) : null;
	        case wa:
	          return c.key === e ? l(a, b, c, d) : null;
	        case Ha:
	          return e = c._init, r(a, b, e(c._payload), d);
	      }
	      if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
	      th(a, c);
	    }
	    return null;
	  }
	  function y(a, b, c, d, e) {
	    if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
	    if ("object" === typeof d && null !== d) {
	      switch (d.$$typeof) {
	        case va:
	          return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
	        case wa:
	          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
	        case Ha:
	          var f = d._init;
	          return y(a, b, c, f(d._payload), e);
	      }
	      if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
	      th(b, d);
	    }
	    return null;
	  }
	  function n(e, g, h, k) {
	    for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
	      u.index > w ? (x = u, u = null) : x = u.sibling;
	      var n = r(e, u, h[w], k);
	      if (null === n) {
	        null === u && (u = x);
	        break;
	      }
	      a && u && null === n.alternate && b(e, u);
	      g = f(n, g, w);
	      null === m ? l = n : m.sibling = n;
	      m = n;
	      u = x;
	    }
	    if (w === h.length) return c(e, u), I$1 && tg(e, w), l;
	    if (null === u) {
	      for (; w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
	      I$1 && tg(e, w);
	      return l;
	    }
	    for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
	    a && u.forEach(function (a) {
	      return b(e, a);
	    });
	    I$1 && tg(e, w);
	    return l;
	  }
	  function t(e, g, h, k) {
	    var l = Ka(h);
	    if ("function" !== typeof l) throw Error(p$5(150));
	    h = l.call(h);
	    if (null == h) throw Error(p$5(151));
	    for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()) {
	      m.index > w ? (x = m, m = null) : x = m.sibling;
	      var t = r(e, m, n.value, k);
	      if (null === t) {
	        null === m && (m = x);
	        break;
	      }
	      a && m && null === t.alternate && b(e, m);
	      g = f(t, g, w);
	      null === u ? l = t : u.sibling = t;
	      u = t;
	      m = x;
	    }
	    if (n.done) return c(e, m), I$1 && tg(e, w), l;
	    if (null === m) {
	      for (; !n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
	      I$1 && tg(e, w);
	      return l;
	    }
	    for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
	    a && m.forEach(function (a) {
	      return b(e, a);
	    });
	    I$1 && tg(e, w);
	    return l;
	  }
	  function J(a, d, f, h) {
	    "object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
	    if ("object" === typeof f && null !== f) {
	      switch (f.$$typeof) {
	        case va:
	          a: {
	            for (var k = f.key, l = d; null !== l;) {
	              if (l.key === k) {
	                k = f.type;
	                if (k === ya) {
	                  if (7 === l.tag) {
	                    c(a, l.sibling);
	                    d = e(l, f.props.children);
	                    d.return = a;
	                    a = d;
	                    break a;
	                  }
	                } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && uh(k) === l.type) {
	                  c(a, l.sibling);
	                  d = e(l, f.props);
	                  d.ref = sh(a, l, f);
	                  d.return = a;
	                  a = d;
	                  break a;
	                }
	                c(a, l);
	                break;
	              } else b(a, l);
	              l = l.sibling;
	            }
	            f.type === ya ? (d = Ah(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = yh(f.type, f.key, f.props, null, a.mode, h), h.ref = sh(a, d, f), h.return = a, a = h);
	          }
	          return g(a);
	        case wa:
	          a: {
	            for (l = f.key; null !== d;) {
	              if (d.key === l) {
	                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
	                  c(a, d.sibling);
	                  d = e(d, f.children || []);
	                  d.return = a;
	                  a = d;
	                  break a;
	                } else {
	                  c(a, d);
	                  break;
	                }
	              } else b(a, d);
	              d = d.sibling;
	            }
	            d = zh(f, a.mode, h);
	            d.return = a;
	            a = d;
	          }
	          return g(a);
	        case Ha:
	          return l = f._init, J(a, d, l(f._payload), h);
	      }
	      if (eb(f)) return n(a, d, f, h);
	      if (Ka(f)) return t(a, d, f, h);
	      th(a, f);
	    }
	    return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = xh(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
	  }
	  return J;
	}
	var Bh = vh(!0),
	  Ch = vh(!1),
	  Dh = {},
	  Eh = Uf(Dh),
	  Fh = Uf(Dh),
	  Gh = Uf(Dh);
	function Hh(a) {
	  if (a === Dh) throw Error(p$5(174));
	  return a;
	}
	function Ih(a, b) {
	  G$1(Gh, b);
	  G$1(Fh, a);
	  G$1(Eh, Dh);
	  a = b.nodeType;
	  switch (a) {
	    case 9:
	    case 11:
	      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
	      break;
	    default:
	      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
	  }
	  E$1(Eh);
	  G$1(Eh, b);
	}
	function Jh() {
	  E$1(Eh);
	  E$1(Fh);
	  E$1(Gh);
	}
	function Kh(a) {
	  Hh(Gh.current);
	  var b = Hh(Eh.current);
	  var c = lb(b, a.type);
	  b !== c && (G$1(Fh, a), G$1(Eh, c));
	}
	function Lh(a) {
	  Fh.current === a && (E$1(Eh), E$1(Fh));
	}
	var M$1 = Uf(0);
	function Mh(a) {
	  for (var b = a; null !== b;) {
	    if (13 === b.tag) {
	      var c = b.memoizedState;
	      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
	    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
	      if (0 !== (b.flags & 128)) return b;
	    } else if (null !== b.child) {
	      b.child.return = b;
	      b = b.child;
	      continue;
	    }
	    if (b === a) break;
	    for (; null === b.sibling;) {
	      if (null === b.return || b.return === a) return null;
	      b = b.return;
	    }
	    b.sibling.return = b.return;
	    b = b.sibling;
	  }
	  return null;
	}
	var Nh = [];
	function Oh() {
	  for (var a = 0; a < Nh.length; a++) Nh[a]._workInProgressVersionPrimary = null;
	  Nh.length = 0;
	}
	var Ph = ua.ReactCurrentDispatcher,
	  Qh = ua.ReactCurrentBatchConfig,
	  Rh = 0,
	  N$1 = null,
	  O = null,
	  P$1 = null,
	  Sh = !1,
	  Th = !1,
	  Uh = 0,
	  Vh = 0;
	function Q$1() {
	  throw Error(p$5(321));
	}
	function Wh(a, b) {
	  if (null === b) return !1;
	  for (var c = 0; c < b.length && c < a.length; c++) if (!He$1(a[c], b[c])) return !1;
	  return !0;
	}
	function Xh(a, b, c, d, e, f) {
	  Rh = f;
	  N$1 = b;
	  b.memoizedState = null;
	  b.updateQueue = null;
	  b.lanes = 0;
	  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
	  a = c(d, e);
	  if (Th) {
	    f = 0;
	    do {
	      Th = !1;
	      Uh = 0;
	      if (25 <= f) throw Error(p$5(301));
	      f += 1;
	      P$1 = O = null;
	      b.updateQueue = null;
	      Ph.current = $h;
	      a = c(d, e);
	    } while (Th);
	  }
	  Ph.current = ai;
	  b = null !== O && null !== O.next;
	  Rh = 0;
	  P$1 = O = N$1 = null;
	  Sh = !1;
	  if (b) throw Error(p$5(300));
	  return a;
	}
	function bi() {
	  var a = 0 !== Uh;
	  Uh = 0;
	  return a;
	}
	function ci() {
	  var a = {
	    memoizedState: null,
	    baseState: null,
	    baseQueue: null,
	    queue: null,
	    next: null
	  };
	  null === P$1 ? N$1.memoizedState = P$1 = a : P$1 = P$1.next = a;
	  return P$1;
	}
	function di() {
	  if (null === O) {
	    var a = N$1.alternate;
	    a = null !== a ? a.memoizedState : null;
	  } else a = O.next;
	  var b = null === P$1 ? N$1.memoizedState : P$1.next;
	  if (null !== b) P$1 = b, O = a;else {
	    if (null === a) throw Error(p$5(310));
	    O = a;
	    a = {
	      memoizedState: O.memoizedState,
	      baseState: O.baseState,
	      baseQueue: O.baseQueue,
	      queue: O.queue,
	      next: null
	    };
	    null === P$1 ? N$1.memoizedState = P$1 = a : P$1 = P$1.next = a;
	  }
	  return P$1;
	}
	function ei(a, b) {
	  return "function" === typeof b ? b(a) : b;
	}
	function fi(a) {
	  var b = di(),
	    c = b.queue;
	  if (null === c) throw Error(p$5(311));
	  c.lastRenderedReducer = a;
	  var d = O,
	    e = d.baseQueue,
	    f = c.pending;
	  if (null !== f) {
	    if (null !== e) {
	      var g = e.next;
	      e.next = f.next;
	      f.next = g;
	    }
	    d.baseQueue = e = f;
	    c.pending = null;
	  }
	  if (null !== e) {
	    f = e.next;
	    d = d.baseState;
	    var h = g = null,
	      k = null,
	      l = f;
	    do {
	      var m = l.lane;
	      if ((Rh & m) === m) null !== k && (k = k.next = {
	        lane: 0,
	        action: l.action,
	        hasEagerState: l.hasEagerState,
	        eagerState: l.eagerState,
	        next: null
	      }), d = l.hasEagerState ? l.eagerState : a(d, l.action);else {
	        var q = {
	          lane: m,
	          action: l.action,
	          hasEagerState: l.hasEagerState,
	          eagerState: l.eagerState,
	          next: null
	        };
	        null === k ? (h = k = q, g = d) : k = k.next = q;
	        N$1.lanes |= m;
	        hh |= m;
	      }
	      l = l.next;
	    } while (null !== l && l !== f);
	    null === k ? g = d : k.next = h;
	    He$1(d, b.memoizedState) || (Ug = !0);
	    b.memoizedState = d;
	    b.baseState = g;
	    b.baseQueue = k;
	    c.lastRenderedState = d;
	  }
	  a = c.interleaved;
	  if (null !== a) {
	    e = a;
	    do f = e.lane, N$1.lanes |= f, hh |= f, e = e.next; while (e !== a);
	  } else null === e && (c.lanes = 0);
	  return [b.memoizedState, c.dispatch];
	}
	function gi(a) {
	  var b = di(),
	    c = b.queue;
	  if (null === c) throw Error(p$5(311));
	  c.lastRenderedReducer = a;
	  var d = c.dispatch,
	    e = c.pending,
	    f = b.memoizedState;
	  if (null !== e) {
	    c.pending = null;
	    var g = e = e.next;
	    do f = a(f, g.action), g = g.next; while (g !== e);
	    He$1(f, b.memoizedState) || (Ug = !0);
	    b.memoizedState = f;
	    null === b.baseQueue && (b.baseState = f);
	    c.lastRenderedState = f;
	  }
	  return [f, d];
	}
	function hi() {}
	function ii(a, b) {
	  var c = N$1,
	    d = di(),
	    e = b(),
	    f = !He$1(d.memoizedState, e);
	  f && (d.memoizedState = e, Ug = !0);
	  d = d.queue;
	  ji(ki.bind(null, c, d, a), [a]);
	  if (d.getSnapshot !== b || f || null !== P$1 && P$1.memoizedState.tag & 1) {
	    c.flags |= 2048;
	    li(9, mi.bind(null, c, d, e, b), void 0, null);
	    if (null === R) throw Error(p$5(349));
	    0 !== (Rh & 30) || ni(c, b, e);
	  }
	  return e;
	}
	function ni(a, b, c) {
	  a.flags |= 16384;
	  a = {
	    getSnapshot: b,
	    value: c
	  };
	  b = N$1.updateQueue;
	  null === b ? (b = {
	    lastEffect: null,
	    stores: null
	  }, N$1.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
	}
	function mi(a, b, c, d) {
	  b.value = c;
	  b.getSnapshot = d;
	  oi(b) && pi(a);
	}
	function ki(a, b, c) {
	  return c(function () {
	    oi(b) && pi(a);
	  });
	}
	function oi(a) {
	  var b = a.getSnapshot;
	  a = a.value;
	  try {
	    var c = b();
	    return !He$1(a, c);
	  } catch (d) {
	    return !0;
	  }
	}
	function pi(a) {
	  var b = Zg(a, 1);
	  null !== b && mh(b, a, 1, -1);
	}
	function qi(a) {
	  var b = ci();
	  "function" === typeof a && (a = a());
	  b.memoizedState = b.baseState = a;
	  a = {
	    pending: null,
	    interleaved: null,
	    lanes: 0,
	    dispatch: null,
	    lastRenderedReducer: ei,
	    lastRenderedState: a
	  };
	  b.queue = a;
	  a = a.dispatch = ri.bind(null, N$1, a);
	  return [b.memoizedState, a];
	}
	function li(a, b, c, d) {
	  a = {
	    tag: a,
	    create: b,
	    destroy: c,
	    deps: d,
	    next: null
	  };
	  b = N$1.updateQueue;
	  null === b ? (b = {
	    lastEffect: null,
	    stores: null
	  }, N$1.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
	  return a;
	}
	function si() {
	  return di().memoizedState;
	}
	function ti(a, b, c, d) {
	  var e = ci();
	  N$1.flags |= a;
	  e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
	}
	function ui(a, b, c, d) {
	  var e = di();
	  d = void 0 === d ? null : d;
	  var f = void 0;
	  if (null !== O) {
	    var g = O.memoizedState;
	    f = g.destroy;
	    if (null !== d && Wh(d, g.deps)) {
	      e.memoizedState = li(b, c, f, d);
	      return;
	    }
	  }
	  N$1.flags |= a;
	  e.memoizedState = li(1 | b, c, f, d);
	}
	function vi(a, b) {
	  return ti(8390656, 8, a, b);
	}
	function ji(a, b) {
	  return ui(2048, 8, a, b);
	}
	function wi(a, b) {
	  return ui(4, 2, a, b);
	}
	function xi(a, b) {
	  return ui(4, 4, a, b);
	}
	function yi(a, b) {
	  if ("function" === typeof b) return a = a(), b(a), function () {
	    b(null);
	  };
	  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
	    b.current = null;
	  };
	}
	function zi(a, b, c) {
	  c = null !== c && void 0 !== c ? c.concat([a]) : null;
	  return ui(4, 4, yi.bind(null, b, a), c);
	}
	function Ai() {}
	function Bi(a, b) {
	  var c = di();
	  b = void 0 === b ? null : b;
	  var d = c.memoizedState;
	  if (null !== d && null !== b && Wh(b, d[1])) return d[0];
	  c.memoizedState = [a, b];
	  return a;
	}
	function Ci(a, b) {
	  var c = di();
	  b = void 0 === b ? null : b;
	  var d = c.memoizedState;
	  if (null !== d && null !== b && Wh(b, d[1])) return d[0];
	  a = a();
	  c.memoizedState = [a, b];
	  return a;
	}
	function Di(a, b, c) {
	  if (0 === (Rh & 21)) return a.baseState && (a.baseState = !1, Ug = !0), a.memoizedState = c;
	  He$1(c, b) || (c = yc(), N$1.lanes |= c, hh |= c, a.baseState = !0);
	  return b;
	}
	function Ei(a, b) {
	  var c = C$1;
	  C$1 = 0 !== c && 4 > c ? c : 4;
	  a(!0);
	  var d = Qh.transition;
	  Qh.transition = {};
	  try {
	    a(!1), b();
	  } finally {
	    C$1 = c, Qh.transition = d;
	  }
	}
	function Fi() {
	  return di().memoizedState;
	}
	function Gi(a, b, c) {
	  var d = lh(a);
	  c = {
	    lane: d,
	    action: c,
	    hasEagerState: !1,
	    eagerState: null,
	    next: null
	  };
	  if (Hi(a)) Ii(b, c);else if (c = Yg(a, b, c, d), null !== c) {
	    var e = L$1();
	    mh(c, a, d, e);
	    Ji(c, b, d);
	  }
	}
	function ri(a, b, c) {
	  var d = lh(a),
	    e = {
	      lane: d,
	      action: c,
	      hasEagerState: !1,
	      eagerState: null,
	      next: null
	    };
	  if (Hi(a)) Ii(b, e);else {
	    var f = a.alternate;
	    if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
	      var g = b.lastRenderedState,
	        h = f(g, c);
	      e.hasEagerState = !0;
	      e.eagerState = h;
	      if (He$1(h, g)) {
	        var k = b.interleaved;
	        null === k ? (e.next = e, Xg(b)) : (e.next = k.next, k.next = e);
	        b.interleaved = e;
	        return;
	      }
	    } catch (l) {} finally {}
	    c = Yg(a, b, e, d);
	    null !== c && (e = L$1(), mh(c, a, d, e), Ji(c, b, d));
	  }
	}
	function Hi(a) {
	  var b = a.alternate;
	  return a === N$1 || null !== b && b === N$1;
	}
	function Ii(a, b) {
	  Th = Sh = !0;
	  var c = a.pending;
	  null === c ? b.next = b : (b.next = c.next, c.next = b);
	  a.pending = b;
	}
	function Ji(a, b, c) {
	  if (0 !== (c & 4194240)) {
	    var d = b.lanes;
	    d &= a.pendingLanes;
	    c |= d;
	    b.lanes = c;
	    Cc(a, c);
	  }
	}
	var ai = {
	    readContext: Vg,
	    useCallback: Q$1,
	    useContext: Q$1,
	    useEffect: Q$1,
	    useImperativeHandle: Q$1,
	    useInsertionEffect: Q$1,
	    useLayoutEffect: Q$1,
	    useMemo: Q$1,
	    useReducer: Q$1,
	    useRef: Q$1,
	    useState: Q$1,
	    useDebugValue: Q$1,
	    useDeferredValue: Q$1,
	    useTransition: Q$1,
	    useMutableSource: Q$1,
	    useSyncExternalStore: Q$1,
	    useId: Q$1,
	    unstable_isNewReconciler: !1
	  },
	  Yh = {
	    readContext: Vg,
	    useCallback: function (a, b) {
	      ci().memoizedState = [a, void 0 === b ? null : b];
	      return a;
	    },
	    useContext: Vg,
	    useEffect: vi,
	    useImperativeHandle: function (a, b, c) {
	      c = null !== c && void 0 !== c ? c.concat([a]) : null;
	      return ti(4194308, 4, yi.bind(null, b, a), c);
	    },
	    useLayoutEffect: function (a, b) {
	      return ti(4194308, 4, a, b);
	    },
	    useInsertionEffect: function (a, b) {
	      return ti(4, 2, a, b);
	    },
	    useMemo: function (a, b) {
	      var c = ci();
	      b = void 0 === b ? null : b;
	      a = a();
	      c.memoizedState = [a, b];
	      return a;
	    },
	    useReducer: function (a, b, c) {
	      var d = ci();
	      b = void 0 !== c ? c(b) : b;
	      d.memoizedState = d.baseState = b;
	      a = {
	        pending: null,
	        interleaved: null,
	        lanes: 0,
	        dispatch: null,
	        lastRenderedReducer: a,
	        lastRenderedState: b
	      };
	      d.queue = a;
	      a = a.dispatch = Gi.bind(null, N$1, a);
	      return [d.memoizedState, a];
	    },
	    useRef: function (a) {
	      var b = ci();
	      a = {
	        current: a
	      };
	      return b.memoizedState = a;
	    },
	    useState: qi,
	    useDebugValue: Ai,
	    useDeferredValue: function (a) {
	      return ci().memoizedState = a;
	    },
	    useTransition: function () {
	      var a = qi(!1),
	        b = a[0];
	      a = Ei.bind(null, a[1]);
	      ci().memoizedState = a;
	      return [b, a];
	    },
	    useMutableSource: function () {},
	    useSyncExternalStore: function (a, b, c) {
	      var d = N$1,
	        e = ci();
	      if (I$1) {
	        if (void 0 === c) throw Error(p$5(407));
	        c = c();
	      } else {
	        c = b();
	        if (null === R) throw Error(p$5(349));
	        0 !== (Rh & 30) || ni(d, b, c);
	      }
	      e.memoizedState = c;
	      var f = {
	        value: c,
	        getSnapshot: b
	      };
	      e.queue = f;
	      vi(ki.bind(null, d, f, a), [a]);
	      d.flags |= 2048;
	      li(9, mi.bind(null, d, f, c, b), void 0, null);
	      return c;
	    },
	    useId: function () {
	      var a = ci(),
	        b = R.identifierPrefix;
	      if (I$1) {
	        var c = sg;
	        var d = rg;
	        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
	        b = ":" + b + "R" + c;
	        c = Uh++;
	        0 < c && (b += "H" + c.toString(32));
	        b += ":";
	      } else c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
	      return a.memoizedState = b;
	    },
	    unstable_isNewReconciler: !1
	  },
	  Zh = {
	    readContext: Vg,
	    useCallback: Bi,
	    useContext: Vg,
	    useEffect: ji,
	    useImperativeHandle: zi,
	    useInsertionEffect: wi,
	    useLayoutEffect: xi,
	    useMemo: Ci,
	    useReducer: fi,
	    useRef: si,
	    useState: function () {
	      return fi(ei);
	    },
	    useDebugValue: Ai,
	    useDeferredValue: function (a) {
	      var b = di();
	      return Di(b, O.memoizedState, a);
	    },
	    useTransition: function () {
	      var a = fi(ei)[0],
	        b = di().memoizedState;
	      return [a, b];
	    },
	    useMutableSource: hi,
	    useSyncExternalStore: ii,
	    useId: Fi,
	    unstable_isNewReconciler: !1
	  },
	  $h = {
	    readContext: Vg,
	    useCallback: Bi,
	    useContext: Vg,
	    useEffect: ji,
	    useImperativeHandle: zi,
	    useInsertionEffect: wi,
	    useLayoutEffect: xi,
	    useMemo: Ci,
	    useReducer: gi,
	    useRef: si,
	    useState: function () {
	      return gi(ei);
	    },
	    useDebugValue: Ai,
	    useDeferredValue: function (a) {
	      var b = di();
	      return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
	    },
	    useTransition: function () {
	      var a = gi(ei)[0],
	        b = di().memoizedState;
	      return [a, b];
	    },
	    useMutableSource: hi,
	    useSyncExternalStore: ii,
	    useId: Fi,
	    unstable_isNewReconciler: !1
	  };
	function Ki(a, b) {
	  try {
	    var c = "",
	      d = b;
	    do c += Pa(d), d = d.return; while (d);
	    var e = c;
	  } catch (f) {
	    e = "\nError generating stack: " + f.message + "\n" + f.stack;
	  }
	  return {
	    value: a,
	    source: b,
	    stack: e,
	    digest: null
	  };
	}
	function Li(a, b, c) {
	  return {
	    value: a,
	    source: null,
	    stack: null != c ? c : null,
	    digest: null != b ? b : null
	  };
	}
	function Mi(a, b) {
	  try {
	    console.error(b.value);
	  } catch (c) {
	    setTimeout(function () {
	      throw c;
	    });
	  }
	}
	var Ni = "function" === typeof WeakMap ? WeakMap : Map;
	function Oi(a, b, c) {
	  c = ch(-1, c);
	  c.tag = 3;
	  c.payload = {
	    element: null
	  };
	  var d = b.value;
	  c.callback = function () {
	    Pi || (Pi = !0, Qi = d);
	    Mi(a, b);
	  };
	  return c;
	}
	function Ri(a, b, c) {
	  c = ch(-1, c);
	  c.tag = 3;
	  var d = a.type.getDerivedStateFromError;
	  if ("function" === typeof d) {
	    var e = b.value;
	    c.payload = function () {
	      return d(e);
	    };
	    c.callback = function () {
	      Mi(a, b);
	    };
	  }
	  var f = a.stateNode;
	  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
	    Mi(a, b);
	    "function" !== typeof d && (null === Si ? Si = new Set([this]) : Si.add(this));
	    var c = b.stack;
	    this.componentDidCatch(b.value, {
	      componentStack: null !== c ? c : ""
	    });
	  });
	  return c;
	}
	function Ti(a, b, c) {
	  var d = a.pingCache;
	  if (null === d) {
	    d = a.pingCache = new Ni();
	    var e = new Set();
	    d.set(b, e);
	  } else e = d.get(b), void 0 === e && (e = new Set(), d.set(b, e));
	  e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
	}
	function Vi(a) {
	  do {
	    var b;
	    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
	    if (b) return a;
	    a = a.return;
	  } while (null !== a);
	  return null;
	}
	function Wi(a, b, c, d, e) {
	  if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
	  a.flags |= 65536;
	  a.lanes = e;
	  return a;
	}
	var Xi = ua.ReactCurrentOwner,
	  Ug = !1;
	function Yi(a, b, c, d) {
	  b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
	}
	function Zi(a, b, c, d, e) {
	  c = c.render;
	  var f = b.ref;
	  Tg(b, e);
	  d = Xh(a, b, c, d, f, e);
	  c = bi();
	  if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
	  I$1 && c && vg(b);
	  b.flags |= 1;
	  Yi(a, b, d, e);
	  return b.child;
	}
	function aj(a, b, c, d, e) {
	  if (null === a) {
	    var f = c.type;
	    if ("function" === typeof f && !bj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, cj(a, b, f, d, e);
	    a = yh(c.type, null, d, b, b.mode, e);
	    a.ref = b.ref;
	    a.return = b;
	    return b.child = a;
	  }
	  f = a.child;
	  if (0 === (a.lanes & e)) {
	    var g = f.memoizedProps;
	    c = c.compare;
	    c = null !== c ? c : Ie;
	    if (c(g, d) && a.ref === b.ref) return $i(a, b, e);
	  }
	  b.flags |= 1;
	  a = wh(f, d);
	  a.ref = b.ref;
	  a.return = b;
	  return b.child = a;
	}
	function cj(a, b, c, d, e) {
	  if (null !== a) {
	    var f = a.memoizedProps;
	    if (Ie(f, d) && a.ref === b.ref) if (Ug = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (Ug = !0);else return b.lanes = a.lanes, $i(a, b, e);
	  }
	  return dj(a, b, c, d, e);
	}
	function ej(a, b, c) {
	  var d = b.pendingProps,
	    e = d.children,
	    f = null !== a ? a.memoizedState : null;
	  if ("hidden" === d.mode) {
	    if (0 === (b.mode & 1)) b.memoizedState = {
	      baseLanes: 0,
	      cachePool: null,
	      transitions: null
	    }, G$1(fj, gj), gj |= c;else {
	      if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
	        baseLanes: a,
	        cachePool: null,
	        transitions: null
	      }, b.updateQueue = null, G$1(fj, gj), gj |= a, null;
	      b.memoizedState = {
	        baseLanes: 0,
	        cachePool: null,
	        transitions: null
	      };
	      d = null !== f ? f.baseLanes : c;
	      G$1(fj, gj);
	      gj |= d;
	    }
	  } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G$1(fj, gj), gj |= d;
	  Yi(a, b, e, c);
	  return b.child;
	}
	function hj(a, b) {
	  var c = b.ref;
	  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
	}
	function dj(a, b, c, d, e) {
	  var f = Zf(c) ? Xf : H$1.current;
	  f = Yf(b, f);
	  Tg(b, e);
	  c = Xh(a, b, c, d, f, e);
	  d = bi();
	  if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
	  I$1 && d && vg(b);
	  b.flags |= 1;
	  Yi(a, b, c, e);
	  return b.child;
	}
	function ij(a, b, c, d, e) {
	  if (Zf(c)) {
	    var f = !0;
	    cg(b);
	  } else f = !1;
	  Tg(b, e);
	  if (null === b.stateNode) jj(a, b), ph(b, c, d), rh(b, c, d, e), d = !0;else if (null === a) {
	    var g = b.stateNode,
	      h = b.memoizedProps;
	    g.props = h;
	    var k = g.context,
	      l = c.contextType;
	    "object" === typeof l && null !== l ? l = Vg(l) : (l = Zf(c) ? Xf : H$1.current, l = Yf(b, l));
	    var m = c.getDerivedStateFromProps,
	      q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
	    q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && qh(b, g, d, l);
	    $g = !1;
	    var r = b.memoizedState;
	    g.state = r;
	    gh(b, d, g, e);
	    k = b.memoizedState;
	    h !== d || r !== k || Wf.current || $g ? ("function" === typeof m && (kh(b, c, m, d), k = b.memoizedState), (h = $g || oh(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
	  } else {
	    g = b.stateNode;
	    bh(a, b);
	    h = b.memoizedProps;
	    l = b.type === b.elementType ? h : Lg(b.type, h);
	    g.props = l;
	    q = b.pendingProps;
	    r = g.context;
	    k = c.contextType;
	    "object" === typeof k && null !== k ? k = Vg(k) : (k = Zf(c) ? Xf : H$1.current, k = Yf(b, k));
	    var y = c.getDerivedStateFromProps;
	    (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && qh(b, g, d, k);
	    $g = !1;
	    r = b.memoizedState;
	    g.state = r;
	    gh(b, d, g, e);
	    var n = b.memoizedState;
	    h !== q || r !== n || Wf.current || $g ? ("function" === typeof y && (kh(b, c, y, d), n = b.memoizedState), (l = $g || oh(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
	  }
	  return kj(a, b, c, d, f, e);
	}
	function kj(a, b, c, d, e, f) {
	  hj(a, b);
	  var g = 0 !== (b.flags & 128);
	  if (!d && !g) return e && dg(b, c, !1), $i(a, b, f);
	  d = b.stateNode;
	  Xi.current = b;
	  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
	  b.flags |= 1;
	  null !== a && g ? (b.child = Bh(b, a.child, null, f), b.child = Bh(b, null, h, f)) : Yi(a, b, h, f);
	  b.memoizedState = d.state;
	  e && dg(b, c, !0);
	  return b.child;
	}
	function lj(a) {
	  var b = a.stateNode;
	  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
	  Ih(a, b.containerInfo);
	}
	function mj(a, b, c, d, e) {
	  Ig();
	  Jg(e);
	  b.flags |= 256;
	  Yi(a, b, c, d);
	  return b.child;
	}
	var nj = {
	  dehydrated: null,
	  treeContext: null,
	  retryLane: 0
	};
	function oj(a) {
	  return {
	    baseLanes: a,
	    cachePool: null,
	    transitions: null
	  };
	}
	function pj(a, b, c) {
	  var d = b.pendingProps,
	    e = M$1.current,
	    f = !1,
	    g = 0 !== (b.flags & 128),
	    h;
	  (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
	  if (h) f = !0, b.flags &= -129;else if (null === a || null !== a.memoizedState) e |= 1;
	  G$1(M$1, e & 1);
	  if (null === a) {
	    Eg(b);
	    a = b.memoizedState;
	    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
	    g = d.children;
	    a = d.fallback;
	    return f ? (d = b.mode, f = b.child, g = {
	      mode: "hidden",
	      children: g
	    }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = qj(g, d, 0, null), a = Ah(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
	  }
	  e = a.memoizedState;
	  if (null !== e && (h = e.dehydrated, null !== h)) return sj(a, b, g, d, h, e, c);
	  if (f) {
	    f = d.fallback;
	    g = b.mode;
	    e = a.child;
	    h = e.sibling;
	    var k = {
	      mode: "hidden",
	      children: d.children
	    };
	    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
	    null !== h ? f = wh(h, f) : (f = Ah(f, g, c, null), f.flags |= 2);
	    f.return = b;
	    d.return = b;
	    d.sibling = f;
	    b.child = d;
	    d = f;
	    f = b.child;
	    g = a.child.memoizedState;
	    g = null === g ? oj(c) : {
	      baseLanes: g.baseLanes | c,
	      cachePool: null,
	      transitions: g.transitions
	    };
	    f.memoizedState = g;
	    f.childLanes = a.childLanes & ~c;
	    b.memoizedState = nj;
	    return d;
	  }
	  f = a.child;
	  a = f.sibling;
	  d = wh(f, {
	    mode: "visible",
	    children: d.children
	  });
	  0 === (b.mode & 1) && (d.lanes = c);
	  d.return = b;
	  d.sibling = null;
	  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
	  b.child = d;
	  b.memoizedState = null;
	  return d;
	}
	function rj(a, b) {
	  b = qj({
	    mode: "visible",
	    children: b
	  }, a.mode, 0, null);
	  b.return = a;
	  return a.child = b;
	}
	function tj(a, b, c, d) {
	  null !== d && Jg(d);
	  Bh(b, a.child, null, c);
	  a = rj(b, b.pendingProps.children);
	  a.flags |= 2;
	  b.memoizedState = null;
	  return a;
	}
	function sj(a, b, c, d, e, f, g) {
	  if (c) {
	    if (b.flags & 256) return b.flags &= -257, d = Li(Error(p$5(422))), tj(a, b, g, d);
	    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
	    f = d.fallback;
	    e = b.mode;
	    d = qj({
	      mode: "visible",
	      children: d.children
	    }, e, 0, null);
	    f = Ah(f, e, g, null);
	    f.flags |= 2;
	    d.return = b;
	    f.return = b;
	    d.sibling = f;
	    b.child = d;
	    0 !== (b.mode & 1) && Bh(b, a.child, null, g);
	    b.child.memoizedState = oj(g);
	    b.memoizedState = nj;
	    return f;
	  }
	  if (0 === (b.mode & 1)) return tj(a, b, g, null);
	  if ("$!" === e.data) {
	    d = e.nextSibling && e.nextSibling.dataset;
	    if (d) var h = d.dgst;
	    d = h;
	    f = Error(p$5(419));
	    d = Li(f, d, void 0);
	    return tj(a, b, g, d);
	  }
	  h = 0 !== (g & a.childLanes);
	  if (Ug || h) {
	    d = R;
	    if (null !== d) {
	      switch (g & -g) {
	        case 4:
	          e = 2;
	          break;
	        case 16:
	          e = 8;
	          break;
	        case 64:
	        case 128:
	        case 256:
	        case 512:
	        case 1024:
	        case 2048:
	        case 4096:
	        case 8192:
	        case 16384:
	        case 32768:
	        case 65536:
	        case 131072:
	        case 262144:
	        case 524288:
	        case 1048576:
	        case 2097152:
	        case 4194304:
	        case 8388608:
	        case 16777216:
	        case 33554432:
	        case 67108864:
	          e = 32;
	          break;
	        case 536870912:
	          e = 268435456;
	          break;
	        default:
	          e = 0;
	      }
	      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
	      0 !== e && e !== f.retryLane && (f.retryLane = e, Zg(a, e), mh(d, a, e, -1));
	    }
	    uj();
	    d = Li(Error(p$5(421)));
	    return tj(a, b, g, d);
	  }
	  if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
	  a = f.treeContext;
	  yg = Lf(e.nextSibling);
	  xg = b;
	  I$1 = !0;
	  zg = null;
	  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
	  b = rj(b, d.children);
	  b.flags |= 4096;
	  return b;
	}
	function wj(a, b, c) {
	  a.lanes |= b;
	  var d = a.alternate;
	  null !== d && (d.lanes |= b);
	  Sg(a.return, b, c);
	}
	function xj(a, b, c, d, e) {
	  var f = a.memoizedState;
	  null === f ? a.memoizedState = {
	    isBackwards: b,
	    rendering: null,
	    renderingStartTime: 0,
	    last: d,
	    tail: c,
	    tailMode: e
	  } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
	}
	function yj(a, b, c) {
	  var d = b.pendingProps,
	    e = d.revealOrder,
	    f = d.tail;
	  Yi(a, b, d.children, c);
	  d = M$1.current;
	  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;else {
	    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
	      if (13 === a.tag) null !== a.memoizedState && wj(a, c, b);else if (19 === a.tag) wj(a, c, b);else if (null !== a.child) {
	        a.child.return = a;
	        a = a.child;
	        continue;
	      }
	      if (a === b) break a;
	      for (; null === a.sibling;) {
	        if (null === a.return || a.return === b) break a;
	        a = a.return;
	      }
	      a.sibling.return = a.return;
	      a = a.sibling;
	    }
	    d &= 1;
	  }
	  G$1(M$1, d);
	  if (0 === (b.mode & 1)) b.memoizedState = null;else switch (e) {
	    case "forwards":
	      c = b.child;
	      for (e = null; null !== c;) a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
	      c = e;
	      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
	      xj(b, !1, e, c, f);
	      break;
	    case "backwards":
	      c = null;
	      e = b.child;
	      for (b.child = null; null !== e;) {
	        a = e.alternate;
	        if (null !== a && null === Mh(a)) {
	          b.child = e;
	          break;
	        }
	        a = e.sibling;
	        e.sibling = c;
	        c = e;
	        e = a;
	      }
	      xj(b, !0, c, null, f);
	      break;
	    case "together":
	      xj(b, !1, null, null, void 0);
	      break;
	    default:
	      b.memoizedState = null;
	  }
	  return b.child;
	}
	function jj(a, b) {
	  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	}
	function $i(a, b, c) {
	  null !== a && (b.dependencies = a.dependencies);
	  hh |= b.lanes;
	  if (0 === (c & b.childLanes)) return null;
	  if (null !== a && b.child !== a.child) throw Error(p$5(153));
	  if (null !== b.child) {
	    a = b.child;
	    c = wh(a, a.pendingProps);
	    b.child = c;
	    for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
	    c.sibling = null;
	  }
	  return b.child;
	}
	function zj(a, b, c) {
	  switch (b.tag) {
	    case 3:
	      lj(b);
	      Ig();
	      break;
	    case 5:
	      Kh(b);
	      break;
	    case 1:
	      Zf(b.type) && cg(b);
	      break;
	    case 4:
	      Ih(b, b.stateNode.containerInfo);
	      break;
	    case 10:
	      var d = b.type._context,
	        e = b.memoizedProps.value;
	      G$1(Mg, d._currentValue);
	      d._currentValue = e;
	      break;
	    case 13:
	      d = b.memoizedState;
	      if (null !== d) {
	        if (null !== d.dehydrated) return G$1(M$1, M$1.current & 1), b.flags |= 128, null;
	        if (0 !== (c & b.child.childLanes)) return pj(a, b, c);
	        G$1(M$1, M$1.current & 1);
	        a = $i(a, b, c);
	        return null !== a ? a.sibling : null;
	      }
	      G$1(M$1, M$1.current & 1);
	      break;
	    case 19:
	      d = 0 !== (c & b.childLanes);
	      if (0 !== (a.flags & 128)) {
	        if (d) return yj(a, b, c);
	        b.flags |= 128;
	      }
	      e = b.memoizedState;
	      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
	      G$1(M$1, M$1.current);
	      if (d) break;else return null;
	    case 22:
	    case 23:
	      return b.lanes = 0, ej(a, b, c);
	  }
	  return $i(a, b, c);
	}
	var Aj, Bj, Cj, Dj;
	Aj = function (a, b) {
	  for (var c = b.child; null !== c;) {
	    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }
	    if (c === b) break;
	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === b) return;
	      c = c.return;
	    }
	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	};
	Bj = function () {};
	Cj = function (a, b, c, d) {
	  var e = a.memoizedProps;
	  if (e !== d) {
	    a = b.stateNode;
	    Hh(Eh.current);
	    var f = null;
	    switch (c) {
	      case "input":
	        e = Ya(a, e);
	        d = Ya(a, d);
	        f = [];
	        break;
	      case "select":
	        e = A$2({}, e, {
	          value: void 0
	        });
	        d = A$2({}, d, {
	          value: void 0
	        });
	        f = [];
	        break;
	      case "textarea":
	        e = gb(a, e);
	        d = gb(a, d);
	        f = [];
	        break;
	      default:
	        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
	    }
	    ub(c, d);
	    var g;
	    c = null;
	    for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
	      var h = e[l];
	      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
	    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
	    for (l in d) {
	      var k = d[l];
	      h = null != e ? e[l] : void 0;
	      if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
	        if (h) {
	          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
	          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
	        } else c || (f || (f = []), f.push(l, c)), c = k;
	      } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D$1("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
	    }
	    c && (f = f || []).push("style", c);
	    var l = f;
	    if (b.updateQueue = l) b.flags |= 4;
	  }
	};
	Dj = function (a, b, c, d) {
	  c !== d && (b.flags |= 4);
	};
	function Ej(a, b) {
	  if (!I$1) switch (a.tailMode) {
	    case "hidden":
	      b = a.tail;
	      for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
	      null === c ? a.tail = null : c.sibling = null;
	      break;
	    case "collapsed":
	      c = a.tail;
	      for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
	      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
	  }
	}
	function S$1(a) {
	  var b = null !== a.alternate && a.alternate.child === a.child,
	    c = 0,
	    d = 0;
	  if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
	  a.subtreeFlags |= d;
	  a.childLanes = c;
	  return b;
	}
	function Fj(a, b, c) {
	  var d = b.pendingProps;
	  wg(b);
	  switch (b.tag) {
	    case 2:
	    case 16:
	    case 15:
	    case 0:
	    case 11:
	    case 7:
	    case 8:
	    case 12:
	    case 9:
	    case 14:
	      return S$1(b), null;
	    case 1:
	      return Zf(b.type) && $f(), S$1(b), null;
	    case 3:
	      d = b.stateNode;
	      Jh();
	      E$1(Wf);
	      E$1(H$1);
	      Oh();
	      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
	      if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
	      Bj(a, b);
	      S$1(b);
	      return null;
	    case 5:
	      Lh(b);
	      var e = Hh(Gh.current);
	      c = b.type;
	      if (null !== a && null != b.stateNode) Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);else {
	        if (!d) {
	          if (null === b.stateNode) throw Error(p$5(166));
	          S$1(b);
	          return null;
	        }
	        a = Hh(Eh.current);
	        if (Gg(b)) {
	          d = b.stateNode;
	          c = b.type;
	          var f = b.memoizedProps;
	          d[Of] = b;
	          d[Pf] = f;
	          a = 0 !== (b.mode & 1);
	          switch (c) {
	            case "dialog":
	              D$1("cancel", d);
	              D$1("close", d);
	              break;
	            case "iframe":
	            case "object":
	            case "embed":
	              D$1("load", d);
	              break;
	            case "video":
	            case "audio":
	              for (e = 0; e < lf.length; e++) D$1(lf[e], d);
	              break;
	            case "source":
	              D$1("error", d);
	              break;
	            case "img":
	            case "image":
	            case "link":
	              D$1("error", d);
	              D$1("load", d);
	              break;
	            case "details":
	              D$1("toggle", d);
	              break;
	            case "input":
	              Za(d, f);
	              D$1("invalid", d);
	              break;
	            case "select":
	              d._wrapperState = {
	                wasMultiple: !!f.multiple
	              };
	              D$1("invalid", d);
	              break;
	            case "textarea":
	              hb(d, f), D$1("invalid", d);
	          }
	          ub(c, f);
	          e = null;
	          for (var g in f) if (f.hasOwnProperty(g)) {
	            var h = f[g];
	            "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D$1("scroll", d);
	          }
	          switch (c) {
	            case "input":
	              Va(d);
	              db(d, f, !0);
	              break;
	            case "textarea":
	              Va(d);
	              jb(d);
	              break;
	            case "select":
	            case "option":
	              break;
	            default:
	              "function" === typeof f.onClick && (d.onclick = Bf);
	          }
	          d = e;
	          b.updateQueue = d;
	          null !== d && (b.flags |= 4);
	        } else {
	          g = 9 === e.nodeType ? e : e.ownerDocument;
	          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
	          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
	            is: d.is
	          }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
	          a[Of] = b;
	          a[Pf] = d;
	          Aj(a, b, !1, !1);
	          b.stateNode = a;
	          a: {
	            g = vb(c, d);
	            switch (c) {
	              case "dialog":
	                D$1("cancel", a);
	                D$1("close", a);
	                e = d;
	                break;
	              case "iframe":
	              case "object":
	              case "embed":
	                D$1("load", a);
	                e = d;
	                break;
	              case "video":
	              case "audio":
	                for (e = 0; e < lf.length; e++) D$1(lf[e], a);
	                e = d;
	                break;
	              case "source":
	                D$1("error", a);
	                e = d;
	                break;
	              case "img":
	              case "image":
	              case "link":
	                D$1("error", a);
	                D$1("load", a);
	                e = d;
	                break;
	              case "details":
	                D$1("toggle", a);
	                e = d;
	                break;
	              case "input":
	                Za(a, d);
	                e = Ya(a, d);
	                D$1("invalid", a);
	                break;
	              case "option":
	                e = d;
	                break;
	              case "select":
	                a._wrapperState = {
	                  wasMultiple: !!d.multiple
	                };
	                e = A$2({}, d, {
	                  value: void 0
	                });
	                D$1("invalid", a);
	                break;
	              case "textarea":
	                hb(a, d);
	                e = gb(a, d);
	                D$1("invalid", a);
	                break;
	              default:
	                e = d;
	            }
	            ub(c, e);
	            h = e;
	            for (f in h) if (h.hasOwnProperty(f)) {
	              var k = h[f];
	              "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D$1("scroll", a) : null != k && ta(a, f, k, g));
	            }
	            switch (c) {
	              case "input":
	                Va(a);
	                db(a, d, !1);
	                break;
	              case "textarea":
	                Va(a);
	                jb(a);
	                break;
	              case "option":
	                null != d.value && a.setAttribute("value", "" + Sa(d.value));
	                break;
	              case "select":
	                a.multiple = !!d.multiple;
	                f = d.value;
	                null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
	                break;
	              default:
	                "function" === typeof e.onClick && (a.onclick = Bf);
	            }
	            switch (c) {
	              case "button":
	              case "input":
	              case "select":
	              case "textarea":
	                d = !!d.autoFocus;
	                break a;
	              case "img":
	                d = !0;
	                break a;
	              default:
	                d = !1;
	            }
	          }
	          d && (b.flags |= 4);
	        }
	        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
	      }
	      S$1(b);
	      return null;
	    case 6:
	      if (a && null != b.stateNode) Dj(a, b, a.memoizedProps, d);else {
	        if ("string" !== typeof d && null === b.stateNode) throw Error(p$5(166));
	        c = Hh(Gh.current);
	        Hh(Eh.current);
	        if (Gg(b)) {
	          d = b.stateNode;
	          c = b.memoizedProps;
	          d[Of] = b;
	          if (f = d.nodeValue !== c) if (a = xg, null !== a) switch (a.tag) {
	            case 3:
	              Af(d.nodeValue, c, 0 !== (a.mode & 1));
	              break;
	            case 5:
	              !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
	          }
	          f && (b.flags |= 4);
	        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
	      }
	      S$1(b);
	      return null;
	    case 13:
	      E$1(M$1);
	      d = b.memoizedState;
	      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
	        if (I$1 && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = !1;else if (f = Gg(b), null !== d && null !== d.dehydrated) {
	          if (null === a) {
	            if (!f) throw Error(p$5(318));
	            f = b.memoizedState;
	            f = null !== f ? f.dehydrated : null;
	            if (!f) throw Error(p$5(317));
	            f[Of] = b;
	          } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
	          S$1(b);
	          f = !1;
	        } else null !== zg && (Gj(zg), zg = null), f = !0;
	        if (!f) return b.flags & 65536 ? b : null;
	      }
	      if (0 !== (b.flags & 128)) return b.lanes = c, b;
	      d = null !== d;
	      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M$1.current & 1) ? 0 === T$1 && (T$1 = 3) : uj()));
	      null !== b.updateQueue && (b.flags |= 4);
	      S$1(b);
	      return null;
	    case 4:
	      return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S$1(b), null;
	    case 10:
	      return Rg(b.type._context), S$1(b), null;
	    case 17:
	      return Zf(b.type) && $f(), S$1(b), null;
	    case 19:
	      E$1(M$1);
	      f = b.memoizedState;
	      if (null === f) return S$1(b), null;
	      d = 0 !== (b.flags & 128);
	      g = f.rendering;
	      if (null === g) {
	        if (d) Ej(f, !1);else {
	          if (0 !== T$1 || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
	            g = Mh(a);
	            if (null !== g) {
	              b.flags |= 128;
	              Ej(f, !1);
	              d = g.updateQueue;
	              null !== d && (b.updateQueue = d, b.flags |= 4);
	              b.subtreeFlags = 0;
	              d = c;
	              for (c = b.child; null !== c;) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
	                lanes: a.lanes,
	                firstContext: a.firstContext
	              }), c = c.sibling;
	              G$1(M$1, M$1.current & 1 | 2);
	              return b.child;
	            }
	            a = a.sibling;
	          }
	          null !== f.tail && B$1() > Hj && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
	        }
	      } else {
	        if (!d) if (a = Mh(g), null !== a) {
	          if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I$1) return S$1(b), null;
	        } else 2 * B$1() - f.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
	        f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
	      }
	      if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B$1(), b.sibling = null, c = M$1.current, G$1(M$1, d ? c & 1 | 2 : c & 1), b;
	      S$1(b);
	      return null;
	    case 22:
	    case 23:
	      return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S$1(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S$1(b), null;
	    case 24:
	      return null;
	    case 25:
	      return null;
	  }
	  throw Error(p$5(156, b.tag));
	}
	function Jj(a, b) {
	  wg(b);
	  switch (b.tag) {
	    case 1:
	      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
	    case 3:
	      return Jh(), E$1(Wf), E$1(H$1), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
	    case 5:
	      return Lh(b), null;
	    case 13:
	      E$1(M$1);
	      a = b.memoizedState;
	      if (null !== a && null !== a.dehydrated) {
	        if (null === b.alternate) throw Error(p$5(340));
	        Ig();
	      }
	      a = b.flags;
	      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
	    case 19:
	      return E$1(M$1), null;
	    case 4:
	      return Jh(), null;
	    case 10:
	      return Rg(b.type._context), null;
	    case 22:
	    case 23:
	      return Ij(), null;
	    case 24:
	      return null;
	    default:
	      return null;
	  }
	}
	var Kj = !1,
	  U$1 = !1,
	  Lj = "function" === typeof WeakSet ? WeakSet : Set,
	  V$1 = null;
	function Mj(a, b) {
	  var c = a.ref;
	  if (null !== c) if ("function" === typeof c) try {
	    c(null);
	  } catch (d) {
	    W$1(a, b, d);
	  } else c.current = null;
	}
	function Nj(a, b, c) {
	  try {
	    c();
	  } catch (d) {
	    W$1(a, b, d);
	  }
	}
	var Oj = !1;
	function Pj(a, b) {
	  Cf = dd;
	  a = Me$1();
	  if (Ne$1(a)) {
	    if ("selectionStart" in a) var c = {
	      start: a.selectionStart,
	      end: a.selectionEnd
	    };else a: {
	      c = (c = a.ownerDocument) && c.defaultView || window;
	      var d = c.getSelection && c.getSelection();
	      if (d && 0 !== d.rangeCount) {
	        c = d.anchorNode;
	        var e = d.anchorOffset,
	          f = d.focusNode;
	        d = d.focusOffset;
	        try {
	          c.nodeType, f.nodeType;
	        } catch (F) {
	          c = null;
	          break a;
	        }
	        var g = 0,
	          h = -1,
	          k = -1,
	          l = 0,
	          m = 0,
	          q = a,
	          r = null;
	        b: for (;;) {
	          for (var y;;) {
	            q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
	            q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
	            3 === q.nodeType && (g += q.nodeValue.length);
	            if (null === (y = q.firstChild)) break;
	            r = q;
	            q = y;
	          }
	          for (;;) {
	            if (q === a) break b;
	            r === c && ++l === e && (h = g);
	            r === f && ++m === d && (k = g);
	            if (null !== (y = q.nextSibling)) break;
	            q = r;
	            r = q.parentNode;
	          }
	          q = y;
	        }
	        c = -1 === h || -1 === k ? null : {
	          start: h,
	          end: k
	        };
	      } else c = null;
	    }
	    c = c || {
	      start: 0,
	      end: 0
	    };
	  } else c = null;
	  Df = {
	    focusedElem: a,
	    selectionRange: c
	  };
	  dd = !1;
	  for (V$1 = b; null !== V$1;) if (b = V$1, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V$1 = a;else for (; null !== V$1;) {
	    b = V$1;
	    try {
	      var n = b.alternate;
	      if (0 !== (b.flags & 1024)) switch (b.tag) {
	        case 0:
	        case 11:
	        case 15:
	          break;
	        case 1:
	          if (null !== n) {
	            var t = n.memoizedProps,
	              J = n.memoizedState,
	              x = b.stateNode,
	              w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Lg(b.type, t), J);
	            x.__reactInternalSnapshotBeforeUpdate = w;
	          }
	          break;
	        case 3:
	          var u = b.stateNode.containerInfo;
	          1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
	          break;
	        case 5:
	        case 6:
	        case 4:
	        case 17:
	          break;
	        default:
	          throw Error(p$5(163));
	      }
	    } catch (F) {
	      W$1(b, b.return, F);
	    }
	    a = b.sibling;
	    if (null !== a) {
	      a.return = b.return;
	      V$1 = a;
	      break;
	    }
	    V$1 = b.return;
	  }
	  n = Oj;
	  Oj = !1;
	  return n;
	}
	function Qj(a, b, c) {
	  var d = b.updateQueue;
	  d = null !== d ? d.lastEffect : null;
	  if (null !== d) {
	    var e = d = d.next;
	    do {
	      if ((e.tag & a) === a) {
	        var f = e.destroy;
	        e.destroy = void 0;
	        void 0 !== f && Nj(b, c, f);
	      }
	      e = e.next;
	    } while (e !== d);
	  }
	}
	function Rj(a, b) {
	  b = b.updateQueue;
	  b = null !== b ? b.lastEffect : null;
	  if (null !== b) {
	    var c = b = b.next;
	    do {
	      if ((c.tag & a) === a) {
	        var d = c.create;
	        c.destroy = d();
	      }
	      c = c.next;
	    } while (c !== b);
	  }
	}
	function Sj(a) {
	  var b = a.ref;
	  if (null !== b) {
	    var c = a.stateNode;
	    switch (a.tag) {
	      case 5:
	        a = c;
	        break;
	      default:
	        a = c;
	    }
	    "function" === typeof b ? b(a) : b.current = a;
	  }
	}
	function Tj(a) {
	  var b = a.alternate;
	  null !== b && (a.alternate = null, Tj(b));
	  a.child = null;
	  a.deletions = null;
	  a.sibling = null;
	  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
	  a.stateNode = null;
	  a.return = null;
	  a.dependencies = null;
	  a.memoizedProps = null;
	  a.memoizedState = null;
	  a.pendingProps = null;
	  a.stateNode = null;
	  a.updateQueue = null;
	}
	function Uj(a) {
	  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}
	function Vj(a) {
	  a: for (;;) {
	    for (; null === a.sibling;) {
	      if (null === a.return || Uj(a.return)) return null;
	      a = a.return;
	    }
	    a.sibling.return = a.return;
	    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
	      if (a.flags & 2) continue a;
	      if (null === a.child || 4 === a.tag) continue a;else a.child.return = a, a = a.child;
	    }
	    if (!(a.flags & 2)) return a.stateNode;
	  }
	}
	function Wj(a, b, c) {
	  var d = a.tag;
	  if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
	}
	function Xj(a, b, c) {
	  var d = a.tag;
	  if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (Xj(a, b, c), a = a.sibling; null !== a;) Xj(a, b, c), a = a.sibling;
	}
	var X$1 = null,
	  Yj = !1;
	function Zj(a, b, c) {
	  for (c = c.child; null !== c;) ak(a, b, c), c = c.sibling;
	}
	function ak(a, b, c) {
	  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
	    lc.onCommitFiberUnmount(kc, c);
	  } catch (h) {}
	  switch (c.tag) {
	    case 5:
	      U$1 || Mj(c, b);
	    case 6:
	      var d = X$1,
	        e = Yj;
	      X$1 = null;
	      Zj(a, b, c);
	      X$1 = d;
	      Yj = e;
	      null !== X$1 && (Yj ? (a = X$1, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X$1.removeChild(c.stateNode));
	      break;
	    case 18:
	      null !== X$1 && (Yj ? (a = X$1, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X$1, c.stateNode));
	      break;
	    case 4:
	      d = X$1;
	      e = Yj;
	      X$1 = c.stateNode.containerInfo;
	      Yj = !0;
	      Zj(a, b, c);
	      X$1 = d;
	      Yj = e;
	      break;
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	      if (!U$1 && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
	        e = d = d.next;
	        do {
	          var f = e,
	            g = f.destroy;
	          f = f.tag;
	          void 0 !== g && (0 !== (f & 2) ? Nj(c, b, g) : 0 !== (f & 4) && Nj(c, b, g));
	          e = e.next;
	        } while (e !== d);
	      }
	      Zj(a, b, c);
	      break;
	    case 1:
	      if (!U$1 && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
	        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
	      } catch (h) {
	        W$1(c, b, h);
	      }
	      Zj(a, b, c);
	      break;
	    case 21:
	      Zj(a, b, c);
	      break;
	    case 22:
	      c.mode & 1 ? (U$1 = (d = U$1) || null !== c.memoizedState, Zj(a, b, c), U$1 = d) : Zj(a, b, c);
	      break;
	    default:
	      Zj(a, b, c);
	  }
	}
	function bk(a) {
	  var b = a.updateQueue;
	  if (null !== b) {
	    a.updateQueue = null;
	    var c = a.stateNode;
	    null === c && (c = a.stateNode = new Lj());
	    b.forEach(function (b) {
	      var d = ck.bind(null, a, b);
	      c.has(b) || (c.add(b), b.then(d, d));
	    });
	  }
	}
	function dk(a, b) {
	  var c = b.deletions;
	  if (null !== c) for (var d = 0; d < c.length; d++) {
	    var e = c[d];
	    try {
	      var f = a,
	        g = b,
	        h = g;
	      a: for (; null !== h;) {
	        switch (h.tag) {
	          case 5:
	            X$1 = h.stateNode;
	            Yj = !1;
	            break a;
	          case 3:
	            X$1 = h.stateNode.containerInfo;
	            Yj = !0;
	            break a;
	          case 4:
	            X$1 = h.stateNode.containerInfo;
	            Yj = !0;
	            break a;
	        }
	        h = h.return;
	      }
	      if (null === X$1) throw Error(p$5(160));
	      ak(f, g, e);
	      X$1 = null;
	      Yj = !1;
	      var k = e.alternate;
	      null !== k && (k.return = null);
	      e.return = null;
	    } catch (l) {
	      W$1(e, b, l);
	    }
	  }
	  if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) ek(b, a), b = b.sibling;
	}
	function ek(a, b) {
	  var c = a.alternate,
	    d = a.flags;
	  switch (a.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	      dk(b, a);
	      fk(a);
	      if (d & 4) {
	        try {
	          Qj(3, a, a.return), Rj(3, a);
	        } catch (t) {
	          W$1(a, a.return, t);
	        }
	        try {
	          Qj(5, a, a.return);
	        } catch (t) {
	          W$1(a, a.return, t);
	        }
	      }
	      break;
	    case 1:
	      dk(b, a);
	      fk(a);
	      d & 512 && null !== c && Mj(c, c.return);
	      break;
	    case 5:
	      dk(b, a);
	      fk(a);
	      d & 512 && null !== c && Mj(c, c.return);
	      if (a.flags & 32) {
	        var e = a.stateNode;
	        try {
	          ob(e, "");
	        } catch (t) {
	          W$1(a, a.return, t);
	        }
	      }
	      if (d & 4 && (e = a.stateNode, null != e)) {
	        var f = a.memoizedProps,
	          g = null !== c ? c.memoizedProps : f,
	          h = a.type,
	          k = a.updateQueue;
	        a.updateQueue = null;
	        if (null !== k) try {
	          "input" === h && "radio" === f.type && null != f.name && ab(e, f);
	          vb(h, g);
	          var l = vb(h, f);
	          for (g = 0; g < k.length; g += 2) {
	            var m = k[g],
	              q = k[g + 1];
	            "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
	          }
	          switch (h) {
	            case "input":
	              bb(e, f);
	              break;
	            case "textarea":
	              ib(e, f);
	              break;
	            case "select":
	              var r = e._wrapperState.wasMultiple;
	              e._wrapperState.wasMultiple = !!f.multiple;
	              var y = f.value;
	              null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
	          }
	          e[Pf] = f;
	        } catch (t) {
	          W$1(a, a.return, t);
	        }
	      }
	      break;
	    case 6:
	      dk(b, a);
	      fk(a);
	      if (d & 4) {
	        if (null === a.stateNode) throw Error(p$5(162));
	        e = a.stateNode;
	        f = a.memoizedProps;
	        try {
	          e.nodeValue = f;
	        } catch (t) {
	          W$1(a, a.return, t);
	        }
	      }
	      break;
	    case 3:
	      dk(b, a);
	      fk(a);
	      if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
	        bd(b.containerInfo);
	      } catch (t) {
	        W$1(a, a.return, t);
	      }
	      break;
	    case 4:
	      dk(b, a);
	      fk(a);
	      break;
	    case 13:
	      dk(b, a);
	      fk(a);
	      e = a.child;
	      e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B$1()));
	      d & 4 && bk(a);
	      break;
	    case 22:
	      m = null !== c && null !== c.memoizedState;
	      a.mode & 1 ? (U$1 = (l = U$1) || m, dk(b, a), U$1 = l) : dk(b, a);
	      fk(a);
	      if (d & 8192) {
	        l = null !== a.memoizedState;
	        if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V$1 = a, m = a.child; null !== m;) {
	          for (q = V$1 = m; null !== V$1;) {
	            r = V$1;
	            y = r.child;
	            switch (r.tag) {
	              case 0:
	              case 11:
	              case 14:
	              case 15:
	                Qj(4, r, r.return);
	                break;
	              case 1:
	                Mj(r, r.return);
	                var n = r.stateNode;
	                if ("function" === typeof n.componentWillUnmount) {
	                  d = r;
	                  c = r.return;
	                  try {
	                    b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
	                  } catch (t) {
	                    W$1(d, c, t);
	                  }
	                }
	                break;
	              case 5:
	                Mj(r, r.return);
	                break;
	              case 22:
	                if (null !== r.memoizedState) {
	                  hk(q);
	                  continue;
	                }
	            }
	            null !== y ? (y.return = r, V$1 = y) : hk(q);
	          }
	          m = m.sibling;
	        }
	        a: for (m = null, q = a;;) {
	          if (5 === q.tag) {
	            if (null === m) {
	              m = q;
	              try {
	                e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
	              } catch (t) {
	                W$1(a, a.return, t);
	              }
	            }
	          } else if (6 === q.tag) {
	            if (null === m) try {
	              q.stateNode.nodeValue = l ? "" : q.memoizedProps;
	            } catch (t) {
	              W$1(a, a.return, t);
	            }
	          } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
	            q.child.return = q;
	            q = q.child;
	            continue;
	          }
	          if (q === a) break a;
	          for (; null === q.sibling;) {
	            if (null === q.return || q.return === a) break a;
	            m === q && (m = null);
	            q = q.return;
	          }
	          m === q && (m = null);
	          q.sibling.return = q.return;
	          q = q.sibling;
	        }
	      }
	      break;
	    case 19:
	      dk(b, a);
	      fk(a);
	      d & 4 && bk(a);
	      break;
	    case 21:
	      break;
	    default:
	      dk(b, a), fk(a);
	  }
	}
	function fk(a) {
	  var b = a.flags;
	  if (b & 2) {
	    try {
	      a: {
	        for (var c = a.return; null !== c;) {
	          if (Uj(c)) {
	            var d = c;
	            break a;
	          }
	          c = c.return;
	        }
	        throw Error(p$5(160));
	      }
	      switch (d.tag) {
	        case 5:
	          var e = d.stateNode;
	          d.flags & 32 && (ob(e, ""), d.flags &= -33);
	          var f = Vj(a);
	          Xj(a, f, e);
	          break;
	        case 3:
	        case 4:
	          var g = d.stateNode.containerInfo,
	            h = Vj(a);
	          Wj(a, h, g);
	          break;
	        default:
	          throw Error(p$5(161));
	      }
	    } catch (k) {
	      W$1(a, a.return, k);
	    }
	    a.flags &= -3;
	  }
	  b & 4096 && (a.flags &= -4097);
	}
	function ik(a, b, c) {
	  V$1 = a;
	  jk(a);
	}
	function jk(a, b, c) {
	  for (var d = 0 !== (a.mode & 1); null !== V$1;) {
	    var e = V$1,
	      f = e.child;
	    if (22 === e.tag && d) {
	      var g = null !== e.memoizedState || Kj;
	      if (!g) {
	        var h = e.alternate,
	          k = null !== h && null !== h.memoizedState || U$1;
	        h = Kj;
	        var l = U$1;
	        Kj = g;
	        if ((U$1 = k) && !l) for (V$1 = e; null !== V$1;) g = V$1, k = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k ? (k.return = g, V$1 = k) : kk(e);
	        for (; null !== f;) V$1 = f, jk(f), f = f.sibling;
	        V$1 = e;
	        Kj = h;
	        U$1 = l;
	      }
	      lk(a);
	    } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V$1 = f) : lk(a);
	  }
	}
	function lk(a) {
	  for (; null !== V$1;) {
	    var b = V$1;
	    if (0 !== (b.flags & 8772)) {
	      var c = b.alternate;
	      try {
	        if (0 !== (b.flags & 8772)) switch (b.tag) {
	          case 0:
	          case 11:
	          case 15:
	            U$1 || Rj(5, b);
	            break;
	          case 1:
	            var d = b.stateNode;
	            if (b.flags & 4 && !U$1) if (null === c) d.componentDidMount();else {
	              var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
	              d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
	            }
	            var f = b.updateQueue;
	            null !== f && ih(b, f, d);
	            break;
	          case 3:
	            var g = b.updateQueue;
	            if (null !== g) {
	              c = null;
	              if (null !== b.child) switch (b.child.tag) {
	                case 5:
	                  c = b.child.stateNode;
	                  break;
	                case 1:
	                  c = b.child.stateNode;
	              }
	              ih(b, g, c);
	            }
	            break;
	          case 5:
	            var h = b.stateNode;
	            if (null === c && b.flags & 4) {
	              c = h;
	              var k = b.memoizedProps;
	              switch (b.type) {
	                case "button":
	                case "input":
	                case "select":
	                case "textarea":
	                  k.autoFocus && c.focus();
	                  break;
	                case "img":
	                  k.src && (c.src = k.src);
	              }
	            }
	            break;
	          case 6:
	            break;
	          case 4:
	            break;
	          case 12:
	            break;
	          case 13:
	            if (null === b.memoizedState) {
	              var l = b.alternate;
	              if (null !== l) {
	                var m = l.memoizedState;
	                if (null !== m) {
	                  var q = m.dehydrated;
	                  null !== q && bd(q);
	                }
	              }
	            }
	            break;
	          case 19:
	          case 17:
	          case 21:
	          case 22:
	          case 23:
	          case 25:
	            break;
	          default:
	            throw Error(p$5(163));
	        }
	        U$1 || b.flags & 512 && Sj(b);
	      } catch (r) {
	        W$1(b, b.return, r);
	      }
	    }
	    if (b === a) {
	      V$1 = null;
	      break;
	    }
	    c = b.sibling;
	    if (null !== c) {
	      c.return = b.return;
	      V$1 = c;
	      break;
	    }
	    V$1 = b.return;
	  }
	}
	function hk(a) {
	  for (; null !== V$1;) {
	    var b = V$1;
	    if (b === a) {
	      V$1 = null;
	      break;
	    }
	    var c = b.sibling;
	    if (null !== c) {
	      c.return = b.return;
	      V$1 = c;
	      break;
	    }
	    V$1 = b.return;
	  }
	}
	function kk(a) {
	  for (; null !== V$1;) {
	    var b = V$1;
	    try {
	      switch (b.tag) {
	        case 0:
	        case 11:
	        case 15:
	          var c = b.return;
	          try {
	            Rj(4, b);
	          } catch (k) {
	            W$1(b, c, k);
	          }
	          break;
	        case 1:
	          var d = b.stateNode;
	          if ("function" === typeof d.componentDidMount) {
	            var e = b.return;
	            try {
	              d.componentDidMount();
	            } catch (k) {
	              W$1(b, e, k);
	            }
	          }
	          var f = b.return;
	          try {
	            Sj(b);
	          } catch (k) {
	            W$1(b, f, k);
	          }
	          break;
	        case 5:
	          var g = b.return;
	          try {
	            Sj(b);
	          } catch (k) {
	            W$1(b, g, k);
	          }
	      }
	    } catch (k) {
	      W$1(b, b.return, k);
	    }
	    if (b === a) {
	      V$1 = null;
	      break;
	    }
	    var h = b.sibling;
	    if (null !== h) {
	      h.return = b.return;
	      V$1 = h;
	      break;
	    }
	    V$1 = b.return;
	  }
	}
	var mk = Math.ceil,
	  nk = ua.ReactCurrentDispatcher,
	  ok = ua.ReactCurrentOwner,
	  pk = ua.ReactCurrentBatchConfig,
	  K$1 = 0,
	  R = null,
	  Y$1 = null,
	  Z$1 = 0,
	  gj = 0,
	  fj = Uf(0),
	  T$1 = 0,
	  qk = null,
	  hh = 0,
	  rk = 0,
	  sk = 0,
	  tk = null,
	  uk = null,
	  gk = 0,
	  Hj = Infinity,
	  vk = null,
	  Pi = !1,
	  Qi = null,
	  Si = null,
	  wk = !1,
	  xk = null,
	  yk = 0,
	  zk = 0,
	  Ak = null,
	  Bk = -1,
	  Ck = 0;
	function L$1() {
	  return 0 !== (K$1 & 6) ? B$1() : -1 !== Bk ? Bk : Bk = B$1();
	}
	function lh(a) {
	  if (0 === (a.mode & 1)) return 1;
	  if (0 !== (K$1 & 2) && 0 !== Z$1) return Z$1 & -Z$1;
	  if (null !== Kg.transition) return 0 === Ck && (Ck = yc()), Ck;
	  a = C$1;
	  if (0 !== a) return a;
	  a = window.event;
	  a = void 0 === a ? 16 : jd(a.type);
	  return a;
	}
	function mh(a, b, c, d) {
	  if (50 < zk) throw zk = 0, Ak = null, Error(p$5(185));
	  Ac(a, c, d);
	  if (0 === (K$1 & 2) || a !== R) a === R && (0 === (K$1 & 2) && (rk |= c), 4 === T$1 && Dk(a, Z$1)), Ek(a, d), 1 === c && 0 === K$1 && 0 === (b.mode & 1) && (Hj = B$1() + 500, fg && jg());
	}
	function Ek(a, b) {
	  var c = a.callbackNode;
	  wc(a, b);
	  var d = uc(a, a === R ? Z$1 : 0);
	  if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;else if (b = d & -d, a.callbackPriority !== b) {
	    null != c && bc(c);
	    if (1 === b) 0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function () {
	      0 === (K$1 & 6) && jg();
	    }), c = null;else {
	      switch (Dc(d)) {
	        case 1:
	          c = fc;
	          break;
	        case 4:
	          c = gc;
	          break;
	        case 16:
	          c = hc;
	          break;
	        case 536870912:
	          c = jc;
	          break;
	        default:
	          c = hc;
	      }
	      c = Gk(c, Hk.bind(null, a));
	    }
	    a.callbackPriority = b;
	    a.callbackNode = c;
	  }
	}
	function Hk(a, b) {
	  Bk = -1;
	  Ck = 0;
	  if (0 !== (K$1 & 6)) throw Error(p$5(327));
	  var c = a.callbackNode;
	  if (Ik() && a.callbackNode !== c) return null;
	  var d = uc(a, a === R ? Z$1 : 0);
	  if (0 === d) return null;
	  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Jk(a, d);else {
	    b = d;
	    var e = K$1;
	    K$1 |= 2;
	    var f = Kk();
	    if (R !== a || Z$1 !== b) vk = null, Hj = B$1() + 500, Lk(a, b);
	    do try {
	      Mk();
	      break;
	    } catch (h) {
	      Nk(a, h);
	    } while (1);
	    Qg();
	    nk.current = f;
	    K$1 = e;
	    null !== Y$1 ? b = 0 : (R = null, Z$1 = 0, b = T$1);
	  }
	  if (0 !== b) {
	    2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
	    if (1 === b) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B$1()), c;
	    if (6 === b) Dk(a, d);else {
	      e = a.current.alternate;
	      if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Ok(a, f))), 1 === b)) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B$1()), c;
	      a.finishedWork = e;
	      a.finishedLanes = d;
	      switch (b) {
	        case 0:
	        case 1:
	          throw Error(p$5(345));
	        case 2:
	          Qk(a, uk, vk);
	          break;
	        case 3:
	          Dk(a, d);
	          if ((d & 130023424) === d && (b = gk + 500 - B$1(), 10 < b)) {
	            if (0 !== uc(a, 0)) break;
	            e = a.suspendedLanes;
	            if ((e & d) !== d) {
	              L$1();
	              a.pingedLanes |= a.suspendedLanes & e;
	              break;
	            }
	            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
	            break;
	          }
	          Qk(a, uk, vk);
	          break;
	        case 4:
	          Dk(a, d);
	          if ((d & 4194240) === d) break;
	          b = a.eventTimes;
	          for (e = -1; 0 < d;) {
	            var g = 31 - oc(d);
	            f = 1 << g;
	            g = b[g];
	            g > e && (e = g);
	            d &= ~f;
	          }
	          d = e;
	          d = B$1() - d;
	          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
	          if (10 < d) {
	            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
	            break;
	          }
	          Qk(a, uk, vk);
	          break;
	        case 5:
	          Qk(a, uk, vk);
	          break;
	        default:
	          throw Error(p$5(329));
	      }
	    }
	  }
	  Ek(a, B$1());
	  return a.callbackNode === c ? Hk.bind(null, a) : null;
	}
	function Ok(a, b) {
	  var c = tk;
	  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
	  a = Jk(a, b);
	  2 !== a && (b = uk, uk = c, null !== b && Gj(b));
	  return a;
	}
	function Gj(a) {
	  null === uk ? uk = a : uk.push.apply(uk, a);
	}
	function Pk(a) {
	  for (var b = a;;) {
	    if (b.flags & 16384) {
	      var c = b.updateQueue;
	      if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
	        var e = c[d],
	          f = e.getSnapshot;
	        e = e.value;
	        try {
	          if (!He$1(f(), e)) return !1;
	        } catch (g) {
	          return !1;
	        }
	      }
	    }
	    c = b.child;
	    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;else {
	      if (b === a) break;
	      for (; null === b.sibling;) {
	        if (null === b.return || b.return === a) return !0;
	        b = b.return;
	      }
	      b.sibling.return = b.return;
	      b = b.sibling;
	    }
	  }
	  return !0;
	}
	function Dk(a, b) {
	  b &= ~sk;
	  b &= ~rk;
	  a.suspendedLanes |= b;
	  a.pingedLanes &= ~b;
	  for (a = a.expirationTimes; 0 < b;) {
	    var c = 31 - oc(b),
	      d = 1 << c;
	    a[c] = -1;
	    b &= ~d;
	  }
	}
	function Fk(a) {
	  if (0 !== (K$1 & 6)) throw Error(p$5(327));
	  Ik();
	  var b = uc(a, 0);
	  if (0 === (b & 1)) return Ek(a, B$1()), null;
	  var c = Jk(a, b);
	  if (0 !== a.tag && 2 === c) {
	    var d = xc(a);
	    0 !== d && (b = d, c = Ok(a, d));
	  }
	  if (1 === c) throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B$1()), c;
	  if (6 === c) throw Error(p$5(345));
	  a.finishedWork = a.current.alternate;
	  a.finishedLanes = b;
	  Qk(a, uk, vk);
	  Ek(a, B$1());
	  return null;
	}
	function Rk(a, b) {
	  var c = K$1;
	  K$1 |= 1;
	  try {
	    return a(b);
	  } finally {
	    K$1 = c, 0 === K$1 && (Hj = B$1() + 500, fg && jg());
	  }
	}
	function Sk(a) {
	  null !== xk && 0 === xk.tag && 0 === (K$1 & 6) && Ik();
	  var b = K$1;
	  K$1 |= 1;
	  var c = pk.transition,
	    d = C$1;
	  try {
	    if (pk.transition = null, C$1 = 1, a) return a();
	  } finally {
	    C$1 = d, pk.transition = c, K$1 = b, 0 === (K$1 & 6) && jg();
	  }
	}
	function Ij() {
	  gj = fj.current;
	  E$1(fj);
	}
	function Lk(a, b) {
	  a.finishedWork = null;
	  a.finishedLanes = 0;
	  var c = a.timeoutHandle;
	  -1 !== c && (a.timeoutHandle = -1, Gf(c));
	  if (null !== Y$1) for (c = Y$1.return; null !== c;) {
	    var d = c;
	    wg(d);
	    switch (d.tag) {
	      case 1:
	        d = d.type.childContextTypes;
	        null !== d && void 0 !== d && $f();
	        break;
	      case 3:
	        Jh();
	        E$1(Wf);
	        E$1(H$1);
	        Oh();
	        break;
	      case 5:
	        Lh(d);
	        break;
	      case 4:
	        Jh();
	        break;
	      case 13:
	        E$1(M$1);
	        break;
	      case 19:
	        E$1(M$1);
	        break;
	      case 10:
	        Rg(d.type._context);
	        break;
	      case 22:
	      case 23:
	        Ij();
	    }
	    c = c.return;
	  }
	  R = a;
	  Y$1 = a = wh(a.current, null);
	  Z$1 = gj = b;
	  T$1 = 0;
	  qk = null;
	  sk = rk = hh = 0;
	  uk = tk = null;
	  if (null !== Wg) {
	    for (b = 0; b < Wg.length; b++) if (c = Wg[b], d = c.interleaved, null !== d) {
	      c.interleaved = null;
	      var e = d.next,
	        f = c.pending;
	      if (null !== f) {
	        var g = f.next;
	        f.next = e;
	        d.next = g;
	      }
	      c.pending = d;
	    }
	    Wg = null;
	  }
	  return a;
	}
	function Nk(a, b) {
	  do {
	    var c = Y$1;
	    try {
	      Qg();
	      Ph.current = ai;
	      if (Sh) {
	        for (var d = N$1.memoizedState; null !== d;) {
	          var e = d.queue;
	          null !== e && (e.pending = null);
	          d = d.next;
	        }
	        Sh = !1;
	      }
	      Rh = 0;
	      P$1 = O = N$1 = null;
	      Th = !1;
	      Uh = 0;
	      ok.current = null;
	      if (null === c || null === c.return) {
	        T$1 = 1;
	        qk = b;
	        Y$1 = null;
	        break;
	      }
	      a: {
	        var f = a,
	          g = c.return,
	          h = c,
	          k = b;
	        b = Z$1;
	        h.flags |= 32768;
	        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
	          var l = k,
	            m = h,
	            q = m.tag;
	          if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
	            var r = m.alternate;
	            r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
	          }
	          var y = Vi(g);
	          if (null !== y) {
	            y.flags &= -257;
	            Wi(y, g, h, f, b);
	            y.mode & 1 && Ti(f, l, b);
	            b = y;
	            k = l;
	            var n = b.updateQueue;
	            if (null === n) {
	              var t = new Set();
	              t.add(k);
	              b.updateQueue = t;
	            } else n.add(k);
	            break a;
	          } else {
	            if (0 === (b & 1)) {
	              Ti(f, l, b);
	              uj();
	              break a;
	            }
	            k = Error(p$5(426));
	          }
	        } else if (I$1 && h.mode & 1) {
	          var J = Vi(g);
	          if (null !== J) {
	            0 === (J.flags & 65536) && (J.flags |= 256);
	            Wi(J, g, h, f, b);
	            Jg(Ki(k, h));
	            break a;
	          }
	        }
	        f = k = Ki(k, h);
	        4 !== T$1 && (T$1 = 2);
	        null === tk ? tk = [f] : tk.push(f);
	        f = g;
	        do {
	          switch (f.tag) {
	            case 3:
	              f.flags |= 65536;
	              b &= -b;
	              f.lanes |= b;
	              var x = Oi(f, k, b);
	              fh(f, x);
	              break a;
	            case 1:
	              h = k;
	              var w = f.type,
	                u = f.stateNode;
	              if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Si || !Si.has(u)))) {
	                f.flags |= 65536;
	                b &= -b;
	                f.lanes |= b;
	                var F = Ri(f, h, b);
	                fh(f, F);
	                break a;
	              }
	          }
	          f = f.return;
	        } while (null !== f);
	      }
	      Tk(c);
	    } catch (na) {
	      b = na;
	      Y$1 === c && null !== c && (Y$1 = c = c.return);
	      continue;
	    }
	    break;
	  } while (1);
	}
	function Kk() {
	  var a = nk.current;
	  nk.current = ai;
	  return null === a ? ai : a;
	}
	function uj() {
	  if (0 === T$1 || 3 === T$1 || 2 === T$1) T$1 = 4;
	  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z$1);
	}
	function Jk(a, b) {
	  var c = K$1;
	  K$1 |= 2;
	  var d = Kk();
	  if (R !== a || Z$1 !== b) vk = null, Lk(a, b);
	  do try {
	    Uk();
	    break;
	  } catch (e) {
	    Nk(a, e);
	  } while (1);
	  Qg();
	  K$1 = c;
	  nk.current = d;
	  if (null !== Y$1) throw Error(p$5(261));
	  R = null;
	  Z$1 = 0;
	  return T$1;
	}
	function Uk() {
	  for (; null !== Y$1;) Vk(Y$1);
	}
	function Mk() {
	  for (; null !== Y$1 && !cc();) Vk(Y$1);
	}
	function Vk(a) {
	  var b = Wk(a.alternate, a, gj);
	  a.memoizedProps = a.pendingProps;
	  null === b ? Tk(a) : Y$1 = b;
	  ok.current = null;
	}
	function Tk(a) {
	  var b = a;
	  do {
	    var c = b.alternate;
	    a = b.return;
	    if (0 === (b.flags & 32768)) {
	      if (c = Fj(c, b, gj), null !== c) {
	        Y$1 = c;
	        return;
	      }
	    } else {
	      c = Jj(c, b);
	      if (null !== c) {
	        c.flags &= 32767;
	        Y$1 = c;
	        return;
	      }
	      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;else {
	        T$1 = 6;
	        Y$1 = null;
	        return;
	      }
	    }
	    b = b.sibling;
	    if (null !== b) {
	      Y$1 = b;
	      return;
	    }
	    Y$1 = b = a;
	  } while (null !== b);
	  0 === T$1 && (T$1 = 5);
	}
	function Qk(a, b, c) {
	  var d = C$1,
	    e = pk.transition;
	  try {
	    pk.transition = null, C$1 = 1, Xk(a, b, c, d);
	  } finally {
	    pk.transition = e, C$1 = d;
	  }
	  return null;
	}
	function Xk(a, b, c, d) {
	  do Ik(); while (null !== xk);
	  if (0 !== (K$1 & 6)) throw Error(p$5(327));
	  c = a.finishedWork;
	  var e = a.finishedLanes;
	  if (null === c) return null;
	  a.finishedWork = null;
	  a.finishedLanes = 0;
	  if (c === a.current) throw Error(p$5(177));
	  a.callbackNode = null;
	  a.callbackPriority = 0;
	  var f = c.lanes | c.childLanes;
	  Bc(a, f);
	  a === R && (Y$1 = R = null, Z$1 = 0);
	  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = !0, Gk(hc, function () {
	    Ik();
	    return null;
	  }));
	  f = 0 !== (c.flags & 15990);
	  if (0 !== (c.subtreeFlags & 15990) || f) {
	    f = pk.transition;
	    pk.transition = null;
	    var g = C$1;
	    C$1 = 1;
	    var h = K$1;
	    K$1 |= 4;
	    ok.current = null;
	    Pj(a, c);
	    ek(c, a);
	    Oe$1(Df);
	    dd = !!Cf;
	    Df = Cf = null;
	    a.current = c;
	    ik(c);
	    dc();
	    K$1 = h;
	    C$1 = g;
	    pk.transition = f;
	  } else a.current = c;
	  wk && (wk = !1, xk = a, yk = e);
	  f = a.pendingLanes;
	  0 === f && (Si = null);
	  mc(c.stateNode);
	  Ek(a, B$1());
	  if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
	    componentStack: e.stack,
	    digest: e.digest
	  });
	  if (Pi) throw Pi = !1, a = Qi, Qi = null, a;
	  0 !== (yk & 1) && 0 !== a.tag && Ik();
	  f = a.pendingLanes;
	  0 !== (f & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
	  jg();
	  return null;
	}
	function Ik() {
	  if (null !== xk) {
	    var a = Dc(yk),
	      b = pk.transition,
	      c = C$1;
	    try {
	      pk.transition = null;
	      C$1 = 16 > a ? 16 : a;
	      if (null === xk) var d = !1;else {
	        a = xk;
	        xk = null;
	        yk = 0;
	        if (0 !== (K$1 & 6)) throw Error(p$5(331));
	        var e = K$1;
	        K$1 |= 4;
	        for (V$1 = a.current; null !== V$1;) {
	          var f = V$1,
	            g = f.child;
	          if (0 !== (V$1.flags & 16)) {
	            var h = f.deletions;
	            if (null !== h) {
	              for (var k = 0; k < h.length; k++) {
	                var l = h[k];
	                for (V$1 = l; null !== V$1;) {
	                  var m = V$1;
	                  switch (m.tag) {
	                    case 0:
	                    case 11:
	                    case 15:
	                      Qj(8, m, f);
	                  }
	                  var q = m.child;
	                  if (null !== q) q.return = m, V$1 = q;else for (; null !== V$1;) {
	                    m = V$1;
	                    var r = m.sibling,
	                      y = m.return;
	                    Tj(m);
	                    if (m === l) {
	                      V$1 = null;
	                      break;
	                    }
	                    if (null !== r) {
	                      r.return = y;
	                      V$1 = r;
	                      break;
	                    }
	                    V$1 = y;
	                  }
	                }
	              }
	              var n = f.alternate;
	              if (null !== n) {
	                var t = n.child;
	                if (null !== t) {
	                  n.child = null;
	                  do {
	                    var J = t.sibling;
	                    t.sibling = null;
	                    t = J;
	                  } while (null !== t);
	                }
	              }
	              V$1 = f;
	            }
	          }
	          if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V$1 = g;else b: for (; null !== V$1;) {
	            f = V$1;
	            if (0 !== (f.flags & 2048)) switch (f.tag) {
	              case 0:
	              case 11:
	              case 15:
	                Qj(9, f, f.return);
	            }
	            var x = f.sibling;
	            if (null !== x) {
	              x.return = f.return;
	              V$1 = x;
	              break b;
	            }
	            V$1 = f.return;
	          }
	        }
	        var w = a.current;
	        for (V$1 = w; null !== V$1;) {
	          g = V$1;
	          var u = g.child;
	          if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V$1 = u;else b: for (g = w; null !== V$1;) {
	            h = V$1;
	            if (0 !== (h.flags & 2048)) try {
	              switch (h.tag) {
	                case 0:
	                case 11:
	                case 15:
	                  Rj(9, h);
	              }
	            } catch (na) {
	              W$1(h, h.return, na);
	            }
	            if (h === g) {
	              V$1 = null;
	              break b;
	            }
	            var F = h.sibling;
	            if (null !== F) {
	              F.return = h.return;
	              V$1 = F;
	              break b;
	            }
	            V$1 = h.return;
	          }
	        }
	        K$1 = e;
	        jg();
	        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
	          lc.onPostCommitFiberRoot(kc, a);
	        } catch (na) {}
	        d = !0;
	      }
	      return d;
	    } finally {
	      C$1 = c, pk.transition = b;
	    }
	  }
	  return !1;
	}
	function Yk(a, b, c) {
	  b = Ki(c, b);
	  b = Oi(a, b, 1);
	  a = dh(a, b, 1);
	  b = L$1();
	  null !== a && (Ac(a, 1, b), Ek(a, b));
	}
	function W$1(a, b, c) {
	  if (3 === a.tag) Yk(a, a, c);else for (; null !== b;) {
	    if (3 === b.tag) {
	      Yk(b, a, c);
	      break;
	    } else if (1 === b.tag) {
	      var d = b.stateNode;
	      if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
	        a = Ki(c, a);
	        a = Ri(b, a, 1);
	        b = dh(b, a, 1);
	        a = L$1();
	        null !== b && (Ac(b, 1, a), Ek(b, a));
	        break;
	      }
	    }
	    b = b.return;
	  }
	}
	function Ui(a, b, c) {
	  var d = a.pingCache;
	  null !== d && d.delete(b);
	  b = L$1();
	  a.pingedLanes |= a.suspendedLanes & c;
	  R === a && (Z$1 & c) === c && (4 === T$1 || 3 === T$1 && (Z$1 & 130023424) === Z$1 && 500 > B$1() - gk ? Lk(a, 0) : sk |= c);
	  Ek(a, b);
	}
	function Zk(a, b) {
	  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
	  var c = L$1();
	  a = Zg(a, b);
	  null !== a && (Ac(a, b, c), Ek(a, c));
	}
	function vj(a) {
	  var b = a.memoizedState,
	    c = 0;
	  null !== b && (c = b.retryLane);
	  Zk(a, c);
	}
	function ck(a, b) {
	  var c = 0;
	  switch (a.tag) {
	    case 13:
	      var d = a.stateNode;
	      var e = a.memoizedState;
	      null !== e && (c = e.retryLane);
	      break;
	    case 19:
	      d = a.stateNode;
	      break;
	    default:
	      throw Error(p$5(314));
	  }
	  null !== d && d.delete(b);
	  Zk(a, c);
	}
	var Wk;
	Wk = function (a, b, c) {
	  if (null !== a) {
	    if (a.memoizedProps !== b.pendingProps || Wf.current) Ug = !0;else {
	      if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return Ug = !1, zj(a, b, c);
	      Ug = 0 !== (a.flags & 131072) ? !0 : !1;
	    }
	  } else Ug = !1, I$1 && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
	  b.lanes = 0;
	  switch (b.tag) {
	    case 2:
	      var d = b.type;
	      jj(a, b);
	      a = b.pendingProps;
	      var e = Yf(b, H$1.current);
	      Tg(b, c);
	      e = Xh(null, b, d, a, e, c);
	      var f = bi();
	      b.flags |= 1;
	      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, !0, f, c)) : (b.tag = 0, I$1 && f && vg(b), Yi(null, b, e, c), b = b.child);
	      return b;
	    case 16:
	      d = b.elementType;
	      a: {
	        jj(a, b);
	        a = b.pendingProps;
	        e = d._init;
	        d = e(d._payload);
	        b.type = d;
	        e = b.tag = $k(d);
	        a = Lg(d, a);
	        switch (e) {
	          case 0:
	            b = dj(null, b, d, a, c);
	            break a;
	          case 1:
	            b = ij(null, b, d, a, c);
	            break a;
	          case 11:
	            b = Zi(null, b, d, a, c);
	            break a;
	          case 14:
	            b = aj(null, b, d, Lg(d.type, a), c);
	            break a;
	        }
	        throw Error(p$5(306, d, ""));
	      }
	      return b;
	    case 0:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
	    case 1:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
	    case 3:
	      a: {
	        lj(b);
	        if (null === a) throw Error(p$5(387));
	        d = b.pendingProps;
	        f = b.memoizedState;
	        e = f.element;
	        bh(a, b);
	        gh(b, d, null, c);
	        var g = b.memoizedState;
	        d = g.element;
	        if (f.isDehydrated) {
	          if (f = {
	            element: d,
	            isDehydrated: !1,
	            cache: g.cache,
	            pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
	            transitions: g.transitions
	          }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
	            e = Ki(Error(p$5(423)), b);
	            b = mj(a, b, d, c, e);
	            break a;
	          } else if (d !== e) {
	            e = Ki(Error(p$5(424)), b);
	            b = mj(a, b, d, c, e);
	            break a;
	          } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I$1 = !0, zg = null, c = Ch(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
	        } else {
	          Ig();
	          if (d === e) {
	            b = $i(a, b, c);
	            break a;
	          }
	          Yi(a, b, d, c);
	        }
	        b = b.child;
	      }
	      return b;
	    case 5:
	      return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
	    case 6:
	      return null === a && Eg(b), null;
	    case 13:
	      return pj(a, b, c);
	    case 4:
	      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
	    case 11:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
	    case 7:
	      return Yi(a, b, b.pendingProps, c), b.child;
	    case 8:
	      return Yi(a, b, b.pendingProps.children, c), b.child;
	    case 12:
	      return Yi(a, b, b.pendingProps.children, c), b.child;
	    case 10:
	      a: {
	        d = b.type._context;
	        e = b.pendingProps;
	        f = b.memoizedProps;
	        g = e.value;
	        G$1(Mg, d._currentValue);
	        d._currentValue = g;
	        if (null !== f) if (He$1(f.value, g)) {
	          if (f.children === e.children && !Wf.current) {
	            b = $i(a, b, c);
	            break a;
	          }
	        } else for (f = b.child, null !== f && (f.return = b); null !== f;) {
	          var h = f.dependencies;
	          if (null !== h) {
	            g = f.child;
	            for (var k = h.firstContext; null !== k;) {
	              if (k.context === d) {
	                if (1 === f.tag) {
	                  k = ch(-1, c & -c);
	                  k.tag = 2;
	                  var l = f.updateQueue;
	                  if (null !== l) {
	                    l = l.shared;
	                    var m = l.pending;
	                    null === m ? k.next = k : (k.next = m.next, m.next = k);
	                    l.pending = k;
	                  }
	                }
	                f.lanes |= c;
	                k = f.alternate;
	                null !== k && (k.lanes |= c);
	                Sg(f.return, c, b);
	                h.lanes |= c;
	                break;
	              }
	              k = k.next;
	            }
	          } else if (10 === f.tag) g = f.type === b.type ? null : f.child;else if (18 === f.tag) {
	            g = f.return;
	            if (null === g) throw Error(p$5(341));
	            g.lanes |= c;
	            h = g.alternate;
	            null !== h && (h.lanes |= c);
	            Sg(g, c, b);
	            g = f.sibling;
	          } else g = f.child;
	          if (null !== g) g.return = f;else for (g = f; null !== g;) {
	            if (g === b) {
	              g = null;
	              break;
	            }
	            f = g.sibling;
	            if (null !== f) {
	              f.return = g.return;
	              g = f;
	              break;
	            }
	            g = g.return;
	          }
	          f = g;
	        }
	        Yi(a, b, e.children, c);
	        b = b.child;
	      }
	      return b;
	    case 9:
	      return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
	    case 14:
	      return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
	    case 15:
	      return cj(a, b, b.type, b.pendingProps, c);
	    case 17:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, !0, a, c);
	    case 19:
	      return yj(a, b, c);
	    case 22:
	      return ej(a, b, c);
	  }
	  throw Error(p$5(156, b.tag));
	};
	function Gk(a, b) {
	  return ac(a, b);
	}
	function al(a, b, c, d) {
	  this.tag = a;
	  this.key = c;
	  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
	  this.index = 0;
	  this.ref = null;
	  this.pendingProps = b;
	  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
	  this.mode = d;
	  this.subtreeFlags = this.flags = 0;
	  this.deletions = null;
	  this.childLanes = this.lanes = 0;
	  this.alternate = null;
	}
	function Bg(a, b, c, d) {
	  return new al(a, b, c, d);
	}
	function bj(a) {
	  a = a.prototype;
	  return !(!a || !a.isReactComponent);
	}
	function $k(a) {
	  if ("function" === typeof a) return bj(a) ? 1 : 0;
	  if (void 0 !== a && null !== a) {
	    a = a.$$typeof;
	    if (a === Da) return 11;
	    if (a === Ga) return 14;
	  }
	  return 2;
	}
	function wh(a, b) {
	  var c = a.alternate;
	  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
	  c.flags = a.flags & 14680064;
	  c.childLanes = a.childLanes;
	  c.lanes = a.lanes;
	  c.child = a.child;
	  c.memoizedProps = a.memoizedProps;
	  c.memoizedState = a.memoizedState;
	  c.updateQueue = a.updateQueue;
	  b = a.dependencies;
	  c.dependencies = null === b ? null : {
	    lanes: b.lanes,
	    firstContext: b.firstContext
	  };
	  c.sibling = a.sibling;
	  c.index = a.index;
	  c.ref = a.ref;
	  return c;
	}
	function yh(a, b, c, d, e, f) {
	  var g = 2;
	  d = a;
	  if ("function" === typeof a) bj(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
	    case ya:
	      return Ah(c.children, e, f, b);
	    case za:
	      g = 8;
	      e |= 8;
	      break;
	    case Aa:
	      return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
	    case Ea:
	      return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
	    case Fa:
	      return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
	    case Ia:
	      return qj(c, e, f, b);
	    default:
	      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
	        case Ba:
	          g = 10;
	          break a;
	        case Ca:
	          g = 9;
	          break a;
	        case Da:
	          g = 11;
	          break a;
	        case Ga:
	          g = 14;
	          break a;
	        case Ha:
	          g = 16;
	          d = null;
	          break a;
	      }
	      throw Error(p$5(130, null == a ? a : typeof a, ""));
	  }
	  b = Bg(g, c, b, e);
	  b.elementType = a;
	  b.type = d;
	  b.lanes = f;
	  return b;
	}
	function Ah(a, b, c, d) {
	  a = Bg(7, a, d, b);
	  a.lanes = c;
	  return a;
	}
	function qj(a, b, c, d) {
	  a = Bg(22, a, d, b);
	  a.elementType = Ia;
	  a.lanes = c;
	  a.stateNode = {
	    isHidden: !1
	  };
	  return a;
	}
	function xh(a, b, c) {
	  a = Bg(6, a, null, b);
	  a.lanes = c;
	  return a;
	}
	function zh(a, b, c) {
	  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
	  b.lanes = c;
	  b.stateNode = {
	    containerInfo: a.containerInfo,
	    pendingChildren: null,
	    implementation: a.implementation
	  };
	  return b;
	}
	function bl(a, b, c, d, e) {
	  this.tag = b;
	  this.containerInfo = a;
	  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
	  this.timeoutHandle = -1;
	  this.callbackNode = this.pendingContext = this.context = null;
	  this.callbackPriority = 0;
	  this.eventTimes = zc(0);
	  this.expirationTimes = zc(-1);
	  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
	  this.entanglements = zc(0);
	  this.identifierPrefix = d;
	  this.onRecoverableError = e;
	  this.mutableSourceEagerHydrationData = null;
	}
	function cl(a, b, c, d, e, f, g, h, k) {
	  a = new bl(a, b, c, h, k);
	  1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
	  f = Bg(3, null, null, b);
	  a.current = f;
	  f.stateNode = a;
	  f.memoizedState = {
	    element: d,
	    isDehydrated: c,
	    cache: null,
	    transitions: null,
	    pendingSuspenseBoundaries: null
	  };
	  ah(f);
	  return a;
	}
	function dl(a, b, c) {
	  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	  return {
	    $$typeof: wa,
	    key: null == d ? null : "" + d,
	    children: a,
	    containerInfo: b,
	    implementation: c
	  };
	}
	function el(a) {
	  if (!a) return Vf;
	  a = a._reactInternals;
	  a: {
	    if (Vb(a) !== a || 1 !== a.tag) throw Error(p$5(170));
	    var b = a;
	    do {
	      switch (b.tag) {
	        case 3:
	          b = b.stateNode.context;
	          break a;
	        case 1:
	          if (Zf(b.type)) {
	            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
	            break a;
	          }
	      }
	      b = b.return;
	    } while (null !== b);
	    throw Error(p$5(171));
	  }
	  if (1 === a.tag) {
	    var c = a.type;
	    if (Zf(c)) return bg(a, c, b);
	  }
	  return b;
	}
	function fl(a, b, c, d, e, f, g, h, k) {
	  a = cl(c, d, !0, a, e, f, g, h, k);
	  a.context = el(null);
	  c = a.current;
	  d = L$1();
	  e = lh(c);
	  f = ch(d, e);
	  f.callback = void 0 !== b && null !== b ? b : null;
	  dh(c, f, e);
	  a.current.lanes = e;
	  Ac(a, e, d);
	  Ek(a, d);
	  return a;
	}
	function gl(a, b, c, d) {
	  var e = b.current,
	    f = L$1(),
	    g = lh(e);
	  c = el(c);
	  null === b.context ? b.context = c : b.pendingContext = c;
	  b = ch(f, g);
	  b.payload = {
	    element: a
	  };
	  d = void 0 === d ? null : d;
	  null !== d && (b.callback = d);
	  a = dh(e, b, g);
	  null !== a && (mh(a, e, g, f), eh(a, e, g));
	  return g;
	}
	function hl(a) {
	  a = a.current;
	  if (!a.child) return null;
	  switch (a.child.tag) {
	    case 5:
	      return a.child.stateNode;
	    default:
	      return a.child.stateNode;
	  }
	}
	function il(a, b) {
	  a = a.memoizedState;
	  if (null !== a && null !== a.dehydrated) {
	    var c = a.retryLane;
	    a.retryLane = 0 !== c && c < b ? c : b;
	  }
	}
	function jl(a, b) {
	  il(a, b);
	  (a = a.alternate) && il(a, b);
	}
	function kl() {
	  return null;
	}
	var ll = "function" === typeof reportError ? reportError : function (a) {
	  console.error(a);
	};
	function ml(a) {
	  this._internalRoot = a;
	}
	nl.prototype.render = ml.prototype.render = function (a) {
	  var b = this._internalRoot;
	  if (null === b) throw Error(p$5(409));
	  gl(a, b, null, null);
	};
	nl.prototype.unmount = ml.prototype.unmount = function () {
	  var a = this._internalRoot;
	  if (null !== a) {
	    this._internalRoot = null;
	    var b = a.containerInfo;
	    Sk(function () {
	      gl(null, a, null, null);
	    });
	    b[uf] = null;
	  }
	};
	function nl(a) {
	  this._internalRoot = a;
	}
	nl.prototype.unstable_scheduleHydration = function (a) {
	  if (a) {
	    var b = Hc();
	    a = {
	      blockedOn: null,
	      target: a,
	      priority: b
	    };
	    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
	    Qc.splice(c, 0, a);
	    0 === c && Vc(a);
	  }
	};
	function ol(a) {
	  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
	}
	function pl(a) {
	  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}
	function ql() {}
	function rl(a, b, c, d, e) {
	  if (e) {
	    if ("function" === typeof d) {
	      var f = d;
	      d = function () {
	        var a = hl(g);
	        f.call(a);
	      };
	    }
	    var g = fl(b, d, a, 0, null, !1, !1, "", ql);
	    a._reactRootContainer = g;
	    a[uf] = g.current;
	    sf(8 === a.nodeType ? a.parentNode : a);
	    Sk();
	    return g;
	  }
	  for (; e = a.lastChild;) a.removeChild(e);
	  if ("function" === typeof d) {
	    var h = d;
	    d = function () {
	      var a = hl(k);
	      h.call(a);
	    };
	  }
	  var k = cl(a, 0, !1, null, null, !1, !1, "", ql);
	  a._reactRootContainer = k;
	  a[uf] = k.current;
	  sf(8 === a.nodeType ? a.parentNode : a);
	  Sk(function () {
	    gl(b, k, c, d);
	  });
	  return k;
	}
	function sl(a, b, c, d, e) {
	  var f = c._reactRootContainer;
	  if (f) {
	    var g = f;
	    if ("function" === typeof e) {
	      var h = e;
	      e = function () {
	        var a = hl(g);
	        h.call(a);
	      };
	    }
	    gl(b, g, a, e);
	  } else g = rl(c, b, a, e, d);
	  return hl(g);
	}
	Ec = function (a) {
	  switch (a.tag) {
	    case 3:
	      var b = a.stateNode;
	      if (b.current.memoizedState.isDehydrated) {
	        var c = tc(b.pendingLanes);
	        0 !== c && (Cc(b, c | 1), Ek(b, B$1()), 0 === (K$1 & 6) && (Hj = B$1() + 500, jg()));
	      }
	      break;
	    case 13:
	      Sk(function () {
	        var b = Zg(a, 1);
	        if (null !== b) {
	          var c = L$1();
	          mh(b, a, 1, c);
	        }
	      }), jl(a, 1);
	  }
	};
	Fc = function (a) {
	  if (13 === a.tag) {
	    var b = Zg(a, 134217728);
	    if (null !== b) {
	      var c = L$1();
	      mh(b, a, 134217728, c);
	    }
	    jl(a, 134217728);
	  }
	};
	Gc = function (a) {
	  if (13 === a.tag) {
	    var b = lh(a),
	      c = Zg(a, b);
	    if (null !== c) {
	      var d = L$1();
	      mh(c, a, b, d);
	    }
	    jl(a, b);
	  }
	};
	Hc = function () {
	  return C$1;
	};
	Ic = function (a, b) {
	  var c = C$1;
	  try {
	    return C$1 = a, b();
	  } finally {
	    C$1 = c;
	  }
	};
	yb = function (a, b, c) {
	  switch (b) {
	    case "input":
	      bb(a, c);
	      b = c.name;
	      if ("radio" === c.type && null != b) {
	        for (c = a; c.parentNode;) c = c.parentNode;
	        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
	        for (b = 0; b < c.length; b++) {
	          var d = c[b];
	          if (d !== a && d.form === a.form) {
	            var e = Db(d);
	            if (!e) throw Error(p$5(90));
	            Wa(d);
	            bb(d, e);
	          }
	        }
	      }
	      break;
	    case "textarea":
	      ib(a, c);
	      break;
	    case "select":
	      b = c.value, null != b && fb(a, !!c.multiple, b, !1);
	  }
	};
	Gb = Rk;
	Hb = Sk;
	var tl = {
	    usingClientEntryPoint: !1,
	    Events: [Cb, ue$1, Db, Eb, Fb, Rk]
	  },
	  ul = {
	    findFiberByHostInstance: Wc,
	    bundleType: 0,
	    version: "18.2.0",
	    rendererPackageName: "react-dom"
	  };
	var vl = {
	  bundleType: ul.bundleType,
	  version: ul.version,
	  rendererPackageName: ul.rendererPackageName,
	  rendererConfig: ul.rendererConfig,
	  overrideHookState: null,
	  overrideHookStateDeletePath: null,
	  overrideHookStateRenamePath: null,
	  overrideProps: null,
	  overridePropsDeletePath: null,
	  overridePropsRenamePath: null,
	  setErrorHandler: null,
	  setSuspenseHandler: null,
	  scheduleUpdate: null,
	  currentDispatcherRef: ua.ReactCurrentDispatcher,
	  findHostInstanceByFiber: function (a) {
	    a = Zb(a);
	    return null === a ? null : a.stateNode;
	  },
	  findFiberByHostInstance: ul.findFiberByHostInstance || kl,
	  findHostInstancesForRefresh: null,
	  scheduleRefresh: null,
	  scheduleRoot: null,
	  setRefreshHandler: null,
	  getCurrentFiber: null,
	  reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
	  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	  if (!wl.isDisabled && wl.supportsFiber) try {
	    kc = wl.inject(vl), lc = wl;
	  } catch (a) {}
	}
	reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
	reactDom_production_min.createPortal = function (a, b) {
	  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	  if (!ol(b)) throw Error(p$5(200));
	  return dl(a, b, null, c);
	};
	reactDom_production_min.createRoot = function (a, b) {
	  if (!ol(a)) throw Error(p$5(299));
	  var c = !1,
	    d = "",
	    e = ll;
	  null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
	  b = cl(a, 1, !1, null, null, c, !1, d, e);
	  a[uf] = b.current;
	  sf(8 === a.nodeType ? a.parentNode : a);
	  return new ml(b);
	};
	reactDom_production_min.findDOMNode = function (a) {
	  if (null == a) return null;
	  if (1 === a.nodeType) return a;
	  var b = a._reactInternals;
	  if (void 0 === b) {
	    if ("function" === typeof a.render) throw Error(p$5(188));
	    a = Object.keys(a).join(",");
	    throw Error(p$5(268, a));
	  }
	  a = Zb(b);
	  a = null === a ? null : a.stateNode;
	  return a;
	};
	reactDom_production_min.flushSync = function (a) {
	  return Sk(a);
	};
	reactDom_production_min.hydrate = function (a, b, c) {
	  if (!pl(b)) throw Error(p$5(200));
	  return sl(null, a, b, !0, c);
	};
	reactDom_production_min.hydrateRoot = function (a, b, c) {
	  if (!ol(a)) throw Error(p$5(405));
	  var d = null != c && c.hydratedSources || null,
	    e = !1,
	    f = "",
	    g = ll;
	  null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
	  b = fl(b, null, a, 1, null != c ? c : null, e, !1, f, g);
	  a[uf] = b.current;
	  sf(a);
	  if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
	  return new nl(b);
	};
	reactDom_production_min.render = function (a, b, c) {
	  if (!pl(b)) throw Error(p$5(200));
	  return sl(null, a, b, !1, c);
	};
	reactDom_production_min.unmountComponentAtNode = function (a) {
	  if (!pl(a)) throw Error(p$5(40));
	  return a._reactRootContainer ? (Sk(function () {
	    sl(null, null, a, !1, function () {
	      a._reactRootContainer = null;
	      a[uf] = null;
	    });
	  }), !0) : !1;
	};
	reactDom_production_min.unstable_batchedUpdates = Rk;
	reactDom_production_min.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
	  if (!pl(c)) throw Error(p$5(200));
	  if (null == a || void 0 === a._reactInternals) throw Error(p$5(38));
	  return sl(a, b, c, !1, d);
	};
	reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
	    return;
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}
	{
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  reactDom.exports = reactDom_production_min;
	}

	var reactDomExports = reactDom.exports;

	var createRoot;

	var m$3 = reactDomExports;
	{
	  createRoot = m$3.createRoot;
	  m$3.hydrateRoot;
	}

	var shim = {exports: {}};

	var useSyncExternalStoreShim_production_min = {};

	/**
	 * @license React
	 * use-sync-external-store-shim.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var e$2 = reactExports;
	function h$3(a, b) {
	  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var k$3 = "function" === typeof Object.is ? Object.is : h$3,
	  l$2 = e$2.useState,
	  m$2 = e$2.useEffect,
	  n$3 = e$2.useLayoutEffect,
	  p$4 = e$2.useDebugValue;
	function q$4(a, b) {
	  var d = b(),
	    f = l$2({
	      inst: {
	        value: d,
	        getSnapshot: b
	      }
	    }),
	    c = f[0].inst,
	    g = f[1];
	  n$3(function () {
	    c.value = d;
	    c.getSnapshot = b;
	    r$2(c) && g({
	      inst: c
	    });
	  }, [a, d, b]);
	  m$2(function () {
	    r$2(c) && g({
	      inst: c
	    });
	    return a(function () {
	      r$2(c) && g({
	        inst: c
	      });
	    });
	  }, [a]);
	  p$4(d);
	  return d;
	}
	function r$2(a) {
	  var b = a.getSnapshot;
	  a = a.value;
	  try {
	    var d = b();
	    return !k$3(a, d);
	  } catch (f) {
	    return !0;
	  }
	}
	function t$3(a, b) {
	  return b();
	}
	var u$2 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$3 : q$4;
	useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e$2.useSyncExternalStore ? e$2.useSyncExternalStore : u$2;

	{
	  shim.exports = useSyncExternalStoreShim_production_min;
	}

	var shimExports = shim.exports;

	var withSelector = {exports: {}};

	var withSelector_production_min = {};

	/**
	 * @license React
	 * use-sync-external-store-shim/with-selector.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var h$2 = reactExports,
	  n$2 = shimExports;
	function p$3(a, b) {
	  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var q$3 = "function" === typeof Object.is ? Object.is : p$3,
	  r$1 = n$2.useSyncExternalStore,
	  t$2 = h$2.useRef,
	  u$1 = h$2.useEffect,
	  v$3 = h$2.useMemo,
	  w$4 = h$2.useDebugValue;
	withSelector_production_min.useSyncExternalStoreWithSelector = function (a, b, e, l, g) {
	  var c = t$2(null);
	  if (null === c.current) {
	    var f = {
	      hasValue: !1,
	      value: null
	    };
	    c.current = f;
	  } else f = c.current;
	  c = v$3(function () {
	    function a(a) {
	      if (!c) {
	        c = !0;
	        d = a;
	        a = l(a);
	        if (void 0 !== g && f.hasValue) {
	          var b = f.value;
	          if (g(b, a)) return k = b;
	        }
	        return k = a;
	      }
	      b = k;
	      if (q$3(d, a)) return b;
	      var e = l(a);
	      if (void 0 !== g && g(b, e)) return b;
	      d = a;
	      return k = e;
	    }
	    var c = !1,
	      d,
	      k,
	      m = void 0 === e ? null : e;
	    return [function () {
	      return a(b());
	    }, null === m ? void 0 : function () {
	      return a(m());
	    }];
	  }, [b, e, l, g]);
	  var d = r$1(a, c[0], c[1]);
	  u$1(function () {
	    f.hasValue = !0;
	    f.value = d;
	  }, [d]);
	  w$4(d);
	  return d;
	};

	{
	  withSelector.exports = withSelector_production_min;
	}

	var withSelectorExports = withSelector.exports;

	// Default to a dummy "batch" implementation that just runs the callback
	function defaultNoopBatch(callback) {
	  callback();
	}
	let batch = defaultNoopBatch; // Allow injecting another batching function later

	const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings

	const getBatch = () => batch;

	const ContextKey = Symbol.for(`react-redux-context`);
	const gT = typeof globalThis !== "undefined" ? globalThis : /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
	{};
	function getContext() {
	  var _gT$ContextKey;
	  if (!reactExports.createContext) return {};
	  const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = new Map();
	  let realContext = contextMap.get(reactExports.createContext);
	  if (!realContext) {
	    realContext = reactExports.createContext(null);
	    contextMap.set(reactExports.createContext, realContext);
	  }
	  return realContext;
	}
	const ReactReduxContext = /*#__PURE__*/getContext();

	/**
	 * Hook factory, which creates a `useReduxContext` hook bound to a given context. This is a low-level
	 * hook that you should usually not need to call directly.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useReduxContext` hook bound to the specified context.
	 */
	function createReduxContextHook(context = ReactReduxContext) {
	  return function useReduxContext() {
	    const contextValue = reactExports.useContext(context);
	    return contextValue;
	  };
	}
	/**
	 * A hook to access the value of the `ReactReduxContext`. This is a low-level
	 * hook that you should usually not need to call directly.
	 *
	 * @returns {any} the value of the `ReactReduxContext`
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useReduxContext } from 'react-redux'
	 *
	 * export const CounterComponent = () => {
	 *   const { store } = useReduxContext()
	 *   return <div>{store.getState()}</div>
	 * }
	 */

	const useReduxContext = /*#__PURE__*/createReduxContextHook();

	const notInitialized = () => {
	  throw new Error('uSES not initialized!');
	};

	let useSyncExternalStoreWithSelector = notInitialized;
	const initializeUseSelector = fn => {
	  useSyncExternalStoreWithSelector = fn;
	};
	const refEquality = (a, b) => a === b;
	/**
	 * Hook factory, which creates a `useSelector` hook bound to a given context.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useSelector` hook bound to the specified context.
	 */

	function createSelectorHook(context = ReactReduxContext) {
	  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
	  return function useSelector(selector, equalityFnOrOptions = {}) {
	    const {
	      equalityFn = refEquality,
	      stabilityCheck = undefined,
	      noopCheck = undefined
	    } = typeof equalityFnOrOptions === 'function' ? {
	      equalityFn: equalityFnOrOptions
	    } : equalityFnOrOptions;
	    const {
	      store,
	      subscription,
	      getServerState,
	      stabilityCheck: globalStabilityCheck,
	      noopCheck: globalNoopCheck
	    } = useReduxContext$1();
	    reactExports.useRef(true);
	    const wrappedSelector = reactExports.useCallback({
	      [selector.name](state) {
	        const selected = selector(state);
	        return selected;
	      }
	    }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
	    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
	    reactExports.useDebugValue(selectedState);
	    return selectedState;
	  };
	}
	/**
	 * A hook to access the redux store's state. This hook takes a selector function
	 * as an argument. The selector is called with the store state.
	 *
	 * This hook takes an optional equality comparison function as the second parameter
	 * that allows you to customize the way the selected state is compared to determine
	 * whether the component needs to be re-rendered.
	 *
	 * @param {Function} selector the selector function
	 * @param {Function=} equalityFn the function that will be used to determine equality
	 *
	 * @returns {any} the selected state
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useSelector } from 'react-redux'
	 *
	 * export const CounterComponent = () => {
	 *   const counter = useSelector(state => state.counter)
	 *   return <div>{counter}</div>
	 * }
	 */

	const useSelector = /*#__PURE__*/createSelectorHook();

	function _extends() {
	  _extends = Object.assign ? Object.assign.bind() : function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];
	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }
	    return target;
	  };
	  return _extends.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose$1(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;
	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }
	  return target;
	}

	var reactIs$2 = {exports: {}};

	var reactIs_production_min$1 = {};

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var b$2 = "function" === typeof Symbol && Symbol.for,
	  c$1 = b$2 ? Symbol.for("react.element") : 60103,
	  d$3 = b$2 ? Symbol.for("react.portal") : 60106,
	  e$1 = b$2 ? Symbol.for("react.fragment") : 60107,
	  f$1 = b$2 ? Symbol.for("react.strict_mode") : 60108,
	  g$2 = b$2 ? Symbol.for("react.profiler") : 60114,
	  h$1 = b$2 ? Symbol.for("react.provider") : 60109,
	  k$2 = b$2 ? Symbol.for("react.context") : 60110,
	  l$1 = b$2 ? Symbol.for("react.async_mode") : 60111,
	  m$1 = b$2 ? Symbol.for("react.concurrent_mode") : 60111,
	  n$1 = b$2 ? Symbol.for("react.forward_ref") : 60112,
	  p$2 = b$2 ? Symbol.for("react.suspense") : 60113,
	  q$2 = b$2 ? Symbol.for("react.suspense_list") : 60120,
	  r = b$2 ? Symbol.for("react.memo") : 60115,
	  t$1 = b$2 ? Symbol.for("react.lazy") : 60116,
	  v$2 = b$2 ? Symbol.for("react.block") : 60121,
	  w$3 = b$2 ? Symbol.for("react.fundamental") : 60117,
	  x$1 = b$2 ? Symbol.for("react.responder") : 60118,
	  y$1 = b$2 ? Symbol.for("react.scope") : 60119;
	function z$1(a) {
	  if ("object" === typeof a && null !== a) {
	    var u = a.$$typeof;
	    switch (u) {
	      case c$1:
	        switch (a = a.type, a) {
	          case l$1:
	          case m$1:
	          case e$1:
	          case g$2:
	          case f$1:
	          case p$2:
	            return a;
	          default:
	            switch (a = a && a.$$typeof, a) {
	              case k$2:
	              case n$1:
	              case t$1:
	              case r:
	              case h$1:
	                return a;
	              default:
	                return u;
	            }
	        }
	      case d$3:
	        return u;
	    }
	  }
	}
	function A$1(a) {
	  return z$1(a) === m$1;
	}
	reactIs_production_min$1.AsyncMode = l$1;
	reactIs_production_min$1.ConcurrentMode = m$1;
	reactIs_production_min$1.ContextConsumer = k$2;
	reactIs_production_min$1.ContextProvider = h$1;
	reactIs_production_min$1.Element = c$1;
	reactIs_production_min$1.ForwardRef = n$1;
	reactIs_production_min$1.Fragment = e$1;
	reactIs_production_min$1.Lazy = t$1;
	reactIs_production_min$1.Memo = r;
	reactIs_production_min$1.Portal = d$3;
	reactIs_production_min$1.Profiler = g$2;
	reactIs_production_min$1.StrictMode = f$1;
	reactIs_production_min$1.Suspense = p$2;
	reactIs_production_min$1.isAsyncMode = function (a) {
	  return A$1(a) || z$1(a) === l$1;
	};
	reactIs_production_min$1.isConcurrentMode = A$1;
	reactIs_production_min$1.isContextConsumer = function (a) {
	  return z$1(a) === k$2;
	};
	reactIs_production_min$1.isContextProvider = function (a) {
	  return z$1(a) === h$1;
	};
	reactIs_production_min$1.isElement = function (a) {
	  return "object" === typeof a && null !== a && a.$$typeof === c$1;
	};
	reactIs_production_min$1.isForwardRef = function (a) {
	  return z$1(a) === n$1;
	};
	reactIs_production_min$1.isFragment = function (a) {
	  return z$1(a) === e$1;
	};
	reactIs_production_min$1.isLazy = function (a) {
	  return z$1(a) === t$1;
	};
	reactIs_production_min$1.isMemo = function (a) {
	  return z$1(a) === r;
	};
	reactIs_production_min$1.isPortal = function (a) {
	  return z$1(a) === d$3;
	};
	reactIs_production_min$1.isProfiler = function (a) {
	  return z$1(a) === g$2;
	};
	reactIs_production_min$1.isStrictMode = function (a) {
	  return z$1(a) === f$1;
	};
	reactIs_production_min$1.isSuspense = function (a) {
	  return z$1(a) === p$2;
	};
	reactIs_production_min$1.isValidElementType = function (a) {
	  return "string" === typeof a || "function" === typeof a || a === e$1 || a === m$1 || a === g$2 || a === f$1 || a === p$2 || a === q$2 || "object" === typeof a && null !== a && (a.$$typeof === t$1 || a.$$typeof === r || a.$$typeof === h$1 || a.$$typeof === k$2 || a.$$typeof === n$1 || a.$$typeof === w$3 || a.$$typeof === x$1 || a.$$typeof === y$1 || a.$$typeof === v$2);
	};
	reactIs_production_min$1.typeOf = z$1;

	{
	  reactIs$2.exports = reactIs_production_min$1;
	}

	var reactIsExports$1 = reactIs$2.exports;

	var reactIs$1 = reactIsExports$1;

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	  childContextTypes: true,
	  contextType: true,
	  contextTypes: true,
	  defaultProps: true,
	  displayName: true,
	  getDefaultProps: true,
	  getDerivedStateFromError: true,
	  getDerivedStateFromProps: true,
	  mixins: true,
	  propTypes: true,
	  type: true
	};
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
	function getStatics(component) {
	  // React v16.11 and below
	  if (reactIs$1.isMemo(component)) {
	    return MEMO_STATICS;
	  } // React v16.12 and above

	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	  if (typeof sourceComponent !== 'string') {
	    // don't hoist over string (html) components
	    if (objectPrototype) {
	      var inheritedComponent = getPrototypeOf(sourceComponent);
	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	      }
	    }
	    var keys = getOwnPropertyNames(sourceComponent);
	    if (getOwnPropertySymbols) {
	      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	    }
	    var targetStatics = getStatics(targetComponent);
	    var sourceStatics = getStatics(sourceComponent);
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i];
	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	        try {
	          // Avoid failures from read-only properties
	          defineProperty(targetComponent, key, descriptor);
	        } catch (e) {}
	      }
	    }
	  }
	  return targetComponent;
	}
	var hoistNonReactStatics_cjs = hoistNonReactStatics;

	var hoistNonReactStatics$1 = /*@__PURE__*/getDefaultExportFromCjs(hoistNonReactStatics_cjs);

	var reactIs = {exports: {}};

	var reactIs_production_min = {};

	/**
	 * @license React
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var b$1 = Symbol.for("react.element"),
	  c = Symbol.for("react.portal"),
	  d$2 = Symbol.for("react.fragment"),
	  e = Symbol.for("react.strict_mode"),
	  f = Symbol.for("react.profiler"),
	  g$1 = Symbol.for("react.provider"),
	  h = Symbol.for("react.context"),
	  k$1 = Symbol.for("react.server_context"),
	  l = Symbol.for("react.forward_ref"),
	  m = Symbol.for("react.suspense"),
	  n = Symbol.for("react.suspense_list"),
	  p$1 = Symbol.for("react.memo"),
	  q$1 = Symbol.for("react.lazy"),
	  t = Symbol.for("react.offscreen"),
	  u;
	u = Symbol.for("react.module.reference");
	function v$1(a) {
	  if ("object" === typeof a && null !== a) {
	    var r = a.$$typeof;
	    switch (r) {
	      case b$1:
	        switch (a = a.type, a) {
	          case d$2:
	          case f:
	          case e:
	          case m:
	          case n:
	            return a;
	          default:
	            switch (a = a && a.$$typeof, a) {
	              case k$1:
	              case h:
	              case l:
	              case q$1:
	              case p$1:
	              case g$1:
	                return a;
	              default:
	                return r;
	            }
	        }
	      case c:
	        return r;
	    }
	  }
	}
	reactIs_production_min.ContextConsumer = h;
	reactIs_production_min.ContextProvider = g$1;
	reactIs_production_min.Element = b$1;
	reactIs_production_min.ForwardRef = l;
	reactIs_production_min.Fragment = d$2;
	reactIs_production_min.Lazy = q$1;
	reactIs_production_min.Memo = p$1;
	reactIs_production_min.Portal = c;
	reactIs_production_min.Profiler = f;
	reactIs_production_min.StrictMode = e;
	reactIs_production_min.Suspense = m;
	reactIs_production_min.SuspenseList = n;
	reactIs_production_min.isAsyncMode = function () {
	  return !1;
	};
	reactIs_production_min.isConcurrentMode = function () {
	  return !1;
	};
	reactIs_production_min.isContextConsumer = function (a) {
	  return v$1(a) === h;
	};
	reactIs_production_min.isContextProvider = function (a) {
	  return v$1(a) === g$1;
	};
	reactIs_production_min.isElement = function (a) {
	  return "object" === typeof a && null !== a && a.$$typeof === b$1;
	};
	reactIs_production_min.isForwardRef = function (a) {
	  return v$1(a) === l;
	};
	reactIs_production_min.isFragment = function (a) {
	  return v$1(a) === d$2;
	};
	reactIs_production_min.isLazy = function (a) {
	  return v$1(a) === q$1;
	};
	reactIs_production_min.isMemo = function (a) {
	  return v$1(a) === p$1;
	};
	reactIs_production_min.isPortal = function (a) {
	  return v$1(a) === c;
	};
	reactIs_production_min.isProfiler = function (a) {
	  return v$1(a) === f;
	};
	reactIs_production_min.isStrictMode = function (a) {
	  return v$1(a) === e;
	};
	reactIs_production_min.isSuspense = function (a) {
	  return v$1(a) === m;
	};
	reactIs_production_min.isSuspenseList = function (a) {
	  return v$1(a) === n;
	};
	reactIs_production_min.isValidElementType = function (a) {
	  return "string" === typeof a || "function" === typeof a || a === d$2 || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q$1 || a.$$typeof === p$1 || a.$$typeof === g$1 || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? !0 : !1;
	};
	reactIs_production_min.typeOf = v$1;

	{
	  reactIs.exports = reactIs_production_min;
	}

	var reactIsExports = reactIs.exports;

	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants

	function createListenerCollection() {
	  const batch = getBatch();
	  let first = null;
	  let last = null;
	  return {
	    clear() {
	      first = null;
	      last = null;
	    },
	    notify() {
	      batch(() => {
	        let listener = first;
	        while (listener) {
	          listener.callback();
	          listener = listener.next;
	        }
	      });
	    },
	    get() {
	      let listeners = [];
	      let listener = first;
	      while (listener) {
	        listeners.push(listener);
	        listener = listener.next;
	      }
	      return listeners;
	    },
	    subscribe(callback) {
	      let isSubscribed = true;
	      let listener = last = {
	        callback,
	        next: null,
	        prev: last
	      };
	      if (listener.prev) {
	        listener.prev.next = listener;
	      } else {
	        first = listener;
	      }
	      return function unsubscribe() {
	        if (!isSubscribed || first === null) return;
	        isSubscribed = false;
	        if (listener.next) {
	          listener.next.prev = listener.prev;
	        } else {
	          last = listener.prev;
	        }
	        if (listener.prev) {
	          listener.prev.next = listener.next;
	        } else {
	          first = listener.next;
	        }
	      };
	    }
	  };
	}
	const nullListeners = {
	  notify() {},
	  get: () => []
	};
	function createSubscription(store, parentSub) {
	  let unsubscribe;
	  let listeners = nullListeners;
	  function addNestedSub(listener) {
	    trySubscribe();
	    return listeners.subscribe(listener);
	  }
	  function notifyNestedSubs() {
	    listeners.notify();
	  }
	  function handleChangeWrapper() {
	    if (subscription.onStateChange) {
	      subscription.onStateChange();
	    }
	  }
	  function isSubscribed() {
	    return Boolean(unsubscribe);
	  }
	  function trySubscribe() {
	    if (!unsubscribe) {
	      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
	      listeners = createListenerCollection();
	    }
	  }
	  function tryUnsubscribe() {
	    if (unsubscribe) {
	      unsubscribe();
	      unsubscribe = undefined;
	      listeners.clear();
	      listeners = nullListeners;
	    }
	  }
	  const subscription = {
	    addNestedSub,
	    notifyNestedSubs,
	    handleChangeWrapper,
	    isSubscribed,
	    trySubscribe,
	    tryUnsubscribe,
	    getListeners: () => listeners
	  };
	  return subscription;
	}

	// To get around it, we can conditionally useEffect on the server (no-op) and
	// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
	// subscription callback always has the selector from the latest render commit
	// available, otherwise a store update may happen between render and the effect,
	// which may cause missed updates; we also must ensure the store subscription
	// is created synchronously, otherwise a store update may occur before the
	// subscription is created and an inconsistent state may be observed
	// Matches logic in React's `shared/ExecutionEnvironment` file

	const canUseDOM$1 = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
	const useIsomorphicLayoutEffect = canUseDOM$1 ? reactExports.useLayoutEffect : reactExports.useEffect;

	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) return true;
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	  const keysA = Object.keys(objA);
	  const keysB = Object.keys(objB);
	  if (keysA.length !== keysB.length) return false;
	  for (let i = 0; i < keysA.length; i++) {
	    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	  return true;
	}

	function Provider({
	  store,
	  context,
	  children,
	  serverState,
	  stabilityCheck = 'once',
	  noopCheck = 'once'
	}) {
	  const contextValue = reactExports.useMemo(() => {
	    const subscription = createSubscription(store);
	    return {
	      store,
	      subscription,
	      getServerState: serverState ? () => serverState : undefined,
	      stabilityCheck,
	      noopCheck
	    };
	  }, [store, serverState, stabilityCheck, noopCheck]);
	  const previousState = reactExports.useMemo(() => store.getState(), [store]);
	  useIsomorphicLayoutEffect(() => {
	    const {
	      subscription
	    } = contextValue;
	    subscription.onStateChange = subscription.notifyNestedSubs;
	    subscription.trySubscribe();
	    if (previousState !== store.getState()) {
	      subscription.notifyNestedSubs();
	    }
	    return () => {
	      subscription.tryUnsubscribe();
	      subscription.onStateChange = undefined;
	    };
	  }, [contextValue, previousState]);
	  const Context = context || ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

	  return /*#__PURE__*/reactExports.createElement(Context.Provider, {
	    value: contextValue
	  }, children);
	}

	/**
	 * Hook factory, which creates a `useStore` hook bound to a given context.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useStore` hook bound to the specified context.
	 */

	function createStoreHook(context = ReactReduxContext) {
	  const useReduxContext$1 =
	  // @ts-ignore
	  context === ReactReduxContext ? useReduxContext :
	  // @ts-ignore
	  createReduxContextHook(context);
	  return function useStore() {
	    const {
	      store
	    } = useReduxContext$1(); // @ts-ignore

	    return store;
	  };
	}
	/**
	 * A hook to access the redux store.
	 *
	 * @returns {any} the redux store
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useStore } from 'react-redux'
	 *
	 * export const ExampleComponent = () => {
	 *   const store = useStore()
	 *   return <div>{store.getState()}</div>
	 * }
	 */

	const useStore = /*#__PURE__*/createStoreHook();

	/**
	 * Hook factory, which creates a `useDispatch` hook bound to a given context.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useDispatch` hook bound to the specified context.
	 */

	function createDispatchHook(context = ReactReduxContext) {
	  const useStore$1 =
	  // @ts-ignore
	  context === ReactReduxContext ? useStore : createStoreHook(context);
	  return function useDispatch() {
	    const store = useStore$1(); // @ts-ignore

	    return store.dispatch;
	  };
	}
	/**
	 * A hook to access the redux `dispatch` function.
	 *
	 * @returns {any|function} redux store's `dispatch` function
	 *
	 * @example
	 *
	 * import React, { useCallback } from 'react'
	 * import { useDispatch } from 'react-redux'
	 *
	 * export const CounterComponent = ({ value }) => {
	 *   const dispatch = useDispatch()
	 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
	 *   return (
	 *     <div>
	 *       <span>{value}</span>
	 *       <button onClick={increaseCounter}>Increase counter</button>
	 *     </div>
	 *   )
	 * }
	 */

	const useDispatch = /*#__PURE__*/createDispatchHook();

	// The primary entry point assumes we're working with standard ReactDOM/RN, but
	// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
	// Because of that, the useSyncExternalStore compat shim is needed.
	initializeUseSelector(withSelectorExports.useSyncExternalStoreWithSelector);
	// with standard React renderers (ReactDOM, React Native)

	setBatch(reactDomExports.unstable_batchedUpdates);

	function _typeof$2(obj) {
	  "@babel/helpers - typeof";

	  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof$2(obj);
	}

	function _toPrimitive(input, hint) {
	  if (_typeof$2(input) !== "object" || input === null) return input;
	  var prim = input[Symbol.toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint || "default");
	    if (_typeof$2(res) !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (hint === "string" ? String : Number)(input);
	}

	function _toPropertyKey(arg) {
	  var key = _toPrimitive(arg, "string");
	  return _typeof$2(key) === "symbol" ? key : String(key);
	}

	function _defineProperty$2(obj, key, value) {
	  key = _toPropertyKey(key);
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	  return obj;
	}

	function ownKeys$2(object, enumerableOnly) {
	  var keys = Object.keys(object);
	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    enumerableOnly && (symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    })), keys.push.apply(keys, symbols);
	  }
	  return keys;
	}
	function _objectSpread2$2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = null != arguments[i] ? arguments[i] : {};
	    i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) {
	      _defineProperty$2(target, key, source[key]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) {
	      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	    });
	  }
	  return target;
	}

	/**
	 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
	 *
	 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
	 * during build.
	 * @param {number} code
	 */
	function formatProdErrorMessage(code) {
	  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
	}

	// Inlined version of the `symbol-observable` polyfill
	var $$observable = function () {
	  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
	}();

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var randomString = function randomString() {
	  return Math.random().toString(36).substring(7).split('').join('.');
	};
	var ActionTypes = {
	  INIT: "@@redux/INIT" + randomString(),
	  REPLACE: "@@redux/REPLACE" + randomString(),
	  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
	    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
	  }
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if (typeof obj !== 'object' || obj === null) return false;
	  var proto = obj;
	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }
	  return Object.getPrototypeOf(obj) === proto;
	}

	/**
	 * @deprecated
	 *
	 * **We recommend using the `configureStore` method
	 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
	 *
	 * Redux Toolkit is our recommended approach for writing Redux logic today,
	 * including store setup, reducers, data fetching, and more.
	 *
	 * **For more details, please read this Redux docs page:**
	 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
	 *
	 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
	 * simplifies setup and helps avoid common bugs.
	 *
	 * You should not be using the `redux` core package by itself today, except for learning purposes.
	 * The `createStore` method from the core `redux` package will not be removed, but we encourage
	 * all users to migrate to using Redux Toolkit for all Redux code.
	 *
	 * If you want to use `createStore` without this visual deprecation warning, use
	 * the `legacy_createStore` import instead:
	 *
	 * `import { legacy_createStore as createStore} from 'redux'`
	 *
	 */

	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
	    throw new Error(formatProdErrorMessage(0) );
	  }
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error(formatProdErrorMessage(1) );
	    }
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	  if (typeof reducer !== 'function') {
	    throw new Error(formatProdErrorMessage(2) );
	  }
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	  /**
	   * This makes a shallow copy of currentListeners so we can use
	   * nextListeners as a temporary list while dispatching.
	   *
	   * This prevents any bugs around consumers calling
	   * subscribe/unsubscribe in the middle of a dispatch.
	   */

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */

	  function getState() {
	    if (isDispatching) {
	      throw new Error(formatProdErrorMessage(3) );
	    }
	    return currentState;
	  }
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */

	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error(formatProdErrorMessage(4) );
	    }
	    if (isDispatching) {
	      throw new Error(formatProdErrorMessage(5) );
	    }
	    var isSubscribed = true;
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	      if (isDispatching) {
	        throw new Error(formatProdErrorMessage(6) );
	      }
	      isSubscribed = false;
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	      currentListeners = null;
	    };
	  }
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */

	  function dispatch(action) {
	    if (!isPlainObject(action)) {
	      throw new Error(formatProdErrorMessage(7) );
	    }
	    if (typeof action.type === 'undefined') {
	      throw new Error(formatProdErrorMessage(8) );
	    }
	    if (isDispatching) {
	      throw new Error(formatProdErrorMessage(9) );
	    }
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }
	    return action;
	  }
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */

	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error(formatProdErrorMessage(10) );
	    }
	    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
	    // Any reducers that existed in both the new and old rootReducer
	    // will receive the previous state. This effectively populates
	    // the new state tree with any relevant data from the old one.

	    dispatch({
	      type: ActionTypes.REPLACE
	    });
	  }
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */

	  function observable() {
	    var _ref;
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object' || observer === null) {
	          throw new Error(formatProdErrorMessage(11) );
	        }
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return {
	          unsubscribe: unsubscribe
	        };
	      }
	    }, _ref[$$observable] = function () {
	      return this;
	    }, _ref;
	  } // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.

	  dispatch({
	    type: ActionTypes.INIT
	  });
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[$$observable] = observable, _ref2;
	}
	/**
	 * Creates a Redux store that holds the state tree.
	 *
	 * **We recommend using `configureStore` from the
	 * `@reduxjs/toolkit` package**, which replaces `createStore`:
	 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
	 *
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */

	var legacy_createStore = createStore;
	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, {
	      type: ActionTypes.INIT
	    });
	    if (typeof initialState === 'undefined') {
	      throw new Error(formatProdErrorMessage(12) );
	    }
	    if (typeof reducer(undefined, {
	      type: ActionTypes.PROBE_UNKNOWN_ACTION()
	    }) === 'undefined') {
	      throw new Error(formatProdErrorMessage(13) );
	    }
	  });
	}
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */

	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
	  var shapeAssertionError;
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }
	  return function combination(state, action) {
	    if (state === void 0) {
	      state = {};
	    }
	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }
	    var hasChanged = false;
	    var nextState = {};
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        action && action.type;
	        throw new Error(formatProdErrorMessage(14) );
	      }
	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
	    return hasChanged ? nextState : state;
	  };
	}

	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	function compose() {
	  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(void 0, arguments));
	    };
	  });
	}

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */

	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	  return function (createStore) {
	    return function () {
	      var store = createStore.apply(void 0, arguments);
	      var _dispatch = function dispatch() {
	        throw new Error(formatProdErrorMessage(15) );
	      };
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch() {
	          return _dispatch.apply(void 0, arguments);
	        }
	      };
	      var chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = compose.apply(void 0, chain)(store.dispatch);
	      return _objectSpread2$2(_objectSpread2$2({}, store), {}, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

	var createSymbol = function createSymbol(name) {
	  return "@@redux-saga/" + name;
	};
	var CANCEL$1 = /*#__PURE__*/
	createSymbol('CANCEL_PROMISE');
	var CHANNEL_END_TYPE = /*#__PURE__*/
	createSymbol('CHANNEL_END');
	var IO = /*#__PURE__*/
	createSymbol('IO');
	var MATCH = /*#__PURE__*/
	createSymbol('MATCH');
	var MULTICAST = /*#__PURE__*/
	createSymbol('MULTICAST');
	var SAGA_ACTION = /*#__PURE__*/
	createSymbol('SAGA_ACTION');
	var SELF_CANCELLATION = /*#__PURE__*/
	createSymbol('SELF_CANCELLATION');
	var TASK = /*#__PURE__*/
	createSymbol('TASK');
	var TASK_CANCEL = /*#__PURE__*/
	createSymbol('TASK_CANCEL');
	var TERMINATE = /*#__PURE__*/
	createSymbol('TERMINATE');
	var SAGA_LOCATION = /*#__PURE__*/
	createSymbol('LOCATION');

	var undef = function undef(v) {
	  return v === null || v === undefined;
	};
	var notUndef = function notUndef(v) {
	  return v !== null && v !== undefined;
	};
	var func = function func(f) {
	  return typeof f === 'function';
	};
	var string$1 = function string(s) {
	  return typeof s === 'string';
	};
	var array$1 = Array.isArray;
	var promise = function promise(p) {
	  return p && func(p.then);
	};
	var iterator = function iterator(it) {
	  return it && func(it.next) && func(it.throw);
	};
	var pattern = function pattern(pat) {
	  return pat && (string$1(pat) || symbol$1(pat) || func(pat) || array$1(pat) && pat.every(pattern));
	};
	var channel$1 = function channel(ch) {
	  return ch && func(ch.take) && func(ch.close);
	};
	var stringableFunc = function stringableFunc(f) {
	  return func(f) && f.hasOwnProperty('toString');
	};
	var symbol$1 = function symbol(sym) {
	  return Boolean(sym) && typeof Symbol === 'function' && sym.constructor === Symbol && sym !== Symbol.prototype;
	};
	var multicast = function multicast(ch) {
	  return channel$1(ch) && ch[MULTICAST];
	};

	var MAX_SIGNED_INT = 2147483647;
	function delayP(ms, val) {
	  if (val === void 0) {
	    val = true;
	  }
	  var timeoutId;
	  var promise = new Promise(function (resolve) {
	    timeoutId = setTimeout(resolve, Math.min(MAX_SIGNED_INT, ms), val);
	  });
	  promise[CANCEL$1] = function () {
	    clearTimeout(timeoutId);
	  };
	  return promise;
	}

	var konst = function konst(v) {
	  return function () {
	    return v;
	  };
	};
	var kTrue = /*#__PURE__*/
	konst(true);
	var noop$3 = function noop() {};
	var identity = function identity(v) {
	  return v;
	};
	var assignWithSymbols = function assignWithSymbols(target, source) {
	  _extends(target, source);
	  if (Object.getOwnPropertySymbols) {
	    Object.getOwnPropertySymbols(source).forEach(function (s) {
	      target[s] = source[s];
	    });
	  }
	};
	var flatMap = function flatMap(mapper, arr) {
	  var _ref;
	  return (_ref = []).concat.apply(_ref, arr.map(mapper));
	};
	function remove(array, item) {
	  var index = array.indexOf(item);
	  if (index >= 0) {
	    array.splice(index, 1);
	  }
	}
	function once(fn) {
	  var called = false;
	  return function () {
	    if (called) {
	      return;
	    }
	    called = true;
	    fn();
	  };
	}
	var kThrow = function kThrow(err) {
	  throw err;
	};
	var kReturn = function kReturn(value) {
	  return {
	    value: value,
	    done: true
	  };
	};
	function makeIterator(next, thro, name) {
	  if (thro === void 0) {
	    thro = kThrow;
	  }
	  if (name === void 0) {
	    name = 'iterator';
	  }
	  var iterator = {
	    meta: {
	      name: name
	    },
	    next: next,
	    throw: thro,
	    return: kReturn,
	    isSagaIterator: true
	  };
	  if (typeof Symbol !== 'undefined') {
	    iterator[Symbol.iterator] = function () {
	      return iterator;
	    };
	  }
	  return iterator;
	}
	function logError(error, _ref2) {
	  var sagaStack = _ref2.sagaStack;

	  /*eslint-disable no-console*/
	  console.error(error);
	  console.error(sagaStack);
	}

	var createEmptyArray = function createEmptyArray(n) {
	  return Array.apply(null, new Array(n));
	};
	var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
	  return function (action) {
	    return dispatch(Object.defineProperty(action, SAGA_ACTION, {
	      value: true
	    }));
	  };
	};
	var shouldTerminate = function shouldTerminate(res) {
	  return res === TERMINATE;
	};
	var shouldCancel = function shouldCancel(res) {
	  return res === TASK_CANCEL;
	};
	var shouldComplete = function shouldComplete(res) {
	  return shouldTerminate(res) || shouldCancel(res);
	};
	function createAllStyleChildCallbacks(shape, parentCallback) {
	  var keys = Object.keys(shape);
	  var totalCount = keys.length;
	  var completedCount = 0;
	  var completed;
	  var results = array$1(shape) ? createEmptyArray(totalCount) : {};
	  var childCallbacks = {};
	  function checkEnd() {
	    if (completedCount === totalCount) {
	      completed = true;
	      parentCallback(results);
	    }
	  }
	  keys.forEach(function (key) {
	    var chCbAtKey = function chCbAtKey(res, isErr) {
	      if (completed) {
	        return;
	      }
	      if (isErr || shouldComplete(res)) {
	        parentCallback.cancel();
	        parentCallback(res, isErr);
	      } else {
	        results[key] = res;
	        completedCount++;
	        checkEnd();
	      }
	    };
	    chCbAtKey.cancel = noop$3;
	    childCallbacks[key] = chCbAtKey;
	  });
	  parentCallback.cancel = function () {
	    if (!completed) {
	      completed = true;
	      keys.forEach(function (key) {
	        return childCallbacks[key].cancel();
	      });
	    }
	  };
	  return childCallbacks;
	}
	function getMetaInfo(fn) {
	  return {
	    name: fn.name || 'anonymous',
	    location: getLocation(fn)
	  };
	}
	function getLocation(instrumented) {
	  return instrumented[SAGA_LOCATION];
	}
	var BUFFER_OVERFLOW = "Channel's Buffer overflow!";
	var ON_OVERFLOW_THROW = 1;
	var ON_OVERFLOW_SLIDE = 3;
	var ON_OVERFLOW_EXPAND = 4;
	function ringBuffer(limit, overflowAction) {
	  if (limit === void 0) {
	    limit = 10;
	  }
	  var arr = new Array(limit);
	  var length = 0;
	  var pushIndex = 0;
	  var popIndex = 0;
	  var push = function push(it) {
	    arr[pushIndex] = it;
	    pushIndex = (pushIndex + 1) % limit;
	    length++;
	  };
	  var take = function take() {
	    if (length != 0) {
	      var it = arr[popIndex];
	      arr[popIndex] = null;
	      length--;
	      popIndex = (popIndex + 1) % limit;
	      return it;
	    }
	  };
	  var flush = function flush() {
	    var items = [];
	    while (length) {
	      items.push(take());
	    }
	    return items;
	  };
	  return {
	    isEmpty: function isEmpty() {
	      return length == 0;
	    },
	    put: function put(it) {
	      if (length < limit) {
	        push(it);
	      } else {
	        var doubledLimit;
	        switch (overflowAction) {
	          case ON_OVERFLOW_THROW:
	            throw new Error(BUFFER_OVERFLOW);
	          case ON_OVERFLOW_SLIDE:
	            arr[pushIndex] = it;
	            pushIndex = (pushIndex + 1) % limit;
	            popIndex = pushIndex;
	            break;
	          case ON_OVERFLOW_EXPAND:
	            doubledLimit = 2 * limit;
	            arr = flush();
	            length = arr.length;
	            pushIndex = arr.length;
	            popIndex = 0;
	            arr.length = doubledLimit;
	            limit = doubledLimit;
	            push(it);
	            break;
	        }
	      }
	    },

	    take: take,
	    flush: flush
	  };
	}
	var expanding = function expanding(initialSize) {
	  return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
	};
	var TAKE = 'TAKE';
	var PUT = 'PUT';
	var ALL = 'ALL';
	var RACE = 'RACE';
	var CALL = 'CALL';
	var CPS = 'CPS';
	var FORK = 'FORK';
	var JOIN = 'JOIN';
	var CANCEL = 'CANCEL';
	var SELECT = 'SELECT';
	var ACTION_CHANNEL = 'ACTION_CHANNEL';
	var CANCELLED$1 = 'CANCELLED';
	var FLUSH = 'FLUSH';
	var GET_CONTEXT = 'GET_CONTEXT';
	var SET_CONTEXT = 'SET_CONTEXT';
	var makeEffect = function makeEffect(type, payload) {
	  var _ref;
	  return _ref = {}, _ref[IO] = true, _ref.combinator = false, _ref.type = type, _ref.payload = payload, _ref;
	};
	function take(patternOrChannel, multicastPattern) {
	  if (patternOrChannel === void 0) {
	    patternOrChannel = '*';
	  }
	  if (pattern(patternOrChannel)) {
	    if (notUndef(multicastPattern)) {
	      /* eslint-disable no-console */
	      console.warn("take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types");
	    }
	    return makeEffect(TAKE, {
	      pattern: patternOrChannel
	    });
	  }
	  if (multicast(patternOrChannel) && notUndef(multicastPattern) && pattern(multicastPattern)) {
	    return makeEffect(TAKE, {
	      channel: patternOrChannel,
	      pattern: multicastPattern
	    });
	  }
	  if (channel$1(patternOrChannel)) {
	    if (notUndef(multicastPattern)) {
	      /* eslint-disable no-console */
	      console.warn("take(channel) takes one argument but two were provided. Second argument is ignored.");
	    }
	    return makeEffect(TAKE, {
	      channel: patternOrChannel
	    });
	  }
	}
	function put(channel$1$1, action) {
	  if (undef(action)) {
	    action = channel$1$1; // `undefined` instead of `null` to make default parameter work

	    channel$1$1 = undefined;
	  }
	  return makeEffect(PUT, {
	    channel: channel$1$1,
	    action: action
	  });
	}
	function getFnCallDescriptor(fnDescriptor, args) {
	  var context = null;
	  var fn;
	  if (func(fnDescriptor)) {
	    fn = fnDescriptor;
	  } else {
	    if (array$1(fnDescriptor)) {
	      context = fnDescriptor[0];
	      fn = fnDescriptor[1];
	    } else {
	      context = fnDescriptor.context;
	      fn = fnDescriptor.fn;
	    }
	    if (context && string$1(fn) && func(context[fn])) {
	      fn = context[fn];
	    }
	  }
	  return {
	    context: context,
	    fn: fn,
	    args: args
	  };
	}
	function call(fnDescriptor) {
	  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	  return makeEffect(CALL, getFnCallDescriptor(fnDescriptor, args));
	}
	function fork(fnDescriptor) {
	  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	    args[_key3 - 1] = arguments[_key3];
	  }
	  return makeEffect(FORK, getFnCallDescriptor(fnDescriptor, args));
	}
	var delay = /*#__PURE__*/
	call.bind(null, delayP);

	function deferred() {
	  var def = {};
	  def.promise = new Promise(function (resolve, reject) {
	    def.resolve = resolve;
	    def.reject = reject;
	  });
	  return def;
	}

	var queue = [];
	/**
	  Variable to hold a counting semaphore
	  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
	    already suspended)
	  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
	    triggers flushing the queued tasks.
	**/

	var semaphore = 0;
	/**
	  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
	  and flushed after this task has finished (assuming the scheduler endup in a released
	  state).
	**/

	function exec(task) {
	  try {
	    suspend();
	    task();
	  } finally {
	    release();
	  }
	}
	/**
	  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
	**/

	function asap(task) {
	  queue.push(task);
	  if (!semaphore) {
	    suspend();
	    flush();
	  }
	}
	/**
	 * Puts the scheduler in a `suspended` state and executes a task immediately.
	 */

	function immediately(task) {
	  try {
	    suspend();
	    return task();
	  } finally {
	    flush();
	  }
	}
	/**
	  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
	  scheduler is released.
	**/

	function suspend() {
	  semaphore++;
	}
	/**
	  Puts the scheduler in a `released` state.
	**/

	function release() {
	  semaphore--;
	}
	/**
	  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
	**/

	function flush() {
	  release();
	  var task;
	  while (!semaphore && (task = queue.shift()) !== undefined) {
	    exec(task);
	  }
	}
	var array = function array(patterns) {
	  return function (input) {
	    return patterns.some(function (p) {
	      return matcher(p)(input);
	    });
	  };
	};
	var predicate = function predicate(_predicate) {
	  return function (input) {
	    return _predicate(input);
	  };
	};
	var string = function string(pattern) {
	  return function (input) {
	    return input.type === String(pattern);
	  };
	};
	var symbol = function symbol(pattern) {
	  return function (input) {
	    return input.type === pattern;
	  };
	};
	var wildcard = function wildcard() {
	  return kTrue;
	};
	function matcher(pattern) {
	  // prettier-ignore
	  var matcherCreator = pattern === '*' ? wildcard : string$1(pattern) ? string : array$1(pattern) ? array : stringableFunc(pattern) ? string : func(pattern) ? predicate : symbol$1(pattern) ? symbol : null;
	  if (matcherCreator === null) {
	    throw new Error("invalid pattern: " + pattern);
	  }
	  return matcherCreator(pattern);
	}
	var END = {
	  type: CHANNEL_END_TYPE
	};
	var isEnd = function isEnd(a) {
	  return a && a.type === CHANNEL_END_TYPE;
	};
	function channel(buffer$1) {
	  if (buffer$1 === void 0) {
	    buffer$1 = expanding();
	  }
	  var closed = false;
	  var takers = [];
	  function put(input) {
	    if (closed) {
	      return;
	    }
	    if (takers.length === 0) {
	      return buffer$1.put(input);
	    }
	    var cb = takers.shift();
	    cb(input);
	  }
	  function take(cb) {
	    if (closed && buffer$1.isEmpty()) {
	      cb(END);
	    } else if (!buffer$1.isEmpty()) {
	      cb(buffer$1.take());
	    } else {
	      takers.push(cb);
	      cb.cancel = function () {
	        remove(takers, cb);
	      };
	    }
	  }
	  function flush(cb) {
	    if (closed && buffer$1.isEmpty()) {
	      cb(END);
	      return;
	    }
	    cb(buffer$1.flush());
	  }
	  function close() {
	    if (closed) {
	      return;
	    }
	    closed = true;
	    var arr = takers;
	    takers = [];
	    for (var i = 0, len = arr.length; i < len; i++) {
	      var taker = arr[i];
	      taker(END);
	    }
	  }
	  return {
	    take: take,
	    put: put,
	    flush: flush,
	    close: close
	  };
	}
	function multicastChannel() {
	  var _ref;
	  var closed = false;
	  var currentTakers = [];
	  var nextTakers = currentTakers;
	  var ensureCanMutateNextTakers = function ensureCanMutateNextTakers() {
	    if (nextTakers !== currentTakers) {
	      return;
	    }
	    nextTakers = currentTakers.slice();
	  };
	  var close = function close() {
	    closed = true;
	    var takers = currentTakers = nextTakers;
	    nextTakers = [];
	    takers.forEach(function (taker) {
	      taker(END);
	    });
	  };
	  return _ref = {}, _ref[MULTICAST] = true, _ref.put = function put(input) {
	    if (closed) {
	      return;
	    }
	    if (isEnd(input)) {
	      close();
	      return;
	    }
	    var takers = currentTakers = nextTakers;
	    for (var i = 0, len = takers.length; i < len; i++) {
	      var taker = takers[i];
	      if (taker[MATCH](input)) {
	        taker.cancel();
	        taker(input);
	      }
	    }
	  }, _ref.take = function take(cb, matcher) {
	    if (matcher === void 0) {
	      matcher = wildcard;
	    }
	    if (closed) {
	      cb(END);
	      return;
	    }
	    cb[MATCH] = matcher;
	    ensureCanMutateNextTakers();
	    nextTakers.push(cb);
	    cb.cancel = once(function () {
	      ensureCanMutateNextTakers();
	      remove(nextTakers, cb);
	    });
	  }, _ref.close = close, _ref;
	}
	function stdChannel() {
	  var chan = multicastChannel();
	  var put = chan.put;
	  chan.put = function (input) {
	    if (input[SAGA_ACTION]) {
	      put(input);
	      return;
	    }
	    asap(function () {
	      put(input);
	    });
	  };
	  return chan;
	}
	var RUNNING = 0;
	var CANCELLED = 1;
	var ABORTED = 2;
	var DONE = 3;
	function resolvePromise(promise, cb) {
	  var cancelPromise = promise[CANCEL$1];
	  if (func(cancelPromise)) {
	    cb.cancel = cancelPromise;
	  }
	  promise.then(cb, function (error) {
	    cb(error, true);
	  });
	}
	var current = 0;
	var nextSagaId = function () {
	  return ++current;
	};
	var _effectRunnerMap;
	function getIteratorMetaInfo(iterator, fn) {
	  if (iterator.isSagaIterator) {
	    return {
	      name: iterator.meta.name
	    };
	  }
	  return getMetaInfo(fn);
	}
	function createTaskIterator(_ref) {
	  var context = _ref.context,
	    fn = _ref.fn,
	    args = _ref.args;

	  // catch synchronous failures; see #152 and #441
	  try {
	    var result = fn.apply(context, args); // i.e. a generator function returns an iterator

	    if (iterator(result)) {
	      return result;
	    }
	    var resolved = false;
	    var next = function next(arg) {
	      if (!resolved) {
	        resolved = true; // Only promises returned from fork will be interpreted. See #1573

	        return {
	          value: result,
	          done: !promise(result)
	        };
	      } else {
	        return {
	          value: arg,
	          done: true
	        };
	      }
	    };
	    return makeIterator(next);
	  } catch (err) {
	    // do not bubble up synchronous failures for detached forks
	    // instead create a failed task. See #152 and #441
	    return makeIterator(function () {
	      throw err;
	    });
	  }
	}
	function runPutEffect(env, _ref2, cb) {
	  var channel = _ref2.channel,
	    action = _ref2.action,
	    resolve = _ref2.resolve;

	  /**
	   Schedule the put in case another saga is holding a lock.
	   The put will be executed atomically. ie nested puts will execute after
	   this put has terminated.
	   **/
	  asap(function () {
	    var result;
	    try {
	      result = (channel ? channel.put : env.dispatch)(action);
	    } catch (error) {
	      cb(error, true);
	      return;
	    }
	    if (resolve && promise(result)) {
	      resolvePromise(result, cb);
	    } else {
	      cb(result);
	    }
	  }); // Put effects are non cancellables
	}

	function runTakeEffect(env, _ref3, cb) {
	  var _ref3$channel = _ref3.channel,
	    channel = _ref3$channel === void 0 ? env.channel : _ref3$channel,
	    pattern = _ref3.pattern,
	    maybe = _ref3.maybe;
	  var takeCb = function takeCb(input) {
	    if (input instanceof Error) {
	      cb(input, true);
	      return;
	    }
	    if (isEnd(input) && !maybe) {
	      cb(TERMINATE);
	      return;
	    }
	    cb(input);
	  };
	  try {
	    channel.take(takeCb, notUndef(pattern) ? matcher(pattern) : null);
	  } catch (err) {
	    cb(err, true);
	    return;
	  }
	  cb.cancel = takeCb.cancel;
	}
	function runCallEffect(env, _ref4, cb, _ref5) {
	  var context = _ref4.context,
	    fn = _ref4.fn,
	    args = _ref4.args;
	  var task = _ref5.task;

	  // catch synchronous failures; see #152
	  try {
	    var result = fn.apply(context, args);
	    if (promise(result)) {
	      resolvePromise(result, cb);
	      return;
	    }
	    if (iterator(result)) {
	      // resolve iterator
	      proc(env, result, task.context, current, getMetaInfo(fn), /* isRoot */
	      false, cb);
	      return;
	    }
	    cb(result);
	  } catch (error) {
	    cb(error, true);
	  }
	}
	function runCPSEffect(env, _ref6, cb) {
	  var context = _ref6.context,
	    fn = _ref6.fn,
	    args = _ref6.args;

	  // CPS (ie node style functions) can define their own cancellation logic
	  // by setting cancel field on the cb
	  // catch synchronous failures; see #152
	  try {
	    var cpsCb = function cpsCb(err, res) {
	      if (undef(err)) {
	        cb(res);
	      } else {
	        cb(err, true);
	      }
	    };
	    fn.apply(context, args.concat(cpsCb));
	    if (cpsCb.cancel) {
	      cb.cancel = cpsCb.cancel;
	    }
	  } catch (error) {
	    cb(error, true);
	  }
	}
	function runForkEffect(env, _ref7, cb, _ref8) {
	  var context = _ref7.context,
	    fn = _ref7.fn,
	    args = _ref7.args,
	    detached = _ref7.detached;
	  var parent = _ref8.task;
	  var taskIterator = createTaskIterator({
	    context: context,
	    fn: fn,
	    args: args
	  });
	  var meta = getIteratorMetaInfo(taskIterator, fn);
	  immediately(function () {
	    var child = proc(env, taskIterator, parent.context, current, meta, detached, undefined);
	    if (detached) {
	      cb(child);
	    } else {
	      if (child.isRunning()) {
	        parent.queue.addTask(child);
	        cb(child);
	      } else if (child.isAborted()) {
	        parent.queue.abort(child.error());
	      } else {
	        cb(child);
	      }
	    }
	  }); // Fork effects are non cancellables
	}

	function runJoinEffect(env, taskOrTasks, cb, _ref9) {
	  var task = _ref9.task;
	  var joinSingleTask = function joinSingleTask(taskToJoin, cb) {
	    if (taskToJoin.isRunning()) {
	      var joiner = {
	        task: task,
	        cb: cb
	      };
	      cb.cancel = function () {
	        if (taskToJoin.isRunning()) remove(taskToJoin.joiners, joiner);
	      };
	      taskToJoin.joiners.push(joiner);
	    } else {
	      if (taskToJoin.isAborted()) {
	        cb(taskToJoin.error(), true);
	      } else {
	        cb(taskToJoin.result());
	      }
	    }
	  };
	  if (array$1(taskOrTasks)) {
	    if (taskOrTasks.length === 0) {
	      cb([]);
	      return;
	    }
	    var childCallbacks = createAllStyleChildCallbacks(taskOrTasks, cb);
	    taskOrTasks.forEach(function (t, i) {
	      joinSingleTask(t, childCallbacks[i]);
	    });
	  } else {
	    joinSingleTask(taskOrTasks, cb);
	  }
	}
	function cancelSingleTask(taskToCancel) {
	  if (taskToCancel.isRunning()) {
	    taskToCancel.cancel();
	  }
	}
	function runCancelEffect(env, taskOrTasks, cb, _ref10) {
	  var task = _ref10.task;
	  if (taskOrTasks === SELF_CANCELLATION) {
	    cancelSingleTask(task);
	  } else if (array$1(taskOrTasks)) {
	    taskOrTasks.forEach(cancelSingleTask);
	  } else {
	    cancelSingleTask(taskOrTasks);
	  }
	  cb(); // cancel effects are non cancellables
	}

	function runAllEffect(env, effects, cb, _ref11) {
	  var digestEffect = _ref11.digestEffect;
	  var effectId = current;
	  var keys = Object.keys(effects);
	  if (keys.length === 0) {
	    cb(array$1(effects) ? [] : {});
	    return;
	  }
	  var childCallbacks = createAllStyleChildCallbacks(effects, cb);
	  keys.forEach(function (key) {
	    digestEffect(effects[key], effectId, childCallbacks[key], key);
	  });
	}
	function runRaceEffect(env, effects, cb, _ref12) {
	  var digestEffect = _ref12.digestEffect;
	  var effectId = current;
	  var keys = Object.keys(effects);
	  var response = array$1(effects) ? createEmptyArray(keys.length) : {};
	  var childCbs = {};
	  var completed = false;
	  keys.forEach(function (key) {
	    var chCbAtKey = function chCbAtKey(res, isErr) {
	      if (completed) {
	        return;
	      }
	      if (isErr || shouldComplete(res)) {
	        // Race Auto cancellation
	        cb.cancel();
	        cb(res, isErr);
	      } else {
	        cb.cancel();
	        completed = true;
	        response[key] = res;
	        cb(response);
	      }
	    };
	    chCbAtKey.cancel = noop$3;
	    childCbs[key] = chCbAtKey;
	  });
	  cb.cancel = function () {
	    // prevents unnecessary cancellation
	    if (!completed) {
	      completed = true;
	      keys.forEach(function (key) {
	        return childCbs[key].cancel();
	      });
	    }
	  };
	  keys.forEach(function (key) {
	    if (completed) {
	      return;
	    }
	    digestEffect(effects[key], effectId, childCbs[key], key);
	  });
	}
	function runSelectEffect(env, _ref13, cb) {
	  var selector = _ref13.selector,
	    args = _ref13.args;
	  try {
	    var state = selector.apply(void 0, [env.getState()].concat(args));
	    cb(state);
	  } catch (error) {
	    cb(error, true);
	  }
	}
	function runChannelEffect(env, _ref14, cb) {
	  var pattern = _ref14.pattern,
	    buffer = _ref14.buffer;
	  var chan = channel(buffer);
	  var match = matcher(pattern);
	  var taker = function taker(action) {
	    if (!isEnd(action)) {
	      env.channel.take(taker, match);
	    }
	    chan.put(action);
	  };
	  var close = chan.close;
	  chan.close = function () {
	    taker.cancel();
	    close();
	  };
	  env.channel.take(taker, match);
	  cb(chan);
	}
	function runCancelledEffect(env, data, cb, _ref15) {
	  var task = _ref15.task;
	  cb(task.isCancelled());
	}
	function runFlushEffect(env, channel, cb) {
	  channel.flush(cb);
	}
	function runGetContextEffect(env, prop, cb, _ref16) {
	  var task = _ref16.task;
	  cb(task.context[prop]);
	}
	function runSetContextEffect(env, props, cb, _ref17) {
	  var task = _ref17.task;
	  assignWithSymbols(task.context, props);
	  cb();
	}
	var effectRunnerMap = (_effectRunnerMap = {}, _effectRunnerMap[TAKE] = runTakeEffect, _effectRunnerMap[PUT] = runPutEffect, _effectRunnerMap[ALL] = runAllEffect, _effectRunnerMap[RACE] = runRaceEffect, _effectRunnerMap[CALL] = runCallEffect, _effectRunnerMap[CPS] = runCPSEffect, _effectRunnerMap[FORK] = runForkEffect, _effectRunnerMap[JOIN] = runJoinEffect, _effectRunnerMap[CANCEL] = runCancelEffect, _effectRunnerMap[SELECT] = runSelectEffect, _effectRunnerMap[ACTION_CHANNEL] = runChannelEffect, _effectRunnerMap[CANCELLED$1] = runCancelledEffect, _effectRunnerMap[FLUSH] = runFlushEffect, _effectRunnerMap[GET_CONTEXT] = runGetContextEffect, _effectRunnerMap[SET_CONTEXT] = runSetContextEffect, _effectRunnerMap);

	/**
	 Used to track a parent task and its forks
	 In the fork model, forked tasks are attached by default to their parent
	 We model this using the concept of Parent task && main Task
	 main task is the main flow of the current Generator, the parent tasks is the
	 aggregation of the main tasks + all its forked tasks.
	 Thus the whole model represents an execution tree with multiple branches (vs the
	 linear execution tree in sequential (non parallel) programming)

	 A parent tasks has the following semantics
	 - It completes if all its forks either complete or all cancelled
	 - If it's cancelled, all forks are cancelled as well
	 - It aborts if any uncaught error bubbles up from forks
	 - If it completes, the return value is the one returned by the main task
	 **/

	function forkQueue(mainTask, onAbort, cont) {
	  var tasks = [];
	  var result;
	  var completed = false;
	  addTask(mainTask);
	  var getTasks = function getTasks() {
	    return tasks;
	  };
	  function abort(err) {
	    onAbort();
	    cancelAll();
	    cont(err, true);
	  }
	  function addTask(task) {
	    tasks.push(task);
	    task.cont = function (res, isErr) {
	      if (completed) {
	        return;
	      }
	      remove(tasks, task);
	      task.cont = noop$3;
	      if (isErr) {
	        abort(res);
	      } else {
	        if (task === mainTask) {
	          result = res;
	        }
	        if (!tasks.length) {
	          completed = true;
	          cont(result);
	        }
	      }
	    };
	  }
	  function cancelAll() {
	    if (completed) {
	      return;
	    }
	    completed = true;
	    tasks.forEach(function (t) {
	      t.cont = noop$3;
	      t.cancel();
	    });
	    tasks = [];
	  }
	  return {
	    addTask: addTask,
	    cancelAll: cancelAll,
	    abort: abort,
	    getTasks: getTasks
	  };
	}

	// there can be only a single saga error created at any given moment

	function formatLocation(fileName, lineNumber) {
	  return fileName + "?" + lineNumber;
	}
	function effectLocationAsString(effect) {
	  var location = getLocation(effect);
	  if (location) {
	    var code = location.code,
	      fileName = location.fileName,
	      lineNumber = location.lineNumber;
	    var source = code + "  " + formatLocation(fileName, lineNumber);
	    return source;
	  }
	  return '';
	}
	function sagaLocationAsString(sagaMeta) {
	  var name = sagaMeta.name,
	    location = sagaMeta.location;
	  if (location) {
	    return name + "  " + formatLocation(location.fileName, location.lineNumber);
	  }
	  return name;
	}
	function cancelledTasksAsString(sagaStack) {
	  var cancelledTasks = flatMap(function (i) {
	    return i.cancelledTasks;
	  }, sagaStack);
	  if (!cancelledTasks.length) {
	    return '';
	  }
	  return ['Tasks cancelled due to error:'].concat(cancelledTasks).join('\n');
	}
	var crashedEffect = null;
	var sagaStack = [];
	var addSagaFrame = function addSagaFrame(frame) {
	  frame.crashedEffect = crashedEffect;
	  sagaStack.push(frame);
	};
	var clear = function clear() {
	  crashedEffect = null;
	  sagaStack.length = 0;
	}; // this sets crashed effect for the soon-to-be-reported saga frame
	// this slightly streatches the singleton nature of this module into wrong direction
	// as it's even less obvious what's the data flow here, but it is what it is for now

	var setCrashedEffect = function setCrashedEffect(effect) {
	  crashedEffect = effect;
	};
	/**
	  @returns {string}

	  @example
	  The above error occurred in task errorInPutSaga {pathToFile}
	  when executing effect put({type: 'REDUCER_ACTION_ERROR_IN_PUT'}) {pathToFile}
	      created by fetchSaga {pathToFile}
	      created by rootSaga {pathToFile}
	*/

	var toString = function toString() {
	  var firstSaga = sagaStack[0],
	    otherSagas = sagaStack.slice(1);
	  var crashedEffectLocation = firstSaga.crashedEffect ? effectLocationAsString(firstSaga.crashedEffect) : null;
	  var errorMessage = "The above error occurred in task " + sagaLocationAsString(firstSaga.meta) + (crashedEffectLocation ? " \n when executing effect " + crashedEffectLocation : '');
	  return [errorMessage].concat(otherSagas.map(function (s) {
	    return "    created by " + sagaLocationAsString(s.meta);
	  }), [cancelledTasksAsString(sagaStack)]).join('\n');
	};
	function newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont) {
	  var _task;
	  if (cont === void 0) {
	    cont = noop$3;
	  }
	  var status = RUNNING;
	  var taskResult;
	  var taskError;
	  var deferredEnd = null;
	  var cancelledDueToErrorTasks = [];
	  var context = Object.create(parentContext);
	  var queue = forkQueue(mainTask, function onAbort() {
	    cancelledDueToErrorTasks.push.apply(cancelledDueToErrorTasks, queue.getTasks().map(function (t) {
	      return t.meta.name;
	    }));
	  }, end);
	  /**
	   This may be called by a parent generator to trigger/propagate cancellation
	   cancel all pending tasks (including the main task), then end the current task.
	    Cancellation propagates down to the whole execution tree held by this Parent task
	   It's also propagated to all joiners of this task and their execution tree/joiners
	    Cancellation is noop for terminated/Cancelled tasks tasks
	   **/

	  function cancel() {
	    if (status === RUNNING) {
	      // Setting status to CANCELLED does not necessarily mean that the task/iterators are stopped
	      // effects in the iterator's finally block will still be executed
	      status = CANCELLED;
	      queue.cancelAll(); // Ending with a TASK_CANCEL will propagate the Cancellation to all joiners

	      end(TASK_CANCEL, false);
	    }
	  }
	  function end(result, isErr) {
	    if (!isErr) {
	      // The status here may be RUNNING or CANCELLED
	      // If the status is CANCELLED, then we do not need to change it here
	      if (result === TASK_CANCEL) {
	        status = CANCELLED;
	      } else if (status !== CANCELLED) {
	        status = DONE;
	      }
	      taskResult = result;
	      deferredEnd && deferredEnd.resolve(result);
	    } else {
	      status = ABORTED;
	      addSagaFrame({
	        meta: meta,
	        cancelledTasks: cancelledDueToErrorTasks
	      });
	      if (task.isRoot) {
	        var sagaStack = toString(); // we've dumped the saga stack to string and are passing it to user's code
	        // we know that it won't be needed anymore and we need to clear it

	        clear();
	        env.onError(result, {
	          sagaStack: sagaStack
	        });
	      }
	      taskError = result;
	      deferredEnd && deferredEnd.reject(result);
	    }
	    task.cont(result, isErr);
	    task.joiners.forEach(function (joiner) {
	      joiner.cb(result, isErr);
	    });
	    task.joiners = null;
	  }
	  function setContext(props) {
	    assignWithSymbols(context, props);
	  }
	  function toPromise() {
	    if (deferredEnd) {
	      return deferredEnd.promise;
	    }
	    deferredEnd = deferred();
	    if (status === ABORTED) {
	      deferredEnd.reject(taskError);
	    } else if (status !== RUNNING) {
	      deferredEnd.resolve(taskResult);
	    }
	    return deferredEnd.promise;
	  }
	  var task = (_task = {}, _task[TASK] = true, _task.id = parentEffectId, _task.meta = meta, _task.isRoot = isRoot, _task.context = context, _task.joiners = [], _task.queue = queue, _task.cancel = cancel, _task.cont = cont, _task.end = end, _task.setContext = setContext, _task.toPromise = toPromise, _task.isRunning = function isRunning() {
	    return status === RUNNING;
	  }, _task.isCancelled = function isCancelled() {
	    return status === CANCELLED || status === RUNNING && mainTask.status === CANCELLED;
	  }, _task.isAborted = function isAborted() {
	    return status === ABORTED;
	  }, _task.result = function result() {
	    return taskResult;
	  }, _task.error = function error() {
	    return taskError;
	  }, _task);
	  return task;
	}
	function proc(env, iterator$1, parentContext, parentEffectId, meta, isRoot, cont) {
	  var finalRunEffect = env.finalizeRunEffect(runEffect);
	  /**
	    Tracks the current effect cancellation
	    Each time the generator progresses. calling runEffect will set a new value
	    on it. It allows propagating cancellation to child effects
	  **/

	  next.cancel = noop$3;
	  /** Creates a main task to track the main flow */

	  var mainTask = {
	    meta: meta,
	    cancel: cancelMain,
	    status: RUNNING
	  };
	  /**
	   Creates a new task descriptor for this generator.
	   A task is the aggregation of it's mainTask and all it's forked tasks.
	   **/

	  var task = newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont);
	  var executingContext = {
	    task: task,
	    digestEffect: digestEffect
	  };
	  /**
	    cancellation of the main task. We'll simply resume the Generator with a TASK_CANCEL
	  **/

	  function cancelMain() {
	    if (mainTask.status === RUNNING) {
	      mainTask.status = CANCELLED;
	      next(TASK_CANCEL);
	    }
	  }
	  /**
	    attaches cancellation logic to this task's continuation
	    this will permit cancellation to propagate down the call chain
	  **/

	  if (cont) {
	    cont.cancel = task.cancel;
	  } // kicks up the generator

	  next(); // then return the task descriptor to the caller

	  return task;
	  /**
	   * This is the generator driver
	   * It's a recursive async/continuation function which calls itself
	   * until the generator terminates or throws
	   * @param {internal commands(TASK_CANCEL | TERMINATE) | any} arg - value, generator will be resumed with.
	   * @param {boolean} isErr - the flag shows if effect finished with an error
	   *
	   * receives either (command | effect result, false) or (any thrown thing, true)
	   */

	  function next(arg, isErr) {
	    try {
	      var result;
	      if (isErr) {
	        result = iterator$1.throw(arg); // user handled the error, we can clear bookkept values

	        clear();
	      } else if (shouldCancel(arg)) {
	        /**
	          getting TASK_CANCEL automatically cancels the main task
	          We can get this value here
	           - By cancelling the parent task manually
	          - By joining a Cancelled task
	        **/
	        mainTask.status = CANCELLED;
	        /**
	          Cancels the current effect; this will propagate the cancellation down to any called tasks
	        **/

	        next.cancel();
	        /**
	          If this Generator has a `return` method then invokes it
	          This will jump to the finally block
	        **/

	        result = func(iterator$1.return) ? iterator$1.return(TASK_CANCEL) : {
	          done: true,
	          value: TASK_CANCEL
	        };
	      } else if (shouldTerminate(arg)) {
	        // We get TERMINATE flag, i.e. by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
	        result = func(iterator$1.return) ? iterator$1.return() : {
	          done: true
	        };
	      } else {
	        result = iterator$1.next(arg);
	      }
	      if (!result.done) {
	        digestEffect(result.value, parentEffectId, next);
	      } else {
	        /**
	          This Generator has ended, terminate the main task and notify the fork queue
	        **/
	        if (mainTask.status !== CANCELLED) {
	          mainTask.status = DONE;
	        }
	        mainTask.cont(result.value);
	      }
	    } catch (error) {
	      if (mainTask.status === CANCELLED) {
	        throw error;
	      }
	      mainTask.status = ABORTED;
	      mainTask.cont(error, true);
	    }
	  }
	  function runEffect(effect, effectId, currCb) {
	    /**
	      each effect runner must attach its own logic of cancellation to the provided callback
	      it allows this generator to propagate cancellation downward.
	       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
	      And the setup must occur before calling the callback
	       This is a sort of inversion of control: called async functions are responsible
	      of completing the flow by calling the provided continuation; while caller functions
	      are responsible for aborting the current flow by calling the attached cancel function
	       Library users can attach their own cancellation logic to promises by defining a
	      promise[CANCEL] method in their returned promises
	      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
	    **/
	    if (promise(effect)) {
	      resolvePromise(effect, currCb);
	    } else if (iterator(effect)) {
	      // resolve iterator
	      proc(env, effect, task.context, effectId, meta, /* isRoot */
	      false, currCb);
	    } else if (effect && effect[IO]) {
	      var effectRunner = effectRunnerMap[effect.type];
	      effectRunner(env, effect.payload, currCb, executingContext);
	    } else {
	      // anything else returned as is
	      currCb(effect);
	    }
	  }
	  function digestEffect(effect, parentEffectId, cb, label) {
	    if (label === void 0) {
	      label = '';
	    }
	    var effectId = nextSagaId();
	    env.sagaMonitor && env.sagaMonitor.effectTriggered({
	      effectId: effectId,
	      parentEffectId: parentEffectId,
	      label: label,
	      effect: effect
	    });
	    /**
	      completion callback and cancel callback are mutually exclusive
	      We can't cancel an already completed effect
	      And We can't complete an already cancelled effectId
	    **/

	    var effectSettled; // Completion callback passed to the appropriate effect runner

	    function currCb(res, isErr) {
	      if (effectSettled) {
	        return;
	      }
	      effectSettled = true;
	      cb.cancel = noop$3; // defensive measure

	      if (env.sagaMonitor) {
	        if (isErr) {
	          env.sagaMonitor.effectRejected(effectId, res);
	        } else {
	          env.sagaMonitor.effectResolved(effectId, res);
	        }
	      }
	      if (isErr) {
	        setCrashedEffect(effect);
	      }
	      cb(res, isErr);
	    } // tracks down the current cancel

	    currCb.cancel = noop$3; // setup cancellation logic on the parent cb

	    cb.cancel = function () {
	      // prevents cancelling an already completed effect
	      if (effectSettled) {
	        return;
	      }
	      effectSettled = true;
	      currCb.cancel(); // propagates cancel downward

	      currCb.cancel = noop$3; // defensive measure

	      env.sagaMonitor && env.sagaMonitor.effectCancelled(effectId);
	    };
	    finalRunEffect(effect, effectId, currCb);
	  }
	}
	function runSaga(_ref, saga) {
	  var _ref$channel = _ref.channel,
	    channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
	    dispatch = _ref.dispatch,
	    getState = _ref.getState,
	    _ref$context = _ref.context,
	    context = _ref$context === void 0 ? {} : _ref$context,
	    sagaMonitor = _ref.sagaMonitor,
	    effectMiddlewares = _ref.effectMiddlewares,
	    _ref$onError = _ref.onError,
	    onError = _ref$onError === void 0 ? logError : _ref$onError;
	  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	  var iterator$1 = saga.apply(void 0, args);
	  var effectId = nextSagaId();
	  if (sagaMonitor) {
	    // monitors are expected to have a certain interface, let's fill-in any missing ones
	    sagaMonitor.rootSagaStarted = sagaMonitor.rootSagaStarted || noop$3;
	    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || noop$3;
	    sagaMonitor.effectResolved = sagaMonitor.effectResolved || noop$3;
	    sagaMonitor.effectRejected = sagaMonitor.effectRejected || noop$3;
	    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || noop$3;
	    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || noop$3;
	    sagaMonitor.rootSagaStarted({
	      effectId: effectId,
	      saga: saga,
	      args: args
	    });
	  }
	  var finalizeRunEffect;
	  if (effectMiddlewares) {
	    var middleware = compose.apply(void 0, effectMiddlewares);
	    finalizeRunEffect = function finalizeRunEffect(runEffect) {
	      return function (effect, effectId, currCb) {
	        var plainRunEffect = function plainRunEffect(eff) {
	          return runEffect(eff, effectId, currCb);
	        };
	        return middleware(plainRunEffect)(effect);
	      };
	    };
	  } else {
	    finalizeRunEffect = identity;
	  }
	  var env = {
	    channel: channel,
	    dispatch: wrapSagaDispatch(dispatch),
	    getState: getState,
	    sagaMonitor: sagaMonitor,
	    onError: onError,
	    finalizeRunEffect: finalizeRunEffect
	  };
	  return immediately(function () {
	    var task = proc(env, iterator$1, context, effectId, getMetaInfo(saga), /* isRoot */
	    true, undefined);
	    if (sagaMonitor) {
	      sagaMonitor.effectResolved(effectId, task);
	    }
	    return task;
	  });
	}
	function sagaMiddlewareFactory(_temp) {
	  var _ref = _temp === void 0 ? {} : _temp,
	    _ref$context = _ref.context,
	    context = _ref$context === void 0 ? {} : _ref$context,
	    _ref$channel = _ref.channel,
	    channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
	    sagaMonitor = _ref.sagaMonitor,
	    options = _objectWithoutPropertiesLoose$1(_ref, ["context", "channel", "sagaMonitor"]);
	  var boundRunSaga;
	  function sagaMiddleware(_ref2) {
	    var getState = _ref2.getState,
	      dispatch = _ref2.dispatch;
	    boundRunSaga = runSaga.bind(null, _extends({}, options, {
	      context: context,
	      channel: channel,
	      dispatch: dispatch,
	      getState: getState,
	      sagaMonitor: sagaMonitor
	    }));
	    return function (next) {
	      return function (action) {
	        if (sagaMonitor && sagaMonitor.actionDispatched) {
	          sagaMonitor.actionDispatched(action);
	        }
	        var result = next(action); // hit reducers

	        channel.put(action);
	        return result;
	      };
	    };
	  }
	  sagaMiddleware.run = function () {
	    return boundRunSaga.apply(void 0, arguments);
	  };
	  sagaMiddleware.setContext = function (props) {
	    assignWithSymbols(context, props);
	  };
	  return sagaMiddleware;
	}

	var styledReboot = {};

	//

	var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
	  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	  if (ret !== void 0) {
	    return !!ret;
	  }
	  if (objA === objB) {
	    return true;
	  }
	  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
	    return false;
	  }
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

	  // Test for A's keys different from B.
	  for (var idx = 0; idx < keysA.length; idx++) {
	    var key = keysA[idx];
	    if (!bHasOwnProperty(key)) {
	      return false;
	    }
	    var valueA = objA[key];
	    var valueB = objB[key];
	    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	    if (ret === false || ret === void 0 && valueA !== valueB) {
	      return false;
	    }
	  }
	  return true;
	};

	var d$1 = /*@__PURE__*/getDefaultExportFromCjs(shallowequal);

	function stylis_min(W) {
	  function M(d, c, e, h, a) {
	    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
	      g = e.charCodeAt(l);
	      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
	      if (0 === b + n + v + m) {
	        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
	          switch (g) {
	            case 32:
	            case 9:
	            case 59:
	            case 13:
	            case 10:
	              break;
	            default:
	              f += e.charAt(l);
	          }
	          g = 59;
	        }
	        switch (g) {
	          case 123:
	            f = f.trim();
	            q = f.charCodeAt(0);
	            k = 1;
	            for (t = ++l; l < B;) {
	              switch (g = e.charCodeAt(l)) {
	                case 123:
	                  k++;
	                  break;
	                case 125:
	                  k--;
	                  break;
	                case 47:
	                  switch (g = e.charCodeAt(l + 1)) {
	                    case 42:
	                    case 47:
	                      a: {
	                        for (u = l + 1; u < J; ++u) {
	                          switch (e.charCodeAt(u)) {
	                            case 47:
	                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
	                                l = u + 1;
	                                break a;
	                              }
	                              break;
	                            case 10:
	                              if (47 === g) {
	                                l = u + 1;
	                                break a;
	                              }
	                          }
	                        }
	                        l = u;
	                      }
	                  }
	                  break;
	                case 91:
	                  g++;
	                case 40:
	                  g++;
	                case 34:
	                case 39:
	                  for (; l++ < J && e.charCodeAt(l) !== g;) {}
	              }
	              if (0 === k) break;
	              l++;
	            }
	            k = e.substring(t, l);
	            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));
	            switch (q) {
	              case 64:
	                0 < r && (f = f.replace(N, ''));
	                g = f.charCodeAt(1);
	                switch (g) {
	                  case 100:
	                  case 109:
	                  case 115:
	                  case 45:
	                    r = c;
	                    break;
	                  default:
	                    r = O;
	                }
	                k = M(c, r, k, g, a + 1);
	                t = k.length;
	                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
	                if (0 < t) switch (g) {
	                  case 115:
	                    f = f.replace(da, ea);
	                  case 100:
	                  case 109:
	                  case 45:
	                    k = f + '{' + k + '}';
	                    break;
	                  case 107:
	                    f = f.replace(fa, '$1 $2');
	                    k = f + '{' + k + '}';
	                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
	                    break;
	                  default:
	                    k = f + k, 112 === h && (k = (p += k, ''));
	                } else k = '';
	                break;
	              default:
	                k = M(c, X(c, f, I), k, h, a + 1);
	            }
	            F += k;
	            k = I = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	            break;
	          case 125:
	          case 59:
	            f = (0 < r ? f.replace(N, '') : f).trim();
	            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
	              case 0:
	                break;
	              case 64:
	                if (105 === g || 99 === g) {
	                  G += f + e.charAt(l);
	                  break;
	                }
	              default:
	                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
	            }
	            I = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	        }
	      }
	      switch (g) {
	        case 13:
	        case 10:
	          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
	          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
	          z = 1;
	          D++;
	          break;
	        case 59:
	        case 125:
	          if (0 === b + n + v + m) {
	            z++;
	            break;
	          }
	        default:
	          z++;
	          y = e.charAt(l);
	          switch (g) {
	            case 9:
	            case 32:
	              if (0 === n + m + b) switch (x) {
	                case 44:
	                case 58:
	                case 9:
	                case 32:
	                  y = '';
	                  break;
	                default:
	                  32 !== g && (y = ' ');
	              }
	              break;
	            case 0:
	              y = '\\0';
	              break;
	            case 12:
	              y = '\\f';
	              break;
	            case 11:
	              y = '\\v';
	              break;
	            case 38:
	              0 === n + b + m && (r = I = 1, y = '\f' + y);
	              break;
	            case 108:
	              if (0 === n + b + m + E && 0 < u) switch (l - u) {
	                case 2:
	                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
	                case 8:
	                  111 === K && (E = K);
	              }
	              break;
	            case 58:
	              0 === n + b + m && (u = l);
	              break;
	            case 44:
	              0 === b + v + n + m && (r = 1, y += '\r');
	              break;
	            case 34:
	            case 39:
	              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
	              break;
	            case 91:
	              0 === n + b + v && m++;
	              break;
	            case 93:
	              0 === n + b + v && m--;
	              break;
	            case 41:
	              0 === n + b + m && v--;
	              break;
	            case 40:
	              if (0 === n + b + m) {
	                if (0 === q) switch (2 * x + 3 * K) {
	                  case 533:
	                    break;
	                  default:
	                    q = 1;
	                }
	                v++;
	              }
	              break;
	            case 64:
	              0 === b + v + n + m + u + k && (k = 1);
	              break;
	            case 42:
	            case 47:
	              if (!(0 < n + m + v)) switch (b) {
	                case 0:
	                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
	                    case 235:
	                      b = 47;
	                      break;
	                    case 220:
	                      t = l, b = 42;
	                  }
	                  break;
	                case 42:
	                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
	              }
	          }
	          0 === b && (f += y);
	      }
	      K = x;
	      x = g;
	      l++;
	    }
	    t = p.length;
	    if (0 < t) {
	      r = c;
	      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
	      p = r.join(',') + '{' + p + '}';
	      if (0 !== w * E) {
	        2 !== w || L(p, 2) || (E = 0);
	        switch (E) {
	          case 111:
	            p = p.replace(ha, ':-moz-$1') + p;
	            break;
	          case 112:
	            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
	        }
	        E = 0;
	      }
	    }
	    return G + p + F;
	  }
	  function X(d, c, e) {
	    var h = c.trim().split(ia);
	    c = h;
	    var a = h.length,
	      m = d.length;
	    switch (m) {
	      case 0:
	      case 1:
	        var b = 0;
	        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
	          c[b] = Z(d, c[b], e).trim();
	        }
	        break;
	      default:
	        var v = b = 0;
	        for (c = []; b < a; ++b) {
	          for (var n = 0; n < m; ++n) {
	            c[v++] = Z(d[n] + ' ', h[b], e).trim();
	          }
	        }
	    }
	    return c;
	  }
	  function Z(d, c, e) {
	    var h = c.charCodeAt(0);
	    33 > h && (h = (c = c.trim()).charCodeAt(0));
	    switch (h) {
	      case 38:
	        return c.replace(F, '$1' + d.trim());
	      case 58:
	        return d.trim() + c.replace(F, '$1' + d.trim());
	      default:
	        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
	    }
	    return d + c;
	  }
	  function P(d, c, e, h) {
	    var a = d + ';',
	      m = 2 * c + 3 * e + 4 * h;
	    if (944 === m) {
	      d = a.indexOf(':', 9) + 1;
	      var b = a.substring(d, a.length - 1).trim();
	      b = a.substring(0, d).trim() + b + ';';
	      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
	    }
	    if (0 === w || 2 === w && !L(a, 1)) return a;
	    switch (m) {
	      case 1015:
	        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;
	      case 951:
	        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;
	      case 963:
	        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;
	      case 1009:
	        if (100 !== a.charCodeAt(4)) break;
	      case 969:
	      case 942:
	        return '-webkit-' + a + a;
	      case 978:
	        return '-webkit-' + a + '-moz-' + a + a;
	      case 1019:
	      case 983:
	        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;
	      case 883:
	        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
	        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
	        break;
	      case 932:
	        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
	          case 103:
	            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;
	          case 115:
	            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;
	          case 98:
	            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
	        }
	        return '-webkit-' + a + '-ms-' + a + a;
	      case 964:
	        return '-webkit-' + a + '-ms-flex-' + a + a;
	      case 1023:
	        if (99 !== a.charCodeAt(8)) break;
	        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
	        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;
	      case 1005:
	        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;
	      case 1e3:
	        b = a.substring(13).trim();
	        c = b.indexOf('-') + 1;
	        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
	          case 226:
	            b = a.replace(G, 'tb');
	            break;
	          case 232:
	            b = a.replace(G, 'tb-rl');
	            break;
	          case 220:
	            b = a.replace(G, 'lr');
	            break;
	          default:
	            return a;
	        }
	        return '-webkit-' + a + '-ms-' + b + a;
	      case 1017:
	        if (-1 === a.indexOf('sticky', 9)) break;
	      case 975:
	        c = (a = d).length - 10;
	        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();
	        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
	          case 203:
	            if (111 > b.charCodeAt(8)) break;
	          case 115:
	            a = a.replace(b, '-webkit-' + b) + ';' + a;
	            break;
	          case 207:
	          case 102:
	            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
	        }
	        return a + ';';
	      case 938:
	        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
	          case 105:
	            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;
	          case 115:
	            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;
	          default:
	            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
	        }
	        break;
	      case 973:
	      case 989:
	        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
	      case 931:
	      case 953:
	        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
	        break;
	      case 962:
	        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
	    }
	    return a;
	  }
	  function L(d, c) {
	    var e = d.indexOf(1 === c ? ':' : '{'),
	      h = d.substring(0, 3 !== c ? e : 10);
	    e = d.substring(e + 1, d.length - 1);
	    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
	  }
	  function ea(d, c) {
	    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
	    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
	  }
	  function H(d, c, e, h, a, m, b, v, n, q) {
	    for (var g = 0, x = c, w; g < A; ++g) {
	      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
	        case void 0:
	        case !1:
	        case !0:
	        case null:
	          break;
	        default:
	          x = w;
	      }
	    }
	    if (x !== c) return x;
	  }
	  function T(d) {
	    switch (d) {
	      case void 0:
	      case null:
	        A = S.length = 0;
	        break;
	      default:
	        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
	          T(d[c]);
	        } else Y = !!d | 0;
	    }
	    return T;
	  }
	  function U(d) {
	    d = d.prefix;
	    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
	    return U;
	  }
	  function B(d, c) {
	    var e = d;
	    33 > e.charCodeAt(0) && (e = e.trim());
	    V = e;
	    e = [V];
	    if (0 < A) {
	      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
	      void 0 !== h && 'string' === typeof h && (c = h);
	    }
	    var a = M(O, e, c, 0, 0);
	    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
	    V = '';
	    E = 0;
	    z = D = 1;
	    return a;
	  }
	  var ca = /^\0+/g,
	    N = /[\0\r\f]/g,
	    aa = /: */g,
	    ka = /zoo|gra/,
	    ma = /([,: ])(transform)/g,
	    ia = /,\r+?/g,
	    F = /([\t\r\n ])*\f?&/g,
	    fa = /@(k\w+)\s*(\S*)\s*/,
	    Q = /::(place)/g,
	    ha = /:(read-only)/g,
	    G = /[svh]\w+-[tblr]{2}/,
	    da = /\(\s*(.*)\s*\)/g,
	    oa = /([\s\S]*?);/g,
	    ba = /-self|flex-/g,
	    na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
	    la = /stretch|:\s*\w+\-(?:conte|avail)/,
	    ja = /([^-])(image-set\()/,
	    z = 1,
	    D = 1,
	    E = 0,
	    w = 1,
	    O = [],
	    S = [],
	    A = 0,
	    R = null,
	    Y = 0,
	    V = '';
	  B.use = T;
	  B.set = U;
	  void 0 !== W && U(W);
	  return B;
	}

	var unitlessKeys$1 = {
	  animationIterationCount: 1,
	  borderImageOutset: 1,
	  borderImageSlice: 1,
	  borderImageWidth: 1,
	  boxFlex: 1,
	  boxFlexGroup: 1,
	  boxOrdinalGroup: 1,
	  columnCount: 1,
	  columns: 1,
	  flex: 1,
	  flexGrow: 1,
	  flexPositive: 1,
	  flexShrink: 1,
	  flexNegative: 1,
	  flexOrder: 1,
	  gridRow: 1,
	  gridRowEnd: 1,
	  gridRowSpan: 1,
	  gridRowStart: 1,
	  gridColumn: 1,
	  gridColumnEnd: 1,
	  gridColumnSpan: 1,
	  gridColumnStart: 1,
	  msGridRow: 1,
	  msGridRowSpan: 1,
	  msGridColumn: 1,
	  msGridColumnSpan: 1,
	  fontWeight: 1,
	  lineHeight: 1,
	  opacity: 1,
	  order: 1,
	  orphans: 1,
	  tabSize: 1,
	  widows: 1,
	  zIndex: 1,
	  zoom: 1,
	  WebkitLineClamp: 1,
	  // SVG-related properties
	  fillOpacity: 1,
	  floodOpacity: 1,
	  stopOpacity: 1,
	  strokeDasharray: 1,
	  strokeDashoffset: 1,
	  strokeMiterlimit: 1,
	  strokeOpacity: 1,
	  strokeWidth: 1
	};

	function memoize(fn) {
	  var cache = Object.create(null);
	  return function (arg) {
	    if (cache[arg] === undefined) cache[arg] = fn(arg);
	    return cache[arg];
	  };
	}

	var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

	var isPropValid = /* #__PURE__ */memoize(function (prop) {
	  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
	  /* o */ && prop.charCodeAt(1) === 110
	  /* n */ && prop.charCodeAt(2) < 91;
	}
	/* Z+1 */);

	function y() {
	  return (y = Object.assign || function (e) {
	    for (var t = 1; t < arguments.length; t++) {
	      var n = arguments[t];
	      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
	    }
	    return e;
	  }).apply(this, arguments);
	}
	var v = function (e, t) {
	    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
	    return n;
	  },
	  g = function (t) {
	    return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !reactIsExports.typeOf(t);
	  },
	  S = Object.freeze([]),
	  w$2 = Object.freeze({});
	function E(e) {
	  return "function" == typeof e;
	}
	function b(e) {
	  return e.displayName || e.name || "Component";
	}
	function _(e) {
	  return e && "string" == typeof e.styledComponentId;
	}
	var N = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
	  A = "5.3.11",
	  C = "undefined" != typeof window && "HTMLElement" in window,
	  I = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && (void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== 'production')),
	  P = {};
	function D(e) {
	  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
	  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) ;
	}
	var j$1 = function () {
	    function e(e) {
	      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
	    }
	    var t = e.prototype;
	    return t.indexOfGroup = function (e) {
	      for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
	      return t;
	    }, t.insertRules = function (e, t) {
	      if (e >= this.groupSizes.length) {
	        for (var n = this.groupSizes, r = n.length, o = r; e >= o;) (o <<= 1) < 0 && D(16, "" + e);
	        this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
	        for (var s = r; s < o; s++) this.groupSizes[s] = 0;
	      }
	      for (var i = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++) this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
	    }, t.clearGroup = function (e) {
	      if (e < this.length) {
	        var t = this.groupSizes[e],
	          n = this.indexOfGroup(e),
	          r = n + t;
	        this.groupSizes[e] = 0;
	        for (var o = n; o < r; o++) this.tag.deleteRule(n);
	      }
	    }, t.getGroup = function (e) {
	      var t = "";
	      if (e >= this.length || 0 === this.groupSizes[e]) return t;
	      for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++) t += this.tag.getRule(s) + "/*!sc*/\n";
	      return t;
	    }, e;
	  }(),
	  T = new Map(),
	  x = new Map(),
	  k = 1,
	  V = function (e) {
	    if (T.has(e)) return T.get(e);
	    for (; x.has(k);) k++;
	    var t = k++;
	    return T.set(e, t), x.set(t, e), t;
	  },
	  B = function (e) {
	    return x.get(e);
	  },
	  z = function (e, t) {
	    t >= k && (k = t + 1), T.set(e, t), x.set(t, e);
	  },
	  M = "style[" + N + '][data-styled-version="5.3.11"]',
	  G = new RegExp("^" + N + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
	  L = function (e, t, n) {
	    for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++) (r = o[s]) && e.registerName(t, r);
	  },
	  F = function (e, t) {
	    for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, s = n.length; o < s; o++) {
	      var i = n[o].trim();
	      if (i) {
	        var a = i.match(G);
	        if (a) {
	          var c = 0 | parseInt(a[1], 10),
	            u = a[2];
	          0 !== c && (z(u, c), L(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
	        } else r.push(i);
	      }
	    }
	  },
	  Y = function () {
	    return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
	  },
	  q = function (e) {
	    var t = document.head,
	      n = e || t,
	      r = document.createElement("style"),
	      o = function (e) {
	        for (var t = e.childNodes, n = t.length; n >= 0; n--) {
	          var r = t[n];
	          if (r && 1 === r.nodeType && r.hasAttribute(N)) return r;
	        }
	      }(n),
	      s = void 0 !== o ? o.nextSibling : null;
	    r.setAttribute(N, "active"), r.setAttribute("data-styled-version", "5.3.11");
	    var i = Y();
	    return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
	  },
	  H = function () {
	    function e(e) {
	      var t = this.element = q(e);
	      t.appendChild(document.createTextNode("")), this.sheet = function (e) {
	        if (e.sheet) return e.sheet;
	        for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
	          var o = t[n];
	          if (o.ownerNode === e) return o;
	        }
	        D(17);
	      }(t), this.length = 0;
	    }
	    var t = e.prototype;
	    return t.insertRule = function (e, t) {
	      try {
	        return this.sheet.insertRule(t, e), this.length++, !0;
	      } catch (e) {
	        return !1;
	      }
	    }, t.deleteRule = function (e) {
	      this.sheet.deleteRule(e), this.length--;
	    }, t.getRule = function (e) {
	      var t = this.sheet.cssRules[e];
	      return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
	    }, e;
	  }(),
	  $ = function () {
	    function e(e) {
	      var t = this.element = q(e);
	      this.nodes = t.childNodes, this.length = 0;
	    }
	    var t = e.prototype;
	    return t.insertRule = function (e, t) {
	      if (e <= this.length && e >= 0) {
	        var n = document.createTextNode(t),
	          r = this.nodes[e];
	        return this.element.insertBefore(n, r || null), this.length++, !0;
	      }
	      return !1;
	    }, t.deleteRule = function (e) {
	      this.element.removeChild(this.nodes[e]), this.length--;
	    }, t.getRule = function (e) {
	      return e < this.length ? this.nodes[e].textContent : "";
	    }, e;
	  }(),
	  W = function () {
	    function e(e) {
	      this.rules = [], this.length = 0;
	    }
	    var t = e.prototype;
	    return t.insertRule = function (e, t) {
	      return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
	    }, t.deleteRule = function (e) {
	      this.rules.splice(e, 1), this.length--;
	    }, t.getRule = function (e) {
	      return e < this.length ? this.rules[e] : "";
	    }, e;
	  }(),
	  U = C,
	  J = {
	    isServer: !C,
	    useCSSOMInjection: !I
	  },
	  X = function () {
	    function e(e, t, n) {
	      void 0 === e && (e = w$2), void 0 === t && (t = {}), this.options = y({}, J, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && C && U && (U = !1, function (e) {
	        for (var t = document.querySelectorAll(M), n = 0, r = t.length; n < r; n++) {
	          var o = t[n];
	          o && "active" !== o.getAttribute(N) && (F(e, o), o.parentNode && o.parentNode.removeChild(o));
	        }
	      }(this));
	    }
	    e.registerId = function (e) {
	      return V(e);
	    };
	    var t = e.prototype;
	    return t.reconstructWithOptions = function (t, n) {
	      return void 0 === n && (n = !0), new e(y({}, this.options, {}, t), this.gs, n && this.names || void 0);
	    }, t.allocateGSInstance = function (e) {
	      return this.gs[e] = (this.gs[e] || 0) + 1;
	    }, t.getTag = function () {
	      return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new W(o) : r ? new H(o) : new $(o), new j$1(e)));
	      var e, t, n, r, o;
	    }, t.hasNameForId = function (e, t) {
	      return this.names.has(e) && this.names.get(e).has(t);
	    }, t.registerName = function (e, t) {
	      if (V(e), this.names.has(e)) this.names.get(e).add(t);else {
	        var n = new Set();
	        n.add(t), this.names.set(e, n);
	      }
	    }, t.insertRules = function (e, t, n) {
	      this.registerName(e, t), this.getTag().insertRules(V(e), n);
	    }, t.clearNames = function (e) {
	      this.names.has(e) && this.names.get(e).clear();
	    }, t.clearRules = function (e) {
	      this.getTag().clearGroup(V(e)), this.clearNames(e);
	    }, t.clearTag = function () {
	      this.tag = void 0;
	    }, t.toString = function () {
	      return function (e) {
	        for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
	          var s = B(o);
	          if (void 0 !== s) {
	            var i = e.names.get(s),
	              a = t.getGroup(o);
	            if (i && a && i.size) {
	              var c = N + ".g" + o + '[id="' + s + '"]',
	                u = "";
	              void 0 !== i && i.forEach(function (e) {
	                e.length > 0 && (u += e + ",");
	              }), r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n';
	            }
	          }
	        }
	        return r;
	      }(this);
	    }, e;
	  }(),
	  Z = /(a)(d)/gi,
	  K = function (e) {
	    return String.fromCharCode(e + (e > 25 ? 39 : 97));
	  };
	function Q(e) {
	  var t,
	    n = "";
	  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = K(t % 52) + n;
	  return (K(t % 52) + n).replace(Z, "$1-$2");
	}
	var ee = function (e, t) {
	    for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
	    return e;
	  },
	  te = function (e) {
	    return ee(5381, e);
	  };
	function ne(e) {
	  for (var t = 0; t < e.length; t += 1) {
	    var n = e[t];
	    if (E(n) && !_(n)) return !1;
	  }
	  return !0;
	}
	var re = te("5.3.11"),
	  oe = function () {
	    function e(e, t, n) {
	      this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && ne(e), this.componentId = t, this.baseHash = ee(re, t), this.baseStyle = n, X.registerId(t);
	    }
	    return e.prototype.generateAndInjectStyles = function (e, t, n) {
	      var r = this.componentId,
	        o = [];
	      if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) {
	        if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);else {
	          var s = _e(this.rules, e, t, n).join(""),
	            i = Q(ee(this.baseHash, s) >>> 0);
	          if (!t.hasNameForId(r, i)) {
	            var a = n(s, "." + i, void 0, r);
	            t.insertRules(r, i, a);
	          }
	          o.push(i), this.staticRulesId = i;
	        }
	      } else {
	        for (var c = this.rules.length, u = ee(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
	          var h = this.rules[d];
	          if ("string" == typeof h) l += h;else if (h) {
	            var p = _e(h, e, t, n),
	              f = Array.isArray(p) ? p.join("") : p;
	            u = ee(u, f + d), l += f;
	          }
	        }
	        if (l) {
	          var m = Q(u >>> 0);
	          if (!t.hasNameForId(r, m)) {
	            var y = n(l, "." + m, void 0, r);
	            t.insertRules(r, m, y);
	          }
	          o.push(m);
	        }
	      }
	      return o.join(" ");
	    }, e;
	  }(),
	  se = /^\s*\/\/.*$/gm,
	  ie = [":", "[", ".", "#"];
	function ae(e) {
	  var t,
	    n,
	    r,
	    o,
	    s = void 0 === e ? w$2 : e,
	    i = s.options,
	    a = void 0 === i ? w$2 : i,
	    c = s.plugins,
	    u = void 0 === c ? S : c,
	    l = new stylis_min(a),
	    d = [],
	    p = function (e) {
	      function t(t) {
	        if (t) try {
	          e(t + "}");
	        } catch (e) {}
	      }
	      return function (n, r, o, s, i, a, c, u, l, d) {
	        switch (n) {
	          case 1:
	            if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
	            break;
	          case 2:
	            if (0 === u) return r + "/*|*/";
	            break;
	          case 3:
	            switch (u) {
	              case 102:
	              case 112:
	                return e(o[0] + r), "";
	              default:
	                return r + (0 === d ? "/*|*/" : "");
	            }
	          case -2:
	            r.split("/*|*/}").forEach(t);
	        }
	      };
	    }(function (e) {
	      d.push(e);
	    }),
	    f = function (e, r, s) {
	      return 0 === r && -1 !== ie.indexOf(s[n.length]) || s.match(o) ? e : "." + t;
	    };
	  function m(e, s, i, a) {
	    void 0 === a && (a = "&");
	    var c = e.replace(se, ""),
	      u = s && i ? i + " " + s + " { " + c + " }" : c;
	    return t = a, n = s, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(i || !s ? "" : s, u);
	  }
	  return l.use([].concat(u, [function (e, t, o) {
	    2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f));
	  }, p, function (e) {
	    if (-2 === e) {
	      var t = d;
	      return d = [], t;
	    }
	  }])), m.hash = u.length ? u.reduce(function (e, t) {
	    return t.name || D(15), ee(e, t.name);
	  }, 5381).toString() : "", m;
	}
	var ce = React.createContext(),
	  ue = ce.Consumer,
	  le = React.createContext(),
	  de = (le.Consumer, new X()),
	  he = ae();
	function pe() {
	  return reactExports.useContext(ce) || de;
	}
	function fe() {
	  return reactExports.useContext(le) || he;
	}
	function me(e) {
	  var t = reactExports.useState(e.stylisPlugins),
	    n = t[0],
	    s = t[1],
	    c = pe(),
	    u = reactExports.useMemo(function () {
	      var t = c;
	      return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
	        target: e.target
	      }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
	        useCSSOMInjection: !1
	      })), t;
	    }, [e.disableCSSOMInjection, e.sheet, e.target]),
	    l = reactExports.useMemo(function () {
	      return ae({
	        options: {
	          prefix: !e.disableVendorPrefixes
	        },
	        plugins: n
	      });
	    }, [e.disableVendorPrefixes, n]);
	  return reactExports.useEffect(function () {
	    d$1(n, e.stylisPlugins) || s(e.stylisPlugins);
	  }, [e.stylisPlugins]), React.createElement(ce.Provider, {
	    value: u
	  }, React.createElement(le.Provider, {
	    value: l
	  }, e.children));
	}
	var ye = function () {
	    function e(e, t) {
	      var n = this;
	      this.inject = function (e, t) {
	        void 0 === t && (t = he);
	        var r = n.name + t.hash;
	        e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
	      }, this.toString = function () {
	        return D(12, String(n.name));
	      }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t;
	    }
	    return e.prototype.getName = function (e) {
	      return void 0 === e && (e = he), this.name + e.hash;
	    }, e;
	  }(),
	  ve = /([A-Z])/,
	  ge = /([A-Z])/g,
	  Se = /^ms-/,
	  we = function (e) {
	    return "-" + e.toLowerCase();
	  };
	function Ee(e) {
	  return ve.test(e) ? e.replace(ge, we).replace(Se, "-ms-") : e;
	}
	var be = function (e) {
	  return null == e || !1 === e || "" === e;
	};
	function _e(e, n, r, o) {
	  if (Array.isArray(e)) {
	    for (var s, i = [], a = 0, c = e.length; a < c; a += 1) "" !== (s = _e(e[a], n, r, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
	    return i;
	  }
	  if (be(e)) return "";
	  if (_(e)) return "." + e.styledComponentId;
	  if (E(e)) {
	    if ("function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !n) return e;
	    var u = e(n);
	    return _e(u, n, r, o);
	  }
	  var l;
	  return e instanceof ye ? r ? (e.inject(r, o), e.getName(o)) : e : g(e) ? function e(t, n) {
	    var r,
	      o,
	      s = [];
	    for (var i in t) t.hasOwnProperty(i) && !be(t[i]) && (Array.isArray(t[i]) && t[i].isCss || E(t[i]) ? s.push(Ee(i) + ":", t[i], ";") : g(t[i]) ? s.push.apply(s, e(t[i], i)) : s.push(Ee(i) + ": " + (r = i, null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in unitlessKeys$1 || r.startsWith("--") ? String(o).trim() : o + "px") + ";"));
	    return n ? [n + " {"].concat(s, ["}"]) : s;
	  }(e) : e.toString();
	}
	var Ne = function (e) {
	  return Array.isArray(e) && (e.isCss = !0), e;
	};
	function Ae(e) {
	  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
	  return E(e) || g(e) ? Ne(_e(v(S, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : Ne(_e(v(e, n)));
	}
	var Oe = function (e, t, n) {
	    return void 0 === n && (n = w$2), e.theme !== n.theme && e.theme || t || n.theme;
	  },
	  Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
	  De = /(^-|-$)/g;
	function je(e) {
	  return e.replace(Re, "-").replace(De, "");
	}
	var Te = function (e) {
	  return Q(te(e) >>> 0);
	};
	function xe(e) {
	  return "string" == typeof e && ("production" === 'production' );
	}
	var ke = function (e) {
	    return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e);
	  },
	  Ve = function (e) {
	    return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
	  };
	function Be(e, t, n) {
	  var r = e[n];
	  ke(t) && ke(r) ? ze(r, t) : e[n] = t;
	}
	function ze(e) {
	  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
	  for (var o = 0, s = n; o < s.length; o++) {
	    var i = s[o];
	    if (ke(i)) for (var a in i) Ve(a) && Be(e, i[a], a);
	  }
	  return e;
	}
	var Me = React.createContext(),
	  Ge = Me.Consumer;
	function Le(e) {
	  var t = reactExports.useContext(Me),
	    n = reactExports.useMemo(function () {
	      return function (e, t) {
	        if (!e) return D(14);
	        if (E(e)) {
	          var n = e(t);
	          return n ;
	        }
	        return Array.isArray(e) || "object" != typeof e ? D(8) : t ? y({}, t, {}, e) : e;
	      }(e.theme, t);
	    }, [e.theme, t]);
	  return e.children ? React.createElement(Me.Provider, {
	    value: n
	  }, e.children) : null;
	}
	var Fe = {};
	function Ye(e, t, n) {
	  var o = _(e),
	    i = !xe(e),
	    a = t.attrs,
	    c = void 0 === a ? S : a,
	    l = t.componentId,
	    d = void 0 === l ? function (e, t) {
	      var n = "string" != typeof e ? "sc" : je(e);
	      Fe[n] = (Fe[n] || 0) + 1;
	      var r = n + "-" + Te("5.3.11" + n + Fe[n]);
	      return t ? t + "-" + r : r;
	    }(t.displayName, t.parentComponentId) : l,
	    h = t.displayName,
	    p = void 0 === h ? function (e) {
	      return xe(e) ? "styled." + e : "Styled(" + b(e) + ")";
	    }(e) : h,
	    v = t.displayName && t.componentId ? je(t.displayName) + "-" + t.componentId : t.componentId || d,
	    g = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c,
	    N = t.shouldForwardProp;
	  o && e.shouldForwardProp && (N = t.shouldForwardProp ? function (n, r, o) {
	    return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o);
	  } : e.shouldForwardProp);
	  var A,
	    C = new oe(n, v, o ? e.componentStyle : void 0),
	    I = C.isStatic && 0 === c.length,
	    P = function (e, t) {
	      return function (e, t, n, r) {
	        var o = e.attrs,
	          i = e.componentStyle,
	          a = e.defaultProps,
	          c = e.foldedComponentIds,
	          l = e.shouldForwardProp,
	          d = e.styledComponentId,
	          h = e.target,
	          p = function (e, t, n) {
	            void 0 === e && (e = w$2);
	            var r = y({}, t, {
	                theme: e
	              }),
	              o = {};
	            return n.forEach(function (e) {
	              var t,
	                n,
	                s,
	                i = e;
	              for (t in E(i) && (i = i(r)), i) r[t] = o[t] = "className" === t ? (n = o[t], s = i[t], n && s ? n + " " + s : n || s) : i[t];
	            }), [r, o];
	          }(Oe(t, reactExports.useContext(Me), a) || w$2, t, o),
	          m = p[0],
	          v = p[1],
	          g = function (e, t, n, r) {
	            var o = pe(),
	              s = fe(),
	              i = t ? e.generateAndInjectStyles(w$2, o, s) : e.generateAndInjectStyles(n, o, s);
	            return i;
	          }(i, r, m),
	          S = n,
	          b = v.$as || t.$as || v.as || t.as || h,
	          _ = xe(b),
	          N = v !== t ? y({}, t, {}, v) : t,
	          A = {};
	        for (var C in N) "$" !== C[0] && "as" !== C && ("forwardedAs" === C ? A.as = N[C] : (l ? l(C, isPropValid, b) : !_ || isPropValid(C)) && (A[C] = N[C]));
	        return t.style && v.style !== t.style && (A.style = y({}, t.style, {}, v.style)), A.className = Array.prototype.concat(c, d, g !== d ? g : null, t.className, v.className).filter(Boolean).join(" "), A.ref = S, reactExports.createElement(b, A);
	      }(A, e, t, I);
	    };
	  return P.displayName = p, (A = React.forwardRef(P)).attrs = g, A.componentStyle = C, A.displayName = p, A.shouldForwardProp = N, A.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : S, A.styledComponentId = v, A.target = o ? e.target : e, A.withComponent = function (e) {
	    var r = t.componentId,
	      o = function (e, t) {
	        if (null == e) return {};
	        var n,
	          r,
	          o = {},
	          s = Object.keys(e);
	        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
	        return o;
	      }(t, ["componentId"]),
	      s = r && r + "-" + (xe(e) ? e : je(b(e)));
	    return Ye(e, y({}, o, {
	      attrs: g,
	      componentId: s
	    }), n);
	  }, Object.defineProperty(A, "defaultProps", {
	    get: function () {
	      return this._foldedDefaultProps;
	    },
	    set: function (t) {
	      this._foldedDefaultProps = o ? ze({}, e.defaultProps, t) : t;
	    }
	  }), Object.defineProperty(A, "toString", {
	    value: function () {
	      return "." + A.styledComponentId;
	    }
	  }), i && hoistNonReactStatics$1(A, e, {
	    attrs: !0,
	    componentStyle: !0,
	    displayName: !0,
	    foldedComponentIds: !0,
	    shouldForwardProp: !0,
	    styledComponentId: !0,
	    target: !0,
	    withComponent: !0
	  }), A;
	}
	var qe = function (e) {
	  return function e(t, r, o) {
	    if (void 0 === o && (o = w$2), !reactIsExports.isValidElementType(r)) return D(1, String(r));
	    var s = function () {
	      return t(r, o, Ae.apply(void 0, arguments));
	    };
	    return s.withConfig = function (n) {
	      return e(t, r, y({}, o, {}, n));
	    }, s.attrs = function (n) {
	      return e(t, r, y({}, o, {
	        attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)
	      }));
	    }, s;
	  }(Ye, e);
	};
	["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function (e) {
	  qe[e] = qe(e);
	});
	var He = function () {
	  function e(e, t) {
	    this.rules = e, this.componentId = t, this.isStatic = ne(e), X.registerId(this.componentId + 1);
	  }
	  var t = e.prototype;
	  return t.createStyles = function (e, t, n, r) {
	    var o = r(_e(this.rules, t, n, r).join(""), ""),
	      s = this.componentId + e;
	    n.insertRules(s, s, o);
	  }, t.removeStyles = function (e, t) {
	    t.clearRules(this.componentId + e);
	  }, t.renderStyles = function (e, t, n, r) {
	    e > 2 && X.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
	  }, e;
	}();
	function $e(e) {
	  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
	  var i = Ae.apply(void 0, [e].concat(n)),
	    a = "sc-global-" + Te(JSON.stringify(i)),
	    u = new He(i, a);
	  function d(e) {
	    var t = pe(),
	      n = fe(),
	      o = reactExports.useContext(Me),
	      d = reactExports.useRef(t.allocateGSInstance(a)).current;
	    return t.server && h(d, e, t, o, n), reactExports.useLayoutEffect(function () {
	      if (!t.server) return h(d, e, t, o, n), function () {
	        return u.removeStyles(d, t);
	      };
	    }, [d, e, t, o, n]), null;
	  }
	  function h(e, t, n, r, o) {
	    if (u.isStatic) u.renderStyles(e, P, n, o);else {
	      var s = y({}, t, {
	        theme: Oe(t, r, d.defaultProps)
	      });
	      u.renderStyles(e, s, n, o);
	    }
	  }
	  return React.memo(d);
	}
	function We(e) {
	  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
	  var o = Ae.apply(void 0, [e].concat(n)).join(""),
	    s = Te(o);
	  return new ye(s, o);
	}
	var Ue = function () {
	    function e() {
	      var e = this;
	      this._emitSheetCSS = function () {
	        var t = e.instance.toString();
	        if (!t) return "";
	        var n = Y();
	        return "<style " + [n && 'nonce="' + n + '"', N + '="true"', 'data-styled-version="5.3.11"'].filter(Boolean).join(" ") + ">" + t + "</style>";
	      }, this.getStyleTags = function () {
	        return e.sealed ? D(2) : e._emitSheetCSS();
	      }, this.getStyleElement = function () {
	        var t;
	        if (e.sealed) return D(2);
	        var n = ((t = {})[N] = "", t["data-styled-version"] = "5.3.11", t.dangerouslySetInnerHTML = {
	            __html: e.instance.toString()
	          }, t),
	          o = Y();
	        return o && (n.nonce = o), [React.createElement("style", y({}, n, {
	          key: "sc-0-0"
	        }))];
	      }, this.seal = function () {
	        e.sealed = !0;
	      }, this.instance = new X({
	        isServer: !0
	      }), this.sealed = !1;
	    }
	    var t = e.prototype;
	    return t.collectStyles = function (e) {
	      return this.sealed ? D(2) : React.createElement(me, {
	        sheet: this.instance
	      }, e);
	    }, t.interleaveWithNodeStream = function (e) {
	      return D(3);
	    }, e;
	  }(),
	  Je = function (e) {
	    var t = React.forwardRef(function (t, n) {
	      var o = reactExports.useContext(Me),
	        i = e.defaultProps,
	        a = Oe(t, o, i);
	      return React.createElement(e, y({}, t, {
	        theme: a,
	        ref: n
	      }));
	    });
	    return hoistNonReactStatics$1(t, e), t.displayName = "WithTheme(" + b(e) + ")", t;
	  },
	  Xe = function () {
	    return reactExports.useContext(Me);
	  },
	  Ze = {
	    StyleSheet: X,
	    masterSheet: de
	  };

	var styledComponents_browser_esm = /*#__PURE__*/Object.freeze({
		__proto__: null,
		ServerStyleSheet: Ue,
		StyleSheetConsumer: ue,
		StyleSheetContext: ce,
		StyleSheetManager: me,
		ThemeConsumer: Ge,
		ThemeContext: Me,
		ThemeProvider: Le,
		__PRIVATE__: Ze,
		createGlobalStyle: $e,
		css: Ae,
		default: qe,
		isStyledComponent: _,
		keyframes: We,
		useTheme: Xe,
		version: A,
		withTheme: Je
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(styledComponents_browser_esm);

	(function (exports) {

		var __makeTemplateObject = commonjsGlobal && commonjsGlobal.__makeTemplateObject || function (cooked, raw) {
		  if (Object.defineProperty) {
		    Object.defineProperty(cooked, "raw", {
		      value: raw
		    });
		  } else {
		    cooked.raw = raw;
		  }
		  return cooked;
		};
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.Reboot = exports.reboot = exports.defaultRebootTheme = void 0;
		var styled_components_1 = require$$0;
		exports.defaultRebootTheme = {
		  black: '#000',
		  bodyBg: '#fff',
		  bodyColor: '#212529',
		  dtFontWeight: 700,
		  enablePointerCursorForButtons: true,
		  fontFamilyBase: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		  fontFamilyMonospace: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		  fontSizeBase: '1rem',
		  fontWeightBase: 400,
		  fontWeightBolder: 'bolder',
		  headingsMarginBottom: '0.5rem',
		  labelMarginBottom: '0.5rem',
		  lineHeightBase: 1.5,
		  linkColor: '#007bff',
		  linkDecoration: 'none',
		  linkHoverColor: '#0056b3',
		  linkHoverDecoration: 'underline',
		  paragraphMarginBottom: '1rem',
		  tableCaptionColor: '#6c757d',
		  tableCellPadding: '0.75rem'
		};
		exports.reboot = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  html {\n    font-family: sans-serif;\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n    -webkit-tap-highlight-color: rgba(", ", 0);\n  }\n\n  article,\n  aside,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  main,\n  nav,\n  section {\n    display: block;\n  }\n\n  body {\n    margin: 0;\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    color: ", ";\n    text-align: left;\n    background-color: ", ";\n  }\n\n  [tabindex='-1']:focus {\n    outline: 0 !important;\n  }\n\n  hr {\n    box-sizing: content-box;\n    height: 0;\n    overflow: visible;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 0;\n    margin-bottom: ", ";\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: ", ";\n  }\n\n  abbr[title],\n  abbr[data-original-title] {\n    text-decoration: underline;\n    text-decoration: underline dotted;\n    cursor: help;\n    border-bottom: 0;\n    text-decoration-skip-ink: none;\n  }\n\n  address {\n    margin-bottom: 1rem;\n    font-style: normal;\n    line-height: inherit;\n  }\n\n  ol,\n  ul,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  ol ol,\n  ul ul,\n  ol ul,\n  ul ol {\n    margin-bottom: 0;\n  }\n\n  dt {\n    font-weight: ", ";\n  }\n\n  dd {\n    margin-bottom: 0.5rem;\n    margin-left: 0;\n  }\n\n  blockquote {\n    margin: 0 0 1rem;\n  }\n\n  b,\n  strong {\n    font-weight: ", ";\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub,\n  sup {\n    position: relative;\n    font-size: 75%;\n    line-height: 0;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  a {\n    color: ", ";\n    text-decoration: ", ";\n    background-color: transparent;\n\n    &:hover {\n      color: ", ";\n      text-decoration: ", ";\n    }\n  }\n\n  a:not([href]):not([tabindex]) {\n    color: inherit;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      color: inherit;\n      text-decoration: none;\n    }\n\n    &:focus {\n      outline: 0;\n    }\n  }\n\n  pre,\n  code,\n  kbd,\n  samp {\n    font-family: ", ";\n    font-size: 1em;\n  }\n\n  pre {\n    margin-top: 0;\n    margin-bottom: 1rem;\n    overflow: auto;\n  }\n\n  figure {\n    margin: 0 0 1rem;\n  }\n\n  img {\n    vertical-align: middle;\n    border-style: none;\n  }\n\n  svg {\n    overflow: hidden;\n    vertical-align: middle;\n  }\n\n  table {\n    border-collapse: collapse;\n  }\n\n  caption {\n    padding-top: ", ";\n    padding-bottom: ", ";\n    color: ", ";\n    text-align: left;\n    caption-side: bottom;\n  }\n\n  th {\n    text-align: inherit;\n  }\n\n  label {\n    display: inline-block;\n    margin-bottom: ", ";\n  }\n\n  button {\n    border-radius: 0;\n  }\n\n  button:focus {\n    outline: 1px dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n\n  input,\n  button,\n  select,\n  optgroup,\n  textarea {\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n  }\n\n  button,\n  input {\n    overflow: visible;\n  }\n\n  button,\n  select {\n    text-transform: none;\n  }\n\n  select {\n    word-wrap: normal;\n  }\n\n  button,\n  [type='button'],\n  [type='reset'],\n  [type='submit'] {\n    -webkit-appearance: button;\n  }\n\n  /* stylelint-disable-next-line value-keyword-case */\n  ", "\n\n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    padding: 0;\n    border-style: none;\n  }\n\n  input[type='radio'],\n  input[type='checkbox'] {\n    box-sizing: border-box;\n    padding: 0;\n  }\n\n  input[type='date'],\n  input[type='time'],\n  input[type='datetime-local'],\n  input[type='month'] {\n    -webkit-appearance: listbox;\n  }\n\n  textarea {\n    overflow: auto;\n    resize: vertical;\n  }\n\n  fieldset {\n    min-width: 0;\n    padding: 0;\n    margin: 0;\n    border: 0;\n  }\n\n  legend {\n    display: block;\n    width: 100%;\n    max-width: 100%;\n    padding: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1.5rem;\n    line-height: inherit;\n    color: inherit;\n    white-space: normal;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  [type='number']::-webkit-inner-spin-button,\n  [type='number']::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type='search'] {\n    outline-offset: -2px;\n    -webkit-appearance: none;\n  }\n\n  [type='search']::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-file-upload-button {\n    font: inherit;\n    -webkit-appearance: button;\n  }\n\n  output {\n    display: inline-block;\n  }\n\n  summary {\n    display: list-item;\n    cursor: pointer;\n  }\n\n  template {\n    display: none;\n  }\n\n  [hidden] {\n    display: none !important;\n  }\n"], ["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  html {\n    font-family: sans-serif;\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n    -webkit-tap-highlight-color: rgba(", ", 0);\n  }\n\n  article,\n  aside,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  main,\n  nav,\n  section {\n    display: block;\n  }\n\n  body {\n    margin: 0;\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    color: ", ";\n    text-align: left;\n    background-color: ", ";\n  }\n\n  [tabindex='-1']:focus {\n    outline: 0 !important;\n  }\n\n  hr {\n    box-sizing: content-box;\n    height: 0;\n    overflow: visible;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 0;\n    margin-bottom: ", ";\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: ", ";\n  }\n\n  abbr[title],\n  abbr[data-original-title] {\n    text-decoration: underline;\n    text-decoration: underline dotted;\n    cursor: help;\n    border-bottom: 0;\n    text-decoration-skip-ink: none;\n  }\n\n  address {\n    margin-bottom: 1rem;\n    font-style: normal;\n    line-height: inherit;\n  }\n\n  ol,\n  ul,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  ol ol,\n  ul ul,\n  ol ul,\n  ul ol {\n    margin-bottom: 0;\n  }\n\n  dt {\n    font-weight: ", ";\n  }\n\n  dd {\n    margin-bottom: 0.5rem;\n    margin-left: 0;\n  }\n\n  blockquote {\n    margin: 0 0 1rem;\n  }\n\n  b,\n  strong {\n    font-weight: ", ";\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub,\n  sup {\n    position: relative;\n    font-size: 75%;\n    line-height: 0;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  a {\n    color: ", ";\n    text-decoration: ", ";\n    background-color: transparent;\n\n    &:hover {\n      color: ", ";\n      text-decoration: ", ";\n    }\n  }\n\n  a:not([href]):not([tabindex]) {\n    color: inherit;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      color: inherit;\n      text-decoration: none;\n    }\n\n    &:focus {\n      outline: 0;\n    }\n  }\n\n  pre,\n  code,\n  kbd,\n  samp {\n    font-family: ", ";\n    font-size: 1em;\n  }\n\n  pre {\n    margin-top: 0;\n    margin-bottom: 1rem;\n    overflow: auto;\n  }\n\n  figure {\n    margin: 0 0 1rem;\n  }\n\n  img {\n    vertical-align: middle;\n    border-style: none;\n  }\n\n  svg {\n    overflow: hidden;\n    vertical-align: middle;\n  }\n\n  table {\n    border-collapse: collapse;\n  }\n\n  caption {\n    padding-top: ", ";\n    padding-bottom: ", ";\n    color: ", ";\n    text-align: left;\n    caption-side: bottom;\n  }\n\n  th {\n    text-align: inherit;\n  }\n\n  label {\n    display: inline-block;\n    margin-bottom: ", ";\n  }\n\n  button {\n    border-radius: 0;\n  }\n\n  button:focus {\n    outline: 1px dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n\n  input,\n  button,\n  select,\n  optgroup,\n  textarea {\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n  }\n\n  button,\n  input {\n    overflow: visible;\n  }\n\n  button,\n  select {\n    text-transform: none;\n  }\n\n  select {\n    word-wrap: normal;\n  }\n\n  button,\n  [type='button'],\n  [type='reset'],\n  [type='submit'] {\n    -webkit-appearance: button;\n  }\n\n  /* stylelint-disable-next-line value-keyword-case */\n  ", "\n\n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    padding: 0;\n    border-style: none;\n  }\n\n  input[type='radio'],\n  input[type='checkbox'] {\n    box-sizing: border-box;\n    padding: 0;\n  }\n\n  input[type='date'],\n  input[type='time'],\n  input[type='datetime-local'],\n  input[type='month'] {\n    -webkit-appearance: listbox;\n  }\n\n  textarea {\n    overflow: auto;\n    resize: vertical;\n  }\n\n  fieldset {\n    min-width: 0;\n    padding: 0;\n    margin: 0;\n    border: 0;\n  }\n\n  legend {\n    display: block;\n    width: 100%;\n    max-width: 100%;\n    padding: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1.5rem;\n    line-height: inherit;\n    color: inherit;\n    white-space: normal;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  [type='number']::-webkit-inner-spin-button,\n  [type='number']::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type='search'] {\n    outline-offset: -2px;\n    -webkit-appearance: none;\n  }\n\n  [type='search']::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-file-upload-button {\n    font: inherit;\n    -webkit-appearance: button;\n  }\n\n  output {\n    display: inline-block;\n  }\n\n  summary {\n    display: list-item;\n    cursor: pointer;\n  }\n\n  template {\n    display: none;\n  }\n\n  [hidden] {\n    display: none !important;\n  }\n"])), function (props) {
		  return props.theme.black;
		}, function (props) {
		  return props.theme.fontFamilyBase;
		}, function (props) {
		  return props.theme.fontSizeBase;
		}, function (props) {
		  return props.theme.fontWeightBase;
		}, function (props) {
		  return props.theme.lineHeightBase;
		}, function (props) {
		  return props.theme.bodyColor;
		}, function (props) {
		  return props.theme.bodyBg;
		}, function (props) {
		  return props.theme.headingsMarginBottom;
		}, function (props) {
		  return props.theme.paragraphMarginBottom;
		}, function (props) {
		  return props.theme.dtFontWeight;
		}, function (props) {
		  return props.theme.fontWeightBolder;
		}, function (props) {
		  return props.theme.linkColor;
		}, function (props) {
		  return props.theme.linkDecoration;
		}, function (props) {
		  return props.theme.linkHoverColor;
		}, function (props) {
		  return props.theme.linkHoverDecoration;
		}, function (props) {
		  return props.theme.fontFamilyMonospace;
		}, function (props) {
		  return props.theme.tableCellPadding;
		}, function (props) {
		  return props.theme.tableCellPadding;
		}, function (props) {
		  return props.theme.tableCaptionColor;
		}, function (props) {
		  return props.theme.labelMarginBottom;
		}, function (props) {
		  return props.theme.enablePointerCursorForButtons && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      button,\n      [type='button'],\n      [type='reset'],\n      [type='submit'] {\n        &:not(:disabled) {\n          cursor: pointer;\n        }\n      }\n    "], ["\n      button,\n      [type='button'],\n      [type='reset'],\n      [type='submit'] {\n        &:not(:disabled) {\n          cursor: pointer;\n        }\n      }\n    "])));
		});
		exports.Reboot = styled_components_1.createGlobalStyle(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  /* stylelint-disable-next-line value-keyword-case */\n  ", "\n"], ["\n  /* stylelint-disable-next-line value-keyword-case */\n  ", "\n"])), exports.reboot);
		exports.Reboot.defaultProps = {
		  theme: exports.defaultRebootTheme
		};
		exports.default = exports.reboot;
		var templateObject_1, templateObject_2, templateObject_3; 
	} (styledReboot));

	const GlobalStyle = $e`
${styledReboot.reboot}
html, body, .viewport {
  width: 100%;
  height: 100%;
}
body{
  overflow: hidden;
  min-width:300px;
  overflow-x:auto;
  color: #f9f9fa;
  background: #33313f;
  font-weight: 100;
}
#root {
  height: 100%;
}
`;
	const selectStyle = ({
	  background = '#3a3747',
	  menuBackground = '#3a3747',
	  primaryColor = '#6e66a6',
	  borderColor = '#6e66a6',
	  controlHeight = '35px',
	  placeHolderColor = '#b3b2be',
	  singleStyles = {},
	  optionStyles = {},
	  containerStyles = {},
	  menuStyles = {},
	  valueContainerStyles = {}
	} = {}) => ({
	  container: defaults => ({
	    ...defaults,
	    ...containerStyles
	  }),
	  control: (defaults, {
	    isFocused
	  }) => ({
	    ...defaults,
	    boxShadow: isFocused ? `0 0 0 1px ${borderColor}` : 'none',
	    borderColor: isFocused ? borderColor : 'transparent',
	    background,
	    height: controlHeight,
	    minHeight: controlHeight,
	    ':hover': {
	      ...defaults[':hover'],
	      boxShadow: isFocused ? `0 0 0 1px ${borderColor}` : 'none',
	      borderColor: borderColor
	    }
	  }),
	  placeholder: defaults => ({
	    ...defaults,
	    color: placeHolderColor
	  }),
	  indicatorSeparator: () => ({
	    display: 'none'
	  }),
	  singleValue: defaults => ({
	    ...defaults,
	    color: '#f9f9fa',
	    ...singleStyles
	  }),
	  dropdownIndicator: defaults => ({
	    ...defaults,
	    color: '#6e66a6 !important',
	    padding: '5px'
	  }),
	  menu: defaults => ({
	    ...defaults,
	    background: menuBackground,
	    ...menuStyles
	  }),
	  valueContainer: defaults => ({
	    ...defaults,
	    ...valueContainerStyles
	  }),
	  option: (defaults, {
	    isSelected
	  }) => ({
	    ...defaults,
	    color: '#f9f9fa',
	    background: isSelected ? primaryColor : menuBackground,
	    ':hover': {
	      ...defaults[':hover'],
	      background: primaryColor
	    },
	    ...optionStyles
	  }),
	  input: defaults => ({
	    ...defaults,
	    color: '#f9f9fa'
	  }),
	  indicatorsContainer: defaults => ({
	    ...defaults,
	    padding: 0,
	    '> div:nth-of-type(1)': {
	      padding: '0 !important'
	    }
	  })
	});
	const Outer = qe.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
	const Inner = qe.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #403d4f;
  background: #2d2b37;
`;
	const Title = qe.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #403d4f;
`;
	const Rows = qe.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0.5rem 1rem;
  font-size: 0.9rem;
  color: #8a879a;
`;
	const Row = qe.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
	const Label$1 = qe.span`
  align-self: center;
  width: 50%;
  min-width: 50%;
  margin: 0;
`;
	const FormSelect = qe.div`
  width: 100%;
`;
	const InputOuter = qe.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
	const Input$2 = qe.input`
  border: 1px solid #3a3747;
  outline: none;
  width: 100%;
  background-color: #3a3747;
  color: #f9f9fa;
  height: 35px;
  border-radius: 0.2rem;
  padding-left: 0.6rem;
  font-weight: 300 !important;
  :hover {
    border-color: #6e66a6;
  }
`;
	const ButtonOuter = qe.div`
  border-top: 1px solid #403d4f;
  padding: 1rem;
`;
	const Button$1 = qe.div`
  display: flex;
  justify-content: center;
  height: 2rem;
  align-items: center;
  padding: 0.2rem 1rem;
  cursor: pointer;
  background: #6e66a6;
  color: #f9f9fa;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  width: 100%;
  :hover {
    background: #585285;
  }
`;

	function notificationReducer(state = {}, action) {
	  switch (action.type) {
	    case 'NOTIFICATION_PUSH':
	      return {
	        ...state,
	        [action.notification.id]: action.notification
	      };
	    case 'NOTIFICATION_POP':
	      const result = {};
	      for (let k in state) {
	        if (k.toString() !== action.id.toString()) {
	          result[k] = state[k];
	        }
	      }
	      return result;
	    default:
	      return state;
	  }
	}

	var done = function done(value) {
	  return {
	    done: true,
	    value: value
	  };
	};
	var qEnd = {};
	function safeName(patternOrChannel) {
	  if (channel$1(patternOrChannel)) {
	    return 'channel';
	  }
	  if (stringableFunc(patternOrChannel)) {
	    return String(patternOrChannel);
	  }
	  if (func(patternOrChannel)) {
	    return patternOrChannel.name;
	  }
	  return String(patternOrChannel);
	}
	function fsmIterator(fsm, startState, name) {
	  var stateUpdater,
	    errorState,
	    effect,
	    nextState = startState;
	  function next(arg, error) {
	    if (nextState === qEnd) {
	      return done(arg);
	    }
	    if (error && !errorState) {
	      nextState = qEnd;
	      throw error;
	    } else {
	      stateUpdater && stateUpdater(arg);
	      var currentState = error ? fsm[errorState](error) : fsm[nextState]();
	      nextState = currentState.nextState;
	      effect = currentState.effect;
	      stateUpdater = currentState.stateUpdater;
	      errorState = currentState.errorState;
	      return nextState === qEnd ? done(arg) : effect;
	    }
	  }
	  return makeIterator(next, function (error) {
	    return next(null, error);
	  }, name);
	}
	function takeEvery(patternOrChannel, worker) {
	  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	  var yTake = {
	    done: false,
	    value: take(patternOrChannel)
	  };
	  var yFork = function yFork(ac) {
	    return {
	      done: false,
	      value: fork.apply(void 0, [worker].concat(args, [ac]))
	    };
	  };
	  var action,
	    setAction = function setAction(ac) {
	      return action = ac;
	    };
	  return fsmIterator({
	    q1: function q1() {
	      return {
	        nextState: 'q2',
	        effect: yTake,
	        stateUpdater: setAction
	      };
	    },
	    q2: function q2() {
	      return {
	        nextState: 'q1',
	        effect: yFork(action)
	      };
	    }
	  }, 'q1', "takeEvery(" + safeName(patternOrChannel) + ", " + worker.name + ")");
	}
	function takeEvery$1(patternOrChannel, worker) {
	  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	  return fork.apply(void 0, [takeEvery, patternOrChannel, worker].concat(args));
	}

	function* popNotification({
	  notification
	}) {
	  if (notification.buttons) {
	    return;
	  }
	  if (notification.resolveActions) {
	    yield take(notification.resolveActions);
	  } else {
	    yield delay(notification.duration || 5000);
	  }
	  yield put({
	    type: 'NOTIFICATION_POP',
	    id: notification.id
	  });
	}
	function* forwardConfirmation({
	  id,
	  payload
	}) {
	  yield put(payload);
	  yield put({
	    type: 'NOTIFICATION_POP',
	    id
	  });
	}
	function* notificationSaga() {
	  yield takeEvery$1('NOTIFICATION_PUSH', popNotification);
	  yield takeEvery$1('NOTIFICATION_CONFIRMATION', forwardConfirmation);
	}

	const moveup = We({
	  from: {
	    transform: 'translateY(15px)'
	  },
	  to: {
	    transform: 'translateY(0px)'
	  }
	});
	const show = We({
	  from: {
	    opacity: 0
	  },
	  to: {
	    opacity: 1
	  }
	});
	const slidebg = We({
	  from: {
	    backgroundPositionX: '100%'
	  },
	  to: {
	    backgroundPositionX: '0%'
	  }
	});
	const container$1 = () => ({
	  position: 'fixed',
	  bottom: '15px',
	  width: '100%',
	  height: '0px',
	  display: 'flex',
	  justifyContent: 'center',
	  flexDirection: 'column',
	  alignItems: 'center',
	  zIndex: 10
	});
	const containerInner = () => ({
	  position: 'absolute',
	  bottom: '0'
	});
	const overlay = () => ({
	  position: 'fixed',
	  top: 0,
	  bottom: 0,
	  left: 0,
	  right: 0,
	  background: 'black',
	  opacity: 0.7
	});
	const notification = ({
	  duration
	}) => ({
	  position: 'relative',
	  overflow: 'hidden',
	  margin: '15px 15px 0 15px',
	  display: 'flex',
	  flexDirection: 'column',
	  userSelect: 'none',
	  animation: Ae`
    ${moveup} 0.2s ease none, ${show} 0.2s ease none, ${slidebg} ${duration}ms linear none
  `
	});
	const notificationInner = () => ({
	  display: 'flex',
	  minHeight: '30px',
	  alignItems: 'center'
	});
	const icon$1 = () => ({
	  display: 'flex',
	  height: '100%',
	  fontSize: '28px',
	  alignItems: 'center',
	  justifyContent: 'center',
	  padding: '15px 0 15px 15px',
	  color: '#ededee'
	});
	const label = () => ({
	  display: 'flex',
	  justifyContent: 'center',
	  alignItems: 'center',
	  padding: '15px',
	  fontSize: '12px',
	  color: '#ededee',
	  fontWeight: 'bold'
	});
	const buttonsOuter = () => ({
	  display: 'flex'
	});
	const button = ({
	  half
	}) => ({
	  display: 'flex',
	  width: '50%',
	  justifyContent: 'center',
	  alignItems: 'center',
	  padding: '5px 15px',
	  transition: 'background 0.2s ease',
	  fontSize: '12px',
	  cursor: 'pointer',
	  fontSize: '12px',
	  color: '#ededee',
	  width: half ? '50%' : '100%'
	});
	const componentStyles = {
	  container: container$1,
	  containerInner,
	  overlay,
	  notification,
	  notificationInner,
	  icon: icon$1,
	  label,
	  buttonsOuter,
	  button
	};
	const makeComponent = key => qe.div(props => props?.styles?.[key] ? Ae(props.styles[key](componentStyles[key](props), props)) : Ae(componentStyles[key](props)));
	const Container = makeComponent('container');
	const ContainerInner = makeComponent('containerInner');
	const Overlay = makeComponent('overlay');
	const Notification = makeComponent('notification');
	const NotificationInner = makeComponent('notificationInner');
	const Icon = makeComponent('icon');
	const Label = makeComponent('label');
	const ButtonsOuter = makeComponent('buttonsOuter');
	const Button = makeComponent('button');

	const createNotificationStyle = (primaryColor = 'black', secondaryColor = 'black', animateBackground = true) => ({
	  ...componentStyles,
	  button: defaults => ({
	    ...defaults,
	    boxShadow: `inset 0 0 20px ${secondaryColor}`,
	    [':hover']: {
	      background: secondaryColor
	    }
	  }),
	  notification: (defaults, {
	    timer
	  }) => ({
	    ...defaults,
	    background: animateBackground && timer ? `linear-gradient(90deg, ${secondaryColor} 50%, ${primaryColor} 50%)` : primaryColor,
	    backgroundSize: '200% auto'
	  })
	});
	const notificationDefaultTheme = {
	  success: {
	    primaryColor: '#499a4e',
	    secondaryColor: '#336c37'
	  },
	  info: {
	    primaryColor: '#5e8bc6',
	    secondaryColor: '#4a6e9c'
	  },
	  error: {
	    primaryColor: '#d26b63',
	    secondaryColor: '#934b45'
	  }
	};
	const defaultStyles$1 = {
	  success: createNotificationStyle(notificationDefaultTheme.success.primaryColor, notificationDefaultTheme.success.secondaryColor),
	  info: createNotificationStyle(notificationDefaultTheme.info.primaryColor, notificationDefaultTheme.info.secondaryColor),
	  error: createNotificationStyle(notificationDefaultTheme.error.primaryColor, notificationDefaultTheme.error.secondaryColor)
	};
	var defaultStyle = defaultStyles$1;

	function ownKeys$1(object, enumerableOnly) {
	  var keys = Object.keys(object);
	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    enumerableOnly && (symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    })), keys.push.apply(keys, symbols);
	  }
	  return keys;
	}
	function _objectSpread2$1(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = null != arguments[i] ? arguments[i] : {};
	    i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
	      _defineProperty$1(target, key, source[key]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
	      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	    });
	  }
	  return target;
	}
	function _typeof$1(obj) {
	  "@babel/helpers - typeof";

	  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof$1(obj);
	}
	function _classCallCheck$1(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	function _defineProperties$1(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}
	function _createClass$1(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties$1(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}
	function _defineProperty$1(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	  return obj;
	}
	function _slicedToArray$1(arr, i) {
	  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$1();
	}
	function _toConsumableArray$2(arr) {
	  return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$2();
	}
	function _arrayWithoutHoles$2(arr) {
	  if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
	}
	function _arrayWithHoles$1(arr) {
	  if (Array.isArray(arr)) return arr;
	}
	function _iterableToArray$2(iter) {
	  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	}
	function _iterableToArrayLimit$1(arr, i) {
	  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _s, _e;
	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);
	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }
	  return _arr;
	}
	function _unsupportedIterableToArray$2(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
	}
	function _arrayLikeToArray$2(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	  return arr2;
	}
	function _nonIterableSpread$2() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _nonIterableRest$1() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var noop$1 = function noop() {};
	var _WINDOW = {};
	var _DOCUMENT = {};
	var _MUTATION_OBSERVER = null;
	var _PERFORMANCE = {
	  mark: noop$1,
	  measure: noop$1
	};
	try {
	  if (typeof window !== 'undefined') _WINDOW = window;
	  if (typeof document !== 'undefined') _DOCUMENT = document;
	  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
	  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
	} catch (e) {}
	var _ref$1 = _WINDOW.navigator || {},
	  _ref$userAgent = _ref$1.userAgent,
	  userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
	var WINDOW = _WINDOW;
	var DOCUMENT = _DOCUMENT;
	var MUTATION_OBSERVER = _MUTATION_OBSERVER;
	var PERFORMANCE = _PERFORMANCE;
	!!WINDOW.document;
	var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
	var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
	var _familyProxy, _familyProxy2, _familyProxy3, _familyProxy4, _familyProxy5;
	var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
	var UNITS_IN_GRID = 16;
	var DEFAULT_CSS_PREFIX = 'fa';
	var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
	var DATA_FA_I2SVG = 'data-fa-i2svg';
	var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
	var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
	var DATA_PREFIX = 'data-prefix';
	var DATA_ICON = 'data-icon';
	var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
	var MUTATION_APPROACH_ASYNC = 'async';
	var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
	var PRODUCTION$1 = function () {
	  try {
	    return 'production' === 'production';
	  } catch (e) {
	    return false;
	  }
	}();
	var FAMILY_CLASSIC = 'classic';
	var FAMILY_SHARP = 'sharp';
	var FAMILIES = [FAMILY_CLASSIC, FAMILY_SHARP];
	function familyProxy(obj) {
	  // Defaults to the classic family if family is not available
	  return new Proxy(obj, {
	    get: function get(target, prop) {
	      return prop in target ? target[prop] : target[FAMILY_CLASSIC];
	    }
	  });
	}
	var PREFIX_TO_STYLE = familyProxy((_familyProxy = {}, _defineProperty$1(_familyProxy, FAMILY_CLASSIC, {
	  'fa': 'solid',
	  'fas': 'solid',
	  'fa-solid': 'solid',
	  'far': 'regular',
	  'fa-regular': 'regular',
	  'fal': 'light',
	  'fa-light': 'light',
	  'fat': 'thin',
	  'fa-thin': 'thin',
	  'fad': 'duotone',
	  'fa-duotone': 'duotone',
	  'fab': 'brands',
	  'fa-brands': 'brands',
	  'fak': 'kit',
	  'fa-kit': 'kit'
	}), _defineProperty$1(_familyProxy, FAMILY_SHARP, {
	  'fa': 'solid',
	  'fass': 'solid',
	  'fa-solid': 'solid',
	  'fasr': 'regular',
	  'fa-regular': 'regular',
	  'fasl': 'light',
	  'fa-light': 'light'
	}), _familyProxy));
	var STYLE_TO_PREFIX = familyProxy((_familyProxy2 = {}, _defineProperty$1(_familyProxy2, FAMILY_CLASSIC, {
	  'solid': 'fas',
	  'regular': 'far',
	  'light': 'fal',
	  'thin': 'fat',
	  'duotone': 'fad',
	  'brands': 'fab',
	  'kit': 'fak'
	}), _defineProperty$1(_familyProxy2, FAMILY_SHARP, {
	  'solid': 'fass',
	  'regular': 'fasr',
	  'light': 'fasl'
	}), _familyProxy2));
	var PREFIX_TO_LONG_STYLE = familyProxy((_familyProxy3 = {}, _defineProperty$1(_familyProxy3, FAMILY_CLASSIC, {
	  'fab': 'fa-brands',
	  'fad': 'fa-duotone',
	  'fak': 'fa-kit',
	  'fal': 'fa-light',
	  'far': 'fa-regular',
	  'fas': 'fa-solid',
	  'fat': 'fa-thin'
	}), _defineProperty$1(_familyProxy3, FAMILY_SHARP, {
	  'fass': 'fa-solid',
	  'fasr': 'fa-regular',
	  'fasl': 'fa-light'
	}), _familyProxy3));
	var LONG_STYLE_TO_PREFIX = familyProxy((_familyProxy4 = {}, _defineProperty$1(_familyProxy4, FAMILY_CLASSIC, {
	  'fa-brands': 'fab',
	  'fa-duotone': 'fad',
	  'fa-kit': 'fak',
	  'fa-light': 'fal',
	  'fa-regular': 'far',
	  'fa-solid': 'fas',
	  'fa-thin': 'fat'
	}), _defineProperty$1(_familyProxy4, FAMILY_SHARP, {
	  'fa-solid': 'fass',
	  'fa-regular': 'fasr',
	  'fa-light': 'fasl'
	}), _familyProxy4));
	var ICON_SELECTION_SYNTAX_PATTERN = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/; // eslint-disable-line no-useless-escape

	var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
	var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i;
	var FONT_WEIGHT_TO_PREFIX = familyProxy((_familyProxy5 = {}, _defineProperty$1(_familyProxy5, FAMILY_CLASSIC, {
	  '900': 'fas',
	  '400': 'far',
	  'normal': 'far',
	  '300': 'fal',
	  '100': 'fat'
	}), _defineProperty$1(_familyProxy5, FAMILY_SHARP, {
	  '900': 'fass',
	  '400': 'fasr',
	  '300': 'fasl'
	}), _familyProxy5));
	var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
	var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
	var DUOTONE_CLASSES = {
	  GROUP: 'duotone-group',
	  SWAP_OPACITY: 'swap-opacity',
	  PRIMARY: 'primary',
	  SECONDARY: 'secondary'
	};
	var prefixes = new Set();
	Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));
	Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));
	var RESERVED_CLASSES = [].concat(FAMILIES, _toConsumableArray$2(prefixes), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
	  return "".concat(n, "x");
	})).concat(oneToTwenty.map(function (n) {
	  return "w-".concat(n);
	}));
	var initial = WINDOW.FontAwesomeConfig || {};
	function getAttrConfig(attr) {
	  var element = DOCUMENT.querySelector('script[' + attr + ']');
	  if (element) {
	    return element.getAttribute(attr);
	  }
	}
	function coerce(val) {
	  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
	  // We'll assume that this is an indication that it should be toggled to true
	  if (val === '') return true;
	  if (val === 'false') return false;
	  if (val === 'true') return true;
	  return val;
	}
	if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
	  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-css-prefix', 'cssPrefix'], ['data-family-default', 'familyDefault'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
	  attrs.forEach(function (_ref) {
	    var _ref2 = _slicedToArray$1(_ref, 2),
	      attr = _ref2[0],
	      key = _ref2[1];
	    var val = coerce(getAttrConfig(attr));
	    if (val !== undefined && val !== null) {
	      initial[key] = val;
	    }
	  });
	}
	var _default = {
	  styleDefault: 'solid',
	  familyDefault: 'classic',
	  cssPrefix: DEFAULT_CSS_PREFIX,
	  replacementClass: DEFAULT_REPLACEMENT_CLASS,
	  autoReplaceSvg: true,
	  autoAddCss: true,
	  autoA11y: true,
	  searchPseudoElements: false,
	  observeMutations: true,
	  mutateApproach: 'async',
	  keepOriginalSource: true,
	  measurePerformance: false,
	  showMissingIcons: true
	}; // familyPrefix is deprecated but we must still support it if present

	if (initial.familyPrefix) {
	  initial.cssPrefix = initial.familyPrefix;
	}
	var _config = _objectSpread2$1(_objectSpread2$1({}, _default), initial);
	if (!_config.autoReplaceSvg) _config.observeMutations = false;
	var config = {};
	Object.keys(_default).forEach(function (key) {
	  Object.defineProperty(config, key, {
	    enumerable: true,
	    set: function set(val) {
	      _config[key] = val;
	      _onChangeCb.forEach(function (cb) {
	        return cb(config);
	      });
	    },
	    get: function get() {
	      return _config[key];
	    }
	  });
	}); // familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0

	Object.defineProperty(config, 'familyPrefix', {
	  enumerable: true,
	  set: function set(val) {
	    _config.cssPrefix = val;
	    _onChangeCb.forEach(function (cb) {
	      return cb(config);
	    });
	  },
	  get: function get() {
	    return _config.cssPrefix;
	  }
	});
	WINDOW.FontAwesomeConfig = config;
	var _onChangeCb = [];
	function onChange(cb) {
	  _onChangeCb.push(cb);
	  return function () {
	    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
	  };
	}
	var d = UNITS_IN_GRID;
	var meaninglessTransform = {
	  size: 16,
	  x: 0,
	  y: 0,
	  rotate: 0,
	  flipX: false,
	  flipY: false
	};
	function insertCss(css) {
	  if (!css || !IS_DOM) {
	    return;
	  }
	  var style = DOCUMENT.createElement('style');
	  style.setAttribute('type', 'text/css');
	  style.innerHTML = css;
	  var headChildren = DOCUMENT.head.childNodes;
	  var beforeChild = null;
	  for (var i = headChildren.length - 1; i > -1; i--) {
	    var child = headChildren[i];
	    var tagName = (child.tagName || '').toUpperCase();
	    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
	      beforeChild = child;
	    }
	  }
	  DOCUMENT.head.insertBefore(style, beforeChild);
	  return css;
	}
	var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	function nextUniqueId() {
	  var size = 12;
	  var id = '';
	  while (size-- > 0) {
	    id += idPool[Math.random() * 62 | 0];
	  }
	  return id;
	}
	function toArray(obj) {
	  var array = [];
	  for (var i = (obj || []).length >>> 0; i--;) {
	    array[i] = obj[i];
	  }
	  return array;
	}
	function classArray(node) {
	  if (node.classList) {
	    return toArray(node.classList);
	  } else {
	    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
	      return i;
	    });
	  }
	}
	function htmlEscape(str) {
	  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}
	function joinAttributes(attributes) {
	  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
	    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
	  }, '').trim();
	}
	function joinStyles(styles) {
	  return Object.keys(styles || {}).reduce(function (acc, styleName) {
	    return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
	  }, '');
	}
	function transformIsMeaningful(transform) {
	  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
	}
	function transformForSvg(_ref) {
	  var transform = _ref.transform,
	    containerWidth = _ref.containerWidth,
	    iconWidth = _ref.iconWidth;
	  var outer = {
	    transform: "translate(".concat(containerWidth / 2, " 256)")
	  };
	  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
	  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
	  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
	  var inner = {
	    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
	  };
	  var path = {
	    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
	  };
	  return {
	    outer: outer,
	    inner: inner,
	    path: path
	  };
	}
	function transformForCss(_ref2) {
	  var transform = _ref2.transform,
	    _ref2$width = _ref2.width,
	    width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
	    _ref2$height = _ref2.height,
	    height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
	    _ref2$startCentered = _ref2.startCentered,
	    startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
	  var val = '';
	  if (startCentered && IS_IE) {
	    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
	  } else if (startCentered) {
	    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
	  } else {
	    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
	  }
	  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
	  val += "rotate(".concat(transform.rotate, "deg) ");
	  return val;
	}
	var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Solid\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Regular\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Light\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Thin\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-sharp-solid: normal 900 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-regular: normal 400 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-light: normal 300 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}";
	function css$3() {
	  var dcp = DEFAULT_CSS_PREFIX;
	  var drc = DEFAULT_REPLACEMENT_CLASS;
	  var fp = config.cssPrefix;
	  var rc = config.replacementClass;
	  var s = baseStyles;
	  if (fp !== dcp || rc !== drc) {
	    var dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
	    var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
	    var rPatt = new RegExp("\\.".concat(drc), 'g');
	    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
	  }
	  return s;
	}
	var _cssInserted = false;
	function ensureCss() {
	  if (config.autoAddCss && !_cssInserted) {
	    insertCss(css$3());
	    _cssInserted = true;
	  }
	}
	var InjectCSS = {
	  mixout: function mixout() {
	    return {
	      dom: {
	        css: css$3,
	        insertCss: ensureCss
	      }
	    };
	  },
	  hooks: function hooks() {
	    return {
	      beforeDOMElementCreation: function beforeDOMElementCreation() {
	        ensureCss();
	      },
	      beforeI2svg: function beforeI2svg() {
	        ensureCss();
	      }
	    };
	  }
	};
	var w$1 = WINDOW || {};
	if (!w$1[NAMESPACE_IDENTIFIER]) w$1[NAMESPACE_IDENTIFIER] = {};
	if (!w$1[NAMESPACE_IDENTIFIER].styles) w$1[NAMESPACE_IDENTIFIER].styles = {};
	if (!w$1[NAMESPACE_IDENTIFIER].hooks) w$1[NAMESPACE_IDENTIFIER].hooks = {};
	if (!w$1[NAMESPACE_IDENTIFIER].shims) w$1[NAMESPACE_IDENTIFIER].shims = [];
	var namespace = w$1[NAMESPACE_IDENTIFIER];
	var functions = [];
	var listener = function listener() {
	  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
	  loaded = 1;
	  functions.map(function (fn) {
	    return fn();
	  });
	};
	var loaded = false;
	if (IS_DOM) {
	  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
	  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
	}
	function domready(fn) {
	  if (!IS_DOM) return;
	  loaded ? setTimeout(fn, 0) : functions.push(fn);
	}
	function toHtml(abstractNodes) {
	  var tag = abstractNodes.tag,
	    _abstractNodes$attrib = abstractNodes.attributes,
	    attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
	    _abstractNodes$childr = abstractNodes.children,
	    children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
	  if (typeof abstractNodes === 'string') {
	    return htmlEscape(abstractNodes);
	  } else {
	    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
	  }
	}
	function iconFromMapping(mapping, prefix, iconName) {
	  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
	    return {
	      prefix: prefix,
	      iconName: iconName,
	      icon: mapping[prefix][iconName]
	    };
	  }
	}

	/**
	 * Internal helper to bind a function known to have 4 arguments
	 * to a given context.
	 */

	var bindInternal4 = function bindInternal4(func, thisContext) {
	  return function (a, b, c, d) {
	    return func.call(thisContext, a, b, c, d);
	  };
	};

	/**
	 * # Reduce
	 *
	 * A fast object `.reduce()` implementation.
	 *
	 * @param  {Object}   subject      The object to reduce over.
	 * @param  {Function} fn           The reducer function.
	 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
	 * @param  {Object}   thisContext  The context for the reducer.
	 * @return {mixed}                 The final result.
	 */

	var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
	  var keys = Object.keys(subject),
	    length = keys.length,
	    iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
	    i,
	    key,
	    result;
	  if (initialValue === undefined) {
	    i = 1;
	    result = subject[keys[0]];
	  } else {
	    i = 0;
	    result = initialValue;
	  }
	  for (; i < length; i++) {
	    key = keys[i];
	    result = iterator(result, subject[key], key, subject);
	  }
	  return result;
	};

	/**
	 * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
	 *
	 * Copyright Mathias Bynens <https://mathiasbynens.be/>

	 * Permission is hereby granted, free of charge, to any person obtaining
	 * a copy of this software and associated documentation files (the
	 * "Software"), to deal in the Software without restriction, including
	 * without limitation the rights to use, copy, modify, merge, publish,
	 * distribute, sublicense, and/or sell copies of the Software, and to
	 * permit persons to whom the Software is furnished to do so, subject to
	 * the following conditions:

	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.

	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */
	function ucs2decode(string) {
	  var output = [];
	  var counter = 0;
	  var length = string.length;
	  while (counter < length) {
	    var value = string.charCodeAt(counter++);
	    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
	      var extra = string.charCodeAt(counter++);
	      if ((extra & 0xFC00) == 0xDC00) {
	        // eslint-disable-line eqeqeq
	        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
	      } else {
	        output.push(value);
	        counter--;
	      }
	    } else {
	      output.push(value);
	    }
	  }
	  return output;
	}
	function toHex(unicode) {
	  var decoded = ucs2decode(unicode);
	  return decoded.length === 1 ? decoded[0].toString(16) : null;
	}
	function codePointAt(string, index) {
	  var size = string.length;
	  var first = string.charCodeAt(index);
	  var second;
	  if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
	    second = string.charCodeAt(index + 1);
	    if (second >= 0xDC00 && second <= 0xDFFF) {
	      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
	    }
	  }
	  return first;
	}
	function normalizeIcons(icons) {
	  return Object.keys(icons).reduce(function (acc, iconName) {
	    var icon = icons[iconName];
	    var expanded = !!icon.icon;
	    if (expanded) {
	      acc[icon.iconName] = icon.icon;
	    } else {
	      acc[iconName] = icon;
	    }
	    return acc;
	  }, {});
	}
	function defineIcons(prefix, icons) {
	  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var _params$skipHooks = params.skipHooks,
	    skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
	  var normalized = normalizeIcons(icons);
	  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
	    namespace.hooks.addPack(prefix, normalizeIcons(icons));
	  } else {
	    namespace.styles[prefix] = _objectSpread2$1(_objectSpread2$1({}, namespace.styles[prefix] || {}), normalized);
	  }
	  /**
	   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
	   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
	   * for `fas` so we'll ease the upgrade process for our users by automatically defining
	   * this as well.
	   */

	  if (prefix === 'fas') {
	    defineIcons('fa', icons);
	  }
	}
	var _LONG_STYLE, _PREFIXES, _PREFIXES_FOR_FAMILY;
	var styles$1 = namespace.styles,
	  shims = namespace.shims;
	var LONG_STYLE = (_LONG_STYLE = {}, _defineProperty$1(_LONG_STYLE, FAMILY_CLASSIC, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_LONG_STYLE, FAMILY_SHARP, Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _LONG_STYLE);
	var _defaultUsablePrefix = null;
	var _byUnicode = {};
	var _byLigature = {};
	var _byOldName = {};
	var _byOldUnicode = {};
	var _byAlias = {};
	var PREFIXES = (_PREFIXES = {}, _defineProperty$1(_PREFIXES, FAMILY_CLASSIC, Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_PREFIXES, FAMILY_SHARP, Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])), _PREFIXES);
	function isReserved(name) {
	  return ~RESERVED_CLASSES.indexOf(name);
	}
	function getIconName(cssPrefix, cls) {
	  var parts = cls.split('-');
	  var prefix = parts[0];
	  var iconName = parts.slice(1).join('-');
	  if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
	    return iconName;
	  } else {
	    return null;
	  }
	}
	var build = function build() {
	  var lookup = function lookup(reducer) {
	    return reduce(styles$1, function (o, style, prefix) {
	      o[prefix] = reduce(style, reducer, {});
	      return o;
	    }, {});
	  };
	  _byUnicode = lookup(function (acc, icon, iconName) {
	    if (icon[3]) {
	      acc[icon[3]] = iconName;
	    }
	    if (icon[2]) {
	      var aliases = icon[2].filter(function (a) {
	        return typeof a === 'number';
	      });
	      aliases.forEach(function (alias) {
	        acc[alias.toString(16)] = iconName;
	      });
	    }
	    return acc;
	  });
	  _byLigature = lookup(function (acc, icon, iconName) {
	    acc[iconName] = iconName;
	    if (icon[2]) {
	      var aliases = icon[2].filter(function (a) {
	        return typeof a === 'string';
	      });
	      aliases.forEach(function (alias) {
	        acc[alias] = iconName;
	      });
	    }
	    return acc;
	  });
	  _byAlias = lookup(function (acc, icon, iconName) {
	    var aliases = icon[2];
	    acc[iconName] = iconName;
	    aliases.forEach(function (alias) {
	      acc[alias] = iconName;
	    });
	    return acc;
	  }); // If we have a Kit, we can't determine if regular is available since we
	  // could be auto-fetching it. We'll have to assume that it is available.

	  var hasRegular = 'far' in styles$1 || config.autoFetchSvg;
	  var shimLookups = reduce(shims, function (acc, shim) {
	    var maybeNameMaybeUnicode = shim[0];
	    var prefix = shim[1];
	    var iconName = shim[2];
	    if (prefix === 'far' && !hasRegular) {
	      prefix = 'fas';
	    }
	    if (typeof maybeNameMaybeUnicode === 'string') {
	      acc.names[maybeNameMaybeUnicode] = {
	        prefix: prefix,
	        iconName: iconName
	      };
	    }
	    if (typeof maybeNameMaybeUnicode === 'number') {
	      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
	        prefix: prefix,
	        iconName: iconName
	      };
	    }
	    return acc;
	  }, {
	    names: {},
	    unicodes: {}
	  });
	  _byOldName = shimLookups.names;
	  _byOldUnicode = shimLookups.unicodes;
	  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
	    family: config.familyDefault
	  });
	};
	onChange(function (c) {
	  _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault, {
	    family: config.familyDefault
	  });
	});
	build();
	function byUnicode(prefix, unicode) {
	  return (_byUnicode[prefix] || {})[unicode];
	}
	function byLigature(prefix, ligature) {
	  return (_byLigature[prefix] || {})[ligature];
	}
	function byAlias(prefix, alias) {
	  return (_byAlias[prefix] || {})[alias];
	}
	function byOldName(name) {
	  return _byOldName[name] || {
	    prefix: null,
	    iconName: null
	  };
	}
	function byOldUnicode(unicode) {
	  var oldUnicode = _byOldUnicode[unicode];
	  var newUnicode = byUnicode('fas', unicode);
	  return oldUnicode || (newUnicode ? {
	    prefix: 'fas',
	    iconName: newUnicode
	  } : null) || {
	    prefix: null,
	    iconName: null
	  };
	}
	function getDefaultUsablePrefix() {
	  return _defaultUsablePrefix;
	}
	var emptyCanonicalIcon = function emptyCanonicalIcon() {
	  return {
	    prefix: null,
	    iconName: null,
	    rest: []
	  };
	};
	function getCanonicalPrefix(styleOrPrefix) {
	  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var _params$family = params.family,
	    family = _params$family === void 0 ? FAMILY_CLASSIC : _params$family;
	  var style = PREFIX_TO_STYLE[family][styleOrPrefix];
	  var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
	  var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
	  return prefix || defined || null;
	}
	var PREFIXES_FOR_FAMILY = (_PREFIXES_FOR_FAMILY = {}, _defineProperty$1(_PREFIXES_FOR_FAMILY, FAMILY_CLASSIC, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])), _defineProperty$1(_PREFIXES_FOR_FAMILY, FAMILY_SHARP, Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])), _PREFIXES_FOR_FAMILY);
	function getCanonicalIcon(values) {
	  var _famProps;
	  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var _params$skipLookups = params.skipLookups,
	    skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
	  var famProps = (_famProps = {}, _defineProperty$1(_famProps, FAMILY_CLASSIC, "".concat(config.cssPrefix, "-").concat(FAMILY_CLASSIC)), _defineProperty$1(_famProps, FAMILY_SHARP, "".concat(config.cssPrefix, "-").concat(FAMILY_SHARP)), _famProps);
	  var givenPrefix = null;
	  var family = FAMILY_CLASSIC;
	  if (values.includes(famProps[FAMILY_CLASSIC]) || values.some(function (v) {
	    return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(v);
	  })) {
	    family = FAMILY_CLASSIC;
	  }
	  if (values.includes(famProps[FAMILY_SHARP]) || values.some(function (v) {
	    return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(v);
	  })) {
	    family = FAMILY_SHARP;
	  }
	  var canonical = values.reduce(function (acc, cls) {
	    var iconName = getIconName(config.cssPrefix, cls);
	    if (styles$1[cls]) {
	      cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
	      givenPrefix = cls;
	      acc.prefix = cls;
	    } else if (PREFIXES[family].indexOf(cls) > -1) {
	      givenPrefix = cls;
	      acc.prefix = getCanonicalPrefix(cls, {
	        family: family
	      });
	    } else if (iconName) {
	      acc.iconName = iconName;
	    } else if (cls !== config.replacementClass && cls !== famProps[FAMILY_CLASSIC] && cls !== famProps[FAMILY_SHARP]) {
	      acc.rest.push(cls);
	    }
	    if (!skipLookups && acc.prefix && acc.iconName) {
	      var shim = givenPrefix === 'fa' ? byOldName(acc.iconName) : {};
	      var aliasIconName = byAlias(acc.prefix, acc.iconName);
	      if (shim.prefix) {
	        givenPrefix = null;
	      }
	      acc.iconName = shim.iconName || aliasIconName || acc.iconName;
	      acc.prefix = shim.prefix || acc.prefix;
	      if (acc.prefix === 'far' && !styles$1['far'] && styles$1['fas'] && !config.autoFetchSvg) {
	        // Allow a fallback from the regular style to solid if regular is not available
	        // but only if we aren't auto-fetching SVGs
	        acc.prefix = 'fas';
	      }
	    }
	    return acc;
	  }, emptyCanonicalIcon());
	  if (values.includes('fa-brands') || values.includes('fab')) {
	    canonical.prefix = 'fab';
	  }
	  if (values.includes('fa-duotone') || values.includes('fad')) {
	    canonical.prefix = 'fad';
	  }
	  if (!canonical.prefix && family === FAMILY_SHARP && (styles$1['fass'] || config.autoFetchSvg)) {
	    canonical.prefix = 'fass';
	    canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
	  }
	  if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
	    // The fa prefix is not canonical. So if it has made it through until this point
	    // we will shift it to the correct prefix.
	    canonical.prefix = getDefaultUsablePrefix() || 'fas';
	  }
	  return canonical;
	}
	var Library = /*#__PURE__*/function () {
	  function Library() {
	    _classCallCheck$1(this, Library);
	    this.definitions = {};
	  }
	  _createClass$1(Library, [{
	    key: "add",
	    value: function add() {
	      var _this = this;
	      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
	        definitions[_key] = arguments[_key];
	      }
	      var additions = definitions.reduce(this._pullDefinitions, {});
	      Object.keys(additions).forEach(function (key) {
	        _this.definitions[key] = _objectSpread2$1(_objectSpread2$1({}, _this.definitions[key] || {}), additions[key]);
	        defineIcons(key, additions[key]); // TODO can we stop doing this? We can't get the icons by 'fa-solid' any longer so this probably needs to change

	        var longPrefix = PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][key];
	        if (longPrefix) defineIcons(longPrefix, additions[key]);
	        build();
	      });
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      this.definitions = {};
	    }
	  }, {
	    key: "_pullDefinitions",
	    value: function _pullDefinitions(additions, definition) {
	      var normalized = definition.prefix && definition.iconName && definition.icon ? {
	        0: definition
	      } : definition;
	      Object.keys(normalized).map(function (key) {
	        var _normalized$key = normalized[key],
	          prefix = _normalized$key.prefix,
	          iconName = _normalized$key.iconName,
	          icon = _normalized$key.icon;
	        var aliases = icon[2];
	        if (!additions[prefix]) additions[prefix] = {};
	        if (aliases.length > 0) {
	          aliases.forEach(function (alias) {
	            if (typeof alias === 'string') {
	              additions[prefix][alias] = icon;
	            }
	          });
	        }
	        additions[prefix][iconName] = icon;
	      });
	      return additions;
	    }
	  }]);
	  return Library;
	}();
	var _plugins = [];
	var _hooks = {};
	var providers = {};
	var defaultProviderKeys = Object.keys(providers);
	function registerPlugins(nextPlugins, _ref) {
	  var obj = _ref.mixoutsTo;
	  _plugins = nextPlugins;
	  _hooks = {};
	  Object.keys(providers).forEach(function (k) {
	    if (defaultProviderKeys.indexOf(k) === -1) {
	      delete providers[k];
	    }
	  });
	  _plugins.forEach(function (plugin) {
	    var mixout = plugin.mixout ? plugin.mixout() : {};
	    Object.keys(mixout).forEach(function (tk) {
	      if (typeof mixout[tk] === 'function') {
	        obj[tk] = mixout[tk];
	      }
	      if (_typeof$1(mixout[tk]) === 'object') {
	        Object.keys(mixout[tk]).forEach(function (sk) {
	          if (!obj[tk]) {
	            obj[tk] = {};
	          }
	          obj[tk][sk] = mixout[tk][sk];
	        });
	      }
	    });
	    if (plugin.hooks) {
	      var hooks = plugin.hooks();
	      Object.keys(hooks).forEach(function (hook) {
	        if (!_hooks[hook]) {
	          _hooks[hook] = [];
	        }
	        _hooks[hook].push(hooks[hook]);
	      });
	    }
	    if (plugin.provides) {
	      plugin.provides(providers);
	    }
	  });
	  return obj;
	}
	function chainHooks(hook, accumulator) {
	  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	  var hookFns = _hooks[hook] || [];
	  hookFns.forEach(function (hookFn) {
	    accumulator = hookFn.apply(null, [accumulator].concat(args)); // eslint-disable-line no-useless-call
	  });

	  return accumulator;
	}
	function callHooks(hook) {
	  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    args[_key2 - 1] = arguments[_key2];
	  }
	  var hookFns = _hooks[hook] || [];
	  hookFns.forEach(function (hookFn) {
	    hookFn.apply(null, args);
	  });
	  return undefined;
	}
	function callProvided() {
	  var hook = arguments[0];
	  var args = Array.prototype.slice.call(arguments, 1);
	  return providers[hook] ? providers[hook].apply(null, args) : undefined;
	}
	function findIconDefinition(iconLookup) {
	  if (iconLookup.prefix === 'fa') {
	    iconLookup.prefix = 'fas';
	  }
	  var iconName = iconLookup.iconName;
	  var prefix = iconLookup.prefix || getDefaultUsablePrefix();
	  if (!iconName) return;
	  iconName = byAlias(prefix, iconName) || iconName;
	  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
	}
	var library = new Library();
	var noAuto = function noAuto() {
	  config.autoReplaceSvg = false;
	  config.observeMutations = false;
	  callHooks('noAuto');
	};
	var dom = {
	  i2svg: function i2svg() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    if (IS_DOM) {
	      callHooks('beforeI2svg', params);
	      callProvided('pseudoElements2svg', params);
	      return callProvided('i2svg', params);
	    } else {
	      return Promise.reject('Operation requires a DOM of some kind.');
	    }
	  },
	  watch: function watch() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var autoReplaceSvgRoot = params.autoReplaceSvgRoot;
	    if (config.autoReplaceSvg === false) {
	      config.autoReplaceSvg = true;
	    }
	    config.observeMutations = true;
	    domready(function () {
	      autoReplace({
	        autoReplaceSvgRoot: autoReplaceSvgRoot
	      });
	      callHooks('watch', params);
	    });
	  }
	};
	var parse$1 = {
	  icon: function icon(_icon) {
	    if (_icon === null) {
	      return null;
	    }
	    if (_typeof$1(_icon) === 'object' && _icon.prefix && _icon.iconName) {
	      return {
	        prefix: _icon.prefix,
	        iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
	      };
	    }
	    if (Array.isArray(_icon) && _icon.length === 2) {
	      var iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
	      var prefix = getCanonicalPrefix(_icon[0]);
	      return {
	        prefix: prefix,
	        iconName: byAlias(prefix, iconName) || iconName
	      };
	    }
	    if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
	      var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
	        skipLookups: true
	      });
	      return {
	        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
	        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
	      };
	    }
	    if (typeof _icon === 'string') {
	      var _prefix = getDefaultUsablePrefix();
	      return {
	        prefix: _prefix,
	        iconName: byAlias(_prefix, _icon) || _icon
	      };
	    }
	  }
	};
	var api = {
	  noAuto: noAuto,
	  config: config,
	  dom: dom,
	  parse: parse$1,
	  library: library,
	  findIconDefinition: findIconDefinition,
	  toHtml: toHtml
	};
	var autoReplace = function autoReplace() {
	  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
	    autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
	  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
	    node: autoReplaceSvgRoot
	  });
	};
	function domVariants(val, abstractCreator) {
	  Object.defineProperty(val, 'abstract', {
	    get: abstractCreator
	  });
	  Object.defineProperty(val, 'html', {
	    get: function get() {
	      return val.abstract.map(function (a) {
	        return toHtml(a);
	      });
	    }
	  });
	  Object.defineProperty(val, 'node', {
	    get: function get() {
	      if (!IS_DOM) return;
	      var container = DOCUMENT.createElement('div');
	      container.innerHTML = val.html;
	      return container.children;
	    }
	  });
	  return val;
	}
	function asIcon(_ref) {
	  var children = _ref.children,
	    main = _ref.main,
	    mask = _ref.mask,
	    attributes = _ref.attributes,
	    styles = _ref.styles,
	    transform = _ref.transform;
	  if (transformIsMeaningful(transform) && main.found && !mask.found) {
	    var width = main.width,
	      height = main.height;
	    var offset = {
	      x: width / height / 2,
	      y: 0.5
	    };
	    attributes['style'] = joinStyles(_objectSpread2$1(_objectSpread2$1({}, styles), {}, {
	      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
	    }));
	  }
	  return [{
	    tag: 'svg',
	    attributes: attributes,
	    children: children
	  }];
	}
	function asSymbol(_ref) {
	  var prefix = _ref.prefix,
	    iconName = _ref.iconName,
	    children = _ref.children,
	    attributes = _ref.attributes,
	    symbol = _ref.symbol;
	  var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
	  return [{
	    tag: 'svg',
	    attributes: {
	      style: 'display: none;'
	    },
	    children: [{
	      tag: 'symbol',
	      attributes: _objectSpread2$1(_objectSpread2$1({}, attributes), {}, {
	        id: id
	      }),
	      children: children
	    }]
	  }];
	}
	function makeInlineSvgAbstract(params) {
	  var _params$icons = params.icons,
	    main = _params$icons.main,
	    mask = _params$icons.mask,
	    prefix = params.prefix,
	    iconName = params.iconName,
	    transform = params.transform,
	    symbol = params.symbol,
	    title = params.title,
	    maskId = params.maskId,
	    titleId = params.titleId,
	    extra = params.extra,
	    _params$watchable = params.watchable,
	    watchable = _params$watchable === void 0 ? false : _params$watchable;
	  var _ref = mask.found ? mask : main,
	    width = _ref.width,
	    height = _ref.height;
	  var isUploadedIcon = prefix === 'fak';
	  var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ''].filter(function (c) {
	    return extra.classes.indexOf(c) === -1;
	  }).filter(function (c) {
	    return c !== '' || !!c;
	  }).concat(extra.classes).join(' ');
	  var content = {
	    children: [],
	    attributes: _objectSpread2$1(_objectSpread2$1({}, extra.attributes), {}, {
	      'data-prefix': prefix,
	      'data-icon': iconName,
	      'class': attrClass,
	      'role': extra.attributes.role || 'img',
	      'xmlns': 'http://www.w3.org/2000/svg',
	      'viewBox': "0 0 ".concat(width, " ").concat(height)
	    })
	  };
	  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
	    width: "".concat(width / height * 16 * 0.0625, "em")
	  } : {};
	  if (watchable) {
	    content.attributes[DATA_FA_I2SVG] = '';
	  }
	  if (title) {
	    content.children.push({
	      tag: 'title',
	      attributes: {
	        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
	      },
	      children: [title]
	    });
	    delete content.attributes.title;
	  }
	  var args = _objectSpread2$1(_objectSpread2$1({}, content), {}, {
	    prefix: prefix,
	    iconName: iconName,
	    main: main,
	    mask: mask,
	    maskId: maskId,
	    transform: transform,
	    symbol: symbol,
	    styles: _objectSpread2$1(_objectSpread2$1({}, uploadedIconWidthStyle), extra.styles)
	  });
	  var _ref2 = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
	      children: [],
	      attributes: {}
	    } : callProvided('generateAbstractIcon', args) || {
	      children: [],
	      attributes: {}
	    },
	    children = _ref2.children,
	    attributes = _ref2.attributes;
	  args.children = children;
	  args.attributes = attributes;
	  if (symbol) {
	    return asSymbol(args);
	  } else {
	    return asIcon(args);
	  }
	}
	function makeLayersTextAbstract(params) {
	  var content = params.content,
	    width = params.width,
	    height = params.height,
	    transform = params.transform,
	    title = params.title,
	    extra = params.extra,
	    _params$watchable2 = params.watchable,
	    watchable = _params$watchable2 === void 0 ? false : _params$watchable2;
	  var attributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extra.attributes), title ? {
	    'title': title
	  } : {}), {}, {
	    'class': extra.classes.join(' ')
	  });
	  if (watchable) {
	    attributes[DATA_FA_I2SVG] = '';
	  }
	  var styles = _objectSpread2$1({}, extra.styles);
	  if (transformIsMeaningful(transform)) {
	    styles['transform'] = transformForCss({
	      transform: transform,
	      startCentered: true,
	      width: width,
	      height: height
	    });
	    styles['-webkit-transform'] = styles['transform'];
	  }
	  var styleString = joinStyles(styles);
	  if (styleString.length > 0) {
	    attributes['style'] = styleString;
	  }
	  var val = [];
	  val.push({
	    tag: 'span',
	    attributes: attributes,
	    children: [content]
	  });
	  if (title) {
	    val.push({
	      tag: 'span',
	      attributes: {
	        class: 'sr-only'
	      },
	      children: [title]
	    });
	  }
	  return val;
	}
	function makeLayersCounterAbstract(params) {
	  var content = params.content,
	    title = params.title,
	    extra = params.extra;
	  var attributes = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extra.attributes), title ? {
	    'title': title
	  } : {}), {}, {
	    'class': extra.classes.join(' ')
	  });
	  var styleString = joinStyles(extra.styles);
	  if (styleString.length > 0) {
	    attributes['style'] = styleString;
	  }
	  var val = [];
	  val.push({
	    tag: 'span',
	    attributes: attributes,
	    children: [content]
	  });
	  if (title) {
	    val.push({
	      tag: 'span',
	      attributes: {
	        class: 'sr-only'
	      },
	      children: [title]
	    });
	  }
	  return val;
	}
	var styles$1$1 = namespace.styles;
	function asFoundIcon(icon) {
	  var width = icon[0];
	  var height = icon[1];
	  var _icon$slice = icon.slice(4),
	    _icon$slice2 = _slicedToArray$1(_icon$slice, 1),
	    vectorData = _icon$slice2[0];
	  var element = null;
	  if (Array.isArray(vectorData)) {
	    element = {
	      tag: 'g',
	      attributes: {
	        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
	      },
	      children: [{
	        tag: 'path',
	        attributes: {
	          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
	          fill: 'currentColor',
	          d: vectorData[0]
	        }
	      }, {
	        tag: 'path',
	        attributes: {
	          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
	          fill: 'currentColor',
	          d: vectorData[1]
	        }
	      }]
	    };
	  } else {
	    element = {
	      tag: 'path',
	      attributes: {
	        fill: 'currentColor',
	        d: vectorData
	      }
	    };
	  }
	  return {
	    found: true,
	    width: width,
	    height: height,
	    icon: element
	  };
	}
	var missingIconResolutionMixin = {
	  found: false,
	  width: 512,
	  height: 512
	};
	function maybeNotifyMissing(iconName, prefix) {
	  if (!PRODUCTION$1 && !config.showMissingIcons && iconName) {
	    console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
	  }
	}
	function findIcon(iconName, prefix) {
	  var givenPrefix = prefix;
	  if (prefix === 'fa' && config.styleDefault !== null) {
	    prefix = getDefaultUsablePrefix();
	  }
	  return new Promise(function (resolve, reject) {
	    ({
	      found: false,
	      width: 512,
	      height: 512,
	      icon: callProvided('missingIconAbstract') || {}
	    });
	    if (givenPrefix === 'fa') {
	      var shim = byOldName(iconName) || {};
	      iconName = shim.iconName || iconName;
	      prefix = shim.prefix || prefix;
	    }
	    if (iconName && prefix && styles$1$1[prefix] && styles$1$1[prefix][iconName]) {
	      var icon = styles$1$1[prefix][iconName];
	      return resolve(asFoundIcon(icon));
	    }
	    maybeNotifyMissing(iconName, prefix);
	    resolve(_objectSpread2$1(_objectSpread2$1({}, missingIconResolutionMixin), {}, {
	      icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
	    }));
	  });
	}
	var noop$1$1 = function noop() {};
	var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
	  mark: noop$1$1,
	  measure: noop$1$1
	};
	var preamble = "FA \"6.4.2\"";
	var begin = function begin(name) {
	  p.mark("".concat(preamble, " ").concat(name, " begins"));
	  return function () {
	    return end(name);
	  };
	};
	var end = function end(name) {
	  p.mark("".concat(preamble, " ").concat(name, " ends"));
	  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
	};
	var perf = {
	  begin: begin,
	  end: end
	};
	var noop$2 = function noop() {};
	function isWatched(node) {
	  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
	  return typeof i2svg === 'string';
	}
	function hasPrefixAndIcon(node) {
	  var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
	  var icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
	  return prefix && icon;
	}
	function hasBeenReplaced(node) {
	  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
	}
	function getMutator() {
	  if (config.autoReplaceSvg === true) {
	    return mutators.replace;
	  }
	  var mutator = mutators[config.autoReplaceSvg];
	  return mutator || mutators.replace;
	}
	function createElementNS(tag) {
	  return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
	}
	function createElement(tag) {
	  return DOCUMENT.createElement(tag);
	}
	function convertSVG(abstractObj) {
	  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var _params$ceFn = params.ceFn,
	    ceFn = _params$ceFn === void 0 ? abstractObj.tag === 'svg' ? createElementNS : createElement : _params$ceFn;
	  if (typeof abstractObj === 'string') {
	    return DOCUMENT.createTextNode(abstractObj);
	  }
	  var tag = ceFn(abstractObj.tag);
	  Object.keys(abstractObj.attributes || []).forEach(function (key) {
	    tag.setAttribute(key, abstractObj.attributes[key]);
	  });
	  var children = abstractObj.children || [];
	  children.forEach(function (child) {
	    tag.appendChild(convertSVG(child, {
	      ceFn: ceFn
	    }));
	  });
	  return tag;
	}
	function nodeAsComment(node) {
	  var comment = " ".concat(node.outerHTML, " ");
	  /* BEGIN.ATTRIBUTION */

	  comment = "".concat(comment, "Font Awesome fontawesome.com ");
	  /* END.ATTRIBUTION */

	  return comment;
	}
	var mutators = {
	  replace: function replace(mutation) {
	    var node = mutation[0];
	    if (node.parentNode) {
	      mutation[1].forEach(function (_abstract) {
	        node.parentNode.insertBefore(convertSVG(_abstract), node);
	      });
	      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
	        var comment = DOCUMENT.createComment(nodeAsComment(node));
	        node.parentNode.replaceChild(comment, node);
	      } else {
	        node.remove();
	      }
	    }
	  },
	  nest: function nest(mutation) {
	    var node = mutation[0];
	    var _abstract2 = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
	    // Short-circuit to the standard replacement

	    if (~classArray(node).indexOf(config.replacementClass)) {
	      return mutators.replace(mutation);
	    }
	    var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
	    delete _abstract2[0].attributes.id;
	    if (_abstract2[0].attributes.class) {
	      var splitClasses = _abstract2[0].attributes.class.split(' ').reduce(function (acc, cls) {
	        if (cls === config.replacementClass || cls.match(forSvg)) {
	          acc.toSvg.push(cls);
	        } else {
	          acc.toNode.push(cls);
	        }
	        return acc;
	      }, {
	        toNode: [],
	        toSvg: []
	      });
	      _abstract2[0].attributes.class = splitClasses.toSvg.join(' ');
	      if (splitClasses.toNode.length === 0) {
	        node.removeAttribute('class');
	      } else {
	        node.setAttribute('class', splitClasses.toNode.join(' '));
	      }
	    }
	    var newInnerHTML = _abstract2.map(function (a) {
	      return toHtml(a);
	    }).join('\n');
	    node.setAttribute(DATA_FA_I2SVG, '');
	    node.innerHTML = newInnerHTML;
	  }
	};
	function performOperationSync(op) {
	  op();
	}
	function perform(mutations, callback) {
	  var callbackFunction = typeof callback === 'function' ? callback : noop$2;
	  if (mutations.length === 0) {
	    callbackFunction();
	  } else {
	    var frame = performOperationSync;
	    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
	      frame = WINDOW.requestAnimationFrame || performOperationSync;
	    }
	    frame(function () {
	      var mutator = getMutator();
	      var mark = perf.begin('mutate');
	      mutations.map(mutator);
	      mark();
	      callbackFunction();
	    });
	  }
	}
	var disabled = false;
	function disableObservation() {
	  disabled = true;
	}
	function enableObservation() {
	  disabled = false;
	}
	var mo = null;
	function observe(options) {
	  if (!MUTATION_OBSERVER) {
	    return;
	  }
	  if (!config.observeMutations) {
	    return;
	  }
	  var _options$treeCallback = options.treeCallback,
	    treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
	    _options$nodeCallback = options.nodeCallback,
	    nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
	    _options$pseudoElemen = options.pseudoElementsCallback,
	    pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
	    _options$observeMutat = options.observeMutationsRoot,
	    observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
	  mo = new MUTATION_OBSERVER(function (objects) {
	    if (disabled) return;
	    var defaultPrefix = getDefaultUsablePrefix();
	    toArray(objects).forEach(function (mutationRecord) {
	      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
	        if (config.searchPseudoElements) {
	          pseudoElementsCallback(mutationRecord.target);
	        }
	        treeCallback(mutationRecord.target);
	      }
	      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
	        pseudoElementsCallback(mutationRecord.target.parentNode);
	      }
	      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
	        if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
	          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
	            prefix = _getCanonicalIcon.prefix,
	            iconName = _getCanonicalIcon.iconName;
	          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
	          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
	        } else if (hasBeenReplaced(mutationRecord.target)) {
	          nodeCallback(mutationRecord.target);
	        }
	      }
	    });
	  });
	  if (!IS_DOM) return;
	  mo.observe(observeMutationsRoot, {
	    childList: true,
	    attributes: true,
	    characterData: true,
	    subtree: true
	  });
	}
	function disconnect() {
	  if (!mo) return;
	  mo.disconnect();
	}
	function styleParser(node) {
	  var style = node.getAttribute('style');
	  var val = [];
	  if (style) {
	    val = style.split(';').reduce(function (acc, style) {
	      var styles = style.split(':');
	      var prop = styles[0];
	      var value = styles.slice(1);
	      if (prop && value.length > 0) {
	        acc[prop] = value.join(':').trim();
	      }
	      return acc;
	    }, {});
	  }
	  return val;
	}
	function classParser(node) {
	  var existingPrefix = node.getAttribute('data-prefix');
	  var existingIconName = node.getAttribute('data-icon');
	  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
	  var val = getCanonicalIcon(classArray(node));
	  if (!val.prefix) {
	    val.prefix = getDefaultUsablePrefix();
	  }
	  if (existingPrefix && existingIconName) {
	    val.prefix = existingPrefix;
	    val.iconName = existingIconName;
	  }
	  if (val.iconName && val.prefix) {
	    return val;
	  }
	  if (val.prefix && innerText.length > 0) {
	    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
	  }
	  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
	    val.iconName = node.firstChild.data;
	  }
	  return val;
	}
	function attributesParser(node) {
	  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
	    if (acc.name !== 'class' && acc.name !== 'style') {
	      acc[attr.name] = attr.value;
	    }
	    return acc;
	  }, {});
	  var title = node.getAttribute('title');
	  var titleId = node.getAttribute('data-fa-title-id');
	  if (config.autoA11y) {
	    if (title) {
	      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
	    } else {
	      extraAttributes['aria-hidden'] = 'true';
	      extraAttributes['focusable'] = 'false';
	    }
	  }
	  return extraAttributes;
	}
	function blankMeta() {
	  return {
	    iconName: null,
	    title: null,
	    titleId: null,
	    prefix: null,
	    transform: meaninglessTransform,
	    symbol: false,
	    mask: {
	      iconName: null,
	      prefix: null,
	      rest: []
	    },
	    maskId: null,
	    extra: {
	      classes: [],
	      styles: {},
	      attributes: {}
	    }
	  };
	}
	function parseMeta(node) {
	  var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    styleParser: true
	  };
	  var _classParser = classParser(node),
	    iconName = _classParser.iconName,
	    prefix = _classParser.prefix,
	    extraClasses = _classParser.rest;
	  var extraAttributes = attributesParser(node);
	  var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
	  var extraStyles = parser.styleParser ? styleParser(node) : [];
	  return _objectSpread2$1({
	    iconName: iconName,
	    title: node.getAttribute('title'),
	    titleId: node.getAttribute('data-fa-title-id'),
	    prefix: prefix,
	    transform: meaninglessTransform,
	    mask: {
	      iconName: null,
	      prefix: null,
	      rest: []
	    },
	    maskId: null,
	    symbol: false,
	    extra: {
	      classes: extraClasses,
	      styles: extraStyles,
	      attributes: extraAttributes
	    }
	  }, pluginMeta);
	}
	var styles$2 = namespace.styles;
	function generateMutation(node) {
	  var nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
	    styleParser: false
	  }) : parseMeta(node);
	  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
	    return callProvided('generateLayersText', node, nodeMeta);
	  } else {
	    return callProvided('generateSvgReplacementMutation', node, nodeMeta);
	  }
	}
	var knownPrefixes = new Set();
	FAMILIES.map(function (family) {
	  knownPrefixes.add("fa-".concat(family));
	});
	Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));
	Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));
	knownPrefixes = _toConsumableArray$2(knownPrefixes);
	function onTree(root) {
	  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  if (!IS_DOM) return Promise.resolve();
	  var htmlClassList = DOCUMENT.documentElement.classList;
	  var hclAdd = function hclAdd(suffix) {
	    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
	  };
	  var hclRemove = function hclRemove(suffix) {
	    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
	  };
	  var prefixes = config.autoFetchSvg ? knownPrefixes : FAMILIES.map(function (f) {
	    return "fa-".concat(f);
	  }).concat(Object.keys(styles$2));
	  if (!prefixes.includes('fa')) {
	    prefixes.push('fa');
	  }
	  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
	    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
	  })).join(', ');
	  if (prefixesDomQuery.length === 0) {
	    return Promise.resolve();
	  }
	  var candidates = [];
	  try {
	    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
	  } catch (e) {// noop
	  }
	  if (candidates.length > 0) {
	    hclAdd('pending');
	    hclRemove('complete');
	  } else {
	    return Promise.resolve();
	  }
	  var mark = perf.begin('onTree');
	  var mutations = candidates.reduce(function (acc, node) {
	    try {
	      var mutation = generateMutation(node);
	      if (mutation) {
	        acc.push(mutation);
	      }
	    } catch (e) {
	      if (!PRODUCTION$1) {
	        if (e.name === 'MissingIcon') {
	          console.error(e);
	        }
	      }
	    }
	    return acc;
	  }, []);
	  return new Promise(function (resolve, reject) {
	    Promise.all(mutations).then(function (resolvedMutations) {
	      perform(resolvedMutations, function () {
	        hclAdd('active');
	        hclAdd('complete');
	        hclRemove('pending');
	        if (typeof callback === 'function') callback();
	        mark();
	        resolve();
	      });
	    }).catch(function (e) {
	      mark();
	      reject(e);
	    });
	  });
	}
	function onNode(node) {
	  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  generateMutation(node).then(function (mutation) {
	    if (mutation) {
	      perform([mutation], callback);
	    }
	  });
	}
	function resolveIcons(next) {
	  return function (maybeIconDefinition) {
	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
	    var mask = params.mask;
	    if (mask) {
	      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
	    }
	    return next(iconDefinition, _objectSpread2$1(_objectSpread2$1({}, params), {}, {
	      mask: mask
	    }));
	  };
	}
	var render = function render(iconDefinition) {
	  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var _params$transform = params.transform,
	    transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
	    _params$symbol = params.symbol,
	    symbol = _params$symbol === void 0 ? false : _params$symbol,
	    _params$mask = params.mask,
	    mask = _params$mask === void 0 ? null : _params$mask,
	    _params$maskId = params.maskId,
	    maskId = _params$maskId === void 0 ? null : _params$maskId,
	    _params$title = params.title,
	    title = _params$title === void 0 ? null : _params$title,
	    _params$titleId = params.titleId,
	    titleId = _params$titleId === void 0 ? null : _params$titleId,
	    _params$classes = params.classes,
	    classes = _params$classes === void 0 ? [] : _params$classes,
	    _params$attributes = params.attributes,
	    attributes = _params$attributes === void 0 ? {} : _params$attributes,
	    _params$styles = params.styles,
	    styles = _params$styles === void 0 ? {} : _params$styles;
	  if (!iconDefinition) return;
	  var prefix = iconDefinition.prefix,
	    iconName = iconDefinition.iconName,
	    icon = iconDefinition.icon;
	  return domVariants(_objectSpread2$1({
	    type: 'icon'
	  }, iconDefinition), function () {
	    callHooks('beforeDOMElementCreation', {
	      iconDefinition: iconDefinition,
	      params: params
	    });
	    if (config.autoA11y) {
	      if (title) {
	        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
	      } else {
	        attributes['aria-hidden'] = 'true';
	        attributes['focusable'] = 'false';
	      }
	    }
	    return makeInlineSvgAbstract({
	      icons: {
	        main: asFoundIcon(icon),
	        mask: mask ? asFoundIcon(mask.icon) : {
	          found: false,
	          width: null,
	          height: null,
	          icon: {}
	        }
	      },
	      prefix: prefix,
	      iconName: iconName,
	      transform: _objectSpread2$1(_objectSpread2$1({}, meaninglessTransform), transform),
	      symbol: symbol,
	      title: title,
	      maskId: maskId,
	      titleId: titleId,
	      extra: {
	        attributes: attributes,
	        styles: styles,
	        classes: classes
	      }
	    });
	  });
	};
	var ReplaceElements = {
	  mixout: function mixout() {
	    return {
	      icon: resolveIcons(render)
	    };
	  },
	  hooks: function hooks() {
	    return {
	      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
	        accumulator.treeCallback = onTree;
	        accumulator.nodeCallback = onNode;
	        return accumulator;
	      }
	    };
	  },
	  provides: function provides(providers$$1) {
	    providers$$1.i2svg = function (params) {
	      var _params$node = params.node,
	        node = _params$node === void 0 ? DOCUMENT : _params$node,
	        _params$callback = params.callback,
	        callback = _params$callback === void 0 ? function () {} : _params$callback;
	      return onTree(node, callback);
	    };
	    providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
	      var iconName = nodeMeta.iconName,
	        title = nodeMeta.title,
	        titleId = nodeMeta.titleId,
	        prefix = nodeMeta.prefix,
	        transform = nodeMeta.transform,
	        symbol = nodeMeta.symbol,
	        mask = nodeMeta.mask,
	        maskId = nodeMeta.maskId,
	        extra = nodeMeta.extra;
	      return new Promise(function (resolve, reject) {
	        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
	          found: false,
	          width: 512,
	          height: 512,
	          icon: {}
	        })]).then(function (_ref) {
	          var _ref2 = _slicedToArray$1(_ref, 2),
	            main = _ref2[0],
	            mask = _ref2[1];
	          resolve([node, makeInlineSvgAbstract({
	            icons: {
	              main: main,
	              mask: mask
	            },
	            prefix: prefix,
	            iconName: iconName,
	            transform: transform,
	            symbol: symbol,
	            maskId: maskId,
	            title: title,
	            titleId: titleId,
	            extra: extra,
	            watchable: true
	          })]);
	        }).catch(reject);
	      });
	    };
	    providers$$1.generateAbstractIcon = function (_ref3) {
	      var children = _ref3.children,
	        attributes = _ref3.attributes,
	        main = _ref3.main,
	        transform = _ref3.transform,
	        styles = _ref3.styles;
	      var styleString = joinStyles(styles);
	      if (styleString.length > 0) {
	        attributes['style'] = styleString;
	      }
	      var nextChild;
	      if (transformIsMeaningful(transform)) {
	        nextChild = callProvided('generateAbstractTransformGrouping', {
	          main: main,
	          transform: transform,
	          containerWidth: main.width,
	          iconWidth: main.width
	        });
	      }
	      children.push(nextChild || main.icon);
	      return {
	        children: children,
	        attributes: attributes
	      };
	    };
	  }
	};
	var Layers = {
	  mixout: function mixout() {
	    return {
	      layer: function layer(assembler) {
	        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	        var _params$classes = params.classes,
	          classes = _params$classes === void 0 ? [] : _params$classes;
	        return domVariants({
	          type: 'layer'
	        }, function () {
	          callHooks('beforeDOMElementCreation', {
	            assembler: assembler,
	            params: params
	          });
	          var children = [];
	          assembler(function (args) {
	            Array.isArray(args) ? args.map(function (a) {
	              children = children.concat(a.abstract);
	            }) : children = children.concat(args.abstract);
	          });
	          return [{
	            tag: 'span',
	            attributes: {
	              class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray$2(classes)).join(' ')
	            },
	            children: children
	          }];
	        });
	      }
	    };
	  }
	};
	var LayersCounter = {
	  mixout: function mixout() {
	    return {
	      counter: function counter(content) {
	        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	        var _params$title = params.title,
	          title = _params$title === void 0 ? null : _params$title,
	          _params$classes = params.classes,
	          classes = _params$classes === void 0 ? [] : _params$classes,
	          _params$attributes = params.attributes,
	          attributes = _params$attributes === void 0 ? {} : _params$attributes,
	          _params$styles = params.styles,
	          styles = _params$styles === void 0 ? {} : _params$styles;
	        return domVariants({
	          type: 'counter',
	          content: content
	        }, function () {
	          callHooks('beforeDOMElementCreation', {
	            content: content,
	            params: params
	          });
	          return makeLayersCounterAbstract({
	            content: content.toString(),
	            title: title,
	            extra: {
	              attributes: attributes,
	              styles: styles,
	              classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray$2(classes))
	            }
	          });
	        });
	      }
	    };
	  }
	};
	var LayersText = {
	  mixout: function mixout() {
	    return {
	      text: function text(content) {
	        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	        var _params$transform = params.transform,
	          transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
	          _params$title = params.title,
	          title = _params$title === void 0 ? null : _params$title,
	          _params$classes = params.classes,
	          classes = _params$classes === void 0 ? [] : _params$classes,
	          _params$attributes = params.attributes,
	          attributes = _params$attributes === void 0 ? {} : _params$attributes,
	          _params$styles = params.styles,
	          styles = _params$styles === void 0 ? {} : _params$styles;
	        return domVariants({
	          type: 'text',
	          content: content
	        }, function () {
	          callHooks('beforeDOMElementCreation', {
	            content: content,
	            params: params
	          });
	          return makeLayersTextAbstract({
	            content: content,
	            transform: _objectSpread2$1(_objectSpread2$1({}, meaninglessTransform), transform),
	            title: title,
	            extra: {
	              attributes: attributes,
	              styles: styles,
	              classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray$2(classes))
	            }
	          });
	        });
	      }
	    };
	  },
	  provides: function provides(providers$$1) {
	    providers$$1.generateLayersText = function (node, nodeMeta) {
	      var title = nodeMeta.title,
	        transform = nodeMeta.transform,
	        extra = nodeMeta.extra;
	      var width = null;
	      var height = null;
	      if (IS_IE) {
	        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
	        var boundingClientRect = node.getBoundingClientRect();
	        width = boundingClientRect.width / computedFontSize;
	        height = boundingClientRect.height / computedFontSize;
	      }
	      if (config.autoA11y && !title) {
	        extra.attributes['aria-hidden'] = 'true';
	      }
	      return Promise.resolve([node, makeLayersTextAbstract({
	        content: node.innerHTML,
	        width: width,
	        height: height,
	        transform: transform,
	        title: title,
	        extra: extra,
	        watchable: true
	      })]);
	    };
	  }
	};
	var CLEAN_CONTENT_PATTERN = new RegExp("\"", 'ug');
	var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
	function hexValueFromContent(content) {
	  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
	  var codePoint = codePointAt(cleaned, 0);
	  var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
	  var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
	  return {
	    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
	    isSecondary: isPrependTen || isDoubled
	  };
	}
	function replaceForPosition(node, position) {
	  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
	  return new Promise(function (resolve, reject) {
	    if (node.getAttribute(pendingAttribute) !== null) {
	      // This node is already being processed
	      return resolve();
	    }
	    var children = toArray(node.children);
	    var alreadyProcessedPseudoElement = children.filter(function (c) {
	      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
	    })[0];
	    var styles = WINDOW.getComputedStyle(node, position);
	    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
	    var fontWeight = styles.getPropertyValue('font-weight');
	    var content = styles.getPropertyValue('content');
	    if (alreadyProcessedPseudoElement && !fontFamily) {
	      // If we've already processed it but the current computed style does not result in a font-family,
	      // that probably means that a class name that was previously present to make the icon has been
	      // removed. So we now should delete the icon.
	      node.removeChild(alreadyProcessedPseudoElement);
	      return resolve();
	    } else if (fontFamily && content !== 'none' && content !== '') {
	      var _content = styles.getPropertyValue('content');
	      var family = ~['Sharp'].indexOf(fontFamily[2]) ? FAMILY_SHARP : FAMILY_CLASSIC;
	      var prefix = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[family][fontWeight];
	      var _hexValueFromContent = hexValueFromContent(_content),
	        hexValue = _hexValueFromContent.value,
	        isSecondary = _hexValueFromContent.isSecondary;
	      var isV4 = fontFamily[0].startsWith('FontAwesome');
	      var iconName = byUnicode(prefix, hexValue);
	      var iconIdentifier = iconName;
	      if (isV4) {
	        var iconName4 = byOldUnicode(hexValue);
	        if (iconName4.iconName && iconName4.prefix) {
	          iconName = iconName4.iconName;
	          prefix = iconName4.prefix;
	        }
	      } // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
	      // already done so with the same prefix and iconName

	      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
	        node.setAttribute(pendingAttribute, iconIdentifier);
	        if (alreadyProcessedPseudoElement) {
	          // Delete the old one, since we're replacing it with a new one
	          node.removeChild(alreadyProcessedPseudoElement);
	        }
	        var meta = blankMeta();
	        var extra = meta.extra;
	        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
	        findIcon(iconName, prefix).then(function (main) {
	          var _abstract = makeInlineSvgAbstract(_objectSpread2$1(_objectSpread2$1({}, meta), {}, {
	            icons: {
	              main: main,
	              mask: emptyCanonicalIcon()
	            },
	            prefix: prefix,
	            iconName: iconIdentifier,
	            extra: extra,
	            watchable: true
	          }));
	          var element = DOCUMENT.createElementNS('http://www.w3.org/2000/svg', 'svg');
	          if (position === '::before') {
	            node.insertBefore(element, node.firstChild);
	          } else {
	            node.appendChild(element);
	          }
	          element.outerHTML = _abstract.map(function (a) {
	            return toHtml(a);
	          }).join('\n');
	          node.removeAttribute(pendingAttribute);
	          resolve();
	        }).catch(reject);
	      } else {
	        resolve();
	      }
	    } else {
	      resolve();
	    }
	  });
	}
	function replace$1(node) {
	  return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
	}
	function processable(node) {
	  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
	}
	function searchPseudoElements(root) {
	  if (!IS_DOM) return;
	  return new Promise(function (resolve, reject) {
	    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace$1);
	    var end = perf.begin('searchPseudoElements');
	    disableObservation();
	    Promise.all(operations).then(function () {
	      end();
	      enableObservation();
	      resolve();
	    }).catch(function () {
	      end();
	      enableObservation();
	      reject();
	    });
	  });
	}
	var PseudoElements = {
	  hooks: function hooks() {
	    return {
	      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
	        accumulator.pseudoElementsCallback = searchPseudoElements;
	        return accumulator;
	      }
	    };
	  },
	  provides: function provides(providers$$1) {
	    providers$$1.pseudoElements2svg = function (params) {
	      var _params$node = params.node,
	        node = _params$node === void 0 ? DOCUMENT : _params$node;
	      if (config.searchPseudoElements) {
	        searchPseudoElements(node);
	      }
	    };
	  }
	};
	var _unwatched = false;
	var MutationObserver$1 = {
	  mixout: function mixout() {
	    return {
	      dom: {
	        unwatch: function unwatch() {
	          disableObservation();
	          _unwatched = true;
	        }
	      }
	    };
	  },
	  hooks: function hooks() {
	    return {
	      bootstrap: function bootstrap() {
	        observe(chainHooks('mutationObserverCallbacks', {}));
	      },
	      noAuto: function noAuto() {
	        disconnect();
	      },
	      watch: function watch(params) {
	        var observeMutationsRoot = params.observeMutationsRoot;
	        if (_unwatched) {
	          enableObservation();
	        } else {
	          observe(chainHooks('mutationObserverCallbacks', {
	            observeMutationsRoot: observeMutationsRoot
	          }));
	        }
	      }
	    };
	  }
	};
	var parseTransformString = function parseTransformString(transformString) {
	  var transform = {
	    size: 16,
	    x: 0,
	    y: 0,
	    flipX: false,
	    flipY: false,
	    rotate: 0
	  };
	  return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
	    var parts = n.toLowerCase().split('-');
	    var first = parts[0];
	    var rest = parts.slice(1).join('-');
	    if (first && rest === 'h') {
	      acc.flipX = true;
	      return acc;
	    }
	    if (first && rest === 'v') {
	      acc.flipY = true;
	      return acc;
	    }
	    rest = parseFloat(rest);
	    if (isNaN(rest)) {
	      return acc;
	    }
	    switch (first) {
	      case 'grow':
	        acc.size = acc.size + rest;
	        break;
	      case 'shrink':
	        acc.size = acc.size - rest;
	        break;
	      case 'left':
	        acc.x = acc.x - rest;
	        break;
	      case 'right':
	        acc.x = acc.x + rest;
	        break;
	      case 'up':
	        acc.y = acc.y - rest;
	        break;
	      case 'down':
	        acc.y = acc.y + rest;
	        break;
	      case 'rotate':
	        acc.rotate = acc.rotate + rest;
	        break;
	    }
	    return acc;
	  }, transform);
	};
	var PowerTransforms = {
	  mixout: function mixout() {
	    return {
	      parse: {
	        transform: function transform(transformString) {
	          return parseTransformString(transformString);
	        }
	      }
	    };
	  },
	  hooks: function hooks() {
	    return {
	      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
	        var transformString = node.getAttribute('data-fa-transform');
	        if (transformString) {
	          accumulator.transform = parseTransformString(transformString);
	        }
	        return accumulator;
	      }
	    };
	  },
	  provides: function provides(providers) {
	    providers.generateAbstractTransformGrouping = function (_ref) {
	      var main = _ref.main,
	        transform = _ref.transform,
	        containerWidth = _ref.containerWidth,
	        iconWidth = _ref.iconWidth;
	      var outer = {
	        transform: "translate(".concat(containerWidth / 2, " 256)")
	      };
	      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
	      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
	      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
	      var inner = {
	        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
	      };
	      var path = {
	        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
	      };
	      var operations = {
	        outer: outer,
	        inner: inner,
	        path: path
	      };
	      return {
	        tag: 'g',
	        attributes: _objectSpread2$1({}, operations.outer),
	        children: [{
	          tag: 'g',
	          attributes: _objectSpread2$1({}, operations.inner),
	          children: [{
	            tag: main.icon.tag,
	            children: main.icon.children,
	            attributes: _objectSpread2$1(_objectSpread2$1({}, main.icon.attributes), operations.path)
	          }]
	        }]
	      };
	    };
	  }
	};
	var ALL_SPACE = {
	  x: 0,
	  y: 0,
	  width: '100%',
	  height: '100%'
	};
	function fillBlack(_abstract) {
	  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	  if (_abstract.attributes && (_abstract.attributes.fill || force)) {
	    _abstract.attributes.fill = 'black';
	  }
	  return _abstract;
	}
	function deGroup(_abstract2) {
	  if (_abstract2.tag === 'g') {
	    return _abstract2.children;
	  } else {
	    return [_abstract2];
	  }
	}
	var Masks = {
	  hooks: function hooks() {
	    return {
	      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
	        var maskData = node.getAttribute('data-fa-mask');
	        var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
	          return i.trim();
	        }));
	        if (!mask.prefix) {
	          mask.prefix = getDefaultUsablePrefix();
	        }
	        accumulator.mask = mask;
	        accumulator.maskId = node.getAttribute('data-fa-mask-id');
	        return accumulator;
	      }
	    };
	  },
	  provides: function provides(providers) {
	    providers.generateAbstractMask = function (_ref) {
	      var children = _ref.children,
	        attributes = _ref.attributes,
	        main = _ref.main,
	        mask = _ref.mask,
	        explicitMaskId = _ref.maskId,
	        transform = _ref.transform;
	      var mainWidth = main.width,
	        mainPath = main.icon;
	      var maskWidth = mask.width,
	        maskPath = mask.icon;
	      var trans = transformForSvg({
	        transform: transform,
	        containerWidth: maskWidth,
	        iconWidth: mainWidth
	      });
	      var maskRect = {
	        tag: 'rect',
	        attributes: _objectSpread2$1(_objectSpread2$1({}, ALL_SPACE), {}, {
	          fill: 'white'
	        })
	      };
	      var maskInnerGroupChildrenMixin = mainPath.children ? {
	        children: mainPath.children.map(fillBlack)
	      } : {};
	      var maskInnerGroup = {
	        tag: 'g',
	        attributes: _objectSpread2$1({}, trans.inner),
	        children: [fillBlack(_objectSpread2$1({
	          tag: mainPath.tag,
	          attributes: _objectSpread2$1(_objectSpread2$1({}, mainPath.attributes), trans.path)
	        }, maskInnerGroupChildrenMixin))]
	      };
	      var maskOuterGroup = {
	        tag: 'g',
	        attributes: _objectSpread2$1({}, trans.outer),
	        children: [maskInnerGroup]
	      };
	      var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
	      var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
	      var maskTag = {
	        tag: 'mask',
	        attributes: _objectSpread2$1(_objectSpread2$1({}, ALL_SPACE), {}, {
	          id: maskId,
	          maskUnits: 'userSpaceOnUse',
	          maskContentUnits: 'userSpaceOnUse'
	        }),
	        children: [maskRect, maskOuterGroup]
	      };
	      var defs = {
	        tag: 'defs',
	        children: [{
	          tag: 'clipPath',
	          attributes: {
	            id: clipId
	          },
	          children: deGroup(maskPath)
	        }, maskTag]
	      };
	      children.push(defs, {
	        tag: 'rect',
	        attributes: _objectSpread2$1({
	          fill: 'currentColor',
	          'clip-path': "url(#".concat(clipId, ")"),
	          mask: "url(#".concat(maskId, ")")
	        }, ALL_SPACE)
	      });
	      return {
	        children: children,
	        attributes: attributes
	      };
	    };
	  }
	};
	var MissingIconIndicator = {
	  provides: function provides(providers) {
	    var reduceMotion = false;
	    if (WINDOW.matchMedia) {
	      reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
	    }
	    providers.missingIconAbstract = function () {
	      var gChildren = [];
	      var FILL = {
	        fill: 'currentColor'
	      };
	      var ANIMATION_BASE = {
	        attributeType: 'XML',
	        repeatCount: 'indefinite',
	        dur: '2s'
	      }; // Ring

	      gChildren.push({
	        tag: 'path',
	        attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
	          d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
	        })
	      });
	      var OPACITY_ANIMATE = _objectSpread2$1(_objectSpread2$1({}, ANIMATION_BASE), {}, {
	        attributeName: 'opacity'
	      });
	      var dot = {
	        tag: 'circle',
	        attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
	          cx: '256',
	          cy: '364',
	          r: '28'
	        }),
	        children: []
	      };
	      if (!reduceMotion) {
	        dot.children.push({
	          tag: 'animate',
	          attributes: _objectSpread2$1(_objectSpread2$1({}, ANIMATION_BASE), {}, {
	            attributeName: 'r',
	            values: '28;14;28;28;14;28;'
	          })
	        }, {
	          tag: 'animate',
	          attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
	            values: '1;0;1;1;0;1;'
	          })
	        });
	      }
	      gChildren.push(dot);
	      gChildren.push({
	        tag: 'path',
	        attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
	          opacity: '1',
	          d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
	        }),
	        children: reduceMotion ? [] : [{
	          tag: 'animate',
	          attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
	            values: '1;0;0;0;0;1;'
	          })
	        }]
	      });
	      if (!reduceMotion) {
	        // Exclamation
	        gChildren.push({
	          tag: 'path',
	          attributes: _objectSpread2$1(_objectSpread2$1({}, FILL), {}, {
	            opacity: '0',
	            d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
	          }),
	          children: [{
	            tag: 'animate',
	            attributes: _objectSpread2$1(_objectSpread2$1({}, OPACITY_ANIMATE), {}, {
	              values: '0;0;1;1;0;0;'
	            })
	          }]
	        });
	      }
	      return {
	        tag: 'g',
	        attributes: {
	          'class': 'missing'
	        },
	        children: gChildren
	      };
	    };
	  }
	};
	var SvgSymbols = {
	  hooks: function hooks() {
	    return {
	      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
	        var symbolData = node.getAttribute('data-fa-symbol');
	        var symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
	        accumulator['symbol'] = symbol;
	        return accumulator;
	      }
	    };
	  }
	};
	var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
	registerPlugins(plugins, {
	  mixoutsTo: api
	});
	api.noAuto;
	api.config;
	api.library;
	api.dom;
	var parse$1$1 = api.parse;
	api.findIconDefinition;
	api.toHtml;
	var icon = api.icon;
	api.layer;
	api.text;
	api.counter;

	var propTypes = {exports: {}};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = ReactPropTypesSecret_1;
	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;
	var factoryWithThrowingShims = function () {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	    err.name = 'Invariant Violation';
	    throw err;
	  }
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,
	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };
	  ReactPropTypes.PropTypes = ReactPropTypes;
	  return ReactPropTypes;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  propTypes.exports = factoryWithThrowingShims();
	}

	var propTypesExports = propTypes.exports;
	var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);
	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    enumerableOnly && (symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    })), keys.push.apply(keys, symbols);
	  }
	  return keys;
	}
	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = null != arguments[i] ? arguments[i] : {};
	    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
	      _defineProperty(target, key, source[key]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
	      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	    });
	  }
	  return target;
	}
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof(obj);
	}
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	  return obj;
	}
	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;
	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }
	  return target;
	}
	function _objectWithoutProperties$1(source, excluded) {
	  if (source == null) return {};
	  var target = _objectWithoutPropertiesLoose(source, excluded);
	  var key, i;
	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }
	  return target;
	}
	function _toConsumableArray$1(arr) {
	  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
	}
	function _arrayWithoutHoles$1(arr) {
	  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
	}
	function _iterableToArray$1(iter) {
	  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	}
	function _unsupportedIterableToArray$1(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
	}
	function _arrayLikeToArray$1(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	  return arr2;
	}
	function _nonIterableSpread$1() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	// Get CSS class list from a props object
	function classList(props) {
	  var _classes;
	  var beat = props.beat,
	    fade = props.fade,
	    beatFade = props.beatFade,
	    bounce = props.bounce,
	    shake = props.shake,
	    flash = props.flash,
	    spin = props.spin,
	    spinPulse = props.spinPulse,
	    spinReverse = props.spinReverse,
	    pulse = props.pulse,
	    fixedWidth = props.fixedWidth,
	    inverse = props.inverse,
	    border = props.border,
	    listItem = props.listItem,
	    flip = props.flip,
	    size = props.size,
	    rotation = props.rotation,
	    pull = props.pull; // map of CSS class names to properties

	  var classes = (_classes = {
	    'fa-beat': beat,
	    'fa-fade': fade,
	    'fa-beat-fade': beatFade,
	    'fa-bounce': bounce,
	    'fa-shake': shake,
	    'fa-flash': flash,
	    'fa-spin': spin,
	    'fa-spin-reverse': spinReverse,
	    'fa-spin-pulse': spinPulse,
	    'fa-pulse': pulse,
	    'fa-fw': fixedWidth,
	    'fa-inverse': inverse,
	    'fa-border': border,
	    'fa-li': listItem,
	    'fa-flip': flip === true,
	    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
	    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
	  }, _defineProperty(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
	  // return an array of the keys where the value for the key is not null

	  return Object.keys(classes).map(function (key) {
	    return classes[key] ? key : null;
	  }).filter(function (key) {
	    return key;
	  });
	}

	// Camelize taken from humps
	// humps is copyright © 2012+ Dom Christie
	// Released under the MIT license.
	// Performant way to determine if object coerces to a number
	function _isNumerical(obj) {
	  obj = obj - 0; // eslint-disable-next-line no-self-compare

	  return obj === obj;
	}
	function camelize(string) {
	  if (_isNumerical(string)) {
	    return string;
	  } // eslint-disable-next-line no-useless-escape

	  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
	    return chr ? chr.toUpperCase() : '';
	  }); // Ensure 1st char is always lowercase

	  return string.substr(0, 1).toLowerCase() + string.substr(1);
	}
	var _excluded$7 = ["style"];
	function capitalize(val) {
	  return val.charAt(0).toUpperCase() + val.slice(1);
	}
	function styleToObject(style) {
	  return style.split(';').map(function (s) {
	    return s.trim();
	  }).filter(function (s) {
	    return s;
	  }).reduce(function (acc, pair) {
	    var i = pair.indexOf(':');
	    var prop = camelize(pair.slice(0, i));
	    var value = pair.slice(i + 1).trim();
	    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
	    return acc;
	  }, {});
	}
	function convert(createElement, element) {
	  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  if (typeof element === 'string') {
	    return element;
	  }
	  var children = (element.children || []).map(function (child) {
	    return convert(createElement, child);
	  });
	  /* eslint-disable dot-notation */

	  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
	    var val = element.attributes[key];
	    switch (key) {
	      case 'class':
	        acc.attrs['className'] = val;
	        delete element.attributes['class'];
	        break;
	      case 'style':
	        acc.attrs['style'] = styleToObject(val);
	        break;
	      default:
	        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
	          acc.attrs[key.toLowerCase()] = val;
	        } else {
	          acc.attrs[camelize(key)] = val;
	        }
	    }
	    return acc;
	  }, {
	    attrs: {}
	  });
	  var _extraProps$style = extraProps.style,
	    existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
	    remaining = _objectWithoutProperties$1(extraProps, _excluded$7);
	  mixins.attrs['style'] = _objectSpread2(_objectSpread2({}, mixins.attrs['style']), existingStyle);
	  /* eslint-enable */

	  return createElement.apply(void 0, [element.tag, _objectSpread2(_objectSpread2({}, mixins.attrs), remaining)].concat(_toConsumableArray$1(children)));
	}
	var PRODUCTION = false;
	try {
	  PRODUCTION = 'production' === 'production';
	} catch (e) {}
	function log() {
	  if (!PRODUCTION && console && typeof console.error === 'function') {
	    var _console;
	    (_console = console).error.apply(_console, arguments);
	  }
	}
	function normalizeIconArgs(icon) {
	  // this has everything that it needs to be rendered which means it was probably imported
	  // directly from an icon svg package
	  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
	    return icon;
	  }
	  if (parse$1$1.icon) {
	    return parse$1$1.icon(icon);
	  } // if the icon is null, there's nothing to do

	  if (icon === null) {
	    return null;
	  } // if the icon is an object and has a prefix and an icon name, return it

	  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName) {
	    return icon;
	  } // if it's an array with length of two

	  if (Array.isArray(icon) && icon.length === 2) {
	    // use the first item as prefix, second as icon name
	    return {
	      prefix: icon[0],
	      iconName: icon[1]
	    };
	  } // if it's a string, use it as the icon name

	  if (typeof icon === 'string') {
	    return {
	      prefix: 'fas',
	      iconName: icon
	    };
	  }
	}

	// creates an object with a key of key
	// and a value of value
	// if certain conditions are met
	function objectWithKey(key, value) {
	  // if the value is a non-empty array
	  // or it's not an array but it is truthy
	  // then create the object with the key and the value
	  // if not, return an empty array
	  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
	}
	var FontAwesomeIcon = /*#__PURE__*/React.forwardRef(function (props, ref) {
	  var iconArgs = props.icon,
	    maskArgs = props.mask,
	    symbol = props.symbol,
	    className = props.className,
	    title = props.title,
	    titleId = props.titleId,
	    maskId = props.maskId;
	  var iconLookup = normalizeIconArgs(iconArgs);
	  var classes = objectWithKey('classes', [].concat(_toConsumableArray$1(classList(props)), _toConsumableArray$1(className.split(' '))));
	  var transform = objectWithKey('transform', typeof props.transform === 'string' ? parse$1$1.transform(props.transform) : props.transform);
	  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
	  var renderedIcon = icon(iconLookup, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes), transform), mask), {}, {
	    symbol: symbol,
	    title: title,
	    titleId: titleId,
	    maskId: maskId
	  }));
	  if (!renderedIcon) {
	    log('Could not find icon', iconLookup);
	    return null;
	  }
	  var abstract = renderedIcon.abstract;
	  var extraProps = {
	    ref: ref
	  };
	  Object.keys(props).forEach(function (key) {
	    // eslint-disable-next-line no-prototype-builtins
	    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
	      extraProps[key] = props[key];
	    }
	  });
	  return convertCurry(abstract[0], extraProps);
	});
	FontAwesomeIcon.displayName = 'FontAwesomeIcon';
	FontAwesomeIcon.propTypes = {
	  beat: PropTypes.bool,
	  border: PropTypes.bool,
	  beatFade: PropTypes.bool,
	  bounce: PropTypes.bool,
	  className: PropTypes.string,
	  fade: PropTypes.bool,
	  flash: PropTypes.bool,
	  mask: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
	  maskId: PropTypes.string,
	  fixedWidth: PropTypes.bool,
	  inverse: PropTypes.bool,
	  flip: PropTypes.oneOf([true, false, 'horizontal', 'vertical', 'both']),
	  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
	  listItem: PropTypes.bool,
	  pull: PropTypes.oneOf(['right', 'left']),
	  pulse: PropTypes.bool,
	  rotation: PropTypes.oneOf([0, 90, 180, 270]),
	  shake: PropTypes.bool,
	  size: PropTypes.oneOf(['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
	  spin: PropTypes.bool,
	  spinPulse: PropTypes.bool,
	  spinReverse: PropTypes.bool,
	  symbol: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	  title: PropTypes.string,
	  titleId: PropTypes.string,
	  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	  swapOpacity: PropTypes.bool
	};
	FontAwesomeIcon.defaultProps = {
	  border: false,
	  className: '',
	  mask: null,
	  maskId: null,
	  fixedWidth: false,
	  inverse: false,
	  flip: false,
	  icon: null,
	  listItem: false,
	  pull: null,
	  pulse: false,
	  rotation: null,
	  size: null,
	  spin: false,
	  spinPulse: false,
	  spinReverse: false,
	  beat: false,
	  fade: false,
	  beatFade: false,
	  bounce: false,
	  shake: false,
	  symbol: false,
	  title: '',
	  titleId: null,
	  transform: null,
	  swapOpacity: false
	};
	var convertCurry = convert.bind(null, React.createElement);

	var faCircleExclamation={prefix:'fas',iconName:'circle-exclamation',icon:[512,512,["exclamation-circle"],"f06a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]};var faExclamationCircle=faCircleExclamation;var faCircleCheck={prefix:'fas',iconName:'circle-check',icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]};var faCheckCircle=faCircleCheck;var faCircleXmark={prefix:'fas',iconName:'circle-xmark',icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]};var faTimesCircle=faCircleXmark;

	const defaultIcons = {
	  success: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
	    icon: faCheckCircle
	  }),
	  error: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
	    icon: faTimesCircle
	  }),
	  info: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
	    icon: faExclamationCircle
	  })
	};
	var defaultIcons$1 = defaultIcons;

	const NotificationsComponent = ({
	  styles,
	  icons
	}) => {
	  const dispatch = useDispatch();
	  const notifications = useSelector(({
	    notificationReducer
	  }) => Object.values(notificationReducer), shallowEqual);
	  const easyDispatch = props => () => {
	    dispatch({
	      type: props.payload ? 'NOTIFICATION_CONFIRMATION' : 'NOTIFICATION_POP',
	      ...props
	    });
	  };
	  const _styles = {
	    ...defaultStyle,
	    ...styles
	  };
	  const _icons = {
	    ...defaultIcons$1,
	    ...icons
	  };
	  const isOverlay = notifications.find(({
	    blocking
	  }) => Boolean(blocking));
	  return /*#__PURE__*/React.createElement(Container, {
	    styles: _styles
	  }, /*#__PURE__*/React.createElement(ContainerInner, {
	    styles: _styles
	  }, isOverlay ? /*#__PURE__*/React.createElement(Overlay, {
	    styles: _styles
	  }) : null, notifications.map(({
	    label,
	    id,
	    payload,
	    type,
	    buttons,
	    duration = 5000
	  }) => /*#__PURE__*/React.createElement(Notification, {
	    timer: buttons === undefined,
	    key: id,
	    styles: _styles[type],
	    duration: duration
	  }, /*#__PURE__*/React.createElement(NotificationInner, {
	    styles: _styles[type]
	  }, _icons[type] ? /*#__PURE__*/React.createElement(Icon, {
	    styles: _styles[type]
	  }, _icons[type]) : null, /*#__PURE__*/React.createElement(Label, {
	    styles: _styles[type]
	  }, label)), buttons === 'yesNo' ? /*#__PURE__*/React.createElement(ButtonsOuter, {
	    styles: _styles[type]
	  }, /*#__PURE__*/React.createElement(Button, {
	    styles: _styles[type],
	    half: true,
	    onClick: easyDispatch({
	      id,
	      payload
	    })
	  }, "Yes"), /*#__PURE__*/React.createElement(Button, {
	    styles: _styles[type],
	    half: true,
	    onClick: easyDispatch({
	      id
	    })
	  }, "No")) : null, buttons === 'ok' ? /*#__PURE__*/React.createElement(ButtonsOuter, {
	    styles: _styles[type]
	  }, /*#__PURE__*/React.createElement(Button, {
	    styles: _styles[type],
	    onClick: easyDispatch({
	      id,
	      payload
	    })
	  }, "Ok")) : null))));
	};
	var Notifications = NotificationsComponent;

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
	  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
	  if (null != _i) {
	    var _s,
	      _e,
	      _x,
	      _r,
	      _arr = [],
	      _n = !0,
	      _d = !1;
	    try {
	      if (_x = (_i = _i.call(arr)).next, 0 === i) {
	        if (Object(_i) !== _i) return;
	        _n = !1;
	      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
	    } catch (err) {
	      _d = !0, _e = err;
	    } finally {
	      try {
	        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	    return _arr;
	  }
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	  return arr2;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = _objectWithoutPropertiesLoose$1(source, excluded);
	  var key, i;
	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }
	  return target;
	}

	var _excluded$6 = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
	function useStateManager(_ref) {
	  var _ref$defaultInputValu = _ref.defaultInputValue,
	    defaultInputValue = _ref$defaultInputValu === void 0 ? '' : _ref$defaultInputValu,
	    _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen,
	    defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe,
	    _ref$defaultValue = _ref.defaultValue,
	    defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
	    propsInputValue = _ref.inputValue,
	    propsMenuIsOpen = _ref.menuIsOpen,
	    propsOnChange = _ref.onChange,
	    propsOnInputChange = _ref.onInputChange,
	    propsOnMenuClose = _ref.onMenuClose,
	    propsOnMenuOpen = _ref.onMenuOpen,
	    propsValue = _ref.value,
	    restSelectProps = _objectWithoutProperties(_ref, _excluded$6);
	  var _useState = reactExports.useState(propsInputValue !== undefined ? propsInputValue : defaultInputValue),
	    _useState2 = _slicedToArray(_useState, 2),
	    stateInputValue = _useState2[0],
	    setStateInputValue = _useState2[1];
	  var _useState3 = reactExports.useState(propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen),
	    _useState4 = _slicedToArray(_useState3, 2),
	    stateMenuIsOpen = _useState4[0],
	    setStateMenuIsOpen = _useState4[1];
	  var _useState5 = reactExports.useState(propsValue !== undefined ? propsValue : defaultValue),
	    _useState6 = _slicedToArray(_useState5, 2),
	    stateValue = _useState6[0],
	    setStateValue = _useState6[1];
	  var onChange = reactExports.useCallback(function (value, actionMeta) {
	    if (typeof propsOnChange === 'function') {
	      propsOnChange(value, actionMeta);
	    }
	    setStateValue(value);
	  }, [propsOnChange]);
	  var onInputChange = reactExports.useCallback(function (value, actionMeta) {
	    var newValue;
	    if (typeof propsOnInputChange === 'function') {
	      newValue = propsOnInputChange(value, actionMeta);
	    }
	    setStateInputValue(newValue !== undefined ? newValue : value);
	  }, [propsOnInputChange]);
	  var onMenuOpen = reactExports.useCallback(function () {
	    if (typeof propsOnMenuOpen === 'function') {
	      propsOnMenuOpen();
	    }
	    setStateMenuIsOpen(true);
	  }, [propsOnMenuOpen]);
	  var onMenuClose = reactExports.useCallback(function () {
	    if (typeof propsOnMenuClose === 'function') {
	      propsOnMenuClose();
	    }
	    setStateMenuIsOpen(false);
	  }, [propsOnMenuClose]);
	  var inputValue = propsInputValue !== undefined ? propsInputValue : stateInputValue;
	  var menuIsOpen = propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
	  var value = propsValue !== undefined ? propsValue : stateValue;
	  return _objectSpread2$2(_objectSpread2$2({}, restSelectProps), {}, {
	    inputValue: inputValue,
	    menuIsOpen: menuIsOpen,
	    onChange: onChange,
	    onInputChange: onInputChange,
	    onMenuClose: onMenuClose,
	    onMenuOpen: onMenuOpen,
	    value: value
	  });
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
	  }
	}
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	  return _setPrototypeOf(o, p);
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;
	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }
	  return _assertThisInitialized(self);
	}

	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();
	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf(Derived),
	      result;
	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf(this).constructor;
	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }
	    return _possibleConstructorReturn(this, result);
	  };
	}

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	}

	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	}

	/*

	Based off glamor's StyleSheet, thanks Sunil ❤️

	high performance StyleSheet for css-in-js systems

	- uses multiple style tags behind the scenes for millions of rules
	- uses `insertRule` for appending in production for *much* faster performance

	// usage

	import { StyleSheet } from '@emotion/sheet'

	let styleSheet = new StyleSheet({ key: '', container: document.head })

	styleSheet.insert('#box { border: 1px solid red; }')
	- appends a css rule into the stylesheet

	styleSheet.flush()
	- empties the stylesheet of all its contents

	*/
	// $FlowFixMe
	function sheetForTag(tag) {
	  if (tag.sheet) {
	    // $FlowFixMe
	    return tag.sheet;
	  } // this weirdness brought to you by firefox

	  /* istanbul ignore next */

	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      // $FlowFixMe
	      return document.styleSheets[i];
	    }
	  }
	}
	function createStyleElement(options) {
	  var tag = document.createElement('style');
	  tag.setAttribute('data-emotion', options.key);
	  if (options.nonce !== undefined) {
	    tag.setAttribute('nonce', options.nonce);
	  }
	  tag.appendChild(document.createTextNode(''));
	  tag.setAttribute('data-s', '');
	  return tag;
	}
	var StyleSheet = /*#__PURE__*/function () {
	  // Using Node instead of HTMLElement since container may be a ShadowRoot
	  function StyleSheet(options) {
	    var _this = this;
	    this._insertTag = function (tag) {
	      var before;
	      if (_this.tags.length === 0) {
	        if (_this.insertionPoint) {
	          before = _this.insertionPoint.nextSibling;
	        } else if (_this.prepend) {
	          before = _this.container.firstChild;
	        } else {
	          before = _this.before;
	        }
	      } else {
	        before = _this.tags[_this.tags.length - 1].nextSibling;
	      }
	      _this.container.insertBefore(tag, before);
	      _this.tags.push(tag);
	    };
	    this.isSpeedy = options.speedy === undefined ? 'production' === 'production' : options.speedy;
	    this.tags = [];
	    this.ctr = 0;
	    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

	    this.key = options.key;
	    this.container = options.container;
	    this.prepend = options.prepend;
	    this.insertionPoint = options.insertionPoint;
	    this.before = null;
	  }
	  var _proto = StyleSheet.prototype;
	  _proto.hydrate = function hydrate(nodes) {
	    nodes.forEach(this._insertTag);
	  };
	  _proto.insert = function insert(rule) {
	    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
	    // it's 1 in dev because we insert source maps that map a single rule to a location
	    // and you can only have one source map per style tag
	    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
	      this._insertTag(createStyleElement(this));
	    }
	    var tag = this.tags[this.tags.length - 1];
	    if (this.isSpeedy) {
	      var sheet = sheetForTag(tag);
	      try {
	        // this is the ultrafast version, works across browsers
	        // the big drawback is that the css won't be editable in devtools
	        sheet.insertRule(rule, sheet.cssRules.length);
	      } catch (e) {
	      }
	    } else {
	      tag.appendChild(document.createTextNode(rule));
	    }
	    this.ctr++;
	  };
	  _proto.flush = function flush() {
	    // $FlowFixMe
	    this.tags.forEach(function (tag) {
	      return tag.parentNode && tag.parentNode.removeChild(tag);
	    });
	    this.tags = [];
	    this.ctr = 0;
	  };
	  return StyleSheet;
	}();

	var MS = '-ms-';
	var MOZ = '-moz-';
	var WEBKIT = '-webkit-';
	var COMMENT = 'comm';
	var RULESET = 'rule';
	var DECLARATION = 'decl';
	var IMPORT = '@import';
	var KEYFRAMES = '@keyframes';
	var LAYER = '@layer';

	/**
	 * @param {number}
	 * @return {number}
	 */
	var abs = Math.abs;

	/**
	 * @param {number}
	 * @return {string}
	 */
	var from = String.fromCharCode;

	/**
	 * @param {object}
	 * @return {object}
	 */
	var assign = Object.assign;

	/**
	 * @param {string} value
	 * @param {number} length
	 * @return {number}
	 */
	function hash(value, length) {
	  return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
	}

	/**
	 * @param {string} value
	 * @return {string}
	 */
	function trim(value) {
	  return value.trim();
	}

	/**
	 * @param {string} value
	 * @param {RegExp} pattern
	 * @return {string?}
	 */
	function match(value, pattern) {
	  return (value = pattern.exec(value)) ? value[0] : value;
	}

	/**
	 * @param {string} value
	 * @param {(string|RegExp)} pattern
	 * @param {string} replacement
	 * @return {string}
	 */
	function replace(value, pattern, replacement) {
	  return value.replace(pattern, replacement);
	}

	/**
	 * @param {string} value
	 * @param {string} search
	 * @return {number}
	 */
	function indexof(value, search) {
	  return value.indexOf(search);
	}

	/**
	 * @param {string} value
	 * @param {number} index
	 * @return {number}
	 */
	function charat(value, index) {
	  return value.charCodeAt(index) | 0;
	}

	/**
	 * @param {string} value
	 * @param {number} begin
	 * @param {number} end
	 * @return {string}
	 */
	function substr(value, begin, end) {
	  return value.slice(begin, end);
	}

	/**
	 * @param {string} value
	 * @return {number}
	 */
	function strlen(value) {
	  return value.length;
	}

	/**
	 * @param {any[]} value
	 * @return {number}
	 */
	function sizeof(value) {
	  return value.length;
	}

	/**
	 * @param {any} value
	 * @param {any[]} array
	 * @return {any}
	 */
	function append(value, array) {
	  return array.push(value), value;
	}

	/**
	 * @param {string[]} array
	 * @param {function} callback
	 * @return {string}
	 */
	function combine(array, callback) {
	  return array.map(callback).join('');
	}

	var line = 1;
	var column = 1;
	var length = 0;
	var position = 0;
	var character = 0;
	var characters = '';

	/**
	 * @param {string} value
	 * @param {object | null} root
	 * @param {object | null} parent
	 * @param {string} type
	 * @param {string[] | string} props
	 * @param {object[] | string} children
	 * @param {number} length
	 */
	function node(value, root, parent, type, props, children, length) {
	  return {
	    value: value,
	    root: root,
	    parent: parent,
	    type: type,
	    props: props,
	    children: children,
	    line: line,
	    column: column,
	    length: length,
	    return: ''
	  };
	}

	/**
	 * @param {object} root
	 * @param {object} props
	 * @return {object}
	 */
	function copy(root, props) {
	  return assign(node('', null, null, '', null, null, 0), root, {
	    length: -root.length
	  }, props);
	}

	/**
	 * @return {number}
	 */
	function char() {
	  return character;
	}

	/**
	 * @return {number}
	 */
	function prev() {
	  character = position > 0 ? charat(characters, --position) : 0;
	  if (column--, character === 10) column = 1, line--;
	  return character;
	}

	/**
	 * @return {number}
	 */
	function next() {
	  character = position < length ? charat(characters, position++) : 0;
	  if (column++, character === 10) column = 1, line++;
	  return character;
	}

	/**
	 * @return {number}
	 */
	function peek() {
	  return charat(characters, position);
	}

	/**
	 * @return {number}
	 */
	function caret() {
	  return position;
	}

	/**
	 * @param {number} begin
	 * @param {number} end
	 * @return {string}
	 */
	function slice(begin, end) {
	  return substr(characters, begin, end);
	}

	/**
	 * @param {number} type
	 * @return {number}
	 */
	function token(type) {
	  switch (type) {
	    // \0 \t \n \r \s whitespace token
	    case 0:
	    case 9:
	    case 10:
	    case 13:
	    case 32:
	      return 5;
	    // ! + , / > @ ~ isolate token
	    case 33:
	    case 43:
	    case 44:
	    case 47:
	    case 62:
	    case 64:
	    case 126:
	    // ; { } breakpoint token
	    case 59:
	    case 123:
	    case 125:
	      return 4;
	    // : accompanied token
	    case 58:
	      return 3;
	    // " ' ( [ opening delimit token
	    case 34:
	    case 39:
	    case 40:
	    case 91:
	      return 2;
	    // ) ] closing delimit token
	    case 41:
	    case 93:
	      return 1;
	  }
	  return 0;
	}

	/**
	 * @param {string} value
	 * @return {any[]}
	 */
	function alloc(value) {
	  return line = column = 1, length = strlen(characters = value), position = 0, [];
	}

	/**
	 * @param {any} value
	 * @return {any}
	 */
	function dealloc(value) {
	  return characters = '', value;
	}

	/**
	 * @param {number} type
	 * @return {string}
	 */
	function delimit(type) {
	  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
	}

	/**
	 * @param {number} type
	 * @return {string}
	 */
	function whitespace(type) {
	  while (character = peek()) if (character < 33) next();else break;
	  return token(type) > 2 || token(character) > 3 ? '' : ' ';
	}

	/**
	 * @param {number} index
	 * @param {number} count
	 * @return {string}
	 */
	function escaping(index, count) {
	  while (--count && next())
	  // not 0-9 A-F a-f
	  if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
	  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
	}

	/**
	 * @param {number} type
	 * @return {number}
	 */
	function delimiter(type) {
	  while (next()) switch (character) {
	    // ] ) " '
	    case type:
	      return position;
	    // " '
	    case 34:
	    case 39:
	      if (type !== 34 && type !== 39) delimiter(character);
	      break;
	    // (
	    case 40:
	      if (type === 41) delimiter(type);
	      break;
	    // \
	    case 92:
	      next();
	      break;
	  }
	  return position;
	}

	/**
	 * @param {number} type
	 * @param {number} index
	 * @return {number}
	 */
	function commenter(type, index) {
	  while (next())
	  // //
	  if (type + character === 47 + 10) break;
	  // /*
	  else if (type + character === 42 + 42 && peek() === 47) break;
	  return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next());
	}

	/**
	 * @param {number} index
	 * @return {string}
	 */
	function identifier(index) {
	  while (!token(peek())) next();
	  return slice(index, position);
	}

	/**
	 * @param {string} value
	 * @return {object[]}
	 */
	function compile(value) {
	  return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value));
	}

	/**
	 * @param {string} value
	 * @param {object} root
	 * @param {object?} parent
	 * @param {string[]} rule
	 * @param {string[]} rules
	 * @param {string[]} rulesets
	 * @param {number[]} pseudo
	 * @param {number[]} points
	 * @param {string[]} declarations
	 * @return {object}
	 */
	function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	  var index = 0;
	  var offset = 0;
	  var length = pseudo;
	  var atrule = 0;
	  var property = 0;
	  var previous = 0;
	  var variable = 1;
	  var scanning = 1;
	  var ampersand = 1;
	  var character = 0;
	  var type = '';
	  var props = rules;
	  var children = rulesets;
	  var reference = rule;
	  var characters = type;
	  while (scanning) switch (previous = character, character = next()) {
	    // (
	    case 40:
	      if (previous != 108 && charat(characters, length - 1) == 58) {
	        if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1) ampersand = -1;
	        break;
	      }
	    // " ' [
	    case 34:
	    case 39:
	    case 91:
	      characters += delimit(character);
	      break;
	    // \t \n \r \s
	    case 9:
	    case 10:
	    case 13:
	    case 32:
	      characters += whitespace(previous);
	      break;
	    // \
	    case 92:
	      characters += escaping(caret() - 1, 7);
	      continue;
	    // /
	    case 47:
	      switch (peek()) {
	        case 42:
	        case 47:
	          append(comment(commenter(next(), caret()), root, parent), declarations);
	          break;
	        default:
	          characters += '/';
	      }
	      break;
	    // {
	    case 123 * variable:
	      points[index++] = strlen(characters) * ampersand;
	    // } ; \0
	    case 125 * variable:
	    case 59:
	    case 0:
	      switch (character) {
	        // \0 }
	        case 0:
	        case 125:
	          scanning = 0;
	        // ;
	        case 59 + offset:
	          if (ampersand == -1) characters = replace(characters, /\f/g, '');
	          if (property > 0 && strlen(characters) - length) append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
	          break;
	        // @ ;
	        case 59:
	          characters += ';';
	        // { rule/at-rule
	        default:
	          append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
	          if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);else switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
	            // d l m s
	            case 100:
	            case 108:
	            case 109:
	            case 115:
	              parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
	              break;
	            default:
	              parse(characters, reference, reference, reference, [''], children, 0, points, children);
	          }
	      }
	      index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
	      break;
	    // :
	    case 58:
	      length = 1 + strlen(characters), property = previous;
	    default:
	      if (variable < 1) if (character == 123) --variable;else if (character == 125 && variable++ == 0 && prev() == 125) continue;
	      switch (characters += from(character), character * variable) {
	        // &
	        case 38:
	          ampersand = offset > 0 ? 1 : (characters += '\f', -1);
	          break;
	        // ,
	        case 44:
	          points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
	          break;
	        // @
	        case 64:
	          // -
	          if (peek() === 45) characters += delimit(next());
	          atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
	          break;
	        // -
	        case 45:
	          if (previous === 45 && strlen(characters) == 2) variable = 0;
	      }
	  }
	  return rulesets;
	}

	/**
	 * @param {string} value
	 * @param {object} root
	 * @param {object?} parent
	 * @param {number} index
	 * @param {number} offset
	 * @param {string[]} rules
	 * @param {number[]} points
	 * @param {string} type
	 * @param {string[]} props
	 * @param {string[]} children
	 * @param {number} length
	 * @return {object}
	 */
	function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
	  var post = offset - 1;
	  var rule = offset === 0 ? rules : [''];
	  var size = sizeof(rule);
	  for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
	  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length);
	}

	/**
	 * @param {number} value
	 * @param {object} root
	 * @param {object?} parent
	 * @return {object}
	 */
	function comment(value, root, parent) {
	  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
	}

	/**
	 * @param {string} value
	 * @param {object} root
	 * @param {object?} parent
	 * @param {number} length
	 * @return {object}
	 */
	function declaration(value, root, parent, length) {
	  return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length);
	}

	/**
	 * @param {object[]} children
	 * @param {function} callback
	 * @return {string}
	 */
	function serialize(children, callback) {
	  var output = '';
	  var length = sizeof(children);
	  for (var i = 0; i < length; i++) output += callback(children[i], i, children, callback) || '';
	  return output;
	}

	/**
	 * @param {object} element
	 * @param {number} index
	 * @param {object[]} children
	 * @param {function} callback
	 * @return {string}
	 */
	function stringify(element, index, children, callback) {
	  switch (element.type) {
	    case LAYER:
	      if (element.children.length) break;
	    case IMPORT:
	    case DECLARATION:
	      return element.return = element.return || element.value;
	    case COMMENT:
	      return '';
	    case KEYFRAMES:
	      return element.return = element.value + '{' + serialize(element.children, callback) + '}';
	    case RULESET:
	      element.value = element.props.join(',');
	  }
	  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
	}

	/**
	 * @param {function[]} collection
	 * @return {function}
	 */
	function middleware(collection) {
	  var length = sizeof(collection);
	  return function (element, index, children, callback) {
	    var output = '';
	    for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || '';
	    return output;
	  };
	}

	/**
	 * @param {function} callback
	 * @return {function}
	 */
	function rulesheet(callback) {
	  return function (element) {
	    if (!element.root) if (element = element.return) callback(element);
	  };
	}

	var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
	  var previous = 0;
	  var character = 0;
	  while (true) {
	    previous = character;
	    character = peek(); // &\f

	    if (previous === 38 && character === 12) {
	      points[index] = 1;
	    }
	    if (token(character)) {
	      break;
	    }
	    next();
	  }
	  return slice(begin, position);
	};
	var toRules = function toRules(parsed, points) {
	  // pretend we've started with a comma
	  var index = -1;
	  var character = 44;
	  do {
	    switch (token(character)) {
	      case 0:
	        // &\f
	        if (character === 38 && peek() === 12) {
	          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
	          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
	          // and when it should just concatenate the outer and inner selectors
	          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
	          points[index] = 1;
	        }
	        parsed[index] += identifierWithPointTracking(position - 1, points, index);
	        break;
	      case 2:
	        parsed[index] += delimit(character);
	        break;
	      case 4:
	        // comma
	        if (character === 44) {
	          // colon
	          parsed[++index] = peek() === 58 ? '&\f' : '';
	          points[index] = parsed[index].length;
	          break;
	        }

	      // fallthrough

	      default:
	        parsed[index] += from(character);
	    }
	  } while (character = next());
	  return parsed;
	};
	var getRules = function getRules(value, points) {
	  return dealloc(toRules(alloc(value), points));
	}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11

	var fixedElements = /* #__PURE__ */new WeakMap();
	var compat = function compat(element) {
	  if (element.type !== 'rule' || !element.parent ||
	  // positive .length indicates that this rule contains pseudo
	  // negative .length indicates that this rule has been already prefixed
	  element.length < 1) {
	    return;
	  }
	  var value = element.value,
	    parent = element.parent;
	  var isImplicitRule = element.column === parent.column && element.line === parent.line;
	  while (parent.type !== 'rule') {
	    parent = parent.parent;
	    if (!parent) return;
	  } // short-circuit for the simplest case

	  if (element.props.length === 1 && value.charCodeAt(0) !== 58
	  /* colon */ && !fixedElements.get(parent)) {
	    return;
	  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
	  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"

	  if (isImplicitRule) {
	    return;
	  }
	  fixedElements.set(element, true);
	  var points = [];
	  var rules = getRules(value, points);
	  var parentRules = parent.props;
	  for (var i = 0, k = 0; i < rules.length; i++) {
	    for (var j = 0; j < parentRules.length; j++, k++) {
	      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
	    }
	  }
	};
	var removeLabel = function removeLabel(element) {
	  if (element.type === 'decl') {
	    var value = element.value;
	    if (
	    // charcode for l
	    value.charCodeAt(0) === 108 &&
	    // charcode for b
	    value.charCodeAt(2) === 98) {
	      // this ignores label
	      element["return"] = '';
	      element.value = '';
	    }
	  }
	};

	/* eslint-disable no-fallthrough */

	function prefix(value, length) {
	  switch (hash(value, length)) {
	    // color-adjust
	    case 5103:
	      return WEBKIT + 'print-' + value + value;
	    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

	    case 5737:
	    case 4201:
	    case 3177:
	    case 3433:
	    case 1641:
	    case 4457:
	    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

	    case 5572:
	    case 6356:
	    case 5844:
	    case 3191:
	    case 6645:
	    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

	    case 6391:
	    case 5879:
	    case 5623:
	    case 6135:
	    case 4599:
	    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

	    case 4215:
	    case 6389:
	    case 5109:
	    case 5365:
	    case 5621:
	    case 3829:
	      return WEBKIT + value + value;
	    // appearance, user-select, transform, hyphens, text-size-adjust

	    case 5349:
	    case 4246:
	    case 4810:
	    case 6968:
	    case 2756:
	      return WEBKIT + value + MOZ + value + MS + value + value;
	    // flex, flex-direction

	    case 6828:
	    case 4268:
	      return WEBKIT + value + MS + value + value;
	    // order

	    case 6165:
	      return WEBKIT + value + MS + 'flex-' + value + value;
	    // align-items

	    case 5187:
	      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
	    // align-self

	    case 5443:
	      return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
	    // align-content

	    case 4675:
	      return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
	    // flex-shrink

	    case 5548:
	      return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
	    // flex-basis

	    case 5292:
	      return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
	    // flex-grow

	    case 6060:
	      return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
	    // transition

	    case 4554:
	      return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
	    // cursor

	    case 6187:
	      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
	    // background, background-image

	    case 5495:
	    case 3959:
	      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
	    // justify-content

	    case 4968:
	      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
	    // (margin|padding)-inline-(start|end)

	    case 4095:
	    case 3583:
	    case 4068:
	    case 2532:
	      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
	    // (min|max)?(width|height|inline-size|block-size)

	    case 8116:
	    case 7059:
	    case 5753:
	    case 5535:
	    case 5445:
	    case 5701:
	    case 4933:
	    case 4677:
	    case 5533:
	    case 5789:
	    case 5021:
	    case 4765:
	      // stretch, max-content, min-content, fill-available
	      if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
	        // (m)ax-content, (m)in-content
	        case 109:
	          // -
	          if (charat(value, length + 4) !== 45) break;
	        // (f)ill-available, (f)it-content

	        case 102:
	          return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
	        // (s)tretch

	        case 115:
	          return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
	      }
	      break;
	    // position: sticky

	    case 4949:
	      // (s)ticky?
	      if (charat(value, length + 1) !== 115) break;
	    // display: (flex|inline-flex)

	    case 6444:
	      switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
	        // stic(k)y
	        case 107:
	          return replace(value, ':', ':' + WEBKIT) + value;
	        // (inline-)?fl(e)x

	        case 101:
	          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
	      }
	      break;
	    // writing-mode

	    case 5936:
	      switch (charat(value, length + 11)) {
	        // vertical-l(r)
	        case 114:
	          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
	        // vertical-r(l)

	        case 108:
	          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
	        // horizontal(-)tb

	        case 45:
	          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
	      }
	      return WEBKIT + value + MS + value + value;
	  }
	  return value;
	}
	var prefixer = function prefixer(element, index, children, callback) {
	  if (element.length > -1) if (!element["return"]) switch (element.type) {
	    case DECLARATION:
	      element["return"] = prefix(element.value, element.length);
	      break;
	    case KEYFRAMES:
	      return serialize([copy(element, {
	        value: replace(element.value, '@', '@' + WEBKIT)
	      })], callback);
	    case RULESET:
	      if (element.length) return combine(element.props, function (value) {
	        switch (match(value, /(::plac\w+|:read-\w+)/)) {
	          // :read-(only|write)
	          case ':read-only':
	          case ':read-write':
	            return serialize([copy(element, {
	              props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
	            })], callback);
	          // :placeholder

	          case '::placeholder':
	            return serialize([copy(element, {
	              props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
	            }), copy(element, {
	              props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
	            }), copy(element, {
	              props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
	            })], callback);
	        }
	        return '';
	      });
	  }
	};
	var defaultStylisPlugins = [prefixer];
	var createCache = function createCache(options) {
	  var key = options.key;
	  if (key === 'css') {
	    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
	    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
	    // note this very very intentionally targets all style elements regardless of the key to ensure
	    // that creating a cache works inside of render of a React component

	    Array.prototype.forEach.call(ssrStyles, function (node) {
	      // we want to only move elements which have a space in the data-emotion attribute value
	      // because that indicates that it is an Emotion 11 server-side rendered style elements
	      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
	      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
	      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
	      // will not result in the Emotion 10 styles being destroyed
	      var dataEmotionAttribute = node.getAttribute('data-emotion');
	      if (dataEmotionAttribute.indexOf(' ') === -1) {
	        return;
	      }
	      document.head.appendChild(node);
	      node.setAttribute('data-s', '');
	    });
	  }
	  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
	  var inserted = {};
	  var container;
	  var nodesToHydrate = [];
	  {
	    container = options.container || document.head;
	    Array.prototype.forEach.call(
	    // this means we will ignore elements which don't have a space in them which
	    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
	    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
	      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

	      for (var i = 1; i < attrib.length; i++) {
	        inserted[attrib[i]] = true;
	      }
	      nodesToHydrate.push(node);
	    });
	  }
	  var _insert;
	  var omnipresentPlugins = [compat, removeLabel];
	  {
	    var currentSheet;
	    var finalizingPlugins = [stringify, rulesheet(function (rule) {
	      currentSheet.insert(rule);
	    })];
	    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
	    var stylis = function stylis(styles) {
	      return serialize(compile(styles), serializer);
	    };
	    _insert = function insert(selector, serialized, sheet, shouldCache) {
	      currentSheet = sheet;
	      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
	      if (shouldCache) {
	        cache.inserted[serialized.name] = true;
	      }
	    };
	  }
	  var cache = {
	    key: key,
	    sheet: new StyleSheet({
	      key: key,
	      container: container,
	      nonce: options.nonce,
	      speedy: options.speedy,
	      prepend: options.prepend,
	      insertionPoint: options.insertionPoint
	    }),
	    nonce: options.nonce,
	    inserted: inserted,
	    registered: {},
	    insert: _insert
	  };
	  cache.sheet.hydrate(nodesToHydrate);
	  return cache;
	};

	var isBrowser = "object" !== 'undefined';
	function getRegisteredStyles(registered, registeredStyles, classNames) {
	  var rawClassName = '';
	  classNames.split(' ').forEach(function (className) {
	    if (registered[className] !== undefined) {
	      registeredStyles.push(registered[className] + ";");
	    } else {
	      rawClassName += className + " ";
	    }
	  });
	  return rawClassName;
	}
	var registerStyles = function registerStyles(cache, serialized, isStringTag) {
	  var className = cache.key + "-" + serialized.name;
	  if (
	  // we only need to add the styles to the registered cache if the
	  // class name could be used further down
	  // the tree but if it's a string tag, we know it won't
	  // so we don't have to add it to registered cache.
	  // this improves memory usage since we can avoid storing the whole style string
	  (isStringTag === false ||
	  // we need to always store it if we're in compat mode and
	  // in node since emotion-server relies on whether a style is in
	  // the registered cache to know whether a style is global or not
	  // also, note that this check will be dead code eliminated in the browser
	  isBrowser === false) && cache.registered[className] === undefined) {
	    cache.registered[className] = serialized.styles;
	  }
	};
	var insertStyles = function insertStyles(cache, serialized, isStringTag) {
	  registerStyles(cache, serialized, isStringTag);
	  var className = cache.key + "-" + serialized.name;
	  if (cache.inserted[serialized.name] === undefined) {
	    var current = serialized;
	    do {
	      cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
	      current = current.next;
	    } while (current !== undefined);
	  }
	};

	/* eslint-disable */
	// Inspired by https://github.com/garycourt/murmurhash-js
	// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
	function murmur2(str) {
	  // 'm' and 'r' are mixing constants generated offline.
	  // They're not really 'magic', they just happen to work well.
	  // const m = 0x5bd1e995;
	  // const r = 24;
	  // Initialize the hash
	  var h = 0; // Mix 4 bytes at a time into the hash

	  var k,
	    i = 0,
	    len = str.length;
	  for (; len >= 4; ++i, len -= 4) {
	    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
	    k = /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
	    k ^= /* k >>> r: */
	    k >>> 24;
	    h = /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */
	    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Handle the last few bytes of the input array

	  switch (len) {
	    case 3:
	      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
	    case 2:
	      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
	    case 1:
	      h ^= str.charCodeAt(i) & 0xff;
	      h = /* Math.imul(h, m): */
	      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Do a few final mixes of the hash to ensure the last few
	  // bytes are well-incorporated.

	  h ^= h >>> 13;
	  h = /* Math.imul(h, m): */
	  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  return ((h ^ h >>> 15) >>> 0).toString(36);
	}

	var unitlessKeys = {
	  animationIterationCount: 1,
	  aspectRatio: 1,
	  borderImageOutset: 1,
	  borderImageSlice: 1,
	  borderImageWidth: 1,
	  boxFlex: 1,
	  boxFlexGroup: 1,
	  boxOrdinalGroup: 1,
	  columnCount: 1,
	  columns: 1,
	  flex: 1,
	  flexGrow: 1,
	  flexPositive: 1,
	  flexShrink: 1,
	  flexNegative: 1,
	  flexOrder: 1,
	  gridRow: 1,
	  gridRowEnd: 1,
	  gridRowSpan: 1,
	  gridRowStart: 1,
	  gridColumn: 1,
	  gridColumnEnd: 1,
	  gridColumnSpan: 1,
	  gridColumnStart: 1,
	  msGridRow: 1,
	  msGridRowSpan: 1,
	  msGridColumn: 1,
	  msGridColumnSpan: 1,
	  fontWeight: 1,
	  lineHeight: 1,
	  opacity: 1,
	  order: 1,
	  orphans: 1,
	  tabSize: 1,
	  widows: 1,
	  zIndex: 1,
	  zoom: 1,
	  WebkitLineClamp: 1,
	  // SVG-related properties
	  fillOpacity: 1,
	  floodOpacity: 1,
	  stopOpacity: 1,
	  strokeDasharray: 1,
	  strokeDashoffset: 1,
	  strokeMiterlimit: 1,
	  strokeOpacity: 1,
	  strokeWidth: 1
	};

	var hyphenateRegex = /[A-Z]|^ms/g;
	var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
	var isCustomProperty = function isCustomProperty(property) {
	  return property.charCodeAt(1) === 45;
	};
	var isProcessableValue = function isProcessableValue(value) {
	  return value != null && typeof value !== 'boolean';
	};
	var processStyleName = /* #__PURE__ */memoize(function (styleName) {
	  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
	});
	var processStyleValue = function processStyleValue(key, value) {
	  switch (key) {
	    case 'animation':
	    case 'animationName':
	      {
	        if (typeof value === 'string') {
	          return value.replace(animationRegex, function (match, p1, p2) {
	            cursor = {
	              name: p1,
	              styles: p2,
	              next: cursor
	            };
	            return p1;
	          });
	        }
	      }
	  }
	  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
	    return value + 'px';
	  }
	  return value;
	};
	var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';
	function handleInterpolation(mergedProps, registered, interpolation) {
	  if (interpolation == null) {
	    return '';
	  }
	  if (interpolation.__emotion_styles !== undefined) {
	    return interpolation;
	  }
	  switch (typeof interpolation) {
	    case 'boolean':
	      {
	        return '';
	      }
	    case 'object':
	      {
	        if (interpolation.anim === 1) {
	          cursor = {
	            name: interpolation.name,
	            styles: interpolation.styles,
	            next: cursor
	          };
	          return interpolation.name;
	        }
	        if (interpolation.styles !== undefined) {
	          var next = interpolation.next;
	          if (next !== undefined) {
	            // not the most efficient thing ever but this is a pretty rare case
	            // and there will be very few iterations of this generally
	            while (next !== undefined) {
	              cursor = {
	                name: next.name,
	                styles: next.styles,
	                next: cursor
	              };
	              next = next.next;
	            }
	          }
	          var styles = interpolation.styles + ";";
	          return styles;
	        }
	        return createStringFromObject(mergedProps, registered, interpolation);
	      }
	    case 'function':
	      {
	        if (mergedProps !== undefined) {
	          var previousCursor = cursor;
	          var result = interpolation(mergedProps);
	          cursor = previousCursor;
	          return handleInterpolation(mergedProps, registered, result);
	        }
	        break;
	      }
	  } // finalize string values (regular strings and functions interpolated into css calls)

	  if (registered == null) {
	    return interpolation;
	  }
	  var cached = registered[interpolation];
	  return cached !== undefined ? cached : interpolation;
	}
	function createStringFromObject(mergedProps, registered, obj) {
	  var string = '';
	  if (Array.isArray(obj)) {
	    for (var i = 0; i < obj.length; i++) {
	      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
	    }
	  } else {
	    for (var _key in obj) {
	      var value = obj[_key];
	      if (typeof value !== 'object') {
	        if (registered != null && registered[value] !== undefined) {
	          string += _key + "{" + registered[value] + "}";
	        } else if (isProcessableValue(value)) {
	          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
	        }
	      } else {
	        if (_key === 'NO_COMPONENT_SELECTOR' && 'production' !== 'production') {
	          throw new Error(noComponentSelectorMessage);
	        }
	        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
	          for (var _i = 0; _i < value.length; _i++) {
	            if (isProcessableValue(value[_i])) {
	              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
	            }
	          }
	        } else {
	          var interpolated = handleInterpolation(mergedProps, registered, value);
	          switch (_key) {
	            case 'animation':
	            case 'animationName':
	              {
	                string += processStyleName(_key) + ":" + interpolated + ";";
	                break;
	              }
	            default:
	              {
	                string += _key + "{" + interpolated + "}";
	              }
	          }
	        }
	      }
	    }
	  }
	  return string;
	}
	var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
	// keyframes are stored on the SerializedStyles object as a linked list

	var cursor;
	var serializeStyles = function serializeStyles(args, registered, mergedProps) {
	  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
	    return args[0];
	  }
	  var stringMode = true;
	  var styles = '';
	  cursor = undefined;
	  var strings = args[0];
	  if (strings == null || strings.raw === undefined) {
	    stringMode = false;
	    styles += handleInterpolation(mergedProps, registered, strings);
	  } else {
	    styles += strings[0];
	  } // we start at 1 since we've already handled the first arg

	  for (var i = 1; i < args.length; i++) {
	    styles += handleInterpolation(mergedProps, registered, args[i]);
	    if (stringMode) {
	      styles += strings[i];
	    }
	  }

	  labelPattern.lastIndex = 0;
	  var identifierName = '';
	  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

	  while ((match = labelPattern.exec(styles)) !== null) {
	    identifierName += '-' +
	    // $FlowFixMe we know it's not null
	    match[1];
	  }
	  var name = murmur2(styles) + identifierName;
	  return {
	    name: name,
	    styles: styles,
	    next: cursor
	  };
	};

	var syncFallback = function syncFallback(create) {
	  return create();
	};
	var useInsertionEffect = React$1['useInsertion' + 'Effect'] ? React$1['useInsertion' + 'Effect'] : false;
	var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;

	var hasOwnProperty = {}.hasOwnProperty;
	var EmotionCacheContext = /* #__PURE__ */reactExports.createContext(
	// we're doing this to avoid preconstruct's dead code elimination in this one case
	// because this module is primarily intended for the browser and node
	// but it's also required in react native and similar environments sometimes
	// and we could have a special build just for that
	// but this is much easier and the native packages
	// might use a different theme context in the future anyway
	typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
	  key: 'css'
	}) : null);
	EmotionCacheContext.Provider;
	var withEmotionCache = function withEmotionCache(func) {
	  // $FlowFixMe
	  return /*#__PURE__*/reactExports.forwardRef(function (props, ref) {
	    // the cache will never be null in the browser
	    var cache = reactExports.useContext(EmotionCacheContext);
	    return func(props, cache, ref);
	  });
	};
	var ThemeContext = /* #__PURE__ */reactExports.createContext({});
	var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
	var createEmotionProps = function createEmotionProps(type, props) {
	  var newProps = {};
	  for (var key in props) {
	    if (hasOwnProperty.call(props, key)) {
	      newProps[key] = props[key];
	    }
	  }
	  newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
	  return newProps;
	};
	var Insertion = function Insertion(_ref) {
	  var cache = _ref.cache,
	    serialized = _ref.serialized,
	    isStringTag = _ref.isStringTag;
	  registerStyles(cache, serialized, isStringTag);
	  useInsertionEffectAlwaysWithSyncFallback(function () {
	    return insertStyles(cache, serialized, isStringTag);
	  });
	  return null;
	};
	var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
	  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
	  // not passing the registered cache to serializeStyles because it would
	  // make certain babel optimisations not possible

	  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
	    cssProp = cache.registered[cssProp];
	  }
	  var WrappedComponent = props[typePropName];
	  var registeredStyles = [cssProp];
	  var className = '';
	  if (typeof props.className === 'string') {
	    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
	  } else if (props.className != null) {
	    className = props.className + " ";
	  }
	  var serialized = serializeStyles(registeredStyles, undefined, reactExports.useContext(ThemeContext));
	  className += cache.key + "-" + serialized.name;
	  var newProps = {};
	  for (var key in props) {
	    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ('production' === 'production' )) {
	      newProps[key] = props[key];
	    }
	  }
	  newProps.ref = ref;
	  newProps.className = className;
	  return /*#__PURE__*/reactExports.createElement(reactExports.Fragment, null, /*#__PURE__*/reactExports.createElement(Insertion, {
	    cache: cache,
	    serialized: serialized,
	    isStringTag: typeof WrappedComponent === 'string'
	  }), /*#__PURE__*/reactExports.createElement(WrappedComponent, newProps));
	});
	var Emotion$1 = Emotion;

	var jsx = function jsx(type, props) {
	  var args = arguments;
	  if (props == null || !hasOwnProperty.call(props, 'css')) {
	    // $FlowFixMe
	    return reactExports.createElement.apply(undefined, args);
	  }
	  var argsLength = args.length;
	  var createElementArgArray = new Array(argsLength);
	  createElementArgArray[0] = Emotion$1;
	  createElementArgArray[1] = createEmotionProps(type, props);
	  for (var i = 2; i < argsLength; i++) {
	    createElementArgArray[i] = args[i];
	  } // $FlowFixMe

	  return reactExports.createElement.apply(null, createElementArgArray);
	};
	function css$2() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	  return serializeStyles(args);
	}
	var keyframes = function keyframes() {
	  var insertable = css$2.apply(void 0, arguments);
	  var name = "animation-" + insertable.name; // $FlowFixMe

	  return {
	    name: name,
	    styles: "@keyframes " + name + "{" + insertable.styles + "}",
	    anim: 1,
	    toString: function toString() {
	      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
	    }
	  };
	};

	function _taggedTemplateLiteral(strings, raw) {
	  if (!raw) {
	    raw = strings.slice(0);
	  }
	  return Object.freeze(Object.defineProperties(strings, {
	    raw: {
	      value: Object.freeze(raw)
	    }
	  }));
	}

	const min = Math.min;
	const max = Math.max;
	const round = Math.round;
	const floor = Math.floor;
	const createCoords = v => ({
	  x: v,
	  y: v
	});
	function rectToClientRect(rect) {
	  return {
	    ...rect,
	    top: rect.y,
	    left: rect.x,
	    right: rect.x + rect.width,
	    bottom: rect.y + rect.height
	  };
	}

	function getNodeName(node) {
	  if (isNode(node)) {
	    return (node.nodeName || '').toLowerCase();
	  }
	  // Mocked nodes in testing environments may not be instances of Node. By
	  // returning `#document` an infinite loop won't occur.
	  // https://github.com/floating-ui/floating-ui/issues/2317
	  return '#document';
	}
	function getWindow(node) {
	  var _node$ownerDocument;
	  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
	}
	function getDocumentElement(node) {
	  var _ref;
	  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
	}
	function isNode(value) {
	  return value instanceof Node || value instanceof getWindow(value).Node;
	}
	function isElement(value) {
	  return value instanceof Element || value instanceof getWindow(value).Element;
	}
	function isHTMLElement(value) {
	  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
	}
	function isShadowRoot(value) {
	  // Browsers without `ShadowRoot` support.
	  if (typeof ShadowRoot === 'undefined') {
	    return false;
	  }
	  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
	}
	function isOverflowElement(element) {
	  const {
	    overflow,
	    overflowX,
	    overflowY,
	    display
	  } = getComputedStyle$1(element);
	  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
	}
	function isWebKit() {
	  if (typeof CSS === 'undefined' || !CSS.supports) return false;
	  return CSS.supports('-webkit-backdrop-filter', 'none');
	}
	function isLastTraversableNode(node) {
	  return ['html', 'body', '#document'].includes(getNodeName(node));
	}
	function getComputedStyle$1(element) {
	  return getWindow(element).getComputedStyle(element);
	}
	function getParentNode(node) {
	  if (getNodeName(node) === 'html') {
	    return node;
	  }
	  const result =
	  // Step into the shadow DOM of the parent of a slotted node.
	  node.assignedSlot ||
	  // DOM Element detected.
	  node.parentNode ||
	  // ShadowRoot detected.
	  isShadowRoot(node) && node.host ||
	  // Fallback.
	  getDocumentElement(node);
	  return isShadowRoot(result) ? result.host : result;
	}
	function getNearestOverflowAncestor(node) {
	  const parentNode = getParentNode(node);
	  if (isLastTraversableNode(parentNode)) {
	    return node.ownerDocument ? node.ownerDocument.body : node.body;
	  }
	  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
	    return parentNode;
	  }
	  return getNearestOverflowAncestor(parentNode);
	}
	function getOverflowAncestors(node, list) {
	  var _node$ownerDocument2;
	  if (list === void 0) {
	    list = [];
	  }
	  const scrollableAncestor = getNearestOverflowAncestor(node);
	  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
	  const win = getWindow(scrollableAncestor);
	  if (isBody) {
	    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
	  }
	  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
	}

	function getCssDimensions(element) {
	  const css = getComputedStyle$1(element);
	  // In testing environments, the `width` and `height` properties are empty
	  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
	  let width = parseFloat(css.width) || 0;
	  let height = parseFloat(css.height) || 0;
	  const hasOffset = isHTMLElement(element);
	  const offsetWidth = hasOffset ? element.offsetWidth : width;
	  const offsetHeight = hasOffset ? element.offsetHeight : height;
	  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
	  if (shouldFallback) {
	    width = offsetWidth;
	    height = offsetHeight;
	  }
	  return {
	    width,
	    height,
	    $: shouldFallback
	  };
	}
	function unwrapElement(element) {
	  return !isElement(element) ? element.contextElement : element;
	}
	function getScale(element) {
	  const domElement = unwrapElement(element);
	  if (!isHTMLElement(domElement)) {
	    return createCoords(1);
	  }
	  const rect = domElement.getBoundingClientRect();
	  const {
	    width,
	    height,
	    $
	  } = getCssDimensions(domElement);
	  let x = ($ ? round(rect.width) : rect.width) / width;
	  let y = ($ ? round(rect.height) : rect.height) / height;

	  // 0, NaN, or Infinity should always fallback to 1.

	  if (!x || !Number.isFinite(x)) {
	    x = 1;
	  }
	  if (!y || !Number.isFinite(y)) {
	    y = 1;
	  }
	  return {
	    x,
	    y
	  };
	}
	const noOffsets = /*#__PURE__*/createCoords(0);
	function getVisualOffsets(element) {
	  const win = getWindow(element);
	  if (!isWebKit() || !win.visualViewport) {
	    return noOffsets;
	  }
	  return {
	    x: win.visualViewport.offsetLeft,
	    y: win.visualViewport.offsetTop
	  };
	}
	function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
	  if (isFixed === void 0) {
	    isFixed = false;
	  }
	  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
	    return false;
	  }
	  return isFixed;
	}
	function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
	  if (includeScale === void 0) {
	    includeScale = false;
	  }
	  if (isFixedStrategy === void 0) {
	    isFixedStrategy = false;
	  }
	  const clientRect = element.getBoundingClientRect();
	  const domElement = unwrapElement(element);
	  let scale = createCoords(1);
	  if (includeScale) {
	    if (offsetParent) {
	      if (isElement(offsetParent)) {
	        scale = getScale(offsetParent);
	      }
	    } else {
	      scale = getScale(element);
	    }
	  }
	  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
	  let x = (clientRect.left + visualOffsets.x) / scale.x;
	  let y = (clientRect.top + visualOffsets.y) / scale.y;
	  let width = clientRect.width / scale.x;
	  let height = clientRect.height / scale.y;
	  if (domElement) {
	    const win = getWindow(domElement);
	    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
	    let currentIFrame = win.frameElement;
	    while (currentIFrame && offsetParent && offsetWin !== win) {
	      const iframeScale = getScale(currentIFrame);
	      const iframeRect = currentIFrame.getBoundingClientRect();
	      const css = getComputedStyle$1(currentIFrame);
	      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
	      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
	      x *= iframeScale.x;
	      y *= iframeScale.y;
	      width *= iframeScale.x;
	      height *= iframeScale.y;
	      x += left;
	      y += top;
	      currentIFrame = getWindow(currentIFrame).frameElement;
	    }
	  }
	  return rectToClientRect({
	    width,
	    height,
	    x,
	    y
	  });
	}

	// https://samthor.au/2021/observing-dom/
	function observeMove(element, onMove) {
	  let io = null;
	  let timeoutId;
	  const root = getDocumentElement(element);
	  function cleanup() {
	    clearTimeout(timeoutId);
	    io && io.disconnect();
	    io = null;
	  }
	  function refresh(skip, threshold) {
	    if (skip === void 0) {
	      skip = false;
	    }
	    if (threshold === void 0) {
	      threshold = 1;
	    }
	    cleanup();
	    const {
	      left,
	      top,
	      width,
	      height
	    } = element.getBoundingClientRect();
	    if (!skip) {
	      onMove();
	    }
	    if (!width || !height) {
	      return;
	    }
	    const insetTop = floor(top);
	    const insetRight = floor(root.clientWidth - (left + width));
	    const insetBottom = floor(root.clientHeight - (top + height));
	    const insetLeft = floor(left);
	    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
	    const options = {
	      rootMargin,
	      threshold: max(0, min(1, threshold)) || 1
	    };
	    let isFirstUpdate = true;
	    function handleObserve(entries) {
	      const ratio = entries[0].intersectionRatio;
	      if (ratio !== threshold) {
	        if (!isFirstUpdate) {
	          return refresh();
	        }
	        if (!ratio) {
	          timeoutId = setTimeout(() => {
	            refresh(false, 1e-7);
	          }, 100);
	        } else {
	          refresh(false, ratio);
	        }
	      }
	      isFirstUpdate = false;
	    }

	    // Older browsers don't support a `document` as the root and will throw an
	    // error.
	    try {
	      io = new IntersectionObserver(handleObserve, {
	        ...options,
	        // Handle <iframe>s
	        root: root.ownerDocument
	      });
	    } catch (e) {
	      io = new IntersectionObserver(handleObserve, options);
	    }
	    io.observe(element);
	  }
	  refresh(true);
	  return cleanup;
	}

	/**
	 * Automatically updates the position of the floating element when necessary.
	 * Should only be called when the floating element is mounted on the DOM or
	 * visible on the screen.
	 * @returns cleanup function that should be invoked when the floating element is
	 * removed from the DOM or hidden from the screen.
	 * @see https://floating-ui.com/docs/autoUpdate
	 */
	function autoUpdate(reference, floating, update, options) {
	  if (options === void 0) {
	    options = {};
	  }
	  const {
	    ancestorScroll = true,
	    ancestorResize = true,
	    elementResize = typeof ResizeObserver === 'function',
	    layoutShift = typeof IntersectionObserver === 'function',
	    animationFrame = false
	  } = options;
	  const referenceEl = unwrapElement(reference);
	  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
	  ancestors.forEach(ancestor => {
	    ancestorScroll && ancestor.addEventListener('scroll', update, {
	      passive: true
	    });
	    ancestorResize && ancestor.addEventListener('resize', update);
	  });
	  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
	  let reobserveFrame = -1;
	  let resizeObserver = null;
	  if (elementResize) {
	    resizeObserver = new ResizeObserver(_ref => {
	      let [firstEntry] = _ref;
	      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
	        // Prevent update loops when using the `size` middleware.
	        // https://github.com/floating-ui/floating-ui/issues/1740
	        resizeObserver.unobserve(floating);
	        cancelAnimationFrame(reobserveFrame);
	        reobserveFrame = requestAnimationFrame(() => {
	          resizeObserver && resizeObserver.observe(floating);
	        });
	      }
	      update();
	    });
	    if (referenceEl && !animationFrame) {
	      resizeObserver.observe(referenceEl);
	    }
	    resizeObserver.observe(floating);
	  }
	  let frameId;
	  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
	  if (animationFrame) {
	    frameLoop();
	  }
	  function frameLoop() {
	    const nextRefRect = getBoundingClientRect(reference);
	    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
	      update();
	    }
	    prevRefRect = nextRefRect;
	    frameId = requestAnimationFrame(frameLoop);
	  }
	  update();
	  return () => {
	    ancestors.forEach(ancestor => {
	      ancestorScroll && ancestor.removeEventListener('scroll', update);
	      ancestorResize && ancestor.removeEventListener('resize', update);
	    });
	    cleanupIo && cleanupIo();
	    resizeObserver && resizeObserver.disconnect();
	    resizeObserver = null;
	    if (animationFrame) {
	      cancelAnimationFrame(frameId);
	    }
	  };
	}

	var index = reactExports.useLayoutEffect;

	var _excluded$4 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
	// ==============================
	// NO OP
	// ==============================

	var noop = function noop() {};

	// ==============================
	// Class Name Prefixer
	// ==============================

	/**
	 String representation of component state for styling with class names.

	 Expects an array of strings OR a string/object pair:
	 - className(['comp', 'comp-arg', 'comp-arg-2'])
	   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
	 - className('comp', { some: true, state: false })
	   @returns 'react-select__comp react-select__comp--some'
	*/
	function applyPrefixToName(prefix, name) {
	  if (!name) {
	    return prefix;
	  } else if (name[0] === '-') {
	    return prefix + name;
	  } else {
	    return prefix + '__' + name;
	  }
	}
	function classNames(prefix, state) {
	  for (var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    classNameList[_key - 2] = arguments[_key];
	  }
	  var arr = [].concat(classNameList);
	  if (state && prefix) {
	    for (var key in state) {
	      if (state.hasOwnProperty(key) && state[key]) {
	        arr.push("".concat(applyPrefixToName(prefix, key)));
	      }
	    }
	  }
	  return arr.filter(function (i) {
	    return i;
	  }).map(function (i) {
	    return String(i).trim();
	  }).join(' ');
	}
	// ==============================
	// Clean Value
	// ==============================

	var cleanValue = function cleanValue(value) {
	  if (isArray(value)) return value.filter(Boolean);
	  if (_typeof$2(value) === 'object' && value !== null) return [value];
	  return [];
	};

	// ==============================
	// Clean Common Props
	// ==============================

	var cleanCommonProps = function cleanCommonProps(props) {
	  //className
	  props.className;
	  props.clearValue;
	  props.cx;
	  props.getStyles;
	  props.getClassNames;
	  props.getValue;
	  props.hasValue;
	  props.isMulti;
	  props.isRtl;
	  props.options;
	  props.selectOption;
	  props.selectProps;
	  props.setValue;
	  props.theme;
	  var innerProps = _objectWithoutProperties(props, _excluded$4);
	  return _objectSpread2$2({}, innerProps);
	};

	// ==============================
	// Get Style Props
	// ==============================

	var getStyleProps = function getStyleProps(props, name, classNamesState) {
	  var cx = props.cx,
	    getStyles = props.getStyles,
	    getClassNames = props.getClassNames,
	    className = props.className;
	  return {
	    css: getStyles(name, props),
	    className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className)
	  };
	};

	// ==============================
	// Scroll Helpers
	// ==============================

	function isDocumentElement(el) {
	  return [document.documentElement, document.body, window].indexOf(el) > -1;
	}

	// Normalized Scroll Top
	// ------------------------------

	function normalizedHeight(el) {
	  if (isDocumentElement(el)) {
	    return window.innerHeight;
	  }
	  return el.clientHeight;
	}

	// Normalized scrollTo & scrollTop
	// ------------------------------

	function getScrollTop(el) {
	  if (isDocumentElement(el)) {
	    return window.pageYOffset;
	  }
	  return el.scrollTop;
	}
	function scrollTo(el, top) {
	  // with a scroll distance, we perform scroll on the element
	  if (isDocumentElement(el)) {
	    window.scrollTo(0, top);
	    return;
	  }
	  el.scrollTop = top;
	}

	// Get Scroll Parent
	// ------------------------------

	function getScrollParent(element) {
	  var style = getComputedStyle(element);
	  var excludeStaticParent = style.position === 'absolute';
	  var overflowRx = /(auto|scroll)/;
	  if (style.position === 'fixed') return document.documentElement;
	  for (var parent = element; parent = parent.parentElement;) {
	    style = getComputedStyle(parent);
	    if (excludeStaticParent && style.position === 'static') {
	      continue;
	    }
	    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
	      return parent;
	    }
	  }
	  return document.documentElement;
	}

	// Animated Scroll To
	// ------------------------------

	/**
	  @param t: time (elapsed)
	  @param b: initial value
	  @param c: amount of change
	  @param d: duration
	*/
	function easeOutCubic(t, b, c, d) {
	  return c * ((t = t / d - 1) * t * t + 1) + b;
	}
	function animatedScrollTo(element, to) {
	  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
	  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
	  var start = getScrollTop(element);
	  var change = to - start;
	  var increment = 10;
	  var currentTime = 0;
	  function animateScroll() {
	    currentTime += increment;
	    var val = easeOutCubic(currentTime, start, change, duration);
	    scrollTo(element, val);
	    if (currentTime < duration) {
	      window.requestAnimationFrame(animateScroll);
	    } else {
	      callback(element);
	    }
	  }
	  animateScroll();
	}

	// Scroll Into View
	// ------------------------------

	function scrollIntoView(menuEl, focusedEl) {
	  var menuRect = menuEl.getBoundingClientRect();
	  var focusedRect = focusedEl.getBoundingClientRect();
	  var overScroll = focusedEl.offsetHeight / 3;
	  if (focusedRect.bottom + overScroll > menuRect.bottom) {
	    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
	  } else if (focusedRect.top - overScroll < menuRect.top) {
	    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
	  }
	}

	// ==============================
	// Get bounding client object
	// ==============================

	// cannot get keys using array notation with DOMRect
	function getBoundingClientObj(element) {
	  var rect = element.getBoundingClientRect();
	  return {
	    bottom: rect.bottom,
	    height: rect.height,
	    left: rect.left,
	    right: rect.right,
	    top: rect.top,
	    width: rect.width
	  };
	}

	// ==============================
	// Touch Capability Detector
	// ==============================

	function isTouchCapable() {
	  try {
	    document.createEvent('TouchEvent');
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	// ==============================
	// Mobile Device Detector
	// ==============================

	function isMobileDevice() {
	  try {
	    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	  } catch (e) {
	    return false;
	  }
	}

	// ==============================
	// Passive Event Detector
	// ==============================

	// https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36
	var passiveOptionAccessed = false;
	var options = {
	  get passive() {
	    return passiveOptionAccessed = true;
	  }
	};
	// check for SSR
	var w = typeof window !== 'undefined' ? window : {};
	if (w.addEventListener && w.removeEventListener) {
	  w.addEventListener('p', noop, options);
	  w.removeEventListener('p', noop, false);
	}
	var supportsPassiveEvents = passiveOptionAccessed;
	function notNullish(item) {
	  return item != null;
	}
	function isArray(arg) {
	  return Array.isArray(arg);
	}
	function valueTernary(isMulti, multiValue, singleValue) {
	  return isMulti ? multiValue : singleValue;
	}
	function singleValueAsValue(singleValue) {
	  return singleValue;
	}
	function multiValueAsValue(multiValue) {
	  return multiValue;
	}
	var removeProps = function removeProps(propsObj) {
	  for (var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    properties[_key2 - 1] = arguments[_key2];
	  }
	  var propsMap = Object.entries(propsObj).filter(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 1),
	      key = _ref2[0];
	    return !properties.includes(key);
	  });
	  return propsMap.reduce(function (newProps, _ref3) {
	    var _ref4 = _slicedToArray(_ref3, 2),
	      key = _ref4[0],
	      val = _ref4[1];
	    newProps[key] = val;
	    return newProps;
	  }, {});
	};
	var _excluded$3 = ["children", "innerProps"],
	  _excluded2$1 = ["children", "innerProps"];
	function getMenuPlacement(_ref) {
	  var preferredMaxHeight = _ref.maxHeight,
	    menuEl = _ref.menuEl,
	    minHeight = _ref.minHeight,
	    preferredPlacement = _ref.placement,
	    shouldScroll = _ref.shouldScroll,
	    isFixedPosition = _ref.isFixedPosition,
	    controlHeight = _ref.controlHeight;
	  var scrollParent = getScrollParent(menuEl);
	  var defaultState = {
	    placement: 'bottom',
	    maxHeight: preferredMaxHeight
	  };

	  // something went wrong, return default state
	  if (!menuEl || !menuEl.offsetParent) return defaultState;

	  // we can't trust `scrollParent.scrollHeight` --> it may increase when
	  // the menu is rendered
	  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
	    scrollHeight = _scrollParent$getBoun.height;
	  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
	    menuBottom = _menuEl$getBoundingCl.bottom,
	    menuHeight = _menuEl$getBoundingCl.height,
	    menuTop = _menuEl$getBoundingCl.top;
	  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
	    containerTop = _menuEl$offsetParent$.top;
	  var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
	  var scrollTop = getScrollTop(scrollParent);
	  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
	  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
	  var viewSpaceAbove = containerTop - marginTop;
	  var viewSpaceBelow = viewHeight - menuTop;
	  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
	  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
	  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
	  var scrollUp = scrollTop + menuTop - marginTop;
	  var scrollDuration = 160;
	  switch (preferredPlacement) {
	    case 'auto':
	    case 'bottom':
	      // 1: the menu will fit, do nothing
	      if (viewSpaceBelow >= menuHeight) {
	        return {
	          placement: 'bottom',
	          maxHeight: preferredMaxHeight
	        };
	      }

	      // 2: the menu will fit, if scrolled
	      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
	        if (shouldScroll) {
	          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
	        }
	        return {
	          placement: 'bottom',
	          maxHeight: preferredMaxHeight
	        };
	      }

	      // 3: the menu will fit, if constrained
	      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
	        if (shouldScroll) {
	          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
	        }

	        // we want to provide as much of the menu as possible to the user,
	        // so give them whatever is available below rather than the minHeight.
	        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
	        return {
	          placement: 'bottom',
	          maxHeight: constrainedHeight
	        };
	      }

	      // 4. Forked beviour when there isn't enough space below

	      // AUTO: flip the menu, render above
	      if (preferredPlacement === 'auto' || isFixedPosition) {
	        // may need to be constrained after flipping
	        var _constrainedHeight = preferredMaxHeight;
	        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
	        if (spaceAbove >= minHeight) {
	          _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight, preferredMaxHeight);
	        }
	        return {
	          placement: 'top',
	          maxHeight: _constrainedHeight
	        };
	      }

	      // BOTTOM: allow browser to increase scrollable area and immediately set scroll
	      if (preferredPlacement === 'bottom') {
	        if (shouldScroll) {
	          scrollTo(scrollParent, scrollDown);
	        }
	        return {
	          placement: 'bottom',
	          maxHeight: preferredMaxHeight
	        };
	      }
	      break;
	    case 'top':
	      // 1: the menu will fit, do nothing
	      if (viewSpaceAbove >= menuHeight) {
	        return {
	          placement: 'top',
	          maxHeight: preferredMaxHeight
	        };
	      }

	      // 2: the menu will fit, if scrolled
	      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
	        if (shouldScroll) {
	          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
	        }
	        return {
	          placement: 'top',
	          maxHeight: preferredMaxHeight
	        };
	      }

	      // 3: the menu will fit, if constrained
	      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
	        var _constrainedHeight2 = preferredMaxHeight;

	        // we want to provide as much of the menu as possible to the user,
	        // so give them whatever is available below rather than the minHeight.
	        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
	          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
	        }
	        if (shouldScroll) {
	          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
	        }
	        return {
	          placement: 'top',
	          maxHeight: _constrainedHeight2
	        };
	      }

	      // 4. not enough space, the browser WILL NOT increase scrollable area when
	      // absolutely positioned element rendered above the viewport (only below).
	      // Flip the menu, render below
	      return {
	        placement: 'bottom',
	        maxHeight: preferredMaxHeight
	      };
	    default:
	      throw new Error("Invalid placement provided \"".concat(preferredPlacement, "\"."));
	  }
	  return defaultState;
	}

	// Menu Component
	// ------------------------------

	function alignToControl(placement) {
	  var placementToCSSProp = {
	    bottom: 'top',
	    top: 'bottom'
	  };
	  return placement ? placementToCSSProp[placement] : 'bottom';
	}
	var coercePlacement = function coercePlacement(p) {
	  return p === 'auto' ? 'bottom' : p;
	};
	var menuCSS = function menuCSS(_ref2, unstyled) {
	  var _objectSpread2;
	  var placement = _ref2.placement,
	    _ref2$theme = _ref2.theme,
	    borderRadius = _ref2$theme.borderRadius,
	    spacing = _ref2$theme.spacing,
	    colors = _ref2$theme.colors;
	  return _objectSpread2$2((_objectSpread2 = {
	    label: 'menu'
	  }, _defineProperty$2(_objectSpread2, alignToControl(placement), '100%'), _defineProperty$2(_objectSpread2, "position", 'absolute'), _defineProperty$2(_objectSpread2, "width", '100%'), _defineProperty$2(_objectSpread2, "zIndex", 1), _objectSpread2), unstyled ? {} : {
	    backgroundColor: colors.neutral0,
	    borderRadius: borderRadius,
	    boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
	    marginBottom: spacing.menuGutter,
	    marginTop: spacing.menuGutter
	  });
	};
	var PortalPlacementContext = /*#__PURE__*/reactExports.createContext(null);

	// NOTE: internal only
	var MenuPlacer = function MenuPlacer(props) {
	  var children = props.children,
	    minMenuHeight = props.minMenuHeight,
	    maxMenuHeight = props.maxMenuHeight,
	    menuPlacement = props.menuPlacement,
	    menuPosition = props.menuPosition,
	    menuShouldScrollIntoView = props.menuShouldScrollIntoView,
	    theme = props.theme;
	  var _ref3 = reactExports.useContext(PortalPlacementContext) || {},
	    setPortalPlacement = _ref3.setPortalPlacement;
	  var ref = reactExports.useRef(null);
	  var _useState = reactExports.useState(maxMenuHeight),
	    _useState2 = _slicedToArray(_useState, 2),
	    maxHeight = _useState2[0],
	    setMaxHeight = _useState2[1];
	  var _useState3 = reactExports.useState(null),
	    _useState4 = _slicedToArray(_useState3, 2),
	    placement = _useState4[0],
	    setPlacement = _useState4[1];
	  var controlHeight = theme.spacing.controlHeight;
	  index(function () {
	    var menuEl = ref.current;
	    if (!menuEl) return;

	    // DO NOT scroll if position is fixed
	    var isFixedPosition = menuPosition === 'fixed';
	    var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
	    var state = getMenuPlacement({
	      maxHeight: maxMenuHeight,
	      menuEl: menuEl,
	      minHeight: minMenuHeight,
	      placement: menuPlacement,
	      shouldScroll: shouldScroll,
	      isFixedPosition: isFixedPosition,
	      controlHeight: controlHeight
	    });
	    setMaxHeight(state.maxHeight);
	    setPlacement(state.placement);
	    setPortalPlacement === null || setPortalPlacement === void 0 ? void 0 : setPortalPlacement(state.placement);
	  }, [maxMenuHeight, menuPlacement, menuPosition, menuShouldScrollIntoView, minMenuHeight, setPortalPlacement, controlHeight]);
	  return children({
	    ref: ref,
	    placerProps: _objectSpread2$2(_objectSpread2$2({}, props), {}, {
	      placement: placement || coercePlacement(menuPlacement),
	      maxHeight: maxHeight
	    })
	  });
	};
	var Menu = function Menu(props) {
	  var children = props.children,
	    innerRef = props.innerRef,
	    innerProps = props.innerProps;
	  return jsx("div", _extends({}, getStyleProps(props, 'menu', {
	    menu: true
	  }), {
	    ref: innerRef
	  }, innerProps), children);
	};
	var Menu$1 = Menu;

	// ==============================
	// Menu List
	// ==============================

	var menuListCSS = function menuListCSS(_ref4, unstyled) {
	  var maxHeight = _ref4.maxHeight,
	    baseUnit = _ref4.theme.spacing.baseUnit;
	  return _objectSpread2$2({
	    maxHeight: maxHeight,
	    overflowY: 'auto',
	    position: 'relative',
	    // required for offset[Height, Top] > keyboard scroll
	    WebkitOverflowScrolling: 'touch'
	  }, unstyled ? {} : {
	    paddingBottom: baseUnit,
	    paddingTop: baseUnit
	  });
	};
	var MenuList = function MenuList(props) {
	  var children = props.children,
	    innerProps = props.innerProps,
	    innerRef = props.innerRef,
	    isMulti = props.isMulti;
	  return jsx("div", _extends({}, getStyleProps(props, 'menuList', {
	    'menu-list': true,
	    'menu-list--is-multi': isMulti
	  }), {
	    ref: innerRef
	  }, innerProps), children);
	};

	// ==============================
	// Menu Notices
	// ==============================

	var noticeCSS = function noticeCSS(_ref5, unstyled) {
	  var _ref5$theme = _ref5.theme,
	    baseUnit = _ref5$theme.spacing.baseUnit,
	    colors = _ref5$theme.colors;
	  return _objectSpread2$2({
	    textAlign: 'center'
	  }, unstyled ? {} : {
	    color: colors.neutral40,
	    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px")
	  });
	};
	var noOptionsMessageCSS = noticeCSS;
	var loadingMessageCSS = noticeCSS;
	var NoOptionsMessage = function NoOptionsMessage(_ref6) {
	  var _ref6$children = _ref6.children,
	    children = _ref6$children === void 0 ? 'No options' : _ref6$children,
	    innerProps = _ref6.innerProps,
	    restProps = _objectWithoutProperties(_ref6, _excluded$3);
	  return jsx("div", _extends({}, getStyleProps(_objectSpread2$2(_objectSpread2$2({}, restProps), {}, {
	    children: children,
	    innerProps: innerProps
	  }), 'noOptionsMessage', {
	    'menu-notice': true,
	    'menu-notice--no-options': true
	  }), innerProps), children);
	};
	var LoadingMessage = function LoadingMessage(_ref7) {
	  var _ref7$children = _ref7.children,
	    children = _ref7$children === void 0 ? 'Loading...' : _ref7$children,
	    innerProps = _ref7.innerProps,
	    restProps = _objectWithoutProperties(_ref7, _excluded2$1);
	  return jsx("div", _extends({}, getStyleProps(_objectSpread2$2(_objectSpread2$2({}, restProps), {}, {
	    children: children,
	    innerProps: innerProps
	  }), 'loadingMessage', {
	    'menu-notice': true,
	    'menu-notice--loading': true
	  }), innerProps), children);
	};

	// ==============================
	// Menu Portal
	// ==============================

	var menuPortalCSS = function menuPortalCSS(_ref8) {
	  var rect = _ref8.rect,
	    offset = _ref8.offset,
	    position = _ref8.position;
	  return {
	    left: rect.left,
	    position: position,
	    top: offset,
	    width: rect.width,
	    zIndex: 1
	  };
	};
	var MenuPortal = function MenuPortal(props) {
	  var appendTo = props.appendTo,
	    children = props.children,
	    controlElement = props.controlElement,
	    innerProps = props.innerProps,
	    menuPlacement = props.menuPlacement,
	    menuPosition = props.menuPosition;
	  var menuPortalRef = reactExports.useRef(null);
	  var cleanupRef = reactExports.useRef(null);
	  var _useState5 = reactExports.useState(coercePlacement(menuPlacement)),
	    _useState6 = _slicedToArray(_useState5, 2),
	    placement = _useState6[0],
	    setPortalPlacement = _useState6[1];
	  var portalPlacementContext = reactExports.useMemo(function () {
	    return {
	      setPortalPlacement: setPortalPlacement
	    };
	  }, []);
	  var _useState7 = reactExports.useState(null),
	    _useState8 = _slicedToArray(_useState7, 2),
	    computedPosition = _useState8[0],
	    setComputedPosition = _useState8[1];
	  var updateComputedPosition = reactExports.useCallback(function () {
	    if (!controlElement) return;
	    var rect = getBoundingClientObj(controlElement);
	    var scrollDistance = menuPosition === 'fixed' ? 0 : window.pageYOffset;
	    var offset = rect[placement] + scrollDistance;
	    if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) {
	      setComputedPosition({
	        offset: offset,
	        rect: rect
	      });
	    }
	  }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width]);
	  index(function () {
	    updateComputedPosition();
	  }, [updateComputedPosition]);
	  var runAutoUpdate = reactExports.useCallback(function () {
	    if (typeof cleanupRef.current === 'function') {
	      cleanupRef.current();
	      cleanupRef.current = null;
	    }
	    if (controlElement && menuPortalRef.current) {
	      cleanupRef.current = autoUpdate(controlElement, menuPortalRef.current, updateComputedPosition, {
	        elementResize: 'ResizeObserver' in window
	      });
	    }
	  }, [controlElement, updateComputedPosition]);
	  index(function () {
	    runAutoUpdate();
	  }, [runAutoUpdate]);
	  var setMenuPortalElement = reactExports.useCallback(function (menuPortalElement) {
	    menuPortalRef.current = menuPortalElement;
	    runAutoUpdate();
	  }, [runAutoUpdate]);

	  // bail early if required elements aren't present
	  if (!appendTo && menuPosition !== 'fixed' || !computedPosition) return null;

	  // same wrapper element whether fixed or portalled
	  var menuWrapper = jsx("div", _extends({
	    ref: setMenuPortalElement
	  }, getStyleProps(_objectSpread2$2(_objectSpread2$2({}, props), {}, {
	    offset: computedPosition.offset,
	    position: menuPosition,
	    rect: computedPosition.rect
	  }), 'menuPortal', {
	    'menu-portal': true
	  }), innerProps), children);
	  return jsx(PortalPlacementContext.Provider, {
	    value: portalPlacementContext
	  }, appendTo ? /*#__PURE__*/reactDomExports.createPortal(menuWrapper, appendTo) : menuWrapper);
	};

	// ==============================
	// Root Container
	// ==============================

	var containerCSS = function containerCSS(_ref) {
	  var isDisabled = _ref.isDisabled,
	    isRtl = _ref.isRtl;
	  return {
	    label: 'container',
	    direction: isRtl ? 'rtl' : undefined,
	    pointerEvents: isDisabled ? 'none' : undefined,
	    // cancel mouse events when disabled
	    position: 'relative'
	  };
	};
	var SelectContainer = function SelectContainer(props) {
	  var children = props.children,
	    innerProps = props.innerProps,
	    isDisabled = props.isDisabled,
	    isRtl = props.isRtl;
	  return jsx("div", _extends({}, getStyleProps(props, 'container', {
	    '--is-disabled': isDisabled,
	    '--is-rtl': isRtl
	  }), innerProps), children);
	};

	// ==============================
	// Value Container
	// ==============================

	var valueContainerCSS = function valueContainerCSS(_ref2, unstyled) {
	  var spacing = _ref2.theme.spacing,
	    isMulti = _ref2.isMulti,
	    hasValue = _ref2.hasValue,
	    controlShouldRenderValue = _ref2.selectProps.controlShouldRenderValue;
	  return _objectSpread2$2({
	    alignItems: 'center',
	    display: isMulti && hasValue && controlShouldRenderValue ? 'flex' : 'grid',
	    flex: 1,
	    flexWrap: 'wrap',
	    WebkitOverflowScrolling: 'touch',
	    position: 'relative',
	    overflow: 'hidden'
	  }, unstyled ? {} : {
	    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px")
	  });
	};
	var ValueContainer = function ValueContainer(props) {
	  var children = props.children,
	    innerProps = props.innerProps,
	    isMulti = props.isMulti,
	    hasValue = props.hasValue;
	  return jsx("div", _extends({}, getStyleProps(props, 'valueContainer', {
	    'value-container': true,
	    'value-container--is-multi': isMulti,
	    'value-container--has-value': hasValue
	  }), innerProps), children);
	};

	// ==============================
	// Indicator Container
	// ==============================

	var indicatorsContainerCSS = function indicatorsContainerCSS() {
	  return {
	    alignItems: 'center',
	    alignSelf: 'stretch',
	    display: 'flex',
	    flexShrink: 0
	  };
	};
	var IndicatorsContainer = function IndicatorsContainer(props) {
	  var children = props.children,
	    innerProps = props.innerProps;
	  return jsx("div", _extends({}, getStyleProps(props, 'indicatorsContainer', {
	    indicators: true
	  }), innerProps), children);
	};
	var _templateObject;
	var _excluded$2 = ["size"],
	  _excluded2 = ["innerProps", "isRtl", "size"];

	// ==============================
	// Dropdown & Clear Icons
	// ==============================
	var _ref2$2 = {
	  name: "8mmkcg",
	  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
	} ;
	var Svg = function Svg(_ref) {
	  var size = _ref.size,
	    props = _objectWithoutProperties(_ref, _excluded$2);
	  return jsx("svg", _extends({
	    height: size,
	    width: size,
	    viewBox: "0 0 20 20",
	    "aria-hidden": "true",
	    focusable: "false",
	    css: _ref2$2
	  }, props));
	};
	var CrossIcon = function CrossIcon(props) {
	  return jsx(Svg, _extends({
	    size: 20
	  }, props), jsx("path", {
	    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
	  }));
	};
	var DownChevron = function DownChevron(props) {
	  return jsx(Svg, _extends({
	    size: 20
	  }, props), jsx("path", {
	    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
	  }));
	};

	// ==============================
	// Dropdown & Clear Buttons
	// ==============================

	var baseCSS = function baseCSS(_ref3, unstyled) {
	  var isFocused = _ref3.isFocused,
	    _ref3$theme = _ref3.theme,
	    baseUnit = _ref3$theme.spacing.baseUnit,
	    colors = _ref3$theme.colors;
	  return _objectSpread2$2({
	    label: 'indicatorContainer',
	    display: 'flex',
	    transition: 'color 150ms'
	  }, unstyled ? {} : {
	    color: isFocused ? colors.neutral60 : colors.neutral20,
	    padding: baseUnit * 2,
	    ':hover': {
	      color: isFocused ? colors.neutral80 : colors.neutral40
	    }
	  });
	};
	var dropdownIndicatorCSS = baseCSS;
	var DropdownIndicator = function DropdownIndicator(props) {
	  var children = props.children,
	    innerProps = props.innerProps;
	  return jsx("div", _extends({}, getStyleProps(props, 'dropdownIndicator', {
	    indicator: true,
	    'dropdown-indicator': true
	  }), innerProps), children || jsx(DownChevron, null));
	};
	var clearIndicatorCSS = baseCSS;
	var ClearIndicator = function ClearIndicator(props) {
	  var children = props.children,
	    innerProps = props.innerProps;
	  return jsx("div", _extends({}, getStyleProps(props, 'clearIndicator', {
	    indicator: true,
	    'clear-indicator': true
	  }), innerProps), children || jsx(CrossIcon, null));
	};

	// ==============================
	// Separator
	// ==============================

	var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4, unstyled) {
	  var isDisabled = _ref4.isDisabled,
	    _ref4$theme = _ref4.theme,
	    baseUnit = _ref4$theme.spacing.baseUnit,
	    colors = _ref4$theme.colors;
	  return _objectSpread2$2({
	    label: 'indicatorSeparator',
	    alignSelf: 'stretch',
	    width: 1
	  }, unstyled ? {} : {
	    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
	    marginBottom: baseUnit * 2,
	    marginTop: baseUnit * 2
	  });
	};
	var IndicatorSeparator = function IndicatorSeparator(props) {
	  var innerProps = props.innerProps;
	  return jsx("span", _extends({}, innerProps, getStyleProps(props, 'indicatorSeparator', {
	    'indicator-separator': true
	  })));
	};

	// ==============================
	// Loading
	// ==============================

	var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
	var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5, unstyled) {
	  var isFocused = _ref5.isFocused,
	    size = _ref5.size,
	    _ref5$theme = _ref5.theme,
	    colors = _ref5$theme.colors,
	    baseUnit = _ref5$theme.spacing.baseUnit;
	  return _objectSpread2$2({
	    label: 'loadingIndicator',
	    display: 'flex',
	    transition: 'color 150ms',
	    alignSelf: 'center',
	    fontSize: size,
	    lineHeight: 1,
	    marginRight: size,
	    textAlign: 'center',
	    verticalAlign: 'middle'
	  }, unstyled ? {} : {
	    color: isFocused ? colors.neutral60 : colors.neutral20,
	    padding: baseUnit * 2
	  });
	};
	var LoadingDot = function LoadingDot(_ref6) {
	  var delay = _ref6.delay,
	    offset = _ref6.offset;
	  return jsx("span", {
	    css: /*#__PURE__*/css$2({
	      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
	      backgroundColor: 'currentColor',
	      borderRadius: '1em',
	      display: 'inline-block',
	      marginLeft: offset ? '1em' : undefined,
	      height: '1em',
	      verticalAlign: 'top',
	      width: '1em'
	    }, "" , "" )
	  });
	};
	var LoadingIndicator = function LoadingIndicator(_ref7) {
	  var innerProps = _ref7.innerProps,
	    isRtl = _ref7.isRtl,
	    _ref7$size = _ref7.size,
	    size = _ref7$size === void 0 ? 4 : _ref7$size,
	    restProps = _objectWithoutProperties(_ref7, _excluded2);
	  return jsx("div", _extends({}, getStyleProps(_objectSpread2$2(_objectSpread2$2({}, restProps), {}, {
	    innerProps: innerProps,
	    isRtl: isRtl,
	    size: size
	  }), 'loadingIndicator', {
	    indicator: true,
	    'loading-indicator': true
	  }), innerProps), jsx(LoadingDot, {
	    delay: 0,
	    offset: isRtl
	  }), jsx(LoadingDot, {
	    delay: 160,
	    offset: true
	  }), jsx(LoadingDot, {
	    delay: 320,
	    offset: !isRtl
	  }));
	};
	var css$1 = function css(_ref, unstyled) {
	  var isDisabled = _ref.isDisabled,
	    isFocused = _ref.isFocused,
	    _ref$theme = _ref.theme,
	    colors = _ref$theme.colors,
	    borderRadius = _ref$theme.borderRadius,
	    spacing = _ref$theme.spacing;
	  return _objectSpread2$2({
	    label: 'control',
	    alignItems: 'center',
	    cursor: 'default',
	    display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'space-between',
	    minHeight: spacing.controlHeight,
	    outline: '0 !important',
	    position: 'relative',
	    transition: 'all 100ms'
	  }, unstyled ? {} : {
	    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
	    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
	    borderRadius: borderRadius,
	    borderStyle: 'solid',
	    borderWidth: 1,
	    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : undefined,
	    '&:hover': {
	      borderColor: isFocused ? colors.primary : colors.neutral30
	    }
	  });
	};
	var Control = function Control(props) {
	  var children = props.children,
	    isDisabled = props.isDisabled,
	    isFocused = props.isFocused,
	    innerRef = props.innerRef,
	    innerProps = props.innerProps,
	    menuIsOpen = props.menuIsOpen;
	  return jsx("div", _extends({
	    ref: innerRef
	  }, getStyleProps(props, 'control', {
	    control: true,
	    'control--is-disabled': isDisabled,
	    'control--is-focused': isFocused,
	    'control--menu-is-open': menuIsOpen
	  }), innerProps), children);
	};
	var Control$1 = Control;
	var _excluded$1 = ["data"];
	var groupCSS = function groupCSS(_ref, unstyled) {
	  var spacing = _ref.theme.spacing;
	  return unstyled ? {} : {
	    paddingBottom: spacing.baseUnit * 2,
	    paddingTop: spacing.baseUnit * 2
	  };
	};
	var Group = function Group(props) {
	  var children = props.children,
	    cx = props.cx,
	    getStyles = props.getStyles,
	    getClassNames = props.getClassNames,
	    Heading = props.Heading,
	    headingProps = props.headingProps,
	    innerProps = props.innerProps,
	    label = props.label,
	    theme = props.theme,
	    selectProps = props.selectProps;
	  return jsx("div", _extends({}, getStyleProps(props, 'group', {
	    group: true
	  }), innerProps), jsx(Heading, _extends({}, headingProps, {
	    selectProps: selectProps,
	    theme: theme,
	    getStyles: getStyles,
	    getClassNames: getClassNames,
	    cx: cx
	  }), label), jsx("div", null, children));
	};
	var groupHeadingCSS = function groupHeadingCSS(_ref2, unstyled) {
	  var _ref2$theme = _ref2.theme,
	    colors = _ref2$theme.colors,
	    spacing = _ref2$theme.spacing;
	  return _objectSpread2$2({
	    label: 'group',
	    cursor: 'default',
	    display: 'block'
	  }, unstyled ? {} : {
	    color: colors.neutral40,
	    fontSize: '75%',
	    fontWeight: 500,
	    marginBottom: '0.25em',
	    paddingLeft: spacing.baseUnit * 3,
	    paddingRight: spacing.baseUnit * 3,
	    textTransform: 'uppercase'
	  });
	};
	var GroupHeading = function GroupHeading(props) {
	  var _cleanCommonProps = cleanCommonProps(props);
	  _cleanCommonProps.data;
	  var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1);
	  return jsx("div", _extends({}, getStyleProps(props, 'groupHeading', {
	    'group-heading': true
	  }), innerProps));
	};
	var Group$1 = Group;
	var _excluded$5 = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
	var inputCSS = function inputCSS(_ref, unstyled) {
	  var isDisabled = _ref.isDisabled,
	    value = _ref.value,
	    _ref$theme = _ref.theme,
	    spacing = _ref$theme.spacing,
	    colors = _ref$theme.colors;
	  return _objectSpread2$2(_objectSpread2$2({
	    visibility: isDisabled ? 'hidden' : 'visible',
	    // force css to recompute when value change due to @emotion bug.
	    // We can remove it whenever the bug is fixed.
	    transform: value ? 'translateZ(0)' : ''
	  }, containerStyle), unstyled ? {} : {
	    margin: spacing.baseUnit / 2,
	    paddingBottom: spacing.baseUnit / 2,
	    paddingTop: spacing.baseUnit / 2,
	    color: colors.neutral80
	  });
	};
	var spacingStyle = {
	  gridArea: '1 / 2',
	  font: 'inherit',
	  minWidth: '2px',
	  border: 0,
	  margin: 0,
	  outline: 0,
	  padding: 0
	};
	var containerStyle = {
	  flex: '1 1 auto',
	  display: 'inline-grid',
	  gridArea: '1 / 1 / 2 / 3',
	  gridTemplateColumns: '0 min-content',
	  '&:after': _objectSpread2$2({
	    content: 'attr(data-value) " "',
	    visibility: 'hidden',
	    whiteSpace: 'pre'
	  }, spacingStyle)
	};
	var inputStyle = function inputStyle(isHidden) {
	  return _objectSpread2$2({
	    label: 'input',
	    color: 'inherit',
	    background: 0,
	    opacity: isHidden ? 0 : 1,
	    width: '100%'
	  }, spacingStyle);
	};
	var Input = function Input(props) {
	  var cx = props.cx,
	    value = props.value;
	  var _cleanCommonProps = cleanCommonProps(props),
	    innerRef = _cleanCommonProps.innerRef,
	    isDisabled = _cleanCommonProps.isDisabled,
	    isHidden = _cleanCommonProps.isHidden,
	    inputClassName = _cleanCommonProps.inputClassName,
	    innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$5);
	  return jsx("div", _extends({}, getStyleProps(props, 'input', {
	    'input-container': true
	  }), {
	    "data-value": value || ''
	  }), jsx("input", _extends({
	    className: cx({
	      input: true
	    }, inputClassName),
	    ref: innerRef,
	    style: inputStyle(isHidden),
	    disabled: isDisabled
	  }, innerProps)));
	};
	var Input$1 = Input;
	var multiValueCSS = function multiValueCSS(_ref, unstyled) {
	  var _ref$theme = _ref.theme,
	    spacing = _ref$theme.spacing,
	    borderRadius = _ref$theme.borderRadius,
	    colors = _ref$theme.colors;
	  return _objectSpread2$2({
	    label: 'multiValue',
	    display: 'flex',
	    minWidth: 0
	  }, unstyled ? {} : {
	    backgroundColor: colors.neutral10,
	    borderRadius: borderRadius / 2,
	    margin: spacing.baseUnit / 2
	  });
	};
	var multiValueLabelCSS = function multiValueLabelCSS(_ref2, unstyled) {
	  var _ref2$theme = _ref2.theme,
	    borderRadius = _ref2$theme.borderRadius,
	    colors = _ref2$theme.colors,
	    cropWithEllipsis = _ref2.cropWithEllipsis;
	  return _objectSpread2$2({
	    overflow: 'hidden',
	    textOverflow: cropWithEllipsis || cropWithEllipsis === undefined ? 'ellipsis' : undefined,
	    whiteSpace: 'nowrap'
	  }, unstyled ? {} : {
	    borderRadius: borderRadius / 2,
	    color: colors.neutral80,
	    fontSize: '85%',
	    padding: 3,
	    paddingLeft: 6
	  });
	};
	var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3, unstyled) {
	  var _ref3$theme = _ref3.theme,
	    spacing = _ref3$theme.spacing,
	    borderRadius = _ref3$theme.borderRadius,
	    colors = _ref3$theme.colors,
	    isFocused = _ref3.isFocused;
	  return _objectSpread2$2({
	    alignItems: 'center',
	    display: 'flex'
	  }, unstyled ? {} : {
	    borderRadius: borderRadius / 2,
	    backgroundColor: isFocused ? colors.dangerLight : undefined,
	    paddingLeft: spacing.baseUnit,
	    paddingRight: spacing.baseUnit,
	    ':hover': {
	      backgroundColor: colors.dangerLight,
	      color: colors.danger
	    }
	  });
	};
	var MultiValueGeneric = function MultiValueGeneric(_ref4) {
	  var children = _ref4.children,
	    innerProps = _ref4.innerProps;
	  return jsx("div", innerProps, children);
	};
	var MultiValueContainer = MultiValueGeneric;
	var MultiValueLabel = MultiValueGeneric;
	function MultiValueRemove(_ref5) {
	  var children = _ref5.children,
	    innerProps = _ref5.innerProps;
	  return jsx("div", _extends({
	    role: "button"
	  }, innerProps), children || jsx(CrossIcon, {
	    size: 14
	  }));
	}
	var MultiValue = function MultiValue(props) {
	  var children = props.children,
	    components = props.components,
	    data = props.data,
	    innerProps = props.innerProps,
	    isDisabled = props.isDisabled,
	    removeProps = props.removeProps,
	    selectProps = props.selectProps;
	  var Container = components.Container,
	    Label = components.Label,
	    Remove = components.Remove;
	  return jsx(Container, {
	    data: data,
	    innerProps: _objectSpread2$2(_objectSpread2$2({}, getStyleProps(props, 'multiValue', {
	      'multi-value': true,
	      'multi-value--is-disabled': isDisabled
	    })), innerProps),
	    selectProps: selectProps
	  }, jsx(Label, {
	    data: data,
	    innerProps: _objectSpread2$2({}, getStyleProps(props, 'multiValueLabel', {
	      'multi-value__label': true
	    })),
	    selectProps: selectProps
	  }, children), jsx(Remove, {
	    data: data,
	    innerProps: _objectSpread2$2(_objectSpread2$2({}, getStyleProps(props, 'multiValueRemove', {
	      'multi-value__remove': true
	    })), {}, {
	      'aria-label': "Remove ".concat(children || 'option')
	    }, removeProps),
	    selectProps: selectProps
	  }));
	};
	var MultiValue$1 = MultiValue;
	var optionCSS = function optionCSS(_ref, unstyled) {
	  var isDisabled = _ref.isDisabled,
	    isFocused = _ref.isFocused,
	    isSelected = _ref.isSelected,
	    _ref$theme = _ref.theme,
	    spacing = _ref$theme.spacing,
	    colors = _ref$theme.colors;
	  return _objectSpread2$2({
	    label: 'option',
	    cursor: 'default',
	    display: 'block',
	    fontSize: 'inherit',
	    width: '100%',
	    userSelect: 'none',
	    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
	  }, unstyled ? {} : {
	    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
	    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
	    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
	    // provide some affordance on touch devices
	    ':active': {
	      backgroundColor: !isDisabled ? isSelected ? colors.primary : colors.primary50 : undefined
	    }
	  });
	};
	var Option = function Option(props) {
	  var children = props.children,
	    isDisabled = props.isDisabled,
	    isFocused = props.isFocused,
	    isSelected = props.isSelected,
	    innerRef = props.innerRef,
	    innerProps = props.innerProps;
	  return jsx("div", _extends({}, getStyleProps(props, 'option', {
	    option: true,
	    'option--is-disabled': isDisabled,
	    'option--is-focused': isFocused,
	    'option--is-selected': isSelected
	  }), {
	    ref: innerRef,
	    "aria-disabled": isDisabled
	  }, innerProps), children);
	};
	var Option$1 = Option;
	var placeholderCSS = function placeholderCSS(_ref, unstyled) {
	  var _ref$theme = _ref.theme,
	    spacing = _ref$theme.spacing,
	    colors = _ref$theme.colors;
	  return _objectSpread2$2({
	    label: 'placeholder',
	    gridArea: '1 / 1 / 2 / 3'
	  }, unstyled ? {} : {
	    color: colors.neutral50,
	    marginLeft: spacing.baseUnit / 2,
	    marginRight: spacing.baseUnit / 2
	  });
	};
	var Placeholder = function Placeholder(props) {
	  var children = props.children,
	    innerProps = props.innerProps;
	  return jsx("div", _extends({}, getStyleProps(props, 'placeholder', {
	    placeholder: true
	  }), innerProps), children);
	};
	var Placeholder$1 = Placeholder;
	var css = function css(_ref, unstyled) {
	  var isDisabled = _ref.isDisabled,
	    _ref$theme = _ref.theme,
	    spacing = _ref$theme.spacing,
	    colors = _ref$theme.colors;
	  return _objectSpread2$2({
	    label: 'singleValue',
	    gridArea: '1 / 1 / 2 / 3',
	    maxWidth: '100%',
	    overflow: 'hidden',
	    textOverflow: 'ellipsis',
	    whiteSpace: 'nowrap'
	  }, unstyled ? {} : {
	    color: isDisabled ? colors.neutral40 : colors.neutral80,
	    marginLeft: spacing.baseUnit / 2,
	    marginRight: spacing.baseUnit / 2
	  });
	};
	var SingleValue = function SingleValue(props) {
	  var children = props.children,
	    isDisabled = props.isDisabled,
	    innerProps = props.innerProps;
	  return jsx("div", _extends({}, getStyleProps(props, 'singleValue', {
	    'single-value': true,
	    'single-value--is-disabled': isDisabled
	  }), innerProps), children);
	};
	var SingleValue$1 = SingleValue;
	var components = {
	  ClearIndicator: ClearIndicator,
	  Control: Control$1,
	  DropdownIndicator: DropdownIndicator,
	  DownChevron: DownChevron,
	  CrossIcon: CrossIcon,
	  Group: Group$1,
	  GroupHeading: GroupHeading,
	  IndicatorsContainer: IndicatorsContainer,
	  IndicatorSeparator: IndicatorSeparator,
	  Input: Input$1,
	  LoadingIndicator: LoadingIndicator,
	  Menu: Menu$1,
	  MenuList: MenuList,
	  MenuPortal: MenuPortal,
	  LoadingMessage: LoadingMessage,
	  NoOptionsMessage: NoOptionsMessage,
	  MultiValue: MultiValue$1,
	  MultiValueContainer: MultiValueContainer,
	  MultiValueLabel: MultiValueLabel,
	  MultiValueRemove: MultiValueRemove,
	  Option: Option$1,
	  Placeholder: Placeholder$1,
	  SelectContainer: SelectContainer,
	  SingleValue: SingleValue$1,
	  ValueContainer: ValueContainer
	};
	var defaultComponents = function defaultComponents(props) {
	  return _objectSpread2$2(_objectSpread2$2({}, components), props.components);
	};

	var safeIsNaN = Number.isNaN || function ponyfill(value) {
	  return typeof value === 'number' && value !== value;
	};
	function isEqual(first, second) {
	  if (first === second) {
	    return true;
	  }
	  if (safeIsNaN(first) && safeIsNaN(second)) {
	    return true;
	  }
	  return false;
	}
	function areInputsEqual(newInputs, lastInputs) {
	  if (newInputs.length !== lastInputs.length) {
	    return false;
	  }
	  for (var i = 0; i < newInputs.length; i++) {
	    if (!isEqual(newInputs[i], lastInputs[i])) {
	      return false;
	    }
	  }
	  return true;
	}
	function memoizeOne(resultFn, isEqual) {
	  if (isEqual === void 0) {
	    isEqual = areInputsEqual;
	  }
	  var cache = null;
	  function memoized() {
	    var newArgs = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	      newArgs[_i] = arguments[_i];
	    }
	    if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
	      return cache.lastResult;
	    }
	    var lastResult = resultFn.apply(this, newArgs);
	    cache = {
	      lastResult: lastResult,
	      lastArgs: newArgs,
	      lastThis: this
	    };
	    return lastResult;
	  }
	  memoized.clear = function clear() {
	    cache = null;
	  };
	  return memoized;
	}

	// Assistive text to describe visual elements. Hidden for sighted users.
	var _ref = {
	  name: "7pg0cj-a11yText",
	  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
	} ;
	var A11yText = function A11yText(props) {
	  return jsx("span", _extends({
	    css: _ref
	  }, props));
	};
	var A11yText$1 = A11yText;
	var defaultAriaLiveMessages = {
	  guidance: function guidance(props) {
	    var isSearchable = props.isSearchable,
	      isMulti = props.isMulti,
	      isDisabled = props.isDisabled,
	      tabSelectsValue = props.tabSelectsValue,
	      context = props.context;
	    switch (context) {
	      case 'menu':
	        return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu").concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");
	      case 'input':
	        return "".concat(props['aria-label'] || 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');
	      case 'value':
	        return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
	      default:
	        return '';
	    }
	  },
	  onChange: function onChange(props) {
	    var action = props.action,
	      _props$label = props.label,
	      label = _props$label === void 0 ? '' : _props$label,
	      labels = props.labels,
	      isDisabled = props.isDisabled;
	    switch (action) {
	      case 'deselect-option':
	      case 'pop-value':
	      case 'remove-value':
	        return "option ".concat(label, ", deselected.");
	      case 'clear':
	        return 'All selected options have been cleared.';
	      case 'initial-input-focus':
	        return "option".concat(labels.length > 1 ? 's' : '', " ").concat(labels.join(','), ", selected.");
	      case 'select-option':
	        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
	      default:
	        return '';
	    }
	  },
	  onFocus: function onFocus(props) {
	    var context = props.context,
	      focused = props.focused,
	      options = props.options,
	      _props$label2 = props.label,
	      label = _props$label2 === void 0 ? '' : _props$label2,
	      selectValue = props.selectValue,
	      isDisabled = props.isDisabled,
	      isSelected = props.isSelected;
	    var getArrayIndex = function getArrayIndex(arr, item) {
	      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : '';
	    };
	    if (context === 'value' && selectValue) {
	      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
	    }
	    if (context === 'menu') {
	      var disabled = isDisabled ? ' disabled' : '';
	      var status = "".concat(isSelected ? 'selected' : 'focused').concat(disabled);
	      return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options, focused), ".");
	    }
	    return '';
	  },
	  onFilter: function onFilter(props) {
	    var inputValue = props.inputValue,
	      resultsMessage = props.resultsMessage;
	    return "".concat(resultsMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
	  }
	};
	var LiveRegion = function LiveRegion(props) {
	  var ariaSelection = props.ariaSelection,
	    focusedOption = props.focusedOption,
	    focusedValue = props.focusedValue,
	    focusableOptions = props.focusableOptions,
	    isFocused = props.isFocused,
	    selectValue = props.selectValue,
	    selectProps = props.selectProps,
	    id = props.id;
	  var ariaLiveMessages = selectProps.ariaLiveMessages,
	    getOptionLabel = selectProps.getOptionLabel,
	    inputValue = selectProps.inputValue,
	    isMulti = selectProps.isMulti,
	    isOptionDisabled = selectProps.isOptionDisabled,
	    isSearchable = selectProps.isSearchable,
	    menuIsOpen = selectProps.menuIsOpen,
	    options = selectProps.options,
	    screenReaderStatus = selectProps.screenReaderStatus,
	    tabSelectsValue = selectProps.tabSelectsValue;
	  var ariaLabel = selectProps['aria-label'];
	  var ariaLive = selectProps['aria-live'];

	  // Update aria live message configuration when prop changes
	  var messages = reactExports.useMemo(function () {
	    return _objectSpread2$2(_objectSpread2$2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
	  }, [ariaLiveMessages]);

	  // Update aria live selected option when prop changes
	  var ariaSelected = reactExports.useMemo(function () {
	    var message = '';
	    if (ariaSelection && messages.onChange) {
	      var option = ariaSelection.option,
	        selectedOptions = ariaSelection.options,
	        removedValue = ariaSelection.removedValue,
	        removedValues = ariaSelection.removedValues,
	        value = ariaSelection.value;
	      // select-option when !isMulti does not return option so we assume selected option is value
	      var asOption = function asOption(val) {
	        return !Array.isArray(val) ? val : null;
	      };

	      // If there is just one item from the action then get its label
	      var selected = removedValue || option || asOption(value);
	      var label = selected ? getOptionLabel(selected) : '';

	      // If there are multiple items from the action then return an array of labels
	      var multiSelected = selectedOptions || removedValues || undefined;
	      var labels = multiSelected ? multiSelected.map(getOptionLabel) : [];
	      var onChangeProps = _objectSpread2$2({
	        // multiSelected items are usually items that have already been selected
	        // or set by the user as a default value so we assume they are not disabled
	        isDisabled: selected && isOptionDisabled(selected, selectValue),
	        label: label,
	        labels: labels
	      }, ariaSelection);
	      message = messages.onChange(onChangeProps);
	    }
	    return message;
	  }, [ariaSelection, messages, isOptionDisabled, selectValue, getOptionLabel]);
	  var ariaFocused = reactExports.useMemo(function () {
	    var focusMsg = '';
	    var focused = focusedOption || focusedValue;
	    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
	    if (focused && messages.onFocus) {
	      var onFocusProps = {
	        focused: focused,
	        label: getOptionLabel(focused),
	        isDisabled: isOptionDisabled(focused, selectValue),
	        isSelected: isSelected,
	        options: focusableOptions,
	        context: focused === focusedOption ? 'menu' : 'value',
	        selectValue: selectValue
	      };
	      focusMsg = messages.onFocus(onFocusProps);
	    }
	    return focusMsg;
	  }, [focusedOption, focusedValue, getOptionLabel, isOptionDisabled, messages, focusableOptions, selectValue]);
	  var ariaResults = reactExports.useMemo(function () {
	    var resultsMsg = '';
	    if (menuIsOpen && options.length && messages.onFilter) {
	      var resultsMessage = screenReaderStatus({
	        count: focusableOptions.length
	      });
	      resultsMsg = messages.onFilter({
	        inputValue: inputValue,
	        resultsMessage: resultsMessage
	      });
	    }
	    return resultsMsg;
	  }, [focusableOptions, inputValue, menuIsOpen, messages, options, screenReaderStatus]);
	  var ariaGuidance = reactExports.useMemo(function () {
	    var guidanceMsg = '';
	    if (messages.guidance) {
	      var context = focusedValue ? 'value' : menuIsOpen ? 'menu' : 'input';
	      guidanceMsg = messages.guidance({
	        'aria-label': ariaLabel,
	        context: context,
	        isDisabled: focusedOption && isOptionDisabled(focusedOption, selectValue),
	        isMulti: isMulti,
	        isSearchable: isSearchable,
	        tabSelectsValue: tabSelectsValue
	      });
	    }
	    return guidanceMsg;
	  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue]);
	  var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
	  var ScreenReaderText = jsx(reactExports.Fragment, null, jsx("span", {
	    id: "aria-selection"
	  }, ariaSelected), jsx("span", {
	    id: "aria-context"
	  }, ariaContext));
	  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus';
	  return jsx(reactExports.Fragment, null, jsx(A11yText$1, {
	    id: id
	  }, isInitialFocus && ScreenReaderText), jsx(A11yText$1, {
	    "aria-live": ariaLive,
	    "aria-atomic": "false",
	    "aria-relevant": "additions text"
	  }, isFocused && !isInitialFocus && ScreenReaderText));
	};
	var LiveRegion$1 = LiveRegion;
	var diacritics = [{
	  base: 'A',
	  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
	}, {
	  base: 'AA',
	  letters: "\uA732"
	}, {
	  base: 'AE',
	  letters: "\xC6\u01FC\u01E2"
	}, {
	  base: 'AO',
	  letters: "\uA734"
	}, {
	  base: 'AU',
	  letters: "\uA736"
	}, {
	  base: 'AV',
	  letters: "\uA738\uA73A"
	}, {
	  base: 'AY',
	  letters: "\uA73C"
	}, {
	  base: 'B',
	  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
	}, {
	  base: 'C',
	  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
	}, {
	  base: 'D',
	  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
	}, {
	  base: 'DZ',
	  letters: "\u01F1\u01C4"
	}, {
	  base: 'Dz',
	  letters: "\u01F2\u01C5"
	}, {
	  base: 'E',
	  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
	}, {
	  base: 'F',
	  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
	}, {
	  base: 'G',
	  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
	}, {
	  base: 'H',
	  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
	}, {
	  base: 'I',
	  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
	}, {
	  base: 'J',
	  letters: "J\u24BF\uFF2A\u0134\u0248"
	}, {
	  base: 'K',
	  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
	}, {
	  base: 'L',
	  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
	}, {
	  base: 'LJ',
	  letters: "\u01C7"
	}, {
	  base: 'Lj',
	  letters: "\u01C8"
	}, {
	  base: 'M',
	  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
	}, {
	  base: 'N',
	  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
	}, {
	  base: 'NJ',
	  letters: "\u01CA"
	}, {
	  base: 'Nj',
	  letters: "\u01CB"
	}, {
	  base: 'O',
	  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
	}, {
	  base: 'OI',
	  letters: "\u01A2"
	}, {
	  base: 'OO',
	  letters: "\uA74E"
	}, {
	  base: 'OU',
	  letters: "\u0222"
	}, {
	  base: 'P',
	  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
	}, {
	  base: 'Q',
	  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
	}, {
	  base: 'R',
	  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
	}, {
	  base: 'S',
	  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
	}, {
	  base: 'T',
	  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
	}, {
	  base: 'TZ',
	  letters: "\uA728"
	}, {
	  base: 'U',
	  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
	}, {
	  base: 'V',
	  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
	}, {
	  base: 'VY',
	  letters: "\uA760"
	}, {
	  base: 'W',
	  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
	}, {
	  base: 'X',
	  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
	}, {
	  base: 'Y',
	  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
	}, {
	  base: 'Z',
	  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
	}, {
	  base: 'a',
	  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
	}, {
	  base: 'aa',
	  letters: "\uA733"
	}, {
	  base: 'ae',
	  letters: "\xE6\u01FD\u01E3"
	}, {
	  base: 'ao',
	  letters: "\uA735"
	}, {
	  base: 'au',
	  letters: "\uA737"
	}, {
	  base: 'av',
	  letters: "\uA739\uA73B"
	}, {
	  base: 'ay',
	  letters: "\uA73D"
	}, {
	  base: 'b',
	  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
	}, {
	  base: 'c',
	  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
	}, {
	  base: 'd',
	  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
	}, {
	  base: 'dz',
	  letters: "\u01F3\u01C6"
	}, {
	  base: 'e',
	  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
	}, {
	  base: 'f',
	  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
	}, {
	  base: 'g',
	  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
	}, {
	  base: 'h',
	  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
	}, {
	  base: 'hv',
	  letters: "\u0195"
	}, {
	  base: 'i',
	  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
	}, {
	  base: 'j',
	  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
	}, {
	  base: 'k',
	  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
	}, {
	  base: 'l',
	  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
	}, {
	  base: 'lj',
	  letters: "\u01C9"
	}, {
	  base: 'm',
	  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
	}, {
	  base: 'n',
	  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
	}, {
	  base: 'nj',
	  letters: "\u01CC"
	}, {
	  base: 'o',
	  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
	}, {
	  base: 'oi',
	  letters: "\u01A3"
	}, {
	  base: 'ou',
	  letters: "\u0223"
	}, {
	  base: 'oo',
	  letters: "\uA74F"
	}, {
	  base: 'p',
	  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
	}, {
	  base: 'q',
	  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
	}, {
	  base: 'r',
	  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
	}, {
	  base: 's',
	  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
	}, {
	  base: 't',
	  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
	}, {
	  base: 'tz',
	  letters: "\uA729"
	}, {
	  base: 'u',
	  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
	}, {
	  base: 'v',
	  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
	}, {
	  base: 'vy',
	  letters: "\uA761"
	}, {
	  base: 'w',
	  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
	}, {
	  base: 'x',
	  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
	}, {
	  base: 'y',
	  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
	}, {
	  base: 'z',
	  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
	}];
	var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
	  return d.letters;
	}).join('') + ']', 'g');
	var diacriticToBase = {};
	for (var i = 0; i < diacritics.length; i++) {
	  var diacritic = diacritics[i];
	  for (var j = 0; j < diacritic.letters.length; j++) {
	    diacriticToBase[diacritic.letters[j]] = diacritic.base;
	  }
	}
	var stripDiacritics = function stripDiacritics(str) {
	  return str.replace(anyDiacritic, function (match) {
	    return diacriticToBase[match];
	  });
	};
	var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);
	var trimString = function trimString(str) {
	  return str.replace(/^\s+|\s+$/g, '');
	};
	var defaultStringify = function defaultStringify(option) {
	  return "".concat(option.label, " ").concat(option.value);
	};
	var createFilter = function createFilter(config) {
	  return function (option, rawInput) {
	    // eslint-disable-next-line no-underscore-dangle
	    if (option.data.__isNew__) return true;
	    var _ignoreCase$ignoreAcc = _objectSpread2$2({
	        ignoreCase: true,
	        ignoreAccents: true,
	        stringify: defaultStringify,
	        trim: true,
	        matchFrom: 'any'
	      }, config),
	      ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
	      ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
	      stringify = _ignoreCase$ignoreAcc.stringify,
	      trim = _ignoreCase$ignoreAcc.trim,
	      matchFrom = _ignoreCase$ignoreAcc.matchFrom;
	    var input = trim ? trimString(rawInput) : rawInput;
	    var candidate = trim ? trimString(stringify(option)) : stringify(option);
	    if (ignoreCase) {
	      input = input.toLowerCase();
	      candidate = candidate.toLowerCase();
	    }
	    if (ignoreAccents) {
	      input = memoizedStripDiacriticsForInput(input);
	      candidate = stripDiacritics(candidate);
	    }
	    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
	  };
	};
	var _excluded = ["innerRef"];
	function DummyInput(_ref) {
	  var innerRef = _ref.innerRef,
	    props = _objectWithoutProperties(_ref, _excluded);
	  // Remove animation props not meant for HTML elements
	  var filteredProps = removeProps(props, 'onExited', 'in', 'enter', 'exit', 'appear');
	  return jsx("input", _extends({
	    ref: innerRef
	  }, filteredProps, {
	    css: /*#__PURE__*/css$2({
	      label: 'dummyInput',
	      // get rid of any default styles
	      background: 0,
	      border: 0,
	      // important! this hides the flashing cursor
	      caretColor: 'transparent',
	      fontSize: 'inherit',
	      gridArea: '1 / 1 / 2 / 3',
	      outline: 0,
	      padding: 0,
	      // important! without `width` browsers won't allow focus
	      width: 1,
	      // remove cursor on desktop
	      color: 'transparent',
	      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
	      left: -100,
	      opacity: 0,
	      position: 'relative',
	      transform: 'scale(.01)'
	    }, "" , "" )
	  }));
	}
	var cancelScroll = function cancelScroll(event) {
	  event.preventDefault();
	  event.stopPropagation();
	};
	function useScrollCapture(_ref) {
	  var isEnabled = _ref.isEnabled,
	    onBottomArrive = _ref.onBottomArrive,
	    onBottomLeave = _ref.onBottomLeave,
	    onTopArrive = _ref.onTopArrive,
	    onTopLeave = _ref.onTopLeave;
	  var isBottom = reactExports.useRef(false);
	  var isTop = reactExports.useRef(false);
	  var touchStart = reactExports.useRef(0);
	  var scrollTarget = reactExports.useRef(null);
	  var handleEventDelta = reactExports.useCallback(function (event, delta) {
	    if (scrollTarget.current === null) return;
	    var _scrollTarget$current = scrollTarget.current,
	      scrollTop = _scrollTarget$current.scrollTop,
	      scrollHeight = _scrollTarget$current.scrollHeight,
	      clientHeight = _scrollTarget$current.clientHeight;
	    var target = scrollTarget.current;
	    var isDeltaPositive = delta > 0;
	    var availableScroll = scrollHeight - clientHeight - scrollTop;
	    var shouldCancelScroll = false;

	    // reset bottom/top flags
	    if (availableScroll > delta && isBottom.current) {
	      if (onBottomLeave) onBottomLeave(event);
	      isBottom.current = false;
	    }
	    if (isDeltaPositive && isTop.current) {
	      if (onTopLeave) onTopLeave(event);
	      isTop.current = false;
	    }

	    // bottom limit
	    if (isDeltaPositive && delta > availableScroll) {
	      if (onBottomArrive && !isBottom.current) {
	        onBottomArrive(event);
	      }
	      target.scrollTop = scrollHeight;
	      shouldCancelScroll = true;
	      isBottom.current = true;

	      // top limit
	    } else if (!isDeltaPositive && -delta > scrollTop) {
	      if (onTopArrive && !isTop.current) {
	        onTopArrive(event);
	      }
	      target.scrollTop = 0;
	      shouldCancelScroll = true;
	      isTop.current = true;
	    }

	    // cancel scroll
	    if (shouldCancelScroll) {
	      cancelScroll(event);
	    }
	  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
	  var onWheel = reactExports.useCallback(function (event) {
	    handleEventDelta(event, event.deltaY);
	  }, [handleEventDelta]);
	  var onTouchStart = reactExports.useCallback(function (event) {
	    // set touch start so we can calculate touchmove delta
	    touchStart.current = event.changedTouches[0].clientY;
	  }, []);
	  var onTouchMove = reactExports.useCallback(function (event) {
	    var deltaY = touchStart.current - event.changedTouches[0].clientY;
	    handleEventDelta(event, deltaY);
	  }, [handleEventDelta]);
	  var startListening = reactExports.useCallback(function (el) {
	    // bail early if no element is available to attach to
	    if (!el) return;
	    var notPassive = supportsPassiveEvents ? {
	      passive: false
	    } : false;
	    el.addEventListener('wheel', onWheel, notPassive);
	    el.addEventListener('touchstart', onTouchStart, notPassive);
	    el.addEventListener('touchmove', onTouchMove, notPassive);
	  }, [onTouchMove, onTouchStart, onWheel]);
	  var stopListening = reactExports.useCallback(function (el) {
	    // bail early if no element is available to detach from
	    if (!el) return;
	    el.removeEventListener('wheel', onWheel, false);
	    el.removeEventListener('touchstart', onTouchStart, false);
	    el.removeEventListener('touchmove', onTouchMove, false);
	  }, [onTouchMove, onTouchStart, onWheel]);
	  reactExports.useEffect(function () {
	    if (!isEnabled) return;
	    var element = scrollTarget.current;
	    startListening(element);
	    return function () {
	      stopListening(element);
	    };
	  }, [isEnabled, startListening, stopListening]);
	  return function (element) {
	    scrollTarget.current = element;
	  };
	}
	var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
	var LOCK_STYLES = {
	  boxSizing: 'border-box',
	  // account for possible declaration `width: 100%;` on body
	  overflow: 'hidden',
	  position: 'relative',
	  height: '100%'
	};
	function preventTouchMove(e) {
	  e.preventDefault();
	}
	function allowTouchMove(e) {
	  e.stopPropagation();
	}
	function preventInertiaScroll() {
	  var top = this.scrollTop;
	  var totalScroll = this.scrollHeight;
	  var currentScroll = top + this.offsetHeight;
	  if (top === 0) {
	    this.scrollTop = 1;
	  } else if (currentScroll === totalScroll) {
	    this.scrollTop = top - 1;
	  }
	}

	// `ontouchstart` check works on most browsers
	// `maxTouchPoints` works on IE10/11 and Surface
	function isTouchDevice() {
	  return 'ontouchstart' in window || navigator.maxTouchPoints;
	}
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	var activeScrollLocks = 0;
	var listenerOptions = {
	  capture: false,
	  passive: false
	};
	function useScrollLock(_ref) {
	  var isEnabled = _ref.isEnabled,
	    _ref$accountForScroll = _ref.accountForScrollbars,
	    accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
	  var originalStyles = reactExports.useRef({});
	  var scrollTarget = reactExports.useRef(null);
	  var addScrollLock = reactExports.useCallback(function (touchScrollTarget) {
	    if (!canUseDOM) return;
	    var target = document.body;
	    var targetStyle = target && target.style;
	    if (accountForScrollbars) {
	      // store any styles already applied to the body
	      STYLE_KEYS.forEach(function (key) {
	        var val = targetStyle && targetStyle[key];
	        originalStyles.current[key] = val;
	      });
	    }

	    // apply the lock styles and padding if this is the first scroll lock
	    if (accountForScrollbars && activeScrollLocks < 1) {
	      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
	      var clientWidth = document.body ? document.body.clientWidth : 0;
	      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
	      Object.keys(LOCK_STYLES).forEach(function (key) {
	        var val = LOCK_STYLES[key];
	        if (targetStyle) {
	          targetStyle[key] = val;
	        }
	      });
	      if (targetStyle) {
	        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
	      }
	    }

	    // account for touch devices
	    if (target && isTouchDevice()) {
	      // Mobile Safari ignores { overflow: hidden } declaration on the body.
	      target.addEventListener('touchmove', preventTouchMove, listenerOptions);

	      // Allow scroll on provided target
	      if (touchScrollTarget) {
	        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions);
	        touchScrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions);
	      }
	    }

	    // increment active scroll locks
	    activeScrollLocks += 1;
	  }, [accountForScrollbars]);
	  var removeScrollLock = reactExports.useCallback(function (touchScrollTarget) {
	    if (!canUseDOM) return;
	    var target = document.body;
	    var targetStyle = target && target.style;

	    // safely decrement active scroll locks
	    activeScrollLocks = Math.max(activeScrollLocks - 1, 0);

	    // reapply original body styles, if any
	    if (accountForScrollbars && activeScrollLocks < 1) {
	      STYLE_KEYS.forEach(function (key) {
	        var val = originalStyles.current[key];
	        if (targetStyle) {
	          targetStyle[key] = val;
	        }
	      });
	    }

	    // remove touch listeners
	    if (target && isTouchDevice()) {
	      target.removeEventListener('touchmove', preventTouchMove, listenerOptions);
	      if (touchScrollTarget) {
	        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
	        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
	      }
	    }
	  }, [accountForScrollbars]);
	  reactExports.useEffect(function () {
	    if (!isEnabled) return;
	    var element = scrollTarget.current;
	    addScrollLock(element);
	    return function () {
	      removeScrollLock(element);
	    };
	  }, [isEnabled, addScrollLock, removeScrollLock]);
	  return function (element) {
	    scrollTarget.current = element;
	  };
	}
	var blurSelectInput = function blurSelectInput() {
	  return document.activeElement && document.activeElement.blur();
	};
	var _ref2$1 = {
	  name: "1kfdb0e",
	  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
	} ;
	function ScrollManager(_ref) {
	  var children = _ref.children,
	    lockEnabled = _ref.lockEnabled,
	    _ref$captureEnabled = _ref.captureEnabled,
	    captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled,
	    onBottomArrive = _ref.onBottomArrive,
	    onBottomLeave = _ref.onBottomLeave,
	    onTopArrive = _ref.onTopArrive,
	    onTopLeave = _ref.onTopLeave;
	  var setScrollCaptureTarget = useScrollCapture({
	    isEnabled: captureEnabled,
	    onBottomArrive: onBottomArrive,
	    onBottomLeave: onBottomLeave,
	    onTopArrive: onTopArrive,
	    onTopLeave: onTopLeave
	  });
	  var setScrollLockTarget = useScrollLock({
	    isEnabled: lockEnabled
	  });
	  var targetRef = function targetRef(element) {
	    setScrollCaptureTarget(element);
	    setScrollLockTarget(element);
	  };
	  return jsx(reactExports.Fragment, null, lockEnabled && jsx("div", {
	    onClick: blurSelectInput,
	    css: _ref2$1
	  }), children(targetRef));
	}
	var _ref2 = {
	  name: "1a0ro4n-requiredInput",
	  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
	} ;
	var RequiredInput = function RequiredInput(_ref) {
	  var name = _ref.name,
	    onFocus = _ref.onFocus;
	  return jsx("input", {
	    required: true,
	    name: name,
	    tabIndex: -1,
	    "aria-hidden": "true",
	    onFocus: onFocus,
	    css: _ref2
	    // Prevent `Switching from uncontrolled to controlled` error
	    ,

	    value: "",
	    onChange: function onChange() {}
	  });
	};
	var RequiredInput$1 = RequiredInput;
	var formatGroupLabel = function formatGroupLabel(group) {
	  return group.label;
	};
	var getOptionLabel$1 = function getOptionLabel(option) {
	  return option.label;
	};
	var getOptionValue$1 = function getOptionValue(option) {
	  return option.value;
	};
	var isOptionDisabled = function isOptionDisabled(option) {
	  return !!option.isDisabled;
	};
	var defaultStyles = {
	  clearIndicator: clearIndicatorCSS,
	  container: containerCSS,
	  control: css$1,
	  dropdownIndicator: dropdownIndicatorCSS,
	  group: groupCSS,
	  groupHeading: groupHeadingCSS,
	  indicatorsContainer: indicatorsContainerCSS,
	  indicatorSeparator: indicatorSeparatorCSS,
	  input: inputCSS,
	  loadingIndicator: loadingIndicatorCSS,
	  loadingMessage: loadingMessageCSS,
	  menu: menuCSS,
	  menuList: menuListCSS,
	  menuPortal: menuPortalCSS,
	  multiValue: multiValueCSS,
	  multiValueLabel: multiValueLabelCSS,
	  multiValueRemove: multiValueRemoveCSS,
	  noOptionsMessage: noOptionsMessageCSS,
	  option: optionCSS,
	  placeholder: placeholderCSS,
	  singleValue: css,
	  valueContainer: valueContainerCSS
	};
	var colors = {
	  primary: '#2684FF',
	  primary75: '#4C9AFF',
	  primary50: '#B2D4FF',
	  primary25: '#DEEBFF',
	  danger: '#DE350B',
	  dangerLight: '#FFBDAD',
	  neutral0: 'hsl(0, 0%, 100%)',
	  neutral5: 'hsl(0, 0%, 95%)',
	  neutral10: 'hsl(0, 0%, 90%)',
	  neutral20: 'hsl(0, 0%, 80%)',
	  neutral30: 'hsl(0, 0%, 70%)',
	  neutral40: 'hsl(0, 0%, 60%)',
	  neutral50: 'hsl(0, 0%, 50%)',
	  neutral60: 'hsl(0, 0%, 40%)',
	  neutral70: 'hsl(0, 0%, 30%)',
	  neutral80: 'hsl(0, 0%, 20%)',
	  neutral90: 'hsl(0, 0%, 10%)'
	};
	var borderRadius = 4;
	// Used to calculate consistent margin/padding on elements
	var baseUnit = 4;
	// The minimum height of the control
	var controlHeight = 38;
	// The amount of space between the control and menu */
	var menuGutter = baseUnit * 2;
	var spacing = {
	  baseUnit: baseUnit,
	  controlHeight: controlHeight,
	  menuGutter: menuGutter
	};
	var defaultTheme = {
	  borderRadius: borderRadius,
	  colors: colors,
	  spacing: spacing
	};
	var defaultProps = {
	  'aria-live': 'polite',
	  backspaceRemovesValue: true,
	  blurInputOnSelect: isTouchCapable(),
	  captureMenuScroll: !isTouchCapable(),
	  classNames: {},
	  closeMenuOnSelect: true,
	  closeMenuOnScroll: false,
	  components: {},
	  controlShouldRenderValue: true,
	  escapeClearsValue: false,
	  filterOption: createFilter(),
	  formatGroupLabel: formatGroupLabel,
	  getOptionLabel: getOptionLabel$1,
	  getOptionValue: getOptionValue$1,
	  isDisabled: false,
	  isLoading: false,
	  isMulti: false,
	  isRtl: false,
	  isSearchable: true,
	  isOptionDisabled: isOptionDisabled,
	  loadingMessage: function loadingMessage() {
	    return 'Loading...';
	  },
	  maxMenuHeight: 300,
	  minMenuHeight: 140,
	  menuIsOpen: false,
	  menuPlacement: 'bottom',
	  menuPosition: 'absolute',
	  menuShouldBlockScroll: false,
	  menuShouldScrollIntoView: !isMobileDevice(),
	  noOptionsMessage: function noOptionsMessage() {
	    return 'No options';
	  },
	  openMenuOnFocus: false,
	  openMenuOnClick: true,
	  options: [],
	  pageSize: 5,
	  placeholder: 'Select...',
	  screenReaderStatus: function screenReaderStatus(_ref) {
	    var count = _ref.count;
	    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
	  },
	  styles: {},
	  tabIndex: 0,
	  tabSelectsValue: true,
	  unstyled: false
	};
	function toCategorizedOption(props, option, selectValue, index) {
	  var isDisabled = _isOptionDisabled(props, option, selectValue);
	  var isSelected = _isOptionSelected(props, option, selectValue);
	  var label = getOptionLabel(props, option);
	  var value = getOptionValue(props, option);
	  return {
	    type: 'option',
	    data: option,
	    isDisabled: isDisabled,
	    isSelected: isSelected,
	    label: label,
	    value: value,
	    index: index
	  };
	}
	function buildCategorizedOptions(props, selectValue) {
	  return props.options.map(function (groupOrOption, groupOrOptionIndex) {
	    if ('options' in groupOrOption) {
	      var categorizedOptions = groupOrOption.options.map(function (option, optionIndex) {
	        return toCategorizedOption(props, option, selectValue, optionIndex);
	      }).filter(function (categorizedOption) {
	        return isFocusable(props, categorizedOption);
	      });
	      return categorizedOptions.length > 0 ? {
	        type: 'group',
	        data: groupOrOption,
	        options: categorizedOptions,
	        index: groupOrOptionIndex
	      } : undefined;
	    }
	    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
	    return isFocusable(props, categorizedOption) ? categorizedOption : undefined;
	  }).filter(notNullish);
	}
	function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
	  return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
	    if (categorizedOption.type === 'group') {
	      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function (option) {
	        return option.data;
	      })));
	    } else {
	      optionsAccumulator.push(categorizedOption.data);
	    }
	    return optionsAccumulator;
	  }, []);
	}
	function buildFocusableOptions(props, selectValue) {
	  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
	}
	function isFocusable(props, categorizedOption) {
	  var _props$inputValue = props.inputValue,
	    inputValue = _props$inputValue === void 0 ? '' : _props$inputValue;
	  var data = categorizedOption.data,
	    isSelected = categorizedOption.isSelected,
	    label = categorizedOption.label,
	    value = categorizedOption.value;
	  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
	    label: label,
	    value: value,
	    data: data
	  }, inputValue);
	}
	function getNextFocusedValue(state, nextSelectValue) {
	  var focusedValue = state.focusedValue,
	    lastSelectValue = state.selectValue;
	  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
	  if (lastFocusedIndex > -1) {
	    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
	    if (nextFocusedIndex > -1) {
	      // the focused value is still in the selectValue, return it
	      return focusedValue;
	    } else if (lastFocusedIndex < nextSelectValue.length) {
	      // the focusedValue is not present in the next selectValue array by
	      // reference, so return the new value at the same index
	      return nextSelectValue[lastFocusedIndex];
	    }
	  }
	  return null;
	}
	function getNextFocusedOption(state, options) {
	  var lastFocusedOption = state.focusedOption;
	  return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
	}
	var getOptionLabel = function getOptionLabel(props, data) {
	  return props.getOptionLabel(data);
	};
	var getOptionValue = function getOptionValue(props, data) {
	  return props.getOptionValue(data);
	};
	function _isOptionDisabled(props, option, selectValue) {
	  return typeof props.isOptionDisabled === 'function' ? props.isOptionDisabled(option, selectValue) : false;
	}
	function _isOptionSelected(props, option, selectValue) {
	  if (selectValue.indexOf(option) > -1) return true;
	  if (typeof props.isOptionSelected === 'function') {
	    return props.isOptionSelected(option, selectValue);
	  }
	  var candidate = getOptionValue(props, option);
	  return selectValue.some(function (i) {
	    return getOptionValue(props, i) === candidate;
	  });
	}
	function _filterOption(props, option, inputValue) {
	  return props.filterOption ? props.filterOption(option, inputValue) : true;
	}
	var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
	  var hideSelectedOptions = props.hideSelectedOptions,
	    isMulti = props.isMulti;
	  if (hideSelectedOptions === undefined) return isMulti;
	  return hideSelectedOptions;
	};
	var instanceId = 1;
	var Select = /*#__PURE__*/function (_Component) {
	  _inherits(Select, _Component);
	  var _super = _createSuper(Select);
	  // Misc. Instance Properties
	  // ------------------------------

	  // TODO

	  // Refs
	  // ------------------------------

	  // Lifecycle
	  // ------------------------------

	  function Select(_props) {
	    var _this;
	    _classCallCheck(this, Select);
	    _this = _super.call(this, _props);
	    _this.state = {
	      ariaSelection: null,
	      focusedOption: null,
	      focusedValue: null,
	      inputIsHidden: false,
	      isFocused: false,
	      selectValue: [],
	      clearFocusValueOnUpdate: false,
	      prevWasFocused: false,
	      inputIsHiddenAfterUpdate: undefined,
	      prevProps: undefined
	    };
	    _this.blockOptionHover = false;
	    _this.isComposing = false;
	    _this.commonProps = void 0;
	    _this.initialTouchX = 0;
	    _this.initialTouchY = 0;
	    _this.instancePrefix = '';
	    _this.openAfterFocus = false;
	    _this.scrollToFocusedOptionOnUpdate = false;
	    _this.userIsDragging = void 0;
	    _this.controlRef = null;
	    _this.getControlRef = function (ref) {
	      _this.controlRef = ref;
	    };
	    _this.focusedOptionRef = null;
	    _this.getFocusedOptionRef = function (ref) {
	      _this.focusedOptionRef = ref;
	    };
	    _this.menuListRef = null;
	    _this.getMenuListRef = function (ref) {
	      _this.menuListRef = ref;
	    };
	    _this.inputRef = null;
	    _this.getInputRef = function (ref) {
	      _this.inputRef = ref;
	    };
	    _this.focus = _this.focusInput;
	    _this.blur = _this.blurInput;
	    _this.onChange = function (newValue, actionMeta) {
	      var _this$props = _this.props,
	        onChange = _this$props.onChange,
	        name = _this$props.name;
	      actionMeta.name = name;
	      _this.ariaOnChange(newValue, actionMeta);
	      onChange(newValue, actionMeta);
	    };
	    _this.setValue = function (newValue, action, option) {
	      var _this$props2 = _this.props,
	        closeMenuOnSelect = _this$props2.closeMenuOnSelect,
	        isMulti = _this$props2.isMulti,
	        inputValue = _this$props2.inputValue;
	      _this.onInputChange('', {
	        action: 'set-value',
	        prevInputValue: inputValue
	      });
	      if (closeMenuOnSelect) {
	        _this.setState({
	          inputIsHiddenAfterUpdate: !isMulti
	        });
	        _this.onMenuClose();
	      }
	      // when the select value should change, we should reset focusedValue
	      _this.setState({
	        clearFocusValueOnUpdate: true
	      });
	      _this.onChange(newValue, {
	        action: action,
	        option: option
	      });
	    };
	    _this.selectOption = function (newValue) {
	      var _this$props3 = _this.props,
	        blurInputOnSelect = _this$props3.blurInputOnSelect,
	        isMulti = _this$props3.isMulti,
	        name = _this$props3.name;
	      var selectValue = _this.state.selectValue;
	      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
	      var isDisabled = _this.isOptionDisabled(newValue, selectValue);
	      if (deselected) {
	        var candidate = _this.getOptionValue(newValue);
	        _this.setValue(multiValueAsValue(selectValue.filter(function (i) {
	          return _this.getOptionValue(i) !== candidate;
	        })), 'deselect-option', newValue);
	      } else if (!isDisabled) {
	        // Select option if option is not disabled
	        if (isMulti) {
	          _this.setValue(multiValueAsValue([].concat(_toConsumableArray(selectValue), [newValue])), 'select-option', newValue);
	        } else {
	          _this.setValue(singleValueAsValue(newValue), 'select-option');
	        }
	      } else {
	        _this.ariaOnChange(singleValueAsValue(newValue), {
	          action: 'select-option',
	          option: newValue,
	          name: name
	        });
	        return;
	      }
	      if (blurInputOnSelect) {
	        _this.blurInput();
	      }
	    };
	    _this.removeValue = function (removedValue) {
	      var isMulti = _this.props.isMulti;
	      var selectValue = _this.state.selectValue;
	      var candidate = _this.getOptionValue(removedValue);
	      var newValueArray = selectValue.filter(function (i) {
	        return _this.getOptionValue(i) !== candidate;
	      });
	      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
	      _this.onChange(newValue, {
	        action: 'remove-value',
	        removedValue: removedValue
	      });
	      _this.focusInput();
	    };
	    _this.clearValue = function () {
	      var selectValue = _this.state.selectValue;
	      _this.onChange(valueTernary(_this.props.isMulti, [], null), {
	        action: 'clear',
	        removedValues: selectValue
	      });
	    };
	    _this.popValue = function () {
	      var isMulti = _this.props.isMulti;
	      var selectValue = _this.state.selectValue;
	      var lastSelectedValue = selectValue[selectValue.length - 1];
	      var newValueArray = selectValue.slice(0, selectValue.length - 1);
	      var newValue = valueTernary(isMulti, newValueArray, newValueArray[0] || null);
	      _this.onChange(newValue, {
	        action: 'pop-value',
	        removedValue: lastSelectedValue
	      });
	    };
	    _this.getValue = function () {
	      return _this.state.selectValue;
	    };
	    _this.cx = function () {
	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
	    };
	    _this.getOptionLabel = function (data) {
	      return getOptionLabel(_this.props, data);
	    };
	    _this.getOptionValue = function (data) {
	      return getOptionValue(_this.props, data);
	    };
	    _this.getStyles = function (key, props) {
	      var unstyled = _this.props.unstyled;
	      var base = defaultStyles[key](props, unstyled);
	      base.boxSizing = 'border-box';
	      var custom = _this.props.styles[key];
	      return custom ? custom(base, props) : base;
	    };
	    _this.getClassNames = function (key, props) {
	      var _this$props$className, _this$props$className2;
	      return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === void 0 ? void 0 : _this$props$className.call(_this$props$className2, props);
	    };
	    _this.getElementId = function (element) {
	      return "".concat(_this.instancePrefix, "-").concat(element);
	    };
	    _this.getComponents = function () {
	      return defaultComponents(_this.props);
	    };
	    _this.buildCategorizedOptions = function () {
	      return buildCategorizedOptions(_this.props, _this.state.selectValue);
	    };
	    _this.getCategorizedOptions = function () {
	      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
	    };
	    _this.buildFocusableOptions = function () {
	      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
	    };
	    _this.getFocusableOptions = function () {
	      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
	    };
	    _this.ariaOnChange = function (value, actionMeta) {
	      _this.setState({
	        ariaSelection: _objectSpread2$2({
	          value: value
	        }, actionMeta)
	      });
	    };
	    _this.onMenuMouseDown = function (event) {
	      if (event.button !== 0) {
	        return;
	      }
	      event.stopPropagation();
	      event.preventDefault();
	      _this.focusInput();
	    };
	    _this.onMenuMouseMove = function (event) {
	      _this.blockOptionHover = false;
	    };
	    _this.onControlMouseDown = function (event) {
	      // Event captured by dropdown indicator
	      if (event.defaultPrevented) {
	        return;
	      }
	      var openMenuOnClick = _this.props.openMenuOnClick;
	      if (!_this.state.isFocused) {
	        if (openMenuOnClick) {
	          _this.openAfterFocus = true;
	        }
	        _this.focusInput();
	      } else if (!_this.props.menuIsOpen) {
	        if (openMenuOnClick) {
	          _this.openMenu('first');
	        }
	      } else {
	        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
	          _this.onMenuClose();
	        }
	      }
	      if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
	        event.preventDefault();
	      }
	    };
	    _this.onDropdownIndicatorMouseDown = function (event) {
	      // ignore mouse events that weren't triggered by the primary button
	      if (event && event.type === 'mousedown' && event.button !== 0) {
	        return;
	      }
	      if (_this.props.isDisabled) return;
	      var _this$props4 = _this.props,
	        isMulti = _this$props4.isMulti,
	        menuIsOpen = _this$props4.menuIsOpen;
	      _this.focusInput();
	      if (menuIsOpen) {
	        _this.setState({
	          inputIsHiddenAfterUpdate: !isMulti
	        });
	        _this.onMenuClose();
	      } else {
	        _this.openMenu('first');
	      }
	      event.preventDefault();
	    };
	    _this.onClearIndicatorMouseDown = function (event) {
	      // ignore mouse events that weren't triggered by the primary button
	      if (event && event.type === 'mousedown' && event.button !== 0) {
	        return;
	      }
	      _this.clearValue();
	      event.preventDefault();
	      _this.openAfterFocus = false;
	      if (event.type === 'touchend') {
	        _this.focusInput();
	      } else {
	        setTimeout(function () {
	          return _this.focusInput();
	        });
	      }
	    };
	    _this.onScroll = function (event) {
	      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
	        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
	          _this.props.onMenuClose();
	        }
	      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
	        if (_this.props.closeMenuOnScroll(event)) {
	          _this.props.onMenuClose();
	        }
	      }
	    };
	    _this.onCompositionStart = function () {
	      _this.isComposing = true;
	    };
	    _this.onCompositionEnd = function () {
	      _this.isComposing = false;
	    };
	    _this.onTouchStart = function (_ref2) {
	      var touches = _ref2.touches;
	      var touch = touches && touches.item(0);
	      if (!touch) {
	        return;
	      }
	      _this.initialTouchX = touch.clientX;
	      _this.initialTouchY = touch.clientY;
	      _this.userIsDragging = false;
	    };
	    _this.onTouchMove = function (_ref3) {
	      var touches = _ref3.touches;
	      var touch = touches && touches.item(0);
	      if (!touch) {
	        return;
	      }
	      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
	      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
	      var moveThreshold = 5;
	      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
	    };
	    _this.onTouchEnd = function (event) {
	      if (_this.userIsDragging) return;

	      // close the menu if the user taps outside
	      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
	      // on events on child elements, not the document (which we've attached this handler to).
	      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
	        _this.blurInput();
	      }

	      // reset move vars
	      _this.initialTouchX = 0;
	      _this.initialTouchY = 0;
	    };
	    _this.onControlTouchEnd = function (event) {
	      if (_this.userIsDragging) return;
	      _this.onControlMouseDown(event);
	    };
	    _this.onClearIndicatorTouchEnd = function (event) {
	      if (_this.userIsDragging) return;
	      _this.onClearIndicatorMouseDown(event);
	    };
	    _this.onDropdownIndicatorTouchEnd = function (event) {
	      if (_this.userIsDragging) return;
	      _this.onDropdownIndicatorMouseDown(event);
	    };
	    _this.handleInputChange = function (event) {
	      var prevInputValue = _this.props.inputValue;
	      var inputValue = event.currentTarget.value;
	      _this.setState({
	        inputIsHiddenAfterUpdate: false
	      });
	      _this.onInputChange(inputValue, {
	        action: 'input-change',
	        prevInputValue: prevInputValue
	      });
	      if (!_this.props.menuIsOpen) {
	        _this.onMenuOpen();
	      }
	    };
	    _this.onInputFocus = function (event) {
	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	      _this.setState({
	        inputIsHiddenAfterUpdate: false,
	        isFocused: true
	      });
	      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
	        _this.openMenu('first');
	      }
	      _this.openAfterFocus = false;
	    };
	    _this.onInputBlur = function (event) {
	      var prevInputValue = _this.props.inputValue;
	      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
	        _this.inputRef.focus();
	        return;
	      }
	      if (_this.props.onBlur) {
	        _this.props.onBlur(event);
	      }
	      _this.onInputChange('', {
	        action: 'input-blur',
	        prevInputValue: prevInputValue
	      });
	      _this.onMenuClose();
	      _this.setState({
	        focusedValue: null,
	        isFocused: false
	      });
	    };
	    _this.onOptionHover = function (focusedOption) {
	      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
	        return;
	      }
	      _this.setState({
	        focusedOption: focusedOption
	      });
	    };
	    _this.shouldHideSelectedOptions = function () {
	      return shouldHideSelectedOptions(_this.props);
	    };
	    _this.onValueInputFocus = function (e) {
	      e.preventDefault();
	      e.stopPropagation();
	      _this.focus();
	    };
	    _this.onKeyDown = function (event) {
	      var _this$props5 = _this.props,
	        isMulti = _this$props5.isMulti,
	        backspaceRemovesValue = _this$props5.backspaceRemovesValue,
	        escapeClearsValue = _this$props5.escapeClearsValue,
	        inputValue = _this$props5.inputValue,
	        isClearable = _this$props5.isClearable,
	        isDisabled = _this$props5.isDisabled,
	        menuIsOpen = _this$props5.menuIsOpen,
	        onKeyDown = _this$props5.onKeyDown,
	        tabSelectsValue = _this$props5.tabSelectsValue,
	        openMenuOnFocus = _this$props5.openMenuOnFocus;
	      var _this$state = _this.state,
	        focusedOption = _this$state.focusedOption,
	        focusedValue = _this$state.focusedValue,
	        selectValue = _this$state.selectValue;
	      if (isDisabled) return;
	      if (typeof onKeyDown === 'function') {
	        onKeyDown(event);
	        if (event.defaultPrevented) {
	          return;
	        }
	      }

	      // Block option hover events when the user has just pressed a key
	      _this.blockOptionHover = true;
	      switch (event.key) {
	        case 'ArrowLeft':
	          if (!isMulti || inputValue) return;
	          _this.focusValue('previous');
	          break;
	        case 'ArrowRight':
	          if (!isMulti || inputValue) return;
	          _this.focusValue('next');
	          break;
	        case 'Delete':
	        case 'Backspace':
	          if (inputValue) return;
	          if (focusedValue) {
	            _this.removeValue(focusedValue);
	          } else {
	            if (!backspaceRemovesValue) return;
	            if (isMulti) {
	              _this.popValue();
	            } else if (isClearable) {
	              _this.clearValue();
	            }
	          }
	          break;
	        case 'Tab':
	          if (_this.isComposing) return;
	          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption ||
	          // don't capture the event if the menu opens on focus and the focused
	          // option is already selected; it breaks the flow of navigation
	          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
	            return;
	          }
	          _this.selectOption(focusedOption);
	          break;
	        case 'Enter':
	          if (event.keyCode === 229) {
	            // ignore the keydown event from an Input Method Editor(IME)
	            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
	            break;
	          }
	          if (menuIsOpen) {
	            if (!focusedOption) return;
	            if (_this.isComposing) return;
	            _this.selectOption(focusedOption);
	            break;
	          }
	          return;
	        case 'Escape':
	          if (menuIsOpen) {
	            _this.setState({
	              inputIsHiddenAfterUpdate: false
	            });
	            _this.onInputChange('', {
	              action: 'menu-close',
	              prevInputValue: inputValue
	            });
	            _this.onMenuClose();
	          } else if (isClearable && escapeClearsValue) {
	            _this.clearValue();
	          }
	          break;
	        case ' ':
	          // space
	          if (inputValue) {
	            return;
	          }
	          if (!menuIsOpen) {
	            _this.openMenu('first');
	            break;
	          }
	          if (!focusedOption) return;
	          _this.selectOption(focusedOption);
	          break;
	        case 'ArrowUp':
	          if (menuIsOpen) {
	            _this.focusOption('up');
	          } else {
	            _this.openMenu('last');
	          }
	          break;
	        case 'ArrowDown':
	          if (menuIsOpen) {
	            _this.focusOption('down');
	          } else {
	            _this.openMenu('first');
	          }
	          break;
	        case 'PageUp':
	          if (!menuIsOpen) return;
	          _this.focusOption('pageup');
	          break;
	        case 'PageDown':
	          if (!menuIsOpen) return;
	          _this.focusOption('pagedown');
	          break;
	        case 'Home':
	          if (!menuIsOpen) return;
	          _this.focusOption('first');
	          break;
	        case 'End':
	          if (!menuIsOpen) return;
	          _this.focusOption('last');
	          break;
	        default:
	          return;
	      }
	      event.preventDefault();
	    };
	    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);
	    _this.state.selectValue = cleanValue(_props.value);

	    // Set focusedOption if menuIsOpen is set on init (e.g. defaultMenuIsOpen)
	    if (_props.menuIsOpen && _this.state.selectValue.length) {
	      var focusableOptions = _this.buildFocusableOptions();
	      var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
	      _this.state.focusedOption = focusableOptions[optionIndex];
	    }
	    return _this;
	  }
	  _createClass(Select, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.startListeningComposition();
	      this.startListeningToTouch();
	      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
	        // Listen to all scroll events, and filter them out inside of 'onScroll'
	        document.addEventListener('scroll', this.onScroll, true);
	      }
	      if (this.props.autoFocus) {
	        this.focusInput();
	      }

	      // Scroll focusedOption into view if menuIsOpen is set on mount (e.g. defaultMenuIsOpen)
	      if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) {
	        scrollIntoView(this.menuListRef, this.focusedOptionRef);
	      }
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps) {
	      var _this$props6 = this.props,
	        isDisabled = _this$props6.isDisabled,
	        menuIsOpen = _this$props6.menuIsOpen;
	      var isFocused = this.state.isFocused;
	      if (
	      // ensure focus is restored correctly when the control becomes enabled
	      isFocused && !isDisabled && prevProps.isDisabled ||
	      // ensure focus is on the Input when the menu opens
	      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
	        this.focusInput();
	      }
	      if (isFocused && isDisabled && !prevProps.isDisabled) {
	        // ensure select state gets blurred in case Select is programmatically disabled while focused
	        // eslint-disable-next-line react/no-did-update-set-state
	        this.setState({
	          isFocused: false
	        }, this.onMenuClose);
	      } else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) {
	        // ensure select state gets focused in case Select is programatically re-enabled while focused (Firefox)
	        // eslint-disable-next-line react/no-did-update-set-state
	        this.setState({
	          isFocused: true
	        });
	      }

	      // scroll the focused option into view if necessary
	      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
	        scrollIntoView(this.menuListRef, this.focusedOptionRef);
	        this.scrollToFocusedOptionOnUpdate = false;
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.stopListeningComposition();
	      this.stopListeningToTouch();
	      document.removeEventListener('scroll', this.onScroll, true);
	    }

	    // ==============================
	    // Consumer Handlers
	    // ==============================
	  }, {
	    key: "onMenuOpen",
	    value: function onMenuOpen() {
	      this.props.onMenuOpen();
	    }
	  }, {
	    key: "onMenuClose",
	    value: function onMenuClose() {
	      this.onInputChange('', {
	        action: 'menu-close',
	        prevInputValue: this.props.inputValue
	      });
	      this.props.onMenuClose();
	    }
	  }, {
	    key: "onInputChange",
	    value: function onInputChange(newValue, actionMeta) {
	      this.props.onInputChange(newValue, actionMeta);
	    }

	    // ==============================
	    // Methods
	    // ==============================
	  }, {
	    key: "focusInput",
	    value: function focusInput() {
	      if (!this.inputRef) return;
	      this.inputRef.focus();
	    }
	  }, {
	    key: "blurInput",
	    value: function blurInput() {
	      if (!this.inputRef) return;
	      this.inputRef.blur();
	    }

	    // aliased for consumers
	  }, {
	    key: "openMenu",
	    value: function openMenu(focusOption) {
	      var _this2 = this;
	      var _this$state2 = this.state,
	        selectValue = _this$state2.selectValue,
	        isFocused = _this$state2.isFocused;
	      var focusableOptions = this.buildFocusableOptions();
	      var openAtIndex = focusOption === 'first' ? 0 : focusableOptions.length - 1;
	      if (!this.props.isMulti) {
	        var selectedIndex = focusableOptions.indexOf(selectValue[0]);
	        if (selectedIndex > -1) {
	          openAtIndex = selectedIndex;
	        }
	      }

	      // only scroll if the menu isn't already open
	      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
	      this.setState({
	        inputIsHiddenAfterUpdate: false,
	        focusedValue: null,
	        focusedOption: focusableOptions[openAtIndex]
	      }, function () {
	        return _this2.onMenuOpen();
	      });
	    }
	  }, {
	    key: "focusValue",
	    value: function focusValue(direction) {
	      var _this$state3 = this.state,
	        selectValue = _this$state3.selectValue,
	        focusedValue = _this$state3.focusedValue;

	      // Only multiselects support value focusing
	      if (!this.props.isMulti) return;
	      this.setState({
	        focusedOption: null
	      });
	      var focusedIndex = selectValue.indexOf(focusedValue);
	      if (!focusedValue) {
	        focusedIndex = -1;
	      }
	      var lastIndex = selectValue.length - 1;
	      var nextFocus = -1;
	      if (!selectValue.length) return;
	      switch (direction) {
	        case 'previous':
	          if (focusedIndex === 0) {
	            // don't cycle from the start to the end
	            nextFocus = 0;
	          } else if (focusedIndex === -1) {
	            // if nothing is focused, focus the last value first
	            nextFocus = lastIndex;
	          } else {
	            nextFocus = focusedIndex - 1;
	          }
	          break;
	        case 'next':
	          if (focusedIndex > -1 && focusedIndex < lastIndex) {
	            nextFocus = focusedIndex + 1;
	          }
	          break;
	      }
	      this.setState({
	        inputIsHidden: nextFocus !== -1,
	        focusedValue: selectValue[nextFocus]
	      });
	    }
	  }, {
	    key: "focusOption",
	    value: function focusOption() {
	      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
	      var pageSize = this.props.pageSize;
	      var focusedOption = this.state.focusedOption;
	      var options = this.getFocusableOptions();
	      if (!options.length) return;
	      var nextFocus = 0; // handles 'first'
	      var focusedIndex = options.indexOf(focusedOption);
	      if (!focusedOption) {
	        focusedIndex = -1;
	      }
	      if (direction === 'up') {
	        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
	      } else if (direction === 'down') {
	        nextFocus = (focusedIndex + 1) % options.length;
	      } else if (direction === 'pageup') {
	        nextFocus = focusedIndex - pageSize;
	        if (nextFocus < 0) nextFocus = 0;
	      } else if (direction === 'pagedown') {
	        nextFocus = focusedIndex + pageSize;
	        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
	      } else if (direction === 'last') {
	        nextFocus = options.length - 1;
	      }
	      this.scrollToFocusedOptionOnUpdate = true;
	      this.setState({
	        focusedOption: options[nextFocus],
	        focusedValue: null
	      });
	    }
	  }, {
	    key: "getTheme",
	    value:
	    // ==============================
	    // Getters
	    // ==============================

	    function getTheme() {
	      // Use the default theme if there are no customisations.
	      if (!this.props.theme) {
	        return defaultTheme;
	      }
	      // If the theme prop is a function, assume the function
	      // knows how to merge the passed-in default theme with
	      // its own modifications.
	      if (typeof this.props.theme === 'function') {
	        return this.props.theme(defaultTheme);
	      }
	      // Otherwise, if a plain theme object was passed in,
	      // overlay it with the default theme.
	      return _objectSpread2$2(_objectSpread2$2({}, defaultTheme), this.props.theme);
	    }
	  }, {
	    key: "getCommonProps",
	    value: function getCommonProps() {
	      var clearValue = this.clearValue,
	        cx = this.cx,
	        getStyles = this.getStyles,
	        getClassNames = this.getClassNames,
	        getValue = this.getValue,
	        selectOption = this.selectOption,
	        setValue = this.setValue,
	        props = this.props;
	      var isMulti = props.isMulti,
	        isRtl = props.isRtl,
	        options = props.options;
	      var hasValue = this.hasValue();
	      return {
	        clearValue: clearValue,
	        cx: cx,
	        getStyles: getStyles,
	        getClassNames: getClassNames,
	        getValue: getValue,
	        hasValue: hasValue,
	        isMulti: isMulti,
	        isRtl: isRtl,
	        options: options,
	        selectOption: selectOption,
	        selectProps: props,
	        setValue: setValue,
	        theme: this.getTheme()
	      };
	    }
	  }, {
	    key: "hasValue",
	    value: function hasValue() {
	      var selectValue = this.state.selectValue;
	      return selectValue.length > 0;
	    }
	  }, {
	    key: "hasOptions",
	    value: function hasOptions() {
	      return !!this.getFocusableOptions().length;
	    }
	  }, {
	    key: "isClearable",
	    value: function isClearable() {
	      var _this$props7 = this.props,
	        isClearable = _this$props7.isClearable,
	        isMulti = _this$props7.isMulti;

	      // single select, by default, IS NOT clearable
	      // multi select, by default, IS clearable
	      if (isClearable === undefined) return isMulti;
	      return isClearable;
	    }
	  }, {
	    key: "isOptionDisabled",
	    value: function isOptionDisabled(option, selectValue) {
	      return _isOptionDisabled(this.props, option, selectValue);
	    }
	  }, {
	    key: "isOptionSelected",
	    value: function isOptionSelected(option, selectValue) {
	      return _isOptionSelected(this.props, option, selectValue);
	    }
	  }, {
	    key: "filterOption",
	    value: function filterOption(option, inputValue) {
	      return _filterOption(this.props, option, inputValue);
	    }
	  }, {
	    key: "formatOptionLabel",
	    value: function formatOptionLabel(data, context) {
	      if (typeof this.props.formatOptionLabel === 'function') {
	        var _inputValue = this.props.inputValue;
	        var _selectValue = this.state.selectValue;
	        return this.props.formatOptionLabel(data, {
	          context: context,
	          inputValue: _inputValue,
	          selectValue: _selectValue
	        });
	      } else {
	        return this.getOptionLabel(data);
	      }
	    }
	  }, {
	    key: "formatGroupLabel",
	    value: function formatGroupLabel(data) {
	      return this.props.formatGroupLabel(data);
	    }

	    // ==============================
	    // Mouse Handlers
	    // ==============================
	  }, {
	    key: "startListeningComposition",
	    value:
	    // ==============================
	    // Composition Handlers
	    // ==============================

	    function startListeningComposition() {
	      if (document && document.addEventListener) {
	        document.addEventListener('compositionstart', this.onCompositionStart, false);
	        document.addEventListener('compositionend', this.onCompositionEnd, false);
	      }
	    }
	  }, {
	    key: "stopListeningComposition",
	    value: function stopListeningComposition() {
	      if (document && document.removeEventListener) {
	        document.removeEventListener('compositionstart', this.onCompositionStart);
	        document.removeEventListener('compositionend', this.onCompositionEnd);
	      }
	    }
	  }, {
	    key: "startListeningToTouch",
	    value:
	    // ==============================
	    // Touch Handlers
	    // ==============================

	    function startListeningToTouch() {
	      if (document && document.addEventListener) {
	        document.addEventListener('touchstart', this.onTouchStart, false);
	        document.addEventListener('touchmove', this.onTouchMove, false);
	        document.addEventListener('touchend', this.onTouchEnd, false);
	      }
	    }
	  }, {
	    key: "stopListeningToTouch",
	    value: function stopListeningToTouch() {
	      if (document && document.removeEventListener) {
	        document.removeEventListener('touchstart', this.onTouchStart);
	        document.removeEventListener('touchmove', this.onTouchMove);
	        document.removeEventListener('touchend', this.onTouchEnd);
	      }
	    }
	  }, {
	    key: "renderInput",
	    value:
	    // ==============================
	    // Renderers
	    // ==============================
	    function renderInput() {
	      var _this$props8 = this.props,
	        isDisabled = _this$props8.isDisabled,
	        isSearchable = _this$props8.isSearchable,
	        inputId = _this$props8.inputId,
	        inputValue = _this$props8.inputValue,
	        tabIndex = _this$props8.tabIndex,
	        form = _this$props8.form,
	        menuIsOpen = _this$props8.menuIsOpen,
	        required = _this$props8.required;
	      var _this$getComponents = this.getComponents(),
	        Input = _this$getComponents.Input;
	      var _this$state4 = this.state,
	        inputIsHidden = _this$state4.inputIsHidden,
	        ariaSelection = _this$state4.ariaSelection;
	      var commonProps = this.commonProps;
	      var id = inputId || this.getElementId('input');

	      // aria attributes makes the JSX "noisy", separated for clarity
	      var ariaAttributes = _objectSpread2$2(_objectSpread2$2(_objectSpread2$2({
	        'aria-autocomplete': 'list',
	        'aria-expanded': menuIsOpen,
	        'aria-haspopup': true,
	        'aria-errormessage': this.props['aria-errormessage'],
	        'aria-invalid': this.props['aria-invalid'],
	        'aria-label': this.props['aria-label'],
	        'aria-labelledby': this.props['aria-labelledby'],
	        'aria-required': required,
	        role: 'combobox'
	      }, menuIsOpen && {
	        'aria-controls': this.getElementId('listbox'),
	        'aria-owns': this.getElementId('listbox')
	      }), !isSearchable && {
	        'aria-readonly': true
	      }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus' && {
	        'aria-describedby': this.getElementId('live-region')
	      } : {
	        'aria-describedby': this.getElementId('placeholder')
	      });
	      if (!isSearchable) {
	        // use a dummy input to maintain focus/blur functionality
	        return /*#__PURE__*/reactExports.createElement(DummyInput, _extends({
	          id: id,
	          innerRef: this.getInputRef,
	          onBlur: this.onInputBlur,
	          onChange: noop,
	          onFocus: this.onInputFocus,
	          disabled: isDisabled,
	          tabIndex: tabIndex,
	          inputMode: "none",
	          form: form,
	          value: ""
	        }, ariaAttributes));
	      }
	      return /*#__PURE__*/reactExports.createElement(Input, _extends({}, commonProps, {
	        autoCapitalize: "none",
	        autoComplete: "off",
	        autoCorrect: "off",
	        id: id,
	        innerRef: this.getInputRef,
	        isDisabled: isDisabled,
	        isHidden: inputIsHidden,
	        onBlur: this.onInputBlur,
	        onChange: this.handleInputChange,
	        onFocus: this.onInputFocus,
	        spellCheck: "false",
	        tabIndex: tabIndex,
	        form: form,
	        type: "text",
	        value: inputValue
	      }, ariaAttributes));
	    }
	  }, {
	    key: "renderPlaceholderOrValue",
	    value: function renderPlaceholderOrValue() {
	      var _this3 = this;
	      var _this$getComponents2 = this.getComponents(),
	        MultiValue = _this$getComponents2.MultiValue,
	        MultiValueContainer = _this$getComponents2.MultiValueContainer,
	        MultiValueLabel = _this$getComponents2.MultiValueLabel,
	        MultiValueRemove = _this$getComponents2.MultiValueRemove,
	        SingleValue = _this$getComponents2.SingleValue,
	        Placeholder = _this$getComponents2.Placeholder;
	      var commonProps = this.commonProps;
	      var _this$props9 = this.props,
	        controlShouldRenderValue = _this$props9.controlShouldRenderValue,
	        isDisabled = _this$props9.isDisabled,
	        isMulti = _this$props9.isMulti,
	        inputValue = _this$props9.inputValue,
	        placeholder = _this$props9.placeholder;
	      var _this$state5 = this.state,
	        selectValue = _this$state5.selectValue,
	        focusedValue = _this$state5.focusedValue,
	        isFocused = _this$state5.isFocused;
	      if (!this.hasValue() || !controlShouldRenderValue) {
	        return inputValue ? null : /*#__PURE__*/reactExports.createElement(Placeholder, _extends({}, commonProps, {
	          key: "placeholder",
	          isDisabled: isDisabled,
	          isFocused: isFocused,
	          innerProps: {
	            id: this.getElementId('placeholder')
	          }
	        }), placeholder);
	      }
	      if (isMulti) {
	        return selectValue.map(function (opt, index) {
	          var isOptionFocused = opt === focusedValue;
	          var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
	          return /*#__PURE__*/reactExports.createElement(MultiValue, _extends({}, commonProps, {
	            components: {
	              Container: MultiValueContainer,
	              Label: MultiValueLabel,
	              Remove: MultiValueRemove
	            },
	            isFocused: isOptionFocused,
	            isDisabled: isDisabled,
	            key: key,
	            index: index,
	            removeProps: {
	              onClick: function onClick() {
	                return _this3.removeValue(opt);
	              },
	              onTouchEnd: function onTouchEnd() {
	                return _this3.removeValue(opt);
	              },
	              onMouseDown: function onMouseDown(e) {
	                e.preventDefault();
	              }
	            },
	            data: opt
	          }), _this3.formatOptionLabel(opt, 'value'));
	        });
	      }
	      if (inputValue) {
	        return null;
	      }
	      var singleValue = selectValue[0];
	      return /*#__PURE__*/reactExports.createElement(SingleValue, _extends({}, commonProps, {
	        data: singleValue,
	        isDisabled: isDisabled
	      }), this.formatOptionLabel(singleValue, 'value'));
	    }
	  }, {
	    key: "renderClearIndicator",
	    value: function renderClearIndicator() {
	      var _this$getComponents3 = this.getComponents(),
	        ClearIndicator = _this$getComponents3.ClearIndicator;
	      var commonProps = this.commonProps;
	      var _this$props10 = this.props,
	        isDisabled = _this$props10.isDisabled,
	        isLoading = _this$props10.isLoading;
	      var isFocused = this.state.isFocused;
	      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
	        return null;
	      }
	      var innerProps = {
	        onMouseDown: this.onClearIndicatorMouseDown,
	        onTouchEnd: this.onClearIndicatorTouchEnd,
	        'aria-hidden': 'true'
	      };
	      return /*#__PURE__*/reactExports.createElement(ClearIndicator, _extends({}, commonProps, {
	        innerProps: innerProps,
	        isFocused: isFocused
	      }));
	    }
	  }, {
	    key: "renderLoadingIndicator",
	    value: function renderLoadingIndicator() {
	      var _this$getComponents4 = this.getComponents(),
	        LoadingIndicator = _this$getComponents4.LoadingIndicator;
	      var commonProps = this.commonProps;
	      var _this$props11 = this.props,
	        isDisabled = _this$props11.isDisabled,
	        isLoading = _this$props11.isLoading;
	      var isFocused = this.state.isFocused;
	      if (!LoadingIndicator || !isLoading) return null;
	      var innerProps = {
	        'aria-hidden': 'true'
	      };
	      return /*#__PURE__*/reactExports.createElement(LoadingIndicator, _extends({}, commonProps, {
	        innerProps: innerProps,
	        isDisabled: isDisabled,
	        isFocused: isFocused
	      }));
	    }
	  }, {
	    key: "renderIndicatorSeparator",
	    value: function renderIndicatorSeparator() {
	      var _this$getComponents5 = this.getComponents(),
	        DropdownIndicator = _this$getComponents5.DropdownIndicator,
	        IndicatorSeparator = _this$getComponents5.IndicatorSeparator;

	      // separator doesn't make sense without the dropdown indicator
	      if (!DropdownIndicator || !IndicatorSeparator) return null;
	      var commonProps = this.commonProps;
	      var isDisabled = this.props.isDisabled;
	      var isFocused = this.state.isFocused;
	      return /*#__PURE__*/reactExports.createElement(IndicatorSeparator, _extends({}, commonProps, {
	        isDisabled: isDisabled,
	        isFocused: isFocused
	      }));
	    }
	  }, {
	    key: "renderDropdownIndicator",
	    value: function renderDropdownIndicator() {
	      var _this$getComponents6 = this.getComponents(),
	        DropdownIndicator = _this$getComponents6.DropdownIndicator;
	      if (!DropdownIndicator) return null;
	      var commonProps = this.commonProps;
	      var isDisabled = this.props.isDisabled;
	      var isFocused = this.state.isFocused;
	      var innerProps = {
	        onMouseDown: this.onDropdownIndicatorMouseDown,
	        onTouchEnd: this.onDropdownIndicatorTouchEnd,
	        'aria-hidden': 'true'
	      };
	      return /*#__PURE__*/reactExports.createElement(DropdownIndicator, _extends({}, commonProps, {
	        innerProps: innerProps,
	        isDisabled: isDisabled,
	        isFocused: isFocused
	      }));
	    }
	  }, {
	    key: "renderMenu",
	    value: function renderMenu() {
	      var _this4 = this;
	      var _this$getComponents7 = this.getComponents(),
	        Group = _this$getComponents7.Group,
	        GroupHeading = _this$getComponents7.GroupHeading,
	        Menu = _this$getComponents7.Menu,
	        MenuList = _this$getComponents7.MenuList,
	        MenuPortal = _this$getComponents7.MenuPortal,
	        LoadingMessage = _this$getComponents7.LoadingMessage,
	        NoOptionsMessage = _this$getComponents7.NoOptionsMessage,
	        Option = _this$getComponents7.Option;
	      var commonProps = this.commonProps;
	      var focusedOption = this.state.focusedOption;
	      var _this$props12 = this.props,
	        captureMenuScroll = _this$props12.captureMenuScroll,
	        inputValue = _this$props12.inputValue,
	        isLoading = _this$props12.isLoading,
	        loadingMessage = _this$props12.loadingMessage,
	        minMenuHeight = _this$props12.minMenuHeight,
	        maxMenuHeight = _this$props12.maxMenuHeight,
	        menuIsOpen = _this$props12.menuIsOpen,
	        menuPlacement = _this$props12.menuPlacement,
	        menuPosition = _this$props12.menuPosition,
	        menuPortalTarget = _this$props12.menuPortalTarget,
	        menuShouldBlockScroll = _this$props12.menuShouldBlockScroll,
	        menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView,
	        noOptionsMessage = _this$props12.noOptionsMessage,
	        onMenuScrollToTop = _this$props12.onMenuScrollToTop,
	        onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
	      if (!menuIsOpen) return null;

	      // TODO: Internal Option Type here
	      var render = function render(props, id) {
	        var type = props.type,
	          data = props.data,
	          isDisabled = props.isDisabled,
	          isSelected = props.isSelected,
	          label = props.label,
	          value = props.value;
	        var isFocused = focusedOption === data;
	        var onHover = isDisabled ? undefined : function () {
	          return _this4.onOptionHover(data);
	        };
	        var onSelect = isDisabled ? undefined : function () {
	          return _this4.selectOption(data);
	        };
	        var optionId = "".concat(_this4.getElementId('option'), "-").concat(id);
	        var innerProps = {
	          id: optionId,
	          onClick: onSelect,
	          onMouseMove: onHover,
	          onMouseOver: onHover,
	          tabIndex: -1
	        };
	        return /*#__PURE__*/reactExports.createElement(Option, _extends({}, commonProps, {
	          innerProps: innerProps,
	          data: data,
	          isDisabled: isDisabled,
	          isSelected: isSelected,
	          key: optionId,
	          label: label,
	          type: type,
	          value: value,
	          isFocused: isFocused,
	          innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
	        }), _this4.formatOptionLabel(props.data, 'menu'));
	      };
	      var menuUI;
	      if (this.hasOptions()) {
	        menuUI = this.getCategorizedOptions().map(function (item) {
	          if (item.type === 'group') {
	            var _data = item.data,
	              options = item.options,
	              groupIndex = item.index;
	            var groupId = "".concat(_this4.getElementId('group'), "-").concat(groupIndex);
	            var headingId = "".concat(groupId, "-heading");
	            return /*#__PURE__*/reactExports.createElement(Group, _extends({}, commonProps, {
	              key: groupId,
	              data: _data,
	              options: options,
	              Heading: GroupHeading,
	              headingProps: {
	                id: headingId,
	                data: item.data
	              },
	              label: _this4.formatGroupLabel(item.data)
	            }), item.options.map(function (option) {
	              return render(option, "".concat(groupIndex, "-").concat(option.index));
	            }));
	          } else if (item.type === 'option') {
	            return render(item, "".concat(item.index));
	          }
	        });
	      } else if (isLoading) {
	        var message = loadingMessage({
	          inputValue: inputValue
	        });
	        if (message === null) return null;
	        menuUI = /*#__PURE__*/reactExports.createElement(LoadingMessage, commonProps, message);
	      } else {
	        var _message = noOptionsMessage({
	          inputValue: inputValue
	        });
	        if (_message === null) return null;
	        menuUI = /*#__PURE__*/reactExports.createElement(NoOptionsMessage, commonProps, _message);
	      }
	      var menuPlacementProps = {
	        minMenuHeight: minMenuHeight,
	        maxMenuHeight: maxMenuHeight,
	        menuPlacement: menuPlacement,
	        menuPosition: menuPosition,
	        menuShouldScrollIntoView: menuShouldScrollIntoView
	      };
	      var menuElement = /*#__PURE__*/reactExports.createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function (_ref4) {
	        var ref = _ref4.ref,
	          _ref4$placerProps = _ref4.placerProps,
	          placement = _ref4$placerProps.placement,
	          maxHeight = _ref4$placerProps.maxHeight;
	        return /*#__PURE__*/reactExports.createElement(Menu, _extends({}, commonProps, menuPlacementProps, {
	          innerRef: ref,
	          innerProps: {
	            onMouseDown: _this4.onMenuMouseDown,
	            onMouseMove: _this4.onMenuMouseMove,
	            id: _this4.getElementId('listbox')
	          },
	          isLoading: isLoading,
	          placement: placement
	        }), /*#__PURE__*/reactExports.createElement(ScrollManager, {
	          captureEnabled: captureMenuScroll,
	          onTopArrive: onMenuScrollToTop,
	          onBottomArrive: onMenuScrollToBottom,
	          lockEnabled: menuShouldBlockScroll
	        }, function (scrollTargetRef) {
	          return /*#__PURE__*/reactExports.createElement(MenuList, _extends({}, commonProps, {
	            innerRef: function innerRef(instance) {
	              _this4.getMenuListRef(instance);
	              scrollTargetRef(instance);
	            },
	            isLoading: isLoading,
	            maxHeight: maxHeight,
	            focusedOption: focusedOption
	          }), menuUI);
	        }));
	      });

	      // positioning behaviour is almost identical for portalled and fixed,
	      // so we use the same component. the actual portalling logic is forked
	      // within the component based on `menuPosition`
	      return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/reactExports.createElement(MenuPortal, _extends({}, commonProps, {
	        appendTo: menuPortalTarget,
	        controlElement: this.controlRef,
	        menuPlacement: menuPlacement,
	        menuPosition: menuPosition
	      }), menuElement) : menuElement;
	    }
	  }, {
	    key: "renderFormField",
	    value: function renderFormField() {
	      var _this5 = this;
	      var _this$props13 = this.props,
	        delimiter = _this$props13.delimiter,
	        isDisabled = _this$props13.isDisabled,
	        isMulti = _this$props13.isMulti,
	        name = _this$props13.name,
	        required = _this$props13.required;
	      var selectValue = this.state.selectValue;
	      if (required && !this.hasValue() && !isDisabled) {
	        return /*#__PURE__*/reactExports.createElement(RequiredInput$1, {
	          name: name,
	          onFocus: this.onValueInputFocus
	        });
	      }
	      if (!name || isDisabled) return;
	      if (isMulti) {
	        if (delimiter) {
	          var value = selectValue.map(function (opt) {
	            return _this5.getOptionValue(opt);
	          }).join(delimiter);
	          return /*#__PURE__*/reactExports.createElement("input", {
	            name: name,
	            type: "hidden",
	            value: value
	          });
	        } else {
	          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
	            return /*#__PURE__*/reactExports.createElement("input", {
	              key: "i-".concat(i),
	              name: name,
	              type: "hidden",
	              value: _this5.getOptionValue(opt)
	            });
	          }) : /*#__PURE__*/reactExports.createElement("input", {
	            name: name,
	            type: "hidden",
	            value: ""
	          });
	          return /*#__PURE__*/reactExports.createElement("div", null, input);
	        }
	      } else {
	        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';
	        return /*#__PURE__*/reactExports.createElement("input", {
	          name: name,
	          type: "hidden",
	          value: _value
	        });
	      }
	    }
	  }, {
	    key: "renderLiveRegion",
	    value: function renderLiveRegion() {
	      var commonProps = this.commonProps;
	      var _this$state6 = this.state,
	        ariaSelection = _this$state6.ariaSelection,
	        focusedOption = _this$state6.focusedOption,
	        focusedValue = _this$state6.focusedValue,
	        isFocused = _this$state6.isFocused,
	        selectValue = _this$state6.selectValue;
	      var focusableOptions = this.getFocusableOptions();
	      return /*#__PURE__*/reactExports.createElement(LiveRegion$1, _extends({}, commonProps, {
	        id: this.getElementId('live-region'),
	        ariaSelection: ariaSelection,
	        focusedOption: focusedOption,
	        focusedValue: focusedValue,
	        isFocused: isFocused,
	        selectValue: selectValue,
	        focusableOptions: focusableOptions
	      }));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this$getComponents8 = this.getComponents(),
	        Control = _this$getComponents8.Control,
	        IndicatorsContainer = _this$getComponents8.IndicatorsContainer,
	        SelectContainer = _this$getComponents8.SelectContainer,
	        ValueContainer = _this$getComponents8.ValueContainer;
	      var _this$props14 = this.props,
	        className = _this$props14.className,
	        id = _this$props14.id,
	        isDisabled = _this$props14.isDisabled,
	        menuIsOpen = _this$props14.menuIsOpen;
	      var isFocused = this.state.isFocused;
	      var commonProps = this.commonProps = this.getCommonProps();
	      return /*#__PURE__*/reactExports.createElement(SelectContainer, _extends({}, commonProps, {
	        className: className,
	        innerProps: {
	          id: id,
	          onKeyDown: this.onKeyDown
	        },
	        isDisabled: isDisabled,
	        isFocused: isFocused
	      }), this.renderLiveRegion(), /*#__PURE__*/reactExports.createElement(Control, _extends({}, commonProps, {
	        innerRef: this.getControlRef,
	        innerProps: {
	          onMouseDown: this.onControlMouseDown,
	          onTouchEnd: this.onControlTouchEnd
	        },
	        isDisabled: isDisabled,
	        isFocused: isFocused,
	        menuIsOpen: menuIsOpen
	      }), /*#__PURE__*/reactExports.createElement(ValueContainer, _extends({}, commonProps, {
	        isDisabled: isDisabled
	      }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/reactExports.createElement(IndicatorsContainer, _extends({}, commonProps, {
	        isDisabled: isDisabled
	      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
	    }
	  }], [{
	    key: "getDerivedStateFromProps",
	    value: function getDerivedStateFromProps(props, state) {
	      var prevProps = state.prevProps,
	        clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
	        inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate,
	        ariaSelection = state.ariaSelection,
	        isFocused = state.isFocused,
	        prevWasFocused = state.prevWasFocused;
	      var options = props.options,
	        value = props.value,
	        menuIsOpen = props.menuIsOpen,
	        inputValue = props.inputValue,
	        isMulti = props.isMulti;
	      var selectValue = cleanValue(value);
	      var newMenuOptionsState = {};
	      if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
	        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
	        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
	        var focusedOption = getNextFocusedOption(state, focusableOptions);
	        newMenuOptionsState = {
	          selectValue: selectValue,
	          focusedOption: focusedOption,
	          focusedValue: focusedValue,
	          clearFocusValueOnUpdate: false
	        };
	      }
	      // some updates should toggle the state of the input visibility
	      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
	        inputIsHidden: inputIsHiddenAfterUpdate,
	        inputIsHiddenAfterUpdate: undefined
	      } : {};
	      var newAriaSelection = ariaSelection;
	      var hasKeptFocus = isFocused && prevWasFocused;
	      if (isFocused && !hasKeptFocus) {
	        // If `value` or `defaultValue` props are not empty then announce them
	        // when the Select is initially focused
	        newAriaSelection = {
	          value: valueTernary(isMulti, selectValue, selectValue[0] || null),
	          options: selectValue,
	          action: 'initial-input-focus'
	        };
	        hasKeptFocus = !prevWasFocused;
	      }

	      // If the 'initial-input-focus' action has been set already
	      // then reset the ariaSelection to null
	      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus') {
	        newAriaSelection = null;
	      }
	      return _objectSpread2$2(_objectSpread2$2(_objectSpread2$2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
	        prevProps: props,
	        ariaSelection: newAriaSelection,
	        prevWasFocused: hasKeptFocus
	      });
	    }
	  }]);
	  return Select;
	}(reactExports.Component);
	Select.defaultProps = defaultProps;

	var StateManagedSelect = /*#__PURE__*/reactExports.forwardRef(function (props, ref) {
	  var baseSelectProps = useStateManager(props);
	  return /*#__PURE__*/reactExports.createElement(Select, _extends({
	    ref: ref
	  }, baseSelectProps));
	});
	var StateManagedSelect$1 = StateManagedSelect;

	const buttonOptions = [{
	  value: undefined,
	  label: 'None'
	}, {
	  value: 'ok',
	  label: 'Ok'
	}, {
	  value: 'yesNo',
	  label: 'YesNo'
	}];
	const typeOptions = [{
	  value: 'success',
	  label: 'Success'
	}, {
	  value: 'info',
	  label: 'Info'
	}, {
	  value: 'error',
	  label: 'Error'
	}, {
	  value: 'customStyle1',
	  label: 'customStyle1'
	}];
	const blockingOptions = [{
	  value: false,
	  label: 'No'
	}, {
	  value: true,
	  label: 'Yes'
	}];
	const Form = () => {
	  const dispatch = useDispatch();
	  const labelRef = reactExports.useRef();
	  const durationRef = reactExports.useRef();
	  const [buttons, selectButtons] = reactExports.useState(buttonOptions[0]);
	  const [type, selectType] = reactExports.useState(typeOptions[0]);
	  const [blocking, selectBlocking] = reactExports.useState(blockingOptions[0]);
	  return /*#__PURE__*/React.createElement(Outer, null, /*#__PURE__*/React.createElement(Inner, null, /*#__PURE__*/React.createElement(Title, null, "Redux-Saga-Notifications example"), /*#__PURE__*/React.createElement(Rows, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Label$1, null, "Label:"), /*#__PURE__*/React.createElement(InputOuter, null, /*#__PURE__*/React.createElement(Input$2, {
	    defaultValue: 'Test notification',
	    placeholder: 'Label text',
	    ref: labelRef
	  }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Label$1, null, "Buttons:"), /*#__PURE__*/React.createElement(FormSelect, null, /*#__PURE__*/React.createElement(StateManagedSelect$1, {
	    value: buttons,
	    options: buttonOptions,
	    styles: selectStyle(),
	    onChange: selectButtons
	  }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Label$1, null, "Type:"), /*#__PURE__*/React.createElement(FormSelect, null, /*#__PURE__*/React.createElement(StateManagedSelect$1, {
	    options: typeOptions,
	    value: type,
	    styles: selectStyle(),
	    onChange: selectType
	  }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Label$1, null, "Blocking:"), /*#__PURE__*/React.createElement(FormSelect, null, /*#__PURE__*/React.createElement(StateManagedSelect$1, {
	    options: blockingOptions,
	    value: blocking,
	    styles: selectStyle(),
	    onChange: selectBlocking
	  }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Label$1, null, "Duration (ms):"), /*#__PURE__*/React.createElement(InputOuter, null, /*#__PURE__*/React.createElement(Input$2, {
	    ref: durationRef,
	    defaultValue: '5000',
	    placeholder: '5000'
	  })))), /*#__PURE__*/React.createElement(ButtonOuter, null, /*#__PURE__*/React.createElement(Button$1, {
	    onClick: () => dispatch({
	      type: 'NOTIFICATION_PUSH',
	      notification: {
	        id: Date.now(),
	        label: labelRef.current.value,
	        type: type.value,
	        duration: durationRef.current.value,
	        blocking: blocking.value,
	        buttons: buttons.value
	      }
	    })
	  }, "Dispatch notification"))));
	};
	var Form$1 = Form;

	const bounce = We({
	  '0%, 100%': {
	    transform: 'translateY(10px)'
	  },
	  '50%': {
	    transform: 'translateY(-15px)'
	  }
	});
	const styles = {
	  customStyle1: {
	    ...createNotificationStyle('purple', 'fuchsia'),
	    label: defaults => ({
	      ...defaults,
	      color: 'yellow'
	    }),
	    icon: defaults => ({
	      ...defaults,
	      animation: Ae`
        ${bounce} 500ms linear infinite
      `
	    })
	  }
	};
	const icons = {
	  customStyle1: /*#__PURE__*/React.createElement(React.Fragment, null, "\uD83D\uDC3C")
	};
	const App = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Form$1, null), /*#__PURE__*/React.createElement(Notifications, {
	  styles: styles,
	  icons: icons
	}));
	var App$1 = App;

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const sagaMiddleware = sagaMiddlewareFactory();
	const store = legacy_createStore(combineReducers({
	  notificationReducer
	}), {}, composeEnhancers(applyMiddleware(sagaMiddleware)));
	sagaMiddleware.run(notificationSaga);
	const container = document.getElementById('root');
	const root = createRoot(container);
	root.render( /*#__PURE__*/React.createElement(Le, {
	  theme: styledReboot.defaultRebootTheme
	}, /*#__PURE__*/React.createElement(Provider, {
	  store: store
	}, /*#__PURE__*/React.createElement(GlobalStyle, null), /*#__PURE__*/React.createElement(App$1, null))));

})();
//# sourceMappingURL=bundle.js.map
