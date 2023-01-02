(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module '88b0986a7186d029-atomicfu-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to '88b0986a7186d029-atomicfu-js-ir'.");
    }
    root['88b0986a7186d029-atomicfu-js-ir'] = factory(typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined' ? {} : this['88b0986a7186d029-atomicfu-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var objectMeta = kotlin_kotlin.$_$.u7;
  var classMeta = kotlin_kotlin.$_$.y6;
  var toString = kotlin_kotlin.$_$.ab;
  //endregion
  //region block: pre-declaration
  None.prototype = Object.create(atomicfu$TraceBase.prototype);
  None.prototype.constructor = None;
  //endregion
  function loop(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.ih_1);
    }
  }
  function loop_0(_this__u8e3s4, action) {
    while (true) {
      action(_this__u8e3s4.jh_1);
    }
  }
  function None() {
    None_instance = this;
    atomicfu$TraceBase.call(this);
  }
  None.$metadata$ = objectMeta('None', undefined, undefined, undefined, undefined, atomicfu$TraceBase.prototype);
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function atomicfu$TraceBase() {
  }
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  atomicfu$TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  atomicfu$TraceBase.$metadata$ = classMeta('TraceBase');
  function AtomicRef(value) {
    this.ih_1 = value;
  }
  AtomicRef.prototype.kh = function (_set____db54di) {
    this.ih_1 = _set____db54di;
  };
  AtomicRef.prototype.lh = function () {
    return this.ih_1;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.ih_1 === expect))
      return false;
    this.ih_1 = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.ih_1;
    this.ih_1 = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString(this.ih_1);
  };
  AtomicRef.$metadata$ = classMeta('AtomicRef');
  Object.defineProperty(AtomicRef.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicRef.prototype.lh,
    set: AtomicRef.prototype.kh
  });
  function atomic$ref$1(initial) {
    return atomic(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this.mh_1 = value;
  }
  AtomicBoolean.prototype.nh = function (_set____db54di) {
    this.mh_1 = _set____db54di;
  };
  AtomicBoolean.prototype.lh = function () {
    return this.mh_1;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.mh_1 === expect))
      return false;
    this.mh_1 = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.mh_1;
    this.mh_1 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this.mh_1.toString();
  };
  AtomicBoolean.$metadata$ = classMeta('AtomicBoolean');
  Object.defineProperty(AtomicBoolean.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicBoolean.prototype.lh,
    set: AtomicBoolean.prototype.nh
  });
  function atomic$boolean$1(initial) {
    return atomic_0(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this.jh_1 = value;
  }
  AtomicInt.prototype.oh = function (_set____db54di) {
    this.jh_1 = _set____db54di;
  };
  AtomicInt.prototype.lh = function () {
    return this.jh_1;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this.jh_1 === expect))
      return false;
    this.jh_1 = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this.jh_1;
    this.jh_1 = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.jh_1;
    tmp0_this.jh_1 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.jh_1;
    tmp0_this.jh_1 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta) {
    var oldValue = this.jh_1;
    var tmp0_this = this;
    tmp0_this.jh_1 = tmp0_this.jh_1 + delta | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta) {
    var tmp0_this = this;
    tmp0_this.jh_1 = tmp0_this.jh_1 + delta | 0;
    return this.jh_1;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.jh_1 = tmp0_this.jh_1 + 1 | 0;
    return tmp0_this.jh_1;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this.jh_1 = tmp0_this.jh_1 - 1 | 0;
    return tmp0_this.jh_1;
  };
  AtomicInt.prototype.toString = function () {
    return this.jh_1.toString();
  };
  AtomicInt.$metadata$ = classMeta('AtomicInt');
  Object.defineProperty(AtomicInt.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicInt.prototype.lh,
    set: AtomicInt.prototype.oh
  });
  function atomic$int$1(initial) {
    return atomic_1(initial, None_getInstance());
  }
  function atomic(initial, trace) {
    return new AtomicRef(initial);
  }
  function atomic_0(initial, trace) {
    return new AtomicBoolean(initial);
  }
  function atomic_1(initial, trace) {
    return new AtomicInt(initial);
  }
  var Lock;
  function ReentrantLock() {
  }
  ReentrantLock.$metadata$ = classMeta('ReentrantLock');
  function synchronized(lock, block) {
    init_properties_Synchronized_kt_vep4ze();
    return block();
  }
  var properties_initialized_Synchronized_kt_8bwsba;
  function init_properties_Synchronized_kt_vep4ze() {
    if (properties_initialized_Synchronized_kt_8bwsba) {
    } else {
      properties_initialized_Synchronized_kt_8bwsba = true;
      Lock = new ReentrantLock();
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = atomic$boolean$1;
  _.$_$.b = atomic$ref$1;
  _.$_$.c = atomic$int$1;
  //endregion
  return _;
}));

//# sourceMappingURL=88b0986a7186d029-atomicfu-js-ir.js.map
