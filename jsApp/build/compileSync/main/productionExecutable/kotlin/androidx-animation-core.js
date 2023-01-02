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
  var classMeta = kotlin_kotlin.$_$.y6;
  var Unit_getInstance = kotlin_kotlin.$_$.s2;
  var equals = kotlin_kotlin.$_$.a7;
  var coerceIn = kotlin_kotlin.$_$.k8;
  var Long = kotlin_kotlin.$_$.v9;
  var CoroutineImpl = kotlin_kotlin.$_$.k6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v5;
  var CancellationException = kotlin_kotlin.$_$.u5;
  var mutableStateOf$default = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.n2;
  var toString = kotlin_kotlin.$_$.x7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var KMutableProperty1 = kotlin_kotlin.$_$.s8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g7;
  var SuspendFunction0 = kotlin_kotlin.$_$.l6;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.g1;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.f2;
  var THROW_CCE = kotlin_kotlin.$_$.ba;
  var isObject = kotlin_kotlin.$_$.o7;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  var rememberUpdatedState$composable = kotlin_androidx_compose_runtime_runtime.$_$.n1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var SideEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var LaunchedEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var KProperty0 = kotlin_kotlin.$_$.t8;
  var THROW_ISE = kotlin_kotlin.$_$.ca;
  var getLocalDelegateReference = kotlin_kotlin.$_$.d7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var isInterface = kotlin_kotlin.$_$.n7;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_unit.$_$.a3;
  var Dp = kotlin_androidx_compose_ui_ui_unit.$_$.o;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_geometry.$_$.l1;
  var Size = kotlin_androidx_compose_ui_ui_geometry.$_$.k;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_geometry.$_$.j1;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance_3 = kotlin_androidx_compose_ui_ui_geometry.$_$.k1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.o2;
  var Companion_getInstance_4 = kotlin_androidx_compose_ui_ui_unit.$_$.d3;
  var IntOffset = kotlin_androidx_compose_ui_ui_unit.$_$.q;
  var Companion_getInstance_5 = kotlin_androidx_compose_ui_ui_unit.$_$.f3;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$_$.s;
  var SuspendFunction1 = kotlin_kotlin.$_$.m6;
  var isNaN_0 = kotlin_kotlin.$_$.na;
  var interfaceMeta = kotlin_kotlin.$_$.k7;
  var Enum = kotlin_kotlin.$_$.q9;
  var hashCode = kotlin_kotlin.$_$.i7;
  var getNumberHashCode = kotlin_kotlin.$_$.e7;
  var objectMeta = kotlin_kotlin.$_$.u7;
  var State = kotlin_androidx_compose_runtime_runtime.$_$.b1;
  var to = kotlin_kotlin.$_$.bb;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.wa;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var toLong = kotlin_kotlin.$_$.v7;
  var coerceIn_0 = kotlin_kotlin.$_$.m8;
  var numberToLong = kotlin_kotlin.$_$.t7;
  var withFrameNanos = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var Key_getInstance = kotlin_androidx_compose_ui_ui.$_$.y3;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.x;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var ensureNotNull = kotlin_kotlin.$_$.ja;
  var AtomicReference = kotlin_androidx_compose_runtime_runtime.$_$.k;
  var Mutex$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var isFinite = kotlin_kotlin.$_$.ka;
  var isNaN_1 = kotlin_kotlin.$_$.oa;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.m2;
  var floatFromBits = kotlin_kotlin.$_$.c7;
  var toBits = kotlin_kotlin.$_$.xa;
  var Key_getInstance_1 = kotlin_androidx_compose_ui_ui.$_$.c4;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var derivedStateOf = kotlin_androidx_compose_runtime_runtime.$_$.e1;
  var DisposableEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.r;
  var DisposableEffectResult = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var KProperty1 = kotlin_kotlin.$_$.u8;
  var numberToInt = kotlin_kotlin.$_$.s7;
  var _Dp___get_value__impl__geb1vb = kotlin_androidx_compose_ui_ui_unit.$_$.c2;
  var _Dp___init__impl__ms3zkb = kotlin_androidx_compose_ui_ui_unit.$_$.z1;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_androidx_compose_ui_ui_unit.$_$.d2;
  var _DpOffset___get_y__impl__1h898y = kotlin_androidx_compose_ui_ui_unit.$_$.e2;
  var DpOffset = kotlin_androidx_compose_ui_ui_unit.$_$.k;
  var DpOffset_0 = kotlin_androidx_compose_ui_ui_unit.$_$.l;
  var _Size___get_width__impl__58y75t = kotlin_androidx_compose_ui_ui_geometry.$_$.h1;
  var _Size___get_height__impl__a04p02 = kotlin_androidx_compose_ui_ui_geometry.$_$.e1;
  var Size_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.j;
  var _Offset___get_x__impl__xvi35n = kotlin_androidx_compose_ui_ui_geometry.$_$.b1;
  var _Offset___get_y__impl__8bzhra = kotlin_androidx_compose_ui_ui_geometry.$_$.c1;
  var Offset_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.d;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_androidx_compose_ui_ui_unit.$_$.i2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_androidx_compose_ui_ui_unit.$_$.j2;
  var roundToInt = kotlin_kotlin.$_$.d8;
  var IntOffset_0 = kotlin_androidx_compose_ui_ui_unit.$_$.p;
  var _IntSize___get_width__impl__d9yl4o = kotlin_androidx_compose_ui_ui_unit.$_$.n2;
  var _IntSize___get_height__impl__prv63b = kotlin_androidx_compose_ui_ui_unit.$_$.l2;
  var IntSize_0 = kotlin_androidx_compose_ui_ui_unit.$_$.r;
  var Rect = kotlin_androidx_compose_ui_ui_geometry.$_$.g;
  var until = kotlin_kotlin.$_$.q8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.w3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var Companion_getInstance_6 = kotlin_androidx_compose_ui_ui_unit.$_$.b3;
  var mapOf = kotlin_kotlin.$_$.d5;
  //endregion
  //region block: pre-declaration
  Animatable$runAnimation$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Animatable$runAnimation$slambda.prototype.constructor = Animatable$runAnimation$slambda;
  Animatable$snapTo$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Animatable$snapTo$slambda.prototype.constructor = Animatable$snapTo$slambda;
  animateValueAsState$composable$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  animateValueAsState$composable$slambda$slambda.prototype.constructor = animateValueAsState$composable$slambda$slambda;
  animateValueAsState$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  animateValueAsState$composable$slambda.prototype.constructor = animateValueAsState$composable$slambda;
  function isFinishedFromNanos(playTimeNanos) {
    return playTimeNanos.h1(this.o71()) >= 0;
  }
  AnimationEndReason.prototype = Object.create(Enum.prototype);
  AnimationEndReason.prototype.constructor = AnimationEndReason;
  AnimationVector1D.prototype = Object.create(AnimationVector.prototype);
  AnimationVector1D.prototype.constructor = AnimationVector1D;
  AnimationVector2D.prototype = Object.create(AnimationVector.prototype);
  AnimationVector2D.prototype.constructor = AnimationVector2D;
  AnimationVector4D.prototype = Object.create(AnimationVector.prototype);
  AnimationVector4D.prototype.constructor = AnimationVector4D;
  function getEndVelocity(initialValue, targetValue, initialVelocity) {
    return this.f74(this.h74(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function vectorize(converter) {
    return VectorizedFloatAnimationSpec_init_$Create$(this);
  }
  withInfiniteAnimationFrameNanos$slambda.prototype = Object.create(CoroutineImpl.prototype);
  withInfiniteAnimationFrameNanos$slambda.prototype.constructor = withInfiniteAnimationFrameNanos$slambda;
  $withInfiniteAnimationFrameNanosCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $withInfiniteAnimationFrameNanosCOROUTINE$0.prototype.constructor = $withInfiniteAnimationFrameNanosCOROUTINE$0;
  MutatorMutex$mutate$slambda.prototype = Object.create(CoroutineImpl.prototype);
  MutatorMutex$mutate$slambda.prototype.constructor = MutatorMutex$mutate$slambda;
  MutatePriority.prototype = Object.create(Enum.prototype);
  MutatePriority.prototype.constructor = MutatePriority;
  $animateCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $animateCOROUTINE$1.prototype.constructor = $animateCOROUTINE$1;
  $callWithFrameNanosCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $callWithFrameNanosCOROUTINE$2.prototype.constructor = $callWithFrameNanosCOROUTINE$2;
  Transition$animateTo$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Transition$animateTo$composable$slambda.prototype.constructor = Transition$animateTo$composable$slambda;
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.q71(this.i71(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function get_isInfinite() {
    return false;
  }
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    return numberToLong(this.u7b() + this.t7b() | 0).n6(get_MillisToNanos());
  }
  //endregion
  function AnimationResult(endState, endReason) {
    this.q6w_1 = endState;
    this.r6w_1 = endReason;
    this.s6w_1 = 0;
  }
  AnimationResult.prototype.toString = function () {
    return 'AnimationResult(endReason=' + this.r6w_1 + ', endState=' + this.q6w_1 + ')';
  };
  AnimationResult.$metadata$ = classMeta('AnimationResult');
  function Animatable$runAnimation$slambda$lambda(this$0, $endState, $block, $clampingNeeded) {
    return function ($this$animate) {
      updateState($this$animate, this$0.w6w_1);
      var clamped = clampToBounds(this$0, $this$animate.i2());
      var tmp;
      if (!equals(clamped, $this$animate.i2())) {
        this$0.w6w_1.p11(clamped);
        $endState.p11(clamped);
        var tmp0_safe_receiver = $block;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(this$0);
        $this$animate.z6x();
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
  function _set_isRunning__kpbg34($this, _set____db54di) {
    var tmp0_setValue = isRunning$factory();
    return $this.x6w_1.p11(_set____db54di);
  }
  function _set_targetValue__aqsk0r($this, _set____db54di) {
    var tmp0_setValue = targetValue$factory();
    return $this.y6w_1.p11(_set____db54di);
  }
  function createVector(_this__u8e3s4, $this, value) {
    var newVector = $this.t6w_1.a6y()(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.r5d(i, value);
      }
       while (inductionVariable < last);
    return newVector;
  }
  function runAnimation($this, animation, initialVelocity, block, $cont) {
    var startTime = $this.w6w_1.v6x_1;
    return $this.b6x_1.e6y(null, Animatable$runAnimation$slambda_0($this, initialVelocity, animation, startTime, block, null), $cont, 1, null);
  }
  function clampToBounds($this, value) {
    if (equals($this.f6x_1, $this.d6x_1) ? equals($this.g6x_1, $this.e6x_1) : false) {
      return value;
    }
    var valueVector = $this.t6w_1.a6y()(value);
    var clamped = false;
    var inductionVariable = 0;
    var last = valueVector.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (valueVector.g(i) < $this.f6x_1.g(i) ? true : valueVector.g(i) > $this.g6x_1.g(i)) {
          clamped = true;
          valueVector.r5d(i, coerceIn(valueVector.g(i), $this.f6x_1.g(i), $this.g6x_1.g(i)));
        }
      }
       while (inductionVariable < last);
    if (clamped) {
      return $this.t6w_1.f6y()(valueVector);
    } else {
      return value;
    }
  }
  function endAnimation($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = $this.w6w_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.Animatable.endAnimation.<anonymous>' call
    tmp0_apply.u6x_1.b1q();
    var tmp = tmp0_apply;
    AnimationConstants_getInstance();
    tmp.v6x_1 = new Long(0, -2147483648);
    tmp$ret$0 = tmp0_apply;
    _set_isRunning__kpbg34($this, false);
  }
  function Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    this.o6y_1 = this$0;
    this.p6y_1 = $initialVelocity;
    this.q6y_1 = $animation;
    this.r6y_1 = $startTime;
    this.s6y_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  Animatable$runAnimation$slambda.prototype.w6y = function ($cont) {
    var tmp = this.a46($cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  Animatable$runAnimation$slambda.prototype.gh = function ($cont) {
    return this.w6y($cont);
  };
  Animatable$runAnimation$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            this.ag_1 = 2;
            this.o6y_1.w6w_1.u6x_1 = this.o6y_1.t6w_1.a6y()(this.p6y_1);
            _set_targetValue__aqsk0r(this.o6y_1, this.q6y_1.x6y());
            _set_isRunning__kpbg34(this.o6y_1, true);
            var tmp_0 = this;
            var tmp_1 = new Long(0, 0);
            AnimationConstants_getInstance();
            var tmp_2 = new Long(0, -2147483648);
            tmp_0.u6y_1 = copy$default(this.o6y_1.w6w_1, null, null, tmp_1, tmp_2, false, 23, null);
            this.v6y_1 = {_v: false};
            this.zf_1 = 1;
            suspendResult = animate(this.u6y_1, this.q6y_1, this.r6y_1, Animatable$runAnimation$slambda$lambda(this.o6y_1, this.u6y_1, this.s6y_1, this.v6y_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var endReason = this.v6y_1._v ? AnimationEndReason_BoundReached_getInstance() : AnimationEndReason_Finished_getInstance();
            endAnimation(this.o6y_1);
            this.t6y_1 = new AnimationResult(this.u6y_1, endReason);
            this.ag_1 = 3;
            this.zf_1 = 4;
            continue $sm;
          case 2:
            this.ag_1 = 3;
            var tmp_3 = this.cg_1;
            if (tmp_3 instanceof CancellationException) {
              var e = this.cg_1;
              var tmp_4 = this;
              endAnimation(this.o6y_1);
              throw e;
            } else {
              throw this.cg_1;
            }

            break;
          case 3:
            throw this.cg_1;
          case 4:
            this.ag_1 = 3;
            return this.t6y_1;
        }
      } catch ($p) {
        if (this.ag_1 === 3) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  Animatable$runAnimation$slambda.prototype.a46 = function (completion) {
    var i = new Animatable$runAnimation$slambda(this.o6y_1, this.p6y_1, this.q6y_1, this.r6y_1, this.s6y_1, completion);
    return i;
  };
  Animatable$runAnimation$slambda.$metadata$ = classMeta('Animatable$runAnimation$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function Animatable$runAnimation$slambda_0(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    var i = new Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation);
    var l = function ($cont) {
      return i.w6y($cont);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation) {
    this.g6z_1 = this$0;
    this.h6z_1 = $targetValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  Animatable$snapTo$slambda.prototype.i6z = function ($cont) {
    var tmp = this.a46($cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  Animatable$snapTo$slambda.prototype.gh = function ($cont) {
    return this.i6z($cont);
  };
  Animatable$snapTo$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          endAnimation(this.g6z_1);
          var clampedValue = clampToBounds(this.g6z_1, this.h6z_1);
          this.g6z_1.w6w_1.p11(clampedValue);
          _set_targetValue__aqsk0r(this.g6z_1, clampedValue);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  Animatable$snapTo$slambda.prototype.a46 = function (completion) {
    var i = new Animatable$snapTo$slambda(this.g6z_1, this.h6z_1, completion);
    return i;
  };
  Animatable$snapTo$slambda.$metadata$ = classMeta('Animatable$snapTo$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function Animatable$snapTo$slambda_0(this$0, $targetValue, resultContinuation) {
    var i = new Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation);
    var l = function ($cont) {
      return i.i6z($cont);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable(initialValue, typeConverter, visibilityThreshold, label) {
    this.t6w_1 = typeConverter;
    this.u6w_1 = visibilityThreshold;
    this.v6w_1 = label;
    var tmp = this;
    var tmp_0 = new Long(0, 0);
    var tmp_1 = new Long(0, 0);
    tmp.w6w_1 = AnimationState_init_$Create$(this.t6w_1, initialValue, null, tmp_0, tmp_1, false, 60, null);
    var tmp_2 = this;
    tmp_2.x6w_1 = mutableStateOf$default(false, null, 2, null);
    var tmp_3 = this;
    tmp_3.y6w_1 = mutableStateOf$default(initialValue, null, 2, null);
    this.z6w_1 = null;
    this.a6x_1 = null;
    this.b6x_1 = new MutatorMutex();
    var tmp_4 = this;
    tmp_4.c6x_1 = SpringSpec_init_$Create$(0.0, 0.0, this.u6w_1, 3, null);
    var tmp_5 = this;
    FloatCompanionObject_getInstance();
    tmp_5.d6x_1 = createVector(initialValue, this, -Infinity);
    var tmp_6 = this;
    FloatCompanionObject_getInstance();
    tmp_6.e6x_1 = createVector(initialValue, this, Infinity);
    this.f6x_1 = this.d6x_1;
    this.g6x_1 = this.e6x_1;
    this.h6x_1 = 8;
  }
  Animatable.prototype.j6z = function () {
    return this.t6w_1;
  };
  Animatable.prototype.i2 = function () {
    return this.w6w_1.i2();
  };
  Animatable.prototype.k6z = function () {
    return this.w6w_1.u6x_1;
  };
  Animatable.prototype.l6z = function () {
    return this.t6w_1.f6y()(this.k6z());
  };
  Animatable.prototype.m6z = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isRunning$factory_0();
    tmp$ret$0 = this.x6w_1.i2();
    return tmp$ret$0;
  };
  Animatable.prototype.x6y = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = targetValue$factory_0();
    tmp$ret$0 = this.y6w_1.i2();
    return tmp$ret$0;
  };
  Animatable.prototype.n6z = function (lowerBound, upperBound) {
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
      tmp$ret$0 = this.t6w_1.a6y()(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var lowerBoundVector = tmp1_elvis_lhs == null ? this.d6x_1 : tmp1_elvis_lhs;
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
      tmp$ret$2 = this.t6w_1.a6y()(tmp2_safe_receiver);
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    }
    var tmp3_elvis_lhs = tmp_0;
    var upperBoundVector = tmp3_elvis_lhs == null ? this.e6x_1 : tmp3_elvis_lhs;
    var inductionVariable = 0;
    var last = lowerBoundVector.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.check' call
        var tmp0_check = lowerBoundVector.g(i) <= upperBoundVector.g(i);
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
    this.f6x_1 = lowerBoundVector;
    this.g6x_1 = upperBoundVector;
    this.a6x_1 = upperBound;
    this.z6w_1 = lowerBound;
    if (!this.m6z()) {
      var clampedValue = clampToBounds(this, this.i2());
      if (!equals(clampedValue, this.i2())) {
        this.w6w_1.p11(clampedValue);
      }
    }
  };
  Animatable.prototype.o6z = function (targetValue, animationSpec, initialVelocity, block, $cont) {
    var tmp0_initialValue = this.i2();
    var tmp1_typeConverter = this.t6w_1;
    var anim = TargetBasedAnimation_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, initialVelocity);
    return runAnimation(this, anim, initialVelocity, block, $cont);
  };
  Animatable.prototype.p6z = function (targetValue, animationSpec, initialVelocity, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      animationSpec = this.c6x_1;
    if (!(($mask0 & 4) === 0))
      initialVelocity = this.l6z();
    if (!(($mask0 & 8) === 0))
      block = null;
    return this.o6z(targetValue, animationSpec, initialVelocity, block, $cont);
  };
  Animatable.prototype.q6z = function (initialVelocity, animationSpec, block, $cont) {
    var tmp0_initialValue = this.i2();
    var tmp1_initialVelocityVector = this.t6w_1.a6y()(initialVelocity);
    var tmp2_typeConverter = this.t6w_1;
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    return runAnimation(this, anim, initialVelocity, block, $cont);
  };
  Animatable.prototype.r6z = function (targetValue, $cont) {
    return this.b6x_1.e6y(null, Animatable$snapTo$slambda_0(this, targetValue, null), $cont, 1, null);
  };
  Animatable.prototype.s6z = function () {
    return this.w6w_1;
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
      return receiver.m6z();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function isRunning$factory_0() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.m6z();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function targetValue$factory() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.x6y();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  function targetValue$factory_0() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.x6y();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  function get_defaultAnimation() {
    init_properties_AnimateAsState_kt_rhsuys();
    return defaultAnimation;
  }
  var defaultAnimation;
  var dpDefaultSpring;
  var sizeDefaultSpring;
  var offsetDefaultSpring;
  var rectDefaultSpring;
  var intDefaultSpring;
  var intOffsetDefaultSpring;
  var intSizeDefaultSpring;
  function animateFloatAsState$composable(targetValue, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    init_properties_AnimateAsState_kt_rhsuys();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = {_v: visibilityThreshold};
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.y1a(-298361457);
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
    $composer_0.y1a(-143091586);
    sourceInformation($composer_0, '70@3173L83');
    var tmp;
    if (animationSpec_0 === get_defaultAnimation()) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = visibilityThreshold_0._v;
      var tmp1_remember$composable = $composer_0;
      var tmp2_remember$composable = 14 & $changed >> 6;
      var $composer_1 = tmp1_remember$composable;
      $composer_1.y1a(-838505973);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.z1a(tmp0_remember$composable);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance().c1b_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.core.animateFloatAsState$composable.<anonymous>' call
        tmp$ret$0 = spring$default(0.0, 0.0, visibilityThreshold_0._v, 3, null);
        var value = tmp$ret$0;
        tmp1_cache.b1b(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.d1b();
      tmp$ret$4 = tmp0;
      tmp = tmp$ret$4;
    } else {
      tmp = animationSpec_0;
    }
    var tmp1_group = tmp;
    $composer_0.d1b();
    var resolvedAnimSpec = tmp1_group;
    var tmp0_0 = animateValueAsState$composable(targetValue, get_VectorConverter_2(FloatCompanionObject_getInstance()), resolvedAnimSpec, visibilityThreshold_0._v, label_0, finishedListener_0, $composer_0, 14 & $changed | 7168 & $changed << 3 | 57344 & $changed << 3 | 458752 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_0;
  }
  function animateValueAsState$composable(targetValue, typeConverter, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    init_properties_AnimateAsState_kt_rhsuys();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = {_v: visibilityThreshold};
    var label_0 = {_v: label};
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    $composer_0.y1a(-1860487620);
    sourceInformation($composer_0, 'C(animateValueAsState$composable)P(3,4!1,5,2)392@17984L21,398@18161L79,399@18261L38,400@18338L339,411@18696L42,412@18743L55,415@18803L721:AnimateAsState.kt#pdpnli');
    if (!(($default & 4) === 0)) {
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.y1a(547886695);
      sourceInformation($composer_1, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance().c1b_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
        tmp$ret$0 = spring$default(0.0, 0.0, null, 7, null);
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
    $composer_2.y1a(547886695);
    sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_2;
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = tmp1_cache_0.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (false ? true : tmp0_let_0 === Companion_getInstance().c1b_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
      tmp$ret$5 = new Animatable(targetValue, typeConverter, visibilityThreshold_0._v, label_0._v);
      var value_0 = tmp$ret$5;
      tmp1_cache_0.b1b(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    tmp$ret$6 = tmp_1;
    tmp$ret$7 = tmp$ret$6;
    var tmp_2 = tmp$ret$7;
    tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    var tmp0_0 = tmp$ret$8;
    $composer_2.d1b();
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
      tmp_4 = !equals(tmp2_run.v6z_1, visibilityThreshold_0._v);
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = spring(tmp2_run.t6z_1, tmp2_run.u6z_1, visibilityThreshold_0._v);
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
    $composer_3.y1a(547886695);
    sourceInformation($composer_3, 'C(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$15;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_1 = $composer_3;
    var tmp$ret$14;
    // Inline function 'kotlin.let' call
    var tmp0_let_1 = tmp1_cache_1.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$13;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_6;
    if (false ? true : tmp0_let_1 === Companion_getInstance().c1b_1) {
      var tmp$ret$12;
      // Inline function 'androidx.compose.animation.core.animateValueAsState$composable.<anonymous>' call
      Factory_getInstance();
      tmp$ret$12 = Channel$default(-1, null, null, 6, null);
      var value_1 = tmp$ret$12;
      tmp1_cache_1.b1b(value_1);
      tmp_6 = value_1;
    } else {
      tmp_6 = tmp0_let_1;
    }
    tmp$ret$13 = tmp_6;
    tmp$ret$14 = tmp$ret$13;
    var tmp_7 = tmp$ret$14;
    tmp$ret$15 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
    var tmp0_1 = tmp$ret$15;
    $composer_3.d1b();
    tmp$ret$16 = tmp0_1;
    var channel = tmp$ret$16;
    SideEffect$composable(animateValueAsState$composable$lambda_1(channel, targetValue), $composer_0, 0);
    LaunchedEffect$composable(channel, animateValueAsState$composable$slambda_0(channel, animatable, animSpec$delegate, listener$delegate, null), $composer_0, 0);
    var tmp0_2 = animatable.s6z();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_2;
  }
  function animateValueAsState$composable$lambda($listener$delegate) {
    init_properties_AnimateAsState_kt_rhsuys();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('listener', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $listener$delegate.i2();
    return tmp$ret$0;
  }
  function animateValueAsState$composable$lambda_0($animSpec$delegate) {
    init_properties_AnimateAsState_kt_rhsuys();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('animSpec', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $animSpec$delegate.i2();
    return tmp$ret$0;
  }
  function animateValueAsState$composable$lambda_1($channel, $targetValue) {
    return function () {
      $channel.qx($targetValue);
      return Unit_getInstance();
    };
  }
  function animateValueAsState$composable$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.e70_1 = $newTarget;
    this.f70_1 = $animatable;
    this.g70_1 = $animSpec$delegate;
    this.h70_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  animateValueAsState$composable$slambda$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  animateValueAsState$composable$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  animateValueAsState$composable$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            if (!equals(this.e70_1, this.f70_1.x6y())) {
              this.zf_1 = 1;
              var tmp_0 = animateValueAsState$composable$lambda_0(this.g70_1);
              suspendResult = this.f70_1.p6z(this.e70_1, tmp_0, null, null, this, 12, null);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            ;
            var tmp0_safe_receiver = animateValueAsState$composable$lambda(this.h70_1);
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver(this.f70_1.i2());
            ;
            this.zf_1 = 2;
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 3) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  animateValueAsState$composable$slambda$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new animateValueAsState$composable$slambda$slambda(this.e70_1, this.f70_1, this.g70_1, this.h70_1, completion);
    i.i70_1 = $this$launch;
    return i;
  };
  animateValueAsState$composable$slambda$slambda.$metadata$ = classMeta('animateValueAsState$composable$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function animateValueAsState$composable$slambda$slambda_0($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$composable$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function animateValueAsState$composable$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.r70_1 = $channel;
    this.s70_1 = $animatable;
    this.t70_1 = $animSpec$delegate;
    this.u70_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  animateValueAsState$composable$slambda.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  animateValueAsState$composable$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  animateValueAsState$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            this.w70_1 = this.r70_1.c();
            this.zf_1 = 1;
            continue $sm;
          case 1:
            this.zf_1 = 2;
            suspendResult = this.w70_1.wv(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.zf_1 = 3;
              continue $sm;
            }

            var target = this.w70_1.e();
            var tmp1_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.r70_1.fx());
            var newTarget = tmp1_elvis_lhs == null ? target : tmp1_elvis_lhs;
            launch$default(this.v70_1, null, null, animateValueAsState$composable$slambda$slambda_0(newTarget, this.s70_1, this.t70_1, this.u70_1, null), 3, null);
            ;
            this.zf_1 = 1;
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
  animateValueAsState$composable$slambda.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new animateValueAsState$composable$slambda(this.r70_1, this.s70_1, this.t70_1, this.u70_1, completion);
    i.v70_1 = $this$LaunchedEffect;
    return i;
  };
  animateValueAsState$composable$slambda.$metadata$ = classMeta('animateValueAsState$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function animateValueAsState$composable$slambda_0($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$composable$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
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
  function TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this) {
    TargetBasedAnimation.call($this, animationSpec.x70(typeConverter), typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    return TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, Object.create(TargetBasedAnimation.prototype));
  }
  function TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    this.y70_1 = animationSpec;
    this.z70_1 = typeConverter;
    this.a71_1 = initialValue;
    this.b71_1 = targetValue;
    this.c71_1 = this.z70_1.a6y()(this.a71_1);
    this.d71_1 = this.z70_1.a6y()(this.b71_1);
    var tmp = this;
    var tmp0_safe_receiver = initialVelocityVector;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : copy_0(tmp0_safe_receiver);
    tmp.e71_1 = tmp1_elvis_lhs == null ? newInstance(this.z70_1.a6y()(this.a71_1)) : tmp1_elvis_lhs;
    this.f71_1 = this.y70_1.i71(this.c71_1, this.d71_1, this.e71_1);
    this.g71_1 = this.y70_1.j71(this.c71_1, this.d71_1, this.e71_1);
    this.h71_1 = 0;
  }
  TargetBasedAnimation.prototype.j6z = function () {
    return this.z70_1;
  };
  TargetBasedAnimation.prototype.x6y = function () {
    return this.b71_1;
  };
  TargetBasedAnimation.prototype.k71 = function () {
    return this.y70_1.k71();
  };
  TargetBasedAnimation.prototype.l71 = function (playTimeNanos) {
    var tmp;
    if (!this.n71(playTimeNanos)) {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = this.y70_1.m71(playTimeNanos, this.c71_1, this.d71_1, this.e71_1);
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>' call
      var inductionVariable = 0;
      var last = tmp0_let.f();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.check' call
          var tmp0_check = !isNaN_0(tmp0_let.g(i));
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
      tmp$ret$1 = this.z70_1.f6y()(tmp0_let);
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    } else {
      tmp = this.b71_1;
    }
    return tmp;
  };
  TargetBasedAnimation.prototype.o71 = function () {
    return this.f71_1;
  };
  TargetBasedAnimation.prototype.p71 = function (playTimeNanos) {
    var tmp;
    if (!this.n71(playTimeNanos)) {
      tmp = this.y70_1.q71(playTimeNanos, this.c71_1, this.d71_1, this.e71_1);
    } else {
      tmp = this.g71_1;
    }
    return tmp;
  };
  TargetBasedAnimation.prototype.toString = function () {
    return 'TargetBasedAnimation: ' + this.a71_1 + ' -> ' + this.b71_1 + ',' + ('initial velocity: ' + this.e71_1 + ', duration: ' + toString(get_durationMillis(this)) + ' ms,') + ('animationSpec: ' + this.y70_1);
  };
  TargetBasedAnimation.$metadata$ = classMeta('TargetBasedAnimation', [Animation]);
  function TargetBasedAnimation_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocity) {
    return TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, typeConverter.a6y()(initialVelocity));
  }
  function DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, $this) {
    DecayAnimation.call($this, animationSpec.x70(typeConverter), typeConverter, initialValue, initialVelocityVector);
    return $this;
  }
  function DecayAnimation_init_$Create$(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    return DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, Object.create(DecayAnimation.prototype));
  }
  function DecayAnimation(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    this.r71_1 = animationSpec;
    this.s71_1 = typeConverter;
    this.t71_1 = initialValue;
    this.u71_1 = this.s71_1.a6y()(this.t71_1);
    this.v71_1 = copy_0(initialVelocityVector);
    this.x71_1 = this.s71_1.f6y()(this.r71_1.b72(this.u71_1, initialVelocityVector));
    this.z71_1 = false;
    this.y71_1 = this.r71_1.c72(this.u71_1, initialVelocityVector);
    this.w71_1 = copy_0(this.r71_1.d72(this.y71_1, this.u71_1, initialVelocityVector));
    var inductionVariable = 0;
    var last = this.w71_1.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.w71_1.r5d(i, coerceIn(this.w71_1.g(i), -this.r71_1.e72(), this.r71_1.e72()));
      }
       while (inductionVariable < last);
    this.a72_1 = 0;
  }
  DecayAnimation.prototype.j6z = function () {
    return this.s71_1;
  };
  DecayAnimation.prototype.x6y = function () {
    return this.x71_1;
  };
  DecayAnimation.prototype.o71 = function () {
    return this.y71_1;
  };
  DecayAnimation.prototype.k71 = function () {
    return this.z71_1;
  };
  DecayAnimation.prototype.l71 = function (playTimeNanos) {
    if (!this.n71(playTimeNanos)) {
      return this.s71_1.f6y()(this.r71_1.f72(playTimeNanos, this.u71_1, this.v71_1));
    } else {
      return this.x71_1;
    }
  };
  DecayAnimation.prototype.p71 = function (playTimeNanos) {
    if (!this.n71(playTimeNanos)) {
      return this.r71_1.d72(playTimeNanos, this.u71_1, this.v71_1);
    } else {
      return this.w71_1;
    }
  };
  DecayAnimation.$metadata$ = classMeta('DecayAnimation', [Animation]);
  function Animation() {
  }
  Animation.$metadata$ = interfaceMeta('Animation');
  function get_durationMillis(_this__u8e3s4) {
    return _this__u8e3s4.o71().m6(new Long(1000000, 0));
  }
  var AnimationEndReason_BoundReached_instance;
  var AnimationEndReason_Finished_instance;
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
    this.t6z_1 = dampingRatio;
    this.u6z_1 = stiffness;
    this.v6z_1 = visibilityThreshold;
  }
  SpringSpec.prototype.g72 = function () {
    return this.t6z_1;
  };
  SpringSpec.prototype.h72 = function () {
    return this.u6z_1;
  };
  SpringSpec.prototype.i72 = function () {
    return this.v6z_1;
  };
  SpringSpec.prototype.x70 = function (converter) {
    return VectorizedSpringSpec_init_$Create$(this.t6z_1, this.u6z_1, convert(converter, this.v6z_1));
  };
  SpringSpec.prototype.equals = function (other) {
    var tmp;
    if (other instanceof SpringSpec) {
      tmp = (other.t6z_1 === this.t6z_1 ? other.u6z_1 === this.u6z_1 : false) ? equals(other.v6z_1, this.v6z_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  SpringSpec.prototype.hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.v6z_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(imul(tmp$ret$0, 31) + getNumberHashCode(this.t6z_1) | 0, 31) + getNumberHashCode(this.u6z_1) | 0;
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
      return _this__u8e3s4.a6y()(data);
    }
  }
  function AnimationSpec() {
  }
  AnimationSpec.$metadata$ = interfaceMeta('AnimationSpec');
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
    this.j72_1 = durationMillis;
    this.k72_1 = delay;
    this.l72_1 = easing;
  }
  TweenSpec.prototype.x70 = function (converter) {
    return new VectorizedTweenSpec(this.j72_1, this.k72_1, this.l72_1);
  };
  TweenSpec.prototype.equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.j72_1 === this.j72_1 ? other.k72_1 === this.k72_1 : false) ? equals(other.l72_1, this.l72_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  TweenSpec.prototype.hashCode = function () {
    return imul(imul(this.j72_1, 31) + hashCode(this.l72_1) | 0, 31) + this.k72_1 | 0;
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
  function AnimationConstants() {
    AnimationConstants_instance = this;
    this.m72_1 = 300;
    this.n72_1 = new Long(0, -2147483648);
    this.o72_1 = 0;
  }
  AnimationConstants.prototype.p72 = function () {
    return this.n72_1;
  };
  AnimationConstants.$metadata$ = objectMeta('AnimationConstants');
  var AnimationConstants_instance;
  function AnimationConstants_getInstance() {
    if (AnimationConstants_instance == null)
      new AnimationConstants();
    return AnimationConstants_instance;
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
    this.s6x_1 = typeConverter;
    var tmp = this;
    tmp.t6x_1 = mutableStateOf$default(initialValue, null, 2, null);
    var tmp_0 = this;
    var tmp0_safe_receiver = initialVelocityVector;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : copy_0(tmp0_safe_receiver);
    tmp_0.u6x_1 = tmp1_elvis_lhs == null ? createZeroVectorFrom(this.s6x_1, initialValue) : tmp1_elvis_lhs;
    this.v6x_1 = lastFrameTimeNanos;
    this.w6x_1 = finishedTimeNanos;
    this.x6x_1 = isRunning;
    this.y6x_1 = 0;
  }
  AnimationState.prototype.p11 = function (_set____db54di) {
    var tmp0_setValue = value$factory();
    return this.t6x_1.p11(_set____db54di);
  };
  AnimationState.prototype.i2 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = value$factory_0();
    tmp$ret$0 = this.t6x_1.i2();
    return tmp$ret$0;
  };
  AnimationState.prototype.k6z = function () {
    return this.u6x_1;
  };
  AnimationState.prototype.q72 = function (_set____db54di) {
    this.v6x_1 = _set____db54di;
  };
  AnimationState.prototype.l6z = function () {
    return this.s6x_1.f6y()(this.u6x_1);
  };
  AnimationState.prototype.toString = function () {
    return 'AnimationState(' + ('value=' + this.i2() + ', ') + ('velocity=' + this.l6z() + ', ') + ('isRunning=' + this.x6x_1 + ', ') + ('lastFrameTimeNanos=' + toString(this.v6x_1) + ', ') + ('finishedTimeNanos=' + toString(this.w6x_1)) + ')';
  };
  AnimationState.$metadata$ = classMeta('AnimationState', [State]);
  function copy(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    return new AnimationState(_this__u8e3s4.s6x_1, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function copy$default(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = _this__u8e3s4.i2();
    if (!(($mask0 & 2) === 0))
      velocityVector = copy_0(_this__u8e3s4.u6x_1);
    if (!(($mask0 & 4) === 0))
      lastFrameTimeNanos = _this__u8e3s4.v6x_1;
    if (!(($mask0 & 8) === 0))
      finishedTimeNanos = _this__u8e3s4.w6x_1;
    if (!(($mask0 & 16) === 0))
      isRunning = _this__u8e3s4.x6x_1;
    return copy(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationScope(initialValue, typeConverter, initialVelocityVector, lastFrameTimeNanos, targetValue, startTimeNanos, isRunning, onCancel) {
    this.i6x_1 = typeConverter;
    this.j6x_1 = targetValue;
    this.k6x_1 = startTimeNanos;
    this.l6x_1 = onCancel;
    var tmp = this;
    tmp.m6x_1 = mutableStateOf$default(initialValue, null, 2, null);
    this.n6x_1 = copy_0(initialVelocityVector);
    this.o6x_1 = lastFrameTimeNanos;
    var tmp_0 = this;
    AnimationConstants_getInstance();
    tmp_0.p6x_1 = new Long(0, -2147483648);
    var tmp_1 = this;
    tmp_1.q6x_1 = mutableStateOf$default(isRunning, null, 2, null);
    this.r6x_1 = 8;
  }
  AnimationScope.prototype.p11 = function (_set____db54di) {
    var tmp0_setValue = value$factory_1();
    return this.m6x_1.p11(_set____db54di);
  };
  AnimationScope.prototype.i2 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = value$factory_2();
    tmp$ret$0 = this.m6x_1.i2();
    return tmp$ret$0;
  };
  AnimationScope.prototype.r72 = function (_set____db54di) {
    var tmp0_setValue = isRunning$factory_1();
    return this.q6x_1.p11(_set____db54di);
  };
  AnimationScope.prototype.m6z = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isRunning$factory_2();
    tmp$ret$0 = this.q6x_1.i2();
    return tmp$ret$0;
  };
  AnimationScope.prototype.z6x = function () {
    this.r72(false);
    this.l6x_1();
  };
  AnimationScope.$metadata$ = classMeta('AnimationScope');
  function createZeroVectorFrom(_this__u8e3s4, value) {
    return newInstance(_this__u8e3s4.a6y()(value));
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.i2();
    }, function (receiver, value) {
      return receiver.p11(value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.i2();
    }, function (receiver, value) {
      return receiver.p11(value);
    });
  }
  function value$factory_1() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.i2();
    }, function (receiver, value) {
      return receiver.p11(value);
    });
  }
  function value$factory_2() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.i2();
    }, function (receiver, value) {
      return receiver.p11(value);
    });
  }
  function isRunning$factory_1() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.m6z();
    }, function (receiver, value) {
      return receiver.r72(value);
    });
  }
  function isRunning$factory_2() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.m6z();
    }, function (receiver, value) {
      return receiver.r72(value);
    });
  }
  function AnimationVector() {
    this.b6y_1 = 0;
  }
  AnimationVector.$metadata$ = classMeta('AnimationVector');
  function AnimationVector1D(initVal) {
    AnimationVector.call(this);
    this.u72_1 = initVal;
    this.v72_1 = 1;
    this.w72_1 = 8;
  }
  AnimationVector1D.prototype.b1q = function () {
    this.u72_1 = 0.0;
  };
  AnimationVector1D.prototype.s72 = function () {
    return new AnimationVector1D(0.0);
  };
  AnimationVector1D.prototype.g = function (index) {
    if (index === 0) {
      return this.u72_1;
    } else {
      return 0.0;
    }
  };
  AnimationVector1D.prototype.r5d = function (index, value) {
    if (index === 0) {
      this.u72_1 = value;
    }
  };
  AnimationVector1D.prototype.f = function () {
    return this.v72_1;
  };
  AnimationVector1D.prototype.toString = function () {
    return 'AnimationVector1D: value = ' + this.u72_1;
  };
  AnimationVector1D.prototype.equals = function (other) {
    var tmp;
    if (other instanceof AnimationVector1D) {
      tmp = other.u72_1 === this.u72_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  AnimationVector1D.prototype.hashCode = function () {
    return getNumberHashCode(this.u72_1);
  };
  AnimationVector1D.$metadata$ = classMeta('AnimationVector1D', undefined, undefined, undefined, undefined, AnimationVector.prototype);
  function AnimationVector2D(v1, v2) {
    AnimationVector.call(this);
    this.y72_1 = v1;
    this.z72_1 = v2;
    this.a73_1 = 2;
    this.b73_1 = 8;
  }
  AnimationVector2D.prototype.b1q = function () {
    this.y72_1 = 0.0;
    this.z72_1 = 0.0;
  };
  AnimationVector2D.prototype.s72 = function () {
    return new AnimationVector2D(0.0, 0.0);
  };
  AnimationVector2D.prototype.g = function (index) {
    var tmp0_subject = index;
    switch (tmp0_subject) {
      case 0:
        return this.y72_1;
      case 1:
        return this.z72_1;
      default:
        return 0.0;
    }
  };
  AnimationVector2D.prototype.r5d = function (index, value) {
    var tmp0_subject = index;
    if (tmp0_subject === 0)
      this.y72_1 = value;
    else if (tmp0_subject === 1)
      this.z72_1 = value;
  };
  AnimationVector2D.prototype.f = function () {
    return this.a73_1;
  };
  AnimationVector2D.prototype.toString = function () {
    return 'AnimationVector2D: v1 = ' + this.y72_1 + ', v2 = ' + this.z72_1;
  };
  AnimationVector2D.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AnimationVector2D) {
      tmp_0 = other.y72_1 === this.y72_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.z72_1 === this.z72_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  AnimationVector2D.prototype.hashCode = function () {
    return imul(getNumberHashCode(this.y72_1), 31) + getNumberHashCode(this.z72_1) | 0;
  };
  AnimationVector2D.$metadata$ = classMeta('AnimationVector2D', undefined, undefined, undefined, undefined, AnimationVector.prototype);
  function AnimationVector4D(v1, v2, v3, v4) {
    AnimationVector.call(this);
    this.d73_1 = v1;
    this.e73_1 = v2;
    this.f73_1 = v3;
    this.g73_1 = v4;
    this.h73_1 = 4;
    this.i73_1 = 8;
  }
  AnimationVector4D.prototype.b1q = function () {
    this.d73_1 = 0.0;
    this.e73_1 = 0.0;
    this.f73_1 = 0.0;
    this.g73_1 = 0.0;
  };
  AnimationVector4D.prototype.s72 = function () {
    return new AnimationVector4D(0.0, 0.0, 0.0, 0.0);
  };
  AnimationVector4D.prototype.g = function (index) {
    var tmp0_subject = index;
    switch (tmp0_subject) {
      case 0:
        return this.d73_1;
      case 1:
        return this.e73_1;
      case 2:
        return this.f73_1;
      case 3:
        return this.g73_1;
      default:
        return 0.0;
    }
  };
  AnimationVector4D.prototype.r5d = function (index, value) {
    var tmp0_subject = index;
    switch (tmp0_subject) {
      case 0:
        this.d73_1 = value;
        break;
      case 1:
        this.e73_1 = value;
        break;
      case 2:
        this.f73_1 = value;
        break;
      case 3:
        this.g73_1 = value;
        break;
    }
  };
  AnimationVector4D.prototype.f = function () {
    return this.h73_1;
  };
  AnimationVector4D.prototype.toString = function () {
    return 'AnimationVector4D: v1 = ' + this.d73_1 + ', v2 = ' + this.e73_1 + ', v3 = ' + this.f73_1 + ', v4 = ' + this.g73_1;
  };
  AnimationVector4D.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof AnimationVector4D) {
      tmp_2 = other.d73_1 === this.d73_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.e73_1 === this.e73_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.f73_1 === this.f73_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.g73_1 === this.g73_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  AnimationVector4D.prototype.hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.d73_1), 31) + getNumberHashCode(this.e73_1) | 0, 31) + getNumberHashCode(this.f73_1) | 0, 31) + getNumberHashCode(this.g73_1) | 0;
  };
  AnimationVector4D.$metadata$ = classMeta('AnimationVector4D', undefined, undefined, undefined, undefined, AnimationVector.prototype);
  function newInstance(_this__u8e3s4) {
    var tmp = _this__u8e3s4.s72();
    return tmp instanceof AnimationVector ? tmp : THROW_CCE();
  }
  function AnimationVector_0(v1) {
    return new AnimationVector1D(v1);
  }
  function copy_0(_this__u8e3s4) {
    var newVector = newInstance(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.r5d(i, _this__u8e3s4.g(i));
      }
       while (inductionVariable < last);
    return newVector;
  }
  function copyFrom(_this__u8e3s4, source) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.r5d(i, source.g(i));
      }
       while (inductionVariable < last);
  }
  function ComplexDouble(_real, _imaginary) {
    this.j73_1 = _real;
    this.k73_1 = _imaginary;
  }
  ComplexDouble.prototype.l73 = function () {
    return this.j73_1;
  };
  ComplexDouble.prototype.m73 = function () {
    return this.k73_1;
  };
  ComplexDouble.prototype.n73 = function (other) {
    var tmp0_this = this;
    tmp0_this.j73_1 = tmp0_this.j73_1 + other;
    return this;
  };
  ComplexDouble.prototype.l6 = function () {
    var tmp0_this = this;
    tmp0_this.j73_1 = tmp0_this.j73_1 * -1;
    var tmp1_this = this;
    tmp1_this.k73_1 = tmp1_this.k73_1 * -1;
    return this;
  };
  ComplexDouble.prototype.uf = function (other) {
    var tmp0_this = this;
    tmp0_this.j73_1 = tmp0_this.j73_1 / other;
    var tmp1_this = this;
    tmp1_this.k73_1 = tmp1_this.k73_1 / other;
    return this;
  };
  ComplexDouble.prototype.toString = function () {
    return 'ComplexDouble(_real=' + this.j73_1 + ', _imaginary=' + this.k73_1 + ')';
  };
  ComplexDouble.prototype.hashCode = function () {
    var result = getNumberHashCode(this.j73_1);
    result = imul(result, 31) + getNumberHashCode(this.k73_1) | 0;
    return result;
  };
  ComplexDouble.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComplexDouble))
      return false;
    var tmp0_other_with_cast = other instanceof ComplexDouble ? other : THROW_CCE();
    if (!equals(this.j73_1, tmp0_other_with_cast.j73_1))
      return false;
    if (!equals(this.k73_1, tmp0_other_with_cast.k73_1))
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
    tmp0_this.j73_1 = tmp0_this.j73_1 + tmp0_plus;
    tmp$ret$0 = tmp1_plus;
    tmp$ret$1 = tmp$ret$0;
    var tmp2_div = tmp$ret$1;
    var tmp3_div = 2.0 * a;
    var tmp0_this_0 = tmp2_div;
    tmp0_this_0.j73_1 = tmp0_this_0.j73_1 / tmp3_div;
    var tmp1_this = tmp2_div;
    tmp1_this.k73_1 = tmp1_this.k73_1 / tmp3_div;
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
    tmp0_this_1.j73_1 = tmp0_this_1.j73_1 * -1;
    var tmp1_this_0 = tmp6_minus;
    tmp1_this_0.k73_1 = tmp1_this_0.k73_1 * -1;
    tmp$ret$3 = tmp6_minus;
    var tmp4_plus = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var tmp0_this_2 = tmp4_plus;
    tmp0_this_2.j73_1 = tmp0_this_2.j73_1 + tmp5_minus;
    tmp$ret$4 = tmp4_plus;
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    var tmp7_div = tmp$ret$6;
    var tmp8_div = 2.0 * a;
    var tmp0_this_3 = tmp7_div;
    tmp0_this_3.j73_1 = tmp0_this_3.j73_1 / tmp8_div;
    var tmp1_this_1 = tmp7_div;
    tmp1_this_1.k73_1 = tmp1_this_1.k73_1 / tmp8_div;
    tmp$ret$7 = tmp7_div;
    var secondRoot = tmp$ret$7;
    return to(firstRoot, secondRoot);
  }
  function plus(_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var tmp0_this = other;
    tmp0_this.j73_1 = tmp0_this.j73_1 + _this__u8e3s4;
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
    tmp0_this.j73_1 = tmp0_this.j73_1 * -1;
    var tmp1_this = other;
    tmp1_this.k73_1 = tmp1_this.k73_1 * -1;
    tmp$ret$0 = other;
    var tmp0_plus = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var tmp0_this_0 = tmp0_plus;
    tmp0_this_0.j73_1 = tmp0_this_0.j73_1 + _this__u8e3s4;
    tmp$ret$1 = tmp0_plus;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function DecayAnimationSpec() {
  }
  DecayAnimationSpec.$metadata$ = interfaceMeta('DecayAnimationSpec');
  function calculateTargetValue(_this__u8e3s4, initialValue, initialVelocity) {
    var vectorizedSpec = _this__u8e3s4.x70(get_VectorConverter_2(FloatCompanionObject_getInstance()));
    var targetVector = vectorizedSpec.b72(AnimationVector_0(initialValue), AnimationVector_0(initialVelocity));
    return targetVector.u72_1;
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
  function DecayAnimationSpecImpl(floatDecaySpec) {
    this.o73_1 = floatDecaySpec;
  }
  DecayAnimationSpecImpl.prototype.x70 = function (typeConverter) {
    return new VectorizedFloatDecaySpec(this.o73_1);
  };
  DecayAnimationSpecImpl.$metadata$ = classMeta('DecayAnimationSpecImpl', [DecayAnimationSpec]);
  function _get_valueVector__r10idf($this) {
    var tmp = $this.q73_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl($this) {
    var tmp = $this.r73_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_targetVector__vn6c89($this) {
    var tmp = $this.s73_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('targetVector');
    }
  }
  function VectorizedFloatDecaySpec(floatDecaySpec) {
    this.p73_1 = floatDecaySpec;
    this.t73_1 = this.p73_1.e72();
  }
  VectorizedFloatDecaySpec.prototype.e72 = function () {
    return this.t73_1;
  };
  VectorizedFloatDecaySpec.prototype.f72 = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.q73_1 == null)) {
      this.q73_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf(this).f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf(this).r5d(i, this.p73_1.u73(playTimeNanos, initialValue.g(i), initialVelocity.g(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf(this);
  };
  VectorizedFloatDecaySpec.prototype.c72 = function (initialValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    if (!!(this.r73_1 == null)) {
      this.r73_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp0_maxOf = maxDuration;
        var tmp1_maxOf = this.p73_1.v73(initialValue.g(i), initialVelocity.g(i));
        tmp$ret$0 = tmp0_maxOf.h1(tmp1_maxOf) >= 0 ? tmp0_maxOf : tmp1_maxOf;
        maxDuration = tmp$ret$0;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  VectorizedFloatDecaySpec.prototype.d72 = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.r73_1 == null)) {
      this.r73_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl(this).r5d(i, this.p73_1.w73(playTimeNanos, initialValue.g(i), initialVelocity.g(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl(this);
  };
  VectorizedFloatDecaySpec.prototype.b72 = function (initialValue, initialVelocity) {
    if (!!(this.s73_1 == null)) {
      this.s73_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_targetVector__vn6c89(this).f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_targetVector__vn6c89(this).r5d(i, this.p73_1.x73(initialValue.g(i), initialVelocity.g(i)));
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
  var LinearOutSlowInEasing;
  var FastOutLinearInEasing;
  function get_LinearEasing() {
    init_properties_Easing_kt_phvjv3();
    return LinearEasing;
  }
  var LinearEasing;
  function Easing() {
  }
  Easing.$metadata$ = interfaceMeta('Easing');
  function evaluateCubic($this, a, b, m) {
    return 3 * a * (1 - m) * (1 - m) * m + 3 * b * (1 - m) * m * m + m * m * m;
  }
  function CubicBezierEasing(a, b, c, d) {
    this.z73_1 = a;
    this.a74_1 = b;
    this.b74_1 = c;
    this.c74_1 = d;
    // Inline function 'kotlin.require' call
    var tmp0_require = ((!isNaN_0(this.z73_1) ? !isNaN_0(this.a74_1) : false) ? !isNaN_0(this.b74_1) : false) ? !isNaN_0(this.c74_1) : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.core.CubicBezierEasing.<anonymous>' call
      tmp$ret$0 = 'Parameters to CubicBezierEasing cannot be NaN. Actual parameters are: ' + this.z73_1 + ', ' + this.a74_1 + ', ' + this.b74_1 + ', ' + this.c74_1 + '.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  CubicBezierEasing.prototype.y73 = function (fraction) {
    if (fraction > 0.0 ? fraction < 1.0 : false) {
      var start = 0.0;
      var end = 1.0;
      while (true) {
        var midpoint = (start + end) / 2;
        var estimate = evaluateCubic(this, this.z73_1, this.b74_1, midpoint);
        var tmp$ret$0;
        // Inline function 'kotlin.math.absoluteValue' call
        var tmp0__get_absoluteValue__nukmtt = fraction - estimate;
        tmp$ret$0 = Math.abs(tmp0__get_absoluteValue__nukmtt);
        if (tmp$ret$0 < 0.001)
          return evaluateCubic(this, this.a74_1, this.c74_1, midpoint);
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
      tmp_2 = this.z73_1 === other.z73_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.a74_1 === other.a74_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.b74_1 === other.b74_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.c74_1 === other.c74_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  CubicBezierEasing.prototype.hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.z73_1), 31) + getNumberHashCode(this.a74_1) | 0, 31) + getNumberHashCode(this.b74_1) | 0, 31) + getNumberHashCode(this.c74_1) | 0;
  };
  CubicBezierEasing.$metadata$ = classMeta('CubicBezierEasing', [Easing]);
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.d74_1 = function_0;
  }
  sam$androidx_compose_animation_core_Easing$0.prototype.y73 = function (fraction) {
    return this.d74_1(fraction);
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
  function FloatSpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    this.j74_1 = dampingRatio;
    this.k74_1 = stiffness;
    this.l74_1 = visibilityThreshold;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new SpringSimulation(1.0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.animation.core.FloatSpringSpec.spring.<anonymous>' call
    tmp0_also.v74(this.j74_1);
    tmp0_also.w74(this.k74_1);
    tmp$ret$0 = tmp0_also;
    tmp.m74_1 = tmp$ret$0;
    this.n74_1 = 8;
  }
  FloatSpringSpec.prototype.g72 = function () {
    return this.j74_1;
  };
  FloatSpringSpec.prototype.h72 = function () {
    return this.k74_1;
  };
  FloatSpringSpec.prototype.e74 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.m6(get_MillisToNanos());
    this.m74_1.o74_1 = targetValue;
    var value = _Motion___get_value__impl__e0x31d(this.m74_1.x74(initialValue, initialVelocity, playTimeMillis));
    return value;
  };
  FloatSpringSpec.prototype.f74 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.m6(get_MillisToNanos());
    this.m74_1.o74_1 = targetValue;
    var velocity = _Motion___get_velocity__impl__h2mglt(this.m74_1.x74(initialValue, initialVelocity, playTimeMillis));
    return velocity;
  };
  FloatSpringSpec.prototype.g74 = function (initialValue, targetValue, initialVelocity) {
    return 0.0;
  };
  FloatSpringSpec.prototype.h74 = function (initialValue, targetValue, initialVelocity) {
    var tmp0_stiffness = this.m74_1.h72();
    var tmp1_dampingRatio = this.m74_1.u74_1;
    var tmp2_initialDisplacement = (initialValue - targetValue) / this.l74_1;
    var tmp3_initialVelocity = initialVelocity / this.l74_1;
    return estimateAnimationDurationMillis(tmp0_stiffness, tmp1_dampingRatio, tmp3_initialVelocity, tmp2_initialDisplacement, 1.0).n6(get_MillisToNanos());
  };
  FloatSpringSpec.prototype.x70 = function (converter) {
    return this.i74(converter);
  };
  FloatSpringSpec.$metadata$ = classMeta('FloatSpringSpec', [FloatAnimationSpec]);
  function clampPlayTime($this, playTime) {
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = $this.z74_1;
    tmp$ret$0 = playTime.p6(toLong(tmp0_minus));
    return coerceIn_0(tmp$ret$0, new Long(0, 0), toLong($this.y74_1));
  }
  function FloatTweenSpec(duration, delay, easing) {
    this.y74_1 = duration;
    this.z74_1 = delay;
    this.a75_1 = easing;
    this.b75_1 = 0;
  }
  FloatTweenSpec.prototype.e74 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.m6(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    var tmp;
    if (this.y74_1 === 0) {
      tmp = 1.0;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = this.y74_1;
      tmp$ret$0 = clampedPlayTime.tf() / tmp0_div;
      tmp = tmp$ret$0;
    }
    var rawFraction = tmp;
    var fraction = this.a75_1.y73(coerceIn(rawFraction, 0.0, 1.0));
    return lerp(initialValue, targetValue, fraction);
  };
  FloatTweenSpec.prototype.h74 = function (initialValue, targetValue, initialVelocity) {
    return numberToLong(this.z74_1 + this.y74_1 | 0).n6(get_MillisToNanos());
  };
  FloatTweenSpec.prototype.f74 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.m6(get_MillisToNanos());
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    if (clampedPlayTime.h1(new Long(0, 0)) < 0) {
      return 0.0;
    } else if (clampedPlayTime.equals(new Long(0, 0))) {
      return initialVelocity;
    }
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    tmp$ret$0 = clampedPlayTime.p6(new Long(1, 0));
    var startNum = this.e74(tmp$ret$0.n6(get_MillisToNanos()), initialValue, targetValue, initialVelocity);
    var endNum = this.e74(clampedPlayTime.n6(get_MillisToNanos()), initialValue, targetValue, initialVelocity);
    return (endNum - startNum) * 1000.0;
  };
  FloatTweenSpec.prototype.x70 = function (converter) {
    return this.i74(converter);
  };
  FloatTweenSpec.$metadata$ = classMeta('FloatTweenSpec', [FloatAnimationSpec]);
  function FloatExponentialDecaySpec(frictionMultiplier, absVelocityThreshold) {
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.math.max' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    tmp$ret$0 = Math.abs(absVelocityThreshold);
    var tmp0_max = tmp$ret$0;
    tmp$ret$1 = Math.max(1.0E-7, tmp0_max);
    tmp.c75_1 = tmp$ret$1;
    var tmp_0 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.math.max' call
    tmp$ret$2 = Math.max(1.0E-4, frictionMultiplier);
    tmp_0.d75_1 = -4.2 * tmp$ret$2;
    this.e75_1 = 0;
  }
  FloatExponentialDecaySpec.prototype.e72 = function () {
    return this.c75_1;
  };
  FloatExponentialDecaySpec.prototype.u73 = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.m6(get_MillisToNanos());
    var tmp = initialValue - initialVelocity / this.d75_1;
    var tmp_0 = initialVelocity / this.d75_1;
    var tmp$ret$0;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = this.d75_1 * playTimeMillis.tf() / 1000.0;
    tmp$ret$0 = Math.exp(tmp0_exp);
    return tmp + tmp_0 * tmp$ret$0;
  };
  FloatExponentialDecaySpec.prototype.w73 = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.m6(get_MillisToNanos());
    var tmp$ret$1;
    // Inline function 'kotlin.math.exp' call
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    tmp$ret$0 = playTimeMillis.tf() / 1000.0;
    var tmp0_exp = tmp$ret$0 * this.d75_1;
    tmp$ret$1 = Math.exp(tmp0_exp);
    return initialVelocity * tmp$ret$1;
  };
  FloatExponentialDecaySpec.prototype.v73 = function (initialValue, initialVelocity) {
    var tmp$ret$1;
    // Inline function 'kotlin.math.ln' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    tmp$ret$0 = Math.abs(initialVelocity);
    var tmp0_ln = this.c75_1 / tmp$ret$0;
    tmp$ret$1 = Math.log(tmp0_ln);
    return numberToLong(1000.0 * tmp$ret$1 / this.d75_1).n6(get_MillisToNanos());
  };
  FloatExponentialDecaySpec.prototype.x73 = function (initialValue, initialVelocity) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    tmp$ret$0 = Math.abs(initialVelocity);
    if (tmp$ret$0 <= this.c75_1) {
      return initialValue;
    }
    var tmp$ret$2;
    // Inline function 'kotlin.math.ln' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = this.c75_1 / initialVelocity;
    tmp$ret$1 = Math.abs(tmp0_abs);
    var tmp1_ln = tmp$ret$1;
    tmp$ret$2 = Math.log(tmp1_ln);
    var duration = tmp$ret$2 / this.d75_1 * 1000;
    var tmp = initialValue - initialVelocity / this.d75_1;
    var tmp_0 = initialVelocity / this.d75_1;
    var tmp$ret$3;
    // Inline function 'kotlin.math.exp' call
    var tmp2_exp = this.d75_1 * duration / 1000.0;
    tmp$ret$3 = Math.exp(tmp2_exp);
    return tmp + tmp_0 * tmp$ret$3;
  };
  FloatExponentialDecaySpec.$metadata$ = classMeta('FloatExponentialDecaySpec', [FloatDecayAnimationSpec]);
  function FloatDecayAnimationSpec() {
  }
  FloatDecayAnimationSpec.$metadata$ = interfaceMeta('FloatDecayAnimationSpec');
  function withInfiniteAnimationFrameNanos(onFrame, $cont) {
    var tmp = new $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation) {
    this.y75_1 = $onFrame;
    CoroutineImpl.call(this, resultContinuation);
  }
  withInfiniteAnimationFrameNanos$slambda.prototype.gh = function ($cont) {
    var tmp = this.a46($cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  withInfiniteAnimationFrameNanos$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = withFrameNanos(this.y75_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  withInfiniteAnimationFrameNanos$slambda.prototype.a46 = function (completion) {
    var i = new withInfiniteAnimationFrameNanos$slambda(this.y75_1, completion);
    return i;
  };
  withInfiniteAnimationFrameNanos$slambda.$metadata$ = classMeta('withInfiniteAnimationFrameNanos$slambda', undefined, undefined, undefined, [0], CoroutineImpl.prototype);
  function withInfiniteAnimationFrameNanos$slambda_0($onFrame, resultContinuation) {
    var i = new withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation);
    var l = function ($cont) {
      return i.gh($cont);
    };
    l.$arity = 0;
    return l;
  }
  function $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n75_1 = onFrame;
  }
  $withInfiniteAnimationFrameNanosCOROUTINE$0.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            var tmp_0 = this;
            tmp_0.o75_1 = this.o4().g5(Key_getInstance());
            if (this.o75_1 == null) {
              this.zf_1 = 2;
              suspendResult = withFrameNanos(this.n75_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 1;
              suspendResult = this.o75_1.z75(withInfiniteAnimationFrameNanos$slambda_0(this.n75_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.p75_1 = suspendResult;
            this.zf_1 = 3;
            continue $sm;
          case 2:
            this.p75_1 = suspendResult;
            this.zf_1 = 3;
            continue $sm;
          case 3:
            return this.p75_1;
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
  $withInfiniteAnimationFrameNanosCOROUTINE$0.$metadata$ = classMeta('$withInfiniteAnimationFrameNanosCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Mutator(priority, job) {
    this.a76_1 = priority;
    this.b76_1 = job;
  }
  Mutator.prototype.c76 = function (other) {
    return this.a76_1.v5(other.a76_1) >= 0;
  };
  Mutator.prototype.d76 = function () {
    return this.b76_1.dj(null, 1, null);
  };
  Mutator.$metadata$ = classMeta('Mutator');
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.c6y_1.wo();
      if (oldMutator == null ? true : mutator.c76(oldMutator)) {
        if ($this.c6y_1.g1r(oldMutator, mutator)) {
          var tmp0_safe_receiver = oldMutator;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.d76();
          }
          break $l$loop;
        }
      } else
        throw CancellationException_init_$Create$('Current mutation had a higher priority');
    }
  }
  function MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation) {
    this.m76_1 = $priority;
    this.n76_1 = this$0;
    this.o76_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  MutatorMutex$mutate$slambda.prototype.v76 = function ($this$coroutineScope, $cont) {
    var tmp = this.f1w($this$coroutineScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  MutatorMutex$mutate$slambda.prototype.jg = function (p1, $cont) {
    return this.v76((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  MutatorMutex$mutate$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 13;
            this.q76_1 = new Mutator(this.m76_1, ensureNotNull(this.p76_1.vh().g5(Key_getInstance_0())));
            tryMutateOrCancel(this.n76_1, this.q76_1);
            this.zf_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.s76_1 = this.n76_1.d6y_1;
            this.zf_1 = 2;
            suspendResult = this.s76_1.p16(null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.zf_1 = 3;
            continue $sm;
          case 3:
            this.zf_1 = 4;
            continue $sm;
          case 4:
            this.ag_1 = 12;
            this.zf_1 = 5;
            continue $sm;
          case 5:
            this.ag_1 = 11;
            this.zf_1 = 6;
            suspendResult = this.o76_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.u76_1 = suspendResult;
            this.zf_1 = 7;
            continue $sm;
          case 7:
            var tmp_1 = this.u76_1;
            this.n76_1.c6y_1.g1r(this.q76_1, null);
            ;
            this.t76_1 = tmp_1;
            this.ag_1 = 13;
            this.zf_1 = 8;
            var tmp_2 = this;
            continue $sm;
          case 8:
            var tmp_3 = this.t76_1;
            this.s76_1.r16(null);
            ;
            this.r76_1 = tmp_3;
            this.zf_1 = 10;
            continue $sm;
          case 9:
            this.s76_1.r16(null);
            ;
            if (false) {
              this.zf_1 = 1;
              continue $sm;
            }

            this.zf_1 = 10;
            continue $sm;
          case 10:
            return this.r76_1;
          case 11:
            this.ag_1 = 12;
            var t = this.cg_1;
            this.n76_1.c6y_1.g1r(this.q76_1, null);
            ;
            throw t;
          case 12:
            this.ag_1 = 13;
            var t_0 = this.cg_1;
            this.s76_1.r16(null);
            ;
            throw t_0;
          case 13:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 13) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  MutatorMutex$mutate$slambda.prototype.f1w = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutate$slambda(this.m76_1, this.n76_1, this.o76_1, completion);
    i.p76_1 = $this$coroutineScope;
    return i;
  };
  MutatorMutex$mutate$slambda.$metadata$ = classMeta('MutatorMutex$mutate$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function MutatorMutex$mutate$slambda_0($priority, this$0, $block, resultContinuation) {
    var i = new MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.v76($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex() {
    this.c6y_1 = new AtomicReference(null);
    var tmp = this;
    tmp.d6y_1 = Mutex$default(false, 1, null);
  }
  MutatorMutex.prototype.w76 = function (priority, block, $cont) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $cont);
  };
  MutatorMutex.prototype.e6y = function (priority, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      priority = MutatePriority_Default_getInstance();
    return this.w76(priority, block, $cont);
  };
  MutatorMutex.$metadata$ = classMeta('MutatorMutex');
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
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
    var r1 = roots.o_1.l73();
    var r2 = roots.p_1.l73();
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
    var r = roots.o_1.l73();
    var c1 = p0;
    var c2 = (v0 - r * c1) / roots.o_1.m73();
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
    var r = roots.o_1.l73();
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
  var UNSET;
  function init($this) {
    if ($this.q74_1) {
      return Unit_getInstance();
    }
    if ($this.o74_1 === UNSET) {
      throw IllegalStateException_init_$Create$('Error: Final position of the spring must be set before the animation starts');
    }
    var dampingRatioSquared = $this.u74_1 * $this.u74_1;
    if ($this.u74_1 > 1) {
      var tmp = $this;
      var tmp_0 = -$this.u74_1 * $this.p74_1;
      var tmp_1 = $this.p74_1;
      var tmp$ret$0;
      // Inline function 'kotlin.math.sqrt' call
      var tmp0_sqrt = dampingRatioSquared - 1;
      tmp$ret$0 = Math.sqrt(tmp0_sqrt);
      tmp.r74_1 = tmp_0 + tmp_1 * tmp$ret$0;
      var tmp_2 = $this;
      var tmp_3 = -$this.u74_1 * $this.p74_1;
      var tmp_4 = $this.p74_1;
      var tmp$ret$1;
      // Inline function 'kotlin.math.sqrt' call
      var tmp1_sqrt = dampingRatioSquared - 1;
      tmp$ret$1 = Math.sqrt(tmp1_sqrt);
      tmp_2.s74_1 = tmp_3 - tmp_4 * tmp$ret$1;
    } else if ($this.u74_1 >= 0 ? $this.u74_1 < 1 : false) {
      var tmp_5 = $this;
      var tmp_6 = $this.p74_1;
      var tmp$ret$2;
      // Inline function 'kotlin.math.sqrt' call
      var tmp2_sqrt = 1 - dampingRatioSquared;
      tmp$ret$2 = Math.sqrt(tmp2_sqrt);
      tmp_5.t74_1 = tmp_6 * tmp$ret$2;
    }
    $this.q74_1 = true;
  }
  function SpringSimulation(finalPosition) {
    this.o74_1 = finalPosition;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    Spring_getInstance();
    var tmp0_sqrt = 50.0;
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    tmp.p74_1 = tmp$ret$0;
    this.q74_1 = false;
    this.r74_1 = 0.0;
    this.s74_1 = 0.0;
    this.t74_1 = 0.0;
    var tmp_0 = this;
    Spring_getInstance();
    tmp_0.u74_1 = 1.0;
  }
  SpringSimulation.prototype.w74 = function (value) {
    if (this.h72() <= 0) {
      throw IllegalArgumentException_init_$Create$('Spring stiffness constant must be positive.');
    }
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = value;
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    tmp.p74_1 = tmp$ret$0;
    this.q74_1 = false;
  };
  SpringSimulation.prototype.h72 = function () {
    return this.p74_1 * this.p74_1;
  };
  SpringSimulation.prototype.v74 = function (value) {
    if (value < 0) {
      throw IllegalArgumentException_init_$Create$('Damping ratio must be non-negative');
    }
    this.u74_1 = value;
    this.q74_1 = false;
  };
  SpringSimulation.prototype.x74 = function (lastDisplacement, lastVelocity, timeElapsed) {
    init(this);
    var adjustedDisplacement = lastDisplacement - this.o74_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.div' call
    tmp$ret$0 = timeElapsed.e8() / 1000.0;
    var deltaT = tmp$ret$0;
    var displacement;
    var currentVelocity;
    if (this.u74_1 > 1) {
      var coeffA = adjustedDisplacement - (this.s74_1 * adjustedDisplacement - lastVelocity) / (this.s74_1 - this.r74_1);
      var coeffB = (this.s74_1 * adjustedDisplacement - lastVelocity) / (this.s74_1 - this.r74_1);
      var tmp$ret$1;
      // Inline function 'kotlin.math.exp' call
      var tmp0_exp = this.s74_1 * deltaT;
      tmp$ret$1 = Math.exp(tmp0_exp);
      var tmp = coeffA * tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.math.exp' call
      var tmp1_exp = this.r74_1 * deltaT;
      tmp$ret$2 = Math.exp(tmp1_exp);
      displacement = tmp + coeffB * tmp$ret$2;
      var tmp_0 = coeffA * this.s74_1;
      var tmp$ret$3;
      // Inline function 'kotlin.math.exp' call
      var tmp2_exp = this.s74_1 * deltaT;
      tmp$ret$3 = Math.exp(tmp2_exp);
      var tmp_1 = tmp_0 * tmp$ret$3;
      var tmp_2 = coeffB * this.r74_1;
      var tmp$ret$4;
      // Inline function 'kotlin.math.exp' call
      var tmp3_exp = this.r74_1 * deltaT;
      tmp$ret$4 = Math.exp(tmp3_exp);
      currentVelocity = tmp_1 + tmp_2 * tmp$ret$4;
    } else if (this.u74_1 === 1.0) {
      var coeffA_0 = adjustedDisplacement;
      var coeffB_0 = lastVelocity + this.p74_1 * adjustedDisplacement;
      var tmp_3 = coeffA_0 + coeffB_0 * deltaT;
      var tmp$ret$5;
      // Inline function 'kotlin.math.exp' call
      var tmp4_exp = -this.p74_1 * deltaT;
      tmp$ret$5 = Math.exp(tmp4_exp);
      displacement = tmp_3 * tmp$ret$5;
      var tmp_4 = coeffA_0 + coeffB_0 * deltaT;
      var tmp$ret$6;
      // Inline function 'kotlin.math.exp' call
      var tmp5_exp = -this.p74_1 * deltaT;
      tmp$ret$6 = Math.exp(tmp5_exp);
      var tmp_5 = tmp_4 * tmp$ret$6 * -this.p74_1;
      var tmp$ret$7;
      // Inline function 'kotlin.math.exp' call
      var tmp6_exp = -this.p74_1 * deltaT;
      tmp$ret$7 = Math.exp(tmp6_exp);
      currentVelocity = tmp_5 + coeffB_0 * tmp$ret$7;
    } else {
      var cosCoeff = adjustedDisplacement;
      var sinCoeff = 1 / this.t74_1 * (this.u74_1 * this.p74_1 * adjustedDisplacement + lastVelocity);
      var tmp$ret$8;
      // Inline function 'kotlin.math.exp' call
      var tmp7_exp = -this.u74_1 * this.p74_1 * deltaT;
      tmp$ret$8 = Math.exp(tmp7_exp);
      var tmp_6 = tmp$ret$8;
      var tmp$ret$9;
      // Inline function 'kotlin.math.cos' call
      var tmp8_cos = this.t74_1 * deltaT;
      tmp$ret$9 = Math.cos(tmp8_cos);
      var tmp_7 = cosCoeff * tmp$ret$9;
      var tmp$ret$10;
      // Inline function 'kotlin.math.sin' call
      var tmp9_sin = this.t74_1 * deltaT;
      tmp$ret$10 = Math.sin(tmp9_sin);
      displacement = tmp_6 * (tmp_7 + sinCoeff * tmp$ret$10);
      var tmp_8 = displacement * -this.p74_1 * this.u74_1;
      var tmp$ret$11;
      // Inline function 'kotlin.math.exp' call
      var tmp10_exp = -this.u74_1 * this.p74_1 * deltaT;
      tmp$ret$11 = Math.exp(tmp10_exp);
      var tmp_9 = tmp$ret$11;
      var tmp_10 = -this.t74_1 * cosCoeff;
      var tmp$ret$12;
      // Inline function 'kotlin.math.sin' call
      var tmp11_sin = this.t74_1 * deltaT;
      tmp$ret$12 = Math.sin(tmp11_sin);
      var tmp_11 = tmp_10 * tmp$ret$12;
      var tmp_12 = this.t74_1 * sinCoeff;
      var tmp$ret$13;
      // Inline function 'kotlin.math.cos' call
      var tmp12_cos = this.t74_1 * deltaT;
      tmp$ret$13 = Math.cos(tmp12_cos);
      currentVelocity = tmp_8 + tmp_9 * (tmp_11 + tmp_12 * tmp$ret$13);
    }
    var newValue = displacement + this.o74_1;
    var newVelocity = currentVelocity;
    return Motion(newValue, newVelocity);
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
    var tmp1_fromBits = tmp0_unpackFloat1.a7(32).b7();
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
    var tmp1_fromBits = tmp0_unpackFloat2.r7(new Long(-1, 0)).b7();
    tmp$ret$0 = floatFromBits(tmp1_fromBits);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function Motion(value, velocity) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(value));
    var v2 = toLong(toBits(velocity));
    tmp$ret$0 = v1.c7(32).a8(v2.r7(new Long(-1, 0)));
    return _Motion___init__impl__vk56rv(tmp$ret$0);
  }
  function animate(_this__u8e3s4, animation, startTimeNanos, block, $cont) {
    var tmp = new $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function updateState(_this__u8e3s4, state) {
    state.p11(_this__u8e3s4.i2());
    copyFrom(state.u6x_1, _this__u8e3s4.n6x_1);
    state.w6x_1 = _this__u8e3s4.p6x_1;
    state.v6x_1 = _this__u8e3s4.o6x_1;
    state.x6x_1 = _this__u8e3s4.m6z();
  }
  function get_durationScale(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.g5(Key_getInstance_1());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o77();
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
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function doAnimationFrameWithScale(_this__u8e3s4, frameTimeNanos, durationScale, anim, state, block) {
    var tmp;
    if (durationScale === 0.0) {
      tmp = anim.o71();
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = frameTimeNanos.p6(_this__u8e3s4.k6x_1);
      tmp$ret$0 = tmp0_div.tf() / durationScale;
      tmp = numberToLong(tmp$ret$0);
    }
    var playTimeNanos = tmp;
    doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block);
  }
  function doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block) {
    _this__u8e3s4.o6x_1 = frameTimeNanos;
    _this__u8e3s4.p11(anim.l71(playTimeNanos));
    _this__u8e3s4.n6x_1 = anim.p71(playTimeNanos);
    var isLastFrame = anim.n71(playTimeNanos);
    if (isLastFrame) {
      _this__u8e3s4.p6x_1 = _this__u8e3s4.o6x_1;
      _this__u8e3s4.r72(false);
    }
    updateState(_this__u8e3s4, state);
    block(_this__u8e3s4);
  }
  function animate$lambda$lambda($this_animate) {
    return function () {
      $this_animate.x6x_1 = false;
      return Unit_getInstance();
    };
  }
  function animate$lambda($lateInitScope, $initialValue, $animation, $initialVelocityVector, $durationScale, $this_animate, $block) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp = $animation.j6z();
      var tmp_0 = $animation.x6y();
      var tmp0_apply = new AnimationScope($initialValue, tmp, $initialVelocityVector, it, tmp_0, it, true, animate$lambda$lambda($this_animate));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>.<anonymous>' call
      doAnimationFrameWithScale(tmp0_apply, it, $durationScale, $animation, $this_animate, $block);
      tmp$ret$0 = tmp0_apply;
      $lateInitScope._v = tmp$ret$0;
      return Unit_getInstance();
    };
  }
  function animate$lambda_0($this_animate) {
    return function () {
      $this_animate.x6x_1 = false;
      return Unit_getInstance();
    };
  }
  function animate$lambda_1($lateInitScope, $durationScale, $animation, $this_animate, $block) {
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
      tmp$ret$0 = it.m6(toLong(tmp0_div));
      return $onFrame(tmp$ret$0);
    };
  }
  function $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f77_1 = _this__u8e3s4;
    this.g77_1 = animation;
    this.h77_1 = startTimeNanos;
    this.i77_1 = block;
  }
  $animateCOROUTINE$1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 7;
            this.j77_1 = this.g77_1.l71(new Long(0, 0));
            this.k77_1 = this.g77_1.p71(new Long(0, 0));
            this.l77_1 = {_v: null};
            this.ag_1 = 6;
            AnimationConstants_getInstance();
            if (this.h77_1.equals(new Long(0, -2147483648))) {
              var tmp_0 = this;
              tmp_0.m77_1 = get_durationScale(this.o4());
              this.zf_1 = 1;
              suspendResult = callWithFrameNanos(this.g77_1, animate$lambda(this.l77_1, this.j77_1, this.g77_1, this.k77_1, this.m77_1, this.f77_1, this.i77_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.g77_1.j6z();
              var tmp_2 = this.g77_1.x6y();
              var tmp0_apply = new AnimationScope(this.j77_1, tmp_1, this.k77_1, this.h77_1, tmp_2, this.h77_1, true, animate$lambda_0(this.f77_1));
              doAnimationFrameWithScale(tmp0_apply, this.h77_1, get_durationScale(this.o4()), this.g77_1, this.f77_1, this.i77_1);
              this.l77_1._v = tmp0_apply;
              this.zf_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.zf_1 = 2;
            continue $sm;
          case 2:
            this.zf_1 = 3;
            continue $sm;
          case 3:
            if (!ensureNotNull(this.l77_1._v).m6z()) {
              this.zf_1 = 5;
              continue $sm;
            }

            var tmp_3 = this;
            tmp_3.n77_1 = get_durationScale(this.o4());
            this.zf_1 = 4;
            suspendResult = callWithFrameNanos(this.g77_1, animate$lambda_1(this.l77_1, this.n77_1, this.g77_1, this.f77_1, this.i77_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.zf_1 = 3;
            continue $sm;
          case 5:
            this.ag_1 = 7;
            this.zf_1 = 8;
            continue $sm;
          case 6:
            this.ag_1 = 7;
            var tmp_4 = this.cg_1;
            if (tmp_4 instanceof CancellationException) {
              var e = this.cg_1;
              var tmp0_safe_receiver = this.l77_1._v;
              if (tmp0_safe_receiver == null) {
              } else {
                tmp0_safe_receiver.r72(false);
              }
              var tmp1_safe_receiver = this.l77_1._v;
              if (equals(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.o6x_1, this.f77_1.v6x_1)) {
                this.f77_1.x6x_1 = false;
              }
              throw e;
            } else {
              throw this.cg_1;
            }

            break;
          case 7:
            throw this.cg_1;
          case 8:
            this.ag_1 = 7;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.ag_1 === 7) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  $animateCOROUTINE$1.$metadata$ = classMeta('$animateCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x77_1 = _this__u8e3s4;
    this.y77_1 = onFrame;
  }
  $callWithFrameNanosCOROUTINE$2.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            if (this.x77_1.k71()) {
              this.zf_1 = 2;
              suspendResult = withInfiniteAnimationFrameNanos(this.y77_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 1;
              suspendResult = withFrameNanos(callWithFrameNanos$lambda(this.y77_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.z77_1 = suspendResult;
            this.zf_1 = 3;
            continue $sm;
          case 2:
            this.z77_1 = suspendResult;
            this.zf_1 = 3;
            continue $sm;
          case 3:
            return this.z77_1;
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
  $callWithFrameNanosCOROUTINE$2.$metadata$ = classMeta('$callWithFrameNanosCOROUTINE$2', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _set_targetValue__aqsk0r_0($this, _set____db54di) {
    var tmp0_setValue = targetValue$factory_1();
    return $this.c78_1.p11(_set____db54di);
  }
  function _get_targetValue__jjlmb5($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = targetValue$factory_2();
    tmp$ret$0 = $this.c78_1.i2();
    return tmp$ret$0;
  }
  function _set_animationSpec__7qdru($this, _set____db54di) {
    var tmp0_setValue = animationSpec$factory();
    return $this.d78_1.p11(_set____db54di);
  }
  function _set_animation__pan2kh($this, _set____db54di) {
    var tmp0_setValue = animation$factory();
    return $this.e78_1.p11(_set____db54di);
  }
  function _set_offsetTimeNanos__i9wy86($this, _set____db54di) {
    var tmp0_setValue = offsetTimeNanos$factory();
    return $this.g78_1.p11(_set____db54di);
  }
  function _get_offsetTimeNanos__sdn5qq($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = offsetTimeNanos$factory_0();
    tmp$ret$0 = $this.g78_1.i2();
    return tmp$ret$0;
  }
  function _set_needsReset__wyw9nf($this, _set____db54di) {
    var tmp0_setValue = needsReset$factory();
    return $this.h78_1.p11(_set____db54di);
  }
  function _get_needsReset__mzz76h($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = needsReset$factory_0();
    tmp$ret$0 = $this.h78_1.i2();
    return tmp$ret$0;
  }
  function updateAnimation($this, initialValue, isInterrupted) {
    var tmp;
    if (isInterrupted) {
      var tmp_0;
      var tmp_1 = $this.m78();
      if (tmp_1 instanceof SpringSpec) {
        tmp_0 = $this.m78();
      } else {
        tmp_0 = $this.k78_1;
      }
      tmp = tmp_0;
    } else {
      tmp = $this.m78();
    }
    var spec = tmp;
    _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$(spec, $this.a78_1, initialValue, _get_targetValue__jjlmb5($this), $this.j78_1));
    onChildAnimationUpdated($this.l78_1);
  }
  function updateAnimation$default($this, initialValue, isInterrupted, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      initialValue = $this.i2();
    if (!(($mask0 & 4) === 0))
      isInterrupted = false;
    return updateAnimation($this, initialValue, isInterrupted);
  }
  function Transition$animateTo$composable$slambda$lambda(this$0, $durationScale) {
    return function (it) {
      var tmp;
      if (!this$0.a79()) {
        var tmp$ret$0;
        // Inline function 'kotlin.Long.div' call
        var tmp0_div = 1;
        tmp$ret$0 = it.m6(toLong(tmp0_div));
        this$0.z78(tmp$ret$0, $durationScale);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Transition_init_$Init$(initialState, label, $this) {
    Transition.call($this, new MutableTransitionState(initialState), label);
    return $this;
  }
  function Transition_init_$Create$(initialState, label) {
    return Transition_init_$Init$(initialState, label, Object.create(Transition.prototype));
  }
  function _set_segment__77iylu($this, _set____db54di) {
    var tmp0_setValue = segment$factory();
    return $this.q78_1.p11(_set____db54di);
  }
  function _set_startTimeNanos__1jy4fb($this, _set____db54di) {
    var tmp0_setValue = startTimeNanos$factory();
    return $this.s78_1.p11(_set____db54di);
  }
  function _get_startTimeNanos__r31kgr($this) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = startTimeNanos$factory_0();
    tmp$ret$0 = $this.s78_1.i2();
    return tmp$ret$0;
  }
  function onChildAnimationUpdated($this) {
    $this.b79(true);
    if ($this.a79()) {
      var maxDurationNanos = new Long(0, 0);
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = $this.u78_1;
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.animation.core.Transition.onChildAnimationUpdated.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = maxDurationNanos;
        var tmp1_max = element.o71();
        tmp$ret$0 = tmp0_max.h1(tmp1_max) >= 0 ? tmp0_max : tmp1_max;
        maxDurationNanos = tmp$ret$0;
        element.c79($this.x78_1);
      }
      $this.b79(false);
    }
  }
  function TransitionAnimationState($outer, initialValue, initialVelocityVector, typeConverter, label) {
    this.l78_1 = $outer;
    this.a78_1 = typeConverter;
    this.b78_1 = label;
    var tmp = this;
    tmp.c78_1 = mutableStateOf$default(initialValue, null, 2, null);
    var tmp_0 = this;
    var tmp_1 = spring$default(0.0, 0.0, null, 7, null);
    tmp_0.d78_1 = mutableStateOf$default(tmp_1, null, 2, null);
    var tmp_2 = this;
    var tmp_3 = TargetBasedAnimation_init_$Create$(this.m78(), this.a78_1, initialValue, _get_targetValue__jjlmb5(this), initialVelocityVector);
    tmp_2.e78_1 = mutableStateOf$default(tmp_3, null, 2, null);
    var tmp_4 = this;
    tmp_4.f78_1 = mutableStateOf$default(true, null, 2, null);
    var tmp_5 = this;
    var tmp_6 = new Long(0, 0);
    tmp_5.g78_1 = mutableStateOf$default(tmp_6, null, 2, null);
    var tmp_7 = this;
    tmp_7.h78_1 = mutableStateOf$default(false, null, 2, null);
    var tmp_8 = this;
    tmp_8.i78_1 = mutableStateOf$default(initialValue, null, 2, null);
    this.j78_1 = initialVelocityVector;
    var tmp0_safe_receiver = get_visibilityThresholdMap().v(this.a78_1);
    var tmp_9;
    if (tmp0_safe_receiver == null) {
      tmp_9 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.core.TransitionAnimationState.<anonymous>' call
      var vector = this.a78_1.a6y()(initialValue);
      var inductionVariable = 0;
      var last = vector.f();
      if (inductionVariable < last)
        do {
          var id = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          vector.r5d(id, tmp0_safe_receiver);
        }
         while (inductionVariable < last);
      tmp$ret$0 = this.a78_1.f6y()(vector);
      tmp$ret$1 = tmp$ret$0;
      tmp_9 = tmp$ret$1;
    }
    var visibilityThreshold = tmp_9;
    var tmp_10 = this;
    tmp_10.k78_1 = spring$default(0.0, 0.0, visibilityThreshold, 3, null);
  }
  TransitionAnimationState.prototype.j6z = function () {
    return this.a78_1;
  };
  TransitionAnimationState.prototype.m78 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = animationSpec$factory_0();
    tmp$ret$0 = this.d78_1.i2();
    return tmp$ret$0;
  };
  TransitionAnimationState.prototype.d79 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = animation$factory_0();
    tmp$ret$0 = this.e78_1.i2();
    return tmp$ret$0;
  };
  TransitionAnimationState.prototype.e79 = function (_set____db54di) {
    var tmp0_setValue = isFinished$factory();
    return this.f78_1.p11(_set____db54di);
  };
  TransitionAnimationState.prototype.f79 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isFinished$factory_0();
    tmp$ret$0 = this.f78_1.i2();
    return tmp$ret$0;
  };
  TransitionAnimationState.prototype.p11 = function (_set____db54di) {
    var tmp0_setValue = value$factory_3();
    return this.i78_1.p11(_set____db54di);
  };
  TransitionAnimationState.prototype.i2 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = value$factory_4();
    tmp$ret$0 = this.i78_1.i2();
    return tmp$ret$0;
  };
  TransitionAnimationState.prototype.o71 = function () {
    return this.d79().f71_1;
  };
  TransitionAnimationState.prototype.g79 = function (playTimeNanos, durationScale) {
    var tmp;
    if (durationScale > 0.0) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.div' call
      var tmp0_div = playTimeNanos.p6(_get_offsetTimeNanos__sdn5qq(this));
      tmp$ret$0 = tmp0_div.tf() / durationScale;
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
      tmp = this.d79().f71_1;
    }
    var playTime = tmp;
    this.p11(this.d79().l71(playTime));
    this.j78_1 = this.d79().p71(playTime);
    if (this.d79().n71(playTime)) {
      this.e79(true);
      _set_offsetTimeNanos__i9wy86(this, new Long(0, 0));
    }
  };
  TransitionAnimationState.prototype.c79 = function (playTimeNanos) {
    this.p11(this.d79().l71(playTimeNanos));
    this.j78_1 = this.d79().p71(playTimeNanos);
  };
  TransitionAnimationState.prototype.h79 = function () {
    _set_needsReset__wyw9nf(this, true);
  };
  TransitionAnimationState.prototype.i79 = function (targetValue, animationSpec) {
    if (!equals(_get_targetValue__jjlmb5(this), targetValue) ? true : _get_needsReset__mzz76h(this)) {
      _set_targetValue__aqsk0r_0(this, targetValue);
      _set_animationSpec__7qdru(this, animationSpec);
      updateAnimation$default(this, null, !this.f79(), 2, null);
      this.e79(false);
      _set_offsetTimeNanos__i9wy86(this, this.l78_1.j79());
      _set_needsReset__wyw9nf(this, false);
    }
  };
  TransitionAnimationState.prototype.k79 = function (initialValue, targetValue, animationSpec) {
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    if (equals(this.d79().a71_1, initialValue) ? equals(this.d79().b71_1, targetValue) : false) {
      return Unit_getInstance();
    }
    updateAnimation$default(this, initialValue, false, 4, null);
  };
  TransitionAnimationState.$metadata$ = classMeta('TransitionAnimationState', [State]);
  function SegmentImpl(initialState, targetState) {
    this.l79_1 = initialState;
    this.m79_1 = targetState;
  }
  SegmentImpl.prototype.n79 = function () {
    return this.l79_1;
  };
  SegmentImpl.prototype.o79 = function () {
    return this.m79_1;
  };
  SegmentImpl.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Segment) : false) {
      tmp_0 = equals(this.l79_1, other.n79());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.m79_1, other.o79());
    } else {
      tmp = false;
    }
    return tmp;
  };
  SegmentImpl.prototype.hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.l79_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    var tmp$ret$1;
    // Inline function 'kotlin.hashCode' call
    var tmp1_hashCode = this.m79_1;
    var tmp0_safe_receiver_0 = tmp1_hashCode;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    return tmp + tmp$ret$1 | 0;
  };
  SegmentImpl.$metadata$ = classMeta('SegmentImpl', [Segment]);
  function Segment() {
  }
  Segment.$metadata$ = interfaceMeta('Segment');
  function updateTarget$composable$lambda($tmp0_rcvr, $targetState, $$changed, $composer, $force) {
    return $tmp0_rcvr.p79($targetState, $composer, $$changed | 1);
  }
  function animateTo$composable$lambda($tmp0_rcvr, $targetState, $$changed, $composer, $force) {
    return $tmp0_rcvr.q79($targetState, $composer, $$changed | 1);
  }
  function Transition$totalDurationNanos$delegate$lambda(this$0) {
    return function () {
      var maxDurationNanos = new Long(0, 0);
      var tmp0_forEach = this$0.u78_1;
      var tmp0_iterator = tmp0_forEach.c();
      while (tmp0_iterator.d()) {
        var element = tmp0_iterator.e();
        // Inline function 'androidx.compose.animation.core.Transition.totalDurationNanos$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.math.max' call
        var tmp0_max = maxDurationNanos;
        var tmp1_max = element.o71();
        tmp$ret$0 = tmp0_max.h1(tmp1_max) >= 0 ? tmp0_max : tmp1_max;
        maxDurationNanos = tmp$ret$0;
      }
      var tmp1_forEach = this$0.v78_1;
      var tmp0_iterator_0 = tmp1_forEach.c();
      while (tmp0_iterator_0.d()) {
        var element_0 = tmp0_iterator_0.e();
        // Inline function 'androidx.compose.animation.core.Transition.totalDurationNanos$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.math.max' call
        var tmp0_max_0 = maxDurationNanos;
        var tmp1_max_0 = element_0.r79();
        tmp$ret$1 = tmp0_max_0.h1(tmp1_max_0) >= 0 ? tmp0_max_0 : tmp1_max_0;
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
    this.a7a_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  Transition$animateTo$composable$slambda.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  Transition$animateTo$composable$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Transition$animateTo$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            this.zf_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.zf_1 = 4;
              continue $sm;
            }

            this.c7a_1 = get_durationScale(this.b7a_1.vh());
            this.zf_1 = 2;
            suspendResult = withFrameNanos(Transition$animateTo$composable$slambda$lambda(this.a7a_1, this.c7a_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.zf_1 = 1;
            continue $sm;
          case 3:
            throw this.cg_1;
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.ag_1 === 3) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  Transition$animateTo$composable$slambda.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new Transition$animateTo$composable$slambda(this.a7a_1, completion);
    i.b7a_1 = $this$LaunchedEffect;
    return i;
  };
  Transition$animateTo$composable$slambda.$metadata$ = classMeta('Transition$animateTo$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Transition$animateTo$composable$slambda_0(this$0, resultContinuation) {
    var i = new Transition$animateTo$composable$slambda(this$0, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
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
    this.n78_1 = transitionState;
    this.o78_1 = label;
    var tmp = this;
    var tmp_0 = this.d7a();
    tmp.p78_1 = mutableStateOf$default(tmp_0, null, 2, null);
    var tmp_1 = this;
    var tmp_2 = new SegmentImpl(this.d7a(), this.d7a());
    tmp_1.q78_1 = mutableStateOf$default(tmp_2, null, 2, null);
    var tmp_3 = this;
    var tmp_4 = new Long(0, 0);
    tmp_3.r78_1 = mutableStateOf$default(tmp_4, null, 2, null);
    var tmp_5 = this;
    AnimationConstants_getInstance();
    var tmp_6 = new Long(0, -2147483648);
    tmp_5.s78_1 = mutableStateOf$default(tmp_6, null, 2, null);
    var tmp_7 = this;
    tmp_7.t78_1 = mutableStateOf$default(true, null, 2, null);
    this.u78_1 = mutableStateListOf();
    this.v78_1 = mutableStateListOf();
    var tmp_8 = this;
    tmp_8.w78_1 = mutableStateOf$default(false, null, 2, null);
    this.x78_1 = new Long(0, 0);
    var tmp_9 = this;
    tmp_9.y78_1 = derivedStateOf(Transition$totalDurationNanos$delegate$lambda(this));
  }
  Transition.prototype.e7a = function (value) {
    this.n78_1.e7a(value);
  };
  Transition.prototype.d7a = function () {
    return this.n78_1.d7a();
  };
  Transition.prototype.j7a = function (_set____db54di) {
    var tmp0_setValue = targetState$factory();
    return this.p78_1.p11(_set____db54di);
  };
  Transition.prototype.o79 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = targetState$factory_0();
    tmp$ret$0 = this.p78_1.i2();
    return tmp$ret$0;
  };
  Transition.prototype.k7a = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = segment$factory_0();
    tmp$ret$0 = this.q78_1.i2();
    return tmp$ret$0;
  };
  Transition.prototype.m6z = function () {
    var tmp = _get_startTimeNanos__r31kgr(this);
    AnimationConstants_getInstance();
    return !tmp.equals(new Long(0, -2147483648));
  };
  Transition.prototype.l7a = function (_set____db54di) {
    var tmp0_setValue = playTimeNanos$factory();
    return this.r78_1.p11(_set____db54di);
  };
  Transition.prototype.j79 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = playTimeNanos$factory_0();
    tmp$ret$0 = this.r78_1.i2();
    return tmp$ret$0;
  };
  Transition.prototype.b79 = function (_set____db54di) {
    var tmp0_setValue = updateChildrenNeeded$factory();
    return this.t78_1.p11(_set____db54di);
  };
  Transition.prototype.m7a = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = updateChildrenNeeded$factory_0();
    tmp$ret$0 = this.t78_1.i2();
    return tmp$ret$0;
  };
  Transition.prototype.n7a = function (_set____db54di) {
    var tmp0_setValue = isSeeking$factory();
    return this.w78_1.p11(_set____db54di);
  };
  Transition.prototype.a79 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isSeeking$factory_0();
    tmp$ret$0 = this.w78_1.i2();
    return tmp$ret$0;
  };
  Transition.prototype.o7a = function () {
    return this.x78_1;
  };
  Transition.prototype.r79 = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = totalDurationNanos$factory();
    tmp$ret$0 = this.y78_1.i2();
    return tmp$ret$0;
  };
  Transition.prototype.z78 = function (frameTimeNanos, durationScale) {
    var tmp = _get_startTimeNanos__r31kgr(this);
    AnimationConstants_getInstance();
    if (tmp.equals(new Long(0, -2147483648))) {
      this.p7a(frameTimeNanos);
    }
    this.b79(false);
    this.l7a(frameTimeNanos.p6(_get_startTimeNanos__r31kgr(this)));
    var allFinished = true;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.u78_1;
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
      if (!element.f79()) {
        element.g79(this.j79(), durationScale);
      }
      if (!element.f79()) {
        allFinished = false;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.v78_1;
    var tmp0_iterator_0 = tmp1_forEach.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
      if (!equals(element_0.o79(), element_0.d7a())) {
        element_0.z78(this.j79(), durationScale);
      }
      if (!equals(element_0.o79(), element_0.d7a())) {
        allFinished = false;
      }
    }
    if (allFinished) {
      this.q7a();
    }
  };
  Transition.prototype.p7a = function (frameTimeNanos) {
    _set_startTimeNanos__1jy4fb(this, frameTimeNanos);
    this.n78_1.r72(true);
  };
  Transition.prototype.q7a = function () {
    AnimationConstants_getInstance();
    _set_startTimeNanos__1jy4fb(this, new Long(0, -2147483648));
    this.e7a(this.o79());
    this.l7a(new Long(0, 0));
    this.n78_1.r72(false);
  };
  Transition.prototype.r7a = function (animation) {
    return this.u78_1.t1p(animation);
  };
  Transition.prototype.s7a = function (animation) {
    this.u78_1.v20(animation);
  };
  Transition.prototype.p79 = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(1657853547);
    sourceInformation($composer_0, 'C(updateTarget$composable):Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(targetState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(1657853547, $changed, -1, 'androidx.compose.animation.core.Transition.updateTarget$composable (Transition.kt:399)');
      }
      if (!this.a79()) {
        if (!equals(this.o79(), targetState)) {
          _set_segment__77iylu(this, new SegmentImpl(this.o79(), targetState));
          this.e7a(this.o79());
          this.j7a(targetState);
          if (!this.m6z()) {
            this.b79(true);
          }
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_forEach = this.u78_1;
          var tmp0_iterator = tmp0_forEach.c();
          while (tmp0_iterator.d()) {
            var element = tmp0_iterator.e();
            // Inline function 'androidx.compose.animation.core.Transition.updateTarget$composable.<anonymous>' call
            element.h79();
          }
        }
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.a1o();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.g1p(Transition$updateTarget$composable$lambda$ref(tmp0_rcvr, targetState, $changed));
    }
  };
  Transition.prototype.q79 = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(254343587);
    sourceInformation($composer_0, 'C(animateTo$composable)426@16622L25,430@16892L655,430@16871L676:Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(targetState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(this) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(254343587, $dirty, -1, 'androidx.compose.animation.core.Transition.animateTo$composable (Transition.kt:424)');
      }
      if (!this.a79()) {
        this.p79(targetState, $composer_0, 14 & $dirty | 112 & $dirty);
        if ((!equals(targetState, this.d7a()) ? true : this.m6z()) ? true : this.m7a()) {
          var tmp$ret$4;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp0_remember$composable = $composer_0;
          var tmp1_remember$composable = 14 & $dirty >> 3;
          var $composer_1 = tmp0_remember$composable;
          $composer_1.y1a(-838505973);
          sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
          var tmp$ret$3;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache = $composer_1;
          var tmp2_cache = $composer_1.z1a(this);
          var tmp$ret$2;
          // Inline function 'kotlin.let' call
          var tmp0_let = tmp1_cache.a1b();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$1;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp;
          if (tmp2_cache ? true : tmp0_let === Companion_getInstance().c1b_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.animation.core.Transition.animateTo$composable.<anonymous>' call
            tmp$ret$0 = Transition$animateTo$composable$slambda_0(this, null);
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
          LaunchedEffect$composable(this, tmp$ret$4, $composer_0, 14 & $dirty >> 3);
        }
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_rcvr = this;
    var tmp1_safe_receiver = $composer_0.a1o();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.g1p(Transition$animateTo$composable$lambda$ref(tmp0_rcvr, targetState, $changed));
    }
  };
  Transition.$metadata$ = classMeta('Transition');
  function updateTransition$composable(targetState, label, $composer, $changed, $default) {
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0.y1a(-1999981197);
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
    $composer_1.y1a(547886695);
    sourceInformation($composer_1, 'C(remember$composable):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>' call
      tmp$ret$0 = Transition_init_$Create$(targetState, label_0._v);
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
    var transition = tmp$ret$4;
    transition.q79(targetState, $composer_0, 8 & $changed | 14 & $changed);
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp1_remember$composable = $composer_0;
    var $composer_2 = tmp1_remember$composable;
    $composer_2.y1a(-838505973);
    sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_2;
    var tmp2_cache = $composer_2.z1a(transition);
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = tmp1_cache_0.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance().c1b_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>' call
      tmp$ret$5 = updateTransition$composable$lambda(transition);
      var value_0 = tmp$ret$5;
      tmp1_cache_0.b1b(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    tmp$ret$6 = tmp_1;
    tmp$ret$7 = tmp$ret$6;
    var tmp_2 = tmp$ret$7;
    tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    var tmp0_0 = tmp$ret$8;
    $composer_2.d1b();
    tmp$ret$9 = tmp0_0;
    DisposableEffect$composable(transition, tmp$ret$9, $composer_0, 0);
    var tmp0_1 = transition;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_1;
  }
  function animateFloat$composable(_this__u8e3s4, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    $composer_0.y1a(1610198356);
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
    $composer_1.y1a(-1940744337);
    sourceInformation($composer_1, 'C(animateValue$composable)P(3,2)856@34079L32,857@34134L31,858@34190L23,860@34226L89:Transition.kt#pdpnli');
    if (!(0 === 0)) {
      transitionSpec_1 = animateFloat$composable$lambda_0;
    }
    if (!(0 === 0))
      label_1 = 'ValueAnimation';
    var initialValue = targetValueByState(_this__u8e3s4.d7a(), $composer_1, 112 & tmp4_animateValue$composable >> 9);
    var targetValue = targetValueByState(_this__u8e3s4.o79(), $composer_1, 112 & tmp4_animateValue$composable >> 9);
    var animationSpec = transitionSpec_1(_this__u8e3s4.k7a(), $composer_1, 112 & tmp4_animateValue$composable >> 3);
    var tmp0 = createTransitionAnimation$composable(_this__u8e3s4, initialValue, targetValue, animationSpec, tmp0_animateValue$composable, label_1, $composer_1, 14 & tmp4_animateValue$composable | 57344 & tmp4_animateValue$composable << 9 | 458752 & tmp4_animateValue$composable << 6);
    $composer_1.d1b();
    tmp$ret$0 = tmp0;
    var tmp0_0 = tmp$ret$0;
    $composer_0.d1b();
    return tmp0_0;
  }
  function MutableTransitionState(initialState) {
    var tmp = this;
    tmp.f7a_1 = mutableStateOf$default(initialState, null, 2, null);
    var tmp_0 = this;
    tmp_0.g7a_1 = mutableStateOf$default(initialState, null, 2, null);
    var tmp_1 = this;
    tmp_1.h7a_1 = mutableStateOf$default(false, null, 2, null);
    this.i7a_1 = 0;
  }
  MutableTransitionState.prototype.e7a = function (_set____db54di) {
    var tmp0_setValue = currentState$factory();
    return this.f7a_1.p11(_set____db54di);
  };
  MutableTransitionState.prototype.d7a = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = currentState$factory_0();
    tmp$ret$0 = this.f7a_1.i2();
    return tmp$ret$0;
  };
  MutableTransitionState.prototype.r72 = function (_set____db54di) {
    var tmp0_setValue = isRunning$factory_3();
    return this.h7a_1.p11(_set____db54di);
  };
  MutableTransitionState.prototype.m6z = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = isRunning$factory_4();
    tmp$ret$0 = this.h7a_1.i2();
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
    $composer_0.y1a(-1940744337);
    sourceInformation($composer_0, 'C(animateValue$composable)P(3,2)856@34079L32,857@34134L31,858@34190L23,860@34226L89:Transition.kt#pdpnli');
    if (!(($default & 2) === 0)) {
      transitionSpec_0 = animateValue$composable$lambda;
    }
    if (!(($default & 4) === 0))
      label_0 = 'ValueAnimation';
    var initialValue = targetValueByState(_this__u8e3s4.d7a(), $composer_0, 112 & $changed >> 9);
    var targetValue = targetValueByState(_this__u8e3s4.o79(), $composer_0, 112 & $changed >> 9);
    var animationSpec = transitionSpec_0(_this__u8e3s4.k7a(), $composer_0, 112 & $changed >> 3);
    var tmp0 = createTransitionAnimation$composable(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label_0, $composer_0, 14 & $changed | 57344 & $changed << 9 | 458752 & $changed << 6);
    $composer_0.d1b();
    return tmp0;
  }
  function createTransitionAnimation$composable(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(1918946450);
    sourceInformation($composer_0, 'C(createTransitionAnimation$composable)P(1,3!1,4)872@34615L499,895@35498L128,895@35460L166:Transition.kt#pdpnli');
    if (isTraceInProgress()) {
      traceEventStart(1918946450, $changed, -1, 'androidx.compose.animation.core.createTransitionAnimation$composable (Transition.kt:865)');
    }
    var tmp$ret$4;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = $composer_0;
    var tmp1_remember$composable = 14 & $changed;
    var $composer_1 = tmp0_remember$composable;
    $composer_1.y1a(-838505973);
    sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.z1a(_this__u8e3s4);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.animation.core.createTransitionAnimation$composable.<anonymous>' call
      tmp$ret$0 = new TransitionAnimationState(_this__u8e3s4, initialValue, createZeroVectorFrom(typeConverter, targetValue), typeConverter, label);
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
    var transitionAnimation = tmp$ret$4;
    if (_this__u8e3s4.a79()) {
      transitionAnimation.k79(initialValue, targetValue, animationSpec);
    } else {
      transitionAnimation.i79(targetValue, animationSpec);
    }
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp2_remember$composable = $composer_0;
    var tmp3_remember$composable = 14 & $changed;
    var $composer_2 = tmp2_remember$composable;
    $composer_2.y1a(-1124426577);
    sourceInformation($composer_2, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_2;
    var tmp2_cache_0 = !!($composer_2.z1a(_this__u8e3s4) | $composer_2.z1a(transitionAnimation));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = tmp1_cache_0.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance().c1b_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.animation.core.createTransitionAnimation$composable.<anonymous>' call
      tmp$ret$5 = createTransitionAnimation$composable$lambda(_this__u8e3s4, transitionAnimation);
      var value_0 = tmp$ret$5;
      tmp1_cache_0.b1b(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    tmp$ret$6 = tmp_1;
    tmp$ret$7 = tmp$ret$6;
    var tmp_2 = tmp$ret$7;
    tmp$ret$8 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    var tmp0_0 = tmp$ret$8;
    $composer_2.d1b();
    tmp$ret$9 = tmp0_0;
    DisposableEffect$composable(transitionAnimation, tmp$ret$9, $composer_0, 0);
    var tmp0_1 = transitionAnimation;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_1;
  }
  function _no_name_provided__qut3iv($transition) {
    this.t7a_1 = $transition;
  }
  _no_name_provided__qut3iv.prototype.vk = function () {
    // Inline function 'androidx.compose.animation.core.updateTransition$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.t7a_1.q7a();
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
    $composer_0.y1a(-522164544);
    if (isTraceInProgress()) {
      traceEventStart(-522164544, $changed, -1, 'androidx.compose.animation.core.animateFloat$composable.<anonymous> (Transition.kt:934)');
    }
    var tmp0 = spring$default(0.0, 0.0, null, 7, null);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0;
  }
  function animateFloat$composable$lambda_0($this$null, $composer, $changed) {
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
  function animateValue$composable$lambda($this$null, $composer, $changed) {
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
  function _no_name_provided__qut3iv_0($this_createTransitionAnimation$composable, $transitionAnimation) {
    this.u7a_1 = $this_createTransitionAnimation$composable;
    this.v7a_1 = $transitionAnimation;
  }
  _no_name_provided__qut3iv_0.prototype.vk = function () {
    // Inline function 'androidx.compose.animation.core.createTransitionAnimation$composable.<anonymous>.<anonymous>.<anonymous>' call
    this.u7a_1.s7a(this.v7a_1);
  };
  _no_name_provided__qut3iv_0.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function createTransitionAnimation$composable$lambda($this_createTransitionAnimation$composable, $transitionAnimation) {
    return function ($this$DisposableEffect) {
      $this_createTransitionAnimation$composable.r7a($transitionAnimation);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_0($this_createTransitionAnimation$composable, $transitionAnimation);
      return tmp$ret$0;
    };
  }
  function targetState$factory() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.o79();
    }, function (receiver, value) {
      return receiver.j7a(value);
    });
  }
  function targetState$factory_0() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.o79();
    }, function (receiver, value) {
      return receiver.j7a(value);
    });
  }
  function segment$factory() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.k7a();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function segment$factory_0() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.k7a();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function playTimeNanos$factory() {
    return getPropertyCallableRef('playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.j79();
    }, function (receiver, value) {
      return receiver.l7a(value);
    });
  }
  function playTimeNanos$factory_0() {
    return getPropertyCallableRef('playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.j79();
    }, function (receiver, value) {
      return receiver.l7a(value);
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
      return receiver.m7a();
    }, function (receiver, value) {
      return receiver.b79(value);
    });
  }
  function updateChildrenNeeded$factory_0() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return receiver.m7a();
    }, function (receiver, value) {
      return receiver.b79(value);
    });
  }
  function isSeeking$factory() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.a79();
    }, function (receiver, value) {
      return receiver.n7a(value);
    });
  }
  function isSeeking$factory_0() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.a79();
    }, function (receiver, value) {
      return receiver.n7a(value);
    });
  }
  function totalDurationNanos$factory() {
    return getPropertyCallableRef('totalDurationNanos', 1, KProperty1, function (receiver) {
      return receiver.r79();
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
      return receiver.m78();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animationSpec$factory_0() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.m78();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animation$factory() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.d79();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function animation$factory_0() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.d79();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function isFinished$factory() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.f79();
    }, function (receiver, value) {
      return receiver.e79(value);
    });
  }
  function isFinished$factory_0() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.f79();
    }, function (receiver, value) {
      return receiver.e79(value);
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
      return receiver.i2();
    }, function (receiver, value) {
      return receiver.p11(value);
    });
  }
  function value$factory_4() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.i2();
    }, function (receiver, value) {
      return receiver.p11(value);
    });
  }
  function currentState$factory() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.d7a();
    }, function (receiver, value) {
      return receiver.e7a(value);
    });
  }
  function currentState$factory_0() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.d7a();
    }, function (receiver, value) {
      return receiver.e7a(value);
    });
  }
  function isRunning$factory_3() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.m6z();
    }, function (receiver, value) {
      return receiver.r72(value);
    });
  }
  function isRunning$factory_4() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.m6z();
    }, function (receiver, value) {
      return receiver.r72(value);
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
    this.w7a_1 = convertToVector;
    this.x7a_1 = convertFromVector;
  }
  TwoWayConverterImpl.prototype.a6y = function () {
    return this.w7a_1;
  };
  TwoWayConverterImpl.prototype.f6y = function () {
    return this.x7a_1;
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
    return it.u72_1;
  }
  function IntToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector1D(it);
  }
  function IntToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return numberToInt(it.u72_1);
  }
  function DpToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector1D(_Dp___get_value__impl__geb1vb(it.f2l_1));
  }
  function DpToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new Dp(_Dp___init__impl__ms3zkb(it.u72_1));
  }
  function DpOffsetToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector2D(_Dp___get_value__impl__geb1vb(_DpOffset___get_x__impl__uauqb5(it.k2l_1)), _Dp___get_value__impl__geb1vb(_DpOffset___get_y__impl__1h898y(it.k2l_1)));
  }
  function DpOffsetToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp0__get_dp__p4e4fv = it.y72_1;
    tmp$ret$0 = _Dp___init__impl__ms3zkb(tmp0__get_dp__p4e4fv);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp1__get_dp__sde38c = it.z72_1;
    tmp$ret$1 = _Dp___init__impl__ms3zkb(tmp1__get_dp__sde38c);
    return new DpOffset_0(DpOffset(tmp, tmp$ret$1));
  }
  function SizeToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector2D(_Size___get_width__impl__58y75t(it.q2j_1), _Size___get_height__impl__a04p02(it.q2j_1));
  }
  function SizeToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new Size(Size_0(it.y72_1, it.z72_1));
  }
  function OffsetToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector2D(_Offset___get_x__impl__xvi35n(it.s2i_1), _Offset___get_y__impl__8bzhra(it.s2i_1));
  }
  function OffsetToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new Offset(Offset_0(it.y72_1, it.z72_1));
  }
  function IntOffsetToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector2D(_IntOffset___get_x__impl__qiqr5o(it.m2l_1), _IntOffset___get_y__impl__2avpwj(it.m2l_1));
  }
  function IntOffsetToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    var tmp$ret$0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = it.y72_1;
    tmp$ret$0 = roundToInt(tmp0_roundToInt);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp1_roundToInt = it.z72_1;
    tmp$ret$1 = roundToInt(tmp1_roundToInt);
    return new IntOffset(IntOffset_0(tmp, tmp$ret$1));
  }
  function IntSizeToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector2D(_IntSize___get_width__impl__d9yl4o(it.v2l_1), _IntSize___get_height__impl__prv63b(it.v2l_1));
  }
  function IntSizeToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    var tmp$ret$0;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp0_roundToInt = it.y72_1;
    tmp$ret$0 = roundToInt(tmp0_roundToInt);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp1_roundToInt = it.z72_1;
    tmp$ret$1 = roundToInt(tmp1_roundToInt);
    return new IntSize(IntSize_0(tmp, tmp$ret$1));
  }
  function RectToVector$lambda(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new AnimationVector4D(it.u2i_1, it.v2i_1, it.w2i_1, it.x2i_1);
  }
  function RectToVector$lambda_0(it) {
    init_properties_VectorConverters_kt_cbu3do();
    return new Rect(it.d73_1, it.e73_1, it.f73_1, it.g73_1);
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
    this.y7a_1 = 10000.0;
    this.z7a_1 = 1500.0;
    this.a7b_1 = 400.0;
    this.b7b_1 = 200.0;
    this.c7b_1 = 50.0;
    this.d7b_1 = 0.2;
    this.e7b_1 = 0.5;
    this.f7b_1 = 0.75;
    this.g7b_1 = 1.0;
    this.h7b_1 = 0.01;
    this.i7b_1 = 0;
  }
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
  function VectorizedSpringSpec(dampingRatio, stiffness, anims) {
    this.j7b_1 = dampingRatio;
    this.k7b_1 = stiffness;
    this.l7b_1 = new VectorizedFloatAnimationSpec(anims);
    this.m7b_1 = 8;
  }
  VectorizedSpringSpec.prototype.k71 = function () {
    return this.l7b_1.k71();
  };
  VectorizedSpringSpec.prototype.i71 = function (initialValue, targetValue, initialVelocity) {
    return this.l7b_1.i71(initialValue, targetValue, initialVelocity);
  };
  VectorizedSpringSpec.prototype.j71 = function (initialValue, targetValue, initialVelocity) {
    return this.l7b_1.j71(initialValue, targetValue, initialVelocity);
  };
  VectorizedSpringSpec.prototype.m71 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.l7b_1.m71(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  VectorizedSpringSpec.prototype.q71 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.l7b_1.q71(playTimeNanos, initialValue, targetValue, initialVelocity);
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
  function _get_valueVector__r10idf_0($this) {
    var tmp = $this.o7b_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl_0($this) {
    var tmp = $this.p7b_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_endVelocityVector__l8kbka($this) {
    var tmp = $this.q7b_1;
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
    this.s7b_1 = $anim;
  }
  VectorizedFloatAnimationSpec$1.prototype.g = function (index) {
    return this.s7b_1;
  };
  VectorizedFloatAnimationSpec$1.$metadata$ = classMeta(undefined, [Animations]);
  function VectorizedFloatAnimationSpec(anims) {
    this.n7b_1 = anims;
    this.r7b_1 = 8;
  }
  VectorizedFloatAnimationSpec.prototype.m71 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.o7b_1 == null)) {
      this.o7b_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf_0(this).f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf_0(this).r5d(i, this.n7b_1.g(i).e74(playTimeNanos, initialValue.g(i), targetValue.g(i), initialVelocity.g(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf_0(this);
  };
  VectorizedFloatAnimationSpec.prototype.q71 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.p7b_1 == null)) {
      this.p7b_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl_0(this).f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_0(this).r5d(i, this.n7b_1.g(i).f74(playTimeNanos, initialValue.g(i), targetValue.g(i), initialVelocity.g(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_0(this);
  };
  VectorizedFloatAnimationSpec.prototype.j71 = function (initialValue, targetValue, initialVelocity) {
    if (!!(this.q7b_1 == null)) {
      this.q7b_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_endVelocityVector__l8kbka(this).f();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_endVelocityVector__l8kbka(this).r5d(i, this.n7b_1.g(i).g74(initialValue.g(i), targetValue.g(i), initialVelocity.g(i)));
      }
       while (inductionVariable < last);
    return _get_endVelocityVector__l8kbka(this);
  };
  VectorizedFloatAnimationSpec.prototype.i71 = function (initialValue, targetValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = until(0, initialValue.f());
    var inductionVariable = tmp0_forEach.j1_1;
    var last = tmp0_forEach.k1_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.VectorizedFloatAnimationSpec.getDurationNanos.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var tmp0_maxOf = maxDuration;
        var tmp1_maxOf = this.n7b_1.g(element).h74(initialValue.g(element), targetValue.g(element), initialVelocity.g(element));
        tmp$ret$0 = tmp0_maxOf.h1(tmp1_maxOf) >= 0 ? tmp0_maxOf : tmp1_maxOf;
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
  function VectorizedDurationBasedAnimationSpec() {
  }
  VectorizedDurationBasedAnimationSpec.$metadata$ = interfaceMeta('VectorizedDurationBasedAnimationSpec', [VectorizedFiniteAnimationSpec]);
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    this.v7b_1 = durationMillis;
    this.w7b_1 = delayMillis;
    this.x7b_1 = easing;
    this.y7b_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.v7b_1, this.w7b_1, this.x7b_1));
    this.z7b_1 = 8;
  }
  VectorizedTweenSpec.prototype.t7b = function () {
    return this.v7b_1;
  };
  VectorizedTweenSpec.prototype.u7b = function () {
    return this.w7b_1;
  };
  VectorizedTweenSpec.prototype.m71 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.y7b_1.m71(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  VectorizedTweenSpec.prototype.q71 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.y7b_1.q71(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  VectorizedTweenSpec.$metadata$ = classMeta('VectorizedTweenSpec', [VectorizedDurationBasedAnimationSpec]);
  function createSpringAnimations$1($visibilityThreshold, $dampingRatio, $stiffness) {
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = until(0, $visibilityThreshold.f());
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var inductionVariable = tmp0_map.j1_1;
    var last = tmp0_map.k1_1;
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'androidx.compose.animation.core.<no name provided>.anims.<anonymous>' call
        tmp$ret$0 = new FloatSpringSpec($dampingRatio, $stiffness, $visibilityThreshold.g(item));
        tmp0_mapTo.a(tmp$ret$0);
      }
       while (!(item === last));
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    tmp.a7c_1 = tmp$ret$2;
  }
  createSpringAnimations$1.prototype.g = function (index) {
    return this.a7c_1.g(index);
  };
  createSpringAnimations$1.$metadata$ = classMeta(undefined, [Animations]);
  function createSpringAnimations$2($dampingRatio, $stiffness) {
    var tmp = this;
    tmp.b7c_1 = FloatSpringSpec_init_$Create$($dampingRatio, $stiffness, 0.0, 4, null);
  }
  createSpringAnimations$2.prototype.g = function (index) {
    return this.b7c_1;
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
  var properties_initialized_VisibilityThresholds_kt_k6rdp8;
  function init_properties_VisibilityThresholds_kt_us38ow() {
    if (properties_initialized_VisibilityThresholds_kt_k6rdp8) {
    } else {
      properties_initialized_VisibilityThresholds_kt_k6rdp8 = true;
      rectVisibilityThreshold = new Rect(0.5, 0.5, 0.5, 0.5);
      visibilityThresholdMap = mapOf([to(get_VectorConverter(IntCompanionObject_getInstance()), 1.0), to(get_VectorConverter_0(Companion_getInstance_5()), 1.0), to(get_VectorConverter_1(Companion_getInstance_4()), 1.0), to(get_VectorConverter_2(FloatCompanionObject_getInstance()), 0.01), to(get_VectorConverter_3(Companion_getInstance_3()), 0.5), to(get_VectorConverter_4(Companion_getInstance_1()), 0.5), to(get_VectorConverter_5(Companion_getInstance_2()), 0.5), to(get_VectorConverter_6(Companion_getInstance_0()), 0.1), to(get_VectorConverter_7(Companion_getInstance_6()), 0.1)]);
    }
  }
  //region block: post-declaration
  TargetBasedAnimation.prototype.n71 = isFinishedFromNanos;
  DecayAnimation.prototype.n71 = isFinishedFromNanos;
  FloatSpringSpec.prototype.i74 = vectorize;
  FloatTweenSpec.prototype.g74 = getEndVelocity;
  FloatTweenSpec.prototype.i74 = vectorize;
  VectorizedFloatAnimationSpec.prototype.k71 = get_isInfinite;
  VectorizedTweenSpec.prototype.i71 = getDurationNanos;
  VectorizedTweenSpec.prototype.k71 = get_isInfinite;
  VectorizedTweenSpec.prototype.j71 = getEndVelocity_0;
  //endregion
  //region block: init
  MillisToNanos = new Long(1000000, 0);
  UNSET = 3.4028235E38;
  AnimationDebugDurationScale = 1;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AnimationVector4D;
  _.$_$.b = CubicBezierEasing;
  _.$_$.c = get_FastOutSlowInEasing;
  _.$_$.d = get_LinearEasing;
  _.$_$.e = SpringSpec;
  _.$_$.f = TwoWayConverter_0;
  _.$_$.g = get_VectorConverter_6;
  _.$_$.h = get_VectorConverter_2;
  _.$_$.i = animateFloatAsState$composable;
  _.$_$.j = calculateTargetValue;
  _.$_$.k = createTransitionAnimation$composable;
  _.$_$.l = tween;
  _.$_$.m = updateTransition$composable;
  _.$_$.n = Animatable$default;
  _.$_$.o = exponentialDecay$default;
  _.$_$.p = spring$default;
  _.$_$.q = tween$default;
  _.$_$.r = Animatable_init_$Create$;
  _.$_$.s = TweenSpec_init_$Create$;
  _.$_$.t = Spring_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-animation-core.js.map
