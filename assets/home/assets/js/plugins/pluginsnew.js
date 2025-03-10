$(function () {
    var i = $("#contact-form"),
        s = $(".form-messege");
    $(i).submit(function (t) {
        t.preventDefault();
        var e = $(i).serialize();
        $.ajax({ type: "POST", url: $(i).attr("action"), data: e })
            .done(function (t) {
                $(s).removeClass("error"), $(s).addClass("success"), $(s).text(t), $("#contact-form input,#contact-form textarea").val("");
            })
            .fail(function (t) {
                $(s).removeClass("success"), $(s).addClass("error"), "" !== t.responseText ? $(s).text(t.responseText) : $(s).text("Oops! An error occured and your message could not be sent.");
            });
    });
}),
    (function (t, e) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.ClipboardJS = e()) : (t.ClipboardJS = e());
    })(this, function () {
        return (
            (s = {}),
            (n.m = i = [
                function (t, e, i) {
                    "use strict";
                    var s =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                  },
                        n = function (t, e, i) {
                            return e && l(t.prototype, e), i && l(t, i), t;
                        },
                        o = h(i(1)),
                        r = h(i(3)),
                        a = h(i(4));
                    function l(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var s = e[i];
                            (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
                        }
                    }
                    function h(t) {
                        return t && t.__esModule ? t : { default: t };
                    }
                    var c =
                        ((function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
                        })(u, r.default),
                        n(
                            u,
                            [
                                {
                                    key: "resolveOptions",
                                    value: function () {
                                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                        (this.action = "function" == typeof t.action ? t.action : this.defaultAction),
                                            (this.target = "function" == typeof t.target ? t.target : this.defaultTarget),
                                            (this.text = "function" == typeof t.text ? t.text : this.defaultText),
                                            (this.container = "object" === s(t.container) ? t.container : document.body);
                                    },
                                },
                                {
                                    key: "listenClick",
                                    value: function (t) {
                                        var e = this;
                                        this.listener = (0, a.default)(t, "click", function (t) {
                                            return e.onClick(t);
                                        });
                                    },
                                },
                                {
                                    key: "onClick",
                                    value: function (t) {
                                        var e = t.delegateTarget || t.currentTarget;
                                        this.clipboardAction && (this.clipboardAction = null),
                                            (this.clipboardAction = new o.default({ action: this.action(e), target: this.target(e), text: this.text(e), container: this.container, trigger: e, emitter: this }));
                                    },
                                },
                                {
                                    key: "defaultAction",
                                    value: function (t) {
                                        return d("action", t);
                                    },
                                },
                                {
                                    key: "defaultTarget",
                                    value: function (t) {
                                        var e = d("target", t);
                                        if (e) return document.querySelector(e);
                                    },
                                },
                                {
                                    key: "defaultText",
                                    value: function (t) {
                                        return d("text", t);
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), (this.clipboardAction = null));
                                    },
                                },
                            ],
                            [
                                {
                                    key: "isSupported",
                                    value: function () {
                                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                            e = "string" == typeof t ? [t] : t,
                                            i = !!document.queryCommandSupported;
                                        return (
                                            e.forEach(function (t) {
                                                i = i && !!document.queryCommandSupported(t);
                                            }),
                                            i
                                        );
                                    },
                                },
                            ]
                        ),
                        u);
                    function u(t, e) {
                        !(function (t) {
                            if (!(t instanceof u)) throw new TypeError("Cannot call a class as a function");
                        })(this);
                        var i = (function (t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
                        })(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this));
                        return i.resolveOptions(e), i.listenClick(t), i;
                    }
                    function d(t, e) {
                        var i = "data-clipboard-" + t;
                        if (e.hasAttribute(i)) return e.getAttribute(i);
                    }
                    t.exports = c;
                },
                function (t, e, i) {
                    "use strict";
                    var s =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                  },
                        n = function (t, e, i) {
                            return e && a(t.prototype, e), i && a(t, i), t;
                        },
                        o = i(2),
                        r = o && o.__esModule ? o : { default: o };
                    function a(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var s = e[i];
                            (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
                        }
                    }
                    var l =
                        (n(h, [
                            {
                                key: "resolveOptions",
                                value: function () {
                                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                    (this.action = t.action), (this.container = t.container), (this.emitter = t.emitter), (this.target = t.target), (this.text = t.text), (this.trigger = t.trigger), (this.selectedText = "");
                                },
                            },
                            {
                                key: "initSelection",
                                value: function () {
                                    this.text ? this.selectFake() : this.target && this.selectTarget();
                                },
                            },
                            {
                                key: "selectFake",
                                value: function () {
                                    var t = this,
                                        e = "rtl" == document.documentElement.getAttribute("dir");
                                    this.removeFake(),
                                        (this.fakeHandlerCallback = function () {
                                            return t.removeFake();
                                        }),
                                        (this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0),
                                        (this.fakeElem = document.createElement("textarea")),
                                        (this.fakeElem.style.fontSize = "12pt"),
                                        (this.fakeElem.style.border = "0"),
                                        (this.fakeElem.style.padding = "0"),
                                        (this.fakeElem.style.margin = "0"),
                                        (this.fakeElem.style.position = "absolute"),
                                        (this.fakeElem.style[e ? "right" : "left"] = "-9999px");
                                    var i = window.pageYOffset || document.documentElement.scrollTop;
                                    (this.fakeElem.style.top = i + "px"),
                                        this.fakeElem.setAttribute("readonly", ""),
                                        (this.fakeElem.value = this.text),
                                        this.container.appendChild(this.fakeElem),
                                        (this.selectedText = (0, r.default)(this.fakeElem)),
                                        this.copyText();
                                },
                            },
                            {
                                key: "removeFake",
                                value: function () {
                                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), (this.fakeHandler = null), (this.fakeHandlerCallback = null)),
                                        this.fakeElem && (this.container.removeChild(this.fakeElem), (this.fakeElem = null));
                                },
                            },
                            {
                                key: "selectTarget",
                                value: function () {
                                    (this.selectedText = (0, r.default)(this.target)), this.copyText();
                                },
                            },
                            {
                                key: "copyText",
                                value: function () {
                                    var e = void 0;
                                    try {
                                        e = document.execCommand(this.action);
                                    } catch (t) {
                                        e = !1;
                                    }
                                    this.handleResult(e);
                                },
                            },
                            {
                                key: "handleResult",
                                value: function (t) {
                                    this.emitter.emit(t ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) });
                                },
                            },
                            {
                                key: "clearSelection",
                                value: function () {
                                    this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    this.removeFake();
                                },
                            },
                            {
                                key: "action",
                                set: function () {
                                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
                                    if (((this._action = t), "copy" !== this._action && "cut" !== this._action)) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                                },
                                get: function () {
                                    return this._action;
                                },
                            },
                            {
                                key: "target",
                                set: function (t) {
                                    if (void 0 !== t) {
                                        if (!t || "object" !== (void 0 === t ? "undefined" : s(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                        if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                        if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled")))
                                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                        this._target = t;
                                    }
                                },
                                get: function () {
                                    return this._target;
                                },
                            },
                        ]),
                        h);
                    function h(t) {
                        !(function (t) {
                            if (!(t instanceof h)) throw new TypeError("Cannot call a class as a function");
                        })(this),
                            this.resolveOptions(t),
                            this.initSelection();
                    }
                    t.exports = l;
                },
                function (t, e) {
                    t.exports = function (t) {
                        var e,
                            i,
                            s,
                            n =
                                "SELECT" === t.nodeName
                                    ? (t.focus(), t.value)
                                    : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName
                                    ? ((e = t.hasAttribute("readonly")) || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), e || t.removeAttribute("readonly"), t.value)
                                    : (t.hasAttribute("contenteditable") && t.focus(), (i = window.getSelection()), (s = document.createRange()).selectNodeContents(t), i.removeAllRanges(), i.addRange(s), i.toString());
                        return n;
                    };
                },
                function (t, e) {
                    function i() {}
                    (i.prototype = {
                        on: function (t, e, i) {
                            var s = this.e || (this.e = {});
                            return (s[t] || (s[t] = [])).push({ fn: e, ctx: i }), this;
                        },
                        once: function (t, e, i) {
                            var s = this;
                            function n() {
                                s.off(t, n), e.apply(i, arguments);
                            }
                            return (n._ = e), this.on(t, n, i);
                        },
                        emit: function (t) {
                            for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), s = 0, n = i.length; s < n; s++) i[s].fn.apply(i[s].ctx, e);
                            return this;
                        },
                        off: function (t, e) {
                            var i = this.e || (this.e = {}),
                                s = i[t],
                                n = [];
                            if (s && e) for (var o = 0, r = s.length; o < r; o++) s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
                            return n.length ? (i[t] = n) : delete i[t], this;
                        },
                    }),
                        (t.exports = i);
                },
                function (t, e, i) {
                    var h = i(5),
                        c = i(6);
                    t.exports = function (t, e, i) {
                        if (!t && !e && !i) throw new Error("Missing required arguments");
                        if (!h.string(e)) throw new TypeError("Second argument must be a String");
                        if (!h.fn(i)) throw new TypeError("Third argument must be a Function");
                        if (h.node(t))
                            return (
                                (a = e),
                                (l = i),
                                (r = t).addEventListener(a, l),
                                {
                                    destroy: function () {
                                        r.removeEventListener(a, l);
                                    },
                                }
                            );
                        if (h.nodeList(t))
                            return (
                                (s = t),
                                (n = e),
                                (o = i),
                                Array.prototype.forEach.call(s, function (t) {
                                    t.addEventListener(n, o);
                                }),
                                {
                                    destroy: function () {
                                        Array.prototype.forEach.call(s, function (t) {
                                            t.removeEventListener(n, o);
                                        });
                                    },
                                }
                            );
                        if (h.string(t)) return c(document.body, t, e, i);
                        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                        var s, n, o, r, a, l;
                    };
                },
                function (t, i) {
                    (i.node = function (t) {
                        return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
                    }),
                        (i.nodeList = function (t) {
                            var e = Object.prototype.toString.call(t);
                            return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || i.node(t[0]));
                        }),
                        (i.string = function (t) {
                            return "string" == typeof t || t instanceof String;
                        }),
                        (i.fn = function (t) {
                            return "[object Function]" === Object.prototype.toString.call(t);
                        });
                },
                function (t, e, i) {
                    var r = i(7);
                    function o(t, e, i, s, n) {
                        var o = function (e, i, t, s) {
                            return function (t) {
                                (t.delegateTarget = r(t.target, i)), t.delegateTarget && s.call(e, t);
                            };
                        }.apply(this, arguments);
                        return (
                            t.addEventListener(i, o, n),
                            {
                                destroy: function () {
                                    t.removeEventListener(i, o, n);
                                },
                            }
                        );
                    }
                    t.exports = function (t, e, i, s, n) {
                        return "function" == typeof t.addEventListener
                            ? o.apply(null, arguments)
                            : "function" == typeof i
                            ? o.bind(null, document).apply(null, arguments)
                            : ("string" == typeof t && (t = document.querySelectorAll(t)),
                              Array.prototype.map.call(t, function (t) {
                                  return o(t, e, i, s, n);
                              }));
                    };
                },
                function (t, e) {
                    var i;
                    "undefined" == typeof Element || Element.prototype.matches || ((i = Element.prototype).matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector),
                        (t.exports = function (t, e) {
                            for (; t && 9 !== t.nodeType; ) {
                                if ("function" == typeof t.matches && t.matches(e)) return t;
                                t = t.parentNode;
                            }
                        });
                },
            ]),
            (n.c = s),
            (n.d = function (t, e, i) {
                n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
            }),
            (n.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var i = Object.create(null);
                if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var s in e)
                        n.d(
                            i,
                            s,
                            function (t) {
                                return e[t];
                            }.bind(null, s)
                        );
                return i;
            }),
            (n.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return n.d(e, "a", e), e;
            }),
            (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 0))
        );
        function n(t) {
            if (s[t]) return s[t].exports;
            var e = (s[t] = { i: t, l: !1, exports: {} });
            return i[t].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
        }
        var i, s;
    }),
    (function (i) {
        "use strict";
        i.fn.counterUp = function (t) {
            var e = i.extend({ time: 400, delay: 10 }, t);
            return this.each(function () {
                var l = i(this),
                    h = e;
                l.waypoint(
                    function () {
                        for (
                            var t = [], e = h.time / h.delay, i = l.text(), s = /[0-9]+,[0-9]+/.test(i), i = i.replace(/,/g, ""), n = (/^[0-9]+$/.test(i), /^[0-9]+\.[0-9]+$/.test(i)), o = n ? (i.split(".")[1] || []).length : 0, r = e;
                            1 <= r;
                            r--
                        ) {
                            var a = parseInt((i / e) * r);
                            if ((n && (a = parseFloat((i / e) * r).toFixed(o)), s)) for (; /(\d+)(\d{3})/.test(a.toString()); ) a = a.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                            t.unshift(a);
                        }
                        l.data("counterup-nums", t), l.text("0");
                        l.data("counterup-func", function () {
                            l.text(l.data("counterup-nums").shift()),
                                l.data("counterup-nums").length ? setTimeout(l.data("counterup-func"), h.delay) : (l.data("counterup-nums"), l.data("counterup-nums", null), l.data("counterup-func", null));
                        }),
                            setTimeout(l.data("counterup-func"), h.delay);
                    },
                    { offset: "100%", triggerOnce: !0 }
                );
            });
        };
    })(jQuery),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
    })("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        s = (i[t] = i[t] || []);
                    return -1 == s.indexOf(e) && s.push(e), this;
                }
            }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {});
                    return ((i[t] = i[t] || {})[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var s = i.indexOf(e);
                    return -1 != s && i.splice(s, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var s = 0,
                        n = i[s];
                    e = e || [];
                    for (var o = this._onceEvents && this._onceEvents[t]; n; ) {
                        var r = o && o[n];
                        r && (this.off(t, n), delete o[n]), n.apply(this, e), (n = i[(s += r ? 0 : 1)]);
                    }
                    return this;
                }
            }),
            t
        );
    }),
    (function (e, i) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(["ev-emitter/ev-emitter"], function (t) {
                  return i(e, t);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = i(e, require("ev-emitter")))
            : (e.imagesLoaded = i(e, e.EvEmitter));
    })(window, function (e, t) {
        function s(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }
        function n(t, e, i) {
            return this instanceof n
                ? ("string" == typeof t && (t = document.querySelectorAll(t)),
                  (this.elements = (function (t) {
                      var e = [];
                      if (Array.isArray(t)) e = t;
                      else if ("number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]);
                      else e.push(t);
                      return e;
                  })(t)),
                  (this.options = s({}, this.options)),
                  "function" == typeof e ? (i = e) : s(this.options, e),
                  i && this.on("always", i),
                  this.getImages(),
                  r && (this.jqDeferred = new r.Deferred()),
                  void setTimeout(
                      function () {
                          this.check();
                      }.bind(this)
                  ))
                : new n(t, e, i);
        }
        function i(t) {
            this.img = t;
        }
        function o(t, e) {
            (this.url = t), (this.element = e), (this.img = new Image());
        }
        var r = e.jQuery,
            a = e.console;
        ((n.prototype = Object.create(t.prototype)).options = {}),
            (n.prototype.getImages = function () {
                (this.images = []), this.elements.forEach(this.addElementImages, this);
            }),
            (n.prototype.addElementImages = function (t) {
                "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                var e = t.nodeType;
                if (e && l[e]) {
                    for (var i = t.querySelectorAll("img"), s = 0; s < i.length; s++) {
                        var n = i[s];
                        this.addImage(n);
                    }
                    if ("string" == typeof this.options.background)
                        for (var o = t.querySelectorAll(this.options.background), s = 0; s < o.length; s++) {
                            var r = o[s];
                            this.addElementBackgroundImages(r);
                        }
                }
            });
        var l = { 1: !0, 9: !0, 11: !0 };
        return (
            (n.prototype.addElementBackgroundImages = function (t) {
                var e = getComputedStyle(t);
                if (e)
                    for (var i = /url\((['"])?(.*?)\1\)/gi, s = i.exec(e.backgroundImage); null !== s; ) {
                        var n = s && s[2];
                        n && this.addBackground(n, t), (s = i.exec(e.backgroundImage));
                    }
            }),
            (n.prototype.addImage = function (t) {
                var e = new i(t);
                this.images.push(e);
            }),
            (n.prototype.addBackground = function (t, e) {
                var i = new o(t, e);
                this.images.push(i);
            }),
            (n.prototype.check = function () {
                function e(t, e, i) {
                    setTimeout(function () {
                        s.progress(t, e, i);
                    });
                }
                var s = this;
                return (
                    (this.progressedCount = 0),
                    (this.hasAnyBroken = !1),
                    this.images.length
                        ? void this.images.forEach(function (t) {
                              t.once("progress", e), t.check();
                          })
                        : void this.complete()
                );
            }),
            (n.prototype.progress = function (t, e, i) {
                this.progressedCount++,
                    (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
                    this.emitEvent("progress", [this, t, e]),
                    this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
                    this.progressedCount == this.images.length && this.complete(),
                    this.options.debug && a && a.log("progress: " + i, t, e);
            }),
            (n.prototype.complete = function () {
                var t,
                    e = this.hasAnyBroken ? "fail" : "done";
                (this.isComplete = !0), this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred && ((t = this.hasAnyBroken ? "reject" : "resolve"), this.jqDeferred[t](this));
            }),
            ((i.prototype = Object.create(t.prototype)).check = function () {
                return this.getIsImageComplete()
                    ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                    : ((this.proxyImage = new Image()),
                      this.proxyImage.addEventListener("load", this),
                      this.proxyImage.addEventListener("error", this),
                      this.img.addEventListener("load", this),
                      this.img.addEventListener("error", this),
                      void (this.proxyImage.src = this.img.src));
            }),
            (i.prototype.getIsImageComplete = function () {
                return this.img.complete && void 0 !== this.img.naturalWidth;
            }),
            (i.prototype.confirm = function (t, e) {
                (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
            }),
            (i.prototype.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (i.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindEvents();
            }),
            (i.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindEvents();
            }),
            (i.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            }),
            ((o.prototype = Object.create(i.prototype)).check = function () {
                this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.url), this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
            }),
            (o.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            }),
            (o.prototype.confirm = function (t, e) {
                (this.isLoaded = t), this.emitEvent("progress", [this, this.element, e]);
            }),
            (n.makeJQueryPlugin = function (t) {
                (t = t || e.jQuery) &&
                    ((r = t).fn.imagesLoaded = function (t, e) {
                        return new n(this, t, e).jqDeferred.promise(r(this));
                    });
            })(),
            n
        );
    }),
    (function (e, i) {
        "function" == typeof define && define.amd
            ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
                  return i(e, t);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = i(e, require("jquery")))
            : (e.jQueryBridget = i(e, e.jQuery));
    })(window, function (t, e) {
        "use strict";
        function i(h, n, c) {
            (c = c || e || t.jQuery) &&
                (n.prototype.option ||
                    (n.prototype.option = function (t) {
                        c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t));
                    }),
                (c.fn[h] = function (t) {
                    if ("string" != typeof t)
                        return (
                            (s = t),
                            this.each(function (t, e) {
                                var i = c.data(e, h);
                                i ? (i.option(s), i._init()) : ((i = new n(e, s)), c.data(e, h, i));
                            }),
                            this
                        );
                    var e,
                        o,
                        r,
                        a,
                        l,
                        s,
                        i = u.call(arguments, 1);
                    return (
                        (r = i),
                        (l = "$()." + h + '("' + (o = t) + '")'),
                        (e = this).each(function (t, e) {
                            var i,
                                s,
                                n = c.data(e, h);
                            n ? ((i = n[o]) && "_" != o.charAt(0) ? ((s = i.apply(n, r)), (a = void 0 === a ? s : a)) : d(l + " is not a valid method")) : d(h + " not initialized. Cannot call methods, i.e. " + l);
                        }),
                        void 0 !== a ? a : e
                    );
                }),
                s(c));
        }
        function s(t) {
            !t || (t && t.bridget) || (t.bridget = i);
        }
        var u = Array.prototype.slice,
            n = t.console,
            d =
                void 0 === n
                    ? function () {}
                    : function (t) {
                          n.error(t);
                      };
        return s(e || t.jQuery), i;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
    })("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        s = (i[t] = i[t] || []);
                    return -1 == s.indexOf(e) && s.push(e), this;
                }
            }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {});
                    return ((i[t] = i[t] || {})[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var s = i.indexOf(e);
                    return -1 != s && i.splice(s, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var s = 0,
                        n = i[s];
                    e = e || [];
                    for (var o = this._onceEvents && this._onceEvents[t]; n; ) {
                        var r = o && o[n];
                        r && (this.off(t, n), delete o[n]), n.apply(this, e), (n = i[(s += r ? 0 : 1)]);
                    }
                    return this;
                }
            }),
            t
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.getSize = e());
    })(window, function () {
        "use strict";
        function b(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e;
        }
        function w(t) {
            var e = getComputedStyle(t);
            return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
        }
        function x(t) {
            if (
                (S ||
                    ((S = !0),
                    ((v = document.createElement("div")).style.width = "200px"),
                    (v.style.padding = "1px 2px 3px 4px"),
                    (v.style.borderStyle = "solid"),
                    (v.style.borderWidth = "1px 2px 3px 4px"),
                    (v.style.boxSizing = "border-box"),
                    (y = document.body || document.documentElement).appendChild(v),
                    (_ = w(v)),
                    (x.isBoxSizeOuter = k = 200 == b(_.width)),
                    y.removeChild(v)),
                "string" == typeof t && (t = document.querySelector(t)),
                t && "object" == typeof t && t.nodeType)
            ) {
                var e = w(t);
                if ("none" == e.display)
                    return (function () {
                        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < T; e++) {
                            t[C[e]] = 0;
                        }
                        return t;
                    })();
                var i = {};
                (i.width = t.offsetWidth), (i.height = t.offsetHeight);
                for (var s = (i.isBorderBox = "border-box" == e.boxSizing), n = 0; n < T; n++) {
                    var o = C[n],
                        r = e[o],
                        a = parseFloat(r);
                    i[o] = isNaN(a) ? 0 : a;
                }
                var l = i.paddingLeft + i.paddingRight,
                    h = i.paddingTop + i.paddingBottom,
                    c = i.marginLeft + i.marginRight,
                    u = i.marginTop + i.marginBottom,
                    d = i.borderLeftWidth + i.borderRightWidth,
                    p = i.borderTopWidth + i.borderBottomWidth,
                    f = s && k,
                    m = b(e.width);
                !1 !== m && (i.width = m + (f ? 0 : l + d));
                var g = b(e.height);
                return !1 !== g && (i.height = g + (f ? 0 : h + p)), (i.innerWidth = i.width - (l + d)), (i.innerHeight = i.height - (h + p)), (i.outerWidth = i.width + c), (i.outerHeight = i.height + u), i;
            }
            var v, y, _;
        }
        var k,
            i =
                "undefined" == typeof console
                    ? function () {}
                    : function (t) {
                          console.error(t);
                      },
            C = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            T = C.length,
            S = !1;
        return x;
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.matchesSelector = e());
    })(window, function () {
        "use strict";
        var i = (function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var s = e[i] + "MatchesSelector";
                if (t[s]) return s;
            }
        })();
        return function (t, e) {
            return t[i](e);
        };
    }),
    (function (e, i) {
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) {
                  return i(e, t);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = i(e, require("desandro-matches-selector")))
            : (e.fizzyUIUtils = i(e, e.matchesSelector));
    })(window, function (h, o) {
        var c = {
                extend: function (t, e) {
                    for (var i in e) t[i] = e[i];
                    return t;
                },
                modulo: function (t, e) {
                    return ((t % e) + e) % e;
                },
                makeArray: function (t) {
                    var e = [];
                    if (Array.isArray(t)) e = t;
                    else if (t && "object" == typeof t && "number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]);
                    else e.push(t);
                    return e;
                },
                removeFrom: function (t, e) {
                    var i = t.indexOf(e);
                    -1 != i && t.splice(i, 1);
                },
                getParent: function (t, e) {
                    for (; t != document.body; ) if (((t = t.parentNode), o(t, e))) return t;
                },
                getQueryElement: function (t) {
                    return "string" == typeof t ? document.querySelector(t) : t;
                },
                handleEvent: function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                },
                filterFindElements: function (t, s) {
                    t = c.makeArray(t);
                    var n = [];
                    return (
                        t.forEach(function (t) {
                            if (t instanceof HTMLElement) {
                                if (!s) return void n.push(t);
                                o(t, s) && n.push(t);
                                for (var e = t.querySelectorAll(s), i = 0; i < e.length; i++) n.push(e[i]);
                            }
                        }),
                        n
                    );
                },
                debounceMethod: function (t, e, s) {
                    var n = t.prototype[e],
                        o = e + "Timeout";
                    t.prototype[e] = function () {
                        var t = this[o];
                        t && clearTimeout(t);
                        var e = arguments,
                            i = this;
                        this[o] = setTimeout(function () {
                            n.apply(i, e), delete i[o];
                        }, s || 100);
                    };
                },
                docReady: function (t) {
                    var e = document.readyState;
                    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
                },
                toDashed: function (t) {
                    return t
                        .replace(/(.)([A-Z])/g, function (t, e, i) {
                            return e + "-" + i;
                        })
                        .toLowerCase();
                },
            },
            u = h.console;
        return (
            (c.htmlInit = function (a, l) {
                c.docReady(function () {
                    var t = c.toDashed(l),
                        n = "data-" + t,
                        e = document.querySelectorAll("[" + n + "]"),
                        i = document.querySelectorAll(".js-" + t),
                        s = c.makeArray(e).concat(c.makeArray(i)),
                        o = n + "-options",
                        r = h.jQuery;
                    s.forEach(function (e) {
                        var t,
                            i = e.getAttribute(n) || e.getAttribute(o);
                        try {
                            t = i && JSON.parse(i);
                        } catch (t) {
                            return void (u && u.error("Error parsing " + n + " on " + e.className + ": " + t));
                        }
                        var s = new a(e, t);
                        r && r.data(e, l, s);
                    });
                });
            }),
            c
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("ev-emitter"), require("get-size")))
            : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
    })(window, function (t, e) {
        "use strict";
        function i(t, e) {
            t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
        }
        var s = document.documentElement.style,
            n = "string" == typeof s.transition ? "transition" : "WebkitTransition",
            o = "string" == typeof s.transform ? "transform" : "WebkitTransform",
            r = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[n],
            a = { transform: o, transition: n, transitionDuration: n + "Duration", transitionProperty: n + "Property", transitionDelay: n + "Delay" },
            l = (i.prototype = Object.create(t.prototype));
        (l.constructor = i),
            (l._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
            }),
            (l.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (l.getSize = function () {
                this.size = e(this.element);
            }),
            (l.css = function (t) {
                var e,
                    i = this.element.style;
                for (e in t) {
                    i[a[e] || e] = t[e];
                }
            }),
            (l.getPosition = function () {
                var t = getComputedStyle(this.element),
                    e = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    s = t[e ? "left" : "right"],
                    n = t[i ? "top" : "bottom"],
                    o = this.layout.size,
                    r = -1 != s.indexOf("%") ? (parseFloat(s) / 100) * o.width : parseInt(s, 10),
                    a = -1 != n.indexOf("%") ? (parseFloat(n) / 100) * o.height : parseInt(n, 10),
                    r = isNaN(r) ? 0 : r,
                    a = isNaN(a) ? 0 : a;
                (r -= e ? o.paddingLeft : o.paddingRight), (a -= i ? o.paddingTop : o.paddingBottom), (this.position.x = r), (this.position.y = a);
            }),
            (l.layoutPosition = function () {
                var t = this.layout.size,
                    e = {},
                    i = this.layout._getOption("originLeft"),
                    s = this.layout._getOption("originTop"),
                    n = i ? "paddingLeft" : "paddingRight",
                    o = i ? "left" : "right",
                    r = i ? "right" : "left",
                    a = this.position.x + t[n];
                (e[o] = this.getXValue(a)), (e[r] = "");
                var l = s ? "paddingTop" : "paddingBottom",
                    h = s ? "top" : "bottom",
                    c = s ? "bottom" : "top",
                    u = this.position.y + t[l];
                (e[h] = this.getYValue(u)), (e[c] = ""), this.css(e), this.emitEvent("layout", [this]);
            }),
            (l.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + "%" : t + "px";
            }),
            (l.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + "%" : t + "px";
            }),
            (l._transitionTo = function (t, e) {
                this.getPosition();
                var i,
                    s,
                    n,
                    o = this.position.x,
                    r = this.position.y,
                    a = parseInt(t, 10),
                    l = parseInt(e, 10),
                    h = a === this.position.x && l === this.position.y;
                this.setPosition(t, e),
                    !h || this.isTransitioning
                        ? ((i = t - o), (s = e - r), ((n = {}).transform = this.getTranslate(i, s)), this.transition({ to: n, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }))
                        : this.layoutPosition();
            }),
            (l.getTranslate = function (t, e) {
                return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)";
            }),
            (l.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }),
            (l.moveTo = l._transitionTo),
            (l.setPosition = function (t, e) {
                (this.position.x = parseInt(t, 10)), (this.position.y = parseInt(e, 10));
            }),
            (l._nonTransition = function (t) {
                for (var e in (this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd)) t.onTransitionEnd[e].call(this);
            }),
            (l.transition = function (t) {
                if (parseFloat(this.layout.options.transitionDuration)) {
                    var e,
                        i = this._transn;
                    for (e in t.onTransitionEnd) i.onEnd[e] = t.onTransitionEnd[e];
                    for (e in t.to) (i.ingProperties[e] = !0), t.isCleaning && (i.clean[e] = !0);
                    t.from && (this.css(t.from), this.element.offsetHeight), this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
                } else this._nonTransition(t);
            });
        var h =
            "opacity," +
            o.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        (l.enableTransition = function () {
            var t;
            this.isTransitioning ||
                ((t = "number" == typeof (t = this.layout.options.transitionDuration) ? t + "ms" : t),
                this.css({ transitionProperty: h, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }),
                this.element.addEventListener(r, this, !1));
        }),
            (l.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t);
            }),
            (l.onotransitionend = function (t) {
                this.ontransitionend(t);
            });
        var c = { "-webkit-transform": "transform" };
        (l.ontransitionend = function (t) {
            var e, i;
            t.target === this.element &&
                ((e = this._transn),
                (i = c[t.propertyName] || t.propertyName),
                delete e.ingProperties[i],
                (function (t) {
                    for (var e in t) return;
                    return 1;
                })(e.ingProperties) && this.disableTransition(),
                i in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
                i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]),
                this.emitEvent("transitionEnd", [this]));
        }),
            (l.disableTransition = function () {
                this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), (this.isTransitioning = !1);
            }),
            (l._removeStyles = function (t) {
                var e,
                    i = {};
                for (e in t) i[e] = "";
                this.css(i);
            });
        var u = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
        return (
            (l.removeTransitionStyles = function () {
                this.css(u);
            }),
            (l.stagger = function (t) {
                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (l.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
            }),
            (l.remove = function () {
                return n && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                          this.removeElem();
                      }),
                      void this.hide())
                    : void this.removeElem();
            }),
            (l.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var t = this.layout.options,
                    e = {};
                (e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd), this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (l.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (l.getHideRevealTransitionEndProperty = function (t) {
                var e,
                    i = this.layout.options[t];
                if (i.opacity) return "opacity";
                for (e in i) return e;
            }),
            (l.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var t = this.layout.options,
                    e = {};
                (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd), this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (l.onHideTransitionEnd = function () {
                this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (l.destroy = function () {
                this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
            }),
            i
        );
    }),
    (function (n, o) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (t, e, i, s) {
                  return o(n, t, e, i, s);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = o(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
            : (n.Outlayer = o(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item));
    })(window, function (t, e, n, o, s) {
        "use strict";
        function r(t, e) {
            var i,
                s = o.getQueryElement(t);
            s
                ? ((this.element = s),
                  h && (this.$element = h(this.element)),
                  (this.options = o.extend({}, this.constructor.defaults)),
                  this.option(e),
                  (i = ++c),
                  (this.element.outlayerGUID = i),
                  (u[i] = this)._create(),
                  this._getOption("initLayout") && this.layout())
                : l && l.error("Bad element for " + this.constructor.namespace + ": " + (s || t));
        }
        function a(t) {
            function e() {
                t.apply(this, arguments);
            }
            return ((e.prototype = Object.create(t.prototype)).constructor = e);
        }
        function i() {}
        var l = t.console,
            h = t.jQuery,
            c = 0,
            u = {};
        (r.namespace = "outlayer"),
            (r.Item = s),
            (r.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var d = r.prototype;
        o.extend(d, e.prototype),
            (d.option = function (t) {
                o.extend(this.options, t);
            }),
            (d._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
            }),
            (r.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (d._create = function () {
                this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize();
            }),
            (d.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (d._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, s = [], n = 0; n < e.length; n++) {
                    var o = new i(e[n], this);
                    s.push(o);
                }
                return s;
            }),
            (d._filterFindItemElements = function (t) {
                return o.filterFindElements(t, this.options.itemSelector);
            }),
            (d.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element;
                });
            }),
            (d.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
            }),
            (d._init = d.layout),
            (d._resetLayout = function () {
                this.getSize();
            }),
            (d.getSize = function () {
                this.size = n(this.element);
            }),
            (d._getMeasurement = function (t, e) {
                var i,
                    s = this.options[t];
                s ? ("string" == typeof s ? (i = this.element.querySelector(s)) : s instanceof HTMLElement && (i = s), (this[t] = i ? n(i)[e] : s)) : (this[t] = 0);
            }),
            (d.layoutItems = function (t, e) {
                (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
            }),
            (d._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored;
                });
            }),
            (d._layoutItems = function (t, i) {
                var s;
                this._emitCompleteOnItems("layout", t),
                    t &&
                        t.length &&
                        ((s = []),
                        t.forEach(function (t) {
                            var e = this._getItemLayoutPosition(t);
                            (e.item = t), (e.isInstant = i || t.isLayoutInstant), s.push(e);
                        }, this),
                        this._processLayoutQueue(s));
            }),
            (d._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (d._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                    }, this);
            }),
            (d.updateStagger = function () {
                var t = this.options.stagger;
                return null == t
                    ? void (this.stagger = 0)
                    : ((this.stagger = (function (t) {
                          if ("number" == typeof t) return t;
                          var e = t.match(/(^\d*\.?\d*)(\w*)/),
                              i = e && e[1],
                              s = e && e[2];
                          return i.length ? parseFloat(i) * (p[s] || 1) : 0;
                      })(t)),
                      this.stagger);
            }),
            (d._positionItem = function (t, e, i, s, n) {
                s ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
            }),
            (d._postLayout = function () {
                this.resizeContainer();
            }),
            (d.resizeContainer = function () {
                var t;
                !this._getOption("resizeContainer") || ((t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1)));
            }),
            (d._getContainerSize = i),
            (d._setContainerMeasure = function (t, e) {
                var i;
                void 0 !== t &&
                    ((i = this.size).isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                    (t = Math.max(t, 0)),
                    (this.element.style[e ? "width" : "height"] = t + "px"));
            }),
            (d._emitCompleteOnItems = function (e, t) {
                function i() {
                    o.dispatchEvent(e + "Complete", null, [t]);
                }
                function s() {
                    ++n == r && i();
                }
                var n,
                    o = this,
                    r = t.length;
                t && r
                    ? ((n = 0),
                      t.forEach(function (t) {
                          t.once(e, s);
                      }))
                    : i();
            }),
            (d.dispatchEvent = function (t, e, i) {
                var s,
                    n = e ? [e].concat(i) : i;
                this.emitEvent(t, n), h && ((this.$element = this.$element || h(this.element)), e ? (((s = h.Event(e)).type = t), this.$element.trigger(s, i)) : this.$element.trigger(t, i));
            }),
            (d.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }),
            (d.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }),
            (d.stamp = function (t) {
                (t = this._find(t)) && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
            }),
            (d.unstamp = function (t) {
                (t = this._find(t)) &&
                    t.forEach(function (t) {
                        o.removeFrom(this.stamps, t), this.unignore(t);
                    }, this);
            }),
            (d._find = function (t) {
                if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), o.makeArray(t);
            }),
            (d._manageStamps = function () {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
            }),
            (d._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                };
            }),
            (d._manageStamp = i),
            (d._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    s = n(t);
                return { left: e.left - i.left - s.marginLeft, top: e.top - i.top - s.marginTop, right: i.right - e.right - s.marginRight, bottom: i.bottom - e.bottom - s.marginBottom };
            }),
            (d.handleEvent = o.handleEvent),
            (d.bindResize = function () {
                t.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (d.unbindResize = function () {
                t.removeEventListener("resize", this), (this.isResizeBound = !1);
            }),
            (d.onresize = function () {
                this.resize();
            }),
            o.debounceMethod(r, "onresize", 100),
            (d.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (d.needsResizeLayout = function () {
                var t = n(this.element);
                return this.size && t && t.innerWidth !== this.size.innerWidth;
            }),
            (d.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }),
            (d.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }),
            (d.prepended = function (t) {
                var e,
                    i = this._itemize(t);
                i.length && ((e = this.items.slice(0)), (this.items = i.concat(e)), this._resetLayout(), this._manageStamps(), this.layoutItems(i, !0), this.reveal(i), this.layoutItems(e));
            }),
            (d.reveal = function (t) {
                var i;
                this._emitCompleteOnItems("reveal", t),
                    t &&
                        t.length &&
                        ((i = this.updateStagger()),
                        t.forEach(function (t, e) {
                            t.stagger(e * i), t.reveal();
                        }));
            }),
            (d.hide = function (t) {
                var i;
                this._emitCompleteOnItems("hide", t),
                    t &&
                        t.length &&
                        ((i = this.updateStagger()),
                        t.forEach(function (t, e) {
                            t.stagger(e * i), t.hide();
                        }));
            }),
            (d.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e);
            }),
            (d.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e);
            }),
            (d.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i;
                }
            }),
            (d.getItems = function (t) {
                t = o.makeArray(t);
                var i = [];
                return (
                    t.forEach(function (t) {
                        var e = this.getItem(t);
                        e && i.push(e);
                    }, this),
                    i
                );
            }),
            (d.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e &&
                        e.length &&
                        e.forEach(function (t) {
                            t.remove(), o.removeFrom(this.items, t);
                        }, this);
            }),
            (d.destroy = function () {
                var t = this.element.style;
                (t.height = ""),
                    (t.position = ""),
                    (t.width = ""),
                    this.items.forEach(function (t) {
                        t.destroy();
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete u[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
            }),
            (r.data = function (t) {
                var e = (t = o.getQueryElement(t)) && t.outlayerGUID;
                return e && u[e];
            }),
            (r.create = function (t, e) {
                var i = a(r);
                return (
                    (i.defaults = o.extend({}, r.defaults)),
                    o.extend(i.defaults, e),
                    (i.compatOptions = o.extend({}, r.compatOptions)),
                    (i.namespace = t),
                    (i.data = r.data),
                    (i.Item = a(s)),
                    o.htmlInit(i, t),
                    h && h.bridget && h.bridget(t, i),
                    i
                );
            });
        var p = { ms: 1, s: 1e3 };
        return (r.Item = s), r;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope/js/item", ["outlayer/outlayer"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
    })(window, function (t) {
        "use strict";
        function e() {
            t.Item.apply(this, arguments);
        }
        var i = (e.prototype = Object.create(t.Item.prototype)),
            s = i._create;
        (i._create = function () {
            (this.id = this.layout.itemGUID++), s.call(this), (this.sortData = {});
        }),
            (i.updateSortData = function () {
                if (!this.isIgnored) {
                    (this.sortData.id = this.id), (this.sortData["original-order"] = this.id), (this.sortData.random = Math.random());
                    var t,
                        e = this.layout.options.getSortData,
                        i = this.layout._sorters;
                    for (t in e) {
                        var s = i[t];
                        this.sortData[t] = s(this.element, this);
                    }
                }
            });
        var n = i.destroy;
        return (
            (i.destroy = function () {
                n.apply(this, arguments), this.css({ display: "" });
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("get-size"), require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
    })(window, function (e, i) {
        "use strict";
        function s(t) {
            (this.isotope = t) && ((this.options = t.options[this.namespace]), (this.element = t.element), (this.items = t.filteredItems), (this.size = t.size));
        }
        var n = s.prototype;
        return (
            ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (t) {
                n[t] = function () {
                    return i.prototype[t].apply(this.isotope, arguments);
                };
            }),
            (n.needsVerticalResizeLayout = function () {
                var t = e(this.isotope.element);
                return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight;
            }),
            (n._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments);
            }),
            (n.getColumnWidth = function () {
                this.getSegmentSize("column", "Width");
            }),
            (n.getRowHeight = function () {
                this.getSegmentSize("row", "Height");
            }),
            (n.getSegmentSize = function (t, e) {
                var i,
                    s = t + e,
                    n = "outer" + e;
                this._getMeasurement(s, n), this[s] || ((i = this.getFirstItemSize()), (this[s] = (i && i[n]) || this.isotope.size["inner" + e]));
            }),
            (n.getFirstItemSize = function () {
                var t = this.isotope.filteredItems[0];
                return t && t.element && e(t.element);
            }),
            (n.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments);
            }),
            (n.getSize = function () {
                this.isotope.getSize(), (this.size = this.isotope.size);
            }),
            (s.modes = {}),
            (s.create = function (t, e) {
                function i() {
                    s.apply(this, arguments);
                }
                return ((i.prototype = Object.create(n)).constructor = i), e && (i.options = e), (s.modes[(i.prototype.namespace = t)] = i);
            }),
            s
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer"), require("get-size")))
            : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window, function (t, h) {
        var e = t.create("masonry");
        return (
            (e.compatOptions.fitWidth = "isFitWidth"),
            (e.prototype._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), (this.colYs = []);
                for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                this.maxY = 0;
            }),
            (e.prototype.measureColumns = function () {
                var t, e;
                this.getContainerWidth(), this.columnWidth || ((e = (t = this.items[0]) && t.element), (this.columnWidth = (e && h(e).outerWidth) || this.containerWidth));
                var i = (this.columnWidth += this.gutter),
                    s = this.containerWidth + this.gutter,
                    n = s / i,
                    o = i - (s % i),
                    n = Math[o && o < 1 ? "round" : "floor"](n);
                this.cols = Math.max(n, 1);
            }),
            (e.prototype.getContainerWidth = function () {
                var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                    e = h(t);
                this.containerWidth = e && e.innerWidth;
            }),
            (e.prototype._getItemLayoutPosition = function (t) {
                t.getSize();
                for (
                    var e = t.size.outerWidth % this.columnWidth,
                        i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth),
                        i = Math.min(i, this.cols),
                        s = this._getColGroup(i),
                        n = Math.min.apply(Math, s),
                        o = s.indexOf(n),
                        r = { x: this.columnWidth * o, y: n },
                        a = n + t.size.outerHeight,
                        l = this.cols + 1 - s.length,
                        h = 0;
                    h < l;
                    h++
                )
                    this.colYs[o + h] = a;
                return r;
            }),
            (e.prototype._getColGroup = function (t) {
                if (t < 2) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, s = 0; s < i; s++) {
                    var n = this.colYs.slice(s, s + t);
                    e[s] = Math.max.apply(Math, n);
                }
                return e;
            }),
            (e.prototype._manageStamp = function (t) {
                var e = h(t),
                    i = this._getElementOffset(t),
                    s = this._getOption("originLeft") ? i.left : i.right,
                    n = s + e.outerWidth,
                    o = Math.floor(s / this.columnWidth),
                    o = Math.max(0, o),
                    r = Math.floor(n / this.columnWidth);
                (r -= n % this.columnWidth ? 0 : 1), (r = Math.min(this.cols - 1, r));
                for (var a = (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight, l = o; l <= r; l++) this.colYs[l] = Math.max(a, this.colYs[l]);
            }),
            (e.prototype._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = { height: this.maxY };
                return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
            }),
            (e.prototype._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
                return (this.cols - t) * this.columnWidth - this.gutter;
            }),
            (e.prototype.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth;
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("../layout-mode"), require("masonry-layout")))
            : e(t.Isotope.LayoutMode, t.Masonry);
    })(window, function (t, e) {
        "use strict";
        var i,
            s = t.create("masonry"),
            n = s.prototype,
            o = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (i in e.prototype) o[i] || (n[i] = e.prototype[i]);
        var r = n.measureColumns;
        n.measureColumns = function () {
            (this.items = this.isotope.filteredItems), r.call(this);
        };
        var a = n._getOption;
        return (
            (n._getOption = function (t) {
                return "fitWidth" == t ? (void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth) : a.apply(this.isotope, arguments);
            }),
            s
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? (module.exports = e(require("../layout-mode"))) : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement("gutter", "outerWidth");
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter,
                    i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
                var s = { x: this.x, y: this.y };
                return (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)), (this.x += e), s;
            }),
            (i._getContainerSize = function () {
                return { height: this.maxY };
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? (module.exports = e(require("../layout-mode"))) : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("vertical", { horizontalAlignment: 0 }),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                this.y = 0;
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                    i = this.y;
                return (this.y += t.size.outerHeight), { x: e, y: i };
            }),
            (i._getContainerSize = function () {
                return { height: this.y };
            }),
            e
        );
    }),
    (function (r, a) {
        "function" == typeof define && define.amd
            ? define([
                  "outlayer/outlayer",
                  "get-size/get-size",
                  "desandro-matches-selector/matches-selector",
                  "fizzy-ui-utils/utils",
                  "isotope/js/item",
                  "isotope/js/layout-mode",
                  "isotope/js/layout-modes/masonry",
                  "isotope/js/layout-modes/fit-rows",
                  "isotope/js/layout-modes/vertical",
              ], function (t, e, i, s, n, o) {
                  return a(r, t, 0, i, s, n, o);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = a(
                  r,
                  require("outlayer"),
                  require("get-size"),
                  require("desandro-matches-selector"),
                  require("fizzy-ui-utils"),
                  require("isotope/js/item"),
                  require("isotope/js/layout-mode"),
                  require("isotope/js/layout-modes/masonry"),
                  require("isotope/js/layout-modes/fit-rows"),
                  require("isotope/js/layout-modes/vertical")
              ))
            : (r.Isotope = a(r, r.Outlayer, r.getSize, r.matchesSelector, r.fizzyUIUtils, r.Isotope.Item, r.Isotope.LayoutMode));
    })(window, function (t, i, e, s, o, n, r) {
        var a = t.jQuery,
            h = String.prototype.trim
                ? function (t) {
                      return t.trim();
                  }
                : function (t) {
                      return t.replace(/^\s+|\s+$/g, "");
                  },
            c = i.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
        (c.Item = n), (c.LayoutMode = r);
        var l = c.prototype;
        (l._create = function () {
            for (var t in ((this.itemGUID = 0), (this._sorters = {}), this._getSorters(), i.prototype._create.call(this), (this.modes = {}), (this.filteredItems = this.items), (this.sortHistory = ["original-order"]), r.modes))
                this._initLayoutMode(t);
        }),
            (l.reloadItems = function () {
                (this.itemGUID = 0), i.prototype.reloadItems.call(this);
            }),
            (l._itemize = function () {
                for (var t = i.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++) {
                    t[e].id = this.itemGUID++;
                }
                return this._updateItemsSortData(t), t;
            }),
            (l._initLayoutMode = function (t) {
                var e = r.modes[t],
                    i = this.options[t] || {};
                (this.options[t] = e.options ? o.extend(e.options, i) : i), (this.modes[t] = new e(this));
            }),
            (l.layout = function () {
                return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
            }),
            (l._layout = function () {
                var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), (this._isLayoutInited = !0);
            }),
            (l.arrange = function (t) {
                this.option(t), this._getIsInstant();
                var e = this._filter(this.items);
                (this.filteredItems = e.matches), this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
            }),
            (l._init = l.arrange),
            (l._hideReveal = function (t) {
                this.reveal(t.needReveal), this.hide(t.needHide);
            }),
            (l._getIsInstant = function () {
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                return (this._isInstant = e);
            }),
            (l._bindArrangeComplete = function () {
                function t() {
                    e && i && s && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
                }
                var e,
                    i,
                    s,
                    n = this;
                this.once("layoutComplete", function () {
                    (e = !0), t();
                }),
                    this.once("hideComplete", function () {
                        (i = !0), t();
                    }),
                    this.once("revealComplete", function () {
                        (s = !0), t();
                    });
            }),
            (l._filter = function (t) {
                for (var e = (e = this.options.filter) || "*", i = [], s = [], n = [], o = this._getFilterTest(e), r = 0; r < t.length; r++) {
                    var a,
                        l = t[r];
                    l.isIgnored || ((a = o(l)) && i.push(l), a && l.isHidden ? s.push(l) : a || l.isHidden || n.push(l));
                }
                return { matches: i, needReveal: s, needHide: n };
            }),
            (l._getFilterTest = function (e) {
                return a && this.options.isJQueryFiltering
                    ? function (t) {
                          return a(t.element).is(e);
                      }
                    : "function" == typeof e
                    ? function (t) {
                          return e(t.element);
                      }
                    : function (t) {
                          return s(t.element, e);
                      };
            }),
            (l.updateSortData = function (t) {
                var e = t ? ((t = o.makeArray(t)), this.getItems(t)) : this.items;
                this._getSorters(), this._updateItemsSortData(e);
            }),
            (l._getSorters = function () {
                var t,
                    e = this.options.getSortData;
                for (t in e) {
                    var i = e[t];
                    this._sorters[t] = u(i);
                }
            }),
            (l._updateItemsSortData = function (t) {
                for (var e = t && t.length, i = 0; e && i < e; i++) {
                    t[i].updateSortData();
                }
            });
        var u = function (t) {
            if ("string" != typeof t) return t;
            var e,
                i,
                s = h(t).split(" "),
                n = s[0],
                o = n.match(/^\[(.+)\]$/),
                r = o && o[1],
                a =
                    ((i = n),
                    (e = r)
                        ? function (t) {
                              return t.getAttribute(e);
                          }
                        : function (t) {
                              var e = t.querySelector(i);
                              return e && e.textContent;
                          }),
                l = c.sortDataParsers[s[1]];
            return l
                ? function (t) {
                      return t && l(a(t));
                  }
                : function (t) {
                      return t && a(t);
                  };
        };
        (c.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10);
            },
            parseFloat: function (t) {
                return parseFloat(t);
            },
        }),
            (l._sort = function () {
                var t, e, r, a;
                this.options.sortBy &&
                    ((t = o.makeArray(this.options.sortBy)),
                    this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory)),
                    (r = this.sortHistory),
                    (a = this.options.sortAscending),
                    (e = function (t, e) {
                        for (var i = 0; i < r.length; i++) {
                            var s = r[i],
                                n = t.sortData[s],
                                o = e.sortData[s];
                            if (o < n || n < o) return (o < n ? 1 : -1) * ((void 0 !== a[s] ? a[s] : a) ? 1 : -1);
                        }
                        return 0;
                    }),
                    this.filteredItems.sort(e));
            }),
            (l._getIsSameSortBy = function (t) {
                for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
                return !0;
            }),
            (l._mode = function () {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw new Error("No layout mode: " + t);
                return (e.options = this.options[t]), e;
            }),
            (l._resetLayout = function () {
                i.prototype._resetLayout.call(this), this._mode()._resetLayout();
            }),
            (l._getItemLayoutPosition = function (t) {
                return this._mode()._getItemLayoutPosition(t);
            }),
            (l._manageStamp = function (t) {
                this._mode()._manageStamp(t);
            }),
            (l._getContainerSize = function () {
                return this._mode()._getContainerSize();
            }),
            (l.needsResizeLayout = function () {
                return this._mode().needsResizeLayout();
            }),
            (l.appended = function (t) {
                var e,
                    i = this.addItems(t);
                i.length && ((e = this._filterRevealAdded(i)), (this.filteredItems = this.filteredItems.concat(e)));
            }),
            (l.prepended = function (t) {
                var e,
                    i = this._itemize(t);
                i.length && (this._resetLayout(), this._manageStamps(), (e = this._filterRevealAdded(i)), this.layoutItems(this.filteredItems), (this.filteredItems = e.concat(this.filteredItems)), (this.items = i.concat(this.items)));
            }),
            (l._filterRevealAdded = function (t) {
                var e = this._filter(t);
                return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
            }),
            (l.insert = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    for (var i, s = e.length, n = 0; n < s; n++) (i = e[n]), this.element.appendChild(i.element);
                    var o = this._filter(e).matches;
                    for (n = 0; n < s; n++) e[n].isLayoutInstant = !0;
                    for (this.arrange(), n = 0; n < s; n++) delete e[n].isLayoutInstant;
                    this.reveal(o);
                }
            });
        var d = l.remove;
        return (
            (l.remove = function (t) {
                t = o.makeArray(t);
                var e = this.getItems(t);
                d.call(this, t);
                for (var i = e && e.length, s = 0; i && s < i; s++) {
                    var n = e[s];
                    o.removeFrom(this.filteredItems, n);
                }
            }),
            (l.shuffle = function () {
                for (var t = 0; t < this.items.length; t++) {
                    this.items[t].sortData.random = Math.random();
                }
                (this.options.sortBy = "random"), this._sort(), this._layout();
            }),
            (l._noTransition = function (t, e) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var s = t.apply(this, e);
                return (this.options.transitionDuration = i), s;
            }),
            (l.getFilteredItemElements = function () {
                return this.filteredItems.map(function (t) {
                    return t.element;
                });
            }),
            c
        );
    }),
    (function (e) {
        function i(t, e) {
            var i, s;
            1 < t.originalEvent.touches.length ||
                (t.preventDefault(),
                (i = t.originalEvent.changedTouches[0]),
                (s = document.createEvent("MouseEvents")).initMouseEvent(e, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
                t.target.dispatchEvent(s));
        }
       
    })(jQuery);
    (function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
    })(function (k) {
        function t() {
            (this._curInst = null),
                (this._keyEvent = !1),
                (this._disabledInputs = []),
                (this._datepickerShowing = !1),
                (this._inDialog = !1),
                (this._mainDivId = "ui-datepicker-div"),
                (this._inlineClass = "ui-datepicker-inline"),
                (this._appendClass = "ui-datepicker-append"),
                (this._triggerClass = "ui-datepicker-trigger"),
                (this._dialogClass = "ui-datepicker-dialog"),
                (this._disableClass = "ui-datepicker-disabled"),
                (this._unselectableClass = "ui-datepicker-unselectable"),
                (this._currentClass = "ui-datepicker-current-day"),
                (this._dayOverClass = "ui-datepicker-days-cell-over"),
                (this.regional = []),
                (this.regional[""] = {
                    closeText: "Done",
                    prevText: "Prev",
                    nextText: "Next",
                    currentText: "Today",
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    weekHeader: "Wk",
                    dateFormat: "mm/dd/yy",
                    firstDay: 0,
                    isRTL: !1,
                    showMonthAfterYear: !1,
                    yearSuffix: "",
                }),
                (this._defaults = {
                    showOn: "focus",
                    showAnim: "fadeIn",
                    showOptions: {},
                    defaultDate: null,
                    appendText: "",
                    buttonText: "...",
                    buttonImage: "",
                    buttonImageOnly: !1,
                    hideIfNoPrevNext: !1,
                    navigationAsDateFormat: !1,
                    gotoCurrent: !1,
                    changeMonth: !1,
                    changeYear: !1,
                    yearRange: "c-10:c+10",
                    showOtherMonths: !1,
                    selectOtherMonths: !1,
                    showWeek: !1,
                    calculateWeek: this.iso8601Week,
                    shortYearCutoff: "+10",
                    minDate: null,
                    maxDate: null,
                    duration: "fast",
                    beforeShowDay: null,
                    beforeShow: null,
                    onSelect: null,
                    onChangeMonthYear: null,
                    onClose: null,
                    numberOfMonths: 1,
                    showCurrentAtPos: 0,
                    stepMonths: 1,
                    stepBigMonths: 12,
                    altField: "",
                    altFormat: "",
                    constrainInput: !0,
                    showButtonPanel: !1,
                    autoSize: !1,
                    disabled: !1,
                }),
                k.extend(this._defaults, this.regional[""]),
                (this.regional.en = k.extend(!0, {}, this.regional[""])),
                (this.regional["en-US"] = k.extend(!0, {}, this.regional.en)),
                (this.dpDiv = i(k("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")));
        }
        function i(t) {
            var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t
                .on("mouseout", e, function () {
                    k(this).removeClass("ui-state-hover"),
                        -1 !== this.className.indexOf("ui-datepicker-prev") && k(this).removeClass("ui-datepicker-prev-hover"),
                        -1 !== this.className.indexOf("ui-datepicker-next") && k(this).removeClass("ui-datepicker-next-hover");
                })
                .on("mouseover", e, o);
        }
        function o() {
            k.datepicker._isDisabledDatepicker(it.inline ? it.dpDiv.parent()[0] : it.input[0]) ||
                (k(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
                k(this).addClass("ui-state-hover"),
                -1 !== this.className.indexOf("ui-datepicker-prev") && k(this).addClass("ui-datepicker-prev-hover"),
                -1 !== this.className.indexOf("ui-datepicker-next") && k(this).addClass("ui-datepicker-next-hover"));
        }
        function u(t, e) {
            for (var i in (k.extend(t, e), e)) null == e[i] && (t[i] = e[i]);
            return t;
        }
        function e(e) {
            return function () {
                var t = this.element.val();
                e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change");
            };
        }
        (k.ui = k.ui || {}), (k.ui.version = "1.12.1");
        var s,
            n,
            x,
            C,
            r,
            a,
            l,
            h,
            c,
            T,
            d,
            p = 0,
            f = Array.prototype.slice;
        function S(t, e, i) {
            return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)];
        }
        function D(t, e) {
            return parseInt(k.css(t, e), 10) || 0;
        }
        (k.cleanData =
            ((d = k.cleanData),
            function (t) {
                for (var e, i, s = 0; null != (i = t[s]); s++)
                    try {
                        (e = k._data(i, "events")) && e.remove && k(i).triggerHandler("remove");
                    } catch (t) {}
                d(t);
            })),
            (k.widget = function (t, i, e) {
                var s,
                    n,
                    o,
                    r = {},
                    a = t.split(".")[0],
                    l = a + "-" + (t = t.split(".")[1]);
                return (
                    e || ((e = i), (i = k.Widget)),
                    k.isArray(e) && (e = k.extend.apply(null, [{}].concat(e))),
                    (k.expr[":"][l.toLowerCase()] = function (t) {
                        return !!k.data(t, l);
                    }),
                    (k[a] = k[a] || {}),
                    (s = k[a][t]),
                    (n = k[a][t] = function (t, e) {
                        return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new n(t, e);
                    }),
                    k.extend(n, s, { version: e.version, _proto: k.extend({}, e), _childConstructors: [] }),
                    ((o = new i()).options = k.widget.extend({}, o.options)),
                    k.each(e, function (e, s) {
                        return k.isFunction(s)
                            ? void (r[e] = function () {
                                  var t,
                                      e = this._super,
                                      i = this._superApply;
                                  return (this._super = n), (this._superApply = o), (t = s.apply(this, arguments)), (this._super = e), (this._superApply = i), t;
                              })
                            : void (r[e] = s);
                        function n() {
                            return i.prototype[e].apply(this, arguments);
                        }
                        function o(t) {
                            return i.prototype[e].apply(this, t);
                        }
                    }),
                    (n.prototype = k.widget.extend(o, { widgetEventPrefix: (s && o.widgetEventPrefix) || t }, r, { constructor: n, namespace: a, widgetName: t, widgetFullName: l })),
                    s
                        ? (k.each(s._childConstructors, function (t, e) {
                              var i = e.prototype;
                              k.widget(i.namespace + "." + i.widgetName, n, e._proto);
                          }),
                          delete s._childConstructors)
                        : i._childConstructors.push(n),
                    k.widget.bridge(t, n),
                    n
                );
            }),
            (k.widget.extend = function (t) {
                for (var e, i, s = f.call(arguments, 1), n = 0, o = s.length; n < o; n++)
                    for (e in s[n]) (i = s[n][e]), s[n].hasOwnProperty(e) && void 0 !== i && (t[e] = k.isPlainObject(i) ? (k.isPlainObject(t[e]) ? k.widget.extend({}, t[e], i) : k.widget.extend({}, i)) : i);
                return t;
            }),
            (k.widget.bridge = function (o, e) {
                var r = e.prototype.widgetFullName || o;
                k.fn[o] = function (i) {
                    var t = "string" == typeof i,
                        s = f.call(arguments, 1),
                        n = this;
                    return (
                        t
                            ? this.length || "instance" !== i
                                ? this.each(function () {
                                      var t,
                                          e = k.data(this, r);
                                      return "instance" === i
                                          ? ((n = e), !1)
                                          : e
                                          ? k.isFunction(e[i]) && "_" !== i.charAt(0)
                                              ? (t = e[i].apply(e, s)) !== e && void 0 !== t
                                                  ? ((n = t && t.jquery ? n.pushStack(t.get()) : t), !1)
                                                  : void 0
                                              : k.error("no such method '" + i + "' for " + o + " widget instance")
                                          : k.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + i + "'");
                                  })
                                : (n = void 0)
                            : (s.length && (i = k.widget.extend.apply(null, [i].concat(s))),
                              this.each(function () {
                                  var t = k.data(this, r);
                                  t ? (t.option(i || {}), t._init && t._init()) : k.data(this, r, new e(i, this));
                              })),
                        n
                    );
                };
            }),
            (k.Widget = function () {}),
            (k.Widget._childConstructors = []),
            (k.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: { classes: {}, disabled: !1, create: null },
                _createWidget: function (t, e) {
                    (e = k(e || this.defaultElement || this)[0]),
                        (this.element = k(e)),
                        (this.uuid = p++),
                        (this.eventNamespace = "." + this.widgetName + this.uuid),
                        (this.bindings = k()),
                        (this.hoverable = k()),
                        (this.focusable = k()),
                        (this.classesElementLookup = {}),
                        e !== this &&
                            (k.data(e, this.widgetFullName, this),
                            this._on(!0, this.element, {
                                remove: function (t) {
                                    t.target === e && this.destroy();
                                },
                            }),
                            (this.document = k(e.style ? e.ownerDocument : e.document || e)),
                            (this.window = k(this.document[0].defaultView || this.document[0].parentWindow))),
                        (this.options = k.widget.extend({}, this.options, this._getCreateOptions(), t)),
                        this._create(),
                        this.options.disabled && this._setOptionDisabled(this.options.disabled),
                        this._trigger("create", null, this._getCreateEventData()),
                        this._init();
                },
                _getCreateOptions: function () {
                    return {};
                },
                _getCreateEventData: k.noop,
                _create: k.noop,
                _init: k.noop,
                destroy: function () {
                    var i = this;
                    this._destroy(),
                        k.each(this.classesElementLookup, function (t, e) {
                            i._removeClass(e, t);
                        }),
                        this.element.off(this.eventNamespace).removeData(this.widgetFullName),
                        this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
                        this.bindings.off(this.eventNamespace);
                },
                _destroy: k.noop,
                widget: function () {
                    return this.element;
                },
                option: function (t, e) {
                    var i,
                        s,
                        n,
                        o = t;
                    if (0 === arguments.length) return k.widget.extend({}, this.options);
                    if ("string" == typeof t)
                        if (((o = {}), (t = (i = t.split(".")).shift()), i.length)) {
                            for (s = o[t] = k.widget.extend({}, this.options[t]), n = 0; i.length - 1 > n; n++) (s[i[n]] = s[i[n]] || {}), (s = s[i[n]]);
                            if (((t = i.pop()), 1 === arguments.length)) return void 0 === s[t] ? null : s[t];
                            s[t] = e;
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                            o[t] = e;
                        }
                    return this._setOptions(o), this;
                },
                _setOptions: function (t) {
                    for (var e in t) this._setOption(e, t[e]);
                    return this;
                },
                _setOption: function (t, e) {
                    return "classes" === t && this._setOptionClasses(e), (this.options[t] = e), "disabled" === t && this._setOptionDisabled(e), this;
                },
                _setOptionClasses: function (t) {
                    var e, i, s;
                    for (e in t) (s = this.classesElementLookup[e]), t[e] !== this.options.classes[e] && s && s.length && ((i = k(s.get())), this._removeClass(s, e), i.addClass(this._classes({ element: i, keys: e, classes: t, add: !0 })));
                },
                _setOptionDisabled: function (t) {
                    this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
                },
                enable: function () {
                    return this._setOptions({ disabled: !1 });
                },
                disable: function () {
                    return this._setOptions({ disabled: !0 });
                },
                _classes: function (n) {
                    function t(t, e) {
                        for (var i, s = 0; t.length > s; s++)
                            (i = r.classesElementLookup[t[s]] || k()),
                                (i = n.add ? k(k.unique(i.get().concat(n.element.get()))) : k(i.not(n.element).get())),
                                (r.classesElementLookup[t[s]] = i),
                                o.push(t[s]),
                                e && n.classes[t[s]] && o.push(n.classes[t[s]]);
                    }
                    var o = [],
                        r = this;
                    return (
                        (n = k.extend({ element: this.element, classes: this.options.classes || {} }, n)),
                        this._on(n.element, { remove: "_untrackClassesElement" }),
                        n.keys && t(n.keys.match(/\S+/g) || [], !0),
                        n.extra && t(n.extra.match(/\S+/g) || []),
                        o.join(" ")
                    );
                },
                _untrackClassesElement: function (i) {
                    var s = this;
                    k.each(s.classesElementLookup, function (t, e) {
                        -1 !== k.inArray(i.target, e) && (s.classesElementLookup[t] = k(e.not(i.target).get()));
                    });
                },
                _removeClass: function (t, e, i) {
                    return this._toggleClass(t, e, i, !1);
                },
                _addClass: function (t, e, i) {
                    return this._toggleClass(t, e, i, !0);
                },
                _toggleClass: function (t, e, i, s) {
                    s = "boolean" == typeof s ? s : i;
                    var n = "string" == typeof t || null === t,
                        o = { extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s };
                    return o.element.toggleClass(this._classes(o), s), this;
                },
                _on: function (r, a, t) {
                    var l,
                        h = this;
                    "boolean" != typeof r && ((t = a), (a = r), (r = !1)),
                        t ? ((a = l = k(a)), (this.bindings = this.bindings.add(a))) : ((t = a), (a = this.element), (l = this.widget())),
                        k.each(t, function (t, e) {
                            function i() {
                                return r || (!0 !== h.options.disabled && !k(this).hasClass("ui-state-disabled")) ? ("string" == typeof e ? h[e] : e).apply(h, arguments) : void 0;
                            }
                            "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || k.guid++);
                            var s = t.match(/^([\w:-]*)\s*(.*)$/),
                                n = s[1] + h.eventNamespace,
                                o = s[2];
                            o ? l.on(n, o, i) : a.on(n, i);
                        });
                },
                _off: function (t, e) {
                    (e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace),
                        t.off(e).off(e),
                        (this.bindings = k(this.bindings.not(t).get())),
                        (this.focusable = k(this.focusable.not(t).get())),
                        (this.hoverable = k(this.hoverable.not(t).get()));
                },
                _delay: function (t, e) {
                    var i = this;
                    return setTimeout(function () {
                        return ("string" == typeof t ? i[t] : t).apply(i, arguments);
                    }, e || 0);
                },
                _hoverable: function (t) {
                    (this.hoverable = this.hoverable.add(t)),
                        this._on(t, {
                            mouseenter: function (t) {
                                this._addClass(k(t.currentTarget), null, "ui-state-hover");
                            },
                            mouseleave: function (t) {
                                this._removeClass(k(t.currentTarget), null, "ui-state-hover");
                            },
                        });
                },
                _focusable: function (t) {
                    (this.focusable = this.focusable.add(t)),
                        this._on(t, {
                            focusin: function (t) {
                                this._addClass(k(t.currentTarget), null, "ui-state-focus");
                            },
                            focusout: function (t) {
                                this._removeClass(k(t.currentTarget), null, "ui-state-focus");
                            },
                        });
                },
                _trigger: function (t, e, i) {
                    var s,
                        n,
                        o = this.options[t];
                    if (((i = i || {}), ((e = k.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase()), (e.target = this.element[0]), (n = e.originalEvent))) for (s in n) s in e || (e[s] = n[s]);
                    return this.element.trigger(e, i), !((k.isFunction(o) && !1 === o.apply(this.element[0], [e].concat(i))) || e.isDefaultPrevented());
                },
            }),
            k.each({ show: "fadeIn", hide: "fadeOut" }, function (o, r) {
                k.Widget.prototype["_" + o] = function (e, t, i) {
                    "string" == typeof t && (t = { effect: t });
                    var s,
                        n = t ? (!0 !== t && "number" != typeof t && t.effect) || r : o;
                    "number" == typeof (t = t || {}) && (t = { duration: t }),
                        (s = !k.isEmptyObject(t)),
                        (t.complete = i),
                        t.delay && e.delay(t.delay),
                        s && k.effects && k.effects.effect[n]
                            ? e[o](t)
                            : n !== o && e[n]
                            ? e[n](t.duration, t.easing, i)
                            : e.queue(function (t) {
                                  k(this)[o](), i && i.call(e[0]), t();
                              });
                };
            }),
            k.widget,
            (x = Math.max),
            (C = Math.abs),
            (r = /left|center|right/),
            (a = /top|center|bottom/),
            (l = /[\+\-]\d+(\.[\d]+)?%?/),
            (h = /^\w+/),
            (c = /%$/),
            (T = k.fn.position),
            (k.position = {
                scrollbarWidth: function () {
                    if (void 0 !== n) return n;
                    var t,
                        e,
                        i = k("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        s = i.children()[0];
                    return k("body").append(i), (t = s.offsetWidth), i.css("overflow", "scroll"), t === (e = s.offsetWidth) && (e = i[0].clientWidth), i.remove(), (n = t - e);
                },
                getScrollInfo: function (t) {
                    var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        s = "scroll" === e || ("auto" === e && t.width < t.element[0].scrollWidth);
                    return { width: "scroll" === i || ("auto" === i && t.height < t.element[0].scrollHeight) ? k.position.scrollbarWidth() : 0, height: s ? k.position.scrollbarWidth() : 0 };
                },
                getWithinInfo: function (t) {
                    var e = k(t || window),
                        i = k.isWindow(e[0]),
                        s = !!e[0] && 9 === e[0].nodeType;
                    return { element: e, isWindow: i, isDocument: s, offset: !i && !s ? k(t).offset() : { left: 0, top: 0 }, scrollLeft: e.scrollLeft(), scrollTop: e.scrollTop(), width: e.outerWidth(), height: e.outerHeight() };
                },
            }),
            (k.fn.position = function (u) {
                if (!u || !u.of) return T.apply(this, arguments);
                u = k.extend({}, u);
                var d,
                    p,
                    f,
                    m,
                    g,
                    t,
                    e,
                    v = k(u.of),
                    y = k.position.getWithinInfo(u.within),
                    _ = k.position.getScrollInfo(y),
                    b = (u.collision || "flip").split(" "),
                    w = {},
                    i =
                        9 === (e = (t = v)[0]).nodeType
                            ? { width: t.width(), height: t.height(), offset: { top: 0, left: 0 } }
                            : k.isWindow(e)
                            ? { width: t.width(), height: t.height(), offset: { top: t.scrollTop(), left: t.scrollLeft() } }
                            : e.preventDefault
                            ? { width: 0, height: 0, offset: { top: e.pageY, left: e.pageX } }
                            : { width: t.outerWidth(), height: t.outerHeight(), offset: t.offset() };
                return (
                    v[0].preventDefault && (u.at = "left top"),
                    (p = i.width),
                    (f = i.height),
                    (m = i.offset),
                    (g = k.extend({}, m)),
                    k.each(["my", "at"], function () {
                        var t,
                            e,
                            i = (u[this] || "").split(" ");
                        1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : a.test(i[0]) ? ["center"].concat(i) : ["center", "center"]),
                            (i[0] = r.test(i[0]) ? i[0] : "center"),
                            (i[1] = a.test(i[1]) ? i[1] : "center"),
                            (t = l.exec(i[0])),
                            (e = l.exec(i[1])),
                            (w[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                            (u[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]);
                    }),
                    1 === b.length && (b[1] = b[0]),
                    "right" === u.at[0] ? (g.left += p) : "center" === u.at[0] && (g.left += p / 2),
                    "bottom" === u.at[1] ? (g.top += f) : "center" === u.at[1] && (g.top += f / 2),
                    (d = S(w.at, p, f)),
                    (g.left += d[0]),
                    (g.top += d[1]),
                    this.each(function () {
                        var i,
                            t,
                            r = k(this),
                            a = r.outerWidth(),
                            l = r.outerHeight(),
                            e = D(this, "marginLeft"),
                            s = D(this, "marginTop"),
                            n = a + e + D(this, "marginRight") + _.width,
                            o = l + s + D(this, "marginBottom") + _.height,
                            h = k.extend({}, g),
                            c = S(w.my, r.outerWidth(), r.outerHeight());
                        "right" === u.my[0] ? (h.left -= a) : "center" === u.my[0] && (h.left -= a / 2),
                            "bottom" === u.my[1] ? (h.top -= l) : "center" === u.my[1] && (h.top -= l / 2),
                            (h.left += c[0]),
                            (h.top += c[1]),
                            (i = { marginLeft: e, marginTop: s }),
                            k.each(["left", "top"], function (t, e) {
                                k.ui.position[b[t]] &&
                                    k.ui.position[b[t]][e](h, {
                                        targetWidth: p,
                                        targetHeight: f,
                                        elemWidth: a,
                                        elemHeight: l,
                                        collisionPosition: i,
                                        collisionWidth: n,
                                        collisionHeight: o,
                                        offset: [d[0] + c[0], d[1] + c[1]],
                                        my: u.my,
                                        at: u.at,
                                        within: y,
                                        elem: r,
                                    });
                            }),
                            u.using &&
                                (t = function (t) {
                                    var e = m.left - h.left,
                                        i = e + p - a,
                                        s = m.top - h.top,
                                        n = s + f - l,
                                        o = {
                                            target: { element: v, left: m.left, top: m.top, width: p, height: f },
                                            element: { element: r, left: h.left, top: h.top, width: a, height: l },
                                            horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                                            vertical: n < 0 ? "top" : 0 < s ? "bottom" : "middle",
                                        };
                                    p < a && p > C(e + i) && (o.horizontal = "center"), f < l && f > C(s + n) && (o.vertical = "middle"), (o.important = x(C(e), C(i)) > x(C(s), C(n)) ? "horizontal" : "vertical"), u.using.call(this, t, o);
                                }),
                            r.offset(k.extend(h, { using: t }));
                    })
                );
            }),
            (k.ui.position = {
                fit: {
                    left: function (t, e) {
                        var i,
                            s = e.within,
                            n = s.isWindow ? s.scrollLeft : s.offset.left,
                            o = s.width,
                            r = t.left - e.collisionPosition.marginLeft,
                            a = n - r,
                            l = r + e.collisionWidth - o - n;
                        e.collisionWidth > o
                            ? 0 < a && l <= 0
                                ? ((i = t.left + a + e.collisionWidth - o - n), (t.left += a - i))
                                : (t.left = !(0 < l && a <= 0) && l < a ? n + o - e.collisionWidth : n)
                            : 0 < a
                            ? (t.left += a)
                            : 0 < l
                            ? (t.left -= l)
                            : (t.left = x(t.left - r, t.left));
                    },
                    top: function (t, e) {
                        var i,
                            s = e.within,
                            n = s.isWindow ? s.scrollTop : s.offset.top,
                            o = e.within.height,
                            r = t.top - e.collisionPosition.marginTop,
                            a = n - r,
                            l = r + e.collisionHeight - o - n;
                        e.collisionHeight > o
                            ? 0 < a && l <= 0
                                ? ((i = t.top + a + e.collisionHeight - o - n), (t.top += a - i))
                                : (t.top = !(0 < l && a <= 0) && l < a ? n + o - e.collisionHeight : n)
                            : 0 < a
                            ? (t.top += a)
                            : 0 < l
                            ? (t.top -= l)
                            : (t.top = x(t.top - r, t.top));
                    },
                },
                flip: {
                    left: function (t, e) {
                        var i,
                            s,
                            n = e.within,
                            o = n.offset.left + n.scrollLeft,
                            r = n.width,
                            a = n.isWindow ? n.scrollLeft : n.offset.left,
                            l = t.left - e.collisionPosition.marginLeft,
                            h = l - a,
                            c = l + e.collisionWidth - r - a,
                            u = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            d = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            p = -2 * e.offset[0];
                        h < 0
                            ? ((i = t.left + u + d + p + e.collisionWidth - r - o) < 0 || C(h) > i) && (t.left += u + d + p)
                            : 0 < c && (0 < (s = t.left - e.collisionPosition.marginLeft + u + d + p - a) || c > C(s)) && (t.left += u + d + p);
                    },
                    top: function (t, e) {
                        var i,
                            s,
                            n = e.within,
                            o = n.offset.top + n.scrollTop,
                            r = n.height,
                            a = n.isWindow ? n.scrollTop : n.offset.top,
                            l = t.top - e.collisionPosition.marginTop,
                            h = l - a,
                            c = l + e.collisionHeight - r - a,
                            u = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            d = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            p = -2 * e.offset[1];
                        h < 0 ? ((s = t.top + u + d + p + e.collisionHeight - r - o) < 0 || C(h) > s) && (t.top += u + d + p) : 0 < c && (0 < (i = t.top - e.collisionPosition.marginTop + u + d + p - a) || c > C(i)) && (t.top += u + d + p);
                    },
                },
                flipfit: {
                    left: function () {
                        k.ui.position.flip.left.apply(this, arguments), k.ui.position.fit.left.apply(this, arguments);
                    },
                    top: function () {
                        k.ui.position.flip.top.apply(this, arguments), k.ui.position.fit.top.apply(this, arguments);
                    },
                },
            }),
            k.ui.position,
            k.extend(k.expr[":"], {
                data: k.expr.createPseudo
                    ? k.expr.createPseudo(function (e) {
                          return function (t) {
                              return !!k.data(t, e);
                          };
                      })
                    : function (t, e, i) {
                          return !!k.data(t, i[3]);
                      },
            }),
            k.fn.extend({
                disableSelection:
                    ((s = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"),
                    function () {
                        return this.on(s + ".ui-disableSelection", function (t) {
                            t.preventDefault();
                        });
                    }),
                enableSelection: function () {
                    return this.off(".ui-disableSelection");
                },
            });
        var m,
            g,
            v,
            y,
            _,
            b,
            w,
            I,
            E,
            A,
            P,
            O,
            M,
            z,
            $,
            H,
            L,
            W,
            N,
            F,
            R,
            j = "ui-effects-",
            q = "ui-effects-style",
            Y = "ui-effects-animated",
            B = k;
        function U(t, e, i, s) {
            return (
                k.isPlainObject(t) && (t = (e = t).effect),
                (t = { effect: t }),
                null == e && (e = {}),
                k.isFunction(e) && ((s = e), (i = null), (e = {})),
                ("number" != typeof e && !k.fx.speeds[e]) || ((s = i), (i = e), (e = {})),
                k.isFunction(i) && ((s = i), (i = null)),
                e && k.extend(t, e),
                (i = i || e.duration),
                (t.duration = k.fx.off ? 0 : "number" == typeof i ? i : i in k.fx.speeds ? k.fx.speeds[i] : k.fx.speeds._default),
                (t.complete = s || e.complete),
                t
            );
        }
        function X(t) {
            return !t || "number" == typeof t || k.fx.speeds[t] || ("string" == typeof t && !k.effects.effect[t]) || k.isFunction(t) || ("object" == typeof t && !t.effect);
        }
        function V(t, e) {
            var i = e.outerWidth(),
                s = e.outerHeight(),
                n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, s, 0];
            return { top: parseFloat(n[1]) || 0, right: "auto" === n[2] ? i : parseFloat(n[2]), bottom: "auto" === n[3] ? s : parseFloat(n[3]), left: parseFloat(n[4]) || 0 };
        }
        function G(t) {
            var e,
                i,
                s = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                n = {};
            if (s && s.length && s[0] && s[s[0]]) for (i = s.length; i--; ) "string" == typeof s[(e = s[i])] && (n[k.camelCase(e)] = s[e]);
            else for (e in s) "string" == typeof s[e] && (n[e] = s[e]);
            return n;
        }
        function K(t, e, i) {
            var s = W[e.type] || {};
            return null == t ? (i || !e.def ? null : e.def) : ((t = s.floor ? ~~t : parseFloat(t)), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : t < 0 ? 0 : s.max < t ? s.max : t);
        }
        function Q(r) {
            var a = H(),
                l = (a._rgba = []);
            return (
                (r = r.toLowerCase()),
                R($, function (t, e) {
                    var i,
                        s = e.re.exec(r),
                        n = s && e.parse(s),
                        o = e.space || "rgba";
                    return n ? ((i = a[o](n)), (a[L[o].cache] = i[L[o].cache]), (l = a._rgba = i._rgba), !1) : O;
                }),
                l.length ? ("0,0,0,0" === l.join() && P.extend(l, M.transparent), a) : M[r]
            );
        }
        function Z(t, e, i) {
            return 6 * (i = (i + 1) % 1) < 1 ? t + 6 * (e - t) * i : 2 * i < 1 ? e : 3 * i < 2 ? t + 6 * (e - t) * (2 / 3 - i) : t;
        }
        (k.effects = { effect: {} }),
            (z = /^([\-+])=\s*(\d+\.?\d*)/),
            ($ = [
                {
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (t) {
                        return [t[1], t[2], t[3], t[4]];
                    },
                },
                {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
                    },
                },
                {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function (t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
                    },
                },
                {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function (t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
                    },
                },
                {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function (t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]];
                    },
                },
            ]),
            (H = (P = B).Color = function (t, e, i, s) {
                return new P.Color.fn.parse(t, e, i, s);
            }),
            (L = {
                rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } },
                hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } },
            }),
            (W = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } }),
            (N = H.support = {}),
            (F = P("<p>")[0]),
            (R = P.each),
            (F.style.cssText = "background-color:rgba(1,1,1,.5)"),
            (N.rgba = -1 < F.style.backgroundColor.indexOf("rgba")),
            R(L, function (t, e) {
                (e.cache = "_" + t), (e.props.alpha = { idx: 3, type: "percent", def: 1 });
            }),
            (H.fn = P.extend(H.prototype, {
                parse: function (n, t, e, i) {
                    if (n === O) return (this._rgba = [null, null, null, null]), this;
                    (n.jquery || n.nodeType) && ((n = P(n).css(t)), (t = O));
                    var o = this,
                        s = P.type(n),
                        r = (this._rgba = []);
                    return (
                        t !== O && ((n = [n, t, e, i]), (s = "array")),
                        "string" === s
                            ? this.parse(Q(n) || M._default)
                            : "array" === s
                            ? (R(L.rgba.props, function (t, e) {
                                  r[e.idx] = K(n[e.idx], e);
                              }),
                              this)
                            : "object" === s
                            ? (R(
                                  L,
                                  n instanceof H
                                      ? function (t, e) {
                                            n[e.cache] && (o[e.cache] = n[e.cache].slice());
                                        }
                                      : function (t, i) {
                                            var s = i.cache;
                                            R(i.props, function (t, e) {
                                                if (!o[s] && i.to) {
                                                    if ("alpha" === t || null == n[t]) return;
                                                    o[s] = i.to(o._rgba);
                                                }
                                                o[s][e.idx] = K(n[t], e, !0);
                                            }),
                                                o[s] && P.inArray(null, o[s].slice(0, 3)) < 0 && ((o[s][3] = 1), i.from && (o._rgba = i.from(o[s])));
                                        }
                              ),
                              this)
                            : O
                    );
                },
                is: function (t) {
                    var n = H(t),
                        o = !0,
                        r = this;
                    return (
                        R(L, function (t, e) {
                            var i,
                                s = n[e.cache];
                            return (
                                s &&
                                    ((i = r[e.cache] || (e.to && e.to(r._rgba)) || []),
                                    R(e.props, function (t, e) {
                                        return null != s[e.idx] ? (o = s[e.idx] === i[e.idx]) : O;
                                    })),
                                o
                            );
                        }),
                        o
                    );
                },
                _space: function () {
                    var i = [],
                        s = this;
                    return (
                        R(L, function (t, e) {
                            s[e.cache] && i.push(t);
                        }),
                        i.pop()
                    );
                },
                transition: function (t, r) {
                    var e = (h = H(t))._space(),
                        i = L[e],
                        s = 0 === this.alpha() ? H("transparent") : this,
                        a = s[i.cache] || i.to(s._rgba),
                        l = a.slice(),
                        h = h[i.cache];
                    return (
                        R(i.props, function (t, e) {
                            var i = e.idx,
                                s = a[i],
                                n = h[i],
                                o = W[e.type] || {};
                            null !== n && (null === s ? (l[i] = n) : (o.mod && (o.mod / 2 < n - s ? (s += o.mod) : o.mod / 2 < s - n && (s -= o.mod)), (l[i] = K((n - s) * r + s, e))));
                        }),
                        this[e](l)
                    );
                },
                blend: function (t) {
                    if (1 === this._rgba[3]) return this;
                    var e = this._rgba.slice(),
                        i = e.pop(),
                        s = H(t)._rgba;
                    return H(
                        P.map(e, function (t, e) {
                            return (1 - i) * s[e] + i * t;
                        })
                    );
                },
                toRgbaString: function () {
                    var t = "rgba(",
                        e = P.map(this._rgba, function (t, e) {
                            return null == t ? (2 < e ? 1 : 0) : t;
                        });
                    return 1 === e[3] && (e.pop(), (t = "rgb(")), t + e.join() + ")";
                },
                toHslaString: function () {
                    var t = "hsla(",
                        e = P.map(this.hsla(), function (t, e) {
                            return null == t && (t = 2 < e ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t;
                        });
                    return 1 === e[3] && (e.pop(), (t = "hsl(")), t + e.join() + ")";
                },
                toHexString: function (t) {
                    var e = this._rgba.slice(),
                        i = e.pop();
                    return (
                        t && e.push(~~(255 * i)),
                        "#" +
                            P.map(e, function (t) {
                                return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t;
                            }).join("")
                    );
                },
                toString: function () {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
                },
            })),
            (H.fn.parse.prototype = H.fn),
            (L.hsla.to = function (t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 255,
                    i = t[1] / 255,
                    s = t[2] / 255,
                    n = t[3],
                    o = Math.max(e, i, s),
                    r = Math.min(e, i, s),
                    a = o - r,
                    l = o + r,
                    h = 0.5 * l,
                    c = r === o ? 0 : e === o ? (60 * (i - s)) / a + 360 : i === o ? (60 * (s - e)) / a + 120 : (60 * (e - i)) / a + 240,
                    u = 0 == a ? 0 : h <= 0.5 ? a / l : a / (2 - l);
                return [Math.round(c) % 360, u, h, null == n ? 1 : n];
            }),
            (L.hsla.from = function (t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    s = t[2],
                    n = t[3],
                    o = s <= 0.5 ? s * (1 + i) : s + i - s * i,
                    r = 2 * s - o;
                return [Math.round(255 * Z(r, o, e + 1 / 3)), Math.round(255 * Z(r, o, e)), Math.round(255 * Z(r, o, e - 1 / 3)), n];
            }),
            R(L, function (l, t) {
                var i = t.props,
                    r = t.cache,
                    a = t.to,
                    h = t.from;
                (H.fn[l] = function (t) {
                    if ((a && !this[r] && (this[r] = a(this._rgba)), t === O)) return this[r].slice();
                    var e,
                        s = P.type(t),
                        n = "array" === s || "object" === s ? t : arguments,
                        o = this[r].slice();
                    return (
                        R(i, function (t, e) {
                            var i = n["object" === s ? t : e.idx];
                            null == i && (i = o[e.idx]), (o[e.idx] = K(i, e));
                        }),
                        h ? (((e = H(h(o)))[r] = o), e) : H(o)
                    );
                }),
                    R(i, function (r, a) {
                        H.fn[r] ||
                            (H.fn[r] = function (t) {
                                var e,
                                    i = P.type(t),
                                    s = "alpha" === r ? (this._hsla ? "hsla" : "rgba") : l,
                                    n = this[s](),
                                    o = n[a.idx];
                                return "undefined" === i
                                    ? o
                                    : ("function" === i && ((t = t.call(this, o)), (i = P.type(t))),
                                      null == t && a.empty ? this : ("string" === i && (e = z.exec(t)) && (t = o + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)), (n[a.idx] = t), this[s](n)));
                            });
                    });
            }),
            (H.hook = function (t) {
                var e = t.split(" ");
                R(e, function (t, o) {
                    (P.cssHooks[o] = {
                        set: function (t, e) {
                            var i,
                                s,
                                n = "";
                            if ("transparent" !== e && ("string" !== P.type(e) || (i = Q(e)))) {
                                if (((e = H(i || e)), !N.rgba && 1 !== e._rgba[3])) {
                                    for (s = "backgroundColor" === o ? t.parentNode : t; ("" === n || "transparent" === n) && s && s.style; )
                                        try {
                                            (n = P.css(s, "backgroundColor")), (s = s.parentNode);
                                        } catch (t) {}
                                    e = e.blend(n && "transparent" !== n ? n : "_default");
                                }
                                e = e.toRgbaString();
                            }
                            try {
                                t.style[o] = e;
                            } catch (t) {}
                        },
                    }),
                        (P.fx.step[o] = function (t) {
                            t.colorInit || ((t.start = H(t.elem, o)), (t.end = H(t.end)), (t.colorInit = !0)), P.cssHooks[o].set(t.elem, t.start.transition(t.end, t.pos));
                        });
                });
            }),
            H.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),
            (P.cssHooks.borderColor = {
                expand: function (i) {
                    var s = {};
                    return (
                        R(["Top", "Right", "Bottom", "Left"], function (t, e) {
                            s["border" + e + "Color"] = i;
                        }),
                        s
                    );
                },
            }),
            (M = P.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff",
            }),
            (E = ["add", "remove", "toggle"]),
            (A = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 }),
            k.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, e) {
                k.fx.step[e] = function (t) {
                    (("none" !== t.end && !t.setAttr) || (1 === t.pos && !t.setAttr)) && (B.style(t.elem, e, t.end), (t.setAttr = !0));
                };
            }),
            k.fn.addBack ||
                (k.fn.addBack = function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
                }),
            (k.effects.animateClass = function (n, t, e, i) {
                var o = k.speed(t, e, i);
                return this.queue(function () {
                    var i = k(this),
                        t = i.attr("class") || "",
                        e = (e = o.children ? i.find("*").addBack() : i).map(function () {
                            return { el: k(this), start: G(this) };
                        }),
                        s = function () {
                            k.each(E, function (t, e) {
                                n[e] && i[e + "Class"](n[e]);
                            });
                        };
                    s(),
                        (e = e.map(function () {
                            return (
                                (this.end = G(this.el[0])),
                                (this.diff = (function (t, e) {
                                    var i,
                                        s,
                                        n = {};
                                    for (i in e) (s = e[i]), t[i] !== s && (A[i] || (!k.fx.step[i] && isNaN(parseFloat(s))) || (n[i] = s));
                                    return n;
                                })(this.start, this.end)),
                                this
                            );
                        })),
                        i.attr("class", t),
                        (e = e.map(function () {
                            var t = this,
                                e = k.Deferred(),
                                i = k.extend({}, o, {
                                    queue: !1,
                                    complete: function () {
                                        e.resolve(t);
                                    },
                                });
                            return this.el.animate(this.diff, i), e.promise();
                        })),
                        k.when.apply(k, e.get()).done(function () {
                            s(),
                                k.each(arguments, function () {
                                    var e = this.el;
                                    k.each(this.diff, function (t) {
                                        e.css(t, "");
                                    });
                                }),
                                o.complete.call(i[0]);
                        });
                });
            }),
            k.fn.extend({
                addClass:
                    ((I = k.fn.addClass),
                    function (t, e, i, s) {
                        return e ? k.effects.animateClass.call(this, { add: t }, e, i, s) : I.apply(this, arguments);
                    }),
                removeClass:
                    ((w = k.fn.removeClass),
                    function (t, e, i, s) {
                        return 1 < arguments.length ? k.effects.animateClass.call(this, { remove: t }, e, i, s) : w.apply(this, arguments);
                    }),
                toggleClass:
                    ((b = k.fn.toggleClass),
                    function (t, e, i, s, n) {
                        return "boolean" == typeof e || void 0 === e ? (i ? k.effects.animateClass.call(this, e ? { add: t } : { remove: t }, i, s, n) : b.apply(this, arguments)) : k.effects.animateClass.call(this, { toggle: t }, e, i, s);
                    }),
                switchClass: function (t, e, i, s, n) {
                    return k.effects.animateClass.call(this, { add: e, remove: t }, i, s, n);
                },
            }),
            k.expr &&
                k.expr.filters &&
                k.expr.filters.animated &&
                (k.expr.filters.animated =
                    ((_ = k.expr.filters.animated),
                    function (t) {
                        return !!k(t).data(Y) || _(t);
                    })),
            !1 !== k.uiBackCompat &&
                k.extend(k.effects, {
                    save: function (t, e) {
                        for (var i = 0, s = e.length; i < s; i++) null !== e[i] && t.data(j + e[i], t[0].style[e[i]]);
                    },
                    restore: function (t, e) {
                        for (var i, s = 0, n = e.length; s < n; s++) null !== e[s] && ((i = t.data(j + e[s])), t.css(e[s], i));
                    },
                    setMode: function (t, e) {
                        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
                    },
                    createWrapper: function (i) {
                        if (i.parent().is(".ui-effects-wrapper")) return i.parent();
                        var s = { width: i.outerWidth(!0), height: i.outerHeight(!0), float: i.css("float") },
                            t = k("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                            e = { width: i.width(), height: i.height() },
                            n = document.activeElement;
                        try {
                            n.id;
                        } catch (t) {
                            n = document.body;
                        }
                        return (
                            i.wrap(t),
                            (i[0] !== n && !k.contains(i[0], n)) || k(n).trigger("focus"),
                            (t = i.parent()),
                            "static" === i.css("position")
                                ? (t.css({ position: "relative" }), i.css({ position: "relative" }))
                                : (k.extend(s, { position: i.css("position"), zIndex: i.css("z-index") }),
                                  k.each(["top", "left", "bottom", "right"], function (t, e) {
                                      (s[e] = i.css(e)), isNaN(parseInt(s[e], 10)) && (s[e] = "auto");
                                  }),
                                  i.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })),
                            i.css(e),
                            t.css(s).show()
                        );
                    },
                    removeWrapper: function (t) {
                        var e = document.activeElement;
                        return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] !== e && !k.contains(t[0], e)) || k(e).trigger("focus")), t;
                    },
                }),
            k.extend(k.effects, {
                version: "1.12.1",
                define: function (t, e, i) {
                    return i || ((i = e), (e = "effect")), (k.effects.effect[t] = i), (k.effects.effect[t].mode = e), i;
                },
                scaledDimensions: function (t, e, i) {
                    if (0 === e) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
                    var s = "horizontal" !== i ? (e || 100) / 100 : 1,
                        n = "vertical" !== i ? (e || 100) / 100 : 1;
                    return { height: t.height() * n, width: t.width() * s, outerHeight: t.outerHeight() * n, outerWidth: t.outerWidth() * s };
                },
                clipToBox: function (t) {
                    return { width: t.clip.right - t.clip.left, height: t.clip.bottom - t.clip.top, left: t.clip.left, top: t.clip.top };
                },
                unshift: function (t, e, i) {
                    var s = t.queue();
                    1 < e && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue();
                },
                saveStyle: function (t) {
                    t.data(q, t[0].style.cssText);
                },
                restoreStyle: function (t) {
                    (t[0].style.cssText = t.data(q) || ""), t.removeData(q);
                },
                mode: function (t, e) {
                    var i = t.is(":hidden");
                    return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e;
                },
                getBaseline: function (t, e) {
                    var i, s;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = 0.5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height;
                    }
                    switch (t[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = 0.5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = t[1] / e.width;
                    }
                    return { x: s, y: i };
                },
                createPlaceholder: function (t) {
                    var e,
                        i = t.css("position"),
                        s = t.position();
                    return (
                        t
                            .css({ marginTop: t.css("marginTop"), marginBottom: t.css("marginBottom"), marginLeft: t.css("marginLeft"), marginRight: t.css("marginRight") })
                            .outerWidth(t.outerWidth())
                            .outerHeight(t.outerHeight()),
                        /^(static|relative)/.test(i) &&
                            ((i = "absolute"),
                            (e = k("<" + t[0].nodeName + ">")
                                .insertAfter(t)
                                .css({
                                    display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                                    visibility: "hidden",
                                    marginTop: t.css("marginTop"),
                                    marginBottom: t.css("marginBottom"),
                                    marginLeft: t.css("marginLeft"),
                                    marginRight: t.css("marginRight"),
                                    float: t.css("float"),
                                })
                                .outerWidth(t.outerWidth())
                                .outerHeight(t.outerHeight())
                                .addClass("ui-effects-placeholder")),
                            t.data(j + "placeholder", e)),
                        t.css({ position: i, left: s.left, top: s.top }),
                        e
                    );
                },
                removePlaceholder: function (t) {
                    var e = j + "placeholder",
                        i = t.data(e);
                    i && (i.remove(), t.removeData(e));
                },
                cleanUp: function (t) {
                    k.effects.restoreStyle(t), k.effects.removePlaceholder(t);
                },
                setTransition: function (s, t, n, o) {
                    return (
                        (o = o || {}),
                        k.each(t, function (t, e) {
                            var i = s.cssUnit(e);
                            0 < i[0] && (o[e] = i[0] * n + i[1]);
                        }),
                        o
                    );
                },
            }),
            k.fn.extend({
                effect: function () {
                    function t(t) {
                        function e() {
                            k.isFunction(a) && a.call(i[0]), k.isFunction(t) && t();
                        }
                        var i = k(this);
                        (s.mode = h.shift()),
                            !1 === k.uiBackCompat || o
                                ? "none" === s.mode
                                    ? (i[l](), e())
                                    : n.call(i[0], s, function () {
                                          i.removeData(Y), k.effects.cleanUp(i), "hide" === s.mode && i.hide(), e();
                                      })
                                : (i.is(":hidden") ? "hide" === l : "show" === l)
                                ? (i[l](), e())
                                : n.call(i[0], s, e);
                    }
                    function e(t) {
                        var e = k(this),
                            i = k.effects.mode(e, l) || o;
                        e.data(Y, !0), h.push(i), o && ("show" === i || (i === o && "hide" === i)) && e.show(), (o && "none" === i) || k.effects.saveStyle(e), k.isFunction(t) && t();
                    }
                    var s = U.apply(this, arguments),
                        n = k.effects.effect[s.effect],
                        o = n.mode,
                        i = s.queue,
                        r = i || "fx",
                        a = s.complete,
                        l = s.mode,
                        h = [];
                    return k.fx.off || !n
                        ? l
                            ? this[l](s.duration, a)
                            : this.each(function () {
                                  a && a.call(this);
                              })
                        : !1 === i
                        ? this.each(e).each(t)
                        : this.queue(r, e).queue(r, t);
                },
                show:
                    ((y = k.fn.show),
                    function (t) {
                        if (X(t)) return y.apply(this, arguments);
                        var e = U.apply(this, arguments);
                        return (e.mode = "show"), this.effect.call(this, e);
                    }),
                hide:
                    ((v = k.fn.hide),
                    function (t) {
                        if (X(t)) return v.apply(this, arguments);
                        var e = U.apply(this, arguments);
                        return (e.mode = "hide"), this.effect.call(this, e);
                    }),
                toggle:
                    ((g = k.fn.toggle),
                    function (t) {
                        if (X(t) || "boolean" == typeof t) return g.apply(this, arguments);
                        var e = U.apply(this, arguments);
                        return (e.mode = "toggle"), this.effect.call(this, e);
                    }),
                cssUnit: function (t) {
                    var i = this.css(t),
                        s = [];
                    return (
                        k.each(["em", "px", "%", "pt"], function (t, e) {
                            0 < i.indexOf(e) && (s = [parseFloat(i), e]);
                        }),
                        s
                    );
                },
                cssClip: function (t) {
                    return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : V(this.css("clip"), this);
                },
                transfer: function (t, e) {
                    var i = k(this),
                        s = k(t.to),
                        n = "fixed" === s.css("position"),
                        o = k("body"),
                        r = n ? o.scrollTop() : 0,
                        a = n ? o.scrollLeft() : 0,
                        l = s.offset(),
                        h = { top: l.top - r, left: l.left - a, height: s.innerHeight(), width: s.innerWidth() },
                        c = i.offset(),
                        u = k("<div class='ui-effects-transfer'></div>")
                            .appendTo("body")
                            .addClass(t.className)
                            .css({ top: c.top - r, left: c.left - a, height: i.innerHeight(), width: i.innerWidth(), position: n ? "fixed" : "absolute" })
                            .animate(h, t.duration, t.easing, function () {
                                u.remove(), k.isFunction(e) && e();
                            });
                },
            }),
            (k.fx.step.clip = function (t) {
                t.clipInit || ((t.start = k(t.elem).cssClip()), "string" == typeof t.end && (t.end = V(t.end, t.elem)), (t.clipInit = !0)),
                    k(t.elem).cssClip({
                        top: t.pos * (t.end.top - t.start.top) + t.start.top,
                        right: t.pos * (t.end.right - t.start.right) + t.start.right,
                        bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
                        left: t.pos * (t.end.left - t.start.left) + t.start.left,
                    });
            }),
            (m = {}),
            k.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, t) {
                m[t] = function (t) {
                    return Math.pow(t, e + 2);
                };
            }),
            k.extend(m, {
                Sine: function (t) {
                    return 1 - Math.cos((t * Math.PI) / 2);
                },
                Circ: function (t) {
                    return 1 - Math.sqrt(1 - t * t);
                },
                Elastic: function (t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
                },
                Back: function (t) {
                    return t * t * (3 * t - 2);
                },
                Bounce: function (t) {
                    for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; );
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
                },
            }),
            k.each(m, function (t, e) {
                (k.easing["easeIn" + t] = e),
                    (k.easing["easeOut" + t] = function (t) {
                        return 1 - e(1 - t);
                    }),
                    (k.easing["easeInOut" + t] = function (t) {
                        return t < 0.5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2;
                    });
            });
        var J, tt;
        k.effects;
        k.effects.define("blind", "hide", function (t, e) {
            var i = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] },
                s = k(this),
                n = t.direction || "up",
                o = s.cssClip(),
                r = { clip: k.extend({}, o) },
                a = k.effects.createPlaceholder(s);
            (r.clip[i[n][0]] = r.clip[i[n][1]]),
                "show" === t.mode && (s.cssClip(r.clip), a && a.css(k.effects.clipToBox(r)), (r.clip = o)),
                a && a.animate(k.effects.clipToBox(r), t.duration, t.easing),
                s.animate(r, { queue: !1, duration: t.duration, easing: t.easing, complete: e });
        }),
            k.effects.define("bounce", function (t, e) {
                var i,
                    s,
                    n,
                    o = k(this),
                    r = t.mode,
                    a = "hide" === r,
                    l = "show" === r,
                    h = t.direction || "up",
                    c = t.distance,
                    u = t.times || 5,
                    d = 2 * u + (l || a ? 1 : 0),
                    p = t.duration / d,
                    f = t.easing,
                    m = "up" === h || "down" === h ? "top" : "left",
                    g = "up" === h || "left" === h,
                    v = 0,
                    y = o.queue().length;
                for (
                    k.effects.createPlaceholder(o),
                        n = o.css(m),
                        c = c || o["top" == m ? "outerHeight" : "outerWidth"]() / 3,
                        l &&
                            (((s = { opacity: 1 })[m] = n),
                            o
                                .css("opacity", 0)
                                .css(m, g ? 2 * -c : 2 * c)
                                .animate(s, p, f)),
                        a && (c /= Math.pow(2, u - 1)),
                        (s = {})[m] = n;
                    v < u;
                    v++
                )
                    ((i = {})[m] = (g ? "-=" : "+=") + c), o.animate(i, p, f).animate(s, p, f), (c = a ? 2 * c : c / 2);
                a && (((i = { opacity: 0 })[m] = (g ? "-=" : "+=") + c), o.animate(i, p, f)), o.queue(e), k.effects.unshift(o, y, 1 + d);
            }),
            k.effects.define("clip", "hide", function (t, e) {
                var i = {},
                    s = k(this),
                    n = t.direction || "vertical",
                    o = "both" === n,
                    r = o || "horizontal" === n,
                    a = o || "vertical" === n,
                    l = s.cssClip();
                (i.clip = { top: a ? (l.bottom - l.top) / 2 : l.top, right: r ? (l.right - l.left) / 2 : l.right, bottom: a ? (l.bottom - l.top) / 2 : l.bottom, left: r ? (l.right - l.left) / 2 : l.left }),
                    k.effects.createPlaceholder(s),
                    "show" === t.mode && (s.cssClip(i.clip), (i.clip = l)),
                    s.animate(i, { queue: !1, duration: t.duration, easing: t.easing, complete: e });
            }),
            k.effects.define("drop", "hide", function (t, e) {
                var i,
                    s = k(this),
                    n = "show" === t.mode,
                    o = t.direction || "left",
                    r = "up" === o || "down" === o ? "top" : "left",
                    a = "up" === o || "left" === o ? "-=" : "+=",
                    l = "+=" == a ? "-=" : "+=",
                    h = { opacity: 0 };
                k.effects.createPlaceholder(s),
                    (i = t.distance || s["top" == r ? "outerHeight" : "outerWidth"](!0) / 2),
                    (h[r] = a + i),
                    n && (s.css(h), (h[r] = l + i), (h.opacity = 1)),
                    s.animate(h, { queue: !1, duration: t.duration, easing: t.easing, complete: e });
            }),
            k.effects.define("explode", "hide", function (t, e) {
                function i() {
                    m.push(this), m.length === l * h && (c.css({ visibility: "visible" }), k(m).remove(), e());
                }
                for (
                    var s,
                        n,
                        o,
                        r,
                        a,
                        l = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
                        h = l,
                        c = k(this),
                        u = "show" === t.mode,
                        d = c.show().css("visibility", "hidden").offset(),
                        p = Math.ceil(c.outerWidth() / h),
                        f = Math.ceil(c.outerHeight() / l),
                        m = [],
                        g = 0;
                    g < l;
                    g++
                )
                    for (o = d.top + g * f, a = g - (l - 1) / 2, s = 0; s < h; s++)
                        (n = d.left + s * p),
                            (r = s - (h - 1) / 2),
                            c
                                .clone()
                                .appendTo("body")
                                .wrap("<div></div>")
                                .css({ position: "absolute", visibility: "visible", left: -s * p, top: -g * f })
                                .parent()
                                .addClass("ui-effects-explode")
                                .css({ position: "absolute", overflow: "hidden", width: p, height: f, left: n + (u ? r * p : 0), top: o + (u ? a * f : 0), opacity: u ? 0 : 1 })
                                .animate({ left: n + (u ? 0 : r * p), top: o + (u ? 0 : a * f), opacity: u ? 1 : 0 }, t.duration || 500, t.easing, i);
            }),
            k.effects.define("fade", "toggle", function (t, e) {
                var i = "show" === t.mode;
                k(this)
                    .css("opacity", i ? 0 : 1)
                    .animate({ opacity: i ? 1 : 0 }, { queue: !1, duration: t.duration, easing: t.easing, complete: e });
            }),
            k.effects.define("fold", "hide", function (e, t) {
                var i = k(this),
                    s = e.mode,
                    n = "show" === s,
                    o = "hide" === s,
                    r = e.size || 15,
                    a = /([0-9]+)%/.exec(r),
                    l = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
                    h = e.duration / 2,
                    c = k.effects.createPlaceholder(i),
                    u = i.cssClip(),
                    d = { clip: k.extend({}, u) },
                    p = { clip: k.extend({}, u) },
                    f = [u[l[0]], u[l[1]]],
                    m = i.queue().length;
                a && (r = (parseInt(a[1], 10) / 100) * f[o ? 0 : 1]),
                    (d.clip[l[0]] = r),
                    (p.clip[l[0]] = r),
                    (p.clip[l[1]] = 0),
                    n && (i.cssClip(p.clip), c && c.css(k.effects.clipToBox(p)), (p.clip = u)),
                    i
                        .queue(function (t) {
                            c && c.animate(k.effects.clipToBox(d), h, e.easing).animate(k.effects.clipToBox(p), h, e.easing), t();
                        })
                        .animate(d, h, e.easing)
                        .animate(p, h, e.easing)
                        .queue(t),
                    k.effects.unshift(i, m, 4);
            }),
            k.effects.define("highlight", "show", function (t, e) {
                var i = k(this),
                    s = { backgroundColor: i.css("backgroundColor") };
                "hide" === t.mode && (s.opacity = 0), k.effects.saveStyle(i), i.css({ backgroundImage: "none", backgroundColor: t.color || "#ffff99" }).animate(s, { queue: !1, duration: t.duration, easing: t.easing, complete: e });
            }),
            k.effects.define("size", function (n, e) {
                var t,
                    o,
                    i,
                    s = k(this),
                    r = ["fontSize"],
                    a = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                    l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                    h = n.mode,
                    c = "effect" !== h,
                    u = n.scale || "both",
                    d = n.origin || ["middle", "center"],
                    p = s.css("position"),
                    f = s.position(),
                    m = k.effects.scaledDimensions(s),
                    g = n.from || m,
                    v = n.to || k.effects.scaledDimensions(s, 0);
                k.effects.createPlaceholder(s),
                    "show" === h && ((i = g), (g = v), (v = i)),
                    (o = { from: { y: g.height / m.height, x: g.width / m.width }, to: { y: v.height / m.height, x: v.width / m.width } }),
                    ("box" !== u && "both" !== u) ||
                        (o.from.y !== o.to.y && ((g = k.effects.setTransition(s, a, o.from.y, g)), (v = k.effects.setTransition(s, a, o.to.y, v))),
                        o.from.x !== o.to.x && ((g = k.effects.setTransition(s, l, o.from.x, g)), (v = k.effects.setTransition(s, l, o.to.x, v)))),
                    ("content" !== u && "both" !== u) || o.from.y === o.to.y || ((g = k.effects.setTransition(s, r, o.from.y, g)), (v = k.effects.setTransition(s, r, o.to.y, v))),
                    d &&
                        ((t = k.effects.getBaseline(d, m)),
                        (g.top = (m.outerHeight - g.outerHeight) * t.y + f.top),
                        (g.left = (m.outerWidth - g.outerWidth) * t.x + f.left),
                        (v.top = (m.outerHeight - v.outerHeight) * t.y + f.top),
                        (v.left = (m.outerWidth - v.outerWidth) * t.x + f.left)),
                    s.css(g),
                    ("content" !== u && "both" !== u) ||
                        ((a = a.concat(["marginTop", "marginBottom"]).concat(r)),
                        (l = l.concat(["marginLeft", "marginRight"])),
                        s.find("*[width]").each(function () {
                            var t = k(this),
                                e = k.effects.scaledDimensions(t),
                                i = { height: e.height * o.from.y, width: e.width * o.from.x, outerHeight: e.outerHeight * o.from.y, outerWidth: e.outerWidth * o.from.x },
                                s = { height: e.height * o.to.y, width: e.width * o.to.x, outerHeight: e.height * o.to.y, outerWidth: e.width * o.to.x };
                            o.from.y !== o.to.y && ((i = k.effects.setTransition(t, a, o.from.y, i)), (s = k.effects.setTransition(t, a, o.to.y, s))),
                                o.from.x !== o.to.x && ((i = k.effects.setTransition(t, l, o.from.x, i)), (s = k.effects.setTransition(t, l, o.to.x, s))),
                                c && k.effects.saveStyle(t),
                                t.css(i),
                                t.animate(s, n.duration, n.easing, function () {
                                    c && k.effects.restoreStyle(t);
                                });
                        })),
                    s.animate(v, {
                        queue: !1,
                        duration: n.duration,
                        easing: n.easing,
                        complete: function () {
                            var t = s.offset();
                            0 === v.opacity && s.css("opacity", g.opacity), c || (s.css("position", "static" === p ? "relative" : p).offset(t), k.effects.saveStyle(s)), e();
                        },
                    });
            }),
            k.effects.define("scale", function (t, e) {
                var i = k(this),
                    s = t.mode,
                    n = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) || "effect" !== s ? 0 : 100),
                    o = k.extend(!0, { from: k.effects.scaledDimensions(i), to: k.effects.scaledDimensions(i, n, t.direction || "both"), origin: t.origin || ["middle", "center"] }, t);
                t.fade && ((o.from.opacity = 1), (o.to.opacity = 0)), k.effects.effect.size.call(this, o, e);
            }),
            k.effects.define("puff", "hide", function (t, e) {
                var i = k.extend(!0, {}, t, { fade: !0, percent: parseInt(t.percent, 10) || 150 });
                k.effects.effect.scale.call(this, i, e);
            }),
            k.effects.define("pulsate", "show", function (t, e) {
                var i = k(this),
                    s = t.mode,
                    n = "show" === s,
                    o = n || "hide" === s,
                    r = 2 * (t.times || 5) + (o ? 1 : 0),
                    a = t.duration / r,
                    l = 0,
                    h = 1,
                    c = i.queue().length;
                for ((!n && i.is(":visible")) || (i.css("opacity", 0).show(), (l = 1)); h < r; h++) i.animate({ opacity: l }, a, t.easing), (l = 1 - l);
                i.animate({ opacity: l }, a, t.easing), i.queue(e), k.effects.unshift(i, c, 1 + r);
            }),
            k.effects.define("shake", function (t, e) {
                var i = 1,
                    s = k(this),
                    n = t.direction || "left",
                    o = t.distance || 20,
                    r = t.times || 3,
                    a = 2 * r + 1,
                    l = Math.round(t.duration / a),
                    h = "up" === n || "down" === n ? "top" : "left",
                    c = "up" === n || "left" === n,
                    u = {},
                    d = {},
                    p = {},
                    f = s.queue().length;
                for (k.effects.createPlaceholder(s), u[h] = (c ? "-=" : "+=") + o, d[h] = (c ? "+=" : "-=") + 2 * o, p[h] = (c ? "-=" : "+=") + 2 * o, s.animate(u, l, t.easing); i < r; i++) s.animate(d, l, t.easing).animate(p, l, t.easing);
                s
                    .animate(d, l, t.easing)
                    .animate(u, l / 2, t.easing)
                    .queue(e),
                    k.effects.unshift(s, f, 1 + a);
            }),
            k.effects.define("slide", "show", function (t, e) {
                var i,
                    s,
                    n = k(this),
                    o = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] },
                    r = t.mode,
                    a = t.direction || "left",
                    l = "up" === a || "down" === a ? "top" : "left",
                    h = "up" === a || "left" === a,
                    c = t.distance || n["top" == l ? "outerHeight" : "outerWidth"](!0),
                    u = {};
                k.effects.createPlaceholder(n),
                    (i = n.cssClip()),
                    (s = n.position()[l]),
                    (u[l] = (h ? -1 : 1) * c + s),
                    (u.clip = n.cssClip()),
                    (u.clip[o[a][1]] = u.clip[o[a][0]]),
                    "show" === r && (n.cssClip(u.clip), n.css(l, u[l]), (u.clip = i), (u[l] = s)),
                    n.animate(u, { queue: !1, duration: t.duration, easing: t.easing, complete: e });
            }),
            !1 !== k.uiBackCompat &&
                k.effects.define("transfer", function (t, e) {
                    k(this).transfer(t, e);
                }),
            (k.ui.focusable = function (t, e) {
                var i,
                    s,
                    n,
                    o,
                    r,
                    a = t.nodeName.toLowerCase();
                return "area" === a
                    ? ((s = (i = t.parentNode).name), !(!t.href || !s || "map" !== i.nodeName.toLowerCase()) && 0 < (n = k("img[usemap='#" + s + "']")).length && n.is(":visible"))
                    : (/^(input|select|textarea|button|object)$/.test(a) ? (o = !t.disabled) && (r = k(t).closest("fieldset")[0]) && (o = !r.disabled) : (o = ("a" === a && t.href) || e),
                      o &&
                          k(t).is(":visible") &&
                          (function (t) {
                              for (var e = t.css("visibility"); "inherit" === e; ) e = (t = t.parent()).css("visibility");
                              return "hidden" !== e;
                          })(k(t)));
            }),
            k.extend(k.expr[":"], {
                focusable: function (t) {
                    return k.ui.focusable(t, null != k.attr(t, "tabindex"));
                },
            }),
            k.ui.focusable,
            (k.fn.form = function () {
                return "string" == typeof this[0].form ? this.closest("form") : k(this[0].form);
            }),
            (k.ui.formResetMixin = {
                _formResetHandler: function () {
                    var e = k(this);
                    setTimeout(function () {
                        var t = e.data("ui-form-reset-instances");
                        k.each(t, function () {
                            this.refresh();
                        });
                    });
                },
                _bindFormResetHandler: function () {
                    var t;
                    (this.form = this.element.form()),
                        this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t));
                },
                _unbindFormResetHandler: function () {
                    var t;
                    this.form.length &&
                        ((t = this.form.data("ui-form-reset-instances")).splice(k.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"));
                },
            }),
            "1.7" === k.fn.jquery.substring(0, 3) &&
                (k.each(["Width", "Height"], function (t, i) {
                    function s(t, e, i, s) {
                        return (
                            k.each(n, function () {
                                (e -= parseFloat(k.css(t, "padding" + this)) || 0), i && (e -= parseFloat(k.css(t, "border" + this + "Width")) || 0), s && (e -= parseFloat(k.css(t, "margin" + this)) || 0);
                            }),
                            e
                        );
                    }
                    var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                        o = i.toLowerCase(),
                        r = { innerWidth: k.fn.innerWidth, innerHeight: k.fn.innerHeight, outerWidth: k.fn.outerWidth, outerHeight: k.fn.outerHeight };
                    (k.fn["inner" + i] = function (t) {
                        return void 0 === t
                            ? r["inner" + i].call(this)
                            : this.each(function () {
                                  k(this).css(o, s(this, t) + "px");
                              });
                    }),
                        (k.fn["outer" + i] = function (t, e) {
                            return "number" != typeof t
                                ? r["outer" + i].call(this, t)
                                : this.each(function () {
                                      k(this).css(o, s(this, t, !0, e) + "px");
                                  });
                        });
                }),
                (k.fn.addBack = function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
                })),
            (k.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }),
            (k.ui.escapeSelector =
                ((tt = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g),
                function (t) {
                    return t.replace(tt, "\\$1");
                })),
            (k.fn.labels = function () {
                var t, e, i, s, n;
                return this[0].labels && this[0].labels.length
                    ? this.pushStack(this[0].labels)
                    : ((s = this.eq(0).parents("label")),
                      (i = this.attr("id")) && ((n = (t = this.eq(0).parents().last()).add(t.length ? t.siblings() : this.siblings())), (e = "label[for='" + k.ui.escapeSelector(i) + "']"), (s = s.add(n.find(e).addBack(e)))),
                      this.pushStack(s));
            }),
            (k.fn.scrollParent = function (t) {
                var e = this.css("position"),
                    i = "absolute" === e,
                    s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    n = this.parents()
                        .filter(function () {
                            var t = k(this);
                            return (!i || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
                        })
                        .eq(0);
                return "fixed" !== e && n.length ? n : k(this[0].ownerDocument || document);
            }),
            k.extend(k.expr[":"], {
                tabbable: function (t) {
                    var e = k.attr(t, "tabindex"),
                        i = null != e;
                    return (!i || 0 <= e) && k.ui.focusable(t, i);
                },
            }),
            k.fn.extend({
                uniqueId:
                    ((J = 0),
                    function () {
                        return this.each(function () {
                            this.id || (this.id = "ui-id-" + ++J);
                        });
                    }),
                removeUniqueId: function () {
                    return this.each(function () {
                        /^ui-id-\d+$/.test(this.id) && k(this).removeAttr("id");
                    });
                },
            }),
            k.widget("ui.accordion", {
                version: "1.12.1",
                options: {
                    active: 0,
                    animate: {},
                    classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" },
                    collapsible: !1,
                    event: "click",
                    header: "> li > :first-child, > :not(li):even",
                    heightStyle: "auto",
                    icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" },
                    activate: null,
                    beforeActivate: null,
                },
                hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" },
                showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" },
                _create: function () {
                    var t = this.options;
                    (this.prevShow = this.prevHide = k()),
                        this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
                        this.element.attr("role", "tablist"),
                        t.collapsible || (!1 !== t.active && null != t.active) || (t.active = 0),
                        this._processPanels(),
                        t.active < 0 && (t.active += this.headers.length),
                        this._refresh();
                },
                _getCreateEventData: function () {
                    return { header: this.active, panel: this.active.length ? this.active.next() : k() };
                },
                _createIcons: function () {
                    var t,
                        e,
                        i = this.options.icons;
                    i &&
                        ((t = k("<span>")),
                        this._addClass(t, "ui-accordion-header-icon", "ui-icon " + i.header),
                        t.prependTo(this.headers),
                        (e = this.active.children(".ui-accordion-header-icon")),
                        this._removeClass(e, i.header)._addClass(e, null, i.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
                },
                _destroyIcons: function () {
                    this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
                },
                _destroy: function () {
                    var t;
                    this.element.removeAttr("role"),
                        this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),
                        this._destroyIcons(),
                        (t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId()),
                        "content" !== this.options.heightStyle && t.css("height", "");
                },
                _setOption: function (t, e) {
                    return "active" === t
                        ? void this._activate(e)
                        : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)),
                          this._super(t, e),
                          "collapsible" !== t || e || !1 !== this.options.active || this._activate(0),
                          void ("icons" === t && (this._destroyIcons(), e && this._createIcons())));
                },
                _setOptionDisabled: function (t) {
                    this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t);
                },
                _keydown: function (t) {
                    if (!t.altKey && !t.ctrlKey) {
                        var e = k.ui.keyCode,
                            i = this.headers.length,
                            s = this.headers.index(t.target),
                            n = !1;
                        switch (t.keyCode) {
                            case e.RIGHT:
                            case e.DOWN:
                                n = this.headers[(s + 1) % i];
                                break;
                            case e.LEFT:
                            case e.UP:
                                n = this.headers[(s - 1 + i) % i];
                                break;
                            case e.SPACE:
                            case e.ENTER:
                                this._eventHandler(t);
                                break;
                            case e.HOME:
                                n = this.headers[0];
                                break;
                            case e.END:
                                n = this.headers[i - 1];
                        }
                        n && (k(t.target).attr("tabIndex", -1), k(n).attr("tabIndex", 0), k(n).trigger("focus"), t.preventDefault());
                    }
                },
                _panelKeyDown: function (t) {
                    t.keyCode === k.ui.keyCode.UP && t.ctrlKey && k(t.currentTarget).prev().trigger("focus");
                },
                refresh: function () {
                    var t = this.options;
                    this._processPanels(),
                        (!1 === t.active && !0 === t.collapsible) || !this.headers.length
                            ? ((t.active = !1), (this.active = k()))
                            : !1 === t.active
                            ? this._activate(0)
                            : this.active.length && !k.contains(this.element[0], this.active[0])
                            ? this.headers.length === this.headers.find(".ui-state-disabled").length
                                ? ((t.active = !1), (this.active = k()))
                                : this._activate(Math.max(0, t.active - 1))
                            : (t.active = this.headers.index(this.active)),
                        this._destroyIcons(),
                        this._refresh();
                },
                _processPanels: function () {
                    var t = this.headers,
                        e = this.panels;
                    (this.headers = this.element.find(this.options.header)),
                        this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"),
                        (this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide()),
                        this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"),
                        e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
                },
                _refresh: function () {
                    var i,
                        t = this.options,
                        e = t.heightStyle,
                        s = this.element.parent();
                    (this.active = this._findActive(t.active)),
                        this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"),
                        this._addClass(this.active.next(), "ui-accordion-content-active"),
                        this.active.next().show(),
                        this.headers
                            .attr("role", "tab")
                            .each(function () {
                                var t = k(this),
                                    e = t.uniqueId().attr("id"),
                                    i = t.next(),
                                    s = i.uniqueId().attr("id");
                                t.attr("aria-controls", s), i.attr("aria-labelledby", e);
                            })
                            .next()
                            .attr("role", "tabpanel"),
                        this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(),
                        this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0),
                        this._createIcons(),
                        this._setupEvents(t.event),
                        "fill" === e
                            ? ((i = s.height()),
                              this.element.siblings(":visible").each(function () {
                                  var t = k(this),
                                      e = t.css("position");
                                  "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0));
                              }),
                              this.headers.each(function () {
                                  i -= k(this).outerHeight(!0);
                              }),
                              this.headers
                                  .next()
                                  .each(function () {
                                      k(this).height(Math.max(0, i - k(this).innerHeight() + k(this).height()));
                                  })
                                  .css("overflow", "auto"))
                            : "auto" === e &&
                              ((i = 0),
                              this.headers
                                  .next()
                                  .each(function () {
                                      var t = k(this).is(":visible");
                                      t || k(this).show(), (i = Math.max(i, k(this).css("height", "").height())), t || k(this).hide();
                                  })
                                  .height(i));
                },
                _activate: function (t) {
                    var e = this._findActive(t)[0];
                    e !== this.active[0] && ((e = e || this.active[0]), this._eventHandler({ target: e, currentTarget: e, preventDefault: k.noop }));
                },
                _findActive: function (t) {
                    return "number" == typeof t ? this.headers.eq(t) : k();
                },
                _setupEvents: function (t) {
                    var i = { keydown: "_keydown" };
                    t &&
                        k.each(t.split(" "), function (t, e) {
                            i[e] = "_eventHandler";
                        }),
                        this._off(this.headers.add(this.headers.next())),
                        this._on(this.headers, i),
                        this._on(this.headers.next(), { keydown: "_panelKeyDown" }),
                        this._hoverable(this.headers),
                        this._focusable(this.headers);
                },
                _eventHandler: function (t) {
                    var e,
                        i,
                        s = this.options,
                        n = this.active,
                        o = k(t.currentTarget),
                        r = o[0] === n[0],
                        a = r && s.collapsible,
                        l = a ? k() : o.next(),
                        h = n.next(),
                        c = { oldHeader: n, oldPanel: h, newHeader: a ? k() : o, newPanel: l };
                    t.preventDefault(),
                        (r && !s.collapsible) ||
                            !1 === this._trigger("beforeActivate", t, c) ||
                            ((s.active = !a && this.headers.index(o)),
                            (this.active = r ? k() : o),
                            this._toggle(c),
                            this._removeClass(n, "ui-accordion-header-active", "ui-state-active"),
                            s.icons && ((e = n.children(".ui-accordion-header-icon")), this._removeClass(e, null, s.icons.activeHeader)._addClass(e, null, s.icons.header)),
                            r ||
                                (this._removeClass(o, "ui-accordion-header-collapsed")._addClass(o, "ui-accordion-header-active", "ui-state-active"),
                                s.icons && ((i = o.children(".ui-accordion-header-icon")), this._removeClass(i, null, s.icons.header)._addClass(i, null, s.icons.activeHeader)),
                                this._addClass(o.next(), "ui-accordion-content-active")));
                },
                _toggle: function (t) {
                    var e = t.newPanel,
                        i = this.prevShow.length ? this.prevShow : t.oldPanel;
                    this.prevShow.add(this.prevHide).stop(!0, !0),
                        (this.prevShow = e),
                        (this.prevHide = i),
                        this.options.animate ? this._animate(e, i, t) : (i.hide(), e.show(), this._toggleComplete(t)),
                        i.attr({ "aria-hidden": "true" }),
                        i.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }),
                        e.length && i.length
                            ? i.prev().attr({ tabIndex: -1, "aria-expanded": "false" })
                            : e.length &&
                              this.headers
                                  .filter(function () {
                                      return 0 === parseInt(k(this).attr("tabIndex"), 10);
                                  })
                                  .attr("tabIndex", -1),
                        e.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
                },
                _animate: function (t, i, e) {
                    function s() {
                        a._toggleComplete(e);
                    }
                    var n,
                        o,
                        r,
                        a = this,
                        l = 0,
                        h = t.css("box-sizing"),
                        c = t.length && (!i.length || t.index() < i.index()),
                        u = this.options.animate || {},
                        d = (c && u.down) || u;
                    return (
                        "number" == typeof d && (r = d),
                        "string" == typeof d && (o = d),
                        (o = o || d.easing || u.easing),
                        (r = r || d.duration || u.duration),
                        i.length
                            ? t.length
                                ? ((n = t.show().outerHeight()),
                                  i.animate(this.hideProps, {
                                      duration: r,
                                      easing: o,
                                      step: function (t, e) {
                                          e.now = Math.round(t);
                                      },
                                  }),
                                  void t.hide().animate(this.showProps, {
                                      duration: r,
                                      easing: o,
                                      complete: s,
                                      step: function (t, e) {
                                          (e.now = Math.round(t)), "height" !== e.prop ? "content-box" === h && (l += e.now) : "content" !== a.options.heightStyle && ((e.now = Math.round(n - i.outerHeight() - l)), (l = 0));
                                      },
                                  }))
                                : i.animate(this.hideProps, r, o, s)
                            : t.animate(this.showProps, r, o, s)
                    );
                },
                _toggleComplete: function (t) {
                    var e = t.oldPanel,
                        i = e.prev();
                    this._removeClass(e, "ui-accordion-content-active"),
                        this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"),
                        e.length && (e.parent()[0].className = e.parent()[0].className),
                        this._trigger("activate", null, t);
                },
            }),
            (k.ui.safeActiveElement = function (e) {
                var i;
                try {
                    i = e.activeElement;
                } catch (t) {
                    i = e.body;
                }
                return (i = i || e.body).nodeName || (i = e.body), i;
            }),
            k.widget("ui.menu", {
                version: "1.12.1",
                defaultElement: "<ul>",
                delay: 300,
                options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null },
                _create: function () {
                    (this.activeMenu = this.element),
                        (this.mouseHandled = !1),
                        this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }),
                        this._addClass("ui-menu", "ui-widget ui-widget-content"),
                        this._on({
                            "mousedown .ui-menu-item": function (t) {
                                t.preventDefault();
                            },
                            "click .ui-menu-item": function (t) {
                                var e = k(t.target),
                                    i = k(k.ui.safeActiveElement(this.document[0]));
                                !this.mouseHandled &&
                                    e.not(".ui-state-disabled").length &&
                                    (this.select(t),
                                    t.isPropagationStopped() || (this.mouseHandled = !0),
                                    e.has(".ui-menu").length
                                        ? this.expand(t)
                                        : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                            },
                            "mouseenter .ui-menu-item": function (t) {
                                var e, i;
                                this.previousFilter ||
                                    ((e = k(t.target).closest(".ui-menu-item")), (i = k(t.currentTarget)), e[0] === i[0] && (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, i)));
                            },
                            mouseleave: "collapseAll",
                            "mouseleave .ui-menu": "collapseAll",
                            focus: function (t, e) {
                                var i = this.active || this.element.find(this.options.items).eq(0);
                                e || this.focus(t, i);
                            },
                            blur: function (t) {
                                this._delay(function () {
                                    k.contains(this.element[0], k.ui.safeActiveElement(this.document[0])) || this.collapseAll(t);
                                });
                            },
                            keydown: "_keydown",
                        }),
                        this.refresh(),
                        this._on(this.document, {
                            click: function (t) {
                                this._closeOnDocumentClick(t) && this.collapseAll(t), (this.mouseHandled = !1);
                            },
                        });
                },
                _destroy: function () {
                    var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),
                        t.children().each(function () {
                            var t = k(this);
                            t.data("ui-menu-submenu-caret") && t.remove();
                        });
                },
                _keydown: function (t) {
                    var e,
                        i,
                        s,
                        n,
                        o = !0;
                    switch (t.keyCode) {
                        case k.ui.keyCode.PAGE_UP:
                            this.previousPage(t);
                            break;
                        case k.ui.keyCode.PAGE_DOWN:
                            this.nextPage(t);
                            break;
                        case k.ui.keyCode.HOME:
                            this._move("first", "first", t);
                            break;
                        case k.ui.keyCode.END:
                            this._move("last", "last", t);
                            break;
                        case k.ui.keyCode.UP:
                            this.previous(t);
                            break;
                        case k.ui.keyCode.DOWN:
                            this.next(t);
                            break;
                        case k.ui.keyCode.LEFT:
                            this.collapse(t);
                            break;
                        case k.ui.keyCode.RIGHT:
                            this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                            break;
                        case k.ui.keyCode.ENTER:
                        case k.ui.keyCode.SPACE:
                            this._activate(t);
                            break;
                        case k.ui.keyCode.ESCAPE:
                            this.collapse(t);
                            break;
                        default:
                            (o = !1),
                                (i = this.previousFilter || ""),
                                (n = !1),
                                (s = 96 <= t.keyCode && t.keyCode <= 105 ? "" + (t.keyCode - 96) : String.fromCharCode(t.keyCode)),
                                clearTimeout(this.filterTimer),
                                s === i ? (n = !0) : (s = i + s),
                                (e = this._filterMenuItems(s)),
                                (e = n && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e).length || ((s = String.fromCharCode(t.keyCode)), (e = this._filterMenuItems(s))),
                                e.length
                                    ? (this.focus(t, e),
                                      (this.previousFilter = s),
                                      (this.filterTimer = this._delay(function () {
                                          delete this.previousFilter;
                                      }, 1e3)))
                                    : delete this.previousFilter;
                    }
                    o && t.preventDefault();
                },
                _activate: function (t) {
                    this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
                },
                refresh: function () {
                    var t,
                        e,
                        i,
                        s,
                        n = this,
                        o = this.options.icons.submenu,
                        r = this.element.find(this.options.menus);
                    this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length),
                        (e = r
                            .filter(":not(.ui-menu)")
                            .hide()
                            .attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" })
                            .each(function () {
                                var t = k(this),
                                    e = t.prev(),
                                    i = k("<span>").data("ui-menu-submenu-caret", !0);
                                n._addClass(i, "ui-menu-icon", "ui-icon " + o), e.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", e.attr("id"));
                            })),
                        this._addClass(e, "ui-menu", "ui-widget ui-widget-content ui-front"),
                        (t = r.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function () {
                            var t = k(this);
                            n._isDivider(t) && n._addClass(t, "ui-menu-divider", "ui-widget-content");
                        }),
                        (s = (i = t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() })),
                        this._addClass(i, "ui-menu-item")._addClass(s, "ui-menu-item-wrapper"),
                        t.filter(".ui-state-disabled").attr("aria-disabled", "true"),
                        this.active && !k.contains(this.element[0], this.active[0]) && this.blur();
                },
                _itemRole: function () {
                    return { menu: "menuitem", listbox: "option" }[this.options.role];
                },
                _setOption: function (t, e) {
                    var i;
                    "icons" === t && ((i = this.element.find(".ui-menu-icon")), this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)), this._super(t, e);
                },
                _setOptionDisabled: function (t) {
                    this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t);
                },
                focus: function (t, e) {
                    var i, s, n;
                    this.blur(t, t && "focus" === t.type),
                        this._scrollIntoView(e),
                        (this.active = e.first()),
                        (s = this.active.children(".ui-menu-item-wrapper")),
                        this._addClass(s, null, "ui-state-active"),
                        this.options.role && this.element.attr("aria-activedescendant", s.attr("id")),
                        (n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper")),
                        this._addClass(n, null, "ui-state-active"),
                        t && "keydown" === t.type
                            ? this._close()
                            : (this.timer = this._delay(function () {
                                  this._close();
                              }, this.delay)),
                        (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i),
                        (this.activeMenu = e.parent()),
                        this._trigger("focus", t, { item: e });
                },
                _scrollIntoView: function (t) {
                    var e, i, s, n, o, r;
                    this._hasScroll() &&
                        ((e = parseFloat(k.css(this.activeMenu[0], "borderTopWidth")) || 0),
                        (i = parseFloat(k.css(this.activeMenu[0], "paddingTop")) || 0),
                        (s = t.offset().top - this.activeMenu.offset().top - e - i),
                        (n = this.activeMenu.scrollTop()),
                        (o = this.activeMenu.height()),
                        (r = t.outerHeight()),
                        s < 0 ? this.activeMenu.scrollTop(n + s) : o < s + r && this.activeMenu.scrollTop(n + s - o + r));
                },
                blur: function (t, e) {
                    e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, { item: this.active }), (this.active = null));
                },
                _startOpening: function (t) {
                    clearTimeout(this.timer),
                        "true" === t.attr("aria-hidden") &&
                            (this.timer = this._delay(function () {
                                this._close(), this._open(t);
                            }, this.delay));
                },
                _open: function (t) {
                    var e = k.extend({ of: this.active }, this.options.position);
                    clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e);
                },
                collapseAll: function (e, i) {
                    clearTimeout(this.timer),
                        (this.timer = this._delay(function () {
                            var t = i ? this.element : k(e && e.target).closest(this.element.find(".ui-menu"));
                            t.length || (t = this.element), this._close(t), this.blur(e), this._removeClass(t.find(".ui-state-active"), null, "ui-state-active"), (this.activeMenu = t);
                        }, this.delay));
                },
                _close: function (t) {
                    (t = t || (this.active ? this.active.parent() : this.element)).find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
                },
                _closeOnDocumentClick: function (t) {
                    return !k(t.target).closest(".ui-menu").length;
                },
                _isDivider: function (t) {
                    return !/[^\-\u2014\u2013\s]/.test(t.text());
                },
                collapse: function (t) {
                    var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                    e && e.length && (this._close(), this.focus(t, e));
                },
                expand: function (t) {
                    var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                    e &&
                        e.length &&
                        (this._open(e.parent()),
                        this._delay(function () {
                            this.focus(t, e);
                        }));
                },
                next: function (t) {
                    this._move("next", "first", t);
                },
                previous: function (t) {
                    this._move("prev", "last", t);
                },
                isFirstItem: function () {
                    return this.active && !this.active.prevAll(".ui-menu-item").length;
                },
                isLastItem: function () {
                    return this.active && !this.active.nextAll(".ui-menu-item").length;
                },
                _move: function (t, e, i) {
                    var s;
                    this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)),
                        (s && s.length && this.active) || (s = this.activeMenu.find(this.options.items)[e]()),
                        this.focus(i, s);
                },
                nextPage: function (t) {
                    var e, i, s;
                    return this.active
                        ? void (
                              this.isLastItem() ||
                              (this._hasScroll()
                                  ? ((i = this.active.offset().top),
                                    (s = this.element.height()),
                                    this.active.nextAll(".ui-menu-item").each(function () {
                                        return (e = k(this)).offset().top - i - s < 0;
                                    }),
                                    this.focus(t, e))
                                  : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))
                          )
                        : void this.next(t);
                },
                previousPage: function (t) {
                    var e, i, s;
                    return this.active
                        ? void (
                              this.isFirstItem() ||
                              (this._hasScroll()
                                  ? ((i = this.active.offset().top),
                                    (s = this.element.height()),
                                    this.active.prevAll(".ui-menu-item").each(function () {
                                        return 0 < (e = k(this)).offset().top - i + s;
                                    }),
                                    this.focus(t, e))
                                  : this.focus(t, this.activeMenu.find(this.options.items).first()))
                          )
                        : void this.next(t);
                },
                _hasScroll: function () {
                    return this.element.outerHeight() < this.element.prop("scrollHeight");
                },
                select: function (t) {
                    this.active = this.active || k(t.target).closest(".ui-menu-item");
                    var e = { item: this.active };
                    this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, e);
                },
                _filterMenuItems: function (t) {
                    var e = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                        i = RegExp("^" + e, "i");
                    return this.activeMenu
                        .find(this.options.items)
                        .filter(".ui-menu-item")
                        .filter(function () {
                            return i.test(k.trim(k(this).children(".ui-menu-item-wrapper").text()));
                        });
                },
            }),
            k.widget("ui.autocomplete", {
                version: "1.12.1",
                defaultElement: "<input>",
                options: {
                    appendTo: null,
                    autoFocus: !1,
                    delay: 300,
                    minLength: 1,
                    position: { my: "left top", at: "left bottom", collision: "none" },
                    source: null,
                    change: null,
                    close: null,
                    focus: null,
                    open: null,
                    response: null,
                    search: null,
                    select: null,
                },
                requestIndex: 0,
                pending: 0,
                _create: function () {
                    var i,
                        s,
                        n,
                        t = this.element[0].nodeName.toLowerCase(),
                        e = "textarea" === t,
                        o = "input" === t;
                    (this.isMultiLine = e || (!o && this._isContentEditable(this.element))),
                        (this.valueMethod = this.element[e || o ? "val" : "text"]),
                        (this.isNewMenu = !0),
                        this._addClass("ui-autocomplete-input"),
                        this.element.attr("autocomplete", "off"),
                        this._on(this.element, {
                            keydown: function (t) {
                                if (this.element.prop("readOnly")) s = n = i = !0;
                                else {
                                    s = n = i = !1;
                                    var e = k.ui.keyCode;
                                    switch (t.keyCode) {
                                        case e.PAGE_UP:
                                            (i = !0), this._move("previousPage", t);
                                            break;
                                        case e.PAGE_DOWN:
                                            (i = !0), this._move("nextPage", t);
                                            break;
                                        case e.UP:
                                            (i = !0), this._keyEvent("previous", t);
                                            break;
                                        case e.DOWN:
                                            (i = !0), this._keyEvent("next", t);
                                            break;
                                        case e.ENTER:
                                            this.menu.active && ((i = !0), t.preventDefault(), this.menu.select(t));
                                            break;
                                        case e.TAB:
                                            this.menu.active && this.menu.select(t);
                                            break;
                                        case e.ESCAPE:
                                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(t), t.preventDefault());
                                            break;
                                        default:
                                            (s = !0), this._searchTimeout(t);
                                    }
                                }
                            },
                            keypress: function (t) {
                                if (i) return (i = !1), void ((this.isMultiLine && !this.menu.element.is(":visible")) || t.preventDefault());
                                if (!s) {
                                    var e = k.ui.keyCode;
                                    switch (t.keyCode) {
                                        case e.PAGE_UP:
                                            this._move("previousPage", t);
                                            break;
                                        case e.PAGE_DOWN:
                                            this._move("nextPage", t);
                                            break;
                                        case e.UP:
                                            this._keyEvent("previous", t);
                                            break;
                                        case e.DOWN:
                                            this._keyEvent("next", t);
                                    }
                                }
                            },
                            input: function (t) {
                                return n ? ((n = !1), void t.preventDefault()) : void this._searchTimeout(t);
                            },
                            focus: function () {
                                (this.selectedItem = null), (this.previous = this._value());
                            },
                            blur: function (t) {
                                return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t));
                            },
                        }),
                        this._initSource(),
                        (this.menu = k("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance")),
                        this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
                        this._on(this.menu.element, {
                            mousedown: function (t) {
                                t.preventDefault(),
                                    (this.cancelBlur = !0),
                                    this._delay(function () {
                                        delete this.cancelBlur, this.element[0] !== k.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
                                    });
                            },
                            menufocus: function (t, e) {
                                var i, s;
                                return this.isNewMenu && ((this.isNewMenu = !1), t.originalEvent && /^mouse/.test(t.originalEvent.type))
                                    ? (this.menu.blur(),
                                      void this.document.one("mousemove", function () {
                                          k(t.target).trigger(t.originalEvent);
                                      }))
                                    : ((s = e.item.data("ui-autocomplete-item")),
                                      !1 !== this._trigger("focus", t, { item: s }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value),
                                      void ((i = e.item.attr("aria-label") || s.value) && k.trim(i).length && (this.liveRegion.children().hide(), k("<div>").text(i).appendTo(this.liveRegion))));
                            },
                            menuselect: function (t, e) {
                                var i = e.item.data("ui-autocomplete-item"),
                                    s = this.previous;
                                this.element[0] !== k.ui.safeActiveElement(this.document[0]) &&
                                    (this.element.trigger("focus"),
                                    (this.previous = s),
                                    this._delay(function () {
                                        (this.previous = s), (this.selectedItem = i);
                                    })),
                                    !1 !== this._trigger("select", t, { item: i }) && this._value(i.value),
                                    (this.term = this._value()),
                                    this.close(t),
                                    (this.selectedItem = i);
                            },
                        }),
                        (this.liveRegion = k("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body)),
                        this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
                        this._on(this.window, {
                            beforeunload: function () {
                                this.element.removeAttr("autocomplete");
                            },
                        });
                },
                _destroy: function () {
                    clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
                },
                _setOption: function (t, e) {
                    this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort();
                },
                _isEventTargetInWidget: function (t) {
                    var e = this.menu.element[0];
                    return t.target === this.element[0] || t.target === e || k.contains(e, t.target);
                },
                _closeOnClickOutside: function (t) {
                    this._isEventTargetInWidget(t) || this.close();
                },
                _appendTo: function () {
                    var t = this.options.appendTo;
                    return ((t = t && (t.jquery || t.nodeType ? k(t) : this.document.find(t).eq(0))) && t[0]) || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t;
                },
                _initSource: function () {
                    var i,
                        s,
                        n = this;
                    k.isArray(this.options.source)
                        ? ((i = this.options.source),
                          (this.source = function (t, e) {
                              e(k.ui.autocomplete.filter(i, t.term));
                          }))
                        : "string" == typeof this.options.source
                        ? ((s = this.options.source),
                          (this.source = function (t, e) {
                              n.xhr && n.xhr.abort(),
                                  (n.xhr = k.ajax({
                                      url: s,
                                      data: t,
                                      dataType: "json",
                                      success: function (t) {
                                          e(t);
                                      },
                                      error: function () {
                                          e([]);
                                      },
                                  }));
                          }))
                        : (this.source = this.options.source);
                },
                _searchTimeout: function (s) {
                    clearTimeout(this.searching),
                        (this.searching = this._delay(function () {
                            var t = this.term === this._value(),
                                e = this.menu.element.is(":visible"),
                                i = s.altKey || s.ctrlKey || s.metaKey || s.shiftKey;
                            (t && (!t || e || i)) || ((this.selectedItem = null), this.search(null, s));
                        }, this.options.delay));
                },
                search: function (t, e) {
                    return (t = null != t ? t : this._value()), (this.term = this._value()), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0;
                },
                _search: function (t) {
                    this.pending++, this._addClass("ui-autocomplete-loading"), (this.cancelSearch = !1), this.source({ term: t }, this._response());
                },
                _response: function () {
                    var e = ++this.requestIndex;
                    return k.proxy(function (t) {
                        e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
                    }, this);
                },
                __response: function (t) {
                    (t = t && this._normalize(t)), this._trigger("response", null, { content: t }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close();
                },
                close: function (t) {
                    (this.cancelSearch = !0), this._close(t);
                },
                _close: function (t) {
                    this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), (this.isNewMenu = !0), this._trigger("close", t));
                },
                _change: function (t) {
                    this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem });
                },
                _normalize: function (t) {
                    return t.length && t[0].label && t[0].value
                        ? t
                        : k.map(t, function (t) {
                              return "string" == typeof t ? { label: t, value: t } : k.extend({}, t, { label: t.label || t.value, value: t.value || t.label });
                          });
                },
                _suggest: function (t) {
                    var e = this.menu.element.empty();
                    this._renderMenu(e, t),
                        (this.isNewMenu = !0),
                        this.menu.refresh(),
                        e.show(),
                        this._resizeMenu(),
                        e.position(k.extend({ of: this.element }, this.options.position)),
                        this.options.autoFocus && this.menu.next(),
                        this._on(this.document, { mousedown: "_closeOnClickOutside" });
                },
                _resizeMenu: function () {
                    var t = this.menu.element;
                    t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
                },
                _renderMenu: function (i, t) {
                    var s = this;
                    k.each(t, function (t, e) {
                        s._renderItemData(i, e);
                    });
                },
                _renderItemData: function (t, e) {
                    return this._renderItem(t, e).data("ui-autocomplete-item", e);
                },
                _renderItem: function (t, e) {
                    return k("<li>").append(k("<div>").text(e.label)).appendTo(t);
                },
                _move: function (t, e) {
                    return this.menu.element.is(":visible")
                        ? (this.menu.isFirstItem() && /^previous/.test(t)) || (this.menu.isLastItem() && /^next/.test(t))
                            ? (this.isMultiLine || this._value(this.term), void this.menu.blur())
                            : void this.menu[t](e)
                        : void this.search(null, e);
                },
                widget: function () {
                    return this.menu.element;
                },
                _value: function () {
                    return this.valueMethod.apply(this.element, arguments);
                },
                _keyEvent: function (t, e) {
                    (this.isMultiLine && !this.menu.element.is(":visible")) || (this._move(t, e), e.preventDefault());
                },
                _isContentEditable: function (t) {
                    if (!t.length) return !1;
                    var e = t.prop("contentEditable");
                    return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
                },
            }),
            k.extend(k.ui.autocomplete, {
                escapeRegex: function (t) {
                    return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                },
                filter: function (t, e) {
                    var i = RegExp(k.ui.autocomplete.escapeRegex(e), "i");
                    return k.grep(t, function (t) {
                        return i.test(t.label || t.value || t);
                    });
                },
            }),
            k.widget("ui.autocomplete", k.ui.autocomplete, {
                options: {
                    messages: {
                        noResults: "No search results.",
                        results: function (t) {
                            return t + (1 < t ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                        },
                    },
                },
                __response: function (t) {
                    var e;
                    this._superApply(arguments),
                        this.options.disabled ||
                            this.cancelSearch ||
                            ((e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults), this.liveRegion.children().hide(), k("<div>").text(e).appendTo(this.liveRegion));
                },
            }),
            k.ui.autocomplete;
        var et,
            it,
            st = /ui-corner-([a-z]){2,6}/g;
        k.widget("ui.controlgroup", {
            version: "1.12.1",
            defaultElement: "<div>",
            options: {
                direction: "horizontal",
                disabled: null,
                onlyVisible: !0,
                items: {
                    button: "input[type=button], input[type=submit], input[type=reset], button, a",
                    controlgroupLabel: ".ui-controlgroup-label",
                    checkboxradio: "input[type='checkbox'], input[type='radio']",
                    selectmenu: "select",
                    spinner: ".ui-spinner-input",
                },
            },
            _create: function () {
                this._enhance();
            },
            _enhance: function () {
                this.element.attr("role", "toolbar"), this.refresh();
            },
            _destroy: function () {
                this._callChildMethod("destroy"),
                    this.childWidgets.removeData("ui-controlgroup-data"),
                    this.element.removeAttr("role"),
                    this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
            },
            _initWidgets: function () {
                var r = this,
                    a = [];
                k.each(this.options.items, function (n, t) {
                    var e, o;
                    return t
                        ? "controlgroupLabel" === n
                            ? ((e = r.element.find(t)).each(function () {
                                  var t = k(this);
                                  t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
                              }),
                              r._addClass(e, null, "ui-widget ui-widget-content ui-state-default"),
                              void (a = a.concat(e.get())))
                            : void (
                                  k.fn[n] &&
                                  ((o = r["_" + n + "Options"] ? r["_" + n + "Options"]("middle") : { classes: {} }),
                                  r.element.find(t).each(function () {
                                      var t,
                                          e = k(this),
                                          i = e[n]("instance"),
                                          s = k.widget.extend({}, o);
                                      ("button" === n && e.parent(".ui-spinner").length) ||
                                          ((i = i || e[n]()[n]("instance")) && (s.classes = r._resolveClassesValues(s.classes, i)), e[n](s), (t = e[n]("widget")), k.data(t[0], "ui-controlgroup-data", i || e[n]("instance")), a.push(t[0]));
                                  }))
                              )
                        : void 0;
                }),
                    (this.childWidgets = k(k.unique(a))),
                    this._addClass(this.childWidgets, "ui-controlgroup-item");
            },
            _callChildMethod: function (e) {
                this.childWidgets.each(function () {
                    var t = k(this).data("ui-controlgroup-data");
                    t && t[e] && t[e]();
                });
            },
            _updateCornerClass: function (t, e) {
                var i = this._buildSimpleOptions(e, "label").classes.label;
                this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i);
            },
            _buildSimpleOptions: function (t, e) {
                var i = "vertical" === this.options.direction,
                    s = { classes: {} };
                return (s.classes[e] = { middle: "", first: "ui-corner-" + (i ? "top" : "left"), last: "ui-corner-" + (i ? "bottom" : "right"), only: "ui-corner-all" }[t]), s;
            },
            _spinnerOptions: function (t) {
                var e = this._buildSimpleOptions(t, "ui-spinner");
                return (e.classes["ui-spinner-up"] = ""), (e.classes["ui-spinner-down"] = ""), e;
            },
            _buttonOptions: function (t) {
                return this._buildSimpleOptions(t, "ui-button");
            },
            _checkboxradioOptions: function (t) {
                return this._buildSimpleOptions(t, "ui-checkboxradio-label");
            },
            _selectmenuOptions: function (t) {
                var e = "vertical" === this.options.direction;
                return {
                    width: e && "auto",
                    classes: {
                        middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" },
                        first: { "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left") },
                        last: { "ui-selectmenu-button-open": e ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right") },
                        only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" },
                    }[t],
                };
            },
            _resolveClassesValues: function (i, s) {
                var n = {};
                return (
                    k.each(i, function (t) {
                        var e = s.options.classes[t] || "",
                            e = k.trim(e.replace(st, ""));
                        n[t] = (e + " " + i[t]).replace(/\s+/g, " ");
                    }),
                    n
                );
            },
            _setOption: function (t, e) {
                return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh();
            },
            refresh: function () {
                var n,
                    o = this;
                this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction),
                    "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"),
                    this._initWidgets(),
                    (n = this.childWidgets),
                    this.options.onlyVisible && (n = n.filter(":visible")),
                    n.length &&
                        (k.each(["first", "last"], function (t, e) {
                            var i,
                                s = n[e]().data("ui-controlgroup-data");
                            s && o["_" + s.widgetName + "Options"]
                                ? (((i = o["_" + s.widgetName + "Options"](1 === n.length ? "only" : e)).classes = o._resolveClassesValues(i.classes, s)), s.element[s.widgetName](i))
                                : o._updateCornerClass(n[e](), e);
                        }),
                        this._callChildMethod("refresh"));
            },
        }),
            k.widget("ui.checkboxradio", [
                k.ui.formResetMixin,
                {
                    version: "1.12.1",
                    options: { disabled: null, label: null, icon: !0, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } },
                    _getCreateOptions: function () {
                        var t,
                            e,
                            i = this,
                            s = this._super() || {};
                        return (
                            this._readType(),
                            (e = this.element.labels()),
                            (this.label = k(e[e.length - 1])),
                            this.label.length || k.error("No label found for checkboxradio widget"),
                            (this.originalLabel = ""),
                            this.label
                                .contents()
                                .not(this.element[0])
                                .each(function () {
                                    i.originalLabel += 3 === this.nodeType ? k(this).text() : this.outerHTML;
                                }),
                            this.originalLabel && (s.label = this.originalLabel),
                            null != (t = this.element[0].disabled) && (s.disabled = t),
                            s
                        );
                    },
                    _create: function () {
                        var t = this.element[0].checked;
                        this._bindFormResetHandler(),
                            null == this.options.disabled && (this.options.disabled = this.element[0].disabled),
                            this._setOption("disabled", this.options.disabled),
                            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
                            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"),
                            "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"),
                            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel),
                            this._enhance(),
                            t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")),
                            this._on({
                                change: "_toggleClasses",
                                focus: function () {
                                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
                                },
                                blur: function () {
                                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
                                },
                            });
                    },
                    _readType: function () {
                        var t = this.element[0].nodeName.toLowerCase();
                        (this.type = this.element[0].type), ("input" === t && /radio|checkbox/.test(this.type)) || k.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type);
                    },
                    _enhance: function () {
                        this._updateIcon(this.element[0].checked);
                    },
                    widget: function () {
                        return this.label;
                    },
                    _getRadioGroup: function () {
                        var t = this.element[0].name,
                            e = "input[name='" + k.ui.escapeSelector(t) + "']";
                        return t
                            ? (this.form.length
                                  ? k(this.form[0].elements).filter(e)
                                  : k(e).filter(function () {
                                        return 0 === k(this).form().length;
                                    })
                              ).not(this.element)
                            : k([]);
                    },
                    _toggleClasses: function () {
                        var t = this.element[0].checked;
                        this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t),
                            this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t),
                            "radio" === this.type &&
                                this._getRadioGroup().each(function () {
                                    var t = k(this).checkboxradio("instance");
                                    t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active");
                                });
                    },
                    _destroy: function () {
                        this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
                    },
                    _setOption: function (t, e) {
                        return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void (this.element[0].disabled = e)) : void this.refresh()) : void 0;
                    },
                    _updateIcon: function (t) {
                        var e = "ui-icon ui-icon-background ";
                        this.options.icon
                            ? (this.icon || ((this.icon = k("<span>")), (this.iconSpace = k("<span> </span>")), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
                              "checkbox" === this.type ? ((e += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank"), this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : (e += "ui-icon-blank"),
                              this._addClass(this.icon, "ui-checkboxradio-icon", e),
                              t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"),
                              this.icon.prependTo(this.label).after(this.iconSpace))
                            : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
                    },
                    _updateLabel: function () {
                        var t = this.label.contents().not(this.element[0]);
                        this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label);
                    },
                    refresh: function () {
                        var t = this.element[0].checked,
                            e = this.element[0].disabled;
                        this._updateIcon(t),
                            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t),
                            null !== this.options.label && this._updateLabel(),
                            e !== this.options.disabled && this._setOptions({ disabled: e });
                    },
                },
            ]),
            k.ui.checkboxradio,
            k.widget("ui.button", {
                version: "1.12.1",
                defaultElement: "<button>",
                options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: !0 },
                _getCreateOptions: function () {
                    var t,
                        e = this._super() || {};
                    return (
                        (this.isInput = this.element.is("input")),
                        null != (t = this.element[0].disabled) && (e.disabled = t),
                        (this.originalLabel = this.isInput ? this.element.val() : this.element.html()),
                        this.originalLabel && (e.label = this.originalLabel),
                        e
                    );
                },
                _create: function () {
                    !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0),
                        null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1),
                        (this.hasTitle = !!this.element.attr("title")),
                        this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)),
                        this._addClass("ui-button", "ui-widget"),
                        this._setOption("disabled", this.options.disabled),
                        this._enhance(),
                        this.element.is("a") &&
                            this._on({
                                keyup: function (t) {
                                    t.keyCode === k.ui.keyCode.SPACE && (t.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
                                },
                            });
                },
                _enhance: function () {
                    this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip());
                },
                _updateTooltip: function () {
                    (this.title = this.element.attr("title")), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
                },
                _updateIcon: function (t, e) {
                    var i = "iconPosition" !== t,
                        s = i ? this.options.iconPosition : e,
                        n = "top" === s || "bottom" === s;
                    this.icon
                        ? i && this._removeClass(this.icon, null, this.options.icon)
                        : ((this.icon = k("<span>")), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")),
                        i && this._addClass(this.icon, null, e),
                        this._attachIcon(s),
                        n
                            ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove())
                            : (this.iconSpace || ((this.iconSpace = k("<span> </span>")), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s));
                },
                _destroy: function () {
                    this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title");
                },
                _attachIconSpace: function (t) {
                    this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace);
                },
                _attachIcon: function (t) {
                    this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon);
                },
                _setOptions: function (t) {
                    var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                        i = void 0 === t.icon ? this.options.icon : t.icon;
                    e || i || (t.showLabel = !0), this._super(t);
                },
                _setOption: function (t, e) {
                    "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())),
                        "iconPosition" === t && this._updateIcon(t, e),
                        "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()),
                        "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))),
                        this._super(t, e),
                        "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), (this.element[0].disabled = e) && this.element.blur());
                },
                refresh: function () {
                    var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                    t !== this.options.disabled && this._setOptions({ disabled: t }), this._updateTooltip();
                },
            }),
            !1 !== k.uiBackCompat &&
                (k.widget("ui.button", k.ui.button, {
                    options: { text: !0, icons: { primary: null, secondary: null } },
                    _create: function () {
                        this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text),
                            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel),
                            this.options.icon || (!this.options.icons.primary && !this.options.icons.secondary)
                                ? this.options.icon && (this.options.icons.primary = this.options.icon)
                                : this.options.icons.primary
                                ? (this.options.icon = this.options.icons.primary)
                                : ((this.options.icon = this.options.icons.secondary), (this.options.iconPosition = "end")),
                            this._super();
                    },
                    _setOption: function (t, e) {
                        return "text" === t
                            ? void this._super("showLabel", e)
                            : ("showLabel" === t && (this.options.text = e),
                              "icon" === t && (this.options.icons.primary = e),
                              "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))),
                              void this._superApply(arguments));
                    },
                }),
                (k.fn.button =
                    ((et = k.fn.button),
                    function () {
                        return !this.length || (this.length && "INPUT" !== this[0].tagName) || (this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type"))
                            ? et.apply(this, arguments)
                            : (k.ui.checkboxradio || k.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({ icon: !1 }) : this.checkboxradio.apply(this, arguments));
                    })),
                (k.fn.buttonset = function () {
                    return (
                        k.ui.controlgroup || k.error("Controlgroup widget missing"),
                        "option" === arguments[0] && "items" === arguments[1] && arguments[2]
                            ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]])
                            : "option" === arguments[0] && "items" === arguments[1]
                            ? this.controlgroup.apply(this, [arguments[0], "items.button"])
                            : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = { button: arguments[0].items }), this.controlgroup.apply(this, arguments))
                    );
                })),
            k.ui.button,
            k.extend(k.ui, { datepicker: { version: "1.12.1" } }),
            k.extend(t.prototype, {
                markerClassName: "hasDatepicker",
                maxRows: 4,
                _widgetDatepicker: function () {
                    return this.dpDiv;
                },
                setDefaults: function (t) {
                    return u(this._defaults, t || {}), this;
                },
                _attachDatepicker: function (t, e) {
                    var i,
                        s = t.nodeName.toLowerCase(),
                        n = "div" === s || "span" === s;
                    t.id || ((this.uuid += 1), (t.id = "dp" + this.uuid)), ((i = this._newInst(k(t), n)).settings = k.extend({}, e || {})), "input" === s ? this._connectDatepicker(t, i) : n && this._inlineDatepicker(t, i);
                },
                _newInst: function (t, e) {
                    return {
                        id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                        input: t,
                        selectedDay: 0,
                        selectedMonth: 0,
                        selectedYear: 0,
                        drawMonth: 0,
                        drawYear: 0,
                        inline: e,
                        dpDiv: e ? i(k("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv,
                    };
                },
                _connectDatepicker: function (t, e) {
                    var i = k(t);
                    (e.append = k([])),
                        (e.trigger = k([])),
                        i.hasClass(this.markerClassName) ||
                            (this._attachments(i, e),
                            i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp),
                            this._autoSize(e),
                            k.data(t, "datepicker", e),
                            e.settings.disabled && this._disableDatepicker(t));
                },
                _attachments: function (t, e) {
                    var i,
                        s,
                        n,
                        o = this._get(e, "appendText"),
                        r = this._get(e, "isRTL");
                    e.append && e.append.remove(),
                        o && ((e.append = k("<span class='" + this._appendClass + "'>" + o + "</span>")), t[r ? "before" : "after"](e.append)),
                        t.off("focus", this._showDatepicker),
                        e.trigger && e.trigger.remove(),
                        ("focus" !== (i = this._get(e, "showOn")) && "both" !== i) || t.on("focus", this._showDatepicker),
                        ("button" !== i && "both" !== i) ||
                            ((s = this._get(e, "buttonText")),
                            (n = this._get(e, "buttonImage")),
                            (e.trigger = k(
                                this._get(e, "buttonImageOnly")
                                    ? k("<img/>").addClass(this._triggerClass).attr({ src: n, alt: s, title: s })
                                    : k("<button type='button'></button>")
                                          .addClass(this._triggerClass)
                                          .html(n ? k("<img/>").attr({ src: n, alt: s, title: s }) : s)
                            )),
                            t[r ? "before" : "after"](e.trigger),
                            e.trigger.on("click", function () {
                                return (
                                    k.datepicker._datepickerShowing && k.datepicker._lastInput === t[0]
                                        ? k.datepicker._hideDatepicker()
                                        : (k.datepicker._datepickerShowing && k.datepicker._lastInput !== t[0] && k.datepicker._hideDatepicker(), k.datepicker._showDatepicker(t[0])),
                                    !1
                                );
                            }));
                },
                _autoSize: function (t) {
                    var e, i, s, n, o, r;
                    this._get(t, "autoSize") &&
                        !t.inline &&
                        ((o = new Date(2009, 11, 20)),
                        (r = this._get(t, "dateFormat")).match(/[DM]/) &&
                            ((e = function (t) {
                                for (n = s = i = 0; t.length > n; n++) t[n].length > i && ((i = t[n].length), (s = n));
                                return s;
                            }),
                            o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                            o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())),
                        t.input.attr("size", this._formatDate(t, o).length));
                },
                _inlineDatepicker: function (t, e) {
                    var i = k(t);
                    i.hasClass(this.markerClassName) ||
                        (i.addClass(this.markerClassName).append(e.dpDiv),
                        k.data(t, "datepicker", e),
                        this._setDate(e, this._getDefaultDate(e), !0),
                        this._updateDatepicker(e),
                        this._updateAlternate(e),
                        e.settings.disabled && this._disableDatepicker(t),
                        e.dpDiv.css("display", "block"));
                },
                _dialogDatepicker: function (t, e, i, s, n) {
                    var o,
                        r,
                        a,
                        l,
                        h,
                        c = this._dialogInst;
                    return (
                        c ||
                            ((this.uuid += 1),
                            (o = "dp" + this.uuid),
                            (this._dialogInput = k("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>")),
                            this._dialogInput.on("keydown", this._doKeyDown),
                            k("body").append(this._dialogInput),
                            ((c = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}),
                            k.data(this._dialogInput[0], "datepicker", c)),
                        u(c.settings, s || {}),
                        (e = e && e.constructor === Date ? this._formatDate(c, e) : e),
                        this._dialogInput.val(e),
                        (this._pos = n ? (n.length ? n : [n.pageX, n.pageY]) : null),
                        this._pos ||
                            ((r = document.documentElement.clientWidth),
                            (a = document.documentElement.clientHeight),
                            (l = document.documentElement.scrollLeft || document.body.scrollLeft),
                            (h = document.documentElement.scrollTop || document.body.scrollTop),
                            (this._pos = [r / 2 - 100 + l, a / 2 - 150 + h])),
                        this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
                        (c.settings.onSelect = i),
                        (this._inDialog = !0),
                        this.dpDiv.addClass(this._dialogClass),
                        this._showDatepicker(this._dialogInput[0]),
                        k.blockUI && k.blockUI(this.dpDiv),
                        k.data(this._dialogInput[0], "datepicker", c),
                        this
                    );
                },
                _destroyDatepicker: function (t) {
                    var e,
                        i = k(t),
                        s = k.data(t, "datepicker");
                    i.hasClass(this.markerClassName) &&
                        ((e = t.nodeName.toLowerCase()),
                        k.removeData(t, "datepicker"),
                        "input" === e
                            ? (s.append.remove(), s.trigger.remove(), i.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp))
                            : ("div" !== e && "span" !== e) || i.removeClass(this.markerClassName).empty(),
                        it === s && (it = null));
                },
                _enableDatepicker: function (e) {
                    var t,
                        i,
                        s = k(e),
                        n = k.data(e, "datepicker");
                    s.hasClass(this.markerClassName) &&
                        ("input" === (t = e.nodeName.toLowerCase())
                            ? ((e.disabled = !1),
                              n.trigger
                                  .filter("button")
                                  .each(function () {
                                      this.disabled = !1;
                                  })
                                  .end()
                                  .filter("img")
                                  .css({ opacity: "1.0", cursor: "" }))
                            : ("div" !== t && "span" !== t) || ((i = s.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
                        (this._disabledInputs = k.map(this._disabledInputs, function (t) {
                            return t === e ? null : t;
                        })));
                },
                _disableDatepicker: function (e) {
                    var t,
                        i,
                        s = k(e),
                        n = k.data(e, "datepicker");
                    s.hasClass(this.markerClassName) &&
                        ("input" === (t = e.nodeName.toLowerCase())
                            ? ((e.disabled = !0),
                              n.trigger
                                  .filter("button")
                                  .each(function () {
                                      this.disabled = !0;
                                  })
                                  .end()
                                  .filter("img")
                                  .css({ opacity: "0.5", cursor: "default" }))
                            : ("div" !== t && "span" !== t) || ((i = s.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
                        (this._disabledInputs = k.map(this._disabledInputs, function (t) {
                            return t === e ? null : t;
                        })),
                        (this._disabledInputs[this._disabledInputs.length] = e));
                },
                _isDisabledDatepicker: function (t) {
                    if (!t) return !1;
                    for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === t) return !0;
                    return !1;
                },
                _getInst: function (t) {
                    try {
                        return k.data(t, "datepicker");
                    } catch (t) {
                        throw "Missing instance data for this datepicker";
                    }
                },
                _optionDatepicker: function (t, e, i) {
                    var s,
                        n,
                        o,
                        r,
                        a = this._getInst(t);
                    return 2 === arguments.length && "string" == typeof e
                        ? "defaults" === e
                            ? k.extend({}, k.datepicker._defaults)
                            : a
                            ? "all" === e
                                ? k.extend({}, a.settings)
                                : this._get(a, e)
                            : null
                        : ((s = e || {}),
                          "string" == typeof e && ((s = {})[e] = i),
                          void (
                              a &&
                              (this._curInst === a && this._hideDatepicker(),
                              (n = this._getDateDatepicker(t, !0)),
                              (o = this._getMinMaxDate(a, "min")),
                              (r = this._getMinMaxDate(a, "max")),
                              u(a.settings, s),
                              null !== o && void 0 !== s.dateFormat && void 0 === s.minDate && (a.settings.minDate = this._formatDate(a, o)),
                              null !== r && void 0 !== s.dateFormat && void 0 === s.maxDate && (a.settings.maxDate = this._formatDate(a, r)),
                              "disabled" in s && (s.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)),
                              this._attachments(k(t), a),
                              this._autoSize(a),
                              this._setDate(a, n),
                              this._updateAlternate(a),
                              this._updateDatepicker(a))
                          ));
                },
                _changeDatepicker: function (t, e, i) {
                    this._optionDatepicker(t, e, i);
                },
                _refreshDatepicker: function (t) {
                    var e = this._getInst(t);
                    e && this._updateDatepicker(e);
                },
                _setDateDatepicker: function (t, e) {
                    var i = this._getInst(t);
                    i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
                },
                _getDateDatepicker: function (t, e) {
                    var i = this._getInst(t);
                    return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
                },
                _doKeyDown: function (t) {
                    var e,
                        i,
                        s,
                        n = k.datepicker._getInst(t.target),
                        o = !0,
                        r = n.dpDiv.is(".ui-datepicker-rtl");
                    if (((n._keyEvent = !0), k.datepicker._datepickerShowing))
                        switch (t.keyCode) {
                            case 9:
                                k.datepicker._hideDatepicker(), (o = !1);
                                break;
                            case 13:
                                return (
                                    (s = k("td." + k.datepicker._dayOverClass + ":not(." + k.datepicker._currentClass + ")", n.dpDiv))[0] && k.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, s[0]),
                                    (e = k.datepicker._get(n, "onSelect")) ? ((i = k.datepicker._formatDate(n)), e.apply(n.input ? n.input[0] : null, [i, n])) : k.datepicker._hideDatepicker(),
                                    !1
                                );
                            case 27:
                                k.datepicker._hideDatepicker();
                                break;
                            case 33:
                                k.datepicker._adjustDate(t.target, t.ctrlKey ? -k.datepicker._get(n, "stepBigMonths") : -k.datepicker._get(n, "stepMonths"), "M");
                                break;
                            case 34:
                                k.datepicker._adjustDate(t.target, t.ctrlKey ? +k.datepicker._get(n, "stepBigMonths") : +k.datepicker._get(n, "stepMonths"), "M");
                                break;
                            case 35:
                                (t.ctrlKey || t.metaKey) && k.datepicker._clearDate(t.target), (o = t.ctrlKey || t.metaKey);
                                break;
                            case 36:
                                (t.ctrlKey || t.metaKey) && k.datepicker._gotoToday(t.target), (o = t.ctrlKey || t.metaKey);
                                break;
                            case 37:
                                (t.ctrlKey || t.metaKey) && k.datepicker._adjustDate(t.target, r ? 1 : -1, "D"),
                                    (o = t.ctrlKey || t.metaKey),
                                    t.originalEvent.altKey && k.datepicker._adjustDate(t.target, t.ctrlKey ? -k.datepicker._get(n, "stepBigMonths") : -k.datepicker._get(n, "stepMonths"), "M");
                                break;
                            case 38:
                                (t.ctrlKey || t.metaKey) && k.datepicker._adjustDate(t.target, -7, "D"), (o = t.ctrlKey || t.metaKey);
                                break;
                            case 39:
                                (t.ctrlKey || t.metaKey) && k.datepicker._adjustDate(t.target, r ? -1 : 1, "D"),
                                    (o = t.ctrlKey || t.metaKey),
                                    t.originalEvent.altKey && k.datepicker._adjustDate(t.target, t.ctrlKey ? +k.datepicker._get(n, "stepBigMonths") : +k.datepicker._get(n, "stepMonths"), "M");
                                break;
                            case 40:
                                (t.ctrlKey || t.metaKey) && k.datepicker._adjustDate(t.target, 7, "D"), (o = t.ctrlKey || t.metaKey);
                                break;
                            default:
                                o = !1;
                        }
                    else 36 === t.keyCode && t.ctrlKey ? k.datepicker._showDatepicker(this) : (o = !1);
                    o && (t.preventDefault(), t.stopPropagation());
                },
                _doKeyPress: function (t) {
                    var e,
                        i,
                        s = k.datepicker._getInst(t.target);
                    return k.datepicker._get(s, "constrainInput")
                        ? ((e = k.datepicker._possibleChars(k.datepicker._get(s, "dateFormat"))), (i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode)), t.ctrlKey || t.metaKey || i < " " || !e || -1 < e.indexOf(i))
                        : void 0;
                },
                _doKeyUp: function (t) {
                    var e = k.datepicker._getInst(t.target);
                    if (e.input.val() !== e.lastVal)
                        try {
                            k.datepicker.parseDate(k.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, k.datepicker._getFormatConfig(e)) &&
                                (k.datepicker._setDateFromField(e), k.datepicker._updateAlternate(e), k.datepicker._updateDatepicker(e));
                        } catch (t) {}
                    return !0;
                },
                _showDatepicker: function (t) {
                    var e, i, s, n, o, r, a;
                    "input" !== (t = t.target || t).nodeName.toLowerCase() && (t = k("input", t.parentNode)[0]),
                        k.datepicker._isDisabledDatepicker(t) ||
                            k.datepicker._lastInput === t ||
                            ((a = k.datepicker._getInst(t)),
                            k.datepicker._curInst && k.datepicker._curInst !== a && (k.datepicker._curInst.dpDiv.stop(!0, !0), a && k.datepicker._datepickerShowing && k.datepicker._hideDatepicker(k.datepicker._curInst.input[0])),
                            !1 !== (i = (e = k.datepicker._get(a, "beforeShow")) ? e.apply(t, [t, a]) : {}) &&
                                (u(a.settings, i),
                                (a.lastVal = null),
                                (k.datepicker._lastInput = t),
                                k.datepicker._setDateFromField(a),
                                k.datepicker._inDialog && (t.value = ""),
                                k.datepicker._pos || ((k.datepicker._pos = k.datepicker._findPos(t)), (k.datepicker._pos[1] += t.offsetHeight)),
                                (s = !1),
                                k(t)
                                    .parents()
                                    .each(function () {
                                        return !(s |= "fixed" === k(this).css("position"));
                                    }),
                                (n = { left: k.datepicker._pos[0], top: k.datepicker._pos[1] }),
                                (k.datepicker._pos = null),
                                a.dpDiv.empty(),
                                a.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }),
                                k.datepicker._updateDatepicker(a),
                                (n = k.datepicker._checkOffset(a, n, s)),
                                a.dpDiv.css({ position: k.datepicker._inDialog && k.blockUI ? "static" : s ? "fixed" : "absolute", display: "none", left: n.left + "px", top: n.top + "px" }),
                                a.inline ||
                                    ((o = k.datepicker._get(a, "showAnim")),
                                    (r = k.datepicker._get(a, "duration")),
                                    a.dpDiv.css(
                                        "z-index",
                                        (function (t) {
                                            for (var e, i; t.length && t[0] !== document; ) {
                                                if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && ((i = parseInt(t.css("zIndex"), 10)), !isNaN(i) && 0 !== i)) return i;
                                                t = t.parent();
                                            }
                                            return 0;
                                        })(k(t)) + 1
                                    ),
                                    (k.datepicker._datepickerShowing = !0),
                                    k.effects && k.effects.effect[o] ? a.dpDiv.show(o, k.datepicker._get(a, "showOptions"), r) : a.dpDiv[o || "show"](o ? r : null),
                                    k.datepicker._shouldFocusInput(a) && a.input.trigger("focus"),
                                    (k.datepicker._curInst = a))));
                },
                _updateDatepicker: function (t) {
                    (this.maxRows = 4), (it = t).dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                    var e,
                        i = this._getNumberOfMonths(t),
                        s = i[1],
                        n = t.dpDiv.find("." + this._dayOverClass + " a");
                    0 < n.length && o.apply(n.get(0)),
                        t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
                        1 < s && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"),
                        t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
                        t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
                        t === k.datepicker._curInst && k.datepicker._datepickerShowing && k.datepicker._shouldFocusInput(t) && t.input.trigger("focus"),
                        t.yearshtml &&
                            ((e = t.yearshtml),
                            setTimeout(function () {
                                e === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), (e = t.yearshtml = null);
                            }, 0));
                },
                _shouldFocusInput: function (t) {
                    return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
                },
                _checkOffset: function (t, e, i) {
                    var s = t.dpDiv.outerWidth(),
                        n = t.dpDiv.outerHeight(),
                        o = t.input ? t.input.outerWidth() : 0,
                        r = t.input ? t.input.outerHeight() : 0,
                        a = document.documentElement.clientWidth + (i ? 0 : k(document).scrollLeft()),
                        l = document.documentElement.clientHeight + (i ? 0 : k(document).scrollTop());
                    return (
                        (e.left -= this._get(t, "isRTL") ? s - o : 0),
                        (e.left -= i && e.left === t.input.offset().left ? k(document).scrollLeft() : 0),
                        (e.top -= i && e.top === t.input.offset().top + r ? k(document).scrollTop() : 0),
                        (e.left -= Math.min(e.left, e.left + s > a && s < a ? Math.abs(e.left + s - a) : 0)),
                        (e.top -= Math.min(e.top, e.top + n > l && n < l ? Math.abs(n + r) : 0)),
                        e
                    );
                },
                _findPos: function (t) {
                    for (var e, i = this._getInst(t), s = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || k.expr.filters.hidden(t)); ) t = t[s ? "previousSibling" : "nextSibling"];
                    return [(e = k(t).offset()).left, e.top];
                },
                _hideDatepicker: function (t) {
                    var e,
                        i,
                        s,
                        n,
                        o = this._curInst;
                    !o ||
                        (t && o !== k.data(t, "datepicker")) ||
                        (this._datepickerShowing &&
                            ((e = this._get(o, "showAnim")),
                            (i = this._get(o, "duration")),
                            (s = function () {
                                k.datepicker._tidyDialog(o);
                            }),
                            k.effects && (k.effects.effect[e] || k.effects[e]) ? o.dpDiv.hide(e, k.datepicker._get(o, "showOptions"), i, s) : o.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? i : null, s),
                            e || s(),
                            (this._datepickerShowing = !1),
                            (n = this._get(o, "onClose")) && n.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]),
                            (this._lastInput = null),
                            this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), k.blockUI && (k.unblockUI(), k("body").append(this.dpDiv))),
                            (this._inDialog = !1)));
                },
                _tidyDialog: function (t) {
                    t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
                },
                _checkExternalClick: function (t) {
                    var e, i;
                    k.datepicker._curInst &&
                        ((e = k(t.target)),
                        (i = k.datepicker._getInst(e[0])),
                        ((e[0].id === k.datepicker._mainDivId ||
                            0 !== e.parents("#" + k.datepicker._mainDivId).length ||
                            e.hasClass(k.datepicker.markerClassName) ||
                            e.closest("." + k.datepicker._triggerClass).length ||
                            !k.datepicker._datepickerShowing ||
                            (k.datepicker._inDialog && k.blockUI)) &&
                            (!e.hasClass(k.datepicker.markerClassName) || k.datepicker._curInst === i)) ||
                            k.datepicker._hideDatepicker());
                },
                _adjustDate: function (t, e, i) {
                    var s = k(t),
                        n = this._getInst(s[0]);
                    this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, e + ("M" === i ? this._get(n, "showCurrentAtPos") : 0), i), this._updateDatepicker(n));
                },
                _gotoToday: function (t) {
                    var e,
                        i = k(t),
                        s = this._getInst(i[0]);
                    this._get(s, "gotoCurrent") && s.currentDay
                        ? ((s.selectedDay = s.currentDay), (s.drawMonth = s.selectedMonth = s.currentMonth), (s.drawYear = s.selectedYear = s.currentYear))
                        : ((e = new Date()), (s.selectedDay = e.getDate()), (s.drawMonth = s.selectedMonth = e.getMonth()), (s.drawYear = s.selectedYear = e.getFullYear())),
                        this._notifyChange(s),
                        this._adjustDate(i);
                },
                _selectMonthYear: function (t, e, i) {
                    var s = k(t),
                        n = this._getInst(s[0]);
                    (n["selected" + ("M" === i ? "Month" : "Year")] = n["draw" + ("M" === i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10)), this._notifyChange(n), this._adjustDate(s);
                },
                _selectDay: function (t, e, i, s) {
                    var n,
                        o = k(t);
                    k(s).hasClass(this._unselectableClass) ||
                        this._isDisabledDatepicker(o[0]) ||
                        (((n = this._getInst(o[0])).selectedDay = n.currentDay = k("a", s).html()),
                        (n.selectedMonth = n.currentMonth = e),
                        (n.selectedYear = n.currentYear = i),
                        this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)));
                },
                _clearDate: function (t) {
                    var e = k(t);
                    this._selectDate(e, "");
                },
                _selectDate: function (t, e) {
                    var i,
                        s = k(t),
                        n = this._getInst(s[0]);
                    (e = null != e ? e : this._formatDate(n)),
                        n.input && n.input.val(e),
                        this._updateAlternate(n),
                        (i = this._get(n, "onSelect")) ? i.apply(n.input ? n.input[0] : null, [e, n]) : n.input && n.input.trigger("change"),
                        n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), (this._lastInput = n.input[0]), "object" != typeof n.input[0] && n.input.trigger("focus"), (this._lastInput = null));
                },
                _updateAlternate: function (t) {
                    var e,
                        i,
                        s,
                        n = this._get(t, "altField");
                    n && ((e = this._get(t, "altFormat") || this._get(t, "dateFormat")), (i = this._getDate(t)), (s = this.formatDate(e, i, this._getFormatConfig(t))), k(n).val(s));
                },
                noWeekends: function (t) {
                    var e = t.getDay();
                    return [0 < e && e < 6, ""];
                },
                iso8601Week: function (t) {
                    var e,
                        i = new Date(t.getTime());
                    return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), (e = i.getTime()), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1;
                },
                parseDate: function (i, o, t) {
                    if (null == i || null == o) throw "Invalid arguments";
                    if ("" === (o = "object" == typeof o ? "" + o : o + "")) return null;
                    function r(t) {
                        var e = i.length > x + 1 && i.charAt(x + 1) === t;
                        return e && x++, e;
                    }
                    function e(t) {
                        var e = r(t),
                            i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                            s = RegExp("^\\d{" + ("y" === t ? i : 1) + "," + i + "}"),
                            n = o.substring(c).match(s);
                        if (!n) throw "Missing number at position " + c;
                        return (c += n[0].length), parseInt(n[0], 10);
                    }
                    function s(t, e, i) {
                        var s = -1,
                            n = k
                                .map(r(t) ? i : e, function (t, e) {
                                    return [[e, t]];
                                })
                                .sort(function (t, e) {
                                    return -(t[1].length - e[1].length);
                                });
                        if (
                            (k.each(n, function (t, e) {
                                var i = e[1];
                                return o.substr(c, i.length).toLowerCase() === i.toLowerCase() ? ((s = e[0]), (c += i.length), !1) : void 0;
                            }),
                            -1 !== s)
                        )
                            return s + 1;
                        throw "Unknown name at position " + c;
                    }
                    function n() {
                        if (o.charAt(c) !== i.charAt(x)) throw "Unexpected literal at position " + c;
                        c++;
                    }
                    for (
                        var a,
                            l,
                            h,
                            c = 0,
                            u = (t ? t.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                            d = "string" != typeof u ? u : (new Date().getFullYear() % 100) + parseInt(u, 10),
                            p = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort,
                            f = (t ? t.dayNames : null) || this._defaults.dayNames,
                            m = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort,
                            g = (t ? t.monthNames : null) || this._defaults.monthNames,
                            v = -1,
                            y = -1,
                            _ = -1,
                            b = -1,
                            w = !1,
                            x = 0;
                        i.length > x;
                        x++
                    )
                        if (w) "'" !== i.charAt(x) || r("'") ? n() : (w = !1);
                        else
                            switch (i.charAt(x)) {
                                case "d":
                                    _ = e("d");
                                    break;
                                case "D":
                                    s("D", p, f);
                                    break;
                                case "o":
                                    b = e("o");
                                    break;
                                case "m":
                                    y = e("m");
                                    break;
                                case "M":
                                    y = s("M", m, g);
                                    break;
                                case "y":
                                    v = e("y");
                                    break;
                                case "@":
                                    (v = (h = new Date(e("@"))).getFullYear()), (y = h.getMonth() + 1), (_ = h.getDate());
                                    break;
                                case "!":
                                    (v = (h = new Date((e("!") - this._ticksTo1970) / 1e4)).getFullYear()), (y = h.getMonth() + 1), (_ = h.getDate());
                                    break;
                                case "'":
                                    r("'") ? n() : (w = !0);
                                    break;
                                default:
                                    n();
                            }
                    if (o.length > c && ((l = o.substr(c)), !/^\s+/.test(l))) throw "Extra/unparsed characters found in date: " + l;
                    if ((-1 === v ? (v = new Date().getFullYear()) : v < 100 && (v += new Date().getFullYear() - (new Date().getFullYear() % 100) + (v <= d ? 0 : -100)), -1 < b))
                        for (y = 1, _ = b; !(_ <= (a = this._getDaysInMonth(v, y - 1))); ) y++, (_ -= a);
                    if ((h = this._daylightSavingAdjust(new Date(v, y - 1, _))).getFullYear() !== v || h.getMonth() + 1 !== y || h.getDate() !== _) throw "Invalid date";
                    return h;
                },
                ATOM: "yy-mm-dd",
                COOKIE: "D, dd M yy",
                ISO_8601: "yy-mm-dd",
                RFC_822: "D, d M y",
                RFC_850: "DD, dd-M-y",
                RFC_1036: "D, d M y",
                RFC_1123: "D, d M yy",
                RFC_2822: "D, d M yy",
                RSS: "D, d M y",
                TICKS: "!",
                TIMESTAMP: "@",
                W3C: "yy-mm-dd",
                _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
                formatDate: function (i, t, e) {
                    if (!t) return "";
                    function n(t) {
                        var e = i.length > r + 1 && i.charAt(r + 1) === t;
                        return e && r++, e;
                    }
                    function s(t, e, i) {
                        var s = "" + e;
                        if (n(t)) for (; i > s.length; ) s = "0" + s;
                        return s;
                    }
                    function o(t, e, i, s) {
                        return n(t) ? s[e] : i[e];
                    }
                    var r,
                        a = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
                        l = (e ? e.dayNames : null) || this._defaults.dayNames,
                        h = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
                        c = (e ? e.monthNames : null) || this._defaults.monthNames,
                        u = "",
                        d = !1;
                    if (t)
                        for (r = 0; i.length > r; r++)
                            if (d) "'" !== i.charAt(r) || n("'") ? (u += i.charAt(r)) : (d = !1);
                            else
                                switch (i.charAt(r)) {
                                    case "d":
                                        u += s("d", t.getDate(), 2);
                                        break;
                                    case "D":
                                        u += o("D", t.getDay(), a, l);
                                        break;
                                    case "o":
                                        u += s("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                        break;
                                    case "m":
                                        u += s("m", t.getMonth() + 1, 2);
                                        break;
                                    case "M":
                                        u += o("M", t.getMonth(), h, c);
                                        break;
                                    case "y":
                                        u += n("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + (t.getFullYear() % 100);
                                        break;
                                    case "@":
                                        u += t.getTime();
                                        break;
                                    case "!":
                                        u += 1e4 * t.getTime() + this._ticksTo1970;
                                        break;
                                    case "'":
                                        n("'") ? (u += "'") : (d = !0);
                                        break;
                                    default:
                                        u += i.charAt(r);
                                }
                    return u;
                },
                _possibleChars: function (i) {
                    function t(t) {
                        var e = i.length > n + 1 && i.charAt(n + 1) === t;
                        return e && n++, e;
                    }
                    for (var e = "", s = !1, n = 0; i.length > n; n++)
                        if (s) "'" !== i.charAt(n) || t("'") ? (e += i.charAt(n)) : (s = !1);
                        else
                            switch (i.charAt(n)) {
                                case "d":
                                case "m":
                                case "y":
                                case "@":
                                    e += "0123456789";
                                    break;
                                case "D":
                                case "M":
                                    return null;
                                case "'":
                                    t("'") ? (e += "'") : (s = !0);
                                    break;
                                default:
                                    e += i.charAt(n);
                            }
                    return e;
                },
                _get: function (t, e) {
                    return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
                },
                _setDateFromField: function (t, e) {
                    if (t.input.val() !== t.lastVal) {
                        var i = this._get(t, "dateFormat"),
                            s = (t.lastVal = t.input ? t.input.val() : null),
                            n = this._getDefaultDate(t),
                            o = n,
                            r = this._getFormatConfig(t);
                        try {
                            o = this.parseDate(i, s, r) || n;
                        } catch (t) {
                            s = e ? "" : s;
                        }
                        (t.selectedDay = o.getDate()),
                            (t.drawMonth = t.selectedMonth = o.getMonth()),
                            (t.drawYear = t.selectedYear = o.getFullYear()),
                            (t.currentDay = s ? o.getDate() : 0),
                            (t.currentMonth = s ? o.getMonth() : 0),
                            (t.currentYear = s ? o.getFullYear() : 0),
                            this._adjustInstDate(t);
                    }
                },
                _getDefaultDate: function (t) {
                    return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()));
                },
                _determineDate: function (a, t, e) {
                    var i,
                        s,
                        n =
                            null == t || "" === t
                                ? e
                                : "string" == typeof t
                                ? (function (t) {
                                      try {
                                          return k.datepicker.parseDate(k.datepicker._get(a, "dateFormat"), t, k.datepicker._getFormatConfig(a));
                                      } catch (t) {}
                                      for (
                                          var e = (t.toLowerCase().match(/^c/) ? k.datepicker._getDate(a) : null) || new Date(),
                                              i = e.getFullYear(),
                                              s = e.getMonth(),
                                              n = e.getDate(),
                                              o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                                              r = o.exec(t);
                                          r;

                                      ) {
                                          switch (r[2] || "d") {
                                              case "d":
                                              case "D":
                                                  n += parseInt(r[1], 10);
                                                  break;
                                              case "w":
                                              case "W":
                                                  n += 7 * parseInt(r[1], 10);
                                                  break;
                                              case "m":
                                              case "M":
                                                  (s += parseInt(r[1], 10)), (n = Math.min(n, k.datepicker._getDaysInMonth(i, s)));
                                                  break;
                                              case "y":
                                              case "Y":
                                                  (i += parseInt(r[1], 10)), (n = Math.min(n, k.datepicker._getDaysInMonth(i, s)));
                                          }
                                          r = o.exec(t);
                                      }
                                      return new Date(i, s, n);
                                  })(t)
                                : "number" == typeof t
                                ? isNaN(t)
                                    ? e
                                    : ((i = t), (s = new Date()).setDate(s.getDate() + i), s)
                                : new Date(t.getTime());
                    return (n = n && "Invalid Date" == "" + n ? e : n) && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n);
                },
                _daylightSavingAdjust: function (t) {
                    return t ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0), t) : null;
                },
                _setDate: function (t, e, i) {
                    var s = !e,
                        n = t.selectedMonth,
                        o = t.selectedYear,
                        r = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
                    (t.selectedDay = t.currentDay = r.getDate()),
                        (t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth()),
                        (t.drawYear = t.selectedYear = t.currentYear = r.getFullYear()),
                        (n === t.selectedMonth && o === t.selectedYear) || i || this._notifyChange(t),
                        this._adjustInstDate(t),
                        t.input && t.input.val(s ? "" : this._formatDate(t));
                },
                _getDate: function (t) {
                    return !t.currentYear || (t.input && "" === t.input.val()) ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                },
                _attachHandlers: function (t) {
                    var e = this._get(t, "stepMonths"),
                        i = "#" + t.id.replace(/\\\\/g, "\\");
                    t.dpDiv.find("[data-handler]").map(function () {
                        var t = {
                            prev: function () {
                                k.datepicker._adjustDate(i, -e, "M");
                            },
                            next: function () {
                                k.datepicker._adjustDate(i, +e, "M");
                            },
                            hide: function () {
                                k.datepicker._hideDatepicker();
                            },
                            today: function () {
                                k.datepicker._gotoToday(i);
                            },
                            selectDay: function () {
                                return k.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
                            },
                            selectMonth: function () {
                                return k.datepicker._selectMonthYear(i, this, "M"), !1;
                            },
                            selectYear: function () {
                                return k.datepicker._selectMonthYear(i, this, "Y"), !1;
                            },
                        };
                        k(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]);
                    });
                },
                _generateHTML: function (t) {
                    var e,
                        i,
                        s,
                        n,
                        o,
                        r,
                        a,
                        l,
                        h,
                        c,
                        u,
                        d,
                        p,
                        f,
                        m,
                        g,
                        v,
                        y,
                        _,
                        b,
                        w,
                        x,
                        k,
                        C,
                        T,
                        S,
                        D,
                        I,
                        E,
                        A,
                        P,
                        O,
                        M,
                        z,
                        $,
                        H,
                        L,
                        W,
                        N,
                        F = new Date(),
                        R = this._daylightSavingAdjust(new Date(F.getFullYear(), F.getMonth(), F.getDate())),
                        j = this._get(t, "isRTL"),
                        q = this._get(t, "showButtonPanel"),
                        Y = this._get(t, "hideIfNoPrevNext"),
                        B = this._get(t, "navigationAsDateFormat"),
                        U = this._getNumberOfMonths(t),
                        X = this._get(t, "showCurrentAtPos"),
                        V = this._get(t, "stepMonths"),
                        G = 1 !== U[0] || 1 !== U[1],
                        K = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                        Q = this._getMinMaxDate(t, "min"),
                        Z = this._getMinMaxDate(t, "max"),
                        J = t.drawMonth - X,
                        tt = t.drawYear;
                    if ((J < 0 && ((J += 12), tt--), Z))
                        for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - U[0] * U[1] + 1, Z.getDate())), e = Q && e < Q ? Q : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e; ) --J < 0 && ((J = 11), tt--);
                    for (
                        t.drawMonth = J,
                            t.drawYear = tt,
                            i = this._get(t, "prevText"),
                            i = B ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - V, 1)), this._getFormatConfig(t)) : i,
                            s = this._canAdjustMonth(t, -1, tt, J)
                                ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>"
                                : Y
                                ? ""
                                : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + i + "</span></a>",
                            n = this._get(t, "nextText"),
                            n = B ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, J + V, 1)), this._getFormatConfig(t)) : n,
                            o = this._canAdjustMonth(t, 1, tt, J)
                                ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + n + "</span></a>"
                                : Y
                                ? ""
                                : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + n + "</span></a>",
                            r = this._get(t, "currentText"),
                            a = this._get(t, "gotoCurrent") && t.currentDay ? K : R,
                            r = B ? this.formatDate(r, a, this._getFormatConfig(t)) : r,
                            l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>",
                            h = q
                                ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                                  (j ? l : "") +
                                  (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") +
                                  (j ? "" : l) +
                                  "</div>"
                                : "",
                            c = parseInt(this._get(t, "firstDay"), 10),
                            c = isNaN(c) ? 0 : c,
                            u = this._get(t, "showWeek"),
                            d = this._get(t, "dayNames"),
                            p = this._get(t, "dayNamesMin"),
                            f = this._get(t, "monthNames"),
                            m = this._get(t, "monthNamesShort"),
                            g = this._get(t, "beforeShowDay"),
                            v = this._get(t, "showOtherMonths"),
                            y = this._get(t, "selectOtherMonths"),
                            _ = this._getDefaultDate(t),
                            b = "",
                            x = 0;
                        U[0] > x;
                        x++
                    ) {
                        for (k = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
                            if (((T = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay))), (S = " ui-corner-all"), (D = ""), G)) {
                                if (((D += "<div class='ui-datepicker-group"), 1 < U[1]))
                                    switch (C) {
                                        case 0:
                                            (D += " ui-datepicker-group-first"), (S = " ui-corner-" + (j ? "right" : "left"));
                                            break;
                                        case U[1] - 1:
                                            (D += " ui-datepicker-group-last"), (S = " ui-corner-" + (j ? "left" : "right"));
                                            break;
                                        default:
                                            (D += " ui-datepicker-group-middle"), (S = "");
                                    }
                                D += "'>";
                            }
                            for (
                                D +=
                                    "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                                    S +
                                    "'>" +
                                    (/all|left/.test(S) && 0 === x ? (j ? o : s) : "") +
                                    (/all|right/.test(S) && 0 === x ? (j ? s : o) : "") +
                                    this._generateMonthYearHeader(t, J, tt, Q, Z, 0 < x || 0 < C, f, m) +
                                    "</div><table class='ui-datepicker-calendar'><thead><tr>",
                                    I = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "",
                                    w = 0;
                                w < 7;
                                w++
                            )
                                I += "<th scope='col'" + (5 <= (w + c + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[(E = (w + c) % 7)] + "'>" + p[E] + "</span></th>";
                            for (
                                D += I + "</tr></thead><tbody>",
                                    A = this._getDaysInMonth(tt, J),
                                    tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, A)),
                                    P = (this._getFirstDayOfMonth(tt, J) - c + 7) % 7,
                                    O = Math.ceil((P + A) / 7),
                                    M = G && this.maxRows > O ? this.maxRows : O,
                                    this.maxRows = M,
                                    z = this._daylightSavingAdjust(new Date(tt, J, 1 - P)),
                                    $ = 0;
                                $ < M;
                                $++
                            ) {
                                for (D += "<tr>", H = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(z) + "</td>" : "", w = 0; w < 7; w++)
                                    (L = g ? g.apply(t.input ? t.input[0] : null, [z]) : [!0, ""]),
                                        (N = ((W = z.getMonth() !== J) && !y) || !L[0] || (Q && z < Q) || (Z && Z < z)),
                                        (H +=
                                            "<td class='" +
                                            (5 <= (w + c + 6) % 7 ? " ui-datepicker-week-end" : "") +
                                            (W ? " ui-datepicker-other-month" : "") +
                                            ((z.getTime() === T.getTime() && J === t.selectedMonth && t._keyEvent) || (_.getTime() === z.getTime() && _.getTime() === T.getTime()) ? " " + this._dayOverClass : "") +
                                            (N ? " " + this._unselectableClass + " ui-state-disabled" : "") +
                                            (W && !v ? "" : " " + L[1] + (z.getTime() === K.getTime() ? " " + this._currentClass : "") + (z.getTime() === R.getTime() ? " ui-datepicker-today" : "")) +
                                            "'" +
                                            ((W && !v) || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") +
                                            (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") +
                                            ">" +
                                            (W && !v
                                                ? "&#xa0;"
                                                : N
                                                ? "<span class='ui-state-default'>" + z.getDate() + "</span>"
                                                : "<a class='ui-state-default" +
                                                  (z.getTime() === R.getTime() ? " ui-state-highlight" : "") +
                                                  (z.getTime() === K.getTime() ? " ui-state-active" : "") +
                                                  (W ? " ui-priority-secondary" : "") +
                                                  "' href='#'>" +
                                                  z.getDate() +
                                                  "</a>") +
                                            "</td>"),
                                        z.setDate(z.getDate() + 1),
                                        (z = this._daylightSavingAdjust(z));
                                D += H + "</tr>";
                            }
                            11 < ++J && ((J = 0), tt++), (k += D += "</tbody></table>" + (G ? "</div>" + (0 < U[0] && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""));
                        }
                        b += k;
                    }
                    return (b += h), (t._keyEvent = !1), b;
                },
                _generateMonthYearHeader: function (t, e, i, s, n, o, r, a) {
                    var l,
                        h,
                        c,
                        u,
                        d,
                        p,
                        f,
                        m,
                        g = this._get(t, "changeMonth"),
                        v = this._get(t, "changeYear"),
                        y = this._get(t, "showMonthAfterYear"),
                        _ = "<div class='ui-datepicker-title'>",
                        b = "";
                    if (o || !g) b += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
                    else {
                        for (l = s && s.getFullYear() === i, h = n && n.getFullYear() === i, b += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++)
                            (!l || c >= s.getMonth()) && (!h || n.getMonth() >= c) && (b += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + a[c] + "</option>");
                        b += "</select>";
                    }
                    if ((y || (_ += b + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml))
                        if (((t.yearshtml = ""), o || !v)) _ += "<span class='ui-datepicker-year'>" + i + "</span>";
                        else {
                            for (
                                u = this._get(t, "yearRange").split(":"),
                                    d = new Date().getFullYear(),
                                    f = (p = function (t) {
                                        var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                                        return isNaN(e) ? d : e;
                                    })(u[0]),
                                    m = Math.max(f, p(u[1] || "")),
                                    f = s ? Math.max(f, s.getFullYear()) : f,
                                    m = n ? Math.min(m, n.getFullYear()) : m,
                                    t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                                f <= m;
                                f++
                            )
                                t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                            (t.yearshtml += "</select>"), (_ += t.yearshtml), (t.yearshtml = null);
                        }
                    return (_ += this._get(t, "yearSuffix")), y && (_ += (!o && g && v ? "" : "&#xa0;") + b), _ + "</div>";
                },
                _adjustInstDate: function (t, e, i) {
                    var s = t.selectedYear + ("Y" === i ? e : 0),
                        n = t.selectedMonth + ("M" === i ? e : 0),
                        o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                        r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
                    (t.selectedDay = r.getDate()), (t.drawMonth = t.selectedMonth = r.getMonth()), (t.drawYear = t.selectedYear = r.getFullYear()), ("M" !== i && "Y" !== i) || this._notifyChange(t);
                },
                _restrictMinMax: function (t, e) {
                    var i = this._getMinMaxDate(t, "min"),
                        s = this._getMinMaxDate(t, "max"),
                        n = i && e < i ? i : e;
                    return s && s < n ? s : n;
                },
                _notifyChange: function (t) {
                    var e = this._get(t, "onChangeMonthYear");
                    e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]);
                },
                _getNumberOfMonths: function (t) {
                    var e = this._get(t, "numberOfMonths");
                    return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
                },
                _getMinMaxDate: function (t, e) {
                    return this._determineDate(t, this._get(t, e + "Date"), null);
                },
                _getDaysInMonth: function (t, e) {
                    return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
                },
                _getFirstDayOfMonth: function (t, e) {
                    return new Date(t, e, 1).getDay();
                },
                _canAdjustMonth: function (t, e, i, s) {
                    var n = this._getNumberOfMonths(t),
                        o = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1));
                    return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o);
                },
                _isInRange: function (t, e) {
                    var i,
                        s,
                        n = this._getMinMaxDate(t, "min"),
                        o = this._getMinMaxDate(t, "max"),
                        r = null,
                        a = null,
                        l = this._get(t, "yearRange");
                    return (
                        l && ((i = l.split(":")), (s = new Date().getFullYear()), (r = parseInt(i[0], 10)), (a = parseInt(i[1], 10)), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (a += s)),
                        (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || a >= e.getFullYear())
                    );
                },
                _getFormatConfig: function (t) {
                    var e = this._get(t, "shortYearCutoff");
                    return {
                        shortYearCutoff: (e = "string" != typeof e ? e : (new Date().getFullYear() % 100) + parseInt(e, 10)),
                        dayNamesShort: this._get(t, "dayNamesShort"),
                        dayNames: this._get(t, "dayNames"),
                        monthNamesShort: this._get(t, "monthNamesShort"),
                        monthNames: this._get(t, "monthNames"),
                    };
                },
                _formatDate: function (t, e, i, s) {
                    e || ((t.currentDay = t.selectedDay), (t.currentMonth = t.selectedMonth), (t.currentYear = t.selectedYear));
                    var n = e ? ("object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e))) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                    return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t));
                },
            }),
            (k.fn.datepicker = function (t) {
                if (!this.length) return this;
                k.datepicker.initialized || (k(document).on("mousedown", k.datepicker._checkExternalClick), (k.datepicker.initialized = !0)), 0 === k("#" + k.datepicker._mainDivId).length && k("body").append(k.datepicker.dpDiv);
                var e = Array.prototype.slice.call(arguments, 1);
                return ("string" == typeof t && ("isDisabled" === t || "getDate" === t || "widget" === t)) || ("option" === t && 2 === arguments.length && "string" == typeof arguments[1])
                    ? k.datepicker["_" + t + "Datepicker"].apply(k.datepicker, [this[0]].concat(e))
                    : this.each(function () {
                          "string" == typeof t ? k.datepicker["_" + t + "Datepicker"].apply(k.datepicker, [this].concat(e)) : k.datepicker._attachDatepicker(this, t);
                      });
            }),
            (k.datepicker = new t()),
            (k.datepicker.initialized = !1),
            (k.datepicker.uuid = new Date().getTime()),
            (k.datepicker.version = "1.12.1"),
            k.datepicker,
            (k.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
        var nt = !1;
        k(document).on("mouseup", function () {
            nt = !1;
        }),
            k.widget("ui.mouse", {
                version: "1.12.1",
                options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 },
                _mouseInit: function () {
                    var e = this;
                    this.element
                        .on("mousedown." + this.widgetName, function (t) {
                            return e._mouseDown(t);
                        })
                        .on("click." + this.widgetName, function (t) {
                            return !0 === k.data(t.target, e.widgetName + ".preventClickEvent") ? (k.removeData(t.target, e.widgetName + ".preventClickEvent"), t.stopImmediatePropagation(), !1) : void 0;
                        }),
                        (this.started = !1);
                },
                _mouseDestroy: function () {
                    this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
                },
                _mouseDown: function (t) {
                    if (!nt) {
                        (this._mouseMoved = !1), this._mouseStarted && this._mouseUp(t), (this._mouseDownEvent = t);
                        var e = this,
                            i = 1 === t.which,
                            s = !("string" != typeof this.options.cancel || !t.target.nodeName) && k(t.target).closest(this.options.cancel).length;
                        return (
                            i &&
                                !s &&
                                this._mouseCapture(t) &&
                                ((this.mouseDelayMet = !this.options.delay),
                                this.mouseDelayMet ||
                                    (this._mouseDelayTimer = setTimeout(function () {
                                        e.mouseDelayMet = !0;
                                    }, this.options.delay)),
                                this._mouseDistanceMet(t) && this._mouseDelayMet(t) && ((this._mouseStarted = !1 !== this._mouseStart(t)), !this._mouseStarted)
                                    ? t.preventDefault()
                                    : (!0 === k.data(t.target, this.widgetName + ".preventClickEvent") && k.removeData(t.target, this.widgetName + ".preventClickEvent"),
                                      (this._mouseMoveDelegate = function (t) {
                                          return e._mouseMove(t);
                                      }),
                                      (this._mouseUpDelegate = function (t) {
                                          return e._mouseUp(t);
                                      }),
                                      this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                                      t.preventDefault(),
                                      (nt = !0))),
                            !0
                        );
                    }
                },
                _mouseMove: function (t) {
                    if (this._mouseMoved) {
                        if (k.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                        if (!t.which)
                            if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                            else if (!this.ignoreMissingWhich) return this._mouseUp(t);
                    }
                    return (
                        (t.which || t.button) && (this._mouseMoved = !0),
                        this._mouseStarted
                            ? (this._mouseDrag(t), t.preventDefault())
                            : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t)), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
                              !this._mouseStarted)
                    );
                },
                _mouseUp: function (t) {
                    this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
                        this._mouseStarted && ((this._mouseStarted = !1), t.target === this._mouseDownEvent.target && k.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)),
                        this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
                        (this.ignoreMissingWhich = !1),
                        (nt = !1),
                        t.preventDefault();
                },
                _mouseDistanceMet: function (t) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
                },
                _mouseDelayMet: function () {
                    return this.mouseDelayMet;
                },
                _mouseStart: function () {},
                _mouseDrag: function () {},
                _mouseStop: function () {},
                _mouseCapture: function () {
                    return !0;
                },
            }),
            (k.ui.plugin = {
                add: function (t, e, i) {
                    var s,
                        n = k.ui[t].prototype;
                    for (s in i) (n.plugins[s] = n.plugins[s] || []), n.plugins[s].push([e, i[s]]);
                },
                call: function (t, e, i, s) {
                    var n,
                        o = t.plugins[e];
                    if (o && (s || (t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))) for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i);
                },
            }),
            (k.ui.safeBlur = function (t) {
                t && "body" !== t.nodeName.toLowerCase() && k(t).trigger("blur");
            }),
            k.widget("ui.draggable", k.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "drag",
                options: {
                    addClasses: !0,
                    appendTo: "parent",
                    axis: !1,
                    connectToSortable: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    iframeFix: !1,
                    opacity: !1,
                    refreshPositions: !1,
                    revert: !1,
                    revertDuration: 500,
                    scope: "default",
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    snap: !1,
                    snapMode: "both",
                    snapTolerance: 20,
                    stack: !1,
                    zIndex: !1,
                    drag: null,
                    start: null,
                    stop: null,
                },
                _create: function () {
                    "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit();
                },
                _setOption: function (t, e) {
                    this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName());
                },
                _destroy: function () {
                    return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy());
                },
                _mouseCapture: function (t) {
                    var e = this.options;
                    return (
                        !(this.helper || e.disabled || 0 < k(t.target).closest(".ui-resizable-handle").length) &&
                        ((this.handle = this._getHandle(t)), !!this.handle && (this._blurActiveElement(t), this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix), !0))
                    );
                },
                _blockFrames: function (t) {
                    this.iframeBlocks = this.document.find(t).map(function () {
                        var t = k(this);
                        return k("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0];
                    });
                },
                _unblockFrames: function () {
                    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
                },
                _blurActiveElement: function (t) {
                    var e = k.ui.safeActiveElement(this.document[0]);
                    k(t.target).closest(e).length || k.ui.safeBlur(e);
                },
                _mouseStart: function (t) {
                    var e = this.options;
                    return (
                        (this.helper = this._createHelper(t)),
                        this._addClass(this.helper, "ui-draggable-dragging"),
                        this._cacheHelperProportions(),
                        k.ui.ddmanager && (k.ui.ddmanager.current = this),
                        this._cacheMargins(),
                        (this.cssPosition = this.helper.css("position")),
                        (this.scrollParent = this.helper.scrollParent(!0)),
                        (this.offsetParent = this.helper.offsetParent()),
                        (this.hasFixedAncestor =
                            0 <
                            this.helper.parents().filter(function () {
                                return "fixed" === k(this).css("position");
                            }).length),
                        (this.positionAbs = this.element.offset()),
                        this._refreshOffsets(t),
                        (this.originalPosition = this.position = this._generatePosition(t, !1)),
                        (this.originalPageX = t.pageX),
                        (this.originalPageY = t.pageY),
                        e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt),
                        this._setContainment(),
                        !1 === this._trigger("start", t)
                            ? (this._clear(), !1)
                            : (this._cacheHelperProportions(), k.ui.ddmanager && !e.dropBehaviour && k.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), k.ui.ddmanager && k.ui.ddmanager.dragStart(this, t), !0)
                    );
                },
                _refreshOffsets: function (t) {
                    (this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }),
                        (this.offset.click = { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top });
                },
                _mouseDrag: function (t, e) {
                    if ((this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), (this.position = this._generatePosition(t, !0)), (this.positionAbs = this._convertPositionTo("absolute")), !e)) {
                        var i = this._uiHash();
                        if (!1 === this._trigger("drag", t, i)) return this._mouseUp(new k.Event("mouseup", t)), !1;
                        this.position = i.position;
                    }
                    return (this.helper[0].style.left = this.position.left + "px"), (this.helper[0].style.top = this.position.top + "px"), k.ui.ddmanager && k.ui.ddmanager.drag(this, t), !1;
                },
                _mouseStop: function (t) {
                    var e = this,
                        i = !1;
                    return (
                        k.ui.ddmanager && !this.options.dropBehaviour && (i = k.ui.ddmanager.drop(this, t)),
                        this.dropped && ((i = this.dropped), (this.dropped = !1)),
                        ("invalid" === this.options.revert && !i) || ("valid" === this.options.revert && i) || !0 === this.options.revert || (k.isFunction(this.options.revert) && this.options.revert.call(this.element, i))
                            ? k(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                                  !1 !== e._trigger("stop", t) && e._clear();
                              })
                            : !1 !== this._trigger("stop", t) && this._clear(),
                        !1
                    );
                },
                _mouseUp: function (t) {
                    return this._unblockFrames(), k.ui.ddmanager && k.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.trigger("focus"), k.ui.mouse.prototype._mouseUp.call(this, t);
                },
                cancel: function () {
                    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new k.Event("mouseup", { target: this.element[0] })) : this._clear(), this;
                },
                _getHandle: function (t) {
                    return !this.options.handle || !!k(t.target).closest(this.element.find(this.options.handle)).length;
                },
                _setHandleClassName: function () {
                    (this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element), this._addClass(this.handleElement, "ui-draggable-handle");
                },
                _removeHandleClassName: function () {
                    this._removeClass(this.handleElement, "ui-draggable-handle");
                },
                _createHelper: function (t) {
                    var e = this.options,
                        i = k.isFunction(e.helper),
                        s = i ? k(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
                    return (
                        s.parents("body").length || s.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo),
                        i && s[0] === this.element[0] && this._setPositionRelative(),
                        s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"),
                        s
                    );
                },
                _setPositionRelative: function () {
                    /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
                },
                _adjustOffsetFromHelper: function (t) {
                    "string" == typeof t && (t = t.split(" ")),
                        k.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
                        "left" in t && (this.offset.click.left = t.left + this.margins.left),
                        "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
                        "top" in t && (this.offset.click.top = t.top + this.margins.top),
                        "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
                },
                _isRootNode: function (t) {
                    return /(html|body)/i.test(t.tagName) || t === this.document[0];
                },
                _getParentOffset: function () {
                    var t = this.offsetParent.offset(),
                        e = this.document[0];
                    return (
                        "absolute" === this.cssPosition && this.scrollParent[0] !== e && k.contains(this.scrollParent[0], this.offsetParent[0]) && ((t.left += this.scrollParent.scrollLeft()), (t.top += this.scrollParent.scrollTop())),
                        this._isRootNode(this.offsetParent[0]) && (t = { top: 0, left: 0 }),
                        { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
                    );
                },
                _getRelativeOffset: function () {
                    if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
                    var t = this.element.position(),
                        e = this._isRootNode(this.scrollParent[0]);
                    return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft()) };
                },
                _cacheMargins: function () {
                    this.margins = {
                        left: parseInt(this.element.css("marginLeft"), 10) || 0,
                        top: parseInt(this.element.css("marginTop"), 10) || 0,
                        right: parseInt(this.element.css("marginRight"), 10) || 0,
                        bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
                    };
                },
                _cacheHelperProportions: function () {
                    this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
                },
                _setContainment: function () {
                    var t,
                        e,
                        i,
                        s = this.options,
                        n = this.document[0];
                    return (
                        (this.relativeContainer = null),
                        s.containment
                            ? "window" === s.containment
                                ? void (this.containment = [
                                      k(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                                      k(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                                      k(window).scrollLeft() + k(window).width() - this.helperProportions.width - this.margins.left,
                                      k(window).scrollTop() + (k(window).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top,
                                  ])
                                : "document" === s.containment
                                ? void (this.containment = [0, 0, k(n).width() - this.helperProportions.width - this.margins.left, (k(n).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top])
                                : s.containment.constructor === Array
                                ? void (this.containment = s.containment)
                                : ("parent" === s.containment && (s.containment = this.helper[0].parentNode),
                                  void (
                                      (i = (e = k(s.containment))[0]) &&
                                      ((t = /(scroll|auto)/.test(e.css("overflow"))),
                                      (this.containment = [
                                          (parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0),
                                          (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0),
                                          (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) -
                                              (parseInt(e.css("borderRightWidth"), 10) || 0) -
                                              (parseInt(e.css("paddingRight"), 10) || 0) -
                                              this.helperProportions.width -
                                              this.margins.left -
                                              this.margins.right,
                                          (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) -
                                              (parseInt(e.css("borderBottomWidth"), 10) || 0) -
                                              (parseInt(e.css("paddingBottom"), 10) || 0) -
                                              this.helperProportions.height -
                                              this.margins.top -
                                              this.margins.bottom,
                                      ]),
                                      (this.relativeContainer = e))
                                  ))
                            : void (this.containment = null)
                    );
                },
                _convertPositionTo: function (t, e) {
                    e = e || this.position;
                    var i = "absolute" === t ? 1 : -1,
                        s = this._isRootNode(this.scrollParent[0]);
                    return {
                        top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                        left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i,
                    };
                },
                _generatePosition: function (t, e) {
                    var i,
                        s,
                        n,
                        o,
                        r = this.options,
                        a = this._isRootNode(this.scrollParent[0]),
                        l = t.pageX,
                        h = t.pageY;
                    return (
                        (a && this.offset.scroll) || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }),
                        e &&
                            (this.containment &&
                                ((i = this.relativeContainer
                                    ? ((s = this.relativeContainer.offset()), [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top])
                                    : this.containment),
                                t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left),
                                t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top),
                                t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left),
                                t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)),
                            r.grid &&
                                ((n = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY),
                                (h = !i || n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - r.grid[1] : n + r.grid[1]),
                                (o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX),
                                (l = !i || o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0])),
                            "y" === r.axis && (l = this.originalPageX),
                            "x" === r.axis && (h = this.originalPageY)),
                        {
                            top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                            left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left),
                        }
                    );
                },
                _clear: function () {
                    this._removeClass(this.helper, "ui-draggable-dragging"),
                        this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
                        (this.helper = null),
                        (this.cancelHelperRemoval = !1),
                        this.destroyOnClear && this.destroy();
                },
                _trigger: function (t, e, i) {
                    return (
                        (i = i || this._uiHash()),
                        k.ui.plugin.call(this, t, [e, i, this], !0),
                        /^(drag|start|stop)/.test(t) && ((this.positionAbs = this._convertPositionTo("absolute")), (i.offset = this.positionAbs)),
                        k.Widget.prototype._trigger.call(this, t, e, i)
                    );
                },
                plugins: {},
                _uiHash: function () {
                    return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs };
                },
            }),
            k.ui.plugin.add("draggable", "connectToSortable", {
                start: function (e, t, i) {
                    var s = k.extend({}, t, { item: i.element });
                    (i.sortables = []),
                        k(i.options.connectToSortable).each(function () {
                            var t = k(this).sortable("instance");
                            t && !t.options.disabled && (i.sortables.push(t), t.refreshPositions(), t._trigger("activate", e, s));
                        });
                },
                stop: function (e, t, i) {
                    var s = k.extend({}, t, { item: i.element });
                    (i.cancelHelperRemoval = !1),
                        k.each(i.sortables, function () {
                            var t = this;
                            t.isOver
                                ? ((t.isOver = 0),
                                  (i.cancelHelperRemoval = !0),
                                  (t.cancelHelperRemoval = !1),
                                  (t._storedCSS = { position: t.placeholder.css("position"), top: t.placeholder.css("top"), left: t.placeholder.css("left") }),
                                  t._mouseStop(e),
                                  (t.options.helper = t.options._helper))
                                : ((t.cancelHelperRemoval = !0), t._trigger("deactivate", e, s));
                        });
                },
                drag: function (i, s, n) {
                    k.each(n.sortables, function () {
                        var t = !1,
                            e = this;
                        (e.positionAbs = n.positionAbs),
                            (e.helperProportions = n.helperProportions),
                            (e.offset.click = n.offset.click),
                            e._intersectsWith(e.containerCache) &&
                                ((t = !0),
                                k.each(n.sortables, function () {
                                    return (
                                        (this.positionAbs = n.positionAbs),
                                        (this.helperProportions = n.helperProportions),
                                        (this.offset.click = n.offset.click),
                                        this !== e && this._intersectsWith(this.containerCache) && k.contains(e.element[0], this.element[0]) && (t = !1),
                                        t
                                    );
                                })),
                            t
                                ? (e.isOver ||
                                      ((e.isOver = 1),
                                      (n._parent = s.helper.parent()),
                                      (e.currentItem = s.helper.appendTo(e.element).data("ui-sortable-item", !0)),
                                      (e.options._helper = e.options.helper),
                                      (e.options.helper = function () {
                                          return s.helper[0];
                                      }),
                                      (i.target = e.currentItem[0]),
                                      e._mouseCapture(i, !0),
                                      e._mouseStart(i, !0, !0),
                                      (e.offset.click.top = n.offset.click.top),
                                      (e.offset.click.left = n.offset.click.left),
                                      (e.offset.parent.left -= n.offset.parent.left - e.offset.parent.left),
                                      (e.offset.parent.top -= n.offset.parent.top - e.offset.parent.top),
                                      n._trigger("toSortable", i),
                                      (n.dropped = e.element),
                                      k.each(n.sortables, function () {
                                          this.refreshPositions();
                                      }),
                                      (n.currentItem = n.element),
                                      (e.fromOutside = n)),
                                  e.currentItem && (e._mouseDrag(i), (s.position = e.position)))
                                : e.isOver &&
                                  ((e.isOver = 0),
                                  (e.cancelHelperRemoval = !0),
                                  (e.options._revert = e.options.revert),
                                  (e.options.revert = !1),
                                  e._trigger("out", i, e._uiHash(e)),
                                  e._mouseStop(i, !0),
                                  (e.options.revert = e.options._revert),
                                  (e.options.helper = e.options._helper),
                                  e.placeholder && e.placeholder.remove(),
                                  s.helper.appendTo(n._parent),
                                  n._refreshOffsets(i),
                                  (s.position = n._generatePosition(i, !0)),
                                  n._trigger("fromSortable", i),
                                  (n.dropped = !1),
                                  k.each(n.sortables, function () {
                                      this.refreshPositions();
                                  }));
                    });
                },
            }),
            k.ui.plugin.add("draggable", "cursor", {
                start: function (t, e, i) {
                    var s = k("body"),
                        n = i.options;
                    s.css("cursor") && (n._cursor = s.css("cursor")), s.css("cursor", n.cursor);
                },
                stop: function (t, e, i) {
                    var s = i.options;
                    s._cursor && k("body").css("cursor", s._cursor);
                },
            }),
            k.ui.plugin.add("draggable", "opacity", {
                start: function (t, e, i) {
                    var s = k(e.helper),
                        n = i.options;
                    s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity);
                },
                stop: function (t, e, i) {
                    var s = i.options;
                    s._opacity && k(e.helper).css("opacity", s._opacity);
                },
            }),
            k.ui.plugin.add("draggable", "scroll", {
                start: function (t, e, i) {
                    i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
                        i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
                },
                drag: function (t, e, i) {
                    var s = i.options,
                        n = !1,
                        o = i.scrollParentNotHidden[0],
                        r = i.document[0];
                    o !== r && "HTML" !== o.tagName
                        ? ((s.axis && "x" === s.axis) ||
                              (i.overflowOffset.top + o.offsetHeight - t.pageY < s.scrollSensitivity
                                  ? (o.scrollTop = n = o.scrollTop + s.scrollSpeed)
                                  : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (o.scrollTop = n = o.scrollTop - s.scrollSpeed)),
                          (s.axis && "y" === s.axis) ||
                              (i.overflowOffset.left + o.offsetWidth - t.pageX < s.scrollSensitivity
                                  ? (o.scrollLeft = n = o.scrollLeft + s.scrollSpeed)
                                  : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (o.scrollLeft = n = o.scrollLeft - s.scrollSpeed)))
                        : ((s.axis && "x" === s.axis) ||
                              (t.pageY - k(r).scrollTop() < s.scrollSensitivity
                                  ? (n = k(r).scrollTop(k(r).scrollTop() - s.scrollSpeed))
                                  : k(window).height() - (t.pageY - k(r).scrollTop()) < s.scrollSensitivity && (n = k(r).scrollTop(k(r).scrollTop() + s.scrollSpeed))),
                          (s.axis && "y" === s.axis) ||
                              (t.pageX - k(r).scrollLeft() < s.scrollSensitivity
                                  ? (n = k(r).scrollLeft(k(r).scrollLeft() - s.scrollSpeed))
                                  : k(window).width() - (t.pageX - k(r).scrollLeft()) < s.scrollSensitivity && (n = k(r).scrollLeft(k(r).scrollLeft() + s.scrollSpeed)))),
                        !1 !== n && k.ui.ddmanager && !s.dropBehaviour && k.ui.ddmanager.prepareOffsets(i, t);
                },
            }),
            k.ui.plugin.add("draggable", "snap", {
                start: function (t, e, i) {
                    var s = i.options;
                    (i.snapElements = []),
                        k(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function () {
                            var t = k(this),
                                e = t.offset();
                            this !== i.element[0] && i.snapElements.push({ item: this, width: t.outerWidth(), height: t.outerHeight(), top: e.top, left: e.left });
                        });
                },
                drag: function (t, e, i) {
                    for (
                        var s, n, o, r, a, l, h, c, u, d = i.options, p = d.snapTolerance, f = e.offset.left, m = f + i.helperProportions.width, g = e.offset.top, v = g + i.helperProportions.height, y = i.snapElements.length - 1;
                        0 <= y;
                        y--
                    )
                        (l = (a = i.snapElements[y].left - i.margins.left) + i.snapElements[y].width),
                            (c = (h = i.snapElements[y].top - i.margins.top) + i.snapElements[y].height),
                            m < a - p || l + p < f || v < h - p || c + p < g || !k.contains(i.snapElements[y].item.ownerDocument, i.snapElements[y].item)
                                ? (i.snapElements[y].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, k.extend(i._uiHash(), { snapItem: i.snapElements[y].item })), (i.snapElements[y].snapping = !1))
                                : ("inner" !== d.snapMode &&
                                      ((s = p >= Math.abs(h - v)),
                                      (n = p >= Math.abs(c - g)),
                                      (o = p >= Math.abs(a - m)),
                                      (r = p >= Math.abs(l - f)),
                                      s && (e.position.top = i._convertPositionTo("relative", { top: h - i.helperProportions.height, left: 0 }).top),
                                      n && (e.position.top = i._convertPositionTo("relative", { top: c, left: 0 }).top),
                                      o && (e.position.left = i._convertPositionTo("relative", { top: 0, left: a - i.helperProportions.width }).left),
                                      r && (e.position.left = i._convertPositionTo("relative", { top: 0, left: l }).left)),
                                  (u = s || n || o || r),
                                  "outer" !== d.snapMode &&
                                      ((s = p >= Math.abs(h - g)),
                                      (n = p >= Math.abs(c - v)),
                                      (o = p >= Math.abs(a - f)),
                                      (r = p >= Math.abs(l - m)),
                                      s && (e.position.top = i._convertPositionTo("relative", { top: h, left: 0 }).top),
                                      n && (e.position.top = i._convertPositionTo("relative", { top: c - i.helperProportions.height, left: 0 }).top),
                                      o && (e.position.left = i._convertPositionTo("relative", { top: 0, left: a }).left),
                                      r && (e.position.left = i._convertPositionTo("relative", { top: 0, left: l - i.helperProportions.width }).left)),
                                  !i.snapElements[y].snapping && (s || n || o || r || u) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, k.extend(i._uiHash(), { snapItem: i.snapElements[y].item })),
                                  (i.snapElements[y].snapping = s || n || o || r || u));
                },
            }),
            k.ui.plugin.add("draggable", "stack", {
                start: function (t, e, i) {
                    var s,
                        n = i.options,
                        o = k.makeArray(k(n.stack)).sort(function (t, e) {
                            return (parseInt(k(t).css("zIndex"), 10) || 0) - (parseInt(k(e).css("zIndex"), 10) || 0);
                        });
                    o.length &&
                        ((s = parseInt(k(o[0]).css("zIndex"), 10) || 0),
                        k(o).each(function (t) {
                            k(this).css("zIndex", s + t);
                        }),
                        this.css("zIndex", s + o.length));
                },
            }),
            k.ui.plugin.add("draggable", "zIndex", {
                start: function (t, e, i) {
                    var s = k(e.helper),
                        n = i.options;
                    s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex);
                },
                stop: function (t, e, i) {
                    var s = i.options;
                    s._zIndex && k(e.helper).css("zIndex", s._zIndex);
                },
            }),
            k.ui.draggable,
            k.widget("ui.resizable", k.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "resize",
                options: {
                    alsoResize: !1,
                    animate: !1,
                    animateDuration: "slow",
                    animateEasing: "swing",
                    aspectRatio: !1,
                    autoHide: !1,
                    classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" },
                    containment: !1,
                    ghost: !1,
                    grid: !1,
                    handles: "e,s,se",
                    helper: !1,
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 10,
                    minWidth: 10,
                    zIndex: 90,
                    resize: null,
                    start: null,
                    stop: null,
                },
                _num: function (t) {
                    return parseFloat(t) || 0;
                },
                _isNumber: function (t) {
                    return !isNaN(parseFloat(t));
                },
                _hasScroll: function (t, e) {
                    if ("hidden" === k(t).css("overflow")) return !1;
                    var i,
                        s = e && "left" === e ? "scrollLeft" : "scrollTop";
                    return 0 < t[s] || ((t[s] = 1), (i = 0 < t[s]), (t[s] = 0), i);
                },
                _create: function () {
                    var t,
                        e = this.options,
                        i = this;
                    this._addClass("ui-resizable"),
                        k.extend(this, {
                            _aspectRatio: !!e.aspectRatio,
                            aspectRatio: e.aspectRatio,
                            originalElement: this.element,
                            _proportionallyResizeElements: [],
                            _helper: e.helper || e.ghost || e.animate ? e.helper || "ui-resizable-helper" : null,
                        }),
                        this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) &&
                            (this.element.wrap(
                                k("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                                    position: this.element.css("position"),
                                    width: this.element.outerWidth(),
                                    height: this.element.outerHeight(),
                                    top: this.element.css("top"),
                                    left: this.element.css("left"),
                                })
                            ),
                            (this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance"))),
                            (this.elementIsWrapper = !0),
                            (t = {
                                marginTop: this.originalElement.css("marginTop"),
                                marginRight: this.originalElement.css("marginRight"),
                                marginBottom: this.originalElement.css("marginBottom"),
                                marginLeft: this.originalElement.css("marginLeft"),
                            }),
                            this.element.css(t),
                            this.originalElement.css("margin", 0),
                            (this.originalResizeStyle = this.originalElement.css("resize")),
                            this.originalElement.css("resize", "none"),
                            this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })),
                            this.originalElement.css(t),
                            this._proportionallyResize()),
                        this._setupHandles(),
                        e.autoHide &&
                            k(this.element)
                                .on("mouseenter", function () {
                                    e.disabled || (i._removeClass("ui-resizable-autohide"), i._handles.show());
                                })
                                .on("mouseleave", function () {
                                    e.disabled || i.resizing || (i._addClass("ui-resizable-autohide"), i._handles.hide());
                                }),
                        this._mouseInit();
                },
                _destroy: function () {
                    this._mouseDestroy();
                    function t(t) {
                        k(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();
                    }
                    var e;
                    return (
                        this.elementIsWrapper &&
                            (t(this.element), (e = this.element), this.originalElement.css({ position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left") }).insertAfter(e), e.remove()),
                        this.originalElement.css("resize", this.originalResizeStyle),
                        t(this.originalElement),
                        this
                    );
                },
                _setOption: function (t, e) {
                    "handles" === (this._super(t, e), t) && (this._removeHandles(), this._setupHandles());
                },
                _setupHandles: function () {
                    var t,
                        e,
                        i,
                        s,
                        n,
                        o = this.options,
                        r = this;
                    if (
                        ((this.handles =
                            o.handles ||
                            (k(".ui-resizable-handle", this.element).length
                                ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" }
                                : "e,s,se")),
                        (this._handles = k()),
                        this.handles.constructor === String)
                    )
                        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), i = this.handles.split(","), this.handles = {}, e = 0; i.length > e; e++)
                            (s = "ui-resizable-" + (t = k.trim(i[e]))), (n = k("<div>")), this._addClass(n, "ui-resizable-handle " + s), n.css({ zIndex: o.zIndex }), (this.handles[t] = ".ui-resizable-" + t), this.element.append(n);
                    (this._renderAxis = function (t) {
                        var e, i, s, n;
                        for (e in ((t = t || this.element), this.handles))
                            this.handles[e].constructor === String
                                ? (this.handles[e] = this.element.children(this.handles[e]).first().show())
                                : (this.handles[e].jquery || this.handles[e].nodeType) && ((this.handles[e] = k(this.handles[e])), this._on(this.handles[e], { mousedown: r._mouseDown })),
                                this.elementIsWrapper &&
                                    this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) &&
                                    ((i = k(this.handles[e], this.element)),
                                    (n = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth()),
                                    (s = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join("")),
                                    t.css(s, n),
                                    this._proportionallyResize()),
                                (this._handles = this._handles.add(this.handles[e]));
                    }),
                        this._renderAxis(this.element),
                        (this._handles = this._handles.add(this.element.find(".ui-resizable-handle"))),
                        this._handles.disableSelection(),
                        this._handles.on("mouseover", function () {
                            r.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), (r.axis = n && n[1] ? n[1] : "se"));
                        }),
                        o.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
                },
                _removeHandles: function () {
                    this._handles.remove();
                },
                _mouseCapture: function (t) {
                    var e,
                        i,
                        s = !1;
                    for (e in this.handles) ((i = k(this.handles[e])[0]) !== t.target && !k.contains(i, t.target)) || (s = !0);
                    return !this.options.disabled && s;
                },
                _mouseStart: function (t) {
                    var e,
                        i,
                        s,
                        n = this.options,
                        o = this.element;
                    return (
                        (this.resizing = !0),
                        this._renderProxy(),
                        (e = this._num(this.helper.css("left"))),
                        (i = this._num(this.helper.css("top"))),
                        n.containment && ((e += k(n.containment).scrollLeft() || 0), (i += k(n.containment).scrollTop() || 0)),
                        (this.offset = this.helper.offset()),
                        (this.position = { left: e, top: i }),
                        (this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: o.width(), height: o.height() }),
                        (this.originalSize = this._helper ? { width: o.outerWidth(), height: o.outerHeight() } : { width: o.width(), height: o.height() }),
                        (this.sizeDiff = { width: o.outerWidth() - o.width(), height: o.outerHeight() - o.height() }),
                        (this.originalPosition = { left: e, top: i }),
                        (this.originalMousePosition = { left: t.pageX, top: t.pageY }),
                        (this.aspectRatio = "number" == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1),
                        (s = k(".ui-resizable-" + this.axis).css("cursor")),
                        k("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
                        this._addClass("ui-resizable-resizing"),
                        this._propagate("start", t),
                        !0
                    );
                },
                _mouseDrag: function (t) {
                    var e,
                        i,
                        s = this.originalMousePosition,
                        n = this.axis,
                        o = t.pageX - s.left || 0,
                        r = t.pageY - s.top || 0,
                        a = this._change[n];
                    return (
                        this._updatePrevProperties(),
                        a &&
                            ((e = a.apply(this, [t, o, r])),
                            this._updateVirtualBoundaries(t.shiftKey),
                            (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)),
                            (e = this._respectSize(e, t)),
                            this._updateCache(e),
                            this._propagate("resize", t),
                            (i = this._applyChanges()),
                            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
                            k.isEmptyObject(i) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges())),
                        !1
                    );
                },
                _mouseStop: function (t) {
                    this.resizing = !1;
                    var e,
                        i,
                        s,
                        n,
                        o,
                        r,
                        a,
                        l = this.options,
                        h = this;
                    return (
                        this._helper &&
                            ((s = (i = (e = this._proportionallyResizeElements).length && /textarea/i.test(e[0].nodeName)) && this._hasScroll(e[0], "left") ? 0 : h.sizeDiff.height),
                            (n = i ? 0 : h.sizeDiff.width),
                            (o = { width: h.helper.width() - n, height: h.helper.height() - s }),
                            (r = parseFloat(h.element.css("left")) + (h.position.left - h.originalPosition.left) || null),
                            (a = parseFloat(h.element.css("top")) + (h.position.top - h.originalPosition.top) || null),
                            l.animate || this.element.css(k.extend(o, { top: a, left: r })),
                            h.helper.height(h.size.height),
                            h.helper.width(h.size.width),
                            this._helper && !l.animate && this._proportionallyResize()),
                        k("body").css("cursor", "auto"),
                        this._removeClass("ui-resizable-resizing"),
                        this._propagate("stop", t),
                        this._helper && this.helper.remove(),
                        !1
                    );
                },
                _updatePrevProperties: function () {
                    (this.prevPosition = { top: this.position.top, left: this.position.left }), (this.prevSize = { width: this.size.width, height: this.size.height });
                },
                _applyChanges: function () {
                    var t = {};
                    return (
                        this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"),
                        this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"),
                        this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"),
                        this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"),
                        this.helper.css(t),
                        t
                    );
                },
                _updateVirtualBoundaries: function (t) {
                    var e,
                        i,
                        s,
                        n,
                        o = this.options,
                        r = {
                            minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                            maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
                            minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                            maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0,
                        };
                    (this._aspectRatio || t) &&
                        ((e = r.minHeight * this.aspectRatio),
                        (s = r.minWidth / this.aspectRatio),
                        (i = r.maxHeight * this.aspectRatio),
                        (n = r.maxWidth / this.aspectRatio),
                        e > r.minWidth && (r.minWidth = e),
                        s > r.minHeight && (r.minHeight = s),
                        r.maxWidth > i && (r.maxWidth = i),
                        r.maxHeight > n && (r.maxHeight = n)),
                        (this._vBoundaries = r);
                },
                _updateCache: function (t) {
                    (this.offset = this.helper.offset()),
                        this._isNumber(t.left) && (this.position.left = t.left),
                        this._isNumber(t.top) && (this.position.top = t.top),
                        this._isNumber(t.height) && (this.size.height = t.height),
                        this._isNumber(t.width) && (this.size.width = t.width);
                },
                _updateRatio: function (t) {
                    var e = this.position,
                        i = this.size,
                        s = this.axis;
                    return (
                        this._isNumber(t.height) ? (t.width = t.height * this.aspectRatio) : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
                        "sw" === s && ((t.left = e.left + (i.width - t.width)), (t.top = null)),
                        "nw" === s && ((t.top = e.top + (i.height - t.height)), (t.left = e.left + (i.width - t.width))),
                        t
                    );
                },
                _respectSize: function (t) {
                    var e = this._vBoundaries,
                        i = this.axis,
                        s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                        n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                        o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                        r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                        a = this.originalPosition.left + this.originalSize.width,
                        l = this.originalPosition.top + this.originalSize.height,
                        h = /sw|nw|w/.test(i),
                        c = /nw|ne|n/.test(i);
                    return (
                        o && (t.width = e.minWidth),
                        r && (t.height = e.minHeight),
                        s && (t.width = e.maxWidth),
                        n && (t.height = e.maxHeight),
                        o && h && (t.left = a - e.minWidth),
                        s && h && (t.left = a - e.maxWidth),
                        r && c && (t.top = l - e.minHeight),
                        n && c && (t.top = l - e.maxHeight),
                        t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : (t.top = null),
                        t
                    );
                },
                _getPaddingPlusBorderDimensions: function (t) {
                    for (
                        var e = 0,
                            i = [],
                            s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")],
                            n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")];
                        e < 4;
                        e++
                    )
                        (i[e] = parseFloat(s[e]) || 0), (i[e] += parseFloat(n[e]) || 0);
                    return { height: i[0] + i[2], width: i[1] + i[3] };
                },
                _proportionallyResize: function () {
                    if (this._proportionallyResizeElements.length)
                        for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++)
                            (t = this._proportionallyResizeElements[e]),
                                this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
                                t.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 });
                },
                _renderProxy: function () {
                    var t = this.element,
                        e = this.options;
                    (this.elementOffset = t.offset()),
                        this._helper
                            ? ((this.helper = this.helper || k("<div style='overflow:hidden;'></div>")),
                              this._addClass(this.helper, this._helper),
                              this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++e.zIndex }),
                              this.helper.appendTo("body").disableSelection())
                            : (this.helper = this.element);
                },
                _change: {
                    e: function (t, e) {
                        return { width: this.originalSize.width + e };
                    },
                    w: function (t, e) {
                        var i = this.originalSize;
                        return { left: this.originalPosition.left + e, width: i.width - e };
                    },
                    n: function (t, e, i) {
                        var s = this.originalSize;
                        return { top: this.originalPosition.top + i, height: s.height - i };
                    },
                    s: function (t, e, i) {
                        return { height: this.originalSize.height + i };
                    },
                    se: function (t, e, i) {
                        return k.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]));
                    },
                    sw: function (t, e, i) {
                        return k.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]));
                    },
                    ne: function (t, e, i) {
                        return k.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]));
                    },
                    nw: function (t, e, i) {
                        return k.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]));
                    },
                },
                _propagate: function (t, e) {
                    k.ui.plugin.call(this, t, [e, this.ui()]), "resize" !== t && this._trigger(t, e, this.ui());
                },
                plugins: {},
                ui: function () {
                    return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition };
                },
            }),
            k.ui.plugin.add("resizable", "animate", {
                stop: function (e) {
                    var i = k(this).resizable("instance"),
                        t = i.options,
                        s = i._proportionallyResizeElements,
                        n = s.length && /textarea/i.test(s[0].nodeName),
                        o = n && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                        r = n ? 0 : i.sizeDiff.width,
                        a = { width: i.size.width - r, height: i.size.height - o },
                        l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                        h = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                    i.element.animate(k.extend(a, h && l ? { top: h, left: l } : {}), {
                        duration: t.animateDuration,
                        easing: t.animateEasing,
                        step: function () {
                            var t = { width: parseFloat(i.element.css("width")), height: parseFloat(i.element.css("height")), top: parseFloat(i.element.css("top")), left: parseFloat(i.element.css("left")) };
                            s && s.length && k(s[0]).css({ width: t.width, height: t.height }), i._updateCache(t), i._propagate("resize", e);
                        },
                    });
                },
            }),
            k.ui.plugin.add("resizable", "containment", {
                start: function () {
                    var i,
                        s,
                        t,
                        e,
                        n,
                        o,
                        r,
                        a = k(this).resizable("instance"),
                        l = a.options,
                        h = a.element,
                        c = l.containment,
                        u = c instanceof k ? c.get(0) : /parent/.test(c) ? h.parent().get(0) : c;
                    u &&
                        ((a.containerElement = k(u)),
                        /document/.test(c) || c === document
                            ? ((a.containerOffset = { left: 0, top: 0 }),
                              (a.containerPosition = { left: 0, top: 0 }),
                              (a.parentData = { element: k(document), left: 0, top: 0, width: k(document).width(), height: k(document).height() || document.body.parentNode.scrollHeight }))
                            : ((i = k(u)),
                              (s = []),
                              k(["Top", "Right", "Left", "Bottom"]).each(function (t, e) {
                                  s[t] = a._num(i.css("padding" + e));
                              }),
                              (a.containerOffset = i.offset()),
                              (a.containerPosition = i.position()),
                              (a.containerSize = { height: i.innerHeight() - s[3], width: i.innerWidth() - s[1] }),
                              (t = a.containerOffset),
                              (e = a.containerSize.height),
                              (n = a.containerSize.width),
                              (o = a._hasScroll(u, "left") ? u.scrollWidth : n),
                              (r = a._hasScroll(u) ? u.scrollHeight : e),
                              (a.parentData = { element: u, left: t.left, top: t.top, width: o, height: r })));
                },
                resize: function (t) {
                    var e,
                        i,
                        s,
                        n,
                        o = k(this).resizable("instance"),
                        r = o.options,
                        a = o.containerOffset,
                        l = o.position,
                        h = o._aspectRatio || t.shiftKey,
                        c = { top: 0, left: 0 },
                        u = o.containerElement,
                        d = !0;
                    u[0] !== document && /static/.test(u.css("position")) && (c = a),
                        l.left < (o._helper ? a.left : 0) &&
                            ((o.size.width = o.size.width + (o._helper ? o.position.left - a.left : o.position.left - c.left)), h && ((o.size.height = o.size.width / o.aspectRatio), (d = !1)), (o.position.left = r.helper ? a.left : 0)),
                        l.top < (o._helper ? a.top : 0) &&
                            ((o.size.height = o.size.height + (o._helper ? o.position.top - a.top : o.position.top)), h && ((o.size.width = o.size.height * o.aspectRatio), (d = !1)), (o.position.top = o._helper ? a.top : 0)),
                        (s = o.containerElement.get(0) === o.element.parent().get(0)),
                        (n = /relative|absolute/.test(o.containerElement.css("position"))),
                        s && n ? ((o.offset.left = o.parentData.left + o.position.left), (o.offset.top = o.parentData.top + o.position.top)) : ((o.offset.left = o.element.offset().left), (o.offset.top = o.element.offset().top)),
                        (e = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - c.left : o.offset.left - a.left))),
                        (i = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - c.top : o.offset.top - a.top))),
                        e + o.size.width >= o.parentData.width && ((o.size.width = o.parentData.width - e), h && ((o.size.height = o.size.width / o.aspectRatio), (d = !1))),
                        i + o.size.height >= o.parentData.height && ((o.size.height = o.parentData.height - i), h && ((o.size.width = o.size.height * o.aspectRatio), (d = !1))),
                        d || ((o.position.left = o.prevPosition.left), (o.position.top = o.prevPosition.top), (o.size.width = o.prevSize.width), (o.size.height = o.prevSize.height));
                },
                stop: function () {
                    var t = k(this).resizable("instance"),
                        e = t.options,
                        i = t.containerOffset,
                        s = t.containerPosition,
                        n = t.containerElement,
                        o = k(t.helper),
                        r = o.offset(),
                        a = o.outerWidth() - t.sizeDiff.width,
                        l = o.outerHeight() - t.sizeDiff.height;
                    t._helper && !e.animate && /relative/.test(n.css("position")) && k(this).css({ left: r.left - s.left - i.left, width: a, height: l }),
                        t._helper && !e.animate && /static/.test(n.css("position")) && k(this).css({ left: r.left - s.left - i.left, width: a, height: l });
                },
            }),
            k.ui.plugin.add("resizable", "alsoResize", {
                start: function () {
                    var t = k(this).resizable("instance").options;
                    k(t.alsoResize).each(function () {
                        var t = k(this);
                        t.data("ui-resizable-alsoresize", { width: parseFloat(t.width()), height: parseFloat(t.height()), left: parseFloat(t.css("left")), top: parseFloat(t.css("top")) });
                    });
                },
                resize: function (t, i) {
                    var e = k(this).resizable("instance"),
                        s = e.options,
                        n = e.originalSize,
                        o = e.originalPosition,
                        r = { height: e.size.height - n.height || 0, width: e.size.width - n.width || 0, top: e.position.top - o.top || 0, left: e.position.left - o.left || 0 };
                    k(s.alsoResize).each(function () {
                        var t = k(this),
                            s = k(this).data("ui-resizable-alsoresize"),
                            n = {},
                            e = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        k.each(e, function (t, e) {
                            var i = (s[e] || 0) + (r[e] || 0);
                            i && 0 <= i && (n[e] = i || null);
                        }),
                            t.css(n);
                    });
                },
                stop: function () {
                    k(this).removeData("ui-resizable-alsoresize");
                },
            }),
            k.ui.plugin.add("resizable", "ghost", {
                start: function () {
                    var t = k(this).resizable("instance"),
                        e = t.size;
                    (t.ghost = t.originalElement.clone()),
                        t.ghost.css({ opacity: 0.25, display: "block", position: "relative", height: e.height, width: e.width, margin: 0, left: 0, top: 0 }),
                        t._addClass(t.ghost, "ui-resizable-ghost"),
                        !1 !== k.uiBackCompat && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost),
                        t.ghost.appendTo(t.helper);
                },
                resize: function () {
                    var t = k(this).resizable("instance");
                    t.ghost && t.ghost.css({ position: "relative", height: t.size.height, width: t.size.width });
                },
                stop: function () {
                    var t = k(this).resizable("instance");
                    t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
                },
            }),
            k.ui.plugin.add("resizable", "grid", {
                resize: function () {
                    var t,
                        e = k(this).resizable("instance"),
                        i = e.options,
                        s = e.size,
                        n = e.originalSize,
                        o = e.originalPosition,
                        r = e.axis,
                        a = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                        l = a[0] || 1,
                        h = a[1] || 1,
                        c = Math.round((s.width - n.width) / l) * l,
                        u = Math.round((s.height - n.height) / h) * h,
                        d = n.width + c,
                        p = n.height + u,
                        f = i.maxWidth && d > i.maxWidth,
                        m = i.maxHeight && p > i.maxHeight,
                        g = i.minWidth && i.minWidth > d,
                        v = i.minHeight && i.minHeight > p;
                    (i.grid = a),
                        g && (d += l),
                        v && (p += h),
                        f && (d -= l),
                        m && (p -= h),
                        /^(se|s|e)$/.test(r)
                            ? ((e.size.width = d), (e.size.height = p))
                            : /^(ne)$/.test(r)
                            ? ((e.size.width = d), (e.size.height = p), (e.position.top = o.top - u))
                            : /^(sw)$/.test(r)
                            ? ((e.size.width = d), (e.size.height = p), (e.position.left = o.left - c))
                            : ((p - h <= 0 || d - l <= 0) && (t = e._getPaddingPlusBorderDimensions(this)),
                              0 < p - h ? ((e.size.height = p), (e.position.top = o.top - u)) : ((p = h - t.height), (e.size.height = p), (e.position.top = o.top + n.height - p)),
                              0 < d - l ? ((e.size.width = d), (e.position.left = o.left - c)) : ((d = l - t.width), (e.size.width = d), (e.position.left = o.left + n.width - d)));
                },
            }),
            k.ui.resizable,
            k.widget("ui.dialog", {
                version: "1.12.1",
                options: {
                    appendTo: "body",
                    autoOpen: !0,
                    buttons: [],
                    classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" },
                    closeOnEscape: !0,
                    closeText: "Close",
                    draggable: !0,
                    hide: null,
                    height: "auto",
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 150,
                    minWidth: 150,
                    modal: !1,
                    position: {
                        my: "center",
                        at: "center",
                        of: window,
                        collision: "fit",
                        using: function (t) {
                            var e = k(this).css(t).offset().top;
                            e < 0 && k(this).css("top", t.top - e);
                        },
                    },
                    resizable: !0,
                    show: null,
                    title: null,
                    width: 300,
                    beforeClose: null,
                    close: null,
                    drag: null,
                    dragStart: null,
                    dragStop: null,
                    focus: null,
                    open: null,
                    resize: null,
                    resizeStart: null,
                    resizeStop: null,
                },
                sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 },
                resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 },
                _create: function () {
                    (this.originalCss = {
                        display: this.element[0].style.display,
                        width: this.element[0].style.width,
                        minHeight: this.element[0].style.minHeight,
                        maxHeight: this.element[0].style.maxHeight,
                        height: this.element[0].style.height,
                    }),
                        (this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }),
                        (this.originalTitle = this.element.attr("title")),
                        null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle),
                        this.options.disabled && (this.options.disabled = !1),
                        this._createWrapper(),
                        this.element.show().removeAttr("title").appendTo(this.uiDialog),
                        this._addClass("ui-dialog-content", "ui-widget-content"),
                        this._createTitlebar(),
                        this._createButtonPane(),
                        this.options.draggable && k.fn.draggable && this._makeDraggable(),
                        this.options.resizable && k.fn.resizable && this._makeResizable(),
                        (this._isOpen = !1),
                        this._trackFocus();
                },
                _init: function () {
                    this.options.autoOpen && this.open();
                },
                _appendTo: function () {
                    var t = this.options.appendTo;
                    return t && (t.jquery || t.nodeType) ? k(t) : this.document.find(t || "body").eq(0);
                },
                _destroy: function () {
                    var t,
                        e = this.originalPosition;
                    this._untrackInstance(),
                        this._destroyOverlay(),
                        this.element.removeUniqueId().css(this.originalCss).detach(),
                        this.uiDialog.remove(),
                        this.originalTitle && this.element.attr("title", this.originalTitle),
                        (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element);
                },
                widget: function () {
                    return this.uiDialog;
                },
                disable: k.noop,
                enable: k.noop,
                close: function (t) {
                    var e = this;
                    this._isOpen &&
                        !1 !== this._trigger("beforeClose", t) &&
                        ((this._isOpen = !1),
                        (this._focusedElement = null),
                        this._destroyOverlay(),
                        this._untrackInstance(),
                        this.opener.filter(":focusable").trigger("focus").length || k.ui.safeBlur(k.ui.safeActiveElement(this.document[0])),
                        this._hide(this.uiDialog, this.options.hide, function () {
                            e._trigger("close", t);
                        }));
                },
                isOpen: function () {
                    return this._isOpen;
                },
                moveToTop: function () {
                    this._moveToTop();
                },
                _moveToTop: function (t, e) {
                    var i = !1,
                        s = this.uiDialog
                            .siblings(".ui-front:visible")
                            .map(function () {
                                return +k(this).css("z-index");
                            })
                            .get(),
                        n = Math.max.apply(null, s);
                    return n >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", n + 1), (i = !0)), i && !e && this._trigger("focus", t), i;
                },
                open: function () {
                    var t = this;
                    return this._isOpen
                        ? void (this._moveToTop() && this._focusTabbable())
                        : ((this._isOpen = !0),
                          (this.opener = k(k.ui.safeActiveElement(this.document[0]))),
                          this._size(),
                          this._position(),
                          this._createOverlay(),
                          this._moveToTop(null, !0),
                          this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
                          this._show(this.uiDialog, this.options.show, function () {
                              t._focusTabbable(), t._trigger("focus");
                          }),
                          this._makeFocusTarget(),
                          void this._trigger("open"));
                },
                _focusTabbable: function () {
                    var t = this._focusedElement;
                    (t = t || this.element.find("[autofocus]")).length || (t = this.element.find(":tabbable")),
                        t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
                        t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
                        t.length || (t = this.uiDialog),
                        t.eq(0).trigger("focus");
                },
                _keepFocus: function (t) {
                    function e() {
                        var t = k.ui.safeActiveElement(this.document[0]);
                        this.uiDialog[0] === t || k.contains(this.uiDialog[0], t) || this._focusTabbable();
                    }
                    t.preventDefault(), e.call(this), this._delay(e);
                },
                _createWrapper: function () {
                    (this.uiDialog = k("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo())),
                        this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"),
                        this._on(this.uiDialog, {
                            keydown: function (t) {
                                if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === k.ui.keyCode.ESCAPE) return t.preventDefault(), void this.close(t);
                                var e, i, s;
                                t.keyCode !== k.ui.keyCode.TAB ||
                                    t.isDefaultPrevented() ||
                                    ((e = this.uiDialog.find(":tabbable")),
                                    (i = e.filter(":first")),
                                    (s = e.filter(":last")),
                                    (t.target !== s[0] && t.target !== this.uiDialog[0]) || t.shiftKey
                                        ? (t.target !== i[0] && t.target !== this.uiDialog[0]) ||
                                          !t.shiftKey ||
                                          (this._delay(function () {
                                              s.trigger("focus");
                                          }),
                                          t.preventDefault())
                                        : (this._delay(function () {
                                              i.trigger("focus");
                                          }),
                                          t.preventDefault()));
                            },
                            mousedown: function (t) {
                                this._moveToTop(t) && this._focusTabbable();
                            },
                        }),
                        this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") });
                },
                _createTitlebar: function () {
                    var t;
                    (this.uiDialogTitlebar = k("<div>")),
                        this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"),
                        this._on(this.uiDialogTitlebar, {
                            mousedown: function (t) {
                                k(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
                            },
                        }),
                        (this.uiDialogTitlebarClose = k("<button type='button'></button>")
                            .button({ label: k("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: !1 })
                            .appendTo(this.uiDialogTitlebar)),
                        this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"),
                        this._on(this.uiDialogTitlebarClose, {
                            click: function (t) {
                                t.preventDefault(), this.close(t);
                            },
                        }),
                        (t = k("<span>").uniqueId().prependTo(this.uiDialogTitlebar)),
                        this._addClass(t, "ui-dialog-title"),
                        this._title(t),
                        this.uiDialogTitlebar.prependTo(this.uiDialog),
                        this.uiDialog.attr({ "aria-labelledby": t.attr("id") });
                },
                _title: function (t) {
                    this.options.title ? t.text(this.options.title) : t.html("&#160;");
                },
                _createButtonPane: function () {
                    (this.uiDialogButtonPane = k("<div>")),
                        this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"),
                        (this.uiButtonSet = k("<div>").appendTo(this.uiDialogButtonPane)),
                        this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
                        this._createButtons();
                },
                _createButtons: function () {
                    var n = this,
                        t = this.options.buttons;
                    return (
                        this.uiDialogButtonPane.remove(),
                        this.uiButtonSet.empty(),
                        k.isEmptyObject(t) || (k.isArray(t) && !t.length)
                            ? void this._removeClass(this.uiDialog, "ui-dialog-buttons")
                            : (k.each(t, function (t, e) {
                                  var i, s;
                                  (e = k.isFunction(e) ? { click: e, text: t } : e),
                                      (e = k.extend({ type: "button" }, e)),
                                      (i = e.click),
                                      (s = { icon: e.icon, iconPosition: e.iconPosition, showLabel: e.showLabel, icons: e.icons, text: e.text }),
                                      delete e.click,
                                      delete e.icon,
                                      delete e.iconPosition,
                                      delete e.showLabel,
                                      delete e.icons,
                                      "boolean" == typeof e.text && delete e.text,
                                      k("<button></button>", e)
                                          .button(s)
                                          .appendTo(n.uiButtonSet)
                                          .on("click", function () {
                                              i.apply(n.element[0], arguments);
                                          });
                              }),
                              this._addClass(this.uiDialog, "ui-dialog-buttons"),
                              void this.uiDialogButtonPane.appendTo(this.uiDialog))
                    );
                },
                _makeDraggable: function () {
                    function n(t) {
                        return { position: t.position, offset: t.offset };
                    }
                    var o = this,
                        r = this.options;
                    this.uiDialog.draggable({
                        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                        handle: ".ui-dialog-titlebar",
                        containment: "document",
                        start: function (t, e) {
                            o._addClass(k(this), "ui-dialog-dragging"), o._blockFrames(), o._trigger("dragStart", t, n(e));
                        },
                        drag: function (t, e) {
                            o._trigger("drag", t, n(e));
                        },
                        stop: function (t, e) {
                            var i = e.offset.left - o.document.scrollLeft(),
                                s = e.offset.top - o.document.scrollTop();
                            (r.position = { my: "left top", at: "left" + (0 <= i ? "+" : "") + i + " top" + (0 <= s ? "+" : "") + s, of: o.window }),
                                o._removeClass(k(this), "ui-dialog-dragging"),
                                o._unblockFrames(),
                                o._trigger("dragStop", t, n(e));
                        },
                    });
                },
                _makeResizable: function () {
                    function o(t) {
                        return { originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size };
                    }
                    var r = this,
                        a = this.options,
                        t = a.resizable,
                        e = this.uiDialog.css("position"),
                        i = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";
                    this.uiDialog
                        .resizable({
                            cancel: ".ui-dialog-content",
                            containment: "document",
                            alsoResize: this.element,
                            maxWidth: a.maxWidth,
                            maxHeight: a.maxHeight,
                            minWidth: a.minWidth,
                            minHeight: this._minHeight(),
                            handles: i,
                            start: function (t, e) {
                                r._addClass(k(this), "ui-dialog-resizing"), r._blockFrames(), r._trigger("resizeStart", t, o(e));
                            },
                            resize: function (t, e) {
                                r._trigger("resize", t, o(e));
                            },
                            stop: function (t, e) {
                                var i = r.uiDialog.offset(),
                                    s = i.left - r.document.scrollLeft(),
                                    n = i.top - r.document.scrollTop();
                                (a.height = r.uiDialog.height()),
                                    (a.width = r.uiDialog.width()),
                                    (a.position = { my: "left top", at: "left" + (0 <= s ? "+" : "") + s + " top" + (0 <= n ? "+" : "") + n, of: r.window }),
                                    r._removeClass(k(this), "ui-dialog-resizing"),
                                    r._unblockFrames(),
                                    r._trigger("resizeStop", t, o(e));
                            },
                        })
                        .css("position", e);
                },
                _trackFocus: function () {
                    this._on(this.widget(), {
                        focusin: function (t) {
                            this._makeFocusTarget(), (this._focusedElement = k(t.target));
                        },
                    });
                },
                _makeFocusTarget: function () {
                    this._untrackInstance(), this._trackingInstances().unshift(this);
                },
                _untrackInstance: function () {
                    var t = this._trackingInstances(),
                        e = k.inArray(this, t);
                    -1 !== e && t.splice(e, 1);
                },
                _trackingInstances: function () {
                    var t = this.document.data("ui-dialog-instances");
                    return t || ((t = []), this.document.data("ui-dialog-instances", t)), t;
                },
                _minHeight: function () {
                    var t = this.options;
                    return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height);
                },
                _position: function () {
                    var t = this.uiDialog.is(":visible");
                    t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide();
                },
                _setOptions: function (t) {
                    var i = this,
                        s = !1,
                        n = {};
                    k.each(t, function (t, e) {
                        i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e);
                    }),
                        s && (this._size(), this._position()),
                        this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n);
                },
                _setOption: function (t, e) {
                    var i,
                        s,
                        n = this.uiDialog;
                    "disabled" !== t &&
                        (this._super(t, e),
                        "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
                        "buttons" === t && this._createButtons(),
                        "closeText" === t &&
                            this.uiDialogTitlebarClose.button({
                                label: k("<a>")
                                    .text("" + this.options.closeText)
                                    .html(),
                            }),
                        "draggable" === t && ((i = n.is(":data(ui-draggable)")) && !e && n.draggable("destroy"), !i && e && this._makeDraggable()),
                        "position" === t && this._position(),
                        "resizable" === t && ((s = n.is(":data(ui-resizable)")) && !e && n.resizable("destroy"), s && "string" == typeof e && n.resizable("option", "handles", e), s || !1 === e || this._makeResizable()),
                        "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
                },
                _size: function () {
                    var t,
                        e,
                        i,
                        s = this.options;
                    this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
                        s.minWidth > s.width && (s.width = s.minWidth),
                        (t = this.uiDialog.css({ height: "auto", width: s.width }).outerHeight()),
                        (e = Math.max(0, s.minHeight - t)),
                        (i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none"),
                        "auto" === s.height ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, s.height - t)),
                        this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
                },
                _blockFrames: function () {
                    this.iframeBlocks = this.document.find("iframe").map(function () {
                        var t = k(this);
                        return k("<div>").css({ position: "absolute", width: t.outerWidth(), height: t.outerHeight() }).appendTo(t.parent()).offset(t.offset())[0];
                    });
                },
                _unblockFrames: function () {
                    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
                },
                _allowInteraction: function (t) {
                    return !!k(t.target).closest(".ui-dialog").length || !!k(t.target).closest(".ui-datepicker").length;
                },
                _createOverlay: function () {
                    var e;
                    this.options.modal &&
                        ((e = !0),
                        this._delay(function () {
                            e = !1;
                        }),
                        this.document.data("ui-dialog-overlays") ||
                            this._on(this.document, {
                                focusin: function (t) {
                                    e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable());
                                },
                            }),
                        (this.overlay = k("<div>").appendTo(this._appendTo())),
                        this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
                        this._on(this.overlay, { mousedown: "_keepFocus" }),
                        this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1));
                },
                _destroyOverlay: function () {
                    var t;
                    this.options.modal &&
                        this.overlay &&
                        ((t = this.document.data("ui-dialog-overlays") - 1) ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")),
                        this.overlay.remove(),
                        (this.overlay = null));
                },
            }),
            !1 !== k.uiBackCompat &&
                k.widget("ui.dialog", k.ui.dialog, {
                    options: { dialogClass: "" },
                    _createWrapper: function () {
                        this._super(), this.uiDialog.addClass(this.options.dialogClass);
                    },
                    _setOption: function (t, e) {
                        "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments);
                    },
                }),
            k.ui.dialog,
            k.widget("ui.droppable", {
                version: "1.12.1",
                widgetEventPrefix: "drop",
                options: { accept: "*", addClasses: !0, greedy: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null },
                _create: function () {
                    var t,
                        e = this.options,
                        i = e.accept;
                    (this.isover = !1),
                        (this.isout = !0),
                        (this.accept = k.isFunction(i)
                            ? i
                            : function (t) {
                                  return t.is(i);
                              }),
                        (this.proportions = function () {
                            return arguments.length ? void (t = arguments[0]) : t || (t = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight });
                        }),
                        this._addToManager(e.scope),
                        e.addClasses && this._addClass("ui-droppable");
                },
                _addToManager: function (t) {
                    (k.ui.ddmanager.droppables[t] = k.ui.ddmanager.droppables[t] || []), k.ui.ddmanager.droppables[t].push(this);
                },
                _splice: function (t) {
                    for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1);
                },
                _destroy: function () {
                    var t = k.ui.ddmanager.droppables[this.options.scope];
                    this._splice(t);
                },
                _setOption: function (t, e) {
                    var i;
                    "accept" === t
                        ? (this.accept = k.isFunction(e)
                              ? e
                              : function (t) {
                                    return t.is(e);
                                })
                        : "scope" === t && ((i = k.ui.ddmanager.droppables[this.options.scope]), this._splice(i), this._addToManager(e)),
                        this._super(t, e);
                },
                _activate: function (t) {
                    var e = k.ui.ddmanager.current;
                    this._addActiveClass(), e && this._trigger("activate", t, this.ui(e));
                },
                _deactivate: function (t) {
                    var e = k.ui.ddmanager.current;
                    this._removeActiveClass(), e && this._trigger("deactivate", t, this.ui(e));
                },
                _over: function (t) {
                    var e = k.ui.ddmanager.current;
                    e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._addHoverClass(), this._trigger("over", t, this.ui(e)));
                },
                _out: function (t) {
                    var e = k.ui.ddmanager.current;
                    e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._removeHoverClass(), this._trigger("out", t, this.ui(e)));
                },
                _drop: function (e, t) {
                    var i = t || k.ui.ddmanager.current,
                        s = !1;
                    return (
                        !(!i || (i.currentItem || i.element)[0] === this.element[0]) &&
                        (this.element
                            .find(":data(ui-droppable)")
                            .not(".ui-draggable-dragging")
                            .each(function () {
                                var t = k(this).droppable("instance");
                                return t.options.greedy &&
                                    !t.options.disabled &&
                                    t.options.scope === i.options.scope &&
                                    t.accept.call(t.element[0], i.currentItem || i.element) &&
                                    rt(i, k.extend(t, { offset: t.element.offset() }), t.options.tolerance, e)
                                    ? !(s = !0)
                                    : void 0;
                            }),
                        !s && !!this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(i)), this.element))
                    );
                },
                ui: function (t) {
                    return { draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs };
                },
                _addHoverClass: function () {
                    this._addClass("ui-droppable-hover");
                },
                _removeHoverClass: function () {
                    this._removeClass("ui-droppable-hover");
                },
                _addActiveClass: function () {
                    this._addClass("ui-droppable-active");
                },
                _removeActiveClass: function () {
                    this._removeClass("ui-droppable-active");
                },
            });
        var ot,
            rt = (k.ui.intersect = function (t, e, i, s) {
                if (!e.offset) return !1;
                var n = (t.positionAbs || t.position.absolute).left + t.margins.left,
                    o = (t.positionAbs || t.position.absolute).top + t.margins.top,
                    r = n + t.helperProportions.width,
                    a = o + t.helperProportions.height,
                    l = e.offset.left,
                    h = e.offset.top,
                    c = l + e.proportions().width,
                    u = h + e.proportions().height;
                switch (i) {
                    case "fit":
                        return l <= n && r <= c && h <= o && a <= u;
                    case "intersect":
                        return n + t.helperProportions.width / 2 > l && c > r - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > h && u > a - t.helperProportions.height / 2;
                    case "pointer":
                        return at(s.pageY, h, e.proportions().height) && at(s.pageX, l, e.proportions().width);
                    case "touch":
                        return ((h <= o && o <= u) || (h <= a && a <= u) || (o < h && u < a)) && ((l <= n && n <= c) || (l <= r && r <= c) || (n < l && c < r));
                    default:
                        return !1;
                }
            });
        function at(t, e, i) {
            return e <= t && t < e + i;
        }
        !(k.ui.ddmanager = {
            current: null,
            droppables: { default: [] },
            prepareOffsets: function (t, e) {
                var i,
                    s,
                    n = k.ui.ddmanager.droppables[t.options.scope] || [],
                    o = e ? e.type : null,
                    r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                t: for (i = 0; n.length > i; i++)
                    if (!(n[i].options.disabled || (t && !n[i].accept.call(n[i].element[0], t.currentItem || t.element)))) {
                        for (s = 0; r.length > s; s++)
                            if (r[s] === n[i].element[0]) {
                                n[i].proportions().height = 0;
                                continue t;
                            }
                        (n[i].visible = "none" !== n[i].element.css("display")),
                            n[i].visible && ("mousedown" === o && n[i]._activate.call(n[i], e), (n[i].offset = n[i].element.offset()), n[i].proportions({ width: n[i].element[0].offsetWidth, height: n[i].element[0].offsetHeight }));
                    }
            },
            drop: function (t, e) {
                var i = !1;
                return (
                    k.each((k.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
                        this.options &&
                            (!this.options.disabled && this.visible && rt(t, this, this.options.tolerance, e) && (i = this._drop.call(this, e) || i),
                            !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && ((this.isout = !0), (this.isover = !1), this._deactivate.call(this, e)));
                    }),
                    i
                );
            },
            dragStart: function (t, e) {
                t.element.parentsUntil("body").on("scroll.droppable", function () {
                    t.options.refreshPositions || k.ui.ddmanager.prepareOffsets(t, e);
                });
            },
            drag: function (o, r) {
                o.options.refreshPositions && k.ui.ddmanager.prepareOffsets(o, r),
                    k.each(k.ui.ddmanager.droppables[o.options.scope] || [], function () {
                        var t, e, i, s, n;
                        this.options.disabled ||
                            this.greedyChild ||
                            !this.visible ||
                            ((n = !(s = rt(o, this, this.options.tolerance, r)) && this.isover ? "isout" : s && !this.isover ? "isover" : null) &&
                                (this.options.greedy &&
                                    ((e = this.options.scope),
                                    (i = this.element.parents(":data(ui-droppable)").filter(function () {
                                        return k(this).droppable("instance").options.scope === e;
                                    })).length && ((t = k(i[0]).droppable("instance")).greedyChild = "isover" === n)),
                                t && "isover" === n && ((t.isover = !1), (t.isout = !0), t._out.call(t, r)),
                                (this[n] = !0),
                                (this["isout" === n ? "isover" : "isout"] = !1),
                                this["isover" === n ? "_over" : "_out"].call(this, r),
                                t && "isout" === n && ((t.isout = !1), (t.isover = !0), t._over.call(t, r))));
                    });
            },
            dragStop: function (t, e) {
                t.element.parentsUntil("body").off("scroll.droppable"), t.options.refreshPositions || k.ui.ddmanager.prepareOffsets(t, e);
            },
        }) !== k.uiBackCompat &&
            k.widget("ui.droppable", k.ui.droppable, {
                options: { hoverClass: !1, activeClass: !1 },
                _addActiveClass: function () {
                    this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
                },
                _removeActiveClass: function () {
                    this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
                },
                _addHoverClass: function () {
                    this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
                },
                _removeHoverClass: function () {
                    this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
                },
            }),
            k.ui.droppable,
            k.widget("ui.progressbar", {
                version: "1.12.1",
                options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null },
                min: 0,
                _create: function () {
                    (this.oldValue = this.options.value = this._constrainedValue()),
                        this.element.attr({ role: "progressbar", "aria-valuemin": this.min }),
                        this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
                        (this.valueDiv = k("<div>").appendTo(this.element)),
                        this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"),
                        this._refreshValue();
                },
                _destroy: function () {
                    this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
                },
                value: function (t) {
                    return void 0 === t ? this.options.value : ((this.options.value = this._constrainedValue(t)), void this._refreshValue());
                },
                _constrainedValue: function (t) {
                    return void 0 === t && (t = this.options.value), (this.indeterminate = !1 === t), "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t));
                },
                _setOptions: function (t) {
                    var e = t.value;
                    delete t.value, this._super(t), (this.options.value = this._constrainedValue(e)), this._refreshValue();
                },
                _setOption: function (t, e) {
                    "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
                },
                _setOptionDisabled: function (t) {
                    this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t);
                },
                _percentage: function () {
                    return this.indeterminate ? 100 : (100 * (this.options.value - this.min)) / (this.options.max - this.min);
                },
                _refreshValue: function () {
                    var t = this.options.value,
                        e = this._percentage();
                    this.valueDiv.toggle(this.indeterminate || t > this.min).width(e.toFixed(0) + "%"),
                        this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate),
                        this.indeterminate
                            ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || ((this.overlayDiv = k("<div>").appendTo(this.valueDiv)), this._addClass(this.overlayDiv, "ui-progressbar-overlay")))
                            : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": t }), this.overlayDiv && (this.overlayDiv.remove(), (this.overlayDiv = null))),
                        this.oldValue !== t && ((this.oldValue = t), this._trigger("change")),
                        t === this.options.max && this._trigger("complete");
                },
            }),
            k.widget("ui.selectable", k.ui.mouse, {
                version: "1.12.1",
                options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null },
                _create: function () {
                    var s = this;
                    this._addClass("ui-selectable"),
                        (this.dragged = !1),
                        (this.refresh = function () {
                            (s.elementPos = k(s.element[0]).offset()),
                                (s.selectees = k(s.options.filter, s.element[0])),
                                s._addClass(s.selectees, "ui-selectee"),
                                s.selectees.each(function () {
                                    var t = k(this),
                                        e = t.offset(),
                                        i = { left: e.left - s.elementPos.left, top: e.top - s.elementPos.top };
                                    k.data(this, "selectable-item", {
                                        element: this,
                                        $element: t,
                                        left: i.left,
                                        top: i.top,
                                        right: i.left + t.outerWidth(),
                                        bottom: i.top + t.outerHeight(),
                                        startselected: !1,
                                        selected: t.hasClass("ui-selected"),
                                        selecting: t.hasClass("ui-selecting"),
                                        unselecting: t.hasClass("ui-unselecting"),
                                    });
                                });
                        }),
                        this.refresh(),
                        this._mouseInit(),
                        (this.helper = k("<div>")),
                        this._addClass(this.helper, "ui-selectable-helper");
                },
                _destroy: function () {
                    this.selectees.removeData("selectable-item"), this._mouseDestroy();
                },
                _mouseStart: function (i) {
                    var s = this,
                        t = this.options;
                    (this.opos = [i.pageX, i.pageY]),
                        (this.elementPos = k(this.element[0]).offset()),
                        this.options.disabled ||
                            ((this.selectees = k(t.filter, this.element[0])),
                            this._trigger("start", i),
                            k(t.appendTo).append(this.helper),
                            this.helper.css({ left: i.pageX, top: i.pageY, width: 0, height: 0 }),
                            t.autoRefresh && this.refresh(),
                            this.selectees.filter(".ui-selected").each(function () {
                                var t = k.data(this, "selectable-item");
                                (t.startselected = !0),
                                    i.metaKey ||
                                        i.ctrlKey ||
                                        (s._removeClass(t.$element, "ui-selected"), (t.selected = !1), s._addClass(t.$element, "ui-unselecting"), (t.unselecting = !0), s._trigger("unselecting", i, { unselecting: t.element }));
                            }),
                            k(i.target)
                                .parents()
                                .addBack()
                                .each(function () {
                                    var t,
                                        e = k.data(this, "selectable-item");
                                    return e
                                        ? ((t = (!i.metaKey && !i.ctrlKey) || !e.$element.hasClass("ui-selected")),
                                          s._removeClass(e.$element, t ? "ui-unselecting" : "ui-selected")._addClass(e.$element, t ? "ui-selecting" : "ui-unselecting"),
                                          (e.unselecting = !t),
                                          (e.selecting = t),
                                          (e.selected = t) ? s._trigger("selecting", i, { selecting: e.element }) : s._trigger("unselecting", i, { unselecting: e.element }),
                                          !1)
                                        : void 0;
                                }));
                },
                _mouseDrag: function (s) {
                    if (((this.dragged = !0), !this.options.disabled)) {
                        var t,
                            n = this,
                            o = this.options,
                            r = this.opos[0],
                            a = this.opos[1],
                            l = s.pageX,
                            h = s.pageY;
                        return (
                            l < r && ((t = l), (l = r), (r = t)),
                            h < a && ((t = h), (h = a), (a = t)),
                            this.helper.css({ left: r, top: a, width: l - r, height: h - a }),
                            this.selectees.each(function () {
                                var t = k.data(this, "selectable-item"),
                                    e = !1,
                                    i = {};
                                t &&
                                    t.element !== n.element[0] &&
                                    ((i.left = t.left + n.elementPos.left),
                                    (i.right = t.right + n.elementPos.left),
                                    (i.top = t.top + n.elementPos.top),
                                    (i.bottom = t.bottom + n.elementPos.top),
                                    "touch" === o.tolerance ? (e = !(i.left > l || r > i.right || i.top > h || a > i.bottom)) : "fit" === o.tolerance && (e = i.left > r && l > i.right && i.top > a && h > i.bottom),
                                    e
                                        ? (t.selected && (n._removeClass(t.$element, "ui-selected"), (t.selected = !1)),
                                          t.unselecting && (n._removeClass(t.$element, "ui-unselecting"), (t.unselecting = !1)),
                                          t.selecting || (n._addClass(t.$element, "ui-selecting"), (t.selecting = !0), n._trigger("selecting", s, { selecting: t.element })))
                                        : (t.selecting &&
                                              ((s.metaKey || s.ctrlKey) && t.startselected
                                                  ? (n._removeClass(t.$element, "ui-selecting"), (t.selecting = !1), n._addClass(t.$element, "ui-selected"), (t.selected = !0))
                                                  : (n._removeClass(t.$element, "ui-selecting"),
                                                    (t.selecting = !1),
                                                    t.startselected && (n._addClass(t.$element, "ui-unselecting"), (t.unselecting = !0)),
                                                    n._trigger("unselecting", s, { unselecting: t.element }))),
                                          t.selected &&
                                              (s.metaKey ||
                                                  s.ctrlKey ||
                                                  t.startselected ||
                                                  (n._removeClass(t.$element, "ui-selected"), (t.selected = !1), n._addClass(t.$element, "ui-unselecting"), (t.unselecting = !0), n._trigger("unselecting", s, { unselecting: t.element })))));
                            }),
                            !1
                        );
                    }
                },
                _mouseStop: function (e) {
                    var i = this;
                    return (
                        (this.dragged = !1),
                        k(".ui-unselecting", this.element[0]).each(function () {
                            var t = k.data(this, "selectable-item");
                            i._removeClass(t.$element, "ui-unselecting"), (t.unselecting = !1), (t.startselected = !1), i._trigger("unselected", e, { unselected: t.element });
                        }),
                        k(".ui-selecting", this.element[0]).each(function () {
                            var t = k.data(this, "selectable-item");
                            i._removeClass(t.$element, "ui-selecting")._addClass(t.$element, "ui-selected"), (t.selecting = !1), (t.selected = !0), (t.startselected = !0), i._trigger("selected", e, { selected: t.element });
                        }),
                        this._trigger("stop", e),
                        this.helper.remove(),
                        !1
                    );
                },
            }),
            k.widget("ui.selectmenu", [
                k.ui.formResetMixin,
                {
                    version: "1.12.1",
                    defaultElement: "<select>",
                    options: {
                        appendTo: null,
                        classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" },
                        disabled: null,
                        icons: { button: "ui-icon-triangle-1-s" },
                        position: { my: "left top", at: "left bottom", collision: "none" },
                        width: !1,
                        change: null,
                        close: null,
                        focus: null,
                        open: null,
                        select: null,
                    },
                    _create: function () {
                        var t = this.element.uniqueId().attr("id");
                        (this.ids = { element: t, button: t + "-button", menu: t + "-menu" }), this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), (this._rendered = !1), (this.menuItems = k());
                    },
                    _drawButton: function () {
                        var t,
                            e = this,
                            i = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
                        (this.labels = this.element.labels().attr("for", this.ids.button)),
                            this._on(this.labels, {
                                click: function (t) {
                                    this.button.focus(), t.preventDefault();
                                },
                            }),
                            this.element.hide(),
                            (this.button = k("<span>", {
                                tabindex: this.options.disabled ? -1 : 0,
                                id: this.ids.button,
                                role: "combobox",
                                "aria-expanded": "false",
                                "aria-autocomplete": "list",
                                "aria-owns": this.ids.menu,
                                "aria-haspopup": "true",
                                title: this.element.attr("title"),
                            }).insertAfter(this.element)),
                            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"),
                            (t = k("<span>").appendTo(this.button)),
                            this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button),
                            (this.buttonItem = this._renderButtonItem(i).appendTo(this.button)),
                            !1 !== this.options.width && this._resizeButton(),
                            this._on(this.button, this._buttonEvents),
                            this.button.one("focusin", function () {
                                e._rendered || e._refreshMenu();
                            });
                    },
                    _drawMenu: function () {
                        var s = this;
                        (this.menu = k("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu })),
                            (this.menuWrap = k("<div>").append(this.menu)),
                            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
                            this.menuWrap.appendTo(this._appendTo()),
                            (this.menuInstance = this.menu
                                .menu({
                                    classes: { "ui-menu": "ui-corner-bottom" },
                                    role: "listbox",
                                    select: function (t, e) {
                                        t.preventDefault(), s._setSelection(), s._select(e.item.data("ui-selectmenu-item"), t);
                                    },
                                    focus: function (t, e) {
                                        var i = e.item.data("ui-selectmenu-item");
                                        null != s.focusIndex && i.index !== s.focusIndex && (s._trigger("focus", t, { item: i }), s.isOpen || s._select(i, t)),
                                            (s.focusIndex = i.index),
                                            s.button.attr("aria-activedescendant", s.menuItems.eq(i.index).attr("id"));
                                    },
                                })
                                .menu("instance")),
                            this.menuInstance._off(this.menu, "mouseleave"),
                            (this.menuInstance._closeOnDocumentClick = function () {
                                return !1;
                            }),
                            (this.menuInstance._isDivider = function () {
                                return !1;
                            });
                    },
                    refresh: function () {
                        this._refreshMenu(), this.buttonItem.replaceWith((this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {}))), null === this.options.width && this._resizeButton();
                    },
                    _refreshMenu: function () {
                        var t,
                            e = this.element.find("option");
                        this.menu.empty(),
                            this._parseOptions(e),
                            this._renderMenu(this.menu, this.items),
                            this.menuInstance.refresh(),
                            (this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper")),
                            (this._rendered = !0),
                            e.length && ((t = this._getSelectedItem()), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
                    },
                    open: function (t) {
                        this.options.disabled ||
                            (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(),
                            this.menuItems.length && ((this.isOpen = !0), this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)));
                    },
                    _position: function () {
                        this.menuWrap.position(k.extend({ of: this.button }, this.options.position));
                    },
                    close: function (t) {
                        this.isOpen && ((this.isOpen = !1), this._toggleAttr(), (this.range = null), this._off(this.document), this._trigger("close", t));
                    },
                    widget: function () {
                        return this.button;
                    },
                    menuWidget: function () {
                        return this.menu;
                    },
                    _renderButtonItem: function (t) {
                        var e = k("<span>");
                        return this._setText(e, t.label), this._addClass(e, "ui-selectmenu-text"), e;
                    },
                    _renderMenu: function (s, t) {
                        var n = this,
                            o = "";
                        k.each(t, function (t, e) {
                            var i;
                            e.optgroup !== o &&
                                ((i = k("<li>", { text: e.optgroup })),
                                n._addClass(i, "ui-selectmenu-optgroup", "ui-menu-divider" + (e.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")),
                                i.appendTo(s),
                                (o = e.optgroup)),
                                n._renderItemData(s, e);
                        });
                    },
                    _renderItemData: function (t, e) {
                        return this._renderItem(t, e).data("ui-selectmenu-item", e);
                    },
                    _renderItem: function (t, e) {
                        var i = k("<li>"),
                            s = k("<div>", { title: e.element.attr("title") });
                        return e.disabled && this._addClass(i, null, "ui-state-disabled"), this._setText(s, e.label), i.append(s).appendTo(t);
                    },
                    _setText: function (t, e) {
                        e ? t.text(e) : t.html("&#160;");
                    },
                    _move: function (t, e) {
                        var i,
                            s,
                            n = ".ui-menu-item";
                        this.isOpen ? (i = this.menuItems.eq(this.focusIndex).parent("li")) : ((i = this.menuItems.eq(this.element[0].selectedIndex).parent("li")), (n += ":not(.ui-state-disabled)")),
                            (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0)).length && this.menuInstance.focus(e, s);
                    },
                    _getSelectedItem: function () {
                        return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
                    },
                    _toggle: function (t) {
                        this[this.isOpen ? "close" : "open"](t);
                    },
                    _setSelection: function () {
                        var t;
                        this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus());
                    },
                    _documentClick: {
                        mousedown: function (t) {
                            this.isOpen && (k(t.target).closest(".ui-selectmenu-menu, #" + k.ui.escapeSelector(this.ids.button)).length || this.close(t));
                        },
                    },
                    _buttonEvents: {
                        mousedown: function () {
                            var t;
                            window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : (this.range = document.selection.createRange());
                        },
                        click: function (t) {
                            this._setSelection(), this._toggle(t);
                        },
                        keydown: function (t) {
                            var e = !0;
                            switch (t.keyCode) {
                                case k.ui.keyCode.TAB:
                                case k.ui.keyCode.ESCAPE:
                                    this.close(t), (e = !1);
                                    break;
                                case k.ui.keyCode.ENTER:
                                    this.isOpen && this._selectFocusedItem(t);
                                    break;
                                case k.ui.keyCode.UP:
                                    t.altKey ? this._toggle(t) : this._move("prev", t);
                                    break;
                                case k.ui.keyCode.DOWN:
                                    t.altKey ? this._toggle(t) : this._move("next", t);
                                    break;
                                case k.ui.keyCode.SPACE:
                                    this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                                    break;
                                case k.ui.keyCode.LEFT:
                                    this._move("prev", t);
                                    break;
                                case k.ui.keyCode.RIGHT:
                                    this._move("next", t);
                                    break;
                                case k.ui.keyCode.HOME:
                                case k.ui.keyCode.PAGE_UP:
                                    this._move("first", t);
                                    break;
                                case k.ui.keyCode.END:
                                case k.ui.keyCode.PAGE_DOWN:
                                    this._move("last", t);
                                    break;
                                default:
                                    this.menu.trigger(t), (e = !1);
                            }
                            e && t.preventDefault();
                        },
                    },
                    _selectFocusedItem: function (t) {
                        var e = this.menuItems.eq(this.focusIndex).parent("li");
                        e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t);
                    },
                    _select: function (t, e) {
                        var i = this.element[0].selectedIndex;
                        (this.element[0].selectedIndex = t.index),
                            this.buttonItem.replaceWith((this.buttonItem = this._renderButtonItem(t))),
                            this._setAria(t),
                            this._trigger("select", e, { item: t }),
                            t.index !== i && this._trigger("change", e, { item: t }),
                            this.close(e);
                    },
                    _setAria: function (t) {
                        var e = this.menuItems.eq(t.index).attr("id");
                        this.button.attr({ "aria-labelledby": e, "aria-activedescendant": e }), this.menu.attr("aria-activedescendant", e);
                    },
                    _setOption: function (t, e) {
                        var i;
                        "icons" === t && ((i = this.button.find("span.ui-icon")), this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)),
                            this._super(t, e),
                            "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
                            "width" === t && this._resizeButton();
                    },
                    _setOptionDisabled: function (t) {
                        this._super(t),
                            this.menuInstance.option("disabled", t),
                            this.button.attr("aria-disabled", t),
                            this._toggleClass(this.button, null, "ui-state-disabled", t),
                            this.element.prop("disabled", t),
                            t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
                    },
                    _appendTo: function () {
                        var t = this.options.appendTo;
                        return ((t = t && (t.jquery || t.nodeType ? k(t) : this.document.find(t).eq(0))) && t[0]) || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t;
                    },
                    _toggleAttr: function () {
                        this.button.attr("aria-expanded", this.isOpen),
                            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))
                                ._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))
                                ._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen),
                            this.menu.attr("aria-hidden", !this.isOpen);
                    },
                    _resizeButton: function () {
                        var t = this.options.width;
                        return !1 === t ? void this.button.css("width", "") : (null === t && ((t = this.element.show().outerWidth()), this.element.hide()), void this.button.outerWidth(t));
                    },
                    _resizeMenu: function () {
                        this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
                    },
                    _getCreateOptions: function () {
                        var t = this._super();
                        return (t.disabled = this.element.prop("disabled")), t;
                    },
                    _parseOptions: function (t) {
                        var i = this,
                            s = [];
                        t.each(function (t, e) {
                            s.push(i._parseOption(k(e), t));
                        }),
                            (this.items = s);
                    },
                    _parseOption: function (t, e) {
                        var i = t.parent("optgroup");
                        return { element: t, index: e, value: t.val(), label: t.text(), optgroup: i.attr("label") || "", disabled: i.prop("disabled") || t.prop("disabled") };
                    },
                    _destroy: function () {
                        this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
                    },
                },
            ]),
            k.widget("ui.slider", k.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "slide",
                options: {
                    animate: !1,
                    classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" },
                    distance: 0,
                    max: 100,
                    min: 0,
                    orientation: "horizontal",
                    range: !1,
                    step: 1,
                    value: 0,
                    values: null,
                    change: null,
                    slide: null,
                    start: null,
                    stop: null,
                },
                numPages: 5,
                _create: function () {
                    (this._keySliding = !1),
                        (this._mouseSliding = !1),
                        (this._animateOff = !0),
                        (this._handleIndex = null),
                        this._detectOrientation(),
                        this._mouseInit(),
                        this._calculateNewMax(),
                        this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"),
                        this._refresh(),
                        (this._animateOff = !1);
                },
                _refresh: function () {
                    this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
                },
                _createHandles: function () {
                    var t,
                        e = this.options,
                        i = this.element.find(".ui-slider-handle"),
                        s = [],
                        n = (e.values && e.values.length) || 1;
                    for (i.length > n && (i.slice(n).remove(), (i = i.slice(0, n))), t = i.length; t < n; t++) s.push("<span tabindex='0'></span>");
                    (this.handles = i.add(k(s.join("")).appendTo(this.element))),
                        this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
                        (this.handle = this.handles.eq(0)),
                        this.handles.each(function (t) {
                            k(this).data("ui-slider-handle-index", t).attr("tabIndex", 0);
                        });
                },
                _createRange: function () {
                    var t = this.options;
                    t.range
                        ? (!0 === t.range &&
                              (t.values ? (t.values.length && 2 !== t.values.length ? (t.values = [t.values[0], t.values[0]]) : k.isArray(t.values) && (t.values = t.values.slice(0))) : (t.values = [this._valueMin(), this._valueMin()])),
                          this.range && this.range.length
                              ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" }))
                              : ((this.range = k("<div>").appendTo(this.element)), this._addClass(this.range, "ui-slider-range")),
                          ("min" !== t.range && "max" !== t.range) || this._addClass(this.range, "ui-slider-range-" + t.range))
                        : (this.range && this.range.remove(), (this.range = null));
                },
                _setupEvents: function () {
                    this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
                },
                _destroy: function () {
                    this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
                },
                _mouseCapture: function (t) {
                    var e,
                        i,
                        s,
                        n,
                        o,
                        r,
                        a,
                        l = this,
                        h = this.options;
                    return (
                        !h.disabled &&
                        ((this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }),
                        (this.elementOffset = this.element.offset()),
                        (e = { x: t.pageX, y: t.pageY }),
                        (i = this._normValueFromMouse(e)),
                        (s = this._valueMax() - this._valueMin() + 1),
                        this.handles.each(function (t) {
                            var e = Math.abs(i - l.values(t));
                            (e < s || (s === e && (t === l._lastChangedValue || l.values(t) === h.min))) && ((s = e), (n = k(this)), (o = t));
                        }),
                        !1 !== this._start(t, o) &&
                            ((this._mouseSliding = !0),
                            (this._handleIndex = o),
                            this._addClass(n, null, "ui-state-active"),
                            n.trigger("focus"),
                            (r = n.offset()),
                            (a = !k(t.target).parents().addBack().is(".ui-slider-handle")),
                            (this._clickOffset = a
                                ? { left: 0, top: 0 }
                                : {
                                      left: t.pageX - r.left - n.width() / 2,
                                      top: t.pageY - r.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0),
                                  }),
                            this.handles.hasClass("ui-state-hover") || this._slide(t, o, i),
                            (this._animateOff = !0)))
                    );
                },
                _mouseStart: function () {
                    return !0;
                },
                _mouseDrag: function (t) {
                    var e = { x: t.pageX, y: t.pageY },
                        i = this._normValueFromMouse(e);
                    return this._slide(t, this._handleIndex, i), !1;
                },
                _mouseStop: function (t) {
                    return (
                        this._removeClass(this.handles, null, "ui-state-active"),
                        (this._mouseSliding = !1),
                        this._stop(t, this._handleIndex),
                        this._change(t, this._handleIndex),
                        (this._handleIndex = null),
                        (this._clickOffset = null),
                        (this._animateOff = !1)
                    );
                },
                _detectOrientation: function () {
                    this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
                },
                _normValueFromMouse: function (t) {
                    var e,
                        i,
                        s,
                        n =
                            "horizontal" === this.orientation
                                ? ((e = this.elementSize.width), t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0))
                                : ((e = this.elementSize.height), t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
                        o = n / e;
                    return 1 < o && (o = 1), o < 0 && (o = 0), "vertical" === this.orientation && (o = 1 - o), (i = this._valueMax() - this._valueMin()), (s = this._valueMin() + o * i), this._trimAlignValue(s);
                },
                _uiHash: function (t, e, i) {
                    var s = { handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value() };
                    return this._hasMultipleValues() && ((s.value = void 0 !== e ? e : this.values(t)), (s.values = i || this.values())), s;
                },
                _hasMultipleValues: function () {
                    return this.options.values && this.options.values.length;
                },
                _start: function (t, e) {
                    return this._trigger("start", t, this._uiHash(e));
                },
                _slide: function (t, e, i) {
                    var s,
                        n = this.value(),
                        o = this.values();
                    this._hasMultipleValues() && ((s = this.values(e ? 0 : 1)), (n = this.values(e)), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), (o[e] = i)),
                        i === n || (!1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
                },
                _stop: function (t, e) {
                    this._trigger("stop", t, this._uiHash(e));
                },
                _change: function (t, e) {
                    this._keySliding || this._mouseSliding || ((this._lastChangedValue = e), this._trigger("change", t, this._uiHash(e)));
                },
                value: function (t) {
                    return arguments.length ? ((this.options.value = this._trimAlignValue(t)), this._refreshValue(), void this._change(null, 0)) : this._value();
                },
                values: function (t, e) {
                    var i, s, n;
                    if (1 < arguments.length) return (this.options.values[t] = this._trimAlignValue(e)), this._refreshValue(), void this._change(null, t);
                    if (!arguments.length) return this._values();
                    if (!k.isArray(t)) return this._hasMultipleValues() ? this._values(t) : this.value();
                    for (i = this.options.values, s = t, n = 0; i.length > n; n += 1) (i[n] = this._trimAlignValue(s[n])), this._change(null, n);
                    this._refreshValue();
                },
                _setOption: function (t, e) {
                    var i,
                        s = 0;
                    switch (
                        ("range" === t &&
                            !0 === this.options.range &&
                            ("min" === e ? ((this.options.value = this._values(0)), (this.options.values = null)) : "max" === e && ((this.options.value = this._values(this.options.values.length - 1)), (this.options.values = null))),
                        k.isArray(this.options.values) && (s = this.options.values.length),
                        this._super(t, e),
                        t)
                    ) {
                        case "orientation":
                            this._detectOrientation(),
                                this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation),
                                this._refreshValue(),
                                this.options.range && this._refreshRange(e),
                                this.handles.css("horizontal" === e ? "bottom" : "left", "");
                            break;
                        case "value":
                            (this._animateOff = !0), this._refreshValue(), this._change(null, 0), (this._animateOff = !1);
                            break;
                        case "values":
                            for (this._animateOff = !0, this._refreshValue(), i = s - 1; 0 <= i; i--) this._change(null, i);
                            this._animateOff = !1;
                            break;
                        case "step":
                        case "min":
                        case "max":
                            (this._animateOff = !0), this._calculateNewMax(), this._refreshValue(), (this._animateOff = !1);
                            break;
                        case "range":
                            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
                    }
                },
                _setOptionDisabled: function (t) {
                    this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
                },
                _value: function () {
                    var t = this.options.value;
                    return this._trimAlignValue(t);
                },
                _values: function (t) {
                    var e, i, s;
                    if (arguments.length) return (e = this.options.values[t]), this._trimAlignValue(e);
                    if (this._hasMultipleValues()) {
                        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                        return i;
                    }
                    return [];
                },
                _trimAlignValue: function (t) {
                    if (this._valueMin() >= t) return this._valueMin();
                    if (t >= this._valueMax()) return this._valueMax();
                    var e = 0 < this.options.step ? this.options.step : 1,
                        i = (t - this._valueMin()) % e,
                        s = t - i;
                    return 2 * Math.abs(i) >= e && (s += 0 < i ? e : -e), parseFloat(s.toFixed(5));
                },
                _calculateNewMax: function () {
                    var t = this.options.max,
                        e = this._valueMin(),
                        i = this.options.step;
                    (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), (this.max = parseFloat(t.toFixed(this._precision())));
                },
                _precision: function () {
                    var t = this._precisionOf(this.options.step);
                    return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
                },
                _precisionOf: function (t) {
                    var e = "" + t,
                        i = e.indexOf(".");
                    return -1 === i ? 0 : e.length - i - 1;
                },
                _valueMin: function () {
                    return this.options.min;
                },
                _valueMax: function () {
                    return this.max;
                },
                _refreshRange: function (t) {
                    "vertical" === t && this.range.css({ width: "", left: "" }), "horizontal" === t && this.range.css({ height: "", bottom: "" });
                },
                _refreshValue: function () {
                    var e,
                        i,
                        t,
                        s,
                        n,
                        o = this.options.range,
                        r = this.options,
                        a = this,
                        l = !this._animateOff && r.animate,
                        h = {};
                    this._hasMultipleValues()
                        ? this.handles.each(function (t) {
                              (i = ((a.values(t) - a._valueMin()) / (a._valueMax() - a._valueMin())) * 100),
                                  (h["horizontal" === a.orientation ? "left" : "bottom"] = i + "%"),
                                  k(this).stop(1, 1)[l ? "animate" : "css"](h, r.animate),
                                  !0 === a.options.range &&
                                      ("horizontal" === a.orientation
                                          ? (0 === t && a.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === t && a.range[l ? "animate" : "css"]({ width: i - e + "%" }, { queue: !1, duration: r.animate }))
                                          : (0 === t && a.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === t && a.range[l ? "animate" : "css"]({ height: i - e + "%" }, { queue: !1, duration: r.animate }))),
                                  (e = i);
                          })
                        : ((t = this.value()),
                          (s = this._valueMin()),
                          (n = this._valueMax()),
                          (i = n !== s ? ((t - s) / (n - s)) * 100 : 0),
                          (h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%"),
                          this.handle.stop(1, 1)[l ? "animate" : "css"](h, r.animate),
                          "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, r.animate),
                          "max" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: 100 - i + "%" }, r.animate),
                          "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, r.animate),
                          "max" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: 100 - i + "%" }, r.animate));
                },
                _handleEvents: {
                    keydown: function (t) {
                        var e,
                            i,
                            s,
                            n = k(t.target).data("ui-slider-handle-index");
                        switch (t.keyCode) {
                            case k.ui.keyCode.HOME:
                            case k.ui.keyCode.END:
                            case k.ui.keyCode.PAGE_UP:
                            case k.ui.keyCode.PAGE_DOWN:
                            case k.ui.keyCode.UP:
                            case k.ui.keyCode.RIGHT:
                            case k.ui.keyCode.DOWN:
                            case k.ui.keyCode.LEFT:
                                if ((t.preventDefault(), !this._keySliding && ((this._keySliding = !0), this._addClass(k(t.target), null, "ui-state-active"), !1 === this._start(t, n)))) return;
                        }
                        switch (((s = this.options.step), (e = i = this._hasMultipleValues() ? this.values(n) : this.value()), t.keyCode)) {
                            case k.ui.keyCode.HOME:
                                i = this._valueMin();
                                break;
                            case k.ui.keyCode.END:
                                i = this._valueMax();
                                break;
                            case k.ui.keyCode.PAGE_UP:
                                i = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case k.ui.keyCode.PAGE_DOWN:
                                i = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case k.ui.keyCode.UP:
                            case k.ui.keyCode.RIGHT:
                                if (e === this._valueMax()) return;
                                i = this._trimAlignValue(e + s);
                                break;
                            case k.ui.keyCode.DOWN:
                            case k.ui.keyCode.LEFT:
                                if (e === this._valueMin()) return;
                                i = this._trimAlignValue(e - s);
                        }
                        this._slide(t, n, i);
                    },
                    keyup: function (t) {
                        var e = k(t.target).data("ui-slider-handle-index");
                        this._keySliding && ((this._keySliding = !1), this._stop(t, e), this._change(t, e), this._removeClass(k(t.target), null, "ui-state-active"));
                    },
                },
            }),
            k.widget("ui.sortable", k.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "sort",
                ready: !1,
                options: {
                    appendTo: "parent",
                    axis: !1,
                    connectWith: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    dropOnEmpty: !0,
                    forcePlaceholderSize: !1,
                    forceHelperSize: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    items: "> *",
                    opacity: !1,
                    placeholder: !1,
                    revert: !1,
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    scope: "default",
                    tolerance: "intersect",
                    zIndex: 1e3,
                    activate: null,
                    beforeStop: null,
                    change: null,
                    deactivate: null,
                    out: null,
                    over: null,
                    receive: null,
                    remove: null,
                    sort: null,
                    start: null,
                    stop: null,
                    update: null,
                },
                _isOverAxis: function (t, e, i) {
                    return e <= t && t < e + i;
                },
                _isFloating: function (t) {
                    return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
                },
                _create: function () {
                    (this.containerCache = {}), this._addClass("ui-sortable"), this.refresh(), (this.offset = this.element.offset()), this._mouseInit(), this._setHandleClassName(), (this.ready = !0);
                },
                _setOption: function (t, e) {
                    this._super(t, e), "handle" === t && this._setHandleClassName();
                },
                _setHandleClassName: function () {
                    var t = this;
                    this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"),
                        k.each(this.items, function () {
                            t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
                        });
                },
                _destroy: function () {
                    this._mouseDestroy();
                    for (var t = this.items.length - 1; 0 <= t; t--) this.items[t].item.removeData(this.widgetName + "-item");
                    return this;
                },
                _mouseCapture: function (t, e) {
                    var i = null,
                        s = !1,
                        n = this;
                    return (
                        !this.reverting &&
                        !this.options.disabled &&
                        "static" !== this.options.type &&
                        (this._refreshItems(t),
                        k(t.target)
                            .parents()
                            .each(function () {
                                return k.data(this, n.widgetName + "-item") === n ? ((i = k(this)), !1) : void 0;
                            }),
                        k.data(t.target, n.widgetName + "-item") === n && (i = k(t.target)),
                        !!i &&
                            !(
                                this.options.handle &&
                                !e &&
                                (k(this.options.handle, i)
                                    .find("*")
                                    .addBack()
                                    .each(function () {
                                        this === t.target && (s = !0);
                                    }),
                                !s)
                            ) &&
                            ((this.currentItem = i), this._removeCurrentsFromItems(), !0))
                    );
                },
                _mouseStart: function (t, e, i) {
                    var s,
                        n,
                        o = this.options;
                    if (
                        ((this.currentContainer = this).refreshPositions(),
                        (this.helper = this._createHelper(t)),
                        this._cacheHelperProportions(),
                        this._cacheMargins(),
                        (this.scrollParent = this.helper.scrollParent()),
                        (this.offset = this.currentItem.offset()),
                        (this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }),
                        k.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }),
                        this.helper.css("position", "absolute"),
                        (this.cssPosition = this.helper.css("position")),
                        (this.originalPosition = this._generatePosition(t)),
                        (this.originalPageX = t.pageX),
                        (this.originalPageY = t.pageY),
                        o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt),
                        (this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }),
                        this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
                        this._createPlaceholder(),
                        o.containment && this._setContainment(),
                        o.cursor &&
                            "auto" !== o.cursor &&
                            ((n = this.document.find("body")), (this.storedCursor = n.css("cursor")), n.css("cursor", o.cursor), (this.storedStylesheet = k("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(n))),
                        o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)),
                        o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)),
                        this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
                        this._trigger("start", t, this._uiHash()),
                        this._preserveHelperProportions || this._cacheHelperProportions(),
                        !i)
                    )
                        for (s = this.containers.length - 1; 0 <= s; s--) this.containers[s]._trigger("activate", t, this._uiHash(this));
                    return (
                        k.ui.ddmanager && (k.ui.ddmanager.current = this),
                        k.ui.ddmanager && !o.dropBehaviour && k.ui.ddmanager.prepareOffsets(this, t),
                        (this.dragging = !0),
                        this._addClass(this.helper, "ui-sortable-helper"),
                        this._mouseDrag(t),
                        !0
                    );
                },
                _mouseDrag: function (t) {
                    var e,
                        i,
                        s,
                        n,
                        o = this.options,
                        r = !1;
                    for (
                        this.position = this._generatePosition(t),
                            this.positionAbs = this._convertPositionTo("absolute"),
                            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
                            this.options.scroll &&
                                (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName
                                    ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity
                                          ? (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed)
                                          : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed),
                                      this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity
                                          ? (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed)
                                          : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed))
                                    : (t.pageY - this.document.scrollTop() < o.scrollSensitivity
                                          ? (r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed))
                                          : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)),
                                      t.pageX - this.document.scrollLeft() < o.scrollSensitivity
                                          ? (r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed))
                                          : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))),
                                !1 !== r && k.ui.ddmanager && !o.dropBehaviour && k.ui.ddmanager.prepareOffsets(this, t)),
                            this.positionAbs = this._convertPositionTo("absolute"),
                            (this.options.axis && "y" === this.options.axis) || (this.helper[0].style.left = this.position.left + "px"),
                            (this.options.axis && "x" === this.options.axis) || (this.helper[0].style.top = this.position.top + "px"),
                            e = this.items.length - 1;
                        0 <= e;
                        e--
                    )
                        if (
                            ((s = (i = this.items[e]).item[0]),
                            (n = this._intersectsWithPointer(i)) &&
                                i.instance === this.currentContainer &&
                                s !== this.currentItem[0] &&
                                this.placeholder[1 === n ? "next" : "prev"]()[0] !== s &&
                                !k.contains(this.placeholder[0], s) &&
                                ("semi-dynamic" !== this.options.type || !k.contains(this.element[0], s)))
                        ) {
                            if (((this.direction = 1 === n ? "down" : "up"), "pointer" !== this.options.tolerance && !this._intersectsWithSides(i))) break;
                            this._rearrange(t, i), this._trigger("change", t, this._uiHash());
                            break;
                        }
                    return this._contactContainers(t), k.ui.ddmanager && k.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), (this.lastPositionAbs = this.positionAbs), !1;
                },
                _mouseStop: function (t, e) {
                    var i, s, n, o;
                    if (t)
                        return (
                            k.ui.ddmanager && !this.options.dropBehaviour && k.ui.ddmanager.drop(this, t),
                            this.options.revert
                                ? ((s = (i = this).placeholder.offset()),
                                  (o = {}),
                                  ((n = this.options.axis) && "x" !== n) || (o.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
                                  (n && "y" !== n) || (o.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
                                  (this.reverting = !0),
                                  k(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
                                      i._clear(t);
                                  }))
                                : this._clear(t, e),
                            !1
                        );
                },
                cancel: function () {
                    if (this.dragging) {
                        this._mouseUp(new k.Event("mouseup", { target: null })),
                            "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                        for (var t = this.containers.length - 1; 0 <= t; t--)
                            this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
                                this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), (this.containers[t].containerCache.over = 0));
                    }
                    return (
                        this.placeholder &&
                            (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
                            k.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }),
                            this.domPosition.prev ? k(this.domPosition.prev).after(this.currentItem) : k(this.domPosition.parent).prepend(this.currentItem)),
                        this
                    );
                },
                serialize: function (e) {
                    var t = this._getItemsAsjQuery(e && e.connected),
                        i = [];
                    return (
                        (e = e || {}),
                        k(t).each(function () {
                            var t = (k(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                            t && i.push((e.key || t[1] + "[]") + "=" + (e.key && e.expression ? t[1] : t[2]));
                        }),
                        !i.length && e.key && i.push(e.key + "="),
                        i.join("&")
                    );
                },
                toArray: function (t) {
                    var e = this._getItemsAsjQuery(t && t.connected),
                        i = [];
                    return (
                        (t = t || {}),
                        e.each(function () {
                            i.push(k(t.item || this).attr(t.attribute || "id") || "");
                        }),
                        i
                    );
                },
                _intersectsWith: function (t) {
                    var e = this.positionAbs.left,
                        i = e + this.helperProportions.width,
                        s = this.positionAbs.top,
                        n = s + this.helperProportions.height,
                        o = t.left,
                        r = o + t.width,
                        a = t.top,
                        l = a + t.height,
                        h = this.offset.click.top,
                        c = this.offset.click.left,
                        u = "x" === this.options.axis || (a < s + h && s + h < l),
                        d = "y" === this.options.axis || (o < e + c && e + c < r),
                        p = u && d;
                    return "pointer" === this.options.tolerance ||
                        this.options.forcePointerForContainers ||
                        ("pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"])
                        ? p
                        : e + this.helperProportions.width / 2 > o && r > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > a && l > n - this.helperProportions.height / 2;
                },
                _intersectsWithPointer: function (t) {
                    var e,
                        i,
                        s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                        n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
                    return !!(s && n) && ((e = this._getDragVerticalDirection()), (i = this._getDragHorizontalDirection()), this.floating ? ("right" === i || "down" === e ? 2 : 1) : e && ("down" === e ? 2 : 1));
                },
                _intersectsWithSides: function (t) {
                    var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                        i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                        s = this._getDragVerticalDirection(),
                        n = this._getDragHorizontalDirection();
                    return this.floating && n ? ("right" === n && i) || ("left" === n && !i) : s && (("down" === s && e) || ("up" === s && !e));
                },
                _getDragVerticalDirection: function () {
                    var t = this.positionAbs.top - this.lastPositionAbs.top;
                    return 0 != t && (0 < t ? "down" : "up");
                },
                _getDragHorizontalDirection: function () {
                    var t = this.positionAbs.left - this.lastPositionAbs.left;
                    return 0 != t && (0 < t ? "right" : "left");
                },
                refresh: function (t) {
                    return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this;
                },
                _connectWith: function () {
                    var t = this.options;
                    return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith;
                },
                _getItemsAsjQuery: function (t) {
                    function e() {
                        r.push(this);
                    }
                    var i,
                        s,
                        n,
                        o,
                        r = [],
                        a = [],
                        l = this._connectWith();
                    if (l && t)
                        for (i = l.length - 1; 0 <= i; i--)
                            for (s = (n = k(l[i], this.document[0])).length - 1; 0 <= s; s--)
                                (o = k.data(n[s], this.widgetFullName)) &&
                                    o !== this &&
                                    !o.options.disabled &&
                                    a.push([k.isFunction(o.options.items) ? o.options.items.call(o.element) : k(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                    for (
                        a.push([
                            k.isFunction(this.options.items)
                                ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem })
                                : k(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
                            this,
                        ]),
                            i = a.length - 1;
                        0 <= i;
                        i--
                    )
                        a[i][0].each(e);
                    return k(r);
                },
                _removeCurrentsFromItems: function () {
                    var i = this.currentItem.find(":data(" + this.widgetName + "-item)");
                    this.items = k.grep(this.items, function (t) {
                        for (var e = 0; i.length > e; e++) if (i[e] === t.item[0]) return !1;
                        return !0;
                    });
                },
                _refreshItems: function (t) {
                    (this.items = []), (this.containers = [this]);
                    var e,
                        i,
                        s,
                        n,
                        o,
                        r,
                        a,
                        l,
                        h = this.items,
                        c = [[k.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, { item: this.currentItem }) : k(this.options.items, this.element), this]],
                        u = this._connectWith();
                    if (u && this.ready)
                        for (e = u.length - 1; 0 <= e; e--)
                            for (i = (s = k(u[e], this.document[0])).length - 1; 0 <= i; i--)
                                (n = k.data(s[i], this.widgetFullName)) &&
                                    n !== this &&
                                    !n.options.disabled &&
                                    (c.push([k.isFunction(n.options.items) ? n.options.items.call(n.element[0], t, { item: this.currentItem }) : k(n.options.items, n.element), n]), this.containers.push(n));
                    for (e = c.length - 1; 0 <= e; e--) for (o = c[e][1], i = 0, l = (r = c[e][0]).length; i < l; i++) (a = k(r[i])).data(this.widgetName + "-item", o), h.push({ item: a, instance: o, width: 0, height: 0, left: 0, top: 0 });
                },
                refreshPositions: function (t) {
                    var e, i, s, n;
                    for (
                        this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)),
                            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()),
                            e = this.items.length - 1;
                        0 <= e;
                        e--
                    )
                        ((i = this.items[e]).instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0]) ||
                            ((s = this.options.toleranceElement ? k(this.options.toleranceElement, i.item) : i.item), t || ((i.width = s.outerWidth()), (i.height = s.outerHeight())), (n = s.offset()), (i.left = n.left), (i.top = n.top));
                    if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                    else
                        for (e = this.containers.length - 1; 0 <= e; e--)
                            (n = this.containers[e].element.offset()),
                                (this.containers[e].containerCache.left = n.left),
                                (this.containers[e].containerCache.top = n.top),
                                (this.containers[e].containerCache.width = this.containers[e].element.outerWidth()),
                                (this.containers[e].containerCache.height = this.containers[e].element.outerHeight());
                    return this;
                },
                _createPlaceholder: function (i) {
                    var s,
                        n = (i = i || this).options;
                    (n.placeholder && n.placeholder.constructor !== String) ||
                        ((s = n.placeholder),
                        (n.placeholder = {
                            element: function () {
                                var t = i.currentItem[0].nodeName.toLowerCase(),
                                    e = k("<" + t + ">", i.document[0]);
                                return (
                                    i._addClass(e, "ui-sortable-placeholder", s || i.currentItem[0].className)._removeClass(e, "ui-sortable-helper"),
                                    "tbody" === t
                                        ? i._createTrPlaceholder(i.currentItem.find("tr").eq(0), k("<tr>", i.document[0]).appendTo(e))
                                        : "tr" === t
                                        ? i._createTrPlaceholder(i.currentItem, e)
                                        : "img" === t && e.attr("src", i.currentItem.attr("src")),
                                    s || e.css("visibility", "hidden"),
                                    e
                                );
                            },
                            update: function (t, e) {
                                (s && !n.forcePlaceholderSize) ||
                                    (e.height() || e.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)),
                                    e.width() || e.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)));
                            },
                        })),
                        (i.placeholder = k(n.placeholder.element.call(i.element, i.currentItem))),
                        i.currentItem.after(i.placeholder),
                        n.placeholder.update(i, i.placeholder);
                },
                _createTrPlaceholder: function (t, e) {
                    var i = this;
                    t.children().each(function () {
                        k("<td>&#160;</td>", i.document[0])
                            .attr("colspan", k(this).attr("colspan") || 1)
                            .appendTo(e);
                    });
                },
                _contactContainers: function (t) {
                    for (var e, i, s, n, o, r, a, l, h, c = null, u = null, d = this.containers.length - 1; 0 <= d; d--)
                        if (!k.contains(this.currentItem[0], this.containers[d].element[0]))
                            if (this._intersectsWith(this.containers[d].containerCache)) {
                                if (c && k.contains(this.containers[d].element[0], c.element[0])) continue;
                                (c = this.containers[d]), (u = d);
                            } else this.containers[d].containerCache.over && (this.containers[d]._trigger("out", t, this._uiHash(this)), (this.containers[d].containerCache.over = 0));
                    if (c)
                        if (1 === this.containers.length) this.containers[u].containerCache.over || (this.containers[u]._trigger("over", t, this._uiHash(this)), (this.containers[u].containerCache.over = 1));
                        else {
                            for (i = 1e4, s = null, n = (l = c.floating || this._isFloating(this.currentItem)) ? "left" : "top", o = l ? "width" : "height", h = l ? "pageX" : "pageY", e = this.items.length - 1; 0 <= e; e--)
                                k.contains(this.containers[u].element[0], this.items[e].item[0]) &&
                                    this.items[e].item[0] !== this.currentItem[0] &&
                                    ((r = this.items[e].item.offset()[n]),
                                    (a = !1),
                                    t[h] - r > this.items[e][o] / 2 && (a = !0),
                                    i > Math.abs(t[h] - r) && ((i = Math.abs(t[h] - r)), (s = this.items[e]), (this.direction = a ? "up" : "down")));
                            if (!s && !this.options.dropOnEmpty) return;
                            if (this.currentContainer === this.containers[u])
                                return void (this.currentContainer.containerCache.over || (this.containers[u]._trigger("over", t, this._uiHash()), (this.currentContainer.containerCache.over = 1)));
                            s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[u].element, !0),
                                this._trigger("change", t, this._uiHash()),
                                this.containers[u]._trigger("change", t, this._uiHash(this)),
                                (this.currentContainer = this.containers[u]),
                                this.options.placeholder.update(this.currentContainer, this.placeholder),
                                this.containers[u]._trigger("over", t, this._uiHash(this)),
                                (this.containers[u].containerCache.over = 1);
                        }
                },
                _createHelper: function (t) {
                    var e = this.options,
                        i = k.isFunction(e.helper) ? k(e.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === e.helper ? this.currentItem.clone() : this.currentItem;
                    return (
                        i.parents("body").length || k("parent" !== e.appendTo ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]),
                        i[0] === this.currentItem[0] &&
                            (this._storedCSS = {
                                width: this.currentItem[0].style.width,
                                height: this.currentItem[0].style.height,
                                position: this.currentItem.css("position"),
                                top: this.currentItem.css("top"),
                                left: this.currentItem.css("left"),
                            }),
                        (i[0].style.width && !e.forceHelperSize) || i.width(this.currentItem.width()),
                        (i[0].style.height && !e.forceHelperSize) || i.height(this.currentItem.height()),
                        i
                    );
                },
                _adjustOffsetFromHelper: function (t) {
                    "string" == typeof t && (t = t.split(" ")),
                        k.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
                        "left" in t && (this.offset.click.left = t.left + this.margins.left),
                        "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
                        "top" in t && (this.offset.click.top = t.top + this.margins.top),
                        "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
                },
                _getParentOffset: function () {
                    this.offsetParent = this.helper.offsetParent();
                    var t = this.offsetParent.offset();
                    return (
                        "absolute" === this.cssPosition &&
                            this.scrollParent[0] !== this.document[0] &&
                            k.contains(this.scrollParent[0], this.offsetParent[0]) &&
                            ((t.left += this.scrollParent.scrollLeft()), (t.top += this.scrollParent.scrollTop())),
                        (this.offsetParent[0] === this.document[0].body || (this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && k.ui.ie)) && (t = { top: 0, left: 0 }),
                        { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
                    );
                },
                _getRelativeOffset: function () {
                    if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
                    var t = this.currentItem.position();
                    return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() };
                },
                _cacheMargins: function () {
                    this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 };
                },
                _cacheHelperProportions: function () {
                    this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
                },
                _setContainment: function () {
                    var t,
                        e,
                        i,
                        s = this.options;
                    "parent" === s.containment && (s.containment = this.helper[0].parentNode),
                        ("document" !== s.containment && "window" !== s.containment) ||
                            (this.containment = [
                                0 - this.offset.relative.left - this.offset.parent.left,
                                0 - this.offset.relative.top - this.offset.parent.top,
                                "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left,
                                ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) -
                                    this.helperProportions.height -
                                    this.margins.top,
                            ]),
                        /^(document|window|parent)$/.test(s.containment) ||
                            ((t = k(s.containment)[0]),
                            (e = k(s.containment).offset()),
                            (i = "hidden" !== k(t).css("overflow")),
                            (this.containment = [
                                e.left + (parseInt(k(t).css("borderLeftWidth"), 10) || 0) + (parseInt(k(t).css("paddingLeft"), 10) || 0) - this.margins.left,
                                e.top + (parseInt(k(t).css("borderTopWidth"), 10) || 0) + (parseInt(k(t).css("paddingTop"), 10) || 0) - this.margins.top,
                                e.left +
                                    (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) -
                                    (parseInt(k(t).css("borderLeftWidth"), 10) || 0) -
                                    (parseInt(k(t).css("paddingRight"), 10) || 0) -
                                    this.helperProportions.width -
                                    this.margins.left,
                                e.top +
                                    (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) -
                                    (parseInt(k(t).css("borderTopWidth"), 10) || 0) -
                                    (parseInt(k(t).css("paddingBottom"), 10) || 0) -
                                    this.helperProportions.height -
                                    this.margins.top,
                            ]));
                },
                _convertPositionTo: function (t, e) {
                    e = e || this.position;
                    var i = "absolute" === t ? 1 : -1,
                        s = "absolute" !== this.cssPosition || (this.scrollParent[0] !== this.document[0] && k.contains(this.scrollParent[0], this.offsetParent[0])) ? this.scrollParent : this.offsetParent,
                        n = /(html|body)/i.test(s[0].tagName);
                    return {
                        top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()) * i,
                        left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft()) * i,
                    };
                },
                _generatePosition: function (t) {
                    var e,
                        i,
                        s = this.options,
                        n = t.pageX,
                        o = t.pageY,
                        r = "absolute" !== this.cssPosition || (this.scrollParent[0] !== this.document[0] && k.contains(this.scrollParent[0], this.offsetParent[0])) ? this.scrollParent : this.offsetParent,
                        a = /(html|body)/i.test(r[0].tagName);
                    return (
                        "relative" !== this.cssPosition || (this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0]) || (this.offset.relative = this._getRelativeOffset()),
                        this.originalPosition &&
                            (this.containment &&
                                (t.pageX - this.offset.click.left < this.containment[0] && (n = this.containment[0] + this.offset.click.left),
                                t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top),
                                t.pageX - this.offset.click.left > this.containment[2] && (n = this.containment[2] + this.offset.click.left),
                                t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)),
                            s.grid &&
                                ((e = this.originalPageY + Math.round((o - this.originalPageY) / s.grid[1]) * s.grid[1]),
                                (o =
                                    !this.containment || (e - this.offset.click.top >= this.containment[1] && e - this.offset.click.top <= this.containment[3])
                                        ? e
                                        : e - this.offset.click.top >= this.containment[1]
                                        ? e - s.grid[1]
                                        : e + s.grid[1]),
                                (i = this.originalPageX + Math.round((n - this.originalPageX) / s.grid[0]) * s.grid[0]),
                                (n =
                                    !this.containment || (i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2])
                                        ? i
                                        : i - this.offset.click.left >= this.containment[0]
                                        ? i - s.grid[0]
                                        : i + s.grid[0]))),
                        {
                            top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : r.scrollTop()),
                            left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : r.scrollLeft()),
                        }
                    );
                },
                _rearrange: function (t, e, i, s) {
                    i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), (this.counter = this.counter ? ++this.counter : 1);
                    var n = this.counter;
                    this._delay(function () {
                        n === this.counter && this.refreshPositions(!s);
                    });
                },
                _clear: function (t, e) {
                    function i(e, i, s) {
                        return function (t) {
                            s._trigger(e, t, i._uiHash(i));
                        };
                    }
                    this.reverting = !1;
                    var s,
                        n = [];
                    if ((!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), (this._noFinalSort = null), this.helper[0] === this.currentItem[0])) {
                        for (s in this._storedCSS) ("auto" !== this._storedCSS[s] && "static" !== this._storedCSS[s]) || (this._storedCSS[s] = "");
                        this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
                    } else this.currentItem.show();
                    for (
                        this.fromOutside &&
                            !e &&
                            n.push(function (t) {
                                this._trigger("receive", t, this._uiHash(this.fromOutside));
                            }),
                            (!this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0]) ||
                                e ||
                                n.push(function (t) {
                                    this._trigger("update", t, this._uiHash());
                                }),
                            this !== this.currentContainer &&
                                (e ||
                                    (n.push(function (t) {
                                        this._trigger("remove", t, this._uiHash());
                                    }),
                                    n.push(
                                        function (e) {
                                            return function (t) {
                                                e._trigger("receive", t, this._uiHash(this));
                                            };
                                        }.call(this, this.currentContainer)
                                    ),
                                    n.push(
                                        function (e) {
                                            return function (t) {
                                                e._trigger("update", t, this._uiHash(this));
                                            };
                                        }.call(this, this.currentContainer)
                                    ))),
                            s = this.containers.length - 1;
                        0 <= s;
                        s--
                    )
                        e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), (this.containers[s].containerCache.over = 0));
                    if (
                        (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()),
                        this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
                        this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
                        (this.dragging = !1),
                        e || this._trigger("beforeStop", t, this._uiHash()),
                        this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                        this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), (this.helper = null)),
                        !e)
                    ) {
                        for (s = 0; n.length > s; s++) n[s].call(this, t);
                        this._trigger("stop", t, this._uiHash());
                    }
                    return (this.fromOutside = !1), !this.cancelHelperRemoval;
                },
                _trigger: function () {
                    !1 === k.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
                },
                _uiHash: function (t) {
                    var e = t || this;
                    return { helper: e.helper, placeholder: e.placeholder || k([]), position: e.position, originalPosition: e.originalPosition, offset: e.positionAbs, item: e.currentItem, sender: t ? t.element : null };
                },
            }),
            k.widget("ui.spinner", {
                version: "1.12.1",
                defaultElement: "<input>",
                widgetEventPrefix: "spin",
                options: {
                    classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" },
                    culture: null,
                    icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
                    incremental: !0,
                    max: null,
                    min: null,
                    numberFormat: null,
                    page: 10,
                    step: 1,
                    change: null,
                    spin: null,
                    start: null,
                    stop: null,
                },
                _create: function () {
                    this._setOption("max", this.options.max),
                        this._setOption("min", this.options.min),
                        this._setOption("step", this.options.step),
                        "" !== this.value() && this._value(this.element.val(), !0),
                        this._draw(),
                        this._on(this._events),
                        this._refresh(),
                        this._on(this.window, {
                            beforeunload: function () {
                                this.element.removeAttr("autocomplete");
                            },
                        });
                },
                _getCreateOptions: function () {
                    var s = this._super(),
                        n = this.element;
                    return (
                        k.each(["min", "max", "step"], function (t, e) {
                            var i = n.attr(e);
                            null != i && i.length && (s[e] = i);
                        }),
                        s
                    );
                },
                _events: {
                    keydown: function (t) {
                        this._start(t) && this._keydown(t) && t.preventDefault();
                    },
                    keyup: "_stop",
                    focus: function () {
                        this.previous = this.element.val();
                    },
                    blur: function (t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void (this.previous !== this.element.val() && this._trigger("change", t)));
                    },
                    mousewheel: function (t, e) {
                        if (e) {
                            if (!this.spinning && !this._start(t)) return !1;
                            this._spin((0 < e ? 1 : -1) * this.options.step, t),
                                clearTimeout(this.mousewheelTimer),
                                (this.mousewheelTimer = this._delay(function () {
                                    this.spinning && this._stop(t);
                                }, 100)),
                                t.preventDefault();
                        }
                    },
                    "mousedown .ui-spinner-button": function (t) {
                        function e() {
                            this.element[0] === k.ui.safeActiveElement(this.document[0]) ||
                                (this.element.trigger("focus"),
                                (this.previous = i),
                                this._delay(function () {
                                    this.previous = i;
                                }));
                        }
                        var i = this.element[0] === k.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val();
                        t.preventDefault(),
                            e.call(this),
                            (this.cancelBlur = !0),
                            this._delay(function () {
                                delete this.cancelBlur, e.call(this);
                            }),
                            !1 !== this._start(t) && this._repeat(null, k(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t);
                    },
                    "mouseup .ui-spinner-button": "_stop",
                    "mouseenter .ui-spinner-button": function (t) {
                        return k(t.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(t) && void this._repeat(null, k(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t) : void 0;
                    },
                    "mouseleave .ui-spinner-button": "_stop",
                },
                _enhance: function () {
                    this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
                },
                _draw: function () {
                    this._enhance(),
                        this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"),
                        this._addClass("ui-spinner-input"),
                        this.element.attr("role", "spinbutton"),
                        (this.buttons = this.uiSpinner
                            .children("a")
                            .attr("tabIndex", -1)
                            .attr("aria-hidden", !0)
                            .button({ classes: { "ui-button": "" } })),
                        this._removeClass(this.buttons, "ui-corner-all"),
                        this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"),
                        this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"),
                        this.buttons.first().button({ icon: this.options.icons.up, showLabel: !1 }),
                        this.buttons.last().button({ icon: this.options.icons.down, showLabel: !1 }),
                        this.buttons.height() > Math.ceil(0.5 * this.uiSpinner.height()) && 0 < this.uiSpinner.height() && this.uiSpinner.height(this.uiSpinner.height());
                },
                _keydown: function (t) {
                    var e = this.options,
                        i = k.ui.keyCode;
                    switch (t.keyCode) {
                        case i.UP:
                            return this._repeat(null, 1, t), !0;
                        case i.DOWN:
                            return this._repeat(null, -1, t), !0;
                        case i.PAGE_UP:
                            return this._repeat(null, e.page, t), !0;
                        case i.PAGE_DOWN:
                            return this._repeat(null, -e.page, t), !0;
                    }
                    return !1;
                },
                _start: function (t) {
                    return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), (this.spinning = !0));
                },
                _repeat: function (t, e, i) {
                    (t = t || 500),
                        clearTimeout(this.timer),
                        (this.timer = this._delay(function () {
                            this._repeat(40, e, i);
                        }, t)),
                        this._spin(e * this.options.step, i);
                },
                _spin: function (t, e) {
                    var i = this.value() || 0;
                    this.counter || (this.counter = 1), (i = this._adjustValue(i + t * this._increment(this.counter))), (this.spinning && !1 === this._trigger("spin", e, { value: i })) || (this._value(i), this.counter++);
                },
                _increment: function (t) {
                    var e = this.options.incremental;
                    return e ? (k.isFunction(e) ? e(t) : Math.floor((t * t * t) / 5e4 - (t * t) / 500 + (17 * t) / 200 + 1)) : 1;
                },
                _precision: function () {
                    var t = this._precisionOf(this.options.step);
                    return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
                },
                _precisionOf: function (t) {
                    var e = "" + t,
                        i = e.indexOf(".");
                    return -1 === i ? 0 : e.length - i - 1;
                },
                _adjustValue: function (t) {
                    var e = this.options,
                        i = null !== e.min ? e.min : 0,
                        s = t - i;
                    return (t = i + Math.round(s / e.step) * e.step), (t = parseFloat(t.toFixed(this._precision()))), null !== e.max && t > e.max ? e.max : null !== e.min && e.min > t ? e.min : t;
                },
                _stop: function (t) {
                    this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), (this.counter = 0), (this.spinning = !1), this._trigger("stop", t));
                },
                _setOption: function (t, e) {
                    var i, s, n;
                    return "culture" === t || "numberFormat" === t
                        ? ((i = this._parse(this.element.val())), (this.options[t] = e), void this.element.val(this._format(i)))
                        : (("max" !== t && "min" !== t && "step" !== t) || "string" != typeof e || (e = this._parse(e)),
                          "icons" === t &&
                              ((s = this.buttons.first().find(".ui-icon")),
                              this._removeClass(s, null, this.options.icons.up),
                              this._addClass(s, null, e.up),
                              (n = this.buttons.last().find(".ui-icon")),
                              this._removeClass(n, null, this.options.icons.down),
                              this._addClass(n, null, e.down)),
                          void this._super(t, e));
                },
                _setOptionDisabled: function (t) {
                    this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable");
                },
                _setOptions: e(function (t) {
                    this._super(t);
                }),
                _parse: function (t) {
                    return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t;
                },
                _format: function (t) {
                    return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t;
                },
                _refresh: function () {
                    this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) });
                },
                isValid: function () {
                    var t = this.value();
                    return null !== t && t === this._adjustValue(t);
                },
                _value: function (t, e) {
                    var i;
                    "" === t || (null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), (t = this._format(i)))), this.element.val(t), this._refresh();
                },
                _destroy: function () {
                    this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element);
                },
                stepUp: e(function (t) {
                    this._stepUp(t);
                }),
                _stepUp: function (t) {
                    this._start() && (this._spin((t || 1) * this.options.step), this._stop());
                },
                stepDown: e(function (t) {
                    this._stepDown(t);
                }),
                _stepDown: function (t) {
                    this._start() && (this._spin((t || 1) * -this.options.step), this._stop());
                },
                pageUp: e(function (t) {
                    this._stepUp((t || 1) * this.options.page);
                }),
                pageDown: e(function (t) {
                    this._stepDown((t || 1) * this.options.page);
                }),
                value: function (t) {
                    return arguments.length ? void e(this._value).call(this, t) : this._parse(this.element.val());
                },
                widget: function () {
                    return this.uiSpinner;
                },
            }),
            !1 !== k.uiBackCompat &&
                k.widget("ui.spinner", k.ui.spinner, {
                    _enhance: function () {
                        this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                    },
                    _uiSpinnerHtml: function () {
                        return "<span>";
                    },
                    _buttonHtml: function () {
                        return "<a></a><a></a>";
                    },
                }),
            k.ui.spinner,
            k.widget("ui.tabs", {
                version: "1.12.1",
                delay: 300,
                options: {
                    active: null,
                    classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" },
                    collapsible: !1,
                    event: "click",
                    heightStyle: "content",
                    hide: null,
                    show: null,
                    activate: null,
                    beforeActivate: null,
                    beforeLoad: null,
                    load: null,
                },
                _isLocal:
                    ((ot = /#.*$/),
                    function (t) {
                        var e = t.href.replace(ot, ""),
                            i = location.href.replace(ot, "");
                        try {
                            e = decodeURIComponent(e);
                        } catch (t) {}
                        try {
                            i = decodeURIComponent(i);
                        } catch (t) {}
                        return 1 < t.hash.length && e === i;
                    }),
                _create: function () {
                    var e = this,
                        t = this.options;
                    (this.running = !1),
                        this._addClass("ui-tabs", "ui-widget ui-widget-content"),
                        this._toggleClass("ui-tabs-collapsible", null, t.collapsible),
                        this._processTabs(),
                        (t.active = this._initialActive()),
                        k.isArray(t.disabled) &&
                            (t.disabled = k
                                .unique(
                                    t.disabled.concat(
                                        k.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                                            return e.tabs.index(t);
                                        })
                                    )
                                )
                                .sort()),
                        (this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(t.active) : k()),
                        this._refresh(),
                        this.active.length && this.load(t.active);
                },
                _initialActive: function () {
                    var i = this.options.active,
                        t = this.options.collapsible,
                        s = location.hash.substring(1);
                    return (
                        null === i &&
                            (s &&
                                this.tabs.each(function (t, e) {
                                    return k(e).attr("aria-controls") === s ? ((i = t), !1) : void 0;
                                }),
                            null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
                            (null !== i && -1 !== i) || (i = !!this.tabs.length && 0)),
                        !1 !== i && -1 === (i = this.tabs.index(this.tabs.eq(i))) && (i = !t && 0),
                        !t && !1 === i && this.anchors.length && (i = 0),
                        i
                    );
                },
                _getCreateEventData: function () {
                    return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : k() };
                },
                _tabKeydown: function (t) {
                    var e = k(k.ui.safeActiveElement(this.document[0])).closest("li"),
                        i = this.tabs.index(e),
                        s = !0;
                    if (!this._handlePageNav(t)) {
                        switch (t.keyCode) {
                            case k.ui.keyCode.RIGHT:
                            case k.ui.keyCode.DOWN:
                                i++;
                                break;
                            case k.ui.keyCode.UP:
                            case k.ui.keyCode.LEFT:
                                (s = !1), i--;
                                break;
                            case k.ui.keyCode.END:
                                i = this.anchors.length - 1;
                                break;
                            case k.ui.keyCode.HOME:
                                i = 0;
                                break;
                            case k.ui.keyCode.SPACE:
                                return t.preventDefault(), clearTimeout(this.activating), void this._activate(i);
                            case k.ui.keyCode.ENTER:
                                return t.preventDefault(), clearTimeout(this.activating), void this._activate(i !== this.options.active && i);
                            default:
                                return;
                        }
                        t.preventDefault(),
                            clearTimeout(this.activating),
                            (i = this._focusNextTab(i, s)),
                            t.ctrlKey ||
                                t.metaKey ||
                                (e.attr("aria-selected", "false"),
                                this.tabs.eq(i).attr("aria-selected", "true"),
                                (this.activating = this._delay(function () {
                                    this.option("active", i);
                                }, this.delay)));
                    }
                },
                _panelKeydown: function (t) {
                    this._handlePageNav(t) || (t.ctrlKey && t.keyCode === k.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus")));
                },
                _handlePageNav: function (t) {
                    return t.altKey && t.keyCode === k.ui.keyCode.PAGE_UP
                        ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0)
                        : t.altKey && t.keyCode === k.ui.keyCode.PAGE_DOWN
                        ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0)
                        : void 0;
                },
                _findNextTab: function (t, e) {
                    for (var i = this.tabs.length - 1; -1 !== k.inArray((i < t && (t = 0), t < 0 && (t = i), t), this.options.disabled); ) t = e ? t + 1 : t - 1;
                    return t;
                },
                _focusNextTab: function (t, e) {
                    return (t = this._findNextTab(t, e)), this.tabs.eq(t).trigger("focus"), t;
                },
                _setOption: function (t, e) {
                    return "active" === t
                        ? void this._activate(e)
                        : (this._super(t, e),
                          "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)),
                          "event" === t && this._setupEvents(e),
                          void ("heightStyle" === t && this._setupHeightStyle(e)));
                },
                _sanitizeSelector: function (t) {
                    return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
                },
                refresh: function () {
                    var t = this.options,
                        e = this.tablist.children(":has(a[href])");
                    (t.disabled = k.map(e.filter(".ui-state-disabled"), function (t) {
                        return e.index(t);
                    })),
                        this._processTabs(),
                        !1 !== t.active && this.anchors.length
                            ? this.active.length && !k.contains(this.tablist[0], this.active[0])
                                ? this.tabs.length === t.disabled.length
                                    ? ((t.active = !1), (this.active = k()))
                                    : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1))
                                : (t.active = this.tabs.index(this.active))
                            : ((t.active = !1), (this.active = k())),
                        this._refresh();
                },
                _refresh: function () {
                    this._setOptionDisabled(this.options.disabled),
                        this._setupEvents(this.options.event),
                        this._setupHeightStyle(this.options.heightStyle),
                        this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }),
                        this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }),
                        this.active.length
                            ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }),
                              this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
                              this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" }))
                            : this.tabs.eq(0).attr("tabIndex", 0);
                },
                _processTabs: function () {
                    var l = this,
                        t = this.tabs,
                        e = this.anchors,
                        i = this.panels;
                    (this.tablist = this._getList().attr("role", "tablist")),
                        this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"),
                        this.tablist
                            .on("mousedown" + this.eventNamespace, "> li", function (t) {
                                k(this).is(".ui-state-disabled") && t.preventDefault();
                            })
                            .on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                                k(this).closest("li").is(".ui-state-disabled") && this.blur();
                            }),
                        (this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 })),
                        this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
                        (this.anchors = this.tabs
                            .map(function () {
                                return k("a", this)[0];
                            })
                            .attr({ role: "presentation", tabIndex: -1 })),
                        this._addClass(this.anchors, "ui-tabs-anchor"),
                        (this.panels = k()),
                        this.anchors.each(function (t, e) {
                            var i,
                                s,
                                n,
                                o = k(e).uniqueId().attr("id"),
                                r = k(e).closest("li"),
                                a = r.attr("aria-controls");
                            l._isLocal(e)
                                ? ((n = (i = e.hash).substring(1)), (s = l.element.find(l._sanitizeSelector(i))))
                                : ((i = "#" + (n = r.attr("aria-controls") || k({}).uniqueId()[0].id)), (s = l.element.find(i)).length || (s = l._createPanel(n)).insertAfter(l.panels[t - 1] || l.tablist), s.attr("aria-live", "polite")),
                                s.length && (l.panels = l.panels.add(s)),
                                a && r.data("ui-tabs-aria-controls", a),
                                r.attr({ "aria-controls": n, "aria-labelledby": o }),
                                s.attr("aria-labelledby", o);
                        }),
                        this.panels.attr("role", "tabpanel"),
                        this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
                        t && (this._off(t.not(this.tabs)), this._off(e.not(this.anchors)), this._off(i.not(this.panels)));
                },
                _getList: function () {
                    return this.tablist || this.element.find("ol, ul").eq(0);
                },
                _createPanel: function (t) {
                    return k("<div>").attr("id", t).data("ui-tabs-destroy", !0);
                },
                _setOptionDisabled: function (t) {
                    var e, i, s;
                    for (k.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : (t = !1)), s = 0; (i = this.tabs[s]); s++)
                        (e = k(i)), !0 === t || -1 !== k.inArray(s, t) ? (e.attr("aria-disabled", "true"), this._addClass(e, null, "ui-state-disabled")) : (e.removeAttr("aria-disabled"), this._removeClass(e, null, "ui-state-disabled"));
                    (this.options.disabled = t), this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t);
                },
                _setupEvents: function (t) {
                    var i = {};
                    t &&
                        k.each(t.split(" "), function (t, e) {
                            i[e] = "_eventHandler";
                        }),
                        this._off(this.anchors.add(this.tabs).add(this.panels)),
                        this._on(!0, this.anchors, {
                            click: function (t) {
                                t.preventDefault();
                            },
                        }),
                        this._on(this.anchors, i),
                        this._on(this.tabs, { keydown: "_tabKeydown" }),
                        this._on(this.panels, { keydown: "_panelKeydown" }),
                        this._focusable(this.tabs),
                        this._hoverable(this.tabs);
                },
                _setupHeightStyle: function (t) {
                    var i,
                        e = this.element.parent();
                    "fill" === t
                        ? ((i = e.height()),
                          (i -= this.element.outerHeight() - this.element.height()),
                          this.element.siblings(":visible").each(function () {
                              var t = k(this),
                                  e = t.css("position");
                              "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0));
                          }),
                          this.element
                              .children()
                              .not(this.panels)
                              .each(function () {
                                  i -= k(this).outerHeight(!0);
                              }),
                          this.panels
                              .each(function () {
                                  k(this).height(Math.max(0, i - k(this).innerHeight() + k(this).height()));
                              })
                              .css("overflow", "auto"))
                        : "auto" === t &&
                          ((i = 0),
                          this.panels
                              .each(function () {
                                  i = Math.max(i, k(this).height("").height());
                              })
                              .height(i));
                },
                _eventHandler: function (t) {
                    var e = this.options,
                        i = this.active,
                        s = k(t.currentTarget).closest("li"),
                        n = s[0] === i[0],
                        o = n && e.collapsible,
                        r = o ? k() : this._getPanelForTab(s),
                        a = i.length ? this._getPanelForTab(i) : k(),
                        l = { oldTab: i, oldPanel: a, newTab: o ? k() : s, newPanel: r };
                    t.preventDefault(),
                        s.hasClass("ui-state-disabled") ||
                            s.hasClass("ui-tabs-loading") ||
                            this.running ||
                            (n && !e.collapsible) ||
                            !1 === this._trigger("beforeActivate", t, l) ||
                            ((e.active = !o && this.tabs.index(s)),
                            (this.active = n ? k() : s),
                            this.xhr && this.xhr.abort(),
                            a.length || r.length || k.error("jQuery UI Tabs: Mismatching fragment identifier."),
                            r.length && this.load(this.tabs.index(s), t),
                            this._toggle(t, l));
                },
                _toggle: function (t, e) {
                    function i() {
                        (n.running = !1), n._trigger("activate", t, e);
                    }
                    function s() {
                        n._addClass(e.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), o.length && n.options.show ? n._show(o, n.options.show, i) : (o.show(), i());
                    }
                    var n = this,
                        o = e.newPanel,
                        r = e.oldPanel;
                    (this.running = !0),
                        r.length && this.options.hide
                            ? this._hide(r, this.options.hide, function () {
                                  n._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s();
                              })
                            : (this._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), s()),
                        r.attr("aria-hidden", "true"),
                        e.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }),
                        o.length && r.length
                            ? e.oldTab.attr("tabIndex", -1)
                            : o.length &&
                              this.tabs
                                  .filter(function () {
                                      return 0 === k(this).attr("tabIndex");
                                  })
                                  .attr("tabIndex", -1),
                        o.attr("aria-hidden", "false"),
                        e.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
                },
                _activate: function (t) {
                    var e,
                        i = this._findActive(t);
                    i[0] !== this.active[0] && (i.length || (i = this.active), (e = i.find(".ui-tabs-anchor")[0]), this._eventHandler({ target: e, currentTarget: e, preventDefault: k.noop }));
                },
                _findActive: function (t) {
                    return !1 === t ? k() : this.tabs.eq(t);
                },
                _getIndex: function (t) {
                    return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + k.ui.escapeSelector(t) + "']"))), t;
                },
                _destroy: function () {
                    this.xhr && this.xhr.abort(),
                        this.tablist.removeAttr("role").off(this.eventNamespace),
                        this.anchors.removeAttr("role tabIndex").removeUniqueId(),
                        this.tabs.add(this.panels).each(function () {
                            k.data(this, "ui-tabs-destroy") ? k(this).remove() : k(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
                        }),
                        this.tabs.each(function () {
                            var t = k(this),
                                e = t.data("ui-tabs-aria-controls");
                            e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls");
                        }),
                        this.panels.show(),
                        "content" !== this.options.heightStyle && this.panels.css("height", "");
                },
                enable: function (i) {
                    var t = this.options.disabled;
                    !1 !== t &&
                        ((t =
                            void 0 !== i &&
                            ((i = this._getIndex(i)),
                            k.isArray(t)
                                ? k.map(t, function (t) {
                                      return t !== i ? t : null;
                                  })
                                : k.map(this.tabs, function (t, e) {
                                      return e !== i ? e : null;
                                  }))),
                        this._setOptionDisabled(t));
                },
                disable: function (t) {
                    var e = this.options.disabled;
                    if (!0 !== e) {
                        if (void 0 === t) e = !0;
                        else {
                            if (((t = this._getIndex(t)), -1 !== k.inArray(t, e))) return;
                            e = k.isArray(e) ? k.merge([t], e).sort() : [t];
                        }
                        this._setOptionDisabled(e);
                    }
                },
                load: function (t, s) {
                    t = this._getIndex(t);
                    function n(t, e) {
                        "abort" === e && o.panels.stop(!1, !0), o._removeClass(i, "ui-tabs-loading"), r.removeAttr("aria-busy"), t === o.xhr && delete o.xhr;
                    }
                    var o = this,
                        i = this.tabs.eq(t),
                        e = i.find(".ui-tabs-anchor"),
                        r = this._getPanelForTab(i),
                        a = { tab: i, panel: r };
                    this._isLocal(e[0]) ||
                        ((this.xhr = k.ajax(this._ajaxSettings(e, s, a))),
                        this.xhr &&
                            "canceled" !== this.xhr.statusText &&
                            (this._addClass(i, "ui-tabs-loading"),
                            r.attr("aria-busy", "true"),
                            this.xhr
                                .done(function (t, e, i) {
                                    setTimeout(function () {
                                        r.html(t), o._trigger("load", s, a), n(i, e);
                                    }, 1);
                                })
                                .fail(function (t, e) {
                                    setTimeout(function () {
                                        n(t, e);
                                    }, 1);
                                })));
                },
                _ajaxSettings: function (t, i, s) {
                    var n = this;
                    return {
                        url: t.attr("href").replace(/#.*$/, ""),
                        beforeSend: function (t, e) {
                            return n._trigger("beforeLoad", i, k.extend({ jqXHR: t, ajaxSettings: e }, s));
                        },
                    };
                },
                _getPanelForTab: function (t) {
                    var e = k(t).attr("aria-controls");
                    return this.element.find(this._sanitizeSelector("#" + e));
                },
            }),
            !1 !== k.uiBackCompat &&
                k.widget("ui.tabs", k.ui.tabs, {
                    _processTabs: function () {
                        this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
                    },
                }),
            k.ui.tabs,
            k.widget("ui.tooltip", {
                version: "1.12.1",
                options: {
                    classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" },
                    content: function () {
                        var t = k(this).attr("title") || "";
                        return k("<a>").text(t).html();
                    },
                    hide: !0,
                    items: "[title]:not([disabled])",
                    position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" },
                    show: !0,
                    track: !1,
                    close: null,
                    open: null,
                },
                _addDescribedBy: function (t, e) {
                    var i = (t.attr("aria-describedby") || "").split(/\s+/);
                    i.push(e), t.data("ui-tooltip-id", e).attr("aria-describedby", k.trim(i.join(" ")));
                },
                _removeDescribedBy: function (t) {
                    var e = t.data("ui-tooltip-id"),
                        i = (t.attr("aria-describedby") || "").split(/\s+/),
                        s = k.inArray(e, i);
                    -1 !== s && i.splice(s, 1), t.removeData("ui-tooltip-id"), (i = k.trim(i.join(" "))) ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby");
                },
                _create: function () {
                    this._on({ mouseover: "open", focusin: "open" }),
                        (this.tooltips = {}),
                        (this.parents = {}),
                        (this.liveRegion = k("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body)),
                        this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
                        (this.disabledTitles = k([]));
                },
                _setOption: function (t, e) {
                    var i = this;
                    this._super(t, e),
                        "content" === t &&
                            k.each(this.tooltips, function (t, e) {
                                i._updateContent(e.element);
                            });
                },
                _setOptionDisabled: function (t) {
                    this[t ? "_disable" : "_enable"]();
                },
                _disable: function () {
                    var s = this;
                    k.each(this.tooltips, function (t, e) {
                        var i = k.Event("blur");
                        (i.target = i.currentTarget = e.element[0]), s.close(i, !0);
                    }),
                        (this.disabledTitles = this.disabledTitles.add(
                            this.element
                                .find(this.options.items)
                                .addBack()
                                .filter(function () {
                                    var t = k(this);
                                    return t.is("[title]") ? t.data("ui-tooltip-title", t.attr("title")).removeAttr("title") : void 0;
                                })
                        ));
                },
                _enable: function () {
                    this.disabledTitles.each(function () {
                        var t = k(this);
                        t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"));
                    }),
                        (this.disabledTitles = k([]));
                },
                open: function (t) {
                    var i = this,
                        e = k(t ? t.target : this.element).closest(this.options.items);
                    e.length &&
                        !e.data("ui-tooltip-id") &&
                        (e.attr("title") && e.data("ui-tooltip-title", e.attr("title")),
                        e.data("ui-tooltip-open", !0),
                        t &&
                            "mouseover" === t.type &&
                            e.parents().each(function () {
                                var t,
                                    e = k(this);
                                e.data("ui-tooltip-open") && (((t = k.Event("blur")).target = t.currentTarget = this), i.close(t, !0)),
                                    e.attr("title") && (e.uniqueId(), (i.parents[this.id] = { element: this, title: e.attr("title") }), e.attr("title", ""));
                            }),
                        this._registerCloseHandlers(t, e),
                        this._updateContent(e, t));
                },
                _updateContent: function (e, i) {
                    var t,
                        s = this.options.content,
                        n = this,
                        o = i ? i.type : null;
                    return "string" == typeof s || s.nodeType || s.jquery
                        ? this._open(i, e, s)
                        : void (
                              (t = s.call(e[0], function (t) {
                                  n._delay(function () {
                                      e.data("ui-tooltip-open") && (i && (i.type = o), this._open(i, e, t));
                                  });
                              })) && this._open(i, e, t)
                          );
                },
                _open: function (t, e, i) {
                    function s(t) {
                        (l.of = t), o.is(":hidden") || o.position(l);
                    }
                    var n,
                        o,
                        r,
                        a,
                        l = k.extend({}, this.options.position);
                    if (i) {
                        if ((n = this._find(e))) return void n.tooltip.find(".ui-tooltip-content").html(i);
                        e.is("[title]") && (t && "mouseover" === t.type ? e.attr("title", "") : e.removeAttr("title")),
                            (n = this._tooltip(e)),
                            (o = n.tooltip),
                            this._addDescribedBy(e, o.attr("id")),
                            o.find(".ui-tooltip-content").html(i),
                            this.liveRegion.children().hide(),
                            (a = k("<div>").html(o.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),
                            a.removeAttr("id").find("[id]").removeAttr("id"),
                            a.appendTo(this.liveRegion),
                            this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, { mousemove: s }), s(t)) : o.position(k.extend({ of: e }, this.options.position)),
                            o.hide(),
                            this._show(o, this.options.show),
                            this.options.track &&
                                this.options.show &&
                                this.options.show.delay &&
                                (r = this.delayedShow = setInterval(function () {
                                    o.is(":visible") && (s(l.of), clearInterval(r));
                                }, k.fx.interval)),
                            this._trigger("open", t, { tooltip: o });
                    }
                },
                _registerCloseHandlers: function (t, i) {
                    var e = {
                        keyup: function (t) {
                            var e;
                            t.keyCode === k.ui.keyCode.ESCAPE && (((e = k.Event(t)).currentTarget = i[0]), this.close(e, !0));
                        },
                    };
                    i[0] !== this.element[0] &&
                        (e.remove = function () {
                            this._removeTooltip(this._find(i).tooltip);
                        }),
                        (t && "mouseover" !== t.type) || (e.mouseleave = "close"),
                        (t && "focusin" !== t.type) || (e.focusout = "close"),
                        this._on(!0, i, e);
                },
                close: function (t) {
                    var e,
                        i = this,
                        s = k(t ? t.currentTarget : this.element),
                        n = this._find(s);
                    return n
                        ? ((e = n.tooltip),
                          void (
                              n.closing ||
                              (clearInterval(this.delayedShow),
                              s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")),
                              this._removeDescribedBy(s),
                              (n.hiding = !0),
                              e.stop(!0),
                              this._hide(e, this.options.hide, function () {
                                  i._removeTooltip(k(this));
                              }),
                              s.removeData("ui-tooltip-open"),
                              this._off(s, "mouseleave focusout keyup"),
                              s[0] !== this.element[0] && this._off(s, "remove"),
                              this._off(this.document, "mousemove"),
                              t &&
                                  "mouseleave" === t.type &&
                                  k.each(this.parents, function (t, e) {
                                      k(e.element).attr("title", e.title), delete i.parents[t];
                                  }),
                              (n.closing = !0),
                              this._trigger("close", t, { tooltip: e }),
                              n.hiding || (n.closing = !1))
                          ))
                        : void s.removeData("ui-tooltip-open");
                },
                _tooltip: function (t) {
                    var e = k("<div>").attr("role", "tooltip"),
                        i = k("<div>").appendTo(e),
                        s = e.uniqueId().attr("id");
                    return this._addClass(i, "ui-tooltip-content"), this._addClass(e, "ui-tooltip", "ui-widget ui-widget-content"), e.appendTo(this._appendTo(t)), (this.tooltips[s] = { element: t, tooltip: e });
                },
                _find: function (t) {
                    var e = t.data("ui-tooltip-id");
                    return e ? this.tooltips[e] : null;
                },
                _removeTooltip: function (t) {
                    t.remove(), delete this.tooltips[t.attr("id")];
                },
                _appendTo: function (t) {
                    var e = t.closest(".ui-front, dialog");
                    return e.length || (e = this.document[0].body), e;
                },
                _destroy: function () {
                    var n = this;
                    k.each(this.tooltips, function (t, e) {
                        var i = k.Event("blur"),
                            s = e.element;
                        (i.target = i.currentTarget = s[0]), n.close(i, !0), k("#" + t).remove(), s.data("ui-tooltip-title") && (s.attr("title") || s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"));
                    }),
                        this.liveRegion.remove();
                },
            }),
            !1 !== k.uiBackCompat &&
                k.widget("ui.tooltip", k.ui.tooltip, {
                    options: { tooltipClass: null },
                    _tooltip: function () {
                        var t = this._superApply(arguments);
                        return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t;
                    },
                }),
            k.ui.tooltip;
    }),
    (function (i, t) {
        "function" == typeof define && define.amd
            ? define(["jquery"], i)
            : "object" == typeof module && module.exports
            ? (module.exports = function (t, e) {
                  return void 0 === e && (e = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), i(e), e;
              })
            : i(t);
    })(function (c) {
        var r = "hour",
            a = "minute",
            l = "second",
            s = { d: "day", h: r, m: a, s: l },
            h = {
                list: [l, a, r, "day"],
                next: function (t) {
                    var e = this.list.indexOf(t);
                    return e < this.list.length && this.list[e + 1];
                },
                prev: function (t) {
                    var e = this.list.indexOf(t);
                    return 0 < e && this.list[e - 1];
                },
            },
            n = {
                year: 2034,
                month: 7,
                day: 31,
                hour: 0,
                minute: 0,
                second: 0,
                timeZone: "local",
                ignoreTransferTime: !1,
                layout: "dhms",
                periodic: !1,
                periodInterval: 7,
                periodUnit: "d",
                doubleNumbers: !0,
                effectType: "none",
                lang: "eng",
                headTitle: "",
                footTitle: "",
                afterDeadline: function (t) {
                    t.bodyBlock.html('<p style="font-size: 1.2em;">The countdown is finished!</p>');
                },
            },
            o = { second: !1, minute: !1, hour: !1, day: !1 },
            u = {
                init: function (t) {
                    var e = c.extend({}, n, t || {});
                    (e.itemTypes = d.getItemTypesByLayout(e.layout)), (e._itemsHas = c.extend({}, o));
                    for (var i = 0; i < e.itemTypes.length; i++) e._itemsHas[e.itemTypes[i]] = !0;
                    return this.each(function () {
                        c(this).data("syotimer-options", e), u._render.apply(this, []), u._perSecondHandler.apply(this, []);
                    });
                },
                _render: function () {
                    for (
                        var t = c(this),
                            e = t.data("syotimer-options"),
                            i = d.getTimerItem(),
                            s = c("<div/>", { class: "syotimer__head" }).html(e.headTitle),
                            n = c("<div/>", { class: "syotimer__body" }),
                            o = c("<div/>", { class: "syotimer__footer" }).html(e.footTitle),
                            r = {},
                            a = 0;
                        a < e.itemTypes.length;
                        a++
                    ) {
                        var l = i.clone();
                        l.addClass("syotimer-cell_type_" + e.itemTypes[a]), n.append(l), (r[e.itemTypes[a]] = l);
                    }
                    var h = { headBlock: s, bodyBlock: n, footBlock: o };
                    t.data("syotimer-blocks", h).data("syotimer-items", r).addClass("syotimer").append(s).append(n).append(o);
                },
                _perSecondHandler: function () {
                    var t = c(this),
                        e = t.data("syotimer-options");
                    c(".syotimer-cell > .syotimer-cell__value", t).css("opacity", 1);
                    var i = new Date(),
                        s = new Date(e.year, e.month - 1, e.day, e.hour, e.minute, e.second),
                        n = d.getDifferenceWithTimezone(i, s, e),
                        o = d.getSecondsToDeadLine(n, e);
                    0 <= o ? (u._refreshUnitsDom.apply(this, [o]), u._applyEffectSwitch.apply(this, [e.effectType])) : ((t = c.extend(t, t.data("syotimer-blocks"))), e.afterDeadline(t));
                },
                _refreshUnitsDom: function (t) {
                    var e = c(this),
                        i = e.data("syotimer-options"),
                        s = e.data("syotimer-items"),
                        n = i.itemTypes,
                        o = d.getUnitsToDeadLine(t);
                    i._itemsHas.day || (o.hour += 24 * o.day), i._itemsHas.hour || (o.minute += 60 * o.hour), i._itemsHas.minute || (o.second += 60 * o.minute);
                    for (var r = 0; r < n.length; r++) {
                        var a = n[r],
                            l = o[a],
                            h = s[a];
                        h.data("syotimer-unit-value", l), c(".syotimer-cell__value", h).html(d.format2(l, "day" !== a && i.doubleNumbers)), c(".syotimer-cell__unit", h).html(c.syotimerLang.getNumeral(l, i.lang, a));
                    }
                },
                _applyEffectSwitch: function (t, e) {
                    e = e || l;
                    var i,
                        s,
                        n,
                        o = this,
                        r = c(o);
                    "none" === t
                        ? setTimeout(function () {
                              u._perSecondHandler.apply(o, []);
                          }, 1e3)
                        : "opacity" !== t ||
                          ((i = r.data("syotimer-items")[e]) &&
                              ((s = h.next(e)),
                              (n = i.data("syotimer-unit-value")),
                              c(".syotimer-cell__value", i).animate({ opacity: 0.1 }, 1e3, "linear", function () {
                                  u._perSecondHandler.apply(o, []);
                              }),
                              s && 0 === n && u._applyEffectSwitch.apply(o, [t, s])));
                },
            },
            d = {
                getTimerItem: function () {
                    var t = c("<div/>", { class: "syotimer-cell__value", text: "0" }),
                        e = c("<div/>", { class: "syotimer-cell__unit" }),
                        i = c("<div/>", { class: "syotimer-cell" });
                    return i.append(t).append(e), i;
                },
                getItemTypesByLayout: function (t) {
                    for (var e = [], i = 0; i < t.length; i++) e.push(s[t[i]]);
                    return e;
                },
                getSecondsToDeadLine: function (t, e) {
                    var i,
                        s,
                        n,
                        o,
                        r = t / 1e3,
                        r = Math.floor(r);
                    return e.periodic
                        ? ((o = t / (1e3 * (n = d.getPeriodUnit(e.periodUnit)))),
                          (o = Math.ceil(o)),
                          (o = Math.abs(o)),
                          0 <= r ? ((s = 0 == (s = o % e.periodInterval) ? e.periodInterval : s), --s) : (s = e.periodInterval - (o % e.periodInterval)),
                          0 == (i = r % n) && r < 0 && s--,
                          Math.abs(s * n + i))
                        : r;
                },
                getUnitsToDeadLine: function (t) {
                    var e = "day",
                        i = {};
                    do {
                        var s = d.getPeriodUnit(e);
                        (i[e] = Math.floor(t / s)), (t %= s);
                    } while ((e = h.prev(e)));
                    return i;
                },
                getPeriodUnit: function (t) {
                    switch (t) {
                        case "d":
                        case "day":
                            return 86400;
                        case "h":
                        case r:
                            return 3600;
                        case "m":
                        case a:
                            return 60;
                        case "s":
                        case l:
                            return 1;
                    }
                },
                getDifferenceWithTimezone: function (t, e, i) {
                    var s = e.getTime() - t.getTime(),
                        n = 0,
                        o = 0;
                    return (
                        "local" !== i.timeZone && (n = 1e3 * (parseFloat(i.timeZone) * d.getPeriodUnit(r) - -t.getTimezoneOffset() * d.getPeriodUnit(a))),
                        i.ignoreTransferTime && (o = 1e3 * (-t.getTimezoneOffset() * d.getPeriodUnit(a) - -e.getTimezoneOffset() * d.getPeriodUnit(a))),
                        s - (n + o)
                    );
                },
                format2: function (t, e) {
                    return (e = !1 !== e), t <= 9 && e ? "0" + t : "" + t;
                },
            },
            i = {
                setOption: function (t, e) {
                    var i = c(this),
                        s = i.data("syotimer-options");
                    s.hasOwnProperty(t) && ((s[t] = e), i.data("syotimer-options", s));
                },
            };
        (c.fn.syotimer = function (t) {
            if ("string" == typeof t && "setOption" === t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return this.each(function () {
                    i[t].apply(this, e);
                });
            }
            if (null == t || "object" == typeof t) return u.init.apply(this, [t]);
            c.error("SyoTimer. Error in call methods: methods is not exist");
        }),
            (c.syotimerLang = {
                rus: { second: ["секунда", "секунды", "секунд"], minute: ["минута", "минуты", "минут"], hour: ["час", "часа", "часов"], day: ["день", "дня", "дней"], handler: "rusNumeral" },
                eng: { second: ["second", "seconds"], minute: ["minute", "minutes"], hour: ["hour", "hours"], day: ["day", "days"] },
                por: { second: ["segundo", "segundos"], minute: ["minuto", "minutos"], hour: ["hora", "horas"], day: ["dia", "dias"] },
                spa: { second: ["segundo", "segundos"], minute: ["minuto", "minutos"], hour: ["hora", "horas"], day: ["día", "días"] },
                heb: { second: ["שניה", "שניות"], minute: ["דקה", "דקות"], hour: ["שעה", "שעות"], day: ["יום", "ימים"] },
                universal: function (t) {
                    return 1 === t ? 0 : 1;
                },
                rusNumeral: function (t) {
                    return 4 < t % 100 && t % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][t % 10 < 5 ? t % 10 : 5];
                },
                getNumeral: function (t, e, i) {
                    var s = this[c.syotimerLang[e].handler || "universal"](t);
                    return c.syotimerLang[e][i][s];
                },
            });
    }, window.jQuery),
    (function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
    })(function (c) {
        function t() {}
        function u(t, e) {
            m.ev.on("mfp" + t + i, e);
        }
        function d(t, e, i, s) {
            var n = document.createElement("div");
            return (n.className = "mfp-" + t), i && (n.innerHTML = i), s ? e && e.appendChild(n) : ((n = c(n)), e && n.appendTo(e)), n;
        }
        function p(t, e) {
            m.ev.triggerHandler("mfp" + t, e), m.st.callbacks && ((t = t.charAt(0).toLowerCase() + t.slice(1)), m.st.callbacks[t] && m.st.callbacks[t].apply(m, c.isArray(e) ? e : [e]));
        }
        function f(t) {
            return (t === e && m.currTemplate.closeBtn) || ((m.currTemplate.closeBtn = c(m.st.closeMarkup.replace("%title%", m.st.tClose))), (e = t)), m.currTemplate.closeBtn;
        }
        function o() {
            c.magnificPopup.instance || ((m = new t()).init(), (c.magnificPopup.instance = m));
        }
        var m,
            s,
            g,
            n,
            v,
            e,
            a = "Close",
            l = "BeforeClose",
            y = "MarkupParse",
            i = ".mfp",
            _ = "mfp-ready",
            r = "mfp-removing",
            h = "mfp-prevent-close",
            b = !!window.jQuery,
            w = c(window);
        (t.prototype = {
            constructor: t,
            init: function () {
                var t = navigator.appVersion;
                (m.isLowIE = m.isIE8 = document.all && !document.addEventListener),
                    (m.isAndroid = /android/gi.test(t)),
                    (m.isIOS = /iphone|ipad|ipod/gi.test(t)),
                    (m.supportsTransition = (function () {
                        var t = document.createElement("p").style,
                            e = ["ms", "O", "Moz", "Webkit"];
                        if (void 0 !== t.transition) return !0;
                        for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
                        return !1;
                    })()),
                    (m.probablyMobile = m.isAndroid || m.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
                    (g = c(document)),
                    (m.popupsCache = {});
            },
            open: function (t) {
                if (!1 === t.isObj) {
                    (m.items = t.items.toArray()), (m.index = 0);
                    for (var e, i = t.items, s = 0; s < i.length; s++)
                        if (((e = i[s]).parsed && (e = e.el[0]), e === t.el[0])) {
                            m.index = s;
                            break;
                        }
                } else (m.items = c.isArray(t.items) ? t.items : [t.items]), (m.index = t.index || 0);
                if (!m.isOpen) {
                    (m.types = []),
                        (v = ""),
                        t.mainEl && t.mainEl.length ? (m.ev = t.mainEl.eq(0)) : (m.ev = g),
                        t.key ? (m.popupsCache[t.key] || (m.popupsCache[t.key] = {}), (m.currTemplate = m.popupsCache[t.key])) : (m.currTemplate = {}),
                        (m.st = c.extend(!0, {}, c.magnificPopup.defaults, t)),
                        (m.fixedContentPos = "auto" === m.st.fixedContentPos ? !m.probablyMobile : m.st.fixedContentPos),
                        m.st.modal && ((m.st.closeOnContentClick = !1), (m.st.closeOnBgClick = !1), (m.st.showCloseBtn = !1), (m.st.enableEscapeKey = !1)),
                        m.bgOverlay ||
                            ((m.bgOverlay = d("bg").on("click.mfp", function () {
                                m.close();
                            })),
                            (m.wrap = d("wrap")
                                .attr("tabindex", -1)
                                .on("click.mfp", function (t) {
                                    m._checkIfClose(t.target) && m.close();
                                })),
                            (m.container = d("container", m.wrap))),
                        (m.contentContainer = d("content")),
                        m.st.preloader && (m.preloader = d("preloader", m.container, m.st.tLoading));
                    var n = c.magnificPopup.modules;
                    for (s = 0; s < n.length; s++) {
                        var o = (o = n[s]).charAt(0).toUpperCase() + o.slice(1);
                        m["init" + o].call(m);
                    }
                    p("BeforeOpen"),
                        m.st.showCloseBtn &&
                            (m.st.closeBtnInside
                                ? (u(y, function (t, e, i, s) {
                                      i.close_replaceWith = f(s.type);
                                  }),
                                  (v += " mfp-close-btn-in"))
                                : m.wrap.append(f())),
                        m.st.alignTop && (v += " mfp-align-top"),
                        m.fixedContentPos ? m.wrap.css({ overflow: m.st.overflowY, overflowX: "hidden", overflowY: m.st.overflowY }) : m.wrap.css({ top: w.scrollTop(), position: "absolute" }),
                        (!1 !== m.st.fixedBgPos && ("auto" !== m.st.fixedBgPos || m.fixedContentPos)) || m.bgOverlay.css({ height: g.height(), position: "absolute" }),
                        m.st.enableEscapeKey &&
                            g.on("keyup.mfp", function (t) {
                                27 === t.keyCode && m.close();
                            }),
                        w.on("resize.mfp", function () {
                            m.updateSize();
                        }),
                        m.st.closeOnContentClick || (v += " mfp-auto-cursor"),
                        v && m.wrap.addClass(v);
                    var r,
                        a = (m.wH = w.height()),
                        l = {};
                    m.fixedContentPos && m._hasScrollBar(a) && (r = m._getScrollbarSize()) && (l.marginRight = r), m.fixedContentPos && (m.isIE7 ? c("body, html").css("overflow", "hidden") : (l.overflow = "hidden"));
                    var h = m.st.mainClass;
                    return (
                        m.isIE7 && (h += " mfp-ie7"),
                        h && m._addClassToMFP(h),
                        m.updateItemHTML(),
                        p("BuildControls"),
                        c("html").css(l),
                        m.bgOverlay.add(m.wrap).prependTo(m.st.prependTo || c(document.body)),
                        (m._lastFocusedEl = document.activeElement),
                        setTimeout(function () {
                            m.content ? (m._addClassToMFP(_), m._setFocus()) : m.bgOverlay.addClass(_), g.on("focusin.mfp", m._onFocusIn);
                        }, 16),
                        (m.isOpen = !0),
                        m.updateSize(a),
                        p("Open"),
                        t
                    );
                }
                m.updateItemHTML();
            },
            close: function () {
                m.isOpen &&
                    (p(l),
                    (m.isOpen = !1),
                    m.st.removalDelay && !m.isLowIE && m.supportsTransition
                        ? (m._addClassToMFP(r),
                          setTimeout(function () {
                              m._close();
                          }, m.st.removalDelay))
                        : m._close());
            },
            _close: function () {
                p(a);
                var t,
                    e = r + " " + _ + " ";
                m.bgOverlay.detach(),
                    m.wrap.detach(),
                    m.container.empty(),
                    m.st.mainClass && (e += m.st.mainClass + " "),
                    m._removeClassFromMFP(e),
                    m.fixedContentPos && ((t = { marginRight: "" }), m.isIE7 ? c("body, html").css("overflow", "") : (t.overflow = ""), c("html").css(t)),
                    g.off("keyup.mfp focusin.mfp"),
                    m.ev.off(i),
                    m.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                    m.bgOverlay.attr("class", "mfp-bg"),
                    m.container.attr("class", "mfp-container"),
                    !m.st.showCloseBtn || (m.st.closeBtnInside && !0 !== m.currTemplate[m.currItem.type]) || (m.currTemplate.closeBtn && m.currTemplate.closeBtn.detach()),
                    m.st.autoFocusLast && m._lastFocusedEl && c(m._lastFocusedEl).focus(),
                    (m.currItem = null),
                    (m.content = null),
                    (m.currTemplate = null),
                    (m.prevHeight = 0),
                    p("AfterClose");
            },
            updateSize: function (t) {
                var e, i;
                m.isIOS ? ((e = document.documentElement.clientWidth / window.innerWidth), (i = window.innerHeight * e), m.wrap.css("height", i), (m.wH = i)) : (m.wH = t || w.height()),
                    m.fixedContentPos || m.wrap.css("height", m.wH),
                    p("Resize");
            },
            updateItemHTML: function () {
                var t = m.items[m.index];
                m.contentContainer.detach(), m.content && m.content.detach(), t.parsed || (t = m.parseEl(m.index));
                var e,
                    i = t.type;
                p("BeforeChange", [m.currItem ? m.currItem.type : "", i]),
                    (m.currItem = t),
                    m.currTemplate[i] || ((e = !!m.st[i] && m.st[i].markup), p("FirstMarkupParse", e), (m.currTemplate[i] = !e || c(e))),
                    n && n !== t.type && m.container.removeClass("mfp-" + n + "-holder");
                var s = m["get" + i.charAt(0).toUpperCase() + i.slice(1)](t, m.currTemplate[i]);
                m.appendContent(s, i), (t.preloaded = !0), p("Change", t), (n = t.type), m.container.prepend(m.contentContainer), p("AfterChange");
            },
            appendContent: function (t, e) {
                (m.content = t) ? (m.st.showCloseBtn && m.st.closeBtnInside && !0 === m.currTemplate[e] ? m.content.find(".mfp-close").length || m.content.append(f()) : (m.content = t)) : (m.content = ""),
                    p("BeforeAppend"),
                    m.container.addClass("mfp-" + e + "-holder"),
                    m.contentContainer.append(m.content);
            },
            parseEl: function (t) {
                var e,
                    i = m.items[t];
                if ((i = i.tagName ? { el: c(i) } : ((e = i.type), { data: i, src: i.src })).el) {
                    for (var s = m.types, n = 0; n < s.length; n++)
                        if (i.el.hasClass("mfp-" + s[n])) {
                            e = s[n];
                            break;
                        }
                    (i.src = i.el.attr("data-mfp-src")), i.src || (i.src = i.el.attr("href"));
                }
                return (i.type = e || m.st.type || "inline"), (i.index = t), (i.parsed = !0), (m.items[t] = i), p("ElementParse", i), m.items[t];
            },
            addGroup: function (e, i) {
                function t(t) {
                    (t.mfpEl = this), m._openClick(t, e, i);
                }
                var s = "click.magnificPopup";
                ((i = i || {}).mainEl = e), i.items ? ((i.isObj = !0), e.off(s).on(s, t)) : ((i.isObj = !1), i.delegate ? e.off(s).on(s, i.delegate, t) : (i.items = e).off(s).on(s, t));
            },
            _openClick: function (t, e, i) {
                if ((void 0 !== i.midClick ? i.midClick : c.magnificPopup.defaults.midClick) || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
                    var s = void 0 !== i.disableOn ? i.disableOn : c.magnificPopup.defaults.disableOn;
                    if (s)
                        if (c.isFunction(s)) {
                            if (!s.call(m)) return !0;
                        } else if (w.width() < s) return !0;
                    t.type && (t.preventDefault(), m.isOpen && t.stopPropagation()), (i.el = c(t.mfpEl)), i.delegate && (i.items = e.find(i.delegate)), m.open(i);
                }
            },
            updateStatus: function (t, e) {
                var i;
                m.preloader &&
                    (s !== t && m.container.removeClass("mfp-s-" + s),
                    e || "loading" !== t || (e = m.st.tLoading),
                    p("UpdateStatus", (i = { status: t, text: e })),
                    (t = i.status),
                    (e = i.text),
                    m.preloader.html(e),
                    m.preloader.find("a").on("click", function (t) {
                        t.stopImmediatePropagation();
                    }),
                    m.container.addClass("mfp-s-" + t),
                    (s = t));
            },
            _checkIfClose: function (t) {
                if (!c(t).hasClass(h)) {
                    var e = m.st.closeOnContentClick,
                        i = m.st.closeOnBgClick;
                    if (e && i) return !0;
                    if (!m.content || c(t).hasClass("mfp-close") || (m.preloader && t === m.preloader[0])) return !0;
                    if (t === m.content[0] || c.contains(m.content[0], t)) {
                        if (e) return !0;
                    } else if (i && c.contains(document, t)) return !0;
                    return !1;
                }
            },
            _addClassToMFP: function (t) {
                m.bgOverlay.addClass(t), m.wrap.addClass(t);
            },
            _removeClassFromMFP: function (t) {
                this.bgOverlay.removeClass(t), m.wrap.removeClass(t);
            },
            _hasScrollBar: function (t) {
                return (m.isIE7 ? g.height() : document.body.scrollHeight) > (t || w.height());
            },
            _setFocus: function () {
                (m.st.focus ? m.content.find(m.st.focus).eq(0) : m.wrap).focus();
            },
            _onFocusIn: function (t) {
                return t.target === m.wrap[0] || c.contains(m.wrap[0], t.target) ? void 0 : (m._setFocus(), !1);
            },
            _parseMarkup: function (n, t, e) {
                var o;
                e.data && (t = c.extend(e.data, t)),
                    p(y, [n, t, e]),
                    c.each(t, function (t, e) {
                        return (
                            void 0 === e ||
                            !1 === e ||
                            void (1 < (o = t.split("_")).length
                                ? 0 < (i = n.find(".mfp-" + o[0])).length &&
                                  ("replaceWith" === (s = o[1])
                                      ? i[0] !== e[0] && i.replaceWith(e)
                                      : "img" === s
                                      ? i.is("img")
                                          ? i.attr("src", e)
                                          : i.replaceWith(c("<img>").attr("src", e).attr("class", i.attr("class")))
                                      : i.attr(o[1], e))
                                : n.find(".mfp-" + t).html(e))
                        );
                        var i, s;
                    });
            },
            _getScrollbarSize: function () {
                var t;
                return (
                    void 0 === m.scrollbarSize &&
                        (((t = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
                        document.body.appendChild(t),
                        (m.scrollbarSize = t.offsetWidth - t.clientWidth),
                        document.body.removeChild(t)),
                    m.scrollbarSize
                );
            },
        }),
            (c.magnificPopup = {
                instance: null,
                proto: t.prototype,
                modules: [],
                open: function (t, e) {
                    return o(), ((t = t ? c.extend(!0, {}, t) : {}).isObj = !0), (t.index = e || 0), this.instance.open(t);
                },
                close: function () {
                    return c.magnificPopup.instance && c.magnificPopup.instance.close();
                },
                registerModule: function (t, e) {
                    e.options && (c.magnificPopup.defaults[t] = e.options), c.extend(this.proto, e.proto), this.modules.push(t);
                },
                defaults: {
                    disableOn: 0,
                    key: null,
                    midClick: !1,
                    mainClass: "",
                    preloader: !0,
                    focus: "",
                    closeOnContentClick: !1,
                    closeOnBgClick: !0,
                    closeBtnInside: !0,
                    showCloseBtn: !0,
                    enableEscapeKey: !0,
                    modal: !1,
                    alignTop: !1,
                    removalDelay: 0,
                    prependTo: null,
                    fixedContentPos: "auto",
                    fixedBgPos: "auto",
                    overflowY: "auto",
                    closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                    tClose: "Close (Esc)",
                    tLoading: "Loading...",
                    autoFocusLast: !0,
                },
            }),
            (c.fn.magnificPopup = function (t) {
                o();
                var e,
                    i,
                    s,
                    n = c(this);
                return (
                    "string" == typeof t
                        ? "open" === t
                            ? ((e = b ? n.data("magnificPopup") : n[0].magnificPopup),
                              (i = parseInt(arguments[1], 10) || 0),
                              (s = e.items ? e.items[i] : ((s = n), e.delegate && (s = s.find(e.delegate)), s.eq(i))),
                              m._openClick({ mfpEl: s }, n, e))
                            : m.isOpen && m[t].apply(m, Array.prototype.slice.call(arguments, 1))
                        : ((t = c.extend(!0, {}, t)), b ? n.data("magnificPopup", t) : (n[0].magnificPopup = t), m.addGroup(n, t)),
                    n
                );
            });
        function x() {
            T && (C.after(T.addClass(k)).detach(), (T = null));
        }
        var k,
            C,
            T,
            S = "inline";
        c.magnificPopup.registerModule(S, {
            options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
            proto: {
                initInline: function () {
                    m.types.push(S),
                        u(a + "." + S, function () {
                            x();
                        });
                },
                getInline: function (t, e) {
                    if ((x(), t.src)) {
                        var i,
                            s = m.st.inline,
                            n = c(t.src);
                        return (
                            n.length
                                ? ((i = n[0].parentNode) && i.tagName && (C || ((k = s.hiddenClass), (C = d(k)), (k = "mfp-" + k)), (T = n.after(C).detach().removeClass(k))), m.updateStatus("ready"))
                                : (m.updateStatus("error", s.tNotFound), (n = c("<div>"))),
                            (t.inlineElement = n)
                        );
                    }
                    return m.updateStatus("ready"), m._parseMarkup(e, {}, t), e;
                },
            },
        });
        function D() {
            E && c(document.body).removeClass(E);
        }
        function I() {
            D(), m.req && m.req.abort();
        }
        var E,
            A = "ajax";
        c.magnificPopup.registerModule(A, {
            options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
            proto: {
                initAjax: function () {
                    m.types.push(A), (E = m.st.ajax.cursor), u(a + "." + A, I), u("BeforeChange.ajax", I);
                },
                getAjax: function (n) {
                    E && c(document.body).addClass(E), m.updateStatus("loading");
                    var t = c.extend(
                        {
                            url: n.src,
                            success: function (t, e, i) {
                                var s = { data: t, xhr: i };
                                p("ParseAjax", s),
                                    m.appendContent(c(s.data), A),
                                    (n.finished = !0),
                                    D(),
                                    m._setFocus(),
                                    setTimeout(function () {
                                        m.wrap.addClass(_);
                                    }, 16),
                                    m.updateStatus("ready"),
                                    p("AjaxContentAdded");
                            },
                            error: function () {
                                D(), (n.finished = n.loadError = !0), m.updateStatus("error", m.st.ajax.tError.replace("%url%", n.src));
                            },
                        },
                        m.st.ajax.settings
                    );
                    return (m.req = c.ajax(t)), "";
                },
            },
        });
        var P;
        c.magnificPopup.registerModule("image", {
            options: {
                markup:
                    '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.',
            },
            proto: {
                initImage: function () {
                    var t = m.st.image,
                        e = ".image";
                    m.types.push("image"),
                        u("Open" + e, function () {
                            "image" === m.currItem.type && t.cursor && c(document.body).addClass(t.cursor);
                        }),
                        u(a + e, function () {
                            t.cursor && c(document.body).removeClass(t.cursor), w.off("resize.mfp");
                        }),
                        u("Resize" + e, m.resizeImage),
                        m.isLowIE && u("AfterChange", m.resizeImage);
                },
                resizeImage: function () {
                    var t,
                        e = m.currItem;
                    e && e.img && m.st.image.verticalFit && ((t = 0), m.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", m.wH - t));
                },
                _onImageHasSize: function (t) {
                    t.img && ((t.hasSize = !0), P && clearInterval(P), (t.isCheckingImgSize = !1), p("ImageHasSize", t), t.imgHidden && (m.content && m.content.removeClass("mfp-loading"), (t.imgHidden = !1)));
                },
                findImageSize: function (e) {
                    var i = 0,
                        s = e.img[0],
                        n = function (t) {
                            P && clearInterval(P),
                                (P = setInterval(function () {
                                    return 0 < s.naturalWidth ? void m._onImageHasSize(e) : (200 < i && clearInterval(P), void (3 === ++i ? n(10) : 40 === i ? n(50) : 100 === i && n(500)));
                                }, t));
                        };
                    n(1);
                },
                getImage: function (t, e) {
                    var i,
                        s = 0,
                        n = function () {
                            t &&
                                (t.img[0].complete
                                    ? (t.img.off(".mfploader"), t === m.currItem && (m._onImageHasSize(t), m.updateStatus("ready")), (t.hasSize = !0), (t.loaded = !0), p("ImageLoadComplete"))
                                    : ++s < 200
                                    ? setTimeout(n, 100)
                                    : o());
                        },
                        o = function () {
                            t && (t.img.off(".mfploader"), t === m.currItem && (m._onImageHasSize(t), m.updateStatus("error", r.tError.replace("%url%", t.src))), (t.hasSize = !0), (t.loaded = !0), (t.loadError = !0));
                        },
                        r = m.st.image,
                        a = e.find(".mfp-img");
                    return (
                        a.length &&
                            (((i = document.createElement("img")).className = "mfp-img"),
                            t.el && t.el.find("img").length && (i.alt = t.el.find("img").attr("alt")),
                            (t.img = c(i).on("load.mfploader", n).on("error.mfploader", o)),
                            (i.src = t.src),
                            a.is("img") && (t.img = t.img.clone()),
                            0 < (i = t.img[0]).naturalWidth ? (t.hasSize = !0) : i.width || (t.hasSize = !1)),
                        m._parseMarkup(
                            e,
                            {
                                title: (function (t) {
                                    if (t.data && void 0 !== t.data.title) return t.data.title;
                                    var e = m.st.image.titleSrc;
                                    if (e) {
                                        if (c.isFunction(e)) return e.call(m, t);
                                        if (t.el) return t.el.attr(e) || "";
                                    }
                                    return "";
                                })(t),
                                img_replaceWith: t.img,
                            },
                            t
                        ),
                        m.resizeImage(),
                        t.hasSize
                            ? (P && clearInterval(P), t.loadError ? (e.addClass("mfp-loading"), m.updateStatus("error", r.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), m.updateStatus("ready")))
                            : (m.updateStatus("loading"), (t.loading = !0), t.hasSize || ((t.imgHidden = !0), e.addClass("mfp-loading"), m.findImageSize(t))),
                        e
                    );
                },
            },
        });
        var O;
        c.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function (t) {
                    return t.is("img") ? t : t.find("img");
                },
            },
            proto: {
                initZoom: function () {
                    var t,
                        e,
                        i,
                        s,
                        n,
                        o,
                        r = m.st.zoom;
                    r.enabled &&
                        m.supportsTransition &&
                        ((s = r.duration),
                        (n = function (t) {
                            var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + r.duration / 1e3 + "s " + r.easing,
                                s = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                n = "transition";
                            return (s["-webkit-" + n] = s["-moz-" + n] = s["-o-" + n] = s[n] = i), e.css(s), e;
                        }),
                        (o = function () {
                            m.content.css("visibility", "visible");
                        }),
                        u("BuildControls.zoom", function () {
                            if (m._allowZoom()) {
                                if ((clearTimeout(e), m.content.css("visibility", "hidden"), !(t = m._getItemToZoom()))) return void o();
                                (i = n(t)).css(m._getOffset()),
                                    m.wrap.append(i),
                                    (e = setTimeout(function () {
                                        i.css(m._getOffset(!0)),
                                            (e = setTimeout(function () {
                                                o(),
                                                    setTimeout(function () {
                                                        i.remove(), (t = i = null), p("ZoomAnimationEnded");
                                                    }, 16);
                                            }, s));
                                    }, 16));
                            }
                        }),
                        u(l + ".zoom", function () {
                            if (m._allowZoom()) {
                                if ((clearTimeout(e), (m.st.removalDelay = s), !t)) {
                                    if (!(t = m._getItemToZoom())) return;
                                    i = n(t);
                                }
                                i.css(m._getOffset(!0)),
                                    m.wrap.append(i),
                                    m.content.css("visibility", "hidden"),
                                    setTimeout(function () {
                                        i.css(m._getOffset());
                                    }, 16);
                            }
                        }),
                        u(a + ".zoom", function () {
                            m._allowZoom() && (o(), i && i.remove(), (t = null));
                        }));
                },
                _allowZoom: function () {
                    return "image" === m.currItem.type;
                },
                _getItemToZoom: function () {
                    return !!m.currItem.hasSize && m.currItem.img;
                },
                _getOffset: function (t) {
                    var e = t ? m.currItem.img : m.st.zoom.opener(m.currItem.el || m.currItem),
                        i = e.offset(),
                        s = parseInt(e.css("padding-top"), 10),
                        n = parseInt(e.css("padding-bottom"), 10);
                    i.top -= c(window).scrollTop() - s;
                    var o = { width: e.width(), height: (b ? e.innerHeight() : e[0].offsetHeight) - n - s };
                    return void 0 === O && (O = void 0 !== document.createElement("p").style.MozTransform), O ? (o["-moz-transform"] = o.transform = "translate(" + i.left + "px," + i.top + "px)") : ((o.left = i.left), (o.top = i.top)), o;
                },
            },
        });
        function M(t) {
            var e;
            !m.currTemplate[z] || ((e = m.currTemplate[z].find("iframe")).length && (t || (e[0].src = "//about:blank"), m.isIE8 && e.css("display", t ? "block" : "none")));
        }
        var z = "iframe";
        c.magnificPopup.registerModule(z, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" },
                    vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
                    gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
                },
            },
            proto: {
                initIframe: function () {
                    m.types.push(z),
                        u("BeforeChange", function (t, e, i) {
                            e !== i && (e === z ? M() : i === z && M(!0));
                        }),
                        u(a + "." + z, function () {
                            M();
                        });
                },
                getIframe: function (t, e) {
                    var i = t.src,
                        s = m.st.iframe;
                    c.each(s.patterns, function () {
                        return -1 < i.indexOf(this.index) ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), (i = this.src.replace("%id%", i)), !1) : void 0;
                    });
                    var n = {};
                    return s.srcAction && (n[s.srcAction] = i), m._parseMarkup(e, n, t), m.updateStatus("ready"), e;
                },
            },
        });
        function $(t) {
            var e = m.items.length;
            return e - 1 < t ? t - e : t < 0 ? e + t : t;
        }
        function H(t, e, i) {
            return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
        }
        c.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%",
            },
            proto: {
                initGallery: function () {
                    var o = m.st.gallery,
                        t = ".mfp-gallery";
                    return (
                        (m.direction = !0),
                        !(!o || !o.enabled) &&
                            ((v += " mfp-gallery"),
                            u("Open" + t, function () {
                                o.navigateByImgClick &&
                                    m.wrap.on("click" + t, ".mfp-img", function () {
                                        return 1 < m.items.length ? (m.next(), !1) : void 0;
                                    }),
                                    g.on("keydown" + t, function (t) {
                                        37 === t.keyCode ? m.prev() : 39 === t.keyCode && m.next();
                                    });
                            }),
                            u("UpdateStatus" + t, function (t, e) {
                                e.text && (e.text = H(e.text, m.currItem.index, m.items.length));
                            }),
                            u(y + t, function (t, e, i, s) {
                                var n = m.items.length;
                                i.counter = 1 < n ? H(o.tCounter, s.index, n) : "";
                            }),
                            u("BuildControls" + t, function () {
                                var t, e, i;
                                1 < m.items.length &&
                                    o.arrows &&
                                    !m.arrowLeft &&
                                    ((t = o.arrowMarkup),
                                    (e = m.arrowLeft = c(t.replace(/%title%/gi, o.tPrev).replace(/%dir%/gi, "left")).addClass(h)),
                                    (i = m.arrowRight = c(t.replace(/%title%/gi, o.tNext).replace(/%dir%/gi, "right")).addClass(h)),
                                    e.click(function () {
                                        m.prev();
                                    }),
                                    i.click(function () {
                                        m.next();
                                    }),
                                    m.container.append(e.add(i)));
                            }),
                            u("Change" + t, function () {
                                m._preloadTimeout && clearTimeout(m._preloadTimeout),
                                    (m._preloadTimeout = setTimeout(function () {
                                        m.preloadNearbyImages(), (m._preloadTimeout = null);
                                    }, 16));
                            }),
                            void u(a + t, function () {
                                g.off(t), m.wrap.off("click" + t), (m.arrowRight = m.arrowLeft = null);
                            }))
                    );
                },
                next: function () {
                    (m.direction = !0), (m.index = $(m.index + 1)), m.updateItemHTML();
                },
                prev: function () {
                    (m.direction = !1), (m.index = $(m.index - 1)), m.updateItemHTML();
                },
                goTo: function (t) {
                    (m.direction = t >= m.index), (m.index = t), m.updateItemHTML();
                },
                preloadNearbyImages: function () {
                    for (var t = m.st.gallery.preload, e = Math.min(t[0], m.items.length), i = Math.min(t[1], m.items.length), s = 1; s <= (m.direction ? i : e); s++) m._preloadItem(m.index + s);
                    for (s = 1; s <= (m.direction ? e : i); s++) m._preloadItem(m.index - s);
                },
                _preloadItem: function (t) {
                    var e;
                    (t = $(t)),
                        m.items[t].preloaded ||
                            ((e = m.items[t]).parsed || (e = m.parseEl(t)),
                            p("LazyLoad", e),
                            "image" === e.type &&
                                (e.img = c('<img class="mfp-img" />')
                                    .on("load.mfploader", function () {
                                        e.hasSize = !0;
                                    })
                                    .on("error.mfploader", function () {
                                        (e.hasSize = !0), (e.loadError = !0), p("LazyLoadError", e);
                                    })
                                    .attr("src", e.src)),
                            (e.preloaded = !0));
                },
            },
        });
        var L = "retina";
        c.magnificPopup.registerModule(L, {
            options: {
                replaceSrc: function (t) {
                    return t.src.replace(/\.\w+$/, function (t) {
                        return "@2x" + t;
                    });
                },
                ratio: 1,
            },
            proto: {
                initRetina: function () {
                    var i, s;
                    1 < window.devicePixelRatio &&
                        ((i = m.st.retina),
                        (s = i.ratio),
                        1 < (s = isNaN(s) ? s() : s) &&
                            (u("ImageHasSize." + L, function (t, e) {
                                e.img.css({ "max-width": e.img[0].naturalWidth / s, width: "100%" });
                            }),
                            u("ElementParse." + L, function (t, e) {
                                e.src = i.replaceSrc(e, s);
                            })));
                },
            },
        }),
            o();
    }),
    (function (t) {
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
            ? define([], t)
            : (("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Parallax = t());
    })(function () {
        return (function o(r, a, l) {
            function h(e, t) {
                if (!a[e]) {
                    if (!r[e]) {
                        var i = "function" == typeof require && require;
                        if (!t && i) return i(e, !0);
                        if (c) return c(e, !0);
                        var s = new Error("Cannot find module '" + e + "'");
                        throw ((s.code = "MODULE_NOT_FOUND"), s);
                    }
                    var n = (a[e] = { exports: {} });
                    r[e][0].call(
                        n.exports,
                        function (t) {
                            return h(r[e][1][t] || t);
                        },
                        n,
                        n.exports,
                        o,
                        r,
                        a,
                        l
                    );
                }
                return a[e].exports;
            }
            for (var c = "function" == typeof require && require, t = 0; t < l.length; t++) h(l[t]);
            return h;
        })(
            {
                1: [
                    function (t, e, i) {
                        "use strict";
                        var l = Object.getOwnPropertySymbols,
                            h = Object.prototype.hasOwnProperty,
                            c = Object.prototype.propertyIsEnumerable;
                        e.exports = (function () {
                            try {
                                if (!Object.assign) return;
                                var t = new String("abc");
                                if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0])) return;
                                for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
                                if (
                                    "0123456789" !==
                                    Object.getOwnPropertyNames(e)
                                        .map(function (t) {
                                            return e[t];
                                        })
                                        .join("")
                                )
                                    return;
                                var s = {};
                                return (
                                    "abcdefghijklmnopqrst".split("").forEach(function (t) {
                                        s[t] = t;
                                    }),
                                    "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, s)).join("")
                                );
                            } catch (t) {
                                return;
                            }
                        })()
                            ? Object.assign
                            : function (t, e) {
                                  for (
                                      var i,
                                          s,
                                          n = (function (t) {
                                              if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                                              return Object(t);
                                          })(t),
                                          o = 1;
                                      o < arguments.length;
                                      o++
                                  ) {
                                      for (var r in (i = Object(arguments[o]))) h.call(i, r) && (n[r] = i[r]);
                                      if (l) {
                                          s = l(i);
                                          for (var a = 0; a < s.length; a++) c.call(i, s[a]) && (n[s[a]] = i[s[a]]);
                                      }
                                  }
                                  return n;
                              };
                    },
                    {},
                ],
                2: [
                    function (t, a, e) {
                        (function (r) {
                            (function () {
                                var t, e, i, s, n, o;
                                "undefined" != typeof performance && null !== performance && performance.now
                                    ? (a.exports = function () {
                                          return performance.now();
                                      })
                                    : null != r && r.hrtime
                                    ? ((a.exports = function () {
                                          return (t() - n) / 1e6;
                                      }),
                                      (e = r.hrtime),
                                      (s = (t = function () {
                                          var t;
                                          return 1e9 * (t = e())[0] + t[1];
                                      })()),
                                      (o = 1e9 * r.uptime()),
                                      (n = s - o))
                                    : (i = Date.now
                                          ? ((a.exports = function () {
                                                return Date.now() - i;
                                            }),
                                            Date.now())
                                          : ((a.exports = function () {
                                                return new Date().getTime() - i;
                                            }),
                                            new Date().getTime()));
                            }.call(this));
                        }.call(this, t("_process")));
                    },
                    { _process: 3 },
                ],
                3: [
                    function (t, e, i) {
                        function s() {
                            throw new Error("setTimeout has not been defined");
                        }
                        function n() {
                            throw new Error("clearTimeout has not been defined");
                        }
                        function o(e) {
                            if (c === setTimeout) return setTimeout(e, 0);
                            if ((c === s || !c) && setTimeout) return (c = setTimeout), setTimeout(e, 0);
                            try {
                                return c(e, 0);
                            } catch (t) {
                                try {
                                    return c.call(null, e, 0);
                                } catch (t) {
                                    return c.call(this, e, 0);
                                }
                            }
                        }
                        function r() {
                            m && p && ((m = !1), p.length ? (f = p.concat(f)) : (g = -1), f.length && a());
                        }
                        function a() {
                            if (!m) {
                                var t = o(r);
                                m = !0;
                                for (var e = f.length; e; ) {
                                    for (p = f, f = []; ++g < e; ) p && p[g].run();
                                    (g = -1), (e = f.length);
                                }
                                (p = null),
                                    (m = !1),
                                    (function (e) {
                                        if (u === clearTimeout) return clearTimeout(e);
                                        if ((u === n || !u) && clearTimeout) return (u = clearTimeout), clearTimeout(e);
                                        try {
                                            u(e);
                                        } catch (t) {
                                            try {
                                                return u.call(null, e);
                                            } catch (t) {
                                                return u.call(this, e);
                                            }
                                        }
                                    })(t);
                            }
                        }
                        function l(t, e) {
                            (this.fun = t), (this.array = e);
                        }
                        function h() {}
                        var c,
                            u,
                            d = (e.exports = {});
                        !(function () {
                            try {
                                c = "function" == typeof setTimeout ? setTimeout : s;
                            } catch (t) {
                                c = s;
                            }
                            try {
                                u = "function" == typeof clearTimeout ? clearTimeout : n;
                            } catch (t) {
                                u = n;
                            }
                        })();
                        var p,
                            f = [],
                            m = !1,
                            g = -1;
                        (d.nextTick = function (t) {
                            var e = new Array(arguments.length - 1);
                            if (1 < arguments.length) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                            f.push(new l(t, e)), 1 !== f.length || m || o(a);
                        }),
                            (l.prototype.run = function () {
                                this.fun.apply(null, this.array);
                            }),
                            (d.title = "browser"),
                            (d.browser = !0),
                            (d.env = {}),
                            (d.argv = []),
                            (d.version = ""),
                            (d.versions = {}),
                            (d.on = h),
                            (d.addListener = h),
                            (d.once = h),
                            (d.off = h),
                            (d.removeListener = h),
                            (d.removeAllListeners = h),
                            (d.emit = h),
                            (d.prependListener = h),
                            (d.prependOnceListener = h),
                            (d.listeners = function (t) {
                                return [];
                            }),
                            (d.binding = function (t) {
                                throw new Error("process.binding is not supported");
                            }),
                            (d.cwd = function () {
                                return "/";
                            }),
                            (d.chdir = function (t) {
                                throw new Error("process.chdir is not supported");
                            }),
                            (d.umask = function () {
                                return 0;
                            });
                    },
                    {},
                ],
                4: [
                    function (u, d, t) {
                        (function (t) {
                            for (
                                var s, n, o, r = u("performance-now"), e = "undefined" == typeof window ? t : window, i = ["moz", "webkit"], a = "AnimationFrame", l = e["request" + a], h = e["cancel" + a] || e["cancelRequest" + a], c = 0;
                                !l && c < i.length;
                                c++
                            )
                                (l = e[i[c] + "Request" + a]), (h = e[i[c] + "Cancel" + a] || e[i[c] + "CancelRequest" + a]);
                            (l && h) ||
                                ((n = s = 0),
                                (o = []),
                                (l = function (t) {
                                    var e, i;
                                    return (
                                        0 === o.length &&
                                            ((e = r()),
                                            (i = Math.max(0, 1e3 / 60 - (e - s))),
                                            (s = i + e),
                                            setTimeout(function () {
                                                for (var t = o.slice(0), e = (o.length = 0); e < t.length; e++)
                                                    if (!t[e].cancelled)
                                                        try {
                                                            t[e].callback(s);
                                                        } catch (t) {
                                                            setTimeout(function () {
                                                                throw t;
                                                            }, 0);
                                                        }
                                            }, Math.round(i))),
                                        o.push({ handle: ++n, callback: t, cancelled: !1 }),
                                        n
                                    );
                                }),
                                (h = function (t) {
                                    for (var e = 0; e < o.length; e++) o[e].handle === t && (o[e].cancelled = !0);
                                })),
                                (d.exports = function (t) {
                                    return l.call(e, t);
                                }),
                                (d.exports.cancel = function () {
                                    h.apply(e, arguments);
                                }),
                                (d.exports.polyfill = function () {
                                    (e.requestAnimationFrame = l), (e.cancelAnimationFrame = h);
                                });
                        }.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}));
                    },
                    { "performance-now": 2 },
                ],
                5: [
                    function (t, e, i) {
                        "use strict";
                        var s = function (t, e, i) {
                                return e && h(t.prototype, e), i && h(t, i), t;
                            },
                            l = t("raf"),
                            n = t("object-assign"),
                            p = {
                                propertyCache: {},
                                vendors: [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]],
                                clamp: function (t, e, i) {
                                    return e < i ? (t < e ? e : i < t ? i : t) : t < i ? i : e < t ? e : t;
                                },
                                data: function (t, e) {
                                    return p.deserialize(t.getAttribute("data-" + e));
                                },
                                deserialize: function (t) {
                                    return "true" === t || ("false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t));
                                },
                                camelCase: function (t) {
                                    return t.replace(/-+(.)?/g, function (t, e) {
                                        return e ? e.toUpperCase() : "";
                                    });
                                },
                                accelerate: function (t) {
                                    p.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), p.css(t, "transform-style", "preserve-3d"), p.css(t, "backface-visibility", "hidden");
                                },
                                transformSupport: function (t) {
                                    for (var e, i, s, n, o, r = document.createElement("div"), a = !1, l = !1, h = null, c = null, u = 0, d = p.vendors.length; u < d; u++)
                                        if (((c = null !== p.vendors[u] ? ((h = p.vendors[u][0] + "transform"), p.vendors[u][1] + "Transform") : (h = "transform")), void 0 !== r.style[c])) {
                                            a = !0;
                                            break;
                                        }
                                    switch (t) {
                                        case "2D":
                                            l = a;
                                            break;
                                        case "3D":
                                            a &&
                                                ((i = document.body || document.createElement("body")),
                                                (n = (s = document.documentElement).style.overflow),
                                                (o = !1),
                                                document.body || ((o = !0), (s.style.overflow = "hidden"), s.appendChild(i), (i.style.overflow = "hidden"), (i.style.background = "")),
                                                i.appendChild(r),
                                                (r.style[c] = "translate3d(1px,1px,1px)"),
                                                (l = void 0 !== (e = window.getComputedStyle(r).getPropertyValue(h)) && 0 < e.length && "none" !== e),
                                                (s.style.overflow = n),
                                                i.removeChild(r),
                                                o && (i.removeAttribute("style"), i.parentNode.removeChild(i)));
                                    }
                                    return l;
                                },
                                css: function (t, e, i) {
                                    var s = p.propertyCache[e];
                                    if (!s)
                                        for (var n = 0, o = p.vendors.length; n < o; n++)
                                            if (((s = null !== p.vendors[n] ? p.camelCase(p.vendors[n][1] + "-" + e) : e), void 0 !== t.style[s])) {
                                                p.propertyCache[e] = s;
                                                break;
                                            }
                                    t.style[s] = i;
                                },
                            },
                            o = {
                                relativeInput: !1,
                                clipRelativeInput: !1,
                                inputElement: null,
                                hoverOnly: !1,
                                calibrationThreshold: 100,
                                calibrationDelay: 500,
                                supportDelay: 500,
                                calibrateX: !1,
                                calibrateY: !0,
                                invertX: !0,
                                invertY: !0,
                                limitX: !1,
                                limitY: !1,
                                scalarX: 10,
                                scalarY: 10,
                                frictionX: 0.1,
                                frictionY: 0.1,
                                originX: 0.5,
                                originY: 0.5,
                                pointerEvents: !1,
                                precision: 1,
                                onReady: null,
                                selector: null,
                            },
                            r =
                                (s(a, [
                                    {
                                        key: "initialise",
                                        value: function () {
                                            void 0 === this.transform2DSupport && ((this.transform2DSupport = p.transformSupport("2D")), (this.transform3DSupport = p.transformSupport("3D"))),
                                                this.transform3DSupport && p.accelerate(this.element),
                                                "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"),
                                                this.pointerEvents || (this.element.style.pointerEvents = "none"),
                                                this.updateLayers(),
                                                this.updateDimensions(),
                                                this.enable(),
                                                this.queueCalibration(this.calibrationDelay);
                                        },
                                    },
                                    {
                                        key: "doReadyCallback",
                                        value: function () {
                                            this.onReady && this.onReady();
                                        },
                                    },
                                    {
                                        key: "updateLayers",
                                        value: function () {
                                            this.selector ? (this.layers = this.element.querySelectorAll(this.selector)) : (this.layers = this.element.children),
                                                this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."),
                                                (this.depthsX = []),
                                                (this.depthsY = []);
                                            for (var t = 0; t < this.layers.length; t++) {
                                                var e = this.layers[t];
                                                this.transform3DSupport && p.accelerate(e), (e.style.position = t ? "absolute" : "relative"), (e.style.display = "block"), (e.style.left = 0), (e.style.top = 0);
                                                var i = p.data(e, "depth") || 0;
                                                this.depthsX.push(p.data(e, "depth-x") || i), this.depthsY.push(p.data(e, "depth-y") || i);
                                            }
                                        },
                                    },
                                    {
                                        key: "updateDimensions",
                                        value: function () {
                                            (this.windowWidth = window.innerWidth),
                                                (this.windowHeight = window.innerHeight),
                                                (this.windowCenterX = this.windowWidth * this.originX),
                                                (this.windowCenterY = this.windowHeight * this.originY),
                                                (this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX)),
                                                (this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY));
                                        },
                                    },
                                    {
                                        key: "updateBounds",
                                        value: function () {
                                            (this.bounds = this.inputElement.getBoundingClientRect()),
                                                (this.elementPositionX = this.bounds.left),
                                                (this.elementPositionY = this.bounds.top),
                                                (this.elementWidth = this.bounds.width),
                                                (this.elementHeight = this.bounds.height),
                                                (this.elementCenterX = this.elementWidth * this.originX),
                                                (this.elementCenterY = this.elementHeight * this.originY),
                                                (this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX)),
                                                (this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY));
                                        },
                                    },
                                    {
                                        key: "queueCalibration",
                                        value: function (t) {
                                            clearTimeout(this.calibrationTimer), (this.calibrationTimer = setTimeout(this.onCalibrationTimer, t));
                                        },
                                    },
                                    {
                                        key: "enable",
                                        value: function () {
                                            this.enabled ||
                                                ((this.enabled = !0),
                                                this.orientationSupport
                                                    ? ((this.portrait = !1), window.addEventListener("deviceorientation", this.onDeviceOrientation), (this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)))
                                                    : this.motionSupport
                                                    ? ((this.portrait = !1), window.addEventListener("devicemotion", this.onDeviceMotion), (this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)))
                                                    : ((this.calibrationX = 0), (this.calibrationY = 0), (this.portrait = !1), window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()),
                                                window.addEventListener("resize", this.onWindowResize),
                                                (this.raf = l(this.onAnimationFrame)));
                                        },
                                    },
                                    {
                                        key: "disable",
                                        value: function () {
                                            this.enabled &&
                                                ((this.enabled = !1),
                                                this.orientationSupport
                                                    ? window.removeEventListener("deviceorientation", this.onDeviceOrientation)
                                                    : this.motionSupport
                                                    ? window.removeEventListener("devicemotion", this.onDeviceMotion)
                                                    : window.removeEventListener("mousemove", this.onMouseMove),
                                                window.removeEventListener("resize", this.onWindowResize),
                                                l.cancel(this.raf));
                                        },
                                    },
                                    {
                                        key: "calibrate",
                                        value: function (t, e) {
                                            (this.calibrateX = void 0 === t ? this.calibrateX : t), (this.calibrateY = void 0 === e ? this.calibrateY : e);
                                        },
                                    },
                                    {
                                        key: "invert",
                                        value: function (t, e) {
                                            (this.invertX = void 0 === t ? this.invertX : t), (this.invertY = void 0 === e ? this.invertY : e);
                                        },
                                    },
                                    {
                                        key: "friction",
                                        value: function (t, e) {
                                            (this.frictionX = void 0 === t ? this.frictionX : t), (this.frictionY = void 0 === e ? this.frictionY : e);
                                        },
                                    },
                                    {
                                        key: "scalar",
                                        value: function (t, e) {
                                            (this.scalarX = void 0 === t ? this.scalarX : t), (this.scalarY = void 0 === e ? this.scalarY : e);
                                        },
                                    },
                                    {
                                        key: "limit",
                                        value: function (t, e) {
                                            (this.limitX = void 0 === t ? this.limitX : t), (this.limitY = void 0 === e ? this.limitY : e);
                                        },
                                    },
                                    {
                                        key: "origin",
                                        value: function (t, e) {
                                            (this.originX = void 0 === t ? this.originX : t), (this.originY = void 0 === e ? this.originY : e);
                                        },
                                    },
                                    {
                                        key: "setInputElement",
                                        value: function (t) {
                                            (this.inputElement = t), this.updateDimensions();
                                        },
                                    },
                                    {
                                        key: "setPosition",
                                        value: function (t, e, i) {
                                            (e = e.toFixed(this.precision) + "px"),
                                                (i = i.toFixed(this.precision) + "px"),
                                                this.transform3DSupport
                                                    ? p.css(t, "transform", "translate3d(" + e + "," + i + ",0)")
                                                    : this.transform2DSupport
                                                    ? p.css(t, "transform", "translate(" + e + "," + i + ")")
                                                    : ((t.style.left = e), (t.style.top = i));
                                        },
                                    },
                                    {
                                        key: "onOrientationTimer",
                                        value: function () {
                                            this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), (this.orientationSupport = !1), this.enable()) : this.doReadyCallback();
                                        },
                                    },
                                    {
                                        key: "onMotionTimer",
                                        value: function () {
                                            this.motionSupport && 0 === this.motionStatus ? (this.disable(), (this.motionSupport = !1), this.enable()) : this.doReadyCallback();
                                        },
                                    },
                                    {
                                        key: "onCalibrationTimer",
                                        value: function () {
                                            this.calibrationFlag = !0;
                                        },
                                    },
                                    {
                                        key: "onWindowResize",
                                        value: function () {
                                            this.updateDimensions();
                                        },
                                    },
                                    {
                                        key: "onAnimationFrame",
                                        value: function () {
                                            this.updateBounds();
                                            var t = this.inputX - this.calibrationX,
                                                e = this.inputY - this.calibrationY;
                                            (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0),
                                                this.portrait
                                                    ? ((this.motionX = this.calibrateX ? e : this.inputY), (this.motionY = this.calibrateY ? t : this.inputX))
                                                    : ((this.motionX = this.calibrateX ? t : this.inputX), (this.motionY = this.calibrateY ? e : this.inputY)),
                                                (this.motionX *= this.elementWidth * (this.scalarX / 100)),
                                                (this.motionY *= this.elementHeight * (this.scalarY / 100)),
                                                isNaN(parseFloat(this.limitX)) || (this.motionX = p.clamp(this.motionX, -this.limitX, this.limitX)),
                                                isNaN(parseFloat(this.limitY)) || (this.motionY = p.clamp(this.motionY, -this.limitY, this.limitY)),
                                                (this.velocityX += (this.motionX - this.velocityX) * this.frictionX),
                                                (this.velocityY += (this.motionY - this.velocityY) * this.frictionY);
                                            for (var i = 0; i < this.layers.length; i++) {
                                                var s = this.layers[i],
                                                    n = this.depthsX[i],
                                                    o = this.depthsY[i],
                                                    r = this.velocityX * (n * (this.invertX ? -1 : 1)),
                                                    a = this.velocityY * (o * (this.invertY ? -1 : 1));
                                                this.setPosition(s, r, a);
                                            }
                                            this.raf = l(this.onAnimationFrame);
                                        },
                                    },
                                    {
                                        key: "rotate",
                                        value: function (t, e) {
                                            var i = (t || 0) / 30,
                                                s = (e || 0) / 30,
                                                n = this.windowHeight > this.windowWidth;
                                            this.portrait !== n && ((this.portrait = n), (this.calibrationFlag = !0)),
                                                this.calibrationFlag && ((this.calibrationFlag = !1), (this.calibrationX = i), (this.calibrationY = s)),
                                                (this.inputX = i),
                                                (this.inputY = s);
                                        },
                                    },
                                    {
                                        key: "onDeviceOrientation",
                                        value: function (t) {
                                            var e = t.beta,
                                                i = t.gamma;
                                            null !== e && null !== i && ((this.orientationStatus = 1), this.rotate(e, i));
                                        },
                                    },
                                    {
                                        key: "onDeviceMotion",
                                        value: function (t) {
                                            var e = t.rotationRate.beta,
                                                i = t.rotationRate.gamma;
                                            null !== e && null !== i && ((this.motionStatus = 1), this.rotate(e, i));
                                        },
                                    },
                                    {
                                        key: "onMouseMove",
                                        value: function (t) {
                                            var e = t.clientX,
                                                i = t.clientY;
                                            if (this.hoverOnly && (e < this.elementPositionX || e > this.elementPositionX + this.elementWidth || i < this.elementPositionY || i > this.elementPositionY + this.elementHeight))
                                                return (this.inputX = 0), void (this.inputY = 0);
                                            this.relativeInput
                                                ? (this.clipRelativeInput &&
                                                      ((e = Math.max(e, this.elementPositionX)),
                                                      (e = Math.min(e, this.elementPositionX + this.elementWidth)),
                                                      (i = Math.max(i, this.elementPositionY)),
                                                      (i = Math.min(i, this.elementPositionY + this.elementHeight))),
                                                  this.elementRangeX &&
                                                      this.elementRangeY &&
                                                      ((this.inputX = (e - this.elementPositionX - this.elementCenterX) / this.elementRangeX), (this.inputY = (i - this.elementPositionY - this.elementCenterY) / this.elementRangeY)))
                                                : this.windowRadiusX && this.windowRadiusY && ((this.inputX = (e - this.windowCenterX) / this.windowRadiusX), (this.inputY = (i - this.windowCenterY) / this.windowRadiusY));
                                        },
                                    },
                                    {
                                        key: "destroy",
                                        value: function () {
                                            this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");
                                            for (var t = 0; t < this.layers.length; t++) this.layers[t].removeAttribute("style");
                                            delete this.element, delete this.layers;
                                        },
                                    },
                                    {
                                        key: "version",
                                        value: function () {
                                            return "3.1.0";
                                        },
                                    },
                                ]),
                                a);
                        function a(t, e) {
                            (function (t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            })(this, a),
                                (this.element = t);
                            var i,
                                s = {
                                    calibrateX: p.data(this.element, "calibrate-x"),
                                    calibrateY: p.data(this.element, "calibrate-y"),
                                    invertX: p.data(this.element, "invert-x"),
                                    invertY: p.data(this.element, "invert-y"),
                                    limitX: p.data(this.element, "limit-x"),
                                    limitY: p.data(this.element, "limit-y"),
                                    scalarX: p.data(this.element, "scalar-x"),
                                    scalarY: p.data(this.element, "scalar-y"),
                                    frictionX: p.data(this.element, "friction-x"),
                                    frictionY: p.data(this.element, "friction-y"),
                                    originX: p.data(this.element, "origin-x"),
                                    originY: p.data(this.element, "origin-y"),
                                    pointerEvents: p.data(this.element, "pointer-events"),
                                    precision: p.data(this.element, "precision"),
                                    relativeInput: p.data(this.element, "relative-input"),
                                    clipRelativeInput: p.data(this.element, "clip-relative-input"),
                                    hoverOnly: p.data(this.element, "hover-only"),
                                    inputElement: document.querySelector(p.data(this.element, "input-element")),
                                    selector: p.data(this.element, "selector"),
                                };
                            for (i in s) null === s[i] && delete s[i];
                            n(this, o, s, e),
                                this.inputElement || (this.inputElement = this.element),
                                (this.calibrationTimer = null),
                                (this.calibrationFlag = !0),
                                (this.enabled = !1),
                                (this.depthsX = []),
                                (this.depthsY = []),
                                (this.raf = null),
                                (this.bounds = null),
                                (this.elementPositionX = 0),
                                (this.elementPositionY = 0),
                                (this.elementWidth = 0),
                                (this.elementHeight = 0),
                                (this.elementCenterX = 0),
                                (this.elementCenterY = 0),
                                (this.elementRangeX = 0),
                                (this.elementRangeY = 0),
                                (this.calibrationX = 0),
                                (this.calibrationY = 0),
                                (this.inputX = 0),
                                (this.inputY = 0),
                                (this.motionX = 0),
                                (this.motionY = 0),
                                (this.velocityX = 0),
                                (this.velocityY = 0),
                                (this.onMouseMove = this.onMouseMove.bind(this)),
                                (this.onDeviceOrientation = this.onDeviceOrientation.bind(this)),
                                (this.onDeviceMotion = this.onDeviceMotion.bind(this)),
                                (this.onOrientationTimer = this.onOrientationTimer.bind(this)),
                                (this.onMotionTimer = this.onMotionTimer.bind(this)),
                                (this.onCalibrationTimer = this.onCalibrationTimer.bind(this)),
                                (this.onAnimationFrame = this.onAnimationFrame.bind(this)),
                                (this.onWindowResize = this.onWindowResize.bind(this)),
                                (this.windowWidth = null),
                                (this.windowHeight = null),
                                (this.windowCenterX = null),
                                (this.windowCenterY = null),
                                (this.windowRadiusX = null),
                                (this.windowRadiusY = null),
                                (this.portrait = !1),
                                (this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i)),
                                (this.motionSupport = !!window.DeviceMotionEvent && !this.desktop),
                                (this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop),
                                (this.orientationStatus = 0),
                                (this.motionStatus = 0),
                                this.initialise();
                        }
                        function h(t, e) {
                            for (var i = 0; i < e.length; i++) {
                                var s = e[i];
                                (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
                            }
                        }
                        e.exports = r;
                    },
                    { "object-assign": 1, raf: 4 },
                ],
            },
            {},
            [5]
        )(5);
    }),
    (function (h, c, u) {
        "use strict";
        (h.fn.scrollUp = function (t) {
            h.data(u.body, "scrollUp") || (h.data(u.body, "scrollUp", !0), h.fn.scrollUp.init(t));
        }),
            (h.fn.scrollUp.init = function (t) {
                var e,
                    i,
                    s,
                    n,
                    o,
                    r = (h.fn.scrollUp.settings = h.extend({}, h.fn.scrollUp.defaults, t)),
                    a = !1,
                    l = r.scrollTrigger ? h(r.scrollTrigger) : h("<a/>", { id: r.scrollName, href: "#top" });
                switch (
                    (r.scrollTitle && l.attr("title", r.scrollTitle),
                    l.appendTo("body"),
                    r.scrollImg || r.scrollTrigger || l.html(r.scrollText),
                    l.css({ display: "none", position: "fixed", zIndex: r.zIndex }),
                    r.activeOverlay &&
                        h("<div/>", { id: r.scrollName + "-active" })
                            .css({ position: "absolute", top: r.scrollDistance + "px", width: "100%", borderTop: "1px dotted" + r.activeOverlay, zIndex: r.zIndex })
                            .appendTo("body"),
                    r.animation)
                ) {
                    case "fade":
                        (e = "fadeIn"), (i = "fadeOut"), (s = r.animationSpeed);
                        break;
                    case "slide":
                        (e = "slideDown"), (i = "slideUp"), (s = r.animationSpeed);
                        break;
                    default:
                        (e = "show"), (i = "hide"), (s = 0);
                }
                (n = "top" === r.scrollFrom ? r.scrollDistance : h(u).height() - h(c).height() - r.scrollDistance),
                    h(c).scroll(function () {
                        h(c).scrollTop() > n ? a || (l[e](s), (a = !0)) : a && (l[i](s), (a = !1));
                    }),
                    r.scrollTarget ? ("number" == typeof r.scrollTarget ? (o = r.scrollTarget) : "string" == typeof r.scrollTarget && (o = Math.floor(h(r.scrollTarget).offset().top))) : (o = 0),
                    l.click(function (t) {
                        t.preventDefault(), h("html, body").animate({ scrollTop: o }, r.scrollSpeed, r.easingType);
                    });
            }),
            (h.fn.scrollUp.defaults = {
                scrollName: "scrollUp",
                scrollDistance: 300,
                scrollFrom: "top",
                scrollSpeed: 300,
                easingType: "linear",
                animation: "fade",
                animationSpeed: 200,
                scrollTrigger: !1,
                scrollTarget: !1,
                scrollText: "Scroll to top",
                scrollTitle: !1,
                scrollImg: !1,
                activeOverlay: !1,
                zIndex: 2147483647,
            }),
            (h.fn.scrollUp.destroy = function (t) {
                h.removeData(u.body, "scrollUp"),
                    h("#" + h.fn.scrollUp.settings.scrollName).remove(),
                    h("#" + h.fn.scrollUp.settings.scrollName + "-active").remove(),
                    7 <= h.fn.jquery.split(".")[1] ? h(c).off("scroll", t) : h(c).unbind("scroll", t);
            }),
            (h.scrollUp = h.fn.scrollUp);
    })(jQuery, window, document),
    (function (i) {
        "function" == typeof define && define.amd
            ? define(["jquery"], i)
            : "object" == typeof module && module.exports
            ? (module.exports = function (t, e) {
                  return void 0 === e && (e = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), i(e), e;
              })
            : i(jQuery);
    })(function (e) {
        var t,
            i,
            s,
            n,
            p,
            o,
            r,
            f,
            m,
            g,
            v,
            y,
            _,
            a,
            l,
            b,
            h =
                (e && e.fn && e.fn.select2 && e.fn.select2.amd && (t = e.fn.select2.amd),
                (t && t.requirejs) ||
                    (t ? (s = t) : (t = {}),
                    (g = {}),
                    (v = {}),
                    (y = {}),
                    (_ = {}),
                    (a = Object.prototype.hasOwnProperty),
                    (l = [].slice),
                    (b = /\.js$/),
                    (f = function (t, e) {
                        var i,
                            s,
                            n = d(t),
                            o = n[0],
                            r = e[1];
                        return (
                            (t = n[1]),
                            o && (i = k((o = u(o, r)))),
                            o
                                ? (t =
                                      i && i.normalize
                                          ? i.normalize(
                                                t,
                                                ((s = r),
                                                function (t) {
                                                    return u(t, s);
                                                })
                                            )
                                          : u(t, r))
                                : ((o = (n = d((t = u(t, r))))[0]), (t = n[1]), o && (i = k(o))),
                            { f: o ? o + "!" + t : t, n: t, pr: o, p: i }
                        );
                    }),
                    (m = {
                        require: function (t) {
                            return x(t);
                        },
                        exports: function (t) {
                            var e = g[t];
                            return void 0 !== e ? e : (g[t] = {});
                        },
                        module: function (t) {
                            return {
                                id: t,
                                uri: "",
                                exports: g[t],
                                config:
                                    ((e = t),
                                    function () {
                                        return (y && y.config && y.config[e]) || {};
                                    }),
                            };
                            var e;
                        },
                    }),
                    (o = function (t, e, i, s) {
                        var n,
                            o,
                            r,
                            a,
                            l,
                            h,
                            c = [],
                            u = typeof i,
                            d = C((s = s || t));
                        if ("undefined" == u || "function" == u) {
                            for (e = !e.length && i.length ? ["require", "exports", "module"] : e, l = 0; l < e.length; l += 1)
                                if ("require" === (o = (a = f(e[l], d)).f)) c[l] = m.require(t);
                                else if ("exports" === o) (c[l] = m.exports(t)), (h = !0);
                                else if ("module" === o) n = c[l] = m.module(t);
                                else if (w(g, o) || w(v, o) || w(_, o)) c[l] = k(o);
                                else {
                                    if (!a.p) throw new Error(t + " missing " + o);
                                    a.p.load(
                                        a.n,
                                        x(s, !0),
                                        (function (e) {
                                            return function (t) {
                                                g[e] = t;
                                            };
                                        })(o),
                                        {}
                                    ),
                                        (c[l] = g[o]);
                                }
                            (r = i ? i.apply(g[t], c) : void 0), t && (n && n.exports !== p && n.exports !== g[t] ? (g[t] = n.exports) : (r === p && h) || (g[t] = r));
                        } else t && (g[t] = i);
                    }),
                    (i = s = r = function (t, e, i, s, n) {
                        if ("string" == typeof t) return m[t] ? m[t](e) : k(f(t, C(e)).f);
                        if (!t.splice) {
                            if (((y = t).deps && r(y.deps, y.callback), !e)) return;
                            e.splice ? ((t = e), (e = i), (i = null)) : (t = p);
                        }
                        return (
                            (e = e || function () {}),
                            "function" == typeof i && ((i = s), (s = n)),
                            s
                                ? o(p, t, e, i)
                                : setTimeout(function () {
                                      o(p, t, e, i);
                                  }, 4),
                            r
                        );
                    }),
                    (r.config = function (t) {
                        return r(t);
                    }),
                    (i._defined = g),
                    ((n = function (t, e, i) {
                        if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
                        e.splice || ((i = e), (e = [])), w(g, t) || w(v, t) || (v[t] = [t, e, i]);
                    }).amd = { jQuery: !0 }),
                    (t.requirejs = i),
                    (t.require = s),
                    (t.define = n)),
                t.define("almond", function () {}),
                t.define("jquery", [], function () {
                    var t = e || $;
                    return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t;
                }),
                t.define("select2/utils", ["jquery"], function (o) {
                    var n = {};
                    function h(t) {
                        var e,
                            i = t.prototype,
                            s = [];
                        for (e in i) "function" == typeof i[e] && "constructor" !== e && s.push(e);
                        return s;
                    }
                    function t() {
                        this.listeners = {};
                    }
                    (n.Extend = function (t, e) {
                        var i,
                            s = {}.hasOwnProperty;
                        function n() {
                            this.constructor = t;
                        }
                        for (i in e) s.call(e, i) && (t[i] = e[i]);
                        return (n.prototype = e.prototype), (t.prototype = new n()), (t.__super__ = e.prototype), t;
                    }),
                        (n.Decorate = function (s, n) {
                            var t = h(n),
                                e = h(s);
                            function o() {
                                var t = Array.prototype.unshift,
                                    e = n.prototype.constructor.length,
                                    i = s.prototype.constructor;
                                0 < e && (t.call(arguments, s.prototype.constructor), (i = n.prototype.constructor)), i.apply(this, arguments);
                            }
                            (n.displayName = s.displayName),
                                (o.prototype = new (function () {
                                    this.constructor = o;
                                })());
                            for (var i = 0; i < e.length; i++) {
                                var r = e[i];
                                o.prototype[r] = s.prototype[r];
                            }
                            for (var a = 0; a < t.length; a++) {
                                var l = t[a];
                                o.prototype[l] = (function (t) {
                                    var e = function () {};
                                    t in o.prototype && (e = o.prototype[t]);
                                    var i = n.prototype[t];
                                    return function () {
                                        return Array.prototype.unshift.call(arguments, e), i.apply(this, arguments);
                                    };
                                })(l);
                            }
                            return o;
                        }),
                        (t.prototype.on = function (t, e) {
                            (this.listeners = this.listeners || {}), t in this.listeners ? this.listeners[t].push(e) : (this.listeners[t] = [e]);
                        }),
                        (t.prototype.trigger = function (t) {
                            var e = Array.prototype.slice,
                                i = e.call(arguments, 1);
                            (this.listeners = this.listeners || {}),
                                null == i && (i = []),
                                0 === i.length && i.push({}),
                                (i[0]._type = t) in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)),
                                "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
                        }),
                        (t.prototype.invoke = function (t, e) {
                            for (var i = 0, s = t.length; i < s; i++) t[i].apply(this, e);
                        }),
                        (n.Observable = t),
                        (n.generateChars = function (t) {
                            for (var e = "", i = 0; i < t; i++) e += Math.floor(36 * Math.random()).toString(36);
                            return e;
                        }),
                        (n.bind = function (t, e) {
                            return function () {
                                t.apply(e, arguments);
                            };
                        }),
                        (n._convertData = function (t) {
                            for (var e in t) {
                                var i = e.split("-"),
                                    s = t;
                                if (1 !== i.length) {
                                    for (var n = 0; n < i.length; n++) {
                                        var o = i[n];
                                        (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in s || (s[o] = {}), n == i.length - 1 && (s[o] = t[e]), (s = s[o]);
                                    }
                                    delete t[e];
                                }
                            }
                            return t;
                        }),
                        (n.hasScroll = function (t, e) {
                            var i = o(e),
                                s = e.style.overflowX,
                                n = e.style.overflowY;
                            return (s !== n || ("hidden" !== n && "visible" !== n)) && ("scroll" === s || "scroll" === n || i.innerHeight() < e.scrollHeight || i.innerWidth() < e.scrollWidth);
                        }),
                        (n.escapeMarkup = function (t) {
                            var e = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" };
                            return "string" != typeof t
                                ? t
                                : String(t).replace(/[&<>"'\/\\]/g, function (t) {
                                      return e[t];
                                  });
                        }),
                        (n.appendMany = function (t, e) {
                            var i;
                            "1.7" === o.fn.jquery.substr(0, 3) &&
                                ((i = o()),
                                o.map(e, function (t) {
                                    i = i.add(t);
                                }),
                                (e = i)),
                                t.append(e);
                        }),
                        (n.__cache = {});
                    var i = 0;
                    return (
                        (n.GetUniqueElementId = function (t) {
                            var e = t.getAttribute("data-select2-id");
                            return null == e && (t.id ? ((e = t.id), t.setAttribute("data-select2-id", e)) : (t.setAttribute("data-select2-id", ++i), (e = i.toString()))), e;
                        }),
                        (n.StoreData = function (t, e, i) {
                            var s = n.GetUniqueElementId(t);
                            n.__cache[s] || (n.__cache[s] = {}), (n.__cache[s][e] = i);
                        }),
                        (n.GetData = function (t, e) {
                            var i = n.GetUniqueElementId(t);
                            return e ? (n.__cache[i] && null != n.__cache[i][e] ? n.__cache[i][e] : o(t).data(e)) : n.__cache[i];
                        }),
                        (n.RemoveData = function (t) {
                            var e = n.GetUniqueElementId(t);
                            null != n.__cache[e] && delete n.__cache[e];
                        }),
                        n
                    );
                }),
                t.define("select2/results", ["jquery", "./utils"], function (d, p) {
                    function s(t, e, i) {
                        (this.$element = t), (this.data = i), (this.options = e), s.__super__.constructor.call(this);
                    }
                    return (
                        p.Extend(s, p.Observable),
                        (s.prototype.render = function () {
                            var t = d('<ul class="select2-results__options" role="tree"></ul>');
                            return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), (this.$results = t);
                        }),
                        (s.prototype.clear = function () {
                            this.$results.empty();
                        }),
                        (s.prototype.displayMessage = function (t) {
                            var e = this.options.get("escapeMarkup");
                            this.clear(), this.hideLoading();
                            var i = d('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                                s = this.options.get("translations").get(t.message);
                            i.append(e(s(t.args))), (i[0].className += " select2-results__message"), this.$results.append(i);
                        }),
                        (s.prototype.hideMessages = function () {
                            this.$results.find(".select2-results__message").remove();
                        }),
                        (s.prototype.append = function (t) {
                            this.hideLoading();
                            var e = [];
                            if (null != t.results && 0 !== t.results.length) {
                                t.results = this.sort(t.results);
                                for (var i = 0; i < t.results.length; i++) {
                                    var s = t.results[i],
                                        n = this.option(s);
                                    e.push(n);
                                }
                                this.$results.append(e);
                            } else 0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" });
                        }),
                        (s.prototype.position = function (t, e) {
                            e.find(".select2-results").append(t);
                        }),
                        (s.prototype.sort = function (t) {
                            return this.options.get("sorter")(t);
                        }),
                        (s.prototype.highlightFirstItem = function () {
                            var t = this.$results.find(".select2-results__option[aria-selected]"),
                                e = t.filter("[aria-selected=true]");
                            0 < e.length ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"), this.ensureHighlightVisible();
                        }),
                        (s.prototype.setClasses = function () {
                            var e = this;
                            this.data.current(function (t) {
                                var s = d.map(t, function (t) {
                                    return t.id.toString();
                                });
                                e.$results.find(".select2-results__option[aria-selected]").each(function () {
                                    var t = d(this),
                                        e = p.GetData(this, "data"),
                                        i = "" + e.id;
                                    (null != e.element && e.element.selected) || (null == e.element && -1 < d.inArray(i, s)) ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false");
                                });
                            });
                        }),
                        (s.prototype.showLoading = function (t) {
                            this.hideLoading();
                            var e = { disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(t) },
                                i = this.option(e);
                            (i.className += " loading-results"), this.$results.prepend(i);
                        }),
                        (s.prototype.hideLoading = function () {
                            this.$results.find(".loading-results").remove();
                        }),
                        (s.prototype.option = function (t) {
                            var e = document.createElement("li");
                            e.className = "select2-results__option";
                            var i,
                                s = { role: "treeitem", "aria-selected": "false" };
                            for (i in (t.disabled && (delete s["aria-selected"], (s["aria-disabled"] = "true")),
                            null == t.id && delete s["aria-selected"],
                            null != t._resultId && (e.id = t._resultId),
                            t.title && (e.title = t.title),
                            t.children && ((s.role = "group"), (s["aria-label"] = t.text), delete s["aria-selected"]),
                            s)) {
                                var n = s[i];
                                e.setAttribute(i, n);
                            }
                            if (t.children) {
                                var o = d(e),
                                    r = document.createElement("strong");
                                (r.className = "select2-results__group"), d(r), this.template(t, r);
                                for (var a = [], l = 0; l < t.children.length; l++) {
                                    var h = t.children[l],
                                        c = this.option(h);
                                    a.push(c);
                                }
                                var u = d("<ul></ul>", { class: "select2-results__options select2-results__options--nested" });
                                u.append(a), o.append(r), o.append(u);
                            } else this.template(t, e);
                            return p.StoreData(e, "data", t), e;
                        }),
                        (s.prototype.bind = function (e, t) {
                            var l = this,
                                i = e.id + "-results";
                            this.$results.attr("id", i),
                                e.on("results:all", function (t) {
                                    l.clear(), l.append(t.data), e.isOpen() && (l.setClasses(), l.highlightFirstItem());
                                }),
                                e.on("results:append", function (t) {
                                    l.append(t.data), e.isOpen() && l.setClasses();
                                }),
                                e.on("query", function (t) {
                                    l.hideMessages(), l.showLoading(t);
                                }),
                                e.on("select", function () {
                                    e.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem());
                                }),
                                e.on("unselect", function () {
                                    e.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem());
                                }),
                                e.on("open", function () {
                                    l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible();
                                }),
                                e.on("close", function () {
                                    l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant");
                                }),
                                e.on("results:toggle", function () {
                                    var t = l.getHighlightedResults();
                                    0 !== t.length && t.trigger("mouseup");
                                }),
                                e.on("results:select", function () {
                                    var t,
                                        e = l.getHighlightedResults();
                                    0 !== e.length && ((t = p.GetData(e[0], "data")), "true" == e.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", { data: t }));
                                }),
                                e.on("results:previous", function () {
                                    var t,
                                        e,
                                        i,
                                        s,
                                        n,
                                        o = l.getHighlightedResults(),
                                        r = l.$results.find("[aria-selected]"),
                                        a = r.index(o);
                                    a <= 0 ||
                                        ((t = a - 1),
                                        0 === o.length && (t = 0),
                                        (e = r.eq(t)).trigger("mouseenter"),
                                        (i = l.$results.offset().top),
                                        (s = e.offset().top),
                                        (n = l.$results.scrollTop() + (s - i)),
                                        0 === t ? l.$results.scrollTop(0) : s - i < 0 && l.$results.scrollTop(n));
                                }),
                                e.on("results:next", function () {
                                    var t,
                                        e,
                                        i,
                                        s,
                                        n = l.getHighlightedResults(),
                                        o = l.$results.find("[aria-selected]"),
                                        r = o.index(n) + 1;
                                    r >= o.length ||
                                        ((t = o.eq(r)).trigger("mouseenter"),
                                        (e = l.$results.offset().top + l.$results.outerHeight(!1)),
                                        (i = t.offset().top + t.outerHeight(!1)),
                                        (s = l.$results.scrollTop() + i - e),
                                        0 === r ? l.$results.scrollTop(0) : e < i && l.$results.scrollTop(s));
                                }),
                                e.on("results:focus", function (t) {
                                    t.element.addClass("select2-results__option--highlighted");
                                }),
                                e.on("results:message", function (t) {
                                    l.displayMessage(t);
                                }),
                                d.fn.mousewheel &&
                                    this.$results.on("mousewheel", function (t) {
                                        var e = l.$results.scrollTop(),
                                            i = l.$results.get(0).scrollHeight - e + t.deltaY,
                                            s = 0 < t.deltaY && e - t.deltaY <= 0,
                                            n = t.deltaY < 0 && i <= l.$results.height();
                                        s ? (l.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : n && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), t.preventDefault(), t.stopPropagation());
                                    }),
                                this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (t) {
                                    var e = d(this),
                                        i = p.GetData(this, "data");
                                    "true" !== e.attr("aria-selected") ? l.trigger("select", { originalEvent: t, data: i }) : l.options.get("multiple") ? l.trigger("unselect", { originalEvent: t, data: i }) : l.trigger("close", {});
                                }),
                                this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (t) {
                                    var e = p.GetData(this, "data");
                                    l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", { data: e, element: d(this) });
                                });
                        }),
                        (s.prototype.getHighlightedResults = function () {
                            return this.$results.find(".select2-results__option--highlighted");
                        }),
                        (s.prototype.destroy = function () {
                            this.$results.remove();
                        }),
                        (s.prototype.ensureHighlightVisible = function () {
                            var t,
                                e,
                                i,
                                s,
                                n,
                                o = this.getHighlightedResults();
                            0 !== o.length &&
                                ((t = this.$results.find("[aria-selected]").index(o)),
                                (e = this.$results.offset().top),
                                (i = o.offset().top),
                                (s = this.$results.scrollTop() + (i - e)),
                                (n = i - e),
                                (s -= 2 * o.outerHeight(!1)),
                                t <= 2 ? this.$results.scrollTop(0) : (n > this.$results.outerHeight() || n < 0) && this.$results.scrollTop(s));
                        }),
                        (s.prototype.template = function (t, e) {
                            var i = this.options.get("templateResult"),
                                s = this.options.get("escapeMarkup"),
                                n = i(t, e);
                            null == n ? (e.style.display = "none") : "string" == typeof n ? (e.innerHTML = s(n)) : d(e).append(n);
                        }),
                        s
                    );
                }),
                t.define("select2/keys", [], function () {
                    return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 };
                }),
                t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (i, s, n) {
                    function o(t, e) {
                        (this.$element = t), (this.options = e), o.__super__.constructor.call(this);
                    }
                    return (
                        s.Extend(o, s.Observable),
                        (o.prototype.render = function () {
                            var t = i('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                            return (
                                (this._tabindex = 0),
                                null != s.GetData(this.$element[0], "old-tabindex")
                                    ? (this._tabindex = s.GetData(this.$element[0], "old-tabindex"))
                                    : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                                t.attr("title", this.$element.attr("title")),
                                t.attr("tabindex", this._tabindex),
                                (this.$selection = t)
                            );
                        }),
                        (o.prototype.bind = function (t, e) {
                            var i = this,
                                s = (t.id, t.id + "-results");
                            (this.container = t),
                                this.$selection.on("focus", function (t) {
                                    i.trigger("focus", t);
                                }),
                                this.$selection.on("blur", function (t) {
                                    i._handleBlur(t);
                                }),
                                this.$selection.on("keydown", function (t) {
                                    i.trigger("keypress", t), t.which === n.SPACE && t.preventDefault();
                                }),
                                t.on("results:focus", function (t) {
                                    i.$selection.attr("aria-activedescendant", t.data._resultId);
                                }),
                                t.on("selection:update", function (t) {
                                    i.update(t.data);
                                }),
                                t.on("open", function () {
                                    i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", s), i._attachCloseHandler(t);
                                }),
                                t.on("close", function () {
                                    i.$selection.attr("aria-expanded", "false"),
                                        i.$selection.removeAttr("aria-activedescendant"),
                                        i.$selection.removeAttr("aria-owns"),
                                        window.setTimeout(function () {
                                            i.$selection.focus();
                                        }, 0),
                                        i._detachCloseHandler(t);
                                }),
                                t.on("enable", function () {
                                    i.$selection.attr("tabindex", i._tabindex);
                                }),
                                t.on("disable", function () {
                                    i.$selection.attr("tabindex", "-1");
                                });
                        }),
                        (o.prototype._handleBlur = function (t) {
                            var e = this;
                            window.setTimeout(function () {
                                document.activeElement == e.$selection[0] || i.contains(e.$selection[0], document.activeElement) || e.trigger("blur", t);
                            }, 1);
                        }),
                        (o.prototype._attachCloseHandler = function (t) {
                            i(document.body).on("mousedown.select2." + t.id, function (t) {
                                var e = i(t.target).closest(".select2");
                                i(".select2.select2-container--open").each(function () {
                                    i(this), this != e[0] && s.GetData(this, "element").select2("close");
                                });
                            });
                        }),
                        (o.prototype._detachCloseHandler = function (t) {
                            i(document.body).off("mousedown.select2." + t.id);
                        }),
                        (o.prototype.position = function (t, e) {
                            e.find(".selection").append(t);
                        }),
                        (o.prototype.destroy = function () {
                            this._detachCloseHandler(this.container);
                        }),
                        (o.prototype.update = function (t) {
                            throw new Error("The `update` method must be defined in child classes.");
                        }),
                        o
                    );
                }),
                t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (t, e, i, s) {
                    function n() {
                        n.__super__.constructor.apply(this, arguments);
                    }
                    return (
                        i.Extend(n, e),
                        (n.prototype.render = function () {
                            var t = n.__super__.render.call(this);
                            return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t;
                        }),
                        (n.prototype.bind = function (e, t) {
                            var i = this;
                            n.__super__.bind.apply(this, arguments);
                            var s = e.id + "-container";
                            this.$selection.find(".select2-selection__rendered").attr("id", s).attr("role", "textbox").attr("aria-readonly", "true"),
                                this.$selection.attr("aria-labelledby", s),
                                this.$selection.on("mousedown", function (t) {
                                    1 === t.which && i.trigger("toggle", { originalEvent: t });
                                }),
                                this.$selection.on("focus", function (t) {}),
                                this.$selection.on("blur", function (t) {}),
                                e.on("focus", function (t) {
                                    e.isOpen() || i.$selection.focus();
                                });
                        }),
                        (n.prototype.clear = function () {
                            var t = this.$selection.find(".select2-selection__rendered");
                            t.empty(), t.removeAttr("title");
                        }),
                        (n.prototype.display = function (t, e) {
                            var i = this.options.get("templateSelection");
                            return this.options.get("escapeMarkup")(i(t, e));
                        }),
                        (n.prototype.selectionContainer = function () {
                            return t("<span></span>");
                        }),
                        (n.prototype.update = function (t) {
                            var e, i, s;
                            0 !== t.length ? ((e = t[0]), (i = this.$selection.find(".select2-selection__rendered")), (s = this.display(e, i)), i.empty().append(s), i.attr("title", e.title || e.text)) : this.clear();
                        }),
                        n
                    );
                }),
                t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (n, t, a) {
                    function i(t, e) {
                        i.__super__.constructor.apply(this, arguments);
                    }
                    return (
                        a.Extend(i, t),
                        (i.prototype.render = function () {
                            var t = i.__super__.render.call(this);
                            return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t;
                        }),
                        (i.prototype.bind = function (t, e) {
                            var s = this;
                            i.__super__.bind.apply(this, arguments),
                                this.$selection.on("click", function (t) {
                                    s.trigger("toggle", { originalEvent: t });
                                }),
                                this.$selection.on("click", ".select2-selection__choice__remove", function (t) {
                                    var e, i;
                                    s.options.get("disabled") || ((e = n(this).parent()), (i = a.GetData(e[0], "data")), s.trigger("unselect", { originalEvent: t, data: i }));
                                });
                        }),
                        (i.prototype.clear = function () {
                            var t = this.$selection.find(".select2-selection__rendered");
                            t.empty(), t.removeAttr("title");
                        }),
                        (i.prototype.display = function (t, e) {
                            var i = this.options.get("templateSelection");
                            return this.options.get("escapeMarkup")(i(t, e));
                        }),
                        (i.prototype.selectionContainer = function () {
                            return n('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                        }),
                        (i.prototype.update = function (t) {
                            if ((this.clear(), 0 !== t.length)) {
                                for (var e = [], i = 0; i < t.length; i++) {
                                    var s = t[i],
                                        n = this.selectionContainer(),
                                        o = this.display(s, n);
                                    n.append(o), n.attr("title", s.title || s.text), a.StoreData(n[0], "data", s), e.push(n);
                                }
                                var r = this.$selection.find(".select2-selection__rendered");
                                a.appendMany(r, e);
                            }
                        }),
                        i
                    );
                }),
                t.define("select2/selection/placeholder", ["../utils"], function (t) {
                    function e(t, e, i) {
                        (this.placeholder = this.normalizePlaceholder(i.get("placeholder"))), t.call(this, e, i);
                    }
                    return (
                        (e.prototype.normalizePlaceholder = function (t, e) {
                            return "string" == typeof e && (e = { id: "", text: e }), e;
                        }),
                        (e.prototype.createPlaceholder = function (t, e) {
                            var i = this.selectionContainer();
                            return i.html(this.display(e)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i;
                        }),
                        (e.prototype.update = function (t, e) {
                            var i = 1 == e.length && e[0].id != this.placeholder.id;
                            if (1 < e.length || i) return t.call(this, e);
                            this.clear();
                            var s = this.createPlaceholder(this.placeholder);
                            this.$selection.find(".select2-selection__rendered").append(s);
                        }),
                        e
                    );
                }),
                t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (n, s, a) {
                    function t() {}
                    return (
                        (t.prototype.bind = function (t, e, i) {
                            var s = this;
                            t.call(this, e, i),
                                null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
                                this.$selection.on("mousedown", ".select2-selection__clear", function (t) {
                                    s._handleClear(t);
                                }),
                                e.on("keypress", function (t) {
                                    s._handleKeyboardClear(t, e);
                                });
                        }),
                        (t.prototype._handleClear = function (t, e) {
                            if (!this.options.get("disabled")) {
                                var i = this.$selection.find(".select2-selection__clear");
                                if (0 !== i.length) {
                                    e.stopPropagation();
                                    var s = a.GetData(i[0], "data"),
                                        n = this.$element.val();
                                    this.$element.val(this.placeholder.id);
                                    var o = { data: s };
                                    if ((this.trigger("clear", o), o.prevented)) this.$element.val(n);
                                    else {
                                        for (var r = 0; r < s.length; r++) if (((o = { data: s[r] }), this.trigger("unselect", o), o.prevented)) return void this.$element.val(n);
                                        this.$element.trigger("change"), this.trigger("toggle", {});
                                    }
                                }
                            }
                        }),
                        (t.prototype._handleKeyboardClear = function (t, e, i) {
                            i.isOpen() || (e.which != s.DELETE && e.which != s.BACKSPACE) || this._handleClear(e);
                        }),
                        (t.prototype.update = function (t, e) {
                            var i, s;
                            t.call(this, e),
                                0 < this.$selection.find(".select2-selection__placeholder").length ||
                                    0 === e.length ||
                                    ((i = this.options.get("translations").get("removeAllItems")),
                                    (s = n('<span class="select2-selection__clear" title="' + i() + '">&times;</span>')),
                                    a.StoreData(s[0], "data", e),
                                    this.$selection.find(".select2-selection__rendered").prepend(s));
                        }),
                        t
                    );
                }),
                t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (s, r, a) {
                    function t(t, e, i) {
                        t.call(this, e, i);
                    }
                    return (
                        (t.prototype.render = function (t) {
                            var e = s(
                                '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>'
                            );
                            (this.$searchContainer = e), (this.$search = e.find("input"));
                            var i = t.call(this);
                            return this._transferTabIndex(), i;
                        }),
                        (t.prototype.bind = function (t, e, i) {
                            var s = this;
                            t.call(this, e, i),
                                e.on("open", function () {
                                    s.$search.trigger("focus");
                                }),
                                e.on("close", function () {
                                    s.$search.val(""), s.$search.removeAttr("aria-activedescendant"), s.$search.trigger("focus");
                                }),
                                e.on("enable", function () {
                                    s.$search.prop("disabled", !1), s._transferTabIndex();
                                }),
                                e.on("disable", function () {
                                    s.$search.prop("disabled", !0);
                                }),
                                e.on("focus", function (t) {
                                    s.$search.trigger("focus");
                                }),
                                e.on("results:focus", function (t) {
                                    s.$search.attr("aria-activedescendant", t.id);
                                }),
                                this.$selection.on("focusin", ".select2-search--inline", function (t) {
                                    s.trigger("focus", t);
                                }),
                                this.$selection.on("focusout", ".select2-search--inline", function (t) {
                                    s._handleBlur(t);
                                }),
                                this.$selection.on("keydown", ".select2-search--inline", function (t) {
                                    var e, i;
                                    t.stopPropagation(),
                                        s.trigger("keypress", t),
                                        (s._keyUpPrevented = t.isDefaultPrevented()),
                                        t.which === a.BACKSPACE &&
                                            "" === s.$search.val() &&
                                            0 < (e = s.$searchContainer.prev(".select2-selection__choice")).length &&
                                            ((i = r.GetData(e[0], "data")), s.searchRemoveChoice(i), t.preventDefault());
                                });
                            var n = document.documentMode,
                                o = n && n <= 11;
                            this.$selection.on("input.searchcheck", ".select2-search--inline", function (t) {
                                o ? s.$selection.off("input.search input.searchcheck") : s.$selection.off("keyup.search");
                            }),
                                this.$selection.on("keyup.search input.search", ".select2-search--inline", function (t) {
                                    var e;
                                    o && "input" === t.type ? s.$selection.off("input.search input.searchcheck") : (e = t.which) != a.SHIFT && e != a.CTRL && e != a.ALT && e != a.TAB && s.handleSearch(t);
                                });
                        }),
                        (t.prototype._transferTabIndex = function (t) {
                            this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
                        }),
                        (t.prototype.createPlaceholder = function (t, e) {
                            this.$search.attr("placeholder", e.text);
                        }),
                        (t.prototype.update = function (t, e) {
                            var i = this.$search[0] == document.activeElement;
                            this.$search.attr("placeholder", ""),
                                t.call(this, e),
                                this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),
                                this.resizeSearch(),
                                i && (this.$element.find("[data-select2-tag]").length ? this.$element.focus() : this.$search.focus());
                        }),
                        (t.prototype.handleSearch = function () {
                            var t;
                            this.resizeSearch(), this._keyUpPrevented || ((t = this.$search.val()), this.trigger("query", { term: t })), (this._keyUpPrevented = !1);
                        }),
                        (t.prototype.searchRemoveChoice = function (t, e) {
                            this.trigger("unselect", { data: e }), this.$search.val(e.text), this.handleSearch();
                        }),
                        (t.prototype.resizeSearch = function () {
                            this.$search.css("width", "25px");
                            var t = "",
                                t = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : 0.75 * (this.$search.val().length + 1) + "em";
                            this.$search.css("width", t);
                        }),
                        t
                    );
                }),
                t.define("select2/selection/eventRelay", ["jquery"], function (r) {
                    function t() {}
                    return (
                        (t.prototype.bind = function (t, e, i) {
                            var s = this,
                                n = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                                o = ["opening", "closing", "selecting", "unselecting", "clearing"];
                            t.call(this, e, i),
                                e.on("*", function (t, e) {
                                    var i;
                                    -1 !== r.inArray(t, n) && ((e = e || {}), (i = r.Event("select2:" + t, { params: e })), s.$element.trigger(i), -1 !== r.inArray(t, o) && (e.prevented = i.isDefaultPrevented()));
                                });
                        }),
                        t
                    );
                }),
                t.define("select2/translation", ["jquery", "require"], function (e, i) {
                    function s(t) {
                        this.dict = t || {};
                    }
                    return (
                        (s.prototype.all = function () {
                            return this.dict;
                        }),
                        (s.prototype.get = function (t) {
                            return this.dict[t];
                        }),
                        (s.prototype.extend = function (t) {
                            this.dict = e.extend({}, t.all(), this.dict);
                        }),
                        (s._cache = {}),
                        (s.loadPath = function (t) {
                            var e;
                            return t in s._cache || ((e = i(t)), (s._cache[t] = e)), new s(s._cache[t]);
                        }),
                        s
                    );
                }),
                t.define("select2/diacritics", [], function () {
                    return {
                        "Ⓐ": "A",
                        Ａ: "A",
                        À: "A",
                        Á: "A",
                        Â: "A",
                        Ầ: "A",
                        Ấ: "A",
                        Ẫ: "A",
                        Ẩ: "A",
                        Ã: "A",
                        Ā: "A",
                        Ă: "A",
                        Ằ: "A",
                        Ắ: "A",
                        Ẵ: "A",
                        Ẳ: "A",
                        Ȧ: "A",
                        Ǡ: "A",
                        Ä: "A",
                        Ǟ: "A",
                        Ả: "A",
                        Å: "A",
                        Ǻ: "A",
                        Ǎ: "A",
                        Ȁ: "A",
                        Ȃ: "A",
                        Ạ: "A",
                        Ậ: "A",
                        Ặ: "A",
                        Ḁ: "A",
                        Ą: "A",
                        Ⱥ: "A",
                        Ɐ: "A",
                        Ꜳ: "AA",
                        Æ: "AE",
                        Ǽ: "AE",
                        Ǣ: "AE",
                        Ꜵ: "AO",
                        Ꜷ: "AU",
                        Ꜹ: "AV",
                        Ꜻ: "AV",
                        Ꜽ: "AY",
                        "Ⓑ": "B",
                        Ｂ: "B",
                        Ḃ: "B",
                        Ḅ: "B",
                        Ḇ: "B",
                        Ƀ: "B",
                        Ƃ: "B",
                        Ɓ: "B",
                        "Ⓒ": "C",
                        Ｃ: "C",
                        Ć: "C",
                        Ĉ: "C",
                        Ċ: "C",
                        Č: "C",
                        Ç: "C",
                        Ḉ: "C",
                        Ƈ: "C",
                        Ȼ: "C",
                        Ꜿ: "C",
                        "Ⓓ": "D",
                        Ｄ: "D",
                        Ḋ: "D",
                        Ď: "D",
                        Ḍ: "D",
                        Ḑ: "D",
                        Ḓ: "D",
                        Ḏ: "D",
                        Đ: "D",
                        Ƌ: "D",
                        Ɗ: "D",
                        Ɖ: "D",
                        Ꝺ: "D",
                        Ǳ: "DZ",
                        Ǆ: "DZ",
                        ǲ: "Dz",
                        ǅ: "Dz",
                        "Ⓔ": "E",
                        Ｅ: "E",
                        È: "E",
                        É: "E",
                        Ê: "E",
                        Ề: "E",
                        Ế: "E",
                        Ễ: "E",
                        Ể: "E",
                        Ẽ: "E",
                        Ē: "E",
                        Ḕ: "E",
                        Ḗ: "E",
                        Ĕ: "E",
                        Ė: "E",
                        Ë: "E",
                        Ẻ: "E",
                        Ě: "E",
                        Ȅ: "E",
                        Ȇ: "E",
                        Ẹ: "E",
                        Ệ: "E",
                        Ȩ: "E",
                        Ḝ: "E",
                        Ę: "E",
                        Ḙ: "E",
                        Ḛ: "E",
                        Ɛ: "E",
                        Ǝ: "E",
                        "Ⓕ": "F",
                        Ｆ: "F",
                        Ḟ: "F",
                        Ƒ: "F",
                        Ꝼ: "F",
                        "Ⓖ": "G",
                        Ｇ: "G",
                        Ǵ: "G",
                        Ĝ: "G",
                        Ḡ: "G",
                        Ğ: "G",
                        Ġ: "G",
                        Ǧ: "G",
                        Ģ: "G",
                        Ǥ: "G",
                        Ɠ: "G",
                        Ꞡ: "G",
                        Ᵹ: "G",
                        Ꝿ: "G",
                        "Ⓗ": "H",
                        Ｈ: "H",
                        Ĥ: "H",
                        Ḣ: "H",
                        Ḧ: "H",
                        Ȟ: "H",
                        Ḥ: "H",
                        Ḩ: "H",
                        Ḫ: "H",
                        Ħ: "H",
                        Ⱨ: "H",
                        Ⱶ: "H",
                        Ɥ: "H",
                        "Ⓘ": "I",
                        Ｉ: "I",
                        Ì: "I",
                        Í: "I",
                        Î: "I",
                        Ĩ: "I",
                        Ī: "I",
                        Ĭ: "I",
                        İ: "I",
                        Ï: "I",
                        Ḯ: "I",
                        Ỉ: "I",
                        Ǐ: "I",
                        Ȉ: "I",
                        Ȋ: "I",
                        Ị: "I",
                        Į: "I",
                        Ḭ: "I",
                        Ɨ: "I",
                        "Ⓙ": "J",
                        Ｊ: "J",
                        Ĵ: "J",
                        Ɉ: "J",
                        "Ⓚ": "K",
                        Ｋ: "K",
                        Ḱ: "K",
                        Ǩ: "K",
                        Ḳ: "K",
                        Ķ: "K",
                        Ḵ: "K",
                        Ƙ: "K",
                        Ⱪ: "K",
                        Ꝁ: "K",
                        Ꝃ: "K",
                        Ꝅ: "K",
                        Ꞣ: "K",
                        "Ⓛ": "L",
                        Ｌ: "L",
                        Ŀ: "L",
                        Ĺ: "L",
                        Ľ: "L",
                        Ḷ: "L",
                        Ḹ: "L",
                        Ļ: "L",
                        Ḽ: "L",
                        Ḻ: "L",
                        Ł: "L",
                        Ƚ: "L",
                        Ɫ: "L",
                        Ⱡ: "L",
                        Ꝉ: "L",
                        Ꝇ: "L",
                        Ꞁ: "L",
                        Ǉ: "LJ",
                        ǈ: "Lj",
                        "Ⓜ": "M",
                        Ｍ: "M",
                        Ḿ: "M",
                        Ṁ: "M",
                        Ṃ: "M",
                        Ɱ: "M",
                        Ɯ: "M",
                        "Ⓝ": "N",
                        Ｎ: "N",
                        Ǹ: "N",
                        Ń: "N",
                        Ñ: "N",
                        Ṅ: "N",
                        Ň: "N",
                        Ṇ: "N",
                        Ņ: "N",
                        Ṋ: "N",
                        Ṉ: "N",
                        Ƞ: "N",
                        Ɲ: "N",
                        Ꞑ: "N",
                        Ꞥ: "N",
                        Ǌ: "NJ",
                        ǋ: "Nj",
                        "Ⓞ": "O",
                        Ｏ: "O",
                        Ò: "O",
                        Ó: "O",
                        Ô: "O",
                        Ồ: "O",
                        Ố: "O",
                        Ỗ: "O",
                        Ổ: "O",
                        Õ: "O",
                        Ṍ: "O",
                        Ȭ: "O",
                        Ṏ: "O",
                        Ō: "O",
                        Ṑ: "O",
                        Ṓ: "O",
                        Ŏ: "O",
                        Ȯ: "O",
                        Ȱ: "O",
                        Ö: "O",
                        Ȫ: "O",
                        Ỏ: "O",
                        Ő: "O",
                        Ǒ: "O",
                        Ȍ: "O",
                        Ȏ: "O",
                        Ơ: "O",
                        Ờ: "O",
                        Ớ: "O",
                        Ỡ: "O",
                        Ở: "O",
                        Ợ: "O",
                        Ọ: "O",
                        Ộ: "O",
                        Ǫ: "O",
                        Ǭ: "O",
                        Ø: "O",
                        Ǿ: "O",
                        Ɔ: "O",
                        Ɵ: "O",
                        Ꝋ: "O",
                        Ꝍ: "O",
                        Œ: "OE",
                        Ƣ: "OI",
                        Ꝏ: "OO",
                        Ȣ: "OU",
                        "Ⓟ": "P",
                        Ｐ: "P",
                        Ṕ: "P",
                        Ṗ: "P",
                        Ƥ: "P",
                        Ᵽ: "P",
                        Ꝑ: "P",
                        Ꝓ: "P",
                        Ꝕ: "P",
                        "Ⓠ": "Q",
                        Ｑ: "Q",
                        Ꝗ: "Q",
                        Ꝙ: "Q",
                        Ɋ: "Q",
                        "Ⓡ": "R",
                        Ｒ: "R",
                        Ŕ: "R",
                        Ṙ: "R",
                        Ř: "R",
                        Ȑ: "R",
                        Ȓ: "R",
                        Ṛ: "R",
                        Ṝ: "R",
                        Ŗ: "R",
                        Ṟ: "R",
                        Ɍ: "R",
                        Ɽ: "R",
                        Ꝛ: "R",
                        Ꞧ: "R",
                        Ꞃ: "R",
                        "Ⓢ": "S",
                        Ｓ: "S",
                        ẞ: "S",
                        Ś: "S",
                        Ṥ: "S",
                        Ŝ: "S",
                        Ṡ: "S",
                        Š: "S",
                        Ṧ: "S",
                        Ṣ: "S",
                        Ṩ: "S",
                        Ș: "S",
                        Ş: "S",
                        Ȿ: "S",
                        Ꞩ: "S",
                        Ꞅ: "S",
                        "Ⓣ": "T",
                        Ｔ: "T",
                        Ṫ: "T",
                        Ť: "T",
                        Ṭ: "T",
                        Ț: "T",
                        Ţ: "T",
                        Ṱ: "T",
                        Ṯ: "T",
                        Ŧ: "T",
                        Ƭ: "T",
                        Ʈ: "T",
                        Ⱦ: "T",
                        Ꞇ: "T",
                        Ꜩ: "TZ",
                        "Ⓤ": "U",
                        Ｕ: "U",
                        Ù: "U",
                        Ú: "U",
                        Û: "U",
                        Ũ: "U",
                        Ṹ: "U",
                        Ū: "U",
                        Ṻ: "U",
                        Ŭ: "U",
                        Ü: "U",
                        Ǜ: "U",
                        Ǘ: "U",
                        Ǖ: "U",
                        Ǚ: "U",
                        Ủ: "U",
                        Ů: "U",
                        Ű: "U",
                        Ǔ: "U",
                        Ȕ: "U",
                        Ȗ: "U",
                        Ư: "U",
                        Ừ: "U",
                        Ứ: "U",
                        Ữ: "U",
                        Ử: "U",
                        Ự: "U",
                        Ụ: "U",
                        Ṳ: "U",
                        Ų: "U",
                        Ṷ: "U",
                        Ṵ: "U",
                        Ʉ: "U",
                        "Ⓥ": "V",
                        Ｖ: "V",
                        Ṽ: "V",
                        Ṿ: "V",
                        Ʋ: "V",
                        Ꝟ: "V",
                        Ʌ: "V",
                        Ꝡ: "VY",
                        "Ⓦ": "W",
                        Ｗ: "W",
                        Ẁ: "W",
                        Ẃ: "W",
                        Ŵ: "W",
                        Ẇ: "W",
                        Ẅ: "W",
                        Ẉ: "W",
                        Ⱳ: "W",
                        "Ⓧ": "X",
                        Ｘ: "X",
                        Ẋ: "X",
                        Ẍ: "X",
                        "Ⓨ": "Y",
                        Ｙ: "Y",
                        Ỳ: "Y",
                        Ý: "Y",
                        Ŷ: "Y",
                        Ỹ: "Y",
                        Ȳ: "Y",
                        Ẏ: "Y",
                        Ÿ: "Y",
                        Ỷ: "Y",
                        Ỵ: "Y",
                        Ƴ: "Y",
                        Ɏ: "Y",
                        Ỿ: "Y",
                        "Ⓩ": "Z",
                        Ｚ: "Z",
                        Ź: "Z",
                        Ẑ: "Z",
                        Ż: "Z",
                        Ž: "Z",
                        Ẓ: "Z",
                        Ẕ: "Z",
                        Ƶ: "Z",
                        Ȥ: "Z",
                        Ɀ: "Z",
                        Ⱬ: "Z",
                        Ꝣ: "Z",
                        "ⓐ": "a",
                        ａ: "a",
                        ẚ: "a",
                        à: "a",
                        á: "a",
                        â: "a",
                        ầ: "a",
                        ấ: "a",
                        ẫ: "a",
                        ẩ: "a",
                        ã: "a",
                        ā: "a",
                        ă: "a",
                        ằ: "a",
                        ắ: "a",
                        ẵ: "a",
                        ẳ: "a",
                        ȧ: "a",
                        ǡ: "a",
                        ä: "a",
                        ǟ: "a",
                        ả: "a",
                        å: "a",
                        ǻ: "a",
                        ǎ: "a",
                        ȁ: "a",
                        ȃ: "a",
                        ạ: "a",
                        ậ: "a",
                        ặ: "a",
                        ḁ: "a",
                        ą: "a",
                        ⱥ: "a",
                        ɐ: "a",
                        ꜳ: "aa",
                        æ: "ae",
                        ǽ: "ae",
                        ǣ: "ae",
                        ꜵ: "ao",
                        ꜷ: "au",
                        ꜹ: "av",
                        ꜻ: "av",
                        ꜽ: "ay",
                        "ⓑ": "b",
                        ｂ: "b",
                        ḃ: "b",
                        ḅ: "b",
                        ḇ: "b",
                        ƀ: "b",
                        ƃ: "b",
                        ɓ: "b",
                        "ⓒ": "c",
                        ｃ: "c",
                        ć: "c",
                        ĉ: "c",
                        ċ: "c",
                        č: "c",
                        ç: "c",
                        ḉ: "c",
                        ƈ: "c",
                        ȼ: "c",
                        ꜿ: "c",
                        ↄ: "c",
                        "ⓓ": "d",
                        ｄ: "d",
                        ḋ: "d",
                        ď: "d",
                        ḍ: "d",
                        ḑ: "d",
                        ḓ: "d",
                        ḏ: "d",
                        đ: "d",
                        ƌ: "d",
                        ɖ: "d",
                        ɗ: "d",
                        ꝺ: "d",
                        ǳ: "dz",
                        ǆ: "dz",
                        "ⓔ": "e",
                        ｅ: "e",
                        è: "e",
                        é: "e",
                        ê: "e",
                        ề: "e",
                        ế: "e",
                        ễ: "e",
                        ể: "e",
                        ẽ: "e",
                        ē: "e",
                        ḕ: "e",
                        ḗ: "e",
                        ĕ: "e",
                        ė: "e",
                        ë: "e",
                        ẻ: "e",
                        ě: "e",
                        ȅ: "e",
                        ȇ: "e",
                        ẹ: "e",
                        ệ: "e",
                        ȩ: "e",
                        ḝ: "e",
                        ę: "e",
                        ḙ: "e",
                        ḛ: "e",
                        ɇ: "e",
                        ɛ: "e",
                        ǝ: "e",
                        "ⓕ": "f",
                        ｆ: "f",
                        ḟ: "f",
                        ƒ: "f",
                        ꝼ: "f",
                        "ⓖ": "g",
                        ｇ: "g",
                        ǵ: "g",
                        ĝ: "g",
                        ḡ: "g",
                        ğ: "g",
                        ġ: "g",
                        ǧ: "g",
                        ģ: "g",
                        ǥ: "g",
                        ɠ: "g",
                        ꞡ: "g",
                        ᵹ: "g",
                        ꝿ: "g",
                        "ⓗ": "h",
                        ｈ: "h",
                        ĥ: "h",
                        ḣ: "h",
                        ḧ: "h",
                        ȟ: "h",
                        ḥ: "h",
                        ḩ: "h",
                        ḫ: "h",
                        ẖ: "h",
                        ħ: "h",
                        ⱨ: "h",
                        ⱶ: "h",
                        ɥ: "h",
                        ƕ: "hv",
                        "ⓘ": "i",
                        ｉ: "i",
                        ì: "i",
                        í: "i",
                        î: "i",
                        ĩ: "i",
                        ī: "i",
                        ĭ: "i",
                        ï: "i",
                        ḯ: "i",
                        ỉ: "i",
                        ǐ: "i",
                        ȉ: "i",
                        ȋ: "i",
                        ị: "i",
                        į: "i",
                        ḭ: "i",
                        ɨ: "i",
                        ı: "i",
                        "ⓙ": "j",
                        ｊ: "j",
                        ĵ: "j",
                        ǰ: "j",
                        ɉ: "j",
                        "ⓚ": "k",
                        ｋ: "k",
                        ḱ: "k",
                        ǩ: "k",
                        ḳ: "k",
                        ķ: "k",
                        ḵ: "k",
                        ƙ: "k",
                        ⱪ: "k",
                        ꝁ: "k",
                        ꝃ: "k",
                        ꝅ: "k",
                        ꞣ: "k",
                        "ⓛ": "l",
                        ｌ: "l",
                        ŀ: "l",
                        ĺ: "l",
                        ľ: "l",
                        ḷ: "l",
                        ḹ: "l",
                        ļ: "l",
                        ḽ: "l",
                        ḻ: "l",
                        ſ: "l",
                        ł: "l",
                        ƚ: "l",
                        ɫ: "l",
                        ⱡ: "l",
                        ꝉ: "l",
                        ꞁ: "l",
                        ꝇ: "l",
                        ǉ: "lj",
                        "ⓜ": "m",
                        ｍ: "m",
                        ḿ: "m",
                        ṁ: "m",
                        ṃ: "m",
                        ɱ: "m",
                        ɯ: "m",
                        "ⓝ": "n",
                        ｎ: "n",
                        ǹ: "n",
                        ń: "n",
                        ñ: "n",
                        ṅ: "n",
                        ň: "n",
                        ṇ: "n",
                        ņ: "n",
                        ṋ: "n",
                        ṉ: "n",
                        ƞ: "n",
                        ɲ: "n",
                        ŉ: "n",
                        ꞑ: "n",
                        ꞥ: "n",
                        ǌ: "nj",
                        "ⓞ": "o",
                        ｏ: "o",
                        ò: "o",
                        ó: "o",
                        ô: "o",
                        ồ: "o",
                        ố: "o",
                        ỗ: "o",
                        ổ: "o",
                        õ: "o",
                        ṍ: "o",
                        ȭ: "o",
                        ṏ: "o",
                        ō: "o",
                        ṑ: "o",
                        ṓ: "o",
                        ŏ: "o",
                        ȯ: "o",
                        ȱ: "o",
                        ö: "o",
                        ȫ: "o",
                        ỏ: "o",
                        ő: "o",
                        ǒ: "o",
                        ȍ: "o",
                        ȏ: "o",
                        ơ: "o",
                        ờ: "o",
                        ớ: "o",
                        ỡ: "o",
                        ở: "o",
                        ợ: "o",
                        ọ: "o",
                        ộ: "o",
                        ǫ: "o",
                        ǭ: "o",
                        ø: "o",
                        ǿ: "o",
                        ɔ: "o",
                        ꝋ: "o",
                        ꝍ: "o",
                        ɵ: "o",
                        œ: "oe",
                        ƣ: "oi",
                        ȣ: "ou",
                        ꝏ: "oo",
                        "ⓟ": "p",
                        ｐ: "p",
                        ṕ: "p",
                        ṗ: "p",
                        ƥ: "p",
                        ᵽ: "p",
                        ꝑ: "p",
                        ꝓ: "p",
                        ꝕ: "p",
                        "ⓠ": "q",
                        ｑ: "q",
                        ɋ: "q",
                        ꝗ: "q",
                        ꝙ: "q",
                        "ⓡ": "r",
                        ｒ: "r",
                        ŕ: "r",
                        ṙ: "r",
                        ř: "r",
                        ȑ: "r",
                        ȓ: "r",
                        ṛ: "r",
                        ṝ: "r",
                        ŗ: "r",
                        ṟ: "r",
                        ɍ: "r",
                        ɽ: "r",
                        ꝛ: "r",
                        ꞧ: "r",
                        ꞃ: "r",
                        "ⓢ": "s",
                        ｓ: "s",
                        ß: "s",
                        ś: "s",
                        ṥ: "s",
                        ŝ: "s",
                        ṡ: "s",
                        š: "s",
                        ṧ: "s",
                        ṣ: "s",
                        ṩ: "s",
                        ș: "s",
                        ş: "s",
                        ȿ: "s",
                        ꞩ: "s",
                        ꞅ: "s",
                        ẛ: "s",
                        "ⓣ": "t",
                        ｔ: "t",
                        ṫ: "t",
                        ẗ: "t",
                        ť: "t",
                        ṭ: "t",
                        ț: "t",
                        ţ: "t",
                        ṱ: "t",
                        ṯ: "t",
                        ŧ: "t",
                        ƭ: "t",
                        ʈ: "t",
                        ⱦ: "t",
                        ꞇ: "t",
                        ꜩ: "tz",
                        "ⓤ": "u",
                        ｕ: "u",
                        ù: "u",
                        ú: "u",
                        û: "u",
                        ũ: "u",
                        ṹ: "u",
                        ū: "u",
                        ṻ: "u",
                        ŭ: "u",
                        ü: "u",
                        ǜ: "u",
                        ǘ: "u",
                        ǖ: "u",
                        ǚ: "u",
                        ủ: "u",
                        ů: "u",
                        ű: "u",
                        ǔ: "u",
                        ȕ: "u",
                        ȗ: "u",
                        ư: "u",
                        ừ: "u",
                        ứ: "u",
                        ữ: "u",
                        ử: "u",
                        ự: "u",
                        ụ: "u",
                        ṳ: "u",
                        ų: "u",
                        ṷ: "u",
                        ṵ: "u",
                        ʉ: "u",
                        "ⓥ": "v",
                        ｖ: "v",
                        ṽ: "v",
                        ṿ: "v",
                        ʋ: "v",
                        ꝟ: "v",
                        ʌ: "v",
                        ꝡ: "vy",
                        "ⓦ": "w",
                        ｗ: "w",
                        ẁ: "w",
                        ẃ: "w",
                        ŵ: "w",
                        ẇ: "w",
                        ẅ: "w",
                        ẘ: "w",
                        ẉ: "w",
                        ⱳ: "w",
                        "ⓧ": "x",
                        ｘ: "x",
                        ẋ: "x",
                        ẍ: "x",
                        "ⓨ": "y",
                        ｙ: "y",
                        ỳ: "y",
                        ý: "y",
                        ŷ: "y",
                        ỹ: "y",
                        ȳ: "y",
                        ẏ: "y",
                        ÿ: "y",
                        ỷ: "y",
                        ẙ: "y",
                        ỵ: "y",
                        ƴ: "y",
                        ɏ: "y",
                        ỿ: "y",
                        "ⓩ": "z",
                        ｚ: "z",
                        ź: "z",
                        ẑ: "z",
                        ż: "z",
                        ž: "z",
                        ẓ: "z",
                        ẕ: "z",
                        ƶ: "z",
                        ȥ: "z",
                        ɀ: "z",
                        ⱬ: "z",
                        ꝣ: "z",
                        Ά: "Α",
                        Έ: "Ε",
                        Ή: "Η",
                        Ί: "Ι",
                        Ϊ: "Ι",
                        Ό: "Ο",
                        Ύ: "Υ",
                        Ϋ: "Υ",
                        Ώ: "Ω",
                        ά: "α",
                        έ: "ε",
                        ή: "η",
                        ί: "ι",
                        ϊ: "ι",
                        ΐ: "ι",
                        ό: "ο",
                        ύ: "υ",
                        ϋ: "υ",
                        ΰ: "υ",
                        ώ: "ω",
                        ς: "σ",
                        "’": "'",
                    };
                }),
                t.define("select2/data/base", ["../utils"], function (s) {
                    function i(t, e) {
                        i.__super__.constructor.call(this);
                    }
                    return (
                        s.Extend(i, s.Observable),
                        (i.prototype.current = function (t) {
                            throw new Error("The `current` method must be defined in child classes.");
                        }),
                        (i.prototype.query = function (t, e) {
                            throw new Error("The `query` method must be defined in child classes.");
                        }),
                        (i.prototype.bind = function (t, e) {}),
                        (i.prototype.destroy = function () {}),
                        (i.prototype.generateResultId = function (t, e) {
                            var i = t.id + "-result-";
                            return (i += s.generateChars(4)), null != e.id ? (i += "-" + e.id.toString()) : (i += "-" + s.generateChars(4)), i;
                        }),
                        i
                    );
                }),
                t.define("select2/data/select", ["./base", "../utils", "jquery"], function (t, a, l) {
                    function i(t, e) {
                        (this.$element = t), (this.options = e), i.__super__.constructor.call(this);
                    }
                    return (
                        a.Extend(i, t),
                        (i.prototype.current = function (t) {
                            var i = [],
                                s = this;
                            this.$element.find(":selected").each(function () {
                                var t = l(this),
                                    e = s.item(t);
                                i.push(e);
                            }),
                                t(i);
                        }),
                        (i.prototype.select = function (n) {
                            var t,
                                o = this;
                            if (((n.selected = !0), l(n.element).is("option"))) return (n.element.selected = !0), void this.$element.trigger("change");
                            this.$element.prop("multiple")
                                ? this.current(function (t) {
                                      var e = [];
                                      (n = [n]).push.apply(n, t);
                                      for (var i = 0; i < n.length; i++) {
                                          var s = n[i].id;
                                          -1 === l.inArray(s, e) && e.push(s);
                                      }
                                      o.$element.val(e), o.$element.trigger("change");
                                  })
                                : ((t = n.id), this.$element.val(t), this.$element.trigger("change"));
                        }),
                        (i.prototype.unselect = function (n) {
                            var o = this;
                            if (this.$element.prop("multiple")) {
                                if (((n.selected = !1), l(n.element).is("option"))) return (n.element.selected = !1), void this.$element.trigger("change");
                                this.current(function (t) {
                                    for (var e = [], i = 0; i < t.length; i++) {
                                        var s = t[i].id;
                                        s !== n.id && -1 === l.inArray(s, e) && e.push(s);
                                    }
                                    o.$element.val(e), o.$element.trigger("change");
                                });
                            }
                        }),
                        (i.prototype.bind = function (t, e) {
                            var i = this;
                            (this.container = t).on("select", function (t) {
                                i.select(t.data);
                            }),
                                t.on("unselect", function (t) {
                                    i.unselect(t.data);
                                });
                        }),
                        (i.prototype.destroy = function () {
                            this.$element.find("*").each(function () {
                                a.RemoveData(this);
                            });
                        }),
                        (i.prototype.query = function (s, t) {
                            var n = [],
                                o = this;
                            this.$element.children().each(function () {
                                var t,
                                    e,
                                    i = l(this);
                                (i.is("option") || i.is("optgroup")) && ((t = o.item(i)), null !== (e = o.matches(s, t)) && n.push(e));
                            }),
                                t({ results: n });
                        }),
                        (i.prototype.addOptions = function (t) {
                            a.appendMany(this.$element, t);
                        }),
                        (i.prototype.option = function (t) {
                            var e;
                            t.children ? ((e = document.createElement("optgroup")).label = t.text) : void 0 !== (e = document.createElement("option")).textContent ? (e.textContent = t.text) : (e.innerText = t.text),
                                void 0 !== t.id && (e.value = t.id),
                                t.disabled && (e.disabled = !0),
                                t.selected && (e.selected = !0),
                                t.title && (e.title = t.title);
                            var i = l(e),
                                s = this._normalizeItem(t);
                            return (s.element = e), a.StoreData(e, "data", s), i;
                        }),
                        (i.prototype.item = function (t) {
                            var e = {};
                            if (null != (e = a.GetData(t[0], "data"))) return e;
                            if (t.is("option")) e = { id: t.val(), text: t.text(), disabled: t.prop("disabled"), selected: t.prop("selected"), title: t.prop("title") };
                            else if (t.is("optgroup")) {
                                e = { text: t.prop("label"), children: [], title: t.prop("title") };
                                for (var i = t.children("option"), s = [], n = 0; n < i.length; n++) {
                                    var o = l(i[n]),
                                        r = this.item(o);
                                    s.push(r);
                                }
                                e.children = s;
                            }
                            return ((e = this._normalizeItem(e)).element = t[0]), a.StoreData(t[0], "data", e), e;
                        }),
                        (i.prototype._normalizeItem = function (t) {
                            return (
                                t !== Object(t) && (t = { id: t, text: t }),
                                null != (t = l.extend({}, { text: "" }, t)).id && (t.id = t.id.toString()),
                                null != t.text && (t.text = t.text.toString()),
                                null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)),
                                l.extend({}, { selected: !1, disabled: !1 }, t)
                            );
                        }),
                        (i.prototype.matches = function (t, e) {
                            return this.options.get("matcher")(t, e);
                        }),
                        i
                    );
                }),
                t.define("select2/data/array", ["./select", "../utils", "jquery"], function (t, p, f) {
                    function s(t, e) {
                        var i = e.get("data") || [];
                        s.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(i));
                    }
                    return (
                        p.Extend(s, t),
                        (s.prototype.select = function (i) {
                            var t = this.$element.find("option").filter(function (t, e) {
                                return e.value == i.id.toString();
                            });
                            0 === t.length && ((t = this.option(i)), this.addOptions(t)), s.__super__.select.call(this, i);
                        }),
                        (s.prototype.convertToOptions = function (t) {
                            var e = this,
                                i = this.$element.find("option"),
                                s = i
                                    .map(function () {
                                        return e.item(f(this)).id;
                                    })
                                    .get(),
                                n = [];
                            for (var o = 0; o < t.length; o++) {
                                var r,
                                    a,
                                    l,
                                    h,
                                    c,
                                    u,
                                    d = this._normalizeItem(t[o]);
                                0 <= f.inArray(d.id, s)
                                    ? ((r = i.filter(
                                          (function (t) {
                                              return function () {
                                                  return f(this).val() == t.id;
                                              };
                                          })(d)
                                      )),
                                      (a = this.item(r)),
                                      (l = f.extend(!0, {}, d, a)),
                                      (h = this.option(l)),
                                      r.replaceWith(h))
                                    : ((c = this.option(d)), d.children && ((u = this.convertToOptions(d.children)), p.appendMany(c, u)), n.push(c));
                            }
                            return n;
                        }),
                        s
                    );
                }),
                t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (t, e, o) {
                    function i(t, e) {
                        (this.ajaxOptions = this._applyDefaults(e.get("ajax"))), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, t, e);
                    }
                    return (
                        e.Extend(i, t),
                        (i.prototype._applyDefaults = function (t) {
                            var e = {
                                data: function (t) {
                                    return o.extend({}, t, { q: t.term });
                                },
                                transport: function (t, e, i) {
                                    var s = o.ajax(t);
                                    return s.then(e), s.fail(i), s;
                                },
                            };
                            return o.extend({}, e, t, !0);
                        }),
                        (i.prototype.processResults = function (t) {
                            return t;
                        }),
                        (i.prototype.query = function (i, s) {
                            var n = this;
                            null != this._request && (o.isFunction(this._request.abort) && this._request.abort(), (this._request = null));
                            var e = o.extend({ type: "GET" }, this.ajaxOptions);
                            function t() {
                                var t = e.transport(
                                    e,
                                    function (t) {
                                        var e = n.processResults(t, i);
                                        n.options.get("debug") &&
                                            window.console &&
                                            console.error &&
                                            ((e && e.results && o.isArray(e.results)) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),
                                            s(e);
                                    },
                                    function () {
                                        ("status" in t && (0 === t.status || "0" === t.status)) || n.trigger("results:message", { message: "errorLoading" });
                                    }
                                );
                                n._request = t;
                            }
                            "function" == typeof e.url && (e.url = e.url.call(this.$element, i)),
                                "function" == typeof e.data && (e.data = e.data.call(this.$element, i)),
                                this.ajaxOptions.delay && null != i.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), (this._queryTimeout = window.setTimeout(t, this.ajaxOptions.delay))) : t();
                        }),
                        i
                    );
                }),
                t.define("select2/data/tags", ["jquery"], function (c) {
                    function t(t, e, i) {
                        var s = i.get("tags"),
                            n = i.get("createTag");
                        void 0 !== n && (this.createTag = n);
                        var o = i.get("insertTag");
                        if ((void 0 !== o && (this.insertTag = o), t.call(this, e, i), c.isArray(s)))
                            for (var r = 0; r < s.length; r++) {
                                var a = s[r],
                                    l = this._normalizeItem(a),
                                    h = this.option(l);
                                this.$element.append(h);
                            }
                    }
                    return (
                        (t.prototype.query = function (t, h, c) {
                            var u = this;
                            this._removeOldTags(),
                                null != h.term && null == h.page
                                    ? t.call(this, h, function t(e, i) {
                                          for (var s = e.results, n = 0; n < s.length; n++) {
                                              var o = s[n],
                                                  r = null != o.children && !t({ results: o.children }, !0);
                                              if ((o.text || "").toUpperCase() === (h.term || "").toUpperCase() || r) return !i && ((e.data = s), void c(e));
                                          }
                                          if (i) return !0;
                                          var a,
                                              l = u.createTag(h);
                                          null != l && ((a = u.option(l)).attr("data-select2-tag", !0), u.addOptions([a]), u.insertTag(s, l)), (e.results = s), c(e);
                                      })
                                    : t.call(this, h, c);
                        }),
                        (t.prototype.createTag = function (t, e) {
                            var i = c.trim(e.term);
                            return "" === i ? null : { id: i, text: i };
                        }),
                        (t.prototype.insertTag = function (t, e, i) {
                            e.unshift(i);
                        }),
                        (t.prototype._removeOldTags = function (t) {
                            this._lastTag,
                                this.$element.find("option[data-select2-tag]").each(function () {
                                    this.selected || c(this).remove();
                                });
                        }),
                        t
                    );
                }),
                t.define("select2/data/tokenizer", ["jquery"], function (u) {
                    function t(t, e, i) {
                        var s = i.get("tokenizer");
                        void 0 !== s && (this.tokenizer = s), t.call(this, e, i);
                    }
                    return (
                        (t.prototype.bind = function (t, e, i) {
                            t.call(this, e, i), (this.$search = e.dropdown.$search || e.selection.$search || i.find(".select2-search__field"));
                        }),
                        (t.prototype.query = function (t, e, i) {
                            var s = this;
                            e.term = e.term || "";
                            var n = this.tokenizer(e, this.options, function (t) {
                                var e,
                                    i = s._normalizeItem(t);
                                s.$element.find("option").filter(function () {
                                    return u(this).val() === i.id;
                                }).length || ((e = s.option(i)).attr("data-select2-tag", !0), s._removeOldTags(), s.addOptions([e])),
                                    s.trigger("select", { data: i });
                            });
                            n.term !== e.term && (this.$search.length && (this.$search.val(n.term), this.$search.focus()), (e.term = n.term)), t.call(this, e, i);
                        }),
                        (t.prototype.tokenizer = function (t, e, i, s) {
                            for (
                                var n = i.get("tokenSeparators") || [],
                                    o = e.term,
                                    r = 0,
                                    a =
                                        this.createTag ||
                                        function (t) {
                                            return { id: t.term, text: t.term };
                                        };
                                r < o.length;

                            ) {
                                var l,
                                    h,
                                    c = o[r];
                                -1 !== u.inArray(c, n) ? ((l = o.substr(0, r)), null != (h = a(u.extend({}, e, { term: l }))) ? (s(h), (o = o.substr(r + 1) || ""), (r = 0)) : r++) : r++;
                            }
                            return { term: o };
                        }),
                        t
                    );
                }),
                t.define("select2/data/minimumInputLength", [], function () {
                    function t(t, e, i) {
                        (this.minimumInputLength = i.get("minimumInputLength")), t.call(this, e, i);
                    }
                    return (
                        (t.prototype.query = function (t, e, i) {
                            (e.term = e.term || ""),
                                e.term.length < this.minimumInputLength ? this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: e.term, params: e } }) : t.call(this, e, i);
                        }),
                        t
                    );
                }),
                t.define("select2/data/maximumInputLength", [], function () {
                    function t(t, e, i) {
                        (this.maximumInputLength = i.get("maximumInputLength")), t.call(this, e, i);
                    }
                    return (
                        (t.prototype.query = function (t, e, i) {
                            (e.term = e.term || ""),
                                0 < this.maximumInputLength && e.term.length > this.maximumInputLength
                                    ? this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: e.term, params: e } })
                                    : t.call(this, e, i);
                        }),
                        t
                    );
                }),
                t.define("select2/data/maximumSelectionLength", [], function () {
                    function t(t, e, i) {
                        (this.maximumSelectionLength = i.get("maximumSelectionLength")), t.call(this, e, i);
                    }
                    return (
                        (t.prototype.query = function (i, s, n) {
                            var o = this;
                            this.current(function (t) {
                                var e = null != t ? t.length : 0;
                                0 < o.maximumSelectionLength && e >= o.maximumSelectionLength ? o.trigger("results:message", { message: "maximumSelected", args: { maximum: o.maximumSelectionLength } }) : i.call(o, s, n);
                            });
                        }),
                        t
                    );
                }),
                t.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
                    function i(t, e) {
                        (this.$element = t), (this.options = e), i.__super__.constructor.call(this);
                    }
                    return (
                        t.Extend(i, t.Observable),
                        (i.prototype.render = function () {
                            var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                            return t.attr("dir", this.options.get("dir")), (this.$dropdown = t);
                        }),
                        (i.prototype.bind = function () {}),
                        (i.prototype.position = function (t, e) {}),
                        (i.prototype.destroy = function () {
                            this.$dropdown.remove();
                        }),
                        i
                    );
                }),
                t.define("select2/dropdown/search", ["jquery", "../utils"], function (n, t) {
                    function e() {}
                    return (
                        (e.prototype.render = function (t) {
                            var e = t.call(this),
                                i = n(
                                    '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>'
                                );
                            return (this.$searchContainer = i), (this.$search = i.find("input")), e.prepend(i), e;
                        }),
                        (e.prototype.bind = function (t, e, i) {
                            var s = this;
                            t.call(this, e, i),
                                this.$search.on("keydown", function (t) {
                                    s.trigger("keypress", t), (s._keyUpPrevented = t.isDefaultPrevented());
                                }),
                                this.$search.on("input", function (t) {
                                    n(this).off("keyup");
                                }),
                                this.$search.on("keyup input", function (t) {
                                    s.handleSearch(t);
                                }),
                                e.on("open", function () {
                                    s.$search.attr("tabindex", 0),
                                        s.$search.focus(),
                                        window.setTimeout(function () {
                                            s.$search.focus();
                                        }, 0);
                                }),
                                e.on("close", function () {
                                    s.$search.attr("tabindex", -1), s.$search.val(""), s.$search.blur();
                                }),
                                e.on("focus", function () {
                                    e.isOpen() || s.$search.focus();
                                }),
                                e.on("results:all", function (t) {
                                    (null != t.query.term && "" !== t.query.term) || (s.showSearch(t) ? s.$searchContainer.removeClass("select2-search--hide") : s.$searchContainer.addClass("select2-search--hide"));
                                });
                        }),
                        (e.prototype.handleSearch = function (t) {
                            var e;
                            this._keyUpPrevented || ((e = this.$search.val()), this.trigger("query", { term: e })), (this._keyUpPrevented = !1);
                        }),
                        (e.prototype.showSearch = function (t, e) {
                            return !0;
                        }),
                        e
                    );
                }),
                t.define("select2/dropdown/hidePlaceholder", [], function () {
                    function t(t, e, i, s) {
                        (this.placeholder = this.normalizePlaceholder(i.get("placeholder"))), t.call(this, e, i, s);
                    }
                    return (
                        (t.prototype.append = function (t, e) {
                            (e.results = this.removePlaceholder(e.results)), t.call(this, e);
                        }),
                        (t.prototype.normalizePlaceholder = function (t, e) {
                            return "string" == typeof e && (e = { id: "", text: e }), e;
                        }),
                        (t.prototype.removePlaceholder = function (t, e) {
                            for (var i = e.slice(0), s = e.length - 1; 0 <= s; s--) {
                                var n = e[s];
                                this.placeholder.id === n.id && i.splice(s, 1);
                            }
                            return i;
                        }),
                        t
                    );
                }),
                t.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
                    function t(t, e, i, s) {
                        (this.lastParams = {}), t.call(this, e, i, s), (this.$loadingMore = this.createLoadingMore()), (this.loading = !1);
                    }
                    return (
                        (t.prototype.append = function (t, e) {
                            this.$loadingMore.remove(), (this.loading = !1), t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore);
                        }),
                        (t.prototype.bind = function (t, e, i) {
                            var s = this;
                            t.call(this, e, i),
                                e.on("query", function (t) {
                                    (s.lastParams = t), (s.loading = !0);
                                }),
                                e.on("query:append", function (t) {
                                    (s.lastParams = t), (s.loading = !0);
                                }),
                                this.$results.on("scroll", function () {
                                    var t,
                                        e = n.contains(document.documentElement, s.$loadingMore[0]);
                                    !s.loading && e && ((t = s.$results.offset().top + s.$results.outerHeight(!1)), s.$loadingMore.offset().top + s.$loadingMore.outerHeight(!1) <= t + 50 && s.loadMore());
                                });
                        }),
                        (t.prototype.loadMore = function () {
                            this.loading = !0;
                            var t = n.extend({}, { page: 1 }, this.lastParams);
                            t.page++, this.trigger("query:append", t);
                        }),
                        (t.prototype.showLoadingMore = function (t, e) {
                            return e.pagination && e.pagination.more;
                        }),
                        (t.prototype.createLoadingMore = function () {
                            var t = n('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                                e = this.options.get("translations").get("loadingMore");
                            return t.html(e(this.lastParams)), t;
                        }),
                        t
                    );
                }),
                t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (f, a) {
                    function t(t, e, i) {
                        (this.$dropdownParent = i.get("dropdownParent") || f(document.body)), t.call(this, e, i);
                    }
                    return (
                        (t.prototype.bind = function (t, e, i) {
                            var s = this,
                                n = !1;
                            t.call(this, e, i),
                                e.on("open", function () {
                                    s._showDropdown(),
                                        s._attachPositioningHandler(e),
                                        n ||
                                            ((n = !0),
                                            e.on("results:all", function () {
                                                s._positionDropdown(), s._resizeDropdown();
                                            }),
                                            e.on("results:append", function () {
                                                s._positionDropdown(), s._resizeDropdown();
                                            }));
                                }),
                                e.on("close", function () {
                                    s._hideDropdown(), s._detachPositioningHandler(e);
                                }),
                                this.$dropdownContainer.on("mousedown", function (t) {
                                    t.stopPropagation();
                                });
                        }),
                        (t.prototype.destroy = function (t) {
                            t.call(this), this.$dropdownContainer.remove();
                        }),
                        (t.prototype.position = function (t, e, i) {
                            e.attr("class", i.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({ position: "absolute", top: -999999 }), (this.$container = i);
                        }),
                        (t.prototype.render = function (t) {
                            var e = f("<span></span>"),
                                i = t.call(this);
                            return e.append(i), (this.$dropdownContainer = e);
                        }),
                        (t.prototype._hideDropdown = function (t) {
                            this.$dropdownContainer.detach();
                        }),
                        (t.prototype._attachPositioningHandler = function (t, e) {
                            var i = this,
                                s = "scroll.select2." + e.id,
                                n = "resize.select2." + e.id,
                                o = "orientationchange.select2." + e.id,
                                r = this.$container.parents().filter(a.hasScroll);
                            r.each(function () {
                                a.StoreData(this, "select2-scroll-position", { x: f(this).scrollLeft(), y: f(this).scrollTop() });
                            }),
                                r.on(s, function (t) {
                                    var e = a.GetData(this, "select2-scroll-position");
                                    f(this).scrollTop(e.y);
                                }),
                                f(window).on(s + " " + n + " " + o, function (t) {
                                    i._positionDropdown(), i._resizeDropdown();
                                });
                        }),
                        (t.prototype._detachPositioningHandler = function (t, e) {
                            var i = "scroll.select2." + e.id,
                                s = "resize.select2." + e.id,
                                n = "orientationchange.select2." + e.id;
                            this.$container.parents().filter(a.hasScroll).off(i), f(window).off(i + " " + s + " " + n);
                        }),
                        (t.prototype._positionDropdown = function () {
                            var t = f(window),
                                e = this.$dropdown.hasClass("select2-dropdown--above"),
                                i = this.$dropdown.hasClass("select2-dropdown--below"),
                                s = null,
                                n = this.$container.offset();
                            n.bottom = n.top + this.$container.outerHeight(!1);
                            var o = { height: this.$container.outerHeight(!1) };
                            (o.top = n.top), (o.bottom = n.top + o.height);
                            var r = this.$dropdown.outerHeight(!1),
                                a = t.scrollTop(),
                                l = t.scrollTop() + t.height(),
                                h = a < n.top - r,
                                c = l > n.bottom + r,
                                u = { left: n.left, top: o.bottom },
                                d = this.$dropdownParent;
                            "static" === d.css("position") && (d = d.offsetParent());
                            var p = d.offset();
                            (u.top -= p.top),
                                (u.left -= p.left),
                                e || i || (s = "below"),
                                c || !h || e ? !h && c && e && (s = "below") : (s = "above"),
                                ("above" == s || (e && "below" !== s)) && (u.top = o.top - p.top - r),
                                null != s &&
                                    (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + s),
                                    this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + s)),
                                this.$dropdownContainer.css(u);
                        }),
                        (t.prototype._resizeDropdown = function () {
                            var t = { width: this.$container.outerWidth(!1) + "px" };
                            this.options.get("dropdownAutoWidth") && ((t.minWidth = t.width), (t.position = "relative"), (t.width = "auto")), this.$dropdown.css(t);
                        }),
                        (t.prototype._showDropdown = function (t) {
                            this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
                        }),
                        t
                    );
                }),
                t.define("select2/dropdown/minimumResultsForSearch", [], function () {
                    function t(t, e, i, s) {
                        (this.minimumResultsForSearch = i.get("minimumResultsForSearch")), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, i, s);
                    }
                    return (
                        (t.prototype.showSearch = function (t, e) {
                            return (
                                !(
                                    (function t(e) {
                                        for (var i = 0, s = 0; s < e.length; s++) {
                                            var n = e[s];
                                            n.children ? (i += t(n.children)) : i++;
                                        }
                                        return i;
                                    })(e.data.results) < this.minimumResultsForSearch
                                ) && t.call(this, e)
                            );
                        }),
                        t
                    );
                }),
                t.define("select2/dropdown/selectOnClose", ["../utils"], function (o) {
                    function t() {}
                    return (
                        (t.prototype.bind = function (t, e, i) {
                            var s = this;
                            t.call(this, e, i),
                                e.on("close", function (t) {
                                    s._handleSelectOnClose(t);
                                });
                        }),
                        (t.prototype._handleSelectOnClose = function (t, e) {
                            if (e && null != e.originalSelect2Event) {
                                var i = e.originalSelect2Event;
                                if ("select" === i._type || "unselect" === i._type) return;
                            }
                            var s,
                                n = this.getHighlightedResults();
                            n.length < 1 || (null != (s = o.GetData(n[0], "data")).element && s.element.selected) || (null == s.element && s.selected) || this.trigger("select", { data: s });
                        }),
                        t
                    );
                }),
                t.define("select2/dropdown/closeOnSelect", [], function () {
                    function t() {}
                    return (
                        (t.prototype.bind = function (t, e, i) {
                            var s = this;
                            t.call(this, e, i),
                                e.on("select", function (t) {
                                    s._selectTriggered(t);
                                }),
                                e.on("unselect", function (t) {
                                    s._selectTriggered(t);
                                });
                        }),
                        (t.prototype._selectTriggered = function (t, e) {
                            var i = e.originalEvent;
                            (i && (i.ctrlKey || i.metaKey)) || this.trigger("close", { originalEvent: i, originalSelect2Event: e });
                        }),
                        t
                    );
                }),
                t.define("select2/i18n/en", [], function () {
                    return {
                        errorLoading: function () {
                            return "The results could not be loaded.";
                        },
                        inputTooLong: function (t) {
                            var e = t.input.length - t.maximum,
                                i = "Please delete " + e + " character";
                            return 1 != e && (i += "s"), i;
                        },
                        inputTooShort: function (t) {
                            return "Please enter " + (t.minimum - t.input.length) + " or more characters";
                        },
                        loadingMore: function () {
                            return "Loading more results…";
                        },
                        maximumSelected: function (t) {
                            var e = "You can only select " + t.maximum + " item";
                            return 1 != t.maximum && (e += "s"), e;
                        },
                        noResults: function () {
                            return "No results found";
                        },
                        searching: function () {
                            return "Searching…";
                        },
                        removeAllItems: function () {
                            return "Remove all items";
                        },
                    };
                }),
                t.define(
                    "select2/defaults",
                    [
                        "jquery",
                        "require",
                        "./results",
                        "./selection/single",
                        "./selection/multiple",
                        "./selection/placeholder",
                        "./selection/allowClear",
                        "./selection/search",
                        "./selection/eventRelay",
                        "./utils",
                        "./translation",
                        "./diacritics",
                        "./data/select",
                        "./data/array",
                        "./data/ajax",
                        "./data/tags",
                        "./data/tokenizer",
                        "./data/minimumInputLength",
                        "./data/maximumInputLength",
                        "./data/maximumSelectionLength",
                        "./dropdown",
                        "./dropdown/search",
                        "./dropdown/hidePlaceholder",
                        "./dropdown/infiniteScroll",
                        "./dropdown/attachBody",
                        "./dropdown/minimumResultsForSearch",
                        "./dropdown/selectOnClose",
                        "./dropdown/closeOnSelect",
                        "./i18n/en",
                    ],
                    function (f, m, g, v, y, _, b, w, x, k, C, e, T, S, D, I, E, A, P, O, M, z, $, H, L, W, N, F, t) {
                        function i() {
                            this.reset();
                        }
                        return (
                            (i.prototype.apply = function (t) {
                                var e, i, s, n, o, r;
                                if (
                                    (null == (t = f.extend(!0, {}, this.defaults, t)).dataAdapter &&
                                        (null != t.ajax ? (t.dataAdapter = D) : null != t.data ? (t.dataAdapter = S) : (t.dataAdapter = T),
                                        0 < t.minimumInputLength && (t.dataAdapter = k.Decorate(t.dataAdapter, A)),
                                        0 < t.maximumInputLength && (t.dataAdapter = k.Decorate(t.dataAdapter, P)),
                                        0 < t.maximumSelectionLength && (t.dataAdapter = k.Decorate(t.dataAdapter, O)),
                                        t.tags && (t.dataAdapter = k.Decorate(t.dataAdapter, I)),
                                        (null == t.tokenSeparators && null == t.tokenizer) || (t.dataAdapter = k.Decorate(t.dataAdapter, E)),
                                        null != t.query && ((e = m(t.amdBase + "compat/query")), (t.dataAdapter = k.Decorate(t.dataAdapter, e))),
                                        null != t.initSelection && ((i = m(t.amdBase + "compat/initSelection")), (t.dataAdapter = k.Decorate(t.dataAdapter, i)))),
                                    null == t.resultsAdapter &&
                                        ((t.resultsAdapter = g),
                                        null != t.ajax && (t.resultsAdapter = k.Decorate(t.resultsAdapter, H)),
                                        null != t.placeholder && (t.resultsAdapter = k.Decorate(t.resultsAdapter, $)),
                                        t.selectOnClose && (t.resultsAdapter = k.Decorate(t.resultsAdapter, N))),
                                    null == t.dropdownAdapter &&
                                        (t.multiple ? (t.dropdownAdapter = M) : ((s = k.Decorate(M, z)), (t.dropdownAdapter = s)),
                                        0 !== t.minimumResultsForSearch && (t.dropdownAdapter = k.Decorate(t.dropdownAdapter, W)),
                                        t.closeOnSelect && (t.dropdownAdapter = k.Decorate(t.dropdownAdapter, F)),
                                        (null == t.dropdownCssClass && null == t.dropdownCss && null == t.adaptDropdownCssClass) || ((n = m(t.amdBase + "compat/dropdownCss")), (t.dropdownAdapter = k.Decorate(t.dropdownAdapter, n))),
                                        (t.dropdownAdapter = k.Decorate(t.dropdownAdapter, L))),
                                    null == t.selectionAdapter &&
                                        (t.multiple ? (t.selectionAdapter = y) : (t.selectionAdapter = v),
                                        null != t.placeholder && (t.selectionAdapter = k.Decorate(t.selectionAdapter, _)),
                                        t.allowClear && (t.selectionAdapter = k.Decorate(t.selectionAdapter, b)),
                                        t.multiple && (t.selectionAdapter = k.Decorate(t.selectionAdapter, w)),
                                        (null == t.containerCssClass && null == t.containerCss && null == t.adaptContainerCssClass) || ((o = m(t.amdBase + "compat/containerCss")), (t.selectionAdapter = k.Decorate(t.selectionAdapter, o))),
                                        (t.selectionAdapter = k.Decorate(t.selectionAdapter, x))),
                                    "string" == typeof t.language && (0 < t.language.indexOf("-") ? ((r = t.language.split("-")[0]), (t.language = [t.language, r])) : (t.language = [t.language])),
                                    f.isArray(t.language))
                                ) {
                                    var a = new C();
                                    t.language.push("en");
                                    for (var l = t.language, h = 0; h < l.length; h++) {
                                        var c = l[h],
                                            u = {};
                                        try {
                                            u = C.loadPath(c);
                                        } catch (e) {
                                            try {
                                                (c = this.defaults.amdLanguageBase + c), (u = C.loadPath(c));
                                            } catch (e) {
                                                t.debug && window.console && console.warn && console.warn('Select2: The language file for "' + c + '" could not be automatically loaded. A fallback will be used instead.');
                                                continue;
                                            }
                                        }
                                        a.extend(u);
                                    }
                                    t.translations = a;
                                } else {
                                    var d = C.loadPath(this.defaults.amdLanguageBase + "en"),
                                        p = new C(t.language);
                                    p.extend(d), (t.translations = p);
                                }
                                return t;
                            }),
                            (i.prototype.reset = function () {
                                function a(t) {
                                    return t.replace(/[^\u0000-\u007E]/g, function (t) {
                                        return e[t] || t;
                                    });
                                }
                                this.defaults = {
                                    amdBase: "./",
                                    amdLanguageBase: "./i18n/",
                                    closeOnSelect: !0,
                                    debug: !1,
                                    dropdownAutoWidth: !1,
                                    escapeMarkup: k.escapeMarkup,
                                    language: t,
                                    matcher: function t(e, i) {
                                        if ("" === f.trim(e.term)) return i;
                                        if (i.children && 0 < i.children.length) {
                                            for (var s = f.extend(!0, {}, i), n = i.children.length - 1; 0 <= n; n--) null == t(e, i.children[n]) && s.children.splice(n, 1);
                                            return 0 < s.children.length ? s : t(e, s);
                                        }
                                        var o = a(i.text).toUpperCase(),
                                            r = a(e.term).toUpperCase();
                                        return -1 < o.indexOf(r) ? i : null;
                                    },
                                    minimumInputLength: 0,
                                    maximumInputLength: 0,
                                    maximumSelectionLength: 0,
                                    minimumResultsForSearch: 0,
                                    selectOnClose: !1,
                                    scrollAfterSelect: !1,
                                    sorter: function (t) {
                                        return t;
                                    },
                                    templateResult: function (t) {
                                        return t.text;
                                    },
                                    templateSelection: function (t) {
                                        return t.text;
                                    },
                                    theme: "default",
                                    width: "resolve",
                                };
                            }),
                            (i.prototype.set = function (t, e) {
                                var i = {};
                                i[f.camelCase(t)] = e;
                                var s = k._convertData(i);
                                f.extend(!0, this.defaults, s);
                            }),
                            new i()
                        );
                    }
                ),
                t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (s, c, n, u) {
                    function t(t, e) {
                        var i;
                        (this.options = t),
                            null != e && this.fromElement(e),
                            (this.options = n.apply(this.options)),
                            e && e.is("input") && ((i = s(this.get("amdBase") + "compat/inputData")), (this.options.dataAdapter = u.Decorate(this.options.dataAdapter, i)));
                    }
                    return (
                        (t.prototype.fromElement = function (t) {
                            var e = ["select2"];
                            null == this.options.multiple && (this.options.multiple = t.prop("multiple")),
                                null == this.options.disabled && (this.options.disabled = t.prop("disabled")),
                                null == this.options.language && (t.prop("lang") ? (this.options.language = t.prop("lang").toLowerCase()) : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))),
                                null == this.options.dir && (t.prop("dir") ? (this.options.dir = t.prop("dir")) : t.closest("[dir]").prop("dir") ? (this.options.dir = t.closest("[dir]").prop("dir")) : (this.options.dir = "ltr")),
                                t.prop("disabled", this.options.disabled),
                                t.prop("multiple", this.options.multiple),
                                u.GetData(t[0], "select2Tags") &&
                                    (this.options.debug &&
                                        window.console &&
                                        console.warn &&
                                        console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
                                    u.StoreData(t[0], "data", u.GetData(t[0], "select2Tags")),
                                    u.StoreData(t[0], "tags", !0)),
                                u.GetData(t[0], "ajaxUrl") &&
                                    (this.options.debug &&
                                        window.console &&
                                        console.warn &&
                                        console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                                    t.attr("ajax--url", u.GetData(t[0], "ajaxUrl")),
                                    u.StoreData(t[0], "ajax-Url", u.GetData(t[0], "ajaxUrl")));
                            var i = {};
                            function s(t, e) {
                                return e.toUpperCase();
                            }
                            for (var n = 0; n < t[0].attributes.length; n++) {
                                var o,
                                    r,
                                    a = t[0].attributes[n].name;
                                "data-" == a.substr(0, "data-".length) && ((o = a.substring("data-".length)), (r = u.GetData(t[0], o)), (i[o.replace(/-([a-z])/g, s)] = r));
                            }
                            c.fn.jquery && "1." == c.fn.jquery.substr(0, 2) && t[0].dataset && (i = c.extend(!0, {}, t[0].dataset, i));
                            var l,
                                h = c.extend(!0, {}, u.GetData(t[0]), i);
                            for (l in (h = u._convertData(h))) -1 < c.inArray(l, e) || (c.isPlainObject(this.options[l]) ? c.extend(this.options[l], h[l]) : (this.options[l] = h[l]));
                            return this;
                        }),
                        (t.prototype.get = function (t) {
                            return this.options[t];
                        }),
                        (t.prototype.set = function (t, e) {
                            this.options[t] = e;
                        }),
                        t
                    );
                }),
                t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (n, h, c, s) {
                    var u = function (t, e) {
                        null != c.GetData(t[0], "select2") && c.GetData(t[0], "select2").destroy(), (this.$element = t), (this.id = this._generateId(t)), (e = e || {}), (this.options = new h(e, t)), u.__super__.constructor.call(this);
                        var i = t.attr("tabindex") || 0;
                        c.StoreData(t[0], "old-tabindex", i), t.attr("tabindex", "-1");
                        var s = this.options.get("dataAdapter");
                        this.dataAdapter = new s(t, this.options);
                        var n = this.render();
                        this._placeContainer(n);
                        var o = this.options.get("selectionAdapter");
                        (this.selection = new o(t, this.options)), (this.$selection = this.selection.render()), this.selection.position(this.$selection, n);
                        var r = this.options.get("dropdownAdapter");
                        (this.dropdown = new r(t, this.options)), (this.$dropdown = this.dropdown.render()), this.dropdown.position(this.$dropdown, n);
                        var a = this.options.get("resultsAdapter");
                        (this.results = new a(t, this.options, this.dataAdapter)), (this.$results = this.results.render()), this.results.position(this.$results, this.$dropdown);
                        var l = this;
                        this._bindAdapters(),
                            this._registerDomEvents(),
                            this._registerDataEvents(),
                            this._registerSelectionEvents(),
                            this._registerDropdownEvents(),
                            this._registerResultsEvents(),
                            this._registerEvents(),
                            this.dataAdapter.current(function (t) {
                                l.trigger("selection:update", { data: t });
                            }),
                            t.addClass("select2-hidden-accessible"),
                            t.attr("aria-hidden", "true"),
                            this._syncAttributes(),
                            c.StoreData(t[0], "select2", this),
                            t.data("select2", this);
                    };
                    return (
                        c.Extend(u, c.Observable),
                        (u.prototype._generateId = function (t) {
                            return "select2-" + (null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + c.generateChars(2) : c.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
                        }),
                        (u.prototype._placeContainer = function (t) {
                            t.insertAfter(this.$element);
                            var e = this._resolveWidth(this.$element, this.options.get("width"));
                            null != e && t.css("width", e);
                        }),
                        (u.prototype._resolveWidth = function (t, e) {
                            var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                            if ("resolve" == e) {
                                var s = this._resolveWidth(t, "style");
                                return null != s ? s : this._resolveWidth(t, "element");
                            }
                            if ("element" == e) {
                                var n = t.outerWidth(!1);
                                return n <= 0 ? "auto" : n + "px";
                            }
                            if ("style" != e) return e;
                            var o = t.attr("style");
                            if ("string" != typeof o) return null;
                            for (var r = o.split(";"), a = 0, l = r.length; a < l; a += 1) {
                                var h = r[a].replace(/\s/g, "").match(i);
                                if (null !== h && 1 <= h.length) return h[1];
                            }
                            return null;
                        }),
                        (u.prototype._bindAdapters = function () {
                            this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
                        }),
                        (u.prototype._registerDomEvents = function () {
                            var e = this;
                            this.$element.on("change.select2", function () {
                                e.dataAdapter.current(function (t) {
                                    e.trigger("selection:update", { data: t });
                                });
                            }),
                                this.$element.on("focus.select2", function (t) {
                                    e.trigger("focus", t);
                                }),
                                (this._syncA = c.bind(this._syncAttributes, this)),
                                (this._syncS = c.bind(this._syncSubtree, this)),
                                this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                            var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                            null != t
                                ? ((this._observer = new t(function (t) {
                                      n.each(t, e._syncA), n.each(t, e._syncS);
                                  })),
                                  this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 }))
                                : this.$element[0].addEventListener &&
                                  (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1));
                        }),
                        (u.prototype._registerDataEvents = function () {
                            var i = this;
                            this.dataAdapter.on("*", function (t, e) {
                                i.trigger(t, e);
                            });
                        }),
                        (u.prototype._registerSelectionEvents = function () {
                            var i = this,
                                s = ["toggle", "focus"];
                            this.selection.on("toggle", function () {
                                i.toggleDropdown();
                            }),
                                this.selection.on("focus", function (t) {
                                    i.focus(t);
                                }),
                                this.selection.on("*", function (t, e) {
                                    -1 === n.inArray(t, s) && i.trigger(t, e);
                                });
                        }),
                        (u.prototype._registerDropdownEvents = function () {
                            var i = this;
                            this.dropdown.on("*", function (t, e) {
                                i.trigger(t, e);
                            });
                        }),
                        (u.prototype._registerResultsEvents = function () {
                            var i = this;
                            this.results.on("*", function (t, e) {
                                i.trigger(t, e);
                            });
                        }),
                        (u.prototype._registerEvents = function () {
                            var i = this;
                            this.on("open", function () {
                                i.$container.addClass("select2-container--open");
                            }),
                                this.on("close", function () {
                                    i.$container.removeClass("select2-container--open");
                                }),
                                this.on("enable", function () {
                                    i.$container.removeClass("select2-container--disabled");
                                }),
                                this.on("disable", function () {
                                    i.$container.addClass("select2-container--disabled");
                                }),
                                this.on("blur", function () {
                                    i.$container.removeClass("select2-container--focus");
                                }),
                                this.on("query", function (e) {
                                    i.isOpen() || i.trigger("open", {}),
                                        this.dataAdapter.query(e, function (t) {
                                            i.trigger("results:all", { data: t, query: e });
                                        });
                                }),
                                this.on("query:append", function (e) {
                                    this.dataAdapter.query(e, function (t) {
                                        i.trigger("results:append", { data: t, query: e });
                                    });
                                }),
                                this.on("keypress", function (t) {
                                    var e = t.which;
                                    i.isOpen()
                                        ? e === s.ESC || e === s.TAB || (e === s.UP && t.altKey)
                                            ? (i.close(), t.preventDefault())
                                            : e === s.ENTER
                                            ? (i.trigger("results:select", {}), t.preventDefault())
                                            : e === s.SPACE && t.ctrlKey
                                            ? (i.trigger("results:toggle", {}), t.preventDefault())
                                            : e === s.UP
                                            ? (i.trigger("results:previous", {}), t.preventDefault())
                                            : e === s.DOWN && (i.trigger("results:next", {}), t.preventDefault())
                                        : (e === s.ENTER || e === s.SPACE || (e === s.DOWN && t.altKey)) && (i.open(), t.preventDefault());
                                });
                        }),
                        (u.prototype._syncAttributes = function () {
                            this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
                        }),
                        (u.prototype._syncSubtree = function (t, e) {
                            var i = !1,
                                s = this;
                            if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                                if (e)
                                    if (e.addedNodes && 0 < e.addedNodes.length) for (var n = 0; n < e.addedNodes.length; n++) e.addedNodes[n].selected && (i = !0);
                                    else e.removedNodes && 0 < e.removedNodes.length && (i = !0);
                                else i = !0;
                                i &&
                                    this.dataAdapter.current(function (t) {
                                        s.trigger("selection:update", { data: t });
                                    });
                            }
                        }),
                        (u.prototype.trigger = function (t, e) {
                            var i = u.__super__.trigger,
                                s = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting", clear: "clearing" };
                            if ((void 0 === e && (e = {}), t in s)) {
                                var n = s[t],
                                    o = { prevented: !1, name: t, args: e };
                                if ((i.call(this, n, o), o.prevented)) return void (e.prevented = !0);
                            }
                            i.call(this, t, e);
                        }),
                        (u.prototype.toggleDropdown = function () {
                            this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
                        }),
                        (u.prototype.open = function () {
                            this.isOpen() || this.trigger("query", {});
                        }),
                        (u.prototype.close = function () {
                            this.isOpen() && this.trigger("close", {});
                        }),
                        (u.prototype.isOpen = function () {
                            return this.$container.hasClass("select2-container--open");
                        }),
                        (u.prototype.hasFocus = function () {
                            return this.$container.hasClass("select2-container--focus");
                        }),
                        (u.prototype.focus = function (t) {
                            this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
                        }),
                        (u.prototype.enable = function (t) {
                            this.options.get("debug") &&
                                window.console &&
                                console.warn &&
                                console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),
                                (null != t && 0 !== t.length) || (t = [!0]);
                            var e = !t[0];
                            this.$element.prop("disabled", e);
                        }),
                        (u.prototype.data = function () {
                            this.options.get("debug") &&
                                0 < arguments.length &&
                                window.console &&
                                console.warn &&
                                console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                            var e = [];
                            return (
                                this.dataAdapter.current(function (t) {
                                    e = t;
                                }),
                                e
                            );
                        }),
                        (u.prototype.val = function (t) {
                            if (
                                (this.options.get("debug") &&
                                    window.console &&
                                    console.warn &&
                                    console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                                null == t || 0 === t.length)
                            )
                                return this.$element.val();
                            var e = t[0];
                            n.isArray(e) &&
                                (e = n.map(e, function (t) {
                                    return t.toString();
                                })),
                                this.$element.val(e).trigger("change");
                        }),
                        (u.prototype.destroy = function () {
                            this.$container.remove(),
                                this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA),
                                null != this._observer
                                    ? (this._observer.disconnect(), (this._observer = null))
                                    : this.$element[0].removeEventListener &&
                                      (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1),
                                      this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1),
                                      this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)),
                                (this._syncA = null),
                                (this._syncS = null),
                                this.$element.off(".select2"),
                                this.$element.attr("tabindex", c.GetData(this.$element[0], "old-tabindex")),
                                this.$element.removeClass("select2-hidden-accessible"),
                                this.$element.attr("aria-hidden", "false"),
                                c.RemoveData(this.$element[0]),
                                this.$element.removeData("select2"),
                                this.dataAdapter.destroy(),
                                this.selection.destroy(),
                                this.dropdown.destroy(),
                                this.results.destroy(),
                                (this.dataAdapter = null),
                                (this.selection = null),
                                (this.dropdown = null),
                                (this.results = null);
                        }),
                        (u.prototype.render = function () {
                            var t = n('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                            return t.attr("dir", this.options.get("dir")), (this.$container = t), this.$container.addClass("select2-container--" + this.options.get("theme")), c.StoreData(t[0], "element", this.$element), t;
                        }),
                        u
                    );
                }),
                t.define("jquery-mousewheel", ["jquery"], function (t) {
                    return t;
                }),
                t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (n, t, o, e, r) {
                    var a;
                    return (
                        null == n.fn.select2 &&
                            ((a = ["open", "close", "destroy"]),
                            (n.fn.select2 = function (e) {
                                if ("object" == typeof (e = e || {}))
                                    return (
                                        this.each(function () {
                                            var t = n.extend(!0, {}, e);
                                            new o(n(this), t);
                                        }),
                                        this
                                    );
                                if ("string" != typeof e) throw new Error("Invalid arguments for Select2: " + e);
                                var i,
                                    s = Array.prototype.slice.call(arguments, 1);
                                return (
                                    this.each(function () {
                                        var t = r.GetData(this, "select2");
                                        null == t && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."), (i = t[e].apply(t, s));
                                    }),
                                    -1 < n.inArray(e, a) ? this : i
                                );
                            })),
                        null == n.fn.select2.defaults && (n.fn.select2.defaults = e),
                        o
                    );
                }),
                { define: t.define, require: t.require }),
            c = h.require("jquery.select2");
        function w(t, e) {
            return a.call(t, e);
        }
        function u(t, e) {
            var i,
                s,
                n,
                o,
                r,
                a,
                l,
                h,
                c,
                u,
                d,
                p = e && e.split("/"),
                f = y.map,
                m = (f && f["*"]) || {};
            if (t) {
                for (r = (t = t.split("/")).length - 1, y.nodeIdCompat && b.test(t[r]) && (t[r] = t[r].replace(b, "")), "." === t[0].charAt(0) && p && (t = p.slice(0, p.length - 1).concat(t)), c = 0; c < t.length; c++)
                    if ("." === (d = t[c])) t.splice(c, 1), --c;
                    else if (".." === d) {
                        if (0 === c || (1 === c && ".." === t[2]) || ".." === t[c - 1]) continue;
                        0 < c && (t.splice(c - 1, 2), (c -= 2));
                    }
                t = t.join("/");
            }
            if ((p || m) && f) {
                for (c = (i = t.split("/")).length; 0 < c; --c) {
                    if (((s = i.slice(0, c).join("/")), p))
                        for (u = p.length; 0 < u; --u)
                            if ((n = (n = f[p.slice(0, u).join("/")]) && n[s])) {
                                (o = n), (a = c);
                                break;
                            }
                    if (o) break;
                    !l && m && m[s] && ((l = m[s]), (h = c));
                }
                !o && l && ((o = l), (a = h)), o && (i.splice(0, a, o), (t = i.join("/")));
            }
            return t;
        }
        function x(e, i) {
            return function () {
                var t = l.call(arguments, 0);
                return "string" != typeof t[0] && 1 === t.length && t.push(null), r.apply(p, t.concat([e, i]));
            };
        }
        function k(t) {
            var e;
            if ((w(v, t) && ((e = v[t]), delete v[t], (_[t] = !0), o.apply(p, e)), !w(g, t) && !w(_, t))) throw new Error("No " + t);
            return g[t];
        }
        function d(t) {
            var e,
                i = t ? t.indexOf("!") : -1;
            return -1 < i && ((e = t.substring(0, i)), (t = t.substring(i + 1, t.length))), [e, t];
        }
        function C(t) {
            return t ? d(t) : [];
        }
        return (e.fn.select2.amd = h), c;
    }),
    (function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? (module.exports = t(require("jquery"))) : t(jQuery);
    })(function (h) {
        "use strict";
        var n,
            o = window.Slick || {};
        (n = 0),
            ((o = function (t, e) {
                var i,
                    s = this;
                (s.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: h(t),
                    appendDots: h(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (t, e) {
                        return h('<button type="button" />').text(e + 1);
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: 0.35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3,
                }),
                    (s.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: !1,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: !1,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1,
                    }),
                    h.extend(s, s.initials),
                    (s.activeBreakpoint = null),
                    (s.animType = null),
                    (s.animProp = null),
                    (s.breakpoints = []),
                    (s.breakpointSettings = []),
                    (s.cssTransitions = !1),
                    (s.focussed = !1),
                    (s.interrupted = !1),
                    (s.hidden = "hidden"),
                    (s.paused = !0),
                    (s.positionProp = null),
                    (s.respondTo = null),
                    (s.rowCount = 1),
                    (s.shouldClick = !0),
                    (s.$slider = h(t)),
                    (s.$slidesCache = null),
                    (s.transformType = null),
                    (s.transitionType = null),
                    (s.visibilityChange = "visibilitychange"),
                    (s.windowWidth = 0),
                    (s.windowTimer = null),
                    (i = h(t).data("slick") || {}),
                    (s.options = h.extend({}, s.defaults, e, i)),
                    (s.currentSlide = s.options.initialSlide),
                    (s.originalSettings = s.options),
                    void 0 !== document.mozHidden
                        ? ((s.hidden = "mozHidden"), (s.visibilityChange = "mozvisibilitychange"))
                        : void 0 !== document.webkitHidden && ((s.hidden = "webkitHidden"), (s.visibilityChange = "webkitvisibilitychange")),
                    (s.autoPlay = h.proxy(s.autoPlay, s)),
                    (s.autoPlayClear = h.proxy(s.autoPlayClear, s)),
                    (s.autoPlayIterator = h.proxy(s.autoPlayIterator, s)),
                    (s.changeSlide = h.proxy(s.changeSlide, s)),
                    (s.clickHandler = h.proxy(s.clickHandler, s)),
                    (s.selectHandler = h.proxy(s.selectHandler, s)),
                    (s.setPosition = h.proxy(s.setPosition, s)),
                    (s.swipeHandler = h.proxy(s.swipeHandler, s)),
                    (s.dragHandler = h.proxy(s.dragHandler, s)),
                    (s.keyHandler = h.proxy(s.keyHandler, s)),
                    (s.instanceUid = n++),
                    (s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    s.registerBreakpoints(),
                    s.init(!0);
            }).prototype.activateADA = function () {
                this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
            }),
            (o.prototype.addSlide = o.prototype.slickAdd = function (t, e, i) {
                var s = this;
                if ("boolean" == typeof e) (i = e), (e = null);
                else if (e < 0 || e >= s.slideCount) return !1;
                s.unload(),
                    "number" == typeof e
                        ? 0 === e && 0 === s.$slides.length
                            ? h(t).appendTo(s.$slideTrack)
                            : i
                            ? h(t).insertBefore(s.$slides.eq(e))
                            : h(t).insertAfter(s.$slides.eq(e))
                        : !0 === i
                        ? h(t).prependTo(s.$slideTrack)
                        : h(t).appendTo(s.$slideTrack),
                    (s.$slides = s.$slideTrack.children(this.options.slide)),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slideTrack.append(s.$slides),
                    s.$slides.each(function (t, e) {
                        h(e).attr("data-slick-index", t);
                    }),
                    (s.$slidesCache = s.$slides),
                    s.reinit();
            }),
            (o.prototype.animateHeight = function () {
                var t;
                1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical && ((t = this.$slides.eq(this.currentSlide).outerHeight(!0)), this.$list.animate({ height: t }, this.options.speed));
            }),
            (o.prototype.animateSlide = function (t, e) {
                var i = {},
                    s = this;
                s.animateHeight(),
                    !0 === s.options.rtl && !1 === s.options.vertical && (t = -t),
                    !1 === s.transformsEnabled
                        ? !1 === s.options.vertical
                            ? s.$slideTrack.animate({ left: t }, s.options.speed, s.options.easing, e)
                            : s.$slideTrack.animate({ top: t }, s.options.speed, s.options.easing, e)
                        : !1 === s.cssTransitions
                        ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                          h({ animStart: s.currentLeft }).animate(
                              { animStart: t },
                              {
                                  duration: s.options.speed,
                                  easing: s.options.easing,
                                  step: function (t) {
                                      (t = Math.ceil(t)), !1 === s.options.vertical ? (i[s.animType] = "translate(" + t + "px, 0px)") : (i[s.animType] = "translate(0px," + t + "px)"), s.$slideTrack.css(i);
                                  },
                                  complete: function () {
                                      e && e.call();
                                  },
                              }
                          ))
                        : (s.applyTransition(),
                          (t = Math.ceil(t)),
                          !1 === s.options.vertical ? (i[s.animType] = "translate3d(" + t + "px, 0px, 0px)") : (i[s.animType] = "translate3d(0px," + t + "px, 0px)"),
                          s.$slideTrack.css(i),
                          e &&
                              setTimeout(function () {
                                  s.disableTransition(), e.call();
                              }, s.options.speed));
            }),
            (o.prototype.getNavTarget = function () {
                var t = this.options.asNavFor;
                return t && null !== t && (t = h(t).not(this.$slider)), t;
            }),
            (o.prototype.asNavFor = function (e) {
                var t = this.getNavTarget();
                null !== t &&
                    "object" == typeof t &&
                    t.each(function () {
                        var t = h(this).slick("getSlick");
                        t.unslicked || t.slideHandler(e, !0);
                    });
            }),
            (o.prototype.applyTransition = function (t) {
                var e = this,
                    i = {};
                !1 === e.options.fade ? (i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase) : (i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase),
                    !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
            }),
            (o.prototype.autoPlay = function () {
                this.autoPlayClear(), this.slideCount > this.options.slidesToShow && (this.autoPlayTimer = setInterval(this.autoPlayIterator, this.options.autoplaySpeed));
            }),
            (o.prototype.autoPlayClear = function () {
                this.autoPlayTimer && clearInterval(this.autoPlayTimer);
            }),
            (o.prototype.autoPlayIterator = function () {
                var t = this,
                    e = t.currentSlide + t.options.slidesToScroll;
                t.paused ||
                    t.interrupted ||
                    t.focussed ||
                    (!1 === t.options.infinite &&
                        (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? (t.direction = 0) : 0 === t.direction && ((e = t.currentSlide - t.options.slidesToScroll), t.currentSlide - 1 == 0 && (t.direction = 1))),
                    t.slideHandler(e));
            }),
            (o.prototype.buildArrows = function () {
                var t = this;
                !0 === t.options.arrows &&
                    ((t.$prevArrow = h(t.options.prevArrow).addClass("slick-arrow")),
                    (t.$nextArrow = h(t.options.nextArrow).addClass("slick-arrow")),
                    t.slideCount > t.options.slidesToShow
                        ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
                          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
                          !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                        : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
            }),
            (o.prototype.buildDots = function () {
                var t, e;
                if (!0 === this.options.dots) {
                    for (this.$slider.addClass("slick-dotted"), e = h("<ul />").addClass(this.options.dotsClass), t = 0; t <= this.getDotCount(); t += 1) e.append(h("<li />").append(this.options.customPaging.call(this, this, t)));
                    (this.$dots = e.appendTo(this.options.appendDots)), this.$dots.find("li").first().addClass("slick-active");
                }
            }),
            (o.prototype.buildOut = function () {
                var t = this;
                (t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.$slides.each(function (t, e) {
                        h(e)
                            .attr("data-slick-index", t)
                            .data("originalStyling", h(e).attr("style") || "");
                    }),
                    t.$slider.addClass("slick-slider"),
                    (t.$slideTrack = 0 === t.slideCount ? h('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
                    (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                    t.$slideTrack.css("opacity", 0),
                    (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) || (t.options.slidesToScroll = 1),
                    h("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.buildDots(),
                    t.updateDots(),
                    t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                    !0 === t.options.draggable && t.$list.addClass("draggable");
            }),
            (o.prototype.buildRows = function () {
                var t,
                    e,
                    i,
                    s = this,
                    n = document.createDocumentFragment(),
                    o = s.$slider.children();
                if (1 < s.options.rows) {
                    for (i = s.options.slidesPerRow * s.options.rows, e = Math.ceil(o.length / i), t = 0; t < e; t++) {
                        for (var r = document.createElement("div"), a = 0; a < s.options.rows; a++) {
                            for (var l = document.createElement("div"), h = 0; h < s.options.slidesPerRow; h++) {
                                var c = t * i + (a * s.options.slidesPerRow + h);
                                o.get(c) && l.appendChild(o.get(c));
                            }
                            r.appendChild(l);
                        }
                        n.appendChild(r);
                    }
                    s.$slider.empty().append(n),
                        s.$slider
                            .children()
                            .children()
                            .children()
                            .css({ width: 100 / s.options.slidesPerRow + "%", display: "inline-block" });
                }
            }),
            (o.prototype.checkResponsive = function (t, e) {
                var i,
                    s,
                    n,
                    o = this,
                    r = !1,
                    a = o.$slider.width(),
                    l = window.innerWidth || h(window).width();
                if (("window" === o.respondTo ? (n = l) : "slider" === o.respondTo ? (n = a) : "min" === o.respondTo && (n = Math.min(l, a)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive)) {
                    for (i in ((s = null), o.breakpoints)) o.breakpoints.hasOwnProperty(i) && (!1 === o.originalSettings.mobileFirst ? n < o.breakpoints[i] && (s = o.breakpoints[i]) : n > o.breakpoints[i] && (s = o.breakpoints[i]));
                    null !== s
                        ? (null !== o.activeBreakpoint && s === o.activeBreakpoint && !e) ||
                          ((o.activeBreakpoint = s),
                          "unslick" === o.breakpointSettings[s] ? o.unslick(s) : ((o.options = h.extend({}, o.originalSettings, o.breakpointSettings[s])), !0 === t && (o.currentSlide = o.options.initialSlide), o.refresh(t)),
                          (r = s))
                        : null !== o.activeBreakpoint && ((o.activeBreakpoint = null), (o.options = o.originalSettings), !0 === t && (o.currentSlide = o.options.initialSlide), o.refresh(t), (r = s)),
                        t || !1 === r || o.$slider.trigger("breakpoint", [o, r]);
                }
            }),
            (o.prototype.changeSlide = function (t, e) {
                var i,
                    s,
                    n = this,
                    o = h(t.currentTarget);
                switch ((o.is("a") && t.preventDefault(), o.is("li") || (o = o.closest("li")), (i = n.slideCount % n.options.slidesToScroll != 0 ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll), t.data.message)) {
                    case "previous":
                        (s = 0 == i ? n.options.slidesToScroll : n.options.slidesToShow - i), n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - s, !1, e);
                        break;
                    case "next":
                        (s = 0 == i ? n.options.slidesToScroll : i), n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + s, !1, e);
                        break;
                    case "index":
                        var r = 0 === t.data.index ? 0 : t.data.index || o.index() * n.options.slidesToScroll;
                        n.slideHandler(n.checkNavigable(r), !1, e), o.children().trigger("focus");
                        break;
                    default:
                        return;
                }
            }),
            (o.prototype.checkNavigable = function (t) {
                var e = this.getNavigableIndexes(),
                    i = 0;
                if (t > e[e.length - 1]) t = e[e.length - 1];
                else
                    for (var s in e) {
                        if (t < e[s]) {
                            t = i;
                            break;
                        }
                        i = e[s];
                    }
                return t;
            }),
            (o.prototype.cleanUpEvents = function () {
                var t = this;
                t.options.dots &&
                    null !== t.$dots &&
                    (h("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", h.proxy(t.interrupt, t, !0)).off("mouseleave.slick", h.proxy(t.interrupt, t, !1)),
                    !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)),
                    t.$slider.off("focus.slick blur.slick"),
                    !0 === t.options.arrows &&
                        t.slideCount > t.options.slidesToShow &&
                        (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
                        t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
                        !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
                    t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
                    t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
                    t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                    t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
                    t.$list.off("click.slick", t.clickHandler),
                    h(document).off(t.visibilityChange, t.visibility),
                    t.cleanUpSlideEvents(),
                    !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect && h(t.$slideTrack).children().off("click.slick", t.selectHandler),
                    h(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
                    h(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
                    h("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
                    h(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
            }),
            (o.prototype.cleanUpSlideEvents = function () {
                this.$list.off("mouseenter.slick", h.proxy(this.interrupt, this, !0)), this.$list.off("mouseleave.slick", h.proxy(this.interrupt, this, !1));
            }),
            (o.prototype.cleanUpRows = function () {
                var t;
                1 < this.options.rows && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t));
            }),
            (o.prototype.clickHandler = function (t) {
                !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault());
            }),
            (o.prototype.destroy = function (t) {
                var e = this;
                e.autoPlayClear(),
                    (e.touchObject = {}),
                    e.cleanUpEvents(),
                    h(".slick-cloned", e.$slider).detach(),
                    e.$dots && e.$dots.remove(),
                    e.$prevArrow &&
                        e.$prevArrow.length &&
                        (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()),
                    e.$nextArrow &&
                        e.$nextArrow.length &&
                        (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()),
                    e.$slides &&
                        (e.$slides
                            .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                            .removeAttr("aria-hidden")
                            .removeAttr("data-slick-index")
                            .each(function () {
                                h(this).attr("style", h(this).data("originalStyling"));
                            }),
                        e.$slideTrack.children(this.options.slide).detach(),
                        e.$slideTrack.detach(),
                        e.$list.detach(),
                        e.$slider.append(e.$slides)),
                    e.cleanUpRows(),
                    e.$slider.removeClass("slick-slider"),
                    e.$slider.removeClass("slick-initialized"),
                    e.$slider.removeClass("slick-dotted"),
                    (e.unslicked = !0),
                    t || e.$slider.trigger("destroy", [e]);
            }),
            (o.prototype.disableTransition = function (t) {
                var e = {};
                (e[this.transitionType] = ""), !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e);
            }),
            (o.prototype.fadeSlide = function (t, e) {
                var i = this;
                !1 === i.cssTransitions
                    ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }), i.$slides.eq(t).animate({ opacity: 1 }, i.options.speed, i.options.easing, e))
                    : (i.applyTransition(t),
                      i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
                      e &&
                          setTimeout(function () {
                              i.disableTransition(t), e.call();
                          }, i.options.speed));
            }),
            (o.prototype.fadeSlideOut = function (t) {
                !1 === this.cssTransitions
                    ? this.$slides.eq(t).animate({ opacity: 0, zIndex: this.options.zIndex - 2 }, this.options.speed, this.options.easing)
                    : (this.applyTransition(t), this.$slides.eq(t).css({ opacity: 0, zIndex: this.options.zIndex - 2 }));
            }),
            (o.prototype.filterSlides = o.prototype.slickFilter = function (t) {
                null !== t && ((this.$slidesCache = this.$slides), this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.filter(t).appendTo(this.$slideTrack), this.reinit());
            }),
            (o.prototype.focusHandler = function () {
                var i = this;
                i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
                    t.stopImmediatePropagation();
                    var e = h(this);
                    setTimeout(function () {
                        i.options.pauseOnFocus && ((i.focussed = e.is(":focus")), i.autoPlay());
                    }, 0);
                });
            }),
            (o.prototype.getCurrent = o.prototype.slickCurrentSlide = function () {
                return this.currentSlide;
            }),
            (o.prototype.getDotCount = function () {
                var t = this,
                    e = 0,
                    i = 0,
                    s = 0;
                if (!0 === t.options.infinite)
                    if (t.slideCount <= t.options.slidesToShow) ++s;
                    else for (; e < t.slideCount; ) ++s, (e = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                else if (!0 === t.options.centerMode) s = t.slideCount;
                else if (t.options.asNavFor) for (; e < t.slideCount; ) ++s, (e = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                else s = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
                return s - 1;
            }),
            (o.prototype.getLeft = function (t) {
                var e,
                    i,
                    s,
                    n,
                    o = this,
                    r = 0;
                return (
                    (o.slideOffset = 0),
                    (i = o.$slides.first().outerHeight(!0)),
                    !0 === o.options.infinite
                        ? (o.slideCount > o.options.slidesToShow &&
                              ((o.slideOffset = o.slideWidth * o.options.slidesToShow * -1),
                              (n = -1),
                              !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? (n = -1.5) : 1 === o.options.slidesToShow && (n = -2)),
                              (r = i * o.options.slidesToShow * n)),
                          o.slideCount % o.options.slidesToScroll != 0 &&
                              t + o.options.slidesToScroll > o.slideCount &&
                              o.slideCount > o.options.slidesToShow &&
                              (r =
                                  t > o.slideCount
                                      ? ((o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1), (o.options.slidesToShow - (t - o.slideCount)) * i * -1)
                                      : ((o.slideOffset = (o.slideCount % o.options.slidesToScroll) * o.slideWidth * -1), (o.slideCount % o.options.slidesToScroll) * i * -1)))
                        : t + o.options.slidesToShow > o.slideCount && ((o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth), (r = (t + o.options.slidesToShow - o.slideCount) * i)),
                    o.slideCount <= o.options.slidesToShow && (r = o.slideOffset = 0),
                    !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow
                        ? (o.slideOffset = (o.slideWidth * Math.floor(o.options.slidesToShow)) / 2 - (o.slideWidth * o.slideCount) / 2)
                        : !0 === o.options.centerMode && !0 === o.options.infinite
                        ? (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth)
                        : !0 === o.options.centerMode && ((o.slideOffset = 0), (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
                    (e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + r),
                    !0 === o.options.variableWidth &&
                        ((s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow)),
                        (e = !0 === o.options.rtl ? (s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0) : s[0] ? -1 * s[0].offsetLeft : 0),
                        !0 === o.options.centerMode &&
                            ((s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1)),
                            (e = !0 === o.options.rtl ? (s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0) : s[0] ? -1 * s[0].offsetLeft : 0),
                            (e += (o.$list.width() - s.outerWidth()) / 2))),
                    e
                );
            }),
            (o.prototype.getOption = o.prototype.slickGetOption = function (t) {
                return this.options[t];
            }),
            (o.prototype.getNavigableIndexes = function () {
                for (var t = this, e = 0, i = 0, s = [], n = !1 === t.options.infinite ? t.slideCount : ((e = -1 * t.options.slidesToScroll), (i = -1 * t.options.slidesToScroll), 2 * t.slideCount); e < n; )
                    s.push(e), (e = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                return s;
            }),
            (o.prototype.getSlick = function () {
                return this;
            }),
            (o.prototype.getSlideCount = function () {
                var i,
                    s = this,
                    n = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0;
                return !0 === s.options.swipeToSlide
                    ? (s.$slideTrack.find(".slick-slide").each(function (t, e) {
                          if (e.offsetLeft - n + h(e).outerWidth() / 2 > -1 * s.swipeLeft) return (i = e), !1;
                      }),
                      Math.abs(h(i).attr("data-slick-index") - s.currentSlide) || 1)
                    : s.options.slidesToScroll;
            }),
            (o.prototype.goTo = o.prototype.slickGoTo = function (t, e) {
                this.changeSlide({ data: { message: "index", index: parseInt(t) } }, e);
            }),
            (o.prototype.init = function (t) {
                var e = this;
                h(e.$slider).hasClass("slick-initialized") ||
                    (h(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()),
                    t && e.$slider.trigger("init", [e]),
                    !0 === e.options.accessibility && e.initADA(),
                    e.options.autoplay && ((e.paused = !1), e.autoPlay());
            }),
            (o.prototype.initADA = function () {
                var i = this,
                    s = Math.ceil(i.slideCount / i.options.slidesToShow),
                    n = i.getNavigableIndexes().filter(function (t) {
                        return 0 <= t && t < i.slideCount;
                    });
                i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                    null !== i.$dots &&
                        (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function (t) {
                            var e = n.indexOf(t);
                            h(this).attr({ role: "tabpanel", id: "slick-slide" + i.instanceUid + t, tabindex: -1 }), -1 !== e && h(this).attr({ "aria-describedby": "slick-slide-control" + i.instanceUid + e });
                        }),
                        i.$dots
                            .attr("role", "tablist")
                            .find("li")
                            .each(function (t) {
                                var e = n[t];
                                h(this).attr({ role: "presentation" }),
                                    h(this)
                                        .find("button")
                                        .first()
                                        .attr({ role: "tab", id: "slick-slide-control" + i.instanceUid + t, "aria-controls": "slick-slide" + i.instanceUid + e, "aria-label": t + 1 + " of " + s, "aria-selected": null, tabindex: "-1" });
                            })
                            .eq(i.currentSlide)
                            .find("button")
                            .attr({ "aria-selected": "true", tabindex: "0" })
                            .end());
                for (var t = i.currentSlide, e = t + i.options.slidesToShow; t < e; t++) i.$slides.eq(t).attr("tabindex", 0);
                i.activateADA();
            }),
            (o.prototype.initArrowEvents = function () {
                var t = this;
                !0 === t.options.arrows &&
                    t.slideCount > t.options.slidesToShow &&
                    (t.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, t.changeSlide),
                    t.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, t.changeSlide),
                    !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)));
            }),
            (o.prototype.initDotEvents = function () {
                var t = this;
                !0 === t.options.dots && (h("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)),
                    !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && h("li", t.$dots).on("mouseenter.slick", h.proxy(t.interrupt, t, !0)).on("mouseleave.slick", h.proxy(t.interrupt, t, !1));
            }),
            (o.prototype.initSlideEvents = function () {
                this.options.pauseOnHover && (this.$list.on("mouseenter.slick", h.proxy(this.interrupt, this, !0)), this.$list.on("mouseleave.slick", h.proxy(this.interrupt, this, !1)));
            }),
            (o.prototype.initializeEvents = function () {
                var t = this;
                t.initArrowEvents(),
                    t.initDotEvents(),
                    t.initSlideEvents(),
                    t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler),
                    t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler),
                    t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler),
                    t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler),
                    t.$list.on("click.slick", t.clickHandler),
                    h(document).on(t.visibilityChange, h.proxy(t.visibility, t)),
                    !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect && h(t.$slideTrack).children().on("click.slick", t.selectHandler),
                    h(window).on("orientationchange.slick.slick-" + t.instanceUid, h.proxy(t.orientationChange, t)),
                    h(window).on("resize.slick.slick-" + t.instanceUid, h.proxy(t.resize, t)),
                    h("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
                    h(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
                    h(t.setPosition);
            }),
            (o.prototype.initUI = function () {
                !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(), this.$nextArrow.show()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show();
            }),
            (o.prototype.keyHandler = function (t) {
                t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === t.keyCode && !0 === this.options.accessibility
                        ? this.changeSlide({ data: { message: !0 === this.options.rtl ? "next" : "previous" } })
                        : 39 === t.keyCode && !0 === this.options.accessibility && this.changeSlide({ data: { message: !0 === this.options.rtl ? "previous" : "next" } }));
            }),
            (o.prototype.lazyLoad = function () {
                function t(t) {
                    h("img[data-lazy]", t).each(function () {
                        var t = h(this),
                            e = h(this).attr("data-lazy"),
                            i = h(this).attr("data-srcset"),
                            s = h(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                            n = document.createElement("img");
                        (n.onload = function () {
                            t.animate({ opacity: 0 }, 100, function () {
                                i && (t.attr("srcset", i), s && t.attr("sizes", s)),
                                    t.attr("src", e).animate({ opacity: 1 }, 200, function () {
                                        t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                    }),
                                    o.$slider.trigger("lazyLoaded", [o, t, e]);
                            });
                        }),
                            (n.onerror = function () {
                                t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, e]);
                            }),
                            (n.src = e);
                    });
                }
                var e,
                    i,
                    s,
                    o = this;
                if (
                    (!0 === o.options.centerMode
                        ? (s =
                              !0 === o.options.infinite
                                  ? (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2
                                  : ((i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1))), o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide))
                        : ((i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide), (s = Math.ceil(i + o.options.slidesToShow)), !0 === o.options.fade && (0 < i && i--, s <= o.slideCount && s++)),
                    (e = o.$slider.find(".slick-slide").slice(i, s)),
                    "anticipated" === o.options.lazyLoad)
                )
                    for (var n = i - 1, r = s, a = o.$slider.find(".slick-slide"), l = 0; l < o.options.slidesToScroll; l++) n < 0 && (n = o.slideCount - 1), (e = (e = e.add(a.eq(n))).add(a.eq(r))), n--, r++;
                t(e),
                    o.slideCount <= o.options.slidesToShow
                        ? t(o.$slider.find(".slick-slide"))
                        : o.currentSlide >= o.slideCount - o.options.slidesToShow
                        ? t(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow))
                        : 0 === o.currentSlide && t(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow));
            }),
            (o.prototype.loadSlider = function () {
                this.setPosition(), this.$slideTrack.css({ opacity: 1 }), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad();
            }),
            (o.prototype.next = o.prototype.slickNext = function () {
                this.changeSlide({ data: { message: "next" } });
            }),
            (o.prototype.orientationChange = function () {
                this.checkResponsive(), this.setPosition();
            }),
            (o.prototype.pause = o.prototype.slickPause = function () {
                this.autoPlayClear(), (this.paused = !0);
            }),
            (o.prototype.play = o.prototype.slickPlay = function () {
                this.autoPlay(), (this.options.autoplay = !0), (this.paused = !1), (this.focussed = !1), (this.interrupted = !1);
            }),
            (o.prototype.postSlide = function (t) {
                var e = this;
                e.unslicked ||
                    (e.$slider.trigger("afterChange", [e, t]),
                    (e.animating = !1),
                    e.slideCount > e.options.slidesToShow && e.setPosition(),
                    (e.swipeLeft = null),
                    e.options.autoplay && e.autoPlay(),
                    !0 === e.options.accessibility && (e.initADA(), e.options.focusOnChange && h(e.$slides.get(e.currentSlide)).attr("tabindex", 0).focus()));
            }),
            (o.prototype.prev = o.prototype.slickPrev = function () {
                this.changeSlide({ data: { message: "previous" } });
            }),
            (o.prototype.preventDefault = function (t) {
                t.preventDefault();
            }),
            (o.prototype.progressiveLazyLoad = function (t) {
                t = t || 1;
                var e,
                    i,
                    s,
                    n,
                    o,
                    r = this,
                    a = h("img[data-lazy]", r.$slider);
                a.length
                    ? ((e = a.first()),
                      (i = e.attr("data-lazy")),
                      (s = e.attr("data-srcset")),
                      (n = e.attr("data-sizes") || r.$slider.attr("data-sizes")),
                      ((o = document.createElement("img")).onload = function () {
                          s && (e.attr("srcset", s), n && e.attr("sizes", n)),
                              e.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                              !0 === r.options.adaptiveHeight && r.setPosition(),
                              r.$slider.trigger("lazyLoaded", [r, e, i]),
                              r.progressiveLazyLoad();
                      }),
                      (o.onerror = function () {
                          t < 3
                              ? setTimeout(function () {
                                    r.progressiveLazyLoad(t + 1);
                                }, 500)
                              : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, i]), r.progressiveLazyLoad());
                      }),
                      (o.src = i))
                    : r.$slider.trigger("allImagesLoaded", [r]);
            }),
            (o.prototype.refresh = function (t) {
                var e,
                    i = this,
                    s = i.slideCount - i.options.slidesToShow;
                !i.options.infinite && i.currentSlide > s && (i.currentSlide = s),
                    i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
                    (e = i.currentSlide),
                    i.destroy(!0),
                    h.extend(i, i.initials, { currentSlide: e }),
                    i.init(),
                    t || i.changeSlide({ data: { message: "index", index: e } }, !1);
            }),
            (o.prototype.registerBreakpoints = function () {
                var t,
                    e,
                    i,
                    s = this,
                    n = s.options.responsive || null;
                if ("array" === h.type(n) && n.length) {
                    for (t in ((s.respondTo = s.options.respondTo || "window"), n))
                        if (((i = s.breakpoints.length - 1), n.hasOwnProperty(t))) {
                            for (e = n[t].breakpoint; 0 <= i; ) s.breakpoints[i] && s.breakpoints[i] === e && s.breakpoints.splice(i, 1), i--;
                            s.breakpoints.push(e), (s.breakpointSettings[e] = n[t].settings);
                        }
                    s.breakpoints.sort(function (t, e) {
                        return s.options.mobileFirst ? t - e : e - t;
                    });
                }
            }),
            (o.prototype.reinit = function () {
                var t = this;
                (t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
                    t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
                    t.registerBreakpoints(),
                    t.setProps(),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.updateArrows(),
                    t.initArrowEvents(),
                    t.buildDots(),
                    t.updateDots(),
                    t.initDotEvents(),
                    t.cleanUpSlideEvents(),
                    t.initSlideEvents(),
                    t.checkResponsive(!1, !0),
                    !0 === t.options.focusOnSelect && h(t.$slideTrack).children().on("click.slick", t.selectHandler),
                    t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                    t.setPosition(),
                    t.focusHandler(),
                    (t.paused = !t.options.autoplay),
                    t.autoPlay(),
                    t.$slider.trigger("reInit", [t]);
            }),
            (o.prototype.resize = function () {
                var t = this;
                h(window).width() !== t.windowWidth &&
                    (clearTimeout(t.windowDelay),
                    (t.windowDelay = window.setTimeout(function () {
                        (t.windowWidth = h(window).width()), t.checkResponsive(), t.unslicked || t.setPosition();
                    }, 50)));
            }),
            (o.prototype.removeSlide = o.prototype.slickRemove = function (t, e, i) {
                var s = this;
                if (((t = "boolean" == typeof t ? (!0 === (e = t) ? 0 : s.slideCount - 1) : !0 === e ? --t : t), s.slideCount < 1 || t < 0 || t > s.slideCount - 1)) return !1;
                s.unload(),
                    !0 === i ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(t).remove(),
                    (s.$slides = s.$slideTrack.children(this.options.slide)),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slideTrack.append(s.$slides),
                    (s.$slidesCache = s.$slides),
                    s.reinit();
            }),
            (o.prototype.setCSS = function (t) {
                var e,
                    i,
                    s = this,
                    n = {};
                !0 === s.options.rtl && (t = -t),
                    (e = "left" == s.positionProp ? Math.ceil(t) + "px" : "0px"),
                    (i = "top" == s.positionProp ? Math.ceil(t) + "px" : "0px"),
                    (n[s.positionProp] = t),
                    !1 === s.transformsEnabled || (!(n = {}) === s.cssTransitions ? (n[s.animType] = "translate(" + e + ", " + i + ")") : (n[s.animType] = "translate3d(" + e + ", " + i + ", 0px)")),
                    s.$slideTrack.css(n);
            }),
            (o.prototype.setDimensions = function () {
                var t = this;
                !1 === t.options.vertical
                    ? !0 === t.options.centerMode && t.$list.css({ padding: "0px " + t.options.centerPadding })
                    : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({ padding: t.options.centerPadding + " 0px" })),
                    (t.listWidth = t.$list.width()),
                    (t.listHeight = t.$list.height()),
                    !1 === t.options.vertical && !1 === t.options.variableWidth
                        ? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length)))
                        : !0 === t.options.variableWidth
                        ? t.$slideTrack.width(5e3 * t.slideCount)
                        : ((t.slideWidth = Math.ceil(t.listWidth)), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
                var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
                !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
            }),
            (o.prototype.setFade = function () {
                var i,
                    s = this;
                s.$slides.each(function (t, e) {
                    (i = s.slideWidth * t * -1),
                        !0 === s.options.rtl ? h(e).css({ position: "relative", right: i, top: 0, zIndex: s.options.zIndex - 2, opacity: 0 }) : h(e).css({ position: "relative", left: i, top: 0, zIndex: s.options.zIndex - 2, opacity: 0 });
                }),
                    s.$slides.eq(s.currentSlide).css({ zIndex: s.options.zIndex - 1, opacity: 1 });
            }),
            (o.prototype.setHeight = function () {
                var t;
                1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical && ((t = this.$slides.eq(this.currentSlide).outerHeight(!0)), this.$list.css("height", t));
            }),
            (o.prototype.setOption = o.prototype.slickSetOption = function () {
                var t,
                    e,
                    i,
                    s,
                    n,
                    o = this,
                    r = !1;
                if (
                    ("object" === h.type(arguments[0])
                        ? ((i = arguments[0]), (r = arguments[1]), (n = "multiple"))
                        : "string" === h.type(arguments[0]) &&
                          ((s = arguments[1]), (r = arguments[2]), "responsive" === (i = arguments[0]) && "array" === h.type(arguments[1]) ? (n = "responsive") : void 0 !== arguments[1] && (n = "single")),
                    "single" === n)
                )
                    o.options[i] = s;
                else if ("multiple" === n)
                    h.each(i, function (t, e) {
                        o.options[t] = e;
                    });
                else if ("responsive" === n)
                    for (e in s)
                        if ("array" !== h.type(o.options.responsive)) o.options.responsive = [s[e]];
                        else {
                            for (t = o.options.responsive.length - 1; 0 <= t; ) o.options.responsive[t].breakpoint === s[e].breakpoint && o.options.responsive.splice(t, 1), t--;
                            o.options.responsive.push(s[e]);
                        }
                r && (o.unload(), o.reinit());
            }),
            (o.prototype.setPosition = function () {
                this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), this.$slider.trigger("setPosition", [this]);
            }),
            (o.prototype.setProps = function () {
                var t = this,
                    e = document.body.style;
                (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
                    "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
                    (void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) || (!0 === t.options.useCSS && (t.cssTransitions = !0)),
                    t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : (t.options.zIndex = t.defaults.zIndex)),
                    void 0 !== e.OTransform && ((t.animType = "OTransform"), (t.transformType = "-o-transform"), (t.transitionType = "OTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                    void 0 !== e.MozTransform &&
                        ((t.animType = "MozTransform"), (t.transformType = "-moz-transform"), (t.transitionType = "MozTransition"), void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
                    void 0 !== e.webkitTransform &&
                        ((t.animType = "webkitTransform"), (t.transformType = "-webkit-transform"), (t.transitionType = "webkitTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                    void 0 !== e.msTransform && ((t.animType = "msTransform"), (t.transformType = "-ms-transform"), (t.transitionType = "msTransition"), void 0 === e.msTransform && (t.animType = !1)),
                    void 0 !== e.transform && !1 !== t.animType && ((t.animType = "transform"), (t.transformType = "transform"), (t.transitionType = "transition")),
                    (t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType);
            }),
            (o.prototype.setSlideClasses = function (t) {
                var e,
                    i,
                    s,
                    n,
                    o = this,
                    r = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
                o.$slides.eq(t).addClass("slick-current"),
                    !0 === o.options.centerMode
                        ? ((s = o.options.slidesToShow % 2 == 0 ? 1 : 0),
                          (n = Math.floor(o.options.slidesToShow / 2)),
                          !0 === o.options.infinite &&
                              (n <= t && t <= o.slideCount - 1 - n
                                  ? o.$slides
                                        .slice(t - n + s, t + n + 1)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false")
                                  : ((e = o.options.slidesToShow + t),
                                    r
                                        .slice(e - n + 1 + s, e + n + 2)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false")),
                              0 === t ? r.eq(r.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && r.eq(o.options.slidesToShow).addClass("slick-center")),
                          o.$slides.eq(t).addClass("slick-center"))
                        : 0 <= t && t <= o.slideCount - o.options.slidesToShow
                        ? o.$slides
                              .slice(t, t + o.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                        : r.length <= o.options.slidesToShow
                        ? r.addClass("slick-active").attr("aria-hidden", "false")
                        : ((i = o.slideCount % o.options.slidesToShow),
                          (e = !0 === o.options.infinite ? o.options.slidesToShow + t : t),
                          o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow
                              ? r
                                    .slice(e - (o.options.slidesToShow - i), e + i)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")
                              : r
                                    .slice(e, e + o.options.slidesToShow)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")),
                    ("ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad) || o.lazyLoad();
            }),
            (o.prototype.setupInfinite = function () {
                var t,
                    e,
                    i,
                    s = this;
                if ((!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && ((e = null), s.slideCount > s.options.slidesToShow))) {
                    for (i = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, t = s.slideCount; t > s.slideCount - i; --t)
                        (e = t - 1),
                            h(s.$slides[e])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", e - s.slideCount)
                                .prependTo(s.$slideTrack)
                                .addClass("slick-cloned");
                    for (t = 0; t < i + s.slideCount; t += 1)
                        (e = t),
                            h(s.$slides[e])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", e + s.slideCount)
                                .appendTo(s.$slideTrack)
                                .addClass("slick-cloned");
                    s.$slideTrack
                        .find(".slick-cloned")
                        .find("[id]")
                        .each(function () {
                            h(this).attr("id", "");
                        });
                }
            }),
            (o.prototype.interrupt = function (t) {
                t || this.autoPlay(), (this.interrupted = t);
            }),
            (o.prototype.selectHandler = function (t) {
                var e = h(t.target).is(".slick-slide") ? h(t.target) : h(t.target).parents(".slick-slide"),
                    i = (i = parseInt(e.attr("data-slick-index"))) || 0;
                this.slideCount <= this.options.slidesToShow ? this.slideHandler(i, !1, !0) : this.slideHandler(i);
            }),
            (o.prototype.slideHandler = function (t, e, i) {
                var s,
                    n,
                    o,
                    r,
                    a,
                    l,
                    h = this;
                if (((e = e || !1), !((!0 === h.animating && !0 === h.options.waitForAnimate) || (!0 === h.options.fade && h.currentSlide === t))))
                    if (
                        (!1 === e && h.asNavFor(t),
                        (s = t),
                        (l = h.getLeft(s)),
                        (r = h.getLeft(h.currentSlide)),
                        (h.currentLeft = null === h.swipeLeft ? r : h.swipeLeft),
                        !1 === h.options.infinite && !1 === h.options.centerMode && (t < 0 || t > h.getDotCount() * h.options.slidesToScroll))
                    )
                        !1 === h.options.fade &&
                            ((s = h.currentSlide),
                            !0 !== i
                                ? h.animateSlide(r, function () {
                                      h.postSlide(s);
                                  })
                                : h.postSlide(s));
                    else if (!1 === h.options.infinite && !0 === h.options.centerMode && (t < 0 || t > h.slideCount - h.options.slidesToScroll))
                        !1 === h.options.fade &&
                            ((s = h.currentSlide),
                            !0 !== i
                                ? h.animateSlide(r, function () {
                                      h.postSlide(s);
                                  })
                                : h.postSlide(s));
                    else {
                        if (
                            (h.options.autoplay && clearInterval(h.autoPlayTimer),
                            (n =
                                s < 0
                                    ? h.slideCount % h.options.slidesToScroll != 0
                                        ? h.slideCount - (h.slideCount % h.options.slidesToScroll)
                                        : h.slideCount + s
                                    : s >= h.slideCount
                                    ? h.slideCount % h.options.slidesToScroll != 0
                                        ? 0
                                        : s - h.slideCount
                                    : s),
                            (h.animating = !0),
                            h.$slider.trigger("beforeChange", [h, h.currentSlide, n]),
                            (o = h.currentSlide),
                            (h.currentSlide = n),
                            h.setSlideClasses(h.currentSlide),
                            h.options.asNavFor && (a = (a = h.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(h.currentSlide),
                            h.updateDots(),
                            h.updateArrows(),
                            !0 === h.options.fade)
                        )
                            return (
                                !0 !== i
                                    ? (h.fadeSlideOut(o),
                                      h.fadeSlide(n, function () {
                                          h.postSlide(n);
                                      }))
                                    : h.postSlide(n),
                                void h.animateHeight()
                            );
                        !0 !== i
                            ? h.animateSlide(l, function () {
                                  h.postSlide(n);
                              })
                            : h.postSlide(n);
                    }
            }),
            (o.prototype.startLoad = function () {
                var t = this;
                !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()),
                    !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
                    t.$slider.addClass("slick-loading");
            }),
            (o.prototype.swipeDirection = function () {
                var t,
                    e = this.touchObject.startX - this.touchObject.curX,
                    i = this.touchObject.startY - this.touchObject.curY,
                    s = Math.atan2(i, e);
                return (
                    (t = Math.round((180 * s) / Math.PI)) < 0 && (t = 360 - Math.abs(t)),
                    (t <= 45 && 0 <= t) || (t <= 360 && 315 <= t)
                        ? !1 === this.options.rtl
                            ? "left"
                            : "right"
                        : 135 <= t && t <= 225
                        ? !1 === this.options.rtl
                            ? "right"
                            : "left"
                        : !0 === this.options.verticalSwiping
                        ? 35 <= t && t <= 135
                            ? "down"
                            : "up"
                        : "vertical"
                );
            }),
            (o.prototype.swipeEnd = function (t) {
                var e,
                    i,
                    s = this;
                if (((s.dragging = !1), (s.swiping = !1), s.scrolling)) return (s.scrolling = !1);
                if (((s.interrupted = !1), (s.shouldClick = !(10 < s.touchObject.swipeLength)), void 0 === s.touchObject.curX)) return !1;
                if ((!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe)) {
                    switch ((i = s.swipeDirection())) {
                        case "left":
                        case "down":
                            (e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount()), (s.currentDirection = 0);
                            break;
                        case "right":
                        case "up":
                            (e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount()), (s.currentDirection = 1);
                    }
                    "vertical" != i && (s.slideHandler(e), (s.touchObject = {}), s.$slider.trigger("swipe", [s, i]));
                } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), (s.touchObject = {}));
            }),
            (o.prototype.swipeHandler = function (t) {
                var e = this;
                if (!(!1 === e.options.swipe || ("ontouchend" in document && !1 === e.options.swipe) || (!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))))
                    switch (
                        ((e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1),
                        (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
                        !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                        t.data.action)
                    ) {
                        case "start":
                            e.swipeStart(t);
                            break;
                        case "move":
                            e.swipeMove(t);
                            break;
                        case "end":
                            e.swipeEnd(t);
                    }
            }),
            (o.prototype.swipeMove = function (t) {
                var e,
                    i,
                    s,
                    n,
                    o,
                    r = this,
                    a = void 0 !== t.originalEvent ? t.originalEvent.touches : null;
                return (
                    !(!r.dragging || r.scrolling || (a && 1 !== a.length)) &&
                    ((e = r.getLeft(r.currentSlide)),
                    (r.touchObject.curX = void 0 !== a ? a[0].pageX : t.clientX),
                    (r.touchObject.curY = void 0 !== a ? a[0].pageY : t.clientY),
                    (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2)))),
                    (o = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))),
                    !r.options.verticalSwiping && !r.swiping && 4 < o
                        ? !(r.scrolling = !0)
                        : (!0 === r.options.verticalSwiping && (r.touchObject.swipeLength = o),
                          (i = r.swipeDirection()),
                          void 0 !== t.originalEvent && 4 < r.touchObject.swipeLength && ((r.swiping = !0), t.preventDefault()),
                          (n = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1)),
                          !0 === r.options.verticalSwiping && (n = r.touchObject.curY > r.touchObject.startY ? 1 : -1),
                          (s = r.touchObject.swipeLength),
                          (r.touchObject.edgeHit = !1) === r.options.infinite &&
                              ((0 === r.currentSlide && "right" === i) || (r.currentSlide >= r.getDotCount() && "left" === i)) &&
                              ((s = r.touchObject.swipeLength * r.options.edgeFriction), (r.touchObject.edgeHit = !0)),
                          !1 === r.options.vertical ? (r.swipeLeft = e + s * n) : (r.swipeLeft = e + s * (r.$list.height() / r.listWidth) * n),
                          !0 === r.options.verticalSwiping && (r.swipeLeft = e + s * n),
                          !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? ((r.swipeLeft = null), !1) : void r.setCSS(r.swipeLeft))))
                );
            }),
            (o.prototype.swipeStart = function (t) {
                var e,
                    i = this;
                if (((i.interrupted = !0), 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow)) return !(i.touchObject = {});
                void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
                    (i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX),
                    (i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY),
                    (i.dragging = !0);
            }),
            (o.prototype.unfilterSlides = o.prototype.slickUnfilter = function () {
                null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.appendTo(this.$slideTrack), this.reinit());
            }),
            (o.prototype.unload = function () {
                var t = this;
                h(".slick-cloned", t.$slider).remove(),
                    t.$dots && t.$dots.remove(),
                    t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
                    t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
                    t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
            }),
            (o.prototype.unslick = function (t) {
                this.$slider.trigger("unslick", [this, t]), this.destroy();
            }),
            (o.prototype.updateArrows = function () {
                var t = this;
                Math.floor(t.options.slidesToShow / 2),
                    !0 === t.options.arrows &&
                        t.slideCount > t.options.slidesToShow &&
                        !t.options.infinite &&
                        (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        0 === t.currentSlide
                            ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : ((t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode) || (t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode)) &&
                              (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
            }),
            (o.prototype.updateDots = function () {
                null !== this.$dots &&
                    (this.$dots.find("li").removeClass("slick-active").end(),
                    this.$dots
                        .find("li")
                        .eq(Math.floor(this.currentSlide / this.options.slidesToScroll))
                        .addClass("slick-active"));
            }),
            (o.prototype.visibility = function () {
                this.options.autoplay && (document[this.hidden] ? (this.interrupted = !0) : (this.interrupted = !1));
            }),
            (h.fn.slick = function () {
                for (var t, e = arguments[0], i = Array.prototype.slice.call(arguments, 1), s = this.length, n = 0; n < s; n++)
                    if (("object" == typeof e || void 0 === e ? (this[n].slick = new o(this[n], e)) : (t = this[n].slick[e].apply(this[n].slick, i)), void 0 !== t)) return t;
                return this;
            });
    }),
    (function (a, c) {
        var e,
            o,
            u = "createElement",
            y = "getElementsByTagName",
            b = "length",
            w = "style",
            h = "title",
            x = "undefined",
            _ = "setAttribute",
            k = "getAttribute",
            C = null,
            T = "__svgInject",
            S = "--inject-",
            D = new RegExp(S + "\\d+", "g"),
            I = "LOAD_FAIL",
            i = "SVG_NOT_SUPPORTED",
            E = "SVG_INVALID",
            d = ["src", "alt", "onload", "onerror"],
            A = c[u]("a"),
            P = typeof SVGRect != x,
            p = { useCache: !0, copyAttributes: !0, makeIdsUnique: !0 },
            O = {
                clipPath: ["clip-path"],
                "color-profile": C,
                cursor: C,
                filter: C,
                linearGradient: ["fill", "stroke"],
                marker: ["marker", "marker-end", "marker-mid", "marker-start"],
                mask: C,
                pattern: ["fill", "stroke"],
                radialGradient: ["fill", "stroke"],
            },
            l = 1,
            f = 2,
            M = 1;
        function z(t) {
            return (e = e || new XMLSerializer()).serializeToString(t);
        }
        function $(t, e) {
            var i,
                s,
                n,
                o = S + M++,
                r = /url\("?#([a-zA-Z][\w:.-]*)"?\)/g,
                a = t.querySelectorAll("[id]"),
                l = e ? [] : C,
                h = {},
                c = [],
                u = !1;
            if (a[b]) {
                for (v = 0; v < a[b]; v++) (s = a[v].localName) in O && (h[s] = 1);
                for (s in h)
                    (O[s] || [s]).forEach(function (t) {
                        c.indexOf(t) < 0 && c.push(t);
                    });
                c[b] && c.push(w);
                for (var d, p, f, m = t[y]("*"), g = t, v = -1; g != C; ) {
                    if (g.localName == w)
                        (f =
                            (p = g.textContent) &&
                            p.replace(r, function (t, e) {
                                return l && (l[e] = 1), "url(#" + e + o + ")";
                            })) !== p && (g.textContent = f);
                    else if (g.hasAttributes()) {
                        for (n = 0; n < c[b]; n++)
                            (d = c[n]),
                                (f =
                                    (p = g[k](d)) &&
                                    p.replace(r, function (t, e) {
                                        return l && (l[e] = 1), "url(#" + e + o + ")";
                                    })) !== p && g[_](d, f);
                        ["xlink:href", "href"].forEach(function (t) {
                            var e = g[k](t);
                            /^\s*#/.test(e) && ((e = e.trim()), g[_](t, e + o), l && (l[e.substring(1)] = 1));
                        });
                    }
                    g = m[++v];
                }
                for (v = 0; v < a[b]; v++) (i = a[v]), (l && !l[i.id]) || ((i.id += o), (u = !0));
            }
            return u;
        }
        function H(t, e, i, s) {
            var n, o, r, a;
            e
                ? (e[_]("data-inject-url", i),
                  (n = t.parentNode) &&
                      (s.copyAttributes &&
                          (function (t, e) {
                              for (var i, s, n = t.attributes, o = 0; o < n[b]; o++) {
                                  var r,
                                      a,
                                      l = (i = n[o]).name;
                                  -1 == d.indexOf(l) &&
                                      ((s = i.value),
                                      l == h ? ((a = e.firstElementChild) && a.localName.toLowerCase() == h ? (r = a) : ((r = c[u + "NS"]("http://www.w3.org/2000/svg", h)), e.insertBefore(r, a)), (r.textContent = s)) : e[_](l, s));
                              }
                          })(t, e),
                      (r = ((o = s.beforeInject) && o(t, e)) || e),
                      n.replaceChild(r, t),
                      (t[T] = l),
                      g(t),
                      (a = s.afterInject) && a(t, r)))
                : W(t, s);
        }
        function m() {
            for (var t = {}, e = arguments, i = 0; i < e[b]; i++) {
                var s,
                    n = e[i];
                for (s in n) n.hasOwnProperty(s) && (t[s] = n[s]);
            }
            return t;
        }
        function L(t, e) {
            if (e) {
                var i;
                try {
                    (s = t), (i = (o = o || new DOMParser()).parseFromString(s, "text/xml"));
                } catch (t) {
                    return C;
                }
                return i[y]("parsererror")[b] ? C : i.documentElement;
            }
            var s,
                n = c.createElement("div");
            return (n.innerHTML = t), n.firstElementChild;
        }
        function g(t) {
            t.removeAttribute("onload");
        }
        function s(t) {
            console.error("SVGInject: " + t);
        }
        function n(t, e, i) {
            (t[T] = f), i.onFail ? i.onFail(t, e) : s(e);
        }
        function W(t, e) {
            g(t), n(t, E, e);
        }
        function N(t, e) {
            g(t), n(t, i, e);
        }
        function F(t, e) {
            n(t, I, e);
        }
        function R(t) {
            (t.onload = C), (t.onerror = C);
        }
        function j() {
            s("no img element");
        }
        var t = (function t(e, i) {
            var s,
                n,
                o,
                l = m(p, i),
                _ = {};
            function r(r, a) {
                a = m(l, a);
                function t(e) {
                    function t() {
                        var t = a.onAllFinish;
                        t && t(), e && e();
                    }
                    if (r && typeof r[b] != x) {
                        var i = 0,
                            s = r[b];
                        if (0 == s) t();
                        else {
                            function n() {
                                ++i == s && t();
                            }
                            for (var o = 0; o < s; o++) h(r[o], a, n);
                        }
                    } else h(r, a, t);
                }
                return typeof Promise == x ? t() : new Promise(t);
            }
            function h(l, h, t) {
                if (l) {
                    var e = l[T];
                    if (e) Array.isArray(e) ? e.push(t) : t();
                    else {
                        if ((R(l), !P)) return N(l, h), t(), 0;
                        var i = h.beforeLoad,
                            s = (i && i(l)) || l[k]("src");
                        if (!s) return "" === s && F(l, h), t(), 0;
                        var n = [];
                        l[T] = n;
                        function c() {
                            t(),
                                n.forEach(function (t) {
                                    t();
                                });
                        }
                        function u(e) {
                            p &&
                                (_[d].forEach(function (t) {
                                    t(e);
                                }),
                                (_[d] = e));
                        }
                        var d = ((y = s), (A.href = y), A.href),
                            p = h.useCache,
                            f = h.makeIdsUnique;
                        if (p) {
                            function o(t) {
                                var e, i, s, n;
                                t === I
                                    ? F(l, h)
                                    : t === E
                                    ? W(l, h)
                                    : ((i = t[0]), (s = t[1]), (n = t[2]), f && (i === C ? ((i = $((e = L(s, !1)), !1)), (t[0] = i), (t[2] = i && z(e))) : i && (s = n.replace(D, S + M++))), (e = e || L(s, !1)), H(l, e, d, h)),
                                    c();
                            }
                            var r;
                            if (typeof (r = _[d]) != x) return r.isCallbackQueue ? r.push(o) : o(r), 0;
                            ((r = []).isCallbackQueue = !0), (_[d] = r);
                        }
                        (m = function (t, e) {
                            var i,
                                s,
                                n,
                                o,
                                r = t instanceof Document ? t.documentElement : L(e, !0),
                                a = h.afterLoad;
                            !a || ((i = a(r, e) || r) && ((e = (s = "string" == typeof i) ? i : z(r)), (r = s ? L(i, !0) : i))),
                                r instanceof SVGElement ? ((n = C), f && (n = $(r, !1)), p && ((o = n && z(r)), u([n, e, o])), H(l, r, d, h)) : (W(l, h), u(E)),
                                c();
                        }),
                            (g = function () {
                                F(l, h), u(I), c();
                            }),
                            (a = d) &&
                                (((v = new XMLHttpRequest()).onreadystatechange = function () {
                                    var t;
                                    4 == v.readyState && (200 == (t = v.status) ? m(v.responseXML, v.responseText.trim()) : (400 <= t || 0 == t) && g());
                                }),
                                v.open("GET", a, !0),
                                v.send());
                    }
                } else j();
                var a, m, g, v, y;
            }
            return (
                P && ((s = 'img[onload^="' + e + '("]{visibility:hidden;}'), (o = c[y]("head")[0]) && (((n = c[u](w)).type = "text/css"), n.appendChild(c.createTextNode(s)), o.appendChild(n))),
                (r.setOptions = function (t) {
                    l = m(l, t);
                }),
                (r.create = t),
                (r.err = function (t, e) {
                    t ? t[T] != f && (R(t), P ? (g(t), F(t, l)) : N(t, l), e && (g(t), (t.src = e))) : j();
                }),
                (a[e] = r)
            );
        })("SVGInject");
        "object" == typeof module && "object" == typeof module.exports && (module.exports = t);
    })(window, document),
    (function () {
        "use strict";
        function i(t) {
            if (void 0 === t) throw new Error('Pathformer [constructor]: "element" parameter is required');
            if (t.constructor === String && !(t = document.getElementById(t))) throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
            if (!(t instanceof window.SVGElement || t instanceof window.SVGGElement || /^svg$/i.test(t.nodeName))) throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
            (this.el = t), this.scan(t);
        }
        var s, e, t, l;
        function n(t, e, i) {
            s(), (this.isReady = !1), this.setElement(t, e), this.setOptions(e), this.setCallback(i), this.isReady && this.init();
        }
        (i.prototype.TYPES = ["line", "ellipse", "circle", "polygon", "polyline", "rect"]),
            (i.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"]),
            (i.prototype.scan = function (t) {
                for (var e, i, s, n = t.querySelectorAll(this.TYPES.join(",")), o = 0; o < n.length; o++)
                    (i = (0, this[(e = n[o]).tagName.toLowerCase() + "ToPath"])(this.parseAttr(e.attributes))), (s = this.pathMaker(e, i)), e.parentNode.replaceChild(s, e);
            }),
            (i.prototype.lineToPath = function (t) {
                var e = {},
                    i = t.x1 || 0,
                    s = t.y1 || 0,
                    n = t.x2 || 0,
                    o = t.y2 || 0;
                return (e.d = "M" + i + "," + s + "L" + n + "," + o), e;
            }),
            (i.prototype.rectToPath = function (t) {
                var e,
                    i,
                    s = {},
                    n = parseFloat(t.x) || 0,
                    o = parseFloat(t.y) || 0,
                    r = parseFloat(t.width) || 0,
                    a = parseFloat(t.height) || 0;
                return (
                    t.rx || t.ry
                        ? ((e = parseInt(t.rx, 10) || -1),
                          (i = parseInt(t.ry, 10) || -1),
                          (e = Math.min(Math.max(e < 0 ? i : e, 0), r / 2)),
                          (i = Math.min(Math.max(i < 0 ? e : i, 0), a / 2)),
                          (s.d =
                              "M " +
                              (n + e) +
                              "," +
                              o +
                              " L " +
                              (n + r - e) +
                              "," +
                              o +
                              " A " +
                              e +
                              "," +
                              i +
                              ",0,0,1," +
                              (n + r) +
                              "," +
                              (o + i) +
                              " L " +
                              (n + r) +
                              "," +
                              (o + a - i) +
                              " A " +
                              e +
                              "," +
                              i +
                              ",0,0,1," +
                              (n + r - e) +
                              "," +
                              (o + a) +
                              " L " +
                              (n + e) +
                              "," +
                              (o + a) +
                              " A " +
                              e +
                              "," +
                              i +
                              ",0,0,1," +
                              n +
                              "," +
                              (o + a - i) +
                              " L " +
                              n +
                              "," +
                              (o + i) +
                              " A " +
                              e +
                              "," +
                              i +
                              ",0,0,1," +
                              (n + e) +
                              "," +
                              o))
                        : (s.d = "M" + n + " " + o + " L" + (n + r) + " " + o + " L" + (n + r) + " " + (o + a) + " L" + n + " " + (o + a) + " Z"),
                    s
                );
            }),
            (i.prototype.polylineToPath = function (t) {
                var e,
                    i = {},
                    s = t.points.trim().split(" ");
                if (-1 === t.points.indexOf(",")) {
                    for (var n = [], o = 0; o < s.length; o += 2) n.push(s[o] + "," + s[o + 1]);
                    s = n;
                }
                for (e = "M" + s[0], o = 1; o < s.length; o++) -1 !== s[o].indexOf(",") && (e += "L" + s[o]);
                return (i.d = e), i;
            }),
            (i.prototype.polygonToPath = function (t) {
                var e = i.prototype.polylineToPath(t);
                return (e.d += "Z"), e;
            }),
            (i.prototype.ellipseToPath = function (t) {
                var e = {},
                    i = parseFloat(t.rx) || 0,
                    s = parseFloat(t.ry) || 0,
                    n = parseFloat(t.cx) || 0,
                    o = parseFloat(t.cy) || 0,
                    r = n - i,
                    a = o,
                    l = parseFloat(n) + parseFloat(i);
                return (e.d = "M" + r + "," + a + "A" + i + "," + s + " 0,1,1 " + l + "," + o + "A" + i + "," + s + " 0,1,1 " + r + "," + o), e;
            }),
            (i.prototype.circleToPath = function (t) {
                var e = {},
                    i = parseFloat(t.r) || 0,
                    s = parseFloat(t.cx) || 0,
                    n = parseFloat(t.cy) || 0,
                    o = s - i,
                    r = n,
                    a = parseFloat(s) + parseFloat(i);
                return (e.d = "M" + o + "," + r + "A" + i + "," + i + " 0,1,1 " + a + "," + n + "A" + i + "," + i + " 0,1,1 " + o + "," + n), e;
            }),
            (i.prototype.pathMaker = function (t, e) {
                for (var i, s = document.createElementNS("http://www.w3.org/2000/svg", "path"), n = 0; n < t.attributes.length; n++) (i = t.attributes[n]), -1 === this.ATTR_WATCH.indexOf(i.name) && s.setAttribute(i.name, i.value);
                for (n in e) s.setAttribute(n, e[n]);
                return s;
            }),
            (i.prototype.parseAttr = function (t) {
                for (var e, i = {}, s = 0; s < t.length; s++) {
                    if (((e = t[s]), -1 !== this.ATTR_WATCH.indexOf(e.name) && -1 !== e.value.indexOf("%")))
                        throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");
                    i[e.name] = e.value;
                }
                return i;
            }),
            (n.LINEAR = function (t) {
                return t;
            }),
            (n.EASE = function (t) {
                return -Math.cos(t * Math.PI) / 2 + 0.5;
            }),
            (n.EASE_OUT = function (t) {
                return 1 - Math.pow(1 - t, 3);
            }),
            (n.EASE_IN = function (t) {
                return Math.pow(t, 3);
            }),
            (n.EASE_OUT_BOUNCE = function (t) {
                var e = 1 - Math.cos(t * (0.5 * Math.PI)),
                    i = Math.pow(e, 1.5),
                    s = Math.pow(1 - t, 2);
                return 1 - s + (1 - Math.abs(Math.cos(i * (2.5 * Math.PI)))) * s;
            }),
            (n.prototype.setElement = function (e, i) {
                var t, s;
                if (void 0 === e) throw new Error('Vivus [constructor]: "element" parameter is required');
                if (e.constructor === String && !(e = document.getElementById(e))) throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
                if (((this.parentEl = e), i && i.file)) {
                    (s = this),
                        (t = function () {
                            var t = document.createElement("div");
                            t.innerHTML = this.responseText;
                            var e = t.querySelector("svg");
                            if (!e) throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : " + i.file);
                            (s.el = e), s.el.setAttribute("width", "100%"), s.el.setAttribute("height", "100%"), s.parentEl.appendChild(s.el), (s.isReady = !0), s.init(), (s = null);
                        });
                    var n = new window.XMLHttpRequest();
                    return n.addEventListener("load", t), n.open("GET", i.file), void n.send();
                }
                switch (e.constructor) {
                    case window.SVGSVGElement:
                    case window.SVGElement:
                    case window.SVGGElement:
                        (this.el = e), (this.isReady = !0);
                        break;
                    case window.HTMLObjectElement:
                        (s = this),
                            (t = function (t) {
                                if (!s.isReady) {
                                    if (((s.el = e.contentDocument && e.contentDocument.querySelector("svg")), !s.el && t)) throw new Error("Vivus [constructor]: object loaded does not contain any SVG");
                                    s.el &&
                                        (e.getAttribute("built-by-vivus") && (s.parentEl.insertBefore(s.el, e), s.parentEl.removeChild(e), s.el.setAttribute("width", "100%"), s.el.setAttribute("height", "100%")),
                                        (s.isReady = !0),
                                        s.init(),
                                        (s = null));
                                }
                            })() || e.addEventListener("load", t);
                        break;
                    default:
                        throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');
                }
            }),
            (n.prototype.setOptions = function (t) {
                var e = ["delayed", "sync", "async", "nsync", "oneByOne", "scenario", "scenario-sync"],
                    i = ["inViewport", "manual", "autostart"];
                if (void 0 !== t && t.constructor !== Object) throw new Error('Vivus [constructor]: "options" parameter must be an object');
                if ((t = t || {}).type && -1 === e.indexOf(t.type)) throw new Error("Vivus [constructor]: " + t.type + " is not an existing animation `type`");
                if (((this.type = t.type || e[0]), t.start && -1 === i.indexOf(t.start))) throw new Error("Vivus [constructor]: " + t.start + " is not an existing `start` option");
                if (
                    ((this.start = t.start || i[0]),
                    (this.isIE = -1 !== window.navigator.userAgent.indexOf("MSIE") || -1 !== window.navigator.userAgent.indexOf("Trident/") || -1 !== window.navigator.userAgent.indexOf("Edge/")),
                    (this.duration = l(t.duration, 120)),
                    (this.delay = l(t.delay, null)),
                    (this.dashGap = l(t.dashGap, 1)),
                    (this.forceRender = t.hasOwnProperty("forceRender") ? !!t.forceRender : this.isIE),
                    (this.reverseStack = !!t.reverseStack),
                    (this.selfDestroy = !!t.selfDestroy),
                    (this.onReady = t.onReady),
                    (this.map = []),
                    (this.frameLength = this.currentFrame = this.delayUnit = this.speed = this.handle = null),
                    (this.ignoreInvisible = !!t.hasOwnProperty("ignoreInvisible") && !!t.ignoreInvisible),
                    (this.animTimingFunction = t.animTimingFunction || n.LINEAR),
                    (this.pathTimingFunction = t.pathTimingFunction || n.LINEAR),
                    this.delay >= this.duration)
                )
                    throw new Error("Vivus [constructor]: delay must be shorter than duration");
            }),
            (n.prototype.setCallback = function (t) {
                if (t && t.constructor !== Function) throw new Error('Vivus [constructor]: "callback" parameter must be a function');
                this.callback = t || function () {};
            }),
            (n.prototype.mapping = function () {
                for (var t, e, i, s, n, o = (s = n = 0), r = this.el.querySelectorAll("path"), a = 0; a < r.length; a++)
                    (t = r[a]),
                        this.isInvisible(t) ||
                            ((i = { el: t, length: Math.ceil(t.getTotalLength()) }),
                            isNaN(i.length)
                                ? window.console && console.warn && console.warn("Vivus [mapping]: cannot retrieve a path element length", t)
                                : (this.map.push(i),
                                  (t.style.strokeDasharray = i.length + " " + (i.length + 2 * this.dashGap)),
                                  (t.style.strokeDashoffset = i.length + this.dashGap),
                                  (i.length += this.dashGap),
                                  (s += i.length),
                                  this.renderPath(a)));
                for (
                    s = 0 === s ? 1 : s, this.delay = null === this.delay ? this.duration / 3 : this.delay, this.delayUnit = this.delay / (1 < r.length ? r.length - 1 : 1), this.reverseStack && this.map.reverse(), a = 0;
                    a < this.map.length;
                    a++
                ) {
                    switch (((i = this.map[a]), this.type)) {
                        case "delayed":
                            (i.startAt = this.delayUnit * a), (i.duration = this.duration - this.delay);
                            break;
                        case "oneByOne":
                            (i.startAt = (n / s) * this.duration), (i.duration = (i.length / s) * this.duration);
                            break;
                        case "sync":
                        case "async":
                        case "nsync":
                            (i.startAt = 0), (i.duration = this.duration);
                            break;
                        case "scenario-sync":
                            (t = i.el),
                                (e = this.parseAttr(t)),
                                (i.startAt = o + (l(e["data-delay"], this.delayUnit) || 0)),
                                (i.duration = l(e["data-duration"], this.duration)),
                                (o = void 0 !== e["data-async"] ? i.startAt : i.startAt + i.duration),
                                (this.frameLength = Math.max(this.frameLength, i.startAt + i.duration));
                            break;
                        case "scenario":
                            (t = i.el),
                                (e = this.parseAttr(t)),
                                (i.startAt = l(e["data-start"], this.delayUnit) || 0),
                                (i.duration = l(e["data-duration"], this.duration)),
                                (this.frameLength = Math.max(this.frameLength, i.startAt + i.duration));
                    }
                    (n += i.length), (this.frameLength = this.frameLength || this.duration);
                }
            }),
            (n.prototype.drawer = function () {
                var t = this;
                if (((this.currentFrame += this.speed), this.currentFrame <= 0)) this.stop(), this.reset();
                else {
                    if (!(this.currentFrame >= this.frameLength))
                        return (
                            this.trace(),
                            void (this.handle = e(function () {
                                t.drawer();
                            }))
                        );
                    this.stop(), (this.currentFrame = this.frameLength), this.trace(), this.selfDestroy && this.destroy();
                }
                this.callback(this), this.instanceCallback && (this.instanceCallback(this), (this.instanceCallback = null));
            }),
            (n.prototype.trace = function () {
                for (var t, e, i = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength, s = 0; s < this.map.length; s++)
                    (t = (i - (e = this.map[s]).startAt) / e.duration),
                        (t = this.pathTimingFunction(Math.max(0, Math.min(1, t)))),
                        e.progress !== t && ((e.progress = t), (e.el.style.strokeDashoffset = Math.floor(e.length * (1 - t))), this.renderPath(s));
            }),
            (n.prototype.renderPath = function (t) {
                var e, i;
                this.forceRender && this.map && this.map[t] && ((i = (e = this.map[t]).el.cloneNode(!0)), e.el.parentNode.replaceChild(i, e.el), (e.el = i));
            }),
            (n.prototype.init = function () {
                (this.frameLength = 0), (this.currentFrame = 0), (this.map = []), new i(this.el), this.mapping(), this.starter(), this.onReady && this.onReady(this);
            }),
            (n.prototype.starter = function () {
                switch (this.start) {
                    case "manual":
                        return;
                    case "autostart":
                        this.play();
                        break;
                    case "inViewport":
                        var t = this,
                            e = function () {
                                t.isInViewport(t.parentEl, 1) && (t.play(), window.removeEventListener("scroll", e));
                            };
                        window.addEventListener("scroll", e), e();
                }
            }),
            (n.prototype.getStatus = function () {
                return 0 === this.currentFrame ? "start" : this.currentFrame === this.frameLength ? "end" : "progress";
            }),
            (n.prototype.reset = function () {
                return this.setFrameProgress(0);
            }),
            (n.prototype.finish = function () {
                return this.setFrameProgress(1);
            }),
            (n.prototype.setFrameProgress = function (t) {
                return (t = Math.min(1, Math.max(0, t))), (this.currentFrame = Math.round(this.frameLength * t)), this.trace(), this;
            }),
            (n.prototype.play = function (t, e) {
                if (((this.instanceCallback = null), t && "function" == typeof t)) (this.instanceCallback = t), (t = null);
                else if (t && "number" != typeof t) throw new Error("Vivus [play]: invalid speed");
                return e && "function" == typeof e && !this.instanceCallback && (this.instanceCallback = e), (this.speed = t || 1), this.handle || this.drawer(), this;
            }),
            (n.prototype.stop = function () {
                return this.handle && (t(this.handle), (this.handle = null)), this;
            }),
            (n.prototype.destroy = function () {
                var t, e;
                for (this.stop(), t = 0; t < this.map.length; t++) ((e = this.map[t]).el.style.strokeDashoffset = null), (e.el.style.strokeDasharray = null), this.renderPath(t);
            }),
            (n.prototype.isInvisible = function (t) {
                var e,
                    i = t.getAttribute("data-ignore");
                return null !== i ? "false" !== i : !!this.ignoreInvisible && !(e = t.getBoundingClientRect()).width && !e.height;
            }),
            (n.prototype.parseAttr = function (t) {
                var e,
                    i = {};
                if (t && t.attributes) for (var s = 0; s < t.attributes.length; s++) i[(e = t.attributes[s]).name] = e.value;
                return i;
            }),
            (n.prototype.isInViewport = function (t, e) {
                var i = this.scrollY(),
                    s = i + this.getViewportH(),
                    n = t.getBoundingClientRect(),
                    o = n.height,
                    r = i + n.top;
                return r + o * (e = e || 0) <= s && i <= r + o;
            }),
            (n.prototype.getViewportH = function () {
                var t = this.docElem.clientHeight,
                    e = window.innerHeight;
                return t < e ? e : t;
            }),
            (n.prototype.scrollY = function () {
                return window.pageYOffset || this.docElem.scrollTop;
            }),
            (s = function () {
                n.prototype.docElem ||
                    ((n.prototype.docElem = window.document.documentElement),
                    (e =
                        window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        window.msRequestAnimationFrame ||
                        function (t) {
                            return window.setTimeout(t, 1e3 / 60);
                        }),
                    (t =
                        window.cancelAnimationFrame ||
                        window.webkitCancelAnimationFrame ||
                        window.mozCancelAnimationFrame ||
                        window.oCancelAnimationFrame ||
                        window.msCancelAnimationFrame ||
                        function (t) {
                            return window.clearTimeout(t);
                        }));
            }),
            (l = function (t, e) {
                var i = parseInt(t, 10);
                return 0 <= i ? i : e;
            }),
            "function" == typeof define && define.amd
                ? define([], function () {
                      return n;
                  })
                : "object" == typeof exports
                ? (module.exports = n)
                : (window.Vivus = n);
    })(),
    (function () {
        "use strict";
        function e(t) {
            if (!t) throw new Error("No options passed to Waypoint constructor");
            if (!t.element) throw new Error("No element option passed to Waypoint constructor");
            if (!t.handler) throw new Error("No handler option passed to Waypoint constructor");
            (this.key = "waypoint-" + i),
                (this.options = e.Adapter.extend({}, e.defaults, t)),
                (this.element = this.options.element),
                (this.adapter = new e.Adapter(this.element)),
                (this.callback = t.handler),
                (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
                (this.enabled = this.options.enabled),
                (this.triggerPoint = null),
                (this.group = e.Group.findOrCreate({ name: this.options.group, axis: this.axis })),
                (this.context = e.Context.findOrCreateByElement(this.options.context)),
                e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]),
                this.group.add(this),
                this.context.add(this),
                (o[this.key] = this),
                (i += 1);
        }
        var i = 0,
            o = {};
        (e.prototype.queueTrigger = function (t) {
            this.group.queueTrigger(this, t);
        }),
            (e.prototype.trigger = function (t) {
                this.enabled && this.callback && this.callback.apply(this, t);
            }),
            (e.prototype.destroy = function () {
                this.context.remove(this), this.group.remove(this), delete o[this.key];
            }),
            (e.prototype.disable = function () {
                return (this.enabled = !1), this;
            }),
            (e.prototype.enable = function () {
                return this.context.refresh(), (this.enabled = !0), this;
            }),
            (e.prototype.next = function () {
                return this.group.next(this);
            }),
            (e.prototype.previous = function () {
                return this.group.previous(this);
            }),
            (e.invokeAll = function (t) {
                var e,
                    i = [];
                for (e in o) i.push(o[e]);
                for (var s = 0, n = i.length; s < n; s++) i[s][t]();
            }),
            (e.destroyAll = function () {
                e.invokeAll("destroy");
            }),
            (e.disableAll = function () {
                e.invokeAll("disable");
            }),
            (e.enableAll = function () {
                for (var t in (e.Context.refreshAll(), o)) o[t].enabled = !0;
                return this;
            }),
            (e.refreshAll = function () {
                e.Context.refreshAll();
            }),
            (e.viewportHeight = function () {
                return window.innerHeight || document.documentElement.clientHeight;
            }),
            (e.viewportWidth = function () {
                return document.documentElement.clientWidth;
            }),
            (e.adapters = []),
            (e.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }),
            (e.offsetAliases = {
                "bottom-in-view": function () {
                    return this.context.innerHeight() - this.adapter.outerHeight();
                },
                "right-in-view": function () {
                    return this.context.innerWidth() - this.adapter.outerWidth();
                },
            }),
            (window.Waypoint = e);
    })(),
    (function () {
        "use strict";
        function e(t) {
            window.setTimeout(t, 1e3 / 60);
        }
        function i(t) {
            (this.element = t),
                (this.Adapter = g.Adapter),
                (this.adapter = new this.Adapter(t)),
                (this.key = "waypoint-context-" + s),
                (this.didScroll = !1),
                (this.didResize = !1),
                (this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }),
                (this.waypoints = { vertical: {}, horizontal: {} }),
                (t.waypointContextKey = this.key),
                (n[t.waypointContextKey] = this),
                (s += 1),
                g.windowContext || ((g.windowContext = !0), (g.windowContext = new i(window))),
                this.createThrottledScrollHandler(),
                this.createThrottledResizeHandler();
        }
        var s = 0,
            n = {},
            g = window.Waypoint,
            t = window.onload;
        (i.prototype.add = function (t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            (this.waypoints[e][t.key] = t), this.refresh();
        }),
            (i.prototype.checkEmpty = function () {
                var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                    e = this.Adapter.isEmptyObject(this.waypoints.vertical),
                    i = this.element == this.element.window;
                t && e && !i && (this.adapter.off(".waypoints"), delete n[this.key]);
            }),
            (i.prototype.createThrottledResizeHandler = function () {
                function t() {
                    e.handleResize(), (e.didResize = !1);
                }
                var e = this;
                this.adapter.on("resize.waypoints", function () {
                    e.didResize || ((e.didResize = !0), g.requestAnimationFrame(t));
                });
            }),
            (i.prototype.createThrottledScrollHandler = function () {
                function t() {
                    e.handleScroll(), (e.didScroll = !1);
                }
                var e = this;
                this.adapter.on("scroll.waypoints", function () {
                    (e.didScroll && !g.isTouch) || ((e.didScroll = !0), g.requestAnimationFrame(t));
                });
            }),
            (i.prototype.handleResize = function () {
                g.Context.refreshAll();
            }),
            (i.prototype.handleScroll = function () {
                var t,
                    e,
                    i = {},
                    s = {
                        horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" },
                        vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" },
                    };
                for (t in s) {
                    var n,
                        o = s[t],
                        r = o.newScroll > o.oldScroll ? o.forward : o.backward;
                    for (n in this.waypoints[t]) {
                        var a,
                            l,
                            h = this.waypoints[t][n];
                        null !== h.triggerPoint && ((a = o.oldScroll < h.triggerPoint), (l = o.newScroll >= h.triggerPoint), ((a && l) || (!a && !l)) && (h.queueTrigger(r), (i[h.group.id] = h.group)));
                    }
                }
                for (e in i) i[e].flushTriggers();
                this.oldScroll = { x: s.horizontal.newScroll, y: s.vertical.newScroll };
            }),
            (i.prototype.innerHeight = function () {
                return this.element == this.element.window ? g.viewportHeight() : this.adapter.innerHeight();
            }),
            (i.prototype.remove = function (t) {
                delete this.waypoints[t.axis][t.key], this.checkEmpty();
            }),
            (i.prototype.innerWidth = function () {
                return this.element == this.element.window ? g.viewportWidth() : this.adapter.innerWidth();
            }),
            (i.prototype.destroy = function () {
                var t,
                    e = [];
                for (t in this.waypoints) for (var i in this.waypoints[t]) e.push(this.waypoints[t][i]);
                for (var s = 0, n = e.length; s < n; s++) e[s].destroy();
            }),
            (i.prototype.refresh = function () {
                var t,
                    e,
                    i = this.element == this.element.window,
                    s = i ? void 0 : this.adapter.offset(),
                    n = {};
                for (e in (this.handleScroll(),
                (t = {
                    horizontal: { contextOffset: i ? 0 : s.left, contextScroll: i ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" },
                    vertical: { contextOffset: i ? 0 : s.top, contextScroll: i ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" },
                }))) {
                    var o,
                        r = t[e];
                    for (o in this.waypoints[e]) {
                        var a,
                            l,
                            h,
                            c,
                            u = this.waypoints[e][o],
                            d = u.options.offset,
                            p = u.triggerPoint,
                            f = 0,
                            m = null == p;
                        u.element !== u.element.window && (f = u.adapter.offset()[r.offsetProp]),
                            "function" == typeof d ? (d = d.apply(u)) : "string" == typeof d && ((d = parseFloat(d)), -1 < u.options.offset.indexOf("%") && (d = Math.ceil((r.contextDimension * d) / 100))),
                            (a = r.contextScroll - r.contextOffset),
                            (u.triggerPoint = Math.floor(f + a - d)),
                            (l = p < r.oldScroll),
                            (h = u.triggerPoint >= r.oldScroll),
                            (c = !l && !h),
                            !m && l && h ? (u.queueTrigger(r.backward), (n[u.group.id] = u.group)) : ((!m && c) || (m && r.oldScroll >= u.triggerPoint)) && (u.queueTrigger(r.forward), (n[u.group.id] = u.group));
                    }
                }
                return (
                    g.requestAnimationFrame(function () {
                        for (var t in n) n[t].flushTriggers();
                    }),
                    this
                );
            }),
            (i.findOrCreateByElement = function (t) {
                return i.findByElement(t) || new i(t);
            }),
            (i.refreshAll = function () {
                for (var t in n) n[t].refresh();
            }),
            (i.findByElement = function (t) {
                return n[t.waypointContextKey];
            }),
            (window.onload = function () {
                t && t(), i.refreshAll();
            }),
            (g.requestAnimationFrame = function (t) {
                (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t);
            }),
            (g.Context = i);
    })(),
    (function () {
        "use strict";
        function r(t, e) {
            return t.triggerPoint - e.triggerPoint;
        }
        function a(t, e) {
            return e.triggerPoint - t.triggerPoint;
        }
        function e(t) {
            (this.name = t.name), (this.axis = t.axis), (this.id = this.name + "-" + this.axis), (this.waypoints = []), this.clearTriggerQueues(), (i[this.axis][this.name] = this);
        }
        var i = { vertical: {}, horizontal: {} },
            s = window.Waypoint;
        (e.prototype.add = function (t) {
            this.waypoints.push(t);
        }),
            (e.prototype.clearTriggerQueues = function () {
                this.triggerQueues = { up: [], down: [], left: [], right: [] };
            }),
            (e.prototype.flushTriggers = function () {
                for (var t in this.triggerQueues) {
                    var e = this.triggerQueues[t],
                        i = "up" === t || "left" === t;
                    e.sort(i ? a : r);
                    for (var s = 0, n = e.length; s < n; s += 1) {
                        var o = e[s];
                        (!o.options.continuous && s !== e.length - 1) || o.trigger([t]);
                    }
                }
                this.clearTriggerQueues();
            }),
            (e.prototype.next = function (t) {
                this.waypoints.sort(r);
                var e = s.Adapter.inArray(t, this.waypoints);
                return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1];
            }),
            (e.prototype.previous = function (t) {
                this.waypoints.sort(r);
                var e = s.Adapter.inArray(t, this.waypoints);
                return e ? this.waypoints[e - 1] : null;
            }),
            (e.prototype.queueTrigger = function (t, e) {
                this.triggerQueues[e].push(t);
            }),
            (e.prototype.remove = function (t) {
                var e = s.Adapter.inArray(t, this.waypoints);
                -1 < e && this.waypoints.splice(e, 1);
            }),
            (e.prototype.first = function () {
                return this.waypoints[0];
            }),
            (e.prototype.last = function () {
                return this.waypoints[this.waypoints.length - 1];
            }),
            (e.findOrCreate = function (t) {
                return i[t.axis][t.name] || new e(t);
            }),
            (s.Group = e);
    })(),
    (function () {
        "use strict";
        function i(t) {
            this.$element = s(t);
        }
        var s = window.jQuery,
            t = window.Waypoint;
        s.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (t, e) {
            i.prototype[e] = function () {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[e].apply(this.$element, t);
            };
        }),
            s.each(["extend", "inArray", "isEmptyObject"], function (t, e) {
                i[e] = s[e];
            }),
            t.adapters.push({ name: "jquery", Adapter: i }),
            (t.Adapter = i);
    })(),
    (function () {
        "use strict";
        function t(s) {
            return function () {
                var e = [],
                    i = arguments[0];
                return (
                    s.isFunction(arguments[0]) && ((i = s.extend({}, arguments[1])).handler = arguments[0]),
                    this.each(function () {
                        var t = s.extend({}, i, { element: this });
                        "string" == typeof t.context && (t.context = s(this).closest(t.context)[0]), e.push(new n(t));
                    }),
                    e
                );
            };
        }
        var n = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
    })(),
    function () {
        function e(t, e) {
            return function () {
                return t.apply(e, arguments);
            };
        }
        var s,
            t,
            i,
            l,
            n,
            r =
                [].indexOf ||
                function (t) {
                    for (var e = 0, i = this.length; e < i; e++) if (e in this && this[e] === t) return e;
                    return -1;
                };
        function o(t) {
            null == t && (t = {}),
                (this.scrollCallback = e(this.scrollCallback, this)),
                (this.scrollHandler = e(this.scrollHandler, this)),
                (this.resetAnimation = e(this.resetAnimation, this)),
                (this.start = e(this.start, this)),
                (this.scrolled = !0),
                (this.config = this.util().extend(t, this.defaults)),
                null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)),
                (this.animationNameCache = new i()),
                (this.wowEvent = this.util().createEvent(this.config.boxClass));
        }
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
                "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
        }
        function h() {
            (this.keys = []), (this.values = []);
        }
        function c() {}
        (c.prototype.extend = function (t, e) {
            var i, s;
            for (i in e) (s = e[i]), null == t[i] && (t[i] = s);
            return t;
        }),
            (c.prototype.isMobile = function (t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t);
            }),
            (c.prototype.createEvent = function (t, e, i, s) {
                var n;
                return (
                    null == e && (e = !1),
                    null == i && (i = !1),
                    null == s && (s = null),
                    null != document.createEvent ? (n = document.createEvent("CustomEvent")).initCustomEvent(t, e, i, s) : null != document.createEventObject ? ((n = document.createEventObject()).eventType = t) : (n.eventName = t),
                    n
                );
            }),
            (c.prototype.emitEvent = function (t, e) {
                return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0;
            }),
            (c.prototype.addEvent = function (t, e, i) {
                return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : (t[e] = i);
            }),
            (c.prototype.removeEvent = function (t, e, i) {
                return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e];
            }),
            (c.prototype.innerHeight = function () {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
            }),
            (t = c),
            (i =
                this.WeakMap ||
                this.MozWeakMap ||
                ((h.prototype.get = function (t) {
                    for (var e, i = this.keys, s = (e = 0), n = i.length; e < n; s = ++e) if (i[s] === t) return this.values[s];
                }),
                (h.prototype.set = function (t, e) {
                    for (var i, s = this.keys, n = (i = 0), o = s.length; i < o; n = ++i) if (s[n] === t) return void (this.values[n] = e);
                    return this.keys.push(t), this.values.push(e);
                }),
                h)),
            (s = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || ((a.notSupported = !0), (a.prototype.observe = function () {}), a)),
            (l =
                this.getComputedStyle ||
                function (i, t) {
                    return (
                        (this.getPropertyValue = function (t) {
                            var e;
                            return (
                                "float" === t && (t = "styleFloat"),
                                n.test(t) &&
                                    t.replace(n, function (t, e) {
                                        return e.toUpperCase();
                                    }),
                                (null != (e = i.currentStyle) ? e[t] : void 0) || null
                            );
                        }),
                        this
                    );
                }),
            (n = /(\-([a-z]){1})/g),
            (this.WOW =
                ((o.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }),
                (o.prototype.init = function () {
                    var t;
                    return (
                        (this.element = window.document.documentElement), "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), (this.finished = [])
                    );
                }),
                (o.prototype.start = function () {
                    var n, t, e, i, r;
                    if (
                        ((this.stopped = !1),
                        (this.boxes = function () {
                            for (var t = this.element.querySelectorAll("." + this.config.boxClass), e = [], i = 0, s = t.length; i < s; i++) (n = t[i]), e.push(n);
                            return e;
                        }.call(this)),
                        (this.all = function () {
                            for (var t = this.boxes, e = [], i = 0, s = t.length; i < s; i++) (n = t[i]), e.push(n);
                            return e;
                        }.call(this)),
                        this.boxes.length)
                    )
                        if (this.disabled()) this.resetStyle();
                        else for (t = 0, e = (i = this.boxes).length; t < e; t++) (n = i[t]), this.applyStyle(n, !0);
                    return (
                        this.disabled() ||
                            (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), (this.interval = setInterval(this.scrollCallback, 50))),
                        this.config.live
                            ? new s(
                                  ((r = this),
                                  function (t) {
                                      for (var n, o, e = [], i = 0, s = t.length; i < s; i++)
                                          (o = t[i]),
                                              e.push(
                                                  function () {
                                                      for (var t = o.addedNodes || [], e = [], i = 0, s = t.length; i < s; i++) (n = t[i]), e.push(this.doSync(n));
                                                      return e;
                                                  }.call(r)
                                              );
                                      return e;
                                  })
                              ).observe(document.body, { childList: !0, subtree: !0 })
                            : void 0
                    );
                }),
                (o.prototype.stop = function () {
                    return (
                        (this.stopped = !0),
                        this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                        this.util().removeEvent(window, "resize", this.scrollHandler),
                        null != this.interval ? clearInterval(this.interval) : void 0
                    );
                }),
                (o.prototype.sync = function (t) {
                    return s.notSupported ? this.doSync(this.element) : void 0;
                }),
                (o.prototype.doSync = function (t) {
                    var e, i, s, n, o;
                    if ((null == t && (t = this.element), 1 === t.nodeType)) {
                        for (o = [], i = 0, s = (n = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; i < s; i++)
                            (e = n[i]), r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), o.push((this.scrolled = !0))) : o.push(void 0);
                        return o;
                    }
                }),
                (o.prototype.show = function (t) {
                    return (
                        this.applyStyle(t),
                        (t.className = t.className + " " + this.config.animateClass),
                        null != this.config.callback && this.config.callback(t),
                        this.util().emitEvent(t, this.wowEvent),
                        this.util().addEvent(t, "animationend", this.resetAnimation),
                        this.util().addEvent(t, "oanimationend", this.resetAnimation),
                        this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation),
                        this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation),
                        t
                    );
                }),
                (o.prototype.applyStyle = function (t, e) {
                    var i,
                        s = t.getAttribute("data-wow-duration"),
                        n = t.getAttribute("data-wow-delay"),
                        o = t.getAttribute("data-wow-iteration");
                    return this.animate(
                        ((i = this),
                        function () {
                            return i.customStyle(t, e, s, n, o);
                        })
                    );
                }),
                (o.prototype.animate =
                    "requestAnimationFrame" in window
                        ? function (t) {
                              return window.requestAnimationFrame(t);
                          }
                        : function (t) {
                              return t();
                          }),
                (o.prototype.resetStyle = function () {
                    for (var t, e = this.boxes, i = [], s = 0, n = e.length; s < n; s++) (t = e[s]), i.push((t.style.visibility = "visible"));
                    return i;
                }),
                (o.prototype.resetAnimation = function (t) {
                    var e;
                    return 0 <= t.type.toLowerCase().indexOf("animationend") ? ((e = t.target || t.srcElement).className = e.className.replace(this.config.animateClass, "").trim()) : void 0;
                }),
                (o.prototype.customStyle = function (t, e, i, s, n) {
                    return (
                        e && this.cacheAnimationName(t),
                        (t.style.visibility = e ? "hidden" : "visible"),
                        i && this.vendorSet(t.style, { animationDuration: i }),
                        s && this.vendorSet(t.style, { animationDelay: s }),
                        n && this.vendorSet(t.style, { animationIterationCount: n }),
                        this.vendorSet(t.style, { animationName: e ? "none" : this.cachedAnimationName(t) }),
                        t
                    );
                }),
                (o.prototype.vendors = ["moz", "webkit"]),
                (o.prototype.vendorSet = function (n, t) {
                    var o,
                        r,
                        a,
                        e = [];
                    for (o in t)
                        (r = t[o]),
                            (n["" + o] = r),
                            e.push(
                                function () {
                                    for (var t = this.vendors, e = [], i = 0, s = t.length; i < s; i++) (a = t[i]), e.push((n["" + a + o.charAt(0).toUpperCase() + o.substr(1)] = r));
                                    return e;
                                }.call(this)
                            );
                    return e;
                }),
                (o.prototype.vendorCSS = function (t, e) {
                    for (var i, s = l(t), n = s.getPropertyCSSValue(e), o = this.vendors, r = 0, a = o.length; r < a; r++) (i = o[r]), (n = n || s.getPropertyCSSValue("-" + i + "-" + e));
                    return n;
                }),
                (o.prototype.animationName = function (e) {
                    var i;
                    try {
                        i = this.vendorCSS(e, "animation-name").cssText;
                    } catch (t) {
                        i = l(e).getPropertyValue("animation-name");
                    }
                    return "none" === i ? "" : i;
                }),
                (o.prototype.cacheAnimationName = function (t) {
                    return this.animationNameCache.set(t, this.animationName(t));
                }),
                (o.prototype.cachedAnimationName = function (t) {
                    return this.animationNameCache.get(t);
                }),
                (o.prototype.scrollHandler = function () {
                    return (this.scrolled = !0);
                }),
                (o.prototype.scrollCallback = function () {
                    var n;
                    return !this.scrolled ||
                        ((this.scrolled = !1),
                        (this.boxes = function () {
                            for (var t = this.boxes, e = [], i = 0, s = t.length; i < s; i++) (n = t[i]) && (this.isVisible(n) ? this.show(n) : e.push(n));
                            return e;
                        }.call(this)),
                        this.boxes.length || this.config.live)
                        ? void 0
                        : this.stop();
                }),
                (o.prototype.offsetTop = function (t) {
                    for (var e; void 0 === t.offsetTop; ) t = t.parentNode;
                    for (e = t.offsetTop; (t = t.offsetParent); ) e += t.offsetTop;
                    return e;
                }),
                (o.prototype.isVisible = function (t) {
                    var e = t.getAttribute("data-wow-offset") || this.config.offset,
                        i = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset,
                        s = i + Math.min(this.element.clientHeight, this.util().innerHeight()) - e,
                        n = this.offsetTop(t),
                        o = n + t.clientHeight;
                    return n <= s && i <= o;
                }),
                (o.prototype.util = function () {
                    return null != this._util ? this._util : (this._util = new t());
                }),
                (o.prototype.disabled = function () {
                    return !this.config.mobile && this.util().isMobile(navigator.userAgent);
                }),
                o));
    }.call(this);
