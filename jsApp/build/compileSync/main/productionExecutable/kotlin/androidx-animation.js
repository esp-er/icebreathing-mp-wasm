(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-animation-core.js', './androidx-ui-graphics.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-animation-core.js'), require('./androidx-ui-graphics.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-runtime.js'));
  else {
    if (typeof this['androidx-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-animation-core' was not found. Please, check whether 'androidx-animation-core' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-animation'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-animation'.");
    }
    root['androidx-animation'] = factory(typeof this['androidx-animation'] === 'undefined' ? {} : this['androidx-animation'], this['androidx-animation-core'], this['androidx-ui-graphics'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-runtime']);
  }
}(this, function (_, kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_ui_ui_graphics, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var TwoWayConverter = kotlin_androidx_compose_animation_animation_core.$_$.f;
  var ColorSpaces_getInstance = kotlin_androidx_compose_ui_ui_graphics.$_$.c3;
  var Color__convert_impl_so5m8t = kotlin_androidx_compose_ui_ui_graphics.$_$.g2;
  var _Color___get_red__impl__cwrsk6 = kotlin_androidx_compose_ui_ui_graphics.$_$.j2;
  var _Color___get_green__impl__bta9rs = kotlin_androidx_compose_ui_ui_graphics.$_$.h2;
  var _Color___get_blue__impl__xwez13 = kotlin_androidx_compose_ui_ui_graphics.$_$.e2;
  var Unit_getInstance = kotlin_kotlin.$_$.s2;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_androidx_compose_ui_ui_graphics.$_$.d2;
  var AnimationVector4D = kotlin_androidx_compose_animation_animation_core.$_$.a;
  var coerceIn = kotlin_kotlin.$_$.k8;
  var Color = kotlin_androidx_compose_ui_ui_graphics.$_$.i;
  var Color_0 = kotlin_androidx_compose_ui_ui_graphics.$_$.k;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_androidx_compose_ui_ui_graphics.$_$.f2;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui_graphics.$_$.g3;
  var Companion_getInstance_0 = kotlin_androidx_compose_runtime_runtime.$_$.f2;
  var THROW_CCE = kotlin_kotlin.$_$.ba;
  var isObject = kotlin_kotlin.$_$.o7;
  var createTransitionAnimation$composable = kotlin_androidx_compose_animation_animation_core.$_$.k;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.g1;
  var spring$default = kotlin_androidx_compose_animation_animation_core.$_$.p;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_ColorToVector() {
    init_properties_ColorVectorConverter_kt_rkr1c();
    return ColorToVector;
  }
  var ColorToVector;
  function get_M1() {
    init_properties_ColorVectorConverter_kt_rkr1c();
    return M1;
  }
  var M1;
  function get_InverseM1() {
    init_properties_ColorVectorConverter_kt_rkr1c();
    return InverseM1;
  }
  var InverseM1;
  function multiplyColumn(column, x, y, z, matrix) {
    init_properties_ColorVectorConverter_kt_rkr1c();
    return x * matrix[column] + y * matrix[3 + column | 0] + z * matrix[6 + column | 0];
  }
  function get_VectorConverter(_this__u8e3s4) {
    init_properties_ColorVectorConverter_kt_rkr1c();
    return get_ColorToVector();
  }
  function ColorToVector$lambda(colorSpace) {
    init_properties_ColorVectorConverter_kt_rkr1c();
    var tmp = ColorToVector$lambda$lambda;
    return TwoWayConverter(tmp, ColorToVector$lambda$lambda_0(colorSpace));
  }
  function ColorToVector$lambda$lambda(color) {
    init_properties_ColorVectorConverter_kt_rkr1c();
    var colorXyz = Color__convert_impl_so5m8t(color.y3a_1, ColorSpaces_getInstance().p39_1);
    var x = _Color___get_red__impl__cwrsk6(colorXyz);
    var y = _Color___get_green__impl__bta9rs(colorXyz);
    var z = _Color___get_blue__impl__xwez13(colorXyz);
    var tmp$ret$0;
    // Inline function 'kotlin.math.pow' call
    var tmp0_pow = multiplyColumn(0, x, y, z, get_M1());
    var tmp1_pow = 1.0 / 3.0;
    tmp$ret$0 = Math.pow(tmp0_pow, tmp1_pow);
    var l = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.pow' call
    var tmp2_pow = multiplyColumn(1, x, y, z, get_M1());
    var tmp3_pow = 1.0 / 3.0;
    tmp$ret$1 = Math.pow(tmp2_pow, tmp3_pow);
    var a = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.math.pow' call
    var tmp4_pow = multiplyColumn(2, x, y, z, get_M1());
    var tmp5_pow = 1.0 / 3.0;
    tmp$ret$2 = Math.pow(tmp4_pow, tmp5_pow);
    var b = tmp$ret$2;
    return new AnimationVector4D(_Color___get_alpha__impl__wcfyv1(color.y3a_1), l, a, b);
  }
  function ColorToVector$lambda$lambda_0($colorSpace) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = it.e73_1;
      tmp$ret$0 = Math.pow(tmp0_pow, 3.0);
      var l = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.math.pow' call
      var tmp1_pow = it.f73_1;
      tmp$ret$1 = Math.pow(tmp1_pow, 3.0);
      var a = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.math.pow' call
      var tmp2_pow = it.g73_1;
      tmp$ret$2 = Math.pow(tmp2_pow, 3.0);
      var b = tmp$ret$2;
      var x = multiplyColumn(0, l, a, b, get_InverseM1());
      var y = multiplyColumn(1, l, a, b, get_InverseM1());
      var z = multiplyColumn(2, l, a, b, get_InverseM1());
      var tmp0_alpha = coerceIn(it.d73_1, 0.0, 1.0);
      var tmp1_red = coerceIn(x, -2.0, 2.0);
      var tmp2_green = coerceIn(y, -2.0, 2.0);
      var tmp3_blue = coerceIn(z, -2.0, 2.0);
      var tmp4_colorSpace = ColorSpaces_getInstance().p39_1;
      var colorXyz = Color(tmp1_red, tmp2_green, tmp3_blue, tmp0_alpha, tmp4_colorSpace);
      return new Color_0(Color__convert_impl_so5m8t(colorXyz, $colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_jaoojo;
  function init_properties_ColorVectorConverter_kt_rkr1c() {
    if (properties_initialized_ColorVectorConverter_kt_jaoojo) {
    } else {
      properties_initialized_ColorVectorConverter_kt_jaoojo = true;
      ColorToVector = ColorToVector$lambda;
      var tmp$ret$0;
      // Inline function 'kotlin.floatArrayOf' call
      tmp$ret$0 = new Float32Array([0.80405736, 0.026893456, 0.04586542, 0.3188387, 0.9319606, 0.26299807, -0.11419419, 0.05105356, 0.83999807]);
      M1 = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlin.floatArrayOf' call
      tmp$ret$0_0 = new Float32Array([1.2485008, -0.032856926, -0.057883114, -0.48331892, 1.1044513, -0.3194066, 0.19910365, -0.07159331, 1.202023]);
      InverseM1 = tmp$ret$0_0;
    }
  }
  function animateColor$composable(_this__u8e3s4, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    $composer_0.y1a(-1488075038);
    sourceInformation($composer_0, 'C(animateColor$composable)P(2)68@3224L31,69@3291L70,73@3374L70:Transition.kt#xbi5r1');
    if (!(($default & 1) === 0)) {
      transitionSpec_0 = animateColor$composable$lambda;
    }
    if (!(($default & 2) === 0))
      label_0 = 'ColorAnimation';
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(targetValueByState(_this__u8e3s4.o79(), $composer_0, 112 & $changed >> 6).y3a_1);
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.y1a(-838505973);
    sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.z1a(colorSpace);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_0().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.animateColor$composable.<anonymous>' call
      tmp$ret$0 = get_VectorConverter(Companion_getInstance())(colorSpace);
      var value = tmp$ret$0;
      tmp1_cache.b1b(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.d1b();
    tmp$ret$4 = tmp0;
    var typeConverter = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'androidx.compose.animation.core.animateValue$composable' call
    var tmp1_animateValue$composable = transitionSpec_0;
    var tmp2_animateValue$composable = label_0;
    var tmp3_animateValue$composable = $composer_0;
    var tmp4_animateValue$composable = 14 & $changed | 896 & $changed << 3 | 7168 & $changed << 3 | 57344 & $changed << 3;
    var transitionSpec_1 = tmp1_animateValue$composable;
    var label_1 = tmp2_animateValue$composable;
    var $composer_2 = tmp3_animateValue$composable;
    $composer_2.y1a(-1940744337);
    sourceInformation($composer_2, 'C(animateValue$composable)P(3,2)856@34079L32,857@34134L31,858@34190L23,860@34226L89:Transition.kt#pdpnli');
    if (!(0 === 0)) {
      transitionSpec_1 = animateColor$composable$lambda_0;
    }
    if (!(0 === 0))
      label_1 = 'ValueAnimation';
    var initialValue = targetValueByState(_this__u8e3s4.d7a(), $composer_2, 112 & tmp4_animateValue$composable >> 9).y3a_1;
    var targetValue = targetValueByState(_this__u8e3s4.o79(), $composer_2, 112 & tmp4_animateValue$composable >> 9).y3a_1;
    var animationSpec = transitionSpec_1(_this__u8e3s4.k7a(), $composer_2, 112 & tmp4_animateValue$composable >> 3);
    var tmp0_0 = createTransitionAnimation$composable(_this__u8e3s4, new Color_0(initialValue), new Color_0(targetValue), animationSpec, typeConverter, label_1, $composer_2, 14 & tmp4_animateValue$composable | 57344 & tmp4_animateValue$composable << 9 | 458752 & tmp4_animateValue$composable << 6);
    $composer_2.d1b();
    tmp$ret$5 = tmp0_0;
    var tmp0_1 = tmp$ret$5;
    $composer_0.d1b();
    return tmp0_1;
  }
  function animateColor$composable$lambda($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-1457805428);
    if (isTraceInProgress()) {
      traceEventStart(-1457805428, $changed, -1, 'androidx.compose.animation.animateColor$composable.<anonymous> (Transition.kt:64)');
    }
    var tmp0 = spring$default(0.0, 0.0, null, 7, null);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  }
  function animateColor$composable$lambda_0($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:851)');
    }
    var tmp0 = spring$default(0.0, 0.0, null, 7, null);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  }
  var platformFlingScrollFriction;
  //region block: init
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_VectorConverter;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-animation.js.map
