(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-ui.js', './kotlin-kotlin-stdlib-js-ir.js', './androidx-ui-graphics.js', './androidx-ui-geometry.js', './androidx-ui-unit.js', './androidx-runtime.js', './androidx-foundation-layout.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './androidx-ui-text.js', './androidx-runtime-saveable.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-ui.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./androidx-ui-graphics.js'), require('./androidx-ui-geometry.js'), require('./androidx-ui-unit.js'), require('./androidx-runtime.js'), require('./androidx-foundation-layout.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./androidx-ui-text.js'), require('./androidx-runtime-saveable.js'), require('./skiko-kjs.js'));
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
    if (typeof this['androidx-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-ui-text' was not found. Please, check whether 'androidx-ui-text' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['androidx-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'androidx-runtime-saveable' was not found. Please, check whether 'androidx-runtime-saveable' is loaded prior to 'androidx-foundation'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'androidx-foundation'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'androidx-foundation'.");
    }
    root['androidx-foundation'] = factory(typeof this['androidx-foundation'] === 'undefined' ? {} : this['androidx-foundation'], this['androidx-ui'], this['kotlin-kotlin-stdlib-js-ir'], this['androidx-ui-graphics'], this['androidx-ui-geometry'], this['androidx-ui-unit'], this['androidx-runtime'], this['androidx-foundation-layout'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['androidx-ui-text'], this['androidx-runtime-saveable'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_androidx_compose_ui_ui, kotlin_kotlin, kotlin_androidx_compose_ui_ui_graphics, kotlin_androidx_compose_ui_ui_geometry, kotlin_androidx_compose_ui_ui_unit, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_compose_foundation_foundation_layout, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_androidx_compose_ui_ui_text, kotlin_androidx_compose_runtime_runtime_saveable, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var get_NoInspectorInfo = kotlin_androidx_compose_ui_ui.$_$.h2;
  var get_isDebugInspectorInfoEnabled = kotlin_androidx_compose_ui_ui.$_$.j2;
  var Unit_getInstance = kotlin_kotlin.$_$.s2;
  var get_RectangleShape = kotlin_androidx_compose_ui_ui_graphics.$_$.v;
  var Color = kotlin_androidx_compose_ui_ui_graphics.$_$.k;
  var Size = kotlin_androidx_compose_ui_ui_geometry.$_$.k;
  var equals = kotlin_kotlin.$_$.a7;
  var ensureNotNull = kotlin_kotlin.$_$.ja;
  var drawOutline$default = kotlin_androidx_compose_ui_ui_graphics.$_$.y1;
  var drawOutline$default_0 = kotlin_androidx_compose_ui_ui_graphics.$_$.z1;
  var InspectorValueInfo = kotlin_androidx_compose_ui_ui.$_$.b2;
  var Color__hashCode_impl_vjyivj = kotlin_androidx_compose_ui_ui_graphics.$_$.i2;
  var hashCode = kotlin_kotlin.$_$.i7;
  var getNumberHashCode = kotlin_kotlin.$_$.e7;
  var foldIn = kotlin_androidx_compose_ui_ui.$_$.x2;
  var all = kotlin_androidx_compose_ui_ui.$_$.w2;
  var then = kotlin_androidx_compose_ui_ui.$_$.y2;
  var DrawModifier = kotlin_androidx_compose_ui_ui.$_$.a;
  var classMeta = kotlin_kotlin.$_$.y6;
  var composed$composable = kotlin_androidx_compose_ui_ui.$_$.z2;
  var ImageBitmapConfig = kotlin_androidx_compose_ui_ui_graphics.$_$.m;
  var Companion_getInstance = kotlin_androidx_compose_ui_ui_graphics.$_$.i3;
  var _IntSize___get_width__impl__d9yl4o = kotlin_androidx_compose_ui_ui_unit.$_$.n2;
  var _IntSize___get_height__impl__prv63b = kotlin_androidx_compose_ui_ui_unit.$_$.l2;
  var ImageBitmap$default = kotlin_androidx_compose_ui_ui_graphics.$_$.x1;
  var Canvas = kotlin_androidx_compose_ui_ui_graphics.$_$.h;
  var _Size___get_height__impl__a04p02 = kotlin_androidx_compose_ui_ui_geometry.$_$.e1;
  var _Size___get_width__impl__58y75t = kotlin_androidx_compose_ui_ui_geometry.$_$.h1;
  var CanvasDrawScope = kotlin_androidx_compose_ui_ui_graphics.$_$.a;
  var toSize = kotlin_androidx_compose_ui_ui_unit.$_$.l1;
  var Companion_getInstance_0 = kotlin_androidx_compose_ui_ui_graphics.$_$.g3;
  var Companion_getInstance_1 = kotlin_androidx_compose_ui_ui_graphics.$_$.e3;
  var Path = kotlin_androidx_compose_ui_ui_graphics.$_$.u;
  var THROW_CCE = kotlin_kotlin.$_$.ba;
  var Companion_getInstance_2 = kotlin_androidx_compose_ui_ui_graphics.$_$.h3;
  var SolidColor = kotlin_androidx_compose_ui_ui_graphics.$_$.x;
  var Companion_getInstance_3 = kotlin_androidx_compose_ui_ui_graphics.$_$.l3;
  var numberToInt = kotlin_kotlin.$_$.s7;
  var IntSize = kotlin_androidx_compose_ui_ui_unit.$_$.r;
  var Stroke_init_$Create$ = kotlin_androidx_compose_ui_ui_graphics.$_$.a2;
  var get_isSimple = kotlin_androidx_compose_ui_ui_geometry.$_$.n;
  var Companion_getInstance_4 = kotlin_androidx_compose_ui_ui_geometry.$_$.j1;
  var Fill_getInstance = kotlin_androidx_compose_ui_ui_graphics.$_$.d3;
  var _CornerRadius___get_x__impl__1594cn = kotlin_androidx_compose_ui_ui_geometry.$_$.s;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_androidx_compose_ui_ui_geometry.$_$.t;
  var CornerRadius = kotlin_androidx_compose_ui_ui_geometry.$_$.a;
  var RoundRect = kotlin_androidx_compose_ui_ui_geometry.$_$.i;
  var Dp = kotlin_androidx_compose_ui_ui_unit.$_$.o;
  var _Size___get_minDimension__impl__4iso0r = kotlin_androidx_compose_ui_ui_geometry.$_$.f1;
  var Companion_getInstance_5 = kotlin_androidx_compose_ui_ui_unit.$_$.a3;
  var Offset = kotlin_androidx_compose_ui_ui_geometry.$_$.d;
  var Size_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.j;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ra;
  var Rectangle = kotlin_androidx_compose_ui_ui_graphics.$_$.p;
  var Rounded = kotlin_androidx_compose_ui_ui_graphics.$_$.q;
  var Generic = kotlin_androidx_compose_ui_ui_graphics.$_$.o;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.g1;
  var Ref = kotlin_androidx_compose_ui_ui.$_$.y1;
  var Companion_getInstance_6 = kotlin_androidx_compose_runtime_runtime.$_$.f2;
  var isObject = kotlin_kotlin.$_$.o7;
  var Companion_getInstance_7 = kotlin_androidx_compose_ui_ui.$_$.b4;
  var drawWithCache = kotlin_androidx_compose_ui_ui.$_$.e;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  var Companion_getInstance_8 = kotlin_androidx_compose_ui_ui_graphics.$_$.f3;
  var Dp__hashCode_impl_sxkrra = kotlin_androidx_compose_ui_ui_unit.$_$.b2;
  var drawBehind = kotlin_androidx_compose_ui_ui.$_$.d;
  var Spacer$composable = kotlin_androidx_compose_foundation_foundation_layout.$_$.d;
  var DisposableEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.r;
  var FocusRequester = kotlin_androidx_compose_ui_ui.$_$.f;
  var focusRequester = kotlin_androidx_compose_ui_ui.$_$.g;
  var to = kotlin_kotlin.$_$.bb;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var semantics = kotlin_androidx_compose_ui_ui.$_$.t2;
  var onKeyEvent = kotlin_androidx_compose_ui_ui.$_$.p;
  var Role = kotlin_androidx_compose_ui_ui.$_$.l2;
  var CoroutineImpl = kotlin_kotlin.$_$.k6;
  var isInterface = kotlin_kotlin.$_$.n7;
  var Offset_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.e;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v5;
  var PointerInputScope = kotlin_androidx_compose_ui_ui.$_$.v;
  var get_center = kotlin_androidx_compose_ui_ui_unit.$_$.w;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_androidx_compose_ui_ui_unit.$_$.i2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_androidx_compose_ui_ui_unit.$_$.j2;
  var ModifierLocalConsumer = kotlin_androidx_compose_ui_ui.$_$.w1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.l2;
  var rememberUpdatedState$composable = kotlin_androidx_compose_runtime_runtime.$_$.n1;
  var mutableStateOf$default = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var pointerInput = kotlin_androidx_compose_ui_ui.$_$.e1;
  var createCompositionCoroutineScope = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var CompositionScopedCoroutineScopeCanceller = kotlin_androidx_compose_runtime_runtime.$_$.o;
  var DisposableEffectResult = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var cancelAndJoin = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var set_role = kotlin_androidx_compose_ui_ui.$_$.s2;
  var onClick = kotlin_androidx_compose_ui_ui.$_$.p2;
  var onLongClick = kotlin_androidx_compose_ui_ui.$_$.q2;
  var disabled = kotlin_androidx_compose_ui_ui.$_$.n2;
  var get_key = kotlin_androidx_compose_ui_ui.$_$.o;
  var Key = kotlin_androidx_compose_ui_ui.$_$.n;
  var SuspendFunction2 = kotlin_kotlin.$_$.n6;
  var SuspendFunction1 = kotlin_kotlin.$_$.m6;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.q1;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.p1;
  var inspectableWrapper = kotlin_androidx_compose_ui_ui.$_$.i2;
  var KMutableProperty0 = kotlin_kotlin.$_$.r8;
  var THROW_ISE = kotlin_kotlin.$_$.ca;
  var getLocalDelegateReference = kotlin_kotlin.$_$.d7;
  var set_focused = kotlin_androidx_compose_ui_ui.$_$.o2;
  var requestFocus$default = kotlin_androidx_compose_ui_ui.$_$.j3;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var semantics$default = kotlin_androidx_compose_ui_ui.$_$.k3;
  var onFocusChanged = kotlin_androidx_compose_ui_ui.$_$.i;
  var focusTarget = kotlin_androidx_compose_ui_ui.$_$.h;
  var InspectableModifier = kotlin_androidx_compose_ui_ui.$_$.z1;
  var OnGloballyPositionedModifier = kotlin_androidx_compose_ui_ui.$_$.o1;
  var modifierLocalOf = kotlin_androidx_compose_ui_ui.$_$.x1;
  var AwaitPointerEventScope = kotlin_androidx_compose_ui_ui.$_$.t;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var Companion_getInstance_9 = kotlin_androidx_compose_ui_ui.$_$.s3;
  var LaunchedEffect$composable = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var pointerInput_0 = kotlin_androidx_compose_ui_ui.$_$.d1;
  var interfaceMeta = kotlin_kotlin.$_$.k7;
  var Color__copy$default_impl_ectz3s = kotlin_androidx_compose_ui_ui_graphics.$_$.y2;
  var objectMeta = kotlin_kotlin.$_$.u7;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var Companion_getInstance_10 = kotlin_androidx_compose_ui_ui.$_$.u3;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var get_LocalInputModeManager = kotlin_androidx_compose_ui_ui.$_$.e2;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var Enum = kotlin_kotlin.$_$.q9;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.x;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var AtomicReference = kotlin_androidx_compose_runtime_runtime.$_$.k;
  var Mutex$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var rangeTo = kotlin_kotlin.$_$.o8;
  var coerceIn = kotlin_kotlin.$_$.n8;
  var ProgressBarRangeInfo = kotlin_androidx_compose_ui_ui.$_$.k2;
  var set_progressBarRangeInfo = kotlin_androidx_compose_ui_ui.$_$.r2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var Companion_getInstance_11 = kotlin_androidx_compose_ui_ui.$_$.t3;
  var _Offset___get_x__impl__xvi35n = kotlin_androidx_compose_ui_ui_geometry.$_$.b1;
  var _Offset___get_y__impl__8bzhra = kotlin_androidx_compose_ui_ui_geometry.$_$.c1;
  var positionChange = kotlin_androidx_compose_ui_ui.$_$.i1;
  var changedToUp = kotlin_androidx_compose_ui_ui.$_$.z;
  var CancellationException = kotlin_kotlin.$_$.u5;
  var PointerEventPass_Main_getInstance = kotlin_androidx_compose_ui_ui.$_$.d3;
  var changedToUpIgnoreConsumed = kotlin_androidx_compose_ui_ui.$_$.y;
  var isOutOfBounds = kotlin_androidx_compose_ui_ui.$_$.a1;
  var PointerEventPass_Final_getInstance = kotlin_androidx_compose_ui_ui.$_$.b3;
  var positionChangeIgnoreConsumed = kotlin_androidx_compose_ui_ui.$_$.g1;
  var PointerEventTimeoutCancellationException = kotlin_androidx_compose_ui_ui.$_$.u;
  var positionChangedIgnoreConsumed = kotlin_androidx_compose_ui_ui.$_$.h1;
  var _Dp___init__impl__ms3zkb = kotlin_androidx_compose_ui_ui_unit.$_$.z1;
  var _Dp___get_value__impl__geb1vb = kotlin_androidx_compose_ui_ui_unit.$_$.c2;
  var _Velocity___get_x__impl__qqcikv = kotlin_androidx_compose_ui_ui_unit.$_$.w2;
  var _Velocity___get_y__impl__239yhc = kotlin_androidx_compose_ui_ui_unit.$_$.x2;
  var Velocity = kotlin_androidx_compose_ui_ui_unit.$_$.v;
  var Companion_getInstance_12 = kotlin_androidx_compose_ui_ui_unit.$_$.h3;
  var KProperty0 = kotlin_kotlin.$_$.t8;
  var get_isActive_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var VelocityTracker = kotlin_androidx_compose_ui_ui.$_$.r;
  var Velocity__times_impl_yav0ik = kotlin_androidx_compose_ui_ui_unit.$_$.v2;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var pointerInput_1 = kotlin_androidx_compose_ui_ui.$_$.f1;
  var addPointerInputChange = kotlin_androidx_compose_ui_ui.$_$.s;
  var Offset__times_impl_jz1mli = kotlin_androidx_compose_ui_ui_geometry.$_$.a1;
  var PointerEventPass_Initial_getInstance = kotlin_androidx_compose_ui_ui.$_$.c3;
  var Offset__getDistance_impl_pclvxn = kotlin_androidx_compose_ui_ui_geometry.$_$.w;
  var Offset__div_impl_eaxtg1 = kotlin_androidx_compose_ui_ui_geometry.$_$.u;
  var Offset__minus_impl_hoj2c0 = kotlin_androidx_compose_ui_ui_geometry.$_$.y;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.w;
  var captureStack = kotlin_kotlin.$_$.t6;
  var Density = kotlin_androidx_compose_ui_ui_unit.$_$.j;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var changedToDownIgnoreConsumed = kotlin_androidx_compose_ui_ui.$_$.w;
  var changedToDown = kotlin_androidx_compose_ui_ui.$_$.x;
  var get_isPrimaryPressed = kotlin_androidx_compose_ui_ui.$_$.b1;
  var Companion_getInstance_13 = kotlin_kotlin.$_$.p2;
  var Long = kotlin_kotlin.$_$.v9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var MutableSharedFlow$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var OnPlacedModifier = kotlin_androidx_compose_ui_ui.$_$.p1;
  var isArray = kotlin_kotlin.$_$.l7;
  var fillArrayVal = kotlin_kotlin.$_$.b7;
  var MutableVector = kotlin_androidx_compose_runtime_runtime.$_$.a;
  var IntSize_0 = kotlin_androidx_compose_ui_ui_unit.$_$.s;
  var toRect = kotlin_androidx_compose_ui_ui_geometry.$_$.q;
  var toString = kotlin_kotlin.$_$.x7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j1;
  var Shape = kotlin_androidx_compose_ui_ui_graphics.$_$.w;
  var InspectableValue = kotlin_androidx_compose_ui_ui.$_$.a2;
  var LayoutDirection_Ltr_getInstance = kotlin_androidx_compose_ui_ui_unit.$_$.m1;
  var CornerRadius$default = kotlin_androidx_compose_ui_ui_geometry.$_$.r;
  var RoundRect_0 = kotlin_androidx_compose_ui_ui_geometry.$_$.h;
  var TextOverflow = kotlin_androidx_compose_ui_ui_text.$_$.g;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_androidx_compose_ui_ui_text.$_$.q;
  var Companion_getInstance_14 = kotlin_androidx_compose_ui_ui_text.$_$.w;
  var Companion_getInstance_15 = kotlin_androidx_compose_ui_ui_text.$_$.u;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.o2;
  var get_LocalDensity = kotlin_androidx_compose_ui_ui.$_$.c2;
  var get_LocalFontFamilyResolver = kotlin_androidx_compose_ui_ui.$_$.d2;
  var rememberSaveable$composable = kotlin_androidx_compose_runtime_runtime_saveable.$_$.b;
  var AnnotatedString_init_$Create$ = kotlin_androidx_compose_ui_ui_text.$_$.n;
  var get_LocalLayoutDirection = kotlin_androidx_compose_ui_ui.$_$.f2;
  var get_LocalViewConfiguration = kotlin_androidx_compose_ui_ui.$_$.g2;
  var materialize = kotlin_androidx_compose_ui_ui.$_$.a3;
  var Companion_getInstance_16 = kotlin_androidx_compose_ui_ui.$_$.x3;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.j;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.d2;
  var Saver = kotlin_androidx_compose_runtime_runtime_saveable.$_$.a;
  var graphicsLayer$default = kotlin_androidx_compose_ui_ui.$_$.g3;
  var Offset__plus_impl_c78cg0 = kotlin_androidx_compose_ui_ui_geometry.$_$.z;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var Constraints$default = kotlin_androidx_compose_ui_ui_unit.$_$.o1;
  var roundToInt = kotlin_kotlin.$_$.d8;
  var IntOffset = kotlin_androidx_compose_ui_ui_unit.$_$.p;
  var IntOffset_0 = kotlin_androidx_compose_ui_ui_unit.$_$.q;
  var Pair = kotlin_kotlin.$_$.z9;
  var get_FirstBaseline = kotlin_androidx_compose_ui_ui.$_$.j1;
  var get_LastBaseline = kotlin_androidx_compose_ui_ui.$_$.k1;
  var mapOf = kotlin_kotlin.$_$.d5;
  var MeasurePolicy = kotlin_androidx_compose_ui_ui.$_$.n1;
  var positionInWindow = kotlin_androidx_compose_ui_ui.$_$.v1;
  var set_text = kotlin_androidx_compose_ui_ui.$_$.u2;
  var getTextLayoutResult$default = kotlin_androidx_compose_ui_ui.$_$.i3;
  var onGloballyPositioned = kotlin_androidx_compose_ui_ui.$_$.u1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.wa;
  var composed$composable$default = kotlin_androidx_compose_ui_ui.$_$.m3;
  var pointerHoverIcon$default = kotlin_androidx_compose_ui_ui.$_$.h3;
  var RememberObserver = kotlin_androidx_compose_runtime_runtime.$_$.y;
  var neverEqualPolicy = kotlin_androidx_compose_runtime_runtime.$_$.k1;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.j1;
  var KMutableProperty1 = kotlin_kotlin.$_$.s8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g7;
  var emptyList = kotlin_kotlin.$_$.g4;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_androidx_compose_ui_ui_unit.$_$.y1;
  var Companion_getInstance_17 = kotlin_androidx_compose_ui_ui_unit.$_$.z2;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_androidx_compose_ui_ui_unit.$_$.w1;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_androidx_compose_ui_ui_unit.$_$.r1;
  var coerceIn_0 = kotlin_kotlin.$_$.l8;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_androidx_compose_ui_ui_unit.$_$.v1;
  var MultiParagraph = kotlin_androidx_compose_ui_ui_text.$_$.i;
  var TextPainter_getInstance = kotlin_androidx_compose_ui_ui_text.$_$.v;
  var resolveDefaults = kotlin_androidx_compose_ui_ui_text.$_$.k;
  var MultiParagraphIntrinsics = kotlin_androidx_compose_ui_ui_text.$_$.h;
  var TextLayoutInput_init_$Create$ = kotlin_androidx_compose_ui_ui_text.$_$.m;
  var constrain = kotlin_androidx_compose_ui_ui_unit.$_$.b1;
  var TextLayoutResult = kotlin_androidx_compose_ui_ui_text.$_$.j;
  var compositionLocalOf$default = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var get_isShiftPressed = kotlin_androidx_compose_ui_ui.$_$.c1;
  var _KeyEvent___get_nativeKeyEvent__impl__py13j5 = kotlin_androidx_compose_ui_ui.$_$.p3;
  var get_type = kotlin_androidx_compose_ui_ui.$_$.q;
  var Companion_getInstance_18 = kotlin_androidx_compose_ui_ui.$_$.q3;
  var DummyPointerIcon_getInstance = kotlin_androidx_compose_ui_ui.$_$.r3;
  var Color_0 = kotlin_androidx_compose_ui_ui_graphics.$_$.j;
  var get_currentSystemTheme = kotlin_org_jetbrains_skiko_skiko.$_$.p8;
  var SystemTheme_DARK_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s6;
  var LayoutCoordinates = kotlin_androidx_compose_ui_ui.$_$.l1;
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
  MutatorMutex$mutateWith$slambda.prototype = Object.create(CoroutineImpl.prototype);
  MutatorMutex$mutateWith$slambda.prototype.constructor = MutatorMutex$mutateWith$slambda;
  detectDragGesturesAfterLongPress$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.constructor = detectDragGesturesAfterLongPress$slambda$slambda;
  detectDragGesturesAfterLongPress$slambda.prototype = Object.create(CoroutineImpl.prototype);
  detectDragGesturesAfterLongPress$slambda.prototype.constructor = detectDragGesturesAfterLongPress$slambda;
  awaitLongPressOrCancellation$slambda.prototype = Object.create(CoroutineImpl.prototype);
  awaitLongPressOrCancellation$slambda.prototype.constructor = awaitLongPressOrCancellation$slambda;
  $verticalDragCOROUTINE$4.prototype = Object.create(CoroutineImpl.prototype);
  $verticalDragCOROUTINE$4.prototype.constructor = $verticalDragCOROUTINE$4;
  $horizontalDragCOROUTINE$5.prototype = Object.create(CoroutineImpl.prototype);
  $horizontalDragCOROUTINE$5.prototype.constructor = $horizontalDragCOROUTINE$5;
  $dragCOROUTINE$8.prototype = Object.create(CoroutineImpl.prototype);
  $dragCOROUTINE$8.prototype.constructor = $dragCOROUTINE$8;
  $awaitLongPressOrCancellationCOROUTINE$9.prototype = Object.create(CoroutineImpl.prototype);
  $awaitLongPressOrCancellationCOROUTINE$9.prototype.constructor = $awaitLongPressOrCancellationCOROUTINE$9;
  $awaitDragOrCancellationCOROUTINE$10.prototype = Object.create(CoroutineImpl.prototype);
  $awaitDragOrCancellationCOROUTINE$10.prototype.constructor = $awaitDragOrCancellationCOROUTINE$10;
  function drag$default(dragPriority, block, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      dragPriority = MutatePriority_Default_getInstance();
    return $handler == null ? this.c7z(dragPriority, block, $cont) : $handler(dragPriority, block, $cont);
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
    return $handler == null ? this.c8n(rect, $cont) : $handler(rect, $cont);
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
    return _this__u8e3s4.y4e(Background_init_$Create$(color, null, 0.0, shape, tmp$ret$0, 6, null));
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
  function drawRect(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = $this.l7h_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new Color(tmp)) == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.d3l(tmp0_safe_receiver, null, null, 0.0, null, null, null, 126, null);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = $this.m7h_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.c3l(tmp1_safe_receiver, null, null, $this.n7h_1, null, null, null, 118, null);
      tmp$ret$1 = Unit_getInstance();
    }
  }
  function drawOutline(_this__u8e3s4, $this) {
    var tmp;
    var tmp_0;
    var tmp_1 = new Size(_this__u8e3s4.j3k());
    var tmp_2 = $this.p7h_1;
    if (equals(tmp_1, tmp_2 == null ? null : new Size(tmp_2))) {
      tmp_0 = _this__u8e3s4.y3k().equals($this.q7h_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = ensureNotNull($this.r7h_1);
    } else {
      tmp = $this.o7h_1.t3g(_this__u8e3s4.j3k(), _this__u8e3s4.y3k(), _this__u8e3s4);
    }
    var outline = tmp;
    var tmp0_safe_receiver = $this.l7h_1;
    var tmp_3 = tmp0_safe_receiver;
    if ((tmp_3 == null ? null : new Color(tmp_3)) == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      drawOutline$default(_this__u8e3s4, outline, $this.l7h_1, 0.0, null, null, null, 60, null);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = $this.m7h_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      drawOutline$default_0(_this__u8e3s4, outline, $this.m7h_1, $this.n7h_1, null, null, null, 56, null);
      tmp$ret$1 = Unit_getInstance();
    }
    $this.r7h_1 = outline;
    $this.p7h_1 = _this__u8e3s4.j3k();
    $this.q7h_1 = _this__u8e3s4.y3k();
  }
  function Background(color, brush, alpha, shape, inspectorInfo) {
    InspectorValueInfo.call(this, inspectorInfo);
    this.l7h_1 = color;
    this.m7h_1 = brush;
    this.n7h_1 = alpha;
    this.o7h_1 = shape;
    this.p7h_1 = null;
    this.q7h_1 = null;
    this.r7h_1 = null;
  }
  Background.prototype.k4g = function (_this__u8e3s4) {
    if (this.o7h_1 === get_RectangleShape()) {
      drawRect(_this__u8e3s4, this);
    } else {
      drawOutline(_this__u8e3s4, this);
    }
    _this__u8e3s4.v3l();
  };
  Background.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.l7h_1;
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
    var tmp2_safe_receiver = this.m7h_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.n7h_1) | 0;
    result = imul(31, result) + hashCode(this.o7h_1) | 0;
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
    var tmp_3 = this.l7h_1;
    var tmp_4 = tmp_3 == null ? null : new Color(tmp_3);
    var tmp_5 = otherModifier.l7h_1;
    if (equals(tmp_4, tmp_5 == null ? null : new Color(tmp_5))) {
      tmp_2 = equals(this.m7h_1, otherModifier.m7h_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.n7h_1 === otherModifier.n7h_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals(this.o7h_1, otherModifier.o7h_1);
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  Background.prototype.toString = function () {
    var tmp = this.l7h_1;
    return 'Background(color=' + (tmp == null ? null : new Color(tmp)) + ', brush=' + this.m7h_1 + ', alpha = ' + this.n7h_1 + ', shape=' + this.o7h_1 + ')';
  };
  Background.$metadata$ = classMeta('Background', [DrawModifier], undefined, undefined, undefined, InspectorValueInfo.prototype);
  function background$lambda($color, $shape) {
    return function ($this$null) {
      $this$null.e4h_1 = 'background';
      $this$null.f4h_1 = new Color($color);
      $this$null.g4h_1.k4h('color', new Color($color));
      $this$null.g4h_1.k4h('shape', $shape);
      return Unit_getInstance();
    };
  }
  function border(_this__u8e3s4, border, shape) {
    return border_0(_this__u8e3s4, border.s7h_1, border.t7h_1, shape);
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
  function BorderCache(imageBitmap, canvas, canvasDrawScope, borderPath) {
    this.u7h_1 = imageBitmap;
    this.v7h_1 = canvas;
    this.w7h_1 = canvasDrawScope;
    this.x7h_1 = borderPath;
  }
  BorderCache.prototype.y7h = function (_this__u8e3s4, borderSize, config, block) {
    var targetImageBitmap = this.u7h_1;
    var targetCanvas = this.v7h_1;
    var tmp;
    var tmp0_safe_receiver = targetImageBitmap;
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k3d();
    if (equals(tmp_0 == null ? null : new ImageBitmapConfig(tmp_0), new ImageBitmapConfig(Companion_getInstance().m3d_1))) {
      tmp = true;
    } else {
      var tmp_1 = new ImageBitmapConfig(config);
      var tmp1_safe_receiver = targetImageBitmap;
      var tmp_2 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.k3d();
      tmp = equals(tmp_1, tmp_2 == null ? null : new ImageBitmapConfig(tmp_2));
    }
    var compatibleConfig = tmp;
    if ((((targetImageBitmap == null ? true : targetCanvas == null) ? true : _Size___get_width__impl__58y75t(_this__u8e3s4.j3k()) > targetImageBitmap.a2j()) ? true : _Size___get_height__impl__a04p02(_this__u8e3s4.j3k()) > targetImageBitmap.b2j()) ? true : !compatibleConfig) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp_3 = _IntSize___get_width__impl__d9yl4o(borderSize);
      var tmp_4 = _IntSize___get_height__impl__prv63b(borderSize);
      var tmp0_also = ImageBitmap$default(tmp_3, tmp_4, config, false, null, 24, null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      this.u7h_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      targetImageBitmap = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp1_also = Canvas(targetImageBitmap);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      this.v7h_1 = tmp1_also;
      tmp$ret$1 = tmp1_also;
      targetCanvas = tmp$ret$1;
    }
    var tmp2_elvis_lhs = this.w7h_1;
    var tmp_5;
    if (tmp2_elvis_lhs == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp2_also = new CanvasDrawScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      this.w7h_1 = tmp2_also;
      tmp$ret$2 = tmp2_also;
      tmp_5 = tmp$ret$2;
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var targetDrawScope = tmp_5;
    var drawSize = toSize(borderSize);
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
    var tmp3_draw = _this__u8e3s4.y3k();
    var tmp4_draw = targetCanvas;
    var tmp0_container = targetDrawScope.a3k_1;
    var prevDensity = tmp0_container.z3();
    var prevLayoutDirection = tmp0_container.a4();
    var prevCanvas = tmp0_container.s3k();
    var prevSize = tmp0_container.t3k();
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = targetDrawScope.a3k_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp0_apply.k3k_1 = _this__u8e3s4;
    tmp0_apply.l3k_1 = tmp3_draw;
    tmp0_apply.m3k_1 = tmp4_draw;
    tmp0_apply.n3k_1 = drawSize;
    tmp$ret$3 = tmp0_apply;
    tmp4_draw.a38();
    // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
    var tmp_6 = Companion_getInstance_0().e3a_1;
    targetDrawScope.d3l(tmp_6, null, drawSize, 0.0, null, null, Companion_getInstance_1().o36_1, 58, null);
    block(targetDrawScope);
    tmp4_draw.b38();
    var tmp$ret$4;
    // Inline function 'kotlin.apply' call
    var tmp1_apply = targetDrawScope.a3k_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp1_apply.k3k_1 = prevDensity;
    tmp1_apply.l3k_1 = prevLayoutDirection;
    tmp1_apply.m3k_1 = prevCanvas;
    tmp1_apply.n3k_1 = prevSize;
    tmp$ret$4 = tmp1_apply;
    targetImageBitmap.l3d();
    return targetImageBitmap;
  };
  BorderCache.prototype.z7h = function () {
    var tmp0_elvis_lhs = this.x7h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = Path();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.obtainPath.<anonymous>' call
      this.x7h_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  BorderCache.prototype.toString = function () {
    return 'BorderCache(imageBitmap=' + this.u7h_1 + ', canvas=' + this.v7h_1 + ', canvasDrawScope=' + this.w7h_1 + ', borderPath=' + this.x7h_1 + ')';
  };
  BorderCache.prototype.hashCode = function () {
    var result = this.u7h_1 == null ? 0 : hashCode(this.u7h_1);
    result = imul(result, 31) + (this.v7h_1 == null ? 0 : hashCode(this.v7h_1)) | 0;
    result = imul(result, 31) + (this.w7h_1 == null ? 0 : hashCode(this.w7h_1)) | 0;
    result = imul(result, 31) + (this.x7h_1 == null ? 0 : hashCode(this.x7h_1)) | 0;
    return result;
  };
  BorderCache.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderCache))
      return false;
    var tmp0_other_with_cast = other instanceof BorderCache ? other : THROW_CCE();
    if (!equals(this.u7h_1, tmp0_other_with_cast.u7h_1))
      return false;
    if (!equals(this.v7h_1, tmp0_other_with_cast.v7h_1))
      return false;
    if (!equals(this.w7h_1, tmp0_other_with_cast.w7h_1))
      return false;
    if (!equals(this.x7h_1, tmp0_other_with_cast.x7h_1))
      return false;
    return true;
  };
  BorderCache.$metadata$ = classMeta('BorderCache');
  function drawContentWithoutBorder(_this__u8e3s4) {
    return _this__u8e3s4.v4g(drawContentWithoutBorder$lambda);
  }
  function drawGenericBorder(_this__u8e3s4, borderCacheRef, brush, outline, fillArea, strokeWidth) {
    var tmp;
    if (fillArea) {
      tmp = _this__u8e3s4.v4g(drawGenericBorder$lambda(outline, brush));
    } else {
      var config;
      var colorFilter;
      if (brush instanceof SolidColor) {
        config = Companion_getInstance().n3d_1;
        var tmp_0 = Companion_getInstance_2();
        colorFilter = tmp_0.y3b(brush.w37_1, null, 2, null);
      } else {
        config = Companion_getInstance().m3d_1;
        colorFilter = null;
      }
      var pathBounds = outline.j3e_1.b3g();
      var borderCache = obtain(borderCacheRef);
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = borderCache.z7h();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.drawGenericBorder.<anonymous>' call
      tmp0_apply.b1q();
      tmp0_apply.x3f(pathBounds);
      tmp0_apply.c3g(tmp0_apply, outline.j3e_1, Companion_getInstance_3().i3g_1);
      tmp$ret$0 = tmp0_apply;
      var maskPath = tmp$ret$0;
      var cacheImageBitmap;
      var tmp$ret$1;
      // Inline function 'kotlin.math.ceil' call
      var tmp1_ceil = pathBounds.a2j();
      tmp$ret$1 = Math.ceil(tmp1_ceil);
      var tmp_1 = numberToInt(tmp$ret$1);
      var tmp$ret$2;
      // Inline function 'kotlin.math.ceil' call
      var tmp2_ceil = pathBounds.b2j();
      tmp$ret$2 = Math.ceil(tmp2_ceil);
      var pathBoundsSize = IntSize(tmp_1, numberToInt(tmp$ret$2));
      var tmp$ret$12;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache' call
      var targetImageBitmap = borderCache.u7h_1;
      var targetCanvas = borderCache.v7h_1;
      var tmp_2;
      var tmp0_safe_receiver = targetImageBitmap;
      var tmp_3 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k3d();
      if (equals(tmp_3 == null ? null : new ImageBitmapConfig(tmp_3), new ImageBitmapConfig(Companion_getInstance().m3d_1))) {
        tmp_2 = true;
      } else {
        var tmp_4 = new ImageBitmapConfig(config);
        var tmp1_safe_receiver = targetImageBitmap;
        var tmp_5 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.k3d();
        tmp_2 = equals(tmp_4, tmp_5 == null ? null : new ImageBitmapConfig(tmp_5));
      }
      var compatibleConfig = tmp_2;
      if ((((targetImageBitmap == null ? true : targetCanvas == null) ? true : _Size___get_width__impl__58y75t(_this__u8e3s4.j3k()) > targetImageBitmap.a2j()) ? true : _Size___get_height__impl__a04p02(_this__u8e3s4.j3k()) > targetImageBitmap.b2j()) ? true : !compatibleConfig) {
        var tmp$ret$3;
        // Inline function 'kotlin.also' call
        var tmp_6 = _IntSize___get_width__impl__d9yl4o(pathBoundsSize);
        var tmp_7 = _IntSize___get_height__impl__prv63b(pathBoundsSize);
        var tmp0_also = ImageBitmap$default(tmp_6, tmp_7, config, false, null, 24, null);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        borderCache.u7h_1 = tmp0_also;
        tmp$ret$3 = tmp0_also;
        targetImageBitmap = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.also' call
        var tmp1_also = Canvas(targetImageBitmap);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        borderCache.v7h_1 = tmp1_also;
        tmp$ret$4 = tmp1_also;
        targetCanvas = tmp$ret$4;
      }
      var tmp2_elvis_lhs = borderCache.w7h_1;
      var tmp_8;
      if (tmp2_elvis_lhs == null) {
        var tmp$ret$5;
        // Inline function 'kotlin.also' call
        var tmp2_also = new CanvasDrawScope();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        borderCache.w7h_1 = tmp2_also;
        tmp$ret$5 = tmp2_also;
        tmp_8 = tmp$ret$5;
      } else {
        tmp_8 = tmp2_elvis_lhs;
      }
      var targetDrawScope = tmp_8;
      var drawSize = toSize(pathBoundsSize);
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
      var tmp3_draw = _this__u8e3s4.y3k();
      var tmp4_draw = targetCanvas;
      var tmp0_container = targetDrawScope.a3k_1;
      var prevDensity = tmp0_container.z3();
      var prevLayoutDirection = tmp0_container.a4();
      var prevCanvas = tmp0_container.s3k();
      var prevSize = tmp0_container.t3k();
      var tmp$ret$6;
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = targetDrawScope.a3k_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
      tmp0_apply_0.k3k_1 = _this__u8e3s4;
      tmp0_apply_0.l3k_1 = tmp3_draw;
      tmp0_apply_0.m3k_1 = tmp4_draw;
      tmp0_apply_0.n3k_1 = drawSize;
      tmp$ret$6 = tmp0_apply_0;
      tmp4_draw.a38();
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      var tmp_9 = Companion_getInstance_0().e3a_1;
      targetDrawScope.d3l(tmp_9, null, drawSize, 0.0, null, null, Companion_getInstance_1().o36_1, 58, null);
      // Inline function 'androidx.compose.foundation.drawGenericBorder.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      var tmp0_translate = -pathBounds.u2i_1;
      var tmp1_translate = -pathBounds.v2i_1;
      targetDrawScope.z3k().w3k().d38(tmp0_translate, tmp1_translate);
      // Inline function 'androidx.compose.foundation.drawGenericBorder.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_10 = strokeWidth * 2;
      var tmp_11 = Stroke_init_$Create$(tmp_10, 0.0, null, null, null, 30, null);
      targetDrawScope.m3l(outline.j3e_1, brush, 0.0, tmp_11, null, null, 52, null);
      var tmp$ret$9;
      // Inline function 'androidx.compose.ui.graphics.drawscope.scale' call
      var tmp0_scale = (_Size___get_width__impl__58y75t(targetDrawScope.j3k()) + 1) / _Size___get_width__impl__58y75t(targetDrawScope.j3k());
      var tmp1_scale = (_Size___get_height__impl__a04p02(targetDrawScope.j3k()) + 1) / _Size___get_height__impl__a04p02(targetDrawScope.j3k());
      var tmp2_scale = targetDrawScope.q3l();
      var tmp$ret$8;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      var tmp$ret$7;
      // Inline function 'kotlin.with' call
      var tmp0_with = targetDrawScope.z3k();
      // Inline function 'kotlin.contracts.contract' call
      var previousSize = tmp0_with.j3k();
      tmp0_with.u2w().a38();
      // Inline function 'androidx.compose.ui.graphics.drawscope.scale.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_with.w3k();
      tmp1__anonymous__uwfjfc.t3l(tmp0_scale, tmp1_scale, tmp2_scale);
      // Inline function 'androidx.compose.foundation.drawGenericBorder.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      targetDrawScope.m3l(maskPath, brush, 0.0, null, null, Companion_getInstance_1().o36_1, 28, null);
      tmp0_with.u2w().b38();
      tmp0_with.r3k(previousSize);
      tmp$ret$7 = Unit_getInstance();
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      targetDrawScope.z3k().w3k().d38(-tmp0_translate, -tmp1_translate);
      tmp4_draw.b38();
      var tmp$ret$10;
      // Inline function 'kotlin.apply' call
      var tmp1_apply = targetDrawScope.a3k_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
      tmp1_apply.k3k_1 = prevDensity;
      tmp1_apply.l3k_1 = prevLayoutDirection;
      tmp1_apply.m3k_1 = prevCanvas;
      tmp1_apply.n3k_1 = prevSize;
      tmp$ret$10 = tmp1_apply;
      targetImageBitmap.l3d();
      tmp$ret$11 = targetImageBitmap;
      cacheImageBitmap = tmp$ret$11;
      tmp$ret$12 = Unit_getInstance();
      tmp = _this__u8e3s4.v4g(drawGenericBorder$lambda_0(pathBounds, cacheImageBitmap, pathBoundsSize, colorFilter));
    }
    return tmp;
  }
  function drawRoundRectBorder(_this__u8e3s4, borderCacheRef, brush, outline, topLeft, borderSize, fillArea, strokeWidth) {
    var tmp;
    if (get_isSimple(outline.f3e_1)) {
      var cornerRadius = outline.f3e_1.j2j_1;
      var halfStroke = strokeWidth / 2;
      var borderStroke = Stroke_init_$Create$(strokeWidth, 0.0, null, null, null, 30, null);
      tmp = _this__u8e3s4.v4g(drawRoundRectBorder$lambda(fillArea, brush, cornerRadius, halfStroke, strokeWidth, topLeft, borderSize, borderStroke));
    } else {
      var path = obtain(borderCacheRef).z7h();
      var roundedRectPath = createRoundRectPath(path, outline.f3e_1, strokeWidth, fillArea);
      tmp = _this__u8e3s4.v4g(drawRoundRectBorder$lambda_0(roundedRectPath, brush));
    }
    return tmp;
  }
  function drawRectBorder(_this__u8e3s4, brush, topLeft, borderSize, fillArea, strokeWidthPx) {
    var rectTopLeft = fillArea ? Companion_getInstance_4().o2i_1 : topLeft;
    var size = fillArea ? _this__u8e3s4.j3k() : borderSize;
    var tmp;
    if (fillArea) {
      tmp = Fill_getInstance();
    } else {
      tmp = Stroke_init_$Create$(strokeWidthPx, 0.0, null, null, null, 30, null);
    }
    var style = tmp;
    return _this__u8e3s4.v4g(drawRectBorder$lambda(brush, rectTopLeft, size, style));
  }
  function obtain(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.z66_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = BorderCache_init_$Create$(null, null, null, null, 15, null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.obtain.<anonymous>' call
      _this__u8e3s4.z66_1 = tmp0_also;
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
    targetPath.b1q();
    targetPath.h3e(roundedRect);
    if (!fillArea) {
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Path();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.createRoundRectPath.<anonymous>.<anonymous>' call
      tmp0_apply.h3e(createInsetRoundedRect(strokeWidth, roundedRect));
      tmp$ret$0 = tmp0_apply;
      var insetPath = tmp$ret$0;
      targetPath.c3g(targetPath, insetPath, Companion_getInstance_3().i3g_1);
    }
    tmp$ret$1 = targetPath;
    return tmp$ret$1;
  }
  function createInsetRoundedRect(widthPx, roundedRect) {
    var tmp0_right = roundedRect.a2j() - widthPx;
    var tmp1_bottom = roundedRect.b2j() - widthPx;
    var tmp2_topLeftCornerRadius = shrink(roundedRect.j2j_1, widthPx);
    var tmp3_topRightCornerRadius = shrink(roundedRect.k2j_1, widthPx);
    var tmp4_bottomLeftCornerRadius = shrink(roundedRect.m2j_1, widthPx);
    var tmp5_bottomRightCornerRadius = shrink(roundedRect.l2j_1, widthPx);
    return new RoundRect(widthPx, widthPx, tmp0_right, tmp1_bottom, tmp2_topLeftCornerRadius, tmp3_topRightCornerRadius, tmp5_bottomRightCornerRadius, tmp4_bottomLeftCornerRadius);
  }
  function border$lambda($width, $brush, $shape) {
    return function ($this$null) {
      $this$null.e4h_1 = 'border';
      $this$null.g4h_1.k4h('width', new Dp($width));
      if ($brush instanceof SolidColor) {
        $this$null.g4h_1.k4h('color', new Color($brush.w37_1));
        $this$null.f4h_1 = new Color($brush.w37_1);
      } else {
        $this$null.g4h_1.k4h('brush', $brush);
      }
      $this$null.g4h_1.k4h('shape', $shape);
      return Unit_getInstance();
    };
  }
  function border$lambda$lambda($width, $shape, $borderCacheRef, $brush) {
    return function ($this$drawWithCache) {
      var hasValidBorderParams = $this$drawWithCache.o2k($width) >= 0.0 ? _Size___get_minDimension__impl__4iso0r($this$drawWithCache.j3k()) > 0.0 : false;
      var tmp;
      if (!hasValidBorderParams) {
        tmp = drawContentWithoutBorder($this$drawWithCache);
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.math.min' call
        var tmp_0;
        if (equals($width, Companion_getInstance_5().b2l_1)) {
          tmp_0 = 1.0;
        } else {
          var tmp$ret$0;
          // Inline function 'kotlin.math.ceil' call
          var tmp0_ceil = $this$drawWithCache.o2k($width);
          tmp$ret$0 = Math.ceil(tmp0_ceil);
          tmp_0 = tmp$ret$0;
        }
        var tmp2_min = tmp_0;
        var tmp$ret$1;
        // Inline function 'kotlin.math.ceil' call
        var tmp1_ceil = _Size___get_minDimension__impl__4iso0r($this$drawWithCache.j3k()) / 2;
        tmp$ret$1 = Math.ceil(tmp1_ceil);
        var tmp3_min = tmp$ret$1;
        tmp$ret$2 = Math.min(tmp2_min, tmp3_min);
        var strokeWidthPx = tmp$ret$2;
        var halfStroke = strokeWidthPx / 2;
        var topLeft = Offset(halfStroke, halfStroke);
        var borderSize = Size_0(_Size___get_width__impl__58y75t($this$drawWithCache.j3k()) - strokeWidthPx, _Size___get_height__impl__a04p02($this$drawWithCache.j3k()) - strokeWidthPx);
        var fillArea = strokeWidthPx * 2 > _Size___get_minDimension__impl__4iso0r($this$drawWithCache.j3k());
        var outline = $shape.t3g($this$drawWithCache.j3k(), $this$drawWithCache.y3k(), $this$drawWithCache);
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
      $composer_0.y1a(-1498088849);
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
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.border.<anonymous>.<anonymous>' call
        tmp$ret$0 = new Ref();
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
      var borderCacheRef = tmp$ret$4;
      var tmp_2 = Companion_getInstance_7();
      var tmp0_0 = $this$composed.y4e(drawWithCache(tmp_2, border$lambda$lambda($width, $shape, borderCacheRef, $brush)));
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      $composer_0.d1b();
      return tmp0_0;
    };
  }
  function drawContentWithoutBorder$lambda($this$onDrawWithContent) {
    $this$onDrawWithContent.v3l();
    return Unit_getInstance();
  }
  function drawGenericBorder$lambda($outline, $brush) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.v3l();
      $this$onDrawWithContent.m3l($outline.j3e_1, $brush, 0.0, null, null, null, 60, null);
      return Unit_getInstance();
    };
  }
  function drawGenericBorder$lambda_0($pathBounds, $cacheImageBitmap, $pathBoundsSize, $colorFilter) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.v3l();
      var tmp0_translate = $pathBounds.u2i_1;
      var tmp1_translate = $pathBounds.v2i_1;
      $this$onDrawWithContent.z3k().w3k().d38(tmp0_translate, tmp1_translate);
      // Inline function 'androidx.compose.foundation.drawGenericBorder.<anonymous>.<anonymous>' call
      $this$onDrawWithContent.f3l($cacheImageBitmap, null, $pathBoundsSize, null, null, 0.0, null, $colorFilter, null, null, 890, null);
      $this$onDrawWithContent.z3k().w3k().d38(-tmp0_translate, -tmp1_translate);
      return Unit_getInstance();
    };
  }
  function drawRoundRectBorder$lambda($fillArea, $brush, $cornerRadius, $halfStroke, $strokeWidth, $topLeft, $borderSize, $borderStroke) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.v3l();
      var tmp;
      if ($fillArea) {
        $this$onDrawWithContent.g3l($brush, null, null, $cornerRadius, 0.0, null, null, null, 246, null);
        tmp = Unit_getInstance();
      } else if (_CornerRadius___get_x__impl__1594cn($cornerRadius) < $halfStroke) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var tmp0_clipRect = _Size___get_width__impl__58y75t($this$onDrawWithContent.j3k()) - $strokeWidth;
        var tmp1_clipRect = _Size___get_height__impl__a04p02($this$onDrawWithContent.j3k()) - $strokeWidth;
        var tmp2_clipRect = Companion_getInstance_8().j38_1;
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = $this$onDrawWithContent.z3k();
        // Inline function 'kotlin.contracts.contract' call
        var previousSize = tmp0_with.j3k();
        tmp0_with.u2w().a38();
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tmp0_with.w3k();
        tmp0__anonymous__q1qw7t.h38($strokeWidth, $strokeWidth, tmp0_clipRect, tmp1_clipRect, tmp2_clipRect);
        // Inline function 'androidx.compose.foundation.drawRoundRectBorder.<anonymous>.<anonymous>' call
        $this$onDrawWithContent.g3l($brush, null, null, $cornerRadius, 0.0, null, null, null, 246, null);
        tmp0_with.u2w().b38();
        tmp0_with.r3k(previousSize);
        tmp$ret$0 = Unit_getInstance();
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } else {
        var tmp_0 = shrink($cornerRadius, $halfStroke);
        $this$onDrawWithContent.g3l($brush, $topLeft, $borderSize, tmp_0, 0.0, $borderStroke, null, null, 208, null);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function drawRoundRectBorder$lambda_0($roundedRectPath, $brush) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.v3l();
      $this$onDrawWithContent.m3l($roundedRectPath, $brush, 0.0, null, null, null, 60, null);
      return Unit_getInstance();
    };
  }
  function drawRectBorder$lambda($brush, $rectTopLeft, $size, $style) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.v3l();
      $this$onDrawWithContent.c3l($brush, $rectTopLeft, $size, 0.0, $style, null, null, 104, null);
      return Unit_getInstance();
    };
  }
  function BorderStroke(width, brush) {
    this.s7h_1 = width;
    this.t7h_1 = brush;
  }
  BorderStroke.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderStroke))
      return false;
    if (!equals(this.s7h_1, other.s7h_1))
      return false;
    if (!equals(this.t7h_1, other.t7h_1))
      return false;
    return true;
  };
  BorderStroke.prototype.hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.s7h_1);
    result = imul(31, result) + hashCode(this.t7h_1) | 0;
    return result;
  };
  BorderStroke.prototype.toString = function () {
    return 'BorderStroke(width=' + new Dp(this.s7h_1) + ', brush=' + this.t7h_1 + ')';
  };
  BorderStroke.$metadata$ = classMeta('BorderStroke');
  function BorderStroke_0(width, color) {
    return new BorderStroke(width, new SolidColor(color));
  }
  function Canvas$composable(modifier, onDraw, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.z1n(749810168);
    sourceInformation($composer_0, 'C(Canvas$composable)42@1876L35:Canvas.kt#71ulvw');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(modifier) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(onDraw) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(749810168, $changed, -1, 'androidx.compose.foundation.Canvas$composable (Canvas.kt:41)');
      }
      Spacer$composable(drawBehind(modifier, onDraw), $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.a1o();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.g1p(Canvas$composable$lambda$ref(modifier, onDraw, $changed));
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
    $composer_0 = $composer_0.z1n(-435571087);
    sourceInformation($composer_0, 'C(PressedInteractionSourceDisposableEffect$composable)P(1,2)444@18729L504:Clickable.kt#71ulvw');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(interactionSource) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(pressedInteraction) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.z1a(currentKeyPressInteractions) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.l1m()) {
      if (isTraceInProgress()) {
        traceEventStart(-435571087, $dirty, -1, 'androidx.compose.foundation.PressedInteractionSourceDisposableEffect$composable (Clickable.kt:439)');
      }
      DisposableEffect$composable(interactionSource, PressedInteractionSourceDisposableEffect$composable$lambda_0(pressedInteraction, interactionSource, currentKeyPressInteractions), $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp0_safe_receiver = $composer_0.a1o();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.g1p(PressedInteractionSourceDisposableEffect$composable$lambda$ref(interactionSource, pressedInteraction, currentKeyPressInteractions, $changed));
    }
  }
  function focusRequesterAndModifier$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(1212800505);
    sourceInformation($composer_0, 'C(focusRequesterAndModifier$composable)107@4392L29:Clickable.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(1212800505, $changed, -1, 'androidx.compose.foundation.focusRequesterAndModifier$composable (Clickable.kt:106)');
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
    if (false ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.focusRequesterAndModifier$composable.<anonymous>' call
      tmp$ret$0 = new FocusRequester();
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
    var focusRequester_0 = tmp$ret$4;
    var tmp0_0 = to(focusRequester_0, focusRequester(Companion_getInstance_7(), focusRequester_0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_0;
  }
  function handlePressInteraction(_this__u8e3s4, pressPoint, interactionSource, pressedInteraction, delayPressInteraction, $cont) {
    return coroutineScope(handlePressInteraction$slambda_0(_this__u8e3s4, pressPoint, interactionSource, pressedInteraction, delayPressInteraction, null), $cont);
  }
  function genericClickableWithoutGesture(_this__u8e3s4, gestureModifiers, interactionSource, indication_0, indicationScope, currentKeyPressInteractions, keyClickOffset, enabled, onClickLabel, role, onLongClickLabel, onLongClick, onClick) {
    return focusable(hoverable(indication(genericClickableWithoutGesture$detectPressAndClickFromKey(genericClickableWithoutGesture$clickSemantics(_this__u8e3s4, role, onClickLabel, onLongClick, onLongClickLabel, enabled, onClick), enabled, currentKeyPressInteractions, keyClickOffset, indicationScope, onClick, interactionSource), interactionSource, indication_0), interactionSource, enabled), enabled, interactionSource).y4e(gestureModifiers);
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
      $this$null.e4h_1 = 'clickable';
      $this$null.g4h_1.k4h('enabled', $enabled);
      $this$null.g4h_1.k4h('onClickLabel', $onClickLabel);
      var tmp = $role;
      $this$null.g4h_1.k4h('role', tmp == null ? null : new Role(tmp));
      $this$null.g4h_1.k4h('onClick', $onClick);
      $this$null.g4h_1.k4h('indication', $indication);
      $this$null.g4h_1.k4h('interactionSource', $interactionSource);
      return Unit_getInstance();
    };
  }
  function clickable$lambda$lambda($isClickableInScrollableContainer, $isRootInScrollableContainer) {
    return function () {
      return $isClickableInScrollableContainer.i2() ? true : $isRootInScrollableContainer();
    };
  }
  function clickable$lambda$slambda$slambda($enabled, $interactionSource, $pressedInteraction, $delayPressInteraction, resultContinuation) {
    this.i7i_1 = $enabled;
    this.j7i_1 = $interactionSource;
    this.k7i_1 = $pressedInteraction;
    this.l7i_1 = $delayPressInteraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  clickable$lambda$slambda$slambda.prototype.o7i = function ($this$detectTapAndPress, offset, $cont) {
    var tmp = this.p7i($this$detectTapAndPress, offset, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  clickable$lambda$slambda$slambda.prototype.hh = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, PressGestureScope) : false) ? p1 : THROW_CCE();
    return this.o7i(tmp, p2 instanceof Offset_0 ? p2.s2i_1 : THROW_CCE(), $cont);
  };
  clickable$lambda$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            if (this.i7i_1) {
              this.zf_1 = 1;
              suspendResult = handlePressInteraction(this.m7i_1, this.n7i_1, this.j7i_1, this.k7i_1, this.l7i_1, this);
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
  clickable$lambda$slambda$slambda.prototype.p7i = function ($this$detectTapAndPress, offset, completion) {
    var i = new clickable$lambda$slambda$slambda(this.i7i_1, this.j7i_1, this.k7i_1, this.l7i_1, completion);
    i.m7i_1 = $this$detectTapAndPress;
    i.n7i_1 = offset;
    return i;
  };
  clickable$lambda$slambda$slambda.$metadata$ = classMeta('clickable$lambda$slambda$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function clickable$lambda$slambda$slambda_0($enabled, $interactionSource, $pressedInteraction, $delayPressInteraction, resultContinuation) {
    var i = new clickable$lambda$slambda$slambda($enabled, $interactionSource, $pressedInteraction, $delayPressInteraction, resultContinuation);
    var l = function ($this$detectTapAndPress, offset, $cont) {
      return i.o7i($this$detectTapAndPress, offset.s2i_1, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function clickable$lambda$slambda$lambda($enabled, $focusRequester, $onClickState) {
    return function (it) {
      var tmp;
      if ($enabled) {
        $focusRequester.w4k();
        tmp = $onClickState.i2()();
      }
      return Unit_getInstance();
    };
  }
  function clickable$lambda$slambda($centreOffset, $enabled, $interactionSource, $pressedInteraction, $delayPressInteraction, $focusRequester, $onClickState, resultContinuation) {
    this.y7i_1 = $centreOffset;
    this.z7i_1 = $enabled;
    this.a7j_1 = $interactionSource;
    this.b7j_1 = $pressedInteraction;
    this.c7j_1 = $delayPressInteraction;
    this.d7j_1 = $focusRequester;
    this.e7j_1 = $onClickState;
    CoroutineImpl.call(this, resultContinuation);
  }
  clickable$lambda$slambda.prototype.s57 = function ($this$pointerInput, $cont) {
    var tmp = this.t57($this$pointerInput, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  clickable$lambda$slambda.prototype.jg = function (p1, $cont) {
    return this.s57((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  clickable$lambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            var tmp_0 = this;
            tmp_0.g7j_1 = get_center(this.f7j_1.a54());
            this.y7i_1.p11(new Offset_0(Offset(_IntOffset___get_x__impl__qiqr5o(this.g7j_1), _IntOffset___get_y__impl__2avpwj(this.g7j_1))));
            this.zf_1 = 1;
            var tmp_1 = clickable$lambda$slambda$slambda_0(this.z7i_1, this.a7j_1, this.b7j_1, this.c7j_1, null);
            suspendResult = detectTapAndPress(this.f7j_1, tmp_1, clickable$lambda$slambda$lambda(this.z7i_1, this.d7j_1, this.e7j_1), this);
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
  clickable$lambda$slambda.prototype.t57 = function ($this$pointerInput, completion) {
    var i = new clickable$lambda$slambda(this.y7i_1, this.z7i_1, this.a7j_1, this.b7j_1, this.c7j_1, this.d7j_1, this.e7j_1, completion);
    i.f7j_1 = $this$pointerInput;
    return i;
  };
  clickable$lambda$slambda.$metadata$ = classMeta('clickable$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function clickable$lambda$slambda_0($centreOffset, $enabled, $interactionSource, $pressedInteraction, $delayPressInteraction, $focusRequester, $onClickState, resultContinuation) {
    var i = new clickable$lambda$slambda($centreOffset, $enabled, $interactionSource, $pressedInteraction, $delayPressInteraction, $focusRequester, $onClickState, resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.s57($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function clickable$2$1$1($isClickableInScrollableContainer) {
    this.h7j_1 = $isClickableInScrollableContainer;
  }
  clickable$2$1$1.prototype.b4k = function (scope) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    this.h7j_1.p11(scope.c4k(get_ModifierLocalScrollableContainer()));
    tmp$ret$0 = Unit_getInstance();
  };
  clickable$2$1$1.$metadata$ = classMeta(undefined, [ModifierLocalConsumer]);
  function clickable$lambda$lambda_0() {
    return EmptyCoroutineContext_getInstance();
  }
  function clickable$lambda_0($onClick, $enabled, $interactionSource, $indication, $onClickLabel, $role) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y1a(92076020);
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
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.clickable.<anonymous>.<anonymous>' call
        tmp$ret$0 = mutableStateOf$default(null, null, 2, null);
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
      var pressedInteraction = tmp$ret$4;
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var $composer_2 = tmp1_remember$composable;
      $composer_2.y1a(547886695);
      sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (false ? true : tmp0_let_0 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$6;
        // Inline function 'androidx.compose.foundation.clickable.<anonymous>.<anonymous>' call
        var tmp$ret$5;
        // Inline function 'kotlin.collections.mutableMapOf' call
        tmp$ret$5 = LinkedHashMap_init_$Create$();
        tmp$ret$6 = tmp$ret$5;
        var value_0 = tmp$ret$6;
        tmp1_cache_0.b1b(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      tmp$ret$7 = tmp_2;
      tmp$ret$8 = tmp$ret$7;
      var tmp_3 = tmp$ret$8;
      tmp$ret$9 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_0 = tmp$ret$9;
      $composer_2.d1b();
      tmp$ret$10 = tmp0_0;
      var currentKeyPressInteractions = tmp$ret$10;
      $composer_0.y1a(1841981872);
      sourceInformation($composer_0, '149@6354L170');
      if ($enabled) {
        PressedInteractionSourceDisposableEffect$composable($interactionSource, pressedInteraction, currentKeyPressInteractions, $composer_0, 0);
      }
      $composer_0.d1b();
      var isRootInScrollableContainer = isComposeRootInScrollableContainer$composable($composer_0, 0);
      var tmp$ret$15;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_3 = tmp2_remember$composable;
      $composer_3.y1a(547886695);
      sourceInformation($composer_3, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_3;
      var tmp$ret$13;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (false ? true : tmp0_let_1 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$11;
        // Inline function 'androidx.compose.foundation.clickable.<anonymous>.<anonymous>' call
        tmp$ret$11 = mutableStateOf$default(true, null, 2, null);
        var value_1 = tmp$ret$11;
        tmp1_cache_1.b1b(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = tmp0_let_1;
      }
      tmp$ret$12 = tmp_4;
      tmp$ret$13 = tmp$ret$12;
      var tmp_5 = tmp$ret$13;
      tmp$ret$14 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0_1 = tmp$ret$14;
      $composer_3.d1b();
      tmp$ret$15 = tmp0_1;
      var isClickableInScrollableContainer = tmp$ret$15;
      var tmp$ret$20;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_4 = tmp3_remember$composable;
      $composer_4.y1a(-1124426577);
      sourceInformation($composer_4, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_4;
      var tmp2_cache = !!($composer_4.z1a(isClickableInScrollableContainer) | $composer_4.z1a(isRootInScrollableContainer));
      var tmp$ret$18;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = tmp1_cache_2.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$17;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (tmp2_cache ? true : tmp0_let_2 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$16;
        // Inline function 'androidx.compose.foundation.clickable.<anonymous>.<anonymous>' call
        tmp$ret$16 = clickable$lambda$lambda(isClickableInScrollableContainer, isRootInScrollableContainer);
        var value_2 = tmp$ret$16;
        tmp1_cache_2.b1b(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = tmp0_let_2;
      }
      tmp$ret$17 = tmp_6;
      tmp$ret$18 = tmp$ret$17;
      var tmp_7 = tmp$ret$18;
      tmp$ret$19 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      var tmp0_2 = tmp$ret$19;
      $composer_4.d1b();
      tmp$ret$20 = tmp0_2;
      var delayPressInteraction = rememberUpdatedState$composable(tmp$ret$20, $composer_0, 0);
      var tmp$ret$25;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp4_remember$composable = $composer_0;
      var $composer_5 = tmp4_remember$composable;
      $composer_5.y1a(547886695);
      sourceInformation($composer_5, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$24;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_3 = $composer_5;
      var tmp$ret$23;
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = tmp1_cache_3.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$22;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_8;
      if (false ? true : tmp0_let_3 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$21;
        // Inline function 'androidx.compose.foundation.clickable.<anonymous>.<anonymous>' call
        var tmp_9 = new Offset_0(Companion_getInstance_4().o2i_1);
        tmp$ret$21 = mutableStateOf$default(tmp_9, null, 2, null);
        var value_3 = tmp$ret$21;
        tmp1_cache_3.b1b(value_3);
        tmp_8 = value_3;
      } else {
        tmp_8 = tmp0_let_3;
      }
      tmp$ret$22 = tmp_8;
      tmp$ret$23 = tmp$ret$22;
      var tmp_10 = tmp$ret$23;
      tmp$ret$24 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
      var tmp0_3 = tmp$ret$24;
      $composer_5.d1b();
      tmp$ret$25 = tmp0_3;
      var centreOffset = tmp$ret$25;
      var tmp0_container = focusRequesterAndModifier$composable($composer_0, 0);
      var focusRequester = tmp0_container.z3();
      var focusRequesterModifier = tmp0_container.a4();
      var tmp_11 = Companion_getInstance_7();
      var gesture = pointerInput(tmp_11, $interactionSource, $enabled, clickable$lambda$slambda_0(centreOffset, $enabled, $interactionSource, pressedInteraction, delayPressInteraction, focusRequester, onClickState, null));
      var tmp_12 = Companion_getInstance_7();
      var tmp$ret$30;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp5_remember$composable = $composer_0;
      var $composer_6 = tmp5_remember$composable;
      $composer_6.y1a(547886695);
      sourceInformation($composer_6, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$29;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_4 = $composer_6;
      var tmp$ret$28;
      // Inline function 'kotlin.let' call
      var tmp0_let_4 = tmp1_cache_4.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$27;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_13;
      if (false ? true : tmp0_let_4 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$26;
        // Inline function 'androidx.compose.foundation.clickable.<anonymous>.<anonymous>' call
        tmp$ret$26 = new clickable$2$1$1(isClickableInScrollableContainer);
        var value_4 = tmp$ret$26;
        tmp1_cache_4.b1b(value_4);
        tmp_13 = value_4;
      } else {
        tmp_13 = tmp0_let_4;
      }
      tmp$ret$27 = tmp_13;
      tmp$ret$28 = tmp$ret$27;
      var tmp_14 = tmp$ret$28;
      tmp$ret$29 = (tmp_14 == null ? true : isObject(tmp_14)) ? tmp_14 : THROW_CCE();
      var tmp0_4 = tmp$ret$29;
      $composer_6.d1b();
      tmp$ret$30 = tmp0_4;
      var tmp_15 = tmp_12.y4e(tmp$ret$30).y4e(focusRequesterModifier);
      var tmp$ret$36;
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable' call
      var tmp6_rememberCoroutineScope$composable = null;
      var tmp7_rememberCoroutineScope$composable = $composer_0;
      var getContext = {_v: tmp6_rememberCoroutineScope$composable};
      var $composer_7 = tmp7_rememberCoroutineScope$composable;
      $composer_7.y1a(102870005);
      sourceInformation($composer_7, 'C(rememberCoroutineScope$composable)476@19869L144:Effects.kt#9igjgp');
      if (!(1 === 0)) {
        getContext._v = clickable$lambda$lambda_0;
      }
      var composer = $composer_7;
      var tmp$ret$35;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable_0 = $composer_7;
      var $composer_8 = tmp0_remember$composable_0;
      $composer_8.y1a(547886695);
      sourceInformation($composer_8, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$34;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_5 = $composer_8;
      var tmp$ret$33;
      // Inline function 'kotlin.let' call
      var tmp0_let_5 = tmp1_cache_5.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$32;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_16;
      if (false ? true : tmp0_let_5 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$31;
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        tmp$ret$31 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
        var value_5 = tmp$ret$31;
        tmp1_cache_5.b1b(value_5);
        tmp_16 = value_5;
      } else {
        tmp_16 = tmp0_let_5;
      }
      tmp$ret$32 = tmp_16;
      tmp$ret$33 = tmp$ret$32;
      var tmp_17 = tmp$ret$33;
      tmp$ret$34 = (tmp_17 == null ? true : isObject(tmp_17)) ? tmp_17 : THROW_CCE();
      var tmp0_5 = tmp$ret$34;
      $composer_8.d1b();
      tmp$ret$35 = tmp0_5;
      var wrapper = tmp$ret$35;
      var tmp0_6 = wrapper.e1u_1;
      $composer_7.d1b();
      tmp$ret$36 = tmp0_6;
      var tmp0_7 = genericClickableWithoutGesture(tmp_15, gesture, $interactionSource, $indication, tmp$ret$36, currentKeyPressInteractions, centreOffset, $enabled, $onClickLabel, $role, null, null, $onClick);
      var tmp_18;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_18 = Unit_getInstance();
      }
      $composer_0.d1b();
      return tmp0_7;
    };
  }
  function _no_name_provided__qut3iv($pressedInteraction, $interactionSource, $currentKeyPressInteractions) {
    this.i7j_1 = $pressedInteraction;
    this.j7j_1 = $interactionSource;
    this.k7j_1 = $currentKeyPressInteractions;
  }
  _no_name_provided__qut3iv.prototype.vk = function () {
    // Inline function 'androidx.compose.foundation.PressedInteractionSourceDisposableEffect$composable.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.i7j_1.i2();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var interaction = new Cancel_0(tmp0_safe_receiver);
      this.j7j_1.l7j(interaction);
      this.i7j_1.p11(null);
      tmp$ret$0 = Unit_getInstance();
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.k7j_1.x2();
    var tmp0_iterator = tmp0_forEach.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'androidx.compose.foundation.PressedInteractionSourceDisposableEffect$composable.<anonymous>.<anonymous>.<anonymous>' call
      this.j7j_1.l7j(new Cancel_0(element));
    }
    this.k7j_1.g9();
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
    this.u7j_1 = $delayPressInteraction;
    this.v7j_1 = $pressPoint;
    this.w7j_1 = $interactionSource;
    this.x7j_1 = $pressedInteraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  handlePressInteraction$slambda$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  handlePressInteraction$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  handlePressInteraction$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            if (this.u7j_1.i2()()) {
              this.zf_1 = 1;
              suspendResult = delay(get_TapIndicationDelay(), this);
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
            this.zf_1 = 2;
            continue $sm;
          case 2:
            this.z7j_1 = new Press(this.v7j_1);
            this.zf_1 = 3;
            suspendResult = this.w7j_1.a7k(this.z7j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.x7j_1.p11(this.z7j_1);
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
  handlePressInteraction$slambda$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new handlePressInteraction$slambda$slambda(this.u7j_1, this.v7j_1, this.w7j_1, this.x7j_1, completion);
    i.y7j_1 = $this$launch;
    return i;
  };
  handlePressInteraction$slambda$slambda.$metadata$ = classMeta('handlePressInteraction$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function handlePressInteraction$slambda$slambda_0($delayPressInteraction, $pressPoint, $interactionSource, $pressedInteraction, resultContinuation) {
    var i = new handlePressInteraction$slambda$slambda($delayPressInteraction, $pressPoint, $interactionSource, $pressedInteraction, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function handlePressInteraction$slambda($this_handlePressInteraction, $pressPoint, $interactionSource, $pressedInteraction, $delayPressInteraction, resultContinuation) {
    this.j7k_1 = $this_handlePressInteraction;
    this.k7k_1 = $pressPoint;
    this.l7k_1 = $interactionSource;
    this.m7k_1 = $pressedInteraction;
    this.n7k_1 = $delayPressInteraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  handlePressInteraction$slambda.prototype.e1w = function ($this$coroutineScope, $cont) {
    var tmp = this.f1w($this$coroutineScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  handlePressInteraction$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  handlePressInteraction$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 9;
            var tmp_0 = this;
            tmp_0.p7k_1 = launch$default(this.o7k_1, null, null, handlePressInteraction$slambda$slambda_0(this.n7k_1, this.k7k_1, this.l7k_1, this.m7k_1, null), 3, null);
            this.zf_1 = 1;
            suspendResult = this.j7k_1.w7k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.q7k_1 = suspendResult;
            if (this.p7k_1.wh()) {
              this.zf_1 = 4;
              suspendResult = cancelAndJoin(this.p7k_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.r7k_1 = this.m7k_1.i2();
              if (this.r7k_1 == null) {
                this.s7k_1 = null;
                this.zf_1 = 3;
                continue $sm;
              } else {
                var tmp_1 = this;
                var tmp_2;
                if (this.q7k_1) {
                  tmp_2 = new Release(this.r7k_1);
                } else {
                  tmp_2 = new Cancel_0(this.r7k_1);
                }
                tmp_1.t7k_1 = tmp_2;
                this.zf_1 = 2;
                suspendResult = this.l7k_1.a7k(this.t7k_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 2:
            var tmp_3 = this;
            tmp_3.s7k_1 = Unit_getInstance();
            this.zf_1 = 3;
            continue $sm;
          case 3:
            ;
            this.zf_1 = 8;
            continue $sm;
          case 4:
            if (this.q7k_1) {
              this.u7k_1 = new Press(this.k7k_1);
              this.v7k_1 = new Release(this.u7k_1);
              this.zf_1 = 5;
              suspendResult = this.l7k_1.a7k(this.u7k_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 7;
              continue $sm;
            }

            break;
          case 5:
            this.zf_1 = 6;
            suspendResult = this.l7k_1.a7k(this.v7k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.zf_1 = 7;
            continue $sm;
          case 7:
            this.zf_1 = 8;
            continue $sm;
          case 8:
            this.m7k_1.p11(null);
            return Unit_getInstance();
          case 9:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 9) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  handlePressInteraction$slambda.prototype.f1w = function ($this$coroutineScope, completion) {
    var i = new handlePressInteraction$slambda(this.j7k_1, this.k7k_1, this.l7k_1, this.m7k_1, this.n7k_1, completion);
    i.o7k_1 = $this$coroutineScope;
    return i;
  };
  handlePressInteraction$slambda.$metadata$ = classMeta('handlePressInteraction$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function handlePressInteraction$slambda_0($this_handlePressInteraction, $pressPoint, $interactionSource, $pressedInteraction, $delayPressInteraction, resultContinuation) {
    var i = new handlePressInteraction$slambda($this_handlePressInteraction, $pressPoint, $interactionSource, $pressedInteraction, $delayPressInteraction, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.e1w($this$coroutineScope, $cont);
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
    this.f7l_1 = $interactionSource;
    this.g7l_1 = $press;
    CoroutineImpl.call(this, resultContinuation);
  }
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.f7l_1.a7k(this.g7l_1, this);
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
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda(this.f7l_1, this.g7l_1, completion);
    i.h7l_1 = $this$launch;
    return i;
  };
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda.$metadata$ = classMeta('genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_0($interactionSource, $press, resultContinuation) {
    var i = new genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda($interactionSource, $press, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1($interactionSource, $tmp0_safe_receiver, resultContinuation) {
    this.q7l_1 = $interactionSource;
    this.r7l_1 = $tmp0_safe_receiver;
    CoroutineImpl.call(this, resultContinuation);
  }
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.q7l_1.a7k(new Release(this.r7l_1), this);
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
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1.prototype.f1w = function ($this$launch, completion) {
    var i = new genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1(this.q7l_1, this.r7l_1, completion);
    i.s7l_1 = $this$launch;
    return i;
  };
  genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1.$metadata$ = classMeta('genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_2($interactionSource, $tmp0_safe_receiver, resultContinuation) {
    var i = new genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_1($interactionSource, $tmp0_safe_receiver, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function genericClickableWithoutGesture$detectPressAndClickFromKey$lambda($enabled, $currentKeyPressInteractions, $keyClickOffset, $indicationScope, $onClick, $interactionSource) {
    return function (keyEvent) {
      var tmp;
      if ($enabled ? get_isPress(keyEvent.r51_1) : false) {
        var tmp_0;
        if (!$currentKeyPressInteractions.q2(new Key(get_key(keyEvent.r51_1)))) {
          var press = new Press($keyClickOffset.i2().s2i_1);
          // Inline function 'kotlin.collections.set' call
          var tmp0_set = get_key(keyEvent.r51_1);
          $currentKeyPressInteractions.q(new Key(tmp0_set), press);
          launch$default($indicationScope, null, null, genericClickableWithoutGesture$detectPressAndClickFromKey$lambda$slambda_0($interactionSource, press, null), 3, null);
          tmp_0 = true;
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      } else if ($enabled ? get_isClick(keyEvent.r51_1) : false) {
        var tmp0_safe_receiver = $currentKeyPressInteractions.k3(new Key(get_key(keyEvent.r51_1)));
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
    tmp$ret$1 = tmp1__anonymous__uwfjfc.y4e(new PinnableParentConsumer(onPinnableParentAvailable));
    tmp$ret$2 = inspectableWrapper(_this__u8e3s4, tmp0_inspectable, tmp$ret$1);
    return tmp$ret$2;
  }
  function PinnableParentConsumer(onPinnableParentAvailable) {
    this.t7l_1 = onPinnableParentAvailable;
  }
  PinnableParentConsumer.prototype.b4k = function (scope) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = this.t7l_1(scope.c4k(get_ModifierLocalPinnableParent()));
  };
  PinnableParentConsumer.prototype.equals = function (other) {
    var tmp;
    if (other instanceof PinnableParentConsumer) {
      tmp = equals(other.t7l_1, this.t7l_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  PinnableParentConsumer.prototype.hashCode = function () {
    return hashCode(this.t7l_1);
  };
  PinnableParentConsumer.$metadata$ = classMeta('PinnableParentConsumer', [ModifierLocalConsumer]);
  function focusGroupInspectorInfo$lambda($this$null) {
    init_properties_Focusable_kt_y3fsle();
    // Inline function 'androidx.compose.foundation.focusGroupInspectorInfo.<anonymous>' call
    $this$null.e4h_1 = 'focusGroup';
    return Unit_getInstance();
  }
  function focusable$lambda($enabled, $interactionSource) {
    return function ($this$null) {
      $this$null.e4h_1 = 'focusable';
      $this$null.g4h_1.k4h('enabled', $enabled);
      $this$null.g4h_1.k4h('interactionSource', $interactionSource);
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
    tmp$ret$0 = $pinnableParent$delegate.i2();
    return tmp$ret$0;
  }
  function invoke$lambda_0($pinnableParent$delegate, value) {
    init_properties_Focusable_kt_y3fsle();
    var tmp0_setValue = getLocalDelegateReference('pinnableParent', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $pinnableParent$delegate.p11(value);
  }
  function invoke$lambda_1($isFocused$delegate) {
    init_properties_Focusable_kt_y3fsle();
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('isFocused', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $isFocused$delegate.i2();
    return tmp$ret$0;
  }
  function invoke$lambda_2($isFocused$delegate, value) {
    init_properties_Focusable_kt_y3fsle();
    var tmp0_setValue = getLocalDelegateReference('isFocused', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $isFocused$delegate.p11(value);
  }
  function focusable$lambda$lambda() {
    init_properties_Focusable_kt_y3fsle();
    return EmptyCoroutineContext_getInstance();
  }
  function _no_name_provided__qut3iv_0($focusedInteraction, $interactionSource) {
    this.u7l_1 = $focusedInteraction;
    this.v7l_1 = $interactionSource;
  }
  _no_name_provided__qut3iv_0.prototype.vk = function () {
    // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.u7l_1.i2();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var interaction = new Unfocus(tmp0_safe_receiver);
      var tmp0_safe_receiver_0 = this.v7l_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else
        tmp0_safe_receiver_0.l7j(interaction);
      this.u7l_1.p11(null);
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
    this.e7m_1 = $focusedInteraction;
    this.f7m_1 = $interactionSource;
    CoroutineImpl.call(this, resultContinuation);
  }
  focusable$lambda$lambda$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  focusable$lambda$lambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  focusable$lambda$lambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            this.h7m_1 = this.e7m_1.i2();
            if (this.h7m_1 == null) {
              this.i7m_1 = null;
              this.zf_1 = 3;
              continue $sm;
            } else {
              this.j7m_1 = new Unfocus(this.h7m_1);
              this.k7m_1 = this.f7m_1;
              if (this.k7m_1 == null) {
                this.l7m_1 = null;
                this.zf_1 = 2;
                continue $sm;
              } else {
                this.zf_1 = 1;
                suspendResult = this.k7m_1.a7k(this.j7m_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 1:
            var tmp_0 = this;
            tmp_0.l7m_1 = Unit_getInstance();
            this.zf_1 = 2;
            continue $sm;
          case 2:
            ;
            var tmp_1 = this;
            this.e7m_1.p11(null);
            tmp_1.i7m_1 = Unit_getInstance();
            this.zf_1 = 3;
            continue $sm;
          case 3:
            ;
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
  focusable$lambda$lambda$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new focusable$lambda$lambda$slambda(this.e7m_1, this.f7m_1, completion);
    i.g7m_1 = $this$launch;
    return i;
  };
  focusable$lambda$lambda$slambda.$metadata$ = classMeta('focusable$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function focusable$lambda$lambda$slambda_0($focusedInteraction, $interactionSource, resultContinuation) {
    var i = new focusable$lambda$lambda$slambda($focusedInteraction, $interactionSource, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__qut3iv_1() {
  }
  _no_name_provided__qut3iv_1.prototype.vk = function () {
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
      $focusRequester.w4k();
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
    this.u7m_1 = $bringIntoViewRequester;
    this.v7m_1 = $pinnableParent$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  focusable$lambda$lambda$slambda_1.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  focusable$lambda$lambda$slambda_1.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  focusable$lambda$lambda$slambda_1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 5;
            this.x7m_1 = null;
            this.zf_1 = 1;
            continue $sm;
          case 1:
            this.ag_1 = 4;
            var tmp_0 = this;
            var tmp0_safe_receiver = invoke$lambda(this.v7m_1);
            tmp_0.x7m_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z7m();
            this.zf_1 = 2;
            suspendResult = this.u7m_1.a7n(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y7m_1 = suspendResult;
            this.ag_1 = 5;
            this.zf_1 = 3;
            continue $sm;
          case 3:
            var tmp1_safe_receiver = this.x7m_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              tmp1_safe_receiver.b7n();
            }

            ;
            return Unit_getInstance();
          case 4:
            this.ag_1 = 5;
            var t = this.cg_1;
            var tmp1_safe_receiver_0 = this.x7m_1;
            if (tmp1_safe_receiver_0 == null)
              null;
            else {
              tmp1_safe_receiver_0.b7n();
            }

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
  focusable$lambda$lambda$slambda_1.prototype.f1w = function ($this$launch, completion) {
    var i = new focusable$lambda$lambda$slambda_1(this.u7m_1, this.v7m_1, completion);
    i.w7m_1 = $this$launch;
    return i;
  };
  focusable$lambda$lambda$slambda_1.$metadata$ = classMeta('focusable$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function focusable$lambda$lambda$slambda_2($bringIntoViewRequester, $pinnableParent$delegate, resultContinuation) {
    var i = new focusable$lambda$lambda$slambda_1($bringIntoViewRequester, $pinnableParent$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function focusable$lambda$lambda$slambda_3($focusedInteraction, $interactionSource, resultContinuation) {
    this.k7n_1 = $focusedInteraction;
    this.l7n_1 = $interactionSource;
    CoroutineImpl.call(this, resultContinuation);
  }
  focusable$lambda$lambda$slambda_3.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  focusable$lambda$lambda$slambda_3.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  focusable$lambda$lambda$slambda_3.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 6;
            this.n7n_1 = this.k7n_1.i2();
            if (this.n7n_1 == null) {
              this.o7n_1 = null;
              this.zf_1 = 3;
              continue $sm;
            } else {
              this.p7n_1 = new Unfocus(this.n7n_1);
              this.q7n_1 = this.l7n_1;
              if (this.q7n_1 == null) {
                this.r7n_1 = null;
                this.zf_1 = 2;
                continue $sm;
              } else {
                this.zf_1 = 1;
                suspendResult = this.q7n_1.a7k(this.p7n_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 1:
            var tmp_0 = this;
            tmp_0.r7n_1 = Unit_getInstance();
            this.zf_1 = 2;
            continue $sm;
          case 2:
            ;
            var tmp_1 = this;
            this.k7n_1.p11(null);
            tmp_1.o7n_1 = Unit_getInstance();
            this.zf_1 = 3;
            continue $sm;
          case 3:
            ;
            this.s7n_1 = new Focus();
            this.t7n_1 = this.l7n_1;
            if (this.t7n_1 == null) {
              this.u7n_1 = null;
              this.zf_1 = 5;
              continue $sm;
            } else {
              this.zf_1 = 4;
              suspendResult = this.t7n_1.a7k(this.s7n_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            ;
            break;
          case 4:
            var tmp_2 = this;
            tmp_2.u7n_1 = Unit_getInstance();
            this.zf_1 = 5;
            continue $sm;
          case 5:
            ;
            this.k7n_1.p11(this.s7n_1);
            return Unit_getInstance();
          case 6:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 6) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  focusable$lambda$lambda$slambda_3.prototype.f1w = function ($this$launch, completion) {
    var i = new focusable$lambda$lambda$slambda_3(this.k7n_1, this.l7n_1, completion);
    i.m7n_1 = $this$launch;
    return i;
  };
  focusable$lambda$lambda$slambda_3.$metadata$ = classMeta('focusable$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function focusable$lambda$lambda$slambda_4($focusedInteraction, $interactionSource, resultContinuation) {
    var i = new focusable$lambda$lambda$slambda_3($focusedInteraction, $interactionSource, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function focusable$lambda$lambda$slambda_5($focusedInteraction, $interactionSource, resultContinuation) {
    this.d7o_1 = $focusedInteraction;
    this.e7o_1 = $interactionSource;
    CoroutineImpl.call(this, resultContinuation);
  }
  focusable$lambda$lambda$slambda_5.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  focusable$lambda$lambda$slambda_5.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  focusable$lambda$lambda$slambda_5.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            this.g7o_1 = this.d7o_1.i2();
            if (this.g7o_1 == null) {
              this.h7o_1 = null;
              this.zf_1 = 3;
              continue $sm;
            } else {
              this.i7o_1 = new Unfocus(this.g7o_1);
              this.j7o_1 = this.e7o_1;
              if (this.j7o_1 == null) {
                this.k7o_1 = null;
                this.zf_1 = 2;
                continue $sm;
              } else {
                this.zf_1 = 1;
                suspendResult = this.j7o_1.a7k(this.i7o_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 1:
            var tmp_0 = this;
            tmp_0.k7o_1 = Unit_getInstance();
            this.zf_1 = 2;
            continue $sm;
          case 2:
            ;
            var tmp_1 = this;
            this.d7o_1.p11(null);
            tmp_1.h7o_1 = Unit_getInstance();
            this.zf_1 = 3;
            continue $sm;
          case 3:
            ;
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
  focusable$lambda$lambda$slambda_5.prototype.f1w = function ($this$launch, completion) {
    var i = new focusable$lambda$lambda$slambda_5(this.d7o_1, this.e7o_1, completion);
    i.f7o_1 = $this$launch;
    return i;
  };
  focusable$lambda$lambda$slambda_5.$metadata$ = classMeta('focusable$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function focusable$lambda$lambda$slambda_6($focusedInteraction, $interactionSource, resultContinuation) {
    var i = new focusable$lambda$lambda$slambda_5($focusedInteraction, $interactionSource, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function focusable$lambda$lambda_4($scope, $isFocused$delegate, $bringIntoViewRequester, $pinnableParent$delegate, $focusedInteraction, $interactionSource) {
    return function (it) {
      invoke$lambda_2($isFocused$delegate, it.o4k());
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
      $composer_0.y1a(1871352361);
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
      $composer_1.y1a(102870005);
      sourceInformation($composer_1, 'C(rememberCoroutineScope$composable)476@19869L144:Effects.kt#9igjgp');
      if (!(1 === 0)) {
        getContext._v = focusable$lambda$lambda;
      }
      var composer = $composer_1;
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_1;
      var $composer_2 = tmp0_remember$composable;
      $composer_2.y1a(547886695);
      sourceInformation($composer_2, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2;
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope$composable.<anonymous>' call
        tmp$ret$0 = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext._v(), composer));
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
      $composer_2.d1b();
      tmp$ret$4 = tmp0;
      var wrapper = tmp$ret$4;
      var tmp0_0 = wrapper.e1u_1;
      $composer_1.d1b();
      tmp$ret$5 = tmp0_0;
      var scope = tmp$ret$5;
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_3 = tmp2_remember$composable;
      $composer_3.y1a(547886695);
      sourceInformation($composer_3, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_3;
      var tmp$ret$8;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (false ? true : tmp0_let_0 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$6;
        // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>' call
        tmp$ret$6 = mutableStateOf$default(null, null, 2, null);
        var value_0 = tmp$ret$6;
        tmp1_cache_0.b1b(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      tmp$ret$7 = tmp_2;
      tmp$ret$8 = tmp$ret$7;
      var tmp_3 = tmp$ret$8;
      tmp$ret$9 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_1 = tmp$ret$9;
      $composer_3.d1b();
      tmp$ret$10 = tmp0_1;
      var focusedInteraction = tmp$ret$10;
      var tmp$ret$15;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_4 = tmp3_remember$composable;
      $composer_4.y1a(547886695);
      sourceInformation($composer_4, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_4;
      var tmp$ret$13;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (false ? true : tmp0_let_1 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$11;
        // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>' call
        tmp$ret$11 = mutableStateOf$default(null, null, 2, null);
        var value_1 = tmp$ret$11;
        tmp1_cache_1.b1b(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = tmp0_let_1;
      }
      tmp$ret$12 = tmp_4;
      tmp$ret$13 = tmp$ret$12;
      var tmp_5 = tmp$ret$13;
      tmp$ret$14 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0_2 = tmp$ret$14;
      $composer_4.d1b();
      tmp$ret$15 = tmp0_2;
      var pinnableParent$delegate = tmp$ret$15;
      var tmp$ret$20;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp4_remember$composable = $composer_0;
      var $composer_5 = tmp4_remember$composable;
      $composer_5.y1a(547886695);
      sourceInformation($composer_5, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$19;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_2 = $composer_5;
      var tmp$ret$18;
      // Inline function 'kotlin.let' call
      var tmp0_let_2 = tmp1_cache_2.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$17;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_6;
      if (false ? true : tmp0_let_2 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$16;
        // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>' call
        tmp$ret$16 = mutableStateOf$default(false, null, 2, null);
        var value_2 = tmp$ret$16;
        tmp1_cache_2.b1b(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = tmp0_let_2;
      }
      tmp$ret$17 = tmp_6;
      tmp$ret$18 = tmp$ret$17;
      var tmp_7 = tmp$ret$18;
      tmp$ret$19 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
      var tmp0_3 = tmp$ret$19;
      $composer_5.d1b();
      tmp$ret$20 = tmp0_3;
      var isFocused$delegate = tmp$ret$20;
      var tmp$ret$25;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp5_remember$composable = $composer_0;
      var $composer_6 = tmp5_remember$composable;
      $composer_6.y1a(547886695);
      sourceInformation($composer_6, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$24;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_3 = $composer_6;
      var tmp$ret$23;
      // Inline function 'kotlin.let' call
      var tmp0_let_3 = tmp1_cache_3.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$22;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_8;
      if (false ? true : tmp0_let_3 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$21;
        // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>' call
        tmp$ret$21 = new FocusRequester();
        var value_3 = tmp$ret$21;
        tmp1_cache_3.b1b(value_3);
        tmp_8 = value_3;
      } else {
        tmp_8 = tmp0_let_3;
      }
      tmp$ret$22 = tmp_8;
      tmp$ret$23 = tmp$ret$22;
      var tmp_9 = tmp$ret$23;
      tmp$ret$24 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      var tmp0_4 = tmp$ret$24;
      $composer_6.d1b();
      tmp$ret$25 = tmp0_4;
      var focusRequester_0 = tmp$ret$25;
      var tmp$ret$30;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp6_remember$composable = $composer_0;
      var $composer_7 = tmp6_remember$composable;
      $composer_7.y1a(547886695);
      sourceInformation($composer_7, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$29;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_4 = $composer_7;
      var tmp$ret$28;
      // Inline function 'kotlin.let' call
      var tmp0_let_4 = tmp1_cache_4.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$27;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_10;
      if (false ? true : tmp0_let_4 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$26;
        // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>' call
        tmp$ret$26 = funBringIntoViewRequester();
        var value_4 = tmp$ret$26;
        tmp1_cache_4.b1b(value_4);
        tmp_10 = value_4;
      } else {
        tmp_10 = tmp0_let_4;
      }
      tmp$ret$27 = tmp_10;
      tmp$ret$28 = tmp$ret$27;
      var tmp_11 = tmp$ret$28;
      tmp$ret$29 = (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE();
      var tmp0_5 = tmp$ret$29;
      $composer_7.d1b();
      tmp$ret$30 = tmp0_5;
      var bringIntoViewRequester_0 = tmp$ret$30;
      var tmp$ret$35;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp7_remember$composable = $composer_0;
      var $composer_8 = tmp7_remember$composable;
      $composer_8.y1a(-1124426577);
      sourceInformation($composer_8, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$34;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_5 = $composer_8;
      var tmp2_cache = !!($composer_8.z1a(focusedInteraction) | $composer_8.z1a($interactionSource));
      var tmp$ret$33;
      // Inline function 'kotlin.let' call
      var tmp0_let_5 = tmp1_cache_5.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$32;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_12;
      if (tmp2_cache ? true : tmp0_let_5 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$31;
        // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>' call
        tmp$ret$31 = focusable$lambda$lambda_0(focusedInteraction, $interactionSource);
        var value_5 = tmp$ret$31;
        tmp1_cache_5.b1b(value_5);
        tmp_12 = value_5;
      } else {
        tmp_12 = tmp0_let_5;
      }
      tmp$ret$32 = tmp_12;
      tmp$ret$33 = tmp$ret$32;
      var tmp_13 = tmp$ret$33;
      tmp$ret$34 = (tmp_13 == null ? true : isObject(tmp_13)) ? tmp_13 : THROW_CCE();
      var tmp0_6 = tmp$ret$34;
      $composer_8.d1b();
      tmp$ret$35 = tmp0_6;
      DisposableEffect$composable($interactionSource, tmp$ret$35, $composer_0, 0);
      DisposableEffect$composable($enabled, focusable$lambda$lambda_1($enabled, scope, focusedInteraction, $interactionSource), $composer_0, 0);
      var tmp_14;
      if ($enabled) {
        $composer_0.y1a(1407541023);
        sourceInformation($composer_0, '114@5011L36');
        var tmp_15;
        if (invoke$lambda_1(isFocused$delegate)) {
          var tmp$ret$40;
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var tmp8_remember$composable = $composer_0;
          var $composer_9 = tmp8_remember$composable;
          $composer_9.y1a(547886695);
          sourceInformation($composer_9, 'C(remember$composable):Composables.kt#9igjgp');
          var tmp$ret$39;
          // Inline function 'androidx.compose.runtime.cache' call
          var tmp1_cache_6 = $composer_9;
          var tmp$ret$38;
          // Inline function 'kotlin.let' call
          var tmp0_let_6 = tmp1_cache_6.a1b();
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$37;
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_16;
          if (false ? true : tmp0_let_6 === Companion_getInstance_6().c1b_1) {
            var tmp$ret$36;
            // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>' call
            tmp$ret$36 = new FocusedBoundsModifier();
            var value_6 = tmp$ret$36;
            tmp1_cache_6.b1b(value_6);
            tmp_16 = value_6;
          } else {
            tmp_16 = tmp0_let_6;
          }
          tmp$ret$37 = tmp_16;
          tmp$ret$38 = tmp$ret$37;
          var tmp_17 = tmp$ret$38;
          tmp$ret$39 = (tmp_17 == null ? true : isObject(tmp_17)) ? tmp_17 : THROW_CCE();
          var tmp0_7 = tmp$ret$39;
          $composer_9.d1b();
          tmp$ret$40 = tmp0_7;
          tmp_15 = tmp$ret$40;
        } else {
          tmp_15 = Companion_getInstance_7();
        }
        var tmp1_group = tmp_15;
        $composer_0.d1b();
        var focusedChildModifier = tmp1_group;
        var tmp_18 = Companion_getInstance_7();
        var tmp_19 = semantics$default(tmp_18, false, focusable$lambda$lambda_2(isFocused$delegate, focusRequester_0), 1, null);
        var tmp$ret$45;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp9_remember$composable = $composer_0;
        var $composer_10 = tmp9_remember$composable;
        $composer_10.y1a(-838505973);
        sourceInformation($composer_10, 'C(remember$composable)P(1):Composables.kt#9igjgp');
        var tmp$ret$44;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_7 = $composer_10;
        var tmp2_cache_0 = $composer_10.z1a(pinnableParent$delegate);
        var tmp$ret$43;
        // Inline function 'kotlin.let' call
        var tmp0_let_7 = tmp1_cache_7.a1b();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$42;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_20;
        if (tmp2_cache_0 ? true : tmp0_let_7 === Companion_getInstance_6().c1b_1) {
          var tmp$ret$41;
          // Inline function 'androidx.compose.foundation.focusable.<anonymous>.<anonymous>' call
          tmp$ret$41 = focusable$lambda$lambda_3(pinnableParent$delegate);
          var value_7 = tmp$ret$41;
          tmp1_cache_7.b1b(value_7);
          tmp_20 = value_7;
        } else {
          tmp_20 = tmp0_let_7;
        }
        tmp$ret$42 = tmp_20;
        tmp$ret$43 = tmp$ret$42;
        var tmp_21 = tmp$ret$43;
        tmp$ret$44 = (tmp_21 == null ? true : isObject(tmp_21)) ? tmp_21 : THROW_CCE();
        var tmp0_8 = tmp$ret$44;
        $composer_10.d1b();
        tmp$ret$45 = tmp0_8;
        var tmp_22 = focusRequester(bringIntoViewRequester(onPinnableParentAvailable(tmp_19, tmp$ret$45), bringIntoViewRequester_0), focusRequester_0).y4e(focusedChildModifier);
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
      $composer_0.d1b();
      return tmp0_9;
    };
  }
  function onPinnableParentAvailable$lambda($onPinnableParentAvailable) {
    return function ($this$null) {
      $this$null.e4h_1 = 'onPinnableParentAvailable';
      $this$null.g4h_1.k4h('onPinnableParentAvailable', $onPinnableParentAvailable);
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
  function notifyObserverWhenAttached($this) {
    if (!($this.m7o_1 == null) ? ensureNotNull($this.m7o_1).w4f() : false) {
      var tmp0_safe_receiver = $this.l7o_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this.m7o_1);
    }
  }
  function FocusedBoundsModifier() {
    this.l7o_1 = null;
    this.m7o_1 = null;
  }
  FocusedBoundsModifier.prototype.z5f = function (coordinates) {
    this.m7o_1 = coordinates;
    if (coordinates.w4f()) {
      notifyObserverWhenAttached(this);
    } else {
      var tmp0_safe_receiver = this.l7o_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(null);
    }
  };
  FocusedBoundsModifier.prototype.b4k = function (scope) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.FocusedBoundsModifier.onModifierLocalsUpdated.<anonymous>' call
    tmp$ret$0 = scope.c4k(get_ModifierLocalFocusedBoundsObserver());
    tmp$ret$1 = tmp$ret$0;
    var newObserver = tmp$ret$1;
    if (newObserver == null) {
      var tmp0_safe_receiver = this.l7o_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(null);
    }
    this.l7o_1 = newObserver;
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
      $this$null.e4h_1 = 'hoverable';
      $this$null.g4h_1.k4h('interactionSource', $interactionSource);
      $this$null.g4h_1.k4h('enabled', $enabled);
      return Unit_getInstance();
    };
  }
  function invoke$lambda_3($hoverInteraction$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('hoverInteraction', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $hoverInteraction$delegate.i2();
    return tmp$ret$0;
  }
  function invoke$lambda_4($hoverInteraction$delegate, value) {
    var tmp0_setValue = getLocalDelegateReference('hoverInteraction', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $hoverInteraction$delegate.p11(value);
  }
  function invoke$emitEnter($interactionSource, hoverInteraction$delegate, $cont) {
    var tmp = new $invoke$emitEnterCOROUTINE$0($interactionSource, hoverInteraction$delegate, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function invoke$emitExit($interactionSource, hoverInteraction$delegate, $cont) {
    var tmp = new $invoke$emitExitCOROUTINE$1($interactionSource, hoverInteraction$delegate, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
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
      $interactionSource.l7j(interaction);
      invoke$lambda_4(hoverInteraction$delegate, null);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function _no_name_provided__qut3iv_2($interactionSource, $hoverInteraction$delegate) {
    this.l7p_1 = $interactionSource;
    this.m7p_1 = $hoverInteraction$delegate;
  }
  _no_name_provided__qut3iv_2.prototype.vk = function () {
    // Inline function 'androidx.compose.foundation.hoverable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    invoke$tryEmitExit(this.l7p_1, this.m7p_1);
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
    this.v7p_1 = $enabled;
    this.w7p_1 = $interactionSource;
    this.x7p_1 = $hoverInteraction$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  hoverable$lambda$slambda.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  hoverable$lambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  hoverable$lambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            if (!this.v7p_1) {
              this.zf_1 = 1;
              suspendResult = invoke$emitExit(this.w7p_1, this.x7p_1, this);
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
  hoverable$lambda$slambda.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new hoverable$lambda$slambda(this.v7p_1, this.w7p_1, this.x7p_1, completion);
    i.y7p_1 = $this$LaunchedEffect;
    return i;
  };
  hoverable$lambda$slambda.$metadata$ = classMeta('hoverable$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function hoverable$lambda$slambda_0($enabled, $interactionSource, $hoverInteraction$delegate, resultContinuation) {
    var i = new hoverable$lambda$slambda($enabled, $interactionSource, $hoverInteraction$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function hoverable$lambda$slambda$slambda$slambda$slambda($interactionSource, $hoverInteraction$delegate, resultContinuation) {
    this.h7q_1 = $interactionSource;
    this.i7q_1 = $hoverInteraction$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  hoverable$lambda$slambda$slambda$slambda$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  hoverable$lambda$slambda$slambda$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  hoverable$lambda$slambda$slambda$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = invoke$emitEnter(this.h7q_1, this.i7q_1, this);
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
  hoverable$lambda$slambda$slambda$slambda$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new hoverable$lambda$slambda$slambda$slambda$slambda(this.h7q_1, this.i7q_1, completion);
    i.j7q_1 = $this$launch;
    return i;
  };
  hoverable$lambda$slambda$slambda$slambda$slambda.$metadata$ = classMeta('hoverable$lambda$slambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function hoverable$lambda$slambda$slambda$slambda$slambda_0($interactionSource, $hoverInteraction$delegate, resultContinuation) {
    var i = new hoverable$lambda$slambda$slambda$slambda$slambda($interactionSource, $hoverInteraction$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function hoverable$lambda$slambda$slambda$slambda$slambda_1($interactionSource, $hoverInteraction$delegate, resultContinuation) {
    this.s7q_1 = $interactionSource;
    this.t7q_1 = $hoverInteraction$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  hoverable$lambda$slambda$slambda$slambda$slambda_1.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  hoverable$lambda$slambda$slambda$slambda$slambda_1.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  hoverable$lambda$slambda$slambda$slambda$slambda_1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = invoke$emitExit(this.s7q_1, this.t7q_1, this);
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
  hoverable$lambda$slambda$slambda$slambda$slambda_1.prototype.f1w = function ($this$launch, completion) {
    var i = new hoverable$lambda$slambda$slambda$slambda$slambda_1(this.s7q_1, this.t7q_1, completion);
    i.u7q_1 = $this$launch;
    return i;
  };
  hoverable$lambda$slambda$slambda$slambda$slambda_1.$metadata$ = classMeta('hoverable$lambda$slambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function hoverable$lambda$slambda$slambda$slambda$slambda_2($interactionSource, $hoverInteraction$delegate, resultContinuation) {
    var i = new hoverable$lambda$slambda$slambda$slambda$slambda_1($interactionSource, $hoverInteraction$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function hoverable$lambda$slambda$slambda$slambda($currentContext, $outerScope, $interactionSource, $hoverInteraction$delegate, resultContinuation) {
    this.d7r_1 = $currentContext;
    this.e7r_1 = $outerScope;
    this.f7r_1 = $interactionSource;
    this.g7r_1 = $hoverInteraction$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  hoverable$lambda$slambda$slambda$slambda.prototype.c57 = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.d57($this$awaitPointerEventScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  hoverable$lambda$slambda$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.c57((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  hoverable$lambda$slambda$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            this.zf_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.d7r_1)) {
              this.zf_1 = 3;
              continue $sm;
            }

            this.zf_1 = 2;
            suspendResult = this.h7r_1.f5b(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var event = suspendResult;
            var tmp0_subject = event.x53_1;
            if (tmp0_subject === Companion_getInstance_9().f54_1) {
              var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
              launch$default(this.e7r_1, null, tmp_0, hoverable$lambda$slambda$slambda$slambda$slambda_0(this.f7r_1, this.g7r_1, null), 1, null);
            } else if (tmp0_subject === Companion_getInstance_9().g54_1) {
              var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
              launch$default(this.e7r_1, null, tmp_1, hoverable$lambda$slambda$slambda$slambda$slambda_2(this.f7r_1, this.g7r_1, null), 1, null);
            }

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
  hoverable$lambda$slambda$slambda$slambda.prototype.d57 = function ($this$awaitPointerEventScope, completion) {
    var i = new hoverable$lambda$slambda$slambda$slambda(this.d7r_1, this.e7r_1, this.f7r_1, this.g7r_1, completion);
    i.h7r_1 = $this$awaitPointerEventScope;
    return i;
  };
  hoverable$lambda$slambda$slambda$slambda.$metadata$ = classMeta('hoverable$lambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function hoverable$lambda$slambda$slambda$slambda_0($currentContext, $outerScope, $interactionSource, $hoverInteraction$delegate, resultContinuation) {
    var i = new hoverable$lambda$slambda$slambda$slambda($currentContext, $outerScope, $interactionSource, $hoverInteraction$delegate, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.c57($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function hoverable$lambda$slambda$slambda($this_pointerInput, $interactionSource, $hoverInteraction$delegate, resultContinuation) {
    this.q7r_1 = $this_pointerInput;
    this.r7r_1 = $interactionSource;
    this.s7r_1 = $hoverInteraction$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  hoverable$lambda$slambda$slambda.prototype.e1w = function ($this$coroutineScope, $cont) {
    var tmp = this.f1w($this$coroutineScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  hoverable$lambda$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  hoverable$lambda$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            var tmp_0 = this;
            tmp_0.u7r_1 = this.o4();
            this.v7r_1 = this.t7r_1;
            this.zf_1 = 1;
            suspendResult = this.q7r_1.u57(hoverable$lambda$slambda$slambda$slambda_0(this.u7r_1, this.v7r_1, this.r7r_1, this.s7r_1, null), this);
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
  hoverable$lambda$slambda$slambda.prototype.f1w = function ($this$coroutineScope, completion) {
    var i = new hoverable$lambda$slambda$slambda(this.q7r_1, this.r7r_1, this.s7r_1, completion);
    i.t7r_1 = $this$coroutineScope;
    return i;
  };
  hoverable$lambda$slambda$slambda.$metadata$ = classMeta('hoverable$lambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function hoverable$lambda$slambda$slambda_0($this_pointerInput, $interactionSource, $hoverInteraction$delegate, resultContinuation) {
    var i = new hoverable$lambda$slambda$slambda($this_pointerInput, $interactionSource, $hoverInteraction$delegate, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.e1w($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function hoverable$lambda$slambda_1($interactionSource, $hoverInteraction$delegate, resultContinuation) {
    this.e7s_1 = $interactionSource;
    this.f7s_1 = $hoverInteraction$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  hoverable$lambda$slambda_1.prototype.s57 = function ($this$pointerInput, $cont) {
    var tmp = this.t57($this$pointerInput, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  hoverable$lambda$slambda_1.prototype.jg = function (p1, $cont) {
    return this.s57((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  hoverable$lambda$slambda_1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = coroutineScope(hoverable$lambda$slambda$slambda_0(this.g7s_1, this.e7s_1, this.f7s_1, null), this);
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
  hoverable$lambda$slambda_1.prototype.t57 = function ($this$pointerInput, completion) {
    var i = new hoverable$lambda$slambda_1(this.e7s_1, this.f7s_1, completion);
    i.g7s_1 = $this$pointerInput;
    return i;
  };
  hoverable$lambda$slambda_1.$metadata$ = classMeta('hoverable$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function hoverable$lambda$slambda_2($interactionSource, $hoverInteraction$delegate, resultContinuation) {
    var i = new hoverable$lambda$slambda_1($interactionSource, $hoverInteraction$delegate, resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.s57($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $invoke$emitEnterCOROUTINE$0($interactionSource, hoverInteraction$delegate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v7o_1 = $interactionSource;
    this.w7o_1 = hoverInteraction$delegate;
  }
  $invoke$emitEnterCOROUTINE$0.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            if (invoke$lambda_3(this.w7o_1) == null) {
              this.x7o_1 = new Enter();
              this.zf_1 = 1;
              suspendResult = this.v7o_1.a7k(this.x7o_1, this);
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
            invoke$lambda_4(this.w7o_1, this.x7o_1);
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
  $invoke$emitEnterCOROUTINE$0.$metadata$ = classMeta('$invoke$emitEnterCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $invoke$emitExitCOROUTINE$1($interactionSource, hoverInteraction$delegate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g7p_1 = $interactionSource;
    this.h7p_1 = hoverInteraction$delegate;
  }
  $invoke$emitExitCOROUTINE$1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            this.i7p_1 = invoke$lambda_3(this.h7p_1);
            if (this.i7p_1 == null) {
              this.j7p_1 = null;
              this.zf_1 = 2;
              continue $sm;
            } else {
              this.k7p_1 = new Exit(this.i7p_1);
              this.zf_1 = 1;
              suspendResult = this.g7p_1.a7k(this.k7p_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            var tmp_0 = this;
            invoke$lambda_4(this.h7p_1, null);
            tmp_0.j7p_1 = Unit_getInstance();
            this.zf_1 = 2;
            continue $sm;
          case 2:
            ;
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
  $invoke$emitExitCOROUTINE$1.$metadata$ = classMeta('$invoke$emitExitCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function hoverable$lambda_0($interactionSource, $enabled) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y1a(1294013553);
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
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.hoverable.<anonymous>.<anonymous>' call
        tmp$ret$0 = mutableStateOf$default(null, null, 2, null);
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
      var hoverInteraction$delegate = tmp$ret$4;
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var $composer_2 = tmp1_remember$composable;
      $composer_2.y1a(-1124426577);
      sourceInformation($composer_2, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = !!($composer_2.z1a(hoverInteraction$delegate) | $composer_2.z1a($interactionSource));
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$5;
        // Inline function 'androidx.compose.foundation.hoverable.<anonymous>.<anonymous>' call
        tmp$ret$5 = hoverable$lambda$lambda($interactionSource, hoverInteraction$delegate);
        var value_0 = tmp$ret$5;
        tmp1_cache_0.b1b(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_2;
      tmp$ret$7 = tmp$ret$6;
      var tmp_3 = tmp$ret$7;
      tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.d1b();
      tmp$ret$9 = tmp0_0;
      DisposableEffect$composable($interactionSource, tmp$ret$9, $composer_0, 0);
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_3 = tmp2_remember$composable;
      $composer_3.y1a(-1058148781);
      sourceInformation($composer_3, 'C(remember$composable)P(1,2,3):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_3;
      var tmp2_cache_0 = !!(!!($composer_3.z1a($enabled) | $composer_3.z1a(hoverInteraction$delegate)) | $composer_3.z1a($interactionSource));
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp2_cache_0 ? true : tmp0_let_1 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$10;
        // Inline function 'androidx.compose.foundation.hoverable.<anonymous>.<anonymous>' call
        tmp$ret$10 = hoverable$lambda$slambda_0($enabled, $interactionSource, hoverInteraction$delegate, null);
        var value_1 = tmp$ret$10;
        tmp1_cache_1.b1b(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = tmp0_let_1;
      }
      tmp$ret$11 = tmp_4;
      tmp$ret$12 = tmp$ret$11;
      var tmp_5 = tmp$ret$12;
      tmp$ret$13 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.d1b();
      tmp$ret$14 = tmp0_1;
      LaunchedEffect$composable($enabled, tmp$ret$14, $composer_0, 0);
      var tmp_6;
      if ($enabled) {
        var tmp_7 = Companion_getInstance_7();
        var tmp$ret$19;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp3_remember$composable = $composer_0;
        var $composer_4 = tmp3_remember$composable;
        $composer_4.y1a(-1124426577);
        sourceInformation($composer_4, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
        var tmp$ret$18;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache_2 = $composer_4;
        var tmp2_cache_1 = !!($composer_4.z1a(hoverInteraction$delegate) | $composer_4.z1a($interactionSource));
        var tmp$ret$17;
        // Inline function 'kotlin.let' call
        var tmp0_let_2 = tmp1_cache_2.a1b();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$16;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_8;
        if (tmp2_cache_1 ? true : tmp0_let_2 === Companion_getInstance_6().c1b_1) {
          var tmp$ret$15;
          // Inline function 'androidx.compose.foundation.hoverable.<anonymous>.<anonymous>' call
          tmp$ret$15 = hoverable$lambda$slambda_2($interactionSource, hoverInteraction$delegate, null);
          var value_2 = tmp$ret$15;
          tmp1_cache_2.b1b(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = tmp0_let_2;
        }
        tmp$ret$16 = tmp_8;
        tmp$ret$17 = tmp$ret$16;
        var tmp_9 = tmp$ret$17;
        tmp$ret$18 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
        var tmp0_2 = tmp$ret$18;
        $composer_4.d1b();
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
      $composer_0.d1b();
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
  function DefaultDebugIndicationInstance(isPressed, isHovered, isFocused) {
    this.i7s_1 = isPressed;
    this.j7s_1 = isHovered;
    this.k7s_1 = isFocused;
  }
  DefaultDebugIndicationInstance.prototype.l7s = function (_this__u8e3s4) {
    _this__u8e3s4.v3l();
    if (this.i7s_1.i2()) {
      var tmp = Companion_getInstance_0().e3a_1;
      var tmp_0 = Color__copy$default_impl_ectz3s(tmp, 0.3, 0.0, 0.0, 0.0, 14, null);
      var tmp_1 = _this__u8e3s4.j3k();
      _this__u8e3s4.d3l(tmp_0, null, tmp_1, 0.0, null, null, null, 122, null);
    } else if (this.j7s_1.i2() ? true : this.k7s_1.i2()) {
      var tmp_2 = Companion_getInstance_0().e3a_1;
      var tmp_3 = Color__copy$default_impl_ectz3s(tmp_2, 0.1, 0.0, 0.0, 0.0, 14, null);
      var tmp_4 = _this__u8e3s4.j3k();
      _this__u8e3s4.d3l(tmp_3, null, tmp_4, 0.0, null, null, null, 122, null);
    }
  };
  DefaultDebugIndicationInstance.$metadata$ = classMeta('DefaultDebugIndicationInstance', [IndicationInstance]);
  function DefaultDebugIndication() {
    DefaultDebugIndication_instance = this;
  }
  DefaultDebugIndication.prototype.h7s = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(202464790);
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
    $composer_1.y1a(-838505973);
    sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
    var tmp$ret$3;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1;
    var tmp2_cache = $composer_1.z1a(interactionSource);
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_let = tmp1_cache.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp2_cache ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.DefaultDebugIndication.rememberUpdatedInstance$composable.<anonymous>' call
      tmp$ret$0 = new DefaultDebugIndicationInstance(isPressed, isHovered, isFocused);
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
    this.m7s_1 = interactions;
  }
  TempInteractionSource.prototype.n7s = function () {
    return this.m7s_1;
  };
  TempInteractionSource.$metadata$ = classMeta('TempInteractionSource', [InteractionSource]);
  function NoIndicationInstance() {
    NoIndicationInstance_instance = this;
  }
  NoIndicationInstance.prototype.l7s = function (_this__u8e3s4) {
    _this__u8e3s4.v3l();
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
  NoIndication.prototype.h7s = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(951700357);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance$composable):Indication.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(951700357, $changed, -1, 'androidx.compose.foundation.NoIndication.rememberUpdatedInstance$composable (Indication.kt:156)');
    }
    var tmp0 = NoIndicationInstance_getInstance();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
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
    this.o7s_1 = indicationInstance;
  }
  IndicationModifier.prototype.k4g = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.o7s_1;
    // Inline function 'kotlin.contracts.contract' call
    tmp0_with.l7s(_this__u8e3s4);
    tmp$ret$0 = Unit_getInstance();
  };
  IndicationModifier.$metadata$ = classMeta('IndicationModifier', [DrawModifier]);
  function LocalIndication$lambda() {
    init_properties_Indication_kt_f0egou();
    return DefaultDebugIndication_getInstance();
  }
  function indication$lambda($indication, $interactionSource) {
    return function ($this$null) {
      $this$null.e4h_1 = 'indication';
      $this$null.g4h_1.k4h('indication', $indication);
      $this$null.g4h_1.k4h('interactionSource', $interactionSource);
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.p7s_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.hz = function (value, $cont) {
    return this.p7s_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function indication$lambda$o$collect$slambda($inputModeManager, $collector, resultContinuation) {
    this.y7s_1 = $inputModeManager;
    this.z7s_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  indication$lambda$o$collect$slambda.prototype.c7t = function (value, $cont) {
    var tmp = this.d7t(value, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  indication$lambda$o$collect$slambda.prototype.jg = function (p1, $cont) {
    return this.c7t((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  indication$lambda$o$collect$slambda.prototype.ig = function () {
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
            var tmp_0;
            if (this.y7s_1.i51() === Companion_getInstance_10().o51_1) {
              var tmp_1 = this.a7t_1;
              tmp_0 = tmp_1 instanceof Focus;
            } else {
              tmp_0 = false;
            }

            if (!tmp_0) {
              this.zf_1 = 3;
              suspendResult = this.z7s_1.hz(this.a7t_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            if (false) {
              this.zf_1 = 1;
              continue $sm;
            }

            this.zf_1 = 4;
            continue $sm;
          case 3:
            this.b7t_1 = suspendResult;
            this.zf_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  indication$lambda$o$collect$slambda.prototype.d7t = function (value, completion) {
    var i = new indication$lambda$o$collect$slambda(this.y7s_1, this.z7s_1, completion);
    i.a7t_1 = value;
    return i;
  };
  indication$lambda$o$collect$slambda.$metadata$ = classMeta('indication$lambda$o$collect$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function indication$lambda$o$collect$slambda_0($inputModeManager, $collector, resultContinuation) {
    var i = new indication$lambda$o$collect$slambda($inputModeManager, $collector, resultContinuation);
    var l = function (value, $cont) {
      return i.c7t(value, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m7t_1 = _this__u8e3s4;
    this.n7t_1 = collector;
  }
  $collectCOROUTINE$2.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            var tmp_0 = indication$lambda$o$collect$slambda_0(this.m7t_1.p7t_1, this.n7t_1, null);
            suspendResult = this.m7t_1.o7t_1.gz(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  $collectCOROUTINE$2.$metadata$ = classMeta('$collectCOROUTINE$2', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_3($tmp0_filter, $inputModeManager) {
    this.o7t_1 = $tmp0_filter;
    this.p7t_1 = $inputModeManager;
  }
  _no_name_provided__qut3iv_3.prototype.q7t = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$2(this, collector, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  _no_name_provided__qut3iv_3.prototype.gz = function (collector, $cont) {
    return this.q7t(collector, $cont);
  };
  _no_name_provided__qut3iv_3.$metadata$ = classMeta(undefined, [Flow]);
  function indication$lambda_0($interactionSource, $indication) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y1a(-353972293);
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
      var tmp0 = $composer_1.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp$ret$0 = tmp0;
      var inputModeManager = tmp$ret$0;
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_2 = tmp2_remember$composable;
      $composer_2.y1a(-838505973);
      sourceInformation($composer_2, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2;
      var tmp2_cache = $composer_2.z1a($interactionSource);
      var tmp$ret$6;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
        var tmp$ret$4;
        // Inline function 'androidx.compose.foundation.indication.<anonymous>.<anonymous>' call
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.flow.filter' call
        var tmp0_filter = $interactionSource.n7s();
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
        tmp$ret$1 = new _no_name_provided__qut3iv_3(tmp0_filter, inputModeManager);
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = new TempInteractionSource(tmp$ret$3);
        var value = tmp$ret$4;
        tmp1_cache.b1b(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$5 = tmp_0;
      tmp$ret$6 = tmp$ret$5;
      var tmp_1 = tmp$ret$6;
      tmp$ret$7 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0_0 = tmp$ret$7;
      $composer_2.d1b();
      tmp$ret$8 = tmp0_0;
      var filteredInteractionSource = tmp$ret$8;
      var tmp0_elvis_lhs = $indication;
      var resolvedIndication = tmp0_elvis_lhs == null ? NoIndication_getInstance() : tmp0_elvis_lhs;
      var instance = resolvedIndication.h7s(filteredInteractionSource, $composer_0, 0);
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp3_remember$composable = $composer_0;
      var $composer_3 = tmp3_remember$composable;
      $composer_3.y1a(-838505973);
      sourceInformation($composer_3, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_3;
      var tmp2_cache_0 = $composer_3.z1a(instance);
      var tmp$ret$11;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp2_cache_0 ? true : tmp0_let_0 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$9;
        // Inline function 'androidx.compose.foundation.indication.<anonymous>.<anonymous>' call
        tmp$ret$9 = new IndicationModifier(instance);
        var value_0 = tmp$ret$9;
        tmp1_cache_0.b1b(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      tmp$ret$10 = tmp_2;
      tmp$ret$11 = tmp$ret$10;
      var tmp_3 = tmp$ret$11;
      tmp$ret$12 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_1 = tmp$ret$12;
      $composer_3.d1b();
      tmp$ret$13 = tmp0_1;
      var tmp0_2 = tmp$ret$13;
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_getInstance();
      }
      $composer_0.d1b();
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
    this.r7t_1 = priority;
    this.s7t_1 = job;
  }
  Mutator.prototype.t7t = function (other) {
    return this.r7t_1.v5(other.r7t_1) >= 0;
  };
  Mutator.prototype.d76 = function () {
    return this.s7t_1.dj(null, 1, null);
  };
  Mutator.$metadata$ = classMeta('Mutator');
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.u7t_1.wo();
      if (oldMutator == null ? true : mutator.t7t(oldMutator)) {
        if ($this.u7t_1.g1r(oldMutator, mutator)) {
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
  function MutatorMutex$mutateWith$slambda($priority, this$0, $block, $receiver, resultContinuation) {
    this.e7u_1 = $priority;
    this.f7u_1 = this$0;
    this.g7u_1 = $block;
    this.h7u_1 = $receiver;
    CoroutineImpl.call(this, resultContinuation);
  }
  MutatorMutex$mutateWith$slambda.prototype.v76 = function ($this$coroutineScope, $cont) {
    var tmp = this.f1w($this$coroutineScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  MutatorMutex$mutateWith$slambda.prototype.jg = function (p1, $cont) {
    return this.v76((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  MutatorMutex$mutateWith$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 13;
            this.j7u_1 = new Mutator(this.e7u_1, ensureNotNull(this.i7u_1.vh().g5(Key_getInstance())));
            tryMutateOrCancel(this.f7u_1, this.j7u_1);
            this.zf_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.l7u_1 = this.f7u_1.v7t_1;
            this.zf_1 = 2;
            suspendResult = this.l7u_1.p16(null, this);
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
            suspendResult = this.g7u_1(this.h7u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.n7u_1 = suspendResult;
            this.zf_1 = 7;
            continue $sm;
          case 7:
            var tmp_1 = this.n7u_1;
            this.f7u_1.u7t_1.g1r(this.j7u_1, null);
            ;
            this.m7u_1 = tmp_1;
            this.ag_1 = 13;
            this.zf_1 = 8;
            var tmp_2 = this;
            continue $sm;
          case 8:
            var tmp_3 = this.m7u_1;
            this.l7u_1.r16(null);
            ;
            this.k7u_1 = tmp_3;
            this.zf_1 = 10;
            continue $sm;
          case 9:
            this.l7u_1.r16(null);
            ;
            if (false) {
              this.zf_1 = 1;
              continue $sm;
            }

            this.zf_1 = 10;
            continue $sm;
          case 10:
            return this.k7u_1;
          case 11:
            this.ag_1 = 12;
            var t = this.cg_1;
            this.f7u_1.u7t_1.g1r(this.j7u_1, null);
            ;
            throw t;
          case 12:
            this.ag_1 = 13;
            var t_0 = this.cg_1;
            this.l7u_1.r16(null);
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
  MutatorMutex$mutateWith$slambda.prototype.f1w = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutateWith$slambda(this.e7u_1, this.f7u_1, this.g7u_1, this.h7u_1, completion);
    i.i7u_1 = $this$coroutineScope;
    return i;
  };
  MutatorMutex$mutateWith$slambda.$metadata$ = classMeta('MutatorMutex$mutateWith$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function MutatorMutex$mutateWith$slambda_0($priority, this$0, $block, $receiver, resultContinuation) {
    var i = new MutatorMutex$mutateWith$slambda($priority, this$0, $block, $receiver, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.v76($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex() {
    this.u7t_1 = new AtomicReference(null);
    var tmp = this;
    tmp.v7t_1 = Mutex$default(false, 1, null);
  }
  MutatorMutex.prototype.o7u = function (receiver, priority, block, $cont) {
    return coroutineScope(MutatorMutex$mutateWith$slambda_0(priority, this, block, receiver, null), $cont);
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
    var target = ArrayList_init_$Create$(_this__u8e3s4.f());
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.g(index);
        // Inline function 'androidx.compose.foundation.fastMapIndexedNotNull.<anonymous>' call
        var tmp0_safe_receiver = transform(index, item);
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$0;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          target.a(tmp0_safe_receiver);
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
  function toPointerDirectionConfig(_this__u8e3s4) {
    init_properties_DragGestureDetector_kt_mvy3qx();
    return _this__u8e3s4.equals(Orientation_Vertical_getInstance()) ? get_VerticalPointerDirectionConfig() : get_HorizontalPointerDirectionConfig();
  }
  function verticalDrag(_this__u8e3s4, pointerId, onDrag, $cont) {
    var tmp = new $verticalDragCOROUTINE$4(_this__u8e3s4, pointerId, onDrag, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function horizontalDrag(_this__u8e3s4, pointerId, onDrag, $cont) {
    var tmp = new $horizontalDragCOROUTINE$5(_this__u8e3s4, pointerId, onDrag, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function isPointerUp(_this__u8e3s4, pointerId) {
    init_properties_DragGestureDetector_kt_mvy3qx();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
      var tmp0_fastFirstOrNull = _this__u8e3s4.q53_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastFirstOrNull.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastFirstOrNull.g(index);
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.foundation.gestures.isPointerUp.<anonymous>' call
          tmp$ret$0 = equals(item.z52_1, pointerId);
          if (tmp$ret$0) {
            tmp$ret$1 = item;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c53_1) === true);
  }
  function pointerSlop(_this__u8e3s4, pointerType) {
    init_properties_DragGestureDetector_kt_mvy3qx();
    var tmp0_subject = pointerType;
    return tmp0_subject === Companion_getInstance_11().f55_1 ? _this__u8e3s4.v5v() * get_mouseToTouchSlopRatio() : _this__u8e3s4.v5v();
  }
  function detectDragGesturesAfterLongPress(_this__u8e3s4, onDragStart, onDragEnd, onDragCancel, onDrag, $cont) {
    return forEachGesture(_this__u8e3s4, detectDragGesturesAfterLongPress$slambda_0(onDragCancel, onDragStart, onDragEnd, onDrag, null), $cont);
  }
  function drag(_this__u8e3s4, pointerId, onDrag, $cont) {
    var tmp = new $dragCOROUTINE$8(_this__u8e3s4, pointerId, onDrag, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function awaitLongPressOrCancellation(_this__u8e3s4, pointerId, $cont) {
    var tmp = new $awaitLongPressOrCancellationCOROUTINE$9(_this__u8e3s4, pointerId, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function awaitDragOrCancellation(_this__u8e3s4, pointerId, $cont) {
    var tmp = new $awaitDragOrCancellationCOROUTINE$10(_this__u8e3s4, pointerId, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function isPointerUp$accessor$2pjqd1(_this__u8e3s4, pointerId) {
    init_properties_DragGestureDetector_kt_mvy3qx();
    return isPointerUp(_this__u8e3s4, pointerId);
  }
  function HorizontalPointerDirectionConfig$1() {
  }
  HorizontalPointerDirectionConfig$1.prototype.p7u = function (offset) {
    return _Offset___get_x__impl__xvi35n(offset);
  };
  HorizontalPointerDirectionConfig$1.prototype.q7u = function (offset) {
    return _Offset___get_y__impl__8bzhra(offset);
  };
  HorizontalPointerDirectionConfig$1.prototype.r7u = function (mainChange, crossChange) {
    return Offset(mainChange, crossChange);
  };
  HorizontalPointerDirectionConfig$1.$metadata$ = classMeta(undefined, [PointerDirectionConfig]);
  function VerticalPointerDirectionConfig$1() {
  }
  VerticalPointerDirectionConfig$1.prototype.p7u = function (offset) {
    return _Offset___get_y__impl__8bzhra(offset);
  };
  VerticalPointerDirectionConfig$1.prototype.q7u = function (offset) {
    return _Offset___get_x__impl__xvi35n(offset);
  };
  VerticalPointerDirectionConfig$1.prototype.r7u = function (mainChange, crossChange) {
    return Offset(crossChange, mainChange);
  };
  VerticalPointerDirectionConfig$1.$metadata$ = classMeta(undefined, [PointerDirectionConfig]);
  function detectDragGesturesAfterLongPress$slambda$slambda$lambda($onDrag) {
    return function (it) {
      $onDrag(it, new Offset_0(positionChange(it)));
      it.p55();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPress$slambda$slambda($onDragStart, $onDragEnd, $onDragCancel, $onDrag, resultContinuation) {
    this.t7x_1 = $onDragStart;
    this.u7x_1 = $onDragEnd;
    this.v7x_1 = $onDragCancel;
    this.w7x_1 = $onDrag;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.c57 = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.d57($this$awaitPointerEventScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.c57((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 6;
            this.zf_1 = 1;
            suspendResult = awaitFirstDown(this.x7x_1, false, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.y7x_1 = suspendResult;
            this.zf_1 = 2;
            suspendResult = awaitLongPressOrCancellation(this.x7x_1, this.y7x_1.z52_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.z7x_1 = suspendResult;
            if (!(this.z7x_1 == null)) {
              this.t7x_1(new Offset_0(this.z7x_1.b53_1));
              this.zf_1 = 3;
              suspendResult = drag(this.x7x_1, this.z7x_1.z52_1, detectDragGesturesAfterLongPress$slambda$slambda$lambda(this.w7x_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 5;
              continue $sm;
            }

            break;
          case 3:
            if (suspendResult) {
              var tmp0_fastForEach = this.x7x_1.a5b().q53_1;
              var inductionVariable = 0;
              var last = tmp0_fastForEach.f() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastForEach.g(index);
                  if (changedToUp(item)) {
                    item.p55();
                  }
                }
                 while (inductionVariable <= last);
              this.u7x_1();
              this.zf_1 = 4;
              continue $sm;
            } else {
              this.v7x_1();
              this.zf_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.zf_1 = 5;
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 6) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  detectDragGesturesAfterLongPress$slambda$slambda.prototype.d57 = function ($this$awaitPointerEventScope, completion) {
    var i = new detectDragGesturesAfterLongPress$slambda$slambda(this.t7x_1, this.u7x_1, this.v7x_1, this.w7x_1, completion);
    i.x7x_1 = $this$awaitPointerEventScope;
    return i;
  };
  detectDragGesturesAfterLongPress$slambda$slambda.$metadata$ = classMeta('detectDragGesturesAfterLongPress$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectDragGesturesAfterLongPress$slambda$slambda_0($onDragStart, $onDragEnd, $onDragCancel, $onDrag, resultContinuation) {
    var i = new detectDragGesturesAfterLongPress$slambda$slambda($onDragStart, $onDragEnd, $onDragCancel, $onDrag, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.c57($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectDragGesturesAfterLongPress$slambda($onDragCancel, $onDragStart, $onDragEnd, $onDrag, resultContinuation) {
    this.i7y_1 = $onDragCancel;
    this.j7y_1 = $onDragStart;
    this.k7y_1 = $onDragEnd;
    this.l7y_1 = $onDrag;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectDragGesturesAfterLongPress$slambda.prototype.s57 = function ($this$forEachGesture, $cont) {
    var tmp = this.t57($this$forEachGesture, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  detectDragGesturesAfterLongPress$slambda.prototype.jg = function (p1, $cont) {
    return this.s57((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectDragGesturesAfterLongPress$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.m7y_1.u57(detectDragGesturesAfterLongPress$slambda$slambda_0(this.j7y_1, this.k7y_1, this.i7y_1, this.l7y_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ag_1 = 3;
            this.zf_1 = 4;
            continue $sm;
          case 2:
            this.ag_1 = 3;
            var tmp_0 = this.cg_1;
            if (tmp_0 instanceof CancellationException) {
              var c = this.cg_1;
              this.i7y_1();
              throw c;
            } else {
              throw this.cg_1;
            }

            break;
          case 3:
            throw this.cg_1;
          case 4:
            this.ag_1 = 3;
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
  detectDragGesturesAfterLongPress$slambda.prototype.t57 = function ($this$forEachGesture, completion) {
    var i = new detectDragGesturesAfterLongPress$slambda(this.i7y_1, this.j7y_1, this.k7y_1, this.l7y_1, completion);
    i.m7y_1 = $this$forEachGesture;
    return i;
  };
  detectDragGesturesAfterLongPress$slambda.$metadata$ = classMeta('detectDragGesturesAfterLongPress$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectDragGesturesAfterLongPress$slambda_0($onDragCancel, $onDragStart, $onDragEnd, $onDrag, resultContinuation) {
    var i = new detectDragGesturesAfterLongPress$slambda($onDragCancel, $onDragStart, $onDragEnd, $onDrag, resultContinuation);
    var l = function ($this$forEachGesture, $cont) {
      return i.s57($this$forEachGesture, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function awaitLongPressOrCancellation$slambda($currentDown, $longPress, resultContinuation) {
    this.v7y_1 = $currentDown;
    this.w7y_1 = $longPress;
    CoroutineImpl.call(this, resultContinuation);
  }
  awaitLongPressOrCancellation$slambda.prototype.c57 = function ($this$withTimeout, $cont) {
    var tmp = this.d57($this$withTimeout, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  awaitLongPressOrCancellation$slambda.prototype.jg = function (p1, $cont) {
    return this.c57((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  awaitLongPressOrCancellation$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 5;
            this.y7y_1 = false;
            this.zf_1 = 1;
            continue $sm;
          case 1:
            if (!!this.y7y_1) {
              this.zf_1 = 4;
              continue $sm;
            }

            this.zf_1 = 2;
            suspendResult = this.x7y_1.e57(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.z7y_1 = suspendResult;
            l$ret$1: do {
              var tmp0_fastAll = this.z7y_1.q53_1;
              var inductionVariable = 0;
              var last = tmp0_fastAll.f() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastAll.g(index);
                  if (!changedToUpIgnoreConsumed(item)) {
                    this.a7z_1 = false;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              this.a7z_1 = true;
            }
             while (false);
            if (this.a7z_1) {
              this.y7y_1 = true;
            }

            l$ret$3: do {
              var tmp1_fastAny = this.z7y_1.q53_1;
              var inductionVariable_0 = 0;
              var last_0 = tmp1_fastAny.f() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = tmp1_fastAny.g(index_0);
                  if (item_0.l55() ? true : isOutOfBounds(item_0, this.x7y_1.a54(), this.x7y_1.c5b())) {
                    this.b7z_1 = true;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable_0 <= last_0);
              this.b7z_1 = false;
            }
             while (false);
            if (this.b7z_1) {
              this.y7y_1 = true;
            }

            this.zf_1 = 3;
            suspendResult = this.x7y_1.e57(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var consumeCheck = suspendResult;
            var tmp$ret$4;
            l$ret$5: do {
              var tmp2_fastAny = consumeCheck.q53_1;
              var inductionVariable_1 = 0;
              var last_1 = tmp2_fastAny.f() - 1 | 0;
              if (inductionVariable_1 <= last_1)
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp2_fastAny.g(index_1);
                  if (item_1.l55()) {
                    tmp$ret$4 = true;
                    break l$ret$5;
                  }
                }
                 while (inductionVariable_1 <= last_1);
              tmp$ret$4 = false;
            }
             while (false);
            if (tmp$ret$4) {
              this.y7y_1 = true;
            }

            if (isPointerUp$accessor$2pjqd1(this.z7y_1, this.v7y_1._v.z52_1)) {
              var tmp$ret$6;
              l$ret$7: do {
                var tmp3_fastFirstOrNull = this.z7y_1.q53_1;
                var inductionVariable_2 = 0;
                var last_2 = tmp3_fastFirstOrNull.f() - 1 | 0;
                if (inductionVariable_2 <= last_2)
                  do {
                    var index_2 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var item_2 = tmp3_fastFirstOrNull.g(index_2);
                    if (item_2.c53_1) {
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
                this.v7y_1._v = newPressed;
                this.w7y_1._v = this.v7y_1._v;
              } else {
                this.y7y_1 = true;
              }
            } else {
              var tmp$ret$8;
              l$ret$9: do {
                var tmp4_fastFirstOrNull = this.z7y_1.q53_1;
                var inductionVariable_3 = 0;
                var last_3 = tmp4_fastFirstOrNull.f() - 1 | 0;
                if (inductionVariable_3 <= last_3)
                  do {
                    var index_3 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var item_3 = tmp4_fastFirstOrNull.g(index_3);
                    if (equals(item_3.z52_1, this.v7y_1._v.z52_1)) {
                      tmp$ret$8 = item_3;
                      break l$ret$9;
                    }
                  }
                   while (inductionVariable_3 <= last_3);
                tmp$ret$8 = null;
              }
               while (false);
              this.w7y_1._v = tmp$ret$8;
            }

            this.zf_1 = 1;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  awaitLongPressOrCancellation$slambda.prototype.d57 = function ($this$withTimeout, completion) {
    var i = new awaitLongPressOrCancellation$slambda(this.v7y_1, this.w7y_1, completion);
    i.x7y_1 = $this$withTimeout;
    return i;
  };
  awaitLongPressOrCancellation$slambda.$metadata$ = classMeta('awaitLongPressOrCancellation$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function awaitLongPressOrCancellation$slambda_0($currentDown, $longPress, resultContinuation) {
    var i = new awaitLongPressOrCancellation$slambda($currentDown, $longPress, resultContinuation);
    var l = function ($this$withTimeout, $cont) {
      return i.c57($this$withTimeout, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $verticalDragCOROUTINE$4(_this__u8e3s4, pointerId, onDrag, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a7v_1 = _this__u8e3s4;
    this.b7v_1 = pointerId;
    this.c7v_1 = onDrag;
  }
  $verticalDragCOROUTINE$4.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 17;
            this.zf_1 = 1;
            continue $sm;
          case 1:
            if (isPointerUp$accessor$2pjqd1(this.a7v_1.a5b(), this.b7v_1)) {
              this.d7v_1 = false;
              this.zf_1 = 16;
              continue $sm;
            } else {
              this.zf_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.e7v_1 = this.b7v_1;
            this.zf_1 = 3;
            continue $sm;
          case 3:
            if (false) {
              this.zf_1 = 15;
              continue $sm;
            }

            this.zf_1 = 4;
            continue $sm;
          case 4:
            var tmp_0 = this;
            tmp_0.g7v_1 = this.e7v_1;
            this.h7v_1 = this.g7v_1;
            this.zf_1 = 5;
            continue $sm;
          case 5:
            if (false) {
              this.zf_1 = 10;
              continue $sm;
            }

            this.zf_1 = 6;
            suspendResult = this.a7v_1.f5b(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var event = suspendResult;
            var tmp$ret$2;
            l$ret$3: do {
              var tmp0_fastFirstOrNull = event.q53_1;
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.f() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.g(index);
                  if (equals(item.z52_1, this.h7v_1)) {
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
              this.f7v_1 = null;
              this.zf_1 = 11;
              continue $sm;
            } else {
              WHEN_RESULT = tmp0_elvis_lhs;
              this.zf_1 = 7;
              continue $sm;
            }

            break;
          case 7:
            var dragEvent = WHEN_RESULT;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$6;
              l$ret$7: do {
                var tmp1_fastFirstOrNull = event.q53_1;
                var inductionVariable_0 = 0;
                var last_0 = tmp1_fastFirstOrNull.f() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = tmp1_fastFirstOrNull.g(index_0);
                    if (item_0.c53_1) {
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
                this.f7v_1 = dragEvent;
                this.zf_1 = 11;
                continue $sm;
              } else {
                this.h7v_1 = otherDown.z52_1;
                this.zf_1 = 8;
                continue $sm;
              }
            } else {
              if (!(_Offset___get_y__impl__8bzhra(positionChangeIgnoreConsumed(dragEvent)) === 0.0)) {
                this.f7v_1 = dragEvent;
                this.zf_1 = 11;
                continue $sm;
              } else {
                this.zf_1 = 9;
                continue $sm;
              }
            }

            ;
            break;
          case 8:
            this.zf_1 = 9;
            continue $sm;
          case 9:
            this.zf_1 = 5;
            continue $sm;
          case 10:
            if (false) {
              this.zf_1 = 4;
              continue $sm;
            }

            this.zf_1 = 11;
            continue $sm;
          case 11:
            var tmp0_elvis_lhs_0 = this.f7v_1;
            var WHEN_RESULT_0;
            if (tmp0_elvis_lhs_0 == null) {
              this.d7v_1 = false;
              this.zf_1 = 16;
              continue $sm;
            } else {
              WHEN_RESULT_0 = tmp0_elvis_lhs_0;
              this.zf_1 = 12;
              continue $sm;
            }

            break;
          case 12:
            var change = WHEN_RESULT_0;
            if (change.l55()) {
              this.d7v_1 = false;
              this.zf_1 = 16;
              continue $sm;
            } else {
              this.zf_1 = 13;
              continue $sm;
            }

            ;
            break;
          case 13:
            if (changedToUpIgnoreConsumed(change)) {
              this.d7v_1 = true;
              this.zf_1 = 16;
              continue $sm;
            } else {
              this.zf_1 = 14;
              continue $sm;
            }

            break;
          case 14:
            this.c7v_1(change);
            this.e7v_1 = change.z52_1;
            this.zf_1 = 3;
            continue $sm;
          case 15:
            if (false) {
              this.zf_1 = 1;
              continue $sm;
            }

            this.zf_1 = 16;
            continue $sm;
          case 16:
            return this.d7v_1;
          case 17:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 17) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  $verticalDragCOROUTINE$4.$metadata$ = classMeta('$verticalDragCOROUTINE$4', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $horizontalDragCOROUTINE$5(_this__u8e3s4, pointerId, onDrag, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q7v_1 = _this__u8e3s4;
    this.r7v_1 = pointerId;
    this.s7v_1 = onDrag;
  }
  $horizontalDragCOROUTINE$5.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 17;
            this.zf_1 = 1;
            continue $sm;
          case 1:
            if (isPointerUp$accessor$2pjqd1(this.q7v_1.a5b(), this.r7v_1)) {
              this.t7v_1 = false;
              this.zf_1 = 16;
              continue $sm;
            } else {
              this.zf_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.u7v_1 = this.r7v_1;
            this.zf_1 = 3;
            continue $sm;
          case 3:
            if (false) {
              this.zf_1 = 15;
              continue $sm;
            }

            this.zf_1 = 4;
            continue $sm;
          case 4:
            var tmp_0 = this;
            tmp_0.w7v_1 = this.u7v_1;
            this.x7v_1 = this.w7v_1;
            this.zf_1 = 5;
            continue $sm;
          case 5:
            if (false) {
              this.zf_1 = 10;
              continue $sm;
            }

            this.zf_1 = 6;
            suspendResult = this.q7v_1.f5b(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var event = suspendResult;
            var tmp$ret$2;
            l$ret$3: do {
              var tmp0_fastFirstOrNull = event.q53_1;
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.f() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.g(index);
                  if (equals(item.z52_1, this.x7v_1)) {
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
              this.v7v_1 = null;
              this.zf_1 = 11;
              continue $sm;
            } else {
              WHEN_RESULT = tmp0_elvis_lhs;
              this.zf_1 = 7;
              continue $sm;
            }

            break;
          case 7:
            var dragEvent = WHEN_RESULT;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$6;
              l$ret$7: do {
                var tmp1_fastFirstOrNull = event.q53_1;
                var inductionVariable_0 = 0;
                var last_0 = tmp1_fastFirstOrNull.f() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = tmp1_fastFirstOrNull.g(index_0);
                    if (item_0.c53_1) {
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
                this.v7v_1 = dragEvent;
                this.zf_1 = 11;
                continue $sm;
              } else {
                this.x7v_1 = otherDown.z52_1;
                this.zf_1 = 8;
                continue $sm;
              }
            } else {
              if (!(_Offset___get_x__impl__xvi35n(positionChangeIgnoreConsumed(dragEvent)) === 0.0)) {
                this.v7v_1 = dragEvent;
                this.zf_1 = 11;
                continue $sm;
              } else {
                this.zf_1 = 9;
                continue $sm;
              }
            }

            ;
            break;
          case 8:
            this.zf_1 = 9;
            continue $sm;
          case 9:
            this.zf_1 = 5;
            continue $sm;
          case 10:
            if (false) {
              this.zf_1 = 4;
              continue $sm;
            }

            this.zf_1 = 11;
            continue $sm;
          case 11:
            var tmp0_elvis_lhs_0 = this.v7v_1;
            var WHEN_RESULT_0;
            if (tmp0_elvis_lhs_0 == null) {
              this.t7v_1 = false;
              this.zf_1 = 16;
              continue $sm;
            } else {
              WHEN_RESULT_0 = tmp0_elvis_lhs_0;
              this.zf_1 = 12;
              continue $sm;
            }

            break;
          case 12:
            var change = WHEN_RESULT_0;
            if (change.l55()) {
              this.t7v_1 = false;
              this.zf_1 = 16;
              continue $sm;
            } else {
              this.zf_1 = 13;
              continue $sm;
            }

            ;
            break;
          case 13:
            if (changedToUpIgnoreConsumed(change)) {
              this.t7v_1 = true;
              this.zf_1 = 16;
              continue $sm;
            } else {
              this.zf_1 = 14;
              continue $sm;
            }

            break;
          case 14:
            this.s7v_1(change);
            this.u7v_1 = change.z52_1;
            this.zf_1 = 3;
            continue $sm;
          case 15:
            if (false) {
              this.zf_1 = 1;
              continue $sm;
            }

            this.zf_1 = 16;
            continue $sm;
          case 16:
            return this.t7v_1;
          case 17:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 17) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  $horizontalDragCOROUTINE$5.$metadata$ = classMeta('$horizontalDragCOROUTINE$5', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $dragCOROUTINE$8(_this__u8e3s4, pointerId, onDrag, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g7w_1 = _this__u8e3s4;
    this.h7w_1 = pointerId;
    this.i7w_1 = onDrag;
  }
  $dragCOROUTINE$8.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            this.j7w_1 = this.h7w_1;
            this.zf_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.zf_1 = 4;
              continue $sm;
            }

            this.zf_1 = 2;
            suspendResult = awaitDragOrCancellation(this.g7w_1, this.j7w_1, this);
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

            this.i7w_1(change);
            this.j7w_1 = change.z52_1;
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
  $dragCOROUTINE$8.$metadata$ = classMeta('$dragCOROUTINE$8', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitLongPressOrCancellationCOROUTINE$9(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s7w_1 = _this__u8e3s4;
    this.t7w_1 = pointerId;
  }
  $awaitLongPressOrCancellationCOROUTINE$9.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            if (isPointerUp$accessor$2pjqd1(this.s7w_1.a5b(), this.t7w_1)) {
              return null;
            }

            var tmp_0 = this;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull = this.s7w_1.a5b().q53_1;
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.f() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.g(index);
                  if (equals(item.z52_1, this.t7w_1)) {
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

            tmp_0.u7w_1 = tmp_1;
            this.v7w_1 = {_v: null};
            this.w7w_1 = {_v: this.u7w_1};
            this.x7w_1 = this.s7w_1.b5b().s5v();
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.s7w_1.y59(this.x7w_1, awaitLongPressOrCancellation$slambda_0(this.w7w_1, this.v7w_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.y7w_1 = null;
            this.ag_1 = 3;
            this.zf_1 = 4;
            continue $sm;
          case 2:
            this.ag_1 = 3;
            var tmp_2 = this.cg_1;
            if (tmp_2 instanceof PointerEventTimeoutCancellationException) {
              var _ = this.cg_1;
              var tmp_3 = this;
              var tmp1_elvis_lhs = this.v7w_1._v;
              tmp_3.y7w_1 = tmp1_elvis_lhs == null ? this.u7w_1 : tmp1_elvis_lhs;
              this.zf_1 = 4;
              continue $sm;
            } else {
              throw this.cg_1;
            }

            break;
          case 3:
            throw this.cg_1;
          case 4:
            this.ag_1 = 3;
            return this.y7w_1;
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
  $awaitLongPressOrCancellationCOROUTINE$9.$metadata$ = classMeta('$awaitLongPressOrCancellationCOROUTINE$9', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitDragOrCancellationCOROUTINE$10(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h7x_1 = _this__u8e3s4;
    this.i7x_1 = pointerId;
  }
  $awaitDragOrCancellationCOROUTINE$10.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 7;
            if (isPointerUp$accessor$2pjqd1(this.h7x_1.a5b(), this.i7x_1)) {
              return null;
            }

            this.zf_1 = 1;
            continue $sm;
          case 1:
            this.k7x_1 = this.i7x_1;
            this.zf_1 = 2;
            continue $sm;
          case 2:
            if (false) {
              this.zf_1 = 8;
              continue $sm;
            }

            this.zf_1 = 3;
            suspendResult = this.h7x_1.f5b(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var event = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull = event.q53_1;
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.f() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.g(index);
                  if (equals(item.z52_1, this.k7x_1)) {
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
              this.j7x_1 = null;
              this.zf_1 = 9;
              continue $sm;
            } else {
              WHEN_RESULT = tmp0_elvis_lhs;
              this.zf_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            var dragEvent = WHEN_RESULT;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$4;
              l$ret$5: do {
                var tmp1_fastFirstOrNull = event.q53_1;
                var inductionVariable_0 = 0;
                var last_0 = tmp1_fastFirstOrNull.f() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = tmp1_fastFirstOrNull.g(index_0);
                    if (item_0.c53_1) {
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
                this.j7x_1 = dragEvent;
                this.zf_1 = 9;
                continue $sm;
              } else {
                this.k7x_1 = otherDown.z52_1;
                this.zf_1 = 5;
                continue $sm;
              }
            } else {
              if (positionChangedIgnoreConsumed(dragEvent)) {
                this.j7x_1 = dragEvent;
                this.zf_1 = 9;
                continue $sm;
              } else {
                this.zf_1 = 6;
                continue $sm;
              }
            }

            ;
            break;
          case 5:
            this.zf_1 = 6;
            continue $sm;
          case 6:
            this.zf_1 = 2;
            continue $sm;
          case 7:
            throw this.cg_1;
          case 8:
            if (false) {
              this.zf_1 = 1;
              continue $sm;
            }

            this.zf_1 = 9;
            continue $sm;
          case 9:
            var change = this.j7x_1;
            var tmp_0;
            var tmp0_safe_receiver = change;
            if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l55()) === false) {
              tmp_0 = change;
            } else {
              tmp_0 = null;
            }

            return tmp_0;
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
    $composer_0.y1a(365468930);
    sourceInformation($composer_0, 'C(rememberDraggableState$composable)136@5795L29,137@5836L61:Draggable.kt#8bwon0');
    if (isTraceInProgress()) {
      traceEventStart(365468930, $changed, -1, 'androidx.compose.foundation.gestures.rememberDraggableState$composable (Draggable.kt:135)');
    }
    var onDeltaState = rememberUpdatedState$composable(onDelta, $composer_0, 14 & $changed);
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
    if (false ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.gestures.rememberDraggableState$composable.<anonymous>' call
      tmp$ret$0 = DraggableState_0(rememberDraggableState$composable$lambda(onDeltaState));
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
  function toFloat(_this__u8e3s4, orientation) {
    return orientation.equals(Orientation_Vertical_getInstance()) ? _Velocity___get_y__impl__239yhc(_this__u8e3s4) : _Velocity___get_x__impl__qqcikv(_this__u8e3s4);
  }
  function DefaultDraggableState$dragScope$1(this$0) {
    this.f7z_1 = this$0;
  }
  DefaultDraggableState$dragScope$1.prototype.e7z = function (pixels) {
    return this.f7z_1.g7z_1(pixels);
  };
  DefaultDraggableState$dragScope$1.$metadata$ = classMeta(undefined, [DragScope]);
  function DefaultDraggableState$drag$slambda(this$0, $dragPriority, $block, resultContinuation) {
    this.r7z_1 = this$0;
    this.s7z_1 = $dragPriority;
    this.t7z_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  DefaultDraggableState$drag$slambda.prototype.e1w = function ($this$coroutineScope, $cont) {
    var tmp = this.f1w($this$coroutineScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  DefaultDraggableState$drag$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  DefaultDraggableState$drag$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.r7z_1.i7z_1.o7u(this.r7z_1.h7z_1, this.s7z_1, this.t7z_1, this);
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
  DefaultDraggableState$drag$slambda.prototype.f1w = function ($this$coroutineScope, completion) {
    var i = new DefaultDraggableState$drag$slambda(this.r7z_1, this.s7z_1, this.t7z_1, completion);
    i.u7z_1 = $this$coroutineScope;
    return i;
  };
  DefaultDraggableState$drag$slambda.$metadata$ = classMeta('DefaultDraggableState$drag$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function DefaultDraggableState$drag$slambda_0(this$0, $dragPriority, $block, resultContinuation) {
    var i = new DefaultDraggableState$drag$slambda(this$0, $dragPriority, $block, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.e1w($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultDraggableState(onDelta) {
    this.g7z_1 = onDelta;
    var tmp = this;
    tmp.h7z_1 = new DefaultDraggableState$dragScope$1(this);
    this.i7z_1 = new MutatorMutex();
  }
  DefaultDraggableState.prototype.c7z = function (dragPriority, block, $cont) {
    return coroutineScope(DefaultDraggableState$drag$slambda_0(this, dragPriority, block, null), $cont);
  };
  DefaultDraggableState.$metadata$ = classMeta('DefaultDraggableState', [DraggableState]);
  function DragStarted(startPoint) {
    DragEvent.call(this);
    this.v7z_1 = startPoint;
    this.w7z_1 = 0;
  }
  DragStarted.$metadata$ = classMeta('DragStarted', undefined, undefined, undefined, undefined, DragEvent.prototype);
  function DragStopped(velocity) {
    DragEvent.call(this);
    this.x7z_1 = velocity;
    this.y7z_1 = 0;
  }
  DragStopped.$metadata$ = classMeta('DragStopped', undefined, undefined, undefined, undefined, DragEvent.prototype);
  function DragCancelled() {
    DragCancelled_instance = this;
    DragEvent.call(this);
    this.z7z_1 = 0;
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
    this.a80_1 = delta;
    this.b80_1 = 0;
  }
  DragDelta.$metadata$ = classMeta('DragDelta', undefined, undefined, undefined, undefined, DragEvent.prototype);
  function DragEvent() {
  }
  DragEvent.$metadata$ = classMeta('DragEvent');
  function $processDragStartCOROUTINE$11(_this__u8e3s4, _this__u8e3s4_0, event, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k80_1 = _this__u8e3s4;
    this.l80_1 = _this__u8e3s4_0;
    this.m80_1 = event;
  }
  $processDragStartCOROUTINE$11.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 7;
            this.n80_1 = this.k80_1.w80_1.i2();
            if (this.n80_1 == null) {
              this.o80_1 = null;
              this.zf_1 = 3;
              continue $sm;
            } else {
              this.p80_1 = this.k80_1.x80_1;
              if (this.p80_1 == null) {
                this.q80_1 = null;
                this.zf_1 = 2;
                continue $sm;
              } else {
                this.zf_1 = 1;
                suspendResult = this.p80_1.a7k(new Cancel(this.n80_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 1:
            var tmp_0 = this;
            tmp_0.q80_1 = Unit_getInstance();
            this.zf_1 = 2;
            continue $sm;
          case 2:
            this.o80_1 = this.q80_1;
            this.zf_1 = 3;
            continue $sm;
          case 3:
            ;
            this.r80_1 = new Start();
            this.s80_1 = this.k80_1.x80_1;
            if (this.s80_1 == null) {
              this.t80_1 = null;
              this.zf_1 = 5;
              continue $sm;
            } else {
              this.zf_1 = 4;
              suspendResult = this.s80_1.a7k(this.r80_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            ;
            break;
          case 4:
            var tmp_1 = this;
            tmp_1.t80_1 = Unit_getInstance();
            this.zf_1 = 5;
            continue $sm;
          case 5:
            ;
            this.k80_1.w80_1.p11(this.r80_1);
            this.zf_1 = 6;
            suspendResult = this.k80_1.u80_1(this.l80_1, new Offset_0(this.m80_1.v7z_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            return Unit_getInstance();
          case 7:
            throw this.cg_1;
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
  $processDragStartCOROUTINE$11.$metadata$ = classMeta('$processDragStartCOROUTINE$11', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $processDragStopCOROUTINE$12(_this__u8e3s4, _this__u8e3s4_0, event, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g81_1 = _this__u8e3s4;
    this.h81_1 = _this__u8e3s4_0;
    this.i81_1 = event;
  }
  $processDragStopCOROUTINE$12.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 5;
            this.j81_1 = this.g81_1.w80_1.i2();
            if (this.j81_1 == null) {
              this.k81_1 = null;
              this.zf_1 = 3;
              continue $sm;
            } else {
              this.l81_1 = this.g81_1.x80_1;
              if (this.l81_1 == null) {
                this.m81_1 = null;
                this.zf_1 = 2;
                continue $sm;
              } else {
                this.zf_1 = 1;
                suspendResult = this.l81_1.a7k(new Stop(this.j81_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 1:
            var tmp_0 = this;
            tmp_0.m81_1 = Unit_getInstance();
            this.zf_1 = 2;
            continue $sm;
          case 2:
            ;
            var tmp_1 = this;
            this.g81_1.w80_1.p11(null);
            tmp_1.k81_1 = Unit_getInstance();
            this.zf_1 = 3;
            continue $sm;
          case 3:
            ;
            this.zf_1 = 4;
            suspendResult = this.g81_1.v80_1(this.h81_1, new Velocity(this.i81_1.x7z_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_getInstance();
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
  $processDragStopCOROUTINE$12.$metadata$ = classMeta('$processDragStopCOROUTINE$12', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $processDragCancelCOROUTINE$13(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v81_1 = _this__u8e3s4;
    this.w81_1 = _this__u8e3s4_0;
  }
  $processDragCancelCOROUTINE$13.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 5;
            this.x81_1 = this.v81_1.w80_1.i2();
            if (this.x81_1 == null) {
              this.y81_1 = null;
              this.zf_1 = 3;
              continue $sm;
            } else {
              this.z81_1 = this.v81_1.x80_1;
              if (this.z81_1 == null) {
                this.a82_1 = null;
                this.zf_1 = 2;
                continue $sm;
              } else {
                this.zf_1 = 1;
                suspendResult = this.z81_1.a7k(new Cancel(this.x81_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 1:
            var tmp_0 = this;
            tmp_0.a82_1 = Unit_getInstance();
            this.zf_1 = 2;
            continue $sm;
          case 2:
            ;
            var tmp_1 = this;
            this.v81_1.w80_1.p11(null);
            tmp_1.y81_1 = Unit_getInstance();
            this.zf_1 = 3;
            continue $sm;
          case 3:
            ;
            this.zf_1 = 4;
            suspendResult = this.v81_1.v80_1(this.w81_1, new Velocity(Companion_getInstance_12().a2m_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_getInstance();
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
  $processDragCancelCOROUTINE$13.$metadata$ = classMeta('$processDragCancelCOROUTINE$13', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function DragLogic(onDragStarted, onDragStopped, dragStartInteraction, interactionSource) {
    this.u80_1 = onDragStarted;
    this.v80_1 = onDragStopped;
    this.w80_1 = dragStartInteraction;
    this.x80_1 = interactionSource;
  }
  DragLogic.prototype.b82 = function (_this__u8e3s4, event, $cont) {
    var tmp = new $processDragStartCOROUTINE$11(this, _this__u8e3s4, event, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  DragLogic.prototype.c82 = function (_this__u8e3s4, event, $cont) {
    var tmp = new $processDragStopCOROUTINE$12(this, _this__u8e3s4, event, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  DragLogic.prototype.d82 = function (_this__u8e3s4, $cont) {
    var tmp = new $processDragCancelCOROUTINE$13(this, _this__u8e3s4, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  DragLogic.$metadata$ = classMeta('DragLogic');
  function toFloat_0(_this__u8e3s4, orientation) {
    return orientation.equals(Orientation_Vertical_getInstance()) ? _Offset___get_y__impl__8bzhra(_this__u8e3s4) : _Offset___get_x__impl__xvi35n(_this__u8e3s4);
  }
  function awaitDownAndSlop(_this__u8e3s4, canDrag, startDragImmediately, velocityTracker, orientation, $cont) {
    var tmp = new $awaitDownAndSlopCOROUTINE$14(_this__u8e3s4, canDrag, startDragImmediately, velocityTracker, orientation, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function awaitDrag(_this__u8e3s4, startEvent, initialDelta, velocityTracker, channel, reverseDirection, orientation, $cont) {
    var tmp = new $awaitDragCOROUTINE$15(_this__u8e3s4, startEvent, initialDelta, velocityTracker, channel, reverseDirection, orientation, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function rememberDraggableState$composable$lambda($onDeltaState) {
    return function (it) {
      $onDeltaState.i2()(it);
      return Unit_getInstance();
    };
  }
  function draggable$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$slambda.prototype.y84 = function ($this$null, it, $cont) {
    var tmp = this.z84($this$null, it, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  draggable$slambda.prototype.hh = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.y84(tmp, p2 instanceof Offset_0 ? p2.s2i_1 : THROW_CCE(), $cont);
  };
  draggable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  draggable$slambda.prototype.z84 = function ($this$null, it, completion) {
    var i = new draggable$slambda(completion);
    i.w84_1 = $this$null;
    i.x84_1 = it;
    return i;
  };
  draggable$slambda.$metadata$ = classMeta('draggable$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function draggable$slambda_0(resultContinuation) {
    var i = new draggable$slambda(resultContinuation);
    var l = function ($this$null, it, $cont) {
      return i.y84($this$null, it.s2i_1, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function draggable$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$slambda_1.prototype.k85 = function ($this$null, it, $cont) {
    var tmp = this.l85($this$null, it, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  draggable$slambda_1.prototype.hh = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.k85(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE(), $cont);
  };
  draggable$slambda_1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  draggable$slambda_1.prototype.l85 = function ($this$null, it, completion) {
    var i = new draggable$slambda_1(completion);
    i.i85_1 = $this$null;
    i.j85_1 = it;
    return i;
  };
  draggable$slambda_1.$metadata$ = classMeta('draggable$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function draggable$slambda_2(resultContinuation) {
    var i = new draggable$slambda_1(resultContinuation);
    var l = function ($this$null, it, $cont) {
      return i.k85($this$null, it, $cont);
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
    this.u85_1 = $onDragStopped;
    this.v85_1 = $orientation;
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$slambda_3.prototype.y85 = function ($this$draggable, velocity, $cont) {
    var tmp = this.z85($this$draggable, velocity, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  draggable$slambda_3.prototype.hh = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.y85(tmp, p2 instanceof Velocity ? p2.b2m_1 : THROW_CCE(), $cont);
  };
  draggable$slambda_3.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.u85_1(this.w85_1, toFloat(this.x85_1, this.v85_1), this);
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
  draggable$slambda_3.prototype.z85 = function ($this$draggable, velocity, completion) {
    var i = new draggable$slambda_3(this.u85_1, this.v85_1, completion);
    i.w85_1 = $this$draggable;
    i.x85_1 = velocity;
    return i;
  };
  draggable$slambda_3.$metadata$ = classMeta('draggable$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function draggable$slambda_4($onDragStopped, $orientation, resultContinuation) {
    var i = new draggable$slambda_3($onDragStopped, $orientation, resultContinuation);
    var l = function ($this$draggable, velocity, $cont) {
      return i.y85($this$draggable, velocity.b2m_1, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function draggable$lambda_1($canDrag, $orientation, $enabled, $reverseDirection, $interactionSource, $startDragImmediately, $onDragStarted, $onDragStopped, $state) {
    return function ($this$null) {
      $this$null.e4h_1 = 'draggable';
      $this$null.g4h_1.k4h('canDrag', $canDrag);
      $this$null.g4h_1.k4h('orientation', $orientation);
      $this$null.g4h_1.k4h('enabled', $enabled);
      $this$null.g4h_1.k4h('reverseDirection', $reverseDirection);
      $this$null.g4h_1.k4h('interactionSource', $interactionSource);
      $this$null.g4h_1.k4h('startDragImmediately', $startDragImmediately);
      $this$null.g4h_1.k4h('onDragStarted', $onDragStarted);
      $this$null.g4h_1.k4h('onDragStopped', $onDragStopped);
      $this$null.g4h_1.k4h('state', $state);
      return Unit_getInstance();
    };
  }
  function invoke$lambda_5($dragLogic$delegate) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = getLocalDelegateReference('dragLogic', KProperty0, false, function () {
      return THROW_ISE();
    });
    tmp$ret$0 = $dragLogic$delegate.i2();
    return tmp$ret$0;
  }
  function _no_name_provided__qut3iv_4($draggedInteraction, $interactionSource) {
    this.a86_1 = $draggedInteraction;
    this.b86_1 = $interactionSource;
  }
  _no_name_provided__qut3iv_4.prototype.vk = function () {
    // Inline function 'androidx.compose.foundation.gestures.draggable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.a86_1.i2();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp0_safe_receiver_0 = this.b86_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else
        tmp0_safe_receiver_0.l7j(new Cancel(tmp0_safe_receiver));
      this.a86_1.p11(null);
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
    this.k86_1 = $event;
    this.l86_1 = $orientation;
    this.m86_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$lambda$slambda$slambda.prototype.o86 = function ($this$drag, $cont) {
    var tmp = this.p86($this$drag, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  draggable$lambda$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.o86((!(p1 == null) ? isInterface(p1, DragScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  draggable$lambda$slambda$slambda.prototype.ig = function () {
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
            var tmp_0;
            var tmp_1 = this.k86_1._v;
            if (!(tmp_1 instanceof DragStopped)) {
              var tmp_2 = this.k86_1._v;
              tmp_0 = !(tmp_2 instanceof DragCancelled);
            } else {
              tmp_0 = false;
            }

            if (!tmp_0) {
              this.zf_1 = 4;
              continue $sm;
            }

            var tmp_3 = this.k86_1._v;
            var tmp0_safe_receiver = tmp_3 instanceof DragDelta ? tmp_3 : null;
            if (tmp0_safe_receiver == null)
              null;
            else {
              this.n86_1.e7z(toFloat_0(tmp0_safe_receiver.a80_1, this.l86_1));
            }

            ;
            this.zf_1 = 2;
            suspendResult = this.m86_1.ex(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.k86_1._v = ARGUMENT;
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
  draggable$lambda$slambda$slambda.prototype.p86 = function ($this$drag, completion) {
    var i = new draggable$lambda$slambda$slambda(this.k86_1, this.l86_1, this.m86_1, completion);
    i.n86_1 = $this$drag;
    return i;
  };
  draggable$lambda$slambda$slambda.$metadata$ = classMeta('draggable$lambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function draggable$lambda$slambda$slambda_0($event, $orientation, $channel, resultContinuation) {
    var i = new draggable$lambda$slambda$slambda($event, $orientation, $channel, resultContinuation);
    var l = function ($this$drag, $cont) {
      return i.o86($this$drag, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function draggable$lambda$slambda($channel, $state, $dragLogic$delegate, $orientation, resultContinuation) {
    this.y86_1 = $channel;
    this.z86_1 = $state;
    this.a87_1 = $dragLogic$delegate;
    this.b87_1 = $orientation;
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$lambda$slambda.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  draggable$lambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  draggable$lambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 13;
            this.zf_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive_0(this.c87_1)) {
              this.zf_1 = 12;
              continue $sm;
            }

            this.zf_1 = 2;
            suspendResult = this.y86_1.ex(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.d87_1 = suspendResult;
            this.e87_1 = {_v: this.d87_1};
            var tmp_0 = this.e87_1._v;
            if (!(tmp_0 instanceof DragStarted)) {
              this.zf_1 = 1;
              continue $sm;
            } else {
              this.zf_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            var tmp_1 = this;
            tmp_1.f87_1 = invoke$lambda_5(this.a87_1);
            this.zf_1 = 4;
            var tmp_2 = this.e87_1._v;
            suspendResult = this.f87_1.b82(this.c87_1, tmp_2 instanceof DragStarted ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.ag_1 = 9;
            this.zf_1 = 5;
            var tmp_3 = MutatePriority_UserInput_getInstance();
            suspendResult = this.z86_1.c7z(tmp_3, draggable$lambda$slambda$slambda_0(this.e87_1, this.b87_1, this.y86_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp_4 = this;
            tmp_4.g87_1 = invoke$lambda_5(this.a87_1);
            var tmp_5 = this.e87_1._v;
            if (tmp_5 instanceof DragStopped) {
              this.zf_1 = 7;
              var tmp_6 = this.e87_1._v;
              suspendResult = this.g87_1.c82(this.c87_1, tmp_6 instanceof DragStopped ? tmp_6 : THROW_CCE(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_7 = this.e87_1._v;
              if (tmp_7 instanceof DragCancelled) {
                this.zf_1 = 6;
                suspendResult = this.g87_1.d82(this.c87_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.zf_1 = 8;
                continue $sm;
              }
            }

            break;
          case 6:
            this.zf_1 = 8;
            continue $sm;
          case 7:
            this.zf_1 = 8;
            continue $sm;
          case 8:
            this.ag_1 = 13;
            this.zf_1 = 11;
            continue $sm;
          case 9:
            this.ag_1 = 13;
            var tmp_8 = this.cg_1;
            if (tmp_8 instanceof CancellationException) {
              this.h87_1 = this.cg_1;
              var tmp_9 = this;
              tmp_9.i87_1 = invoke$lambda_5(this.a87_1);
              this.zf_1 = 10;
              suspendResult = this.i87_1.d82(this.c87_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.cg_1;
            }

            break;
          case 10:
            this.zf_1 = 11;
            continue $sm;
          case 11:
            this.ag_1 = 13;
            this.zf_1 = 1;
            continue $sm;
          case 12:
            return Unit_getInstance();
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
  draggable$lambda$slambda.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new draggable$lambda$slambda(this.y86_1, this.z86_1, this.a87_1, this.b87_1, completion);
    i.c87_1 = $this$LaunchedEffect;
    return i;
  };
  draggable$lambda$slambda.$metadata$ = classMeta('draggable$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function draggable$lambda$slambda_0($channel, $state, $dragLogic$delegate, $orientation, resultContinuation) {
    var i = new draggable$lambda$slambda($channel, $state, $dragLogic$delegate, $orientation, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function draggable$lambda$slambda$slambda$slambda($this_coroutineScope, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation) {
    this.r87_1 = $this_coroutineScope;
    this.s87_1 = $canDragState;
    this.t87_1 = $startImmediatelyState;
    this.u87_1 = $orientation;
    this.v87_1 = $channel;
    this.w87_1 = $reverseDirection;
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$lambda$slambda$slambda$slambda.prototype.c57 = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.d57($this$awaitPointerEventScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  draggable$lambda$slambda$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.c57((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  draggable$lambda$slambda$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 10;
            this.zf_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive_0(this.r87_1)) {
              this.zf_1 = 9;
              continue $sm;
            }

            this.y87_1 = new VelocityTracker();
            this.zf_1 = 2;
            suspendResult = awaitDownAndSlop(this.x87_1, this.s87_1, this.t87_1, this.y87_1, this.u87_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.z87_1 = suspendResult;
            if (this.z87_1 == null) {
              this.a88_1 = null;
              this.zf_1 = 8;
              continue $sm;
            } else {
              this.b88_1 = false;
              this.zf_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.ag_1 = 6;
            this.ag_1 = 5;
            this.zf_1 = 4;
            suspendResult = awaitDrag(this.x87_1, this.z87_1.o_1, this.z87_1.p_1.s2i_1, this.y87_1, this.v87_1, this.w87_1, this.u87_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_0 = this;
            this.b88_1 = suspendResult;
            tmp_0.c88_1 = Unit_getInstance();
            this.ag_1 = 10;
            this.zf_1 = 7;
            continue $sm;
          case 5:
            this.ag_1 = 6;
            var tmp_1 = this.cg_1;
            if (tmp_1 instanceof CancellationException) {
              var cancellation = this.cg_1;
              var tmp_2 = this;
              this.b88_1 = false;
              var tmp_3;
              if (!get_isActive_0(this.r87_1)) {
                throw cancellation;
              }
              tmp_2.c88_1 = tmp_3;
              this.ag_1 = 10;
              this.zf_1 = 7;
              continue $sm;
            } else {
              throw this.cg_1;
            }

            break;
          case 6:
            this.ag_1 = 10;
            var t = this.cg_1;
            var tmp_4;
            if (this.b88_1) {
              var velocity = this.y87_1.d5d();
              tmp_4 = new DragStopped(Velocity__times_impl_yav0ik(velocity, this.w87_1 ? -1.0 : 1.0));
            } else {
              tmp_4 = DragCancelled_getInstance();
            }

            var event = tmp_4;
            this.v87_1.qx(event);
            ;
            throw t;
          case 7:
            var tmp_5 = this;
            var tmp_6;
            if (this.b88_1) {
              var velocity_0 = this.y87_1.d5d();
              tmp_6 = new DragStopped(Velocity__times_impl_yav0ik(velocity_0, this.w87_1 ? -1.0 : 1.0));
            } else {
              tmp_6 = DragCancelled_getInstance();
            }

            var event_0 = tmp_6;
            this.v87_1.qx(event_0);
            tmp_5.a88_1 = Unit_getInstance();
            this.zf_1 = 8;
            continue $sm;
          case 8:
            ;
            this.zf_1 = 1;
            continue $sm;
          case 9:
            return Unit_getInstance();
          case 10:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 10) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  draggable$lambda$slambda$slambda$slambda.prototype.d57 = function ($this$awaitPointerEventScope, completion) {
    var i = new draggable$lambda$slambda$slambda$slambda(this.r87_1, this.s87_1, this.t87_1, this.u87_1, this.v87_1, this.w87_1, completion);
    i.x87_1 = $this$awaitPointerEventScope;
    return i;
  };
  draggable$lambda$slambda$slambda$slambda.$metadata$ = classMeta('draggable$lambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function draggable$lambda$slambda$slambda$slambda_0($this_coroutineScope, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation) {
    var i = new draggable$lambda$slambda$slambda$slambda($this_coroutineScope, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.c57($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function draggable$lambda$slambda$slambda_1($this_pointerInput, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation) {
    this.l88_1 = $this_pointerInput;
    this.m88_1 = $canDragState;
    this.n88_1 = $startImmediatelyState;
    this.o88_1 = $orientation;
    this.p88_1 = $channel;
    this.q88_1 = $reverseDirection;
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$lambda$slambda$slambda_1.prototype.e1w = function ($this$coroutineScope, $cont) {
    var tmp = this.f1w($this$coroutineScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  draggable$lambda$slambda$slambda_1.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  draggable$lambda$slambda$slambda_1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.l88_1.u57(draggable$lambda$slambda$slambda$slambda_0(this.r88_1, this.m88_1, this.n88_1, this.o88_1, this.p88_1, this.q88_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ag_1 = 3;
            this.zf_1 = 4;
            continue $sm;
          case 2:
            this.ag_1 = 3;
            var tmp_0 = this.cg_1;
            if (tmp_0 instanceof CancellationException) {
              var exception = this.cg_1;
              if (!get_isActive_0(this.r88_1)) {
                throw exception;
              }
              this.zf_1 = 4;
              continue $sm;
            } else {
              throw this.cg_1;
            }

            break;
          case 3:
            throw this.cg_1;
          case 4:
            this.ag_1 = 3;
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
  draggable$lambda$slambda$slambda_1.prototype.f1w = function ($this$coroutineScope, completion) {
    var i = new draggable$lambda$slambda$slambda_1(this.l88_1, this.m88_1, this.n88_1, this.o88_1, this.p88_1, this.q88_1, completion);
    i.r88_1 = $this$coroutineScope;
    return i;
  };
  draggable$lambda$slambda$slambda_1.$metadata$ = classMeta('draggable$lambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function draggable$lambda$slambda$slambda_2($this_pointerInput, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation) {
    var i = new draggable$lambda$slambda$slambda_1($this_pointerInput, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.e1w($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function draggable$lambda$slambda_1($enabled, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation) {
    this.a89_1 = $enabled;
    this.b89_1 = $canDragState;
    this.c89_1 = $startImmediatelyState;
    this.d89_1 = $orientation;
    this.e89_1 = $channel;
    this.f89_1 = $reverseDirection;
    CoroutineImpl.call(this, resultContinuation);
  }
  draggable$lambda$slambda_1.prototype.s57 = function ($this$pointerInput, $cont) {
    var tmp = this.t57($this$pointerInput, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  draggable$lambda$slambda_1.prototype.jg = function (p1, $cont) {
    return this.s57((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  draggable$lambda$slambda_1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            if (!this.a89_1)
              return Unit_getInstance();
            this.zf_1 = 1;
            suspendResult = coroutineScope(draggable$lambda$slambda$slambda_2(this.g89_1, this.b89_1, this.c89_1, this.d89_1, this.e89_1, this.f89_1, null), this);
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
  draggable$lambda$slambda_1.prototype.t57 = function ($this$pointerInput, completion) {
    var i = new draggable$lambda$slambda_1(this.a89_1, this.b89_1, this.c89_1, this.d89_1, this.e89_1, this.f89_1, completion);
    i.g89_1 = $this$pointerInput;
    return i;
  };
  draggable$lambda$slambda_1.$metadata$ = classMeta('draggable$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function draggable$lambda$slambda_2($enabled, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation) {
    var i = new draggable$lambda$slambda_1($enabled, $canDragState, $startImmediatelyState, $orientation, $channel, $reverseDirection, resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.s57($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function draggable$lambda_2($interactionSource, $startDragImmediately, $canDrag, $onDragStarted, $onDragStopped, $state, $orientation, $enabled, $reverseDirection) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y1a(597193710);
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
      var tmp_0;
      if (false ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.gestures.draggable.<anonymous>.<anonymous>' call
        tmp$ret$0 = mutableStateOf$default(null, null, 2, null);
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
      var draggedInteraction = tmp$ret$4;
      var tmp$ret$9;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp1_remember$composable = $composer_0;
      var $composer_2 = tmp1_remember$composable;
      $composer_2.y1a(-1124426577);
      sourceInformation($composer_2, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_2;
      var tmp2_cache = !!($composer_2.z1a(draggedInteraction) | $composer_2.z1a($interactionSource));
      var tmp$ret$7;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$6;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_2;
      if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$5;
        // Inline function 'androidx.compose.foundation.gestures.draggable.<anonymous>.<anonymous>' call
        tmp$ret$5 = draggable$lambda$lambda(draggedInteraction, $interactionSource);
        var value_0 = tmp$ret$5;
        tmp1_cache_0.b1b(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = tmp0_let_0;
      }
      tmp$ret$6 = tmp_2;
      tmp$ret$7 = tmp$ret$6;
      var tmp_3 = tmp$ret$7;
      tmp$ret$8 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
      var tmp0_0 = tmp$ret$8;
      $composer_2.d1b();
      tmp$ret$9 = tmp0_0;
      DisposableEffect$composable($interactionSource, tmp$ret$9, $composer_0, 0);
      var tmp$ret$14;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp2_remember$composable = $composer_0;
      var $composer_3 = tmp2_remember$composable;
      $composer_3.y1a(547886695);
      sourceInformation($composer_3, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_1 = $composer_3;
      var tmp$ret$12;
      // Inline function 'kotlin.let' call
      var tmp0_let_1 = tmp1_cache_1.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (false ? true : tmp0_let_1 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$10;
        // Inline function 'androidx.compose.foundation.gestures.draggable.<anonymous>.<anonymous>' call
        Factory_getInstance();
        tmp$ret$10 = Channel$default(2147483647, null, null, 6, null);
        var value_1 = tmp$ret$10;
        tmp1_cache_1.b1b(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = tmp0_let_1;
      }
      tmp$ret$11 = tmp_4;
      tmp$ret$12 = tmp$ret$11;
      var tmp_5 = tmp$ret$12;
      tmp$ret$13 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      var tmp0_1 = tmp$ret$13;
      $composer_3.d1b();
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
      $composer_0.d1b();
      return tmp0_2;
    };
  }
  function awaitDownAndSlop$lambda($velocityTracker, $initialDelta) {
    return function (event, offset) {
      addPointerInputChange($velocityTracker, event);
      event.p55();
      $initialDelta._v = offset;
      return Unit_getInstance();
    };
  }
  function awaitDrag$lambda($velocityTracker, $channel, $reverseDirection) {
    return function (event) {
      addPointerInputChange($velocityTracker, event);
      var delta = positionChange(event);
      event.p55();
      $channel.qx(new DragDelta($reverseDirection ? Offset__times_impl_jz1mli(delta, -1.0) : delta));
      return Unit_getInstance();
    };
  }
  function $awaitDownAndSlopCOROUTINE$14(_this__u8e3s4, canDrag, startDragImmediately, velocityTracker, orientation, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m82_1 = _this__u8e3s4;
    this.n82_1 = canDrag;
    this.o82_1 = startDragImmediately;
    this.p82_1 = velocityTracker;
    this.q82_1 = orientation;
  }
  $awaitDownAndSlopCOROUTINE$14.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 17;
            this.r82_1 = PointerEventPass_Initial_getInstance();
            this.zf_1 = 1;
            suspendResult = awaitFirstDownOnPass(this.m82_1, this.r82_1, false, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s82_1 = suspendResult;
            if (!this.n82_1.i2()(this.s82_1)) {
              var tmp_0 = this;
              tmp_0.t82_1 = null;
              this.zf_1 = 16;
              continue $sm;
            } else {
              if (this.o82_1.i2()()) {
                var tmp_1 = this;
                this.s82_1.p55();
                addPointerInputChange(this.p82_1, this.s82_1);
                tmp_1.t82_1 = to(this.s82_1, new Offset_0(Companion_getInstance_4().o2i_1));
                this.zf_1 = 16;
                continue $sm;
              } else {
                this.zf_1 = 2;
                suspendResult = awaitFirstDown(this.m82_1, false, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

            break;
          case 2:
            this.u82_1 = suspendResult;
            addPointerInputChange(this.p82_1, this.u82_1);
            this.v82_1 = {_v: new Offset_0(Companion_getInstance_4().o2i_1)};
            var tmp_2 = this;
            tmp_2.w82_1 = awaitDownAndSlop$lambda(this.p82_1, this.v82_1);
            this.zf_1 = 3;
            continue $sm;
          case 3:
            var tmp_3 = this;
            tmp_3.y82_1 = this.u82_1.z52_1;
            var tmp_4 = this;
            tmp_4.z82_1 = this.u82_1.g53_1;
            var tmp_5 = this;
            tmp_5.a83_1 = toPointerDirectionConfig(this.q82_1);
            if (isPointerUp$accessor$2pjqd1(this.m82_1.a5b(), this.y82_1)) {
              this.x82_1 = null;
              this.zf_1 = 15;
              continue $sm;
            } else {
              this.zf_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.b83_1 = pointerSlop(this.m82_1.b5b(), this.z82_1);
            this.c83_1 = this.y82_1;
            this.d83_1 = 0.0;
            this.e83_1 = 0.0;
            this.zf_1 = 5;
            continue $sm;
          case 5:
            if (false) {
              this.zf_1 = 14;
              continue $sm;
            }

            this.zf_1 = 6;
            suspendResult = this.m82_1.f5b(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.f83_1 = suspendResult;
            var tmp_6 = this;
            l$ret$3: do {
              var tmp0_fastFirstOrNull = this.f83_1.q53_1;
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.f() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.g(index);
                  if (equals(item.z52_1, this.c83_1)) {
                    this.g83_1 = item;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable <= last);
              this.g83_1 = null;
            }
             while (false);
            tmp_6.h83_1 = this.g83_1;
            if (this.h83_1 == null) {
              this.x82_1 = null;
              this.zf_1 = 15;
              var tmp_7 = this;
              continue $sm;
            } else {
              this.i83_1 = this.h83_1;
              this.zf_1 = 7;
              continue $sm;
            }

            break;
          case 7:
            this.j83_1 = this.i83_1;
            if (this.j83_1.l55()) {
              this.x82_1 = null;
              this.zf_1 = 15;
              continue $sm;
            } else {
              if (changedToUpIgnoreConsumed(this.j83_1)) {
                var tmp_8 = this;
                l$ret$5: do {
                  var tmp1_fastFirstOrNull = this.f83_1.q53_1;
                  var inductionVariable_0 = 0;
                  var last_0 = tmp1_fastFirstOrNull.f() - 1 | 0;
                  if (inductionVariable_0 <= last_0)
                    do {
                      var index_0 = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      var item_0 = tmp1_fastFirstOrNull.g(index_0);
                      if (item_0.c53_1) {
                        this.k83_1 = item_0;
                        break l$ret$5;
                      }
                    }
                     while (inductionVariable_0 <= last_0);
                  this.k83_1 = null;
                }
                 while (false);
                tmp_8.l83_1 = this.k83_1;
                if (this.l83_1 == null) {
                  this.x82_1 = null;
                  this.zf_1 = 15;
                  continue $sm;
                } else {
                  this.c83_1 = this.l83_1.z52_1;
                  this.zf_1 = 12;
                  continue $sm;
                }
              } else {
                this.m83_1 = this.j83_1.b53_1;
                this.n83_1 = this.j83_1.e53_1;
                this.o83_1 = this.a83_1.p7u(this.m83_1) - this.a83_1.p7u(this.n83_1);
                this.p83_1 = this.a83_1.q7u(this.m83_1) - this.a83_1.q7u(this.n83_1);
                this.d83_1 = this.d83_1 + this.o83_1;
                this.e83_1 = this.e83_1 + this.p83_1;
                var tmp_9 = this;
                var tmp_10;
                {
                  var tmp2_abs = this.d83_1;
                  tmp_10 = Math.abs(tmp2_abs);
                }
                tmp_9.q83_1 = tmp_10;
                if (this.q83_1 < this.b83_1) {
                  this.zf_1 = 9;
                  suspendResult = this.m82_1.e57(PointerEventPass_Final_getInstance(), this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_11;
                  {
                    var tmp_12 = this.d83_1;
                    var tmp3_sign = this.d83_1;
                    var finalMainPositionChange = tmp_12 - sign(tmp3_sign) * this.b83_1;
                    tmp_11 = this.a83_1.r7u(finalMainPositionChange, this.e83_1);
                  }
                  var postSlopOffset = tmp_11;
                  this.w82_1(this.j83_1, new Offset_0(postSlopOffset));
                  if (this.j83_1.l55()) {
                    this.x82_1 = this.j83_1;
                    this.zf_1 = 15;
                    continue $sm;
                  } else {
                    this.d83_1 = 0.0;
                    this.e83_1 = 0.0;
                    this.zf_1 = 8;
                    continue $sm;
                  }
                }
              }
            }

            ;
            break;
          case 8:
            this.zf_1 = 11;
            continue $sm;
          case 9:
            ;
            if (this.j83_1.l55()) {
              this.x82_1 = null;
              this.zf_1 = 15;
              continue $sm;
            } else {
              this.zf_1 = 10;
              continue $sm;
            }

            break;
          case 10:
            this.zf_1 = 11;
            continue $sm;
          case 11:
            this.zf_1 = 13;
            continue $sm;
          case 12:
            this.zf_1 = 13;
            continue $sm;
          case 13:
            this.zf_1 = 5;
            continue $sm;
          case 14:
            if (false) {
              this.zf_1 = 3;
              continue $sm;
            }

            this.zf_1 = 15;
            continue $sm;
          case 15:
            var afterSlopResult = this.x82_1;
            this.t82_1 = !(afterSlopResult == null) ? to(afterSlopResult, this.v82_1._v) : null;
            this.zf_1 = 16;
            continue $sm;
          case 16:
            return this.t82_1;
          case 17:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 17) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  $awaitDownAndSlopCOROUTINE$14.$metadata$ = classMeta('$awaitDownAndSlopCOROUTINE$14', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitDragCOROUTINE$15(_this__u8e3s4, startEvent, initialDelta, velocityTracker, channel, reverseDirection, orientation, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z83_1 = _this__u8e3s4;
    this.a84_1 = startEvent;
    this.b84_1 = initialDelta;
    this.c84_1 = velocityTracker;
    this.d84_1 = channel;
    this.e84_1 = reverseDirection;
    this.f84_1 = orientation;
  }
  $awaitDragCOROUTINE$15.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            this.g84_1 = this.b84_1;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.h84_1 = _Offset___get_x__impl__xvi35n(this.a84_1.b53_1);
            tmp_0.i84_1 = sign(this.h84_1);
            var tmp_2 = this;
            var tmp_3 = this;
            tmp_3.j84_1 = _Offset___get_y__impl__8bzhra(this.a84_1.b53_1);
            tmp_2.k84_1 = sign(this.j84_1);
            this.l84_1 = Offset__minus_impl_hoj2c0(this.a84_1.b53_1, Offset(_Offset___get_x__impl__xvi35n(this.g84_1) * this.i84_1, _Offset___get_y__impl__8bzhra(this.g84_1) * this.k84_1));
            this.d84_1.qx(new DragStarted(this.l84_1));
            ;
            this.d84_1.qx(new DragDelta(this.e84_1 ? Offset__times_impl_jz1mli(this.b84_1, -1.0) : this.b84_1));
            ;
            var tmp_4 = this;
            tmp_4.m84_1 = awaitDrag$lambda(this.c84_1, this.d84_1, this.e84_1);
            if (this.f84_1.equals(Orientation_Vertical_getInstance())) {
              this.zf_1 = 2;
              suspendResult = verticalDrag(this.z83_1, this.a84_1.z52_1, this.m84_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.zf_1 = 1;
              suspendResult = horizontalDrag(this.z83_1, this.a84_1.z52_1, this.m84_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.n84_1 = suspendResult;
            this.zf_1 = 3;
            continue $sm;
          case 2:
            this.n84_1 = suspendResult;
            this.zf_1 = 3;
            continue $sm;
          case 3:
            return this.n84_1;
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
  $awaitDragCOROUTINE$15.$metadata$ = classMeta('$awaitDragCOROUTINE$15', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function forEachGesture(_this__u8e3s4, block, $cont) {
    var tmp = new $forEachGestureCOROUTINE$16(_this__u8e3s4, block, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function GestureCancellationException(message) {
    CancellationException_init_$Init$(message, this);
    this.t89_1 = 0;
    captureStack(this, GestureCancellationException);
  }
  GestureCancellationException.$metadata$ = classMeta('GestureCancellationException', undefined, undefined, undefined, undefined, CancellationException.prototype);
  function awaitAllPointersUp(_this__u8e3s4, $cont) {
    return _this__u8e3s4.u57(awaitAllPointersUp$slambda_0(null), $cont);
  }
  function awaitAllPointersUp_0(_this__u8e3s4, $cont) {
    var tmp = new $awaitAllPointersUpCOROUTINE$17(_this__u8e3s4, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function allPointersUp(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      var tmp0_fastAny = _this__u8e3s4.a5b().q53_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAny.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAny.g(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.foundation.gestures.allPointersUp.<anonymous>' call
          tmp$ret$0 = item.c53_1;
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
  awaitAllPointersUp$slambda.prototype.c57 = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.d57($this$awaitPointerEventScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  awaitAllPointersUp$slambda.prototype.jg = function (p1, $cont) {
    return this.c57((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  awaitAllPointersUp$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = awaitAllPointersUp_0(this.l8a_1, this);
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
  awaitAllPointersUp$slambda.prototype.d57 = function ($this$awaitPointerEventScope, completion) {
    var i = new awaitAllPointersUp$slambda(completion);
    i.l8a_1 = $this$awaitPointerEventScope;
    return i;
  };
  awaitAllPointersUp$slambda.$metadata$ = classMeta('awaitAllPointersUp$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function awaitAllPointersUp$slambda_0(resultContinuation) {
    var i = new awaitAllPointersUp$slambda(resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.c57($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $forEachGestureCOROUTINE$16(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p89_1 = _this__u8e3s4;
    this.q89_1 = block;
  }
  $forEachGestureCOROUTINE$16.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 9;
            var tmp_0 = this;
            tmp_0.r89_1 = this.o4();
            this.zf_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.r89_1)) {
              this.zf_1 = 8;
              continue $sm;
            }

            this.ag_1 = 4;
            this.zf_1 = 2;
            suspendResult = this.q89_1(this.p89_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.zf_1 = 3;
            suspendResult = awaitAllPointersUp(this.p89_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.ag_1 = 9;
            this.zf_1 = 7;
            continue $sm;
          case 4:
            this.ag_1 = 9;
            var tmp_1 = this.cg_1;
            if (tmp_1 instanceof CancellationException) {
              this.s89_1 = this.cg_1;
              if (get_isActive(this.r89_1)) {
                this.zf_1 = 5;
                suspendResult = awaitAllPointersUp(this.p89_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                throw this.s89_1;
              }
            } else {
              throw this.cg_1;
            }

            break;
          case 5:
            this.zf_1 = 6;
            continue $sm;
          case 6:
            this.zf_1 = 7;
            continue $sm;
          case 7:
            this.ag_1 = 9;
            this.zf_1 = 1;
            continue $sm;
          case 8:
            return Unit_getInstance();
          case 9:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 9) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  $forEachGestureCOROUTINE$16.$metadata$ = classMeta('$forEachGestureCOROUTINE$16', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitAllPointersUpCOROUTINE$17(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c8a_1 = _this__u8e3s4;
  }
  $awaitAllPointersUpCOROUTINE$17.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 5;
            if (!allPointersUp(this.c8a_1)) {
              this.zf_1 = 1;
              continue $sm;
            } else {
              this.zf_1 = 4;
              continue $sm;
            }

            break;
          case 1:
            this.zf_1 = 2;
            suspendResult = this.c8a_1.e57(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var events = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastAny = events.q53_1;
              var inductionVariable = 0;
              var last = tmp0_fastAny.f() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastAny.g(index);
                  if (item.c53_1) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = false;
            }
             while (false);
            if (tmp$ret$0) {
              this.zf_1 = 1;
              continue $sm;
            }

            this.zf_1 = 3;
            continue $sm;
          case 3:
            this.zf_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
  $awaitAllPointersUpCOROUTINE$17.$metadata$ = classMeta('$awaitAllPointersUpCOROUTINE$17', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  var Orientation_Vertical_instance;
  var Orientation_Horizontal_instance;
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
  var NoOpScrollScope;
  function get_ModifierLocalScrollableContainer() {
    init_properties_Scrollable_kt_ggickt();
    return ModifierLocalScrollableContainer;
  }
  var ModifierLocalScrollableContainer;
  function NoOpScrollScope$1() {
  }
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
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function awaitFirstDown(_this__u8e3s4, requireUnconsumed, $cont) {
    return awaitFirstDownOnPass(_this__u8e3s4, PointerEventPass_Main_getInstance(), requireUnconsumed, $cont);
  }
  function awaitFirstDown$default(_this__u8e3s4, requireUnconsumed, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requireUnconsumed = true;
    return awaitFirstDown(_this__u8e3s4, requireUnconsumed, $cont);
  }
  function $awaitReleaseCOROUTINE$19(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h8b_1 = _this__u8e3s4;
  }
  $awaitReleaseCOROUTINE$19.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            this.zf_1 = 1;
            suspendResult = this.h8b_1.w7k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new GestureCancellationException('The press gesture was canceled.');
            } else {
              this.zf_1 = 2;
              continue $sm;
            }

            break;
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
  $awaitReleaseCOROUTINE$19.$metadata$ = classMeta('$awaitReleaseCOROUTINE$19', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $tryAwaitReleaseCOROUTINE$20(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u8b_1 = _this__u8e3s4;
  }
  $tryAwaitReleaseCOROUTINE$20.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            if (!this.u8b_1.j8b_1 ? !this.u8b_1.k8b_1 : false) {
              this.zf_1 = 1;
              suspendResult = this.u8b_1.l8b_1.q16(null, this, 1, null);
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
            this.zf_1 = 2;
            continue $sm;
          case 2:
            return this.u8b_1.j8b_1;
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
  $tryAwaitReleaseCOROUTINE$20.$metadata$ = classMeta('$tryAwaitReleaseCOROUTINE$20', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function PressGestureScopeImpl(density) {
    this.i8b_1 = density;
    this.j8b_1 = false;
    this.k8b_1 = false;
    this.l8b_1 = Mutex(false);
  }
  PressGestureScopeImpl.prototype.m2k = function () {
    return this.i8b_1.m2k();
  };
  PressGestureScopeImpl.prototype.n2k = function () {
    return this.i8b_1.n2k();
  };
  PressGestureScopeImpl.prototype.p2k = function (_this__u8e3s4) {
    return this.i8b_1.p2k(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.v2k = function (_this__u8e3s4) {
    return this.i8b_1.v2k(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.o2k = function (_this__u8e3s4) {
    return this.i8b_1.o2k(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.q2k = function (_this__u8e3s4) {
    return this.i8b_1.q2k(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.w2k = function (_this__u8e3s4) {
    return this.i8b_1.w2k(_this__u8e3s4);
  };
  PressGestureScopeImpl.prototype.d76 = function () {
    this.k8b_1 = true;
    this.l8b_1.s16(null, 1, null);
  };
  PressGestureScopeImpl.prototype.wn = function () {
    this.j8b_1 = true;
    this.l8b_1.s16(null, 1, null);
  };
  PressGestureScopeImpl.prototype.b1q = function () {
    this.l8b_1.o16(null, 1, null);
    this.j8b_1 = false;
    this.k8b_1 = false;
  };
  PressGestureScopeImpl.prototype.m8a = function ($cont) {
    var tmp = new $awaitReleaseCOROUTINE$19(this, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  PressGestureScopeImpl.prototype.w7k = function ($cont) {
    var tmp = new $tryAwaitReleaseCOROUTINE$20(this, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  PressGestureScopeImpl.$metadata$ = classMeta('PressGestureScopeImpl', [PressGestureScope, Density]);
  function waitForUpOrCancellation(_this__u8e3s4, $cont) {
    var tmp = new $waitForUpOrCancellationCOROUTINE$21(_this__u8e3s4, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function consumeUntilUp(_this__u8e3s4, $cont) {
    var tmp = new $consumeUntilUpCOROUTINE$22(_this__u8e3s4, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function awaitSecondDown(_this__u8e3s4, firstUp, $cont) {
    var tmp = _this__u8e3s4.b5b().t5v();
    return _this__u8e3s4.g5b(tmp, awaitSecondDown$slambda_0(firstUp, null), $cont);
  }
  function isPrimaryChangedDown(_this__u8e3s4, requireUnconsumed) {
    init_properties_TapGestureDetector_kt_9k8ojy();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAll' call
      var tmp0_fastAll = _this__u8e3s4.q53_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAll.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAll.g(index);
          // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
          var tmp$ret$0;
          // Inline function 'androidx.compose.foundation.gestures.isPrimaryChangedDown.<anonymous>' call
          tmp$ret$0 = item.g53_1 === Companion_getInstance_11().f55_1;
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
      var tmp1_fastAll = _this__u8e3s4.q53_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp1_fastAll.f() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = tmp1_fastAll.g(index_0);
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
    return changedToDown_0 ? get_isPrimaryPressed(_this__u8e3s4.r53_1) ? true : !primaryButtonCausesDown : false;
  }
  function detectTapAndPress(_this__u8e3s4, onPress, onTap, $cont) {
    var pressScope = new PressGestureScopeImpl(_this__u8e3s4);
    return forEachGesture(_this__u8e3s4, detectTapAndPress$slambda_0(pressScope, onPress, onTap, null), $cont);
  }
  function NoPressGesture$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  NoPressGesture$slambda.prototype.o7i = function ($this$null, it, $cont) {
    var tmp = this.p7i($this$null, it, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  NoPressGesture$slambda.prototype.hh = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, PressGestureScope) : false) ? p1 : THROW_CCE();
    return this.o7i(tmp, p2 instanceof Offset_0 ? p2.s2i_1 : THROW_CCE(), $cont);
  };
  NoPressGesture$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  NoPressGesture$slambda.prototype.p7i = function ($this$null, it, completion) {
    var i = new NoPressGesture$slambda(completion);
    i.y8c_1 = $this$null;
    i.z8c_1 = it;
    return i;
  };
  NoPressGesture$slambda.$metadata$ = classMeta('NoPressGesture$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function NoPressGesture$slambda_0(resultContinuation) {
    var i = new NoPressGesture$slambda(resultContinuation);
    var l = function ($this$null, it, $cont) {
      return i.o7i($this$null, it.s2i_1, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function detectTapGestures$slambda$slambda$slambda$slambda($onPress, $pressScope, $down, resultContinuation) {
    this.i8d_1 = $onPress;
    this.j8d_1 = $pressScope;
    this.k8d_1 = $down;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapGestures$slambda$slambda$slambda$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  detectTapGestures$slambda$slambda$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapGestures$slambda$slambda$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.i8d_1(this.j8d_1, new Offset_0(this.k8d_1.b53_1), this);
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
  detectTapGestures$slambda$slambda$slambda$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new detectTapGestures$slambda$slambda$slambda$slambda(this.i8d_1, this.j8d_1, this.k8d_1, completion);
    i.l8d_1 = $this$launch;
    return i;
  };
  detectTapGestures$slambda$slambda$slambda$slambda.$metadata$ = classMeta('detectTapGestures$slambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapGestures$slambda$slambda$slambda$slambda_0($onPress, $pressScope, $down, resultContinuation) {
    var i = new detectTapGestures$slambda$slambda$slambda$slambda($onPress, $pressScope, $down, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapGestures$slambda$slambda$slambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapGestures$slambda$slambda$slambda$slambda_1.prototype.v8d = function ($this$withTimeout, $cont) {
    var tmp = this.d57($this$withTimeout, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  detectTapGestures$slambda$slambda$slambda$slambda_1.prototype.jg = function (p1, $cont) {
    return this.v8d((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapGestures$slambda$slambda$slambda$slambda_1.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = waitForUpOrCancellation(this.u8d_1, this);
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
  detectTapGestures$slambda$slambda$slambda$slambda_1.prototype.d57 = function ($this$withTimeout, completion) {
    var i = new detectTapGestures$slambda$slambda$slambda$slambda_1(completion);
    i.u8d_1 = $this$withTimeout;
    return i;
  };
  detectTapGestures$slambda$slambda$slambda$slambda_1.$metadata$ = classMeta('detectTapGestures$slambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapGestures$slambda$slambda$slambda$slambda_2(resultContinuation) {
    var i = new detectTapGestures$slambda$slambda$slambda$slambda_1(resultContinuation);
    var l = function ($this$withTimeout, $cont) {
      return i.v8d($this$withTimeout, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapGestures$slambda$slambda$slambda$slambda_3($onPress, $pressScope, $secondDown, resultContinuation) {
    this.e8e_1 = $onPress;
    this.f8e_1 = $pressScope;
    this.g8e_1 = $secondDown;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapGestures$slambda$slambda$slambda$slambda_3.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  detectTapGestures$slambda$slambda$slambda$slambda_3.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapGestures$slambda$slambda$slambda$slambda_3.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.e8e_1(this.f8e_1, new Offset_0(this.g8e_1.b53_1), this);
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
  detectTapGestures$slambda$slambda$slambda$slambda_3.prototype.f1w = function ($this$launch, completion) {
    var i = new detectTapGestures$slambda$slambda$slambda$slambda_3(this.e8e_1, this.f8e_1, this.g8e_1, completion);
    i.h8e_1 = $this$launch;
    return i;
  };
  detectTapGestures$slambda$slambda$slambda$slambda_3.$metadata$ = classMeta('detectTapGestures$slambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapGestures$slambda$slambda$slambda$slambda_4($onPress, $pressScope, $secondDown, resultContinuation) {
    var i = new detectTapGestures$slambda$slambda$slambda$slambda_3($onPress, $pressScope, $secondDown, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapGestures$slambda$slambda$slambda$slambda_5($pressScope, $onDoubleTap, $onTap, $upOrCancel, resultContinuation) {
    this.q8e_1 = $pressScope;
    this.r8e_1 = $onDoubleTap;
    this.s8e_1 = $onTap;
    this.t8e_1 = $upOrCancel;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapGestures$slambda$slambda$slambda$slambda_5.prototype.v8e = function ($this$withTimeout, $cont) {
    var tmp = this.d57($this$withTimeout, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  detectTapGestures$slambda$slambda$slambda$slambda_5.prototype.jg = function (p1, $cont) {
    return this.v8e((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapGestures$slambda$slambda$slambda$slambda_5.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = waitForUpOrCancellation(this.u8e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var secondUp = suspendResult;
            var tmp_0;
            if (!(secondUp == null)) {
              secondUp.p55();
              this.q8e_1.wn();
              this.r8e_1(new Offset_0(secondUp.b53_1));
              tmp_0 = Unit_getInstance();
            } else {
              this.q8e_1.d76();
              var tmp0_safe_receiver = this.s8e_1;
              tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver(new Offset_0(this.t8e_1._v.b53_1));
            }

            return tmp_0;
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
  detectTapGestures$slambda$slambda$slambda$slambda_5.prototype.d57 = function ($this$withTimeout, completion) {
    var i = new detectTapGestures$slambda$slambda$slambda$slambda_5(this.q8e_1, this.r8e_1, this.s8e_1, this.t8e_1, completion);
    i.u8e_1 = $this$withTimeout;
    return i;
  };
  detectTapGestures$slambda$slambda$slambda$slambda_5.$metadata$ = classMeta('detectTapGestures$slambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapGestures$slambda$slambda$slambda$slambda_6($pressScope, $onDoubleTap, $onTap, $upOrCancel, resultContinuation) {
    var i = new detectTapGestures$slambda$slambda$slambda$slambda_5($pressScope, $onDoubleTap, $onTap, $upOrCancel, resultContinuation);
    var l = function ($this$withTimeout, $cont) {
      return i.v8e($this$withTimeout, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapGestures$slambda$slambda$slambda($pressScope, $onPress, $this_coroutineScope, $onLongPress, $onDoubleTap, $onTap, resultContinuation) {
    this.e8f_1 = $pressScope;
    this.f8f_1 = $onPress;
    this.g8f_1 = $this_coroutineScope;
    this.h8f_1 = $onLongPress;
    this.i8f_1 = $onDoubleTap;
    this.j8f_1 = $onTap;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapGestures$slambda$slambda$slambda.prototype.c57 = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.d57($this$awaitPointerEventScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  detectTapGestures$slambda$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.c57((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapGestures$slambda$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 14;
            this.zf_1 = 1;
            suspendResult = awaitFirstDown$default(this.k8f_1, false, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l8f_1 = suspendResult;
            this.l8f_1.p55();
            this.e8f_1.b1q();
            if (!(this.f8f_1 === get_NoPressGesture())) {
              launch$default(this.g8f_1, null, null, detectTapGestures$slambda$slambda$slambda$slambda_0(this.f8f_1, this.e8f_1, this.l8f_1, null), 3, null);
            }

            var tmp_0 = this;
            var tmp0_safe_receiver = this.h8f_1;
            var tmp_1;
            if (tmp0_safe_receiver == null) {
              tmp_1 = null;
            } else {
              tmp_1 = this.k8f_1.b5b().s5v();
            }

            var tmp1_elvis_lhs = tmp_1;
            var tmp_2;
            if (tmp1_elvis_lhs == null) {
              Companion_getInstance_13();
              var tmp0_div = new Long(-1, 2147483647);
              tmp_2 = tmp0_div.m6(new Long(2, 0));
            } else {
              tmp_2 = tmp1_elvis_lhs;
            }

            tmp_0.m8f_1 = tmp_2;
            this.n8f_1 = {_v: null};
            this.ag_1 = 3;
            this.zf_1 = 2;
            suspendResult = this.k8f_1.y59(this.m8f_1, detectTapGestures$slambda$slambda$slambda$slambda_2(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o8f_1 = suspendResult;
            this.n8f_1._v = this.o8f_1;
            if (this.n8f_1._v == null) {
              this.e8f_1.d76();
            } else {
              this.n8f_1._v.p55();
              this.e8f_1.wn();
            }

            this.ag_1 = 14;
            this.zf_1 = 5;
            continue $sm;
          case 3:
            this.ag_1 = 14;
            var tmp_3 = this.cg_1;
            if (tmp_3 instanceof PointerEventTimeoutCancellationException) {
              this.p8f_1 = this.cg_1;
              var tmp2_safe_receiver = this.h8f_1;
              if (tmp2_safe_receiver == null)
                null;
              else
                tmp2_safe_receiver(new Offset_0(this.l8f_1.b53_1));
              this.zf_1 = 4;
              suspendResult = consumeUntilUp(this.k8f_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.cg_1;
            }

            break;
          case 4:
            this.e8f_1.wn();
            this.zf_1 = 5;
            continue $sm;
          case 5:
            this.ag_1 = 14;
            if (!(this.n8f_1._v == null)) {
              if (this.i8f_1 == null) {
                var tmp3_safe_receiver = this.j8f_1;
                if (tmp3_safe_receiver == null)
                  null;
                else
                  tmp3_safe_receiver(new Offset_0(this.n8f_1._v.b53_1));
                this.zf_1 = 12;
                continue $sm;
              } else {
                this.zf_1 = 6;
                suspendResult = awaitSecondDown(this.k8f_1, this.n8f_1._v, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.zf_1 = 13;
              continue $sm;
            }

            break;
          case 6:
            this.q8f_1 = suspendResult;
            if (this.q8f_1 == null) {
              var tmp4_safe_receiver = this.j8f_1;
              if (tmp4_safe_receiver == null)
                null;
              else
                tmp4_safe_receiver(new Offset_0(this.n8f_1._v.b53_1));
              this.zf_1 = 11;
              continue $sm;
            } else {
              this.e8f_1.b1q();
              if (!(this.f8f_1 === get_NoPressGesture())) {
                launch$default(this.g8f_1, null, null, detectTapGestures$slambda$slambda$slambda$slambda_4(this.f8f_1, this.e8f_1, this.q8f_1, null), 3, null);
              }
              this.ag_1 = 8;
              this.zf_1 = 7;
              suspendResult = this.k8f_1.y59(this.m8f_1, detectTapGestures$slambda$slambda$slambda$slambda_6(this.e8f_1, this.i8f_1, this.j8f_1, this.n8f_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 7:
            ;
            this.ag_1 = 14;
            this.zf_1 = 10;
            continue $sm;
          case 8:
            this.ag_1 = 14;
            var tmp_4 = this.cg_1;
            if (tmp_4 instanceof PointerEventTimeoutCancellationException) {
              this.r8f_1 = this.cg_1;
              var tmp5_safe_receiver = this.j8f_1;
              if (tmp5_safe_receiver == null)
                null;
              else
                tmp5_safe_receiver(new Offset_0(this.n8f_1._v.b53_1));
              var tmp6_safe_receiver = this.h8f_1;
              if (tmp6_safe_receiver == null)
                null;
              else
                tmp6_safe_receiver(new Offset_0(this.q8f_1.b53_1));
              this.zf_1 = 9;
              suspendResult = consumeUntilUp(this.k8f_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.cg_1;
            }

            break;
          case 9:
            this.e8f_1.wn();
            this.zf_1 = 10;
            continue $sm;
          case 10:
            this.ag_1 = 14;
            this.zf_1 = 11;
            continue $sm;
          case 11:
            this.zf_1 = 12;
            continue $sm;
          case 12:
            this.zf_1 = 13;
            continue $sm;
          case 13:
            return Unit_getInstance();
          case 14:
            throw this.cg_1;
        }
      } catch ($p) {
        if (this.ag_1 === 14) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  detectTapGestures$slambda$slambda$slambda.prototype.d57 = function ($this$awaitPointerEventScope, completion) {
    var i = new detectTapGestures$slambda$slambda$slambda(this.e8f_1, this.f8f_1, this.g8f_1, this.h8f_1, this.i8f_1, this.j8f_1, completion);
    i.k8f_1 = $this$awaitPointerEventScope;
    return i;
  };
  detectTapGestures$slambda$slambda$slambda.$metadata$ = classMeta('detectTapGestures$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapGestures$slambda$slambda$slambda_0($pressScope, $onPress, $this_coroutineScope, $onLongPress, $onDoubleTap, $onTap, resultContinuation) {
    var i = new detectTapGestures$slambda$slambda$slambda($pressScope, $onPress, $this_coroutineScope, $onLongPress, $onDoubleTap, $onTap, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.c57($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapGestures$slambda$slambda($pressScope, $onPress, $this_coroutineScope, $onLongPress, $onDoubleTap, $onTap, resultContinuation) {
    this.a8g_1 = $pressScope;
    this.b8g_1 = $onPress;
    this.c8g_1 = $this_coroutineScope;
    this.d8g_1 = $onLongPress;
    this.e8g_1 = $onDoubleTap;
    this.f8g_1 = $onTap;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapGestures$slambda$slambda.prototype.s57 = function ($this$forEachGesture, $cont) {
    var tmp = this.t57($this$forEachGesture, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  detectTapGestures$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.s57((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapGestures$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.g8g_1.u57(detectTapGestures$slambda$slambda$slambda_0(this.a8g_1, this.b8g_1, this.c8g_1, this.d8g_1, this.e8g_1, this.f8g_1, null), this);
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
  detectTapGestures$slambda$slambda.prototype.t57 = function ($this$forEachGesture, completion) {
    var i = new detectTapGestures$slambda$slambda(this.a8g_1, this.b8g_1, this.c8g_1, this.d8g_1, this.e8g_1, this.f8g_1, completion);
    i.g8g_1 = $this$forEachGesture;
    return i;
  };
  detectTapGestures$slambda$slambda.$metadata$ = classMeta('detectTapGestures$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapGestures$slambda$slambda_0($pressScope, $onPress, $this_coroutineScope, $onLongPress, $onDoubleTap, $onTap, resultContinuation) {
    var i = new detectTapGestures$slambda$slambda($pressScope, $onPress, $this_coroutineScope, $onLongPress, $onDoubleTap, $onTap, resultContinuation);
    var l = function ($this$forEachGesture, $cont) {
      return i.s57($this$forEachGesture, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapGestures$slambda($this_detectTapGestures, $onPress, $onLongPress, $onDoubleTap, $onTap, resultContinuation) {
    this.p8g_1 = $this_detectTapGestures;
    this.q8g_1 = $onPress;
    this.r8g_1 = $onLongPress;
    this.s8g_1 = $onDoubleTap;
    this.t8g_1 = $onTap;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapGestures$slambda.prototype.e1w = function ($this$coroutineScope, $cont) {
    var tmp = this.f1w($this$coroutineScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  detectTapGestures$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapGestures$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.v8g_1 = new PressGestureScopeImpl(this.p8g_1);
            this.zf_1 = 1;
            suspendResult = forEachGesture(this.p8g_1, detectTapGestures$slambda$slambda_0(this.v8g_1, this.q8g_1, this.u8g_1, this.r8g_1, this.s8g_1, this.t8g_1, null), this);
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
  detectTapGestures$slambda.prototype.f1w = function ($this$coroutineScope, completion) {
    var i = new detectTapGestures$slambda(this.p8g_1, this.q8g_1, this.r8g_1, this.s8g_1, this.t8g_1, completion);
    i.u8g_1 = $this$coroutineScope;
    return i;
  };
  detectTapGestures$slambda.$metadata$ = classMeta('detectTapGestures$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapGestures$slambda_0($this_detectTapGestures, $onPress, $onLongPress, $onDoubleTap, $onTap, resultContinuation) {
    var i = new detectTapGestures$slambda($this_detectTapGestures, $onPress, $onLongPress, $onDoubleTap, $onTap, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.e1w($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function awaitSecondDown$slambda($firstUp, resultContinuation) {
    this.e8h_1 = $firstUp;
    CoroutineImpl.call(this, resultContinuation);
  }
  awaitSecondDown$slambda.prototype.i8h = function ($this$withTimeoutOrNull, $cont) {
    var tmp = this.d57($this$withTimeoutOrNull, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  awaitSecondDown$slambda.prototype.jg = function (p1, $cont) {
    return this.i8h((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  awaitSecondDown$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            this.g8h_1 = this.e8h_1.a53_1.o6(this.f8h_1.b5b().u5v());
            this.zf_1 = 1;
            continue $sm;
          case 1:
            this.zf_1 = 2;
            suspendResult = awaitFirstDown$default(this.f8h_1, false, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h8h_1 = suspendResult;
            if (this.h8h_1.a53_1.h1(this.g8h_1) < 0) {
              this.zf_1 = 1;
              continue $sm;
            }

            this.zf_1 = 3;
            continue $sm;
          case 3:
            return this.h8h_1;
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
  awaitSecondDown$slambda.prototype.d57 = function ($this$withTimeoutOrNull, completion) {
    var i = new awaitSecondDown$slambda(this.e8h_1, completion);
    i.f8h_1 = $this$withTimeoutOrNull;
    return i;
  };
  awaitSecondDown$slambda.$metadata$ = classMeta('awaitSecondDown$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function awaitSecondDown$slambda_0($firstUp, resultContinuation) {
    var i = new awaitSecondDown$slambda($firstUp, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $cont) {
      return i.i8h($this$withTimeoutOrNull, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapAndPress$slambda$slambda$slambda$slambda($onPress, $pressScope, $down, resultContinuation) {
    this.r8h_1 = $onPress;
    this.s8h_1 = $pressScope;
    this.t8h_1 = $down;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapAndPress$slambda$slambda$slambda$slambda.prototype.e1w = function ($this$launch, $cont) {
    var tmp = this.f1w($this$launch, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  detectTapAndPress$slambda$slambda$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapAndPress$slambda$slambda$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.r8h_1(this.s8h_1, new Offset_0(this.t8h_1.b53_1), this);
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
  detectTapAndPress$slambda$slambda$slambda$slambda.prototype.f1w = function ($this$launch, completion) {
    var i = new detectTapAndPress$slambda$slambda$slambda$slambda(this.r8h_1, this.s8h_1, this.t8h_1, completion);
    i.u8h_1 = $this$launch;
    return i;
  };
  detectTapAndPress$slambda$slambda$slambda$slambda.$metadata$ = classMeta('detectTapAndPress$slambda$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapAndPress$slambda$slambda$slambda$slambda_0($onPress, $pressScope, $down, resultContinuation) {
    var i = new detectTapAndPress$slambda$slambda$slambda$slambda($onPress, $pressScope, $down, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.e1w($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapAndPress$slambda$slambda$slambda($onPress, $this_coroutineScope, $pressScope, $onTap, resultContinuation) {
    this.d8i_1 = $onPress;
    this.e8i_1 = $this_coroutineScope;
    this.f8i_1 = $pressScope;
    this.g8i_1 = $onTap;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapAndPress$slambda$slambda$slambda.prototype.c57 = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.d57($this$awaitPointerEventScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  detectTapAndPress$slambda$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.c57((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapAndPress$slambda$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 3;
            this.zf_1 = 1;
            suspendResult = awaitFirstDown$default(this.h8i_1, false, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i8i_1 = suspendResult;
            this.i8i_1.p55();
            ;
            this.j8i_1 = this.i8i_1;
            if (!(this.d8i_1 === get_NoPressGesture())) {
              launch$default(this.e8i_1, null, null, detectTapAndPress$slambda$slambda$slambda$slambda_0(this.d8i_1, this.f8i_1, this.j8i_1, null), 3, null);
            }

            this.zf_1 = 2;
            suspendResult = waitForUpOrCancellation(this.h8i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var up = suspendResult;
            if (up == null) {
              this.f8i_1.d76();
            } else {
              up.p55();
              this.f8i_1.wn();
              var tmp0_safe_receiver = this.g8i_1;
              if (tmp0_safe_receiver == null)
                null;
              else
                tmp0_safe_receiver(new Offset_0(up.b53_1));
            }

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
  detectTapAndPress$slambda$slambda$slambda.prototype.d57 = function ($this$awaitPointerEventScope, completion) {
    var i = new detectTapAndPress$slambda$slambda$slambda(this.d8i_1, this.e8i_1, this.f8i_1, this.g8i_1, completion);
    i.h8i_1 = $this$awaitPointerEventScope;
    return i;
  };
  detectTapAndPress$slambda$slambda$slambda.$metadata$ = classMeta('detectTapAndPress$slambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapAndPress$slambda$slambda$slambda_0($onPress, $this_coroutineScope, $pressScope, $onTap, resultContinuation) {
    var i = new detectTapAndPress$slambda$slambda$slambda($onPress, $this_coroutineScope, $pressScope, $onTap, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.c57($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapAndPress$slambda$slambda($pressScope, $this_forEachGesture, $onPress, $onTap, resultContinuation) {
    this.s8i_1 = $pressScope;
    this.t8i_1 = $this_forEachGesture;
    this.u8i_1 = $onPress;
    this.v8i_1 = $onTap;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapAndPress$slambda$slambda.prototype.e1w = function ($this$coroutineScope, $cont) {
    var tmp = this.f1w($this$coroutineScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  detectTapAndPress$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapAndPress$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.s8i_1.b1q();
            this.zf_1 = 1;
            suspendResult = this.t8i_1.u57(detectTapAndPress$slambda$slambda$slambda_0(this.u8i_1, this.w8i_1, this.s8i_1, this.v8i_1, null), this);
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
  detectTapAndPress$slambda$slambda.prototype.f1w = function ($this$coroutineScope, completion) {
    var i = new detectTapAndPress$slambda$slambda(this.s8i_1, this.t8i_1, this.u8i_1, this.v8i_1, completion);
    i.w8i_1 = $this$coroutineScope;
    return i;
  };
  detectTapAndPress$slambda$slambda.$metadata$ = classMeta('detectTapAndPress$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapAndPress$slambda$slambda_0($pressScope, $this_forEachGesture, $onPress, $onTap, resultContinuation) {
    var i = new detectTapAndPress$slambda$slambda($pressScope, $this_forEachGesture, $onPress, $onTap, resultContinuation);
    var l = function ($this$coroutineScope, $cont) {
      return i.e1w($this$coroutineScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapAndPress$slambda($pressScope, $onPress, $onTap, resultContinuation) {
    this.f8j_1 = $pressScope;
    this.g8j_1 = $onPress;
    this.h8j_1 = $onTap;
    CoroutineImpl.call(this, resultContinuation);
  }
  detectTapAndPress$slambda.prototype.s57 = function ($this$forEachGesture, $cont) {
    var tmp = this.t57($this$forEachGesture, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  detectTapAndPress$slambda.prototype.jg = function (p1, $cont) {
    return this.s57((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  detectTapAndPress$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = coroutineScope(detectTapAndPress$slambda$slambda_0(this.f8j_1, this.i8j_1, this.g8j_1, this.h8j_1, null), this);
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
  detectTapAndPress$slambda.prototype.t57 = function ($this$forEachGesture, completion) {
    var i = new detectTapAndPress$slambda(this.f8j_1, this.g8j_1, this.h8j_1, completion);
    i.i8j_1 = $this$forEachGesture;
    return i;
  };
  detectTapAndPress$slambda.$metadata$ = classMeta('detectTapAndPress$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function detectTapAndPress$slambda_0($pressScope, $onPress, $onTap, resultContinuation) {
    var i = new detectTapAndPress$slambda($pressScope, $onPress, $onTap, resultContinuation);
    var l = function ($this$forEachGesture, $cont) {
      return i.s57($this$forEachGesture, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $awaitFirstDownOnPassCOROUTINE$18(_this__u8e3s4, pass, requireUnconsumed, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v8a_1 = _this__u8e3s4;
    this.w8a_1 = pass;
    this.x8a_1 = requireUnconsumed;
  }
  $awaitFirstDownOnPassCOROUTINE$18.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            this.zf_1 = 1;
            continue $sm;
          case 1:
            this.zf_1 = 2;
            suspendResult = this.v8a_1.e57(this.w8a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y8a_1 = suspendResult;
            if (!isPrimaryChangedDown(this.y8a_1, this.x8a_1)) {
              this.zf_1 = 1;
              continue $sm;
            }

            this.zf_1 = 3;
            continue $sm;
          case 3:
            return this.y8a_1.q53_1.g(0);
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
  $awaitFirstDownOnPassCOROUTINE$18.$metadata$ = classMeta('$awaitFirstDownOnPassCOROUTINE$18', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $waitForUpOrCancellationCOROUTINE$21(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d8c_1 = _this__u8e3s4;
  }
  $waitForUpOrCancellationCOROUTINE$21.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            this.zf_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.zf_1 = 5;
              continue $sm;
            }

            this.zf_1 = 2;
            suspendResult = this.d8c_1.e57(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.e8c_1 = suspendResult;
            l$ret$1: do {
              var tmp0_fastAll = this.e8c_1.q53_1;
              var inductionVariable = 0;
              var last = tmp0_fastAll.f() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastAll.g(index);
                  if (!changedToUp(item)) {
                    this.f8c_1 = false;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              this.f8c_1 = true;
            }
             while (false);
            if (this.f8c_1) {
              return this.e8c_1.q53_1.g(0);
            }

            l$ret$3: do {
              var tmp1_fastAny = this.e8c_1.q53_1;
              var inductionVariable_0 = 0;
              var last_0 = tmp1_fastAny.f() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = tmp1_fastAny.g(index_0);
                  if (item_0.l55() ? true : isOutOfBounds(item_0, this.d8c_1.a54(), this.d8c_1.c5b())) {
                    this.g8c_1 = true;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable_0 <= last_0);
              this.g8c_1 = false;
            }
             while (false);
            if (this.g8c_1) {
              return null;
            }

            this.zf_1 = 3;
            suspendResult = this.d8c_1.e57(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var consumeCheck = suspendResult;
            var tmp$ret$4;
            l$ret$5: do {
              var tmp2_fastAny = consumeCheck.q53_1;
              var inductionVariable_1 = 0;
              var last_1 = tmp2_fastAny.f() - 1 | 0;
              if (inductionVariable_1 <= last_1)
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp2_fastAny.g(index_1);
                  if (item_1.l55()) {
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

            this.zf_1 = 1;
            continue $sm;
          case 4:
            throw this.cg_1;
          case 5:
            return Unit_getInstance();
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
  $waitForUpOrCancellationCOROUTINE$21.$metadata$ = classMeta('$waitForUpOrCancellationCOROUTINE$21', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $consumeUntilUpCOROUTINE$22(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p8c_1 = _this__u8e3s4;
  }
  $consumeUntilUpCOROUTINE$22.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            this.zf_1 = 1;
            continue $sm;
          case 1:
            this.zf_1 = 2;
            suspendResult = this.p8c_1.f5b(null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var event = suspendResult;
            var tmp0_fastForEach = event.q53_1;
            var inductionVariable = 0;
            var last = tmp0_fastForEach.f() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = tmp0_fastForEach.g(index);
                item.p55();
              }
               while (inductionVariable <= last);
            var tmp$ret$0;
            l$ret$1: do {
              var tmp1_fastAny = event.q53_1;
              var inductionVariable_0 = 0;
              var last_0 = tmp1_fastAny.f() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = tmp1_fastAny.g(index_0);
                  if (item_0.c53_1) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable_0 <= last_0);
              tmp$ret$0 = false;
            }
             while (false);
            if (tmp$ret$0) {
              this.zf_1 = 1;
              continue $sm;
            }

            this.zf_1 = 3;
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
  $consumeUntilUpCOROUTINE$22.$metadata$ = classMeta('$consumeUntilUpCOROUTINE$22', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  var properties_initialized_TapGestureDetector_kt_lhe8oi;
  function init_properties_TapGestureDetector_kt_9k8ojy() {
    if (properties_initialized_TapGestureDetector_kt_lhe8oi) {
    } else {
      properties_initialized_TapGestureDetector_kt_lhe8oi = true;
      NoPressGesture = NoPressGesture$slambda_0(null);
    }
  }
  function Start() {
    this.j8j_1 = 0;
  }
  Start.$metadata$ = classMeta('Start', [DragInteraction]);
  function Stop(start) {
    this.k8j_1 = start;
    this.l8j_1 = 0;
  }
  Stop.prototype.o1 = function () {
    return this.k8j_1;
  };
  Stop.$metadata$ = classMeta('Stop', [DragInteraction]);
  function Cancel(start) {
    this.m8j_1 = start;
    this.n8j_1 = 0;
  }
  Cancel.prototype.o1 = function () {
    return this.m8j_1;
  };
  Cancel.$metadata$ = classMeta('Cancel', [DragInteraction]);
  function DragInteraction() {
  }
  DragInteraction.$metadata$ = interfaceMeta('DragInteraction', [Interaction]);
  function collectIsFocusedAsState$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-1452413326);
    sourceInformation($composer_0, 'C(collectIsFocusedAsState$composable)65@2219L34,66@2279L414,66@2258L435:FocusInteraction.kt#ywyzhk');
    if (isTraceInProgress()) {
      traceEventStart(-1452413326, $changed, -1, 'androidx.compose.foundation.interaction.collectIsFocusedAsState$composable (FocusInteraction.kt:64)');
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
    if (false ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.interaction.collectIsFocusedAsState$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf$default(false, null, 2, null);
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
    var isFocused = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp1_remember$composable = $composer_0;
    var tmp2_remember$composable = 14 & $changed;
    var $composer_2 = tmp1_remember$composable;
    $composer_2.y1a(-1124426577);
    sourceInformation($composer_2, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_2;
    var tmp2_cache = !!($composer_2.z1a(_this__u8e3s4) | $composer_2.z1a(isFocused));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = tmp1_cache_0.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_6().c1b_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.foundation.interaction.collectIsFocusedAsState$composable.<anonymous>' call
      tmp$ret$5 = collectIsFocusedAsState$composable$slambda_0(_this__u8e3s4, isFocused, null);
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
    LaunchedEffect$composable(_this__u8e3s4, tmp$ret$9, $composer_0, 14 & $changed);
    var tmp0_1 = isFocused;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_1;
  }
  function Focus() {
    this.o8j_1 = 0;
  }
  Focus.$metadata$ = classMeta('Focus', [FocusInteraction]);
  function Unfocus(focus) {
    this.p8j_1 = focus;
    this.q8j_1 = 0;
  }
  Unfocus.prototype.r8j = function () {
    return this.p8j_1;
  };
  Unfocus.$metadata$ = classMeta('Unfocus', [FocusInteraction]);
  function FocusInteraction() {
  }
  FocusInteraction.$metadata$ = interfaceMeta('FocusInteraction', [Interaction]);
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.s8j_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.prototype.hz = function (value, $cont) {
    return this.s8j_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function collectIsFocusedAsState$composable$slambda$slambda($focusInteractions, $isFocused, resultContinuation) {
    this.b8k_1 = $focusInteractions;
    this.c8k_1 = $isFocused;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsFocusedAsState$composable$slambda$slambda.prototype.c7t = function (interaction, $cont) {
    var tmp = this.d7t(interaction, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  collectIsFocusedAsState$composable$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.c7t((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsFocusedAsState$composable$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          var tmp0_subject = this.d8k_1;
          if (tmp0_subject instanceof Focus) {
            this.b8k_1.a(this.d8k_1);
          } else {
            if (tmp0_subject instanceof Unfocus) {
              this.b8k_1.b4(this.d8k_1.p8j_1);
            }
          }
          this.c8k_1.p11(!this.b8k_1.h());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  collectIsFocusedAsState$composable$slambda$slambda.prototype.d7t = function (interaction, completion) {
    var i = new collectIsFocusedAsState$composable$slambda$slambda(this.b8k_1, this.c8k_1, completion);
    i.d8k_1 = interaction;
    return i;
  };
  collectIsFocusedAsState$composable$slambda$slambda.$metadata$ = classMeta('collectIsFocusedAsState$composable$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function collectIsFocusedAsState$composable$slambda$slambda_0($focusInteractions, $isFocused, resultContinuation) {
    var i = new collectIsFocusedAsState$composable$slambda$slambda($focusInteractions, $isFocused, resultContinuation);
    var l = function (interaction, $cont) {
      return i.c7t(interaction, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsFocusedAsState$composable$slambda($this_collectIsFocusedAsState$composable, $isFocused, resultContinuation) {
    this.m8k_1 = $this_collectIsFocusedAsState$composable;
    this.n8k_1 = $isFocused;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsFocusedAsState$composable$slambda.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  collectIsFocusedAsState$composable$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsFocusedAsState$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            var tmp_0 = this;
            tmp_0.p8k_1 = ArrayList_init_$Create$_0();
            this.zf_1 = 1;
            var tmp_1 = this.m8k_1.n7s();
            var tmp_2 = collectIsFocusedAsState$composable$slambda$slambda_0(this.p8k_1, this.n8k_1, null);
            suspendResult = tmp_1.gz(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_2), this);
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
  collectIsFocusedAsState$composable$slambda.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new collectIsFocusedAsState$composable$slambda(this.m8k_1, this.n8k_1, completion);
    i.o8k_1 = $this$LaunchedEffect;
    return i;
  };
  collectIsFocusedAsState$composable$slambda.$metadata$ = classMeta('collectIsFocusedAsState$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function collectIsFocusedAsState$composable$slambda_0($this_collectIsFocusedAsState$composable, $isFocused, resultContinuation) {
    var i = new collectIsFocusedAsState$composable$slambda($this_collectIsFocusedAsState$composable, $isFocused, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsHoveredAsState$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-1621024626);
    sourceInformation($composer_0, 'C(collectIsHoveredAsState$composable)65@2151L34,66@2211L411,66@2190L432:HoverInteraction.kt#ywyzhk');
    if (isTraceInProgress()) {
      traceEventStart(-1621024626, $changed, -1, 'androidx.compose.foundation.interaction.collectIsHoveredAsState$composable (HoverInteraction.kt:64)');
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
    if (false ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.interaction.collectIsHoveredAsState$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf$default(false, null, 2, null);
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
    var isHovered = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp1_remember$composable = $composer_0;
    var tmp2_remember$composable = 14 & $changed;
    var $composer_2 = tmp1_remember$composable;
    $composer_2.y1a(-1124426577);
    sourceInformation($composer_2, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_2;
    var tmp2_cache = !!($composer_2.z1a(_this__u8e3s4) | $composer_2.z1a(isHovered));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = tmp1_cache_0.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_6().c1b_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.foundation.interaction.collectIsHoveredAsState$composable.<anonymous>' call
      tmp$ret$5 = collectIsHoveredAsState$composable$slambda_0(_this__u8e3s4, isHovered, null);
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
    LaunchedEffect$composable(_this__u8e3s4, tmp$ret$9, $composer_0, 14 & $changed);
    var tmp0_1 = isHovered;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_1;
  }
  function Enter() {
    this.q8k_1 = 0;
  }
  Enter.$metadata$ = classMeta('Enter', [HoverInteraction]);
  function Exit(enter) {
    this.r8k_1 = enter;
    this.s8k_1 = 0;
  }
  Exit.prototype.c4o = function () {
    return this.r8k_1;
  };
  Exit.$metadata$ = classMeta('Exit', [HoverInteraction]);
  function HoverInteraction() {
  }
  HoverInteraction.$metadata$ = interfaceMeta('HoverInteraction', [Interaction]);
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.t8k_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_1.prototype.hz = function (value, $cont) {
    return this.t8k_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_1.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function collectIsHoveredAsState$composable$slambda$slambda($hoverInteractions, $isHovered, resultContinuation) {
    this.c8l_1 = $hoverInteractions;
    this.d8l_1 = $isHovered;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsHoveredAsState$composable$slambda$slambda.prototype.c7t = function (interaction, $cont) {
    var tmp = this.d7t(interaction, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  collectIsHoveredAsState$composable$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.c7t((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsHoveredAsState$composable$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          var tmp0_subject = this.e8l_1;
          if (tmp0_subject instanceof Enter) {
            this.c8l_1.a(this.e8l_1);
          } else {
            if (tmp0_subject instanceof Exit) {
              this.c8l_1.b4(this.e8l_1.r8k_1);
            }
          }
          this.d8l_1.p11(!this.c8l_1.h());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  collectIsHoveredAsState$composable$slambda$slambda.prototype.d7t = function (interaction, completion) {
    var i = new collectIsHoveredAsState$composable$slambda$slambda(this.c8l_1, this.d8l_1, completion);
    i.e8l_1 = interaction;
    return i;
  };
  collectIsHoveredAsState$composable$slambda$slambda.$metadata$ = classMeta('collectIsHoveredAsState$composable$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function collectIsHoveredAsState$composable$slambda$slambda_0($hoverInteractions, $isHovered, resultContinuation) {
    var i = new collectIsHoveredAsState$composable$slambda$slambda($hoverInteractions, $isHovered, resultContinuation);
    var l = function (interaction, $cont) {
      return i.c7t(interaction, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsHoveredAsState$composable$slambda($this_collectIsHoveredAsState$composable, $isHovered, resultContinuation) {
    this.n8l_1 = $this_collectIsHoveredAsState$composable;
    this.o8l_1 = $isHovered;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsHoveredAsState$composable$slambda.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  collectIsHoveredAsState$composable$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsHoveredAsState$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            var tmp_0 = this;
            tmp_0.q8l_1 = ArrayList_init_$Create$_0();
            this.zf_1 = 1;
            var tmp_1 = this.n8l_1.n7s();
            var tmp_2 = collectIsHoveredAsState$composable$slambda$slambda_0(this.q8l_1, this.o8l_1, null);
            suspendResult = tmp_1.gz(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_2), this);
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
  collectIsHoveredAsState$composable$slambda.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new collectIsHoveredAsState$composable$slambda(this.n8l_1, this.o8l_1, completion);
    i.p8l_1 = $this$LaunchedEffect;
    return i;
  };
  collectIsHoveredAsState$composable$slambda.$metadata$ = classMeta('collectIsHoveredAsState$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function collectIsHoveredAsState$composable$slambda_0($this_collectIsHoveredAsState$composable, $isHovered, resultContinuation) {
    var i = new collectIsHoveredAsState$composable$slambda($this_collectIsHoveredAsState$composable, $isHovered, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
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
    tmp.r8l_1 = MutableSharedFlow$default(0, 16, BufferOverflow_DROP_OLDEST_getInstance(), 1, null);
  }
  MutableInteractionSourceImpl.prototype.n7s = function () {
    return this.r8l_1;
  };
  MutableInteractionSourceImpl.prototype.a7k = function (interaction, $cont) {
    return this.r8l_1.hz(interaction, $cont);
  };
  MutableInteractionSourceImpl.prototype.l7j = function (interaction) {
    return this.r8l_1.iz(interaction);
  };
  MutableInteractionSourceImpl.$metadata$ = classMeta('MutableInteractionSourceImpl', [MutableInteractionSource]);
  function collectIsPressedAsState$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(-1873825817);
    sourceInformation($composer_0, 'C(collectIsPressedAsState$composable)84@3016L34,85@3076L504,85@3055L525:PressInteraction.kt#ywyzhk');
    if (isTraceInProgress()) {
      traceEventStart(-1873825817, $changed, -1, 'androidx.compose.foundation.interaction.collectIsPressedAsState$composable (PressInteraction.kt:83)');
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
    if (false ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.interaction.collectIsPressedAsState$composable.<anonymous>' call
      tmp$ret$0 = mutableStateOf$default(false, null, 2, null);
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
    var isPressed = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp1_remember$composable = $composer_0;
    var tmp2_remember$composable = 14 & $changed;
    var $composer_2 = tmp1_remember$composable;
    $composer_2.y1a(-1124426577);
    sourceInformation($composer_2, 'C(remember$composable)P(1,2):Composables.kt#9igjgp');
    var tmp$ret$8;
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache_0 = $composer_2;
    var tmp2_cache = !!($composer_2.z1a(_this__u8e3s4) | $composer_2.z1a(isPressed));
    var tmp$ret$7;
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = tmp1_cache_0.a1b();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$6;
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp2_cache ? true : tmp0_let_0 === Companion_getInstance_6().c1b_1) {
      var tmp$ret$5;
      // Inline function 'androidx.compose.foundation.interaction.collectIsPressedAsState$composable.<anonymous>' call
      tmp$ret$5 = collectIsPressedAsState$composable$slambda_0(_this__u8e3s4, isPressed, null);
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
    LaunchedEffect$composable(_this__u8e3s4, tmp$ret$9, $composer_0, 14 & $changed);
    var tmp0_1 = isPressed;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_1;
  }
  function Press(pressPosition) {
    this.s8l_1 = pressPosition;
    this.t8l_1 = 0;
  }
  Press.$metadata$ = classMeta('Press', [PressInteraction]);
  function Release(press) {
    this.u8l_1 = press;
    this.v8l_1 = 0;
  }
  Release.prototype.w8l = function () {
    return this.u8l_1;
  };
  Release.$metadata$ = classMeta('Release', [PressInteraction]);
  function Cancel_0(press) {
    this.x8l_1 = press;
    this.y8l_1 = 0;
  }
  Cancel_0.prototype.w8l = function () {
    return this.x8l_1;
  };
  Cancel_0.$metadata$ = classMeta('Cancel', [PressInteraction]);
  function PressInteraction() {
  }
  PressInteraction.$metadata$ = interfaceMeta('PressInteraction', [Interaction]);
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.z8l_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0_2.prototype.hz = function (value, $cont) {
    return this.z8l_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0_2.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function collectIsPressedAsState$composable$slambda$slambda($pressInteractions, $isPressed, resultContinuation) {
    this.i8m_1 = $pressInteractions;
    this.j8m_1 = $isPressed;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsPressedAsState$composable$slambda$slambda.prototype.c7t = function (interaction, $cont) {
    var tmp = this.d7t(interaction, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  collectIsPressedAsState$composable$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.c7t((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsPressedAsState$composable$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          var tmp0_subject = this.k8m_1;
          if (tmp0_subject instanceof Press) {
            this.i8m_1.a(this.k8m_1);
          } else {
            if (tmp0_subject instanceof Release) {
              this.i8m_1.b4(this.k8m_1.u8l_1);
            } else {
              if (tmp0_subject instanceof Cancel_0) {
                this.i8m_1.b4(this.k8m_1.x8l_1);
              }
            }
          }
          this.j8m_1.p11(!this.i8m_1.h());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  collectIsPressedAsState$composable$slambda$slambda.prototype.d7t = function (interaction, completion) {
    var i = new collectIsPressedAsState$composable$slambda$slambda(this.i8m_1, this.j8m_1, completion);
    i.k8m_1 = interaction;
    return i;
  };
  collectIsPressedAsState$composable$slambda$slambda.$metadata$ = classMeta('collectIsPressedAsState$composable$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function collectIsPressedAsState$composable$slambda$slambda_0($pressInteractions, $isPressed, resultContinuation) {
    var i = new collectIsPressedAsState$composable$slambda$slambda($pressInteractions, $isPressed, resultContinuation);
    var l = function (interaction, $cont) {
      return i.c7t(interaction, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsPressedAsState$composable$slambda($this_collectIsPressedAsState$composable, $isPressed, resultContinuation) {
    this.t8m_1 = $this_collectIsPressedAsState$composable;
    this.u8m_1 = $isPressed;
    CoroutineImpl.call(this, resultContinuation);
  }
  collectIsPressedAsState$composable$slambda.prototype.e1w = function ($this$LaunchedEffect, $cont) {
    var tmp = this.f1w($this$LaunchedEffect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  collectIsPressedAsState$composable$slambda.prototype.jg = function (p1, $cont) {
    return this.e1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  collectIsPressedAsState$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            var tmp_0 = this;
            tmp_0.w8m_1 = ArrayList_init_$Create$_0();
            this.zf_1 = 1;
            var tmp_1 = this.t8m_1.n7s();
            var tmp_2 = collectIsPressedAsState$composable$slambda$slambda_0(this.w8m_1, this.u8m_1, null);
            suspendResult = tmp_1.gz(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp_2), this);
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
  collectIsPressedAsState$composable$slambda.prototype.f1w = function ($this$LaunchedEffect, completion) {
    var i = new collectIsPressedAsState$composable$slambda(this.t8m_1, this.u8m_1, completion);
    i.v8m_1 = $this$LaunchedEffect;
    return i;
  };
  collectIsPressedAsState$composable$slambda.$metadata$ = classMeta('collectIsPressedAsState$composable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function collectIsPressedAsState$composable$slambda_0($this_collectIsPressedAsState$composable, $isPressed, resultContinuation) {
    var i = new collectIsPressedAsState$composable$slambda($this_collectIsPressedAsState$composable, $isPressed, resultContinuation);
    var l = function ($this$LaunchedEffect, $cont) {
      return i.e1w($this$LaunchedEffect, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function get_ModifierLocalPinnableParent() {
    init_properties_PinnableParent_kt_xtzhb1();
    return ModifierLocalPinnableParent;
  }
  var ModifierLocalPinnableParent;
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
  function BringIntoViewChildModifier(defaultParent) {
    this.y8m_1 = defaultParent;
    this.z8m_1 = null;
    this.a8n_1 = null;
  }
  BringIntoViewChildModifier.prototype.b8n = function () {
    var tmp0_safe_receiver = this.a8n_1;
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
      tmp$ret$0 = tmp0_safe_receiver.w4f();
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
  BringIntoViewChildModifier.prototype.ik = function () {
    var tmp0_elvis_lhs = this.z8m_1;
    return tmp0_elvis_lhs == null ? this.y8m_1 : tmp0_elvis_lhs;
  };
  BringIntoViewChildModifier.prototype.b4k = function (scope) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    this.z8m_1 = scope.c4k(get_ModifierLocalBringIntoViewParent());
    tmp$ret$0 = Unit_getInstance();
  };
  BringIntoViewChildModifier.prototype.x4n = function (coordinates) {
    this.a8n_1 = coordinates;
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
    this.l8n_1 = _this__u8e3s4;
    this.m8n_1 = rect;
  }
  $bringIntoViewCOROUTINE$23.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 5;
            var tmp_0 = this;
            tmp_0.n8n_1 = this.l8n_1.s8n_1;
            this.o8n_1 = this.n8n_1.s1s_1;
            if (this.o8n_1 > 0) {
              this.p8n_1 = 0;
              var tmp_1 = this;
              var tmp_2 = this.n8n_1.q1s_1;
              tmp_1.q8n_1 = isArray(tmp_2) ? tmp_2 : THROW_CCE();
              this.zf_1 = 1;
              continue $sm;
            } else {
              this.zf_1 = 4;
              continue $sm;
            }

            break;
          case 1:
            var tmp_3 = this;
            tmp_3.r8n_1 = this.q8n_1[this.p8n_1];
            this.zf_1 = 2;
            suspendResult = this.r8n_1.c8n(this.m8n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0 = this.p8n_1;
            this.p8n_1 = tmp0 + 1 | 0;
            ;
            if (this.p8n_1 < this.o8n_1) {
              this.zf_1 = 1;
              continue $sm;
            }

            this.zf_1 = 3;
            continue $sm;
          case 3:
            this.zf_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
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
    tmp.s8n_1 = tmp$ret$2;
  }
  BringIntoViewRequesterImpl.prototype.w8n = function () {
    return this.s8n_1;
  };
  BringIntoViewRequesterImpl.prototype.c8n = function (rect, $cont) {
    var tmp = new $bringIntoViewCOROUTINE$23(this, rect, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  BringIntoViewRequesterImpl.$metadata$ = classMeta('BringIntoViewRequesterImpl', [BringIntoViewRequester]);
  function BringIntoViewRequesterModifier$bringIntoView$lambda($rect, this$0) {
    return function () {
      var tmp3_elvis_lhs = $rect;
      var tmp;
      if (tmp3_elvis_lhs == null) {
        var tmp0_safe_receiver = this$0.b8n();
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a54();
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
  BringIntoViewRequesterModifier.prototype.c8n = function (rect, $cont) {
    var tmp = this.ik();
    var tmp0_elvis_lhs = this.b8n();
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var tmp_1 = tmp_0;
    return tmp.x8m(tmp_1, BringIntoViewRequesterModifier$bringIntoView$lambda(rect, this), $cont);
  };
  BringIntoViewRequesterModifier.$metadata$ = classMeta('BringIntoViewRequesterModifier', undefined, undefined, undefined, undefined, BringIntoViewChildModifier.prototype);
  function bringIntoViewRequester$lambda($bringIntoViewRequester) {
    return function ($this$null) {
      $this$null.e4h_1 = 'bringIntoViewRequester';
      $this$null.g4h_1.k4h('bringIntoViewRequester', $bringIntoViewRequester);
      return Unit_getInstance();
    };
  }
  function _no_name_provided__qut3iv_5($bringIntoViewRequester, $modifier) {
    this.x8n_1 = $bringIntoViewRequester;
    this.y8n_1 = $modifier;
  }
  _no_name_provided__qut3iv_5.prototype.vk = function () {
    // Inline function 'androidx.compose.foundation.relocation.bringIntoViewRequester.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_this = this.x8n_1;
    // Inline function 'androidx.compose.runtime.collection.MutableVector.minusAssign' call
    var tmp0_minusAssign = tmp0_this.s8n_1;
    tmp0_minusAssign.v20(this.y8n_1);
  };
  _no_name_provided__qut3iv_5.$metadata$ = classMeta(undefined, [DisposableEffectResult]);
  function bringIntoViewRequester$lambda$lambda($bringIntoViewRequester, $modifier) {
    return function ($this$DisposableEffect) {
      var tmp0_this = $bringIntoViewRequester;
      var tmp0_plusAssign = tmp0_this.s8n_1;
      tmp0_plusAssign.t1p($modifier);
      var tmp$ret$0;
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      tmp$ret$0 = new _no_name_provided__qut3iv_5($bringIntoViewRequester, $modifier);
      return tmp$ret$0;
    };
  }
  function bringIntoViewRequester$lambda_0($bringIntoViewRequester) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y1a(-992853993);
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
      $composer_1.y1a(-838505973);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.z1a(defaultResponder);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.relocation.bringIntoViewRequester.<anonymous>.<anonymous>' call
        tmp$ret$0 = new BringIntoViewRequesterModifier(defaultResponder);
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
      $composer_0.d1b();
      return tmp0_0;
    };
  }
  function CornerBasedShape(topStart, topEnd, bottomEnd, bottomStart) {
    this.z8n_1 = topStart;
    this.a8o_1 = topEnd;
    this.b8o_1 = bottomEnd;
    this.c8o_1 = bottomStart;
    this.d8o_1 = 0;
  }
  CornerBasedShape.prototype.t3g = function (size, layoutDirection, density) {
    var topStart = this.z8n_1.e8o(size, density);
    var topEnd = this.a8o_1.e8o(size, density);
    var bottomEnd = this.b8o_1.e8o(size, density);
    var bottomStart = this.c8o_1.e8o(size, density);
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
    return this.f8o(size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection);
  };
  CornerBasedShape.$metadata$ = classMeta('CornerBasedShape', [Shape]);
  var ZeroCornerSize;
  function CornerSize() {
  }
  CornerSize.$metadata$ = interfaceMeta('CornerSize');
  function CornerSize_0(percent) {
    init_properties_CornerSize_kt_dusi58();
    return new PercentCornerSize(percent);
  }
  function PercentCornerSize(percent) {
    this.g8o_1 = percent;
    if (this.g8o_1 < 0 ? true : this.g8o_1 > 100) {
      throw IllegalArgumentException_init_$Create$('The percent should be in the range of [0, 100]');
    }
  }
  PercentCornerSize.prototype.e8o = function (shapeSize, density) {
    return _Size___get_minDimension__impl__4iso0r(shapeSize) * (this.g8o_1 / 100.0);
  };
  PercentCornerSize.prototype.toString = function () {
    return 'CornerSize(size = ' + this.g8o_1 + '%)';
  };
  PercentCornerSize.prototype.hashCode = function () {
    return getNumberHashCode(this.g8o_1);
  };
  PercentCornerSize.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PercentCornerSize))
      return false;
    var tmp0_other_with_cast = other instanceof PercentCornerSize ? other : THROW_CCE();
    if (!equals(this.g8o_1, tmp0_other_with_cast.g8o_1))
      return false;
    return true;
  };
  PercentCornerSize.$metadata$ = classMeta('PercentCornerSize', [CornerSize, InspectableValue]);
  function CornerSize_1(size) {
    init_properties_CornerSize_kt_dusi58();
    return new DpCornerSize(size);
  }
  function DpCornerSize(size) {
    this.h8o_1 = size;
  }
  DpCornerSize.prototype.e8o = function (shapeSize, density) {
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'androidx.compose.foundation.shape.DpCornerSize.toPx.<anonymous>' call
    tmp$ret$0 = density.o2k(this.h8o_1);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  DpCornerSize.prototype.toString = function () {
    return 'CornerSize(size = ' + _Dp___get_value__impl__geb1vb(this.h8o_1) + '.dp)';
  };
  DpCornerSize.prototype.hashCode = function () {
    return Dp__hashCode_impl_sxkrra(this.h8o_1);
  };
  DpCornerSize.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DpCornerSize))
      return false;
    var tmp0_other_with_cast = other instanceof DpCornerSize ? other : THROW_CCE();
    if (!equals(this.h8o_1, tmp0_other_with_cast.h8o_1))
      return false;
    return true;
  };
  DpCornerSize.$metadata$ = classMeta('DpCornerSize', [CornerSize, InspectableValue]);
  function ZeroCornerSize$1() {
  }
  ZeroCornerSize$1.prototype.e8o = function (shapeSize, density) {
    return 0.0;
  };
  ZeroCornerSize$1.prototype.toString = function () {
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
    this.n8o_1 = 0;
  }
  RoundedCornerShape.prototype.f8o = function (size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection) {
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
  RoundedCornerShape.prototype.toString = function () {
    return 'RoundedCornerShape(topStart = ' + this.z8n_1 + ', topEnd = ' + this.a8o_1 + ', bottomEnd = ' + ('' + this.b8o_1 + ', bottomStart = ' + this.c8o_1 + ')');
  };
  RoundedCornerShape.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundedCornerShape))
      return false;
    if (!equals(this.z8n_1, other.z8n_1))
      return false;
    if (!equals(this.a8o_1, other.a8o_1))
      return false;
    if (!equals(this.b8o_1, other.b8o_1))
      return false;
    if (!equals(this.c8o_1, other.c8o_1))
      return false;
    return true;
  };
  RoundedCornerShape.prototype.hashCode = function () {
    var result = hashCode(this.z8n_1);
    result = imul(31, result) + hashCode(this.a8o_1) | 0;
    result = imul(31, result) + hashCode(this.b8o_1) | 0;
    result = imul(31, result) + hashCode(this.c8o_1) | 0;
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
    $composer_0 = $composer_0.z1n(-1319034766);
    sourceInformation($composer_0, 'C(BasicText$composable)P(6,1,5,2,3:c#ui.text.style.TextOverflow,4)62@3170L2,73@3673L7,74@3712L7,75@3773L7,95@4758L473,132@5929L69:BasicText.kt#423gt5');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.z1a(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.z1a(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.z1a(style_0._v) ? 256 : 128);
    if (($changed & 7168) === 0)
      $dirty = $dirty | ((($default & 8) === 0 ? $composer_0.z1a(onTextLayout_0._v) : false) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.q1n(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.f49_1)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.f1b(softWrap_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.q1n(maxLines_0._v) ? 1048576 : 524288);
    if (!(($dirty & 2995931) === 599186) ? true : !$composer_0.l1m()) {
      $composer_0.y1m();
      if (($changed & 1) === 0 ? true : $composer_0.c1n()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance_7();
        }
        if (!(($default & 4) === 0)) {
          style_0._v = Companion_getInstance_14().b40_1;
        }
        if (!(($default & 8) === 0)) {
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
          if (false ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
            var tmp$ret$0;
            // Inline function 'androidx.compose.foundation.text.BasicText$composable.<anonymous>' call
            tmp$ret$0 = BasicText$composable$lambda_0;
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
          onTextLayout_0._v = tmp$ret$4;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          overflow_0._v = new TextOverflow(Companion_getInstance_15().w3z_1);
        }
        if (!(($default & 32) === 0)) {
          softWrap_0._v = true;
        }
        if (!(($default & 64) === 0)) {
          maxLines_0._v = IntCompanionObject_getInstance().c1_1;
        }
      } else {
        $composer_0.l1h();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.z1m();
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
      var tmp0_0 = $composer_2.w1n(tmp2_$get_current$$composable_g4n2vl);
      sourceInformationMarkerEnd($composer_2);
      tmp$ret$6 = tmp0_0;
      var selectionRegistrar = tmp$ret$6;
      var tmp$ret$7;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz = get_LocalDensity();
      var tmp5_$get_current$$composable_el8hro = $composer_0;
      var $composer_3 = tmp5_$get_current$$composable_el8hro;
      sourceInformationMarkerStart($composer_3, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_1 = $composer_3.w1n(tmp4_$get_current$$composable_f3pcsz);
      sourceInformationMarkerEnd($composer_3);
      tmp$ret$7 = tmp0_1;
      var density = tmp$ret$7;
      var tmp$ret$8;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp6_$get_current$$composable_e2rmqd = get_LocalFontFamilyResolver();
      var tmp7_$get_current$$composable_dkarp2 = $composer_0;
      var $composer_4 = tmp7_$get_current$$composable_dkarp2;
      sourceInformationMarkerStart($composer_4, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_2 = $composer_4.w1n(tmp6_$get_current$$composable_e2rmqd);
      sourceInformationMarkerEnd($composer_4);
      tmp$ret$8 = tmp0_2;
      var fontFamilyResolver = tmp$ret$8;
      $composer_0.y1a(1388300480);
      sourceInformation($composer_0, '90@4579L150');
      var tmp_1;
      if (selectionRegistrar == null) {
        Companion_getInstance_21();
        tmp_1 = new Long(0, 0);
      } else {
        var tmp_2 = selectionIdSaver(selectionRegistrar);
        tmp_1 = rememberSaveable$composable([text, selectionRegistrar], tmp_2, null, BasicText$composable$lambda_1(selectionRegistrar), $composer_0, 0, 4);
      }
      var tmp0_group = tmp_1;
      $composer_0.d1b();
      var selectableId = tmp0_group;
      var tmp$ret$13;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp8_remember$composable = $composer_0;
      var $composer_5 = tmp8_remember$composable;
      $composer_5.y1a(547886695);
      sourceInformation($composer_5, 'C(remember$composable):Composables.kt#9igjgp');
      var tmp$ret$12;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache_0 = $composer_5;
      var tmp$ret$11;
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = tmp1_cache_0.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$10;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_3;
      if (false ? true : tmp0_let_0 === Companion_getInstance_6().c1b_1) {
        var tmp$ret$9;
        // Inline function 'androidx.compose.foundation.text.BasicText$composable.<anonymous>' call
        var tmp0_text = AnnotatedString_init_$Create$(text, null, null, 6, null);
        var tmp_4 = style_0._v;
        var tmp_5 = maxLines_0._v;
        var tmp_6 = softWrap_0._v;
        var tmp_7 = overflow_0._v;
        var tmp_8 = tmp_7 == null ? null : tmp_7.f49_1;
        tmp$ret$9 = new TextController(new TextState(TextDelegate_init_$Create$(tmp0_text, tmp_4, tmp_5, tmp_6, tmp_8, density, fontFamilyResolver, null, 128, null), selectableId));
        var value_0 = tmp$ret$9;
        tmp1_cache_0.b1b(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = tmp0_let_0;
      }
      tmp$ret$10 = tmp_3;
      tmp$ret$11 = tmp$ret$10;
      var tmp_9 = tmp$ret$11;
      tmp$ret$12 = (tmp_9 == null ? true : isObject(tmp_9)) ? tmp_9 : THROW_CCE();
      var tmp0_3 = tmp$ret$12;
      $composer_5.d1b();
      tmp$ret$13 = tmp0_3;
      var controller = tmp$ret$13;
      var state = controller.o8o_1;
      if (!$composer_0.e1n()) {
        var tmp0_current = state.v8o_1;
        controller.e8p(updateTextDelegate(tmp0_current, text, style_0._v, density, fontFamilyResolver, softWrap_0._v, overflow_0._v.f49_1, maxLines_0._v));
      }
      state.x8o_1 = onTextLayout_0._v;
      controller.f8p(selectionRegistrar);
      $composer_0.y1a(1388301797);
      sourceInformation($composer_0, '129@5894L7');
      if (!(selectionRegistrar == null)) {
        var tmp_10 = state;
        var tmp$ret$14;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp9_$get_current$$composable_cjd1mg = get_LocalTextSelectionColors();
        var tmp10_$get_current$$composable_orpap8 = $composer_0;
        var $composer_6 = tmp10_$get_current$$composable_orpap8;
        sourceInformationMarkerStart($composer_6, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_4 = $composer_6.w1n(tmp9_$get_current$$composable_cjd1mg);
        sourceInformationMarkerEnd($composer_6);
        tmp$ret$14 = tmp0_4;
        tmp_10.c8p_1 = tmp$ret$14.h8p_1;
      }
      $composer_0.d1b();
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp11_Layout$composable = modifier_0._v.y4e(controller.w8n());
      var tmp12_Layout$composable = controller.r8o_1;
      var tmp13_Layout$composable = $composer_0;
      var modifier_1 = tmp11_Layout$composable;
      var $composer_7 = tmp13_Layout$composable;
      $composer_7.y1a(310513410);
      sourceInformation($composer_7, 'C(Layout$composable)P(1)120@4589L7,121@4644L7,122@4703L7,124@4776L439:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_7();
      var tmp$ret$15;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalDensity();
      var tmp1_$get_current$$composable_gn3xww = $composer_7;
      var $composer_8 = tmp1_$get_current$$composable_gn3xww;
      sourceInformationMarkerStart($composer_8, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_5 = $composer_8.w1n(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_8);
      tmp$ret$15 = tmp0_5;
      var density_0 = tmp$ret$15;
      var tmp$ret$16;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp2_$get_current$$composable_g4n2vl_0 = get_LocalLayoutDirection();
      var tmp3_$get_current$$composable_fm67ua_0 = $composer_7;
      var $composer_9 = tmp3_$get_current$$composable_fm67ua_0;
      sourceInformationMarkerStart($composer_9, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_6 = $composer_9.w1n(tmp2_$get_current$$composable_g4n2vl_0);
      sourceInformationMarkerEnd($composer_9);
      tmp$ret$16 = tmp0_6;
      var layoutDirection = tmp$ret$16;
      var tmp$ret$17;
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp4_$get_current$$composable_f3pcsz_0 = get_LocalViewConfiguration();
      var tmp5_$get_current$$composable_el8hro_0 = $composer_7;
      var $composer_10 = tmp5_$get_current$$composable_el8hro_0;
      sourceInformationMarkerStart($composer_10, 858843746, 'C($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0_7 = $composer_10.w1n(tmp4_$get_current$$composable_f3pcsz_0);
      sourceInformationMarkerEnd($composer_10);
      tmp$ret$17 = tmp0_7;
      var viewConfiguration = tmp$ret$17;
      var materialized = materialize($composer_7, modifier_1);
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp6_ReusableComposeNode$composable = Companion_getInstance_16().a5e_1;
      var tmp7_ReusableComposeNode$composable = $composer_7;
      var $composer_11 = tmp7_ReusableComposeNode$composable;
      $composer_11.y1a(-1096955905);
      sourceInformation($composer_11, 'C(ReusableComposeNode$composable):Composables.kt#9igjgp');
      var tmp_11 = $composer_11.u1m();
      if (!isInterface(tmp_11, Applier)) {
        invalidApplier();
      }
      $composer_11.g1n();
      if ($composer_11.e1n()) {
        var tmp_12 = $composer_11;
        tmp_12.h1n(BasicText$composable$lambda_2(tmp6_ReusableComposeNode$composable));
      } else {
        $composer_11.j1n();
      }
      $composer_11.l1n();
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp8__anonymous__65w033 = _Updater___init__impl__rbfxm8($composer_11);
      Updater__set_impl_v7kwss(tmp8__anonymous__65w033, tmp12_Layout$composable, Companion_getInstance_16().e5e_1);
      Updater__set_impl_v7kwss(tmp8__anonymous__65w033, density_0, Companion_getInstance_16().d5e_1);
      Updater__set_impl_v7kwss(tmp8__anonymous__65w033, layoutDirection, Companion_getInstance_16().f5e_1);
      Updater__set_impl_v7kwss(tmp8__anonymous__65w033, viewConfiguration, Companion_getInstance_16().g5e_1);
      Updater__set_impl_v7kwss(tmp8__anonymous__65w033, materialized, Companion_getInstance_16().c5e_1);
      $composer_11.m1n();
      $composer_11.k1n();
      $composer_11.d1b();
      $composer_7.d1b();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l1h();
    }
    var tmp1_safe_receiver = $composer_0.a1o();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.g1p(BasicText$composable$lambda$ref(text, modifier_0, style_0, onTextLayout_0, overflow_0, softWrap_0, maxLines_0, $changed, $default));
    }
  }
  function selectionIdSaver(selectionRegistrar) {
    var tmp = selectionIdSaver$lambda(selectionRegistrar);
    return Saver(tmp, selectionIdSaver$lambda_0);
  }
  function BasicText$composable$lambda($text, $modifier, $style, $onTextLayout, $overflow, $softWrap, $maxLines, $$changed, $$default, $composer, $force) {
    return BasicText$composable($text, $modifier._v, $style._v, $onTextLayout._v, $overflow._v.f49_1, $softWrap._v, $maxLines._v, $composer, $$changed | 1, $$default);
  }
  function BasicText$composable$lambda_0(it) {
    return Unit_getInstance();
  }
  function BasicText$composable$lambda_1($selectionRegistrar) {
    return function () {
      return $selectionRegistrar.i8p();
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
  var EmptyInlineContent;
  function TextController$measurePolicy$o$measure$lambda($placeables) {
    return function ($this$layout) {
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = $placeables.f() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = $placeables.g(index);
          // Inline function 'androidx.compose.foundation.text.<no name provided>.measure.<anonymous>.<anonymous>' call
          var placeable = item.z3();
          var position = item.a4().m2l_1;
          $this$layout.n5g(placeable, position, 0.0, 2, null);
        }
         while (inductionVariable <= last);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function outOfBoundary($this, start, end) {
    var tmp0_safe_receiver = $this.o8o_1.a8p_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var lastOffset = tmp0_safe_receiver.r3y_1.e3z_1.p3s_1.length;
      var rawStartOffset = tmp0_safe_receiver.q3u(start);
      var rawEndOffset = tmp0_safe_receiver.q3u(end);
      return (rawStartOffset >= (lastOffset - 1 | 0) ? rawEndOffset >= (lastOffset - 1 | 0) : false) ? true : rawStartOffset < 0 ? rawEndOffset < 0 : false;
    }
    return false;
  }
  function drawTextAndSelectionBehind(_this__u8e3s4, $this) {
    var tmp = graphicsLayer$default(_this__u8e3s4, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, null, null, false, null, null, null, 65535, null);
    return drawBehind(tmp, TextController$drawTextAndSelectionBehind$lambda($this));
  }
  function createSemanticsModifierFor($this, text) {
    var tmp = Companion_getInstance_7();
    return semantics$default(tmp, false, TextController$createSemanticsModifierFor$lambda(text, $this), 1, null);
  }
  function TextController$update$1(this$0, $selectionRegistrar) {
    this.l8p_1 = this$0;
    this.m8p_1 = $selectionRegistrar;
    this.j8p_1 = Companion_getInstance_4().o2i_1;
    this.k8p_1 = Companion_getInstance_4().o2i_1;
  }
  TextController$update$1.prototype.n8p = function (startPoint) {
    var tmp0_safe_receiver = this.l8p_1.o8o_1.z8o_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.w4f())
        return Unit_getInstance();
      if (outOfBoundary(this.l8p_1, startPoint, startPoint)) {
        this.m8p_1.u8p(this.l8p_1.o8o_1.w8o_1);
      } else {
        this.m8p_1.t8p(tmp0_safe_receiver, startPoint, Companion_getInstance_20().q8p_1);
      }
      this.j8p_1 = startPoint;
      tmp$ret$0 = Unit_getInstance();
    }
    if (!hasSelection(this.m8p_1, this.l8p_1.o8o_1.w8o_1))
      return Unit_getInstance();
    this.k8p_1 = Companion_getInstance_4().o2i_1;
  };
  TextController$update$1.prototype.v8p = function (delta) {
    var tmp0_safe_receiver = this.l8p_1.o8o_1.z8o_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.w4f())
        return Unit_getInstance();
      if (!hasSelection(this.m8p_1, this.l8p_1.o8o_1.w8o_1))
        return Unit_getInstance();
      var tmp0_this = this;
      tmp0_this.k8p_1 = Offset__plus_impl_c78cg0(tmp0_this.k8p_1, delta);
      var newPosition = Offset__plus_impl_c78cg0(this.j8p_1, this.k8p_1);
      var tmp;
      if (!outOfBoundary(this.l8p_1, this.j8p_1, newPosition)) {
        var tmp1_$this = this.m8p_1;
        var tmp2_previousPosition = this.j8p_1;
        var tmp3_adjustment = Companion_getInstance_20().s8p_1;
        var consumed = tmp1_$this.w8p(tmp0_safe_receiver, newPosition, tmp2_previousPosition, false, tmp3_adjustment);
        var tmp_0;
        if (consumed === true) {
          this.j8p_1 = newPosition;
          this.k8p_1 = Companion_getInstance_4().o2i_1;
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      tmp$ret$0 = tmp;
    }
  };
  TextController$update$1.prototype.x8p = function () {
    if (hasSelection(this.m8p_1, this.l8p_1.o8o_1.w8o_1)) {
      this.m8p_1.y8p();
    }
  };
  TextController$update$1.prototype.w55 = function () {
    if (hasSelection(this.m8p_1, this.l8p_1.o8o_1.w8o_1)) {
      this.m8p_1.y8p();
    }
  };
  TextController$update$1.$metadata$ = classMeta(undefined, [TextDragObserver]);
  function TextController$update$slambda(this$0, resultContinuation) {
    this.h8q_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  TextController$update$slambda.prototype.s57 = function ($this$pointerInput, $cont) {
    var tmp = this.t57($this$pointerInput, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  TextController$update$slambda.prototype.jg = function (p1, $cont) {
    return this.s57((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  TextController$update$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = detectDragGesturesAfterLongPressWithObserver(this.i8q_1, this.h8q_1.j8q(), this);
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
  TextController$update$slambda.prototype.t57 = function ($this$pointerInput, completion) {
    var i = new TextController$update$slambda(this.h8q_1, completion);
    i.i8q_1 = $this$pointerInput;
    return i;
  };
  TextController$update$slambda.$metadata$ = classMeta('TextController$update$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function TextController$update$slambda_0(this$0, resultContinuation) {
    var i = new TextController$update$slambda(this$0, resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.s57($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function TextController$update$mouseSelectionObserver$1(this$0, $selectionRegistrar) {
    this.l8q_1 = this$0;
    this.m8q_1 = $selectionRegistrar;
    this.k8q_1 = Companion_getInstance_4().o2i_1;
  }
  TextController$update$mouseSelectionObserver$1.prototype.n8q = function (downPosition) {
    var tmp0_safe_receiver = this.l8q_1.o8o_1.z8o_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.w4f())
        return false;
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var consumed = this.m8q_1.w8p(tmp0_safe_receiver, downPosition, this.k8q_1, false, Companion_getInstance_20().o8p_1);
      var tmp;
      if (consumed) {
        this.k8q_1 = downPosition;
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      return hasSelection(this.m8q_1, this.l8q_1.o8o_1.w8o_1);
    }
    return false;
  };
  TextController$update$mouseSelectionObserver$1.prototype.o8q = function (dragPosition) {
    var tmp0_safe_receiver = this.l8q_1.o8o_1.z8o_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.w4f())
        return false;
      if (!hasSelection(this.m8q_1, this.l8q_1.o8o_1.w8o_1))
        return false;
      var consumed = this.m8q_1.w8p(tmp0_safe_receiver, dragPosition, this.k8q_1, false, Companion_getInstance_20().o8p_1);
      var tmp;
      if (consumed) {
        this.k8q_1 = dragPosition;
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
    }
    return true;
  };
  TextController$update$mouseSelectionObserver$1.prototype.p8q = function (downPosition, adjustment) {
    var tmp0_safe_receiver = this.l8q_1.o8o_1.z8o_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.w4f())
        return false;
      this.m8q_1.t8p(tmp0_safe_receiver, downPosition, adjustment);
      this.k8q_1 = downPosition;
      return hasSelection(this.m8q_1, this.l8q_1.o8o_1.w8o_1);
    }
    return false;
  };
  TextController$update$mouseSelectionObserver$1.prototype.q8q = function (dragPosition, adjustment) {
    var tmp0_safe_receiver = this.l8q_1.o8o_1.z8o_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.w4f())
        return false;
      if (!hasSelection(this.m8q_1, this.l8q_1.o8o_1.w8o_1))
        return false;
      var tmp0_$this = this.m8q_1;
      var tmp1_previousPosition = this.k8q_1;
      var consumed = tmp0_$this.w8p(tmp0_safe_receiver, dragPosition, tmp1_previousPosition, false, adjustment);
      var tmp;
      if (consumed === true) {
        this.k8q_1 = dragPosition;
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
    tmp$ret$0 = $currentMouseSelectionObserver$delegate.i2();
    return tmp$ret$0;
  }
  function TextController$update$lambda$slambda($currentMouseSelectionObserver$delegate, resultContinuation) {
    this.z8q_1 = $currentMouseSelectionObserver$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  TextController$update$lambda$slambda.prototype.s57 = function ($this$pointerInput, $cont) {
    var tmp = this.t57($this$pointerInput, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  TextController$update$lambda$slambda.prototype.jg = function (p1, $cont) {
    return this.s57((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  TextController$update$lambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = mouseSelectionDetector(this.a8r_1, invoke$lambda_6(this.z8q_1), this);
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
  TextController$update$lambda$slambda.prototype.t57 = function ($this$pointerInput, completion) {
    var i = new TextController$update$lambda$slambda(this.z8q_1, completion);
    i.a8r_1 = $this$pointerInput;
    return i;
  };
  TextController$update$lambda$slambda.$metadata$ = classMeta('TextController$update$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function TextController$update$lambda$slambda_0($currentMouseSelectionObserver$delegate, resultContinuation) {
    var i = new TextController$update$lambda$slambda($currentMouseSelectionObserver$delegate, resultContinuation);
    var l = function ($this$pointerInput, $cont) {
      return i.s57($this$pointerInput, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function TextController$update$lambda($mouseSelectionObserver) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.y1a(-1008655751);
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
      $composer_1.y1a(-838505973);
      sourceInformation($composer_1, 'C(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_1;
      var tmp2_cache = $composer_1.z1a(currentMouseSelectionObserver$delegate);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp1_cache.a1b();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp2_cache ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.text.TextController.update.<anonymous>.<anonymous>' call
        tmp$ret$0 = TextController$update$lambda$slambda_0(currentMouseSelectionObserver$delegate, null);
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
      var tmp0_0 = pointerInput_0($this$composed, Unit_getInstance(), tmp$ret$4);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      $composer_0.d1b();
      return tmp0_0;
    };
  }
  function TextController$measurePolicy$1(this$0) {
    this.b8r_1 = this$0;
  }
  TextController$measurePolicy$1.prototype.d5f = function (_this__u8e3s4, measurables, constraints) {
    var prevLayout = this.b8r_1.o8o_1.a8p_1;
    var layoutResult = this.b8r_1.o8o_1.v8o_1.m8r(constraints, _this__u8e3s4.y3k(), prevLayout);
    if (!equals(prevLayout, layoutResult)) {
      this.b8r_1.o8o_1.x8o_1(layoutResult);
      var tmp0_safe_receiver = prevLayout;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp;
        if (!tmp0_safe_receiver.r3y_1.e3z_1.equals(layoutResult.r3y_1.e3z_1)) {
          var tmp0_safe_receiver_0 = this.b8r_1.p8o_1;
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            tmp0_safe_receiver_0.n8r(this.b8r_1.o8o_1.w8o_1);
          }
          tmp = Unit_getInstance();
        }
        tmp$ret$0 = tmp;
      }
    }
    this.b8r_1.o8o_1.o8r(layoutResult);
    // Inline function 'kotlin.check' call
    var tmp0_check = measurables.f() >= layoutResult.w3y_1.f();
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
    var tmp1_fastMapIndexedNotNull = layoutResult.w3y_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(tmp1_fastMapIndexedNotNull.f());
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp1_fastMapIndexedNotNull.f() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp1_fastMapIndexedNotNull.g(index);
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
          var tmp_1 = measurables.g(index);
          var tmp$ret$2;
          // Inline function 'kotlin.math.floor' call
          var tmp0_floor = tmp0_safe_receiver_1.a2j();
          tmp$ret$2 = Math.floor(tmp0_floor);
          var tmp_2 = numberToInt(tmp$ret$2);
          var tmp$ret$3;
          // Inline function 'kotlin.math.floor' call
          var tmp1_floor = tmp0_safe_receiver_1.b2j();
          tmp$ret$3 = Math.floor(tmp1_floor);
          var tmp_3 = tmp_1.g4i(Constraints$default(0, tmp_2, 0, numberToInt(tmp$ret$3), 5, null));
          var tmp$ret$4;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp2_roundToInt = tmp0_safe_receiver_1.u2i_1;
          tmp$ret$4 = roundToInt(tmp2_roundToInt);
          var tmp_4 = tmp$ret$4;
          var tmp$ret$5;
          // Inline function 'kotlin.math.roundToInt' call
          var tmp3_roundToInt = tmp0_safe_receiver_1.v2i_1;
          tmp$ret$5 = roundToInt(tmp3_roundToInt);
          tmp$ret$6 = new Pair(tmp_3, new IntOffset_0(IntOffset(tmp_4, tmp$ret$5)));
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
          target.a(tmp0_safe_receiver_2);
          tmp$ret$9 = Unit_getInstance();
        }
      }
       while (inductionVariable <= last);
    tmp$ret$10 = target;
    var placeables = tmp$ret$10;
    var tmp_5 = _IntSize___get_width__impl__d9yl4o(layoutResult.t3y_1);
    var tmp_6 = _IntSize___get_height__impl__prv63b(layoutResult.t3y_1);
    var tmp_7 = get_FirstBaseline();
    var tmp$ret$11;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp2_roundToInt_0 = layoutResult.u3y_1;
    tmp$ret$11 = roundToInt(tmp2_roundToInt_0);
    var tmp_8 = to(tmp_7, tmp$ret$11);
    var tmp_9 = get_LastBaseline();
    var tmp$ret$12;
    // Inline function 'kotlin.math.roundToInt' call
    var tmp3_roundToInt_0 = layoutResult.v3y_1;
    tmp$ret$12 = roundToInt(tmp3_roundToInt_0);
    var tmp_10 = mapOf([tmp_8, to(tmp_9, tmp$ret$12)]);
    return _this__u8e3s4.y5f(tmp_5, tmp_6, tmp_10, TextController$measurePolicy$o$measure$lambda(placeables));
  };
  TextController$measurePolicy$1.$metadata$ = classMeta(undefined, [MeasurePolicy]);
  function TextController$drawTextAndSelectionBehind$lambda(this$0) {
    return function ($this$drawBehind) {
      var tmp0_safe_receiver = this$0.o8o_1.a8p_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        this$0.o8o_1.p8r();
        var tmp0_safe_receiver_0 = this$0.p8o_1;
        var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.q8r();
        var selection = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v(this$0.o8o_1.w8o_1);
        if (!(selection == null)) {
          var tmp;
          if (!selection.w8r_1) {
            tmp = selection.u8r_1.s8r_1;
          } else {
            tmp = selection.v8r_1.s8r_1;
          }
          var start = tmp;
          var tmp_0;
          if (!selection.w8r_1) {
            tmp_0 = selection.v8r_1.s8r_1;
          } else {
            tmp_0 = selection.u8r_1.s8r_1;
          }
          var end = tmp_0;
          if (!(start === end)) {
            var selectionPath = tmp0_safe_receiver.s3y_1.n3u(start, end);
            var tmp_1 = this$0.o8o_1.c8p_1;
            $this$drawBehind.l3l(selectionPath, tmp_1, 0.0, null, null, null, 60, null);
          }
        }
        var tmp$ret$0;
        // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
        var tmp0__anonymous__q1qw7t = $this$drawBehind.z3k().u2w();
        Companion_getInstance_19().v3z(tmp0__anonymous__q1qw7t, tmp0_safe_receiver);
        tmp$ret$0 = Unit_getInstance();
        tmp$ret$1 = tmp$ret$0;
      }
      return Unit_getInstance();
    };
  }
  function TextController$coreModifiers$lambda(this$0) {
    return function (it) {
      this$0.o8o_1.z8o_1 = it;
      var tmp;
      if (hasSelection(this$0.p8o_1, this$0.o8o_1.w8o_1)) {
        var newGlobalPosition = positionInWindow(it);
        if (!equals(newGlobalPosition, this$0.o8o_1.b8p_1)) {
          var tmp0_safe_receiver = this$0.p8o_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.x8r(this$0.o8o_1.w8o_1);
          }
        }
        this$0.o8o_1.b8p_1 = newGlobalPosition;
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function TextController$createSemanticsModifierFor$lambda$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(this$0.o8o_1.a8p_1 == null)) {
        it.a(ensureNotNull(this$0.o8o_1.a8p_1));
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
      return this$0.o8o_1.z8o_1;
    };
  }
  function TextController$onRemembered$lambda_0(this$0) {
    return function () {
      return this$0.o8o_1.a8p_1;
    };
  }
  function TextController(state) {
    this.o8o_1 = state;
    this.p8o_1 = null;
    var tmp = this;
    tmp.r8o_1 = new TextController$measurePolicy$1(this);
    var tmp_0 = this;
    var tmp_1 = drawTextAndSelectionBehind(Companion_getInstance_7(), this);
    tmp_0.s8o_1 = onGloballyPositioned(tmp_1, TextController$coreModifiers$lambda(this));
    this.t8o_1 = createSemanticsModifierFor(this, this.o8o_1.v8o_1.c8r_1);
    this.u8o_1 = Companion_getInstance_7();
  }
  TextController.prototype.j8q = function () {
    var tmp = this.q8o_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('longPressDragObserver');
    }
  };
  TextController.prototype.f8p = function (selectionRegistrar) {
    this.p8o_1 = selectionRegistrar;
    var tmp = this;
    var tmp_0;
    if (!(selectionRegistrar == null)) {
      var tmp_1;
      if (get_isInTouchMode()) {
        var tmp_2 = this;
        tmp_2.q8o_1 = new TextController$update$1(this, selectionRegistrar);
        var tmp_3 = Companion_getInstance_7();
        var tmp_4 = this.j8q();
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
    tmp.u8o_1 = tmp_0;
  };
  TextController.prototype.e8p = function (textDelegate) {
    if (this.o8o_1.v8o_1 === textDelegate) {
      return Unit_getInstance();
    }
    this.o8o_1.v8o_1 = textDelegate;
    this.t8o_1 = createSemanticsModifierFor(this, this.o8o_1.v8o_1.c8r_1);
  };
  TextController.prototype.w8n = function () {
    return this.s8o_1.y4e(this.t8o_1).y4e(this.u8o_1);
  };
  TextController.prototype.w1k = function () {
    var tmp0_safe_receiver = this.p8o_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp = this.o8o_1;
      var tmp_0 = TextController$onRemembered$lambda(this);
      tmp.y8o_1 = tmp0_safe_receiver.y8r(new MultiWidgetSelectionDelegate(this.o8o_1.w8o_1, tmp_0, TextController$onRemembered$lambda_0(this)));
      tmp$ret$0 = Unit_getInstance();
    }
  };
  TextController.prototype.y1k = function () {
    var tmp0_safe_receiver = this.o8o_1.y8o_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.TextController.onForgotten.<anonymous>' call
      var tmp0_safe_receiver_0 = this.p8o_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver_0.z8r(tmp0_safe_receiver);
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
    }
  };
  TextController.prototype.x1k = function () {
    var tmp0_safe_receiver = this.o8o_1.y8o_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.TextController.onAbandoned.<anonymous>' call
      var tmp0_safe_receiver_0 = this.p8o_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver_0.z8r(tmp0_safe_receiver);
        tmp = Unit_getInstance();
      }
      tmp$ret$0 = tmp;
      tmp$ret$1 = tmp$ret$0;
    }
  };
  TextController.$metadata$ = classMeta('TextController', [RememberObserver]);
  function _set_drawScopeInvalidation__nu6luf($this, _set____db54di) {
    var tmp0_setValue = drawScopeInvalidation$factory();
    return $this.d8p_1.p11(Unit_getInstance());
  }
  function TextState$onTextLayout$lambda(it) {
    return Unit_getInstance();
  }
  function TextState(textDelegate, selectableId) {
    this.v8o_1 = textDelegate;
    this.w8o_1 = selectableId;
    var tmp = this;
    tmp.x8o_1 = TextState$onTextLayout$lambda;
    this.y8o_1 = null;
    this.z8o_1 = null;
    this.a8p_1 = null;
    this.b8p_1 = Companion_getInstance_4().o2i_1;
    this.c8p_1 = Companion_getInstance_0().q3a_1;
    this.d8p_1 = mutableStateOf(Unit_getInstance(), neverEqualPolicy());
  }
  TextState.prototype.o8r = function (value) {
    _set_drawScopeInvalidation__nu6luf(this, Unit_getInstance());
    this.a8p_1 = value;
  };
  TextState.prototype.p8r = function () {
    var tmp$ret$0;
    // Inline function 'androidx.compose.runtime.getValue' call
    var tmp0_getValue = drawScopeInvalidation$factory_0();
    tmp$ret$0 = this.d8p_1.i2();
    return tmp$ret$0;
  };
  TextState.$metadata$ = classMeta('TextState');
  function updateTextDelegate(current, text, style, density, fontFamilyResolver, softWrap, overflow, maxLines) {
    init_properties_CoreText_kt_u66fde();
    var tmp;
    if ((((((!(current.c8r_1.p3s_1 === text) ? true : !current.d8r_1.equals(style)) ? true : !(current.f8r_1 === softWrap)) ? true : !(current.g8r_1 === overflow)) ? true : !(current.e8r_1 === maxLines)) ? true : !equals(current.h8r_1, density)) ? true : !(current.i8r_1 === fontFamilyResolver)) {
      var tmp0_text = AnnotatedString_init_$Create$(text, null, null, 6, null);
      tmp = TextDelegate_init_$Create$(tmp0_text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, null, 128, null);
    } else {
      tmp = current;
    }
    return tmp;
  }
  function drawScopeInvalidation$factory() {
    return getPropertyCallableRef('drawScopeInvalidation', 1, KMutableProperty1, function (receiver) {
      receiver.p8r();
      return Unit_getInstance();
    }, function (receiver, value) {
      return _set_drawScopeInvalidation__nu6luf(receiver, value);
    });
  }
  function drawScopeInvalidation$factory_0() {
    return getPropertyCallableRef('drawScopeInvalidation', 1, KMutableProperty1, function (receiver) {
      receiver.p8r();
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
      $observer.n8p(it.s2i_1);
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_0($observer) {
    return function () {
      $observer.x8p();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_1($observer) {
    return function () {
      $observer.w55();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_2($observer) {
    return function (_anonymous_parameter_0__qggqh8, offset) {
      $observer.v8p(offset.s2i_1);
      return Unit_getInstance();
    };
  }
  function TextDelegate_init_$Init$(text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, placeholders, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      maxLines = IntCompanionObject_getInstance().c1_1;
    if (!(($mask0 & 8) === 0))
      softWrap = true;
    if (!(($mask0 & 16) === 0))
      overflow = Companion_getInstance_15().w3z_1;
    if (!(($mask0 & 128) === 0))
      placeholders = emptyList();
    TextDelegate.call($this, text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, placeholders);
    return $this;
  }
  function TextDelegate_init_$Create$(text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, placeholders, $mask0, $marker) {
    return TextDelegate_init_$Init$(text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, placeholders, $mask0, $marker, Object.create(TextDelegate.prototype));
  }
  function _get_nonNullIntrinsics__hf0xox($this) {
    var tmp0_elvis_lhs = $this.k8r_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('layoutIntrinsics must be called first');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function layoutText($this, constraints, layoutDirection) {
    $this.a8s(layoutDirection);
    var minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var widthMatters = $this.f8r_1 ? true : $this.g8r_1 === Companion_getInstance_15().x3z_1;
    var tmp;
    if (widthMatters ? _Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) : false) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      Companion_getInstance_17();
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var overwriteMaxLines = !$this.f8r_1 ? $this.g8r_1 === Companion_getInstance_15().x3z_1 : false;
    var finalMaxLines = overwriteMaxLines ? 1 : $this.e8r_1;
    var tmp_0;
    if (minWidth === maxWidth) {
      tmp_0 = maxWidth;
    } else {
      tmp_0 = coerceIn_0($this.r2y(), minWidth, maxWidth);
    }
    var width = tmp_0;
    var tmp_1 = _get_nonNullIntrinsics__hf0xox($this);
    return new MultiParagraph(tmp_1, Constraints$default(0, width, 0, _Constraints___get_maxHeight__impl__dt3e8z(constraints), 5, null), finalMaxLines, $this.g8r_1 === Companion_getInstance_15().x3z_1);
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.v3z = function (canvas, textLayoutResult) {
    TextPainter_getInstance().v3z(canvas, textLayoutResult);
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_19() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function TextDelegate(text, style, maxLines, softWrap, overflow, density, fontFamilyResolver, placeholders) {
    Companion_getInstance_19();
    this.c8r_1 = text;
    this.d8r_1 = style;
    this.e8r_1 = maxLines;
    this.f8r_1 = softWrap;
    this.g8r_1 = overflow;
    this.h8r_1 = density;
    this.i8r_1 = fontFamilyResolver;
    this.j8r_1 = placeholders;
    this.k8r_1 = null;
    this.l8r_1 = null;
    // Inline function 'kotlin.check' call
    var tmp0_check = this.e8r_1 > 0;
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
  TextDelegate.prototype.f4d = function () {
    return this.d8r_1;
  };
  TextDelegate.prototype.r2y = function () {
    return ceilToIntPx(_get_nonNullIntrinsics__hf0xox(this).r2y());
  };
  TextDelegate.prototype.a8s = function (layoutDirection) {
    var localIntrinsics = this.k8r_1;
    var tmp;
    if ((localIntrinsics == null ? true : !layoutDirection.equals(this.l8r_1)) ? true : localIntrinsics.d3v()) {
      this.l8r_1 = layoutDirection;
      var tmp0_annotatedString = this.c8r_1;
      var tmp1_style = resolveDefaults(this.d8r_1, layoutDirection);
      var tmp2_density = this.h8r_1;
      var tmp3_fontFamilyResolver = this.i8r_1;
      var tmp4_placeholders = this.j8r_1;
      tmp = new MultiParagraphIntrinsics(tmp0_annotatedString, tmp1_style, tmp4_placeholders, tmp2_density, tmp3_fontFamilyResolver);
    } else {
      tmp = localIntrinsics;
    }
    var intrinsics = tmp;
    this.k8r_1 = intrinsics;
  };
  TextDelegate.prototype.m8r = function (constraints, layoutDirection, prevResult) {
    if (!(prevResult == null) ? canReuse(prevResult, this.c8r_1, this.d8r_1, this.j8r_1, this.e8r_1, this.f8r_1, this.g8r_1, this.h8r_1, layoutDirection, this.i8r_1, constraints) : false) {
      var tmp$ret$1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.text.TextDelegate.layout.<anonymous>' call
      tmp$ret$0 = prevResult.d3z(TextLayoutInput_init_$Create$(prevResult.r3y_1.e3z_1, this.d8r_1, prevResult.r3y_1.g3z_1, prevResult.r3y_1.h3z_1, prevResult.r3y_1.i3z_1, prevResult.r3y_1.j3z_1, prevResult.r3y_1.k3z_1, prevResult.r3y_1.l3z_1, prevResult.r3y_1.m3z_1, constraints), constrain(constraints, IntSize(ceilToIntPx(prevResult.s3y_1.n3t_1), ceilToIntPx(prevResult.s3y_1.o3t_1))));
      tmp$ret$1 = tmp$ret$0;
      return tmp$ret$1;
    }
    var multiParagraph = layoutText(this, constraints, layoutDirection);
    var size = constrain(constraints, IntSize(ceilToIntPx(multiParagraph.n3t_1), ceilToIntPx(multiParagraph.o3t_1)));
    return new TextLayoutResult(TextLayoutInput_init_$Create$(this.c8r_1, this.d8r_1, this.j8r_1, this.e8r_1, this.f8r_1, this.g8r_1, this.h8r_1, layoutDirection, this.i8r_1, constraints), multiParagraph, size);
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
  function canReuse(_this__u8e3s4, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    var layoutInput = _this__u8e3s4.r3y_1;
    if (_this__u8e3s4.s3y_1.k3t_1.d3v()) {
      return false;
    }
    if (!((((((((layoutInput.e3z_1.equals(text) ? layoutInput.f3z_1.u40(style) : false) ? equals(layoutInput.g3z_1, placeholders) : false) ? layoutInput.h3z_1 === maxLines : false) ? layoutInput.i3z_1 === softWrap : false) ? layoutInput.j3z_1 === overflow : false) ? equals(layoutInput.k3z_1, density) : false) ? layoutInput.l3z_1.equals(layoutDirection) : false) ? equals(layoutInput.m3z_1, fontFamilyResolver) : false)) {
      return false;
    }
    if (!(_Constraints___get_minWidth__impl__hi9lfi(constraints) === _Constraints___get_minWidth__impl__hi9lfi(layoutInput.n3z_1)))
      return false;
    if (!(softWrap ? true : overflow === Companion_getInstance_15().x3z_1)) {
      return true;
    }
    return _Constraints___get_maxWidth__impl__uuyqc(constraints) === _Constraints___get_maxWidth__impl__uuyqc(layoutInput.n3z_1) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) === _Constraints___get_maxHeight__impl__dt3e8z(layoutInput.n3z_1) : false;
  }
  var SNAPSHOTS_INTERVAL_MILLIS;
  function MultiWidgetSelectionDelegate(selectableId, coordinatesCallback, layoutResultCallback) {
    this.b8s_1 = selectableId;
    this.c8s_1 = coordinatesCallback;
    this.d8s_1 = layoutResultCallback;
  }
  MultiWidgetSelectionDelegate.$metadata$ = classMeta('MultiWidgetSelectionDelegate', [Selectable]);
  function Selectable() {
  }
  Selectable.$metadata$ = interfaceMeta('Selectable');
  function SelectionAdjustment$Companion$None$1() {
  }
  SelectionAdjustment$Companion$None$1.$metadata$ = classMeta(undefined, [SelectionAdjustment]);
  function SelectionAdjustment$Companion$Character$1() {
  }
  SelectionAdjustment$Companion$Character$1.$metadata$ = classMeta(undefined, [SelectionAdjustment]);
  function SelectionAdjustment$Companion$Word$1() {
  }
  SelectionAdjustment$Companion$Word$1.$metadata$ = classMeta(undefined, [SelectionAdjustment]);
  function SelectionAdjustment$Companion$Paragraph$1() {
  }
  SelectionAdjustment$Companion$Paragraph$1.$metadata$ = classMeta(undefined, [SelectionAdjustment]);
  function SelectionAdjustment$Companion$CharacterWithWordAccelerate$1() {
  }
  SelectionAdjustment$Companion$CharacterWithWordAccelerate$1.$metadata$ = classMeta(undefined, [SelectionAdjustment]);
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.o8p_1 = new SelectionAdjustment$Companion$None$1();
    var tmp_0 = this;
    tmp_0.p8p_1 = new SelectionAdjustment$Companion$Character$1();
    var tmp_1 = this;
    tmp_1.q8p_1 = new SelectionAdjustment$Companion$Word$1();
    var tmp_2 = this;
    tmp_2.r8p_1 = new SelectionAdjustment$Companion$Paragraph$1();
    var tmp_3 = this;
    tmp_3.s8p_1 = new SelectionAdjustment$Companion$CharacterWithWordAccelerate$1();
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_20() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function SelectionAdjustment() {
  }
  SelectionAdjustment.$metadata$ = interfaceMeta('SelectionAdjustment');
  function get_LocalSelectionRegistrar() {
    init_properties_SelectionRegistrar_kt_gks7zt();
    return LocalSelectionRegistrar;
  }
  var LocalSelectionRegistrar;
  function Companion_1() {
    Companion_instance_1 = this;
    this.e8s_1 = new Long(0, 0);
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_21() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function hasSelection(_this__u8e3s4, selectableId) {
    init_properties_SelectionRegistrar_kt_gks7zt();
    var tmp0_safe_receiver = _this__u8e3s4;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q8r();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q2(selectableId);
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
    this.g8p_1 = handleColor;
    this.h8p_1 = backgroundColor;
  }
  TextSelectionColors.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSelectionColors))
      return false;
    if (!equals(this.g8p_1, other.g8p_1))
      return false;
    if (!equals(this.h8p_1, other.h8p_1))
      return false;
    return true;
  };
  TextSelectionColors.prototype.hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.g8p_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.h8p_1) | 0;
    return result;
  };
  TextSelectionColors.prototype.toString = function () {
    return 'SelectionColors(selectionHandleColor=' + new Color(this.g8p_1) + ', ' + ('selectionBackgroundColor=' + new Color(this.h8p_1) + ')');
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
  function MouseSelectionObserver() {
  }
  MouseSelectionObserver.$metadata$ = interfaceMeta('MouseSelectionObserver');
  function mouseSelectionDetector(_this__u8e3s4, observer, $cont) {
    return forEachGesture(_this__u8e3s4, mouseSelectionDetector$slambda_0(observer, null), $cont);
  }
  function ClicksCounter(viewConfiguration) {
    this.f8s_1 = viewConfiguration;
    this.g8s_1 = 0;
    this.h8s_1 = null;
  }
  ClicksCounter.prototype.i8s = function (event) {
    var currentPrevClick = this.h8s_1;
    var newClick = event.q53_1.g(0);
    if ((!(currentPrevClick == null) ? this.k8s(currentPrevClick, newClick) : false) ? this.j8s(currentPrevClick, newClick) : false) {
      var tmp0_this = this;
      tmp0_this.g8s_1 = tmp0_this.g8s_1 + 1 | 0;
    } else {
      this.g8s_1 = 1;
    }
    this.h8s_1 = newClick;
  };
  ClicksCounter.prototype.k8s = function (prevClick, newClick) {
    var diff = newClick.a53_1.p6(prevClick.a53_1);
    return diff.h1(this.f8s_1.t5v()) < 0;
  };
  ClicksCounter.prototype.j8s = function (prevClick, newClick) {
    var diff = Offset__minus_impl_hoj2c0(newClick.b53_1, prevClick.b53_1);
    return Offset__getDistance_impl_pclvxn(diff) < 100.0;
  };
  ClicksCounter.$metadata$ = classMeta('ClicksCounter');
  function awaitMouseEventDown(_this__u8e3s4, $cont) {
    var tmp = new $awaitMouseEventDownCOROUTINE$24(_this__u8e3s4, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  }
  function mouseSelectionDetector$slambda$slambda$lambda($observer) {
    return function (it) {
      var tmp;
      if ($observer.o8q(it.b53_1)) {
        it.p55();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function mouseSelectionDetector$slambda$slambda$lambda_0($observer, $selectionMode) {
    return function (it) {
      var tmp;
      if ($observer.q8q(it.b53_1, $selectionMode)) {
        it.p55();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function mouseSelectionDetector$slambda$slambda($observer, resultContinuation) {
    this.d8t_1 = $observer;
    CoroutineImpl.call(this, resultContinuation);
  }
  mouseSelectionDetector$slambda$slambda.prototype.c57 = function ($this$awaitPointerEventScope, $cont) {
    var tmp = this.d57($this$awaitPointerEventScope, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  mouseSelectionDetector$slambda$slambda.prototype.jg = function (p1, $cont) {
    return this.c57((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  mouseSelectionDetector$slambda$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 8;
            this.f8t_1 = new ClicksCounter(this.e8t_1.b5b());
            this.zf_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.zf_1 = 9;
              continue $sm;
            }

            this.zf_1 = 2;
            suspendResult = awaitMouseEventDown(this.e8t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.g8t_1 = suspendResult;
            this.f8t_1.i8s(this.g8t_1);
            this.h8t_1 = this.g8t_1.q53_1.g(0);
            if (get_isShiftPressed(this.g8t_1.s53_1)) {
              this.i8t_1 = this.d8t_1.n8q(this.h8t_1.b53_1);
              if (this.i8t_1) {
                this.h8t_1.p55();
                this.zf_1 = 5;
                suspendResult = drag(this.e8t_1, this.h8t_1.z52_1, mouseSelectionDetector$slambda$slambda$lambda(this.d8t_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.zf_1 = 6;
                continue $sm;
              }
            } else {
              var tmp_0 = this;
              var tmp0_subject = this.f8t_1.g8s_1;
              switch (tmp0_subject) {
                case 1:
                  tmp_0.j8t_1 = Companion_getInstance_20().o8p_1;
                  break;
                case 2:
                  tmp_0.j8t_1 = Companion_getInstance_20().q8p_1;
                  break;
                default:
                  tmp_0.j8t_1 = Companion_getInstance_20().r8p_1;
                  break;
              }
              this.k8t_1 = this.d8t_1.p8q(this.h8t_1.b53_1, this.j8t_1);
              if (this.k8t_1) {
                this.h8t_1.p55();
                this.zf_1 = 3;
                suspendResult = drag(this.e8t_1, this.h8t_1.z52_1, mouseSelectionDetector$slambda$slambda$lambda_0(this.d8t_1, this.j8t_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.zf_1 = 4;
                continue $sm;
              }
            }

            break;
          case 3:
            ;
            this.zf_1 = 4;
            continue $sm;
          case 4:
            this.zf_1 = 7;
            continue $sm;
          case 5:
            ;
            this.zf_1 = 6;
            continue $sm;
          case 6:
            this.zf_1 = 7;
            continue $sm;
          case 7:
            this.zf_1 = 1;
            continue $sm;
          case 8:
            throw this.cg_1;
          case 9:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.ag_1 === 8) {
          throw $p;
        } else {
          this.zf_1 = this.ag_1;
          this.cg_1 = $p;
        }
      }
     while (true);
  };
  mouseSelectionDetector$slambda$slambda.prototype.d57 = function ($this$awaitPointerEventScope, completion) {
    var i = new mouseSelectionDetector$slambda$slambda(this.d8t_1, completion);
    i.e8t_1 = $this$awaitPointerEventScope;
    return i;
  };
  mouseSelectionDetector$slambda$slambda.$metadata$ = classMeta('mouseSelectionDetector$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function mouseSelectionDetector$slambda$slambda_0($observer, resultContinuation) {
    var i = new mouseSelectionDetector$slambda$slambda($observer, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $cont) {
      return i.c57($this$awaitPointerEventScope, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function mouseSelectionDetector$slambda($observer, resultContinuation) {
    this.t8t_1 = $observer;
    CoroutineImpl.call(this, resultContinuation);
  }
  mouseSelectionDetector$slambda.prototype.s57 = function ($this$forEachGesture, $cont) {
    var tmp = this.t57($this$forEachGesture, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  mouseSelectionDetector$slambda.prototype.jg = function (p1, $cont) {
    return this.s57((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  mouseSelectionDetector$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 2;
            this.zf_1 = 1;
            suspendResult = this.u8t_1.u57(mouseSelectionDetector$slambda$slambda_0(this.t8t_1, null), this);
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
  mouseSelectionDetector$slambda.prototype.t57 = function ($this$forEachGesture, completion) {
    var i = new mouseSelectionDetector$slambda(this.t8t_1, completion);
    i.u8t_1 = $this$forEachGesture;
    return i;
  };
  mouseSelectionDetector$slambda.$metadata$ = classMeta('mouseSelectionDetector$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function mouseSelectionDetector$slambda_0($observer, resultContinuation) {
    var i = new mouseSelectionDetector$slambda($observer, resultContinuation);
    var l = function ($this$forEachGesture, $cont) {
      return i.s57($this$forEachGesture, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $awaitMouseEventDownCOROUTINE$24(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t8s_1 = _this__u8e3s4;
  }
  $awaitMouseEventDownCOROUTINE$24.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        switch (tmp) {
          case 0:
            this.ag_1 = 4;
            this.zf_1 = 1;
            continue $sm;
          case 1:
            this.zf_1 = 2;
            suspendResult = this.t8s_1.e57(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u8s_1 = suspendResult;
            var tmp_0;
            if (get_isPrimaryPressed(this.u8s_1.r53_1)) {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp0_fastAll = this.u8s_1.q53_1;
                var inductionVariable = 0;
                var last = tmp0_fastAll.f() - 1 | 0;
                if (inductionVariable <= last)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    var item = tmp0_fastAll.g(index);
                    if (!(item.g53_1 === Companion_getInstance_11().f55_1 ? changedToDown(item) : false)) {
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
              this.zf_1 = 1;
              continue $sm;
            }

            this.zf_1 = 3;
            continue $sm;
          case 3:
            return this.u8s_1;
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
  $awaitMouseEventDownCOROUTINE$24.$metadata$ = classMeta('$awaitMouseEventDownCOROUTINE$24', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function get_TapIndicationDelay() {
    return TapIndicationDelay;
  }
  var TapIndicationDelay;
  function isComposeRootInScrollableContainer$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.y1a(1296278520);
    sourceInformation($composer_0, 'C(isComposeRootInScrollableContainer$composable)27@1040L9:Clickable.js.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(1296278520, $changed, -1, 'androidx.compose.foundation.isComposeRootInScrollableContainer$composable (Clickable.js.kt:27)');
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
    if (false ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.isComposeRootInScrollableContainer$composable.<anonymous>' call
      tmp$ret$0 = isComposeRootInScrollableContainer$composable$lambda;
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
  function get_isPress(_this__u8e3s4) {
    var tmp;
    if (get_type(_this__u8e3s4) === Companion_getInstance_18().t51_1) {
      var tmp0_subject = _KeyEvent___get_nativeKeyEvent__impl__py13j5(_this__u8e3s4).a32_1;
      var tmp0 = tmp0_subject.t5_1;
      tmp = tmp0 === 48 ? true : false;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function get_isClick(_this__u8e3s4) {
    var tmp;
    if (get_type(_this__u8e3s4) === Companion_getInstance_18().t51_1) {
      var tmp0_subject = _KeyEvent___get_nativeKeyEvent__impl__py13j5(_this__u8e3s4).a32_1;
      var tmp0 = tmp0_subject.t5_1;
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
    this.v8t_1 = minimalHeight;
    this.w8t_1 = thickness;
    this.x8t_1 = shape;
    this.y8t_1 = hoverDurationMillis;
    this.z8t_1 = unhoverColor;
    this.a8u_1 = hoverColor;
  }
  ScrollbarStyle.prototype.b8u = function (minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor) {
    return new ScrollbarStyle(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor);
  };
  ScrollbarStyle.prototype.c8u = function (minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      minimalHeight = this.v8t_1;
    if (!(($mask0 & 2) === 0))
      thickness = this.w8t_1;
    if (!(($mask0 & 4) === 0))
      shape = this.x8t_1;
    if (!(($mask0 & 8) === 0))
      hoverDurationMillis = this.y8t_1;
    if (!(($mask0 & 16) === 0))
      unhoverColor = this.z8t_1;
    if (!(($mask0 & 32) === 0))
      hoverColor = this.a8u_1;
    return this.b8u(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor);
  };
  ScrollbarStyle.prototype.toString = function () {
    return 'ScrollbarStyle(minimalHeight=' + new Dp(this.v8t_1) + ', thickness=' + new Dp(this.w8t_1) + ', shape=' + this.x8t_1 + ', hoverDurationMillis=' + this.y8t_1 + ', unhoverColor=' + new Color(this.z8t_1) + ', hoverColor=' + new Color(this.a8u_1) + ')';
  };
  ScrollbarStyle.prototype.hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.v8t_1);
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.w8t_1) | 0;
    result = imul(result, 31) + hashCode(this.x8t_1) | 0;
    result = imul(result, 31) + this.y8t_1 | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.z8t_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.a8u_1) | 0;
    return result;
  };
  ScrollbarStyle.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ScrollbarStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ScrollbarStyle ? other : THROW_CCE();
    if (!equals(this.v8t_1, tmp0_other_with_cast.v8t_1))
      return false;
    if (!equals(this.w8t_1, tmp0_other_with_cast.w8t_1))
      return false;
    if (!equals(this.x8t_1, tmp0_other_with_cast.x8t_1))
      return false;
    if (!(this.y8t_1 === tmp0_other_with_cast.y8t_1))
      return false;
    if (!equals(this.z8t_1, tmp0_other_with_cast.z8t_1))
      return false;
    if (!equals(this.a8u_1, tmp0_other_with_cast.a8u_1))
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
    var tmp_2 = Companion_getInstance_0().e3a_1;
    var tmp_3 = Color__copy$default_impl_ectz3s(tmp_2, 0.12, 0.0, 0.0, 0.0, 14, null);
    var tmp_4 = Companion_getInstance_0().e3a_1;
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
    $composer_0.y1a(-390424327);
    sourceInformation($composer_0, 'C(rememberDefaultBringIntoViewParent$composable)27@1008L149:BringIntoViewResponder.skiko.kt#exjx5q');
    if (isTraceInProgress()) {
      traceEventStart(-390424327, $changed, -1, 'androidx.compose.foundation.relocation.rememberDefaultBringIntoViewParent$composable (BringIntoViewResponder.skiko.kt:26)');
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
    if (false ? true : tmp0_let === Companion_getInstance_6().c1b_1) {
      var tmp$ret$0;
      // Inline function 'androidx.compose.foundation.relocation.rememberDefaultBringIntoViewParent$composable.<anonymous>' call
      tmp$ret$0 = rememberDefaultBringIntoViewParent$composable$slambda_0(null);
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
    var tmp_1 = tmp$ret$4;
    var tmp0_0 = new sam$androidx_compose_foundation_relocation_BringIntoViewParent$0(tmp_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.d1b();
    return tmp0_0;
  }
  function sam$androidx_compose_foundation_relocation_BringIntoViewParent$0(function_0) {
    this.d8u_1 = function_0;
  }
  sam$androidx_compose_foundation_relocation_BringIntoViewParent$0.prototype.x8m = function (childCoordinates, boundsProvider, $cont) {
    return this.d8u_1(childCoordinates, boundsProvider, $cont);
  };
  sam$androidx_compose_foundation_relocation_BringIntoViewParent$0.$metadata$ = classMeta('sam$androidx_compose_foundation_relocation_BringIntoViewParent$0', [BringIntoViewParent]);
  function rememberDefaultBringIntoViewParent$composable$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  rememberDefaultBringIntoViewParent$composable$slambda.prototype.o8u = function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, $cont) {
    var tmp = this.p8u(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, $cont);
    tmp.bg_1 = Unit_getInstance();
    tmp.cg_1 = null;
    return tmp.ig();
  };
  rememberDefaultBringIntoViewParent$composable$slambda.prototype.hh = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, LayoutCoordinates) : false) ? p1 : THROW_CCE();
    return this.o8u(tmp, (!(p2 == null) ? typeof p2 === 'function' : false) ? p2 : THROW_CCE(), $cont);
  };
  rememberDefaultBringIntoViewParent$composable$slambda.prototype.ig = function () {
    var suspendResult = this.bg_1;
    $sm: do
      try {
        var tmp = this.zf_1;
        if (tmp === 0) {
          this.ag_1 = 1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.cg_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  rememberDefaultBringIntoViewParent$composable$slambda.prototype.p8u = function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, completion) {
    var i = new rememberDefaultBringIntoViewParent$composable$slambda(completion);
    i.m8u_1 = _anonymous_parameter_0__qggqh8;
    i.n8u_1 = _anonymous_parameter_1__qggqgd;
    return i;
  };
  rememberDefaultBringIntoViewParent$composable$slambda.$metadata$ = classMeta('rememberDefaultBringIntoViewParent$composable$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function rememberDefaultBringIntoViewParent$composable$slambda_0(resultContinuation) {
    var i = new rememberDefaultBringIntoViewParent$composable$slambda(resultContinuation);
    var l = function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, $cont) {
      return i.o8u(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, $cont);
    };
    l.$arity = 2;
    return l;
  }
  //region block: post-declaration
  Background.prototype.x4e = foldIn;
  Background.prototype.w4e = all;
  Background.prototype.y4e = then;
  clickable$2$1$1.prototype.x4e = foldIn;
  clickable$2$1$1.prototype.w4e = all;
  clickable$2$1$1.prototype.y4e = then;
  PinnableParentConsumer.prototype.x4e = foldIn;
  PinnableParentConsumer.prototype.w4e = all;
  PinnableParentConsumer.prototype.y4e = then;
  FocusedBoundsModifier.prototype.x4e = foldIn;
  FocusedBoundsModifier.prototype.w4e = all;
  FocusedBoundsModifier.prototype.y4e = then;
  IndicationModifier.prototype.x4e = foldIn;
  IndicationModifier.prototype.w4e = all;
  IndicationModifier.prototype.y4e = then;
  DefaultDraggableState.prototype.d7z = drag$default;
  BringIntoViewChildModifier.prototype.x4e = foldIn;
  BringIntoViewChildModifier.prototype.w4e = all;
  BringIntoViewChildModifier.prototype.y4e = then;
  BringIntoViewRequesterImpl.prototype.a7n = bringIntoView$default;
  BringIntoViewRequesterModifier.prototype.x4e = foldIn;
  BringIntoViewRequesterModifier.prototype.w4e = all;
  BringIntoViewRequesterModifier.prototype.y4e = then;
  //endregion
  //region block: init
  SNAPSHOTS_INTERVAL_MILLIS = 5000;
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
