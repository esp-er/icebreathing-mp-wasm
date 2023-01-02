(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-runtime.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-runtime-saveable'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-runtime-saveable'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-runtime-saveable'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-runtime-saveable'.");
    }
    root['androidx-runtime-saveable'] = factory(typeof this['androidx-runtime-saveable'] === 'undefined' ? {} : this['androidx-runtime-saveable'], this['androidx-runtime'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_androidx_compose_runtime_runtime, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.g1;
  var charSequenceLength = kotlin_kotlin.$_$.w6;
  var Unit_getInstance = kotlin_kotlin.$_$.s2;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_androidx_compose_runtime_runtime.$_$.f;
  var toString = kotlin_kotlin.$_$.h9;
  var THROW_CCE = kotlin_kotlin.$_$.ba;
  var isInterface = kotlin_kotlin.$_$.n7;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.q1;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.p1;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.f2;
  var isObject = kotlin_kotlin.$_$.o7;
  var rememberUpdatedState$composable = kotlin_androidx_compose_runtime_runtime.$_$.n1;
  var DisposableEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.q;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  var toString_0 = kotlin_kotlin.$_$.ab;
  var referentialEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$_$.l1;
  var structuralEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$_$.t1;
  var neverEqualPolicy = kotlin_androidx_compose_runtime_runtime.$_$.k1;
  var SnapshotMutableState = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var classMeta = kotlin_kotlin.$_$.y6;
  var DisposableEffectResult = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var interfaceMeta = kotlin_kotlin.$_$.k7;
  //endregion
  //region block: pre-declaration
  //endregion
  var MaxSupportedRadix;
  function rememberSaveable$composable(inputs, saver, key, init, $composer, $changed, $default) {
    var saver_0 = {_v: saver};
    var key_0 = key;
    var $composer_0 = $composer;
    $composer_0.y1a(-1490773347);
    sourceInformation($composer_0, 'C(rememberSaveable$composable)P(1,3,2)80@3500L7,82@3597L244,95@4209L27,96@4262L27,98@4299L441:RememberSaveable.kt#r2ddri');
    if (!(($default & 2) === 0)) {
      saver_0._v = autoSaver();
    }
    if (!(($default & 4) === 0))
      key_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1490773347, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveable$composable (RememberSaveable.kt:65)');
    }
    $composer_0.y1a(1790924732);
    sourceInformation($composer_0, '75@3334L23');
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var tmp0_isNullOrEmpty = key_0;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = tmp0_isNullOrEmpty == null ? true : charSequenceLength(tmp0_isNullOrEmpty) === 0;
    if (!tmp$ret$0) {
      tmp = key_0;
    } else {
      tmp = toString($get_currentCompositeKeyHash$$composable_u3vbzj($composer_0, 0), MaxSupportedRadix);
    }
    var tmp1_group = tmp;
    $composer_0.d1b();
    var finalKey = tmp1_group;
    var tmp_0 = saver_0._v;
    if (!(tmp_0 == null) ? isInterface(tmp_0, Saver) : false)
      tmp_0;
    else
      THROW_CCE();
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp1_$get_current$$composable_gn3xww = get_LocalSaveableStateRegistry();
    var tmp2_$get_current$$composable_g4n2vl = $composer_0;
    var $composer_1 = tmp2_$get_current$$composable_g4n2vl;
    sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.w1n(tmp1_$get_current$$composable_gn3xww);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$1 = tmp0;
    var registry = tmp$ret$1;
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = inputs.slice();
    var tmp4_remember$composable = $composer_0;
    var $composer_2 = tmp4_remember$composable;
    $composer_2.y1a(-1603429786);
    sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var invalid = false;
    var indexedObject = tmp3_remember$composable;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var key_1 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      invalid = !!(invalid | $composer_2.z1a(key_1));
    }
    var tmp$ret$7;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_2;
    var tmp2_cache = invalid;
    var tmp$ret$6;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance().c1b_1) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>' call
      var tmp0_safe_receiver = registry;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y3r(finalKey);
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>' call
        tmp$ret$2 = saver_0._v.z3r(tmp1_safe_receiver);
        tmp$ret$3 = tmp$ret$2;
        tmp_2 = tmp$ret$3;
      }
      var restored = tmp_2;
      var tmp2_elvis_lhs = restored;
      tmp$ret$4 = tmp2_elvis_lhs == null ? init() : tmp2_elvis_lhs;
      var value = tmp$ret$4;
      tmp1_cache.b1b(value);
      tmp_1 = value;
    } else {
      tmp_1 = tmp0_let;
    }
    tmp$ret$5 = tmp_1;
    tmp$ret$6 = tmp$ret$5;
    var tmp_3 = tmp$ret$6;
    tmp$ret$7 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    var tmp0_0 = tmp$ret$7;
    $composer_2.d1b();
    tmp$ret$8 = tmp0_0;
    var value_0 = tmp$ret$8;
    if (!(registry == null)) {
      var saverState = rememberUpdatedState$composable(saver_0._v, $composer_0, 0);
      var valueState = rememberUpdatedState$composable(value_0, $composer_0, 0);
      DisposableEffect$composable(registry, finalKey, rememberSaveable$composable$lambda(registry, finalKey, saverState, valueState), $composer_0, 0);
    }
    var tmp0_1 = value_0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_1;
  }
  function requireCanBeSaved(_this__u8e3s4, value) {
    if (!(value == null) ? !_this__u8e3s4.a3s(value) : false) {
      var tmp;
      if (!(value == null) ? isInterface(value, SnapshotMutableState) : false) {
        var tmp_0;
        if ((!(value.n1s() === neverEqualPolicy()) ? !(value.n1s() === structuralEqualityPolicy()) : false) ? !(value.n1s() === referentialEqualityPolicy()) : false) {
          tmp_0 = 'If you use a custom SnapshotMutationPolicy for your MutableState you have to write a custom Saver';
        } else {
          tmp_0 = 'MutableState containing ' + toString_0(value.i2()) + ' cannot be saved using the current ' + 'SaveableStateRegistry. The default implementation only supports types ' + 'which can be stored inside the Bundle. Please consider implementing a ' + 'custom Saver for this class and pass it as a stateSaver parameter to ' + 'rememberSaveable().';
        }
        tmp = tmp_0;
      } else {
        tmp = toString_0(value) + ' cannot be saved using the current SaveableStateRegistry. The default ' + 'implementation only supports types which can be stored inside the Bundle' + '. Please consider implementing a custom Saver for this class and pass it' + ' to rememberSaveable().';
      }
      throw IllegalArgumentException_init_$Create$(tmp);
    }
  }
  function sam$androidx_compose_runtime_saveable_SaverScope$0(function_0) {
    this.b3s_1 = function_0;
  }
  sam$androidx_compose_runtime_saveable_SaverScope$0.$metadata$ = classMeta('sam$androidx_compose_runtime_saveable_SaverScope$0', [SaverScope]);
  function rememberSaveable$composable$lambda$lambda$lambda($registry) {
    return function (it) {
      return $registry.a3s(it);
    };
  }
  function rememberSaveable$composable$lambda$lambda($saverState, $valueState, $registry) {
    return function () {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = $saverState.i2();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>.<anonymous>' call
      var tmp = rememberSaveable$composable$lambda$lambda$lambda($registry);
      tmp$ret$0 = tmp0_with.c3s(new sam$androidx_compose_runtime_saveable_SaverScope$0(tmp), $valueState.i2());
      tmp$ret$1 = tmp$ret$0;
      return tmp$ret$1;
    };
  }
  function _no_name_provided__qut3iv($entry) {
    this.d3s_1 = $entry;
  }
  _no_name_provided__qut3iv.prototype.vk = function () {
    // Inline function 'androidx.compose.runtime.saveable.rememberSaveable$composable.<anonymous>.<anonymous>' call
    this.d3s_1.e3s();
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function rememberSaveable$composable$lambda($registry, $finalKey, $saverState, $valueState) {
    return function ($this$DisposableEffect) {
      var valueProvider = rememberSaveable$composable$lambda$lambda($saverState, $valueState, $registry);
      requireCanBeSaved($registry, valueProvider());
      var entry = $registry.f3s($finalKey, valueProvider);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv(entry);
      return tmp$ret$0;
    };
  }
  function get_LocalSaveableStateRegistry() {
    init_properties_SaveableStateRegistry_kt_lxngot();
    return LocalSaveableStateRegistry;
  }
  var LocalSaveableStateRegistry;
  function LocalSaveableStateRegistry$lambda() {
    init_properties_SaveableStateRegistry_kt_lxngot();
    return null;
  }
  var properties_initialized_SaveableStateRegistry_kt_4lrdzt;
  function init_properties_SaveableStateRegistry_kt_lxngot() {
    if (properties_initialized_SaveableStateRegistry_kt_4lrdzt) {
    } else {
      properties_initialized_SaveableStateRegistry_kt_4lrdzt = true;
      LocalSaveableStateRegistry = staticCompositionLocalOf(LocalSaveableStateRegistry$lambda);
    }
  }
  function get_AutoSaver() {
    init_properties_Saver_kt_4q0dz3();
    return AutoSaver;
  }
  var AutoSaver;
  function Saver() {
  }
  Saver.$metadata$ = interfaceMeta('Saver');
  function Saver_0(save, restore) {
    init_properties_Saver_kt_4q0dz3();
    return new Saver$1(save, restore);
  }
  function SaverScope() {
  }
  SaverScope.$metadata$ = interfaceMeta('SaverScope');
  function autoSaver() {
    init_properties_Saver_kt_4q0dz3();
    var tmp = get_AutoSaver();
    return isInterface(tmp, Saver) ? tmp : THROW_CCE();
  }
  function AutoSaver$lambda($this$Saver, it) {
    init_properties_Saver_kt_4q0dz3();
    return it;
  }
  function AutoSaver$lambda_0(it) {
    init_properties_Saver_kt_4q0dz3();
    return it;
  }
  function Saver$1($save, $restore) {
    this.g3s_1 = $save;
    this.h3s_1 = $restore;
  }
  Saver$1.prototype.c3s = function (_this__u8e3s4, value) {
    return this.g3s_1(_this__u8e3s4, value);
  };
  Saver$1.prototype.z3r = function (value) {
    return this.h3s_1(value);
  };
  Saver$1.$metadata$ = classMeta(undefined, [Saver]);
  var properties_initialized_Saver_kt_ch40dh;
  function init_properties_Saver_kt_4q0dz3() {
    if (properties_initialized_Saver_kt_ch40dh) {
    } else {
      properties_initialized_Saver_kt_ch40dh = true;
      var tmp = AutoSaver$lambda;
      AutoSaver = Saver_0(tmp, AutoSaver$lambda_0);
    }
  }
  //region block: init
  MaxSupportedRadix = 36;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Saver_0;
  _.$_$.b = rememberSaveable$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-runtime-saveable.js.map
