(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-ui-util'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-ui-util'.");
    }
    root['androidx-ui-util'] = factory(typeof this['androidx-ui-util'] === 'undefined' ? {} : this['androidx-ui-util'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Long = kotlin_kotlin.$_$.v9;
  var toLong = kotlin_kotlin.$_$.v7;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.n2;
  var floatFromBits = kotlin_kotlin.$_$.c7;
  var Unit_getInstance = kotlin_kotlin.$_$.s2;
  var toBits = kotlin_kotlin.$_$.xa;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var get_lastIndex = kotlin_kotlin.$_$.u4;
  var compareTo = kotlin_kotlin.$_$.z6;
  //endregion
  //region block: pre-declaration
  //endregion
  function unpackInt1(value) {
    return value.a7(32).b7();
  }
  function unpackInt2(value) {
    return value.r7(new Long(-1, 0)).b7();
  }
  function packInts(val1, val2) {
    return toLong(val1).c7(32).a8(toLong(val2).r7(new Long(-1, 0)));
  }
  function unpackFloat1(value) {
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = value.a7(32).b7();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    return tmp$ret$0;
  }
  function unpackFloat2(value) {
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = value.r7(new Long(-1, 0)).b7();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    return tmp$ret$0;
  }
  function packFloats(val1, val2) {
    var v1 = toLong(toBits(val1));
    var v2 = toLong(toBits(val2));
    return v1.c7(32).a8(v2.r7(new Long(-1, 0)));
  }
  function fastForEach(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        action(item);
      }
       while (inductionVariable <= last);
  }
  function fastMap(_this__u8e3s4, transform) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.f());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = transform(item);
        target.a(tmp0_plusAssign);
      }
       while (inductionVariable <= last);
    return target;
  }
  function fastFirstOrNull(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        // Inline function 'androidx.compose.ui.util.fastFirstOrNull.<anonymous>' call
        if (predicate(item))
          return item;
      }
       while (inductionVariable <= last);
    return null;
  }
  function fastForEachIndexed(_this__u8e3s4, action) {
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        action(index, item);
      }
       while (inductionVariable <= last);
  }
  function fastAny(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
        if (predicate(item))
          return true;
      }
       while (inductionVariable <= last);
    return false;
  }
  function fastMaxBy(_this__u8e3s4, selector) {
    // Inline function 'kotlin.contracts.contract' call
    if (_this__u8e3s4.h())
      return null;
    var maxElem = _this__u8e3s4.g(0);
    var maxValue = selector(maxElem);
    var inductionVariable = 1;
    var last = get_lastIndex(_this__u8e3s4);
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var e = _this__u8e3s4.g(i);
        var v = selector(e);
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (!(i === last));
    return maxElem;
  }
  function fastAll(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
        if (!predicate(item))
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function lerp(start, stop, fraction) {
    return (1 - fraction) * start + fraction * stop;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = lerp;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-ui-util.js.map
