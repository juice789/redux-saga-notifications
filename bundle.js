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
	  var f = n.default;
		if (typeof f == "function") {
			var a = function () {
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

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */

	var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
	  if (val === null || val === undefined) {
	    throw new TypeError('Object.assign cannot be called with null or undefined');
	  }

	  return Object(val);
	}

	function shouldUseNative() {
	  try {
	    if (!Object.assign) {
	      return false;
	    } // Detect buggy property enumeration order in older V8 versions.
	    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


	    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

	    test1[5] = 'de';

	    if (Object.getOwnPropertyNames(test1)[0] === '5') {
	      return false;
	    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


	    var test2 = {};

	    for (var i = 0; i < 10; i++) {
	      test2['_' + String.fromCharCode(i)] = i;
	    }

	    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
	      return test2[n];
	    });

	    if (order2.join('') !== '0123456789') {
	      return false;
	    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


	    var test3 = {};
	    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
	      test3[letter] = letter;
	    });

	    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
	      return false;
	    }

	    return true;
	  } catch (err) {
	    // We don't expect any of the above to throw, but better to be safe.
	    return false;
	  }
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	  var from;
	  var to = toObject(target);
	  var symbols;

	  for (var s = 1; s < arguments.length; s++) {
	    from = Object(arguments[s]);

	    for (var key in from) {
	      if (hasOwnProperty$1.call(from, key)) {
	        to[key] = from[key];
	      }
	    }

	    if (getOwnPropertySymbols$1) {
	      symbols = getOwnPropertySymbols$1(from);

	      for (var i = 0; i < symbols.length; i++) {
	        if (propIsEnumerable.call(from, symbols[i])) {
	          to[symbols[i]] = from[symbols[i]];
	        }
	      }
	    }
	  }

	  return to;
	};

	/** @license React v17.0.2
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var l$3 = objectAssign,
	    n$4 = 60103,
	    p$4 = 60106;

	react_production_min.Fragment = 60107;
	react_production_min.StrictMode = 60108;
	react_production_min.Profiler = 60114;
	var q$5 = 60109,
	    r$4 = 60110,
	    t$4 = 60112;
	react_production_min.Suspense = 60113;
	var u$3 = 60115,
	    v$4 = 60116;

	if ("function" === typeof Symbol && Symbol.for) {
	  var w$5 = Symbol.for;
	  n$4 = w$5("react.element");
	  p$4 = w$5("react.portal");
	  react_production_min.Fragment = w$5("react.fragment");
	  react_production_min.StrictMode = w$5("react.strict_mode");
	  react_production_min.Profiler = w$5("react.profiler");
	  q$5 = w$5("react.provider");
	  r$4 = w$5("react.context");
	  t$4 = w$5("react.forward_ref");
	  react_production_min.Suspense = w$5("react.suspense");
	  u$3 = w$5("react.memo");
	  v$4 = w$5("react.lazy");
	}

	var x$2 = "function" === typeof Symbol && Symbol.iterator;

	function y$2(a) {
	  if (null === a || "object" !== typeof a) return null;
	  a = x$2 && a[x$2] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}

	function z$2(a) {
	  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

	  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}

	var A$2 = {
	  isMounted: function () {
	    return !1;
	  },
	  enqueueForceUpdate: function () {},
	  enqueueReplaceState: function () {},
	  enqueueSetState: function () {}
	},
	    B$2 = {};

	function C$1(a, b, c) {
	  this.props = a;
	  this.context = b;
	  this.refs = B$2;
	  this.updater = c || A$2;
	}

	C$1.prototype.isReactComponent = {};

	C$1.prototype.setState = function (a, b) {
	  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(z$2(85));
	  this.updater.enqueueSetState(this, a, b, "setState");
	};

	C$1.prototype.forceUpdate = function (a) {
	  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};

	function D$1() {}

	D$1.prototype = C$1.prototype;

	function E$2(a, b, c) {
	  this.props = a;
	  this.context = b;
	  this.refs = B$2;
	  this.updater = c || A$2;
	}

	var F$2 = E$2.prototype = new D$1();
	F$2.constructor = E$2;
	l$3(F$2, C$1.prototype);
	F$2.isPureReactComponent = !0;
	var G$2 = {
	  current: null
	},
	    H$2 = Object.prototype.hasOwnProperty,
	    I$2 = {
	  key: !0,
	  ref: !0,
	  __self: !0,
	  __source: !0
	};

	function J$1(a, b, c) {
	  var e,
	      d = {},
	      k = null,
	      h = null;
	  if (null != b) for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) H$2.call(b, e) && !I$2.hasOwnProperty(e) && (d[e] = b[e]);
	  var g = arguments.length - 2;
	  if (1 === g) d.children = c;else if (1 < g) {
	    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];

	    d.children = f;
	  }
	  if (a && a.defaultProps) for (e in g = a.defaultProps, g) void 0 === d[e] && (d[e] = g[e]);
	  return {
	    $$typeof: n$4,
	    type: a,
	    key: k,
	    ref: h,
	    props: d,
	    _owner: G$2.current
	  };
	}

	function K$1(a, b) {
	  return {
	    $$typeof: n$4,
	    type: a.type,
	    key: b,
	    ref: a.ref,
	    props: a.props,
	    _owner: a._owner
	  };
	}

	function L$1(a) {
	  return "object" === typeof a && null !== a && a.$$typeof === n$4;
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

	var M$2 = /\/+/g;

	function N$2(a, b) {
	  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	}

	function O$2(a, b, c, e, d) {
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
	        case n$4:
	        case p$4:
	          h = !0;
	      }

	  }
	  if (h) return h = a, d = d(h), a = "" === e ? "." + N$2(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M$2, "$&/") + "/"), O$2(d, b, c, "", function (a) {
	    return a;
	  })) : null != d && (L$1(d) && (d = K$1(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M$2, "$&/") + "/") + a)), b.push(d)), 1;
	  h = 0;
	  e = "" === e ? "." : e + ":";
	  if (Array.isArray(a)) for (var g = 0; g < a.length; g++) {
	    k = a[g];
	    var f = e + N$2(k, g);
	    h += O$2(k, b, c, f, d);
	  } else if (f = y$2(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = e + N$2(k, g++), h += O$2(k, b, c, f, d);else if ("object" === k) throw b = "" + a, Error(z$2(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
	  return h;
	}

	function P$2(a, b, c) {
	  if (null == a) return a;
	  var e = [],
	      d = 0;
	  O$2(a, e, "", "", function (a) {
	    return b.call(c, a, d++);
	  });
	  return e;
	}

	function Q$1(a) {
	  if (-1 === a._status) {
	    var b = a._result;
	    b = b();
	    a._status = 0;
	    a._result = b;
	    b.then(function (b) {
	      0 === a._status && (b = b.default, a._status = 1, a._result = b);
	    }, function (b) {
	      0 === a._status && (a._status = 2, a._result = b);
	    });
	  }

	  if (1 === a._status) return a._result;
	  throw a._result;
	}

	var R$1 = {
	  current: null
	};

	function S$2() {
	  var a = R$1.current;
	  if (null === a) throw Error(z$2(321));
	  return a;
	}

	var T$2 = {
	  ReactCurrentDispatcher: R$1,
	  ReactCurrentBatchConfig: {
	    transition: 0
	  },
	  ReactCurrentOwner: G$2,
	  IsSomeRendererActing: {
	    current: !1
	  },
	  assign: l$3
	};
	react_production_min.Children = {
	  map: P$2,
	  forEach: function (a, b, c) {
	    P$2(a, function () {
	      b.apply(this, arguments);
	    }, c);
	  },
	  count: function (a) {
	    var b = 0;
	    P$2(a, function () {
	      b++;
	    });
	    return b;
	  },
	  toArray: function (a) {
	    return P$2(a, function (a) {
	      return a;
	    }) || [];
	  },
	  only: function (a) {
	    if (!L$1(a)) throw Error(z$2(143));
	    return a;
	  }
	};
	react_production_min.Component = C$1;
	react_production_min.PureComponent = E$2;
	react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$2;

	react_production_min.cloneElement = function (a, b, c) {
	  if (null === a || void 0 === a) throw Error(z$2(267, a));
	  var e = l$3({}, a.props),
	      d = a.key,
	      k = a.ref,
	      h = a._owner;

	  if (null != b) {
	    void 0 !== b.ref && (k = b.ref, h = G$2.current);
	    void 0 !== b.key && (d = "" + b.key);
	    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;

	    for (f in b) H$2.call(b, f) && !I$2.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
	  }

	  var f = arguments.length - 2;
	  if (1 === f) e.children = c;else if (1 < f) {
	    g = Array(f);

	    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];

	    e.children = g;
	  }
	  return {
	    $$typeof: n$4,
	    type: a.type,
	    key: d,
	    ref: k,
	    props: e,
	    _owner: h
	  };
	};

	react_production_min.createContext = function (a, b) {
	  void 0 === b && (b = null);
	  a = {
	    $$typeof: r$4,
	    _calculateChangedBits: b,
	    _currentValue: a,
	    _currentValue2: a,
	    _threadCount: 0,
	    Provider: null,
	    Consumer: null
	  };
	  a.Provider = {
	    $$typeof: q$5,
	    _context: a
	  };
	  return a.Consumer = a;
	};

	react_production_min.createElement = J$1;

	react_production_min.createFactory = function (a) {
	  var b = J$1.bind(null, a);
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
	    $$typeof: t$4,
	    render: a
	  };
	};

	react_production_min.isValidElement = L$1;

	react_production_min.lazy = function (a) {
	  return {
	    $$typeof: v$4,
	    _payload: {
	      _status: -1,
	      _result: a
	    },
	    _init: Q$1
	  };
	};

	react_production_min.memo = function (a, b) {
	  return {
	    $$typeof: u$3,
	    type: a,
	    compare: void 0 === b ? null : b
	  };
	};

	react_production_min.useCallback = function (a, b) {
	  return S$2().useCallback(a, b);
	};

	react_production_min.useContext = function (a, b) {
	  return S$2().useContext(a, b);
	};

	react_production_min.useDebugValue = function () {};

	react_production_min.useEffect = function (a, b) {
	  return S$2().useEffect(a, b);
	};

	react_production_min.useImperativeHandle = function (a, b, c) {
	  return S$2().useImperativeHandle(a, b, c);
	};

	react_production_min.useLayoutEffect = function (a, b) {
	  return S$2().useLayoutEffect(a, b);
	};

	react_production_min.useMemo = function (a, b) {
	  return S$2().useMemo(a, b);
	};

	react_production_min.useReducer = function (a, b, c) {
	  return S$2().useReducer(a, b, c);
	};

	react_production_min.useRef = function (a) {
	  return S$2().useRef(a);
	};

	react_production_min.useState = function (a) {
	  return S$2().useState(a);
	};

	react_production_min.version = "17.0.2";

	(function (module) {

		{
		  module.exports = react_production_min;
		}
	} (react));

	var React = /*@__PURE__*/getDefaultExportFromCjs(react.exports);

	var React$1 = /*#__PURE__*/_mergeNamespaces({
		__proto__: null,
		'default': React
	}, [react.exports]);

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler = {exports: {}};

	var scheduler_production_min = {};

	/** @license React v0.20.2
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function (exports) {

		var f, g, h, k;

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

		if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
		  var t = null,
		      u = null,
		      w = function () {
		    if (null !== t) try {
		      var a = exports.unstable_now();
		      t(!0, a);
		      t = null;
		    } catch (b) {
		      throw setTimeout(w, 0), b;
		    }
		  };

		  f = function (a) {
		    null !== t ? setTimeout(f, 0, a) : (t = a, setTimeout(w, 0));
		  };

		  g = function (a, b) {
		    u = setTimeout(a, b);
		  };

		  h = function () {
		    clearTimeout(u);
		  };

		  exports.unstable_shouldYield = function () {
		    return !1;
		  };

		  k = exports.unstable_forceFrameRate = function () {};
		} else {
		  var x = window.setTimeout,
		      y = window.clearTimeout;

		  if ("undefined" !== typeof console) {
		    var z = window.cancelAnimationFrame;
		    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
		    "function" !== typeof z && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
		  }

		  var A = !1,
		      B = null,
		      C = -1,
		      D = 5,
		      E = 0;

		  exports.unstable_shouldYield = function () {
		    return exports.unstable_now() >= E;
		  };

		  k = function () {};

		  exports.unstable_forceFrameRate = function (a) {
		    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < a ? Math.floor(1E3 / a) : 5;
		  };

		  var F = new MessageChannel(),
		      G = F.port2;

		  F.port1.onmessage = function () {
		    if (null !== B) {
		      var a = exports.unstable_now();
		      E = a + D;

		      try {
		        B(!0, a) ? G.postMessage(null) : (A = !1, B = null);
		      } catch (b) {
		        throw G.postMessage(null), b;
		      }
		    } else A = !1;
		  };

		  f = function (a) {
		    B = a;
		    A || (A = !0, G.postMessage(null));
		  };

		  g = function (a, b) {
		    C = x(function () {
		      a(exports.unstable_now());
		    }, b);
		  };

		  h = function () {
		    y(C);
		    C = -1;
		  };
		}

		function H(a, b) {
		  var c = a.length;
		  a.push(b);

		  a: for (;;) {
		    var d = c - 1 >>> 1,
		        e = a[d];
		    if (void 0 !== e && 0 < I(e, b)) a[d] = b, a[c] = e, c = d;else break a;
		  }
		}

		function J(a) {
		  a = a[0];
		  return void 0 === a ? null : a;
		}

		function K(a) {
		  var b = a[0];

		  if (void 0 !== b) {
		    var c = a.pop();

		    if (c !== b) {
		      a[0] = c;

		      a: for (var d = 0, e = a.length; d < e;) {
		        var m = 2 * (d + 1) - 1,
		            n = a[m],
		            v = m + 1,
		            r = a[v];
		        if (void 0 !== n && 0 > I(n, c)) void 0 !== r && 0 > I(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);else if (void 0 !== r && 0 > I(r, c)) a[d] = r, a[v] = c, d = v;else break a;
		      }
		    }

		    return b;
		  }

		  return null;
		}

		function I(a, b) {
		  var c = a.sortIndex - b.sortIndex;
		  return 0 !== c ? c : a.id - b.id;
		}

		var L = [],
		    M = [],
		    N = 1,
		    O = null,
		    P = 3,
		    Q = !1,
		    R = !1,
		    S = !1;

		function T(a) {
		  for (var b = J(M); null !== b;) {
		    if (null === b.callback) K(M);else if (b.startTime <= a) K(M), b.sortIndex = b.expirationTime, H(L, b);else break;
		    b = J(M);
		  }
		}

		function U(a) {
		  S = !1;
		  T(a);
		  if (!R) if (null !== J(L)) R = !0, f(V);else {
		    var b = J(M);
		    null !== b && g(U, b.startTime - a);
		  }
		}

		function V(a, b) {
		  R = !1;
		  S && (S = !1, h());
		  Q = !0;
		  var c = P;

		  try {
		    T(b);

		    for (O = J(L); null !== O && (!(O.expirationTime > b) || a && !exports.unstable_shouldYield());) {
		      var d = O.callback;

		      if ("function" === typeof d) {
		        O.callback = null;
		        P = O.priorityLevel;
		        var e = d(O.expirationTime <= b);
		        b = exports.unstable_now();
		        "function" === typeof e ? O.callback = e : O === J(L) && K(L);
		        T(b);
		      } else K(L);

		      O = J(L);
		    }

		    if (null !== O) var m = !0;else {
		      var n = J(M);
		      null !== n && g(U, n.startTime - b);
		      m = !1;
		    }
		    return m;
		  } finally {
		    O = null, P = c, Q = !1;
		  }
		}

		var W = k;
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
		  R || Q || (R = !0, f(V));
		};

		exports.unstable_getCurrentPriorityLevel = function () {
		  return P;
		};

		exports.unstable_getFirstCallbackNode = function () {
		  return J(L);
		};

		exports.unstable_next = function (a) {
		  switch (P) {
		    case 1:
		    case 2:
		    case 3:
		      var b = 3;
		      break;

		    default:
		      b = P;
		  }

		  var c = P;
		  P = b;

		  try {
		    return a();
		  } finally {
		    P = c;
		  }
		};

		exports.unstable_pauseExecution = function () {};

		exports.unstable_requestPaint = W;

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

		  var c = P;
		  P = a;

		  try {
		    return b();
		  } finally {
		    P = c;
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
		    id: N++,
		    callback: b,
		    priorityLevel: a,
		    startTime: c,
		    expirationTime: e,
		    sortIndex: -1
		  };
		  c > d ? (a.sortIndex = c, H(M, a), null === J(L) && a === J(M) && (S ? h() : S = !0, g(U, c - d))) : (a.sortIndex = e, H(L, a), R || Q || (R = !0, f(V)));
		  return a;
		};

		exports.unstable_wrapCallback = function (a) {
		  var b = P;
		  return function () {
		    var c = P;
		    P = b;

		    try {
		      return a.apply(this, arguments);
		    } finally {
		      P = c;
		    }
		  };
		};
	} (scheduler_production_min));

	(function (module) {

		{
		  module.exports = scheduler_production_min;
		}
	} (scheduler));

	/** @license React v17.0.2
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var aa = react.exports,
	    m$3 = objectAssign,
	    r$3 = scheduler.exports;

	function y$1(a) {
	  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

	  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}

	if (!aa) throw Error(y$1(227));
	var ba = new Set(),
	    ca = {};

	function da(a, b) {
	  ea(a, b);
	  ea(a + "Capture", b);
	}

	function ea(a, b) {
	  ca[a] = b;

	  for (a = 0; a < b.length; a++) ba.add(b[a]);
	}

	var fa = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
	    ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	    ia = Object.prototype.hasOwnProperty,
	    ja = {},
	    ka = {};

	function la(a) {
	  if (ia.call(ka, a)) return !0;
	  if (ia.call(ja, a)) return !1;
	  if (ha.test(a)) return ka[a] = !0;
	  ja[a] = !0;
	  return !1;
	}

	function ma(a, b, c, d) {
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

	function na(a, b, c, d) {
	  if (null === b || "undefined" === typeof b || ma(a, b, c, d)) return !0;
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

	function B$1(a, b, c, d, e, f, g) {
	  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
	  this.attributeName = d;
	  this.attributeNamespace = e;
	  this.mustUseProperty = c;
	  this.propertyName = a;
	  this.type = b;
	  this.sanitizeURL = f;
	  this.removeEmptyString = g;
	}

	var D = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
	  D[a] = new B$1(a, 0, !1, a, null, !1, !1);
	});
	[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
	  var b = a[0];
	  D[b] = new B$1(b, 1, !1, a[1], null, !1, !1);
	});
	["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
	  D[a] = new B$1(a, 2, !1, a.toLowerCase(), null, !1, !1);
	});
	["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
	  D[a] = new B$1(a, 2, !1, a, null, !1, !1);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
	  D[a] = new B$1(a, 3, !1, a.toLowerCase(), null, !1, !1);
	});
	["checked", "multiple", "muted", "selected"].forEach(function (a) {
	  D[a] = new B$1(a, 3, !0, a, null, !1, !1);
	});
	["capture", "download"].forEach(function (a) {
	  D[a] = new B$1(a, 4, !1, a, null, !1, !1);
	});
	["cols", "rows", "size", "span"].forEach(function (a) {
	  D[a] = new B$1(a, 6, !1, a, null, !1, !1);
	});
	["rowSpan", "start"].forEach(function (a) {
	  D[a] = new B$1(a, 5, !1, a.toLowerCase(), null, !1, !1);
	});
	var oa = /[\-:]([a-z])/g;

	function pa(a) {
	  return a[1].toUpperCase();
	}

	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
	  var b = a.replace(oa, pa);
	  D[b] = new B$1(b, 1, !1, a, null, !1, !1);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
	  var b = a.replace(oa, pa);
	  D[b] = new B$1(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
	});
	["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
	  var b = a.replace(oa, pa);
	  D[b] = new B$1(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
	});
	["tabIndex", "crossOrigin"].forEach(function (a) {
	  D[a] = new B$1(a, 1, !1, a.toLowerCase(), null, !1, !1);
	});
	D.xlinkHref = new B$1("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
	["src", "href", "action", "formAction"].forEach(function (a) {
	  D[a] = new B$1(a, 1, !1, a.toLowerCase(), null, !0, !0);
	});

	function qa(a, b, c, d) {
	  var e = D.hasOwnProperty(b) ? D[b] : null;
	  var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
	  f || (na(b, c, e, d) && (c = null), d || null === e ? la(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
	}

	var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	    sa = 60103,
	    ta = 60106,
	    ua = 60107,
	    wa = 60108,
	    xa = 60114,
	    ya = 60109,
	    za = 60110,
	    Aa = 60112,
	    Ba = 60113,
	    Ca = 60120,
	    Da = 60115,
	    Ea = 60116,
	    Fa = 60121,
	    Ga = 60128,
	    Ha = 60129,
	    Ia = 60130,
	    Ja = 60131;

	if ("function" === typeof Symbol && Symbol.for) {
	  var E$1 = Symbol.for;
	  sa = E$1("react.element");
	  ta = E$1("react.portal");
	  ua = E$1("react.fragment");
	  wa = E$1("react.strict_mode");
	  xa = E$1("react.profiler");
	  ya = E$1("react.provider");
	  za = E$1("react.context");
	  Aa = E$1("react.forward_ref");
	  Ba = E$1("react.suspense");
	  Ca = E$1("react.suspense_list");
	  Da = E$1("react.memo");
	  Ea = E$1("react.lazy");
	  Fa = E$1("react.block");
	  E$1("react.scope");
	  Ga = E$1("react.opaque.id");
	  Ha = E$1("react.debug_trace_mode");
	  Ia = E$1("react.offscreen");
	  Ja = E$1("react.legacy_hidden");
	}

	var Ka = "function" === typeof Symbol && Symbol.iterator;

	function La(a) {
	  if (null === a || "object" !== typeof a) return null;
	  a = Ka && a[Ka] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}

	var Ma;

	function Na(a) {
	  if (void 0 === Ma) try {
	    throw Error();
	  } catch (c) {
	    var b = c.stack.trim().match(/\n( *(at )?)/);
	    Ma = b && b[1] || "";
	  }
	  return "\n" + Ma + a;
	}

	var Oa = !1;

	function Pa(a, b) {
	  if (!a || Oa) return "";
	  Oa = !0;
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
	        } catch (k) {
	          var d = k;
	        }

	        Reflect.construct(a, [], b);
	      } else {
	        try {
	          b.call();
	        } catch (k) {
	          d = k;
	        }

	        a.call(b.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (k) {
	        d = k;
	      }

	      a();
	    }
	  } catch (k) {
	    if (k && d && "string" === typeof k.stack) {
	      for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;

	      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
	        if (1 !== g || 1 !== h) {
	          do if (g--, h--, 0 > h || e[g] !== f[h]) return "\n" + e[g].replace(" at new ", " at "); while (1 <= g && 0 <= h);
	        }

	        break;
	      }
	    }
	  } finally {
	    Oa = !1, Error.prepareStackTrace = c;
	  }

	  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
	}

	function Qa(a) {
	  switch (a.tag) {
	    case 5:
	      return Na(a.type);

	    case 16:
	      return Na("Lazy");

	    case 13:
	      return Na("Suspense");

	    case 19:
	      return Na("SuspenseList");

	    case 0:
	    case 2:
	    case 15:
	      return a = Pa(a.type, !1), a;

	    case 11:
	      return a = Pa(a.type.render, !1), a;

	    case 22:
	      return a = Pa(a.type._render, !1), a;

	    case 1:
	      return a = Pa(a.type, !0), a;

	    default:
	      return "";
	  }
	}

	function Ra(a) {
	  if (null == a) return null;
	  if ("function" === typeof a) return a.displayName || a.name || null;
	  if ("string" === typeof a) return a;

	  switch (a) {
	    case ua:
	      return "Fragment";

	    case ta:
	      return "Portal";

	    case xa:
	      return "Profiler";

	    case wa:
	      return "StrictMode";

	    case Ba:
	      return "Suspense";

	    case Ca:
	      return "SuspenseList";
	  }

	  if ("object" === typeof a) switch (a.$$typeof) {
	    case za:
	      return (a.displayName || "Context") + ".Consumer";

	    case ya:
	      return (a._context.displayName || "Context") + ".Provider";

	    case Aa:
	      var b = a.render;
	      b = b.displayName || b.name || "";
	      return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

	    case Da:
	      return Ra(a.type);

	    case Fa:
	      return Ra(a._render);

	    case Ea:
	      b = a._payload;
	      a = a._init;

	      try {
	        return Ra(a(b));
	      } catch (c) {}

	  }
	  return null;
	}

	function Sa(a) {
	  switch (typeof a) {
	    case "boolean":
	    case "number":
	    case "object":
	    case "string":
	    case "undefined":
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
	  return m$3({}, b, {
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

	function $a(a, b) {
	  b = b.checked;
	  null != b && qa(a, "checked", b, !1);
	}

	function ab(a, b) {
	  $a(a, b);
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
	  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
	  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	}

	function cb(a, b, c) {
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

	function bb(a, b, c) {
	  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	}

	function db(a) {
	  var b = "";
	  aa.Children.forEach(a, function (a) {
	    null != a && (b += a);
	  });
	  return b;
	}

	function eb(a, b) {
	  a = m$3({
	    children: void 0
	  }, b);
	  if (b = db(b.children)) a.children = b;
	  return a;
	}

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
	  if (null != b.dangerouslySetInnerHTML) throw Error(y$1(91));
	  return m$3({}, b, {
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
	      if (null != b) throw Error(y$1(92));

	      if (Array.isArray(c)) {
	        if (!(1 >= c.length)) throw Error(y$1(93));
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

	var kb = {
	  html: "http://www.w3.org/1999/xhtml",
	  mathml: "http://www.w3.org/1998/Math/MathML",
	  svg: "http://www.w3.org/2000/svg"
	};

	function lb(a) {
	  switch (a) {
	    case "svg":
	      return "http://www.w3.org/2000/svg";

	    case "math":
	      return "http://www.w3.org/1998/Math/MathML";

	    default:
	      return "http://www.w3.org/1999/xhtml";
	  }
	}

	function mb(a, b) {
	  return null == a || "http://www.w3.org/1999/xhtml" === a ? lb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	}

	var nb,
	    ob = function (a) {
	  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
	    MSApp.execUnsafeLocalFunction(function () {
	      return a(b, c, d, e);
	    });
	  } : a;
	}(function (a, b) {
	  if (a.namespaceURI !== kb.svg || "innerHTML" in a) a.innerHTML = b;else {
	    nb = nb || document.createElement("div");
	    nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";

	    for (b = nb.firstChild; a.firstChild;) a.removeChild(a.firstChild);

	    for (; b.firstChild;) a.appendChild(b.firstChild);
	  }
	});

	function pb(a, b) {
	  if (b) {
	    var c = a.firstChild;

	    if (c && c === a.lastChild && 3 === c.nodeType) {
	      c.nodeValue = b;
	      return;
	    }
	  }

	  a.textContent = b;
	}

	var qb = {
	  animationIterationCount: !0,
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
	    rb = ["Webkit", "ms", "Moz", "O"];
	Object.keys(qb).forEach(function (a) {
	  rb.forEach(function (b) {
	    b = b + a.charAt(0).toUpperCase() + a.substring(1);
	    qb[b] = qb[a];
	  });
	});

	function sb(a, b, c) {
	  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
	}

	function tb(a, b) {
	  a = a.style;

	  for (var c in b) if (b.hasOwnProperty(c)) {
	    var d = 0 === c.indexOf("--"),
	        e = sb(c, b[c], d);
	    "float" === c && (c = "cssFloat");
	    d ? a.setProperty(c, e) : a[c] = e;
	  }
	}

	var ub = m$3({
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

	function vb(a, b) {
	  if (b) {
	    if (ub[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(y$1(137, a));

	    if (null != b.dangerouslySetInnerHTML) {
	      if (null != b.children) throw Error(y$1(60));
	      if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML)) throw Error(y$1(61));
	    }

	    if (null != b.style && "object" !== typeof b.style) throw Error(y$1(62));
	  }
	}

	function wb(a, b) {
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
	    if ("function" !== typeof yb) throw Error(y$1(280));
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

	function Hb(a, b, c, d, e) {
	  return a(b, c, d, e);
	}

	function Ib() {}

	var Jb = Gb,
	    Kb = !1,
	    Lb = !1;

	function Mb() {
	  if (null !== zb || null !== Ab) Ib(), Fb();
	}

	function Nb(a, b, c) {
	  if (Lb) return a(b, c);
	  Lb = !0;

	  try {
	    return Jb(a, b, c);
	  } finally {
	    Lb = !1, Mb();
	  }
	}

	function Ob(a, b) {
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
	  if (c && "function" !== typeof c) throw Error(y$1(231, b, typeof c));
	  return c;
	}

	var Pb = !1;
	if (fa) try {
	  var Qb = {};
	  Object.defineProperty(Qb, "passive", {
	    get: function () {
	      Pb = !0;
	    }
	  });
	  window.addEventListener("test", Qb, Qb);
	  window.removeEventListener("test", Qb, Qb);
	} catch (a) {
	  Pb = !1;
	}

	function Rb(a, b, c, d, e, f, g, h, k) {
	  var l = Array.prototype.slice.call(arguments, 3);

	  try {
	    b.apply(c, l);
	  } catch (n) {
	    this.onError(n);
	  }
	}

	var Sb = !1,
	    Tb = null,
	    Ub = !1,
	    Vb = null,
	    Wb = {
	  onError: function (a) {
	    Sb = !0;
	    Tb = a;
	  }
	};

	function Xb(a, b, c, d, e, f, g, h, k) {
	  Sb = !1;
	  Tb = null;
	  Rb.apply(Wb, arguments);
	}

	function Yb(a, b, c, d, e, f, g, h, k) {
	  Xb.apply(this, arguments);

	  if (Sb) {
	    if (Sb) {
	      var l = Tb;
	      Sb = !1;
	      Tb = null;
	    } else throw Error(y$1(198));

	    Ub || (Ub = !0, Vb = l);
	  }
	}

	function Zb(a) {
	  var b = a,
	      c = a;
	  if (a.alternate) for (; b.return;) b = b.return;else {
	    a = b;

	    do b = a, 0 !== (b.flags & 1026) && (c = b.return), a = b.return; while (a);
	  }
	  return 3 === b.tag ? c : null;
	}

	function $b(a) {
	  if (13 === a.tag) {
	    var b = a.memoizedState;
	    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
	    if (null !== b) return b.dehydrated;
	  }

	  return null;
	}

	function ac(a) {
	  if (Zb(a) !== a) throw Error(y$1(188));
	}

	function bc(a) {
	  var b = a.alternate;

	  if (!b) {
	    b = Zb(a);
	    if (null === b) throw Error(y$1(188));
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
	        if (f === c) return ac(e), a;
	        if (f === d) return ac(e), b;
	        f = f.sibling;
	      }

	      throw Error(y$1(188));
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

	        if (!g) throw Error(y$1(189));
	      }
	    }
	    if (c.alternate !== d) throw Error(y$1(190));
	  }

	  if (3 !== c.tag) throw Error(y$1(188));
	  return c.stateNode.current === c ? a : b;
	}

	function cc(a) {
	  a = bc(a);
	  if (!a) return null;

	  for (var b = a;;) {
	    if (5 === b.tag || 6 === b.tag) return b;
	    if (b.child) b.child.return = b, b = b.child;else {
	      if (b === a) break;

	      for (; !b.sibling;) {
	        if (!b.return || b.return === a) return null;
	        b = b.return;
	      }

	      b.sibling.return = b.return;
	      b = b.sibling;
	    }
	  }

	  return null;
	}

	function dc(a, b) {
	  for (var c = a.alternate; null !== b;) {
	    if (b === a || b === c) return !0;
	    b = b.return;
	  }

	  return !1;
	}

	var ec,
	    fc,
	    gc,
	    hc,
	    ic = !1,
	    jc = [],
	    kc = null,
	    lc = null,
	    mc = null,
	    nc = new Map(),
	    oc = new Map(),
	    pc = [],
	    qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

	function rc(a, b, c, d, e) {
	  return {
	    blockedOn: a,
	    domEventName: b,
	    eventSystemFlags: c | 16,
	    nativeEvent: e,
	    targetContainers: [d]
	  };
	}

	function sc(a, b) {
	  switch (a) {
	    case "focusin":
	    case "focusout":
	      kc = null;
	      break;

	    case "dragenter":
	    case "dragleave":
	      lc = null;
	      break;

	    case "mouseover":
	    case "mouseout":
	      mc = null;
	      break;

	    case "pointerover":
	    case "pointerout":
	      nc.delete(b.pointerId);
	      break;

	    case "gotpointercapture":
	    case "lostpointercapture":
	      oc.delete(b.pointerId);
	  }
	}

	function tc(a, b, c, d, e, f) {
	  if (null === a || a.nativeEvent !== f) return a = rc(b, c, d, e, f), null !== b && (b = Cb(b), null !== b && fc(b)), a;
	  a.eventSystemFlags |= d;
	  b = a.targetContainers;
	  null !== e && -1 === b.indexOf(e) && b.push(e);
	  return a;
	}

	function uc(a, b, c, d, e) {
	  switch (b) {
	    case "focusin":
	      return kc = tc(kc, a, b, c, d, e), !0;

	    case "dragenter":
	      return lc = tc(lc, a, b, c, d, e), !0;

	    case "mouseover":
	      return mc = tc(mc, a, b, c, d, e), !0;

	    case "pointerover":
	      var f = e.pointerId;
	      nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
	      return !0;

	    case "gotpointercapture":
	      return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), !0;
	  }

	  return !1;
	}

	function vc(a) {
	  var b = wc(a.target);

	  if (null !== b) {
	    var c = Zb(b);
	    if (null !== c) if (b = c.tag, 13 === b) {
	      if (b = $b(c), null !== b) {
	        a.blockedOn = b;
	        hc(a.lanePriority, function () {
	          r$3.unstable_runWithPriority(a.priority, function () {
	            gc(c);
	          });
	        });
	        return;
	      }
	    } else if (3 === b && c.stateNode.hydrate) {
	      a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
	      return;
	    }
	  }

	  a.blockedOn = null;
	}

	function xc(a) {
	  if (null !== a.blockedOn) return !1;

	  for (var b = a.targetContainers; 0 < b.length;) {
	    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
	    if (null !== c) return b = Cb(c), null !== b && fc(b), a.blockedOn = c, !1;
	    b.shift();
	  }

	  return !0;
	}

	function zc(a, b, c) {
	  xc(a) && c.delete(b);
	}

	function Ac() {
	  for (ic = !1; 0 < jc.length;) {
	    var a = jc[0];

	    if (null !== a.blockedOn) {
	      a = Cb(a.blockedOn);
	      null !== a && ec(a);
	      break;
	    }

	    for (var b = a.targetContainers; 0 < b.length;) {
	      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);

	      if (null !== c) {
	        a.blockedOn = c;
	        break;
	      }

	      b.shift();
	    }

	    null === a.blockedOn && jc.shift();
	  }

	  null !== kc && xc(kc) && (kc = null);
	  null !== lc && xc(lc) && (lc = null);
	  null !== mc && xc(mc) && (mc = null);
	  nc.forEach(zc);
	  oc.forEach(zc);
	}

	function Bc(a, b) {
	  a.blockedOn === b && (a.blockedOn = null, ic || (ic = !0, r$3.unstable_scheduleCallback(r$3.unstable_NormalPriority, Ac)));
	}

	function Cc(a) {
	  function b(b) {
	    return Bc(b, a);
	  }

	  if (0 < jc.length) {
	    Bc(jc[0], a);

	    for (var c = 1; c < jc.length; c++) {
	      var d = jc[c];
	      d.blockedOn === a && (d.blockedOn = null);
	    }
	  }

	  null !== kc && Bc(kc, a);
	  null !== lc && Bc(lc, a);
	  null !== mc && Bc(mc, a);
	  nc.forEach(b);
	  oc.forEach(b);

	  for (c = 0; c < pc.length; c++) d = pc[c], d.blockedOn === a && (d.blockedOn = null);

	  for (; 0 < pc.length && (c = pc[0], null === c.blockedOn);) vc(c), null === c.blockedOn && pc.shift();
	}

	function Dc(a, b) {
	  var c = {};
	  c[a.toLowerCase()] = b.toLowerCase();
	  c["Webkit" + a] = "webkit" + b;
	  c["Moz" + a] = "moz" + b;
	  return c;
	}

	var Ec = {
	  animationend: Dc("Animation", "AnimationEnd"),
	  animationiteration: Dc("Animation", "AnimationIteration"),
	  animationstart: Dc("Animation", "AnimationStart"),
	  transitionend: Dc("Transition", "TransitionEnd")
	},
	    Fc = {},
	    Gc = {};
	fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);

	function Hc(a) {
	  if (Fc[a]) return Fc[a];
	  if (!Ec[a]) return a;
	  var b = Ec[a],
	      c;

	  for (c in b) if (b.hasOwnProperty(c) && c in Gc) return Fc[a] = b[c];

	  return a;
	}

	var Ic = Hc("animationend"),
	    Jc = Hc("animationiteration"),
	    Kc = Hc("animationstart"),
	    Lc = Hc("transitionend"),
	    Mc = new Map(),
	    Nc = new Map(),
	    Oc = ["abort", "abort", Ic, "animationEnd", Jc, "animationIteration", Kc, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Lc, "transitionEnd", "waiting", "waiting"];

	function Pc(a, b) {
	  for (var c = 0; c < a.length; c += 2) {
	    var d = a[c],
	        e = a[c + 1];
	    e = "on" + (e[0].toUpperCase() + e.slice(1));
	    Nc.set(d, b);
	    Mc.set(d, e);
	    da(e, [d]);
	  }
	}

	var Qc = r$3.unstable_now;
	Qc();
	var F$1 = 8;

	function Rc(a) {
	  if (0 !== (1 & a)) return F$1 = 15, 1;
	  if (0 !== (2 & a)) return F$1 = 14, 2;
	  if (0 !== (4 & a)) return F$1 = 13, 4;
	  var b = 24 & a;
	  if (0 !== b) return F$1 = 12, b;
	  if (0 !== (a & 32)) return F$1 = 11, 32;
	  b = 192 & a;
	  if (0 !== b) return F$1 = 10, b;
	  if (0 !== (a & 256)) return F$1 = 9, 256;
	  b = 3584 & a;
	  if (0 !== b) return F$1 = 8, b;
	  if (0 !== (a & 4096)) return F$1 = 7, 4096;
	  b = 4186112 & a;
	  if (0 !== b) return F$1 = 6, b;
	  b = 62914560 & a;
	  if (0 !== b) return F$1 = 5, b;
	  if (a & 67108864) return F$1 = 4, 67108864;
	  if (0 !== (a & 134217728)) return F$1 = 3, 134217728;
	  b = 805306368 & a;
	  if (0 !== b) return F$1 = 2, b;
	  if (0 !== (1073741824 & a)) return F$1 = 1, 1073741824;
	  F$1 = 8;
	  return a;
	}

	function Sc(a) {
	  switch (a) {
	    case 99:
	      return 15;

	    case 98:
	      return 10;

	    case 97:
	    case 96:
	      return 8;

	    case 95:
	      return 2;

	    default:
	      return 0;
	  }
	}

	function Tc(a) {
	  switch (a) {
	    case 15:
	    case 14:
	      return 99;

	    case 13:
	    case 12:
	    case 11:
	    case 10:
	      return 98;

	    case 9:
	    case 8:
	    case 7:
	    case 6:
	    case 4:
	    case 5:
	      return 97;

	    case 3:
	    case 2:
	    case 1:
	      return 95;

	    case 0:
	      return 90;

	    default:
	      throw Error(y$1(358, a));
	  }
	}

	function Uc(a, b) {
	  var c = a.pendingLanes;
	  if (0 === c) return F$1 = 0;
	  var d = 0,
	      e = 0,
	      f = a.expiredLanes,
	      g = a.suspendedLanes,
	      h = a.pingedLanes;
	  if (0 !== f) d = f, e = F$1 = 15;else if (f = c & 134217727, 0 !== f) {
	    var k = f & ~g;
	    0 !== k ? (d = Rc(k), e = F$1) : (h &= f, 0 !== h && (d = Rc(h), e = F$1));
	  } else f = c & ~g, 0 !== f ? (d = Rc(f), e = F$1) : 0 !== h && (d = Rc(h), e = F$1);
	  if (0 === d) return 0;
	  d = 31 - Vc(d);
	  d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;

	  if (0 !== b && b !== d && 0 === (b & g)) {
	    Rc(b);
	    if (e <= F$1) return b;
	    F$1 = e;
	  }

	  b = a.entangledLanes;
	  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
	  return d;
	}

	function Wc(a) {
	  a = a.pendingLanes & -1073741825;
	  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}

	function Xc(a, b) {
	  switch (a) {
	    case 15:
	      return 1;

	    case 14:
	      return 2;

	    case 12:
	      return a = Yc(24 & ~b), 0 === a ? Xc(10, b) : a;

	    case 10:
	      return a = Yc(192 & ~b), 0 === a ? Xc(8, b) : a;

	    case 8:
	      return a = Yc(3584 & ~b), 0 === a && (a = Yc(4186112 & ~b), 0 === a && (a = 512)), a;

	    case 2:
	      return b = Yc(805306368 & ~b), 0 === b && (b = 268435456), b;
	  }

	  throw Error(y$1(358, a));
	}

	function Yc(a) {
	  return a & -a;
	}

	function Zc(a) {
	  for (var b = [], c = 0; 31 > c; c++) b.push(a);

	  return b;
	}

	function $c(a, b, c) {
	  a.pendingLanes |= b;
	  var d = b - 1;
	  a.suspendedLanes &= d;
	  a.pingedLanes &= d;
	  a = a.eventTimes;
	  b = 31 - Vc(b);
	  a[b] = c;
	}

	var Vc = Math.clz32 ? Math.clz32 : ad,
	    bd = Math.log,
	    cd = Math.LN2;

	function ad(a) {
	  return 0 === a ? 32 : 31 - (bd(a) / cd | 0) | 0;
	}

	var dd = r$3.unstable_UserBlockingPriority,
	    ed = r$3.unstable_runWithPriority,
	    fd = !0;

	function gd(a, b, c, d) {
	  Kb || Ib();
	  var e = hd,
	      f = Kb;
	  Kb = !0;

	  try {
	    Hb(e, a, b, c, d);
	  } finally {
	    (Kb = f) || Mb();
	  }
	}

	function id(a, b, c, d) {
	  ed(dd, hd.bind(null, a, b, c, d));
	}

	function hd(a, b, c, d) {
	  if (fd) {
	    var e;
	    if ((e = 0 === (b & 4)) && 0 < jc.length && -1 < qc.indexOf(a)) a = rc(null, a, b, c, d), jc.push(a);else {
	      var f = yc(a, b, c, d);
	      if (null === f) e && sc(a, d);else {
	        if (e) {
	          if (-1 < qc.indexOf(a)) {
	            a = rc(f, a, b, c, d);
	            jc.push(a);
	            return;
	          }

	          if (uc(f, a, b, c, d)) return;
	          sc(a, d);
	        }

	        jd(a, b, d, null, c);
	      }
	    }
	  }
	}

	function yc(a, b, c, d) {
	  var e = xb(d);
	  e = wc(e);

	  if (null !== e) {
	    var f = Zb(e);
	    if (null === f) e = null;else {
	      var g = f.tag;

	      if (13 === g) {
	        e = $b(f);
	        if (null !== e) return e;
	        e = null;
	      } else if (3 === g) {
	        if (f.stateNode.hydrate) return 3 === f.tag ? f.stateNode.containerInfo : null;
	        e = null;
	      } else f !== e && (e = null);
	    }
	  }

	  jd(a, b, d, e, c);
	  return null;
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

	  m$3(b.prototype, {
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
	    ud = m$3({}, sd, {
	  view: 0,
	  detail: 0
	}),
	    vd = rd(ud),
	    wd,
	    xd,
	    yd,
	    Ad = m$3({}, ud, {
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
	    Cd = m$3({}, Ad, {
	  dataTransfer: 0
	}),
	    Dd = rd(Cd),
	    Ed = m$3({}, ud, {
	  relatedTarget: 0
	}),
	    Fd = rd(Ed),
	    Gd = m$3({}, sd, {
	  animationName: 0,
	  elapsedTime: 0,
	  pseudoElement: 0
	}),
	    Hd = rd(Gd),
	    Id = m$3({}, sd, {
	  clipboardData: function (a) {
	    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	  }
	}),
	    Jd = rd(Id),
	    Kd = m$3({}, sd, {
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

	var Qd = m$3({}, ud, {
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
	    Sd = m$3({}, Ad, {
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
	    Ud = m$3({}, ud, {
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
	    Wd = m$3({}, sd, {
	  propertyName: 0,
	  elapsedTime: 0,
	  pseudoElement: 0
	}),
	    Xd = rd(Wd),
	    Yd = m$3({}, Ad, {
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
	    ae$1 = fa && "CompositionEvent" in window,
	    be$1 = null;
	fa && "documentMode" in document && (be$1 = document.documentMode);
	var ce$1 = fa && "TextEvent" in window && !be$1,
	    de$1 = fa && (!ae$1 || be$1 && 8 < be$1 && 11 >= be$1),
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

	if (fa) {
	  var xe$1;

	  if (fa) {
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
	    a = re$1;
	    if (Kb) a(b);else {
	      Kb = !0;

	      try {
	        Gb(a, b);
	      } finally {
	        Kb = !1, Mb();
	      }
	    }
	  }
	}

	function Ce$1(a, b, c) {
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

	var He$1 = "function" === typeof Object.is ? Object.is : Ge$1,
	    Ie = Object.prototype.hasOwnProperty;

	function Je$1(a, b) {
	  if (He$1(a, b)) return !0;
	  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
	  var c = Object.keys(a),
	      d = Object.keys(b);
	  if (c.length !== d.length) return !1;

	  for (d = 0; d < c.length; d++) if (!Ie.call(b, c[d]) || !He$1(a[c[d]], b[c[d]])) return !1;

	  return !0;
	}

	function Ke$1(a) {
	  for (; a && a.firstChild;) a = a.firstChild;

	  return a;
	}

	function Le$1(a, b) {
	  var c = Ke$1(a);
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

	    c = Ke$1(c);
	  }
	}

	function Me$1(a, b) {
	  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Me$1(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
	}

	function Ne$1() {
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

	function Oe(a) {
	  var b = a && a.nodeName && a.nodeName.toLowerCase();
	  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
	}

	var Pe = fa && "documentMode" in document && 11 >= document.documentMode,
	    Qe = null,
	    Re$1 = null,
	    Se$1 = null,
	    Te$1 = !1;

	function Ue$1(a, b, c) {
	  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
	  Te$1 || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = {
	    start: d.selectionStart,
	    end: d.selectionEnd
	  } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
	    anchorNode: d.anchorNode,
	    anchorOffset: d.anchorOffset,
	    focusNode: d.focusNode,
	    focusOffset: d.focusOffset
	  }), Se$1 && Je$1(Se$1, d) || (Se$1 = d, d = oe$1(Re$1, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
	    event: b,
	    listeners: d
	  }), b.target = Qe)));
	}

	Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
	Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
	Pc(Oc, 2);

	for (var Ve$1 = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We$1 = 0; We$1 < Ve$1.length; We$1++) Nc.set(Ve$1[We$1], 0);

	ea("onMouseEnter", ["mouseout", "mouseover"]);
	ea("onMouseLeave", ["mouseout", "mouseover"]);
	ea("onPointerEnter", ["pointerout", "pointerover"]);
	ea("onPointerLeave", ["pointerout", "pointerover"]);
	da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
	da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Xe$1 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	    Ye$1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe$1));

	function Ze$1(a, b, c) {
	  var d = a.type || "unknown-event";
	  a.currentTarget = c;
	  Yb(d, b, void 0, a);
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
	        Ze$1(e, h, l);
	        f = k;
	      } else for (g = 0; g < d.length; g++) {
	        h = d[g];
	        k = h.instance;
	        l = h.currentTarget;
	        h = h.listener;
	        if (k !== f && e.isPropagationStopped()) break a;
	        Ze$1(e, h, l);
	        f = k;
	      }
	    }
	  }

	  if (Ub) throw a = Vb, Ub = !1, Vb = null, a;
	}

	function G$1(a, b) {
	  var c = $e$1(b),
	      d = a + "__bubble";
	  c.has(d) || (af(b, a, 2, !1), c.add(d));
	}

	var bf = "_reactListening" + Math.random().toString(36).slice(2);

	function cf(a) {
	  a[bf] || (a[bf] = !0, ba.forEach(function (b) {
	    Ye$1.has(b) || df(b, !1, a, null);
	    df(b, !0, a, null);
	  }));
	}

	function df(a, b, c, d) {
	  var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
	      f = c;
	  "selectionchange" === a && 9 !== c.nodeType && (f = c.ownerDocument);

	  if (null !== d && !b && Ye$1.has(a)) {
	    if ("scroll" !== a) return;
	    e |= 2;
	    f = d;
	  }

	  var g = $e$1(f),
	      h = a + "__" + (b ? "capture" : "bubble");
	  g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
	}

	function af(a, b, c, d) {
	  var e = Nc.get(b);

	  switch (void 0 === e ? 2 : e) {
	    case 0:
	      e = gd;
	      break;

	    case 1:
	      e = id;
	      break;

	    default:
	      e = hd;
	  }

	  c = e.bind(null, b, c, a);
	  e = void 0;
	  !Pb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
	  d ? void 0 !== e ? a.addEventListener(b, c, {
	    capture: !0,
	    passive: e
	  }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
	    passive: e
	  }) : a.addEventListener(b, c, !1);
	}

	function jd(a, b, c, d, e) {
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
	        g = wc(h);
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
	  Nb(function () {
	    var d = f,
	        e = xb(c),
	        g = [];

	    a: {
	      var h = Mc.get(a);

	      if (void 0 !== h) {
	        var k = td,
	            x = a;

	        switch (a) {
	          case "keypress":
	            if (0 === od(c)) break a;

	          case "keydown":
	          case "keyup":
	            k = Rd;
	            break;

	          case "focusin":
	            x = "focus";
	            k = Fd;
	            break;

	          case "focusout":
	            x = "blur";
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

	          case Ic:
	          case Jc:
	          case Kc:
	            k = Hd;
	            break;

	          case Lc:
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

	        var w = 0 !== (b & 4),
	            z = !w && "scroll" === a,
	            u = w ? null !== h ? h + "Capture" : null : h;
	        w = [];

	        for (var t = d, q; null !== t;) {
	          q = t;
	          var v = q.stateNode;
	          5 === q.tag && null !== v && (q = v, null !== u && (v = Ob(t, u), null != v && w.push(ef(t, v, q))));
	          if (z) break;
	          t = t.return;
	        }

	        0 < w.length && (h = new k(h, x, null, c, e), g.push({
	          event: h,
	          listeners: w
	        }));
	      }
	    }

	    if (0 === (b & 7)) {
	      a: {
	        h = "mouseover" === a || "pointerover" === a;
	        k = "mouseout" === a || "pointerout" === a;
	        if (h && 0 === (b & 16) && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff])) break a;

	        if (k || h) {
	          h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;

	          if (k) {
	            if (x = c.relatedTarget || c.toElement, k = d, x = x ? wc(x) : null, null !== x && (z = Zb(x), x !== z || 5 !== x.tag && 6 !== x.tag)) x = null;
	          } else k = null, x = d;

	          if (k !== x) {
	            w = Bd;
	            v = "onMouseLeave";
	            u = "onMouseEnter";
	            t = "mouse";
	            if ("pointerout" === a || "pointerover" === a) w = Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer";
	            z = null == k ? h : ue$1(k);
	            q = null == x ? h : ue$1(x);
	            h = new w(v, t + "leave", k, c, e);
	            h.target = z;
	            h.relatedTarget = q;
	            v = null;
	            wc(e) === d && (w = new w(u, t + "enter", x, c, e), w.target = q, w.relatedTarget = z, v = w);
	            z = v;
	            if (k && x) b: {
	              w = k;
	              u = x;
	              t = 0;

	              for (q = w; q; q = gf(q)) t++;

	              q = 0;

	              for (v = u; v; v = gf(v)) q++;

	              for (; 0 < t - q;) w = gf(w), t--;

	              for (; 0 < q - t;) u = gf(u), q--;

	              for (; t--;) {
	                if (w === u || null !== u && w === u.alternate) break b;
	                w = gf(w);
	                u = gf(u);
	              }

	              w = null;
	            } else w = null;
	            null !== k && hf(g, h, k, w, !1);
	            null !== x && null !== z && hf(g, z, x, w, !0);
	          }
	        }
	      }

	      a: {
	        h = d ? ue$1(d) : window;
	        k = h.nodeName && h.nodeName.toLowerCase();
	        if ("select" === k || "input" === k && "file" === h.type) var J = ve$1;else if (me$1(h)) {
	          if (we$1) J = Fe$1;else {
	            J = De$1;
	            var K = Ce$1;
	          }
	        } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (J = Ee$1);

	        if (J && (J = J(a, d))) {
	          ne$1(g, J, c, e);
	          break a;
	        }

	        K && K(a, h, d);
	        "focusout" === a && (K = h._wrapperState) && K.controlled && "number" === h.type && bb(h, "number", h.value);
	      }

	      K = d ? ue$1(d) : window;

	      switch (a) {
	        case "focusin":
	          if (me$1(K) || "true" === K.contentEditable) Qe = K, Re$1 = d, Se$1 = null;
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

	      var Q;
	      if (ae$1) b: {
	        switch (a) {
	          case "compositionstart":
	            var L = "onCompositionStart";
	            break b;

	          case "compositionend":
	            L = "onCompositionEnd";
	            break b;

	          case "compositionupdate":
	            L = "onCompositionUpdate";
	            break b;
	        }

	        L = void 0;
	      } else ie$1 ? ge$1(a, c) && (L = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (L = "onCompositionStart");
	      L && (de$1 && "ko" !== c.locale && (ie$1 || "onCompositionStart" !== L ? "onCompositionEnd" === L && ie$1 && (Q = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = !0)), K = oe$1(d, L), 0 < K.length && (L = new Ld(L, a, null, c, e), g.push({
	        event: L,
	        listeners: K
	      }), Q ? L.data = Q : (Q = he$1(c), null !== Q && (L.data = Q))));
	      if (Q = ce$1 ? je$1(a, c) : ke$1(a, c)) d = oe$1(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
	        event: e,
	        listeners: d
	      }), e.data = Q);
	    }

	    se$1(g, b);
	  });
	}

	function ef(a, b, c) {
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
	    5 === e.tag && null !== f && (e = f, f = Ob(a, c), null != f && d.unshift(ef(a, f, e)), f = Ob(a, b), null != f && d.push(ef(a, f, e)));
	    a = a.return;
	  }

	  return d;
	}

	function gf(a) {
	  if (null === a) return null;

	  do a = a.return; while (a && 5 !== a.tag);

	  return a ? a : null;
	}

	function hf(a, b, c, d, e) {
	  for (var f = b._reactName, g = []; null !== c && c !== d;) {
	    var h = c,
	        k = h.alternate,
	        l = h.stateNode;
	    if (null !== k && k === d) break;
	    5 === h.tag && null !== l && (h = l, e ? (k = Ob(c, f), null != k && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), null != k && g.push(ef(c, k, h))));
	    c = c.return;
	  }

	  0 !== g.length && a.push({
	    event: b,
	    listeners: g
	  });
	}

	function jf() {}

	var kf = null,
	    lf = null;

	function mf(a, b) {
	  switch (a) {
	    case "button":
	    case "input":
	    case "select":
	    case "textarea":
	      return !!b.autoFocus;
	  }

	  return !1;
	}

	function nf(a, b) {
	  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
	}

	var of = "function" === typeof setTimeout ? setTimeout : void 0,
	    pf = "function" === typeof clearTimeout ? clearTimeout : void 0;

	function qf(a) {
	  1 === a.nodeType ? a.textContent = "" : 9 === a.nodeType && (a = a.body, null != a && (a.textContent = ""));
	}

	function rf(a) {
	  for (; null != a; a = a.nextSibling) {
	    var b = a.nodeType;
	    if (1 === b || 3 === b) break;
	  }

	  return a;
	}

	function sf(a) {
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

	var tf = 0;

	function uf(a) {
	  return {
	    $$typeof: Ga,
	    toString: a,
	    valueOf: a
	  };
	}

	var vf = Math.random().toString(36).slice(2),
	    wf = "__reactFiber$" + vf,
	    xf = "__reactProps$" + vf,
	    ff = "__reactContainer$" + vf,
	    yf = "__reactEvents$" + vf;

	function wc(a) {
	  var b = a[wf];
	  if (b) return b;

	  for (var c = a.parentNode; c;) {
	    if (b = c[ff] || c[wf]) {
	      c = b.alternate;
	      if (null !== b.child || null !== c && null !== c.child) for (a = sf(a); null !== a;) {
	        if (c = a[wf]) return c;
	        a = sf(a);
	      }
	      return b;
	    }

	    a = c;
	    c = a.parentNode;
	  }

	  return null;
	}

	function Cb(a) {
	  a = a[wf] || a[ff];
	  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}

	function ue$1(a) {
	  if (5 === a.tag || 6 === a.tag) return a.stateNode;
	  throw Error(y$1(33));
	}

	function Db(a) {
	  return a[xf] || null;
	}

	function $e$1(a) {
	  var b = a[yf];
	  void 0 === b && (b = a[yf] = new Set());
	  return b;
	}

	var zf = [],
	    Af = -1;

	function Bf(a) {
	  return {
	    current: a
	  };
	}

	function H$1(a) {
	  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
	}

	function I$1(a, b) {
	  Af++;
	  zf[Af] = a.current;
	  a.current = b;
	}

	var Cf = {},
	    M$1 = Bf(Cf),
	    N$1 = Bf(!1),
	    Df = Cf;

	function Ef(a, b) {
	  var c = a.type.contextTypes;
	  if (!c) return Cf;
	  var d = a.stateNode;
	  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
	  var e = {},
	      f;

	  for (f in c) e[f] = b[f];

	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
	  return e;
	}

	function Ff(a) {
	  a = a.childContextTypes;
	  return null !== a && void 0 !== a;
	}

	function Gf() {
	  H$1(N$1);
	  H$1(M$1);
	}

	function Hf(a, b, c) {
	  if (M$1.current !== Cf) throw Error(y$1(168));
	  I$1(M$1, b);
	  I$1(N$1, c);
	}

	function If(a, b, c) {
	  var d = a.stateNode;
	  a = b.childContextTypes;
	  if ("function" !== typeof d.getChildContext) return c;
	  d = d.getChildContext();

	  for (var e in d) if (!(e in a)) throw Error(y$1(108, Ra(b) || "Unknown", e));

	  return m$3({}, c, d);
	}

	function Jf(a) {
	  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
	  Df = M$1.current;
	  I$1(M$1, a);
	  I$1(N$1, N$1.current);
	  return !0;
	}

	function Kf(a, b, c) {
	  var d = a.stateNode;
	  if (!d) throw Error(y$1(169));
	  c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H$1(N$1), H$1(M$1), I$1(M$1, a)) : H$1(N$1);
	  I$1(N$1, c);
	}

	var Lf = null,
	    Mf = null,
	    Nf = r$3.unstable_runWithPriority,
	    Of = r$3.unstable_scheduleCallback,
	    Pf = r$3.unstable_cancelCallback,
	    Qf = r$3.unstable_shouldYield,
	    Rf = r$3.unstable_requestPaint,
	    Sf = r$3.unstable_now,
	    Tf = r$3.unstable_getCurrentPriorityLevel,
	    Uf = r$3.unstable_ImmediatePriority,
	    Vf = r$3.unstable_UserBlockingPriority,
	    Wf = r$3.unstable_NormalPriority,
	    Xf = r$3.unstable_LowPriority,
	    Yf = r$3.unstable_IdlePriority,
	    Zf = {},
	    $f = void 0 !== Rf ? Rf : function () {},
	    ag = null,
	    bg = null,
	    cg = !1,
	    dg = Sf(),
	    O$1 = 1E4 > dg ? Sf : function () {
	  return Sf() - dg;
	};

	function eg() {
	  switch (Tf()) {
	    case Uf:
	      return 99;

	    case Vf:
	      return 98;

	    case Wf:
	      return 97;

	    case Xf:
	      return 96;

	    case Yf:
	      return 95;

	    default:
	      throw Error(y$1(332));
	  }
	}

	function fg(a) {
	  switch (a) {
	    case 99:
	      return Uf;

	    case 98:
	      return Vf;

	    case 97:
	      return Wf;

	    case 96:
	      return Xf;

	    case 95:
	      return Yf;

	    default:
	      throw Error(y$1(332));
	  }
	}

	function gg(a, b) {
	  a = fg(a);
	  return Nf(a, b);
	}

	function hg(a, b, c) {
	  a = fg(a);
	  return Of(a, b, c);
	}

	function ig() {
	  if (null !== bg) {
	    var a = bg;
	    bg = null;
	    Pf(a);
	  }

	  jg();
	}

	function jg() {
	  if (!cg && null !== ag) {
	    cg = !0;
	    var a = 0;

	    try {
	      var b = ag;
	      gg(99, function () {
	        for (; a < b.length; a++) {
	          var c = b[a];

	          do c = c(!0); while (null !== c);
	        }
	      });
	      ag = null;
	    } catch (c) {
	      throw null !== ag && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
	    } finally {
	      cg = !1;
	    }
	  }
	}

	var kg = ra.ReactCurrentBatchConfig;

	function lg(a, b) {
	  if (a && a.defaultProps) {
	    b = m$3({}, b);
	    a = a.defaultProps;

	    for (var c in a) void 0 === b[c] && (b[c] = a[c]);

	    return b;
	  }

	  return b;
	}

	var mg = Bf(null),
	    ng = null,
	    og = null,
	    pg = null;

	function qg() {
	  pg = og = ng = null;
	}

	function rg(a) {
	  var b = mg.current;
	  H$1(mg);
	  a.type._context._currentValue = b;
	}

	function sg(a, b) {
	  for (; null !== a;) {
	    var c = a.alternate;
	    if ((a.childLanes & b) === b) {
	      if (null === c || (c.childLanes & b) === b) break;else c.childLanes |= b;
	    } else a.childLanes |= b, null !== c && (c.childLanes |= b);
	    a = a.return;
	  }
	}

	function tg(a, b) {
	  ng = a;
	  pg = og = null;
	  a = a.dependencies;
	  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (ug = !0), a.firstContext = null);
	}

	function vg(a, b) {
	  if (pg !== a && !1 !== b && 0 !== b) {
	    if ("number" !== typeof b || 1073741823 === b) pg = a, b = 1073741823;
	    b = {
	      context: a,
	      observedBits: b,
	      next: null
	    };

	    if (null === og) {
	      if (null === ng) throw Error(y$1(308));
	      og = b;
	      ng.dependencies = {
	        lanes: 0,
	        firstContext: b,
	        responders: null
	      };
	    } else og = og.next = b;
	  }

	  return a._currentValue;
	}

	var wg = !1;

	function xg(a) {
	  a.updateQueue = {
	    baseState: a.memoizedState,
	    firstBaseUpdate: null,
	    lastBaseUpdate: null,
	    shared: {
	      pending: null
	    },
	    effects: null
	  };
	}

	function yg(a, b) {
	  a = a.updateQueue;
	  b.updateQueue === a && (b.updateQueue = {
	    baseState: a.baseState,
	    firstBaseUpdate: a.firstBaseUpdate,
	    lastBaseUpdate: a.lastBaseUpdate,
	    shared: a.shared,
	    effects: a.effects
	  });
	}

	function zg(a, b) {
	  return {
	    eventTime: a,
	    lane: b,
	    tag: 0,
	    payload: null,
	    callback: null,
	    next: null
	  };
	}

	function Ag(a, b) {
	  a = a.updateQueue;

	  if (null !== a) {
	    a = a.shared;
	    var c = a.pending;
	    null === c ? b.next = b : (b.next = c.next, c.next = b);
	    a.pending = b;
	  }
	}

	function Bg(a, b) {
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

	function Cg(a, b, c, d) {
	  var e = a.updateQueue;
	  wg = !1;
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
	    var n = a.alternate;

	    if (null !== n) {
	      n = n.updateQueue;
	      var A = n.lastBaseUpdate;
	      A !== g && (null === A ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
	    }
	  }

	  if (null !== f) {
	    A = e.baseState;
	    g = 0;
	    n = l = k = null;

	    do {
	      h = f.lane;
	      var p = f.eventTime;

	      if ((d & h) === h) {
	        null !== n && (n = n.next = {
	          eventTime: p,
	          lane: 0,
	          tag: f.tag,
	          payload: f.payload,
	          callback: f.callback,
	          next: null
	        });

	        a: {
	          var C = a,
	              x = f;
	          h = b;
	          p = c;

	          switch (x.tag) {
	            case 1:
	              C = x.payload;

	              if ("function" === typeof C) {
	                A = C.call(p, A, h);
	                break a;
	              }

	              A = C;
	              break a;

	            case 3:
	              C.flags = C.flags & -4097 | 64;

	            case 0:
	              C = x.payload;
	              h = "function" === typeof C ? C.call(p, A, h) : C;
	              if (null === h || void 0 === h) break a;
	              A = m$3({}, A, h);
	              break a;

	            case 2:
	              wg = !0;
	          }
	        }

	        null !== f.callback && (a.flags |= 32, h = e.effects, null === h ? e.effects = [f] : h.push(f));
	      } else p = {
	        eventTime: p,
	        lane: h,
	        tag: f.tag,
	        payload: f.payload,
	        callback: f.callback,
	        next: null
	      }, null === n ? (l = n = p, k = A) : n = n.next = p, g |= h;

	      f = f.next;
	      if (null === f) if (h = e.shared.pending, null === h) break;else f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
	    } while (1);

	    null === n && (k = A);
	    e.baseState = k;
	    e.firstBaseUpdate = l;
	    e.lastBaseUpdate = n;
	    Dg |= g;
	    a.lanes = g;
	    a.memoizedState = A;
	  }
	}

	function Eg(a, b, c) {
	  a = b.effects;
	  b.effects = null;
	  if (null !== a) for (b = 0; b < a.length; b++) {
	    var d = a[b],
	        e = d.callback;

	    if (null !== e) {
	      d.callback = null;
	      d = c;
	      if ("function" !== typeof e) throw Error(y$1(191, e));
	      e.call(d);
	    }
	  }
	}

	var Fg = new aa.Component().refs;

	function Gg(a, b, c, d) {
	  b = a.memoizedState;
	  c = c(d, b);
	  c = null === c || void 0 === c ? b : m$3({}, b, c);
	  a.memoizedState = c;
	  0 === a.lanes && (a.updateQueue.baseState = c);
	}

	var Kg = {
	  isMounted: function (a) {
	    return (a = a._reactInternals) ? Zb(a) === a : !1;
	  },
	  enqueueSetState: function (a, b, c) {
	    a = a._reactInternals;
	    var d = Hg(),
	        e = Ig(a),
	        f = zg(d, e);
	    f.payload = b;
	    void 0 !== c && null !== c && (f.callback = c);
	    Ag(a, f);
	    Jg(a, e, d);
	  },
	  enqueueReplaceState: function (a, b, c) {
	    a = a._reactInternals;
	    var d = Hg(),
	        e = Ig(a),
	        f = zg(d, e);
	    f.tag = 1;
	    f.payload = b;
	    void 0 !== c && null !== c && (f.callback = c);
	    Ag(a, f);
	    Jg(a, e, d);
	  },
	  enqueueForceUpdate: function (a, b) {
	    a = a._reactInternals;
	    var c = Hg(),
	        d = Ig(a),
	        e = zg(c, d);
	    e.tag = 2;
	    void 0 !== b && null !== b && (e.callback = b);
	    Ag(a, e);
	    Jg(a, d, c);
	  }
	};

	function Lg(a, b, c, d, e, f, g) {
	  a = a.stateNode;
	  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je$1(c, d) || !Je$1(e, f) : !0;
	}

	function Mg(a, b, c) {
	  var d = !1,
	      e = Cf;
	  var f = b.contextType;
	  "object" === typeof f && null !== f ? f = vg(f) : (e = Ff(b) ? Df : M$1.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Ef(a, e) : Cf);
	  b = new b(c, f);
	  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
	  b.updater = Kg;
	  a.stateNode = b;
	  b._reactInternals = a;
	  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
	  return b;
	}

	function Ng(a, b, c, d) {
	  a = b.state;
	  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
	  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
	  b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
	}

	function Og(a, b, c, d) {
	  var e = a.stateNode;
	  e.props = c;
	  e.state = a.memoizedState;
	  e.refs = Fg;
	  xg(a);
	  var f = b.contextType;
	  "object" === typeof f && null !== f ? e.context = vg(f) : (f = Ff(b) ? Df : M$1.current, e.context = Ef(a, f));
	  Cg(a, c, e, d);
	  e.state = a.memoizedState;
	  f = b.getDerivedStateFromProps;
	  "function" === typeof f && (Gg(a, b, f, c), e.state = a.memoizedState);
	  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
	  "function" === typeof e.componentDidMount && (a.flags |= 4);
	}

	var Pg = Array.isArray;

	function Qg(a, b, c) {
	  a = c.ref;

	  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
	    if (c._owner) {
	      c = c._owner;

	      if (c) {
	        if (1 !== c.tag) throw Error(y$1(309));
	        var d = c.stateNode;
	      }

	      if (!d) throw Error(y$1(147, a));
	      var e = "" + a;
	      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

	      b = function (a) {
	        var b = d.refs;
	        b === Fg && (b = d.refs = {});
	        null === a ? delete b[e] : b[e] = a;
	      };

	      b._stringRef = e;
	      return b;
	    }

	    if ("string" !== typeof a) throw Error(y$1(284));
	    if (!c._owner) throw Error(y$1(290, a));
	  }

	  return a;
	}

	function Rg(a, b) {
	  if ("textarea" !== a.type) throw Error(y$1(31, "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
	}

	function Sg(a) {
	  function b(b, c) {
	    if (a) {
	      var d = b.lastEffect;
	      null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
	      c.nextEffect = null;
	      c.flags = 8;
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
	    a = Tg(a, b);
	    a.index = 0;
	    a.sibling = null;
	    return a;
	  }

	  function f(b, c, d) {
	    b.index = d;
	    if (!a) return c;
	    d = b.alternate;
	    if (null !== d) return d = d.index, d < c ? (b.flags = 2, c) : d;
	    b.flags = 2;
	    return c;
	  }

	  function g(b) {
	    a && null === b.alternate && (b.flags = 2);
	    return b;
	  }

	  function h(a, b, c, d) {
	    if (null === b || 6 !== b.tag) return b = Ug(c, a.mode, d), b.return = a, b;
	    b = e(b, c);
	    b.return = a;
	    return b;
	  }

	  function k(a, b, c, d) {
	    if (null !== b && b.elementType === c.type) return d = e(b, c.props), d.ref = Qg(a, b, c), d.return = a, d;
	    d = Vg(c.type, c.key, c.props, null, a.mode, d);
	    d.ref = Qg(a, b, c);
	    d.return = a;
	    return d;
	  }

	  function l(a, b, c, d) {
	    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Wg(c, a.mode, d), b.return = a, b;
	    b = e(b, c.children || []);
	    b.return = a;
	    return b;
	  }

	  function n(a, b, c, d, f) {
	    if (null === b || 7 !== b.tag) return b = Xg(c, a.mode, d, f), b.return = a, b;
	    b = e(b, c);
	    b.return = a;
	    return b;
	  }

	  function A(a, b, c) {
	    if ("string" === typeof b || "number" === typeof b) return b = Ug("" + b, a.mode, c), b.return = a, b;

	    if ("object" === typeof b && null !== b) {
	      switch (b.$$typeof) {
	        case sa:
	          return c = Vg(b.type, b.key, b.props, null, a.mode, c), c.ref = Qg(a, null, b), c.return = a, c;

	        case ta:
	          return b = Wg(b, a.mode, c), b.return = a, b;
	      }

	      if (Pg(b) || La(b)) return b = Xg(b, a.mode, c, null), b.return = a, b;
	      Rg(a, b);
	    }

	    return null;
	  }

	  function p(a, b, c, d) {
	    var e = null !== b ? b.key : null;
	    if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);

	    if ("object" === typeof c && null !== c) {
	      switch (c.$$typeof) {
	        case sa:
	          return c.key === e ? c.type === ua ? n(a, b, c.props.children, d, e) : k(a, b, c, d) : null;

	        case ta:
	          return c.key === e ? l(a, b, c, d) : null;
	      }

	      if (Pg(c) || La(c)) return null !== e ? null : n(a, b, c, d, null);
	      Rg(a, c);
	    }

	    return null;
	  }

	  function C(a, b, c, d, e) {
	    if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);

	    if ("object" === typeof d && null !== d) {
	      switch (d.$$typeof) {
	        case sa:
	          return a = a.get(null === d.key ? c : d.key) || null, d.type === ua ? n(b, a, d.props.children, e, d.key) : k(b, a, d, e);

	        case ta:
	          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
	      }

	      if (Pg(d) || La(d)) return a = a.get(c) || null, n(b, a, d, e, null);
	      Rg(b, d);
	    }

	    return null;
	  }

	  function x(e, g, h, k) {
	    for (var l = null, t = null, u = g, z = g = 0, q = null; null !== u && z < h.length; z++) {
	      u.index > z ? (q = u, u = null) : q = u.sibling;
	      var n = p(e, u, h[z], k);

	      if (null === n) {
	        null === u && (u = q);
	        break;
	      }

	      a && u && null === n.alternate && b(e, u);
	      g = f(n, g, z);
	      null === t ? l = n : t.sibling = n;
	      t = n;
	      u = q;
	    }

	    if (z === h.length) return c(e, u), l;

	    if (null === u) {
	      for (; z < h.length; z++) u = A(e, h[z], k), null !== u && (g = f(u, g, z), null === t ? l = u : t.sibling = u, t = u);

	      return l;
	    }

	    for (u = d(e, u); z < h.length; z++) q = C(u, e, z, h[z], k), null !== q && (a && null !== q.alternate && u.delete(null === q.key ? z : q.key), g = f(q, g, z), null === t ? l = q : t.sibling = q, t = q);

	    a && u.forEach(function (a) {
	      return b(e, a);
	    });
	    return l;
	  }

	  function w(e, g, h, k) {
	    var l = La(h);
	    if ("function" !== typeof l) throw Error(y$1(150));
	    h = l.call(h);
	    if (null == h) throw Error(y$1(151));

	    for (var t = l = null, u = g, z = g = 0, q = null, n = h.next(); null !== u && !n.done; z++, n = h.next()) {
	      u.index > z ? (q = u, u = null) : q = u.sibling;
	      var w = p(e, u, n.value, k);

	      if (null === w) {
	        null === u && (u = q);
	        break;
	      }

	      a && u && null === w.alternate && b(e, u);
	      g = f(w, g, z);
	      null === t ? l = w : t.sibling = w;
	      t = w;
	      u = q;
	    }

	    if (n.done) return c(e, u), l;

	    if (null === u) {
	      for (; !n.done; z++, n = h.next()) n = A(e, n.value, k), null !== n && (g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n);

	      return l;
	    }

	    for (u = d(e, u); !n.done; z++, n = h.next()) n = C(u, e, z, n.value, k), null !== n && (a && null !== n.alternate && u.delete(null === n.key ? z : n.key), g = f(n, g, z), null === t ? l = n : t.sibling = n, t = n);

	    a && u.forEach(function (a) {
	      return b(e, a);
	    });
	    return l;
	  }

	  return function (a, d, f, h) {
	    var k = "object" === typeof f && null !== f && f.type === ua && null === f.key;
	    k && (f = f.props.children);
	    var l = "object" === typeof f && null !== f;
	    if (l) switch (f.$$typeof) {
	      case sa:
	        a: {
	          l = f.key;

	          for (k = d; null !== k;) {
	            if (k.key === l) {
	              switch (k.tag) {
	                case 7:
	                  if (f.type === ua) {
	                    c(a, k.sibling);
	                    d = e(k, f.props.children);
	                    d.return = a;
	                    a = d;
	                    break a;
	                  }

	                  break;

	                default:
	                  if (k.elementType === f.type) {
	                    c(a, k.sibling);
	                    d = e(k, f.props);
	                    d.ref = Qg(a, k, f);
	                    d.return = a;
	                    a = d;
	                    break a;
	                  }

	              }

	              c(a, k);
	              break;
	            } else b(a, k);

	            k = k.sibling;
	          }

	          f.type === ua ? (d = Xg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Vg(f.type, f.key, f.props, null, a.mode, h), h.ref = Qg(a, d, f), h.return = a, a = h);
	        }

	        return g(a);

	      case ta:
	        a: {
	          for (k = f.key; null !== d;) {
	            if (d.key === k) {
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

	          d = Wg(f, a.mode, h);
	          d.return = a;
	          a = d;
	        }

	        return g(a);
	    }
	    if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Ug(f, a.mode, h), d.return = a, a = d), g(a);
	    if (Pg(f)) return x(a, d, f, h);
	    if (La(f)) return w(a, d, f, h);
	    l && Rg(a, f);
	    if ("undefined" === typeof f && !k) switch (a.tag) {
	      case 1:
	      case 22:
	      case 0:
	      case 11:
	      case 15:
	        throw Error(y$1(152, Ra(a.type) || "Component"));
	    }
	    return c(a, d);
	  };
	}

	var Yg = Sg(!0),
	    Zg = Sg(!1),
	    $g = {},
	    ah = Bf($g),
	    bh = Bf($g),
	    ch = Bf($g);

	function dh(a) {
	  if (a === $g) throw Error(y$1(174));
	  return a;
	}

	function eh(a, b) {
	  I$1(ch, b);
	  I$1(bh, a);
	  I$1(ah, $g);
	  a = b.nodeType;

	  switch (a) {
	    case 9:
	    case 11:
	      b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
	      break;

	    default:
	      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
	  }

	  H$1(ah);
	  I$1(ah, b);
	}

	function fh() {
	  H$1(ah);
	  H$1(bh);
	  H$1(ch);
	}

	function gh(a) {
	  dh(ch.current);
	  var b = dh(ah.current);
	  var c = mb(b, a.type);
	  b !== c && (I$1(bh, a), I$1(ah, c));
	}

	function hh(a) {
	  bh.current === a && (H$1(ah), H$1(bh));
	}

	var P$1 = Bf(0);

	function ih(a) {
	  for (var b = a; null !== b;) {
	    if (13 === b.tag) {
	      var c = b.memoizedState;
	      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
	    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
	      if (0 !== (b.flags & 64)) return b;
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

	var jh = null,
	    kh = null,
	    lh = !1;

	function mh(a, b) {
	  var c = nh(5, null, null, 0);
	  c.elementType = "DELETED";
	  c.type = "DELETED";
	  c.stateNode = b;
	  c.return = a;
	  c.flags = 8;
	  null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
	}

	function oh(a, b) {
	  switch (a.tag) {
	    case 5:
	      var c = a.type;
	      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
	      return null !== b ? (a.stateNode = b, !0) : !1;

	    case 6:
	      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;

	    case 13:
	      return !1;

	    default:
	      return !1;
	  }
	}

	function ph(a) {
	  if (lh) {
	    var b = kh;

	    if (b) {
	      var c = b;

	      if (!oh(a, b)) {
	        b = rf(c.nextSibling);

	        if (!b || !oh(a, b)) {
	          a.flags = a.flags & -1025 | 2;
	          lh = !1;
	          jh = a;
	          return;
	        }

	        mh(jh, c);
	      }

	      jh = a;
	      kh = rf(b.firstChild);
	    } else a.flags = a.flags & -1025 | 2, lh = !1, jh = a;
	  }
	}

	function qh(a) {
	  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;

	  jh = a;
	}

	function rh(a) {
	  if (a !== jh) return !1;
	  if (!lh) return qh(a), lh = !0, !1;
	  var b = a.type;
	  if (5 !== a.tag || "head" !== b && "body" !== b && !nf(b, a.memoizedProps)) for (b = kh; b;) mh(a, b), b = rf(b.nextSibling);
	  qh(a);

	  if (13 === a.tag) {
	    a = a.memoizedState;
	    a = null !== a ? a.dehydrated : null;
	    if (!a) throw Error(y$1(317));

	    a: {
	      a = a.nextSibling;

	      for (b = 0; a;) {
	        if (8 === a.nodeType) {
	          var c = a.data;

	          if ("/$" === c) {
	            if (0 === b) {
	              kh = rf(a.nextSibling);
	              break a;
	            }

	            b--;
	          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
	        }

	        a = a.nextSibling;
	      }

	      kh = null;
	    }
	  } else kh = jh ? rf(a.stateNode.nextSibling) : null;

	  return !0;
	}

	function sh() {
	  kh = jh = null;
	  lh = !1;
	}

	var th = [];

	function uh() {
	  for (var a = 0; a < th.length; a++) th[a]._workInProgressVersionPrimary = null;

	  th.length = 0;
	}

	var vh = ra.ReactCurrentDispatcher,
	    wh = ra.ReactCurrentBatchConfig,
	    xh = 0,
	    R = null,
	    S$1 = null,
	    T$1 = null,
	    yh = !1,
	    zh = !1;

	function Ah() {
	  throw Error(y$1(321));
	}

	function Bh(a, b) {
	  if (null === b) return !1;

	  for (var c = 0; c < b.length && c < a.length; c++) if (!He$1(a[c], b[c])) return !1;

	  return !0;
	}

	function Ch(a, b, c, d, e, f) {
	  xh = f;
	  R = b;
	  b.memoizedState = null;
	  b.updateQueue = null;
	  b.lanes = 0;
	  vh.current = null === a || null === a.memoizedState ? Dh : Eh;
	  a = c(d, e);

	  if (zh) {
	    f = 0;

	    do {
	      zh = !1;
	      if (!(25 > f)) throw Error(y$1(301));
	      f += 1;
	      T$1 = S$1 = null;
	      b.updateQueue = null;
	      vh.current = Fh;
	      a = c(d, e);
	    } while (zh);
	  }

	  vh.current = Gh;
	  b = null !== S$1 && null !== S$1.next;
	  xh = 0;
	  T$1 = S$1 = R = null;
	  yh = !1;
	  if (b) throw Error(y$1(300));
	  return a;
	}

	function Hh() {
	  var a = {
	    memoizedState: null,
	    baseState: null,
	    baseQueue: null,
	    queue: null,
	    next: null
	  };
	  null === T$1 ? R.memoizedState = T$1 = a : T$1 = T$1.next = a;
	  return T$1;
	}

	function Ih() {
	  if (null === S$1) {
	    var a = R.alternate;
	    a = null !== a ? a.memoizedState : null;
	  } else a = S$1.next;

	  var b = null === T$1 ? R.memoizedState : T$1.next;
	  if (null !== b) T$1 = b, S$1 = a;else {
	    if (null === a) throw Error(y$1(310));
	    S$1 = a;
	    a = {
	      memoizedState: S$1.memoizedState,
	      baseState: S$1.baseState,
	      baseQueue: S$1.baseQueue,
	      queue: S$1.queue,
	      next: null
	    };
	    null === T$1 ? R.memoizedState = T$1 = a : T$1 = T$1.next = a;
	  }
	  return T$1;
	}

	function Jh(a, b) {
	  return "function" === typeof b ? b(a) : b;
	}

	function Kh(a) {
	  var b = Ih(),
	      c = b.queue;
	  if (null === c) throw Error(y$1(311));
	  c.lastRenderedReducer = a;
	  var d = S$1,
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
	    e = e.next;
	    d = d.baseState;
	    var h = g = f = null,
	        k = e;

	    do {
	      var l = k.lane;
	      if ((xh & l) === l) null !== h && (h = h.next = {
	        lane: 0,
	        action: k.action,
	        eagerReducer: k.eagerReducer,
	        eagerState: k.eagerState,
	        next: null
	      }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);else {
	        var n = {
	          lane: l,
	          action: k.action,
	          eagerReducer: k.eagerReducer,
	          eagerState: k.eagerState,
	          next: null
	        };
	        null === h ? (g = h = n, f = d) : h = h.next = n;
	        R.lanes |= l;
	        Dg |= l;
	      }
	      k = k.next;
	    } while (null !== k && k !== e);

	    null === h ? f = d : h.next = g;
	    He$1(d, b.memoizedState) || (ug = !0);
	    b.memoizedState = d;
	    b.baseState = f;
	    b.baseQueue = h;
	    c.lastRenderedState = d;
	  }

	  return [b.memoizedState, c.dispatch];
	}

	function Lh(a) {
	  var b = Ih(),
	      c = b.queue;
	  if (null === c) throw Error(y$1(311));
	  c.lastRenderedReducer = a;
	  var d = c.dispatch,
	      e = c.pending,
	      f = b.memoizedState;

	  if (null !== e) {
	    c.pending = null;
	    var g = e = e.next;

	    do f = a(f, g.action), g = g.next; while (g !== e);

	    He$1(f, b.memoizedState) || (ug = !0);
	    b.memoizedState = f;
	    null === b.baseQueue && (b.baseState = f);
	    c.lastRenderedState = f;
	  }

	  return [f, d];
	}

	function Mh(a, b, c) {
	  var d = b._getVersion;
	  d = d(b._source);
	  var e = b._workInProgressVersionPrimary;
	  if (null !== e) a = e === d;else if (a = a.mutableReadLanes, a = (xh & a) === a) b._workInProgressVersionPrimary = d, th.push(b);
	  if (a) return c(b._source);
	  th.push(b);
	  throw Error(y$1(350));
	}

	function Nh(a, b, c, d) {
	  var e = U$1;
	  if (null === e) throw Error(y$1(349));
	  var f = b._getVersion,
	      g = f(b._source),
	      h = vh.current,
	      k = h.useState(function () {
	    return Mh(e, b, c);
	  }),
	      l = k[1],
	      n = k[0];
	  k = T$1;
	  var A = a.memoizedState,
	      p = A.refs,
	      C = p.getSnapshot,
	      x = A.source;
	  A = A.subscribe;
	  var w = R;
	  a.memoizedState = {
	    refs: p,
	    source: b,
	    subscribe: d
	  };
	  h.useEffect(function () {
	    p.getSnapshot = c;
	    p.setSnapshot = l;
	    var a = f(b._source);

	    if (!He$1(g, a)) {
	      a = c(b._source);
	      He$1(n, a) || (l(a), a = Ig(w), e.mutableReadLanes |= a & e.pendingLanes);
	      a = e.mutableReadLanes;
	      e.entangledLanes |= a;

	      for (var d = e.entanglements, h = a; 0 < h;) {
	        var k = 31 - Vc(h),
	            v = 1 << k;
	        d[k] |= a;
	        h &= ~v;
	      }
	    }
	  }, [c, b, d]);
	  h.useEffect(function () {
	    return d(b._source, function () {
	      var a = p.getSnapshot,
	          c = p.setSnapshot;

	      try {
	        c(a(b._source));
	        var d = Ig(w);
	        e.mutableReadLanes |= d & e.pendingLanes;
	      } catch (q) {
	        c(function () {
	          throw q;
	        });
	      }
	    });
	  }, [b, d]);
	  He$1(C, c) && He$1(x, b) && He$1(A, d) || (a = {
	    pending: null,
	    dispatch: null,
	    lastRenderedReducer: Jh,
	    lastRenderedState: n
	  }, a.dispatch = l = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n = Mh(e, b, c), k.memoizedState = k.baseState = n);
	  return n;
	}

	function Ph(a, b, c) {
	  var d = Ih();
	  return Nh(d, a, b, c);
	}

	function Qh(a) {
	  var b = Hh();
	  "function" === typeof a && (a = a());
	  b.memoizedState = b.baseState = a;
	  a = b.queue = {
	    pending: null,
	    dispatch: null,
	    lastRenderedReducer: Jh,
	    lastRenderedState: a
	  };
	  a = a.dispatch = Oh.bind(null, R, a);
	  return [b.memoizedState, a];
	}

	function Rh(a, b, c, d) {
	  a = {
	    tag: a,
	    create: b,
	    destroy: c,
	    deps: d,
	    next: null
	  };
	  b = R.updateQueue;
	  null === b ? (b = {
	    lastEffect: null
	  }, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
	  return a;
	}

	function Sh(a) {
	  var b = Hh();
	  a = {
	    current: a
	  };
	  return b.memoizedState = a;
	}

	function Th() {
	  return Ih().memoizedState;
	}

	function Uh(a, b, c, d) {
	  var e = Hh();
	  R.flags |= a;
	  e.memoizedState = Rh(1 | b, c, void 0, void 0 === d ? null : d);
	}

	function Vh(a, b, c, d) {
	  var e = Ih();
	  d = void 0 === d ? null : d;
	  var f = void 0;

	  if (null !== S$1) {
	    var g = S$1.memoizedState;
	    f = g.destroy;

	    if (null !== d && Bh(d, g.deps)) {
	      Rh(b, c, f, d);
	      return;
	    }
	  }

	  R.flags |= a;
	  e.memoizedState = Rh(1 | b, c, f, d);
	}

	function Wh(a, b) {
	  return Uh(516, 4, a, b);
	}

	function Xh(a, b) {
	  return Vh(516, 4, a, b);
	}

	function Yh(a, b) {
	  return Vh(4, 2, a, b);
	}

	function Zh(a, b) {
	  if ("function" === typeof b) return a = a(), b(a), function () {
	    b(null);
	  };
	  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
	    b.current = null;
	  };
	}

	function $h(a, b, c) {
	  c = null !== c && void 0 !== c ? c.concat([a]) : null;
	  return Vh(4, 2, Zh.bind(null, b, a), c);
	}

	function ai() {}

	function bi(a, b) {
	  var c = Ih();
	  b = void 0 === b ? null : b;
	  var d = c.memoizedState;
	  if (null !== d && null !== b && Bh(b, d[1])) return d[0];
	  c.memoizedState = [a, b];
	  return a;
	}

	function ci(a, b) {
	  var c = Ih();
	  b = void 0 === b ? null : b;
	  var d = c.memoizedState;
	  if (null !== d && null !== b && Bh(b, d[1])) return d[0];
	  a = a();
	  c.memoizedState = [a, b];
	  return a;
	}

	function di(a, b) {
	  var c = eg();
	  gg(98 > c ? 98 : c, function () {
	    a(!0);
	  });
	  gg(97 < c ? 97 : c, function () {
	    var c = wh.transition;
	    wh.transition = 1;

	    try {
	      a(!1), b();
	    } finally {
	      wh.transition = c;
	    }
	  });
	}

	function Oh(a, b, c) {
	  var d = Hg(),
	      e = Ig(a),
	      f = {
	    lane: e,
	    action: c,
	    eagerReducer: null,
	    eagerState: null,
	    next: null
	  },
	      g = b.pending;
	  null === g ? f.next = f : (f.next = g.next, g.next = f);
	  b.pending = f;
	  g = a.alternate;
	  if (a === R || null !== g && g === R) zh = yh = !0;else {
	    if (0 === a.lanes && (null === g || 0 === g.lanes) && (g = b.lastRenderedReducer, null !== g)) try {
	      var h = b.lastRenderedState,
	          k = g(h, c);
	      f.eagerReducer = g;
	      f.eagerState = k;
	      if (He$1(k, h)) return;
	    } catch (l) {} finally {}
	    Jg(a, e, d);
	  }
	}

	var Gh = {
	  readContext: vg,
	  useCallback: Ah,
	  useContext: Ah,
	  useEffect: Ah,
	  useImperativeHandle: Ah,
	  useLayoutEffect: Ah,
	  useMemo: Ah,
	  useReducer: Ah,
	  useRef: Ah,
	  useState: Ah,
	  useDebugValue: Ah,
	  useDeferredValue: Ah,
	  useTransition: Ah,
	  useMutableSource: Ah,
	  useOpaqueIdentifier: Ah,
	  unstable_isNewReconciler: !1
	},
	    Dh = {
	  readContext: vg,
	  useCallback: function (a, b) {
	    Hh().memoizedState = [a, void 0 === b ? null : b];
	    return a;
	  },
	  useContext: vg,
	  useEffect: Wh,
	  useImperativeHandle: function (a, b, c) {
	    c = null !== c && void 0 !== c ? c.concat([a]) : null;
	    return Uh(4, 2, Zh.bind(null, b, a), c);
	  },
	  useLayoutEffect: function (a, b) {
	    return Uh(4, 2, a, b);
	  },
	  useMemo: function (a, b) {
	    var c = Hh();
	    b = void 0 === b ? null : b;
	    a = a();
	    c.memoizedState = [a, b];
	    return a;
	  },
	  useReducer: function (a, b, c) {
	    var d = Hh();
	    b = void 0 !== c ? c(b) : b;
	    d.memoizedState = d.baseState = b;
	    a = d.queue = {
	      pending: null,
	      dispatch: null,
	      lastRenderedReducer: a,
	      lastRenderedState: b
	    };
	    a = a.dispatch = Oh.bind(null, R, a);
	    return [d.memoizedState, a];
	  },
	  useRef: Sh,
	  useState: Qh,
	  useDebugValue: ai,
	  useDeferredValue: function (a) {
	    var b = Qh(a),
	        c = b[0],
	        d = b[1];
	    Wh(function () {
	      var b = wh.transition;
	      wh.transition = 1;

	      try {
	        d(a);
	      } finally {
	        wh.transition = b;
	      }
	    }, [a]);
	    return c;
	  },
	  useTransition: function () {
	    var a = Qh(!1),
	        b = a[0];
	    a = di.bind(null, a[1]);
	    Sh(a);
	    return [a, b];
	  },
	  useMutableSource: function (a, b, c) {
	    var d = Hh();
	    d.memoizedState = {
	      refs: {
	        getSnapshot: b,
	        setSnapshot: null
	      },
	      source: a,
	      subscribe: c
	    };
	    return Nh(d, a, b, c);
	  },
	  useOpaqueIdentifier: function () {
	    if (lh) {
	      var a = !1,
	          b = uf(function () {
	        a || (a = !0, c("r:" + (tf++).toString(36)));
	        throw Error(y$1(355));
	      }),
	          c = Qh(b)[1];
	      0 === (R.mode & 2) && (R.flags |= 516, Rh(5, function () {
	        c("r:" + (tf++).toString(36));
	      }, void 0, null));
	      return b;
	    }

	    b = "r:" + (tf++).toString(36);
	    Qh(b);
	    return b;
	  },
	  unstable_isNewReconciler: !1
	},
	    Eh = {
	  readContext: vg,
	  useCallback: bi,
	  useContext: vg,
	  useEffect: Xh,
	  useImperativeHandle: $h,
	  useLayoutEffect: Yh,
	  useMemo: ci,
	  useReducer: Kh,
	  useRef: Th,
	  useState: function () {
	    return Kh(Jh);
	  },
	  useDebugValue: ai,
	  useDeferredValue: function (a) {
	    var b = Kh(Jh),
	        c = b[0],
	        d = b[1];
	    Xh(function () {
	      var b = wh.transition;
	      wh.transition = 1;

	      try {
	        d(a);
	      } finally {
	        wh.transition = b;
	      }
	    }, [a]);
	    return c;
	  },
	  useTransition: function () {
	    var a = Kh(Jh)[0];
	    return [Th().current, a];
	  },
	  useMutableSource: Ph,
	  useOpaqueIdentifier: function () {
	    return Kh(Jh)[0];
	  },
	  unstable_isNewReconciler: !1
	},
	    Fh = {
	  readContext: vg,
	  useCallback: bi,
	  useContext: vg,
	  useEffect: Xh,
	  useImperativeHandle: $h,
	  useLayoutEffect: Yh,
	  useMemo: ci,
	  useReducer: Lh,
	  useRef: Th,
	  useState: function () {
	    return Lh(Jh);
	  },
	  useDebugValue: ai,
	  useDeferredValue: function (a) {
	    var b = Lh(Jh),
	        c = b[0],
	        d = b[1];
	    Xh(function () {
	      var b = wh.transition;
	      wh.transition = 1;

	      try {
	        d(a);
	      } finally {
	        wh.transition = b;
	      }
	    }, [a]);
	    return c;
	  },
	  useTransition: function () {
	    var a = Lh(Jh)[0];
	    return [Th().current, a];
	  },
	  useMutableSource: Ph,
	  useOpaqueIdentifier: function () {
	    return Lh(Jh)[0];
	  },
	  unstable_isNewReconciler: !1
	},
	    ei = ra.ReactCurrentOwner,
	    ug = !1;

	function fi(a, b, c, d) {
	  b.child = null === a ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
	}

	function gi(a, b, c, d, e) {
	  c = c.render;
	  var f = b.ref;
	  tg(b, e);
	  d = Ch(a, b, c, d, f, e);
	  if (null !== a && !ug) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
	  b.flags |= 1;
	  fi(a, b, d, e);
	  return b.child;
	}

	function ii(a, b, c, d, e, f) {
	  if (null === a) {
	    var g = c.type;
	    if ("function" === typeof g && !ji(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
	    a = Vg(c.type, null, d, b, b.mode, f);
	    a.ref = b.ref;
	    a.return = b;
	    return b.child = a;
	  }

	  g = a.child;
	  if (0 === (e & f) && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : Je$1, c(e, d) && a.ref === b.ref)) return hi(a, b, f);
	  b.flags |= 1;
	  a = Tg(g, d);
	  a.ref = b.ref;
	  a.return = b;
	  return b.child = a;
	}

	function ki(a, b, c, d, e, f) {
	  if (null !== a && Je$1(a.memoizedProps, d) && a.ref === b.ref) if (ug = !1, 0 !== (f & e)) 0 !== (a.flags & 16384) && (ug = !0);else return b.lanes = a.lanes, hi(a, b, f);
	  return li(a, b, c, d, f);
	}

	function mi(a, b, c) {
	  var d = b.pendingProps,
	      e = d.children,
	      f = null !== a ? a.memoizedState : null;
	  if ("hidden" === d.mode || "unstable-defer-without-hiding" === d.mode) {
	    if (0 === (b.mode & 4)) b.memoizedState = {
	      baseLanes: 0
	    }, ni(b, c);else if (0 !== (c & 1073741824)) b.memoizedState = {
	      baseLanes: 0
	    }, ni(b, null !== f ? f.baseLanes : c);else return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
	      baseLanes: a
	    }, ni(b, a), null;
	  } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
	  fi(a, b, e, c);
	  return b.child;
	}

	function oi(a, b) {
	  var c = b.ref;
	  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 128;
	}

	function li(a, b, c, d, e) {
	  var f = Ff(c) ? Df : M$1.current;
	  f = Ef(b, f);
	  tg(b, e);
	  c = Ch(a, b, c, d, f, e);
	  if (null !== a && !ug) return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
	  b.flags |= 1;
	  fi(a, b, c, e);
	  return b.child;
	}

	function pi(a, b, c, d, e) {
	  if (Ff(c)) {
	    var f = !0;
	    Jf(b);
	  } else f = !1;

	  tg(b, e);
	  if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = !0;else if (null === a) {
	    var g = b.stateNode,
	        h = b.memoizedProps;
	    g.props = h;
	    var k = g.context,
	        l = c.contextType;
	    "object" === typeof l && null !== l ? l = vg(l) : (l = Ff(c) ? Df : M$1.current, l = Ef(b, l));
	    var n = c.getDerivedStateFromProps,
	        A = "function" === typeof n || "function" === typeof g.getSnapshotBeforeUpdate;
	    A || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Ng(b, g, d, l);
	    wg = !1;
	    var p = b.memoizedState;
	    g.state = p;
	    Cg(b, d, g, e);
	    k = b.memoizedState;
	    h !== d || p !== k || N$1.current || wg ? ("function" === typeof n && (Gg(b, c, n, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p, k, l)) ? (A || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4)) : ("function" === typeof g.componentDidMount && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4), d = !1);
	  } else {
	    g = b.stateNode;
	    yg(a, b);
	    h = b.memoizedProps;
	    l = b.type === b.elementType ? h : lg(b.type, h);
	    g.props = l;
	    A = b.pendingProps;
	    p = g.context;
	    k = c.contextType;
	    "object" === typeof k && null !== k ? k = vg(k) : (k = Ff(c) ? Df : M$1.current, k = Ef(b, k));
	    var C = c.getDerivedStateFromProps;
	    (n = "function" === typeof C || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== A || p !== k) && Ng(b, g, d, k);
	    wg = !1;
	    p = b.memoizedState;
	    g.state = p;
	    Cg(b, d, g, e);
	    var x = b.memoizedState;
	    h !== A || p !== x || N$1.current || wg ? ("function" === typeof C && (Gg(b, c, C, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p, x, k)) ? (n || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, x, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, x, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = !1);
	  }
	  return qi(a, b, c, d, f, e);
	}

	function qi(a, b, c, d, e, f) {
	  oi(a, b);
	  var g = 0 !== (b.flags & 64);
	  if (!d && !g) return e && Kf(b, c, !1), hi(a, b, f);
	  d = b.stateNode;
	  ei.current = b;
	  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
	  b.flags |= 1;
	  null !== a && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
	  b.memoizedState = d.state;
	  e && Kf(b, c, !0);
	  return b.child;
	}

	function ri(a) {
	  var b = a.stateNode;
	  b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, !1);
	  eh(a, b.containerInfo);
	}

	var si = {
	  dehydrated: null,
	  retryLane: 0
	};

	function ti(a, b, c) {
	  var d = b.pendingProps,
	      e = P$1.current,
	      f = !1,
	      g;
	  (g = 0 !== (b.flags & 64)) || (g = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
	  g ? (f = !0, b.flags &= -65) : null !== a && null === a.memoizedState || void 0 === d.fallback || !0 === d.unstable_avoidThisFallback || (e |= 1);
	  I$1(P$1, e & 1);

	  if (null === a) {
	    void 0 !== d.fallback && ph(b);
	    a = d.children;
	    e = d.fallback;
	    if (f) return a = ui(b, a, e, c), b.child.memoizedState = {
	      baseLanes: c
	    }, b.memoizedState = si, a;
	    if ("number" === typeof d.unstable_expectedLoadTime) return a = ui(b, a, e, c), b.child.memoizedState = {
	      baseLanes: c
	    }, b.memoizedState = si, b.lanes = 33554432, a;
	    c = vi({
	      mode: "visible",
	      children: a
	    }, b.mode, c, null);
	    c.return = b;
	    return b.child = c;
	  }

	  if (null !== a.memoizedState) {
	    if (f) return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
	      baseLanes: c
	    } : {
	      baseLanes: e.baseLanes | c
	    }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
	    c = xi(a, b, d.children, c);
	    b.memoizedState = null;
	    return c;
	  }

	  if (f) return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? {
	    baseLanes: c
	  } : {
	    baseLanes: e.baseLanes | c
	  }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
	  c = xi(a, b, d.children, c);
	  b.memoizedState = null;
	  return c;
	}

	function ui(a, b, c, d) {
	  var e = a.mode,
	      f = a.child;
	  b = {
	    mode: "hidden",
	    children: b
	  };
	  0 === (e & 2) && null !== f ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
	  c = Xg(c, e, d, null);
	  f.return = a;
	  c.return = a;
	  f.sibling = c;
	  a.child = f;
	  return c;
	}

	function xi(a, b, c, d) {
	  var e = a.child;
	  a = e.sibling;
	  c = Tg(e, {
	    mode: "visible",
	    children: c
	  });
	  0 === (b.mode & 2) && (c.lanes = d);
	  c.return = b;
	  c.sibling = null;
	  null !== a && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
	  return b.child = c;
	}

	function wi(a, b, c, d, e) {
	  var f = b.mode,
	      g = a.child;
	  a = g.sibling;
	  var h = {
	    mode: "hidden",
	    children: c
	  };
	  0 === (f & 2) && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, null !== g ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
	  null !== a ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
	  d.return = b;
	  c.return = b;
	  c.sibling = d;
	  b.child = c;
	  return d;
	}

	function yi(a, b) {
	  a.lanes |= b;
	  var c = a.alternate;
	  null !== c && (c.lanes |= b);
	  sg(a.return, b);
	}

	function zi(a, b, c, d, e, f) {
	  var g = a.memoizedState;
	  null === g ? a.memoizedState = {
	    isBackwards: b,
	    rendering: null,
	    renderingStartTime: 0,
	    last: d,
	    tail: c,
	    tailMode: e,
	    lastEffect: f
	  } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
	}

	function Ai(a, b, c) {
	  var d = b.pendingProps,
	      e = d.revealOrder,
	      f = d.tail;
	  fi(a, b, d.children, c);
	  d = P$1.current;
	  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 64;else {
	    if (null !== a && 0 !== (a.flags & 64)) a: for (a = b.child; null !== a;) {
	      if (13 === a.tag) null !== a.memoizedState && yi(a, c);else if (19 === a.tag) yi(a, c);else if (null !== a.child) {
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
	  I$1(P$1, d);
	  if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
	    case "forwards":
	      c = b.child;

	      for (e = null; null !== c;) a = c.alternate, null !== a && null === ih(a) && (e = c), c = c.sibling;

	      c = e;
	      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
	      zi(b, !1, e, c, f, b.lastEffect);
	      break;

	    case "backwards":
	      c = null;
	      e = b.child;

	      for (b.child = null; null !== e;) {
	        a = e.alternate;

	        if (null !== a && null === ih(a)) {
	          b.child = e;
	          break;
	        }

	        a = e.sibling;
	        e.sibling = c;
	        c = e;
	        e = a;
	      }

	      zi(b, !0, c, null, f, b.lastEffect);
	      break;

	    case "together":
	      zi(b, !1, null, null, void 0, b.lastEffect);
	      break;

	    default:
	      b.memoizedState = null;
	  }
	  return b.child;
	}

	function hi(a, b, c) {
	  null !== a && (b.dependencies = a.dependencies);
	  Dg |= b.lanes;

	  if (0 !== (c & b.childLanes)) {
	    if (null !== a && b.child !== a.child) throw Error(y$1(153));

	    if (null !== b.child) {
	      a = b.child;
	      c = Tg(a, a.pendingProps);
	      b.child = c;

	      for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;

	      c.sibling = null;
	    }

	    return b.child;
	  }

	  return null;
	}

	var Bi, Ci, Di, Ei;

	Bi = function (a, b) {
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

	Ci = function () {};

	Di = function (a, b, c, d) {
	  var e = a.memoizedProps;

	  if (e !== d) {
	    a = b.stateNode;
	    dh(ah.current);
	    var f = null;

	    switch (c) {
	      case "input":
	        e = Ya(a, e);
	        d = Ya(a, d);
	        f = [];
	        break;

	      case "option":
	        e = eb(a, e);
	        d = eb(a, d);
	        f = [];
	        break;

	      case "select":
	        e = m$3({}, e, {
	          value: void 0
	        });
	        d = m$3({}, d, {
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
	        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = jf);
	    }

	    vb(c, d);
	    var g;
	    c = null;

	    for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
	      var h = e[l];

	      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
	    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));

	    for (l in d) {
	      var k = d[l];
	      h = null != e ? e[l] : void 0;
	      if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
	        if (h) {
	          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");

	          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
	        } else c || (f || (f = []), f.push(l, c)), c = k;
	      } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ca.hasOwnProperty(l) ? (null != k && "onScroll" === l && G$1("scroll", a), f || h === k || (f = [])) : "object" === typeof k && null !== k && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l, k));
	    }

	    c && (f = f || []).push("style", c);
	    var l = f;
	    if (b.updateQueue = l) b.flags |= 4;
	  }
	};

	Ei = function (a, b, c, d) {
	  c !== d && (b.flags |= 4);
	};

	function Fi(a, b) {
	  if (!lh) switch (a.tailMode) {
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

	function Gi(a, b, c) {
	  var d = b.pendingProps;

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
	      return null;

	    case 1:
	      return Ff(b.type) && Gf(), null;

	    case 3:
	      fh();
	      H$1(N$1);
	      H$1(M$1);
	      uh();
	      d = b.stateNode;
	      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
	      if (null === a || null === a.child) rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
	      Ci(b);
	      return null;

	    case 5:
	      hh(b);
	      var e = dh(ch.current);
	      c = b.type;
	      if (null !== a && null != b.stateNode) Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);else {
	        if (!d) {
	          if (null === b.stateNode) throw Error(y$1(166));
	          return null;
	        }

	        a = dh(ah.current);

	        if (rh(b)) {
	          d = b.stateNode;
	          c = b.type;
	          var f = b.memoizedProps;
	          d[wf] = b;
	          d[xf] = f;

	          switch (c) {
	            case "dialog":
	              G$1("cancel", d);
	              G$1("close", d);
	              break;

	            case "iframe":
	            case "object":
	            case "embed":
	              G$1("load", d);
	              break;

	            case "video":
	            case "audio":
	              for (a = 0; a < Xe$1.length; a++) G$1(Xe$1[a], d);

	              break;

	            case "source":
	              G$1("error", d);
	              break;

	            case "img":
	            case "image":
	            case "link":
	              G$1("error", d);
	              G$1("load", d);
	              break;

	            case "details":
	              G$1("toggle", d);
	              break;

	            case "input":
	              Za(d, f);
	              G$1("invalid", d);
	              break;

	            case "select":
	              d._wrapperState = {
	                wasMultiple: !!f.multiple
	              };
	              G$1("invalid", d);
	              break;

	            case "textarea":
	              hb(d, f), G$1("invalid", d);
	          }

	          vb(c, f);
	          a = null;

	          for (var g in f) f.hasOwnProperty(g) && (e = f[g], "children" === g ? "string" === typeof e ? d.textContent !== e && (a = ["children", e]) : "number" === typeof e && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g) && null != e && "onScroll" === g && G$1("scroll", d));

	          switch (c) {
	            case "input":
	              Va(d);
	              cb(d, f, !0);
	              break;

	            case "textarea":
	              Va(d);
	              jb(d);
	              break;

	            case "select":
	            case "option":
	              break;

	            default:
	              "function" === typeof f.onClick && (d.onclick = jf);
	          }

	          d = a;
	          b.updateQueue = d;
	          null !== d && (b.flags |= 4);
	        } else {
	          g = 9 === e.nodeType ? e : e.ownerDocument;
	          a === kb.html && (a = lb(c));
	          a === kb.html ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
	            is: d.is
	          }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
	          a[wf] = b;
	          a[xf] = d;
	          Bi(a, b, !1, !1);
	          b.stateNode = a;
	          g = wb(c, d);

	          switch (c) {
	            case "dialog":
	              G$1("cancel", a);
	              G$1("close", a);
	              e = d;
	              break;

	            case "iframe":
	            case "object":
	            case "embed":
	              G$1("load", a);
	              e = d;
	              break;

	            case "video":
	            case "audio":
	              for (e = 0; e < Xe$1.length; e++) G$1(Xe$1[e], a);

	              e = d;
	              break;

	            case "source":
	              G$1("error", a);
	              e = d;
	              break;

	            case "img":
	            case "image":
	            case "link":
	              G$1("error", a);
	              G$1("load", a);
	              e = d;
	              break;

	            case "details":
	              G$1("toggle", a);
	              e = d;
	              break;

	            case "input":
	              Za(a, d);
	              e = Ya(a, d);
	              G$1("invalid", a);
	              break;

	            case "option":
	              e = eb(a, d);
	              break;

	            case "select":
	              a._wrapperState = {
	                wasMultiple: !!d.multiple
	              };
	              e = m$3({}, d, {
	                value: void 0
	              });
	              G$1("invalid", a);
	              break;

	            case "textarea":
	              hb(a, d);
	              e = gb(a, d);
	              G$1("invalid", a);
	              break;

	            default:
	              e = d;
	          }

	          vb(c, e);
	          var h = e;

	          for (f in h) if (h.hasOwnProperty(f)) {
	            var k = h[f];
	            "style" === f ? tb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && ob(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && pb(a, k) : "number" === typeof k && pb(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ca.hasOwnProperty(f) ? null != k && "onScroll" === f && G$1("scroll", a) : null != k && qa(a, f, k, g));
	          }

	          switch (c) {
	            case "input":
	              Va(a);
	              cb(a, d, !1);
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
	              "function" === typeof e.onClick && (a.onclick = jf);
	          }

	          mf(c, d) && (b.flags |= 4);
	        }

	        null !== b.ref && (b.flags |= 128);
	      }
	      return null;

	    case 6:
	      if (a && null != b.stateNode) Ei(a, b, a.memoizedProps, d);else {
	        if ("string" !== typeof d && null === b.stateNode) throw Error(y$1(166));
	        c = dh(ch.current);
	        dh(ah.current);
	        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
	      }
	      return null;

	    case 13:
	      H$1(P$1);
	      d = b.memoizedState;
	      if (0 !== (b.flags & 64)) return b.lanes = c, b;
	      d = null !== d;
	      c = !1;
	      null === a ? void 0 !== b.memoizedProps.fallback && rh(b) : c = null !== a.memoizedState;
	      if (d && !c && 0 !== (b.mode & 2)) if (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (P$1.current & 1)) 0 === V$1 && (V$1 = 3);else {
	        if (0 === V$1 || 3 === V$1) V$1 = 4;
	        null === U$1 || 0 === (Dg & 134217727) && 0 === (Hi & 134217727) || Ii(U$1, W$1);
	      }
	      if (d || c) b.flags |= 4;
	      return null;

	    case 4:
	      return fh(), Ci(b), null === a && cf(b.stateNode.containerInfo), null;

	    case 10:
	      return rg(b), null;

	    case 17:
	      return Ff(b.type) && Gf(), null;

	    case 19:
	      H$1(P$1);
	      d = b.memoizedState;
	      if (null === d) return null;
	      f = 0 !== (b.flags & 64);
	      g = d.rendering;
	      if (null === g) {
	        if (f) Fi(d, !1);else {
	          if (0 !== V$1 || null !== a && 0 !== (a.flags & 64)) for (a = b.child; null !== a;) {
	            g = ih(a);

	            if (null !== g) {
	              b.flags |= 64;
	              Fi(d, !1);
	              f = g.updateQueue;
	              null !== f && (b.updateQueue = f, b.flags |= 4);
	              null === d.lastEffect && (b.firstEffect = null);
	              b.lastEffect = d.lastEffect;
	              d = c;

	              for (c = b.child; null !== c;) f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
	                lanes: a.lanes,
	                firstContext: a.firstContext
	              }), c = c.sibling;

	              I$1(P$1, P$1.current & 1 | 2);
	              return b.child;
	            }

	            a = a.sibling;
	          }
	          null !== d.tail && O$1() > Ji && (b.flags |= 64, f = !0, Fi(d, !1), b.lanes = 33554432);
	        }
	      } else {
	        if (!f) if (a = ih(g), null !== a) {
	          if (b.flags |= 64, f = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Fi(d, !0), null === d.tail && "hidden" === d.tailMode && !g.alternate && !lh) return b = b.lastEffect = d.lastEffect, null !== b && (b.nextEffect = null), null;
	        } else 2 * O$1() - d.renderingStartTime > Ji && 1073741824 !== c && (b.flags |= 64, f = !0, Fi(d, !1), b.lanes = 33554432);
	        d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, null !== c ? c.sibling = g : b.child = g, d.last = g);
	      }
	      return null !== d.tail ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O$1(), c.sibling = null, b = P$1.current, I$1(P$1, f ? b & 1 | 2 : b & 1), c) : null;

	    case 23:
	    case 24:
	      return Ki(), null !== a && null !== a.memoizedState !== (null !== b.memoizedState) && "unstable-defer-without-hiding" !== d.mode && (b.flags |= 4), null;
	  }

	  throw Error(y$1(156, b.tag));
	}

	function Li(a) {
	  switch (a.tag) {
	    case 1:
	      Ff(a.type) && Gf();
	      var b = a.flags;
	      return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

	    case 3:
	      fh();
	      H$1(N$1);
	      H$1(M$1);
	      uh();
	      b = a.flags;
	      if (0 !== (b & 64)) throw Error(y$1(285));
	      a.flags = b & -4097 | 64;
	      return a;

	    case 5:
	      return hh(a), null;

	    case 13:
	      return H$1(P$1), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;

	    case 19:
	      return H$1(P$1), null;

	    case 4:
	      return fh(), null;

	    case 10:
	      return rg(a), null;

	    case 23:
	    case 24:
	      return Ki(), null;

	    default:
	      return null;
	  }
	}

	function Mi(a, b) {
	  try {
	    var c = "",
	        d = b;

	    do c += Qa(d), d = d.return; while (d);

	    var e = c;
	  } catch (f) {
	    e = "\nError generating stack: " + f.message + "\n" + f.stack;
	  }

	  return {
	    value: a,
	    source: b,
	    stack: e
	  };
	}

	function Ni(a, b) {
	  try {
	    console.error(b.value);
	  } catch (c) {
	    setTimeout(function () {
	      throw c;
	    });
	  }
	}

	var Oi = "function" === typeof WeakMap ? WeakMap : Map;

	function Pi(a, b, c) {
	  c = zg(-1, c);
	  c.tag = 3;
	  c.payload = {
	    element: null
	  };
	  var d = b.value;

	  c.callback = function () {
	    Qi || (Qi = !0, Ri = d);
	    Ni(a, b);
	  };

	  return c;
	}

	function Si(a, b, c) {
	  c = zg(-1, c);
	  c.tag = 3;
	  var d = a.type.getDerivedStateFromError;

	  if ("function" === typeof d) {
	    var e = b.value;

	    c.payload = function () {
	      Ni(a, b);
	      return d(e);
	    };
	  }

	  var f = a.stateNode;
	  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
	    "function" !== typeof d && (null === Ti ? Ti = new Set([this]) : Ti.add(this), Ni(a, b));
	    var c = b.stack;
	    this.componentDidCatch(b.value, {
	      componentStack: null !== c ? c : ""
	    });
	  });
	  return c;
	}

	var Ui = "function" === typeof WeakSet ? WeakSet : Set;

	function Vi(a) {
	  var b = a.ref;
	  if (null !== b) if ("function" === typeof b) try {
	    b(null);
	  } catch (c) {
	    Wi(a, c);
	  } else b.current = null;
	}

	function Xi(a, b) {
	  switch (b.tag) {
	    case 0:
	    case 11:
	    case 15:
	    case 22:
	      return;

	    case 1:
	      if (b.flags & 256 && null !== a) {
	        var c = a.memoizedProps,
	            d = a.memoizedState;
	        a = b.stateNode;
	        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
	        a.__reactInternalSnapshotBeforeUpdate = b;
	      }

	      return;

	    case 3:
	      b.flags & 256 && qf(b.stateNode.containerInfo);
	      return;

	    case 5:
	    case 6:
	    case 4:
	    case 17:
	      return;
	  }

	  throw Error(y$1(163));
	}

	function Yi(a, b, c) {
	  switch (c.tag) {
	    case 0:
	    case 11:
	    case 15:
	    case 22:
	      b = c.updateQueue;
	      b = null !== b ? b.lastEffect : null;

	      if (null !== b) {
	        a = b = b.next;

	        do {
	          if (3 === (a.tag & 3)) {
	            var d = a.create;
	            a.destroy = d();
	          }

	          a = a.next;
	        } while (a !== b);
	      }

	      b = c.updateQueue;
	      b = null !== b ? b.lastEffect : null;

	      if (null !== b) {
	        a = b = b.next;

	        do {
	          var e = a;
	          d = e.next;
	          e = e.tag;
	          0 !== (e & 4) && 0 !== (e & 1) && (Zi(c, a), $i(c, a));
	          a = d;
	        } while (a !== b);
	      }

	      return;

	    case 1:
	      a = c.stateNode;
	      c.flags & 4 && (null === b ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
	      b = c.updateQueue;
	      null !== b && Eg(c, b, a);
	      return;

	    case 3:
	      b = c.updateQueue;

	      if (null !== b) {
	        a = null;
	        if (null !== c.child) switch (c.child.tag) {
	          case 5:
	            a = c.child.stateNode;
	            break;

	          case 1:
	            a = c.child.stateNode;
	        }
	        Eg(c, b, a);
	      }

	      return;

	    case 5:
	      a = c.stateNode;
	      null === b && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
	      return;

	    case 6:
	      return;

	    case 4:
	      return;

	    case 12:
	      return;

	    case 13:
	      null === c.memoizedState && (c = c.alternate, null !== c && (c = c.memoizedState, null !== c && (c = c.dehydrated, null !== c && Cc(c))));
	      return;

	    case 19:
	    case 17:
	    case 20:
	    case 21:
	    case 23:
	    case 24:
	      return;
	  }

	  throw Error(y$1(163));
	}

	function aj(a, b) {
	  for (var c = a;;) {
	    if (5 === c.tag) {
	      var d = c.stateNode;
	      if (b) d = d.style, "function" === typeof d.setProperty ? d.setProperty("display", "none", "important") : d.display = "none";else {
	        d = c.stateNode;
	        var e = c.memoizedProps.style;
	        e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null;
	        d.style.display = sb("display", e);
	      }
	    } else if (6 === c.tag) c.stateNode.nodeValue = b ? "" : c.memoizedProps;else if ((23 !== c.tag && 24 !== c.tag || null === c.memoizedState || c === a) && null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }

	    if (c === a) break;

	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === a) return;
	      c = c.return;
	    }

	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	}

	function bj(a, b) {
	  if (Mf && "function" === typeof Mf.onCommitFiberUnmount) try {
	    Mf.onCommitFiberUnmount(Lf, b);
	  } catch (f) {}

	  switch (b.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	    case 22:
	      a = b.updateQueue;

	      if (null !== a && (a = a.lastEffect, null !== a)) {
	        var c = a = a.next;

	        do {
	          var d = c,
	              e = d.destroy;
	          d = d.tag;
	          if (void 0 !== e) if (0 !== (d & 4)) Zi(b, c);else {
	            d = b;

	            try {
	              e();
	            } catch (f) {
	              Wi(d, f);
	            }
	          }
	          c = c.next;
	        } while (c !== a);
	      }

	      break;

	    case 1:
	      Vi(b);
	      a = b.stateNode;
	      if ("function" === typeof a.componentWillUnmount) try {
	        a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
	      } catch (f) {
	        Wi(b, f);
	      }
	      break;

	    case 5:
	      Vi(b);
	      break;

	    case 4:
	      cj(a, b);
	  }
	}

	function dj(a) {
	  a.alternate = null;
	  a.child = null;
	  a.dependencies = null;
	  a.firstEffect = null;
	  a.lastEffect = null;
	  a.memoizedProps = null;
	  a.memoizedState = null;
	  a.pendingProps = null;
	  a.return = null;
	  a.updateQueue = null;
	}

	function ej(a) {
	  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}

	function fj(a) {
	  a: {
	    for (var b = a.return; null !== b;) {
	      if (ej(b)) break a;
	      b = b.return;
	    }

	    throw Error(y$1(160));
	  }

	  var c = b;
	  b = c.stateNode;

	  switch (c.tag) {
	    case 5:
	      var d = !1;
	      break;

	    case 3:
	      b = b.containerInfo;
	      d = !0;
	      break;

	    case 4:
	      b = b.containerInfo;
	      d = !0;
	      break;

	    default:
	      throw Error(y$1(161));
	  }

	  c.flags & 16 && (pb(b, ""), c.flags &= -17);

	  a: b: for (c = a;;) {
	    for (; null === c.sibling;) {
	      if (null === c.return || ej(c.return)) {
	        c = null;
	        break a;
	      }

	      c = c.return;
	    }

	    c.sibling.return = c.return;

	    for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
	      if (c.flags & 2) continue b;
	      if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
	    }

	    if (!(c.flags & 2)) {
	      c = c.stateNode;
	      break a;
	    }
	  }

	  d ? gj(a, c, b) : hj(a, c, b);
	}

	function gj(a, b, c) {
	  var d = a.tag,
	      e = 5 === d || 6 === d;
	  if (e) a = e ? a.stateNode : a.stateNode.instance, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = jf));else if (4 !== d && (a = a.child, null !== a)) for (gj(a, b, c), a = a.sibling; null !== a;) gj(a, b, c), a = a.sibling;
	}

	function hj(a, b, c) {
	  var d = a.tag,
	      e = 5 === d || 6 === d;
	  if (e) a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (hj(a, b, c), a = a.sibling; null !== a;) hj(a, b, c), a = a.sibling;
	}

	function cj(a, b) {
	  for (var c = b, d = !1, e, f;;) {
	    if (!d) {
	      d = c.return;

	      a: for (;;) {
	        if (null === d) throw Error(y$1(160));
	        e = d.stateNode;

	        switch (d.tag) {
	          case 5:
	            f = !1;
	            break a;

	          case 3:
	            e = e.containerInfo;
	            f = !0;
	            break a;

	          case 4:
	            e = e.containerInfo;
	            f = !0;
	            break a;
	        }

	        d = d.return;
	      }

	      d = !0;
	    }

	    if (5 === c.tag || 6 === c.tag) {
	      a: for (var g = a, h = c, k = h;;) if (bj(g, k), null !== k.child && 4 !== k.tag) k.child.return = k, k = k.child;else {
	        if (k === h) break a;

	        for (; null === k.sibling;) {
	          if (null === k.return || k.return === h) break a;
	          k = k.return;
	        }

	        k.sibling.return = k.return;
	        k = k.sibling;
	      }

	      f ? (g = e, h = c.stateNode, 8 === g.nodeType ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
	    } else if (4 === c.tag) {
	      if (null !== c.child) {
	        e = c.stateNode.containerInfo;
	        f = !0;
	        c.child.return = c;
	        c = c.child;
	        continue;
	      }
	    } else if (bj(a, c), null !== c.child) {
	      c.child.return = c;
	      c = c.child;
	      continue;
	    }

	    if (c === b) break;

	    for (; null === c.sibling;) {
	      if (null === c.return || c.return === b) return;
	      c = c.return;
	      4 === c.tag && (d = !1);
	    }

	    c.sibling.return = c.return;
	    c = c.sibling;
	  }
	}

	function ij(a, b) {
	  switch (b.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	    case 22:
	      var c = b.updateQueue;
	      c = null !== c ? c.lastEffect : null;

	      if (null !== c) {
	        var d = c = c.next;

	        do 3 === (d.tag & 3) && (a = d.destroy, d.destroy = void 0, void 0 !== a && a()), d = d.next; while (d !== c);
	      }

	      return;

	    case 1:
	      return;

	    case 5:
	      c = b.stateNode;

	      if (null != c) {
	        d = b.memoizedProps;
	        var e = null !== a ? a.memoizedProps : d;
	        a = b.type;
	        var f = b.updateQueue;
	        b.updateQueue = null;

	        if (null !== f) {
	          c[xf] = d;
	          "input" === a && "radio" === d.type && null != d.name && $a(c, d);
	          wb(a, e);
	          b = wb(a, d);

	          for (e = 0; e < f.length; e += 2) {
	            var g = f[e],
	                h = f[e + 1];
	            "style" === g ? tb(c, h) : "dangerouslySetInnerHTML" === g ? ob(c, h) : "children" === g ? pb(c, h) : qa(c, g, h, b);
	          }

	          switch (a) {
	            case "input":
	              ab(c, d);
	              break;

	            case "textarea":
	              ib(c, d);
	              break;

	            case "select":
	              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, null != f ? fb(c, !!d.multiple, f, !1) : a !== !!d.multiple && (null != d.defaultValue ? fb(c, !!d.multiple, d.defaultValue, !0) : fb(c, !!d.multiple, d.multiple ? [] : "", !1));
	          }
	        }
	      }

	      return;

	    case 6:
	      if (null === b.stateNode) throw Error(y$1(162));
	      b.stateNode.nodeValue = b.memoizedProps;
	      return;

	    case 3:
	      c = b.stateNode;
	      c.hydrate && (c.hydrate = !1, Cc(c.containerInfo));
	      return;

	    case 12:
	      return;

	    case 13:
	      null !== b.memoizedState && (jj = O$1(), aj(b.child, !0));
	      kj(b);
	      return;

	    case 19:
	      kj(b);
	      return;

	    case 17:
	      return;

	    case 23:
	    case 24:
	      aj(b, null !== b.memoizedState);
	      return;
	  }

	  throw Error(y$1(163));
	}

	function kj(a) {
	  var b = a.updateQueue;

	  if (null !== b) {
	    a.updateQueue = null;
	    var c = a.stateNode;
	    null === c && (c = a.stateNode = new Ui());
	    b.forEach(function (b) {
	      var d = lj.bind(null, a, b);
	      c.has(b) || (c.add(b), b.then(d, d));
	    });
	  }
	}

	function mj(a, b) {
	  return null !== a && (a = a.memoizedState, null === a || null !== a.dehydrated) ? (b = b.memoizedState, null !== b && null === b.dehydrated) : !1;
	}

	var nj = Math.ceil,
	    oj = ra.ReactCurrentDispatcher,
	    pj = ra.ReactCurrentOwner,
	    X$1 = 0,
	    U$1 = null,
	    Y$1 = null,
	    W$1 = 0,
	    qj = 0,
	    rj = Bf(0),
	    V$1 = 0,
	    sj = null,
	    tj = 0,
	    Dg = 0,
	    Hi = 0,
	    uj = 0,
	    vj = null,
	    jj = 0,
	    Ji = Infinity;

	function wj() {
	  Ji = O$1() + 500;
	}

	var Z$1 = null,
	    Qi = !1,
	    Ri = null,
	    Ti = null,
	    xj = !1,
	    yj = null,
	    zj = 90,
	    Aj = [],
	    Bj = [],
	    Cj = null,
	    Dj = 0,
	    Ej = null,
	    Fj = -1,
	    Gj = 0,
	    Hj = 0,
	    Ij = null,
	    Jj = !1;

	function Hg() {
	  return 0 !== (X$1 & 48) ? O$1() : -1 !== Fj ? Fj : Fj = O$1();
	}

	function Ig(a) {
	  a = a.mode;
	  if (0 === (a & 2)) return 1;
	  if (0 === (a & 4)) return 99 === eg() ? 1 : 2;
	  0 === Gj && (Gj = tj);

	  if (0 !== kg.transition) {
	    0 !== Hj && (Hj = null !== vj ? vj.pendingLanes : 0);
	    a = Gj;
	    var b = 4186112 & ~Hj;
	    b &= -b;
	    0 === b && (a = 4186112 & ~a, b = a & -a, 0 === b && (b = 8192));
	    return b;
	  }

	  a = eg();
	  0 !== (X$1 & 4) && 98 === a ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
	  return a;
	}

	function Jg(a, b, c) {
	  if (50 < Dj) throw Dj = 0, Ej = null, Error(y$1(185));
	  a = Kj(a, b);
	  if (null === a) return null;
	  $c(a, b, c);
	  a === U$1 && (Hi |= b, 4 === V$1 && Ii(a, W$1));
	  var d = eg();
	  1 === b ? 0 !== (X$1 & 8) && 0 === (X$1 & 48) ? Lj(a) : (Mj(a, c), 0 === X$1 && (wj(), ig())) : (0 === (X$1 & 4) || 98 !== d && 99 !== d || (null === Cj ? Cj = new Set([a]) : Cj.add(a)), Mj(a, c));
	  vj = a;
	}

	function Kj(a, b) {
	  a.lanes |= b;
	  var c = a.alternate;
	  null !== c && (c.lanes |= b);
	  c = a;

	  for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;

	  return 3 === c.tag ? c.stateNode : null;
	}

	function Mj(a, b) {
	  for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g;) {
	    var h = 31 - Vc(g),
	        k = 1 << h,
	        l = f[h];

	    if (-1 === l) {
	      if (0 === (k & d) || 0 !== (k & e)) {
	        l = b;
	        Rc(k);
	        var n = F$1;
	        f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5E3 : -1;
	      }
	    } else l <= b && (a.expiredLanes |= k);

	    g &= ~k;
	  }

	  d = Uc(a, a === U$1 ? W$1 : 0);
	  b = F$1;
	  if (0 === d) null !== c && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);else {
	    if (null !== c) {
	      if (a.callbackPriority === b) return;
	      c !== Zf && Pf(c);
	    }

	    15 === b ? (c = Lj.bind(null, a), null === ag ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : 14 === b ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
	    a.callbackPriority = b;
	    a.callbackNode = c;
	  }
	}

	function Nj(a) {
	  Fj = -1;
	  Hj = Gj = 0;
	  if (0 !== (X$1 & 48)) throw Error(y$1(327));
	  var b = a.callbackNode;
	  if (Oj() && a.callbackNode !== b) return null;
	  var c = Uc(a, a === U$1 ? W$1 : 0);
	  if (0 === c) return null;
	  var d = c;
	  var e = X$1;
	  X$1 |= 16;
	  var f = Pj();
	  if (U$1 !== a || W$1 !== d) wj(), Qj(a, d);

	  do try {
	    Rj();
	    break;
	  } catch (h) {
	    Sj(a, h);
	  } while (1);

	  qg();
	  oj.current = f;
	  X$1 = e;
	  null !== Y$1 ? d = 0 : (U$1 = null, W$1 = 0, d = V$1);
	  if (0 !== (tj & Hi)) Qj(a, 0);else if (0 !== d) {
	    2 === d && (X$1 |= 64, a.hydrate && (a.hydrate = !1, qf(a.containerInfo)), c = Wc(a), 0 !== c && (d = Tj(a, c)));
	    if (1 === d) throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O$1()), b;
	    a.finishedWork = a.current.alternate;
	    a.finishedLanes = c;

	    switch (d) {
	      case 0:
	      case 1:
	        throw Error(y$1(345));

	      case 2:
	        Uj(a);
	        break;

	      case 3:
	        Ii(a, c);

	        if ((c & 62914560) === c && (d = jj + 500 - O$1(), 10 < d)) {
	          if (0 !== Uc(a, 0)) break;
	          e = a.suspendedLanes;

	          if ((e & c) !== c) {
	            Hg();
	            a.pingedLanes |= a.suspendedLanes & e;
	            break;
	          }

	          a.timeoutHandle = of(Uj.bind(null, a), d);
	          break;
	        }

	        Uj(a);
	        break;

	      case 4:
	        Ii(a, c);
	        if ((c & 4186112) === c) break;
	        d = a.eventTimes;

	        for (e = -1; 0 < c;) {
	          var g = 31 - Vc(c);
	          f = 1 << g;
	          g = d[g];
	          g > e && (e = g);
	          c &= ~f;
	        }

	        c = e;
	        c = O$1() - c;
	        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3E3 > c ? 3E3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;

	        if (10 < c) {
	          a.timeoutHandle = of(Uj.bind(null, a), c);
	          break;
	        }

	        Uj(a);
	        break;

	      case 5:
	        Uj(a);
	        break;

	      default:
	        throw Error(y$1(329));
	    }
	  }
	  Mj(a, O$1());
	  return a.callbackNode === b ? Nj.bind(null, a) : null;
	}

	function Ii(a, b) {
	  b &= ~uj;
	  b &= ~Hi;
	  a.suspendedLanes |= b;
	  a.pingedLanes &= ~b;

	  for (a = a.expirationTimes; 0 < b;) {
	    var c = 31 - Vc(b),
	        d = 1 << c;
	    a[c] = -1;
	    b &= ~d;
	  }
	}

	function Lj(a) {
	  if (0 !== (X$1 & 48)) throw Error(y$1(327));
	  Oj();

	  if (a === U$1 && 0 !== (a.expiredLanes & W$1)) {
	    var b = W$1;
	    var c = Tj(a, b);
	    0 !== (tj & Hi) && (b = Uc(a, b), c = Tj(a, b));
	  } else b = Uc(a, 0), c = Tj(a, b);

	  0 !== a.tag && 2 === c && (X$1 |= 64, a.hydrate && (a.hydrate = !1, qf(a.containerInfo)), b = Wc(a), 0 !== b && (c = Tj(a, b)));
	  if (1 === c) throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O$1()), c;
	  a.finishedWork = a.current.alternate;
	  a.finishedLanes = b;
	  Uj(a);
	  Mj(a, O$1());
	  return null;
	}

	function Vj() {
	  if (null !== Cj) {
	    var a = Cj;
	    Cj = null;
	    a.forEach(function (a) {
	      a.expiredLanes |= 24 & a.pendingLanes;
	      Mj(a, O$1());
	    });
	  }

	  ig();
	}

	function Wj(a, b) {
	  var c = X$1;
	  X$1 |= 1;

	  try {
	    return a(b);
	  } finally {
	    X$1 = c, 0 === X$1 && (wj(), ig());
	  }
	}

	function Xj(a, b) {
	  var c = X$1;
	  X$1 &= -2;
	  X$1 |= 8;

	  try {
	    return a(b);
	  } finally {
	    X$1 = c, 0 === X$1 && (wj(), ig());
	  }
	}

	function ni(a, b) {
	  I$1(rj, qj);
	  qj |= b;
	  tj |= b;
	}

	function Ki() {
	  qj = rj.current;
	  H$1(rj);
	}

	function Qj(a, b) {
	  a.finishedWork = null;
	  a.finishedLanes = 0;
	  var c = a.timeoutHandle;
	  -1 !== c && (a.timeoutHandle = -1, pf(c));
	  if (null !== Y$1) for (c = Y$1.return; null !== c;) {
	    var d = c;

	    switch (d.tag) {
	      case 1:
	        d = d.type.childContextTypes;
	        null !== d && void 0 !== d && Gf();
	        break;

	      case 3:
	        fh();
	        H$1(N$1);
	        H$1(M$1);
	        uh();
	        break;

	      case 5:
	        hh(d);
	        break;

	      case 4:
	        fh();
	        break;

	      case 13:
	        H$1(P$1);
	        break;

	      case 19:
	        H$1(P$1);
	        break;

	      case 10:
	        rg(d);
	        break;

	      case 23:
	      case 24:
	        Ki();
	    }

	    c = c.return;
	  }
	  U$1 = a;
	  Y$1 = Tg(a.current, null);
	  W$1 = qj = tj = b;
	  V$1 = 0;
	  sj = null;
	  uj = Hi = Dg = 0;
	}

	function Sj(a, b) {
	  do {
	    var c = Y$1;

	    try {
	      qg();
	      vh.current = Gh;

	      if (yh) {
	        for (var d = R.memoizedState; null !== d;) {
	          var e = d.queue;
	          null !== e && (e.pending = null);
	          d = d.next;
	        }

	        yh = !1;
	      }

	      xh = 0;
	      T$1 = S$1 = R = null;
	      zh = !1;
	      pj.current = null;

	      if (null === c || null === c.return) {
	        V$1 = 1;
	        sj = b;
	        Y$1 = null;
	        break;
	      }

	      a: {
	        var f = a,
	            g = c.return,
	            h = c,
	            k = b;
	        b = W$1;
	        h.flags |= 2048;
	        h.firstEffect = h.lastEffect = null;

	        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
	          var l = k;

	          if (0 === (h.mode & 2)) {
	            var n = h.alternate;
	            n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
	          }

	          var A = 0 !== (P$1.current & 1),
	              p = g;

	          do {
	            var C;

	            if (C = 13 === p.tag) {
	              var x = p.memoizedState;
	              if (null !== x) C = null !== x.dehydrated ? !0 : !1;else {
	                var w = p.memoizedProps;
	                C = void 0 === w.fallback ? !1 : !0 !== w.unstable_avoidThisFallback ? !0 : A ? !1 : !0;
	              }
	            }

	            if (C) {
	              var z = p.updateQueue;

	              if (null === z) {
	                var u = new Set();
	                u.add(l);
	                p.updateQueue = u;
	              } else z.add(l);

	              if (0 === (p.mode & 2)) {
	                p.flags |= 64;
	                h.flags |= 16384;
	                h.flags &= -2981;
	                if (1 === h.tag) if (null === h.alternate) h.tag = 17;else {
	                  var t = zg(-1, 1);
	                  t.tag = 2;
	                  Ag(h, t);
	                }
	                h.lanes |= 1;
	                break a;
	              }

	              k = void 0;
	              h = b;
	              var q = f.pingCache;
	              null === q ? (q = f.pingCache = new Oi(), k = new Set(), q.set(l, k)) : (k = q.get(l), void 0 === k && (k = new Set(), q.set(l, k)));

	              if (!k.has(h)) {
	                k.add(h);
	                var v = Yj.bind(null, f, l, h);
	                l.then(v, v);
	              }

	              p.flags |= 4096;
	              p.lanes = b;
	              break a;
	            }

	            p = p.return;
	          } while (null !== p);

	          k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
	        }

	        5 !== V$1 && (V$1 = 2);
	        k = Mi(k, h);
	        p = g;

	        do {
	          switch (p.tag) {
	            case 3:
	              f = k;
	              p.flags |= 4096;
	              b &= -b;
	              p.lanes |= b;
	              var J = Pi(p, f, b);
	              Bg(p, J);
	              break a;

	            case 1:
	              f = k;
	              var K = p.type,
	                  Q = p.stateNode;

	              if (0 === (p.flags & 64) && ("function" === typeof K.getDerivedStateFromError || null !== Q && "function" === typeof Q.componentDidCatch && (null === Ti || !Ti.has(Q)))) {
	                p.flags |= 4096;
	                b &= -b;
	                p.lanes |= b;
	                var L = Si(p, f, b);
	                Bg(p, L);
	                break a;
	              }

	          }

	          p = p.return;
	        } while (null !== p);
	      }

	      Zj(c);
	    } catch (va) {
	      b = va;
	      Y$1 === c && null !== c && (Y$1 = c = c.return);
	      continue;
	    }

	    break;
	  } while (1);
	}

	function Pj() {
	  var a = oj.current;
	  oj.current = Gh;
	  return null === a ? Gh : a;
	}

	function Tj(a, b) {
	  var c = X$1;
	  X$1 |= 16;
	  var d = Pj();
	  U$1 === a && W$1 === b || Qj(a, b);

	  do try {
	    ak();
	    break;
	  } catch (e) {
	    Sj(a, e);
	  } while (1);

	  qg();
	  X$1 = c;
	  oj.current = d;
	  if (null !== Y$1) throw Error(y$1(261));
	  U$1 = null;
	  W$1 = 0;
	  return V$1;
	}

	function ak() {
	  for (; null !== Y$1;) bk(Y$1);
	}

	function Rj() {
	  for (; null !== Y$1 && !Qf();) bk(Y$1);
	}

	function bk(a) {
	  var b = ck(a.alternate, a, qj);
	  a.memoizedProps = a.pendingProps;
	  null === b ? Zj(a) : Y$1 = b;
	  pj.current = null;
	}

	function Zj(a) {
	  var b = a;

	  do {
	    var c = b.alternate;
	    a = b.return;

	    if (0 === (b.flags & 2048)) {
	      c = Gi(c, b, qj);

	      if (null !== c) {
	        Y$1 = c;
	        return;
	      }

	      c = b;

	      if (24 !== c.tag && 23 !== c.tag || null === c.memoizedState || 0 !== (qj & 1073741824) || 0 === (c.mode & 4)) {
	        for (var d = 0, e = c.child; null !== e;) d |= e.lanes | e.childLanes, e = e.sibling;

	        c.childLanes = d;
	      }

	      null !== a && 0 === (a.flags & 2048) && (null === a.firstEffect && (a.firstEffect = b.firstEffect), null !== b.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (null !== a.lastEffect ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
	    } else {
	      c = Li(b);

	      if (null !== c) {
	        c.flags &= 2047;
	        Y$1 = c;
	        return;
	      }

	      null !== a && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
	    }

	    b = b.sibling;

	    if (null !== b) {
	      Y$1 = b;
	      return;
	    }

	    Y$1 = b = a;
	  } while (null !== b);

	  0 === V$1 && (V$1 = 5);
	}

	function Uj(a) {
	  var b = eg();
	  gg(99, dk.bind(null, a, b));
	  return null;
	}

	function dk(a, b) {
	  do Oj(); while (null !== yj);

	  if (0 !== (X$1 & 48)) throw Error(y$1(327));
	  var c = a.finishedWork;
	  if (null === c) return null;
	  a.finishedWork = null;
	  a.finishedLanes = 0;
	  if (c === a.current) throw Error(y$1(177));
	  a.callbackNode = null;
	  var d = c.lanes | c.childLanes,
	      e = d,
	      f = a.pendingLanes & ~e;
	  a.pendingLanes = e;
	  a.suspendedLanes = 0;
	  a.pingedLanes = 0;
	  a.expiredLanes &= e;
	  a.mutableReadLanes &= e;
	  a.entangledLanes &= e;
	  e = a.entanglements;

	  for (var g = a.eventTimes, h = a.expirationTimes; 0 < f;) {
	    var k = 31 - Vc(f),
	        l = 1 << k;
	    e[k] = 0;
	    g[k] = -1;
	    h[k] = -1;
	    f &= ~l;
	  }

	  null !== Cj && 0 === (d & 24) && Cj.has(a) && Cj.delete(a);
	  a === U$1 && (Y$1 = U$1 = null, W$1 = 0);
	  1 < c.flags ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;

	  if (null !== d) {
	    e = X$1;
	    X$1 |= 32;
	    pj.current = null;
	    kf = fd;
	    g = Ne$1();

	    if (Oe(g)) {
	      if ("selectionStart" in g) h = {
	        start: g.selectionStart,
	        end: g.selectionEnd
	      };else a: if (h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && 0 !== l.rangeCount) {
	        h = l.anchorNode;
	        f = l.anchorOffset;
	        k = l.focusNode;
	        l = l.focusOffset;

	        try {
	          h.nodeType, k.nodeType;
	        } catch (va) {
	          h = null;
	          break a;
	        }

	        var n = 0,
	            A = -1,
	            p = -1,
	            C = 0,
	            x = 0,
	            w = g,
	            z = null;

	        b: for (;;) {
	          for (var u;;) {
	            w !== h || 0 !== f && 3 !== w.nodeType || (A = n + f);
	            w !== k || 0 !== l && 3 !== w.nodeType || (p = n + l);
	            3 === w.nodeType && (n += w.nodeValue.length);
	            if (null === (u = w.firstChild)) break;
	            z = w;
	            w = u;
	          }

	          for (;;) {
	            if (w === g) break b;
	            z === h && ++C === f && (A = n);
	            z === k && ++x === l && (p = n);
	            if (null !== (u = w.nextSibling)) break;
	            w = z;
	            z = w.parentNode;
	          }

	          w = u;
	        }

	        h = -1 === A || -1 === p ? null : {
	          start: A,
	          end: p
	        };
	      } else h = null;
	      h = h || {
	        start: 0,
	        end: 0
	      };
	    } else h = null;

	    lf = {
	      focusedElem: g,
	      selectionRange: h
	    };
	    fd = !1;
	    Ij = null;
	    Jj = !1;
	    Z$1 = d;

	    do try {
	      ek();
	    } catch (va) {
	      if (null === Z$1) throw Error(y$1(330));
	      Wi(Z$1, va);
	      Z$1 = Z$1.nextEffect;
	    } while (null !== Z$1);

	    Ij = null;
	    Z$1 = d;

	    do try {
	      for (g = a; null !== Z$1;) {
	        var t = Z$1.flags;
	        t & 16 && pb(Z$1.stateNode, "");

	        if (t & 128) {
	          var q = Z$1.alternate;

	          if (null !== q) {
	            var v = q.ref;
	            null !== v && ("function" === typeof v ? v(null) : v.current = null);
	          }
	        }

	        switch (t & 1038) {
	          case 2:
	            fj(Z$1);
	            Z$1.flags &= -3;
	            break;

	          case 6:
	            fj(Z$1);
	            Z$1.flags &= -3;
	            ij(Z$1.alternate, Z$1);
	            break;

	          case 1024:
	            Z$1.flags &= -1025;
	            break;

	          case 1028:
	            Z$1.flags &= -1025;
	            ij(Z$1.alternate, Z$1);
	            break;

	          case 4:
	            ij(Z$1.alternate, Z$1);
	            break;

	          case 8:
	            h = Z$1;
	            cj(g, h);
	            var J = h.alternate;
	            dj(h);
	            null !== J && dj(J);
	        }

	        Z$1 = Z$1.nextEffect;
	      }
	    } catch (va) {
	      if (null === Z$1) throw Error(y$1(330));
	      Wi(Z$1, va);
	      Z$1 = Z$1.nextEffect;
	    } while (null !== Z$1);

	    v = lf;
	    q = Ne$1();
	    t = v.focusedElem;
	    g = v.selectionRange;

	    if (q !== t && t && t.ownerDocument && Me$1(t.ownerDocument.documentElement, t)) {
	      null !== g && Oe(t) && (q = g.start, v = g.end, void 0 === v && (v = q), "selectionStart" in t ? (t.selectionStart = q, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q = t.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g.start, h), g = void 0 === g.end ? J : Math.min(g.end, h), !v.extend && J > g && (h = g, g = J, J = h), h = Le$1(t, J), f = Le$1(t, g), h && f && (1 !== v.rangeCount || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
	      q = [];

	      for (v = t; v = v.parentNode;) 1 === v.nodeType && q.push({
	        element: v,
	        left: v.scrollLeft,
	        top: v.scrollTop
	      });

	      "function" === typeof t.focus && t.focus();

	      for (t = 0; t < q.length; t++) v = q[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
	    }

	    fd = !!kf;
	    lf = kf = null;
	    a.current = c;
	    Z$1 = d;

	    do try {
	      for (t = a; null !== Z$1;) {
	        var K = Z$1.flags;
	        K & 36 && Yi(t, Z$1.alternate, Z$1);

	        if (K & 128) {
	          q = void 0;
	          var Q = Z$1.ref;

	          if (null !== Q) {
	            var L = Z$1.stateNode;

	            switch (Z$1.tag) {
	              case 5:
	                q = L;
	                break;

	              default:
	                q = L;
	            }

	            "function" === typeof Q ? Q(q) : Q.current = q;
	          }
	        }

	        Z$1 = Z$1.nextEffect;
	      }
	    } catch (va) {
	      if (null === Z$1) throw Error(y$1(330));
	      Wi(Z$1, va);
	      Z$1 = Z$1.nextEffect;
	    } while (null !== Z$1);

	    Z$1 = null;
	    $f();
	    X$1 = e;
	  } else a.current = c;

	  if (xj) xj = !1, yj = a, zj = b;else for (Z$1 = d; null !== Z$1;) b = Z$1.nextEffect, Z$1.nextEffect = null, Z$1.flags & 8 && (K = Z$1, K.sibling = null, K.stateNode = null), Z$1 = b;
	  d = a.pendingLanes;
	  0 === d && (Ti = null);
	  1 === d ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
	  c = c.stateNode;
	  if (Mf && "function" === typeof Mf.onCommitFiberRoot) try {
	    Mf.onCommitFiberRoot(Lf, c, void 0, 64 === (c.current.flags & 64));
	  } catch (va) {}
	  Mj(a, O$1());
	  if (Qi) throw Qi = !1, a = Ri, Ri = null, a;
	  if (0 !== (X$1 & 8)) return null;
	  ig();
	  return null;
	}

	function ek() {
	  for (; null !== Z$1;) {
	    var a = Z$1.alternate;
	    Jj || null === Ij || (0 !== (Z$1.flags & 8) ? dc(Z$1, Ij) && (Jj = !0) : 13 === Z$1.tag && mj(a, Z$1) && dc(Z$1, Ij) && (Jj = !0));
	    var b = Z$1.flags;
	    0 !== (b & 256) && Xi(a, Z$1);
	    0 === (b & 512) || xj || (xj = !0, hg(97, function () {
	      Oj();
	      return null;
	    }));
	    Z$1 = Z$1.nextEffect;
	  }
	}

	function Oj() {
	  if (90 !== zj) {
	    var a = 97 < zj ? 97 : zj;
	    zj = 90;
	    return gg(a, fk);
	  }

	  return !1;
	}

	function $i(a, b) {
	  Aj.push(b, a);
	  xj || (xj = !0, hg(97, function () {
	    Oj();
	    return null;
	  }));
	}

	function Zi(a, b) {
	  Bj.push(b, a);
	  xj || (xj = !0, hg(97, function () {
	    Oj();
	    return null;
	  }));
	}

	function fk() {
	  if (null === yj) return !1;
	  var a = yj;
	  yj = null;
	  if (0 !== (X$1 & 48)) throw Error(y$1(331));
	  var b = X$1;
	  X$1 |= 32;
	  var c = Bj;
	  Bj = [];

	  for (var d = 0; d < c.length; d += 2) {
	    var e = c[d],
	        f = c[d + 1],
	        g = e.destroy;
	    e.destroy = void 0;
	    if ("function" === typeof g) try {
	      g();
	    } catch (k) {
	      if (null === f) throw Error(y$1(330));
	      Wi(f, k);
	    }
	  }

	  c = Aj;
	  Aj = [];

	  for (d = 0; d < c.length; d += 2) {
	    e = c[d];
	    f = c[d + 1];

	    try {
	      var h = e.create;
	      e.destroy = h();
	    } catch (k) {
	      if (null === f) throw Error(y$1(330));
	      Wi(f, k);
	    }
	  }

	  for (h = a.current.firstEffect; null !== h;) a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;

	  X$1 = b;
	  ig();
	  return !0;
	}

	function gk(a, b, c) {
	  b = Mi(c, b);
	  b = Pi(a, b, 1);
	  Ag(a, b);
	  b = Hg();
	  a = Kj(a, 1);
	  null !== a && ($c(a, 1, b), Mj(a, b));
	}

	function Wi(a, b) {
	  if (3 === a.tag) gk(a, a, b);else for (var c = a.return; null !== c;) {
	    if (3 === c.tag) {
	      gk(c, a, b);
	      break;
	    } else if (1 === c.tag) {
	      var d = c.stateNode;

	      if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) {
	        a = Mi(b, a);
	        var e = Si(c, a, 1);
	        Ag(c, e);
	        e = Hg();
	        c = Kj(c, 1);
	        if (null !== c) $c(c, 1, e), Mj(c, e);else if ("function" === typeof d.componentDidCatch && (null === Ti || !Ti.has(d))) try {
	          d.componentDidCatch(b, a);
	        } catch (f) {}
	        break;
	      }
	    }

	    c = c.return;
	  }
	}

	function Yj(a, b, c) {
	  var d = a.pingCache;
	  null !== d && d.delete(b);
	  b = Hg();
	  a.pingedLanes |= a.suspendedLanes & c;
	  U$1 === a && (W$1 & c) === c && (4 === V$1 || 3 === V$1 && (W$1 & 62914560) === W$1 && 500 > O$1() - jj ? Qj(a, 0) : uj |= c);
	  Mj(a, b);
	}

	function lj(a, b) {
	  var c = a.stateNode;
	  null !== c && c.delete(b);
	  b = 0;
	  0 === b && (b = a.mode, 0 === (b & 2) ? b = 1 : 0 === (b & 4) ? b = 99 === eg() ? 1 : 2 : (0 === Gj && (Gj = tj), b = Yc(62914560 & ~Gj), 0 === b && (b = 4194304)));
	  c = Hg();
	  a = Kj(a, b);
	  null !== a && ($c(a, b, c), Mj(a, c));
	}

	var ck;

	ck = function (a, b, c) {
	  var d = b.lanes;
	  if (null !== a) {
	    if (a.memoizedProps !== b.pendingProps || N$1.current) ug = !0;else if (0 !== (c & d)) ug = 0 !== (a.flags & 16384) ? !0 : !1;else {
	      ug = !1;

	      switch (b.tag) {
	        case 3:
	          ri(b);
	          sh();
	          break;

	        case 5:
	          gh(b);
	          break;

	        case 1:
	          Ff(b.type) && Jf(b);
	          break;

	        case 4:
	          eh(b, b.stateNode.containerInfo);
	          break;

	        case 10:
	          d = b.memoizedProps.value;
	          var e = b.type._context;
	          I$1(mg, e._currentValue);
	          e._currentValue = d;
	          break;

	        case 13:
	          if (null !== b.memoizedState) {
	            if (0 !== (c & b.child.childLanes)) return ti(a, b, c);
	            I$1(P$1, P$1.current & 1);
	            b = hi(a, b, c);
	            return null !== b ? b.sibling : null;
	          }

	          I$1(P$1, P$1.current & 1);
	          break;

	        case 19:
	          d = 0 !== (c & b.childLanes);

	          if (0 !== (a.flags & 64)) {
	            if (d) return Ai(a, b, c);
	            b.flags |= 64;
	          }

	          e = b.memoizedState;
	          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
	          I$1(P$1, P$1.current);
	          if (d) break;else return null;

	        case 23:
	        case 24:
	          return b.lanes = 0, mi(a, b, c);
	      }

	      return hi(a, b, c);
	    }
	  } else ug = !1;
	  b.lanes = 0;

	  switch (b.tag) {
	    case 2:
	      d = b.type;
	      null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	      a = b.pendingProps;
	      e = Ef(b, M$1.current);
	      tg(b, c);
	      e = Ch(null, b, d, a, e, c);
	      b.flags |= 1;

	      if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
	        b.tag = 1;
	        b.memoizedState = null;
	        b.updateQueue = null;

	        if (Ff(d)) {
	          var f = !0;
	          Jf(b);
	        } else f = !1;

	        b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
	        xg(b);
	        var g = d.getDerivedStateFromProps;
	        "function" === typeof g && Gg(b, d, g, a);
	        e.updater = Kg;
	        b.stateNode = e;
	        e._reactInternals = b;
	        Og(b, d, a, c);
	        b = qi(null, b, d, !0, f, c);
	      } else b.tag = 0, fi(null, b, e, c), b = b.child;

	      return b;

	    case 16:
	      e = b.elementType;

	      a: {
	        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	        a = b.pendingProps;
	        f = e._init;
	        e = f(e._payload);
	        b.type = e;
	        f = b.tag = hk(e);
	        a = lg(e, a);

	        switch (f) {
	          case 0:
	            b = li(null, b, e, a, c);
	            break a;

	          case 1:
	            b = pi(null, b, e, a, c);
	            break a;

	          case 11:
	            b = gi(null, b, e, a, c);
	            break a;

	          case 14:
	            b = ii(null, b, e, lg(e.type, a), d, c);
	            break a;
	        }

	        throw Error(y$1(306, e, ""));
	      }

	      return b;

	    case 0:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);

	    case 1:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);

	    case 3:
	      ri(b);
	      d = b.updateQueue;
	      if (null === a || null === d) throw Error(y$1(282));
	      d = b.pendingProps;
	      e = b.memoizedState;
	      e = null !== e ? e.element : null;
	      yg(a, b);
	      Cg(b, d, null, c);
	      d = b.memoizedState.element;
	      if (d === e) sh(), b = hi(a, b, c);else {
	        e = b.stateNode;
	        if (f = e.hydrate) kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = !0;

	        if (f) {
	          a = e.mutableSourceEagerHydrationData;
	          if (null != a) for (e = 0; e < a.length; e += 2) f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
	          c = Zg(b, null, d, c);

	          for (b.child = c; c;) c.flags = c.flags & -3 | 1024, c = c.sibling;
	        } else fi(a, b, d, c), sh();

	        b = b.child;
	      }
	      return b;

	    case 5:
	      return gh(b), null === a && ph(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : null !== f && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;

	    case 6:
	      return null === a && ph(b), null;

	    case 13:
	      return ti(a, b, c);

	    case 4:
	      return eh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;

	    case 11:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);

	    case 7:
	      return fi(a, b, b.pendingProps, c), b.child;

	    case 8:
	      return fi(a, b, b.pendingProps.children, c), b.child;

	    case 12:
	      return fi(a, b, b.pendingProps.children, c), b.child;

	    case 10:
	      a: {
	        d = b.type._context;
	        e = b.pendingProps;
	        g = b.memoizedProps;
	        f = e.value;
	        var h = b.type._context;
	        I$1(mg, h._currentValue);
	        h._currentValue = f;
	        if (null !== g) if (h = g.value, f = He$1(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0, 0 === f) {
	          if (g.children === e.children && !N$1.current) {
	            b = hi(a, b, c);
	            break a;
	          }
	        } else for (h = b.child, null !== h && (h.return = b); null !== h;) {
	          var k = h.dependencies;

	          if (null !== k) {
	            g = h.child;

	            for (var l = k.firstContext; null !== l;) {
	              if (l.context === d && 0 !== (l.observedBits & f)) {
	                1 === h.tag && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
	                h.lanes |= c;
	                l = h.alternate;
	                null !== l && (l.lanes |= c);
	                sg(h.return, c);
	                k.lanes |= c;
	                break;
	              }

	              l = l.next;
	            }
	          } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;

	          if (null !== g) g.return = h;else for (g = h; null !== g;) {
	            if (g === b) {
	              g = null;
	              break;
	            }

	            h = g.sibling;

	            if (null !== h) {
	              h.return = g.return;
	              g = h;
	              break;
	            }

	            g = g.return;
	          }
	          h = g;
	        }
	        fi(a, b, e.children, c);
	        b = b.child;
	      }

	      return b;

	    case 9:
	      return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;

	    case 14:
	      return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);

	    case 15:
	      return ki(a, b, b.type, b.pendingProps, d, c);

	    case 17:
	      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = !0, Jf(b)) : a = !1, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, !0, a, c);

	    case 19:
	      return Ai(a, b, c);

	    case 23:
	      return mi(a, b, c);

	    case 24:
	      return mi(a, b, c);
	  }

	  throw Error(y$1(156, b.tag));
	};

	function ik(a, b, c, d) {
	  this.tag = a;
	  this.key = c;
	  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
	  this.index = 0;
	  this.ref = null;
	  this.pendingProps = b;
	  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
	  this.mode = d;
	  this.flags = 0;
	  this.lastEffect = this.firstEffect = this.nextEffect = null;
	  this.childLanes = this.lanes = 0;
	  this.alternate = null;
	}

	function nh(a, b, c, d) {
	  return new ik(a, b, c, d);
	}

	function ji(a) {
	  a = a.prototype;
	  return !(!a || !a.isReactComponent);
	}

	function hk(a) {
	  if ("function" === typeof a) return ji(a) ? 1 : 0;

	  if (void 0 !== a && null !== a) {
	    a = a.$$typeof;
	    if (a === Aa) return 11;
	    if (a === Da) return 14;
	  }

	  return 2;
	}

	function Tg(a, b) {
	  var c = a.alternate;
	  null === c ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
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

	function Vg(a, b, c, d, e, f) {
	  var g = 2;
	  d = a;
	  if ("function" === typeof a) ji(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
	    case ua:
	      return Xg(c.children, e, f, b);

	    case Ha:
	      g = 8;
	      e |= 16;
	      break;

	    case wa:
	      g = 8;
	      e |= 1;
	      break;

	    case xa:
	      return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;

	    case Ba:
	      return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;

	    case Ca:
	      return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;

	    case Ia:
	      return vi(c, e, f, b);

	    case Ja:
	      return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;

	    default:
	      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
	        case ya:
	          g = 10;
	          break a;

	        case za:
	          g = 9;
	          break a;

	        case Aa:
	          g = 11;
	          break a;

	        case Da:
	          g = 14;
	          break a;

	        case Ea:
	          g = 16;
	          d = null;
	          break a;

	        case Fa:
	          g = 22;
	          break a;
	      }
	      throw Error(y$1(130, null == a ? a : typeof a, ""));
	  }
	  b = nh(g, c, b, e);
	  b.elementType = a;
	  b.type = d;
	  b.lanes = f;
	  return b;
	}

	function Xg(a, b, c, d) {
	  a = nh(7, a, d, b);
	  a.lanes = c;
	  return a;
	}

	function vi(a, b, c, d) {
	  a = nh(23, a, d, b);
	  a.elementType = Ia;
	  a.lanes = c;
	  return a;
	}

	function Ug(a, b, c) {
	  a = nh(6, a, null, b);
	  a.lanes = c;
	  return a;
	}

	function Wg(a, b, c) {
	  b = nh(4, null !== a.children ? a.children : [], a.key, b);
	  b.lanes = c;
	  b.stateNode = {
	    containerInfo: a.containerInfo,
	    pendingChildren: null,
	    implementation: a.implementation
	  };
	  return b;
	}

	function jk(a, b, c) {
	  this.tag = b;
	  this.containerInfo = a;
	  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
	  this.timeoutHandle = -1;
	  this.pendingContext = this.context = null;
	  this.hydrate = c;
	  this.callbackNode = null;
	  this.callbackPriority = 0;
	  this.eventTimes = Zc(0);
	  this.expirationTimes = Zc(-1);
	  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
	  this.entanglements = Zc(0);
	  this.mutableSourceEagerHydrationData = null;
	}

	function kk(a, b, c) {
	  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	  return {
	    $$typeof: ta,
	    key: null == d ? null : "" + d,
	    children: a,
	    containerInfo: b,
	    implementation: c
	  };
	}

	function lk(a, b, c, d) {
	  var e = b.current,
	      f = Hg(),
	      g = Ig(e);

	  a: if (c) {
	    c = c._reactInternals;

	    b: {
	      if (Zb(c) !== c || 1 !== c.tag) throw Error(y$1(170));
	      var h = c;

	      do {
	        switch (h.tag) {
	          case 3:
	            h = h.stateNode.context;
	            break b;

	          case 1:
	            if (Ff(h.type)) {
	              h = h.stateNode.__reactInternalMemoizedMergedChildContext;
	              break b;
	            }

	        }

	        h = h.return;
	      } while (null !== h);

	      throw Error(y$1(171));
	    }

	    if (1 === c.tag) {
	      var k = c.type;

	      if (Ff(k)) {
	        c = If(c, k, h);
	        break a;
	      }
	    }

	    c = h;
	  } else c = Cf;

	  null === b.context ? b.context = c : b.pendingContext = c;
	  b = zg(f, g);
	  b.payload = {
	    element: a
	  };
	  d = void 0 === d ? null : d;
	  null !== d && (b.callback = d);
	  Ag(e, b);
	  Jg(e, g, f);
	  return g;
	}

	function mk(a) {
	  a = a.current;
	  if (!a.child) return null;

	  switch (a.child.tag) {
	    case 5:
	      return a.child.stateNode;

	    default:
	      return a.child.stateNode;
	  }
	}

	function nk(a, b) {
	  a = a.memoizedState;

	  if (null !== a && null !== a.dehydrated) {
	    var c = a.retryLane;
	    a.retryLane = 0 !== c && c < b ? c : b;
	  }
	}

	function ok(a, b) {
	  nk(a, b);
	  (a = a.alternate) && nk(a, b);
	}

	function pk() {
	  return null;
	}

	function qk(a, b, c) {
	  var d = null != c && null != c.hydrationOptions && c.hydrationOptions.mutableSources || null;
	  c = new jk(a, b, null != c && !0 === c.hydrate);
	  b = nh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
	  c.current = b;
	  b.stateNode = c;
	  xg(b);
	  a[ff] = c.current;
	  cf(8 === a.nodeType ? a.parentNode : a);
	  if (d) for (a = 0; a < d.length; a++) {
	    b = d[a];
	    var e = b._getVersion;
	    e = e(b._source);
	    null == c.mutableSourceEagerHydrationData ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
	  }
	  this._internalRoot = c;
	}

	qk.prototype.render = function (a) {
	  lk(a, this._internalRoot, null, null);
	};

	qk.prototype.unmount = function () {
	  var a = this._internalRoot,
	      b = a.containerInfo;
	  lk(null, a, null, function () {
	    b[ff] = null;
	  });
	};

	function rk(a) {
	  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}

	function sk(a, b) {
	  b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
	  if (!b) for (var c; c = a.lastChild;) a.removeChild(c);
	  return new qk(a, 0, b ? {
	    hydrate: !0
	  } : void 0);
	}

	function tk(a, b, c, d, e) {
	  var f = c._reactRootContainer;

	  if (f) {
	    var g = f._internalRoot;

	    if ("function" === typeof e) {
	      var h = e;

	      e = function () {
	        var a = mk(g);
	        h.call(a);
	      };
	    }

	    lk(b, g, a, e);
	  } else {
	    f = c._reactRootContainer = sk(c, d);
	    g = f._internalRoot;

	    if ("function" === typeof e) {
	      var k = e;

	      e = function () {
	        var a = mk(g);
	        k.call(a);
	      };
	    }

	    Xj(function () {
	      lk(b, g, a, e);
	    });
	  }

	  return mk(g);
	}

	ec = function (a) {
	  if (13 === a.tag) {
	    var b = Hg();
	    Jg(a, 4, b);
	    ok(a, 4);
	  }
	};

	fc = function (a) {
	  if (13 === a.tag) {
	    var b = Hg();
	    Jg(a, 67108864, b);
	    ok(a, 67108864);
	  }
	};

	gc = function (a) {
	  if (13 === a.tag) {
	    var b = Hg(),
	        c = Ig(a);
	    Jg(a, c, b);
	    ok(a, c);
	  }
	};

	hc = function (a, b) {
	  return b();
	};

	yb = function (a, b, c) {
	  switch (b) {
	    case "input":
	      ab(a, c);
	      b = c.name;

	      if ("radio" === c.type && null != b) {
	        for (c = a; c.parentNode;) c = c.parentNode;

	        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');

	        for (b = 0; b < c.length; b++) {
	          var d = c[b];

	          if (d !== a && d.form === a.form) {
	            var e = Db(d);
	            if (!e) throw Error(y$1(90));
	            Wa(d);
	            ab(d, e);
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

	Gb = Wj;

	Hb = function (a, b, c, d, e) {
	  var f = X$1;
	  X$1 |= 4;

	  try {
	    return gg(98, a.bind(null, b, c, d, e));
	  } finally {
	    X$1 = f, 0 === X$1 && (wj(), ig());
	  }
	};

	Ib = function () {
	  0 === (X$1 & 49) && (Vj(), Oj());
	};

	Jb = function (a, b) {
	  var c = X$1;
	  X$1 |= 2;

	  try {
	    return a(b);
	  } finally {
	    X$1 = c, 0 === X$1 && (wj(), ig());
	  }
	};

	function uk(a, b) {
	  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	  if (!rk(b)) throw Error(y$1(200));
	  return kk(a, b, null, c);
	}

	var vk = {
	  Events: [Cb, ue$1, Db, Eb, Fb, Oj, {
	    current: !1
	  }]
	},
	    wk = {
	  findFiberByHostInstance: wc,
	  bundleType: 0,
	  version: "17.0.2",
	  rendererPackageName: "react-dom"
	};
	var xk = {
	  bundleType: wk.bundleType,
	  version: wk.version,
	  rendererPackageName: wk.rendererPackageName,
	  rendererConfig: wk.rendererConfig,
	  overrideHookState: null,
	  overrideHookStateDeletePath: null,
	  overrideHookStateRenamePath: null,
	  overrideProps: null,
	  overridePropsDeletePath: null,
	  overridePropsRenamePath: null,
	  setSuspenseHandler: null,
	  scheduleUpdate: null,
	  currentDispatcherRef: ra.ReactCurrentDispatcher,
	  findHostInstanceByFiber: function (a) {
	    a = cc(a);
	    return null === a ? null : a.stateNode;
	  },
	  findFiberByHostInstance: wk.findFiberByHostInstance || pk,
	  findHostInstancesForRefresh: null,
	  scheduleRefresh: null,
	  scheduleRoot: null,
	  setRefreshHandler: null,
	  getCurrentFiber: null
	};

	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
	  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	  if (!yk.isDisabled && yk.supportsFiber) try {
	    Lf = yk.inject(xk), Mf = yk;
	  } catch (a) {}
	}

	reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
	reactDom_production_min.createPortal = uk;

	reactDom_production_min.findDOMNode = function (a) {
	  if (null == a) return null;
	  if (1 === a.nodeType) return a;
	  var b = a._reactInternals;

	  if (void 0 === b) {
	    if ("function" === typeof a.render) throw Error(y$1(188));
	    throw Error(y$1(268, Object.keys(a)));
	  }

	  a = cc(b);
	  a = null === a ? null : a.stateNode;
	  return a;
	};

	reactDom_production_min.flushSync = function (a, b) {
	  var c = X$1;
	  if (0 !== (c & 48)) return a(b);
	  X$1 |= 1;

	  try {
	    if (a) return gg(99, a.bind(null, b));
	  } finally {
	    X$1 = c, ig();
	  }
	};

	reactDom_production_min.hydrate = function (a, b, c) {
	  if (!rk(b)) throw Error(y$1(200));
	  return tk(null, a, b, !0, c);
	};

	reactDom_production_min.render = function (a, b, c) {
	  if (!rk(b)) throw Error(y$1(200));
	  return tk(null, a, b, !1, c);
	};

	reactDom_production_min.unmountComponentAtNode = function (a) {
	  if (!rk(a)) throw Error(y$1(40));
	  return a._reactRootContainer ? (Xj(function () {
	    tk(null, null, a, !1, function () {
	      a._reactRootContainer = null;
	      a[ff] = null;
	    });
	  }), !0) : !1;
	};

	reactDom_production_min.unstable_batchedUpdates = Wj;

	reactDom_production_min.unstable_createPortal = function (a, b) {
	  return uk(a, b, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
	};

	reactDom_production_min.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
	  if (!rk(c)) throw Error(y$1(200));
	  if (null == a || void 0 === a._reactInternals) throw Error(y$1(38));
	  return tk(a, b, c, !1, d);
	};

	reactDom_production_min.version = "17.0.2";

	(function (module) {

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
		  module.exports = reactDom_production_min;
		}
	} (reactDom));

	var ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(reactDom.exports);

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

	var e$2 = react.exports;

	function h$3(a, b) {
	  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}

	var k$3 = "function" === typeof Object.is ? Object.is : h$3,
	    l$2 = e$2.useState,
	    m$2 = e$2.useEffect,
	    n$3 = e$2.useLayoutEffect,
	    p$3 = e$2.useDebugValue;

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
	  p$3(d);
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

	(function (module) {

		{
		  module.exports = useSyncExternalStoreShim_production_min;
		}
	} (shim));

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

	var h$2 = react.exports,
	    n$2 = shim.exports;

	function p$2(a, b) {
	  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}

	var q$3 = "function" === typeof Object.is ? Object.is : p$2,
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

	(function (module) {

		{
		  module.exports = withSelector_production_min;
		}
	} (withSelector));

	// Default to a dummy "batch" implementation that just runs the callback
	function defaultNoopBatch(callback) {
	  callback();
	}

	let batch = defaultNoopBatch; // Allow injecting another batching function later

	const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings

	const getBatch = () => batch;

	const ReactReduxContext = /*#__PURE__*/React.createContext(null);

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

	function useReduxContext() {
	  const contextValue = react.exports.useContext(ReactReduxContext);

	  return contextValue;
	}

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
	  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : () => react.exports.useContext(context);
	  return function useSelector(selector, equalityFn = refEquality) {

	    const {
	      store,
	      subscription,
	      getServerState
	    } = useReduxContext$1();
	    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, selector, equalityFn);
	    react.exports.useDebugValue(selectedState);
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
	  _extends = Object.assign || function (target) {
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
	    d$1 = b$2 ? Symbol.for("react.portal") : 60106,
	    e$1 = b$2 ? Symbol.for("react.fragment") : 60107,
	    f$1 = b$2 ? Symbol.for("react.strict_mode") : 60108,
	    g$2 = b$2 ? Symbol.for("react.profiler") : 60114,
	    h$1 = b$2 ? Symbol.for("react.provider") : 60109,
	    k$2 = b$2 ? Symbol.for("react.context") : 60110,
	    l$1 = b$2 ? Symbol.for("react.async_mode") : 60111,
	    m$1 = b$2 ? Symbol.for("react.concurrent_mode") : 60111,
	    n$1 = b$2 ? Symbol.for("react.forward_ref") : 60112,
	    p$1 = b$2 ? Symbol.for("react.suspense") : 60113,
	    q$2 = b$2 ? Symbol.for("react.suspense_list") : 60120,
	    r = b$2 ? Symbol.for("react.memo") : 60115,
	    t$1 = b$2 ? Symbol.for("react.lazy") : 60116,
	    v$2 = b$2 ? Symbol.for("react.block") : 60121,
	    w$3 = b$2 ? Symbol.for("react.fundamental") : 60117,
	    x$1 = b$2 ? Symbol.for("react.responder") : 60118,
	    y = b$2 ? Symbol.for("react.scope") : 60119;

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
	          case p$1:
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

	      case d$1:
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
	reactIs_production_min$1.Portal = d$1;
	reactIs_production_min$1.Profiler = g$2;
	reactIs_production_min$1.StrictMode = f$1;
	reactIs_production_min$1.Suspense = p$1;

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
	  return z$1(a) === d$1;
	};

	reactIs_production_min$1.isProfiler = function (a) {
	  return z$1(a) === g$2;
	};

	reactIs_production_min$1.isStrictMode = function (a) {
	  return z$1(a) === f$1;
	};

	reactIs_production_min$1.isSuspense = function (a) {
	  return z$1(a) === p$1;
	};

	reactIs_production_min$1.isValidElementType = function (a) {
	  return "string" === typeof a || "function" === typeof a || a === e$1 || a === m$1 || a === g$2 || a === f$1 || a === p$1 || a === q$2 || "object" === typeof a && null !== a && (a.$$typeof === t$1 || a.$$typeof === r || a.$$typeof === h$1 || a.$$typeof === k$2 || a.$$typeof === n$1 || a.$$typeof === w$3 || a.$$typeof === x$1 || a.$$typeof === y || a.$$typeof === v$2);
	};

	reactIs_production_min$1.typeOf = z$1;

	(function (module) {

		{
		  module.exports = reactIs_production_min$1;
		}
	} (reactIs$2));

	var reactIs$1 = reactIs$2.exports;
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
	    d = Symbol.for("react.fragment"),
	    e = Symbol.for("react.strict_mode"),
	    f = Symbol.for("react.profiler"),
	    g$1 = Symbol.for("react.provider"),
	    h = Symbol.for("react.context"),
	    k$1 = Symbol.for("react.server_context"),
	    l = Symbol.for("react.forward_ref"),
	    m = Symbol.for("react.suspense"),
	    n = Symbol.for("react.suspense_list"),
	    p = Symbol.for("react.memo"),
	    q$1 = Symbol.for("react.lazy"),
	    t = Symbol.for("react.offscreen"),
	    u = Symbol.for("react.module.reference");

	function v$1(a) {
	  if ("object" === typeof a && null !== a) {
	    var r = a.$$typeof;

	    switch (r) {
	      case b$1:
	        switch (a = a.type, a) {
	          case d:
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
	              case p:
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
	reactIs_production_min.Fragment = d;
	reactIs_production_min.Lazy = q$1;
	reactIs_production_min.Memo = p;
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
	  return v$1(a) === d;
	};

	reactIs_production_min.isLazy = function (a) {
	  return v$1(a) === q$1;
	};

	reactIs_production_min.isMemo = function (a) {
	  return v$1(a) === p;
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
	  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q$1 || a.$$typeof === p || a.$$typeof === g$1 || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? !0 : !1;
	};

	reactIs_production_min.typeOf = v$1;

	(function (module) {

		{
		  module.exports = reactIs_production_min;
		}
	} (reactIs));

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
	const useIsomorphicLayoutEffect = canUseDOM$1 ? react.exports.useLayoutEffect : react.exports.useEffect;

	function Provider({
	  store,
	  context,
	  children,
	  serverState
	}) {
	  const contextValue = react.exports.useMemo(() => {
	    const subscription = createSubscription(store);
	    return {
	      store,
	      subscription,
	      getServerState: serverState ? () => serverState : undefined
	    };
	  }, [store, serverState]);
	  const previousState = react.exports.useMemo(() => store.getState(), [store]);
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

	  return /*#__PURE__*/React.createElement(Context.Provider, {
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
	  const useReduxContext$1 = // @ts-ignore
	  context === ReactReduxContext ? useReduxContext : () => react.exports.useContext(context);
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
	  const useStore$1 = // @ts-ignore
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
	initializeUseSelector(withSelector.exports.useSyncExternalStoreWithSelector);
	// with standard React renderers (ReactDOM, React Native)

	setBatch(reactDom.exports.unstable_batchedUpdates);

	function _defineProperty$3(obj, key, value) {
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
	      _defineProperty$3(target, key, source[key]);
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
	} // Inlined version of the `symbol-observable` polyfill


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
	} // Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
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

	var CANCEL$1 = /*#__PURE__*/createSymbol('CANCEL_PROMISE');
	var CHANNEL_END_TYPE = /*#__PURE__*/createSymbol('CHANNEL_END');
	var IO = /*#__PURE__*/createSymbol('IO');
	var MATCH = /*#__PURE__*/createSymbol('MATCH');
	var MULTICAST = /*#__PURE__*/createSymbol('MULTICAST');
	var SAGA_ACTION = /*#__PURE__*/createSymbol('SAGA_ACTION');
	var SELF_CANCELLATION = /*#__PURE__*/createSymbol('SELF_CANCELLATION');
	var TASK = /*#__PURE__*/createSymbol('TASK');
	var TASK_CANCEL = /*#__PURE__*/createSymbol('TASK_CANCEL');
	var TERMINATE = /*#__PURE__*/createSymbol('TERMINATE');
	var SAGA_LOCATION = /*#__PURE__*/createSymbol('LOCATION');

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

	function delayP(ms, val) {
	  if (val === void 0) {
	    val = true;
	  }

	  var timeoutId;
	  var promise = new Promise(function (resolve) {
	    timeoutId = setTimeout(resolve, ms, val);
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

	var kTrue = /*#__PURE__*/konst(true);

	var noop$2 = function noop() {};

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

	    chCbAtKey.cancel = noop$2;
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

	var delay = /*#__PURE__*/call.bind(null, delayP);

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
	      args = _ref.args; // catch synchronous failures; see #152 and #441

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
	  var task = _ref5.task; // catch synchronous failures; see #152

	  try {
	    var result = fn.apply(context, args);

	    if (promise(result)) {
	      resolvePromise(result, cb);
	      return;
	    }

	    if (iterator(result)) {
	      // resolve iterator
	      proc(env, result, task.context, current, getMetaInfo(fn),
	      /* isRoot */
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
	      args = _ref6.args; // CPS (ie node style functions) can define their own cancellation logic
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

	    chCbAtKey.cancel = noop$2;
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
	      task.cont = noop$2;

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
	      t.cont = noop$2;
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
	} // there can be only a single saga error created at any given moment


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
	    cont = noop$2;
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

	  next.cancel = noop$2;
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
	      proc(env, effect, task.context, effectId, meta,
	      /* isRoot */
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
	      cb.cancel = noop$2; // defensive measure

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


	    currCb.cancel = noop$2; // setup cancellation logic on the parent cb

	    cb.cancel = function () {
	      // prevents cancelling an already completed effect
	      if (effectSettled) {
	        return;
	      }

	      effectSettled = true;
	      currCb.cancel(); // propagates cancel downward

	      currCb.cancel = noop$2; // defensive measure

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
	    sagaMonitor.rootSagaStarted = sagaMonitor.rootSagaStarted || noop$2;
	    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || noop$2;
	    sagaMonitor.effectResolved = sagaMonitor.effectResolved || noop$2;
	    sagaMonitor.effectRejected = sagaMonitor.effectRejected || noop$2;
	    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || noop$2;
	    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || noop$2;
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
	    var task = proc(env, iterator$1, context, effectId, getMetaInfo(saga),
	    /* isRoot */
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

	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB); // Test for A's keys different from B.

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

	var unitlessKeys = {
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
	  /* o */
	  && prop.charCodeAt(1) === 110
	  /* n */
	  && prop.charCodeAt(2) < 91;
	}
	/* Z+1 */
	);

	function v() {
	  return (v = Object.assign || function (e) {
	    for (var t = 1; t < arguments.length; t++) {
	      var n = arguments[t];

	      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
	    }

	    return e;
	  }).apply(this, arguments);
	}

	var g = function (e, t) {
	  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);

	  return n;
	},
	    S = function (t) {
	  return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !reactIs.exports.typeOf(t);
	},
	    w$2 = Object.freeze([]),
	    E = Object.freeze({});

	function b(e) {
	  return "function" == typeof e;
	}

	function _(e) {
	  return e.displayName || e.name || "Component";
	}

	function N(e) {
	  return e && "string" == typeof e.styledComponentId;
	}

	var A = "undefined" != typeof process && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
	    C = "5.3.5",
	    I = "undefined" != typeof window && "HTMLElement" in window,
	    P = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== 'production'),
	    O = {};

	function j$1(e) {
	  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

	  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) ;
	}

	var T = function () {
	  function e(e) {
	    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
	  }

	  var t = e.prototype;
	  return t.indexOfGroup = function (e) {
	    for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];

	    return t;
	  }, t.insertRules = function (e, t) {
	    if (e >= this.groupSizes.length) {
	      for (var n = this.groupSizes, r = n.length, o = r; e >= o;) (o <<= 1) < 0 && j$1(16, "" + e);

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
	    x = new Map(),
	    k = new Map(),
	    V = 1,
	    B = function (e) {
	  if (x.has(e)) return x.get(e);

	  for (; k.has(V);) V++;

	  var t = V++;
	  return x.set(e, t), k.set(t, e), t;
	},
	    z = function (e) {
	  return k.get(e);
	},
	    M = function (e, t) {
	  t >= V && (V = t + 1), x.set(e, t), k.set(t, e);
	},
	    G = "style[" + A + '][data-styled-version="5.3.5"]',
	    L = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
	    F = function (e, t, n) {
	  for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++) (r = o[s]) && e.registerName(t, r);
	},
	    Y = function (e, t) {
	  for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, s = n.length; o < s; o++) {
	    var i = n[o].trim();

	    if (i) {
	      var a = i.match(L);

	      if (a) {
	        var c = 0 | parseInt(a[1], 10),
	            u = a[2];
	        0 !== c && (M(u, c), F(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
	      } else r.push(i);
	    }
	  }
	},
	    q = function () {
	  return "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null;
	},
	    H = function (e) {
	  var t = document.head,
	      n = e || t,
	      r = document.createElement("style"),
	      o = function (e) {
	    for (var t = e.childNodes, n = t.length; n >= 0; n--) {
	      var r = t[n];
	      if (r && 1 === r.nodeType && r.hasAttribute(A)) return r;
	    }
	  }(n),
	      s = void 0 !== o ? o.nextSibling : null;

	  r.setAttribute(A, "active"), r.setAttribute("data-styled-version", "5.3.5");
	  var i = q();
	  return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
	},
	    $ = function () {
	  function e(e) {
	    var t = this.element = H(e);
	    t.appendChild(document.createTextNode("")), this.sheet = function (e) {
	      if (e.sheet) return e.sheet;

	      for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
	        var o = t[n];
	        if (o.ownerNode === e) return o;
	      }

	      j$1(17);
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
	    W = function () {
	  function e(e) {
	    var t = this.element = H(e);
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
	    U = function () {
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
	    J = I,
	    X = {
	  isServer: !I,
	  useCSSOMInjection: !P
	},
	    Z = function () {
	  function e(e, t, n) {
	    void 0 === e && (e = E), void 0 === t && (t = {}), this.options = v({}, X, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && I && J && (J = !1, function (e) {
	      for (var t = document.querySelectorAll(G), n = 0, r = t.length; n < r; n++) {
	        var o = t[n];
	        o && "active" !== o.getAttribute(A) && (Y(e, o), o.parentNode && o.parentNode.removeChild(o));
	      }
	    }(this));
	  }

	  e.registerId = function (e) {
	    return B(e);
	  };

	  var t = e.prototype;
	  return t.reconstructWithOptions = function (t, n) {
	    return void 0 === n && (n = !0), new e(v({}, this.options, {}, t), this.gs, n && this.names || void 0);
	  }, t.allocateGSInstance = function (e) {
	    return this.gs[e] = (this.gs[e] || 0) + 1;
	  }, t.getTag = function () {
	    return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new U(o) : r ? new $(o) : new W(o), new T(e)));
	    var e, t, n, r, o;
	  }, t.hasNameForId = function (e, t) {
	    return this.names.has(e) && this.names.get(e).has(t);
	  }, t.registerName = function (e, t) {
	    if (B(e), this.names.has(e)) this.names.get(e).add(t);else {
	      var n = new Set();
	      n.add(t), this.names.set(e, n);
	    }
	  }, t.insertRules = function (e, t, n) {
	    this.registerName(e, t), this.getTag().insertRules(B(e), n);
	  }, t.clearNames = function (e) {
	    this.names.has(e) && this.names.get(e).clear();
	  }, t.clearRules = function (e) {
	    this.getTag().clearGroup(B(e)), this.clearNames(e);
	  }, t.clearTag = function () {
	    this.tag = void 0;
	  }, t.toString = function () {
	    return function (e) {
	      for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
	        var s = z(o);

	        if (void 0 !== s) {
	          var i = e.names.get(s),
	              a = t.getGroup(o);

	          if (i && a && i.size) {
	            var c = A + ".g" + o + '[id="' + s + '"]',
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
	    K = /(a)(d)/gi,
	    Q = function (e) {
	  return String.fromCharCode(e + (e > 25 ? 39 : 97));
	};

	function ee(e) {
	  var t,
	      n = "";

	  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = Q(t % 52) + n;

	  return (Q(t % 52) + n).replace(K, "$1-$2");
	}

	var te = function (e, t) {
	  for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);

	  return e;
	},
	    ne = function (e) {
	  return te(5381, e);
	};

	function re(e) {
	  for (var t = 0; t < e.length; t += 1) {
	    var n = e[t];
	    if (b(n) && !N(n)) return !1;
	  }

	  return !0;
	}

	var oe = ne("5.3.5"),
	    se = function () {
	  function e(e, t, n) {
	    this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && re(e), this.componentId = t, this.baseHash = te(oe, t), this.baseStyle = n, Z.registerId(t);
	  }

	  return e.prototype.generateAndInjectStyles = function (e, t, n) {
	    var r = this.componentId,
	        o = [];
	    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) {
	      if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);else {
	        var s = Ne(this.rules, e, t, n).join(""),
	            i = ee(te(this.baseHash, s) >>> 0);

	        if (!t.hasNameForId(r, i)) {
	          var a = n(s, "." + i, void 0, r);
	          t.insertRules(r, i, a);
	        }

	        o.push(i), this.staticRulesId = i;
	      }
	    } else {
	      for (var c = this.rules.length, u = te(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
	        var h = this.rules[d];
	        if ("string" == typeof h) l += h;else if (h) {
	          var p = Ne(h, e, t, n),
	              f = Array.isArray(p) ? p.join("") : p;
	          u = te(u, f + d), l += f;
	        }
	      }

	      if (l) {
	        var m = ee(u >>> 0);

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
	    ie = /^\s*\/\/.*$/gm,
	    ae = [":", "[", ".", "#"];

	function ce(e) {
	  var t,
	      n,
	      r,
	      o,
	      s = void 0 === e ? E : e,
	      i = s.options,
	      a = void 0 === i ? E : i,
	      c = s.plugins,
	      u = void 0 === c ? w$2 : c,
	      l = new stylis_min(a),
	      d = [],
	      h = function (e) {
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
	    return 0 === r && -1 !== ae.indexOf(s[n.length]) || s.match(o) ? e : "." + t;
	  };

	  function m(e, s, i, a) {
	    void 0 === a && (a = "&");
	    var c = e.replace(ie, ""),
	        u = s && i ? i + " " + s + " { " + c + " }" : c;
	    return t = a, n = s, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(i || !s ? "" : s, u);
	  }

	  return l.use([].concat(u, [function (e, t, o) {
	    2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f));
	  }, h, function (e) {
	    if (-2 === e) {
	      var t = d;
	      return d = [], t;
	    }
	  }])), m.hash = u.length ? u.reduce(function (e, t) {
	    return t.name || j$1(15), te(e, t.name);
	  }, 5381).toString() : "", m;
	}

	var ue = React.createContext(),
	    le = ue.Consumer,
	    de = React.createContext(),
	    he = (de.Consumer, new Z()),
	    pe = ce();

	function fe() {
	  return react.exports.useContext(ue) || he;
	}

	function me() {
	  return react.exports.useContext(de) || pe;
	}

	function ye(e) {
	  var t = react.exports.useState(e.stylisPlugins),
	      n = t[0],
	      s = t[1],
	      c = fe(),
	      u = react.exports.useMemo(function () {
	    var t = c;
	    return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
	      target: e.target
	    }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
	      useCSSOMInjection: !1
	    })), t;
	  }, [e.disableCSSOMInjection, e.sheet, e.target]),
	      l = react.exports.useMemo(function () {
	    return ce({
	      options: {
	        prefix: !e.disableVendorPrefixes
	      },
	      plugins: n
	    });
	  }, [e.disableVendorPrefixes, n]);
	  return react.exports.useEffect(function () {
	    shallowequal(n, e.stylisPlugins) || s(e.stylisPlugins);
	  }, [e.stylisPlugins]), React.createElement(ue.Provider, {
	    value: u
	  }, React.createElement(de.Provider, {
	    value: l
	  }, e.children));
	}

	var ve = function () {
	  function e(e, t) {
	    var n = this;
	    this.inject = function (e, t) {
	      void 0 === t && (t = pe);
	      var r = n.name + t.hash;
	      e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
	    }, this.toString = function () {
	      return j$1(12, String(n.name));
	    }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t;
	  }

	  return e.prototype.getName = function (e) {
	    return void 0 === e && (e = pe), this.name + e.hash;
	  }, e;
	}(),
	    ge = /([A-Z])/,
	    Se = /([A-Z])/g,
	    we = /^ms-/,
	    Ee = function (e) {
	  return "-" + e.toLowerCase();
	};

	function be(e) {
	  return ge.test(e) ? e.replace(Se, Ee).replace(we, "-ms-") : e;
	}

	var _e = function (e) {
	  return null == e || !1 === e || "" === e;
	};

	function Ne(e, n, r, o) {
	  if (Array.isArray(e)) {
	    for (var s, i = [], a = 0, c = e.length; a < c; a += 1) "" !== (s = Ne(e[a], n, r, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));

	    return i;
	  }

	  if (_e(e)) return "";
	  if (N(e)) return "." + e.styledComponentId;

	  if (b(e)) {
	    if ("function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !n) return e;
	    var u = e(n);
	    return Ne(u, n, r, o);
	  }

	  var l;
	  return e instanceof ve ? r ? (e.inject(r, o), e.getName(o)) : e : S(e) ? function e(t, n) {
	    var r,
	        o,
	        s = [];

	    for (var i in t) t.hasOwnProperty(i) && !_e(t[i]) && (Array.isArray(t[i]) && t[i].isCss || b(t[i]) ? s.push(be(i) + ":", t[i], ";") : S(t[i]) ? s.push.apply(s, e(t[i], i)) : s.push(be(i) + ": " + (r = i, null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in unitlessKeys ? String(o).trim() : o + "px") + ";"));

	    return n ? [n + " {"].concat(s, ["}"]) : s;
	  }(e) : e.toString();
	}

	var Ae = function (e) {
	  return Array.isArray(e) && (e.isCss = !0), e;
	};

	function Ce(e) {
	  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

	  return b(e) || S(e) ? Ae(Ne(g(w$2, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : Ae(Ne(g(e, n)));
	}

	var Re = function (e, t, n) {
	  return void 0 === n && (n = E), e.theme !== n.theme && e.theme || t || n.theme;
	},
	    De = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
	    je = /(^-|-$)/g;

	function Te(e) {
	  return e.replace(De, "-").replace(je, "");
	}

	var xe = function (e) {
	  return ee(ne(e) >>> 0);
	};

	function ke(e) {
	  return "string" == typeof e && ("production" === 'production' );
	}

	var Ve = function (e) {
	  return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e);
	},
	    Be = function (e) {
	  return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
	};

	function ze(e, t, n) {
	  var r = e[n];
	  Ve(t) && Ve(r) ? Me(r, t) : e[n] = t;
	}

	function Me(e) {
	  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

	  for (var o = 0, s = n; o < s.length; o++) {
	    var i = s[o];
	    if (Ve(i)) for (var a in i) Be(a) && ze(e, i[a], a);
	  }

	  return e;
	}

	var Ge = React.createContext(),
	    Le = Ge.Consumer;

	function Fe(e) {
	  var t = react.exports.useContext(Ge),
	      n = react.exports.useMemo(function () {
	    return function (e, t) {
	      if (!e) return j$1(14);

	      if (b(e)) {
	        var n = e(t);
	        return n ;
	      }

	      return Array.isArray(e) || "object" != typeof e ? j$1(8) : t ? v({}, t, {}, e) : e;
	    }(e.theme, t);
	  }, [e.theme, t]);
	  return e.children ? React.createElement(Ge.Provider, {
	    value: n
	  }, e.children) : null;
	}

	var Ye = {};

	function qe(e, t, n) {
	  var o = N(e),
	      i = !ke(e),
	      a = t.attrs,
	      c = void 0 === a ? w$2 : a,
	      d = t.componentId,
	      h = void 0 === d ? function (e, t) {
	    var n = "string" != typeof e ? "sc" : Te(e);
	    Ye[n] = (Ye[n] || 0) + 1;
	    var r = n + "-" + xe("5.3.5" + n + Ye[n]);
	    return t ? t + "-" + r : r;
	  }(t.displayName, t.parentComponentId) : d,
	      p = t.displayName,
	      f = void 0 === p ? function (e) {
	    return ke(e) ? "styled." + e : "Styled(" + _(e) + ")";
	  }(e) : p,
	      g = t.displayName && t.componentId ? Te(t.displayName) + "-" + t.componentId : t.componentId || h,
	      S = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c,
	      A = t.shouldForwardProp;
	  o && e.shouldForwardProp && (A = t.shouldForwardProp ? function (n, r, o) {
	    return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o);
	  } : e.shouldForwardProp);

	  var C,
	      I = new se(n, g, o ? e.componentStyle : void 0),
	      P = I.isStatic && 0 === c.length,
	      O = function (e, t) {
	    return function (e, t, n, r) {
	      var o = e.attrs,
	          i = e.componentStyle,
	          a = e.defaultProps,
	          c = e.foldedComponentIds,
	          d = e.shouldForwardProp,
	          h = e.styledComponentId,
	          p = e.target;

	      var f = function (e, t, n) {
	        void 0 === e && (e = E);
	        var r = v({}, t, {
	          theme: e
	        }),
	            o = {};
	        return n.forEach(function (e) {
	          var t,
	              n,
	              s,
	              i = e;

	          for (t in b(i) && (i = i(r)), i) r[t] = o[t] = "className" === t ? (n = o[t], s = i[t], n && s ? n + " " + s : n || s) : i[t];
	        }), [r, o];
	      }(Re(t, react.exports.useContext(Ge), a) || E, t, o),
	          y = f[0],
	          g = f[1],
	          S = function (e, t, n, r) {
	        var o = fe(),
	            s = me(),
	            i = t ? e.generateAndInjectStyles(E, o, s) : e.generateAndInjectStyles(n, o, s);
	        return i;
	      }(i, r, y),
	          w = n,
	          _ = g.$as || t.$as || g.as || t.as || p,
	          N = ke(_),
	          A = g !== t ? v({}, t, {}, g) : t,
	          C = {};

	      for (var I in A) "$" !== I[0] && "as" !== I && ("forwardedAs" === I ? C.as = A[I] : (d ? d(I, isPropValid, _) : !N || isPropValid(I)) && (C[I] = A[I]));

	      return t.style && g.style !== t.style && (C.style = v({}, t.style, {}, g.style)), C.className = Array.prototype.concat(c, h, S !== h ? S : null, t.className, g.className).filter(Boolean).join(" "), C.ref = w, react.exports.createElement(_, C);
	    }(C, e, t, P);
	  };

	  return O.displayName = f, (C = React.forwardRef(O)).attrs = S, C.componentStyle = I, C.displayName = f, C.shouldForwardProp = A, C.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : w$2, C.styledComponentId = g, C.target = o ? e.target : e, C.withComponent = function (e) {
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
	        s = r && r + "-" + (ke(e) ? e : Te(_(e)));

	    return qe(e, v({}, o, {
	      attrs: S,
	      componentId: s
	    }), n);
	  }, Object.defineProperty(C, "defaultProps", {
	    get: function () {
	      return this._foldedDefaultProps;
	    },
	    set: function (t) {
	      this._foldedDefaultProps = o ? Me({}, e.defaultProps, t) : t;
	    }
	  }), C.toString = function () {
	    return "." + C.styledComponentId;
	  }, i && hoistNonReactStatics_cjs(C, e, {
	    attrs: !0,
	    componentStyle: !0,
	    displayName: !0,
	    foldedComponentIds: !0,
	    shouldForwardProp: !0,
	    styledComponentId: !0,
	    target: !0,
	    withComponent: !0
	  }), C;
	}

	var He = function (e) {
	  return function e(t, r, o) {
	    if (void 0 === o && (o = E), !reactIs.exports.isValidElementType(r)) return j$1(1, String(r));

	    var s = function () {
	      return t(r, o, Ce.apply(void 0, arguments));
	    };

	    return s.withConfig = function (n) {
	      return e(t, r, v({}, o, {}, n));
	    }, s.attrs = function (n) {
	      return e(t, r, v({}, o, {
	        attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)
	      }));
	    }, s;
	  }(qe, e);
	};

	["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function (e) {
	  He[e] = He(e);
	});

	var $e = function () {
	  function e(e, t) {
	    this.rules = e, this.componentId = t, this.isStatic = re(e), Z.registerId(this.componentId + 1);
	  }

	  var t = e.prototype;
	  return t.createStyles = function (e, t, n, r) {
	    var o = r(Ne(this.rules, t, n, r).join(""), ""),
	        s = this.componentId + e;
	    n.insertRules(s, s, o);
	  }, t.removeStyles = function (e, t) {
	    t.clearRules(this.componentId + e);
	  }, t.renderStyles = function (e, t, n, r) {
	    e > 2 && Z.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
	  }, e;
	}();

	function We(e) {
	  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];

	  var i = Ce.apply(void 0, [e].concat(n)),
	      a = "sc-global-" + xe(JSON.stringify(i)),
	      u = new $e(i, a);

	  function l(e) {
	    var t = fe(),
	        n = me(),
	        o = react.exports.useContext(Ge),
	        l = react.exports.useRef(t.allocateGSInstance(a)).current;
	    return t.server && h(l, e, t, o, n), react.exports.useLayoutEffect(function () {
	      if (!t.server) return h(l, e, t, o, n), function () {
	        return u.removeStyles(l, t);
	      };
	    }, [l, e, t, o, n]), null;
	  }

	  function h(e, t, n, r, o) {
	    if (u.isStatic) u.renderStyles(e, O, n, o);else {
	      var s = v({}, t, {
	        theme: Re(t, r, l.defaultProps)
	      });
	      u.renderStyles(e, s, n, o);
	    }
	  }

	  return React.memo(l);
	}

	function Ue(e) {

	  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

	  var o = Ce.apply(void 0, [e].concat(n)).join(""),
	      s = xe(o);
	  return new ve(s, o);
	}

	var Je = function () {
	  function e() {
	    var e = this;
	    this._emitSheetCSS = function () {
	      var t = e.instance.toString();
	      if (!t) return "";
	      var n = q();
	      return "<style " + [n && 'nonce="' + n + '"', A + '="true"', 'data-styled-version="5.3.5"'].filter(Boolean).join(" ") + ">" + t + "</style>";
	    }, this.getStyleTags = function () {
	      return e.sealed ? j$1(2) : e._emitSheetCSS();
	    }, this.getStyleElement = function () {
	      var t;
	      if (e.sealed) return j$1(2);
	      var n = ((t = {})[A] = "", t["data-styled-version"] = "5.3.5", t.dangerouslySetInnerHTML = {
	        __html: e.instance.toString()
	      }, t),
	          o = q();
	      return o && (n.nonce = o), [React.createElement("style", v({}, n, {
	        key: "sc-0-0"
	      }))];
	    }, this.seal = function () {
	      e.sealed = !0;
	    }, this.instance = new Z({
	      isServer: !0
	    }), this.sealed = !1;
	  }

	  var t = e.prototype;
	  return t.collectStyles = function (e) {
	    return this.sealed ? j$1(2) : React.createElement(ye, {
	      sheet: this.instance
	    }, e);
	  }, t.interleaveWithNodeStream = function (e) {
	    return j$1(3);
	  }, e;
	}(),
	    Xe = function (e) {
	  var t = React.forwardRef(function (t, n) {
	    var o = react.exports.useContext(Ge),
	        i = e.defaultProps,
	        a = Re(t, o, i);
	    return React.createElement(e, v({}, t, {
	      theme: a,
	      ref: n
	    }));
	  });
	  return hoistNonReactStatics_cjs(t, e), t.displayName = "WithTheme(" + _(e) + ")", t;
	},
	    Ze = function () {
	  return react.exports.useContext(Ge);
	},
	    Ke = {
	  StyleSheet: Z,
	  masterSheet: he
	};

	var styledComponents_browser_esm = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': He,
		ServerStyleSheet: Je,
		StyleSheetConsumer: le,
		StyleSheetContext: ue,
		StyleSheetManager: ye,
		ThemeConsumer: Le,
		ThemeContext: Ge,
		ThemeProvider: Fe,
		__PRIVATE__: Ke,
		createGlobalStyle: We,
		css: Ce,
		isStyledComponent: N,
		keyframes: Ue,
		useTheme: Ze,
		version: C,
		withTheme: Xe
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

	const GlobalStyle = We`
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
	  container: defaults => ({ ...defaults,
	    ...containerStyles
	  }),
	  control: (defaults, {
	    isFocused
	  }) => ({ ...defaults,
	    boxShadow: isFocused ? `0 0 0 1px ${borderColor}` : 'none',
	    borderColor: isFocused ? borderColor : 'transparent',
	    background,
	    height: controlHeight,
	    minHeight: controlHeight,
	    ':hover': { ...defaults[':hover'],
	      boxShadow: isFocused ? `0 0 0 1px ${borderColor}` : 'none',
	      borderColor: borderColor
	    }
	  }),
	  placeholder: defaults => ({ ...defaults,
	    color: placeHolderColor
	  }),
	  indicatorSeparator: () => ({
	    display: 'none'
	  }),
	  singleValue: defaults => ({ ...defaults,
	    color: '#f9f9fa',
	    ...singleStyles
	  }),
	  dropdownIndicator: defaults => ({ ...defaults,
	    color: '#6e66a6 !important',
	    padding: '5px'
	  }),
	  menu: defaults => ({ ...defaults,
	    background: menuBackground,
	    ...menuStyles
	  }),
	  valueContainer: defaults => ({ ...defaults,
	    ...valueContainerStyles
	  }),
	  option: (defaults, {
	    isSelected
	  }) => ({ ...defaults,
	    color: '#f9f9fa',
	    background: isSelected ? primaryColor : menuBackground,
	    ':hover': { ...defaults[':hover'],
	      background: primaryColor
	    },
	    ...optionStyles
	  }),
	  input: defaults => ({ ...defaults,
	    color: '#f9f9fa'
	  }),
	  indicatorsContainer: defaults => ({ ...defaults,
	    padding: 0,
	    '> div:nth-of-type(1)': {
	      padding: '0 !important'
	    }
	  })
	});
	const Outer = He.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
	const Inner$1 = He.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #403d4f;
  background: #2d2b37;
`;
	const Title = He.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #403d4f;
`;
	const Rows = He.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0.5rem 1rem;
  font-size: 0.9rem;
  color: #8a879a;
`;
	const Row = He.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
	const Label$1 = He.span`
  align-self: center;
  width: 50%;
  min-width: 50%;
  margin: 0;
`;
	const FormSelect = He.div`
  width: 100%;
`;
	const InputOuter = He.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
	const Input$1 = He.input`
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
	const ButtonOuter = He.div`
  border-top: 1px solid #403d4f;
  padding: 1rem;
`;
	const Button$1 = He.div`
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

	function reducer(state = {}, action) {
	  switch (action.type) {
	    case 'NOTIFICATION_PUSH':
	      return { ...state,
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

	function* saga() {
	  yield takeEvery$1('NOTIFICATION_PUSH', popNotification);
	  yield takeEvery$1('NOTIFICATION_CONFIRMATION', forwardConfirmation);
	}

	const moveup = Ue({
	  from: {
	    transform: 'translateY(15px)'
	  },
	  to: {
	    transform: 'translateY(0px)'
	  }
	});
	const show = Ue({
	  from: {
	    opacity: 0
	  },
	  to: {
	    opacity: 1
	  }
	});
	const slidebg = Ue({
	  from: {
	    backgroundPositionX: '100%'
	  },
	  to: {
	    backgroundPositionX: '0%'
	  }
	});

	const container = () => ({
	  position: 'fixed',
	  bottom: '15px',
	  width: '100%',
	  display: 'flex',
	  justifyContent: 'center',
	  flexDirection: 'column',
	  alignItems: 'center'
	});

	const overlay = () => ({
	  position: 'fixed',
	  top: 0,
	  bottom: 0,
	  left: 0,
	  right: 0,
	  background: 'black',
	  opacity: 0.7,
	  zIndex: 10
	});

	const notification = ({
	  duration
	}) => ({
	  position: 'relative',
	  overflow: 'hidden',
	  margin: '15px 15px 0 15px',
	  display: 'flex',
	  flexDirection: 'column',
	  zIndex: 11,
	  userSelect: 'none',
	  animation: Ce`
    ${moveup} 0.2s ease none, ${show} 0.2s ease none, ${slidebg} ${duration}ms linear none
  `
	});

	const inner = () => ({
	  display: 'flex',
	  minHeight: '30px',
	  zIndex: 13,
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

	const controls = () => ({
	  display: 'flex',
	  zIndex: 13
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
	  width: half ? '50%' : '100%'
	});

	const componentStyles = {
	  container,
	  overlay,
	  notification,
	  inner,
	  icon: icon$1,
	  label,
	  controls,
	  button
	};

	const makeComponent = key => He.div(props => props?.styles?.[key] ? Ce(props.styles[key](componentStyles[key](props), props)) : Ce(componentStyles[key](props)));

	const Container = makeComponent('container');
	const Overlay = makeComponent('overlay');
	const Notification = makeComponent('notification');
	const Inner = makeComponent('inner');
	const Icon = makeComponent('icon');
	const Label = makeComponent('label');
	const Controls = makeComponent('controls');
	const Button = makeComponent('button');

	const createNotificationStyle = (primaryColor = 'black', secondaryColor = 'black', animateBackground = true) => ({ ...componentStyles,
	  button: defaults => ({ ...defaults,
	    boxShadow: `inset 0 0 20px ${secondaryColor}`,
	    [':hover']: {
	      background: secondaryColor
	    }
	  }),
	  notification: (defaults, {
	    timer
	  }) => ({ ...defaults,
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

	/*!
	 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
	 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
	 */

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
	  return Constructor;
	}

	function _defineProperty$2(obj, key, value) {
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

	function _objectSpread(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	    var ownKeys = Object.keys(source);

	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	      }));
	    }

	    ownKeys.forEach(function (key) {
	      _defineProperty$2(target, key, source[key]);
	    });
	  }

	  return target;
	}

	function _slicedToArray$1(arr, i) {
	  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1();
	}

	function _arrayWithHoles$1(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArrayLimit$1(arr, i) {
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

	function _nonIterableRest$1() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance");
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
	var PERFORMANCE = _PERFORMANCE;
	!!WINDOW.document;
	var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
	~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
	var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
	var DEFAULT_FAMILY_PREFIX = 'fa';
	var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
	var DATA_FA_I2SVG = 'data-fa-i2svg';

	(function () {
	  try {
	    return 'production' === 'production';
	  } catch (e) {
	    return false;
	  }
	})();
	var DUOTONE_CLASSES = {
	  GROUP: 'group',
	  SWAP_OPACITY: 'swap-opacity',
	  PRIMARY: 'primary',
	  SECONDARY: 'secondary'
	};
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
	  // For example <script data-search-pseudo-elements src="..."></script>
	  if (val === '') return true;
	  if (val === 'false') return false;
	  if (val === 'true') return true;
	  return val;
	}

	if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
	  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
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
	  familyPrefix: DEFAULT_FAMILY_PREFIX,
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
	};

	var _config = _objectSpread({}, _default, initial);

	if (!_config.autoReplaceSvg) _config.observeMutations = false;

	var config = _objectSpread({}, _config);

	WINDOW.FontAwesomeConfig = config;
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

	typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
	typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
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
	    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
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

	var ALL_SPACE = {
	  x: 0,
	  y: 0,
	  width: '100%',
	  height: '100%'
	};

	function fillBlack(abstract) {
	  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	  if (abstract.attributes && (abstract.attributes.fill || force)) {
	    abstract.attributes.fill = 'black';
	  }

	  return abstract;
	}

	function deGroup(abstract) {
	  if (abstract.tag === 'g') {
	    return abstract.children;
	  } else {
	    return [abstract];
	  }
	}

	function makeIconMasking(_ref) {
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
	    attributes: _objectSpread({}, ALL_SPACE, {
	      fill: 'white'
	    })
	  };
	  var maskInnerGroupChildrenMixin = mainPath.children ? {
	    children: mainPath.children.map(fillBlack)
	  } : {};
	  var maskInnerGroup = {
	    tag: 'g',
	    attributes: _objectSpread({}, trans.inner),
	    children: [fillBlack(_objectSpread({
	      tag: mainPath.tag,
	      attributes: _objectSpread({}, mainPath.attributes, trans.path)
	    }, maskInnerGroupChildrenMixin))]
	  };
	  var maskOuterGroup = {
	    tag: 'g',
	    attributes: _objectSpread({}, trans.outer),
	    children: [maskInnerGroup]
	  };
	  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
	  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
	  var maskTag = {
	    tag: 'mask',
	    attributes: _objectSpread({}, ALL_SPACE, {
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
	    attributes: _objectSpread({
	      fill: 'currentColor',
	      'clip-path': "url(#".concat(clipId, ")"),
	      mask: "url(#".concat(maskId, ")")
	    }, ALL_SPACE)
	  });
	  return {
	    children: children,
	    attributes: attributes
	  };
	}

	function makeIconStandard(_ref) {
	  var children = _ref.children,
	      attributes = _ref.attributes,
	      main = _ref.main,
	      transform = _ref.transform,
	      styles = _ref.styles;
	  var styleString = joinStyles(styles);

	  if (styleString.length > 0) {
	    attributes['style'] = styleString;
	  }

	  if (transformIsMeaningful(transform)) {
	    var trans = transformForSvg({
	      transform: transform,
	      containerWidth: main.width,
	      iconWidth: main.width
	    });
	    children.push({
	      tag: 'g',
	      attributes: _objectSpread({}, trans.outer),
	      children: [{
	        tag: 'g',
	        attributes: _objectSpread({}, trans.inner),
	        children: [{
	          tag: main.icon.tag,
	          children: main.icon.children,
	          attributes: _objectSpread({}, main.icon.attributes, trans.path)
	        }]
	      }]
	    });
	  } else {
	    children.push(main.icon);
	  }

	  return {
	    children: children,
	    attributes: attributes
	  };
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
	    attributes['style'] = joinStyles(_objectSpread({}, styles, {
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
	  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
	  return [{
	    tag: 'svg',
	    attributes: {
	      style: 'display: none;'
	    },
	    children: [{
	      tag: 'symbol',
	      attributes: _objectSpread({}, attributes, {
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
	  var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
	  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
	    return extra.classes.indexOf(c) === -1;
	  }).filter(function (c) {
	    return c !== '' || !!c;
	  }).concat(extra.classes).join(' ');
	  var content = {
	    children: [],
	    attributes: _objectSpread({}, extra.attributes, {
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

	  if (title) content.children.push({
	    tag: 'title',
	    attributes: {
	      id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
	    },
	    children: [title]
	  });

	  var args = _objectSpread({}, content, {
	    prefix: prefix,
	    iconName: iconName,
	    main: main,
	    mask: mask,
	    maskId: maskId,
	    transform: transform,
	    symbol: symbol,
	    styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
	  });

	  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
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

	var noop$1$1 = function noop() {};

	config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
	  mark: noop$1$1,
	  measure: noop$1$1
	};
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

	function defineIcons(prefix, icons) {
	  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var _params$skipHooks = params.skipHooks,
	      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
	  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
	    var icon = icons[iconName];
	    var expanded = !!icon.icon;

	    if (expanded) {
	      acc[icon.iconName] = icon.icon;
	    } else {
	      acc[iconName] = icon;
	    }

	    return acc;
	  }, {});

	  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
	    namespace.hooks.addPack(prefix, normalized);
	  } else {
	    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
	  }
	  /**
	   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
	   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
	   * for `fas` so we'll easy the upgrade process for our users by automatically defining
	   * this as well.
	   */


	  if (prefix === 'fas') {
	    defineIcons('fa', icons);
	  }
	}

	var styles$1 = namespace.styles,
	    shims = namespace.shims;

	var build = function build() {
	  var lookup = function lookup(reducer) {
	    return reduce(styles$1, function (o, style, prefix) {
	      o[prefix] = reduce(style, reducer, {});
	      return o;
	    }, {});
	  };

	  lookup(function (acc, icon, iconName) {
	    if (icon[3]) {
	      acc[icon[3]] = iconName;
	    }

	    return acc;
	  });
	  lookup(function (acc, icon, iconName) {
	    var ligatures = icon[2];
	    acc[iconName] = iconName;
	    ligatures.forEach(function (ligature) {
	      acc[ligature] = iconName;
	    });
	    return acc;
	  });
	  var hasRegular = ('far' in styles$1);
	  reduce(shims, function (acc, shim) {
	    var oldName = shim[0];
	    var prefix = shim[1];
	    var iconName = shim[2];

	    if (prefix === 'far' && !hasRegular) {
	      prefix = 'fas';
	    }

	    acc[oldName] = {
	      prefix: prefix,
	      iconName: iconName
	    };
	    return acc;
	  }, {});
	};

	build();

	namespace.styles;

	function iconFromMapping(mapping, prefix, iconName) {
	  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
	    return {
	      prefix: prefix,
	      iconName: iconName,
	      icon: mapping[prefix][iconName]
	    };
	  }
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

	var parseTransformString = function parseTransformString(transformString) {
	  var transform = {
	    size: 16,
	    x: 0,
	    y: 0,
	    flipX: false,
	    flipY: false,
	    rotate: 0
	  };

	  if (!transformString) {
	    return transform;
	  } else {
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
	  }
	};

	function MissingIcon(error) {
	  this.name = 'MissingIcon';
	  this.message = error || 'Icon unavailable';
	  this.stack = new Error().stack;
	}

	MissingIcon.prototype = Object.create(Error.prototype);
	MissingIcon.prototype.constructor = MissingIcon;
	var FILL = {
	  fill: 'currentColor'
	};
	var ANIMATION_BASE = {
	  attributeType: 'XML',
	  repeatCount: 'indefinite',
	  dur: '2s'
	};
	({
	  tag: 'path',
	  attributes: _objectSpread({}, FILL, {
	    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
	  })
	});

	var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
	  attributeName: 'opacity'
	});

	({
	  tag: 'circle',
	  attributes: _objectSpread({}, FILL, {
	    cx: '256',
	    cy: '364',
	    r: '28'
	  }),
	  children: [{
	    tag: 'animate',
	    attributes: _objectSpread({}, ANIMATION_BASE, {
	      attributeName: 'r',
	      values: '28;14;28;28;14;28;'
	    })
	  }, {
	    tag: 'animate',
	    attributes: _objectSpread({}, OPACITY_ANIMATE, {
	      values: '1;0;1;1;0;1;'
	    })
	  }]
	});
	({
	  tag: 'path',
	  attributes: _objectSpread({}, FILL, {
	    opacity: '1',
	    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
	  }),
	  children: [{
	    tag: 'animate',
	    attributes: _objectSpread({}, OPACITY_ANIMATE, {
	      values: '1;0;0;0;0;1;'
	    })
	  }]
	});
	({
	  tag: 'path',
	  attributes: _objectSpread({}, FILL, {
	    opacity: '0',
	    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
	  }),
	  children: [{
	    tag: 'animate',
	    attributes: _objectSpread({}, OPACITY_ANIMATE, {
	      values: '0;0;1;1;0;0;'
	    })
	  }]
	});
	namespace.styles;

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
	        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
	      },
	      children: [{
	        tag: 'path',
	        attributes: {
	          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
	          fill: 'currentColor',
	          d: vectorData[0]
	        }
	      }, {
	        tag: 'path',
	        attributes: {
	          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
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

	namespace.styles;

	var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

	function css$3() {
	  var dfp = DEFAULT_FAMILY_PREFIX;
	  var drc = DEFAULT_REPLACEMENT_CLASS;
	  var fp = config.familyPrefix;
	  var rc = config.replacementClass;
	  var s = baseStyles;

	  if (fp !== dfp || rc !== drc) {
	    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
	    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
	    var rPatt = new RegExp("\\.".concat(drc), 'g');
	    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
	  }

	  return s;
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
	        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
	        defineIcons(key, additions[key]);
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
	        if (!additions[prefix]) additions[prefix] = {};
	        additions[prefix][iconName] = icon;
	      });
	      return additions;
	    }
	  }]);

	  return Library;
	}();

	function ensureCss() {
	  if (config.autoAddCss && !_cssInserted) {
	    insertCss(css$3());
	    _cssInserted = true;
	  }
	}

	function apiObject(val, abstractCreator) {
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

	function findIconDefinition(iconLookup) {
	  var _iconLookup$prefix = iconLookup.prefix,
	      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
	      iconName = iconLookup.iconName;
	  if (!iconName) return;
	  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
	}

	function resolveIcons(next) {
	  return function (maybeIconDefinition) {
	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
	    var mask = params.mask;

	    if (mask) {
	      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
	    }

	    return next(iconDefinition, _objectSpread({}, params, {
	      mask: mask
	    }));
	  };
	}

	var library = new Library();

	var _cssInserted = false;
	var parse$1 = {
	  transform: function transform(transformString) {
	    return parseTransformString(transformString);
	  }
	};
	var icon = resolveIcons(function (iconDefinition) {
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
	  return apiObject(_objectSpread({
	    type: 'icon'
	  }, iconDefinition), function () {
	    ensureCss();

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
	      transform: _objectSpread({}, meaninglessTransform, transform),
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
	});

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
	} // Get CSS class list from a props object


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
	    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
	    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
	  }, _defineProperty$1(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty$1(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), _defineProperty$1(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty$1(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
	  // return an array of the keys where the value for the key is not null

	  return Object.keys(classes).map(function (key) {
	    return classes[key] ? key : null;
	  }).filter(function (key) {
	    return key;
	  });
	} // Camelize taken from humps
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

	var _excluded$1$2 = ["style"];

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
	      remaining = _objectWithoutProperties$1(extraProps, _excluded$1$2);

	  mixins.attrs['style'] = _objectSpread2$1(_objectSpread2$1({}, mixins.attrs['style']), existingStyle);
	  /* eslint-enable */

	  return createElement.apply(void 0, [element.tag, _objectSpread2$1(_objectSpread2$1({}, mixins.attrs), remaining)].concat(_toConsumableArray$1(children)));
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
	  if (icon && _typeof$1(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
	    return icon;
	  }

	  if (parse$1.icon) {
	    return parse$1.icon(icon);
	  } // if the icon is null, there's nothing to do


	  if (icon === null) {
	    return null;
	  } // if the icon is an object and has a prefix and an icon name, return it


	  if (icon && _typeof$1(icon) === 'object' && icon.prefix && icon.iconName) {
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
	} // creates an object with a key of key
	// and a value of value
	// if certain conditions are met


	function objectWithKey(key, value) {
	  // if the value is a non-empty array
	  // or it's not an array but it is truthy
	  // then create the object with the key and the value
	  // if not, return an empty array
	  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty$1({}, key, value) : {};
	}

	var _excluded$5 = ["forwardedRef"];

	function FontAwesomeIcon(_ref) {
	  var forwardedRef = _ref.forwardedRef,
	      props = _objectWithoutProperties$1(_ref, _excluded$5);

	  var iconArgs = props.icon,
	      maskArgs = props.mask,
	      symbol = props.symbol,
	      className = props.className,
	      title = props.title,
	      titleId = props.titleId,
	      maskId = props.maskId;
	  var iconLookup = normalizeIconArgs(iconArgs);
	  var classes = objectWithKey('classes', [].concat(_toConsumableArray$1(classList(props)), _toConsumableArray$1(className.split(' '))));
	  var transform = objectWithKey('transform', typeof props.transform === 'string' ? parse$1.transform(props.transform) : props.transform);
	  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
	  var renderedIcon = icon(iconLookup, _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, classes), transform), mask), {}, {
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
	    ref: forwardedRef
	  };
	  Object.keys(props).forEach(function (key) {
	    // eslint-disable-next-line no-prototype-builtins
	    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
	      extraProps[key] = props[key];
	    }
	  });
	  return convertCurry(abstract[0], extraProps);
	}

	FontAwesomeIcon.displayName = 'FontAwesomeIcon';
	FontAwesomeIcon.propTypes = {
	  beat: propTypes.exports.bool,
	  border: propTypes.exports.bool,
	  bounce: propTypes.exports.bool,
	  className: propTypes.exports.string,
	  fade: propTypes.exports.bool,
	  flash: propTypes.exports.bool,
	  mask: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.array, propTypes.exports.string]),
	  maskId: propTypes.exports.string,
	  fixedWidth: propTypes.exports.bool,
	  inverse: propTypes.exports.bool,
	  flip: propTypes.exports.oneOf(['horizontal', 'vertical', 'both']),
	  icon: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.array, propTypes.exports.string]),
	  listItem: propTypes.exports.bool,
	  pull: propTypes.exports.oneOf(['right', 'left']),
	  pulse: propTypes.exports.bool,
	  rotation: propTypes.exports.oneOf([0, 90, 180, 270]),
	  shake: propTypes.exports.bool,
	  size: propTypes.exports.oneOf(['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
	  spin: propTypes.exports.bool,
	  spinPulse: propTypes.exports.bool,
	  spinReverse: propTypes.exports.bool,
	  symbol: propTypes.exports.oneOfType([propTypes.exports.bool, propTypes.exports.string]),
	  title: propTypes.exports.string,
	  titleId: propTypes.exports.string,
	  transform: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.object]),
	  swapOpacity: propTypes.exports.bool
	};
	FontAwesomeIcon.defaultProps = {
	  border: false,
	  className: '',
	  mask: null,
	  maskId: null,
	  fixedWidth: false,
	  inverse: false,
	  flip: null,
	  icon: null,
	  listItem: false,
	  pull: null,
	  pulse: false,
	  rotation: null,
	  size: null,
	  spin: false,
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

	var faCheckCircle={prefix:'fas',iconName:'check-circle',icon:[512,512,[],"f058","M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"]};var faExclamationCircle={prefix:'fas',iconName:'exclamation-circle',icon:[512,512,[],"f06a","M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"]};var faTimesCircle={prefix:'fas',iconName:'times-circle',icon:[512,512,[],"f057","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"]};

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

	const NotificationsComponent = ({
	  styles,
	  icons
	}) => {
	  const dispatch = useDispatch();
	  const notifications = useSelector(({
	    notificationReducer
	  }) => Object.values(notificationReducer));

	  const easyDispatch = props => () => {
	    dispatch({
	      type: props.payload ? 'NOTIFICATION_CONFIRMATION' : 'NOTIFICATION_POP',
	      ...props
	    });
	  };

	  const _styles = { ...defaultStyles$1,
	    ...styles
	  };
	  const _icons = { ...defaultIcons,
	    ...icons
	  };
	  const isOverlay = notifications.find(({
	    blocking
	  }) => Boolean(blocking));
	  return /*#__PURE__*/React.createElement(Container, null, isOverlay ? /*#__PURE__*/React.createElement(Overlay, null) : null, notifications.map(({
	    label,
	    id,
	    payload,
	    type,
	    buttons,
	    duration
	  }) => /*#__PURE__*/React.createElement(Notification, {
	    timer: buttons === undefined,
	    key: id,
	    styles: _styles[type],
	    duration: duration
	  }, /*#__PURE__*/React.createElement(Inner, {
	    styles: _styles[type]
	  }, _icons[type] ? /*#__PURE__*/React.createElement(Icon, {
	    styles: _styles[type]
	  }, _icons[type]) : null, /*#__PURE__*/React.createElement(Label, {
	    styles: _styles[type]
	  }, label)), buttons === 'yesNo' ? /*#__PURE__*/React.createElement(Controls, {
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
	  }, "No")) : null, buttons === 'ok' ? /*#__PURE__*/React.createElement(Controls, {
	    styles: _styles[type]
	  }, /*#__PURE__*/React.createElement(Button, {
	    styles: _styles[type],
	    onClick: easyDispatch({
	      id,
	      payload
	    })
	  }, "Ok")) : null)));
	};

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
	  return (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3);
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
	    case 126: // ; { } breakpoint token

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
	  while (--count && next()) // not 0-9 A-F a-f
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
	  while (next()) // //
	  if (type + character === 47 + 10) break; // /*
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
	      if (previous != 108 && characters.charCodeAt(length - 1) == 58) {
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
	          if (property > 0 && strlen(characters) - length) append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
	          break;
	        // @ ;

	        case 59:
	          characters += ';';
	        // { rule/at-rule

	        default:
	          append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
	          if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);else switch (atrule) {
	            // d m s
	            case 100:
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
	 * @param {string} value
	 * @param {number} length
	 * @return {string}
	 */

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
	/**
	 * @param {object} element
	 * @param {number} index
	 * @param {object[]} children
	 * @param {function} callback
	 */

	function prefixer(element, index, children, callback) {
	  if (element.length > -1) if (!element.return) switch (element.type) {
	    case DECLARATION:
	      element.return = prefix(element.value, element.length);
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
	  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
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
	  /* colon */
	  && !fixedElements.get(parent)) {
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

	    if ( // charcode for l
	    value.charCodeAt(0) === 108 && // charcode for b
	    value.charCodeAt(2) === 98) {
	      // this ignores label
	      element["return"] = '';
	      element.value = '';
	    }
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

	  var inserted = {}; // $FlowFixMe

	  var container;
	  var nodesToHydrate = [];
	  {
	    container = options.container || document.head;
	    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
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

	  if ( // we only need to add the styles to the registered cache if the
	  // class name could be used further down
	  // the tree but if it's a string tag, we know it won't
	  // so we don't have to add it to registered cache.
	  // this improves memory usage since we can avoid storing the whole style string
	  (isStringTag === false || // we need to always store it if we're in compat mode and
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
	    k =
	    /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
	    k ^=
	    /* k >>> r: */
	    k >>> 24;
	    h =
	    /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
	    /* Math.imul(h, m): */
	    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Handle the last few bytes of the input array


	  switch (len) {
	    case 3:
	      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

	    case 2:
	      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

	    case 1:
	      h ^= str.charCodeAt(i) & 0xff;
	      h =
	      /* Math.imul(h, m): */
	      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Do a few final mixes of the hash to ensure the last few
	  // bytes are well-incorporated.


	  h ^= h >>> 13;
	  h =
	  /* Math.imul(h, m): */
	  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  return ((h ^ h >>> 15) >>> 0).toString(36);
	}

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
	          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
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
	    identifierName += '-' + // $FlowFixMe we know it's not null
	    match[1];
	  }

	  var name = murmur2(styles) + identifierName;

	  return {
	    name: name,
	    styles: styles,
	    next: cursor
	  };
	};

	var hasOwnProperty = {}.hasOwnProperty;
	var EmotionCacheContext = /* #__PURE__ */react.exports.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
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
	  return /*#__PURE__*/react.exports.forwardRef(function (props, ref) {
	    // the cache will never be null in the browser
	    var cache = react.exports.useContext(EmotionCacheContext);
	    return func(props, cache, ref);
	  });
	};

	var ThemeContext = /* #__PURE__ */react.exports.createContext({});

	var useInsertionEffect = React$1['useInsertion' + 'Effect'] ? React$1['useInsertion' + 'Effect'] : function useInsertionEffect(create) {
	  create();
	};

	function useInsertionEffectMaybe(create) {
	  useInsertionEffect(create);
	}

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

	var Insertion$1 = function Insertion(_ref) {
	  var cache = _ref.cache,
	      serialized = _ref.serialized,
	      isStringTag = _ref.isStringTag;
	  registerStyles(cache, serialized, isStringTag);
	  useInsertionEffectMaybe(function () {
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

	  var serialized = serializeStyles(registeredStyles, undefined, react.exports.useContext(ThemeContext));

	  className += cache.key + "-" + serialized.name;
	  var newProps = {};

	  for (var key in props) {
	    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ('production' === 'production' )) {
	      newProps[key] = props[key];
	    }
	  }

	  newProps.ref = ref;
	  newProps.className = className;
	  return /*#__PURE__*/react.exports.createElement(react.exports.Fragment, null, /*#__PURE__*/react.exports.createElement(Insertion$1, {
	    cache: cache,
	    serialized: serialized,
	    isStringTag: typeof WrappedComponent === 'string'
	  }), /*#__PURE__*/react.exports.createElement(WrappedComponent, newProps));
	});

	var jsx = function jsx(type, props) {
	  var args = arguments;

	  if (props == null || !hasOwnProperty.call(props, 'css')) {
	    // $FlowFixMe
	    return react.exports.createElement.apply(undefined, args);
	  }

	  var argsLength = args.length;
	  var createElementArgArray = new Array(argsLength);
	  createElementArgArray[0] = Emotion;
	  createElementArgArray[1] = createEmotionProps(type, props);

	  for (var i = 2; i < argsLength; i++) {
	    createElementArgArray[i] = args[i];
	  } // $FlowFixMe


	  return react.exports.createElement.apply(null, createElementArgArray);
	};

	React$1['useInsertion' + 'Effect'] ? React$1['useInsertion' + 'Effect'] : react.exports.useLayoutEffect;

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

	var classnames = function classnames(args) {
	  var len = args.length;
	  var i = 0;
	  var cls = '';

	  for (; i < len; i++) {
	    var arg = args[i];
	    if (arg == null) continue;
	    var toAdd = void 0;

	    switch (typeof arg) {
	      case 'boolean':
	        break;

	      case 'object':
	        {
	          if (Array.isArray(arg)) {
	            toAdd = classnames(arg);
	          } else {

	            toAdd = '';

	            for (var k in arg) {
	              if (arg[k] && k) {
	                toAdd && (toAdd += ' ');
	                toAdd += k;
	              }
	            }
	          }

	          break;
	        }

	      default:
	        {
	          toAdd = arg;
	        }
	    }

	    if (toAdd) {
	      cls && (cls += ' ');
	      cls += toAdd;
	    }
	  }

	  return cls;
	};

	function merge(registered, css, className) {
	  var registeredStyles = [];
	  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

	  if (registeredStyles.length < 2) {
	    return className;
	  }

	  return rawClassName + css(registeredStyles);
	}

	var Insertion = function Insertion(_ref) {
	  var cache = _ref.cache,
	      serializedArr = _ref.serializedArr;
	  useInsertionEffectMaybe(function () {
	    for (var i = 0; i < serializedArr.length; i++) {
	      insertStyles(cache, serializedArr[i], false);
	    }
	  });
	  return null;
	};

	var ClassNames = /* #__PURE__ */withEmotionCache(function (props, cache) {
	  var hasRendered = false;
	  var serializedArr = [];

	  var css = function css() {
	    if (hasRendered && 'production' !== 'production') {
	      throw new Error('css can only be used during render');
	    }

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var serialized = serializeStyles(args, cache.registered);
	    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

	    registerStyles(cache, serialized, false);
	    return cache.key + "-" + serialized.name;
	  };

	  var cx = function cx() {
	    if (hasRendered && 'production' !== 'production') {
	      throw new Error('cx can only be used during render');
	    }

	    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return merge(cache.registered, css, classnames(args));
	  };

	  var content = {
	    css: css,
	    cx: cx,
	    theme: react.exports.useContext(ThemeContext)
	  };
	  var ele = props.children(content);
	  hasRendered = true;
	  return /*#__PURE__*/react.exports.createElement(react.exports.Fragment, null, /*#__PURE__*/react.exports.createElement(Insertion, {
	    cache: cache,
	    serializedArr: serializedArr
	  }), ele);
	});

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

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
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

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

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

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof(obj);
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
	    Object.defineProperty(target, descriptor.key, descriptor);
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
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
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

	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);

	    if (enumerableOnly) {
	      symbols = symbols.filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	      });
	    }

	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys(Object(source), true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
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
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
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

	var _excluded$3 = ["className", "clearValue", "cx", "getStyles", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"]; // ==============================
	// NO OP
	// ==============================

	var noop = function noop() {}; // Class Name Prefixer
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

	function classNames(prefix, state, className) {
	  var arr = [className];

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
	} // ==============================
	// Clean Value
	// ==============================


	var cleanValue = function cleanValue(value) {
	  if (isArray(value)) return value.filter(Boolean);
	  if (_typeof(value) === 'object' && value !== null) return [value];
	  return [];
	}; // ==============================
	// Clean Common Props
	// ==============================


	var cleanCommonProps = function cleanCommonProps(props) {
	  //className
	  props.className;
	  props.clearValue;
	  props.cx;
	  props.getStyles;
	  props.getValue;
	  props.hasValue;
	  props.isMulti;
	  props.isRtl;
	  props.options;
	  props.selectOption;
	  props.selectProps;
	  props.setValue;
	  props.theme;

	  var innerProps = _objectWithoutProperties(props, _excluded$3);

	  return _objectSpread2({}, innerProps);
	}; // ==============================
	// Scroll Helpers
	// ==============================


	function isDocumentElement(el) {
	  return [document.documentElement, document.body, window].indexOf(el) > -1;
	} // Normalized Scroll Top
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
	} // Get Scroll Parent
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
	} // Animated Scroll To
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
	} // Scroll Into View
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
	} // ==============================
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
	} // Touch Capability Detector
	// ==============================


	function isTouchCapable() {
	  try {
	    document.createEvent('TouchEvent');
	    return true;
	  } catch (e) {
	    return false;
	  }
	} // ==============================
	// Mobile Device Detector
	// ==============================


	function isMobileDevice() {
	  try {
	    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	  } catch (e) {
	    return false;
	  }
	} // ==============================
	// Passive Event Detector
	// ==============================
	// https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36


	var passiveOptionAccessed = false;
	var options = {
	  get passive() {
	    return passiveOptionAccessed = true;
	  }

	}; // check for SSR

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
	  for (var _len = arguments.length, properties = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    properties[_key - 1] = arguments[_key];
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

	function getMenuPlacement(_ref) {
	  var maxHeight = _ref.maxHeight,
	      menuEl = _ref.menuEl,
	      minHeight = _ref.minHeight,
	      placement = _ref.placement,
	      shouldScroll = _ref.shouldScroll,
	      isFixedPosition = _ref.isFixedPosition,
	      theme = _ref.theme;
	  var spacing = theme.spacing;
	  var scrollParent = getScrollParent(menuEl);
	  var defaultState = {
	    placement: 'bottom',
	    maxHeight: maxHeight
	  }; // something went wrong, return default state

	  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
	  // the menu is rendered

	  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
	      scrollHeight = _scrollParent$getBoun.height;

	  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
	      menuBottom = _menuEl$getBoundingCl.bottom,
	      menuHeight = _menuEl$getBoundingCl.height,
	      menuTop = _menuEl$getBoundingCl.top;

	  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
	      containerTop = _menuEl$offsetParent$.top;

	  var viewHeight = window.innerHeight;
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

	  switch (placement) {
	    case 'auto':
	    case 'bottom':
	      // 1: the menu will fit, do nothing
	      if (viewSpaceBelow >= menuHeight) {
	        return {
	          placement: 'bottom',
	          maxHeight: maxHeight
	        };
	      } // 2: the menu will fit, if scrolled


	      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
	        if (shouldScroll) {
	          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
	        }

	        return {
	          placement: 'bottom',
	          maxHeight: maxHeight
	        };
	      } // 3: the menu will fit, if constrained


	      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
	        if (shouldScroll) {
	          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
	        } // we want to provide as much of the menu as possible to the user,
	        // so give them whatever is available below rather than the minHeight.


	        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
	        return {
	          placement: 'bottom',
	          maxHeight: constrainedHeight
	        };
	      } // 4. Forked beviour when there isn't enough space below
	      // AUTO: flip the menu, render above


	      if (placement === 'auto' || isFixedPosition) {
	        // may need to be constrained after flipping
	        var _constrainedHeight = maxHeight;
	        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

	        if (spaceAbove >= minHeight) {
	          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
	        }

	        return {
	          placement: 'top',
	          maxHeight: _constrainedHeight
	        };
	      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


	      if (placement === 'bottom') {
	        if (shouldScroll) {
	          scrollTo(scrollParent, scrollDown);
	        }

	        return {
	          placement: 'bottom',
	          maxHeight: maxHeight
	        };
	      }

	      break;

	    case 'top':
	      // 1: the menu will fit, do nothing
	      if (viewSpaceAbove >= menuHeight) {
	        return {
	          placement: 'top',
	          maxHeight: maxHeight
	        };
	      } // 2: the menu will fit, if scrolled


	      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
	        if (shouldScroll) {
	          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
	        }

	        return {
	          placement: 'top',
	          maxHeight: maxHeight
	        };
	      } // 3: the menu will fit, if constrained


	      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
	        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
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
	      } // 4. not enough space, the browser WILL NOT increase scrollable area when
	      // absolutely positioned element rendered above the viewport (only below).
	      // Flip the menu, render below


	      return {
	        placement: 'bottom',
	        maxHeight: maxHeight
	      };

	    default:
	      throw new Error("Invalid placement provided \"".concat(placement, "\"."));
	  }

	  return defaultState;
	} // Menu Component
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

	var menuCSS = function menuCSS(_ref2) {
	  var _ref3;

	  var placement = _ref2.placement,
	      _ref2$theme = _ref2.theme,
	      borderRadius = _ref2$theme.borderRadius,
	      spacing = _ref2$theme.spacing,
	      colors = _ref2$theme.colors;
	  return _ref3 = {
	    label: 'menu'
	  }, _defineProperty$3(_ref3, alignToControl(placement), '100%'), _defineProperty$3(_ref3, "backgroundColor", colors.neutral0), _defineProperty$3(_ref3, "borderRadius", borderRadius), _defineProperty$3(_ref3, "boxShadow", '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), _defineProperty$3(_ref3, "marginBottom", spacing.menuGutter), _defineProperty$3(_ref3, "marginTop", spacing.menuGutter), _defineProperty$3(_ref3, "position", 'absolute'), _defineProperty$3(_ref3, "width", '100%'), _defineProperty$3(_ref3, "zIndex", 1), _ref3;
	};

	var PortalPlacementContext = /*#__PURE__*/react.exports.createContext({
	  getPortalPlacement: null
	}); // NOTE: internal only

	var MenuPlacer = /*#__PURE__*/function (_Component) {
	  _inherits(MenuPlacer, _Component);

	  var _super = _createSuper(MenuPlacer);

	  function MenuPlacer() {
	    var _this;

	    _classCallCheck(this, MenuPlacer);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _super.call.apply(_super, [this].concat(args));
	    _this.state = {
	      maxHeight: _this.props.maxMenuHeight,
	      placement: null
	    };
	    _this.context = void 0;

	    _this.getPlacement = function (ref) {
	      var _this$props = _this.props,
	          minMenuHeight = _this$props.minMenuHeight,
	          maxMenuHeight = _this$props.maxMenuHeight,
	          menuPlacement = _this$props.menuPlacement,
	          menuPosition = _this$props.menuPosition,
	          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
	          theme = _this$props.theme;
	      if (!ref) return; // DO NOT scroll if position is fixed

	      var isFixedPosition = menuPosition === 'fixed';
	      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
	      var state = getMenuPlacement({
	        maxHeight: maxMenuHeight,
	        menuEl: ref,
	        minHeight: minMenuHeight,
	        placement: menuPlacement,
	        shouldScroll: shouldScroll,
	        isFixedPosition: isFixedPosition,
	        theme: theme
	      });
	      var getPortalPlacement = _this.context.getPortalPlacement;
	      if (getPortalPlacement) getPortalPlacement(state);

	      _this.setState(state);
	    };

	    _this.getUpdatedProps = function () {
	      var menuPlacement = _this.props.menuPlacement;
	      var placement = _this.state.placement || coercePlacement(menuPlacement);
	      return _objectSpread2(_objectSpread2({}, _this.props), {}, {
	        placement: placement,
	        maxHeight: _this.state.maxHeight
	      });
	    };

	    return _this;
	  }

	  _createClass(MenuPlacer, [{
	    key: "render",
	    value: function render() {
	      var children = this.props.children;
	      return children({
	        ref: this.getPlacement,
	        placerProps: this.getUpdatedProps()
	      });
	    }
	  }]);

	  return MenuPlacer;
	}(react.exports.Component);

	MenuPlacer.contextType = PortalPlacementContext;

	var Menu = function Menu(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerRef = props.innerRef,
	      innerProps = props.innerProps;
	  return jsx("div", _extends({
	    css: getStyles('menu', props),
	    className: cx({
	      menu: true
	    }, className),
	    ref: innerRef
	  }, innerProps), children);
	}; // Menu List
	// ==============================


	var menuListCSS = function menuListCSS(_ref4) {
	  var maxHeight = _ref4.maxHeight,
	      baseUnit = _ref4.theme.spacing.baseUnit;
	  return {
	    maxHeight: maxHeight,
	    overflowY: 'auto',
	    paddingBottom: baseUnit,
	    paddingTop: baseUnit,
	    position: 'relative',
	    // required for offset[Height, Top] > keyboard scroll
	    WebkitOverflowScrolling: 'touch'
	  };
	};

	var MenuList = function MenuList(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps,
	      innerRef = props.innerRef,
	      isMulti = props.isMulti;
	  return jsx("div", _extends({
	    css: getStyles('menuList', props),
	    className: cx({
	      'menu-list': true,
	      'menu-list--is-multi': isMulti
	    }, className),
	    ref: innerRef
	  }, innerProps), children);
	}; // ==============================
	// Menu Notices
	// ==============================


	var noticeCSS = function noticeCSS(_ref5) {
	  var _ref5$theme = _ref5.theme,
	      baseUnit = _ref5$theme.spacing.baseUnit,
	      colors = _ref5$theme.colors;
	  return {
	    color: colors.neutral40,
	    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
	    textAlign: 'center'
	  };
	};

	var noOptionsMessageCSS = noticeCSS;
	var loadingMessageCSS = noticeCSS;

	var NoOptionsMessage = function NoOptionsMessage(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps;
	  return jsx("div", _extends({
	    css: getStyles('noOptionsMessage', props),
	    className: cx({
	      'menu-notice': true,
	      'menu-notice--no-options': true
	    }, className)
	  }, innerProps), children);
	};

	NoOptionsMessage.defaultProps = {
	  children: 'No options'
	};

	var LoadingMessage = function LoadingMessage(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps;
	  return jsx("div", _extends({
	    css: getStyles('loadingMessage', props),
	    className: cx({
	      'menu-notice': true,
	      'menu-notice--loading': true
	    }, className)
	  }, innerProps), children);
	};

	LoadingMessage.defaultProps = {
	  children: 'Loading...'
	}; // ==============================
	// Menu Portal
	// ==============================

	var menuPortalCSS = function menuPortalCSS(_ref6) {
	  var rect = _ref6.rect,
	      offset = _ref6.offset,
	      position = _ref6.position;
	  return {
	    left: rect.left,
	    position: position,
	    top: offset,
	    width: rect.width,
	    zIndex: 1
	  };
	};

	var MenuPortal = /*#__PURE__*/function (_Component2) {
	  _inherits(MenuPortal, _Component2);

	  var _super2 = _createSuper(MenuPortal);

	  function MenuPortal() {
	    var _this2;

	    _classCallCheck(this, MenuPortal);

	    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    _this2 = _super2.call.apply(_super2, [this].concat(args));
	    _this2.state = {
	      placement: null
	    };

	    _this2.getPortalPlacement = function (_ref7) {
	      var placement = _ref7.placement;
	      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

	      if (placement !== initialPlacement) {
	        _this2.setState({
	          placement: placement
	        });
	      }
	    };

	    return _this2;
	  }

	  _createClass(MenuPortal, [{
	    key: "render",
	    value: function render() {
	      var _this$props2 = this.props,
	          appendTo = _this$props2.appendTo,
	          children = _this$props2.children,
	          className = _this$props2.className,
	          controlElement = _this$props2.controlElement,
	          cx = _this$props2.cx,
	          innerProps = _this$props2.innerProps,
	          menuPlacement = _this$props2.menuPlacement,
	          position = _this$props2.menuPosition,
	          getStyles = _this$props2.getStyles;
	      var isFixed = position === 'fixed'; // bail early if required elements aren't present

	      if (!appendTo && !isFixed || !controlElement) {
	        return null;
	      }

	      var placement = this.state.placement || coercePlacement(menuPlacement);
	      var rect = getBoundingClientObj(controlElement);
	      var scrollDistance = isFixed ? 0 : window.pageYOffset;
	      var offset = rect[placement] + scrollDistance;
	      var state = {
	        offset: offset,
	        position: position,
	        rect: rect
	      }; // same wrapper element whether fixed or portalled

	      var menuWrapper = jsx("div", _extends({
	        css: getStyles('menuPortal', state),
	        className: cx({
	          'menu-portal': true
	        }, className)
	      }, innerProps), children);
	      return jsx(PortalPlacementContext.Provider, {
	        value: {
	          getPortalPlacement: this.getPortalPlacement
	        }
	      }, appendTo ? /*#__PURE__*/reactDom.exports.createPortal(menuWrapper, appendTo) : menuWrapper);
	    }
	  }]);

	  return MenuPortal;
	}(react.exports.Component);

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
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps,
	      isDisabled = props.isDisabled,
	      isRtl = props.isRtl;
	  return jsx("div", _extends({
	    css: getStyles('container', props),
	    className: cx({
	      '--is-disabled': isDisabled,
	      '--is-rtl': isRtl
	    }, className)
	  }, innerProps), children);
	}; // ==============================
	// Value Container
	// ==============================


	var valueContainerCSS = function valueContainerCSS(_ref2) {
	  var spacing = _ref2.theme.spacing,
	      isMulti = _ref2.isMulti,
	      hasValue = _ref2.hasValue,
	      controlShouldRenderValue = _ref2.selectProps.controlShouldRenderValue;
	  return {
	    alignItems: 'center',
	    display: isMulti && hasValue && controlShouldRenderValue ? 'flex' : 'grid',
	    flex: 1,
	    flexWrap: 'wrap',
	    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
	    WebkitOverflowScrolling: 'touch',
	    position: 'relative',
	    overflow: 'hidden'
	  };
	};

	var ValueContainer = function ValueContainer(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      innerProps = props.innerProps,
	      isMulti = props.isMulti,
	      getStyles = props.getStyles,
	      hasValue = props.hasValue;
	  return jsx("div", _extends({
	    css: getStyles('valueContainer', props),
	    className: cx({
	      'value-container': true,
	      'value-container--is-multi': isMulti,
	      'value-container--has-value': hasValue
	    }, className)
	  }, innerProps), children);
	}; // ==============================
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
	      className = props.className,
	      cx = props.cx,
	      innerProps = props.innerProps,
	      getStyles = props.getStyles;
	  return jsx("div", _extends({
	    css: getStyles('indicatorsContainer', props),
	    className: cx({
	      indicators: true
	    }, className)
	  }, innerProps), children);
	};

	var _templateObject;

	var _excluded$2 = ["size"];

	var _ref2$1 = {
	  name: "8mmkcg",
	  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
	} ; // ==============================
	// Dropdown & Clear Icons
	// ==============================


	var Svg = function Svg(_ref) {
	  var size = _ref.size,
	      props = _objectWithoutProperties(_ref, _excluded$2);

	  return jsx("svg", _extends({
	    height: size,
	    width: size,
	    viewBox: "0 0 20 20",
	    "aria-hidden": "true",
	    focusable: "false",
	    css: _ref2$1
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
	}; // ==============================
	// Dropdown & Clear Buttons
	// ==============================


	var baseCSS = function baseCSS(_ref3) {
	  var isFocused = _ref3.isFocused,
	      _ref3$theme = _ref3.theme,
	      baseUnit = _ref3$theme.spacing.baseUnit,
	      colors = _ref3$theme.colors;
	  return {
	    label: 'indicatorContainer',
	    color: isFocused ? colors.neutral60 : colors.neutral20,
	    display: 'flex',
	    padding: baseUnit * 2,
	    transition: 'color 150ms',
	    ':hover': {
	      color: isFocused ? colors.neutral80 : colors.neutral40
	    }
	  };
	};

	var dropdownIndicatorCSS = baseCSS;

	var DropdownIndicator = function DropdownIndicator(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps;
	  return jsx("div", _extends({
	    css: getStyles('dropdownIndicator', props),
	    className: cx({
	      indicator: true,
	      'dropdown-indicator': true
	    }, className)
	  }, innerProps), children || jsx(DownChevron, null));
	};

	var clearIndicatorCSS = baseCSS;

	var ClearIndicator = function ClearIndicator(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps;
	  return jsx("div", _extends({
	    css: getStyles('clearIndicator', props),
	    className: cx({
	      indicator: true,
	      'clear-indicator': true
	    }, className)
	  }, innerProps), children || jsx(CrossIcon, null));
	}; // ==============================
	// Separator
	// ==============================


	var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
	  var isDisabled = _ref4.isDisabled,
	      _ref4$theme = _ref4.theme,
	      baseUnit = _ref4$theme.spacing.baseUnit,
	      colors = _ref4$theme.colors;
	  return {
	    label: 'indicatorSeparator',
	    alignSelf: 'stretch',
	    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
	    marginBottom: baseUnit * 2,
	    marginTop: baseUnit * 2,
	    width: 1
	  };
	};

	var IndicatorSeparator = function IndicatorSeparator(props) {
	  var className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps;
	  return jsx("span", _extends({}, innerProps, {
	    css: getStyles('indicatorSeparator', props),
	    className: cx({
	      'indicator-separator': true
	    }, className)
	  }));
	}; // ==============================
	// Loading
	// ==============================


	var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));

	var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
	  var isFocused = _ref5.isFocused,
	      size = _ref5.size,
	      _ref5$theme = _ref5.theme,
	      colors = _ref5$theme.colors,
	      baseUnit = _ref5$theme.spacing.baseUnit;
	  return {
	    label: 'loadingIndicator',
	    color: isFocused ? colors.neutral60 : colors.neutral20,
	    display: 'flex',
	    padding: baseUnit * 2,
	    transition: 'color 150ms',
	    alignSelf: 'center',
	    fontSize: size,
	    lineHeight: 1,
	    marginRight: size,
	    textAlign: 'center',
	    verticalAlign: 'middle'
	  };
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

	var LoadingIndicator = function LoadingIndicator(props) {
	  var className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps,
	      isRtl = props.isRtl;
	  return jsx("div", _extends({
	    css: getStyles('loadingIndicator', props),
	    className: cx({
	      indicator: true,
	      'loading-indicator': true
	    }, className)
	  }, innerProps), jsx(LoadingDot, {
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

	LoadingIndicator.defaultProps = {
	  size: 4
	};

	var css$1 = function css(_ref) {
	  var isDisabled = _ref.isDisabled,
	      isFocused = _ref.isFocused,
	      _ref$theme = _ref.theme,
	      colors = _ref$theme.colors,
	      borderRadius = _ref$theme.borderRadius,
	      spacing = _ref$theme.spacing;
	  return {
	    label: 'control',
	    alignItems: 'center',
	    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
	    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
	    borderRadius: borderRadius,
	    borderStyle: 'solid',
	    borderWidth: 1,
	    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : undefined,
	    cursor: 'default',
	    display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'space-between',
	    minHeight: spacing.controlHeight,
	    outline: '0 !important',
	    position: 'relative',
	    transition: 'all 100ms',
	    '&:hover': {
	      borderColor: isFocused ? colors.primary : colors.neutral30
	    }
	  };
	};

	var Control = function Control(props) {
	  var children = props.children,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      className = props.className,
	      isDisabled = props.isDisabled,
	      isFocused = props.isFocused,
	      innerRef = props.innerRef,
	      innerProps = props.innerProps,
	      menuIsOpen = props.menuIsOpen;
	  return jsx("div", _extends({
	    ref: innerRef,
	    css: getStyles('control', props),
	    className: cx({
	      control: true,
	      'control--is-disabled': isDisabled,
	      'control--is-focused': isFocused,
	      'control--menu-is-open': menuIsOpen
	    }, className)
	  }, innerProps), children);
	};

	var _excluded$1$1 = ["data"];

	var groupCSS = function groupCSS(_ref) {
	  var spacing = _ref.theme.spacing;
	  return {
	    paddingBottom: spacing.baseUnit * 2,
	    paddingTop: spacing.baseUnit * 2
	  };
	};

	var Group = function Group(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      Heading = props.Heading,
	      headingProps = props.headingProps,
	      innerProps = props.innerProps,
	      label = props.label,
	      theme = props.theme,
	      selectProps = props.selectProps;
	  return jsx("div", _extends({
	    css: getStyles('group', props),
	    className: cx({
	      group: true
	    }, className)
	  }, innerProps), jsx(Heading, _extends({}, headingProps, {
	    selectProps: selectProps,
	    theme: theme,
	    getStyles: getStyles,
	    cx: cx
	  }), label), jsx("div", null, children));
	};

	var groupHeadingCSS = function groupHeadingCSS(_ref2) {
	  var spacing = _ref2.theme.spacing;
	  return {
	    label: 'group',
	    color: '#999',
	    cursor: 'default',
	    display: 'block',
	    fontSize: '75%',
	    fontWeight: 500,
	    marginBottom: '0.25em',
	    paddingLeft: spacing.baseUnit * 3,
	    paddingRight: spacing.baseUnit * 3,
	    textTransform: 'uppercase'
	  };
	};

	var GroupHeading = function GroupHeading(props) {
	  var getStyles = props.getStyles,
	      cx = props.cx,
	      className = props.className;

	  var _cleanCommonProps = cleanCommonProps(props);

	  _cleanCommonProps.data;

	  var innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$1$1);

	  return jsx("div", _extends({
	    css: getStyles('groupHeading', props),
	    className: cx({
	      'group-heading': true
	    }, className)
	  }, innerProps));
	};

	var _excluded$4 = ["innerRef", "isDisabled", "isHidden", "inputClassName"];

	var inputCSS = function inputCSS(_ref) {
	  var isDisabled = _ref.isDisabled,
	      value = _ref.value,
	      _ref$theme = _ref.theme,
	      spacing = _ref$theme.spacing,
	      colors = _ref$theme.colors;
	  return _objectSpread2({
	    margin: spacing.baseUnit / 2,
	    paddingBottom: spacing.baseUnit / 2,
	    paddingTop: spacing.baseUnit / 2,
	    visibility: isDisabled ? 'hidden' : 'visible',
	    color: colors.neutral80,
	    // force css to recompute when value change due to @emotion bug.
	    // We can remove it whenever the bug is fixed.
	    transform: value ? 'translateZ(0)' : ''
	  }, containerStyle);
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
	  '&:after': _objectSpread2({
	    content: 'attr(data-value) " "',
	    visibility: 'hidden',
	    whiteSpace: 'pre'
	  }, spacingStyle)
	};

	var inputStyle = function inputStyle(isHidden) {
	  return _objectSpread2({
	    label: 'input',
	    color: 'inherit',
	    background: 0,
	    opacity: isHidden ? 0 : 1,
	    width: '100%'
	  }, spacingStyle);
	};

	var Input = function Input(props) {
	  var className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      value = props.value;

	  var _cleanCommonProps = cleanCommonProps(props),
	      innerRef = _cleanCommonProps.innerRef,
	      isDisabled = _cleanCommonProps.isDisabled,
	      isHidden = _cleanCommonProps.isHidden,
	      inputClassName = _cleanCommonProps.inputClassName,
	      innerProps = _objectWithoutProperties(_cleanCommonProps, _excluded$4);

	  return jsx("div", {
	    className: cx({
	      'input-container': true
	    }, className),
	    css: getStyles('input', props),
	    "data-value": value || ''
	  }, jsx("input", _extends({
	    className: cx({
	      input: true
	    }, inputClassName),
	    ref: innerRef,
	    style: inputStyle(isHidden),
	    disabled: isDisabled
	  }, innerProps)));
	};

	var multiValueCSS = function multiValueCSS(_ref) {
	  var _ref$theme = _ref.theme,
	      spacing = _ref$theme.spacing,
	      borderRadius = _ref$theme.borderRadius,
	      colors = _ref$theme.colors;
	  return {
	    label: 'multiValue',
	    backgroundColor: colors.neutral10,
	    borderRadius: borderRadius / 2,
	    display: 'flex',
	    margin: spacing.baseUnit / 2,
	    minWidth: 0 // resolves flex/text-overflow bug

	  };
	};

	var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
	  var _ref2$theme = _ref2.theme,
	      borderRadius = _ref2$theme.borderRadius,
	      colors = _ref2$theme.colors,
	      cropWithEllipsis = _ref2.cropWithEllipsis;
	  return {
	    borderRadius: borderRadius / 2,
	    color: colors.neutral80,
	    fontSize: '85%',
	    overflow: 'hidden',
	    padding: 3,
	    paddingLeft: 6,
	    textOverflow: cropWithEllipsis || cropWithEllipsis === undefined ? 'ellipsis' : undefined,
	    whiteSpace: 'nowrap'
	  };
	};

	var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
	  var _ref3$theme = _ref3.theme,
	      spacing = _ref3$theme.spacing,
	      borderRadius = _ref3$theme.borderRadius,
	      colors = _ref3$theme.colors,
	      isFocused = _ref3.isFocused;
	  return {
	    alignItems: 'center',
	    borderRadius: borderRadius / 2,
	    backgroundColor: isFocused ? colors.dangerLight : undefined,
	    display: 'flex',
	    paddingLeft: spacing.baseUnit,
	    paddingRight: spacing.baseUnit,
	    ':hover': {
	      backgroundColor: colors.dangerLight,
	      color: colors.danger
	    }
	  };
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
	      className = props.className,
	      components = props.components,
	      cx = props.cx,
	      data = props.data,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps,
	      isDisabled = props.isDisabled,
	      removeProps = props.removeProps,
	      selectProps = props.selectProps;
	  var Container = components.Container,
	      Label = components.Label,
	      Remove = components.Remove;
	  return jsx(ClassNames, null, function (_ref6) {
	    var css = _ref6.css,
	        emotionCx = _ref6.cx;
	    return jsx(Container, {
	      data: data,
	      innerProps: _objectSpread2({
	        className: emotionCx(css(getStyles('multiValue', props)), cx({
	          'multi-value': true,
	          'multi-value--is-disabled': isDisabled
	        }, className))
	      }, innerProps),
	      selectProps: selectProps
	    }, jsx(Label, {
	      data: data,
	      innerProps: {
	        className: emotionCx(css(getStyles('multiValueLabel', props)), cx({
	          'multi-value__label': true
	        }, className))
	      },
	      selectProps: selectProps
	    }, children), jsx(Remove, {
	      data: data,
	      innerProps: _objectSpread2({
	        className: emotionCx(css(getStyles('multiValueRemove', props)), cx({
	          'multi-value__remove': true
	        }, className)),
	        'aria-label': "Remove ".concat(children || 'option')
	      }, removeProps),
	      selectProps: selectProps
	    }));
	  });
	};

	var optionCSS = function optionCSS(_ref) {
	  var isDisabled = _ref.isDisabled,
	      isFocused = _ref.isFocused,
	      isSelected = _ref.isSelected,
	      _ref$theme = _ref.theme,
	      spacing = _ref$theme.spacing,
	      colors = _ref$theme.colors;
	  return {
	    label: 'option',
	    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
	    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
	    cursor: 'default',
	    display: 'block',
	    fontSize: 'inherit',
	    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
	    width: '100%',
	    userSelect: 'none',
	    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
	    // provide some affordance on touch devices
	    ':active': {
	      backgroundColor: !isDisabled ? isSelected ? colors.primary : colors.primary50 : undefined
	    }
	  };
	};

	var Option = function Option(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      isDisabled = props.isDisabled,
	      isFocused = props.isFocused,
	      isSelected = props.isSelected,
	      innerRef = props.innerRef,
	      innerProps = props.innerProps;
	  return jsx("div", _extends({
	    css: getStyles('option', props),
	    className: cx({
	      option: true,
	      'option--is-disabled': isDisabled,
	      'option--is-focused': isFocused,
	      'option--is-selected': isSelected
	    }, className),
	    ref: innerRef,
	    "aria-disabled": isDisabled
	  }, innerProps), children);
	};

	var placeholderCSS = function placeholderCSS(_ref) {
	  var _ref$theme = _ref.theme,
	      spacing = _ref$theme.spacing,
	      colors = _ref$theme.colors;
	  return {
	    label: 'placeholder',
	    color: colors.neutral50,
	    gridArea: '1 / 1 / 2 / 3',
	    marginLeft: spacing.baseUnit / 2,
	    marginRight: spacing.baseUnit / 2
	  };
	};

	var Placeholder = function Placeholder(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      innerProps = props.innerProps;
	  return jsx("div", _extends({
	    css: getStyles('placeholder', props),
	    className: cx({
	      placeholder: true
	    }, className)
	  }, innerProps), children);
	};

	var css = function css(_ref) {
	  var isDisabled = _ref.isDisabled,
	      _ref$theme = _ref.theme,
	      spacing = _ref$theme.spacing,
	      colors = _ref$theme.colors;
	  return {
	    label: 'singleValue',
	    color: isDisabled ? colors.neutral40 : colors.neutral80,
	    gridArea: '1 / 1 / 2 / 3',
	    marginLeft: spacing.baseUnit / 2,
	    marginRight: spacing.baseUnit / 2,
	    maxWidth: '100%',
	    overflow: 'hidden',
	    textOverflow: 'ellipsis',
	    whiteSpace: 'nowrap'
	  };
	};

	var SingleValue = function SingleValue(props) {
	  var children = props.children,
	      className = props.className,
	      cx = props.cx,
	      getStyles = props.getStyles,
	      isDisabled = props.isDisabled,
	      innerProps = props.innerProps;
	  return jsx("div", _extends({
	    css: getStyles('singleValue', props),
	    className: cx({
	      'single-value': true,
	      'single-value--is-disabled': isDisabled
	    }, className)
	  }, innerProps), children);
	};

	var components = {
	  ClearIndicator: ClearIndicator,
	  Control: Control,
	  DropdownIndicator: DropdownIndicator,
	  DownChevron: DownChevron,
	  CrossIcon: CrossIcon,
	  Group: Group,
	  GroupHeading: GroupHeading,
	  IndicatorsContainer: IndicatorsContainer,
	  IndicatorSeparator: IndicatorSeparator,
	  Input: Input,
	  LoadingIndicator: LoadingIndicator,
	  Menu: Menu,
	  MenuList: MenuList,
	  MenuPortal: MenuPortal,
	  LoadingMessage: LoadingMessage,
	  NoOptionsMessage: NoOptionsMessage,
	  MultiValue: MultiValue,
	  MultiValueContainer: MultiValueContainer,
	  MultiValueLabel: MultiValueLabel,
	  MultiValueRemove: MultiValueRemove,
	  Option: Option,
	  Placeholder: Placeholder,
	  SelectContainer: SelectContainer,
	  SingleValue: SingleValue,
	  ValueContainer: ValueContainer
	};

	var defaultComponents = function defaultComponents(props) {
	  return _objectSpread2(_objectSpread2({}, components), props.components);
	};

	var _excluded$1 = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];

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
	      restSelectProps = _objectWithoutProperties(_ref, _excluded$1);

	  var _useState = react.exports.useState(propsInputValue !== undefined ? propsInputValue : defaultInputValue),
	      _useState2 = _slicedToArray(_useState, 2),
	      stateInputValue = _useState2[0],
	      setStateInputValue = _useState2[1];

	  var _useState3 = react.exports.useState(propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen),
	      _useState4 = _slicedToArray(_useState3, 2),
	      stateMenuIsOpen = _useState4[0],
	      setStateMenuIsOpen = _useState4[1];

	  var _useState5 = react.exports.useState(propsValue !== undefined ? propsValue : defaultValue),
	      _useState6 = _slicedToArray(_useState5, 2),
	      stateValue = _useState6[0],
	      setStateValue = _useState6[1];

	  var onChange = react.exports.useCallback(function (value, actionMeta) {
	    if (typeof propsOnChange === 'function') {
	      propsOnChange(value, actionMeta);
	    }

	    setStateValue(value);
	  }, [propsOnChange]);
	  var onInputChange = react.exports.useCallback(function (value, actionMeta) {
	    var newValue;

	    if (typeof propsOnInputChange === 'function') {
	      newValue = propsOnInputChange(value, actionMeta);
	    }

	    setStateInputValue(newValue !== undefined ? newValue : value);
	  }, [propsOnInputChange]);
	  var onMenuOpen = react.exports.useCallback(function () {
	    if (typeof propsOnMenuOpen === 'function') {
	      propsOnMenuOpen();
	    }

	    setStateMenuIsOpen(true);
	  }, [propsOnMenuOpen]);
	  var onMenuClose = react.exports.useCallback(function () {
	    if (typeof propsOnMenuClose === 'function') {
	      propsOnMenuClose();
	    }

	    setStateMenuIsOpen(false);
	  }, [propsOnMenuClose]);
	  var inputValue = propsInputValue !== undefined ? propsInputValue : stateInputValue;
	  var menuIsOpen = propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
	  var value = propsValue !== undefined ? propsValue : stateValue;
	  return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
	    inputValue: inputValue,
	    menuIsOpen: menuIsOpen,
	    onChange: onChange,
	    onInputChange: onInputChange,
	    onMenuClose: onMenuClose,
	    onMenuOpen: onMenuOpen,
	    value: value
	  });
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

	  var lastThis;
	  var lastArgs = [];
	  var lastResult;
	  var calledOnce = false;

	  function memoized() {
	    var newArgs = [];

	    for (var _i = 0; _i < arguments.length; _i++) {
	      newArgs[_i] = arguments[_i];
	    }

	    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
	      return lastResult;
	    }

	    lastResult = resultFn.apply(this, newArgs);
	    calledOnce = true;
	    lastThis = this;
	    lastArgs = newArgs;
	    return lastResult;
	  }

	  return memoized;
	}

	var _ref = {
	  name: "7pg0cj-a11yText",
	  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
	} ;

	var A11yText = function A11yText(props) {
	  return jsx("span", _extends({
	    css: _ref
	  }, props));
	};

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
	  var ariaLive = selectProps['aria-live']; // Update aria live message configuration when prop changes

	  var messages = react.exports.useMemo(function () {
	    return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
	  }, [ariaLiveMessages]); // Update aria live selected option when prop changes

	  var ariaSelected = react.exports.useMemo(function () {
	    var message = '';

	    if (ariaSelection && messages.onChange) {
	      var option = ariaSelection.option,
	          selectedOptions = ariaSelection.options,
	          removedValue = ariaSelection.removedValue,
	          removedValues = ariaSelection.removedValues,
	          value = ariaSelection.value; // select-option when !isMulti does not return option so we assume selected option is value

	      var asOption = function asOption(val) {
	        return !Array.isArray(val) ? val : null;
	      }; // If there is just one item from the action then get its label


	      var selected = removedValue || option || asOption(value);
	      var label = selected ? getOptionLabel(selected) : ''; // If there are multiple items from the action then return an array of labels

	      var multiSelected = selectedOptions || removedValues || undefined;
	      var labels = multiSelected ? multiSelected.map(getOptionLabel) : [];

	      var onChangeProps = _objectSpread2({
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
	  var ariaFocused = react.exports.useMemo(function () {
	    var focusMsg = '';
	    var focused = focusedOption || focusedValue;
	    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));

	    if (focused && messages.onFocus) {
	      var onFocusProps = {
	        focused: focused,
	        label: getOptionLabel(focused),
	        isDisabled: isOptionDisabled(focused, selectValue),
	        isSelected: isSelected,
	        options: options,
	        context: focused === focusedOption ? 'menu' : 'value',
	        selectValue: selectValue
	      };
	      focusMsg = messages.onFocus(onFocusProps);
	    }

	    return focusMsg;
	  }, [focusedOption, focusedValue, getOptionLabel, isOptionDisabled, messages, options, selectValue]);
	  var ariaResults = react.exports.useMemo(function () {
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
	  var ariaGuidance = react.exports.useMemo(function () {
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
	  var ScreenReaderText = jsx(react.exports.Fragment, null, jsx("span", {
	    id: "aria-selection"
	  }, ariaSelected), jsx("span", {
	    id: "aria-context"
	  }, ariaContext));
	  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus';
	  return jsx(react.exports.Fragment, null, jsx(A11yText, {
	    id: id
	  }, isInitialFocus && ScreenReaderText), jsx(A11yText, {
	    "aria-live": ariaLive,
	    "aria-atomic": "false",
	    "aria-relevant": "additions text"
	  }, isFocused && !isInitialFocus && ScreenReaderText));
	};

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

	    var _ignoreCase$ignoreAcc = _objectSpread2({
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
	      props = _objectWithoutProperties(_ref, _excluded); // Remove animation props not meant for HTML elements


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
	  var isBottom = react.exports.useRef(false);
	  var isTop = react.exports.useRef(false);
	  var touchStart = react.exports.useRef(0);
	  var scrollTarget = react.exports.useRef(null);
	  var handleEventDelta = react.exports.useCallback(function (event, delta) {
	    if (scrollTarget.current === null) return;
	    var _scrollTarget$current = scrollTarget.current,
	        scrollTop = _scrollTarget$current.scrollTop,
	        scrollHeight = _scrollTarget$current.scrollHeight,
	        clientHeight = _scrollTarget$current.clientHeight;
	    var target = scrollTarget.current;
	    var isDeltaPositive = delta > 0;
	    var availableScroll = scrollHeight - clientHeight - scrollTop;
	    var shouldCancelScroll = false; // reset bottom/top flags

	    if (availableScroll > delta && isBottom.current) {
	      if (onBottomLeave) onBottomLeave(event);
	      isBottom.current = false;
	    }

	    if (isDeltaPositive && isTop.current) {
	      if (onTopLeave) onTopLeave(event);
	      isTop.current = false;
	    } // bottom limit


	    if (isDeltaPositive && delta > availableScroll) {
	      if (onBottomArrive && !isBottom.current) {
	        onBottomArrive(event);
	      }

	      target.scrollTop = scrollHeight;
	      shouldCancelScroll = true;
	      isBottom.current = true; // top limit
	    } else if (!isDeltaPositive && -delta > scrollTop) {
	      if (onTopArrive && !isTop.current) {
	        onTopArrive(event);
	      }

	      target.scrollTop = 0;
	      shouldCancelScroll = true;
	      isTop.current = true;
	    } // cancel scroll


	    if (shouldCancelScroll) {
	      cancelScroll(event);
	    }
	  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
	  var onWheel = react.exports.useCallback(function (event) {
	    handleEventDelta(event, event.deltaY);
	  }, [handleEventDelta]);
	  var onTouchStart = react.exports.useCallback(function (event) {
	    // set touch start so we can calculate touchmove delta
	    touchStart.current = event.changedTouches[0].clientY;
	  }, []);
	  var onTouchMove = react.exports.useCallback(function (event) {
	    var deltaY = touchStart.current - event.changedTouches[0].clientY;
	    handleEventDelta(event, deltaY);
	  }, [handleEventDelta]);
	  var startListening = react.exports.useCallback(function (el) {
	    // bail early if no element is available to attach to
	    if (!el) return;
	    var notPassive = supportsPassiveEvents ? {
	      passive: false
	    } : false;
	    el.addEventListener('wheel', onWheel, notPassive);
	    el.addEventListener('touchstart', onTouchStart, notPassive);
	    el.addEventListener('touchmove', onTouchMove, notPassive);
	  }, [onTouchMove, onTouchStart, onWheel]);
	  var stopListening = react.exports.useCallback(function (el) {
	    // bail early if no element is available to detach from
	    if (!el) return;
	    el.removeEventListener('wheel', onWheel, false);
	    el.removeEventListener('touchstart', onTouchStart, false);
	    el.removeEventListener('touchmove', onTouchMove, false);
	  }, [onTouchMove, onTouchStart, onWheel]);
	  react.exports.useEffect(function () {
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
	} // `ontouchstart` check works on most browsers
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
	  var originalStyles = react.exports.useRef({});
	  var scrollTarget = react.exports.useRef(null);
	  var addScrollLock = react.exports.useCallback(function (touchScrollTarget) {
	    if (!canUseDOM) return;
	    var target = document.body;
	    var targetStyle = target && target.style;

	    if (accountForScrollbars) {
	      // store any styles already applied to the body
	      STYLE_KEYS.forEach(function (key) {
	        var val = targetStyle && targetStyle[key];
	        originalStyles.current[key] = val;
	      });
	    } // apply the lock styles and padding if this is the first scroll lock


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
	    } // account for touch devices


	    if (target && isTouchDevice()) {
	      // Mobile Safari ignores { overflow: hidden } declaration on the body.
	      target.addEventListener('touchmove', preventTouchMove, listenerOptions); // Allow scroll on provided target

	      if (touchScrollTarget) {
	        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions);
	        touchScrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions);
	      }
	    } // increment active scroll locks


	    activeScrollLocks += 1;
	  }, [accountForScrollbars]);
	  var removeScrollLock = react.exports.useCallback(function (touchScrollTarget) {
	    if (!canUseDOM) return;
	    var target = document.body;
	    var targetStyle = target && target.style; // safely decrement active scroll locks

	    activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

	    if (accountForScrollbars && activeScrollLocks < 1) {
	      STYLE_KEYS.forEach(function (key) {
	        var val = originalStyles.current[key];

	        if (targetStyle) {
	          targetStyle[key] = val;
	        }
	      });
	    } // remove touch listeners


	    if (target && isTouchDevice()) {
	      target.removeEventListener('touchmove', preventTouchMove, listenerOptions);

	      if (touchScrollTarget) {
	        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
	        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
	      }
	    }
	  }, [accountForScrollbars]);
	  react.exports.useEffect(function () {
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

	var _ref2 = {
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

	  return jsx(react.exports.Fragment, null, lockEnabled && jsx("div", {
	    onClick: blurSelectInput,
	    css: _ref2
	  }), children(targetRef));
	}

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
	}; // Merge Utility

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
	var borderRadius = 4; // Used to calculate consistent margin/padding on elements

	var baseUnit = 4; // The minimum height of the control

	var controlHeight = 38; // The amount of space between the control and menu */

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
	  tabSelectsValue: true
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

	  var _super = _createSuper(Select); // Misc. Instance Properties
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
	      } // when the select value should change, we should reset focusedValue


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
	      var base = defaultStyles[key](props);
	      base.boxSizing = 'border-box';
	      var custom = _this.props.styles[key];
	      return custom ? custom(base, props) : base;
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
	        ariaSelection: _objectSpread2({
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
	      if (_this.userIsDragging) return; // close the menu if the user taps outside
	      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
	      // on events on child elements, not the document (which we've attached this handler to).

	      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
	        _this.blurInput();
	      } // reset move vars


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
	      } // Block option hover events when the user has just pressed a key


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

	          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
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
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps) {
	      var _this$props6 = this.props,
	          isDisabled = _this$props6.isDisabled,
	          menuIsOpen = _this$props6.menuIsOpen;
	      var isFocused = this.state.isFocused;

	      if ( // ensure focus is restored correctly when the control becomes enabled
	      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
	      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
	        this.focusInput();
	      }

	      if (isFocused && isDisabled && !prevProps.isDisabled) {
	        // ensure select state gets blurred in case Select is programatically disabled while focused
	        // eslint-disable-next-line react/no-did-update-set-state
	        this.setState({
	          isFocused: false
	        }, this.onMenuClose);
	      } // scroll the focused option into view if necessary


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
	    } // ==============================
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
	    } // ==============================
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
	    } // aliased for consumers

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
	      } // only scroll if the menu isn't already open


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
	          focusedValue = _this$state3.focusedValue; // Only multiselects support value focusing

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
	    value: // ==============================
	    // Getters
	    // ==============================
	    function getTheme() {
	      // Use the default theme if there are no customizations.
	      if (!this.props.theme) {
	        return defaultTheme;
	      } // If the theme prop is a function, assume the function
	      // knows how to merge the passed-in default theme with
	      // its own modifications.


	      if (typeof this.props.theme === 'function') {
	        return this.props.theme(defaultTheme);
	      } // Otherwise, if a plain theme object was passed in,
	      // overlay it with the default theme.


	      return _objectSpread2(_objectSpread2({}, defaultTheme), this.props.theme);
	    }
	  }, {
	    key: "getCommonProps",
	    value: function getCommonProps() {
	      var clearValue = this.clearValue,
	          cx = this.cx,
	          getStyles = this.getStyles,
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
	          isMulti = _this$props7.isMulti; // single select, by default, IS NOT clearable
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
	    } // ==============================
	    // Mouse Handlers
	    // ==============================

	  }, {
	    key: "startListeningComposition",
	    value: // ==============================
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
	    value: // ==============================
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
	    value: // ==============================
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
	          menuIsOpen = _this$props8.menuIsOpen;

	      var _this$getComponents = this.getComponents(),
	          Input = _this$getComponents.Input;

	      var _this$state4 = this.state,
	          inputIsHidden = _this$state4.inputIsHidden,
	          ariaSelection = _this$state4.ariaSelection;
	      var commonProps = this.commonProps;
	      var id = inputId || this.getElementId('input'); // aria attributes makes the JSX "noisy", separated for clarity

	      var ariaAttributes = _objectSpread2(_objectSpread2(_objectSpread2({
	        'aria-autocomplete': 'list',
	        'aria-expanded': menuIsOpen,
	        'aria-haspopup': true,
	        'aria-errormessage': this.props['aria-errormessage'],
	        'aria-invalid': this.props['aria-invalid'],
	        'aria-label': this.props['aria-label'],
	        'aria-labelledby': this.props['aria-labelledby'],
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
	        return /*#__PURE__*/react.exports.createElement(DummyInput, _extends({
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

	      return /*#__PURE__*/react.exports.createElement(Input, _extends({}, commonProps, {
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
	        return inputValue ? null : /*#__PURE__*/react.exports.createElement(Placeholder, _extends({}, commonProps, {
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
	          return /*#__PURE__*/react.exports.createElement(MultiValue, _extends({}, commonProps, {
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
	      return /*#__PURE__*/react.exports.createElement(SingleValue, _extends({}, commonProps, {
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
	      return /*#__PURE__*/react.exports.createElement(ClearIndicator, _extends({}, commonProps, {
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
	      return /*#__PURE__*/react.exports.createElement(LoadingIndicator, _extends({}, commonProps, {
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
	          IndicatorSeparator = _this$getComponents5.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator


	      if (!DropdownIndicator || !IndicatorSeparator) return null;
	      var commonProps = this.commonProps;
	      var isDisabled = this.props.isDisabled;
	      var isFocused = this.state.isFocused;
	      return /*#__PURE__*/react.exports.createElement(IndicatorSeparator, _extends({}, commonProps, {
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
	      return /*#__PURE__*/react.exports.createElement(DropdownIndicator, _extends({}, commonProps, {
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
	      if (!menuIsOpen) return null; // TODO: Internal Option Type here

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
	        return /*#__PURE__*/react.exports.createElement(Option, _extends({}, commonProps, {
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
	            return /*#__PURE__*/react.exports.createElement(Group, _extends({}, commonProps, {
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
	        menuUI = /*#__PURE__*/react.exports.createElement(LoadingMessage, commonProps, message);
	      } else {
	        var _message = noOptionsMessage({
	          inputValue: inputValue
	        });

	        if (_message === null) return null;
	        menuUI = /*#__PURE__*/react.exports.createElement(NoOptionsMessage, commonProps, _message);
	      }

	      var menuPlacementProps = {
	        minMenuHeight: minMenuHeight,
	        maxMenuHeight: maxMenuHeight,
	        menuPlacement: menuPlacement,
	        menuPosition: menuPosition,
	        menuShouldScrollIntoView: menuShouldScrollIntoView
	      };
	      var menuElement = /*#__PURE__*/react.exports.createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function (_ref4) {
	        var ref = _ref4.ref,
	            _ref4$placerProps = _ref4.placerProps,
	            placement = _ref4$placerProps.placement,
	            maxHeight = _ref4$placerProps.maxHeight;
	        return /*#__PURE__*/react.exports.createElement(Menu, _extends({}, commonProps, menuPlacementProps, {
	          innerRef: ref,
	          innerProps: {
	            onMouseDown: _this4.onMenuMouseDown,
	            onMouseMove: _this4.onMenuMouseMove,
	            id: _this4.getElementId('listbox')
	          },
	          isLoading: isLoading,
	          placement: placement
	        }), /*#__PURE__*/react.exports.createElement(ScrollManager, {
	          captureEnabled: captureMenuScroll,
	          onTopArrive: onMenuScrollToTop,
	          onBottomArrive: onMenuScrollToBottom,
	          lockEnabled: menuShouldBlockScroll
	        }, function (scrollTargetRef) {
	          return /*#__PURE__*/react.exports.createElement(MenuList, _extends({}, commonProps, {
	            innerRef: function innerRef(instance) {
	              _this4.getMenuListRef(instance);

	              scrollTargetRef(instance);
	            },
	            isLoading: isLoading,
	            maxHeight: maxHeight,
	            focusedOption: focusedOption
	          }), menuUI);
	        }));
	      }); // positioning behaviour is almost identical for portalled and fixed,
	      // so we use the same component. the actual portalling logic is forked
	      // within the component based on `menuPosition`

	      return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/react.exports.createElement(MenuPortal, _extends({}, commonProps, {
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
	          name = _this$props13.name;
	      var selectValue = this.state.selectValue;
	      if (!name || isDisabled) return;

	      if (isMulti) {
	        if (delimiter) {
	          var value = selectValue.map(function (opt) {
	            return _this5.getOptionValue(opt);
	          }).join(delimiter);
	          return /*#__PURE__*/react.exports.createElement("input", {
	            name: name,
	            type: "hidden",
	            value: value
	          });
	        } else {
	          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
	            return /*#__PURE__*/react.exports.createElement("input", {
	              key: "i-".concat(i),
	              name: name,
	              type: "hidden",
	              value: _this5.getOptionValue(opt)
	            });
	          }) : /*#__PURE__*/react.exports.createElement("input", {
	            name: name,
	            type: "hidden"
	          });
	          return /*#__PURE__*/react.exports.createElement("div", null, input);
	        }
	      } else {
	        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

	        return /*#__PURE__*/react.exports.createElement("input", {
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
	      return /*#__PURE__*/react.exports.createElement(LiveRegion, _extends({}, commonProps, {
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
	      return /*#__PURE__*/react.exports.createElement(SelectContainer, _extends({}, commonProps, {
	        className: className,
	        innerProps: {
	          id: id,
	          onKeyDown: this.onKeyDown
	        },
	        isDisabled: isDisabled,
	        isFocused: isFocused
	      }), this.renderLiveRegion(), /*#__PURE__*/react.exports.createElement(Control, _extends({}, commonProps, {
	        innerRef: this.getControlRef,
	        innerProps: {
	          onMouseDown: this.onControlMouseDown,
	          onTouchEnd: this.onControlTouchEnd
	        },
	        isDisabled: isDisabled,
	        isFocused: isFocused,
	        menuIsOpen: menuIsOpen
	      }), /*#__PURE__*/react.exports.createElement(ValueContainer, _extends({}, commonProps, {
	        isDisabled: isDisabled
	      }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/react.exports.createElement(IndicatorsContainer, _extends({}, commonProps, {
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
	      } // some updates should toggle the state of the input visibility


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
	      } // If the 'initial-input-focus' action has been set already
	      // then reset the ariaSelection to null


	      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus') {
	        newAriaSelection = null;
	      }

	      return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
	        prevProps: props,
	        ariaSelection: newAriaSelection,
	        prevWasFocused: hasKeptFocus
	      });
	    }
	  }]);

	  return Select;
	}(react.exports.Component);

	Select.defaultProps = defaultProps;

	var StateManagedSelect = /*#__PURE__*/react.exports.forwardRef(function (props, ref) {
	  var baseSelectProps = useStateManager(props);
	  return /*#__PURE__*/react.exports.createElement(Select, _extends({
	    ref: ref
	  }, baseSelectProps));
	});

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
	  const labelRef = react.exports.useRef();
	  const durationRef = react.exports.useRef();
	  const [buttons, selectButtons] = react.exports.useState(buttonOptions[0]);
	  const [type, selectType] = react.exports.useState(typeOptions[0]);
	  const [blocking, selectBlocking] = react.exports.useState(blockingOptions[0]);
	  return /*#__PURE__*/React.createElement(Outer, null, /*#__PURE__*/React.createElement(Inner$1, null, /*#__PURE__*/React.createElement(Title, null, "Redux-Saga-Notifications example"), /*#__PURE__*/React.createElement(Rows, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Label$1, null, "Label:"), /*#__PURE__*/React.createElement(InputOuter, null, /*#__PURE__*/React.createElement(Input$1, {
	    defaultValue: 'Test notification',
	    placeholder: 'Label text',
	    ref: labelRef
	  }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Label$1, null, "Buttons:"), /*#__PURE__*/React.createElement(FormSelect, null, /*#__PURE__*/React.createElement(StateManagedSelect, {
	    value: buttons,
	    options: buttonOptions,
	    styles: selectStyle(),
	    onChange: selectButtons
	  }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Label$1, null, "Type:"), /*#__PURE__*/React.createElement(FormSelect, null, /*#__PURE__*/React.createElement(StateManagedSelect, {
	    options: typeOptions,
	    value: type,
	    styles: selectStyle(),
	    onChange: selectType
	  }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Label$1, null, "Blocking:"), /*#__PURE__*/React.createElement(FormSelect, null, /*#__PURE__*/React.createElement(StateManagedSelect, {
	    options: blockingOptions,
	    value: blocking,
	    styles: selectStyle(),
	    onChange: selectBlocking
	  }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Label$1, null, "Duration (ms):"), /*#__PURE__*/React.createElement(InputOuter, null, /*#__PURE__*/React.createElement(Input$1, {
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

	const bounce = Ue({
	  '0%, 100%': {
	    transform: 'translateY(10px)'
	  },
	  '50%': {
	    transform: 'translateY(-15px)'
	  }
	});
	const styles = {
	  customStyle1: { ...createNotificationStyle('purple', 'fuchsia'),
	    label: defaults => ({ ...defaults,
	      color: 'yellow'
	    }),
	    icon: defaults => ({ ...defaults,
	      animation: Ce`
        ${bounce} 500ms linear infinite
      `
	    })
	  }
	};
	const icons = {
	  customStyle1: /*#__PURE__*/React.createElement(React.Fragment, null, "\uD83D\uDC3C")
	};

	const App = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Form, null), /*#__PURE__*/React.createElement(NotificationsComponent, {
	  styles: styles,
	  icons: icons
	}));

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const sagaMiddleware = sagaMiddlewareFactory();
	const store = createStore(combineReducers({
	  notificationReducer: reducer
	}), {}, composeEnhancers(applyMiddleware(sagaMiddleware)));
	sagaMiddleware.run(saga);
	ReactDOM.render( /*#__PURE__*/React.createElement(Fe, {
	  theme: styledReboot.defaultRebootTheme
	}, /*#__PURE__*/React.createElement(Provider, {
	  store: store
	}, /*#__PURE__*/React.createElement(GlobalStyle, null), /*#__PURE__*/React.createElement(App, null))), document.querySelector('#root'));

})();
//# sourceMappingURL=bundle.js.map
