(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-ui.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-graphics.js', './androidx-ui-geometry.js', './androidx-ui-unit.js', './androidx-runtime.js', './androidx-foundation-layout.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './androidx-animation-core.js', './androidx-ui-text.js', './androidx-runtime-saveable.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-ui.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-graphics.js'), require('./androidx-ui-geometry.js'), require('./androidx-ui-unit.js'), require('./androidx-runtime.js'), require('./androidx-foundation-layout.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./androidx-animation-core.js'), require('./androidx-ui-text.js'), require('./androidx-runtime-saveable.js'), require('./skiko-kjs.js'));
  else {
    if (typeof this['androidx-ui'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-ui' was not found. Please, check whether 'androidx-ui' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-ui-graphics' was not found. Please, check whether 'androidx-ui-graphics' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-ui-geometry' was not found. Please, check whether 'androidx-ui-geometry' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-ui-unit' was not found. Please, check whether 'androidx-ui-unit' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-runtime' was not found. Please, check whether 'androidx-runtime' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-foundation-layout' was not found. Please, check whether 'androidx-foundation-layout' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-animation-core' was not found. Please, check whether 'androidx-animation-core' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-ui-text' was not found. Please, check whether 'androidx-ui-text' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-runtime-saveable' was not found. Please, check whether 'androidx-runtime-saveable' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'androidx-foundation'.");
    }
    root['androidx-foundation'] = factory(typeof this['androidx-foundation'] === 'undefined' ? {} : this['androidx-foundation'], this['androidx-ui'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-graphics'], this['androidx-ui-geometry'], this['androidx-ui-unit'], this['androidx-runtime'], this['androidx-foundation-layout'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['androidx-animation-core'], this['androidx-ui-text'], this['androidx-runtime-saveable'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_androidx_compose_ui_ui, kotlin_kotlin, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_foundation_foundation_layout, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_androidx_compose_animation_animation_core, kotlin_androidx_compose_ui_ui_text, kotlin_androidx_compose_runtime_runtime_saveable, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var get_NoInspectorInfo = kotlin_androidx_compose_ui_ui.$_$.w2;
  var get_isDebugInspectorInfoEnabled = kotlin_androidx_compose_ui_ui.$_$.y2;
  var Unit_getInstance = kotlin_kotlin.$_$.b3;
  var get_RectangleShape = kotlin_androidx_compose_ui_ui_graphics.$_$.v;
  var Color = kotlin_androidx_compose_ui_ui_graphics.$_$.k;
  var Size = kotlin_androidx_compose_ui_ui_geometry.$_$.k;
  var equals = kotlin_kotlin.$_$.t8;
  var ensureNotNull = kotlin_kotlin.$_$.uc;
  var drawOutline$default = kotlin_androidx_compose_ui_ui_graphics.$_$.j2;
  var drawOutline$default_0 = kotlin_androidx_compose_ui_ui_graphics.$_$.k2;
  var InspectorValueInfo = kotlin_androidx_compose_ui_ui.$_$.q2;
  var Color__hashCode_impl_vjyivj = kotlin_androidx_compose_ui_ui_graphics.$_$.t2;
  var hashCode = kotlin_kotlin.$_$.b9;
  var getNumberHashCode = kotlin_kotlin.$_$.x8;
  var foldIn = kotlin_androidx_compose_ui_ui.$_$.n3;
  var foldOut = kotlin_androidx_compose_ui_ui.$_$.o3;
  var any = kotlin_androidx_compose_ui_ui.$_$.m3;
  var all = kotlin_androidx_compose_ui_ui.$_$.l3;
  var then = kotlin_androidx_compose_ui_ui.$_$.p3;
  var DrawModifier = kotlin_androidx_compose_ui_ui.$_$.a;
  var classMeta = kotlin_kotlin.$_$.q8;
  var composed$composable = kotlin_androidx_compose_ui_ui.$_$.q3;
  var ImageBitmapConfig = kotlin_androidx_compose_ui_ui_graphics.$_$.m;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui_graphics.$_$.t3;
  var _IntSize___get_width__impl__d9yl4o = kotlin_androidx_compose_ui_ui_unit.$_$.w2;
  var _IntSize___get_height__impl__prv63b = kotlin_androidx_compose_ui_ui_unit.$_$.u2;
  var ImageBitmap$default = kotlin_androidx_compose_ui_ui_graphics.$_$.i2;
  var Canvas = kotlin_androidx_compose_ui_ui_graphics.$_$.h;
  var _Size___get_height__impl__a04p02 = kotlin_androidx_compose_ui_ui_geometry.$_$.h1;
  var _Size___get_width__impl__58y75t = kotlin_androidx_compose_ui_ui_geometry.$_$.k1;
  var CanvasDrawScope = kotlin_androidx_compose_ui_ui_graphics.$_$.a;
  var toSize = kotlin_androidx_compose_ui_ui_unit.$_$.u1;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_graphics.$_$.r3;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_graphics.$_$.p3;
  var Path = kotlin_androidx_compose_ui_ui_graphics.$_$.u;
  var THROW_CCE = kotlin_kotlin.$_$.kc;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_graphics.$_$.s3;
  var SolidColor = kotlin_androidx_compose_ui_ui_graphics.$_$.z;
  var Companion_getInstance_3 = kotlin_androidx_compose_ui_ui_graphics.$_$.w3;
  var numberToInt = kotlin_kotlin.$_$.o9;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$_$.y;
  var Stroke_init_$Create$ = kotlin_androidx_compose_ui_ui_graphics.$_$.l2;
  var get_isSimple = kotlin_androidx_compose_ui_ui_geometry.$_$.o;
  var Companion_getInstance_4 = kotlin_androidx_compose_ui_ui_geometry.$_$.m1;
  var Fill_getInstance = kotlin_androidx_compose_ui_ui_graphics.$_$.o3;
  var _CornerRadius___get_x__impl__1594cn = kotlin_androidx_compose_ui_ui_geometry.$_$.v;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_androidx_compose_ui_ui_geometry.$_$.w;
  var CornerRadius = kotlin_androidx_compose_ui_ui_geometry.$_$.a;
  var RoundRect = kotlin_androidx_compose_ui_ui_geometry.$_$.i;
  var Dp = kotlin_androidx_compose_ui_ui_unit.$_$.v;
  var _Size___get_minDimension__impl__4iso0r = kotlin_androidx_compose_ui_ui_geometry.$_$.i1;
  var Companion_getInstance_5 = kotlin_androidx_compose_ui_ui_unit.$_$.m3;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$_$.d;
  var Size_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.j;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.cd;
  var Rectangle = kotlin_androidx_compose_ui_ui_graphics.$_$.p;
  var Rounded = kotlin_androidx_compose_ui_ui_graphics.$_$.q;
  var Generic = kotlin_androidx_compose_ui_ui_graphics.$_$.o;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var Ref = kotlin_androidx_compose_ui_ui.$_$.l2;
  var Companion_getInstance_6 = kotlin_androidx_compose_runtime_runtime.$_$.g2;
  var isObject = kotlin_kotlin.$_$.j9;
  var Companion_getInstance_7 = kotlin_androidx_compose_ui_ui.$_$.x4;
  var drawWithCache = kotlin_androidx_compose_ui_ui.$_$.e;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var Companion_getInstance_8 = kotlin_androidx_compose_ui_ui_graphics.$_$.q3;
  var Dp__hashCode_impl_sxkrra = kotlin_androidx_compose_ui_ui_unit.$_$.k2;
  var drawBehind = kotlin_androidx_compose_ui_ui.$_$.d;
  var Spacer$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.d;
  var DisposableEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var FocusRequester = kotlin_androidx_compose_ui_ui.$_$.f;
  var focusRequester = kotlin_androidx_compose_ui_ui.$_$.g;
  var to = kotlin_kotlin.$_$.md;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var semantics = kotlin_androidx_compose_ui_ui.$_$.i3;
  var onKeyEvent = kotlin_androidx_compose_ui_ui.$_$.u;
  var Role = kotlin_androidx_compose_ui_ui.$_$.a3;
  var CoroutineImpl = kotlin_kotlin.$_$.a8;
  var isInterface = kotlin_kotlin.$_$.i9;
  var Offset_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.e;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k7;
  var PointerInputScope = kotlin_androidx_compose_ui_ui.$_$.a1;
  var get_center = kotlin_androidx_compose_ui_ui_unit.$_$.f1;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_androidx_compose_ui_ui_unit.$_$.r2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_androidx_compose_ui_ui_unit.$_$.s2;
  var ModifierLocalConsumer = kotlin_androidx_compose_ui_ui.$_$.j2;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.u2;
  var rememberUpdatedState$composable = kotlin_androidx_compose_runtime_runtime.$_$.o1;
  var mutableStateOf$default = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var pointerInput = kotlin_androidx_compose_ui_ui.$_$.j1;
  var createCompositionCoroutineScope = kotlin_androidx_compose_runtime_runtime.$_$.e1;
  var CompositionScopedCoroutineScopeCanceller = kotlin_androidx_compose_runtime_runtime.$_$.p;
  var DisposableEffectResult = kotlin_androidx_compose_runtime_runtime.$_$.t;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var cancelAndJoin = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var set_role = kotlin_androidx_compose_ui_ui.$_$.h3;
  var onClick = kotlin_androidx_compose_ui_ui.$_$.e3;
  var onLongClick = kotlin_androidx_compose_ui_ui.$_$.f3;
  var disabled = kotlin_androidx_compose_ui_ui.$_$.c3;
  var get_key = kotlin_androidx_compose_ui_ui.$_$.t;
  var Key = kotlin_androidx_compose_ui_ui.$_$.q;
  var SuspendFunction2 = kotlin_kotlin.$_$.d8;
  var SuspendFunction1 = kotlin_kotlin.$_$.c8;
  var Rect = kotlin_androidx_compose_ui_ui_geometry.$_$.g;
  var Shape = kotlin_androidx_compose_ui_ui_graphics.$_$.y;
  var _Dp___init__impl__ms3zkb = kotlin_androidx_compose_ui_ui_unit.$_$.i2;
  var clip = kotlin_androidx_compose_ui_ui.$_$.c;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.q1;
  var Annotation = kotlin_kotlin.$_$.tb;
  var inspectableWrapper = kotlin_androidx_compose_ui_ui.$_$.x2;
  var KMutableProperty0 = kotlin_kotlin.$_$.qa;
  var THROW_ISE = kotlin_kotlin.$_$.lc;
  var getLocalDelegateReference = kotlin_kotlin.$_$.w8;
  var set_focused = kotlin_androidx_compose_ui_ui.$_$.d3;
  var requestFocus$default = kotlin_androidx_compose_ui_ui.$_$.a4;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var semantics$default = kotlin_androidx_compose_ui_ui.$_$.b4;
  var onFocusChanged = kotlin_androidx_compose_ui_ui.$_$.i;
  var focusTarget = kotlin_androidx_compose_ui_ui.$_$.h;
  var InspectableModifier = kotlin_androidx_compose_ui_ui.$_$.m2;
  var OnGloballyPositionedModifier = kotlin_androidx_compose_ui_ui.$_$.b2;
  var modifierLocalOf = kotlin_androidx_compose_ui_ui.$_$.k2;
  var AwaitPointerEventScope = kotlin_androidx_compose_ui_ui.$_$.y;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var Companion_getInstance_9 = kotlin_androidx_compose_ui_ui.$_$.o4;
  var LaunchedEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.v;
  var pointerInput_0 = kotlin_androidx_compose_ui_ui.$_$.i1;
  var interfaceMeta = kotlin_kotlin.$_$.d9;
  var Color__copy$default_impl_ectz3s = kotlin_androidx_compose_ui_ui_graphics.$_$.j3;
  var illegalDecoyCallException = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.q9;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var Companion_getInstance_10 = kotlin_androidx_compose_ui_ui.$_$.q4;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var get_LocalInputModeManager = kotlin_androidx_compose_ui_ui.$_$.t2;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.t1;
  var Enum = kotlin_kotlin.$_$.zb;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var AtomicReference = kotlin_androidx_compose_runtime_runtime.$_$.l;
  var Mutex$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var rangeTo = kotlin_kotlin.$_$.na;
  var coerceIn = kotlin_kotlin.$_$.ma;
  var ProgressBarRangeInfo = kotlin_androidx_compose_ui_ui.$_$.z2;
  var set_progressBarRangeInfo = kotlin_androidx_compose_ui_ui.$_$.g3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.o;
  var Companion_getInstance_11 = kotlin_androidx_compose_ui_ui.$_$.p4;
  var _Offset___get_x__impl__xvi35n = kotlin_androidx_compose_ui_ui_geometry.$_$.e1;
  var _Offset___get_y__impl__8bzhra = kotlin_androidx_compose_ui_ui_geometry.$_$.f1;
  var positionChange = kotlin_androidx_compose_ui_ui.$_$.n1;
  var changedToUp = kotlin_androidx_compose_ui_ui.$_$.e1;
  var CancellationException = kotlin_kotlin.$_$.j7;
  var PointerEventPass_Main_getInstance = kotlin_androidx_compose_ui_ui.$_$.u3;
  var changedToUpIgnoreConsumed = kotlin_androidx_compose_ui_ui.$_$.d1;
  var isOutOfBounds = kotlin_androidx_compose_ui_ui.$_$.f1;
  var PointerEventPass_Final_getInstance = kotlin_androidx_compose_ui_ui.$_$.s3;
  var Offset__getDistance_impl_pclvxn = kotlin_androidx_compose_ui_ui_geometry.$_$.z;
  var Offset__div_impl_eaxtg1 = kotlin_androidx_compose_ui_ui_geometry.$_$.x;
  var Offset__times_impl_jz1mli = kotlin_androidx_compose_ui_ui_geometry.$_$.d1;
  var Offset__minus_impl_hoj2c0 = kotlin_androidx_compose_ui_ui_geometry.$_$.b1;
  var positionChangeIgnoreConsumed = kotlin_androidx_compose_ui_ui.$_$.l1;
  var PointerEventTimeoutCancellationException = kotlin_androidx_compose_ui_ui.$_$.z;
  var positionChangedIgnoreConsumed = kotlin_androidx_compose_ui_ui.$_$.m1;
  var _Dp___get_value__impl__geb1vb = kotlin_androidx_compose_ui_ui_unit.$_$.l2;
  var _Velocity___get_x__impl__qqcikv = kotlin_androidx_compose_ui_ui_unit.$_$.i3;
  var _Velocity___get_y__impl__239yhc = kotlin_androidx_compose_ui_ui_unit.$_$.j3;
  var Velocity = kotlin_androidx_compose_ui_ui_unit.$_$.e1;
  var Companion_getInstance_12 = kotlin_androidx_compose_ui_ui_unit.$_$.t3;
  var KProperty0 = kotlin_kotlin.$_$.sa;
  var get_isActive_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var VelocityTracker = kotlin_androidx_compose_ui_ui.$_$.w;
  var Velocity__times_impl_yav0ik = kotlin_androidx_compose_ui_ui_unit.$_$.h3;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var pointerInput_1 = kotlin_androidx_compose_ui_ui.$_$.k1;
  var addPointerInputChange = kotlin_androidx_compose_ui_ui.$_$.x;
  var PointerEventPass_Initial_getInstance = kotlin_androidx_compose_ui_ui.$_$.t3;
  var captureStack = kotlin_kotlin.$_$.k8;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.z;
  var Density = kotlin_androidx_compose_ui_ui_unit.$_$.q;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var changedToDownIgnoreConsumed = kotlin_androidx_compose_ui_ui.$_$.b1;
  var changedToDown = kotlin_androidx_compose_ui_ui.$_$.c1;
  var get_isPrimaryPressed = kotlin_androidx_compose_ui_ui.$_$.g1;
  var Companion_getInstance_13 = kotlin_kotlin.$_$.y2;
  var Long = kotlin_kotlin.$_$.ec;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var MutableSharedFlow$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var Spring_getInstance = kotlin_androidx_compose_animation_animation_core.$_$.a1;
  var Companion_getInstance_14 = kotlin_androidx_compose_ui_ui_unit.$_$.p3;
  var get_VisibilityThreshold = kotlin_androidx_compose_animation_animation_core.$_$.k;
  var IntOffset = kotlin_androidx_compose_ui_ui_unit.$_$.x;
  var spring$default = kotlin_androidx_compose_animation_animation_core.$_$.v;
  var OnPlacedModifier = kotlin_androidx_compose_ui_ui.$_$.c2;
  var isArray = kotlin_kotlin.$_$.e9;
  var fillArrayVal = kotlin_kotlin.$_$.u8;
  var MutableVector = kotlin_androidx_compose_runtime_runtime.$_$.a;
  var IntSize_0 = kotlin_androidx_compose_ui_ui_unit.$_$.z;
  var toRect = kotlin_androidx_compose_ui_ui_geometry.$_$.t;
  var toString = kotlin_kotlin.$_$.u9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var get_inspectableElements = kotlin_androidx_compose_ui_ui.$_$.n2;
  var get_nameFallback = kotlin_androidx_compose_ui_ui.$_$.o2;
  var InspectableValue = kotlin_androidx_compose_ui_ui.$_$.p2;
  var LayoutDirection_Ltr_getInstance = kotlin_androidx_compose_ui_ui_unit.$_$.v1;
  var CornerRadius$default = kotlin_androidx_compose_ui_ui_geometry.$_$.u;
  var RoundRect_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.h;
  var TextOverflow = kotlin_androidx_compose_ui_ui_text.$_$.j;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_androidx_compose_ui_ui_text.$_$.v;
  var Companion_getInstance_15 = kotlin_androidx_compose_ui_ui_text.$_$.h1;
  var Companion_getInstance_16 = kotlin_androidx_compose_ui_ui_text.$_$.e1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.x2;
  var get_LocalDensity = kotlin_androidx_compose_ui_ui.$_$.r2;
  var get_LocalFontFamilyResolver = kotlin_androidx_compose_ui_ui.$_$.s2;
  var rememberSaveable$composable = kotlin_androidx_compose_runtime_runtime_saveable.$_$.b;
  var AnnotatedString_init_$Create$ = kotlin_androidx_compose_ui_ui_text.$_$.s;
  var get_LocalLayoutDirection = kotlin_androidx_compose_ui_ui.$_$.u2;
  var get_LocalViewConfiguration = kotlin_androidx_compose_ui_ui.$_$.v2;
  var materialize = kotlin_androidx_compose_ui_ui.$_$.r3;
  var Companion_getInstance_17 = kotlin_androidx_compose_ui_ui.$_$.t4;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.g1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.k;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.d2;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var Saver = kotlin_androidx_compose_runtime_runtime_saveable.$_$.a;
  var graphicsLayer$default = kotlin_androidx_compose_ui_ui.$_$.x3;
  var Offset__plus_impl_c78cg0 = kotlin_androidx_compose_ui_ui_geometry.$_$.c1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var Constraints$default = kotlin_androidx_compose_ui_ui_unit.$_$.x1;
  var roundToInt = kotlin_kotlin.$_$.aa;
  var IntOffset_0 = kotlin_androidx_compose_ui_ui_unit.$_$.w;
  var Pair = kotlin_kotlin.$_$.ic;
  var get_FirstBaseline = kotlin_androidx_compose_ui_ui.$_$.o1;
  var get_LastBaseline = kotlin_androidx_compose_ui_ui.$_$.p1;
  var mapOf = kotlin_kotlin.$_$.e6;
  var Companion_getInstance_18 = kotlin_androidx_compose_ui_ui_unit.$_$.l3;
  var Constraints = kotlin_androidx_compose_ui_ui_unit.$_$.a;
  var MeasurePolicy = kotlin_androidx_compose_ui_ui.$_$.a2;
  var positionInWindow = kotlin_androidx_compose_ui_ui.$_$.i2;
  var set_text = kotlin_androidx_compose_ui_ui.$_$.j3;
  var getTextLayoutResult$default = kotlin_androidx_compose_ui_ui.$_$.z3;
  var onGloballyPositioned = kotlin_androidx_compose_ui_ui.$_$.h2;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.hd;
  var composed$composable$default = kotlin_androidx_compose_ui_ui.$_$.d4;
  var pointerHoverIcon$default = kotlin_androidx_compose_ui_ui.$_$.y3;
  var RememberObserver = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var neverEqualPolicy = kotlin_androidx_compose_runtime_runtime.$_$.l1;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.k1;
  var KMutableProperty1 = kotlin_kotlin.$_$.ra;
  var getPropertyCallableRef = kotlin_kotlin.$_$.z8;
  var emptyList = kotlin_kotlin.$_$.a5;
  var get_isShiftPressed = kotlin_androidx_compose_ui_ui.$_$.s;
  var get_isCtrlPressed = kotlin_androidx_compose_ui_ui.$_$.r;
  var KeyEvent = kotlin_androidx_compose_ui_ui.$_$.p;
  var KProperty1 = kotlin_kotlin.$_$.ta;
  var TextRange = kotlin_androidx_compose_ui_ui_text.$_$.n;
  var charSequenceGet = kotlin_kotlin.$_$.n8;
  var Char = kotlin_kotlin.$_$.vb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g2;
  var charSequenceLength = kotlin_kotlin.$_$.o8;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_androidx_compose_ui_ui_unit.$_$.h2;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_androidx_compose_ui_ui_unit.$_$.f2;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_androidx_compose_ui_ui_unit.$_$.a2;
  var coerceIn_0 = kotlin_kotlin.$_$.ka;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_androidx_compose_ui_ui_unit.$_$.e2;
  var MultiParagraph = kotlin_androidx_compose_ui_ui_text.$_$.l;
  var TextPainter_getInstance = kotlin_androidx_compose_ui_ui_text.$_$.f1;
  var resolveDefaults = kotlin_androidx_compose_ui_ui_text.$_$.p;
  var MultiParagraphIntrinsics = kotlin_androidx_compose_ui_ui_text.$_$.k;
  var TextLayoutInput_init_$Create$ = kotlin_androidx_compose_ui_ui_text.$_$.r;
  var constrain = kotlin_androidx_compose_ui_ui_unit.$_$.k1;
  var TextLayoutResult = kotlin_androidx_compose_ui_ui_text.$_$.m;
  var keyframes = kotlin_androidx_compose_animation_animation_core.$_$.p;
  var infiniteRepeatable$default = kotlin_androidx_compose_animation_animation_core.$_$.u;
  var repeat = kotlin_kotlin.$_$.ib;
  var OffsetMapping = kotlin_androidx_compose_ui_ui_text.$_$.d;
  var Companion_getInstance_19 = kotlin_androidx_compose_ui_ui_text.$_$.c1;
  var Companion_getInstance_20 = kotlin_androidx_compose_ui_ui_geometry.$_$.n1;
  var Companion_getInstance_21 = kotlin_androidx_compose_ui_ui_text.$_$.g1;
  var _TextRange___get_reversed__impl__emhnbm = kotlin_androidx_compose_ui_ui_text.$_$.y;
  var _TextRange___get_start__impl__ww4t90 = kotlin_androidx_compose_ui_ui_text.$_$.z;
  var _TextRange___get_end__impl__gcdxpp = kotlin_androidx_compose_ui_ui_text.$_$.x;
  var TextRange_0 = kotlin_androidx_compose_ui_ui_text.$_$.o;
  var get_lastIndex = kotlin_kotlin.$_$.gb;
  var _TextRange___get_collapsed__impl__cilesp = kotlin_androidx_compose_ui_ui_text.$_$.w;
  var Offset__hashCode_impl_hbql41 = kotlin_androidx_compose_ui_ui_geometry.$_$.a1;
  var SemanticsPropertyKey_init_$Create$ = kotlin_androidx_compose_ui_ui.$_$.f4;
  var AnimationVector2D = kotlin_androidx_compose_animation_animation_core.$_$.a;
  var get_isSpecified = kotlin_androidx_compose_ui_ui_geometry.$_$.p;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.w2;
  var TwoWayConverter = kotlin_androidx_compose_animation_animation_core.$_$.h;
  var SpringSpec_init_$Create$ = kotlin_androidx_compose_animation_animation_core.$_$.y;
  var compositionLocalOf$default = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var get_isShiftPressed_0 = kotlin_androidx_compose_ui_ui.$_$.h1;
  var _KeyEvent___get_nativeKeyEvent__impl__py13j5 = kotlin_androidx_compose_ui_ui.$_$.k4;
  var get_type = kotlin_androidx_compose_ui_ui.$_$.v;
  var Companion_getInstance_22 = kotlin_androidx_compose_ui_ui.$_$.m4;
  var DummyPointerIcon_getInstance = kotlin_androidx_compose_ui_ui.$_$.n4;
  var Color_0 = kotlin_androidx_compose_ui_ui_graphics.$_$.j;
  var SkikoKey_KEY_SPACE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s6;
  var toLong = kotlin_kotlin.$_$.s9;
  var Companion_getInstance_23 = kotlin_androidx_compose_ui_ui.$_$.l4;
  var _Key___get_keyCode__impl__ymzu5v = kotlin_androidx_compose_ui_ui.$_$.j4;
  var _Key___init__impl__p6mluu = kotlin_androidx_compose_ui_ui.$_$.i4;
  var get_currentSystemTheme = kotlin_org_jetbrains_skiko_skiko.$_$.j9;
  var SystemTheme_DARK_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e7;
  var LayoutCoordinates = kotlin_androidx_compose_ui_ui.$_$.q1;
  //endregion
  //region block: pre-declaration
  Background.prototype = Object.create(InspectorValueInfo.prototype);
  Background.prototype.constructor = Background;
  clickable$lambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  clickable$lambda$slambda$slambda.prototype.constructor = clickable$lambda$slambda$slambda;
  clickable$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  clickable$lambda$slambda.prototype.constructor = clickable$lambda$slambda;
  handlePressInteraction$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  handlePressInteraction$slambda$slambda.prototype.constructor = handlePressInteraction$slambda$slambda;
  handlePressInteraction$slambda.prototype = Object.create(CoroutineImpl.prototype);
  handlePressInteraction$slambda.prototype.constructor = handlePressInteraction$slambda;
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda.prototype.constructor = genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda;
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1.prototype.constructor = genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1;
  focusable$lambda$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  focusable$lambda$lambda$slambda.prototype.constructor = focusable$lambda$lambda$slambda;
  focusable$lambda$lambda$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  focusable$lambda$lambda$slambda_1.prototype.constructor = focusable$lambda$lambda$slambda_1;
  focusable$lambda$lambda$slambda_3.prototype = Object.create(CoroutineImpl.prototype);
  focusable$lambda$lambda$slambda_3.prototype.constructor = focusable$lambda$lambda$slambda_3;
  focusable$lambda$lambda$slambda_5.prototype = Object.create(CoroutineImpl.prototype);
  focusable$lambda$lambda$slambda_5.prototype.constructor = focusable$lambda$lambda$slambda_5;
  hoverable$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  hoverable$lambda$slambda.prototype.constructor = hoverable$lambda$slambda;
  hoverable$lambda$slambda$slambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  hoverable$lambda$slambda$slambda$slambda$slambda.prototype.constructor = hoverable$lambda$slambda$slambda$slambda$slambda;
  hoverable$lambda$slambda$slambda$slambda$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  hoverable$lambda$slambda$slambda$slambda$slambda_1.prototype.constructor = hoverable$lambda$slambda$slambda$slambda$slambda_1;
  hoverable$lambda$slambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  hoverable$lambda$slambda$slambda$slambda.prototype.constructor = hoverable$lambda$slambda$slambda$slambda;
  hoverable$lambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  hoverable$lambda$slambda$slambda.prototype.constructor = hoverable$lambda$slambda$slambda;
  hoverable$lambda$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  hoverable$lambda$slambda_1.prototype.constructor = hoverable$lambda$slambda_1;
  $invoke$emitEnterCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $invoke$emitEnterCOROUTINE$0.prototype.constructor = $invoke$emitEnterCOROUTINE$0;
  $invoke$emitExitCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $invoke$emitExitCOROUTINE$1.prototype.constructor = $invoke$emitExitCOROUTINE$1;
  indication$lambda$o$collect$slambda.prototype = Object.create(CoroutineImpl.prototype);
  indication$lambda$o$collect$slambda.prototype.constructor = indication$lambda$o$collect$slambda;
  $collectCOROUTINE$2.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$2.prototype.constructor = $collectCOROUTINE$2;
  MutatePriority.prototype = Object.create(Enum.prototype);
  MutatePriority.prototype.constructor = MutatePriority;
  MutatorMutex$mutate$slambda.prototype = Object.create(CoroutineImpl.prototype);
  MutatorMutex$mutate$slambda.prototype.constructor = MutatorMutex$mutate$slambda;
  MutatorMutex$mutateWith$slambda.prototype = Object.create(CoroutineImpl.prototype);
  MutatorMutex$mutateWith$slambda.prototype.constructor = MutatorMutex$mutateWith$slambda;
  detectDragGesturesAfterLongPress$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.constructor = detectDragGesturesAfterLongPress$slambda$slambda;
  detectDragGesturesAfterLongPress$slambda.prototype = Object.create(CoroutineImpl.prototype);
  detectDragGesturesAfterLongPress$slambda.prototype.constructor = detectDragGesturesAfterLongPress$slambda;
  awaitLongPressOrCancellation$slambda.prototype = Object.create(CoroutineImpl.prototype);
  awaitLongPressOrCancellation$slambda.prototype.constructor = awaitLongPressOrCancellation$slambda;
  $awaitPointerSlopOrCancellationCOROUTINE$3.prototype = Object.create(CoroutineImpl.prototype);
  $awaitPointerSlopOrCancellationCOROUTINE$3.prototype.constructor = $awaitPointerSlopOrCancellationCOROUTINE$3;
  $verticalDragCOROUTINE$4.prototype = Object.create(CoroutineImpl.prototype);
  $verticalDragCOROUTINE$4.prototype.constructor = $verticalDragCOROUTINE$4;
  $horizontalDragCOROUTINE$5.prototype = Object.create(CoroutineImpl.prototype);
  $horizontalDragCOROUTINE$5.prototype.constructor = $horizontalDragCOROUTINE$5;
  $dragCOROUTINE$6.prototype = Object.create(CoroutineImpl.prototype);
  $dragCOROUTINE$6.prototype.constructor = $dragCOROUTINE$6;
  $awaitDragOrUpCOROUTINE$7.prototype = Object.create(CoroutineImpl.prototype);
  $awaitDragOrUpCOROUTINE$7.prototype.constructor = $awaitDragOrUpCOROUTINE$7;
  $dragCOROUTINE$8.prototype = Object.create(CoroutineImpl.prototype);
  $dragCOROUTINE$8.prototype.constructor = $dragCOROUTINE$8;
  $awaitLongPressOrCancellationCOROUTINE$9.prototype = Object.create(CoroutineImpl.prototype);
  $awaitLongPressOrCancellationCOROUTINE$9.prototype.constructor = $awaitLongPressOrCancellationCOROUTINE$9;
  $awaitDragOrCancellationCOROUTINE$10.prototype = Object.create(CoroutineImpl.prototype);
  $awaitDragOrCancellationCOROUTINE$10.prototype.constructor = $awaitDragOrCancellationCOROUTINE$10;
  function drag$default(dragPriority, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dragPriority = MutatePriority_Default_getInstance();
    return $handler == null ? this.drag_p40z53_k$(dragPriority, block, $cont) : $handler(dragPriority, block, $cont);
  }
  DefaultDraggableState$drag$slambda.prototype = Object.create(CoroutineImpl.prototype);
  DefaultDraggableState$drag$slambda.prototype.constructor = DefaultDraggableState$drag$slambda;
  DragStarted.prototype = Object.create(DragEvent.prototype);
  DragStarted.prototype.constructor = DragStarted;
  DragStopped.prototype = Object.create(DragEvent.prototype);
  DragStopped.prototype.constructor = DragStopped;
  DragCancelled.prototype = Object.create(DragEvent.prototype);
  DragCancelled.prototype.constructor = DragCancelled;
  DragDelta.prototype = Object.create(DragEvent.prototype);
  DragDelta.prototype.constructor = DragDelta;
  $processDragStartCOROUTINE$11.prototype = Object.create(CoroutineImpl.prototype);
  $processDragStartCOROUTINE$11.prototype.constructor = $processDragStartCOROUTINE$11;
  $processDragStopCOROUTINE$12.prototype = Object.create(CoroutineImpl.prototype);
  $processDragStopCOROUTINE$12.prototype.constructor = $processDragStopCOROUTINE$12;
  $processDragCancelCOROUTINE$13.prototype = Object.create(CoroutineImpl.prototype);
  $processDragCancelCOROUTINE$13.prototype.constructor = $processDragCancelCOROUTINE$13;
  draggable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  draggable$slambda.prototype.constructor = draggable$slambda;
  draggable$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  draggable$slambda_1.prototype.constructor = draggable$slambda_1;
  draggable$slambda_3.prototype = Object.create(CoroutineImpl.prototype);
  draggable$slambda_3.prototype.constructor = draggable$slambda_3;
  draggable$slambda_5.prototype = Object.create(CoroutineImpl.prototype);
  draggable$slambda_5.prototype.constructor = draggable$slambda_5;
  draggable$slambda_7.prototype = Object.create(CoroutineImpl.prototype);
  draggable$slambda_7.prototype.constructor = draggable$slambda_7;
  draggable$lambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  draggable$lambda$slambda$slambda.prototype.constructor = draggable$lambda$slambda$slambda;
  draggable$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  draggable$lambda$slambda.prototype.constructor = draggable$lambda$slambda;
  draggable$lambda$slambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  draggable$lambda$slambda$slambda$slambda.prototype.constructor = draggable$lambda$slambda$slambda$slambda;
  draggable$lambda$slambda$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  draggable$lambda$slambda$slambda_1.prototype.constructor = draggable$lambda$slambda$slambda_1;
  draggable$lambda$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  draggable$lambda$slambda_1.prototype.constructor = draggable$lambda$slambda_1;
  $awaitDownAndSlopCOROUTINE$14.prototype = Object.create(CoroutineImpl.prototype);
  $awaitDownAndSlopCOROUTINE$14.prototype.constructor = $awaitDownAndSlopCOROUTINE$14;
  $awaitDragCOROUTINE$15.prototype = Object.create(CoroutineImpl.prototype);
  $awaitDragCOROUTINE$15.prototype.constructor = $awaitDragCOROUTINE$15;
  GestureCancellationException.prototype = Object.create(CancellationException.prototype);
  GestureCancellationException.prototype.constructor = GestureCancellationException;
  awaitAllPointersUp$slambda.prototype = Object.create(CoroutineImpl.prototype);
  awaitAllPointersUp$slambda.prototype.constructor = awaitAllPointersUp$slambda;
  $forEachGestureCOROUTINE$16.prototype = Object.create(CoroutineImpl.prototype);
  $forEachGestureCOROUTINE$16.prototype.constructor = $forEachGestureCOROUTINE$16;
  $awaitAllPointersUpCOROUTINE$17.prototype = Object.create(CoroutineImpl.prototype);
  $awaitAllPointersUpCOROUTINE$17.prototype.constructor = $awaitAllPointersUpCOROUTINE$17;
  Orientation.prototype = Object.create(Enum.prototype);
  Orientation.prototype.constructor = Orientation;
  $awaitReleaseCOROUTINE$19.prototype = Object.create(CoroutineImpl.prototype);
  $awaitReleaseCOROUTINE$19.prototype.constructor = $awaitReleaseCOROUTINE$19;
  $tryAwaitReleaseCOROUTINE$20.prototype = Object.create(CoroutineImpl.prototype);
  $tryAwaitReleaseCOROUTINE$20.prototype.constructor = $tryAwaitReleaseCOROUTINE$20;
  NoPressGesture$slambda.prototype = Object.create(CoroutineImpl.prototype);
  NoPressGesture$slambda.prototype.constructor = NoPressGesture$slambda;
  detectTapGestures$slambda$slambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  detectTapGestures$slambda$slambda$slambda$slambda.prototype.constructor = detectTapGestures$slambda$slambda$slambda$slambda;
  detectTapGestures$slambda$slambda$slambda$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  detectTapGestures$slambda$slambda$slambda$slambda_1.prototype.constructor = detectTapGestures$slambda$slambda$slambda$slambda_1;
  detectTapGestures$slambda$slambda$slambda$slambda_3.prototype = Object.create(CoroutineImpl.prototype);
  detectTapGestures$slambda$slambda$slambda$slambda_3.prototype.constructor = detectTapGestures$slambda$slambda$slambda$slambda_3;
  detectTapGestures$slambda$slambda$slambda$slambda_5.prototype = Object.create(CoroutineImpl.prototype);
  detectTapGestures$slambda$slambda$slambda$slambda_5.prototype.constructor = detectTapGestures$slambda$slambda$slambda$slambda_5;
  detectTapGestures$slambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  detectTapGestures$slambda$slambda$slambda.prototype.constructor = detectTapGestures$slambda$slambda$slambda;
  detectTapGestures$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  detectTapGestures$slambda$slambda.prototype.constructor = detectTapGestures$slambda$slambda;
  detectTapGestures$slambda.prototype = Object.create(CoroutineImpl.prototype);
  detectTapGestures$slambda.prototype.constructor = detectTapGestures$slambda;
  awaitSecondDown$slambda.prototype = Object.create(CoroutineImpl.prototype);
  awaitSecondDown$slambda.prototype.constructor = awaitSecondDown$slambda;
  detectTapAndPress$slambda$slambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  detectTapAndPress$slambda$slambda$slambda$slambda.prototype.constructor = detectTapAndPress$slambda$slambda$slambda$slambda;
  detectTapAndPress$slambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  detectTapAndPress$slambda$slambda$slambda.prototype.constructor = detectTapAndPress$slambda$slambda$slambda;
  detectTapAndPress$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  detectTapAndPress$slambda$slambda.prototype.constructor = detectTapAndPress$slambda$slambda;
  detectTapAndPress$slambda.prototype = Object.create(CoroutineImpl.prototype);
  detectTapAndPress$slambda.prototype.constructor = detectTapAndPress$slambda;
  $awaitFirstDownOnPassCOROUTINE$18.prototype = Object.create(CoroutineImpl.prototype);
  $awaitFirstDownOnPassCOROUTINE$18.prototype.constructor = $awaitFirstDownOnPassCOROUTINE$18;
  $waitForUpOrCancellationCOROUTINE$21.prototype = Object.create(CoroutineImpl.prototype);
  $waitForUpOrCancellationCOROUTINE$21.prototype.constructor = $waitForUpOrCancellationCOROUTINE$21;
  $consumeUntilUpCOROUTINE$22.prototype = Object.create(CoroutineImpl.prototype);
  $consumeUntilUpCOROUTINE$22.prototype.constructor = $consumeUntilUpCOROUTINE$22;
  collectIsFocusedAsState$composable$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  collectIsFocusedAsState$composable$slambda$slambda.prototype.constructor = collectIsFocusedAsState$composable$slambda$slambda;
  collectIsFocusedAsState$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  collectIsFocusedAsState$composable$slambda.prototype.constructor = collectIsFocusedAsState$composable$slambda;
  collectIsHoveredAsState$composable$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  collectIsHoveredAsState$composable$slambda$slambda.prototype.constructor = collectIsHoveredAsState$composable$slambda$slambda;
  collectIsHoveredAsState$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  collectIsHoveredAsState$composable$slambda.prototype.constructor = collectIsHoveredAsState$composable$slambda;
  collectIsPressedAsState$composable$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  collectIsPressedAsState$composable$slambda$slambda.prototype.constructor = collectIsPressedAsState$composable$slambda$slambda;
  collectIsPressedAsState$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  collectIsPressedAsState$composable$slambda.prototype.constructor = collectIsPressedAsState$composable$slambda;
  function bringIntoView$default(rect, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      rect = null;
    return $handler == null ? this.bringIntoView_1hpn7x_k$(rect, $cont) : $handler(rect, $cont);
  }
  $bringIntoViewCOROUTINE$23.prototype = Object.create(CoroutineImpl.prototype);
  $bringIntoViewCOROUTINE$23.prototype.constructor = $bringIntoViewCOROUTINE$23;
  BringIntoViewRequesterModifier.prototype = Object.create(BringIntoViewChildModifier.prototype);
  BringIntoViewRequesterModifier.prototype.constructor = BringIntoViewRequesterModifier;
  RoundedCornerShape.prototype = Object.create(CornerBasedShape.prototype);
  RoundedCornerShape.prototype.constructor = RoundedCornerShape;
  TextController$update$slambda.prototype = Object.create(CoroutineImpl.prototype);
  TextController$update$slambda.prototype.constructor = TextController$update$slambda;
  TextController$update$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  TextController$update$lambda$slambda.prototype.constructor = TextController$update$lambda$slambda;
  Handle.prototype = Object.create(Enum.prototype);
  Handle.prototype.constructor = Handle;
  KeyCommand.prototype = Object.create(Enum.prototype);
  KeyCommand.prototype.constructor = KeyCommand;
  function updateSelection$default(startHandlePosition, endHandlePosition, previousHandlePosition, isStartHandle, containerLayoutCoordinates, adjustment, previousSelection, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      isStartHandle = true;
    if (!(($mask0 & 64) === 0))
      previousSelection = null;
    var tmp;
    if ($handler == null) {
      tmp = this.updateSelection_xe1zkm_k$(startHandlePosition, endHandlePosition, previousHandlePosition, isStartHandle, containerLayoutCoordinates, adjustment, previousSelection);
    } else {
      var tmp_0 = new Offset_0(startHandlePosition);
      var tmp_1 = new Offset_0(endHandlePosition);
      var tmp_2 = previousHandlePosition;
      tmp = $handler(tmp_0, tmp_1, tmp_2 == null ? null : new Offset_0(tmp_2), isStartHandle, containerLayoutCoordinates, adjustment, previousSelection);
    }
    return tmp;
  }
  function getLineHeight(offset) {
    return 0.0;
  }
  SelectionMode.prototype = Object.create(Enum.prototype);
  SelectionMode.prototype.constructor = SelectionMode;
  SelectionMode$Vertical.prototype = Object.create(SelectionMode.prototype);
  SelectionMode$Vertical.prototype.constructor = SelectionMode$Vertical;
  SelectionMode$Horizontal.prototype = Object.create(SelectionMode.prototype);
  SelectionMode$Horizontal.prototype.constructor = SelectionMode$Horizontal;
  mouseSelectionDetector$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  mouseSelectionDetector$slambda$slambda.prototype.constructor = mouseSelectionDetector$slambda$slambda;
  mouseSelectionDetector$slambda.prototype = Object.create(CoroutineImpl.prototype);
  mouseSelectionDetector$slambda.prototype.constructor = mouseSelectionDetector$slambda;
  $awaitMouseEventDownCOROUTINE$24.prototype = Object.create(CoroutineImpl.prototype);
  $awaitMouseEventDownCOROUTINE$24.prototype.constructor = $awaitMouseEventDownCOROUTINE$24;
  rememberDefaultBringIntoViewParent$composable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  rememberDefaultBringIntoViewParent$composable$slambda.prototype.constructor = rememberDefaultBringIntoViewParent$composable$slambda;
  //endregion
  function background(_this__u8e3s4, color, shape) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = background$lambda(color, shape);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    return _this__u8e3s4.then_5qw5wu_k$(Background_init_$Create$(color, null, 0.0, shape, tmp$ret$0, 6, null));
  }
  function background$default(_this__u8e3s4, color, shape, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      shape = get_RectangleShape();
    return background(_this__u8e3s4, color, shape);
  }
  function Background_init_$Init$(color, brush, alpha, shape, inspectorInfo, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      color = null;
    if (!(($mask0 & 2) === 0))
      brush = null;
    if (!(($mask0 & 4) === 0))
      alpha = 1.0;
    Background.call($this, color, brush, alpha, shape, inspectorInfo);
    return $this;
  }
  function Background_init_$Create$(color, brush, alpha, shape, inspectorInfo, $mask0, $marker) {
    return Background_init_$Init$(color, brush, alpha, shape, inspectorInfo, $mask0, $marker, Object.create(Background.prototype));
  }
  function _get_color__iw9cfm($this) {
    return $this.color_1;
  }
  function _get_brush__jbhrft($this) {
    return $this.brush_1;
  }
  function _get_alpha__jvxknh($this) {
    return $this.alpha_1;
  }
  function _get_shape__bfkypc($this) {
    return $this.shape_1;
  }
  function _set_lastSize__m2whs($this, _set____db54di) {
    $this.lastSize_1 = _set____db54di;
  }
  function _get_lastSize__dez7yk($this) {
    return $this.lastSize_1;
  }
  function _set_lastLayoutDirection__cwde6y($this, _set____db54di) {
    $this.lastLayoutDirection_1 = _set____db54di;
  }
  function _get_lastLayoutDirection__ecupe($this) {
    return $this.lastLayoutDirection_1;
  }
  function _set_lastOutline__uahd8n($this, _set____db54di) {
    $this.lastOutline_1 = _set____db54di;
  }
  function _get_lastOutline__36wr($this) {
    return $this.lastOutline_1;
  }
  function drawRect(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = $this.color_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new Color(tmp)) == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.drawRect$default_xwjj6g_k$(tmp0_safe_receiver, null, null, 0.0, null, null, null, 126, null);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = $this.brush_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.drawRect$default_3hujnj_k$(tmp1_safe_receiver, null, null, $this.alpha_1, null, null, null, 118, null);
      tmp$ret$1 = Unit_getInstance();
    }
  }
  function drawOutline(_this__u8e3s4, $this) {
    var tmp;
    var tmp_0;
    var tmp_1 = new Size(_this__u8e3s4.get_size_x9ctfw_k$());
    var tmp_2 = $this.lastSize_1;
    if (equals(tmp_1, tmp_2 == null ? null : new Size(tmp_2))) {
      tmp_0 = _this__u8e3s4.get_layoutDirection_7e37v0_k$().equals($this.lastLayoutDirection_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = ensureNotNull($this.lastOutline_1);
    } else {
      tmp = $this.shape_1.createOutline_p92zi6_k$(_this__u8e3s4.get_size_x9ctfw_k$(), _this__u8e3s4.get_layoutDirection_7e37v0_k$(), _this__u8e3s4);
    }
    var outline = tmp;
    var tmp0_safe_receiver = $this.color_1;
    var tmp_3 = tmp0_safe_receiver;
    if ((tmp_3 == null ? null : new Color(tmp_3)) == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      drawOutline$default(_this__u8e3s4, outline, $this.color_1, 0.0, null, null, null, 60, null);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = $this.brush_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      drawOutline$default_0(_this__u8e3s4, outline, $this.brush_1, $this.alpha_1, null, null, null, 56, null);
      tmp$ret$1 = Unit_getInstance();
    }
    $this.lastOutline_1 = outline;
    $this.lastSize_1 = _this__u8e3s4.get_size_x9ctfw_k$();
    $this.lastLayoutDirection_1 = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
  }
  function Background(color, brush, alpha, shape, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.color_1 = color;
    this.brush_1 = brush;
    this.alpha_1 = alpha;
    this.shape_1 = shape;
    this.lastSize_1 = null;
    this.lastLayoutDirection_1 = null;
    this.lastOutline_1 = null;
  }
  Background.prototype.draw_j25tpb_k$ = function (_this__u8e3s4) {
    if (this.shape_1 === get_RectangleShape()) {
      drawRect(_this__u8e3s4, this);
    } else {
      drawOutline(_this__u8e3s4, this);
    }
    _this__u8e3s4.drawContent_m0d3yc_k$();
  };
  Background.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.color_1;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new Color(tmp_0)) == null) {
      tmp = null;
    } else {
      tmp = Color__hashCode_impl_vjyivj(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.brush_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.alpha_1) | 0;
    result = imul(31, result) + hashCode(this.shape_1) | 0;
    return result;
  };
  Background.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof Background ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3 = this.color_1;
    var tmp_4 = tmp_3 == null ? null : new Color(tmp_3);
    var tmp_5 = otherModifier.color_1;
    if (equals(tmp_4, tmp_5 == null ? null : new Color(tmp_5))) {
      tmp_2 = equals(this.brush_1, otherModifier.brush_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.alpha_1 === otherModifier.alpha_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(this.shape_1, otherModifier.shape_1);
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  Background.prototype.toString = function () {
    var tmp = this.color_1;
    return 'Background(color=' + (tmp == null ? null : new Color(tmp)) + ', brush=' + this.brush_1 + ', alpha = ' + this.alpha_1 + ', shape=' + this.shape_1 + ')';
  };
  Background.$metadata$ = classMeta('Background', [DrawModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function background$lambda($color, $shape) {
    return function ($this$null) {
      $this$null.name_1 = 'background';
      $this$null.value_1 = new Color($color);
      $this$null.properties_1.set_y753qn_k$('color', new Color($color));
      $this$null.properties_1.set_y753qn_k$('shape', $shape);
      return Unit_getInstance();
    };
  }
  function border(_this__u8e3s4, border, shape) {
    return border_0(_this__u8e3s4, border.width_1, border.brush_1, shape);
  }
  function border$default(_this__u8e3s4, border_0, shape, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      shape = get_RectangleShape();
    return border(_this__u8e3s4, border_0, shape);
  }
  function border_0(_this__u8e3s4, width, brush, shape) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = border$lambda(width, brush, shape);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp0_inspectorInfo = tmp$ret$0;
    return composed$composable(_this__u8e3s4, tmp0_inspectorInfo, border$lambda_0(width, shape, brush));
  }
  function BorderCache_init_$Init$(imageBitmap, canvas, canvasDrawScope, borderPath, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      imageBitmap = null;
    if (!(($mask0 & 2) === 0))
      canvas = null;
    if (!(($mask0 & 4) === 0))
      canvasDrawScope = null;
    if (!(($mask0 & 8) === 0))
      borderPath = null;
    BorderCache.call($this, imageBitmap, canvas, canvasDrawScope, borderPath);
    return $this;
  }
  function BorderCache_init_$Create$(imageBitmap, canvas, canvasDrawScope, borderPath, $mask0, $marker) {
    return BorderCache_init_$Init$(imageBitmap, canvas, canvasDrawScope, borderPath, $mask0, $marker, Object.create(BorderCache.prototype));
  }
  function _set_imageBitmap__59o72z($this, _set____db54di) {
    $this.imageBitmap_1 = _set____db54di;
  }
  function _get_imageBitmap__zh1ok9($this) {
    return $this.imageBitmap_1;
  }
  function _set_canvas__plaszl($this, _set____db54di) {
    $this.canvas_1 = _set____db54di;
  }
  function _get_canvas__o4k8ct($this) {
    return $this.canvas_1;
  }
  function _set_canvasDrawScope__6hen3n($this, _set____db54di) {
    $this.canvasDrawScope_1 = _set____db54di;
  }
  function _get_canvasDrawScope__3mbkex($this) {
    return $this.canvasDrawScope_1;
  }
  function _set_borderPath__3zk3ay($this, _set____db54di) {
    $this.borderPath_1 = _set____db54di;
  }
  function _get_borderPath__j1sog6($this) {
    return $this.borderPath_1;
  }
  function component1($this) {
    return $this.imageBitmap_1;
  }
  function component2($this) {
    return $this.canvas_1;
  }
  function component3($this) {
    return $this.canvasDrawScope_1;
  }
  function component4($this) {
    return $this.borderPath_1;
  }
  function BorderCache(imageBitmap, canvas, canvasDrawScope, borderPath) {
    this.imageBitmap_1 = imageBitmap;
    this.canvas_1 = canvas;
    this.canvasDrawScope_1 = canvasDrawScope;
    this.borderPath_1 = borderPath;
  }
  BorderCache.prototype.drawBorderCache_wsnl8j_k$ = function (_this__u8e3s4, borderSize, config, block) {
    var targetImageBitmap = this.imageBitmap_1;
    var targetCanvas = this.canvas_1;
    var tmp;
    var tmp0_safe_receiver = targetImageBitmap;
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_config_df1eav_k$();
    if (equals(tmp_0 == null ? null : new ImageBitmapConfig(tmp_0), new ImageBitmapConfig(Companion_getInstance().Argb8888__1))) {
      tmp = true;
    } else {
      var tmp_1 = new ImageBitmapConfig(config);
      var tmp1_safe_receiver = targetImageBitmap;
      var tmp_2 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_config_df1eav_k$();
      tmp = equals(tmp_1, tmp_2 == null ? null : new ImageBitmapConfig(tmp_2));
    }
    var compatibleConfig = tmp;
    if ((((targetImageBitmap == null ? true : targetCanvas == null) ? true : _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_x9ctfw_k$()) > targetImageBitmap.get_width_j0q4yl_k$()) ? true : _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_x9ctfw_k$()) > targetImageBitmap.get_height_e7t92o_k$()) ? true : !compatibleConfig) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp_3 = _IntSize___get_width__impl__d9yl4o(borderSize);
      var tmp_4 = _IntSize___get_height__impl__prv63b(borderSize);
      var tmp0_also = ImageBitmap$default(tmp_3, tmp_4, config, false, null, 24, null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      this.imageBitmap_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      targetImageBitmap = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp1_also = Canvas(targetImageBitmap);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      this.canvas_1 = tmp1_also;
      tmp$ret$1 = tmp1_also;
      targetCanvas = tmp$ret$1;
    }
    var tmp2_elvis_lhs = this.canvasDrawScope_1;
    var tmp_5;
    if (tmp2_elvis_lhs == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp2_also = new CanvasDrawScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      this.canvasDrawScope_1 = tmp2_also;
      tmp$ret$2 = tmp2_also;
      tmp_5 = tmp$ret$2;
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var targetDrawScope = tmp_5;
    var drawSize = toSize(borderSize);
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
    var tmp3_draw = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
    var tmp4_draw = targetCanvas;
    var tmp0_container = targetDrawScope.drawParams_1;
    var prevDensity = tmp0_container.component1_7eebsc_k$();
    var prevLayoutDirection = tmp0_container.component2_7eebsb_k$();
    var prevCanvas = tmp0_container.component3_7eebsa_k$();
    var prevSize = tmp0_container.component4_e3pqs9_k$();
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = targetDrawScope.drawParams_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp0_apply.density_1 = _this__u8e3s4;
    tmp0_apply.layoutDirection_1 = tmp3_draw;
    tmp0_apply.canvas_1 = tmp4_draw;
    tmp0_apply.size_1 = drawSize;
    tmp$ret$3 = tmp0_apply;
    tmp4_draw.save_erlm4_k$();
    // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
    var tmp_6 = Companion_getInstance_0().Black_1;
    targetDrawScope.drawRect$default_xwjj6g_k$(tmp_6, null, drawSize, 0.0, null, null, Companion_getInstance_1().Clear_1, 58, null);
    block(targetDrawScope);
    tmp4_draw.restore_a2id37_k$();
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp1_apply = targetDrawScope.drawParams_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp1_apply.density_1 = prevDensity;
    tmp1_apply.layoutDirection_1 = prevLayoutDirection;
    tmp1_apply.canvas_1 = prevCanvas;
    tmp1_apply.size_1 = prevSize;
    tmp$ret$4 = tmp1_apply;
    targetImageBitmap.prepareToDraw_sbmxaj_k$();
    return targetImageBitmap;
  };
  BorderCache.prototype.obtainPath_y7q9hy_k$ = function () {
    var tmp0_elvis_lhs = this.borderPath_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = Path();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.obtainPath.<anonymous>' call
      this.borderPath_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  BorderCache.prototype.copy_xq3glk_k$ = function (imageBitmap, canvas, canvasDrawScope, borderPath) {
    return new BorderCache(imageBitmap, canvas, canvasDrawScope, borderPath);
  };
  BorderCache.prototype.copy$default_mxtokz_k$ = function (imageBitmap, canvas, canvasDrawScope, borderPath, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      imageBitmap = this.imageBitmap_1;
    if (!(($mask0 & 2) === 0))
      canvas = this.canvas_1;
    if (!(($mask0 & 4) === 0))
      canvasDrawScope = this.canvasDrawScope_1;
    if (!(($mask0 & 8) === 0))
      borderPath = this.borderPath_1;
    return this.copy_xq3glk_k$(imageBitmap, canvas, canvasDrawScope, borderPath);
  };
  BorderCache.prototype.toString = function () {
    return 'BorderCache(imageBitmap=' + this.imageBitmap_1 + ', canvas=' + this.canvas_1 + ', canvasDrawScope=' + this.canvasDrawScope_1 + ', borderPath=' + this.borderPath_1 + ')';
  };
  BorderCache.prototype.hashCode = function () {
    var result = this.imageBitmap_1 == null ? 0 : hashCode(this.imageBitmap_1);
    result = imul(result, 31) + (this.canvas_1 == null ? 0 : hashCode(this.canvas_1)) | 0;
    result = imul(result, 31) + (this.canvasDrawScope_1 == null ? 0 : hashCode(this.canvasDrawScope_1)) | 0;
    result = imul(result, 31) + (this.borderPath_1 == null ? 0 : hashCode(this.borderPath_1)) | 0;
    return result;
  };
  BorderCache.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderCache))
      return false;
    var tmp0_other_with_cast = other instanceof BorderCache ? other : THROW_CCE();
    if (!equals(this.imageBitmap_1, tmp0_other_with_cast.imageBitmap_1))
      return false;
    if (!equals(this.canvas_1, tmp0_other_with_cast.canvas_1))
      return false;
    if (!equals(this.canvasDrawScope_1, tmp0_other_with_cast.canvasDrawScope_1))
      return false;
    if (!equals(this.borderPath_1, tmp0_other_with_cast.borderPath_1))
      return false;
    return true;
  };
  BorderCache.$metadata$ = classMeta('BorderCache');
  function drawContentWithoutBorder(_this__u8e3s4) {
    return _this__u8e3s4.onDrawWithContent_ido9k5_k$(drawContentWithoutBorder$lambda);
  }
  function drawGenericBorder(_this__u8e3s4, borderCacheRef, brush, outline, fillArea, strokeWidth) {
    var tmp;
    if (fillArea) {
      tmp = _this__u8e3s4.onDrawWithContent_ido9k5_k$(drawGenericBorder$lambda(outline, brush));
    } else {
      var config;
      var colorFilter;
      if (brush instanceof SolidColor) {
        config = Companion_getInstance().Alpha8__1;
        var tmp_0 = Companion_getInstance_2();
        colorFilter = tmp_0.tint$default_1preek_k$(brush.value_1, null, 2, null);
      } else {
        config = Companion_getInstance().Argb8888__1;
        colorFilter = null;
      }
      var pathBounds = outline.path_1.getBounds_568lnv_k$();
      var borderCache = obtain(borderCacheRef);
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = borderCache.obtainPath_y7q9hy_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.drawGenericBorder.<anonymous>' call
      tmp0_apply.reset_5tn5dq_k$();
      tmp0_apply.addRect_xu2nic_k$(pathBounds);
      tmp0_apply.op_eh4rey_k$(tmp0_apply, outline.path_1, Companion_getInstance_3().Difference_1);
      tmp$ret$0 = tmp0_apply;
      var maskPath = tmp$ret$0;
      var cacheImageBitmap;
      var tmp$ret$1;
      // Inline function 'kotlin.math.ceil' call
      var tmp1_ceil = pathBounds.get_width_j0q4yl_k$();
      tmp$ret$1 = Math.ceil(tmp1_ceil);
      var tmp_1 = numberToInt(tmp$ret$1);
      var tmp$ret$2;
      // Inline function 'kotlin.math.ceil' call
      var tmp2_ceil = pathBounds.get_height_e7t92o_k$();
      tmp$ret$2 = Math.ceil(tmp2_ceil);
      var pathBoundsSize = IntSize(tmp_1, numberToInt(tmp$ret$2));
      var tmp$ret$12;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache' call
      var targetImageBitmap = borderCache.imageBitmap_1;
      var targetCanvas = borderCache.canvas_1;
      var tmp_2;
      var tmp0_safe_receiver = targetImageBitmap;
      var tmp_3 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_config_df1eav_k$();
      if (equals(tmp_3 == null ? null : new ImageBitmapConfig(tmp_3), new ImageBitmapConfig(Companion_getInstance().Argb8888__1))) {
        tmp_2 = true;
      } else {
        var tmp_4 = new ImageBitmapConfig(config);
        var tmp1_safe_receiver = targetImageBitmap;
        var tmp_5 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_config_df1eav_k$();
        tmp_2 = equals(tmp_4, tmp_5 == null ? null : new ImageBitmapConfig(tmp_5));
      }
      var compatibleConfig = tmp_2;
      if ((((targetImageBitmap == null ? true : targetCanvas == null) ? true : _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_x9ctfw_k$()) > targetImageBitmap.get_width_j0q4yl_k$()) ? true : _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_x9ctfw_k$()) > targetImageBitmap.get_height_e7t92o_k$()) ? true : !compatibleConfig) {
        var tmp$ret$3;
        // Inline function 'kotlin.also' call
        var tmp_6 = _IntSize___get_width__impl__d9yl4o(pathBoundsSize);
        var tmp_7 = _IntSize___get_height__impl__prv63b(pathBoundsSize);
        var tmp0_also = ImageBitmap$default(tmp_6, tmp_7, config, false, null, 24, null);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        borderCache.imageBitmap_1 = tmp0_also;
        tmp$ret$3 = tmp0_also;
        targetImageBitmap = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.also' call
        var tmp1_also = Canvas(targetImageBitmap);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        borderCache.canvas_1 = tmp1_also;
        tmp$ret$4 = tmp1_also;
        targetCanvas = tmp$ret$4;
      }
      var tmp2_elvis_lhs = borderCache.canvasDrawScope_1;
      var tmp_8;
      if (tmp2_elvis_lhs == null) {
        var tmp$ret$5;
        // Inline function 'kotlin.also' call
        var tmp2_also = new CanvasDrawScope();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        borderCache.canvasDrawScope_1 = tmp2_also;
        tmp$ret$5 = tmp2_also;
        tmp_8 = tmp$ret$5;
      } else {
        tmp_8 = tmp2_elvis_lhs;
      }
      var targetDrawScope = tmp_8;
      var drawSize = toSize(pathBoundsSize);
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
      var tmp3_draw = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
      var tmp4_draw = targetCanvas;
      var tmp0_container = targetDrawScope.drawParams_1;
      var prevDensity = tmp0_container.component1_7eebsc_k$();
      var prevLayoutDirection = tmp0_container.component2_7eebsb_k$();
      var prevCanvas = tmp0_container.component3_7eebsa_k$();
      var prevSize = tmp0_container.component4_e3pqs9_k$();
      var tmp$ret$6;
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = targetDrawScope.drawParams_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
      tmp0_apply_0.density_1 = _this__u8e3s4;
      tmp0_apply_0.layoutDirection_1 = tmp3_draw;
      tmp0_apply_0.canvas_1 = tmp4_draw;
      tmp0_apply_0.size_1 = drawSize;
      tmp$ret$6 = tmp0_apply_0;
      tmp4_draw.save_erlm4_k$();
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      var tmp_9 = Companion_getInstance_0().Black_1;
      targetDrawScope.drawRect$default_xwjj6g_k$(tmp_9, null, drawSize, 0.0, null, null, Companion_getInstance_1().Clear_1, 58, null);
      // Inline function 'androidx.compose.foundation.drawGenericBorder.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      var tmp0_translate = -pathBounds.left_1;
      var tmp1_translate = -pathBounds.top_1;
      targetDrawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_62wf99_k$(tmp0_translate, tmp1_translate);
      // Inline function 'androidx.compose.foundation.drawGenericBorder.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_10 = strokeWidth * 2;
      var tmp_11 = Stroke_init_$Create$(tmp_10, 0.0, null, null, null, 30, null);
      targetDrawScope.drawPath$default_delt9g_k$(outline.path_1, brush, 0.0, tmp_11, null, null, 52, null);
      var tmp$ret$9;
      // Inline function 'androidx.compose.ui.graphics.drawscope.scale' call
      var tmp0_scale = (_Size___get_width__impl__58y75t(targetDrawScope.get_size_x9ctfw_k$()) + 1) / _Size___get_width__impl__58y75t(targetDrawScope.get_size_x9ctfw_k$());
      var tmp1_scale = (_Size___get_height__impl__a04p02(targetDrawScope.get_size_x9ctfw_k$()) + 1) / _Size___get_height__impl__a04p02(targetDrawScope.get_size_x9ctfw_k$());
      var tmp2_scale = targetDrawScope.get_center_568eeq_k$();
      var tmp$ret$8;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      var tmp$ret$7;
      // Inline function 'kotlin.with' call
      var tmp0_with = targetDrawScope.get_drawContext_ffwztu_k$();
      // Inline function 'kotlin.contracts.contract' call
      var previousSize = tmp0_with.get_size_x9ctfw_k$();
      tmp0_with.get_canvas_bshgm9_k$().save_erlm4_k$();
      // Inline function 'androidx.compose.ui.graphics.drawscope.scale.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_with.get_transform_px941v_k$();
      tmp1__anonymous__uwfjfc.scale_qp5ya8_k$(tmp0_scale, tmp1_scale, tmp2_scale);
      // Inline function 'androidx.compose.foundation.drawGenericBorder.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      targetDrawScope.drawPath$default_delt9g_k$(maskPath, brush, 0.0, null, null, Companion_getInstance_1().Clear_1, 28, null);
      tmp0_with.get_canvas_bshgm9_k$().restore_a2id37_k$();
      tmp0_with.set_size_xj1bzm_k$(previousSize);
      tmp$ret$7 = Unit_getInstance();
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      targetDrawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_62wf99_k$(-tmp0_translate, -tmp1_translate);
      tmp4_draw.restore_a2id37_k$();
      var tmp$ret$10;
      // Inline function 'kotlin.apply' call
      var tmp1_apply = targetDrawScope.drawParams_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
      tmp1_apply.density_1 = prevDensity;
      tmp1_apply.layoutDirection_1 = prevLayoutDirection;
      tmp1_apply.canvas_1 = prevCanvas;
      tmp1_apply.size_1 = prevSize;
      tmp$ret$10 = tmp1_apply;
      targetImageBitmap.prepareToDraw_sbmxaj_k$();
      tmp$ret$11 = targetImageBitmap;
      cacheImageBitmap = tmp$ret$11;
      tmp$ret$12 = Unit_getInstance();
      tmp = _this__u8e3s4.onDrawWithContent_ido9k5_k$(drawGenericBorder$lambda_0(pathBounds, cacheImageBitmap, pathBoundsSize, colorFilter));
    }
    return tmp;
  }
  function drawRoundRectBorder(_this__u8e3s4, borderCacheRef, brush, outline, topLeft, borderSize, fillArea, strokeWidth) {
    var tmp;
    if (get_isSimple(outline.roundRect_1)) {
      var cornerRadius = outline.roundRect_1.topLeftCornerRadius_1;
      var halfStroke = strokeWidth / 2;
      var borderStroke = Stroke_init_$Create$(strokeWidth, 0.0, null, null, null, 30, null);
      tmp = _this__u8e3s4.onDrawWithContent_ido9k5_k$(drawRoundRectBorder$lambda(fillArea, brush, cornerRadius, halfStroke, strokeWidth, topLeft, borderSize, borderStroke));
    } else {
      var path = obtain(borderCacheRef).obtainPath_y7q9hy_k$();
      var roundedRectPath = createRoundRectPath(path, outline.roundRect_1, strokeWidth, fillArea);
      tmp = _this__u8e3s4.onDrawWithContent_ido9k5_k$(drawRoundRectBorder$lambda_0(roundedRectPath, brush));
    }
    return tmp;
  }
  function drawRectBorder(_this__u8e3s4, brush, topLeft, borderSize, fillArea, strokeWidthPx) {
    var rectTopLeft = fillArea ? Companion_getInstance_4().Zero_1 : topLeft;
    var size = fillArea ? _this__u8e3s4.get_size_x9ctfw_k$() : borderSize;
    var tmp;
    if (fillArea) {
      tmp = Fill_getInstance();
    } else {
      tmp = Stroke_init_$Create$(strokeWidthPx, 0.0, null, null, null, 30, null);
    }
    var style = tmp;
    return _this__u8e3s4.onDrawWithContent_ido9k5_k$(drawRectBorder$lambda(brush, rectTopLeft, size, style));
  }
  function obtain(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.value_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = BorderCache_init_$Create$(null, null, null, null, 15, null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.obtain.<anonymous>' call
      _this__u8e3s4.value_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function shrink(_this__u8e3s4, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4) - value;
    tmp$ret$0 = Math.max(0.0, tmp0_max);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.max' call
    var tmp1_max = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4) - value;
    tmp$ret$1 = Math.max(0.0, tmp1_max);
    return CornerRadius(tmp, tmp$ret$1);
  }
  function createRoundRectPath(targetPath, roundedRect, strokeWidth, fillArea) {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.createRoundRectPath.<anonymous>' call
    targetPath.reset_5tn5dq_k$();
    targetPath.addRoundRect_kr3fpw_k$(roundedRect);
    if (!fillArea) {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Path();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.createRoundRectPath.<anonymous>.<anonymous>' call
      tmp0_apply.addRoundRect_kr3fpw_k$(createInsetRoundedRect(strokeWidth, roundedRect));
      tmp$ret$0 = tmp0_apply;
      var insetPath = tmp$ret$0;
      targetPath.op_eh4rey_k$(targetPath, insetPath, Companion_getInstance_3().Difference_1);
    }
    tmp$ret$1 = targetPath;
    return tmp$ret$1;
  }
  function createInsetRoundedRect(widthPx, roundedRect) {
    var tmp0_right = roundedRect.get_width_j0q4yl_k$() - widthPx;
    var tmp1_bottom = roundedRect.get_height_e7t92o_k$() - widthPx;
    var tmp2_topLeftCornerRadius = shrink(roundedRect.topLeftCornerRadius_1, widthPx);
    var tmp3_topRightCornerRadius = shrink(roundedRect.topRightCornerRadius_1, widthPx);
    var tmp4_bottomLeftCornerRadius = shrink(roundedRect.bottomLeftCornerRadius_1, widthPx);
    var tmp5_bottomRightCornerRadius = shrink(roundedRect.bottomRightCornerRadius_1, widthPx);
    return new RoundRect(widthPx, widthPx, tmp0_right, tmp1_bottom, tmp2_topLeftCornerRadius, tmp3_topRightCornerRadius, tmp5_bottomRightCornerRadius, tmp4_bottomLeftCornerRadius);
  }
  function border$lambda($width, $brush, $shape) {
    return function ($this$null) {
      $this$null.name_1 = 'border';
      $this$null.properties_1.set_y753qn_k$('width', new Dp($width));
      if ($brush instanceof SolidColor) {
        $this$null.properties_1.set_y753qn_k$('color', new Color($brush.value_1));
        $this$null.value_1 = new Color($brush.value_1);
      } else {
        $this$null.properties_1.set_y753qn_k$('brush', $brush);
      }
      $this$null.properties_1.set_y753qn_k$('shape', $shape);
      return Unit_getInstance();
    };
  }
  function border$lambda$lambda($width, $shape, $borderCacheRef, $brush) {
    return function ($this$drawWithCache) {
      var hasValidBorderParams = $this$drawWithCache.toPx_u0ojv5_k$($width) >= 0.0 ? _Size___get_minDimension__impl__4iso0r($this$drawWithCache.get_size_x9ctfw_k$()) > 0.0 : false;
      var tmp;
      if (!hasValidBorderParams) {
        tmp = drawContentWithoutBorder($this$drawWithCache);
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.math.min' call
        var tmp_0;
        if (equals($width, Companion_getInstance_5().Hairline_1)) {
          tmp_0 = 1.0;
        } else {
          var tmp$ret$0;
          // Inline function 'kotlin.math.ceil' call
          var tmp0_ceil = $this$drawWithCache.toPx_u0ojv5_k$($width);
          tmp$ret$0 = Math.ceil(tmp0_ceil);
          tmp_0 = tmp$ret$0;
        }
        var tmp2_min = tmp_0;
        var tmp$ret$1;
        // Inline function 'kotlin.math.ceil' call
        var tmp1_ceil = _Size___get_minDimension__impl__4iso0r($this$drawWithCache.get_size_x9ctfw_k$()) / 2;
        tmp$ret$1 = Math.ceil(tmp1_ceil);
        var tmp3_min = tmp$ret$1;
        tmp$ret$2 = Math.min(tmp2_min, tmp3_min);
        var strokeWidthPx = tmp$ret$2;
        var halfStroke = strokeWidthPx / 2;
        var topLeft = Offset(halfStroke, halfStroke);
        var borderSize = Size_0(_Size___get_width__impl__58y75t($this$drawWithCache.get_size_x9ctfw_k$()) - strokeWidthPx, _Size___get_height__impl__a04p02($this$drawWithCache.get_size_x9ctfw_k$()) - strokeWidthPx);
        var fillArea = strokeWidthPx * 2 > _Size___get_minDimension__impl__4iso0r($this$drawWithCache.get_size_x9ctfw_k$());
        var outline = $shape.createOutline_p92zi6_k$($this$drawWithCache.get_size_x9ctfw_k$(), $this$drawWithCache.get_layoutDirection_7e37v0_k$(), $this$drawWithCache);
        var tmp_1;
        if (outline instanceof Generic) {
          tmp_1 = drawGenericBorder($this$drawWithCache, $borderCacheRef, $brush, outline, fillArea, strokeWidthPx);
        } else {
          if (outline instanceof Rounded) {
            tmp_1 = drawRoundRectBorder($this$drawWithCache, $borderCacheRef, $brush, outline, topLeft, borderSize, fillArea, strokeWidthPx);
          } else {
            if (outline instanceof Rectangle) {
              tmp_1 = drawRectBorder($this$drawWithCache, $brush, topLeft, borderSize, fillArea, strokeWidthPx);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
        tmp = tmp_1;
      }
      return tmp;
    };
  }
  function border$lambda_0($width, $shape, $brush) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(-1498088849);
      sourceInformation($composer_0, 'C97@4024L31:Border.kt#71ulvw');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1498088849, $changed, -1, 'androidx.compose.foundation.border.<anonymous> (Border.kt:93)');
        tmp = Unit_getInstance();
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
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.border.<anonymous>.<anonymous>' call
        tmp$ret$0 = new Ref();
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
      var borderCacheRef = tmp$ret$4;
      var tmp_2 = Companion_getInstance_7();
      var tmp0_0 = $this$composed.then_5qw5wu_k$(drawWithCache(tmp_2, border$lambda$lambda($width, $shape, borderCacheRef, $brush)));
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0_0;
    };
  }
  function drawContentWithoutBorder$lambda($this$onDrawWithContent) {
    $this$onDrawWithContent.drawContent_m0d3yc_k$();
    return Unit_getInstance();
  }
  function drawGenericBorder$lambda($outline, $brush) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0d3yc_k$();
      $this$onDrawWithContent.drawPath$default_delt9g_k$($outline.path_1, $brush, 0.0, null, null, null, 60, null);
      return Unit_getInstance();
    };
  }
  function drawGenericBorder$lambda_0($pathBounds, $cacheImageBitmap, $pathBoundsSize, $colorFilter) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0d3yc_k$();
      var tmp0_translate = $pathBounds.left_1;
      var tmp1_translate = $pathBounds.top_1;
      $this$onDrawWithContent.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_62wf99_k$(tmp0_translate, tmp1_translate);
      // Inline function 'androidx.compose.foundation.drawGenericBorder.<anonymous>.<anonymous>' call
      $this$onDrawWithContent.drawImage$default_9i1j05_k$($cacheImageBitmap, null, $pathBoundsSize, null, null, 0.0, null, $colorFilter, null, null, 890, null);
      $this$onDrawWithContent.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_62wf99_k$(-tmp0_translate, -tmp1_translate);
      return Unit_getInstance();
    };
  }
  function drawRoundRectBorder$lambda($fillArea, $brush, $cornerRadius, $halfStroke, $strokeWidth, $topLeft, $borderSize, $borderStroke) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0d3yc_k$();
      var tmp;
      if ($fillArea) {
        $this$onDrawWithContent.drawRoundRect$default_jt4nwh_k$($brush, null, null, $cornerRadius, 0.0, null, null, null, 246, null);
        tmp = Unit_getInstance();
      } else if (_CornerRadius___get_x__impl__1594cn($cornerRadius) < $halfStroke) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var tmp0_clipRect = _Size___get_width__impl__58y75t($this$onDrawWithContent.get_size_x9ctfw_k$()) - $strokeWidth;
        var tmp1_clipRect = _Size___get_height__impl__a04p02($this$onDrawWithContent.get_size_x9ctfw_k$()) - $strokeWidth;
        var tmp2_clipRect = Companion_getInstance_8().Difference_1;
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = $this$onDrawWithContent.get_drawContext_ffwztu_k$();
        // Inline function 'kotlin.contracts.contract' call
        var previousSize = tmp0_with.get_size_x9ctfw_k$();
        tmp0_with.get_canvas_bshgm9_k$().save_erlm4_k$();
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tmp0_with.get_transform_px941v_k$();
        tmp0__anonymous__q1qw7t.clipRect_si0ig1_k$($strokeWidth, $strokeWidth, tmp0_clipRect, tmp1_clipRect, tmp2_clipRect);
        // Inline function 'androidx.compose.foundation.drawRoundRectBorder.<anonymous>.<anonymous>' call
        $this$onDrawWithContent.drawRoundRect$default_jt4nwh_k$($brush, null, null, $cornerRadius, 0.0, null, null, null, 246, null);
        tmp0_with.get_canvas_bshgm9_k$().restore_a2id37_k$();
        tmp0_with.set_size_xj1bzm_k$(previousSize);
        tmp$ret$0 = Unit_getInstance();
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } else {
        var tmp_0 = shrink($cornerRadius, $halfStroke);
        $this$onDrawWithContent.drawRoundRect$default_jt4nwh_k$($brush, $topLeft, $borderSize, tmp_0, 0.0, $borderStroke, null, null, 208, null);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function drawRoundRectBorder$lambda_0($roundedRectPath, $brush) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0d3yc_k$();
      $this$onDrawWithContent.drawPath$default_delt9g_k$($roundedRectPath, $brush, 0.0, null, null, null, 60, null);
      return Unit_getInstance();
    };
  }
  function drawRectBorder$lambda($brush, $rectTopLeft, $size, $style) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0d3yc_k$();
      $this$onDrawWithContent.drawRect$default_3hujnj_k$($brush, $rectTopLeft, $size, 0.0, $style, null, null, 104, null);
      return Unit_getInstance();
    };
  }
  function BorderStroke(width, brush) {
    this.width_1 = width;
    this.brush_1 = brush;
  }
  BorderStroke.prototype.get_width_76ubx4_k$ = function () {
    return this.width_1;
  };
  BorderStroke.prototype.get_brush_ipcjyp_k$ = function () {
    return this.brush_1;
  };
  BorderStroke.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderStroke))
      return false;
    if (!equals(this.width_1, other.width_1))
      return false;
    if (!equals(this.brush_1, other.brush_1))
      return false;
    return true;
  };
  BorderStroke.prototype.hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.width_1);
    result = imul(31, result) + hashCode(this.brush_1) | 0;
    return result;
  };
  BorderStroke.prototype.toString = function () {
    return 'BorderStroke(width=' + new Dp(this.width_1) + ', brush=' + this.brush_1 + ')';
  };
  BorderStroke.prototype.copy_5wp6h0_k$ = function (width, brush) {
    return new BorderStroke(width, brush);
  };
  BorderStroke.prototype.copy$default_vptlnh_k$ = function (width, brush, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      width = this.width_1;
    if (!(($mask0 & 2) === 0))
      brush = this.brush_1;
    return this.copy_5wp6h0_k$(width, brush);
  };
  BorderStroke.$metadata$ = classMeta('BorderStroke');
  function BorderStroke_0(width, color) {
    return new BorderStroke(width, new SolidColor(color));
  }
  function Canvas$composable(modifier, onDraw, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(749810168);
    sourceInformation($composer_0, 'C(Canvas$composable)42@1876L35:Canvas.kt#71ulvw');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(onDraw) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(749810168, $changed, -1, 'androidx.compose.foundation.Canvas$composable (Canvas.kt:41)');
      }
      Spacer$composable(drawBehind(modifier, onDraw), $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Canvas$composable$lambda$ref(modifier, onDraw, $changed));
    }
  }
  function Canvas$composable$lambda($modifier, $onDraw, $$changed, $composer, $force) {
    return Canvas$composable($modifier, $onDraw, $composer, $$changed | 1);
  }
  function Canvas$composable$lambda$ref($modifier, $onDraw, $$changed) {
    return function (p0, p1) {
      Canvas$composable$lambda($modifier, $onDraw, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function clickable(_this__u8e3s4, interactionSource, indication, enabled, onClickLabel, role, onClick) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = clickable$lambda(enabled, onClickLabel, role, onClick, indication, interactionSource);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp0_inspectorInfo = tmp$ret$0;
    return composed$composable(_this__u8e3s4, tmp0_inspectorInfo, clickable$lambda_0(onClick, enabled, interactionSource, indication, onClickLabel, role));
  }
  function clickable$default(_this__u8e3s4, interactionSource, indication, enabled, onClickLabel, role, onClick, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      enabled = true;
    if (!(($mask0 & 8) === 0))
      onClickLabel = null;
    if (!(($mask0 & 16) === 0))
      role = null;
    return clickable(_this__u8e3s4, interactionSource, indication, enabled, onClickLabel, role, onClick);
  }
  function PressedInteractionSourceDisposableEffect$composable(interactionSource, pressedInteraction, currentKeyPressInteractions, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-435571087);
    sourceInformation($composer_0, 'C(PressedInteractionSourceDisposableEffect$composable)P(1,2)444@18729L504:Clickable.kt#71ulvw');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(interactionSource) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(pressedInteraction) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(currentKeyPressInteractions) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-435571087, $dirty, -1, 'androidx.compose.foundation.PressedInteractionSourceDisposableEffect$composable (Clickable.kt:439)');
      }
      DisposableEffect$composable(interactionSource, PressedInteractionSourceDisposableEffect$composable$lambda_0(pressedInteraction, interactionSource, currentKeyPressInteractions), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(PressedInteractionSourceDisposableEffect$composable$lambda$ref(interactionSource, pressedInteraction, currentKeyPressInteractions, $changed));
    }
  }
  function focusRequesterAndModifier$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1212800505);
    sourceInformation($composer_0, 'C(focusRequesterAndModifier$composable)107@4392L29:Clickable.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(1212800505, $changed, -1, 'androidx.compose.foundation.focusRequesterAndModifier$composable (Clickable.kt:106)');
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
    if (false ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.focusRequesterAndModifier$composable.<anonymous>' call
      tmp$ret$0 = new FocusRequester();
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
    var focusRequester_0 = tmp$ret$4;
    var tmp0_0 = to(focusRequester_0, focusRequester(Companion_getInstance_7(), focusRequester_0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function handlePressInteraction(_this__u8e3s4, pressPoint, interactionSource, pressedInteraction, delayPressInteraction, $cont) {
    return coroutineScope(handlePressInteraction$slambda_0(_this__u8e3s4, pressPoint, interactionSource, pressedInteraction, delayPressInteraction, null), $cont);
  }
  function genericClickableWithoutGesture(_this__u8e3s4, gestureModifiers, interactionSource, indication_0, indicationScope, currentKeyPressInteractions, keyClickOffset, enabled, onClickLabel, role, onLongClickLabel, onLongClick, onClick) {
    return focusable(hoverable(indication(genericClickableWithoutGesture$detectPressAndClickFromKey(genericClickableWithoutGesture$clickSemantics(_this__u8e3s4, role, onClickLabel, onLongClick, onLongClickLabel, enabled, onClick), enabled, currentKeyPressInteractions, keyClickOffset, indicationScope, onClick, interactionSource), interactionSource, indication_0), interactionSource, enabled), enabled, interactionSource).then_5qw5wu_k$(gestureModifiers);
  }
  function genericClickableWithoutGesture$default(_this__u8e3s4, gestureModifiers, interactionSource, indication, indicationScope, currentKeyPressInteractions, keyClickOffset, enabled, onClickLabel, role, onLongClickLabel, onLongClick, onClick, $mask0, $handler) {
    if (!(($mask0 & 64) === 0))
      enabled = true;
    if (!(($mask0 & 128) === 0))
      onClickLabel = null;
    if (!(($mask0 & 256) === 0))
      role = null;
    if (!(($mask0 & 512) === 0))
      onLongClickLabel = null;
    if (!(($mask0 & 1024) === 0))
      onLongClick = null;
    return genericClickableWithoutGesture(_this__u8e3s4, gestureModifiers, interactionSource, indication, indicationScope, currentKeyPressInteractions, keyClickOffset, enabled, onClickLabel, role, onLongClickLabel, onLongClick, onClick);
  }
  function PressedInteractionSourceDisposableEffect$composable$lambda($interactionSource, $pressedInteraction, $currentKeyPressInteractions, $$changed, $composer, $force) {
    return PressedInteractionSourceDisposableEffect$composable($interactionSource, $pressedInteraction, $currentKeyPressInteractions, $composer, $$changed | 1);
  }
  function genericClickableWithoutGesture$clickSemantics(_this__u8e3s4, $role, $onClickLabel, $onLongClick, $onLongClickLabel, $enabled, $onClick) {
    return semantics(_this__u8e3s4, true, genericClickableWithoutGesture$clickSemantics$lambda($role, $onClickLabel, $onLongClick, $onLongClickLabel, $enabled, $onClick));
  }
  function genericClickableWithoutGesture$detectPressAndClickFromKey(_this__u8e3s4, $enabled, $currentKeyPressInteractions, $keyClickOffset, $indicationScope, $onClick, $interactionSource) {
    return onKeyEvent(_this__u8e3s4, genericClickableWithoutGesture$detectPressAndClickFromKey$lambda($enabled, $currentKeyPressInteractions, $keyClickOffset, $indicationScope, $onClick, $interactionSource));
  }
  function clickable$lambda($enabled, $onClickLabel, $role, $onClick, $indication, $interactionSource) {
    return function ($this$null) {
      $this$null.name_1 = 'clickable';
      $this$null.properties_1.set_y753qn_k$('enabled', $enabled);
      $this$null.properties_1.set_y753qn_k$('onClickLabel', $onClickLabel);
      var tmp = $role;
      $this$null.properties_1.set_y753qn_k$('role', tmp == null ? null : new Role(tmp));
      $this$null.properties_1.set_y753qn_k$('onClick', $onClick);
      $this$null.properties_1.set_y753qn_k$('indication', $indication);
      $this$null.properties_1.set_y753qn_k$('interactionSource', $interactionSource);
      return Unit_getInstance();
    };
  }
  function clickable$lambda$lambda($isClickableInScrollableContainer, $isRootInScrollableContainer) {
    return function () {
      return $isClickableInScrollableContainer.get_value_j01efc_k$() ? true : $isRootInScrollableContainer();
    };
  }
  function clickable$lambda$slambda$slambda($enabled, $interactionSource, $pressedInteraction, $delayPressInteraction, resultContinuation) {
    this.$enabled_1 = $enabled;
    this.$interactionSource_1 = $interactionSource;
    this.$pressedInteraction_1 = $pressedInteraction;
    this.$delayPressInteraction_1 = $delayPressInteraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  clickable$lambda$slambda$slambda.prototype.invoke_56pugh_k$ = function ($this$detectTapAndPress, offset, $cont) {
    var tmp = this.create_rju3ym_k$($this$detectTapAndPress, offset, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  clickable$lambda$slambda$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, PressGestureScope) : false) ? p1 : THROW_CCE();
    return this.invoke_56pugh_k$(tmp, p2 instanceof Offset_0 ? p2.packedValue_1 : THROW_CCE(), $cont);
  };
  clickable$lambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            if (this.$enabled_1) {
              this.state_1 = 1;
              suspendResult = handlePressInteraction(this.$this$detectTapAndPress_1, this.offset_1, this.$interactionSource_1, this.$pressedInteraction_1, this.$delayPressInteraction_1, this);
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
  clickable$lambda$slambda$slambda.prototype.create_rju3ym_k$ = function ($this$detectTapAndPress, offset, completion) {
    var i = new clickable$lambda$slambda$slambda(this.$enabled_1, this.$interactionSource_1, this.$pressedInteraction_1, this.$delayPressInteraction_1, completion);
    i.$this$detectTapAndPress_1 = $this$detectTapAndPress;
    i.offset_1 = offset;
    return i;
  };
  clickable$lambda$slambda$slambda.$metadata$ = classMeta('clickable$lambda$slambda$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function clickable$lambda$slambda$slambda_0($enabled, $interactionSource, $pressedInteraction, $delayPressInteraction, resultContinuation) {
    var i = new clickable$lambda$slambda$slambda($enabled, $interactionSource, $pressedInteraction, $delayPressInteraction, resultContinuation);
    var l = function ($this$detectTapAndPress, offset, $cont) {
      return i.invoke_56pugh_k$($this$detectTapAndPress, offset.packedValue_1, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function clickable$lambda$slambda$lambda($enabled, $focusRequester, $onClickState) {
    return function (it) {
      var tmp;
      if ($enabled) {
        $focusRequester.requestFocus_91rt8o_k$();
        tmp = $onClickState.get_value_j01efc_k$()();
      }
      return Unit_getInstance();
    };
  }
  function clickable$lambda$slambda($centreOffset, $enabled, $interactionSource, $pressedInteraction, $delayPressInteraction, $focusRequester, $onClickState, resultContinuation) {
    this.$centreOffset_1 = $centreOffset;
    this.$enabled_1 = $enabled;
    this.$interactionSource_1 = $interactionSource;
    this.$pressedInteraction_1 = $pressedInteraction;
    this.$delayPressInteraction_1 = $delayPressInteraction;
    this.$focusRequester_1 = $focusRequester;
    this.$onClickState_1 = $onClickState;
    CoroutineImpl.call(this, resultContinuation);
  }
  clickable$lambda$slambda.prototype.invoke_dycxzz_k$ = function ($this$pointerInput, $cont) {
    var tmp = this.create_9k90ga_k$($this$pointerInput, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  clickable$lambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  clickable$lambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            var tmp_0 = this;
            tmp_0.tmp0_toOffset0__1 = get_center(this.$this$pointerInput_1.get_size_yscczt_k$());
            this.$centreOffset_1.set_value_rnwamw_k$(new Offset_0(Offset(_IntOffset___get_x__impl__qiqr5o(this.tmp0_toOffset0__1), _IntOffset___get_y__impl__2avpwj(this.tmp0_toOffset0__1))));
            this.state_1 = 1;
            var tmp_1 = clickable$lambda$slambda$slambda_0(this.$enabled_1, this.$interactionSource_1, this.$pressedInteraction_1, this.$delayPressInteraction_1, null);
            suspendResult = detectTapAndPress(this.$this$pointerInput_1, tmp_1, clickable$lambda$slambda$lambda(this.$enabled_1, this.$focusRequester_1, this.$onClickState_1), this);
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
  clickable$lambda$slambda.prototype.create_9k90ga_k$ = function ($this$pointerInput, completion) {
    var i = new clickable$lambda$slambda(this.$centreOffset_1, this.$enabled_1, this.$interactionSource_1, this.$pressedInteraction_1, this.$delayPressInteraction_1, this.$focusRequester_1, this.$onClickState_1, completion);
    i.$this$pointerInput_1 = $this$pointerInput;
    return i;
  };
  clickable$lambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  clickable$lambda$slambda.$metadata$ = classMeta('clickable$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function clickable$lambda$slambda_0($centreOffset, $enabled, $interactionSource, $pressedInteraction, $delayPressInteraction, $focusRequester, $onClickState, resultContinuation) {
    var i = new clickable$lambda$slambda($centreOffset, $enabled, $interactionSource, $pressedInteraction, $delayPressInteraction, $focusRequester, $onClickState, resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.invoke_dycxzz_k$($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function clickable$2$1$1($isClickableInScrollableContainer) {
    this.$isClickableInScrollableContainer_1 = $isClickableInScrollableContainer;
  }
  clickable$2$1$1.prototype.onModifierLocalsUpdated_dk8grv_k$ = function (scope) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    this.$isClickableInScrollableContainer_1.set_value_rnwamw_k$(scope.get_current_og61yl_k$(get_ModifierLocalScrollableContainer()));
    tmp$ret$0 = Unit_getInstance();
  };
  clickable$2$1$1.$metadata$ = classMeta(undefined, [ModifierLocalConsumer]);
  function clickable$lambda$lambda_0() {
    return EmptyCoroutineContext_getInstance();
  }
  function clickable$lambda_0($onClick, $enabled, $interactionSource, $indication, $onClickLabel, $role) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(92076020);
      sourceInformation($composer_0, 'C145@6098L29,146@6161L58,147@6262L56,155@6577L36,156@6661L33,157@6752L95,157@6731L116,160@6875L40,162@6972L27,188@7815L445,204@8536L24:Clickable.kt#71ulvw');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(92076020, $changed, -1, 'androidx.compose.foundation.clickable.<anonymous> (Clickable.kt:144)');
        tmp = Unit_getInstance();
      }
      var onClickState = rememberUpdatedState$composable($onClick, $composer_0, 0);
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
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.clickable.<anonymous>.<anonymous>' call
        tmp$ret$0 = mutableStateOf$default(null, null, 2, null);
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
      var pressedInteraction = tmp$ret$4;
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var $composer_2 = tmp1_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (false ? true : tmp0_let_0 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$6;
        // Inline function 'androidx.compose.foundation.clickable.<anonymous>.<anonymous>' call
        var tmp$ret$5;
        // Inline function 'kotlin.collections.mutableMapOf' call
        tmp$ret$5 = LinkedHashMap_init_$Create$();
        tmp$ret$6 = tmp$ret$5;
        var value_0 = tmp$ret$6;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      tmp$ret$7 = tmp_2;
      tmp$ret$8 = tmp$ret$7;
      var tmp_3 = tmp$ret$8;
      tmp$ret$9 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_0 = tmp$ret$9;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$10 = tmp0_0;
      var currentKeyPressInteractions = tmp$ret$10;
      $composer_0.startReplaceableGroup_rp6air_k$(1841981872);
      sourceInformation($composer_0, '149@6354L170');
      if ($enabled) {
        PressedInteractionSourceDisposableEffect$composable($interactionSource, pressedInteraction, currentKeyPressInteractions, $composer_0, 0);
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      var isRootInScrollableContainer = isComposeRootInScrollableContainer$composable($composer_0, 0);
      var tmp$ret$15;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_3 = tmp2_remember$composable;
      $composer_3.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_3, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_3;
      var tmp$ret$13;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (false ? true : tmp0_let_1 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$11;
        // Inline function 'androidx.compose.foundation.clickable.<anonymous>.<anonymous>' call
        tmp$ret$11 = mutableStateOf$default(true, null, 2, null);
        var value_1 = tmp$ret$11;
        tmp1_cache_1.updateRememberedValue_l1colo_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = tmp0_let_1;
      }
      tmp$ret$12 = tmp_4;
      tmp$ret$13 = tmp$ret$12;
      var tmp_5 = tmp$ret$13;
      tmp$ret$14 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0_1 = tmp$ret$14;
      $composer_3.endReplaceableGroup_er37p7_k$();
      tmp$ret$15 = tmp0_1;
      var isClickableInScrollableContainer = tmp$ret$15;
      var tmp$ret$20;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_4 = tmp3_remember$composable;
      $composer_4.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_4, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_4;
      var tmp2_cache = !!($composer_4.changed_ga7h3f_k$(isClickableInScrollableContainer) | $composer_4.changed_ga7h3f_k$(isRootInScrollableContainer));
      var tmp$ret$18;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = tmp1_cache_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$17;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (tmp2_cache ? true : tmp0_let_2 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$16;
        // Inline function 'androidx.compose.foundation.clickable.<anonymous>.<anonymous>' call
        tmp$ret$16 = clickable$lambda$lambda(isClickableInScrollableContainer, isRootInScrollableContainer);
        var value_2 = tmp$ret$16;
        tmp1_cache_2.updateRememberedValue_l1colo_k$(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = tmp0_let_2;
      }
      tmp$ret$17 = tmp_6;
      tmp$ret$18 = tmp$ret$17;
      var tmp_7 = tmp$ret$18;
      tmp$ret$19 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      var tmp0_2 = tmp$ret$19;
      $composer_4.endReplaceableGroup_er37p7_k$();
      tmp$ret$20 = tmp0_2;
      var delayPressInteraction = rememberUpdatedState$composable(tmp$ret$20, $composer_0, 0);
      var tmp$ret$25;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp4_remember$composable = $composer_0;
      var $composer_5 = tmp4_remember$composable;
      $composer_5.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_5, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$24;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_3 = $composer_5;
      var tmp$ret$23;
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = tmp1_cache_3.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$22;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_8;
      if (false ? true : tmp0_let_3 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$21;
        // Inline function 'androidx.compose.foundation.clickable.<anonymous>.<anonymous>' call
        var tmp_9 = new Offset_0(Companion_getInstance_4().Zero_1);
        tmp$ret$21 = mutableStateOf$default(tmp_9, null, 2, null);
        var value_3 = tmp$ret$21;
        tmp1_cache_3.updateRememberedValue_l1colo_k$(value_3);
        tmp_8 = value_3;
      } else {
        tmp_8 = tmp0_let_3;
      }
      tmp$ret$22 = tmp_8;
      tmp$ret$23 = tmp$ret$22;
      var tmp_10 = tmp$ret$23;
      tmp$ret$24 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
      var tmp0_3 = tmp$ret$24;
      $composer_5.endReplaceableGroup_er37p7_k$();
      tmp$ret$25 = tmp0_3;
      var centreOffset = tmp$ret$25;
      var tmp0_container = focusRequesterAndModifier$composable($composer_0, 0);
      var focusRequester = tmp0_container.component1_7eebsc_k$();
      var focusRequesterModifier = tmp0_container.component2_7eebsb_k$();
      var tmp_11 = Companion_getInstance_7();
      var gesture = pointerInput(tmp_11, $interactionSource, $enabled, clickable$lambda$slambda_0(centreOffset, $enabled, $interactionSource, pressedInteraction, delayPressInteraction, focusRequester, onClickState, null));
      var tmp_12 = Companion_getInstance_7();
      var tmp$ret$30;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp5_remember$composable = $composer_0;
      var $composer_6 = tmp5_remember$composable;
      $composer_6.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_6, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$29;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_4 = $composer_6;
      var tmp$ret$28;
      // Inline function 'kotlin.let' call
      var tmp0_let_4 = tmp1_cache_4.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$27;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_13;
      if (false ? true : tmp0_let_4 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$26;
        // Inline function 'androidx.compose.foundation.clickable.<anonymous>.<anonymous>' call
        tmp$ret$26 = new clickable$2$1$1(isClickableInScrollableContainer);
        var value_4 = tmp$ret$26;
        tmp1_cache_4.updateRememberedValue_l1colo_k$(value_4);
        tmp_13 = value_4;
      } else {
        tmp_13 = tmp0_let_4;
      }
      tmp$ret$27 = tmp_13;
      tmp$ret$28 = tmp$ret$27;
      var tmp_14 = tmp$ret$28;
      tmp$ret$29 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
      var tmp0_4 = tmp$ret$29;
      $composer_6.endReplaceableGroup_er37p7_k$();
      tmp$ret$30 = tmp0_4;
      var tmp_15 = tmp_12.then_5qw5wu_k$(tmp$ret$30).then_5qw5wu_k$(focusRequesterModifier);
      var tmp$ret$36;
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var tmp6_rememberCoroutineScope$composable = null;
      var tmp7_rememberCoroutineScope$composable = $composer_0;
      var getContext = {_v: tmp6_rememberCoroutineScope$composable};
      var $composer_7 = tmp7_rememberCoroutineScope$composable;
      $composer_7.startReplaceableGroup_rp6air_k$(102870005);
      sourceInformation($composer_7, 'C(rememberCoroutineScope$composable)476@19869L144:Effects.kt#9igjgp');
      if (!(1 === 0)) {
        getContext._v = clickable$lambda$lambda_0;
      }
      var composer = $composer_7;
      var tmp$ret$35;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_7;
      var $composer_8 = tmp0_remember$composable_0;
      $composer_8.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_8, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$34;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_5 = $composer_8;
      var tmp$ret$33;
      // Inline function 'kotlin.let' call
      var tmp0_let_5 = tmp1_cache_5.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$32;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_16;
      if (false ? true : tmp0_let_5 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$31;
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        tmp$ret$31 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        var value_5 = tmp$ret$31;
        tmp1_cache_5.updateRememberedValue_l1colo_k$(value_5);
        tmp_16 = value_5;
      } else {
        tmp_16 = tmp0_let_5;
      }
      tmp$ret$32 = tmp_16;
      tmp$ret$33 = tmp$ret$32;
      var tmp_17 = tmp$ret$33;
      tmp$ret$34 = (tmp_17 == null ? true : isObject(tmp_17)) ? tmp_17 : THROW_CCE();
      var tmp0_5 = tmp$ret$34;
      $composer_8.endReplaceableGroup_er37p7_k$();
      tmp$ret$35 = tmp0_5;
      var wrapper = tmp$ret$35;
      var tmp0_6 = wrapper.coroutineScope_1;
      $composer_7.endReplaceableGroup_er37p7_k$();
      tmp$ret$36 = tmp0_6;
      var tmp0_7 = genericClickableWithoutGesture(tmp_15, gesture, $interactionSource, $indication, tmp$ret$36, currentKeyPressInteractions, centreOffset, $enabled, $onClickLabel, $role, null, null, $onClick);
      var tmp_18;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_18 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0_7;
    };
  }
  function _no_name_provided__qut3iv($pressedInteraction, $interactionSource, $currentKeyPressInteractions) {
    this.$pressedInteraction_1 = $pressedInteraction;
    this.$interactionSource_1 = $interactionSource;
    this.$currentKeyPressInteractions_1 = $currentKeyPressInteractions;
  }
  _no_name_provided__qut3iv.prototype.dispose_3n44we_k$ = function () {
    // Inline function 'androidx.compose.foundation.PressedInteractionSourceDisposableEffect$composable.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.$pressedInteraction_1.get_value_j01efc_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var interaction = new Cancel_0(tmp0_safe_receiver);
      this.$interactionSource_1.tryEmit_fphub9_k$(interaction);
      this.$pressedInteraction_1.set_value_rnwamw_k$(null);
      tmp$ret$0 = Unit_getInstance();
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.$currentKeyPressInteractions_1.get_values_ksazhn_k$();
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'androidx.compose.foundation.PressedInteractionSourceDisposableEffect$composable.<anonymous>.<anonymous>.<anonymous>' call
      this.$interactionSource_1.tryEmit_fphub9_k$(new Cancel_0(element));
    }
    this.$currentKeyPressInteractions_1.clear_j9y8zo_k$();
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function PressedInteractionSourceDisposableEffect$composable$lambda_0($pressedInteraction, $interactionSource, $currentKeyPressInteractions) {
    return function ($this$DisposableEffect) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv($pressedInteraction, $interactionSource, $currentKeyPressInteractions);
      return tmp$ret$0;
    };
  }
  function PressedInteractionSourceDisposableEffect$composable$lambda$ref($interactionSource, $pressedInteraction, $currentKeyPressInteractions, $$changed) {
    return function (p0, p1) {
      PressedInteractionSourceDisposableEffect$composable$lambda($interactionSource, $pressedInteraction, $currentKeyPressInteractions, $$changed, p0, p1);
      return Unit_getInstance();
    };
  }
  function handlePressInteraction$slambda$slambda($delayPressInteraction, $pressPoint, $interactionSource, $pressedInteraction, resultContinuation) {
    this.$delayPressInteraction_1 = $delayPressInteraction;
    this.$pressPoint_1 = $pressPoint;
    this.$interactionSource_1 = $interactionSource;
    this.$pressedInteraction_1 = $pressedInteraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  handlePressInteraction$slambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  handlePressInteraction$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  handlePressInteraction$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            if (this.$delayPressInteraction_1.get_value_j01efc_k$()()) {
              this.state_1 = 1;
              suspendResult = delay(get_TapIndicationDelay(), this);
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
            this.state_1 = 2;
            continue $sm;
          case 2:
            this.pressInteraction0__1 = new Press(this.$pressPoint_1);
            this.state_1 = 3;
            suspendResult = this.$interactionSource_1.emit_lotjoj_k$(this.pressInteraction0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.$pressedInteraction_1.set_value_rnwamw_k$(this.pressInteraction0__1);
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
  handlePressInteraction$slambda$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new handlePressInteraction$slambda$slambda(this.$delayPressInteraction_1, this.$pressPoint_1, this.$interactionSource_1, this.$pressedInteraction_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  handlePressInteraction$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  handlePressInteraction$slambda$slambda.$metadata$ = classMeta('handlePressInteraction$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function handlePressInteraction$slambda$slambda_0($delayPressInteraction, $pressPoint, $interactionSource, $pressedInteraction, resultContinuation) {
    var i = new handlePressInteraction$slambda$slambda($delayPressInteraction, $pressPoint, $interactionSource, $pressedInteraction, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function handlePressInteraction$slambda($this_handlePressInteraction, $pressPoint, $interactionSource, $pressedInteraction, $delayPressInteraction, resultContinuation) {
    this.$this_handlePressInteraction_1 = $this_handlePressInteraction;
    this.$pressPoint_1 = $pressPoint;
    this.$interactionSource_1 = $interactionSource;
    this.$pressedInteraction_1 = $pressedInteraction;
    this.$delayPressInteraction_1 = $delayPressInteraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  handlePressInteraction$slambda.prototype.invoke_d6gbsu_k$ = function ($this$coroutineScope, $cont) {
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  handlePressInteraction$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  handlePressInteraction$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 9;
            var tmp_0 = this;
            tmp_0.delayJob0__1 = launch$default(this.$this$coroutineScope_1, null, null, handlePressInteraction$slambda$slambda_0(this.$delayPressInteraction_1, this.$pressPoint_1, this.$interactionSource_1, this.$pressedInteraction_1, null), 3, null);
            this.state_1 = 1;
            suspendResult = this.$this_handlePressInteraction_1.tryAwaitRelease_crq8rt_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.success1__1 = suspendResult;
            if (this.delayJob0__1.get_isActive_quafmh_k$()) {
              this.state_1 = 4;
              suspendResult = cancelAndJoin(this.delayJob0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.tmp0_safe_receiver2__1 = this.$pressedInteraction_1.get_value_j01efc_k$();
              if (this.tmp0_safe_receiver2__1 == null) {
                this.WHEN_RESULT3__1 = null;
                this.state_1 = 3;
                continue $sm;
              } else {
                var tmp_1 = this;
                var tmp_2;
                if (this.success1__1) {
                  tmp_2 = new Release(this.tmp0_safe_receiver2__1);
                } else {
                  tmp_2 = new Cancel_0(this.tmp0_safe_receiver2__1);
                }
                tmp_1.endInteraction4__1 = tmp_2;
                this.state_1 = 2;
                suspendResult = this.$interactionSource_1.emit_lotjoj_k$(this.endInteraction4__1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 2:
            var tmp_3 = this;
            tmp_3.WHEN_RESULT3__1 = Unit_getInstance();
            this.state_1 = 3;
            continue $sm;
          case 3:
            ;
            this.state_1 = 8;
            continue $sm;
          case 4:
            if (this.success1__1) {
              this.pressInteraction5__1 = new Press(this.$pressPoint_1);
              this.releaseInteraction6__1 = new Release(this.pressInteraction5__1);
              this.state_1 = 5;
              suspendResult = this.$interactionSource_1.emit_lotjoj_k$(this.pressInteraction5__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.state_1 = 7;
              continue $sm;
            }

            break;
          case 5:
            this.state_1 = 6;
            suspendResult = this.$interactionSource_1.emit_lotjoj_k$(this.releaseInteraction6__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.state_1 = 7;
            continue $sm;
          case 7:
            this.state_1 = 8;
            continue $sm;
          case 8:
            this.$pressedInteraction_1.set_value_rnwamw_k$(null);
            return Unit_getInstance();
          case 9:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 9) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  handlePressInteraction$slambda.prototype.create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    var i = new handlePressInteraction$slambda(this.$this_handlePressInteraction_1, this.$pressPoint_1, this.$interactionSource_1, this.$pressedInteraction_1, this.$delayPressInteraction_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  handlePressInteraction$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  handlePressInteraction$slambda.$metadata$ = classMeta('handlePressInteraction$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function handlePressInteraction$slambda_0($this_handlePressInteraction, $pressPoint, $interactionSource, $pressedInteraction, $delayPressInteraction, resultContinuation) {
    var i = new handlePressInteraction$slambda($this_handlePressInteraction, $pressPoint, $interactionSource, $pressedInteraction, $delayPressInteraction, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.invoke_d6gbsu_k$($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function genericClickableWithoutGesture$clickSemantics$lambda$lambda($onClick) {
    return function () {
      $onClick();
      return true;
    };
  }
  function genericClickableWithoutGesture$clickSemantics$lambda$lambda_0($onLongClick) {
    return function () {
      $onLongClick();
      return true;
    };
  }
  function genericClickableWithoutGesture$clickSemantics$lambda($role, $onClickLabel, $onLongClick, $onLongClickLabel, $enabled, $onClick) {
    return function ($this$semantics) {
      var tmp;
      var tmp_0 = $role;
      if (!((tmp_0 == null ? null : new Role(tmp_0)) == null)) {
        set_role($this$semantics, $role);
        tmp = Unit_getInstance();
      }
      onClick($this$semantics, $onClickLabel, genericClickableWithoutGesture$clickSemantics$lambda$lambda($onClick));
      var tmp_1;
      if (!($onLongClick == null)) {
        onLongClick($this$semantics, $onLongClickLabel, genericClickableWithoutGesture$clickSemantics$lambda$lambda_0($onLongClick));
        tmp_1 = Unit_getInstance();
      }
      var tmp_2;
      if (!$enabled) {
        disabled($this$semantics);
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda($interactionSource, $press, resultContinuation) {
    this.$interactionSource_1 = $interactionSource;
    this.$press_1 = $press;
    CoroutineImpl.call(this, resultContinuation);
  }
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.$interactionSource_1.emit_lotjoj_k$(this.$press_1, this);
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
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda(this.$interactionSource_1, this.$press_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda.$metadata$ = classMeta('genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_0($interactionSource, $press, resultContinuation) {
    var i = new genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda($interactionSource, $press, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1($interactionSource, $tmp0_safe_receiver, resultContinuation) {
    this.$interactionSource_1 = $interactionSource;
    this.$tmp0_safe_receiver_1 = $tmp0_safe_receiver;
    CoroutineImpl.call(this, resultContinuation);
  }
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.$interactionSource_1.emit_lotjoj_k$(new Release(this.$tmp0_safe_receiver_1), this);
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
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1(this.$interactionSource_1, this.$tmp0_safe_receiver_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1.$metadata$ = classMeta('genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_2($interactionSource, $tmp0_safe_receiver, resultContinuation) {
    var i = new genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1($interactionSource, $tmp0_safe_receiver, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function genericClickableWithoutGesture$detectPressAndClickFromKey$lambda($enabled, $currentKeyPressInteractions, $keyClickOffset, $indicationScope, $onClick, $interactionSource) {
    return function (keyEvent) {
      var tmp;
      if ($enabled ? get_isPress(keyEvent.nativeKeyEvent_1) : false) {
        var tmp_0;
        if (!$currentKeyPressInteractions.containsKey_wgk31w_k$(new Key(get_key(keyEvent.nativeKeyEvent_1)))) {
          var press = new Press($keyClickOffset.get_value_j01efc_k$().packedValue_1);
          // Inline function 'kotlin.collections.set' call
          var tmp0_set = get_key(keyEvent.nativeKeyEvent_1);
          $currentKeyPressInteractions.put_3mhbri_k$(new Key(tmp0_set), press);
          launch$default($indicationScope, null, null, genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_0($interactionSource, press, null), 3, null);
          tmp_0 = true;
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      } else if ($enabled ? get_isClick(keyEvent.nativeKeyEvent_1) : false) {
        var tmp0_safe_receiver = $currentKeyPressInteractions.remove_8hbkc0_k$(new Key(get_key(keyEvent.nativeKeyEvent_1)));
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.foundation.genericClickableWithoutGesture.detectPressAndClickFromKey.<anonymous>.<anonymous>' call
          tmp$ret$0 = launch$default($indicationScope, null, null, genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_2($interactionSource, tmp0_safe_receiver, null), 3, null);
          tmp$ret$1 = tmp$ret$0;
        }
        $onClick();
        tmp = true;
      } else {
        tmp = false;
      }
      return tmp;
    };
  }
  function get_MaxSupportedElevation() {
    init_properties_ClipScrollableContainer_kt_wlslhm();
    return MaxSupportedElevation;
  }
  var MaxSupportedElevation;
  function get_HorizontalScrollableClipModifier() {
    init_properties_ClipScrollableContainer_kt_wlslhm();
    return HorizontalScrollableClipModifier;
  }
  var HorizontalScrollableClipModifier;
  function get_VerticalScrollableClipModifier() {
    init_properties_ClipScrollableContainer_kt_wlslhm();
    return VerticalScrollableClipModifier;
  }
  var VerticalScrollableClipModifier;
  function HorizontalScrollableClipModifier$1() {
  }
  HorizontalScrollableClipModifier$1.prototype.createOutline_p92zi6_k$ = function (size, layoutDirection, density) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.<no name provided>.createOutline.<anonymous>' call
    tmp$ret$0 = density.roundToPx_hl1u8z_k$(get_MaxSupportedElevation());
    tmp$ret$1 = tmp$ret$0;
    var inflateSize = tmp$ret$1;
    return new Rectangle(new Rect(0.0, -inflateSize, _Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size) + inflateSize));
  };
  HorizontalScrollableClipModifier$1.$metadata$ = classMeta(undefined, [Shape]);
  function VerticalScrollableClipModifier$1() {
  }
  VerticalScrollableClipModifier$1.prototype.createOutline_p92zi6_k$ = function (size, layoutDirection, density) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.<no name provided>.createOutline.<anonymous>' call
    tmp$ret$0 = density.roundToPx_hl1u8z_k$(get_MaxSupportedElevation());
    tmp$ret$1 = tmp$ret$0;
    var inflateSize = tmp$ret$1;
    return new Rectangle(new Rect(-inflateSize, 0.0, _Size___get_width__impl__58y75t(size) + inflateSize, _Size___get_height__impl__a04p02(size)));
  };
  VerticalScrollableClipModifier$1.$metadata$ = classMeta(undefined, [Shape]);
  var properties_initialized_ClipScrollableContainer_kt_l2hne;
  function init_properties_ClipScrollableContainer_kt_wlslhm() {
    if (properties_initialized_ClipScrollableContainer_kt_l2hne) {
    } else {
      properties_initialized_ClipScrollableContainer_kt_l2hne = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(30);
      MaxSupportedElevation = tmp$ret$0;
      var tmp = Companion_getInstance_7();
      HorizontalScrollableClipModifier = clip(tmp, new HorizontalScrollableClipModifier$1());
      var tmp_0 = Companion_getInstance_7();
      VerticalScrollableClipModifier = clip(tmp_0, new VerticalScrollableClipModifier$1());
    }
  }
  function isSystemInDarkTheme$composable($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1894054335, 'C(isSystemInDarkTheme$composable)40@1721L22:DarkTheme.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(1894054335, $changed, -1, 'androidx.compose.foundation.isSystemInDarkTheme$composable (DarkTheme.kt:40)');
    }
    var tmp0 = _isSystemInDarkTheme$composable($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function ExperimentalFoundationApi() {
  }
  ExperimentalFoundationApi.prototype.equals = function (other) {
    if (!(other instanceof ExperimentalFoundationApi))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalFoundationApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalFoundationApi.prototype.hashCode = function () {
    return 0;
  };
  ExperimentalFoundationApi.prototype.toString = function () {
    return '@androidx.compose.foundation.ExperimentalFoundationApi()';
  };
  ExperimentalFoundationApi.$metadata$ = classMeta('ExperimentalFoundationApi', [Annotation]);
  function get_focusGroupInspectorInfo() {
    init_properties_Focusable_kt_y3fsle();
    return focusGroupInspectorInfo;
  }
  var focusGroupInspectorInfo;
  function focusable(_this__u8e3s4, enabled, interactionSource) {
    init_properties_Focusable_kt_y3fsle();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = focusable$lambda(enabled, interactionSource);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp_0 = tmp$ret$0;
    return composed$composable(_this__u8e3s4, tmp_0, focusable$lambda_0(interactionSource, enabled));
  }
  function focusable$default(_this__u8e3s4, enabled, interactionSource, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      enabled = true;
    if (!(($mask0 & 2) === 0))
      interactionSource = null;
    return focusable(_this__u8e3s4, enabled, interactionSource);
  }
  function onPinnableParentAvailable(_this__u8e3s4, onPinnableParentAvailable) {
    init_properties_Focusable_kt_y3fsle();
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.platform.inspectable' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = onPinnableParentAvailable$lambda(onPinnableParentAvailable);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp0_inspectable = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.foundation.onPinnableParentAvailable.<anonymous>' call
    var tmp1__anonymous__uwfjfc = Companion_getInstance_7();
    tmp$ret$1 = tmp1__anonymous__uwfjfc.then_5qw5wu_k$(new PinnableParentConsumer(onPinnableParentAvailable));
    tmp$ret$2 = inspectableWrapper(_this__u8e3s4, tmp0_inspectable, tmp$ret$1);
    return tmp$ret$2;
  }
  function PinnableParentConsumer(onPinnableParentAvailable) {
    this.onPinnableParentAvailable_1 = onPinnableParentAvailable;
  }
  PinnableParentConsumer.prototype.get_onPinnableParentAvailable_j6g1k4_k$ = function () {
    return this.onPinnableParentAvailable_1;
  };
  PinnableParentConsumer.prototype.onModifierLocalsUpdated_dk8grv_k$ = function (scope) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = this.onPinnableParentAvailable_1(scope.get_current_og61yl_k$(get_ModifierLocalPinnableParent()));
  };
  PinnableParentConsumer.prototype.equals = function (other) {
    var tmp;
    if (other instanceof PinnableParentConsumer) {
      tmp = equals(other.onPinnableParentAvailable_1, this.onPinnableParentAvailable_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  PinnableParentConsumer.prototype.hashCode = function () {
    return hashCode(this.onPinnableParentAvailable_1);
  };
  PinnableParentConsumer.$metadata$ = classMeta('PinnableParentConsumer', [ModifierLocalConsumer]);
  function focusGroupInspectorInfo$lambda($this$null) {
    init_properties_Focusable_kt_y3fsle();
    // Inline function 'androidx.compose.foundation.focusGroupInspectorInfo.<anonymous>' call
    $this$null.name_1 = 'focusGroup';
    return Unit_getInstance();
  }
  function focusable$lambda($enabled, $interactionSource) {
    return function ($this$null) {
      $this$null.name_1 = 'focusable';
      $this$null.properties_1.set_y753qn_k$('enabled', $enabled);
      $this$null.properties_1.set_y753qn_k$('interactionSource', $interactionSource);
      return Unit_getInstance();
    };
  }
  function invoke$lambda($pinnableParent$delegate) {
    init_properties_Focusable_kt_y3fsle();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('pinnableParent', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $pinnableParent$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function invoke$lambda_0($pinnableParent$delegate, value) {
    init_properties_Focusable_kt_y3fsle();
    var tmp0_setValue = getLocalDelegateReference('pinnableParent', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $pinnableParent$delegate.set_value_rnwamw_k$(value);
  }
  function invoke$lambda_1($isFocused$delegate) {
    init_properties_Focusable_kt_y3fsle();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('isFocused', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $isFocused$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function invoke$lambda_2($isFocused$delegate, value) {
    init_properties_Focusable_kt_y3fsle();
    var tmp0_setValue = getLocalDelegateReference('isFocused', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isFocused$delegate.set_value_rnwamw_k$(value);
  }
  function focusable$lambda$lambda() {
    init_properties_Focusable_kt_y3fsle();
    return EmptyCoroutineContext_getInstance();
  }
  function _no_name_provided__qut3iv_0($focusedInteraction, $interactionSource) {
    this.$focusedInteraction_1 = $focusedInteraction;
    this.$interactionSource_1 = $interactionSource;
  }
  _no_name_provided__qut3iv_0.prototype.dispose_3n44we_k$ = function () {
    // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.$focusedInteraction_1.get_value_j01efc_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var interaction = new Unfocus(tmp0_safe_receiver);
      var tmp0_safe_receiver_0 = this.$interactionSource_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else
        tmp0_safe_receiver_0.tryEmit_fphub9_k$(interaction);
      this.$focusedInteraction_1.set_value_rnwamw_k$(null);
      tmp$ret$0 = Unit_getInstance();
    }
  };
  _no_name_provided__qut3iv_0.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function focusable$lambda$lambda_0($focusedInteraction, $interactionSource) {
    return function ($this$DisposableEffect) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_0($focusedInteraction, $interactionSource);
      return tmp$ret$0;
    };
  }
  function focusable$lambda$lambda$slambda($focusedInteraction, $interactionSource, resultContinuation) {
    this.$focusedInteraction_1 = $focusedInteraction;
    this.$interactionSource_1 = $interactionSource;
    CoroutineImpl.call(this, resultContinuation);
  }
  focusable$lambda$lambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  focusable$lambda$lambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  focusable$lambda$lambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            this.tmp0_safe_receiver0__1 = this.$focusedInteraction_1.get_value_j01efc_k$();
            if (this.tmp0_safe_receiver0__1 == null) {
              this.WHEN_RESULT1__1 = null;
              this.state_1 = 3;
              continue $sm;
            } else {
              this.interaction2__1 = new Unfocus(this.tmp0_safe_receiver0__1);
              this.tmp0_safe_receiver3__1 = this.$interactionSource_1;
              if (this.tmp0_safe_receiver3__1 == null) {
                this.WHEN_RESULT4__1 = null;
                this.state_1 = 2;
                continue $sm;
              } else {
                this.state_1 = 1;
                suspendResult = this.tmp0_safe_receiver3__1.emit_lotjoj_k$(this.interaction2__1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 1:
            var tmp_0 = this;
            tmp_0.WHEN_RESULT4__1 = Unit_getInstance();
            this.state_1 = 2;
            continue $sm;
          case 2:
            ;
            var tmp_1 = this;
            this.$focusedInteraction_1.set_value_rnwamw_k$(null);
            tmp_1.WHEN_RESULT1__1 = Unit_getInstance();
            this.state_1 = 3;
            continue $sm;
          case 3:
            ;
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
  focusable$lambda$lambda$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new focusable$lambda$lambda$slambda(this.$focusedInteraction_1, this.$interactionSource_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  focusable$lambda$lambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  focusable$lambda$lambda$slambda.$metadata$ = classMeta('focusable$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function focusable$lambda$lambda$slambda_0($focusedInteraction, $interactionSource, resultContinuation) {
    var i = new focusable$lambda$lambda$slambda($focusedInteraction, $interactionSource, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_1() {
  }
  _no_name_provided__qut3iv_1.prototype.dispose_3n44we_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
  };
  _no_name_provided__qut3iv_1.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function focusable$lambda$lambda_1($enabled, $scope, $focusedInteraction, $interactionSource) {
    return function ($this$DisposableEffect) {
      var tmp;
      if (!$enabled) {
        launch$default($scope, null, null, focusable$lambda$lambda$slambda_0($focusedInteraction, $interactionSource, null), 3, null);
        tmp = Unit_getInstance();
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_1();
      return tmp$ret$0;
    };
  }
  function focusable$lambda$lambda$lambda($focusRequester, $isFocused$delegate) {
    return function () {
      $focusRequester.requestFocus_91rt8o_k$();
      return invoke$lambda_1($isFocused$delegate);
    };
  }
  function focusable$lambda$lambda_2($isFocused$delegate, $focusRequester) {
    return function ($this$semantics) {
      set_focused($this$semantics, invoke$lambda_1($isFocused$delegate));
      requestFocus$default($this$semantics, null, focusable$lambda$lambda$lambda($focusRequester, $isFocused$delegate), 1, null);
      return Unit_getInstance();
    };
  }
  function focusable$lambda$lambda_3($pinnableParent$delegate) {
    return function (it) {
      invoke$lambda_0($pinnableParent$delegate, it);
      return Unit_getInstance();
    };
  }
  function focusable$lambda$lambda$slambda_1($bringIntoViewRequester, $pinnableParent$delegate, resultContinuation) {
    this.$bringIntoViewRequester_1 = $bringIntoViewRequester;
    this.$pinnableParent$delegate_1 = $pinnableParent$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  focusable$lambda$lambda$slambda_1.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  focusable$lambda$lambda$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  focusable$lambda$lambda$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 5;
            this.pinnedItemsHandle0__1 = null;
            this.state_1 = 1;
            continue $sm;
          case 1:
            this.exceptionState_1 = 4;
            var tmp_0 = this;
            var tmp0_safe_receiver = invoke$lambda(this.$pinnableParent$delegate_1);
            tmp_0.pinnedItemsHandle0__1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pinItems_7iv7bp_k$();
            this.state_1 = 2;
            suspendResult = this.$bringIntoViewRequester_1.bringIntoView$default_i63p4i_k$(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$01__1 = suspendResult;
            this.exceptionState_1 = 5;
            this.state_1 = 3;
            continue $sm;
          case 3:
            var tmp1_safe_receiver = this.pinnedItemsHandle0__1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              tmp1_safe_receiver.unpin_a7atxn_k$();
            }

            ;
            return Unit_getInstance();
          case 4:
            this.exceptionState_1 = 5;
            var t = this.exception_1;
            var tmp1_safe_receiver_0 = this.pinnedItemsHandle0__1;
            if (tmp1_safe_receiver_0 == null)
              null;
            else {
              tmp1_safe_receiver_0.unpin_a7atxn_k$();
            }

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
  focusable$lambda$lambda$slambda_1.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new focusable$lambda$lambda$slambda_1(this.$bringIntoViewRequester_1, this.$pinnableParent$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  focusable$lambda$lambda$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  focusable$lambda$lambda$slambda_1.$metadata$ = classMeta('focusable$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function focusable$lambda$lambda$slambda_2($bringIntoViewRequester, $pinnableParent$delegate, resultContinuation) {
    var i = new focusable$lambda$lambda$slambda_1($bringIntoViewRequester, $pinnableParent$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function focusable$lambda$lambda$slambda_3($focusedInteraction, $interactionSource, resultContinuation) {
    this.$focusedInteraction_1 = $focusedInteraction;
    this.$interactionSource_1 = $interactionSource;
    CoroutineImpl.call(this, resultContinuation);
  }
  focusable$lambda$lambda$slambda_3.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  focusable$lambda$lambda$slambda_3.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  focusable$lambda$lambda$slambda_3.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 6;
            this.tmp0_safe_receiver0__1 = this.$focusedInteraction_1.get_value_j01efc_k$();
            if (this.tmp0_safe_receiver0__1 == null) {
              this.WHEN_RESULT1__1 = null;
              this.state_1 = 3;
              continue $sm;
            } else {
              this.interaction2__1 = new Unfocus(this.tmp0_safe_receiver0__1);
              this.tmp0_safe_receiver3__1 = this.$interactionSource_1;
              if (this.tmp0_safe_receiver3__1 == null) {
                this.WHEN_RESULT4__1 = null;
                this.state_1 = 2;
                continue $sm;
              } else {
                this.state_1 = 1;
                suspendResult = this.tmp0_safe_receiver3__1.emit_lotjoj_k$(this.interaction2__1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 1:
            var tmp_0 = this;
            tmp_0.WHEN_RESULT4__1 = Unit_getInstance();
            this.state_1 = 2;
            continue $sm;
          case 2:
            ;
            var tmp_1 = this;
            this.$focusedInteraction_1.set_value_rnwamw_k$(null);
            tmp_1.WHEN_RESULT1__1 = Unit_getInstance();
            this.state_1 = 3;
            continue $sm;
          case 3:
            ;
            this.interaction5__1 = new Focus();
            this.tmp1_safe_receiver6__1 = this.$interactionSource_1;
            if (this.tmp1_safe_receiver6__1 == null) {
              this.WHEN_RESULT7__1 = null;
              this.state_1 = 5;
              continue $sm;
            } else {
              this.state_1 = 4;
              suspendResult = this.tmp1_safe_receiver6__1.emit_lotjoj_k$(this.interaction5__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            ;
            break;
          case 4:
            var tmp_2 = this;
            tmp_2.WHEN_RESULT7__1 = Unit_getInstance();
            this.state_1 = 5;
            continue $sm;
          case 5:
            ;
            this.$focusedInteraction_1.set_value_rnwamw_k$(this.interaction5__1);
            return Unit_getInstance();
          case 6:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 6) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  focusable$lambda$lambda$slambda_3.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new focusable$lambda$lambda$slambda_3(this.$focusedInteraction_1, this.$interactionSource_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  focusable$lambda$lambda$slambda_3.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  focusable$lambda$lambda$slambda_3.$metadata$ = classMeta('focusable$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function focusable$lambda$lambda$slambda_4($focusedInteraction, $interactionSource, resultContinuation) {
    var i = new focusable$lambda$lambda$slambda_3($focusedInteraction, $interactionSource, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function focusable$lambda$lambda$slambda_5($focusedInteraction, $interactionSource, resultContinuation) {
    this.$focusedInteraction_1 = $focusedInteraction;
    this.$interactionSource_1 = $interactionSource;
    CoroutineImpl.call(this, resultContinuation);
  }
  focusable$lambda$lambda$slambda_5.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  focusable$lambda$lambda$slambda_5.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  focusable$lambda$lambda$slambda_5.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            this.tmp0_safe_receiver0__1 = this.$focusedInteraction_1.get_value_j01efc_k$();
            if (this.tmp0_safe_receiver0__1 == null) {
              this.WHEN_RESULT1__1 = null;
              this.state_1 = 3;
              continue $sm;
            } else {
              this.interaction2__1 = new Unfocus(this.tmp0_safe_receiver0__1);
              this.tmp0_safe_receiver3__1 = this.$interactionSource_1;
              if (this.tmp0_safe_receiver3__1 == null) {
                this.WHEN_RESULT4__1 = null;
                this.state_1 = 2;
                continue $sm;
              } else {
                this.state_1 = 1;
                suspendResult = this.tmp0_safe_receiver3__1.emit_lotjoj_k$(this.interaction2__1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 1:
            var tmp_0 = this;
            tmp_0.WHEN_RESULT4__1 = Unit_getInstance();
            this.state_1 = 2;
            continue $sm;
          case 2:
            ;
            var tmp_1 = this;
            this.$focusedInteraction_1.set_value_rnwamw_k$(null);
            tmp_1.WHEN_RESULT1__1 = Unit_getInstance();
            this.state_1 = 3;
            continue $sm;
          case 3:
            ;
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
  focusable$lambda$lambda$slambda_5.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new focusable$lambda$lambda$slambda_5(this.$focusedInteraction_1, this.$interactionSource_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  focusable$lambda$lambda$slambda_5.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  focusable$lambda$lambda$slambda_5.$metadata$ = classMeta('focusable$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function focusable$lambda$lambda$slambda_6($focusedInteraction, $interactionSource, resultContinuation) {
    var i = new focusable$lambda$lambda$slambda_5($focusedInteraction, $interactionSource, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function focusable$lambda$lambda_4($scope, $isFocused$delegate, $bringIntoViewRequester, $pinnableParent$delegate, $focusedInteraction, $interactionSource) {
    return function (it) {
      invoke$lambda_2($isFocused$delegate, it.get_isFocused_ci39vg_k$());
      var tmp;
      if (invoke$lambda_1($isFocused$delegate)) {
        var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
        launch$default($scope, null, tmp_0, focusable$lambda$lambda$slambda_2($bringIntoViewRequester, $pinnableParent$delegate, null), 1, null);
        launch$default($scope, null, null, focusable$lambda$lambda$slambda_4($focusedInteraction, $interactionSource, null), 3, null);
        tmp = Unit_getInstance();
      } else {
        launch$default($scope, null, null, focusable$lambda$lambda$slambda_6($focusedInteraction, $interactionSource, null), 3, null);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function focusable$lambda_0($interactionSource, $enabled) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(1871352361);
      sourceInformation($composer_0, 'C73@3129L24,74@3183L58,75@3268L50,76@3340L34,77@3400L29,89@4173L37,90@4251L280,90@4215L316,99@4536L390,130@5589L23:Focusable.kt#71ulvw');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1871352361, $changed, -1, 'androidx.compose.foundation.focusable.<anonymous> (Focusable.kt:72)');
        tmp = Unit_getInstance();
      }
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var tmp0_rememberCoroutineScope$composable = null;
      var tmp1_rememberCoroutineScope$composable = $composer_0;
      var getContext = {_v: tmp0_rememberCoroutineScope$composable};
      var $composer_1 = tmp1_rememberCoroutineScope$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(102870005);
      sourceInformation($composer_1, 'C(rememberCoroutineScope$composable)476@19869L144:Effects.kt#9igjgp');
      if (!(1 === 0)) {
        getContext._v = focusable$lambda$lambda;
      }
      var composer = $composer_1;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_1;
      var $composer_2 = tmp0_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        tmp$ret$0 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
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
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      var wrapper = tmp$ret$4;
      var tmp0_0 = wrapper.coroutineScope_1;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$5 = tmp0_0;
      var scope = tmp$ret$5;
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_3 = tmp2_remember$composable;
      $composer_3.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_3, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_3;
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (false ? true : tmp0_let_0 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$6;
        // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>' call
        tmp$ret$6 = mutableStateOf$default(null, null, 2, null);
        var value_0 = tmp$ret$6;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      tmp$ret$7 = tmp_2;
      tmp$ret$8 = tmp$ret$7;
      var tmp_3 = tmp$ret$8;
      tmp$ret$9 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_1 = tmp$ret$9;
      $composer_3.endReplaceableGroup_er37p7_k$();
      tmp$ret$10 = tmp0_1;
      var focusedInteraction = tmp$ret$10;
      var tmp$ret$15;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_4 = tmp3_remember$composable;
      $composer_4.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_4, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_4;
      var tmp$ret$13;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (false ? true : tmp0_let_1 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$11;
        // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>' call
        tmp$ret$11 = mutableStateOf$default(null, null, 2, null);
        var value_1 = tmp$ret$11;
        tmp1_cache_1.updateRememberedValue_l1colo_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = tmp0_let_1;
      }
      tmp$ret$12 = tmp_4;
      tmp$ret$13 = tmp$ret$12;
      var tmp_5 = tmp$ret$13;
      tmp$ret$14 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0_2 = tmp$ret$14;
      $composer_4.endReplaceableGroup_er37p7_k$();
      tmp$ret$15 = tmp0_2;
      var pinnableParent$delegate = tmp$ret$15;
      var tmp$ret$20;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp4_remember$composable = $composer_0;
      var $composer_5 = tmp4_remember$composable;
      $composer_5.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_5, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_5;
      var tmp$ret$18;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = tmp1_cache_2.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$17;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (false ? true : tmp0_let_2 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$16;
        // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>' call
        tmp$ret$16 = mutableStateOf$default(false, null, 2, null);
        var value_2 = tmp$ret$16;
        tmp1_cache_2.updateRememberedValue_l1colo_k$(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = tmp0_let_2;
      }
      tmp$ret$17 = tmp_6;
      tmp$ret$18 = tmp$ret$17;
      var tmp_7 = tmp$ret$18;
      tmp$ret$19 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      var tmp0_3 = tmp$ret$19;
      $composer_5.endReplaceableGroup_er37p7_k$();
      tmp$ret$20 = tmp0_3;
      var isFocused$delegate = tmp$ret$20;
      var tmp$ret$25;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp5_remember$composable = $composer_0;
      var $composer_6 = tmp5_remember$composable;
      $composer_6.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_6, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$24;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_3 = $composer_6;
      var tmp$ret$23;
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = tmp1_cache_3.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$22;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_8;
      if (false ? true : tmp0_let_3 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$21;
        // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>' call
        tmp$ret$21 = new FocusRequester();
        var value_3 = tmp$ret$21;
        tmp1_cache_3.updateRememberedValue_l1colo_k$(value_3);
        tmp_8 = value_3;
      } else {
        tmp_8 = tmp0_let_3;
      }
      tmp$ret$22 = tmp_8;
      tmp$ret$23 = tmp$ret$22;
      var tmp_9 = tmp$ret$23;
      tmp$ret$24 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      var tmp0_4 = tmp$ret$24;
      $composer_6.endReplaceableGroup_er37p7_k$();
      tmp$ret$25 = tmp0_4;
      var focusRequester_0 = tmp$ret$25;
      var tmp$ret$30;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp6_remember$composable = $composer_0;
      var $composer_7 = tmp6_remember$composable;
      $composer_7.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_7, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$29;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_4 = $composer_7;
      var tmp$ret$28;
      // Inline function 'kotlin.let' call
      var tmp0_let_4 = tmp1_cache_4.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$27;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_10;
      if (false ? true : tmp0_let_4 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$26;
        // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>' call
        tmp$ret$26 = funBringIntoViewRequester();
        var value_4 = tmp$ret$26;
        tmp1_cache_4.updateRememberedValue_l1colo_k$(value_4);
        tmp_10 = value_4;
      } else {
        tmp_10 = tmp0_let_4;
      }
      tmp$ret$27 = tmp_10;
      tmp$ret$28 = tmp$ret$27;
      var tmp_11 = tmp$ret$28;
      tmp$ret$29 = (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE();
      var tmp0_5 = tmp$ret$29;
      $composer_7.endReplaceableGroup_er37p7_k$();
      tmp$ret$30 = tmp0_5;
      var bringIntoViewRequester_0 = tmp$ret$30;
      var tmp$ret$35;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp7_remember$composable = $composer_0;
      var $composer_8 = tmp7_remember$composable;
      $composer_8.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_8, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$34;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_5 = $composer_8;
      var tmp2_cache = !!($composer_8.changed_ga7h3f_k$(focusedInteraction) | $composer_8.changed_ga7h3f_k$($interactionSource));
      var tmp$ret$33;
      // Inline function 'kotlin.let' call
      var tmp0_let_5 = tmp1_cache_5.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$32;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_12;
      if (tmp2_cache ? true : tmp0_let_5 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$31;
        // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>' call
        tmp$ret$31 = focusable$lambda$lambda_0(focusedInteraction, $interactionSource);
        var value_5 = tmp$ret$31;
        tmp1_cache_5.updateRememberedValue_l1colo_k$(value_5);
        tmp_12 = value_5;
      } else {
        tmp_12 = tmp0_let_5;
      }
      tmp$ret$32 = tmp_12;
      tmp$ret$33 = tmp$ret$32;
      var tmp_13 = tmp$ret$33;
      tmp$ret$34 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
      var tmp0_6 = tmp$ret$34;
      $composer_8.endReplaceableGroup_er37p7_k$();
      tmp$ret$35 = tmp0_6;
      DisposableEffect$composable($interactionSource, tmp$ret$35, $composer_0, 0);
      DisposableEffect$composable($enabled, focusable$lambda$lambda_1($enabled, scope, focusedInteraction, $interactionSource), $composer_0, 0);
      var tmp_14;
      if ($enabled) {
        $composer_0.startReplaceableGroup_rp6air_k$(1407541023);
        sourceInformation($composer_0, '114@5011L36');
        var tmp_15;
        if (invoke$lambda_1(isFocused$delegate)) {
          var tmp$ret$40;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp8_remember$composable = $composer_0;
          var $composer_9 = tmp8_remember$composable;
          $composer_9.startReplaceableGroup_rp6air_k$(547886695);
          sourceInformation($composer_9, 'C(remember$composable):Composables.kt#9igjgp');
          var tmp$ret$39;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache_6 = $composer_9;
          var tmp$ret$38;
          // Inline function 'kotlin.let' call
          var tmp0_let_6 = tmp1_cache_6.rememberedValue_4dg93v_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$37;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_16;
          if (false ? true : tmp0_let_6 === Companion_getInstance_6().Empty_1) {
            var tmp$ret$36;
            // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>' call
            tmp$ret$36 = new FocusedBoundsModifier();
            var value_6 = tmp$ret$36;
            tmp1_cache_6.updateRememberedValue_l1colo_k$(value_6);
            tmp_16 = value_6;
          } else {
            tmp_16 = tmp0_let_6;
          }
          tmp$ret$37 = tmp_16;
          tmp$ret$38 = tmp$ret$37;
          var tmp_17 = tmp$ret$38;
          tmp$ret$39 = (tmp_17 == null ? true : isObject(tmp_17)) ? tmp_17 : THROW_CCE();
          var tmp0_7 = tmp$ret$39;
          $composer_9.endReplaceableGroup_er37p7_k$();
          tmp$ret$40 = tmp0_7;
          tmp_15 = tmp$ret$40;
        } else {
          tmp_15 = Companion_getInstance_7();
        }
        var tmp1_group = tmp_15;
        $composer_0.endReplaceableGroup_er37p7_k$();
        var focusedChildModifier = tmp1_group;
        var tmp_18 = Companion_getInstance_7();
        var tmp_19 = semantics$default(tmp_18, false, focusable$lambda$lambda_2(isFocused$delegate, focusRequester_0), 1, null);
        var tmp$ret$45;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp9_remember$composable = $composer_0;
        var $composer_10 = tmp9_remember$composable;
        $composer_10.startReplaceableGroup_rp6air_k$(-838505973);
        sourceInformation($composer_10, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$44;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_7 = $composer_10;
        var tmp2_cache_0 = $composer_10.changed_ga7h3f_k$(pinnableParent$delegate);
        var tmp$ret$43;
        // Inline function 'kotlin.let' call
        var tmp0_let_7 = tmp1_cache_7.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$42;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_20;
        if (tmp2_cache_0 ? true : tmp0_let_7 === Companion_getInstance_6().Empty_1) {
          var tmp$ret$41;
          // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>' call
          tmp$ret$41 = focusable$lambda$lambda_3(pinnableParent$delegate);
          var value_7 = tmp$ret$41;
          tmp1_cache_7.updateRememberedValue_l1colo_k$(value_7);
          tmp_20 = value_7;
        } else {
          tmp_20 = tmp0_let_7;
        }
        tmp$ret$42 = tmp_20;
        tmp$ret$43 = tmp$ret$42;
        var tmp_21 = tmp$ret$43;
        tmp$ret$44 = (tmp_21 == null ? true : isObject(tmp_21)) ? tmp_21 : THROW_CCE();
        var tmp0_8 = tmp$ret$44;
        $composer_10.endReplaceableGroup_er37p7_k$();
        tmp$ret$45 = tmp0_8;
        var tmp_22 = focusRequester(bringIntoViewRequester(onPinnableParentAvailable(tmp_19, tmp$ret$45), bringIntoViewRequester_0), focusRequester_0).then_5qw5wu_k$(focusedChildModifier);
        tmp_14 = focusTarget(onFocusChanged(tmp_22, focusable$lambda$lambda_4(scope, isFocused$delegate, bringIntoViewRequester_0, pinnableParent$delegate, focusedInteraction, $interactionSource)));
      } else {
        tmp_14 = Companion_getInstance_7();
      }
      var tmp2_group = tmp_14;
      var tmp0_9 = tmp2_group;
      var tmp_23;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_23 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0_9;
    };
  }
  function onPinnableParentAvailable$lambda($onPinnableParentAvailable) {
    return function ($this$null) {
      $this$null.name_1 = 'onPinnableParentAvailable';
      $this$null.properties_1.set_y753qn_k$('onPinnableParentAvailable', $onPinnableParentAvailable);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Focusable_kt_k4lele;
  function init_properties_Focusable_kt_y3fsle() {
    if (properties_initialized_Focusable_kt_k4lele) {
    } else {
      properties_initialized_Focusable_kt_k4lele = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
      var tmp;
      if (get_isDebugInspectorInfoEnabled()) {
        tmp = focusGroupInspectorInfo$lambda;
      } else {
        tmp = get_NoInspectorInfo();
      }
      tmp$ret$0 = tmp;
      focusGroupInspectorInfo = new InspectableModifier(tmp$ret$0);
    }
  }
  function get_ModifierLocalFocusedBoundsObserver() {
    init_properties_FocusedBounds_kt_p9k0t4();
    return ModifierLocalFocusedBoundsObserver;
  }
  var ModifierLocalFocusedBoundsObserver;
  function _set_observer__2xwq81($this, _set____db54di) {
    $this.observer_1 = _set____db54di;
  }
  function _get_observer__9uzl8r($this) {
    return $this.observer_1;
  }
  function _set_layoutCoordinates__ckqjyk($this, _set____db54di) {
    $this.layoutCoordinates_1 = _set____db54di;
  }
  function _get_layoutCoordinates__yajg8w($this) {
    return $this.layoutCoordinates_1;
  }
  function notifyObserverWhenAttached($this) {
    if (!($this.layoutCoordinates_1 == null) ? ensureNotNull($this.layoutCoordinates_1).get_isAttached_odsl1l_k$() : false) {
      var tmp0_safe_receiver = $this.observer_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this.layoutCoordinates_1);
    }
  }
  function FocusedBoundsModifier() {
    this.observer_1 = null;
    this.layoutCoordinates_1 = null;
  }
  FocusedBoundsModifier.prototype.onGloballyPositioned_14gzvn_k$ = function (coordinates) {
    this.layoutCoordinates_1 = coordinates;
    if (coordinates.get_isAttached_odsl1l_k$()) {
      notifyObserverWhenAttached(this);
    } else {
      var tmp0_safe_receiver = this.observer_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(null);
    }
  };
  FocusedBoundsModifier.prototype.onModifierLocalsUpdated_dk8grv_k$ = function (scope) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.FocusedBoundsModifier.onModifierLocalsUpdated.<anonymous>' call
    tmp$ret$0 = scope.get_current_og61yl_k$(get_ModifierLocalFocusedBoundsObserver());
    tmp$ret$1 = tmp$ret$0;
    var newObserver = tmp$ret$1;
    if (newObserver == null) {
      var tmp0_safe_receiver = this.observer_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(null);
    }
    this.observer_1 = newObserver;
  };
  FocusedBoundsModifier.$metadata$ = classMeta('FocusedBoundsModifier', [ModifierLocalConsumer, OnGloballyPositionedModifier]);
  function ModifierLocalFocusedBoundsObserver$lambda() {
    init_properties_FocusedBounds_kt_p9k0t4();
    return null;
  }
  var properties_initialized_FocusedBounds_kt_k69nss;
  function init_properties_FocusedBounds_kt_p9k0t4() {
    if (properties_initialized_FocusedBounds_kt_k69nss) {
    } else {
      properties_initialized_FocusedBounds_kt_k69nss = true;
      ModifierLocalFocusedBoundsObserver = modifierLocalOf(ModifierLocalFocusedBoundsObserver$lambda);
    }
  }
  function hoverable(_this__u8e3s4, interactionSource, enabled) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = hoverable$lambda(interactionSource, enabled);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp_0 = tmp$ret$0;
    return composed$composable(_this__u8e3s4, tmp_0, hoverable$lambda_0(interactionSource, enabled));
  }
  function hoverable$default(_this__u8e3s4, interactionSource, enabled, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      enabled = true;
    return hoverable(_this__u8e3s4, interactionSource, enabled);
  }
  function hoverable$lambda($interactionSource, $enabled) {
    return function ($this$null) {
      $this$null.name_1 = 'hoverable';
      $this$null.properties_1.set_y753qn_k$('interactionSource', $interactionSource);
      $this$null.properties_1.set_y753qn_k$('enabled', $enabled);
      return Unit_getInstance();
    };
  }
  function invoke$lambda_3($hoverInteraction$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('hoverInteraction', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $hoverInteraction$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function invoke$lambda_4($hoverInteraction$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('hoverInteraction', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $hoverInteraction$delegate.set_value_rnwamw_k$(value);
  }
  function invoke$emitEnter($interactionSource, hoverInteraction$delegate, $cont) {
    var tmp = new $invoke$emitEnterCOROUTINE$0($interactionSource, hoverInteraction$delegate, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function invoke$emitExit($interactionSource, hoverInteraction$delegate, $cont) {
    var tmp = new $invoke$emitExitCOROUTINE$1($interactionSource, hoverInteraction$delegate, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function invoke$tryEmitExit($interactionSource, hoverInteraction$delegate) {
    var tmp0_safe_receiver = invoke$lambda_3(hoverInteraction$delegate);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var interaction = new Exit(tmp0_safe_receiver);
      $interactionSource.tryEmit_fphub9_k$(interaction);
      invoke$lambda_4(hoverInteraction$delegate, null);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function _no_name_provided__qut3iv_2($interactionSource, $hoverInteraction$delegate) {
    this.$interactionSource_1 = $interactionSource;
    this.$hoverInteraction$delegate_1 = $hoverInteraction$delegate;
  }
  _no_name_provided__qut3iv_2.prototype.dispose_3n44we_k$ = function () {
    // Inline function 'androidx.compose.foundation.hoverable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    invoke$tryEmitExit(this.$interactionSource_1, this.$hoverInteraction$delegate_1);
  };
  _no_name_provided__qut3iv_2.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function hoverable$lambda$lambda($interactionSource, $hoverInteraction$delegate) {
    return function ($this$DisposableEffect) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_2($interactionSource, $hoverInteraction$delegate);
      return tmp$ret$0;
    };
  }
  function hoverable$lambda$slambda($enabled, $interactionSource, $hoverInteraction$delegate, resultContinuation) {
    this.$enabled_1 = $enabled;
    this.$interactionSource_1 = $interactionSource;
    this.$hoverInteraction$delegate_1 = $hoverInteraction$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  hoverable$lambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  hoverable$lambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  hoverable$lambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            if (!this.$enabled_1) {
              this.state_1 = 1;
              suspendResult = invoke$emitExit(this.$interactionSource_1, this.$hoverInteraction$delegate_1, this);
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
  hoverable$lambda$slambda.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new hoverable$lambda$slambda(this.$enabled_1, this.$interactionSource_1, this.$hoverInteraction$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  hoverable$lambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  hoverable$lambda$slambda.$metadata$ = classMeta('hoverable$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function hoverable$lambda$slambda_0($enabled, $interactionSource, $hoverInteraction$delegate, resultContinuation) {
    var i = new hoverable$lambda$slambda($enabled, $interactionSource, $hoverInteraction$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function hoverable$lambda$slambda$slambda$slambda$slambda($interactionSource, $hoverInteraction$delegate, resultContinuation) {
    this.$interactionSource_1 = $interactionSource;
    this.$hoverInteraction$delegate_1 = $hoverInteraction$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  hoverable$lambda$slambda$slambda$slambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  hoverable$lambda$slambda$slambda$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  hoverable$lambda$slambda$slambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = invoke$emitEnter(this.$interactionSource_1, this.$hoverInteraction$delegate_1, this);
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
  hoverable$lambda$slambda$slambda$slambda$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new hoverable$lambda$slambda$slambda$slambda$slambda(this.$interactionSource_1, this.$hoverInteraction$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  hoverable$lambda$slambda$slambda$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  hoverable$lambda$slambda$slambda$slambda$slambda.$metadata$ = classMeta('hoverable$lambda$slambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function hoverable$lambda$slambda$slambda$slambda$slambda_0($interactionSource, $hoverInteraction$delegate, resultContinuation) {
    var i = new hoverable$lambda$slambda$slambda$slambda$slambda($interactionSource, $hoverInteraction$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function hoverable$lambda$slambda$slambda$slambda$slambda_1($interactionSource, $hoverInteraction$delegate, resultContinuation) {
    this.$interactionSource_1 = $interactionSource;
    this.$hoverInteraction$delegate_1 = $hoverInteraction$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  hoverable$lambda$slambda$slambda$slambda$slambda_1.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  hoverable$lambda$slambda$slambda$slambda$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  hoverable$lambda$slambda$slambda$slambda$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = invoke$emitExit(this.$interactionSource_1, this.$hoverInteraction$delegate_1, this);
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
  hoverable$lambda$slambda$slambda$slambda$slambda_1.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new hoverable$lambda$slambda$slambda$slambda$slambda_1(this.$interactionSource_1, this.$hoverInteraction$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  hoverable$lambda$slambda$slambda$slambda$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  hoverable$lambda$slambda$slambda$slambda$slambda_1.$metadata$ = classMeta('hoverable$lambda$slambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function hoverable$lambda$slambda$slambda$slambda$slambda_2($interactionSource, $hoverInteraction$delegate, resultContinuation) {
    var i = new hoverable$lambda$slambda$slambda$slambda$slambda_1($interactionSource, $hoverInteraction$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function hoverable$lambda$slambda$slambda$slambda($currentContext, $outerScope, $interactionSource, $hoverInteraction$delegate, resultContinuation) {
    this.$currentContext_1 = $currentContext;
    this.$outerScope_1 = $outerScope;
    this.$interactionSource_1 = $interactionSource;
    this.$hoverInteraction$delegate_1 = $hoverInteraction$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  hoverable$lambda$slambda$slambda$slambda.prototype.invoke_6kuihv_k$ = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.create_699gxy_k$($this$awaitPointerEventScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  hoverable$lambda$slambda$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  hoverable$lambda$slambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.$currentContext_1)) {
              this.state_1 = 3;
              continue $sm;
            }

            this.state_1 = 2;
            suspendResult = this.$this$awaitPointerEventScope_1.awaitPointerEvent$default_gxqupv_k$(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var event = suspendResult;
            var tmp0_subject = event.type_1;
            if (tmp0_subject === Companion_getInstance_9().Enter_1) {
              var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
              launch$default(this.$outerScope_1, null, tmp_0, hoverable$lambda$slambda$slambda$slambda$slambda_0(this.$interactionSource_1, this.$hoverInteraction$delegate_1, null), 1, null);
            } else if (tmp0_subject === Companion_getInstance_9().Exit_1) {
              var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
              launch$default(this.$outerScope_1, null, tmp_1, hoverable$lambda$slambda$slambda$slambda$slambda_2(this.$interactionSource_1, this.$hoverInteraction$delegate_1, null), 1, null);
            }

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
  hoverable$lambda$slambda$slambda$slambda.prototype.create_699gxy_k$ = function ($this$awaitPointerEventScope, completion) {
    var i = new hoverable$lambda$slambda$slambda$slambda(this.$currentContext_1, this.$outerScope_1, this.$interactionSource_1, this.$hoverInteraction$delegate_1, completion);
    i.$this$awaitPointerEventScope_1 = $this$awaitPointerEventScope;
    return i;
  };
  hoverable$lambda$slambda$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  hoverable$lambda$slambda$slambda$slambda.$metadata$ = classMeta('hoverable$lambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function hoverable$lambda$slambda$slambda$slambda_0($currentContext, $outerScope, $interactionSource, $hoverInteraction$delegate, resultContinuation) {
    var i = new hoverable$lambda$slambda$slambda$slambda($currentContext, $outerScope, $interactionSource, $hoverInteraction$delegate, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.invoke_6kuihv_k$($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function hoverable$lambda$slambda$slambda($this_pointerInput, $interactionSource, $hoverInteraction$delegate, resultContinuation) {
    this.$this_pointerInput_1 = $this_pointerInput;
    this.$interactionSource_1 = $interactionSource;
    this.$hoverInteraction$delegate_1 = $hoverInteraction$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  hoverable$lambda$slambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$coroutineScope, $cont) {
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  hoverable$lambda$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  hoverable$lambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            var tmp_0 = this;
            tmp_0.currentContext0__1 = this.get_context_h02k06_k$();
            this.outerScope1__1 = this.$this$coroutineScope_1;
            this.state_1 = 1;
            suspendResult = this.$this_pointerInput_1.awaitPointerEventScope_w0i122_k$(hoverable$lambda$slambda$slambda$slambda_0(this.currentContext0__1, this.outerScope1__1, this.$interactionSource_1, this.$hoverInteraction$delegate_1, null), this);
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
  hoverable$lambda$slambda$slambda.prototype.create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    var i = new hoverable$lambda$slambda$slambda(this.$this_pointerInput_1, this.$interactionSource_1, this.$hoverInteraction$delegate_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  hoverable$lambda$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  hoverable$lambda$slambda$slambda.$metadata$ = classMeta('hoverable$lambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function hoverable$lambda$slambda$slambda_0($this_pointerInput, $interactionSource, $hoverInteraction$delegate, resultContinuation) {
    var i = new hoverable$lambda$slambda$slambda($this_pointerInput, $interactionSource, $hoverInteraction$delegate, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.invoke_d6gbsu_k$($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function hoverable$lambda$slambda_1($interactionSource, $hoverInteraction$delegate, resultContinuation) {
    this.$interactionSource_1 = $interactionSource;
    this.$hoverInteraction$delegate_1 = $hoverInteraction$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  hoverable$lambda$slambda_1.prototype.invoke_dycxzz_k$ = function ($this$pointerInput, $cont) {
    var tmp = this.create_9k90ga_k$($this$pointerInput, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  hoverable$lambda$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  hoverable$lambda$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = coroutineScope(hoverable$lambda$slambda$slambda_0(this.$this$pointerInput_1, this.$interactionSource_1, this.$hoverInteraction$delegate_1, null), this);
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
  hoverable$lambda$slambda_1.prototype.create_9k90ga_k$ = function ($this$pointerInput, completion) {
    var i = new hoverable$lambda$slambda_1(this.$interactionSource_1, this.$hoverInteraction$delegate_1, completion);
    i.$this$pointerInput_1 = $this$pointerInput;
    return i;
  };
  hoverable$lambda$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  hoverable$lambda$slambda_1.$metadata$ = classMeta('hoverable$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function hoverable$lambda$slambda_2($interactionSource, $hoverInteraction$delegate, resultContinuation) {
    var i = new hoverable$lambda$slambda_1($interactionSource, $hoverInteraction$delegate, resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.invoke_dycxzz_k$($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $invoke$emitEnterCOROUTINE$0($interactionSource, hoverInteraction$delegate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.$interactionSource_1 = $interactionSource;
    this.hoverInteraction$delegate_1 = hoverInteraction$delegate;
  }
  $invoke$emitEnterCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            if (invoke$lambda_3(this.hoverInteraction$delegate_1) == null) {
              this.interaction0__1 = new Enter();
              this.state_1 = 1;
              suspendResult = this.$interactionSource_1.emit_lotjoj_k$(this.interaction0__1, this);
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
            invoke$lambda_4(this.hoverInteraction$delegate_1, this.interaction0__1);
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
  $invoke$emitEnterCOROUTINE$0.$metadata$ = classMeta('$invoke$emitEnterCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $invoke$emitExitCOROUTINE$1($interactionSource, hoverInteraction$delegate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.$interactionSource_1 = $interactionSource;
    this.hoverInteraction$delegate_1 = hoverInteraction$delegate;
  }
  $invoke$emitExitCOROUTINE$1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.tmp0_safe_receiver0__1 = invoke$lambda_3(this.hoverInteraction$delegate_1);
            if (this.tmp0_safe_receiver0__1 == null) {
              this.WHEN_RESULT1__1 = null;
              this.state_1 = 2;
              continue $sm;
            } else {
              this.interaction2__1 = new Exit(this.tmp0_safe_receiver0__1);
              this.state_1 = 1;
              suspendResult = this.$interactionSource_1.emit_lotjoj_k$(this.interaction2__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            var tmp_0 = this;
            invoke$lambda_4(this.hoverInteraction$delegate_1, null);
            tmp_0.WHEN_RESULT1__1 = Unit_getInstance();
            this.state_1 = 2;
            continue $sm;
          case 2:
            ;
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
  $invoke$emitExitCOROUTINE$1.$metadata$ = classMeta('$invoke$emitExitCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function hoverable$lambda_0($interactionSource, $enabled) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(1294013553);
      sourceInformation($composer_0, 'C56@2209L58,82@3012L43,82@2976L79,85@3084L64,85@3060L88,93@3231L996:Hoverable.kt#71ulvw');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1294013553, $changed, -1, 'androidx.compose.foundation.hoverable.<anonymous> (Hoverable.kt:55)');
        tmp = Unit_getInstance();
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
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.hoverable.<anonymous>.<anonymous>' call
        tmp$ret$0 = mutableStateOf$default(null, null, 2, null);
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
      var hoverInteraction$delegate = tmp$ret$4;
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var $composer_2 = tmp1_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_2, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = !!($composer_2.changed_ga7h3f_k$(hoverInteraction$delegate) | $composer_2.changed_ga7h3f_k$($interactionSource));
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$5;
        // Inline function 'androidx.compose.foundation.hoverable.<anonymous>.<anonymous>' call
        tmp$ret$5 = hoverable$lambda$lambda($interactionSource, hoverInteraction$delegate);
        var value_0 = tmp$ret$5;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_2;
      tmp$ret$7 = tmp$ret$6;
      var tmp_3 = tmp$ret$7;
      tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$9 = tmp0_0;
      DisposableEffect$composable($interactionSource, tmp$ret$9, $composer_0, 0);
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_3 = tmp2_remember$composable;
      $composer_3.startReplaceableGroup_rp6air_k$(-1058148781);
      sourceInformation($composer_3, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_3;
      var tmp2_cache_0 = !!(!!($composer_3.changed_ga7h3f_k$($enabled) | $composer_3.changed_ga7h3f_k$(hoverInteraction$delegate)) | $composer_3.changed_ga7h3f_k$($interactionSource));
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp2_cache_0 ? true : tmp0_let_1 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$10;
        // Inline function 'androidx.compose.foundation.hoverable.<anonymous>.<anonymous>' call
        tmp$ret$10 = hoverable$lambda$slambda_0($enabled, $interactionSource, hoverInteraction$delegate, null);
        var value_1 = tmp$ret$10;
        tmp1_cache_1.updateRememberedValue_l1colo_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = tmp0_let_1;
      }
      tmp$ret$11 = tmp_4;
      tmp$ret$12 = tmp$ret$11;
      var tmp_5 = tmp$ret$12;
      tmp$ret$13 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.endReplaceableGroup_er37p7_k$();
      tmp$ret$14 = tmp0_1;
      LaunchedEffect$composable($enabled, tmp$ret$14, $composer_0, 0);
      var tmp_6;
      if ($enabled) {
        var tmp_7 = Companion_getInstance_7();
        var tmp$ret$19;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_4 = tmp3_remember$composable;
        $composer_4.startReplaceableGroup_rp6air_k$(-1124426577);
        sourceInformation($composer_4, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_2 = $composer_4;
        var tmp2_cache_1 = !!($composer_4.changed_ga7h3f_k$(hoverInteraction$delegate) | $composer_4.changed_ga7h3f_k$($interactionSource));
        var tmp$ret$17;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp1_cache_2.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_8;
        if (tmp2_cache_1 ? true : tmp0_let_2 === Companion_getInstance_6().Empty_1) {
          var tmp$ret$15;
          // Inline function 'androidx.compose.foundation.hoverable.<anonymous>.<anonymous>' call
          tmp$ret$15 = hoverable$lambda$slambda_2($interactionSource, hoverInteraction$delegate, null);
          var value_2 = tmp$ret$15;
          tmp1_cache_2.updateRememberedValue_l1colo_k$(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = tmp0_let_2;
        }
        tmp$ret$16 = tmp_8;
        tmp$ret$17 = tmp$ret$16;
        var tmp_9 = tmp$ret$17;
        tmp$ret$18 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
        var tmp0_2 = tmp$ret$18;
        $composer_4.endReplaceableGroup_er37p7_k$();
        tmp$ret$19 = tmp0_2;
        tmp_6 = pointerInput_0(tmp_7, $interactionSource, tmp$ret$19);
      } else {
        tmp_6 = Companion_getInstance_7();
      }
      var tmp1_group = tmp_6;
      var tmp0_3 = tmp1_group;
      var tmp_10;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_10 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0_3;
    };
  }
  function get_LocalIndication() {
    init_properties_Indication_kt_f0egou();
    return LocalIndication;
  }
  var LocalIndication;
  function Indication() {
  }
  Indication.$metadata$ = interfaceMeta('Indication');
  function _get_isPressed__f6cq7t($this) {
    return $this.isPressed_1;
  }
  function _get_isHovered__wio4dc($this) {
    return $this.isHovered_1;
  }
  function _get_isFocused__xvmarg($this) {
    return $this.isFocused_1;
  }
  function DefaultDebugIndicationInstance(isPressed, isHovered, isFocused) {
    this.isPressed_1 = isPressed;
    this.isHovered_1 = isHovered;
    this.isFocused_1 = isFocused;
  }
  DefaultDebugIndicationInstance.prototype.drawIndication_4sht7n_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.drawContent_m0d3yc_k$();
    if (this.isPressed_1.get_value_j01efc_k$()) {
      var tmp = Companion_getInstance_0().Black_1;
      var tmp_0 = Color__copy$default_impl_ectz3s(tmp, 0.3, 0.0, 0.0, 0.0, 14, null);
      var tmp_1 = _this__u8e3s4.get_size_x9ctfw_k$();
      _this__u8e3s4.drawRect$default_xwjj6g_k$(tmp_0, null, tmp_1, 0.0, null, null, null, 122, null);
    } else if (this.isHovered_1.get_value_j01efc_k$() ? true : this.isFocused_1.get_value_j01efc_k$()) {
      var tmp_2 = Companion_getInstance_0().Black_1;
      var tmp_3 = Color__copy$default_impl_ectz3s(tmp_2, 0.1, 0.0, 0.0, 0.0, 14, null);
      var tmp_4 = _this__u8e3s4.get_size_x9ctfw_k$();
      _this__u8e3s4.drawRect$default_xwjj6g_k$(tmp_3, null, tmp_4, 0.0, null, null, null, 122, null);
    }
  };
  DefaultDebugIndicationInstance.$metadata$ = classMeta('DefaultDebugIndicationInstance', [IndicationInstance]);
  function DefaultDebugIndication() {
    DefaultDebugIndication_instance = this;
  }
  DefaultDebugIndication.prototype.rememberUpdatedInstance_1mtpmt_k$ = function (interactionSource) {
    illegalDecoyCallException('rememberUpdatedInstance');
  };
  DefaultDebugIndication.prototype.rememberUpdatedInstance$composable_3l23r4_k$ = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(202464790);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance$composable)183@7542L25,184@7610L25,185@7678L25,186@7719L115:Indication.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(202464790, $changed, -1, 'androidx.compose.foundation.DefaultDebugIndication.rememberUpdatedInstance$composable (Indication.kt:182)');
    }
    var isPressed = collectIsPressedAsState$composable(interactionSource, $composer_0, 14 & $changed);
    var isHovered = collectIsHoveredAsState$composable(interactionSource, $composer_0, 14 & $changed);
    var isFocused = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed);
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
    var tmp2_cache = $composer_1.changed_ga7h3f_k$(interactionSource);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.DefaultDebugIndication.rememberUpdatedInstance$composable.<anonymous>' call
      tmp$ret$0 = new DefaultDebugIndicationInstance(isPressed, isHovered, isFocused);
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
  DefaultDebugIndication.$metadata$ = objectMeta('DefaultDebugIndication', [Indication]);
  var DefaultDebugIndication_instance;
  function DefaultDebugIndication_getInstance() {
    if (DefaultDebugIndication_instance == null)
      new DefaultDebugIndication();
    return DefaultDebugIndication_instance;
  }
  function IndicationInstance() {
  }
  IndicationInstance.$metadata$ = interfaceMeta('IndicationInstance');
  function indication(_this__u8e3s4, interactionSource, indication) {
    init_properties_Indication_kt_f0egou();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = indication$lambda(indication, interactionSource);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp0_inspectorInfo = tmp$ret$0;
    return composed$composable(_this__u8e3s4, tmp0_inspectorInfo, indication$lambda_0(interactionSource, indication));
  }
  function TempInteractionSource(interactions) {
    this.interactions_1 = interactions;
  }
  TempInteractionSource.prototype.get_interactions_ql02qy_k$ = function () {
    return this.interactions_1;
  };
  TempInteractionSource.$metadata$ = classMeta('TempInteractionSource', [InteractionSource]);
  function NoIndicationInstance() {
    NoIndicationInstance_instance = this;
  }
  NoIndicationInstance.prototype.drawIndication_4sht7n_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.drawContent_m0d3yc_k$();
  };
  NoIndicationInstance.$metadata$ = objectMeta('NoIndicationInstance', [IndicationInstance]);
  var NoIndicationInstance_instance;
  function NoIndicationInstance_getInstance() {
    if (NoIndicationInstance_instance == null)
      new NoIndicationInstance();
    return NoIndicationInstance_instance;
  }
  function NoIndication() {
    NoIndication_instance = this;
  }
  NoIndication.prototype.rememberUpdatedInstance_1mtpmt_k$ = function (interactionSource) {
    illegalDecoyCallException('rememberUpdatedInstance');
  };
  NoIndication.prototype.rememberUpdatedInstance$composable_3l23r4_k$ = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(951700357);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance$composable):Indication.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(951700357, $changed, -1, 'androidx.compose.foundation.NoIndication.rememberUpdatedInstance$composable (Indication.kt:156)');
    }
    var tmp0 = NoIndicationInstance_getInstance();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  NoIndication.$metadata$ = objectMeta('NoIndication', [Indication]);
  var NoIndication_instance;
  function NoIndication_getInstance() {
    if (NoIndication_instance == null)
      new NoIndication();
    return NoIndication_instance;
  }
  function IndicationModifier(indicationInstance) {
    this.indicationInstance_1 = indicationInstance;
  }
  IndicationModifier.prototype.get_indicationInstance_mwx752_k$ = function () {
    return this.indicationInstance_1;
  };
  IndicationModifier.prototype.draw_j25tpb_k$ = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.indicationInstance_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp0_with.drawIndication_4sht7n_k$(_this__u8e3s4);
    tmp$ret$0 = Unit_getInstance();
  };
  IndicationModifier.$metadata$ = classMeta('IndicationModifier', [DrawModifier]);
  function LocalIndication$lambda() {
    init_properties_Indication_kt_f0egou();
    return DefaultDebugIndication_getInstance();
  }
  function indication$lambda($indication, $interactionSource) {
    return function ($this$null) {
      $this$null.name_1 = 'indication';
      $this$null.properties_1.set_y753qn_k$('indication', $indication);
      $this$null.properties_1.set_y753qn_k$('interactionSource', $interactionSource);
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function indication$lambda$o$collect$slambda($inputModeManager, $collector, resultContinuation) {
    this.$inputModeManager_1 = $inputModeManager;
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  indication$lambda$o$collect$slambda.prototype.invoke_ry6yte_k$ = function (value, $cont) {
    var tmp = this.create_xj5a0d_k$(value, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  indication$lambda$o$collect$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ry6yte_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  indication$lambda$o$collect$slambda.prototype.doResume_5yljmg_k$ = function () {
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
            var tmp_0;
            if (this.$inputModeManager_1.get_inputMode_ga9bte_k$() === Companion_getInstance_10().Touch_1) {
              var tmp_1 = this.value_1;
              tmp_0 = tmp_1 instanceof Focus;
            } else {
              tmp_0 = false;
            }

            if (!tmp_0) {
              this.state_1 = 3;
              suspendResult = this.$collector_1.emit_1fbrsb_k$(this.value_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.state_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            if (false) {
              this.state_1 = 1;
              continue $sm;
            }

            this.state_1 = 4;
            continue $sm;
          case 3:
            this.tmp$ret$00__1 = suspendResult;
            this.state_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  indication$lambda$o$collect$slambda.prototype.create_xj5a0d_k$ = function (value, completion) {
    var i = new indication$lambda$o$collect$slambda(this.$inputModeManager_1, this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  indication$lambda$o$collect$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_xj5a0d_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  indication$lambda$o$collect$slambda.$metadata$ = classMeta('indication$lambda$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function indication$lambda$o$collect$slambda_0($inputModeManager, $collector, resultContinuation) {
    var i = new indication$lambda$o$collect$slambda($inputModeManager, $collector, resultContinuation);
    var l = function (value, $cont) {
      return i.invoke_ry6yte_k$(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  $collectCOROUTINE$2.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            var tmp_0 = indication$lambda$o$collect$slambda_0(this._this__u8e3s4__1.$inputModeManager_1, this.collector_1, null);
            suspendResult = this._this__u8e3s4__1.$tmp0_filter_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  $collectCOROUTINE$2.$metadata$ = classMeta('$collectCOROUTINE$2', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_3($tmp0_filter, $inputModeManager) {
    this.$tmp0_filter_1 = $tmp0_filter;
    this.$inputModeManager_1 = $inputModeManager;
  }
  _no_name_provided__qut3iv_3.prototype.collect_1hbq91_k$ = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$2(this, collector, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  _no_name_provided__qut3iv_3.prototype.collect_llpwvh_k$ = function (collector, $cont) {
    return this.collect_1hbq91_k$(collector, $cont);
  };
  _no_name_provided__qut3iv_3.$metadata$ = classMeta(undefined, [Flow]);
  function indication$lambda_0($interactionSource, $indication) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(-353972293);
      sourceInformation($composer_0, 'C114@5074L7,115@5122L362,125@5588L50,126@5647L71:Indication.kt#71ulvw');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-353972293, $changed, -1, 'androidx.compose.foundation.indication.<anonymous> (Indication.kt:113)');
        tmp = Unit_getInstance();
      }
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalInputModeManager();
      var tmp1_$get_current$$composable_gn3xww = $composer_0;
      var $composer_1 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_1, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$0 = tmp0;
      var inputModeManager = tmp$ret$0;
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_2 = tmp2_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2;
      var tmp2_cache = $composer_2.changed_ga7h3f_k$($interactionSource);
      var tmp$ret$6;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
        var tmp$ret$4;
        // Inline function 'androidx.compose.foundation.indication.<anonymous>.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.flow.filter' call
        var tmp0_filter = $interactionSource.get_interactions_ql02qy_k$();
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
        tmp$ret$1 = new _no_name_provided__qut3iv_3(tmp0_filter, inputModeManager);
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = new TempInteractionSource(tmp$ret$3);
        var value = tmp$ret$4;
        tmp1_cache.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$5 = tmp_0;
      tmp$ret$6 = tmp$ret$5;
      var tmp_1 = tmp$ret$6;
      tmp$ret$7 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0_0 = tmp$ret$7;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$8 = tmp0_0;
      var filteredInteractionSource = tmp$ret$8;
      var tmp0_elvis_lhs = $indication;
      var resolvedIndication = tmp0_elvis_lhs == null ? NoIndication_getInstance() : tmp0_elvis_lhs;
      var instance = resolvedIndication.rememberUpdatedInstance$composable_3l23r4_k$(filteredInteractionSource, $composer_0, 0);
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_3 = tmp3_remember$composable;
      $composer_3.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_3, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_3;
      var tmp2_cache_0 = $composer_3.changed_ga7h3f_k$(instance);
      var tmp$ret$11;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$9;
        // Inline function 'androidx.compose.foundation.indication.<anonymous>.<anonymous>' call
        tmp$ret$9 = new IndicationModifier(instance);
        var value_0 = tmp$ret$9;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      tmp$ret$10 = tmp_2;
      tmp$ret$11 = tmp$ret$10;
      var tmp_3 = tmp$ret$11;
      tmp$ret$12 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_1 = tmp$ret$12;
      $composer_3.endReplaceableGroup_er37p7_k$();
      tmp$ret$13 = tmp0_1;
      var tmp0_2 = tmp$ret$13;
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0_2;
    };
  }
  var properties_initialized_Indication_kt_w71gpq;
  function init_properties_Indication_kt_f0egou() {
    if (properties_initialized_Indication_kt_w71gpq) {
    } else {
      properties_initialized_Indication_kt_w71gpq = true;
      LocalIndication = staticCompositionLocalOf(LocalIndication$lambda);
    }
  }
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
  function values() {
    return [MutatePriority_Default_getInstance(), MutatePriority_UserInput_getInstance(), MutatePriority_PreventUserInput_getInstance()];
  }
  function valueOf(value) {
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
  Mutator.prototype.canInterrupt_6vroxo_k$ = function (other) {
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
      if (oldMutator == null ? true : mutator.canInterrupt_6vroxo_k$(oldMutator)) {
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
            this.mutator0__1 = new Mutator(this.$priority_1, ensureNotNull(this.$this$coroutineScope_1.get_coroutineContext_115oqo_k$().get_1pi7hg_k$(Key_getInstance())));
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
            this.mutator0__1 = new Mutator(this.$priority_1, ensureNotNull(this.$this$coroutineScope_1.get_coroutineContext_115oqo_k$().get_1pi7hg_k$(Key_getInstance())));
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
  MutatorMutex.prototype.mutate_chbpxi_k$ = function (priority, block, $cont) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $cont);
  };
  MutatorMutex.prototype.mutate$default_yp3xw_k$ = function (priority, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      priority = MutatePriority_Default_getInstance();
    return this.mutate_chbpxi_k$(priority, block, $cont);
  };
  MutatorMutex.prototype.mutateWith_lit8yb_k$ = function (receiver, priority, block, $cont) {
    return coroutineScope(MutatorMutex$mutateWith$slambda_0(priority, this, block, receiver, null), $cont);
  };
  MutatorMutex.prototype.mutateWith$default_1d18vb_k$ = function (receiver, priority, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      priority = MutatePriority_Default_getInstance();
    return this.mutateWith_lit8yb_k$(receiver, priority, block, $cont);
  };
  MutatorMutex.$metadata$ = classMeta('MutatorMutex');
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
  function progressSemantics(_this__u8e3s4, value, valueRange, steps) {
    return semantics(_this__u8e3s4, true, progressSemantics$lambda(value, valueRange, steps));
  }
  function progressSemantics$default(_this__u8e3s4, value, valueRange, steps, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      valueRange = rangeTo(0.0, 1.0);
    if (!(($mask0 & 4) === 0))
      steps = 0;
    return progressSemantics(_this__u8e3s4, value, valueRange, steps);
  }
  function progressSemantics$lambda($value, $valueRange, $steps) {
    return function ($this$semantics) {
      set_progressBarRangeInfo($this$semantics, new ProgressBarRangeInfo(coerceIn($value, $valueRange), $valueRange, $steps));
      return Unit_getInstance();
    };
  }
  function fastMapIndexedNotNull(_this__u8e3s4, transform) {
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.foundation.fastMapIndexedNotNull.<anonymous>' call
        var tmp0_safe_receiver = transform(index, item);
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          target.add_1j60pz_k$(tmp0_safe_receiver);
          tmp$ret$0 = Unit_getInstance();
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function get_HorizontalPointerDirectionConfig() {
    init_properties_DragGestureDetector_kt_mvy3qx();
    return HorizontalPointerDirectionConfig;
  }
  var HorizontalPointerDirectionConfig;
  function get_VerticalPointerDirectionConfig() {
    init_properties_DragGestureDetector_kt_mvy3qx();
    return VerticalPointerDirectionConfig;
  }
  var VerticalPointerDirectionConfig;
  function get_mouseSlop() {
    init_properties_DragGestureDetector_kt_mvy3qx();
    return mouseSlop;
  }
  var mouseSlop;
  function get_defaultTouchSlop() {
    init_properties_DragGestureDetector_kt_mvy3qx();
    return defaultTouchSlop;
  }
  var defaultTouchSlop;
  function get_mouseToTouchSlopRatio() {
    init_properties_DragGestureDetector_kt_mvy3qx();
    return mouseToTouchSlopRatio;
  }
  var mouseToTouchSlopRatio;
  function PointerDirectionConfig() {
  }
  PointerDirectionConfig.$metadata$ = interfaceMeta('PointerDirectionConfig');
  function awaitPointerSlopOrCancellation(_this__u8e3s4, pointerId, pointerType, pointerDirectionConfig, triggerOnMainAxisSlop, onPointerSlopReached, $cont) {
    var tmp = new $awaitPointerSlopOrCancellationCOROUTINE$3(_this__u8e3s4, pointerId, pointerType, pointerDirectionConfig, triggerOnMainAxisSlop, onPointerSlopReached, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function toPointerDirectionConfig(_this__u8e3s4) {
    init_properties_DragGestureDetector_kt_mvy3qx();
    return _this__u8e3s4.equals(Orientation_Vertical_getInstance()) ? get_VerticalPointerDirectionConfig() : get_HorizontalPointerDirectionConfig();
  }
  function verticalDrag(_this__u8e3s4, pointerId, onDrag, $cont) {
    var tmp = new $verticalDragCOROUTINE$4(_this__u8e3s4, pointerId, onDrag, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function horizontalDrag(_this__u8e3s4, pointerId, onDrag, $cont) {
    var tmp = new $horizontalDragCOROUTINE$5(_this__u8e3s4, pointerId, onDrag, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function isPointerUp(_this__u8e3s4, pointerId) {
    init_properties_DragGestureDetector_kt_mvy3qx();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
      var tmp0_fastFirstOrNull = _this__u8e3s4.changes_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.foundation.gestures.isPointerUp.<anonymous>' call
          tmp$ret$0 = equals(item.id_1, pointerId);
          if (tmp$ret$0) {
            tmp$ret$1 = item;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pressed_1) === true);
  }
  function pointerSlop(_this__u8e3s4, pointerType) {
    init_properties_DragGestureDetector_kt_mvy3qx();
    var tmp0_subject = pointerType;
    return tmp0_subject === Companion_getInstance_11().Mouse_1 ? _this__u8e3s4.get_touchSlop_ej3fhs_k$() * get_mouseToTouchSlopRatio() : _this__u8e3s4.get_touchSlop_ej3fhs_k$();
  }
  function drag(_this__u8e3s4, pointerId, onDrag, motionFromChange, motionConsumed, $cont) {
    var tmp = new $dragCOROUTINE$6(_this__u8e3s4, pointerId, onDrag, motionFromChange, motionConsumed, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function awaitDragOrUp(_this__u8e3s4, pointerId, hasDragged, $cont) {
    var tmp = new $awaitDragOrUpCOROUTINE$7(_this__u8e3s4, pointerId, hasDragged, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function detectDragGesturesAfterLongPress(_this__u8e3s4, onDragStart, onDragEnd, onDragCancel, onDrag, $cont) {
    return forEachGesture(_this__u8e3s4, detectDragGesturesAfterLongPress$slambda_0(onDragCancel, onDragStart, onDragEnd, onDrag, null), $cont);
  }
  function detectDragGesturesAfterLongPress$default(_this__u8e3s4, onDragStart, onDragEnd, onDragCancel, onDrag, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      onDragStart = detectDragGesturesAfterLongPress$lambda;
    }
    if (!(($mask0 & 2) === 0)) {
      onDragEnd = detectDragGesturesAfterLongPress$lambda_0;
    }
    if (!(($mask0 & 4) === 0)) {
      onDragCancel = detectDragGesturesAfterLongPress$lambda_1;
    }
    return detectDragGesturesAfterLongPress(_this__u8e3s4, onDragStart, onDragEnd, onDragCancel, onDrag, $cont);
  }
  function drag_0(_this__u8e3s4, pointerId, onDrag, $cont) {
    var tmp = new $dragCOROUTINE$8(_this__u8e3s4, pointerId, onDrag, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function awaitLongPressOrCancellation(_this__u8e3s4, pointerId, $cont) {
    var tmp = new $awaitLongPressOrCancellationCOROUTINE$9(_this__u8e3s4, pointerId, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function awaitDragOrCancellation(_this__u8e3s4, pointerId, $cont) {
    var tmp = new $awaitDragOrCancellationCOROUTINE$10(_this__u8e3s4, pointerId, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function isPointerUp$accessor$2pjqd1(_this__u8e3s4, pointerId) {
    init_properties_DragGestureDetector_kt_mvy3qx();
    return isPointerUp(_this__u8e3s4, pointerId);
  }
  function isPointerUp$accessor$2pjqd1_0(_this__u8e3s4, pointerId) {
    init_properties_DragGestureDetector_kt_mvy3qx();
    return isPointerUp(_this__u8e3s4, pointerId);
  }
  function HorizontalPointerDirectionConfig$1() {
  }
  HorizontalPointerDirectionConfig$1.prototype.mainAxisDelta_r99w23_k$ = function (offset) {
    return _Offset___get_x__impl__xvi35n(offset);
  };
  HorizontalPointerDirectionConfig$1.prototype.crossAxisDelta_uv6j4e_k$ = function (offset) {
    return _Offset___get_y__impl__8bzhra(offset);
  };
  HorizontalPointerDirectionConfig$1.prototype.offsetFromChanges_ujoh6i_k$ = function (mainChange, crossChange) {
    return Offset(mainChange, crossChange);
  };
  HorizontalPointerDirectionConfig$1.$metadata$ = classMeta(undefined, [PointerDirectionConfig]);
  function VerticalPointerDirectionConfig$1() {
  }
  VerticalPointerDirectionConfig$1.prototype.mainAxisDelta_r99w23_k$ = function (offset) {
    return _Offset___get_y__impl__8bzhra(offset);
  };
  VerticalPointerDirectionConfig$1.prototype.crossAxisDelta_uv6j4e_k$ = function (offset) {
    return _Offset___get_x__impl__xvi35n(offset);
  };
  VerticalPointerDirectionConfig$1.prototype.offsetFromChanges_ujoh6i_k$ = function (mainChange, crossChange) {
    return Offset(crossChange, mainChange);
  };
  VerticalPointerDirectionConfig$1.$metadata$ = classMeta(undefined, [PointerDirectionConfig]);
  function detectDragGesturesAfterLongPress$lambda(it) {
    init_properties_DragGestureDetector_kt_mvy3qx();
    return Unit_getInstance();
  }
  function detectDragGesturesAfterLongPress$lambda_0() {
    init_properties_DragGestureDetector_kt_mvy3qx();
    return Unit_getInstance();
  }
  function detectDragGesturesAfterLongPress$lambda_1() {
    init_properties_DragGestureDetector_kt_mvy3qx();
    return Unit_getInstance();
  }
  function detectDragGesturesAfterLongPress$slambda$slambda$lambda($onDrag) {
    return function (it) {
      $onDrag(it, new Offset_0(positionChange(it)));
      it.consume_spbz2t_k$();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPress$slambda$slambda($onDragStart, $onDragEnd, $onDragCancel, $onDrag, resultContinuation) {
    this.$onDragStart_1 = $onDragStart;
    this.$onDragEnd_1 = $onDragEnd;
    this.$onDragCancel_1 = $onDragCancel;
    this.$onDrag_1 = $onDrag;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.invoke_6kuihv_k$ = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.create_699gxy_k$($this$awaitPointerEventScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 6;
            this.state_1 = 1;
            suspendResult = awaitFirstDown(this.$this$awaitPointerEventScope_1, false, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.down0__1 = suspendResult;
            this.state_1 = 2;
            suspendResult = awaitLongPressOrCancellation(this.$this$awaitPointerEventScope_1, this.down0__1.id_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.drag1__1 = suspendResult;
            if (!(this.drag1__1 == null)) {
              this.$onDragStart_1(new Offset_0(this.drag1__1.position_1));
              this.state_1 = 3;
              suspendResult = drag_0(this.$this$awaitPointerEventScope_1, this.drag1__1.id_1, detectDragGesturesAfterLongPress$slambda$slambda$lambda(this.$onDrag_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.state_1 = 5;
              continue $sm;
            }

            break;
          case 3:
            if (suspendResult) {
              var tmp0_fastForEach = this.$this$awaitPointerEventScope_1.get_currentEvent_sfuq5m_k$().changes_1;
              var inductionVariable = 0;
              var last = tmp0_fastForEach.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastForEach.get_fkrdnv_k$(index);
                  if (changedToUp(item)) {
                    item.consume_spbz2t_k$();
                  }
                }
                 while (inductionVariable <= last);
              this.$onDragEnd_1();
              this.state_1 = 4;
              continue $sm;
            } else {
              this.$onDragCancel_1();
              this.state_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.state_1 = 5;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 6) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.create_699gxy_k$ = function ($this$awaitPointerEventScope, completion) {
    var i = new detectDragGesturesAfterLongPress$slambda$slambda(this.$onDragStart_1, this.$onDragEnd_1, this.$onDragCancel_1, this.$onDrag_1, completion);
    i.$this$awaitPointerEventScope_1 = $this$awaitPointerEventScope;
    return i;
  };
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  detectDragGesturesAfterLongPress$slambda$slambda.$metadata$ = classMeta('detectDragGesturesAfterLongPress$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectDragGesturesAfterLongPress$slambda$slambda_0($onDragStart, $onDragEnd, $onDragCancel, $onDrag, resultContinuation) {
    var i = new detectDragGesturesAfterLongPress$slambda$slambda($onDragStart, $onDragEnd, $onDragCancel, $onDrag, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.invoke_6kuihv_k$($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectDragGesturesAfterLongPress$slambda($onDragCancel, $onDragStart, $onDragEnd, $onDrag, resultContinuation) {
    this.$onDragCancel_1 = $onDragCancel;
    this.$onDragStart_1 = $onDragStart;
    this.$onDragEnd_1 = $onDragEnd;
    this.$onDrag_1 = $onDrag;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectDragGesturesAfterLongPress$slambda.prototype.invoke_dycxzz_k$ = function ($this$forEachGesture, $cont) {
    var tmp = this.create_9k90ga_k$($this$forEachGesture, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  detectDragGesturesAfterLongPress$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectDragGesturesAfterLongPress$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.$this$forEachGesture_1.awaitPointerEventScope_w0i122_k$(detectDragGesturesAfterLongPress$slambda$slambda_0(this.$onDragStart_1, this.$onDragEnd_1, this.$onDragCancel_1, this.$onDrag_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.exceptionState_1 = 3;
            this.state_1 = 4;
            continue $sm;
          case 2:
            this.exceptionState_1 = 3;
            var tmp_0 = this.exception_1;
            if (tmp_0 instanceof CancellationException) {
              var c = this.exception_1;
              this.$onDragCancel_1();
              throw c;
            } else {
              throw this.exception_1;
            }

            break;
          case 3:
            throw this.exception_1;
          case 4:
            this.exceptionState_1 = 3;
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
  detectDragGesturesAfterLongPress$slambda.prototype.create_9k90ga_k$ = function ($this$forEachGesture, completion) {
    var i = new detectDragGesturesAfterLongPress$slambda(this.$onDragCancel_1, this.$onDragStart_1, this.$onDragEnd_1, this.$onDrag_1, completion);
    i.$this$forEachGesture_1 = $this$forEachGesture;
    return i;
  };
  detectDragGesturesAfterLongPress$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  detectDragGesturesAfterLongPress$slambda.$metadata$ = classMeta('detectDragGesturesAfterLongPress$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectDragGesturesAfterLongPress$slambda_0($onDragCancel, $onDragStart, $onDragEnd, $onDrag, resultContinuation) {
    var i = new detectDragGesturesAfterLongPress$slambda($onDragCancel, $onDragStart, $onDragEnd, $onDrag, resultContinuation);
    var l = function ($this$forEachGesture, $cont) {
      return i.invoke_dycxzz_k$($this$forEachGesture, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function awaitLongPressOrCancellation$slambda($currentDown, $longPress, resultContinuation) {
    this.$currentDown_1 = $currentDown;
    this.$longPress_1 = $longPress;
    CoroutineImpl.call(this, resultContinuation);
  }
  awaitLongPressOrCancellation$slambda.prototype.invoke_6kuihv_k$ = function ($this$withTimeout, $cont) {
    var tmp = this.create_699gxy_k$($this$withTimeout, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  awaitLongPressOrCancellation$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  awaitLongPressOrCancellation$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 5;
            this.finished0__1 = false;
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (!!this.finished0__1) {
              this.state_1 = 4;
              continue $sm;
            }

            this.state_1 = 2;
            suspendResult = this.$this$withTimeout_1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.event1__1 = suspendResult;
            l$ret$1: do {
              var tmp0_fastAll = this.event1__1.changes_1;
              var inductionVariable = 0;
              var last = tmp0_fastAll.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastAll.get_fkrdnv_k$(index);
                  if (!changedToUpIgnoreConsumed(item)) {
                    this.tmp$ret$02__1 = false;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              this.tmp$ret$02__1 = true;
            }
             while (false);
            if (this.tmp$ret$02__1) {
              this.finished0__1 = true;
            }

            l$ret$3: do {
              var tmp1_fastAny = this.event1__1.changes_1;
              var inductionVariable_0 = 0;
              var last_0 = tmp1_fastAny.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = tmp1_fastAny.get_fkrdnv_k$(index_0);
                  if (item_0.get_isConsumed_scj5q3_k$() ? true : isOutOfBounds(item_0, this.$this$withTimeout_1.get_size_yscczt_k$(), this.$this$withTimeout_1.get_extendedTouchPadding_uaqi8a_k$())) {
                    this.tmp$ret$23__1 = true;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable_0 <= last_0);
              this.tmp$ret$23__1 = false;
            }
             while (false);
            if (this.tmp$ret$23__1) {
              this.finished0__1 = true;
            }

            this.state_1 = 3;
            suspendResult = this.$this$withTimeout_1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var consumeCheck = suspendResult;
            var tmp$ret$4;
            l$ret$5: do {
              var tmp2_fastAny = consumeCheck.changes_1;
              var inductionVariable_1 = 0;
              var last_1 = tmp2_fastAny.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable_1 <= last_1)
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp2_fastAny.get_fkrdnv_k$(index_1);
                  if (item_1.get_isConsumed_scj5q3_k$()) {
                    tmp$ret$4 = true;
                    break l$ret$5;
                  }
                }
                 while (inductionVariable_1 <= last_1);
              tmp$ret$4 = false;
            }
             while (false);
            if (tmp$ret$4) {
              this.finished0__1 = true;
            }

            if (isPointerUp$accessor$2pjqd1_0(this.event1__1, this.$currentDown_1._v.id_1)) {
              var tmp$ret$6;
              l$ret$7: do {
                var tmp3_fastFirstOrNull = this.event1__1.changes_1;
                var inductionVariable_2 = 0;
                var last_2 = tmp3_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_2 <= last_2)
                  do {
                    var index_2 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var item_2 = tmp3_fastFirstOrNull.get_fkrdnv_k$(index_2);
                    if (item_2.pressed_1) {
                      tmp$ret$6 = item_2;
                      break l$ret$7;
                    }
                  }
                   while (inductionVariable_2 <= last_2);
                tmp$ret$6 = null;
              }
               while (false);
              var newPressed = tmp$ret$6;
              if (!(newPressed == null)) {
                this.$currentDown_1._v = newPressed;
                this.$longPress_1._v = this.$currentDown_1._v;
              } else {
                this.finished0__1 = true;
              }
            } else {
              var tmp$ret$8;
              l$ret$9: do {
                var tmp4_fastFirstOrNull = this.event1__1.changes_1;
                var inductionVariable_3 = 0;
                var last_3 = tmp4_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_3 <= last_3)
                  do {
                    var index_3 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var item_3 = tmp4_fastFirstOrNull.get_fkrdnv_k$(index_3);
                    if (equals(item_3.id_1, this.$currentDown_1._v.id_1)) {
                      tmp$ret$8 = item_3;
                      break l$ret$9;
                    }
                  }
                   while (inductionVariable_3 <= last_3);
                tmp$ret$8 = null;
              }
               while (false);
              this.$longPress_1._v = tmp$ret$8;
            }

            this.state_1 = 1;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  awaitLongPressOrCancellation$slambda.prototype.create_699gxy_k$ = function ($this$withTimeout, completion) {
    var i = new awaitLongPressOrCancellation$slambda(this.$currentDown_1, this.$longPress_1, completion);
    i.$this$withTimeout_1 = $this$withTimeout;
    return i;
  };
  awaitLongPressOrCancellation$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  awaitLongPressOrCancellation$slambda.$metadata$ = classMeta('awaitLongPressOrCancellation$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function awaitLongPressOrCancellation$slambda_0($currentDown, $longPress, resultContinuation) {
    var i = new awaitLongPressOrCancellation$slambda($currentDown, $longPress, resultContinuation);
    var l = function ($this$withTimeout, $cont) {
      return i.invoke_6kuihv_k$($this$withTimeout, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $awaitPointerSlopOrCancellationCOROUTINE$3(_this__u8e3s4, pointerId, pointerType, pointerDirectionConfig, triggerOnMainAxisSlop, onPointerSlopReached, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
    this.pointerType_1 = pointerType;
    this.pointerDirectionConfig_1 = pointerDirectionConfig;
    this.triggerOnMainAxisSlop_1 = triggerOnMainAxisSlop;
    this.onPointerSlopReached_1 = onPointerSlopReached;
  }
  $awaitPointerSlopOrCancellationCOROUTINE$3.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 6;
            if (isPointerUp$accessor$2pjqd1_0(this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$(), this.pointerId_1)) {
              return null;
            }

            this.touchSlop0__1 = pointerSlop(this._this__u8e3s4__1.get_viewConfiguration_qgdaco_k$(), this.pointerType_1);
            this.pointer1__1 = this.pointerId_1;
            this.totalMainPositionChange2__1 = 0.0;
            this.totalCrossPositionChange3__1 = 0.0;
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.state_1 = 7;
              continue $sm;
            }

            this.state_1 = 2;
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent$default_gxqupv_k$(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.event4__1 = suspendResult;
            var tmp_0 = this;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull = this.event4__1.changes_1;
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
                  if (equals(item.id_1, this.pointer1__1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.dragEvent5__1 = tmp_1;
            if (this.dragEvent5__1.get_isConsumed_scj5q3_k$()) {
              return null;
            } else {
              if (changedToUpIgnoreConsumed(this.dragEvent5__1)) {
                var tmp$ret$2;
                l$ret$3: do {
                  var tmp1_fastFirstOrNull = this.event4__1.changes_1;
                  var inductionVariable_0 = 0;
                  var last_0 = tmp1_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                  if (inductionVariable_0 <= last_0)
                    do {
                      var index_0 = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      var item_0 = tmp1_fastFirstOrNull.get_fkrdnv_k$(index_0);
                      if (item_0.pressed_1) {
                        tmp$ret$2 = item_0;
                        break l$ret$3;
                      }
                    }
                     while (inductionVariable_0 <= last_0);
                  tmp$ret$2 = null;
                }
                 while (false);
                var otherDown = tmp$ret$2;
                if (otherDown == null) {
                  return null;
                } else {
                  this.pointer1__1 = otherDown.id_1;
                }
                this.state_1 = 5;
                continue $sm;
              } else {
                this.currentPosition6__1 = this.dragEvent5__1.position_1;
                this.previousPosition7__1 = this.dragEvent5__1.previousPosition_1;
                this.mainPositionChange8__1 = this.pointerDirectionConfig_1.mainAxisDelta_r99w23_k$(this.currentPosition6__1) - this.pointerDirectionConfig_1.mainAxisDelta_r99w23_k$(this.previousPosition7__1);
                this.crossPositionChange9__1 = this.pointerDirectionConfig_1.crossAxisDelta_uv6j4e_k$(this.currentPosition6__1) - this.pointerDirectionConfig_1.crossAxisDelta_uv6j4e_k$(this.previousPosition7__1);
                this.totalMainPositionChange2__1 = this.totalMainPositionChange2__1 + this.mainPositionChange8__1;
                this.totalCrossPositionChange3__1 = this.totalCrossPositionChange3__1 + this.crossPositionChange9__1;
                var tmp_2 = this;
                var tmp_3;
                if (this.triggerOnMainAxisSlop_1) {
                  var tmp2_abs = this.totalMainPositionChange2__1;
                  tmp_3 = Math.abs(tmp2_abs);
                } else {
                  tmp_3 = Offset__getDistance_impl_pclvxn(this.pointerDirectionConfig_1.offsetFromChanges_ujoh6i_k$(this.totalMainPositionChange2__1, this.totalCrossPositionChange3__1));
                }
                tmp_2.inDirection10__1 = tmp_3;
                if (this.inDirection10__1 < this.touchSlop0__1) {
                  this.state_1 = 3;
                  suspendResult = this._this__u8e3s4__1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Final_getInstance(), this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_4;
                  if (this.triggerOnMainAxisSlop_1) {
                    var tmp_5 = this.totalMainPositionChange2__1;
                    var tmp3_sign = this.totalMainPositionChange2__1;
                    var finalMainPositionChange = tmp_5 - sign(tmp3_sign) * this.touchSlop0__1;
                    tmp_4 = this.pointerDirectionConfig_1.offsetFromChanges_ujoh6i_k$(finalMainPositionChange, this.totalCrossPositionChange3__1);
                  } else {
                    var offset = this.pointerDirectionConfig_1.offsetFromChanges_ujoh6i_k$(this.totalMainPositionChange2__1, this.totalCrossPositionChange3__1);
                    var touchSlopOffset = Offset__times_impl_jz1mli(Offset__div_impl_eaxtg1(offset, this.inDirection10__1), this.touchSlop0__1);
                    tmp_4 = Offset__minus_impl_hoj2c0(offset, touchSlopOffset);
                  }
                  var postSlopOffset = tmp_4;
                  this.onPointerSlopReached_1(this.dragEvent5__1, new Offset_0(postSlopOffset));
                  if (this.dragEvent5__1.get_isConsumed_scj5q3_k$()) {
                    return this.dragEvent5__1;
                  } else {
                    this.totalMainPositionChange2__1 = 0.0;
                    this.totalCrossPositionChange3__1 = 0.0;
                  }
                  this.state_1 = 4;
                  continue $sm;
                }
              }
            }

            break;
          case 3:
            ;
            if (this.dragEvent5__1.get_isConsumed_scj5q3_k$()) {
              return null;
            }

            this.state_1 = 4;
            continue $sm;
          case 4:
            this.state_1 = 5;
            continue $sm;
          case 5:
            this.state_1 = 1;
            continue $sm;
          case 6:
            throw this.exception_1;
          case 7:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.exceptionState_1 === 6) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $awaitPointerSlopOrCancellationCOROUTINE$3.$metadata$ = classMeta('$awaitPointerSlopOrCancellationCOROUTINE$3', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $verticalDragCOROUTINE$4(_this__u8e3s4, pointerId, onDrag, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
    this.onDrag_1 = onDrag;
  }
  $verticalDragCOROUTINE$4.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 17;
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (isPointerUp$accessor$2pjqd1_0(this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$(), this.pointerId_1)) {
              this.tmp$ret$00__1 = false;
              this.state_1 = 16;
              continue $sm;
            } else {
              this.state_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.pointer1__1 = this.pointerId_1;
            this.state_1 = 3;
            continue $sm;
          case 3:
            if (false) {
              this.state_1 = 15;
              continue $sm;
            }

            this.state_1 = 4;
            continue $sm;
          case 4:
            var tmp_0 = this;
            tmp_0.tmp2_awaitDragOrUp3__1 = this.pointer1__1;
            this.pointer4__1 = this.tmp2_awaitDragOrUp3__1;
            this.state_1 = 5;
            continue $sm;
          case 5:
            if (false) {
              this.state_1 = 10;
              continue $sm;
            }

            this.state_1 = 6;
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent$default_gxqupv_k$(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var event = suspendResult;
            var tmp$ret$2;
            l$ret$3: do {
              var tmp0_fastFirstOrNull = event.changes_1;
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
                  if (equals(item.id_1, this.pointer4__1)) {
                    tmp$ret$2 = item;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$2 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$2;
            var WHEN_RESULT;
            if (tmp0_elvis_lhs == null) {
              this.tmp$ret$42__1 = null;
              this.state_1 = 11;
              continue $sm;
            } else {
              WHEN_RESULT = tmp0_elvis_lhs;
              this.state_1 = 7;
              continue $sm;
            }

            break;
          case 7:
            var dragEvent = WHEN_RESULT;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$6;
              l$ret$7: do {
                var tmp1_fastFirstOrNull = event.changes_1;
                var inductionVariable_0 = 0;
                var last_0 = tmp1_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = tmp1_fastFirstOrNull.get_fkrdnv_k$(index_0);
                    if (item_0.pressed_1) {
                      tmp$ret$6 = item_0;
                      break l$ret$7;
                    }
                  }
                   while (inductionVariable_0 <= last_0);
                tmp$ret$6 = null;
              }
               while (false);
              var otherDown = tmp$ret$6;
              if (otherDown == null) {
                this.tmp$ret$42__1 = dragEvent;
                this.state_1 = 11;
                continue $sm;
              } else {
                this.pointer4__1 = otherDown.id_1;
                this.state_1 = 8;
                continue $sm;
              }
            } else {
              if (!(_Offset___get_y__impl__8bzhra(positionChangeIgnoreConsumed(dragEvent)) === 0.0)) {
                this.tmp$ret$42__1 = dragEvent;
                this.state_1 = 11;
                continue $sm;
              } else {
                this.state_1 = 9;
                continue $sm;
              }
            }

            ;
            break;
          case 8:
            this.state_1 = 9;
            continue $sm;
          case 9:
            this.state_1 = 5;
            continue $sm;
          case 10:
            if (false) {
              this.state_1 = 4;
              continue $sm;
            }

            this.state_1 = 11;
            continue $sm;
          case 11:
            var tmp0_elvis_lhs_0 = this.tmp$ret$42__1;
            var WHEN_RESULT_0;
            if (tmp0_elvis_lhs_0 == null) {
              this.tmp$ret$00__1 = false;
              this.state_1 = 16;
              continue $sm;
            } else {
              WHEN_RESULT_0 = tmp0_elvis_lhs_0;
              this.state_1 = 12;
              continue $sm;
            }

            break;
          case 12:
            var change = WHEN_RESULT_0;
            if (change.get_isConsumed_scj5q3_k$()) {
              this.tmp$ret$00__1 = false;
              this.state_1 = 16;
              continue $sm;
            } else {
              this.state_1 = 13;
              continue $sm;
            }

            ;
            break;
          case 13:
            if (changedToUpIgnoreConsumed(change)) {
              this.tmp$ret$00__1 = true;
              this.state_1 = 16;
              continue $sm;
            } else {
              this.state_1 = 14;
              continue $sm;
            }

            break;
          case 14:
            this.onDrag_1(change);
            this.pointer1__1 = change.id_1;
            this.state_1 = 3;
            continue $sm;
          case 15:
            if (false) {
              this.state_1 = 1;
              continue $sm;
            }

            this.state_1 = 16;
            continue $sm;
          case 16:
            return this.tmp$ret$00__1;
          case 17:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 17) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $verticalDragCOROUTINE$4.$metadata$ = classMeta('$verticalDragCOROUTINE$4', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $horizontalDragCOROUTINE$5(_this__u8e3s4, pointerId, onDrag, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
    this.onDrag_1 = onDrag;
  }
  $horizontalDragCOROUTINE$5.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 17;
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (isPointerUp$accessor$2pjqd1_0(this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$(), this.pointerId_1)) {
              this.tmp$ret$00__1 = false;
              this.state_1 = 16;
              continue $sm;
            } else {
              this.state_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.pointer1__1 = this.pointerId_1;
            this.state_1 = 3;
            continue $sm;
          case 3:
            if (false) {
              this.state_1 = 15;
              continue $sm;
            }

            this.state_1 = 4;
            continue $sm;
          case 4:
            var tmp_0 = this;
            tmp_0.tmp2_awaitDragOrUp3__1 = this.pointer1__1;
            this.pointer4__1 = this.tmp2_awaitDragOrUp3__1;
            this.state_1 = 5;
            continue $sm;
          case 5:
            if (false) {
              this.state_1 = 10;
              continue $sm;
            }

            this.state_1 = 6;
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent$default_gxqupv_k$(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var event = suspendResult;
            var tmp$ret$2;
            l$ret$3: do {
              var tmp0_fastFirstOrNull = event.changes_1;
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
                  if (equals(item.id_1, this.pointer4__1)) {
                    tmp$ret$2 = item;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$2 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$2;
            var WHEN_RESULT;
            if (tmp0_elvis_lhs == null) {
              this.tmp$ret$42__1 = null;
              this.state_1 = 11;
              continue $sm;
            } else {
              WHEN_RESULT = tmp0_elvis_lhs;
              this.state_1 = 7;
              continue $sm;
            }

            break;
          case 7:
            var dragEvent = WHEN_RESULT;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$6;
              l$ret$7: do {
                var tmp1_fastFirstOrNull = event.changes_1;
                var inductionVariable_0 = 0;
                var last_0 = tmp1_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = tmp1_fastFirstOrNull.get_fkrdnv_k$(index_0);
                    if (item_0.pressed_1) {
                      tmp$ret$6 = item_0;
                      break l$ret$7;
                    }
                  }
                   while (inductionVariable_0 <= last_0);
                tmp$ret$6 = null;
              }
               while (false);
              var otherDown = tmp$ret$6;
              if (otherDown == null) {
                this.tmp$ret$42__1 = dragEvent;
                this.state_1 = 11;
                continue $sm;
              } else {
                this.pointer4__1 = otherDown.id_1;
                this.state_1 = 8;
                continue $sm;
              }
            } else {
              if (!(_Offset___get_x__impl__xvi35n(positionChangeIgnoreConsumed(dragEvent)) === 0.0)) {
                this.tmp$ret$42__1 = dragEvent;
                this.state_1 = 11;
                continue $sm;
              } else {
                this.state_1 = 9;
                continue $sm;
              }
            }

            ;
            break;
          case 8:
            this.state_1 = 9;
            continue $sm;
          case 9:
            this.state_1 = 5;
            continue $sm;
          case 10:
            if (false) {
              this.state_1 = 4;
              continue $sm;
            }

            this.state_1 = 11;
            continue $sm;
          case 11:
            var tmp0_elvis_lhs_0 = this.tmp$ret$42__1;
            var WHEN_RESULT_0;
            if (tmp0_elvis_lhs_0 == null) {
              this.tmp$ret$00__1 = false;
              this.state_1 = 16;
              continue $sm;
            } else {
              WHEN_RESULT_0 = tmp0_elvis_lhs_0;
              this.state_1 = 12;
              continue $sm;
            }

            break;
          case 12:
            var change = WHEN_RESULT_0;
            if (change.get_isConsumed_scj5q3_k$()) {
              this.tmp$ret$00__1 = false;
              this.state_1 = 16;
              continue $sm;
            } else {
              this.state_1 = 13;
              continue $sm;
            }

            ;
            break;
          case 13:
            if (changedToUpIgnoreConsumed(change)) {
              this.tmp$ret$00__1 = true;
              this.state_1 = 16;
              continue $sm;
            } else {
              this.state_1 = 14;
              continue $sm;
            }

            break;
          case 14:
            this.onDrag_1(change);
            this.pointer1__1 = change.id_1;
            this.state_1 = 3;
            continue $sm;
          case 15:
            if (false) {
              this.state_1 = 1;
              continue $sm;
            }

            this.state_1 = 16;
            continue $sm;
          case 16:
            return this.tmp$ret$00__1;
          case 17:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 17) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $horizontalDragCOROUTINE$5.$metadata$ = classMeta('$horizontalDragCOROUTINE$5', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $dragCOROUTINE$6(_this__u8e3s4, pointerId, onDrag, motionFromChange, motionConsumed, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
    this.onDrag_1 = onDrag;
    this.motionFromChange_1 = motionFromChange;
    this.motionConsumed_1 = motionConsumed;
  }
  $dragCOROUTINE$6.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 10;
            if (isPointerUp$accessor$2pjqd1_0(this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$(), this.pointerId_1)) {
              return false;
            }

            this.pointer0__1 = this.pointerId_1;
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.state_1 = 11;
              continue $sm;
            }

            this.state_1 = 2;
            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.tmp2_awaitDragOrUp2__1 = this.pointer0__1;
            this.pointer3__1 = this.tmp2_awaitDragOrUp2__1;
            this.state_1 = 3;
            continue $sm;
          case 3:
            if (false) {
              this.state_1 = 8;
              continue $sm;
            }

            this.state_1 = 4;
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent$default_gxqupv_k$(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var event = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull = event.changes_1;
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
                  if (equals(item.id_1, this.pointer3__1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var WHEN_RESULT;
            if (tmp0_elvis_lhs == null) {
              this.tmp$ret$21__1 = null;
              this.state_1 = 9;
              continue $sm;
            } else {
              WHEN_RESULT = tmp0_elvis_lhs;
              this.state_1 = 5;
              continue $sm;
            }

            break;
          case 5:
            var dragEvent = WHEN_RESULT;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$4;
              l$ret$5: do {
                var tmp1_fastFirstOrNull = event.changes_1;
                var inductionVariable_0 = 0;
                var last_0 = tmp1_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = tmp1_fastFirstOrNull.get_fkrdnv_k$(index_0);
                    if (item_0.pressed_1) {
                      tmp$ret$4 = item_0;
                      break l$ret$5;
                    }
                  }
                   while (inductionVariable_0 <= last_0);
                tmp$ret$4 = null;
              }
               while (false);
              var otherDown = tmp$ret$4;
              if (otherDown == null) {
                this.tmp$ret$21__1 = dragEvent;
                this.state_1 = 9;
                continue $sm;
              } else {
                this.pointer3__1 = otherDown.id_1;
                this.state_1 = 6;
                continue $sm;
              }
            } else {
              if (!(this.motionFromChange_1(dragEvent) === 0.0)) {
                this.tmp$ret$21__1 = dragEvent;
                this.state_1 = 9;
                continue $sm;
              } else {
                this.state_1 = 7;
                continue $sm;
              }
            }

            ;
            break;
          case 6:
            this.state_1 = 7;
            continue $sm;
          case 7:
            this.state_1 = 3;
            continue $sm;
          case 8:
            if (false) {
              this.state_1 = 2;
              continue $sm;
            }

            this.state_1 = 9;
            continue $sm;
          case 9:
            var tmp0_elvis_lhs_0 = this.tmp$ret$21__1;
            var tmp_1;
            if (tmp0_elvis_lhs_0 == null) {
              return false;
            } else {
              tmp_1 = tmp0_elvis_lhs_0;
            }

            var change = tmp_1;
            if (this.motionConsumed_1(change)) {
              return false;
            }

            if (changedToUpIgnoreConsumed(change)) {
              return true;
            }

            this.onDrag_1(change);
            this.pointer0__1 = change.id_1;
            this.state_1 = 1;
            continue $sm;
          case 10:
            throw this.exception_1;
          case 11:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.exceptionState_1 === 10) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $dragCOROUTINE$6.$metadata$ = classMeta('$dragCOROUTINE$6', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitDragOrUpCOROUTINE$7(_this__u8e3s4, pointerId, hasDragged, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
    this.hasDragged_1 = hasDragged;
  }
  $awaitDragOrUpCOROUTINE$7.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.pointer0__1 = this.pointerId_1;
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.state_1 = 4;
              continue $sm;
            }

            this.state_1 = 2;
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent$default_gxqupv_k$(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var event = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull = event.changes_1;
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
                  if (equals(item.id_1, this.pointer0__1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var dragEvent = tmp_0;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$2;
              l$ret$3: do {
                var tmp1_fastFirstOrNull = event.changes_1;
                var inductionVariable_0 = 0;
                var last_0 = tmp1_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = tmp1_fastFirstOrNull.get_fkrdnv_k$(index_0);
                    if (item_0.pressed_1) {
                      tmp$ret$2 = item_0;
                      break l$ret$3;
                    }
                  }
                   while (inductionVariable_0 <= last_0);
                tmp$ret$2 = null;
              }
               while (false);
              var otherDown = tmp$ret$2;
              if (otherDown == null) {
                return dragEvent;
              } else {
                this.pointer0__1 = otherDown.id_1;
              }
            } else if (this.hasDragged_1(dragEvent)) {
              return dragEvent;
            }

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
  $awaitDragOrUpCOROUTINE$7.$metadata$ = classMeta('$awaitDragOrUpCOROUTINE$7', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $dragCOROUTINE$8(_this__u8e3s4, pointerId, onDrag, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
    this.onDrag_1 = onDrag;
  }
  $dragCOROUTINE$8.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.pointer0__1 = this.pointerId_1;
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.state_1 = 4;
              continue $sm;
            }

            this.state_1 = 2;
            suspendResult = awaitDragOrCancellation(this._this__u8e3s4__1, this.pointer0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return false;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var change = tmp_0;
            if (changedToUpIgnoreConsumed(change)) {
              return true;
            }

            this.onDrag_1(change);
            this.pointer0__1 = change.id_1;
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
  $dragCOROUTINE$8.$metadata$ = classMeta('$dragCOROUTINE$8', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitLongPressOrCancellationCOROUTINE$9(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
  }
  $awaitLongPressOrCancellationCOROUTINE$9.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            if (isPointerUp$accessor$2pjqd1_0(this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$(), this.pointerId_1)) {
              return null;
            }

            var tmp_0 = this;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull = this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$().changes_1;
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
                  if (equals(item.id_1, this.pointerId_1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.initialDown0__1 = tmp_1;
            this.longPress1__1 = {_v: null};
            this.currentDown2__1 = {_v: this.initialDown0__1};
            this.longPressTimeout3__1 = this._this__u8e3s4__1.get_viewConfiguration_qgdaco_k$().get_longPressTimeoutMillis_i28jbr_k$();
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this._this__u8e3s4__1.withTimeout_gtk4k_k$(this.longPressTimeout3__1, awaitLongPressOrCancellation$slambda_0(this.currentDown2__1, this.longPress1__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT4__1 = null;
            this.exceptionState_1 = 3;
            this.state_1 = 4;
            continue $sm;
          case 2:
            this.exceptionState_1 = 3;
            var tmp_2 = this.exception_1;
            if (tmp_2 instanceof PointerEventTimeoutCancellationException) {
              var _ = this.exception_1;
              var tmp_3 = this;
              var tmp1_elvis_lhs = this.longPress1__1._v;
              tmp_3.TRY_RESULT4__1 = tmp1_elvis_lhs == null ? this.initialDown0__1 : tmp1_elvis_lhs;
              this.state_1 = 4;
              continue $sm;
            } else {
              throw this.exception_1;
            }

            break;
          case 3:
            throw this.exception_1;
          case 4:
            this.exceptionState_1 = 3;
            return this.TRY_RESULT4__1;
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
  $awaitLongPressOrCancellationCOROUTINE$9.$metadata$ = classMeta('$awaitLongPressOrCancellationCOROUTINE$9', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitDragOrCancellationCOROUTINE$10(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
  }
  $awaitDragOrCancellationCOROUTINE$10.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 7;
            if (isPointerUp$accessor$2pjqd1_0(this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$(), this.pointerId_1)) {
              return null;
            }

            this.state_1 = 1;
            continue $sm;
          case 1:
            this.pointer1__1 = this.pointerId_1;
            this.state_1 = 2;
            continue $sm;
          case 2:
            if (false) {
              this.state_1 = 8;
              continue $sm;
            }

            this.state_1 = 3;
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent$default_gxqupv_k$(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var event = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull = event.changes_1;
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
                  if (equals(item.id_1, this.pointer1__1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var WHEN_RESULT;
            if (tmp0_elvis_lhs == null) {
              this.tmp$ret$20__1 = null;
              this.state_1 = 9;
              continue $sm;
            } else {
              WHEN_RESULT = tmp0_elvis_lhs;
              this.state_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            var dragEvent = WHEN_RESULT;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$4;
              l$ret$5: do {
                var tmp1_fastFirstOrNull = event.changes_1;
                var inductionVariable_0 = 0;
                var last_0 = tmp1_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = tmp1_fastFirstOrNull.get_fkrdnv_k$(index_0);
                    if (item_0.pressed_1) {
                      tmp$ret$4 = item_0;
                      break l$ret$5;
                    }
                  }
                   while (inductionVariable_0 <= last_0);
                tmp$ret$4 = null;
              }
               while (false);
              var otherDown = tmp$ret$4;
              if (otherDown == null) {
                this.tmp$ret$20__1 = dragEvent;
                this.state_1 = 9;
                continue $sm;
              } else {
                this.pointer1__1 = otherDown.id_1;
                this.state_1 = 5;
                continue $sm;
              }
            } else {
              if (positionChangedIgnoreConsumed(dragEvent)) {
                this.tmp$ret$20__1 = dragEvent;
                this.state_1 = 9;
                continue $sm;
              } else {
                this.state_1 = 6;
                continue $sm;
              }
            }

            ;
            break;
          case 5:
            this.state_1 = 6;
            continue $sm;
          case 6:
            this.state_1 = 2;
            continue $sm;
          case 7:
            throw this.exception_1;
          case 8:
            if (false) {
              this.state_1 = 1;
              continue $sm;
            }

            this.state_1 = 9;
            continue $sm;
          case 9:
            var change = this.tmp$ret$20__1;
            var tmp_0;
            var tmp0_safe_receiver = change;
            if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isConsumed_scj5q3_k$()) === false) {
              tmp_0 = change;
            } else {
              tmp_0 = null;
            }

            return tmp_0;
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
  $awaitDragOrCancellationCOROUTINE$10.$metadata$ = classMeta('$awaitDragOrCancellationCOROUTINE$10', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  var properties_initialized_DragGestureDetector_kt_xqxw6j;
  function init_properties_DragGestureDetector_kt_mvy3qx() {
    if (properties_initialized_DragGestureDetector_kt_xqxw6j) {
    } else {
      properties_initialized_DragGestureDetector_kt_xqxw6j = true;
      HorizontalPointerDirectionConfig = new HorizontalPointerDirectionConfig$1();
      VerticalPointerDirectionConfig = new VerticalPointerDirectionConfig$1();
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(0.125);
      mouseSlop = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(18);
      defaultTouchSlop = tmp$ret$0_0;
      var tmp$ret$0_1;
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var tmp0_div = get_mouseSlop();
      var tmp1_div = get_defaultTouchSlop();
      tmp$ret$0_1 = _Dp___get_value__impl__geb1vb(tmp0_div) / _Dp___get_value__impl__geb1vb(tmp1_div);
      mouseToTouchSlopRatio = tmp$ret$0_1;
    }
  }
  function DraggableState() {
  }
  DraggableState.$metadata$ = interfaceMeta('DraggableState');
  function rememberDraggableState$composable(onDelta, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(365468930);
    sourceInformation($composer_0, 'C(rememberDraggableState$composable)136@5795L29,137@5836L61:Draggable.kt#8bwon0');
    if (isTraceInProgress()) {
      traceEventStart(365468930, $changed, -1, 'androidx.compose.foundation.gestures.rememberDraggableState$composable (Draggable.kt:135)');
    }
    var onDeltaState = rememberUpdatedState$composable(onDelta, $composer_0, 14 & $changed);
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
    if (false ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.gestures.rememberDraggableState$composable.<anonymous>' call
      tmp$ret$0 = DraggableState_0(rememberDraggableState$composable$lambda(onDeltaState));
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
  function draggable(_this__u8e3s4, state, orientation, enabled, interactionSource, startDragImmediately, onDragStarted, onDragStopped, reverseDirection) {
    var tmp = draggable$lambda;
    var tmp_0 = draggable$lambda_0(startDragImmediately);
    return draggable_0(_this__u8e3s4, state, tmp, orientation, enabled, interactionSource, tmp_0, onDragStarted, draggable$slambda_4(onDragStopped, orientation, null), reverseDirection);
  }
  function draggable$default(_this__u8e3s4, state, orientation, enabled, interactionSource, startDragImmediately, onDragStarted, onDragStopped, reverseDirection, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      enabled = true;
    if (!(($mask0 & 8) === 0))
      interactionSource = null;
    if (!(($mask0 & 16) === 0))
      startDragImmediately = false;
    if (!(($mask0 & 32) === 0)) {
      onDragStarted = draggable$slambda_0(null);
    }
    if (!(($mask0 & 64) === 0)) {
      onDragStopped = draggable$slambda_2(null);
    }
    if (!(($mask0 & 128) === 0))
      reverseDirection = false;
    return draggable(_this__u8e3s4, state, orientation, enabled, interactionSource, startDragImmediately, onDragStarted, onDragStopped, reverseDirection);
  }
  function DragScope() {
  }
  DragScope.$metadata$ = interfaceMeta('DragScope');
  function DraggableState_0(onDelta) {
    return new DefaultDraggableState(onDelta);
  }
  function draggable_0(_this__u8e3s4, state, canDrag, orientation, enabled, interactionSource, startDragImmediately, onDragStarted, onDragStopped, reverseDirection) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = draggable$lambda_1(canDrag, orientation, enabled, reverseDirection, interactionSource, startDragImmediately, onDragStarted, onDragStopped, state);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp_0 = tmp$ret$0;
    return composed$composable(_this__u8e3s4, tmp_0, draggable$lambda_2(interactionSource, startDragImmediately, canDrag, onDragStarted, onDragStopped, state, orientation, enabled, reverseDirection));
  }
  function draggable$default_0(_this__u8e3s4, state, canDrag, orientation, enabled, interactionSource, startDragImmediately, onDragStarted, onDragStopped, reverseDirection, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      enabled = true;
    if (!(($mask0 & 16) === 0))
      interactionSource = null;
    if (!(($mask0 & 64) === 0)) {
      onDragStarted = draggable$slambda_6(null);
    }
    if (!(($mask0 & 128) === 0)) {
      onDragStopped = draggable$slambda_8(null);
    }
    if (!(($mask0 & 256) === 0))
      reverseDirection = false;
    return draggable_0(_this__u8e3s4, state, canDrag, orientation, enabled, interactionSource, startDragImmediately, onDragStarted, onDragStopped, reverseDirection);
  }
  function toFloat(_this__u8e3s4, orientation) {
    return orientation.equals(Orientation_Vertical_getInstance()) ? _Velocity___get_y__impl__239yhc(_this__u8e3s4) : _Velocity___get_x__impl__qqcikv(_this__u8e3s4);
  }
  function _get_dragScope__pxh0b5($this) {
    return $this.dragScope_1;
  }
  function _get_scrollMutex__cbe8f3($this) {
    return $this.scrollMutex_1;
  }
  function DefaultDraggableState$dragScope$1(this$0) {
    this.this$0__1 = this$0;
  }
  DefaultDraggableState$dragScope$1.prototype.dragBy_silpzm_k$ = function (pixels) {
    return this.this$0__1.onDelta_1(pixels);
  };
  DefaultDraggableState$dragScope$1.$metadata$ = classMeta(undefined, [DragScope]);
  function DefaultDraggableState$drag$slambda(this$0, $dragPriority, $block, resultContinuation) {
    this.this$0__1 = this$0;
    this.$dragPriority_1 = $dragPriority;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  DefaultDraggableState$drag$slambda.prototype.invoke_d6gbsu_k$ = function ($this$coroutineScope, $cont) {
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  DefaultDraggableState$drag$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  DefaultDraggableState$drag$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.this$0__1.scrollMutex_1.mutateWith_lit8yb_k$(this.this$0__1.dragScope_1, this.$dragPriority_1, this.$block_1, this);
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
  DefaultDraggableState$drag$slambda.prototype.create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    var i = new DefaultDraggableState$drag$slambda(this.this$0__1, this.$dragPriority_1, this.$block_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  DefaultDraggableState$drag$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  DefaultDraggableState$drag$slambda.$metadata$ = classMeta('DefaultDraggableState$drag$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function DefaultDraggableState$drag$slambda_0(this$0, $dragPriority, $block, resultContinuation) {
    var i = new DefaultDraggableState$drag$slambda(this$0, $dragPriority, $block, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.invoke_d6gbsu_k$($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultDraggableState(onDelta) {
    this.onDelta_1 = onDelta;
    var tmp = this;
    tmp.dragScope_1 = new DefaultDraggableState$dragScope$1(this);
    this.scrollMutex_1 = new MutatorMutex();
  }
  DefaultDraggableState.prototype.get_onDelta_l2wma8_k$ = function () {
    return this.onDelta_1;
  };
  DefaultDraggableState.prototype.drag_p40z53_k$ = function (dragPriority, block, $cont) {
    return coroutineScope(DefaultDraggableState$drag$slambda_0(this, dragPriority, block, null), $cont);
  };
  DefaultDraggableState.prototype.dispatchRawDelta_pi5a99_k$ = function (delta) {
    return this.onDelta_1(delta);
  };
  DefaultDraggableState.$metadata$ = classMeta('DefaultDraggableState', [DraggableState]);
  function DragStarted(startPoint) {
    DragEvent.call(this);
    this.startPoint_1 = startPoint;
    this.$stable_1 = 0;
  }
  DragStarted.prototype.get_startPoint_gjteol_k$ = function () {
    return this.startPoint_1;
  };
  DragStarted.$metadata$ = classMeta('DragStarted', undefined, undefined, undefined, undefined, DragEvent.prototype);
  function DragStopped(velocity) {
    DragEvent.call(this);
    this.velocity_1 = velocity;
    this.$stable_1 = 0;
  }
  DragStopped.prototype.get_velocity_mr9302_k$ = function () {
    return this.velocity_1;
  };
  DragStopped.$metadata$ = classMeta('DragStopped', undefined, undefined, undefined, undefined, DragEvent.prototype);
  function DragCancelled() {
    DragCancelled_instance = this;
    DragEvent.call(this);
    this.$stable_1 = 0;
  }
  DragCancelled.$metadata$ = objectMeta('DragCancelled', undefined, undefined, undefined, undefined, DragEvent.prototype);
  var DragCancelled_instance;
  function DragCancelled_getInstance() {
    if (DragCancelled_instance == null)
      new DragCancelled();
    return DragCancelled_instance;
  }
  function DragDelta(delta) {
    DragEvent.call(this);
    this.delta_1 = delta;
    this.$stable_1 = 0;
  }
  DragDelta.prototype.get_delta_nuiorh_k$ = function () {
    return this.delta_1;
  };
  DragDelta.$metadata$ = classMeta('DragDelta', undefined, undefined, undefined, undefined, DragEvent.prototype);
  function DragEvent() {
  }
  DragEvent.$metadata$ = classMeta('DragEvent');
  function $processDragStartCOROUTINE$11(_this__u8e3s4, _this__u8e3s4_0, event, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this._this__u8e3s4__2 = _this__u8e3s4_0;
    this.event_1 = event;
  }
  $processDragStartCOROUTINE$11.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 7;
            this.tmp0_safe_receiver0__1 = this._this__u8e3s4__1.dragStartInteraction_1.get_value_j01efc_k$();
            if (this.tmp0_safe_receiver0__1 == null) {
              this.WHEN_RESULT1__1 = null;
              this.state_1 = 3;
              continue $sm;
            } else {
              this.tmp0_safe_receiver2__1 = this._this__u8e3s4__1.interactionSource_1;
              if (this.tmp0_safe_receiver2__1 == null) {
                this.WHEN_RESULT3__1 = null;
                this.state_1 = 2;
                continue $sm;
              } else {
                this.state_1 = 1;
                suspendResult = this.tmp0_safe_receiver2__1.emit_lotjoj_k$(new Cancel(this.tmp0_safe_receiver0__1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 1:
            var tmp_0 = this;
            tmp_0.WHEN_RESULT3__1 = Unit_getInstance();
            this.state_1 = 2;
            continue $sm;
          case 2:
            this.WHEN_RESULT1__1 = this.WHEN_RESULT3__1;
            this.state_1 = 3;
            continue $sm;
          case 3:
            ;
            this.interaction4__1 = new Start();
            this.tmp1_safe_receiver5__1 = this._this__u8e3s4__1.interactionSource_1;
            if (this.tmp1_safe_receiver5__1 == null) {
              this.WHEN_RESULT6__1 = null;
              this.state_1 = 5;
              continue $sm;
            } else {
              this.state_1 = 4;
              suspendResult = this.tmp1_safe_receiver5__1.emit_lotjoj_k$(this.interaction4__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            ;
            break;
          case 4:
            var tmp_1 = this;
            tmp_1.WHEN_RESULT6__1 = Unit_getInstance();
            this.state_1 = 5;
            continue $sm;
          case 5:
            ;
            this._this__u8e3s4__1.dragStartInteraction_1.set_value_rnwamw_k$(this.interaction4__1);
            this.state_1 = 6;
            suspendResult = this._this__u8e3s4__1.onDragStarted_1(this._this__u8e3s4__2, new Offset_0(this.event_1.startPoint_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            return Unit_getInstance();
          case 7:
            throw this.exception_1;
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
  $processDragStartCOROUTINE$11.$metadata$ = classMeta('$processDragStartCOROUTINE$11', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $processDragStopCOROUTINE$12(_this__u8e3s4, _this__u8e3s4_0, event, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this._this__u8e3s4__2 = _this__u8e3s4_0;
    this.event_1 = event;
  }
  $processDragStopCOROUTINE$12.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 5;
            this.tmp0_safe_receiver0__1 = this._this__u8e3s4__1.dragStartInteraction_1.get_value_j01efc_k$();
            if (this.tmp0_safe_receiver0__1 == null) {
              this.WHEN_RESULT1__1 = null;
              this.state_1 = 3;
              continue $sm;
            } else {
              this.tmp0_safe_receiver2__1 = this._this__u8e3s4__1.interactionSource_1;
              if (this.tmp0_safe_receiver2__1 == null) {
                this.WHEN_RESULT3__1 = null;
                this.state_1 = 2;
                continue $sm;
              } else {
                this.state_1 = 1;
                suspendResult = this.tmp0_safe_receiver2__1.emit_lotjoj_k$(new Stop(this.tmp0_safe_receiver0__1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 1:
            var tmp_0 = this;
            tmp_0.WHEN_RESULT3__1 = Unit_getInstance();
            this.state_1 = 2;
            continue $sm;
          case 2:
            ;
            var tmp_1 = this;
            this._this__u8e3s4__1.dragStartInteraction_1.set_value_rnwamw_k$(null);
            tmp_1.WHEN_RESULT1__1 = Unit_getInstance();
            this.state_1 = 3;
            continue $sm;
          case 3:
            ;
            this.state_1 = 4;
            suspendResult = this._this__u8e3s4__1.onDragStopped_1(this._this__u8e3s4__2, new Velocity(this.event_1.velocity_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_getInstance();
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
  $processDragStopCOROUTINE$12.$metadata$ = classMeta('$processDragStopCOROUTINE$12', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $processDragCancelCOROUTINE$13(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this._this__u8e3s4__2 = _this__u8e3s4_0;
  }
  $processDragCancelCOROUTINE$13.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 5;
            this.tmp0_safe_receiver0__1 = this._this__u8e3s4__1.dragStartInteraction_1.get_value_j01efc_k$();
            if (this.tmp0_safe_receiver0__1 == null) {
              this.WHEN_RESULT1__1 = null;
              this.state_1 = 3;
              continue $sm;
            } else {
              this.tmp0_safe_receiver2__1 = this._this__u8e3s4__1.interactionSource_1;
              if (this.tmp0_safe_receiver2__1 == null) {
                this.WHEN_RESULT3__1 = null;
                this.state_1 = 2;
                continue $sm;
              } else {
                this.state_1 = 1;
                suspendResult = this.tmp0_safe_receiver2__1.emit_lotjoj_k$(new Cancel(this.tmp0_safe_receiver0__1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 1:
            var tmp_0 = this;
            tmp_0.WHEN_RESULT3__1 = Unit_getInstance();
            this.state_1 = 2;
            continue $sm;
          case 2:
            ;
            var tmp_1 = this;
            this._this__u8e3s4__1.dragStartInteraction_1.set_value_rnwamw_k$(null);
            tmp_1.WHEN_RESULT1__1 = Unit_getInstance();
            this.state_1 = 3;
            continue $sm;
          case 3:
            ;
            this.state_1 = 4;
            suspendResult = this._this__u8e3s4__1.onDragStopped_1(this._this__u8e3s4__2, new Velocity(Companion_getInstance_12().Zero_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_getInstance();
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
  $processDragCancelCOROUTINE$13.$metadata$ = classMeta('$processDragCancelCOROUTINE$13', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function DragLogic(onDragStarted, onDragStopped, dragStartInteraction, interactionSource) {
    this.onDragStarted_1 = onDragStarted;
    this.onDragStopped_1 = onDragStopped;
    this.dragStartInteraction_1 = dragStartInteraction;
    this.interactionSource_1 = interactionSource;
  }
  DragLogic.prototype.get_onDragStarted_2t1crf_k$ = function () {
    return this.onDragStarted_1;
  };
  DragLogic.prototype.get_onDragStopped_2ldle7_k$ = function () {
    return this.onDragStopped_1;
  };
  DragLogic.prototype.get_dragStartInteraction_hj6rcd_k$ = function () {
    return this.dragStartInteraction_1;
  };
  DragLogic.prototype.get_interactionSource_k8ijg_k$ = function () {
    return this.interactionSource_1;
  };
  DragLogic.prototype.processDragStart_mxeq7d_k$ = function (_this__u8e3s4, event, $cont) {
    var tmp = new $processDragStartCOROUTINE$11(this, _this__u8e3s4, event, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  DragLogic.prototype.processDragStop_sa5fip_k$ = function (_this__u8e3s4, event, $cont) {
    var tmp = new $processDragStopCOROUTINE$12(this, _this__u8e3s4, event, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  DragLogic.prototype.processDragCancel_3dmygh_k$ = function (_this__u8e3s4, $cont) {
    var tmp = new $processDragCancelCOROUTINE$13(this, _this__u8e3s4, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  DragLogic.$metadata$ = classMeta('DragLogic');
  function toFloat_0(_this__u8e3s4, orientation) {
    return orientation.equals(Orientation_Vertical_getInstance()) ? _Offset___get_y__impl__8bzhra(_this__u8e3s4) : _Offset___get_x__impl__xvi35n(_this__u8e3s4);
  }
  function awaitDownAndSlop(_this__u8e3s4, canDrag, startDragImmediately, velocityTracker, orientation, $cont) {
    var tmp = new $awaitDownAndSlopCOROUTINE$14(_this__u8e3s4, canDrag, startDragImmediately, velocityTracker, orientation, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function awaitDrag(_this__u8e3s4, startEvent, initialDelta, velocityTracker, channel, reverseDirection, orientation, $cont) {
    var tmp = new $awaitDragCOROUTINE$15(_this__u8e3s4, startEvent, initialDelta, velocityTracker, channel, reverseDirection, orientation, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function rememberDraggableState$composable$lambda($onDeltaState) {
    return function (it) {
      $onDeltaState.get_value_j01efc_k$()(it);
      return Unit_getInstance();
    };
  }
  function draggable$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$slambda.prototype.invoke_bc859n_k$ = function ($this$null, it, $cont) {
    var tmp = this.create_w2uwqo_k$($this$null, it, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  draggable$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.invoke_bc859n_k$(tmp, p2 instanceof Offset_0 ? p2.packedValue_1 : THROW_CCE(), $cont);
  };
  draggable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  draggable$slambda.prototype.create_w2uwqo_k$ = function ($this$null, it, completion) {
    var i = new draggable$slambda(completion);
    i.$this$null_1 = $this$null;
    i.it_1 = it;
    return i;
  };
  draggable$slambda.$metadata$ = classMeta('draggable$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function draggable$slambda_0(resultContinuation) {
    var i = new draggable$slambda(resultContinuation);
    var l = function ($this$null, it, $cont) {
      return i.invoke_bc859n_k$($this$null, it.packedValue_1, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function draggable$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$slambda_1.prototype.invoke_wfzr56_k$ = function ($this$null, it, $cont) {
    var tmp = this.create_amz0hf_k$($this$null, it, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  draggable$slambda_1.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.invoke_wfzr56_k$(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE(), $cont);
  };
  draggable$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  draggable$slambda_1.prototype.create_amz0hf_k$ = function ($this$null, it, completion) {
    var i = new draggable$slambda_1(completion);
    i.$this$null_1 = $this$null;
    i.it_1 = it;
    return i;
  };
  draggable$slambda_1.$metadata$ = classMeta('draggable$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function draggable$slambda_2(resultContinuation) {
    var i = new draggable$slambda_1(resultContinuation);
    var l = function ($this$null, it, $cont) {
      return i.invoke_wfzr56_k$($this$null, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function draggable$lambda(it) {
    return true;
  }
  function draggable$lambda_0($startDragImmediately) {
    return function () {
      return $startDragImmediately;
    };
  }
  function draggable$slambda_3($onDragStopped, $orientation, resultContinuation) {
    this.$onDragStopped_1 = $onDragStopped;
    this.$orientation_1 = $orientation;
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$slambda_3.prototype.invoke_h9z5zh_k$ = function ($this$draggable, velocity, $cont) {
    var tmp = this.create_uxeo7c_k$($this$draggable, velocity, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  draggable$slambda_3.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.invoke_h9z5zh_k$(tmp, p2 instanceof Velocity ? p2.packedValue_1 : THROW_CCE(), $cont);
  };
  draggable$slambda_3.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.$onDragStopped_1(this.$this$draggable_1, toFloat(this.velocity_1, this.$orientation_1), this);
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
  draggable$slambda_3.prototype.create_uxeo7c_k$ = function ($this$draggable, velocity, completion) {
    var i = new draggable$slambda_3(this.$onDragStopped_1, this.$orientation_1, completion);
    i.$this$draggable_1 = $this$draggable;
    i.velocity_1 = velocity;
    return i;
  };
  draggable$slambda_3.$metadata$ = classMeta('draggable$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function draggable$slambda_4($onDragStopped, $orientation, resultContinuation) {
    var i = new draggable$slambda_3($onDragStopped, $orientation, resultContinuation);
    var l = function ($this$draggable, velocity, $cont) {
      return i.invoke_h9z5zh_k$($this$draggable, velocity.packedValue_1, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function draggable$slambda_5(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$slambda_5.prototype.invoke_bc859n_k$ = function ($this$null, it, $cont) {
    var tmp = this.create_w2uwqo_k$($this$null, it, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  draggable$slambda_5.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.invoke_bc859n_k$(tmp, p2 instanceof Offset_0 ? p2.packedValue_1 : THROW_CCE(), $cont);
  };
  draggable$slambda_5.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  draggable$slambda_5.prototype.create_w2uwqo_k$ = function ($this$null, it, completion) {
    var i = new draggable$slambda_5(completion);
    i.$this$null_1 = $this$null;
    i.it_1 = it;
    return i;
  };
  draggable$slambda_5.$metadata$ = classMeta('draggable$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function draggable$slambda_6(resultContinuation) {
    var i = new draggable$slambda_5(resultContinuation);
    var l = function ($this$null, it, $cont) {
      return i.invoke_bc859n_k$($this$null, it.packedValue_1, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function draggable$slambda_7(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$slambda_7.prototype.invoke_h9z5zh_k$ = function ($this$null, it, $cont) {
    var tmp = this.create_uxeo7c_k$($this$null, it, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  draggable$slambda_7.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.invoke_h9z5zh_k$(tmp, p2 instanceof Velocity ? p2.packedValue_1 : THROW_CCE(), $cont);
  };
  draggable$slambda_7.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  draggable$slambda_7.prototype.create_uxeo7c_k$ = function ($this$null, it, completion) {
    var i = new draggable$slambda_7(completion);
    i.$this$null_1 = $this$null;
    i.it_1 = it;
    return i;
  };
  draggable$slambda_7.$metadata$ = classMeta('draggable$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function draggable$slambda_8(resultContinuation) {
    var i = new draggable$slambda_7(resultContinuation);
    var l = function ($this$null, it, $cont) {
      return i.invoke_h9z5zh_k$($this$null, it.packedValue_1, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function draggable$lambda_1($canDrag, $orientation, $enabled, $reverseDirection, $interactionSource, $startDragImmediately, $onDragStarted, $onDragStopped, $state) {
    return function ($this$null) {
      $this$null.name_1 = 'draggable';
      $this$null.properties_1.set_y753qn_k$('canDrag', $canDrag);
      $this$null.properties_1.set_y753qn_k$('orientation', $orientation);
      $this$null.properties_1.set_y753qn_k$('enabled', $enabled);
      $this$null.properties_1.set_y753qn_k$('reverseDirection', $reverseDirection);
      $this$null.properties_1.set_y753qn_k$('interactionSource', $interactionSource);
      $this$null.properties_1.set_y753qn_k$('startDragImmediately', $startDragImmediately);
      $this$null.properties_1.set_y753qn_k$('onDragStarted', $onDragStarted);
      $this$null.properties_1.set_y753qn_k$('onDragStopped', $onDragStopped);
      $this$null.properties_1.set_y753qn_k$('state', $state);
      return Unit_getInstance();
    };
  }
  function invoke$lambda_5($dragLogic$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('dragLogic', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $dragLogic$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _no_name_provided__qut3iv_4($draggedInteraction, $interactionSource) {
    this.$draggedInteraction_1 = $draggedInteraction;
    this.$interactionSource_1 = $interactionSource;
  }
  _no_name_provided__qut3iv_4.prototype.dispose_3n44we_k$ = function () {
    // Inline function 'androidx.compose.foundation.gestures.draggable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.$draggedInteraction_1.get_value_j01efc_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_safe_receiver_0 = this.$interactionSource_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else
        tmp0_safe_receiver_0.tryEmit_fphub9_k$(new Cancel(tmp0_safe_receiver));
      this.$draggedInteraction_1.set_value_rnwamw_k$(null);
      tmp$ret$0 = Unit_getInstance();
    }
  };
  _no_name_provided__qut3iv_4.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function draggable$lambda$lambda($draggedInteraction, $interactionSource) {
    return function ($this$DisposableEffect) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_4($draggedInteraction, $interactionSource);
      return tmp$ret$0;
    };
  }
  function draggable$lambda$slambda$slambda($event, $orientation, $channel, resultContinuation) {
    this.$event_1 = $event;
    this.$orientation_1 = $orientation;
    this.$channel_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$lambda$slambda$slambda.prototype.invoke_3d4vzq_k$ = function ($this$drag, $cont) {
    var tmp = this.create_5hhne5_k$($this$drag, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  draggable$lambda$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_3d4vzq_k$((!(p1 == null) ? isInterface(p1, DragScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  draggable$lambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
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
            var tmp_0;
            var tmp_1 = this.$event_1._v;
            if (!(tmp_1 instanceof DragStopped)) {
              var tmp_2 = this.$event_1._v;
              tmp_0 = !(tmp_2 instanceof DragCancelled);
            } else {
              tmp_0 = false;
            }

            if (!tmp_0) {
              this.state_1 = 4;
              continue $sm;
            }

            var tmp_3 = this.$event_1._v;
            var tmp0_safe_receiver = tmp_3 instanceof DragDelta ? tmp_3 : null;
            if (tmp0_safe_receiver == null)
              null;
            else {
              this.$this$drag_1.dragBy_silpzm_k$(toFloat_0(tmp0_safe_receiver.delta_1, this.$orientation_1));
            }

            ;
            this.state_1 = 2;
            suspendResult = this.$channel_1.receive_ihhf9g_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.$event_1._v = ARGUMENT;
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
  draggable$lambda$slambda$slambda.prototype.create_5hhne5_k$ = function ($this$drag, completion) {
    var i = new draggable$lambda$slambda$slambda(this.$event_1, this.$orientation_1, this.$channel_1, completion);
    i.$this$drag_1 = $this$drag;
    return i;
  };
  draggable$lambda$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_5hhne5_k$((!(value == null) ? isInterface(value, DragScope) : false) ? value : THROW_CCE(), completion);
  };
  draggable$lambda$slambda$slambda.$metadata$ = classMeta('draggable$lambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function draggable$lambda$slambda$slambda_0($event, $orientation, $channel, resultContinuation) {
    var i = new draggable$lambda$slambda$slambda($event, $orientation, $channel, resultContinuation);
    var l = function ($this$drag, $cont) {
      return i.invoke_3d4vzq_k$($this$drag, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function draggable$lambda$slambda($channel, $state, $dragLogic$delegate, $orientation, resultContinuation) {
    this.$channel_1 = $channel;
    this.$state_1 = $state;
    this.$dragLogic$delegate_1 = $dragLogic$delegate;
    this.$orientation_1 = $orientation;
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$lambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  draggable$lambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  draggable$lambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 13;
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive_0(this.$this$LaunchedEffect_1)) {
              this.state_1 = 12;
              continue $sm;
            }

            this.state_1 = 2;
            suspendResult = this.$channel_1.receive_ihhf9g_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ARGUMENT0__1 = suspendResult;
            this.event1__1 = {_v: this.ARGUMENT0__1};
            var tmp_0 = this.event1__1._v;
            if (!(tmp_0 instanceof DragStarted)) {
              this.state_1 = 1;
              continue $sm;
            } else {
              this.state_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            var tmp_1 = this;
            tmp_1.tmp0_with2__1 = invoke$lambda_5(this.$dragLogic$delegate_1);
            this.state_1 = 4;
            var tmp_2 = this.event1__1._v;
            suspendResult = this.tmp0_with2__1.processDragStart_mxeq7d_k$(this.$this$LaunchedEffect_1, tmp_2 instanceof DragStarted ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.exceptionState_1 = 9;
            this.state_1 = 5;
            var tmp_3 = MutatePriority_UserInput_getInstance();
            suspendResult = this.$state_1.drag_p40z53_k$(tmp_3, draggable$lambda$slambda$slambda_0(this.event1__1, this.$orientation_1, this.$channel_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp_4 = this;
            tmp_4.tmp1_with3__1 = invoke$lambda_5(this.$dragLogic$delegate_1);
            var tmp_5 = this.event1__1._v;
            if (tmp_5 instanceof DragStopped) {
              this.state_1 = 7;
              var tmp_6 = this.event1__1._v;
              suspendResult = this.tmp1_with3__1.processDragStop_sa5fip_k$(this.$this$LaunchedEffect_1, tmp_6 instanceof DragStopped ? tmp_6 : THROW_CCE(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_7 = this.event1__1._v;
              if (tmp_7 instanceof DragCancelled) {
                this.state_1 = 6;
                suspendResult = this.tmp1_with3__1.processDragCancel_3dmygh_k$(this.$this$LaunchedEffect_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.state_1 = 8;
                continue $sm;
              }
            }

            break;
          case 6:
            this.state_1 = 8;
            continue $sm;
          case 7:
            this.state_1 = 8;
            continue $sm;
          case 8:
            this.exceptionState_1 = 13;
            this.state_1 = 11;
            continue $sm;
          case 9:
            this.exceptionState_1 = 13;
            var tmp_8 = this.exception_1;
            if (tmp_8 instanceof CancellationException) {
              this.c4__1 = this.exception_1;
              var tmp_9 = this;
              tmp_9.tmp2_with5__1 = invoke$lambda_5(this.$dragLogic$delegate_1);
              this.state_1 = 10;
              suspendResult = this.tmp2_with5__1.processDragCancel_3dmygh_k$(this.$this$LaunchedEffect_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.exception_1;
            }

            break;
          case 10:
            this.state_1 = 11;
            continue $sm;
          case 11:
            this.exceptionState_1 = 13;
            this.state_1 = 1;
            continue $sm;
          case 12:
            return Unit_getInstance();
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
  draggable$lambda$slambda.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new draggable$lambda$slambda(this.$channel_1, this.$state_1, this.$dragLogic$delegate_1, this.$orientation_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  draggable$lambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  draggable$lambda$slambda.$metadata$ = classMeta('draggable$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function draggable$lambda$slambda_0($channel, $state, $dragLogic$delegate, $orientation, resultContinuation) {
    var i = new draggable$lambda$slambda($channel, $state, $dragLogic$delegate, $orientation, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function draggable$lambda$slambda$slambda$slambda($this_coroutineScope, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation) {
    this.$this_coroutineScope_1 = $this_coroutineScope;
    this.$canDragState_1 = $canDragState;
    this.$startImmediatelyState_1 = $startImmediatelyState;
    this.$orientation_1 = $orientation;
    this.$channel_1 = $channel;
    this.$reverseDirection_1 = $reverseDirection;
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$lambda$slambda$slambda$slambda.prototype.invoke_6kuihv_k$ = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.create_699gxy_k$($this$awaitPointerEventScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  draggable$lambda$slambda$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  draggable$lambda$slambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 10;
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive_0(this.$this_coroutineScope_1)) {
              this.state_1 = 9;
              continue $sm;
            }

            this.velocityTracker0__1 = new VelocityTracker();
            this.state_1 = 2;
            suspendResult = awaitDownAndSlop(this.$this$awaitPointerEventScope_1, this.$canDragState_1, this.$startImmediatelyState_1, this.velocityTracker0__1, this.$orientation_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp0_safe_receiver1__1 = suspendResult;
            if (this.tmp0_safe_receiver1__1 == null) {
              this.WHEN_RESULT2__1 = null;
              this.state_1 = 8;
              continue $sm;
            } else {
              this.isDragSuccessful3__1 = false;
              this.state_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.exceptionState_1 = 6;
            this.exceptionState_1 = 5;
            this.state_1 = 4;
            suspendResult = awaitDrag(this.$this$awaitPointerEventScope_1, this.tmp0_safe_receiver1__1.first_1, this.tmp0_safe_receiver1__1.second_1.packedValue_1, this.velocityTracker0__1, this.$channel_1, this.$reverseDirection_1, this.$orientation_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_0 = this;
            this.isDragSuccessful3__1 = suspendResult;
            tmp_0.tmp$ret$04__1 = Unit_getInstance();
            this.exceptionState_1 = 10;
            this.state_1 = 7;
            continue $sm;
          case 5:
            this.exceptionState_1 = 6;
            var tmp_1 = this.exception_1;
            if (tmp_1 instanceof CancellationException) {
              var cancellation = this.exception_1;
              var tmp_2 = this;
              this.isDragSuccessful3__1 = false;
              var tmp_3;
              if (!get_isActive_0(this.$this_coroutineScope_1)) {
                throw cancellation;
              }
              tmp_2.tmp$ret$04__1 = tmp_3;
              this.exceptionState_1 = 10;
              this.state_1 = 7;
              continue $sm;
            } else {
              throw this.exception_1;
            }

            break;
          case 6:
            this.exceptionState_1 = 10;
            var t = this.exception_1;
            var tmp_4;
            if (this.isDragSuccessful3__1) {
              var velocity = this.velocityTracker0__1.calculateVelocity_n8ommp_k$();
              tmp_4 = new DragStopped(Velocity__times_impl_yav0ik(velocity, this.$reverseDirection_1 ? -1.0 : 1.0));
            } else {
              tmp_4 = DragCancelled_getInstance();
            }

            var event = tmp_4;
            this.$channel_1.trySend_3hclq4_k$(event);
            ;
            throw t;
          case 7:
            var tmp_5 = this;
            var tmp_6;
            if (this.isDragSuccessful3__1) {
              var velocity_0 = this.velocityTracker0__1.calculateVelocity_n8ommp_k$();
              tmp_6 = new DragStopped(Velocity__times_impl_yav0ik(velocity_0, this.$reverseDirection_1 ? -1.0 : 1.0));
            } else {
              tmp_6 = DragCancelled_getInstance();
            }

            var event_0 = tmp_6;
            this.$channel_1.trySend_3hclq4_k$(event_0);
            tmp_5.WHEN_RESULT2__1 = Unit_getInstance();
            this.state_1 = 8;
            continue $sm;
          case 8:
            ;
            this.state_1 = 1;
            continue $sm;
          case 9:
            return Unit_getInstance();
          case 10:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 10) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  draggable$lambda$slambda$slambda$slambda.prototype.create_699gxy_k$ = function ($this$awaitPointerEventScope, completion) {
    var i = new draggable$lambda$slambda$slambda$slambda(this.$this_coroutineScope_1, this.$canDragState_1, this.$startImmediatelyState_1, this.$orientation_1, this.$channel_1, this.$reverseDirection_1, completion);
    i.$this$awaitPointerEventScope_1 = $this$awaitPointerEventScope;
    return i;
  };
  draggable$lambda$slambda$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  draggable$lambda$slambda$slambda$slambda.$metadata$ = classMeta('draggable$lambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function draggable$lambda$slambda$slambda$slambda_0($this_coroutineScope, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation) {
    var i = new draggable$lambda$slambda$slambda$slambda($this_coroutineScope, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.invoke_6kuihv_k$($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function draggable$lambda$slambda$slambda_1($this_pointerInput, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation) {
    this.$this_pointerInput_1 = $this_pointerInput;
    this.$canDragState_1 = $canDragState;
    this.$startImmediatelyState_1 = $startImmediatelyState;
    this.$orientation_1 = $orientation;
    this.$channel_1 = $channel;
    this.$reverseDirection_1 = $reverseDirection;
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$lambda$slambda$slambda_1.prototype.invoke_d6gbsu_k$ = function ($this$coroutineScope, $cont) {
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  draggable$lambda$slambda$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  draggable$lambda$slambda$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.$this_pointerInput_1.awaitPointerEventScope_w0i122_k$(draggable$lambda$slambda$slambda$slambda_0(this.$this$coroutineScope_1, this.$canDragState_1, this.$startImmediatelyState_1, this.$orientation_1, this.$channel_1, this.$reverseDirection_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.exceptionState_1 = 3;
            this.state_1 = 4;
            continue $sm;
          case 2:
            this.exceptionState_1 = 3;
            var tmp_0 = this.exception_1;
            if (tmp_0 instanceof CancellationException) {
              var exception = this.exception_1;
              if (!get_isActive_0(this.$this$coroutineScope_1)) {
                throw exception;
              }
              this.state_1 = 4;
              continue $sm;
            } else {
              throw this.exception_1;
            }

            break;
          case 3:
            throw this.exception_1;
          case 4:
            this.exceptionState_1 = 3;
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
  draggable$lambda$slambda$slambda_1.prototype.create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    var i = new draggable$lambda$slambda$slambda_1(this.$this_pointerInput_1, this.$canDragState_1, this.$startImmediatelyState_1, this.$orientation_1, this.$channel_1, this.$reverseDirection_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  draggable$lambda$slambda$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  draggable$lambda$slambda$slambda_1.$metadata$ = classMeta('draggable$lambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function draggable$lambda$slambda$slambda_2($this_pointerInput, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation) {
    var i = new draggable$lambda$slambda$slambda_1($this_pointerInput, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.invoke_d6gbsu_k$($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function draggable$lambda$slambda_1($enabled, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation) {
    this.$enabled_1 = $enabled;
    this.$canDragState_1 = $canDragState;
    this.$startImmediatelyState_1 = $startImmediatelyState;
    this.$orientation_1 = $orientation;
    this.$channel_1 = $channel;
    this.$reverseDirection_1 = $reverseDirection;
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$lambda$slambda_1.prototype.invoke_dycxzz_k$ = function ($this$pointerInput, $cont) {
    var tmp = this.create_9k90ga_k$($this$pointerInput, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  draggable$lambda$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  draggable$lambda$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            if (!this.$enabled_1)
              return Unit_getInstance();
            this.state_1 = 1;
            suspendResult = coroutineScope(draggable$lambda$slambda$slambda_2(this.$this$pointerInput_1, this.$canDragState_1, this.$startImmediatelyState_1, this.$orientation_1, this.$channel_1, this.$reverseDirection_1, null), this);
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
  draggable$lambda$slambda_1.prototype.create_9k90ga_k$ = function ($this$pointerInput, completion) {
    var i = new draggable$lambda$slambda_1(this.$enabled_1, this.$canDragState_1, this.$startImmediatelyState_1, this.$orientation_1, this.$channel_1, this.$reverseDirection_1, completion);
    i.$this$pointerInput_1 = $this$pointerInput;
    return i;
  };
  draggable$lambda$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  draggable$lambda$slambda_1.$metadata$ = classMeta('draggable$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function draggable$lambda$slambda_2($enabled, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation) {
    var i = new draggable$lambda$slambda_1($enabled, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.invoke_dycxzz_k$($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function draggable$lambda_2($interactionSource, $startDragImmediately, $canDrag, $onDragStarted, $onDragStopped, $state, $orientation, $enabled, $reverseDirection) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(597193710);
      sourceInformation($composer_0, 'C218@9842L57,219@9940L238,219@9904L274,227@10197L61,228@10291L42,229@10357L29,230@10408L114,233@10527L966:Draggable.kt#8bwon0');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(597193710, $changed, -1, 'androidx.compose.foundation.gestures.draggable.<anonymous> (Draggable.kt:217)');
        tmp = Unit_getInstance();
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
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.gestures.draggable.<anonymous>.<anonymous>' call
        tmp$ret$0 = mutableStateOf$default(null, null, 2, null);
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
      var draggedInteraction = tmp$ret$4;
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var $composer_2 = tmp1_remember$composable;
      $composer_2.startReplaceableGroup_rp6air_k$(-1124426577);
      sourceInformation($composer_2, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = !!($composer_2.changed_ga7h3f_k$(draggedInteraction) | $composer_2.changed_ga7h3f_k$($interactionSource));
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$5;
        // Inline function 'androidx.compose.foundation.gestures.draggable.<anonymous>.<anonymous>' call
        tmp$ret$5 = draggable$lambda$lambda(draggedInteraction, $interactionSource);
        var value_0 = tmp$ret$5;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_2;
      tmp$ret$7 = tmp$ret$6;
      var tmp_3 = tmp$ret$7;
      tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.endReplaceableGroup_er37p7_k$();
      tmp$ret$9 = tmp0_0;
      DisposableEffect$composable($interactionSource, tmp$ret$9, $composer_0, 0);
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_3 = tmp2_remember$composable;
      $composer_3.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_3, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_3;
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (false ? true : tmp0_let_1 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$10;
        // Inline function 'androidx.compose.foundation.gestures.draggable.<anonymous>.<anonymous>' call
        Factory_getInstance();
        tmp$ret$10 = Channel$default(2147483647, null, null, 6, null);
        var value_1 = tmp$ret$10;
        tmp1_cache_1.updateRememberedValue_l1colo_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = tmp0_let_1;
      }
      tmp$ret$11 = tmp_4;
      tmp$ret$12 = tmp$ret$11;
      var tmp_5 = tmp$ret$12;
      tmp$ret$13 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.endReplaceableGroup_er37p7_k$();
      tmp$ret$14 = tmp0_1;
      var channel = tmp$ret$14;
      var startImmediatelyState = rememberUpdatedState$composable($startDragImmediately, $composer_0, 0);
      var canDragState = rememberUpdatedState$composable($canDrag, $composer_0, 0);
      var dragLogic$delegate = rememberUpdatedState$composable(new DragLogic($onDragStarted, $onDragStopped, draggedInteraction, $interactionSource), $composer_0, 0);
      LaunchedEffect$composable($state, draggable$lambda$slambda_0(channel, $state, dragLogic$delegate, $orientation, null), $composer_0, 0);
      var tmp_6 = Companion_getInstance_7();
      var tmp0_2 = pointerInput_1(tmp_6, [$orientation, $enabled, $reverseDirection], draggable$lambda$slambda_2($enabled, canDragState, startImmediatelyState, $orientation, channel, $reverseDirection, null));
      var tmp_7;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_7 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0_2;
    };
  }
  function awaitDownAndSlop$lambda($velocityTracker, $initialDelta) {
    return function (event, offset) {
      addPointerInputChange($velocityTracker, event);
      event.consume_spbz2t_k$();
      $initialDelta._v = offset;
      return Unit_getInstance();
    };
  }
  function awaitDrag$lambda($velocityTracker, $channel, $reverseDirection) {
    return function (event) {
      addPointerInputChange($velocityTracker, event);
      var delta = positionChange(event);
      event.consume_spbz2t_k$();
      $channel.trySend_3hclq4_k$(new DragDelta($reverseDirection ? Offset__times_impl_jz1mli(delta, -1.0) : delta));
      return Unit_getInstance();
    };
  }
  function $awaitDownAndSlopCOROUTINE$14(_this__u8e3s4, canDrag, startDragImmediately, velocityTracker, orientation, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.canDrag_1 = canDrag;
    this.startDragImmediately_1 = startDragImmediately;
    this.velocityTracker_1 = velocityTracker;
    this.orientation_1 = orientation;
  }
  $awaitDownAndSlopCOROUTINE$14.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 17;
            this.tmp0_pass0__1 = PointerEventPass_Initial_getInstance();
            this.state_1 = 1;
            suspendResult = awaitFirstDownOnPass(this._this__u8e3s4__1, this.tmp0_pass0__1, false, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.initialDown1__1 = suspendResult;
            if (!this.canDrag_1.get_value_j01efc_k$()(this.initialDown1__1)) {
              var tmp_0 = this;
              tmp_0.WHEN_RESULT2__1 = null;
              this.state_1 = 16;
              continue $sm;
            } else {
              if (this.startDragImmediately_1.get_value_j01efc_k$()()) {
                var tmp_1 = this;
                this.initialDown1__1.consume_spbz2t_k$();
                addPointerInputChange(this.velocityTracker_1, this.initialDown1__1);
                tmp_1.WHEN_RESULT2__1 = to(this.initialDown1__1, new Offset_0(Companion_getInstance_4().Zero_1));
                this.state_1 = 16;
                continue $sm;
              } else {
                this.state_1 = 2;
                suspendResult = awaitFirstDown(this._this__u8e3s4__1, false, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 2:
            this.down3__1 = suspendResult;
            addPointerInputChange(this.velocityTracker_1, this.down3__1);
            this.initialDelta4__1 = {_v: new Offset_0(Companion_getInstance_4().Zero_1)};
            var tmp_2 = this;
            tmp_2.postPointerSlop5__1 = awaitDownAndSlop$lambda(this.velocityTracker_1, this.initialDelta4__1);
            this.state_1 = 3;
            continue $sm;
          case 3:
            var tmp_3 = this;
            tmp_3.tmp0_awaitPointerSlopOrCancellation7__1 = this.down3__1.id_1;
            var tmp_4 = this;
            tmp_4.tmp1_awaitPointerSlopOrCancellation8__1 = this.down3__1.type_1;
            var tmp_5 = this;
            tmp_5.tmp2_awaitPointerSlopOrCancellation9__1 = toPointerDirectionConfig(this.orientation_1);
            if (isPointerUp$accessor$2pjqd1_0(this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$(), this.tmp0_awaitPointerSlopOrCancellation7__1)) {
              this.tmp$ret$06__1 = null;
              this.state_1 = 15;
              continue $sm;
            } else {
              this.state_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.touchSlop10__1 = pointerSlop(this._this__u8e3s4__1.get_viewConfiguration_qgdaco_k$(), this.tmp1_awaitPointerSlopOrCancellation8__1);
            this.pointer11__1 = this.tmp0_awaitPointerSlopOrCancellation7__1;
            this.totalMainPositionChange12__1 = 0.0;
            this.totalCrossPositionChange13__1 = 0.0;
            this.state_1 = 5;
            continue $sm;
          case 5:
            if (false) {
              this.state_1 = 14;
              continue $sm;
            }

            this.state_1 = 6;
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent$default_gxqupv_k$(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.event14__1 = suspendResult;
            var tmp_6 = this;
            l$ret$3: do {
              var tmp0_fastFirstOrNull = this.event14__1.changes_1;
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
                  if (equals(item.id_1, this.pointer11__1)) {
                    this.tmp$ret$215__1 = item;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable <= last);
              this.tmp$ret$215__1 = null;
            }
             while (false);
            tmp_6.tmp0_elvis_lhs16__1 = this.tmp$ret$215__1;
            if (this.tmp0_elvis_lhs16__1 == null) {
              this.tmp$ret$06__1 = null;
              this.state_1 = 15;
              var tmp_7 = this;
              continue $sm;
            } else {
              this.WHEN_RESULT17__1 = this.tmp0_elvis_lhs16__1;
              this.state_1 = 7;
              continue $sm;
            }

            break;
          case 7:
            this.dragEvent18__1 = this.WHEN_RESULT17__1;
            if (this.dragEvent18__1.get_isConsumed_scj5q3_k$()) {
              this.tmp$ret$06__1 = null;
              this.state_1 = 15;
              continue $sm;
            } else {
              if (changedToUpIgnoreConsumed(this.dragEvent18__1)) {
                var tmp_8 = this;
                l$ret$5: do {
                  var tmp1_fastFirstOrNull = this.event14__1.changes_1;
                  var inductionVariable_0 = 0;
                  var last_0 = tmp1_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                  if (inductionVariable_0 <= last_0)
                    do {
                      var index_0 = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      var item_0 = tmp1_fastFirstOrNull.get_fkrdnv_k$(index_0);
                      if (item_0.pressed_1) {
                        this.tmp$ret$419__1 = item_0;
                        break l$ret$5;
                      }
                    }
                     while (inductionVariable_0 <= last_0);
                  this.tmp$ret$419__1 = null;
                }
                 while (false);
                tmp_8.otherDown20__1 = this.tmp$ret$419__1;
                if (this.otherDown20__1 == null) {
                  this.tmp$ret$06__1 = null;
                  this.state_1 = 15;
                  continue $sm;
                } else {
                  this.pointer11__1 = this.otherDown20__1.id_1;
                  this.state_1 = 12;
                  continue $sm;
                }
              } else {
                this.currentPosition21__1 = this.dragEvent18__1.position_1;
                this.previousPosition22__1 = this.dragEvent18__1.previousPosition_1;
                this.mainPositionChange23__1 = this.tmp2_awaitPointerSlopOrCancellation9__1.mainAxisDelta_r99w23_k$(this.currentPosition21__1) - this.tmp2_awaitPointerSlopOrCancellation9__1.mainAxisDelta_r99w23_k$(this.previousPosition22__1);
                this.crossPositionChange24__1 = this.tmp2_awaitPointerSlopOrCancellation9__1.crossAxisDelta_uv6j4e_k$(this.currentPosition21__1) - this.tmp2_awaitPointerSlopOrCancellation9__1.crossAxisDelta_uv6j4e_k$(this.previousPosition22__1);
                this.totalMainPositionChange12__1 = this.totalMainPositionChange12__1 + this.mainPositionChange23__1;
                this.totalCrossPositionChange13__1 = this.totalCrossPositionChange13__1 + this.crossPositionChange24__1;
                var tmp_9 = this;
                var tmp_10;
                {
                  var tmp2_abs = this.totalMainPositionChange12__1;
                  tmp_10 = Math.abs(tmp2_abs);
                }
                tmp_9.inDirection25__1 = tmp_10;
                if (this.inDirection25__1 < this.touchSlop10__1) {
                  this.state_1 = 9;
                  suspendResult = this._this__u8e3s4__1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Final_getInstance(), this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_11;
                  {
                    var tmp_12 = this.totalMainPositionChange12__1;
                    var tmp3_sign = this.totalMainPositionChange12__1;
                    var finalMainPositionChange = tmp_12 - sign(tmp3_sign) * this.touchSlop10__1;
                    tmp_11 = this.tmp2_awaitPointerSlopOrCancellation9__1.offsetFromChanges_ujoh6i_k$(finalMainPositionChange, this.totalCrossPositionChange13__1);
                  }
                  var postSlopOffset = tmp_11;
                  this.postPointerSlop5__1(this.dragEvent18__1, new Offset_0(postSlopOffset));
                  if (this.dragEvent18__1.get_isConsumed_scj5q3_k$()) {
                    this.tmp$ret$06__1 = this.dragEvent18__1;
                    this.state_1 = 15;
                    continue $sm;
                  } else {
                    this.totalMainPositionChange12__1 = 0.0;
                    this.totalCrossPositionChange13__1 = 0.0;
                    this.state_1 = 8;
                    continue $sm;
                  }
                }
              }
            }

            ;
            break;
          case 8:
            this.state_1 = 11;
            continue $sm;
          case 9:
            ;
            if (this.dragEvent18__1.get_isConsumed_scj5q3_k$()) {
              this.tmp$ret$06__1 = null;
              this.state_1 = 15;
              continue $sm;
            } else {
              this.state_1 = 10;
              continue $sm;
            }

            break;
          case 10:
            this.state_1 = 11;
            continue $sm;
          case 11:
            this.state_1 = 13;
            continue $sm;
          case 12:
            this.state_1 = 13;
            continue $sm;
          case 13:
            this.state_1 = 5;
            continue $sm;
          case 14:
            if (false) {
              this.state_1 = 3;
              continue $sm;
            }

            this.state_1 = 15;
            continue $sm;
          case 15:
            var afterSlopResult = this.tmp$ret$06__1;
            this.WHEN_RESULT2__1 = !(afterSlopResult == null) ? to(afterSlopResult, this.initialDelta4__1._v) : null;
            this.state_1 = 16;
            continue $sm;
          case 16:
            return this.WHEN_RESULT2__1;
          case 17:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 17) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $awaitDownAndSlopCOROUTINE$14.$metadata$ = classMeta('$awaitDownAndSlopCOROUTINE$14', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitDragCOROUTINE$15(_this__u8e3s4, startEvent, initialDelta, velocityTracker, channel, reverseDirection, orientation, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.startEvent_1 = startEvent;
    this.initialDelta_1 = initialDelta;
    this.velocityTracker_1 = velocityTracker;
    this.channel_1 = channel;
    this.reverseDirection_1 = reverseDirection;
    this.orientation_1 = orientation;
  }
  $awaitDragCOROUTINE$15.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            this.overSlopOffset0__1 = this.initialDelta_1;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.tmp0_sign1__1 = _Offset___get_x__impl__xvi35n(this.startEvent_1.position_1);
            tmp_0.xSign2__1 = sign(this.tmp0_sign1__1);
            var tmp_2 = this;
            var tmp_3 = this;
            tmp_3.tmp1_sign3__1 = _Offset___get_y__impl__8bzhra(this.startEvent_1.position_1);
            tmp_2.ySign4__1 = sign(this.tmp1_sign3__1);
            this.adjustedStart5__1 = Offset__minus_impl_hoj2c0(this.startEvent_1.position_1, Offset(_Offset___get_x__impl__xvi35n(this.overSlopOffset0__1) * this.xSign2__1, _Offset___get_y__impl__8bzhra(this.overSlopOffset0__1) * this.ySign4__1));
            this.channel_1.trySend_3hclq4_k$(new DragStarted(this.adjustedStart5__1));
            ;
            this.channel_1.trySend_3hclq4_k$(new DragDelta(this.reverseDirection_1 ? Offset__times_impl_jz1mli(this.initialDelta_1, -1.0) : this.initialDelta_1));
            ;
            var tmp_4 = this;
            tmp_4.dragTick6__1 = awaitDrag$lambda(this.velocityTracker_1, this.channel_1, this.reverseDirection_1);
            if (this.orientation_1.equals(Orientation_Vertical_getInstance())) {
              this.state_1 = 2;
              suspendResult = verticalDrag(this._this__u8e3s4__1, this.startEvent_1.id_1, this.dragTick6__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.state_1 = 1;
              suspendResult = horizontalDrag(this._this__u8e3s4__1, this.startEvent_1.id_1, this.dragTick6__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.WHEN_RESULT7__1 = suspendResult;
            this.state_1 = 3;
            continue $sm;
          case 2:
            this.WHEN_RESULT7__1 = suspendResult;
            this.state_1 = 3;
            continue $sm;
          case 3:
            return this.WHEN_RESULT7__1;
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
  $awaitDragCOROUTINE$15.$metadata$ = classMeta('$awaitDragCOROUTINE$15', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function forEachGesture(_this__u8e3s4, block, $cont) {
    var tmp = new $forEachGestureCOROUTINE$16(_this__u8e3s4, block, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function GestureCancellationException_init_$Init$(message, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      message = null;
    GestureCancellationException.call($this, message);
    return $this;
  }
  function GestureCancellationException_init_$Create$(message, $mask0, $marker) {
    var tmp = GestureCancellationException_init_$Init$(message, $mask0, $marker, Object.create(GestureCancellationException.prototype));
    captureStack(tmp, GestureCancellationException_init_$Create$);
    return tmp;
  }
  function GestureCancellationException(message) {
    CancellationException_init_$Init$(message, this);
    this.$stable_1 = 0;
    captureStack(this, GestureCancellationException);
  }
  GestureCancellationException.$metadata$ = classMeta('GestureCancellationException', undefined, undefined, undefined, undefined, CancellationException.prototype);
  function awaitAllPointersUp(_this__u8e3s4, $cont) {
    return _this__u8e3s4.awaitPointerEventScope_w0i122_k$(awaitAllPointersUp$slambda_0(null), $cont);
  }
  function awaitAllPointersUp_0(_this__u8e3s4, $cont) {
    var tmp = new $awaitAllPointersUpCOROUTINE$17(_this__u8e3s4, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function allPointersUp(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      var tmp0_fastAny = _this__u8e3s4.get_currentEvent_sfuq5m_k$().changes_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAny.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAny.get_fkrdnv_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.foundation.gestures.allPointersUp.<anonymous>' call
          tmp$ret$0 = item.pressed_1;
          if (tmp$ret$0) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return !tmp$ret$1;
  }
  function awaitAllPointersUp$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  awaitAllPointersUp$slambda.prototype.invoke_6kuihv_k$ = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.create_699gxy_k$($this$awaitPointerEventScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  awaitAllPointersUp$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  awaitAllPointersUp$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = awaitAllPointersUp_0(this.$this$awaitPointerEventScope_1, this);
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
  awaitAllPointersUp$slambda.prototype.create_699gxy_k$ = function ($this$awaitPointerEventScope, completion) {
    var i = new awaitAllPointersUp$slambda(completion);
    i.$this$awaitPointerEventScope_1 = $this$awaitPointerEventScope;
    return i;
  };
  awaitAllPointersUp$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  awaitAllPointersUp$slambda.$metadata$ = classMeta('awaitAllPointersUp$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function awaitAllPointersUp$slambda_0(resultContinuation) {
    var i = new awaitAllPointersUp$slambda(resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.invoke_6kuihv_k$($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $forEachGestureCOROUTINE$16(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.block_1 = block;
  }
  $forEachGestureCOROUTINE$16.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 9;
            var tmp_0 = this;
            tmp_0.currentContext0__1 = this.get_context_h02k06_k$();
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.currentContext0__1)) {
              this.state_1 = 8;
              continue $sm;
            }

            this.exceptionState_1 = 4;
            this.state_1 = 2;
            suspendResult = this.block_1(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.state_1 = 3;
            suspendResult = awaitAllPointersUp(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.exceptionState_1 = 9;
            this.state_1 = 7;
            continue $sm;
          case 4:
            this.exceptionState_1 = 9;
            var tmp_1 = this.exception_1;
            if (tmp_1 instanceof CancellationException) {
              this.e1__1 = this.exception_1;
              if (get_isActive(this.currentContext0__1)) {
                this.state_1 = 5;
                suspendResult = awaitAllPointersUp(this._this__u8e3s4__1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                throw this.e1__1;
              }
            } else {
              throw this.exception_1;
            }

            break;
          case 5:
            this.state_1 = 6;
            continue $sm;
          case 6:
            this.state_1 = 7;
            continue $sm;
          case 7:
            this.exceptionState_1 = 9;
            this.state_1 = 1;
            continue $sm;
          case 8:
            return Unit_getInstance();
          case 9:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 9) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $forEachGestureCOROUTINE$16.$metadata$ = classMeta('$forEachGestureCOROUTINE$16', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitAllPointersUpCOROUTINE$17(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $awaitAllPointersUpCOROUTINE$17.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 5;
            if (!allPointersUp(this._this__u8e3s4__1)) {
              this.state_1 = 1;
              continue $sm;
            } else {
              this.state_1 = 4;
              continue $sm;
            }

            break;
          case 1:
            this.state_1 = 2;
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var events = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastAny = events.changes_1;
              var inductionVariable = 0;
              var last = tmp0_fastAny.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastAny.get_fkrdnv_k$(index);
                  if (item.pressed_1) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = false;
            }
             while (false);
            if (tmp$ret$0) {
              this.state_1 = 1;
              continue $sm;
            }

            this.state_1 = 3;
            continue $sm;
          case 3:
            this.state_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  $awaitAllPointersUpCOROUTINE$17.$metadata$ = classMeta('$awaitAllPointersUpCOROUTINE$17', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  var Orientation_Vertical_instance;
  var Orientation_Horizontal_instance;
  function values_0() {
    return [Orientation_Vertical_getInstance(), Orientation_Horizontal_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Vertical':
        return Orientation_Vertical_getInstance();
      case 'Horizontal':
        return Orientation_Horizontal_getInstance();
      default:
        Orientation_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Orientation_entriesInitialized;
  function Orientation_initEntries() {
    if (Orientation_entriesInitialized)
      return Unit_getInstance();
    Orientation_entriesInitialized = true;
    Orientation_Vertical_instance = new Orientation('Vertical', 0);
    Orientation_Horizontal_instance = new Orientation('Horizontal', 1);
  }
  function Orientation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Orientation.$metadata$ = classMeta('Orientation', undefined, undefined, undefined, undefined, Enum.prototype);
  function Orientation_Vertical_getInstance() {
    Orientation_initEntries();
    return Orientation_Vertical_instance;
  }
  function Orientation_Horizontal_getInstance() {
    Orientation_initEntries();
    return Orientation_Horizontal_instance;
  }
  function get_NoOpScrollScope() {
    init_properties_Scrollable_kt_ggickt();
    return NoOpScrollScope;
  }
  var NoOpScrollScope;
  function get_ModifierLocalScrollableContainer() {
    init_properties_Scrollable_kt_ggickt();
    return ModifierLocalScrollableContainer;
  }
  var ModifierLocalScrollableContainer;
  function NoOpScrollScope$1() {
  }
  NoOpScrollScope$1.prototype.scrollBy_p9cup6_k$ = function (pixels) {
    return pixels;
  };
  NoOpScrollScope$1.$metadata$ = classMeta(undefined, [ScrollScope]);
  function ModifierLocalScrollableContainer$lambda() {
    init_properties_Scrollable_kt_ggickt();
    return false;
  }
  var properties_initialized_Scrollable_kt_7d5rzr;
  function init_properties_Scrollable_kt_ggickt() {
    if (properties_initialized_Scrollable_kt_7d5rzr) {
    } else {
      properties_initialized_Scrollable_kt_7d5rzr = true;
      NoOpScrollScope = new NoOpScrollScope$1();
      ModifierLocalScrollableContainer = modifierLocalOf(ModifierLocalScrollableContainer$lambda);
    }
  }
  function ScrollScope() {
  }
  ScrollScope.$metadata$ = interfaceMeta('ScrollScope');
  function get_NoPressGesture() {
    init_properties_TapGestureDetector_kt_9k8ojy();
    return NoPressGesture;
  }
  var NoPressGesture;
  function PressGestureScope() {
  }
  PressGestureScope.$metadata$ = interfaceMeta('PressGestureScope', [Density]);
  function detectTapGestures(_this__u8e3s4, onDoubleTap, onLongPress, onPress, onTap, $cont) {
    return coroutineScope(detectTapGestures$slambda_0(_this__u8e3s4, onPress, onLongPress, onDoubleTap, onTap, null), $cont);
  }
  function detectTapGestures$default(_this__u8e3s4, onDoubleTap, onLongPress, onPress, onTap, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onDoubleTap = null;
    if (!(($mask0 & 2) === 0))
      onLongPress = null;
    if (!(($mask0 & 4) === 0))
      onPress = get_NoPressGesture();
    if (!(($mask0 & 8) === 0))
      onTap = null;
    return detectTapGestures(_this__u8e3s4, onDoubleTap, onLongPress, onPress, onTap, $cont);
  }
  function awaitFirstDownOnPass(_this__u8e3s4, pass, requireUnconsumed, $cont) {
    var tmp = new $awaitFirstDownOnPassCOROUTINE$18(_this__u8e3s4, pass, requireUnconsumed, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function awaitFirstDown(_this__u8e3s4, requireUnconsumed, $cont) {
    return awaitFirstDownOnPass(_this__u8e3s4, PointerEventPass_Main_getInstance(), requireUnconsumed, $cont);
  }
  function awaitFirstDown$default(_this__u8e3s4, requireUnconsumed, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requireUnconsumed = true;
    return awaitFirstDown(_this__u8e3s4, requireUnconsumed, $cont);
  }
  function _set_isReleased__4u4tf4($this, _set____db54di) {
    $this.isReleased_1 = _set____db54di;
  }
  function _get_isReleased__a83rq4($this) {
    return $this.isReleased_1;
  }
  function _set_isCanceled__b8j09g($this, _set____db54di) {
    $this.isCanceled_1 = _set____db54di;
  }
  function _get_isCanceled__3tpkvs($this) {
    return $this.isCanceled_1;
  }
  function _get_mutex__e2dgb2_0($this) {
    return $this.mutex_1;
  }
  function $awaitReleaseCOROUTINE$19(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $awaitReleaseCOROUTINE$19.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.state_1 = 1;
            suspendResult = this._this__u8e3s4__1.tryAwaitRelease_crq8rt_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new GestureCancellationException('The press gesture was canceled.');
            } else {
              this.state_1 = 2;
              continue $sm;
            }

            break;
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
  $awaitReleaseCOROUTINE$19.$metadata$ = classMeta('$awaitReleaseCOROUTINE$19', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $tryAwaitReleaseCOROUTINE$20(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $tryAwaitReleaseCOROUTINE$20.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            if (!this._this__u8e3s4__1.isReleased_1 ? !this._this__u8e3s4__1.isCanceled_1 : false) {
              this.state_1 = 1;
              suspendResult = this._this__u8e3s4__1.mutex_1.lock$default_1z4sss_k$(null, this, 1, null);
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
            this.state_1 = 2;
            continue $sm;
          case 2:
            return this._this__u8e3s4__1.isReleased_1;
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
  $tryAwaitReleaseCOROUTINE$20.$metadata$ = classMeta('$tryAwaitReleaseCOROUTINE$20', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function PressGestureScopeImpl(density) {
    this.$$delegate_0__1 = density;
    this.isReleased_1 = false;
    this.isCanceled_1 = false;
    this.mutex_1 = Mutex(false);
  }
  PressGestureScopeImpl.prototype.get_density_qy0267_k$ = function () {
    return this.$$delegate_0__1.get_density_qy0267_k$();
  };
  PressGestureScopeImpl.prototype.get_fontScale_h56n3i_k$ = function () {
    return this.$$delegate_0__1.get_fontScale_h56n3i_k$();
  };
  PressGestureScopeImpl.prototype.roundToPx_hl1u8z_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.roundToPx_hl1u8z_k$(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.roundToPx_bdej4u_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.roundToPx_bdej4u_k$(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.toDp_amhzyl_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.toDp_amhzyl_k$(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.toDp_2y47ho_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.toDp_2y47ho_k$(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.toDp_2eugbd_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.toDp_2eugbd_k$(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.toDpSize_ncjzav_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.toDpSize_ncjzav_k$(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.toPx_u0ojv5_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.toPx_u0ojv5_k$(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.toPx_x7oik4_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.toPx_x7oik4_k$(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.toRect_l767f3_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.toRect_l767f3_k$(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.toSize_z60fpn_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.toSize_z60fpn_k$(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.toSp_ul0xj8_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.toSp_ul0xj8_k$(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.toSp_j4kre0_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.toSp_j4kre0_k$(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.toSp_8a8emd_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.toSp_8a8emd_k$(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.cancel_2kogtl_k$ = function () {
    this.isCanceled_1 = true;
    this.mutex_1.unlock$default_sxv53j_k$(null, 1, null);
  };
  PressGestureScopeImpl.prototype.release_wtm6d2_k$ = function () {
    this.isReleased_1 = true;
    this.mutex_1.unlock$default_sxv53j_k$(null, 1, null);
  };
  PressGestureScopeImpl.prototype.reset_5tn5dq_k$ = function () {
    this.mutex_1.tryLock$default_1wxz6m_k$(null, 1, null);
    this.isReleased_1 = false;
    this.isCanceled_1 = false;
  };
  PressGestureScopeImpl.prototype.awaitRelease_14vvge_k$ = function ($cont) {
    var tmp = new $awaitReleaseCOROUTINE$19(this, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  PressGestureScopeImpl.prototype.tryAwaitRelease_crq8rt_k$ = function ($cont) {
    var tmp = new $tryAwaitReleaseCOROUTINE$20(this, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  PressGestureScopeImpl.$metadata$ = classMeta('PressGestureScopeImpl', [PressGestureScope, Density]);
  function waitForUpOrCancellation(_this__u8e3s4, $cont) {
    var tmp = new $waitForUpOrCancellationCOROUTINE$21(_this__u8e3s4, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function consumeUntilUp(_this__u8e3s4, $cont) {
    var tmp = new $consumeUntilUpCOROUTINE$22(_this__u8e3s4, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function awaitSecondDown(_this__u8e3s4, firstUp, $cont) {
    var tmp = _this__u8e3s4.get_viewConfiguration_qgdaco_k$().get_doubleTapTimeoutMillis_mlgmxq_k$();
    return _this__u8e3s4.withTimeoutOrNull_8v9767_k$(tmp, awaitSecondDown$slambda_0(firstUp, null), $cont);
  }
  function isPrimaryChangedDown(_this__u8e3s4, requireUnconsumed) {
    init_properties_TapGestureDetector_kt_9k8ojy();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAll' call
      var tmp0_fastAll = _this__u8e3s4.changes_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAll.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAll.get_fkrdnv_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.foundation.gestures.isPrimaryChangedDown.<anonymous>' call
          tmp$ret$0 = item.type_1 === Companion_getInstance_11().Mouse_1;
          if (!tmp$ret$0) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    var primaryButtonCausesDown = tmp$ret$1;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.util.fastAll' call
      var tmp1_fastAll = _this__u8e3s4.changes_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp1_fastAll.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = tmp1_fastAll.get_fkrdnv_k$(index_0);
          // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
          var tmp$ret$2;
          // Inline function 'androidx.compose.foundation.gestures.isPrimaryChangedDown.<anonymous>' call
          tmp$ret$2 = requireUnconsumed ? changedToDown(item_0) : changedToDownIgnoreConsumed(item_0);
          if (!tmp$ret$2) {
            tmp$ret$3 = false;
            break $l$block_0;
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$3 = true;
    }
    var changedToDown_0 = tmp$ret$3;
    return changedToDown_0 ? get_isPrimaryPressed(_this__u8e3s4.buttons_1) ? true : !primaryButtonCausesDown : false;
  }
  function detectTapAndPress(_this__u8e3s4, onPress, onTap, $cont) {
    var pressScope = new PressGestureScopeImpl(_this__u8e3s4);
    return forEachGesture(_this__u8e3s4, detectTapAndPress$slambda_0(pressScope, onPress, onTap, null), $cont);
  }
  function detectTapAndPress$default(_this__u8e3s4, onPress, onTap, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onPress = get_NoPressGesture();
    if (!(($mask0 & 2) === 0))
      onTap = null;
    return detectTapAndPress(_this__u8e3s4, onPress, onTap, $cont);
  }
  function NoPressGesture$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  NoPressGesture$slambda.prototype.invoke_56pugh_k$ = function ($this$null, it, $cont) {
    var tmp = this.create_rju3ym_k$($this$null, it, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  NoPressGesture$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, PressGestureScope) : false) ? p1 : THROW_CCE();
    return this.invoke_56pugh_k$(tmp, p2 instanceof Offset_0 ? p2.packedValue_1 : THROW_CCE(), $cont);
  };
  NoPressGesture$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  NoPressGesture$slambda.prototype.create_rju3ym_k$ = function ($this$null, it, completion) {
    var i = new NoPressGesture$slambda(completion);
    i.$this$null_1 = $this$null;
    i.it_1 = it;
    return i;
  };
  NoPressGesture$slambda.$metadata$ = classMeta('NoPressGesture$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function NoPressGesture$slambda_0(resultContinuation) {
    var i = new NoPressGesture$slambda(resultContinuation);
    var l = function ($this$null, it, $cont) {
      return i.invoke_56pugh_k$($this$null, it.packedValue_1, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function detectTapGestures$slambda$slambda$slambda$slambda($onPress, $pressScope, $down, resultContinuation) {
    this.$onPress_1 = $onPress;
    this.$pressScope_1 = $pressScope;
    this.$down_1 = $down;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapGestures$slambda$slambda$slambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  detectTapGestures$slambda$slambda$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapGestures$slambda$slambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.$onPress_1(this.$pressScope_1, new Offset_0(this.$down_1.position_1), this);
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
  detectTapGestures$slambda$slambda$slambda$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new detectTapGestures$slambda$slambda$slambda$slambda(this.$onPress_1, this.$pressScope_1, this.$down_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  detectTapGestures$slambda$slambda$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  detectTapGestures$slambda$slambda$slambda$slambda.$metadata$ = classMeta('detectTapGestures$slambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapGestures$slambda$slambda$slambda$slambda_0($onPress, $pressScope, $down, resultContinuation) {
    var i = new detectTapGestures$slambda$slambda$slambda$slambda($onPress, $pressScope, $down, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapGestures$slambda$slambda$slambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapGestures$slambda$slambda$slambda$slambda_1.prototype.invoke_oftzk0_k$ = function ($this$withTimeout, $cont) {
    var tmp = this.create_699gxy_k$($this$withTimeout, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  detectTapGestures$slambda$slambda$slambda$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_oftzk0_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapGestures$slambda$slambda$slambda$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = waitForUpOrCancellation(this.$this$withTimeout_1, this);
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
  detectTapGestures$slambda$slambda$slambda$slambda_1.prototype.create_699gxy_k$ = function ($this$withTimeout, completion) {
    var i = new detectTapGestures$slambda$slambda$slambda$slambda_1(completion);
    i.$this$withTimeout_1 = $this$withTimeout;
    return i;
  };
  detectTapGestures$slambda$slambda$slambda$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  detectTapGestures$slambda$slambda$slambda$slambda_1.$metadata$ = classMeta('detectTapGestures$slambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapGestures$slambda$slambda$slambda$slambda_2(resultContinuation) {
    var i = new detectTapGestures$slambda$slambda$slambda$slambda_1(resultContinuation);
    var l = function ($this$withTimeout, $cont) {
      return i.invoke_oftzk0_k$($this$withTimeout, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapGestures$slambda$slambda$slambda$slambda_3($onPress, $pressScope, $secondDown, resultContinuation) {
    this.$onPress_1 = $onPress;
    this.$pressScope_1 = $pressScope;
    this.$secondDown_1 = $secondDown;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapGestures$slambda$slambda$slambda$slambda_3.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  detectTapGestures$slambda$slambda$slambda$slambda_3.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapGestures$slambda$slambda$slambda$slambda_3.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.$onPress_1(this.$pressScope_1, new Offset_0(this.$secondDown_1.position_1), this);
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
  detectTapGestures$slambda$slambda$slambda$slambda_3.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new detectTapGestures$slambda$slambda$slambda$slambda_3(this.$onPress_1, this.$pressScope_1, this.$secondDown_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  detectTapGestures$slambda$slambda$slambda$slambda_3.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  detectTapGestures$slambda$slambda$slambda$slambda_3.$metadata$ = classMeta('detectTapGestures$slambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapGestures$slambda$slambda$slambda$slambda_4($onPress, $pressScope, $secondDown, resultContinuation) {
    var i = new detectTapGestures$slambda$slambda$slambda$slambda_3($onPress, $pressScope, $secondDown, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapGestures$slambda$slambda$slambda$slambda_5($pressScope, $onDoubleTap, $onTap, $upOrCancel, resultContinuation) {
    this.$pressScope_1 = $pressScope;
    this.$onDoubleTap_1 = $onDoubleTap;
    this.$onTap_1 = $onTap;
    this.$upOrCancel_1 = $upOrCancel;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapGestures$slambda$slambda$slambda$slambda_5.prototype.invoke_9528h2_k$ = function ($this$withTimeout, $cont) {
    var tmp = this.create_699gxy_k$($this$withTimeout, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  detectTapGestures$slambda$slambda$slambda$slambda_5.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_9528h2_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapGestures$slambda$slambda$slambda$slambda_5.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = waitForUpOrCancellation(this.$this$withTimeout_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var secondUp = suspendResult;
            var tmp_0;
            if (!(secondUp == null)) {
              secondUp.consume_spbz2t_k$();
              this.$pressScope_1.release_wtm6d2_k$();
              this.$onDoubleTap_1(new Offset_0(secondUp.position_1));
              tmp_0 = Unit_getInstance();
            } else {
              this.$pressScope_1.cancel_2kogtl_k$();
              var tmp0_safe_receiver = this.$onTap_1;
              tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver(new Offset_0(this.$upOrCancel_1._v.position_1));
            }

            return tmp_0;
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
  detectTapGestures$slambda$slambda$slambda$slambda_5.prototype.create_699gxy_k$ = function ($this$withTimeout, completion) {
    var i = new detectTapGestures$slambda$slambda$slambda$slambda_5(this.$pressScope_1, this.$onDoubleTap_1, this.$onTap_1, this.$upOrCancel_1, completion);
    i.$this$withTimeout_1 = $this$withTimeout;
    return i;
  };
  detectTapGestures$slambda$slambda$slambda$slambda_5.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  detectTapGestures$slambda$slambda$slambda$slambda_5.$metadata$ = classMeta('detectTapGestures$slambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapGestures$slambda$slambda$slambda$slambda_6($pressScope, $onDoubleTap, $onTap, $upOrCancel, resultContinuation) {
    var i = new detectTapGestures$slambda$slambda$slambda$slambda_5($pressScope, $onDoubleTap, $onTap, $upOrCancel, resultContinuation);
    var l = function ($this$withTimeout, $cont) {
      return i.invoke_9528h2_k$($this$withTimeout, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapGestures$slambda$slambda$slambda($pressScope, $onPress, $this_coroutineScope, $onLongPress, $onDoubleTap, $onTap, resultContinuation) {
    this.$pressScope_1 = $pressScope;
    this.$onPress_1 = $onPress;
    this.$this_coroutineScope_1 = $this_coroutineScope;
    this.$onLongPress_1 = $onLongPress;
    this.$onDoubleTap_1 = $onDoubleTap;
    this.$onTap_1 = $onTap;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapGestures$slambda$slambda$slambda.prototype.invoke_6kuihv_k$ = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.create_699gxy_k$($this$awaitPointerEventScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  detectTapGestures$slambda$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapGestures$slambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 14;
            this.state_1 = 1;
            suspendResult = awaitFirstDown$default(this.$this$awaitPointerEventScope_1, false, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.down0__1 = suspendResult;
            this.down0__1.consume_spbz2t_k$();
            this.$pressScope_1.reset_5tn5dq_k$();
            if (!(this.$onPress_1 === get_NoPressGesture())) {
              launch$default(this.$this_coroutineScope_1, null, null, detectTapGestures$slambda$slambda$slambda$slambda_0(this.$onPress_1, this.$pressScope_1, this.down0__1, null), 3, null);
            }

            var tmp_0 = this;
            var tmp0_safe_receiver = this.$onLongPress_1;
            var tmp_1;
            if (tmp0_safe_receiver == null) {
              tmp_1 = null;
            } else {
              tmp_1 = this.$this$awaitPointerEventScope_1.get_viewConfiguration_qgdaco_k$().get_longPressTimeoutMillis_i28jbr_k$();
            }

            var tmp1_elvis_lhs = tmp_1;
            var tmp_2;
            if (tmp1_elvis_lhs == null) {
              Companion_getInstance_13();
              var tmp0_div = new Long(-1, 2147483647);
              tmp_2 = tmp0_div.div_9s1fi3_k$(new Long(2, 0));
            } else {
              tmp_2 = tmp1_elvis_lhs;
            }

            tmp_0.longPressTimeout1__1 = tmp_2;
            this.upOrCancel2__1 = {_v: null};
            this.exceptionState_1 = 3;
            this.state_1 = 2;
            suspendResult = this.$this$awaitPointerEventScope_1.withTimeout_gtk4k_k$(this.longPressTimeout1__1, detectTapGestures$slambda$slambda$slambda$slambda_2(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ARGUMENT3__1 = suspendResult;
            this.upOrCancel2__1._v = this.ARGUMENT3__1;
            if (this.upOrCancel2__1._v == null) {
              this.$pressScope_1.cancel_2kogtl_k$();
            } else {
              this.upOrCancel2__1._v.consume_spbz2t_k$();
              this.$pressScope_1.release_wtm6d2_k$();
            }

            this.exceptionState_1 = 14;
            this.state_1 = 5;
            continue $sm;
          case 3:
            this.exceptionState_1 = 14;
            var tmp_3 = this.exception_1;
            if (tmp_3 instanceof PointerEventTimeoutCancellationException) {
              this._4__1 = this.exception_1;
              var tmp2_safe_receiver = this.$onLongPress_1;
              if (tmp2_safe_receiver == null)
                null;
              else
                tmp2_safe_receiver(new Offset_0(this.down0__1.position_1));
              this.state_1 = 4;
              suspendResult = consumeUntilUp(this.$this$awaitPointerEventScope_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.exception_1;
            }

            break;
          case 4:
            this.$pressScope_1.release_wtm6d2_k$();
            this.state_1 = 5;
            continue $sm;
          case 5:
            this.exceptionState_1 = 14;
            if (!(this.upOrCancel2__1._v == null)) {
              if (this.$onDoubleTap_1 == null) {
                var tmp3_safe_receiver = this.$onTap_1;
                if (tmp3_safe_receiver == null)
                  null;
                else
                  tmp3_safe_receiver(new Offset_0(this.upOrCancel2__1._v.position_1));
                this.state_1 = 12;
                continue $sm;
              } else {
                this.state_1 = 6;
                suspendResult = awaitSecondDown(this.$this$awaitPointerEventScope_1, this.upOrCancel2__1._v, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.state_1 = 13;
              continue $sm;
            }

            break;
          case 6:
            this.secondDown5__1 = suspendResult;
            if (this.secondDown5__1 == null) {
              var tmp4_safe_receiver = this.$onTap_1;
              if (tmp4_safe_receiver == null)
                null;
              else
                tmp4_safe_receiver(new Offset_0(this.upOrCancel2__1._v.position_1));
              this.state_1 = 11;
              continue $sm;
            } else {
              this.$pressScope_1.reset_5tn5dq_k$();
              if (!(this.$onPress_1 === get_NoPressGesture())) {
                launch$default(this.$this_coroutineScope_1, null, null, detectTapGestures$slambda$slambda$slambda$slambda_4(this.$onPress_1, this.$pressScope_1, this.secondDown5__1, null), 3, null);
              }
              this.exceptionState_1 = 8;
              this.state_1 = 7;
              suspendResult = this.$this$awaitPointerEventScope_1.withTimeout_gtk4k_k$(this.longPressTimeout1__1, detectTapGestures$slambda$slambda$slambda$slambda_6(this.$pressScope_1, this.$onDoubleTap_1, this.$onTap_1, this.upOrCancel2__1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 7:
            ;
            this.exceptionState_1 = 14;
            this.state_1 = 10;
            continue $sm;
          case 8:
            this.exceptionState_1 = 14;
            var tmp_4 = this.exception_1;
            if (tmp_4 instanceof PointerEventTimeoutCancellationException) {
              this.e6__1 = this.exception_1;
              var tmp5_safe_receiver = this.$onTap_1;
              if (tmp5_safe_receiver == null)
                null;
              else
                tmp5_safe_receiver(new Offset_0(this.upOrCancel2__1._v.position_1));
              var tmp6_safe_receiver = this.$onLongPress_1;
              if (tmp6_safe_receiver == null)
                null;
              else
                tmp6_safe_receiver(new Offset_0(this.secondDown5__1.position_1));
              this.state_1 = 9;
              suspendResult = consumeUntilUp(this.$this$awaitPointerEventScope_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.exception_1;
            }

            break;
          case 9:
            this.$pressScope_1.release_wtm6d2_k$();
            this.state_1 = 10;
            continue $sm;
          case 10:
            this.exceptionState_1 = 14;
            this.state_1 = 11;
            continue $sm;
          case 11:
            this.state_1 = 12;
            continue $sm;
          case 12:
            this.state_1 = 13;
            continue $sm;
          case 13:
            return Unit_getInstance();
          case 14:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 14) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  detectTapGestures$slambda$slambda$slambda.prototype.create_699gxy_k$ = function ($this$awaitPointerEventScope, completion) {
    var i = new detectTapGestures$slambda$slambda$slambda(this.$pressScope_1, this.$onPress_1, this.$this_coroutineScope_1, this.$onLongPress_1, this.$onDoubleTap_1, this.$onTap_1, completion);
    i.$this$awaitPointerEventScope_1 = $this$awaitPointerEventScope;
    return i;
  };
  detectTapGestures$slambda$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  detectTapGestures$slambda$slambda$slambda.$metadata$ = classMeta('detectTapGestures$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapGestures$slambda$slambda$slambda_0($pressScope, $onPress, $this_coroutineScope, $onLongPress, $onDoubleTap, $onTap, resultContinuation) {
    var i = new detectTapGestures$slambda$slambda$slambda($pressScope, $onPress, $this_coroutineScope, $onLongPress, $onDoubleTap, $onTap, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.invoke_6kuihv_k$($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapGestures$slambda$slambda($pressScope, $onPress, $this_coroutineScope, $onLongPress, $onDoubleTap, $onTap, resultContinuation) {
    this.$pressScope_1 = $pressScope;
    this.$onPress_1 = $onPress;
    this.$this_coroutineScope_1 = $this_coroutineScope;
    this.$onLongPress_1 = $onLongPress;
    this.$onDoubleTap_1 = $onDoubleTap;
    this.$onTap_1 = $onTap;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapGestures$slambda$slambda.prototype.invoke_dycxzz_k$ = function ($this$forEachGesture, $cont) {
    var tmp = this.create_9k90ga_k$($this$forEachGesture, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  detectTapGestures$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapGestures$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.$this$forEachGesture_1.awaitPointerEventScope_w0i122_k$(detectTapGestures$slambda$slambda$slambda_0(this.$pressScope_1, this.$onPress_1, this.$this_coroutineScope_1, this.$onLongPress_1, this.$onDoubleTap_1, this.$onTap_1, null), this);
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
  detectTapGestures$slambda$slambda.prototype.create_9k90ga_k$ = function ($this$forEachGesture, completion) {
    var i = new detectTapGestures$slambda$slambda(this.$pressScope_1, this.$onPress_1, this.$this_coroutineScope_1, this.$onLongPress_1, this.$onDoubleTap_1, this.$onTap_1, completion);
    i.$this$forEachGesture_1 = $this$forEachGesture;
    return i;
  };
  detectTapGestures$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  detectTapGestures$slambda$slambda.$metadata$ = classMeta('detectTapGestures$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapGestures$slambda$slambda_0($pressScope, $onPress, $this_coroutineScope, $onLongPress, $onDoubleTap, $onTap, resultContinuation) {
    var i = new detectTapGestures$slambda$slambda($pressScope, $onPress, $this_coroutineScope, $onLongPress, $onDoubleTap, $onTap, resultContinuation);
    var l = function ($this$forEachGesture, $cont) {
      return i.invoke_dycxzz_k$($this$forEachGesture, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapGestures$slambda($this_detectTapGestures, $onPress, $onLongPress, $onDoubleTap, $onTap, resultContinuation) {
    this.$this_detectTapGestures_1 = $this_detectTapGestures;
    this.$onPress_1 = $onPress;
    this.$onLongPress_1 = $onLongPress;
    this.$onDoubleTap_1 = $onDoubleTap;
    this.$onTap_1 = $onTap;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapGestures$slambda.prototype.invoke_d6gbsu_k$ = function ($this$coroutineScope, $cont) {
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  detectTapGestures$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapGestures$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.pressScope0__1 = new PressGestureScopeImpl(this.$this_detectTapGestures_1);
            this.state_1 = 1;
            suspendResult = forEachGesture(this.$this_detectTapGestures_1, detectTapGestures$slambda$slambda_0(this.pressScope0__1, this.$onPress_1, this.$this$coroutineScope_1, this.$onLongPress_1, this.$onDoubleTap_1, this.$onTap_1, null), this);
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
  detectTapGestures$slambda.prototype.create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    var i = new detectTapGestures$slambda(this.$this_detectTapGestures_1, this.$onPress_1, this.$onLongPress_1, this.$onDoubleTap_1, this.$onTap_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  detectTapGestures$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  detectTapGestures$slambda.$metadata$ = classMeta('detectTapGestures$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapGestures$slambda_0($this_detectTapGestures, $onPress, $onLongPress, $onDoubleTap, $onTap, resultContinuation) {
    var i = new detectTapGestures$slambda($this_detectTapGestures, $onPress, $onLongPress, $onDoubleTap, $onTap, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.invoke_d6gbsu_k$($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function awaitSecondDown$slambda($firstUp, resultContinuation) {
    this.$firstUp_1 = $firstUp;
    CoroutineImpl.call(this, resultContinuation);
  }
  awaitSecondDown$slambda.prototype.invoke_ju07jx_k$ = function ($this$withTimeoutOrNull, $cont) {
    var tmp = this.create_699gxy_k$($this$withTimeoutOrNull, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  awaitSecondDown$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ju07jx_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  awaitSecondDown$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            this.minUptime0__1 = this.$firstUp_1.uptimeMillis_1.plus_u6jwas_k$(this.$this$withTimeoutOrNull_1.get_viewConfiguration_qgdaco_k$().get_doubleTapMinTimeMillis_nsfx4s_k$());
            this.state_1 = 1;
            continue $sm;
          case 1:
            this.state_1 = 2;
            suspendResult = awaitFirstDown$default(this.$this$withTimeoutOrNull_1, false, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.change1__1 = suspendResult;
            if (this.change1__1.uptimeMillis_1.compareTo_n4fqi2_k$(this.minUptime0__1) < 0) {
              this.state_1 = 1;
              continue $sm;
            }

            this.state_1 = 3;
            continue $sm;
          case 3:
            return this.change1__1;
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
  awaitSecondDown$slambda.prototype.create_699gxy_k$ = function ($this$withTimeoutOrNull, completion) {
    var i = new awaitSecondDown$slambda(this.$firstUp_1, completion);
    i.$this$withTimeoutOrNull_1 = $this$withTimeoutOrNull;
    return i;
  };
  awaitSecondDown$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  awaitSecondDown$slambda.$metadata$ = classMeta('awaitSecondDown$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function awaitSecondDown$slambda_0($firstUp, resultContinuation) {
    var i = new awaitSecondDown$slambda($firstUp, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $cont) {
      return i.invoke_ju07jx_k$($this$withTimeoutOrNull, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapAndPress$slambda$slambda$slambda$slambda($onPress, $pressScope, $down, resultContinuation) {
    this.$onPress_1 = $onPress;
    this.$pressScope_1 = $pressScope;
    this.$down_1 = $down;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapAndPress$slambda$slambda$slambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  detectTapAndPress$slambda$slambda$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapAndPress$slambda$slambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.$onPress_1(this.$pressScope_1, new Offset_0(this.$down_1.position_1), this);
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
  detectTapAndPress$slambda$slambda$slambda$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new detectTapAndPress$slambda$slambda$slambda$slambda(this.$onPress_1, this.$pressScope_1, this.$down_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  detectTapAndPress$slambda$slambda$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  detectTapAndPress$slambda$slambda$slambda$slambda.$metadata$ = classMeta('detectTapAndPress$slambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapAndPress$slambda$slambda$slambda$slambda_0($onPress, $pressScope, $down, resultContinuation) {
    var i = new detectTapAndPress$slambda$slambda$slambda$slambda($onPress, $pressScope, $down, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapAndPress$slambda$slambda$slambda($onPress, $this_coroutineScope, $pressScope, $onTap, resultContinuation) {
    this.$onPress_1 = $onPress;
    this.$this_coroutineScope_1 = $this_coroutineScope;
    this.$pressScope_1 = $pressScope;
    this.$onTap_1 = $onTap;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapAndPress$slambda$slambda$slambda.prototype.invoke_6kuihv_k$ = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.create_699gxy_k$($this$awaitPointerEventScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  detectTapAndPress$slambda$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapAndPress$slambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            this.state_1 = 1;
            suspendResult = awaitFirstDown$default(this.$this$awaitPointerEventScope_1, false, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tmp0_also0__1 = suspendResult;
            this.tmp0_also0__1.consume_spbz2t_k$();
            ;
            this.down1__1 = this.tmp0_also0__1;
            if (!(this.$onPress_1 === get_NoPressGesture())) {
              launch$default(this.$this_coroutineScope_1, null, null, detectTapAndPress$slambda$slambda$slambda$slambda_0(this.$onPress_1, this.$pressScope_1, this.down1__1, null), 3, null);
            }

            this.state_1 = 2;
            suspendResult = waitForUpOrCancellation(this.$this$awaitPointerEventScope_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var up = suspendResult;
            if (up == null) {
              this.$pressScope_1.cancel_2kogtl_k$();
            } else {
              up.consume_spbz2t_k$();
              this.$pressScope_1.release_wtm6d2_k$();
              var tmp0_safe_receiver = this.$onTap_1;
              if (tmp0_safe_receiver == null)
                null;
              else
                tmp0_safe_receiver(new Offset_0(up.position_1));
            }

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
  detectTapAndPress$slambda$slambda$slambda.prototype.create_699gxy_k$ = function ($this$awaitPointerEventScope, completion) {
    var i = new detectTapAndPress$slambda$slambda$slambda(this.$onPress_1, this.$this_coroutineScope_1, this.$pressScope_1, this.$onTap_1, completion);
    i.$this$awaitPointerEventScope_1 = $this$awaitPointerEventScope;
    return i;
  };
  detectTapAndPress$slambda$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  detectTapAndPress$slambda$slambda$slambda.$metadata$ = classMeta('detectTapAndPress$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapAndPress$slambda$slambda$slambda_0($onPress, $this_coroutineScope, $pressScope, $onTap, resultContinuation) {
    var i = new detectTapAndPress$slambda$slambda$slambda($onPress, $this_coroutineScope, $pressScope, $onTap, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.invoke_6kuihv_k$($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapAndPress$slambda$slambda($pressScope, $this_forEachGesture, $onPress, $onTap, resultContinuation) {
    this.$pressScope_1 = $pressScope;
    this.$this_forEachGesture_1 = $this_forEachGesture;
    this.$onPress_1 = $onPress;
    this.$onTap_1 = $onTap;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapAndPress$slambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$coroutineScope, $cont) {
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  detectTapAndPress$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapAndPress$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.$pressScope_1.reset_5tn5dq_k$();
            this.state_1 = 1;
            suspendResult = this.$this_forEachGesture_1.awaitPointerEventScope_w0i122_k$(detectTapAndPress$slambda$slambda$slambda_0(this.$onPress_1, this.$this$coroutineScope_1, this.$pressScope_1, this.$onTap_1, null), this);
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
  detectTapAndPress$slambda$slambda.prototype.create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    var i = new detectTapAndPress$slambda$slambda(this.$pressScope_1, this.$this_forEachGesture_1, this.$onPress_1, this.$onTap_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  detectTapAndPress$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  detectTapAndPress$slambda$slambda.$metadata$ = classMeta('detectTapAndPress$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapAndPress$slambda$slambda_0($pressScope, $this_forEachGesture, $onPress, $onTap, resultContinuation) {
    var i = new detectTapAndPress$slambda$slambda($pressScope, $this_forEachGesture, $onPress, $onTap, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.invoke_d6gbsu_k$($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapAndPress$slambda($pressScope, $onPress, $onTap, resultContinuation) {
    this.$pressScope_1 = $pressScope;
    this.$onPress_1 = $onPress;
    this.$onTap_1 = $onTap;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapAndPress$slambda.prototype.invoke_dycxzz_k$ = function ($this$forEachGesture, $cont) {
    var tmp = this.create_9k90ga_k$($this$forEachGesture, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  detectTapAndPress$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapAndPress$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = coroutineScope(detectTapAndPress$slambda$slambda_0(this.$pressScope_1, this.$this$forEachGesture_1, this.$onPress_1, this.$onTap_1, null), this);
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
  detectTapAndPress$slambda.prototype.create_9k90ga_k$ = function ($this$forEachGesture, completion) {
    var i = new detectTapAndPress$slambda(this.$pressScope_1, this.$onPress_1, this.$onTap_1, completion);
    i.$this$forEachGesture_1 = $this$forEachGesture;
    return i;
  };
  detectTapAndPress$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  detectTapAndPress$slambda.$metadata$ = classMeta('detectTapAndPress$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapAndPress$slambda_0($pressScope, $onPress, $onTap, resultContinuation) {
    var i = new detectTapAndPress$slambda($pressScope, $onPress, $onTap, resultContinuation);
    var l = function ($this$forEachGesture, $cont) {
      return i.invoke_dycxzz_k$($this$forEachGesture, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $awaitFirstDownOnPassCOROUTINE$18(_this__u8e3s4, pass, requireUnconsumed, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pass_1 = pass;
    this.requireUnconsumed_1 = requireUnconsumed;
  }
  $awaitFirstDownOnPassCOROUTINE$18.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            this.state_1 = 1;
            continue $sm;
          case 1:
            this.state_1 = 2;
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent_sg5aej_k$(this.pass_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.event0__1 = suspendResult;
            if (!isPrimaryChangedDown(this.event0__1, this.requireUnconsumed_1)) {
              this.state_1 = 1;
              continue $sm;
            }

            this.state_1 = 3;
            continue $sm;
          case 3:
            return this.event0__1.changes_1.get_fkrdnv_k$(0);
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
  $awaitFirstDownOnPassCOROUTINE$18.$metadata$ = classMeta('$awaitFirstDownOnPassCOROUTINE$18', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $waitForUpOrCancellationCOROUTINE$21(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $waitForUpOrCancellationCOROUTINE$21.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.state_1 = 5;
              continue $sm;
            }

            this.state_1 = 2;
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.event0__1 = suspendResult;
            l$ret$1: do {
              var tmp0_fastAll = this.event0__1.changes_1;
              var inductionVariable = 0;
              var last = tmp0_fastAll.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastAll.get_fkrdnv_k$(index);
                  if (!changedToUp(item)) {
                    this.tmp$ret$01__1 = false;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              this.tmp$ret$01__1 = true;
            }
             while (false);
            if (this.tmp$ret$01__1) {
              return this.event0__1.changes_1.get_fkrdnv_k$(0);
            }

            l$ret$3: do {
              var tmp1_fastAny = this.event0__1.changes_1;
              var inductionVariable_0 = 0;
              var last_0 = tmp1_fastAny.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = tmp1_fastAny.get_fkrdnv_k$(index_0);
                  if (item_0.get_isConsumed_scj5q3_k$() ? true : isOutOfBounds(item_0, this._this__u8e3s4__1.get_size_yscczt_k$(), this._this__u8e3s4__1.get_extendedTouchPadding_uaqi8a_k$())) {
                    this.tmp$ret$22__1 = true;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable_0 <= last_0);
              this.tmp$ret$22__1 = false;
            }
             while (false);
            if (this.tmp$ret$22__1) {
              return null;
            }

            this.state_1 = 3;
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var consumeCheck = suspendResult;
            var tmp$ret$4;
            l$ret$5: do {
              var tmp2_fastAny = consumeCheck.changes_1;
              var inductionVariable_1 = 0;
              var last_1 = tmp2_fastAny.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable_1 <= last_1)
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp2_fastAny.get_fkrdnv_k$(index_1);
                  if (item_1.get_isConsumed_scj5q3_k$()) {
                    tmp$ret$4 = true;
                    break l$ret$5;
                  }
                }
                 while (inductionVariable_1 <= last_1);
              tmp$ret$4 = false;
            }
             while (false);
            if (tmp$ret$4) {
              return null;
            }

            this.state_1 = 1;
            continue $sm;
          case 4:
            throw this.exception_1;
          case 5:
            return Unit_getInstance();
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
  $waitForUpOrCancellationCOROUTINE$21.$metadata$ = classMeta('$waitForUpOrCancellationCOROUTINE$21', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $consumeUntilUpCOROUTINE$22(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $consumeUntilUpCOROUTINE$22.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            this.state_1 = 1;
            continue $sm;
          case 1:
            this.state_1 = 2;
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent$default_gxqupv_k$(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var event = suspendResult;
            var tmp0_fastForEach = event.changes_1;
            var inductionVariable = 0;
            var last = tmp0_fastForEach.get_size_woubt6_k$() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = tmp0_fastForEach.get_fkrdnv_k$(index);
                item.consume_spbz2t_k$();
              }
               while (inductionVariable <= last);
            var tmp$ret$0;
            l$ret$1: do {
              var tmp1_fastAny = event.changes_1;
              var inductionVariable_0 = 0;
              var last_0 = tmp1_fastAny.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = tmp1_fastAny.get_fkrdnv_k$(index_0);
                  if (item_0.pressed_1) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable_0 <= last_0);
              tmp$ret$0 = false;
            }
             while (false);
            if (tmp$ret$0) {
              this.state_1 = 1;
              continue $sm;
            }

            this.state_1 = 3;
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
  $consumeUntilUpCOROUTINE$22.$metadata$ = classMeta('$consumeUntilUpCOROUTINE$22', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  var properties_initialized_TapGestureDetector_kt_lhe8oi;
  function init_properties_TapGestureDetector_kt_9k8ojy() {
    if (properties_initialized_TapGestureDetector_kt_lhe8oi) {
    } else {
      properties_initialized_TapGestureDetector_kt_lhe8oi = true;
      NoPressGesture = NoPressGesture$slambda_0(null);
    }
  }
  function get_MinFlingVelocityDp() {
    init_properties_SnapFlingBehavior_kt_e4c4eo();
    return MinFlingVelocityDp;
  }
  var MinFlingVelocityDp;
  var properties_initialized_SnapFlingBehavior_kt_r96zw;
  function init_properties_SnapFlingBehavior_kt_e4c4eo() {
    if (properties_initialized_SnapFlingBehavior_kt_r96zw) {
    } else {
      properties_initialized_SnapFlingBehavior_kt_r96zw = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(400);
      MinFlingVelocityDp = tmp$ret$0;
    }
  }
  function Start() {
    this.$stable_1 = 0;
  }
  Start.$metadata$ = classMeta('Start', [DragInteraction]);
  function Stop(start) {
    this.start_1 = start;
    this.$stable_1 = 0;
  }
  Stop.prototype.get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  Stop.$metadata$ = classMeta('Stop', [DragInteraction]);
  function Cancel(start) {
    this.start_1 = start;
    this.$stable_1 = 0;
  }
  Cancel.prototype.get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  Cancel.$metadata$ = classMeta('Cancel', [DragInteraction]);
  function DragInteraction() {
  }
  DragInteraction.$metadata$ = interfaceMeta('DragInteraction', [Interaction]);
  function collectIsFocusedAsState$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1452413326);
    sourceInformation($composer_0, 'C(collectIsFocusedAsState$composable)65@2219L34,66@2279L414,66@2258L435:FocusInteraction.kt#ywyzhk');
    if (isTraceInProgress()) {
      traceEventStart(-1452413326, $changed, -1, 'androidx.compose.foundation.interaction.collectIsFocusedAsState$composable (FocusInteraction.kt:64)');
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
    if (false ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.interaction.collectIsFocusedAsState$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf$default(false, null, 2, null);
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
    var isFocused = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp1_remember$composable = $composer_0;
    var tmp2_remember$composable = 14 & $changed;
    var $composer_2 = tmp1_remember$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_2, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_2;
    var tmp2_cache = !!($composer_2.changed_ga7h3f_k$(_this__u8e3s4) | $composer_2.changed_ga7h3f_k$(isFocused));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_6().Empty_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.foundation.interaction.collectIsFocusedAsState$composable.<anonymous>' call
      tmp$ret$5 = collectIsFocusedAsState$composable$slambda_0(_this__u8e3s4, isFocused, null);
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
    LaunchedEffect$composable(_this__u8e3s4, tmp$ret$9, $composer_0, 14 & $changed);
    var tmp0_1 = isFocused;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_1;
  }
  function Focus() {
    this.$stable_1 = 0;
  }
  Focus.$metadata$ = classMeta('Focus', [FocusInteraction]);
  function Unfocus(focus) {
    this.focus_1 = focus;
    this.$stable_1 = 0;
  }
  Unfocus.prototype.get_focus_irhg33_k$ = function () {
    return this.focus_1;
  };
  Unfocus.$metadata$ = classMeta('Unfocus', [FocusInteraction]);
  function FocusInteraction() {
  }
  FocusInteraction.$metadata$ = interfaceMeta('FocusInteraction', [Interaction]);
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function collectIsFocusedAsState$composable$slambda$slambda($focusInteractions, $isFocused, resultContinuation) {
    this.$focusInteractions_1 = $focusInteractions;
    this.$isFocused_1 = $isFocused;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsFocusedAsState$composable$slambda$slambda.prototype.invoke_ry6yte_k$ = function (interaction, $cont) {
    var tmp = this.create_xj5a0d_k$(interaction, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  collectIsFocusedAsState$composable$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ry6yte_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsFocusedAsState$composable$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Focus) {
            this.$focusInteractions_1.add_1j60pz_k$(this.interaction_1);
          } else {
            if (tmp0_subject instanceof Unfocus) {
              this.$focusInteractions_1.remove_8hbkc6_k$(this.interaction_1.focus_1);
            }
          }
          this.$isFocused_1.set_value_rnwamw_k$(!this.$focusInteractions_1.isEmpty_y1axqb_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  collectIsFocusedAsState$composable$slambda$slambda.prototype.create_xj5a0d_k$ = function (interaction, completion) {
    var i = new collectIsFocusedAsState$composable$slambda$slambda(this.$focusInteractions_1, this.$isFocused_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  collectIsFocusedAsState$composable$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_xj5a0d_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  collectIsFocusedAsState$composable$slambda$slambda.$metadata$ = classMeta('collectIsFocusedAsState$composable$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function collectIsFocusedAsState$composable$slambda$slambda_0($focusInteractions, $isFocused, resultContinuation) {
    var i = new collectIsFocusedAsState$composable$slambda$slambda($focusInteractions, $isFocused, resultContinuation);
    var l = function (interaction, $cont) {
      return i.invoke_ry6yte_k$(interaction, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsFocusedAsState$composable$slambda($this_collectIsFocusedAsState$composable, $isFocused, resultContinuation) {
    this.$this_collectIsFocusedAsState$composable_1 = $this_collectIsFocusedAsState$composable;
    this.$isFocused_1 = $isFocused;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsFocusedAsState$composable$slambda.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  collectIsFocusedAsState$composable$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsFocusedAsState$composable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            var tmp_0 = this;
            tmp_0.focusInteractions0__1 = ArrayList_init_$Create$_0();
            this.state_1 = 1;
            var tmp_1 = this.$this_collectIsFocusedAsState$composable_1.get_interactions_ql02qy_k$();
            var tmp_2 = collectIsFocusedAsState$composable$slambda$slambda_0(this.focusInteractions0__1, this.$isFocused_1, null);
            suspendResult = tmp_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_2), this);
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
  collectIsFocusedAsState$composable$slambda.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new collectIsFocusedAsState$composable$slambda(this.$this_collectIsFocusedAsState$composable_1, this.$isFocused_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  collectIsFocusedAsState$composable$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  collectIsFocusedAsState$composable$slambda.$metadata$ = classMeta('collectIsFocusedAsState$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function collectIsFocusedAsState$composable$slambda_0($this_collectIsFocusedAsState$composable, $isFocused, resultContinuation) {
    var i = new collectIsFocusedAsState$composable$slambda($this_collectIsFocusedAsState$composable, $isFocused, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsHoveredAsState$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1621024626);
    sourceInformation($composer_0, 'C(collectIsHoveredAsState$composable)65@2151L34,66@2211L411,66@2190L432:HoverInteraction.kt#ywyzhk');
    if (isTraceInProgress()) {
      traceEventStart(-1621024626, $changed, -1, 'androidx.compose.foundation.interaction.collectIsHoveredAsState$composable (HoverInteraction.kt:64)');
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
    if (false ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.interaction.collectIsHoveredAsState$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf$default(false, null, 2, null);
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
    var isHovered = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp1_remember$composable = $composer_0;
    var tmp2_remember$composable = 14 & $changed;
    var $composer_2 = tmp1_remember$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_2, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_2;
    var tmp2_cache = !!($composer_2.changed_ga7h3f_k$(_this__u8e3s4) | $composer_2.changed_ga7h3f_k$(isHovered));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_6().Empty_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.foundation.interaction.collectIsHoveredAsState$composable.<anonymous>' call
      tmp$ret$5 = collectIsHoveredAsState$composable$slambda_0(_this__u8e3s4, isHovered, null);
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
    LaunchedEffect$composable(_this__u8e3s4, tmp$ret$9, $composer_0, 14 & $changed);
    var tmp0_1 = isHovered;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_1;
  }
  function Enter() {
    this.$stable_1 = 0;
  }
  Enter.$metadata$ = classMeta('Enter', [HoverInteraction]);
  function Exit(enter) {
    this.enter_1 = enter;
    this.$stable_1 = 0;
  }
  Exit.prototype.get_enter_iqxcq7_k$ = function () {
    return this.enter_1;
  };
  Exit.$metadata$ = classMeta('Exit', [HoverInteraction]);
  function HoverInteraction() {
  }
  HoverInteraction.$metadata$ = interfaceMeta('HoverInteraction', [Interaction]);
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_1.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_1.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function collectIsHoveredAsState$composable$slambda$slambda($hoverInteractions, $isHovered, resultContinuation) {
    this.$hoverInteractions_1 = $hoverInteractions;
    this.$isHovered_1 = $isHovered;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsHoveredAsState$composable$slambda$slambda.prototype.invoke_ry6yte_k$ = function (interaction, $cont) {
    var tmp = this.create_xj5a0d_k$(interaction, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  collectIsHoveredAsState$composable$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ry6yte_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsHoveredAsState$composable$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Enter) {
            this.$hoverInteractions_1.add_1j60pz_k$(this.interaction_1);
          } else {
            if (tmp0_subject instanceof Exit) {
              this.$hoverInteractions_1.remove_8hbkc6_k$(this.interaction_1.enter_1);
            }
          }
          this.$isHovered_1.set_value_rnwamw_k$(!this.$hoverInteractions_1.isEmpty_y1axqb_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  collectIsHoveredAsState$composable$slambda$slambda.prototype.create_xj5a0d_k$ = function (interaction, completion) {
    var i = new collectIsHoveredAsState$composable$slambda$slambda(this.$hoverInteractions_1, this.$isHovered_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  collectIsHoveredAsState$composable$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_xj5a0d_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  collectIsHoveredAsState$composable$slambda$slambda.$metadata$ = classMeta('collectIsHoveredAsState$composable$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function collectIsHoveredAsState$composable$slambda$slambda_0($hoverInteractions, $isHovered, resultContinuation) {
    var i = new collectIsHoveredAsState$composable$slambda$slambda($hoverInteractions, $isHovered, resultContinuation);
    var l = function (interaction, $cont) {
      return i.invoke_ry6yte_k$(interaction, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsHoveredAsState$composable$slambda($this_collectIsHoveredAsState$composable, $isHovered, resultContinuation) {
    this.$this_collectIsHoveredAsState$composable_1 = $this_collectIsHoveredAsState$composable;
    this.$isHovered_1 = $isHovered;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsHoveredAsState$composable$slambda.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  collectIsHoveredAsState$composable$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsHoveredAsState$composable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            var tmp_0 = this;
            tmp_0.hoverInteractions0__1 = ArrayList_init_$Create$_0();
            this.state_1 = 1;
            var tmp_1 = this.$this_collectIsHoveredAsState$composable_1.get_interactions_ql02qy_k$();
            var tmp_2 = collectIsHoveredAsState$composable$slambda$slambda_0(this.hoverInteractions0__1, this.$isHovered_1, null);
            suspendResult = tmp_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_2), this);
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
  collectIsHoveredAsState$composable$slambda.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new collectIsHoveredAsState$composable$slambda(this.$this_collectIsHoveredAsState$composable_1, this.$isHovered_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  collectIsHoveredAsState$composable$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  collectIsHoveredAsState$composable$slambda.$metadata$ = classMeta('collectIsHoveredAsState$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function collectIsHoveredAsState$composable$slambda_0($this_collectIsHoveredAsState$composable, $isHovered, resultContinuation) {
    var i = new collectIsHoveredAsState$composable$slambda($this_collectIsHoveredAsState$composable, $isHovered, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Interaction() {
  }
  Interaction.$metadata$ = interfaceMeta('Interaction');
  function InteractionSource() {
  }
  InteractionSource.$metadata$ = interfaceMeta('InteractionSource');
  function MutableInteractionSource() {
  }
  MutableInteractionSource.$metadata$ = interfaceMeta('MutableInteractionSource', [InteractionSource]);
  function funMutableInteractionSource() {
    return new MutableInteractionSourceImpl();
  }
  function MutableInteractionSourceImpl() {
    var tmp = this;
    tmp.interactions_1 = MutableSharedFlow$default(0, 16, BufferOverflow_DROP_OLDEST_getInstance(), 1, null);
  }
  MutableInteractionSourceImpl.prototype.get_interactions_ql02qy_k$ = function () {
    return this.interactions_1;
  };
  MutableInteractionSourceImpl.prototype.emit_lotjoj_k$ = function (interaction, $cont) {
    return this.interactions_1.emit_1fbrsb_k$(interaction, $cont);
  };
  MutableInteractionSourceImpl.prototype.tryEmit_fphub9_k$ = function (interaction) {
    return this.interactions_1.tryEmit_4zef7h_k$(interaction);
  };
  MutableInteractionSourceImpl.$metadata$ = classMeta('MutableInteractionSourceImpl', [MutableInteractionSource]);
  function collectIsPressedAsState$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1873825817);
    sourceInformation($composer_0, 'C(collectIsPressedAsState$composable)84@3016L34,85@3076L504,85@3055L525:PressInteraction.kt#ywyzhk');
    if (isTraceInProgress()) {
      traceEventStart(-1873825817, $changed, -1, 'androidx.compose.foundation.interaction.collectIsPressedAsState$composable (PressInteraction.kt:83)');
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
    if (false ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.interaction.collectIsPressedAsState$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf$default(false, null, 2, null);
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
    var isPressed = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp1_remember$composable = $composer_0;
    var tmp2_remember$composable = 14 & $changed;
    var $composer_2 = tmp1_remember$composable;
    $composer_2.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_2, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_2;
    var tmp2_cache = !!($composer_2.changed_ga7h3f_k$(_this__u8e3s4) | $composer_2.changed_ga7h3f_k$(isPressed));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_6().Empty_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.foundation.interaction.collectIsPressedAsState$composable.<anonymous>' call
      tmp$ret$5 = collectIsPressedAsState$composable$slambda_0(_this__u8e3s4, isPressed, null);
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
    LaunchedEffect$composable(_this__u8e3s4, tmp$ret$9, $composer_0, 14 & $changed);
    var tmp0_1 = isPressed;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_1;
  }
  function Press(pressPosition) {
    this.pressPosition_1 = pressPosition;
    this.$stable_1 = 0;
  }
  Press.prototype.get_pressPosition_jdrfg7_k$ = function () {
    return this.pressPosition_1;
  };
  Press.$metadata$ = classMeta('Press', [PressInteraction]);
  function Release(press) {
    this.press_1 = press;
    this.$stable_1 = 0;
  }
  Release.prototype.get_press_ix1cey_k$ = function () {
    return this.press_1;
  };
  Release.$metadata$ = classMeta('Release', [PressInteraction]);
  function Cancel_0(press) {
    this.press_1 = press;
    this.$stable_1 = 0;
  }
  Cancel_0.prototype.get_press_ix1cey_k$ = function () {
    return this.press_1;
  };
  Cancel_0.$metadata$ = classMeta('Cancel', [PressInteraction]);
  function PressInteraction() {
  }
  PressInteraction.$metadata$ = interfaceMeta('PressInteraction', [Interaction]);
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_2.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_2.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function collectIsPressedAsState$composable$slambda$slambda($pressInteractions, $isPressed, resultContinuation) {
    this.$pressInteractions_1 = $pressInteractions;
    this.$isPressed_1 = $isPressed;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsPressedAsState$composable$slambda$slambda.prototype.invoke_ry6yte_k$ = function (interaction, $cont) {
    var tmp = this.create_xj5a0d_k$(interaction, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  collectIsPressedAsState$composable$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ry6yte_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsPressedAsState$composable$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Press) {
            this.$pressInteractions_1.add_1j60pz_k$(this.interaction_1);
          } else {
            if (tmp0_subject instanceof Release) {
              this.$pressInteractions_1.remove_8hbkc6_k$(this.interaction_1.press_1);
            } else {
              if (tmp0_subject instanceof Cancel_0) {
                this.$pressInteractions_1.remove_8hbkc6_k$(this.interaction_1.press_1);
              }
            }
          }
          this.$isPressed_1.set_value_rnwamw_k$(!this.$pressInteractions_1.isEmpty_y1axqb_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  collectIsPressedAsState$composable$slambda$slambda.prototype.create_xj5a0d_k$ = function (interaction, completion) {
    var i = new collectIsPressedAsState$composable$slambda$slambda(this.$pressInteractions_1, this.$isPressed_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  collectIsPressedAsState$composable$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_xj5a0d_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  collectIsPressedAsState$composable$slambda$slambda.$metadata$ = classMeta('collectIsPressedAsState$composable$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function collectIsPressedAsState$composable$slambda$slambda_0($pressInteractions, $isPressed, resultContinuation) {
    var i = new collectIsPressedAsState$composable$slambda$slambda($pressInteractions, $isPressed, resultContinuation);
    var l = function (interaction, $cont) {
      return i.invoke_ry6yte_k$(interaction, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsPressedAsState$composable$slambda($this_collectIsPressedAsState$composable, $isPressed, resultContinuation) {
    this.$this_collectIsPressedAsState$composable_1 = $this_collectIsPressedAsState$composable;
    this.$isPressed_1 = $isPressed;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsPressedAsState$composable$slambda.prototype.invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $cont) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  collectIsPressedAsState$composable$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsPressedAsState$composable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            var tmp_0 = this;
            tmp_0.pressInteractions0__1 = ArrayList_init_$Create$_0();
            this.state_1 = 1;
            var tmp_1 = this.$this_collectIsPressedAsState$composable_1.get_interactions_ql02qy_k$();
            var tmp_2 = collectIsPressedAsState$composable$slambda$slambda_0(this.pressInteractions0__1, this.$isPressed_1, null);
            suspendResult = tmp_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_2), this);
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
  collectIsPressedAsState$composable$slambda.prototype.create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new collectIsPressedAsState$composable$slambda(this.$this_collectIsPressedAsState$composable_1, this.$isPressed_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  collectIsPressedAsState$composable$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  collectIsPressedAsState$composable$slambda.$metadata$ = classMeta('collectIsPressedAsState$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function collectIsPressedAsState$composable$slambda_0($this_collectIsPressedAsState$composable, $isPressed, resultContinuation) {
    var i = new collectIsPressedAsState$composable$slambda($this_collectIsPressedAsState$composable, $isPressed, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function get_InterruptionSpec() {
    init_properties_LazyListItemPlacementAnimator_kt_1p6ej1();
    return InterruptionSpec;
  }
  var InterruptionSpec;
  var properties_initialized_LazyListItemPlacementAnimator_kt_g0i5bd;
  function init_properties_LazyListItemPlacementAnimator_kt_1p6ej1() {
    if (properties_initialized_LazyListItemPlacementAnimator_kt_g0i5bd) {
    } else {
      properties_initialized_LazyListItemPlacementAnimator_kt_g0i5bd = true;
      Spring_getInstance();
      InterruptionSpec = spring$default(0.0, 400.0, new IntOffset(get_VisibilityThreshold(Companion_getInstance_14())), 1, null);
    }
  }
  function get_InterruptionSpec_0() {
    init_properties_LazyGridItemPlacementAnimator_kt_3u379();
    return InterruptionSpec_0;
  }
  var InterruptionSpec_0;
  var properties_initialized_LazyGridItemPlacementAnimator_kt_ef5tzl;
  function init_properties_LazyGridItemPlacementAnimator_kt_3u379() {
    if (properties_initialized_LazyGridItemPlacementAnimator_kt_ef5tzl) {
    } else {
      properties_initialized_LazyGridItemPlacementAnimator_kt_ef5tzl = true;
      Spring_getInstance();
      InterruptionSpec_0 = spring$default(0.0, 400.0, new IntOffset(get_VisibilityThreshold(Companion_getInstance_14())), 1, null);
    }
  }
  function get_TargetDistance() {
    init_properties_LazyAnimateScroll_kt_tts8qu();
    return TargetDistance;
  }
  var TargetDistance;
  function get_BoundDistance() {
    init_properties_LazyAnimateScroll_kt_tts8qu();
    return BoundDistance;
  }
  var BoundDistance;
  var properties_initialized_LazyAnimateScroll_kt_ru8vti;
  function init_properties_LazyAnimateScroll_kt_tts8qu() {
    if (properties_initialized_LazyAnimateScroll_kt_ru8vti) {
    } else {
      properties_initialized_LazyAnimateScroll_kt_ru8vti = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(2500);
      TargetDistance = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(1500);
      BoundDistance = tmp$ret$0_0;
    }
  }
  function get_ModifierLocalPinnableParent() {
    init_properties_PinnableParent_kt_xtzhb1();
    return ModifierLocalPinnableParent;
  }
  var ModifierLocalPinnableParent;
  function PinnedItemsHandle() {
  }
  PinnedItemsHandle.$metadata$ = interfaceMeta('PinnedItemsHandle');
  function PinnableParent() {
  }
  PinnableParent.$metadata$ = interfaceMeta('PinnableParent');
  function ModifierLocalPinnableParent$lambda() {
    init_properties_PinnableParent_kt_xtzhb1();
    return null;
  }
  var properties_initialized_PinnableParent_kt_lffhbz;
  function init_properties_PinnableParent_kt_xtzhb1() {
    if (properties_initialized_PinnableParent_kt_lffhbz) {
    } else {
      properties_initialized_PinnableParent_kt_lffhbz = true;
      ModifierLocalPinnableParent = modifierLocalOf(ModifierLocalPinnableParent$lambda);
    }
  }
  function get_ModifierLocalBringIntoViewParent() {
    init_properties_BringIntoView_kt_pmw37h();
    return ModifierLocalBringIntoViewParent;
  }
  var ModifierLocalBringIntoViewParent;
  function BringIntoViewParent() {
  }
  BringIntoViewParent.$metadata$ = interfaceMeta('BringIntoViewParent');
  function _get_defaultParent__splqsm($this) {
    return $this.defaultParent_1;
  }
  function _set_localParent__vaq5yo($this, _set____db54di) {
    $this.localParent_1 = _set____db54di;
  }
  function _get_localParent__9fzpok($this) {
    return $this.localParent_1;
  }
  function _set_layoutCoordinates__ckqjyk_0($this, _set____db54di) {
    $this.layoutCoordinates_1 = _set____db54di;
  }
  function BringIntoViewChildModifier(defaultParent) {
    this.defaultParent_1 = defaultParent;
    this.localParent_1 = null;
    this.layoutCoordinates_1 = null;
  }
  BringIntoViewChildModifier.prototype.get_layoutCoordinates_d2f0vs_k$ = function () {
    var tmp0_safe_receiver = this.layoutCoordinates_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.relocation.BringIntoViewChildModifier.<get-layoutCoordinates>.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.get_isAttached_odsl1l_k$();
      if (tmp$ret$0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp$ret$1 = tmp_0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  BringIntoViewChildModifier.prototype.get_parent_hy4reb_k$ = function () {
    var tmp0_elvis_lhs = this.localParent_1;
    return tmp0_elvis_lhs == null ? this.defaultParent_1 : tmp0_elvis_lhs;
  };
  BringIntoViewChildModifier.prototype.onModifierLocalsUpdated_dk8grv_k$ = function (scope) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    this.localParent_1 = scope.get_current_og61yl_k$(get_ModifierLocalBringIntoViewParent());
    tmp$ret$0 = Unit_getInstance();
  };
  BringIntoViewChildModifier.prototype.onPlaced_6yqr4o_k$ = function (coordinates) {
    this.layoutCoordinates_1 = coordinates;
  };
  BringIntoViewChildModifier.$metadata$ = classMeta('BringIntoViewChildModifier', [ModifierLocalConsumer, OnPlacedModifier]);
  function ModifierLocalBringIntoViewParent$lambda() {
    init_properties_BringIntoView_kt_pmw37h();
    return null;
  }
  var properties_initialized_BringIntoView_kt_uq6g7t;
  function init_properties_BringIntoView_kt_pmw37h() {
    if (properties_initialized_BringIntoView_kt_uq6g7t) {
    } else {
      properties_initialized_BringIntoView_kt_uq6g7t = true;
      ModifierLocalBringIntoViewParent = modifierLocalOf(ModifierLocalBringIntoViewParent$lambda);
    }
  }
  function BringIntoViewRequester() {
  }
  BringIntoViewRequester.$metadata$ = interfaceMeta('BringIntoViewRequester');
  function funBringIntoViewRequester() {
    return new BringIntoViewRequesterImpl();
  }
  function bringIntoViewRequester(_this__u8e3s4, bringIntoViewRequester) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = bringIntoViewRequester$lambda(bringIntoViewRequester);
    } else {
      tmp = get_NoInspectorInfo();
    }
    tmp$ret$0 = tmp;
    var tmp_0 = tmp$ret$0;
    return composed$composable(_this__u8e3s4, tmp_0, bringIntoViewRequester$lambda_0(bringIntoViewRequester));
  }
  function $bringIntoViewCOROUTINE$23(_this__u8e3s4, rect, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.rect_1 = rect;
  }
  $bringIntoViewCOROUTINE$23.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 5;
            var tmp_0 = this;
            tmp_0.tmp0_forEach0__1 = this._this__u8e3s4__1.modifiers_1;
            this.size1__1 = this.tmp0_forEach0__1.size_1;
            if (this.size1__1 > 0) {
              this.i2__1 = 0;
              var tmp_1 = this;
              var tmp_2 = this.tmp0_forEach0__1.content_1;
              tmp_1.content3__1 = isArray(tmp_2) ? tmp_2 : THROW_CCE();
              this.state_1 = 1;
              continue $sm;
            } else {
              this.state_1 = 4;
              continue $sm;
            }

            break;
          case 1:
            var tmp_3 = this;
            tmp_3.tmp1__anonymous_4_yix0hg_1 = this.content3__1[this.i2__1];
            this.state_1 = 2;
            suspendResult = this.tmp1__anonymous_4_yix0hg_1.bringIntoView_1hpn7x_k$(this.rect_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0 = this.i2__1;
            this.i2__1 = tmp0 + 1 | 0;
            ;
            if (this.i2__1 < this.size1__1) {
              this.state_1 = 1;
              continue $sm;
            }

            this.state_1 = 3;
            continue $sm;
          case 3:
            this.state_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  $bringIntoViewCOROUTINE$23.$metadata$ = classMeta('$bringIntoViewCOROUTINE$23', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function BringIntoViewRequesterImpl() {
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'androidx.compose.runtime.collection.mutableVectorOf' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector' call
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp$ret$1 = new MutableVector(tmp$ret$0, 0);
    tmp$ret$2 = tmp$ret$1;
    tmp.modifiers_1 = tmp$ret$2;
  }
  BringIntoViewRequesterImpl.prototype.get_modifiers_mxb6zx_k$ = function () {
    return this.modifiers_1;
  };
  BringIntoViewRequesterImpl.prototype.bringIntoView_1hpn7x_k$ = function (rect, $cont) {
    var tmp = new $bringIntoViewCOROUTINE$23(this, rect, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  BringIntoViewRequesterImpl.$metadata$ = classMeta('BringIntoViewRequesterImpl', [BringIntoViewRequester]);
  function BringIntoViewRequesterModifier$bringIntoView$lambda($rect, this$0) {
    return function () {
      var tmp3_elvis_lhs = $rect;
      var tmp;
      if (tmp3_elvis_lhs == null) {
        var tmp0_safe_receiver = this$0.get_layoutCoordinates_d2f0vs_k$();
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_size_yscczt_k$();
        var tmp_0;
        var tmp_1 = tmp1_safe_receiver;
        if ((tmp_1 == null ? null : new IntSize_0(tmp_1)) == null) {
          tmp_0 = null;
        } else {
          tmp_0 = toSize(tmp1_safe_receiver);
        }
        var tmp2_safe_receiver = tmp_0;
        var tmp_2;
        var tmp_3 = tmp2_safe_receiver;
        if ((tmp_3 == null ? null : new Size(tmp_3)) == null) {
          tmp_2 = null;
        } else {
          tmp_2 = toRect(tmp2_safe_receiver);
        }
        tmp = tmp_2;
      } else {
        tmp = tmp3_elvis_lhs;
      }
      return tmp;
    };
  }
  function BringIntoViewRequesterModifier(defaultParent) {
    BringIntoViewChildModifier.call(this, defaultParent);
  }
  BringIntoViewRequesterModifier.prototype.bringIntoView_1hpn7x_k$ = function (rect, $cont) {
    var tmp = this.get_parent_hy4reb_k$();
    var tmp0_elvis_lhs = this.get_layoutCoordinates_d2f0vs_k$();
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var tmp_1 = tmp_0;
    return tmp.bringChildIntoView_uubi17_k$(tmp_1, BringIntoViewRequesterModifier$bringIntoView$lambda(rect, this), $cont);
  };
  BringIntoViewRequesterModifier.$metadata$ = classMeta('BringIntoViewRequesterModifier', undefined, undefined, undefined, undefined, BringIntoViewChildModifier.prototype);
  function bringIntoViewRequester$lambda($bringIntoViewRequester) {
    return function ($this$null) {
      $this$null.name_1 = 'bringIntoViewRequester';
      $this$null.properties_1.set_y753qn_k$('bringIntoViewRequester', $bringIntoViewRequester);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_5($bringIntoViewRequester, $modifier) {
    this.$bringIntoViewRequester_1 = $bringIntoViewRequester;
    this.$modifier_1 = $modifier;
  }
  _no_name_provided__qut3iv_5.prototype.dispose_3n44we_k$ = function () {
    // Inline function 'androidx.compose.foundation.relocation.bringIntoViewRequester.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_this = this.$bringIntoViewRequester_1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.minusAssign' call
    var tmp0_minusAssign = tmp0_this.modifiers_1;
    tmp0_minusAssign.remove_8hbkbr_k$(this.$modifier_1);
  };
  _no_name_provided__qut3iv_5.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function bringIntoViewRequester$lambda$lambda($bringIntoViewRequester, $modifier) {
    return function ($this$DisposableEffect) {
      var tmp0_this = $bringIntoViewRequester;
      var tmp0_plusAssign = tmp0_this.modifiers_1;
      tmp0_plusAssign.add_1j60qe_k$($modifier);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_5($bringIntoViewRequester, $modifier);
      return tmp$ret$0;
    };
  }
  function bringIntoViewRequester$lambda_0($bringIntoViewRequester) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(-992853993);
      sourceInformation($composer_0, 'C103@4541L36,104@4597L91,108@4761L180:BringIntoViewRequester.kt#exjx5q');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-992853993, $changed, -1, 'androidx.compose.foundation.relocation.bringIntoViewRequester.<anonymous> (BringIntoViewRequester.kt:102)');
        tmp = Unit_getInstance();
      }
      var defaultResponder = rememberDefaultBringIntoViewParent$composable($composer_0, 0);
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.changed_ga7h3f_k$(defaultResponder);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.relocation.bringIntoViewRequester.<anonymous>.<anonymous>' call
        tmp$ret$0 = new BringIntoViewRequesterModifier(defaultResponder);
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
      var modifier = tmp$ret$4;
      if ($bringIntoViewRequester instanceof BringIntoViewRequesterImpl) {
        DisposableEffect$composable($bringIntoViewRequester, bringIntoViewRequester$lambda$lambda($bringIntoViewRequester, modifier), $composer_0, 0);
      }
      var tmp0_0 = modifier;
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0_0;
    };
  }
  function CornerBasedShape(topStart, topEnd, bottomEnd, bottomStart) {
    this.topStart_1 = topStart;
    this.topEnd_1 = topEnd;
    this.bottomEnd_1 = bottomEnd;
    this.bottomStart_1 = bottomStart;
    this.$stable_1 = 0;
  }
  CornerBasedShape.prototype.get_topStart_n2fniu_k$ = function () {
    return this.topStart_1;
  };
  CornerBasedShape.prototype.get_topEnd_k1yfkf_k$ = function () {
    return this.topEnd_1;
  };
  CornerBasedShape.prototype.get_bottomEnd_m64yrd_k$ = function () {
    return this.bottomEnd_1;
  };
  CornerBasedShape.prototype.get_bottomStart_3n1j0u_k$ = function () {
    return this.bottomStart_1;
  };
  CornerBasedShape.prototype.createOutline_p92zi6_k$ = function (size, layoutDirection, density) {
    var topStart = this.topStart_1.toPx_m7y0r2_k$(size, density);
    var topEnd = this.topEnd_1.toPx_m7y0r2_k$(size, density);
    var bottomEnd = this.bottomEnd_1.toPx_m7y0r2_k$(size, density);
    var bottomStart = this.bottomStart_1.toPx_m7y0r2_k$(size, density);
    var minDimension = _Size___get_minDimension__impl__4iso0r(size);
    if (topStart + bottomStart > minDimension) {
      var scale = minDimension / (topStart + bottomStart);
      topStart = topStart * scale;
      bottomStart = bottomStart * scale;
    }
    if (topEnd + bottomEnd > minDimension) {
      var scale_0 = minDimension / (topEnd + bottomEnd);
      topEnd = topEnd * scale_0;
      bottomEnd = bottomEnd * scale_0;
    }
    // Inline function 'kotlin.require' call
    var tmp0_require = ((topStart >= 0.0 ? topEnd >= 0.0 : false) ? bottomEnd >= 0.0 : false) ? bottomStart >= 0.0 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.shape.CornerBasedShape.createOutline.<anonymous>' call
      tmp$ret$0 = "Corner size in Px can't be negative(topStart = " + topStart + ', topEnd = ' + topEnd + ', ' + ('bottomEnd = ' + bottomEnd + ', bottomStart = ' + bottomStart + ')!');
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.createOutline_awgnns_k$(size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection);
  };
  CornerBasedShape.prototype.copy$default_uy12l8_k$ = function (topStart, topEnd, bottomEnd, bottomStart, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      topStart = this.topStart_1;
    if (!(($mask0 & 2) === 0))
      topEnd = this.topEnd_1;
    if (!(($mask0 & 4) === 0))
      bottomEnd = this.bottomEnd_1;
    if (!(($mask0 & 8) === 0))
      bottomStart = this.bottomStart_1;
    return $handler == null ? this.copy_4mzu9h_k$(topStart, topEnd, bottomEnd, bottomStart) : $handler(topStart, topEnd, bottomEnd, bottomStart);
  };
  CornerBasedShape.prototype.copy_ymfmd5_k$ = function (all) {
    return this.copy_4mzu9h_k$(all, all, all, all);
  };
  CornerBasedShape.$metadata$ = classMeta('CornerBasedShape', [Shape]);
  function get_ZeroCornerSize() {
    init_properties_CornerSize_kt_dusi58();
    return ZeroCornerSize;
  }
  var ZeroCornerSize;
  function CornerSize() {
  }
  CornerSize.$metadata$ = interfaceMeta('CornerSize');
  function CornerSize_0(percent) {
    init_properties_CornerSize_kt_dusi58();
    return new PercentCornerSize(percent);
  }
  function _get_percent__ssgsk4($this) {
    return $this.percent_1;
  }
  function component1_0($this) {
    return $this.percent_1;
  }
  function PercentCornerSize(percent) {
    this.percent_1 = percent;
    if (this.percent_1 < 0 ? true : this.percent_1 > 100) {
      throw IllegalArgumentException_init_$Create$('The percent should be in the range of [0, 100]');
    }
  }
  PercentCornerSize.prototype.toPx_m7y0r2_k$ = function (shapeSize, density) {
    return _Size___get_minDimension__impl__4iso0r(shapeSize) * (this.percent_1 / 100.0);
  };
  PercentCornerSize.prototype.toString = function () {
    return 'CornerSize(size = ' + this.percent_1 + '%)';
  };
  PercentCornerSize.prototype.get_valueOverride_4rn9vw_k$ = function () {
    return '' + this.percent_1 + '%';
  };
  PercentCornerSize.prototype.copy_i912ft_k$ = function (percent) {
    return new PercentCornerSize(percent);
  };
  PercentCornerSize.prototype.copy$default_iojlsq_k$ = function (percent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      percent = this.percent_1;
    return this.copy_i912ft_k$(percent);
  };
  PercentCornerSize.prototype.hashCode = function () {
    return getNumberHashCode(this.percent_1);
  };
  PercentCornerSize.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PercentCornerSize))
      return false;
    var tmp0_other_with_cast = other instanceof PercentCornerSize ? other : THROW_CCE();
    if (!equals(this.percent_1, tmp0_other_with_cast.percent_1))
      return false;
    return true;
  };
  PercentCornerSize.$metadata$ = classMeta('PercentCornerSize', [CornerSize, InspectableValue]);
  function CornerSize_1(size) {
    init_properties_CornerSize_kt_dusi58();
    return new DpCornerSize(size);
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function component1_1($this) {
    return $this.size_1;
  }
  function DpCornerSize(size) {
    this.size_1 = size;
  }
  DpCornerSize.prototype.toPx_m7y0r2_k$ = function (shapeSize, density) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.shape.DpCornerSize.toPx.<anonymous>' call
    tmp$ret$0 = density.toPx_u0ojv5_k$(this.size_1);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  DpCornerSize.prototype.toString = function () {
    return 'CornerSize(size = ' + _Dp___get_value__impl__geb1vb(this.size_1) + '.dp)';
  };
  DpCornerSize.prototype.get_valueOverride_meim4x_k$ = function () {
    return this.size_1;
  };
  DpCornerSize.prototype.get_valueOverride_4rn9vw_k$ = function () {
    return new Dp(this.get_valueOverride_meim4x_k$());
  };
  DpCornerSize.prototype.copy_ptxaur_k$ = function (size) {
    return new DpCornerSize(size);
  };
  DpCornerSize.prototype.copy$default_xu01fx_k$ = function (size, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      size = this.size_1;
    return this.copy_ptxaur_k$(size);
  };
  DpCornerSize.prototype.hashCode = function () {
    return Dp__hashCode_impl_sxkrra(this.size_1);
  };
  DpCornerSize.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DpCornerSize))
      return false;
    var tmp0_other_with_cast = other instanceof DpCornerSize ? other : THROW_CCE();
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    return true;
  };
  DpCornerSize.$metadata$ = classMeta('DpCornerSize', [CornerSize, InspectableValue]);
  function ZeroCornerSize$1() {
  }
  ZeroCornerSize$1.prototype.toPx_m7y0r2_k$ = function (shapeSize, density) {
    return 0.0;
  };
  ZeroCornerSize$1.prototype.toString = function () {
    return 'ZeroCornerSize';
  };
  ZeroCornerSize$1.prototype.get_valueOverride_4rn9vw_k$ = function () {
    return 'ZeroCornerSize';
  };
  ZeroCornerSize$1.$metadata$ = classMeta(undefined, [CornerSize, InspectableValue]);
  var properties_initialized_CornerSize_kt_9yvmfc;
  function init_properties_CornerSize_kt_dusi58() {
    if (properties_initialized_CornerSize_kt_9yvmfc) {
    } else {
      properties_initialized_CornerSize_kt_9yvmfc = true;
      ZeroCornerSize = new ZeroCornerSize$1();
    }
  }
  function get_CircleShape() {
    init_properties_RoundedCornerShape_kt_hjucit();
    return CircleShape;
  }
  var CircleShape;
  function RoundedCornerShape(topStart, topEnd, bottomEnd, bottomStart) {
    CornerBasedShape.call(this, topStart, topEnd, bottomEnd, bottomStart);
    this.$stable_2 = 0;
  }
  RoundedCornerShape.prototype.createOutline_awgnns_k$ = function (size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection) {
    var tmp;
    if (topStart + topEnd + bottomEnd + bottomStart === 0.0) {
      tmp = new Rectangle(toRect(size));
    } else {
      var tmp_0 = toRect(size);
      var tmp_1 = layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? topStart : topEnd;
      var tmp_2 = CornerRadius$default(tmp_1, 0.0, 2, null);
      var tmp_3 = layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? topEnd : topStart;
      var tmp_4 = CornerRadius$default(tmp_3, 0.0, 2, null);
      var tmp_5 = layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? bottomEnd : bottomStart;
      var tmp_6 = CornerRadius$default(tmp_5, 0.0, 2, null);
      var tmp_7 = layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? bottomStart : bottomEnd;
      tmp = new Rounded(RoundRect_0(tmp_0, tmp_2, tmp_4, tmp_6, CornerRadius$default(tmp_7, 0.0, 2, null)));
    }
    return tmp;
  };
  RoundedCornerShape.prototype.copy_4mzu9h_k$ = function (topStart, topEnd, bottomEnd, bottomStart) {
    return new RoundedCornerShape(topStart, topEnd, bottomEnd, bottomStart);
  };
  RoundedCornerShape.prototype.toString = function () {
    return 'RoundedCornerShape(topStart = ' + this.topStart_1 + ', topEnd = ' + this.topEnd_1 + ', bottomEnd = ' + ('' + this.bottomEnd_1 + ', bottomStart = ' + this.bottomStart_1 + ')');
  };
  RoundedCornerShape.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundedCornerShape))
      return false;
    if (!equals(this.topStart_1, other.topStart_1))
      return false;
    if (!equals(this.topEnd_1, other.topEnd_1))
      return false;
    if (!equals(this.bottomEnd_1, other.bottomEnd_1))
      return false;
    if (!equals(this.bottomStart_1, other.bottomStart_1))
      return false;
    return true;
  };
  RoundedCornerShape.prototype.hashCode = function () {
    var result = hashCode(this.topStart_1);
    result = imul(31, result) + hashCode(this.topEnd_1) | 0;
    result = imul(31, result) + hashCode(this.bottomEnd_1) | 0;
    result = imul(31, result) + hashCode(this.bottomStart_1) | 0;
    return result;
  };
  RoundedCornerShape.$metadata$ = classMeta('RoundedCornerShape', undefined, undefined, undefined, undefined, CornerBasedShape.prototype);
  function RoundedCornerShape_0(percent) {
    init_properties_RoundedCornerShape_kt_hjucit();
    return RoundedCornerShape_1(CornerSize_0(percent));
  }
  function RoundedCornerShape_1(corner) {
    init_properties_RoundedCornerShape_kt_hjucit();
    return new RoundedCornerShape(corner, corner, corner, corner);
  }
  function RoundedCornerShape_2(size) {
    init_properties_RoundedCornerShape_kt_hjucit();
    return RoundedCornerShape_1(CornerSize_1(size));
  }
  var properties_initialized_RoundedCornerShape_kt_5mose9;
  function init_properties_RoundedCornerShape_kt_hjucit() {
    if (properties_initialized_RoundedCornerShape_kt_5mose9) {
    } else {
      properties_initialized_RoundedCornerShape_kt_5mose9 = true;
      CircleShape = RoundedCornerShape_0(50);
    }
  }
  function BasicText$composable(text, modifier, style, onTextLayout, overflow, softWrap, maxLines, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var style_0 = {_v: style};
    var onTextLayout_0 = {_v: onTextLayout};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1319034766);
    sourceInformation($composer_0, 'C(BasicText$composable)P(6,1,5,2,3:c#ui.text.style.TextOverflow,4)62@3170L2,73@3673L7,74@3712L7,75@3773L7,95@4758L473,132@5929L69:BasicText.kt#423gt5');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(style_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.changed_ga7h3f_k$(onTextLayout_0._v) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_s0r703_k$(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.value_1)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(softWrap_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_s0r703_k$(maxLines_0._v) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance_7();
        }
        if (!(($default & 4) === 0)) {
          style_0._v = Companion_getInstance_15().Default_1;
        }
        if (!(($default & 8) === 0)) {
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
          if (false ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.foundation.text.BasicText$composable.<anonymous>' call
            tmp$ret$0 = BasicText$composable$lambda_0;
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
          onTextLayout_0._v = tmp$ret$4;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          overflow_0._v = new TextOverflow(Companion_getInstance_16().Clip_1);
        }
        if (!(($default & 32) === 0)) {
          softWrap_0._v = true;
        }
        if (!(($default & 64) === 0)) {
          maxLines_0._v = IntCompanionObject_getInstance().MAX_VALUE_1;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(-1319034766, $changed, -1, 'androidx.compose.foundation.text.BasicText$composable (BasicText.kt:58)');
      }
      // Inline function 'kotlin.require' call
      var tmp1_require = maxLines_0._v > 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$5;
        // Inline function 'androidx.compose.foundation.text.BasicText$composable.<anonymous>' call
        var tmp0_return = 'maxLines should be greater than 0';
        tmp$ret$5 = tmp0_return;
        var message = tmp$ret$5;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl = get_LocalSelectionRegistrar();
      var tmp3_$get_current$$composable_fm67ua = $composer_0;
      var $composer_2 = tmp3_$get_current$$composable_fm67ua;
      sourceInformationMarkerStart($composer_2, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_2.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_2);
      tmp$ret$6 = tmp0_0;
      var selectionRegistrar = tmp$ret$6;
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalDensity();
      var tmp5_$get_current$$composable_el8hro = $composer_0;
      var $composer_3 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_3.consume_93tbl1_k$(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$7 = tmp0_1;
      var density = tmp$ret$7;
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp6_$get_current$$composable_e2rmqd = get_LocalFontFamilyResolver();
      var tmp7_$get_current$$composable_dkarp2 = $composer_0;
      var $composer_4 = tmp7_$get_current$$composable_dkarp2;
      sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_2 = $composer_4.consume_93tbl1_k$(tmp6_$get_current$$composable_e2rmqd);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$8 = tmp0_2;
      var fontFamilyResolver = tmp$ret$8;
      $composer_0.startReplaceableGroup_rp6air_k$(1388300480);
      sourceInformation($composer_0, '90@4579L150');
      var tmp_1;
      if (selectionRegistrar == null) {
        Companion_getInstance_26();
        tmp_1 = new Long(0, 0);
      } else {
        var tmp_2 = selectionIdSaver(selectionRegistrar);
        tmp_1 = rememberSaveable$composable([text, selectionRegistrar], tmp_2, null, BasicText$composable$lambda_1(selectionRegistrar), $composer_0, 0, 4);
      }
      var tmp0_group = tmp_1;
      $composer_0.endReplaceableGroup_er37p7_k$();
      var selectableId = tmp0_group;
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp8_remember$composable = $composer_0;
      var $composer_5 = tmp8_remember$composable;
      $composer_5.startReplaceableGroup_rp6air_k$(547886695);
      sourceInformation($composer_5, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_5;
      var tmp$ret$11;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (false ? true : tmp0_let_0 === Companion_getInstance_6().Empty_1) {
        var tmp$ret$9;
        // Inline function 'androidx.compose.foundation.text.BasicText$composable.<anonymous>' call
        var tmp0_text = AnnotatedString_init_$Create$(text, null, null, 6, null);
        var tmp_4 = style_0._v;
        var tmp_5 = maxLines_0._v;
        var tmp_6 = softWrap_0._v;
        var tmp_7 = overflow_0._v;
        var tmp_8 = tmp_7 == null ? null : tmp_7.value_1;
        tmp$ret$9 = new TextController(new TextState(TextDelegate_init_$Create$(tmp0_text, tmp_4, tmp_5, tmp_6, tmp_8, density, fontFamilyResolver, null, 128, null), selectableId));
        var value_0 = tmp$ret$9;
        tmp1_cache_0.updateRememberedValue_l1colo_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      tmp$ret$10 = tmp_3;
      tmp$ret$11 = tmp$ret$10;
      var tmp_9 = tmp$ret$11;
      tmp$ret$12 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      var tmp0_3 = tmp$ret$12;
      $composer_5.endReplaceableGroup_er37p7_k$();
      tmp$ret$13 = tmp0_3;
      var controller = tmp$ret$13;
      var state = controller.state_1;
      if (!$composer_0.get_inserting_25mlsw_k$()) {
        var tmp0_current = state.textDelegate_1;
        controller.setTextDelegate_gbukbh_k$(updateTextDelegate(tmp0_current, text, style_0._v, density, fontFamilyResolver, softWrap_0._v, overflow_0._v.value_1, maxLines_0._v));
      }
      state.onTextLayout_1 = onTextLayout_0._v;
      controller.update_mq7n96_k$(selectionRegistrar);
      $composer_0.startReplaceableGroup_rp6air_k$(1388301797);
      sourceInformation($composer_0, '129@5894L7');
      if (!(selectionRegistrar == null)) {
        var tmp_10 = state;
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp9_$get_current$$composable_cjd1mg = get_LocalTextSelectionColors();
        var tmp10_$get_current$$composable_orpap8 = $composer_0;
        var $composer_6 = tmp10_$get_current$$composable_orpap8;
        sourceInformationMarkerStart($composer_6, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_4 = $composer_6.consume_93tbl1_k$(tmp9_$get_current$$composable_cjd1mg);
        sourceInformationMarkerEnd($composer_6);
        tmp$ret$14 = tmp0_4;
        tmp_10.selectionBackgroundColor_1 = tmp$ret$14.backgroundColor_1;
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = modifier_0._v.then_5qw5wu_k$(controller.get_modifiers_mxb6zx_k$());
      var tmp12_Layout$composable = controller.measurePolicy_1;
      var tmp13_Layout$composable = $composer_0;
      var modifier_1 = tmp11_Layout$composable;
      var $composer_7 = tmp13_Layout$composable;
      $composer_7.startReplaceableGroup_rp6air_k$(310513410);
      sourceInformation($composer_7, 'C(Layout$composable)P(1)120@4589L7,121@4644L7,122@4703L7,124@4776L439:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_7();
      var tmp$ret$15;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_7;
      var $composer_8 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_8, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_5 = $composer_8.consume_93tbl1_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_8);
      tmp$ret$15 = tmp0_5;
      var density_0 = tmp$ret$15;
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl_0 = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua_0 = $composer_7;
      var $composer_9 = tmp3_$get_current$$composable_fm67ua_0;
      sourceInformationMarkerStart($composer_9, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_6 = $composer_9.consume_93tbl1_k$(tmp2_$get_current$$composable_g4n2vl_0);
      sourceInformationMarkerEnd($composer_9);
      tmp$ret$16 = tmp0_6;
      var layoutDirection = tmp$ret$16;
      var tmp$ret$17;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz_0 = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro_0 = $composer_7;
      var $composer_10 = tmp5_$get_current$$composable_el8hro_0;
      sourceInformationMarkerStart($composer_10, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_7 = $composer_10.consume_93tbl1_k$(tmp4_$get_current$$composable_f3pcsz_0);
      sourceInformationMarkerEnd($composer_10);
      tmp$ret$17 = tmp0_7;
      var viewConfiguration = tmp$ret$17;
      var materialized = materialize($composer_7, modifier_1);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_17().Constructor_1;
      var tmp7_ReusableComposeNode$composable = $composer_7;
      var $composer_11 = tmp7_ReusableComposeNode$composable;
      $composer_11.startReplaceableGroup_rp6air_k$(-1096955905);
      sourceInformation($composer_11, 'C(ReusableComposeNode$composable):Composables.kt#9igjgp');
      var tmp_11 = $composer_11.get_applier_bupu8u_k$();
      if (!isInterface(tmp_11, Applier)) {
        invalidApplier();
      }
      $composer_11.startReusableNode_jk07k2_k$();
      if ($composer_11.get_inserting_25mlsw_k$()) {
        var tmp_12 = $composer_11;
        tmp_12.createNode_13g769_k$(BasicText$composable$lambda_2(tmp6_ReusableComposeNode$composable));
      } else {
        $composer_11.useNode_inlzo8_k$();
      }
      $composer_11.disableReusing_y35tew_k$();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp8__anonymous__65w033 = _Updater___init__impl__rbfxm8($composer_11);
      Updater__set_impl_v7kwss(tmp8__anonymous__65w033, tmp12_Layout$composable, Companion_getInstance_17().SetMeasurePolicy_1);
      Updater__set_impl_v7kwss(tmp8__anonymous__65w033, density_0, Companion_getInstance_17().SetDensity_1);
      Updater__set_impl_v7kwss(tmp8__anonymous__65w033, layoutDirection, Companion_getInstance_17().SetLayoutDirection_1);
      Updater__set_impl_v7kwss(tmp8__anonymous__65w033, viewConfiguration, Companion_getInstance_17().SetViewConfiguration_1);
      Updater__set_impl_v7kwss(tmp8__anonymous__65w033, materialized, Companion_getInstance_17().SetModifier_1);
      $composer_11.enableReusing_6k309v_k$();
      $composer_11.endNode_3mkr10_k$();
      $composer_11.endReplaceableGroup_er37p7_k$();
      $composer_7.endReplaceableGroup_er37p7_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.updateScope_xhrf9y_k$(BasicText$composable$lambda$ref(text, modifier_0, style_0, onTextLayout_0, overflow_0, softWrap_0, maxLines_0, $changed, $default));
    }
  }
  function selectionIdSaver(selectionRegistrar) {
    var tmp = selectionIdSaver$lambda(selectionRegistrar);
    return Saver(tmp, selectionIdSaver$lambda_0);
  }
  function BasicText$composable$lambda($text, $modifier, $style, $onTextLayout, $overflow, $softWrap, $maxLines, $$changed, $$default, $composer, $force) {
    return BasicText$composable($text, $modifier._v, $style._v, $onTextLayout._v, $overflow._v.value_1, $softWrap._v, $maxLines._v, $composer, $$changed | 1, $$default);
  }
  function BasicText$composable$lambda_0(it) {
    return Unit_getInstance();
  }
  function BasicText$composable$lambda_1($selectionRegistrar) {
    return function () {
      return $selectionRegistrar.nextSelectableId_50rfx8_k$();
    };
  }
  function BasicText$composable$lambda_2($tmp6_ReusableComposeNode$composable) {
    return function () {
      return $tmp6_ReusableComposeNode$composable();
    };
  }
  function BasicText$composable$lambda$ref($text, $modifier, $style, $onTextLayout, $overflow, $softWrap, $maxLines, $$changed, $$default) {
    return function (p0, p1) {
      BasicText$composable$lambda($text, $modifier, $style, $onTextLayout, $overflow, $softWrap, $maxLines, $$changed, $$default, p0, p1);
      return Unit_getInstance();
    };
  }
  function selectionIdSaver$lambda($selectionRegistrar) {
    return function ($this$Saver, it) {
      return hasSelection($selectionRegistrar, it) ? it : null;
    };
  }
  function selectionIdSaver$lambda_0(it) {
    return it;
  }
  function get_EmptyInlineContent() {
    init_properties_CoreText_kt_u66fde();
    return EmptyInlineContent;
  }
  var EmptyInlineContent;
  function TextController$measurePolicy$o$measure$lambda($placeables) {
    return function ($this$layout) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $placeables.get_size_woubt6_k$() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $placeables.get_fkrdnv_k$(index);
          // Inline function 'androidx.compose.foundation.text.<no name provided>.measure.<anonymous>.<anonymous>' call
          var placeable = item.component1_7eebsc_k$();
          var position = item.component2_7eebsb_k$().packedValue_1;
          $this$layout.place$default_i08ls_k$(placeable, position, 0.0, 2, null);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _set_selectionRegistrar__8o1rli($this, _set____db54di) {
    $this.selectionRegistrar_1 = _set____db54di;
  }
  function _get_selectionRegistrar__p9tjiu($this) {
    return $this.selectionRegistrar_1;
  }
  function outOfBoundary($this, start, end) {
    var tmp0_safe_receiver = $this.state_1.layoutResult_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var lastOffset = tmp0_safe_receiver.layoutInput_1.text_1.text_1.length;
      var rawStartOffset = tmp0_safe_receiver.getOffsetForPosition_f04xcw_k$(start);
      var rawEndOffset = tmp0_safe_receiver.getOffsetForPosition_f04xcw_k$(end);
      return (rawStartOffset >= (lastOffset - 1 | 0) ? rawEndOffset >= (lastOffset - 1 | 0) : false) ? true : rawStartOffset < 0 ? rawEndOffset < 0 : false;
    }
    return false;
  }
  function drawTextAndSelectionBehind(_this__u8e3s4, $this) {
    var tmp = graphicsLayer$default(_this__u8e3s4, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, null, null, false, null, null, null, 65535, null);
    return drawBehind(tmp, TextController$drawTextAndSelectionBehind$lambda($this));
  }
  function _get_coreModifiers__ebdw6k($this) {
    return $this.coreModifiers_1;
  }
  function _set_semanticsModifier__i9084f($this, _set____db54di) {
    $this.semanticsModifier_1 = _set____db54di;
  }
  function createSemanticsModifierFor($this, text) {
    var tmp = Companion_getInstance_7();
    return semantics$default(tmp, false, TextController$createSemanticsModifierFor$lambda(text, $this), 1, null);
  }
  function _set_selectionModifiers__bn8ji1($this, _set____db54di) {
    $this.selectionModifiers_1 = _set____db54di;
  }
  function _get_selectionModifiers__pg07cr($this) {
    return $this.selectionModifiers_1;
  }
  function TextController$update$1(this$0, $selectionRegistrar) {
    this.this$0__1 = this$0;
    this.$selectionRegistrar_1 = $selectionRegistrar;
    this.lastPosition_1 = Companion_getInstance_4().Zero_1;
    this.dragTotalDistance_1 = Companion_getInstance_4().Zero_1;
  }
  TextController$update$1.prototype.set_lastPosition_c0m3m_k$ = function (_set____db54di) {
    this.lastPosition_1 = _set____db54di;
  };
  TextController$update$1.prototype.get_lastPosition_qh55to_k$ = function () {
    return this.lastPosition_1;
  };
  TextController$update$1.prototype.set_dragTotalDistance_9d9fe6_k$ = function (_set____db54di) {
    this.dragTotalDistance_1 = _set____db54di;
  };
  TextController$update$1.prototype.get_dragTotalDistance_e4qjdc_k$ = function () {
    return this.dragTotalDistance_1;
  };
  TextController$update$1.prototype.onDown_ofe487_k$ = function (point) {
  };
  TextController$update$1.prototype.onUp_30x6d3_k$ = function () {
  };
  TextController$update$1.prototype.onStart_b65n5j_k$ = function (startPoint) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return Unit_getInstance();
      if (outOfBoundary(this.this$0__1, startPoint, startPoint)) {
        this.$selectionRegistrar_1.notifySelectionUpdateSelectAll_uyvpea_k$(this.this$0__1.state_1.selectableId_1);
      } else {
        this.$selectionRegistrar_1.notifySelectionUpdateStart_2s99iw_k$(tmp0_safe_receiver, startPoint, Companion_getInstance_25().Word_1);
      }
      this.lastPosition_1 = startPoint;
      tmp$ret$0 = Unit_getInstance();
    }
    if (!hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1))
      return Unit_getInstance();
    this.dragTotalDistance_1 = Companion_getInstance_4().Zero_1;
  };
  TextController$update$1.prototype.onDrag_jolxfr_k$ = function (delta) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return Unit_getInstance();
      if (!hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1))
        return Unit_getInstance();
      var tmp0_this = this;
      tmp0_this.dragTotalDistance_1 = Offset__plus_impl_c78cg0(tmp0_this.dragTotalDistance_1, delta);
      var newPosition = Offset__plus_impl_c78cg0(this.lastPosition_1, this.dragTotalDistance_1);
      var tmp;
      if (!outOfBoundary(this.this$0__1, this.lastPosition_1, newPosition)) {
        var tmp1_$this = this.$selectionRegistrar_1;
        var tmp2_previousPosition = this.lastPosition_1;
        var tmp3_adjustment = Companion_getInstance_25().CharacterWithWordAccelerate_1;
        var consumed = tmp1_$this.notifySelectionUpdate_xy1nj0_k$(tmp0_safe_receiver, newPosition, tmp2_previousPosition, false, tmp3_adjustment);
        var tmp_0;
        if (consumed === true) {
          this.lastPosition_1 = newPosition;
          this.dragTotalDistance_1 = Companion_getInstance_4().Zero_1;
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      tmp$ret$0 = tmp;
    }
  };
  TextController$update$1.prototype.onStop_aip7ow_k$ = function () {
    if (hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1)) {
      this.$selectionRegistrar_1.notifySelectionUpdateEnd_v1kl4u_k$();
    }
  };
  TextController$update$1.prototype.onCancel_q8fje0_k$ = function () {
    if (hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1)) {
      this.$selectionRegistrar_1.notifySelectionUpdateEnd_v1kl4u_k$();
    }
  };
  TextController$update$1.$metadata$ = classMeta(undefined, [TextDragObserver]);
  function TextController$update$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  TextController$update$slambda.prototype.invoke_dycxzz_k$ = function ($this$pointerInput, $cont) {
    var tmp = this.create_9k90ga_k$($this$pointerInput, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  TextController$update$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  TextController$update$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = detectDragGesturesAfterLongPressWithObserver(this.$this$pointerInput_1, this.this$0__1.get_longPressDragObserver_iwhgs8_k$(), this);
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
  TextController$update$slambda.prototype.create_9k90ga_k$ = function ($this$pointerInput, completion) {
    var i = new TextController$update$slambda(this.this$0__1, completion);
    i.$this$pointerInput_1 = $this$pointerInput;
    return i;
  };
  TextController$update$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  TextController$update$slambda.$metadata$ = classMeta('TextController$update$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function TextController$update$slambda_0(this$0, resultContinuation) {
    var i = new TextController$update$slambda(this$0, resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.invoke_dycxzz_k$($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function TextController$update$mouseSelectionObserver$1(this$0, $selectionRegistrar) {
    this.this$0__1 = this$0;
    this.$selectionRegistrar_1 = $selectionRegistrar;
    this.lastPosition_1 = Companion_getInstance_4().Zero_1;
  }
  TextController$update$mouseSelectionObserver$1.prototype.set_lastPosition_c0m3m_k$ = function (_set____db54di) {
    this.lastPosition_1 = _set____db54di;
  };
  TextController$update$mouseSelectionObserver$1.prototype.get_lastPosition_qh55to_k$ = function () {
    return this.lastPosition_1;
  };
  TextController$update$mouseSelectionObserver$1.prototype.onExtend_dx8a28_k$ = function (downPosition) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return false;
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var consumed = this.$selectionRegistrar_1.notifySelectionUpdate_xy1nj0_k$(tmp0_safe_receiver, downPosition, this.lastPosition_1, false, Companion_getInstance_25().None_1);
      var tmp;
      if (consumed) {
        this.lastPosition_1 = downPosition;
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      return hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1);
    }
    return false;
  };
  TextController$update$mouseSelectionObserver$1.prototype.onExtendDrag_m0cr7o_k$ = function (dragPosition) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return false;
      if (!hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1))
        return false;
      var consumed = this.$selectionRegistrar_1.notifySelectionUpdate_xy1nj0_k$(tmp0_safe_receiver, dragPosition, this.lastPosition_1, false, Companion_getInstance_25().None_1);
      var tmp;
      if (consumed) {
        this.lastPosition_1 = dragPosition;
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
    }
    return true;
  };
  TextController$update$mouseSelectionObserver$1.prototype.onStart_i02yuj_k$ = function (downPosition, adjustment) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return false;
      this.$selectionRegistrar_1.notifySelectionUpdateStart_2s99iw_k$(tmp0_safe_receiver, downPosition, adjustment);
      this.lastPosition_1 = downPosition;
      return hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1);
    }
    return false;
  };
  TextController$update$mouseSelectionObserver$1.prototype.onDrag_4lf411_k$ = function (dragPosition, adjustment) {
    var tmp0_safe_receiver = this.this$0__1.state_1.layoutCoordinates_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return false;
      if (!hasSelection(this.$selectionRegistrar_1, this.this$0__1.state_1.selectableId_1))
        return false;
      var tmp0_$this = this.$selectionRegistrar_1;
      var tmp1_previousPosition = this.lastPosition_1;
      var consumed = tmp0_$this.notifySelectionUpdate_xy1nj0_k$(tmp0_safe_receiver, dragPosition, tmp1_previousPosition, false, adjustment);
      var tmp;
      if (consumed === true) {
        this.lastPosition_1 = dragPosition;
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
    }
    return true;
  };
  TextController$update$mouseSelectionObserver$1.$metadata$ = classMeta(undefined, [MouseSelectionObserver]);
  function invoke$lambda_6($currentMouseSelectionObserver$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('currentMouseSelectionObserver', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $currentMouseSelectionObserver$delegate.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function TextController$update$lambda$slambda($currentMouseSelectionObserver$delegate, resultContinuation) {
    this.$currentMouseSelectionObserver$delegate_1 = $currentMouseSelectionObserver$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  TextController$update$lambda$slambda.prototype.invoke_dycxzz_k$ = function ($this$pointerInput, $cont) {
    var tmp = this.create_9k90ga_k$($this$pointerInput, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  TextController$update$lambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  TextController$update$lambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = mouseSelectionDetector(this.$this$pointerInput_1, invoke$lambda_6(this.$currentMouseSelectionObserver$delegate_1), this);
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
  TextController$update$lambda$slambda.prototype.create_9k90ga_k$ = function ($this$pointerInput, completion) {
    var i = new TextController$update$lambda$slambda(this.$currentMouseSelectionObserver$delegate_1, completion);
    i.$this$pointerInput_1 = $this$pointerInput;
    return i;
  };
  TextController$update$lambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  TextController$update$lambda$slambda.$metadata$ = classMeta('TextController$update$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function TextController$update$lambda$slambda_0($currentMouseSelectionObserver$delegate, resultContinuation) {
    var i = new TextController$update$lambda$slambda($currentMouseSelectionObserver$delegate, resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.invoke_dycxzz_k$($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function TextController$update$lambda($mouseSelectionObserver) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(-1008655751);
      sourceInformation($composer_0, 'C284@13257L44,285@13341L101:CoreText.kt#423gt5');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1008655751, $changed, -1, 'androidx.compose.foundation.text.TextController.update.<anonymous> (CoreText.kt:283)');
        tmp = Unit_getInstance();
      }
      var currentMouseSelectionObserver$delegate = rememberUpdatedState$composable($mouseSelectionObserver, $composer_0, 8);
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.changed_ga7h3f_k$(currentMouseSelectionObserver$delegate);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.text.TextController.update.<anonymous>.<anonymous>' call
        tmp$ret$0 = TextController$update$lambda$slambda_0(currentMouseSelectionObserver$delegate, null);
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
      var tmp0_0 = pointerInput_0($this$composed, Unit_getInstance(), tmp$ret$4);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0_0;
    };
  }
  function TextController$measurePolicy$1(this$0) {
    this.this$0__1 = this$0;
  }
  TextController$measurePolicy$1.prototype.measure_i7pm3b_k$ = function (_this__u8e3s4, measurables, constraints) {
    var prevLayout = this.this$0__1.state_1.layoutResult_1;
    var layoutResult = this.this$0__1.state_1.textDelegate_1.layout_k0cayh_k$(constraints, _this__u8e3s4.get_layoutDirection_7e37v0_k$(), prevLayout);
    if (!equals(prevLayout, layoutResult)) {
      this.this$0__1.state_1.onTextLayout_1(layoutResult);
      var tmp0_safe_receiver = prevLayout;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp;
        if (!tmp0_safe_receiver.layoutInput_1.text_1.equals(layoutResult.layoutInput_1.text_1)) {
          var tmp0_safe_receiver_0 = this.this$0__1.selectionRegistrar_1;
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            tmp0_safe_receiver_0.notifySelectableChange_sw1lw8_k$(this.this$0__1.state_1.selectableId_1);
          }
          tmp = Unit_getInstance();
        }
        tmp$ret$0 = tmp;
      }
    }
    this.this$0__1.state_1.set_layoutResult_w8faq5_k$(layoutResult);
    // Inline function 'kotlin.check' call
    var tmp0_check = measurables.get_size_woubt6_k$() >= layoutResult.placeholderRects_1.get_size_woubt6_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$1;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$1 = 'Check failed.';
      var message = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$10;
    // Inline function 'androidx.compose.foundation.fastMapIndexedNotNull' call
    var tmp1_fastMapIndexedNotNull = layoutResult.placeholderRects_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(tmp1_fastMapIndexedNotNull.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp1_fastMapIndexedNotNull.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp1_fastMapIndexedNotNull.get_fkrdnv_k$(index);
        // Inline function 'androidx.compose.foundation.fastMapIndexedNotNull.<anonymous>' call
        var tmp$ret$8;
        // Inline function 'androidx.compose.foundation.text.<no name provided>.measure.<anonymous>' call
        var tmp0_safe_receiver_1 = item;
        var tmp_0;
        if (tmp0_safe_receiver_1 == null) {
          tmp_0 = null;
        } else {
          var tmp$ret$7;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$6;
          // Inline function 'androidx.compose.foundation.text.<no name provided>.measure.<anonymous>.<anonymous>' call
          var tmp_1 = measurables.get_fkrdnv_k$(index);
          var tmp$ret$2;
          // Inline function 'kotlin.math.floor' call
          var tmp0_floor = tmp0_safe_receiver_1.get_width_j0q4yl_k$();
          tmp$ret$2 = Math.floor(tmp0_floor);
          var tmp_2 = numberToInt(tmp$ret$2);
          var tmp$ret$3;
          // Inline function 'kotlin.math.floor' call
          var tmp1_floor = tmp0_safe_receiver_1.get_height_e7t92o_k$();
          tmp$ret$3 = Math.floor(tmp1_floor);
          var tmp_3 = tmp_1.measure_ikak0q_k$(Constraints$default(0, tmp_2, 0, numberToInt(tmp$ret$3), 5, null));
          var tmp$ret$4;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp2_roundToInt = tmp0_safe_receiver_1.left_1;
          tmp$ret$4 = roundToInt(tmp2_roundToInt);
          var tmp_4 = tmp$ret$4;
          var tmp$ret$5;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp3_roundToInt = tmp0_safe_receiver_1.top_1;
          tmp$ret$5 = roundToInt(tmp3_roundToInt);
          tmp$ret$6 = new Pair(tmp_3, new IntOffset(IntOffset_0(tmp_4, tmp$ret$5)));
          tmp$ret$7 = tmp$ret$6;
          tmp_0 = tmp$ret$7;
        }
        tmp$ret$8 = tmp_0;
        var tmp0_safe_receiver_2 = tmp$ret$8;
        if (tmp0_safe_receiver_2 == null)
          null;
        else {
          var tmp$ret$9;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          target.add_1j60pz_k$(tmp0_safe_receiver_2);
          tmp$ret$9 = Unit_getInstance();
        }
      }
       while (inductionVariable <= last);
    tmp$ret$10 = target;
    var placeables = tmp$ret$10;
    var tmp_5 = _IntSize___get_width__impl__d9yl4o(layoutResult.size_1);
    var tmp_6 = _IntSize___get_height__impl__prv63b(layoutResult.size_1);
    var tmp_7 = get_FirstBaseline();
    var tmp$ret$11;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp2_roundToInt_0 = layoutResult.firstBaseline_1;
    tmp$ret$11 = roundToInt(tmp2_roundToInt_0);
    var tmp_8 = to(tmp_7, tmp$ret$11);
    var tmp_9 = get_LastBaseline();
    var tmp$ret$12;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp3_roundToInt_0 = layoutResult.lastBaseline_1;
    tmp$ret$12 = roundToInt(tmp3_roundToInt_0);
    var tmp_10 = mapOf([tmp_8, to(tmp_9, tmp$ret$12)]);
    return _this__u8e3s4.layout_na8ejh_k$(tmp_5, tmp_6, tmp_10, TextController$measurePolicy$o$measure$lambda(placeables));
  };
  TextController$measurePolicy$1.prototype.minIntrinsicWidth_h4fdo9_k$ = function (_this__u8e3s4, measurables, height) {
    this.this$0__1.state_1.textDelegate_1.layoutIntrinsics_4irjyy_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
    return this.this$0__1.state_1.textDelegate_1.get_minIntrinsicWidth_lmc1rq_k$();
  };
  TextController$measurePolicy$1.prototype.minIntrinsicHeight_n7gxym_k$ = function (_this__u8e3s4, measurables, width) {
    var tmp = this.this$0__1.state_1.textDelegate_1;
    Companion_getInstance_18();
    var tmp_0 = Constraints(0, width, 0, 2147483647);
    var tmp_1 = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
    return _IntSize___get_height__impl__prv63b(tmp.layout$default_3ijkau_k$(tmp_0, tmp_1, null, 4, null).size_1);
  };
  TextController$measurePolicy$1.prototype.maxIntrinsicWidth_4tn57d_k$ = function (_this__u8e3s4, measurables, height) {
    this.this$0__1.state_1.textDelegate_1.layoutIntrinsics_4irjyy_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
    return this.this$0__1.state_1.textDelegate_1.get_maxIntrinsicWidth_b4gk2k_k$();
  };
  TextController$measurePolicy$1.prototype.maxIntrinsicHeight_6rhckk_k$ = function (_this__u8e3s4, measurables, width) {
    var tmp = this.this$0__1.state_1.textDelegate_1;
    Companion_getInstance_18();
    var tmp_0 = Constraints(0, width, 0, 2147483647);
    var tmp_1 = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
    return _IntSize___get_height__impl__prv63b(tmp.layout$default_3ijkau_k$(tmp_0, tmp_1, null, 4, null).size_1);
  };
  TextController$measurePolicy$1.$metadata$ = classMeta(undefined, [MeasurePolicy]);
  function TextController$drawTextAndSelectionBehind$lambda(this$0) {
    return function ($this$drawBehind) {
      var tmp0_safe_receiver = this$0.state_1.layoutResult_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this$0.state_1.get_drawScopeInvalidation_eg7rzo_k$();
        var tmp0_safe_receiver_0 = this$0.selectionRegistrar_1;
        var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.get_subselections_i6sdj2_k$();
        var selection = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_1mhr4y_k$(this$0.state_1.selectableId_1);
        if (!(selection == null)) {
          var tmp;
          if (!selection.handlesCrossed_1) {
            tmp = selection.start_1.offset_1;
          } else {
            tmp = selection.end_1.offset_1;
          }
          var start = tmp;
          var tmp_0;
          if (!selection.handlesCrossed_1) {
            tmp_0 = selection.end_1.offset_1;
          } else {
            tmp_0 = selection.start_1.offset_1;
          }
          var end = tmp_0;
          if (!(start === end)) {
            var selectionPath = tmp0_safe_receiver.multiParagraph_1.getPathForRange_i163f3_k$(start, end);
            var tmp_1 = this$0.state_1.selectionBackgroundColor_1;
            $this$drawBehind.drawPath$default_kl4g8r_k$(selectionPath, tmp_1, 0.0, null, null, null, 60, null);
          }
        }
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
        var tmp0__anonymous__q1qw7t = $this$drawBehind.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
        Companion_getInstance_24().paint_ct2xtf_k$(tmp0__anonymous__q1qw7t, tmp0_safe_receiver);
        tmp$ret$0 = Unit_getInstance();
        tmp$ret$1 = tmp$ret$0;
      }
      return Unit_getInstance();
    };
  }
  function TextController$coreModifiers$lambda(this$0) {
    return function (it) {
      this$0.state_1.layoutCoordinates_1 = it;
      var tmp;
      if (hasSelection(this$0.selectionRegistrar_1, this$0.state_1.selectableId_1)) {
        var newGlobalPosition = positionInWindow(it);
        if (!equals(newGlobalPosition, this$0.state_1.previousGlobalPosition_1)) {
          var tmp0_safe_receiver = this$0.selectionRegistrar_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.notifyPositionChange_v9it6j_k$(this$0.state_1.selectableId_1);
          }
        }
        this$0.state_1.previousGlobalPosition_1 = newGlobalPosition;
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function TextController$createSemanticsModifierFor$lambda$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(this$0.state_1.layoutResult_1 == null)) {
        it.add_1j60pz_k$(ensureNotNull(this$0.state_1.layoutResult_1));
        tmp = true;
      } else {
        tmp = false;
      }
      return tmp;
    };
  }
  function TextController$createSemanticsModifierFor$lambda($text, this$0) {
    return function ($this$semantics) {
      set_text($this$semantics, $text);
      getTextLayoutResult$default($this$semantics, null, TextController$createSemanticsModifierFor$lambda$lambda(this$0), 1, null);
      return Unit_getInstance();
    };
  }
  function TextController$onRemembered$lambda(this$0) {
    return function () {
      return this$0.state_1.layoutCoordinates_1;
    };
  }
  function TextController$onRemembered$lambda_0(this$0) {
    return function () {
      return this$0.state_1.layoutResult_1;
    };
  }
  function TextController(state) {
    this.state_1 = state;
    this.selectionRegistrar_1 = null;
    var tmp = this;
    tmp.measurePolicy_1 = new TextController$measurePolicy$1(this);
    var tmp_0 = this;
    var tmp_1 = drawTextAndSelectionBehind(Companion_getInstance_7(), this);
    tmp_0.coreModifiers_1 = onGloballyPositioned(tmp_1, TextController$coreModifiers$lambda(this));
    this.semanticsModifier_1 = createSemanticsModifierFor(this, this.state_1.textDelegate_1.text_1);
    this.selectionModifiers_1 = Companion_getInstance_7();
  }
  TextController.prototype.get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  TextController.prototype.set_longPressDragObserver_6j2j9a_k$ = function (_set____db54di) {
    this.longPressDragObserver_1 = _set____db54di;
  };
  TextController.prototype.get_longPressDragObserver_iwhgs8_k$ = function () {
    var tmp = this.longPressDragObserver_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('longPressDragObserver');
    }
  };
  TextController.prototype.update_mq7n96_k$ = function (selectionRegistrar) {
    this.selectionRegistrar_1 = selectionRegistrar;
    var tmp = this;
    var tmp_0;
    if (!(selectionRegistrar == null)) {
      var tmp_1;
      if (get_isInTouchMode()) {
        var tmp_2 = this;
        tmp_2.longPressDragObserver_1 = new TextController$update$1(this, selectionRegistrar);
        var tmp_3 = Companion_getInstance_7();
        var tmp_4 = this.get_longPressDragObserver_iwhgs8_k$();
        tmp_1 = pointerInput_0(tmp_3, tmp_4, TextController$update$slambda_0(this, null));
      } else {
        var mouseSelectionObserver = new TextController$update$mouseSelectionObserver$1(this, selectionRegistrar);
        var tmp_5 = Companion_getInstance_7();
        tmp_1 = composed$composable$default(tmp_5, null, TextController$update$lambda(mouseSelectionObserver), 1, null);
      }
      var tmp_6 = tmp_1;
      var tmp_7 = get_textPointerIcon();
      tmp_0 = pointerHoverIcon$default(tmp_6, tmp_7, false, 2, null);
    } else {
      tmp_0 = Companion_getInstance_7();
    }
    tmp.selectionModifiers_1 = tmp_0;
  };
  TextController.prototype.setTextDelegate_gbukbh_k$ = function (textDelegate) {
    if (this.state_1.textDelegate_1 === textDelegate) {
      return Unit_getInstance();
    }
    this.state_1.textDelegate_1 = textDelegate;
    this.semanticsModifier_1 = createSemanticsModifierFor(this, this.state_1.textDelegate_1.text_1);
  };
  TextController.prototype.get_measurePolicy_ckysxz_k$ = function () {
    return this.measurePolicy_1;
  };
  TextController.prototype.get_semanticsModifier_opfznp_k$ = function () {
    return this.semanticsModifier_1;
  };
  TextController.prototype.get_modifiers_mxb6zx_k$ = function () {
    return this.coreModifiers_1.then_5qw5wu_k$(this.semanticsModifier_1).then_5qw5wu_k$(this.selectionModifiers_1);
  };
  TextController.prototype.onRemembered_6899sq_k$ = function () {
    var tmp0_safe_receiver = this.selectionRegistrar_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp = this.state_1;
      var tmp_0 = TextController$onRemembered$lambda(this);
      tmp.selectable_1 = tmp0_safe_receiver.subscribe_dtjpsa_k$(new MultiWidgetSelectionDelegate(this.state_1.selectableId_1, tmp_0, TextController$onRemembered$lambda_0(this)));
      tmp$ret$0 = Unit_getInstance();
    }
  };
  TextController.prototype.onForgotten_pcab12_k$ = function () {
    var tmp0_safe_receiver = this.state_1.selectable_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.TextController.onForgotten.<anonymous>' call
      var tmp0_safe_receiver_0 = this.selectionRegistrar_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver_0.unsubscribe_h2q9j4_k$(tmp0_safe_receiver);
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
    }
  };
  TextController.prototype.onAbandoned_1hgzvg_k$ = function () {
    var tmp0_safe_receiver = this.state_1.selectable_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.TextController.onAbandoned.<anonymous>' call
      var tmp0_safe_receiver_0 = this.selectionRegistrar_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver_0.unsubscribe_h2q9j4_k$(tmp0_safe_receiver);
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
    }
  };
  TextController.$metadata$ = classMeta('TextController', [RememberObserver]);
  function _set_drawScopeInvalidation__nu6luf($this, _set____db54di) {
    var tmp0_setValue = drawScopeInvalidation$factory();
    return $this.drawScopeInvalidation$delegate_1.set_value_rnwamw_k$(Unit_getInstance());
  }
  function TextState$onTextLayout$lambda(it) {
    return Unit_getInstance();
  }
  function TextState(textDelegate, selectableId) {
    this.textDelegate_1 = textDelegate;
    this.selectableId_1 = selectableId;
    var tmp = this;
    tmp.onTextLayout_1 = TextState$onTextLayout$lambda;
    this.selectable_1 = null;
    this.layoutCoordinates_1 = null;
    this.layoutResult_1 = null;
    this.previousGlobalPosition_1 = Companion_getInstance_4().Zero_1;
    this.selectionBackgroundColor_1 = Companion_getInstance_0().Unspecified_1;
    this.drawScopeInvalidation$delegate_1 = mutableStateOf(Unit_getInstance(), neverEqualPolicy());
  }
  TextState.prototype.set_textDelegate_pcem3c_k$ = function (_set____db54di) {
    this.textDelegate_1 = _set____db54di;
  };
  TextState.prototype.get_textDelegate_dno657_k$ = function () {
    return this.textDelegate_1;
  };
  TextState.prototype.get_selectableId_qduvty_k$ = function () {
    return this.selectableId_1;
  };
  TextState.prototype.set_onTextLayout_oewkcw_k$ = function (_set____db54di) {
    this.onTextLayout_1 = _set____db54di;
  };
  TextState.prototype.get_onTextLayout_fs9rnj_k$ = function () {
    return this.onTextLayout_1;
  };
  TextState.prototype.set_selectable_i9p2dh_k$ = function (_set____db54di) {
    this.selectable_1 = _set____db54di;
  };
  TextState.prototype.get_selectable_nh695r_k$ = function () {
    return this.selectable_1;
  };
  TextState.prototype.set_layoutCoordinates_kms66b_k$ = function (_set____db54di) {
    this.layoutCoordinates_1 = _set____db54di;
  };
  TextState.prototype.get_layoutCoordinates_d2f0vs_k$ = function () {
    return this.layoutCoordinates_1;
  };
  TextState.prototype.set_layoutResult_w8faq5_k$ = function (value) {
    _set_drawScopeInvalidation__nu6luf(this, Unit_getInstance());
    this.layoutResult_1 = value;
  };
  TextState.prototype.get_layoutResult_z1ics0_k$ = function () {
    return this.layoutResult_1;
  };
  TextState.prototype.set_previousGlobalPosition_nfalq2_k$ = function (_set____db54di) {
    this.previousGlobalPosition_1 = _set____db54di;
  };
  TextState.prototype.get_previousGlobalPosition_f2hyzk_k$ = function () {
    return this.previousGlobalPosition_1;
  };
  TextState.prototype.set_selectionBackgroundColor_u9adkx_k$ = function (_set____db54di) {
    this.selectionBackgroundColor_1 = _set____db54di;
  };
  TextState.prototype.get_selectionBackgroundColor_ppt05z_k$ = function () {
    return this.selectionBackgroundColor_1;
  };
  TextState.prototype.get_drawScopeInvalidation_eg7rzo_k$ = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = drawScopeInvalidation$factory_0();
    tmp$ret$0 = this.drawScopeInvalidation$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  TextState.$metadata$ = classMeta('TextState');
  function updateTextDelegate(current, text, style, density, fontFamilyResolver, softWrap, overflow, maxLines) {
    init_properties_CoreText_kt_u66fde();
    var tmp;
    if ((((((!(current.text_1.text_1 === text) ? true : !current.style_1.equals(style)) ? true : !(current.softWrap_1 === softWrap)) ? true : !(current.overflow_1 === overflow)) ? true : !(current.maxLines_1 === maxLines)) ? true : !equals(current.density_1, density)) ? true : !(current.fontFamilyResolver_1 === fontFamilyResolver)) {
      var tmp0_text = AnnotatedString_init_$Create$(text, null, null, 6, null);
      tmp = TextDelegate_init_$Create$(tmp0_text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, null, 128, null);
    } else {
      tmp = current;
    }
    return tmp;
  }
  function updateTextDelegate$default(current, text, style, density, fontFamilyResolver, softWrap, overflow, maxLines, $mask0, $handler) {
    if (!(($mask0 & 32) === 0))
      softWrap = true;
    if (!(($mask0 & 64) === 0))
      overflow = Companion_getInstance_16().Clip_1;
    if (!(($mask0 & 128) === 0))
      maxLines = IntCompanionObject_getInstance().MAX_VALUE_1;
    return updateTextDelegate(current, text, style, density, fontFamilyResolver, softWrap, overflow, maxLines);
  }
  function drawScopeInvalidation$factory() {
    return getPropertyCallableRef('drawScopeInvalidation', 1, KMutableProperty1, function (receiver) {
      receiver.get_drawScopeInvalidation_eg7rzo_k$();
      return Unit_getInstance();
    }, function (receiver, value) {
      return _set_drawScopeInvalidation__nu6luf(receiver, value);
    });
  }
  function drawScopeInvalidation$factory_0() {
    return getPropertyCallableRef('drawScopeInvalidation', 1, KMutableProperty1, function (receiver) {
      receiver.get_drawScopeInvalidation_eg7rzo_k$();
      return Unit_getInstance();
    }, function (receiver, value) {
      return _set_drawScopeInvalidation__nu6luf(receiver, value);
    });
  }
  var properties_initialized_CoreText_kt_p1onji;
  function init_properties_CoreText_kt_u66fde() {
    if (properties_initialized_CoreText_kt_p1onji) {
    } else {
      properties_initialized_CoreText_kt_p1onji = true;
      EmptyInlineContent = new Pair(emptyList(), emptyList());
    }
  }
  var Handle_Cursor_instance;
  var Handle_SelectionStart_instance;
  var Handle_SelectionEnd_instance;
  function values_1() {
    return [Handle_Cursor_getInstance(), Handle_SelectionStart_getInstance(), Handle_SelectionEnd_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Cursor':
        return Handle_Cursor_getInstance();
      case 'SelectionStart':
        return Handle_SelectionStart_getInstance();
      case 'SelectionEnd':
        return Handle_SelectionEnd_getInstance();
      default:
        Handle_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Handle_entriesInitialized;
  function Handle_initEntries() {
    if (Handle_entriesInitialized)
      return Unit_getInstance();
    Handle_entriesInitialized = true;
    Handle_Cursor_instance = new Handle('Cursor', 0);
    Handle_SelectionStart_instance = new Handle('SelectionStart', 1);
    Handle_SelectionEnd_instance = new Handle('SelectionEnd', 2);
  }
  function Handle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Handle.$metadata$ = classMeta('Handle', undefined, undefined, undefined, undefined, Enum.prototype);
  function Handle_Cursor_getInstance() {
    Handle_initEntries();
    return Handle_Cursor_instance;
  }
  function Handle_SelectionStart_getInstance() {
    Handle_initEntries();
    return Handle_SelectionStart_instance;
  }
  function Handle_SelectionEnd_getInstance() {
    Handle_initEntries();
    return Handle_SelectionEnd_instance;
  }
  function InternalFoundationTextApi() {
  }
  InternalFoundationTextApi.prototype.equals = function (other) {
    if (!(other instanceof InternalFoundationTextApi))
      return false;
    var tmp0_other_with_cast = other instanceof InternalFoundationTextApi ? other : THROW_CCE();
    return true;
  };
  InternalFoundationTextApi.prototype.hashCode = function () {
    return 0;
  };
  InternalFoundationTextApi.prototype.toString = function () {
    return '@androidx.compose.foundation.text.InternalFoundationTextApi()';
  };
  InternalFoundationTextApi.$metadata$ = classMeta('InternalFoundationTextApi', [Annotation]);
  var KeyCommand_LEFT_CHAR_instance;
  var KeyCommand_RIGHT_CHAR_instance;
  var KeyCommand_RIGHT_WORD_instance;
  var KeyCommand_LEFT_WORD_instance;
  var KeyCommand_NEXT_PARAGRAPH_instance;
  var KeyCommand_PREV_PARAGRAPH_instance;
  var KeyCommand_LINE_START_instance;
  var KeyCommand_LINE_END_instance;
  var KeyCommand_LINE_LEFT_instance;
  var KeyCommand_LINE_RIGHT_instance;
  var KeyCommand_UP_instance;
  var KeyCommand_DOWN_instance;
  var KeyCommand_PAGE_UP_instance;
  var KeyCommand_PAGE_DOWN_instance;
  var KeyCommand_HOME_instance;
  var KeyCommand_END_instance;
  var KeyCommand_COPY_instance;
  var KeyCommand_PASTE_instance;
  var KeyCommand_CUT_instance;
  var KeyCommand_DELETE_PREV_CHAR_instance;
  var KeyCommand_DELETE_NEXT_CHAR_instance;
  var KeyCommand_DELETE_PREV_WORD_instance;
  var KeyCommand_DELETE_NEXT_WORD_instance;
  var KeyCommand_DELETE_FROM_LINE_START_instance;
  var KeyCommand_DELETE_TO_LINE_END_instance;
  var KeyCommand_SELECT_ALL_instance;
  var KeyCommand_SELECT_LEFT_CHAR_instance;
  var KeyCommand_SELECT_RIGHT_CHAR_instance;
  var KeyCommand_SELECT_UP_instance;
  var KeyCommand_SELECT_DOWN_instance;
  var KeyCommand_SELECT_PAGE_UP_instance;
  var KeyCommand_SELECT_PAGE_DOWN_instance;
  var KeyCommand_SELECT_HOME_instance;
  var KeyCommand_SELECT_END_instance;
  var KeyCommand_SELECT_LEFT_WORD_instance;
  var KeyCommand_SELECT_RIGHT_WORD_instance;
  var KeyCommand_SELECT_NEXT_PARAGRAPH_instance;
  var KeyCommand_SELECT_PREV_PARAGRAPH_instance;
  var KeyCommand_SELECT_LINE_START_instance;
  var KeyCommand_SELECT_LINE_END_instance;
  var KeyCommand_SELECT_LINE_LEFT_instance;
  var KeyCommand_SELECT_LINE_RIGHT_instance;
  var KeyCommand_DESELECT_instance;
  var KeyCommand_NEW_LINE_instance;
  var KeyCommand_TAB_instance;
  var KeyCommand_UNDO_instance;
  var KeyCommand_REDO_instance;
  var KeyCommand_CHARACTER_PALETTE_instance;
  function values_2() {
    return [KeyCommand_LEFT_CHAR_getInstance(), KeyCommand_RIGHT_CHAR_getInstance(), KeyCommand_RIGHT_WORD_getInstance(), KeyCommand_LEFT_WORD_getInstance(), KeyCommand_NEXT_PARAGRAPH_getInstance(), KeyCommand_PREV_PARAGRAPH_getInstance(), KeyCommand_LINE_START_getInstance(), KeyCommand_LINE_END_getInstance(), KeyCommand_LINE_LEFT_getInstance(), KeyCommand_LINE_RIGHT_getInstance(), KeyCommand_UP_getInstance(), KeyCommand_DOWN_getInstance(), KeyCommand_PAGE_UP_getInstance(), KeyCommand_PAGE_DOWN_getInstance(), KeyCommand_HOME_getInstance(), KeyCommand_END_getInstance(), KeyCommand_COPY_getInstance(), KeyCommand_PASTE_getInstance(), KeyCommand_CUT_getInstance(), KeyCommand_DELETE_PREV_CHAR_getInstance(), KeyCommand_DELETE_NEXT_CHAR_getInstance(), KeyCommand_DELETE_PREV_WORD_getInstance(), KeyCommand_DELETE_NEXT_WORD_getInstance(), KeyCommand_DELETE_FROM_LINE_START_getInstance(), KeyCommand_DELETE_TO_LINE_END_getInstance(), KeyCommand_SELECT_ALL_getInstance(), KeyCommand_SELECT_LEFT_CHAR_getInstance(), KeyCommand_SELECT_RIGHT_CHAR_getInstance(), KeyCommand_SELECT_UP_getInstance(), KeyCommand_SELECT_DOWN_getInstance(), KeyCommand_SELECT_PAGE_UP_getInstance(), KeyCommand_SELECT_PAGE_DOWN_getInstance(), KeyCommand_SELECT_HOME_getInstance(), KeyCommand_SELECT_END_getInstance(), KeyCommand_SELECT_LEFT_WORD_getInstance(), KeyCommand_SELECT_RIGHT_WORD_getInstance(), KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance(), KeyCommand_SELECT_PREV_PARAGRAPH_getInstance(), KeyCommand_SELECT_LINE_START_getInstance(), KeyCommand_SELECT_LINE_END_getInstance(), KeyCommand_SELECT_LINE_LEFT_getInstance(), KeyCommand_SELECT_LINE_RIGHT_getInstance(), KeyCommand_DESELECT_getInstance(), KeyCommand_NEW_LINE_getInstance(), KeyCommand_TAB_getInstance(), KeyCommand_UNDO_getInstance(), KeyCommand_REDO_getInstance(), KeyCommand_CHARACTER_PALETTE_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'LEFT_CHAR':
        return KeyCommand_LEFT_CHAR_getInstance();
      case 'RIGHT_CHAR':
        return KeyCommand_RIGHT_CHAR_getInstance();
      case 'RIGHT_WORD':
        return KeyCommand_RIGHT_WORD_getInstance();
      case 'LEFT_WORD':
        return KeyCommand_LEFT_WORD_getInstance();
      case 'NEXT_PARAGRAPH':
        return KeyCommand_NEXT_PARAGRAPH_getInstance();
      case 'PREV_PARAGRAPH':
        return KeyCommand_PREV_PARAGRAPH_getInstance();
      case 'LINE_START':
        return KeyCommand_LINE_START_getInstance();
      case 'LINE_END':
        return KeyCommand_LINE_END_getInstance();
      case 'LINE_LEFT':
        return KeyCommand_LINE_LEFT_getInstance();
      case 'LINE_RIGHT':
        return KeyCommand_LINE_RIGHT_getInstance();
      case 'UP':
        return KeyCommand_UP_getInstance();
      case 'DOWN':
        return KeyCommand_DOWN_getInstance();
      case 'PAGE_UP':
        return KeyCommand_PAGE_UP_getInstance();
      case 'PAGE_DOWN':
        return KeyCommand_PAGE_DOWN_getInstance();
      case 'HOME':
        return KeyCommand_HOME_getInstance();
      case 'END':
        return KeyCommand_END_getInstance();
      case 'COPY':
        return KeyCommand_COPY_getInstance();
      case 'PASTE':
        return KeyCommand_PASTE_getInstance();
      case 'CUT':
        return KeyCommand_CUT_getInstance();
      case 'DELETE_PREV_CHAR':
        return KeyCommand_DELETE_PREV_CHAR_getInstance();
      case 'DELETE_NEXT_CHAR':
        return KeyCommand_DELETE_NEXT_CHAR_getInstance();
      case 'DELETE_PREV_WORD':
        return KeyCommand_DELETE_PREV_WORD_getInstance();
      case 'DELETE_NEXT_WORD':
        return KeyCommand_DELETE_NEXT_WORD_getInstance();
      case 'DELETE_FROM_LINE_START':
        return KeyCommand_DELETE_FROM_LINE_START_getInstance();
      case 'DELETE_TO_LINE_END':
        return KeyCommand_DELETE_TO_LINE_END_getInstance();
      case 'SELECT_ALL':
        return KeyCommand_SELECT_ALL_getInstance();
      case 'SELECT_LEFT_CHAR':
        return KeyCommand_SELECT_LEFT_CHAR_getInstance();
      case 'SELECT_RIGHT_CHAR':
        return KeyCommand_SELECT_RIGHT_CHAR_getInstance();
      case 'SELECT_UP':
        return KeyCommand_SELECT_UP_getInstance();
      case 'SELECT_DOWN':
        return KeyCommand_SELECT_DOWN_getInstance();
      case 'SELECT_PAGE_UP':
        return KeyCommand_SELECT_PAGE_UP_getInstance();
      case 'SELECT_PAGE_DOWN':
        return KeyCommand_SELECT_PAGE_DOWN_getInstance();
      case 'SELECT_HOME':
        return KeyCommand_SELECT_HOME_getInstance();
      case 'SELECT_END':
        return KeyCommand_SELECT_END_getInstance();
      case 'SELECT_LEFT_WORD':
        return KeyCommand_SELECT_LEFT_WORD_getInstance();
      case 'SELECT_RIGHT_WORD':
        return KeyCommand_SELECT_RIGHT_WORD_getInstance();
      case 'SELECT_NEXT_PARAGRAPH':
        return KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance();
      case 'SELECT_PREV_PARAGRAPH':
        return KeyCommand_SELECT_PREV_PARAGRAPH_getInstance();
      case 'SELECT_LINE_START':
        return KeyCommand_SELECT_LINE_START_getInstance();
      case 'SELECT_LINE_END':
        return KeyCommand_SELECT_LINE_END_getInstance();
      case 'SELECT_LINE_LEFT':
        return KeyCommand_SELECT_LINE_LEFT_getInstance();
      case 'SELECT_LINE_RIGHT':
        return KeyCommand_SELECT_LINE_RIGHT_getInstance();
      case 'DESELECT':
        return KeyCommand_DESELECT_getInstance();
      case 'NEW_LINE':
        return KeyCommand_NEW_LINE_getInstance();
      case 'TAB':
        return KeyCommand_TAB_getInstance();
      case 'UNDO':
        return KeyCommand_UNDO_getInstance();
      case 'REDO':
        return KeyCommand_REDO_getInstance();
      case 'CHARACTER_PALETTE':
        return KeyCommand_CHARACTER_PALETTE_getInstance();
      default:
        KeyCommand_initEntries();
        THROW_ISE();
        break;
    }
  }
  var KeyCommand_entriesInitialized;
  function KeyCommand_initEntries() {
    if (KeyCommand_entriesInitialized)
      return Unit_getInstance();
    KeyCommand_entriesInitialized = true;
    KeyCommand_LEFT_CHAR_instance = new KeyCommand('LEFT_CHAR', 0, false);
    KeyCommand_RIGHT_CHAR_instance = new KeyCommand('RIGHT_CHAR', 1, false);
    KeyCommand_RIGHT_WORD_instance = new KeyCommand('RIGHT_WORD', 2, false);
    KeyCommand_LEFT_WORD_instance = new KeyCommand('LEFT_WORD', 3, false);
    KeyCommand_NEXT_PARAGRAPH_instance = new KeyCommand('NEXT_PARAGRAPH', 4, false);
    KeyCommand_PREV_PARAGRAPH_instance = new KeyCommand('PREV_PARAGRAPH', 5, false);
    KeyCommand_LINE_START_instance = new KeyCommand('LINE_START', 6, false);
    KeyCommand_LINE_END_instance = new KeyCommand('LINE_END', 7, false);
    KeyCommand_LINE_LEFT_instance = new KeyCommand('LINE_LEFT', 8, false);
    KeyCommand_LINE_RIGHT_instance = new KeyCommand('LINE_RIGHT', 9, false);
    KeyCommand_UP_instance = new KeyCommand('UP', 10, false);
    KeyCommand_DOWN_instance = new KeyCommand('DOWN', 11, false);
    KeyCommand_PAGE_UP_instance = new KeyCommand('PAGE_UP', 12, false);
    KeyCommand_PAGE_DOWN_instance = new KeyCommand('PAGE_DOWN', 13, false);
    KeyCommand_HOME_instance = new KeyCommand('HOME', 14, false);
    KeyCommand_END_instance = new KeyCommand('END', 15, false);
    KeyCommand_COPY_instance = new KeyCommand('COPY', 16, false);
    KeyCommand_PASTE_instance = new KeyCommand('PASTE', 17, true);
    KeyCommand_CUT_instance = new KeyCommand('CUT', 18, true);
    KeyCommand_DELETE_PREV_CHAR_instance = new KeyCommand('DELETE_PREV_CHAR', 19, true);
    KeyCommand_DELETE_NEXT_CHAR_instance = new KeyCommand('DELETE_NEXT_CHAR', 20, true);
    KeyCommand_DELETE_PREV_WORD_instance = new KeyCommand('DELETE_PREV_WORD', 21, true);
    KeyCommand_DELETE_NEXT_WORD_instance = new KeyCommand('DELETE_NEXT_WORD', 22, true);
    KeyCommand_DELETE_FROM_LINE_START_instance = new KeyCommand('DELETE_FROM_LINE_START', 23, true);
    KeyCommand_DELETE_TO_LINE_END_instance = new KeyCommand('DELETE_TO_LINE_END', 24, true);
    KeyCommand_SELECT_ALL_instance = new KeyCommand('SELECT_ALL', 25, false);
    KeyCommand_SELECT_LEFT_CHAR_instance = new KeyCommand('SELECT_LEFT_CHAR', 26, false);
    KeyCommand_SELECT_RIGHT_CHAR_instance = new KeyCommand('SELECT_RIGHT_CHAR', 27, false);
    KeyCommand_SELECT_UP_instance = new KeyCommand('SELECT_UP', 28, false);
    KeyCommand_SELECT_DOWN_instance = new KeyCommand('SELECT_DOWN', 29, false);
    KeyCommand_SELECT_PAGE_UP_instance = new KeyCommand('SELECT_PAGE_UP', 30, false);
    KeyCommand_SELECT_PAGE_DOWN_instance = new KeyCommand('SELECT_PAGE_DOWN', 31, false);
    KeyCommand_SELECT_HOME_instance = new KeyCommand('SELECT_HOME', 32, false);
    KeyCommand_SELECT_END_instance = new KeyCommand('SELECT_END', 33, false);
    KeyCommand_SELECT_LEFT_WORD_instance = new KeyCommand('SELECT_LEFT_WORD', 34, false);
    KeyCommand_SELECT_RIGHT_WORD_instance = new KeyCommand('SELECT_RIGHT_WORD', 35, false);
    KeyCommand_SELECT_NEXT_PARAGRAPH_instance = new KeyCommand('SELECT_NEXT_PARAGRAPH', 36, false);
    KeyCommand_SELECT_PREV_PARAGRAPH_instance = new KeyCommand('SELECT_PREV_PARAGRAPH', 37, false);
    KeyCommand_SELECT_LINE_START_instance = new KeyCommand('SELECT_LINE_START', 38, false);
    KeyCommand_SELECT_LINE_END_instance = new KeyCommand('SELECT_LINE_END', 39, false);
    KeyCommand_SELECT_LINE_LEFT_instance = new KeyCommand('SELECT_LINE_LEFT', 40, false);
    KeyCommand_SELECT_LINE_RIGHT_instance = new KeyCommand('SELECT_LINE_RIGHT', 41, false);
    KeyCommand_DESELECT_instance = new KeyCommand('DESELECT', 42, false);
    KeyCommand_NEW_LINE_instance = new KeyCommand('NEW_LINE', 43, true);
    KeyCommand_TAB_instance = new KeyCommand('TAB', 44, true);
    KeyCommand_UNDO_instance = new KeyCommand('UNDO', 45, true);
    KeyCommand_REDO_instance = new KeyCommand('REDO', 46, true);
    KeyCommand_CHARACTER_PALETTE_instance = new KeyCommand('CHARACTER_PALETTE', 47, true);
  }
  function KeyCommand(name, ordinal, editsText) {
    Enum.call(this, name, ordinal);
    this.editsText_1 = editsText;
  }
  KeyCommand.prototype.get_editsText_m211rn_k$ = function () {
    return this.editsText_1;
  };
  KeyCommand.$metadata$ = classMeta('KeyCommand', undefined, undefined, undefined, undefined, Enum.prototype);
  function KeyCommand_LEFT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LEFT_CHAR_instance;
  }
  function KeyCommand_RIGHT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_RIGHT_CHAR_instance;
  }
  function KeyCommand_RIGHT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_RIGHT_WORD_instance;
  }
  function KeyCommand_LEFT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LEFT_WORD_instance;
  }
  function KeyCommand_NEXT_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_NEXT_PARAGRAPH_instance;
  }
  function KeyCommand_PREV_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PREV_PARAGRAPH_instance;
  }
  function KeyCommand_LINE_START_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_START_instance;
  }
  function KeyCommand_LINE_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_END_instance;
  }
  function KeyCommand_LINE_LEFT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_LEFT_instance;
  }
  function KeyCommand_LINE_RIGHT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_RIGHT_instance;
  }
  function KeyCommand_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_UP_instance;
  }
  function KeyCommand_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DOWN_instance;
  }
  function KeyCommand_PAGE_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PAGE_UP_instance;
  }
  function KeyCommand_PAGE_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PAGE_DOWN_instance;
  }
  function KeyCommand_HOME_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_HOME_instance;
  }
  function KeyCommand_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_END_instance;
  }
  function KeyCommand_COPY_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_COPY_instance;
  }
  function KeyCommand_PASTE_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PASTE_instance;
  }
  function KeyCommand_CUT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_CUT_instance;
  }
  function KeyCommand_DELETE_PREV_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_PREV_CHAR_instance;
  }
  function KeyCommand_DELETE_NEXT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_NEXT_CHAR_instance;
  }
  function KeyCommand_DELETE_PREV_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_PREV_WORD_instance;
  }
  function KeyCommand_DELETE_NEXT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_NEXT_WORD_instance;
  }
  function KeyCommand_DELETE_FROM_LINE_START_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_FROM_LINE_START_instance;
  }
  function KeyCommand_DELETE_TO_LINE_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_TO_LINE_END_instance;
  }
  function KeyCommand_SELECT_ALL_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_ALL_instance;
  }
  function KeyCommand_SELECT_LEFT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LEFT_CHAR_instance;
  }
  function KeyCommand_SELECT_RIGHT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_RIGHT_CHAR_instance;
  }
  function KeyCommand_SELECT_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_UP_instance;
  }
  function KeyCommand_SELECT_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_DOWN_instance;
  }
  function KeyCommand_SELECT_PAGE_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_PAGE_UP_instance;
  }
  function KeyCommand_SELECT_PAGE_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_PAGE_DOWN_instance;
  }
  function KeyCommand_SELECT_HOME_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_HOME_instance;
  }
  function KeyCommand_SELECT_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_END_instance;
  }
  function KeyCommand_SELECT_LEFT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LEFT_WORD_instance;
  }
  function KeyCommand_SELECT_RIGHT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_RIGHT_WORD_instance;
  }
  function KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_NEXT_PARAGRAPH_instance;
  }
  function KeyCommand_SELECT_PREV_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_PREV_PARAGRAPH_instance;
  }
  function KeyCommand_SELECT_LINE_START_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_START_instance;
  }
  function KeyCommand_SELECT_LINE_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_END_instance;
  }
  function KeyCommand_SELECT_LINE_LEFT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_LEFT_instance;
  }
  function KeyCommand_SELECT_LINE_RIGHT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_RIGHT_instance;
  }
  function KeyCommand_DESELECT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DESELECT_instance;
  }
  function KeyCommand_NEW_LINE_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_NEW_LINE_instance;
  }
  function KeyCommand_TAB_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_TAB_instance;
  }
  function KeyCommand_UNDO_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_UNDO_instance;
  }
  function KeyCommand_REDO_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_REDO_instance;
  }
  function KeyCommand_CHARACTER_PALETTE_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_CHARACTER_PALETTE_instance;
  }
  function get_defaultKeyMapping() {
    init_properties_KeyMapping_kt_sguwaz();
    return defaultKeyMapping;
  }
  var defaultKeyMapping;
  function KeyMapping() {
  }
  KeyMapping.$metadata$ = interfaceMeta('KeyMapping');
  function commonKeyMapping(shortcutModifier) {
    init_properties_KeyMapping_kt_sguwaz();
    return new commonKeyMapping$1(shortcutModifier);
  }
  function defaultKeyMapping$2$1($common) {
    this.$common_1 = $common;
  }
  defaultKeyMapping$2$1.prototype.map_qbm95i_k$ = function (event) {
    var tmp;
    if (get_isShiftPressed(event) ? get_isCtrlPressed(event) : false) {
      var tmp0_subject = get_key(event);
      tmp = equals(tmp0_subject, MappedKeys_getInstance().DirectionLeft_1) ? KeyCommand_SELECT_LEFT_WORD_getInstance() : equals(tmp0_subject, MappedKeys_getInstance().DirectionRight_1) ? KeyCommand_SELECT_RIGHT_WORD_getInstance() : equals(tmp0_subject, MappedKeys_getInstance().DirectionUp_1) ? KeyCommand_SELECT_PREV_PARAGRAPH_getInstance() : equals(tmp0_subject, MappedKeys_getInstance().DirectionDown_1) ? KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance() : null;
    } else if (get_isCtrlPressed(event)) {
      var tmp1_subject = get_key(event);
      tmp = equals(tmp1_subject, MappedKeys_getInstance().DirectionLeft_1) ? KeyCommand_LEFT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().DirectionRight_1) ? KeyCommand_RIGHT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().DirectionUp_1) ? KeyCommand_PREV_PARAGRAPH_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().DirectionDown_1) ? KeyCommand_NEXT_PARAGRAPH_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().H_1) ? KeyCommand_DELETE_PREV_CHAR_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().Delete_1) ? KeyCommand_DELETE_NEXT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().Backspace_1) ? KeyCommand_DELETE_PREV_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().Backslash_1) ? KeyCommand_DESELECT_getInstance() : null;
    } else if (get_isShiftPressed(event)) {
      var tmp2_subject = get_key(event);
      tmp = equals(tmp2_subject, MappedKeys_getInstance().MoveHome_1) ? KeyCommand_SELECT_LINE_START_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().MoveEnd_1) ? KeyCommand_SELECT_LINE_END_getInstance() : null;
    } else {
      tmp = null;
    }
    var tmp3_elvis_lhs = tmp;
    return tmp3_elvis_lhs == null ? this.$common_1.map_qbm95i_k$(event) : tmp3_elvis_lhs;
  };
  defaultKeyMapping$2$1.$metadata$ = classMeta(undefined, [KeyMapping]);
  function commonKeyMapping$1($shortcutModifier) {
    this.$shortcutModifier_1 = $shortcutModifier;
  }
  commonKeyMapping$1.prototype.map_qbm95i_k$ = function (event) {
    var tmp;
    if (this.$shortcutModifier_1(new KeyEvent(event)) ? get_isShiftPressed(event) : false) {
      var tmp0_subject = get_key(event);
      tmp = equals(tmp0_subject, MappedKeys_getInstance().Z_1) ? KeyCommand_REDO_getInstance() : null;
    } else if (this.$shortcutModifier_1(new KeyEvent(event))) {
      var tmp1_subject = get_key(event);
      tmp = (equals(tmp1_subject, MappedKeys_getInstance().C_1) ? true : equals(tmp1_subject, MappedKeys_getInstance().Insert_1)) ? KeyCommand_COPY_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().V_1) ? KeyCommand_PASTE_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().X_1) ? KeyCommand_CUT_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().A_1) ? KeyCommand_SELECT_ALL_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().Z_1) ? KeyCommand_UNDO_getInstance() : null;
    } else if (get_isCtrlPressed(event)) {
      tmp = null;
    } else if (get_isShiftPressed(event)) {
      var tmp2_subject = get_key(event);
      tmp = equals(tmp2_subject, MappedKeys_getInstance().DirectionLeft_1) ? KeyCommand_SELECT_LEFT_CHAR_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().DirectionRight_1) ? KeyCommand_SELECT_RIGHT_CHAR_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().DirectionUp_1) ? KeyCommand_SELECT_UP_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().DirectionDown_1) ? KeyCommand_SELECT_DOWN_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().PageUp_1) ? KeyCommand_SELECT_PAGE_UP_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().PageDown_1) ? KeyCommand_SELECT_PAGE_DOWN_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().MoveHome_1) ? KeyCommand_SELECT_LINE_START_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().MoveEnd_1) ? KeyCommand_SELECT_LINE_END_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().Insert_1) ? KeyCommand_PASTE_getInstance() : null;
    } else {
      var tmp3_subject = get_key(event);
      tmp = equals(tmp3_subject, MappedKeys_getInstance().DirectionLeft_1) ? KeyCommand_LEFT_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().DirectionRight_1) ? KeyCommand_RIGHT_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().DirectionUp_1) ? KeyCommand_UP_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().DirectionDown_1) ? KeyCommand_DOWN_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().PageUp_1) ? KeyCommand_PAGE_UP_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().PageDown_1) ? KeyCommand_PAGE_DOWN_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().MoveHome_1) ? KeyCommand_LINE_START_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().MoveEnd_1) ? KeyCommand_LINE_END_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().Enter_1) ? KeyCommand_NEW_LINE_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().Backspace_1) ? KeyCommand_DELETE_PREV_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().Delete_1) ? KeyCommand_DELETE_NEXT_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().Paste_1) ? KeyCommand_PASTE_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().Cut_1) ? KeyCommand_CUT_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().Tab_1) ? KeyCommand_TAB_getInstance() : null;
    }
    return tmp;
  };
  commonKeyMapping$1.$metadata$ = classMeta(undefined, [KeyMapping]);
  function isCtrlPressed$factory() {
    return getPropertyCallableRef('isCtrlPressed', 1, KProperty1, function (receiver) {
      return get_isCtrlPressed(receiver.nativeKeyEvent_1);
    }, null);
  }
  var properties_initialized_KeyMapping_kt_iql13l;
  function init_properties_KeyMapping_kt_sguwaz() {
    if (properties_initialized_KeyMapping_kt_iql13l) {
    } else {
      properties_initialized_KeyMapping_kt_iql13l = true;
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      var tmp0_let = commonKeyMapping(isCtrlPressed$factory());
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.defaultKeyMapping.<anonymous>' call
      tmp$ret$0 = new defaultKeyMapping$2$1(tmp0_let);
      tmp$ret$1 = tmp$ret$0;
      defaultKeyMapping = tmp$ret$1;
    }
  }
  function TextDragObserver() {
  }
  TextDragObserver.$metadata$ = interfaceMeta('TextDragObserver');
  function detectDragGesturesAfterLongPressWithObserver(_this__u8e3s4, observer, $cont) {
    var tmp = detectDragGesturesAfterLongPressWithObserver$lambda(observer);
    var tmp_0 = detectDragGesturesAfterLongPressWithObserver$lambda_0(observer);
    var tmp_1 = detectDragGesturesAfterLongPressWithObserver$lambda_1(observer);
    return detectDragGesturesAfterLongPress(_this__u8e3s4, tmp, tmp_0, tmp_1, detectDragGesturesAfterLongPressWithObserver$lambda_2(observer), $cont);
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda($observer) {
    return function (it) {
      $observer.onStart_b65n5j_k$(it.packedValue_1);
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_0($observer) {
    return function () {
      $observer.onStop_aip7ow_k$();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_1($observer) {
    return function () {
      $observer.onCancel_q8fje0_k$();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_2($observer) {
    return function (_anonymous_parameter_0__qggqh8, offset) {
      $observer.onDrag_jolxfr_k$(offset.packedValue_1);
      return Unit_getInstance();
    };
  }
  function getParagraphBoundary(_this__u8e3s4, index) {
    return TextRange(findParagraphStart(_this__u8e3s4, index), findParagraphEnd(_this__u8e3s4, index));
  }
  function findParagraphStart(_this__u8e3s4, startIndex) {
    var inductionVariable = startIndex - 1 | 0;
    if (1 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (equals(new Char(charSequenceGet(_this__u8e3s4, index - 1 | 0)), new Char(_Char___init__impl__6a9atx(10)))) {
          return index;
        }
      }
       while (1 <= inductionVariable);
    return 0;
  }
  function findParagraphEnd(_this__u8e3s4, startIndex) {
    var inductionVariable = startIndex + 1 | 0;
    var last = charSequenceLength(_this__u8e3s4);
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(_this__u8e3s4, index)), new Char(_Char___init__impl__6a9atx(10)))) {
          return index;
        }
      }
       while (inductionVariable < last);
    return charSequenceLength(_this__u8e3s4);
  }
  function TextDelegate_init_$Init$(text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, placeholders, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      maxLines = IntCompanionObject_getInstance().MAX_VALUE_1;
    if (!(($mask0 & 8) === 0))
      softWrap = true;
    if (!(($mask0 & 16) === 0))
      overflow = Companion_getInstance_16().Clip_1;
    if (!(($mask0 & 128) === 0))
      placeholders = emptyList();
    TextDelegate.call($this, text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, placeholders);
    return $this;
  }
  function TextDelegate_init_$Create$(text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, placeholders, $mask0, $marker) {
    return TextDelegate_init_$Init$(text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, placeholders, $mask0, $marker, Object.create(TextDelegate.prototype));
  }
  function _get_nonNullIntrinsics__hf0xox($this) {
    var tmp0_elvis_lhs = $this.paragraphIntrinsics_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('layoutIntrinsics must be called first');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function layoutText($this, constraints, layoutDirection) {
    $this.layoutIntrinsics_4irjyy_k$(layoutDirection);
    var minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var widthMatters = $this.softWrap_1 ? true : $this.overflow_1 === Companion_getInstance_16().Ellipsis_1;
    var tmp;
    if (widthMatters ? _Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) : false) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      Companion_getInstance_18();
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var overwriteMaxLines = !$this.softWrap_1 ? $this.overflow_1 === Companion_getInstance_16().Ellipsis_1 : false;
    var finalMaxLines = overwriteMaxLines ? 1 : $this.maxLines_1;
    var tmp_0;
    if (minWidth === maxWidth) {
      tmp_0 = maxWidth;
    } else {
      tmp_0 = coerceIn_0($this.get_maxIntrinsicWidth_b4gk2k_k$(), minWidth, maxWidth);
    }
    var width = tmp_0;
    var tmp_1 = _get_nonNullIntrinsics__hf0xox($this);
    return new MultiParagraph(tmp_1, Constraints$default(0, width, 0, _Constraints___get_maxHeight__impl__dt3e8z(constraints), 5, null), finalMaxLines, $this.overflow_1 === Companion_getInstance_16().Ellipsis_1);
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.paint_ct2xtf_k$ = function (canvas, textLayoutResult) {
    TextPainter_getInstance().paint_ct2xtf_k$(canvas, textLayoutResult);
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_24() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function TextDelegate(text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, placeholders) {
    Companion_getInstance_24();
    this.text_1 = text;
    this.style_1 = style;
    this.maxLines_1 = maxLines;
    this.softWrap_1 = softWrap;
    this.overflow_1 = overflow;
    this.density_1 = density;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.placeholders_1 = placeholders;
    this.paragraphIntrinsics_1 = null;
    this.intrinsicsLayoutDirection_1 = null;
    // Inline function 'kotlin.check' call
    var tmp0_check = this.maxLines_1 > 0;
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
  }
  TextDelegate.prototype.get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  TextDelegate.prototype.get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  TextDelegate.prototype.get_maxLines_pclpoc_k$ = function () {
    return this.maxLines_1;
  };
  TextDelegate.prototype.get_softWrap_a000bn_k$ = function () {
    return this.softWrap_1;
  };
  TextDelegate.prototype.get_overflow_rjdkkj_k$ = function () {
    return this.overflow_1;
  };
  TextDelegate.prototype.get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  TextDelegate.prototype.get_fontFamilyResolver_9o0fjy_k$ = function () {
    return this.fontFamilyResolver_1;
  };
  TextDelegate.prototype.get_placeholders_r4ppyh_k$ = function () {
    return this.placeholders_1;
  };
  TextDelegate.prototype.set_paragraphIntrinsics_oap2f7_k$ = function (_set____db54di) {
    this.paragraphIntrinsics_1 = _set____db54di;
  };
  TextDelegate.prototype.get_paragraphIntrinsics_8qg2b7_k$ = function () {
    return this.paragraphIntrinsics_1;
  };
  TextDelegate.prototype.set_intrinsicsLayoutDirection_4auhth_k$ = function (_set____db54di) {
    this.intrinsicsLayoutDirection_1 = _set____db54di;
  };
  TextDelegate.prototype.get_intrinsicsLayoutDirection_9vwh7m_k$ = function () {
    return this.intrinsicsLayoutDirection_1;
  };
  TextDelegate.prototype.get_minIntrinsicWidth_lmc1rq_k$ = function () {
    return ceilToIntPx(_get_nonNullIntrinsics__hf0xox(this).get_minIntrinsicWidth_lmc1rq_k$());
  };
  TextDelegate.prototype.get_maxIntrinsicWidth_b4gk2k_k$ = function () {
    return ceilToIntPx(_get_nonNullIntrinsics__hf0xox(this).get_maxIntrinsicWidth_b4gk2k_k$());
  };
  TextDelegate.prototype.layoutIntrinsics_4irjyy_k$ = function (layoutDirection) {
    var localIntrinsics = this.paragraphIntrinsics_1;
    var tmp;
    if ((localIntrinsics == null ? true : !layoutDirection.equals(this.intrinsicsLayoutDirection_1)) ? true : localIntrinsics.get_hasStaleResolvedFonts_tun9ic_k$()) {
      this.intrinsicsLayoutDirection_1 = layoutDirection;
      var tmp0_annotatedString = this.text_1;
      var tmp1_style = resolveDefaults(this.style_1, layoutDirection);
      var tmp2_density = this.density_1;
      var tmp3_fontFamilyResolver = this.fontFamilyResolver_1;
      var tmp4_placeholders = this.placeholders_1;
      tmp = new MultiParagraphIntrinsics(tmp0_annotatedString, tmp1_style, tmp4_placeholders, tmp2_density, tmp3_fontFamilyResolver);
    } else {
      tmp = localIntrinsics;
    }
    var intrinsics = tmp;
    this.paragraphIntrinsics_1 = intrinsics;
  };
  TextDelegate.prototype.layout_k0cayh_k$ = function (constraints, layoutDirection, prevResult) {
    if (!(prevResult == null) ? canReuse(prevResult, this.text_1, this.style_1, this.placeholders_1, this.maxLines_1, this.softWrap_1, this.overflow_1, this.density_1, layoutDirection, this.fontFamilyResolver_1, constraints) : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.TextDelegate.layout.<anonymous>' call
      tmp$ret$0 = prevResult.copy_wbg4xj_k$(TextLayoutInput_init_$Create$(prevResult.layoutInput_1.text_1, this.style_1, prevResult.layoutInput_1.placeholders_1, prevResult.layoutInput_1.maxLines_1, prevResult.layoutInput_1.softWrap_1, prevResult.layoutInput_1.overflow_1, prevResult.layoutInput_1.density_1, prevResult.layoutInput_1.layoutDirection_1, prevResult.layoutInput_1.fontFamilyResolver_1, constraints), constrain(constraints, IntSize(ceilToIntPx(prevResult.multiParagraph_1.width_1), ceilToIntPx(prevResult.multiParagraph_1.height_1))));
      tmp$ret$1 = tmp$ret$0;
      return tmp$ret$1;
    }
    var multiParagraph = layoutText(this, constraints, layoutDirection);
    var size = constrain(constraints, IntSize(ceilToIntPx(multiParagraph.width_1), ceilToIntPx(multiParagraph.height_1)));
    return new TextLayoutResult(TextLayoutInput_init_$Create$(this.text_1, this.style_1, this.placeholders_1, this.maxLines_1, this.softWrap_1, this.overflow_1, this.density_1, layoutDirection, this.fontFamilyResolver_1, constraints), multiParagraph, size);
  };
  TextDelegate.prototype.layout$default_3ijkau_k$ = function (constraints, layoutDirection, prevResult, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      prevResult = null;
    return this.layout_k0cayh_k$(constraints, layoutDirection, prevResult);
  };
  TextDelegate.$metadata$ = classMeta('TextDelegate');
  function ceilToIntPx(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp$ret$0;
    // Inline function 'kotlin.math.ceil' call
    tmp$ret$0 = Math.ceil(_this__u8e3s4);
    var tmp0_roundToInt = tmp$ret$0;
    tmp$ret$1 = roundToInt(tmp0_roundToInt);
    return tmp$ret$1;
  }
  function get_cursorAnimationSpec() {
    init_properties_TextFieldCursor_kt_l8750v();
    return cursorAnimationSpec;
  }
  var cursorAnimationSpec;
  function cursorAnimationSpec$lambda($this$keyframes) {
    init_properties_TextFieldCursor_kt_l8750v();
    $this$keyframes.durationMillis_1 = 1000;
    $this$keyframes.at_xtu82d_k$(1.0, 0);
    $this$keyframes.at_xtu82d_k$(1.0, 499);
    $this$keyframes.at_xtu82d_k$(0.0, 500);
    $this$keyframes.at_xtu82d_k$(0.0, 999);
    return Unit_getInstance();
  }
  var properties_initialized_TextFieldCursor_kt_tldnf7;
  function init_properties_TextFieldCursor_kt_l8750v() {
    if (properties_initialized_TextFieldCursor_kt_tldnf7) {
    } else {
      properties_initialized_TextFieldCursor_kt_tldnf7 = true;
      var tmp = keyframes(cursorAnimationSpec$lambda);
      cursorAnimationSpec = infiniteRepeatable$default(tmp, null, null, 6, null);
    }
  }
  function get_EmptyTextReplacement() {
    init_properties_TextFieldDelegate_kt_evrio2();
    return EmptyTextReplacement;
  }
  var EmptyTextReplacement;
  function get_DefaultWidthCharCount() {
    return DefaultWidthCharCount;
  }
  var DefaultWidthCharCount;
  var properties_initialized_TextFieldDelegate_kt_1iol9a;
  function init_properties_TextFieldDelegate_kt_evrio2() {
    if (properties_initialized_TextFieldDelegate_kt_1iol9a) {
    } else {
      properties_initialized_TextFieldDelegate_kt_1iol9a = true;
      EmptyTextReplacement = repeat('H', 10);
    }
  }
  function canReuse(_this__u8e3s4, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    var layoutInput = _this__u8e3s4.layoutInput_1;
    if (_this__u8e3s4.multiParagraph_1.intrinsics_1.get_hasStaleResolvedFonts_tun9ic_k$()) {
      return false;
    }
    if (!((((((((layoutInput.text_1.equals(text) ? layoutInput.style_1.hasSameLayoutAffectingAttributes_nmoc4f_k$(style) : false) ? equals(layoutInput.placeholders_1, placeholders) : false) ? layoutInput.maxLines_1 === maxLines : false) ? layoutInput.softWrap_1 === softWrap : false) ? layoutInput.overflow_1 === overflow : false) ? equals(layoutInput.density_1, density) : false) ? layoutInput.layoutDirection_1.equals(layoutDirection) : false) ? equals(layoutInput.fontFamilyResolver_1, fontFamilyResolver) : false)) {
      return false;
    }
    if (!(_Constraints___get_minWidth__impl__hi9lfi(constraints) === _Constraints___get_minWidth__impl__hi9lfi(layoutInput.constraints_1)))
      return false;
    if (!(softWrap ? true : overflow === Companion_getInstance_16().Ellipsis_1)) {
      return true;
    }
    return _Constraints___get_maxWidth__impl__uuyqc(constraints) === _Constraints___get_maxWidth__impl__uuyqc(layoutInput.constraints_1) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) === _Constraints___get_maxHeight__impl__dt3e8z(layoutInput.constraints_1) : false;
  }
  function get_SNAPSHOTS_INTERVAL_MILLIS() {
    return SNAPSHOTS_INTERVAL_MILLIS;
  }
  var SNAPSHOTS_INTERVAL_MILLIS;
  function get_ValidatingEmptyOffsetMappingIdentity() {
    init_properties_ValidatingOffsetMapping_kt_a8ng8k();
    return ValidatingEmptyOffsetMappingIdentity;
  }
  var ValidatingEmptyOffsetMappingIdentity;
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function _get_originalLength__ld60x8($this) {
    return $this.originalLength_1;
  }
  function _get_transformedLength__kli3z4($this) {
    return $this.transformedLength_1;
  }
  function ValidatingOffsetMapping(delegate, originalLength, transformedLength) {
    this.delegate_1 = delegate;
    this.originalLength_1 = originalLength;
    this.transformedLength_1 = transformedLength;
  }
  ValidatingOffsetMapping.prototype.originalToTransformed_c5d2si_k$ = function (offset) {
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.delegate_1.originalToTransformed_c5d2si_k$(offset);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.ValidatingOffsetMapping.originalToTransformed.<anonymous>' call
    // Inline function 'kotlin.check' call
    var tmp0_check = 0 <= tmp0_also ? tmp0_also <= this.transformedLength_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.ValidatingOffsetMapping.originalToTransformed.<anonymous>.<anonymous>' call
      tmp$ret$0 = 'OffsetMapping.originalToTransformed returned invalid mapping: ' + ('' + offset + ' -> ' + tmp0_also + ' is not in range of transformed text ') + ('[0, ' + this.transformedLength_1 + ']');
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  };
  ValidatingOffsetMapping.prototype.transformedToOriginal_xp4com_k$ = function (offset) {
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.delegate_1.transformedToOriginal_xp4com_k$(offset);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.ValidatingOffsetMapping.transformedToOriginal.<anonymous>' call
    // Inline function 'kotlin.check' call
    var tmp0_check = 0 <= tmp0_also ? tmp0_also <= this.originalLength_1 : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.ValidatingOffsetMapping.transformedToOriginal.<anonymous>.<anonymous>' call
      tmp$ret$0 = 'OffsetMapping.transformedToOriginal returned invalid mapping: ' + ('' + offset + ' -> ' + tmp0_also + ' is not in range of original text ') + ('[0, ' + this.originalLength_1 + ']');
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  };
  ValidatingOffsetMapping.$metadata$ = classMeta('ValidatingOffsetMapping', [OffsetMapping]);
  var properties_initialized_ValidatingOffsetMapping_kt_rllilk;
  function init_properties_ValidatingOffsetMapping_kt_a8ng8k() {
    if (properties_initialized_ValidatingOffsetMapping_kt_rllilk) {
    } else {
      properties_initialized_ValidatingOffsetMapping_kt_rllilk = true;
      ValidatingEmptyOffsetMappingIdentity = new ValidatingOffsetMapping(Companion_getInstance_19().Identity_1, 0, 0);
    }
  }
  function _get_coordinatesCallback__lpbrxt($this) {
    return $this.coordinatesCallback_1;
  }
  function _get_layoutResultCallback__dmyr9b($this) {
    return $this.layoutResultCallback_1;
  }
  function MultiWidgetSelectionDelegate(selectableId, coordinatesCallback, layoutResultCallback) {
    this.selectableId_1 = selectableId;
    this.coordinatesCallback_1 = coordinatesCallback;
    this.layoutResultCallback_1 = layoutResultCallback;
  }
  MultiWidgetSelectionDelegate.prototype.get_selectableId_qduvty_k$ = function () {
    return this.selectableId_1;
  };
  MultiWidgetSelectionDelegate.prototype.updateSelection_xe1zkm_k$ = function (startHandlePosition, endHandlePosition, previousHandlePosition, isStartHandle, containerLayoutCoordinates, adjustment, previousSelection) {
    // Inline function 'kotlin.require' call
    var tmp0_require = previousSelection == null ? true : this.selectableId_1.equals(previousSelection.start_1.selectableId_1) ? this.selectableId_1.equals(previousSelection.end_1.selectableId_1) : false;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.selection.MultiWidgetSelectionDelegate.updateSelection.<anonymous>' call
      tmp$ret$0 = "The given previousSelection doesn't belong to this selectable.";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = this.getLayoutCoordinates_w2x35x_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new Pair(null, false);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var layoutCoordinates = tmp;
    var tmp1_elvis_lhs = this.layoutResultCallback_1();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return new Pair(null, false);
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var textLayoutResult = tmp_0;
    var relativePosition = containerLayoutCoordinates.localPositionOf_l2k1s5_k$(layoutCoordinates, Companion_getInstance_4().Zero_1);
    var localStartPosition = Offset__minus_impl_hoj2c0(startHandlePosition, relativePosition);
    var localEndPosition = Offset__minus_impl_hoj2c0(endHandlePosition, relativePosition);
    var tmp2_safe_receiver = previousHandlePosition;
    var tmp_1;
    var tmp_2 = tmp2_safe_receiver;
    if ((tmp_2 == null ? null : new Offset_0(tmp_2)) == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.foundation.text.selection.MultiWidgetSelectionDelegate.updateSelection.<anonymous>' call
      tmp$ret$1 = Offset__minus_impl_hoj2c0(tmp2_safe_receiver, relativePosition);
      tmp$ret$2 = tmp$ret$1;
      tmp_1 = tmp$ret$2;
    }
    var localPreviousHandlePosition = tmp_1;
    return getTextSelectionInfo(textLayoutResult, localStartPosition, localEndPosition, localPreviousHandlePosition, this.selectableId_1, adjustment, previousSelection, isStartHandle);
  };
  MultiWidgetSelectionDelegate.prototype.getSelectAllSelection_9ejth9_k$ = function () {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var newSelectionRange = TextRange(0, textLayoutResult.layoutInput_1.text_1.get_length_g42xv3_k$());
    return getAssembledSelectionInfo(newSelectionRange, false, this.selectableId_1, textLayoutResult);
  };
  MultiWidgetSelectionDelegate.prototype.getHandlePosition_nbszf7_k$ = function (selection, isStartHandle) {
    if ((isStartHandle ? !selection.start_1.selectableId_1.equals(this.selectableId_1) : false) ? true : !isStartHandle ? !selection.end_1.selectableId_1.equals(this.selectableId_1) : false) {
      return Companion_getInstance_4().Zero_1;
    }
    if (this.getLayoutCoordinates_w2x35x_k$() == null)
      return Companion_getInstance_4().Zero_1;
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_4().Zero_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    return getSelectionHandleCoordinates(textLayoutResult, isStartHandle ? selection.start_1.offset_1 : selection.end_1.offset_1, isStartHandle, selection.handlesCrossed_1);
  };
  MultiWidgetSelectionDelegate.prototype.getLayoutCoordinates_w2x35x_k$ = function () {
    var layoutCoordinates = this.coordinatesCallback_1();
    if (layoutCoordinates == null ? true : !layoutCoordinates.get_isAttached_odsl1l_k$())
      return null;
    return layoutCoordinates;
  };
  MultiWidgetSelectionDelegate.prototype.getText_18q731_k$ = function () {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return AnnotatedString_init_$Create$('', null, null, 6, null);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    return textLayoutResult.layoutInput_1.text_1;
  };
  MultiWidgetSelectionDelegate.prototype.getBoundingBox_urudbk_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_20().Zero_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var textLength = textLayoutResult.layoutInput_1.text_1.get_length_g42xv3_k$();
    if (textLength < 1)
      return Companion_getInstance_20().Zero_1;
    return textLayoutResult.getBoundingBox_urudbk_k$(coerceIn_0(offset, 0, textLength - 1 | 0));
  };
  MultiWidgetSelectionDelegate.prototype.getRangeOfLineContaining_v74j7b_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_21().Zero_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var textLength = textLayoutResult.layoutInput_1.text_1.get_length_g42xv3_k$();
    if (textLength < 1)
      return Companion_getInstance_21().Zero_1;
    var line = textLayoutResult.getLineForOffset_9a3vwv_k$(coerceIn_0(offset, 0, textLength - 1 | 0));
    return TextRange(textLayoutResult.getLineStart_504snr_k$(line), textLayoutResult.getLineEnd_7kqxuy_k$(line, true));
  };
  MultiWidgetSelectionDelegate.prototype.getLineHeight_ba5d5c_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0.0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var textLength = textLayoutResult.layoutInput_1.text_1.get_length_g42xv3_k$();
    if (textLength < 1)
      return 0.0;
    var line = textLayoutResult.getLineForOffset_9a3vwv_k$(coerceIn_0(offset, 0, textLength - 1 | 0));
    return textLayoutResult.multiParagraph_1.getLineHeight_ba5d5c_k$(line);
  };
  MultiWidgetSelectionDelegate.$metadata$ = classMeta('MultiWidgetSelectionDelegate', [Selectable]);
  function getTextSelectionInfo(textLayoutResult, startHandlePosition, endHandlePosition, previousHandlePosition, selectableId, adjustment, previousSelection, isStartHandle) {
    var bounds = new Rect(0.0, 0.0, textLayoutResult.multiParagraph_1.width_1, textLayoutResult.multiParagraph_1.height_1);
    var isSelected = SelectionMode_Vertical_getInstance().isSelected_edatdn_k$(bounds, startHandlePosition, endHandlePosition);
    if (!isSelected) {
      return new Pair(null, false);
    }
    var rawStartHandleOffset = getOffsetForPosition(textLayoutResult, bounds, startHandlePosition);
    var rawEndHandleOffset = getOffsetForPosition(textLayoutResult, bounds, endHandlePosition);
    var tmp0_safe_receiver = previousHandlePosition;
    var tmp;
    var tmp_0 = tmp0_safe_receiver;
    if ((tmp_0 == null ? null : new Offset_0(tmp_0)) == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.selection.getTextSelectionInfo.<anonymous>' call
      tmp$ret$0 = getOffsetForPosition(textLayoutResult, bounds, tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var rawPreviousHandleOffset = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
    var tmp_1 = TextRange(rawStartHandleOffset, rawEndHandleOffset);
    var tmp2_safe_receiver = previousSelection;
    var adjustedTextRange = adjustment.adjust_xh53z6_k$(textLayoutResult, tmp_1, rawPreviousHandleOffset, isStartHandle, tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toTextRange_6wofw5_k$());
    var newSelection = getAssembledSelectionInfo(adjustedTextRange, _TextRange___get_reversed__impl__emhnbm(adjustedTextRange), selectableId, textLayoutResult);
    var selectionUpdated = !newSelection.equals(previousSelection);
    var tmp_2;
    if (isStartHandle) {
      tmp_2 = !(rawStartHandleOffset === rawPreviousHandleOffset);
    } else {
      tmp_2 = !(rawEndHandleOffset === rawPreviousHandleOffset);
    }
    var handleUpdated = tmp_2;
    var consumed = handleUpdated ? true : selectionUpdated;
    return new Pair(newSelection, consumed);
  }
  function getTextSelectionInfo$default(textLayoutResult, startHandlePosition, endHandlePosition, previousHandlePosition, selectableId, adjustment, previousSelection, isStartHandle, $mask0, $handler) {
    if (!(($mask0 & 64) === 0))
      previousSelection = null;
    if (!(($mask0 & 128) === 0))
      isStartHandle = true;
    return getTextSelectionInfo(textLayoutResult, startHandlePosition, endHandlePosition, previousHandlePosition, selectableId, adjustment, previousSelection, isStartHandle);
  }
  function getAssembledSelectionInfo(newSelectionRange, handlesCrossed, selectableId, textLayoutResult) {
    var tmp = new AnchorInfo(textLayoutResult.getBidiRunDirection_dqdnqj_k$(_TextRange___get_start__impl__ww4t90(newSelectionRange)), _TextRange___get_start__impl__ww4t90(newSelectionRange), selectableId);
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = _TextRange___get_end__impl__gcdxpp(newSelectionRange) - 1 | 0;
    tmp$ret$0 = Math.max(tmp0_max, 0);
    return new Selection(tmp, new AnchorInfo(textLayoutResult.getBidiRunDirection_dqdnqj_k$(tmp$ret$0), _TextRange___get_end__impl__gcdxpp(newSelectionRange), selectableId), handlesCrossed);
  }
  function getOffsetForPosition(textLayoutResult, bounds, position) {
    var length = textLayoutResult.layoutInput_1.text_1.get_length_g42xv3_k$();
    var tmp;
    if (bounds.contains_ggguyy_k$(position)) {
      tmp = coerceIn_0(textLayoutResult.getOffsetForPosition_f04xcw_k$(position), 0, length);
    } else {
      var value = SelectionMode_Vertical_getInstance().compare_blje1w_k$(position, bounds);
      tmp = value < 0 ? 0 : length;
    }
    return tmp;
  }
  function Selectable() {
  }
  Selectable.$metadata$ = interfaceMeta('Selectable');
  function Selection_init_$Init$(start, end, handlesCrossed, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      handlesCrossed = false;
    Selection.call($this, start, end, handlesCrossed);
    return $this;
  }
  function Selection_init_$Create$(start, end, handlesCrossed, $mask0, $marker) {
    return Selection_init_$Init$(start, end, handlesCrossed, $mask0, $marker, Object.create(Selection.prototype));
  }
  function AnchorInfo(direction, offset, selectableId) {
    this.direction_1 = direction;
    this.offset_1 = offset;
    this.selectableId_1 = selectableId;
  }
  AnchorInfo.prototype.get_direction_7ekune_k$ = function () {
    return this.direction_1;
  };
  AnchorInfo.prototype.get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  AnchorInfo.prototype.get_selectableId_qduvty_k$ = function () {
    return this.selectableId_1;
  };
  AnchorInfo.prototype.component1_7eebsc_k$ = function () {
    return this.direction_1;
  };
  AnchorInfo.prototype.component2_7eebsb_k$ = function () {
    return this.offset_1;
  };
  AnchorInfo.prototype.component3_7eebsa_k$ = function () {
    return this.selectableId_1;
  };
  AnchorInfo.prototype.copy_b5d964_k$ = function (direction, offset, selectableId) {
    return new AnchorInfo(direction, offset, selectableId);
  };
  AnchorInfo.prototype.copy$default_y8hmdw_k$ = function (direction, offset, selectableId, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      direction = this.direction_1;
    if (!(($mask0 & 2) === 0))
      offset = this.offset_1;
    if (!(($mask0 & 4) === 0))
      selectableId = this.selectableId_1;
    return this.copy_b5d964_k$(direction, offset, selectableId);
  };
  AnchorInfo.prototype.toString = function () {
    return 'AnchorInfo(direction=' + this.direction_1 + ', offset=' + this.offset_1 + ', selectableId=' + toString(this.selectableId_1) + ')';
  };
  AnchorInfo.prototype.hashCode = function () {
    var result = this.direction_1.hashCode();
    result = imul(result, 31) + this.offset_1 | 0;
    result = imul(result, 31) + this.selectableId_1.hashCode() | 0;
    return result;
  };
  AnchorInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnchorInfo))
      return false;
    var tmp0_other_with_cast = other instanceof AnchorInfo ? other : THROW_CCE();
    if (!this.direction_1.equals(tmp0_other_with_cast.direction_1))
      return false;
    if (!(this.offset_1 === tmp0_other_with_cast.offset_1))
      return false;
    if (!this.selectableId_1.equals(tmp0_other_with_cast.selectableId_1))
      return false;
    return true;
  };
  AnchorInfo.$metadata$ = classMeta('AnchorInfo');
  function Selection(start, end, handlesCrossed) {
    this.start_1 = start;
    this.end_1 = end;
    this.handlesCrossed_1 = handlesCrossed;
  }
  Selection.prototype.get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  Selection.prototype.get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  Selection.prototype.get_handlesCrossed_5utwpv_k$ = function () {
    return this.handlesCrossed_1;
  };
  Selection.prototype.merge_ev98bv_k$ = function (other) {
    if (other == null)
      return this;
    var selection = this;
    var tmp;
    if (this.handlesCrossed_1) {
      var tmp_0 = selection;
      tmp = tmp_0.copy$default_bazjmu_k$(other.start_1, null, false, 6, null);
    } else {
      var tmp_1 = selection;
      tmp = tmp_1.copy$default_bazjmu_k$(null, other.end_1, false, 5, null);
    }
    selection = tmp;
    return selection;
  };
  Selection.prototype.toTextRange_6wofw5_k$ = function () {
    return TextRange(this.start_1.offset_1, this.end_1.offset_1);
  };
  Selection.prototype.component1_7eebsc_k$ = function () {
    return this.start_1;
  };
  Selection.prototype.component2_7eebsb_k$ = function () {
    return this.end_1;
  };
  Selection.prototype.component3_7eebsa_k$ = function () {
    return this.handlesCrossed_1;
  };
  Selection.prototype.copy_fksu9h_k$ = function (start, end, handlesCrossed) {
    return new Selection(start, end, handlesCrossed);
  };
  Selection.prototype.copy$default_bazjmu_k$ = function (start, end, handlesCrossed, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = this.start_1;
    if (!(($mask0 & 2) === 0))
      end = this.end_1;
    if (!(($mask0 & 4) === 0))
      handlesCrossed = this.handlesCrossed_1;
    return this.copy_fksu9h_k$(start, end, handlesCrossed);
  };
  Selection.prototype.toString = function () {
    return 'Selection(start=' + this.start_1 + ', end=' + this.end_1 + ', handlesCrossed=' + this.handlesCrossed_1 + ')';
  };
  Selection.prototype.hashCode = function () {
    var result = this.start_1.hashCode();
    result = imul(result, 31) + this.end_1.hashCode() | 0;
    result = imul(result, 31) + (this.handlesCrossed_1 | 0) | 0;
    return result;
  };
  Selection.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Selection))
      return false;
    var tmp0_other_with_cast = other instanceof Selection ? other : THROW_CCE();
    if (!this.start_1.equals(tmp0_other_with_cast.start_1))
      return false;
    if (!this.end_1.equals(tmp0_other_with_cast.end_1))
      return false;
    if (!(this.handlesCrossed_1 === tmp0_other_with_cast.handlesCrossed_1))
      return false;
    return true;
  };
  Selection.$metadata$ = classMeta('Selection');
  function TextLayoutResult$getWordBoundary$ref($boundThis) {
    var l = function (p0) {
      return new TextRange_0($boundThis.getWordBoundary_qx0177_k$(p0));
    };
    l.callableName = 'getWordBoundary';
    return l;
  }
  function getParagraphBoundary$ref($boundThis) {
    var l = function (p0) {
      return new TextRange_0(getParagraphBoundary($boundThis, p0));
    };
    l.callableName = 'getParagraphBoundary';
    return l;
  }
  function updateSelectionBoundary($this, textLayoutResult, newRawOffset, previousRawOffset, previousAdjustedOffset, otherBoundaryOffset, isStart, isReversed) {
    if (newRawOffset === previousRawOffset) {
      return previousAdjustedOffset;
    }
    var currentLine = textLayoutResult.getLineForOffset_9a3vwv_k$(newRawOffset);
    var previousLine = textLayoutResult.getLineForOffset_9a3vwv_k$(previousAdjustedOffset);
    if (!(currentLine === previousLine)) {
      return snapToWordBoundary($this, textLayoutResult, newRawOffset, currentLine, otherBoundaryOffset, isStart, isReversed);
    }
    var isExpanding_0 = isExpanding($this, newRawOffset, previousRawOffset, isStart, isReversed);
    if (!isExpanding_0) {
      return newRawOffset;
    }
    if (!isAtWordBoundary(textLayoutResult, $this, previousAdjustedOffset)) {
      return newRawOffset;
    }
    return snapToWordBoundary($this, textLayoutResult, newRawOffset, currentLine, otherBoundaryOffset, isStart, isReversed);
  }
  function snapToWordBoundary($this, textLayoutResult, newRawOffset, currentLine, otherBoundaryOffset, isStart, isReversed) {
    var wordBoundary = textLayoutResult.getWordBoundary_qx0177_k$(newRawOffset);
    var wordStartLine = textLayoutResult.getLineForOffset_9a3vwv_k$(_TextRange___get_start__impl__ww4t90(wordBoundary));
    var tmp;
    if (wordStartLine === currentLine) {
      tmp = _TextRange___get_start__impl__ww4t90(wordBoundary);
    } else {
      tmp = textLayoutResult.getLineStart_504snr_k$(currentLine);
    }
    var start = tmp;
    var wordEndLine = textLayoutResult.getLineForOffset_9a3vwv_k$(_TextRange___get_end__impl__gcdxpp(wordBoundary));
    var tmp_0;
    if (wordEndLine === currentLine) {
      tmp_0 = _TextRange___get_end__impl__gcdxpp(wordBoundary);
    } else {
      tmp_0 = textLayoutResult.getLineEnd$default_prmziz_k$(currentLine, false, 2, null);
    }
    var end = tmp_0;
    if (start === otherBoundaryOffset) {
      return end;
    }
    if (end === otherBoundaryOffset) {
      return start;
    }
    var threshold = (start + end | 0) / 2 | 0;
    var tmp_1;
    if (!!(isStart ^ isReversed)) {
      var tmp_2;
      if (newRawOffset <= threshold) {
        tmp_2 = start;
      } else {
        tmp_2 = end;
      }
      tmp_1 = tmp_2;
    } else {
      var tmp_3;
      if (newRawOffset >= threshold) {
        tmp_3 = end;
      } else {
        tmp_3 = start;
      }
      tmp_1 = tmp_3;
    }
    return tmp_1;
  }
  function isAtWordBoundary(_this__u8e3s4, $this, offset) {
    var wordBoundary = _this__u8e3s4.getWordBoundary_qx0177_k$(offset);
    return offset === _TextRange___get_start__impl__ww4t90(wordBoundary) ? true : offset === _TextRange___get_end__impl__gcdxpp(wordBoundary);
  }
  function isExpanding($this, newRawOffset, previousRawOffset, isStart, previousReversed) {
    if (previousRawOffset === -1) {
      return true;
    }
    if (newRawOffset === previousRawOffset) {
      return false;
    }
    var tmp;
    if (!!(isStart ^ previousReversed)) {
      tmp = newRawOffset < previousRawOffset;
    } else {
      tmp = newRawOffset > previousRawOffset;
    }
    return tmp;
  }
  function adjustByBoundary($this, textLayoutResult, newRawSelection, boundaryFun) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = textLayoutResult.layoutInput_1.text_1;
    tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
    if (tmp$ret$0) {
      return Companion_getInstance_21().Zero_1;
    }
    var maxOffset = get_lastIndex(textLayoutResult.layoutInput_1.text_1);
    var startBoundary = boundaryFun(coerceIn_0(_TextRange___get_start__impl__ww4t90(newRawSelection), 0, maxOffset)).packedValue_1;
    var endBoundary = boundaryFun(coerceIn_0(_TextRange___get_end__impl__gcdxpp(newRawSelection), 0, maxOffset)).packedValue_1;
    var start = _TextRange___get_reversed__impl__emhnbm(newRawSelection) ? _TextRange___get_end__impl__gcdxpp(startBoundary) : _TextRange___get_start__impl__ww4t90(startBoundary);
    var end = _TextRange___get_reversed__impl__emhnbm(newRawSelection) ? _TextRange___get_start__impl__ww4t90(endBoundary) : _TextRange___get_end__impl__gcdxpp(endBoundary);
    return TextRange(start, end);
  }
  function SelectionAdjustment$Companion$None$1() {
  }
  SelectionAdjustment$Companion$None$1.prototype.adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    return newRawSelectionRange;
  };
  SelectionAdjustment$Companion$None$1.$metadata$ = classMeta(undefined, [SelectionAdjustment]);
  function SelectionAdjustment$Companion$Character$1() {
  }
  SelectionAdjustment$Companion$Character$1.prototype.adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    var tmp;
    if (_TextRange___get_collapsed__impl__cilesp(newRawSelectionRange)) {
      var tmp0_safe_receiver = previousSelectionRange;
      var tmp_0;
      var tmp_1 = tmp0_safe_receiver;
      if ((tmp_1 == null ? null : new TextRange_0(tmp_1)) == null) {
        tmp_0 = null;
      } else {
        tmp_0 = _TextRange___get_reversed__impl__emhnbm(tmp0_safe_receiver);
      }
      var tmp1_elvis_lhs = tmp_0;
      var previousHandlesCrossed = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
      tmp = ensureAtLeastOneChar(_TextRange___get_start__impl__ww4t90(newRawSelectionRange), get_lastIndex(textLayoutResult.layoutInput_1.text_1), isStartHandle, previousHandlesCrossed);
    } else {
      tmp = newRawSelectionRange;
    }
    return tmp;
  };
  SelectionAdjustment$Companion$Character$1.$metadata$ = classMeta(undefined, [SelectionAdjustment]);
  function SelectionAdjustment$Companion$Word$1() {
  }
  SelectionAdjustment$Companion$Word$1.prototype.adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    var tmp = Companion_getInstance_25();
    return adjustByBoundary(tmp, textLayoutResult, newRawSelectionRange, TextLayoutResult$getWordBoundary$ref(textLayoutResult));
  };
  SelectionAdjustment$Companion$Word$1.$metadata$ = classMeta(undefined, [SelectionAdjustment]);
  function SelectionAdjustment$Companion$Paragraph$1() {
  }
  SelectionAdjustment$Companion$Paragraph$1.prototype.adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    var boundaryFun = getParagraphBoundary$ref(textLayoutResult.layoutInput_1.text_1);
    return adjustByBoundary(Companion_getInstance_25(), textLayoutResult, newRawSelectionRange, boundaryFun);
  };
  SelectionAdjustment$Companion$Paragraph$1.$metadata$ = classMeta(undefined, [SelectionAdjustment]);
  function SelectionAdjustment$Companion$CharacterWithWordAccelerate$1() {
  }
  SelectionAdjustment$Companion$CharacterWithWordAccelerate$1.prototype.adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    var tmp = previousSelectionRange;
    if ((tmp == null ? null : new TextRange_0(tmp)) == null) {
      return Companion_getInstance_25().Word_1.adjust_xh53z6_k$(textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange);
    }
    if (_TextRange___get_collapsed__impl__cilesp(newRawSelectionRange)) {
      return ensureAtLeastOneChar(_TextRange___get_start__impl__ww4t90(newRawSelectionRange), get_lastIndex(textLayoutResult.layoutInput_1.text_1), isStartHandle, _TextRange___get_reversed__impl__emhnbm(previousSelectionRange));
    }
    var start;
    var end;
    if (isStartHandle) {
      start = updateSelectionBoundary(this, textLayoutResult, _TextRange___get_start__impl__ww4t90(newRawSelectionRange), previousHandleOffset, _TextRange___get_start__impl__ww4t90(previousSelectionRange), _TextRange___get_end__impl__gcdxpp(newRawSelectionRange), true, _TextRange___get_reversed__impl__emhnbm(newRawSelectionRange));
      end = _TextRange___get_end__impl__gcdxpp(newRawSelectionRange);
    } else {
      start = _TextRange___get_start__impl__ww4t90(newRawSelectionRange);
      end = updateSelectionBoundary(this, textLayoutResult, _TextRange___get_end__impl__gcdxpp(newRawSelectionRange), previousHandleOffset, _TextRange___get_end__impl__gcdxpp(previousSelectionRange), _TextRange___get_start__impl__ww4t90(newRawSelectionRange), false, _TextRange___get_reversed__impl__emhnbm(newRawSelectionRange));
    }
    return TextRange(start, end);
  };
  SelectionAdjustment$Companion$CharacterWithWordAccelerate$1.$metadata$ = classMeta(undefined, [SelectionAdjustment]);
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.None_1 = new SelectionAdjustment$Companion$None$1();
    var tmp_0 = this;
    tmp_0.Character_1 = new SelectionAdjustment$Companion$Character$1();
    var tmp_1 = this;
    tmp_1.Word_1 = new SelectionAdjustment$Companion$Word$1();
    var tmp_2 = this;
    tmp_2.Paragraph_1 = new SelectionAdjustment$Companion$Paragraph$1();
    var tmp_3 = this;
    tmp_3.CharacterWithWordAccelerate_1 = new SelectionAdjustment$Companion$CharacterWithWordAccelerate$1();
  }
  Companion_0.prototype.get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  Companion_0.prototype.get_Character_3i744g_k$ = function () {
    return this.Character_1;
  };
  Companion_0.prototype.get_Word_wockfn_k$ = function () {
    return this.Word_1;
  };
  Companion_0.prototype.get_Paragraph_2v2rol_k$ = function () {
    return this.Paragraph_1;
  };
  Companion_0.prototype.get_CharacterWithWordAccelerate_b1h3l9_k$ = function () {
    return this.CharacterWithWordAccelerate_1;
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_25() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function SelectionAdjustment() {
    Companion_getInstance_25();
  }
  SelectionAdjustment.$metadata$ = interfaceMeta('SelectionAdjustment');
  function ensureAtLeastOneChar(offset, lastOffset, isStartHandle, previousHandlesCrossed) {
    if (lastOffset === 0)
      return TextRange(offset, offset);
    if (offset === 0) {
      var tmp;
      if (isStartHandle) {
        tmp = TextRange(1, 0);
      } else {
        tmp = TextRange(0, 1);
      }
      return tmp;
    }
    if (offset === lastOffset) {
      var tmp_0;
      if (isStartHandle) {
        tmp_0 = TextRange(lastOffset - 1 | 0, lastOffset);
      } else {
        tmp_0 = TextRange(lastOffset, lastOffset - 1 | 0);
      }
      return tmp_0;
    }
    var tmp_1;
    if (isStartHandle) {
      var tmp_2;
      if (!previousHandlesCrossed) {
        tmp_2 = TextRange(offset - 1 | 0, offset);
      } else {
        tmp_2 = TextRange(offset + 1 | 0, offset);
      }
      tmp_1 = tmp_2;
    } else {
      var tmp_3;
      if (!previousHandlesCrossed) {
        tmp_3 = TextRange(offset, offset + 1 | 0);
      } else {
        tmp_3 = TextRange(offset, offset - 1 | 0);
      }
      tmp_1 = tmp_3;
    }
    return tmp_1;
  }
  function get_HandleWidth() {
    init_properties_SelectionHandles_kt_7i82cl();
    return HandleWidth;
  }
  var HandleWidth;
  function get_HandleHeight() {
    init_properties_SelectionHandles_kt_7i82cl();
    return HandleHeight;
  }
  var HandleHeight;
  function get_SelectionHandleInfoKey() {
    init_properties_SelectionHandles_kt_7i82cl();
    return SelectionHandleInfoKey;
  }
  var SelectionHandleInfoKey;
  function SelectionHandleInfo(handle, position) {
    this.handle_1 = handle;
    this.position_1 = position;
  }
  SelectionHandleInfo.prototype.get_handle_e5p7ht_k$ = function () {
    return this.handle_1;
  };
  SelectionHandleInfo.prototype.get_position_kw508q_k$ = function () {
    return this.position_1;
  };
  SelectionHandleInfo.prototype.component1_7eebsc_k$ = function () {
    return this.handle_1;
  };
  SelectionHandleInfo.prototype.component2_mooz9z_k$ = function () {
    return this.position_1;
  };
  SelectionHandleInfo.prototype.copy_s35jy4_k$ = function (handle, position) {
    return new SelectionHandleInfo(handle, position);
  };
  SelectionHandleInfo.prototype.copy$default_xvq7rd_k$ = function (handle, position, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      handle = this.handle_1;
    if (!(($mask0 & 2) === 0))
      position = this.position_1;
    return this.copy_s35jy4_k$(handle, position);
  };
  SelectionHandleInfo.prototype.toString = function () {
    return 'SelectionHandleInfo(handle=' + this.handle_1 + ', position=' + new Offset_0(this.position_1) + ')';
  };
  SelectionHandleInfo.prototype.hashCode = function () {
    var result = this.handle_1.hashCode();
    result = imul(result, 31) + Offset__hashCode_impl_hbql41(this.position_1) | 0;
    return result;
  };
  SelectionHandleInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectionHandleInfo))
      return false;
    var tmp0_other_with_cast = other instanceof SelectionHandleInfo ? other : THROW_CCE();
    if (!this.handle_1.equals(tmp0_other_with_cast.handle_1))
      return false;
    if (!equals(this.position_1, tmp0_other_with_cast.position_1))
      return false;
    return true;
  };
  SelectionHandleInfo.$metadata$ = classMeta('SelectionHandleInfo');
  var properties_initialized_SelectionHandles_kt_h9mb7j;
  function init_properties_SelectionHandles_kt_7i82cl() {
    if (properties_initialized_SelectionHandles_kt_h9mb7j) {
    } else {
      properties_initialized_SelectionHandles_kt_h9mb7j = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(25);
      HandleWidth = tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0_0 = _Dp___init__impl__ms3zkb(25);
      HandleHeight = tmp$ret$0_0;
      SelectionHandleInfoKey = SemanticsPropertyKey_init_$Create$('SelectionHandleInfo', null, 2, null);
    }
  }
  function get_UnspecifiedAnimationVector2D() {
    init_properties_SelectionMagnifier_kt_pdth6g();
    return UnspecifiedAnimationVector2D;
  }
  var UnspecifiedAnimationVector2D;
  function get_UnspecifiedSafeOffsetVectorConverter() {
    init_properties_SelectionMagnifier_kt_pdth6g();
    return UnspecifiedSafeOffsetVectorConverter;
  }
  var UnspecifiedSafeOffsetVectorConverter;
  function get_OffsetDisplacementThreshold() {
    init_properties_SelectionMagnifier_kt_pdth6g();
    return OffsetDisplacementThreshold;
  }
  var OffsetDisplacementThreshold;
  function get_MagnifierSpringSpec() {
    init_properties_SelectionMagnifier_kt_pdth6g();
    return MagnifierSpringSpec;
  }
  var MagnifierSpringSpec;
  function UnspecifiedSafeOffsetVectorConverter$lambda(it) {
    init_properties_SelectionMagnifier_kt_pdth6g();
    var tmp;
    if (get_isSpecified(it.packedValue_1)) {
      tmp = new AnimationVector2D(_Offset___get_x__impl__xvi35n(it.packedValue_1), _Offset___get_y__impl__8bzhra(it.packedValue_1));
    } else {
      tmp = get_UnspecifiedAnimationVector2D();
    }
    return tmp;
  }
  function UnspecifiedSafeOffsetVectorConverter$lambda_0(it) {
    init_properties_SelectionMagnifier_kt_pdth6g();
    return new Offset_0(Offset(it.v1__1, it.v2__1));
  }
  var properties_initialized_SelectionMagnifier_kt_dgnx1w;
  function init_properties_SelectionMagnifier_kt_pdth6g() {
    if (properties_initialized_SelectionMagnifier_kt_dgnx1w) {
    } else {
      properties_initialized_SelectionMagnifier_kt_dgnx1w = true;
      FloatCompanionObject_getInstance();
      FloatCompanionObject_getInstance();
      UnspecifiedAnimationVector2D = new AnimationVector2D(NaN, NaN);
      var tmp = UnspecifiedSafeOffsetVectorConverter$lambda;
      UnspecifiedSafeOffsetVectorConverter = TwoWayConverter(tmp, UnspecifiedSafeOffsetVectorConverter$lambda_0);
      Spring_getInstance();
      Spring_getInstance();
      OffsetDisplacementThreshold = Offset(0.01, 0.01);
      MagnifierSpringSpec = SpringSpec_init_$Create$(0.0, 0.0, new Offset_0(get_OffsetDisplacementThreshold()), 3, null);
    }
  }
  function SelectionMode$Vertical() {
    SelectionMode.call(this, 'Vertical', 0);
    SelectionMode_Vertical_instance = this;
  }
  SelectionMode$Vertical.prototype.compare_blje1w_k$ = function (position, bounds) {
    if (bounds.contains_ggguyy_k$(position))
      return 0;
    if (_Offset___get_y__impl__8bzhra(position) < bounds.top_1)
      return -1;
    if (_Offset___get_x__impl__xvi35n(position) < bounds.left_1 ? _Offset___get_y__impl__8bzhra(position) < bounds.bottom_1 : false)
      return -1;
    return 1;
  };
  SelectionMode$Vertical.$metadata$ = classMeta('Vertical', undefined, undefined, undefined, undefined, SelectionMode.prototype);
  var SelectionMode_Vertical_instance;
  function SelectionMode$Horizontal() {
    SelectionMode.call(this, 'Horizontal', 1);
    SelectionMode_Horizontal_instance = this;
  }
  SelectionMode$Horizontal.prototype.compare_blje1w_k$ = function (position, bounds) {
    if (bounds.contains_ggguyy_k$(position))
      return 0;
    if (_Offset___get_x__impl__xvi35n(position) < bounds.left_1)
      return -1;
    if (_Offset___get_y__impl__8bzhra(position) < bounds.top_1 ? _Offset___get_x__impl__xvi35n(position) < bounds.right_1 : false)
      return -1;
    return 1;
  };
  SelectionMode$Horizontal.$metadata$ = classMeta('Horizontal', undefined, undefined, undefined, undefined, SelectionMode.prototype);
  var SelectionMode_Horizontal_instance;
  function values_3() {
    return [SelectionMode_Vertical_getInstance(), SelectionMode_Horizontal_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'Vertical':
        return SelectionMode_Vertical_getInstance();
      case 'Horizontal':
        return SelectionMode_Horizontal_getInstance();
      default:
        SelectionMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var SelectionMode_entriesInitialized;
  function SelectionMode_initEntries() {
    if (SelectionMode_entriesInitialized)
      return Unit_getInstance();
    SelectionMode_entriesInitialized = true;
    SelectionMode_Vertical_instance = new SelectionMode$Vertical();
    SelectionMode_Horizontal_instance = new SelectionMode$Horizontal();
  }
  function SelectionMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  SelectionMode.prototype.isSelected_edatdn_k$ = function (bounds, start, end) {
    if (bounds.contains_ggguyy_k$(start) ? true : bounds.contains_ggguyy_k$(end)) {
      return true;
    }
    var compareStart = this.compare_blje1w_k$(start, bounds);
    var compareEnd = this.compare_blje1w_k$(end, bounds);
    return !!(compareStart > 0 ^ compareEnd > 0);
  };
  SelectionMode.$metadata$ = classMeta('SelectionMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function SelectionMode_Vertical_getInstance() {
    SelectionMode_initEntries();
    return SelectionMode_Vertical_instance;
  }
  function SelectionMode_Horizontal_getInstance() {
    SelectionMode_initEntries();
    return SelectionMode_Horizontal_instance;
  }
  function get_LocalSelectionRegistrar() {
    init_properties_SelectionRegistrar_kt_gks7zt();
    return LocalSelectionRegistrar;
  }
  var LocalSelectionRegistrar;
  function Companion_1() {
    Companion_instance_1 = this;
    this.InvalidSelectableId_1 = new Long(0, 0);
  }
  Companion_1.prototype.get_InvalidSelectableId_nbfra9_k$ = function () {
    return this.InvalidSelectableId_1;
  };
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_26() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function SelectionRegistrar() {
    Companion_getInstance_26();
  }
  SelectionRegistrar.$metadata$ = interfaceMeta('SelectionRegistrar');
  function hasSelection(_this__u8e3s4, selectableId) {
    init_properties_SelectionRegistrar_kt_gks7zt();
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_subselections_i6sdj2_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.containsKey_wgk31w_k$(selectableId);
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  }
  function LocalSelectionRegistrar$lambda() {
    init_properties_SelectionRegistrar_kt_gks7zt();
    return null;
  }
  var properties_initialized_SelectionRegistrar_kt_shxs4d;
  function init_properties_SelectionRegistrar_kt_gks7zt() {
    if (properties_initialized_SelectionRegistrar_kt_shxs4d) {
    } else {
      properties_initialized_SelectionRegistrar_kt_shxs4d = true;
      LocalSelectionRegistrar = compositionLocalOf$default(null, LocalSelectionRegistrar$lambda, 1, null);
    }
  }
  function get_LocalTextSelectionColors() {
    init_properties_TextSelectionColors_kt_njycyt();
    return LocalTextSelectionColors;
  }
  var LocalTextSelectionColors;
  function TextSelectionColors(handleColor, backgroundColor) {
    this.handleColor_1 = handleColor;
    this.backgroundColor_1 = backgroundColor;
  }
  TextSelectionColors.prototype.get_handleColor_euxoyx_k$ = function () {
    return this.handleColor_1;
  };
  TextSelectionColors.prototype.get_backgroundColor_5dhxap_k$ = function () {
    return this.backgroundColor_1;
  };
  TextSelectionColors.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSelectionColors))
      return false;
    if (!equals(this.handleColor_1, other.handleColor_1))
      return false;
    if (!equals(this.backgroundColor_1, other.backgroundColor_1))
      return false;
    return true;
  };
  TextSelectionColors.prototype.hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.handleColor_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.backgroundColor_1) | 0;
    return result;
  };
  TextSelectionColors.prototype.toString = function () {
    return 'SelectionColors(selectionHandleColor=' + new Color(this.handleColor_1) + ', ' + ('selectionBackgroundColor=' + new Color(this.backgroundColor_1) + ')');
  };
  TextSelectionColors.$metadata$ = classMeta('TextSelectionColors');
  function LocalTextSelectionColors$lambda() {
    init_properties_TextSelectionColors_kt_njycyt();
    return get_DefaultTextSelectionColors();
  }
  var properties_initialized_TextSelectionColors_kt_x2xmyn;
  function init_properties_TextSelectionColors_kt_njycyt() {
    if (properties_initialized_TextSelectionColors_kt_x2xmyn) {
    } else {
      properties_initialized_TextSelectionColors_kt_x2xmyn = true;
      LocalTextSelectionColors = compositionLocalOf$default(null, LocalTextSelectionColors$lambda, 1, null);
    }
  }
  function getSelectionHandleCoordinates(textLayoutResult, offset, isStart, areHandlesCrossed) {
    var line = textLayoutResult.getLineForOffset_9a3vwv_k$(offset);
    var x = getHorizontalPosition(textLayoutResult, offset, isStart, areHandlesCrossed);
    var y = textLayoutResult.getLineBottom_spjtf0_k$(line);
    return Offset(x, y);
  }
  function getHorizontalPosition(_this__u8e3s4, offset, isStart, areHandlesCrossed) {
    var tmp;
    if ((isStart ? !areHandlesCrossed : false) ? true : !isStart ? areHandlesCrossed : false) {
      tmp = offset;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.math.max' call
      var tmp0_max = offset - 1 | 0;
      tmp$ret$0 = Math.max(tmp0_max, 0);
      tmp = tmp$ret$0;
    }
    var offsetToCheck = tmp;
    var bidiRunDirection = _this__u8e3s4.getBidiRunDirection_dqdnqj_k$(offsetToCheck);
    var paragraphDirection = _this__u8e3s4.getParagraphDirection_x8sft2_k$(offset);
    return _this__u8e3s4.getHorizontalPosition_b8vvic_k$(offset, bidiRunDirection.equals(paragraphDirection));
  }
  function MouseSelectionObserver() {
  }
  MouseSelectionObserver.$metadata$ = interfaceMeta('MouseSelectionObserver');
  function mouseSelectionDetector(_this__u8e3s4, observer, $cont) {
    return forEachGesture(_this__u8e3s4, mouseSelectionDetector$slambda_0(observer, null), $cont);
  }
  function _get_viewConfiguration__gn2pk0($this) {
    return $this.viewConfiguration_1;
  }
  function ClicksCounter(viewConfiguration) {
    this.viewConfiguration_1 = viewConfiguration;
    this.clicks_1 = 0;
    this.prevClick_1 = null;
  }
  ClicksCounter.prototype.set_clicks_ln1cqg_k$ = function (_set____db54di) {
    this.clicks_1 = _set____db54di;
  };
  ClicksCounter.prototype.get_clicks_byfmd0_k$ = function () {
    return this.clicks_1;
  };
  ClicksCounter.prototype.set_prevClick_hntiho_k$ = function (_set____db54di) {
    this.prevClick_1 = _set____db54di;
  };
  ClicksCounter.prototype.get_prevClick_5tza1g_k$ = function () {
    return this.prevClick_1;
  };
  ClicksCounter.prototype.update_4lz0mo_k$ = function (event) {
    var currentPrevClick = this.prevClick_1;
    var newClick = event.changes_1.get_fkrdnv_k$(0);
    if ((!(currentPrevClick == null) ? this.timeIsTolerable_kkfmyn_k$(currentPrevClick, newClick) : false) ? this.positionIsTolerable_1cydwb_k$(currentPrevClick, newClick) : false) {
      var tmp0_this = this;
      tmp0_this.clicks_1 = tmp0_this.clicks_1 + 1 | 0;
    } else {
      this.clicks_1 = 1;
    }
    this.prevClick_1 = newClick;
  };
  ClicksCounter.prototype.timeIsTolerable_kkfmyn_k$ = function (prevClick, newClick) {
    var diff = newClick.uptimeMillis_1.minus_llf5ei_k$(prevClick.uptimeMillis_1);
    return diff.compareTo_n4fqi2_k$(this.viewConfiguration_1.get_doubleTapTimeoutMillis_mlgmxq_k$()) < 0;
  };
  ClicksCounter.prototype.positionIsTolerable_1cydwb_k$ = function (prevClick, newClick) {
    var diff = Offset__minus_impl_hoj2c0(newClick.position_1, prevClick.position_1);
    return Offset__getDistance_impl_pclvxn(diff) < 100.0;
  };
  ClicksCounter.$metadata$ = classMeta('ClicksCounter');
  function awaitMouseEventDown(_this__u8e3s4, $cont) {
    var tmp = new $awaitMouseEventDownCOROUTINE$24(_this__u8e3s4, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function get_ClicksSlop() {
    return ClicksSlop;
  }
  var ClicksSlop;
  function mouseSelectionDetector$slambda$slambda$lambda($observer) {
    return function (it) {
      var tmp;
      if ($observer.onExtendDrag_m0cr7o_k$(it.position_1)) {
        it.consume_spbz2t_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function mouseSelectionDetector$slambda$slambda$lambda_0($observer, $selectionMode) {
    return function (it) {
      var tmp;
      if ($observer.onDrag_4lf411_k$(it.position_1, $selectionMode)) {
        it.consume_spbz2t_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function mouseSelectionDetector$slambda$slambda($observer, resultContinuation) {
    this.$observer_1 = $observer;
    CoroutineImpl.call(this, resultContinuation);
  }
  mouseSelectionDetector$slambda$slambda.prototype.invoke_6kuihv_k$ = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.create_699gxy_k$($this$awaitPointerEventScope, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  mouseSelectionDetector$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  mouseSelectionDetector$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 8;
            this.clicksCounter0__1 = new ClicksCounter(this.$this$awaitPointerEventScope_1.get_viewConfiguration_qgdaco_k$());
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.state_1 = 9;
              continue $sm;
            }

            this.state_1 = 2;
            suspendResult = awaitMouseEventDown(this.$this$awaitPointerEventScope_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.down1__1 = suspendResult;
            this.clicksCounter0__1.update_4lz0mo_k$(this.down1__1);
            this.downChange2__1 = this.down1__1.changes_1.get_fkrdnv_k$(0);
            if (get_isShiftPressed_0(this.down1__1.keyboardModifiers_1)) {
              this.started3__1 = this.$observer_1.onExtend_dx8a28_k$(this.downChange2__1.position_1);
              if (this.started3__1) {
                this.downChange2__1.consume_spbz2t_k$();
                this.state_1 = 5;
                suspendResult = drag_0(this.$this$awaitPointerEventScope_1, this.downChange2__1.id_1, mouseSelectionDetector$slambda$slambda$lambda(this.$observer_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.state_1 = 6;
                continue $sm;
              }
            } else {
              var tmp_0 = this;
              var tmp0_subject = this.clicksCounter0__1.clicks_1;
              switch (tmp0_subject) {
                case 1:
                  tmp_0.selectionMode4__1 = Companion_getInstance_25().None_1;
                  break;
                case 2:
                  tmp_0.selectionMode4__1 = Companion_getInstance_25().Word_1;
                  break;
                default:
                  tmp_0.selectionMode4__1 = Companion_getInstance_25().Paragraph_1;
                  break;
              }
              this.started5__1 = this.$observer_1.onStart_i02yuj_k$(this.downChange2__1.position_1, this.selectionMode4__1);
              if (this.started5__1) {
                this.downChange2__1.consume_spbz2t_k$();
                this.state_1 = 3;
                suspendResult = drag_0(this.$this$awaitPointerEventScope_1, this.downChange2__1.id_1, mouseSelectionDetector$slambda$slambda$lambda_0(this.$observer_1, this.selectionMode4__1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.state_1 = 4;
                continue $sm;
              }
            }

            break;
          case 3:
            ;
            this.state_1 = 4;
            continue $sm;
          case 4:
            this.state_1 = 7;
            continue $sm;
          case 5:
            ;
            this.state_1 = 6;
            continue $sm;
          case 6:
            this.state_1 = 7;
            continue $sm;
          case 7:
            this.state_1 = 1;
            continue $sm;
          case 8:
            throw this.exception_1;
          case 9:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.exceptionState_1 === 8) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  mouseSelectionDetector$slambda$slambda.prototype.create_699gxy_k$ = function ($this$awaitPointerEventScope, completion) {
    var i = new mouseSelectionDetector$slambda$slambda(this.$observer_1, completion);
    i.$this$awaitPointerEventScope_1 = $this$awaitPointerEventScope;
    return i;
  };
  mouseSelectionDetector$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  mouseSelectionDetector$slambda$slambda.$metadata$ = classMeta('mouseSelectionDetector$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function mouseSelectionDetector$slambda$slambda_0($observer, resultContinuation) {
    var i = new mouseSelectionDetector$slambda$slambda($observer, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.invoke_6kuihv_k$($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function mouseSelectionDetector$slambda($observer, resultContinuation) {
    this.$observer_1 = $observer;
    CoroutineImpl.call(this, resultContinuation);
  }
  mouseSelectionDetector$slambda.prototype.invoke_dycxzz_k$ = function ($this$forEachGesture, $cont) {
    var tmp = this.create_9k90ga_k$($this$forEachGesture, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  mouseSelectionDetector$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  mouseSelectionDetector$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = this.$this$forEachGesture_1.awaitPointerEventScope_w0i122_k$(mouseSelectionDetector$slambda$slambda_0(this.$observer_1, null), this);
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
  mouseSelectionDetector$slambda.prototype.create_9k90ga_k$ = function ($this$forEachGesture, completion) {
    var i = new mouseSelectionDetector$slambda(this.$observer_1, completion);
    i.$this$forEachGesture_1 = $this$forEachGesture;
    return i;
  };
  mouseSelectionDetector$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  mouseSelectionDetector$slambda.$metadata$ = classMeta('mouseSelectionDetector$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function mouseSelectionDetector$slambda_0($observer, resultContinuation) {
    var i = new mouseSelectionDetector$slambda($observer, resultContinuation);
    var l = function ($this$forEachGesture, $cont) {
      return i.invoke_dycxzz_k$($this$forEachGesture, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $awaitMouseEventDownCOROUTINE$24(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $awaitMouseEventDownCOROUTINE$24.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            this.state_1 = 1;
            continue $sm;
          case 1:
            this.state_1 = 2;
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.event0__1 = suspendResult;
            var tmp_0;
            if (get_isPrimaryPressed(this.event0__1.buttons_1)) {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp0_fastAll = this.event0__1.changes_1;
                var inductionVariable = 0;
                var last = tmp0_fastAll.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable <= last)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    var item = tmp0_fastAll.get_fkrdnv_k$(index);
                    if (!(item.type_1 === Companion_getInstance_11().Mouse_1 ? changedToDown(item) : false)) {
                      tmp$ret$0 = false;
                      break l$ret$1;
                    }
                  }
                   while (inductionVariable <= last);
                tmp$ret$0 = true;
              }
               while (false);
              tmp_0 = tmp$ret$0;
            } else {
              tmp_0 = false;
            }

            if (!tmp_0) {
              this.state_1 = 1;
              continue $sm;
            }

            this.state_1 = 3;
            continue $sm;
          case 3:
            return this.event0__1;
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
  $awaitMouseEventDownCOROUTINE$24.$metadata$ = classMeta('$awaitMouseEventDownCOROUTINE$24', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function get_TapIndicationDelay() {
    return TapIndicationDelay;
  }
  var TapIndicationDelay;
  function isComposeRootInScrollableContainer$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(1296278520);
    sourceInformation($composer_0, 'C(isComposeRootInScrollableContainer$composable)27@1040L9:Clickable.js.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(1296278520, $changed, -1, 'androidx.compose.foundation.isComposeRootInScrollableContainer$composable (Clickable.js.kt:27)');
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
    if (false ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.isComposeRootInScrollableContainer$composable.<anonymous>' call
      tmp$ret$0 = isComposeRootInScrollableContainer$composable$lambda;
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
  function get_isPress(_this__u8e3s4) {
    var tmp;
    if (get_type(_this__u8e3s4) === Companion_getInstance_22().KeyUp_1) {
      var tmp0_subject = _KeyEvent___get_nativeKeyEvent__impl__py13j5(_this__u8e3s4).key_1;
      var tmp0 = tmp0_subject.ordinal_1;
      tmp = tmp0 === 48 ? true : false;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function get_isClick(_this__u8e3s4) {
    var tmp;
    if (get_type(_this__u8e3s4) === Companion_getInstance_22().KeyUp_1) {
      var tmp0_subject = _KeyEvent___get_nativeKeyEvent__impl__py13j5(_this__u8e3s4).key_1;
      var tmp0 = tmp0_subject.ordinal_1;
      tmp = tmp0 === 48 ? true : false;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isComposeRootInScrollableContainer$composable$lambda() {
    return false;
  }
  function get_LocalScrollbarStyle() {
    init_properties_Scrollbar_js_kt_rejv55();
    return LocalScrollbarStyle;
  }
  var LocalScrollbarStyle;
  function ScrollbarStyle(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor) {
    this.minimalHeight_1 = minimalHeight;
    this.thickness_1 = thickness;
    this.shape_1 = shape;
    this.hoverDurationMillis_1 = hoverDurationMillis;
    this.unhoverColor_1 = unhoverColor;
    this.hoverColor_1 = hoverColor;
  }
  ScrollbarStyle.prototype.get_minimalHeight_9dvsue_k$ = function () {
    return this.minimalHeight_1;
  };
  ScrollbarStyle.prototype.get_thickness_djs6pm_k$ = function () {
    return this.thickness_1;
  };
  ScrollbarStyle.prototype.get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  ScrollbarStyle.prototype.get_hoverDurationMillis_fsut4d_k$ = function () {
    return this.hoverDurationMillis_1;
  };
  ScrollbarStyle.prototype.get_unhoverColor_96j3qm_k$ = function () {
    return this.unhoverColor_1;
  };
  ScrollbarStyle.prototype.get_hoverColor_tw7xxn_k$ = function () {
    return this.hoverColor_1;
  };
  ScrollbarStyle.prototype.component1_z2a8sv_k$ = function () {
    return this.minimalHeight_1;
  };
  ScrollbarStyle.prototype.component2_11tj3k_k$ = function () {
    return this.thickness_1;
  };
  ScrollbarStyle.prototype.component3_7eebsa_k$ = function () {
    return this.shape_1;
  };
  ScrollbarStyle.prototype.component4_7eebs9_k$ = function () {
    return this.hoverDurationMillis_1;
  };
  ScrollbarStyle.prototype.component5_6mmcoz_k$ = function () {
    return this.unhoverColor_1;
  };
  ScrollbarStyle.prototype.component6_ust31e_k$ = function () {
    return this.hoverColor_1;
  };
  ScrollbarStyle.prototype.copy_n0gxs4_k$ = function (minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor) {
    return new ScrollbarStyle(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor);
  };
  ScrollbarStyle.prototype.copy$default_l6gq2a_k$ = function (minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      minimalHeight = this.minimalHeight_1;
    if (!(($mask0 & 2) === 0))
      thickness = this.thickness_1;
    if (!(($mask0 & 4) === 0))
      shape = this.shape_1;
    if (!(($mask0 & 8) === 0))
      hoverDurationMillis = this.hoverDurationMillis_1;
    if (!(($mask0 & 16) === 0))
      unhoverColor = this.unhoverColor_1;
    if (!(($mask0 & 32) === 0))
      hoverColor = this.hoverColor_1;
    return this.copy_n0gxs4_k$(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor);
  };
  ScrollbarStyle.prototype.toString = function () {
    return 'ScrollbarStyle(minimalHeight=' + new Dp(this.minimalHeight_1) + ', thickness=' + new Dp(this.thickness_1) + ', shape=' + this.shape_1 + ', hoverDurationMillis=' + this.hoverDurationMillis_1 + ', unhoverColor=' + new Color(this.unhoverColor_1) + ', hoverColor=' + new Color(this.hoverColor_1) + ')';
  };
  ScrollbarStyle.prototype.hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.minimalHeight_1);
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.thickness_1) | 0;
    result = imul(result, 31) + hashCode(this.shape_1) | 0;
    result = imul(result, 31) + this.hoverDurationMillis_1 | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.unhoverColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.hoverColor_1) | 0;
    return result;
  };
  ScrollbarStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ScrollbarStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ScrollbarStyle ? other : THROW_CCE();
    if (!equals(this.minimalHeight_1, tmp0_other_with_cast.minimalHeight_1))
      return false;
    if (!equals(this.thickness_1, tmp0_other_with_cast.thickness_1))
      return false;
    if (!equals(this.shape_1, tmp0_other_with_cast.shape_1))
      return false;
    if (!(this.hoverDurationMillis_1 === tmp0_other_with_cast.hoverDurationMillis_1))
      return false;
    if (!equals(this.unhoverColor_1, tmp0_other_with_cast.unhoverColor_1))
      return false;
    if (!equals(this.hoverColor_1, tmp0_other_with_cast.hoverColor_1))
      return false;
    return true;
  };
  ScrollbarStyle.$metadata$ = classMeta('ScrollbarStyle');
  function defaultScrollbarStyle() {
    init_properties_Scrollbar_js_kt_rejv55();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(16);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$2 = _Dp___init__impl__ms3zkb(4);
    var tmp_1 = RoundedCornerShape_2(tmp$ret$2);
    var tmp_2 = Companion_getInstance_0().Black_1;
    var tmp_3 = Color__copy$default_impl_ectz3s(tmp_2, 0.12, 0.0, 0.0, 0.0, 14, null);
    var tmp_4 = Companion_getInstance_0().Black_1;
    return new ScrollbarStyle(tmp, tmp_0, tmp_1, 300, tmp_3, Color__copy$default_impl_ectz3s(tmp_4, 0.5, 0.0, 0.0, 0.0, 14, null));
  }
  function LocalScrollbarStyle$lambda() {
    init_properties_Scrollbar_js_kt_rejv55();
    return defaultScrollbarStyle();
  }
  var properties_initialized_Scrollbar_js_kt_kjru5v;
  function init_properties_Scrollbar_js_kt_rejv55() {
    if (properties_initialized_Scrollbar_js_kt_kjru5v) {
    } else {
      properties_initialized_Scrollbar_js_kt_kjru5v = true;
      LocalScrollbarStyle = staticCompositionLocalOf(LocalScrollbarStyle$lambda);
    }
  }
  function get_platformDefaultKeyMapping() {
    init_properties_KeyMapping_jsMain_kt_1qgh1v();
    return platformDefaultKeyMapping;
  }
  var platformDefaultKeyMapping;
  var properties_initialized_KeyMapping_jsMain_kt_bmmgcx;
  function init_properties_KeyMapping_jsMain_kt_1qgh1v() {
    if (properties_initialized_KeyMapping_jsMain_kt_bmmgcx) {
    } else {
      properties_initialized_KeyMapping_jsMain_kt_bmmgcx = true;
      platformDefaultKeyMapping = get_defaultKeyMapping();
    }
  }
  function get_DefaultCursorThickness() {
    init_properties_TextFieldCursor_js_kt_76xc8q();
    return DefaultCursorThickness;
  }
  var DefaultCursorThickness;
  var properties_initialized_TextFieldCursor_js_kt_4q87vu;
  function init_properties_TextFieldCursor_js_kt_76xc8q() {
    if (properties_initialized_TextFieldCursor_js_kt_4q87vu) {
    } else {
      properties_initialized_TextFieldCursor_js_kt_4q87vu = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$0 = _Dp___init__impl__ms3zkb(1);
      DefaultCursorThickness = tmp$ret$0;
    }
  }
  function get_textPointerIcon() {
    init_properties_TextPointerIcon_js_kt_xi8crw();
    return textPointerIcon;
  }
  var textPointerIcon;
  var properties_initialized_TextPointerIcon_js_kt_plq52o;
  function init_properties_TextPointerIcon_js_kt_xi8crw() {
    if (properties_initialized_TextPointerIcon_js_kt_plq52o) {
    } else {
      properties_initialized_TextPointerIcon_js_kt_plq52o = true;
      textPointerIcon = DummyPointerIcon_getInstance();
    }
  }
  function get_isInTouchMode() {
    return isInTouchMode;
  }
  var isInTouchMode;
  function get_DefaultSelectionColor() {
    init_properties_DefaultTextSelectionColors_js_kt_3wnbgr();
    return DefaultSelectionColor;
  }
  var DefaultSelectionColor;
  function get_DefaultTextSelectionColors() {
    init_properties_DefaultTextSelectionColors_js_kt_3wnbgr();
    return DefaultTextSelectionColors;
  }
  var DefaultTextSelectionColors;
  var properties_initialized_DefaultTextSelectionColors_js_kt_i7z293;
  function init_properties_DefaultTextSelectionColors_js_kt_3wnbgr() {
    if (properties_initialized_DefaultTextSelectionColors_js_kt_i7z293) {
    } else {
      properties_initialized_DefaultTextSelectionColors_js_kt_i7z293 = true;
      DefaultSelectionColor = Color_0(new Long(-12417292, 0));
      var tmp = get_DefaultSelectionColor();
      var tmp_0 = get_DefaultSelectionColor();
      DefaultTextSelectionColors = new TextSelectionColors(tmp, Color__copy$default_impl_ectz3s(tmp_0, 0.4, 0.0, 0.0, 0.0, 14, null));
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
    return '@androidx.compose.foundation.internal.NoOp()';
  };
  NoOp.$metadata$ = classMeta('NoOp', [Annotation]);
  function get_SPACE_KEY_CODE() {
    init_properties_Toggleable_jsNative_kt_dngswc();
    return SPACE_KEY_CODE;
  }
  var SPACE_KEY_CODE;
  var properties_initialized_Toggleable_jsNative_kt_qr95c;
  function init_properties_Toggleable_jsNative_kt_dngswc() {
    if (properties_initialized_Toggleable_jsNative_kt_qr95c) {
    } else {
      properties_initialized_Toggleable_jsNative_kt_qr95c = true;
      SPACE_KEY_CODE = toLong(SkikoKey_KEY_SPACE_getInstance().platformKeyCode_1);
    }
  }
  function MappedKeys() {
    MappedKeys_instance = this;
    this.A_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().A_1));
    this.C_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().C_1));
    this.H_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().H_1));
    this.V_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().V_1));
    this.X_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().X_1));
    this.Z_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().Z_1));
    this.Backslash_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().Backslash_1));
    this.DirectionLeft_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().DirectionLeft_1));
    this.DirectionRight_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().DirectionRight_1));
    this.DirectionUp_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().DirectionUp_1));
    this.DirectionDown_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().DirectionDown_1));
    this.PageUp_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().PageUp_1));
    this.PageDown_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().PageDown_1));
    this.MoveHome_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().MoveHome_1));
    this.MoveEnd_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().MoveEnd_1));
    this.Insert_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().Insert_1));
    this.Enter_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().Enter_1));
    this.Backspace_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().Backspace_1));
    this.Delete_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().Delete_1));
    this.Paste_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().Paste_1));
    this.Cut_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().Cut_1));
    this.Tab_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().Tab_1));
    this.Copy_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().Copy_1));
  }
  MappedKeys.prototype.get_A_4rac6v_k$ = function () {
    return this.A_1;
  };
  MappedKeys.prototype.get_C_z9yylx_k$ = function () {
    return this.C_1;
  };
  MappedKeys.prototype.get_H_uhjlao_k$ = function () {
    return this.H_1;
  };
  MappedKeys.prototype.get_V_ty3eam_k$ = function () {
    return this.V_1;
  };
  MappedKeys.prototype.get_X_kl84g_k$ = function () {
    return this.X_1;
  };
  MappedKeys.prototype.get_Z_v39uji_k$ = function () {
    return this.Z_1;
  };
  MappedKeys.prototype.get_Backslash_wlrcta_k$ = function () {
    return this.Backslash_1;
  };
  MappedKeys.prototype.get_DirectionLeft_nnkkvm_k$ = function () {
    return this.DirectionLeft_1;
  };
  MappedKeys.prototype.get_DirectionRight_k294n_k$ = function () {
    return this.DirectionRight_1;
  };
  MappedKeys.prototype.get_DirectionUp_s9cb6m_k$ = function () {
    return this.DirectionUp_1;
  };
  MappedKeys.prototype.get_DirectionDown_81vop_k$ = function () {
    return this.DirectionDown_1;
  };
  MappedKeys.prototype.get_PageUp_d9v330_k$ = function () {
    return this.PageUp_1;
  };
  MappedKeys.prototype.get_PageDown_hz00wl_k$ = function () {
    return this.PageDown_1;
  };
  MappedKeys.prototype.get_MoveHome_6w70dm_k$ = function () {
    return this.MoveHome_1;
  };
  MappedKeys.prototype.get_MoveEnd_bx0ymm_k$ = function () {
    return this.MoveEnd_1;
  };
  MappedKeys.prototype.get_Insert_y6atub_k$ = function () {
    return this.Insert_1;
  };
  MappedKeys.prototype.get_Enter_72nuyo_k$ = function () {
    return this.Enter_1;
  };
  MappedKeys.prototype.get_Backspace_g19x21_k$ = function () {
    return this.Backspace_1;
  };
  MappedKeys.prototype.get_Delete_mdp9fp_k$ = function () {
    return this.Delete_1;
  };
  MappedKeys.prototype.get_Paste_5hb4sl_k$ = function () {
    return this.Paste_1;
  };
  MappedKeys.prototype.get_Cut_9e92qy_k$ = function () {
    return this.Cut_1;
  };
  MappedKeys.prototype.get_Tab_x9q08z_k$ = function () {
    return this.Tab_1;
  };
  MappedKeys.prototype.get_Copy_i0eaup_k$ = function () {
    return this.Copy_1;
  };
  MappedKeys.$metadata$ = objectMeta('MappedKeys');
  var MappedKeys_instance;
  function MappedKeys_getInstance() {
    if (MappedKeys_instance == null)
      new MappedKeys();
    return MappedKeys_instance;
  }
  function _isSystemInDarkTheme$composable($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -700866316, 'C(_isSystemInDarkTheme$composable):DarkTheme.skiko.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(-700866316, $changed, -1, 'androidx.compose.foundation._isSystemInDarkTheme$composable (DarkTheme.skiko.kt:46)');
    }
    var tmp0 = get_currentSystemTheme().equals(SystemTheme_DARK_getInstance());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function rememberDefaultBringIntoViewParent$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-390424327);
    sourceInformation($composer_0, 'C(rememberDefaultBringIntoViewParent$composable)27@1008L149:BringIntoViewResponder.skiko.kt#exjx5q');
    if (isTraceInProgress()) {
      traceEventStart(-390424327, $changed, -1, 'androidx.compose.foundation.relocation.rememberDefaultBringIntoViewParent$composable (BringIntoViewResponder.skiko.kt:26)');
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
    if (false ? true : tmp0_let === Companion_getInstance_6().Empty_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.relocation.rememberDefaultBringIntoViewParent$composable.<anonymous>' call
      tmp$ret$0 = rememberDefaultBringIntoViewParent$composable$slambda_0(null);
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
    var tmp_1 = tmp$ret$4;
    var tmp0_0 = new sam$androidx_compose_foundation_relocation_BringIntoViewParent$0(tmp_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0_0;
  }
  function sam$androidx_compose_foundation_relocation_BringIntoViewParent$0(function_0) {
    this.function_1 = function_0;
  }
  sam$androidx_compose_foundation_relocation_BringIntoViewParent$0.prototype.bringChildIntoView_uubi17_k$ = function (childCoordinates, boundsProvider, $cont) {
    return this.function_1(childCoordinates, boundsProvider, $cont);
  };
  sam$androidx_compose_foundation_relocation_BringIntoViewParent$0.$metadata$ = classMeta('sam$androidx_compose_foundation_relocation_BringIntoViewParent$0', [BringIntoViewParent]);
  function rememberDefaultBringIntoViewParent$composable$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  rememberDefaultBringIntoViewParent$composable$slambda.prototype.invoke_clynkk_k$ = function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, $cont) {
    var tmp = this.create_4kppq9_k$(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  rememberDefaultBringIntoViewParent$composable$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, LayoutCoordinates) : false) ? p1 : THROW_CCE();
    return this.invoke_clynkk_k$(tmp, (!(p2 == null) ? typeof p2 === 'function' : false) ? p2 : THROW_CCE(), $cont);
  };
  rememberDefaultBringIntoViewParent$composable$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  rememberDefaultBringIntoViewParent$composable$slambda.prototype.create_4kppq9_k$ = function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, completion) {
    var i = new rememberDefaultBringIntoViewParent$composable$slambda(completion);
    i._anonymous_parameter_0__qggqh8__1 = _anonymous_parameter_0__qggqh8;
    i._anonymous_parameter_1__qggqgd_1 = _anonymous_parameter_1__qggqgd;
    return i;
  };
  rememberDefaultBringIntoViewParent$composable$slambda.$metadata$ = classMeta('rememberDefaultBringIntoViewParent$composable$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function rememberDefaultBringIntoViewParent$composable$slambda_0(resultContinuation) {
    var i = new rememberDefaultBringIntoViewParent$composable$slambda(resultContinuation);
    var l = function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, $cont) {
      return i.invoke_clynkk_k$(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, $cont);
    };
    l.$arity = 2;
    return l;
  }
  //region block: post-declaration
  Background.prototype.foldIn_4qioq6_k$ = foldIn;
  Background.prototype.foldOut_ld23lz_k$ = foldOut;
  Background.prototype.any_hrontp_k$ = any;
  Background.prototype.all_ctzlrs_k$ = all;
  Background.prototype.then_5qw5wu_k$ = then;
  clickable$2$1$1.prototype.foldIn_4qioq6_k$ = foldIn;
  clickable$2$1$1.prototype.foldOut_ld23lz_k$ = foldOut;
  clickable$2$1$1.prototype.any_hrontp_k$ = any;
  clickable$2$1$1.prototype.all_ctzlrs_k$ = all;
  clickable$2$1$1.prototype.then_5qw5wu_k$ = then;
  PinnableParentConsumer.prototype.foldIn_4qioq6_k$ = foldIn;
  PinnableParentConsumer.prototype.foldOut_ld23lz_k$ = foldOut;
  PinnableParentConsumer.prototype.any_hrontp_k$ = any;
  PinnableParentConsumer.prototype.all_ctzlrs_k$ = all;
  PinnableParentConsumer.prototype.then_5qw5wu_k$ = then;
  FocusedBoundsModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  FocusedBoundsModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  FocusedBoundsModifier.prototype.any_hrontp_k$ = any;
  FocusedBoundsModifier.prototype.all_ctzlrs_k$ = all;
  FocusedBoundsModifier.prototype.then_5qw5wu_k$ = then;
  IndicationModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  IndicationModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  IndicationModifier.prototype.any_hrontp_k$ = any;
  IndicationModifier.prototype.all_ctzlrs_k$ = all;
  IndicationModifier.prototype.then_5qw5wu_k$ = then;
  DefaultDraggableState.prototype.drag$default_994lnr_k$ = drag$default;
  BringIntoViewChildModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  BringIntoViewChildModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  BringIntoViewChildModifier.prototype.any_hrontp_k$ = any;
  BringIntoViewChildModifier.prototype.all_ctzlrs_k$ = all;
  BringIntoViewChildModifier.prototype.then_5qw5wu_k$ = then;
  BringIntoViewRequesterImpl.prototype.bringIntoView$default_i63p4i_k$ = bringIntoView$default;
  BringIntoViewRequesterModifier.prototype.foldIn_4qioq6_k$ = foldIn;
  BringIntoViewRequesterModifier.prototype.foldOut_ld23lz_k$ = foldOut;
  BringIntoViewRequesterModifier.prototype.any_hrontp_k$ = any;
  BringIntoViewRequesterModifier.prototype.all_ctzlrs_k$ = all;
  BringIntoViewRequesterModifier.prototype.then_5qw5wu_k$ = then;
  PercentCornerSize.prototype.get_inspectableElements_mab2zo_k$ = get_inspectableElements;
  PercentCornerSize.prototype.get_nameFallback_yn6bx2_k$ = get_nameFallback;
  DpCornerSize.prototype.get_inspectableElements_mab2zo_k$ = get_inspectableElements;
  DpCornerSize.prototype.get_nameFallback_yn6bx2_k$ = get_nameFallback;
  ZeroCornerSize$1.prototype.get_inspectableElements_mab2zo_k$ = get_inspectableElements;
  ZeroCornerSize$1.prototype.get_nameFallback_yn6bx2_k$ = get_nameFallback;
  MultiWidgetSelectionDelegate.prototype.updateSelection$default_awcnad_k$ = updateSelection$default;
  //endregion
  //region block: init
  DefaultWidthCharCount = 10;
  SNAPSHOTS_INTERVAL_MILLIS = 5000;
  ClicksSlop = 100.0;
  TapIndicationDelay = new Long(0, 0);
  isInTouchMode = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DragScope;
  _.$_$.b = DraggableState;
  _.$_$.c = GestureCancellationException;
  _.$_$.d = PressGestureScope;
  _.$_$.e = rememberDraggableState$composable;
  _.$_$.f = Cancel;
  _.$_$.g = Start;
  _.$_$.h = Stop;
  _.$_$.i = Focus;
  _.$_$.j = Unfocus;
  _.$_$.k = Enter;
  _.$_$.l = Exit;
  _.$_$.m = Interaction;
  _.$_$.n = funMutableInteractionSource;
  _.$_$.o = Cancel_0;
  _.$_$.p = Press;
  _.$_$.q = Release;
  _.$_$.r = get_CircleShape;
  _.$_$.s = RoundedCornerShape_2;
  _.$_$.t = get_LocalTextSelectionColors;
  _.$_$.u = TextSelectionColors;
  _.$_$.v = BasicText$composable;
  _.$_$.w = BorderStroke_0;
  _.$_$.x = Canvas$composable;
  _.$_$.y = IndicationInstance;
  _.$_$.z = Indication;
  _.$_$.a1 = get_LocalIndication;
  _.$_$.b1 = get_LocalScrollbarStyle;
  _.$_$.c1 = MutatorMutex;
  _.$_$.d1 = background;
  _.$_$.e1 = border;
  _.$_$.f1 = defaultScrollbarStyle;
  _.$_$.g1 = focusable;
  _.$_$.h1 = indication;
  _.$_$.i1 = isSystemInDarkTheme$composable;
  _.$_$.j1 = progressSemantics;
  _.$_$.k1 = Orientation_Horizontal_getInstance;
  _.$_$.l1 = Orientation_Vertical_getInstance;
  _.$_$.m1 = MutatePriority_UserInput_getInstance;
  _.$_$.n1 = draggable$default;
  _.$_$.o1 = background$default;
  _.$_$.p1 = clickable$default;
  _.$_$.q1 = hoverable$default;
  _.$_$.r1 = progressSemantics$default;
  _.$_$.s1 = drag$default;
  _.$_$.t1 = detectTapGestures$default;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-foundation.js.map
