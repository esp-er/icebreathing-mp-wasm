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
  var illegalDecoyCallException = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var Unit_getInstance = kotlin_kotlin.$_$.b3;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.g2;
  var THROW_CCE = kotlin_kotlin.$_$.kc;
  var isObject = kotlin_kotlin.$_$.j9;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var classMeta = kotlin_kotlin.$_$.q8;
  var Color__copy$default_impl_ectz3s = kotlin_androidx_compose_ui_ui_graphics.$_$.j3;
  var CoroutineImpl = kotlin_kotlin.$_$.a8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var isInterface = kotlin_kotlin.$_$.i9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k7;
  var mutableStateMapOf = kotlin_androidx_compose_runtime_runtime.$_$.j1;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var RememberObserver = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var SuspendFunction1 = kotlin_kotlin.$_$.c8;
  var Dp = kotlin_androidx_compose_ui_ui_unit.$_$.v;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_unit.$_$.m3;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_graphics.$_$.r3;
  var Color = kotlin_androidx_compose_ui_ui_graphics.$_$.k;
  var rememberUpdatedState$composable = kotlin_androidx_compose_runtime_runtime.$_$.o1;
  var Interaction = kotlin_androidx_compose_foundation_foundation.$_$.m;
  var Cancel = kotlin_androidx_compose_foundation_foundation.$_$.o;
  var Release = kotlin_androidx_compose_foundation_foundation.$_$.q;
  var Press = kotlin_androidx_compose_foundation_foundation.$_$.p;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var equals = kotlin_kotlin.$_$.t8;
  var Dp__hashCode_impl_sxkrra = kotlin_androidx_compose_ui_ui_unit.$_$.k2;
  var hashCode = kotlin_kotlin.$_$.b9;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.q1;
  var _Color___get_value__impl__1pls5m = kotlin_androidx_compose_ui_ui_graphics.$_$.v2;
  var LaunchedEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.w;
  var Indication = kotlin_androidx_compose_foundation_foundation.$_$.z;
  var IndicationInstance = kotlin_androidx_compose_foundation_foundation.$_$.y;
  var Animatable$default = kotlin_androidx_compose_animation_animation_core.$_$.s;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var Cancel_0 = kotlin_androidx_compose_foundation_foundation.$_$.f;
  var Stop = kotlin_androidx_compose_foundation_foundation.$_$.h;
  var Start = kotlin_androidx_compose_foundation_foundation.$_$.g;
  var Unfocus = kotlin_androidx_compose_foundation_foundation.$_$.j;
  var Focus = kotlin_androidx_compose_foundation_foundation.$_$.i;
  var Exit = kotlin_androidx_compose_foundation_foundation.$_$.l;
  var Enter = kotlin_androidx_compose_foundation_foundation.$_$.k;
  var lastOrNull = kotlin_kotlin.$_$.w5;
  var _Dp___get_value__impl__geb1vb = kotlin_androidx_compose_ui_ui_unit.$_$.l2;
  var isNaN_0 = kotlin_kotlin.$_$.yc;
  var _Size___get_width__impl__58y75t = kotlin_androidx_compose_ui_ui_geometry.$_$.k1;
  var _Size___get_height__impl__a04p02 = kotlin_androidx_compose_ui_ui_geometry.$_$.h1;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_graphics.$_$.q3;
  var get_LinearEasing = kotlin_androidx_compose_animation_animation_core.$_$.f;
  var TweenSpec_init_$Create$ = kotlin_androidx_compose_animation_animation_core.$_$.z;
  var tween$default = kotlin_androidx_compose_animation_animation_core.$_$.w;
  var get_FastOutSlowInEasing = kotlin_androidx_compose_animation_animation_core.$_$.e;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var mutableStateOf$default = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$_$.e;
  var Offset_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.uc;
  var lerp = kotlin_androidx_compose_ui_ui_util.$_$.a;
  var _Offset___get_x__impl__xvi35n = kotlin_androidx_compose_ui_ui_geometry.$_$.e1;
  var _Offset___get_y__impl__8bzhra = kotlin_androidx_compose_ui_ui_geometry.$_$.f1;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_androidx_compose_ui_ui_graphics.$_$.o2;
  var Offset__getDistance_impl_pclvxn = kotlin_androidx_compose_ui_ui_geometry.$_$.z;
  var KMutableProperty1 = kotlin_kotlin.$_$.ra;
  var getPropertyCallableRef = kotlin_kotlin.$_$.z8;
  var _Dp___init__impl__ms3zkb = kotlin_androidx_compose_ui_ui_unit.$_$.i2;
  var luminance = kotlin_androidx_compose_ui_ui_graphics.$_$.f1;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var interfaceMeta = kotlin_kotlin.$_$.d9;
  var getNumberHashCode = kotlin_kotlin.$_$.x8;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.t1;
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
  CommonRipple.prototype.rememberUpdatedRippleInstance_565cg_k$ = function (interactionSource, bounded, radius, color, rippleAlpha) {
    illegalDecoyCallException('rememberUpdatedRippleInstance');
  };
  CommonRipple.prototype.rememberUpdatedRippleInstance$composable_8600sf_k$ = function (interactionSource, bounded, radius, color, rippleAlpha, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1340080932);
    sourceInformation($composer_0, 'C(rememberUpdatedRippleInstance$composable)P(2!1,3:c#ui.unit.Dp)53@1880L125:CommonRipple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(-1340080932, $changed, -1, 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance$composable (CommonRipple.kt:46)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var tmp1_remember$composable = 14 & $changed | 112 & $changed >> 12;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!($composer_1.changed_ga7h3f_k$(interactionSource) | $composer_1.changed_ga7h3f_k$(this));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance().Empty_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance$composable.<anonymous>' call
      tmp$ret$0 = new CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha);
      var value = tmp$ret$0;
      tmp1_cache.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.endReplaceableGroup_er37p7_k$();
    tmp$ret$4 = tmp0;
    var tmp0_0 = tmp$ret$4;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  };
  CommonRipple.$metadata$ = classMeta('CommonRipple', undefined, undefined, undefined, undefined, Ripple.prototype);
  function _get_bounded__6dedw($this) {
    return $this.bounded_1;
  }
  function _get_radius__h7nyvb($this) {
    return $this.radius_1;
  }
  function _get_color__iw9cfm($this) {
    return $this.color_1;
  }
  function _get_rippleAlpha__fyluwt($this) {
    return $this.rippleAlpha_1;
  }
  function _get_ripples__fsflm6($this) {
    return $this.ripples_1;
  }
  function drawRipples(_this__u8e3s4, $this, color) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = $this.ripples_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.drawRipples.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.get_value_j01efc_k$();
      var ripple = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var alpha = $this.rippleAlpha_1.get_value_j01efc_k$().pressedAlpha_1;
      var tmp;
      if (!(alpha === 0.0)) {
        ripple.draw_opvrg2_k$(_this__u8e3s4, Color__copy$default_impl_ectz3s(color, alpha, 0.0, 0.0, 0.0, 14, null));
        tmp = Unit_getInstance();
      }
      tmp$ret$2 = tmp;
    }
  }
  function CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation) {
    this.$rippleAnimation_1 = $rippleAnimation;
    this.this$0__1 = this$0;
    this.$interaction_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  CommonRippleIndicationInstance$addRipple$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  CommonRippleIndicationInstance$addRipple$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  CommonRippleIndicationInstance$addRipple$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 5;
            this.state_1 = 1;
            continue $sm;
          case 1:
            this.exceptionState_1 = 4;
            this.state_1 = 2;
            suspendResult = this.$rippleAnimation_1.animate_ibjroy_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$00__1 = suspendResult;
            this.exceptionState_1 = 5;
            this.state_1 = 3;
            continue $sm;
          case 3:
            this.this$0__1.ripples_1.remove_8hbkc0_k$(this.$interaction_1);
            ;
            return Unit_getInstance();
          case 4:
            this.exceptionState_1 = 5;
            var t = this.exception_1;
            this.this$0__1.ripples_1.remove_8hbkc0_k$(this.$interaction_1);
            ;
            throw t;
          case 5:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 5) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  CommonRippleIndicationInstance$addRipple$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda(this.$rippleAnimation_1, this.this$0__1, this.$interaction_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  CommonRippleIndicationInstance$addRipple$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  CommonRippleIndicationInstance$addRipple$slambda.$metadata$ = classMeta('CommonRippleIndicationInstance$addRipple$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function CommonRippleIndicationInstance$addRipple$slambda_0($rippleAnimation, this$0, $interaction, resultContinuation) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha) {
    RippleIndicationInstance.call(this, bounded, rippleAlpha);
    this.bounded_1 = bounded;
    this.radius_1 = radius;
    this.color_1 = color;
    this.rippleAlpha_1 = rippleAlpha;
    this.ripples_1 = mutableStateMapOf();
  }
  CommonRippleIndicationInstance.prototype.drawIndication_4sht7n_k$ = function (_this__u8e3s4) {
    var color = this.color_1.get_value_j01efc_k$().value_1;
    _this__u8e3s4.drawContent_m0d3yc_k$();
    this.drawStateLayer_mkuc2c_k$(_this__u8e3s4, this.radius_1, color);
    drawRipples(_this__u8e3s4, this, color);
  };
  CommonRippleIndicationInstance.prototype.addRipple_csj8jr_k$ = function (interaction, scope) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.ripples_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.addRipple.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.get_value_j01efc_k$();
      var ripple = tmp$ret$1;
      ripple.finish_mgihxe_k$();
    }
    var origin = this.bounded_1 ? interaction.pressPosition_1 : null;
    var rippleAnimation = new RippleAnimation(origin, this.radius_1, this.bounded_1);
    // Inline function 'kotlin.collections.set' call
    var tmp1_set = this.ripples_1;
    tmp1_set.put_3mhbri_k$(interaction, rippleAnimation);
    launch$default(scope, null, null, CommonRippleIndicationInstance$addRipple$slambda_0(rippleAnimation, this, interaction, null), 3, null);
  };
  CommonRippleIndicationInstance.prototype.removeRipple_qhgeen_k$ = function (interaction) {
    var tmp0_safe_receiver = this.ripples_1.get_1mhr4y_k$(interaction);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.finish_mgihxe_k$();
    }
  };
  CommonRippleIndicationInstance.prototype.onRemembered_6899sq_k$ = function () {
  };
  CommonRippleIndicationInstance.prototype.onForgotten_pcab12_k$ = function () {
    this.ripples_1.clear_j9y8zo_k$();
  };
  CommonRippleIndicationInstance.prototype.onAbandoned_1hgzvg_k$ = function () {
    this.ripples_1.clear_j9y8zo_k$();
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
    $composer_0.startReplaceableGroup_rp6air_k$(821185160);
    sourceInformation($composer_0, 'C(rememberRipple$composable)P(!1,2:c#ui.unit.Dp,1:c#ui.graphics.Color)81@3890L27,82@3929L85:Ripple.kt#vhb33q');
    if (!(($default & 1) === 0)) {
      bounded_0._v = true;
    }
    if (!(($default & 2) === 0)) {
      radius_0._v = new Dp(Companion_getInstance_0().Unspecified_1);
    }
    if (!(($default & 4) === 0))
      color_0 = Companion_getInstance_1().Unspecified_1;
    if (isTraceInProgress()) {
      traceEventStart(821185160, $changed, -1, 'androidx.compose.material.ripple.rememberRipple$composable (Ripple.kt:76)');
    }
    var colorState = rememberUpdatedState$composable(new Color(color_0), $composer_0, 14 & $changed >> 6);
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = bounded_0._v;
    var tmp1_remember$composable = radius_0._v.value_1;
    var tmp2_remember$composable = $composer_0;
    var tmp3_remember$composable = 14 & $changed | 112 & $changed;
    var $composer_1 = tmp2_remember$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_1, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = !!($composer_1.changed_ga7h3f_k$(tmp0_remember$composable) | $composer_1.changed_ga7h3f_k$(new Dp(tmp1_remember$composable)));
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance().Empty_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.material.ripple.rememberRipple$composable.<anonymous>' call
      tmp$ret$0 = new CommonRipple(bounded_0._v, radius_0._v.value_1, colorState);
      var value = tmp$ret$0;
      tmp1_cache.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$1 = tmp;
    tmp$ret$2 = tmp$ret$1;
    var tmp_0 = tmp$ret$2;
    tmp$ret$3 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    var tmp0 = tmp$ret$3;
    $composer_1.endReplaceableGroup_er37p7_k$();
    tmp$ret$4 = tmp0;
    var tmp0_0 = tmp$ret$4;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function Ripple$rememberUpdatedInstance$composable$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation) {
    this.$instance_1 = $instance;
    this.$this_LaunchedEffect_1 = $this_LaunchedEffect;
    CoroutineImpl.call(this, resultContinuation);
  }
  Ripple$rememberUpdatedInstance$composable$slambda$slambda.prototype.invoke_ry6yte_k$ = function (interaction, $cont) {
    var tmp = this.create_xj5a0d_k$(interaction, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  Ripple$rememberUpdatedInstance$composable$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ry6yte_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  Ripple$rememberUpdatedInstance$composable$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Press) {
            this.$instance_1.addRipple_csj8jr_k$(this.interaction_1, this.$this_LaunchedEffect_1);
          } else {
            if (tmp0_subject instanceof Release) {
              this.$instance_1.removeRipple_qhgeen_k$(this.interaction_1.press_1);
            } else {
              if (tmp0_subject instanceof Cancel) {
                this.$instance_1.removeRipple_qhgeen_k$(this.interaction_1.press_1);
              } else {
                this.$instance_1.updateStateLayer_5gbnwu_k$(this.interaction_1, this.$this_LaunchedEffect_1);
              }
            }
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  Ripple$rememberUpdatedInstance$composable$slambda$slambda.prototype.create_xj5a0d_k$ = function (interaction, completion) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda$slambda(this.$instance_1, this.$this_LaunchedEffect_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  Ripple$rememberUpdatedInstance$composable$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_xj5a0d_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  Ripple$rememberUpdatedInstance$composable$slambda$slambda.$metadata$ = classMeta('Ripple$rememberUpdatedInstance$composable$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Ripple$rememberUpdatedInstance$composable$slambda$slambda_0($instance, $this_LaunchedEffect, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation);
    var l = function (interaction, $cont) {
      return i.invoke_ry6yte_k$(interaction, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _get_bounded__6dedw_0($this) {
    return $this.bounded_1;
  }
  function _get_radius__h7nyvb_0($this) {
    return $this.radius_1;
  }
  function _get_color__iw9cfm_0($this) {
    return $this.color_1;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function Ripple$rememberUpdatedInstance$composable$slambda($interactionSource, $instance, resultContinuation) {
    this.$interactionSource_1 = $interactionSource;
    this.$instance_1 = $instance;
    CoroutineImpl.call(this, resultContinuation);
  }
  Ripple$rememberUpdatedInstance$composable$slambda.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  Ripple$rememberUpdatedInstance$composable$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Ripple$rememberUpdatedInstance$composable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            var tmp_0 = this.$interactionSource_1.get_interactions_ql02qy_k$();
            var tmp_1 = Ripple$rememberUpdatedInstance$composable$slambda$slambda_0(this.$instance_1, this.$this$LaunchedEffect_1, null);
            suspendResult = tmp_0.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 2) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  Ripple$rememberUpdatedInstance$composable$slambda.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda(this.$interactionSource_1, this.$instance_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  Ripple$rememberUpdatedInstance$composable$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  Ripple$rememberUpdatedInstance$composable$slambda.$metadata$ = classMeta('Ripple$rememberUpdatedInstance$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Ripple$rememberUpdatedInstance$composable$slambda_0($interactionSource, $instance, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$composable$slambda($interactionSource, $instance, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Ripple(bounded, radius, color) {
    this.bounded_1 = bounded;
    this.radius_1 = radius;
    this.color_1 = color;
  }
  Ripple.prototype.rememberUpdatedInstance_1mtpmt_k$ = function (interactionSource) {
    illegalDecoyCallException('rememberUpdatedInstance');
  };
  Ripple.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ripple))
      return false;
    if (!(this.bounded_1 === other.bounded_1))
      return false;
    if (!equals(this.radius_1, other.radius_1))
      return false;
    if (!equals(this.color_1, other.color_1))
      return false;
    return true;
  };
  Ripple.prototype.hashCode = function () {
    var result = this.bounded_1 | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.radius_1) | 0;
    result = imul(31, result) + hashCode(this.color_1) | 0;
    return result;
  };
  Ripple.prototype.rememberUpdatedInstance$composable_3l23r4_k$ = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1363498422);
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
    var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    tmp$ret$0 = tmp0;
    var theme = tmp$ret$0;
    $composer_0.startReplaceableGroup_rp6air_k$(2051856795);
    sourceInformation($composer_0, '121@5525L14');
    var tmp;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var tmp2__get_isSpecified__uq6bfr = this.color_1.get_value_j01efc_k$().value_1;
    tmp$ret$1 = !equals(_Color___get_value__impl__1pls5m(tmp2__get_isSpecified__uq6bfr), _Color___get_value__impl__1pls5m(Companion_getInstance_1().Unspecified_1));
    if (tmp$ret$1) {
      tmp = this.color_1.get_value_j01efc_k$().value_1;
    } else {
      tmp = theme.defaultColor$composable_3q39e6_k$($composer_0, 0);
    }
    var tmp1_group = tmp;
    $composer_0.endReplaceableGroup_er37p7_k$();
    var color = rememberUpdatedState$composable(new Color(tmp1_group), $composer_0, 0);
    var rippleAlpha = rememberUpdatedState$composable(theme.rippleAlpha$composable_ezucwt_k$($composer_0, 0), $composer_0, 0);
    var instance = this.rememberUpdatedRippleInstance$composable_8600sf_k$(interactionSource, this.bounded_1, this.radius_1, color, rippleAlpha, $composer_0, 14 & $changed | 458752 & $changed << 12);
    LaunchedEffect$composable(instance, interactionSource, Ripple$rememberUpdatedInstance$composable$slambda_0(interactionSource, instance, null), $composer_0, 8 | 112 & $changed << 3);
    var tmp0_0 = instance;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  };
  Ripple.$metadata$ = classMeta('Ripple', [Indication]);
  function _get_stateLayer__f34d6d($this) {
    return $this.stateLayer_1;
  }
  function RippleIndicationInstance(bounded, rippleAlpha) {
    this.stateLayer_1 = new StateLayer(bounded, rippleAlpha);
  }
  RippleIndicationInstance.prototype.updateStateLayer_5gbnwu_k$ = function (interaction, scope) {
    this.stateLayer_1.handleInteraction_x9lasv_k$(interaction, scope);
  };
  RippleIndicationInstance.prototype.drawStateLayer_mkuc2c_k$ = function (_this__u8e3s4, radius, color) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.stateLayer_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp0_with.drawStateLayer_mkuc2c_k$(_this__u8e3s4, radius, color);
    tmp$ret$0 = Unit_getInstance();
  };
  RippleIndicationInstance.$metadata$ = classMeta('RippleIndicationInstance', [IndicationInstance]);
  function _get_bounded__6dedw_1($this) {
    return $this.bounded_1;
  }
  function _get_rippleAlpha__fyluwt_0($this) {
    return $this.rippleAlpha_1;
  }
  function _get_animatedAlpha__sz6rt6($this) {
    return $this.animatedAlpha_1;
  }
  function _get_interactions__vdfb5i($this) {
    return $this.interactions_1;
  }
  function _set_currentInteraction__v4tp9e($this, _set____db54di) {
    $this.currentInteraction_1 = _set____db54di;
  }
  function _get_currentInteraction__5yf1le($this) {
    return $this.currentInteraction_1;
  }
  function StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$targetAlpha_1 = $targetAlpha;
    this.$incomingAnimationSpec_1 = $incomingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  StateLayer$handleInteraction$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  StateLayer$handleInteraction$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  StateLayer$handleInteraction$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.this$0__1.animatedAlpha_1.animateTo$default_mbptcf_k$(this.$targetAlpha_1, this.$incomingAnimationSpec_1, null, null, this, 12, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 2) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  StateLayer$handleInteraction$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda(this.this$0__1, this.$targetAlpha_1, this.$incomingAnimationSpec_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  StateLayer$handleInteraction$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  StateLayer$handleInteraction$slambda.$metadata$ = classMeta('StateLayer$handleInteraction$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function StateLayer$handleInteraction$slambda_0(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$outgoingAnimationSpec_1 = $outgoingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  StateLayer$handleInteraction$slambda_1.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  StateLayer$handleInteraction$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  StateLayer$handleInteraction$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.this$0__1.animatedAlpha_1.animateTo$default_mbptcf_k$(0.0, this.$outgoingAnimationSpec_1, null, null, this, 12, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 2) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  StateLayer$handleInteraction$slambda_1.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda_1(this.this$0__1, this.$outgoingAnimationSpec_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  StateLayer$handleInteraction$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  StateLayer$handleInteraction$slambda_1.$metadata$ = classMeta('StateLayer$handleInteraction$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function StateLayer$handleInteraction$slambda_2(this$0, $outgoingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer(bounded, rippleAlpha) {
    this.bounded_1 = bounded;
    this.rippleAlpha_1 = rippleAlpha;
    var tmp = this;
    tmp.animatedAlpha_1 = Animatable$default(0.0, 0.0, 2, null);
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp_0.interactions_1 = tmp$ret$0;
    this.currentInteraction_1 = null;
  }
  StateLayer.prototype.handleInteraction_x9lasv_k$ = function (interaction, scope) {
    var tmp0_subject = interaction;
    if (tmp0_subject instanceof Enter) {
      this.interactions_1.add_1j60pz_k$(interaction);
    } else {
      if (tmp0_subject instanceof Exit) {
        this.interactions_1.remove_8hbkc6_k$(interaction.enter_1);
      } else {
        if (tmp0_subject instanceof Focus) {
          this.interactions_1.add_1j60pz_k$(interaction);
        } else {
          if (tmp0_subject instanceof Unfocus) {
            this.interactions_1.remove_8hbkc6_k$(interaction.focus_1);
          } else {
            if (tmp0_subject instanceof Start) {
              this.interactions_1.add_1j60pz_k$(interaction);
            } else {
              if (tmp0_subject instanceof Stop) {
                this.interactions_1.remove_8hbkc6_k$(interaction.start_1);
              } else {
                if (tmp0_subject instanceof Cancel_0) {
                  this.interactions_1.remove_8hbkc6_k$(interaction.start_1);
                } else {
                  return Unit_getInstance();
                }
              }
            }
          }
        }
      }
    }
    var newInteraction = lastOrNull(this.interactions_1);
    if (!equals(this.currentInteraction_1, newInteraction)) {
      if (!(newInteraction == null)) {
        var tmp1_subject = interaction;
        var tmp;
        if (tmp1_subject instanceof Enter) {
          tmp = this.rippleAlpha_1.get_value_j01efc_k$().hoveredAlpha_1;
        } else {
          if (tmp1_subject instanceof Focus) {
            tmp = this.rippleAlpha_1.get_value_j01efc_k$().focusedAlpha_1;
          } else {
            if (tmp1_subject instanceof Start) {
              tmp = this.rippleAlpha_1.get_value_j01efc_k$().draggedAlpha_1;
            } else {
              tmp = 0.0;
            }
          }
        }
        var targetAlpha = tmp;
        var incomingAnimationSpec = incomingStateLayerAnimationSpecFor(newInteraction);
        launch$default(scope, null, null, StateLayer$handleInteraction$slambda_0(this, targetAlpha, incomingAnimationSpec, null), 3, null);
      } else {
        var outgoingAnimationSpec = outgoingStateLayerAnimationSpecFor(this.currentInteraction_1);
        launch$default(scope, null, null, StateLayer$handleInteraction$slambda_2(this, outgoingAnimationSpec, null), 3, null);
      }
      this.currentInteraction_1 = newInteraction;
    }
  };
  StateLayer.prototype.drawStateLayer_mkuc2c_k$ = function (_this__u8e3s4, radius, color) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    tmp$ret$0 = isNaN_0(_Dp___get_value__impl__geb1vb(radius));
    if (tmp$ret$0) {
      tmp = getRippleEndRadius(_this__u8e3s4, this.bounded_1, _this__u8e3s4.get_size_x9ctfw_k$());
    } else {
      tmp = _this__u8e3s4.toPx_u0ojv5_k$(radius);
    }
    var targetRadius = tmp;
    var alpha = this.animatedAlpha_1.get_value_j01efc_k$();
    if (alpha > 0.0) {
      var modulatedColor = Color__copy$default_impl_ectz3s(color, alpha, 0.0, 0.0, 0.0, 14, null);
      if (this.bounded_1) {
        var tmp$ret$3;
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var tmp0_clipRect = _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_x9ctfw_k$());
        var tmp1_clipRect = _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_x9ctfw_k$());
        var tmp2_clipRect = Companion_getInstance_2().Intersect_1;
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        var tmp$ret$1;
        // Inline function 'kotlin.with' call
        var tmp0_with = _this__u8e3s4.get_drawContext_ffwztu_k$();
        // Inline function 'kotlin.contracts.contract' call
        var previousSize = tmp0_with.get_size_x9ctfw_k$();
        tmp0_with.get_canvas_bshgm9_k$().save_erlm4_k$();
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tmp0_with.get_transform_px941v_k$();
        tmp0__anonymous__q1qw7t.clipRect_si0ig1_k$(0.0, 0.0, tmp0_clipRect, tmp1_clipRect, tmp2_clipRect);
        // Inline function 'androidx.compose.material.ripple.StateLayer.drawStateLayer.<anonymous>' call
        _this__u8e3s4.drawCircle$default_36xhbw_k$(modulatedColor, targetRadius, null, 0.0, null, null, null, 124, null);
        tmp0_with.get_canvas_bshgm9_k$().restore_a2id37_k$();
        tmp0_with.set_size_xj1bzm_k$(previousSize);
        tmp$ret$1 = Unit_getInstance();
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
      } else {
        _this__u8e3s4.drawCircle$default_36xhbw_k$(modulatedColor, targetRadius, null, 0.0, null, null, null, 124, null);
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
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  RippleAnimation$fadeIn$slambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  RippleAnimation$fadeIn$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RippleAnimation$fadeIn$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            var tmp_0 = tween$default(75, 0, get_LinearEasing(), 2, null);
            suspendResult = this.this$0__1.animatedAlpha_1.animateTo$default_mbptcf_k$(1.0, tmp_0, null, null, this, 12, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 2) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  RippleAnimation$fadeIn$slambda$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  RippleAnimation$fadeIn$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  RippleAnimation$fadeIn$slambda$slambda.$metadata$ = classMeta('RippleAnimation$fadeIn$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function RippleAnimation$fadeIn$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  RippleAnimation$fadeIn$slambda$slambda_1.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  RippleAnimation$fadeIn$slambda$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RippleAnimation$fadeIn$slambda$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            var tmp_0 = tween$default(225, 0, get_FastOutSlowInEasing(), 2, null);
            suspendResult = this.this$0__1.animatedRadiusPercent_1.animateTo$default_mbptcf_k$(1.0, tmp_0, null, null, this, 12, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 2) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  RippleAnimation$fadeIn$slambda$slambda_1.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  RippleAnimation$fadeIn$slambda$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  RippleAnimation$fadeIn$slambda$slambda_1.$metadata$ = classMeta('RippleAnimation$fadeIn$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function RippleAnimation$fadeIn$slambda$slambda_2(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  RippleAnimation$fadeIn$slambda$slambda_3.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  RippleAnimation$fadeIn$slambda$slambda_3.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RippleAnimation$fadeIn$slambda$slambda_3.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            var tmp_0 = tween$default(225, 0, get_LinearEasing(), 2, null);
            suspendResult = this.this$0__1.animatedCenterPercent_1.animateTo$default_mbptcf_k$(1.0, tmp_0, null, null, this, 12, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 2) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  RippleAnimation$fadeIn$slambda$slambda_3.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  RippleAnimation$fadeIn$slambda$slambda_3.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  RippleAnimation$fadeIn$slambda$slambda_3.$metadata$ = classMeta('RippleAnimation$fadeIn$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function RippleAnimation$fadeIn$slambda$slambda_4(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  RippleAnimation$fadeOut$slambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  RippleAnimation$fadeOut$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RippleAnimation$fadeOut$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            var tmp_0 = tween$default(150, 0, get_LinearEasing(), 2, null);
            suspendResult = this.this$0__1.animatedAlpha_1.animateTo$default_mbptcf_k$(0.0, tmp_0, null, null, this, 12, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 2) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  RippleAnimation$fadeOut$slambda$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  RippleAnimation$fadeOut$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  RippleAnimation$fadeOut$slambda$slambda.$metadata$ = classMeta('RippleAnimation$fadeOut$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function RippleAnimation$fadeOut$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _set_origin__gfzohd($this, _set____db54di) {
    $this.origin_1 = _set____db54di;
  }
  function _get_origin__hwq945($this) {
    return $this.origin_1;
  }
  function _get_radius__h7nyvb_1($this) {
    return $this.radius_1;
  }
  function _get_bounded__6dedw_2($this) {
    return $this.bounded_1;
  }
  function _set_startRadius__av892p($this, _set____db54di) {
    $this.startRadius_1 = _set____db54di;
  }
  function _get_startRadius__tvhmkj($this) {
    return $this.startRadius_1;
  }
  function _set_targetRadius__y9wawk($this, _set____db54di) {
    $this.targetRadius_1 = _set____db54di;
  }
  function _get_targetRadius__l7h0ig($this) {
    return $this.targetRadius_1;
  }
  function _set_targetCenter__t95byp($this, _set____db54di) {
    $this.targetCenter_1 = _set____db54di;
  }
  function _get_targetCenter__q87zgb($this) {
    return $this.targetCenter_1;
  }
  function _get_animatedAlpha__sz6rt6_0($this) {
    return $this.animatedAlpha_1;
  }
  function _get_animatedRadiusPercent__dif63j($this) {
    return $this.animatedRadiusPercent_1;
  }
  function _get_animatedCenterPercent__aw6y3o($this) {
    return $this.animatedCenterPercent_1;
  }
  function _get_finishSignalDeferred__9mucun($this) {
    return $this.finishSignalDeferred_1;
  }
  function _set_finishedFadingIn__33hlo9($this, _set____db54di) {
    var tmp0_setValue = finishedFadingIn$factory();
    return $this.finishedFadingIn$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function _get_finishedFadingIn__pzmnej($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = finishedFadingIn$factory_0();
    tmp$ret$0 = $this.finishedFadingIn$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _set_finishRequested__u52oy2($this, _set____db54di) {
    var tmp0_setValue = finishRequested$factory();
    return $this.finishRequested$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function _get_finishRequested__usb5ii($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = finishRequested$factory_0();
    tmp$ret$0 = $this.finishRequested$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function fadeIn($this, $cont) {
    var tmp = new $fadeInCOROUTINE$1($this, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function fadeOut($this, $cont) {
    var tmp = new $fadeOutCOROUTINE$2($this, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function RippleAnimation$fadeIn$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  RippleAnimation$fadeIn$slambda.prototype.invoke_sfmo6k_k$ = function ($this$coroutineScope, $cont) {
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  RippleAnimation$fadeIn$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_sfmo6k_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RippleAnimation$fadeIn$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          launch$default(this.$this$coroutineScope_1, null, null, RippleAnimation$fadeIn$slambda$slambda_0(this.this$0__1, null), 3, null);
          launch$default(this.$this$coroutineScope_1, null, null, RippleAnimation$fadeIn$slambda$slambda_2(this.this$0__1, null), 3, null);
          return launch$default(this.$this$coroutineScope_1, null, null, RippleAnimation$fadeIn$slambda$slambda_4(this.this$0__1, null), 3, null);
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  RippleAnimation$fadeIn$slambda.prototype.create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeIn$slambda(this.this$0__1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  RippleAnimation$fadeIn$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  RippleAnimation$fadeIn$slambda.$metadata$ = classMeta('RippleAnimation$fadeIn$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function RippleAnimation$fadeIn$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.invoke_sfmo6k_k$($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  RippleAnimation$fadeOut$slambda.prototype.invoke_sfmo6k_k$ = function ($this$coroutineScope, $cont) {
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  RippleAnimation$fadeOut$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_sfmo6k_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  RippleAnimation$fadeOut$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          return launch$default(this.$this$coroutineScope_1, null, null, RippleAnimation$fadeOut$slambda$slambda_0(this.this$0__1, null), 3, null);
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  RippleAnimation$fadeOut$slambda.prototype.create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeOut$slambda(this.this$0__1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  RippleAnimation$fadeOut$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  RippleAnimation$fadeOut$slambda.$metadata$ = classMeta('RippleAnimation$fadeOut$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function RippleAnimation$fadeOut$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.invoke_sfmo6k_k$($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $animateCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $animateCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            this.state_1 = 1;
            suspendResult = fadeIn(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            _set_finishedFadingIn__33hlo9(this._this__u8e3s4__1, true);
            this.state_1 = 2;
            suspendResult = this._this__u8e3s4__1.finishSignalDeferred_1.await_xhs9og_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.state_1 = 3;
            suspendResult = fadeOut(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 4) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $animateCOROUTINE$0.$metadata$ = classMeta('$animateCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $fadeInCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $fadeInCOROUTINE$1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeIn$slambda_0(this._this__u8e3s4__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 2) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $fadeInCOROUTINE$1.$metadata$ = classMeta('$fadeInCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $fadeOutCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $fadeOutCOROUTINE$2.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeOut$slambda_0(this._this__u8e3s4__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 2) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $fadeOutCOROUTINE$2.$metadata$ = classMeta('$fadeOutCOROUTINE$2', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function RippleAnimation(origin, radius, bounded) {
    this.origin_1 = origin;
    this.radius_1 = radius;
    this.bounded_1 = bounded;
    this.startRadius_1 = null;
    this.targetRadius_1 = null;
    this.targetCenter_1 = null;
    var tmp = this;
    tmp.animatedAlpha_1 = Animatable$default(0.0, 0.0, 2, null);
    var tmp_0 = this;
    tmp_0.animatedRadiusPercent_1 = Animatable$default(0.0, 0.0, 2, null);
    var tmp_1 = this;
    tmp_1.animatedCenterPercent_1 = Animatable$default(0.0, 0.0, 2, null);
    this.finishSignalDeferred_1 = CompletableDeferred(null);
    var tmp_2 = this;
    tmp_2.finishedFadingIn$delegate_1 = mutableStateOf$default(false, null, 2, null);
    var tmp_3 = this;
    tmp_3.finishRequested$delegate_1 = mutableStateOf$default(false, null, 2, null);
  }
  RippleAnimation.prototype.animate_ibjroy_k$ = function ($cont) {
    var tmp = new $animateCOROUTINE$0(this, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  RippleAnimation.prototype.finish_mgihxe_k$ = function () {
    _set_finishRequested__u52oy2(this, true);
    this.finishSignalDeferred_1.complete_8y7ynm_k$(Unit_getInstance());
  };
  RippleAnimation.prototype.draw_opvrg2_k$ = function (_this__u8e3s4, color) {
    if (this.startRadius_1 == null) {
      this.startRadius_1 = getRippleStartRadius(_this__u8e3s4.get_size_x9ctfw_k$());
    }
    if (this.targetRadius_1 == null) {
      var tmp = this;
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var tmp0__get_isUnspecified__bfzg5a = this.radius_1;
      tmp$ret$0 = isNaN_0(_Dp___get_value__impl__geb1vb(tmp0__get_isUnspecified__bfzg5a));
      if (tmp$ret$0) {
        tmp_0 = getRippleEndRadius(_this__u8e3s4, this.bounded_1, _this__u8e3s4.get_size_x9ctfw_k$());
      } else {
        tmp_0 = _this__u8e3s4.toPx_u0ojv5_k$(this.radius_1);
      }
      tmp.targetRadius_1 = tmp_0;
    }
    var tmp_1 = this.origin_1;
    if ((tmp_1 == null ? null : new Offset(tmp_1)) == null) {
      this.origin_1 = _this__u8e3s4.get_center_568eeq_k$();
    }
    var tmp_2 = this.targetCenter_1;
    if ((tmp_2 == null ? null : new Offset(tmp_2)) == null) {
      this.targetCenter_1 = Offset_0(_Size___get_width__impl__58y75t(_this__u8e3s4.get_size_x9ctfw_k$()) / 2.0, _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_x9ctfw_k$()) / 2.0);
    }
    var tmp_3;
    if (_get_finishRequested__usb5ii(this) ? !_get_finishedFadingIn__pzmnej(this) : false) {
      tmp_3 = 1.0;
    } else {
      tmp_3 = this.animatedAlpha_1.get_value_j01efc_k$();
    }
    var alpha = tmp_3;
    var radius = lerp(ensureNotNull(this.startRadius_1), ensureNotNull(this.targetRadius_1), this.animatedRadiusPercent_1.get_value_j01efc_k$());
    var tmp_4 = this.origin_1;
    var tmp_5 = _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_4 == null ? null : new Offset(tmp_4)).packedValue_1);
    var tmp_6 = this.targetCenter_1;
    var tmp_7 = lerp(tmp_5, _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_6 == null ? null : new Offset(tmp_6)).packedValue_1), this.animatedCenterPercent_1.get_value_j01efc_k$());
    var tmp_8 = this.origin_1;
    var tmp_9 = _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_8 == null ? null : new Offset(tmp_8)).packedValue_1);
    var tmp_10 = this.targetCenter_1;
    var centerOffset = Offset_0(tmp_7, lerp(tmp_9, _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_10 == null ? null : new Offset(tmp_10)).packedValue_1), this.animatedCenterPercent_1.get_value_j01efc_k$()));
    var tmp_11 = _Color___get_alpha__impl__wcfyv1(color) * alpha;
    var modulatedColor = Color__copy$default_impl_ectz3s(color, tmp_11, 0.0, 0.0, 0.0, 14, null);
    if (this.bounded_1) {
      var tmp$ret$3;
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      var tmp1_clipRect = _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_x9ctfw_k$());
      var tmp2_clipRect = _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_x9ctfw_k$());
      var tmp3_clipRect = Companion_getInstance_2().Intersect_1;
      var tmp$ret$2;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      var tmp0_with = _this__u8e3s4.get_drawContext_ffwztu_k$();
      // Inline function 'kotlin.contracts.contract' call
      var previousSize = tmp0_with.get_size_x9ctfw_k$();
      tmp0_with.get_canvas_bshgm9_k$().save_erlm4_k$();
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
      var tmp0__anonymous__q1qw7t = tmp0_with.get_transform_px941v_k$();
      tmp0__anonymous__q1qw7t.clipRect_si0ig1_k$(0.0, 0.0, tmp1_clipRect, tmp2_clipRect, tmp3_clipRect);
      // Inline function 'androidx.compose.material.ripple.RippleAnimation.draw.<anonymous>' call
      _this__u8e3s4.drawCircle$default_36xhbw_k$(modulatedColor, radius, centerOffset, 0.0, null, null, null, 120, null);
      tmp0_with.get_canvas_bshgm9_k$().restore_a2id37_k$();
      tmp0_with.set_size_xj1bzm_k$(previousSize);
      tmp$ret$1 = Unit_getInstance();
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
    } else {
      _this__u8e3s4.drawCircle$default_36xhbw_k$(modulatedColor, radius, centerOffset, 0.0, null, null, null, 120, null);
    }
  };
  RippleAnimation.$metadata$ = classMeta('RippleAnimation');
  function getRippleEndRadius(_this__u8e3s4, bounded, size) {
    init_properties_RippleAnimation_kt_cwgkg0();
    var radiusCoveringBounds = Offset__getDistance_impl_pclvxn(Offset_0(_Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size))) / 2.0;
    var tmp;
    if (bounded) {
      tmp = radiusCoveringBounds + _this__u8e3s4.toPx_u0ojv5_k$(get_BoundedRippleExtraRadius());
    } else {
      tmp = radiusCoveringBounds;
    }
    return tmp;
  }
  function get_FadeInDuration() {
    return FadeInDuration;
  }
  var FadeInDuration;
  function get_RadiusDuration() {
    return RadiusDuration;
  }
  var RadiusDuration;
  function get_FadeOutDuration() {
    return FadeOutDuration;
  }
  var FadeOutDuration;
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
  Companion.prototype.defaultRippleColor_f5ayyv_k$ = function (contentColor, lightTheme) {
    var contentLuminance = luminance(contentColor);
    var tmp;
    if (!lightTheme ? contentLuminance < 0.5 : false) {
      tmp = Companion_getInstance_1().White_1;
    } else {
      tmp = contentColor;
    }
    return tmp;
  };
  Companion.prototype.defaultRippleAlpha_46jx2p_k$ = function (contentColor, lightTheme) {
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
    Companion_getInstance_3();
  }
  RippleTheme.$metadata$ = interfaceMeta('RippleTheme');
  function DebugRippleTheme() {
    DebugRippleTheme_instance = this;
  }
  DebugRippleTheme.prototype.defaultColor_r8g18n_k$ = function () {
    illegalDecoyCallException('defaultColor');
  };
  DebugRippleTheme.prototype.rippleAlpha_cuqqk2_k$ = function () {
    illegalDecoyCallException('rippleAlpha');
  };
  DebugRippleTheme.prototype.defaultColor$composable_3q39e6_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1423573606);
    sourceInformation($composer_0, 'C(defaultColor$composable):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(1423573606, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.defaultColor$composable (RippleTheme.kt:202)');
    }
    var tmp0 = Companion_getInstance_3().defaultRippleColor_f5ayyv_k$(Companion_getInstance_1().Black_1, true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  DebugRippleTheme.prototype.rippleAlpha$composable_ezucwt_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(2071239027);
    sourceInformation($composer_0, 'C(rippleAlpha$composable):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(2071239027, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.rippleAlpha$composable (RippleTheme.kt:205)');
    }
    var tmp0 = Companion_getInstance_3().defaultRippleAlpha_46jx2p_k$(Companion_getInstance_1().Black_1, true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
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
    this.draggedAlpha_1 = draggedAlpha;
    this.focusedAlpha_1 = focusedAlpha;
    this.hoveredAlpha_1 = hoveredAlpha;
    this.pressedAlpha_1 = pressedAlpha;
  }
  RippleAlpha.prototype.get_draggedAlpha_4hlfij_k$ = function () {
    return this.draggedAlpha_1;
  };
  RippleAlpha.prototype.get_focusedAlpha_9tm3xs_k$ = function () {
    return this.focusedAlpha_1;
  };
  RippleAlpha.prototype.get_hoveredAlpha_oe6bn8_k$ = function () {
    return this.hoveredAlpha_1;
  };
  RippleAlpha.prototype.get_pressedAlpha_4p7l23_k$ = function () {
    return this.pressedAlpha_1;
  };
  RippleAlpha.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleAlpha))
      return false;
    if (!(this.draggedAlpha_1 === other.draggedAlpha_1))
      return false;
    if (!(this.focusedAlpha_1 === other.focusedAlpha_1))
      return false;
    if (!(this.hoveredAlpha_1 === other.hoveredAlpha_1))
      return false;
    if (!(this.pressedAlpha_1 === other.pressedAlpha_1))
      return false;
    return true;
  };
  RippleAlpha.prototype.hashCode = function () {
    var result = getNumberHashCode(this.draggedAlpha_1);
    result = imul(31, result) + getNumberHashCode(this.focusedAlpha_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.hoveredAlpha_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.pressedAlpha_1) | 0;
    return result;
  };
  RippleAlpha.prototype.toString = function () {
    return 'RippleAlpha(draggedAlpha=' + this.draggedAlpha_1 + ', focusedAlpha=' + this.focusedAlpha_1 + ', ' + ('hoveredAlpha=' + this.hoveredAlpha_1 + ', pressedAlpha=' + this.pressedAlpha_1 + ')');
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
  //region block: init
  FadeInDuration = 75;
  RadiusDuration = 225;
  FadeOutDuration = 150;
  //endregion
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
