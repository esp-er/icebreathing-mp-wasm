(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-runtime.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-graphics.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './androidx-ui-unit.js', './androidx-foundation.js', './androidx-animation-core.js', './androidx-ui-geometry.js', './androidx-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-graphics.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./androidx-ui-unit.js'), require('./androidx-foundation.js'), require('./androidx-animation-core.js'), require('./androidx-ui-geometry.js'), require('./androidx-ui-util.js'));
  else {
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-material-ripple'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-material-ripple'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'androidx-material-ripple'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-material-ripple'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-material-ripple'.");
    }
    if (typeof this['androidx-foundation'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'androidx-foundation' was not found. Please, check whether 'androidx-foundation' is loaded prior to 'androidx-material-ripple'.");
    }
    if (typeof this['androidx-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'androidx-animation-core' was not found. Please, check whether 'androidx-animation-core' is loaded prior to 'androidx-material-ripple'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'androidx-material-ripple'.");
    }
    if (typeof this['androidx-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'androidx-material-ripple'. Its dependency 'androidx-ui-util' was not found. Please, check whether 'androidx-ui-util' is loaded prior to 'androidx-material-ripple'.");
    }
    root['androidx-material-ripple'] = factory(typeof this['androidx-material-ripple'] === 'undefined' ? {} : this['androidx-material-ripple'], this['androidx-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-graphics'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['androidx-ui-unit'], this['androidx-foundation'], this['androidx-animation-core'], this['androidx-ui-geometry'], this['androidx-ui-util']);
  }
}(this, function (_, kotlin_androidx_compose_runtime_runtime, kotlin_kotlin, kotlin_androidx_compose_ui_ui_graphics, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_foundation_foundation, kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.g1;
  var Unit_getInstance = kotlin_kotlin.$_$.s2;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.f2;
  var THROW_CCE = kotlin_kotlin.$_$.ba;
  var isObject = kotlin_kotlin.$_$.o7;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  var classMeta = kotlin_kotlin.$_$.y6;
  var Color__copy$default_impl_ectz3s = kotlin_androidx_compose_ui_ui_graphics.$_$.y2;
  var CoroutineImpl = kotlin_kotlin.$_$.k6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var isInterface = kotlin_kotlin.$_$.n7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v5;
  var mutableStateMapOf = kotlin_androidx_compose_runtime_runtime.$_$.i1;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var RememberObserver = kotlin_androidx_compose_runtime_runtime.$_$.y;
  var SuspendFunction1 = kotlin_kotlin.$_$.m6;
  var Dp = kotlin_androidx_compose_ui_ui_unit.$_$.o;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_unit.$_$.a3;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_graphics.$_$.g3;
  var Color = kotlin_androidx_compose_ui_ui_graphics.$_$.k;
  var rememberUpdatedState$composable = kotlin_androidx_compose_runtime_runtime.$_$.n1;
  var Interaction = kotlin_androidx_compose_foundation_foundation.$_$.m;
  var Cancel = kotlin_androidx_compose_foundation_foundation.$_$.o;
  var Release = kotlin_androidx_compose_foundation_foundation.$_$.q;
  var Press = kotlin_androidx_compose_foundation_foundation.$_$.p;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var equals = kotlin_kotlin.$_$.a7;
  var Dp__hashCode_impl_sxkrra = kotlin_androidx_compose_ui_ui_unit.$_$.b2;
  var hashCode = kotlin_kotlin.$_$.i7;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.q1;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.p1;
  var _Color___get_value__impl__1pls5m = kotlin_androidx_compose_ui_ui_graphics.$_$.k2;
  var LaunchedEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.v;
  var Indication = kotlin_androidx_compose_foundation_foundation.$_$.z;
  var IndicationInstance = kotlin_androidx_compose_foundation_foundation.$_$.y;
  var Animatable$default = kotlin_androidx_compose_animation_animation_core.$_$.n;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var Cancel_0 = kotlin_androidx_compose_foundation_foundation.$_$.f;
  var Stop = kotlin_androidx_compose_foundation_foundation.$_$.h;
  var Start = kotlin_androidx_compose_foundation_foundation.$_$.g;
  var Unfocus = kotlin_androidx_compose_foundation_foundation.$_$.j;
  var Focus = kotlin_androidx_compose_foundation_foundation.$_$.i;
  var Exit = kotlin_androidx_compose_foundation_foundation.$_$.l;
  var Enter = kotlin_androidx_compose_foundation_foundation.$_$.k;
  var lastOrNull = kotlin_kotlin.$_$.w4;
  var _Dp___get_value__impl__geb1vb = kotlin_androidx_compose_ui_ui_unit.$_$.c2;
  var isNaN_0 = kotlin_kotlin.$_$.na;
  var _Size___get_width__impl__58y75t = kotlin_androidx_compose_ui_ui_geometry.$_$.h1;
  var _Size___get_height__impl__a04p02 = kotlin_androidx_compose_ui_ui_geometry.$_$.e1;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_graphics.$_$.f3;
  var get_LinearEasing = kotlin_androidx_compose_animation_animation_core.$_$.d;
  var TweenSpec_init_$Create$ = kotlin_androidx_compose_animation_animation_core.$_$.s;
  var tween$default = kotlin_androidx_compose_animation_animation_core.$_$.q;
  var get_FastOutSlowInEasing = kotlin_androidx_compose_animation_animation_core.$_$.c;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var mutableStateOf$default = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$_$.e;
  var Offset_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.ja;
  var lerp = kotlin_androidx_compose_ui_ui_util.$_$.a;
  var _Offset___get_x__impl__xvi35n = kotlin_androidx_compose_ui_ui_geometry.$_$.b1;
  var _Offset___get_y__impl__8bzhra = kotlin_androidx_compose_ui_ui_geometry.$_$.c1;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_androidx_compose_ui_ui_graphics.$_$.d2;
  var Offset__getDistance_impl_pclvxn = kotlin_androidx_compose_ui_ui_geometry.$_$.w;
  var KMutableProperty1 = kotlin_kotlin.$_$.s8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g7;
  var _Dp___init__impl__ms3zkb = kotlin_androidx_compose_ui_ui_unit.$_$.z1;
  var luminance = kotlin_androidx_compose_ui_ui_graphics.$_$.d1;
  var objectMeta = kotlin_kotlin.$_$.u7;
  var interfaceMeta = kotlin_kotlin.$_$.k7;
  var getNumberHashCode = kotlin_kotlin.$_$.e7;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  //endregion
  //region block: pre-declaration
  CommonRipple.prototype = Object.create(Ripple.prototype);
  CommonRipple.prototype.constructor = CommonRipple;
  CommonRippleIndicationInstance$addRipple$slambda.prototype = Object.create(CoroutineImpl.prototype);
  CommonRippleIndicationInstance$addRipple$slambda.prototype.constructor = CommonRippleIndicationInstance$addRipple$slambda;
  CommonRippleIndicationInstance.prototype = Object.create(RippleIndicationInstance.prototype);
  CommonRippleIndicationInstance.prototype.constructor = CommonRippleIndicationInstance;
  Ripple$rememberUpdatedInstance$composable$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Ripple$rememberUpdatedInstance$composable$slambda$slambda.prototype.constructor = Ripple$rememberUpdatedInstance$composable$slambda$slambda;
  Ripple$rememberUpdatedInstance$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Ripple$rememberUpdatedInstance$composable$slambda.prototype.constructor = Ripple$rememberUpdatedInstance$composable$slambda;
  StateLayer$handleInteraction$slambda.prototype = Object.create(CoroutineImpl.prototype);
  StateLayer$handleInteraction$slambda.prototype.constructor = StateLayer$handleInteraction$slambda;
  StateLayer$handleInteraction$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  StateLayer$handleInteraction$slambda_1.prototype.constructor = StateLayer$handleInteraction$slambda_1;
  RippleAnimation$fadeIn$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  RippleAnimation$fadeIn$slambda$slambda.prototype.constructor = RippleAnimation$fadeIn$slambda$slambda;
  RippleAnimation$fadeIn$slambda$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  RippleAnimation$fadeIn$slambda$slambda_1.prototype.constructor = RippleAnimation$fadeIn$slambda$slambda_1;
  RippleAnimation$fadeIn$slambda$slambda_3.prototype = Object.create(CoroutineImpl.prototype);
  RippleAnimation$fadeIn$slambda$slambda_3.prototype.constructor = RippleAnimation$fadeIn$slambda$slambda_3;
  RippleAnimation$fadeOut$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  RippleAnimation$fadeOut$slambda$slambda.prototype.constructor = RippleAnimation$fadeOut$slambda$slambda;
  RippleAnimation$fadeIn$slambda.prototype = Object.create(CoroutineImpl.prototype);
  RippleAnimation$fadeIn$slambda.prototype.constructor = RippleAnimation$fadeIn$slambda;
  RippleAnimation$fadeOut$slambda.prototype = Object.create(CoroutineImpl.prototype);
  RippleAnimation$fadeOut$slambda.prototype.constructor = RippleAnimation$fadeOut$slambda;
  $animateCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $animateCOROUTINE$0.prototype.constructor = $animateCOROUTINE$0;
  $fadeInCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $fadeInCOROUTINE$1.prototype.constructor = $fadeInCOROUTINE$1;
  $fadeOutCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $fadeOutCOROUTINE$2.prototype.constructor = $fadeOutCOROUTINE$2;
  //endregion
  function CommonRipple(bounded, radius, color) {
    Ripple.call(this, bounded, radius, color);
  }
  CommonRipple.prototype.t8u = function (interactionSource, bounded, radius, color, rippleAlpha, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-1340080932);
    sourceInformation($composer_0, 'C(rememberUpdatedRippleInstance$composable)P(2!1,3:c#ui.unit.Dp)53@1880L125:CommonRipple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(-1340080932, $changed, -1, 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance$composable (CommonRipple.kt:46)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var tmp1_remember$composable = 14 & $changed | 112 & $changed >> 12;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.y1a(-1124426577);
    sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!($composer_1.z1a(interactionSource) | $composer_1.z1a(this));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance$composable.<anonymous>' call
      tmp$ret$0 = new CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha);
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
    var tmp0_0 = tmp$ret$4;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_0;
  };
  CommonRipple.$metadata$ = classMeta('CommonRipple', undefined, undefined, undefined, undefined, Ripple.prototype);
  function drawRipples(_this__u8e3s4, $this, color) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = $this.c8v_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.z().c();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.drawRipples.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.i2();
      var ripple = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var alpha = $this.b8v_1.i2().g8v_1;
      var tmp;
      if (!(alpha === 0.0)) {
        ripple.t8v(_this__u8e3s4, Color__copy$default_impl_ectz3s(color, alpha, 0.0, 0.0, 0.0, 14, null));
        tmp = Unit_getInstance();
      }
      tmp$ret$2 = tmp;
    }
  }
  function CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation) {
    this.c8w_1 = $rippleAnimation;
    this.d8w_1 = this$0;
    this.e8w_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  CommonRippleIndicationInstance$addRipple$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  CommonRippleIndicationInstance$addRipple$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  CommonRippleIndicationInstance$addRipple$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 5;
            this.zf_1 = 1;
            continue $sm;
          case 1:
            this.ag_1 = 4;
            this.zf_1 = 2;
            suspendResult = this.c8w_1.h8w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.g8w_1 = suspendResult;
            this.ag_1 = 5;
            this.zf_1 = 3;
            continue $sm;
          case 3:
            this.d8w_1.c8v_1.k3(this.e8w_1);
            ;
            return Unit_getInstance();
          case 4:
            this.ag_1 = 5;
            var t = this.cg_1;
            this.d8w_1.c8v_1.k3(this.e8w_1);
            ;
            throw t;
          case 5:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 5) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  CommonRippleIndicationInstance$addRipple$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda(this.c8w_1, this.d8w_1, this.e8w_1, completion);
    i.f8w_1 = $this$launch;
    return i;
  };
  CommonRippleIndicationInstance$addRipple$slambda.$metadata$ = classMeta('CommonRippleIndicationInstance$addRipple$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function CommonRippleIndicationInstance$addRipple$slambda_0($rippleAnimation, this$0, $interaction, resultContinuation) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha) {
    RippleIndicationInstance.call(this, bounded, rippleAlpha);
    this.y8u_1 = bounded;
    this.z8u_1 = radius;
    this.a8v_1 = color;
    this.b8v_1 = rippleAlpha;
    this.c8v_1 = mutableStateMapOf();
  }
  CommonRippleIndicationInstance.prototype.l7s = function (_this__u8e3s4) {
    var color = this.a8v_1.i2().y3a_1;
    _this__u8e3s4.v3l();
    this.j8w(_this__u8e3s4, this.z8u_1, color);
    drawRipples(_this__u8e3s4, this, color);
  };
  CommonRippleIndicationInstance.prototype.k8w = function (interaction, scope) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.c8v_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.z().c();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.addRipple.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.i2();
      var ripple = tmp$ret$1;
      ripple.l8w();
    }
    var origin = this.y8u_1 ? interaction.s8l_1 : null;
    var rippleAnimation = new RippleAnimation(origin, this.z8u_1, this.y8u_1);
    // Inline function 'kotlin.collections.set' call
    var tmp1_set = this.c8v_1;
    tmp1_set.q(interaction, rippleAnimation);
    launch$default(scope, null, null, CommonRippleIndicationInstance$addRipple$slambda_0(rippleAnimation, this, interaction, null), 3, null);
  };
  CommonRippleIndicationInstance.prototype.m8w = function (interaction) {
    var tmp0_safe_receiver = this.c8v_1.v(interaction);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l8w();
    }
  };
  CommonRippleIndicationInstance.prototype.w1k = function () {
  };
  CommonRippleIndicationInstance.prototype.y1k = function () {
    this.c8v_1.g9();
  };
  CommonRippleIndicationInstance.prototype.x1k = function () {
    this.c8v_1.g9();
  };
  CommonRippleIndicationInstance.$metadata$ = classMeta('CommonRippleIndicationInstance', [RememberObserver], undefined, undefined, undefined, RippleIndicationInstance.prototype);
  function get_DefaultTweenSpec() {
    init_properties_Ripple_kt_v7d712();
    return DefaultTweenSpec;
  }
  var DefaultTweenSpec;
  function rememberRipple$composable(bounded, radius, color, $composer, $changed, $default) {
    init_properties_Ripple_kt_v7d712();
    var bounded_0 = {_v: bounded};
    var radius_0 = {_v: new Dp(radius)};
    var color_0 = color;
    var $composer_0 = $composer;
    $composer_0.y1a(821185160);
    sourceInformation($composer_0, 'C(rememberRipple$composable)P(!1,2:c#ui.unit.Dp,1:c#ui.graphics.Color)81@3890L27,82@3929L85:Ripple.kt#vhb33q');
    if (!(($default & 1) === 0)) {
      bounded_0._v = true;
    }
    if (!(($default & 2) === 0)) {
      radius_0._v = new Dp(Companion_getInstance_0().d2l_1);
    }
    if (!(($default & 4) === 0))
      color_0 = Companion_getInstance_1().q3a_1;
    if (isTraceInProgress()) {
      traceEventStart(821185160, $changed, -1, 'androidx.compose.material.ripple.rememberRipple$composable (Ripple.kt:76)');
    }
    var colorState = rememberUpdatedState$composable(new Color(color_0), $composer_0, 14 & $changed >> 6);
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = bounded_0._v;
    var tmp1_remember$composable = radius_0._v.f2l_1;
    var tmp2_remember$composable = $composer_0;
    var tmp3_remember$composable = 14 & $changed | 112 & $changed;
    var $composer_1 = tmp2_remember$composable;
    $composer_1.y1a(-1124426577);
    sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!($composer_1.z1a(tmp0_remember$composable) | $composer_1.z1a(new Dp(tmp1_remember$composable)));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.material.ripple.rememberRipple$composable.<anonymous>' call
      tmp$ret$0 = new CommonRipple(bounded_0._v, radius_0._v.f2l_1, colorState);
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
    var tmp0_0 = tmp$ret$4;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_0;
  }
  function Ripple$rememberUpdatedInstance$composable$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation) {
    this.w8w_1 = $instance;
    this.x8w_1 = $this_LaunchedEffect;
    CoroutineImpl.call(this, resultContinuation);
  }
  Ripple$rememberUpdatedInstance$composable$slambda$slambda.prototype.c7t = function (interaction, $cont) {
    var tmp = this.d7t(interaction, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  Ripple$rememberUpdatedInstance$composable$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.c7t((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  Ripple$rememberUpdatedInstance$composable$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          var tmp0_subject = this.y8w_1;
          if (tmp0_subject instanceof Press) {
            this.w8w_1.k8w(this.y8w_1, this.x8w_1);
          } else {
            if (tmp0_subject instanceof Release) {
              this.w8w_1.m8w(this.y8w_1.u8l_1);
            } else {
              if (tmp0_subject instanceof Cancel) {
                this.w8w_1.m8w(this.y8w_1.x8l_1);
              } else {
                this.w8w_1.n8w(this.y8w_1, this.x8w_1);
              }
            }
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  Ripple$rememberUpdatedInstance$composable$slambda$slambda.prototype.d7t = function (interaction, completion) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda$slambda(this.w8w_1, this.x8w_1, completion);
    i.y8w_1 = interaction;
    return i;
  };
  Ripple$rememberUpdatedInstance$composable$slambda$slambda.$metadata$ = classMeta('Ripple$rememberUpdatedInstance$composable$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Ripple$rememberUpdatedInstance$composable$slambda$slambda_0($instance, $this_LaunchedEffect, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation);
    var l = function (interaction, $cont) {
      return i.c7t(interaction, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.z8w_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.hz = function (value, $cont) {
    return this.z8w_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function Ripple$rememberUpdatedInstance$composable$slambda($interactionSource, $instance, resultContinuation) {
    this.i8x_1 = $interactionSource;
    this.j8x_1 = $instance;
    CoroutineImpl.call(this, resultContinuation);
  }
  Ripple$rememberUpdatedInstance$composable$slambda.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  Ripple$rememberUpdatedInstance$composable$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Ripple$rememberUpdatedInstance$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            var tmp_0 = this.i8x_1.n7s();
            var tmp_1 = Ripple$rememberUpdatedInstance$composable$slambda$slambda_0(this.j8x_1, this.k8x_1, null);
            suspendResult = tmp_0.gz(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 2) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  Ripple$rememberUpdatedInstance$composable$slambda.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda(this.i8x_1, this.j8x_1, completion);
    i.k8x_1 = $this$LaunchedEffect;
    return i;
  };
  Ripple$rememberUpdatedInstance$composable$slambda.$metadata$ = classMeta('Ripple$rememberUpdatedInstance$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Ripple$rememberUpdatedInstance$composable$slambda_0($interactionSource, $instance, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda($interactionSource, $instance, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Ripple(bounded, radius, color) {
    this.u8u_1 = bounded;
    this.v8u_1 = radius;
    this.w8u_1 = color;
  }
  Ripple.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ripple))
      return false;
    if (!(this.u8u_1 === other.u8u_1))
      return false;
    if (!equals(this.v8u_1, other.v8u_1))
      return false;
    if (!equals(this.w8u_1, other.w8u_1))
      return false;
    return true;
  };
  Ripple.prototype.hashCode = function () {
    var result = this.u8u_1 | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.v8u_1) | 0;
    result = imul(31, result) + hashCode(this.w8u_1) | 0;
    return result;
  };
  Ripple.prototype.h7s = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(1363498422);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance$composable)116@5361L7,117@5389L174,124@5617L13,124@5590L41,126@5656L155,134@5821L535:Ripple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(1363498422, $changed, -1, 'androidx.compose.material.ripple.Ripple.rememberUpdatedInstance$composable (Ripple.kt:113)');
    }
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalRippleTheme();
    var tmp1_$get_current$$composable_gn3xww = $composer_0;
    var $composer_1 = tmp1_$get_current$$composable_gn3xww;
    sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var theme = tmp$ret$0;
    $composer_0.y1a(2051856795);
    sourceInformation($composer_0, '121@5525L14');
    var tmp;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp2__get_isSpecified__uq6bfr = this.w8u_1.i2().y3a_1;
    tmp$ret$1 = !equals(_Color___get_value__impl__1pls5m(tmp2__get_isSpecified__uq6bfr), _Color___get_value__impl__1pls5m(Companion_getInstance_1().q3a_1));
    if (tmp$ret$1) {
      tmp = this.w8u_1.i2().y3a_1;
    } else {
      tmp = theme.l8x($composer_0, 0);
    }
    var tmp1_group = tmp;
    $composer_0.d1b();
    var color = rememberUpdatedState$composable(new Color(tmp1_group), $composer_0, 0);
    var rippleAlpha = rememberUpdatedState$composable(theme.m8x($composer_0, 0), $composer_0, 0);
    var instance = this.t8u(interactionSource, this.u8u_1, this.v8u_1, color, rippleAlpha, $composer_0, 14 & $changed | 458752 & $changed << 12);
    LaunchedEffect$composable(instance, interactionSource, Ripple$rememberUpdatedInstance$composable$slambda_0(interactionSource, instance, null), $composer_0, 8 | 112 & $changed << 3);
    var tmp0_0 = instance;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_0;
  };
  Ripple.$metadata$ = classMeta('Ripple', [Indication]);
  function RippleIndicationInstance(bounded, rippleAlpha) {
    this.i8w_1 = new StateLayer(bounded, rippleAlpha);
  }
  RippleIndicationInstance.prototype.n8w = function (interaction, scope) {
    this.i8w_1.s8x(interaction, scope);
  };
  RippleIndicationInstance.prototype.j8w = function (_this__u8e3s4, radius, color) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.i8w_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp0_with.j8w(_this__u8e3s4, radius, color);
    tmp$ret$0 = Unit_getInstance();
  };
  RippleIndicationInstance.$metadata$ = classMeta('RippleIndicationInstance', [IndicationInstance]);
  function StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    this.b8y_1 = this$0;
    this.c8y_1 = $targetAlpha;
    this.d8y_1 = $incomingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  StateLayer$handleInteraction$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  StateLayer$handleInteraction$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  StateLayer$handleInteraction$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.b8y_1.p8x_1.p6z(this.c8y_1, this.d8y_1, null, null, this, 12, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 2) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  StateLayer$handleInteraction$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda(this.b8y_1, this.c8y_1, this.d8y_1, completion);
    i.e8y_1 = $this$launch;
    return i;
  };
  StateLayer$handleInteraction$slambda.$metadata$ = classMeta('StateLayer$handleInteraction$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function StateLayer$handleInteraction$slambda_0(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation) {
    this.n8y_1 = this$0;
    this.o8y_1 = $outgoingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  StateLayer$handleInteraction$slambda_1.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  StateLayer$handleInteraction$slambda_1.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  StateLayer$handleInteraction$slambda_1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.n8y_1.p8x_1.p6z(0.0, this.o8y_1, null, null, this, 12, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 2) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  StateLayer$handleInteraction$slambda_1.prototype.f1w = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda_1(this.n8y_1, this.o8y_1, completion);
    i.p8y_1 = $this$launch;
    return i;
  };
  StateLayer$handleInteraction$slambda_1.$metadata$ = classMeta('StateLayer$handleInteraction$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function StateLayer$handleInteraction$slambda_2(this$0, $outgoingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer(bounded, rippleAlpha) {
    this.n8x_1 = bounded;
    this.o8x_1 = rippleAlpha;
    var tmp = this;
    tmp.p8x_1 = Animatable$default(0.0, 0.0, 2, null);
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp_0.q8x_1 = tmp$ret$0;
    this.r8x_1 = null;
  }
  StateLayer.prototype.s8x = function (interaction, scope) {
    var tmp0_subject = interaction;
    if (tmp0_subject instanceof Enter) {
      this.q8x_1.a(interaction);
    } else {
      if (tmp0_subject instanceof Exit) {
        this.q8x_1.b4(interaction.r8k_1);
      } else {
        if (tmp0_subject instanceof Focus) {
          this.q8x_1.a(interaction);
        } else {
          if (tmp0_subject instanceof Unfocus) {
            this.q8x_1.b4(interaction.p8j_1);
          } else {
            if (tmp0_subject instanceof Start) {
              this.q8x_1.a(interaction);
            } else {
              if (tmp0_subject instanceof Stop) {
                this.q8x_1.b4(interaction.k8j_1);
              } else {
                if (tmp0_subject instanceof Cancel_0) {
                  this.q8x_1.b4(interaction.m8j_1);
                } else {
                  return Unit_getInstance();
                }
              }
            }
          }
        }
      }
    }
    var newInteraction = lastOrNull(this.q8x_1);
    if (!equals(this.r8x_1, newInteraction)) {
      if (!(newInteraction == null)) {
        var tmp1_subject = interaction;
        var tmp;
        if (tmp1_subject instanceof Enter) {
          tmp = this.o8x_1.i2().f8v_1;
        } else {
          if (tmp1_subject instanceof Focus) {
            tmp = this.o8x_1.i2().e8v_1;
          } else {
            if (tmp1_subject instanceof Start) {
              tmp = this.o8x_1.i2().d8v_1;
            } else {
              tmp = 0.0;
            }
          }
        }
        var targetAlpha = tmp;
        var incomingAnimationSpec = incomingStateLayerAnimationSpecFor(newInteraction);
        launch$default(scope, null, null, StateLayer$handleInteraction$slambda_0(this, targetAlpha, incomingAnimationSpec, null), 3, null);
      } else {
        var outgoingAnimationSpec = outgoingStateLayerAnimationSpecFor(this.r8x_1);
        launch$default(scope, null, null, StateLayer$handleInteraction$slambda_2(this, outgoingAnimationSpec, null), 3, null);
      }
      this.r8x_1 = newInteraction;
    }
  };
  StateLayer.prototype.j8w = function (_this__u8e3s4, radius, color) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    tmp$ret$0 = isNaN_0(_Dp___get_value__impl__geb1vb(radius));
    if (tmp$ret$0) {
      tmp = getRippleEndRadius(_this__u8e3s4, this.n8x_1, _this__u8e3s4.j3k());
    } else {
      tmp = _this__u8e3s4.o2k(radius);
    }
    var targetRadius = tmp;
    var alpha = this.p8x_1.i2();
    if (alpha > 0.0) {
      var modulatedColor = Color__copy$default_impl_ectz3s(color, alpha, 0.0, 0.0, 0.0, 14, null);
      if (this.n8x_1) {
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var tmp0_clipRect = _Size___get_width__impl__58y75t(_this__u8e3s4.j3k());
        var tmp1_clipRect = _Size___get_height__impl__a04p02(_this__u8e3s4.j3k());
        var tmp2_clipRect = Companion_getInstance_2().k38_1;
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        var tmp$ret$1;
        // Inline function 'kotlin.with' call
        var tmp0_with = _this__u8e3s4.z3k();
        // Inline function 'kotlin.contracts.contract' call
        var previousSize = tmp0_with.j3k();
        tmp0_with.u2w().a38();
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tmp0_with.w3k();
        tmp0__anonymous__q1qw7t.h38(0.0, 0.0, tmp0_clipRect, tmp1_clipRect, tmp2_clipRect);
        // Inline function 'androidx.compose.material.ripple.StateLayer.drawStateLayer.<anonymous>' call
        _this__u8e3s4.i3l(modulatedColor, targetRadius, null, 0.0, null, null, null, 124, null);
        tmp0_with.u2w().b38();
        tmp0_with.r3k(previousSize);
        tmp$ret$1 = Unit_getInstance();
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
      } else {
        _this__u8e3s4.i3l(modulatedColor, targetRadius, null, 0.0, null, null, null, 124, null);
      }
    }
  };
  StateLayer.$metadata$ = classMeta('StateLayer');
  function incomingStateLayerAnimationSpecFor(interaction) {
    init_properties_Ripple_kt_v7d712();
    var tmp0_subject = interaction;
    var tmp;
    if (tmp0_subject instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (tmp0_subject instanceof Focus) {
        tmp = TweenSpec_init_$Create$(45, 0, get_LinearEasing(), 2, null);
      } else {
        if (tmp0_subject instanceof Start) {
          tmp = TweenSpec_init_$Create$(45, 0, get_LinearEasing(), 2, null);
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  function outgoingStateLayerAnimationSpecFor(interaction) {
    init_properties_Ripple_kt_v7d712();
    var tmp0_subject = interaction;
    var tmp;
    if (tmp0_subject instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (tmp0_subject instanceof Focus) {
        tmp = get_DefaultTweenSpec();
      } else {
        if (tmp0_subject instanceof Start) {
          tmp = TweenSpec_init_$Create$(150, 0, get_LinearEasing(), 2, null);
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  var properties_initialized_Ripple_kt_3wqvym;
  function init_properties_Ripple_kt_v7d712() {
    if (properties_initialized_Ripple_kt_3wqvym) {
    } else {
      properties_initialized_Ripple_kt_3wqvym = true;
      DefaultTweenSpec = TweenSpec_init_$Create$(15, 0, get_LinearEasing(), 2, null);
    }
  }
  function get_BoundedRippleExtraRadius() {
    init_properties_RippleAnimation_kt_cwgkg0();
    return BoundedRippleExtraRadius;
  }
  var BoundedRippleExtraRadius;
  function RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation) {
    this.y8y_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  RippleAnimation$fadeIn$slambda$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  RippleAnimation$fadeIn$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RippleAnimation$fadeIn$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            var tmp_0 = tween$default(75, 0, get_LinearEasing(), 2, null);
            suspendResult = this.y8y_1.n8v_1.p6z(1.0, tmp_0, null, null, this, 12, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 2) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  RippleAnimation$fadeIn$slambda$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this.y8y_1, completion);
    i.z8y_1 = $this$launch;
    return i;
  };
  RippleAnimation$fadeIn$slambda$slambda.$metadata$ = classMeta('RippleAnimation$fadeIn$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function RippleAnimation$fadeIn$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation) {
    this.i8z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  RippleAnimation$fadeIn$slambda$slambda_1.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  RippleAnimation$fadeIn$slambda$slambda_1.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RippleAnimation$fadeIn$slambda$slambda_1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            var tmp_0 = tween$default(225, 0, get_FastOutSlowInEasing(), 2, null);
            suspendResult = this.i8z_1.o8v_1.p6z(1.0, tmp_0, null, null, this, 12, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 2) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  RippleAnimation$fadeIn$slambda$slambda_1.prototype.f1w = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this.i8z_1, completion);
    i.j8z_1 = $this$launch;
    return i;
  };
  RippleAnimation$fadeIn$slambda$slambda_1.$metadata$ = classMeta('RippleAnimation$fadeIn$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function RippleAnimation$fadeIn$slambda$slambda_2(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation) {
    this.s8z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  RippleAnimation$fadeIn$slambda$slambda_3.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  RippleAnimation$fadeIn$slambda$slambda_3.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RippleAnimation$fadeIn$slambda$slambda_3.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            var tmp_0 = tween$default(225, 0, get_LinearEasing(), 2, null);
            suspendResult = this.s8z_1.p8v_1.p6z(1.0, tmp_0, null, null, this, 12, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 2) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  RippleAnimation$fadeIn$slambda$slambda_3.prototype.f1w = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this.s8z_1, completion);
    i.t8z_1 = $this$launch;
    return i;
  };
  RippleAnimation$fadeIn$slambda$slambda_3.$metadata$ = classMeta('RippleAnimation$fadeIn$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function RippleAnimation$fadeIn$slambda$slambda_4(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation) {
    this.c90_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  RippleAnimation$fadeOut$slambda$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  RippleAnimation$fadeOut$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RippleAnimation$fadeOut$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            var tmp_0 = tween$default(150, 0, get_LinearEasing(), 2, null);
            suspendResult = this.c90_1.n8v_1.p6z(0.0, tmp_0, null, null, this, 12, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 2) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  RippleAnimation$fadeOut$slambda$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this.c90_1, completion);
    i.d90_1 = $this$launch;
    return i;
  };
  RippleAnimation$fadeOut$slambda$slambda.$metadata$ = classMeta('RippleAnimation$fadeOut$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function RippleAnimation$fadeOut$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _set_finishedFadingIn__33hlo9($this, _set____db54di) {
    var tmp0_setValue = finishedFadingIn$factory();
    return $this.r8v_1.p11(_set____db54di);
  }
  function _get_finishedFadingIn__pzmnej($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = finishedFadingIn$factory_0();
    tmp$ret$0 = $this.r8v_1.i2();
    return tmp$ret$0;
  }
  function _set_finishRequested__u52oy2($this, _set____db54di) {
    var tmp0_setValue = finishRequested$factory();
    return $this.s8v_1.p11(_set____db54di);
  }
  function _get_finishRequested__usb5ii($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = finishRequested$factory_0();
    tmp$ret$0 = $this.s8v_1.i2();
    return tmp$ret$0;
  }
  function fadeIn($this, $cont) {
    var tmp = new $fadeInCOROUTINE$1($this, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function fadeOut($this, $cont) {
    var tmp = new $fadeOutCOROUTINE$2($this, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function RippleAnimation$fadeIn$slambda(this$0, resultContinuation) {
    this.e91_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  RippleAnimation$fadeIn$slambda.prototype.g91 = function ($this$coroutineScope, $cont) {
    var tmp = this.f1w($this$coroutineScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  RippleAnimation$fadeIn$slambda.prototype.jg = function (p1, $cont) {
    return this.g91((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RippleAnimation$fadeIn$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          launch$default(this.f91_1, null, null, RippleAnimation$fadeIn$slambda$slambda_0(this.e91_1, null), 3, null);
          launch$default(this.f91_1, null, null, RippleAnimation$fadeIn$slambda$slambda_2(this.e91_1, null), 3, null);
          return launch$default(this.f91_1, null, null, RippleAnimation$fadeIn$slambda$slambda_4(this.e91_1, null), 3, null);
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  RippleAnimation$fadeIn$slambda.prototype.f1w = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeIn$slambda(this.e91_1, completion);
    i.f91_1 = $this$coroutineScope;
    return i;
  };
  RippleAnimation$fadeIn$slambda.$metadata$ = classMeta('RippleAnimation$fadeIn$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function RippleAnimation$fadeIn$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.g91($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda(this$0, resultContinuation) {
    this.p91_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  RippleAnimation$fadeOut$slambda.prototype.g91 = function ($this$coroutineScope, $cont) {
    var tmp = this.f1w($this$coroutineScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  RippleAnimation$fadeOut$slambda.prototype.jg = function (p1, $cont) {
    return this.g91((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RippleAnimation$fadeOut$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          return launch$default(this.q91_1, null, null, RippleAnimation$fadeOut$slambda$slambda_0(this.p91_1, null), 3, null);
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  RippleAnimation$fadeOut$slambda.prototype.f1w = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeOut$slambda(this.p91_1, completion);
    i.q91_1 = $this$coroutineScope;
    return i;
  };
  RippleAnimation$fadeOut$slambda.$metadata$ = classMeta('RippleAnimation$fadeOut$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function RippleAnimation$fadeOut$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.g91($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $animateCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z91_1 = _this__u8e3s4;
  }
  $animateCOROUTINE$0.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            this.zf_1 = 1;
            suspendResult = fadeIn(this.z91_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            _set_finishedFadingIn__33hlo9(this.z91_1, true);
            this.zf_1 = 2;
            suspendResult = this.z91_1.q8v_1.an(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.zf_1 = 3;
            suspendResult = fadeOut(this.z91_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 4) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  $animateCOROUTINE$0.$metadata$ = classMeta('$animateCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $fadeInCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m90_1 = _this__u8e3s4;
  }
  $fadeInCOROUTINE$1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeIn$slambda_0(this.m90_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 2) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  $fadeInCOROUTINE$1.$metadata$ = classMeta('$fadeInCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $fadeOutCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v90_1 = _this__u8e3s4;
  }
  $fadeOutCOROUTINE$2.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeOut$slambda_0(this.v90_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 2) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  $fadeOutCOROUTINE$2.$metadata$ = classMeta('$fadeOutCOROUTINE$2', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function RippleAnimation(origin, radius, bounded) {
    this.h8v_1 = origin;
    this.i8v_1 = radius;
    this.j8v_1 = bounded;
    this.k8v_1 = null;
    this.l8v_1 = null;
    this.m8v_1 = null;
    var tmp = this;
    tmp.n8v_1 = Animatable$default(0.0, 0.0, 2, null);
    var tmp_0 = this;
    tmp_0.o8v_1 = Animatable$default(0.0, 0.0, 2, null);
    var tmp_1 = this;
    tmp_1.p8v_1 = Animatable$default(0.0, 0.0, 2, null);
    this.q8v_1 = CompletableDeferred(null);
    var tmp_2 = this;
    tmp_2.r8v_1 = mutableStateOf$default(false, null, 2, null);
    var tmp_3 = this;
    tmp_3.s8v_1 = mutableStateOf$default(false, null, 2, null);
  }
  RippleAnimation.prototype.h8w = function ($cont) {
    var tmp = new $animateCOROUTINE$0(this, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  RippleAnimation.prototype.l8w = function () {
    _set_finishRequested__u52oy2(this, true);
    this.q8v_1.zm(Unit_getInstance());
  };
  RippleAnimation.prototype.t8v = function (_this__u8e3s4, color) {
    if (this.k8v_1 == null) {
      this.k8v_1 = getRippleStartRadius(_this__u8e3s4.j3k());
    }
    if (this.l8v_1 == null) {
      var tmp = this;
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var tmp0__get_isUnspecified__bfzg5a = this.i8v_1;
      tmp$ret$0 = isNaN_0(_Dp___get_value__impl__geb1vb(tmp0__get_isUnspecified__bfzg5a));
      if (tmp$ret$0) {
        tmp_0 = getRippleEndRadius(_this__u8e3s4, this.j8v_1, _this__u8e3s4.j3k());
      } else {
        tmp_0 = _this__u8e3s4.o2k(this.i8v_1);
      }
      tmp.l8v_1 = tmp_0;
    }
    var tmp_1 = this.h8v_1;
    if ((tmp_1 == null ? null : new Offset(tmp_1)) == null) {
      this.h8v_1 = _this__u8e3s4.q3l();
    }
    var tmp_2 = this.m8v_1;
    if ((tmp_2 == null ? null : new Offset(tmp_2)) == null) {
      this.m8v_1 = Offset_0(_Size___get_width__impl__58y75t(_this__u8e3s4.j3k()) / 2.0, _Size___get_height__impl__a04p02(_this__u8e3s4.j3k()) / 2.0);
    }
    var tmp_3;
    if (_get_finishRequested__usb5ii(this) ? !_get_finishedFadingIn__pzmnej(this) : false) {
      tmp_3 = 1.0;
    } else {
      tmp_3 = this.n8v_1.i2();
    }
    var alpha = tmp_3;
    var radius = lerp(ensureNotNull(this.k8v_1), ensureNotNull(this.l8v_1), this.o8v_1.i2());
    var tmp_4 = this.h8v_1;
    var tmp_5 = _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_4 == null ? null : new Offset(tmp_4)).s2i_1);
    var tmp_6 = this.m8v_1;
    var tmp_7 = lerp(tmp_5, _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_6 == null ? null : new Offset(tmp_6)).s2i_1), this.p8v_1.i2());
    var tmp_8 = this.h8v_1;
    var tmp_9 = _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_8 == null ? null : new Offset(tmp_8)).s2i_1);
    var tmp_10 = this.m8v_1;
    var centerOffset = Offset_0(tmp_7, lerp(tmp_9, _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_10 == null ? null : new Offset(tmp_10)).s2i_1), this.p8v_1.i2()));
    var tmp_11 = _Color___get_alpha__impl__wcfyv1(color) * alpha;
    var modulatedColor = Color__copy$default_impl_ectz3s(color, tmp_11, 0.0, 0.0, 0.0, 14, null);
    if (this.j8v_1) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      var tmp1_clipRect = _Size___get_width__impl__58y75t(_this__u8e3s4.j3k());
      var tmp2_clipRect = _Size___get_height__impl__a04p02(_this__u8e3s4.j3k());
      var tmp3_clipRect = Companion_getInstance_2().k38_1;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = _this__u8e3s4.z3k();
      // Inline function 'kotlin.contracts.contract' call
      var previousSize = tmp0_with.j3k();
      tmp0_with.u2w().a38();
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
      var tmp0__anonymous__q1qw7t = tmp0_with.w3k();
      tmp0__anonymous__q1qw7t.h38(0.0, 0.0, tmp1_clipRect, tmp2_clipRect, tmp3_clipRect);
      // Inline function 'androidx.compose.material.ripple.RippleAnimation.draw.<anonymous>' call
      _this__u8e3s4.i3l(modulatedColor, radius, centerOffset, 0.0, null, null, null, 120, null);
      tmp0_with.u2w().b38();
      tmp0_with.r3k(previousSize);
      tmp$ret$1 = Unit_getInstance();
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
    } else {
      _this__u8e3s4.i3l(modulatedColor, radius, centerOffset, 0.0, null, null, null, 120, null);
    }
  };
  RippleAnimation.$metadata$ = classMeta('RippleAnimation');
  function getRippleEndRadius(_this__u8e3s4, bounded, size) {
    init_properties_RippleAnimation_kt_cwgkg0();
    var radiusCoveringBounds = Offset__getDistance_impl_pclvxn(Offset_0(_Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size))) / 2.0;
    var tmp;
    if (bounded) {
      tmp = radiusCoveringBounds + _this__u8e3s4.o2k(get_BoundedRippleExtraRadius());
    } else {
      tmp = radiusCoveringBounds;
    }
    return tmp;
  }
  function getRippleStartRadius(size) {
    init_properties_RippleAnimation_kt_cwgkg0();
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = _Size___get_width__impl__58y75t(size);
    var tmp1_max = _Size___get_height__impl__a04p02(size);
    tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
    return tmp$ret$0 * 0.3;
  }
  function finishedFadingIn$factory() {
    return getPropertyCallableRef('finishedFadingIn', 1, KMutableProperty1, function (receiver) {
      return _get_finishedFadingIn__pzmnej(receiver);
    }, function (receiver, value) {
      return _set_finishedFadingIn__33hlo9(receiver, value);
    });
  }
  function finishedFadingIn$factory_0() {
    return getPropertyCallableRef('finishedFadingIn', 1, KMutableProperty1, function (receiver) {
      return _get_finishedFadingIn__pzmnej(receiver);
    }, function (receiver, value) {
      return _set_finishedFadingIn__33hlo9(receiver, value);
    });
  }
  function finishRequested$factory() {
    return getPropertyCallableRef('finishRequested', 1, KMutableProperty1, function (receiver) {
      return _get_finishRequested__usb5ii(receiver);
    }, function (receiver, value) {
      return _set_finishRequested__u52oy2(receiver, value);
    });
  }
  function finishRequested$factory_0() {
    return getPropertyCallableRef('finishRequested', 1, KMutableProperty1, function (receiver) {
      return _get_finishRequested__usb5ii(receiver);
    }, function (receiver, value) {
      return _set_finishRequested__u52oy2(receiver, value);
    });
  }
  var properties_initialized_RippleAnimation_kt_4ja21o;
  function init_properties_RippleAnimation_kt_cwgkg0() {
    if (properties_initialized_RippleAnimation_kt_4ja21o) {
    } else {
      properties_initialized_RippleAnimation_kt_4ja21o = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(10);
      BoundedRippleExtraRadius = tmp$ret$0;
    }
  }
  function get_LocalRippleTheme() {
    init_properties_RippleTheme_kt_68e25h();
    return LocalRippleTheme;
  }
  var LocalRippleTheme;
  function get_LightThemeHighContrastRippleAlpha() {
    init_properties_RippleTheme_kt_68e25h();
    return LightThemeHighContrastRippleAlpha;
  }
  var LightThemeHighContrastRippleAlpha;
  function get_LightThemeLowContrastRippleAlpha() {
    init_properties_RippleTheme_kt_68e25h();
    return LightThemeLowContrastRippleAlpha;
  }
  var LightThemeLowContrastRippleAlpha;
  function get_DarkThemeRippleAlpha() {
    init_properties_RippleTheme_kt_68e25h();
    return DarkThemeRippleAlpha;
  }
  var DarkThemeRippleAlpha;
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.a92 = function (contentColor, lightTheme) {
    var contentLuminance = luminance(contentColor);
    var tmp;
    if (!lightTheme ? contentLuminance < 0.5 : false) {
      tmp = Companion_getInstance_1().i3a_1;
    } else {
      tmp = contentColor;
    }
    return tmp;
  };
  Companion.prototype.b92 = function (contentColor, lightTheme) {
    var tmp;
    if (lightTheme) {
      var tmp_0;
      if (luminance(contentColor) > 0.5) {
        tmp_0 = get_LightThemeHighContrastRippleAlpha();
      } else {
        tmp_0 = get_LightThemeLowContrastRippleAlpha();
      }
      tmp = tmp_0;
    } else {
      tmp = get_DarkThemeRippleAlpha();
    }
    return tmp;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_3() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function RippleTheme() {
  }
  RippleTheme.$metadata$ = interfaceMeta('RippleTheme');
  function DebugRippleTheme() {
    DebugRippleTheme_instance = this;
  }
  DebugRippleTheme.prototype.l8x = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(1423573606);
    sourceInformation($composer_0, 'C(defaultColor$composable):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(1423573606, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.defaultColor$composable (RippleTheme.kt:202)');
    }
    var tmp0 = Companion_getInstance_3().a92(Companion_getInstance_1().e3a_1, true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  };
  DebugRippleTheme.prototype.m8x = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(2071239027);
    sourceInformation($composer_0, 'C(rippleAlpha$composable):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(2071239027, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.rippleAlpha$composable (RippleTheme.kt:205)');
    }
    var tmp0 = Companion_getInstance_3().b92(Companion_getInstance_1().e3a_1, true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  };
  DebugRippleTheme.$metadata$ = objectMeta('DebugRippleTheme', [RippleTheme]);
  var DebugRippleTheme_instance;
  function DebugRippleTheme_getInstance() {
    if (DebugRippleTheme_instance == null)
      new DebugRippleTheme();
    return DebugRippleTheme_instance;
  }
  function RippleAlpha(draggedAlpha, focusedAlpha, hoveredAlpha, pressedAlpha) {
    this.d8v_1 = draggedAlpha;
    this.e8v_1 = focusedAlpha;
    this.f8v_1 = hoveredAlpha;
    this.g8v_1 = pressedAlpha;
  }
  RippleAlpha.prototype.c92 = function () {
    return this.g8v_1;
  };
  RippleAlpha.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleAlpha))
      return false;
    if (!(this.d8v_1 === other.d8v_1))
      return false;
    if (!(this.e8v_1 === other.e8v_1))
      return false;
    if (!(this.f8v_1 === other.f8v_1))
      return false;
    if (!(this.g8v_1 === other.g8v_1))
      return false;
    return true;
  };
  RippleAlpha.prototype.hashCode = function () {
    var result = getNumberHashCode(this.d8v_1);
    result = imul(31, result) + getNumberHashCode(this.e8v_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.f8v_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.g8v_1) | 0;
    return result;
  };
  RippleAlpha.prototype.toString = function () {
    return 'RippleAlpha(draggedAlpha=' + this.d8v_1 + ', focusedAlpha=' + this.e8v_1 + ', ' + ('hoveredAlpha=' + this.f8v_1 + ', pressedAlpha=' + this.g8v_1 + ')');
  };
  RippleAlpha.$metadata$ = classMeta('RippleAlpha');
  function LocalRippleTheme$lambda() {
    init_properties_RippleTheme_kt_68e25h();
    return DebugRippleTheme_getInstance();
  }
  var properties_initialized_RippleTheme_kt_m09bsn;
  function init_properties_RippleTheme_kt_68e25h() {
    if (properties_initialized_RippleTheme_kt_m09bsn) {
    } else {
      properties_initialized_RippleTheme_kt_m09bsn = true;
      LocalRippleTheme = staticCompositionLocalOf(LocalRippleTheme$lambda);
      LightThemeHighContrastRippleAlpha = new RippleAlpha(0.16, 0.24, 0.08, 0.24);
      LightThemeLowContrastRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.12);
      DarkThemeRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.1);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalRippleTheme;
  _.$_$.b = RippleTheme;
  _.$_$.c = rememberRipple$composable;
  _.$_$.d = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-material-ripple.js.map
