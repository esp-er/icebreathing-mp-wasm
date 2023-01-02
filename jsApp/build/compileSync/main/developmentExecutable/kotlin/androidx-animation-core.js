(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './androidx-runtime.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './androidx-ui-unit.js', './androidx-ui-geometry.js', './androidx-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-runtime.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./androidx-ui-unit.js'), require('./androidx-ui-geometry.js'), require('./androidx-ui.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-animation-core'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation-core'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-animation-core'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation-core'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-animation-core'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation-core'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-animation-core'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation-core'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'androidx-animation-core'.");
    }
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-animation-core'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-animation-core'.");
    }
    root['androidx-animation-core'] = factory(typeof this['androidx-animation-core'] === 'undefined' ? {} : this['androidx-animation-core'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-runtime'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['androidx-ui-unit'], this['androidx-ui-geometry'], this['androidx-ui']);
  }
}(this, function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_ui_ui) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var classMeta = kotlin_kotlin.$_$.q8;
  var Unit_getInstance = kotlin_kotlin.$_$.b3;
  var equals = kotlin_kotlin.$_$.t8;
  var coerceIn = kotlin_kotlin.$_$.ja;
  var Long = kotlin_kotlin.$_$.ec;
  var CoroutineImpl = kotlin_kotlin.$_$.a8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k7;
  var CancellationException = kotlin_kotlin.$_$.j7;
  var mutableStateOf$default = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.w2;
  var toString = kotlin_kotlin.$_$.u9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var KMutableProperty1 = kotlin_kotlin.$_$.ra;
  var getPropertyCallableRef = kotlin_kotlin.$_$.z8;
  var SuspendFunction0 = kotlin_kotlin.$_$.b8;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.g2;
  var THROW_CCE = kotlin_kotlin.$_$.kc;
  var isObject = kotlin_kotlin.$_$.j9;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var rememberUpdatedState$composable = kotlin_androidx_compose_runtime_runtime.$_$.o1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var SideEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.a1;
  var LaunchedEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.v;
  var KProperty0 = kotlin_kotlin.$_$.sa;
  var THROW_ISE = kotlin_kotlin.$_$.lc;
  var getLocalDelegateReference = kotlin_kotlin.$_$.w8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var isInterface = kotlin_kotlin.$_$.i9;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_unit.$_$.m3;
  var Dp = kotlin_androidx_compose_ui_ui_unit.$_$.v;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_geometry.$_$.o1;
  var Size = kotlin_androidx_compose_ui_ui_geometry.$_$.k;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_geometry.$_$.m1;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance_3 = kotlin_androidx_compose_ui_ui_geometry.$_$.n1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.x2;
  var Companion_getInstance_4 = kotlin_androidx_compose_ui_ui_unit.$_$.p3;
  var IntOffset = kotlin_androidx_compose_ui_ui_unit.$_$.x;
  var Companion_getInstance_5 = kotlin_androidx_compose_ui_ui_unit.$_$.r3;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$_$.z;
  var SuspendFunction1 = kotlin_kotlin.$_$.c8;
  var isNaN_0 = kotlin_kotlin.$_$.yc;
  var interfaceMeta = kotlin_kotlin.$_$.d9;
  var Enum = kotlin_kotlin.$_$.zb;
  var hashCode = kotlin_kotlin.$_$.b9;
  var getNumberHashCode = kotlin_kotlin.$_$.x8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var roundToInt = kotlin_kotlin.$_$.aa;
  var to = kotlin_kotlin.$_$.md;
  var mapCapacity = kotlin_kotlin.$_$.d6;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var toLong = kotlin_kotlin.$_$.s9;
  var abs = kotlin_kotlin.$_$.w9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.cd;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var State = kotlin_androidx_compose_runtime_runtime.$_$.c1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.hd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var get_PI = kotlin_kotlin.$_$.v9;
  var coerceIn_0 = kotlin_kotlin.$_$.la;
  var numberToLong = kotlin_kotlin.$_$.p9;
  var withFrameNanos = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var Key_getInstance = kotlin_androidx_compose_ui_ui.$_$.u4;
  var Annotation = kotlin_kotlin.$_$.tb;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var ensureNotNull = kotlin_kotlin.$_$.uc;
  var AtomicReference = kotlin_androidx_compose_runtime_runtime.$_$.l;
  var Mutex$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var isFinite = kotlin_kotlin.$_$.vc;
  var isNaN_1 = kotlin_kotlin.$_$.zc;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.v2;
  var floatFromBits = kotlin_kotlin.$_$.v8;
  var toBits = kotlin_kotlin.$_$.id;
  var Key_getInstance_1 = kotlin_androidx_compose_ui_ui.$_$.y4;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.i1;
  var derivedStateOf = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var illegalDecoyCallException = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var DisposableEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var DisposableEffectResult = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var KProperty1 = kotlin_kotlin.$_$.ta;
  var numberToInt = kotlin_kotlin.$_$.o9;
  var _Dp___get_value__impl__geb1vb = kotlin_androidx_compose_ui_ui_unit.$_$.l2;
  var _Dp___init__impl__ms3zkb = kotlin_androidx_compose_ui_ui_unit.$_$.i2;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_androidx_compose_ui_ui_unit.$_$.m2;
  var _DpOffset___get_y__impl__1h898y = kotlin_androidx_compose_ui_ui_unit.$_$.n2;
  var DpOffset = kotlin_androidx_compose_ui_ui_unit.$_$.r;
  var DpOffset_0 = kotlin_androidx_compose_ui_ui_unit.$_$.s;
  var _Size___get_width__impl__58y75t = kotlin_androidx_compose_ui_ui_geometry.$_$.k1;
  var _Size___get_height__impl__a04p02 = kotlin_androidx_compose_ui_ui_geometry.$_$.h1;
  var Size_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.j;
  var _Offset___get_x__impl__xvi35n = kotlin_androidx_compose_ui_ui_geometry.$_$.e1;
  var _Offset___get_y__impl__8bzhra = kotlin_androidx_compose_ui_ui_geometry.$_$.f1;
  var Offset_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.d;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_androidx_compose_ui_ui_unit.$_$.r2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_androidx_compose_ui_ui_unit.$_$.s2;
  var IntOffset_0 = kotlin_androidx_compose_ui_ui_unit.$_$.w;
  var _IntSize___get_width__impl__d9yl4o = kotlin_androidx_compose_ui_ui_unit.$_$.w2;
  var _IntSize___get_height__impl__prv63b = kotlin_androidx_compose_ui_ui_unit.$_$.u2;
  var IntSize_0 = kotlin_androidx_compose_ui_ui_unit.$_$.y;
  var Rect = kotlin_androidx_compose_ui_ui_geometry.$_$.g;
  var until = kotlin_kotlin.$_$.pa;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.y2;
  var getValue = kotlin_kotlin.$_$.p5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.i4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var Companion_getInstance_7 = kotlin_androidx_compose_ui_ui_unit.$_$.n3;
  var mapOf = kotlin_kotlin.$_$.e6;
  //endregion
  //region block: pre-declaration
  Animatable$runAnimation$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Animatable$runAnimation$slambda.prototype.constructor = Animatable$runAnimation$slambda;
  Animatable$snapTo$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Animatable$snapTo$slambda.prototype.constructor = Animatable$snapTo$slambda;
  Animatable$stop$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Animatable$stop$slambda.prototype.constructor = Animatable$stop$slambda;
  animateValueAsState$composable$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  animateValueAsState$composable$slambda$slambda.prototype.constructor = animateValueAsState$composable$slambda$slambda;
  animateValueAsState$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  animateValueAsState$composable$slambda.prototype.constructor = animateValueAsState$composable$slambda;
  function isFinishedFromNanos(playTimeNanos) {
    return playTimeNanos.compareTo_n4fqi2_k$(this.get_durationNanos_ub5cy_k$()) >= 0;
  }
  AnimationEndReason.prototype = Object.create(Enum.prototype);
  AnimationEndReason.prototype.constructor = AnimationEndReason;
  RepeatMode.prototype = Object.create(Enum.prototype);
  RepeatMode.prototype.constructor = RepeatMode;
  AnimationVector1D.prototype = Object.create(AnimationVector.prototype);
  AnimationVector1D.prototype.constructor = AnimationVector1D;
  AnimationVector2D.prototype = Object.create(AnimationVector.prototype);
  AnimationVector2D.prototype.constructor = AnimationVector2D;
  AnimationVector3D.prototype = Object.create(AnimationVector.prototype);
  AnimationVector3D.prototype.constructor = AnimationVector3D;
  AnimationVector4D.prototype = Object.create(AnimationVector.prototype);
  AnimationVector4D.prototype.constructor = AnimationVector4D;
  function getEndVelocity(initialValue, targetValue, initialVelocity) {
    return this.getVelocityFromNanos_da2xk2_k$(this.getDurationNanos_ct8k6x_k$(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function vectorize(converter) {
    return VectorizedFloatAnimationSpec_init_$Create$(this);
  }
  function vectorize_0(converter) {
    return this.vectorize_wiveyw_k$(converter);
  }
  withInfiniteAnimationFrameNanos$slambda.prototype = Object.create(CoroutineImpl.prototype);
  withInfiniteAnimationFrameNanos$slambda.prototype.constructor = withInfiniteAnimationFrameNanos$slambda;
  $withInfiniteAnimationFrameNanosCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $withInfiniteAnimationFrameNanosCOROUTINE$0.prototype.constructor = $withInfiniteAnimationFrameNanosCOROUTINE$0;
  MutatorMutex$mutate$slambda.prototype = Object.create(CoroutineImpl.prototype);
  MutatorMutex$mutate$slambda.prototype.constructor = MutatorMutex$mutate$slambda;
  MutatorMutex$mutateWith$slambda.prototype = Object.create(CoroutineImpl.prototype);
  MutatorMutex$mutateWith$slambda.prototype.constructor = MutatorMutex$mutateWith$slambda;
  MutatePriority.prototype = Object.create(Enum.prototype);
  MutatePriority.prototype.constructor = MutatePriority;
  $animateCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $animateCOROUTINE$1.prototype.constructor = $animateCOROUTINE$1;
  $callWithFrameNanosCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $callWithFrameNanosCOROUTINE$2.prototype.constructor = $callWithFrameNanosCOROUTINE$2;
  function isTransitioningTo(_this__u8e3s4, targetState) {
    return equals(_this__u8e3s4, this.get_initialState_2eu9l6_k$()) ? equals(targetState, this.get_targetState_kri3mx_k$()) : false;
  }
  Transition$animateTo$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Transition$animateTo$composable$slambda.prototype.constructor = Transition$animateTo$composable$slambda;
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.getVelocityFromNanos_2nsq5r_k$(this.getDurationNanos_62az16_k$(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function get_isInfinite() {
    return false;
  }
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    return numberToLong(this.get_delayMillis_d968n4_k$() + this.get_durationMillis_pqx05f_k$() | 0).times_2zfqpc_k$(get_MillisToNanos());
  }
  //endregion
  function AnimationResult(endState, endReason) {
    this.endState_1 = endState;
    this.endReason_1 = endReason;
    this.$stable_1 = 0;
  }
  AnimationResult.prototype.get_endState_3g6vgh_k$ = function () {
    return this.endState_1;
  };
  AnimationResult.prototype.get_endReason_yf0h1y_k$ = function () {
    return this.endReason_1;
  };
  AnimationResult.prototype.toString = function () {
    return 'AnimationResult(endReason=' + this.endReason_1 + ', endState=' + this.endState_1 + ')';
  };
  AnimationResult.$metadata$ = classMeta('AnimationResult');
  function Animatable$runAnimation$slambda$lambda(this$0, $endState, $block, $clampingNeeded) {
    return function ($this$animate) {
      updateState($this$animate, this$0.internalState_1);
      var clamped = clampToBounds(this$0, $this$animate.get_value_j01efc_k$());
      var tmp;
      if (!equals(clamped, $this$animate.get_value_j01efc_k$())) {
        this$0.internalState_1.set_value_rnwamw_k$(clamped);
        $endState.set_value_rnwamw_k$(clamped);
        var tmp0_safe_receiver = $block;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(this$0);
        $this$animate.cancelAnimation_ickco7_k$();
        $clampingNeeded._v = true;
        tmp = Unit_getInstance();
      } else {
        var tmp1_safe_receiver = $block;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver(this$0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Animatable_init_$Init$(initialValue, typeConverter, visibilityThreshold, label, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      visibilityThreshold = null;
    if (!(($mask0 & 8) === 0))
      label = 'Animatable';
    Animatable.call($this, initialValue, typeConverter, visibilityThreshold, label);
    return $this;
  }
  function Animatable_init_$Create$(initialValue, typeConverter, visibilityThreshold, label, $mask0, $marker) {
    return Animatable_init_$Init$(initialValue, typeConverter, visibilityThreshold, label, $mask0, $marker, Object.create(Animatable.prototype));
  }
  function _get_visibilityThreshold__cvk72g($this) {
    return $this.visibilityThreshold_1;
  }
  function Animatable_init_$Init$_0(initialValue, typeConverter, visibilityThreshold, $this) {
    Animatable.call($this, initialValue, typeConverter, visibilityThreshold, 'Animatable');
    return $this;
  }
  function Animatable_init_$Create$_0(initialValue, typeConverter, visibilityThreshold) {
    return Animatable_init_$Init$_0(initialValue, typeConverter, visibilityThreshold, Object.create(Animatable.prototype));
  }
  function Animatable_init_$Init$_1(initialValue, typeConverter, visibilityThreshold, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      visibilityThreshold = null;
    Animatable_init_$Init$_0(initialValue, typeConverter, visibilityThreshold, $this);
    return $this;
  }
  function Animatable_init_$Create$_1(initialValue, typeConverter, visibilityThreshold, $mask0, $marker) {
    return Animatable_init_$Init$_1(initialValue, typeConverter, visibilityThreshold, $mask0, $marker, Object.create(Animatable.prototype));
  }
  function _set_isRunning__kpbg34($this, _set____db54di) {
    var tmp0_setValue = isRunning$factory();
    return $this.isRunning$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function _set_targetValue__aqsk0r($this, _set____db54di) {
    var tmp0_setValue = targetValue$factory();
    return $this.targetValue$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function _set_lowerBound__uvrjui($this, _set____db54di) {
    $this.lowerBound_1 = _set____db54di;
  }
  function _set_upperBound__ul6eat($this, _set____db54di) {
    $this.upperBound_1 = _set____db54di;
  }
  function _get_mutatorMutex__pkek4u($this) {
    return $this.mutatorMutex_1;
  }
  function _get_negativeInfinityBounds__4uptfr($this) {
    return $this.negativeInfinityBounds_1;
  }
  function _get_positiveInfinityBounds__srcx3f($this) {
    return $this.positiveInfinityBounds_1;
  }
  function _set_lowerBoundVector__diyl9z($this, _set____db54di) {
    $this.lowerBoundVector_1 = _set____db54di;
  }
  function _get_lowerBoundVector__sf17md($this) {
    return $this.lowerBoundVector_1;
  }
  function _set_upperBoundVector__vzmpnc($this, _set____db54di) {
    $this.upperBoundVector_1 = _set____db54di;
  }
  function _get_upperBoundVector__9yd390($this) {
    return $this.upperBoundVector_1;
  }
  function createVector(_this__u8e3s4, $this, value) {
    var newVector = $this.typeConverter_1.get_convertToVector_s594l4_k$()(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.set_8gccym_k$(i, value);
      }
       while (inductionVariable < last);
    return newVector;
  }
  function runAnimation($this, animation, initialVelocity, block, $cont) {
    var startTime = $this.internalState_1.lastFrameTimeNanos_1;
    return $this.mutatorMutex_1.mutate$default_1b3qou_k$(null, Animatable$runAnimation$slambda_0($this, initialVelocity, animation, startTime, block, null), $cont, 1, null);
  }
  function clampToBounds($this, value) {
    if (equals($this.lowerBoundVector_1, $this.negativeInfinityBounds_1) ? equals($this.upperBoundVector_1, $this.positiveInfinityBounds_1) : false) {
      return value;
    }
    var valueVector = $this.typeConverter_1.get_convertToVector_s594l4_k$()(value);
    var clamped = false;
    var inductionVariable = 0;
    var last = valueVector.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (valueVector.get_fkrdnv_k$(i) < $this.lowerBoundVector_1.get_fkrdnv_k$(i) ? true : valueVector.get_fkrdnv_k$(i) > $this.upperBoundVector_1.get_fkrdnv_k$(i)) {
          clamped = true;
          valueVector.set_8gccym_k$(i, coerceIn(valueVector.get_fkrdnv_k$(i), $this.lowerBoundVector_1.get_fkrdnv_k$(i), $this.upperBoundVector_1.get_fkrdnv_k$(i)));
        }
      }
       while (inductionVariable < last);
    if (clamped) {
      return $this.typeConverter_1.get_convertFromVector_kmewon_k$()(valueVector);
    } else {
      return value;
    }
  }
  function endAnimation($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = $this.internalState_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.Animatable.endAnimation.<anonymous>' call
    tmp0_apply.velocityVector_1.reset_5tn5dq_k$();
    var tmp = tmp0_apply;
    AnimationConstants_getInstance();
    tmp.lastFrameTimeNanos_1 = new Long(0, -2147483648);
    tmp$ret$0 = tmp0_apply;
    _set_isRunning__kpbg34($this, false);
  }
  function Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    this.this$0__1 = this$0;
    this.$initialVelocity_1 = $initialVelocity;
    this.$animation_1 = $animation;
    this.$startTime_1 = $startTime;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  Animatable$runAnimation$slambda.prototype.invoke_yp4dq1_k$ = function ($cont) {
    var tmp = this.create_lvr374_k$($cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  Animatable$runAnimation$slambda.prototype.invoke_34if6s_k$ = function ($cont) {
    return this.invoke_yp4dq1_k$($cont);
  };
  Animatable$runAnimation$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.exceptionState_1 = 2;
            this.this$0__1.internalState_1.velocityVector_1 = this.this$0__1.typeConverter_1.get_convertToVector_s594l4_k$()(this.$initialVelocity_1);
            _set_targetValue__aqsk0r(this.this$0__1, this.$animation_1.get_targetValue_kq6mfd_k$());
            _set_isRunning__kpbg34(this.this$0__1, true);
            var tmp_0 = this;
            var tmp_1 = new Long(0, 0);
            AnimationConstants_getInstance();
            var tmp_2 = new Long(0, -2147483648);
            tmp_0.endState1__1 = copy$default(this.this$0__1.internalState_1, null, null, tmp_1, tmp_2, false, 23, null);
            this.clampingNeeded2__1 = {_v: false};
            this.state_1 = 1;
            suspendResult = animate(this.endState1__1, this.$animation_1, this.$startTime_1, Animatable$runAnimation$slambda$lambda(this.this$0__1, this.endState1__1, this.$block_1, this.clampingNeeded2__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var endReason = this.clampingNeeded2__1._v ? AnimationEndReason_BoundReached_getInstance() : AnimationEndReason_Finished_getInstance();
            endAnimation(this.this$0__1);
            this.TRY_RESULT0__1 = new AnimationResult(this.endState1__1, endReason);
            this.exceptionState_1 = 3;
            this.state_1 = 4;
            continue $sm;
          case 2:
            this.exceptionState_1 = 3;
            var tmp_3 = this.exception_1;
            if (tmp_3 instanceof CancellationException) {
              var e = this.exception_1;
              var tmp_4 = this;
              endAnimation(this.this$0__1);
              throw e;
            } else {
              throw this.exception_1;
            }

            break;
          case 3:
            throw this.exception_1;
          case 4:
            this.exceptionState_1 = 3;
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 3) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  Animatable$runAnimation$slambda.prototype.create_lvr374_k$ = function (completion) {
    var i = new Animatable$runAnimation$slambda(this.this$0__1, this.$initialVelocity_1, this.$animation_1, this.$startTime_1, this.$block_1, completion);
    return i;
  };
  Animatable$runAnimation$slambda.$metadata$ = classMeta('Animatable$runAnimation$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function Animatable$runAnimation$slambda_0(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    var i = new Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation);
    var l = function ($cont) {
      return i.invoke_yp4dq1_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation) {
    this.this$0__1 = this$0;
    this.$targetValue_1 = $targetValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  Animatable$snapTo$slambda.prototype.invoke_pbb09x_k$ = function ($cont) {
    var tmp = this.create_lvr374_k$($cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  Animatable$snapTo$slambda.prototype.invoke_34if6s_k$ = function ($cont) {
    return this.invoke_pbb09x_k$($cont);
  };
  Animatable$snapTo$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          endAnimation(this.this$0__1);
          var clampedValue = clampToBounds(this.this$0__1, this.$targetValue_1);
          this.this$0__1.internalState_1.set_value_rnwamw_k$(clampedValue);
          _set_targetValue__aqsk0r(this.this$0__1, clampedValue);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  Animatable$snapTo$slambda.prototype.create_lvr374_k$ = function (completion) {
    var i = new Animatable$snapTo$slambda(this.this$0__1, this.$targetValue_1, completion);
    return i;
  };
  Animatable$snapTo$slambda.$metadata$ = classMeta('Animatable$snapTo$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function Animatable$snapTo$slambda_0(this$0, $targetValue, resultContinuation) {
    var i = new Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation);
    var l = function ($cont) {
      return i.invoke_pbb09x_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$stop$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  Animatable$stop$slambda.prototype.invoke_pbb09x_k$ = function ($cont) {
    var tmp = this.create_lvr374_k$($cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  Animatable$stop$slambda.prototype.invoke_34if6s_k$ = function ($cont) {
    return this.invoke_pbb09x_k$($cont);
  };
  Animatable$stop$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          endAnimation(this.this$0__1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  Animatable$stop$slambda.prototype.create_lvr374_k$ = function (completion) {
    var i = new Animatable$stop$slambda(this.this$0__1, completion);
    return i;
  };
  Animatable$stop$slambda.$metadata$ = classMeta('Animatable$stop$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function Animatable$stop$slambda_0(this$0, resultContinuation) {
    var i = new Animatable$stop$slambda(this$0, resultContinuation);
    var l = function ($cont) {
      return i.invoke_pbb09x_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable(initialValue, typeConverter, visibilityThreshold, label) {
    this.typeConverter_1 = typeConverter;
    this.visibilityThreshold_1 = visibilityThreshold;
    this.label_1 = label;
    var tmp = this;
    var tmp_0 = new Long(0, 0);
    var tmp_1 = new Long(0, 0);
    tmp.internalState_1 = AnimationState_init_$Create$(this.typeConverter_1, initialValue, null, tmp_0, tmp_1, false, 60, null);
    var tmp_2 = this;
    tmp_2.isRunning$delegate_1 = mutableStateOf$default(false, null, 2, null);
    var tmp_3 = this;
    tmp_3.targetValue$delegate_1 = mutableStateOf$default(initialValue, null, 2, null);
    this.lowerBound_1 = null;
    this.upperBound_1 = null;
    this.mutatorMutex_1 = new MutatorMutex();
    var tmp_4 = this;
    tmp_4.defaultSpringSpec_1 = SpringSpec_init_$Create$(0.0, 0.0, this.visibilityThreshold_1, 3, null);
    var tmp_5 = this;
    FloatCompanionObject_getInstance();
    tmp_5.negativeInfinityBounds_1 = createVector(initialValue, this, -Infinity);
    var tmp_6 = this;
    FloatCompanionObject_getInstance();
    tmp_6.positiveInfinityBounds_1 = createVector(initialValue, this, Infinity);
    this.lowerBoundVector_1 = this.negativeInfinityBounds_1;
    this.upperBoundVector_1 = this.positiveInfinityBounds_1;
    this.$stable_1 = 8;
  }
  Animatable.prototype.get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  Animatable.prototype.get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  Animatable.prototype.get_internalState_st7k4r_k$ = function () {
    return this.internalState_1;
  };
  Animatable.prototype.get_value_j01efc_k$ = function () {
    return this.internalState_1.get_value_j01efc_k$();
  };
  Animatable.prototype.get_velocityVector_v3jmo9_k$ = function () {
    return this.internalState_1.velocityVector_1;
  };
  Animatable.prototype.get_velocity_3hqvmu_k$ = function () {
    return this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.get_velocityVector_v3jmo9_k$());
  };
  Animatable.prototype.get_isRunning_okmtn0_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isRunning$factory_0();
    tmp$ret$0 = this.isRunning$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  Animatable.prototype.get_targetValue_kq6mfd_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = targetValue$factory_0();
    tmp$ret$0 = this.targetValue$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  Animatable.prototype.get_lowerBound_br3ay_k$ = function () {
    return this.lowerBound_1;
  };
  Animatable.prototype.get_upperBound_mw839h_k$ = function () {
    return this.upperBound_1;
  };
  Animatable.prototype.get_defaultSpringSpec_18kgf4_k$ = function () {
    return this.defaultSpringSpec_1;
  };
  Animatable.prototype.updateBounds_rt2r4d_k$ = function (lowerBound, upperBound) {
    var tmp0_safe_receiver = lowerBound;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.core.Animatable.updateBounds.<anonymous>' call
      tmp$ret$0 = this.typeConverter_1.get_convertToVector_s594l4_k$()(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var lowerBoundVector = tmp1_elvis_lhs == null ? this.negativeInfinityBounds_1 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = upperBound;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'androidx.compose.animation.core.Animatable.updateBounds.<anonymous>' call
      tmp$ret$2 = this.typeConverter_1.get_convertToVector_s594l4_k$()(tmp2_safe_receiver);
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    }
    var tmp3_elvis_lhs = tmp_0;
    var upperBoundVector = tmp3_elvis_lhs == null ? this.positiveInfinityBounds_1 : tmp3_elvis_lhs;
    var inductionVariable = 0;
    var last = lowerBoundVector.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.check' call
        var tmp0_check = lowerBoundVector.get_fkrdnv_k$(i) <= upperBoundVector.get_fkrdnv_k$(i);
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_check) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.animation.core.Animatable.updateBounds.<anonymous>' call
          tmp$ret$4 = 'Lower bound must be no greater than upper bound on *all* dimensions. The ' + ('provided lower bound: ' + lowerBoundVector + ' is greater than upper bound ') + ('' + upperBoundVector + ' on index ' + i);
          var message = tmp$ret$4;
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
       while (inductionVariable < last);
    this.lowerBoundVector_1 = lowerBoundVector;
    this.upperBoundVector_1 = upperBoundVector;
    this.upperBound_1 = upperBound;
    this.lowerBound_1 = lowerBound;
    if (!this.get_isRunning_okmtn0_k$()) {
      var clampedValue = clampToBounds(this, this.get_value_j01efc_k$());
      if (!equals(clampedValue, this.get_value_j01efc_k$())) {
        this.internalState_1.set_value_rnwamw_k$(clampedValue);
      }
    }
  };
  Animatable.prototype.updateBounds$default_tto15i_k$ = function (lowerBound, upperBound, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      lowerBound = this.lowerBound_1;
    if (!(($mask0 & 2) === 0))
      upperBound = this.upperBound_1;
    return this.updateBounds_rt2r4d_k$(lowerBound, upperBound);
  };
  Animatable.prototype.animateTo_h218fu_k$ = function (targetValue, animationSpec, initialVelocity, block, $cont) {
    var tmp0_initialValue = this.get_value_j01efc_k$();
    var tmp1_typeConverter = this.typeConverter_1;
    var anim = TargetBasedAnimation_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, initialVelocity);
    return runAnimation(this, anim, initialVelocity, block, $cont);
  };
  Animatable.prototype.animateTo$default_mbptcf_k$ = function (targetValue, animationSpec, initialVelocity, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      animationSpec = this.defaultSpringSpec_1;
    if (!(($mask0 & 4) === 0))
      initialVelocity = this.get_velocity_3hqvmu_k$();
    if (!(($mask0 & 8) === 0))
      block = null;
    return this.animateTo_h218fu_k$(targetValue, animationSpec, initialVelocity, block, $cont);
  };
  Animatable.prototype.animateDecay_6mun9g_k$ = function (initialVelocity, animationSpec, block, $cont) {
    var tmp0_initialValue = this.get_value_j01efc_k$();
    var tmp1_initialVelocityVector = this.typeConverter_1.get_convertToVector_s594l4_k$()(initialVelocity);
    var tmp2_typeConverter = this.typeConverter_1;
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    return runAnimation(this, anim, initialVelocity, block, $cont);
  };
  Animatable.prototype.animateDecay$default_kskgzj_k$ = function (initialVelocity, animationSpec, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      block = null;
    return this.animateDecay_6mun9g_k$(initialVelocity, animationSpec, block, $cont);
  };
  Animatable.prototype.snapTo_fkfduh_k$ = function (targetValue, $cont) {
    return this.mutatorMutex_1.mutate$default_1b3qou_k$(null, Animatable$snapTo$slambda_0(this, targetValue, null), $cont, 1, null);
  };
  Animatable.prototype.stop_srpkcx_k$ = function ($cont) {
    return this.mutatorMutex_1.mutate$default_1b3qou_k$(null, Animatable$stop$slambda_0(this, null), $cont, 1, null);
  };
  Animatable.prototype.asState_c4y001_k$ = function () {
    return this.internalState_1;
  };
  Animatable.$metadata$ = classMeta('Animatable');
  function Animatable_0(initialValue, visibilityThreshold) {
    var tmp = get_VectorConverter_2(FloatCompanionObject_getInstance());
    return Animatable_init_$Create$(initialValue, tmp, visibilityThreshold, null, 8, null);
  }
  function Animatable$default(initialValue, visibilityThreshold, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      Spring_getInstance();
      visibilityThreshold = 0.01;
    }
    return Animatable_0(initialValue, visibilityThreshold);
  }
  function isRunning$factory() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_okmtn0_k$();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function isRunning$factory_0() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_okmtn0_k$();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function targetValue$factory() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetValue_kq6mfd_k$();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  function targetValue$factory_0() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetValue_kq6mfd_k$();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  function get_defaultAnimation() {
    init_properties_AnimateAsState_kt_rhsuys();
    return defaultAnimation;
  }
  var defaultAnimation;
  function get_dpDefaultSpring() {
    init_properties_AnimateAsState_kt_rhsuys();
    return dpDefaultSpring;
  }
  var dpDefaultSpring;
  function get_sizeDefaultSpring() {
    init_properties_AnimateAsState_kt_rhsuys();
    return sizeDefaultSpring;
  }
  var sizeDefaultSpring;
  function get_offsetDefaultSpring() {
    init_properties_AnimateAsState_kt_rhsuys();
    return offsetDefaultSpring;
  }
  var offsetDefaultSpring;
  function get_rectDefaultSpring() {
    init_properties_AnimateAsState_kt_rhsuys();
    return rectDefaultSpring;
  }
  var rectDefaultSpring;
  function get_intDefaultSpring() {
    init_properties_AnimateAsState_kt_rhsuys();
    return intDefaultSpring;
  }
  var intDefaultSpring;
  function get_intOffsetDefaultSpring() {
    init_properties_AnimateAsState_kt_rhsuys();
    return intOffsetDefaultSpring;
  }
  var intOffsetDefaultSpring;
  function get_intSizeDefaultSpring() {
    init_properties_AnimateAsState_kt_rhsuys();
    return intSizeDefaultSpring;
  }
  var intSizeDefaultSpring;
  function animateFloatAsState$composable(targetValue, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    init_properties_AnimateAsState_kt_rhsuys();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = {_v: visibilityThreshold};
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-298361457);
    sourceInformation($composer_0, 'C(animateFloatAsState$composable)P(3!1,4,2)74@3321L173:AnimateAsState.kt#pdpnli');
    if (!(($default & 2) === 0))
      animationSpec_0 = get_defaultAnimation();
    if (!(($default & 4) === 0)) {
      visibilityThreshold_0._v = 0.01;
    }
    if (!(($default & 8) === 0))
      label_0 = 'FloatAnimation';
    if (!(($default & 16) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-298361457, $changed, -1, 'androidx.compose.animation.core.animateFloatAsState$composable (AnimateAsState.kt:61)');
    }
    $composer_0.startReplaceableGroup_rp6air_k$(-143091586);
    sourceInformation($composer_0, '70@3173L83');
    var tmp;
    if (animationSpec_0 === get_defaultAnimation()) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = visibilityThreshold_0._v;
      var tmp1_remember$composable = $composer_0;
      var tmp2_remember$composable = 14 & $changed >> 6;
      var $composer_1 = tmp1_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.changed_ga7h3f_k$(tmp0_remember$composable);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().Empty_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.core.animateFloatAsState$composable.<anonymous>' call
        tmp$ret$0 = spring$default(0.0, 0.0, visibilityThreshold_0._v, 3, null);
        var value = tmp$ret$0;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      tmp = tmp$ret$4;
    } else {
      tmp = animationSpec_0;
    }
    var tmp1_group = tmp;
    $composer_0.endReplaceableGroup_er37p7_k$();
    var resolvedAnimSpec = tmp1_group;
    var tmp0_0 = animateValueAsState$composable(targetValue, get_VectorConverter_2(FloatCompanionObject_getInstance()), resolvedAnimSpec, visibilityThreshold_0._v, label_0, finishedListener_0, $composer_0, 14 & $changed | 7168 & $changed << 3 | 57344 & $changed << 3 | 458752 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function animateValueAsState$composable(targetValue, typeConverter, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    init_properties_AnimateAsState_kt_rhsuys();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = {_v: visibilityThreshold};
    var label_0 = {_v: label};
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1860487620);
    sourceInformation($composer_0, 'C(animateValueAsState$composable)P(3,4!1,5,2)392@17984L21,398@18161L79,399@18261L38,400@18338L339,411@18696L42,412@18743L55,415@18803L721:AnimateAsState.kt#pdpnli');
    if (!(($default & 4) === 0)) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_1, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance().Empty_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
        tmp$ret$0 = spring$default(0.0, 0.0, null, 7, null);
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
      animationSpec_0 = tmp$ret$4;
    }
    if (!(($default & 8) === 0)) {
      visibilityThreshold_0._v = null;
    }
    if (!(($default & 16) === 0)) {
      label_0._v = 'ValueAnimation';
    }
    if (!(($default & 32) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1860487620, $changed, -1, 'androidx.compose.animation.core.animateValueAsState$composable (AnimateAsState.kt:389)');
    }
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp1_remember$composable = $composer_0;
    var $composer_2 = tmp1_remember$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(547886695);
    sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_2;
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (false ? true : tmp0_let_0 === Companion_getInstance().Empty_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
      tmp$ret$5 = new Animatable(targetValue, typeConverter, visibilityThreshold_0._v, label_0._v);
      var value_0 = tmp$ret$5;
      tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    tmp$ret$6 = tmp_1;
    tmp$ret$7 = tmp$ret$6;
    var tmp_2 = tmp$ret$7;
    tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    var tmp0_0 = tmp$ret$8;
    $composer_2.endReplaceableGroup_er37p7_k$();
    tmp$ret$9 = tmp0_0;
    var animatable = tmp$ret$9;
    var listener$delegate = rememberUpdatedState$composable(finishedListener_0, $composer_0, 14 & $changed >> 15);
    var tmp$ret$11;
    // Inline function 'kotlin.run' call
    var tmp2_run = animationSpec_0;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$10;
    // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
    var tmp_3;
    var tmp_4;
    var tmp_5;
    if (!(visibilityThreshold_0._v == null)) {
      tmp_5 = tmp2_run instanceof SpringSpec;
    } else {
      tmp_5 = false;
    }
    if (tmp_5) {
      tmp_4 = !equals(tmp2_run.visibilityThreshold_1, visibilityThreshold_0._v);
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = spring(tmp2_run.dampingRatio_1, tmp2_run.stiffness_1, visibilityThreshold_0._v);
    } else {
      tmp_3 = tmp2_run;
    }
    var tmp0_return = tmp_3;
    tmp$ret$10 = tmp0_return;
    tmp$ret$11 = tmp$ret$10;
    var animSpec$delegate = rememberUpdatedState$composable(tmp$ret$11, $composer_0, 0);
    var tmp$ret$16;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp3_remember$composable = $composer_0;
    var $composer_3 = tmp3_remember$composable;
    $composer_3.startReplaceableGroup_rp6air_k$(547886695);
    sourceInformation($composer_3, 'C(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$15;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_1 = $composer_3;
    var tmp$ret$14;
    // Inline function 'kotlin.let' call
    var tmp0_let_1 = tmp1_cache_1.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$13;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_6;
    if (false ? true : tmp0_let_1 === Companion_getInstance().Empty_1) {
      var tmp$ret$12;
      // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
      Factory_getInstance();
      tmp$ret$12 = Channel$default(-1, null, null, 6, null);
      var value_1 = tmp$ret$12;
      tmp1_cache_1.updateRememberedValue_l1colo_k$(value_1);
      tmp_6 = value_1;
    } else {
      tmp_6 = tmp0_let_1;
    }
    tmp$ret$13 = tmp_6;
    tmp$ret$14 = tmp$ret$13;
    var tmp_7 = tmp$ret$14;
    tmp$ret$15 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
    var tmp0_1 = tmp$ret$15;
    $composer_3.endReplaceableGroup_er37p7_k$();
    tmp$ret$16 = tmp0_1;
    var channel = tmp$ret$16;
    SideEffect$composable(animateValueAsState$composable$lambda_1(channel, targetValue), $composer_0, 0);
    LaunchedEffect$composable(channel, animateValueAsState$composable$slambda_0(channel, animatable, animSpec$delegate, listener$delegate, null), $composer_0, 0);
    var tmp0_2 = animatable.asState_c4y001_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_2;
  }
  function animateValueAsState$composable$lambda($listener$delegate) {
    init_properties_AnimateAsState_kt_rhsuys();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('listener', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $listener$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function animateValueAsState$composable$lambda_0($animSpec$delegate) {
    init_properties_AnimateAsState_kt_rhsuys();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('animSpec', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $animSpec$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function animateValueAsState$composable$lambda_1($channel, $targetValue) {
    return function () {
      $channel.trySend_3hclq4_k$($targetValue);
      return Unit_getInstance();
    };
  }
  function animateValueAsState$composable$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.$newTarget_1 = $newTarget;
    this.$animatable_1 = $animatable;
    this.$animSpec$delegate_1 = $animSpec$delegate;
    this.$listener$delegate_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  animateValueAsState$composable$slambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  animateValueAsState$composable$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  animateValueAsState$composable$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            if (!equals(this.$newTarget_1, this.$animatable_1.get_targetValue_kq6mfd_k$())) {
              this.state_1 = 1;
              var tmp_0 = animateValueAsState$composable$lambda_0(this.$animSpec$delegate_1);
              suspendResult = this.$animatable_1.animateTo$default_mbptcf_k$(this.$newTarget_1, tmp_0, null, null, this, 12, null);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.state_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            ;
            var tmp0_safe_receiver = animateValueAsState$composable$lambda(this.$listener$delegate_1);
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver(this.$animatable_1.get_value_j01efc_k$());
            ;
            this.state_1 = 2;
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 3) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  animateValueAsState$composable$slambda$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new animateValueAsState$composable$slambda$slambda(this.$newTarget_1, this.$animatable_1, this.$animSpec$delegate_1, this.$listener$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  animateValueAsState$composable$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  animateValueAsState$composable$slambda$slambda.$metadata$ = classMeta('animateValueAsState$composable$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function animateValueAsState$composable$slambda$slambda_0($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$composable$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function animateValueAsState$composable$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.$channel_1 = $channel;
    this.$animatable_1 = $animatable;
    this.$animSpec$delegate_1 = $animSpec$delegate;
    this.$listener$delegate_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  animateValueAsState$composable$slambda.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  animateValueAsState$composable$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  animateValueAsState$composable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            this.tmp0_iterator0__1 = this.$channel_1.iterator_jk1svi_k$();
            this.state_1 = 1;
            continue $sm;
          case 1:
            this.state_1 = 2;
            suspendResult = this.tmp0_iterator0__1.hasNext_4tgia2_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.state_1 = 3;
              continue $sm;
            }

            var target = this.tmp0_iterator0__1.next_20eer_k$();
            var tmp1_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.$channel_1.tryReceive_5r5v2p_k$());
            var newTarget = tmp1_elvis_lhs == null ? target : tmp1_elvis_lhs;
            launch$default(this.$this$LaunchedEffect_1, null, null, animateValueAsState$composable$slambda$slambda_0(newTarget, this.$animatable_1, this.$animSpec$delegate_1, this.$listener$delegate_1, null), 3, null);
            ;
            this.state_1 = 1;
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
  animateValueAsState$composable$slambda.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new animateValueAsState$composable$slambda(this.$channel_1, this.$animatable_1, this.$animSpec$delegate_1, this.$listener$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  animateValueAsState$composable$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  animateValueAsState$composable$slambda.$metadata$ = classMeta('animateValueAsState$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function animateValueAsState$composable$slambda_0($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$composable$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_AnimateAsState_kt_bq3rmo;
  function init_properties_AnimateAsState_kt_rhsuys() {
    if (properties_initialized_AnimateAsState_kt_bq3rmo) {
    } else {
      properties_initialized_AnimateAsState_kt_bq3rmo = true;
      defaultAnimation = spring$default(0.0, 0.0, null, 7, null);
      dpDefaultSpring = spring$default(0.0, 0.0, new Dp(get_VisibilityThreshold(Companion_getInstance_0())), 3, null);
      sizeDefaultSpring = spring$default(0.0, 0.0, new Size(get_VisibilityThreshold_0(Companion_getInstance_1())), 3, null);
      offsetDefaultSpring = spring$default(0.0, 0.0, new Offset(get_VisibilityThreshold_1(Companion_getInstance_2())), 3, null);
      rectDefaultSpring = spring$default(0.0, 0.0, get_VisibilityThreshold_2(Companion_getInstance_3()), 3, null);
      intDefaultSpring = spring$default(0.0, 0.0, get_VisibilityThreshold_3(IntCompanionObject_getInstance()), 3, null);
      intOffsetDefaultSpring = spring$default(0.0, 0.0, new IntOffset(get_VisibilityThreshold_4(Companion_getInstance_4())), 3, null);
      intSizeDefaultSpring = spring$default(0.0, 0.0, new IntSize(get_VisibilityThreshold_5(Companion_getInstance_5())), 3, null);
    }
  }
  function get_MillisToNanos() {
    return MillisToNanos;
  }
  var MillisToNanos;
  function TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0))
      initialVelocityVector = null;
    TargetBasedAnimation.call($this, animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $mask0, $marker) {
    return TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $mask0, $marker, Object.create(TargetBasedAnimation.prototype));
  }
  function TargetBasedAnimation_init_$Init$_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this) {
    TargetBasedAnimation.call($this, animationSpec.vectorize_drxx6b_k$(typeConverter), typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    return TargetBasedAnimation_init_$Init$_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, Object.create(TargetBasedAnimation.prototype));
  }
  function TargetBasedAnimation_init_$Init$_1(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $mask0, $marker, $this) {
    if (!(($mask0 & 16) === 0))
      initialVelocityVector = null;
    TargetBasedAnimation_init_$Init$_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$_1(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $mask0, $marker) {
    return TargetBasedAnimation_init_$Init$_1(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $mask0, $marker, Object.create(TargetBasedAnimation.prototype));
  }
  function _get_initialValueVector__9wx1np($this) {
    return $this.initialValueVector_1;
  }
  function _get_targetValueVector__kndtym($this) {
    return $this.targetValueVector_1;
  }
  function _get_initialVelocityVector__y1hbhp($this) {
    return $this.initialVelocityVector_1;
  }
  function _get_endVelocity__lqkp53($this) {
    return $this.endVelocity_1;
  }
  function TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    this.animationSpec_1 = animationSpec;
    this.typeConverter_1 = typeConverter;
    this.initialValue_1 = initialValue;
    this.targetValue_1 = targetValue;
    this.initialValueVector_1 = this.typeConverter_1.get_convertToVector_s594l4_k$()(this.initialValue_1);
    this.targetValueVector_1 = this.typeConverter_1.get_convertToVector_s594l4_k$()(this.targetValue_1);
    var tmp = this;
    var tmp0_safe_receiver = initialVelocityVector;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : copy_0(tmp0_safe_receiver);
    tmp.initialVelocityVector_1 = tmp1_elvis_lhs == null ? newInstance(this.typeConverter_1.get_convertToVector_s594l4_k$()(this.initialValue_1)) : tmp1_elvis_lhs;
    this.durationNanos_1 = this.animationSpec_1.getDurationNanos_62az16_k$(this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
    this.endVelocity_1 = this.animationSpec_1.getEndVelocity_2fbr89_k$(this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
    this.$stable_1 = 0;
  }
  TargetBasedAnimation.prototype.get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  TargetBasedAnimation.prototype.get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  TargetBasedAnimation.prototype.get_initialValue_2disdm_k$ = function () {
    return this.initialValue_1;
  };
  TargetBasedAnimation.prototype.get_targetValue_kq6mfd_k$ = function () {
    return this.targetValue_1;
  };
  TargetBasedAnimation.prototype.get_isInfinite_uffwnt_k$ = function () {
    return this.animationSpec_1.get_isInfinite_uffwnt_k$();
  };
  TargetBasedAnimation.prototype.getValueFromNanos_iwi8kk_k$ = function (playTimeNanos) {
    var tmp;
    if (!this.isFinishedFromNanos_uhkxvh_k$(playTimeNanos)) {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = this.animationSpec_1.getValueFromNanos_274kdl_k$(playTimeNanos, this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>' call
      var inductionVariable = 0;
      var last = tmp0_let.get_size_woubt6_k$();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.check' call
          var tmp0_check = !isNaN_0(tmp0_let.get_fkrdnv_k$(i));
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_check) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>.<anonymous>' call
            tmp$ret$0 = 'AnimationVector cannot contain a NaN. ' + tmp0_let + '. Animation: ' + this + ',' + (' playTimeNanos: ' + toString(playTimeNanos));
            var message = tmp$ret$0;
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
         while (inductionVariable < last);
      tmp$ret$1 = this.typeConverter_1.get_convertFromVector_kmewon_k$()(tmp0_let);
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    } else {
      tmp = this.targetValue_1;
    }
    return tmp;
  };
  TargetBasedAnimation.prototype.get_durationNanos_ub5cy_k$ = function () {
    return this.durationNanos_1;
  };
  TargetBasedAnimation.prototype.getVelocityVectorFromNanos_n1b66h_k$ = function (playTimeNanos) {
    var tmp;
    if (!this.isFinishedFromNanos_uhkxvh_k$(playTimeNanos)) {
      tmp = this.animationSpec_1.getVelocityFromNanos_2nsq5r_k$(playTimeNanos, this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
    } else {
      tmp = this.endVelocity_1;
    }
    return tmp;
  };
  TargetBasedAnimation.prototype.toString = function () {
    return 'TargetBasedAnimation: ' + this.initialValue_1 + ' -> ' + this.targetValue_1 + ',' + ('initial velocity: ' + this.initialVelocityVector_1 + ', duration: ' + toString(get_durationMillis(this)) + ' ms,') + ('animationSpec: ' + this.animationSpec_1);
  };
  TargetBasedAnimation.$metadata$ = classMeta('TargetBasedAnimation', [Animation]);
  function TargetBasedAnimation_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocity) {
    return TargetBasedAnimation_init_$Create$_0(animationSpec, typeConverter, initialValue, targetValue, typeConverter.get_convertToVector_s594l4_k$()(initialVelocity));
  }
  function _get_animationSpec__ffhwa6($this) {
    return $this.animationSpec_1;
  }
  function _get_initialValueVector__9wx1np_0($this) {
    return $this.initialValueVector_1;
  }
  function _get_endVelocity__lqkp53_0($this) {
    return $this.endVelocity_1;
  }
  function DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, $this) {
    DecayAnimation.call($this, animationSpec.vectorize_drxx6b_k$(typeConverter), typeConverter, initialValue, initialVelocityVector);
    return $this;
  }
  function DecayAnimation_init_$Create$(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    return DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, Object.create(DecayAnimation.prototype));
  }
  function DecayAnimation_init_$Init$_0(animationSpec, typeConverter, initialValue, initialVelocity, $this) {
    DecayAnimation.call($this, animationSpec.vectorize_drxx6b_k$(typeConverter), typeConverter, initialValue, typeConverter.get_convertToVector_s594l4_k$()(initialVelocity));
    return $this;
  }
  function DecayAnimation_init_$Create$_0(animationSpec, typeConverter, initialValue, initialVelocity) {
    return DecayAnimation_init_$Init$_0(animationSpec, typeConverter, initialValue, initialVelocity, Object.create(DecayAnimation.prototype));
  }
  function DecayAnimation(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    this.animationSpec_1 = animationSpec;
    this.typeConverter_1 = typeConverter;
    this.initialValue_1 = initialValue;
    this.initialValueVector_1 = this.typeConverter_1.get_convertToVector_s594l4_k$()(this.initialValue_1);
    this.initialVelocityVector_1 = copy_0(initialVelocityVector);
    this.targetValue_1 = this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.animationSpec_1.getTargetValue_ftaxp4_k$(this.initialValueVector_1, initialVelocityVector));
    this.isInfinite_1 = false;
    this.durationNanos_1 = this.animationSpec_1.getDurationNanos_m6hrcz_k$(this.initialValueVector_1, initialVelocityVector);
    this.endVelocity_1 = copy_0(this.animationSpec_1.getVelocityFromNanos_hyp13a_k$(this.durationNanos_1, this.initialValueVector_1, initialVelocityVector));
    var inductionVariable = 0;
    var last = this.endVelocity_1.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.endVelocity_1.set_8gccym_k$(i, coerceIn(this.endVelocity_1.get_fkrdnv_k$(i), -this.animationSpec_1.get_absVelocityThreshold_wsgqo5_k$(), this.animationSpec_1.get_absVelocityThreshold_wsgqo5_k$()));
      }
       while (inductionVariable < last);
    this.$stable_1 = 0;
  }
  DecayAnimation.prototype.get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  DecayAnimation.prototype.get_initialValue_2disdm_k$ = function () {
    return this.initialValue_1;
  };
  DecayAnimation.prototype.get_initialVelocityVector_xb37p7_k$ = function () {
    return this.initialVelocityVector_1;
  };
  DecayAnimation.prototype.get_targetValue_kq6mfd_k$ = function () {
    return this.targetValue_1;
  };
  DecayAnimation.prototype.get_durationNanos_ub5cy_k$ = function () {
    return this.durationNanos_1;
  };
  DecayAnimation.prototype.get_isInfinite_uffwnt_k$ = function () {
    return this.isInfinite_1;
  };
  DecayAnimation.prototype.getValueFromNanos_iwi8kk_k$ = function (playTimeNanos) {
    if (!this.isFinishedFromNanos_uhkxvh_k$(playTimeNanos)) {
      return this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.animationSpec_1.getValueFromNanos_g1htci_k$(playTimeNanos, this.initialValueVector_1, this.initialVelocityVector_1));
    } else {
      return this.targetValue_1;
    }
  };
  DecayAnimation.prototype.getVelocityVectorFromNanos_n1b66h_k$ = function (playTimeNanos) {
    if (!this.isFinishedFromNanos_uhkxvh_k$(playTimeNanos)) {
      return this.animationSpec_1.getVelocityFromNanos_hyp13a_k$(playTimeNanos, this.initialValueVector_1, this.initialVelocityVector_1);
    } else {
      return this.endVelocity_1;
    }
  };
  DecayAnimation.$metadata$ = classMeta('DecayAnimation', [Animation]);
  function Animation() {
  }
  Animation.$metadata$ = interfaceMeta('Animation');
  function get_durationMillis(_this__u8e3s4) {
    return _this__u8e3s4.get_durationNanos_ub5cy_k$().div_9s1fi3_k$(new Long(1000000, 0));
  }
  var AnimationEndReason_BoundReached_instance;
  var AnimationEndReason_Finished_instance;
  function values() {
    return [AnimationEndReason_BoundReached_getInstance(), AnimationEndReason_Finished_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'BoundReached':
        return AnimationEndReason_BoundReached_getInstance();
      case 'Finished':
        return AnimationEndReason_Finished_getInstance();
      default:
        AnimationEndReason_initEntries();
        THROW_ISE();
        break;
    }
  }
  var AnimationEndReason_entriesInitialized;
  function AnimationEndReason_initEntries() {
    if (AnimationEndReason_entriesInitialized)
      return Unit_getInstance();
    AnimationEndReason_entriesInitialized = true;
    AnimationEndReason_BoundReached_instance = new AnimationEndReason('BoundReached', 0);
    AnimationEndReason_Finished_instance = new AnimationEndReason('Finished', 1);
  }
  function AnimationEndReason(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  AnimationEndReason.$metadata$ = classMeta('AnimationEndReason', undefined, undefined, undefined, undefined, Enum.prototype);
  function AnimationEndReason_BoundReached_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_BoundReached_instance;
  }
  function AnimationEndReason_Finished_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_Finished_instance;
  }
  function SpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      Spring_getInstance();
      dampingRatio = 1.0;
    }
    if (!(($mask0 & 2) === 0)) {
      Spring_getInstance();
      stiffness = 1500.0;
    }
    if (!(($mask0 & 4) === 0))
      visibilityThreshold = null;
    SpringSpec.call($this, dampingRatio, stiffness, visibilityThreshold);
    return $this;
  }
  function SpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker) {
    return SpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker, Object.create(SpringSpec.prototype));
  }
  function SpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    this.dampingRatio_1 = dampingRatio;
    this.stiffness_1 = stiffness;
    this.visibilityThreshold_1 = visibilityThreshold;
  }
  SpringSpec.prototype.get_dampingRatio_syjss2_k$ = function () {
    return this.dampingRatio_1;
  };
  SpringSpec.prototype.get_stiffness_dt2sgm_k$ = function () {
    return this.stiffness_1;
  };
  SpringSpec.prototype.get_visibilityThreshold_qtbbow_k$ = function () {
    return this.visibilityThreshold_1;
  };
  SpringSpec.prototype.vectorize_drxx6b_k$ = function (converter) {
    return VectorizedSpringSpec_init_$Create$(this.dampingRatio_1, this.stiffness_1, convert(converter, this.visibilityThreshold_1));
  };
  SpringSpec.prototype.equals = function (other) {
    var tmp;
    if (other instanceof SpringSpec) {
      tmp = (other.dampingRatio_1 === this.dampingRatio_1 ? other.stiffness_1 === this.stiffness_1 : false) ? equals(other.visibilityThreshold_1, this.visibilityThreshold_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  SpringSpec.prototype.hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.visibilityThreshold_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(imul(tmp$ret$0, 31) + getNumberHashCode(this.dampingRatio_1) | 0, 31) + getNumberHashCode(this.stiffness_1) | 0;
  };
  SpringSpec.$metadata$ = classMeta('SpringSpec', [FiniteAnimationSpec]);
  function spring(dampingRatio, stiffness, visibilityThreshold) {
    return new SpringSpec(dampingRatio, stiffness, visibilityThreshold);
  }
  function spring$default(dampingRatio, stiffness, visibilityThreshold, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Spring_getInstance();
      dampingRatio = 1.0;
    }
    if (!(($mask0 & 2) === 0)) {
      Spring_getInstance();
      stiffness = 1500.0;
    }
    if (!(($mask0 & 4) === 0))
      visibilityThreshold = null;
    return spring(dampingRatio, stiffness, visibilityThreshold);
  }
  function FiniteAnimationSpec() {
  }
  FiniteAnimationSpec.$metadata$ = interfaceMeta('FiniteAnimationSpec', [AnimationSpec]);
  function convert(_this__u8e3s4, data) {
    if (data == null) {
      return null;
    } else {
      return _this__u8e3s4.get_convertToVector_s594l4_k$()(data);
    }
  }
  function AnimationSpec() {
  }
  AnimationSpec.$metadata$ = interfaceMeta('AnimationSpec');
  function InfiniteRepeatableSpec_init_$Init$(animation, repeatMode, initialStartOffset, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      repeatMode = RepeatMode_Restart_getInstance();
    if (!(($mask0 & 4) === 0)) {
      initialStartOffset = _StartOffset___init__impl__615djw_1(0, null, 2, null);
    }
    InfiniteRepeatableSpec.call($this, animation, repeatMode, initialStartOffset);
    return $this;
  }
  function InfiniteRepeatableSpec_init_$Create$(animation, repeatMode, initialStartOffset, $mask0, $marker) {
    return InfiniteRepeatableSpec_init_$Init$(animation, repeatMode, initialStartOffset, $mask0, $marker, Object.create(InfiniteRepeatableSpec.prototype));
  }
  function InfiniteRepeatableSpec_init_$Init$_0(animation, repeatMode, $this) {
    InfiniteRepeatableSpec.call($this, animation, repeatMode, _StartOffset___init__impl__615djw_1(0, null, 2, null));
    return $this;
  }
  function InfiniteRepeatableSpec_init_$Create$_0(animation, repeatMode) {
    return InfiniteRepeatableSpec_init_$Init$_0(animation, repeatMode, Object.create(InfiniteRepeatableSpec.prototype));
  }
  function InfiniteRepeatableSpec_init_$Init$_1(animation, repeatMode, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      repeatMode = RepeatMode_Restart_getInstance();
    InfiniteRepeatableSpec_init_$Init$_0(animation, repeatMode, $this);
    return $this;
  }
  function InfiniteRepeatableSpec_init_$Create$_1(animation, repeatMode, $mask0, $marker) {
    return InfiniteRepeatableSpec_init_$Init$_1(animation, repeatMode, $mask0, $marker, Object.create(InfiniteRepeatableSpec.prototype));
  }
  function InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset) {
    this.animation_1 = animation;
    this.repeatMode_1 = repeatMode;
    this.initialStartOffset_1 = initialStartOffset;
    this.$stable_1 = 8;
  }
  InfiniteRepeatableSpec.prototype.get_animation_r0gd0b_k$ = function () {
    return this.animation_1;
  };
  InfiniteRepeatableSpec.prototype.get_repeatMode_zzqu1_k$ = function () {
    return this.repeatMode_1;
  };
  InfiniteRepeatableSpec.prototype.get_initialStartOffset_qichmx_k$ = function () {
    return this.initialStartOffset_1;
  };
  InfiniteRepeatableSpec.prototype.vectorize_drxx6b_k$ = function (converter) {
    return new VectorizedInfiniteRepeatableSpec(this.animation_1.vectorize_drxx6b_k$(converter), this.repeatMode_1, this.initialStartOffset_1);
  };
  InfiniteRepeatableSpec.prototype.equals = function (other) {
    var tmp;
    if (other instanceof InfiniteRepeatableSpec) {
      tmp = (equals(other.animation_1, this.animation_1) ? other.repeatMode_1.equals(this.repeatMode_1) : false) ? equals(other.initialStartOffset_1, this.initialStartOffset_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  InfiniteRepeatableSpec.prototype.hashCode = function () {
    return imul(imul(hashCode(this.animation_1), 31) + this.repeatMode_1.hashCode() | 0, 31) + StartOffset__hashCode_impl_ith3z7(this.initialStartOffset_1) | 0;
  };
  InfiniteRepeatableSpec.$metadata$ = classMeta('InfiniteRepeatableSpec', [AnimationSpec]);
  function infiniteRepeatable(animation, repeatMode, initialStartOffset) {
    return new InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset);
  }
  function infiniteRepeatable$default(animation, repeatMode, initialStartOffset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      repeatMode = RepeatMode_Restart_getInstance();
    if (!(($mask0 & 4) === 0)) {
      initialStartOffset = _StartOffset___init__impl__615djw_1(0, null, 2, null);
    }
    return infiniteRepeatable(animation, repeatMode, initialStartOffset);
  }
  function KeyframeEntity_init_$Init$(value, easing, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      easing = get_LinearEasing();
    KeyframeEntity.call($this, value, easing);
    return $this;
  }
  function KeyframeEntity_init_$Create$(value, easing, $mask0, $marker) {
    return KeyframeEntity_init_$Init$(value, easing, $mask0, $marker, Object.create(KeyframeEntity.prototype));
  }
  function KeyframesSpecConfig() {
    var tmp = this;
    AnimationConstants_getInstance();
    tmp.durationMillis_1 = 300;
    this.delayMillis_1 = 0;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp_0.keyframes_1 = tmp$ret$0;
    this.$stable_1 = 8;
  }
  KeyframesSpecConfig.prototype.set_durationMillis_cr89wn_k$ = function (_set____db54di) {
    this.durationMillis_1 = _set____db54di;
  };
  KeyframesSpecConfig.prototype.get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  KeyframesSpecConfig.prototype.set_delayMillis_ej80f0_k$ = function (_set____db54di) {
    this.delayMillis_1 = _set____db54di;
  };
  KeyframesSpecConfig.prototype.get_delayMillis_d968n4_k$ = function () {
    return this.delayMillis_1;
  };
  KeyframesSpecConfig.prototype.get_keyframes_fes9no_k$ = function () {
    return this.keyframes_1;
  };
  KeyframesSpecConfig.prototype.at_xtu82d_k$ = function (_this__u8e3s4, timeStamp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = KeyframeEntity_init_$Create$(_this__u8e3s4, null, 2, null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.KeyframesSpecConfig.at.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.keyframes_1;
    tmp0_set.put_3mhbri_k$(timeStamp, tmp0_also);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  KeyframesSpecConfig.prototype.atFraction_jabxl6_k$ = function (_this__u8e3s4, fraction) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = this.durationMillis_1 * fraction;
    tmp$ret$0 = roundToInt(tmp0_roundToInt);
    return this.at_xtu82d_k$(_this__u8e3s4, tmp$ret$0);
  };
  KeyframesSpecConfig.prototype.with_2m2fr_k$ = function (_this__u8e3s4, easing) {
    _this__u8e3s4.easing_1 = easing;
  };
  KeyframesSpecConfig.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof KeyframesSpecConfig) {
      tmp_1 = this.delayMillis_1 === other.delayMillis_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.durationMillis_1 === other.durationMillis_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.keyframes_1, other.keyframes_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  KeyframesSpecConfig.prototype.hashCode = function () {
    return imul(imul(this.durationMillis_1, 31) + this.delayMillis_1 | 0, 31) + hashCode(this.keyframes_1) | 0;
  };
  KeyframesSpecConfig.$metadata$ = classMeta('KeyframesSpecConfig');
  function KeyframeEntity(value, easing) {
    this.value_1 = value;
    this.easing_1 = easing;
    this.$stable_1 = 8;
  }
  KeyframeEntity.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  KeyframeEntity.prototype.set_easing_6vawkr_k$ = function (_set____db54di) {
    this.easing_1 = _set____db54di;
  };
  KeyframeEntity.prototype.get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  KeyframeEntity.prototype.toPair_5tscgy_k$ = function (convertToVector) {
    return to(convertToVector(this.value_1), this.easing_1);
  };
  KeyframeEntity.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof KeyframeEntity) {
      tmp_0 = equals(other.value_1, this.value_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.easing_1, this.easing_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  KeyframeEntity.prototype.hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.value_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(tmp$ret$0, 31) + hashCode(this.easing_1) | 0;
  };
  KeyframeEntity.$metadata$ = classMeta('KeyframeEntity');
  function KeyframesSpec(config) {
    this.config_1 = config;
  }
  KeyframesSpec.prototype.get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  KeyframesSpec.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KeyframesSpec) {
      tmp = this.config_1.equals(other.config_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  KeyframesSpec.prototype.hashCode = function () {
    return this.config_1.hashCode();
  };
  KeyframesSpec.prototype.vectorize_drxx6b_k$ = function (converter) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp0_mapValues = this.config_1.keyframes_1;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp1_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp0_mapValues.get_size_woubt6_k$()));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = tmp0_mapValues.get_entries_p20ztl_k$();
    var tmp0_iterator = tmp0_associateByTo.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$0 = element.get_key_18j28a_k$();
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'androidx.compose.animation.core.KeyframesSpec.vectorize.<anonymous>' call
      tmp$ret$1 = element.get_value_j01efc_k$().toPair_5tscgy_k$(converter.get_convertToVector_s594l4_k$());
      tmp1_mapValuesTo.put_3mhbri_k$(tmp, tmp$ret$1);
    }
    tmp$ret$2 = tmp1_mapValuesTo;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    return new VectorizedKeyframesSpec(tmp$ret$4, this.config_1.durationMillis_1, this.config_1.delayMillis_1);
  };
  KeyframesSpec.$metadata$ = classMeta('KeyframesSpec', [DurationBasedAnimationSpec]);
  function keyframes(init) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new KeyframesSpecConfig();
    // Inline function 'kotlin.contracts.contract' call
    init(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return new KeyframesSpec(tmp$ret$0);
  }
  function TweenSpec_init_$Init$(durationMillis, delay, easing, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      AnimationConstants_getInstance();
      durationMillis = 300;
    }
    if (!(($mask0 & 2) === 0))
      delay = 0;
    if (!(($mask0 & 4) === 0))
      easing = get_FastOutSlowInEasing();
    TweenSpec.call($this, durationMillis, delay, easing);
    return $this;
  }
  function TweenSpec_init_$Create$(durationMillis, delay, easing, $mask0, $marker) {
    return TweenSpec_init_$Init$(durationMillis, delay, easing, $mask0, $marker, Object.create(TweenSpec.prototype));
  }
  function TweenSpec(durationMillis, delay, easing) {
    this.durationMillis_1 = durationMillis;
    this.delay_1 = delay;
    this.easing_1 = easing;
  }
  TweenSpec.prototype.get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  TweenSpec.prototype.get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  TweenSpec.prototype.get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  TweenSpec.prototype.vectorize_drxx6b_k$ = function (converter) {
    return new VectorizedTweenSpec(this.durationMillis_1, this.delay_1, this.easing_1);
  };
  TweenSpec.prototype.equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.durationMillis_1 === this.durationMillis_1 ? other.delay_1 === this.delay_1 : false) ? equals(other.easing_1, this.easing_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  TweenSpec.prototype.hashCode = function () {
    return imul(imul(this.durationMillis_1, 31) + hashCode(this.easing_1) | 0, 31) + this.delay_1 | 0;
  };
  TweenSpec.$metadata$ = classMeta('TweenSpec', [DurationBasedAnimationSpec]);
  function tween(durationMillis, delayMillis, easing) {
    return new TweenSpec(durationMillis, delayMillis, easing);
  }
  function tween$default(durationMillis, delayMillis, easing, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      AnimationConstants_getInstance();
      durationMillis = 300;
    }
    if (!(($mask0 & 2) === 0))
      delayMillis = 0;
    if (!(($mask0 & 4) === 0))
      easing = get_FastOutSlowInEasing();
    return tween(durationMillis, delayMillis, easing);
  }
  function DurationBasedAnimationSpec() {
  }
  DurationBasedAnimationSpec.$metadata$ = interfaceMeta('DurationBasedAnimationSpec', [FiniteAnimationSpec]);
  var RepeatMode_Restart_instance;
  var RepeatMode_Reverse_instance;
  function values_0() {
    return [RepeatMode_Restart_getInstance(), RepeatMode_Reverse_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Restart':
        return RepeatMode_Restart_getInstance();
      case 'Reverse':
        return RepeatMode_Reverse_getInstance();
      default:
        RepeatMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var RepeatMode_entriesInitialized;
  function RepeatMode_initEntries() {
    if (RepeatMode_entriesInitialized)
      return Unit_getInstance();
    RepeatMode_entriesInitialized = true;
    RepeatMode_Restart_instance = new RepeatMode('Restart', 0);
    RepeatMode_Reverse_instance = new RepeatMode('Reverse', 1);
  }
  function RepeatMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  RepeatMode.$metadata$ = classMeta('RepeatMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function _StartOffset___init__impl__615djw(value) {
    return value;
  }
  function _StartOffset___get_value__impl__8sikig($this) {
    return $this;
  }
  function _StartOffset___init__impl__615djw_0(offsetMillis, offsetType) {
    var tmp = _StartOffset___init__impl__615djw(toLong(imul(offsetMillis, _StartOffsetType___get_value__impl__i1pfem(offsetType))));
    return tmp;
  }
  function _StartOffset___init__impl__615djw_1(offsetMillis, offsetType, $mask0, $marker) {
    if (!(($mask0 & 2) === 0))
      offsetType = Companion_getInstance_8().Delay_1;
    var tmp = _StartOffset___init__impl__615djw_0(offsetMillis, offsetType);
    return tmp;
  }
  function _StartOffset___get_offsetMillis__impl__x95ylg($this) {
    return abs(_StartOffset___get_value__impl__8sikig($this).toInt_1tsl84_k$());
  }
  function _StartOffset___get_offsetType__impl__92sljs($this) {
    var tmp0_subject = _StartOffset___get_value__impl__8sikig($this).compareTo_n4fqi2_k$(new Long(0, 0)) > 0;
    var tmp;
    switch (tmp0_subject) {
      case true:
        tmp = Companion_getInstance_8().FastForward_1;
        break;
      case false:
        tmp = Companion_getInstance_8().Delay_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function StartOffset__toString_impl_2xosto($this) {
    return 'StartOffset(value=' + toString($this) + ')';
  }
  function StartOffset__hashCode_impl_ith3z7($this) {
    return $this.hashCode();
  }
  function StartOffset__equals_impl_58sbp5($this, other) {
    if (!(other instanceof StartOffset))
      return false;
    var tmp0_other_with_cast = other instanceof StartOffset ? other.value_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function StartOffset(value) {
    this.value_1 = value;
  }
  StartOffset.prototype.toString = function () {
    return StartOffset__toString_impl_2xosto(this.value_1);
  };
  StartOffset.prototype.hashCode = function () {
    return StartOffset__hashCode_impl_ith3z7(this.value_1);
  };
  StartOffset.prototype.equals = function (other) {
    return StartOffset__equals_impl_58sbp5(this.value_1, other);
  };
  StartOffset.$metadata$ = classMeta('StartOffset');
  function AnimationConstants() {
    AnimationConstants_instance = this;
    this.DefaultDurationMillis_1 = 300;
    this.UnspecifiedTime_1 = new Long(0, -2147483648);
    this.$stable_1 = 0;
  }
  AnimationConstants.prototype.get_DefaultDurationMillis_kgwre6_k$ = function () {
    return this.DefaultDurationMillis_1;
  };
  AnimationConstants.prototype.get_UnspecifiedTime_gpclet_k$ = function () {
    return this.UnspecifiedTime_1;
  };
  AnimationConstants.$metadata$ = objectMeta('AnimationConstants');
  var AnimationConstants_instance;
  function AnimationConstants_getInstance() {
    if (AnimationConstants_instance == null)
      new AnimationConstants();
    return AnimationConstants_instance;
  }
  function _StartOffsetType___init__impl__g1ur7a(value) {
    return value;
  }
  function _StartOffsetType___get_value__impl__i1pfem($this) {
    return $this;
  }
  function Companion() {
    Companion_instance = this;
    this.Delay_1 = _StartOffsetType___init__impl__g1ur7a(-1);
    this.FastForward_1 = _StartOffsetType___init__impl__g1ur7a(1);
  }
  Companion.prototype.get_Delay_a11btv_k$ = function () {
    return this.Delay_1;
  };
  Companion.prototype.get_FastForward_who9pl_k$ = function () {
    return this.FastForward_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_8() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function StartOffsetType__toString_impl_3r5832($this) {
    return 'StartOffsetType(value=' + $this + ')';
  }
  function StartOffsetType__hashCode_impl_pib4vx($this) {
    return $this;
  }
  function StartOffsetType__equals_impl_hnkckf($this, other) {
    if (!(other instanceof StartOffsetType))
      return false;
    var tmp0_other_with_cast = other instanceof StartOffsetType ? other.value_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function StartOffsetType(value) {
    Companion_getInstance_8();
    this.value_1 = value;
  }
  StartOffsetType.prototype.toString = function () {
    return StartOffsetType__toString_impl_3r5832(this.value_1);
  };
  StartOffsetType.prototype.hashCode = function () {
    return StartOffsetType__hashCode_impl_pib4vx(this.value_1);
  };
  StartOffsetType.prototype.equals = function (other) {
    return StartOffsetType__equals_impl_hnkckf(this.value_1, other);
  };
  StartOffsetType.$metadata$ = classMeta('StartOffsetType');
  function RepeatMode_Restart_getInstance() {
    RepeatMode_initEntries();
    return RepeatMode_Restart_instance;
  }
  function RepeatMode_Reverse_getInstance() {
    RepeatMode_initEntries();
    return RepeatMode_Reverse_instance;
  }
  function AnimationState_init_$Init$(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      initialVelocityVector = null;
    if (!(($mask0 & 8) === 0)) {
      AnimationConstants_getInstance();
      lastFrameTimeNanos = new Long(0, -2147483648);
    }
    if (!(($mask0 & 16) === 0)) {
      AnimationConstants_getInstance();
      finishedTimeNanos = new Long(0, -2147483648);
    }
    if (!(($mask0 & 32) === 0))
      isRunning = false;
    AnimationState.call($this, typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
    return $this;
  }
  function AnimationState_init_$Create$(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning, $mask0, $marker) {
    return AnimationState_init_$Init$(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning, $mask0, $marker, Object.create(AnimationState.prototype));
  }
  function AnimationState(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    this.typeConverter_1 = typeConverter;
    var tmp = this;
    tmp.value$delegate_1 = mutableStateOf$default(initialValue, null, 2, null);
    var tmp_0 = this;
    var tmp0_safe_receiver = initialVelocityVector;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : copy_0(tmp0_safe_receiver);
    tmp_0.velocityVector_1 = tmp1_elvis_lhs == null ? createZeroVectorFrom(this.typeConverter_1, initialValue) : tmp1_elvis_lhs;
    this.lastFrameTimeNanos_1 = lastFrameTimeNanos;
    this.finishedTimeNanos_1 = finishedTimeNanos;
    this.isRunning_1 = isRunning;
    this.$stable_1 = 0;
  }
  AnimationState.prototype.get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  AnimationState.prototype.set_value_rnwamw_k$ = function (_set____db54di) {
    var tmp0_setValue = value$factory();
    return this.value$delegate_1.set_value_rnwamw_k$(_set____db54di);
  };
  AnimationState.prototype.get_value_j01efc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = value$factory_0();
    tmp$ret$0 = this.value$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  AnimationState.prototype.set_velocityVector_mao3b1_k$ = function (_set____db54di) {
    this.velocityVector_1 = _set____db54di;
  };
  AnimationState.prototype.get_velocityVector_v3jmo9_k$ = function () {
    return this.velocityVector_1;
  };
  AnimationState.prototype.set_lastFrameTimeNanos_c9sxzl_k$ = function (_set____db54di) {
    this.lastFrameTimeNanos_1 = _set____db54di;
  };
  AnimationState.prototype.get_lastFrameTimeNanos_3aprno_k$ = function () {
    return this.lastFrameTimeNanos_1;
  };
  AnimationState.prototype.set_finishedTimeNanos_iw0ihw_k$ = function (_set____db54di) {
    this.finishedTimeNanos_1 = _set____db54di;
  };
  AnimationState.prototype.get_finishedTimeNanos_t5ryif_k$ = function () {
    return this.finishedTimeNanos_1;
  };
  AnimationState.prototype.set_isRunning_tw1q35_k$ = function (_set____db54di) {
    this.isRunning_1 = _set____db54di;
  };
  AnimationState.prototype.get_isRunning_okmtn0_k$ = function () {
    return this.isRunning_1;
  };
  AnimationState.prototype.get_velocity_3hqvmu_k$ = function () {
    return this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.velocityVector_1);
  };
  AnimationState.prototype.toString = function () {
    return 'AnimationState(' + ('value=' + this.get_value_j01efc_k$() + ', ') + ('velocity=' + this.get_velocity_3hqvmu_k$() + ', ') + ('isRunning=' + this.isRunning_1 + ', ') + ('lastFrameTimeNanos=' + toString(this.lastFrameTimeNanos_1) + ', ') + ('finishedTimeNanos=' + toString(this.finishedTimeNanos_1)) + ')';
  };
  AnimationState.$metadata$ = classMeta('AnimationState', [State]);
  function copy(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    return new AnimationState(_this__u8e3s4.typeConverter_1, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function copy$default(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = _this__u8e3s4.get_value_j01efc_k$();
    if (!(($mask0 & 2) === 0))
      velocityVector = copy_0(_this__u8e3s4.velocityVector_1);
    if (!(($mask0 & 4) === 0))
      lastFrameTimeNanos = _this__u8e3s4.lastFrameTimeNanos_1;
    if (!(($mask0 & 8) === 0))
      finishedTimeNanos = _this__u8e3s4.finishedTimeNanos_1;
    if (!(($mask0 & 16) === 0))
      isRunning = _this__u8e3s4.isRunning_1;
    return copy(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function _get_onCancel__fbp26m($this) {
    return $this.onCancel_1;
  }
  function AnimationScope(initialValue, typeConverter, initialVelocityVector, lastFrameTimeNanos, targetValue, startTimeNanos, isRunning, onCancel) {
    this.typeConverter_1 = typeConverter;
    this.targetValue_1 = targetValue;
    this.startTimeNanos_1 = startTimeNanos;
    this.onCancel_1 = onCancel;
    var tmp = this;
    tmp.value$delegate_1 = mutableStateOf$default(initialValue, null, 2, null);
    this.velocityVector_1 = copy_0(initialVelocityVector);
    this.lastFrameTimeNanos_1 = lastFrameTimeNanos;
    var tmp_0 = this;
    AnimationConstants_getInstance();
    tmp_0.finishedTimeNanos_1 = new Long(0, -2147483648);
    var tmp_1 = this;
    tmp_1.isRunning$delegate_1 = mutableStateOf$default(isRunning, null, 2, null);
    this.$stable_1 = 8;
  }
  AnimationScope.prototype.get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  AnimationScope.prototype.get_targetValue_kq6mfd_k$ = function () {
    return this.targetValue_1;
  };
  AnimationScope.prototype.get_startTimeNanos_ru5em1_k$ = function () {
    return this.startTimeNanos_1;
  };
  AnimationScope.prototype.set_value_rnwamw_k$ = function (_set____db54di) {
    var tmp0_setValue = value$factory_1();
    return this.value$delegate_1.set_value_rnwamw_k$(_set____db54di);
  };
  AnimationScope.prototype.get_value_j01efc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = value$factory_2();
    tmp$ret$0 = this.value$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  AnimationScope.prototype.set_velocityVector_mao3b1_k$ = function (_set____db54di) {
    this.velocityVector_1 = _set____db54di;
  };
  AnimationScope.prototype.get_velocityVector_v3jmo9_k$ = function () {
    return this.velocityVector_1;
  };
  AnimationScope.prototype.set_lastFrameTimeNanos_c9sxzl_k$ = function (_set____db54di) {
    this.lastFrameTimeNanos_1 = _set____db54di;
  };
  AnimationScope.prototype.get_lastFrameTimeNanos_3aprno_k$ = function () {
    return this.lastFrameTimeNanos_1;
  };
  AnimationScope.prototype.set_finishedTimeNanos_iw0ihw_k$ = function (_set____db54di) {
    this.finishedTimeNanos_1 = _set____db54di;
  };
  AnimationScope.prototype.get_finishedTimeNanos_t5ryif_k$ = function () {
    return this.finishedTimeNanos_1;
  };
  AnimationScope.prototype.set_isRunning_tw1q35_k$ = function (_set____db54di) {
    var tmp0_setValue = isRunning$factory_1();
    return this.isRunning$delegate_1.set_value_rnwamw_k$(_set____db54di);
  };
  AnimationScope.prototype.get_isRunning_okmtn0_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isRunning$factory_2();
    tmp$ret$0 = this.isRunning$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  AnimationScope.prototype.get_velocity_3hqvmu_k$ = function () {
    return this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.velocityVector_1);
  };
  AnimationScope.prototype.cancelAnimation_ickco7_k$ = function () {
    this.set_isRunning_tw1q35_k$(false);
    this.onCancel_1();
  };
  AnimationScope.prototype.toAnimationState_sex3co_k$ = function () {
    return new AnimationState(this.typeConverter_1, this.get_value_j01efc_k$(), this.velocityVector_1, this.lastFrameTimeNanos_1, this.finishedTimeNanos_1, this.get_isRunning_okmtn0_k$());
  };
  AnimationScope.$metadata$ = classMeta('AnimationScope');
  function createZeroVectorFrom(_this__u8e3s4, value) {
    return newInstance(_this__u8e3s4.get_convertToVector_s594l4_k$()(value));
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_rnwamw_k$(value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_rnwamw_k$(value);
    });
  }
  function value$factory_1() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_rnwamw_k$(value);
    });
  }
  function value$factory_2() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_rnwamw_k$(value);
    });
  }
  function isRunning$factory_1() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_okmtn0_k$();
    }, function (receiver, value) {
      return receiver.set_isRunning_tw1q35_k$(value);
    });
  }
  function isRunning$factory_2() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_okmtn0_k$();
    }, function (receiver, value) {
      return receiver.set_isRunning_tw1q35_k$(value);
    });
  }
  function AnimationVector() {
    this.$stable_1 = 0;
  }
  AnimationVector.$metadata$ = classMeta('AnimationVector');
  function AnimationVector1D(initVal) {
    AnimationVector.call(this);
    this.value_1 = initVal;
    this.size_1 = 1;
    this.$stable_2 = 8;
  }
  AnimationVector1D.prototype.set_value_j3l5mx_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  AnimationVector1D.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  AnimationVector1D.prototype.reset_5tn5dq_k$ = function () {
    this.value_1 = 0.0;
  };
  AnimationVector1D.prototype.newVector_8o1gcd_k$ = function () {
    return new AnimationVector1D(0.0);
  };
  AnimationVector1D.prototype.get_fkrdnv_k$ = function (index) {
    if (index === 0) {
      return this.value_1;
    } else {
      return 0.0;
    }
  };
  AnimationVector1D.prototype.set_8gccym_k$ = function (index, value) {
    if (index === 0) {
      this.value_1 = value;
    }
  };
  AnimationVector1D.prototype.get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  AnimationVector1D.prototype.toString = function () {
    return 'AnimationVector1D: value = ' + this.value_1;
  };
  AnimationVector1D.prototype.equals = function (other) {
    var tmp;
    if (other instanceof AnimationVector1D) {
      tmp = other.value_1 === this.value_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  AnimationVector1D.prototype.hashCode = function () {
    return getNumberHashCode(this.value_1);
  };
  AnimationVector1D.$metadata$ = classMeta('AnimationVector1D', undefined, undefined, undefined, undefined, AnimationVector.prototype);
  function AnimationVector2D(v1, v2) {
    AnimationVector.call(this);
    this.v1__1 = v1;
    this.v2__1 = v2;
    this.size_1 = 2;
    this.$stable_2 = 8;
  }
  AnimationVector2D.prototype.set_v1_x1j3fp_k$ = function (_set____db54di) {
    this.v1__1 = _set____db54di;
  };
  AnimationVector2D.prototype.get_v1_kntnng_k$ = function () {
    return this.v1__1;
  };
  AnimationVector2D.prototype.set_v2_x89n0k_k$ = function (_set____db54di) {
    this.v2__1 = _set____db54di;
  };
  AnimationVector2D.prototype.get_v2_kntnnf_k$ = function () {
    return this.v2__1;
  };
  AnimationVector2D.prototype.reset_5tn5dq_k$ = function () {
    this.v1__1 = 0.0;
    this.v2__1 = 0.0;
  };
  AnimationVector2D.prototype.newVector_8o1gcd_k$ = function () {
    return new AnimationVector2D(0.0, 0.0);
  };
  AnimationVector2D.prototype.get_fkrdnv_k$ = function (index) {
    var tmp0_subject = index;
    switch (tmp0_subject) {
      case 0:
        return this.v1__1;
      case 1:
        return this.v2__1;
      default:
        return 0.0;
    }
  };
  AnimationVector2D.prototype.set_8gccym_k$ = function (index, value) {
    var tmp0_subject = index;
    if (tmp0_subject === 0)
      this.v1__1 = value;
    else if (tmp0_subject === 1)
      this.v2__1 = value;
  };
  AnimationVector2D.prototype.get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  AnimationVector2D.prototype.toString = function () {
    return 'AnimationVector2D: v1 = ' + this.v1__1 + ', v2 = ' + this.v2__1;
  };
  AnimationVector2D.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AnimationVector2D) {
      tmp_0 = other.v1__1 === this.v1__1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.v2__1 === this.v2__1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  AnimationVector2D.prototype.hashCode = function () {
    return imul(getNumberHashCode(this.v1__1), 31) + getNumberHashCode(this.v2__1) | 0;
  };
  AnimationVector2D.$metadata$ = classMeta('AnimationVector2D', undefined, undefined, undefined, undefined, AnimationVector.prototype);
  function AnimationVector3D(v1, v2, v3) {
    AnimationVector.call(this);
    this.v1__1 = v1;
    this.v2__1 = v2;
    this.v3__1 = v3;
    this.size_1 = 3;
    this.$stable_2 = 8;
  }
  AnimationVector3D.prototype.set_v1_x1j3fp_k$ = function (_set____db54di) {
    this.v1__1 = _set____db54di;
  };
  AnimationVector3D.prototype.get_v1_kntnng_k$ = function () {
    return this.v1__1;
  };
  AnimationVector3D.prototype.set_v2_x89n0k_k$ = function (_set____db54di) {
    this.v2__1 = _set____db54di;
  };
  AnimationVector3D.prototype.get_v2_kntnnf_k$ = function () {
    return this.v2__1;
  };
  AnimationVector3D.prototype.set_v3_xf06lf_k$ = function (_set____db54di) {
    this.v3__1 = _set____db54di;
  };
  AnimationVector3D.prototype.get_v3_kntnne_k$ = function () {
    return this.v3__1;
  };
  AnimationVector3D.prototype.reset_5tn5dq_k$ = function () {
    this.v1__1 = 0.0;
    this.v2__1 = 0.0;
    this.v3__1 = 0.0;
  };
  AnimationVector3D.prototype.newVector_8o1gcd_k$ = function () {
    return new AnimationVector3D(0.0, 0.0, 0.0);
  };
  AnimationVector3D.prototype.get_fkrdnv_k$ = function (index) {
    var tmp0_subject = index;
    switch (tmp0_subject) {
      case 0:
        return this.v1__1;
      case 1:
        return this.v2__1;
      case 2:
        return this.v3__1;
      default:
        return 0.0;
    }
  };
  AnimationVector3D.prototype.set_8gccym_k$ = function (index, value) {
    var tmp0_subject = index;
    switch (tmp0_subject) {
      case 0:
        this.v1__1 = value;
        break;
      case 1:
        this.v2__1 = value;
        break;
      case 2:
        this.v3__1 = value;
        break;
    }
  };
  AnimationVector3D.prototype.get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  AnimationVector3D.prototype.toString = function () {
    return 'AnimationVector3D: v1 = ' + this.v1__1 + ', v2 = ' + this.v2__1 + ', v3 = ' + this.v3__1;
  };
  AnimationVector3D.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof AnimationVector3D) {
      tmp_1 = other.v1__1 === this.v1__1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.v2__1 === this.v2__1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.v3__1 === this.v3__1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  AnimationVector3D.prototype.hashCode = function () {
    return imul(imul(getNumberHashCode(this.v1__1), 31) + getNumberHashCode(this.v2__1) | 0, 31) + getNumberHashCode(this.v3__1) | 0;
  };
  AnimationVector3D.$metadata$ = classMeta('AnimationVector3D', undefined, undefined, undefined, undefined, AnimationVector.prototype);
  function AnimationVector4D(v1, v2, v3, v4) {
    AnimationVector.call(this);
    this.v1__1 = v1;
    this.v2__1 = v2;
    this.v3__1 = v3;
    this.v4__1 = v4;
    this.size_1 = 4;
    this.$stable_2 = 8;
  }
  AnimationVector4D.prototype.set_v1_x1j3fp_k$ = function (_set____db54di) {
    this.v1__1 = _set____db54di;
  };
  AnimationVector4D.prototype.get_v1_kntnng_k$ = function () {
    return this.v1__1;
  };
  AnimationVector4D.prototype.set_v2_x89n0k_k$ = function (_set____db54di) {
    this.v2__1 = _set____db54di;
  };
  AnimationVector4D.prototype.get_v2_kntnnf_k$ = function () {
    return this.v2__1;
  };
  AnimationVector4D.prototype.set_v3_xf06lf_k$ = function (_set____db54di) {
    this.v3__1 = _set____db54di;
  };
  AnimationVector4D.prototype.get_v3_kntnne_k$ = function () {
    return this.v3__1;
  };
  AnimationVector4D.prototype.set_v4_xlqq6a_k$ = function (_set____db54di) {
    this.v4__1 = _set____db54di;
  };
  AnimationVector4D.prototype.get_v4_kntnnd_k$ = function () {
    return this.v4__1;
  };
  AnimationVector4D.prototype.reset_5tn5dq_k$ = function () {
    this.v1__1 = 0.0;
    this.v2__1 = 0.0;
    this.v3__1 = 0.0;
    this.v4__1 = 0.0;
  };
  AnimationVector4D.prototype.newVector_8o1gcd_k$ = function () {
    return new AnimationVector4D(0.0, 0.0, 0.0, 0.0);
  };
  AnimationVector4D.prototype.get_fkrdnv_k$ = function (index) {
    var tmp0_subject = index;
    switch (tmp0_subject) {
      case 0:
        return this.v1__1;
      case 1:
        return this.v2__1;
      case 2:
        return this.v3__1;
      case 3:
        return this.v4__1;
      default:
        return 0.0;
    }
  };
  AnimationVector4D.prototype.set_8gccym_k$ = function (index, value) {
    var tmp0_subject = index;
    switch (tmp0_subject) {
      case 0:
        this.v1__1 = value;
        break;
      case 1:
        this.v2__1 = value;
        break;
      case 2:
        this.v3__1 = value;
        break;
      case 3:
        this.v4__1 = value;
        break;
    }
  };
  AnimationVector4D.prototype.get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  AnimationVector4D.prototype.toString = function () {
    return 'AnimationVector4D: v1 = ' + this.v1__1 + ', v2 = ' + this.v2__1 + ', v3 = ' + this.v3__1 + ', v4 = ' + this.v4__1;
  };
  AnimationVector4D.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof AnimationVector4D) {
      tmp_2 = other.v1__1 === this.v1__1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.v2__1 === this.v2__1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.v3__1 === this.v3__1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.v4__1 === this.v4__1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  AnimationVector4D.prototype.hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.v1__1), 31) + getNumberHashCode(this.v2__1) | 0, 31) + getNumberHashCode(this.v3__1) | 0, 31) + getNumberHashCode(this.v4__1) | 0;
  };
  AnimationVector4D.$metadata$ = classMeta('AnimationVector4D', undefined, undefined, undefined, undefined, AnimationVector.prototype);
  function newInstance(_this__u8e3s4) {
    var tmp = _this__u8e3s4.newVector_8o1gcd_k$();
    return tmp instanceof AnimationVector ? tmp : THROW_CCE();
  }
  function AnimationVector_0(v1) {
    return new AnimationVector1D(v1);
  }
  function copy_0(_this__u8e3s4) {
    var newVector = newInstance(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.set_8gccym_k$(i, _this__u8e3s4.get_fkrdnv_k$(i));
      }
       while (inductionVariable < last);
    return newVector;
  }
  function copyFrom(_this__u8e3s4, source) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.set_8gccym_k$(i, source.get_fkrdnv_k$(i));
      }
       while (inductionVariable < last);
  }
  function _set__real__ba78tk($this, _set____db54di) {
    $this._real_1 = _set____db54di;
  }
  function _get__real__kqx7nw($this) {
    return $this._real_1;
  }
  function _set__imaginary__jvragz($this, _set____db54di) {
    $this._imaginary_1 = _set____db54di;
  }
  function _get__imaginary__yxzvm7($this) {
    return $this._imaginary_1;
  }
  function component1($this) {
    return $this._real_1;
  }
  function component2($this) {
    return $this._imaginary_1;
  }
  function ComplexDouble(_real, _imaginary) {
    this._real_1 = _real;
    this._imaginary_1 = _imaginary;
  }
  ComplexDouble.prototype.get_real_wotl9j_k$ = function () {
    return this._real_1;
  };
  ComplexDouble.prototype.get_imaginary_5xnno0_k$ = function () {
    return this._imaginary_1;
  };
  ComplexDouble.prototype.plus_kiyahl_k$ = function (other) {
    var tmp0_this = this;
    tmp0_this._real_1 = tmp0_this._real_1 + other;
    return this;
  };
  ComplexDouble.prototype.plus_nuauig_k$ = function (other) {
    var tmp0_this = this;
    tmp0_this._real_1 = tmp0_this._real_1 + other.get_real_wotl9j_k$();
    var tmp1_this = this;
    tmp1_this._imaginary_1 = tmp1_this._imaginary_1 + other.get_imaginary_5xnno0_k$();
    return this;
  };
  ComplexDouble.prototype.minus_80anzj_k$ = function (other) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var tmp0_plus = -other;
    var tmp0_this = this;
    tmp0_this._real_1 = tmp0_this._real_1 + tmp0_plus;
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  ComplexDouble.prototype.minus_yakhfy_k$ = function (other) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.unaryMinus' call
    var tmp0_this = other;
    tmp0_this._real_1 = tmp0_this._real_1 * -1;
    var tmp1_this = other;
    tmp1_this._imaginary_1 = tmp1_this._imaginary_1 * -1;
    tmp$ret$0 = other;
    var tmp0_plus = tmp$ret$0;
    var tmp0_this_0 = this;
    tmp0_this_0._real_1 = tmp0_this_0._real_1 + tmp0_plus.get_real_wotl9j_k$();
    var tmp1_this_0 = this;
    tmp1_this_0._imaginary_1 = tmp1_this_0._imaginary_1 + tmp0_plus.get_imaginary_5xnno0_k$();
    tmp$ret$1 = this;
    return tmp$ret$1;
  };
  ComplexDouble.prototype.times_myh3yd_k$ = function (other) {
    var tmp0_this = this;
    tmp0_this._real_1 = tmp0_this._real_1 * other;
    var tmp1_this = this;
    tmp1_this._imaginary_1 = tmp1_this._imaginary_1 * other;
    return this;
  };
  ComplexDouble.prototype.times_jx7hb0_k$ = function (other) {
    this._real_1 = this.get_real_wotl9j_k$() * other.get_real_wotl9j_k$() - this.get_imaginary_5xnno0_k$() * other.get_imaginary_5xnno0_k$();
    this._imaginary_1 = this.get_real_wotl9j_k$() * other.get_imaginary_5xnno0_k$() + other.get_real_wotl9j_k$() * this.get_imaginary_5xnno0_k$();
    return this;
  };
  ComplexDouble.prototype.unaryMinus_6uz0qp_k$ = function () {
    var tmp0_this = this;
    tmp0_this._real_1 = tmp0_this._real_1 * -1;
    var tmp1_this = this;
    tmp1_this._imaginary_1 = tmp1_this._imaginary_1 * -1;
    return this;
  };
  ComplexDouble.prototype.div_hn31ow_k$ = function (other) {
    var tmp0_this = this;
    tmp0_this._real_1 = tmp0_this._real_1 / other;
    var tmp1_this = this;
    tmp1_this._imaginary_1 = tmp1_this._imaginary_1 / other;
    return this;
  };
  ComplexDouble.prototype.copy_fws33n_k$ = function (_real, _imaginary) {
    return new ComplexDouble(_real, _imaginary);
  };
  ComplexDouble.prototype.copy$default_l1hfaq_k$ = function (_real, _imaginary, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      _real = this._real_1;
    if (!(($mask0 & 2) === 0))
      _imaginary = this._imaginary_1;
    return this.copy_fws33n_k$(_real, _imaginary);
  };
  ComplexDouble.prototype.toString = function () {
    return 'ComplexDouble(_real=' + this._real_1 + ', _imaginary=' + this._imaginary_1 + ')';
  };
  ComplexDouble.prototype.hashCode = function () {
    var result = getNumberHashCode(this._real_1);
    result = imul(result, 31) + getNumberHashCode(this._imaginary_1) | 0;
    return result;
  };
  ComplexDouble.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComplexDouble))
      return false;
    var tmp0_other_with_cast = other instanceof ComplexDouble ? other : THROW_CCE();
    if (!equals(this._real_1, tmp0_other_with_cast._real_1))
      return false;
    if (!equals(this._imaginary_1, tmp0_other_with_cast._imaginary_1))
      return false;
    return true;
  };
  ComplexDouble.$metadata$ = classMeta('ComplexDouble');
  function complexQuadraticFormula(a, b, c) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.div' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.animation.core.plus' call
    var tmp0_plus = -b;
    var tmp1_plus = complexSqrt(b * b - 4.0 * a * c);
    var tmp$ret$0;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var tmp0_this = tmp1_plus;
    tmp0_this._real_1 = tmp0_this._real_1 + tmp0_plus;
    tmp$ret$0 = tmp1_plus;
    tmp$ret$1 = tmp$ret$0;
    var tmp2_div = tmp$ret$1;
    var tmp3_div = 2.0 * a;
    var tmp0_this_0 = tmp2_div;
    tmp0_this_0._real_1 = tmp0_this_0._real_1 / tmp3_div;
    var tmp1_this = tmp2_div;
    tmp1_this._imaginary_1 = tmp1_this._imaginary_1 / tmp3_div;
    tmp$ret$2 = tmp2_div;
    var firstRoot = tmp$ret$2;
    var tmp$ret$7;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.div' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.animation.core.minus' call
    var tmp5_minus = -b;
    var tmp6_minus = complexSqrt(b * b - 4.0 * a * c);
    var tmp$ret$5;
    // Inline function 'androidx.compose.animation.core.plus' call
    var tmp$ret$3;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.unaryMinus' call
    var tmp0_this_1 = tmp6_minus;
    tmp0_this_1._real_1 = tmp0_this_1._real_1 * -1;
    var tmp1_this_0 = tmp6_minus;
    tmp1_this_0._imaginary_1 = tmp1_this_0._imaginary_1 * -1;
    tmp$ret$3 = tmp6_minus;
    var tmp4_plus = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var tmp0_this_2 = tmp4_plus;
    tmp0_this_2._real_1 = tmp0_this_2._real_1 + tmp5_minus;
    tmp$ret$4 = tmp4_plus;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    var tmp7_div = tmp$ret$6;
    var tmp8_div = 2.0 * a;
    var tmp0_this_3 = tmp7_div;
    tmp0_this_3._real_1 = tmp0_this_3._real_1 / tmp8_div;
    var tmp1_this_1 = tmp7_div;
    tmp1_this_1._imaginary_1 = tmp1_this_1._imaginary_1 / tmp8_div;
    tmp$ret$7 = tmp7_div;
    var secondRoot = tmp$ret$7;
    return to(firstRoot, secondRoot);
  }
  function plus(_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var tmp0_this = other;
    tmp0_this._real_1 = tmp0_this._real_1 + _this__u8e3s4;
    tmp$ret$0 = other;
    return tmp$ret$0;
  }
  function complexSqrt(num) {
    var tmp;
    if (num < 0.0) {
      var tmp$ret$1;
      // Inline function 'kotlin.math.sqrt' call
      var tmp$ret$0;
      // Inline function 'kotlin.math.abs' call
      tmp$ret$0 = Math.abs(num);
      var tmp0_sqrt = tmp$ret$0;
      tmp$ret$1 = Math.sqrt(tmp0_sqrt);
      tmp = new ComplexDouble(0.0, tmp$ret$1);
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.math.sqrt' call
      tmp$ret$2 = Math.sqrt(num);
      tmp = new ComplexDouble(tmp$ret$2, 0.0);
    }
    return tmp;
  }
  function minus(_this__u8e3s4, other) {
    var tmp$ret$2;
    // Inline function 'androidx.compose.animation.core.plus' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.unaryMinus' call
    var tmp0_this = other;
    tmp0_this._real_1 = tmp0_this._real_1 * -1;
    var tmp1_this = other;
    tmp1_this._imaginary_1 = tmp1_this._imaginary_1 * -1;
    tmp$ret$0 = other;
    var tmp0_plus = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var tmp0_this_0 = tmp0_plus;
    tmp0_this_0._real_1 = tmp0_this_0._real_1 + _this__u8e3s4;
    tmp$ret$1 = tmp0_plus;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function DecayAnimationSpec() {
  }
  DecayAnimationSpec.$metadata$ = interfaceMeta('DecayAnimationSpec');
  function calculateTargetValue(_this__u8e3s4, initialValue, initialVelocity) {
    var vectorizedSpec = _this__u8e3s4.vectorize_drxx6b_k$(get_VectorConverter_2(FloatCompanionObject_getInstance()));
    var targetVector = vectorizedSpec.getTargetValue_ftaxp4_k$(AnimationVector_0(initialValue), AnimationVector_0(initialVelocity));
    return targetVector.value_1;
  }
  function exponentialDecay(frictionMultiplier, absVelocityThreshold) {
    return generateDecayAnimationSpec(new FloatExponentialDecaySpec(frictionMultiplier, absVelocityThreshold));
  }
  function exponentialDecay$default(frictionMultiplier, absVelocityThreshold, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      frictionMultiplier = 1.0;
    if (!(($mask0 & 2) === 0))
      absVelocityThreshold = 0.1;
    return exponentialDecay(frictionMultiplier, absVelocityThreshold);
  }
  function generateDecayAnimationSpec(_this__u8e3s4) {
    return new DecayAnimationSpecImpl(_this__u8e3s4);
  }
  function _get_floatDecaySpec__7mcolu($this) {
    return $this.floatDecaySpec_1;
  }
  function DecayAnimationSpecImpl(floatDecaySpec) {
    this.floatDecaySpec_1 = floatDecaySpec;
  }
  DecayAnimationSpecImpl.prototype.vectorize_drxx6b_k$ = function (typeConverter) {
    return new VectorizedFloatDecaySpec(this.floatDecaySpec_1);
  };
  DecayAnimationSpecImpl.$metadata$ = classMeta('DecayAnimationSpecImpl', [DecayAnimationSpec]);
  function _set_valueVector__dppd9t($this, _set____db54di) {
    $this.valueVector_1 = _set____db54di;
  }
  function _get_valueVector__r10idf($this) {
    var tmp = $this.valueVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _set_velocityVector__vm30d3($this, _set____db54di) {
    $this.velocityVector_1 = _set____db54di;
  }
  function _get_velocityVector__dvxlkl($this) {
    var tmp = $this.velocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _set_targetVector__nu6z6r($this, _set____db54di) {
    $this.targetVector_1 = _set____db54di;
  }
  function _get_targetVector__vn6c89($this) {
    var tmp = $this.targetVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('targetVector');
    }
  }
  function VectorizedFloatDecaySpec(floatDecaySpec) {
    this.floatDecaySpec_1 = floatDecaySpec;
    this.absVelocityThreshold_1 = this.floatDecaySpec_1.get_absVelocityThreshold_wsgqo5_k$();
  }
  VectorizedFloatDecaySpec.prototype.get_floatDecaySpec_206nc2_k$ = function () {
    return this.floatDecaySpec_1;
  };
  VectorizedFloatDecaySpec.prototype.get_absVelocityThreshold_wsgqo5_k$ = function () {
    return this.absVelocityThreshold_1;
  };
  VectorizedFloatDecaySpec.prototype.getValueFromNanos_g1htci_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.valueVector_1 == null)) {
      this.valueVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf(this).get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf(this).set_8gccym_k$(i, this.floatDecaySpec_1.getValueFromNanos_tm63l0_k$(playTimeNanos, initialValue.get_fkrdnv_k$(i), initialVelocity.get_fkrdnv_k$(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf(this);
  };
  VectorizedFloatDecaySpec.prototype.getDurationNanos_m6hrcz_k$ = function (initialValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    if (!!(this.velocityVector_1 == null)) {
      this.velocityVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp0_maxOf = maxDuration;
        var tmp1_maxOf = this.floatDecaySpec_1.getDurationNanos_kuw0r9_k$(initialValue.get_fkrdnv_k$(i), initialVelocity.get_fkrdnv_k$(i));
        tmp$ret$0 = tmp0_maxOf.compareTo_n4fqi2_k$(tmp1_maxOf) >= 0 ? tmp0_maxOf : tmp1_maxOf;
        maxDuration = tmp$ret$0;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  VectorizedFloatDecaySpec.prototype.getVelocityFromNanos_hyp13a_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.velocityVector_1 == null)) {
      this.velocityVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl(this).set_8gccym_k$(i, this.floatDecaySpec_1.getVelocityFromNanos_1qiryk_k$(playTimeNanos, initialValue.get_fkrdnv_k$(i), initialVelocity.get_fkrdnv_k$(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl(this);
  };
  VectorizedFloatDecaySpec.prototype.getTargetValue_ftaxp4_k$ = function (initialValue, initialVelocity) {
    if (!!(this.targetVector_1 == null)) {
      this.targetVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_targetVector__vn6c89(this).get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_targetVector__vn6c89(this).set_8gccym_k$(i, this.floatDecaySpec_1.getTargetValue_xs6ane_k$(initialValue.get_fkrdnv_k$(i), initialVelocity.get_fkrdnv_k$(i)));
      }
       while (inductionVariable < last);
    return _get_targetVector__vn6c89(this);
  };
  VectorizedFloatDecaySpec.$metadata$ = classMeta('VectorizedFloatDecaySpec', [VectorizedDecayAnimationSpec]);
  function get_FastOutSlowInEasing() {
    init_properties_Easing_kt_phvjv3();
    return FastOutSlowInEasing;
  }
  var FastOutSlowInEasing;
  function get_LinearOutSlowInEasing() {
    init_properties_Easing_kt_phvjv3();
    return LinearOutSlowInEasing;
  }
  var LinearOutSlowInEasing;
  function get_FastOutLinearInEasing() {
    init_properties_Easing_kt_phvjv3();
    return FastOutLinearInEasing;
  }
  var FastOutLinearInEasing;
  function get_LinearEasing() {
    init_properties_Easing_kt_phvjv3();
    return LinearEasing;
  }
  var LinearEasing;
  function Easing() {
  }
  Easing.$metadata$ = interfaceMeta('Easing');
  function _get_a__7mlogg($this) {
    return $this.a_1;
  }
  function _get_b__7mlohb($this) {
    return $this.b_1;
  }
  function _get_c__7mloi6($this) {
    return $this.c_1;
  }
  function _get_d__7mloj1($this) {
    return $this.d_1;
  }
  function evaluateCubic($this, a, b, m) {
    return 3 * a * (1 - m) * (1 - m) * m + 3 * b * (1 - m) * m * m + m * m * m;
  }
  function CubicBezierEasing(a, b, c, d) {
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
    // Inline function 'kotlin.require' call
    var tmp0_require = ((!isNaN_0(this.a_1) ? !isNaN_0(this.b_1) : false) ? !isNaN_0(this.c_1) : false) ? !isNaN_0(this.d_1) : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.core.CubicBezierEasing.<anonymous>' call
      tmp$ret$0 = 'Parameters to CubicBezierEasing cannot be NaN. Actual parameters are: ' + this.a_1 + ', ' + this.b_1 + ', ' + this.c_1 + ', ' + this.d_1 + '.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  CubicBezierEasing.prototype.transform_mzom4i_k$ = function (fraction) {
    if (fraction > 0.0 ? fraction < 1.0 : false) {
      var start = 0.0;
      var end = 1.0;
      while (true) {
        var midpoint = (start + end) / 2;
        var estimate = evaluateCubic(this, this.a_1, this.c_1, midpoint);
        var tmp$ret$0;
        // Inline function 'kotlin.math.absoluteValue' call
        var tmp0__get_absoluteValue__nukmtt = fraction - estimate;
        tmp$ret$0 = Math.abs(tmp0__get_absoluteValue__nukmtt);
        if (tmp$ret$0 < 0.001)
          return evaluateCubic(this, this.b_1, this.d_1, midpoint);
        if (estimate < fraction)
          start = midpoint;
        else
          end = midpoint;
      }
    } else {
      return fraction;
    }
  };
  CubicBezierEasing.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof CubicBezierEasing) {
      tmp_2 = this.a_1 === other.a_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.b_1 === other.b_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.c_1 === other.c_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.d_1 === other.d_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  CubicBezierEasing.prototype.hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.a_1), 31) + getNumberHashCode(this.b_1) | 0, 31) + getNumberHashCode(this.c_1) | 0, 31) + getNumberHashCode(this.d_1) | 0;
  };
  CubicBezierEasing.$metadata$ = classMeta('CubicBezierEasing', [Easing]);
  function get_CubicErrorBound() {
    return CubicErrorBound;
  }
  var CubicErrorBound;
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.function_1 = function_0;
  }
  sam$androidx_compose_animation_core_Easing$0.prototype.transform_mzom4i_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  sam$androidx_compose_animation_core_Easing$0.$metadata$ = classMeta('sam$androidx_compose_animation_core_Easing$0', [Easing]);
  function LinearEasing$lambda(fraction) {
    init_properties_Easing_kt_phvjv3();
    return fraction;
  }
  var properties_initialized_Easing_kt_af4f4d;
  function init_properties_Easing_kt_phvjv3() {
    if (properties_initialized_Easing_kt_af4f4d) {
    } else {
      properties_initialized_Easing_kt_af4f4d = true;
      FastOutSlowInEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
      LinearOutSlowInEasing = new CubicBezierEasing(0.0, 0.0, 0.2, 1.0);
      FastOutLinearInEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      var tmp = LinearEasing$lambda;
      LinearEasing = new sam$androidx_compose_animation_core_Easing$0(tmp);
    }
  }
  function get_Ease() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return Ease;
  }
  var Ease;
  function get_EaseOut() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseOut;
  }
  var EaseOut;
  function get_EaseIn() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseIn;
  }
  var EaseIn;
  function get_EaseInOut() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInOut;
  }
  var EaseInOut;
  function get_EaseInSine() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInSine;
  }
  var EaseInSine;
  function get_EaseOutSine() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseOutSine;
  }
  var EaseOutSine;
  function get_EaseInOutSine() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInOutSine;
  }
  var EaseInOutSine;
  function get_EaseInCubic() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInCubic;
  }
  var EaseInCubic;
  function get_EaseOutCubic() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseOutCubic;
  }
  var EaseOutCubic;
  function get_EaseInOutCubic() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInOutCubic;
  }
  var EaseInOutCubic;
  function get_EaseInQuint() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInQuint;
  }
  var EaseInQuint;
  function get_EaseOutQuint() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseOutQuint;
  }
  var EaseOutQuint;
  function get_EaseInOutQuint() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInOutQuint;
  }
  var EaseInOutQuint;
  function get_EaseInCirc() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInCirc;
  }
  var EaseInCirc;
  function get_EaseOutCirc() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseOutCirc;
  }
  var EaseOutCirc;
  function get_EaseInOutCirc() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInOutCirc;
  }
  var EaseInOutCirc;
  function get_EaseInQuad() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInQuad;
  }
  var EaseInQuad;
  function get_EaseOutQuad() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseOutQuad;
  }
  var EaseOutQuad;
  function get_EaseInOutQuad() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInOutQuad;
  }
  var EaseInOutQuad;
  function get_EaseInQuart() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInQuart;
  }
  var EaseInQuart;
  function get_EaseOutQuart() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseOutQuart;
  }
  var EaseOutQuart;
  function get_EaseInOutQuart() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInOutQuart;
  }
  var EaseInOutQuart;
  function get_EaseInExpo() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInExpo;
  }
  var EaseInExpo;
  function get_EaseOutExpo() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseOutExpo;
  }
  var EaseOutExpo;
  function get_EaseInOutExpo() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInOutExpo;
  }
  var EaseInOutExpo;
  function get_EaseInBack() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInBack;
  }
  var EaseInBack;
  function get_EaseOutBack() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseOutBack;
  }
  var EaseOutBack;
  function get_EaseInOutBack() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInOutBack;
  }
  var EaseInOutBack;
  function get_EaseInElastic() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInElastic;
  }
  var EaseInElastic;
  function get_EaseOutElastic() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseOutElastic;
  }
  var EaseOutElastic;
  function get_EaseInOutElastic() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInOutElastic;
  }
  var EaseInOutElastic;
  function get_EaseOutBounce() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseOutBounce;
  }
  var EaseOutBounce;
  function get_EaseInBounce() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInBounce;
  }
  var EaseInBounce;
  function get_EaseInOutBounce() {
    init_properties_EasingFunctions_kt_c4y6pw();
    return EaseInOutBounce;
  }
  var EaseInOutBounce;
  function sam$androidx_compose_animation_core_Easing$0_0(function_0) {
    this.function_1 = function_0;
  }
  sam$androidx_compose_animation_core_Easing$0_0.prototype.transform_mzom4i_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  sam$androidx_compose_animation_core_Easing$0_0.$metadata$ = classMeta('sam$androidx_compose_animation_core_Easing$0', [Easing]);
  function sam$androidx_compose_animation_core_Easing$0_1(function_0) {
    this.function_1 = function_0;
  }
  sam$androidx_compose_animation_core_Easing$0_1.prototype.transform_mzom4i_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  sam$androidx_compose_animation_core_Easing$0_1.$metadata$ = classMeta('sam$androidx_compose_animation_core_Easing$0', [Easing]);
  function sam$androidx_compose_animation_core_Easing$0_2(function_0) {
    this.function_1 = function_0;
  }
  sam$androidx_compose_animation_core_Easing$0_2.prototype.transform_mzom4i_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  sam$androidx_compose_animation_core_Easing$0_2.$metadata$ = classMeta('sam$androidx_compose_animation_core_Easing$0', [Easing]);
  function sam$androidx_compose_animation_core_Easing$0_3(function_0) {
    this.function_1 = function_0;
  }
  sam$androidx_compose_animation_core_Easing$0_3.prototype.transform_mzom4i_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  sam$androidx_compose_animation_core_Easing$0_3.$metadata$ = classMeta('sam$androidx_compose_animation_core_Easing$0', [Easing]);
  function sam$androidx_compose_animation_core_Easing$0_4(function_0) {
    this.function_1 = function_0;
  }
  sam$androidx_compose_animation_core_Easing$0_4.prototype.transform_mzom4i_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  sam$androidx_compose_animation_core_Easing$0_4.$metadata$ = classMeta('sam$androidx_compose_animation_core_Easing$0', [Easing]);
  function sam$androidx_compose_animation_core_Easing$0_5(function_0) {
    this.function_1 = function_0;
  }
  sam$androidx_compose_animation_core_Easing$0_5.prototype.transform_mzom4i_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  sam$androidx_compose_animation_core_Easing$0_5.$metadata$ = classMeta('sam$androidx_compose_animation_core_Easing$0', [Easing]);
  function EaseInElastic$lambda(fraction) {
    init_properties_EasingFunctions_kt_c4y6pw();
    var c4 = 2.0 * get_PI() / 3.0;
    var tmp0_subject = fraction;
    var tmp;
    switch (tmp0_subject) {
      case 0.0:
        tmp = 0.0;
        break;
      case 1.0:
        tmp = 1.0;
        break;
      default:
        var tmp$ret$0;
        // Inline function 'kotlin.math.pow' call
        var tmp0_pow = 10.0 * fraction - 10.0;
        tmp$ret$0 = Math.pow(2.0, tmp0_pow);

        var tmp_0 = -tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.math.sin' call
        var tmp1_sin = (fraction * 10.0 - 10.75) * c4;
        tmp$ret$1 = Math.sin(tmp1_sin);

        tmp = tmp_0 * tmp$ret$1;
        break;
    }
    return tmp;
  }
  function EaseOutElastic$lambda(fraction) {
    init_properties_EasingFunctions_kt_c4y6pw();
    var c4 = 2.0 * get_PI() / 3.0;
    var tmp0_subject = fraction;
    var tmp;
    switch (tmp0_subject) {
      case 0.0:
        tmp = 0.0;
        break;
      case 1.0:
        tmp = 1.0;
        break;
      default:
        var tmp$ret$0;
        // Inline function 'kotlin.math.pow' call
        var tmp0_pow = -10.0 * fraction;
        tmp$ret$0 = Math.pow(2.0, tmp0_pow);

        var tmp_0 = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.math.sin' call
        var tmp1_sin = (fraction * 10.0 - 0.75) * c4;
        tmp$ret$1 = Math.sin(tmp1_sin);

        tmp = tmp_0 * tmp$ret$1 + 1.0;
        break;
    }
    return tmp;
  }
  function EaseInOutElastic$lambda(fraction) {
    init_properties_EasingFunctions_kt_c4y6pw();
    var c5 = 2.0 * get_PI() / 4.5;
    var tmp0_subject = fraction;
    var tmp;
    if (tmp0_subject === 0.0) {
      tmp = 0.0;
    } else if (tmp0_subject === 1.0) {
      tmp = 1.0;
    } else if (0.0 <= tmp0_subject ? tmp0_subject <= 0.5 : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.pow' call
      var tmp0_pow = 20.0 * fraction - 10.0;
      tmp$ret$0 = Math.pow(2.0, tmp0_pow);
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.math.sin' call
      var tmp1_sin = (20.0 * fraction - 11.125) * c5;
      tmp$ret$1 = Math.sin(tmp1_sin);
      tmp = -(tmp_0 * tmp$ret$1) / 2.0;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.math.pow' call
      var tmp2_pow = -20.0 * fraction + 10.0;
      tmp$ret$2 = Math.pow(2.0, tmp2_pow);
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.math.sin' call
      var tmp3_sin = (fraction * 20.0 - 11.125) * c5;
      tmp$ret$3 = Math.sin(tmp3_sin);
      tmp = tmp_1 * tmp$ret$3 / 2.0 + 1.0;
    }
    return tmp;
  }
  function EaseOutBounce$lambda(fraction) {
    init_properties_EasingFunctions_kt_c4y6pw();
    var n1 = 7.5625;
    var d1 = 2.75;
    var newFraction = fraction;
    var tmp;
    if (newFraction < 1.0 / d1) {
      tmp = n1 * newFraction * newFraction;
    } else if (newFraction < 2.0 / d1) {
      newFraction = newFraction - 1.5 / d1;
      tmp = n1 * newFraction * newFraction + 0.75;
    } else if (newFraction < 2.5 / d1) {
      newFraction = newFraction - 2.25 / d1;
      tmp = n1 * newFraction * newFraction + 0.9375;
    } else {
      newFraction = newFraction - 2.625 / d1;
      tmp = n1 * newFraction * newFraction + 0.984375;
    }
    return tmp;
  }
  function EaseInBounce$lambda(fraction) {
    init_properties_EasingFunctions_kt_c4y6pw();
    return 1 - get_EaseOutBounce().transform_mzom4i_k$(1.0 - fraction);
  }
  function EaseInOutBounce$lambda(fraction) {
    init_properties_EasingFunctions_kt_c4y6pw();
    var tmp;
    if (fraction < 0.5) {
      tmp = (1 - get_EaseOutBounce().transform_mzom4i_k$(1.0 - 2.0 * fraction)) / 2.0;
    } else {
      tmp = (1 + get_EaseOutBounce().transform_mzom4i_k$(2.0 * fraction - 1.0)) / 2.0;
    }
    return tmp;
  }
  var properties_initialized_EasingFunctions_kt_3rrobk;
  function init_properties_EasingFunctions_kt_c4y6pw() {
    if (properties_initialized_EasingFunctions_kt_3rrobk) {
    } else {
      properties_initialized_EasingFunctions_kt_3rrobk = true;
      Ease = new CubicBezierEasing(0.25, 0.1, 0.25, 1.0);
      EaseOut = new CubicBezierEasing(0.0, 0.0, 0.58, 1.0);
      EaseIn = new CubicBezierEasing(0.42, 0.0, 1.0, 1.0);
      EaseInOut = new CubicBezierEasing(0.42, 0.0, 0.58, 1.0);
      EaseInSine = new CubicBezierEasing(0.12, 0.0, 0.39, 0.0);
      EaseOutSine = new CubicBezierEasing(0.61, 1.0, 0.88, 1.0);
      EaseInOutSine = new CubicBezierEasing(0.37, 0.0, 0.63, 1.0);
      EaseInCubic = new CubicBezierEasing(0.32, 0.0, 0.67, 0.0);
      EaseOutCubic = new CubicBezierEasing(0.33, 1.0, 0.68, 1.0);
      EaseInOutCubic = new CubicBezierEasing(0.65, 0.0, 0.35, 1.0);
      EaseInQuint = new CubicBezierEasing(0.64, 0.0, 0.78, 0.0);
      EaseOutQuint = new CubicBezierEasing(0.22, 1.0, 0.36, 1.0);
      EaseInOutQuint = new CubicBezierEasing(0.83, 0.0, 0.17, 1.0);
      EaseInCirc = new CubicBezierEasing(0.55, 0.0, 1.0, 0.45);
      EaseOutCirc = new CubicBezierEasing(0.0, 0.55, 0.45, 1.0);
      EaseInOutCirc = new CubicBezierEasing(0.85, 0.0, 0.15, 1.0);
      EaseInQuad = new CubicBezierEasing(0.11, 0.0, 0.5, 0.0);
      EaseOutQuad = new CubicBezierEasing(0.5, 1.0, 0.89, 1.0);
      EaseInOutQuad = new CubicBezierEasing(0.45, 0.0, 0.55, 1.0);
      EaseInQuart = new CubicBezierEasing(0.5, 0.0, 0.75, 0.0);
      EaseOutQuart = new CubicBezierEasing(0.25, 1.0, 0.5, 1.0);
      EaseInOutQuart = new CubicBezierEasing(0.76, 0.0, 0.24, 1.0);
      EaseInExpo = new CubicBezierEasing(0.7, 0.0, 0.84, 0.0);
      EaseOutExpo = new CubicBezierEasing(0.16, 1.0, 0.3, 1.0);
      EaseInOutExpo = new CubicBezierEasing(0.87, 0.0, 0.13, 1.0);
      EaseInBack = new CubicBezierEasing(0.36, 0.0, 0.66, -0.56);
      EaseOutBack = new CubicBezierEasing(0.34, 1.56, 0.64, 1.0);
      EaseInOutBack = new CubicBezierEasing(0.68, -0.6, 0.32, 1.6);
      var tmp = EaseInElastic$lambda;
      EaseInElastic = new sam$androidx_compose_animation_core_Easing$0_0(tmp);
      var tmp_0 = EaseOutElastic$lambda;
      EaseOutElastic = new sam$androidx_compose_animation_core_Easing$0_1(tmp_0);
      var tmp_1 = EaseInOutElastic$lambda;
      EaseInOutElastic = new sam$androidx_compose_animation_core_Easing$0_2(tmp_1);
      var tmp_2 = EaseOutBounce$lambda;
      EaseOutBounce = new sam$androidx_compose_animation_core_Easing$0_3(tmp_2);
      var tmp_3 = EaseInBounce$lambda;
      EaseInBounce = new sam$androidx_compose_animation_core_Easing$0_4(tmp_3);
      var tmp_4 = EaseInOutBounce$lambda;
      EaseInOutBounce = new sam$androidx_compose_animation_core_Easing$0_5(tmp_4);
    }
  }
  function FloatAnimationSpec() {
  }
  FloatAnimationSpec.$metadata$ = interfaceMeta('FloatAnimationSpec', [AnimationSpec]);
  function FloatSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      Spring_getInstance();
      dampingRatio = 1.0;
    }
    if (!(($mask0 & 2) === 0)) {
      Spring_getInstance();
      stiffness = 1500.0;
    }
    if (!(($mask0 & 4) === 0)) {
      Spring_getInstance();
      visibilityThreshold = 0.01;
    }
    FloatSpringSpec.call($this, dampingRatio, stiffness, visibilityThreshold);
    return $this;
  }
  function FloatSpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker) {
    return FloatSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker, Object.create(FloatSpringSpec.prototype));
  }
  function _get_visibilityThreshold__cvk72g_0($this) {
    return $this.visibilityThreshold_1;
  }
  function _get_spring__4s3m3i($this) {
    return $this.spring_1;
  }
  function FloatSpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    this.dampingRatio_1 = dampingRatio;
    this.stiffness_1 = stiffness;
    this.visibilityThreshold_1 = visibilityThreshold;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new SpringSimulation(1.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.FloatSpringSpec.spring.<anonymous>' call
    tmp0_also.set_dampingRatio_agau0n_k$(this.dampingRatio_1);
    tmp0_also.set_stiffness_ca51vp_k$(this.stiffness_1);
    tmp$ret$0 = tmp0_also;
    tmp.spring_1 = tmp$ret$0;
    this.$stable_1 = 8;
  }
  FloatSpringSpec.prototype.get_dampingRatio_syjss2_k$ = function () {
    return this.dampingRatio_1;
  };
  FloatSpringSpec.prototype.get_stiffness_dt2sgm_k$ = function () {
    return this.stiffness_1;
  };
  FloatSpringSpec.prototype.getValueFromNanos_laqly_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(get_MillisToNanos());
    this.spring_1.finalPosition_1 = targetValue;
    var value = _Motion___get_value__impl__e0x31d(this.spring_1.updateValues_23ym3r_k$(initialValue, initialVelocity, playTimeMillis));
    return value;
  };
  FloatSpringSpec.prototype.getVelocityFromNanos_da2xk2_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(get_MillisToNanos());
    this.spring_1.finalPosition_1 = targetValue;
    var velocity = _Motion___get_velocity__impl__h2mglt(this.spring_1.updateValues_23ym3r_k$(initialValue, initialVelocity, playTimeMillis));
    return velocity;
  };
  FloatSpringSpec.prototype.getEndVelocity_1g11o_k$ = function (initialValue, targetValue, initialVelocity) {
    return 0.0;
  };
  FloatSpringSpec.prototype.getDurationNanos_ct8k6x_k$ = function (initialValue, targetValue, initialVelocity) {
    var tmp0_stiffness = this.spring_1.get_stiffness_dt2sgm_k$();
    var tmp1_dampingRatio = this.spring_1.dampingRatio_1;
    var tmp2_initialDisplacement = (initialValue - targetValue) / this.visibilityThreshold_1;
    var tmp3_initialVelocity = initialVelocity / this.visibilityThreshold_1;
    return estimateAnimationDurationMillis(tmp0_stiffness, tmp1_dampingRatio, tmp3_initialVelocity, tmp2_initialDisplacement, 1.0).times_2zfqpc_k$(get_MillisToNanos());
  };
  FloatSpringSpec.prototype.vectorize_drxx6b_k$ = function (converter) {
    return this.vectorize_wiveyw_k$(converter);
  };
  FloatSpringSpec.$metadata$ = classMeta('FloatSpringSpec', [FloatAnimationSpec]);
  function FloatTweenSpec_init_$Init$(duration, delay, easing, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      AnimationConstants_getInstance();
      duration = 300;
    }
    if (!(($mask0 & 2) === 0))
      delay = 0;
    if (!(($mask0 & 4) === 0))
      easing = get_FastOutSlowInEasing();
    FloatTweenSpec.call($this, duration, delay, easing);
    return $this;
  }
  function FloatTweenSpec_init_$Create$(duration, delay, easing, $mask0, $marker) {
    return FloatTweenSpec_init_$Init$(duration, delay, easing, $mask0, $marker, Object.create(FloatTweenSpec.prototype));
  }
  function _get_easing__5ar9kw($this) {
    return $this.easing_1;
  }
  function clampPlayTime($this, playTime) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = $this.delay_1;
    tmp$ret$0 = playTime.minus_llf5ei_k$(toLong(tmp0_minus));
    return coerceIn_0(tmp$ret$0, new Long(0, 0), toLong($this.duration_1));
  }
  function FloatTweenSpec(duration, delay, easing) {
    this.duration_1 = duration;
    this.delay_1 = delay;
    this.easing_1 = easing;
    this.$stable_1 = 0;
  }
  FloatTweenSpec.prototype.get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  FloatTweenSpec.prototype.get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  FloatTweenSpec.prototype.getValueFromNanos_laqly_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    var tmp;
    if (this.duration_1 === 0) {
      tmp = 1.0;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = this.duration_1;
      tmp$ret$0 = clampedPlayTime.toFloat_jhbgwv_k$() / tmp0_div;
      tmp = tmp$ret$0;
    }
    var rawFraction = tmp;
    var fraction = this.easing_1.transform_mzom4i_k$(coerceIn(rawFraction, 0.0, 1.0));
    return lerp(initialValue, targetValue, fraction);
  };
  FloatTweenSpec.prototype.getDurationNanos_ct8k6x_k$ = function (initialValue, targetValue, initialVelocity) {
    return numberToLong(this.delay_1 + this.duration_1 | 0).times_2zfqpc_k$(get_MillisToNanos());
  };
  FloatTweenSpec.prototype.getVelocityFromNanos_da2xk2_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    if (clampedPlayTime.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      return 0.0;
    } else if (clampedPlayTime.equals(new Long(0, 0))) {
      return initialVelocity;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    tmp$ret$0 = clampedPlayTime.minus_llf5ei_k$(new Long(1, 0));
    var startNum = this.getValueFromNanos_laqly_k$(tmp$ret$0.times_2zfqpc_k$(get_MillisToNanos()), initialValue, targetValue, initialVelocity);
    var endNum = this.getValueFromNanos_laqly_k$(clampedPlayTime.times_2zfqpc_k$(get_MillisToNanos()), initialValue, targetValue, initialVelocity);
    return (endNum - startNum) * 1000.0;
  };
  FloatTweenSpec.prototype.vectorize_drxx6b_k$ = function (converter) {
    return this.vectorize_wiveyw_k$(converter);
  };
  FloatTweenSpec.$metadata$ = classMeta('FloatTweenSpec', [FloatAnimationSpec]);
  function FloatExponentialDecaySpec_init_$Init$(frictionMultiplier, absVelocityThreshold, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      frictionMultiplier = 1.0;
    if (!(($mask0 & 2) === 0))
      absVelocityThreshold = 0.1;
    FloatExponentialDecaySpec.call($this, frictionMultiplier, absVelocityThreshold);
    return $this;
  }
  function FloatExponentialDecaySpec_init_$Create$(frictionMultiplier, absVelocityThreshold, $mask0, $marker) {
    return FloatExponentialDecaySpec_init_$Init$(frictionMultiplier, absVelocityThreshold, $mask0, $marker, Object.create(FloatExponentialDecaySpec.prototype));
  }
  function _get_friction__4dx5ox($this) {
    return $this.friction_1;
  }
  function FloatExponentialDecaySpec(frictionMultiplier, absVelocityThreshold) {
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    tmp$ret$0 = Math.abs(absVelocityThreshold);
    var tmp0_max = tmp$ret$0;
    tmp$ret$1 = Math.max(1.0E-7, tmp0_max);
    tmp.absVelocityThreshold_1 = tmp$ret$1;
    var tmp_0 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.math.max' call
    tmp$ret$2 = Math.max(1.0E-4, frictionMultiplier);
    tmp_0.friction_1 = -4.2 * tmp$ret$2;
    this.$stable_1 = 0;
  }
  FloatExponentialDecaySpec.prototype.get_absVelocityThreshold_wsgqo5_k$ = function () {
    return this.absVelocityThreshold_1;
  };
  FloatExponentialDecaySpec.prototype.getValueFromNanos_tm63l0_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(get_MillisToNanos());
    var tmp = initialValue - initialVelocity / this.friction_1;
    var tmp_0 = initialVelocity / this.friction_1;
    var tmp$ret$0;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = this.friction_1 * playTimeMillis.toFloat_jhbgwv_k$() / 1000.0;
    tmp$ret$0 = Math.exp(tmp0_exp);
    return tmp + tmp_0 * tmp$ret$0;
  };
  FloatExponentialDecaySpec.prototype.getVelocityFromNanos_1qiryk_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(get_MillisToNanos());
    var tmp$ret$1;
    // Inline function 'kotlin.math.exp' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    tmp$ret$0 = playTimeMillis.toFloat_jhbgwv_k$() / 1000.0;
    var tmp0_exp = tmp$ret$0 * this.friction_1;
    tmp$ret$1 = Math.exp(tmp0_exp);
    return initialVelocity * tmp$ret$1;
  };
  FloatExponentialDecaySpec.prototype.getDurationNanos_kuw0r9_k$ = function (initialValue, initialVelocity) {
    var tmp$ret$1;
    // Inline function 'kotlin.math.ln' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    tmp$ret$0 = Math.abs(initialVelocity);
    var tmp0_ln = this.absVelocityThreshold_1 / tmp$ret$0;
    tmp$ret$1 = Math.log(tmp0_ln);
    return numberToLong(1000.0 * tmp$ret$1 / this.friction_1).times_2zfqpc_k$(get_MillisToNanos());
  };
  FloatExponentialDecaySpec.prototype.getTargetValue_xs6ane_k$ = function (initialValue, initialVelocity) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    tmp$ret$0 = Math.abs(initialVelocity);
    if (tmp$ret$0 <= this.absVelocityThreshold_1) {
      return initialValue;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.math.ln' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = this.absVelocityThreshold_1 / initialVelocity;
    tmp$ret$1 = Math.abs(tmp0_abs);
    var tmp1_ln = tmp$ret$1;
    tmp$ret$2 = Math.log(tmp1_ln);
    var duration = tmp$ret$2 / this.friction_1 * 1000;
    var tmp = initialValue - initialVelocity / this.friction_1;
    var tmp_0 = initialVelocity / this.friction_1;
    var tmp$ret$3;
    // Inline function 'kotlin.math.exp' call
    var tmp2_exp = this.friction_1 * duration / 1000.0;
    tmp$ret$3 = Math.exp(tmp2_exp);
    return tmp + tmp_0 * tmp$ret$3;
  };
  FloatExponentialDecaySpec.$metadata$ = classMeta('FloatExponentialDecaySpec', [FloatDecayAnimationSpec]);
  function FloatDecayAnimationSpec() {
  }
  FloatDecayAnimationSpec.$metadata$ = interfaceMeta('FloatDecayAnimationSpec');
  function get_ExponentialDecayFriction() {
    return ExponentialDecayFriction;
  }
  var ExponentialDecayFriction;
  function withInfiniteAnimationFrameNanos(onFrame, $cont) {
    var tmp = new $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation) {
    this.$onFrame_1 = $onFrame;
    CoroutineImpl.call(this, resultContinuation);
  }
  withInfiniteAnimationFrameNanos$slambda.prototype.invoke_34if6s_k$ = function ($cont) {
    var tmp = this.create_lvr374_k$($cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  withInfiniteAnimationFrameNanos$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = withFrameNanos(this.$onFrame_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  withInfiniteAnimationFrameNanos$slambda.prototype.create_lvr374_k$ = function (completion) {
    var i = new withInfiniteAnimationFrameNanos$slambda(this.$onFrame_1, completion);
    return i;
  };
  withInfiniteAnimationFrameNanos$slambda.$metadata$ = classMeta('withInfiniteAnimationFrameNanos$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function withInfiniteAnimationFrameNanos$slambda_0($onFrame, resultContinuation) {
    var i = new withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation);
    var l = function ($cont) {
      return i.invoke_34if6s_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.onFrame_1 = onFrame;
  }
  $withInfiniteAnimationFrameNanosCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            var tmp_0 = this;
            tmp_0.policy0__1 = this.get_context_h02k06_k$().get_1pi7hg_k$(Key_getInstance());
            if (this.policy0__1 == null) {
              this.state_1 = 2;
              suspendResult = withFrameNanos(this.onFrame_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.state_1 = 1;
              suspendResult = this.policy0__1.onInfiniteOperation_fg6wm9_k$(withInfiniteAnimationFrameNanos$slambda_0(this.onFrame_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.WHEN_RESULT1__1 = suspendResult;
            this.state_1 = 3;
            continue $sm;
          case 2:
            this.WHEN_RESULT1__1 = suspendResult;
            this.state_1 = 3;
            continue $sm;
          case 3:
            return this.WHEN_RESULT1__1;
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
  $withInfiniteAnimationFrameNanosCOROUTINE$0.$metadata$ = classMeta('$withInfiniteAnimationFrameNanosCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function InternalAnimationApi() {
  }
  InternalAnimationApi.prototype.equals = function (other) {
    if (!(other instanceof InternalAnimationApi))
      return false;
    var tmp0_other_with_cast = other instanceof InternalAnimationApi ? other : THROW_CCE();
    return true;
  };
  InternalAnimationApi.prototype.hashCode = function () {
    return 0;
  };
  InternalAnimationApi.prototype.toString = function () {
    return '@androidx.compose.animation.core.InternalAnimationApi()';
  };
  InternalAnimationApi.$metadata$ = classMeta('InternalAnimationApi', [Annotation]);
  function Mutator(priority, job) {
    this.priority_1 = priority;
    this.job_1 = job;
  }
  Mutator.prototype.get_priority_jyafsd_k$ = function () {
    return this.priority_1;
  };
  Mutator.prototype.get_job_18j2r0_k$ = function () {
    return this.job_1;
  };
  Mutator.prototype.canInterrupt_99yyky_k$ = function (other) {
    return this.priority_1.compareTo_6thzay_k$(other.priority_1) >= 0;
  };
  Mutator.prototype.cancel_2kogtl_k$ = function () {
    return this.job_1.cancel$default_bm1z3z_k$(null, 1, null);
  };
  Mutator.$metadata$ = classMeta('Mutator');
  function _get_currentMutator__y8yhby($this) {
    return $this.currentMutator_1;
  }
  function _get_mutex__e2dgb2($this) {
    return $this.mutex_1;
  }
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.currentMutator_1.get_26vq_k$();
      if (oldMutator == null ? true : mutator.canInterrupt_99yyky_k$(oldMutator)) {
        if ($this.currentMutator_1.compareAndSet_fjyh1e_k$(oldMutator, mutator)) {
          var tmp0_safe_receiver = oldMutator;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.cancel_2kogtl_k$();
          }
          break $l$loop;
        }
      } else
        throw CancellationException_init_$Create$('Current mutation had a higher priority');
    }
  }
  function MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation) {
    this.$priority_1 = $priority;
    this.this$0__1 = this$0;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  MutatorMutex$mutate$slambda.prototype.invoke_uet3jx_k$ = function ($this$coroutineScope, $cont) {
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  MutatorMutex$mutate$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_uet3jx_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  MutatorMutex$mutate$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 13;
            this.mutator0__1 = new Mutator(this.$priority_1, ensureNotNull(this.$this$coroutineScope_1.get_coroutineContext_115oqo_k$().get_1pi7hg_k$(Key_getInstance_0())));
            tryMutateOrCancel(this.this$0__1, this.mutator0__1);
            this.state_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.tmp0_withLock2__1 = this.this$0__1.mutex_1;
            this.state_1 = 2;
            suspendResult = this.tmp0_withLock2__1.lock_25dizd_k$(null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.state_1 = 3;
            continue $sm;
          case 3:
            this.state_1 = 4;
            continue $sm;
          case 4:
            this.exceptionState_1 = 12;
            this.state_1 = 5;
            continue $sm;
          case 5:
            this.exceptionState_1 = 11;
            this.state_1 = 6;
            suspendResult = this.$block_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.tmp$ret$05__1 = suspendResult;
            this.state_1 = 7;
            continue $sm;
          case 7:
            var tmp_1 = this.tmp$ret$05__1;
            this.this$0__1.currentMutator_1.compareAndSet_fjyh1e_k$(this.mutator0__1, null);
            ;
            this.tmp$ret$24__1 = tmp_1;
            this.exceptionState_1 = 13;
            this.state_1 = 8;
            var tmp_2 = this;
            continue $sm;
          case 8:
            var tmp_3 = this.tmp$ret$24__1;
            this.tmp0_withLock2__1.unlock_uksyr8_k$(null);
            ;
            this.tmp$ret$61__1 = tmp_3;
            this.state_1 = 10;
            continue $sm;
          case 9:
            this.tmp0_withLock2__1.unlock_uksyr8_k$(null);
            ;
            if (false) {
              this.state_1 = 1;
              continue $sm;
            }

            this.state_1 = 10;
            continue $sm;
          case 10:
            return this.tmp$ret$61__1;
          case 11:
            this.exceptionState_1 = 12;
            var t = this.exception_1;
            this.this$0__1.currentMutator_1.compareAndSet_fjyh1e_k$(this.mutator0__1, null);
            ;
            throw t;
          case 12:
            this.exceptionState_1 = 13;
            var t_0 = this.exception_1;
            this.tmp0_withLock2__1.unlock_uksyr8_k$(null);
            ;
            throw t_0;
          case 13:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 13) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  MutatorMutex$mutate$slambda.prototype.create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutate$slambda(this.$priority_1, this.this$0__1, this.$block_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  MutatorMutex$mutate$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  MutatorMutex$mutate$slambda.$metadata$ = classMeta('MutatorMutex$mutate$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function MutatorMutex$mutate$slambda_0($priority, this$0, $block, resultContinuation) {
    var i = new MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.invoke_uet3jx_k$($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex$mutateWith$slambda($priority, this$0, $block, $receiver, resultContinuation) {
    this.$priority_1 = $priority;
    this.this$0__1 = this$0;
    this.$block_1 = $block;
    this.$receiver_1 = $receiver;
    CoroutineImpl.call(this, resultContinuation);
  }
  MutatorMutex$mutateWith$slambda.prototype.invoke_uet3jx_k$ = function ($this$coroutineScope, $cont) {
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  MutatorMutex$mutateWith$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_uet3jx_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  MutatorMutex$mutateWith$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 13;
            this.mutator0__1 = new Mutator(this.$priority_1, ensureNotNull(this.$this$coroutineScope_1.get_coroutineContext_115oqo_k$().get_1pi7hg_k$(Key_getInstance_0())));
            tryMutateOrCancel(this.this$0__1, this.mutator0__1);
            this.state_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.tmp0_withLock2__1 = this.this$0__1.mutex_1;
            this.state_1 = 2;
            suspendResult = this.tmp0_withLock2__1.lock_25dizd_k$(null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.state_1 = 3;
            continue $sm;
          case 3:
            this.state_1 = 4;
            continue $sm;
          case 4:
            this.exceptionState_1 = 12;
            this.state_1 = 5;
            continue $sm;
          case 5:
            this.exceptionState_1 = 11;
            this.state_1 = 6;
            suspendResult = this.$block_1(this.$receiver_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.tmp$ret$05__1 = suspendResult;
            this.state_1 = 7;
            continue $sm;
          case 7:
            var tmp_1 = this.tmp$ret$05__1;
            this.this$0__1.currentMutator_1.compareAndSet_fjyh1e_k$(this.mutator0__1, null);
            ;
            this.tmp$ret$24__1 = tmp_1;
            this.exceptionState_1 = 13;
            this.state_1 = 8;
            var tmp_2 = this;
            continue $sm;
          case 8:
            var tmp_3 = this.tmp$ret$24__1;
            this.tmp0_withLock2__1.unlock_uksyr8_k$(null);
            ;
            this.tmp$ret$61__1 = tmp_3;
            this.state_1 = 10;
            continue $sm;
          case 9:
            this.tmp0_withLock2__1.unlock_uksyr8_k$(null);
            ;
            if (false) {
              this.state_1 = 1;
              continue $sm;
            }

            this.state_1 = 10;
            continue $sm;
          case 10:
            return this.tmp$ret$61__1;
          case 11:
            this.exceptionState_1 = 12;
            var t = this.exception_1;
            this.this$0__1.currentMutator_1.compareAndSet_fjyh1e_k$(this.mutator0__1, null);
            ;
            throw t;
          case 12:
            this.exceptionState_1 = 13;
            var t_0 = this.exception_1;
            this.tmp0_withLock2__1.unlock_uksyr8_k$(null);
            ;
            throw t_0;
          case 13:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 13) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  MutatorMutex$mutateWith$slambda.prototype.create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutateWith$slambda(this.$priority_1, this.this$0__1, this.$block_1, this.$receiver_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  MutatorMutex$mutateWith$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  MutatorMutex$mutateWith$slambda.$metadata$ = classMeta('MutatorMutex$mutateWith$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function MutatorMutex$mutateWith$slambda_0($priority, this$0, $block, $receiver, resultContinuation) {
    var i = new MutatorMutex$mutateWith$slambda($priority, this$0, $block, $receiver, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.invoke_uet3jx_k$($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex() {
    this.currentMutator_1 = new AtomicReference(null);
    var tmp = this;
    tmp.mutex_1 = Mutex$default(false, 1, null);
  }
  MutatorMutex.prototype.mutate_hvtxk4_k$ = function (priority, block, $cont) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $cont);
  };
  MutatorMutex.prototype.mutate$default_1b3qou_k$ = function (priority, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      priority = MutatePriority_Default_getInstance();
    return this.mutate_hvtxk4_k$(priority, block, $cont);
  };
  MutatorMutex.prototype.mutateWith_yvefop_k$ = function (receiver, priority, block, $cont) {
    return coroutineScope(MutatorMutex$mutateWith$slambda_0(priority, this, block, receiver, null), $cont);
  };
  MutatorMutex.prototype.mutateWith$default_6yzu9p_k$ = function (receiver, priority, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      priority = MutatePriority_Default_getInstance();
    return this.mutateWith_yvefop_k$(receiver, priority, block, $cont);
  };
  MutatorMutex.$metadata$ = classMeta('MutatorMutex');
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
  function values_1() {
    return [MutatePriority_Default_getInstance(), MutatePriority_UserInput_getInstance(), MutatePriority_PreventUserInput_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Default':
        return MutatePriority_Default_getInstance();
      case 'UserInput':
        return MutatePriority_UserInput_getInstance();
      case 'PreventUserInput':
        return MutatePriority_PreventUserInput_getInstance();
      default:
        MutatePriority_initEntries();
        THROW_ISE();
        break;
    }
  }
  var MutatePriority_entriesInitialized;
  function MutatePriority_initEntries() {
    if (MutatePriority_entriesInitialized)
      return Unit_getInstance();
    MutatePriority_entriesInitialized = true;
    MutatePriority_Default_instance = new MutatePriority('Default', 0);
    MutatePriority_UserInput_instance = new MutatePriority('UserInput', 1);
    MutatePriority_PreventUserInput_instance = new MutatePriority('PreventUserInput', 2);
  }
  function MutatePriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  MutatePriority.$metadata$ = classMeta('MutatePriority', undefined, undefined, undefined, undefined, Enum.prototype);
  function MutatePriority_Default_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_Default_instance;
  }
  function MutatePriority_UserInput_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_UserInput_instance;
  }
  function MutatePriority_PreventUserInput_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_PreventUserInput_instance;
  }
  function estimateAnimationDurationMillis(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    return estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    var tmp = 2.0 * dampingRatio;
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    tmp$ret$0 = Math.sqrt(stiffness);
    var dampingCoefficient = tmp * tmp$ret$0;
    var roots = complexQuadraticFormula(1.0, dampingCoefficient, stiffness);
    return estimateDurationInternal(roots, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateDurationInternal(roots, dampingRatio, initialVelocity, initialPosition, delta) {
    if (initialPosition === 0.0 ? initialVelocity === 0.0 : false) {
      return new Long(0, 0);
    }
    var v0 = initialPosition < 0.0 ? -initialVelocity : initialVelocity;
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    tmp$ret$0 = Math.abs(initialPosition);
    var p0 = tmp$ret$0;
    return numberToLong((dampingRatio > 1.0 ? estimateOverDamped(roots, p0, v0, delta) : dampingRatio < 1.0 ? estimateUnderDamped(roots, p0, v0, delta) : estimateCriticallyDamped(roots, p0, v0, delta)) * 1000.0);
  }
  function estimateOverDamped(roots, p0, v0, delta) {
    var r1 = roots.first_1.get_real_wotl9j_k$();
    var r2 = roots.second_1.get_real_wotl9j_k$();
    var c2 = (r1 * p0 - v0) / (r1 - r2);
    var c1 = p0 - c2;
    var tmp$ret$1;
    // Inline function 'kotlin.math.ln' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = delta / c1;
    tmp$ret$0 = Math.abs(tmp0_abs);
    var tmp1_ln = tmp$ret$0;
    tmp$ret$1 = Math.log(tmp1_ln);
    var t1 = tmp$ret$1 / r1;
    var tmp$ret$3;
    // Inline function 'kotlin.math.ln' call
    var tmp$ret$2;
    // Inline function 'kotlin.math.abs' call
    var tmp2_abs = delta / c2;
    tmp$ret$2 = Math.abs(tmp2_abs);
    var tmp3_ln = tmp$ret$2;
    tmp$ret$3 = Math.log(tmp3_ln);
    var t2 = tmp$ret$3 / r2;
    var tmp;
    var tmp$ret$4;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    tmp$ret$4 = !isFinite(t1);
    if (tmp$ret$4) {
      tmp = t2;
    } else {
      var tmp$ret$5;
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      tmp$ret$5 = !isFinite(t2);
      if (tmp$ret$5) {
        tmp = t1;
      } else {
        var tmp$ret$6;
        // Inline function 'kotlin.math.max' call
        tmp$ret$6 = Math.max(t1, t2);
        tmp = tmp$ret$6;
      }
    }
    var tCurr = tmp;
    var tmp$ret$7;
    // Inline function 'kotlin.math.ln' call
    var tmp4_ln = c1 * r1 / (-c2 * r2);
    tmp$ret$7 = Math.log(tmp4_ln);
    var tInflection = tmp$ret$7 / (r2 - r1);
    var tmp_0;
    if (isNaN_1(tInflection) ? true : tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 ? -estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) < delta : false) {
      if (c2 > 0.0 ? c1 < 0.0 : false) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      var tmp$ret$8;
      // Inline function 'kotlin.math.ln' call
      var tmp5_ln = -(c2 * r2 * r2) / (c1 * r1 * r1);
      tmp$ret$8 = Math.log(tmp5_ln);
      var tConcavChange = tmp$ret$8 / (r1 - r2);
      tCurr = tConcavChange;
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    var fn = estimateOverDamped$lambda(c1, r1, c2, r2, signedDelta);
    var fnPrime = estimateOverDamped$lambda_0(c1, r1, c2, r2);
    var tmp$ret$9;
    // Inline function 'kotlin.math.abs' call
    var tmp6_abs = fn(tCurr);
    tmp$ret$9 = Math.abs(tmp6_abs);
    if (tmp$ret$9 < 1.0E-4) {
      return tCurr;
    }
    DoubleCompanionObject_getInstance();
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 ? iterations < 100 : false) {
      var tmp0 = iterations;
      iterations = tmp0 + 1 | 0;
      var tLast = tCurr;
      var tmp$ret$10;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var tmp7_iterateNewtonsMethod = tCurr;
      tmp$ret$10 = tmp7_iterateNewtonsMethod - fn(tmp7_iterateNewtonsMethod) / fnPrime(tmp7_iterateNewtonsMethod);
      tCurr = tmp$ret$10;
      var tmp$ret$11;
      // Inline function 'kotlin.math.abs' call
      var tmp8_abs = tLast - tCurr;
      tmp$ret$11 = Math.abs(tmp8_abs);
      tDelta = tmp$ret$11;
    }
    return tCurr;
  }
  function estimateUnderDamped(roots, p0, v0, delta) {
    var r = roots.first_1.get_real_wotl9j_k$();
    var c1 = p0;
    var c2 = (v0 - r * c1) / roots.first_1.get_imaginary_5xnno0_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = c1 * c1 + c2 * c2;
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    var c = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.ln' call
    var tmp1_ln = delta / c;
    tmp$ret$1 = Math.log(tmp1_ln);
    return tmp$ret$1 / r;
  }
  function estimateCriticallyDamped(roots, p0, v0, delta) {
    var r = roots.first_1.get_real_wotl9j_k$();
    var c1 = p0;
    var c2 = v0 - r * c1;
    var tmp$ret$1;
    // Inline function 'kotlin.math.ln' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = delta / c1;
    tmp$ret$0 = Math.abs(tmp0_abs);
    var tmp1_ln = tmp$ret$0;
    tmp$ret$1 = Math.log(tmp1_ln);
    var t1 = tmp$ret$1 / r;
    var tmp$ret$3;
    // Inline function 'kotlin.math.ln' call
    var tmp$ret$2;
    // Inline function 'kotlin.math.abs' call
    var tmp2_abs = delta / c2;
    tmp$ret$2 = Math.abs(tmp2_abs);
    var tmp3_ln = tmp$ret$2;
    tmp$ret$3 = Math.log(tmp3_ln);
    var t2 = estimateCriticallyDamped$t2Iterate(tmp$ret$3, r) / r;
    var tmp;
    var tmp$ret$4;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    tmp$ret$4 = !isFinite(t1);
    if (tmp$ret$4) {
      tmp = t2;
    } else {
      var tmp$ret$5;
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      tmp$ret$5 = !isFinite(t2);
      if (tmp$ret$5) {
        tmp = t1;
      } else {
        var tmp$ret$6;
        // Inline function 'kotlin.math.max' call
        tmp$ret$6 = Math.max(t1, t2);
        tmp = tmp$ret$6;
      }
    }
    var tCurr = tmp;
    var tInflection = -(r * c1 + c2) / (r * c2);
    var tmp_0;
    if (isNaN_1(tInflection) ? true : tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 ? -estimateCriticallyDamped$xInflection(c1, r, tInflection, c2) < delta : false) {
      if (c2 < 0.0 ? c1 > 0.0 : false) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      var tConcavChange = -(2.0 / r) - c1 / c2;
      tCurr = tConcavChange;
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    var fn = estimateCriticallyDamped$lambda(c1, c2, r, signedDelta);
    var fnPrime = estimateCriticallyDamped$lambda_0(c2, r, c1);
    DoubleCompanionObject_getInstance();
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 ? iterations < 100 : false) {
      var tmp0 = iterations;
      iterations = tmp0 + 1 | 0;
      var tLast = tCurr;
      var tmp$ret$7;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var tmp4_iterateNewtonsMethod = tCurr;
      tmp$ret$7 = tmp4_iterateNewtonsMethod - fn(tmp4_iterateNewtonsMethod) / fnPrime(tmp4_iterateNewtonsMethod);
      tCurr = tmp$ret$7;
      var tmp$ret$8;
      // Inline function 'kotlin.math.abs' call
      var tmp5_abs = tLast - tCurr;
      tmp$ret$8 = Math.abs(tmp5_abs);
      tDelta = tmp$ret$8;
    }
    return tCurr;
  }
  function isNotFinite(_this__u8e3s4) {
    return !isFinite(_this__u8e3s4);
  }
  function iterateNewtonsMethod(x, fn, fnPrime) {
    return x - fn(x) / fnPrime(x);
  }
  function estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = r1 * tInflection;
    tmp$ret$0 = Math.exp(tmp0_exp);
    var tmp = c1 * tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.exp' call
    var tmp1_exp = r2 * tInflection;
    tmp$ret$1 = Math.exp(tmp1_exp);
    return tmp + c2 * tmp$ret$1;
  }
  function estimateCriticallyDamped$t2Iterate(guess, r) {
    var t = guess;
    var inductionVariable = 0;
    if (inductionVariable <= 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.math.ln' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.abs' call
        var tmp0_abs = t / r;
        tmp$ret$0 = Math.abs(tmp0_abs);
        var tmp1_ln = tmp$ret$0;
        tmp$ret$1 = Math.log(tmp1_ln);
        t = guess - tmp$ret$1;
      }
       while (inductionVariable <= 5);
    return t;
  }
  function estimateCriticallyDamped$xInflection(c1, r, tInflection, c2) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = r * tInflection;
    tmp$ret$0 = Math.exp(tmp0_exp);
    var tmp = c1 * tmp$ret$0;
    var tmp_0 = c2 * tInflection;
    var tmp$ret$1;
    // Inline function 'kotlin.math.exp' call
    var tmp1_exp = r * tInflection;
    tmp$ret$1 = Math.exp(tmp1_exp);
    return tmp + tmp_0 * tmp$ret$1;
  }
  function estimateOverDamped$lambda($c1, $r1, $c2, $r2, $signedDelta) {
    return function (t) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.exp' call
      var tmp0_exp = $r1 * t;
      tmp$ret$0 = Math.exp(tmp0_exp);
      var tmp = $c1 * tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.math.exp' call
      var tmp1_exp = $r2 * t;
      tmp$ret$1 = Math.exp(tmp1_exp);
      return tmp + $c2 * tmp$ret$1 + $signedDelta;
    };
  }
  function estimateOverDamped$lambda_0($c1, $r1, $c2, $r2) {
    return function (t) {
      var tmp = $c1 * $r1;
      var tmp$ret$0;
      // Inline function 'kotlin.math.exp' call
      var tmp0_exp = $r1 * t;
      tmp$ret$0 = Math.exp(tmp0_exp);
      var tmp_0 = tmp * tmp$ret$0;
      var tmp_1 = $c2 * $r2;
      var tmp$ret$1;
      // Inline function 'kotlin.math.exp' call
      var tmp1_exp = $r2 * t;
      tmp$ret$1 = Math.exp(tmp1_exp);
      return tmp_0 + tmp_1 * tmp$ret$1;
    };
  }
  function estimateCriticallyDamped$lambda($c1, $c2, $r, $signedDelta) {
    return function (t) {
      var tmp = $c1 + $c2 * t;
      var tmp$ret$0;
      // Inline function 'kotlin.math.exp' call
      var tmp0_exp = $r * t;
      tmp$ret$0 = Math.exp(tmp0_exp);
      return tmp * tmp$ret$0 + $signedDelta;
    };
  }
  function estimateCriticallyDamped$lambda_0($c2, $r, $c1) {
    return function (t) {
      var tmp = $c2 * ($r * t + 1) + $c1 * $r;
      var tmp$ret$0;
      // Inline function 'kotlin.math.exp' call
      var tmp0_exp = $r * t;
      tmp$ret$0 = Math.exp(tmp0_exp);
      return tmp * tmp$ret$0;
    };
  }
  function get_UNSET() {
    return UNSET;
  }
  var UNSET;
  function _set_naturalFreq__cfwulg($this, _set____db54di) {
    $this.naturalFreq_1 = _set____db54di;
  }
  function _get_naturalFreq__sat11s($this) {
    return $this.naturalFreq_1;
  }
  function _set_initialized__9jqmof($this, _set____db54di) {
    $this.initialized_1 = _set____db54di;
  }
  function _get_initialized__kqnjnh($this) {
    return $this.initialized_1;
  }
  function _set_gammaPlus__bx2io4($this, _set____db54di) {
    $this.gammaPlus_1 = _set____db54di;
  }
  function _get_gammaPlus__tt72wg($this) {
    return $this.gammaPlus_1;
  }
  function _set_gammaMinus__cup5ta($this, _set____db54di) {
    $this.gammaMinus_1 = _set____db54di;
  }
  function _get_gammaMinus__27jfby($this) {
    return $this.gammaMinus_1;
  }
  function _set_dampedFreq__qkv21s($this, _set____db54di) {
    $this.dampedFreq_1 = _set____db54di;
  }
  function _get_dampedFreq__te0es4($this) {
    return $this.dampedFreq_1;
  }
  function init($this) {
    if ($this.initialized_1) {
      return Unit_getInstance();
    }
    if ($this.finalPosition_1 === UNSET) {
      throw IllegalStateException_init_$Create$('Error: Final position of the spring must be set before the animation starts');
    }
    var dampingRatioSquared = $this.dampingRatio_1 * $this.dampingRatio_1;
    if ($this.dampingRatio_1 > 1) {
      var tmp = $this;
      var tmp_0 = -$this.dampingRatio_1 * $this.naturalFreq_1;
      var tmp_1 = $this.naturalFreq_1;
      var tmp$ret$0;
      // Inline function 'kotlin.math.sqrt' call
      var tmp0_sqrt = dampingRatioSquared - 1;
      tmp$ret$0 = Math.sqrt(tmp0_sqrt);
      tmp.gammaPlus_1 = tmp_0 + tmp_1 * tmp$ret$0;
      var tmp_2 = $this;
      var tmp_3 = -$this.dampingRatio_1 * $this.naturalFreq_1;
      var tmp_4 = $this.naturalFreq_1;
      var tmp$ret$1;
      // Inline function 'kotlin.math.sqrt' call
      var tmp1_sqrt = dampingRatioSquared - 1;
      tmp$ret$1 = Math.sqrt(tmp1_sqrt);
      tmp_2.gammaMinus_1 = tmp_3 - tmp_4 * tmp$ret$1;
    } else if ($this.dampingRatio_1 >= 0 ? $this.dampingRatio_1 < 1 : false) {
      var tmp_5 = $this;
      var tmp_6 = $this.naturalFreq_1;
      var tmp$ret$2;
      // Inline function 'kotlin.math.sqrt' call
      var tmp2_sqrt = 1 - dampingRatioSquared;
      tmp$ret$2 = Math.sqrt(tmp2_sqrt);
      tmp_5.dampedFreq_1 = tmp_6 * tmp$ret$2;
    }
    $this.initialized_1 = true;
  }
  function SpringSimulation(finalPosition) {
    this.finalPosition_1 = finalPosition;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    Spring_getInstance();
    var tmp0_sqrt = 50.0;
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    tmp.naturalFreq_1 = tmp$ret$0;
    this.initialized_1 = false;
    this.gammaPlus_1 = 0.0;
    this.gammaMinus_1 = 0.0;
    this.dampedFreq_1 = 0.0;
    var tmp_0 = this;
    Spring_getInstance();
    tmp_0.dampingRatio_1 = 1.0;
  }
  SpringSimulation.prototype.set_finalPosition_8y7idh_k$ = function (_set____db54di) {
    this.finalPosition_1 = _set____db54di;
  };
  SpringSimulation.prototype.get_finalPosition_vxiffa_k$ = function () {
    return this.finalPosition_1;
  };
  SpringSimulation.prototype.set_stiffness_ca51vp_k$ = function (value) {
    if (this.get_stiffness_dt2sgm_k$() <= 0) {
      throw IllegalArgumentException_init_$Create$('Spring stiffness constant must be positive.');
    }
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = value;
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    tmp.naturalFreq_1 = tmp$ret$0;
    this.initialized_1 = false;
  };
  SpringSimulation.prototype.get_stiffness_dt2sgm_k$ = function () {
    return this.naturalFreq_1 * this.naturalFreq_1;
  };
  SpringSimulation.prototype.set_dampingRatio_agau0n_k$ = function (value) {
    if (value < 0) {
      throw IllegalArgumentException_init_$Create$('Damping ratio must be non-negative');
    }
    this.dampingRatio_1 = value;
    this.initialized_1 = false;
  };
  SpringSimulation.prototype.get_dampingRatio_syjss2_k$ = function () {
    return this.dampingRatio_1;
  };
  SpringSimulation.prototype.getAcceleration_ut5r62_k$ = function (lastDisplacement, lastVelocity) {
    var adjustedDisplacement = lastDisplacement - this.finalPosition_1;
    var k = this.naturalFreq_1 * this.naturalFreq_1;
    var c = 2.0 * this.naturalFreq_1 * this.dampingRatio_1;
    return -k * adjustedDisplacement - c * lastVelocity;
  };
  SpringSimulation.prototype.updateValues_23ym3r_k$ = function (lastDisplacement, lastVelocity, timeElapsed) {
    init(this);
    var adjustedDisplacement = lastDisplacement - this.finalPosition_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    tmp$ret$0 = timeElapsed.toDouble_ygsx0s_k$() / 1000.0;
    var deltaT = tmp$ret$0;
    var displacement;
    var currentVelocity;
    if (this.dampingRatio_1 > 1) {
      var coeffA = adjustedDisplacement - (this.gammaMinus_1 * adjustedDisplacement - lastVelocity) / (this.gammaMinus_1 - this.gammaPlus_1);
      var coeffB = (this.gammaMinus_1 * adjustedDisplacement - lastVelocity) / (this.gammaMinus_1 - this.gammaPlus_1);
      var tmp$ret$1;
      // Inline function 'kotlin.math.exp' call
      var tmp0_exp = this.gammaMinus_1 * deltaT;
      tmp$ret$1 = Math.exp(tmp0_exp);
      var tmp = coeffA * tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.math.exp' call
      var tmp1_exp = this.gammaPlus_1 * deltaT;
      tmp$ret$2 = Math.exp(tmp1_exp);
      displacement = tmp + coeffB * tmp$ret$2;
      var tmp_0 = coeffA * this.gammaMinus_1;
      var tmp$ret$3;
      // Inline function 'kotlin.math.exp' call
      var tmp2_exp = this.gammaMinus_1 * deltaT;
      tmp$ret$3 = Math.exp(tmp2_exp);
      var tmp_1 = tmp_0 * tmp$ret$3;
      var tmp_2 = coeffB * this.gammaPlus_1;
      var tmp$ret$4;
      // Inline function 'kotlin.math.exp' call
      var tmp3_exp = this.gammaPlus_1 * deltaT;
      tmp$ret$4 = Math.exp(tmp3_exp);
      currentVelocity = tmp_1 + tmp_2 * tmp$ret$4;
    } else if (this.dampingRatio_1 === 1.0) {
      var coeffA_0 = adjustedDisplacement;
      var coeffB_0 = lastVelocity + this.naturalFreq_1 * adjustedDisplacement;
      var tmp_3 = coeffA_0 + coeffB_0 * deltaT;
      var tmp$ret$5;
      // Inline function 'kotlin.math.exp' call
      var tmp4_exp = -this.naturalFreq_1 * deltaT;
      tmp$ret$5 = Math.exp(tmp4_exp);
      displacement = tmp_3 * tmp$ret$5;
      var tmp_4 = coeffA_0 + coeffB_0 * deltaT;
      var tmp$ret$6;
      // Inline function 'kotlin.math.exp' call
      var tmp5_exp = -this.naturalFreq_1 * deltaT;
      tmp$ret$6 = Math.exp(tmp5_exp);
      var tmp_5 = tmp_4 * tmp$ret$6 * -this.naturalFreq_1;
      var tmp$ret$7;
      // Inline function 'kotlin.math.exp' call
      var tmp6_exp = -this.naturalFreq_1 * deltaT;
      tmp$ret$7 = Math.exp(tmp6_exp);
      currentVelocity = tmp_5 + coeffB_0 * tmp$ret$7;
    } else {
      var cosCoeff = adjustedDisplacement;
      var sinCoeff = 1 / this.dampedFreq_1 * (this.dampingRatio_1 * this.naturalFreq_1 * adjustedDisplacement + lastVelocity);
      var tmp$ret$8;
      // Inline function 'kotlin.math.exp' call
      var tmp7_exp = -this.dampingRatio_1 * this.naturalFreq_1 * deltaT;
      tmp$ret$8 = Math.exp(tmp7_exp);
      var tmp_6 = tmp$ret$8;
      var tmp$ret$9;
      // Inline function 'kotlin.math.cos' call
      var tmp8_cos = this.dampedFreq_1 * deltaT;
      tmp$ret$9 = Math.cos(tmp8_cos);
      var tmp_7 = cosCoeff * tmp$ret$9;
      var tmp$ret$10;
      // Inline function 'kotlin.math.sin' call
      var tmp9_sin = this.dampedFreq_1 * deltaT;
      tmp$ret$10 = Math.sin(tmp9_sin);
      displacement = tmp_6 * (tmp_7 + sinCoeff * tmp$ret$10);
      var tmp_8 = displacement * -this.naturalFreq_1 * this.dampingRatio_1;
      var tmp$ret$11;
      // Inline function 'kotlin.math.exp' call
      var tmp10_exp = -this.dampingRatio_1 * this.naturalFreq_1 * deltaT;
      tmp$ret$11 = Math.exp(tmp10_exp);
      var tmp_9 = tmp$ret$11;
      var tmp_10 = -this.dampedFreq_1 * cosCoeff;
      var tmp$ret$12;
      // Inline function 'kotlin.math.sin' call
      var tmp11_sin = this.dampedFreq_1 * deltaT;
      tmp$ret$12 = Math.sin(tmp11_sin);
      var tmp_11 = tmp_10 * tmp$ret$12;
      var tmp_12 = this.dampedFreq_1 * sinCoeff;
      var tmp$ret$13;
      // Inline function 'kotlin.math.cos' call
      var tmp12_cos = this.dampedFreq_1 * deltaT;
      tmp$ret$13 = Math.cos(tmp12_cos);
      currentVelocity = tmp_8 + tmp_9 * (tmp_11 + tmp_12 * tmp$ret$13);
    }
    var newValue = displacement + this.finalPosition_1;
    var newVelocity = currentVelocity;
    return Motion_0(newValue, newVelocity);
  };
  SpringSimulation.$metadata$ = classMeta('SpringSimulation');
  function _Motion___init__impl__vk56rv(packedValue) {
    return packedValue;
  }
  function _Motion___get_packedValue__impl__qymh4n($this) {
    return $this;
  }
  function _Motion___get_value__impl__e0x31d($this) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp0_unpackFloat1 = _Motion___get_packedValue__impl__qymh4n($this);
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat1.shr_wjue3g_k$(32).toInt_1tsl84_k$();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function _Motion___get_velocity__impl__h2mglt($this) {
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp0_unpackFloat2 = _Motion___get_packedValue__impl__qymh4n($this);
    var tmp$ret$0;
    // Inline function 'kotlin.fromBits' call
    var tmp0_fromBits = FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat2.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function Motion__copy_impl_s0k26a($this, value, velocity) {
    return Motion_0(value, velocity);
  }
  function Motion__copy$default_impl_xgjc6z($this, value, velocity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = _Motion___get_value__impl__e0x31d($this);
    if (!(($mask0 & 2) === 0))
      velocity = _Motion___get_velocity__impl__h2mglt($this);
    return Motion__copy_impl_s0k26a($this, value, velocity);
  }
  function Motion__toString_impl_wnrfdh($this) {
    return 'Motion(packedValue=' + toString($this) + ')';
  }
  function Motion__hashCode_impl_gm6pss($this) {
    return $this.hashCode();
  }
  function Motion__equals_impl_ngoxh4($this, other) {
    if (!(other instanceof Motion))
      return false;
    var tmp0_other_with_cast = other instanceof Motion ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Motion(packedValue) {
    this.packedValue_1 = packedValue;
  }
  Motion.prototype.toString = function () {
    return Motion__toString_impl_wnrfdh(this.packedValue_1);
  };
  Motion.prototype.hashCode = function () {
    return Motion__hashCode_impl_gm6pss(this.packedValue_1);
  };
  Motion.prototype.equals = function (other) {
    return Motion__equals_impl_ngoxh4(this.packedValue_1, other);
  };
  Motion.$metadata$ = classMeta('Motion');
  function Motion_0(value, velocity) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(value));
    var v2 = toLong(toBits(velocity));
    tmp$ret$0 = v1.shl_po5ip6_k$(32).or_s401rn_k$(v2.and_jhajnj_k$(new Long(-1, 0)));
    return _Motion___init__impl__vk56rv(tmp$ret$0);
  }
  function animate(_this__u8e3s4, animation, startTimeNanos, block, $cont) {
    var tmp = new $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function animate$default(_this__u8e3s4, animation, startTimeNanos, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      AnimationConstants_getInstance();
      startTimeNanos = new Long(0, -2147483648);
    }
    if (!(($mask0 & 4) === 0)) {
      block = animate$lambda;
    }
    return animate(_this__u8e3s4, animation, startTimeNanos, block, $cont);
  }
  function updateState(_this__u8e3s4, state) {
    state.set_value_rnwamw_k$(_this__u8e3s4.get_value_j01efc_k$());
    copyFrom(state.velocityVector_1, _this__u8e3s4.velocityVector_1);
    state.finishedTimeNanos_1 = _this__u8e3s4.finishedTimeNanos_1;
    state.lastFrameTimeNanos_1 = _this__u8e3s4.lastFrameTimeNanos_1;
    state.isRunning_1 = _this__u8e3s4.get_isRunning_okmtn0_k$();
  }
  function get_durationScale(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_1pi7hg_k$(Key_getInstance_1());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_scaleFactor_64aucw_k$();
    var scale = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.check' call
    var tmp0_check = scale >= 0.0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return scale;
  }
  function callWithFrameNanos(_this__u8e3s4, onFrame, $cont) {
    var tmp = new $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function doAnimationFrameWithScale(_this__u8e3s4, frameTimeNanos, durationScale, anim, state, block) {
    var tmp;
    if (durationScale === 0.0) {
      tmp = anim.get_durationNanos_ub5cy_k$();
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = frameTimeNanos.minus_llf5ei_k$(_this__u8e3s4.startTimeNanos_1);
      tmp$ret$0 = tmp0_div.toFloat_jhbgwv_k$() / durationScale;
      tmp = numberToLong(tmp$ret$0);
    }
    var playTimeNanos = tmp;
    doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block);
  }
  function doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block) {
    _this__u8e3s4.lastFrameTimeNanos_1 = frameTimeNanos;
    _this__u8e3s4.set_value_rnwamw_k$(anim.getValueFromNanos_iwi8kk_k$(playTimeNanos));
    _this__u8e3s4.velocityVector_1 = anim.getVelocityVectorFromNanos_n1b66h_k$(playTimeNanos);
    var isLastFrame = anim.isFinishedFromNanos_uhkxvh_k$(playTimeNanos);
    if (isLastFrame) {
      _this__u8e3s4.finishedTimeNanos_1 = _this__u8e3s4.lastFrameTimeNanos_1;
      _this__u8e3s4.set_isRunning_tw1q35_k$(false);
    }
    updateState(_this__u8e3s4, state);
    block(_this__u8e3s4);
  }
  function animate$lambda($this$null) {
    return Unit_getInstance();
  }
  function animate$lambda$lambda($this_animate) {
    return function () {
      $this_animate.isRunning_1 = false;
      return Unit_getInstance();
    };
  }
  function animate$lambda_0($lateInitScope, $initialValue, $animation, $initialVelocityVector, $durationScale, $this_animate, $block) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp = $animation.get_typeConverter_seyvfn_k$();
      var tmp_0 = $animation.get_targetValue_kq6mfd_k$();
      var tmp0_apply = new AnimationScope($initialValue, tmp, $initialVelocityVector, it, tmp_0, it, true, animate$lambda$lambda($this_animate));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>.<anonymous>' call
      doAnimationFrameWithScale(tmp0_apply, it, $durationScale, $animation, $this_animate, $block);
      tmp$ret$0 = tmp0_apply;
      $lateInitScope._v = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function animate$lambda_1($this_animate) {
    return function () {
      $this_animate.isRunning_1 = false;
      return Unit_getInstance();
    };
  }
  function animate$lambda_2($lateInitScope, $durationScale, $animation, $this_animate, $block) {
    return function (it) {
      doAnimationFrameWithScale(ensureNotNull($lateInitScope._v), it, $durationScale, $animation, $this_animate, $block);
      return Unit_getInstance();
    };
  }
  function callWithFrameNanos$lambda($onFrame) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = get_AnimationDebugDurationScale();
      tmp$ret$0 = it.div_9s1fi3_k$(toLong(tmp0_div));
      return $onFrame(tmp$ret$0);
    };
  }
  function $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.animation_1 = animation;
    this.startTimeNanos_1 = startTimeNanos;
    this.block_1 = block;
  }
  $animateCOROUTINE$1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 7;
            this.initialValue0__1 = this.animation_1.getValueFromNanos_iwi8kk_k$(new Long(0, 0));
            this.initialVelocityVector1__1 = this.animation_1.getVelocityVectorFromNanos_n1b66h_k$(new Long(0, 0));
            this.lateInitScope2__1 = {_v: null};
            this.exceptionState_1 = 6;
            AnimationConstants_getInstance();
            if (this.startTimeNanos_1.equals(new Long(0, -2147483648))) {
              var tmp_0 = this;
              tmp_0.durationScale3__1 = get_durationScale(this.get_context_h02k06_k$());
              this.state_1 = 1;
              suspendResult = callWithFrameNanos(this.animation_1, animate$lambda_0(this.lateInitScope2__1, this.initialValue0__1, this.animation_1, this.initialVelocityVector1__1, this.durationScale3__1, this._this__u8e3s4__1, this.block_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.animation_1.get_typeConverter_seyvfn_k$();
              var tmp_2 = this.animation_1.get_targetValue_kq6mfd_k$();
              var tmp0_apply = new AnimationScope(this.initialValue0__1, tmp_1, this.initialVelocityVector1__1, this.startTimeNanos_1, tmp_2, this.startTimeNanos_1, true, animate$lambda_1(this._this__u8e3s4__1));
              doAnimationFrameWithScale(tmp0_apply, this.startTimeNanos_1, get_durationScale(this.get_context_h02k06_k$()), this.animation_1, this._this__u8e3s4__1, this.block_1);
              this.lateInitScope2__1._v = tmp0_apply;
              this.state_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.state_1 = 2;
            continue $sm;
          case 2:
            this.state_1 = 3;
            continue $sm;
          case 3:
            if (!ensureNotNull(this.lateInitScope2__1._v).get_isRunning_okmtn0_k$()) {
              this.state_1 = 5;
              continue $sm;
            }

            var tmp_3 = this;
            tmp_3.durationScale4__1 = get_durationScale(this.get_context_h02k06_k$());
            this.state_1 = 4;
            suspendResult = callWithFrameNanos(this.animation_1, animate$lambda_2(this.lateInitScope2__1, this.durationScale4__1, this.animation_1, this._this__u8e3s4__1, this.block_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.state_1 = 3;
            continue $sm;
          case 5:
            this.exceptionState_1 = 7;
            this.state_1 = 8;
            continue $sm;
          case 6:
            this.exceptionState_1 = 7;
            var tmp_4 = this.exception_1;
            if (tmp_4 instanceof CancellationException) {
              var e = this.exception_1;
              var tmp0_safe_receiver = this.lateInitScope2__1._v;
              if (tmp0_safe_receiver == null) {
              } else {
                tmp0_safe_receiver.set_isRunning_tw1q35_k$(false);
              }
              var tmp1_safe_receiver = this.lateInitScope2__1._v;
              if (equals(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.lastFrameTimeNanos_1, this._this__u8e3s4__1.lastFrameTimeNanos_1)) {
                this._this__u8e3s4__1.isRunning_1 = false;
              }
              throw e;
            } else {
              throw this.exception_1;
            }

            break;
          case 7:
            throw this.exception_1;
          case 8:
            this.exceptionState_1 = 7;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.exceptionState_1 === 7) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $animateCOROUTINE$1.$metadata$ = classMeta('$animateCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.onFrame_1 = onFrame;
  }
  $callWithFrameNanosCOROUTINE$2.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            if (this._this__u8e3s4__1.get_isInfinite_uffwnt_k$()) {
              this.state_1 = 2;
              suspendResult = withInfiniteAnimationFrameNanos(this.onFrame_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.state_1 = 1;
              suspendResult = withFrameNanos(callWithFrameNanos$lambda(this.onFrame_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.WHEN_RESULT0__1 = suspendResult;
            this.state_1 = 3;
            continue $sm;
          case 2:
            this.WHEN_RESULT0__1 = suspendResult;
            this.state_1 = 3;
            continue $sm;
          case 3:
            return this.WHEN_RESULT0__1;
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
  $callWithFrameNanosCOROUTINE$2.$metadata$ = classMeta('$callWithFrameNanosCOROUTINE$2', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _set_targetValue__aqsk0r_0($this, _set____db54di) {
    var tmp0_setValue = targetValue$factory_1();
    return $this.targetValue$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function _get_targetValue__jjlmb5($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = targetValue$factory_2();
    tmp$ret$0 = $this.targetValue$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _set_animationSpec__7qdru($this, _set____db54di) {
    var tmp0_setValue = animationSpec$factory();
    return $this.animationSpec$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function _set_animation__pan2kh($this, _set____db54di) {
    var tmp0_setValue = animation$factory();
    return $this.animation$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function _set_offsetTimeNanos__i9wy86($this, _set____db54di) {
    var tmp0_setValue = offsetTimeNanos$factory();
    return $this.offsetTimeNanos$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function _get_offsetTimeNanos__sdn5qq($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = offsetTimeNanos$factory_0();
    tmp$ret$0 = $this.offsetTimeNanos$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _set_needsReset__wyw9nf($this, _set____db54di) {
    var tmp0_setValue = needsReset$factory();
    return $this.needsReset$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function _get_needsReset__mzz76h($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = needsReset$factory_0();
    tmp$ret$0 = $this.needsReset$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _set_velocityVector__vm30d3_0($this, _set____db54di) {
    $this.velocityVector_1 = _set____db54di;
  }
  function _get_velocityVector__dvxlkl_0($this) {
    return $this.velocityVector_1;
  }
  function _get_interruptionSpec__ruhcut($this) {
    return $this.interruptionSpec_1;
  }
  function updateAnimation($this, initialValue, isInterrupted) {
    var tmp;
    if (isInterrupted) {
      var tmp_0;
      var tmp_1 = $this.get_animationSpec_wdk2t2_k$();
      if (tmp_1 instanceof SpringSpec) {
        tmp_0 = $this.get_animationSpec_wdk2t2_k$();
      } else {
        tmp_0 = $this.interruptionSpec_1;
      }
      tmp = tmp_0;
    } else {
      tmp = $this.get_animationSpec_wdk2t2_k$();
    }
    var spec = tmp;
    _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$_0(spec, $this.typeConverter_1, initialValue, _get_targetValue__jjlmb5($this), $this.velocityVector_1));
    onChildAnimationUpdated($this.$this_1);
  }
  function updateAnimation$default($this, initialValue, isInterrupted, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      initialValue = $this.get_value_j01efc_k$();
    if (!(($mask0 & 4) === 0))
      isInterrupted = false;
    return updateAnimation($this, initialValue, isInterrupted);
  }
  function DeferredAnimationData($outer, animation, transitionSpec, targetValueByState) {
    this.$this_1 = $outer;
    this.animation_1 = animation;
    this.transitionSpec_1 = transitionSpec;
    this.targetValueByState_1 = targetValueByState;
  }
  DeferredAnimationData.prototype.get_animation_r0gd0b_k$ = function () {
    return this.animation_1;
  };
  DeferredAnimationData.prototype.set_transitionSpec_qk274z_k$ = function (_set____db54di) {
    this.transitionSpec_1 = _set____db54di;
  };
  DeferredAnimationData.prototype.get_transitionSpec_80wxl_k$ = function () {
    return this.transitionSpec_1;
  };
  DeferredAnimationData.prototype.set_targetValueByState_a3yc56_k$ = function (_set____db54di) {
    this.targetValueByState_1 = _set____db54di;
  };
  DeferredAnimationData.prototype.get_targetValueByState_4t5sar_k$ = function () {
    return this.targetValueByState_1;
  };
  DeferredAnimationData.prototype.updateAnimationStates_8v9ljd_k$ = function (segment) {
    var targetValue = this.targetValueByState_1(segment.get_targetState_kri3mx_k$());
    if (this.$this_1.$this_1.get_isSeeking_vjb393_k$()) {
      var initialValue = this.targetValueByState_1(segment.get_initialState_2eu9l6_k$());
      this.animation_1.updateInitialAndTargetValue_9aufa_k$(initialValue, targetValue, this.transitionSpec_1(segment));
    } else {
      this.animation_1.updateTargetValue_v2xwf0_k$(targetValue, this.transitionSpec_1(segment));
    }
  };
  DeferredAnimationData.prototype.get_value_j01efc_k$ = function () {
    this.updateAnimationStates_8v9ljd_k$(this.$this_1.$this_1.get_segment_xwnoei_k$());
    return this.animation_1.get_value_j01efc_k$();
  };
  DeferredAnimationData.$metadata$ = classMeta('DeferredAnimationData', [State]);
  function Transition$animateTo$composable$slambda$lambda(this$0, $durationScale) {
    return function (it) {
      var tmp;
      if (!this$0.get_isSeeking_vjb393_k$()) {
        var tmp$ret$0;
        // Inline function 'kotlin.Long.div' call
        var tmp0_div = 1;
        tmp$ret$0 = it.div_9s1fi3_k$(toLong(tmp0_div));
        this$0.onFrame_1dtgpn_k$(tmp$ret$0, $durationScale);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Transition_init_$Init$(transitionState, label, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      label = null;
    Transition.call($this, transitionState, label);
    return $this;
  }
  function Transition_init_$Create$(transitionState, label, $mask0, $marker) {
    return Transition_init_$Init$(transitionState, label, $mask0, $marker, Object.create(Transition.prototype));
  }
  function _get_transitionState__f9djyt($this) {
    return $this.transitionState_1;
  }
  function Transition_init_$Init$_0(initialState, label, $this) {
    Transition.call($this, new MutableTransitionState(initialState), label);
    return $this;
  }
  function Transition_init_$Create$_0(initialState, label) {
    return Transition_init_$Init$_0(initialState, label, Object.create(Transition.prototype));
  }
  function _set_segment__77iylu($this, _set____db54di) {
    var tmp0_setValue = segment$factory();
    return $this.segment$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function _set_startTimeNanos__1jy4fb($this, _set____db54di) {
    var tmp0_setValue = startTimeNanos$factory();
    return $this.startTimeNanos$delegate_1.set_value_rnwamw_k$(_set____db54di);
  }
  function _get_startTimeNanos__r31kgr($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = startTimeNanos$factory_0();
    tmp$ret$0 = $this.startTimeNanos$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _get__animations__z05tbx($this) {
    return $this._animations_1;
  }
  function _get__transitions__nj1dqs($this) {
    return $this._transitions_1;
  }
  function onChildAnimationUpdated($this) {
    $this.set_updateChildrenNeeded_kde0f_k$(true);
    if ($this.get_isSeeking_vjb393_k$()) {
      var maxDurationNanos = new Long(0, 0);
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = $this._animations_1;
      var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.compose.animation.core.Transition.onChildAnimationUpdated.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = maxDurationNanos;
        var tmp1_max = element.get_durationNanos_ub5cy_k$();
        tmp$ret$0 = tmp0_max.compareTo_n4fqi2_k$(tmp1_max) >= 0 ? tmp0_max : tmp1_max;
        maxDurationNanos = tmp$ret$0;
        element.seekTo_5llhw_k$($this.lastSeekedTimeNanos_1);
      }
      $this.set_updateChildrenNeeded_kde0f_k$(false);
    }
  }
  function TransitionAnimationState($outer, initialValue, initialVelocityVector, typeConverter, label) {
    this.$this_1 = $outer;
    this.typeConverter_1 = typeConverter;
    this.label_1 = label;
    var tmp = this;
    tmp.targetValue$delegate_1 = mutableStateOf$default(initialValue, null, 2, null);
    var tmp_0 = this;
    var tmp_1 = spring$default(0.0, 0.0, null, 7, null);
    tmp_0.animationSpec$delegate_1 = mutableStateOf$default(tmp_1, null, 2, null);
    var tmp_2 = this;
    var tmp_3 = TargetBasedAnimation_init_$Create$_0(this.get_animationSpec_wdk2t2_k$(), this.typeConverter_1, initialValue, _get_targetValue__jjlmb5(this), initialVelocityVector);
    tmp_2.animation$delegate_1 = mutableStateOf$default(tmp_3, null, 2, null);
    var tmp_4 = this;
    tmp_4.isFinished$delegate_1 = mutableStateOf$default(true, null, 2, null);
    var tmp_5 = this;
    var tmp_6 = new Long(0, 0);
    tmp_5.offsetTimeNanos$delegate_1 = mutableStateOf$default(tmp_6, null, 2, null);
    var tmp_7 = this;
    tmp_7.needsReset$delegate_1 = mutableStateOf$default(false, null, 2, null);
    var tmp_8 = this;
    tmp_8.value$delegate_1 = mutableStateOf$default(initialValue, null, 2, null);
    this.velocityVector_1 = initialVelocityVector;
    var tmp0_safe_receiver = get_visibilityThresholdMap().get_1mhr4y_k$(this.typeConverter_1);
    var tmp_9;
    if (tmp0_safe_receiver == null) {
      tmp_9 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.core.TransitionAnimationState.<anonymous>' call
      var vector = this.typeConverter_1.get_convertToVector_s594l4_k$()(initialValue);
      var inductionVariable = 0;
      var last = vector.get_size_woubt6_k$();
      if (inductionVariable < last)
        do {
          var id = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          vector.set_8gccym_k$(id, tmp0_safe_receiver);
        }
         while (inductionVariable < last);
      tmp$ret$0 = this.typeConverter_1.get_convertFromVector_kmewon_k$()(vector);
      tmp$ret$1 = tmp$ret$0;
      tmp_9 = tmp$ret$1;
    }
    var visibilityThreshold = tmp_9;
    var tmp_10 = this;
    tmp_10.interruptionSpec_1 = spring$default(0.0, 0.0, visibilityThreshold, 3, null);
  }
  TransitionAnimationState.prototype.get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  TransitionAnimationState.prototype.get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  TransitionAnimationState.prototype.get_animationSpec_wdk2t2_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = animationSpec$factory_0();
    tmp$ret$0 = this.animationSpec$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  TransitionAnimationState.prototype.get_animation_r0gd0b_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = animation$factory_0();
    tmp$ret$0 = this.animation$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  TransitionAnimationState.prototype.set_isFinished_l6qivk_k$ = function (_set____db54di) {
    var tmp0_setValue = isFinished$factory();
    return this.isFinished$delegate_1.set_value_rnwamw_k$(_set____db54di);
  };
  TransitionAnimationState.prototype.get_isFinished_qlhjyd_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isFinished$factory_0();
    tmp$ret$0 = this.isFinished$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  TransitionAnimationState.prototype.set_value_rnwamw_k$ = function (_set____db54di) {
    var tmp0_setValue = value$factory_3();
    return this.value$delegate_1.set_value_rnwamw_k$(_set____db54di);
  };
  TransitionAnimationState.prototype.get_value_j01efc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = value$factory_4();
    tmp$ret$0 = this.value$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  TransitionAnimationState.prototype.get_durationNanos_ub5cy_k$ = function () {
    return this.get_animation_r0gd0b_k$().durationNanos_1;
  };
  TransitionAnimationState.prototype.onPlayTimeChanged_10zdtt_k$ = function (playTimeNanos, durationScale) {
    var tmp;
    if (durationScale > 0.0) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = playTimeNanos.minus_llf5ei_k$(_get_offsetTimeNanos__sdn5qq(this));
      tmp$ret$0 = tmp0_div.toFloat_jhbgwv_k$() / durationScale;
      var scaledTime = tmp$ret$0;
      // Inline function 'kotlin.check' call
      var tmp1_check = !isNaN_0(scaledTime);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_check) {
        var tmp$ret$1;
        // Inline function 'androidx.compose.animation.core.TransitionAnimationState.onPlayTimeChanged.<anonymous>' call
        tmp$ret$1 = 'Duration scale adjusted time is NaN. Duration scale: ' + durationScale + ',' + ('playTimeNanos: ' + toString(playTimeNanos) + ', offsetTimeNanos: ' + toString(_get_offsetTimeNanos__sdn5qq(this)));
        var message = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp = numberToLong(scaledTime);
    } else {
      tmp = this.get_animation_r0gd0b_k$().durationNanos_1;
    }
    var playTime = tmp;
    this.set_value_rnwamw_k$(this.get_animation_r0gd0b_k$().getValueFromNanos_iwi8kk_k$(playTime));
    this.velocityVector_1 = this.get_animation_r0gd0b_k$().getVelocityVectorFromNanos_n1b66h_k$(playTime);
    if (this.get_animation_r0gd0b_k$().isFinishedFromNanos_uhkxvh_k$(playTime)) {
      this.set_isFinished_l6qivk_k$(true);
      _set_offsetTimeNanos__i9wy86(this, new Long(0, 0));
    }
  };
  TransitionAnimationState.prototype.seekTo_5llhw_k$ = function (playTimeNanos) {
    this.set_value_rnwamw_k$(this.get_animation_r0gd0b_k$().getValueFromNanos_iwi8kk_k$(playTimeNanos));
    this.velocityVector_1 = this.get_animation_r0gd0b_k$().getVelocityVectorFromNanos_n1b66h_k$(playTimeNanos);
  };
  TransitionAnimationState.prototype.resetAnimation_pckuxw_k$ = function () {
    _set_needsReset__wyw9nf(this, true);
  };
  TransitionAnimationState.prototype.updateTargetValue_v2xwf0_k$ = function (targetValue, animationSpec) {
    if (!equals(_get_targetValue__jjlmb5(this), targetValue) ? true : _get_needsReset__mzz76h(this)) {
      _set_targetValue__aqsk0r_0(this, targetValue);
      _set_animationSpec__7qdru(this, animationSpec);
      updateAnimation$default(this, null, !this.get_isFinished_qlhjyd_k$(), 2, null);
      this.set_isFinished_l6qivk_k$(false);
      _set_offsetTimeNanos__i9wy86(this, this.$this_1.get_playTimeNanos_50m2yz_k$());
      _set_needsReset__wyw9nf(this, false);
    }
  };
  TransitionAnimationState.prototype.updateInitialAndTargetValue_9aufa_k$ = function (initialValue, targetValue, animationSpec) {
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    if (equals(this.get_animation_r0gd0b_k$().initialValue_1, initialValue) ? equals(this.get_animation_r0gd0b_k$().targetValue_1, targetValue) : false) {
      return Unit_getInstance();
    }
    updateAnimation$default(this, initialValue, false, 4, null);
  };
  TransitionAnimationState.$metadata$ = classMeta('TransitionAnimationState', [State]);
  function SegmentImpl(initialState, targetState) {
    this.initialState_1 = initialState;
    this.targetState_1 = targetState;
  }
  SegmentImpl.prototype.get_initialState_2eu9l6_k$ = function () {
    return this.initialState_1;
  };
  SegmentImpl.prototype.get_targetState_kri3mx_k$ = function () {
    return this.targetState_1;
  };
  SegmentImpl.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Segment) : false) {
      tmp_0 = equals(this.initialState_1, other.get_initialState_2eu9l6_k$());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.targetState_1, other.get_targetState_kri3mx_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  SegmentImpl.prototype.hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.initialState_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    var tmp$ret$1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_hashCode = this.targetState_1;
    var tmp0_safe_receiver_0 = tmp1_hashCode;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    return tmp + tmp$ret$1 | 0;
  };
  SegmentImpl.$metadata$ = classMeta('SegmentImpl', [Segment]);
  function Segment() {
  }
  Segment.$metadata$ = interfaceMeta('Segment');
  function DeferredAnimation($outer, typeConverter, label) {
    this.$this_1 = $outer;
    this.typeConverter_1 = typeConverter;
    this.label_1 = label;
    var tmp = this;
    tmp.data$delegate_1 = mutableStateOf$default(null, null, 2, null);
  }
  DeferredAnimation.prototype.get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  DeferredAnimation.prototype.get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  DeferredAnimation.prototype.set_data_1uxdza_k$ = function (_set____db54di) {
    var tmp0_setValue = data$factory();
    return this.data$delegate_1.set_value_rnwamw_k$(_set____db54di);
  };
  DeferredAnimation.prototype.get_data_wokkxf_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = data$factory_0();
    tmp$ret$0 = this.data$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  DeferredAnimation.prototype.animate_577fcm_k$ = function (transitionSpec, targetValueByState) {
    var tmp0_elvis_lhs = this.get_data_wokkxf_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new DeferredAnimationData(this, new TransitionAnimationState(this.$this_1, targetValueByState(this.$this_1.get_currentState_snihnl_k$()), createZeroVectorFrom(this.typeConverter_1, targetValueByState(this.$this_1.get_currentState_snihnl_k$())), this.typeConverter_1, this.label_1), transitionSpec, targetValueByState);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
      this.set_data_1uxdza_k$(tmp0_apply);
      this.$this_1.addAnimation_w7wt87_k$(tmp0_apply.animation_1);
      tmp$ret$0 = tmp0_apply;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var animData = tmp;
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
    animData.targetValueByState_1 = targetValueByState;
    animData.transitionSpec_1 = transitionSpec;
    animData.updateAnimationStates_8v9ljd_k$(this.$this_1.get_segment_xwnoei_k$());
    tmp$ret$1 = animData;
    return tmp$ret$1;
  };
  DeferredAnimation.prototype.setupSeeking_5hxrrw_k$ = function () {
    var tmp0_safe_receiver = this.get_data_wokkxf_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.setupSeeking.<anonymous>' call
      tmp0_safe_receiver.animation_1.updateInitialAndTargetValue_9aufa_k$(tmp0_safe_receiver.targetValueByState_1(this.$this_1.get_segment_xwnoei_k$().get_initialState_2eu9l6_k$()), tmp0_safe_receiver.targetValueByState_1(this.$this_1.get_segment_xwnoei_k$().get_targetState_kri3mx_k$()), tmp0_safe_receiver.transitionSpec_1(this.$this_1.get_segment_xwnoei_k$()));
      tmp$ret$0 = tmp0_safe_receiver;
    }
  };
  DeferredAnimation.$metadata$ = classMeta('DeferredAnimation');
  function updateTarget$composable$lambda($tmp0_rcvr, $targetState, $$changed, $composer, $force) {
    return $tmp0_rcvr.updateTarget$composable_g8p3zo_k$($targetState, $composer, $$changed | 1);
  }
  function animateTo$composable$lambda($tmp0_rcvr, $targetState, $$changed, $composer, $force) {
    return $tmp0_rcvr.animateTo$composable_p1cxn2_k$($targetState, $composer, $$changed | 1);
  }
  function Transition$totalDurationNanos$delegate$lambda(this$0) {
    return function () {
      var maxDurationNanos = new Long(0, 0);
      var tmp0_forEach = this$0._animations_1;
      var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'androidx.compose.animation.core.Transition.totalDurationNanos$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = maxDurationNanos;
        var tmp1_max = element.get_durationNanos_ub5cy_k$();
        tmp$ret$0 = tmp0_max.compareTo_n4fqi2_k$(tmp1_max) >= 0 ? tmp0_max : tmp1_max;
        maxDurationNanos = tmp$ret$0;
      }
      var tmp1_forEach = this$0._transitions_1;
      var tmp0_iterator_0 = tmp1_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'androidx.compose.animation.core.Transition.totalDurationNanos$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp0_max_0 = maxDurationNanos;
        var tmp1_max_0 = element_0.get_totalDurationNanos_cuj0z4_k$();
        tmp$ret$1 = tmp0_max_0.compareTo_n4fqi2_k$(tmp1_max_0) >= 0 ? tmp0_max_0 : tmp1_max_0;
        maxDurationNanos = tmp$ret$1;
      }
      return maxDurationNanos;
    };
  }
  function Transition$updateTarget$composable$lambda$ref($tmp0_rcvr, $targetState, $$changed) {
    return function (p0, p1) {
      updateTarget$composable$lambda($tmp0_rcvr, $targetState, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function Transition$animateTo$composable$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  Transition$animateTo$composable$slambda.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  Transition$animateTo$composable$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Transition$animateTo$composable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.state_1 = 4;
              continue $sm;
            }

            this.durationScale0__1 = get_durationScale(this.$this$LaunchedEffect_1.get_coroutineContext_115oqo_k$());
            this.state_1 = 2;
            suspendResult = withFrameNanos(Transition$animateTo$composable$slambda$lambda(this.this$0__1, this.durationScale0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.state_1 = 1;
            continue $sm;
          case 3:
            throw this.exception_1;
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.exceptionState_1 === 3) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  Transition$animateTo$composable$slambda.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new Transition$animateTo$composable$slambda(this.this$0__1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  Transition$animateTo$composable$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  Transition$animateTo$composable$slambda.$metadata$ = classMeta('Transition$animateTo$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Transition$animateTo$composable$slambda_0(this$0, resultContinuation) {
    var i = new Transition$animateTo$composable$slambda(this$0, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Transition$animateTo$composable$lambda$ref($tmp0_rcvr, $targetState, $$changed) {
    return function (p0, p1) {
      animateTo$composable$lambda($tmp0_rcvr, $targetState, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function Transition(transitionState, label) {
    this.transitionState_1 = transitionState;
    this.label_1 = label;
    var tmp = this;
    var tmp_0 = this.get_currentState_snihnl_k$();
    tmp.targetState$delegate_1 = mutableStateOf$default(tmp_0, null, 2, null);
    var tmp_1 = this;
    var tmp_2 = new SegmentImpl(this.get_currentState_snihnl_k$(), this.get_currentState_snihnl_k$());
    tmp_1.segment$delegate_1 = mutableStateOf$default(tmp_2, null, 2, null);
    var tmp_3 = this;
    var tmp_4 = new Long(0, 0);
    tmp_3.playTimeNanos$delegate_1 = mutableStateOf$default(tmp_4, null, 2, null);
    var tmp_5 = this;
    AnimationConstants_getInstance();
    var tmp_6 = new Long(0, -2147483648);
    tmp_5.startTimeNanos$delegate_1 = mutableStateOf$default(tmp_6, null, 2, null);
    var tmp_7 = this;
    tmp_7.updateChildrenNeeded$delegate_1 = mutableStateOf$default(true, null, 2, null);
    this._animations_1 = mutableStateListOf();
    this._transitions_1 = mutableStateListOf();
    var tmp_8 = this;
    tmp_8.isSeeking$delegate_1 = mutableStateOf$default(false, null, 2, null);
    this.lastSeekedTimeNanos_1 = new Long(0, 0);
    var tmp_9 = this;
    tmp_9.totalDurationNanos$delegate_1 = derivedStateOf(Transition$totalDurationNanos$delegate$lambda(this));
  }
  Transition.prototype.get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  Transition.prototype.set_currentState_fwr97s_k$ = function (value) {
    this.transitionState_1.set_currentState_fwr97s_k$(value);
  };
  Transition.prototype.get_currentState_snihnl_k$ = function () {
    return this.transitionState_1.get_currentState_snihnl_k$();
  };
  Transition.prototype.set_targetState_9v8wrq_k$ = function (_set____db54di) {
    var tmp0_setValue = targetState$factory();
    return this.targetState$delegate_1.set_value_rnwamw_k$(_set____db54di);
  };
  Transition.prototype.get_targetState_kri3mx_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = targetState$factory_0();
    tmp$ret$0 = this.targetState$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  Transition.prototype.get_segment_xwnoei_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = segment$factory_0();
    tmp$ret$0 = this.segment$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  Transition.prototype.get_isRunning_okmtn0_k$ = function () {
    var tmp = _get_startTimeNanos__r31kgr(this);
    AnimationConstants_getInstance();
    return !tmp.equals(new Long(0, -2147483648));
  };
  Transition.prototype.set_playTimeNanos_xc4lgm_k$ = function (_set____db54di) {
    var tmp0_setValue = playTimeNanos$factory();
    return this.playTimeNanos$delegate_1.set_value_rnwamw_k$(_set____db54di);
  };
  Transition.prototype.get_playTimeNanos_50m2yz_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = playTimeNanos$factory_0();
    tmp$ret$0 = this.playTimeNanos$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  Transition.prototype.set_updateChildrenNeeded_kde0f_k$ = function (_set____db54di) {
    var tmp0_setValue = updateChildrenNeeded$factory();
    return this.updateChildrenNeeded$delegate_1.set_value_rnwamw_k$(_set____db54di);
  };
  Transition.prototype.get_updateChildrenNeeded_bsutx6_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = updateChildrenNeeded$factory_0();
    tmp$ret$0 = this.updateChildrenNeeded$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  Transition.prototype.get_transitions_hojw6j_k$ = function () {
    return this._transitions_1;
  };
  Transition.prototype.get_animations_ez9gco_k$ = function () {
    return this._animations_1;
  };
  Transition.prototype.set_isSeeking_jx5uti_k$ = function (_set____db54di) {
    var tmp0_setValue = isSeeking$factory();
    return this.isSeeking$delegate_1.set_value_rnwamw_k$(_set____db54di);
  };
  Transition.prototype.get_isSeeking_vjb393_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isSeeking$factory_0();
    tmp$ret$0 = this.isSeeking$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  Transition.prototype.set_lastSeekedTimeNanos_7ej7oh_k$ = function (_set____db54di) {
    this.lastSeekedTimeNanos_1 = _set____db54di;
  };
  Transition.prototype.get_lastSeekedTimeNanos_ycnk8s_k$ = function () {
    return this.lastSeekedTimeNanos_1;
  };
  Transition.prototype.get_totalDurationNanos_cuj0z4_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = totalDurationNanos$factory();
    tmp$ret$0 = this.totalDurationNanos$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  Transition.prototype.onFrame_1dtgpn_k$ = function (frameTimeNanos, durationScale) {
    var tmp = _get_startTimeNanos__r31kgr(this);
    AnimationConstants_getInstance();
    if (tmp.equals(new Long(0, -2147483648))) {
      this.onTransitionStart_ur3khz_k$(frameTimeNanos);
    }
    this.set_updateChildrenNeeded_kde0f_k$(false);
    this.set_playTimeNanos_xc4lgm_k$(frameTimeNanos.minus_llf5ei_k$(_get_startTimeNanos__r31kgr(this)));
    var allFinished = true;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this._animations_1;
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
      if (!element.get_isFinished_qlhjyd_k$()) {
        element.onPlayTimeChanged_10zdtt_k$(this.get_playTimeNanos_50m2yz_k$(), durationScale);
      }
      if (!element.get_isFinished_qlhjyd_k$()) {
        allFinished = false;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this._transitions_1;
    var tmp0_iterator_0 = tmp1_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
      if (!equals(element_0.get_targetState_kri3mx_k$(), element_0.get_currentState_snihnl_k$())) {
        element_0.onFrame_1dtgpn_k$(this.get_playTimeNanos_50m2yz_k$(), durationScale);
      }
      if (!equals(element_0.get_targetState_kri3mx_k$(), element_0.get_currentState_snihnl_k$())) {
        allFinished = false;
      }
    }
    if (allFinished) {
      this.onTransitionEnd_dl3p06_k$();
    }
  };
  Transition.prototype.onTransitionStart_ur3khz_k$ = function (frameTimeNanos) {
    _set_startTimeNanos__1jy4fb(this, frameTimeNanos);
    this.transitionState_1.set_isRunning_tw1q35_k$(true);
  };
  Transition.prototype.onTransitionEnd_dl3p06_k$ = function () {
    AnimationConstants_getInstance();
    _set_startTimeNanos__1jy4fb(this, new Long(0, -2147483648));
    this.set_currentState_fwr97s_k$(this.get_targetState_kri3mx_k$());
    this.set_playTimeNanos_xc4lgm_k$(new Long(0, 0));
    this.transitionState_1.set_isRunning_tw1q35_k$(false);
  };
  Transition.prototype.setPlaytimeAfterInitialAndTargetStateEstablished_wjg0zp_k$ = function (initialState, targetState, playTimeNanos) {
    AnimationConstants_getInstance();
    _set_startTimeNanos__1jy4fb(this, new Long(0, -2147483648));
    this.transitionState_1.set_isRunning_tw1q35_k$(false);
    if ((!this.get_isSeeking_vjb393_k$() ? true : !equals(this.get_currentState_snihnl_k$(), initialState)) ? true : !equals(this.get_targetState_kri3mx_k$(), targetState)) {
      this.set_currentState_fwr97s_k$(initialState);
      this.set_targetState_9v8wrq_k$(targetState);
      this.set_isSeeking_jx5uti_k$(true);
      _set_segment__77iylu(this, new SegmentImpl(initialState, targetState));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this._transitions_1;
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      var tmp0_let = element instanceof Transition ? element : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (tmp0_let.get_isSeeking_vjb393_k$()) {
        tmp0_let.setPlaytimeAfterInitialAndTargetStateEstablished_wjg0zp_k$(tmp0_let.get_currentState_snihnl_k$(), tmp0_let.get_targetState_kri3mx_k$(), playTimeNanos);
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this._animations_1;
    var tmp0_iterator_0 = tmp1_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
      element_0.seekTo_5llhw_k$(playTimeNanos);
    }
    this.lastSeekedTimeNanos_1 = playTimeNanos;
  };
  Transition.prototype.addTransition_oedyge_k$ = function (transition) {
    return this._transitions_1.add_1j60qe_k$(transition);
  };
  Transition.prototype.removeTransition_w68vpt_k$ = function (transition) {
    return this._transitions_1.remove_8hbkbr_k$(transition);
  };
  Transition.prototype.addAnimation_w7wt87_k$ = function (animation) {
    return this._animations_1.add_1j60qe_k$(animation);
  };
  Transition.prototype.removeAnimation_ugzgad_k$ = function (animation) {
    this._animations_1.remove_8hbkbr_k$(animation);
  };
  Transition.prototype.updateTarget_ejaqwt_k$ = function (targetState) {
    illegalDecoyCallException('updateTarget');
  };
  Transition.prototype.animateTo_4b9bgh_k$ = function (targetState) {
    illegalDecoyCallException('animateTo');
  };
  Transition.prototype.removeAnimation_jz6bgo_k$ = function (deferredAnimation) {
    var tmp0_safe_receiver = deferredAnimation.get_data_wokkxf_k$();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animation_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.removeAnimation_ugzgad_k$(tmp1_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  };
  Transition.prototype.updateTarget$composable_g8p3zo_k$ = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1657853547);
    sourceInformation($composer_0, 'C(updateTarget$composable):Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(targetState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1657853547, $changed, -1, 'androidx.compose.animation.core.Transition.updateTarget$composable (Transition.kt:399)');
      }
      if (!this.get_isSeeking_vjb393_k$()) {
        if (!equals(this.get_targetState_kri3mx_k$(), targetState)) {
          _set_segment__77iylu(this, new SegmentImpl(this.get_targetState_kri3mx_k$(), targetState));
          this.set_currentState_fwr97s_k$(this.get_targetState_kri3mx_k$());
          this.set_targetState_9v8wrq_k$(targetState);
          if (!this.get_isRunning_okmtn0_k$()) {
            this.set_updateChildrenNeeded_kde0f_k$(true);
          }
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_forEach = this._animations_1;
          var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'androidx.compose.animation.core.Transition.updateTarget$composable.<anonymous>' call
            element.resetAnimation_pckuxw_k$();
          }
        }
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(Transition$updateTarget$composable$lambda$ref(tmp0_rcvr, targetState, $changed));
    }
  };
  Transition.prototype.animateTo$composable_p1cxn2_k$ = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(254343587);
    sourceInformation($composer_0, 'C(animateTo$composable)426@16622L25,430@16892L655,430@16871L676:Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(targetState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(254343587, $dirty, -1, 'androidx.compose.animation.core.Transition.animateTo$composable (Transition.kt:424)');
      }
      if (!this.get_isSeeking_vjb393_k$()) {
        this.updateTarget$composable_g8p3zo_k$(targetState, $composer_0, 14 & $dirty | 112 & $dirty);
        if ((!equals(targetState, this.get_currentState_snihnl_k$()) ? true : this.get_isRunning_okmtn0_k$()) ? true : this.get_updateChildrenNeeded_bsutx6_k$()) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable = $composer_0;
          var tmp1_remember$composable = 14 & $dirty >> 3;
          var $composer_1 = tmp0_remember$composable;
          $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
          sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache = $composer_1;
          var tmp2_cache = $composer_1.changed_ga7h3f_k$(this);
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp;
          if (tmp2_cache ? true : tmp0_let === Companion_getInstance().Empty_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.animation.core.Transition.animateTo$composable.<anonymous>' call
            tmp$ret$0 = Transition$animateTo$composable$slambda_0(this, null);
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
          LaunchedEffect$composable(this, tmp$ret$4, $composer_0, 14 & $dirty >> 3);
        }
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(Transition$animateTo$composable$lambda$ref(tmp0_rcvr, targetState, $changed));
    }
  };
  Transition.$metadata$ = classMeta('Transition');
  function updateTransition$composable(targetState, label, $composer, $changed, $default) {
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1999981197);
    sourceInformation($composer_0, 'C(updateTransition$composable)P(1)70@2894L51,71@2961L22,72@3017L195,72@2988L224:Transition.kt#pdpnli');
    if (!(($default & 2) === 0)) {
      label_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-1999981197, $changed, -1, 'androidx.compose.animation.core.updateTransition$composable (Transition.kt:66)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(547886695);
    sourceInformation($composer_1, 'C(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance().Empty_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>' call
      tmp$ret$0 = Transition_init_$Create$_0(targetState, label_0._v);
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
    var transition = tmp$ret$4;
    transition.animateTo$composable_p1cxn2_k$(targetState, $composer_0, 8 & $changed | 14 & $changed);
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp1_remember$composable = $composer_0;
    var $composer_2 = tmp1_remember$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
    sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_2;
    var tmp2_cache = $composer_2.changed_ga7h3f_k$(transition);
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance().Empty_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>' call
      tmp$ret$5 = updateTransition$composable$lambda(transition);
      var value_0 = tmp$ret$5;
      tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    tmp$ret$6 = tmp_1;
    tmp$ret$7 = tmp$ret$6;
    var tmp_2 = tmp$ret$7;
    tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    var tmp0_0 = tmp$ret$8;
    $composer_2.endReplaceableGroup_er37p7_k$();
    tmp$ret$9 = tmp0_0;
    DisposableEffect$composable(transition, tmp$ret$9, $composer_0, 0);
    var tmp0_1 = transition;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_1;
  }
  function animateFloat$composable(_this__u8e3s4, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1610198356);
    sourceInformation($composer_0, 'C(animateFloat$composable)P(2)938@37489L78:Transition.kt#pdpnli');
    if (!(($default & 1) === 0)) {
      transitionSpec_0 = animateFloat$composable$lambda;
    }
    if (!(($default & 2) === 0))
      label_0 = 'FloatAnimation';
    var tmp$ret$0;
    // Inline function 'androidx.compose.animation.core.animateValue$composable' call
    var tmp0_animateValue$composable = get_VectorConverter_2(FloatCompanionObject_getInstance());
    var tmp1_animateValue$composable = transitionSpec_0;
    var tmp2_animateValue$composable = label_0;
    var tmp3_animateValue$composable = $composer_0;
    var tmp4_animateValue$composable = 14 & $changed | 896 & $changed << 3 | 7168 & $changed << 3 | 57344 & $changed << 3;
    var transitionSpec_1 = tmp1_animateValue$composable;
    var label_1 = tmp2_animateValue$composable;
    var $composer_1 = tmp3_animateValue$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(-1940744337);
    sourceInformation($composer_1, 'C(animateValue$composable)P(3,2)856@34079L32,857@34134L31,858@34190L23,860@34226L89:Transition.kt#pdpnli');
    if (!(0 === 0)) {
      transitionSpec_1 = animateFloat$composable$lambda_0;
    }
    if (!(0 === 0))
      label_1 = 'ValueAnimation';
    var initialValue = targetValueByState(_this__u8e3s4.get_currentState_snihnl_k$(), $composer_1, 112 & tmp4_animateValue$composable >> 9);
    var targetValue = targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_1, 112 & tmp4_animateValue$composable >> 9);
    var animationSpec = transitionSpec_1(_this__u8e3s4.get_segment_xwnoei_k$(), $composer_1, 112 & tmp4_animateValue$composable >> 3);
    var tmp0 = createTransitionAnimation$composable(_this__u8e3s4, initialValue, targetValue, animationSpec, tmp0_animateValue$composable, label_1, $composer_1, 14 & tmp4_animateValue$composable | 57344 & tmp4_animateValue$composable << 9 | 458752 & tmp4_animateValue$composable << 6);
    $composer_1.endReplaceableGroup_er37p7_k$();
    tmp$ret$0 = tmp0;
    var tmp0_0 = tmp$ret$0;
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function MutableTransitionState(initialState) {
    var tmp = this;
    tmp.currentState$delegate_1 = mutableStateOf$default(initialState, null, 2, null);
    var tmp_0 = this;
    tmp_0.targetState$delegate_1 = mutableStateOf$default(initialState, null, 2, null);
    var tmp_1 = this;
    tmp_1.isRunning$delegate_1 = mutableStateOf$default(false, null, 2, null);
    this.$stable_1 = 0;
  }
  MutableTransitionState.prototype.set_currentState_fwr97s_k$ = function (_set____db54di) {
    var tmp0_setValue = currentState$factory();
    return this.currentState$delegate_1.set_value_rnwamw_k$(_set____db54di);
  };
  MutableTransitionState.prototype.get_currentState_snihnl_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = currentState$factory_0();
    tmp$ret$0 = this.currentState$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  MutableTransitionState.prototype.set_targetState_9v8wrq_k$ = function (_set____db54di) {
    var tmp0_setValue = targetState$factory_1();
    return this.targetState$delegate_1.set_value_rnwamw_k$(_set____db54di);
  };
  MutableTransitionState.prototype.get_targetState_kri3mx_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = targetState$factory_2();
    tmp$ret$0 = this.targetState$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  MutableTransitionState.prototype.get_isIdle_evzi1z_k$ = function () {
    return equals(this.get_currentState_snihnl_k$(), this.get_targetState_kri3mx_k$()) ? !this.get_isRunning_okmtn0_k$() : false;
  };
  MutableTransitionState.prototype.set_isRunning_tw1q35_k$ = function (_set____db54di) {
    var tmp0_setValue = isRunning$factory_3();
    return this.isRunning$delegate_1.set_value_rnwamw_k$(_set____db54di);
  };
  MutableTransitionState.prototype.get_isRunning_okmtn0_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isRunning$factory_4();
    tmp$ret$0 = this.isRunning$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  MutableTransitionState.$metadata$ = classMeta('MutableTransitionState');
  function get_AnimationDebugDurationScale() {
    return AnimationDebugDurationScale;
  }
  var AnimationDebugDurationScale;
  function animateValue$composable(_this__u8e3s4, typeConverter, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1940744337);
    sourceInformation($composer_0, 'C(animateValue$composable)P(3,2)856@34079L32,857@34134L31,858@34190L23,860@34226L89:Transition.kt#pdpnli');
    if (!(($default & 2) === 0)) {
      transitionSpec_0 = animateValue$composable$lambda;
    }
    if (!(($default & 4) === 0))
      label_0 = 'ValueAnimation';
    var initialValue = targetValueByState(_this__u8e3s4.get_currentState_snihnl_k$(), $composer_0, 112 & $changed >> 9);
    var targetValue = targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_0, 112 & $changed >> 9);
    var animationSpec = transitionSpec_0(_this__u8e3s4.get_segment_xwnoei_k$(), $composer_0, 112 & $changed >> 3);
    var tmp0 = createTransitionAnimation$composable(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label_0, $composer_0, 14 & $changed | 57344 & $changed << 9 | 458752 & $changed << 6);
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function createTransitionAnimation$composable(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1918946450);
    sourceInformation($composer_0, 'C(createTransitionAnimation$composable)P(1,3!1,4)872@34615L499,895@35498L128,895@35460L166:Transition.kt#pdpnli');
    if (isTraceInProgress()) {
      traceEventStart(1918946450, $changed, -1, 'androidx.compose.animation.core.createTransitionAnimation$composable (Transition.kt:865)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var tmp1_remember$composable = 14 & $changed;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
    sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.changed_ga7h3f_k$(_this__u8e3s4);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance().Empty_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.core.createTransitionAnimation$composable.<anonymous>' call
      tmp$ret$0 = new TransitionAnimationState(_this__u8e3s4, initialValue, createZeroVectorFrom(typeConverter, targetValue), typeConverter, label);
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
    var transitionAnimation = tmp$ret$4;
    if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
      transitionAnimation.updateInitialAndTargetValue_9aufa_k$(initialValue, targetValue, animationSpec);
    } else {
      transitionAnimation.updateTargetValue_v2xwf0_k$(targetValue, animationSpec);
    }
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp2_remember$composable = $composer_0;
    var tmp3_remember$composable = 14 & $changed;
    var $composer_2 = tmp2_remember$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_2, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_2;
    var tmp2_cache_0 = !!($composer_2.changed_ga7h3f_k$(_this__u8e3s4) | $composer_2.changed_ga7h3f_k$(transitionAnimation));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance().Empty_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.animation.core.createTransitionAnimation$composable.<anonymous>' call
      tmp$ret$5 = createTransitionAnimation$composable$lambda(_this__u8e3s4, transitionAnimation);
      var value_0 = tmp$ret$5;
      tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    tmp$ret$6 = tmp_1;
    tmp$ret$7 = tmp$ret$6;
    var tmp_2 = tmp$ret$7;
    tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    var tmp0_0 = tmp$ret$8;
    $composer_2.endReplaceableGroup_er37p7_k$();
    tmp$ret$9 = tmp0_0;
    DisposableEffect$composable(transitionAnimation, tmp$ret$9, $composer_0, 0);
    var tmp0_1 = transitionAnimation;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_1;
  }
  function _no_name_provided__qut3iv($transition) {
    this.$transition_1 = $transition;
  }
  _no_name_provided__qut3iv.prototype.dispose_3n44we_k$ = function () {
    // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.$transition_1.onTransitionEnd_dl3p06_k$();
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function updateTransition$composable$lambda($transition) {
    return function ($this$DisposableEffect) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv($transition);
      return tmp$ret$0;
    };
  }
  function animateFloat$composable$lambda($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-522164544);
    if (isTraceInProgress()) {
      traceEventStart(-522164544, $changed, -1, 'androidx.compose.animation.core.animateFloat$composable.<anonymous> (Transition.kt:934)');
    }
    var tmp0 = spring$default(0.0, 0.0, null, 7, null);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function animateFloat$composable$lambda_0($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:851)');
    }
    var tmp0 = spring$default(0.0, 0.0, null, 7, null);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function animateValue$composable$lambda($this$null, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-895531546);
    if (isTraceInProgress()) {
      traceEventStart(-895531546, $changed, -1, 'androidx.compose.animation.core.animateValue$composable.<anonymous> (Transition.kt:851)');
    }
    var tmp0 = spring$default(0.0, 0.0, null, 7, null);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  }
  function _no_name_provided__qut3iv_0($this_createTransitionAnimation$composable, $transitionAnimation) {
    this.$this_createTransitionAnimation$composable_1 = $this_createTransitionAnimation$composable;
    this.$transitionAnimation_1 = $transitionAnimation;
  }
  _no_name_provided__qut3iv_0.prototype.dispose_3n44we_k$ = function () {
    // Inline function 'androidx.compose.animation.core.createTransitionAnimation$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.$this_createTransitionAnimation$composable_1.removeAnimation_ugzgad_k$(this.$transitionAnimation_1);
  };
  _no_name_provided__qut3iv_0.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function createTransitionAnimation$composable$lambda($this_createTransitionAnimation$composable, $transitionAnimation) {
    return function ($this$DisposableEffect) {
      $this_createTransitionAnimation$composable.addAnimation_w7wt87_k$($transitionAnimation);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_0($this_createTransitionAnimation$composable, $transitionAnimation);
      return tmp$ret$0;
    };
  }
  function targetState$factory() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetState_kri3mx_k$();
    }, function (receiver, value) {
      return receiver.set_targetState_9v8wrq_k$(value);
    });
  }
  function targetState$factory_0() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetState_kri3mx_k$();
    }, function (receiver, value) {
      return receiver.set_targetState_9v8wrq_k$(value);
    });
  }
  function segment$factory() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.get_segment_xwnoei_k$();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function segment$factory_0() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.get_segment_xwnoei_k$();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function playTimeNanos$factory() {
    return getPropertyCallableRef('playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.get_playTimeNanos_50m2yz_k$();
    }, function (receiver, value) {
      return receiver.set_playTimeNanos_xc4lgm_k$(value);
    });
  }
  function playTimeNanos$factory_0() {
    return getPropertyCallableRef('playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.get_playTimeNanos_50m2yz_k$();
    }, function (receiver, value) {
      return receiver.set_playTimeNanos_xc4lgm_k$(value);
    });
  }
  function startTimeNanos$factory() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_startTimeNanos__r31kgr(receiver);
    }, function (receiver, value) {
      return _set_startTimeNanos__1jy4fb(receiver, value);
    });
  }
  function startTimeNanos$factory_0() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_startTimeNanos__r31kgr(receiver);
    }, function (receiver, value) {
      return _set_startTimeNanos__1jy4fb(receiver, value);
    });
  }
  function updateChildrenNeeded$factory() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return receiver.get_updateChildrenNeeded_bsutx6_k$();
    }, function (receiver, value) {
      return receiver.set_updateChildrenNeeded_kde0f_k$(value);
    });
  }
  function updateChildrenNeeded$factory_0() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return receiver.get_updateChildrenNeeded_bsutx6_k$();
    }, function (receiver, value) {
      return receiver.set_updateChildrenNeeded_kde0f_k$(value);
    });
  }
  function isSeeking$factory() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isSeeking_vjb393_k$();
    }, function (receiver, value) {
      return receiver.set_isSeeking_jx5uti_k$(value);
    });
  }
  function isSeeking$factory_0() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isSeeking_vjb393_k$();
    }, function (receiver, value) {
      return receiver.set_isSeeking_jx5uti_k$(value);
    });
  }
  function totalDurationNanos$factory() {
    return getPropertyCallableRef('totalDurationNanos', 1, KProperty1, function (receiver) {
      return receiver.get_totalDurationNanos_cuj0z4_k$();
    }, null);
  }
  function targetValue$factory_1() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function targetValue$factory_2() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function animationSpec$factory() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.get_animationSpec_wdk2t2_k$();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animationSpec$factory_0() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.get_animationSpec_wdk2t2_k$();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animation$factory() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.get_animation_r0gd0b_k$();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function animation$factory_0() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.get_animation_r0gd0b_k$();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function isFinished$factory() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isFinished_qlhjyd_k$();
    }, function (receiver, value) {
      return receiver.set_isFinished_l6qivk_k$(value);
    });
  }
  function isFinished$factory_0() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isFinished_qlhjyd_k$();
    }, function (receiver, value) {
      return receiver.set_isFinished_l6qivk_k$(value);
    });
  }
  function offsetTimeNanos$factory() {
    return getPropertyCallableRef('offsetTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_offsetTimeNanos__sdn5qq(receiver);
    }, function (receiver, value) {
      return _set_offsetTimeNanos__i9wy86(receiver, value);
    });
  }
  function offsetTimeNanos$factory_0() {
    return getPropertyCallableRef('offsetTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get_offsetTimeNanos__sdn5qq(receiver);
    }, function (receiver, value) {
      return _set_offsetTimeNanos__i9wy86(receiver, value);
    });
  }
  function needsReset$factory() {
    return getPropertyCallableRef('needsReset', 1, KMutableProperty1, function (receiver) {
      return _get_needsReset__mzz76h(receiver);
    }, function (receiver, value) {
      return _set_needsReset__wyw9nf(receiver, value);
    });
  }
  function needsReset$factory_0() {
    return getPropertyCallableRef('needsReset', 1, KMutableProperty1, function (receiver) {
      return _get_needsReset__mzz76h(receiver);
    }, function (receiver, value) {
      return _set_needsReset__wyw9nf(receiver, value);
    });
  }
  function value$factory_3() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_rnwamw_k$(value);
    });
  }
  function value$factory_4() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.get_value_j01efc_k$();
    }, function (receiver, value) {
      return receiver.set_value_rnwamw_k$(value);
    });
  }
  function data$factory() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.get_data_wokkxf_k$();
    }, function (receiver, value) {
      return receiver.set_data_1uxdza_k$(value);
    });
  }
  function data$factory_0() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.get_data_wokkxf_k$();
    }, function (receiver, value) {
      return receiver.set_data_1uxdza_k$(value);
    });
  }
  function currentState$factory() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_currentState_snihnl_k$();
    }, function (receiver, value) {
      return receiver.set_currentState_fwr97s_k$(value);
    });
  }
  function currentState$factory_0() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_currentState_snihnl_k$();
    }, function (receiver, value) {
      return receiver.set_currentState_fwr97s_k$(value);
    });
  }
  function targetState$factory_1() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetState_kri3mx_k$();
    }, function (receiver, value) {
      return receiver.set_targetState_9v8wrq_k$(value);
    });
  }
  function targetState$factory_2() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.get_targetState_kri3mx_k$();
    }, function (receiver, value) {
      return receiver.set_targetState_9v8wrq_k$(value);
    });
  }
  function isRunning$factory_3() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_okmtn0_k$();
    }, function (receiver, value) {
      return receiver.set_isRunning_tw1q35_k$(value);
    });
  }
  function isRunning$factory_4() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.get_isRunning_okmtn0_k$();
    }, function (receiver, value) {
      return receiver.set_isRunning_tw1q35_k$(value);
    });
  }
  function get_FloatToVector() {
    init_properties_VectorConverters_kt_cbu3do();
    return FloatToVector;
  }
  var FloatToVector;
  function get_IntToVector() {
    init_properties_VectorConverters_kt_cbu3do();
    return IntToVector;
  }
  var IntToVector;
  function get_DpToVector() {
    init_properties_VectorConverters_kt_cbu3do();
    return DpToVector;
  }
  var DpToVector;
  function get_DpOffsetToVector() {
    init_properties_VectorConverters_kt_cbu3do();
    return DpOffsetToVector;
  }
  var DpOffsetToVector;
  function get_SizeToVector() {
    init_properties_VectorConverters_kt_cbu3do();
    return SizeToVector;
  }
  var SizeToVector;
  function get_OffsetToVector() {
    init_properties_VectorConverters_kt_cbu3do();
    return OffsetToVector;
  }
  var OffsetToVector;
  function get_IntOffsetToVector() {
    init_properties_VectorConverters_kt_cbu3do();
    return IntOffsetToVector;
  }
  var IntOffsetToVector;
  function get_IntSizeToVector() {
    init_properties_VectorConverters_kt_cbu3do();
    return IntSizeToVector;
  }
  var IntSizeToVector;
  function get_RectToVector() {
    init_properties_VectorConverters_kt_cbu3do();
    return RectToVector;
  }
  var RectToVector;
  function TwoWayConverter() {
  }
  TwoWayConverter.$metadata$ = interfaceMeta('TwoWayConverter');
  function TwoWayConverter_0(convertToVector, convertFromVector) {
    init_properties_VectorConverters_kt_cbu3do();
    return new TwoWayConverterImpl(convertToVector, convertFromVector);
  }
  function TwoWayConverterImpl(convertToVector, convertFromVector) {
    this.convertToVector_1 = convertToVector;
    this.convertFromVector_1 = convertFromVector;
  }
  TwoWayConverterImpl.prototype.get_convertToVector_s594l4_k$ = function () {
    return this.convertToVector_1;
  };
  TwoWayConverterImpl.prototype.get_convertFromVector_kmewon_k$ = function () {
    return this.convertFromVector_1;
  };
  TwoWayConverterImpl.$metadata$ = classMeta('TwoWayConverterImpl', [TwoWayConverter]);
  function get_VectorConverter(_this__u8e3s4) {
    init_properties_VectorConverters_kt_cbu3do();
    return get_IntToVector();
  }
  function get_VectorConverter_0(_this__u8e3s4) {
    init_properties_VectorConverters_kt_cbu3do();
    return get_IntSizeToVector();
  }
  function get_VectorConverter_1(_this__u8e3s4) {
    init_properties_VectorConverters_kt_cbu3do();
    return get_IntOffsetToVector();
  }
  function get_VectorConverter_2(_this__u8e3s4) {
    init_properties_VectorConverters_kt_cbu3do();
    return get_FloatToVector();
  }
  function get_VectorConverter_3(_this__u8e3s4) {
    init_properties_VectorConverters_kt_cbu3do();
    return get_RectToVector();
  }
  function get_VectorConverter_4(_this__u8e3s4) {
    init_properties_VectorConverters_kt_cbu3do();
    return get_SizeToVector();
  }
  function get_VectorConverter_5(_this__u8e3s4) {
    init_properties_VectorConverters_kt_cbu3do();
    return get_OffsetToVector();
  }
  function get_VectorConverter_6(_this__u8e3s4) {
    init_properties_VectorConverters_kt_cbu3do();
    return get_DpToVector();
  }
  function get_VectorConverter_7(_this__u8e3s4) {
    init_properties_VectorConverters_kt_cbu3do();
    return get_DpOffsetToVector();
  }
  function lerp(start, stop, fraction) {
    init_properties_VectorConverters_kt_cbu3do();
    return start * (1 - fraction) + stop * fraction;
  }
  function FloatToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector1D(it);
  }
  function FloatToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return it.value_1;
  }
  function IntToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector1D(it);
  }
  function IntToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return numberToInt(it.value_1);
  }
  function DpToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector1D(_Dp___get_value__impl__geb1vb(it.value_1));
  }
  function DpToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new Dp(_Dp___init__impl__ms3zkb(it.value_1));
  }
  function DpOffsetToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector2D(_Dp___get_value__impl__geb1vb(_DpOffset___get_x__impl__uauqb5(it.packedValue_1)), _Dp___get_value__impl__geb1vb(_DpOffset___get_y__impl__1h898y(it.packedValue_1)));
  }
  function DpOffsetToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = it.v1__1;
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = it.v2__1;
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    return new DpOffset_0(DpOffset(tmp, tmp$ret$1));
  }
  function SizeToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector2D(_Size___get_width__impl__58y75t(it.packedValue_1), _Size___get_height__impl__a04p02(it.packedValue_1));
  }
  function SizeToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new Size(Size_0(it.v1__1, it.v2__1));
  }
  function OffsetToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector2D(_Offset___get_x__impl__xvi35n(it.packedValue_1), _Offset___get_y__impl__8bzhra(it.packedValue_1));
  }
  function OffsetToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new Offset(Offset_0(it.v1__1, it.v2__1));
  }
  function IntOffsetToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector2D(_IntOffset___get_x__impl__qiqr5o(it.packedValue_1), _IntOffset___get_y__impl__2avpwj(it.packedValue_1));
  }
  function IntOffsetToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    var tmp$ret$0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = it.v1__1;
    tmp$ret$0 = roundToInt(tmp0_roundToInt);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp1_roundToInt = it.v2__1;
    tmp$ret$1 = roundToInt(tmp1_roundToInt);
    return new IntOffset(IntOffset_0(tmp, tmp$ret$1));
  }
  function IntSizeToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector2D(_IntSize___get_width__impl__d9yl4o(it.packedValue_1), _IntSize___get_height__impl__prv63b(it.packedValue_1));
  }
  function IntSizeToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    var tmp$ret$0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = it.v1__1;
    tmp$ret$0 = roundToInt(tmp0_roundToInt);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp1_roundToInt = it.v2__1;
    tmp$ret$1 = roundToInt(tmp1_roundToInt);
    return new IntSize(IntSize_0(tmp, tmp$ret$1));
  }
  function RectToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector4D(it.left_1, it.top_1, it.right_1, it.bottom_1);
  }
  function RectToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new Rect(it.v1__1, it.v2__1, it.v3__1, it.v4__1);
  }
  var properties_initialized_VectorConverters_kt_cg0a6g;
  function init_properties_VectorConverters_kt_cbu3do() {
    if (properties_initialized_VectorConverters_kt_cg0a6g) {
    } else {
      properties_initialized_VectorConverters_kt_cg0a6g = true;
      var tmp = FloatToVector$lambda;
      FloatToVector = TwoWayConverter_0(tmp, FloatToVector$lambda_0);
      var tmp_0 = IntToVector$lambda;
      IntToVector = TwoWayConverter_0(tmp_0, IntToVector$lambda_0);
      var tmp_1 = DpToVector$lambda;
      DpToVector = TwoWayConverter_0(tmp_1, DpToVector$lambda_0);
      var tmp_2 = DpOffsetToVector$lambda;
      DpOffsetToVector = TwoWayConverter_0(tmp_2, DpOffsetToVector$lambda_0);
      var tmp_3 = SizeToVector$lambda;
      SizeToVector = TwoWayConverter_0(tmp_3, SizeToVector$lambda_0);
      var tmp_4 = OffsetToVector$lambda;
      OffsetToVector = TwoWayConverter_0(tmp_4, OffsetToVector$lambda_0);
      var tmp_5 = IntOffsetToVector$lambda;
      IntOffsetToVector = TwoWayConverter_0(tmp_5, IntOffsetToVector$lambda_0);
      var tmp_6 = IntSizeToVector$lambda;
      IntSizeToVector = TwoWayConverter_0(tmp_6, IntSizeToVector$lambda_0);
      var tmp_7 = RectToVector$lambda;
      RectToVector = TwoWayConverter_0(tmp_7, RectToVector$lambda_0);
    }
  }
  function Spring() {
    Spring_instance = this;
    this.StiffnessHigh_1 = 10000.0;
    this.StiffnessMedium_1 = 1500.0;
    this.StiffnessMediumLow_1 = 400.0;
    this.StiffnessLow_1 = 200.0;
    this.StiffnessVeryLow_1 = 50.0;
    this.DampingRatioHighBouncy_1 = 0.2;
    this.DampingRatioMediumBouncy_1 = 0.5;
    this.DampingRatioLowBouncy_1 = 0.75;
    this.DampingRatioNoBouncy_1 = 1.0;
    this.DefaultDisplacementThreshold_1 = 0.01;
    this.$stable_1 = 0;
  }
  Spring.prototype.get_StiffnessHigh_u6kma0_k$ = function () {
    return this.StiffnessHigh_1;
  };
  Spring.prototype.get_StiffnessMedium_mjh6r9_k$ = function () {
    return this.StiffnessMedium_1;
  };
  Spring.prototype.get_StiffnessMediumLow_62ltjd_k$ = function () {
    return this.StiffnessMediumLow_1;
  };
  Spring.prototype.get_StiffnessLow_86wgla_k$ = function () {
    return this.StiffnessLow_1;
  };
  Spring.prototype.get_StiffnessVeryLow_1smo6g_k$ = function () {
    return this.StiffnessVeryLow_1;
  };
  Spring.prototype.get_DampingRatioHighBouncy_dr3500_k$ = function () {
    return this.DampingRatioHighBouncy_1;
  };
  Spring.prototype.get_DampingRatioMediumBouncy_wgfzkt_k$ = function () {
    return this.DampingRatioMediumBouncy_1;
  };
  Spring.prototype.get_DampingRatioLowBouncy_llm1zy_k$ = function () {
    return this.DampingRatioLowBouncy_1;
  };
  Spring.prototype.get_DampingRatioNoBouncy_45ga5r_k$ = function () {
    return this.DampingRatioNoBouncy_1;
  };
  Spring.prototype.get_DefaultDisplacementThreshold_1c58p0_k$ = function () {
    return this.DefaultDisplacementThreshold_1;
  };
  Spring.$metadata$ = objectMeta('Spring');
  var Spring_instance;
  function Spring_getInstance() {
    if (Spring_instance == null)
      new Spring();
    return Spring_instance;
  }
  function VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $this) {
    VectorizedSpringSpec.call($this, dampingRatio, stiffness, createSpringAnimations(visibilityThreshold, dampingRatio, stiffness));
    return $this;
  }
  function VectorizedSpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold) {
    return VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, Object.create(VectorizedSpringSpec.prototype));
  }
  function VectorizedSpringSpec_init_$Init$_0(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      Spring_getInstance();
      dampingRatio = 1.0;
    }
    if (!(($mask0 & 2) === 0)) {
      Spring_getInstance();
      stiffness = 1500.0;
    }
    if (!(($mask0 & 4) === 0))
      visibilityThreshold = null;
    VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $this);
    return $this;
  }
  function VectorizedSpringSpec_init_$Create$_0(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker) {
    return VectorizedSpringSpec_init_$Init$_0(dampingRatio, stiffness, visibilityThreshold, $mask0, $marker, Object.create(VectorizedSpringSpec.prototype));
  }
  function VectorizedSpringSpec(dampingRatio, stiffness, anims) {
    this.dampingRatio_1 = dampingRatio;
    this.stiffness_1 = stiffness;
    this.$$delegate_0__1 = new VectorizedFloatAnimationSpec(anims);
    this.$stable_1 = 8;
  }
  VectorizedSpringSpec.prototype.get_dampingRatio_syjss2_k$ = function () {
    return this.dampingRatio_1;
  };
  VectorizedSpringSpec.prototype.get_stiffness_dt2sgm_k$ = function () {
    return this.stiffness_1;
  };
  VectorizedSpringSpec.prototype.get_isInfinite_uffwnt_k$ = function () {
    return this.$$delegate_0__1.get_isInfinite_uffwnt_k$();
  };
  VectorizedSpringSpec.prototype.getDurationNanos_62az16_k$ = function (initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getDurationNanos_62az16_k$(initialValue, targetValue, initialVelocity);
  };
  VectorizedSpringSpec.prototype.getEndVelocity_2fbr89_k$ = function (initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getEndVelocity_2fbr89_k$(initialValue, targetValue, initialVelocity);
  };
  VectorizedSpringSpec.prototype.getValueFromNanos_274kdl_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getValueFromNanos_274kdl_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  VectorizedSpringSpec.prototype.getVelocityFromNanos_2nsq5r_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getVelocityFromNanos_2nsq5r_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  VectorizedSpringSpec.$metadata$ = classMeta('VectorizedSpringSpec', [VectorizedFiniteAnimationSpec]);
  function VectorizedFiniteAnimationSpec() {
  }
  VectorizedFiniteAnimationSpec.$metadata$ = interfaceMeta('VectorizedFiniteAnimationSpec', [VectorizedAnimationSpec]);
  function VectorizedAnimationSpec() {
  }
  VectorizedAnimationSpec.$metadata$ = interfaceMeta('VectorizedAnimationSpec');
  function Animations() {
  }
  Animations.$metadata$ = interfaceMeta('Animations');
  function _get_anims__juyc8h($this) {
    return $this.anims_1;
  }
  function _set_valueVector__dppd9t_0($this, _set____db54di) {
    $this.valueVector_1 = _set____db54di;
  }
  function _get_valueVector__r10idf_0($this) {
    var tmp = $this.valueVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _set_velocityVector__vm30d3_1($this, _set____db54di) {
    $this.velocityVector_1 = _set____db54di;
  }
  function _get_velocityVector__dvxlkl_1($this) {
    var tmp = $this.velocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _set_endVelocityVector__h8kq2($this, _set____db54di) {
    $this.endVelocityVector_1 = _set____db54di;
  }
  function _get_endVelocityVector__l8kbka($this) {
    var tmp = $this.endVelocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('endVelocityVector');
    }
  }
  function VectorizedFloatAnimationSpec_init_$Init$(anim, $this) {
    VectorizedFloatAnimationSpec.call($this, new VectorizedFloatAnimationSpec$1(anim));
    return $this;
  }
  function VectorizedFloatAnimationSpec_init_$Create$(anim) {
    return VectorizedFloatAnimationSpec_init_$Init$(anim, Object.create(VectorizedFloatAnimationSpec.prototype));
  }
  function VectorizedFloatAnimationSpec$1($anim) {
    this.$anim_1 = $anim;
  }
  VectorizedFloatAnimationSpec$1.prototype.get_fkrdnv_k$ = function (index) {
    return this.$anim_1;
  };
  VectorizedFloatAnimationSpec$1.$metadata$ = classMeta(undefined, [Animations]);
  function VectorizedFloatAnimationSpec(anims) {
    this.anims_1 = anims;
    this.$stable_1 = 8;
  }
  VectorizedFloatAnimationSpec.prototype.getValueFromNanos_274kdl_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.valueVector_1 == null)) {
      this.valueVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf_0(this).get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf_0(this).set_8gccym_k$(i, this.anims_1.get_fkrdnv_k$(i).getValueFromNanos_laqly_k$(playTimeNanos, initialValue.get_fkrdnv_k$(i), targetValue.get_fkrdnv_k$(i), initialVelocity.get_fkrdnv_k$(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf_0(this);
  };
  VectorizedFloatAnimationSpec.prototype.getVelocityFromNanos_2nsq5r_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.velocityVector_1 == null)) {
      this.velocityVector_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl_1(this).get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_1(this).set_8gccym_k$(i, this.anims_1.get_fkrdnv_k$(i).getVelocityFromNanos_da2xk2_k$(playTimeNanos, initialValue.get_fkrdnv_k$(i), targetValue.get_fkrdnv_k$(i), initialVelocity.get_fkrdnv_k$(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_1(this);
  };
  VectorizedFloatAnimationSpec.prototype.getEndVelocity_2fbr89_k$ = function (initialValue, targetValue, initialVelocity) {
    if (!!(this.endVelocityVector_1 == null)) {
      this.endVelocityVector_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_endVelocityVector__l8kbka(this).get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_endVelocityVector__l8kbka(this).set_8gccym_k$(i, this.anims_1.get_fkrdnv_k$(i).getEndVelocity_1g11o_k$(initialValue.get_fkrdnv_k$(i), targetValue.get_fkrdnv_k$(i), initialVelocity.get_fkrdnv_k$(i)));
      }
       while (inductionVariable < last);
    return _get_endVelocityVector__l8kbka(this);
  };
  VectorizedFloatAnimationSpec.prototype.getDurationNanos_62az16_k$ = function (initialValue, targetValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = until(0, initialValue.get_size_woubt6_k$());
    var inductionVariable = tmp0_forEach.first_1;
    var last = tmp0_forEach.last_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.VectorizedFloatAnimationSpec.getDurationNanos.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp0_maxOf = maxDuration;
        var tmp1_maxOf = this.anims_1.get_fkrdnv_k$(element).getDurationNanos_ct8k6x_k$(initialValue.get_fkrdnv_k$(element), targetValue.get_fkrdnv_k$(element), initialVelocity.get_fkrdnv_k$(element));
        tmp$ret$0 = tmp0_maxOf.compareTo_n4fqi2_k$(tmp1_maxOf) >= 0 ? tmp0_maxOf : tmp1_maxOf;
        maxDuration = tmp$ret$0;
      }
       while (!(element === last));
    return maxDuration;
  };
  VectorizedFloatAnimationSpec.$metadata$ = classMeta('VectorizedFloatAnimationSpec', [VectorizedFiniteAnimationSpec]);
  function createSpringAnimations(visibilityThreshold, dampingRatio, stiffness) {
    if (!(visibilityThreshold == null)) {
      return new createSpringAnimations$1(visibilityThreshold, dampingRatio, stiffness);
    } else {
      return new createSpringAnimations$2(dampingRatio, stiffness);
    }
  }
  function VectorizedInfiniteRepeatableSpec_init_$Init$(animation, repeatMode, initialStartOffset, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      repeatMode = RepeatMode_Restart_getInstance();
    if (!(($mask0 & 4) === 0)) {
      initialStartOffset = _StartOffset___init__impl__615djw_1(0, null, 2, null);
    }
    VectorizedInfiniteRepeatableSpec.call($this, animation, repeatMode, initialStartOffset);
    return $this;
  }
  function VectorizedInfiniteRepeatableSpec_init_$Create$(animation, repeatMode, initialStartOffset, $mask0, $marker) {
    return VectorizedInfiniteRepeatableSpec_init_$Init$(animation, repeatMode, initialStartOffset, $mask0, $marker, Object.create(VectorizedInfiniteRepeatableSpec.prototype));
  }
  function _get_animation__gfmj03($this) {
    return $this.animation_1;
  }
  function _get_repeatMode__51xaqb($this) {
    return $this.repeatMode_1;
  }
  function VectorizedInfiniteRepeatableSpec_init_$Init$_0(animation, repeatMode, $this) {
    VectorizedInfiniteRepeatableSpec.call($this, animation, repeatMode, _StartOffset___init__impl__615djw_1(0, null, 2, null));
    return $this;
  }
  function VectorizedInfiniteRepeatableSpec_init_$Create$_0(animation, repeatMode) {
    return VectorizedInfiniteRepeatableSpec_init_$Init$_0(animation, repeatMode, Object.create(VectorizedInfiniteRepeatableSpec.prototype));
  }
  function VectorizedInfiniteRepeatableSpec_init_$Init$_1(animation, repeatMode, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      repeatMode = RepeatMode_Restart_getInstance();
    VectorizedInfiniteRepeatableSpec_init_$Init$_0(animation, repeatMode, $this);
    return $this;
  }
  function VectorizedInfiniteRepeatableSpec_init_$Create$_1(animation, repeatMode, $mask0, $marker) {
    return VectorizedInfiniteRepeatableSpec_init_$Init$_1(animation, repeatMode, $mask0, $marker, Object.create(VectorizedInfiniteRepeatableSpec.prototype));
  }
  function _get_initialOffsetNanos__jwv1fh($this) {
    return $this.initialOffsetNanos_1;
  }
  function repetitionPlayTimeNanos($this, playTimeNanos) {
    if (playTimeNanos.plus_u6jwas_k$($this.initialOffsetNanos_1).compareTo_n4fqi2_k$(new Long(0, 0)) <= 0) {
      return new Long(0, 0);
    } else {
      var postOffsetPlayTimeNanos = playTimeNanos.plus_u6jwas_k$($this.initialOffsetNanos_1);
      var repeatsCount = postOffsetPlayTimeNanos.div_9s1fi3_k$($this.durationNanos_1);
      var tmp;
      if ($this.repeatMode_1.equals(RepeatMode_Restart_getInstance())) {
        tmp = true;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.Long.rem' call
        tmp$ret$0 = repeatsCount.rem_9rbcjo_k$(new Long(2, 0));
        tmp = tmp$ret$0.equals(new Long(0, 0));
      }
      if (tmp) {
        return postOffsetPlayTimeNanos.minus_llf5ei_k$(repeatsCount.times_2zfqpc_k$($this.durationNanos_1));
      } else {
        var tmp$ret$1;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$1 = repeatsCount.plus_u6jwas_k$(new Long(1, 0));
        return tmp$ret$1.times_2zfqpc_k$($this.durationNanos_1).minus_llf5ei_k$(postOffsetPlayTimeNanos);
      }
    }
  }
  function repetitionStartVelocity($this, playTimeNanos, start, startVelocity, end) {
    var tmp;
    if (playTimeNanos.plus_u6jwas_k$($this.initialOffsetNanos_1).compareTo_n4fqi2_k$($this.durationNanos_1) > 0) {
      tmp = $this.getVelocityFromNanos_2nsq5r_k$($this.durationNanos_1.minus_llf5ei_k$($this.initialOffsetNanos_1), start, startVelocity, end);
    } else {
      tmp = startVelocity;
    }
    return tmp;
  }
  function VectorizedInfiniteRepeatableSpec(animation, repeatMode, initialStartOffset) {
    this.animation_1 = animation;
    this.repeatMode_1 = repeatMode;
    this.durationNanos_1 = numberToLong(this.animation_1.get_delayMillis_d968n4_k$() + this.animation_1.get_durationMillis_pqx05f_k$() | 0).times_2zfqpc_k$(get_MillisToNanos());
    this.initialOffsetNanos_1 = _StartOffset___get_value__impl__8sikig(initialStartOffset).times_2zfqpc_k$(get_MillisToNanos());
    this.$stable_1 = 8;
  }
  VectorizedInfiniteRepeatableSpec.prototype.get_isInfinite_uffwnt_k$ = function () {
    return true;
  };
  VectorizedInfiniteRepeatableSpec.prototype.get_durationNanos_ub5cy_k$ = function () {
    return this.durationNanos_1;
  };
  VectorizedInfiniteRepeatableSpec.prototype.getValueFromNanos_274kdl_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.animation_1.getValueFromNanos_274kdl_k$(repetitionPlayTimeNanos(this, playTimeNanos), initialValue, targetValue, repetitionStartVelocity(this, playTimeNanos, initialValue, initialVelocity, targetValue));
  };
  VectorizedInfiniteRepeatableSpec.prototype.getVelocityFromNanos_2nsq5r_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.animation_1.getVelocityFromNanos_2nsq5r_k$(repetitionPlayTimeNanos(this, playTimeNanos), initialValue, targetValue, repetitionStartVelocity(this, playTimeNanos, initialValue, initialVelocity, targetValue));
  };
  VectorizedInfiniteRepeatableSpec.prototype.getDurationNanos_62az16_k$ = function (initialValue, targetValue, initialVelocity) {
    Companion_getInstance_6();
    return new Long(-1, 2147483647);
  };
  VectorizedInfiniteRepeatableSpec.$metadata$ = classMeta('VectorizedInfiniteRepeatableSpec', [VectorizedAnimationSpec]);
  function VectorizedDurationBasedAnimationSpec() {
  }
  VectorizedDurationBasedAnimationSpec.$metadata$ = interfaceMeta('VectorizedDurationBasedAnimationSpec', [VectorizedFiniteAnimationSpec]);
  function VectorizedKeyframesSpec_init_$Init$(keyframes, durationMillis, delayMillis, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      delayMillis = 0;
    VectorizedKeyframesSpec.call($this, keyframes, durationMillis, delayMillis);
    return $this;
  }
  function VectorizedKeyframesSpec_init_$Create$(keyframes, durationMillis, delayMillis, $mask0, $marker) {
    return VectorizedKeyframesSpec_init_$Init$(keyframes, durationMillis, delayMillis, $mask0, $marker, Object.create(VectorizedKeyframesSpec.prototype));
  }
  function _get_keyframes__i12zvw($this) {
    return $this.keyframes_1;
  }
  function _set_valueVector__dppd9t_1($this, _set____db54di) {
    $this.valueVector_1 = _set____db54di;
  }
  function _get_valueVector__r10idf_1($this) {
    var tmp = $this.valueVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _set_velocityVector__vm30d3_2($this, _set____db54di) {
    $this.velocityVector_1 = _set____db54di;
  }
  function _get_velocityVector__dvxlkl_2($this) {
    var tmp = $this.velocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function init_0($this, value) {
    if (!!($this.valueVector_1 == null)) {
      $this.valueVector_1 = newInstance(value);
      $this.velocityVector_1 = newInstance(value);
    }
  }
  function VectorizedKeyframesSpec(keyframes, durationMillis, delayMillis) {
    this.keyframes_1 = keyframes;
    this.durationMillis_1 = durationMillis;
    this.delayMillis_1 = delayMillis;
    this.$stable_1 = 8;
  }
  VectorizedKeyframesSpec.prototype.get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  VectorizedKeyframesSpec.prototype.get_delayMillis_d968n4_k$ = function () {
    return this.delayMillis_1;
  };
  VectorizedKeyframesSpec.prototype.getValueFromNanos_274kdl_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime_0(this, playTimeMillis).toInt_1tsl84_k$();
    if (this.keyframes_1.containsKey_wgk31w_k$(clampedPlayTime)) {
      return getValue(this.keyframes_1, clampedPlayTime).first_1;
    }
    if (clampedPlayTime >= this.durationMillis_1) {
      return targetValue;
    } else if (clampedPlayTime <= 0)
      return initialValue;
    var startTime = 0;
    var startVal = initialValue;
    var endVal = targetValue;
    var endTime = this.durationMillis_1;
    var easing = get_LinearEasing();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.keyframes_1;
    tmp$ret$0 = tmp0_iterator.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = tmp1_loop_parameter.get_key_18j28a_k$();
      var timestamp = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = tmp1_loop_parameter.get_value_j01efc_k$();
      var value = tmp$ret$2;
      if (clampedPlayTime > timestamp ? timestamp >= startTime : false) {
        startTime = timestamp;
        startVal = value.first_1;
        easing = value.second_1;
      } else if (clampedPlayTime < timestamp ? timestamp <= endTime : false) {
        endTime = timestamp;
        endVal = value.first_1;
      }
    }
    var fraction = easing.transform_mzom4i_k$((clampedPlayTime - startTime | 0) / (endTime - startTime | 0));
    init_0(this, initialValue);
    var inductionVariable = 0;
    var last = startVal.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf_1(this).set_8gccym_k$(i, lerp(startVal.get_fkrdnv_k$(i), endVal.get_fkrdnv_k$(i), fraction));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf_1(this);
  };
  VectorizedKeyframesSpec.prototype.getVelocityFromNanos_2nsq5r_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.div_9s1fi3_k$(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime_0(this, playTimeMillis);
    if (clampedPlayTime.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0) {
      return initialVelocity;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    tmp$ret$0 = clampedPlayTime.minus_llf5ei_k$(new Long(1, 0));
    var startNum = getValueFromMillis(this, tmp$ret$0, initialValue, targetValue, initialVelocity);
    var endNum = getValueFromMillis(this, clampedPlayTime, initialValue, targetValue, initialVelocity);
    init_0(this, initialValue);
    var inductionVariable = 0;
    var last = startNum.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_2(this).set_8gccym_k$(i, (startNum.get_fkrdnv_k$(i) - endNum.get_fkrdnv_k$(i)) * 1000.0);
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_2(this);
  };
  VectorizedKeyframesSpec.$metadata$ = classMeta('VectorizedKeyframesSpec', [VectorizedDurationBasedAnimationSpec]);
  function VectorizedTweenSpec_init_$Init$(durationMillis, delayMillis, easing, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      AnimationConstants_getInstance();
      durationMillis = 300;
    }
    if (!(($mask0 & 2) === 0))
      delayMillis = 0;
    if (!(($mask0 & 4) === 0))
      easing = get_FastOutSlowInEasing();
    VectorizedTweenSpec.call($this, durationMillis, delayMillis, easing);
    return $this;
  }
  function VectorizedTweenSpec_init_$Create$(durationMillis, delayMillis, easing, $mask0, $marker) {
    return VectorizedTweenSpec_init_$Init$(durationMillis, delayMillis, easing, $mask0, $marker, Object.create(VectorizedTweenSpec.prototype));
  }
  function _get_anim__d3v13u($this) {
    return $this.anim_1;
  }
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    this.durationMillis_1 = durationMillis;
    this.delayMillis_1 = delayMillis;
    this.easing_1 = easing;
    this.anim_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.durationMillis_1, this.delayMillis_1, this.easing_1));
    this.$stable_1 = 8;
  }
  VectorizedTweenSpec.prototype.get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  VectorizedTweenSpec.prototype.get_delayMillis_d968n4_k$ = function () {
    return this.delayMillis_1;
  };
  VectorizedTweenSpec.prototype.get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  VectorizedTweenSpec.prototype.getValueFromNanos_274kdl_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.anim_1.getValueFromNanos_274kdl_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  VectorizedTweenSpec.prototype.getVelocityFromNanos_2nsq5r_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.anim_1.getVelocityFromNanos_2nsq5r_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  VectorizedTweenSpec.$metadata$ = classMeta('VectorizedTweenSpec', [VectorizedDurationBasedAnimationSpec]);
  function clampPlayTime_0(_this__u8e3s4, playTime) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = _this__u8e3s4.get_delayMillis_d968n4_k$();
    tmp$ret$0 = playTime.minus_llf5ei_k$(toLong(tmp0_minus));
    return coerceIn_0(tmp$ret$0, new Long(0, 0), toLong(_this__u8e3s4.get_durationMillis_pqx05f_k$()));
  }
  function getValueFromMillis(_this__u8e3s4, playTimeMillis, start, end, startVelocity) {
    return _this__u8e3s4.getValueFromNanos_274kdl_k$(playTimeMillis.times_2zfqpc_k$(get_MillisToNanos()), start, end, startVelocity);
  }
  function _get_anims__juyc8h_0($this) {
    return $this.anims_1;
  }
  function createSpringAnimations$1($visibilityThreshold, $dampingRatio, $stiffness) {
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = until(0, $visibilityThreshold.get_size_woubt6_k$());
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var inductionVariable = tmp0_map.first_1;
    var last = tmp0_map.last_1;
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.core.<no name provided>.anims.<anonymous>' call
        tmp$ret$0 = new FloatSpringSpec($dampingRatio, $stiffness, $visibilityThreshold.get_fkrdnv_k$(item));
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
       while (!(item === last));
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    tmp.anims_1 = tmp$ret$2;
  }
  createSpringAnimations$1.prototype.get_fkrdnv_k$ = function (index) {
    return this.anims_1.get_fkrdnv_k$(index);
  };
  createSpringAnimations$1.$metadata$ = classMeta(undefined, [Animations]);
  function _get_anim__d3v13u_0($this) {
    return $this.anim_1;
  }
  function createSpringAnimations$2($dampingRatio, $stiffness) {
    var tmp = this;
    tmp.anim_1 = FloatSpringSpec_init_$Create$($dampingRatio, $stiffness, 0.0, 4, null);
  }
  createSpringAnimations$2.prototype.get_fkrdnv_k$ = function (index) {
    return this.anim_1;
  };
  createSpringAnimations$2.$metadata$ = classMeta(undefined, [Animations]);
  function VectorizedDecayAnimationSpec() {
  }
  VectorizedDecayAnimationSpec.$metadata$ = interfaceMeta('VectorizedDecayAnimationSpec');
  function get_rectVisibilityThreshold() {
    init_properties_VisibilityThresholds_kt_us38ow();
    return rectVisibilityThreshold;
  }
  var rectVisibilityThreshold;
  function get_visibilityThresholdMap() {
    init_properties_VisibilityThresholds_kt_us38ow();
    return visibilityThresholdMap;
  }
  var visibilityThresholdMap;
  function get_VisibilityThreshold(_this__u8e3s4) {
    init_properties_VisibilityThresholds_kt_us38ow();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = 0.1;
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    return tmp$ret$0;
  }
  function get_VisibilityThreshold_0(_this__u8e3s4) {
    init_properties_VisibilityThresholds_kt_us38ow();
    return Size_0(0.5, 0.5);
  }
  function get_VisibilityThreshold_1(_this__u8e3s4) {
    init_properties_VisibilityThresholds_kt_us38ow();
    return Offset_0(0.5, 0.5);
  }
  function get_VisibilityThreshold_2(_this__u8e3s4) {
    init_properties_VisibilityThresholds_kt_us38ow();
    return get_rectVisibilityThreshold();
  }
  function get_VisibilityThreshold_3(_this__u8e3s4) {
    init_properties_VisibilityThresholds_kt_us38ow();
    return 1;
  }
  function get_VisibilityThreshold_4(_this__u8e3s4) {
    init_properties_VisibilityThresholds_kt_us38ow();
    return IntOffset_0(1, 1);
  }
  function get_VisibilityThreshold_5(_this__u8e3s4) {
    init_properties_VisibilityThresholds_kt_us38ow();
    return IntSize_0(1, 1);
  }
  function get_PxVisibilityThreshold() {
    return PxVisibilityThreshold;
  }
  var PxVisibilityThreshold;
  function get_DpVisibilityThreshold() {
    return DpVisibilityThreshold;
  }
  var DpVisibilityThreshold;
  var properties_initialized_VisibilityThresholds_kt_k6rdp8;
  function init_properties_VisibilityThresholds_kt_us38ow() {
    if (properties_initialized_VisibilityThresholds_kt_k6rdp8) {
    } else {
      properties_initialized_VisibilityThresholds_kt_k6rdp8 = true;
      rectVisibilityThreshold = new Rect(0.5, 0.5, 0.5, 0.5);
      visibilityThresholdMap = mapOf([to(get_VectorConverter(IntCompanionObject_getInstance()), 1.0), to(get_VectorConverter_0(Companion_getInstance_5()), 1.0), to(get_VectorConverter_1(Companion_getInstance_4()), 1.0), to(get_VectorConverter_2(FloatCompanionObject_getInstance()), 0.01), to(get_VectorConverter_3(Companion_getInstance_3()), 0.5), to(get_VectorConverter_4(Companion_getInstance_1()), 0.5), to(get_VectorConverter_5(Companion_getInstance_2()), 0.5), to(get_VectorConverter_6(Companion_getInstance_0()), 0.1), to(get_VectorConverter_7(Companion_getInstance_7()), 0.1)]);
    }
  }
  function NoOp() {
  }
  NoOp.prototype.equals = function (other) {
    if (!(other instanceof NoOp))
      return false;
    var tmp0_other_with_cast = other instanceof NoOp ? other : THROW_CCE();
    return true;
  };
  NoOp.prototype.hashCode = function () {
    return 0;
  };
  NoOp.prototype.toString = function () {
    return '@androidx.compose.animation.core.internal.NoOp()';
  };
  NoOp.$metadata$ = classMeta('NoOp', [Annotation]);
  //region block: post-declaration
  TargetBasedAnimation.prototype.isFinishedFromNanos_uhkxvh_k$ = isFinishedFromNanos;
  DecayAnimation.prototype.isFinishedFromNanos_uhkxvh_k$ = isFinishedFromNanos;
  FloatSpringSpec.prototype.vectorize_wiveyw_k$ = vectorize;
  FloatTweenSpec.prototype.getEndVelocity_1g11o_k$ = getEndVelocity;
  FloatTweenSpec.prototype.vectorize_wiveyw_k$ = vectorize;
  SegmentImpl.prototype.isTransitioningTo_ierua4_k$ = isTransitioningTo;
  VectorizedFloatAnimationSpec.prototype.get_isInfinite_uffwnt_k$ = get_isInfinite;
  VectorizedInfiniteRepeatableSpec.prototype.getEndVelocity_2fbr89_k$ = getEndVelocity_0;
  VectorizedKeyframesSpec.prototype.getDurationNanos_62az16_k$ = getDurationNanos;
  VectorizedKeyframesSpec.prototype.get_isInfinite_uffwnt_k$ = get_isInfinite;
  VectorizedKeyframesSpec.prototype.getEndVelocity_2fbr89_k$ = getEndVelocity_0;
  VectorizedTweenSpec.prototype.getDurationNanos_62az16_k$ = getDurationNanos;
  VectorizedTweenSpec.prototype.get_isInfinite_uffwnt_k$ = get_isInfinite;
  VectorizedTweenSpec.prototype.getEndVelocity_2fbr89_k$ = getEndVelocity_0;
  //endregion
  //region block: init
  MillisToNanos = new Long(1000000, 0);
  CubicErrorBound = 0.001;
  ExponentialDecayFriction = -4.2;
  UNSET = 3.4028235E38;
  AnimationDebugDurationScale = 1;
  PxVisibilityThreshold = 0.5;
  DpVisibilityThreshold = 0.1;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AnimationVector2D;
  _.$_$.b = AnimationVector4D;
  _.$_$.c = CubicBezierEasing;
  _.$_$.d = get_FastOutLinearInEasing;
  _.$_$.e = get_FastOutSlowInEasing;
  _.$_$.f = get_LinearEasing;
  _.$_$.g = SpringSpec;
  _.$_$.h = TwoWayConverter_0;
  _.$_$.i = get_VectorConverter_6;
  _.$_$.j = get_VectorConverter_2;
  _.$_$.k = get_VisibilityThreshold_4;
  _.$_$.l = get_VisibilityThreshold_5;
  _.$_$.m = animateFloatAsState$composable;
  _.$_$.n = calculateTargetValue;
  _.$_$.o = createTransitionAnimation$composable;
  _.$_$.p = keyframes;
  _.$_$.q = tween;
  _.$_$.r = updateTransition$composable;
  _.$_$.s = Animatable$default;
  _.$_$.t = exponentialDecay$default;
  _.$_$.u = infiniteRepeatable$default;
  _.$_$.v = spring$default;
  _.$_$.w = tween$default;
  _.$_$.x = Animatable_init_$Create$;
  _.$_$.y = SpringSpec_init_$Create$;
  _.$_$.z = TweenSpec_init_$Create$;
  _.$_$.a1 = Spring_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-animation-core.js.map
